"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const chalk = require("chalk");
const vscode = require("vscode");
const prettier = require("prettier");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const vscode__namespace = /* @__PURE__ */ _interopNamespaceDefault(vscode);
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var docExports$1 = {};
var doc$1 = {
  get exports() {
    return docExports$1;
  },
  set exports(v) {
    docExports$1 = v;
  }
};
(function(module2, exports2) {
  (function(factory) {
    {
      module2.exports = factory();
    }
  })(function() {
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __commonJS = (cb, mod) => function __require() {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
    var require_doc_js_umd = __commonJS({
      "dist/_doc.js.umd.js"(exports22, module22) {
        var __create = Object.create;
        var __defProp22 = Object.defineProperty;
        var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
        var __getOwnPropNames2 = Object.getOwnPropertyNames;
        var __getProtoOf = Object.getPrototypeOf;
        var __hasOwnProp = Object.prototype.hasOwnProperty;
        var __esm = (fn, res) => function __init() {
          return fn && (res = (0, fn[__getOwnPropNames2(fn)[0]])(fn = 0)), res;
        };
        var __commonJS2 = (cb, mod) => function __require() {
          return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = {
            exports: {}
          }).exports, mod), mod.exports;
        };
        var __export = (target, all2) => {
          for (var name in all2)
            __defProp22(target, name, {
              get: all2[name],
              enumerable: true
            });
        };
        var __copyProps = (to, from, except, desc) => {
          if (from && typeof from === "object" || typeof from === "function") {
            for (let key of __getOwnPropNames2(from))
              if (!__hasOwnProp.call(to, key) && key !== except)
                __defProp22(to, key, {
                  get: () => from[key],
                  enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable
                });
          }
          return to;
        };
        var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp22(target, "default", {
          value: mod,
          enumerable: true
        }) : target, mod));
        var __toCommonJS = (mod) => __copyProps(__defProp22({}, "__esModule", {
          value: true
        }), mod);
        var init_define_process = __esm({
          "<define:process>"() {
          }
        });
        var require_doc_builders = __commonJS2({
          "src/document/doc-builders.js"(exports222, module222) {
            init_define_process();
            function concat(parts) {
              return {
                type: "concat",
                parts
              };
            }
            function indent(contents) {
              return {
                type: "indent",
                contents
              };
            }
            function align(widthOrString, contents) {
              return {
                type: "align",
                contents,
                n: widthOrString
              };
            }
            function group2(contents) {
              let opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              return {
                type: "group",
                id: opts.id,
                contents,
                break: Boolean(opts.shouldBreak),
                expandedStates: opts.expandedStates
              };
            }
            function dedentToRoot(contents) {
              return align(Number.NEGATIVE_INFINITY, contents);
            }
            function markAsRoot(contents) {
              return align({
                type: "root"
              }, contents);
            }
            function dedent(contents) {
              return align(-1, contents);
            }
            function conditionalGroup(states, opts) {
              return group2(states[0], Object.assign(Object.assign({}, opts), {}, {
                expandedStates: states
              }));
            }
            function fill(parts) {
              return {
                type: "fill",
                parts
              };
            }
            function ifBreak(breakContents, flatContents) {
              let opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              return {
                type: "if-break",
                breakContents,
                flatContents,
                groupId: opts.groupId
              };
            }
            function indentIfBreak(contents, opts) {
              return {
                type: "indent-if-break",
                contents,
                groupId: opts.groupId,
                negate: opts.negate
              };
            }
            function lineSuffix(contents) {
              return {
                type: "line-suffix",
                contents
              };
            }
            var lineSuffixBoundary = {
              type: "line-suffix-boundary"
            };
            var breakParent = {
              type: "break-parent"
            };
            var trim = {
              type: "trim"
            };
            var hardlineWithoutBreakParent = {
              type: "line",
              hard: true
            };
            var literallineWithoutBreakParent = {
              type: "line",
              hard: true,
              literal: true
            };
            var line = {
              type: "line"
            };
            var softline = {
              type: "line",
              soft: true
            };
            var hardline = concat([hardlineWithoutBreakParent, breakParent]);
            var literalline = concat([literallineWithoutBreakParent, breakParent]);
            var cursor = {
              type: "cursor",
              placeholder: Symbol("cursor")
            };
            function join(sep, arr) {
              const res = [];
              for (let i = 0; i < arr.length; i++) {
                if (i !== 0) {
                  res.push(sep);
                }
                res.push(arr[i]);
              }
              return concat(res);
            }
            function addAlignmentToDoc(doc2, size, tabWidth) {
              let aligned = doc2;
              if (size > 0) {
                for (let i = 0; i < Math.floor(size / tabWidth); ++i) {
                  aligned = indent(aligned);
                }
                aligned = align(size % tabWidth, aligned);
                aligned = align(Number.NEGATIVE_INFINITY, aligned);
              }
              return aligned;
            }
            function label(label2, contents) {
              return {
                type: "label",
                label: label2,
                contents
              };
            }
            module222.exports = {
              concat,
              join,
              line,
              softline,
              hardline,
              literalline,
              group: group2,
              conditionalGroup,
              fill,
              lineSuffix,
              lineSuffixBoundary,
              cursor,
              breakParent,
              ifBreak,
              trim,
              indent,
              indentIfBreak,
              align,
              addAlignmentToDoc,
              markAsRoot,
              dedentToRoot,
              dedent,
              hardlineWithoutBreakParent,
              literallineWithoutBreakParent,
              label
            };
          }
        });
        var require_end_of_line = __commonJS2({
          "src/common/end-of-line.js"(exports222, module222) {
            init_define_process();
            function guessEndOfLine(text) {
              const index = text.indexOf("\r");
              if (index >= 0) {
                return text.charAt(index + 1) === "\n" ? "crlf" : "cr";
              }
              return "lf";
            }
            function convertEndOfLineToChars(value) {
              switch (value) {
                case "cr":
                  return "\r";
                case "crlf":
                  return "\r\n";
                default:
                  return "\n";
              }
            }
            function countEndOfLineChars(text, eol) {
              let regex2;
              switch (eol) {
                case "\n":
                  regex2 = /\n/g;
                  break;
                case "\r":
                  regex2 = /\r/g;
                  break;
                case "\r\n":
                  regex2 = /\r\n/g;
                  break;
                default:
                  throw new Error(`Unexpected "eol" ${JSON.stringify(eol)}.`);
              }
              const endOfLines = text.match(regex2);
              return endOfLines ? endOfLines.length : 0;
            }
            function normalizeEndOfLine(text) {
              return text.replace(/\r\n?/g, "\n");
            }
            module222.exports = {
              guessEndOfLine,
              convertEndOfLineToChars,
              countEndOfLineChars,
              normalizeEndOfLine
            };
          }
        });
        var require_get_last = __commonJS2({
          "src/utils/get-last.js"(exports222, module222) {
            init_define_process();
            var getLast = (arr) => arr[arr.length - 1];
            module222.exports = getLast;
          }
        });
        function ansiRegex() {
          let {
            onlyFirst = false
          } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          const pattern = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
          return new RegExp(pattern, onlyFirst ? void 0 : "g");
        }
        var init_ansi_regex = __esm({
          "node_modules/strip-ansi/node_modules/ansi-regex/index.js"() {
            init_define_process();
          }
        });
        function stripAnsi(string2) {
          if (typeof string2 !== "string") {
            throw new TypeError(`Expected a \`string\`, got \`${typeof string2}\``);
          }
          return string2.replace(ansiRegex(), "");
        }
        var init_strip_ansi = __esm({
          "node_modules/strip-ansi/index.js"() {
            init_define_process();
            init_ansi_regex();
          }
        });
        function isFullwidthCodePoint(codePoint) {
          if (!Number.isInteger(codePoint)) {
            return false;
          }
          return codePoint >= 4352 && (codePoint <= 4447 || codePoint === 9001 || codePoint === 9002 || 11904 <= codePoint && codePoint <= 12871 && codePoint !== 12351 || 12880 <= codePoint && codePoint <= 19903 || 19968 <= codePoint && codePoint <= 42182 || 43360 <= codePoint && codePoint <= 43388 || 44032 <= codePoint && codePoint <= 55203 || 63744 <= codePoint && codePoint <= 64255 || 65040 <= codePoint && codePoint <= 65049 || 65072 <= codePoint && codePoint <= 65131 || 65281 <= codePoint && codePoint <= 65376 || 65504 <= codePoint && codePoint <= 65510 || 110592 <= codePoint && codePoint <= 110593 || 127488 <= codePoint && codePoint <= 127569 || 131072 <= codePoint && codePoint <= 262141);
        }
        var init_is_fullwidth_code_point = __esm({
          "node_modules/is-fullwidth-code-point/index.js"() {
            init_define_process();
          }
        });
        var require_emoji_regex = __commonJS2({
          "node_modules/emoji-regex/index.js"(exports222, module222) {
            init_define_process();
            module222.exports = function() {
              return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
            };
          }
        });
        var string_width_exports = {};
        __export(string_width_exports, {
          default: () => stringWidth
        });
        function stringWidth(string2) {
          if (typeof string2 !== "string" || string2.length === 0) {
            return 0;
          }
          string2 = stripAnsi(string2);
          if (string2.length === 0) {
            return 0;
          }
          string2 = string2.replace((0, import_emoji_regex.default)(), "  ");
          let width = 0;
          for (let index = 0; index < string2.length; index++) {
            const codePoint = string2.codePointAt(index);
            if (codePoint <= 31 || codePoint >= 127 && codePoint <= 159) {
              continue;
            }
            if (codePoint >= 768 && codePoint <= 879) {
              continue;
            }
            if (codePoint > 65535) {
              index++;
            }
            width += isFullwidthCodePoint(codePoint) ? 2 : 1;
          }
          return width;
        }
        var import_emoji_regex;
        var init_string_width = __esm({
          "node_modules/string-width/index.js"() {
            init_define_process();
            init_strip_ansi();
            init_is_fullwidth_code_point();
            import_emoji_regex = __toESM(require_emoji_regex());
          }
        });
        var require_get_string_width = __commonJS2({
          "src/utils/get-string-width.js"(exports222, module222) {
            init_define_process();
            var stringWidth2 = (init_string_width(), __toCommonJS(string_width_exports)).default;
            var notAsciiRegex = /[^\x20-\x7F]/;
            function getStringWidth(text) {
              if (!text) {
                return 0;
              }
              if (!notAsciiRegex.test(text)) {
                return text.length;
              }
              return stringWidth2(text);
            }
            module222.exports = getStringWidth;
          }
        });
        var require_doc_utils = __commonJS2({
          "src/document/doc-utils.js"(exports222, module222) {
            init_define_process();
            var getLast = require_get_last();
            var {
              literalline,
              join
            } = require_doc_builders();
            var isConcat = (doc2) => Array.isArray(doc2) || doc2 && doc2.type === "concat";
            var getDocParts = (doc2) => {
              if (Array.isArray(doc2)) {
                return doc2;
              }
              if (doc2.type !== "concat" && doc2.type !== "fill") {
                throw new Error("Expect doc type to be `concat` or `fill`.");
              }
              return doc2.parts;
            };
            var traverseDocOnExitStackMarker = {};
            function traverseDoc(doc2, onEnter, onExit, shouldTraverseConditionalGroups) {
              const docsStack = [doc2];
              while (docsStack.length > 0) {
                const doc22 = docsStack.pop();
                if (doc22 === traverseDocOnExitStackMarker) {
                  onExit(docsStack.pop());
                  continue;
                }
                if (onExit) {
                  docsStack.push(doc22, traverseDocOnExitStackMarker);
                }
                if (!onEnter || onEnter(doc22) !== false) {
                  if (isConcat(doc22) || doc22.type === "fill") {
                    const parts = getDocParts(doc22);
                    for (let ic = parts.length, i = ic - 1; i >= 0; --i) {
                      docsStack.push(parts[i]);
                    }
                  } else if (doc22.type === "if-break") {
                    if (doc22.flatContents) {
                      docsStack.push(doc22.flatContents);
                    }
                    if (doc22.breakContents) {
                      docsStack.push(doc22.breakContents);
                    }
                  } else if (doc22.type === "group" && doc22.expandedStates) {
                    if (shouldTraverseConditionalGroups) {
                      for (let ic = doc22.expandedStates.length, i = ic - 1; i >= 0; --i) {
                        docsStack.push(doc22.expandedStates[i]);
                      }
                    } else {
                      docsStack.push(doc22.contents);
                    }
                  } else if (doc22.contents) {
                    docsStack.push(doc22.contents);
                  }
                }
              }
            }
            function mapDoc(doc2, cb) {
              const mapped = /* @__PURE__ */ new Map();
              return rec(doc2);
              function rec(doc22) {
                if (mapped.has(doc22)) {
                  return mapped.get(doc22);
                }
                const result = process2(doc22);
                mapped.set(doc22, result);
                return result;
              }
              function process2(doc22) {
                if (Array.isArray(doc22)) {
                  return cb(doc22.map(rec));
                }
                if (doc22.type === "concat" || doc22.type === "fill") {
                  const parts = doc22.parts.map(rec);
                  return cb(Object.assign(Object.assign({}, doc22), {}, {
                    parts
                  }));
                }
                if (doc22.type === "if-break") {
                  const breakContents = doc22.breakContents && rec(doc22.breakContents);
                  const flatContents = doc22.flatContents && rec(doc22.flatContents);
                  return cb(Object.assign(Object.assign({}, doc22), {}, {
                    breakContents,
                    flatContents
                  }));
                }
                if (doc22.type === "group" && doc22.expandedStates) {
                  const expandedStates = doc22.expandedStates.map(rec);
                  const contents = expandedStates[0];
                  return cb(Object.assign(Object.assign({}, doc22), {}, {
                    contents,
                    expandedStates
                  }));
                }
                if (doc22.contents) {
                  const contents = rec(doc22.contents);
                  return cb(Object.assign(Object.assign({}, doc22), {}, {
                    contents
                  }));
                }
                return cb(doc22);
              }
            }
            function findInDoc(doc2, fn, defaultValue) {
              let result = defaultValue;
              let hasStopped = false;
              function findInDocOnEnterFn(doc22) {
                const maybeResult = fn(doc22);
                if (maybeResult !== void 0) {
                  hasStopped = true;
                  result = maybeResult;
                }
                if (hasStopped) {
                  return false;
                }
              }
              traverseDoc(doc2, findInDocOnEnterFn);
              return result;
            }
            function willBreakFn(doc2) {
              if (doc2.type === "group" && doc2.break) {
                return true;
              }
              if (doc2.type === "line" && doc2.hard) {
                return true;
              }
              if (doc2.type === "break-parent") {
                return true;
              }
            }
            function willBreak(doc2) {
              return findInDoc(doc2, willBreakFn, false);
            }
            function breakParentGroup(groupStack) {
              if (groupStack.length > 0) {
                const parentGroup = getLast(groupStack);
                if (!parentGroup.expandedStates && !parentGroup.break) {
                  parentGroup.break = "propagated";
                }
              }
              return null;
            }
            function propagateBreaks(doc2) {
              const alreadyVisitedSet = /* @__PURE__ */ new Set();
              const groupStack = [];
              function propagateBreaksOnEnterFn(doc22) {
                if (doc22.type === "break-parent") {
                  breakParentGroup(groupStack);
                }
                if (doc22.type === "group") {
                  groupStack.push(doc22);
                  if (alreadyVisitedSet.has(doc22)) {
                    return false;
                  }
                  alreadyVisitedSet.add(doc22);
                }
              }
              function propagateBreaksOnExitFn(doc22) {
                if (doc22.type === "group") {
                  const group2 = groupStack.pop();
                  if (group2.break) {
                    breakParentGroup(groupStack);
                  }
                }
              }
              traverseDoc(doc2, propagateBreaksOnEnterFn, propagateBreaksOnExitFn, true);
            }
            function removeLinesFn(doc2) {
              if (doc2.type === "line" && !doc2.hard) {
                return doc2.soft ? "" : " ";
              }
              if (doc2.type === "if-break") {
                return doc2.flatContents || "";
              }
              return doc2;
            }
            function removeLines(doc2) {
              return mapDoc(doc2, removeLinesFn);
            }
            var isHardline = (doc2, nextDoc) => doc2 && doc2.type === "line" && doc2.hard && nextDoc && nextDoc.type === "break-parent";
            function stripDocTrailingHardlineFromDoc(doc2) {
              if (!doc2) {
                return doc2;
              }
              if (isConcat(doc2) || doc2.type === "fill") {
                const parts = getDocParts(doc2);
                while (parts.length > 1 && isHardline(...parts.slice(-2))) {
                  parts.length -= 2;
                }
                if (parts.length > 0) {
                  const lastPart = stripDocTrailingHardlineFromDoc(getLast(parts));
                  parts[parts.length - 1] = lastPart;
                }
                return Array.isArray(doc2) ? parts : Object.assign(Object.assign({}, doc2), {}, {
                  parts
                });
              }
              switch (doc2.type) {
                case "align":
                case "indent":
                case "indent-if-break":
                case "group":
                case "line-suffix":
                case "label": {
                  const contents = stripDocTrailingHardlineFromDoc(doc2.contents);
                  return Object.assign(Object.assign({}, doc2), {}, {
                    contents
                  });
                }
                case "if-break": {
                  const breakContents = stripDocTrailingHardlineFromDoc(doc2.breakContents);
                  const flatContents = stripDocTrailingHardlineFromDoc(doc2.flatContents);
                  return Object.assign(Object.assign({}, doc2), {}, {
                    breakContents,
                    flatContents
                  });
                }
              }
              return doc2;
            }
            function stripTrailingHardline(doc2) {
              return stripDocTrailingHardlineFromDoc(cleanDoc(doc2));
            }
            function cleanDocFn(doc2) {
              switch (doc2.type) {
                case "fill":
                  if (doc2.parts.every((part) => part === "")) {
                    return "";
                  }
                  break;
                case "group":
                  if (!doc2.contents && !doc2.id && !doc2.break && !doc2.expandedStates) {
                    return "";
                  }
                  if (doc2.contents.type === "group" && doc2.contents.id === doc2.id && doc2.contents.break === doc2.break && doc2.contents.expandedStates === doc2.expandedStates) {
                    return doc2.contents;
                  }
                  break;
                case "align":
                case "indent":
                case "indent-if-break":
                case "line-suffix":
                  if (!doc2.contents) {
                    return "";
                  }
                  break;
                case "if-break":
                  if (!doc2.flatContents && !doc2.breakContents) {
                    return "";
                  }
                  break;
              }
              if (!isConcat(doc2)) {
                return doc2;
              }
              const parts = [];
              for (const part of getDocParts(doc2)) {
                if (!part) {
                  continue;
                }
                const [currentPart, ...restParts] = isConcat(part) ? getDocParts(part) : [part];
                if (typeof currentPart === "string" && typeof getLast(parts) === "string") {
                  parts[parts.length - 1] += currentPart;
                } else {
                  parts.push(currentPart);
                }
                parts.push(...restParts);
              }
              if (parts.length === 0) {
                return "";
              }
              if (parts.length === 1) {
                return parts[0];
              }
              return Array.isArray(doc2) ? parts : Object.assign(Object.assign({}, doc2), {}, {
                parts
              });
            }
            function cleanDoc(doc2) {
              return mapDoc(doc2, (currentDoc) => cleanDocFn(currentDoc));
            }
            function normalizeParts(parts) {
              const newParts = [];
              const restParts = parts.filter(Boolean);
              while (restParts.length > 0) {
                const part = restParts.shift();
                if (!part) {
                  continue;
                }
                if (isConcat(part)) {
                  restParts.unshift(...getDocParts(part));
                  continue;
                }
                if (newParts.length > 0 && typeof getLast(newParts) === "string" && typeof part === "string") {
                  newParts[newParts.length - 1] += part;
                  continue;
                }
                newParts.push(part);
              }
              return newParts;
            }
            function normalizeDoc(doc2) {
              return mapDoc(doc2, (currentDoc) => {
                if (Array.isArray(currentDoc)) {
                  return normalizeParts(currentDoc);
                }
                if (!currentDoc.parts) {
                  return currentDoc;
                }
                return Object.assign(Object.assign({}, currentDoc), {}, {
                  parts: normalizeParts(currentDoc.parts)
                });
              });
            }
            function replaceEndOfLine(doc2) {
              return mapDoc(doc2, (currentDoc) => typeof currentDoc === "string" && currentDoc.includes("\n") ? replaceTextEndOfLine(currentDoc) : currentDoc);
            }
            function replaceTextEndOfLine(text) {
              let replacement = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : literalline;
              return join(replacement, text.split("\n")).parts;
            }
            function canBreakFn(doc2) {
              if (doc2.type === "line") {
                return true;
              }
            }
            function canBreak(doc2) {
              return findInDoc(doc2, canBreakFn, false);
            }
            module222.exports = {
              isConcat,
              getDocParts,
              willBreak,
              traverseDoc,
              findInDoc,
              mapDoc,
              propagateBreaks,
              removeLines,
              stripTrailingHardline,
              normalizeParts,
              normalizeDoc,
              cleanDoc,
              replaceTextEndOfLine,
              replaceEndOfLine,
              canBreak
            };
          }
        });
        var require_doc_printer = __commonJS2({
          "src/document/doc-printer.js"(exports222, module222) {
            init_define_process();
            var {
              convertEndOfLineToChars
            } = require_end_of_line();
            var getLast = require_get_last();
            var getStringWidth = require_get_string_width();
            var {
              fill,
              cursor,
              indent
            } = require_doc_builders();
            var {
              isConcat,
              getDocParts
            } = require_doc_utils();
            var groupModeMap;
            var MODE_BREAK = 1;
            var MODE_FLAT = 2;
            function rootIndent() {
              return {
                value: "",
                length: 0,
                queue: []
              };
            }
            function makeIndent(ind, options) {
              return generateInd(ind, {
                type: "indent"
              }, options);
            }
            function makeAlign(indent2, widthOrDoc, options) {
              if (widthOrDoc === Number.NEGATIVE_INFINITY) {
                return indent2.root || rootIndent();
              }
              if (widthOrDoc < 0) {
                return generateInd(indent2, {
                  type: "dedent"
                }, options);
              }
              if (!widthOrDoc) {
                return indent2;
              }
              if (widthOrDoc.type === "root") {
                return Object.assign(Object.assign({}, indent2), {}, {
                  root: indent2
                });
              }
              const alignType = typeof widthOrDoc === "string" ? "stringAlign" : "numberAlign";
              return generateInd(indent2, {
                type: alignType,
                n: widthOrDoc
              }, options);
            }
            function generateInd(ind, newPart, options) {
              const queue = newPart.type === "dedent" ? ind.queue.slice(0, -1) : [...ind.queue, newPart];
              let value = "";
              let length = 0;
              let lastTabs = 0;
              let lastSpaces = 0;
              for (const part of queue) {
                switch (part.type) {
                  case "indent":
                    flush();
                    if (options.useTabs) {
                      addTabs(1);
                    } else {
                      addSpaces(options.tabWidth);
                    }
                    break;
                  case "stringAlign":
                    flush();
                    value += part.n;
                    length += part.n.length;
                    break;
                  case "numberAlign":
                    lastTabs += 1;
                    lastSpaces += part.n;
                    break;
                  default:
                    throw new Error(`Unexpected type '${part.type}'`);
                }
              }
              flushSpaces();
              return Object.assign(Object.assign({}, ind), {}, {
                value,
                length,
                queue
              });
              function addTabs(count) {
                value += "	".repeat(count);
                length += options.tabWidth * count;
              }
              function addSpaces(count) {
                value += " ".repeat(count);
                length += count;
              }
              function flush() {
                if (options.useTabs) {
                  flushTabs();
                } else {
                  flushSpaces();
                }
              }
              function flushTabs() {
                if (lastTabs > 0) {
                  addTabs(lastTabs);
                }
                resetLast();
              }
              function flushSpaces() {
                if (lastSpaces > 0) {
                  addSpaces(lastSpaces);
                }
                resetLast();
              }
              function resetLast() {
                lastTabs = 0;
                lastSpaces = 0;
              }
            }
            function trim(out) {
              if (out.length === 0) {
                return 0;
              }
              let trimCount = 0;
              while (out.length > 0 && typeof getLast(out) === "string" && /^[\t ]*$/.test(getLast(out))) {
                trimCount += out.pop().length;
              }
              if (out.length > 0 && typeof getLast(out) === "string") {
                const trimmed = getLast(out).replace(/[\t ]*$/, "");
                trimCount += getLast(out).length - trimmed.length;
                out[out.length - 1] = trimmed;
              }
              return trimCount;
            }
            function fits(next, restCommands, width, hasLineSuffix, mustBeFlat) {
              let restIdx = restCommands.length;
              const cmds = [next];
              const out = [];
              while (width >= 0) {
                if (cmds.length === 0) {
                  if (restIdx === 0) {
                    return true;
                  }
                  cmds.push(restCommands[--restIdx]);
                  continue;
                }
                const {
                  mode,
                  doc: doc2
                } = cmds.pop();
                if (typeof doc2 === "string") {
                  out.push(doc2);
                  width -= getStringWidth(doc2);
                } else if (isConcat(doc2) || doc2.type === "fill") {
                  const parts = getDocParts(doc2);
                  for (let i = parts.length - 1; i >= 0; i--) {
                    cmds.push({
                      mode,
                      doc: parts[i]
                    });
                  }
                } else {
                  switch (doc2.type) {
                    case "indent":
                    case "align":
                    case "indent-if-break":
                    case "label":
                      cmds.push({
                        mode,
                        doc: doc2.contents
                      });
                      break;
                    case "trim":
                      width += trim(out);
                      break;
                    case "group": {
                      if (mustBeFlat && doc2.break) {
                        return false;
                      }
                      const groupMode = doc2.break ? MODE_BREAK : mode;
                      const contents = doc2.expandedStates && groupMode === MODE_BREAK ? getLast(doc2.expandedStates) : doc2.contents;
                      cmds.push({
                        mode: groupMode,
                        doc: contents
                      });
                      break;
                    }
                    case "if-break": {
                      const groupMode = doc2.groupId ? groupModeMap[doc2.groupId] || MODE_FLAT : mode;
                      const contents = groupMode === MODE_BREAK ? doc2.breakContents : doc2.flatContents;
                      if (contents) {
                        cmds.push({
                          mode,
                          doc: contents
                        });
                      }
                      break;
                    }
                    case "line":
                      if (mode === MODE_BREAK || doc2.hard) {
                        return true;
                      }
                      if (!doc2.soft) {
                        out.push(" ");
                        width--;
                      }
                      break;
                    case "line-suffix":
                      hasLineSuffix = true;
                      break;
                    case "line-suffix-boundary":
                      if (hasLineSuffix) {
                        return false;
                      }
                      break;
                  }
                }
              }
              return false;
            }
            function printDocToString(doc2, options) {
              groupModeMap = {};
              const width = options.printWidth;
              const newLine = convertEndOfLineToChars(options.endOfLine);
              let pos = 0;
              const cmds = [{
                ind: rootIndent(),
                mode: MODE_BREAK,
                doc: doc2
              }];
              const out = [];
              let shouldRemeasure = false;
              const lineSuffix = [];
              while (cmds.length > 0) {
                const {
                  ind,
                  mode,
                  doc: doc22
                } = cmds.pop();
                if (typeof doc22 === "string") {
                  const formatted = newLine !== "\n" ? doc22.replace(/\n/g, newLine) : doc22;
                  out.push(formatted);
                  pos += getStringWidth(formatted);
                } else if (isConcat(doc22)) {
                  const parts = getDocParts(doc22);
                  for (let i = parts.length - 1; i >= 0; i--) {
                    cmds.push({
                      ind,
                      mode,
                      doc: parts[i]
                    });
                  }
                } else {
                  switch (doc22.type) {
                    case "cursor":
                      out.push(cursor.placeholder);
                      break;
                    case "indent":
                      cmds.push({
                        ind: makeIndent(ind, options),
                        mode,
                        doc: doc22.contents
                      });
                      break;
                    case "align":
                      cmds.push({
                        ind: makeAlign(ind, doc22.n, options),
                        mode,
                        doc: doc22.contents
                      });
                      break;
                    case "trim":
                      pos -= trim(out);
                      break;
                    case "group":
                      switch (mode) {
                        case MODE_FLAT:
                          if (!shouldRemeasure) {
                            cmds.push({
                              ind,
                              mode: doc22.break ? MODE_BREAK : MODE_FLAT,
                              doc: doc22.contents
                            });
                            break;
                          }
                        case MODE_BREAK: {
                          shouldRemeasure = false;
                          const next = {
                            ind,
                            mode: MODE_FLAT,
                            doc: doc22.contents
                          };
                          const rem = width - pos;
                          const hasLineSuffix = lineSuffix.length > 0;
                          if (!doc22.break && fits(next, cmds, rem, hasLineSuffix)) {
                            cmds.push(next);
                          } else {
                            if (doc22.expandedStates) {
                              const mostExpanded = getLast(doc22.expandedStates);
                              if (doc22.break) {
                                cmds.push({
                                  ind,
                                  mode: MODE_BREAK,
                                  doc: mostExpanded
                                });
                                break;
                              } else {
                                for (let i = 1; i < doc22.expandedStates.length + 1; i++) {
                                  if (i >= doc22.expandedStates.length) {
                                    cmds.push({
                                      ind,
                                      mode: MODE_BREAK,
                                      doc: mostExpanded
                                    });
                                    break;
                                  } else {
                                    const state = doc22.expandedStates[i];
                                    const cmd = {
                                      ind,
                                      mode: MODE_FLAT,
                                      doc: state
                                    };
                                    if (fits(cmd, cmds, rem, hasLineSuffix)) {
                                      cmds.push(cmd);
                                      break;
                                    }
                                  }
                                }
                              }
                            } else {
                              cmds.push({
                                ind,
                                mode: MODE_BREAK,
                                doc: doc22.contents
                              });
                            }
                          }
                          break;
                        }
                      }
                      if (doc22.id) {
                        groupModeMap[doc22.id] = getLast(cmds).mode;
                      }
                      break;
                    case "fill": {
                      const rem = width - pos;
                      const {
                        parts
                      } = doc22;
                      if (parts.length === 0) {
                        break;
                      }
                      const [content, whitespace2] = parts;
                      const contentFlatCmd = {
                        ind,
                        mode: MODE_FLAT,
                        doc: content
                      };
                      const contentBreakCmd = {
                        ind,
                        mode: MODE_BREAK,
                        doc: content
                      };
                      const contentFits = fits(contentFlatCmd, [], rem, lineSuffix.length > 0, true);
                      if (parts.length === 1) {
                        if (contentFits) {
                          cmds.push(contentFlatCmd);
                        } else {
                          cmds.push(contentBreakCmd);
                        }
                        break;
                      }
                      const whitespaceFlatCmd = {
                        ind,
                        mode: MODE_FLAT,
                        doc: whitespace2
                      };
                      const whitespaceBreakCmd = {
                        ind,
                        mode: MODE_BREAK,
                        doc: whitespace2
                      };
                      if (parts.length === 2) {
                        if (contentFits) {
                          cmds.push(whitespaceFlatCmd, contentFlatCmd);
                        } else {
                          cmds.push(whitespaceBreakCmd, contentBreakCmd);
                        }
                        break;
                      }
                      parts.splice(0, 2);
                      const remainingCmd = {
                        ind,
                        mode,
                        doc: fill(parts)
                      };
                      const secondContent = parts[0];
                      const firstAndSecondContentFlatCmd = {
                        ind,
                        mode: MODE_FLAT,
                        doc: [content, whitespace2, secondContent]
                      };
                      const firstAndSecondContentFits = fits(firstAndSecondContentFlatCmd, [], rem, lineSuffix.length > 0, true);
                      if (firstAndSecondContentFits) {
                        cmds.push(remainingCmd, whitespaceFlatCmd, contentFlatCmd);
                      } else if (contentFits) {
                        cmds.push(remainingCmd, whitespaceBreakCmd, contentFlatCmd);
                      } else {
                        cmds.push(remainingCmd, whitespaceBreakCmd, contentBreakCmd);
                      }
                      break;
                    }
                    case "if-break":
                    case "indent-if-break": {
                      const groupMode = doc22.groupId ? groupModeMap[doc22.groupId] : mode;
                      if (groupMode === MODE_BREAK) {
                        const breakContents = doc22.type === "if-break" ? doc22.breakContents : doc22.negate ? doc22.contents : indent(doc22.contents);
                        if (breakContents) {
                          cmds.push({
                            ind,
                            mode,
                            doc: breakContents
                          });
                        }
                      }
                      if (groupMode === MODE_FLAT) {
                        const flatContents = doc22.type === "if-break" ? doc22.flatContents : doc22.negate ? indent(doc22.contents) : doc22.contents;
                        if (flatContents) {
                          cmds.push({
                            ind,
                            mode,
                            doc: flatContents
                          });
                        }
                      }
                      break;
                    }
                    case "line-suffix":
                      lineSuffix.push({
                        ind,
                        mode,
                        doc: doc22.contents
                      });
                      break;
                    case "line-suffix-boundary":
                      if (lineSuffix.length > 0) {
                        cmds.push({
                          ind,
                          mode,
                          doc: {
                            type: "line",
                            hard: true
                          }
                        });
                      }
                      break;
                    case "line":
                      switch (mode) {
                        case MODE_FLAT:
                          if (!doc22.hard) {
                            if (!doc22.soft) {
                              out.push(" ");
                              pos += 1;
                            }
                            break;
                          } else {
                            shouldRemeasure = true;
                          }
                        case MODE_BREAK:
                          if (lineSuffix.length > 0) {
                            cmds.push({
                              ind,
                              mode,
                              doc: doc22
                            }, ...lineSuffix.reverse());
                            lineSuffix.length = 0;
                            break;
                          }
                          if (doc22.literal) {
                            if (ind.root) {
                              out.push(newLine, ind.root.value);
                              pos = ind.root.length;
                            } else {
                              out.push(newLine);
                              pos = 0;
                            }
                          } else {
                            pos -= trim(out);
                            out.push(newLine + ind.value);
                            pos = ind.length;
                          }
                          break;
                      }
                      break;
                    case "label":
                      cmds.push({
                        ind,
                        mode,
                        doc: doc22.contents
                      });
                      break;
                  }
                }
                if (cmds.length === 0 && lineSuffix.length > 0) {
                  cmds.push(...lineSuffix.reverse());
                  lineSuffix.length = 0;
                }
              }
              const cursorPlaceholderIndex = out.indexOf(cursor.placeholder);
              if (cursorPlaceholderIndex !== -1) {
                const otherCursorPlaceholderIndex = out.indexOf(cursor.placeholder, cursorPlaceholderIndex + 1);
                const beforeCursor = out.slice(0, cursorPlaceholderIndex).join("");
                const aroundCursor = out.slice(cursorPlaceholderIndex + 1, otherCursorPlaceholderIndex).join("");
                const afterCursor = out.slice(otherCursorPlaceholderIndex + 1).join("");
                return {
                  formatted: beforeCursor + aroundCursor + afterCursor,
                  cursorNodeStart: beforeCursor.length,
                  cursorNodeText: aroundCursor
                };
              }
              return {
                formatted: out.join("")
              };
            }
            module222.exports = {
              printDocToString
            };
          }
        });
        var require_doc_debug = __commonJS2({
          "src/document/doc-debug.js"(exports222, module222) {
            init_define_process();
            var {
              isConcat,
              getDocParts
            } = require_doc_utils();
            function flattenDoc(doc2) {
              if (!doc2) {
                return "";
              }
              if (isConcat(doc2)) {
                const res = [];
                for (const part of getDocParts(doc2)) {
                  if (isConcat(part)) {
                    res.push(...flattenDoc(part).parts);
                  } else {
                    const flattened = flattenDoc(part);
                    if (flattened !== "") {
                      res.push(flattened);
                    }
                  }
                }
                return {
                  type: "concat",
                  parts: res
                };
              }
              if (doc2.type === "if-break") {
                return Object.assign(Object.assign({}, doc2), {}, {
                  breakContents: flattenDoc(doc2.breakContents),
                  flatContents: flattenDoc(doc2.flatContents)
                });
              }
              if (doc2.type === "group") {
                return Object.assign(Object.assign({}, doc2), {}, {
                  contents: flattenDoc(doc2.contents),
                  expandedStates: doc2.expandedStates && doc2.expandedStates.map(flattenDoc)
                });
              }
              if (doc2.type === "fill") {
                return {
                  type: "fill",
                  parts: doc2.parts.map(flattenDoc)
                };
              }
              if (doc2.contents) {
                return Object.assign(Object.assign({}, doc2), {}, {
                  contents: flattenDoc(doc2.contents)
                });
              }
              return doc2;
            }
            function printDocToDebug(doc2) {
              const printedSymbols = /* @__PURE__ */ Object.create(null);
              const usedKeysForSymbols = /* @__PURE__ */ new Set();
              return printDoc(flattenDoc(doc2));
              function printDoc(doc22, index, parentParts) {
                if (typeof doc22 === "string") {
                  return JSON.stringify(doc22);
                }
                if (isConcat(doc22)) {
                  const printed = getDocParts(doc22).map(printDoc).filter(Boolean);
                  return printed.length === 1 ? printed[0] : `[${printed.join(", ")}]`;
                }
                if (doc22.type === "line") {
                  const withBreakParent = Array.isArray(parentParts) && parentParts[index + 1] && parentParts[index + 1].type === "break-parent";
                  if (doc22.literal) {
                    return withBreakParent ? "literalline" : "literallineWithoutBreakParent";
                  }
                  if (doc22.hard) {
                    return withBreakParent ? "hardline" : "hardlineWithoutBreakParent";
                  }
                  if (doc22.soft) {
                    return "softline";
                  }
                  return "line";
                }
                if (doc22.type === "break-parent") {
                  const afterHardline = Array.isArray(parentParts) && parentParts[index - 1] && parentParts[index - 1].type === "line" && parentParts[index - 1].hard;
                  return afterHardline ? void 0 : "breakParent";
                }
                if (doc22.type === "trim") {
                  return "trim";
                }
                if (doc22.type === "indent") {
                  return "indent(" + printDoc(doc22.contents) + ")";
                }
                if (doc22.type === "align") {
                  return doc22.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + printDoc(doc22.contents) + ")" : doc22.n < 0 ? "dedent(" + printDoc(doc22.contents) + ")" : doc22.n.type === "root" ? "markAsRoot(" + printDoc(doc22.contents) + ")" : "align(" + JSON.stringify(doc22.n) + ", " + printDoc(doc22.contents) + ")";
                }
                if (doc22.type === "if-break") {
                  return "ifBreak(" + printDoc(doc22.breakContents) + (doc22.flatContents ? ", " + printDoc(doc22.flatContents) : "") + (doc22.groupId ? (!doc22.flatContents ? ', ""' : "") + `, { groupId: ${printGroupId(doc22.groupId)} }` : "") + ")";
                }
                if (doc22.type === "indent-if-break") {
                  const optionsParts = [];
                  if (doc22.negate) {
                    optionsParts.push("negate: true");
                  }
                  if (doc22.groupId) {
                    optionsParts.push(`groupId: ${printGroupId(doc22.groupId)}`);
                  }
                  const options = optionsParts.length > 0 ? `, { ${optionsParts.join(", ")} }` : "";
                  return `indentIfBreak(${printDoc(doc22.contents)}${options})`;
                }
                if (doc22.type === "group") {
                  const optionsParts = [];
                  if (doc22.break && doc22.break !== "propagated") {
                    optionsParts.push("shouldBreak: true");
                  }
                  if (doc22.id) {
                    optionsParts.push(`id: ${printGroupId(doc22.id)}`);
                  }
                  const options = optionsParts.length > 0 ? `, { ${optionsParts.join(", ")} }` : "";
                  if (doc22.expandedStates) {
                    return `conditionalGroup([${doc22.expandedStates.map((part) => printDoc(part)).join(",")}]${options})`;
                  }
                  return `group(${printDoc(doc22.contents)}${options})`;
                }
                if (doc22.type === "fill") {
                  return `fill([${doc22.parts.map((part) => printDoc(part)).join(", ")}])`;
                }
                if (doc22.type === "line-suffix") {
                  return "lineSuffix(" + printDoc(doc22.contents) + ")";
                }
                if (doc22.type === "line-suffix-boundary") {
                  return "lineSuffixBoundary";
                }
                if (doc22.type === "label") {
                  return `label(${JSON.stringify(doc22.label)}, ${printDoc(doc22.contents)})`;
                }
                throw new Error("Unknown doc type " + doc22.type);
              }
              function printGroupId(id) {
                if (typeof id !== "symbol") {
                  return JSON.stringify(String(id));
                }
                if (id in printedSymbols) {
                  return printedSymbols[id];
                }
                const prefix = String(id).slice(7, -1) || "symbol";
                for (let counter = 0; ; counter++) {
                  const key = prefix + (counter > 0 ? ` #${counter}` : "");
                  if (!usedKeysForSymbols.has(key)) {
                    usedKeysForSymbols.add(key);
                    return printedSymbols[id] = `Symbol.for(${JSON.stringify(key)})`;
                  }
                }
              }
            }
            module222.exports = {
              printDocToDebug
            };
          }
        });
        init_define_process();
        module22.exports = {
          builders: require_doc_builders(),
          printer: require_doc_printer(),
          utils: require_doc_utils(),
          debug: require_doc_debug()
        };
      }
    });
    return require_doc_js_umd();
  });
})(doc$1);
const MAX_LINES = 4;
const defaultOptions$2 = {
  printWidth: 30,
  tabWidth: 4,
  useTabs: false
};
function prettierPrint(doc2) {
  return docExports$1.printer.printDocToString(doc2, defaultOptions$2).formatted;
}
function addCursor(state, cursor = "^", error = false) {
  const color = (error ? chalk.red : chalk.green).bold;
  const lines = state.src.split("\n");
  const lineIdx = Math.min(lines.length - 1, state.getLineNumber());
  const startIdx = Math.max(lineIdx - MAX_LINES, 0);
  const endIdx = Math.min(lineIdx + MAX_LINES + 1, lines.length);
  const lineSummaries = lines.slice(startIdx, endIdx);
  if (cursor) {
    const cursorLine = " ".repeat(state.getColumnNumber()) + color(cursor);
    lineSummaries.splice(lineIdx - startIdx + 1, 0, cursorLine);
  }
  const resultLines = lineSummaries.map((line, idx) => {
    const lineNum = startIdx + idx + 1;
    let paddedLineNum = color.reset.black(String(lineNum));
    line = lineNum === lineIdx + 1 ? color(line) : line;
    const paddedLine = `      ${paddedLineNum}| ${line}`;
    return paddedLine;
  });
  return resultLines.join("\n");
}
const group = (docs, groupOptions = {}) => {
  return docExports$1.builders.group(docs, { ...defaultOptions$2, ...groupOptions });
};
const opStyle = (op) => chalk.gray(op);
const PARSER_STRINGS = /* @__PURE__ */ new Map();
function parserPrint(parser) {
  if (PARSER_STRINGS.has(parser.id)) {
    return PARSER_STRINGS.get(parser.id);
  }
  const print = (innerParser, id) => {
    if (PARSER_STRINGS.has(innerParser.id)) {
      return PARSER_STRINGS.get(innerParser.id);
    }
    const { name, args, parser: innerInnerParser } = innerParser.context;
    const parserString = innerInnerParser != null ? print(innerInnerParser, id) : chalk.red.bold("unknown");
    let s2 = (() => {
      switch (name) {
        case "string":
          return chalk.yellow(`"${args[0]}"`);
        case "regex":
        case "regexConcat":
        case "regexWrap":
          return chalk.redBright(`${args[0]}`);
        case "wrap":
        case "trim": {
          const [left, right] = args;
          return group([
            print(left, id),
            docExports$1.builders.indent([docExports$1.builders.softline, parserString]),
            docExports$1.builders.softline,
            print(right, id)
          ]);
        }
        case "trimWhitespace":
          return group([parserString, opStyle("?w")]);
        case "not":
          return group(["!", parserString]);
        case "opt":
          return group([parserString, opStyle("?")]);
        case "next":
          const [next] = args;
          return group([parserString, opStyle(" >> "), print(next, id)]);
        case "skip":
          const [skip] = args;
          return group([parserString, opStyle(" << "), print(skip, id)]);
        case "map":
          return parserString;
        case "all":
        case "then": {
          const delim = opStyle(", ");
          return group([
            "[",
            docExports$1.builders.indent([
              docExports$1.builders.softline,
              docExports$1.builders.join(
                [delim, docExports$1.builders.softline],
                args.map((x) => print(x, id))
              )
            ]),
            docExports$1.builders.softline,
            "]"
          ]);
        }
        case "any":
        case "or": {
          const delim = opStyle("| ");
          return group([
            [
              docExports$1.builders.join(
                [docExports$1.builders.softline, docExports$1.builders.ifBreak(delim, " " + delim)],
                args.map((x) => print(x, id))
              )
            ]
          ]);
        }
        case "many":
          const [min, max] = args;
          let bounds = max === Infinity ? `${min},` : `${min},${max}`;
          bounds = chalk.bold.gray(` {${bounds}}`);
          return group([parserString, bounds]);
        case "sepBy":
          return group([
            parserString,
            docExports$1.builders.indent([" sepBy ", print(args[0], id)])
          ]);
        case "lazy": {
          const [lazy2] = args;
          const p = getLazyParser(lazy2);
          if (!id) {
            const s3 = print(p, p.id);
            PARSER_STRINGS.set(p.id, s3);
            return s3;
          } else {
            return chalk.bold.blue(name);
          }
        }
        case "debug":
          return parserString;
      }
    })();
    s2 ?? (s2 = chalk.red.bold(name));
    if (id) {
      PARSER_STRINGS.set(innerParser.id, s2);
    }
    return s2;
  };
  const doc2 = print(parser);
  const s = prettierPrint(doc2);
  PARSER_STRINGS.set(parser.id, s);
  return s;
}
function statePrint(state, name = "", parserString = "") {
  const stateBgColor = !state.isError ? chalk.bgGreen : chalk.bgRed;
  const stateColor = !state.isError ? chalk.green : chalk.red;
  const finished = state.offset >= state.src.length;
  const stateSymbol = !state.isError ? finished ? "🎉" : "✓" : "ｘ";
  const stateName = !state.isError ? finished ? "Done" : "Ok" : "Err";
  const stateString = " " + stateName + " " + stateSymbol + " ";
  const header = group([
    stateBgColor.bold(stateString),
    stateColor(`	${name}	${state.offset}`),
    docExports$1.builders.softline,
    "	" + chalk.yellow(parserString)
  ]);
  const body = (() => {
    if (state.offset >= state.src.length) {
      return chalk.bold.greenBright(addCursor(state, "", state.isError));
    }
    return addCursor(state, "^", state.isError);
  })();
  const headerBody = group([header, docExports$1.builders.hardline, docExports$1.builders.indent([body])]);
  return prettierPrint(headerBody);
}
function parserDebug(parser, name = "", recursivePrint = false, logger = console.log) {
  const debug = (state) => {
    const newState = parser.parser(state);
    const parserString = recursivePrint ? parserPrint(parser) : parser.context.name;
    const s = statePrint(newState, name, parserString);
    logger(s);
    return newState;
  };
  return new Parser(debug, createParserContext("debug", parser, logger));
}
class ParserState {
  constructor(src, value = void 0, offset = 0, isError = false, furthest = 0) {
    this.src = src;
    this.value = value;
    this.offset = offset;
    this.isError = isError;
    this.furthest = furthest;
  }
  ok(value, offset = 0) {
    offset += this.offset;
    return new ParserState(this.src, value, offset, false);
  }
  err(value, offset = 0) {
    const nextState = this.ok(value, offset);
    nextState.isError = true;
    return nextState;
  }
  from(value, offset = 0) {
    offset += this.offset;
    return new ParserState(this.src, value, offset, this.isError);
  }
  getColumnNumber() {
    const offset = this.offset;
    const lastNewline = this.src.lastIndexOf("\n", offset);
    const columnNumber = lastNewline === -1 ? offset : offset - (lastNewline + 1);
    return Math.max(0, columnNumber);
  }
  getLineNumber() {
    const newlineIndex = this.src.lastIndexOf("\n", this.offset);
    return newlineIndex >= 0 ? this.src.slice(0, newlineIndex).split("\n").length : 0;
  }
  toString() {
    return statePrint(this);
  }
}
function createParserContext(name, parser, ...args) {
  return {
    name,
    parser,
    args
  };
}
let PARSER_ID = 0;
const MEMO = /* @__PURE__ */ new Map();
const LEFT_RECURSION_COUNTS = /* @__PURE__ */ new Map();
let lastState;
function mergeErrorState(state) {
  if (!lastState || lastState && state.offset > lastState.offset) {
    lastState = state;
  }
  return lastState;
}
function getLazyParser(fn) {
  if (fn.parser) {
    return fn.parser;
  }
  return fn.parser = fn();
}
class Parser {
  constructor(parser, context = {}) {
    __publicField$1(this, "id", PARSER_ID++);
    __publicField$1(this, "state");
    this.parser = parser;
    this.context = context;
  }
  reset() {
    lastState = void 0;
    MEMO.clear();
    LEFT_RECURSION_COUNTS.clear();
  }
  parse(val) {
    this.reset();
    const newState = this.parser(new ParserState(val));
    this.state = mergeErrorState(newState);
    this.state.isError = newState.isError;
    if (this.state.isError) {
      console.log(this.state.toString());
    }
    return newState.value;
  }
  getCijKey(state) {
    return `${this.id}${state.offset}`;
  }
  atLeftRecursionLimit(state) {
    const cij = LEFT_RECURSION_COUNTS.get(this.getCijKey(state)) ?? 0;
    return cij > state.src.length - state.offset;
  }
  memoize() {
    const memoize = (state) => {
      const cijKey = this.getCijKey(state);
      const cij = LEFT_RECURSION_COUNTS.get(cijKey) ?? 0;
      let cached = MEMO.get(this.id);
      if (cached && cached.offset >= state.offset) {
        return cached;
      } else if (this.atLeftRecursionLimit(state)) {
        return state.err(void 0);
      }
      LEFT_RECURSION_COUNTS.set(cijKey, cij + 1);
      const newState = this.parser(state);
      cached = MEMO.get(this.id);
      if (cached && cached.offset > newState.offset) {
        newState.offset = cached.offset;
      } else if (!cached) {
        MEMO.set(this.id, newState);
      }
      return newState;
    };
    return new Parser(
      memoize,
      createParserContext("memoize", this)
    );
  }
  mergeMemos() {
    const mergeMemo = (state) => {
      let cached = MEMO.get(this.id);
      if (cached) {
        return cached;
      } else if (this.atLeftRecursionLimit(state)) {
        return state.err(void 0);
      }
      const newState = this.parser(state);
      cached = MEMO.get(this.id);
      if (!cached) {
        MEMO.set(this.id, newState);
      }
      return newState;
    };
    return new Parser(
      mergeMemo,
      createParserContext("mergeMemo", this)
    );
  }
  then(next) {
    if (isStringParsers(this, next)) {
      return concatStringParsers([this, next], "", (m) => [m == null ? void 0 : m[0], m == null ? void 0 : m[1]]);
    }
    const then = (state) => {
      const nextState1 = this.parser(state);
      if (!nextState1.isError) {
        const nextState2 = next.parser(nextState1);
        if (!nextState2.isError) {
          return nextState2.ok([nextState1.value, nextState2.value]);
        }
      }
      mergeErrorState(state);
      return state.err(void 0);
    };
    return new Parser(
      then,
      createParserContext("then", this, this, next)
    );
  }
  or(other) {
    if (isStringParsers(this, other)) {
      return concatStringParsers([this, other], "|");
    }
    const or = (state) => {
      const newState = this.parser(state);
      if (!newState.isError) {
        return newState;
      }
      return other.parser(state);
    };
    return new Parser(
      or,
      createParserContext("or", this, this, other)
    );
  }
  chain(fn, chainError = false) {
    const chain = (state) => {
      const newState = this.parser(state);
      if (newState.isError) {
        return newState;
      } else if (newState.value || chainError) {
        return fn(newState.value).parser(newState);
      }
      return state;
    };
    return new Parser(chain, createParserContext("chain", this, fn));
  }
  map(fn, mapError = false) {
    const map = (state) => {
      const newState = this.parser(state);
      if (!newState.isError || mapError) {
        return newState.ok(fn(newState.value));
      }
      return newState;
    };
    return new Parser(map, createParserContext("map", this));
  }
  mapState(fn) {
    const mapState = (state) => {
      const newState = this.parser(state);
      return fn(newState);
    };
    return new Parser(
      mapState,
      createParserContext("mapState", this)
    );
  }
  skip(parser) {
    const skip = (state) => {
      const nextState1 = this.parser(state);
      if (!nextState1.isError) {
        const nextState2 = parser.parser(nextState1);
        if (!nextState2.isError) {
          return nextState2.ok(nextState1.value);
        }
      }
      mergeErrorState(state);
      return state.err(void 0);
    };
    return new Parser(
      skip,
      createParserContext("skip", this, parser)
    );
  }
  next(parser) {
    const next = this.then(parser).map(([, b]) => {
      return b;
    });
    next.context = createParserContext("next", this, parser);
    return next;
  }
  opt() {
    const opt = (state) => {
      const newState = this.parser(state);
      if (newState.isError) {
        mergeErrorState(state);
        return state.ok(void 0);
      }
      return newState;
    };
    return new Parser(opt, createParserContext("opt", this));
  }
  not(parser) {
    const negate = (state) => {
      const newState = this.parser(state);
      if (newState.isError) {
        mergeErrorState(state);
        return state.ok(state.value);
      } else {
        return state.err(void 0);
      }
    };
    const not = (state) => {
      const newState = this.parser(state);
      if (newState.isError) {
        mergeErrorState(state);
        return newState;
      } else {
        const nextState = parser.parser(state);
        if (nextState.isError) {
          return newState;
        } else {
          mergeErrorState(state);
          return state.err(void 0);
        }
      }
    };
    return new Parser(
      parser ? not : negate,
      createParserContext("not", this, parser)
    );
  }
  wrap(start, end, discard = true) {
    if (!discard) {
      return all(start, this, end);
    }
    if (isStringParsers(start, this, end)) {
      return wrapStringParsers(start, this, end);
    }
    const wrap = start.next(this).skip(end);
    wrap.context = createParserContext("wrap", this, start, end);
    return wrap;
  }
  trim(parser = whitespace, discard = true) {
    var _a;
    if (!discard) {
      return all(parser, this, parser);
    }
    if (((_a = parser.context) == null ? void 0 : _a.name) === "whitespace") {
      if (isStringParsers(this, parser)) {
        return concatStringParsers(
          [parser, this, parser],
          "",
          (m) => m == null ? void 0 : m[2]
        );
      }
      const whitespaceTrim = (state) => {
        const newState = trimStateWhitespace(state);
        const tmpState = this.parser(newState);
        if (tmpState.isError) {
          mergeErrorState(state);
          return state.err(void 0);
        } else {
          return trimStateWhitespace(tmpState);
        }
      };
      return new Parser(
        whitespaceTrim,
        createParserContext("trimWhitespace", this)
      );
    }
    return this.wrap(parser, parser);
  }
  many(min = 0, max = Infinity) {
    const many = (state) => {
      const matches = [];
      let newState = state;
      for (let i = 0; i < max; i += 1) {
        const tmpState = this.parser(newState);
        if (tmpState.isError) {
          break;
        }
        matches.push(tmpState.value);
        newState = tmpState;
      }
      if (matches.length >= min) {
        return newState.ok(matches);
      }
      mergeErrorState(state);
      return state.err([]);
    };
    return new Parser(
      many,
      createParserContext("many", this, min, max)
    );
  }
  sepBy(sep, min = 0, max = Infinity) {
    const sepBy = (state) => {
      const matches = [];
      let newState = state;
      for (let i = 0; i < max; i += 1) {
        const tmpState = this.parser(newState);
        if (tmpState.isError) {
          break;
        }
        newState = tmpState;
        matches.push(newState.value);
        const sepState = sep.parser(newState);
        if (sepState.isError) {
          break;
        }
        newState = sepState;
      }
      if (matches.length > min) {
        return newState.ok(matches);
      }
      mergeErrorState(state);
      return state.err([]);
    };
    return new Parser(
      sepBy,
      createParserContext("sepBy", this, sep)
    );
  }
  eof() {
    const p = this.skip(eof());
    p.context = createParserContext("eof", this);
    return p;
  }
  debug(name = "", recursivePrint = false, logger = console.log) {
    return parserDebug(this, name, recursivePrint, logger);
  }
  toString() {
    return parserPrint(this);
  }
  static lazy(fn) {
    const lazy2 = (state) => {
      return getLazyParser(fn).parser(state);
    };
    return new Parser(lazy2, createParserContext("lazy", void 0, fn));
  }
}
function isStringParsers(...parsers2) {
  return parsers2.every(
    (p) => {
      var _a, _b, _c, _d;
      return (((_a = p.context) == null ? void 0 : _a.name) === "string" || ((_b = p.context) == null ? void 0 : _b.name) === "regex" || ((_c = p.context) == null ? void 0 : _c.name) === "whitespace") && ((_d = p.context) == null ? void 0 : _d.args);
    }
  );
}
function stringParserValue(p) {
  var _a, _b, _c, _d, _e;
  if (((_a = p.context) == null ? void 0 : _a.name) === "string") {
    return (_b = p.context) == null ? void 0 : _b.args[0].replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  } else if (((_c = p.context) == null ? void 0 : _c.name) === "regex" || ((_d = p.context) == null ? void 0 : _d.name) === "whitespace") {
    return (_e = p.context) == null ? void 0 : _e.args[0].source;
  }
}
function concatStringParsers(parsers2, delim = "", matchFunction) {
  const s = parsers2.map((s2) => `(${stringParserValue(s2)})`).join(delim);
  const r = new RegExp(s);
  const rP = regex(r, matchFunction);
  if (delim !== "|") {
    rP.context = createParserContext("regexConcat", this, r);
  }
  return rP;
}
function wrapStringParsers(left, p, right) {
  const rP = concatStringParsers([left, p, right], "", (m) => {
    return m == null ? void 0 : m[2];
  });
  rP.context.name = "regexWrap";
  return rP;
}
function eof() {
  const eof2 = (state) => {
    if (state.offset >= state.src.length) {
      return state.ok(void 0);
    } else {
      mergeErrorState(state);
      return state.err();
    }
  };
  return new Parser(eof2, createParserContext("eof", void 0));
}
function lazy(target, propertyName, descriptor) {
  const method = descriptor.value.bind(target);
  descriptor.value = function() {
    const lazy2 = (state) => {
      return getLazyParser(method).parser(state);
    };
    return new Parser(lazy2, createParserContext("lazy", void 0, method));
  };
}
function any(...parsers2) {
  if (isStringParsers(...parsers2)) {
    return concatStringParsers(parsers2, "|");
  }
  const any2 = (state) => {
    for (const parser of parsers2) {
      const newState = parser.parser(state);
      if (!newState.isError) {
        return newState;
      }
    }
    mergeErrorState(state);
    return state.err(void 0);
  };
  return new Parser(
    parsers2.length === 1 ? parsers2[0].parser : any2,
    createParserContext("any", void 0, ...parsers2)
  );
}
function all(...parsers2) {
  const all2 = (state) => {
    const matches = [];
    for (const parser of parsers2) {
      const newState = parser.parser(state);
      if (newState.isError) {
        return newState;
      }
      if (newState.value !== void 0) {
        matches.push(newState.value);
      }
      state = newState;
    }
    mergeErrorState(state);
    return state.ok(matches);
  };
  return new Parser(
    parsers2.length === 1 ? parsers2[0].parser : all2,
    createParserContext("all", void 0, ...parsers2)
  );
}
function string(str) {
  const string2 = (state) => {
    if (state.offset >= state.src.length) {
      return state.err(void 0);
    }
    const s = state.src.slice(state.offset, state.offset + str.length);
    if (s === str) {
      return state.ok(s, s.length);
    }
    mergeErrorState(state);
    return state.err(void 0);
  };
  return new Parser(
    string2,
    createParserContext("string", void 0, str)
  );
}
function regex(r, matchFunction = (m) => m == null ? void 0 : m[0]) {
  const flags = r.flags.replace(/y/g, "");
  const sticky = new RegExp(r, flags + "y");
  const regex2 = (state) => {
    if (state.offset >= state.src.length) {
      return state.err(void 0);
    }
    sticky.lastIndex = state.offset;
    const match = matchFunction(state.src.match(sticky));
    if (match) {
      return state.ok(match, sticky.lastIndex - state.offset);
    } else if (match === "") {
      return state.ok(void 0);
    }
    mergeErrorState(state);
    return state.err(void 0);
  };
  return new Parser(
    regex2,
    createParserContext("regex", void 0, r)
  );
}
const WHITESPACE = /\s*/y;
const trimStateWhitespace = (state) => {
  var _a;
  if (state.offset >= state.src.length) {
    return state;
  }
  WHITESPACE.lastIndex = state.offset;
  const match = ((_a = state.src.match(WHITESPACE)) == null ? void 0 : _a[0]) ?? "";
  return state.ok(state.value, match.length);
};
const whitespace = regex(/\s*/);
whitespace.context.name = "whitespace";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp2(target, key, result);
  return result;
};
const operatorToType = {
  "|": "alternation",
  ",": "concatenation",
  "-": "minus",
  "<<": "skip",
  ">>": "next",
  "*": "many",
  "+": "many1",
  "?": "optional",
  "?w": "optionalWhitespace"
};
const reduceBinaryExpression = ([left, rightExpression]) => {
  if (rightExpression.length === 0) {
    return left;
  }
  return rightExpression.reduce((acc, [op, right]) => {
    return {
      type: operatorToType[op],
      value: [acc, right]
    };
  }, left);
};
const mapFactor = ([term, op]) => {
  if (op === void 0) {
    return term;
  }
  const type = operatorToType[op];
  return {
    type,
    value: term
  };
};
function mapStatePosition(parser) {
  return parser.mapState((state) => {
    if (state.value) {
      state.value.column = state.getColumnNumber();
      state.value.line = state.getLineNumber();
      state.value.offset = state.offset;
    }
    return state;
  });
}
const defaultOptions$1 = {
  debug: false,
  comments: true
};
class EBNFGrammar {
  constructor(options) {
    __publicField(this, "options");
    this.options = {
      ...defaultOptions$1,
      ...options ?? {}
    };
  }
  identifier() {
    return regex(/[_a-zA-Z][_a-zA-Z0-9]*/).trim();
  }
  literal() {
    return this.trimBigComment(
      any(
        regex(/[^"]+/).wrap(string('"'), string('"')),
        regex(/[^']+/).wrap(string("'"), string("'"))
      ).map((value) => {
        return {
          type: "literal",
          value
        };
      })
    );
  }
  epsilon() {
    return any(string("epsilon"), string("ε")).trim().map(() => {
      return {
        type: "epsilon",
        value: void 0
      };
    });
  }
  nonterminal() {
    return this.identifier().map((value) => {
      return {
        type: "nonterminal",
        value
      };
    });
  }
  bigComment() {
    return regex(/\/\*[^\*]*\*\//).trim();
  }
  comment() {
    return regex(/\/\/.*/).or(this.bigComment()).trim();
  }
  trimBigComment(e) {
    return e.trim(this.bigComment().many(), false).map(([left, expression, right]) => {
      expression.comment = {
        left,
        right
      };
      return expression;
    });
  }
  group() {
    return this.rhs().trim().wrap(string("("), string(")")).map((value) => {
      return {
        type: "group",
        value
      };
    });
  }
  regex() {
    return regex(/[^\/]*/).wrap(string("/"), string("/")).then(regex(/[gimuy]*/).opt()).map(([r, flags]) => {
      return {
        type: "regex",
        value: new RegExp(r, flags)
      };
    });
  }
  optionalGroup() {
    return this.rhs().trim().wrap(string("["), string("]")).map((value) => {
      return {
        type: "optional",
        value: {
          type: "group",
          value
        }
      };
    });
  }
  manyGroup() {
    return this.rhs().trim().wrap(string("{"), string("}")).map((value) => {
      return {
        type: "many",
        value: {
          type: "group",
          value
        }
      };
    });
  }
  lhs() {
    return this.identifier();
  }
  term() {
    return mapStatePosition(
      any(
        this.epsilon(),
        this.group(),
        this.optionalGroup(),
        this.manyGroup(),
        this.nonterminal(),
        this.literal(),
        this.regex()
      )
    );
  }
  factor() {
    return this.trimBigComment(
      all(
        this.term(),
        any(
          string("?w").trim(),
          string("?").trim(),
          string("*").trim(),
          string("+").trim()
        ).opt()
      ).map(mapFactor)
    );
  }
  binaryFactor() {
    return all(
      this.factor(),
      all(
        any(string("<<").trim(), string(">>").trim(), string("-").trim()),
        this.factor()
      ).many()
    ).map(reduceBinaryExpression);
  }
  concatenation() {
    return this.binaryFactor().sepBy(string(",").trim()).map((value) => {
      if (value.length === 1) {
        return value[0];
      }
      return {
        type: "concatenation",
        value
      };
    });
  }
  alternation() {
    return this.concatenation().sepBy(string("|").trim()).map((value) => {
      if (value.length === 1) {
        return value[0];
      }
      return {
        type: "alternation",
        value
      };
    });
  }
  rhs() {
    return this.alternation();
  }
  productionRule() {
    return all(
      this.lhs(),
      string("=").trim(),
      this.rhs(),
      any(string(";"), string(".")).trim()
    ).map(([name, , expression]) => {
      return { name, expression };
    });
  }
  grammar() {
    return this.productionRule().trim(this.comment().many(), false).map(([above, rule, below]) => {
      rule.comment = {
        above,
        below
      };
      return rule;
    }).many(1);
  }
}
__decorateClass([
  lazy
], EBNFGrammar.prototype, "bigComment", 1);
__decorateClass([
  lazy
], EBNFGrammar.prototype, "comment", 1);
__decorateClass([
  lazy
], EBNFGrammar.prototype, "group", 1);
__decorateClass([
  lazy
], EBNFGrammar.prototype, "regex", 1);
__decorateClass([
  lazy
], EBNFGrammar.prototype, "optionalGroup", 1);
__decorateClass([
  lazy
], EBNFGrammar.prototype, "manyGroup", 1);
__decorateClass([
  lazy
], EBNFGrammar.prototype, "lhs", 1);
__decorateClass([
  lazy
], EBNFGrammar.prototype, "term", 1);
__decorateClass([
  lazy
], EBNFGrammar.prototype, "factor", 1);
__decorateClass([
  lazy
], EBNFGrammar.prototype, "binaryFactor", 1);
__decorateClass([
  lazy
], EBNFGrammar.prototype, "concatenation", 1);
__decorateClass([
  lazy
], EBNFGrammar.prototype, "alternation", 1);
__decorateClass([
  lazy
], EBNFGrammar.prototype, "rhs", 1);
__decorateClass([
  lazy
], EBNFGrammar.prototype, "productionRule", 1);
__decorateClass([
  lazy
], EBNFGrammar.prototype, "grammar", 1);
function topologicalSort(ast) {
  const visited = /* @__PURE__ */ new Set();
  const order = [];
  function visit(node, stack) {
    if (stack.has(node) || visited.has(node)) {
      return;
    }
    stack.add(node);
    const productionRule = ast.get(node);
    if (!productionRule) {
      return;
    }
    const expr = productionRule.expression;
    if (expr.type === "nonterminal") {
      visit(expr.value, stack);
    } else if (expr.value instanceof Array) {
      for (const child of expr.value) {
        if (child.type === "nonterminal") {
          visit(child.value, stack);
        }
      }
    }
    visited.add(node);
    stack.delete(node);
    order.unshift(ast.get(node));
  }
  for (const [name] of ast) {
    visit(name, /* @__PURE__ */ new Set());
  }
  const newAST = /* @__PURE__ */ new Map();
  for (const rule of order) {
    newAST.set(rule.name, rule);
  }
  return newAST;
}
const findCommonPrefix = (e1, e2) => {
  if (!(e1 == null ? void 0 : e1.type) || !(e2 == null ? void 0 : e2.type) || e1.type !== e2.type) {
    return void 0;
  }
  switch (e1.type) {
    case "literal":
    case "nonterminal": {
      if (e1.value !== e2.value) {
        return void 0;
      } else {
        return [e1, { type: "epsilon" }, { type: "epsilon" }];
      }
    }
    case "group":
    case "optional":
    case "optionalWhitespace":
    case "many":
    case "many1": {
      const common = findCommonPrefix(e1.value, e2.value);
      if (!common) {
        return void 0;
      } else {
        return [
          {
            type: e1.type,
            value: common[0]
          },
          {
            type: e1.type,
            value: common[1]
          },
          {
            type: e1.type,
            value: common[2]
          }
        ];
      }
    }
    case "concatenation": {
      const commons = e1.value.map(
        (_, i) => findCommonPrefix(e1.value[i], e2.value[i])
      );
      if (commons.some((x) => x === void 0)) {
        return void 0;
      }
      const prefixes = commons.map((x) => x[0]);
      const e1s = commons.map((x) => x[1]);
      const e2s = commons.map((x) => x[2]);
      const startIx = prefixes.lastIndexOf(null);
      if (startIx === prefixes.length - 1) {
        return void 0;
      }
      const prefix = prefixes.slice(startIx + 1);
      return [
        {
          type: "concatenation",
          value: prefix
        },
        {
          type: "concatenation",
          value: e1s
        },
        {
          type: "concatenation",
          value: e2s
        }
      ];
    }
    case "alternation":
      for (const e of e1.value) {
        const common = findCommonPrefix(e, e2);
        if (common) {
          return common;
        }
      }
      for (const e of e2.value) {
        const common = findCommonPrefix(e1, e);
        if (common) {
          return common;
        }
      }
      return void 0;
  }
  return void 0;
};
const comparePrefix = (prefix, expr) => {
  if (prefix.type !== expr.type) {
    return false;
  }
  switch (prefix.type) {
    case "literal":
    case "nonterminal":
      return prefix.value === expr.value;
    case "group":
    case "optional":
    case "many":
    case "many1":
      return comparePrefix(prefix.value, expr.value);
    case "minus":
    case "skip":
    case "next":
      return comparePrefix(prefix.value[0], expr.value[0]) && comparePrefix(prefix.value[1], expr.value[1]);
    case "concatenation":
      return prefix.value.every((e, i) => comparePrefix(e, expr.value[i]));
    case "alternation":
      return prefix.value.some((e, i) => comparePrefix(e, expr.value[i]));
    case "epsilon":
      return true;
  }
};
function rewriteTreeLeftRecursion(name, expr) {
  const prefixMap = /* @__PURE__ */ new Map();
  let commonPrefix = null;
  for (let i = 0; i < expr.value.length - 1; i++) {
    const e1 = expr.value[i];
    const e2 = expr.value[i + 1];
    const common = findCommonPrefix(e1, e2);
    if (common) {
      const [prefix, te1, te2] = common;
      if (commonPrefix !== null && comparePrefix(prefix, commonPrefix)) {
        prefixMap.get(commonPrefix).push(te2);
      } else {
        prefixMap.set(prefix, [te1, te2]);
        commonPrefix = prefix;
      }
      if (i === expr.value.length - 2) {
        expr.value.shift();
      }
      expr.value.shift();
      i -= 1;
    }
  }
  for (const [prefix, expressions] of prefixMap) {
    const alternation = {
      type: "alternation",
      value: expressions
    };
    const newExpr = {
      type: "concatenation",
      value: [
        {
          type: "group",
          value: alternation
        },
        {
          type: "group",
          value: prefix
        }
      ]
    };
    expr.value.push(newExpr);
  }
}
const removeDirectLeftRecursionProduction = (name, expr, tailName) => {
  const head = [];
  const tail = [];
  const APrime = {
    type: "nonterminal",
    value: tailName
  };
  for (let i = 0; i < expr.value.length; i++) {
    const e = expr.value[i];
    if (e.type === "concatenation" && e.value[0].value === name) {
      tail.push({
        type: "concatenation",
        value: [...e.value.slice(1), APrime]
      });
    } else {
      head.push({
        type: "concatenation",
        value: [e, APrime]
      });
    }
  }
  if (tail.length === 0) {
    return [void 0, void 0];
  }
  tail.push({
    type: "epsilon"
  });
  return [
    {
      type: "alternation",
      value: head
    },
    {
      type: "alternation",
      value: tail
    }
  ];
};
function removeDirectLeftRecursion(ast) {
  const newNodes = /* @__PURE__ */ new Map();
  let uniqueIndex = 0;
  for (const [name, productionRule] of ast) {
    const { expression } = productionRule;
    if (expression.type === "alternation") {
      const tailName = `${name}_${uniqueIndex++}`;
      const [head, tail] = removeDirectLeftRecursionProduction(
        name,
        expression,
        tailName
      );
      if (head) {
        newNodes.set(tailName, {
          name: tailName,
          expression: tail
        });
        newNodes.set(name, {
          name,
          expression: head,
          comment: productionRule.comment
        });
      }
    }
  }
  if (newNodes.size === 0) {
    return ast;
  }
  for (const [name, productionRule] of newNodes) {
    ast.set(name, productionRule);
  }
  for (const [name, productionRule] of ast) {
    const { expression } = productionRule;
    if (expression.type === "alternation") {
      rewriteTreeLeftRecursion(name, expression);
    }
  }
}
function removeAllLeftRecursion(ast) {
  const newAST = topologicalSort(ast);
  removeDirectLeftRecursion(newAST);
  return newAST;
}
function generateASTFromEBNF(input) {
  const parser = new EBNFGrammar().grammar().eof();
  const parsed = parser.parse(input);
  if (!parsed) {
    return [parser];
  }
  const ast = parsed.reduce((acc, productionRule, ix) => {
    return acc.set(productionRule.name, productionRule);
  }, /* @__PURE__ */ new Map());
  return [parser, ast];
}
function generateParserFromAST(ast) {
  function generateParser(name, expr) {
    var _a, _b;
    switch (expr.type) {
      case "literal":
        return string(expr.value);
      case "nonterminal":
        const l = Parser.lazy(() => {
          return nonterminals[expr.value];
        });
        l.context.name = expr.value;
        return l;
      case "epsilon":
        return eof().opt();
      case "group":
        return generateParser(name, expr.value);
      case "regex":
        return regex(expr.value);
      case "optionalWhitespace":
        return generateParser(name, expr.value).trim();
      case "optional":
        return generateParser(name, expr.value).opt();
      case "many":
        return generateParser(name, expr.value).many();
      case "many1":
        return generateParser(name, expr.value).many(1);
      case "skip":
        return generateParser(name, expr.value[0]).skip(
          generateParser(name, expr.value[1])
        );
      case "next":
        return generateParser(name, expr.value[0]).next(
          generateParser(name, expr.value[1])
        );
      case "minus":
        return generateParser(name, expr.value[0]).not(
          generateParser(name, expr.value[1])
        );
      case "concatenation": {
        const parsers2 = expr.value.map((x) => generateParser(name, x));
        if (((_b = (_a = parsers2.at(-1)) == null ? void 0 : _a.context) == null ? void 0 : _b.name) === "eof") {
          parsers2.pop();
        }
        return all(...parsers2);
      }
      case "alternation": {
        return any(...expr.value.map((x) => generateParser(name, x)));
      }
    }
  }
  const nonterminals = {};
  for (const [name, productionRule] of ast.entries()) {
    nonterminals[name] = generateParser(name, productionRule.expression);
  }
  return nonterminals;
}
function generateParserFromEBNF(input, optimizeGraph = false) {
  let [parser, ast] = generateASTFromEBNF(input);
  if (optimizeGraph) {
    ast = removeAllLeftRecursion(ast);
  }
  const nonterminals = generateParserFromAST(ast);
  return [nonterminals, ast];
}
function locStart(node) {
  return 0;
}
function locEnd(node) {
  return 0;
}
function preprocess(text, options) {
  return text;
}
function traverseAST(ast, callback) {
  const stack = [...ast.values()].map((x) => x.expression).reverse();
  while (stack.length > 0) {
    const node = stack.pop();
    if (!node)
      continue;
    callback(node);
    if (node.value instanceof Array) {
      for (let i = node.value.length - 1; i >= 0; i--) {
        stack.push(node.value[i]);
      }
    } else {
      stack.push(node.value);
    }
  }
}
function findUndefinedNonterminals(ast) {
  const undefinedNonterminals = [];
  traverseAST(ast, (node) => {
    if (node.type === "nonterminal" && !ast.has(node.value)) {
      undefinedNonterminals.push(node);
    }
  });
  return undefinedNonterminals;
}
function findUnusedTerminals(ast) {
  const used = /* @__PURE__ */ new Set();
  traverseAST(ast, (node) => {
    if (node.type === "noneterminal") {
      used.add(node.value);
    }
  });
  return [...ast.entries()].filter(([name]) => !used.has(name));
}
function parse(text, parsers2, options) {
  let [parser, ast] = generateASTFromEBNF(text);
  if (parser.state.isError) {
    throw new Error(`Error parsing EBNF: ${parser.state}`, {
      cause: parser
    });
  }
  let prettierAST;
  if (options.sort) {
    prettierAST = [...topologicalSort(ast).entries()].reverse();
  } else {
    prettierAST = [...ast.entries()];
  }
  return prettierAST.filter(([key]) => key).reduce((acc, [key, value]) => {
    return acc.set(key, value);
  }, /* @__PURE__ */ new Map());
}
var docExports = {};
var doc = {
  get exports() {
    return docExports;
  },
  set exports(v) {
    docExports = v;
  }
};
(function(module2, exports2) {
  (function(factory) {
    {
      module2.exports = factory();
    }
  })(function() {
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __commonJS = (cb, mod) => function __require() {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
    var require_doc_js_umd = __commonJS({
      "dist/_doc.js.umd.js"(exports3, module3) {
        var __create = Object.create;
        var __defProp3 = Object.defineProperty;
        var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
        var __getOwnPropNames2 = Object.getOwnPropertyNames;
        var __getProtoOf = Object.getPrototypeOf;
        var __hasOwnProp = Object.prototype.hasOwnProperty;
        var __esm = (fn, res) => function __init() {
          return fn && (res = (0, fn[__getOwnPropNames2(fn)[0]])(fn = 0)), res;
        };
        var __commonJS2 = (cb, mod) => function __require() {
          return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = {
            exports: {}
          }).exports, mod), mod.exports;
        };
        var __export = (target, all2) => {
          for (var name in all2)
            __defProp3(target, name, {
              get: all2[name],
              enumerable: true
            });
        };
        var __copyProps = (to, from, except, desc) => {
          if (from && typeof from === "object" || typeof from === "function") {
            for (let key of __getOwnPropNames2(from))
              if (!__hasOwnProp.call(to, key) && key !== except)
                __defProp3(to, key, {
                  get: () => from[key],
                  enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable
                });
          }
          return to;
        };
        var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", {
          value: mod,
          enumerable: true
        }) : target, mod));
        var __toCommonJS = (mod) => __copyProps(__defProp3({}, "__esModule", {
          value: true
        }), mod);
        var init_define_process = __esm({
          "<define:process>"() {
          }
        });
        var require_doc_builders = __commonJS2({
          "src/document/doc-builders.js"(exports22, module22) {
            init_define_process();
            function concat(parts) {
              return {
                type: "concat",
                parts
              };
            }
            function indent(contents) {
              return {
                type: "indent",
                contents
              };
            }
            function align(widthOrString, contents) {
              return {
                type: "align",
                contents,
                n: widthOrString
              };
            }
            function group2(contents) {
              let opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              return {
                type: "group",
                id: opts.id,
                contents,
                break: Boolean(opts.shouldBreak),
                expandedStates: opts.expandedStates
              };
            }
            function dedentToRoot(contents) {
              return align(Number.NEGATIVE_INFINITY, contents);
            }
            function markAsRoot(contents) {
              return align({
                type: "root"
              }, contents);
            }
            function dedent(contents) {
              return align(-1, contents);
            }
            function conditionalGroup(states, opts) {
              return group2(states[0], Object.assign(Object.assign({}, opts), {}, {
                expandedStates: states
              }));
            }
            function fill(parts) {
              return {
                type: "fill",
                parts
              };
            }
            function ifBreak(breakContents, flatContents) {
              let opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              return {
                type: "if-break",
                breakContents,
                flatContents,
                groupId: opts.groupId
              };
            }
            function indentIfBreak(contents, opts) {
              return {
                type: "indent-if-break",
                contents,
                groupId: opts.groupId,
                negate: opts.negate
              };
            }
            function lineSuffix(contents) {
              return {
                type: "line-suffix",
                contents
              };
            }
            var lineSuffixBoundary = {
              type: "line-suffix-boundary"
            };
            var breakParent = {
              type: "break-parent"
            };
            var trim = {
              type: "trim"
            };
            var hardlineWithoutBreakParent = {
              type: "line",
              hard: true
            };
            var literallineWithoutBreakParent = {
              type: "line",
              hard: true,
              literal: true
            };
            var line = {
              type: "line"
            };
            var softline = {
              type: "line",
              soft: true
            };
            var hardline = concat([hardlineWithoutBreakParent, breakParent]);
            var literalline = concat([literallineWithoutBreakParent, breakParent]);
            var cursor = {
              type: "cursor",
              placeholder: Symbol("cursor")
            };
            function join(sep, arr) {
              const res = [];
              for (let i = 0; i < arr.length; i++) {
                if (i !== 0) {
                  res.push(sep);
                }
                res.push(arr[i]);
              }
              return concat(res);
            }
            function addAlignmentToDoc(doc2, size, tabWidth) {
              let aligned = doc2;
              if (size > 0) {
                for (let i = 0; i < Math.floor(size / tabWidth); ++i) {
                  aligned = indent(aligned);
                }
                aligned = align(size % tabWidth, aligned);
                aligned = align(Number.NEGATIVE_INFINITY, aligned);
              }
              return aligned;
            }
            function label(label2, contents) {
              return {
                type: "label",
                label: label2,
                contents
              };
            }
            module22.exports = {
              concat,
              join,
              line,
              softline,
              hardline,
              literalline,
              group: group2,
              conditionalGroup,
              fill,
              lineSuffix,
              lineSuffixBoundary,
              cursor,
              breakParent,
              ifBreak,
              trim,
              indent,
              indentIfBreak,
              align,
              addAlignmentToDoc,
              markAsRoot,
              dedentToRoot,
              dedent,
              hardlineWithoutBreakParent,
              literallineWithoutBreakParent,
              label
            };
          }
        });
        var require_end_of_line = __commonJS2({
          "src/common/end-of-line.js"(exports22, module22) {
            init_define_process();
            function guessEndOfLine(text) {
              const index = text.indexOf("\r");
              if (index >= 0) {
                return text.charAt(index + 1) === "\n" ? "crlf" : "cr";
              }
              return "lf";
            }
            function convertEndOfLineToChars(value) {
              switch (value) {
                case "cr":
                  return "\r";
                case "crlf":
                  return "\r\n";
                default:
                  return "\n";
              }
            }
            function countEndOfLineChars(text, eol) {
              let regex2;
              switch (eol) {
                case "\n":
                  regex2 = /\n/g;
                  break;
                case "\r":
                  regex2 = /\r/g;
                  break;
                case "\r\n":
                  regex2 = /\r\n/g;
                  break;
                default:
                  throw new Error(`Unexpected "eol" ${JSON.stringify(eol)}.`);
              }
              const endOfLines = text.match(regex2);
              return endOfLines ? endOfLines.length : 0;
            }
            function normalizeEndOfLine(text) {
              return text.replace(/\r\n?/g, "\n");
            }
            module22.exports = {
              guessEndOfLine,
              convertEndOfLineToChars,
              countEndOfLineChars,
              normalizeEndOfLine
            };
          }
        });
        var require_get_last = __commonJS2({
          "src/utils/get-last.js"(exports22, module22) {
            init_define_process();
            var getLast = (arr) => arr[arr.length - 1];
            module22.exports = getLast;
          }
        });
        function ansiRegex() {
          let {
            onlyFirst = false
          } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          const pattern = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
          return new RegExp(pattern, onlyFirst ? void 0 : "g");
        }
        var init_ansi_regex = __esm({
          "node_modules/strip-ansi/node_modules/ansi-regex/index.js"() {
            init_define_process();
          }
        });
        function stripAnsi(string2) {
          if (typeof string2 !== "string") {
            throw new TypeError(`Expected a \`string\`, got \`${typeof string2}\``);
          }
          return string2.replace(ansiRegex(), "");
        }
        var init_strip_ansi = __esm({
          "node_modules/strip-ansi/index.js"() {
            init_define_process();
            init_ansi_regex();
          }
        });
        function isFullwidthCodePoint(codePoint) {
          if (!Number.isInteger(codePoint)) {
            return false;
          }
          return codePoint >= 4352 && (codePoint <= 4447 || codePoint === 9001 || codePoint === 9002 || 11904 <= codePoint && codePoint <= 12871 && codePoint !== 12351 || 12880 <= codePoint && codePoint <= 19903 || 19968 <= codePoint && codePoint <= 42182 || 43360 <= codePoint && codePoint <= 43388 || 44032 <= codePoint && codePoint <= 55203 || 63744 <= codePoint && codePoint <= 64255 || 65040 <= codePoint && codePoint <= 65049 || 65072 <= codePoint && codePoint <= 65131 || 65281 <= codePoint && codePoint <= 65376 || 65504 <= codePoint && codePoint <= 65510 || 110592 <= codePoint && codePoint <= 110593 || 127488 <= codePoint && codePoint <= 127569 || 131072 <= codePoint && codePoint <= 262141);
        }
        var init_is_fullwidth_code_point = __esm({
          "node_modules/is-fullwidth-code-point/index.js"() {
            init_define_process();
          }
        });
        var require_emoji_regex = __commonJS2({
          "node_modules/emoji-regex/index.js"(exports22, module22) {
            init_define_process();
            module22.exports = function() {
              return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
            };
          }
        });
        var string_width_exports = {};
        __export(string_width_exports, {
          default: () => stringWidth
        });
        function stringWidth(string2) {
          if (typeof string2 !== "string" || string2.length === 0) {
            return 0;
          }
          string2 = stripAnsi(string2);
          if (string2.length === 0) {
            return 0;
          }
          string2 = string2.replace((0, import_emoji_regex.default)(), "  ");
          let width = 0;
          for (let index = 0; index < string2.length; index++) {
            const codePoint = string2.codePointAt(index);
            if (codePoint <= 31 || codePoint >= 127 && codePoint <= 159) {
              continue;
            }
            if (codePoint >= 768 && codePoint <= 879) {
              continue;
            }
            if (codePoint > 65535) {
              index++;
            }
            width += isFullwidthCodePoint(codePoint) ? 2 : 1;
          }
          return width;
        }
        var import_emoji_regex;
        var init_string_width = __esm({
          "node_modules/string-width/index.js"() {
            init_define_process();
            init_strip_ansi();
            init_is_fullwidth_code_point();
            import_emoji_regex = __toESM(require_emoji_regex());
          }
        });
        var require_get_string_width = __commonJS2({
          "src/utils/get-string-width.js"(exports22, module22) {
            init_define_process();
            var stringWidth2 = (init_string_width(), __toCommonJS(string_width_exports)).default;
            var notAsciiRegex = /[^\x20-\x7F]/;
            function getStringWidth(text) {
              if (!text) {
                return 0;
              }
              if (!notAsciiRegex.test(text)) {
                return text.length;
              }
              return stringWidth2(text);
            }
            module22.exports = getStringWidth;
          }
        });
        var require_doc_utils = __commonJS2({
          "src/document/doc-utils.js"(exports22, module22) {
            init_define_process();
            var getLast = require_get_last();
            var {
              literalline,
              join
            } = require_doc_builders();
            var isConcat = (doc2) => Array.isArray(doc2) || doc2 && doc2.type === "concat";
            var getDocParts = (doc2) => {
              if (Array.isArray(doc2)) {
                return doc2;
              }
              if (doc2.type !== "concat" && doc2.type !== "fill") {
                throw new Error("Expect doc type to be `concat` or `fill`.");
              }
              return doc2.parts;
            };
            var traverseDocOnExitStackMarker = {};
            function traverseDoc(doc2, onEnter, onExit, shouldTraverseConditionalGroups) {
              const docsStack = [doc2];
              while (docsStack.length > 0) {
                const doc22 = docsStack.pop();
                if (doc22 === traverseDocOnExitStackMarker) {
                  onExit(docsStack.pop());
                  continue;
                }
                if (onExit) {
                  docsStack.push(doc22, traverseDocOnExitStackMarker);
                }
                if (!onEnter || onEnter(doc22) !== false) {
                  if (isConcat(doc22) || doc22.type === "fill") {
                    const parts = getDocParts(doc22);
                    for (let ic = parts.length, i = ic - 1; i >= 0; --i) {
                      docsStack.push(parts[i]);
                    }
                  } else if (doc22.type === "if-break") {
                    if (doc22.flatContents) {
                      docsStack.push(doc22.flatContents);
                    }
                    if (doc22.breakContents) {
                      docsStack.push(doc22.breakContents);
                    }
                  } else if (doc22.type === "group" && doc22.expandedStates) {
                    if (shouldTraverseConditionalGroups) {
                      for (let ic = doc22.expandedStates.length, i = ic - 1; i >= 0; --i) {
                        docsStack.push(doc22.expandedStates[i]);
                      }
                    } else {
                      docsStack.push(doc22.contents);
                    }
                  } else if (doc22.contents) {
                    docsStack.push(doc22.contents);
                  }
                }
              }
            }
            function mapDoc(doc2, cb) {
              const mapped = /* @__PURE__ */ new Map();
              return rec(doc2);
              function rec(doc22) {
                if (mapped.has(doc22)) {
                  return mapped.get(doc22);
                }
                const result = process2(doc22);
                mapped.set(doc22, result);
                return result;
              }
              function process2(doc22) {
                if (Array.isArray(doc22)) {
                  return cb(doc22.map(rec));
                }
                if (doc22.type === "concat" || doc22.type === "fill") {
                  const parts = doc22.parts.map(rec);
                  return cb(Object.assign(Object.assign({}, doc22), {}, {
                    parts
                  }));
                }
                if (doc22.type === "if-break") {
                  const breakContents = doc22.breakContents && rec(doc22.breakContents);
                  const flatContents = doc22.flatContents && rec(doc22.flatContents);
                  return cb(Object.assign(Object.assign({}, doc22), {}, {
                    breakContents,
                    flatContents
                  }));
                }
                if (doc22.type === "group" && doc22.expandedStates) {
                  const expandedStates = doc22.expandedStates.map(rec);
                  const contents = expandedStates[0];
                  return cb(Object.assign(Object.assign({}, doc22), {}, {
                    contents,
                    expandedStates
                  }));
                }
                if (doc22.contents) {
                  const contents = rec(doc22.contents);
                  return cb(Object.assign(Object.assign({}, doc22), {}, {
                    contents
                  }));
                }
                return cb(doc22);
              }
            }
            function findInDoc(doc2, fn, defaultValue) {
              let result = defaultValue;
              let hasStopped = false;
              function findInDocOnEnterFn(doc22) {
                const maybeResult = fn(doc22);
                if (maybeResult !== void 0) {
                  hasStopped = true;
                  result = maybeResult;
                }
                if (hasStopped) {
                  return false;
                }
              }
              traverseDoc(doc2, findInDocOnEnterFn);
              return result;
            }
            function willBreakFn(doc2) {
              if (doc2.type === "group" && doc2.break) {
                return true;
              }
              if (doc2.type === "line" && doc2.hard) {
                return true;
              }
              if (doc2.type === "break-parent") {
                return true;
              }
            }
            function willBreak(doc2) {
              return findInDoc(doc2, willBreakFn, false);
            }
            function breakParentGroup(groupStack) {
              if (groupStack.length > 0) {
                const parentGroup = getLast(groupStack);
                if (!parentGroup.expandedStates && !parentGroup.break) {
                  parentGroup.break = "propagated";
                }
              }
              return null;
            }
            function propagateBreaks(doc2) {
              const alreadyVisitedSet = /* @__PURE__ */ new Set();
              const groupStack = [];
              function propagateBreaksOnEnterFn(doc22) {
                if (doc22.type === "break-parent") {
                  breakParentGroup(groupStack);
                }
                if (doc22.type === "group") {
                  groupStack.push(doc22);
                  if (alreadyVisitedSet.has(doc22)) {
                    return false;
                  }
                  alreadyVisitedSet.add(doc22);
                }
              }
              function propagateBreaksOnExitFn(doc22) {
                if (doc22.type === "group") {
                  const group2 = groupStack.pop();
                  if (group2.break) {
                    breakParentGroup(groupStack);
                  }
                }
              }
              traverseDoc(doc2, propagateBreaksOnEnterFn, propagateBreaksOnExitFn, true);
            }
            function removeLinesFn(doc2) {
              if (doc2.type === "line" && !doc2.hard) {
                return doc2.soft ? "" : " ";
              }
              if (doc2.type === "if-break") {
                return doc2.flatContents || "";
              }
              return doc2;
            }
            function removeLines(doc2) {
              return mapDoc(doc2, removeLinesFn);
            }
            var isHardline = (doc2, nextDoc) => doc2 && doc2.type === "line" && doc2.hard && nextDoc && nextDoc.type === "break-parent";
            function stripDocTrailingHardlineFromDoc(doc2) {
              if (!doc2) {
                return doc2;
              }
              if (isConcat(doc2) || doc2.type === "fill") {
                const parts = getDocParts(doc2);
                while (parts.length > 1 && isHardline(...parts.slice(-2))) {
                  parts.length -= 2;
                }
                if (parts.length > 0) {
                  const lastPart = stripDocTrailingHardlineFromDoc(getLast(parts));
                  parts[parts.length - 1] = lastPart;
                }
                return Array.isArray(doc2) ? parts : Object.assign(Object.assign({}, doc2), {}, {
                  parts
                });
              }
              switch (doc2.type) {
                case "align":
                case "indent":
                case "indent-if-break":
                case "group":
                case "line-suffix":
                case "label": {
                  const contents = stripDocTrailingHardlineFromDoc(doc2.contents);
                  return Object.assign(Object.assign({}, doc2), {}, {
                    contents
                  });
                }
                case "if-break": {
                  const breakContents = stripDocTrailingHardlineFromDoc(doc2.breakContents);
                  const flatContents = stripDocTrailingHardlineFromDoc(doc2.flatContents);
                  return Object.assign(Object.assign({}, doc2), {}, {
                    breakContents,
                    flatContents
                  });
                }
              }
              return doc2;
            }
            function stripTrailingHardline(doc2) {
              return stripDocTrailingHardlineFromDoc(cleanDoc(doc2));
            }
            function cleanDocFn(doc2) {
              switch (doc2.type) {
                case "fill":
                  if (doc2.parts.every((part) => part === "")) {
                    return "";
                  }
                  break;
                case "group":
                  if (!doc2.contents && !doc2.id && !doc2.break && !doc2.expandedStates) {
                    return "";
                  }
                  if (doc2.contents.type === "group" && doc2.contents.id === doc2.id && doc2.contents.break === doc2.break && doc2.contents.expandedStates === doc2.expandedStates) {
                    return doc2.contents;
                  }
                  break;
                case "align":
                case "indent":
                case "indent-if-break":
                case "line-suffix":
                  if (!doc2.contents) {
                    return "";
                  }
                  break;
                case "if-break":
                  if (!doc2.flatContents && !doc2.breakContents) {
                    return "";
                  }
                  break;
              }
              if (!isConcat(doc2)) {
                return doc2;
              }
              const parts = [];
              for (const part of getDocParts(doc2)) {
                if (!part) {
                  continue;
                }
                const [currentPart, ...restParts] = isConcat(part) ? getDocParts(part) : [part];
                if (typeof currentPart === "string" && typeof getLast(parts) === "string") {
                  parts[parts.length - 1] += currentPart;
                } else {
                  parts.push(currentPart);
                }
                parts.push(...restParts);
              }
              if (parts.length === 0) {
                return "";
              }
              if (parts.length === 1) {
                return parts[0];
              }
              return Array.isArray(doc2) ? parts : Object.assign(Object.assign({}, doc2), {}, {
                parts
              });
            }
            function cleanDoc(doc2) {
              return mapDoc(doc2, (currentDoc) => cleanDocFn(currentDoc));
            }
            function normalizeParts(parts) {
              const newParts = [];
              const restParts = parts.filter(Boolean);
              while (restParts.length > 0) {
                const part = restParts.shift();
                if (!part) {
                  continue;
                }
                if (isConcat(part)) {
                  restParts.unshift(...getDocParts(part));
                  continue;
                }
                if (newParts.length > 0 && typeof getLast(newParts) === "string" && typeof part === "string") {
                  newParts[newParts.length - 1] += part;
                  continue;
                }
                newParts.push(part);
              }
              return newParts;
            }
            function normalizeDoc(doc2) {
              return mapDoc(doc2, (currentDoc) => {
                if (Array.isArray(currentDoc)) {
                  return normalizeParts(currentDoc);
                }
                if (!currentDoc.parts) {
                  return currentDoc;
                }
                return Object.assign(Object.assign({}, currentDoc), {}, {
                  parts: normalizeParts(currentDoc.parts)
                });
              });
            }
            function replaceEndOfLine(doc2) {
              return mapDoc(doc2, (currentDoc) => typeof currentDoc === "string" && currentDoc.includes("\n") ? replaceTextEndOfLine(currentDoc) : currentDoc);
            }
            function replaceTextEndOfLine(text) {
              let replacement = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : literalline;
              return join(replacement, text.split("\n")).parts;
            }
            function canBreakFn(doc2) {
              if (doc2.type === "line") {
                return true;
              }
            }
            function canBreak(doc2) {
              return findInDoc(doc2, canBreakFn, false);
            }
            module22.exports = {
              isConcat,
              getDocParts,
              willBreak,
              traverseDoc,
              findInDoc,
              mapDoc,
              propagateBreaks,
              removeLines,
              stripTrailingHardline,
              normalizeParts,
              normalizeDoc,
              cleanDoc,
              replaceTextEndOfLine,
              replaceEndOfLine,
              canBreak
            };
          }
        });
        var require_doc_printer = __commonJS2({
          "src/document/doc-printer.js"(exports22, module22) {
            init_define_process();
            var {
              convertEndOfLineToChars
            } = require_end_of_line();
            var getLast = require_get_last();
            var getStringWidth = require_get_string_width();
            var {
              fill,
              cursor,
              indent
            } = require_doc_builders();
            var {
              isConcat,
              getDocParts
            } = require_doc_utils();
            var groupModeMap;
            var MODE_BREAK = 1;
            var MODE_FLAT = 2;
            function rootIndent() {
              return {
                value: "",
                length: 0,
                queue: []
              };
            }
            function makeIndent(ind, options) {
              return generateInd(ind, {
                type: "indent"
              }, options);
            }
            function makeAlign(indent2, widthOrDoc, options) {
              if (widthOrDoc === Number.NEGATIVE_INFINITY) {
                return indent2.root || rootIndent();
              }
              if (widthOrDoc < 0) {
                return generateInd(indent2, {
                  type: "dedent"
                }, options);
              }
              if (!widthOrDoc) {
                return indent2;
              }
              if (widthOrDoc.type === "root") {
                return Object.assign(Object.assign({}, indent2), {}, {
                  root: indent2
                });
              }
              const alignType = typeof widthOrDoc === "string" ? "stringAlign" : "numberAlign";
              return generateInd(indent2, {
                type: alignType,
                n: widthOrDoc
              }, options);
            }
            function generateInd(ind, newPart, options) {
              const queue = newPart.type === "dedent" ? ind.queue.slice(0, -1) : [...ind.queue, newPart];
              let value = "";
              let length = 0;
              let lastTabs = 0;
              let lastSpaces = 0;
              for (const part of queue) {
                switch (part.type) {
                  case "indent":
                    flush();
                    if (options.useTabs) {
                      addTabs(1);
                    } else {
                      addSpaces(options.tabWidth);
                    }
                    break;
                  case "stringAlign":
                    flush();
                    value += part.n;
                    length += part.n.length;
                    break;
                  case "numberAlign":
                    lastTabs += 1;
                    lastSpaces += part.n;
                    break;
                  default:
                    throw new Error(`Unexpected type '${part.type}'`);
                }
              }
              flushSpaces();
              return Object.assign(Object.assign({}, ind), {}, {
                value,
                length,
                queue
              });
              function addTabs(count) {
                value += "	".repeat(count);
                length += options.tabWidth * count;
              }
              function addSpaces(count) {
                value += " ".repeat(count);
                length += count;
              }
              function flush() {
                if (options.useTabs) {
                  flushTabs();
                } else {
                  flushSpaces();
                }
              }
              function flushTabs() {
                if (lastTabs > 0) {
                  addTabs(lastTabs);
                }
                resetLast();
              }
              function flushSpaces() {
                if (lastSpaces > 0) {
                  addSpaces(lastSpaces);
                }
                resetLast();
              }
              function resetLast() {
                lastTabs = 0;
                lastSpaces = 0;
              }
            }
            function trim(out) {
              if (out.length === 0) {
                return 0;
              }
              let trimCount = 0;
              while (out.length > 0 && typeof getLast(out) === "string" && /^[\t ]*$/.test(getLast(out))) {
                trimCount += out.pop().length;
              }
              if (out.length > 0 && typeof getLast(out) === "string") {
                const trimmed = getLast(out).replace(/[\t ]*$/, "");
                trimCount += getLast(out).length - trimmed.length;
                out[out.length - 1] = trimmed;
              }
              return trimCount;
            }
            function fits(next, restCommands, width, hasLineSuffix, mustBeFlat) {
              let restIdx = restCommands.length;
              const cmds = [next];
              const out = [];
              while (width >= 0) {
                if (cmds.length === 0) {
                  if (restIdx === 0) {
                    return true;
                  }
                  cmds.push(restCommands[--restIdx]);
                  continue;
                }
                const {
                  mode,
                  doc: doc2
                } = cmds.pop();
                if (typeof doc2 === "string") {
                  out.push(doc2);
                  width -= getStringWidth(doc2);
                } else if (isConcat(doc2) || doc2.type === "fill") {
                  const parts = getDocParts(doc2);
                  for (let i = parts.length - 1; i >= 0; i--) {
                    cmds.push({
                      mode,
                      doc: parts[i]
                    });
                  }
                } else {
                  switch (doc2.type) {
                    case "indent":
                    case "align":
                    case "indent-if-break":
                    case "label":
                      cmds.push({
                        mode,
                        doc: doc2.contents
                      });
                      break;
                    case "trim":
                      width += trim(out);
                      break;
                    case "group": {
                      if (mustBeFlat && doc2.break) {
                        return false;
                      }
                      const groupMode = doc2.break ? MODE_BREAK : mode;
                      const contents = doc2.expandedStates && groupMode === MODE_BREAK ? getLast(doc2.expandedStates) : doc2.contents;
                      cmds.push({
                        mode: groupMode,
                        doc: contents
                      });
                      break;
                    }
                    case "if-break": {
                      const groupMode = doc2.groupId ? groupModeMap[doc2.groupId] || MODE_FLAT : mode;
                      const contents = groupMode === MODE_BREAK ? doc2.breakContents : doc2.flatContents;
                      if (contents) {
                        cmds.push({
                          mode,
                          doc: contents
                        });
                      }
                      break;
                    }
                    case "line":
                      if (mode === MODE_BREAK || doc2.hard) {
                        return true;
                      }
                      if (!doc2.soft) {
                        out.push(" ");
                        width--;
                      }
                      break;
                    case "line-suffix":
                      hasLineSuffix = true;
                      break;
                    case "line-suffix-boundary":
                      if (hasLineSuffix) {
                        return false;
                      }
                      break;
                  }
                }
              }
              return false;
            }
            function printDocToString(doc2, options) {
              groupModeMap = {};
              const width = options.printWidth;
              const newLine = convertEndOfLineToChars(options.endOfLine);
              let pos = 0;
              const cmds = [{
                ind: rootIndent(),
                mode: MODE_BREAK,
                doc: doc2
              }];
              const out = [];
              let shouldRemeasure = false;
              const lineSuffix = [];
              while (cmds.length > 0) {
                const {
                  ind,
                  mode,
                  doc: doc22
                } = cmds.pop();
                if (typeof doc22 === "string") {
                  const formatted = newLine !== "\n" ? doc22.replace(/\n/g, newLine) : doc22;
                  out.push(formatted);
                  pos += getStringWidth(formatted);
                } else if (isConcat(doc22)) {
                  const parts = getDocParts(doc22);
                  for (let i = parts.length - 1; i >= 0; i--) {
                    cmds.push({
                      ind,
                      mode,
                      doc: parts[i]
                    });
                  }
                } else {
                  switch (doc22.type) {
                    case "cursor":
                      out.push(cursor.placeholder);
                      break;
                    case "indent":
                      cmds.push({
                        ind: makeIndent(ind, options),
                        mode,
                        doc: doc22.contents
                      });
                      break;
                    case "align":
                      cmds.push({
                        ind: makeAlign(ind, doc22.n, options),
                        mode,
                        doc: doc22.contents
                      });
                      break;
                    case "trim":
                      pos -= trim(out);
                      break;
                    case "group":
                      switch (mode) {
                        case MODE_FLAT:
                          if (!shouldRemeasure) {
                            cmds.push({
                              ind,
                              mode: doc22.break ? MODE_BREAK : MODE_FLAT,
                              doc: doc22.contents
                            });
                            break;
                          }
                        case MODE_BREAK: {
                          shouldRemeasure = false;
                          const next = {
                            ind,
                            mode: MODE_FLAT,
                            doc: doc22.contents
                          };
                          const rem = width - pos;
                          const hasLineSuffix = lineSuffix.length > 0;
                          if (!doc22.break && fits(next, cmds, rem, hasLineSuffix)) {
                            cmds.push(next);
                          } else {
                            if (doc22.expandedStates) {
                              const mostExpanded = getLast(doc22.expandedStates);
                              if (doc22.break) {
                                cmds.push({
                                  ind,
                                  mode: MODE_BREAK,
                                  doc: mostExpanded
                                });
                                break;
                              } else {
                                for (let i = 1; i < doc22.expandedStates.length + 1; i++) {
                                  if (i >= doc22.expandedStates.length) {
                                    cmds.push({
                                      ind,
                                      mode: MODE_BREAK,
                                      doc: mostExpanded
                                    });
                                    break;
                                  } else {
                                    const state = doc22.expandedStates[i];
                                    const cmd = {
                                      ind,
                                      mode: MODE_FLAT,
                                      doc: state
                                    };
                                    if (fits(cmd, cmds, rem, hasLineSuffix)) {
                                      cmds.push(cmd);
                                      break;
                                    }
                                  }
                                }
                              }
                            } else {
                              cmds.push({
                                ind,
                                mode: MODE_BREAK,
                                doc: doc22.contents
                              });
                            }
                          }
                          break;
                        }
                      }
                      if (doc22.id) {
                        groupModeMap[doc22.id] = getLast(cmds).mode;
                      }
                      break;
                    case "fill": {
                      const rem = width - pos;
                      const {
                        parts
                      } = doc22;
                      if (parts.length === 0) {
                        break;
                      }
                      const [content, whitespace2] = parts;
                      const contentFlatCmd = {
                        ind,
                        mode: MODE_FLAT,
                        doc: content
                      };
                      const contentBreakCmd = {
                        ind,
                        mode: MODE_BREAK,
                        doc: content
                      };
                      const contentFits = fits(contentFlatCmd, [], rem, lineSuffix.length > 0, true);
                      if (parts.length === 1) {
                        if (contentFits) {
                          cmds.push(contentFlatCmd);
                        } else {
                          cmds.push(contentBreakCmd);
                        }
                        break;
                      }
                      const whitespaceFlatCmd = {
                        ind,
                        mode: MODE_FLAT,
                        doc: whitespace2
                      };
                      const whitespaceBreakCmd = {
                        ind,
                        mode: MODE_BREAK,
                        doc: whitespace2
                      };
                      if (parts.length === 2) {
                        if (contentFits) {
                          cmds.push(whitespaceFlatCmd, contentFlatCmd);
                        } else {
                          cmds.push(whitespaceBreakCmd, contentBreakCmd);
                        }
                        break;
                      }
                      parts.splice(0, 2);
                      const remainingCmd = {
                        ind,
                        mode,
                        doc: fill(parts)
                      };
                      const secondContent = parts[0];
                      const firstAndSecondContentFlatCmd = {
                        ind,
                        mode: MODE_FLAT,
                        doc: [content, whitespace2, secondContent]
                      };
                      const firstAndSecondContentFits = fits(firstAndSecondContentFlatCmd, [], rem, lineSuffix.length > 0, true);
                      if (firstAndSecondContentFits) {
                        cmds.push(remainingCmd, whitespaceFlatCmd, contentFlatCmd);
                      } else if (contentFits) {
                        cmds.push(remainingCmd, whitespaceBreakCmd, contentFlatCmd);
                      } else {
                        cmds.push(remainingCmd, whitespaceBreakCmd, contentBreakCmd);
                      }
                      break;
                    }
                    case "if-break":
                    case "indent-if-break": {
                      const groupMode = doc22.groupId ? groupModeMap[doc22.groupId] : mode;
                      if (groupMode === MODE_BREAK) {
                        const breakContents = doc22.type === "if-break" ? doc22.breakContents : doc22.negate ? doc22.contents : indent(doc22.contents);
                        if (breakContents) {
                          cmds.push({
                            ind,
                            mode,
                            doc: breakContents
                          });
                        }
                      }
                      if (groupMode === MODE_FLAT) {
                        const flatContents = doc22.type === "if-break" ? doc22.flatContents : doc22.negate ? indent(doc22.contents) : doc22.contents;
                        if (flatContents) {
                          cmds.push({
                            ind,
                            mode,
                            doc: flatContents
                          });
                        }
                      }
                      break;
                    }
                    case "line-suffix":
                      lineSuffix.push({
                        ind,
                        mode,
                        doc: doc22.contents
                      });
                      break;
                    case "line-suffix-boundary":
                      if (lineSuffix.length > 0) {
                        cmds.push({
                          ind,
                          mode,
                          doc: {
                            type: "line",
                            hard: true
                          }
                        });
                      }
                      break;
                    case "line":
                      switch (mode) {
                        case MODE_FLAT:
                          if (!doc22.hard) {
                            if (!doc22.soft) {
                              out.push(" ");
                              pos += 1;
                            }
                            break;
                          } else {
                            shouldRemeasure = true;
                          }
                        case MODE_BREAK:
                          if (lineSuffix.length > 0) {
                            cmds.push({
                              ind,
                              mode,
                              doc: doc22
                            }, ...lineSuffix.reverse());
                            lineSuffix.length = 0;
                            break;
                          }
                          if (doc22.literal) {
                            if (ind.root) {
                              out.push(newLine, ind.root.value);
                              pos = ind.root.length;
                            } else {
                              out.push(newLine);
                              pos = 0;
                            }
                          } else {
                            pos -= trim(out);
                            out.push(newLine + ind.value);
                            pos = ind.length;
                          }
                          break;
                      }
                      break;
                    case "label":
                      cmds.push({
                        ind,
                        mode,
                        doc: doc22.contents
                      });
                      break;
                  }
                }
                if (cmds.length === 0 && lineSuffix.length > 0) {
                  cmds.push(...lineSuffix.reverse());
                  lineSuffix.length = 0;
                }
              }
              const cursorPlaceholderIndex = out.indexOf(cursor.placeholder);
              if (cursorPlaceholderIndex !== -1) {
                const otherCursorPlaceholderIndex = out.indexOf(cursor.placeholder, cursorPlaceholderIndex + 1);
                const beforeCursor = out.slice(0, cursorPlaceholderIndex).join("");
                const aroundCursor = out.slice(cursorPlaceholderIndex + 1, otherCursorPlaceholderIndex).join("");
                const afterCursor = out.slice(otherCursorPlaceholderIndex + 1).join("");
                return {
                  formatted: beforeCursor + aroundCursor + afterCursor,
                  cursorNodeStart: beforeCursor.length,
                  cursorNodeText: aroundCursor
                };
              }
              return {
                formatted: out.join("")
              };
            }
            module22.exports = {
              printDocToString
            };
          }
        });
        var require_doc_debug = __commonJS2({
          "src/document/doc-debug.js"(exports22, module22) {
            init_define_process();
            var {
              isConcat,
              getDocParts
            } = require_doc_utils();
            function flattenDoc(doc2) {
              if (!doc2) {
                return "";
              }
              if (isConcat(doc2)) {
                const res = [];
                for (const part of getDocParts(doc2)) {
                  if (isConcat(part)) {
                    res.push(...flattenDoc(part).parts);
                  } else {
                    const flattened = flattenDoc(part);
                    if (flattened !== "") {
                      res.push(flattened);
                    }
                  }
                }
                return {
                  type: "concat",
                  parts: res
                };
              }
              if (doc2.type === "if-break") {
                return Object.assign(Object.assign({}, doc2), {}, {
                  breakContents: flattenDoc(doc2.breakContents),
                  flatContents: flattenDoc(doc2.flatContents)
                });
              }
              if (doc2.type === "group") {
                return Object.assign(Object.assign({}, doc2), {}, {
                  contents: flattenDoc(doc2.contents),
                  expandedStates: doc2.expandedStates && doc2.expandedStates.map(flattenDoc)
                });
              }
              if (doc2.type === "fill") {
                return {
                  type: "fill",
                  parts: doc2.parts.map(flattenDoc)
                };
              }
              if (doc2.contents) {
                return Object.assign(Object.assign({}, doc2), {}, {
                  contents: flattenDoc(doc2.contents)
                });
              }
              return doc2;
            }
            function printDocToDebug(doc2) {
              const printedSymbols = /* @__PURE__ */ Object.create(null);
              const usedKeysForSymbols = /* @__PURE__ */ new Set();
              return printDoc(flattenDoc(doc2));
              function printDoc(doc22, index, parentParts) {
                if (typeof doc22 === "string") {
                  return JSON.stringify(doc22);
                }
                if (isConcat(doc22)) {
                  const printed = getDocParts(doc22).map(printDoc).filter(Boolean);
                  return printed.length === 1 ? printed[0] : `[${printed.join(", ")}]`;
                }
                if (doc22.type === "line") {
                  const withBreakParent = Array.isArray(parentParts) && parentParts[index + 1] && parentParts[index + 1].type === "break-parent";
                  if (doc22.literal) {
                    return withBreakParent ? "literalline" : "literallineWithoutBreakParent";
                  }
                  if (doc22.hard) {
                    return withBreakParent ? "hardline" : "hardlineWithoutBreakParent";
                  }
                  if (doc22.soft) {
                    return "softline";
                  }
                  return "line";
                }
                if (doc22.type === "break-parent") {
                  const afterHardline = Array.isArray(parentParts) && parentParts[index - 1] && parentParts[index - 1].type === "line" && parentParts[index - 1].hard;
                  return afterHardline ? void 0 : "breakParent";
                }
                if (doc22.type === "trim") {
                  return "trim";
                }
                if (doc22.type === "indent") {
                  return "indent(" + printDoc(doc22.contents) + ")";
                }
                if (doc22.type === "align") {
                  return doc22.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + printDoc(doc22.contents) + ")" : doc22.n < 0 ? "dedent(" + printDoc(doc22.contents) + ")" : doc22.n.type === "root" ? "markAsRoot(" + printDoc(doc22.contents) + ")" : "align(" + JSON.stringify(doc22.n) + ", " + printDoc(doc22.contents) + ")";
                }
                if (doc22.type === "if-break") {
                  return "ifBreak(" + printDoc(doc22.breakContents) + (doc22.flatContents ? ", " + printDoc(doc22.flatContents) : "") + (doc22.groupId ? (!doc22.flatContents ? ', ""' : "") + `, { groupId: ${printGroupId(doc22.groupId)} }` : "") + ")";
                }
                if (doc22.type === "indent-if-break") {
                  const optionsParts = [];
                  if (doc22.negate) {
                    optionsParts.push("negate: true");
                  }
                  if (doc22.groupId) {
                    optionsParts.push(`groupId: ${printGroupId(doc22.groupId)}`);
                  }
                  const options = optionsParts.length > 0 ? `, { ${optionsParts.join(", ")} }` : "";
                  return `indentIfBreak(${printDoc(doc22.contents)}${options})`;
                }
                if (doc22.type === "group") {
                  const optionsParts = [];
                  if (doc22.break && doc22.break !== "propagated") {
                    optionsParts.push("shouldBreak: true");
                  }
                  if (doc22.id) {
                    optionsParts.push(`id: ${printGroupId(doc22.id)}`);
                  }
                  const options = optionsParts.length > 0 ? `, { ${optionsParts.join(", ")} }` : "";
                  if (doc22.expandedStates) {
                    return `conditionalGroup([${doc22.expandedStates.map((part) => printDoc(part)).join(",")}]${options})`;
                  }
                  return `group(${printDoc(doc22.contents)}${options})`;
                }
                if (doc22.type === "fill") {
                  return `fill([${doc22.parts.map((part) => printDoc(part)).join(", ")}])`;
                }
                if (doc22.type === "line-suffix") {
                  return "lineSuffix(" + printDoc(doc22.contents) + ")";
                }
                if (doc22.type === "line-suffix-boundary") {
                  return "lineSuffixBoundary";
                }
                if (doc22.type === "label") {
                  return `label(${JSON.stringify(doc22.label)}, ${printDoc(doc22.contents)})`;
                }
                throw new Error("Unknown doc type " + doc22.type);
              }
              function printGroupId(id) {
                if (typeof id !== "symbol") {
                  return JSON.stringify(String(id));
                }
                if (id in printedSymbols) {
                  return printedSymbols[id];
                }
                const prefix = String(id).slice(7, -1) || "symbol";
                for (let counter = 0; ; counter++) {
                  const key = prefix + (counter > 0 ? ` #${counter}` : "");
                  if (!usedKeysForSymbols.has(key)) {
                    usedKeysForSymbols.add(key);
                    return printedSymbols[id] = `Symbol.for(${JSON.stringify(key)})`;
                  }
                }
              }
            }
            module22.exports = {
              printDocToDebug
            };
          }
        });
        init_define_process();
        module3.exports = {
          builders: require_doc_builders(),
          printer: require_doc_printer(),
          utils: require_doc_utils(),
          debug: require_doc_debug()
        };
      }
    });
    return require_doc_js_umd();
  });
})(doc);
function printScope(node, scope) {
  function print(node2) {
    if (!node2) {
      return "";
    }
    const innerPrint = () => {
      switch (node2.type) {
        case "literal":
          if (node2.value === '"') {
            return docExports.builders.group(["'", node2.value, "'"]);
          }
          const s2 = node2.value;
          return docExports.builders.group(['"', s2, '"']);
        case "nonterminal":
          return node2.value;
        case "epsilon":
          return "ε";
        case "group":
          return docExports.builders.group([
            "( ",
            docExports.builders.indent(print(node2.value)),
            docExports.builders.softline,
            " )"
          ]);
        case "regex":
          return docExports.builders.group(["/", node2.value.source, "/", node2.value.flags]);
        case "optional":
          return docExports.builders.group([print(node2.value), "?"]);
        case "optionalWhitespace":
          return docExports.builders.group([print(node2.value), "?w"]);
        case "minus":
          return docExports.builders.group([print(node2.value[0]), " - ", print(node2.value[1])]);
        case "many":
          return docExports.builders.group([print(node2.value), "*"]);
        case "many1":
          return docExports.builders.group([print(node2.value), "+"]);
        case "skip":
          return docExports.builders.group([
            print(node2.value[0]),
            " << ",
            print(node2.value[1])
          ]);
        case "next":
          return docExports.builders.group([
            print(node2.value[0]),
            " >> ",
            print(node2.value[1])
          ]);
        case "concatenation": {
          const delim = " , ";
          return docExports.builders.group([
            docExports.builders.indent([
              docExports.builders.softline,
              docExports.builders.join(
                [docExports.builders.conditionalGroup([docExports.builders.softline]), delim],
                node2.value.map((x) => print(x))
              )
            ])
          ]);
        }
        case "alternation": {
          const delim = " | ";
          return docExports.builders.group([
            docExports.builders.indent([
              docExports.builders.softline,
              docExports.builders.join(
                [docExports.builders.conditionalGroup([docExports.builders.softline]), delim],
                node2.value.map((x) => print(x))
              )
            ])
          ]);
        }
      }
    };
    const s = innerPrint();
    if (node2.comment) {
      const left = node2.comment.left.length ? node2.comment.left + " " : "";
      const right = node2.comment.right.length ? " " + node2.comment.right : "";
      return docExports.builders.group([left, s, right]);
    }
    return s;
  }
  return print(node);
}
function EBNFPrint(path, options) {
  const ast = path.getValue();
  if (!ast) {
    return "";
  }
  options.printWidth = 66;
  const d = docExports.builders.join(
    docExports.builders.hardline,
    [...ast.entries()].map(([name, rule]) => {
      var _a, _b;
      const { expression, comment } = rule;
      const line = [name, " = ", printScope(expression), " ;"];
      const above = ((_a = comment == null ? void 0 : comment.above) == null ? void 0 : _a.length) ? [docExports.builders.join(docExports.builders.hardline, comment.above), docExports.builders.hardline] : [];
      const below = ((_b = comment == null ? void 0 : comment.below) == null ? void 0 : _b.length) ? [docExports.builders.join(docExports.builders.hardline, comment.below)] : [];
      const commentedLine = docExports.builders.group([above, line, " ", docExports.builders.lineSuffix(below)]);
      if (expression.type === "concatenation" || expression.type === "alternation") {
        return docExports.builders.group([commentedLine, docExports.builders.hardline]);
      }
      return commentedLine;
    })
  );
  return d;
}
function printExpressionToString(node) {
  return docExports.printer.printDocToString(printScope(node), {
    printWidth: 66,
    tabWidth: 2,
    useTabs: false
  }).formatted;
}
const languages = [
  {
    name: "EBNF",
    since: "0.1",
    parsers: ["ebnf"],
    extensions: [".ebnf"],
    tmScope: "ebnf.ebnf",
    aceMode: "text",
    linguistLanguageId: 666,
    vscodeLanguageIds: ["ebnf"]
  }
];
const printers = {
  ebnf: {
    print: EBNFPrint
  }
};
const parsers = {
  ebnf: {
    parse,
    astFormat: "ebnf",
    locStart,
    locEnd,
    preprocess
  }
};
const defaultOptions = {
  ebnf: {
    printWidth: 66,
    tabWidth: 4,
    useTabs: false
  }
};
const EBNFPlugin = {
  languages,
  printers,
  parsers,
  defaultOptions
};
const formatEBNF = (grammar, options) => {
  return prettier.format(grammar, {
    parser: "ebnf",
    plugins: [EBNFPlugin],
    ...defaultOptions,
    ...options ?? {}
  });
};
const reportParsingError = (parser, document, diagnosticCollection) => {
  const state = parser.state;
  const lineNumber = state.getLineNumber();
  const columnNumber = state.getColumnNumber();
  const diagnostic = new vscode__namespace.Diagnostic(
    new vscode__namespace.Range(lineNumber, columnNumber, lineNumber, columnNumber + 1),
    "Error parsing BBNF, last value was: " + printExpressionToString(state == null ? void 0 : state.value),
    vscode__namespace.DiagnosticSeverity.Error
  );
  diagnosticCollection.set(document.uri, [
    ...diagnosticCollection.get(document.uri) ?? [],
    diagnostic
  ]);
};
const reportUndefinedNonterminals = (text, document, diagnosticCollection) => {
  const [parser, ast] = generateASTFromEBNF(text);
  if (parser.state.isError) {
    reportParsingError(parser, document, diagnosticCollection);
    return;
  }
  const undefinedNonterminals = findUndefinedNonterminals(ast);
  for (const match of undefinedNonterminals) {
    const { value, offset } = match;
    const diagnostic = new vscode__namespace.Diagnostic(
      new vscode__namespace.Range(
        document.positionAt(offset - value.length - 1),
        document.positionAt(offset - 1)
      ),
      `Undefined variable: ${value}`,
      vscode__namespace.DiagnosticSeverity.Error
    );
    diagnosticCollection.set(document.uri, [
      ...diagnosticCollection.get(document.uri) ?? [],
      diagnostic
    ]);
  }
};
const reportUnusedTerminals = (text, document, diagnosticCollection) => {
  const [parser, ast] = generateASTFromEBNF(text);
  if (parser.state.isError) {
    reportParsingError(parser, document, diagnosticCollection);
    return;
  }
  const unusedTerminals = findUnusedTerminals(ast);
  for (const [name, match] of unusedTerminals) {
    const { offset } = match;
    const diagnostic = new vscode__namespace.Diagnostic(
      new vscode__namespace.Range(
        document.positionAt(offset - name.length - 1),
        document.positionAt(offset - 1)
      ),
      `Unused variable: ${name}`,
      vscode__namespace.DiagnosticSeverity.Warning
    );
    diagnosticCollection.set(document.uri, [
      ...diagnosticCollection.get(document.uri) ?? [],
      diagnostic
    ]);
  }
};
async function activate(context) {
  const diagnosticCollection = vscode__namespace.languages.createDiagnosticCollection("bbnf");
  diagnosticCollection.clear();
  const BBNFFileSelector = { language: "bbnf", scheme: "file" };
  const report = (document, text) => {
    diagnosticCollection.clear();
    if (document.languageId !== "bbnf") {
      return;
    }
    if (text.length === 0) {
      return;
    }
    reportUndefinedNonterminals(text, document, diagnosticCollection);
    reportUnusedTerminals(text, document, diagnosticCollection);
  };
  const documentChangeDisposable = vscode__namespace.workspace.onDidChangeTextDocument(
    (event) => {
      const document = event.document;
      const text = document.getText();
      report(document, text);
    }
  );
  context.subscriptions.push(documentChangeDisposable);
  const documentOpenDisposable = vscode__namespace.workspace.onDidOpenTextDocument(
    (document) => {
      const text = document.getText();
      report(document, text);
    }
  );
  context.subscriptions.push(documentOpenDisposable);
  const formatBBNF = vscode__namespace.languages.registerDocumentFormattingEditProvider(
    BBNFFileSelector,
    {
      provideDocumentFormattingEdits(document) {
        const text = document.getText();
        if (text.length === 0) {
          return [];
        }
        const formatted = formatEBNF(text);
        if (!formatted) {
          return [];
        }
        report(document, formatted);
        return [
          vscode__namespace.TextEdit.replace(
            new vscode__namespace.Range(
              document.positionAt(0),
              document.positionAt(document.getText().length)
            ),
            formatted
          )
        ];
      }
    }
  );
  context.subscriptions.push(formatBBNF);
  const testGrammarCache = /* @__PURE__ */ new Map();
  const testGrammar = vscode__namespace.commands.registerCommand(
    "extension.testGrammar",
    async () => {
      const editor = vscode__namespace.window.activeTextEditor;
      if (!editor) {
        return;
      }
      const document = editor.document;
      const text = document.getText();
      if (text.length === 0) {
        return;
      }
      let nonterminals;
      let ast;
      try {
        [nonterminals, ast] = generateParserFromEBNF(text);
      } catch (e) {
        return;
      }
      const key = document.uri.toString();
      if (!testGrammarCache.has(key)) {
        testGrammarCache.set(key, {
          nonterminal: "",
          testString: ""
        });
      }
      const cache = testGrammarCache.get(key);
      const nonterminalString = await vscode__namespace.window.showInputBox({
        prompt: "Enter a nonterminal to test",
        placeHolder: "Type here...",
        value: cache.nonterminal
      });
      if (!nonterminalString) {
        return;
      }
      cache.nonterminal = nonterminalString;
      const testString = await vscode__namespace.window.showInputBox({
        prompt: "Enter your test string",
        placeHolder: "Type here...",
        value: cache.testString
      });
      if (!testString) {
        return;
      }
      cache.testString = testString;
      const parser = nonterminals[nonterminalString];
      const result = parser.parse(testString);
      if (!result) {
        vscode__namespace.window.showInformationMessage("No match");
      } else {
        vscode__namespace.window.showInformationMessage(`Matched: ${result}`);
      }
    }
  );
  context.subscriptions.push(testGrammar);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map
