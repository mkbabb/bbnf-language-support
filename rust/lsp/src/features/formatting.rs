use tower_lsp_server::ls_types::*;

use bbnf::grammar::{BBNFGrammar, Expression, Token, AST};

/// Extract the inner value from a TokenExpression.
fn get_inner_expression<'a, T>(tok: &'a Token<'a, T>) -> &'a T {
    &tok.value
}

use crate::state::DocumentState;

const MAX_WIDTH: usize = 66;

pub fn format_document(state: &DocumentState) -> Option<Vec<TextEdit>> {
    let parser = BBNFGrammar::grammar();
    let (result, _) = parser.parse_return_state(&state.text);
    let ast = result?;

    let formatted = format_ast(&ast);

    // Replace entire document.
    let end = offset_to_end(&state.text);
    Some(vec![TextEdit {
        range: Range::new(Position::new(0, 0), end),
        new_text: formatted,
    }])
}

fn offset_to_end(text: &str) -> Position {
    let mut line: u32 = 0;
    let mut col: u32 = 0;
    for byte in text.bytes() {
        if byte == b'\n' {
            line += 1;
            col = 0;
        } else {
            col += 1;
        }
    }
    Position::new(line, col)
}

fn format_ast(ast: &AST<'_>) -> String {
    let mut lines = Vec::new();
    for (lhs, rhs) in ast.iter() {
        if let Expression::Nonterminal(Token { value: name, .. }) = lhs {
            let rhs_str = format_expression(rhs, 0);
            let rule_line = format!("{} = {}", name, rhs_str);

            // Add terminator.
            lines.push(format!("{};", rule_line));
            lines.push(String::new()); // blank line between rules
        }
    }

    // Remove trailing blank line.
    if lines.last().is_some_and(|l| l.is_empty()) {
        lines.pop();
    }

    lines.join("\n") + "\n"
}

fn format_expression(expr: &Expression<'_>, indent_level: usize) -> String {
    match expr {
        Expression::Literal(tok) => {
            let s = &tok.value;
            if s.contains('"') && !s.contains('\'') {
                format!("'{}'", s)
            } else {
                format!("\"{}\"", s)
            }
        }
        Expression::Nonterminal(tok) => tok.value.to_string(),
        Expression::Regex(tok) => format!("/{}/", tok.value),
        Expression::Epsilon(_) => "epsilon".into(),
        Expression::Group(inner) => {
            let inner_str = format_expression(get_inner_expression(inner), indent_level + 1);
            format!("({})", inner_str)
        }
        Expression::Optional(inner) => {
            let inner_str = format_expression(get_inner_expression(inner), indent_level + 1);
            format!("[{}]", inner_str)
        }
        Expression::Many(inner) => {
            let inner_str = format_expression(get_inner_expression(inner), indent_level + 1);
            format!("{{{}}}", inner_str)
        }
        Expression::Many1(inner) => {
            let inner_str = format_expression(get_inner_expression(inner), indent_level);
            format!("{}+", inner_str)
        }
        Expression::OptionalWhitespace(inner) => {
            let inner_str = format_expression(get_inner_expression(inner), indent_level);
            format!("{}?w", inner_str)
        }
        Expression::Skip(l, r) => {
            format!(
                "{} << {}",
                format_expression(get_inner_expression(l), indent_level),
                format_expression(get_inner_expression(r), indent_level),
            )
        }
        Expression::Next(l, r) => {
            format!(
                "{} >> {}",
                format_expression(get_inner_expression(l), indent_level),
                format_expression(get_inner_expression(r), indent_level),
            )
        }
        Expression::Minus(l, r) => {
            format!(
                "{} - {}",
                format_expression(get_inner_expression(l), indent_level),
                format_expression(get_inner_expression(r), indent_level),
            )
        }
        Expression::Concatenation(inner) => {
            let parts: Vec<String> = get_inner_expression(inner)
                .iter()
                .map(|e| format_expression(e, indent_level))
                .collect();
            let flat = parts.join(", ");
            if flat.len() + indent_level * 4 <= MAX_WIDTH {
                flat
            } else {
                let indent = "    ".repeat(indent_level + 1);
                let sep = format!(",\n{}", indent);
                format!("\n{}{}", indent, parts.join(&sep))
            }
        }
        Expression::Alternation(inner) => {
            let parts: Vec<String> = get_inner_expression(inner)
                .iter()
                .map(|e| format_expression(e, indent_level))
                .collect();
            let flat = parts.join(" | ");
            if flat.len() + indent_level * 4 <= MAX_WIDTH {
                flat
            } else {
                let indent = "    ".repeat(indent_level + 1);
                let sep = format!("\n{}| ", indent);
                format!("\n{}{}", indent, parts.join(&sep))
            }
        }
        Expression::Rule(rhs, mapping) => {
            let rhs_str = format_expression(rhs, indent_level);
            if let Some(m) = mapping {
                format!("{} {}", rhs_str, format_expression(m, indent_level))
            } else {
                rhs_str
            }
        }
        Expression::ProductionRule(lhs, rhs) => {
            format!(
                "{} = {}",
                format_expression(lhs, indent_level),
                format_expression(rhs, indent_level),
            )
        }
        Expression::MappedExpression((expr_tok, mapping_tok)) => {
            format!(
                "{} {}",
                format_expression(get_inner_expression(expr_tok), indent_level),
                format_expression(get_inner_expression(mapping_tok), indent_level),
            )
        }
        Expression::DebugExpression((expr_tok, label)) => {
            format!(
                "{}#{}",
                format_expression(get_inner_expression(expr_tok), indent_level),
                label,
            )
        }
        Expression::MappingFn(tok) => format!("=> {}", tok.value),
    }
}
