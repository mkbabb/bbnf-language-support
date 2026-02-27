use tower_lsp_server::ls_types::*;

use crate::analysis::span_to_range;
use crate::state::DocumentState;

#[allow(deprecated)]
pub fn document_symbols(state: &DocumentState) -> DocumentSymbolResponse {
    let symbols: Vec<DocumentSymbol> = state
        .info
        .rules
        .iter()
        .map(|rule| {
            let name_range = span_to_range(&state.text, rule.name_span.0, rule.name_span.1);
            let full_range = span_to_range(&state.text, rule.full_span.0, rule.full_span.1);

            DocumentSymbol {
                name: rule.name.clone(),
                detail: Some(rule.rhs_text.clone()),
                kind: SymbolKind::FUNCTION,
                tags: None,
                deprecated: None,
                range: full_range,
                selection_range: name_range,
                children: None,
            }
        })
        .collect();

    DocumentSymbolResponse::Nested(symbols)
}
