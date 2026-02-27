use tower_lsp_server::ls_types::*;

use crate::state::{DocumentInfo, RuleInfo};

/// Convert a byte offset to an LSP Position (0-based line, 0-based character).
pub fn offset_to_position(text: &str, offset: usize) -> Position {
    let offset = offset.min(text.len());
    let mut line: u32 = 0;
    let mut col: u32 = 0;
    for (i, byte) in text.bytes().enumerate() {
        if i == offset {
            break;
        }
        if byte == b'\n' {
            line += 1;
            col = 0;
        } else {
            col += 1;
        }
    }
    Position::new(line, col)
}

/// Convert an LSP Position to a byte offset.
pub fn position_to_offset(text: &str, position: Position) -> usize {
    let mut current_line: u32 = 0;
    let mut current_col: u32 = 0;
    for (i, byte) in text.bytes().enumerate() {
        if current_line == position.line && current_col == position.character {
            return i;
        }
        if byte == b'\n' {
            if current_line == position.line {
                // Position is past end of line — clamp.
                return i;
            }
            current_line += 1;
            current_col = 0;
        } else {
            current_col += 1;
        }
    }
    text.len()
}

/// Convert byte offset span to an LSP Range.
pub fn span_to_range(text: &str, start: usize, end: usize) -> Range {
    Range::new(offset_to_position(text, start), offset_to_position(text, end))
}

/// What lives at a given byte offset?
#[derive(Debug)]
pub enum SymbolAtOffset<'a> {
    /// Cursor is on the LHS definition of a rule.
    RuleDefinition(&'a RuleInfo),
    /// Cursor is on a nonterminal reference in some rule's RHS.
    RuleReference {
        /// Name of the referenced nonterminal.
        name: String,
        /// The rule that contains this reference.
        containing_rule: &'a RuleInfo,
    },
}

/// Resolve what symbol is at the given byte offset.
pub fn symbol_at_offset<'a>(info: &'a DocumentInfo, offset: usize) -> Option<SymbolAtOffset<'a>> {
    // Check rule definitions first.
    for rule in &info.rules {
        if offset >= rule.name_span.0 && offset <= rule.name_span.1 {
            return Some(SymbolAtOffset::RuleDefinition(rule));
        }
    }
    // Check references in all rules.
    for rule in &info.rules {
        for refinfo in &rule.references {
            if offset >= refinfo.span.0 && offset <= refinfo.span.1 {
                return Some(SymbolAtOffset::RuleReference {
                    name: refinfo.name.clone(),
                    containing_rule: rule,
                });
            }
        }
    }
    None
}
