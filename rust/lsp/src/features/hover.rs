use tower_lsp_server::ls_types::*;

use crate::analysis::{position_to_offset, span_to_range, symbol_at_offset, SymbolAtOffset};
use crate::state::DocumentState;

pub fn hover(state: &DocumentState, position: Position) -> Option<Hover> {
    let offset = position_to_offset(&state.text, position);
    let symbol = symbol_at_offset(&state.info, offset)?;

    match symbol {
        SymbolAtOffset::RuleDefinition(rule) => {
            let ref_count: usize = state
                .info
                .rules
                .iter()
                .flat_map(|r| &r.references)
                .filter(|r| r.name == rule.name)
                .count();

            let content = format!(
                "```bbnf\n{} = {}\n```\n\n{} reference{}",
                rule.name,
                rule.rhs_text,
                ref_count,
                if ref_count == 1 { "" } else { "s" }
            );

            Some(Hover {
                contents: HoverContents::Markup(MarkupContent {
                    kind: MarkupKind::Markdown,
                    value: content,
                }),
                range: Some(span_to_range(&state.text, rule.name_span.0, rule.name_span.1)),
            })
        }
        SymbolAtOffset::RuleReference { name, .. } => {
            // Look up the definition.
            let def = state.info.rule_index.get(&name).map(|&i| &state.info.rules[i]);

            let content = if let Some(def) = def {
                format!("```bbnf\n{} = {}\n```", def.name, def.rhs_text)
            } else {
                format!("`{}` — undefined rule", name)
            };

            Some(Hover {
                contents: HoverContents::Markup(MarkupContent {
                    kind: MarkupKind::Markdown,
                    value: content,
                }),
                range: None,
            })
        }
    }
}
