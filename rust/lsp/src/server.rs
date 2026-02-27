use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;

use tower_lsp_server::jsonrpc::Result;
use tower_lsp_server::ls_types::*;
use tower_lsp_server::{Client, LanguageServer};

use crate::features;
use crate::state::DocumentState;

pub struct BbnfLanguageServer {
    client: Client,
    documents: Arc<RwLock<HashMap<Uri, DocumentState>>>,
}

impl BbnfLanguageServer {
    pub fn new(client: Client) -> Self {
        Self {
            client,
            documents: Arc::new(RwLock::new(HashMap::new())),
        }
    }

    async fn on_change(&self, uri: Uri, text: String) {
        let diagnostics;
        {
            let mut docs = self.documents.write().await;
            let state = docs
                .entry(uri.clone())
                .or_insert_with(|| DocumentState::new(String::new()));
            state.update(text);
            diagnostics = state.info.diagnostics.clone();
        }
        self.client
            .publish_diagnostics(uri, diagnostics, None)
            .await;
    }

    /// Apply incremental text edits to the stored document text.
    fn apply_incremental_changes(text: &mut String, changes: Vec<TextDocumentContentChangeEvent>) {
        for change in changes {
            if let Some(range) = change.range {
                let start = crate::analysis::position_to_offset(text, range.start);
                let end = crate::analysis::position_to_offset(text, range.end);
                text.replace_range(start..end, &change.text);
            } else {
                // Full content replacement.
                *text = change.text;
            }
        }
    }
}

/// Semantic token legend shared between server and client.
pub fn semantic_token_legend() -> SemanticTokensLegend {
    SemanticTokensLegend {
        token_types: vec![
            SemanticTokenType::new("ruleDefinition"),  // 0
            SemanticTokenType::new("ruleReference"),    // 1
            SemanticTokenType::STRING,                  // 2
            SemanticTokenType::REGEXP,                  // 3
            SemanticTokenType::OPERATOR,                // 4
            SemanticTokenType::KEYWORD,                 // 5
            SemanticTokenType::COMMENT,                 // 6
        ],
        token_modifiers: vec![
            SemanticTokenModifier::DECLARATION,
            SemanticTokenModifier::DEFINITION,
        ],
    }
}

impl LanguageServer for BbnfLanguageServer {
    async fn initialize(&self, _: InitializeParams) -> Result<InitializeResult> {
        Ok(InitializeResult {
            capabilities: ServerCapabilities {
                text_document_sync: Some(TextDocumentSyncCapability::Kind(
                    TextDocumentSyncKind::INCREMENTAL,
                )),
                hover_provider: Some(HoverProviderCapability::Simple(true)),
                definition_provider: Some(OneOf::Left(true)),
                references_provider: Some(OneOf::Left(true)),
                rename_provider: Some(OneOf::Right(RenameOptions {
                    prepare_provider: Some(true),
                    work_done_progress_options: WorkDoneProgressOptions::default(),
                })),
                completion_provider: Some(CompletionOptions {
                    trigger_characters: Some(vec![
                        "=".into(),
                        "|".into(),
                        ",".into(),
                        "(".into(),
                        "[".into(),
                        "{".into(),
                    ]),
                    ..Default::default()
                }),
                document_symbol_provider: Some(OneOf::Left(true)),
                code_lens_provider: Some(CodeLensOptions {
                    resolve_provider: Some(false),
                }),
                folding_range_provider: Some(FoldingRangeProviderCapability::Simple(true)),
                code_action_provider: Some(CodeActionProviderCapability::Simple(true)),
                document_formatting_provider: Some(OneOf::Left(true)),
                document_range_formatting_provider: Some(OneOf::Left(true)),
                document_on_type_formatting_provider: Some(DocumentOnTypeFormattingOptions {
                    first_trigger_character: ";".into(),
                    more_trigger_character: None,
                }),
                inlay_hint_provider: Some(OneOf::Left(true)),
                selection_range_provider: Some(SelectionRangeProviderCapability::Simple(true)),
                semantic_tokens_provider: Some(
                    SemanticTokensServerCapabilities::SemanticTokensOptions(
                        SemanticTokensOptions {
                            legend: semantic_token_legend(),
                            full: Some(SemanticTokensFullOptions::Bool(true)),
                            range: None,
                            ..Default::default()
                        },
                    ),
                ),
                ..Default::default()
            },
            ..Default::default()
        })
    }

