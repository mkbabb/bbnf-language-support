use tower_lsp_server::ls_types::*;

use crate::analysis::{position_to_offset, span_to_range, symbol_at_offset, SymbolAtOffset};
use crate::state::DocumentState;

pub fn goto_definition(
    state: &DocumentState,
    uri: &Uri,
    position: Position,
) -> Option<GotoDefinitionResponse> {
    let offset = position_to_offset(&state.text, position);
    let symbol = symbol_at_offset(&state.info, offset)?;

    let name = match &symbol {
        SymbolAtOffset::RuleDefinition(rule) => &rule.name,
        SymbolAtOffset::RuleReference { name, .. } => name,
    };

    let &idx = state.info.rule_index.get(name.as_str())?;
    let rule = &state.info.rules[idx];
    let range = span_to_range(&state.text, rule.name_span.0, rule.name_span.1);

    Some(GotoDefinitionResponse::Scalar(Location {
        uri: uri.clone(),
        range,
    }))
}
