use tower_lsp_server::ls_types::*;

use crate::analysis::offset_to_position;
use crate::state::DocumentState;

pub fn folding_ranges(state: &DocumentState) -> Vec<FoldingRange> {
    state
        .info
        .rules
        .iter()
        .filter_map(|rule| {
            let start = offset_to_position(&state.text, rule.full_span.0);
            let end = offset_to_position(&state.text, rule.full_span.1);

            // Only fold if the rule spans multiple lines.
            if end.line > start.line {
                Some(FoldingRange {
                    start_line: start.line,
                    start_character: Some(start.character),
                    end_line: end.line,
                    end_character: Some(end.character),
                    kind: Some(FoldingRangeKind::Region),
                    collapsed_text: Some(format!("{} = ...", rule.name)),
                })
            } else {
                None
            }
        })
        .collect()
}