    async fn initialized(&self, _: InitializedParams) {
        self.client
            .log_message(MessageType::INFO, "BBNF language server initialized")
            .await;
    }

    async fn shutdown(&self) -> Result<()> {
        Ok(())
    }

    async fn did_open(&self, params: DidOpenTextDocumentParams) {
        self.on_change(params.text_document.uri, params.text_document.text)
            .await;
    }

    async fn did_change(&self, params: DidChangeTextDocumentParams) {
        let uri = params.text_document.uri;
        let changes = params.content_changes;

        // Apply incremental edits to the stored text, then re-analyze.
        let new_text;
        {
            let mut docs = self.documents.write().await;
            if let Some(state) = docs.get_mut(&uri) {
                Self::apply_incremental_changes(&mut state.text, changes);
                new_text = state.text.clone();
            } else {
                // Document not tracked yet — take the last change as full text.
                new_text = changes
                    .into_iter()
                    .last()
                    .map(|c| c.text)
                    .unwrap_or_default();
            }
        }

        self.on_change(uri, new_text).await;
    }

    async fn did_close(&self, params: DidCloseTextDocumentParams) {
        self.documents
            .write()
            .await
            .remove(&params.text_document.uri);
    }

    async fn hover(&self, params: HoverParams) -> Result<Option<Hover>> {
        let uri = params.text_document_position_params.text_document.uri;
        let pos = params.text_document_position_params.position;
        let docs = self.documents.read().await;
        let Some(state) = docs.get(&uri) else {
            return Ok(None);
        };
        Ok(features::hover::hover(state, pos))
    }

    async fn goto_definition(
        &self,
        params: GotoDefinitionParams,
    ) -> Result<Option<GotoDefinitionResponse>> {
        let uri = params.text_document_position_params.text_document.uri.clone();
        let pos = params.text_document_position_params.position;
        let docs = self.documents.read().await;
        let Some(state) = docs.get(&uri) else {
            return Ok(None);
        };
        Ok(features::goto_definition::goto_definition(state, &uri, pos))
    }

    async fn references(&self, params: ReferenceParams) -> Result<Option<Vec<Location>>> {
        let uri = params.text_document_position.text_document.uri.clone();
        let pos = params.text_document_position.position;
        let include_decl = params.context.include_declaration;
        let docs = self.documents.read().await;
        let Some(state) = docs.get(&uri) else {
            return Ok(None);
        };
        Ok(features::references::references(state, &uri, pos, include_decl))
    }

    async fn rename(&self, params: RenameParams) -> Result<Option<WorkspaceEdit>> {
        let uri = params.text_document_position.text_document.uri.clone();
        let pos = params.text_document_position.position;
        let new_name = params.new_name;
        let docs = self.documents.read().await;
        let Some(state) = docs.get(&uri) else {
            return Ok(None);
        };
        Ok(features::rename::rename(state, &uri, pos, &new_name))
    }

    async fn prepare_rename(
        &self,
        params: TextDocumentPositionParams,
    ) -> Result<Option<PrepareRenameResponse>> {
        let uri = params.text_document.uri.clone();
        let pos = params.position;
        let docs = self.documents.read().await;
        let Some(state) = docs.get(&uri) else {
            return Ok(None);
        };
        Ok(features::rename::prepare_rename(state, pos))
    }

