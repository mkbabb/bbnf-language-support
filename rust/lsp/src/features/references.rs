use tower_lsp_server::ls_types::*;

use crate::analysis::{position_to_offset, span_to_range, symbol_at_offset, SymbolAtOffset};
use crate::state::DocumentState;

pub fn references(
    state: &DocumentState,
    uri: &Uri,
    position: Position,
    include_declaration: bool,
) -> Option<Vec<Location>> {
    let offset = position_to_offset(&state.text, position);
    let symbol = symbol_at_offset(&state.info, offset)?;

    let name = match &symbol {
        SymbolAtOffset::RuleDefinition(rule) => rule.name.clone(),
        SymbolAtOffset::RuleReference { name, .. } => name.clone(),
    };

    let mut locations = Vec::new();

    // Include the definition location.
    if include_declaration {
        if let Some(&idx) = state.info.rule_index.get(name.as_str()) {
            let rule = &state.info.rules[idx];
            locations.push(Location {
                uri: uri.clone(),
                range: span_to_range(&state.text, rule.name_span.0, rule.name_span.1),
            });
        }
    }

    // All references across all rules.
    for rule in &state.info.rules {
        for refinfo in &rule.references {
            if refinfo.name == name {
                locations.push(Location {
                    uri: uri.clone(),
                    range: span_to_range(&state.text, refinfo.span.0, refinfo.span.1),
                });
            }
        }
    }

    if locations.is_empty() {
        None
    } else {
        Some(locations)
    }
}
