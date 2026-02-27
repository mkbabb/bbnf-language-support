use tower_lsp_server::ls_types::*;

use crate::analysis::span_to_range;
use crate::state::DocumentState;

/// Produce inlay hints showing FIRST set and nullability info at rule definitions.
pub fn inlay_hints(state: &DocumentState, range: Range) -> Vec<InlayHint> {
    let mut hints = Vec::new();

    for rule in &state.info.rules {
        let rule_range = span_to_range(&state.text, rule.name_span.0, rule.name_span.1);

        // Only produce hints for rules within the requested range.
        if rule_range.start.line < range.start.line || rule_range.start.line > range.end.line {
            continue;
        }

        // FIRST set label.
        if let Some(first_label) = state.info.first_set_labels.get(&rule.name) {
            let nullable = state.info.nullable_rules.contains(&rule.name);
            let label = if nullable {
                format!(" FIRST: {}  (nullable)", first_label)
            } else {
                format!(" FIRST: {}", first_label)
            };

            hints.push(InlayHint {
                position: Position::new(rule_range.start.line, rule_range.end.character),
                label: InlayHintLabel::String(label),
                kind: Some(InlayHintKind::TYPE),
                text_edits: None,
                tooltip: Some(InlayHintTooltip::String(format!(
                    "Characters that can begin a parse of `{}`",
                    rule.name
                ))),
                padding_left: Some(true),
                padding_right: None,
                data: None,
            });
        }
    }

    hints
}