    async fn completion(&self, params: CompletionParams) -> Result<Option<CompletionResponse>> {
        let uri = params.text_document_position.text_document.uri;
        let docs = self.documents.read().await;
        let Some(state) = docs.get(&uri) else {
            return Ok(None);
        };
        Ok(Some(features::completion::completion(state)))
    }

    async fn document_symbol(
        &self,
        params: DocumentSymbolParams,
    ) -> Result<Option<DocumentSymbolResponse>> {
        let uri = params.text_document.uri;
        let docs = self.documents.read().await;
        let Some(state) = docs.get(&uri) else {
            return Ok(None);
        };
        Ok(Some(features::document_symbols::document_symbols(state)))
    }

    async fn code_lens(&self, params: CodeLensParams) -> Result<Option<Vec<CodeLens>>> {
        let uri = params.text_document.uri;
        let docs = self.documents.read().await;
        let Some(state) = docs.get(&uri) else {
            return Ok(None);
        };
        Ok(Some(features::code_lens::code_lens(state)))
    }

    async fn folding_range(&self, params: FoldingRangeParams) -> Result<Option<Vec<FoldingRange>>> {
        let uri = params.text_document.uri;
        let docs = self.documents.read().await;
        let Some(state) = docs.get(&uri) else {
            return Ok(None);
        };
        Ok(Some(features::folding::folding_ranges(state)))
    }

    async fn code_action(&self, params: CodeActionParams) -> Result<Option<CodeActionResponse>> {
        let uri = params.text_document.uri.clone();
        let range = params.range;
        let docs = self.documents.read().await;
        let Some(state) = docs.get(&uri) else {
            return Ok(None);
        };
        Ok(Some(features::code_actions::code_actions(
            state, &uri, range,
        )))
    }

    async fn formatting(
        &self,
        params: DocumentFormattingParams,
    ) -> Result<Option<Vec<TextEdit>>> {
        let uri = params.text_document.uri;
        let docs = self.documents.read().await;
        let Some(state) = docs.get(&uri) else {
            return Ok(None);
        };
        Ok(features::formatting::format_document(state))
    }

    async fn semantic_tokens_full(
        &self,
        params: SemanticTokensParams,
    ) -> Result<Option<SemanticTokensResult>> {
        let uri = params.text_document.uri;
        let docs = self.documents.read().await;
        let Some(state) = docs.get(&uri) else {
            return Ok(None);
        };
        Ok(Some(features::semantic_tokens::semantic_tokens_full(state)))
    }

    async fn inlay_hint(&self, params: InlayHintParams) -> Result<Option<Vec<InlayHint>>> {
        let uri = params.text_document.uri;
        let docs = self.documents.read().await;
        let Some(state) = docs.get(&uri) else {
            return Ok(None);
        };
        Ok(Some(features::inlay_hints::inlay_hints(state, params.range)))
    }

    async fn selection_range(
        &self,
        params: SelectionRangeParams,
    ) -> Result<Option<Vec<SelectionRange>>> {
        let uri = params.text_document.uri;
        let docs = self.documents.read().await;
        let Some(state) = docs.get(&uri) else {
            return Ok(None);
        };
        Ok(Some(features::selection_range::selection_ranges(
            state,
            params.positions,
        )))
    }

    async fn range_formatting(
        &self,
        params: DocumentRangeFormattingParams,
    ) -> Result<Option<Vec<TextEdit>>> {
        let uri = params.text_document.uri;
        let docs = self.documents.read().await;
        let Some(state) = docs.get(&uri) else {
            return Ok(None);
        };
        Ok(features::formatting::format_range(state, params.range))
    }

    async fn on_type_formatting(
        &self,
        params: DocumentOnTypeFormattingParams,
    ) -> Result<Option<Vec<TextEdit>>> {
        let uri = params.text_document_position.text_document.uri;
        let docs = self.documents.read().await;
        let Some(state) = docs.get(&uri) else {
            return Ok(None);
        };
        Ok(features::formatting::format_on_type(
            state,
            params.text_document_position.position,
        ))
    }
}
