"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require$$0$9 = require("vscode");
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
const path$3 = {};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        var args = [null];
        args.push.apply(args, arguments);
        var Ctor = Function.bind.apply(f, args);
        return new Ctor();
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var nodeExports = {};
var node = {
  get exports() {
    return nodeExports;
  },
  set exports(v) {
    nodeExports = v;
  }
};
var main$9 = {};
var api$6 = {};
var main$8 = {};
var browserExports$1 = {};
var browser$7 = {
  get exports() {
    return browserExports$1;
  },
  set exports(v) {
    browserExports$1 = v;
  }
};
var main$7 = {};
var ril$1 = {};
var api$5 = {};
var messages$3 = {};
var is$4 = {};
var hasRequiredIs;
function requireIs() {
  if (hasRequiredIs)
    return is$4;
  hasRequiredIs = 1;
  Object.defineProperty(is$4, "__esModule", { value: true });
  is$4.stringArray = is$4.array = is$4.func = is$4.error = is$4.number = is$4.string = is$4.boolean = void 0;
  function boolean2(value) {
    return value === true || value === false;
  }
  is$4.boolean = boolean2;
  function string2(value) {
    return typeof value === "string" || value instanceof String;
  }
  is$4.string = string2;
  function number2(value) {
    return typeof value === "number" || value instanceof Number;
  }
  is$4.number = number2;
  function error2(value) {
    return value instanceof Error;
  }
  is$4.error = error2;
  function func2(value) {
    return typeof value === "function";
  }
  is$4.func = func2;
  function array2(value) {
    return Array.isArray(value);
  }
  is$4.array = array2;
  function stringArray2(value) {
    return array2(value) && value.every((elem) => string2(elem));
  }
  is$4.stringArray = stringArray2;
  return is$4;
}
var hasRequiredMessages;
function requireMessages() {
  if (hasRequiredMessages)
    return messages$3;
  hasRequiredMessages = 1;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Message = exports2.NotificationType9 = exports2.NotificationType8 = exports2.NotificationType7 = exports2.NotificationType6 = exports2.NotificationType5 = exports2.NotificationType4 = exports2.NotificationType3 = exports2.NotificationType2 = exports2.NotificationType1 = exports2.NotificationType0 = exports2.NotificationType = exports2.RequestType9 = exports2.RequestType8 = exports2.RequestType7 = exports2.RequestType6 = exports2.RequestType5 = exports2.RequestType4 = exports2.RequestType3 = exports2.RequestType2 = exports2.RequestType1 = exports2.RequestType = exports2.RequestType0 = exports2.AbstractMessageSignature = exports2.ParameterStructures = exports2.ResponseError = exports2.ErrorCodes = void 0;
    const is2 = requireIs();
    var ErrorCodes;
    (function(ErrorCodes2) {
      ErrorCodes2.ParseError = -32700;
      ErrorCodes2.InvalidRequest = -32600;
      ErrorCodes2.MethodNotFound = -32601;
      ErrorCodes2.InvalidParams = -32602;
      ErrorCodes2.InternalError = -32603;
      ErrorCodes2.jsonrpcReservedErrorRangeStart = -32099;
      ErrorCodes2.serverErrorStart = -32099;
      ErrorCodes2.MessageWriteError = -32099;
      ErrorCodes2.MessageReadError = -32098;
      ErrorCodes2.PendingResponseRejected = -32097;
      ErrorCodes2.ConnectionInactive = -32096;
      ErrorCodes2.ServerNotInitialized = -32002;
      ErrorCodes2.UnknownErrorCode = -32001;
      ErrorCodes2.jsonrpcReservedErrorRangeEnd = -32e3;
      ErrorCodes2.serverErrorEnd = -32e3;
    })(ErrorCodes = exports2.ErrorCodes || (exports2.ErrorCodes = {}));
    class ResponseError extends Error {
      constructor(code2, message, data) {
        super(message);
        this.code = is2.number(code2) ? code2 : ErrorCodes.UnknownErrorCode;
        this.data = data;
        Object.setPrototypeOf(this, ResponseError.prototype);
      }
      toJson() {
        const result = {
          code: this.code,
          message: this.message
        };
        if (this.data !== void 0) {
          result.data = this.data;
        }
        return result;
      }
    }
    exports2.ResponseError = ResponseError;
    class ParameterStructures {
      constructor(kind) {
        this.kind = kind;
      }
      static is(value) {
        return value === ParameterStructures.auto || value === ParameterStructures.byName || value === ParameterStructures.byPosition;
      }
      toString() {
        return this.kind;
      }
    }
    exports2.ParameterStructures = ParameterStructures;
    ParameterStructures.auto = new ParameterStructures("auto");
    ParameterStructures.byPosition = new ParameterStructures("byPosition");
    ParameterStructures.byName = new ParameterStructures("byName");
    class AbstractMessageSignature {
      constructor(method, numberOfParams) {
        this.method = method;
        this.numberOfParams = numberOfParams;
      }
      get parameterStructures() {
        return ParameterStructures.auto;
      }
    }
    exports2.AbstractMessageSignature = AbstractMessageSignature;
    class RequestType0 extends AbstractMessageSignature {
      constructor(method) {
        super(method, 0);
      }
    }
    exports2.RequestType0 = RequestType0;
    class RequestType extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    }
    exports2.RequestType = RequestType;
    class RequestType1 extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    }
    exports2.RequestType1 = RequestType1;
    class RequestType2 extends AbstractMessageSignature {
      constructor(method) {
        super(method, 2);
      }
    }
    exports2.RequestType2 = RequestType2;
    class RequestType3 extends AbstractMessageSignature {
      constructor(method) {
        super(method, 3);
      }
    }
    exports2.RequestType3 = RequestType3;
    class RequestType4 extends AbstractMessageSignature {
      constructor(method) {
        super(method, 4);
      }
    }
    exports2.RequestType4 = RequestType4;
    class RequestType5 extends AbstractMessageSignature {
      constructor(method) {
        super(method, 5);
      }
    }
    exports2.RequestType5 = RequestType5;
    class RequestType6 extends AbstractMessageSignature {
      constructor(method) {
        super(method, 6);
      }
    }
    exports2.RequestType6 = RequestType6;
    class RequestType7 extends AbstractMessageSignature {
      constructor(method) {
        super(method, 7);
      }
    }
    exports2.RequestType7 = RequestType7;
    class RequestType8 extends AbstractMessageSignature {
      constructor(method) {
        super(method, 8);
      }
    }
    exports2.RequestType8 = RequestType8;
    class RequestType9 extends AbstractMessageSignature {
      constructor(method) {
        super(method, 9);
      }
    }
    exports2.RequestType9 = RequestType9;
    class NotificationType extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    }
    exports2.NotificationType = NotificationType;
    class NotificationType0 extends AbstractMessageSignature {
      constructor(method) {
        super(method, 0);
      }
    }
    exports2.NotificationType0 = NotificationType0;
    class NotificationType1 extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    }
    exports2.NotificationType1 = NotificationType1;
    class NotificationType2 extends AbstractMessageSignature {
      constructor(method) {
        super(method, 2);
      }
    }
    exports2.NotificationType2 = NotificationType2;
    class NotificationType3 extends AbstractMessageSignature {
      constructor(method) {
        super(method, 3);
      }
    }
    exports2.NotificationType3 = NotificationType3;
    class NotificationType4 extends AbstractMessageSignature {
      constructor(method) {
        super(method, 4);
      }
    }
    exports2.NotificationType4 = NotificationType4;
    class NotificationType5 extends AbstractMessageSignature {
      constructor(method) {
        super(method, 5);
      }
    }
    exports2.NotificationType5 = NotificationType5;
    class NotificationType6 extends AbstractMessageSignature {
      constructor(method) {
        super(method, 6);
      }
    }
    exports2.NotificationType6 = NotificationType6;
    class NotificationType7 extends AbstractMessageSignature {
      constructor(method) {
        super(method, 7);
      }
    }
    exports2.NotificationType7 = NotificationType7;
    class NotificationType8 extends AbstractMessageSignature {
      constructor(method) {
        super(method, 8);
      }
    }
    exports2.NotificationType8 = NotificationType8;
    class NotificationType9 extends AbstractMessageSignature {
      constructor(method) {
        super(method, 9);
      }
    }
    exports2.NotificationType9 = NotificationType9;
    (function(Message) {
      function isRequest(message) {
        const candidate = message;
        return candidate && is2.string(candidate.method) && (is2.string(candidate.id) || is2.number(candidate.id));
      }
      Message.isRequest = isRequest;
      function isNotification(message) {
        const candidate = message;
        return candidate && is2.string(candidate.method) && message.id === void 0;
      }
      Message.isNotification = isNotification;
      function isResponse(message) {
        const candidate = message;
        return candidate && (candidate.result !== void 0 || !!candidate.error) && (is2.string(candidate.id) || is2.number(candidate.id) || candidate.id === null);
      }
      Message.isResponse = isResponse;
    })(exports2.Message || (exports2.Message = {}));
  })(messages$3);
  return messages$3;
}
var linkedMap = {};
var hasRequiredLinkedMap;
function requireLinkedMap() {
  if (hasRequiredLinkedMap)
    return linkedMap;
  hasRequiredLinkedMap = 1;
  (function(exports2) {
    var _a;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LRUCache = exports2.LinkedMap = exports2.Touch = void 0;
    var Touch;
    (function(Touch2) {
      Touch2.None = 0;
      Touch2.First = 1;
      Touch2.AsOld = Touch2.First;
      Touch2.Last = 2;
      Touch2.AsNew = Touch2.Last;
    })(Touch = exports2.Touch || (exports2.Touch = {}));
    class LinkedMap {
      constructor() {
        this[_a] = "LinkedMap";
        this._map = /* @__PURE__ */ new Map();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state = 0;
      }
      clear() {
        this._map.clear();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state++;
      }
      isEmpty() {
        return !this._head && !this._tail;
      }
      get size() {
        return this._size;
      }
      get first() {
        var _a2;
        return (_a2 = this._head) == null ? void 0 : _a2.value;
      }
      get last() {
        var _a2;
        return (_a2 = this._tail) == null ? void 0 : _a2.value;
      }
      has(key) {
        return this._map.has(key);
      }
      get(key, touch = Touch.None) {
        const item = this._map.get(key);
        if (!item) {
          return void 0;
        }
        if (touch !== Touch.None) {
          this.touch(item, touch);
        }
        return item.value;
      }
      set(key, value, touch = Touch.None) {
        let item = this._map.get(key);
        if (item) {
          item.value = value;
          if (touch !== Touch.None) {
            this.touch(item, touch);
          }
        } else {
          item = { key, value, next: void 0, previous: void 0 };
          switch (touch) {
            case Touch.None:
              this.addItemLast(item);
              break;
            case Touch.First:
              this.addItemFirst(item);
              break;
            case Touch.Last:
              this.addItemLast(item);
              break;
            default:
              this.addItemLast(item);
              break;
          }
          this._map.set(key, item);
          this._size++;
        }
        return this;
      }
      delete(key) {
        return !!this.remove(key);
      }
      remove(key) {
        const item = this._map.get(key);
        if (!item) {
          return void 0;
        }
        this._map.delete(key);
        this.removeItem(item);
        this._size--;
        return item.value;
      }
      shift() {
        if (!this._head && !this._tail) {
          return void 0;
        }
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        const item = this._head;
        this._map.delete(item.key);
        this.removeItem(item);
        this._size--;
        return item.value;
      }
      forEach(callbackfn, thisArg) {
        const state = this._state;
        let current = this._head;
        while (current) {
          if (thisArg) {
            callbackfn.bind(thisArg)(current.value, current.key, this);
          } else {
            callbackfn(current.value, current.key, this);
          }
          if (this._state !== state) {
            throw new Error(`LinkedMap got modified during iteration.`);
          }
          current = current.next;
        }
      }
      keys() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: current.key, done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      values() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: current.value, done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      entries() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: [current.key, current.value], done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      [(_a = Symbol.toStringTag, Symbol.iterator)]() {
        return this.entries();
      }
      trimOld(newSize) {
        if (newSize >= this.size) {
          return;
        }
        if (newSize === 0) {
          this.clear();
          return;
        }
        let current = this._head;
        let currentSize = this.size;
        while (current && currentSize > newSize) {
          this._map.delete(current.key);
          current = current.next;
          currentSize--;
        }
        this._head = current;
        this._size = currentSize;
        if (current) {
          current.previous = void 0;
        }
        this._state++;
      }
      addItemFirst(item) {
        if (!this._head && !this._tail) {
          this._tail = item;
        } else if (!this._head) {
          throw new Error("Invalid list");
        } else {
          item.next = this._head;
          this._head.previous = item;
        }
        this._head = item;
        this._state++;
      }
      addItemLast(item) {
        if (!this._head && !this._tail) {
          this._head = item;
        } else if (!this._tail) {
          throw new Error("Invalid list");
        } else {
          item.previous = this._tail;
          this._tail.next = item;
        }
        this._tail = item;
        this._state++;
      }
      removeItem(item) {
        if (item === this._head && item === this._tail) {
          this._head = void 0;
          this._tail = void 0;
        } else if (item === this._head) {
          if (!item.next) {
            throw new Error("Invalid list");
          }
          item.next.previous = void 0;
          this._head = item.next;
        } else if (item === this._tail) {
          if (!item.previous) {
            throw new Error("Invalid list");
          }
          item.previous.next = void 0;
          this._tail = item.previous;
        } else {
          const next = item.next;
          const previous = item.previous;
          if (!next || !previous) {
            throw new Error("Invalid list");
          }
          next.previous = previous;
          previous.next = next;
        }
        item.next = void 0;
        item.previous = void 0;
        this._state++;
      }
      touch(item, touch) {
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        if (touch !== Touch.First && touch !== Touch.Last) {
          return;
        }
        if (touch === Touch.First) {
          if (item === this._head) {
            return;
          }
          const next = item.next;
          const previous = item.previous;
          if (item === this._tail) {
            previous.next = void 0;
            this._tail = previous;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item.previous = void 0;
          item.next = this._head;
          this._head.previous = item;
          this._head = item;
          this._state++;
        } else if (touch === Touch.Last) {
          if (item === this._tail) {
            return;
          }
          const next = item.next;
          const previous = item.previous;
          if (item === this._head) {
            next.previous = void 0;
            this._head = next;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item.next = void 0;
          item.previous = this._tail;
          this._tail.next = item;
          this._tail = item;
          this._state++;
        }
      }
      toJSON() {
        const data = [];
        this.forEach((value, key) => {
          data.push([key, value]);
        });
        return data;
      }
      fromJSON(data) {
        this.clear();
        for (const [key, value] of data) {
          this.set(key, value);
        }
      }
    }
    exports2.LinkedMap = LinkedMap;
    class LRUCache extends LinkedMap {
      constructor(limit, ratio = 1) {
        super();
        this._limit = limit;
        this._ratio = Math.min(Math.max(0, ratio), 1);
      }
      get limit() {
        return this._limit;
      }
      set limit(limit) {
        this._limit = limit;
        this.checkTrim();
      }
      get ratio() {
        return this._ratio;
      }
      set ratio(ratio) {
        this._ratio = Math.min(Math.max(0, ratio), 1);
        this.checkTrim();
      }
      get(key, touch = Touch.AsNew) {
        return super.get(key, touch);
      }
      peek(key) {
        return super.get(key, Touch.None);
      }
      set(key, value) {
        super.set(key, value, Touch.Last);
        this.checkTrim();
        return this;
      }
      checkTrim() {
        if (this.size > this._limit) {
          this.trimOld(Math.round(this._limit * this._ratio));
        }
      }
    }
    exports2.LRUCache = LRUCache;
  })(linkedMap);
  return linkedMap;
}
var disposable = {};
var hasRequiredDisposable;
function requireDisposable() {
  if (hasRequiredDisposable)
    return disposable;
  hasRequiredDisposable = 1;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Disposable = void 0;
    (function(Disposable) {
      function create(func2) {
        return {
          dispose: func2
        };
      }
      Disposable.create = create;
    })(exports2.Disposable || (exports2.Disposable = {}));
  })(disposable);
  return disposable;
}
var events = {};
var ral = {};
var hasRequiredRal;
function requireRal() {
  if (hasRequiredRal)
    return ral;
  hasRequiredRal = 1;
  Object.defineProperty(ral, "__esModule", { value: true });
  let _ral;
  function RAL() {
    if (_ral === void 0) {
      throw new Error(`No runtime abstraction layer installed`);
    }
    return _ral;
  }
  (function(RAL2) {
    function install(ral2) {
      if (ral2 === void 0) {
        throw new Error(`No runtime abstraction layer provided`);
      }
      _ral = ral2;
    }
    RAL2.install = install;
  })(RAL || (RAL = {}));
  ral.default = RAL;
  return ral;
}
var hasRequiredEvents;
function requireEvents() {
  if (hasRequiredEvents)
    return events;
  hasRequiredEvents = 1;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Emitter = exports2.Event = void 0;
    const ral_1 = requireRal();
    (function(Event) {
      const _disposable = { dispose() {
      } };
      Event.None = function() {
        return _disposable;
      };
    })(exports2.Event || (exports2.Event = {}));
    class CallbackList {
      add(callback, context = null, bucket) {
        if (!this._callbacks) {
          this._callbacks = [];
          this._contexts = [];
        }
        this._callbacks.push(callback);
        this._contexts.push(context);
        if (Array.isArray(bucket)) {
          bucket.push({ dispose: () => this.remove(callback, context) });
        }
      }
      remove(callback, context = null) {
        if (!this._callbacks) {
          return;
        }
        let foundCallbackWithDifferentContext = false;
        for (let i = 0, len = this._callbacks.length; i < len; i++) {
          if (this._callbacks[i] === callback) {
            if (this._contexts[i] === context) {
              this._callbacks.splice(i, 1);
              this._contexts.splice(i, 1);
              return;
            } else {
              foundCallbackWithDifferentContext = true;
            }
          }
        }
        if (foundCallbackWithDifferentContext) {
          throw new Error("When adding a listener with a context, you should remove it with the same context");
        }
      }
      invoke(...args) {
        if (!this._callbacks) {
          return [];
        }
        const ret = [], callbacks = this._callbacks.slice(0), contexts = this._contexts.slice(0);
        for (let i = 0, len = callbacks.length; i < len; i++) {
          try {
            ret.push(callbacks[i].apply(contexts[i], args));
          } catch (e) {
            (0, ral_1.default)().console.error(e);
          }
        }
        return ret;
      }
      isEmpty() {
        return !this._callbacks || this._callbacks.length === 0;
      }
      dispose() {
        this._callbacks = void 0;
        this._contexts = void 0;
      }
    }
    class Emitter {
      constructor(_options) {
        this._options = _options;
      }
      /**
       * For the public to allow to subscribe
       * to events from this Emitter
       */
      get event() {
        if (!this._event) {
          this._event = (listener, thisArgs, disposables) => {
            if (!this._callbacks) {
              this._callbacks = new CallbackList();
            }
            if (this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty()) {
              this._options.onFirstListenerAdd(this);
            }
            this._callbacks.add(listener, thisArgs);
            const result = {
              dispose: () => {
                if (!this._callbacks) {
                  return;
                }
                this._callbacks.remove(listener, thisArgs);
                result.dispose = Emitter._noop;
                if (this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty()) {
                  this._options.onLastListenerRemove(this);
                }
              }
            };
            if (Array.isArray(disposables)) {
              disposables.push(result);
            }
            return result;
          };
        }
        return this._event;
      }
      /**
       * To be kept private to fire an event to
       * subscribers
       */
      fire(event) {
        if (this._callbacks) {
          this._callbacks.invoke.call(this._callbacks, event);
        }
      }
      dispose() {
        if (this._callbacks) {
          this._callbacks.dispose();
          this._callbacks = void 0;
        }
      }
    }
    exports2.Emitter = Emitter;
    Emitter._noop = function() {
    };
  })(events);
  return events;
}
var cancellation = {};
var hasRequiredCancellation;
function requireCancellation() {
  if (hasRequiredCancellation)
    return cancellation;
  hasRequiredCancellation = 1;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CancellationTokenSource = exports2.CancellationToken = void 0;
    const ral_1 = requireRal();
    const Is2 = requireIs();
    const events_1 = requireEvents();
    var CancellationToken;
    (function(CancellationToken2) {
      CancellationToken2.None = Object.freeze({
        isCancellationRequested: false,
        onCancellationRequested: events_1.Event.None
      });
      CancellationToken2.Cancelled = Object.freeze({
        isCancellationRequested: true,
        onCancellationRequested: events_1.Event.None
      });
      function is2(value) {
        const candidate = value;
        return candidate && (candidate === CancellationToken2.None || candidate === CancellationToken2.Cancelled || Is2.boolean(candidate.isCancellationRequested) && !!candidate.onCancellationRequested);
      }
      CancellationToken2.is = is2;
    })(CancellationToken = exports2.CancellationToken || (exports2.CancellationToken = {}));
    const shortcutEvent = Object.freeze(function(callback, context) {
      const handle = (0, ral_1.default)().timer.setTimeout(callback.bind(context), 0);
      return { dispose() {
        handle.dispose();
      } };
    });
    class MutableToken {
      constructor() {
        this._isCancelled = false;
      }
      cancel() {
        if (!this._isCancelled) {
          this._isCancelled = true;
          if (this._emitter) {
            this._emitter.fire(void 0);
            this.dispose();
          }
        }
      }
      get isCancellationRequested() {
        return this._isCancelled;
      }
      get onCancellationRequested() {
        if (this._isCancelled) {
          return shortcutEvent;
        }
        if (!this._emitter) {
          this._emitter = new events_1.Emitter();
        }
        return this._emitter.event;
      }
      dispose() {
        if (this._emitter) {
          this._emitter.dispose();
          this._emitter = void 0;
        }
      }
    }
    class CancellationTokenSource {
      get token() {
        if (!this._token) {
          this._token = new MutableToken();
        }
        return this._token;
      }
      cancel() {
        if (!this._token) {
          this._token = CancellationToken.Cancelled;
        } else {
          this._token.cancel();
        }
      }
      dispose() {
        if (!this._token) {
          this._token = CancellationToken.None;
        } else if (this._token instanceof MutableToken) {
          this._token.dispose();
        }
      }
    }
    exports2.CancellationTokenSource = CancellationTokenSource;
  })(cancellation);
  return cancellation;
}
var sharedArrayCancellation = {};
var hasRequiredSharedArrayCancellation;
function requireSharedArrayCancellation() {
  if (hasRequiredSharedArrayCancellation)
    return sharedArrayCancellation;
  hasRequiredSharedArrayCancellation = 1;
  Object.defineProperty(sharedArrayCancellation, "__esModule", { value: true });
  sharedArrayCancellation.SharedArrayReceiverStrategy = sharedArrayCancellation.SharedArraySenderStrategy = void 0;
  const cancellation_1 = requireCancellation();
  var CancellationState;
  (function(CancellationState2) {
    CancellationState2.Continue = 0;
    CancellationState2.Cancelled = 1;
  })(CancellationState || (CancellationState = {}));
  class SharedArraySenderStrategy {
    constructor() {
      this.buffers = /* @__PURE__ */ new Map();
    }
    enableCancellation(request) {
      if (request.id === null) {
        return;
      }
      const buffer = new SharedArrayBuffer(4);
      const data = new Int32Array(buffer, 0, 1);
      data[0] = CancellationState.Continue;
      this.buffers.set(request.id, buffer);
      request.$cancellationData = buffer;
    }
    async sendCancellation(_conn, id) {
      const buffer = this.buffers.get(id);
      if (buffer === void 0) {
        return;
      }
      const data = new Int32Array(buffer, 0, 1);
      Atomics.store(data, 0, CancellationState.Cancelled);
    }
    cleanup(id) {
      this.buffers.delete(id);
    }
    dispose() {
      this.buffers.clear();
    }
  }
  sharedArrayCancellation.SharedArraySenderStrategy = SharedArraySenderStrategy;
  class SharedArrayBufferCancellationToken {
    constructor(buffer) {
      this.data = new Int32Array(buffer, 0, 1);
    }
    get isCancellationRequested() {
      return Atomics.load(this.data, 0) === CancellationState.Cancelled;
    }
    get onCancellationRequested() {
      throw new Error(`Cancellation over SharedArrayBuffer doesn't support cancellation events`);
    }
  }
  class SharedArrayBufferCancellationTokenSource {
    constructor(buffer) {
      this.token = new SharedArrayBufferCancellationToken(buffer);
    }
    cancel() {
    }
    dispose() {
    }
  }
  class SharedArrayReceiverStrategy {
    constructor() {
      this.kind = "request";
    }
    createCancellationTokenSource(request) {
      const buffer = request.$cancellationData;
      if (buffer === void 0) {
        return new cancellation_1.CancellationTokenSource();
      }
      return new SharedArrayBufferCancellationTokenSource(buffer);
    }
  }
  sharedArrayCancellation.SharedArrayReceiverStrategy = SharedArrayReceiverStrategy;
  return sharedArrayCancellation;
}
var messageReader = {};
var semaphore = {};
var hasRequiredSemaphore;
function requireSemaphore() {
  if (hasRequiredSemaphore)
    return semaphore;
  hasRequiredSemaphore = 1;
  Object.defineProperty(semaphore, "__esModule", { value: true });
  semaphore.Semaphore = void 0;
  const ral_1 = requireRal();
  class Semaphore2 {
    constructor(capacity = 1) {
      if (capacity <= 0) {
        throw new Error("Capacity must be greater than 0");
      }
      this._capacity = capacity;
      this._active = 0;
      this._waiting = [];
    }
    lock(thunk) {
      return new Promise((resolve, reject) => {
        this._waiting.push({ thunk, resolve, reject });
        this.runNext();
      });
    }
    get active() {
      return this._active;
    }
    runNext() {
      if (this._waiting.length === 0 || this._active === this._capacity) {
        return;
      }
      (0, ral_1.default)().timer.setImmediate(() => this.doRunNext());
    }
    doRunNext() {
      if (this._waiting.length === 0 || this._active === this._capacity) {
        return;
      }
      const next = this._waiting.shift();
      this._active++;
      if (this._active > this._capacity) {
        throw new Error(`To many thunks active`);
      }
      try {
        const result = next.thunk();
        if (result instanceof Promise) {
          result.then((value) => {
            this._active--;
            next.resolve(value);
            this.runNext();
          }, (err) => {
            this._active--;
            next.reject(err);
            this.runNext();
          });
        } else {
          this._active--;
          next.resolve(result);
          this.runNext();
        }
      } catch (err) {
        this._active--;
        next.reject(err);
        this.runNext();
      }
    }
  }
  semaphore.Semaphore = Semaphore2;
  return semaphore;
}
var hasRequiredMessageReader;
function requireMessageReader() {
  if (hasRequiredMessageReader)
    return messageReader;
  hasRequiredMessageReader = 1;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ReadableStreamMessageReader = exports2.AbstractMessageReader = exports2.MessageReader = void 0;
    const ral_1 = requireRal();
    const Is2 = requireIs();
    const events_1 = requireEvents();
    const semaphore_1 = requireSemaphore();
    (function(MessageReader) {
      function is2(value) {
        let candidate = value;
        return candidate && Is2.func(candidate.listen) && Is2.func(candidate.dispose) && Is2.func(candidate.onError) && Is2.func(candidate.onClose) && Is2.func(candidate.onPartialMessage);
      }
      MessageReader.is = is2;
    })(exports2.MessageReader || (exports2.MessageReader = {}));
    class AbstractMessageReader {
      constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
        this.partialMessageEmitter = new events_1.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(error2) {
        this.errorEmitter.fire(this.asError(error2));
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      get onPartialMessage() {
        return this.partialMessageEmitter.event;
      }
      firePartialMessage(info) {
        this.partialMessageEmitter.fire(info);
      }
      asError(error2) {
        if (error2 instanceof Error) {
          return error2;
        } else {
          return new Error(`Reader received error. Reason: ${Is2.string(error2.message) ? error2.message : "unknown"}`);
        }
      }
    }
    exports2.AbstractMessageReader = AbstractMessageReader;
    var ResolvedMessageReaderOptions;
    (function(ResolvedMessageReaderOptions2) {
      function fromOptions(options) {
        let charset;
        let contentDecoder;
        const contentDecoders = /* @__PURE__ */ new Map();
        let contentTypeDecoder;
        const contentTypeDecoders = /* @__PURE__ */ new Map();
        if (options === void 0 || typeof options === "string") {
          charset = options ?? "utf-8";
        } else {
          charset = options.charset ?? "utf-8";
          if (options.contentDecoder !== void 0) {
            contentDecoder = options.contentDecoder;
            contentDecoders.set(contentDecoder.name, contentDecoder);
          }
          if (options.contentDecoders !== void 0) {
            for (const decoder of options.contentDecoders) {
              contentDecoders.set(decoder.name, decoder);
            }
          }
          if (options.contentTypeDecoder !== void 0) {
            contentTypeDecoder = options.contentTypeDecoder;
            contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
          }
          if (options.contentTypeDecoders !== void 0) {
            for (const decoder of options.contentTypeDecoders) {
              contentTypeDecoders.set(decoder.name, decoder);
            }
          }
        }
        if (contentTypeDecoder === void 0) {
          contentTypeDecoder = (0, ral_1.default)().applicationJson.decoder;
          contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
        }
        return { charset, contentDecoder, contentDecoders, contentTypeDecoder, contentTypeDecoders };
      }
      ResolvedMessageReaderOptions2.fromOptions = fromOptions;
    })(ResolvedMessageReaderOptions || (ResolvedMessageReaderOptions = {}));
    class ReadableStreamMessageReader extends AbstractMessageReader {
      constructor(readable, options) {
        super();
        this.readable = readable;
        this.options = ResolvedMessageReaderOptions.fromOptions(options);
        this.buffer = (0, ral_1.default)().messageBuffer.create(this.options.charset);
        this._partialMessageTimeout = 1e4;
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.readSemaphore = new semaphore_1.Semaphore(1);
      }
      set partialMessageTimeout(timeout) {
        this._partialMessageTimeout = timeout;
      }
      get partialMessageTimeout() {
        return this._partialMessageTimeout;
      }
      listen(callback) {
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.partialMessageTimer = void 0;
        this.callback = callback;
        const result = this.readable.onData((data) => {
          this.onData(data);
        });
        this.readable.onError((error2) => this.fireError(error2));
        this.readable.onClose(() => this.fireClose());
        return result;
      }
      onData(data) {
        this.buffer.append(data);
        while (true) {
          if (this.nextMessageLength === -1) {
            const headers = this.buffer.tryReadHeaders(true);
            if (!headers) {
              return;
            }
            const contentLength = headers.get("content-length");
            if (!contentLength) {
              this.fireError(new Error("Header must provide a Content-Length property."));
              return;
            }
            const length = parseInt(contentLength);
            if (isNaN(length)) {
              this.fireError(new Error("Content-Length value must be a number."));
              return;
            }
            this.nextMessageLength = length;
          }
          const body = this.buffer.tryReadBody(this.nextMessageLength);
          if (body === void 0) {
            this.setPartialMessageTimer();
            return;
          }
          this.clearPartialMessageTimer();
          this.nextMessageLength = -1;
          this.readSemaphore.lock(async () => {
            const bytes = this.options.contentDecoder !== void 0 ? await this.options.contentDecoder.decode(body) : body;
            const message = await this.options.contentTypeDecoder.decode(bytes, this.options);
            this.callback(message);
          }).catch((error2) => {
            this.fireError(error2);
          });
        }
      }
      clearPartialMessageTimer() {
        if (this.partialMessageTimer) {
          this.partialMessageTimer.dispose();
          this.partialMessageTimer = void 0;
        }
      }
      setPartialMessageTimer() {
        this.clearPartialMessageTimer();
        if (this._partialMessageTimeout <= 0) {
          return;
        }
        this.partialMessageTimer = (0, ral_1.default)().timer.setTimeout((token, timeout) => {
          this.partialMessageTimer = void 0;
          if (token === this.messageToken) {
            this.firePartialMessage({ messageToken: token, waitingTime: timeout });
            this.setPartialMessageTimer();
          }
        }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
      }
    }
    exports2.ReadableStreamMessageReader = ReadableStreamMessageReader;
  })(messageReader);
  return messageReader;
}
var messageWriter = {};
var hasRequiredMessageWriter;
function requireMessageWriter() {
  if (hasRequiredMessageWriter)
    return messageWriter;
  hasRequiredMessageWriter = 1;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WriteableStreamMessageWriter = exports2.AbstractMessageWriter = exports2.MessageWriter = void 0;
    const ral_1 = requireRal();
    const Is2 = requireIs();
    const semaphore_1 = requireSemaphore();
    const events_1 = requireEvents();
    const ContentLength = "Content-Length: ";
    const CRLF = "\r\n";
    (function(MessageWriter) {
      function is2(value) {
        let candidate = value;
        return candidate && Is2.func(candidate.dispose) && Is2.func(candidate.onClose) && Is2.func(candidate.onError) && Is2.func(candidate.write);
      }
      MessageWriter.is = is2;
    })(exports2.MessageWriter || (exports2.MessageWriter = {}));
    class AbstractMessageWriter {
      constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(error2, message, count) {
        this.errorEmitter.fire([this.asError(error2), message, count]);
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      asError(error2) {
        if (error2 instanceof Error) {
          return error2;
        } else {
          return new Error(`Writer received error. Reason: ${Is2.string(error2.message) ? error2.message : "unknown"}`);
        }
      }
    }
    exports2.AbstractMessageWriter = AbstractMessageWriter;
    var ResolvedMessageWriterOptions;
    (function(ResolvedMessageWriterOptions2) {
      function fromOptions(options) {
        if (options === void 0 || typeof options === "string") {
          return { charset: options ?? "utf-8", contentTypeEncoder: (0, ral_1.default)().applicationJson.encoder };
        } else {
          return { charset: options.charset ?? "utf-8", contentEncoder: options.contentEncoder, contentTypeEncoder: options.contentTypeEncoder ?? (0, ral_1.default)().applicationJson.encoder };
        }
      }
      ResolvedMessageWriterOptions2.fromOptions = fromOptions;
    })(ResolvedMessageWriterOptions || (ResolvedMessageWriterOptions = {}));
    class WriteableStreamMessageWriter extends AbstractMessageWriter {
      constructor(writable, options) {
        super();
        this.writable = writable;
        this.options = ResolvedMessageWriterOptions.fromOptions(options);
        this.errorCount = 0;
        this.writeSemaphore = new semaphore_1.Semaphore(1);
        this.writable.onError((error2) => this.fireError(error2));
        this.writable.onClose(() => this.fireClose());
      }
      async write(msg) {
        return this.writeSemaphore.lock(async () => {
          const payload = this.options.contentTypeEncoder.encode(msg, this.options).then((buffer) => {
            if (this.options.contentEncoder !== void 0) {
              return this.options.contentEncoder.encode(buffer);
            } else {
              return buffer;
            }
          });
          return payload.then((buffer) => {
            const headers = [];
            headers.push(ContentLength, buffer.byteLength.toString(), CRLF);
            headers.push(CRLF);
            return this.doWrite(msg, headers, buffer);
          }, (error2) => {
            this.fireError(error2);
            throw error2;
          });
        });
      }
      async doWrite(msg, headers, data) {
        try {
          await this.writable.write(headers.join(""), "ascii");
          return this.writable.write(data);
        } catch (error2) {
          this.handleError(error2, msg);
          return Promise.reject(error2);
        }
      }
      handleError(error2, msg) {
        this.errorCount++;
        this.fireError(error2, msg, this.errorCount);
      }
      end() {
        this.writable.end();
      }
    }
    exports2.WriteableStreamMessageWriter = WriteableStreamMessageWriter;
  })(messageWriter);
  return messageWriter;
}
var messageBuffer = {};
var hasRequiredMessageBuffer;
function requireMessageBuffer() {
  if (hasRequiredMessageBuffer)
    return messageBuffer;
  hasRequiredMessageBuffer = 1;
  Object.defineProperty(messageBuffer, "__esModule", { value: true });
  messageBuffer.AbstractMessageBuffer = void 0;
  const CR = 13;
  const LF = 10;
  const CRLF = "\r\n";
  class AbstractMessageBuffer {
    constructor(encoding = "utf-8") {
      this._encoding = encoding;
      this._chunks = [];
      this._totalLength = 0;
    }
    get encoding() {
      return this._encoding;
    }
    append(chunk) {
      const toAppend = typeof chunk === "string" ? this.fromString(chunk, this._encoding) : chunk;
      this._chunks.push(toAppend);
      this._totalLength += toAppend.byteLength;
    }
    tryReadHeaders(lowerCaseKeys = false) {
      if (this._chunks.length === 0) {
        return void 0;
      }
      let state = 0;
      let chunkIndex = 0;
      let offset = 0;
      let chunkBytesRead = 0;
      row:
        while (chunkIndex < this._chunks.length) {
          const chunk = this._chunks[chunkIndex];
          offset = 0;
          while (offset < chunk.length) {
            const value = chunk[offset];
            switch (value) {
              case CR:
                switch (state) {
                  case 0:
                    state = 1;
                    break;
                  case 2:
                    state = 3;
                    break;
                  default:
                    state = 0;
                }
                break;
              case LF:
                switch (state) {
                  case 1:
                    state = 2;
                    break;
                  case 3:
                    state = 4;
                    offset++;
                    break row;
                  default:
                    state = 0;
                }
                break;
              default:
                state = 0;
            }
            offset++;
          }
          chunkBytesRead += chunk.byteLength;
          chunkIndex++;
        }
      if (state !== 4) {
        return void 0;
      }
      const buffer = this._read(chunkBytesRead + offset);
      const result = /* @__PURE__ */ new Map();
      const headers = this.toString(buffer, "ascii").split(CRLF);
      if (headers.length < 2) {
        return result;
      }
      for (let i = 0; i < headers.length - 2; i++) {
        const header = headers[i];
        const index = header.indexOf(":");
        if (index === -1) {
          throw new Error("Message header must separate key and value using :");
        }
        const key = header.substr(0, index);
        const value = header.substr(index + 1).trim();
        result.set(lowerCaseKeys ? key.toLowerCase() : key, value);
      }
      return result;
    }
    tryReadBody(length) {
      if (this._totalLength < length) {
        return void 0;
      }
      return this._read(length);
    }
    get numberOfBytes() {
      return this._totalLength;
    }
    _read(byteCount) {
      if (byteCount === 0) {
        return this.emptyBuffer();
      }
      if (byteCount > this._totalLength) {
        throw new Error(`Cannot read so many bytes!`);
      }
      if (this._chunks[0].byteLength === byteCount) {
        const chunk = this._chunks[0];
        this._chunks.shift();
        this._totalLength -= byteCount;
        return this.asNative(chunk);
      }
      if (this._chunks[0].byteLength > byteCount) {
        const chunk = this._chunks[0];
        const result2 = this.asNative(chunk, byteCount);
        this._chunks[0] = chunk.slice(byteCount);
        this._totalLength -= byteCount;
        return result2;
      }
      const result = this.allocNative(byteCount);
      let resultOffset = 0;
      let chunkIndex = 0;
      while (byteCount > 0) {
        const chunk = this._chunks[chunkIndex];
        if (chunk.byteLength > byteCount) {
          const chunkPart = chunk.slice(0, byteCount);
          result.set(chunkPart, resultOffset);
          resultOffset += byteCount;
          this._chunks[chunkIndex] = chunk.slice(byteCount);
          this._totalLength -= byteCount;
          byteCount -= byteCount;
        } else {
          result.set(chunk, resultOffset);
          resultOffset += chunk.byteLength;
          this._chunks.shift();
          this._totalLength -= chunk.byteLength;
          byteCount -= chunk.byteLength;
        }
      }
      return result;
    }
  }
  messageBuffer.AbstractMessageBuffer = AbstractMessageBuffer;
  return messageBuffer;
}
var connection$2 = {};
var hasRequiredConnection;
function requireConnection() {
  if (hasRequiredConnection)
    return connection$2;
  hasRequiredConnection = 1;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createMessageConnection = exports2.ConnectionOptions = exports2.MessageStrategy = exports2.CancellationStrategy = exports2.CancellationSenderStrategy = exports2.CancellationReceiverStrategy = exports2.RequestCancellationReceiverStrategy = exports2.IdCancellationReceiverStrategy = exports2.ConnectionStrategy = exports2.ConnectionError = exports2.ConnectionErrors = exports2.LogTraceNotification = exports2.SetTraceNotification = exports2.TraceFormat = exports2.TraceValues = exports2.Trace = exports2.NullLogger = exports2.ProgressType = exports2.ProgressToken = void 0;
    const ral_1 = requireRal();
    const Is2 = requireIs();
    const messages_1 = requireMessages();
    const linkedMap_1 = requireLinkedMap();
    const events_1 = requireEvents();
    const cancellation_1 = requireCancellation();
    var CancelNotification;
    (function(CancelNotification2) {
      CancelNotification2.type = new messages_1.NotificationType("$/cancelRequest");
    })(CancelNotification || (CancelNotification = {}));
    var ProgressToken;
    (function(ProgressToken2) {
      function is2(value) {
        return typeof value === "string" || typeof value === "number";
      }
      ProgressToken2.is = is2;
    })(ProgressToken = exports2.ProgressToken || (exports2.ProgressToken = {}));
    var ProgressNotification;
    (function(ProgressNotification2) {
      ProgressNotification2.type = new messages_1.NotificationType("$/progress");
    })(ProgressNotification || (ProgressNotification = {}));
    class ProgressType {
      constructor() {
      }
    }
    exports2.ProgressType = ProgressType;
    var StarRequestHandler;
    (function(StarRequestHandler2) {
      function is2(value) {
        return Is2.func(value);
      }
      StarRequestHandler2.is = is2;
    })(StarRequestHandler || (StarRequestHandler = {}));
    exports2.NullLogger = Object.freeze({
      error: () => {
      },
      warn: () => {
      },
      info: () => {
      },
      log: () => {
      }
    });
    var Trace;
    (function(Trace2) {
      Trace2[Trace2["Off"] = 0] = "Off";
      Trace2[Trace2["Messages"] = 1] = "Messages";
      Trace2[Trace2["Compact"] = 2] = "Compact";
      Trace2[Trace2["Verbose"] = 3] = "Verbose";
    })(Trace = exports2.Trace || (exports2.Trace = {}));
    (function(TraceValues) {
      TraceValues.Off = "off";
      TraceValues.Messages = "messages";
      TraceValues.Compact = "compact";
      TraceValues.Verbose = "verbose";
    })(exports2.TraceValues || (exports2.TraceValues = {}));
    (function(Trace2) {
      function fromString(value) {
        if (!Is2.string(value)) {
          return Trace2.Off;
        }
        value = value.toLowerCase();
        switch (value) {
          case "off":
            return Trace2.Off;
          case "messages":
            return Trace2.Messages;
          case "compact":
            return Trace2.Compact;
          case "verbose":
            return Trace2.Verbose;
          default:
            return Trace2.Off;
        }
      }
      Trace2.fromString = fromString;
      function toString(value) {
        switch (value) {
          case Trace2.Off:
            return "off";
          case Trace2.Messages:
            return "messages";
          case Trace2.Compact:
            return "compact";
          case Trace2.Verbose:
            return "verbose";
          default:
            return "off";
        }
      }
      Trace2.toString = toString;
    })(Trace = exports2.Trace || (exports2.Trace = {}));
    var TraceFormat;
    (function(TraceFormat2) {
      TraceFormat2["Text"] = "text";
      TraceFormat2["JSON"] = "json";
    })(TraceFormat = exports2.TraceFormat || (exports2.TraceFormat = {}));
    (function(TraceFormat2) {
      function fromString(value) {
        if (!Is2.string(value)) {
          return TraceFormat2.Text;
        }
        value = value.toLowerCase();
        if (value === "json") {
          return TraceFormat2.JSON;
        } else {
          return TraceFormat2.Text;
        }
      }
      TraceFormat2.fromString = fromString;
    })(TraceFormat = exports2.TraceFormat || (exports2.TraceFormat = {}));
    var SetTraceNotification;
    (function(SetTraceNotification2) {
      SetTraceNotification2.type = new messages_1.NotificationType("$/setTrace");
    })(SetTraceNotification = exports2.SetTraceNotification || (exports2.SetTraceNotification = {}));
    var LogTraceNotification;
    (function(LogTraceNotification2) {
      LogTraceNotification2.type = new messages_1.NotificationType("$/logTrace");
    })(LogTraceNotification = exports2.LogTraceNotification || (exports2.LogTraceNotification = {}));
    var ConnectionErrors;
    (function(ConnectionErrors2) {
      ConnectionErrors2[ConnectionErrors2["Closed"] = 1] = "Closed";
      ConnectionErrors2[ConnectionErrors2["Disposed"] = 2] = "Disposed";
      ConnectionErrors2[ConnectionErrors2["AlreadyListening"] = 3] = "AlreadyListening";
    })(ConnectionErrors = exports2.ConnectionErrors || (exports2.ConnectionErrors = {}));
    class ConnectionError extends Error {
      constructor(code2, message) {
        super(message);
        this.code = code2;
        Object.setPrototypeOf(this, ConnectionError.prototype);
      }
    }
    exports2.ConnectionError = ConnectionError;
    var ConnectionStrategy;
    (function(ConnectionStrategy2) {
      function is2(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.cancelUndispatched);
      }
      ConnectionStrategy2.is = is2;
    })(ConnectionStrategy = exports2.ConnectionStrategy || (exports2.ConnectionStrategy = {}));
    var IdCancellationReceiverStrategy;
    (function(IdCancellationReceiverStrategy2) {
      function is2(value) {
        const candidate = value;
        return candidate && (candidate.kind === void 0 || candidate.kind === "id") && Is2.func(candidate.createCancellationTokenSource) && (candidate.dispose === void 0 || Is2.func(candidate.dispose));
      }
      IdCancellationReceiverStrategy2.is = is2;
    })(IdCancellationReceiverStrategy = exports2.IdCancellationReceiverStrategy || (exports2.IdCancellationReceiverStrategy = {}));
    var RequestCancellationReceiverStrategy;
    (function(RequestCancellationReceiverStrategy2) {
      function is2(value) {
        const candidate = value;
        return candidate && candidate.kind === "request" && Is2.func(candidate.createCancellationTokenSource) && (candidate.dispose === void 0 || Is2.func(candidate.dispose));
      }
      RequestCancellationReceiverStrategy2.is = is2;
    })(RequestCancellationReceiverStrategy = exports2.RequestCancellationReceiverStrategy || (exports2.RequestCancellationReceiverStrategy = {}));
    var CancellationReceiverStrategy;
    (function(CancellationReceiverStrategy2) {
      CancellationReceiverStrategy2.Message = Object.freeze({
        createCancellationTokenSource(_) {
          return new cancellation_1.CancellationTokenSource();
        }
      });
      function is2(value) {
        return IdCancellationReceiverStrategy.is(value) || RequestCancellationReceiverStrategy.is(value);
      }
      CancellationReceiverStrategy2.is = is2;
    })(CancellationReceiverStrategy = exports2.CancellationReceiverStrategy || (exports2.CancellationReceiverStrategy = {}));
    var CancellationSenderStrategy;
    (function(CancellationSenderStrategy2) {
      CancellationSenderStrategy2.Message = Object.freeze({
        sendCancellation(conn, id) {
          return conn.sendNotification(CancelNotification.type, { id });
        },
        cleanup(_) {
        }
      });
      function is2(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.sendCancellation) && Is2.func(candidate.cleanup);
      }
      CancellationSenderStrategy2.is = is2;
    })(CancellationSenderStrategy = exports2.CancellationSenderStrategy || (exports2.CancellationSenderStrategy = {}));
    var CancellationStrategy;
    (function(CancellationStrategy2) {
      CancellationStrategy2.Message = Object.freeze({
        receiver: CancellationReceiverStrategy.Message,
        sender: CancellationSenderStrategy.Message
      });
      function is2(value) {
        const candidate = value;
        return candidate && CancellationReceiverStrategy.is(candidate.receiver) && CancellationSenderStrategy.is(candidate.sender);
      }
      CancellationStrategy2.is = is2;
    })(CancellationStrategy = exports2.CancellationStrategy || (exports2.CancellationStrategy = {}));
    var MessageStrategy;
    (function(MessageStrategy2) {
      function is2(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.handleMessage);
      }
      MessageStrategy2.is = is2;
    })(MessageStrategy = exports2.MessageStrategy || (exports2.MessageStrategy = {}));
    (function(ConnectionOptions) {
      function is2(value) {
        const candidate = value;
        return candidate && (CancellationStrategy.is(candidate.cancellationStrategy) || ConnectionStrategy.is(candidate.connectionStrategy) || MessageStrategy.is(candidate.messageStrategy));
      }
      ConnectionOptions.is = is2;
    })(exports2.ConnectionOptions || (exports2.ConnectionOptions = {}));
    var ConnectionState;
    (function(ConnectionState2) {
      ConnectionState2[ConnectionState2["New"] = 1] = "New";
      ConnectionState2[ConnectionState2["Listening"] = 2] = "Listening";
      ConnectionState2[ConnectionState2["Closed"] = 3] = "Closed";
      ConnectionState2[ConnectionState2["Disposed"] = 4] = "Disposed";
    })(ConnectionState || (ConnectionState = {}));
    function createMessageConnection(messageReader2, messageWriter2, _logger, options) {
      const logger = _logger !== void 0 ? _logger : exports2.NullLogger;
      let sequenceNumber = 0;
      let notificationSequenceNumber = 0;
      let unknownResponseSequenceNumber = 0;
      const version = "2.0";
      let starRequestHandler = void 0;
      const requestHandlers = /* @__PURE__ */ new Map();
      let starNotificationHandler = void 0;
      const notificationHandlers = /* @__PURE__ */ new Map();
      const progressHandlers = /* @__PURE__ */ new Map();
      let timer;
      let messageQueue = new linkedMap_1.LinkedMap();
      let responsePromises = /* @__PURE__ */ new Map();
      let knownCanceledRequests = /* @__PURE__ */ new Set();
      let requestTokens = /* @__PURE__ */ new Map();
      let trace = Trace.Off;
      let traceFormat = TraceFormat.Text;
      let tracer;
      let state = ConnectionState.New;
      const errorEmitter = new events_1.Emitter();
      const closeEmitter = new events_1.Emitter();
      const unhandledNotificationEmitter = new events_1.Emitter();
      const unhandledProgressEmitter = new events_1.Emitter();
      const disposeEmitter = new events_1.Emitter();
      const cancellationStrategy = options && options.cancellationStrategy ? options.cancellationStrategy : CancellationStrategy.Message;
      function createRequestQueueKey(id) {
        if (id === null) {
          throw new Error(`Can't send requests with id null since the response can't be correlated.`);
        }
        return "req-" + id.toString();
      }
      function createResponseQueueKey(id) {
        if (id === null) {
          return "res-unknown-" + (++unknownResponseSequenceNumber).toString();
        } else {
          return "res-" + id.toString();
        }
      }
      function createNotificationQueueKey() {
        return "not-" + (++notificationSequenceNumber).toString();
      }
      function addMessageToQueue(queue, message) {
        if (messages_1.Message.isRequest(message)) {
          queue.set(createRequestQueueKey(message.id), message);
        } else if (messages_1.Message.isResponse(message)) {
          queue.set(createResponseQueueKey(message.id), message);
        } else {
          queue.set(createNotificationQueueKey(), message);
        }
      }
      function cancelUndispatched(_message) {
        return void 0;
      }
      function isListening() {
        return state === ConnectionState.Listening;
      }
      function isClosed() {
        return state === ConnectionState.Closed;
      }
      function isDisposed() {
        return state === ConnectionState.Disposed;
      }
      function closeHandler() {
        if (state === ConnectionState.New || state === ConnectionState.Listening) {
          state = ConnectionState.Closed;
          closeEmitter.fire(void 0);
        }
      }
      function readErrorHandler(error2) {
        errorEmitter.fire([error2, void 0, void 0]);
      }
      function writeErrorHandler(data) {
        errorEmitter.fire(data);
      }
      messageReader2.onClose(closeHandler);
      messageReader2.onError(readErrorHandler);
      messageWriter2.onClose(closeHandler);
      messageWriter2.onError(writeErrorHandler);
      function triggerMessageQueue() {
        if (timer || messageQueue.size === 0) {
          return;
        }
        timer = (0, ral_1.default)().timer.setImmediate(() => {
          timer = void 0;
          processMessageQueue();
        });
      }
      function handleMessage(message) {
        if (messages_1.Message.isRequest(message)) {
          handleRequest(message);
        } else if (messages_1.Message.isNotification(message)) {
          handleNotification(message);
        } else if (messages_1.Message.isResponse(message)) {
          handleResponse(message);
        } else {
          handleInvalidMessage(message);
        }
      }
      function processMessageQueue() {
        if (messageQueue.size === 0) {
          return;
        }
        const message = messageQueue.shift();
        try {
          const messageStrategy = options == null ? void 0 : options.messageStrategy;
          if (MessageStrategy.is(messageStrategy)) {
            messageStrategy.handleMessage(message, handleMessage);
          } else {
            handleMessage(message);
          }
        } finally {
          triggerMessageQueue();
        }
      }
      const callback = (message) => {
        try {
          if (messages_1.Message.isNotification(message) && message.method === CancelNotification.type.method) {
            const cancelId = message.params.id;
            const key = createRequestQueueKey(cancelId);
            const toCancel = messageQueue.get(key);
            if (messages_1.Message.isRequest(toCancel)) {
              const strategy = options == null ? void 0 : options.connectionStrategy;
              const response = strategy && strategy.cancelUndispatched ? strategy.cancelUndispatched(toCancel, cancelUndispatched) : cancelUndispatched(toCancel);
              if (response && (response.error !== void 0 || response.result !== void 0)) {
                messageQueue.delete(key);
                requestTokens.delete(cancelId);
                response.id = toCancel.id;
                traceSendingResponse(response, message.method, Date.now());
                messageWriter2.write(response).catch(() => logger.error(`Sending response for canceled message failed.`));
                return;
              }
            }
            const cancellationToken = requestTokens.get(cancelId);
            if (cancellationToken !== void 0) {
              cancellationToken.cancel();
              traceReceivedNotification(message);
              return;
            } else {
              knownCanceledRequests.add(cancelId);
            }
          }
          addMessageToQueue(messageQueue, message);
        } finally {
          triggerMessageQueue();
        }
      };
      function handleRequest(requestMessage) {
        if (isDisposed()) {
          return;
        }
        function reply(resultOrError, method, startTime2) {
          const message = {
            jsonrpc: version,
            id: requestMessage.id
          };
          if (resultOrError instanceof messages_1.ResponseError) {
            message.error = resultOrError.toJson();
          } else {
            message.result = resultOrError === void 0 ? null : resultOrError;
          }
          traceSendingResponse(message, method, startTime2);
          messageWriter2.write(message).catch(() => logger.error(`Sending response failed.`));
        }
        function replyError(error2, method, startTime2) {
          const message = {
            jsonrpc: version,
            id: requestMessage.id,
            error: error2.toJson()
          };
          traceSendingResponse(message, method, startTime2);
          messageWriter2.write(message).catch(() => logger.error(`Sending response failed.`));
        }
        function replySuccess(result, method, startTime2) {
          if (result === void 0) {
            result = null;
          }
          const message = {
            jsonrpc: version,
            id: requestMessage.id,
            result
          };
          traceSendingResponse(message, method, startTime2);
          messageWriter2.write(message).catch(() => logger.error(`Sending response failed.`));
        }
        traceReceivedRequest(requestMessage);
        const element = requestHandlers.get(requestMessage.method);
        let type;
        let requestHandler;
        if (element) {
          type = element.type;
          requestHandler = element.handler;
        }
        const startTime = Date.now();
        if (requestHandler || starRequestHandler) {
          const tokenKey = requestMessage.id ?? String(Date.now());
          const cancellationSource = IdCancellationReceiverStrategy.is(cancellationStrategy.receiver) ? cancellationStrategy.receiver.createCancellationTokenSource(tokenKey) : cancellationStrategy.receiver.createCancellationTokenSource(requestMessage);
          if (requestMessage.id !== null && knownCanceledRequests.has(requestMessage.id)) {
            cancellationSource.cancel();
          }
          if (requestMessage.id !== null) {
            requestTokens.set(tokenKey, cancellationSource);
          }
          try {
            let handlerResult;
            if (requestHandler) {
              if (requestMessage.params === void 0) {
                if (type !== void 0 && type.numberOfParams !== 0) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines ${type.numberOfParams} params but received none.`), requestMessage.method, startTime);
                  return;
                }
                handlerResult = requestHandler(cancellationSource.token);
              } else if (Array.isArray(requestMessage.params)) {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byName) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by name but received parameters by position`), requestMessage.method, startTime);
                  return;
                }
                handlerResult = requestHandler(...requestMessage.params, cancellationSource.token);
              } else {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by position but received parameters by name`), requestMessage.method, startTime);
                  return;
                }
                handlerResult = requestHandler(requestMessage.params, cancellationSource.token);
              }
            } else if (starRequestHandler) {
              handlerResult = starRequestHandler(requestMessage.method, requestMessage.params, cancellationSource.token);
            }
            const promise = handlerResult;
            if (!handlerResult) {
              requestTokens.delete(tokenKey);
              replySuccess(handlerResult, requestMessage.method, startTime);
            } else if (promise.then) {
              promise.then((resultOrError) => {
                requestTokens.delete(tokenKey);
                reply(resultOrError, requestMessage.method, startTime);
              }, (error2) => {
                requestTokens.delete(tokenKey);
                if (error2 instanceof messages_1.ResponseError) {
                  replyError(error2, requestMessage.method, startTime);
                } else if (error2 && Is2.string(error2.message)) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error2.message}`), requestMessage.method, startTime);
                } else {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
                }
              });
            } else {
              requestTokens.delete(tokenKey);
              reply(handlerResult, requestMessage.method, startTime);
            }
          } catch (error2) {
            requestTokens.delete(tokenKey);
            if (error2 instanceof messages_1.ResponseError) {
              reply(error2, requestMessage.method, startTime);
            } else if (error2 && Is2.string(error2.message)) {
              replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error2.message}`), requestMessage.method, startTime);
            } else {
              replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
            }
          }
        } else {
          replyError(new messages_1.ResponseError(messages_1.ErrorCodes.MethodNotFound, `Unhandled method ${requestMessage.method}`), requestMessage.method, startTime);
        }
      }
      function handleResponse(responseMessage) {
        if (isDisposed()) {
          return;
        }
        if (responseMessage.id === null) {
          if (responseMessage.error) {
            logger.error(`Received response message without id: Error is: 
${JSON.stringify(responseMessage.error, void 0, 4)}`);
          } else {
            logger.error(`Received response message without id. No further error information provided.`);
          }
        } else {
          const key = responseMessage.id;
          const responsePromise = responsePromises.get(key);
          traceReceivedResponse(responseMessage, responsePromise);
          if (responsePromise !== void 0) {
            responsePromises.delete(key);
            try {
              if (responseMessage.error) {
                const error2 = responseMessage.error;
                responsePromise.reject(new messages_1.ResponseError(error2.code, error2.message, error2.data));
              } else if (responseMessage.result !== void 0) {
                responsePromise.resolve(responseMessage.result);
              } else {
                throw new Error("Should never happen.");
              }
            } catch (error2) {
              if (error2.message) {
                logger.error(`Response handler '${responsePromise.method}' failed with message: ${error2.message}`);
              } else {
                logger.error(`Response handler '${responsePromise.method}' failed unexpectedly.`);
              }
            }
          }
        }
      }
      function handleNotification(message) {
        if (isDisposed()) {
          return;
        }
        let type = void 0;
        let notificationHandler;
        if (message.method === CancelNotification.type.method) {
          const cancelId = message.params.id;
          knownCanceledRequests.delete(cancelId);
          traceReceivedNotification(message);
          return;
        } else {
          const element = notificationHandlers.get(message.method);
          if (element) {
            notificationHandler = element.handler;
            type = element.type;
          }
        }
        if (notificationHandler || starNotificationHandler) {
          try {
            traceReceivedNotification(message);
            if (notificationHandler) {
              if (message.params === void 0) {
                if (type !== void 0) {
                  if (type.numberOfParams !== 0 && type.parameterStructures !== messages_1.ParameterStructures.byName) {
                    logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received none.`);
                  }
                }
                notificationHandler();
              } else if (Array.isArray(message.params)) {
                const params = message.params;
                if (message.method === ProgressNotification.type.method && params.length === 2 && ProgressToken.is(params[0])) {
                  notificationHandler({ token: params[0], value: params[1] });
                } else {
                  if (type !== void 0) {
                    if (type.parameterStructures === messages_1.ParameterStructures.byName) {
                      logger.error(`Notification ${message.method} defines parameters by name but received parameters by position`);
                    }
                    if (type.numberOfParams !== message.params.length) {
                      logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received ${params.length} arguments`);
                    }
                  }
                  notificationHandler(...params);
                }
              } else {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                  logger.error(`Notification ${message.method} defines parameters by position but received parameters by name`);
                }
                notificationHandler(message.params);
              }
            } else if (starNotificationHandler) {
              starNotificationHandler(message.method, message.params);
            }
          } catch (error2) {
            if (error2.message) {
              logger.error(`Notification handler '${message.method}' failed with message: ${error2.message}`);
            } else {
              logger.error(`Notification handler '${message.method}' failed unexpectedly.`);
            }
          }
        } else {
          unhandledNotificationEmitter.fire(message);
        }
      }
      function handleInvalidMessage(message) {
        if (!message) {
          logger.error("Received empty message.");
          return;
        }
        logger.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(message, null, 4)}`);
        const responseMessage = message;
        if (Is2.string(responseMessage.id) || Is2.number(responseMessage.id)) {
          const key = responseMessage.id;
          const responseHandler = responsePromises.get(key);
          if (responseHandler) {
            responseHandler.reject(new Error("The received response has neither a result nor an error property."));
          }
        }
      }
      function stringifyTrace(params) {
        if (params === void 0 || params === null) {
          return void 0;
        }
        switch (trace) {
          case Trace.Verbose:
            return JSON.stringify(params, null, 4);
          case Trace.Compact:
            return JSON.stringify(params);
          default:
            return void 0;
        }
      }
      function traceSendingRequest(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
            data = `Params: ${stringifyTrace(message.params)}

`;
          }
          tracer.log(`Sending request '${message.method} - (${message.id})'.`, data);
        } else {
          logLSPMessage("send-request", message);
        }
      }
      function traceSendingNotification(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.params) {
              data = `Params: ${stringifyTrace(message.params)}

`;
            } else {
              data = "No parameters provided.\n\n";
            }
          }
          tracer.log(`Sending notification '${message.method}'.`, data);
        } else {
          logLSPMessage("send-notification", message);
        }
      }
      function traceSendingResponse(message, method, startTime) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.error && message.error.data) {
              data = `Error data: ${stringifyTrace(message.error.data)}

`;
            } else {
              if (message.result) {
                data = `Result: ${stringifyTrace(message.result)}

`;
              } else if (message.error === void 0) {
                data = "No result returned.\n\n";
              }
            }
          }
          tracer.log(`Sending response '${method} - (${message.id})'. Processing request took ${Date.now() - startTime}ms`, data);
        } else {
          logLSPMessage("send-response", message);
        }
      }
      function traceReceivedRequest(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
            data = `Params: ${stringifyTrace(message.params)}

`;
          }
          tracer.log(`Received request '${message.method} - (${message.id})'.`, data);
        } else {
          logLSPMessage("receive-request", message);
        }
      }
      function traceReceivedNotification(message) {
        if (trace === Trace.Off || !tracer || message.method === LogTraceNotification.type.method) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.params) {
              data = `Params: ${stringifyTrace(message.params)}

`;
            } else {
              data = "No parameters provided.\n\n";
            }
          }
          tracer.log(`Received notification '${message.method}'.`, data);
        } else {
          logLSPMessage("receive-notification", message);
        }
      }
      function traceReceivedResponse(message, responsePromise) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.error && message.error.data) {
              data = `Error data: ${stringifyTrace(message.error.data)}

`;
            } else {
              if (message.result) {
                data = `Result: ${stringifyTrace(message.result)}

`;
              } else if (message.error === void 0) {
                data = "No result returned.\n\n";
              }
            }
          }
          if (responsePromise) {
            const error2 = message.error ? ` Request failed: ${message.error.message} (${message.error.code}).` : "";
            tracer.log(`Received response '${responsePromise.method} - (${message.id})' in ${Date.now() - responsePromise.timerStart}ms.${error2}`, data);
          } else {
            tracer.log(`Received response ${message.id} without active response promise.`, data);
          }
        } else {
          logLSPMessage("receive-response", message);
        }
      }
      function logLSPMessage(type, message) {
        if (!tracer || trace === Trace.Off) {
          return;
        }
        const lspMessage = {
          isLSPMessage: true,
          type,
          message,
          timestamp: Date.now()
        };
        tracer.log(lspMessage);
      }
      function throwIfClosedOrDisposed() {
        if (isClosed()) {
          throw new ConnectionError(ConnectionErrors.Closed, "Connection is closed.");
        }
        if (isDisposed()) {
          throw new ConnectionError(ConnectionErrors.Disposed, "Connection is disposed.");
        }
      }
      function throwIfListening() {
        if (isListening()) {
          throw new ConnectionError(ConnectionErrors.AlreadyListening, "Connection is already listening");
        }
      }
      function throwIfNotListening() {
        if (!isListening()) {
          throw new Error("Call listen() first.");
        }
      }
      function undefinedToNull(param) {
        if (param === void 0) {
          return null;
        } else {
          return param;
        }
      }
      function nullToUndefined(param) {
        if (param === null) {
          return void 0;
        } else {
          return param;
        }
      }
      function isNamedParam(param) {
        return param !== void 0 && param !== null && !Array.isArray(param) && typeof param === "object";
      }
      function computeSingleParam(parameterStructures, param) {
        switch (parameterStructures) {
          case messages_1.ParameterStructures.auto:
            if (isNamedParam(param)) {
              return nullToUndefined(param);
            } else {
              return [undefinedToNull(param)];
            }
          case messages_1.ParameterStructures.byName:
            if (!isNamedParam(param)) {
              throw new Error(`Received parameters by name but param is not an object literal.`);
            }
            return nullToUndefined(param);
          case messages_1.ParameterStructures.byPosition:
            return [undefinedToNull(param)];
          default:
            throw new Error(`Unknown parameter structure ${parameterStructures.toString()}`);
        }
      }
      function computeMessageParams(type, params) {
        let result;
        const numberOfParams = type.numberOfParams;
        switch (numberOfParams) {
          case 0:
            result = void 0;
            break;
          case 1:
            result = computeSingleParam(type.parameterStructures, params[0]);
            break;
          default:
            result = [];
            for (let i = 0; i < params.length && i < numberOfParams; i++) {
              result.push(undefinedToNull(params[i]));
            }
            if (params.length < numberOfParams) {
              for (let i = params.length; i < numberOfParams; i++) {
                result.push(null);
              }
            }
            break;
        }
        return result;
      }
      const connection2 = {
        sendNotification: (type, ...args) => {
          throwIfClosedOrDisposed();
          let method;
          let messageParams;
          if (Is2.string(type)) {
            method = type;
            const first = args[0];
            let paramStart = 0;
            let parameterStructures = messages_1.ParameterStructures.auto;
            if (messages_1.ParameterStructures.is(first)) {
              paramStart = 1;
              parameterStructures = first;
            }
            let paramEnd = args.length;
            const numberOfParams = paramEnd - paramStart;
            switch (numberOfParams) {
              case 0:
                messageParams = void 0;
                break;
              case 1:
                messageParams = computeSingleParam(parameterStructures, args[paramStart]);
                break;
              default:
                if (parameterStructures === messages_1.ParameterStructures.byName) {
                  throw new Error(`Received ${numberOfParams} parameters for 'by Name' notification parameter structure.`);
                }
                messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                break;
            }
          } else {
            const params = args;
            method = type.method;
            messageParams = computeMessageParams(type, params);
          }
          const notificationMessage = {
            jsonrpc: version,
            method,
            params: messageParams
          };
          traceSendingNotification(notificationMessage);
          return messageWriter2.write(notificationMessage).catch((error2) => {
            logger.error(`Sending notification failed.`);
            throw error2;
          });
        },
        onNotification: (type, handler) => {
          throwIfClosedOrDisposed();
          let method;
          if (Is2.func(type)) {
            starNotificationHandler = type;
          } else if (handler) {
            if (Is2.string(type)) {
              method = type;
              notificationHandlers.set(type, { type: void 0, handler });
            } else {
              method = type.method;
              notificationHandlers.set(type.method, { type, handler });
            }
          }
          return {
            dispose: () => {
              if (method !== void 0) {
                notificationHandlers.delete(method);
              } else {
                starNotificationHandler = void 0;
              }
            }
          };
        },
        onProgress: (_type, token, handler) => {
          if (progressHandlers.has(token)) {
            throw new Error(`Progress handler for token ${token} already registered`);
          }
          progressHandlers.set(token, handler);
          return {
            dispose: () => {
              progressHandlers.delete(token);
            }
          };
        },
        sendProgress: (_type, token, value) => {
          return connection2.sendNotification(ProgressNotification.type, { token, value });
        },
        onUnhandledProgress: unhandledProgressEmitter.event,
        sendRequest: (type, ...args) => {
          throwIfClosedOrDisposed();
          throwIfNotListening();
          let method;
          let messageParams;
          let token = void 0;
          if (Is2.string(type)) {
            method = type;
            const first = args[0];
            const last = args[args.length - 1];
            let paramStart = 0;
            let parameterStructures = messages_1.ParameterStructures.auto;
            if (messages_1.ParameterStructures.is(first)) {
              paramStart = 1;
              parameterStructures = first;
            }
            let paramEnd = args.length;
            if (cancellation_1.CancellationToken.is(last)) {
              paramEnd = paramEnd - 1;
              token = last;
            }
            const numberOfParams = paramEnd - paramStart;
            switch (numberOfParams) {
              case 0:
                messageParams = void 0;
                break;
              case 1:
                messageParams = computeSingleParam(parameterStructures, args[paramStart]);
                break;
              default:
                if (parameterStructures === messages_1.ParameterStructures.byName) {
                  throw new Error(`Received ${numberOfParams} parameters for 'by Name' request parameter structure.`);
                }
                messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                break;
            }
          } else {
            const params = args;
            method = type.method;
            messageParams = computeMessageParams(type, params);
            const numberOfParams = type.numberOfParams;
            token = cancellation_1.CancellationToken.is(params[numberOfParams]) ? params[numberOfParams] : void 0;
          }
          const id = sequenceNumber++;
          let disposable2;
          if (token) {
            disposable2 = token.onCancellationRequested(() => {
              const p = cancellationStrategy.sender.sendCancellation(connection2, id);
              if (p === void 0) {
                logger.log(`Received no promise from cancellation strategy when cancelling id ${id}`);
                return Promise.resolve();
              } else {
                return p.catch(() => {
                  logger.log(`Sending cancellation messages for id ${id} failed`);
                });
              }
            });
          }
          const requestMessage = {
            jsonrpc: version,
            id,
            method,
            params: messageParams
          };
          traceSendingRequest(requestMessage);
          if (typeof cancellationStrategy.sender.enableCancellation === "function") {
            cancellationStrategy.sender.enableCancellation(requestMessage);
          }
          return new Promise(async (resolve, reject) => {
            const resolveWithCleanup = (r) => {
              resolve(r);
              cancellationStrategy.sender.cleanup(id);
              disposable2 == null ? void 0 : disposable2.dispose();
            };
            const rejectWithCleanup = (r) => {
              reject(r);
              cancellationStrategy.sender.cleanup(id);
              disposable2 == null ? void 0 : disposable2.dispose();
            };
            const responsePromise = { method, timerStart: Date.now(), resolve: resolveWithCleanup, reject: rejectWithCleanup };
            try {
              await messageWriter2.write(requestMessage);
              responsePromises.set(id, responsePromise);
            } catch (error2) {
              logger.error(`Sending request failed.`);
              responsePromise.reject(new messages_1.ResponseError(messages_1.ErrorCodes.MessageWriteError, error2.message ? error2.message : "Unknown reason"));
              throw error2;
            }
          });
        },
        onRequest: (type, handler) => {
          throwIfClosedOrDisposed();
          let method = null;
          if (StarRequestHandler.is(type)) {
            method = void 0;
            starRequestHandler = type;
          } else if (Is2.string(type)) {
            method = null;
            if (handler !== void 0) {
              method = type;
              requestHandlers.set(type, { handler, type: void 0 });
            }
          } else {
            if (handler !== void 0) {
              method = type.method;
              requestHandlers.set(type.method, { type, handler });
            }
          }
          return {
            dispose: () => {
              if (method === null) {
                return;
              }
              if (method !== void 0) {
                requestHandlers.delete(method);
              } else {
                starRequestHandler = void 0;
              }
            }
          };
        },
        hasPendingResponse: () => {
          return responsePromises.size > 0;
        },
        trace: async (_value, _tracer, sendNotificationOrTraceOptions) => {
          let _sendNotification = false;
          let _traceFormat = TraceFormat.Text;
          if (sendNotificationOrTraceOptions !== void 0) {
            if (Is2.boolean(sendNotificationOrTraceOptions)) {
              _sendNotification = sendNotificationOrTraceOptions;
            } else {
              _sendNotification = sendNotificationOrTraceOptions.sendNotification || false;
              _traceFormat = sendNotificationOrTraceOptions.traceFormat || TraceFormat.Text;
            }
          }
          trace = _value;
          traceFormat = _traceFormat;
          if (trace === Trace.Off) {
            tracer = void 0;
          } else {
            tracer = _tracer;
          }
          if (_sendNotification && !isClosed() && !isDisposed()) {
            await connection2.sendNotification(SetTraceNotification.type, { value: Trace.toString(_value) });
          }
        },
        onError: errorEmitter.event,
        onClose: closeEmitter.event,
        onUnhandledNotification: unhandledNotificationEmitter.event,
        onDispose: disposeEmitter.event,
        end: () => {
          messageWriter2.end();
        },
        dispose: () => {
          if (isDisposed()) {
            return;
          }
          state = ConnectionState.Disposed;
          disposeEmitter.fire(void 0);
          const error2 = new messages_1.ResponseError(messages_1.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
          for (const promise of responsePromises.values()) {
            promise.reject(error2);
          }
          responsePromises = /* @__PURE__ */ new Map();
          requestTokens = /* @__PURE__ */ new Map();
          knownCanceledRequests = /* @__PURE__ */ new Set();
          messageQueue = new linkedMap_1.LinkedMap();
          if (Is2.func(messageWriter2.dispose)) {
            messageWriter2.dispose();
          }
          if (Is2.func(messageReader2.dispose)) {
            messageReader2.dispose();
          }
        },
        listen: () => {
          throwIfClosedOrDisposed();
          throwIfListening();
          state = ConnectionState.Listening;
          messageReader2.listen(callback);
        },
        inspect: () => {
          (0, ral_1.default)().console.log("inspect");
        }
      };
      connection2.onNotification(LogTraceNotification.type, (params) => {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        const verbose = trace === Trace.Verbose || trace === Trace.Compact;
        tracer.log(params.message, verbose ? params.verbose : void 0);
      });
      connection2.onNotification(ProgressNotification.type, (params) => {
        const handler = progressHandlers.get(params.token);
        if (handler) {
          handler(params.value);
        } else {
          unhandledProgressEmitter.fire(params);
        }
      });
      return connection2;
    }
    exports2.createMessageConnection = createMessageConnection;
  })(connection$2);
  return connection$2;
}
var hasRequiredApi;
function requireApi() {
  if (hasRequiredApi)
    return api$5;
  hasRequiredApi = 1;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ProgressType = exports2.ProgressToken = exports2.createMessageConnection = exports2.NullLogger = exports2.ConnectionOptions = exports2.ConnectionStrategy = exports2.AbstractMessageBuffer = exports2.WriteableStreamMessageWriter = exports2.AbstractMessageWriter = exports2.MessageWriter = exports2.ReadableStreamMessageReader = exports2.AbstractMessageReader = exports2.MessageReader = exports2.SharedArrayReceiverStrategy = exports2.SharedArraySenderStrategy = exports2.CancellationToken = exports2.CancellationTokenSource = exports2.Emitter = exports2.Event = exports2.Disposable = exports2.LRUCache = exports2.Touch = exports2.LinkedMap = exports2.ParameterStructures = exports2.NotificationType9 = exports2.NotificationType8 = exports2.NotificationType7 = exports2.NotificationType6 = exports2.NotificationType5 = exports2.NotificationType4 = exports2.NotificationType3 = exports2.NotificationType2 = exports2.NotificationType1 = exports2.NotificationType0 = exports2.NotificationType = exports2.ErrorCodes = exports2.ResponseError = exports2.RequestType9 = exports2.RequestType8 = exports2.RequestType7 = exports2.RequestType6 = exports2.RequestType5 = exports2.RequestType4 = exports2.RequestType3 = exports2.RequestType2 = exports2.RequestType1 = exports2.RequestType0 = exports2.RequestType = exports2.Message = exports2.RAL = void 0;
    exports2.MessageStrategy = exports2.CancellationStrategy = exports2.CancellationSenderStrategy = exports2.CancellationReceiverStrategy = exports2.ConnectionError = exports2.ConnectionErrors = exports2.LogTraceNotification = exports2.SetTraceNotification = exports2.TraceFormat = exports2.TraceValues = exports2.Trace = void 0;
    const messages_1 = requireMessages();
    Object.defineProperty(exports2, "Message", { enumerable: true, get: function() {
      return messages_1.Message;
    } });
    Object.defineProperty(exports2, "RequestType", { enumerable: true, get: function() {
      return messages_1.RequestType;
    } });
    Object.defineProperty(exports2, "RequestType0", { enumerable: true, get: function() {
      return messages_1.RequestType0;
    } });
    Object.defineProperty(exports2, "RequestType1", { enumerable: true, get: function() {
      return messages_1.RequestType1;
    } });
    Object.defineProperty(exports2, "RequestType2", { enumerable: true, get: function() {
      return messages_1.RequestType2;
    } });
    Object.defineProperty(exports2, "RequestType3", { enumerable: true, get: function() {
      return messages_1.RequestType3;
    } });
    Object.defineProperty(exports2, "RequestType4", { enumerable: true, get: function() {
      return messages_1.RequestType4;
    } });
    Object.defineProperty(exports2, "RequestType5", { enumerable: true, get: function() {
      return messages_1.RequestType5;
    } });
    Object.defineProperty(exports2, "RequestType6", { enumerable: true, get: function() {
      return messages_1.RequestType6;
    } });
    Object.defineProperty(exports2, "RequestType7", { enumerable: true, get: function() {
      return messages_1.RequestType7;
    } });
    Object.defineProperty(exports2, "RequestType8", { enumerable: true, get: function() {
      return messages_1.RequestType8;
    } });
    Object.defineProperty(exports2, "RequestType9", { enumerable: true, get: function() {
      return messages_1.RequestType9;
    } });
    Object.defineProperty(exports2, "ResponseError", { enumerable: true, get: function() {
      return messages_1.ResponseError;
    } });
    Object.defineProperty(exports2, "ErrorCodes", { enumerable: true, get: function() {
      return messages_1.ErrorCodes;
    } });
    Object.defineProperty(exports2, "NotificationType", { enumerable: true, get: function() {
      return messages_1.NotificationType;
    } });
    Object.defineProperty(exports2, "NotificationType0", { enumerable: true, get: function() {
      return messages_1.NotificationType0;
    } });
    Object.defineProperty(exports2, "NotificationType1", { enumerable: true, get: function() {
      return messages_1.NotificationType1;
    } });
    Object.defineProperty(exports2, "NotificationType2", { enumerable: true, get: function() {
      return messages_1.NotificationType2;
    } });
    Object.defineProperty(exports2, "NotificationType3", { enumerable: true, get: function() {
      return messages_1.NotificationType3;
    } });
    Object.defineProperty(exports2, "NotificationType4", { enumerable: true, get: function() {
      return messages_1.NotificationType4;
    } });
    Object.defineProperty(exports2, "NotificationType5", { enumerable: true, get: function() {
      return messages_1.NotificationType5;
    } });
    Object.defineProperty(exports2, "NotificationType6", { enumerable: true, get: function() {
      return messages_1.NotificationType6;
    } });
    Object.defineProperty(exports2, "NotificationType7", { enumerable: true, get: function() {
      return messages_1.NotificationType7;
    } });
    Object.defineProperty(exports2, "NotificationType8", { enumerable: true, get: function() {
      return messages_1.NotificationType8;
    } });
    Object.defineProperty(exports2, "NotificationType9", { enumerable: true, get: function() {
      return messages_1.NotificationType9;
    } });
    Object.defineProperty(exports2, "ParameterStructures", { enumerable: true, get: function() {
      return messages_1.ParameterStructures;
    } });
    const linkedMap_1 = requireLinkedMap();
    Object.defineProperty(exports2, "LinkedMap", { enumerable: true, get: function() {
      return linkedMap_1.LinkedMap;
    } });
    Object.defineProperty(exports2, "LRUCache", { enumerable: true, get: function() {
      return linkedMap_1.LRUCache;
    } });
    Object.defineProperty(exports2, "Touch", { enumerable: true, get: function() {
      return linkedMap_1.Touch;
    } });
    const disposable_1 = requireDisposable();
    Object.defineProperty(exports2, "Disposable", { enumerable: true, get: function() {
      return disposable_1.Disposable;
    } });
    const events_1 = requireEvents();
    Object.defineProperty(exports2, "Event", { enumerable: true, get: function() {
      return events_1.Event;
    } });
    Object.defineProperty(exports2, "Emitter", { enumerable: true, get: function() {
      return events_1.Emitter;
    } });
    const cancellation_1 = requireCancellation();
    Object.defineProperty(exports2, "CancellationTokenSource", { enumerable: true, get: function() {
      return cancellation_1.CancellationTokenSource;
    } });
    Object.defineProperty(exports2, "CancellationToken", { enumerable: true, get: function() {
      return cancellation_1.CancellationToken;
    } });
    const sharedArrayCancellation_1 = requireSharedArrayCancellation();
    Object.defineProperty(exports2, "SharedArraySenderStrategy", { enumerable: true, get: function() {
      return sharedArrayCancellation_1.SharedArraySenderStrategy;
    } });
    Object.defineProperty(exports2, "SharedArrayReceiverStrategy", { enumerable: true, get: function() {
      return sharedArrayCancellation_1.SharedArrayReceiverStrategy;
    } });
    const messageReader_1 = requireMessageReader();
    Object.defineProperty(exports2, "MessageReader", { enumerable: true, get: function() {
      return messageReader_1.MessageReader;
    } });
    Object.defineProperty(exports2, "AbstractMessageReader", { enumerable: true, get: function() {
      return messageReader_1.AbstractMessageReader;
    } });
    Object.defineProperty(exports2, "ReadableStreamMessageReader", { enumerable: true, get: function() {
      return messageReader_1.ReadableStreamMessageReader;
    } });
    const messageWriter_1 = requireMessageWriter();
    Object.defineProperty(exports2, "MessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.MessageWriter;
    } });
    Object.defineProperty(exports2, "AbstractMessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.AbstractMessageWriter;
    } });
    Object.defineProperty(exports2, "WriteableStreamMessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.WriteableStreamMessageWriter;
    } });
    const messageBuffer_1 = requireMessageBuffer();
    Object.defineProperty(exports2, "AbstractMessageBuffer", { enumerable: true, get: function() {
      return messageBuffer_1.AbstractMessageBuffer;
    } });
    const connection_1 = requireConnection();
    Object.defineProperty(exports2, "ConnectionStrategy", { enumerable: true, get: function() {
      return connection_1.ConnectionStrategy;
    } });
    Object.defineProperty(exports2, "ConnectionOptions", { enumerable: true, get: function() {
      return connection_1.ConnectionOptions;
    } });
    Object.defineProperty(exports2, "NullLogger", { enumerable: true, get: function() {
      return connection_1.NullLogger;
    } });
    Object.defineProperty(exports2, "createMessageConnection", { enumerable: true, get: function() {
      return connection_1.createMessageConnection;
    } });
    Object.defineProperty(exports2, "ProgressToken", { enumerable: true, get: function() {
      return connection_1.ProgressToken;
    } });
    Object.defineProperty(exports2, "ProgressType", { enumerable: true, get: function() {
      return connection_1.ProgressType;
    } });
    Object.defineProperty(exports2, "Trace", { enumerable: true, get: function() {
      return connection_1.Trace;
    } });
    Object.defineProperty(exports2, "TraceValues", { enumerable: true, get: function() {
      return connection_1.TraceValues;
    } });
    Object.defineProperty(exports2, "TraceFormat", { enumerable: true, get: function() {
      return connection_1.TraceFormat;
    } });
    Object.defineProperty(exports2, "SetTraceNotification", { enumerable: true, get: function() {
      return connection_1.SetTraceNotification;
    } });
    Object.defineProperty(exports2, "LogTraceNotification", { enumerable: true, get: function() {
      return connection_1.LogTraceNotification;
    } });
    Object.defineProperty(exports2, "ConnectionErrors", { enumerable: true, get: function() {
      return connection_1.ConnectionErrors;
    } });
    Object.defineProperty(exports2, "ConnectionError", { enumerable: true, get: function() {
      return connection_1.ConnectionError;
    } });
    Object.defineProperty(exports2, "CancellationReceiverStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationReceiverStrategy;
    } });
    Object.defineProperty(exports2, "CancellationSenderStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationSenderStrategy;
    } });
    Object.defineProperty(exports2, "CancellationStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationStrategy;
    } });
    Object.defineProperty(exports2, "MessageStrategy", { enumerable: true, get: function() {
      return connection_1.MessageStrategy;
    } });
    const ral_1 = requireRal();
    exports2.RAL = ral_1.default;
  })(api$5);
  return api$5;
}
Object.defineProperty(ril$1, "__esModule", { value: true });
const api_1 = requireApi();
class MessageBuffer extends api_1.AbstractMessageBuffer {
  constructor(encoding = "utf-8") {
    super(encoding);
    this.asciiDecoder = new TextDecoder("ascii");
  }
  emptyBuffer() {
    return MessageBuffer.emptyBuffer;
  }
  fromString(value, _encoding) {
    return new TextEncoder().encode(value);
  }
  toString(value, encoding) {
    if (encoding === "ascii") {
      return this.asciiDecoder.decode(value);
    } else {
      return new TextDecoder(encoding).decode(value);
    }
  }
  asNative(buffer, length) {
    if (length === void 0) {
      return buffer;
    } else {
      return buffer.slice(0, length);
    }
  }
  allocNative(length) {
    return new Uint8Array(length);
  }
}
MessageBuffer.emptyBuffer = new Uint8Array(0);
class ReadableStreamWrapper {
  constructor(socket) {
    this.socket = socket;
    this._onData = new api_1.Emitter();
    this._messageListener = (event) => {
      const blob = event.data;
      blob.arrayBuffer().then((buffer) => {
        this._onData.fire(new Uint8Array(buffer));
      }, () => {
        (0, api_1.RAL)().console.error(`Converting blob to array buffer failed.`);
      });
    };
    this.socket.addEventListener("message", this._messageListener);
  }
  onClose(listener) {
    this.socket.addEventListener("close", listener);
    return api_1.Disposable.create(() => this.socket.removeEventListener("close", listener));
  }
  onError(listener) {
    this.socket.addEventListener("error", listener);
    return api_1.Disposable.create(() => this.socket.removeEventListener("error", listener));
  }
  onEnd(listener) {
    this.socket.addEventListener("end", listener);
    return api_1.Disposable.create(() => this.socket.removeEventListener("end", listener));
  }
  onData(listener) {
    return this._onData.event(listener);
  }
}
class WritableStreamWrapper {
  constructor(socket) {
    this.socket = socket;
  }
  onClose(listener) {
    this.socket.addEventListener("close", listener);
    return api_1.Disposable.create(() => this.socket.removeEventListener("close", listener));
  }
  onError(listener) {
    this.socket.addEventListener("error", listener);
    return api_1.Disposable.create(() => this.socket.removeEventListener("error", listener));
  }
  onEnd(listener) {
    this.socket.addEventListener("end", listener);
    return api_1.Disposable.create(() => this.socket.removeEventListener("end", listener));
  }
  write(data, encoding) {
    if (typeof data === "string") {
      if (encoding !== void 0 && encoding !== "utf-8") {
        throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${encoding}`);
      }
      this.socket.send(data);
    } else {
      this.socket.send(data);
    }
    return Promise.resolve();
  }
  end() {
    this.socket.close();
  }
}
const _textEncoder = new TextEncoder();
const _ril = Object.freeze({
  messageBuffer: Object.freeze({
    create: (encoding) => new MessageBuffer(encoding)
  }),
  applicationJson: Object.freeze({
    encoder: Object.freeze({
      name: "application/json",
      encode: (msg, options) => {
        if (options.charset !== "utf-8") {
          throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${options.charset}`);
        }
        return Promise.resolve(_textEncoder.encode(JSON.stringify(msg, void 0, 0)));
      }
    }),
    decoder: Object.freeze({
      name: "application/json",
      decode: (buffer, options) => {
        if (!(buffer instanceof Uint8Array)) {
          throw new Error(`In a Browser environments only Uint8Arrays are supported.`);
        }
        return Promise.resolve(JSON.parse(new TextDecoder(options.charset).decode(buffer)));
      }
    })
  }),
  stream: Object.freeze({
    asReadableStream: (socket) => new ReadableStreamWrapper(socket),
    asWritableStream: (socket) => new WritableStreamWrapper(socket)
  }),
  console,
  timer: Object.freeze({
    setTimeout(callback, ms, ...args) {
      const handle = setTimeout(callback, ms, ...args);
      return { dispose: () => clearTimeout(handle) };
    },
    setImmediate(callback, ...args) {
      const handle = setTimeout(callback, 0, ...args);
      return { dispose: () => clearTimeout(handle) };
    },
    setInterval(callback, ms, ...args) {
      const handle = setInterval(callback, ms, ...args);
      return { dispose: () => clearInterval(handle) };
    }
  })
});
function RIL() {
  return _ril;
}
(function(RIL2) {
  function install() {
    api_1.RAL.install(_ril);
  }
  RIL2.install = install;
})(RIL || (RIL = {}));
var _default$8 = ril$1.default = RIL;
const ril = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: _default$8
}, [ril$1]);
const require$$0$8 = /* @__PURE__ */ getAugmentedNamespace(ril);
(function(exports2) {
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
        __createBinding(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.createMessageConnection = exports2.BrowserMessageWriter = exports2.BrowserMessageReader = void 0;
  const ril_1 = require$$0$8;
  ril_1.default.install();
  const api_12 = requireApi();
  __exportStar(requireApi(), exports2);
  class BrowserMessageReader extends api_12.AbstractMessageReader {
    constructor(port) {
      super();
      this._onData = new api_12.Emitter();
      this._messageListener = (event) => {
        this._onData.fire(event.data);
      };
      port.addEventListener("error", (event) => this.fireError(event));
      port.onmessage = this._messageListener;
    }
    listen(callback) {
      return this._onData.event(callback);
    }
  }
  exports2.BrowserMessageReader = BrowserMessageReader;
  class BrowserMessageWriter extends api_12.AbstractMessageWriter {
    constructor(port) {
      super();
      this.port = port;
      this.errorCount = 0;
      port.addEventListener("error", (event) => this.fireError(event));
    }
    write(msg) {
      try {
        this.port.postMessage(msg);
        return Promise.resolve();
      } catch (error2) {
        this.handleError(error2, msg);
        return Promise.reject(error2);
      }
    }
    handleError(error2, msg) {
      this.errorCount++;
      this.fireError(error2, msg, this.errorCount);
    }
    end() {
    }
  }
  exports2.BrowserMessageWriter = BrowserMessageWriter;
  function createMessageConnection(reader, writer, logger, options) {
    if (logger === void 0) {
      logger = api_12.NullLogger;
    }
    if (api_12.ConnectionStrategy.is(options)) {
      options = { connectionStrategy: options };
    }
    return (0, api_12.createMessageConnection)(reader, writer, logger, options);
  }
  exports2.createMessageConnection = createMessageConnection;
})(main$7);
const main$5 = /* @__PURE__ */ getDefaultExportFromCjs(main$7);
const main$6 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: main$5
}, [main$7]);
const require$$0$7 = /* @__PURE__ */ getAugmentedNamespace(main$6);
(function(module2) {
  module2.exports = require$$0$7;
})(browser$7);
const browser$5 = /* @__PURE__ */ getDefaultExportFromCjs(browserExports$1);
const browser$6 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: browser$5
}, [browserExports$1]);
const require$$0$6 = /* @__PURE__ */ getAugmentedNamespace(browser$6);
var api$4 = {};
var DocumentUri;
(function(DocumentUri2) {
  function is2(value) {
    return typeof value === "string";
  }
  DocumentUri2.is = is2;
})(DocumentUri || (DocumentUri = {}));
var URI;
(function(URI2) {
  function is2(value) {
    return typeof value === "string";
  }
  URI2.is = is2;
})(URI || (URI = {}));
var integer;
(function(integer2) {
  integer2.MIN_VALUE = -2147483648;
  integer2.MAX_VALUE = 2147483647;
  function is2(value) {
    return typeof value === "number" && integer2.MIN_VALUE <= value && value <= integer2.MAX_VALUE;
  }
  integer2.is = is2;
})(integer || (integer = {}));
var uinteger;
(function(uinteger2) {
  uinteger2.MIN_VALUE = 0;
  uinteger2.MAX_VALUE = 2147483647;
  function is2(value) {
    return typeof value === "number" && uinteger2.MIN_VALUE <= value && value <= uinteger2.MAX_VALUE;
  }
  uinteger2.is = is2;
})(uinteger || (uinteger = {}));
var Position;
(function(Position2) {
  function create(line, character) {
    if (line === Number.MAX_VALUE) {
      line = uinteger.MAX_VALUE;
    }
    if (character === Number.MAX_VALUE) {
      character = uinteger.MAX_VALUE;
    }
    return { line, character };
  }
  Position2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.objectLiteral(candidate) && Is$7.uinteger(candidate.line) && Is$7.uinteger(candidate.character);
  }
  Position2.is = is2;
})(Position || (Position = {}));
var Range;
(function(Range2) {
  function create(one, two, three, four) {
    if (Is$7.uinteger(one) && Is$7.uinteger(two) && Is$7.uinteger(three) && Is$7.uinteger(four)) {
      return { start: Position.create(one, two), end: Position.create(three, four) };
    } else if (Position.is(one) && Position.is(two)) {
      return { start: one, end: two };
    } else {
      throw new Error("Range#create called with invalid arguments[".concat(one, ", ").concat(two, ", ").concat(three, ", ").concat(four, "]"));
    }
  }
  Range2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
  }
  Range2.is = is2;
})(Range || (Range = {}));
var Location;
(function(Location2) {
  function create(uri, range2) {
    return { uri, range: range2 };
  }
  Location2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.objectLiteral(candidate) && Range.is(candidate.range) && (Is$7.string(candidate.uri) || Is$7.undefined(candidate.uri));
  }
  Location2.is = is2;
})(Location || (Location = {}));
var LocationLink;
(function(LocationLink2) {
  function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
    return { targetUri, targetRange, targetSelectionRange, originSelectionRange };
  }
  LocationLink2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.objectLiteral(candidate) && Range.is(candidate.targetRange) && Is$7.string(candidate.targetUri) && Range.is(candidate.targetSelectionRange) && (Range.is(candidate.originSelectionRange) || Is$7.undefined(candidate.originSelectionRange));
  }
  LocationLink2.is = is2;
})(LocationLink || (LocationLink = {}));
var Color;
(function(Color2) {
  function create(red, green, blue, alpha) {
    return {
      red,
      green,
      blue,
      alpha
    };
  }
  Color2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.objectLiteral(candidate) && Is$7.numberRange(candidate.red, 0, 1) && Is$7.numberRange(candidate.green, 0, 1) && Is$7.numberRange(candidate.blue, 0, 1) && Is$7.numberRange(candidate.alpha, 0, 1);
  }
  Color2.is = is2;
})(Color || (Color = {}));
var ColorInformation;
(function(ColorInformation2) {
  function create(range2, color) {
    return {
      range: range2,
      color
    };
  }
  ColorInformation2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.objectLiteral(candidate) && Range.is(candidate.range) && Color.is(candidate.color);
  }
  ColorInformation2.is = is2;
})(ColorInformation || (ColorInformation = {}));
var ColorPresentation;
(function(ColorPresentation2) {
  function create(label, textEdit, additionalTextEdits) {
    return {
      label,
      textEdit,
      additionalTextEdits
    };
  }
  ColorPresentation2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.objectLiteral(candidate) && Is$7.string(candidate.label) && (Is$7.undefined(candidate.textEdit) || TextEdit.is(candidate)) && (Is$7.undefined(candidate.additionalTextEdits) || Is$7.typedArray(candidate.additionalTextEdits, TextEdit.is));
  }
  ColorPresentation2.is = is2;
})(ColorPresentation || (ColorPresentation = {}));
var FoldingRangeKind;
(function(FoldingRangeKind2) {
  FoldingRangeKind2.Comment = "comment";
  FoldingRangeKind2.Imports = "imports";
  FoldingRangeKind2.Region = "region";
})(FoldingRangeKind || (FoldingRangeKind = {}));
var FoldingRange;
(function(FoldingRange2) {
  function create(startLine, endLine, startCharacter, endCharacter, kind, collapsedText) {
    var result = {
      startLine,
      endLine
    };
    if (Is$7.defined(startCharacter)) {
      result.startCharacter = startCharacter;
    }
    if (Is$7.defined(endCharacter)) {
      result.endCharacter = endCharacter;
    }
    if (Is$7.defined(kind)) {
      result.kind = kind;
    }
    if (Is$7.defined(collapsedText)) {
      result.collapsedText = collapsedText;
    }
    return result;
  }
  FoldingRange2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.objectLiteral(candidate) && Is$7.uinteger(candidate.startLine) && Is$7.uinteger(candidate.startLine) && (Is$7.undefined(candidate.startCharacter) || Is$7.uinteger(candidate.startCharacter)) && (Is$7.undefined(candidate.endCharacter) || Is$7.uinteger(candidate.endCharacter)) && (Is$7.undefined(candidate.kind) || Is$7.string(candidate.kind));
  }
  FoldingRange2.is = is2;
})(FoldingRange || (FoldingRange = {}));
var DiagnosticRelatedInformation;
(function(DiagnosticRelatedInformation2) {
  function create(location, message) {
    return {
      location,
      message
    };
  }
  DiagnosticRelatedInformation2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.defined(candidate) && Location.is(candidate.location) && Is$7.string(candidate.message);
  }
  DiagnosticRelatedInformation2.is = is2;
})(DiagnosticRelatedInformation || (DiagnosticRelatedInformation = {}));
var DiagnosticSeverity;
(function(DiagnosticSeverity2) {
  DiagnosticSeverity2.Error = 1;
  DiagnosticSeverity2.Warning = 2;
  DiagnosticSeverity2.Information = 3;
  DiagnosticSeverity2.Hint = 4;
})(DiagnosticSeverity || (DiagnosticSeverity = {}));
var DiagnosticTag;
(function(DiagnosticTag2) {
  DiagnosticTag2.Unnecessary = 1;
  DiagnosticTag2.Deprecated = 2;
})(DiagnosticTag || (DiagnosticTag = {}));
var CodeDescription;
(function(CodeDescription2) {
  function is2(value) {
    var candidate = value;
    return Is$7.objectLiteral(candidate) && Is$7.string(candidate.href);
  }
  CodeDescription2.is = is2;
})(CodeDescription || (CodeDescription = {}));
var Diagnostic;
(function(Diagnostic2) {
  function create(range2, message, severity, code2, source2, relatedInformation) {
    var result = { range: range2, message };
    if (Is$7.defined(severity)) {
      result.severity = severity;
    }
    if (Is$7.defined(code2)) {
      result.code = code2;
    }
    if (Is$7.defined(source2)) {
      result.source = source2;
    }
    if (Is$7.defined(relatedInformation)) {
      result.relatedInformation = relatedInformation;
    }
    return result;
  }
  Diagnostic2.create = create;
  function is2(value) {
    var _a;
    var candidate = value;
    return Is$7.defined(candidate) && Range.is(candidate.range) && Is$7.string(candidate.message) && (Is$7.number(candidate.severity) || Is$7.undefined(candidate.severity)) && (Is$7.integer(candidate.code) || Is$7.string(candidate.code) || Is$7.undefined(candidate.code)) && (Is$7.undefined(candidate.codeDescription) || Is$7.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)) && (Is$7.string(candidate.source) || Is$7.undefined(candidate.source)) && (Is$7.undefined(candidate.relatedInformation) || Is$7.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
  }
  Diagnostic2.is = is2;
})(Diagnostic || (Diagnostic = {}));
var Command;
(function(Command2) {
  function create(title, command) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var result = { title, command };
    if (Is$7.defined(args) && args.length > 0) {
      result.arguments = args;
    }
    return result;
  }
  Command2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.defined(candidate) && Is$7.string(candidate.title) && Is$7.string(candidate.command);
  }
  Command2.is = is2;
})(Command || (Command = {}));
var TextEdit;
(function(TextEdit2) {
  function replace(range2, newText) {
    return { range: range2, newText };
  }
  TextEdit2.replace = replace;
  function insert(position, newText) {
    return { range: { start: position, end: position }, newText };
  }
  TextEdit2.insert = insert;
  function del(range2) {
    return { range: range2, newText: "" };
  }
  TextEdit2.del = del;
  function is2(value) {
    var candidate = value;
    return Is$7.objectLiteral(candidate) && Is$7.string(candidate.newText) && Range.is(candidate.range);
  }
  TextEdit2.is = is2;
})(TextEdit || (TextEdit = {}));
var ChangeAnnotation;
(function(ChangeAnnotation2) {
  function create(label, needsConfirmation, description) {
    var result = { label };
    if (needsConfirmation !== void 0) {
      result.needsConfirmation = needsConfirmation;
    }
    if (description !== void 0) {
      result.description = description;
    }
    return result;
  }
  ChangeAnnotation2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.objectLiteral(candidate) && Is$7.string(candidate.label) && (Is$7.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === void 0) && (Is$7.string(candidate.description) || candidate.description === void 0);
  }
  ChangeAnnotation2.is = is2;
})(ChangeAnnotation || (ChangeAnnotation = {}));
var ChangeAnnotationIdentifier;
(function(ChangeAnnotationIdentifier2) {
  function is2(value) {
    var candidate = value;
    return Is$7.string(candidate);
  }
  ChangeAnnotationIdentifier2.is = is2;
})(ChangeAnnotationIdentifier || (ChangeAnnotationIdentifier = {}));
var AnnotatedTextEdit;
(function(AnnotatedTextEdit2) {
  function replace(range2, newText, annotation) {
    return { range: range2, newText, annotationId: annotation };
  }
  AnnotatedTextEdit2.replace = replace;
  function insert(position, newText, annotation) {
    return { range: { start: position, end: position }, newText, annotationId: annotation };
  }
  AnnotatedTextEdit2.insert = insert;
  function del(range2, annotation) {
    return { range: range2, newText: "", annotationId: annotation };
  }
  AnnotatedTextEdit2.del = del;
  function is2(value) {
    var candidate = value;
    return TextEdit.is(candidate) && (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
  }
  AnnotatedTextEdit2.is = is2;
})(AnnotatedTextEdit || (AnnotatedTextEdit = {}));
var TextDocumentEdit;
(function(TextDocumentEdit2) {
  function create(textDocument, edits) {
    return { textDocument, edits };
  }
  TextDocumentEdit2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.defined(candidate) && OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
  }
  TextDocumentEdit2.is = is2;
})(TextDocumentEdit || (TextDocumentEdit = {}));
var CreateFile;
(function(CreateFile2) {
  function create(uri, options, annotation) {
    var result = {
      kind: "create",
      uri
    };
    if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
      result.options = options;
    }
    if (annotation !== void 0) {
      result.annotationId = annotation;
    }
    return result;
  }
  CreateFile2.create = create;
  function is2(value) {
    var candidate = value;
    return candidate && candidate.kind === "create" && Is$7.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is$7.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is$7.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
  }
  CreateFile2.is = is2;
})(CreateFile || (CreateFile = {}));
var RenameFile;
(function(RenameFile2) {
  function create(oldUri, newUri, options, annotation) {
    var result = {
      kind: "rename",
      oldUri,
      newUri
    };
    if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
      result.options = options;
    }
    if (annotation !== void 0) {
      result.annotationId = annotation;
    }
    return result;
  }
  RenameFile2.create = create;
  function is2(value) {
    var candidate = value;
    return candidate && candidate.kind === "rename" && Is$7.string(candidate.oldUri) && Is$7.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is$7.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is$7.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
  }
  RenameFile2.is = is2;
})(RenameFile || (RenameFile = {}));
var DeleteFile;
(function(DeleteFile2) {
  function create(uri, options, annotation) {
    var result = {
      kind: "delete",
      uri
    };
    if (options !== void 0 && (options.recursive !== void 0 || options.ignoreIfNotExists !== void 0)) {
      result.options = options;
    }
    if (annotation !== void 0) {
      result.annotationId = annotation;
    }
    return result;
  }
  DeleteFile2.create = create;
  function is2(value) {
    var candidate = value;
    return candidate && candidate.kind === "delete" && Is$7.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || Is$7.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || Is$7.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
  }
  DeleteFile2.is = is2;
})(DeleteFile || (DeleteFile = {}));
var WorkspaceEdit;
(function(WorkspaceEdit2) {
  function is2(value) {
    var candidate = value;
    return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every(function(change) {
      if (Is$7.string(change.kind)) {
        return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
      } else {
        return TextDocumentEdit.is(change);
      }
    }));
  }
  WorkspaceEdit2.is = is2;
})(WorkspaceEdit || (WorkspaceEdit = {}));
var TextEditChangeImpl = (
  /** @class */
  function() {
    function TextEditChangeImpl2(edits, changeAnnotations) {
      this.edits = edits;
      this.changeAnnotations = changeAnnotations;
    }
    TextEditChangeImpl2.prototype.insert = function(position, newText, annotation) {
      var edit;
      var id;
      if (annotation === void 0) {
        edit = TextEdit.insert(position, newText);
      } else if (ChangeAnnotationIdentifier.is(annotation)) {
        id = annotation;
        edit = AnnotatedTextEdit.insert(position, newText, annotation);
      } else {
        this.assertChangeAnnotations(this.changeAnnotations);
        id = this.changeAnnotations.manage(annotation);
        edit = AnnotatedTextEdit.insert(position, newText, id);
      }
      this.edits.push(edit);
      if (id !== void 0) {
        return id;
      }
    };
    TextEditChangeImpl2.prototype.replace = function(range2, newText, annotation) {
      var edit;
      var id;
      if (annotation === void 0) {
        edit = TextEdit.replace(range2, newText);
      } else if (ChangeAnnotationIdentifier.is(annotation)) {
        id = annotation;
        edit = AnnotatedTextEdit.replace(range2, newText, annotation);
      } else {
        this.assertChangeAnnotations(this.changeAnnotations);
        id = this.changeAnnotations.manage(annotation);
        edit = AnnotatedTextEdit.replace(range2, newText, id);
      }
      this.edits.push(edit);
      if (id !== void 0) {
        return id;
      }
    };
    TextEditChangeImpl2.prototype.delete = function(range2, annotation) {
      var edit;
      var id;
      if (annotation === void 0) {
        edit = TextEdit.del(range2);
      } else if (ChangeAnnotationIdentifier.is(annotation)) {
        id = annotation;
        edit = AnnotatedTextEdit.del(range2, annotation);
      } else {
        this.assertChangeAnnotations(this.changeAnnotations);
        id = this.changeAnnotations.manage(annotation);
        edit = AnnotatedTextEdit.del(range2, id);
      }
      this.edits.push(edit);
      if (id !== void 0) {
        return id;
      }
    };
    TextEditChangeImpl2.prototype.add = function(edit) {
      this.edits.push(edit);
    };
    TextEditChangeImpl2.prototype.all = function() {
      return this.edits;
    };
    TextEditChangeImpl2.prototype.clear = function() {
      this.edits.splice(0, this.edits.length);
    };
    TextEditChangeImpl2.prototype.assertChangeAnnotations = function(value) {
      if (value === void 0) {
        throw new Error("Text edit change is not configured to manage change annotations.");
      }
    };
    return TextEditChangeImpl2;
  }()
);
var ChangeAnnotations = (
  /** @class */
  function() {
    function ChangeAnnotations2(annotations) {
      this._annotations = annotations === void 0 ? /* @__PURE__ */ Object.create(null) : annotations;
      this._counter = 0;
      this._size = 0;
    }
    ChangeAnnotations2.prototype.all = function() {
      return this._annotations;
    };
    Object.defineProperty(ChangeAnnotations2.prototype, "size", {
      get: function() {
        return this._size;
      },
      enumerable: false,
      configurable: true
    });
    ChangeAnnotations2.prototype.manage = function(idOrAnnotation, annotation) {
      var id;
      if (ChangeAnnotationIdentifier.is(idOrAnnotation)) {
        id = idOrAnnotation;
      } else {
        id = this.nextId();
        annotation = idOrAnnotation;
      }
      if (this._annotations[id] !== void 0) {
        throw new Error("Id ".concat(id, " is already in use."));
      }
      if (annotation === void 0) {
        throw new Error("No annotation provided for id ".concat(id));
      }
      this._annotations[id] = annotation;
      this._size++;
      return id;
    };
    ChangeAnnotations2.prototype.nextId = function() {
      this._counter++;
      return this._counter.toString();
    };
    return ChangeAnnotations2;
  }()
);
var WorkspaceChange = (
  /** @class */
  function() {
    function WorkspaceChange2(workspaceEdit) {
      var _this = this;
      this._textEditChanges = /* @__PURE__ */ Object.create(null);
      if (workspaceEdit !== void 0) {
        this._workspaceEdit = workspaceEdit;
        if (workspaceEdit.documentChanges) {
          this._changeAnnotations = new ChangeAnnotations(workspaceEdit.changeAnnotations);
          workspaceEdit.changeAnnotations = this._changeAnnotations.all();
          workspaceEdit.documentChanges.forEach(function(change) {
            if (TextDocumentEdit.is(change)) {
              var textEditChange = new TextEditChangeImpl(change.edits, _this._changeAnnotations);
              _this._textEditChanges[change.textDocument.uri] = textEditChange;
            }
          });
        } else if (workspaceEdit.changes) {
          Object.keys(workspaceEdit.changes).forEach(function(key) {
            var textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
            _this._textEditChanges[key] = textEditChange;
          });
        }
      } else {
        this._workspaceEdit = {};
      }
    }
    Object.defineProperty(WorkspaceChange2.prototype, "edit", {
      /**
       * Returns the underlying {@link WorkspaceEdit} literal
       * use to be returned from a workspace edit operation like rename.
       */
      get: function() {
        this.initDocumentChanges();
        if (this._changeAnnotations !== void 0) {
          if (this._changeAnnotations.size === 0) {
            this._workspaceEdit.changeAnnotations = void 0;
          } else {
            this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
          }
        }
        return this._workspaceEdit;
      },
      enumerable: false,
      configurable: true
    });
    WorkspaceChange2.prototype.getTextEditChange = function(key) {
      if (OptionalVersionedTextDocumentIdentifier.is(key)) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) {
          throw new Error("Workspace edit is not configured for document changes.");
        }
        var textDocument = { uri: key.uri, version: key.version };
        var result = this._textEditChanges[textDocument.uri];
        if (!result) {
          var edits = [];
          var textDocumentEdit = {
            textDocument,
            edits
          };
          this._workspaceEdit.documentChanges.push(textDocumentEdit);
          result = new TextEditChangeImpl(edits, this._changeAnnotations);
          this._textEditChanges[textDocument.uri] = result;
        }
        return result;
      } else {
        this.initChanges();
        if (this._workspaceEdit.changes === void 0) {
          throw new Error("Workspace edit is not configured for normal text edit changes.");
        }
        var result = this._textEditChanges[key];
        if (!result) {
          var edits = [];
          this._workspaceEdit.changes[key] = edits;
          result = new TextEditChangeImpl(edits);
          this._textEditChanges[key] = result;
        }
        return result;
      }
    };
    WorkspaceChange2.prototype.initDocumentChanges = function() {
      if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
        this._changeAnnotations = new ChangeAnnotations();
        this._workspaceEdit.documentChanges = [];
        this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
      }
    };
    WorkspaceChange2.prototype.initChanges = function() {
      if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
        this._workspaceEdit.changes = /* @__PURE__ */ Object.create(null);
      }
    };
    WorkspaceChange2.prototype.createFile = function(uri, optionsOrAnnotation, options) {
      this.initDocumentChanges();
      if (this._workspaceEdit.documentChanges === void 0) {
        throw new Error("Workspace edit is not configured for document changes.");
      }
      var annotation;
      if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
        annotation = optionsOrAnnotation;
      } else {
        options = optionsOrAnnotation;
      }
      var operation;
      var id;
      if (annotation === void 0) {
        operation = CreateFile.create(uri, options);
      } else {
        id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
        operation = CreateFile.create(uri, options, id);
      }
      this._workspaceEdit.documentChanges.push(operation);
      if (id !== void 0) {
        return id;
      }
    };
    WorkspaceChange2.prototype.renameFile = function(oldUri, newUri, optionsOrAnnotation, options) {
      this.initDocumentChanges();
      if (this._workspaceEdit.documentChanges === void 0) {
        throw new Error("Workspace edit is not configured for document changes.");
      }
      var annotation;
      if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
        annotation = optionsOrAnnotation;
      } else {
        options = optionsOrAnnotation;
      }
      var operation;
      var id;
      if (annotation === void 0) {
        operation = RenameFile.create(oldUri, newUri, options);
      } else {
        id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
        operation = RenameFile.create(oldUri, newUri, options, id);
      }
      this._workspaceEdit.documentChanges.push(operation);
      if (id !== void 0) {
        return id;
      }
    };
    WorkspaceChange2.prototype.deleteFile = function(uri, optionsOrAnnotation, options) {
      this.initDocumentChanges();
      if (this._workspaceEdit.documentChanges === void 0) {
        throw new Error("Workspace edit is not configured for document changes.");
      }
      var annotation;
      if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
        annotation = optionsOrAnnotation;
      } else {
        options = optionsOrAnnotation;
      }
      var operation;
      var id;
      if (annotation === void 0) {
        operation = DeleteFile.create(uri, options);
      } else {
        id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
        operation = DeleteFile.create(uri, options, id);
      }
      this._workspaceEdit.documentChanges.push(operation);
      if (id !== void 0) {
        return id;
      }
    };
    return WorkspaceChange2;
  }()
);
var TextDocumentIdentifier;
(function(TextDocumentIdentifier2) {
  function create(uri) {
    return { uri };
  }
  TextDocumentIdentifier2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.defined(candidate) && Is$7.string(candidate.uri);
  }
  TextDocumentIdentifier2.is = is2;
})(TextDocumentIdentifier || (TextDocumentIdentifier = {}));
var VersionedTextDocumentIdentifier;
(function(VersionedTextDocumentIdentifier2) {
  function create(uri, version) {
    return { uri, version };
  }
  VersionedTextDocumentIdentifier2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.defined(candidate) && Is$7.string(candidate.uri) && Is$7.integer(candidate.version);
  }
  VersionedTextDocumentIdentifier2.is = is2;
})(VersionedTextDocumentIdentifier || (VersionedTextDocumentIdentifier = {}));
var OptionalVersionedTextDocumentIdentifier;
(function(OptionalVersionedTextDocumentIdentifier2) {
  function create(uri, version) {
    return { uri, version };
  }
  OptionalVersionedTextDocumentIdentifier2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.defined(candidate) && Is$7.string(candidate.uri) && (candidate.version === null || Is$7.integer(candidate.version));
  }
  OptionalVersionedTextDocumentIdentifier2.is = is2;
})(OptionalVersionedTextDocumentIdentifier || (OptionalVersionedTextDocumentIdentifier = {}));
var TextDocumentItem;
(function(TextDocumentItem2) {
  function create(uri, languageId, version, text) {
    return { uri, languageId, version, text };
  }
  TextDocumentItem2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.defined(candidate) && Is$7.string(candidate.uri) && Is$7.string(candidate.languageId) && Is$7.integer(candidate.version) && Is$7.string(candidate.text);
  }
  TextDocumentItem2.is = is2;
})(TextDocumentItem || (TextDocumentItem = {}));
var MarkupKind;
(function(MarkupKind2) {
  MarkupKind2.PlainText = "plaintext";
  MarkupKind2.Markdown = "markdown";
  function is2(value) {
    var candidate = value;
    return candidate === MarkupKind2.PlainText || candidate === MarkupKind2.Markdown;
  }
  MarkupKind2.is = is2;
})(MarkupKind || (MarkupKind = {}));
var MarkupContent;
(function(MarkupContent2) {
  function is2(value) {
    var candidate = value;
    return Is$7.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is$7.string(candidate.value);
  }
  MarkupContent2.is = is2;
})(MarkupContent || (MarkupContent = {}));
var CompletionItemKind;
(function(CompletionItemKind2) {
  CompletionItemKind2.Text = 1;
  CompletionItemKind2.Method = 2;
  CompletionItemKind2.Function = 3;
  CompletionItemKind2.Constructor = 4;
  CompletionItemKind2.Field = 5;
  CompletionItemKind2.Variable = 6;
  CompletionItemKind2.Class = 7;
  CompletionItemKind2.Interface = 8;
  CompletionItemKind2.Module = 9;
  CompletionItemKind2.Property = 10;
  CompletionItemKind2.Unit = 11;
  CompletionItemKind2.Value = 12;
  CompletionItemKind2.Enum = 13;
  CompletionItemKind2.Keyword = 14;
  CompletionItemKind2.Snippet = 15;
  CompletionItemKind2.Color = 16;
  CompletionItemKind2.File = 17;
  CompletionItemKind2.Reference = 18;
  CompletionItemKind2.Folder = 19;
  CompletionItemKind2.EnumMember = 20;
  CompletionItemKind2.Constant = 21;
  CompletionItemKind2.Struct = 22;
  CompletionItemKind2.Event = 23;
  CompletionItemKind2.Operator = 24;
  CompletionItemKind2.TypeParameter = 25;
})(CompletionItemKind || (CompletionItemKind = {}));
var InsertTextFormat;
(function(InsertTextFormat2) {
  InsertTextFormat2.PlainText = 1;
  InsertTextFormat2.Snippet = 2;
})(InsertTextFormat || (InsertTextFormat = {}));
var CompletionItemTag;
(function(CompletionItemTag2) {
  CompletionItemTag2.Deprecated = 1;
})(CompletionItemTag || (CompletionItemTag = {}));
var InsertReplaceEdit;
(function(InsertReplaceEdit2) {
  function create(newText, insert, replace) {
    return { newText, insert, replace };
  }
  InsertReplaceEdit2.create = create;
  function is2(value) {
    var candidate = value;
    return candidate && Is$7.string(candidate.newText) && Range.is(candidate.insert) && Range.is(candidate.replace);
  }
  InsertReplaceEdit2.is = is2;
})(InsertReplaceEdit || (InsertReplaceEdit = {}));
var InsertTextMode;
(function(InsertTextMode2) {
  InsertTextMode2.asIs = 1;
  InsertTextMode2.adjustIndentation = 2;
})(InsertTextMode || (InsertTextMode = {}));
var CompletionItemLabelDetails;
(function(CompletionItemLabelDetails2) {
  function is2(value) {
    var candidate = value;
    return candidate && (Is$7.string(candidate.detail) || candidate.detail === void 0) && (Is$7.string(candidate.description) || candidate.description === void 0);
  }
  CompletionItemLabelDetails2.is = is2;
})(CompletionItemLabelDetails || (CompletionItemLabelDetails = {}));
var CompletionItem;
(function(CompletionItem2) {
  function create(label) {
    return { label };
  }
  CompletionItem2.create = create;
})(CompletionItem || (CompletionItem = {}));
var CompletionList;
(function(CompletionList2) {
  function create(items, isIncomplete) {
    return { items: items ? items : [], isIncomplete: !!isIncomplete };
  }
  CompletionList2.create = create;
})(CompletionList || (CompletionList = {}));
var MarkedString;
(function(MarkedString2) {
  function fromPlainText(plainText) {
    return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
  }
  MarkedString2.fromPlainText = fromPlainText;
  function is2(value) {
    var candidate = value;
    return Is$7.string(candidate) || Is$7.objectLiteral(candidate) && Is$7.string(candidate.language) && Is$7.string(candidate.value);
  }
  MarkedString2.is = is2;
})(MarkedString || (MarkedString = {}));
var Hover;
(function(Hover2) {
  function is2(value) {
    var candidate = value;
    return !!candidate && Is$7.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) || MarkedString.is(candidate.contents) || Is$7.typedArray(candidate.contents, MarkedString.is)) && (value.range === void 0 || Range.is(value.range));
  }
  Hover2.is = is2;
})(Hover || (Hover = {}));
var ParameterInformation;
(function(ParameterInformation2) {
  function create(label, documentation) {
    return documentation ? { label, documentation } : { label };
  }
  ParameterInformation2.create = create;
})(ParameterInformation || (ParameterInformation = {}));
var SignatureInformation;
(function(SignatureInformation2) {
  function create(label, documentation) {
    var parameters = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      parameters[_i - 2] = arguments[_i];
    }
    var result = { label };
    if (Is$7.defined(documentation)) {
      result.documentation = documentation;
    }
    if (Is$7.defined(parameters)) {
      result.parameters = parameters;
    } else {
      result.parameters = [];
    }
    return result;
  }
  SignatureInformation2.create = create;
})(SignatureInformation || (SignatureInformation = {}));
var DocumentHighlightKind;
(function(DocumentHighlightKind2) {
  DocumentHighlightKind2.Text = 1;
  DocumentHighlightKind2.Read = 2;
  DocumentHighlightKind2.Write = 3;
})(DocumentHighlightKind || (DocumentHighlightKind = {}));
var DocumentHighlight;
(function(DocumentHighlight2) {
  function create(range2, kind) {
    var result = { range: range2 };
    if (Is$7.number(kind)) {
      result.kind = kind;
    }
    return result;
  }
  DocumentHighlight2.create = create;
})(DocumentHighlight || (DocumentHighlight = {}));
var SymbolKind;
(function(SymbolKind2) {
  SymbolKind2.File = 1;
  SymbolKind2.Module = 2;
  SymbolKind2.Namespace = 3;
  SymbolKind2.Package = 4;
  SymbolKind2.Class = 5;
  SymbolKind2.Method = 6;
  SymbolKind2.Property = 7;
  SymbolKind2.Field = 8;
  SymbolKind2.Constructor = 9;
  SymbolKind2.Enum = 10;
  SymbolKind2.Interface = 11;
  SymbolKind2.Function = 12;
  SymbolKind2.Variable = 13;
  SymbolKind2.Constant = 14;
  SymbolKind2.String = 15;
  SymbolKind2.Number = 16;
  SymbolKind2.Boolean = 17;
  SymbolKind2.Array = 18;
  SymbolKind2.Object = 19;
  SymbolKind2.Key = 20;
  SymbolKind2.Null = 21;
  SymbolKind2.EnumMember = 22;
  SymbolKind2.Struct = 23;
  SymbolKind2.Event = 24;
  SymbolKind2.Operator = 25;
  SymbolKind2.TypeParameter = 26;
})(SymbolKind || (SymbolKind = {}));
var SymbolTag;
(function(SymbolTag2) {
  SymbolTag2.Deprecated = 1;
})(SymbolTag || (SymbolTag = {}));
var SymbolInformation;
(function(SymbolInformation2) {
  function create(name, kind, range2, uri, containerName) {
    var result = {
      name,
      kind,
      location: { uri, range: range2 }
    };
    if (containerName) {
      result.containerName = containerName;
    }
    return result;
  }
  SymbolInformation2.create = create;
})(SymbolInformation || (SymbolInformation = {}));
var WorkspaceSymbol$1;
(function(WorkspaceSymbol2) {
  function create(name, kind, uri, range2) {
    return range2 !== void 0 ? { name, kind, location: { uri, range: range2 } } : { name, kind, location: { uri } };
  }
  WorkspaceSymbol2.create = create;
})(WorkspaceSymbol$1 || (WorkspaceSymbol$1 = {}));
var DocumentSymbol;
(function(DocumentSymbol2) {
  function create(name, detail, kind, range2, selectionRange2, children) {
    var result = {
      name,
      detail,
      kind,
      range: range2,
      selectionRange: selectionRange2
    };
    if (children !== void 0) {
      result.children = children;
    }
    return result;
  }
  DocumentSymbol2.create = create;
  function is2(value) {
    var candidate = value;
    return candidate && Is$7.string(candidate.name) && Is$7.number(candidate.kind) && Range.is(candidate.range) && Range.is(candidate.selectionRange) && (candidate.detail === void 0 || Is$7.string(candidate.detail)) && (candidate.deprecated === void 0 || Is$7.boolean(candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children)) && (candidate.tags === void 0 || Array.isArray(candidate.tags));
  }
  DocumentSymbol2.is = is2;
})(DocumentSymbol || (DocumentSymbol = {}));
var CodeActionKind;
(function(CodeActionKind2) {
  CodeActionKind2.Empty = "";
  CodeActionKind2.QuickFix = "quickfix";
  CodeActionKind2.Refactor = "refactor";
  CodeActionKind2.RefactorExtract = "refactor.extract";
  CodeActionKind2.RefactorInline = "refactor.inline";
  CodeActionKind2.RefactorRewrite = "refactor.rewrite";
  CodeActionKind2.Source = "source";
  CodeActionKind2.SourceOrganizeImports = "source.organizeImports";
  CodeActionKind2.SourceFixAll = "source.fixAll";
})(CodeActionKind || (CodeActionKind = {}));
var CodeActionTriggerKind;
(function(CodeActionTriggerKind2) {
  CodeActionTriggerKind2.Invoked = 1;
  CodeActionTriggerKind2.Automatic = 2;
})(CodeActionTriggerKind || (CodeActionTriggerKind = {}));
var CodeActionContext;
(function(CodeActionContext2) {
  function create(diagnostics, only, triggerKind) {
    var result = { diagnostics };
    if (only !== void 0 && only !== null) {
      result.only = only;
    }
    if (triggerKind !== void 0 && triggerKind !== null) {
      result.triggerKind = triggerKind;
    }
    return result;
  }
  CodeActionContext2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.defined(candidate) && Is$7.typedArray(candidate.diagnostics, Diagnostic.is) && (candidate.only === void 0 || Is$7.typedArray(candidate.only, Is$7.string)) && (candidate.triggerKind === void 0 || candidate.triggerKind === CodeActionTriggerKind.Invoked || candidate.triggerKind === CodeActionTriggerKind.Automatic);
  }
  CodeActionContext2.is = is2;
})(CodeActionContext || (CodeActionContext = {}));
var CodeAction;
(function(CodeAction2) {
  function create(title, kindOrCommandOrEdit, kind) {
    var result = { title };
    var checkKind = true;
    if (typeof kindOrCommandOrEdit === "string") {
      checkKind = false;
      result.kind = kindOrCommandOrEdit;
    } else if (Command.is(kindOrCommandOrEdit)) {
      result.command = kindOrCommandOrEdit;
    } else {
      result.edit = kindOrCommandOrEdit;
    }
    if (checkKind && kind !== void 0) {
      result.kind = kind;
    }
    return result;
  }
  CodeAction2.create = create;
  function is2(value) {
    var candidate = value;
    return candidate && Is$7.string(candidate.title) && (candidate.diagnostics === void 0 || Is$7.typedArray(candidate.diagnostics, Diagnostic.is)) && (candidate.kind === void 0 || Is$7.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || Command.is(candidate.command)) && (candidate.isPreferred === void 0 || Is$7.boolean(candidate.isPreferred)) && (candidate.edit === void 0 || WorkspaceEdit.is(candidate.edit));
  }
  CodeAction2.is = is2;
})(CodeAction || (CodeAction = {}));
var CodeLens;
(function(CodeLens2) {
  function create(range2, data) {
    var result = { range: range2 };
    if (Is$7.defined(data)) {
      result.data = data;
    }
    return result;
  }
  CodeLens2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.defined(candidate) && Range.is(candidate.range) && (Is$7.undefined(candidate.command) || Command.is(candidate.command));
  }
  CodeLens2.is = is2;
})(CodeLens || (CodeLens = {}));
var FormattingOptions;
(function(FormattingOptions2) {
  function create(tabSize, insertSpaces) {
    return { tabSize, insertSpaces };
  }
  FormattingOptions2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.defined(candidate) && Is$7.uinteger(candidate.tabSize) && Is$7.boolean(candidate.insertSpaces);
  }
  FormattingOptions2.is = is2;
})(FormattingOptions || (FormattingOptions = {}));
var DocumentLink;
(function(DocumentLink2) {
  function create(range2, target, data) {
    return { range: range2, target, data };
  }
  DocumentLink2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.defined(candidate) && Range.is(candidate.range) && (Is$7.undefined(candidate.target) || Is$7.string(candidate.target));
  }
  DocumentLink2.is = is2;
})(DocumentLink || (DocumentLink = {}));
var SelectionRange;
(function(SelectionRange2) {
  function create(range2, parent) {
    return { range: range2, parent };
  }
  SelectionRange2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.objectLiteral(candidate) && Range.is(candidate.range) && (candidate.parent === void 0 || SelectionRange2.is(candidate.parent));
  }
  SelectionRange2.is = is2;
})(SelectionRange || (SelectionRange = {}));
var SemanticTokenTypes;
(function(SemanticTokenTypes2) {
  SemanticTokenTypes2["namespace"] = "namespace";
  SemanticTokenTypes2["type"] = "type";
  SemanticTokenTypes2["class"] = "class";
  SemanticTokenTypes2["enum"] = "enum";
  SemanticTokenTypes2["interface"] = "interface";
  SemanticTokenTypes2["struct"] = "struct";
  SemanticTokenTypes2["typeParameter"] = "typeParameter";
  SemanticTokenTypes2["parameter"] = "parameter";
  SemanticTokenTypes2["variable"] = "variable";
  SemanticTokenTypes2["property"] = "property";
  SemanticTokenTypes2["enumMember"] = "enumMember";
  SemanticTokenTypes2["event"] = "event";
  SemanticTokenTypes2["function"] = "function";
  SemanticTokenTypes2["method"] = "method";
  SemanticTokenTypes2["macro"] = "macro";
  SemanticTokenTypes2["keyword"] = "keyword";
  SemanticTokenTypes2["modifier"] = "modifier";
  SemanticTokenTypes2["comment"] = "comment";
  SemanticTokenTypes2["string"] = "string";
  SemanticTokenTypes2["number"] = "number";
  SemanticTokenTypes2["regexp"] = "regexp";
  SemanticTokenTypes2["operator"] = "operator";
  SemanticTokenTypes2["decorator"] = "decorator";
})(SemanticTokenTypes || (SemanticTokenTypes = {}));
var SemanticTokenModifiers;
(function(SemanticTokenModifiers2) {
  SemanticTokenModifiers2["declaration"] = "declaration";
  SemanticTokenModifiers2["definition"] = "definition";
  SemanticTokenModifiers2["readonly"] = "readonly";
  SemanticTokenModifiers2["static"] = "static";
  SemanticTokenModifiers2["deprecated"] = "deprecated";
  SemanticTokenModifiers2["abstract"] = "abstract";
  SemanticTokenModifiers2["async"] = "async";
  SemanticTokenModifiers2["modification"] = "modification";
  SemanticTokenModifiers2["documentation"] = "documentation";
  SemanticTokenModifiers2["defaultLibrary"] = "defaultLibrary";
})(SemanticTokenModifiers || (SemanticTokenModifiers = {}));
var SemanticTokens;
(function(SemanticTokens2) {
  function is2(value) {
    var candidate = value;
    return Is$7.objectLiteral(candidate) && (candidate.resultId === void 0 || typeof candidate.resultId === "string") && Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === "number");
  }
  SemanticTokens2.is = is2;
})(SemanticTokens || (SemanticTokens = {}));
var InlineValueText;
(function(InlineValueText2) {
  function create(range2, text) {
    return { range: range2, text };
  }
  InlineValueText2.create = create;
  function is2(value) {
    var candidate = value;
    return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is$7.string(candidate.text);
  }
  InlineValueText2.is = is2;
})(InlineValueText || (InlineValueText = {}));
var InlineValueVariableLookup;
(function(InlineValueVariableLookup2) {
  function create(range2, variableName, caseSensitiveLookup) {
    return { range: range2, variableName, caseSensitiveLookup };
  }
  InlineValueVariableLookup2.create = create;
  function is2(value) {
    var candidate = value;
    return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is$7.boolean(candidate.caseSensitiveLookup) && (Is$7.string(candidate.variableName) || candidate.variableName === void 0);
  }
  InlineValueVariableLookup2.is = is2;
})(InlineValueVariableLookup || (InlineValueVariableLookup = {}));
var InlineValueEvaluatableExpression;
(function(InlineValueEvaluatableExpression2) {
  function create(range2, expression) {
    return { range: range2, expression };
  }
  InlineValueEvaluatableExpression2.create = create;
  function is2(value) {
    var candidate = value;
    return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && (Is$7.string(candidate.expression) || candidate.expression === void 0);
  }
  InlineValueEvaluatableExpression2.is = is2;
})(InlineValueEvaluatableExpression || (InlineValueEvaluatableExpression = {}));
var InlineValueContext;
(function(InlineValueContext2) {
  function create(frameId, stoppedLocation) {
    return { frameId, stoppedLocation };
  }
  InlineValueContext2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.defined(candidate) && Range.is(value.stoppedLocation);
  }
  InlineValueContext2.is = is2;
})(InlineValueContext || (InlineValueContext = {}));
var InlayHintKind;
(function(InlayHintKind2) {
  InlayHintKind2.Type = 1;
  InlayHintKind2.Parameter = 2;
  function is2(value) {
    return value === 1 || value === 2;
  }
  InlayHintKind2.is = is2;
})(InlayHintKind || (InlayHintKind = {}));
var InlayHintLabelPart;
(function(InlayHintLabelPart2) {
  function create(value) {
    return { value };
  }
  InlayHintLabelPart2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.objectLiteral(candidate) && (candidate.tooltip === void 0 || Is$7.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.location === void 0 || Location.is(candidate.location)) && (candidate.command === void 0 || Command.is(candidate.command));
  }
  InlayHintLabelPart2.is = is2;
})(InlayHintLabelPart || (InlayHintLabelPart = {}));
var InlayHint;
(function(InlayHint2) {
  function create(position, label, kind) {
    var result = { position, label };
    if (kind !== void 0) {
      result.kind = kind;
    }
    return result;
  }
  InlayHint2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.objectLiteral(candidate) && Position.is(candidate.position) && (Is$7.string(candidate.label) || Is$7.typedArray(candidate.label, InlayHintLabelPart.is)) && (candidate.kind === void 0 || InlayHintKind.is(candidate.kind)) && candidate.textEdits === void 0 || Is$7.typedArray(candidate.textEdits, TextEdit.is) && (candidate.tooltip === void 0 || Is$7.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.paddingLeft === void 0 || Is$7.boolean(candidate.paddingLeft)) && (candidate.paddingRight === void 0 || Is$7.boolean(candidate.paddingRight));
  }
  InlayHint2.is = is2;
})(InlayHint || (InlayHint = {}));
var WorkspaceFolder;
(function(WorkspaceFolder2) {
  function is2(value) {
    var candidate = value;
    return Is$7.objectLiteral(candidate) && URI.is(candidate.uri) && Is$7.string(candidate.name);
  }
  WorkspaceFolder2.is = is2;
})(WorkspaceFolder || (WorkspaceFolder = {}));
var EOL = ["\n", "\r\n", "\r"];
var TextDocument;
(function(TextDocument2) {
  function create(uri, languageId, version, content) {
    return new FullTextDocument(uri, languageId, version, content);
  }
  TextDocument2.create = create;
  function is2(value) {
    var candidate = value;
    return Is$7.defined(candidate) && Is$7.string(candidate.uri) && (Is$7.undefined(candidate.languageId) || Is$7.string(candidate.languageId)) && Is$7.uinteger(candidate.lineCount) && Is$7.func(candidate.getText) && Is$7.func(candidate.positionAt) && Is$7.func(candidate.offsetAt) ? true : false;
  }
  TextDocument2.is = is2;
  function applyEdits(document, edits) {
    var text = document.getText();
    var sortedEdits = mergeSort(edits, function(a, b) {
      var diff = a.range.start.line - b.range.start.line;
      if (diff === 0) {
        return a.range.start.character - b.range.start.character;
      }
      return diff;
    });
    var lastModifiedOffset = text.length;
    for (var i = sortedEdits.length - 1; i >= 0; i--) {
      var e = sortedEdits[i];
      var startOffset = document.offsetAt(e.range.start);
      var endOffset = document.offsetAt(e.range.end);
      if (endOffset <= lastModifiedOffset) {
        text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
      } else {
        throw new Error("Overlapping edit");
      }
      lastModifiedOffset = startOffset;
    }
    return text;
  }
  TextDocument2.applyEdits = applyEdits;
  function mergeSort(data, compare) {
    if (data.length <= 1) {
      return data;
    }
    var p = data.length / 2 | 0;
    var left = data.slice(0, p);
    var right = data.slice(p);
    mergeSort(left, compare);
    mergeSort(right, compare);
    var leftIdx = 0;
    var rightIdx = 0;
    var i = 0;
    while (leftIdx < left.length && rightIdx < right.length) {
      var ret = compare(left[leftIdx], right[rightIdx]);
      if (ret <= 0) {
        data[i++] = left[leftIdx++];
      } else {
        data[i++] = right[rightIdx++];
      }
    }
    while (leftIdx < left.length) {
      data[i++] = left[leftIdx++];
    }
    while (rightIdx < right.length) {
      data[i++] = right[rightIdx++];
    }
    return data;
  }
})(TextDocument || (TextDocument = {}));
var FullTextDocument = (
  /** @class */
  function() {
    function FullTextDocument2(uri, languageId, version, content) {
      this._uri = uri;
      this._languageId = languageId;
      this._version = version;
      this._content = content;
      this._lineOffsets = void 0;
    }
    Object.defineProperty(FullTextDocument2.prototype, "uri", {
      get: function() {
        return this._uri;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(FullTextDocument2.prototype, "languageId", {
      get: function() {
        return this._languageId;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(FullTextDocument2.prototype, "version", {
      get: function() {
        return this._version;
      },
      enumerable: false,
      configurable: true
    });
    FullTextDocument2.prototype.getText = function(range2) {
      if (range2) {
        var start = this.offsetAt(range2.start);
        var end = this.offsetAt(range2.end);
        return this._content.substring(start, end);
      }
      return this._content;
    };
    FullTextDocument2.prototype.update = function(event, version) {
      this._content = event.text;
      this._version = version;
      this._lineOffsets = void 0;
    };
    FullTextDocument2.prototype.getLineOffsets = function() {
      if (this._lineOffsets === void 0) {
        var lineOffsets = [];
        var text = this._content;
        var isLineStart = true;
        for (var i = 0; i < text.length; i++) {
          if (isLineStart) {
            lineOffsets.push(i);
            isLineStart = false;
          }
          var ch = text.charAt(i);
          isLineStart = ch === "\r" || ch === "\n";
          if (ch === "\r" && i + 1 < text.length && text.charAt(i + 1) === "\n") {
            i++;
          }
        }
        if (isLineStart && text.length > 0) {
          lineOffsets.push(text.length);
        }
        this._lineOffsets = lineOffsets;
      }
      return this._lineOffsets;
    };
    FullTextDocument2.prototype.positionAt = function(offset) {
      offset = Math.max(Math.min(offset, this._content.length), 0);
      var lineOffsets = this.getLineOffsets();
      var low = 0, high = lineOffsets.length;
      if (high === 0) {
        return Position.create(0, offset);
      }
      while (low < high) {
        var mid = Math.floor((low + high) / 2);
        if (lineOffsets[mid] > offset) {
          high = mid;
        } else {
          low = mid + 1;
        }
      }
      var line = low - 1;
      return Position.create(line, offset - lineOffsets[line]);
    };
    FullTextDocument2.prototype.offsetAt = function(position) {
      var lineOffsets = this.getLineOffsets();
      if (position.line >= lineOffsets.length) {
        return this._content.length;
      } else if (position.line < 0) {
        return 0;
      }
      var lineOffset = lineOffsets[position.line];
      var nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
      return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
    };
    Object.defineProperty(FullTextDocument2.prototype, "lineCount", {
      get: function() {
        return this.getLineOffsets().length;
      },
      enumerable: false,
      configurable: true
    });
    return FullTextDocument2;
  }()
);
var Is$7;
(function(Is2) {
  var toString = Object.prototype.toString;
  function defined(value) {
    return typeof value !== "undefined";
  }
  Is2.defined = defined;
  function undefined$1(value) {
    return typeof value === "undefined";
  }
  Is2.undefined = undefined$1;
  function boolean2(value) {
    return value === true || value === false;
  }
  Is2.boolean = boolean2;
  function string2(value) {
    return toString.call(value) === "[object String]";
  }
  Is2.string = string2;
  function number2(value) {
    return toString.call(value) === "[object Number]";
  }
  Is2.number = number2;
  function numberRange(value, min, max) {
    return toString.call(value) === "[object Number]" && min <= value && value <= max;
  }
  Is2.numberRange = numberRange;
  function integer2(value) {
    return toString.call(value) === "[object Number]" && -2147483648 <= value && value <= 2147483647;
  }
  Is2.integer = integer2;
  function uinteger2(value) {
    return toString.call(value) === "[object Number]" && 0 <= value && value <= 2147483647;
  }
  Is2.uinteger = uinteger2;
  function func2(value) {
    return toString.call(value) === "[object Function]";
  }
  Is2.func = func2;
  function objectLiteral2(value) {
    return value !== null && typeof value === "object";
  }
  Is2.objectLiteral = objectLiteral2;
  function typedArray2(value, check) {
    return Array.isArray(value) && value.every(check);
  }
  Is2.typedArray = typedArray2;
})(Is$7 || (Is$7 = {}));
const main$4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get AnnotatedTextEdit() {
    return AnnotatedTextEdit;
  },
  get ChangeAnnotation() {
    return ChangeAnnotation;
  },
  get ChangeAnnotationIdentifier() {
    return ChangeAnnotationIdentifier;
  },
  get CodeAction() {
    return CodeAction;
  },
  get CodeActionContext() {
    return CodeActionContext;
  },
  get CodeActionKind() {
    return CodeActionKind;
  },
  get CodeActionTriggerKind() {
    return CodeActionTriggerKind;
  },
  get CodeDescription() {
    return CodeDescription;
  },
  get CodeLens() {
    return CodeLens;
  },
  get Color() {
    return Color;
  },
  get ColorInformation() {
    return ColorInformation;
  },
  get ColorPresentation() {
    return ColorPresentation;
  },
  get Command() {
    return Command;
  },
  get CompletionItem() {
    return CompletionItem;
  },
  get CompletionItemKind() {
    return CompletionItemKind;
  },
  get CompletionItemLabelDetails() {
    return CompletionItemLabelDetails;
  },
  get CompletionItemTag() {
    return CompletionItemTag;
  },
  get CompletionList() {
    return CompletionList;
  },
  get CreateFile() {
    return CreateFile;
  },
  get DeleteFile() {
    return DeleteFile;
  },
  get Diagnostic() {
    return Diagnostic;
  },
  get DiagnosticRelatedInformation() {
    return DiagnosticRelatedInformation;
  },
  get DiagnosticSeverity() {
    return DiagnosticSeverity;
  },
  get DiagnosticTag() {
    return DiagnosticTag;
  },
  get DocumentHighlight() {
    return DocumentHighlight;
  },
  get DocumentHighlightKind() {
    return DocumentHighlightKind;
  },
  get DocumentLink() {
    return DocumentLink;
  },
  get DocumentSymbol() {
    return DocumentSymbol;
  },
  get DocumentUri() {
    return DocumentUri;
  },
  EOL,
  get FoldingRange() {
    return FoldingRange;
  },
  get FoldingRangeKind() {
    return FoldingRangeKind;
  },
  get FormattingOptions() {
    return FormattingOptions;
  },
  get Hover() {
    return Hover;
  },
  get InlayHint() {
    return InlayHint;
  },
  get InlayHintKind() {
    return InlayHintKind;
  },
  get InlayHintLabelPart() {
    return InlayHintLabelPart;
  },
  get InlineValueContext() {
    return InlineValueContext;
  },
  get InlineValueEvaluatableExpression() {
    return InlineValueEvaluatableExpression;
  },
  get InlineValueText() {
    return InlineValueText;
  },
  get InlineValueVariableLookup() {
    return InlineValueVariableLookup;
  },
  get InsertReplaceEdit() {
    return InsertReplaceEdit;
  },
  get InsertTextFormat() {
    return InsertTextFormat;
  },
  get InsertTextMode() {
    return InsertTextMode;
  },
  get Location() {
    return Location;
  },
  get LocationLink() {
    return LocationLink;
  },
  get MarkedString() {
    return MarkedString;
  },
  get MarkupContent() {
    return MarkupContent;
  },
  get MarkupKind() {
    return MarkupKind;
  },
  get OptionalVersionedTextDocumentIdentifier() {
    return OptionalVersionedTextDocumentIdentifier;
  },
  get ParameterInformation() {
    return ParameterInformation;
  },
  get Position() {
    return Position;
  },
  get Range() {
    return Range;
  },
  get RenameFile() {
    return RenameFile;
  },
  get SelectionRange() {
    return SelectionRange;
  },
  get SemanticTokenModifiers() {
    return SemanticTokenModifiers;
  },
  get SemanticTokenTypes() {
    return SemanticTokenTypes;
  },
  get SemanticTokens() {
    return SemanticTokens;
  },
  get SignatureInformation() {
    return SignatureInformation;
  },
  get SymbolInformation() {
    return SymbolInformation;
  },
  get SymbolKind() {
    return SymbolKind;
  },
  get SymbolTag() {
    return SymbolTag;
  },
  get TextDocument() {
    return TextDocument;
  },
  get TextDocumentEdit() {
    return TextDocumentEdit;
  },
  get TextDocumentIdentifier() {
    return TextDocumentIdentifier;
  },
  get TextDocumentItem() {
    return TextDocumentItem;
  },
  get TextEdit() {
    return TextEdit;
  },
  get URI() {
    return URI;
  },
  get VersionedTextDocumentIdentifier() {
    return VersionedTextDocumentIdentifier;
  },
  WorkspaceChange,
  get WorkspaceEdit() {
    return WorkspaceEdit;
  },
  get WorkspaceFolder() {
    return WorkspaceFolder;
  },
  get WorkspaceSymbol() {
    return WorkspaceSymbol$1;
  },
  get integer() {
    return integer;
  },
  get uinteger() {
    return uinteger;
  }
}, Symbol.toStringTag, { value: "Module" }));
const require$$1$6 = /* @__PURE__ */ getAugmentedNamespace(main$4);
var messages$2 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.ProtocolNotificationType = exports2.ProtocolNotificationType0 = exports2.ProtocolRequestType = exports2.ProtocolRequestType0 = exports2.RegistrationType = exports2.MessageDirection = void 0;
  const vscode_jsonrpc_12 = require$$0$7;
  (function(MessageDirection) {
    MessageDirection["clientToServer"] = "clientToServer";
    MessageDirection["serverToClient"] = "serverToClient";
    MessageDirection["both"] = "both";
  })(exports2.MessageDirection || (exports2.MessageDirection = {}));
  class RegistrationType {
    constructor(method) {
      this.method = method;
    }
  }
  exports2.RegistrationType = RegistrationType;
  class ProtocolRequestType0 extends vscode_jsonrpc_12.RequestType0 {
    constructor(method) {
      super(method);
    }
  }
  exports2.ProtocolRequestType0 = ProtocolRequestType0;
  class ProtocolRequestType extends vscode_jsonrpc_12.RequestType {
    constructor(method) {
      super(method, vscode_jsonrpc_12.ParameterStructures.byName);
    }
  }
  exports2.ProtocolRequestType = ProtocolRequestType;
  class ProtocolNotificationType0 extends vscode_jsonrpc_12.NotificationType0 {
    constructor(method) {
      super(method);
    }
  }
  exports2.ProtocolNotificationType0 = ProtocolNotificationType0;
  class ProtocolNotificationType extends vscode_jsonrpc_12.NotificationType {
    constructor(method) {
      super(method, vscode_jsonrpc_12.ParameterStructures.byName);
    }
  }
  exports2.ProtocolNotificationType = ProtocolNotificationType;
})(messages$2);
const messages = /* @__PURE__ */ getDefaultExportFromCjs(messages$2);
const messages$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: messages
}, [messages$2]);
const require$$2$4 = /* @__PURE__ */ getAugmentedNamespace(messages$1);
var protocol$2 = {};
var is$3 = {};
Object.defineProperty(is$3, "__esModule", { value: true });
var objectLiteral_1 = is$3.objectLiteral = typedArray_1$1 = is$3.typedArray = stringArray_1$1 = is$3.stringArray = array_1$1 = is$3.array = func_1$1 = is$3.func = error_1$1 = is$3.error = number_1$1 = is$3.number = string_1$1 = is$3.string = boolean_1$1 = is$3.boolean = void 0;
function boolean$1(value) {
  return value === true || value === false;
}
var boolean_1$1 = is$3.boolean = boolean$1;
function string$2(value) {
  return typeof value === "string" || value instanceof String;
}
var string_1$1 = is$3.string = string$2;
function number$1(value) {
  return typeof value === "number" || value instanceof Number;
}
var number_1$1 = is$3.number = number$1;
function error$1(value) {
  return value instanceof Error;
}
var error_1$1 = is$3.error = error$1;
function func$1(value) {
  return typeof value === "function";
}
var func_1$1 = is$3.func = func$1;
function array$1(value) {
  return Array.isArray(value);
}
var array_1$1 = is$3.array = array$1;
function stringArray$1(value) {
  return array$1(value) && value.every((elem) => string$2(elem));
}
var stringArray_1$1 = is$3.stringArray = stringArray$1;
function typedArray$1(value, check) {
  return Array.isArray(value) && value.every(check);
}
var typedArray_1$1 = is$3.typedArray = typedArray$1;
function objectLiteral(value) {
  return value !== null && typeof value === "object";
}
objectLiteral_1 = is$3.objectLiteral = objectLiteral;
const is$2 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get array() {
    return array_1$1;
  },
  get boolean() {
    return boolean_1$1;
  },
  default: is$3,
  get error() {
    return error_1$1;
  },
  get func() {
    return func_1$1;
  },
  get number() {
    return number_1$1;
  },
  get objectLiteral() {
    return objectLiteral_1;
  },
  get string() {
    return string_1$1;
  },
  get stringArray() {
    return stringArray_1$1;
  },
  get typedArray() {
    return typedArray_1$1;
  }
}, [is$3]);
const require$$2$3 = /* @__PURE__ */ getAugmentedNamespace(is$2);
var protocol_implementation$2 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.ImplementationRequest = void 0;
  const messages_1 = require$$2$4;
  (function(ImplementationRequest) {
    ImplementationRequest.method = "textDocument/implementation";
    ImplementationRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    ImplementationRequest.type = new messages_1.ProtocolRequestType(ImplementationRequest.method);
  })(exports2.ImplementationRequest || (exports2.ImplementationRequest = {}));
})(protocol_implementation$2);
const protocol_implementation = /* @__PURE__ */ getDefaultExportFromCjs(protocol_implementation$2);
const protocol_implementation$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protocol_implementation
}, [protocol_implementation$2]);
const require$$3$3 = /* @__PURE__ */ getAugmentedNamespace(protocol_implementation$1);
var protocol_typeDefinition$2 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.TypeDefinitionRequest = void 0;
  const messages_1 = require$$2$4;
  (function(TypeDefinitionRequest) {
    TypeDefinitionRequest.method = "textDocument/typeDefinition";
    TypeDefinitionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    TypeDefinitionRequest.type = new messages_1.ProtocolRequestType(TypeDefinitionRequest.method);
  })(exports2.TypeDefinitionRequest || (exports2.TypeDefinitionRequest = {}));
})(protocol_typeDefinition$2);
const protocol_typeDefinition = /* @__PURE__ */ getDefaultExportFromCjs(protocol_typeDefinition$2);
const protocol_typeDefinition$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protocol_typeDefinition
}, [protocol_typeDefinition$2]);
const require$$4$3 = /* @__PURE__ */ getAugmentedNamespace(protocol_typeDefinition$1);
var protocol_workspaceFolder$2 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.DidChangeWorkspaceFoldersNotification = exports2.WorkspaceFoldersRequest = void 0;
  const messages_1 = require$$2$4;
  (function(WorkspaceFoldersRequest) {
    WorkspaceFoldersRequest.method = "workspace/workspaceFolders";
    WorkspaceFoldersRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    WorkspaceFoldersRequest.type = new messages_1.ProtocolRequestType0(WorkspaceFoldersRequest.method);
  })(exports2.WorkspaceFoldersRequest || (exports2.WorkspaceFoldersRequest = {}));
  (function(DidChangeWorkspaceFoldersNotification) {
    DidChangeWorkspaceFoldersNotification.method = "workspace/didChangeWorkspaceFolders";
    DidChangeWorkspaceFoldersNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidChangeWorkspaceFoldersNotification.type = new messages_1.ProtocolNotificationType(DidChangeWorkspaceFoldersNotification.method);
  })(exports2.DidChangeWorkspaceFoldersNotification || (exports2.DidChangeWorkspaceFoldersNotification = {}));
})(protocol_workspaceFolder$2);
const protocol_workspaceFolder = /* @__PURE__ */ getDefaultExportFromCjs(protocol_workspaceFolder$2);
const protocol_workspaceFolder$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protocol_workspaceFolder
}, [protocol_workspaceFolder$2]);
const require$$5$2 = /* @__PURE__ */ getAugmentedNamespace(protocol_workspaceFolder$1);
var protocol_configuration$2 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.ConfigurationRequest = void 0;
  const messages_1 = require$$2$4;
  (function(ConfigurationRequest) {
    ConfigurationRequest.method = "workspace/configuration";
    ConfigurationRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    ConfigurationRequest.type = new messages_1.ProtocolRequestType(ConfigurationRequest.method);
  })(exports2.ConfigurationRequest || (exports2.ConfigurationRequest = {}));
})(protocol_configuration$2);
const protocol_configuration = /* @__PURE__ */ getDefaultExportFromCjs(protocol_configuration$2);
const protocol_configuration$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protocol_configuration
}, [protocol_configuration$2]);
const require$$6$2 = /* @__PURE__ */ getAugmentedNamespace(protocol_configuration$1);
var protocol_colorProvider$2 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.ColorPresentationRequest = exports2.DocumentColorRequest = void 0;
  const messages_1 = require$$2$4;
  (function(DocumentColorRequest) {
    DocumentColorRequest.method = "textDocument/documentColor";
    DocumentColorRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentColorRequest.type = new messages_1.ProtocolRequestType(DocumentColorRequest.method);
  })(exports2.DocumentColorRequest || (exports2.DocumentColorRequest = {}));
  (function(ColorPresentationRequest) {
    ColorPresentationRequest.method = "textDocument/colorPresentation";
    ColorPresentationRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    ColorPresentationRequest.type = new messages_1.ProtocolRequestType(ColorPresentationRequest.method);
  })(exports2.ColorPresentationRequest || (exports2.ColorPresentationRequest = {}));
})(protocol_colorProvider$2);
const protocol_colorProvider = /* @__PURE__ */ getDefaultExportFromCjs(protocol_colorProvider$2);
const protocol_colorProvider$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protocol_colorProvider
}, [protocol_colorProvider$2]);
const require$$7$2 = /* @__PURE__ */ getAugmentedNamespace(protocol_colorProvider$1);
var protocol_foldingRange$2 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.FoldingRangeRequest = void 0;
  const messages_1 = require$$2$4;
  (function(FoldingRangeRequest) {
    FoldingRangeRequest.method = "textDocument/foldingRange";
    FoldingRangeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    FoldingRangeRequest.type = new messages_1.ProtocolRequestType(FoldingRangeRequest.method);
  })(exports2.FoldingRangeRequest || (exports2.FoldingRangeRequest = {}));
})(protocol_foldingRange$2);
const protocol_foldingRange = /* @__PURE__ */ getDefaultExportFromCjs(protocol_foldingRange$2);
const protocol_foldingRange$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protocol_foldingRange
}, [protocol_foldingRange$2]);
const require$$8$1 = /* @__PURE__ */ getAugmentedNamespace(protocol_foldingRange$1);
var protocol_declaration$2 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.DeclarationRequest = void 0;
  const messages_1 = require$$2$4;
  (function(DeclarationRequest) {
    DeclarationRequest.method = "textDocument/declaration";
    DeclarationRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DeclarationRequest.type = new messages_1.ProtocolRequestType(DeclarationRequest.method);
  })(exports2.DeclarationRequest || (exports2.DeclarationRequest = {}));
})(protocol_declaration$2);
const protocol_declaration = /* @__PURE__ */ getDefaultExportFromCjs(protocol_declaration$2);
const protocol_declaration$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protocol_declaration
}, [protocol_declaration$2]);
const require$$9$1 = /* @__PURE__ */ getAugmentedNamespace(protocol_declaration$1);
var protocol_selectionRange$2 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.SelectionRangeRequest = void 0;
  const messages_1 = require$$2$4;
  (function(SelectionRangeRequest) {
    SelectionRangeRequest.method = "textDocument/selectionRange";
    SelectionRangeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    SelectionRangeRequest.type = new messages_1.ProtocolRequestType(SelectionRangeRequest.method);
  })(exports2.SelectionRangeRequest || (exports2.SelectionRangeRequest = {}));
})(protocol_selectionRange$2);
const protocol_selectionRange = /* @__PURE__ */ getDefaultExportFromCjs(protocol_selectionRange$2);
const protocol_selectionRange$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protocol_selectionRange
}, [protocol_selectionRange$2]);
const require$$10$2 = /* @__PURE__ */ getAugmentedNamespace(protocol_selectionRange$1);
var protocol_progress$2 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.WorkDoneProgressCancelNotification = exports2.WorkDoneProgressCreateRequest = exports2.WorkDoneProgress = void 0;
  const vscode_jsonrpc_12 = require$$0$7;
  const messages_1 = require$$2$4;
  (function(WorkDoneProgress) {
    WorkDoneProgress.type = new vscode_jsonrpc_12.ProgressType();
    function is2(value) {
      return value === WorkDoneProgress.type;
    }
    WorkDoneProgress.is = is2;
  })(exports2.WorkDoneProgress || (exports2.WorkDoneProgress = {}));
  (function(WorkDoneProgressCreateRequest) {
    WorkDoneProgressCreateRequest.method = "window/workDoneProgress/create";
    WorkDoneProgressCreateRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    WorkDoneProgressCreateRequest.type = new messages_1.ProtocolRequestType(WorkDoneProgressCreateRequest.method);
  })(exports2.WorkDoneProgressCreateRequest || (exports2.WorkDoneProgressCreateRequest = {}));
  (function(WorkDoneProgressCancelNotification) {
    WorkDoneProgressCancelNotification.method = "window/workDoneProgress/cancel";
    WorkDoneProgressCancelNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    WorkDoneProgressCancelNotification.type = new messages_1.ProtocolNotificationType(WorkDoneProgressCancelNotification.method);
  })(exports2.WorkDoneProgressCancelNotification || (exports2.WorkDoneProgressCancelNotification = {}));
})(protocol_progress$2);
const protocol_progress = /* @__PURE__ */ getDefaultExportFromCjs(protocol_progress$2);
const protocol_progress$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protocol_progress
}, [protocol_progress$2]);
const require$$11$2 = /* @__PURE__ */ getAugmentedNamespace(protocol_progress$1);
var protocol_callHierarchy$2 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.CallHierarchyOutgoingCallsRequest = exports2.CallHierarchyIncomingCallsRequest = exports2.CallHierarchyPrepareRequest = void 0;
  const messages_1 = require$$2$4;
  (function(CallHierarchyPrepareRequest) {
    CallHierarchyPrepareRequest.method = "textDocument/prepareCallHierarchy";
    CallHierarchyPrepareRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CallHierarchyPrepareRequest.type = new messages_1.ProtocolRequestType(CallHierarchyPrepareRequest.method);
  })(exports2.CallHierarchyPrepareRequest || (exports2.CallHierarchyPrepareRequest = {}));
  (function(CallHierarchyIncomingCallsRequest) {
    CallHierarchyIncomingCallsRequest.method = "callHierarchy/incomingCalls";
    CallHierarchyIncomingCallsRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CallHierarchyIncomingCallsRequest.type = new messages_1.ProtocolRequestType(CallHierarchyIncomingCallsRequest.method);
  })(exports2.CallHierarchyIncomingCallsRequest || (exports2.CallHierarchyIncomingCallsRequest = {}));
  (function(CallHierarchyOutgoingCallsRequest) {
    CallHierarchyOutgoingCallsRequest.method = "callHierarchy/outgoingCalls";
    CallHierarchyOutgoingCallsRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CallHierarchyOutgoingCallsRequest.type = new messages_1.ProtocolRequestType(CallHierarchyOutgoingCallsRequest.method);
  })(exports2.CallHierarchyOutgoingCallsRequest || (exports2.CallHierarchyOutgoingCallsRequest = {}));
})(protocol_callHierarchy$2);
const protocol_callHierarchy = /* @__PURE__ */ getDefaultExportFromCjs(protocol_callHierarchy$2);
const protocol_callHierarchy$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protocol_callHierarchy
}, [protocol_callHierarchy$2]);
const require$$12$2 = /* @__PURE__ */ getAugmentedNamespace(protocol_callHierarchy$1);
var protocol_semanticTokens$2 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.SemanticTokensRefreshRequest = exports2.SemanticTokensRangeRequest = exports2.SemanticTokensDeltaRequest = exports2.SemanticTokensRequest = exports2.SemanticTokensRegistrationType = exports2.TokenFormat = void 0;
  const messages_1 = require$$2$4;
  (function(TokenFormat) {
    TokenFormat.Relative = "relative";
  })(exports2.TokenFormat || (exports2.TokenFormat = {}));
  var SemanticTokensRegistrationType;
  (function(SemanticTokensRegistrationType2) {
    SemanticTokensRegistrationType2.method = "textDocument/semanticTokens";
    SemanticTokensRegistrationType2.type = new messages_1.RegistrationType(SemanticTokensRegistrationType2.method);
  })(SemanticTokensRegistrationType = exports2.SemanticTokensRegistrationType || (exports2.SemanticTokensRegistrationType = {}));
  (function(SemanticTokensRequest) {
    SemanticTokensRequest.method = "textDocument/semanticTokens/full";
    SemanticTokensRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    SemanticTokensRequest.type = new messages_1.ProtocolRequestType(SemanticTokensRequest.method);
    SemanticTokensRequest.registrationMethod = SemanticTokensRegistrationType.method;
  })(exports2.SemanticTokensRequest || (exports2.SemanticTokensRequest = {}));
  (function(SemanticTokensDeltaRequest) {
    SemanticTokensDeltaRequest.method = "textDocument/semanticTokens/full/delta";
    SemanticTokensDeltaRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    SemanticTokensDeltaRequest.type = new messages_1.ProtocolRequestType(SemanticTokensDeltaRequest.method);
    SemanticTokensDeltaRequest.registrationMethod = SemanticTokensRegistrationType.method;
  })(exports2.SemanticTokensDeltaRequest || (exports2.SemanticTokensDeltaRequest = {}));
  (function(SemanticTokensRangeRequest) {
    SemanticTokensRangeRequest.method = "textDocument/semanticTokens/range";
    SemanticTokensRangeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    SemanticTokensRangeRequest.type = new messages_1.ProtocolRequestType(SemanticTokensRangeRequest.method);
    SemanticTokensRangeRequest.registrationMethod = SemanticTokensRegistrationType.method;
  })(exports2.SemanticTokensRangeRequest || (exports2.SemanticTokensRangeRequest = {}));
  (function(SemanticTokensRefreshRequest) {
    SemanticTokensRefreshRequest.method = `workspace/semanticTokens/refresh`;
    SemanticTokensRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    SemanticTokensRefreshRequest.type = new messages_1.ProtocolRequestType0(SemanticTokensRefreshRequest.method);
  })(exports2.SemanticTokensRefreshRequest || (exports2.SemanticTokensRefreshRequest = {}));
})(protocol_semanticTokens$2);
const protocol_semanticTokens = /* @__PURE__ */ getDefaultExportFromCjs(protocol_semanticTokens$2);
const protocol_semanticTokens$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protocol_semanticTokens
}, [protocol_semanticTokens$2]);
const require$$13$1 = /* @__PURE__ */ getAugmentedNamespace(protocol_semanticTokens$1);
var protocol_showDocument$2 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.ShowDocumentRequest = void 0;
  const messages_1 = require$$2$4;
  (function(ShowDocumentRequest) {
    ShowDocumentRequest.method = "window/showDocument";
    ShowDocumentRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    ShowDocumentRequest.type = new messages_1.ProtocolRequestType(ShowDocumentRequest.method);
  })(exports2.ShowDocumentRequest || (exports2.ShowDocumentRequest = {}));
})(protocol_showDocument$2);
const protocol_showDocument = /* @__PURE__ */ getDefaultExportFromCjs(protocol_showDocument$2);
const protocol_showDocument$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protocol_showDocument
}, [protocol_showDocument$2]);
const require$$14$1 = /* @__PURE__ */ getAugmentedNamespace(protocol_showDocument$1);
var protocol_linkedEditingRange$2 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.LinkedEditingRangeRequest = void 0;
  const messages_1 = require$$2$4;
  (function(LinkedEditingRangeRequest) {
    LinkedEditingRangeRequest.method = "textDocument/linkedEditingRange";
    LinkedEditingRangeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    LinkedEditingRangeRequest.type = new messages_1.ProtocolRequestType(LinkedEditingRangeRequest.method);
  })(exports2.LinkedEditingRangeRequest || (exports2.LinkedEditingRangeRequest = {}));
})(protocol_linkedEditingRange$2);
const protocol_linkedEditingRange = /* @__PURE__ */ getDefaultExportFromCjs(protocol_linkedEditingRange$2);
const protocol_linkedEditingRange$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protocol_linkedEditingRange
}, [protocol_linkedEditingRange$2]);
const require$$15$1 = /* @__PURE__ */ getAugmentedNamespace(protocol_linkedEditingRange$1);
var protocol_fileOperations$2 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.WillDeleteFilesRequest = exports2.DidDeleteFilesNotification = exports2.DidRenameFilesNotification = exports2.WillRenameFilesRequest = exports2.DidCreateFilesNotification = exports2.WillCreateFilesRequest = exports2.FileOperationPatternKind = void 0;
  const messages_1 = require$$2$4;
  (function(FileOperationPatternKind) {
    FileOperationPatternKind.file = "file";
    FileOperationPatternKind.folder = "folder";
  })(exports2.FileOperationPatternKind || (exports2.FileOperationPatternKind = {}));
  (function(WillCreateFilesRequest) {
    WillCreateFilesRequest.method = "workspace/willCreateFiles";
    WillCreateFilesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    WillCreateFilesRequest.type = new messages_1.ProtocolRequestType(WillCreateFilesRequest.method);
  })(exports2.WillCreateFilesRequest || (exports2.WillCreateFilesRequest = {}));
  (function(DidCreateFilesNotification) {
    DidCreateFilesNotification.method = "workspace/didCreateFiles";
    DidCreateFilesNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidCreateFilesNotification.type = new messages_1.ProtocolNotificationType(DidCreateFilesNotification.method);
  })(exports2.DidCreateFilesNotification || (exports2.DidCreateFilesNotification = {}));
  (function(WillRenameFilesRequest) {
    WillRenameFilesRequest.method = "workspace/willRenameFiles";
    WillRenameFilesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    WillRenameFilesRequest.type = new messages_1.ProtocolRequestType(WillRenameFilesRequest.method);
  })(exports2.WillRenameFilesRequest || (exports2.WillRenameFilesRequest = {}));
  (function(DidRenameFilesNotification) {
    DidRenameFilesNotification.method = "workspace/didRenameFiles";
    DidRenameFilesNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidRenameFilesNotification.type = new messages_1.ProtocolNotificationType(DidRenameFilesNotification.method);
  })(exports2.DidRenameFilesNotification || (exports2.DidRenameFilesNotification = {}));
  (function(DidDeleteFilesNotification) {
    DidDeleteFilesNotification.method = "workspace/didDeleteFiles";
    DidDeleteFilesNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidDeleteFilesNotification.type = new messages_1.ProtocolNotificationType(DidDeleteFilesNotification.method);
  })(exports2.DidDeleteFilesNotification || (exports2.DidDeleteFilesNotification = {}));
  (function(WillDeleteFilesRequest) {
    WillDeleteFilesRequest.method = "workspace/willDeleteFiles";
    WillDeleteFilesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    WillDeleteFilesRequest.type = new messages_1.ProtocolRequestType(WillDeleteFilesRequest.method);
  })(exports2.WillDeleteFilesRequest || (exports2.WillDeleteFilesRequest = {}));
})(protocol_fileOperations$2);
const protocol_fileOperations = /* @__PURE__ */ getDefaultExportFromCjs(protocol_fileOperations$2);
const protocol_fileOperations$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protocol_fileOperations
}, [protocol_fileOperations$2]);
const require$$16$1 = /* @__PURE__ */ getAugmentedNamespace(protocol_fileOperations$1);
var protocol_moniker$2 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.MonikerRequest = exports2.MonikerKind = exports2.UniquenessLevel = void 0;
  const messages_1 = require$$2$4;
  (function(UniquenessLevel) {
    UniquenessLevel.document = "document";
    UniquenessLevel.project = "project";
    UniquenessLevel.group = "group";
    UniquenessLevel.scheme = "scheme";
    UniquenessLevel.global = "global";
  })(exports2.UniquenessLevel || (exports2.UniquenessLevel = {}));
  (function(MonikerKind) {
    MonikerKind.$import = "import";
    MonikerKind.$export = "export";
    MonikerKind.local = "local";
  })(exports2.MonikerKind || (exports2.MonikerKind = {}));
  (function(MonikerRequest) {
    MonikerRequest.method = "textDocument/moniker";
    MonikerRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    MonikerRequest.type = new messages_1.ProtocolRequestType(MonikerRequest.method);
  })(exports2.MonikerRequest || (exports2.MonikerRequest = {}));
})(protocol_moniker$2);
const protocol_moniker = /* @__PURE__ */ getDefaultExportFromCjs(protocol_moniker$2);
const protocol_moniker$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protocol_moniker
}, [protocol_moniker$2]);
const require$$17$1 = /* @__PURE__ */ getAugmentedNamespace(protocol_moniker$1);
var protocol_typeHierarchy$2 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.TypeHierarchySubtypesRequest = exports2.TypeHierarchySupertypesRequest = exports2.TypeHierarchyPrepareRequest = void 0;
  const messages_1 = require$$2$4;
  (function(TypeHierarchyPrepareRequest) {
    TypeHierarchyPrepareRequest.method = "textDocument/prepareTypeHierarchy";
    TypeHierarchyPrepareRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    TypeHierarchyPrepareRequest.type = new messages_1.ProtocolRequestType(TypeHierarchyPrepareRequest.method);
  })(exports2.TypeHierarchyPrepareRequest || (exports2.TypeHierarchyPrepareRequest = {}));
  (function(TypeHierarchySupertypesRequest) {
    TypeHierarchySupertypesRequest.method = "typeHierarchy/supertypes";
    TypeHierarchySupertypesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    TypeHierarchySupertypesRequest.type = new messages_1.ProtocolRequestType(TypeHierarchySupertypesRequest.method);
  })(exports2.TypeHierarchySupertypesRequest || (exports2.TypeHierarchySupertypesRequest = {}));
  (function(TypeHierarchySubtypesRequest) {
    TypeHierarchySubtypesRequest.method = "typeHierarchy/subtypes";
    TypeHierarchySubtypesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    TypeHierarchySubtypesRequest.type = new messages_1.ProtocolRequestType(TypeHierarchySubtypesRequest.method);
  })(exports2.TypeHierarchySubtypesRequest || (exports2.TypeHierarchySubtypesRequest = {}));
})(protocol_typeHierarchy$2);
const protocol_typeHierarchy = /* @__PURE__ */ getDefaultExportFromCjs(protocol_typeHierarchy$2);
const protocol_typeHierarchy$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protocol_typeHierarchy
}, [protocol_typeHierarchy$2]);
const require$$18$1 = /* @__PURE__ */ getAugmentedNamespace(protocol_typeHierarchy$1);
var protocol_inlineValue$2 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.InlineValueRefreshRequest = exports2.InlineValueRequest = void 0;
  const messages_1 = require$$2$4;
  (function(InlineValueRequest) {
    InlineValueRequest.method = "textDocument/inlineValue";
    InlineValueRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    InlineValueRequest.type = new messages_1.ProtocolRequestType(InlineValueRequest.method);
  })(exports2.InlineValueRequest || (exports2.InlineValueRequest = {}));
  (function(InlineValueRefreshRequest) {
    InlineValueRefreshRequest.method = `workspace/inlineValue/refresh`;
    InlineValueRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    InlineValueRefreshRequest.type = new messages_1.ProtocolRequestType0(InlineValueRefreshRequest.method);
  })(exports2.InlineValueRefreshRequest || (exports2.InlineValueRefreshRequest = {}));
})(protocol_inlineValue$2);
const protocol_inlineValue = /* @__PURE__ */ getDefaultExportFromCjs(protocol_inlineValue$2);
const protocol_inlineValue$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protocol_inlineValue
}, [protocol_inlineValue$2]);
const require$$19$1 = /* @__PURE__ */ getAugmentedNamespace(protocol_inlineValue$1);
var protocol_inlayHint$2 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.InlayHintRefreshRequest = exports2.InlayHintResolveRequest = exports2.InlayHintRequest = void 0;
  const messages_1 = require$$2$4;
  (function(InlayHintRequest) {
    InlayHintRequest.method = "textDocument/inlayHint";
    InlayHintRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    InlayHintRequest.type = new messages_1.ProtocolRequestType(InlayHintRequest.method);
  })(exports2.InlayHintRequest || (exports2.InlayHintRequest = {}));
  (function(InlayHintResolveRequest) {
    InlayHintResolveRequest.method = "inlayHint/resolve";
    InlayHintResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    InlayHintResolveRequest.type = new messages_1.ProtocolRequestType(InlayHintResolveRequest.method);
  })(exports2.InlayHintResolveRequest || (exports2.InlayHintResolveRequest = {}));
  (function(InlayHintRefreshRequest) {
    InlayHintRefreshRequest.method = `workspace/inlayHint/refresh`;
    InlayHintRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    InlayHintRefreshRequest.type = new messages_1.ProtocolRequestType0(InlayHintRefreshRequest.method);
  })(exports2.InlayHintRefreshRequest || (exports2.InlayHintRefreshRequest = {}));
})(protocol_inlayHint$2);
const protocol_inlayHint = /* @__PURE__ */ getDefaultExportFromCjs(protocol_inlayHint$2);
const protocol_inlayHint$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protocol_inlayHint
}, [protocol_inlayHint$2]);
const require$$20$1 = /* @__PURE__ */ getAugmentedNamespace(protocol_inlayHint$1);
var protocol_diagnostic$2 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.DiagnosticRefreshRequest = exports2.WorkspaceDiagnosticRequest = exports2.DocumentDiagnosticRequest = exports2.DocumentDiagnosticReportKind = exports2.DiagnosticServerCancellationData = void 0;
  const vscode_jsonrpc_12 = require$$0$7;
  const Is2 = require$$2$3;
  const messages_1 = require$$2$4;
  (function(DiagnosticServerCancellationData) {
    function is2(value) {
      const candidate = value;
      return candidate && Is2.boolean(candidate.retriggerRequest);
    }
    DiagnosticServerCancellationData.is = is2;
  })(exports2.DiagnosticServerCancellationData || (exports2.DiagnosticServerCancellationData = {}));
  (function(DocumentDiagnosticReportKind) {
    DocumentDiagnosticReportKind.Full = "full";
    DocumentDiagnosticReportKind.Unchanged = "unchanged";
  })(exports2.DocumentDiagnosticReportKind || (exports2.DocumentDiagnosticReportKind = {}));
  (function(DocumentDiagnosticRequest) {
    DocumentDiagnosticRequest.method = "textDocument/diagnostic";
    DocumentDiagnosticRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentDiagnosticRequest.type = new messages_1.ProtocolRequestType(DocumentDiagnosticRequest.method);
    DocumentDiagnosticRequest.partialResult = new vscode_jsonrpc_12.ProgressType();
  })(exports2.DocumentDiagnosticRequest || (exports2.DocumentDiagnosticRequest = {}));
  (function(WorkspaceDiagnosticRequest) {
    WorkspaceDiagnosticRequest.method = "workspace/diagnostic";
    WorkspaceDiagnosticRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    WorkspaceDiagnosticRequest.type = new messages_1.ProtocolRequestType(WorkspaceDiagnosticRequest.method);
    WorkspaceDiagnosticRequest.partialResult = new vscode_jsonrpc_12.ProgressType();
  })(exports2.WorkspaceDiagnosticRequest || (exports2.WorkspaceDiagnosticRequest = {}));
  (function(DiagnosticRefreshRequest) {
    DiagnosticRefreshRequest.method = `workspace/diagnostic/refresh`;
    DiagnosticRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    DiagnosticRefreshRequest.type = new messages_1.ProtocolRequestType0(DiagnosticRefreshRequest.method);
  })(exports2.DiagnosticRefreshRequest || (exports2.DiagnosticRefreshRequest = {}));
})(protocol_diagnostic$2);
const protocol_diagnostic = /* @__PURE__ */ getDefaultExportFromCjs(protocol_diagnostic$2);
const protocol_diagnostic$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protocol_diagnostic
}, [protocol_diagnostic$2]);
const require$$21$1 = /* @__PURE__ */ getAugmentedNamespace(protocol_diagnostic$1);
var protocol_notebook$2 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.DidCloseNotebookDocumentNotification = exports2.DidSaveNotebookDocumentNotification = exports2.DidChangeNotebookDocumentNotification = exports2.NotebookCellArrayChange = exports2.DidOpenNotebookDocumentNotification = exports2.NotebookDocumentSyncRegistrationType = exports2.NotebookDocument = exports2.NotebookCell = exports2.ExecutionSummary = exports2.NotebookCellKind = void 0;
  const vscode_languageserver_types_1 = require$$1$6;
  const Is2 = require$$2$3;
  const messages_1 = require$$2$4;
  var NotebookCellKind;
  (function(NotebookCellKind2) {
    NotebookCellKind2.Markup = 1;
    NotebookCellKind2.Code = 2;
    function is2(value) {
      return value === 1 || value === 2;
    }
    NotebookCellKind2.is = is2;
  })(NotebookCellKind = exports2.NotebookCellKind || (exports2.NotebookCellKind = {}));
  var ExecutionSummary;
  (function(ExecutionSummary2) {
    function create(executionOrder, success) {
      const result = { executionOrder };
      if (success === true || success === false) {
        result.success = success;
      }
      return result;
    }
    ExecutionSummary2.create = create;
    function is2(value) {
      const candidate = value;
      return Is2.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.executionOrder) && (candidate.success === void 0 || Is2.boolean(candidate.success));
    }
    ExecutionSummary2.is = is2;
    function equals(one, other) {
      if (one === other) {
        return true;
      }
      if (one === null || one === void 0 || other === null || other === void 0) {
        return false;
      }
      return one.executionOrder === other.executionOrder && one.success === other.success;
    }
    ExecutionSummary2.equals = equals;
  })(ExecutionSummary = exports2.ExecutionSummary || (exports2.ExecutionSummary = {}));
  var NotebookCell;
  (function(NotebookCell2) {
    function create(kind, document) {
      return { kind, document };
    }
    NotebookCell2.create = create;
    function is2(value) {
      const candidate = value;
      return Is2.objectLiteral(candidate) && NotebookCellKind.is(candidate.kind) && vscode_languageserver_types_1.DocumentUri.is(candidate.document) && (candidate.metadata === void 0 || Is2.objectLiteral(candidate.metadata));
    }
    NotebookCell2.is = is2;
    function diff(one, two) {
      const result = /* @__PURE__ */ new Set();
      if (one.document !== two.document) {
        result.add("document");
      }
      if (one.kind !== two.kind) {
        result.add("kind");
      }
      if (one.executionSummary !== two.executionSummary) {
        result.add("executionSummary");
      }
      if ((one.metadata !== void 0 || two.metadata !== void 0) && !equalsMetadata(one.metadata, two.metadata)) {
        result.add("metadata");
      }
      if ((one.executionSummary !== void 0 || two.executionSummary !== void 0) && !ExecutionSummary.equals(one.executionSummary, two.executionSummary)) {
        result.add("executionSummary");
      }
      return result;
    }
    NotebookCell2.diff = diff;
    function equalsMetadata(one, other) {
      if (one === other) {
        return true;
      }
      if (one === null || one === void 0 || other === null || other === void 0) {
        return false;
      }
      if (typeof one !== typeof other) {
        return false;
      }
      if (typeof one !== "object") {
        return false;
      }
      const oneArray = Array.isArray(one);
      const otherArray = Array.isArray(other);
      if (oneArray !== otherArray) {
        return false;
      }
      if (oneArray && otherArray) {
        if (one.length !== other.length) {
          return false;
        }
        for (let i = 0; i < one.length; i++) {
          if (!equalsMetadata(one[i], other[i])) {
            return false;
          }
        }
      }
      if (Is2.objectLiteral(one) && Is2.objectLiteral(other)) {
        const oneKeys = Object.keys(one);
        const otherKeys = Object.keys(other);
        if (oneKeys.length !== otherKeys.length) {
          return false;
        }
        oneKeys.sort();
        otherKeys.sort();
        if (!equalsMetadata(oneKeys, otherKeys)) {
          return false;
        }
        for (let i = 0; i < oneKeys.length; i++) {
          const prop = oneKeys[i];
          if (!equalsMetadata(one[prop], other[prop])) {
            return false;
          }
        }
      }
      return true;
    }
  })(NotebookCell = exports2.NotebookCell || (exports2.NotebookCell = {}));
  (function(NotebookDocument) {
    function create(uri, notebookType, version, cells) {
      return { uri, notebookType, version, cells };
    }
    NotebookDocument.create = create;
    function is2(value) {
      const candidate = value;
      return Is2.objectLiteral(candidate) && Is2.string(candidate.uri) && vscode_languageserver_types_1.integer.is(candidate.version) && Is2.typedArray(candidate.cells, NotebookCell.is);
    }
    NotebookDocument.is = is2;
  })(exports2.NotebookDocument || (exports2.NotebookDocument = {}));
  var NotebookDocumentSyncRegistrationType;
  (function(NotebookDocumentSyncRegistrationType2) {
    NotebookDocumentSyncRegistrationType2.method = "notebookDocument/sync";
    NotebookDocumentSyncRegistrationType2.messageDirection = messages_1.MessageDirection.clientToServer;
    NotebookDocumentSyncRegistrationType2.type = new messages_1.RegistrationType(NotebookDocumentSyncRegistrationType2.method);
  })(NotebookDocumentSyncRegistrationType = exports2.NotebookDocumentSyncRegistrationType || (exports2.NotebookDocumentSyncRegistrationType = {}));
  (function(DidOpenNotebookDocumentNotification) {
    DidOpenNotebookDocumentNotification.method = "notebookDocument/didOpen";
    DidOpenNotebookDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidOpenNotebookDocumentNotification.type = new messages_1.ProtocolNotificationType(DidOpenNotebookDocumentNotification.method);
    DidOpenNotebookDocumentNotification.registrationMethod = NotebookDocumentSyncRegistrationType.method;
  })(exports2.DidOpenNotebookDocumentNotification || (exports2.DidOpenNotebookDocumentNotification = {}));
  (function(NotebookCellArrayChange) {
    function is2(value) {
      const candidate = value;
      return Is2.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.start) && vscode_languageserver_types_1.uinteger.is(candidate.deleteCount) && (candidate.cells === void 0 || Is2.typedArray(candidate.cells, NotebookCell.is));
    }
    NotebookCellArrayChange.is = is2;
    function create(start, deleteCount, cells) {
      const result = { start, deleteCount };
      if (cells !== void 0) {
        result.cells = cells;
      }
      return result;
    }
    NotebookCellArrayChange.create = create;
  })(exports2.NotebookCellArrayChange || (exports2.NotebookCellArrayChange = {}));
  (function(DidChangeNotebookDocumentNotification) {
    DidChangeNotebookDocumentNotification.method = "notebookDocument/didChange";
    DidChangeNotebookDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidChangeNotebookDocumentNotification.type = new messages_1.ProtocolNotificationType(DidChangeNotebookDocumentNotification.method);
    DidChangeNotebookDocumentNotification.registrationMethod = NotebookDocumentSyncRegistrationType.method;
  })(exports2.DidChangeNotebookDocumentNotification || (exports2.DidChangeNotebookDocumentNotification = {}));
  (function(DidSaveNotebookDocumentNotification) {
    DidSaveNotebookDocumentNotification.method = "notebookDocument/didSave";
    DidSaveNotebookDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidSaveNotebookDocumentNotification.type = new messages_1.ProtocolNotificationType(DidSaveNotebookDocumentNotification.method);
    DidSaveNotebookDocumentNotification.registrationMethod = NotebookDocumentSyncRegistrationType.method;
  })(exports2.DidSaveNotebookDocumentNotification || (exports2.DidSaveNotebookDocumentNotification = {}));
  (function(DidCloseNotebookDocumentNotification) {
    DidCloseNotebookDocumentNotification.method = "notebookDocument/didClose";
    DidCloseNotebookDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidCloseNotebookDocumentNotification.type = new messages_1.ProtocolNotificationType(DidCloseNotebookDocumentNotification.method);
    DidCloseNotebookDocumentNotification.registrationMethod = NotebookDocumentSyncRegistrationType.method;
  })(exports2.DidCloseNotebookDocumentNotification || (exports2.DidCloseNotebookDocumentNotification = {}));
})(protocol_notebook$2);
const protocol_notebook = /* @__PURE__ */ getDefaultExportFromCjs(protocol_notebook$2);
const protocol_notebook$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protocol_notebook
}, [protocol_notebook$2]);
const require$$22$1 = /* @__PURE__ */ getAugmentedNamespace(protocol_notebook$1);
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.WorkspaceSymbolRequest = exports2.CodeActionResolveRequest = exports2.CodeActionRequest = exports2.DocumentSymbolRequest = exports2.DocumentHighlightRequest = exports2.ReferencesRequest = exports2.DefinitionRequest = exports2.SignatureHelpRequest = exports2.SignatureHelpTriggerKind = exports2.HoverRequest = exports2.CompletionResolveRequest = exports2.CompletionRequest = exports2.CompletionTriggerKind = exports2.PublishDiagnosticsNotification = exports2.WatchKind = exports2.RelativePattern = exports2.FileChangeType = exports2.DidChangeWatchedFilesNotification = exports2.WillSaveTextDocumentWaitUntilRequest = exports2.WillSaveTextDocumentNotification = exports2.TextDocumentSaveReason = exports2.DidSaveTextDocumentNotification = exports2.DidCloseTextDocumentNotification = exports2.DidChangeTextDocumentNotification = exports2.TextDocumentContentChangeEvent = exports2.DidOpenTextDocumentNotification = exports2.TextDocumentSyncKind = exports2.TelemetryEventNotification = exports2.LogMessageNotification = exports2.ShowMessageRequest = exports2.ShowMessageNotification = exports2.MessageType = exports2.DidChangeConfigurationNotification = exports2.ExitNotification = exports2.ShutdownRequest = exports2.InitializedNotification = exports2.InitializeErrorCodes = exports2.InitializeRequest = exports2.WorkDoneProgressOptions = exports2.TextDocumentRegistrationOptions = exports2.StaticRegistrationOptions = exports2.PositionEncodingKind = exports2.FailureHandlingKind = exports2.ResourceOperationKind = exports2.UnregistrationRequest = exports2.RegistrationRequest = exports2.DocumentSelector = exports2.NotebookCellTextDocumentFilter = exports2.NotebookDocumentFilter = exports2.TextDocumentFilter = void 0;
  exports2.TypeHierarchySubtypesRequest = exports2.TypeHierarchyPrepareRequest = exports2.MonikerRequest = exports2.MonikerKind = exports2.UniquenessLevel = exports2.WillDeleteFilesRequest = exports2.DidDeleteFilesNotification = exports2.WillRenameFilesRequest = exports2.DidRenameFilesNotification = exports2.WillCreateFilesRequest = exports2.DidCreateFilesNotification = exports2.FileOperationPatternKind = exports2.LinkedEditingRangeRequest = exports2.ShowDocumentRequest = exports2.SemanticTokensRegistrationType = exports2.SemanticTokensRefreshRequest = exports2.SemanticTokensRangeRequest = exports2.SemanticTokensDeltaRequest = exports2.SemanticTokensRequest = exports2.TokenFormat = exports2.CallHierarchyPrepareRequest = exports2.CallHierarchyOutgoingCallsRequest = exports2.CallHierarchyIncomingCallsRequest = exports2.WorkDoneProgressCancelNotification = exports2.WorkDoneProgressCreateRequest = exports2.WorkDoneProgress = exports2.SelectionRangeRequest = exports2.DeclarationRequest = exports2.FoldingRangeRequest = exports2.ColorPresentationRequest = exports2.DocumentColorRequest = exports2.ConfigurationRequest = exports2.DidChangeWorkspaceFoldersNotification = exports2.WorkspaceFoldersRequest = exports2.TypeDefinitionRequest = exports2.ImplementationRequest = exports2.ApplyWorkspaceEditRequest = exports2.ExecuteCommandRequest = exports2.PrepareRenameRequest = exports2.RenameRequest = exports2.PrepareSupportDefaultBehavior = exports2.DocumentOnTypeFormattingRequest = exports2.DocumentRangeFormattingRequest = exports2.DocumentFormattingRequest = exports2.DocumentLinkResolveRequest = exports2.DocumentLinkRequest = exports2.CodeLensRefreshRequest = exports2.CodeLensResolveRequest = exports2.CodeLensRequest = exports2.WorkspaceSymbolResolveRequest = void 0;
  exports2.DidCloseNotebookDocumentNotification = exports2.DidSaveNotebookDocumentNotification = exports2.DidChangeNotebookDocumentNotification = exports2.NotebookCellArrayChange = exports2.DidOpenNotebookDocumentNotification = exports2.NotebookDocumentSyncRegistrationType = exports2.NotebookDocument = exports2.NotebookCell = exports2.ExecutionSummary = exports2.NotebookCellKind = exports2.DiagnosticRefreshRequest = exports2.WorkspaceDiagnosticRequest = exports2.DocumentDiagnosticRequest = exports2.DocumentDiagnosticReportKind = exports2.DiagnosticServerCancellationData = exports2.InlayHintRefreshRequest = exports2.InlayHintResolveRequest = exports2.InlayHintRequest = exports2.InlineValueRefreshRequest = exports2.InlineValueRequest = exports2.TypeHierarchySupertypesRequest = void 0;
  const messages_1 = require$$2$4;
  const vscode_languageserver_types_1 = require$$1$6;
  const Is2 = require$$2$3;
  const protocol_implementation_1 = require$$3$3;
  Object.defineProperty(exports2, "ImplementationRequest", { enumerable: true, get: function() {
    return protocol_implementation_1.ImplementationRequest;
  } });
  const protocol_typeDefinition_1 = require$$4$3;
  Object.defineProperty(exports2, "TypeDefinitionRequest", { enumerable: true, get: function() {
    return protocol_typeDefinition_1.TypeDefinitionRequest;
  } });
  const protocol_workspaceFolder_1 = require$$5$2;
  Object.defineProperty(exports2, "WorkspaceFoldersRequest", { enumerable: true, get: function() {
    return protocol_workspaceFolder_1.WorkspaceFoldersRequest;
  } });
  Object.defineProperty(exports2, "DidChangeWorkspaceFoldersNotification", { enumerable: true, get: function() {
    return protocol_workspaceFolder_1.DidChangeWorkspaceFoldersNotification;
  } });
  const protocol_configuration_1 = require$$6$2;
  Object.defineProperty(exports2, "ConfigurationRequest", { enumerable: true, get: function() {
    return protocol_configuration_1.ConfigurationRequest;
  } });
  const protocol_colorProvider_1 = require$$7$2;
  Object.defineProperty(exports2, "DocumentColorRequest", { enumerable: true, get: function() {
    return protocol_colorProvider_1.DocumentColorRequest;
  } });
  Object.defineProperty(exports2, "ColorPresentationRequest", { enumerable: true, get: function() {
    return protocol_colorProvider_1.ColorPresentationRequest;
  } });
  const protocol_foldingRange_1 = require$$8$1;
  Object.defineProperty(exports2, "FoldingRangeRequest", { enumerable: true, get: function() {
    return protocol_foldingRange_1.FoldingRangeRequest;
  } });
  const protocol_declaration_1 = require$$9$1;
  Object.defineProperty(exports2, "DeclarationRequest", { enumerable: true, get: function() {
    return protocol_declaration_1.DeclarationRequest;
  } });
  const protocol_selectionRange_1 = require$$10$2;
  Object.defineProperty(exports2, "SelectionRangeRequest", { enumerable: true, get: function() {
    return protocol_selectionRange_1.SelectionRangeRequest;
  } });
  const protocol_progress_1 = require$$11$2;
  Object.defineProperty(exports2, "WorkDoneProgress", { enumerable: true, get: function() {
    return protocol_progress_1.WorkDoneProgress;
  } });
  Object.defineProperty(exports2, "WorkDoneProgressCreateRequest", { enumerable: true, get: function() {
    return protocol_progress_1.WorkDoneProgressCreateRequest;
  } });
  Object.defineProperty(exports2, "WorkDoneProgressCancelNotification", { enumerable: true, get: function() {
    return protocol_progress_1.WorkDoneProgressCancelNotification;
  } });
  const protocol_callHierarchy_1 = require$$12$2;
  Object.defineProperty(exports2, "CallHierarchyIncomingCallsRequest", { enumerable: true, get: function() {
    return protocol_callHierarchy_1.CallHierarchyIncomingCallsRequest;
  } });
  Object.defineProperty(exports2, "CallHierarchyOutgoingCallsRequest", { enumerable: true, get: function() {
    return protocol_callHierarchy_1.CallHierarchyOutgoingCallsRequest;
  } });
  Object.defineProperty(exports2, "CallHierarchyPrepareRequest", { enumerable: true, get: function() {
    return protocol_callHierarchy_1.CallHierarchyPrepareRequest;
  } });
  const protocol_semanticTokens_1 = require$$13$1;
  Object.defineProperty(exports2, "TokenFormat", { enumerable: true, get: function() {
    return protocol_semanticTokens_1.TokenFormat;
  } });
  Object.defineProperty(exports2, "SemanticTokensRequest", { enumerable: true, get: function() {
    return protocol_semanticTokens_1.SemanticTokensRequest;
  } });
  Object.defineProperty(exports2, "SemanticTokensDeltaRequest", { enumerable: true, get: function() {
    return protocol_semanticTokens_1.SemanticTokensDeltaRequest;
  } });
  Object.defineProperty(exports2, "SemanticTokensRangeRequest", { enumerable: true, get: function() {
    return protocol_semanticTokens_1.SemanticTokensRangeRequest;
  } });
  Object.defineProperty(exports2, "SemanticTokensRefreshRequest", { enumerable: true, get: function() {
    return protocol_semanticTokens_1.SemanticTokensRefreshRequest;
  } });
  Object.defineProperty(exports2, "SemanticTokensRegistrationType", { enumerable: true, get: function() {
    return protocol_semanticTokens_1.SemanticTokensRegistrationType;
  } });
  const protocol_showDocument_1 = require$$14$1;
  Object.defineProperty(exports2, "ShowDocumentRequest", { enumerable: true, get: function() {
    return protocol_showDocument_1.ShowDocumentRequest;
  } });
  const protocol_linkedEditingRange_1 = require$$15$1;
  Object.defineProperty(exports2, "LinkedEditingRangeRequest", { enumerable: true, get: function() {
    return protocol_linkedEditingRange_1.LinkedEditingRangeRequest;
  } });
  const protocol_fileOperations_1 = require$$16$1;
  Object.defineProperty(exports2, "FileOperationPatternKind", { enumerable: true, get: function() {
    return protocol_fileOperations_1.FileOperationPatternKind;
  } });
  Object.defineProperty(exports2, "DidCreateFilesNotification", { enumerable: true, get: function() {
    return protocol_fileOperations_1.DidCreateFilesNotification;
  } });
  Object.defineProperty(exports2, "WillCreateFilesRequest", { enumerable: true, get: function() {
    return protocol_fileOperations_1.WillCreateFilesRequest;
  } });
  Object.defineProperty(exports2, "DidRenameFilesNotification", { enumerable: true, get: function() {
    return protocol_fileOperations_1.DidRenameFilesNotification;
  } });
  Object.defineProperty(exports2, "WillRenameFilesRequest", { enumerable: true, get: function() {
    return protocol_fileOperations_1.WillRenameFilesRequest;
  } });
  Object.defineProperty(exports2, "DidDeleteFilesNotification", { enumerable: true, get: function() {
    return protocol_fileOperations_1.DidDeleteFilesNotification;
  } });
  Object.defineProperty(exports2, "WillDeleteFilesRequest", { enumerable: true, get: function() {
    return protocol_fileOperations_1.WillDeleteFilesRequest;
  } });
  const protocol_moniker_1 = require$$17$1;
  Object.defineProperty(exports2, "UniquenessLevel", { enumerable: true, get: function() {
    return protocol_moniker_1.UniquenessLevel;
  } });
  Object.defineProperty(exports2, "MonikerKind", { enumerable: true, get: function() {
    return protocol_moniker_1.MonikerKind;
  } });
  Object.defineProperty(exports2, "MonikerRequest", { enumerable: true, get: function() {
    return protocol_moniker_1.MonikerRequest;
  } });
  const protocol_typeHierarchy_1 = require$$18$1;
  Object.defineProperty(exports2, "TypeHierarchyPrepareRequest", { enumerable: true, get: function() {
    return protocol_typeHierarchy_1.TypeHierarchyPrepareRequest;
  } });
  Object.defineProperty(exports2, "TypeHierarchySubtypesRequest", { enumerable: true, get: function() {
    return protocol_typeHierarchy_1.TypeHierarchySubtypesRequest;
  } });
  Object.defineProperty(exports2, "TypeHierarchySupertypesRequest", { enumerable: true, get: function() {
    return protocol_typeHierarchy_1.TypeHierarchySupertypesRequest;
  } });
  const protocol_inlineValue_1 = require$$19$1;
  Object.defineProperty(exports2, "InlineValueRequest", { enumerable: true, get: function() {
    return protocol_inlineValue_1.InlineValueRequest;
  } });
  Object.defineProperty(exports2, "InlineValueRefreshRequest", { enumerable: true, get: function() {
    return protocol_inlineValue_1.InlineValueRefreshRequest;
  } });
  const protocol_inlayHint_1 = require$$20$1;
  Object.defineProperty(exports2, "InlayHintRequest", { enumerable: true, get: function() {
    return protocol_inlayHint_1.InlayHintRequest;
  } });
  Object.defineProperty(exports2, "InlayHintResolveRequest", { enumerable: true, get: function() {
    return protocol_inlayHint_1.InlayHintResolveRequest;
  } });
  Object.defineProperty(exports2, "InlayHintRefreshRequest", { enumerable: true, get: function() {
    return protocol_inlayHint_1.InlayHintRefreshRequest;
  } });
  const protocol_diagnostic_1 = require$$21$1;
  Object.defineProperty(exports2, "DiagnosticServerCancellationData", { enumerable: true, get: function() {
    return protocol_diagnostic_1.DiagnosticServerCancellationData;
  } });
  Object.defineProperty(exports2, "DocumentDiagnosticReportKind", { enumerable: true, get: function() {
    return protocol_diagnostic_1.DocumentDiagnosticReportKind;
  } });
  Object.defineProperty(exports2, "DocumentDiagnosticRequest", { enumerable: true, get: function() {
    return protocol_diagnostic_1.DocumentDiagnosticRequest;
  } });
  Object.defineProperty(exports2, "WorkspaceDiagnosticRequest", { enumerable: true, get: function() {
    return protocol_diagnostic_1.WorkspaceDiagnosticRequest;
  } });
  Object.defineProperty(exports2, "DiagnosticRefreshRequest", { enumerable: true, get: function() {
    return protocol_diagnostic_1.DiagnosticRefreshRequest;
  } });
  const protocol_notebook_1 = require$$22$1;
  Object.defineProperty(exports2, "NotebookCellKind", { enumerable: true, get: function() {
    return protocol_notebook_1.NotebookCellKind;
  } });
  Object.defineProperty(exports2, "ExecutionSummary", { enumerable: true, get: function() {
    return protocol_notebook_1.ExecutionSummary;
  } });
  Object.defineProperty(exports2, "NotebookCell", { enumerable: true, get: function() {
    return protocol_notebook_1.NotebookCell;
  } });
  Object.defineProperty(exports2, "NotebookDocument", { enumerable: true, get: function() {
    return protocol_notebook_1.NotebookDocument;
  } });
  Object.defineProperty(exports2, "NotebookDocumentSyncRegistrationType", { enumerable: true, get: function() {
    return protocol_notebook_1.NotebookDocumentSyncRegistrationType;
  } });
  Object.defineProperty(exports2, "DidOpenNotebookDocumentNotification", { enumerable: true, get: function() {
    return protocol_notebook_1.DidOpenNotebookDocumentNotification;
  } });
  Object.defineProperty(exports2, "NotebookCellArrayChange", { enumerable: true, get: function() {
    return protocol_notebook_1.NotebookCellArrayChange;
  } });
  Object.defineProperty(exports2, "DidChangeNotebookDocumentNotification", { enumerable: true, get: function() {
    return protocol_notebook_1.DidChangeNotebookDocumentNotification;
  } });
  Object.defineProperty(exports2, "DidSaveNotebookDocumentNotification", { enumerable: true, get: function() {
    return protocol_notebook_1.DidSaveNotebookDocumentNotification;
  } });
  Object.defineProperty(exports2, "DidCloseNotebookDocumentNotification", { enumerable: true, get: function() {
    return protocol_notebook_1.DidCloseNotebookDocumentNotification;
  } });
  var TextDocumentFilter;
  (function(TextDocumentFilter2) {
    function is2(value) {
      const candidate = value;
      return Is2.string(candidate.language) || Is2.string(candidate.scheme) || Is2.string(candidate.pattern);
    }
    TextDocumentFilter2.is = is2;
  })(TextDocumentFilter = exports2.TextDocumentFilter || (exports2.TextDocumentFilter = {}));
  var NotebookDocumentFilter;
  (function(NotebookDocumentFilter2) {
    function is2(value) {
      const candidate = value;
      return Is2.objectLiteral(candidate) && (Is2.string(candidate.notebookType) || Is2.string(candidate.scheme) || Is2.string(candidate.pattern));
    }
    NotebookDocumentFilter2.is = is2;
  })(NotebookDocumentFilter = exports2.NotebookDocumentFilter || (exports2.NotebookDocumentFilter = {}));
  var NotebookCellTextDocumentFilter;
  (function(NotebookCellTextDocumentFilter2) {
    function is2(value) {
      const candidate = value;
      return Is2.objectLiteral(candidate) && (Is2.string(candidate.notebook) || NotebookDocumentFilter.is(candidate.notebook)) && (candidate.language === void 0 || Is2.string(candidate.language));
    }
    NotebookCellTextDocumentFilter2.is = is2;
  })(NotebookCellTextDocumentFilter = exports2.NotebookCellTextDocumentFilter || (exports2.NotebookCellTextDocumentFilter = {}));
  var DocumentSelector;
  (function(DocumentSelector2) {
    function is2(value) {
      if (!Array.isArray(value)) {
        return false;
      }
      for (let elem of value) {
        if (!Is2.string(elem) && !TextDocumentFilter.is(elem) && !NotebookCellTextDocumentFilter.is(elem)) {
          return false;
        }
      }
      return true;
    }
    DocumentSelector2.is = is2;
  })(DocumentSelector = exports2.DocumentSelector || (exports2.DocumentSelector = {}));
  (function(RegistrationRequest) {
    RegistrationRequest.method = "client/registerCapability";
    RegistrationRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    RegistrationRequest.type = new messages_1.ProtocolRequestType(RegistrationRequest.method);
  })(exports2.RegistrationRequest || (exports2.RegistrationRequest = {}));
  (function(UnregistrationRequest) {
    UnregistrationRequest.method = "client/unregisterCapability";
    UnregistrationRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    UnregistrationRequest.type = new messages_1.ProtocolRequestType(UnregistrationRequest.method);
  })(exports2.UnregistrationRequest || (exports2.UnregistrationRequest = {}));
  (function(ResourceOperationKind) {
    ResourceOperationKind.Create = "create";
    ResourceOperationKind.Rename = "rename";
    ResourceOperationKind.Delete = "delete";
  })(exports2.ResourceOperationKind || (exports2.ResourceOperationKind = {}));
  (function(FailureHandlingKind) {
    FailureHandlingKind.Abort = "abort";
    FailureHandlingKind.Transactional = "transactional";
    FailureHandlingKind.TextOnlyTransactional = "textOnlyTransactional";
    FailureHandlingKind.Undo = "undo";
  })(exports2.FailureHandlingKind || (exports2.FailureHandlingKind = {}));
  (function(PositionEncodingKind) {
    PositionEncodingKind.UTF8 = "utf-8";
    PositionEncodingKind.UTF16 = "utf-16";
    PositionEncodingKind.UTF32 = "utf-32";
  })(exports2.PositionEncodingKind || (exports2.PositionEncodingKind = {}));
  (function(StaticRegistrationOptions) {
    function hasId(value) {
      const candidate = value;
      return candidate && Is2.string(candidate.id) && candidate.id.length > 0;
    }
    StaticRegistrationOptions.hasId = hasId;
  })(exports2.StaticRegistrationOptions || (exports2.StaticRegistrationOptions = {}));
  (function(TextDocumentRegistrationOptions) {
    function is2(value) {
      const candidate = value;
      return candidate && (candidate.documentSelector === null || DocumentSelector.is(candidate.documentSelector));
    }
    TextDocumentRegistrationOptions.is = is2;
  })(exports2.TextDocumentRegistrationOptions || (exports2.TextDocumentRegistrationOptions = {}));
  (function(WorkDoneProgressOptions) {
    function is2(value) {
      const candidate = value;
      return Is2.objectLiteral(candidate) && (candidate.workDoneProgress === void 0 || Is2.boolean(candidate.workDoneProgress));
    }
    WorkDoneProgressOptions.is = is2;
    function hasWorkDoneProgress(value) {
      const candidate = value;
      return candidate && Is2.boolean(candidate.workDoneProgress);
    }
    WorkDoneProgressOptions.hasWorkDoneProgress = hasWorkDoneProgress;
  })(exports2.WorkDoneProgressOptions || (exports2.WorkDoneProgressOptions = {}));
  (function(InitializeRequest) {
    InitializeRequest.method = "initialize";
    InitializeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    InitializeRequest.type = new messages_1.ProtocolRequestType(InitializeRequest.method);
  })(exports2.InitializeRequest || (exports2.InitializeRequest = {}));
  (function(InitializeErrorCodes) {
    InitializeErrorCodes.unknownProtocolVersion = 1;
  })(exports2.InitializeErrorCodes || (exports2.InitializeErrorCodes = {}));
  (function(InitializedNotification) {
    InitializedNotification.method = "initialized";
    InitializedNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    InitializedNotification.type = new messages_1.ProtocolNotificationType(InitializedNotification.method);
  })(exports2.InitializedNotification || (exports2.InitializedNotification = {}));
  (function(ShutdownRequest) {
    ShutdownRequest.method = "shutdown";
    ShutdownRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    ShutdownRequest.type = new messages_1.ProtocolRequestType0(ShutdownRequest.method);
  })(exports2.ShutdownRequest || (exports2.ShutdownRequest = {}));
  (function(ExitNotification) {
    ExitNotification.method = "exit";
    ExitNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    ExitNotification.type = new messages_1.ProtocolNotificationType0(ExitNotification.method);
  })(exports2.ExitNotification || (exports2.ExitNotification = {}));
  (function(DidChangeConfigurationNotification) {
    DidChangeConfigurationNotification.method = "workspace/didChangeConfiguration";
    DidChangeConfigurationNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidChangeConfigurationNotification.type = new messages_1.ProtocolNotificationType(DidChangeConfigurationNotification.method);
  })(exports2.DidChangeConfigurationNotification || (exports2.DidChangeConfigurationNotification = {}));
  (function(MessageType) {
    MessageType.Error = 1;
    MessageType.Warning = 2;
    MessageType.Info = 3;
    MessageType.Log = 4;
  })(exports2.MessageType || (exports2.MessageType = {}));
  (function(ShowMessageNotification) {
    ShowMessageNotification.method = "window/showMessage";
    ShowMessageNotification.messageDirection = messages_1.MessageDirection.serverToClient;
    ShowMessageNotification.type = new messages_1.ProtocolNotificationType(ShowMessageNotification.method);
  })(exports2.ShowMessageNotification || (exports2.ShowMessageNotification = {}));
  (function(ShowMessageRequest) {
    ShowMessageRequest.method = "window/showMessageRequest";
    ShowMessageRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    ShowMessageRequest.type = new messages_1.ProtocolRequestType(ShowMessageRequest.method);
  })(exports2.ShowMessageRequest || (exports2.ShowMessageRequest = {}));
  (function(LogMessageNotification) {
    LogMessageNotification.method = "window/logMessage";
    LogMessageNotification.messageDirection = messages_1.MessageDirection.serverToClient;
    LogMessageNotification.type = new messages_1.ProtocolNotificationType(LogMessageNotification.method);
  })(exports2.LogMessageNotification || (exports2.LogMessageNotification = {}));
  (function(TelemetryEventNotification) {
    TelemetryEventNotification.method = "telemetry/event";
    TelemetryEventNotification.messageDirection = messages_1.MessageDirection.serverToClient;
    TelemetryEventNotification.type = new messages_1.ProtocolNotificationType(TelemetryEventNotification.method);
  })(exports2.TelemetryEventNotification || (exports2.TelemetryEventNotification = {}));
  (function(TextDocumentSyncKind) {
    TextDocumentSyncKind.None = 0;
    TextDocumentSyncKind.Full = 1;
    TextDocumentSyncKind.Incremental = 2;
  })(exports2.TextDocumentSyncKind || (exports2.TextDocumentSyncKind = {}));
  (function(DidOpenTextDocumentNotification) {
    DidOpenTextDocumentNotification.method = "textDocument/didOpen";
    DidOpenTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidOpenTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidOpenTextDocumentNotification.method);
  })(exports2.DidOpenTextDocumentNotification || (exports2.DidOpenTextDocumentNotification = {}));
  (function(TextDocumentContentChangeEvent) {
    function isIncremental(event) {
      let candidate = event;
      return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
    }
    TextDocumentContentChangeEvent.isIncremental = isIncremental;
    function isFull(event) {
      let candidate = event;
      return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
    }
    TextDocumentContentChangeEvent.isFull = isFull;
  })(exports2.TextDocumentContentChangeEvent || (exports2.TextDocumentContentChangeEvent = {}));
  (function(DidChangeTextDocumentNotification) {
    DidChangeTextDocumentNotification.method = "textDocument/didChange";
    DidChangeTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidChangeTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidChangeTextDocumentNotification.method);
  })(exports2.DidChangeTextDocumentNotification || (exports2.DidChangeTextDocumentNotification = {}));
  (function(DidCloseTextDocumentNotification) {
    DidCloseTextDocumentNotification.method = "textDocument/didClose";
    DidCloseTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidCloseTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidCloseTextDocumentNotification.method);
  })(exports2.DidCloseTextDocumentNotification || (exports2.DidCloseTextDocumentNotification = {}));
  (function(DidSaveTextDocumentNotification) {
    DidSaveTextDocumentNotification.method = "textDocument/didSave";
    DidSaveTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidSaveTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidSaveTextDocumentNotification.method);
  })(exports2.DidSaveTextDocumentNotification || (exports2.DidSaveTextDocumentNotification = {}));
  (function(TextDocumentSaveReason) {
    TextDocumentSaveReason.Manual = 1;
    TextDocumentSaveReason.AfterDelay = 2;
    TextDocumentSaveReason.FocusOut = 3;
  })(exports2.TextDocumentSaveReason || (exports2.TextDocumentSaveReason = {}));
  (function(WillSaveTextDocumentNotification) {
    WillSaveTextDocumentNotification.method = "textDocument/willSave";
    WillSaveTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    WillSaveTextDocumentNotification.type = new messages_1.ProtocolNotificationType(WillSaveTextDocumentNotification.method);
  })(exports2.WillSaveTextDocumentNotification || (exports2.WillSaveTextDocumentNotification = {}));
  (function(WillSaveTextDocumentWaitUntilRequest) {
    WillSaveTextDocumentWaitUntilRequest.method = "textDocument/willSaveWaitUntil";
    WillSaveTextDocumentWaitUntilRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    WillSaveTextDocumentWaitUntilRequest.type = new messages_1.ProtocolRequestType(WillSaveTextDocumentWaitUntilRequest.method);
  })(exports2.WillSaveTextDocumentWaitUntilRequest || (exports2.WillSaveTextDocumentWaitUntilRequest = {}));
  (function(DidChangeWatchedFilesNotification) {
    DidChangeWatchedFilesNotification.method = "workspace/didChangeWatchedFiles";
    DidChangeWatchedFilesNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidChangeWatchedFilesNotification.type = new messages_1.ProtocolNotificationType(DidChangeWatchedFilesNotification.method);
  })(exports2.DidChangeWatchedFilesNotification || (exports2.DidChangeWatchedFilesNotification = {}));
  (function(FileChangeType) {
    FileChangeType.Created = 1;
    FileChangeType.Changed = 2;
    FileChangeType.Deleted = 3;
  })(exports2.FileChangeType || (exports2.FileChangeType = {}));
  (function(RelativePattern) {
    function is2(value) {
      const candidate = value;
      return Is2.objectLiteral(candidate) && (vscode_languageserver_types_1.URI.is(candidate.baseUri) || vscode_languageserver_types_1.WorkspaceFolder.is(candidate.baseUri)) && Is2.string(candidate.pattern);
    }
    RelativePattern.is = is2;
  })(exports2.RelativePattern || (exports2.RelativePattern = {}));
  (function(WatchKind) {
    WatchKind.Create = 1;
    WatchKind.Change = 2;
    WatchKind.Delete = 4;
  })(exports2.WatchKind || (exports2.WatchKind = {}));
  (function(PublishDiagnosticsNotification) {
    PublishDiagnosticsNotification.method = "textDocument/publishDiagnostics";
    PublishDiagnosticsNotification.messageDirection = messages_1.MessageDirection.serverToClient;
    PublishDiagnosticsNotification.type = new messages_1.ProtocolNotificationType(PublishDiagnosticsNotification.method);
  })(exports2.PublishDiagnosticsNotification || (exports2.PublishDiagnosticsNotification = {}));
  (function(CompletionTriggerKind) {
    CompletionTriggerKind.Invoked = 1;
    CompletionTriggerKind.TriggerCharacter = 2;
    CompletionTriggerKind.TriggerForIncompleteCompletions = 3;
  })(exports2.CompletionTriggerKind || (exports2.CompletionTriggerKind = {}));
  (function(CompletionRequest) {
    CompletionRequest.method = "textDocument/completion";
    CompletionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CompletionRequest.type = new messages_1.ProtocolRequestType(CompletionRequest.method);
  })(exports2.CompletionRequest || (exports2.CompletionRequest = {}));
  (function(CompletionResolveRequest) {
    CompletionResolveRequest.method = "completionItem/resolve";
    CompletionResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CompletionResolveRequest.type = new messages_1.ProtocolRequestType(CompletionResolveRequest.method);
  })(exports2.CompletionResolveRequest || (exports2.CompletionResolveRequest = {}));
  (function(HoverRequest) {
    HoverRequest.method = "textDocument/hover";
    HoverRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    HoverRequest.type = new messages_1.ProtocolRequestType(HoverRequest.method);
  })(exports2.HoverRequest || (exports2.HoverRequest = {}));
  (function(SignatureHelpTriggerKind) {
    SignatureHelpTriggerKind.Invoked = 1;
    SignatureHelpTriggerKind.TriggerCharacter = 2;
    SignatureHelpTriggerKind.ContentChange = 3;
  })(exports2.SignatureHelpTriggerKind || (exports2.SignatureHelpTriggerKind = {}));
  (function(SignatureHelpRequest) {
    SignatureHelpRequest.method = "textDocument/signatureHelp";
    SignatureHelpRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    SignatureHelpRequest.type = new messages_1.ProtocolRequestType(SignatureHelpRequest.method);
  })(exports2.SignatureHelpRequest || (exports2.SignatureHelpRequest = {}));
  (function(DefinitionRequest) {
    DefinitionRequest.method = "textDocument/definition";
    DefinitionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DefinitionRequest.type = new messages_1.ProtocolRequestType(DefinitionRequest.method);
  })(exports2.DefinitionRequest || (exports2.DefinitionRequest = {}));
  (function(ReferencesRequest) {
    ReferencesRequest.method = "textDocument/references";
    ReferencesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    ReferencesRequest.type = new messages_1.ProtocolRequestType(ReferencesRequest.method);
  })(exports2.ReferencesRequest || (exports2.ReferencesRequest = {}));
  (function(DocumentHighlightRequest) {
    DocumentHighlightRequest.method = "textDocument/documentHighlight";
    DocumentHighlightRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentHighlightRequest.type = new messages_1.ProtocolRequestType(DocumentHighlightRequest.method);
  })(exports2.DocumentHighlightRequest || (exports2.DocumentHighlightRequest = {}));
  (function(DocumentSymbolRequest) {
    DocumentSymbolRequest.method = "textDocument/documentSymbol";
    DocumentSymbolRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentSymbolRequest.type = new messages_1.ProtocolRequestType(DocumentSymbolRequest.method);
  })(exports2.DocumentSymbolRequest || (exports2.DocumentSymbolRequest = {}));
  (function(CodeActionRequest) {
    CodeActionRequest.method = "textDocument/codeAction";
    CodeActionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CodeActionRequest.type = new messages_1.ProtocolRequestType(CodeActionRequest.method);
  })(exports2.CodeActionRequest || (exports2.CodeActionRequest = {}));
  (function(CodeActionResolveRequest) {
    CodeActionResolveRequest.method = "codeAction/resolve";
    CodeActionResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CodeActionResolveRequest.type = new messages_1.ProtocolRequestType(CodeActionResolveRequest.method);
  })(exports2.CodeActionResolveRequest || (exports2.CodeActionResolveRequest = {}));
  (function(WorkspaceSymbolRequest) {
    WorkspaceSymbolRequest.method = "workspace/symbol";
    WorkspaceSymbolRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    WorkspaceSymbolRequest.type = new messages_1.ProtocolRequestType(WorkspaceSymbolRequest.method);
  })(exports2.WorkspaceSymbolRequest || (exports2.WorkspaceSymbolRequest = {}));
  (function(WorkspaceSymbolResolveRequest) {
    WorkspaceSymbolResolveRequest.method = "workspaceSymbol/resolve";
    WorkspaceSymbolResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    WorkspaceSymbolResolveRequest.type = new messages_1.ProtocolRequestType(WorkspaceSymbolResolveRequest.method);
  })(exports2.WorkspaceSymbolResolveRequest || (exports2.WorkspaceSymbolResolveRequest = {}));
  (function(CodeLensRequest) {
    CodeLensRequest.method = "textDocument/codeLens";
    CodeLensRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CodeLensRequest.type = new messages_1.ProtocolRequestType(CodeLensRequest.method);
  })(exports2.CodeLensRequest || (exports2.CodeLensRequest = {}));
  (function(CodeLensResolveRequest) {
    CodeLensResolveRequest.method = "codeLens/resolve";
    CodeLensResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CodeLensResolveRequest.type = new messages_1.ProtocolRequestType(CodeLensResolveRequest.method);
  })(exports2.CodeLensResolveRequest || (exports2.CodeLensResolveRequest = {}));
  (function(CodeLensRefreshRequest) {
    CodeLensRefreshRequest.method = `workspace/codeLens/refresh`;
    CodeLensRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    CodeLensRefreshRequest.type = new messages_1.ProtocolRequestType0(CodeLensRefreshRequest.method);
  })(exports2.CodeLensRefreshRequest || (exports2.CodeLensRefreshRequest = {}));
  (function(DocumentLinkRequest) {
    DocumentLinkRequest.method = "textDocument/documentLink";
    DocumentLinkRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentLinkRequest.type = new messages_1.ProtocolRequestType(DocumentLinkRequest.method);
  })(exports2.DocumentLinkRequest || (exports2.DocumentLinkRequest = {}));
  (function(DocumentLinkResolveRequest) {
    DocumentLinkResolveRequest.method = "documentLink/resolve";
    DocumentLinkResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentLinkResolveRequest.type = new messages_1.ProtocolRequestType(DocumentLinkResolveRequest.method);
  })(exports2.DocumentLinkResolveRequest || (exports2.DocumentLinkResolveRequest = {}));
  (function(DocumentFormattingRequest) {
    DocumentFormattingRequest.method = "textDocument/formatting";
    DocumentFormattingRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentFormattingRequest.method);
  })(exports2.DocumentFormattingRequest || (exports2.DocumentFormattingRequest = {}));
  (function(DocumentRangeFormattingRequest) {
    DocumentRangeFormattingRequest.method = "textDocument/rangeFormatting";
    DocumentRangeFormattingRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentRangeFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentRangeFormattingRequest.method);
  })(exports2.DocumentRangeFormattingRequest || (exports2.DocumentRangeFormattingRequest = {}));
  (function(DocumentOnTypeFormattingRequest) {
    DocumentOnTypeFormattingRequest.method = "textDocument/onTypeFormatting";
    DocumentOnTypeFormattingRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentOnTypeFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentOnTypeFormattingRequest.method);
  })(exports2.DocumentOnTypeFormattingRequest || (exports2.DocumentOnTypeFormattingRequest = {}));
  (function(PrepareSupportDefaultBehavior) {
    PrepareSupportDefaultBehavior.Identifier = 1;
  })(exports2.PrepareSupportDefaultBehavior || (exports2.PrepareSupportDefaultBehavior = {}));
  (function(RenameRequest) {
    RenameRequest.method = "textDocument/rename";
    RenameRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    RenameRequest.type = new messages_1.ProtocolRequestType(RenameRequest.method);
  })(exports2.RenameRequest || (exports2.RenameRequest = {}));
  (function(PrepareRenameRequest) {
    PrepareRenameRequest.method = "textDocument/prepareRename";
    PrepareRenameRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    PrepareRenameRequest.type = new messages_1.ProtocolRequestType(PrepareRenameRequest.method);
  })(exports2.PrepareRenameRequest || (exports2.PrepareRenameRequest = {}));
  (function(ExecuteCommandRequest) {
    ExecuteCommandRequest.method = "workspace/executeCommand";
    ExecuteCommandRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    ExecuteCommandRequest.type = new messages_1.ProtocolRequestType(ExecuteCommandRequest.method);
  })(exports2.ExecuteCommandRequest || (exports2.ExecuteCommandRequest = {}));
  (function(ApplyWorkspaceEditRequest) {
    ApplyWorkspaceEditRequest.method = "workspace/applyEdit";
    ApplyWorkspaceEditRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    ApplyWorkspaceEditRequest.type = new messages_1.ProtocolRequestType("workspace/applyEdit");
  })(exports2.ApplyWorkspaceEditRequest || (exports2.ApplyWorkspaceEditRequest = {}));
})(protocol$2);
const protocol = /* @__PURE__ */ getDefaultExportFromCjs(protocol$2);
const protocol$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protocol
}, [protocol$2]);
const require$$3$2 = /* @__PURE__ */ getAugmentedNamespace(protocol$1);
var connection$1 = {};
Object.defineProperty(connection$1, "__esModule", { value: true });
var createProtocolConnection_1 = connection$1.createProtocolConnection = void 0;
const vscode_jsonrpc_1 = require$$0$7;
function createProtocolConnection(input, output, logger, options) {
  if (vscode_jsonrpc_1.ConnectionStrategy.is(options)) {
    options = { connectionStrategy: options };
  }
  return (0, vscode_jsonrpc_1.createMessageConnection)(input, output, logger, options);
}
createProtocolConnection_1 = connection$1.createProtocolConnection = createProtocolConnection;
const connection = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get createProtocolConnection() {
    return createProtocolConnection_1;
  },
  default: connection$1
}, [connection$1]);
const require$$4$2 = /* @__PURE__ */ getAugmentedNamespace(connection);
(function(exports2) {
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
        __createBinding(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.LSPErrorCodes = exports2.createProtocolConnection = void 0;
  __exportStar(require$$0$7, exports2);
  __exportStar(require$$1$6, exports2);
  __exportStar(require$$2$4, exports2);
  __exportStar(require$$3$2, exports2);
  var connection_1 = require$$4$2;
  Object.defineProperty(exports2, "createProtocolConnection", { enumerable: true, get: function() {
    return connection_1.createProtocolConnection;
  } });
  (function(LSPErrorCodes) {
    LSPErrorCodes.lspReservedErrorRangeStart = -32899;
    LSPErrorCodes.RequestFailed = -32803;
    LSPErrorCodes.ServerCancelled = -32802;
    LSPErrorCodes.ContentModified = -32801;
    LSPErrorCodes.RequestCancelled = -32800;
    LSPErrorCodes.lspReservedErrorRangeEnd = -32800;
  })(exports2.LSPErrorCodes || (exports2.LSPErrorCodes = {}));
})(api$4);
const api$2 = /* @__PURE__ */ getDefaultExportFromCjs(api$4);
const api$3 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: api$2
}, [api$4]);
const require$$1$5 = /* @__PURE__ */ getAugmentedNamespace(api$3);
(function(exports2) {
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
        __createBinding(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.createProtocolConnection = void 0;
  const browser_1 = require$$0$6;
  __exportStar(require$$0$6, exports2);
  __exportStar(require$$1$5, exports2);
  function createProtocolConnection2(reader, writer, logger, options) {
    return (0, browser_1.createMessageConnection)(reader, writer, logger, options);
  }
  exports2.createProtocolConnection = createProtocolConnection2;
})(main$8);
const main$2 = /* @__PURE__ */ getDefaultExportFromCjs(main$8);
const main$3 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: main$2
}, [main$8]);
const require$$0$5 = /* @__PURE__ */ getAugmentedNamespace(main$3);
var features$2 = {};
var is$1 = {};
Object.defineProperty(is$1, "__esModule", { value: true });
var asPromise_1 = is$1.asPromise = thenable_1 = is$1.thenable = typedArray_1 = is$1.typedArray = stringArray_1 = is$1.stringArray = array_1 = is$1.array = func_1 = is$1.func = error_1 = is$1.error = number_1 = is$1.number = string_1 = is$1.string = boolean_1 = is$1.boolean = void 0;
function boolean(value) {
  return value === true || value === false;
}
var boolean_1 = is$1.boolean = boolean;
function string$1(value) {
  return typeof value === "string" || value instanceof String;
}
var string_1 = is$1.string = string$1;
function number(value) {
  return typeof value === "number" || value instanceof Number;
}
var number_1 = is$1.number = number;
function error(value) {
  return value instanceof Error;
}
var error_1 = is$1.error = error;
function func(value) {
  return typeof value === "function";
}
var func_1 = is$1.func = func;
function array(value) {
  return Array.isArray(value);
}
var array_1 = is$1.array = array;
function stringArray(value) {
  return array(value) && value.every((elem) => string$1(elem));
}
var stringArray_1 = is$1.stringArray = stringArray;
function typedArray(value, check) {
  return Array.isArray(value) && value.every(check);
}
var typedArray_1 = is$1.typedArray = typedArray;
function thenable(value) {
  return value && func(value.then);
}
var thenable_1 = is$1.thenable = thenable;
function asPromise(value) {
  if (value instanceof Promise) {
    return value;
  } else if (thenable(value)) {
    return new Promise((resolve, reject) => {
      value.then((resolved) => resolve(resolved), (error2) => reject(error2));
    });
  } else {
    return Promise.resolve(value);
  }
}
asPromise_1 = is$1.asPromise = asPromise;
const is = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get array() {
    return array_1;
  },
  get asPromise() {
    return asPromise_1;
  },
  get boolean() {
    return boolean_1;
  },
  default: is$1,
  get error() {
    return error_1;
  },
  get func() {
    return func_1;
  },
  get number() {
    return number_1;
  },
  get string() {
    return string_1;
  },
  get stringArray() {
    return stringArray_1;
  },
  get thenable() {
    return thenable_1;
  },
  get typedArray() {
    return typedArray_1;
  }
}, [is$1]);
const require$$4$1 = /* @__PURE__ */ getAugmentedNamespace(is);
var uuid$1 = {};
Object.defineProperty(uuid$1, "__esModule", { value: true });
var generateUuid_1 = uuid$1.generateUuid = parse_1 = uuid$1.parse = isUUID_1 = uuid$1.isUUID = v4_1 = uuid$1.v4 = empty = uuid$1.empty = void 0;
class ValueUUID {
  constructor(_value) {
    this._value = _value;
  }
  asHex() {
    return this._value;
  }
  equals(other) {
    return this.asHex() === other.asHex();
  }
}
class V4UUID extends ValueUUID {
  constructor() {
    super([
      V4UUID._randomHex(),
      V4UUID._randomHex(),
      V4UUID._randomHex(),
      V4UUID._randomHex(),
      V4UUID._randomHex(),
      V4UUID._randomHex(),
      V4UUID._randomHex(),
      V4UUID._randomHex(),
      "-",
      V4UUID._randomHex(),
      V4UUID._randomHex(),
      V4UUID._randomHex(),
      V4UUID._randomHex(),
      "-",
      "4",
      V4UUID._randomHex(),
      V4UUID._randomHex(),
      V4UUID._randomHex(),
      "-",
      V4UUID._oneOf(V4UUID._timeHighBits),
      V4UUID._randomHex(),
      V4UUID._randomHex(),
      V4UUID._randomHex(),
      "-",
      V4UUID._randomHex(),
      V4UUID._randomHex(),
      V4UUID._randomHex(),
      V4UUID._randomHex(),
      V4UUID._randomHex(),
      V4UUID._randomHex(),
      V4UUID._randomHex(),
      V4UUID._randomHex(),
      V4UUID._randomHex(),
      V4UUID._randomHex(),
      V4UUID._randomHex(),
      V4UUID._randomHex()
    ].join(""));
  }
  static _oneOf(array2) {
    return array2[Math.floor(array2.length * Math.random())];
  }
  static _randomHex() {
    return V4UUID._oneOf(V4UUID._chars);
  }
}
V4UUID._chars = ["0", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
V4UUID._timeHighBits = ["8", "9", "a", "b"];
var empty = uuid$1.empty = new ValueUUID("00000000-0000-0000-0000-000000000000");
function v4() {
  return new V4UUID();
}
var v4_1 = uuid$1.v4 = v4;
const _UUIDPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function isUUID(value) {
  return _UUIDPattern.test(value);
}
var isUUID_1 = uuid$1.isUUID = isUUID;
function parse(value) {
  if (!isUUID(value)) {
    throw new Error("invalid uuid");
  }
  return new ValueUUID(value);
}
var parse_1 = uuid$1.parse = parse;
function generateUuid() {
  return v4().asHex();
}
generateUuid_1 = uuid$1.generateUuid = generateUuid;
const uuid = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: uuid$1,
  get empty() {
    return empty;
  },
  get generateUuid() {
    return generateUuid_1;
  },
  get isUUID() {
    return isUUID_1;
  },
  get parse() {
    return parse_1;
  },
  get v4() {
    return v4_1;
  }
}, [uuid$1]);
const require$$6$1 = /* @__PURE__ */ getAugmentedNamespace(uuid);
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.WorkspaceFeature = exports2.TextDocumentLanguageFeature = exports2.TextDocumentEventFeature = exports2.DynamicDocumentFeature = exports2.DynamicFeature = exports2.StaticFeature = exports2.ensure = exports2.LSPCancellationError = void 0;
  const vscode_12 = require$$0$9;
  const vscode_languageserver_protocol_12 = require$$0$5;
  const Is2 = require$$4$1;
  const UUID2 = require$$6$1;
  class LSPCancellationError extends vscode_12.CancellationError {
    constructor(data) {
      super();
      this.data = data;
    }
  }
  exports2.LSPCancellationError = LSPCancellationError;
  function ensure2(target, key) {
    if (target[key] === void 0) {
      target[key] = {};
    }
    return target[key];
  }
  exports2.ensure = ensure2;
  (function(StaticFeature) {
    function is2(value) {
      const candidate = value;
      return candidate !== void 0 && candidate !== null && Is2.func(candidate.fillClientCapabilities) && Is2.func(candidate.initialize) && Is2.func(candidate.getState) && Is2.func(candidate.dispose) && (candidate.fillInitializeParams === void 0 || Is2.func(candidate.fillInitializeParams));
    }
    StaticFeature.is = is2;
  })(exports2.StaticFeature || (exports2.StaticFeature = {}));
  (function(DynamicFeature) {
    function is2(value) {
      const candidate = value;
      return candidate !== void 0 && candidate !== null && Is2.func(candidate.fillClientCapabilities) && Is2.func(candidate.initialize) && Is2.func(candidate.getState) && Is2.func(candidate.dispose) && (candidate.fillInitializeParams === void 0 || Is2.func(candidate.fillInitializeParams)) && Is2.func(candidate.register) && Is2.func(candidate.unregister) && candidate.registrationType !== void 0;
    }
    DynamicFeature.is = is2;
  })(exports2.DynamicFeature || (exports2.DynamicFeature = {}));
  class DynamicDocumentFeature {
    constructor(client2) {
      this._client = client2;
    }
    /**
     * Returns the state the feature is in.
     */
    getState() {
      const selectors = this.getDocumentSelectors();
      let count = 0;
      for (const selector of selectors) {
        count++;
        for (const document of vscode_12.workspace.textDocuments) {
          if (vscode_12.languages.match(selector, document) > 0) {
            return { kind: "document", id: this.registrationType.method, registrations: true, matches: true };
          }
        }
      }
      const registrations = count > 0;
      return { kind: "document", id: this.registrationType.method, registrations, matches: false };
    }
  }
  exports2.DynamicDocumentFeature = DynamicDocumentFeature;
  class TextDocumentEventFeature extends DynamicDocumentFeature {
    constructor(client2, event, type, middleware, createParams, textDocument, selectorFilter) {
      super(client2);
      this._event = event;
      this._type = type;
      this._middleware = middleware;
      this._createParams = createParams;
      this._textDocument = textDocument;
      this._selectorFilter = selectorFilter;
      this._selectors = /* @__PURE__ */ new Map();
      this._onNotificationSent = new vscode_12.EventEmitter();
    }
    static textDocumentFilter(selectors, textDocument) {
      for (const selector of selectors) {
        if (vscode_12.languages.match(selector, textDocument) > 0) {
          return true;
        }
      }
      return false;
    }
    getStateInfo() {
      return [this._selectors.values(), false];
    }
    getDocumentSelectors() {
      return this._selectors.values();
    }
    register(data) {
      if (!data.registerOptions.documentSelector) {
        return;
      }
      if (!this._listener) {
        this._listener = this._event((data2) => {
          this.callback(data2).catch((error2) => {
            this._client.error(`Sending document notification ${this._type.method} failed.`, error2);
          });
        });
      }
      this._selectors.set(data.id, this._client.protocol2CodeConverter.asDocumentSelector(data.registerOptions.documentSelector));
    }
    async callback(data) {
      const doSend = async (data2) => {
        const params = this._createParams(data2);
        await this._client.sendNotification(this._type, params);
        this.notificationSent(this.getTextDocument(data2), this._type, params);
      };
      if (this.matches(data)) {
        const middleware = this._middleware();
        return middleware ? middleware(data, (data2) => doSend(data2)) : doSend(data);
      }
    }
    matches(data) {
      if (this._client.hasDedicatedTextSynchronizationFeature(this._textDocument(data))) {
        return false;
      }
      return !this._selectorFilter || this._selectorFilter(this._selectors.values(), data);
    }
    get onNotificationSent() {
      return this._onNotificationSent.event;
    }
    notificationSent(textDocument, type, params) {
      this._onNotificationSent.fire({ textDocument, type, params });
    }
    unregister(id) {
      this._selectors.delete(id);
      if (this._selectors.size === 0 && this._listener) {
        this._listener.dispose();
        this._listener = void 0;
      }
    }
    dispose() {
      this._selectors.clear();
      this._onNotificationSent.dispose();
      if (this._listener) {
        this._listener.dispose();
        this._listener = void 0;
      }
    }
    getProvider(document) {
      for (const selector of this._selectors.values()) {
        if (vscode_12.languages.match(selector, document) > 0) {
          return {
            send: (data) => {
              return this.callback(data);
            }
          };
        }
      }
      return void 0;
    }
  }
  exports2.TextDocumentEventFeature = TextDocumentEventFeature;
  class TextDocumentLanguageFeature extends DynamicDocumentFeature {
    constructor(client2, registrationType) {
      super(client2);
      this._registrationType = registrationType;
      this._registrations = /* @__PURE__ */ new Map();
    }
    *getDocumentSelectors() {
      for (const registration of this._registrations.values()) {
        const selector = registration.data.registerOptions.documentSelector;
        if (selector === null) {
          continue;
        }
        yield this._client.protocol2CodeConverter.asDocumentSelector(selector);
      }
    }
    get registrationType() {
      return this._registrationType;
    }
    register(data) {
      if (!data.registerOptions.documentSelector) {
        return;
      }
      let registration = this.registerLanguageProvider(data.registerOptions, data.id);
      this._registrations.set(data.id, { disposable: registration[0], data, provider: registration[1] });
    }
    unregister(id) {
      let registration = this._registrations.get(id);
      if (registration !== void 0) {
        registration.disposable.dispose();
      }
    }
    dispose() {
      this._registrations.forEach((value) => {
        value.disposable.dispose();
      });
      this._registrations.clear();
    }
    getRegistration(documentSelector, capability) {
      if (!capability) {
        return [void 0, void 0];
      } else if (vscode_languageserver_protocol_12.TextDocumentRegistrationOptions.is(capability)) {
        const id = vscode_languageserver_protocol_12.StaticRegistrationOptions.hasId(capability) ? capability.id : UUID2.generateUuid();
        const selector = capability.documentSelector ?? documentSelector;
        if (selector) {
          return [id, Object.assign({}, capability, { documentSelector: selector })];
        }
      } else if (Is2.boolean(capability) && capability === true || vscode_languageserver_protocol_12.WorkDoneProgressOptions.is(capability)) {
        if (!documentSelector) {
          return [void 0, void 0];
        }
        const options = Is2.boolean(capability) && capability === true ? { documentSelector } : Object.assign({}, capability, { documentSelector });
        return [UUID2.generateUuid(), options];
      }
      return [void 0, void 0];
    }
    getRegistrationOptions(documentSelector, capability) {
      if (!documentSelector || !capability) {
        return void 0;
      }
      return Is2.boolean(capability) && capability === true ? { documentSelector } : Object.assign({}, capability, { documentSelector });
    }
    getProvider(textDocument) {
      for (const registration of this._registrations.values()) {
        let selector = registration.data.registerOptions.documentSelector;
        if (selector !== null && vscode_12.languages.match(this._client.protocol2CodeConverter.asDocumentSelector(selector), textDocument) > 0) {
          return registration.provider;
        }
      }
      return void 0;
    }
    getAllProviders() {
      const result = [];
      for (const item of this._registrations.values()) {
        result.push(item.provider);
      }
      return result;
    }
  }
  exports2.TextDocumentLanguageFeature = TextDocumentLanguageFeature;
  class WorkspaceFeature {
    constructor(client2, registrationType) {
      this._client = client2;
      this._registrationType = registrationType;
      this._registrations = /* @__PURE__ */ new Map();
    }
    getState() {
      const registrations = this._registrations.size > 0;
      return { kind: "workspace", id: this._registrationType.method, registrations };
    }
    get registrationType() {
      return this._registrationType;
    }
    register(data) {
      const registration = this.registerLanguageProvider(data.registerOptions);
      this._registrations.set(data.id, { disposable: registration[0], provider: registration[1] });
    }
    unregister(id) {
      let registration = this._registrations.get(id);
      if (registration !== void 0) {
        registration.disposable.dispose();
      }
    }
    dispose() {
      this._registrations.forEach((registration) => {
        registration.disposable.dispose();
      });
      this._registrations.clear();
    }
    getProviders() {
      const result = [];
      for (const registration of this._registrations.values()) {
        result.push(registration.provider);
      }
      return result;
    }
  }
  exports2.WorkspaceFeature = WorkspaceFeature;
})(features$2);
const features = /* @__PURE__ */ getDefaultExportFromCjs(features$2);
const features$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: features
}, [features$2]);
const require$$1$4 = /* @__PURE__ */ getAugmentedNamespace(features$1);
var diagnostic$2 = {};
const isWindows = typeof process === "object" && process && process.platform === "win32";
var path$1 = isWindows ? { sep: "\\" } : { sep: "/" };
const path$2 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: path$1
}, [path$1]);
const require$$0$4 = /* @__PURE__ */ getAugmentedNamespace(path$2);
var balancedMatch = balanced$1;
function balanced$1(a, b, str) {
  if (a instanceof RegExp)
    a = maybeMatch(a, str);
  if (b instanceof RegExp)
    b = maybeMatch(b, str);
  var r = range(a, b, str);
  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}
function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}
balanced$1.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;
  if (ai >= 0 && bi > 0) {
    if (a === b) {
      return [ai, bi];
    }
    begs = [];
    left = str.length;
    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [begs.pop(), bi];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }
        bi = str.indexOf(b, i + 1);
      }
      i = ai < bi && ai >= 0 ? ai : bi;
    }
    if (begs.length) {
      result = [left, right];
    }
  }
  return result;
}
const balancedMatch$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: balancedMatch
}, [balancedMatch]);
const require$$0$3 = /* @__PURE__ */ getAugmentedNamespace(balancedMatch$1);
var balanced = require$$0$3;
var braceExpansion = expandTop;
var escSlash = "\0SLASH" + Math.random() + "\0";
var escOpen = "\0OPEN" + Math.random() + "\0";
var escClose = "\0CLOSE" + Math.random() + "\0";
var escComma = "\0COMMA" + Math.random() + "\0";
var escPeriod = "\0PERIOD" + Math.random() + "\0";
function numeric(str) {
  return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);
}
function escapeBraces(str) {
  return str.split("\\\\").join(escSlash).split("\\{").join(escOpen).split("\\}").join(escClose).split("\\,").join(escComma).split("\\.").join(escPeriod);
}
function unescapeBraces(str) {
  return str.split(escSlash).join("\\").split(escOpen).join("{").split(escClose).join("}").split(escComma).join(",").split(escPeriod).join(".");
}
function parseCommaParts(str) {
  if (!str)
    return [""];
  var parts = [];
  var m = balanced("{", "}", str);
  if (!m)
    return str.split(",");
  var pre = m.pre;
  var body = m.body;
  var post = m.post;
  var p = pre.split(",");
  p[p.length - 1] += "{" + body + "}";
  var postParts = parseCommaParts(post);
  if (post.length) {
    p[p.length - 1] += postParts.shift();
    p.push.apply(p, postParts);
  }
  parts.push.apply(parts, p);
  return parts;
}
function expandTop(str) {
  if (!str)
    return [];
  if (str.substr(0, 2) === "{}") {
    str = "\\{\\}" + str.substr(2);
  }
  return expand$1(escapeBraces(str), true).map(unescapeBraces);
}
function embrace(str) {
  return "{" + str + "}";
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}
function lte(i, y) {
  return i <= y;
}
function gte(i, y) {
  return i >= y;
}
function expand$1(str, isTop) {
  var expansions = [];
  var m = balanced("{", "}", str);
  if (!m)
    return [str];
  var pre = m.pre;
  var post = m.post.length ? expand$1(m.post, false) : [""];
  if (/\$$/.test(m.pre)) {
    for (var k = 0; k < post.length; k++) {
      var expansion = pre + "{" + m.body + "}" + post[k];
      expansions.push(expansion);
    }
  } else {
    var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
    var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
    var isSequence = isNumericSequence || isAlphaSequence;
    var isOptions = m.body.indexOf(",") >= 0;
    if (!isSequence && !isOptions) {
      if (m.post.match(/,.*\}/)) {
        str = m.pre + "{" + m.body + escClose + m.post;
        return expand$1(str);
      }
      return [str];
    }
    var n;
    if (isSequence) {
      n = m.body.split(/\.\./);
    } else {
      n = parseCommaParts(m.body);
      if (n.length === 1) {
        n = expand$1(n[0], false).map(embrace);
        if (n.length === 1) {
          return post.map(function(p) {
            return m.pre + n[0] + p;
          });
        }
      }
    }
    var N;
    if (isSequence) {
      var x = numeric(n[0]);
      var y = numeric(n[1]);
      var width = Math.max(n[0].length, n[1].length);
      var incr = n.length == 3 ? Math.abs(numeric(n[2])) : 1;
      var test = lte;
      var reverse = y < x;
      if (reverse) {
        incr *= -1;
        test = gte;
      }
      var pad = n.some(isPadded);
      N = [];
      for (var i = x; test(i, y); i += incr) {
        var c;
        if (isAlphaSequence) {
          c = String.fromCharCode(i);
          if (c === "\\")
            c = "";
        } else {
          c = String(i);
          if (pad) {
            var need = width - c.length;
            if (need > 0) {
              var z = new Array(need + 1).join("0");
              if (i < 0)
                c = "-" + z + c.slice(1);
              else
                c = z + c;
            }
          }
        }
        N.push(c);
      }
    } else {
      N = [];
      for (var j = 0; j < n.length; j++) {
        N.push.apply(N, expand$1(n[j], false));
      }
    }
    for (var j = 0; j < N.length; j++) {
      for (var k = 0; k < post.length; k++) {
        var expansion = pre + N[j] + post[k];
        if (!isTop || isSequence || expansion)
          expansions.push(expansion);
      }
    }
  }
  return expansions;
}
const braceExpansion$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: braceExpansion
}, [braceExpansion]);
const require$$1$3 = /* @__PURE__ */ getAugmentedNamespace(braceExpansion$1);
const minimatch$2 = minimatch_1 = (p, pattern, options = {}) => {
  assertValidPattern(pattern);
  if (!options.nocomment && pattern.charAt(0) === "#") {
    return false;
  }
  return new Minimatch(pattern, options).match(p);
};
var minimatch_1 = minimatch$2;
const path = require$$0$4;
minimatch$2.sep = path.sep;
const GLOBSTAR = Symbol("globstar **");
minimatch$2.GLOBSTAR = GLOBSTAR;
const expand = require$$1$3;
const plTypes = {
  "!": { open: "(?:(?!(?:", close: "))[^/]*?)" },
  "?": { open: "(?:", close: ")?" },
  "+": { open: "(?:", close: ")+" },
  "*": { open: "(?:", close: ")*" },
  "@": { open: "(?:", close: ")" }
};
const qmark = "[^/]";
const star = qmark + "*?";
const twoStarDot = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?";
const twoStarNoDot = "(?:(?!(?:\\/|^)\\.).)*?";
const charSet = (s) => s.split("").reduce((set, c) => {
  set[c] = true;
  return set;
}, {});
const reSpecials = charSet("().*{}+?[]^$\\!");
const addPatternStartSet = charSet("[.(");
const slashSplit = /\/+/;
minimatch$2.filter = (pattern, options = {}) => (p, i, list) => minimatch$2(p, pattern, options);
const ext = (a, b = {}) => {
  const t = {};
  Object.keys(a).forEach((k) => t[k] = a[k]);
  Object.keys(b).forEach((k) => t[k] = b[k]);
  return t;
};
minimatch$2.defaults = (def) => {
  if (!def || typeof def !== "object" || !Object.keys(def).length) {
    return minimatch$2;
  }
  const orig = minimatch$2;
  const m = (p, pattern, options) => orig(p, pattern, ext(def, options));
  m.Minimatch = class Minimatch extends orig.Minimatch {
    constructor(pattern, options) {
      super(pattern, ext(def, options));
    }
  };
  m.Minimatch.defaults = (options) => orig.defaults(ext(def, options)).Minimatch;
  m.filter = (pattern, options) => orig.filter(pattern, ext(def, options));
  m.defaults = (options) => orig.defaults(ext(def, options));
  m.makeRe = (pattern, options) => orig.makeRe(pattern, ext(def, options));
  m.braceExpand = (pattern, options) => orig.braceExpand(pattern, ext(def, options));
  m.match = (list, pattern, options) => orig.match(list, pattern, ext(def, options));
  return m;
};
minimatch$2.braceExpand = (pattern, options) => braceExpand(pattern, options);
const braceExpand = (pattern, options = {}) => {
  assertValidPattern(pattern);
  if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
    return [pattern];
  }
  return expand(pattern);
};
const MAX_PATTERN_LENGTH = 1024 * 64;
const assertValidPattern = (pattern) => {
  if (typeof pattern !== "string") {
    throw new TypeError("invalid pattern");
  }
  if (pattern.length > MAX_PATTERN_LENGTH) {
    throw new TypeError("pattern is too long");
  }
};
const SUBPARSE = Symbol("subparse");
minimatch$2.makeRe = (pattern, options) => new Minimatch(pattern, options || {}).makeRe();
minimatch$2.match = (list, pattern, options = {}) => {
  const mm = new Minimatch(pattern, options);
  list = list.filter((f) => mm.match(f));
  if (mm.options.nonull && !list.length) {
    list.push(pattern);
  }
  return list;
};
const globUnescape = (s) => s.replace(/\\(.)/g, "$1");
const charUnescape = (s) => s.replace(/\\([^-\]])/g, "$1");
const regExpEscape = (s) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
const braExpEscape = (s) => s.replace(/[[\]\\]/g, "\\$&");
class Minimatch {
  constructor(pattern, options) {
    assertValidPattern(pattern);
    if (!options)
      options = {};
    this.options = options;
    this.set = [];
    this.pattern = pattern;
    this.windowsPathsNoEscape = !!options.windowsPathsNoEscape || options.allowWindowsEscape === false;
    if (this.windowsPathsNoEscape) {
      this.pattern = this.pattern.replace(/\\/g, "/");
    }
    this.regexp = null;
    this.negate = false;
    this.comment = false;
    this.empty = false;
    this.partial = !!options.partial;
    this.make();
  }
  debug() {
  }
  make() {
    const pattern = this.pattern;
    const options = this.options;
    if (!options.nocomment && pattern.charAt(0) === "#") {
      this.comment = true;
      return;
    }
    if (!pattern) {
      this.empty = true;
      return;
    }
    this.parseNegate();
    let set = this.globSet = this.braceExpand();
    if (options.debug)
      this.debug = (...args) => console.error(...args);
    this.debug(this.pattern, set);
    set = this.globParts = set.map((s) => s.split(slashSplit));
    this.debug(this.pattern, set);
    set = set.map((s, si, set2) => s.map(this.parse, this));
    this.debug(this.pattern, set);
    set = set.filter((s) => s.indexOf(false) === -1);
    this.debug(this.pattern, set);
    this.set = set;
  }
  parseNegate() {
    if (this.options.nonegate)
      return;
    const pattern = this.pattern;
    let negate = false;
    let negateOffset = 0;
    for (let i = 0; i < pattern.length && pattern.charAt(i) === "!"; i++) {
      negate = !negate;
      negateOffset++;
    }
    if (negateOffset)
      this.pattern = pattern.slice(negateOffset);
    this.negate = negate;
  }
  // set partial to true to test if, for example,
  // "/a/b" matches the start of "/*/b/*/d"
  // Partial means, if you run out of file before you run
  // out of pattern, then that's fine, as long as all
  // the parts match.
  matchOne(file, pattern, partial) {
    var options = this.options;
    this.debug(
      "matchOne",
      { "this": this, file, pattern }
    );
    this.debug("matchOne", file.length, pattern.length);
    for (var fi = 0, pi = 0, fl = file.length, pl = pattern.length; fi < fl && pi < pl; fi++, pi++) {
      this.debug("matchOne loop");
      var p = pattern[pi];
      var f = file[fi];
      this.debug(pattern, p, f);
      if (p === false)
        return false;
      if (p === GLOBSTAR) {
        this.debug("GLOBSTAR", [pattern, p, f]);
        var fr = fi;
        var pr = pi + 1;
        if (pr === pl) {
          this.debug("** at the end");
          for (; fi < fl; fi++) {
            if (file[fi] === "." || file[fi] === ".." || !options.dot && file[fi].charAt(0) === ".")
              return false;
          }
          return true;
        }
        while (fr < fl) {
          var swallowee = file[fr];
          this.debug("\nglobstar while", file, fr, pattern, pr, swallowee);
          if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
            this.debug("globstar found match!", fr, fl, swallowee);
            return true;
          } else {
            if (swallowee === "." || swallowee === ".." || !options.dot && swallowee.charAt(0) === ".") {
              this.debug("dot detected!", file, fr, pattern, pr);
              break;
            }
            this.debug("globstar swallow a segment, and continue");
            fr++;
          }
        }
        if (partial) {
          this.debug("\n>>> no match, partial?", file, fr, pattern, pr);
          if (fr === fl)
            return true;
        }
        return false;
      }
      var hit;
      if (typeof p === "string") {
        hit = f === p;
        this.debug("string match", p, f, hit);
      } else {
        hit = f.match(p);
        this.debug("pattern match", p, f, hit);
      }
      if (!hit)
        return false;
    }
    if (fi === fl && pi === pl) {
      return true;
    } else if (fi === fl) {
      return partial;
    } else if (pi === pl) {
      return fi === fl - 1 && file[fi] === "";
    }
    throw new Error("wtf?");
  }
  braceExpand() {
    return braceExpand(this.pattern, this.options);
  }
  parse(pattern, isSub) {
    assertValidPattern(pattern);
    const options = this.options;
    if (pattern === "**") {
      if (!options.noglobstar)
        return GLOBSTAR;
      else
        pattern = "*";
    }
    if (pattern === "")
      return "";
    let re = "";
    let hasMagic = false;
    let escaping = false;
    const patternListStack = [];
    const negativeLists = [];
    let stateChar;
    let inClass = false;
    let reClassStart = -1;
    let classStart = -1;
    let cs;
    let pl;
    let sp;
    let dotTravAllowed = pattern.charAt(0) === ".";
    let dotFileAllowed = options.dot || dotTravAllowed;
    const patternStart = () => dotTravAllowed ? "" : dotFileAllowed ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)";
    const subPatternStart = (p) => p.charAt(0) === "." ? "" : options.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)";
    const clearStateChar = () => {
      if (stateChar) {
        switch (stateChar) {
          case "*":
            re += star;
            hasMagic = true;
            break;
          case "?":
            re += qmark;
            hasMagic = true;
            break;
          default:
            re += "\\" + stateChar;
            break;
        }
        this.debug("clearStateChar %j %j", stateChar, re);
        stateChar = false;
      }
    };
    for (let i = 0, c; i < pattern.length && (c = pattern.charAt(i)); i++) {
      this.debug("%s	%s %s %j", pattern, i, re, c);
      if (escaping) {
        if (c === "/") {
          return false;
        }
        if (reSpecials[c]) {
          re += "\\";
        }
        re += c;
        escaping = false;
        continue;
      }
      switch (c) {
        case "/": {
          return false;
        }
        case "\\":
          if (inClass && pattern.charAt(i + 1) === "-") {
            re += c;
            continue;
          }
          clearStateChar();
          escaping = true;
          continue;
        case "?":
        case "*":
        case "+":
        case "@":
        case "!":
          this.debug("%s	%s %s %j <-- stateChar", pattern, i, re, c);
          if (inClass) {
            this.debug("  in class");
            if (c === "!" && i === classStart + 1)
              c = "^";
            re += c;
            continue;
          }
          this.debug("call clearStateChar %j", stateChar);
          clearStateChar();
          stateChar = c;
          if (options.noext)
            clearStateChar();
          continue;
        case "(": {
          if (inClass) {
            re += "(";
            continue;
          }
          if (!stateChar) {
            re += "\\(";
            continue;
          }
          const plEntry = {
            type: stateChar,
            start: i - 1,
            reStart: re.length,
            open: plTypes[stateChar].open,
            close: plTypes[stateChar].close
          };
          this.debug(this.pattern, "	", plEntry);
          patternListStack.push(plEntry);
          re += plEntry.open;
          if (plEntry.start === 0 && plEntry.type !== "!") {
            dotTravAllowed = true;
            re += subPatternStart(pattern.slice(i + 1));
          }
          this.debug("plType %j %j", stateChar, re);
          stateChar = false;
          continue;
        }
        case ")": {
          const plEntry = patternListStack[patternListStack.length - 1];
          if (inClass || !plEntry) {
            re += "\\)";
            continue;
          }
          patternListStack.pop();
          clearStateChar();
          hasMagic = true;
          pl = plEntry;
          re += pl.close;
          if (pl.type === "!") {
            negativeLists.push(Object.assign(pl, { reEnd: re.length }));
          }
          continue;
        }
        case "|": {
          const plEntry = patternListStack[patternListStack.length - 1];
          if (inClass || !plEntry) {
            re += "\\|";
            continue;
          }
          clearStateChar();
          re += "|";
          if (plEntry.start === 0 && plEntry.type !== "!") {
            dotTravAllowed = true;
            re += subPatternStart(pattern.slice(i + 1));
          }
          continue;
        }
        case "[":
          clearStateChar();
          if (inClass) {
            re += "\\" + c;
            continue;
          }
          inClass = true;
          classStart = i;
          reClassStart = re.length;
          re += c;
          continue;
        case "]":
          if (i === classStart + 1 || !inClass) {
            re += "\\" + c;
            continue;
          }
          cs = pattern.substring(classStart + 1, i);
          try {
            RegExp("[" + braExpEscape(charUnescape(cs)) + "]");
            re += c;
          } catch (er) {
            re = re.substring(0, reClassStart) + "(?:$.)";
          }
          hasMagic = true;
          inClass = false;
          continue;
        default:
          clearStateChar();
          if (reSpecials[c] && !(c === "^" && inClass)) {
            re += "\\";
          }
          re += c;
          break;
      }
    }
    if (inClass) {
      cs = pattern.slice(classStart + 1);
      sp = this.parse(cs, SUBPARSE);
      re = re.substring(0, reClassStart) + "\\[" + sp[0];
      hasMagic = hasMagic || sp[1];
    }
    for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
      let tail;
      tail = re.slice(pl.reStart + pl.open.length);
      this.debug("setting tail", re, pl);
      tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, (_, $1, $2) => {
        if (!$2) {
          $2 = "\\";
        }
        return $1 + $1 + $2 + "|";
      });
      this.debug("tail=%j\n   %s", tail, tail, pl, re);
      const t = pl.type === "*" ? star : pl.type === "?" ? qmark : "\\" + pl.type;
      hasMagic = true;
      re = re.slice(0, pl.reStart) + t + "\\(" + tail;
    }
    clearStateChar();
    if (escaping) {
      re += "\\\\";
    }
    const addPatternStart = addPatternStartSet[re.charAt(0)];
    for (let n = negativeLists.length - 1; n > -1; n--) {
      const nl = negativeLists[n];
      const nlBefore = re.slice(0, nl.reStart);
      const nlFirst = re.slice(nl.reStart, nl.reEnd - 8);
      let nlAfter = re.slice(nl.reEnd);
      const nlLast = re.slice(nl.reEnd - 8, nl.reEnd) + nlAfter;
      const closeParensBefore = nlBefore.split(")").length;
      const openParensBefore = nlBefore.split("(").length - closeParensBefore;
      let cleanAfter = nlAfter;
      for (let i = 0; i < openParensBefore; i++) {
        cleanAfter = cleanAfter.replace(/\)[+*?]?/, "");
      }
      nlAfter = cleanAfter;
      const dollar = nlAfter === "" && isSub !== SUBPARSE ? "(?:$|\\/)" : "";
      re = nlBefore + nlFirst + nlAfter + dollar + nlLast;
    }
    if (re !== "" && hasMagic) {
      re = "(?=.)" + re;
    }
    if (addPatternStart) {
      re = patternStart() + re;
    }
    if (isSub === SUBPARSE) {
      return [re, hasMagic];
    }
    if (options.nocase && !hasMagic) {
      hasMagic = pattern.toUpperCase() !== pattern.toLowerCase();
    }
    if (!hasMagic) {
      return globUnescape(pattern);
    }
    const flags = options.nocase ? "i" : "";
    try {
      return Object.assign(new RegExp("^" + re + "$", flags), {
        _glob: pattern,
        _src: re
      });
    } catch (er) {
      return new RegExp("$.");
    }
  }
  makeRe() {
    if (this.regexp || this.regexp === false)
      return this.regexp;
    const set = this.set;
    if (!set.length) {
      this.regexp = false;
      return this.regexp;
    }
    const options = this.options;
    const twoStar = options.noglobstar ? star : options.dot ? twoStarDot : twoStarNoDot;
    const flags = options.nocase ? "i" : "";
    let re = set.map((pattern) => {
      pattern = pattern.map(
        (p) => typeof p === "string" ? regExpEscape(p) : p === GLOBSTAR ? GLOBSTAR : p._src
      ).reduce((set2, p) => {
        if (!(set2[set2.length - 1] === GLOBSTAR && p === GLOBSTAR)) {
          set2.push(p);
        }
        return set2;
      }, []);
      pattern.forEach((p, i) => {
        if (p !== GLOBSTAR || pattern[i - 1] === GLOBSTAR) {
          return;
        }
        if (i === 0) {
          if (pattern.length > 1) {
            pattern[i + 1] = "(?:\\/|" + twoStar + "\\/)?" + pattern[i + 1];
          } else {
            pattern[i] = twoStar;
          }
        } else if (i === pattern.length - 1) {
          pattern[i - 1] += "(?:\\/|" + twoStar + ")?";
        } else {
          pattern[i - 1] += "(?:\\/|\\/" + twoStar + "\\/)" + pattern[i + 1];
          pattern[i + 1] = GLOBSTAR;
        }
      });
      return pattern.filter((p) => p !== GLOBSTAR).join("/");
    }).join("|");
    re = "^(?:" + re + ")$";
    if (this.negate)
      re = "^(?!" + re + ").*$";
    try {
      this.regexp = new RegExp(re, flags);
    } catch (ex) {
      this.regexp = false;
    }
    return this.regexp;
  }
  match(f, partial = this.partial) {
    this.debug("match", f, this.pattern);
    if (this.comment)
      return false;
    if (this.empty)
      return f === "";
    if (f === "/" && partial)
      return true;
    const options = this.options;
    if (path.sep !== "/") {
      f = f.split(path.sep).join("/");
    }
    f = f.split(slashSplit);
    this.debug(this.pattern, "split", f);
    const set = this.set;
    this.debug(this.pattern, "set", set);
    let filename;
    for (let i = f.length - 1; i >= 0; i--) {
      filename = f[i];
      if (filename)
        break;
    }
    for (let i = 0; i < set.length; i++) {
      const pattern = set[i];
      let file = f;
      if (options.matchBase && pattern.length === 1) {
        file = [filename];
      }
      const hit = this.matchOne(file, pattern, partial);
      if (hit) {
        if (options.flipNegate)
          return true;
        return !this.negate;
      }
    }
    if (options.flipNegate)
      return false;
    return this.negate;
  }
  static defaults(def) {
    return minimatch$2.defaults(def).Minimatch;
  }
}
minimatch$2.Minimatch = Minimatch;
const minimatch_1$1 = minimatch_1;
const minimatch$3 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: minimatch_1$1
}, [minimatch_1]);
const require$$1$2 = /* @__PURE__ */ getAugmentedNamespace(minimatch$3);
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.DiagnosticFeature = exports2.DiagnosticPullMode = exports2.vsdiag = void 0;
  const minimatch2 = require$$1$2;
  const vscode_12 = require$$0$9;
  const vscode_languageserver_protocol_12 = require$$0$5;
  const uuid_1 = require$$6$1;
  const features_12 = require$$1$4;
  function ensure2(target, key) {
    if (target[key] === void 0) {
      target[key] = {};
    }
    return target[key];
  }
  var vsdiag;
  (function(vsdiag2) {
    (function(DocumentDiagnosticReportKind) {
      DocumentDiagnosticReportKind["full"] = "full";
      DocumentDiagnosticReportKind["unChanged"] = "unChanged";
    })(vsdiag2.DocumentDiagnosticReportKind || (vsdiag2.DocumentDiagnosticReportKind = {}));
  })(vsdiag = exports2.vsdiag || (exports2.vsdiag = {}));
  var DiagnosticPullMode;
  (function(DiagnosticPullMode2) {
    DiagnosticPullMode2["onType"] = "onType";
    DiagnosticPullMode2["onSave"] = "onSave";
  })(DiagnosticPullMode = exports2.DiagnosticPullMode || (exports2.DiagnosticPullMode = {}));
  var RequestStateKind;
  (function(RequestStateKind2) {
    RequestStateKind2["active"] = "open";
    RequestStateKind2["reschedule"] = "reschedule";
    RequestStateKind2["outDated"] = "drop";
  })(RequestStateKind || (RequestStateKind = {}));
  class Tabs {
    constructor() {
      this.open = /* @__PURE__ */ new Set();
      this._onOpen = new vscode_12.EventEmitter();
      this._onClose = new vscode_12.EventEmitter();
      Tabs.fillTabResources(this.open);
      const openTabsHandler = (event) => {
        if (event.closed.length === 0 && event.opened.length === 0) {
          return;
        }
        const oldTabs = this.open;
        const currentTabs = /* @__PURE__ */ new Set();
        Tabs.fillTabResources(currentTabs);
        const closed = /* @__PURE__ */ new Set();
        const opened = new Set(currentTabs);
        for (const tab of oldTabs.values()) {
          if (currentTabs.has(tab)) {
            opened.delete(tab);
          } else {
            closed.add(tab);
          }
        }
        this.open = currentTabs;
        if (closed.size > 0) {
          const toFire = /* @__PURE__ */ new Set();
          for (const item of closed) {
            toFire.add(vscode_12.Uri.parse(item));
          }
          this._onClose.fire(toFire);
        }
        if (opened.size > 0) {
          const toFire = /* @__PURE__ */ new Set();
          for (const item of opened) {
            toFire.add(vscode_12.Uri.parse(item));
          }
          this._onOpen.fire(toFire);
        }
      };
      if (vscode_12.window.tabGroups.onDidChangeTabs !== void 0) {
        this.disposable = vscode_12.window.tabGroups.onDidChangeTabs(openTabsHandler);
      } else {
        this.disposable = { dispose: () => {
        } };
      }
    }
    get onClose() {
      return this._onClose.event;
    }
    get onOpen() {
      return this._onOpen.event;
    }
    dispose() {
      this.disposable.dispose();
    }
    isActive(document) {
      var _a, _b;
      return document instanceof vscode_12.Uri ? ((_a = vscode_12.window.activeTextEditor) == null ? void 0 : _a.document.uri) === document : ((_b = vscode_12.window.activeTextEditor) == null ? void 0 : _b.document) === document;
    }
    isVisible(document) {
      const uri = document instanceof vscode_12.Uri ? document : document.uri;
      return this.open.has(uri.toString());
    }
    getTabResources() {
      const result = /* @__PURE__ */ new Set();
      Tabs.fillTabResources(/* @__PURE__ */ new Set(), result);
      return result;
    }
    static fillTabResources(strings, uris) {
      const seen = strings ?? /* @__PURE__ */ new Set();
      for (const group2 of vscode_12.window.tabGroups.all) {
        for (const tab of group2.tabs) {
          const input = tab.input;
          let uri;
          if (input instanceof vscode_12.TabInputText) {
            uri = input.uri;
          } else if (input instanceof vscode_12.TabInputTextDiff) {
            uri = input.modified;
          }
          if (uri !== void 0 && !seen.has(uri.toString())) {
            seen.add(uri.toString());
            uris !== void 0 && uris.add(uri);
          }
        }
      }
    }
  }
  var PullState;
  (function(PullState2) {
    PullState2[PullState2["document"] = 1] = "document";
    PullState2[PullState2["workspace"] = 2] = "workspace";
  })(PullState || (PullState = {}));
  var DocumentOrUri;
  (function(DocumentOrUri2) {
    function asKey(document) {
      return document instanceof vscode_12.Uri ? document.toString() : document.uri.toString();
    }
    DocumentOrUri2.asKey = asKey;
  })(DocumentOrUri || (DocumentOrUri = {}));
  class DocumentPullStateTracker {
    constructor() {
      this.documentPullStates = /* @__PURE__ */ new Map();
      this.workspacePullStates = /* @__PURE__ */ new Map();
    }
    track(kind, document, arg1) {
      const states = kind === PullState.document ? this.documentPullStates : this.workspacePullStates;
      const [key, uri, version] = document instanceof vscode_12.Uri ? [document.toString(), document, arg1] : [document.uri.toString(), document.uri, document.version];
      let state = states.get(key);
      if (state === void 0) {
        state = { document: uri, pulledVersion: version, resultId: void 0 };
        states.set(key, state);
      }
      return state;
    }
    update(kind, document, arg1, arg2) {
      const states = kind === PullState.document ? this.documentPullStates : this.workspacePullStates;
      const [key, uri, version, resultId] = document instanceof vscode_12.Uri ? [document.toString(), document, arg1, arg2] : [document.uri.toString(), document.uri, document.version, arg1];
      let state = states.get(key);
      if (state === void 0) {
        state = { document: uri, pulledVersion: version, resultId };
        states.set(key, state);
      } else {
        state.pulledVersion = version;
        state.resultId = resultId;
      }
    }
    unTrack(kind, document) {
      const key = DocumentOrUri.asKey(document);
      const states = kind === PullState.document ? this.documentPullStates : this.workspacePullStates;
      states.delete(key);
    }
    tracks(kind, document) {
      const key = DocumentOrUri.asKey(document);
      const states = kind === PullState.document ? this.documentPullStates : this.workspacePullStates;
      return states.has(key);
    }
    getResultId(kind, document) {
      var _a;
      const key = DocumentOrUri.asKey(document);
      const states = kind === PullState.document ? this.documentPullStates : this.workspacePullStates;
      return (_a = states.get(key)) == null ? void 0 : _a.resultId;
    }
    getAllResultIds() {
      const result = [];
      for (let [uri, value] of this.workspacePullStates) {
        if (this.documentPullStates.has(uri)) {
          value = this.documentPullStates.get(uri);
        }
        if (value.resultId !== void 0) {
          result.push({ uri, value: value.resultId });
        }
      }
      return result;
    }
  }
  class DiagnosticRequestor {
    constructor(client2, tabs, options) {
      this.client = client2;
      this.tabs = tabs;
      this.options = options;
      this.isDisposed = false;
      this.onDidChangeDiagnosticsEmitter = new vscode_12.EventEmitter();
      this.provider = this.createProvider();
      this.diagnostics = vscode_12.languages.createDiagnosticCollection(options.identifier);
      this.openRequests = /* @__PURE__ */ new Map();
      this.documentStates = new DocumentPullStateTracker();
      this.workspaceErrorCounter = 0;
    }
    knows(kind, document) {
      const uri = document instanceof vscode_12.Uri ? document : document.uri;
      return this.documentStates.tracks(kind, document) || this.openRequests.has(uri.toString());
    }
    forget(kind, document) {
      this.documentStates.unTrack(kind, document);
    }
    pull(document, cb) {
      if (this.isDisposed) {
        return;
      }
      const uri = document instanceof vscode_12.Uri ? document : document.uri;
      this.pullAsync(document).then(() => {
        if (cb) {
          cb();
        }
      }, (error2) => {
        this.client.error(`Document pull failed for text document ${uri.toString()}`, error2, false);
      });
    }
    async pullAsync(document, version) {
      if (this.isDisposed) {
        return;
      }
      const isUri = document instanceof vscode_12.Uri;
      const uri = isUri ? document : document.uri;
      const key = uri.toString();
      version = isUri ? version : document.version;
      const currentRequestState = this.openRequests.get(key);
      const documentState = isUri ? this.documentStates.track(PullState.document, document, version) : this.documentStates.track(PullState.document, document);
      if (currentRequestState === void 0) {
        const tokenSource = new vscode_12.CancellationTokenSource();
        this.openRequests.set(key, { state: RequestStateKind.active, document, version, tokenSource });
        let report;
        let afterState;
        try {
          report = await this.provider.provideDiagnostics(document, documentState.resultId, tokenSource.token) ?? { kind: vsdiag.DocumentDiagnosticReportKind.full, items: [] };
        } catch (error2) {
          if (error2 instanceof features_12.LSPCancellationError && vscode_languageserver_protocol_12.DiagnosticServerCancellationData.is(error2.data) && error2.data.retriggerRequest === false) {
            afterState = { state: RequestStateKind.outDated, document };
          }
          if (afterState === void 0 && error2 instanceof vscode_12.CancellationError) {
            afterState = { state: RequestStateKind.reschedule, document };
          } else {
            throw error2;
          }
        }
        afterState = afterState ?? this.openRequests.get(key);
        if (afterState === void 0) {
          this.client.error(`Lost request state in diagnostic pull model. Clearing diagnostics for ${key}`);
          this.diagnostics.delete(uri);
          return;
        }
        this.openRequests.delete(key);
        if (!this.tabs.isVisible(document)) {
          this.documentStates.unTrack(PullState.document, document);
          return;
        }
        if (afterState.state === RequestStateKind.outDated) {
          return;
        }
        if (report !== void 0) {
          if (report.kind === vsdiag.DocumentDiagnosticReportKind.full) {
            this.diagnostics.set(uri, report.items);
          }
          documentState.pulledVersion = version;
          documentState.resultId = report.resultId;
        }
        if (afterState.state === RequestStateKind.reschedule) {
          this.pull(document);
        }
      } else {
        if (currentRequestState.state === RequestStateKind.active) {
          currentRequestState.tokenSource.cancel();
          this.openRequests.set(key, { state: RequestStateKind.reschedule, document: currentRequestState.document });
        } else if (currentRequestState.state === RequestStateKind.outDated) {
          this.openRequests.set(key, { state: RequestStateKind.reschedule, document: currentRequestState.document });
        }
      }
    }
    forgetDocument(document) {
      const uri = document instanceof vscode_12.Uri ? document : document.uri;
      const key = uri.toString();
      const request = this.openRequests.get(key);
      if (this.options.workspaceDiagnostics) {
        if (request !== void 0) {
          this.openRequests.set(key, { state: RequestStateKind.reschedule, document });
        } else {
          this.pull(document, () => {
            this.forget(PullState.document, document);
          });
        }
      } else {
        if (request !== void 0) {
          if (request.state === RequestStateKind.active) {
            request.tokenSource.cancel();
          }
          this.openRequests.set(key, { state: RequestStateKind.outDated, document });
        }
        this.diagnostics.delete(uri);
        this.forget(PullState.document, document);
      }
    }
    pullWorkspace() {
      if (this.isDisposed) {
        return;
      }
      this.pullWorkspaceAsync().then(() => {
        this.workspaceTimeout = (0, vscode_languageserver_protocol_12.RAL)().timer.setTimeout(() => {
          this.pullWorkspace();
        }, 2e3);
      }, (error2) => {
        if (!(error2 instanceof features_12.LSPCancellationError) && !vscode_languageserver_protocol_12.DiagnosticServerCancellationData.is(error2.data)) {
          this.client.error(`Workspace diagnostic pull failed.`, error2, false);
          this.workspaceErrorCounter++;
        }
        if (this.workspaceErrorCounter <= 5) {
          this.workspaceTimeout = (0, vscode_languageserver_protocol_12.RAL)().timer.setTimeout(() => {
            this.pullWorkspace();
          }, 2e3);
        }
      });
    }
    async pullWorkspaceAsync() {
      if (!this.provider.provideWorkspaceDiagnostics || this.isDisposed) {
        return;
      }
      if (this.workspaceCancellation !== void 0) {
        this.workspaceCancellation.cancel();
        this.workspaceCancellation = void 0;
      }
      this.workspaceCancellation = new vscode_12.CancellationTokenSource();
      const previousResultIds = this.documentStates.getAllResultIds().map((item) => {
        return {
          uri: this.client.protocol2CodeConverter.asUri(item.uri),
          value: item.value
        };
      });
      await this.provider.provideWorkspaceDiagnostics(previousResultIds, this.workspaceCancellation.token, (chunk) => {
        if (!chunk || this.isDisposed) {
          return;
        }
        for (const item of chunk.items) {
          if (item.kind === vsdiag.DocumentDiagnosticReportKind.full) {
            if (!this.documentStates.tracks(PullState.document, item.uri)) {
              this.diagnostics.set(item.uri, item.items);
            }
          }
          this.documentStates.update(PullState.workspace, item.uri, item.version ?? void 0, item.resultId);
        }
      });
    }
    createProvider() {
      const result = {
        onDidChangeDiagnostics: this.onDidChangeDiagnosticsEmitter.event,
        provideDiagnostics: (document, previousResultId, token) => {
          const provideDiagnostics = (document2, previousResultId2, token2) => {
            const params = {
              identifier: this.options.identifier,
              textDocument: { uri: this.client.code2ProtocolConverter.asUri(document2 instanceof vscode_12.Uri ? document2 : document2.uri) },
              previousResultId: previousResultId2
            };
            if (this.isDisposed === true || !this.client.isRunning()) {
              return { kind: vsdiag.DocumentDiagnosticReportKind.full, items: [] };
            }
            return this.client.sendRequest(vscode_languageserver_protocol_12.DocumentDiagnosticRequest.type, params, token2).then(async (result2) => {
              if (result2 === void 0 || result2 === null || this.isDisposed || token2.isCancellationRequested) {
                return { kind: vsdiag.DocumentDiagnosticReportKind.full, items: [] };
              }
              if (result2.kind === vscode_languageserver_protocol_12.DocumentDiagnosticReportKind.Full) {
                return { kind: vsdiag.DocumentDiagnosticReportKind.full, resultId: result2.resultId, items: await this.client.protocol2CodeConverter.asDiagnostics(result2.items, token2) };
              } else {
                return { kind: vsdiag.DocumentDiagnosticReportKind.unChanged, resultId: result2.resultId };
              }
            }, (error2) => {
              return this.client.handleFailedRequest(vscode_languageserver_protocol_12.DocumentDiagnosticRequest.type, token2, error2, { kind: vsdiag.DocumentDiagnosticReportKind.full, items: [] });
            });
          };
          const middleware = this.client.middleware;
          return middleware.provideDiagnostics ? middleware.provideDiagnostics(document, previousResultId, token, provideDiagnostics) : provideDiagnostics(document, previousResultId, token);
        }
      };
      if (this.options.workspaceDiagnostics) {
        result.provideWorkspaceDiagnostics = (resultIds, token, resultReporter) => {
          const convertReport = async (report) => {
            if (report.kind === vscode_languageserver_protocol_12.DocumentDiagnosticReportKind.Full) {
              return {
                kind: vsdiag.DocumentDiagnosticReportKind.full,
                uri: this.client.protocol2CodeConverter.asUri(report.uri),
                resultId: report.resultId,
                version: report.version,
                items: await this.client.protocol2CodeConverter.asDiagnostics(report.items, token)
              };
            } else {
              return {
                kind: vsdiag.DocumentDiagnosticReportKind.unChanged,
                uri: this.client.protocol2CodeConverter.asUri(report.uri),
                resultId: report.resultId,
                version: report.version
              };
            }
          };
          const convertPreviousResultIds = (resultIds2) => {
            const converted = [];
            for (const item of resultIds2) {
              converted.push({ uri: this.client.code2ProtocolConverter.asUri(item.uri), value: item.value });
            }
            return converted;
          };
          const provideDiagnostics = (resultIds2, token2) => {
            const partialResultToken = (0, uuid_1.generateUuid)();
            const disposable2 = this.client.onProgress(vscode_languageserver_protocol_12.WorkspaceDiagnosticRequest.partialResult, partialResultToken, async (partialResult) => {
              if (partialResult === void 0 || partialResult === null) {
                resultReporter(null);
                return;
              }
              const converted = {
                items: []
              };
              for (const item of partialResult.items) {
                try {
                  converted.items.push(await convertReport(item));
                } catch (error2) {
                  this.client.error(`Converting workspace diagnostics failed.`, error2);
                }
              }
              resultReporter(converted);
            });
            const params = {
              identifier: this.options.identifier,
              previousResultIds: convertPreviousResultIds(resultIds2),
              partialResultToken
            };
            if (this.isDisposed === true || !this.client.isRunning()) {
              return { items: [] };
            }
            return this.client.sendRequest(vscode_languageserver_protocol_12.WorkspaceDiagnosticRequest.type, params, token2).then(async (result2) => {
              if (token2.isCancellationRequested) {
                return { items: [] };
              }
              const converted = {
                items: []
              };
              for (const item of result2.items) {
                converted.items.push(await convertReport(item));
              }
              disposable2.dispose();
              resultReporter(converted);
              return { items: [] };
            }, (error2) => {
              disposable2.dispose();
              return this.client.handleFailedRequest(vscode_languageserver_protocol_12.DocumentDiagnosticRequest.type, token2, error2, { items: [] });
            });
          };
          const middleware = this.client.middleware;
          return middleware.provideWorkspaceDiagnostics ? middleware.provideWorkspaceDiagnostics(resultIds, token, resultReporter, provideDiagnostics) : provideDiagnostics(resultIds, token);
        };
      }
      return result;
    }
    dispose() {
      var _a, _b;
      this.isDisposed = true;
      (_a = this.workspaceCancellation) == null ? void 0 : _a.cancel();
      (_b = this.workspaceTimeout) == null ? void 0 : _b.dispose();
      for (const [key, request] of this.openRequests) {
        if (request.state === RequestStateKind.active) {
          request.tokenSource.cancel();
        }
        this.openRequests.set(key, { state: RequestStateKind.outDated, document: request.document });
      }
      this.diagnostics.dispose();
    }
  }
  class BackgroundScheduler {
    constructor(diagnosticRequestor) {
      this.diagnosticRequestor = diagnosticRequestor;
      this.documents = new vscode_languageserver_protocol_12.LinkedMap();
      this.isDisposed = false;
    }
    add(document) {
      if (this.isDisposed === true) {
        return;
      }
      const key = DocumentOrUri.asKey(document);
      if (this.documents.has(key)) {
        return;
      }
      this.documents.set(key, document, vscode_languageserver_protocol_12.Touch.Last);
      this.trigger();
    }
    remove(document) {
      const key = DocumentOrUri.asKey(document);
      this.documents.delete(key);
      if (this.documents.size === 0) {
        this.stop();
      } else if (key === this.endDocumentKey()) {
        this.endDocument = this.documents.last;
      }
    }
    trigger() {
      if (this.isDisposed === true) {
        return;
      }
      if (this.intervalHandle !== void 0) {
        this.endDocument = this.documents.last;
        return;
      }
      this.endDocument = this.documents.last;
      this.intervalHandle = (0, vscode_languageserver_protocol_12.RAL)().timer.setInterval(() => {
        const document = this.documents.first;
        if (document !== void 0) {
          const key = DocumentOrUri.asKey(document);
          this.diagnosticRequestor.pull(document);
          this.documents.set(key, document, vscode_languageserver_protocol_12.Touch.Last);
          if (key === this.endDocumentKey()) {
            this.stop();
          }
        }
      }, 200);
    }
    dispose() {
      this.isDisposed = true;
      this.stop();
      this.documents.clear();
    }
    stop() {
      var _a;
      (_a = this.intervalHandle) == null ? void 0 : _a.dispose();
      this.intervalHandle = void 0;
      this.endDocument = void 0;
    }
    endDocumentKey() {
      return this.endDocument !== void 0 ? DocumentOrUri.asKey(this.endDocument) : void 0;
    }
  }
  class DiagnosticFeatureProviderImpl {
    constructor(client2, tabs, options) {
      var _a;
      const diagnosticPullOptions = client2.clientOptions.diagnosticPullOptions ?? { onChange: true, onSave: false };
      const documentSelector = client2.protocol2CodeConverter.asDocumentSelector(options.documentSelector);
      const disposables = [];
      const matchResource = (resource) => {
        const selector = options.documentSelector;
        if (diagnosticPullOptions.match !== void 0) {
          return diagnosticPullOptions.match(selector, resource);
        }
        for (const filter of selector) {
          if (!vscode_languageserver_protocol_12.TextDocumentFilter.is(filter)) {
            continue;
          }
          if (typeof filter === "string") {
            return false;
          }
          if (filter.language !== void 0 && filter.language !== "*") {
            return false;
          }
          if (filter.scheme !== void 0 && filter.scheme !== "*" && filter.scheme !== resource.scheme) {
            return false;
          }
          if (filter.pattern !== void 0) {
            const matcher = new minimatch2.Minimatch(filter.pattern, { noext: true });
            if (!matcher.makeRe()) {
              return false;
            }
            if (!matcher.match(resource.fsPath)) {
              return false;
            }
          }
        }
        return true;
      };
      const matches = (document) => {
        return document instanceof vscode_12.Uri ? matchResource(document) : vscode_12.languages.match(documentSelector, document) > 0 && tabs.isVisible(document);
      };
      const isActiveDocument = (document) => {
        var _a2;
        return document instanceof vscode_12.Uri ? ((_a2 = this.activeTextDocument) == null ? void 0 : _a2.uri.toString()) === document.toString() : this.activeTextDocument === document;
      };
      this.diagnosticRequestor = new DiagnosticRequestor(client2, tabs, options);
      this.backgroundScheduler = new BackgroundScheduler(this.diagnosticRequestor);
      const addToBackgroundIfNeeded = (document) => {
        if (!matches(document) || !options.interFileDependencies || isActiveDocument(document)) {
          return;
        }
        this.backgroundScheduler.add(document);
      };
      this.activeTextDocument = (_a = vscode_12.window.activeTextEditor) == null ? void 0 : _a.document;
      vscode_12.window.onDidChangeActiveTextEditor((editor) => {
        const oldActive = this.activeTextDocument;
        this.activeTextDocument = editor == null ? void 0 : editor.document;
        if (oldActive !== void 0) {
          addToBackgroundIfNeeded(oldActive);
        }
        if (this.activeTextDocument !== void 0) {
          this.backgroundScheduler.remove(this.activeTextDocument);
        }
      });
      const openFeature = client2.getFeature(vscode_languageserver_protocol_12.DidOpenTextDocumentNotification.method);
      disposables.push(openFeature.onNotificationSent((event) => {
        const textDocument = event.textDocument;
        if (this.diagnosticRequestor.knows(PullState.document, textDocument)) {
          return;
        }
        if (matches(textDocument)) {
          this.diagnosticRequestor.pull(textDocument, () => {
            addToBackgroundIfNeeded(textDocument);
          });
        }
      }));
      tabs.onOpen((opened) => {
        for (const resource of opened) {
          if (this.diagnosticRequestor.knows(PullState.document, resource)) {
            continue;
          }
          const uriStr = resource.toString();
          let textDocument;
          for (const item of vscode_12.workspace.textDocuments) {
            if (uriStr === item.uri.toString()) {
              textDocument = item;
              break;
            }
          }
          if (textDocument !== void 0 && matches(textDocument)) {
            this.diagnosticRequestor.pull(textDocument, () => {
              addToBackgroundIfNeeded(textDocument);
            });
          } else if (matches(resource)) {
            this.diagnosticRequestor.pull(resource, () => {
              addToBackgroundIfNeeded(resource);
            });
          }
        }
      });
      const pulledTextDocuments = /* @__PURE__ */ new Set();
      for (const textDocument of vscode_12.workspace.textDocuments) {
        if (matches(textDocument)) {
          this.diagnosticRequestor.pull(textDocument, () => {
            addToBackgroundIfNeeded(textDocument);
          });
          pulledTextDocuments.add(textDocument.uri.toString());
        }
      }
      if (diagnosticPullOptions.onTabs === true) {
        for (const resource of tabs.getTabResources()) {
          if (!pulledTextDocuments.has(resource.toString()) && matches(resource)) {
            this.diagnosticRequestor.pull(resource, () => {
              addToBackgroundIfNeeded(resource);
            });
          }
        }
      }
      if (diagnosticPullOptions.onChange === true) {
        const changeFeature = client2.getFeature(vscode_languageserver_protocol_12.DidChangeTextDocumentNotification.method);
        disposables.push(changeFeature.onNotificationSent(async (event) => {
          const textDocument = event.textDocument;
          if ((diagnosticPullOptions.filter === void 0 || !diagnosticPullOptions.filter(textDocument, DiagnosticPullMode.onType)) && this.diagnosticRequestor.knows(PullState.document, textDocument)) {
            this.diagnosticRequestor.pull(textDocument, () => {
              this.backgroundScheduler.trigger();
            });
          }
        }));
      }
      if (diagnosticPullOptions.onSave === true) {
        const saveFeature = client2.getFeature(vscode_languageserver_protocol_12.DidSaveTextDocumentNotification.method);
        disposables.push(saveFeature.onNotificationSent((event) => {
          const textDocument = event.textDocument;
          if ((diagnosticPullOptions.filter === void 0 || !diagnosticPullOptions.filter(textDocument, DiagnosticPullMode.onSave)) && this.diagnosticRequestor.knows(PullState.document, textDocument)) {
            this.diagnosticRequestor.pull(event.textDocument, () => {
              this.backgroundScheduler.trigger();
            });
          }
        }));
      }
      const closeFeature = client2.getFeature(vscode_languageserver_protocol_12.DidCloseTextDocumentNotification.method);
      disposables.push(closeFeature.onNotificationSent((event) => {
        this.cleanUpDocument(event.textDocument);
      }));
      tabs.onClose((closed) => {
        for (const document of closed) {
          this.cleanUpDocument(document);
        }
      });
      this.diagnosticRequestor.onDidChangeDiagnosticsEmitter.event(() => {
        for (const textDocument of vscode_12.workspace.textDocuments) {
          if (matches(textDocument)) {
            this.diagnosticRequestor.pull(textDocument);
          }
        }
      });
      if (options.workspaceDiagnostics === true && options.identifier !== "da348dc5-c30a-4515-9d98-31ff3be38d14") {
        this.diagnosticRequestor.pullWorkspace();
      }
      this.disposable = vscode_12.Disposable.from(...disposables, this.backgroundScheduler, this.diagnosticRequestor);
    }
    get onDidChangeDiagnosticsEmitter() {
      return this.diagnosticRequestor.onDidChangeDiagnosticsEmitter;
    }
    get diagnostics() {
      return this.diagnosticRequestor.provider;
    }
    cleanUpDocument(document) {
      if (this.diagnosticRequestor.knows(PullState.document, document)) {
        this.diagnosticRequestor.forgetDocument(document);
        this.backgroundScheduler.remove(document);
      }
    }
  }
  class DiagnosticFeature extends features_12.TextDocumentLanguageFeature {
    constructor(client2) {
      super(client2, vscode_languageserver_protocol_12.DocumentDiagnosticRequest.type);
    }
    fillClientCapabilities(capabilities) {
      let capability = ensure2(ensure2(capabilities, "textDocument"), "diagnostic");
      capability.dynamicRegistration = true;
      capability.relatedDocumentSupport = false;
      ensure2(ensure2(capabilities, "workspace"), "diagnostics").refreshSupport = true;
    }
    initialize(capabilities, documentSelector) {
      const client2 = this._client;
      client2.onRequest(vscode_languageserver_protocol_12.DiagnosticRefreshRequest.type, async () => {
        for (const provider of this.getAllProviders()) {
          provider.onDidChangeDiagnosticsEmitter.fire();
        }
      });
      let [id, options] = this.getRegistration(documentSelector, capabilities.diagnosticProvider);
      if (!id || !options) {
        return;
      }
      this.register({ id, registerOptions: options });
    }
    dispose() {
      if (this.tabs !== void 0) {
        this.tabs.dispose();
        this.tabs = void 0;
      }
      super.dispose();
    }
    registerLanguageProvider(options) {
      if (this.tabs === void 0) {
        this.tabs = new Tabs();
      }
      const provider = new DiagnosticFeatureProviderImpl(this._client, this.tabs, options);
      return [provider.disposable, provider];
    }
  }
  exports2.DiagnosticFeature = DiagnosticFeature;
})(diagnostic$2);
const diagnostic = /* @__PURE__ */ getDefaultExportFromCjs(diagnostic$2);
const diagnostic$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: diagnostic
}, [diagnostic$2]);
const require$$2$2 = /* @__PURE__ */ getAugmentedNamespace(diagnostic$1);
var client$2 = {};
var codeConverter$1 = {};
var async$3 = {};
Object.defineProperty(async$3, "__esModule", { value: true });
var forEach_1 = async$3.forEach = mapAsync_1 = async$3.mapAsync = map_1 = async$3.map = clearTestMode_1 = async$3.clearTestMode = setTestMode_1 = async$3.setTestMode = Semaphore_1 = async$3.Semaphore = Delayer_1 = async$3.Delayer = void 0;
const vscode_languageserver_protocol_1$v = require$$0$5;
class Delayer {
  constructor(defaultDelay) {
    this.defaultDelay = defaultDelay;
    this.timeout = void 0;
    this.completionPromise = void 0;
    this.onSuccess = void 0;
    this.task = void 0;
  }
  trigger(task, delay = this.defaultDelay) {
    this.task = task;
    if (delay >= 0) {
      this.cancelTimeout();
    }
    if (!this.completionPromise) {
      this.completionPromise = new Promise((resolve) => {
        this.onSuccess = resolve;
      }).then(() => {
        this.completionPromise = void 0;
        this.onSuccess = void 0;
        var result = this.task();
        this.task = void 0;
        return result;
      });
    }
    if (delay >= 0 || this.timeout === void 0) {
      this.timeout = (0, vscode_languageserver_protocol_1$v.RAL)().timer.setTimeout(() => {
        this.timeout = void 0;
        this.onSuccess(void 0);
      }, delay >= 0 ? delay : this.defaultDelay);
    }
    return this.completionPromise;
  }
  forceDelivery() {
    if (!this.completionPromise) {
      return void 0;
    }
    this.cancelTimeout();
    let result = this.task();
    this.completionPromise = void 0;
    this.onSuccess = void 0;
    this.task = void 0;
    return result;
  }
  isTriggered() {
    return this.timeout !== void 0;
  }
  cancel() {
    this.cancelTimeout();
    this.completionPromise = void 0;
  }
  cancelTimeout() {
    if (this.timeout !== void 0) {
      this.timeout.dispose();
      this.timeout = void 0;
    }
  }
}
var Delayer_1 = async$3.Delayer = Delayer;
class Semaphore {
  constructor(capacity = 1) {
    if (capacity <= 0) {
      throw new Error("Capacity must be greater than 0");
    }
    this._capacity = capacity;
    this._active = 0;
    this._waiting = [];
  }
  lock(thunk) {
    return new Promise((resolve, reject) => {
      this._waiting.push({ thunk, resolve, reject });
      this.runNext();
    });
  }
  get active() {
    return this._active;
  }
  runNext() {
    if (this._waiting.length === 0 || this._active === this._capacity) {
      return;
    }
    (0, vscode_languageserver_protocol_1$v.RAL)().timer.setImmediate(() => this.doRunNext());
  }
  doRunNext() {
    if (this._waiting.length === 0 || this._active === this._capacity) {
      return;
    }
    const next = this._waiting.shift();
    this._active++;
    if (this._active > this._capacity) {
      throw new Error(`To many thunks active`);
    }
    try {
      const result = next.thunk();
      if (result instanceof Promise) {
        result.then((value) => {
          this._active--;
          next.resolve(value);
          this.runNext();
        }, (err) => {
          this._active--;
          next.reject(err);
          this.runNext();
        });
      } else {
        this._active--;
        next.resolve(result);
        this.runNext();
      }
    } catch (err) {
      this._active--;
      next.reject(err);
      this.runNext();
    }
  }
}
var Semaphore_1 = async$3.Semaphore = Semaphore;
let $test = false;
function setTestMode() {
  $test = true;
}
var setTestMode_1 = async$3.setTestMode = setTestMode;
function clearTestMode() {
  $test = false;
}
var clearTestMode_1 = async$3.clearTestMode = clearTestMode;
const defaultYieldTimeout = 15;
class Timer {
  constructor(yieldAfter = defaultYieldTimeout) {
    this.yieldAfter = $test === true ? Math.max(yieldAfter, 2) : Math.max(yieldAfter, defaultYieldTimeout);
    this.startTime = Date.now();
    this.counter = 0;
    this.total = 0;
    this.counterInterval = 1;
  }
  start() {
    this.counter = 0;
    this.total = 0;
    this.counterInterval = 1;
    this.startTime = Date.now();
  }
  shouldYield() {
    if (++this.counter >= this.counterInterval) {
      const timeTaken = Date.now() - this.startTime;
      const timeLeft = Math.max(0, this.yieldAfter - timeTaken);
      this.total += this.counter;
      this.counter = 0;
      if (timeTaken >= this.yieldAfter || timeLeft <= 1) {
        this.counterInterval = 1;
        this.total = 0;
        return true;
      } else {
        switch (timeTaken) {
          case 0:
          case 1:
            this.counterInterval = this.total * 2;
            break;
        }
      }
    }
    return false;
  }
}
async function map(items, func2, token, options) {
  if (items.length === 0) {
    return [];
  }
  const result = new Array(items.length);
  const timer = new Timer(options == null ? void 0 : options.yieldAfter);
  function convertBatch(start) {
    timer.start();
    for (let i = start; i < items.length; i++) {
      result[i] = func2(items[i]);
      if (timer.shouldYield()) {
        (options == null ? void 0 : options.yieldCallback) && options.yieldCallback();
        return i + 1;
      }
    }
    return -1;
  }
  let index = convertBatch(0);
  while (index !== -1) {
    if (token !== void 0 && token.isCancellationRequested) {
      break;
    }
    index = await new Promise((resolve) => {
      (0, vscode_languageserver_protocol_1$v.RAL)().timer.setImmediate(() => {
        resolve(convertBatch(index));
      });
    });
  }
  return result;
}
var map_1 = async$3.map = map;
async function mapAsync(items, func2, token, options) {
  if (items.length === 0) {
    return [];
  }
  const result = new Array(items.length);
  const timer = new Timer(options == null ? void 0 : options.yieldAfter);
  async function convertBatch(start) {
    timer.start();
    for (let i = start; i < items.length; i++) {
      result[i] = await func2(items[i], token);
      if (timer.shouldYield()) {
        (options == null ? void 0 : options.yieldCallback) && options.yieldCallback();
        return i + 1;
      }
    }
    return -1;
  }
  let index = await convertBatch(0);
  while (index !== -1) {
    if (token !== void 0 && token.isCancellationRequested) {
      break;
    }
    index = await new Promise((resolve) => {
      (0, vscode_languageserver_protocol_1$v.RAL)().timer.setImmediate(() => {
        resolve(convertBatch(index));
      });
    });
  }
  return result;
}
var mapAsync_1 = async$3.mapAsync = mapAsync;
async function forEach(items, func2, token, options) {
  if (items.length === 0) {
    return;
  }
  const timer = new Timer(options == null ? void 0 : options.yieldAfter);
  function runBatch(start) {
    timer.start();
    for (let i = start; i < items.length; i++) {
      func2(items[i]);
      if (timer.shouldYield()) {
        (options == null ? void 0 : options.yieldCallback) && options.yieldCallback();
        return i + 1;
      }
    }
    return -1;
  }
  let index = runBatch(0);
  while (index !== -1) {
    if (token !== void 0 && token.isCancellationRequested) {
      break;
    }
    index = await new Promise((resolve) => {
      (0, vscode_languageserver_protocol_1$v.RAL)().timer.setImmediate(() => {
        resolve(runBatch(index));
      });
    });
  }
}
forEach_1 = async$3.forEach = forEach;
const async$2 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get Delayer() {
    return Delayer_1;
  },
  get Semaphore() {
    return Semaphore_1;
  },
  get clearTestMode() {
    return clearTestMode_1;
  },
  default: async$3,
  get forEach() {
    return forEach_1;
  },
  get map() {
    return map_1;
  },
  get mapAsync() {
    return mapAsync_1;
  },
  get setTestMode() {
    return setTestMode_1;
  }
}, [async$3]);
const require$$5$1 = /* @__PURE__ */ getAugmentedNamespace(async$2);
var protocolCompletionItem$1 = {};
Object.defineProperty(protocolCompletionItem$1, "__esModule", { value: true });
const code$a = require$$0$9;
class ProtocolCompletionItem extends code$a.CompletionItem {
  constructor(label) {
    super(label);
  }
}
var _default$7 = protocolCompletionItem$1.default = ProtocolCompletionItem;
const protocolCompletionItem = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: _default$7
}, [protocolCompletionItem$1]);
const require$$4 = /* @__PURE__ */ getAugmentedNamespace(protocolCompletionItem);
var protocolCodeLens$1 = {};
Object.defineProperty(protocolCodeLens$1, "__esModule", { value: true });
const code$9 = require$$0$9;
class ProtocolCodeLens extends code$9.CodeLens {
  constructor(range2) {
    super(range2);
  }
}
var _default$6 = protocolCodeLens$1.default = ProtocolCodeLens;
const protocolCodeLens = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: _default$6
}, [protocolCodeLens$1]);
const require$$5 = /* @__PURE__ */ getAugmentedNamespace(protocolCodeLens);
var protocolDocumentLink$1 = {};
Object.defineProperty(protocolDocumentLink$1, "__esModule", { value: true });
const code$8 = require$$0$9;
class ProtocolDocumentLink extends code$8.DocumentLink {
  constructor(range2, target) {
    super(range2, target);
  }
}
var _default$5 = protocolDocumentLink$1.default = ProtocolDocumentLink;
const protocolDocumentLink = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: _default$5
}, [protocolDocumentLink$1]);
const require$$6 = /* @__PURE__ */ getAugmentedNamespace(protocolDocumentLink);
var protocolCodeAction$1 = {};
Object.defineProperty(protocolCodeAction$1, "__esModule", { value: true });
const vscode$2 = require$$0$9;
class ProtocolCodeAction extends vscode$2.CodeAction {
  constructor(title, data) {
    super(title);
    this.data = data;
  }
}
var _default$4 = protocolCodeAction$1.default = ProtocolCodeAction;
const protocolCodeAction = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: _default$4
}, [protocolCodeAction$1]);
const require$$7$1 = /* @__PURE__ */ getAugmentedNamespace(protocolCodeAction);
var protocolDiagnostic$2 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.ProtocolDiagnostic = exports2.DiagnosticCode = void 0;
  const vscode2 = require$$0$9;
  const Is2 = require$$4$1;
  (function(DiagnosticCode) {
    function is2(value) {
      const candidate = value;
      return candidate !== void 0 && candidate !== null && (Is2.number(candidate.value) || Is2.string(candidate.value)) && Is2.string(candidate.target);
    }
    DiagnosticCode.is = is2;
  })(exports2.DiagnosticCode || (exports2.DiagnosticCode = {}));
  class ProtocolDiagnostic extends vscode2.Diagnostic {
    constructor(range2, message, severity, data) {
      super(range2, message, severity);
      this.data = data;
      this.hasDiagnosticCode = false;
    }
  }
  exports2.ProtocolDiagnostic = ProtocolDiagnostic;
})(protocolDiagnostic$2);
const protocolDiagnostic = /* @__PURE__ */ getDefaultExportFromCjs(protocolDiagnostic$2);
const protocolDiagnostic$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protocolDiagnostic
}, [protocolDiagnostic$2]);
const require$$8 = /* @__PURE__ */ getAugmentedNamespace(protocolDiagnostic$1);
var protocolCallHierarchyItem$1 = {};
Object.defineProperty(protocolCallHierarchyItem$1, "__esModule", { value: true });
const code$7 = require$$0$9;
class ProtocolCallHierarchyItem extends code$7.CallHierarchyItem {
  constructor(kind, name, detail, uri, range2, selectionRange2, data) {
    super(kind, name, detail, uri, range2, selectionRange2);
    if (data !== void 0) {
      this.data = data;
    }
  }
}
var _default$3 = protocolCallHierarchyItem$1.default = ProtocolCallHierarchyItem;
const protocolCallHierarchyItem = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: _default$3
}, [protocolCallHierarchyItem$1]);
const require$$9 = /* @__PURE__ */ getAugmentedNamespace(protocolCallHierarchyItem);
var protocolTypeHierarchyItem$1 = {};
Object.defineProperty(protocolTypeHierarchyItem$1, "__esModule", { value: true });
const code$6 = require$$0$9;
class ProtocolTypeHierarchyItem extends code$6.TypeHierarchyItem {
  constructor(kind, name, detail, uri, range2, selectionRange2, data) {
    super(kind, name, detail, uri, range2, selectionRange2);
    if (data !== void 0) {
      this.data = data;
    }
  }
}
var _default$2 = protocolTypeHierarchyItem$1.default = ProtocolTypeHierarchyItem;
const protocolTypeHierarchyItem = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: _default$2
}, [protocolTypeHierarchyItem$1]);
const require$$10$1 = /* @__PURE__ */ getAugmentedNamespace(protocolTypeHierarchyItem);
var protocolWorkspaceSymbol$1 = {};
Object.defineProperty(protocolWorkspaceSymbol$1, "__esModule", { value: true });
const code$5 = require$$0$9;
class WorkspaceSymbol extends code$5.SymbolInformation {
  constructor(name, kind, containerName, locationOrUri, data) {
    const hasRange = !(locationOrUri instanceof code$5.Uri);
    super(name, kind, containerName, hasRange ? locationOrUri : new code$5.Location(locationOrUri, new code$5.Range(0, 0, 0, 0)));
    this.hasRange = hasRange;
    if (data !== void 0) {
      this.data = data;
    }
  }
}
var _default$1 = protocolWorkspaceSymbol$1.default = WorkspaceSymbol;
const protocolWorkspaceSymbol = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: _default$1
}, [protocolWorkspaceSymbol$1]);
const require$$11$1 = /* @__PURE__ */ getAugmentedNamespace(protocolWorkspaceSymbol);
var protocolInlayHint$1 = {};
Object.defineProperty(protocolInlayHint$1, "__esModule", { value: true });
const code$4 = require$$0$9;
class ProtocolInlayHint extends code$4.InlayHint {
  constructor(position, label, kind) {
    super(position, label, kind);
  }
}
var _default = protocolInlayHint$1.default = ProtocolInlayHint;
const protocolInlayHint = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: _default
}, [protocolInlayHint$1]);
const require$$12$1 = /* @__PURE__ */ getAugmentedNamespace(protocolInlayHint);
Object.defineProperty(codeConverter$1, "__esModule", { value: true });
var createConverter_1$1 = codeConverter$1.createConverter = void 0;
const code$3 = require$$0$9;
const proto$4 = require$$0$5;
const Is$6 = require$$4$1;
const async$1 = require$$5$1;
const protocolCompletionItem_1$1 = require$$4;
const protocolCodeLens_1$1 = require$$5;
const protocolDocumentLink_1$1 = require$$6;
const protocolCodeAction_1$1 = require$$7$1;
const protocolDiagnostic_1$1 = require$$8;
const protocolCallHierarchyItem_1$1 = require$$9;
const protocolTypeHierarchyItem_1$1 = require$$10$1;
const protocolWorkspaceSymbol_1$1 = require$$11$1;
const protocolInlayHint_1$1 = require$$12$1;
var InsertReplaceRange;
(function(InsertReplaceRange2) {
  function is2(value) {
    const candidate = value;
    return candidate && !!candidate.inserting && !!candidate.replacing;
  }
  InsertReplaceRange2.is = is2;
})(InsertReplaceRange || (InsertReplaceRange = {}));
function createConverter$1(uriConverter) {
  const nullConverter = (value) => value.toString();
  const _uriConverter = uriConverter || nullConverter;
  function asUri(value) {
    return _uriConverter(value);
  }
  function asTextDocumentIdentifier(textDocument) {
    return {
      uri: _uriConverter(textDocument.uri)
    };
  }
  function asTextDocumentItem(textDocument) {
    return {
      uri: _uriConverter(textDocument.uri),
      languageId: textDocument.languageId,
      version: textDocument.version,
      text: textDocument.getText()
    };
  }
  function asVersionedTextDocumentIdentifier(textDocument) {
    return {
      uri: _uriConverter(textDocument.uri),
      version: textDocument.version
    };
  }
  function asOpenTextDocumentParams(textDocument) {
    return {
      textDocument: asTextDocumentItem(textDocument)
    };
  }
  function isTextDocumentChangeEvent(value) {
    const candidate = value;
    return !!candidate.document && !!candidate.contentChanges;
  }
  function isTextDocument(value) {
    const candidate = value;
    return !!candidate.uri && !!candidate.version;
  }
  function asChangeTextDocumentParams(arg0, arg1, arg2) {
    if (isTextDocument(arg0)) {
      const result = {
        textDocument: {
          uri: _uriConverter(arg0.uri),
          version: arg0.version
        },
        contentChanges: [{ text: arg0.getText() }]
      };
      return result;
    } else if (isTextDocumentChangeEvent(arg0)) {
      const uri = arg1;
      const version = arg2;
      const result = {
        textDocument: {
          uri: _uriConverter(uri),
          version
        },
        contentChanges: arg0.contentChanges.map((change) => {
          const range2 = change.range;
          return {
            range: {
              start: { line: range2.start.line, character: range2.start.character },
              end: { line: range2.end.line, character: range2.end.character }
            },
            rangeLength: change.rangeLength,
            text: change.text
          };
        })
      };
      return result;
    } else {
      throw Error("Unsupported text document change parameter");
    }
  }
  function asCloseTextDocumentParams(textDocument) {
    return {
      textDocument: asTextDocumentIdentifier(textDocument)
    };
  }
  function asSaveTextDocumentParams(textDocument, includeContent = false) {
    let result = {
      textDocument: asTextDocumentIdentifier(textDocument)
    };
    if (includeContent) {
      result.text = textDocument.getText();
    }
    return result;
  }
  function asTextDocumentSaveReason(reason) {
    switch (reason) {
      case code$3.TextDocumentSaveReason.Manual:
        return proto$4.TextDocumentSaveReason.Manual;
      case code$3.TextDocumentSaveReason.AfterDelay:
        return proto$4.TextDocumentSaveReason.AfterDelay;
      case code$3.TextDocumentSaveReason.FocusOut:
        return proto$4.TextDocumentSaveReason.FocusOut;
    }
    return proto$4.TextDocumentSaveReason.Manual;
  }
  function asWillSaveTextDocumentParams(event) {
    return {
      textDocument: asTextDocumentIdentifier(event.document),
      reason: asTextDocumentSaveReason(event.reason)
    };
  }
  function asDidCreateFilesParams(event) {
    return {
      files: event.files.map((fileUri) => ({
        uri: _uriConverter(fileUri)
      }))
    };
  }
  function asDidRenameFilesParams(event) {
    return {
      files: event.files.map((file) => ({
        oldUri: _uriConverter(file.oldUri),
        newUri: _uriConverter(file.newUri)
      }))
    };
  }
  function asDidDeleteFilesParams(event) {
    return {
      files: event.files.map((fileUri) => ({
        uri: _uriConverter(fileUri)
      }))
    };
  }
  function asWillCreateFilesParams(event) {
    return {
      files: event.files.map((fileUri) => ({
        uri: _uriConverter(fileUri)
      }))
    };
  }
  function asWillRenameFilesParams(event) {
    return {
      files: event.files.map((file) => ({
        oldUri: _uriConverter(file.oldUri),
        newUri: _uriConverter(file.newUri)
      }))
    };
  }
  function asWillDeleteFilesParams(event) {
    return {
      files: event.files.map((fileUri) => ({
        uri: _uriConverter(fileUri)
      }))
    };
  }
  function asTextDocumentPositionParams(textDocument, position) {
    return {
      textDocument: asTextDocumentIdentifier(textDocument),
      position: asWorkerPosition(position)
    };
  }
  function asCompletionTriggerKind(triggerKind) {
    switch (triggerKind) {
      case code$3.CompletionTriggerKind.TriggerCharacter:
        return proto$4.CompletionTriggerKind.TriggerCharacter;
      case code$3.CompletionTriggerKind.TriggerForIncompleteCompletions:
        return proto$4.CompletionTriggerKind.TriggerForIncompleteCompletions;
      default:
        return proto$4.CompletionTriggerKind.Invoked;
    }
  }
  function asCompletionParams(textDocument, position, context) {
    return {
      textDocument: asTextDocumentIdentifier(textDocument),
      position: asWorkerPosition(position),
      context: {
        triggerKind: asCompletionTriggerKind(context.triggerKind),
        triggerCharacter: context.triggerCharacter
      }
    };
  }
  function asSignatureHelpTriggerKind(triggerKind) {
    switch (triggerKind) {
      case code$3.SignatureHelpTriggerKind.Invoke:
        return proto$4.SignatureHelpTriggerKind.Invoked;
      case code$3.SignatureHelpTriggerKind.TriggerCharacter:
        return proto$4.SignatureHelpTriggerKind.TriggerCharacter;
      case code$3.SignatureHelpTriggerKind.ContentChange:
        return proto$4.SignatureHelpTriggerKind.ContentChange;
    }
  }
  function asParameterInformation(value) {
    return {
      label: value.label
    };
  }
  function asParameterInformations(values) {
    return values.map(asParameterInformation);
  }
  function asSignatureInformation(value) {
    return {
      label: value.label,
      parameters: asParameterInformations(value.parameters)
    };
  }
  function asSignatureInformations(values) {
    return values.map(asSignatureInformation);
  }
  function asSignatureHelp(value) {
    if (value === void 0) {
      return value;
    }
    return {
      signatures: asSignatureInformations(value.signatures),
      activeSignature: value.activeSignature,
      activeParameter: value.activeParameter
    };
  }
  function asSignatureHelpParams(textDocument, position, context) {
    return {
      textDocument: asTextDocumentIdentifier(textDocument),
      position: asWorkerPosition(position),
      context: {
        isRetrigger: context.isRetrigger,
        triggerCharacter: context.triggerCharacter,
        triggerKind: asSignatureHelpTriggerKind(context.triggerKind),
        activeSignatureHelp: asSignatureHelp(context.activeSignatureHelp)
      }
    };
  }
  function asWorkerPosition(position) {
    return { line: position.line, character: position.character };
  }
  function asPosition(value) {
    if (value === void 0 || value === null) {
      return value;
    }
    return { line: value.line > proto$4.uinteger.MAX_VALUE ? proto$4.uinteger.MAX_VALUE : value.line, character: value.character > proto$4.uinteger.MAX_VALUE ? proto$4.uinteger.MAX_VALUE : value.character };
  }
  function asPositions(value, token) {
    return async$1.map(value, asPosition, token);
  }
  function asRange(value) {
    if (value === void 0 || value === null) {
      return value;
    }
    return { start: asPosition(value.start), end: asPosition(value.end) };
  }
  function asLocation(value) {
    if (value === void 0 || value === null) {
      return value;
    }
    return proto$4.Location.create(asUri(value.uri), asRange(value.range));
  }
  function asDiagnosticSeverity(value) {
    switch (value) {
      case code$3.DiagnosticSeverity.Error:
        return proto$4.DiagnosticSeverity.Error;
      case code$3.DiagnosticSeverity.Warning:
        return proto$4.DiagnosticSeverity.Warning;
      case code$3.DiagnosticSeverity.Information:
        return proto$4.DiagnosticSeverity.Information;
      case code$3.DiagnosticSeverity.Hint:
        return proto$4.DiagnosticSeverity.Hint;
    }
  }
  function asDiagnosticTags(tags) {
    if (!tags) {
      return void 0;
    }
    let result = [];
    for (let tag of tags) {
      let converted = asDiagnosticTag(tag);
      if (converted !== void 0) {
        result.push(converted);
      }
    }
    return result.length > 0 ? result : void 0;
  }
  function asDiagnosticTag(tag) {
    switch (tag) {
      case code$3.DiagnosticTag.Unnecessary:
        return proto$4.DiagnosticTag.Unnecessary;
      case code$3.DiagnosticTag.Deprecated:
        return proto$4.DiagnosticTag.Deprecated;
      default:
        return void 0;
    }
  }
  function asRelatedInformation(item) {
    return {
      message: item.message,
      location: asLocation(item.location)
    };
  }
  function asRelatedInformations(items) {
    return items.map(asRelatedInformation);
  }
  function asDiagnosticCode(value) {
    if (value === void 0 || value === null) {
      return void 0;
    }
    if (Is$6.number(value) || Is$6.string(value)) {
      return value;
    }
    return { value: value.value, target: asUri(value.target) };
  }
  function asDiagnostic(item) {
    const result = proto$4.Diagnostic.create(asRange(item.range), item.message);
    const protocolDiagnostic2 = item instanceof protocolDiagnostic_1$1.ProtocolDiagnostic ? item : void 0;
    if (protocolDiagnostic2 !== void 0 && protocolDiagnostic2.data !== void 0) {
      result.data = protocolDiagnostic2.data;
    }
    const code2 = asDiagnosticCode(item.code);
    if (protocolDiagnostic_1$1.DiagnosticCode.is(code2)) {
      if (protocolDiagnostic2 !== void 0 && protocolDiagnostic2.hasDiagnosticCode) {
        result.code = code2;
      } else {
        result.code = code2.value;
        result.codeDescription = { href: code2.target };
      }
    } else {
      result.code = code2;
    }
    if (Is$6.number(item.severity)) {
      result.severity = asDiagnosticSeverity(item.severity);
    }
    if (Array.isArray(item.tags)) {
      result.tags = asDiagnosticTags(item.tags);
    }
    if (item.relatedInformation) {
      result.relatedInformation = asRelatedInformations(item.relatedInformation);
    }
    if (item.source) {
      result.source = item.source;
    }
    return result;
  }
  function asDiagnostics(items, token) {
    if (items === void 0 || items === null) {
      return items;
    }
    return async$1.map(items, asDiagnostic, token);
  }
  function asDocumentation(format, documentation) {
    switch (format) {
      case "$string":
        return documentation;
      case proto$4.MarkupKind.PlainText:
        return { kind: format, value: documentation };
      case proto$4.MarkupKind.Markdown:
        return { kind: format, value: documentation.value };
      default:
        return `Unsupported Markup content received. Kind is: ${format}`;
    }
  }
  function asCompletionItemTag(tag) {
    switch (tag) {
      case code$3.CompletionItemTag.Deprecated:
        return proto$4.CompletionItemTag.Deprecated;
    }
    return void 0;
  }
  function asCompletionItemTags(tags) {
    if (tags === void 0) {
      return tags;
    }
    const result = [];
    for (let tag of tags) {
      const converted = asCompletionItemTag(tag);
      if (converted !== void 0) {
        result.push(converted);
      }
    }
    return result;
  }
  function asCompletionItemKind(value, original) {
    if (original !== void 0) {
      return original;
    }
    return value + 1;
  }
  function asCompletionItem(item, labelDetailsSupport = false) {
    let label;
    let labelDetails;
    if (Is$6.string(item.label)) {
      label = item.label;
    } else {
      label = item.label.label;
      if (labelDetailsSupport && (item.label.detail !== void 0 || item.label.description !== void 0)) {
        labelDetails = { detail: item.label.detail, description: item.label.description };
      }
    }
    let result = { label };
    if (labelDetails !== void 0) {
      result.labelDetails = labelDetails;
    }
    let protocolItem = item instanceof protocolCompletionItem_1$1.default ? item : void 0;
    if (item.detail) {
      result.detail = item.detail;
    }
    if (item.documentation) {
      if (!protocolItem || protocolItem.documentationFormat === "$string") {
        result.documentation = item.documentation;
      } else {
        result.documentation = asDocumentation(protocolItem.documentationFormat, item.documentation);
      }
    }
    if (item.filterText) {
      result.filterText = item.filterText;
    }
    fillPrimaryInsertText(result, item);
    if (Is$6.number(item.kind)) {
      result.kind = asCompletionItemKind(item.kind, protocolItem && protocolItem.originalItemKind);
    }
    if (item.sortText) {
      result.sortText = item.sortText;
    }
    if (item.additionalTextEdits) {
      result.additionalTextEdits = asTextEdits(item.additionalTextEdits);
    }
    if (item.commitCharacters) {
      result.commitCharacters = item.commitCharacters.slice();
    }
    if (item.command) {
      result.command = asCommand(item.command);
    }
    if (item.preselect === true || item.preselect === false) {
      result.preselect = item.preselect;
    }
    const tags = asCompletionItemTags(item.tags);
    if (protocolItem) {
      if (protocolItem.data !== void 0) {
        result.data = protocolItem.data;
      }
      if (protocolItem.deprecated === true || protocolItem.deprecated === false) {
        if (protocolItem.deprecated === true && tags !== void 0 && tags.length > 0) {
          const index = tags.indexOf(code$3.CompletionItemTag.Deprecated);
          if (index !== -1) {
            tags.splice(index, 1);
          }
        }
        result.deprecated = protocolItem.deprecated;
      }
      if (protocolItem.insertTextMode !== void 0) {
        result.insertTextMode = protocolItem.insertTextMode;
      }
    }
    if (tags !== void 0 && tags.length > 0) {
      result.tags = tags;
    }
    if (result.insertTextMode === void 0 && item.keepWhitespace === true) {
      result.insertTextMode = proto$4.InsertTextMode.adjustIndentation;
    }
    return result;
  }
  function fillPrimaryInsertText(target, source2) {
    let format = proto$4.InsertTextFormat.PlainText;
    let text = void 0;
    let range2 = void 0;
    if (source2.textEdit) {
      text = source2.textEdit.newText;
      range2 = source2.textEdit.range;
    } else if (source2.insertText instanceof code$3.SnippetString) {
      format = proto$4.InsertTextFormat.Snippet;
      text = source2.insertText.value;
    } else {
      text = source2.insertText;
    }
    if (source2.range) {
      range2 = source2.range;
    }
    target.insertTextFormat = format;
    if (source2.fromEdit && text !== void 0 && range2 !== void 0) {
      target.textEdit = asCompletionTextEdit(text, range2);
    } else {
      target.insertText = text;
    }
  }
  function asCompletionTextEdit(newText, range2) {
    if (InsertReplaceRange.is(range2)) {
      return proto$4.InsertReplaceEdit.create(newText, asRange(range2.inserting), asRange(range2.replacing));
    } else {
      return { newText, range: asRange(range2) };
    }
  }
  function asTextEdit(edit) {
    return { range: asRange(edit.range), newText: edit.newText };
  }
  function asTextEdits(edits) {
    if (edits === void 0 || edits === null) {
      return edits;
    }
    return edits.map(asTextEdit);
  }
  function asSymbolKind(item) {
    if (item <= code$3.SymbolKind.TypeParameter) {
      return item + 1;
    }
    return proto$4.SymbolKind.Property;
  }
  function asSymbolTag(item) {
    return item;
  }
  function asSymbolTags(items) {
    return items.map(asSymbolTag);
  }
  function asReferenceParams(textDocument, position, options) {
    return {
      textDocument: asTextDocumentIdentifier(textDocument),
      position: asWorkerPosition(position),
      context: { includeDeclaration: options.includeDeclaration }
    };
  }
  async function asCodeAction(item, token) {
    let result = proto$4.CodeAction.create(item.title);
    if (item instanceof protocolCodeAction_1$1.default && item.data !== void 0) {
      result.data = item.data;
    }
    if (item.kind !== void 0) {
      result.kind = asCodeActionKind(item.kind);
    }
    if (item.diagnostics !== void 0) {
      result.diagnostics = await asDiagnostics(item.diagnostics, token);
    }
    if (item.edit !== void 0) {
      throw new Error(`VS Code code actions can only be converted to a protocol code action without an edit.`);
    }
    if (item.command !== void 0) {
      result.command = asCommand(item.command);
    }
    if (item.isPreferred !== void 0) {
      result.isPreferred = item.isPreferred;
    }
    if (item.disabled !== void 0) {
      result.disabled = { reason: item.disabled.reason };
    }
    return result;
  }
  async function asCodeActionContext(context, token) {
    if (context === void 0 || context === null) {
      return context;
    }
    let only;
    if (context.only && Is$6.string(context.only.value)) {
      only = [context.only.value];
    }
    return proto$4.CodeActionContext.create(await asDiagnostics(context.diagnostics, token), only, asCodeActionTriggerKind(context.triggerKind));
  }
  function asCodeActionTriggerKind(kind) {
    switch (kind) {
      case code$3.CodeActionTriggerKind.Invoke:
        return proto$4.CodeActionTriggerKind.Invoked;
      case code$3.CodeActionTriggerKind.Automatic:
        return proto$4.CodeActionTriggerKind.Automatic;
      default:
        return void 0;
    }
  }
  function asCodeActionKind(item) {
    if (item === void 0 || item === null) {
      return void 0;
    }
    return item.value;
  }
  function asInlineValueContext(context) {
    if (context === void 0 || context === null) {
      return context;
    }
    return proto$4.InlineValueContext.create(context.frameId, asRange(context.stoppedLocation));
  }
  function asCommand(item) {
    let result = proto$4.Command.create(item.title, item.command);
    if (item.arguments) {
      result.arguments = item.arguments;
    }
    return result;
  }
  function asCodeLens(item) {
    let result = proto$4.CodeLens.create(asRange(item.range));
    if (item.command) {
      result.command = asCommand(item.command);
    }
    if (item instanceof protocolCodeLens_1$1.default) {
      if (item.data) {
        result.data = item.data;
      }
    }
    return result;
  }
  function asFormattingOptions(options, fileOptions) {
    const result = { tabSize: options.tabSize, insertSpaces: options.insertSpaces };
    if (fileOptions.trimTrailingWhitespace) {
      result.trimTrailingWhitespace = true;
    }
    if (fileOptions.trimFinalNewlines) {
      result.trimFinalNewlines = true;
    }
    if (fileOptions.insertFinalNewline) {
      result.insertFinalNewline = true;
    }
    return result;
  }
  function asDocumentSymbolParams(textDocument) {
    return {
      textDocument: asTextDocumentIdentifier(textDocument)
    };
  }
  function asCodeLensParams(textDocument) {
    return {
      textDocument: asTextDocumentIdentifier(textDocument)
    };
  }
  function asDocumentLink(item) {
    let result = proto$4.DocumentLink.create(asRange(item.range));
    if (item.target) {
      result.target = asUri(item.target);
    }
    if (item.tooltip !== void 0) {
      result.tooltip = item.tooltip;
    }
    let protocolItem = item instanceof protocolDocumentLink_1$1.default ? item : void 0;
    if (protocolItem && protocolItem.data) {
      result.data = protocolItem.data;
    }
    return result;
  }
  function asDocumentLinkParams(textDocument) {
    return {
      textDocument: asTextDocumentIdentifier(textDocument)
    };
  }
  function asCallHierarchyItem(value) {
    const result = {
      name: value.name,
      kind: asSymbolKind(value.kind),
      uri: asUri(value.uri),
      range: asRange(value.range),
      selectionRange: asRange(value.selectionRange)
    };
    if (value.detail !== void 0 && value.detail.length > 0) {
      result.detail = value.detail;
    }
    if (value.tags !== void 0) {
      result.tags = asSymbolTags(value.tags);
    }
    if (value instanceof protocolCallHierarchyItem_1$1.default && value.data !== void 0) {
      result.data = value.data;
    }
    return result;
  }
  function asTypeHierarchyItem(value) {
    const result = {
      name: value.name,
      kind: asSymbolKind(value.kind),
      uri: asUri(value.uri),
      range: asRange(value.range),
      selectionRange: asRange(value.selectionRange)
    };
    if (value.detail !== void 0 && value.detail.length > 0) {
      result.detail = value.detail;
    }
    if (value.tags !== void 0) {
      result.tags = asSymbolTags(value.tags);
    }
    if (value instanceof protocolTypeHierarchyItem_1$1.default && value.data !== void 0) {
      result.data = value.data;
    }
    return result;
  }
  function asWorkspaceSymbol(item) {
    const result = item instanceof protocolWorkspaceSymbol_1$1.default ? { name: item.name, kind: asSymbolKind(item.kind), location: item.hasRange ? asLocation(item.location) : { uri: _uriConverter(item.location.uri) }, data: item.data } : { name: item.name, kind: asSymbolKind(item.kind), location: asLocation(item.location) };
    if (item.tags !== void 0) {
      result.tags = asSymbolTags(item.tags);
    }
    if (item.containerName !== "") {
      result.containerName = item.containerName;
    }
    return result;
  }
  function asInlayHint(item) {
    const label = typeof item.label === "string" ? item.label : item.label.map(asInlayHintLabelPart);
    const result = proto$4.InlayHint.create(asPosition(item.position), label);
    if (item.kind !== void 0) {
      result.kind = item.kind;
    }
    if (item.textEdits !== void 0) {
      result.textEdits = asTextEdits(item.textEdits);
    }
    if (item.tooltip !== void 0) {
      result.tooltip = asTooltip(item.tooltip);
    }
    if (item.paddingLeft !== void 0) {
      result.paddingLeft = item.paddingLeft;
    }
    if (item.paddingRight !== void 0) {
      result.paddingRight = item.paddingRight;
    }
    if (item instanceof protocolInlayHint_1$1.default && item.data !== void 0) {
      result.data = item.data;
    }
    return result;
  }
  function asInlayHintLabelPart(item) {
    const result = proto$4.InlayHintLabelPart.create(item.value);
    if (item.location !== void 0) {
      result.location = asLocation(item.location);
    }
    if (item.command !== void 0) {
      result.command = asCommand(item.command);
    }
    if (item.tooltip !== void 0) {
      result.tooltip = asTooltip(item.tooltip);
    }
    return result;
  }
  function asTooltip(value) {
    if (typeof value === "string") {
      return value;
    }
    const result = {
      kind: proto$4.MarkupKind.Markdown,
      value: value.value
    };
    return result;
  }
  return {
    asUri,
    asTextDocumentIdentifier,
    asTextDocumentItem,
    asVersionedTextDocumentIdentifier,
    asOpenTextDocumentParams,
    asChangeTextDocumentParams,
    asCloseTextDocumentParams,
    asSaveTextDocumentParams,
    asWillSaveTextDocumentParams,
    asDidCreateFilesParams,
    asDidRenameFilesParams,
    asDidDeleteFilesParams,
    asWillCreateFilesParams,
    asWillRenameFilesParams,
    asWillDeleteFilesParams,
    asTextDocumentPositionParams,
    asCompletionParams,
    asSignatureHelpParams,
    asWorkerPosition,
    asRange,
    asPosition,
    asPositions,
    asLocation,
    asDiagnosticSeverity,
    asDiagnosticTag,
    asDiagnostic,
    asDiagnostics,
    asCompletionItem,
    asTextEdit,
    asSymbolKind,
    asSymbolTag,
    asSymbolTags,
    asReferenceParams,
    asCodeAction,
    asCodeActionContext,
    asInlineValueContext,
    asCommand,
    asCodeLens,
    asFormattingOptions,
    asDocumentSymbolParams,
    asCodeLensParams,
    asDocumentLink,
    asDocumentLinkParams,
    asCallHierarchyItem,
    asTypeHierarchyItem,
    asInlayHint,
    asWorkspaceSymbol
  };
}
createConverter_1$1 = codeConverter$1.createConverter = createConverter$1;
const codeConverter = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get createConverter() {
    return createConverter_1$1;
  },
  default: codeConverter$1
}, [codeConverter$1]);
const require$$2$1 = /* @__PURE__ */ getAugmentedNamespace(codeConverter);
var protocolConverter$1 = {};
Object.defineProperty(protocolConverter$1, "__esModule", { value: true });
var createConverter_1 = protocolConverter$1.createConverter = void 0;
const code$2 = require$$0$9;
const ls = require$$0$5;
const Is$5 = require$$4$1;
const async = require$$5$1;
const protocolCompletionItem_1 = require$$4;
const protocolCodeLens_1 = require$$5;
const protocolDocumentLink_1 = require$$6;
const protocolCodeAction_1 = require$$7$1;
const protocolDiagnostic_1 = require$$8;
const protocolCallHierarchyItem_1 = require$$9;
const protocolTypeHierarchyItem_1 = require$$10$1;
const protocolWorkspaceSymbol_1 = require$$11$1;
const protocolInlayHint_1 = require$$12$1;
const vscode_languageserver_protocol_1$u = require$$0$5;
var CodeBlock;
(function(CodeBlock2) {
  function is2(value) {
    let candidate = value;
    return candidate && Is$5.string(candidate.language) && Is$5.string(candidate.value);
  }
  CodeBlock2.is = is2;
})(CodeBlock || (CodeBlock = {}));
function createConverter(uriConverter, trustMarkdown, supportHtml) {
  const nullConverter = (value) => code$2.Uri.parse(value);
  const _uriConverter = uriConverter || nullConverter;
  function asUri(value) {
    return _uriConverter(value);
  }
  function asDocumentSelector(selector) {
    const result = [];
    for (const filter of selector) {
      if (typeof filter === "string") {
        result.push(filter);
      } else if (vscode_languageserver_protocol_1$u.NotebookCellTextDocumentFilter.is(filter)) {
        if (typeof filter.notebook === "string") {
          result.push({ notebookType: filter.notebook, language: filter.language });
        } else {
          const notebookType = filter.notebook.notebookType ?? "*";
          result.push({ notebookType, scheme: filter.notebook.scheme, pattern: filter.notebook.pattern, language: filter.language });
        }
      } else if (vscode_languageserver_protocol_1$u.TextDocumentFilter.is(filter)) {
        result.push({ language: filter.language, scheme: filter.scheme, pattern: filter.pattern });
      }
    }
    return result;
  }
  async function asDiagnostics(diagnostics, token) {
    return async.map(diagnostics, asDiagnostic, token);
  }
  function asDiagnosticsSync(diagnostics) {
    const result = new Array(diagnostics.length);
    for (let i = 0; i < diagnostics.length; i++) {
      result[i] = asDiagnostic(diagnostics[i]);
    }
    return result;
  }
  function asDiagnostic(diagnostic2) {
    let result = new protocolDiagnostic_1.ProtocolDiagnostic(asRange(diagnostic2.range), diagnostic2.message, asDiagnosticSeverity(diagnostic2.severity), diagnostic2.data);
    if (diagnostic2.code !== void 0) {
      if (typeof diagnostic2.code === "string" || typeof diagnostic2.code === "number") {
        if (ls.CodeDescription.is(diagnostic2.codeDescription)) {
          result.code = {
            value: diagnostic2.code,
            target: asUri(diagnostic2.codeDescription.href)
          };
        } else {
          result.code = diagnostic2.code;
        }
      } else if (protocolDiagnostic_1.DiagnosticCode.is(diagnostic2.code)) {
        result.hasDiagnosticCode = true;
        const diagnosticCode = diagnostic2.code;
        result.code = {
          value: diagnosticCode.value,
          target: asUri(diagnosticCode.target)
        };
      }
    }
    if (diagnostic2.source) {
      result.source = diagnostic2.source;
    }
    if (diagnostic2.relatedInformation) {
      result.relatedInformation = asRelatedInformation(diagnostic2.relatedInformation);
    }
    if (Array.isArray(diagnostic2.tags)) {
      result.tags = asDiagnosticTags(diagnostic2.tags);
    }
    return result;
  }
  function asRelatedInformation(relatedInformation) {
    const result = new Array(relatedInformation.length);
    for (let i = 0; i < relatedInformation.length; i++) {
      const info = relatedInformation[i];
      result[i] = new code$2.DiagnosticRelatedInformation(asLocation(info.location), info.message);
    }
    return result;
  }
  function asDiagnosticTags(tags) {
    if (!tags) {
      return void 0;
    }
    let result = [];
    for (let tag of tags) {
      let converted = asDiagnosticTag(tag);
      if (converted !== void 0) {
        result.push(converted);
      }
    }
    return result.length > 0 ? result : void 0;
  }
  function asDiagnosticTag(tag) {
    switch (tag) {
      case ls.DiagnosticTag.Unnecessary:
        return code$2.DiagnosticTag.Unnecessary;
      case ls.DiagnosticTag.Deprecated:
        return code$2.DiagnosticTag.Deprecated;
      default:
        return void 0;
    }
  }
  function asPosition(value) {
    return value ? new code$2.Position(value.line, value.character) : void 0;
  }
  function asRange(value) {
    return value ? new code$2.Range(value.start.line, value.start.character, value.end.line, value.end.character) : void 0;
  }
  async function asRanges(items, token) {
    return async.map(items, (range2) => {
      return new code$2.Range(range2.start.line, range2.start.character, range2.end.line, range2.end.character);
    }, token);
  }
  function asDiagnosticSeverity(value) {
    if (value === void 0 || value === null) {
      return code$2.DiagnosticSeverity.Error;
    }
    switch (value) {
      case ls.DiagnosticSeverity.Error:
        return code$2.DiagnosticSeverity.Error;
      case ls.DiagnosticSeverity.Warning:
        return code$2.DiagnosticSeverity.Warning;
      case ls.DiagnosticSeverity.Information:
        return code$2.DiagnosticSeverity.Information;
      case ls.DiagnosticSeverity.Hint:
        return code$2.DiagnosticSeverity.Hint;
    }
    return code$2.DiagnosticSeverity.Error;
  }
  function asHoverContent(value) {
    if (Is$5.string(value)) {
      return asMarkdownString(value);
    } else if (CodeBlock.is(value)) {
      let result = asMarkdownString();
      return result.appendCodeblock(value.value, value.language);
    } else if (Array.isArray(value)) {
      let result = [];
      for (let element of value) {
        let item = asMarkdownString();
        if (CodeBlock.is(element)) {
          item.appendCodeblock(element.value, element.language);
        } else {
          item.appendMarkdown(element);
        }
        result.push(item);
      }
      return result;
    } else {
      return asMarkdownString(value);
    }
  }
  function asDocumentation(value) {
    if (Is$5.string(value)) {
      return value;
    } else {
      switch (value.kind) {
        case ls.MarkupKind.Markdown:
          return asMarkdownString(value.value);
        case ls.MarkupKind.PlainText:
          return value.value;
        default:
          return `Unsupported Markup content received. Kind is: ${value.kind}`;
      }
    }
  }
  function asMarkdownString(value) {
    let result;
    if (value === void 0 || typeof value === "string") {
      result = new code$2.MarkdownString(value);
    } else {
      switch (value.kind) {
        case ls.MarkupKind.Markdown:
          result = new code$2.MarkdownString(value.value);
          break;
        case ls.MarkupKind.PlainText:
          result = new code$2.MarkdownString();
          result.appendText(value.value);
          break;
        default:
          result = new code$2.MarkdownString();
          result.appendText(`Unsupported Markup content received. Kind is: ${value.kind}`);
          break;
      }
    }
    result.isTrusted = trustMarkdown;
    result.supportHtml = supportHtml;
    return result;
  }
  function asHover(hover2) {
    if (!hover2) {
      return void 0;
    }
    return new code$2.Hover(asHoverContent(hover2.contents), asRange(hover2.range));
  }
  async function asCompletionResult(value, allCommitCharacters, token) {
    if (!value) {
      return void 0;
    }
    if (Array.isArray(value)) {
      return async.map(value, (item) => asCompletionItem(item, allCommitCharacters), token);
    }
    const list = value;
    const { defaultRange, commitCharacters } = getCompletionItemDefaults(list, allCommitCharacters);
    const converted = await async.map(list.items, (item) => {
      var _a, _b, _c;
      return asCompletionItem(item, commitCharacters, defaultRange, (_a = list.itemDefaults) == null ? void 0 : _a.insertTextMode, (_b = list.itemDefaults) == null ? void 0 : _b.insertTextFormat, (_c = list.itemDefaults) == null ? void 0 : _c.data);
    }, token);
    return new code$2.CompletionList(converted, list.isIncomplete);
  }
  function getCompletionItemDefaults(list, allCommitCharacters) {
    var _a, _b;
    const rangeDefaults = (_a = list.itemDefaults) == null ? void 0 : _a.editRange;
    const commitCharacters = ((_b = list.itemDefaults) == null ? void 0 : _b.commitCharacters) ?? allCommitCharacters;
    return ls.Range.is(rangeDefaults) ? { defaultRange: asRange(rangeDefaults), commitCharacters } : rangeDefaults !== void 0 ? { defaultRange: { inserting: asRange(rangeDefaults.insert), replacing: asRange(rangeDefaults.replace) }, commitCharacters } : { defaultRange: void 0, commitCharacters };
  }
  function asCompletionItemKind(value) {
    if (ls.CompletionItemKind.Text <= value && value <= ls.CompletionItemKind.TypeParameter) {
      return [value - 1, void 0];
    }
    return [code$2.CompletionItemKind.Text, value];
  }
  function asCompletionItemTag(tag) {
    switch (tag) {
      case ls.CompletionItemTag.Deprecated:
        return code$2.CompletionItemTag.Deprecated;
    }
    return void 0;
  }
  function asCompletionItemTags(tags) {
    if (tags === void 0 || tags === null) {
      return [];
    }
    const result = [];
    for (const tag of tags) {
      const converted = asCompletionItemTag(tag);
      if (converted !== void 0) {
        result.push(converted);
      }
    }
    return result;
  }
  function asCompletionItem(item, defaultCommitCharacters, defaultRange, defaultInsertTextMode, defaultInsertTextFormat, defaultData) {
    const tags = asCompletionItemTags(item.tags);
    const label = asCompletionItemLabel(item);
    const result = new protocolCompletionItem_1.default(label);
    if (item.detail) {
      result.detail = item.detail;
    }
    if (item.documentation) {
      result.documentation = asDocumentation(item.documentation);
      result.documentationFormat = Is$5.string(item.documentation) ? "$string" : item.documentation.kind;
    }
    if (item.filterText) {
      result.filterText = item.filterText;
    }
    const insertText = asCompletionInsertText(item, defaultRange, defaultInsertTextFormat);
    if (insertText) {
      result.insertText = insertText.text;
      result.range = insertText.range;
      result.fromEdit = insertText.fromEdit;
    }
    if (Is$5.number(item.kind)) {
      let [itemKind, original] = asCompletionItemKind(item.kind);
      result.kind = itemKind;
      if (original) {
        result.originalItemKind = original;
      }
    }
    if (item.sortText) {
      result.sortText = item.sortText;
    }
    if (item.additionalTextEdits) {
      result.additionalTextEdits = asTextEditsSync(item.additionalTextEdits);
    }
    const commitCharacters = item.commitCharacters !== void 0 ? Is$5.stringArray(item.commitCharacters) ? item.commitCharacters : void 0 : defaultCommitCharacters;
    if (commitCharacters) {
      result.commitCharacters = commitCharacters.slice();
    }
    if (item.command) {
      result.command = asCommand(item.command);
    }
    if (item.deprecated === true || item.deprecated === false) {
      result.deprecated = item.deprecated;
      if (item.deprecated === true) {
        tags.push(code$2.CompletionItemTag.Deprecated);
      }
    }
    if (item.preselect === true || item.preselect === false) {
      result.preselect = item.preselect;
    }
    const data = item.data ?? defaultData;
    if (data !== void 0) {
      result.data = data;
    }
    if (tags.length > 0) {
      result.tags = tags;
    }
    const insertTextMode = item.insertTextMode ?? defaultInsertTextMode;
    if (insertTextMode !== void 0) {
      result.insertTextMode = insertTextMode;
      if (insertTextMode === ls.InsertTextMode.asIs) {
        result.keepWhitespace = true;
      }
    }
    return result;
  }
  function asCompletionItemLabel(item) {
    if (ls.CompletionItemLabelDetails.is(item.labelDetails)) {
      return {
        label: item.label,
        detail: item.labelDetails.detail,
        description: item.labelDetails.description
      };
    } else {
      return item.label;
    }
  }
  function asCompletionInsertText(item, defaultRange, defaultInsertTextFormat) {
    const insertTextFormat = item.insertTextFormat ?? defaultInsertTextFormat;
    if (item.textEdit !== void 0 || defaultRange !== void 0) {
      const [range2, newText] = item.textEdit !== void 0 ? getCompletionRangeAndText(item.textEdit) : [defaultRange, item.textEditText ?? item.label];
      if (insertTextFormat === ls.InsertTextFormat.Snippet) {
        return { text: new code$2.SnippetString(newText), range: range2, fromEdit: true };
      } else {
        return { text: newText, range: range2, fromEdit: true };
      }
    } else if (item.insertText) {
      if (insertTextFormat === ls.InsertTextFormat.Snippet) {
        return { text: new code$2.SnippetString(item.insertText), fromEdit: false };
      } else {
        return { text: item.insertText, fromEdit: false };
      }
    } else {
      return void 0;
    }
  }
  function getCompletionRangeAndText(value) {
    if (ls.InsertReplaceEdit.is(value)) {
      return [{ inserting: asRange(value.insert), replacing: asRange(value.replace) }, value.newText];
    } else {
      return [asRange(value.range), value.newText];
    }
  }
  function asTextEdit(edit) {
    if (!edit) {
      return void 0;
    }
    return new code$2.TextEdit(asRange(edit.range), edit.newText);
  }
  async function asTextEdits(items, token) {
    if (!items) {
      return void 0;
    }
    return async.map(items, asTextEdit, token);
  }
  function asTextEditsSync(items) {
    if (!items) {
      return void 0;
    }
    const result = new Array(items.length);
    for (let i = 0; i < items.length; i++) {
      result[i] = asTextEdit(items[i]);
    }
    return result;
  }
  async function asSignatureHelp(item, token) {
    if (!item) {
      return void 0;
    }
    let result = new code$2.SignatureHelp();
    if (Is$5.number(item.activeSignature)) {
      result.activeSignature = item.activeSignature;
    } else {
      result.activeSignature = 0;
    }
    if (Is$5.number(item.activeParameter)) {
      result.activeParameter = item.activeParameter;
    } else {
      result.activeParameter = 0;
    }
    if (item.signatures) {
      result.signatures = await asSignatureInformations(item.signatures, token);
    }
    return result;
  }
  async function asSignatureInformations(items, token) {
    return async.mapAsync(items, asSignatureInformation, token);
  }
  async function asSignatureInformation(item, token) {
    let result = new code$2.SignatureInformation(item.label);
    if (item.documentation !== void 0) {
      result.documentation = asDocumentation(item.documentation);
    }
    if (item.parameters !== void 0) {
      result.parameters = await asParameterInformations(item.parameters, token);
    }
    if (item.activeParameter !== void 0) {
      result.activeParameter = item.activeParameter;
    }
    {
      return result;
    }
  }
  function asParameterInformations(items, token) {
    return async.map(items, asParameterInformation, token);
  }
  function asParameterInformation(item) {
    let result = new code$2.ParameterInformation(item.label);
    if (item.documentation) {
      result.documentation = asDocumentation(item.documentation);
    }
    return result;
  }
  function asLocation(item) {
    return item ? new code$2.Location(_uriConverter(item.uri), asRange(item.range)) : void 0;
  }
  async function asDeclarationResult(item, token) {
    if (!item) {
      return void 0;
    }
    return asLocationResult(item, token);
  }
  async function asDefinitionResult(item, token) {
    if (!item) {
      return void 0;
    }
    return asLocationResult(item, token);
  }
  function asLocationLink(item) {
    if (!item) {
      return void 0;
    }
    let result = {
      targetUri: _uriConverter(item.targetUri),
      targetRange: asRange(item.targetRange),
      originSelectionRange: asRange(item.originSelectionRange),
      targetSelectionRange: asRange(item.targetSelectionRange)
    };
    if (!result.targetSelectionRange) {
      throw new Error(`targetSelectionRange must not be undefined or null`);
    }
    return result;
  }
  async function asLocationResult(item, token) {
    if (!item) {
      return void 0;
    }
    if (Is$5.array(item)) {
      if (item.length === 0) {
        return [];
      } else if (ls.LocationLink.is(item[0])) {
        const links = item;
        return async.map(links, asLocationLink, token);
      } else {
        const locations = item;
        return async.map(locations, asLocation, token);
      }
    } else if (ls.LocationLink.is(item)) {
      return [asLocationLink(item)];
    } else {
      return asLocation(item);
    }
  }
  async function asReferences(values, token) {
    if (!values) {
      return void 0;
    }
    return async.map(values, asLocation, token);
  }
  async function asDocumentHighlights(values, token) {
    if (!values) {
      return void 0;
    }
    return async.map(values, asDocumentHighlight, token);
  }
  function asDocumentHighlight(item) {
    let result = new code$2.DocumentHighlight(asRange(item.range));
    if (Is$5.number(item.kind)) {
      result.kind = asDocumentHighlightKind(item.kind);
    }
    return result;
  }
  function asDocumentHighlightKind(item) {
    switch (item) {
      case ls.DocumentHighlightKind.Text:
        return code$2.DocumentHighlightKind.Text;
      case ls.DocumentHighlightKind.Read:
        return code$2.DocumentHighlightKind.Read;
      case ls.DocumentHighlightKind.Write:
        return code$2.DocumentHighlightKind.Write;
    }
    return code$2.DocumentHighlightKind.Text;
  }
  async function asSymbolInformations(values, token) {
    if (!values) {
      return void 0;
    }
    return async.map(values, asSymbolInformation, token);
  }
  function asSymbolKind(item) {
    if (item <= ls.SymbolKind.TypeParameter) {
      return item - 1;
    }
    return code$2.SymbolKind.Property;
  }
  function asSymbolTag(value) {
    switch (value) {
      case ls.SymbolTag.Deprecated:
        return code$2.SymbolTag.Deprecated;
      default:
        return void 0;
    }
  }
  function asSymbolTags(items) {
    if (items === void 0 || items === null) {
      return void 0;
    }
    const result = [];
    for (const item of items) {
      const converted = asSymbolTag(item);
      if (converted !== void 0) {
        result.push(converted);
      }
    }
    return result.length === 0 ? void 0 : result;
  }
  function asSymbolInformation(item) {
    const data = item.data;
    const location = item.location;
    const result = location.range === void 0 || data !== void 0 ? new protocolWorkspaceSymbol_1.default(item.name, asSymbolKind(item.kind), item.containerName ?? "", location.range === void 0 ? _uriConverter(location.uri) : new code$2.Location(_uriConverter(item.location.uri), asRange(location.range)), data) : new code$2.SymbolInformation(item.name, asSymbolKind(item.kind), item.containerName ?? "", new code$2.Location(_uriConverter(item.location.uri), asRange(location.range)));
    fillTags(result, item);
    return result;
  }
  async function asDocumentSymbols(values, token) {
    if (values === void 0 || values === null) {
      return void 0;
    }
    return async.map(values, asDocumentSymbol, token);
  }
  function asDocumentSymbol(value) {
    let result = new code$2.DocumentSymbol(value.name, value.detail || "", asSymbolKind(value.kind), asRange(value.range), asRange(value.selectionRange));
    fillTags(result, value);
    if (value.children !== void 0 && value.children.length > 0) {
      let children = [];
      for (let child of value.children) {
        children.push(asDocumentSymbol(child));
      }
      result.children = children;
    }
    return result;
  }
  function fillTags(result, value) {
    result.tags = asSymbolTags(value.tags);
    if (value.deprecated) {
      if (!result.tags) {
        result.tags = [code$2.SymbolTag.Deprecated];
      } else {
        if (!result.tags.includes(code$2.SymbolTag.Deprecated)) {
          result.tags = result.tags.concat(code$2.SymbolTag.Deprecated);
        }
      }
    }
  }
  function asCommand(item) {
    let result = { title: item.title, command: item.command };
    if (item.arguments) {
      result.arguments = item.arguments;
    }
    return result;
  }
  async function asCommands(items, token) {
    if (!items) {
      return void 0;
    }
    return async.map(items, asCommand, token);
  }
  const kindMapping = /* @__PURE__ */ new Map();
  kindMapping.set(ls.CodeActionKind.Empty, code$2.CodeActionKind.Empty);
  kindMapping.set(ls.CodeActionKind.QuickFix, code$2.CodeActionKind.QuickFix);
  kindMapping.set(ls.CodeActionKind.Refactor, code$2.CodeActionKind.Refactor);
  kindMapping.set(ls.CodeActionKind.RefactorExtract, code$2.CodeActionKind.RefactorExtract);
  kindMapping.set(ls.CodeActionKind.RefactorInline, code$2.CodeActionKind.RefactorInline);
  kindMapping.set(ls.CodeActionKind.RefactorRewrite, code$2.CodeActionKind.RefactorRewrite);
  kindMapping.set(ls.CodeActionKind.Source, code$2.CodeActionKind.Source);
  kindMapping.set(ls.CodeActionKind.SourceOrganizeImports, code$2.CodeActionKind.SourceOrganizeImports);
  function asCodeActionKind(item) {
    if (item === void 0 || item === null) {
      return void 0;
    }
    let result = kindMapping.get(item);
    if (result) {
      return result;
    }
    let parts = item.split(".");
    result = code$2.CodeActionKind.Empty;
    for (let part of parts) {
      result = result.append(part);
    }
    return result;
  }
  function asCodeActionKinds(items) {
    if (items === void 0 || items === null) {
      return void 0;
    }
    return items.map((kind) => asCodeActionKind(kind));
  }
  async function asCodeAction(item, token) {
    if (item === void 0 || item === null) {
      return void 0;
    }
    let result = new protocolCodeAction_1.default(item.title, item.data);
    if (item.kind !== void 0) {
      result.kind = asCodeActionKind(item.kind);
    }
    if (item.diagnostics !== void 0) {
      result.diagnostics = asDiagnosticsSync(item.diagnostics);
    }
    if (item.edit !== void 0) {
      result.edit = await asWorkspaceEdit(item.edit, token);
    }
    if (item.command !== void 0) {
      result.command = asCommand(item.command);
    }
    if (item.isPreferred !== void 0) {
      result.isPreferred = item.isPreferred;
    }
    if (item.disabled !== void 0) {
      result.disabled = { reason: item.disabled.reason };
    }
    return result;
  }
  function asCodeActionResult(items, token) {
    return async.mapAsync(items, async (item) => {
      if (ls.Command.is(item)) {
        return asCommand(item);
      } else {
        return asCodeAction(item, token);
      }
    }, token);
  }
  function asCodeLens(item) {
    if (!item) {
      return void 0;
    }
    let result = new protocolCodeLens_1.default(asRange(item.range));
    if (item.command) {
      result.command = asCommand(item.command);
    }
    if (item.data !== void 0 && item.data !== null) {
      result.data = item.data;
    }
    return result;
  }
  async function asCodeLenses(items, token) {
    if (!items) {
      return void 0;
    }
    return async.map(items, asCodeLens, token);
  }
  async function asWorkspaceEdit(item, token) {
    if (!item) {
      return void 0;
    }
    const sharedMetadata = /* @__PURE__ */ new Map();
    if (item.changeAnnotations !== void 0) {
      const changeAnnotations = item.changeAnnotations;
      await async.forEach(Object.keys(changeAnnotations), (key) => {
        const metaData = asWorkspaceEditEntryMetadata(changeAnnotations[key]);
        sharedMetadata.set(key, metaData);
      }, token);
    }
    const asMetadata = (annotation) => {
      if (annotation === void 0) {
        return void 0;
      } else {
        return sharedMetadata.get(annotation);
      }
    };
    const result = new code$2.WorkspaceEdit();
    if (item.documentChanges) {
      const documentChanges = item.documentChanges;
      await async.forEach(documentChanges, (change) => {
        if (ls.CreateFile.is(change)) {
          result.createFile(_uriConverter(change.uri), change.options, asMetadata(change.annotationId));
        } else if (ls.RenameFile.is(change)) {
          result.renameFile(_uriConverter(change.oldUri), _uriConverter(change.newUri), change.options, asMetadata(change.annotationId));
        } else if (ls.DeleteFile.is(change)) {
          result.deleteFile(_uriConverter(change.uri), change.options, asMetadata(change.annotationId));
        } else if (ls.TextDocumentEdit.is(change)) {
          const uri = _uriConverter(change.textDocument.uri);
          for (const edit of change.edits) {
            if (ls.AnnotatedTextEdit.is(edit)) {
              result.replace(uri, asRange(edit.range), edit.newText, asMetadata(edit.annotationId));
            } else {
              result.replace(uri, asRange(edit.range), edit.newText);
            }
          }
        } else {
          throw new Error(`Unknown workspace edit change received:
${JSON.stringify(change, void 0, 4)}`);
        }
      }, token);
    } else if (item.changes) {
      const changes = item.changes;
      await async.forEach(Object.keys(changes), (key) => {
        result.set(_uriConverter(key), asTextEditsSync(changes[key]));
      }, token);
    }
    return result;
  }
  function asWorkspaceEditEntryMetadata(annotation) {
    if (annotation === void 0) {
      return void 0;
    }
    return { label: annotation.label, needsConfirmation: !!annotation.needsConfirmation, description: annotation.description };
  }
  function asDocumentLink(item) {
    let range2 = asRange(item.range);
    let target = item.target ? asUri(item.target) : void 0;
    let link = new protocolDocumentLink_1.default(range2, target);
    if (item.tooltip !== void 0) {
      link.tooltip = item.tooltip;
    }
    if (item.data !== void 0 && item.data !== null) {
      link.data = item.data;
    }
    return link;
  }
  async function asDocumentLinks(items, token) {
    if (!items) {
      return void 0;
    }
    return async.map(items, asDocumentLink, token);
  }
  function asColor(color) {
    return new code$2.Color(color.red, color.green, color.blue, color.alpha);
  }
  function asColorInformation(ci) {
    return new code$2.ColorInformation(asRange(ci.range), asColor(ci.color));
  }
  async function asColorInformations(colorInformation, token) {
    if (!colorInformation) {
      return void 0;
    }
    return async.map(colorInformation, asColorInformation, token);
  }
  function asColorPresentation(cp) {
    let presentation = new code$2.ColorPresentation(cp.label);
    presentation.additionalTextEdits = asTextEditsSync(cp.additionalTextEdits);
    if (cp.textEdit) {
      presentation.textEdit = asTextEdit(cp.textEdit);
    }
    return presentation;
  }
  async function asColorPresentations(colorPresentations, token) {
    if (!colorPresentations) {
      return void 0;
    }
    return async.map(colorPresentations, asColorPresentation, token);
  }
  function asFoldingRangeKind(kind) {
    if (kind) {
      switch (kind) {
        case ls.FoldingRangeKind.Comment:
          return code$2.FoldingRangeKind.Comment;
        case ls.FoldingRangeKind.Imports:
          return code$2.FoldingRangeKind.Imports;
        case ls.FoldingRangeKind.Region:
          return code$2.FoldingRangeKind.Region;
      }
    }
    return void 0;
  }
  function asFoldingRange(r) {
    return new code$2.FoldingRange(r.startLine, r.endLine, asFoldingRangeKind(r.kind));
  }
  async function asFoldingRanges(foldingRanges, token) {
    if (!foldingRanges) {
      return void 0;
    }
    return async.map(foldingRanges, asFoldingRange, token);
  }
  function asSelectionRange(selectionRange2) {
    return new code$2.SelectionRange(asRange(selectionRange2.range), selectionRange2.parent ? asSelectionRange(selectionRange2.parent) : void 0);
  }
  async function asSelectionRanges(selectionRanges, token) {
    if (!Array.isArray(selectionRanges)) {
      return [];
    }
    return async.map(selectionRanges, asSelectionRange, token);
  }
  function asInlineValue(inlineValue2) {
    if (ls.InlineValueText.is(inlineValue2)) {
      return new code$2.InlineValueText(asRange(inlineValue2.range), inlineValue2.text);
    } else if (ls.InlineValueVariableLookup.is(inlineValue2)) {
      return new code$2.InlineValueVariableLookup(asRange(inlineValue2.range), inlineValue2.variableName, inlineValue2.caseSensitiveLookup);
    } else {
      return new code$2.InlineValueEvaluatableExpression(asRange(inlineValue2.range), inlineValue2.expression);
    }
  }
  async function asInlineValues(inlineValues, token) {
    if (!Array.isArray(inlineValues)) {
      return [];
    }
    return async.map(inlineValues, asInlineValue, token);
  }
  async function asInlayHint(value, token) {
    const label = typeof value.label === "string" ? value.label : await async.map(value.label, asInlayHintLabelPart, token);
    const result = new protocolInlayHint_1.default(asPosition(value.position), label);
    if (value.kind !== void 0) {
      result.kind = value.kind;
    }
    if (value.textEdits !== void 0) {
      result.textEdits = await asTextEdits(value.textEdits, token);
    }
    if (value.tooltip !== void 0) {
      result.tooltip = asTooltip(value.tooltip);
    }
    if (value.paddingLeft !== void 0) {
      result.paddingLeft = value.paddingLeft;
    }
    if (value.paddingRight !== void 0) {
      result.paddingRight = value.paddingRight;
    }
    if (value.data !== void 0) {
      result.data = value.data;
    }
    return result;
  }
  function asInlayHintLabelPart(part) {
    const result = new code$2.InlayHintLabelPart(part.value);
    if (part.location !== void 0) {
      result.location = asLocation(part.location);
    }
    if (part.tooltip !== void 0) {
      result.tooltip = asTooltip(part.tooltip);
    }
    if (part.command !== void 0) {
      result.command = asCommand(part.command);
    }
    return result;
  }
  function asTooltip(value) {
    if (typeof value === "string") {
      return value;
    }
    return asMarkdownString(value);
  }
  async function asInlayHints(values, token) {
    if (!Array.isArray(values)) {
      return void 0;
    }
    return async.mapAsync(values, asInlayHint, token);
  }
  function asCallHierarchyItem(item) {
    if (item === null) {
      return void 0;
    }
    const result = new protocolCallHierarchyItem_1.default(asSymbolKind(item.kind), item.name, item.detail || "", asUri(item.uri), asRange(item.range), asRange(item.selectionRange), item.data);
    if (item.tags !== void 0) {
      result.tags = asSymbolTags(item.tags);
    }
    return result;
  }
  async function asCallHierarchyItems(items, token) {
    if (items === null) {
      return void 0;
    }
    return async.map(items, asCallHierarchyItem, token);
  }
  async function asCallHierarchyIncomingCall(item, token) {
    return new code$2.CallHierarchyIncomingCall(asCallHierarchyItem(item.from), await asRanges(item.fromRanges, token));
  }
  async function asCallHierarchyIncomingCalls(items, token) {
    if (items === null) {
      return void 0;
    }
    return async.mapAsync(items, asCallHierarchyIncomingCall, token);
  }
  async function asCallHierarchyOutgoingCall(item, token) {
    return new code$2.CallHierarchyOutgoingCall(asCallHierarchyItem(item.to), await asRanges(item.fromRanges, token));
  }
  async function asCallHierarchyOutgoingCalls(items, token) {
    if (items === null) {
      return void 0;
    }
    return async.mapAsync(items, asCallHierarchyOutgoingCall, token);
  }
  async function asSemanticTokens(value, _token) {
    if (value === void 0 || value === null) {
      return void 0;
    }
    return new code$2.SemanticTokens(new Uint32Array(value.data), value.resultId);
  }
  function asSemanticTokensEdit(value) {
    return new code$2.SemanticTokensEdit(value.start, value.deleteCount, value.data !== void 0 ? new Uint32Array(value.data) : void 0);
  }
  async function asSemanticTokensEdits(value, _token) {
    if (value === void 0 || value === null) {
      return void 0;
    }
    return new code$2.SemanticTokensEdits(value.edits.map(asSemanticTokensEdit), value.resultId);
  }
  function asSemanticTokensLegend(value) {
    return value;
  }
  async function asLinkedEditingRanges(value, token) {
    if (value === null || value === void 0) {
      return void 0;
    }
    return new code$2.LinkedEditingRanges(await asRanges(value.ranges, token), asRegularExpression(value.wordPattern));
  }
  function asRegularExpression(value) {
    if (value === null || value === void 0) {
      return void 0;
    }
    return new RegExp(value);
  }
  function asTypeHierarchyItem(item) {
    if (item === null) {
      return void 0;
    }
    let result = new protocolTypeHierarchyItem_1.default(asSymbolKind(item.kind), item.name, item.detail || "", asUri(item.uri), asRange(item.range), asRange(item.selectionRange), item.data);
    if (item.tags !== void 0) {
      result.tags = asSymbolTags(item.tags);
    }
    return result;
  }
  async function asTypeHierarchyItems(items, token) {
    if (items === null) {
      return void 0;
    }
    return async.map(items, asTypeHierarchyItem, token);
  }
  function asGlobPattern(pattern) {
    if (Is$5.string(pattern)) {
      return pattern;
    }
    if (ls.RelativePattern.is(pattern)) {
      if (ls.URI.is(pattern.baseUri)) {
        return new code$2.RelativePattern(asUri(pattern.baseUri), pattern.pattern);
      } else if (ls.WorkspaceFolder.is(pattern.baseUri)) {
        const workspaceFolder2 = code$2.workspace.getWorkspaceFolder(asUri(pattern.baseUri.uri));
        return workspaceFolder2 !== void 0 ? new code$2.RelativePattern(workspaceFolder2, pattern.pattern) : void 0;
      }
    }
    return void 0;
  }
  return {
    asUri,
    asDocumentSelector,
    asDiagnostics,
    asDiagnostic,
    asRange,
    asRanges,
    asPosition,
    asDiagnosticSeverity,
    asDiagnosticTag,
    asHover,
    asCompletionResult,
    asCompletionItem,
    asTextEdit,
    asTextEdits,
    asSignatureHelp,
    asSignatureInformations,
    asSignatureInformation,
    asParameterInformations,
    asParameterInformation,
    asDeclarationResult,
    asDefinitionResult,
    asLocation,
    asReferences,
    asDocumentHighlights,
    asDocumentHighlight,
    asDocumentHighlightKind,
    asSymbolKind,
    asSymbolTag,
    asSymbolTags,
    asSymbolInformations,
    asSymbolInformation,
    asDocumentSymbols,
    asDocumentSymbol,
    asCommand,
    asCommands,
    asCodeAction,
    asCodeActionKind,
    asCodeActionKinds,
    asCodeActionResult,
    asCodeLens,
    asCodeLenses,
    asWorkspaceEdit,
    asDocumentLink,
    asDocumentLinks,
    asFoldingRangeKind,
    asFoldingRange,
    asFoldingRanges,
    asColor,
    asColorInformation,
    asColorInformations,
    asColorPresentation,
    asColorPresentations,
    asSelectionRange,
    asSelectionRanges,
    asInlineValue,
    asInlineValues,
    asInlayHint,
    asInlayHints,
    asSemanticTokensLegend,
    asSemanticTokens,
    asSemanticTokensEdit,
    asSemanticTokensEdits,
    asCallHierarchyItem,
    asCallHierarchyItems,
    asCallHierarchyIncomingCall,
    asCallHierarchyIncomingCalls,
    asCallHierarchyOutgoingCall,
    asCallHierarchyOutgoingCalls,
    asLinkedEditingRanges,
    asTypeHierarchyItem,
    asTypeHierarchyItems,
    asGlobPattern
  };
}
createConverter_1 = protocolConverter$1.createConverter = createConverter;
const protocolConverter = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get createConverter() {
    return createConverter_1;
  },
  default: protocolConverter$1
}, [protocolConverter$1]);
const require$$3$1 = /* @__PURE__ */ getAugmentedNamespace(protocolConverter);
var progressPart$1 = {};
Object.defineProperty(progressPart$1, "__esModule", { value: true });
var ProgressPart_1 = progressPart$1.ProgressPart = void 0;
const vscode_1$r = require$$0$9;
const vscode_languageserver_protocol_1$t = require$$0$5;
const Is$4 = require$$4$1;
class ProgressPart {
  constructor(_client, _token, done) {
    this._client = _client;
    this._token = _token;
    this._reported = 0;
    this._infinite = false;
    this._lspProgressDisposable = this._client.onProgress(vscode_languageserver_protocol_1$t.WorkDoneProgress.type, this._token, (value) => {
      switch (value.kind) {
        case "begin":
          this.begin(value);
          break;
        case "report":
          this.report(value);
          break;
        case "end":
          this.done();
          done && done(this);
          break;
      }
    });
  }
  begin(params) {
    this._infinite = params.percentage === void 0;
    if (this._lspProgressDisposable === void 0) {
      return;
    }
    void vscode_1$r.window.withProgress({ location: vscode_1$r.ProgressLocation.Window, cancellable: params.cancellable, title: params.title }, async (progress2, cancellationToken) => {
      if (this._lspProgressDisposable === void 0) {
        return;
      }
      this._progress = progress2;
      this._cancellationToken = cancellationToken;
      this._tokenDisposable = this._cancellationToken.onCancellationRequested(() => {
        this._client.sendNotification(vscode_languageserver_protocol_1$t.WorkDoneProgressCancelNotification.type, { token: this._token });
      });
      this.report(params);
      return new Promise((resolve, reject) => {
        this._resolve = resolve;
        this._reject = reject;
      });
    });
  }
  report(params) {
    if (this._infinite && Is$4.string(params.message)) {
      this._progress !== void 0 && this._progress.report({ message: params.message });
    } else if (Is$4.number(params.percentage)) {
      const percentage = Math.max(0, Math.min(params.percentage, 100));
      const delta = Math.max(0, percentage - this._reported);
      this._reported += delta;
      this._progress !== void 0 && this._progress.report({ message: params.message, increment: delta });
    }
  }
  cancel() {
    this.cleanup();
    if (this._reject !== void 0) {
      this._reject();
      this._resolve = void 0;
      this._reject = void 0;
    }
  }
  done() {
    this.cleanup();
    if (this._resolve !== void 0) {
      this._resolve();
      this._resolve = void 0;
      this._reject = void 0;
    }
  }
  cleanup() {
    if (this._lspProgressDisposable !== void 0) {
      this._lspProgressDisposable.dispose();
      this._lspProgressDisposable = void 0;
    }
    if (this._tokenDisposable !== void 0) {
      this._tokenDisposable.dispose();
      this._tokenDisposable = void 0;
    }
    this._progress = void 0;
    this._cancellationToken = void 0;
  }
}
ProgressPart_1 = progressPart$1.ProgressPart = ProgressPart;
const progressPart = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get ProgressPart() {
    return ProgressPart_1;
  },
  default: progressPart$1
}, [progressPart$1]);
const require$$7 = /* @__PURE__ */ getAugmentedNamespace(progressPart);
var notebook$1 = {};
Object.defineProperty(notebook$1, "__esModule", { value: true });
var NotebookDocumentSyncFeature_1 = notebook$1.NotebookDocumentSyncFeature = void 0;
const vscode$1 = require$$0$9;
const minimatch$1 = require$$1$2;
const proto$3 = require$$0$5;
const UUID$h = require$$6$1;
const Is$3 = require$$4$1;
function ensure$2(target, key) {
  if (target[key] === void 0) {
    target[key] = {};
  }
  return target[key];
}
var Converter;
(function(Converter2) {
  (function(c2p) {
    function asVersionedNotebookDocumentIdentifier(notebookDocument, base) {
      return {
        version: notebookDocument.version,
        uri: base.asUri(notebookDocument.uri)
      };
    }
    c2p.asVersionedNotebookDocumentIdentifier = asVersionedNotebookDocumentIdentifier;
    function asNotebookDocument(notebookDocument, cells, base) {
      const result = proto$3.NotebookDocument.create(base.asUri(notebookDocument.uri), notebookDocument.notebookType, notebookDocument.version, asNotebookCells(cells, base));
      if (Object.keys(notebookDocument.metadata).length > 0) {
        result.metadata = asMetadata(notebookDocument.metadata);
      }
      return result;
    }
    c2p.asNotebookDocument = asNotebookDocument;
    function asNotebookCells(cells, base) {
      return cells.map((cell) => asNotebookCell(cell, base));
    }
    c2p.asNotebookCells = asNotebookCells;
    function asMetadata(metadata) {
      const seen = /* @__PURE__ */ new Set();
      return deepCopy(seen, metadata);
    }
    c2p.asMetadata = asMetadata;
    function asNotebookCell(cell, base) {
      const result = proto$3.NotebookCell.create(asNotebookCellKind(cell.kind), base.asUri(cell.document.uri));
      if (Object.keys(cell.metadata).length > 0) {
        result.metadata = asMetadata(cell.metadata);
      }
      if (cell.executionSummary !== void 0 && (Is$3.number(cell.executionSummary.executionOrder) && Is$3.boolean(cell.executionSummary.success))) {
        result.executionSummary = {
          executionOrder: cell.executionSummary.executionOrder,
          success: cell.executionSummary.success
        };
      }
      return result;
    }
    c2p.asNotebookCell = asNotebookCell;
    function asNotebookCellKind(kind) {
      switch (kind) {
        case vscode$1.NotebookCellKind.Markup:
          return proto$3.NotebookCellKind.Markup;
        case vscode$1.NotebookCellKind.Code:
          return proto$3.NotebookCellKind.Code;
      }
    }
    function deepCopy(seen, value) {
      if (seen.has(value)) {
        throw new Error(`Can't deep copy cyclic structures.`);
      }
      if (Array.isArray(value)) {
        const result = [];
        for (const elem of value) {
          if (elem !== null && typeof elem === "object" || Array.isArray(elem)) {
            result.push(deepCopy(seen, elem));
          } else {
            if (elem instanceof RegExp) {
              throw new Error(`Can't transfer regular expressions to the server`);
            }
            result.push(elem);
          }
        }
        return result;
      } else {
        const props = Object.keys(value);
        const result = /* @__PURE__ */ Object.create(null);
        for (const prop of props) {
          const elem = value[prop];
          if (elem !== null && typeof elem === "object" || Array.isArray(elem)) {
            result[prop] = deepCopy(seen, elem);
          } else {
            if (elem instanceof RegExp) {
              throw new Error(`Can't transfer regular expressions to the server`);
            }
            result[prop] = elem;
          }
        }
        return result;
      }
    }
    function asTextContentChange(event, base) {
      const params = base.asChangeTextDocumentParams(event, event.document.uri, event.document.version);
      return { document: params.textDocument, changes: params.contentChanges };
    }
    c2p.asTextContentChange = asTextContentChange;
    function asNotebookDocumentChangeEvent(event, base) {
      const result = /* @__PURE__ */ Object.create(null);
      if (event.metadata) {
        result.metadata = Converter2.c2p.asMetadata(event.metadata);
      }
      if (event.cells !== void 0) {
        const cells = /* @__PURE__ */ Object.create(null);
        const changedCells = event.cells;
        if (changedCells.structure) {
          cells.structure = {
            array: {
              start: changedCells.structure.array.start,
              deleteCount: changedCells.structure.array.deleteCount,
              cells: changedCells.structure.array.cells !== void 0 ? changedCells.structure.array.cells.map((cell) => Converter2.c2p.asNotebookCell(cell, base)) : void 0
            },
            didOpen: changedCells.structure.didOpen !== void 0 ? changedCells.structure.didOpen.map((cell) => base.asOpenTextDocumentParams(cell.document).textDocument) : void 0,
            didClose: changedCells.structure.didClose !== void 0 ? changedCells.structure.didClose.map((cell) => base.asCloseTextDocumentParams(cell.document).textDocument) : void 0
          };
        }
        if (changedCells.data !== void 0) {
          cells.data = changedCells.data.map((cell) => Converter2.c2p.asNotebookCell(cell, base));
        }
        if (changedCells.textContent !== void 0) {
          cells.textContent = changedCells.textContent.map((event2) => Converter2.c2p.asTextContentChange(event2, base));
        }
        if (Object.keys(cells).length > 0) {
          result.cells = cells;
        }
      }
      return result;
    }
    c2p.asNotebookDocumentChangeEvent = asNotebookDocumentChangeEvent;
  })(Converter2.c2p || (Converter2.c2p = {}));
})(Converter || (Converter = {}));
var $NotebookCell;
(function($NotebookCell2) {
  function computeDiff(originalCells, modifiedCells, compareMetadata) {
    const originalLength = originalCells.length;
    const modifiedLength = modifiedCells.length;
    let startIndex = 0;
    while (startIndex < modifiedLength && startIndex < originalLength && equals(originalCells[startIndex], modifiedCells[startIndex], compareMetadata)) {
      startIndex++;
    }
    if (startIndex < modifiedLength && startIndex < originalLength) {
      let originalEndIndex = originalLength - 1;
      let modifiedEndIndex = modifiedLength - 1;
      while (originalEndIndex >= 0 && modifiedEndIndex >= 0 && equals(originalCells[originalEndIndex], modifiedCells[modifiedEndIndex], compareMetadata)) {
        originalEndIndex--;
        modifiedEndIndex--;
      }
      const deleteCount = originalEndIndex + 1 - startIndex;
      const newCells = startIndex === modifiedEndIndex + 1 ? void 0 : modifiedCells.slice(startIndex, modifiedEndIndex + 1);
      return newCells !== void 0 ? { start: startIndex, deleteCount, cells: newCells } : { start: startIndex, deleteCount };
    } else if (startIndex < modifiedLength) {
      return { start: startIndex, deleteCount: 0, cells: modifiedCells.slice(startIndex) };
    } else if (startIndex < originalLength) {
      return { start: startIndex, deleteCount: originalLength - startIndex };
    } else {
      return void 0;
    }
  }
  $NotebookCell2.computeDiff = computeDiff;
  function equals(one, other, compareMetaData = true) {
    if (one.kind !== other.kind || one.document.uri.toString() !== other.document.uri.toString() || one.document.languageId !== other.document.languageId || !equalsExecution(one.executionSummary, other.executionSummary)) {
      return false;
    }
    return !compareMetaData || compareMetaData && equalsMetadata(one.metadata, other.metadata);
  }
  function equalsExecution(one, other) {
    if (one === other) {
      return true;
    }
    if (one === void 0 || other === void 0) {
      return false;
    }
    return one.executionOrder === other.executionOrder && one.success === other.success && equalsTiming(one.timing, other.timing);
  }
  function equalsTiming(one, other) {
    if (one === other) {
      return true;
    }
    if (one === void 0 || other === void 0) {
      return false;
    }
    return one.startTime === other.startTime && one.endTime === other.endTime;
  }
  function equalsMetadata(one, other) {
    if (one === other) {
      return true;
    }
    if (one === null || one === void 0 || other === null || other === void 0) {
      return false;
    }
    if (typeof one !== typeof other) {
      return false;
    }
    if (typeof one !== "object") {
      return false;
    }
    const oneArray = Array.isArray(one);
    const otherArray = Array.isArray(other);
    if (oneArray !== otherArray) {
      return false;
    }
    if (oneArray && otherArray) {
      if (one.length !== other.length) {
        return false;
      }
      for (let i = 0; i < one.length; i++) {
        if (!equalsMetadata(one[i], other[i])) {
          return false;
        }
      }
    }
    if (isObjectLiteral(one) && isObjectLiteral(other)) {
      const oneKeys = Object.keys(one);
      const otherKeys = Object.keys(other);
      if (oneKeys.length !== otherKeys.length) {
        return false;
      }
      oneKeys.sort();
      otherKeys.sort();
      if (!equalsMetadata(oneKeys, otherKeys)) {
        return false;
      }
      for (let i = 0; i < oneKeys.length; i++) {
        const prop = oneKeys[i];
        if (!equalsMetadata(one[prop], other[prop])) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  function isObjectLiteral(value) {
    return value !== null && typeof value === "object";
  }
  $NotebookCell2.isObjectLiteral = isObjectLiteral;
})($NotebookCell || ($NotebookCell = {}));
var $NotebookDocumentFilter;
(function($NotebookDocumentFilter2) {
  function matchNotebook(filter, notebookDocument) {
    if (typeof filter === "string") {
      return filter === "*" || notebookDocument.notebookType === filter;
    }
    if (filter.notebookType !== void 0 && filter.notebookType !== "*" && notebookDocument.notebookType !== filter.notebookType) {
      return false;
    }
    const uri = notebookDocument.uri;
    if (filter.scheme !== void 0 && filter.scheme !== "*" && uri.scheme !== filter.scheme) {
      return false;
    }
    if (filter.pattern !== void 0) {
      const matcher = new minimatch$1.Minimatch(filter.pattern, { noext: true });
      if (!matcher.makeRe()) {
        return false;
      }
      if (!matcher.match(uri.fsPath)) {
        return false;
      }
    }
    return true;
  }
  $NotebookDocumentFilter2.matchNotebook = matchNotebook;
})($NotebookDocumentFilter || ($NotebookDocumentFilter = {}));
var $NotebookDocumentSyncOptions;
(function($NotebookDocumentSyncOptions2) {
  function asDocumentSelector(options) {
    var _a, _b, _c;
    const selector = options.notebookSelector;
    const result = [];
    for (const element of selector) {
      const notebookType = (typeof element.notebook === "string" ? element.notebook : (_a = element.notebook) == null ? void 0 : _a.notebookType) ?? "*";
      const scheme = typeof element.notebook === "string" ? void 0 : (_b = element.notebook) == null ? void 0 : _b.scheme;
      const pattern = typeof element.notebook === "string" ? void 0 : (_c = element.notebook) == null ? void 0 : _c.pattern;
      if (element.cells !== void 0) {
        for (const cell of element.cells) {
          result.push(asDocumentFilter(notebookType, scheme, pattern, cell.language));
        }
      } else {
        result.push(asDocumentFilter(notebookType, scheme, pattern, void 0));
      }
    }
    return result;
  }
  $NotebookDocumentSyncOptions2.asDocumentSelector = asDocumentSelector;
  function asDocumentFilter(notebookType, scheme, pattern, language) {
    return scheme === void 0 && pattern === void 0 ? { notebook: notebookType, language } : { notebook: { notebookType, scheme, pattern }, language };
  }
})($NotebookDocumentSyncOptions || ($NotebookDocumentSyncOptions = {}));
var SyncInfo;
(function(SyncInfo2) {
  function create(cells) {
    return {
      cells,
      uris: new Set(cells.map((cell) => cell.document.uri.toString()))
    };
  }
  SyncInfo2.create = create;
})(SyncInfo || (SyncInfo = {}));
class NotebookDocumentSyncFeatureProvider {
  constructor(client2, options) {
    this.client = client2;
    this.options = options;
    this.notebookSyncInfo = /* @__PURE__ */ new Map();
    this.notebookDidOpen = /* @__PURE__ */ new Set();
    this.disposables = [];
    this.selector = client2.protocol2CodeConverter.asDocumentSelector($NotebookDocumentSyncOptions.asDocumentSelector(options));
    vscode$1.workspace.onDidOpenNotebookDocument((notebookDocument) => {
      this.notebookDidOpen.add(notebookDocument.uri.toString());
      this.didOpen(notebookDocument);
    }, void 0, this.disposables);
    for (const notebookDocument of vscode$1.workspace.notebookDocuments) {
      this.notebookDidOpen.add(notebookDocument.uri.toString());
      this.didOpen(notebookDocument);
    }
    vscode$1.workspace.onDidChangeNotebookDocument((event) => this.didChangeNotebookDocument(event), void 0, this.disposables);
    if (this.options.save === true) {
      vscode$1.workspace.onDidSaveNotebookDocument((notebookDocument) => this.didSave(notebookDocument), void 0, this.disposables);
    }
    vscode$1.workspace.onDidCloseNotebookDocument((notebookDocument) => {
      this.didClose(notebookDocument);
      this.notebookDidOpen.delete(notebookDocument.uri.toString());
    }, void 0, this.disposables);
  }
  getState() {
    for (const notebook2 of vscode$1.workspace.notebookDocuments) {
      const matchingCells = this.getMatchingCells(notebook2);
      if (matchingCells !== void 0) {
        return { kind: "document", id: "$internal", registrations: true, matches: true };
      }
    }
    return { kind: "document", id: "$internal", registrations: true, matches: false };
  }
  get mode() {
    return "notebook";
  }
  handles(textDocument) {
    return vscode$1.languages.match(this.selector, textDocument) > 0;
  }
  didOpenNotebookCellTextDocument(notebookDocument, cell) {
    if (vscode$1.languages.match(this.selector, cell.document) === 0) {
      return;
    }
    if (!this.notebookDidOpen.has(notebookDocument.uri.toString())) {
      return;
    }
    const syncInfo = this.notebookSyncInfo.get(notebookDocument.uri.toString());
    const cellMatches = this.cellMatches(notebookDocument, cell);
    if (syncInfo !== void 0) {
      const cellIsSynced = syncInfo.uris.has(cell.document.uri.toString());
      if (cellMatches && cellIsSynced || !cellMatches && !cellIsSynced) {
        return;
      }
      if (cellMatches) {
        const matchingCells = this.getMatchingCells(notebookDocument);
        if (matchingCells !== void 0) {
          const event = this.asNotebookDocumentChangeEvent(notebookDocument, void 0, syncInfo, matchingCells);
          if (event !== void 0) {
            this.doSendChange(event, matchingCells).catch(() => {
            });
          }
        }
      }
    } else {
      if (cellMatches) {
        this.doSendOpen(notebookDocument, [cell]).catch(() => {
        });
      }
    }
  }
  didChangeNotebookCellTextDocument(notebookDocument, event) {
    if (vscode$1.languages.match(this.selector, event.document) === 0) {
      return;
    }
    this.doSendChange({
      notebook: notebookDocument,
      cells: { textContent: [event] }
    }, void 0).catch(() => {
    });
  }
  didCloseNotebookCellTextDocument(notebookDocument, cell) {
    const syncInfo = this.notebookSyncInfo.get(notebookDocument.uri.toString());
    if (syncInfo === void 0) {
      return;
    }
    const cellUri = cell.document.uri;
    const index = syncInfo.cells.findIndex((item) => item.document.uri.toString() === cellUri.toString());
    if (index === -1) {
      return;
    }
    if (index === 0 && syncInfo.cells.length === 1) {
      this.doSendClose(notebookDocument, syncInfo.cells).catch(() => {
      });
    } else {
      const newCells = syncInfo.cells.slice();
      const deleted = newCells.splice(index, 1);
      this.doSendChange({
        notebook: notebookDocument,
        cells: {
          structure: {
            array: { start: index, deleteCount: 1 },
            didClose: deleted
          }
        }
      }, newCells).catch(() => {
      });
    }
  }
  dispose() {
    for (const disposable2 of this.disposables) {
      disposable2.dispose();
    }
  }
  didOpen(notebookDocument, matchingCells = this.getMatchingCells(notebookDocument), syncInfo = this.notebookSyncInfo.get(notebookDocument.uri.toString())) {
    if (syncInfo !== void 0) {
      if (matchingCells !== void 0) {
        const event = this.asNotebookDocumentChangeEvent(notebookDocument, void 0, syncInfo, matchingCells);
        if (event !== void 0) {
          this.doSendChange(event, matchingCells).catch(() => {
          });
        }
      } else {
        this.doSendClose(notebookDocument, []).catch(() => {
        });
      }
    } else {
      if (matchingCells === void 0) {
        return;
      }
      this.doSendOpen(notebookDocument, matchingCells).catch(() => {
      });
    }
  }
  didChangeNotebookDocument(event) {
    const notebookDocument = event.notebook;
    const syncInfo = this.notebookSyncInfo.get(notebookDocument.uri.toString());
    if (syncInfo === void 0) {
      if (event.contentChanges.length === 0) {
        return;
      }
      const cells = this.getMatchingCells(notebookDocument);
      if (cells === void 0) {
        return;
      }
      this.didOpen(notebookDocument, cells, syncInfo);
    } else {
      const cells = this.getMatchingCells(notebookDocument);
      if (cells === void 0) {
        this.didClose(notebookDocument, syncInfo);
        return;
      }
      const newEvent = this.asNotebookDocumentChangeEvent(event.notebook, event, syncInfo, cells);
      if (newEvent !== void 0) {
        this.doSendChange(newEvent, cells).catch(() => {
        });
      }
    }
  }
  didSave(notebookDocument) {
    const syncInfo = this.notebookSyncInfo.get(notebookDocument.uri.toString());
    if (syncInfo === void 0) {
      return;
    }
    this.doSendSave(notebookDocument).catch(() => {
    });
  }
  didClose(notebookDocument, syncInfo = this.notebookSyncInfo.get(notebookDocument.uri.toString())) {
    if (syncInfo === void 0) {
      return;
    }
    const syncedCells = notebookDocument.getCells().filter((cell) => syncInfo.uris.has(cell.document.uri.toString()));
    this.doSendClose(notebookDocument, syncedCells).catch(() => {
    });
  }
  async sendDidOpenNotebookDocument(notebookDocument) {
    const cells = this.getMatchingCells(notebookDocument);
    if (cells === void 0) {
      return;
    }
    return this.doSendOpen(notebookDocument, cells);
  }
  async doSendOpen(notebookDocument, cells) {
    var _a;
    const send = async (notebookDocument2, cells2) => {
      const nb = Converter.c2p.asNotebookDocument(notebookDocument2, cells2, this.client.code2ProtocolConverter);
      const cellDocuments = cells2.map((cell) => this.client.code2ProtocolConverter.asTextDocumentItem(cell.document));
      try {
        await this.client.sendNotification(proto$3.DidOpenNotebookDocumentNotification.type, {
          notebookDocument: nb,
          cellTextDocuments: cellDocuments
        });
      } catch (error2) {
        this.client.error("Sending DidOpenNotebookDocumentNotification failed", error2);
        throw error2;
      }
    };
    const middleware = (_a = this.client.middleware) == null ? void 0 : _a.notebooks;
    this.notebookSyncInfo.set(notebookDocument.uri.toString(), SyncInfo.create(cells));
    return (middleware == null ? void 0 : middleware.didOpen) !== void 0 ? middleware.didOpen(notebookDocument, cells, send) : send(notebookDocument, cells);
  }
  async sendDidChangeNotebookDocument(event) {
    return this.doSendChange(event, void 0);
  }
  async doSendChange(event, cells = this.getMatchingCells(event.notebook)) {
    var _a, _b;
    const send = async (event2) => {
      try {
        await this.client.sendNotification(proto$3.DidChangeNotebookDocumentNotification.type, {
          notebookDocument: Converter.c2p.asVersionedNotebookDocumentIdentifier(event2.notebook, this.client.code2ProtocolConverter),
          change: Converter.c2p.asNotebookDocumentChangeEvent(event2, this.client.code2ProtocolConverter)
        });
      } catch (error2) {
        this.client.error("Sending DidChangeNotebookDocumentNotification failed", error2);
        throw error2;
      }
    };
    const middleware = (_a = this.client.middleware) == null ? void 0 : _a.notebooks;
    if (((_b = event.cells) == null ? void 0 : _b.structure) !== void 0) {
      this.notebookSyncInfo.set(event.notebook.uri.toString(), SyncInfo.create(cells ?? []));
    }
    return (middleware == null ? void 0 : middleware.didChange) !== void 0 ? middleware == null ? void 0 : middleware.didChange(event, send) : send(event);
  }
  async sendDidSaveNotebookDocument(notebookDocument) {
    return this.doSendSave(notebookDocument);
  }
  async doSendSave(notebookDocument) {
    var _a;
    const send = async (notebookDocument2) => {
      try {
        await this.client.sendNotification(proto$3.DidSaveNotebookDocumentNotification.type, {
          notebookDocument: { uri: this.client.code2ProtocolConverter.asUri(notebookDocument2.uri) }
        });
      } catch (error2) {
        this.client.error("Sending DidSaveNotebookDocumentNotification failed", error2);
        throw error2;
      }
    };
    const middleware = (_a = this.client.middleware) == null ? void 0 : _a.notebooks;
    return (middleware == null ? void 0 : middleware.didSave) !== void 0 ? middleware.didSave(notebookDocument, send) : send(notebookDocument);
  }
  async sendDidCloseNotebookDocument(notebookDocument) {
    return this.doSendClose(notebookDocument, this.getMatchingCells(notebookDocument) ?? []);
  }
  async doSendClose(notebookDocument, cells) {
    var _a;
    const send = async (notebookDocument2, cells2) => {
      try {
        await this.client.sendNotification(proto$3.DidCloseNotebookDocumentNotification.type, {
          notebookDocument: { uri: this.client.code2ProtocolConverter.asUri(notebookDocument2.uri) },
          cellTextDocuments: cells2.map((cell) => this.client.code2ProtocolConverter.asTextDocumentIdentifier(cell.document))
        });
      } catch (error2) {
        this.client.error("Sending DidCloseNotebookDocumentNotification failed", error2);
        throw error2;
      }
    };
    const middleware = (_a = this.client.middleware) == null ? void 0 : _a.notebooks;
    this.notebookSyncInfo.delete(notebookDocument.uri.toString());
    return (middleware == null ? void 0 : middleware.didClose) !== void 0 ? middleware.didClose(notebookDocument, cells, send) : send(notebookDocument, cells);
  }
  asNotebookDocumentChangeEvent(notebook2, event, syncInfo, matchingCells) {
    if (event !== void 0 && event.notebook !== notebook2) {
      throw new Error("Notebook must be identical");
    }
    const result = {
      notebook: notebook2
    };
    if ((event == null ? void 0 : event.metadata) !== void 0) {
      result.metadata = Converter.c2p.asMetadata(event.metadata);
    }
    let matchingCellsSet;
    if ((event == null ? void 0 : event.cellChanges) !== void 0 && event.cellChanges.length > 0) {
      const data = [];
      matchingCellsSet = new Set(matchingCells.map((cell) => cell.document.uri.toString()));
      for (const cellChange of event.cellChanges) {
        if (matchingCellsSet.has(cellChange.cell.document.uri.toString()) && (cellChange.executionSummary !== void 0 || cellChange.metadata !== void 0)) {
          data.push(cellChange.cell);
        }
      }
      if (data.length > 0) {
        result.cells = result.cells ?? {};
        result.cells.data = data;
      }
    }
    if (((event == null ? void 0 : event.contentChanges) !== void 0 && event.contentChanges.length > 0 || event === void 0) && syncInfo !== void 0 && matchingCells !== void 0) {
      const oldCells = syncInfo.cells;
      const newCells = matchingCells;
      const diff = $NotebookCell.computeDiff(oldCells, newCells, false);
      let addedCells;
      let removedCells;
      if (diff !== void 0) {
        addedCells = diff.cells === void 0 ? /* @__PURE__ */ new Map() : new Map(diff.cells.map((cell) => [cell.document.uri.toString(), cell]));
        removedCells = diff.deleteCount === 0 ? /* @__PURE__ */ new Map() : new Map(oldCells.slice(diff.start, diff.start + diff.deleteCount).map((cell) => [cell.document.uri.toString(), cell]));
        for (const key of Array.from(removedCells.keys())) {
          if (addedCells.has(key)) {
            removedCells.delete(key);
            addedCells.delete(key);
          }
        }
        result.cells = result.cells ?? {};
        const didOpen = [];
        const didClose = [];
        if (addedCells.size > 0 || removedCells.size > 0) {
          for (const cell of addedCells.values()) {
            didOpen.push(cell);
          }
          for (const cell of removedCells.values()) {
            didClose.push(cell);
          }
        }
        result.cells.structure = {
          array: diff,
          didOpen,
          didClose
        };
      }
    }
    return Object.keys(result).length > 1 ? result : void 0;
  }
  getMatchingCells(notebookDocument, cells = notebookDocument.getCells()) {
    if (this.options.notebookSelector === void 0) {
      return void 0;
    }
    for (const item of this.options.notebookSelector) {
      if (item.notebook === void 0 || $NotebookDocumentFilter.matchNotebook(item.notebook, notebookDocument)) {
        const filtered = this.filterCells(notebookDocument, cells, item.cells);
        return filtered.length === 0 ? void 0 : filtered;
      }
    }
    return void 0;
  }
  cellMatches(notebookDocument, cell) {
    const cells = this.getMatchingCells(notebookDocument, [cell]);
    return cells !== void 0 && cells[0] === cell;
  }
  filterCells(notebookDocument, cells, cellSelector) {
    var _a;
    const filtered = cellSelector !== void 0 ? cells.filter((cell) => {
      const cellLanguage = cell.document.languageId;
      return cellSelector.some((filter) => filter.language === "*" || cellLanguage === filter.language);
    }) : cells;
    return typeof ((_a = this.client.clientOptions.notebookDocumentOptions) == null ? void 0 : _a.filterCells) === "function" ? this.client.clientOptions.notebookDocumentOptions.filterCells(notebookDocument, filtered) : filtered;
  }
}
class NotebookDocumentSyncFeature {
  constructor(client2) {
    this.client = client2;
    this.registrations = /* @__PURE__ */ new Map();
    this.registrationType = proto$3.NotebookDocumentSyncRegistrationType.type;
    vscode$1.workspace.onDidOpenTextDocument((textDocument) => {
      if (textDocument.uri.scheme !== NotebookDocumentSyncFeature.CellScheme) {
        return;
      }
      const [notebookDocument, notebookCell] = this.findNotebookDocumentAndCell(textDocument);
      if (notebookDocument === void 0 || notebookCell === void 0) {
        return;
      }
      for (const provider of this.registrations.values()) {
        if (provider instanceof NotebookDocumentSyncFeatureProvider) {
          provider.didOpenNotebookCellTextDocument(notebookDocument, notebookCell);
        }
      }
    });
    vscode$1.workspace.onDidChangeTextDocument((event) => {
      if (event.contentChanges.length === 0) {
        return;
      }
      const textDocument = event.document;
      if (textDocument.uri.scheme !== NotebookDocumentSyncFeature.CellScheme) {
        return;
      }
      const [notebookDocument] = this.findNotebookDocumentAndCell(textDocument);
      if (notebookDocument === void 0) {
        return;
      }
      for (const provider of this.registrations.values()) {
        if (provider instanceof NotebookDocumentSyncFeatureProvider) {
          provider.didChangeNotebookCellTextDocument(notebookDocument, event);
        }
      }
    });
    vscode$1.workspace.onDidCloseTextDocument((textDocument) => {
      if (textDocument.uri.scheme !== NotebookDocumentSyncFeature.CellScheme) {
        return;
      }
      const [notebookDocument, notebookCell] = this.findNotebookDocumentAndCell(textDocument);
      if (notebookDocument === void 0 || notebookCell === void 0) {
        return;
      }
      for (const provider of this.registrations.values()) {
        if (provider instanceof NotebookDocumentSyncFeatureProvider) {
          provider.didCloseNotebookCellTextDocument(notebookDocument, notebookCell);
        }
      }
    });
  }
  getState() {
    if (this.registrations.size === 0) {
      return { kind: "document", id: this.registrationType.method, registrations: false, matches: false };
    }
    for (const provider of this.registrations.values()) {
      const state = provider.getState();
      if (state.kind === "document" && state.registrations === true && state.matches === true) {
        return { kind: "document", id: this.registrationType.method, registrations: true, matches: true };
      }
    }
    return { kind: "document", id: this.registrationType.method, registrations: true, matches: false };
  }
  fillClientCapabilities(capabilities) {
    const synchronization = ensure$2(ensure$2(capabilities, "notebookDocument"), "synchronization");
    synchronization.dynamicRegistration = true;
    synchronization.executionSummarySupport = true;
  }
  preInitialize(capabilities) {
    const options = capabilities.notebookDocumentSync;
    if (options === void 0) {
      return;
    }
    this.dedicatedChannel = this.client.protocol2CodeConverter.asDocumentSelector($NotebookDocumentSyncOptions.asDocumentSelector(options));
  }
  initialize(capabilities) {
    const options = capabilities.notebookDocumentSync;
    if (options === void 0) {
      return;
    }
    const id = options.id ?? UUID$h.generateUuid();
    this.register({ id, registerOptions: options });
  }
  register(data) {
    const provider = new NotebookDocumentSyncFeatureProvider(this.client, data.registerOptions);
    this.registrations.set(data.id, provider);
  }
  unregister(id) {
    const provider = this.registrations.get(id);
    provider && provider.dispose();
  }
  dispose() {
    for (const provider of this.registrations.values()) {
      provider.dispose();
    }
    this.registrations.clear();
  }
  handles(textDocument) {
    if (textDocument.uri.scheme !== NotebookDocumentSyncFeature.CellScheme) {
      return false;
    }
    if (this.dedicatedChannel !== void 0 && vscode$1.languages.match(this.dedicatedChannel, textDocument) > 0) {
      return true;
    }
    for (const provider of this.registrations.values()) {
      if (provider.handles(textDocument)) {
        return true;
      }
    }
    return false;
  }
  getProvider(notebookCell) {
    for (const provider of this.registrations.values()) {
      if (provider.handles(notebookCell.document)) {
        return provider;
      }
    }
    return void 0;
  }
  findNotebookDocumentAndCell(textDocument) {
    const uri = textDocument.uri.toString();
    for (const notebookDocument of vscode$1.workspace.notebookDocuments) {
      for (const cell of notebookDocument.getCells()) {
        if (cell.document.uri.toString() === uri) {
          return [notebookDocument, cell];
        }
      }
    }
    return [void 0, void 0];
  }
}
NotebookDocumentSyncFeature_1 = notebook$1.NotebookDocumentSyncFeature = NotebookDocumentSyncFeature;
NotebookDocumentSyncFeature.CellScheme = "vscode-notebook-cell";
const notebook = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get NotebookDocumentSyncFeature() {
    return NotebookDocumentSyncFeature_1;
  },
  default: notebook$1
}, [notebook$1]);
const require$$10 = /* @__PURE__ */ getAugmentedNamespace(notebook);
var configuration$1 = {};
Object.defineProperty(configuration$1, "__esModule", { value: true });
var SyncConfigurationFeature_1 = configuration$1.SyncConfigurationFeature = toJSONObject_1 = configuration$1.toJSONObject = ConfigurationFeature_1 = configuration$1.ConfigurationFeature = void 0;
const vscode_1$q = require$$0$9;
const vscode_languageserver_protocol_1$s = require$$0$5;
const Is$2 = require$$4$1;
const UUID$g = require$$6$1;
const features_1$r = require$$1$4;
class ConfigurationFeature {
  constructor(client2) {
    this._client = client2;
  }
  getState() {
    return { kind: "static" };
  }
  fillClientCapabilities(capabilities) {
    capabilities.workspace = capabilities.workspace || {};
    capabilities.workspace.configuration = true;
  }
  initialize() {
    let client2 = this._client;
    client2.onRequest(vscode_languageserver_protocol_1$s.ConfigurationRequest.type, (params, token) => {
      let configuration2 = (params2) => {
        let result = [];
        for (let item of params2.items) {
          let resource = item.scopeUri !== void 0 && item.scopeUri !== null ? this._client.protocol2CodeConverter.asUri(item.scopeUri) : void 0;
          result.push(this.getConfiguration(resource, item.section !== null ? item.section : void 0));
        }
        return result;
      };
      let middleware = client2.middleware.workspace;
      return middleware && middleware.configuration ? middleware.configuration(params, token, configuration2) : configuration2(params);
    });
  }
  getConfiguration(resource, section) {
    let result = null;
    if (section) {
      let index = section.lastIndexOf(".");
      if (index === -1) {
        result = toJSONObject(vscode_1$q.workspace.getConfiguration(void 0, resource).get(section));
      } else {
        let config = vscode_1$q.workspace.getConfiguration(section.substr(0, index), resource);
        if (config) {
          result = toJSONObject(config.get(section.substr(index + 1)));
        }
      }
    } else {
      let config = vscode_1$q.workspace.getConfiguration(void 0, resource);
      result = {};
      for (let key of Object.keys(config)) {
        if (config.has(key)) {
          result[key] = toJSONObject(config.get(key));
        }
      }
    }
    if (result === void 0) {
      result = null;
    }
    return result;
  }
  dispose() {
  }
}
var ConfigurationFeature_1 = configuration$1.ConfigurationFeature = ConfigurationFeature;
function toJSONObject(obj) {
  if (obj) {
    if (Array.isArray(obj)) {
      return obj.map(toJSONObject);
    } else if (typeof obj === "object") {
      const res = /* @__PURE__ */ Object.create(null);
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          res[key] = toJSONObject(obj[key]);
        }
      }
      return res;
    }
  }
  return obj;
}
var toJSONObject_1 = configuration$1.toJSONObject = toJSONObject;
class SyncConfigurationFeature {
  constructor(_client) {
    this._client = _client;
    this.isDisposed = false;
    this._listeners = /* @__PURE__ */ new Map();
  }
  getState() {
    return { kind: "workspace", id: this.registrationType.method, registrations: this._listeners.size > 0 };
  }
  get registrationType() {
    return vscode_languageserver_protocol_1$s.DidChangeConfigurationNotification.type;
  }
  fillClientCapabilities(capabilities) {
    (0, features_1$r.ensure)((0, features_1$r.ensure)(capabilities, "workspace"), "didChangeConfiguration").dynamicRegistration = true;
  }
  initialize() {
    var _a;
    let section = (_a = this._client.clientOptions.synchronize) == null ? void 0 : _a.configurationSection;
    if (section !== void 0) {
      this.register({
        id: UUID$g.generateUuid(),
        registerOptions: {
          section
        }
      });
    }
  }
  register(data) {
    let disposable2 = vscode_1$q.workspace.onDidChangeConfiguration((event) => {
      this.onDidChangeConfiguration(data.registerOptions.section, event);
    });
    this._listeners.set(data.id, disposable2);
    if (data.registerOptions.section !== void 0) {
      this.onDidChangeConfiguration(data.registerOptions.section, void 0);
    }
  }
  unregister(id) {
    let disposable2 = this._listeners.get(id);
    if (disposable2) {
      this._listeners.delete(id);
      disposable2.dispose();
    }
  }
  dispose() {
    for (const disposable2 of this._listeners.values()) {
      disposable2.dispose();
    }
    this._listeners.clear();
    this.isDisposed = true;
  }
  onDidChangeConfiguration(configurationSection, event) {
    var _a;
    if (this.isDisposed) {
      return;
    }
    let sections;
    if (Is$2.string(configurationSection)) {
      sections = [configurationSection];
    } else {
      sections = configurationSection;
    }
    if (sections !== void 0 && event !== void 0) {
      let affected = sections.some((section) => event.affectsConfiguration(section));
      if (!affected) {
        return;
      }
    }
    const didChangeConfiguration = async (sections2) => {
      if (sections2 === void 0) {
        return this._client.sendNotification(vscode_languageserver_protocol_1$s.DidChangeConfigurationNotification.type, { settings: null });
      } else {
        return this._client.sendNotification(vscode_languageserver_protocol_1$s.DidChangeConfigurationNotification.type, { settings: this.extractSettingsInformation(sections2) });
      }
    };
    let middleware = (_a = this._client.middleware.workspace) == null ? void 0 : _a.didChangeConfiguration;
    (middleware ? middleware(sections, didChangeConfiguration) : didChangeConfiguration(sections)).catch((error2) => {
      this._client.error(`Sending notification ${vscode_languageserver_protocol_1$s.DidChangeConfigurationNotification.type.method} failed`, error2);
    });
  }
  extractSettingsInformation(keys) {
    function ensurePath(config, path2) {
      let current = config;
      for (let i = 0; i < path2.length - 1; i++) {
        let obj = current[path2[i]];
        if (!obj) {
          obj = /* @__PURE__ */ Object.create(null);
          current[path2[i]] = obj;
        }
        current = obj;
      }
      return current;
    }
    let resource = this._client.clientOptions.workspaceFolder ? this._client.clientOptions.workspaceFolder.uri : void 0;
    let result = /* @__PURE__ */ Object.create(null);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let index = key.indexOf(".");
      let config = null;
      if (index >= 0) {
        config = vscode_1$q.workspace.getConfiguration(key.substr(0, index), resource).get(key.substr(index + 1));
      } else {
        config = vscode_1$q.workspace.getConfiguration(void 0, resource).get(key);
      }
      if (config) {
        let path2 = keys[i].split(".");
        ensurePath(result, path2)[path2[path2.length - 1]] = toJSONObject(config);
      }
    }
    return result;
  }
}
SyncConfigurationFeature_1 = configuration$1.SyncConfigurationFeature = SyncConfigurationFeature;
const configuration = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get ConfigurationFeature() {
    return ConfigurationFeature_1;
  },
  get SyncConfigurationFeature() {
    return SyncConfigurationFeature_1;
  },
  default: configuration$1,
  get toJSONObject() {
    return toJSONObject_1;
  }
}, [configuration$1]);
const require$$11 = /* @__PURE__ */ getAugmentedNamespace(configuration);
var textSynchronization$1 = {};
Object.defineProperty(textSynchronization$1, "__esModule", { value: true });
var DidSaveTextDocumentFeature_1 = textSynchronization$1.DidSaveTextDocumentFeature = WillSaveWaitUntilFeature_1 = textSynchronization$1.WillSaveWaitUntilFeature = WillSaveFeature_1 = textSynchronization$1.WillSaveFeature = DidChangeTextDocumentFeature_1 = textSynchronization$1.DidChangeTextDocumentFeature = DidCloseTextDocumentFeature_1 = textSynchronization$1.DidCloseTextDocumentFeature = DidOpenTextDocumentFeature_1 = textSynchronization$1.DidOpenTextDocumentFeature = void 0;
const vscode_1$p = require$$0$9;
const vscode_languageserver_protocol_1$r = require$$0$5;
const features_1$q = require$$1$4;
const UUID$f = require$$6$1;
class DidOpenTextDocumentFeature extends features_1$q.TextDocumentEventFeature {
  constructor(client2, syncedDocuments) {
    super(client2, vscode_1$p.workspace.onDidOpenTextDocument, vscode_languageserver_protocol_1$r.DidOpenTextDocumentNotification.type, () => client2.middleware.didOpen, (textDocument) => client2.code2ProtocolConverter.asOpenTextDocumentParams(textDocument), (data) => data, features_1$q.TextDocumentEventFeature.textDocumentFilter);
    this._syncedDocuments = syncedDocuments;
  }
  get openDocuments() {
    return this._syncedDocuments.values();
  }
  fillClientCapabilities(capabilities) {
    (0, features_1$q.ensure)((0, features_1$q.ensure)(capabilities, "textDocument"), "synchronization").dynamicRegistration = true;
  }
  initialize(capabilities, documentSelector) {
    const textDocumentSyncOptions = capabilities.resolvedTextDocumentSync;
    if (documentSelector && textDocumentSyncOptions && textDocumentSyncOptions.openClose) {
      this.register({ id: UUID$f.generateUuid(), registerOptions: { documentSelector } });
    }
  }
  get registrationType() {
    return vscode_languageserver_protocol_1$r.DidOpenTextDocumentNotification.type;
  }
  register(data) {
    super.register(data);
    if (!data.registerOptions.documentSelector) {
      return;
    }
    const documentSelector = this._client.protocol2CodeConverter.asDocumentSelector(data.registerOptions.documentSelector);
    vscode_1$p.workspace.textDocuments.forEach((textDocument) => {
      const uri = textDocument.uri.toString();
      if (this._syncedDocuments.has(uri)) {
        return;
      }
      if (vscode_1$p.languages.match(documentSelector, textDocument) > 0 && !this._client.hasDedicatedTextSynchronizationFeature(textDocument)) {
        const middleware = this._client.middleware;
        const didOpen = (textDocument2) => {
          return this._client.sendNotification(this._type, this._createParams(textDocument2));
        };
        (middleware.didOpen ? middleware.didOpen(textDocument, didOpen) : didOpen(textDocument)).catch((error2) => {
          this._client.error(`Sending document notification ${this._type.method} failed`, error2);
        });
        this._syncedDocuments.set(uri, textDocument);
      }
    });
  }
  getTextDocument(data) {
    return data;
  }
  notificationSent(textDocument, type, params) {
    this._syncedDocuments.set(textDocument.uri.toString(), textDocument);
    super.notificationSent(textDocument, type, params);
  }
}
var DidOpenTextDocumentFeature_1 = textSynchronization$1.DidOpenTextDocumentFeature = DidOpenTextDocumentFeature;
class DidCloseTextDocumentFeature extends features_1$q.TextDocumentEventFeature {
  constructor(client2, syncedDocuments, pendingTextDocumentChanges) {
    super(client2, vscode_1$p.workspace.onDidCloseTextDocument, vscode_languageserver_protocol_1$r.DidCloseTextDocumentNotification.type, () => client2.middleware.didClose, (textDocument) => client2.code2ProtocolConverter.asCloseTextDocumentParams(textDocument), (data) => data, features_1$q.TextDocumentEventFeature.textDocumentFilter);
    this._syncedDocuments = syncedDocuments;
    this._pendingTextDocumentChanges = pendingTextDocumentChanges;
  }
  get registrationType() {
    return vscode_languageserver_protocol_1$r.DidCloseTextDocumentNotification.type;
  }
  fillClientCapabilities(capabilities) {
    (0, features_1$q.ensure)((0, features_1$q.ensure)(capabilities, "textDocument"), "synchronization").dynamicRegistration = true;
  }
  initialize(capabilities, documentSelector) {
    let textDocumentSyncOptions = capabilities.resolvedTextDocumentSync;
    if (documentSelector && textDocumentSyncOptions && textDocumentSyncOptions.openClose) {
      this.register({ id: UUID$f.generateUuid(), registerOptions: { documentSelector } });
    }
  }
  async callback(data) {
    await super.callback(data);
    this._pendingTextDocumentChanges.delete(data.uri.toString());
  }
  getTextDocument(data) {
    return data;
  }
  notificationSent(textDocument, type, params) {
    this._syncedDocuments.delete(textDocument.uri.toString());
    super.notificationSent(textDocument, type, params);
  }
  unregister(id) {
    const selector = this._selectors.get(id);
    super.unregister(id);
    const selectors = this._selectors.values();
    this._syncedDocuments.forEach((textDocument) => {
      if (vscode_1$p.languages.match(selector, textDocument) > 0 && !this._selectorFilter(selectors, textDocument) && !this._client.hasDedicatedTextSynchronizationFeature(textDocument)) {
        let middleware = this._client.middleware;
        let didClose = (textDocument2) => {
          return this._client.sendNotification(this._type, this._createParams(textDocument2));
        };
        this._syncedDocuments.delete(textDocument.uri.toString());
        (middleware.didClose ? middleware.didClose(textDocument, didClose) : didClose(textDocument)).catch((error2) => {
          this._client.error(`Sending document notification ${this._type.method} failed`, error2);
        });
      }
    });
  }
}
var DidCloseTextDocumentFeature_1 = textSynchronization$1.DidCloseTextDocumentFeature = DidCloseTextDocumentFeature;
class DidChangeTextDocumentFeature extends features_1$q.DynamicDocumentFeature {
  constructor(client2, pendingTextDocumentChanges) {
    super(client2);
    this._changeData = /* @__PURE__ */ new Map();
    this._onNotificationSent = new vscode_1$p.EventEmitter();
    this._onPendingChangeAdded = new vscode_1$p.EventEmitter();
    this._pendingTextDocumentChanges = pendingTextDocumentChanges;
    this._syncKind = vscode_languageserver_protocol_1$r.TextDocumentSyncKind.None;
  }
  get onNotificationSent() {
    return this._onNotificationSent.event;
  }
  get onPendingChangeAdded() {
    return this._onPendingChangeAdded.event;
  }
  get syncKind() {
    return this._syncKind;
  }
  get registrationType() {
    return vscode_languageserver_protocol_1$r.DidChangeTextDocumentNotification.type;
  }
  fillClientCapabilities(capabilities) {
    (0, features_1$q.ensure)((0, features_1$q.ensure)(capabilities, "textDocument"), "synchronization").dynamicRegistration = true;
  }
  initialize(capabilities, documentSelector) {
    let textDocumentSyncOptions = capabilities.resolvedTextDocumentSync;
    if (documentSelector && textDocumentSyncOptions && textDocumentSyncOptions.change !== void 0 && textDocumentSyncOptions.change !== vscode_languageserver_protocol_1$r.TextDocumentSyncKind.None) {
      this.register({
        id: UUID$f.generateUuid(),
        registerOptions: Object.assign({}, { documentSelector }, { syncKind: textDocumentSyncOptions.change })
      });
    }
  }
  register(data) {
    if (!data.registerOptions.documentSelector) {
      return;
    }
    if (!this._listener) {
      this._listener = vscode_1$p.workspace.onDidChangeTextDocument(this.callback, this);
    }
    this._changeData.set(data.id, {
      syncKind: data.registerOptions.syncKind,
      documentSelector: this._client.protocol2CodeConverter.asDocumentSelector(data.registerOptions.documentSelector)
    });
    this.updateSyncKind(data.registerOptions.syncKind);
  }
  *getDocumentSelectors() {
    for (const data of this._changeData.values()) {
      yield data.documentSelector;
    }
  }
  async callback(event) {
    if (event.contentChanges.length === 0) {
      return;
    }
    const uri = event.document.uri;
    const version = event.document.version;
    const promises = [];
    for (const changeData of this._changeData.values()) {
      if (vscode_1$p.languages.match(changeData.documentSelector, event.document) > 0 && !this._client.hasDedicatedTextSynchronizationFeature(event.document)) {
        const middleware = this._client.middleware;
        if (changeData.syncKind === vscode_languageserver_protocol_1$r.TextDocumentSyncKind.Incremental) {
          const didChange = async (event2) => {
            const params = this._client.code2ProtocolConverter.asChangeTextDocumentParams(event2, uri, version);
            await this._client.sendNotification(vscode_languageserver_protocol_1$r.DidChangeTextDocumentNotification.type, params);
            this.notificationSent(event2.document, vscode_languageserver_protocol_1$r.DidChangeTextDocumentNotification.type, params);
          };
          promises.push(middleware.didChange ? middleware.didChange(event, (event2) => didChange(event2)) : didChange(event));
        } else if (changeData.syncKind === vscode_languageserver_protocol_1$r.TextDocumentSyncKind.Full) {
          const didChange = async (event2) => {
            const eventUri = event2.document.uri.toString();
            this._pendingTextDocumentChanges.set(eventUri, event2.document);
            this._onPendingChangeAdded.fire();
          };
          promises.push(middleware.didChange ? middleware.didChange(event, (event2) => didChange(event2)) : didChange(event));
        }
      }
    }
    return Promise.all(promises).then(void 0, (error2) => {
      this._client.error(`Sending document notification ${vscode_languageserver_protocol_1$r.DidChangeTextDocumentNotification.type.method} failed`, error2);
      throw error2;
    });
  }
  notificationSent(textDocument, type, params) {
    this._onNotificationSent.fire({ textDocument, type, params });
  }
  unregister(id) {
    this._changeData.delete(id);
    if (this._changeData.size === 0) {
      if (this._listener) {
        this._listener.dispose();
        this._listener = void 0;
      }
      this._syncKind = vscode_languageserver_protocol_1$r.TextDocumentSyncKind.None;
    } else {
      this._syncKind = vscode_languageserver_protocol_1$r.TextDocumentSyncKind.None;
      for (const changeData of this._changeData.values()) {
        this.updateSyncKind(changeData.syncKind);
        if (this._syncKind === vscode_languageserver_protocol_1$r.TextDocumentSyncKind.Full) {
          break;
        }
      }
    }
  }
  dispose() {
    this._pendingTextDocumentChanges.clear();
    this._changeData.clear();
    this._syncKind = vscode_languageserver_protocol_1$r.TextDocumentSyncKind.None;
    if (this._listener) {
      this._listener.dispose();
      this._listener = void 0;
    }
  }
  getPendingDocumentChanges(excludes) {
    if (this._pendingTextDocumentChanges.size === 0) {
      return [];
    }
    let result;
    if (excludes.size === 0) {
      result = Array.from(this._pendingTextDocumentChanges.values());
      this._pendingTextDocumentChanges.clear();
    } else {
      result = [];
      for (const entry of this._pendingTextDocumentChanges) {
        if (!excludes.has(entry[0])) {
          result.push(entry[1]);
          this._pendingTextDocumentChanges.delete(entry[0]);
        }
      }
    }
    return result;
  }
  getProvider(document) {
    for (const changeData of this._changeData.values()) {
      if (vscode_1$p.languages.match(changeData.documentSelector, document) > 0) {
        return {
          send: (event) => {
            return this.callback(event);
          }
        };
      }
    }
    return void 0;
  }
  updateSyncKind(syncKind) {
    if (this._syncKind === vscode_languageserver_protocol_1$r.TextDocumentSyncKind.Full) {
      return;
    }
    switch (syncKind) {
      case vscode_languageserver_protocol_1$r.TextDocumentSyncKind.Full:
        this._syncKind = syncKind;
        break;
      case vscode_languageserver_protocol_1$r.TextDocumentSyncKind.Incremental:
        if (this._syncKind === vscode_languageserver_protocol_1$r.TextDocumentSyncKind.None) {
          this._syncKind = vscode_languageserver_protocol_1$r.TextDocumentSyncKind.Incremental;
        }
        break;
    }
  }
}
var DidChangeTextDocumentFeature_1 = textSynchronization$1.DidChangeTextDocumentFeature = DidChangeTextDocumentFeature;
class WillSaveFeature extends features_1$q.TextDocumentEventFeature {
  constructor(client2) {
    super(client2, vscode_1$p.workspace.onWillSaveTextDocument, vscode_languageserver_protocol_1$r.WillSaveTextDocumentNotification.type, () => client2.middleware.willSave, (willSaveEvent) => client2.code2ProtocolConverter.asWillSaveTextDocumentParams(willSaveEvent), (event) => event.document, (selectors, willSaveEvent) => features_1$q.TextDocumentEventFeature.textDocumentFilter(selectors, willSaveEvent.document));
  }
  get registrationType() {
    return vscode_languageserver_protocol_1$r.WillSaveTextDocumentNotification.type;
  }
  fillClientCapabilities(capabilities) {
    let value = (0, features_1$q.ensure)((0, features_1$q.ensure)(capabilities, "textDocument"), "synchronization");
    value.willSave = true;
  }
  initialize(capabilities, documentSelector) {
    let textDocumentSyncOptions = capabilities.resolvedTextDocumentSync;
    if (documentSelector && textDocumentSyncOptions && textDocumentSyncOptions.willSave) {
      this.register({
        id: UUID$f.generateUuid(),
        registerOptions: { documentSelector }
      });
    }
  }
  getTextDocument(data) {
    return data.document;
  }
}
var WillSaveFeature_1 = textSynchronization$1.WillSaveFeature = WillSaveFeature;
class WillSaveWaitUntilFeature extends features_1$q.DynamicDocumentFeature {
  constructor(client2) {
    super(client2);
    this._selectors = /* @__PURE__ */ new Map();
  }
  getDocumentSelectors() {
    return this._selectors.values();
  }
  get registrationType() {
    return vscode_languageserver_protocol_1$r.WillSaveTextDocumentWaitUntilRequest.type;
  }
  fillClientCapabilities(capabilities) {
    let value = (0, features_1$q.ensure)((0, features_1$q.ensure)(capabilities, "textDocument"), "synchronization");
    value.willSaveWaitUntil = true;
  }
  initialize(capabilities, documentSelector) {
    let textDocumentSyncOptions = capabilities.resolvedTextDocumentSync;
    if (documentSelector && textDocumentSyncOptions && textDocumentSyncOptions.willSaveWaitUntil) {
      this.register({
        id: UUID$f.generateUuid(),
        registerOptions: { documentSelector }
      });
    }
  }
  register(data) {
    if (!data.registerOptions.documentSelector) {
      return;
    }
    if (!this._listener) {
      this._listener = vscode_1$p.workspace.onWillSaveTextDocument(this.callback, this);
    }
    this._selectors.set(data.id, this._client.protocol2CodeConverter.asDocumentSelector(data.registerOptions.documentSelector));
  }
  callback(event) {
    if (features_1$q.TextDocumentEventFeature.textDocumentFilter(this._selectors.values(), event.document) && !this._client.hasDedicatedTextSynchronizationFeature(event.document)) {
      let middleware = this._client.middleware;
      let willSaveWaitUntil = (event2) => {
        return this._client.sendRequest(vscode_languageserver_protocol_1$r.WillSaveTextDocumentWaitUntilRequest.type, this._client.code2ProtocolConverter.asWillSaveTextDocumentParams(event2)).then(async (edits) => {
          let vEdits = await this._client.protocol2CodeConverter.asTextEdits(edits);
          return vEdits === void 0 ? [] : vEdits;
        });
      };
      event.waitUntil(middleware.willSaveWaitUntil ? middleware.willSaveWaitUntil(event, willSaveWaitUntil) : willSaveWaitUntil(event));
    }
  }
  unregister(id) {
    this._selectors.delete(id);
    if (this._selectors.size === 0 && this._listener) {
      this._listener.dispose();
      this._listener = void 0;
    }
  }
  dispose() {
    this._selectors.clear();
    if (this._listener) {
      this._listener.dispose();
      this._listener = void 0;
    }
  }
}
var WillSaveWaitUntilFeature_1 = textSynchronization$1.WillSaveWaitUntilFeature = WillSaveWaitUntilFeature;
class DidSaveTextDocumentFeature extends features_1$q.TextDocumentEventFeature {
  constructor(client2) {
    super(client2, vscode_1$p.workspace.onDidSaveTextDocument, vscode_languageserver_protocol_1$r.DidSaveTextDocumentNotification.type, () => client2.middleware.didSave, (textDocument) => client2.code2ProtocolConverter.asSaveTextDocumentParams(textDocument, this._includeText), (data) => data, features_1$q.TextDocumentEventFeature.textDocumentFilter);
    this._includeText = false;
  }
  get registrationType() {
    return vscode_languageserver_protocol_1$r.DidSaveTextDocumentNotification.type;
  }
  fillClientCapabilities(capabilities) {
    (0, features_1$q.ensure)((0, features_1$q.ensure)(capabilities, "textDocument"), "synchronization").didSave = true;
  }
  initialize(capabilities, documentSelector) {
    const textDocumentSyncOptions = capabilities.resolvedTextDocumentSync;
    if (documentSelector && textDocumentSyncOptions && textDocumentSyncOptions.save) {
      const saveOptions = typeof textDocumentSyncOptions.save === "boolean" ? { includeText: false } : { includeText: !!textDocumentSyncOptions.save.includeText };
      this.register({
        id: UUID$f.generateUuid(),
        registerOptions: Object.assign({}, { documentSelector }, saveOptions)
      });
    }
  }
  register(data) {
    this._includeText = !!data.registerOptions.includeText;
    super.register(data);
  }
  getTextDocument(data) {
    return data;
  }
}
DidSaveTextDocumentFeature_1 = textSynchronization$1.DidSaveTextDocumentFeature = DidSaveTextDocumentFeature;
const textSynchronization = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get DidChangeTextDocumentFeature() {
    return DidChangeTextDocumentFeature_1;
  },
  get DidCloseTextDocumentFeature() {
    return DidCloseTextDocumentFeature_1;
  },
  get DidOpenTextDocumentFeature() {
    return DidOpenTextDocumentFeature_1;
  },
  get DidSaveTextDocumentFeature() {
    return DidSaveTextDocumentFeature_1;
  },
  get WillSaveFeature() {
    return WillSaveFeature_1;
  },
  get WillSaveWaitUntilFeature() {
    return WillSaveWaitUntilFeature_1;
  },
  default: textSynchronization$1
}, [textSynchronization$1]);
const require$$12 = /* @__PURE__ */ getAugmentedNamespace(textSynchronization);
var completion$1 = {};
Object.defineProperty(completion$1, "__esModule", { value: true });
var CompletionItemFeature_1 = completion$1.CompletionItemFeature = void 0;
const vscode_1$o = require$$0$9;
const vscode_languageserver_protocol_1$q = require$$0$5;
const features_1$p = require$$1$4;
const UUID$e = require$$6$1;
const SupportedCompletionItemKinds = [
  vscode_languageserver_protocol_1$q.CompletionItemKind.Text,
  vscode_languageserver_protocol_1$q.CompletionItemKind.Method,
  vscode_languageserver_protocol_1$q.CompletionItemKind.Function,
  vscode_languageserver_protocol_1$q.CompletionItemKind.Constructor,
  vscode_languageserver_protocol_1$q.CompletionItemKind.Field,
  vscode_languageserver_protocol_1$q.CompletionItemKind.Variable,
  vscode_languageserver_protocol_1$q.CompletionItemKind.Class,
  vscode_languageserver_protocol_1$q.CompletionItemKind.Interface,
  vscode_languageserver_protocol_1$q.CompletionItemKind.Module,
  vscode_languageserver_protocol_1$q.CompletionItemKind.Property,
  vscode_languageserver_protocol_1$q.CompletionItemKind.Unit,
  vscode_languageserver_protocol_1$q.CompletionItemKind.Value,
  vscode_languageserver_protocol_1$q.CompletionItemKind.Enum,
  vscode_languageserver_protocol_1$q.CompletionItemKind.Keyword,
  vscode_languageserver_protocol_1$q.CompletionItemKind.Snippet,
  vscode_languageserver_protocol_1$q.CompletionItemKind.Color,
  vscode_languageserver_protocol_1$q.CompletionItemKind.File,
  vscode_languageserver_protocol_1$q.CompletionItemKind.Reference,
  vscode_languageserver_protocol_1$q.CompletionItemKind.Folder,
  vscode_languageserver_protocol_1$q.CompletionItemKind.EnumMember,
  vscode_languageserver_protocol_1$q.CompletionItemKind.Constant,
  vscode_languageserver_protocol_1$q.CompletionItemKind.Struct,
  vscode_languageserver_protocol_1$q.CompletionItemKind.Event,
  vscode_languageserver_protocol_1$q.CompletionItemKind.Operator,
  vscode_languageserver_protocol_1$q.CompletionItemKind.TypeParameter
];
class CompletionItemFeature extends features_1$p.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1$q.CompletionRequest.type);
    this.labelDetailsSupport = /* @__PURE__ */ new Map();
  }
  fillClientCapabilities(capabilities) {
    let completion2 = (0, features_1$p.ensure)((0, features_1$p.ensure)(capabilities, "textDocument"), "completion");
    completion2.dynamicRegistration = true;
    completion2.contextSupport = true;
    completion2.completionItem = {
      snippetSupport: true,
      commitCharactersSupport: true,
      documentationFormat: [vscode_languageserver_protocol_1$q.MarkupKind.Markdown, vscode_languageserver_protocol_1$q.MarkupKind.PlainText],
      deprecatedSupport: true,
      preselectSupport: true,
      tagSupport: { valueSet: [vscode_languageserver_protocol_1$q.CompletionItemTag.Deprecated] },
      insertReplaceSupport: true,
      resolveSupport: {
        properties: ["documentation", "detail", "additionalTextEdits"]
      },
      insertTextModeSupport: { valueSet: [vscode_languageserver_protocol_1$q.InsertTextMode.asIs, vscode_languageserver_protocol_1$q.InsertTextMode.adjustIndentation] },
      labelDetailsSupport: true
    };
    completion2.insertTextMode = vscode_languageserver_protocol_1$q.InsertTextMode.adjustIndentation;
    completion2.completionItemKind = { valueSet: SupportedCompletionItemKinds };
    completion2.completionList = {
      itemDefaults: [
        "commitCharacters",
        "editRange",
        "insertTextFormat",
        "insertTextMode"
      ]
    };
  }
  initialize(capabilities, documentSelector) {
    const options = this.getRegistrationOptions(documentSelector, capabilities.completionProvider);
    if (!options) {
      return;
    }
    this.register({
      id: UUID$e.generateUuid(),
      registerOptions: options
    });
  }
  registerLanguageProvider(options, id) {
    var _a;
    this.labelDetailsSupport.set(id, !!((_a = options.completionItem) == null ? void 0 : _a.labelDetailsSupport));
    const triggerCharacters = options.triggerCharacters ?? [];
    const defaultCommitCharacters = options.allCommitCharacters;
    const selector = options.documentSelector;
    const provider = {
      provideCompletionItems: (document, position, token, context) => {
        const client2 = this._client;
        const middleware = this._client.middleware;
        const provideCompletionItems = (document2, position2, context2, token2) => {
          return client2.sendRequest(vscode_languageserver_protocol_1$q.CompletionRequest.type, client2.code2ProtocolConverter.asCompletionParams(document2, position2, context2), token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return client2.protocol2CodeConverter.asCompletionResult(result, defaultCommitCharacters, token2);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$q.CompletionRequest.type, token2, error2, null);
          });
        };
        return middleware.provideCompletionItem ? middleware.provideCompletionItem(document, position, context, token, provideCompletionItems) : provideCompletionItems(document, position, context, token);
      },
      resolveCompletionItem: options.resolveProvider ? (item, token) => {
        const client2 = this._client;
        const middleware = this._client.middleware;
        const resolveCompletionItem = (item2, token2) => {
          return client2.sendRequest(vscode_languageserver_protocol_1$q.CompletionResolveRequest.type, client2.code2ProtocolConverter.asCompletionItem(item2, !!this.labelDetailsSupport.get(id)), token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return client2.protocol2CodeConverter.asCompletionItem(result);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$q.CompletionResolveRequest.type, token2, error2, item2);
          });
        };
        return middleware.resolveCompletionItem ? middleware.resolveCompletionItem(item, token, resolveCompletionItem) : resolveCompletionItem(item, token);
      } : void 0
    };
    return [vscode_1$o.languages.registerCompletionItemProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider, ...triggerCharacters), provider];
  }
}
CompletionItemFeature_1 = completion$1.CompletionItemFeature = CompletionItemFeature;
const completion = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get CompletionItemFeature() {
    return CompletionItemFeature_1;
  },
  default: completion$1
}, [completion$1]);
const require$$13 = /* @__PURE__ */ getAugmentedNamespace(completion);
var hover$1 = {};
Object.defineProperty(hover$1, "__esModule", { value: true });
var HoverFeature_1 = hover$1.HoverFeature = void 0;
const vscode_1$n = require$$0$9;
const vscode_languageserver_protocol_1$p = require$$0$5;
const features_1$o = require$$1$4;
const UUID$d = require$$6$1;
class HoverFeature extends features_1$o.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1$p.HoverRequest.type);
  }
  fillClientCapabilities(capabilities) {
    const hoverCapability = (0, features_1$o.ensure)((0, features_1$o.ensure)(capabilities, "textDocument"), "hover");
    hoverCapability.dynamicRegistration = true;
    hoverCapability.contentFormat = [vscode_languageserver_protocol_1$p.MarkupKind.Markdown, vscode_languageserver_protocol_1$p.MarkupKind.PlainText];
  }
  initialize(capabilities, documentSelector) {
    const options = this.getRegistrationOptions(documentSelector, capabilities.hoverProvider);
    if (!options) {
      return;
    }
    this.register({
      id: UUID$d.generateUuid(),
      registerOptions: options
    });
  }
  registerLanguageProvider(options) {
    const selector = options.documentSelector;
    const provider = {
      provideHover: (document, position, token) => {
        const client2 = this._client;
        const provideHover = (document2, position2, token2) => {
          return client2.sendRequest(vscode_languageserver_protocol_1$p.HoverRequest.type, client2.code2ProtocolConverter.asTextDocumentPositionParams(document2, position2), token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return client2.protocol2CodeConverter.asHover(result);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$p.HoverRequest.type, token2, error2, null);
          });
        };
        const middleware = client2.middleware;
        return middleware.provideHover ? middleware.provideHover(document, position, token, provideHover) : provideHover(document, position, token);
      }
    };
    return [this.registerProvider(selector, provider), provider];
  }
  registerProvider(selector, provider) {
    return vscode_1$n.languages.registerHoverProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider);
  }
}
HoverFeature_1 = hover$1.HoverFeature = HoverFeature;
const hover = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get HoverFeature() {
    return HoverFeature_1;
  },
  default: hover$1
}, [hover$1]);
const require$$14 = /* @__PURE__ */ getAugmentedNamespace(hover);
var definition$1 = {};
Object.defineProperty(definition$1, "__esModule", { value: true });
var DefinitionFeature_1 = definition$1.DefinitionFeature = void 0;
const vscode_1$m = require$$0$9;
const vscode_languageserver_protocol_1$o = require$$0$5;
const features_1$n = require$$1$4;
const UUID$c = require$$6$1;
class DefinitionFeature extends features_1$n.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1$o.DefinitionRequest.type);
  }
  fillClientCapabilities(capabilities) {
    let definitionSupport = (0, features_1$n.ensure)((0, features_1$n.ensure)(capabilities, "textDocument"), "definition");
    definitionSupport.dynamicRegistration = true;
    definitionSupport.linkSupport = true;
  }
  initialize(capabilities, documentSelector) {
    const options = this.getRegistrationOptions(documentSelector, capabilities.definitionProvider);
    if (!options) {
      return;
    }
    this.register({ id: UUID$c.generateUuid(), registerOptions: options });
  }
  registerLanguageProvider(options) {
    const selector = options.documentSelector;
    const provider = {
      provideDefinition: (document, position, token) => {
        const client2 = this._client;
        const provideDefinition = (document2, position2, token2) => {
          return client2.sendRequest(vscode_languageserver_protocol_1$o.DefinitionRequest.type, client2.code2ProtocolConverter.asTextDocumentPositionParams(document2, position2), token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return client2.protocol2CodeConverter.asDefinitionResult(result, token2);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$o.DefinitionRequest.type, token2, error2, null);
          });
        };
        const middleware = client2.middleware;
        return middleware.provideDefinition ? middleware.provideDefinition(document, position, token, provideDefinition) : provideDefinition(document, position, token);
      }
    };
    return [this.registerProvider(selector, provider), provider];
  }
  registerProvider(selector, provider) {
    return vscode_1$m.languages.registerDefinitionProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider);
  }
}
DefinitionFeature_1 = definition$1.DefinitionFeature = DefinitionFeature;
const definition = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get DefinitionFeature() {
    return DefinitionFeature_1;
  },
  default: definition$1
}, [definition$1]);
const require$$15 = /* @__PURE__ */ getAugmentedNamespace(definition);
var signatureHelp$1 = {};
Object.defineProperty(signatureHelp$1, "__esModule", { value: true });
var SignatureHelpFeature_1 = signatureHelp$1.SignatureHelpFeature = void 0;
const vscode_1$l = require$$0$9;
const vscode_languageserver_protocol_1$n = require$$0$5;
const features_1$m = require$$1$4;
const UUID$b = require$$6$1;
class SignatureHelpFeature extends features_1$m.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1$n.SignatureHelpRequest.type);
  }
  fillClientCapabilities(capabilities) {
    let config = (0, features_1$m.ensure)((0, features_1$m.ensure)(capabilities, "textDocument"), "signatureHelp");
    config.dynamicRegistration = true;
    config.signatureInformation = { documentationFormat: [vscode_languageserver_protocol_1$n.MarkupKind.Markdown, vscode_languageserver_protocol_1$n.MarkupKind.PlainText] };
    config.signatureInformation.parameterInformation = { labelOffsetSupport: true };
    config.signatureInformation.activeParameterSupport = true;
    config.contextSupport = true;
  }
  initialize(capabilities, documentSelector) {
    const options = this.getRegistrationOptions(documentSelector, capabilities.signatureHelpProvider);
    if (!options) {
      return;
    }
    this.register({
      id: UUID$b.generateUuid(),
      registerOptions: options
    });
  }
  registerLanguageProvider(options) {
    const provider = {
      provideSignatureHelp: (document, position, token, context) => {
        const client2 = this._client;
        const providerSignatureHelp = (document2, position2, context2, token2) => {
          return client2.sendRequest(vscode_languageserver_protocol_1$n.SignatureHelpRequest.type, client2.code2ProtocolConverter.asSignatureHelpParams(document2, position2, context2), token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return client2.protocol2CodeConverter.asSignatureHelp(result, token2);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$n.SignatureHelpRequest.type, token2, error2, null);
          });
        };
        const middleware = client2.middleware;
        return middleware.provideSignatureHelp ? middleware.provideSignatureHelp(document, position, context, token, providerSignatureHelp) : providerSignatureHelp(document, position, context, token);
      }
    };
    return [this.registerProvider(options, provider), provider];
  }
  registerProvider(options, provider) {
    const selector = this._client.protocol2CodeConverter.asDocumentSelector(options.documentSelector);
    if (options.retriggerCharacters === void 0) {
      const triggerCharacters = options.triggerCharacters || [];
      return vscode_1$l.languages.registerSignatureHelpProvider(selector, provider, ...triggerCharacters);
    } else {
      const metaData = {
        triggerCharacters: options.triggerCharacters || [],
        retriggerCharacters: options.retriggerCharacters || []
      };
      return vscode_1$l.languages.registerSignatureHelpProvider(selector, provider, metaData);
    }
  }
}
SignatureHelpFeature_1 = signatureHelp$1.SignatureHelpFeature = SignatureHelpFeature;
const signatureHelp = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get SignatureHelpFeature() {
    return SignatureHelpFeature_1;
  },
  default: signatureHelp$1
}, [signatureHelp$1]);
const require$$16 = /* @__PURE__ */ getAugmentedNamespace(signatureHelp);
var documentHighlight$1 = {};
Object.defineProperty(documentHighlight$1, "__esModule", { value: true });
var DocumentHighlightFeature_1 = documentHighlight$1.DocumentHighlightFeature = void 0;
const vscode_1$k = require$$0$9;
const vscode_languageserver_protocol_1$m = require$$0$5;
const features_1$l = require$$1$4;
const UUID$a = require$$6$1;
class DocumentHighlightFeature extends features_1$l.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1$m.DocumentHighlightRequest.type);
  }
  fillClientCapabilities(capabilities) {
    (0, features_1$l.ensure)((0, features_1$l.ensure)(capabilities, "textDocument"), "documentHighlight").dynamicRegistration = true;
  }
  initialize(capabilities, documentSelector) {
    const options = this.getRegistrationOptions(documentSelector, capabilities.documentHighlightProvider);
    if (!options) {
      return;
    }
    this.register({ id: UUID$a.generateUuid(), registerOptions: options });
  }
  registerLanguageProvider(options) {
    const selector = options.documentSelector;
    const provider = {
      provideDocumentHighlights: (document, position, token) => {
        const client2 = this._client;
        const _provideDocumentHighlights = (document2, position2, token2) => {
          return client2.sendRequest(vscode_languageserver_protocol_1$m.DocumentHighlightRequest.type, client2.code2ProtocolConverter.asTextDocumentPositionParams(document2, position2), token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return client2.protocol2CodeConverter.asDocumentHighlights(result, token2);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$m.DocumentHighlightRequest.type, token2, error2, null);
          });
        };
        const middleware = client2.middleware;
        return middleware.provideDocumentHighlights ? middleware.provideDocumentHighlights(document, position, token, _provideDocumentHighlights) : _provideDocumentHighlights(document, position, token);
      }
    };
    return [vscode_1$k.languages.registerDocumentHighlightProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider), provider];
  }
}
DocumentHighlightFeature_1 = documentHighlight$1.DocumentHighlightFeature = DocumentHighlightFeature;
const documentHighlight = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get DocumentHighlightFeature() {
    return DocumentHighlightFeature_1;
  },
  default: documentHighlight$1
}, [documentHighlight$1]);
const require$$17 = /* @__PURE__ */ getAugmentedNamespace(documentHighlight);
var documentSymbol$2 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.DocumentSymbolFeature = exports2.SupportedSymbolTags = exports2.SupportedSymbolKinds = void 0;
  const vscode_12 = require$$0$9;
  const vscode_languageserver_protocol_12 = require$$0$5;
  const features_12 = require$$1$4;
  const UUID2 = require$$6$1;
  exports2.SupportedSymbolKinds = [
    vscode_languageserver_protocol_12.SymbolKind.File,
    vscode_languageserver_protocol_12.SymbolKind.Module,
    vscode_languageserver_protocol_12.SymbolKind.Namespace,
    vscode_languageserver_protocol_12.SymbolKind.Package,
    vscode_languageserver_protocol_12.SymbolKind.Class,
    vscode_languageserver_protocol_12.SymbolKind.Method,
    vscode_languageserver_protocol_12.SymbolKind.Property,
    vscode_languageserver_protocol_12.SymbolKind.Field,
    vscode_languageserver_protocol_12.SymbolKind.Constructor,
    vscode_languageserver_protocol_12.SymbolKind.Enum,
    vscode_languageserver_protocol_12.SymbolKind.Interface,
    vscode_languageserver_protocol_12.SymbolKind.Function,
    vscode_languageserver_protocol_12.SymbolKind.Variable,
    vscode_languageserver_protocol_12.SymbolKind.Constant,
    vscode_languageserver_protocol_12.SymbolKind.String,
    vscode_languageserver_protocol_12.SymbolKind.Number,
    vscode_languageserver_protocol_12.SymbolKind.Boolean,
    vscode_languageserver_protocol_12.SymbolKind.Array,
    vscode_languageserver_protocol_12.SymbolKind.Object,
    vscode_languageserver_protocol_12.SymbolKind.Key,
    vscode_languageserver_protocol_12.SymbolKind.Null,
    vscode_languageserver_protocol_12.SymbolKind.EnumMember,
    vscode_languageserver_protocol_12.SymbolKind.Struct,
    vscode_languageserver_protocol_12.SymbolKind.Event,
    vscode_languageserver_protocol_12.SymbolKind.Operator,
    vscode_languageserver_protocol_12.SymbolKind.TypeParameter
  ];
  exports2.SupportedSymbolTags = [
    vscode_languageserver_protocol_12.SymbolTag.Deprecated
  ];
  class DocumentSymbolFeature extends features_12.TextDocumentLanguageFeature {
    constructor(client2) {
      super(client2, vscode_languageserver_protocol_12.DocumentSymbolRequest.type);
    }
    fillClientCapabilities(capabilities) {
      let symbolCapabilities = (0, features_12.ensure)((0, features_12.ensure)(capabilities, "textDocument"), "documentSymbol");
      symbolCapabilities.dynamicRegistration = true;
      symbolCapabilities.symbolKind = {
        valueSet: exports2.SupportedSymbolKinds
      };
      symbolCapabilities.hierarchicalDocumentSymbolSupport = true;
      symbolCapabilities.tagSupport = {
        valueSet: exports2.SupportedSymbolTags
      };
      symbolCapabilities.labelSupport = true;
    }
    initialize(capabilities, documentSelector) {
      const options = this.getRegistrationOptions(documentSelector, capabilities.documentSymbolProvider);
      if (!options) {
        return;
      }
      this.register({ id: UUID2.generateUuid(), registerOptions: options });
    }
    registerLanguageProvider(options) {
      const selector = options.documentSelector;
      const provider = {
        provideDocumentSymbols: (document, token) => {
          const client2 = this._client;
          const _provideDocumentSymbols = async (document2, token2) => {
            try {
              const data = await client2.sendRequest(vscode_languageserver_protocol_12.DocumentSymbolRequest.type, client2.code2ProtocolConverter.asDocumentSymbolParams(document2), token2);
              if (token2.isCancellationRequested || data === void 0 || data === null) {
                return null;
              }
              if (data.length === 0) {
                return [];
              } else {
                const first = data[0];
                if (vscode_languageserver_protocol_12.DocumentSymbol.is(first)) {
                  return await client2.protocol2CodeConverter.asDocumentSymbols(data, token2);
                } else {
                  return await client2.protocol2CodeConverter.asSymbolInformations(data, token2);
                }
              }
            } catch (error2) {
              return client2.handleFailedRequest(vscode_languageserver_protocol_12.DocumentSymbolRequest.type, token2, error2, null);
            }
          };
          const middleware = client2.middleware;
          return middleware.provideDocumentSymbols ? middleware.provideDocumentSymbols(document, token, _provideDocumentSymbols) : _provideDocumentSymbols(document, token);
        }
      };
      const metaData = options.label !== void 0 ? { label: options.label } : void 0;
      return [vscode_12.languages.registerDocumentSymbolProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider, metaData), provider];
    }
  }
  exports2.DocumentSymbolFeature = DocumentSymbolFeature;
})(documentSymbol$2);
const documentSymbol = /* @__PURE__ */ getDefaultExportFromCjs(documentSymbol$2);
const documentSymbol$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: documentSymbol
}, [documentSymbol$2]);
const require$$18 = /* @__PURE__ */ getAugmentedNamespace(documentSymbol$1);
var workspaceSymbol$1 = {};
Object.defineProperty(workspaceSymbol$1, "__esModule", { value: true });
var WorkspaceSymbolFeature_1 = workspaceSymbol$1.WorkspaceSymbolFeature = void 0;
const vscode_1$j = require$$0$9;
const vscode_languageserver_protocol_1$l = require$$0$5;
const features_1$k = require$$1$4;
const documentSymbol_1 = require$$18;
const UUID$9 = require$$6$1;
class WorkspaceSymbolFeature extends features_1$k.WorkspaceFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1$l.WorkspaceSymbolRequest.type);
  }
  fillClientCapabilities(capabilities) {
    let symbolCapabilities = (0, features_1$k.ensure)((0, features_1$k.ensure)(capabilities, "workspace"), "symbol");
    symbolCapabilities.dynamicRegistration = true;
    symbolCapabilities.symbolKind = {
      valueSet: documentSymbol_1.SupportedSymbolKinds
    };
    symbolCapabilities.tagSupport = {
      valueSet: documentSymbol_1.SupportedSymbolTags
    };
    symbolCapabilities.resolveSupport = { properties: ["location.range"] };
  }
  initialize(capabilities) {
    if (!capabilities.workspaceSymbolProvider) {
      return;
    }
    this.register({
      id: UUID$9.generateUuid(),
      registerOptions: capabilities.workspaceSymbolProvider === true ? { workDoneProgress: false } : capabilities.workspaceSymbolProvider
    });
  }
  registerLanguageProvider(options) {
    const provider = {
      provideWorkspaceSymbols: (query, token) => {
        const client2 = this._client;
        const provideWorkspaceSymbols = (query2, token2) => {
          return client2.sendRequest(vscode_languageserver_protocol_1$l.WorkspaceSymbolRequest.type, { query: query2 }, token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return client2.protocol2CodeConverter.asSymbolInformations(result, token2);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$l.WorkspaceSymbolRequest.type, token2, error2, null);
          });
        };
        const middleware = client2.middleware;
        return middleware.provideWorkspaceSymbols ? middleware.provideWorkspaceSymbols(query, token, provideWorkspaceSymbols) : provideWorkspaceSymbols(query, token);
      },
      resolveWorkspaceSymbol: options.resolveProvider === true ? (item, token) => {
        const client2 = this._client;
        const resolveWorkspaceSymbol = (item2, token2) => {
          return client2.sendRequest(vscode_languageserver_protocol_1$l.WorkspaceSymbolResolveRequest.type, client2.code2ProtocolConverter.asWorkspaceSymbol(item2), token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return client2.protocol2CodeConverter.asSymbolInformation(result);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$l.WorkspaceSymbolResolveRequest.type, token2, error2, null);
          });
        };
        const middleware = client2.middleware;
        return middleware.resolveWorkspaceSymbol ? middleware.resolveWorkspaceSymbol(item, token, resolveWorkspaceSymbol) : resolveWorkspaceSymbol(item, token);
      } : void 0
    };
    return [vscode_1$j.languages.registerWorkspaceSymbolProvider(provider), provider];
  }
}
WorkspaceSymbolFeature_1 = workspaceSymbol$1.WorkspaceSymbolFeature = WorkspaceSymbolFeature;
const workspaceSymbol = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get WorkspaceSymbolFeature() {
    return WorkspaceSymbolFeature_1;
  },
  default: workspaceSymbol$1
}, [workspaceSymbol$1]);
const require$$19 = /* @__PURE__ */ getAugmentedNamespace(workspaceSymbol);
var reference$1 = {};
Object.defineProperty(reference$1, "__esModule", { value: true });
var ReferencesFeature_1 = reference$1.ReferencesFeature = void 0;
const vscode_1$i = require$$0$9;
const vscode_languageserver_protocol_1$k = require$$0$5;
const features_1$j = require$$1$4;
const UUID$8 = require$$6$1;
class ReferencesFeature extends features_1$j.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1$k.ReferencesRequest.type);
  }
  fillClientCapabilities(capabilities) {
    (0, features_1$j.ensure)((0, features_1$j.ensure)(capabilities, "textDocument"), "references").dynamicRegistration = true;
  }
  initialize(capabilities, documentSelector) {
    const options = this.getRegistrationOptions(documentSelector, capabilities.referencesProvider);
    if (!options) {
      return;
    }
    this.register({ id: UUID$8.generateUuid(), registerOptions: options });
  }
  registerLanguageProvider(options) {
    const selector = options.documentSelector;
    const provider = {
      provideReferences: (document, position, options2, token) => {
        const client2 = this._client;
        const _providerReferences = (document2, position2, options3, token2) => {
          return client2.sendRequest(vscode_languageserver_protocol_1$k.ReferencesRequest.type, client2.code2ProtocolConverter.asReferenceParams(document2, position2, options3), token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return client2.protocol2CodeConverter.asReferences(result, token2);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$k.ReferencesRequest.type, token2, error2, null);
          });
        };
        const middleware = client2.middleware;
        return middleware.provideReferences ? middleware.provideReferences(document, position, options2, token, _providerReferences) : _providerReferences(document, position, options2, token);
      }
    };
    return [this.registerProvider(selector, provider), provider];
  }
  registerProvider(selector, provider) {
    return vscode_1$i.languages.registerReferenceProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider);
  }
}
ReferencesFeature_1 = reference$1.ReferencesFeature = ReferencesFeature;
const reference = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get ReferencesFeature() {
    return ReferencesFeature_1;
  },
  default: reference$1
}, [reference$1]);
const require$$20 = /* @__PURE__ */ getAugmentedNamespace(reference);
var codeAction$1 = {};
Object.defineProperty(codeAction$1, "__esModule", { value: true });
var CodeActionFeature_1 = codeAction$1.CodeActionFeature = void 0;
const vscode_1$h = require$$0$9;
const vscode_languageserver_protocol_1$j = require$$0$5;
const UUID$7 = require$$6$1;
const features_1$i = require$$1$4;
class CodeActionFeature extends features_1$i.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1$j.CodeActionRequest.type);
  }
  fillClientCapabilities(capabilities) {
    const cap = (0, features_1$i.ensure)((0, features_1$i.ensure)(capabilities, "textDocument"), "codeAction");
    cap.dynamicRegistration = true;
    cap.isPreferredSupport = true;
    cap.disabledSupport = true;
    cap.dataSupport = true;
    cap.resolveSupport = {
      properties: ["edit"]
    };
    cap.codeActionLiteralSupport = {
      codeActionKind: {
        valueSet: [
          vscode_languageserver_protocol_1$j.CodeActionKind.Empty,
          vscode_languageserver_protocol_1$j.CodeActionKind.QuickFix,
          vscode_languageserver_protocol_1$j.CodeActionKind.Refactor,
          vscode_languageserver_protocol_1$j.CodeActionKind.RefactorExtract,
          vscode_languageserver_protocol_1$j.CodeActionKind.RefactorInline,
          vscode_languageserver_protocol_1$j.CodeActionKind.RefactorRewrite,
          vscode_languageserver_protocol_1$j.CodeActionKind.Source,
          vscode_languageserver_protocol_1$j.CodeActionKind.SourceOrganizeImports
        ]
      }
    };
    cap.honorsChangeAnnotations = false;
  }
  initialize(capabilities, documentSelector) {
    const options = this.getRegistrationOptions(documentSelector, capabilities.codeActionProvider);
    if (!options) {
      return;
    }
    this.register({ id: UUID$7.generateUuid(), registerOptions: options });
  }
  registerLanguageProvider(options) {
    const selector = options.documentSelector;
    const provider = {
      provideCodeActions: (document, range2, context, token) => {
        const client2 = this._client;
        const _provideCodeActions = async (document2, range3, context2, token2) => {
          const params = {
            textDocument: client2.code2ProtocolConverter.asTextDocumentIdentifier(document2),
            range: client2.code2ProtocolConverter.asRange(range3),
            context: await client2.code2ProtocolConverter.asCodeActionContext(context2, token2)
          };
          return client2.sendRequest(vscode_languageserver_protocol_1$j.CodeActionRequest.type, params, token2).then((values) => {
            if (token2.isCancellationRequested || values === null || values === void 0) {
              return null;
            }
            return client2.protocol2CodeConverter.asCodeActionResult(values, token2);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$j.CodeActionRequest.type, token2, error2, null);
          });
        };
        const middleware = client2.middleware;
        return middleware.provideCodeActions ? middleware.provideCodeActions(document, range2, context, token, _provideCodeActions) : _provideCodeActions(document, range2, context, token);
      },
      resolveCodeAction: options.resolveProvider ? (item, token) => {
        const client2 = this._client;
        const middleware = this._client.middleware;
        const resolveCodeAction = async (item2, token2) => {
          return client2.sendRequest(vscode_languageserver_protocol_1$j.CodeActionResolveRequest.type, await client2.code2ProtocolConverter.asCodeAction(item2, token2), token2).then((result) => {
            if (token2.isCancellationRequested) {
              return item2;
            }
            return client2.protocol2CodeConverter.asCodeAction(result, token2);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$j.CodeActionResolveRequest.type, token2, error2, item2);
          });
        };
        return middleware.resolveCodeAction ? middleware.resolveCodeAction(item, token, resolveCodeAction) : resolveCodeAction(item, token);
      } : void 0
    };
    return [vscode_1$h.languages.registerCodeActionsProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider, options.codeActionKinds ? { providedCodeActionKinds: this._client.protocol2CodeConverter.asCodeActionKinds(options.codeActionKinds) } : void 0), provider];
  }
}
CodeActionFeature_1 = codeAction$1.CodeActionFeature = CodeActionFeature;
const codeAction = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get CodeActionFeature() {
    return CodeActionFeature_1;
  },
  default: codeAction$1
}, [codeAction$1]);
const require$$21 = /* @__PURE__ */ getAugmentedNamespace(codeAction);
var codeLens$1 = {};
Object.defineProperty(codeLens$1, "__esModule", { value: true });
var CodeLensFeature_1 = codeLens$1.CodeLensFeature = void 0;
const vscode_1$g = require$$0$9;
const vscode_languageserver_protocol_1$i = require$$0$5;
const UUID$6 = require$$6$1;
const features_1$h = require$$1$4;
class CodeLensFeature extends features_1$h.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1$i.CodeLensRequest.type);
  }
  fillClientCapabilities(capabilities) {
    (0, features_1$h.ensure)((0, features_1$h.ensure)(capabilities, "textDocument"), "codeLens").dynamicRegistration = true;
    (0, features_1$h.ensure)((0, features_1$h.ensure)(capabilities, "workspace"), "codeLens").refreshSupport = true;
  }
  initialize(capabilities, documentSelector) {
    const client2 = this._client;
    client2.onRequest(vscode_languageserver_protocol_1$i.CodeLensRefreshRequest.type, async () => {
      for (const provider of this.getAllProviders()) {
        provider.onDidChangeCodeLensEmitter.fire();
      }
    });
    const options = this.getRegistrationOptions(documentSelector, capabilities.codeLensProvider);
    if (!options) {
      return;
    }
    this.register({ id: UUID$6.generateUuid(), registerOptions: options });
  }
  registerLanguageProvider(options) {
    const selector = options.documentSelector;
    const eventEmitter = new vscode_1$g.EventEmitter();
    const provider = {
      onDidChangeCodeLenses: eventEmitter.event,
      provideCodeLenses: (document, token) => {
        const client2 = this._client;
        const provideCodeLenses = (document2, token2) => {
          return client2.sendRequest(vscode_languageserver_protocol_1$i.CodeLensRequest.type, client2.code2ProtocolConverter.asCodeLensParams(document2), token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return client2.protocol2CodeConverter.asCodeLenses(result, token2);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$i.CodeLensRequest.type, token2, error2, null);
          });
        };
        const middleware = client2.middleware;
        return middleware.provideCodeLenses ? middleware.provideCodeLenses(document, token, provideCodeLenses) : provideCodeLenses(document, token);
      },
      resolveCodeLens: options.resolveProvider ? (codeLens2, token) => {
        const client2 = this._client;
        const resolveCodeLens = (codeLens3, token2) => {
          return client2.sendRequest(vscode_languageserver_protocol_1$i.CodeLensResolveRequest.type, client2.code2ProtocolConverter.asCodeLens(codeLens3), token2).then((result) => {
            if (token2.isCancellationRequested) {
              return codeLens3;
            }
            return client2.protocol2CodeConverter.asCodeLens(result);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$i.CodeLensResolveRequest.type, token2, error2, codeLens3);
          });
        };
        const middleware = client2.middleware;
        return middleware.resolveCodeLens ? middleware.resolveCodeLens(codeLens2, token, resolveCodeLens) : resolveCodeLens(codeLens2, token);
      } : void 0
    };
    return [vscode_1$g.languages.registerCodeLensProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider), { provider, onDidChangeCodeLensEmitter: eventEmitter }];
  }
}
CodeLensFeature_1 = codeLens$1.CodeLensFeature = CodeLensFeature;
const codeLens = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get CodeLensFeature() {
    return CodeLensFeature_1;
  },
  default: codeLens$1
}, [codeLens$1]);
const require$$22 = /* @__PURE__ */ getAugmentedNamespace(codeLens);
var formatting$1 = {};
Object.defineProperty(formatting$1, "__esModule", { value: true });
var DocumentOnTypeFormattingFeature_1 = formatting$1.DocumentOnTypeFormattingFeature = DocumentRangeFormattingFeature_1 = formatting$1.DocumentRangeFormattingFeature = DocumentFormattingFeature_1 = formatting$1.DocumentFormattingFeature = void 0;
const vscode_1$f = require$$0$9;
const vscode_languageserver_protocol_1$h = require$$0$5;
const UUID$5 = require$$6$1;
const features_1$g = require$$1$4;
var FileFormattingOptions;
(function(FileFormattingOptions2) {
  function fromConfiguration(document) {
    const filesConfig = vscode_1$f.workspace.getConfiguration("files", document);
    return {
      trimTrailingWhitespace: filesConfig.get("trimTrailingWhitespace"),
      trimFinalNewlines: filesConfig.get("trimFinalNewlines"),
      insertFinalNewline: filesConfig.get("insertFinalNewline")
    };
  }
  FileFormattingOptions2.fromConfiguration = fromConfiguration;
})(FileFormattingOptions || (FileFormattingOptions = {}));
class DocumentFormattingFeature extends features_1$g.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1$h.DocumentFormattingRequest.type);
  }
  fillClientCapabilities(capabilities) {
    (0, features_1$g.ensure)((0, features_1$g.ensure)(capabilities, "textDocument"), "formatting").dynamicRegistration = true;
  }
  initialize(capabilities, documentSelector) {
    const options = this.getRegistrationOptions(documentSelector, capabilities.documentFormattingProvider);
    if (!options) {
      return;
    }
    this.register({ id: UUID$5.generateUuid(), registerOptions: options });
  }
  registerLanguageProvider(options) {
    const selector = options.documentSelector;
    const provider = {
      provideDocumentFormattingEdits: (document, options2, token) => {
        const client2 = this._client;
        const provideDocumentFormattingEdits = (document2, options3, token2) => {
          const params = {
            textDocument: client2.code2ProtocolConverter.asTextDocumentIdentifier(document2),
            options: client2.code2ProtocolConverter.asFormattingOptions(options3, FileFormattingOptions.fromConfiguration(document2))
          };
          return client2.sendRequest(vscode_languageserver_protocol_1$h.DocumentFormattingRequest.type, params, token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return client2.protocol2CodeConverter.asTextEdits(result, token2);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$h.DocumentFormattingRequest.type, token2, error2, null);
          });
        };
        const middleware = client2.middleware;
        return middleware.provideDocumentFormattingEdits ? middleware.provideDocumentFormattingEdits(document, options2, token, provideDocumentFormattingEdits) : provideDocumentFormattingEdits(document, options2, token);
      }
    };
    return [vscode_1$f.languages.registerDocumentFormattingEditProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider), provider];
  }
}
var DocumentFormattingFeature_1 = formatting$1.DocumentFormattingFeature = DocumentFormattingFeature;
class DocumentRangeFormattingFeature extends features_1$g.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1$h.DocumentRangeFormattingRequest.type);
  }
  fillClientCapabilities(capabilities) {
    (0, features_1$g.ensure)((0, features_1$g.ensure)(capabilities, "textDocument"), "rangeFormatting").dynamicRegistration = true;
  }
  initialize(capabilities, documentSelector) {
    const options = this.getRegistrationOptions(documentSelector, capabilities.documentRangeFormattingProvider);
    if (!options) {
      return;
    }
    this.register({ id: UUID$5.generateUuid(), registerOptions: options });
  }
  registerLanguageProvider(options) {
    const selector = options.documentSelector;
    const provider = {
      provideDocumentRangeFormattingEdits: (document, range2, options2, token) => {
        const client2 = this._client;
        const provideDocumentRangeFormattingEdits = (document2, range3, options3, token2) => {
          const params = {
            textDocument: client2.code2ProtocolConverter.asTextDocumentIdentifier(document2),
            range: client2.code2ProtocolConverter.asRange(range3),
            options: client2.code2ProtocolConverter.asFormattingOptions(options3, FileFormattingOptions.fromConfiguration(document2))
          };
          return client2.sendRequest(vscode_languageserver_protocol_1$h.DocumentRangeFormattingRequest.type, params, token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return client2.protocol2CodeConverter.asTextEdits(result, token2);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$h.DocumentRangeFormattingRequest.type, token2, error2, null);
          });
        };
        const middleware = client2.middleware;
        return middleware.provideDocumentRangeFormattingEdits ? middleware.provideDocumentRangeFormattingEdits(document, range2, options2, token, provideDocumentRangeFormattingEdits) : provideDocumentRangeFormattingEdits(document, range2, options2, token);
      }
    };
    return [vscode_1$f.languages.registerDocumentRangeFormattingEditProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider), provider];
  }
}
var DocumentRangeFormattingFeature_1 = formatting$1.DocumentRangeFormattingFeature = DocumentRangeFormattingFeature;
class DocumentOnTypeFormattingFeature extends features_1$g.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1$h.DocumentOnTypeFormattingRequest.type);
  }
  fillClientCapabilities(capabilities) {
    (0, features_1$g.ensure)((0, features_1$g.ensure)(capabilities, "textDocument"), "onTypeFormatting").dynamicRegistration = true;
  }
  initialize(capabilities, documentSelector) {
    const options = this.getRegistrationOptions(documentSelector, capabilities.documentOnTypeFormattingProvider);
    if (!options) {
      return;
    }
    this.register({ id: UUID$5.generateUuid(), registerOptions: options });
  }
  registerLanguageProvider(options) {
    const selector = options.documentSelector;
    const provider = {
      provideOnTypeFormattingEdits: (document, position, ch, options2, token) => {
        const client2 = this._client;
        const provideOnTypeFormattingEdits = (document2, position2, ch2, options3, token2) => {
          let params = {
            textDocument: client2.code2ProtocolConverter.asTextDocumentIdentifier(document2),
            position: client2.code2ProtocolConverter.asPosition(position2),
            ch: ch2,
            options: client2.code2ProtocolConverter.asFormattingOptions(options3, FileFormattingOptions.fromConfiguration(document2))
          };
          return client2.sendRequest(vscode_languageserver_protocol_1$h.DocumentOnTypeFormattingRequest.type, params, token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return client2.protocol2CodeConverter.asTextEdits(result, token2);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$h.DocumentOnTypeFormattingRequest.type, token2, error2, null);
          });
        };
        const middleware = client2.middleware;
        return middleware.provideOnTypeFormattingEdits ? middleware.provideOnTypeFormattingEdits(document, position, ch, options2, token, provideOnTypeFormattingEdits) : provideOnTypeFormattingEdits(document, position, ch, options2, token);
      }
    };
    const moreTriggerCharacter = options.moreTriggerCharacter || [];
    return [vscode_1$f.languages.registerOnTypeFormattingEditProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider, options.firstTriggerCharacter, ...moreTriggerCharacter), provider];
  }
}
DocumentOnTypeFormattingFeature_1 = formatting$1.DocumentOnTypeFormattingFeature = DocumentOnTypeFormattingFeature;
const formatting = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get DocumentFormattingFeature() {
    return DocumentFormattingFeature_1;
  },
  get DocumentOnTypeFormattingFeature() {
    return DocumentOnTypeFormattingFeature_1;
  },
  get DocumentRangeFormattingFeature() {
    return DocumentRangeFormattingFeature_1;
  },
  default: formatting$1
}, [formatting$1]);
const require$$23 = /* @__PURE__ */ getAugmentedNamespace(formatting);
var rename$1 = {};
Object.defineProperty(rename$1, "__esModule", { value: true });
var RenameFeature_1 = rename$1.RenameFeature = void 0;
const vscode_1$e = require$$0$9;
const vscode_languageserver_protocol_1$g = require$$0$5;
const UUID$4 = require$$6$1;
const Is$1 = require$$4$1;
const features_1$f = require$$1$4;
class RenameFeature extends features_1$f.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1$g.RenameRequest.type);
  }
  fillClientCapabilities(capabilities) {
    let rename2 = (0, features_1$f.ensure)((0, features_1$f.ensure)(capabilities, "textDocument"), "rename");
    rename2.dynamicRegistration = true;
    rename2.prepareSupport = true;
    rename2.prepareSupportDefaultBehavior = vscode_languageserver_protocol_1$g.PrepareSupportDefaultBehavior.Identifier;
    rename2.honorsChangeAnnotations = true;
  }
  initialize(capabilities, documentSelector) {
    const options = this.getRegistrationOptions(documentSelector, capabilities.renameProvider);
    if (!options) {
      return;
    }
    if (Is$1.boolean(capabilities.renameProvider)) {
      options.prepareProvider = false;
    }
    this.register({ id: UUID$4.generateUuid(), registerOptions: options });
  }
  registerLanguageProvider(options) {
    const selector = options.documentSelector;
    const provider = {
      provideRenameEdits: (document, position, newName, token) => {
        const client2 = this._client;
        const provideRenameEdits = (document2, position2, newName2, token2) => {
          let params = {
            textDocument: client2.code2ProtocolConverter.asTextDocumentIdentifier(document2),
            position: client2.code2ProtocolConverter.asPosition(position2),
            newName: newName2
          };
          return client2.sendRequest(vscode_languageserver_protocol_1$g.RenameRequest.type, params, token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return client2.protocol2CodeConverter.asWorkspaceEdit(result, token2);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$g.RenameRequest.type, token2, error2, null, false);
          });
        };
        const middleware = client2.middleware;
        return middleware.provideRenameEdits ? middleware.provideRenameEdits(document, position, newName, token, provideRenameEdits) : provideRenameEdits(document, position, newName, token);
      },
      prepareRename: options.prepareProvider ? (document, position, token) => {
        const client2 = this._client;
        const prepareRename = (document2, position2, token2) => {
          let params = {
            textDocument: client2.code2ProtocolConverter.asTextDocumentIdentifier(document2),
            position: client2.code2ProtocolConverter.asPosition(position2)
          };
          return client2.sendRequest(vscode_languageserver_protocol_1$g.PrepareRenameRequest.type, params, token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            if (vscode_languageserver_protocol_1$g.Range.is(result)) {
              return client2.protocol2CodeConverter.asRange(result);
            } else if (this.isDefaultBehavior(result)) {
              return result.defaultBehavior === true ? null : Promise.reject(new Error(`The element can't be renamed.`));
            } else if (result && vscode_languageserver_protocol_1$g.Range.is(result.range)) {
              return {
                range: client2.protocol2CodeConverter.asRange(result.range),
                placeholder: result.placeholder
              };
            }
            return Promise.reject(new Error(`The element can't be renamed.`));
          }, (error2) => {
            if (typeof error2.message === "string") {
              throw new Error(error2.message);
            } else {
              throw new Error(`The element can't be renamed.`);
            }
          });
        };
        const middleware = client2.middleware;
        return middleware.prepareRename ? middleware.prepareRename(document, position, token, prepareRename) : prepareRename(document, position, token);
      } : void 0
    };
    return [this.registerProvider(selector, provider), provider];
  }
  registerProvider(selector, provider) {
    return vscode_1$e.languages.registerRenameProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider);
  }
  isDefaultBehavior(value) {
    const candidate = value;
    return candidate && Is$1.boolean(candidate.defaultBehavior);
  }
}
RenameFeature_1 = rename$1.RenameFeature = RenameFeature;
const rename = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get RenameFeature() {
    return RenameFeature_1;
  },
  default: rename$1
}, [rename$1]);
const require$$24 = /* @__PURE__ */ getAugmentedNamespace(rename);
var documentLink$1 = {};
Object.defineProperty(documentLink$1, "__esModule", { value: true });
var DocumentLinkFeature_1 = documentLink$1.DocumentLinkFeature = void 0;
const vscode_1$d = require$$0$9;
const vscode_languageserver_protocol_1$f = require$$0$5;
const features_1$e = require$$1$4;
const UUID$3 = require$$6$1;
class DocumentLinkFeature extends features_1$e.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1$f.DocumentLinkRequest.type);
  }
  fillClientCapabilities(capabilities) {
    const documentLinkCapabilities = (0, features_1$e.ensure)((0, features_1$e.ensure)(capabilities, "textDocument"), "documentLink");
    documentLinkCapabilities.dynamicRegistration = true;
    documentLinkCapabilities.tooltipSupport = true;
  }
  initialize(capabilities, documentSelector) {
    const options = this.getRegistrationOptions(documentSelector, capabilities.documentLinkProvider);
    if (!options) {
      return;
    }
    this.register({ id: UUID$3.generateUuid(), registerOptions: options });
  }
  registerLanguageProvider(options) {
    const selector = options.documentSelector;
    const provider = {
      provideDocumentLinks: (document, token) => {
        const client2 = this._client;
        const provideDocumentLinks = (document2, token2) => {
          return client2.sendRequest(vscode_languageserver_protocol_1$f.DocumentLinkRequest.type, client2.code2ProtocolConverter.asDocumentLinkParams(document2), token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return client2.protocol2CodeConverter.asDocumentLinks(result, token2);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$f.DocumentLinkRequest.type, token2, error2, null);
          });
        };
        const middleware = client2.middleware;
        return middleware.provideDocumentLinks ? middleware.provideDocumentLinks(document, token, provideDocumentLinks) : provideDocumentLinks(document, token);
      },
      resolveDocumentLink: options.resolveProvider ? (link, token) => {
        const client2 = this._client;
        let resolveDocumentLink = (link2, token2) => {
          return client2.sendRequest(vscode_languageserver_protocol_1$f.DocumentLinkResolveRequest.type, client2.code2ProtocolConverter.asDocumentLink(link2), token2).then((result) => {
            if (token2.isCancellationRequested) {
              return link2;
            }
            return client2.protocol2CodeConverter.asDocumentLink(result);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$f.DocumentLinkResolveRequest.type, token2, error2, link2);
          });
        };
        const middleware = client2.middleware;
        return middleware.resolveDocumentLink ? middleware.resolveDocumentLink(link, token, resolveDocumentLink) : resolveDocumentLink(link, token);
      } : void 0
    };
    return [vscode_1$d.languages.registerDocumentLinkProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider), provider];
  }
}
DocumentLinkFeature_1 = documentLink$1.DocumentLinkFeature = DocumentLinkFeature;
const documentLink = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get DocumentLinkFeature() {
    return DocumentLinkFeature_1;
  },
  default: documentLink$1
}, [documentLink$1]);
const require$$25 = /* @__PURE__ */ getAugmentedNamespace(documentLink);
var executeCommand$1 = {};
Object.defineProperty(executeCommand$1, "__esModule", { value: true });
var ExecuteCommandFeature_1 = executeCommand$1.ExecuteCommandFeature = void 0;
const vscode_1$c = require$$0$9;
const vscode_languageserver_protocol_1$e = require$$0$5;
const UUID$2 = require$$6$1;
const features_1$d = require$$1$4;
class ExecuteCommandFeature {
  constructor(client2) {
    this._client = client2;
    this._commands = /* @__PURE__ */ new Map();
  }
  getState() {
    return { kind: "workspace", id: this.registrationType.method, registrations: this._commands.size > 0 };
  }
  get registrationType() {
    return vscode_languageserver_protocol_1$e.ExecuteCommandRequest.type;
  }
  fillClientCapabilities(capabilities) {
    (0, features_1$d.ensure)((0, features_1$d.ensure)(capabilities, "workspace"), "executeCommand").dynamicRegistration = true;
  }
  initialize(capabilities) {
    if (!capabilities.executeCommandProvider) {
      return;
    }
    this.register({
      id: UUID$2.generateUuid(),
      registerOptions: Object.assign({}, capabilities.executeCommandProvider)
    });
  }
  register(data) {
    const client2 = this._client;
    const middleware = client2.middleware;
    const executeCommand2 = (command, args) => {
      let params = {
        command,
        arguments: args
      };
      return client2.sendRequest(vscode_languageserver_protocol_1$e.ExecuteCommandRequest.type, params).then(void 0, (error2) => {
        return client2.handleFailedRequest(vscode_languageserver_protocol_1$e.ExecuteCommandRequest.type, void 0, error2, void 0);
      });
    };
    if (data.registerOptions.commands) {
      const disposables = [];
      for (const command of data.registerOptions.commands) {
        disposables.push(vscode_1$c.commands.registerCommand(command, (...args) => {
          return middleware.executeCommand ? middleware.executeCommand(command, args, executeCommand2) : executeCommand2(command, args);
        }));
      }
      this._commands.set(data.id, disposables);
    }
  }
  unregister(id) {
    let disposables = this._commands.get(id);
    if (disposables) {
      disposables.forEach((disposable2) => disposable2.dispose());
    }
  }
  dispose() {
    this._commands.forEach((value) => {
      value.forEach((disposable2) => disposable2.dispose());
    });
    this._commands.clear();
  }
}
ExecuteCommandFeature_1 = executeCommand$1.ExecuteCommandFeature = ExecuteCommandFeature;
const executeCommand = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get ExecuteCommandFeature() {
    return ExecuteCommandFeature_1;
  },
  default: executeCommand$1
}, [executeCommand$1]);
const require$$26 = /* @__PURE__ */ getAugmentedNamespace(executeCommand);
var fileSystemWatcher$1 = {};
Object.defineProperty(fileSystemWatcher$1, "__esModule", { value: true });
var FileSystemWatcherFeature_1 = fileSystemWatcher$1.FileSystemWatcherFeature = void 0;
const vscode_1$b = require$$0$9;
const vscode_languageserver_protocol_1$d = require$$0$5;
const features_1$c = require$$1$4;
class FileSystemWatcherFeature {
  constructor(client2, notifyFileEvent) {
    this._client = client2;
    this._notifyFileEvent = notifyFileEvent;
    this._watchers = /* @__PURE__ */ new Map();
  }
  getState() {
    return { kind: "workspace", id: this.registrationType.method, registrations: this._watchers.size > 0 };
  }
  get registrationType() {
    return vscode_languageserver_protocol_1$d.DidChangeWatchedFilesNotification.type;
  }
  fillClientCapabilities(capabilities) {
    (0, features_1$c.ensure)((0, features_1$c.ensure)(capabilities, "workspace"), "didChangeWatchedFiles").dynamicRegistration = true;
    (0, features_1$c.ensure)((0, features_1$c.ensure)(capabilities, "workspace"), "didChangeWatchedFiles").relativePatternSupport = true;
  }
  initialize(_capabilities, _documentSelector) {
  }
  register(data) {
    if (!Array.isArray(data.registerOptions.watchers)) {
      return;
    }
    const disposables = [];
    for (const watcher of data.registerOptions.watchers) {
      const globPattern = this._client.protocol2CodeConverter.asGlobPattern(watcher.globPattern);
      if (globPattern === void 0) {
        continue;
      }
      let watchCreate = true, watchChange = true, watchDelete = true;
      if (watcher.kind !== void 0 && watcher.kind !== null) {
        watchCreate = (watcher.kind & vscode_languageserver_protocol_1$d.WatchKind.Create) !== 0;
        watchChange = (watcher.kind & vscode_languageserver_protocol_1$d.WatchKind.Change) !== 0;
        watchDelete = (watcher.kind & vscode_languageserver_protocol_1$d.WatchKind.Delete) !== 0;
      }
      const fileSystemWatcher2 = vscode_1$b.workspace.createFileSystemWatcher(globPattern, !watchCreate, !watchChange, !watchDelete);
      this.hookListeners(fileSystemWatcher2, watchCreate, watchChange, watchDelete, disposables);
      disposables.push(fileSystemWatcher2);
    }
    this._watchers.set(data.id, disposables);
  }
  registerRaw(id, fileSystemWatchers) {
    let disposables = [];
    for (let fileSystemWatcher2 of fileSystemWatchers) {
      this.hookListeners(fileSystemWatcher2, true, true, true, disposables);
    }
    this._watchers.set(id, disposables);
  }
  hookListeners(fileSystemWatcher2, watchCreate, watchChange, watchDelete, listeners) {
    if (watchCreate) {
      fileSystemWatcher2.onDidCreate((resource) => this._notifyFileEvent({
        uri: this._client.code2ProtocolConverter.asUri(resource),
        type: vscode_languageserver_protocol_1$d.FileChangeType.Created
      }), null, listeners);
    }
    if (watchChange) {
      fileSystemWatcher2.onDidChange((resource) => this._notifyFileEvent({
        uri: this._client.code2ProtocolConverter.asUri(resource),
        type: vscode_languageserver_protocol_1$d.FileChangeType.Changed
      }), null, listeners);
    }
    if (watchDelete) {
      fileSystemWatcher2.onDidDelete((resource) => this._notifyFileEvent({
        uri: this._client.code2ProtocolConverter.asUri(resource),
        type: vscode_languageserver_protocol_1$d.FileChangeType.Deleted
      }), null, listeners);
    }
  }
  unregister(id) {
    let disposables = this._watchers.get(id);
    if (disposables) {
      for (let disposable2 of disposables) {
        disposable2.dispose();
      }
    }
  }
  dispose() {
    this._watchers.forEach((disposables) => {
      for (let disposable2 of disposables) {
        disposable2.dispose();
      }
    });
    this._watchers.clear();
  }
}
FileSystemWatcherFeature_1 = fileSystemWatcher$1.FileSystemWatcherFeature = FileSystemWatcherFeature;
const fileSystemWatcher = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get FileSystemWatcherFeature() {
    return FileSystemWatcherFeature_1;
  },
  default: fileSystemWatcher$1
}, [fileSystemWatcher$1]);
const require$$27 = /* @__PURE__ */ getAugmentedNamespace(fileSystemWatcher);
var colorProvider$1 = {};
Object.defineProperty(colorProvider$1, "__esModule", { value: true });
var ColorProviderFeature_1 = colorProvider$1.ColorProviderFeature = void 0;
const vscode_1$a = require$$0$9;
const vscode_languageserver_protocol_1$c = require$$0$5;
const features_1$b = require$$1$4;
class ColorProviderFeature extends features_1$b.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1$c.DocumentColorRequest.type);
  }
  fillClientCapabilities(capabilities) {
    (0, features_1$b.ensure)((0, features_1$b.ensure)(capabilities, "textDocument"), "colorProvider").dynamicRegistration = true;
  }
  initialize(capabilities, documentSelector) {
    let [id, options] = this.getRegistration(documentSelector, capabilities.colorProvider);
    if (!id || !options) {
      return;
    }
    this.register({ id, registerOptions: options });
  }
  registerLanguageProvider(options) {
    const selector = options.documentSelector;
    const provider = {
      provideColorPresentations: (color, context, token) => {
        const client2 = this._client;
        const provideColorPresentations = (color2, context2, token2) => {
          const requestParams = {
            color: color2,
            textDocument: client2.code2ProtocolConverter.asTextDocumentIdentifier(context2.document),
            range: client2.code2ProtocolConverter.asRange(context2.range)
          };
          return client2.sendRequest(vscode_languageserver_protocol_1$c.ColorPresentationRequest.type, requestParams, token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return this._client.protocol2CodeConverter.asColorPresentations(result, token2);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$c.ColorPresentationRequest.type, token2, error2, null);
          });
        };
        const middleware = client2.middleware;
        return middleware.provideColorPresentations ? middleware.provideColorPresentations(color, context, token, provideColorPresentations) : provideColorPresentations(color, context, token);
      },
      provideDocumentColors: (document, token) => {
        const client2 = this._client;
        const provideDocumentColors = (document2, token2) => {
          const requestParams = {
            textDocument: client2.code2ProtocolConverter.asTextDocumentIdentifier(document2)
          };
          return client2.sendRequest(vscode_languageserver_protocol_1$c.DocumentColorRequest.type, requestParams, token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return this._client.protocol2CodeConverter.asColorInformations(result, token2);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$c.DocumentColorRequest.type, token2, error2, null);
          });
        };
        const middleware = client2.middleware;
        return middleware.provideDocumentColors ? middleware.provideDocumentColors(document, token, provideDocumentColors) : provideDocumentColors(document, token);
      }
    };
    return [vscode_1$a.languages.registerColorProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider), provider];
  }
}
ColorProviderFeature_1 = colorProvider$1.ColorProviderFeature = ColorProviderFeature;
const colorProvider = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get ColorProviderFeature() {
    return ColorProviderFeature_1;
  },
  default: colorProvider$1
}, [colorProvider$1]);
const require$$28 = /* @__PURE__ */ getAugmentedNamespace(colorProvider);
var implementation$1 = {};
Object.defineProperty(implementation$1, "__esModule", { value: true });
var ImplementationFeature_1 = implementation$1.ImplementationFeature = void 0;
const vscode_1$9 = require$$0$9;
const vscode_languageserver_protocol_1$b = require$$0$5;
const features_1$a = require$$1$4;
class ImplementationFeature extends features_1$a.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1$b.ImplementationRequest.type);
  }
  fillClientCapabilities(capabilities) {
    let implementationSupport = (0, features_1$a.ensure)((0, features_1$a.ensure)(capabilities, "textDocument"), "implementation");
    implementationSupport.dynamicRegistration = true;
    implementationSupport.linkSupport = true;
  }
  initialize(capabilities, documentSelector) {
    let [id, options] = this.getRegistration(documentSelector, capabilities.implementationProvider);
    if (!id || !options) {
      return;
    }
    this.register({ id, registerOptions: options });
  }
  registerLanguageProvider(options) {
    const selector = options.documentSelector;
    const provider = {
      provideImplementation: (document, position, token) => {
        const client2 = this._client;
        const provideImplementation = (document2, position2, token2) => {
          return client2.sendRequest(vscode_languageserver_protocol_1$b.ImplementationRequest.type, client2.code2ProtocolConverter.asTextDocumentPositionParams(document2, position2), token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return client2.protocol2CodeConverter.asDefinitionResult(result, token2);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$b.ImplementationRequest.type, token2, error2, null);
          });
        };
        const middleware = client2.middleware;
        return middleware.provideImplementation ? middleware.provideImplementation(document, position, token, provideImplementation) : provideImplementation(document, position, token);
      }
    };
    return [this.registerProvider(selector, provider), provider];
  }
  registerProvider(selector, provider) {
    return vscode_1$9.languages.registerImplementationProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider);
  }
}
ImplementationFeature_1 = implementation$1.ImplementationFeature = ImplementationFeature;
const implementation = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get ImplementationFeature() {
    return ImplementationFeature_1;
  },
  default: implementation$1
}, [implementation$1]);
const require$$29 = /* @__PURE__ */ getAugmentedNamespace(implementation);
var typeDefinition$1 = {};
Object.defineProperty(typeDefinition$1, "__esModule", { value: true });
var TypeDefinitionFeature_1 = typeDefinition$1.TypeDefinitionFeature = void 0;
const vscode_1$8 = require$$0$9;
const vscode_languageserver_protocol_1$a = require$$0$5;
const features_1$9 = require$$1$4;
class TypeDefinitionFeature extends features_1$9.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1$a.TypeDefinitionRequest.type);
  }
  fillClientCapabilities(capabilities) {
    (0, features_1$9.ensure)((0, features_1$9.ensure)(capabilities, "textDocument"), "typeDefinition").dynamicRegistration = true;
    let typeDefinitionSupport = (0, features_1$9.ensure)((0, features_1$9.ensure)(capabilities, "textDocument"), "typeDefinition");
    typeDefinitionSupport.dynamicRegistration = true;
    typeDefinitionSupport.linkSupport = true;
  }
  initialize(capabilities, documentSelector) {
    let [id, options] = this.getRegistration(documentSelector, capabilities.typeDefinitionProvider);
    if (!id || !options) {
      return;
    }
    this.register({ id, registerOptions: options });
  }
  registerLanguageProvider(options) {
    const selector = options.documentSelector;
    const provider = {
      provideTypeDefinition: (document, position, token) => {
        const client2 = this._client;
        const provideTypeDefinition = (document2, position2, token2) => {
          return client2.sendRequest(vscode_languageserver_protocol_1$a.TypeDefinitionRequest.type, client2.code2ProtocolConverter.asTextDocumentPositionParams(document2, position2), token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return client2.protocol2CodeConverter.asDefinitionResult(result, token2);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$a.TypeDefinitionRequest.type, token2, error2, null);
          });
        };
        const middleware = client2.middleware;
        return middleware.provideTypeDefinition ? middleware.provideTypeDefinition(document, position, token, provideTypeDefinition) : provideTypeDefinition(document, position, token);
      }
    };
    return [this.registerProvider(selector, provider), provider];
  }
  registerProvider(selector, provider) {
    return vscode_1$8.languages.registerTypeDefinitionProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider);
  }
}
TypeDefinitionFeature_1 = typeDefinition$1.TypeDefinitionFeature = TypeDefinitionFeature;
const typeDefinition = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get TypeDefinitionFeature() {
    return TypeDefinitionFeature_1;
  },
  default: typeDefinition$1
}, [typeDefinition$1]);
const require$$30 = /* @__PURE__ */ getAugmentedNamespace(typeDefinition);
var workspaceFolder$1 = {};
Object.defineProperty(workspaceFolder$1, "__esModule", { value: true });
var WorkspaceFoldersFeature_1 = workspaceFolder$1.WorkspaceFoldersFeature = arrayDiff_1 = workspaceFolder$1.arrayDiff = void 0;
const UUID$1 = require$$6$1;
const vscode_1$7 = require$$0$9;
const vscode_languageserver_protocol_1$9 = require$$0$5;
function access$1(target, key) {
  if (target === void 0 || target === null) {
    return void 0;
  }
  return target[key];
}
function arrayDiff(left, right) {
  return left.filter((element) => right.indexOf(element) < 0);
}
var arrayDiff_1 = workspaceFolder$1.arrayDiff = arrayDiff;
class WorkspaceFoldersFeature {
  constructor(client2) {
    this._client = client2;
    this._listeners = /* @__PURE__ */ new Map();
  }
  getState() {
    return { kind: "workspace", id: this.registrationType.method, registrations: this._listeners.size > 0 };
  }
  get registrationType() {
    return vscode_languageserver_protocol_1$9.DidChangeWorkspaceFoldersNotification.type;
  }
  fillInitializeParams(params) {
    const folders = vscode_1$7.workspace.workspaceFolders;
    this.initializeWithFolders(folders);
    if (folders === void 0) {
      params.workspaceFolders = null;
    } else {
      params.workspaceFolders = folders.map((folder) => this.asProtocol(folder));
    }
  }
  initializeWithFolders(currentWorkspaceFolders) {
    this._initialFolders = currentWorkspaceFolders;
  }
  fillClientCapabilities(capabilities) {
    capabilities.workspace = capabilities.workspace || {};
    capabilities.workspace.workspaceFolders = true;
  }
  initialize(capabilities) {
    const client2 = this._client;
    client2.onRequest(vscode_languageserver_protocol_1$9.WorkspaceFoldersRequest.type, (token) => {
      const workspaceFolders = () => {
        const folders = vscode_1$7.workspace.workspaceFolders;
        if (folders === void 0) {
          return null;
        }
        const result = folders.map((folder) => {
          return this.asProtocol(folder);
        });
        return result;
      };
      const middleware = client2.middleware.workspace;
      return middleware && middleware.workspaceFolders ? middleware.workspaceFolders(token, workspaceFolders) : workspaceFolders();
    });
    const value = access$1(access$1(access$1(capabilities, "workspace"), "workspaceFolders"), "changeNotifications");
    let id;
    if (typeof value === "string") {
      id = value;
    } else if (value === true) {
      id = UUID$1.generateUuid();
    }
    if (id) {
      this.register({ id, registerOptions: void 0 });
    }
  }
  sendInitialEvent(currentWorkspaceFolders) {
    let promise;
    if (this._initialFolders && currentWorkspaceFolders) {
      const removed = arrayDiff(this._initialFolders, currentWorkspaceFolders);
      const added = arrayDiff(currentWorkspaceFolders, this._initialFolders);
      if (added.length > 0 || removed.length > 0) {
        promise = this.doSendEvent(added, removed);
      }
    } else if (this._initialFolders) {
      promise = this.doSendEvent([], this._initialFolders);
    } else if (currentWorkspaceFolders) {
      promise = this.doSendEvent(currentWorkspaceFolders, []);
    }
    if (promise !== void 0) {
      promise.catch((error2) => {
        this._client.error(`Sending notification ${vscode_languageserver_protocol_1$9.DidChangeWorkspaceFoldersNotification.type.method} failed`, error2);
      });
    }
  }
  doSendEvent(addedFolders, removedFolders) {
    let params = {
      event: {
        added: addedFolders.map((folder) => this.asProtocol(folder)),
        removed: removedFolders.map((folder) => this.asProtocol(folder))
      }
    };
    return this._client.sendNotification(vscode_languageserver_protocol_1$9.DidChangeWorkspaceFoldersNotification.type, params);
  }
  register(data) {
    let id = data.id;
    let client2 = this._client;
    let disposable2 = vscode_1$7.workspace.onDidChangeWorkspaceFolders((event) => {
      let didChangeWorkspaceFolders = (event2) => {
        return this.doSendEvent(event2.added, event2.removed);
      };
      let middleware = client2.middleware.workspace;
      const promise = middleware && middleware.didChangeWorkspaceFolders ? middleware.didChangeWorkspaceFolders(event, didChangeWorkspaceFolders) : didChangeWorkspaceFolders(event);
      promise.catch((error2) => {
        this._client.error(`Sending notification ${vscode_languageserver_protocol_1$9.DidChangeWorkspaceFoldersNotification.type.method} failed`, error2);
      });
    });
    this._listeners.set(id, disposable2);
    this.sendInitialEvent(vscode_1$7.workspace.workspaceFolders);
  }
  unregister(id) {
    let disposable2 = this._listeners.get(id);
    if (disposable2 === void 0) {
      return;
    }
    this._listeners.delete(id);
    disposable2.dispose();
  }
  dispose() {
    for (let disposable2 of this._listeners.values()) {
      disposable2.dispose();
    }
    this._listeners.clear();
  }
  asProtocol(workspaceFolder2) {
    if (workspaceFolder2 === void 0) {
      return null;
    }
    return { uri: this._client.code2ProtocolConverter.asUri(workspaceFolder2.uri), name: workspaceFolder2.name };
  }
}
WorkspaceFoldersFeature_1 = workspaceFolder$1.WorkspaceFoldersFeature = WorkspaceFoldersFeature;
const workspaceFolder = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get WorkspaceFoldersFeature() {
    return WorkspaceFoldersFeature_1;
  },
  get arrayDiff() {
    return arrayDiff_1;
  },
  default: workspaceFolder$1
}, [workspaceFolder$1]);
const require$$31 = /* @__PURE__ */ getAugmentedNamespace(workspaceFolder);
var foldingRange$1 = {};
Object.defineProperty(foldingRange$1, "__esModule", { value: true });
var FoldingRangeFeature_1 = foldingRange$1.FoldingRangeFeature = void 0;
const vscode_1$6 = require$$0$9;
const vscode_languageserver_protocol_1$8 = require$$0$5;
const features_1$8 = require$$1$4;
class FoldingRangeFeature extends features_1$8.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1$8.FoldingRangeRequest.type);
  }
  fillClientCapabilities(capabilities) {
    let capability = (0, features_1$8.ensure)((0, features_1$8.ensure)(capabilities, "textDocument"), "foldingRange");
    capability.dynamicRegistration = true;
    capability.rangeLimit = 5e3;
    capability.lineFoldingOnly = true;
    capability.foldingRangeKind = { valueSet: [vscode_languageserver_protocol_1$8.FoldingRangeKind.Comment, vscode_languageserver_protocol_1$8.FoldingRangeKind.Imports, vscode_languageserver_protocol_1$8.FoldingRangeKind.Region] };
    capability.foldingRange = { collapsedText: false };
  }
  initialize(capabilities, documentSelector) {
    let [id, options] = this.getRegistration(documentSelector, capabilities.foldingRangeProvider);
    if (!id || !options) {
      return;
    }
    this.register({ id, registerOptions: options });
  }
  registerLanguageProvider(options) {
    const selector = options.documentSelector;
    const provider = {
      provideFoldingRanges: (document, context, token) => {
        const client2 = this._client;
        const provideFoldingRanges = (document2, _, token2) => {
          const requestParams = {
            textDocument: client2.code2ProtocolConverter.asTextDocumentIdentifier(document2)
          };
          return client2.sendRequest(vscode_languageserver_protocol_1$8.FoldingRangeRequest.type, requestParams, token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return client2.protocol2CodeConverter.asFoldingRanges(result, token2);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$8.FoldingRangeRequest.type, token2, error2, null);
          });
        };
        const middleware = client2.middleware;
        return middleware.provideFoldingRanges ? middleware.provideFoldingRanges(document, context, token, provideFoldingRanges) : provideFoldingRanges(document, context, token);
      }
    };
    return [vscode_1$6.languages.registerFoldingRangeProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider), provider];
  }
}
FoldingRangeFeature_1 = foldingRange$1.FoldingRangeFeature = FoldingRangeFeature;
const foldingRange = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get FoldingRangeFeature() {
    return FoldingRangeFeature_1;
  },
  default: foldingRange$1
}, [foldingRange$1]);
const require$$32 = /* @__PURE__ */ getAugmentedNamespace(foldingRange);
var declaration$1 = {};
Object.defineProperty(declaration$1, "__esModule", { value: true });
var DeclarationFeature_1 = declaration$1.DeclarationFeature = void 0;
const vscode_1$5 = require$$0$9;
const vscode_languageserver_protocol_1$7 = require$$0$5;
const features_1$7 = require$$1$4;
class DeclarationFeature extends features_1$7.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1$7.DeclarationRequest.type);
  }
  fillClientCapabilities(capabilities) {
    const declarationSupport = (0, features_1$7.ensure)((0, features_1$7.ensure)(capabilities, "textDocument"), "declaration");
    declarationSupport.dynamicRegistration = true;
    declarationSupport.linkSupport = true;
  }
  initialize(capabilities, documentSelector) {
    const [id, options] = this.getRegistration(documentSelector, capabilities.declarationProvider);
    if (!id || !options) {
      return;
    }
    this.register({ id, registerOptions: options });
  }
  registerLanguageProvider(options) {
    const selector = options.documentSelector;
    const provider = {
      provideDeclaration: (document, position, token) => {
        const client2 = this._client;
        const provideDeclaration = (document2, position2, token2) => {
          return client2.sendRequest(vscode_languageserver_protocol_1$7.DeclarationRequest.type, client2.code2ProtocolConverter.asTextDocumentPositionParams(document2, position2), token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return client2.protocol2CodeConverter.asDeclarationResult(result, token2);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$7.DeclarationRequest.type, token2, error2, null);
          });
        };
        const middleware = client2.middleware;
        return middleware.provideDeclaration ? middleware.provideDeclaration(document, position, token, provideDeclaration) : provideDeclaration(document, position, token);
      }
    };
    return [this.registerProvider(selector, provider), provider];
  }
  registerProvider(selector, provider) {
    return vscode_1$5.languages.registerDeclarationProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider);
  }
}
DeclarationFeature_1 = declaration$1.DeclarationFeature = DeclarationFeature;
const declaration = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get DeclarationFeature() {
    return DeclarationFeature_1;
  },
  default: declaration$1
}, [declaration$1]);
const require$$33 = /* @__PURE__ */ getAugmentedNamespace(declaration);
var selectionRange$1 = {};
Object.defineProperty(selectionRange$1, "__esModule", { value: true });
var SelectionRangeFeature_1 = selectionRange$1.SelectionRangeFeature = void 0;
const vscode_1$4 = require$$0$9;
const vscode_languageserver_protocol_1$6 = require$$0$5;
const features_1$6 = require$$1$4;
class SelectionRangeFeature extends features_1$6.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1$6.SelectionRangeRequest.type);
  }
  fillClientCapabilities(capabilities) {
    const capability = (0, features_1$6.ensure)((0, features_1$6.ensure)(capabilities, "textDocument"), "selectionRange");
    capability.dynamicRegistration = true;
  }
  initialize(capabilities, documentSelector) {
    const [id, options] = this.getRegistration(documentSelector, capabilities.selectionRangeProvider);
    if (!id || !options) {
      return;
    }
    this.register({ id, registerOptions: options });
  }
  registerLanguageProvider(options) {
    const selector = options.documentSelector;
    const provider = {
      provideSelectionRanges: (document, positions, token) => {
        const client2 = this._client;
        const provideSelectionRanges = async (document2, positions2, token2) => {
          const requestParams = {
            textDocument: client2.code2ProtocolConverter.asTextDocumentIdentifier(document2),
            positions: await client2.code2ProtocolConverter.asPositions(positions2, token2)
          };
          return client2.sendRequest(vscode_languageserver_protocol_1$6.SelectionRangeRequest.type, requestParams, token2).then((ranges) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return client2.protocol2CodeConverter.asSelectionRanges(ranges, token2);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$6.SelectionRangeRequest.type, token2, error2, null);
          });
        };
        const middleware = client2.middleware;
        return middleware.provideSelectionRanges ? middleware.provideSelectionRanges(document, positions, token, provideSelectionRanges) : provideSelectionRanges(document, positions, token);
      }
    };
    return [this.registerProvider(selector, provider), provider];
  }
  registerProvider(selector, provider) {
    return vscode_1$4.languages.registerSelectionRangeProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider);
  }
}
SelectionRangeFeature_1 = selectionRange$1.SelectionRangeFeature = SelectionRangeFeature;
const selectionRange = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get SelectionRangeFeature() {
    return SelectionRangeFeature_1;
  },
  default: selectionRange$1
}, [selectionRange$1]);
const require$$34 = /* @__PURE__ */ getAugmentedNamespace(selectionRange);
var progress$1 = {};
Object.defineProperty(progress$1, "__esModule", { value: true });
var ProgressFeature_1 = progress$1.ProgressFeature = void 0;
const vscode_languageserver_protocol_1$5 = require$$0$5;
const progressPart_1 = require$$7;
function ensure$1(target, key) {
  if (target[key] === void 0) {
    target[key] = /* @__PURE__ */ Object.create(null);
  }
  return target[key];
}
class ProgressFeature {
  constructor(_client) {
    this._client = _client;
    this.activeParts = /* @__PURE__ */ new Set();
  }
  getState() {
    return { kind: "window", id: vscode_languageserver_protocol_1$5.WorkDoneProgressCreateRequest.method, registrations: this.activeParts.size > 0 };
  }
  fillClientCapabilities(capabilities) {
    ensure$1(capabilities, "window").workDoneProgress = true;
  }
  initialize() {
    const client2 = this._client;
    const deleteHandler = (part) => {
      this.activeParts.delete(part);
    };
    const createHandler = (params) => {
      this.activeParts.add(new progressPart_1.ProgressPart(this._client, params.token, deleteHandler));
    };
    client2.onRequest(vscode_languageserver_protocol_1$5.WorkDoneProgressCreateRequest.type, createHandler);
  }
  dispose() {
    for (const part of this.activeParts) {
      part.done();
    }
    this.activeParts.clear();
  }
}
ProgressFeature_1 = progress$1.ProgressFeature = ProgressFeature;
const progress = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get ProgressFeature() {
    return ProgressFeature_1;
  },
  default: progress$1
}, [progress$1]);
const require$$35 = /* @__PURE__ */ getAugmentedNamespace(progress);
var callHierarchy$1 = {};
Object.defineProperty(callHierarchy$1, "__esModule", { value: true });
var CallHierarchyFeature_1 = callHierarchy$1.CallHierarchyFeature = void 0;
const vscode_1$3 = require$$0$9;
const vscode_languageserver_protocol_1$4 = require$$0$5;
const features_1$5 = require$$1$4;
class CallHierarchyProvider {
  constructor(client2) {
    this.client = client2;
    this.middleware = client2.middleware;
  }
  prepareCallHierarchy(document, position, token) {
    const client2 = this.client;
    const middleware = this.middleware;
    const prepareCallHierarchy = (document2, position2, token2) => {
      const params = client2.code2ProtocolConverter.asTextDocumentPositionParams(document2, position2);
      return client2.sendRequest(vscode_languageserver_protocol_1$4.CallHierarchyPrepareRequest.type, params, token2).then((result) => {
        if (token2.isCancellationRequested) {
          return null;
        }
        return client2.protocol2CodeConverter.asCallHierarchyItems(result, token2);
      }, (error2) => {
        return client2.handleFailedRequest(vscode_languageserver_protocol_1$4.CallHierarchyPrepareRequest.type, token2, error2, null);
      });
    };
    return middleware.prepareCallHierarchy ? middleware.prepareCallHierarchy(document, position, token, prepareCallHierarchy) : prepareCallHierarchy(document, position, token);
  }
  provideCallHierarchyIncomingCalls(item, token) {
    const client2 = this.client;
    const middleware = this.middleware;
    const provideCallHierarchyIncomingCalls = (item2, token2) => {
      const params = {
        item: client2.code2ProtocolConverter.asCallHierarchyItem(item2)
      };
      return client2.sendRequest(vscode_languageserver_protocol_1$4.CallHierarchyIncomingCallsRequest.type, params, token2).then((result) => {
        if (token2.isCancellationRequested) {
          return null;
        }
        return client2.protocol2CodeConverter.asCallHierarchyIncomingCalls(result, token2);
      }, (error2) => {
        return client2.handleFailedRequest(vscode_languageserver_protocol_1$4.CallHierarchyIncomingCallsRequest.type, token2, error2, null);
      });
    };
    return middleware.provideCallHierarchyIncomingCalls ? middleware.provideCallHierarchyIncomingCalls(item, token, provideCallHierarchyIncomingCalls) : provideCallHierarchyIncomingCalls(item, token);
  }
  provideCallHierarchyOutgoingCalls(item, token) {
    const client2 = this.client;
    const middleware = this.middleware;
    const provideCallHierarchyOutgoingCalls = (item2, token2) => {
      const params = {
        item: client2.code2ProtocolConverter.asCallHierarchyItem(item2)
      };
      return client2.sendRequest(vscode_languageserver_protocol_1$4.CallHierarchyOutgoingCallsRequest.type, params, token2).then((result) => {
        if (token2.isCancellationRequested) {
          return null;
        }
        return client2.protocol2CodeConverter.asCallHierarchyOutgoingCalls(result, token2);
      }, (error2) => {
        return client2.handleFailedRequest(vscode_languageserver_protocol_1$4.CallHierarchyOutgoingCallsRequest.type, token2, error2, null);
      });
    };
    return middleware.provideCallHierarchyOutgoingCalls ? middleware.provideCallHierarchyOutgoingCalls(item, token, provideCallHierarchyOutgoingCalls) : provideCallHierarchyOutgoingCalls(item, token);
  }
}
class CallHierarchyFeature extends features_1$5.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1$4.CallHierarchyPrepareRequest.type);
  }
  fillClientCapabilities(cap) {
    const capabilities = cap;
    const capability = (0, features_1$5.ensure)((0, features_1$5.ensure)(capabilities, "textDocument"), "callHierarchy");
    capability.dynamicRegistration = true;
  }
  initialize(capabilities, documentSelector) {
    const [id, options] = this.getRegistration(documentSelector, capabilities.callHierarchyProvider);
    if (!id || !options) {
      return;
    }
    this.register({ id, registerOptions: options });
  }
  registerLanguageProvider(options) {
    const client2 = this._client;
    const provider = new CallHierarchyProvider(client2);
    return [vscode_1$3.languages.registerCallHierarchyProvider(this._client.protocol2CodeConverter.asDocumentSelector(options.documentSelector), provider), provider];
  }
}
CallHierarchyFeature_1 = callHierarchy$1.CallHierarchyFeature = CallHierarchyFeature;
const callHierarchy = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get CallHierarchyFeature() {
    return CallHierarchyFeature_1;
  },
  default: callHierarchy$1
}, [callHierarchy$1]);
const require$$36 = /* @__PURE__ */ getAugmentedNamespace(callHierarchy);
var semanticTokens$1 = {};
Object.defineProperty(semanticTokens$1, "__esModule", { value: true });
var SemanticTokensFeature_1 = semanticTokens$1.SemanticTokensFeature = void 0;
const vscode = require$$0$9;
const vscode_languageserver_protocol_1$3 = require$$0$5;
const features_1$4 = require$$1$4;
const Is = require$$4$1;
class SemanticTokensFeature extends features_1$4.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1$3.SemanticTokensRegistrationType.type);
  }
  fillClientCapabilities(capabilities) {
    const capability = (0, features_1$4.ensure)((0, features_1$4.ensure)(capabilities, "textDocument"), "semanticTokens");
    capability.dynamicRegistration = true;
    capability.tokenTypes = [
      vscode_languageserver_protocol_1$3.SemanticTokenTypes.namespace,
      vscode_languageserver_protocol_1$3.SemanticTokenTypes.type,
      vscode_languageserver_protocol_1$3.SemanticTokenTypes.class,
      vscode_languageserver_protocol_1$3.SemanticTokenTypes.enum,
      vscode_languageserver_protocol_1$3.SemanticTokenTypes.interface,
      vscode_languageserver_protocol_1$3.SemanticTokenTypes.struct,
      vscode_languageserver_protocol_1$3.SemanticTokenTypes.typeParameter,
      vscode_languageserver_protocol_1$3.SemanticTokenTypes.parameter,
      vscode_languageserver_protocol_1$3.SemanticTokenTypes.variable,
      vscode_languageserver_protocol_1$3.SemanticTokenTypes.property,
      vscode_languageserver_protocol_1$3.SemanticTokenTypes.enumMember,
      vscode_languageserver_protocol_1$3.SemanticTokenTypes.event,
      vscode_languageserver_protocol_1$3.SemanticTokenTypes.function,
      vscode_languageserver_protocol_1$3.SemanticTokenTypes.method,
      vscode_languageserver_protocol_1$3.SemanticTokenTypes.macro,
      vscode_languageserver_protocol_1$3.SemanticTokenTypes.keyword,
      vscode_languageserver_protocol_1$3.SemanticTokenTypes.modifier,
      vscode_languageserver_protocol_1$3.SemanticTokenTypes.comment,
      vscode_languageserver_protocol_1$3.SemanticTokenTypes.string,
      vscode_languageserver_protocol_1$3.SemanticTokenTypes.number,
      vscode_languageserver_protocol_1$3.SemanticTokenTypes.regexp,
      vscode_languageserver_protocol_1$3.SemanticTokenTypes.operator,
      vscode_languageserver_protocol_1$3.SemanticTokenTypes.decorator
    ];
    capability.tokenModifiers = [
      vscode_languageserver_protocol_1$3.SemanticTokenModifiers.declaration,
      vscode_languageserver_protocol_1$3.SemanticTokenModifiers.definition,
      vscode_languageserver_protocol_1$3.SemanticTokenModifiers.readonly,
      vscode_languageserver_protocol_1$3.SemanticTokenModifiers.static,
      vscode_languageserver_protocol_1$3.SemanticTokenModifiers.deprecated,
      vscode_languageserver_protocol_1$3.SemanticTokenModifiers.abstract,
      vscode_languageserver_protocol_1$3.SemanticTokenModifiers.async,
      vscode_languageserver_protocol_1$3.SemanticTokenModifiers.modification,
      vscode_languageserver_protocol_1$3.SemanticTokenModifiers.documentation,
      vscode_languageserver_protocol_1$3.SemanticTokenModifiers.defaultLibrary
    ];
    capability.formats = [vscode_languageserver_protocol_1$3.TokenFormat.Relative];
    capability.requests = {
      range: true,
      full: {
        delta: true
      }
    };
    capability.multilineTokenSupport = false;
    capability.overlappingTokenSupport = false;
    capability.serverCancelSupport = true;
    capability.augmentsSyntaxTokens = true;
    (0, features_1$4.ensure)((0, features_1$4.ensure)(capabilities, "workspace"), "semanticTokens").refreshSupport = true;
  }
  initialize(capabilities, documentSelector) {
    const client2 = this._client;
    client2.onRequest(vscode_languageserver_protocol_1$3.SemanticTokensRefreshRequest.type, async () => {
      for (const provider of this.getAllProviders()) {
        provider.onDidChangeSemanticTokensEmitter.fire();
      }
    });
    const [id, options] = this.getRegistration(documentSelector, capabilities.semanticTokensProvider);
    if (!id || !options) {
      return;
    }
    this.register({ id, registerOptions: options });
  }
  registerLanguageProvider(options) {
    const selector = options.documentSelector;
    const fullProvider = Is.boolean(options.full) ? options.full : options.full !== void 0;
    const hasEditProvider = options.full !== void 0 && typeof options.full !== "boolean" && options.full.delta === true;
    const eventEmitter = new vscode.EventEmitter();
    const documentProvider = fullProvider ? {
      onDidChangeSemanticTokens: eventEmitter.event,
      provideDocumentSemanticTokens: (document, token) => {
        const client3 = this._client;
        const middleware = client3.middleware;
        const provideDocumentSemanticTokens = (document2, token2) => {
          const params = {
            textDocument: client3.code2ProtocolConverter.asTextDocumentIdentifier(document2)
          };
          return client3.sendRequest(vscode_languageserver_protocol_1$3.SemanticTokensRequest.type, params, token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return client3.protocol2CodeConverter.asSemanticTokens(result, token2);
          }, (error2) => {
            return client3.handleFailedRequest(vscode_languageserver_protocol_1$3.SemanticTokensRequest.type, token2, error2, null);
          });
        };
        return middleware.provideDocumentSemanticTokens ? middleware.provideDocumentSemanticTokens(document, token, provideDocumentSemanticTokens) : provideDocumentSemanticTokens(document, token);
      },
      provideDocumentSemanticTokensEdits: hasEditProvider ? (document, previousResultId, token) => {
        const client3 = this._client;
        const middleware = client3.middleware;
        const provideDocumentSemanticTokensEdits = (document2, previousResultId2, token2) => {
          const params = {
            textDocument: client3.code2ProtocolConverter.asTextDocumentIdentifier(document2),
            previousResultId: previousResultId2
          };
          return client3.sendRequest(vscode_languageserver_protocol_1$3.SemanticTokensDeltaRequest.type, params, token2).then(async (result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            if (vscode_languageserver_protocol_1$3.SemanticTokens.is(result)) {
              return await client3.protocol2CodeConverter.asSemanticTokens(result, token2);
            } else {
              return await client3.protocol2CodeConverter.asSemanticTokensEdits(result, token2);
            }
          }, (error2) => {
            return client3.handleFailedRequest(vscode_languageserver_protocol_1$3.SemanticTokensDeltaRequest.type, token2, error2, null);
          });
        };
        return middleware.provideDocumentSemanticTokensEdits ? middleware.provideDocumentSemanticTokensEdits(document, previousResultId, token, provideDocumentSemanticTokensEdits) : provideDocumentSemanticTokensEdits(document, previousResultId, token);
      } : void 0
    } : void 0;
    const hasRangeProvider = options.range === true;
    const rangeProvider = hasRangeProvider ? {
      provideDocumentRangeSemanticTokens: (document, range2, token) => {
        const client3 = this._client;
        const middleware = client3.middleware;
        const provideDocumentRangeSemanticTokens = (document2, range3, token2) => {
          const params = {
            textDocument: client3.code2ProtocolConverter.asTextDocumentIdentifier(document2),
            range: client3.code2ProtocolConverter.asRange(range3)
          };
          return client3.sendRequest(vscode_languageserver_protocol_1$3.SemanticTokensRangeRequest.type, params, token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return client3.protocol2CodeConverter.asSemanticTokens(result, token2);
          }, (error2) => {
            return client3.handleFailedRequest(vscode_languageserver_protocol_1$3.SemanticTokensRangeRequest.type, token2, error2, null);
          });
        };
        return middleware.provideDocumentRangeSemanticTokens ? middleware.provideDocumentRangeSemanticTokens(document, range2, token, provideDocumentRangeSemanticTokens) : provideDocumentRangeSemanticTokens(document, range2, token);
      }
    } : void 0;
    const disposables = [];
    const client2 = this._client;
    const legend = client2.protocol2CodeConverter.asSemanticTokensLegend(options.legend);
    const documentSelector = client2.protocol2CodeConverter.asDocumentSelector(selector);
    if (documentProvider !== void 0) {
      disposables.push(vscode.languages.registerDocumentSemanticTokensProvider(documentSelector, documentProvider, legend));
    }
    if (rangeProvider !== void 0) {
      disposables.push(vscode.languages.registerDocumentRangeSemanticTokensProvider(documentSelector, rangeProvider, legend));
    }
    return [new vscode.Disposable(() => disposables.forEach((item) => item.dispose())), { range: rangeProvider, full: documentProvider, onDidChangeSemanticTokensEmitter: eventEmitter }];
  }
}
SemanticTokensFeature_1 = semanticTokens$1.SemanticTokensFeature = SemanticTokensFeature;
const semanticTokens = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get SemanticTokensFeature() {
    return SemanticTokensFeature_1;
  },
  default: semanticTokens$1
}, [semanticTokens$1]);
const require$$37 = /* @__PURE__ */ getAugmentedNamespace(semanticTokens);
var fileOperations$1 = {};
Object.defineProperty(fileOperations$1, "__esModule", { value: true });
var WillDeleteFilesFeature_1 = fileOperations$1.WillDeleteFilesFeature = WillRenameFilesFeature_1 = fileOperations$1.WillRenameFilesFeature = WillCreateFilesFeature_1 = fileOperations$1.WillCreateFilesFeature = DidDeleteFilesFeature_1 = fileOperations$1.DidDeleteFilesFeature = DidRenameFilesFeature_1 = fileOperations$1.DidRenameFilesFeature = DidCreateFilesFeature_1 = fileOperations$1.DidCreateFilesFeature = void 0;
const code$1 = require$$0$9;
const minimatch = require$$1$2;
const proto$2 = require$$0$5;
const UUID = require$$6$1;
function ensure(target, key) {
  if (target[key] === void 0) {
    target[key] = {};
  }
  return target[key];
}
function access(target, key) {
  return target[key];
}
function assign(target, key, value) {
  target[key] = value;
}
class FileOperationFeature {
  constructor(client2, event, registrationType, clientCapability, serverCapability) {
    this._client = client2;
    this._event = event;
    this._registrationType = registrationType;
    this._clientCapability = clientCapability;
    this._serverCapability = serverCapability;
    this._filters = /* @__PURE__ */ new Map();
  }
  getState() {
    return { kind: "workspace", id: this._registrationType.method, registrations: this._filters.size > 0 };
  }
  filterSize() {
    return this._filters.size;
  }
  get registrationType() {
    return this._registrationType;
  }
  fillClientCapabilities(capabilities) {
    const value = ensure(ensure(capabilities, "workspace"), "fileOperations");
    assign(value, "dynamicRegistration", true);
    assign(value, this._clientCapability, true);
  }
  initialize(capabilities) {
    var _a;
    const options = (_a = capabilities.workspace) == null ? void 0 : _a.fileOperations;
    const capability = options !== void 0 ? access(options, this._serverCapability) : void 0;
    if ((capability == null ? void 0 : capability.filters) !== void 0) {
      try {
        this.register({
          id: UUID.generateUuid(),
          registerOptions: { filters: capability.filters }
        });
      } catch (e) {
        this._client.warn(`Ignoring invalid glob pattern for ${this._serverCapability} registration: ${e}`);
      }
    }
  }
  register(data) {
    if (!this._listener) {
      this._listener = this._event(this.send, this);
    }
    const minimatchFilter = data.registerOptions.filters.map((filter) => {
      const matcher = new minimatch.Minimatch(filter.pattern.glob, FileOperationFeature.asMinimatchOptions(filter.pattern.options));
      if (!matcher.makeRe()) {
        throw new Error(`Invalid pattern ${filter.pattern.glob}!`);
      }
      return { scheme: filter.scheme, matcher, kind: filter.pattern.matches };
    });
    this._filters.set(data.id, minimatchFilter);
  }
  unregister(id) {
    this._filters.delete(id);
    if (this._filters.size === 0 && this._listener) {
      this._listener.dispose();
      this._listener = void 0;
    }
  }
  dispose() {
    this._filters.clear();
    if (this._listener) {
      this._listener.dispose();
      this._listener = void 0;
    }
  }
  getFileType(uri) {
    return FileOperationFeature.getFileType(uri);
  }
  async filter(event, prop) {
    const fileMatches = await Promise.all(event.files.map(async (item) => {
      const uri = prop(item);
      const path2 = uri.fsPath.replace(/\\/g, "/");
      for (const filters of this._filters.values()) {
        for (const filter of filters) {
          if (filter.scheme !== void 0 && filter.scheme !== uri.scheme) {
            continue;
          }
          if (filter.matcher.match(path2)) {
            if (filter.kind === void 0) {
              return true;
            }
            const fileType = await this.getFileType(uri);
            if (fileType === void 0) {
              this._client.error(`Failed to determine file type for ${uri.toString()}.`);
              return true;
            }
            if (fileType === code$1.FileType.File && filter.kind === proto$2.FileOperationPatternKind.file || fileType === code$1.FileType.Directory && filter.kind === proto$2.FileOperationPatternKind.folder) {
              return true;
            }
          } else if (filter.kind === proto$2.FileOperationPatternKind.folder) {
            const fileType = await FileOperationFeature.getFileType(uri);
            if (fileType === code$1.FileType.Directory && filter.matcher.match(`${path2}/`)) {
              return true;
            }
          }
        }
      }
      return false;
    }));
    const files = event.files.filter((_, index) => fileMatches[index]);
    return { ...event, files };
  }
  static async getFileType(uri) {
    try {
      return (await code$1.workspace.fs.stat(uri)).type;
    } catch (e) {
      return void 0;
    }
  }
  static asMinimatchOptions(options) {
    if (options === void 0) {
      return void 0;
    }
    if (options.ignoreCase === true) {
      return { nocase: true };
    }
    return void 0;
  }
}
class NotificationFileOperationFeature extends FileOperationFeature {
  constructor(client2, event, notificationType, clientCapability, serverCapability, accessUri, createParams) {
    super(client2, event, notificationType, clientCapability, serverCapability);
    this._notificationType = notificationType;
    this._accessUri = accessUri;
    this._createParams = createParams;
  }
  async send(originalEvent) {
    const filteredEvent = await this.filter(originalEvent, this._accessUri);
    if (filteredEvent.files.length) {
      const next = async (event) => {
        return this._client.sendNotification(this._notificationType, this._createParams(event));
      };
      return this.doSend(filteredEvent, next);
    }
  }
}
class CachingNotificationFileOperationFeature extends NotificationFileOperationFeature {
  constructor() {
    super(...arguments);
    this._fsPathFileTypes = /* @__PURE__ */ new Map();
  }
  async getFileType(uri) {
    const fsPath = uri.fsPath;
    if (this._fsPathFileTypes.has(fsPath)) {
      return this._fsPathFileTypes.get(fsPath);
    }
    const type = await FileOperationFeature.getFileType(uri);
    if (type) {
      this._fsPathFileTypes.set(fsPath, type);
    }
    return type;
  }
  async cacheFileTypes(event, prop) {
    await this.filter(event, prop);
  }
  clearFileTypeCache() {
    this._fsPathFileTypes.clear();
  }
  unregister(id) {
    super.unregister(id);
    if (this.filterSize() === 0 && this._willListener) {
      this._willListener.dispose();
      this._willListener = void 0;
    }
  }
  dispose() {
    super.dispose();
    if (this._willListener) {
      this._willListener.dispose();
      this._willListener = void 0;
    }
  }
}
class DidCreateFilesFeature extends NotificationFileOperationFeature {
  constructor(client2) {
    super(client2, code$1.workspace.onDidCreateFiles, proto$2.DidCreateFilesNotification.type, "didCreate", "didCreate", (i) => i, client2.code2ProtocolConverter.asDidCreateFilesParams);
  }
  doSend(event, next) {
    const middleware = this._client.middleware.workspace;
    return (middleware == null ? void 0 : middleware.didCreateFiles) ? middleware.didCreateFiles(event, next) : next(event);
  }
}
var DidCreateFilesFeature_1 = fileOperations$1.DidCreateFilesFeature = DidCreateFilesFeature;
class DidRenameFilesFeature extends CachingNotificationFileOperationFeature {
  constructor(client2) {
    super(client2, code$1.workspace.onDidRenameFiles, proto$2.DidRenameFilesNotification.type, "didRename", "didRename", (i) => i.oldUri, client2.code2ProtocolConverter.asDidRenameFilesParams);
  }
  register(data) {
    if (!this._willListener) {
      this._willListener = code$1.workspace.onWillRenameFiles(this.willRename, this);
    }
    super.register(data);
  }
  willRename(e) {
    e.waitUntil(this.cacheFileTypes(e, (i) => i.oldUri));
  }
  doSend(event, next) {
    this.clearFileTypeCache();
    const middleware = this._client.middleware.workspace;
    return (middleware == null ? void 0 : middleware.didRenameFiles) ? middleware.didRenameFiles(event, next) : next(event);
  }
}
var DidRenameFilesFeature_1 = fileOperations$1.DidRenameFilesFeature = DidRenameFilesFeature;
class DidDeleteFilesFeature extends CachingNotificationFileOperationFeature {
  constructor(client2) {
    super(client2, code$1.workspace.onDidDeleteFiles, proto$2.DidDeleteFilesNotification.type, "didDelete", "didDelete", (i) => i, client2.code2ProtocolConverter.asDidDeleteFilesParams);
  }
  register(data) {
    if (!this._willListener) {
      this._willListener = code$1.workspace.onWillDeleteFiles(this.willDelete, this);
    }
    super.register(data);
  }
  willDelete(e) {
    e.waitUntil(this.cacheFileTypes(e, (i) => i));
  }
  doSend(event, next) {
    this.clearFileTypeCache();
    const middleware = this._client.middleware.workspace;
    return (middleware == null ? void 0 : middleware.didDeleteFiles) ? middleware.didDeleteFiles(event, next) : next(event);
  }
}
var DidDeleteFilesFeature_1 = fileOperations$1.DidDeleteFilesFeature = DidDeleteFilesFeature;
class RequestFileOperationFeature extends FileOperationFeature {
  constructor(client2, event, requestType, clientCapability, serverCapability, accessUri, createParams) {
    super(client2, event, requestType, clientCapability, serverCapability);
    this._requestType = requestType;
    this._accessUri = accessUri;
    this._createParams = createParams;
  }
  async send(originalEvent) {
    const waitUntil = this.waitUntil(originalEvent);
    originalEvent.waitUntil(waitUntil);
  }
  async waitUntil(originalEvent) {
    const filteredEvent = await this.filter(originalEvent, this._accessUri);
    if (filteredEvent.files.length) {
      const next = (event) => {
        return this._client.sendRequest(this._requestType, this._createParams(event), event.token).then(this._client.protocol2CodeConverter.asWorkspaceEdit);
      };
      return this.doSend(filteredEvent, next);
    } else {
      return void 0;
    }
  }
}
class WillCreateFilesFeature extends RequestFileOperationFeature {
  constructor(client2) {
    super(client2, code$1.workspace.onWillCreateFiles, proto$2.WillCreateFilesRequest.type, "willCreate", "willCreate", (i) => i, client2.code2ProtocolConverter.asWillCreateFilesParams);
  }
  doSend(event, next) {
    const middleware = this._client.middleware.workspace;
    return (middleware == null ? void 0 : middleware.willCreateFiles) ? middleware.willCreateFiles(event, next) : next(event);
  }
}
var WillCreateFilesFeature_1 = fileOperations$1.WillCreateFilesFeature = WillCreateFilesFeature;
class WillRenameFilesFeature extends RequestFileOperationFeature {
  constructor(client2) {
    super(client2, code$1.workspace.onWillRenameFiles, proto$2.WillRenameFilesRequest.type, "willRename", "willRename", (i) => i.oldUri, client2.code2ProtocolConverter.asWillRenameFilesParams);
  }
  doSend(event, next) {
    const middleware = this._client.middleware.workspace;
    return (middleware == null ? void 0 : middleware.willRenameFiles) ? middleware.willRenameFiles(event, next) : next(event);
  }
}
var WillRenameFilesFeature_1 = fileOperations$1.WillRenameFilesFeature = WillRenameFilesFeature;
class WillDeleteFilesFeature extends RequestFileOperationFeature {
  constructor(client2) {
    super(client2, code$1.workspace.onWillDeleteFiles, proto$2.WillDeleteFilesRequest.type, "willDelete", "willDelete", (i) => i, client2.code2ProtocolConverter.asWillDeleteFilesParams);
  }
  doSend(event, next) {
    const middleware = this._client.middleware.workspace;
    return (middleware == null ? void 0 : middleware.willDeleteFiles) ? middleware.willDeleteFiles(event, next) : next(event);
  }
}
WillDeleteFilesFeature_1 = fileOperations$1.WillDeleteFilesFeature = WillDeleteFilesFeature;
const fileOperations = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get DidCreateFilesFeature() {
    return DidCreateFilesFeature_1;
  },
  get DidDeleteFilesFeature() {
    return DidDeleteFilesFeature_1;
  },
  get DidRenameFilesFeature() {
    return DidRenameFilesFeature_1;
  },
  get WillCreateFilesFeature() {
    return WillCreateFilesFeature_1;
  },
  get WillDeleteFilesFeature() {
    return WillDeleteFilesFeature_1;
  },
  get WillRenameFilesFeature() {
    return WillRenameFilesFeature_1;
  },
  default: fileOperations$1
}, [fileOperations$1]);
const require$$38 = /* @__PURE__ */ getAugmentedNamespace(fileOperations);
var linkedEditingRange$1 = {};
Object.defineProperty(linkedEditingRange$1, "__esModule", { value: true });
var LinkedEditingFeature_1 = linkedEditingRange$1.LinkedEditingFeature = void 0;
const code = require$$0$9;
const proto$1 = require$$0$5;
const features_1$3 = require$$1$4;
class LinkedEditingFeature extends features_1$3.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, proto$1.LinkedEditingRangeRequest.type);
  }
  fillClientCapabilities(capabilities) {
    const linkedEditingSupport = (0, features_1$3.ensure)((0, features_1$3.ensure)(capabilities, "textDocument"), "linkedEditingRange");
    linkedEditingSupport.dynamicRegistration = true;
  }
  initialize(capabilities, documentSelector) {
    let [id, options] = this.getRegistration(documentSelector, capabilities.linkedEditingRangeProvider);
    if (!id || !options) {
      return;
    }
    this.register({ id, registerOptions: options });
  }
  registerLanguageProvider(options) {
    const selector = options.documentSelector;
    const provider = {
      provideLinkedEditingRanges: (document, position, token) => {
        const client2 = this._client;
        const provideLinkedEditing = (document2, position2, token2) => {
          return client2.sendRequest(proto$1.LinkedEditingRangeRequest.type, client2.code2ProtocolConverter.asTextDocumentPositionParams(document2, position2), token2).then((result) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return client2.protocol2CodeConverter.asLinkedEditingRanges(result, token2);
          }, (error2) => {
            return client2.handleFailedRequest(proto$1.LinkedEditingRangeRequest.type, token2, error2, null);
          });
        };
        const middleware = client2.middleware;
        return middleware.provideLinkedEditingRange ? middleware.provideLinkedEditingRange(document, position, token, provideLinkedEditing) : provideLinkedEditing(document, position, token);
      }
    };
    return [this.registerProvider(selector, provider), provider];
  }
  registerProvider(selector, provider) {
    return code.languages.registerLinkedEditingRangeProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider);
  }
}
LinkedEditingFeature_1 = linkedEditingRange$1.LinkedEditingFeature = LinkedEditingFeature;
const linkedEditingRange = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get LinkedEditingFeature() {
    return LinkedEditingFeature_1;
  },
  default: linkedEditingRange$1
}, [linkedEditingRange$1]);
const require$$39 = /* @__PURE__ */ getAugmentedNamespace(linkedEditingRange);
var typeHierarchy$1 = {};
Object.defineProperty(typeHierarchy$1, "__esModule", { value: true });
var TypeHierarchyFeature_1 = typeHierarchy$1.TypeHierarchyFeature = void 0;
const vscode_1$2 = require$$0$9;
const vscode_languageserver_protocol_1$2 = require$$0$5;
const features_1$2 = require$$1$4;
class TypeHierarchyProvider {
  constructor(client2) {
    this.client = client2;
    this.middleware = client2.middleware;
  }
  prepareTypeHierarchy(document, position, token) {
    const client2 = this.client;
    const middleware = this.middleware;
    const prepareTypeHierarchy = (document2, position2, token2) => {
      const params = client2.code2ProtocolConverter.asTextDocumentPositionParams(document2, position2);
      return client2.sendRequest(vscode_languageserver_protocol_1$2.TypeHierarchyPrepareRequest.type, params, token2).then((result) => {
        if (token2.isCancellationRequested) {
          return null;
        }
        return client2.protocol2CodeConverter.asTypeHierarchyItems(result, token2);
      }, (error2) => {
        return client2.handleFailedRequest(vscode_languageserver_protocol_1$2.TypeHierarchyPrepareRequest.type, token2, error2, null);
      });
    };
    return middleware.prepareTypeHierarchy ? middleware.prepareTypeHierarchy(document, position, token, prepareTypeHierarchy) : prepareTypeHierarchy(document, position, token);
  }
  provideTypeHierarchySupertypes(item, token) {
    const client2 = this.client;
    const middleware = this.middleware;
    const provideTypeHierarchySupertypes = (item2, token2) => {
      const params = {
        item: client2.code2ProtocolConverter.asTypeHierarchyItem(item2)
      };
      return client2.sendRequest(vscode_languageserver_protocol_1$2.TypeHierarchySupertypesRequest.type, params, token2).then((result) => {
        if (token2.isCancellationRequested) {
          return null;
        }
        return client2.protocol2CodeConverter.asTypeHierarchyItems(result, token2);
      }, (error2) => {
        return client2.handleFailedRequest(vscode_languageserver_protocol_1$2.TypeHierarchySupertypesRequest.type, token2, error2, null);
      });
    };
    return middleware.provideTypeHierarchySupertypes ? middleware.provideTypeHierarchySupertypes(item, token, provideTypeHierarchySupertypes) : provideTypeHierarchySupertypes(item, token);
  }
  provideTypeHierarchySubtypes(item, token) {
    const client2 = this.client;
    const middleware = this.middleware;
    const provideTypeHierarchySubtypes = (item2, token2) => {
      const params = {
        item: client2.code2ProtocolConverter.asTypeHierarchyItem(item2)
      };
      return client2.sendRequest(vscode_languageserver_protocol_1$2.TypeHierarchySubtypesRequest.type, params, token2).then((result) => {
        if (token2.isCancellationRequested) {
          return null;
        }
        return client2.protocol2CodeConverter.asTypeHierarchyItems(result, token2);
      }, (error2) => {
        return client2.handleFailedRequest(vscode_languageserver_protocol_1$2.TypeHierarchySubtypesRequest.type, token2, error2, null);
      });
    };
    return middleware.provideTypeHierarchySubtypes ? middleware.provideTypeHierarchySubtypes(item, token, provideTypeHierarchySubtypes) : provideTypeHierarchySubtypes(item, token);
  }
}
class TypeHierarchyFeature extends features_1$2.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1$2.TypeHierarchyPrepareRequest.type);
  }
  fillClientCapabilities(capabilities) {
    const capability = (0, features_1$2.ensure)((0, features_1$2.ensure)(capabilities, "textDocument"), "typeHierarchy");
    capability.dynamicRegistration = true;
  }
  initialize(capabilities, documentSelector) {
    const [id, options] = this.getRegistration(documentSelector, capabilities.typeHierarchyProvider);
    if (!id || !options) {
      return;
    }
    this.register({ id, registerOptions: options });
  }
  registerLanguageProvider(options) {
    const client2 = this._client;
    const provider = new TypeHierarchyProvider(client2);
    return [vscode_1$2.languages.registerTypeHierarchyProvider(client2.protocol2CodeConverter.asDocumentSelector(options.documentSelector), provider), provider];
  }
}
TypeHierarchyFeature_1 = typeHierarchy$1.TypeHierarchyFeature = TypeHierarchyFeature;
const typeHierarchy = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get TypeHierarchyFeature() {
    return TypeHierarchyFeature_1;
  },
  default: typeHierarchy$1
}, [typeHierarchy$1]);
const require$$40 = /* @__PURE__ */ getAugmentedNamespace(typeHierarchy);
var inlineValue$1 = {};
Object.defineProperty(inlineValue$1, "__esModule", { value: true });
var InlineValueFeature_1 = inlineValue$1.InlineValueFeature = void 0;
const vscode_1$1 = require$$0$9;
const vscode_languageserver_protocol_1$1 = require$$0$5;
const features_1$1 = require$$1$4;
class InlineValueFeature extends features_1$1.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1$1.InlineValueRequest.type);
  }
  fillClientCapabilities(capabilities) {
    (0, features_1$1.ensure)((0, features_1$1.ensure)(capabilities, "textDocument"), "inlineValue").dynamicRegistration = true;
    (0, features_1$1.ensure)((0, features_1$1.ensure)(capabilities, "workspace"), "inlineValue").refreshSupport = true;
  }
  initialize(capabilities, documentSelector) {
    this._client.onRequest(vscode_languageserver_protocol_1$1.InlineValueRefreshRequest.type, async () => {
      for (const provider of this.getAllProviders()) {
        provider.onDidChangeInlineValues.fire();
      }
    });
    const [id, options] = this.getRegistration(documentSelector, capabilities.inlineValueProvider);
    if (!id || !options) {
      return;
    }
    this.register({ id, registerOptions: options });
  }
  registerLanguageProvider(options) {
    const selector = options.documentSelector;
    const eventEmitter = new vscode_1$1.EventEmitter();
    const provider = {
      onDidChangeInlineValues: eventEmitter.event,
      provideInlineValues: (document, viewPort, context, token) => {
        const client2 = this._client;
        const provideInlineValues = (document2, viewPort2, context2, token2) => {
          const requestParams = {
            textDocument: client2.code2ProtocolConverter.asTextDocumentIdentifier(document2),
            range: client2.code2ProtocolConverter.asRange(viewPort2),
            context: client2.code2ProtocolConverter.asInlineValueContext(context2)
          };
          return client2.sendRequest(vscode_languageserver_protocol_1$1.InlineValueRequest.type, requestParams, token2).then((values) => {
            if (token2.isCancellationRequested) {
              return null;
            }
            return client2.protocol2CodeConverter.asInlineValues(values, token2);
          }, (error2) => {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1$1.InlineValueRequest.type, token2, error2, null);
          });
        };
        const middleware = client2.middleware;
        return middleware.provideInlineValues ? middleware.provideInlineValues(document, viewPort, context, token, provideInlineValues) : provideInlineValues(document, viewPort, context, token);
      }
    };
    return [this.registerProvider(selector, provider), { provider, onDidChangeInlineValues: eventEmitter }];
  }
  registerProvider(selector, provider) {
    return vscode_1$1.languages.registerInlineValuesProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider);
  }
}
InlineValueFeature_1 = inlineValue$1.InlineValueFeature = InlineValueFeature;
const inlineValue = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get InlineValueFeature() {
    return InlineValueFeature_1;
  },
  default: inlineValue$1
}, [inlineValue$1]);
const require$$41 = /* @__PURE__ */ getAugmentedNamespace(inlineValue);
var inlayHint$1 = {};
Object.defineProperty(inlayHint$1, "__esModule", { value: true });
var InlayHintsFeature_1 = inlayHint$1.InlayHintsFeature = void 0;
const vscode_1 = require$$0$9;
const vscode_languageserver_protocol_1 = require$$0$5;
const features_1 = require$$1$4;
class InlayHintsFeature extends features_1.TextDocumentLanguageFeature {
  constructor(client2) {
    super(client2, vscode_languageserver_protocol_1.InlayHintRequest.type);
  }
  fillClientCapabilities(capabilities) {
    const inlayHint2 = (0, features_1.ensure)((0, features_1.ensure)(capabilities, "textDocument"), "inlayHint");
    inlayHint2.dynamicRegistration = true;
    inlayHint2.resolveSupport = {
      properties: ["tooltip", "textEdits", "label.tooltip", "label.location", "label.command"]
    };
    (0, features_1.ensure)((0, features_1.ensure)(capabilities, "workspace"), "inlayHint").refreshSupport = true;
  }
  initialize(capabilities, documentSelector) {
    this._client.onRequest(vscode_languageserver_protocol_1.InlayHintRefreshRequest.type, async () => {
      for (const provider of this.getAllProviders()) {
        provider.onDidChangeInlayHints.fire();
      }
    });
    const [id, options] = this.getRegistration(documentSelector, capabilities.inlayHintProvider);
    if (!id || !options) {
      return;
    }
    this.register({ id, registerOptions: options });
  }
  registerLanguageProvider(options) {
    const selector = options.documentSelector;
    const eventEmitter = new vscode_1.EventEmitter();
    const provider = {
      onDidChangeInlayHints: eventEmitter.event,
      provideInlayHints: (document, viewPort, token) => {
        const client2 = this._client;
        const provideInlayHints = async (document2, viewPort2, token2) => {
          const requestParams = {
            textDocument: client2.code2ProtocolConverter.asTextDocumentIdentifier(document2),
            range: client2.code2ProtocolConverter.asRange(viewPort2)
          };
          try {
            const values = await client2.sendRequest(vscode_languageserver_protocol_1.InlayHintRequest.type, requestParams, token2);
            if (token2.isCancellationRequested) {
              return null;
            }
            return client2.protocol2CodeConverter.asInlayHints(values, token2);
          } catch (error2) {
            return client2.handleFailedRequest(vscode_languageserver_protocol_1.InlayHintRequest.type, token2, error2, null);
          }
        };
        const middleware = client2.middleware;
        return middleware.provideInlayHints ? middleware.provideInlayHints(document, viewPort, token, provideInlayHints) : provideInlayHints(document, viewPort, token);
      }
    };
    provider.resolveInlayHint = options.resolveProvider === true ? (hint, token) => {
      const client2 = this._client;
      const resolveInlayHint = async (item, token2) => {
        try {
          const value = await client2.sendRequest(vscode_languageserver_protocol_1.InlayHintResolveRequest.type, client2.code2ProtocolConverter.asInlayHint(item), token2);
          if (token2.isCancellationRequested) {
            return null;
          }
          const result = client2.protocol2CodeConverter.asInlayHint(value, token2);
          return token2.isCancellationRequested ? null : result;
        } catch (error2) {
          return client2.handleFailedRequest(vscode_languageserver_protocol_1.InlayHintResolveRequest.type, token2, error2, null);
        }
      };
      const middleware = client2.middleware;
      return middleware.resolveInlayHint ? middleware.resolveInlayHint(hint, token, resolveInlayHint) : resolveInlayHint(hint, token);
    } : void 0;
    return [this.registerProvider(selector, provider), { provider, onDidChangeInlayHints: eventEmitter }];
  }
  registerProvider(selector, provider) {
    return vscode_1.languages.registerInlayHintsProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider);
  }
}
InlayHintsFeature_1 = inlayHint$1.InlayHintsFeature = InlayHintsFeature;
const inlayHint = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get InlayHintsFeature() {
    return InlayHintsFeature_1;
  },
  default: inlayHint$1
}, [inlayHint$1]);
const require$$42 = /* @__PURE__ */ getAugmentedNamespace(inlayHint);
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.ProposedFeatures = exports2.BaseLanguageClient = exports2.MessageTransports = exports2.SuspendMode = exports2.State = exports2.CloseAction = exports2.ErrorAction = exports2.RevealOutputChannelOn = void 0;
  const vscode_12 = require$$0$9;
  const vscode_languageserver_protocol_12 = require$$0$5;
  const c2p = require$$2$1;
  const p2c = require$$3$1;
  const Is2 = require$$4$1;
  const async_1 = require$$5$1;
  const UUID2 = require$$6$1;
  const progressPart_12 = require$$7;
  const features_12 = require$$1$4;
  const diagnostic_1 = require$$2$2;
  const notebook_1 = require$$10;
  const configuration_1 = require$$11;
  const textSynchronization_1 = require$$12;
  const completion_1 = require$$13;
  const hover_1 = require$$14;
  const definition_1 = require$$15;
  const signatureHelp_1 = require$$16;
  const documentHighlight_1 = require$$17;
  const documentSymbol_12 = require$$18;
  const workspaceSymbol_1 = require$$19;
  const reference_1 = require$$20;
  const codeAction_1 = require$$21;
  const codeLens_1 = require$$22;
  const formatting_1 = require$$23;
  const rename_1 = require$$24;
  const documentLink_1 = require$$25;
  const executeCommand_1 = require$$26;
  const fileSystemWatcher_1 = require$$27;
  const colorProvider_1 = require$$28;
  const implementation_1 = require$$29;
  const typeDefinition_1 = require$$30;
  const workspaceFolder_1 = require$$31;
  const foldingRange_1 = require$$32;
  const declaration_1 = require$$33;
  const selectionRange_1 = require$$34;
  const progress_1 = require$$35;
  const callHierarchy_1 = require$$36;
  const semanticTokens_1 = require$$37;
  const fileOperations_1 = require$$38;
  const linkedEditingRange_1 = require$$39;
  const typeHierarchy_1 = require$$40;
  const inlineValue_1 = require$$41;
  const inlayHint_1 = require$$42;
  var RevealOutputChannelOn;
  (function(RevealOutputChannelOn2) {
    RevealOutputChannelOn2[RevealOutputChannelOn2["Info"] = 1] = "Info";
    RevealOutputChannelOn2[RevealOutputChannelOn2["Warn"] = 2] = "Warn";
    RevealOutputChannelOn2[RevealOutputChannelOn2["Error"] = 3] = "Error";
    RevealOutputChannelOn2[RevealOutputChannelOn2["Never"] = 4] = "Never";
  })(RevealOutputChannelOn = exports2.RevealOutputChannelOn || (exports2.RevealOutputChannelOn = {}));
  var ErrorAction;
  (function(ErrorAction2) {
    ErrorAction2[ErrorAction2["Continue"] = 1] = "Continue";
    ErrorAction2[ErrorAction2["Shutdown"] = 2] = "Shutdown";
  })(ErrorAction = exports2.ErrorAction || (exports2.ErrorAction = {}));
  var CloseAction;
  (function(CloseAction2) {
    CloseAction2[CloseAction2["DoNotRestart"] = 1] = "DoNotRestart";
    CloseAction2[CloseAction2["Restart"] = 2] = "Restart";
  })(CloseAction = exports2.CloseAction || (exports2.CloseAction = {}));
  var State;
  (function(State2) {
    State2[State2["Stopped"] = 1] = "Stopped";
    State2[State2["Starting"] = 3] = "Starting";
    State2[State2["Running"] = 2] = "Running";
  })(State = exports2.State || (exports2.State = {}));
  (function(SuspendMode) {
    SuspendMode["off"] = "off";
    SuspendMode["on"] = "on";
  })(exports2.SuspendMode || (exports2.SuspendMode = {}));
  class DefaultErrorHandler {
    constructor(client2, maxRestartCount) {
      this.client = client2;
      this.maxRestartCount = maxRestartCount;
      this.restarts = [];
    }
    error(_error, _message, count) {
      if (count && count <= 3) {
        return { action: ErrorAction.Continue };
      }
      return { action: ErrorAction.Shutdown };
    }
    closed() {
      this.restarts.push(Date.now());
      if (this.restarts.length <= this.maxRestartCount) {
        return { action: CloseAction.Restart };
      } else {
        let diff = this.restarts[this.restarts.length - 1] - this.restarts[0];
        if (diff <= 3 * 60 * 1e3) {
          return { action: CloseAction.DoNotRestart, message: `The ${this.client.name} server crashed ${this.maxRestartCount + 1} times in the last 3 minutes. The server will not be restarted. See the output for more information.` };
        } else {
          this.restarts.shift();
          return { action: CloseAction.Restart };
        }
      }
    }
  }
  var ClientState;
  (function(ClientState2) {
    ClientState2["Initial"] = "initial";
    ClientState2["Starting"] = "starting";
    ClientState2["StartFailed"] = "startFailed";
    ClientState2["Running"] = "running";
    ClientState2["Stopping"] = "stopping";
    ClientState2["Stopped"] = "stopped";
  })(ClientState || (ClientState = {}));
  (function(MessageTransports) {
    function is2(value) {
      let candidate = value;
      return candidate && vscode_languageserver_protocol_12.MessageReader.is(value.reader) && vscode_languageserver_protocol_12.MessageWriter.is(value.writer);
    }
    MessageTransports.is = is2;
  })(exports2.MessageTransports || (exports2.MessageTransports = {}));
  class BaseLanguageClient {
    constructor(id, name, clientOptions) {
      var _a;
      this._traceFormat = vscode_languageserver_protocol_12.TraceFormat.Text;
      this._diagnosticQueue = /* @__PURE__ */ new Map();
      this._diagnosticQueueState = { state: "idle" };
      this._features = [];
      this._dynamicFeatures = /* @__PURE__ */ new Map();
      this.workspaceEditLock = new async_1.Semaphore(1);
      this._id = id;
      this._name = name;
      clientOptions = clientOptions || {};
      const markdown = { isTrusted: false, supportHtml: false };
      if (clientOptions.markdown !== void 0) {
        markdown.isTrusted = clientOptions.markdown.isTrusted === true;
        markdown.supportHtml = clientOptions.markdown.supportHtml === true;
      }
      this._clientOptions = {
        documentSelector: clientOptions.documentSelector ?? [],
        synchronize: clientOptions.synchronize ?? {},
        diagnosticCollectionName: clientOptions.diagnosticCollectionName,
        outputChannelName: clientOptions.outputChannelName ?? this._name,
        revealOutputChannelOn: clientOptions.revealOutputChannelOn ?? RevealOutputChannelOn.Error,
        stdioEncoding: clientOptions.stdioEncoding ?? "utf8",
        initializationOptions: clientOptions.initializationOptions,
        initializationFailedHandler: clientOptions.initializationFailedHandler,
        progressOnInitialization: !!clientOptions.progressOnInitialization,
        errorHandler: clientOptions.errorHandler ?? this.createDefaultErrorHandler((_a = clientOptions.connectionOptions) == null ? void 0 : _a.maxRestartCount),
        middleware: clientOptions.middleware ?? {},
        uriConverters: clientOptions.uriConverters,
        workspaceFolder: clientOptions.workspaceFolder,
        connectionOptions: clientOptions.connectionOptions,
        markdown,
        // suspend: {
        // 	mode: clientOptions.suspend?.mode ?? SuspendMode.off,
        // 	callback: clientOptions.suspend?.callback ?? (() => Promise.resolve(true)),
        // 	interval: clientOptions.suspend?.interval ? Math.max(clientOptions.suspend.interval, defaultInterval) : defaultInterval
        // },
        diagnosticPullOptions: clientOptions.diagnosticPullOptions ?? { onChange: true, onSave: false },
        notebookDocumentOptions: clientOptions.notebookDocumentOptions ?? {}
      };
      this._clientOptions.synchronize = this._clientOptions.synchronize || {};
      this._state = ClientState.Initial;
      this._ignoredRegistrations = /* @__PURE__ */ new Set();
      this._listeners = [];
      this._notificationHandlers = /* @__PURE__ */ new Map();
      this._pendingNotificationHandlers = /* @__PURE__ */ new Map();
      this._notificationDisposables = /* @__PURE__ */ new Map();
      this._requestHandlers = /* @__PURE__ */ new Map();
      this._pendingRequestHandlers = /* @__PURE__ */ new Map();
      this._requestDisposables = /* @__PURE__ */ new Map();
      this._progressHandlers = /* @__PURE__ */ new Map();
      this._pendingProgressHandlers = /* @__PURE__ */ new Map();
      this._progressDisposables = /* @__PURE__ */ new Map();
      this._connection = void 0;
      this._initializeResult = void 0;
      if (clientOptions.outputChannel) {
        this._outputChannel = clientOptions.outputChannel;
        this._disposeOutputChannel = false;
      } else {
        this._outputChannel = void 0;
        this._disposeOutputChannel = true;
      }
      this._traceOutputChannel = clientOptions.traceOutputChannel;
      this._diagnostics = void 0;
      this._pendingOpenNotifications = /* @__PURE__ */ new Set();
      this._pendingChangeSemaphore = new async_1.Semaphore(1);
      this._pendingChangeDelayer = new async_1.Delayer(250);
      this._fileEvents = [];
      this._fileEventDelayer = new async_1.Delayer(250);
      this._onStop = void 0;
      this._telemetryEmitter = new vscode_languageserver_protocol_12.Emitter();
      this._stateChangeEmitter = new vscode_languageserver_protocol_12.Emitter();
      this._trace = vscode_languageserver_protocol_12.Trace.Off;
      this._tracer = {
        log: (messageOrDataObject, data) => {
          if (Is2.string(messageOrDataObject)) {
            this.logTrace(messageOrDataObject, data);
          } else {
            this.logObjectTrace(messageOrDataObject);
          }
        }
      };
      this._c2p = c2p.createConverter(clientOptions.uriConverters ? clientOptions.uriConverters.code2Protocol : void 0);
      this._p2c = p2c.createConverter(clientOptions.uriConverters ? clientOptions.uriConverters.protocol2Code : void 0, this._clientOptions.markdown.isTrusted, this._clientOptions.markdown.supportHtml);
      this._syncedDocuments = /* @__PURE__ */ new Map();
      this.registerBuiltinFeatures();
    }
    get name() {
      return this._name;
    }
    get middleware() {
      return this._clientOptions.middleware ?? /* @__PURE__ */ Object.create(null);
    }
    get clientOptions() {
      return this._clientOptions;
    }
    get protocol2CodeConverter() {
      return this._p2c;
    }
    get code2ProtocolConverter() {
      return this._c2p;
    }
    get onTelemetry() {
      return this._telemetryEmitter.event;
    }
    get onDidChangeState() {
      return this._stateChangeEmitter.event;
    }
    get outputChannel() {
      if (!this._outputChannel) {
        this._outputChannel = vscode_12.window.createOutputChannel(this._clientOptions.outputChannelName ? this._clientOptions.outputChannelName : this._name);
      }
      return this._outputChannel;
    }
    get traceOutputChannel() {
      if (this._traceOutputChannel) {
        return this._traceOutputChannel;
      }
      return this.outputChannel;
    }
    get diagnostics() {
      return this._diagnostics;
    }
    get state() {
      return this.getPublicState();
    }
    get $state() {
      return this._state;
    }
    set $state(value) {
      let oldState = this.getPublicState();
      this._state = value;
      let newState = this.getPublicState();
      if (newState !== oldState) {
        this._stateChangeEmitter.fire({ oldState, newState });
      }
    }
    getPublicState() {
      switch (this.$state) {
        case ClientState.Starting:
          return State.Starting;
        case ClientState.Running:
          return State.Running;
        default:
          return State.Stopped;
      }
    }
    get initializeResult() {
      return this._initializeResult;
    }
    async sendRequest(type, ...params) {
      if (this.$state === ClientState.StartFailed || this.$state === ClientState.Stopping || this.$state === ClientState.Stopped) {
        return Promise.reject(new vscode_languageserver_protocol_12.ResponseError(vscode_languageserver_protocol_12.ErrorCodes.ConnectionInactive, `Client is not running`));
      }
      const connection2 = await this.$start();
      if (this._didChangeTextDocumentFeature.syncKind === vscode_languageserver_protocol_12.TextDocumentSyncKind.Full) {
        await this.sendPendingFullTextDocumentChanges(connection2);
      }
      return connection2.sendRequest(type, ...params);
    }
    onRequest(type, handler) {
      const method = typeof type === "string" ? type : type.method;
      this._requestHandlers.set(method, handler);
      const connection2 = this.activeConnection();
      let disposable2;
      if (connection2 !== void 0) {
        this._requestDisposables.set(method, connection2.onRequest(type, handler));
        disposable2 = {
          dispose: () => {
            const disposable3 = this._requestDisposables.get(method);
            if (disposable3 !== void 0) {
              disposable3.dispose();
              this._requestDisposables.delete(method);
            }
          }
        };
      } else {
        this._pendingRequestHandlers.set(method, handler);
        disposable2 = {
          dispose: () => {
            this._pendingRequestHandlers.delete(method);
            const disposable3 = this._requestDisposables.get(method);
            if (disposable3 !== void 0) {
              disposable3.dispose();
              this._requestDisposables.delete(method);
            }
          }
        };
      }
      return {
        dispose: () => {
          this._requestHandlers.delete(method);
          disposable2.dispose();
        }
      };
    }
    async sendNotification(type, params) {
      if (this.$state === ClientState.StartFailed || this.$state === ClientState.Stopping || this.$state === ClientState.Stopped) {
        return Promise.reject(new vscode_languageserver_protocol_12.ResponseError(vscode_languageserver_protocol_12.ErrorCodes.ConnectionInactive, `Client is not running`));
      }
      const needsPendingFullTextDocumentSync = this._didChangeTextDocumentFeature.syncKind === vscode_languageserver_protocol_12.TextDocumentSyncKind.Full;
      let openNotification;
      if (needsPendingFullTextDocumentSync && typeof type !== "string" && type.method === vscode_languageserver_protocol_12.DidOpenTextDocumentNotification.method) {
        openNotification = params == null ? void 0 : params.textDocument.uri;
        this._pendingOpenNotifications.add(openNotification);
      }
      const connection2 = await this.$start();
      if (needsPendingFullTextDocumentSync) {
        await this.sendPendingFullTextDocumentChanges(connection2);
      }
      if (openNotification !== void 0) {
        this._pendingOpenNotifications.delete(openNotification);
      }
      return connection2.sendNotification(type, params);
    }
    onNotification(type, handler) {
      const method = typeof type === "string" ? type : type.method;
      this._notificationHandlers.set(method, handler);
      const connection2 = this.activeConnection();
      let disposable2;
      if (connection2 !== void 0) {
        this._notificationDisposables.set(method, connection2.onNotification(type, handler));
        disposable2 = {
          dispose: () => {
            const disposable3 = this._notificationDisposables.get(method);
            if (disposable3 !== void 0) {
              disposable3.dispose();
              this._notificationDisposables.delete(method);
            }
          }
        };
      } else {
        this._pendingNotificationHandlers.set(method, handler);
        disposable2 = {
          dispose: () => {
            this._pendingNotificationHandlers.delete(method);
            const disposable3 = this._notificationDisposables.get(method);
            if (disposable3 !== void 0) {
              disposable3.dispose();
              this._notificationDisposables.delete(method);
            }
          }
        };
      }
      return {
        dispose: () => {
          this._notificationHandlers.delete(method);
          disposable2.dispose();
        }
      };
    }
    async sendProgress(type, token, value) {
      if (this.$state === ClientState.StartFailed || this.$state === ClientState.Stopping || this.$state === ClientState.Stopped) {
        return Promise.reject(new vscode_languageserver_protocol_12.ResponseError(vscode_languageserver_protocol_12.ErrorCodes.ConnectionInactive, `Client is not running`));
      }
      try {
        const connection2 = await this.$start();
        return connection2.sendProgress(type, token, value);
      } catch (error2) {
        this.error(`Sending progress for token ${token} failed.`, error2);
        throw error2;
      }
    }
    onProgress(type, token, handler) {
      var _a;
      this._progressHandlers.set(token, { type, handler });
      const connection2 = this.activeConnection();
      let disposable2;
      const handleWorkDoneProgress = (_a = this._clientOptions.middleware) == null ? void 0 : _a.handleWorkDoneProgress;
      const realHandler = vscode_languageserver_protocol_12.WorkDoneProgress.is(type) && handleWorkDoneProgress !== void 0 ? (params) => {
        handleWorkDoneProgress(token, params, () => handler(params));
      } : handler;
      if (connection2 !== void 0) {
        this._progressDisposables.set(token, connection2.onProgress(type, token, realHandler));
        disposable2 = {
          dispose: () => {
            const disposable3 = this._progressDisposables.get(token);
            if (disposable3 !== void 0) {
              disposable3.dispose();
              this._progressDisposables.delete(token);
            }
          }
        };
      } else {
        this._pendingProgressHandlers.set(token, { type, handler });
        disposable2 = {
          dispose: () => {
            this._pendingProgressHandlers.delete(token);
            const disposable3 = this._progressDisposables.get(token);
            if (disposable3 !== void 0) {
              disposable3.dispose();
              this._progressDisposables.delete(token);
            }
          }
        };
      }
      return {
        dispose: () => {
          this._progressHandlers.delete(token);
          disposable2.dispose();
        }
      };
    }
    createDefaultErrorHandler(maxRestartCount) {
      if (maxRestartCount !== void 0 && maxRestartCount < 0) {
        throw new Error(`Invalid maxRestartCount: ${maxRestartCount}`);
      }
      return new DefaultErrorHandler(this, maxRestartCount ?? 4);
    }
    async setTrace(value) {
      this._trace = value;
      const connection2 = this.activeConnection();
      if (connection2 !== void 0) {
        await connection2.trace(this._trace, this._tracer, {
          sendNotification: false,
          traceFormat: this._traceFormat
        });
      }
    }
    data2String(data) {
      if (data instanceof vscode_languageserver_protocol_12.ResponseError) {
        const responseError = data;
        return `  Message: ${responseError.message}
  Code: ${responseError.code} ${responseError.data ? "\n" + responseError.data.toString() : ""}`;
      }
      if (data instanceof Error) {
        if (Is2.string(data.stack)) {
          return data.stack;
        }
        return data.message;
      }
      if (Is2.string(data)) {
        return data;
      }
      return data.toString();
    }
    info(message, data, showNotification = true) {
      this.outputChannel.appendLine(`[Info  - ${new Date().toLocaleTimeString()}] ${message}`);
      if (data !== null && data !== void 0) {
        this.outputChannel.appendLine(this.data2String(data));
      }
      if (showNotification && this._clientOptions.revealOutputChannelOn <= RevealOutputChannelOn.Info) {
        this.showNotificationMessage(vscode_languageserver_protocol_12.MessageType.Info, message);
      }
    }
    warn(message, data, showNotification = true) {
      this.outputChannel.appendLine(`[Warn  - ${new Date().toLocaleTimeString()}] ${message}`);
      if (data !== null && data !== void 0) {
        this.outputChannel.appendLine(this.data2String(data));
      }
      if (showNotification && this._clientOptions.revealOutputChannelOn <= RevealOutputChannelOn.Warn) {
        this.showNotificationMessage(vscode_languageserver_protocol_12.MessageType.Warning, message);
      }
    }
    error(message, data, showNotification = true) {
      this.outputChannel.appendLine(`[Error - ${new Date().toLocaleTimeString()}] ${message}`);
      if (data !== null && data !== void 0) {
        this.outputChannel.appendLine(this.data2String(data));
      }
      if (showNotification === "force" || showNotification && this._clientOptions.revealOutputChannelOn <= RevealOutputChannelOn.Error) {
        this.showNotificationMessage(vscode_languageserver_protocol_12.MessageType.Error, message);
      }
    }
    showNotificationMessage(type, message) {
      message = message ?? "A request has failed. See the output for more information.";
      const messageFunc = type === vscode_languageserver_protocol_12.MessageType.Error ? vscode_12.window.showErrorMessage : type === vscode_languageserver_protocol_12.MessageType.Warning ? vscode_12.window.showWarningMessage : vscode_12.window.showInformationMessage;
      void messageFunc(message, "Go to output").then((selection) => {
        if (selection !== void 0) {
          this.outputChannel.show(true);
        }
      });
    }
    logTrace(message, data) {
      this.traceOutputChannel.appendLine(`[Trace - ${new Date().toLocaleTimeString()}] ${message}`);
      if (data) {
        this.traceOutputChannel.appendLine(this.data2String(data));
      }
    }
    logObjectTrace(data) {
      if (data.isLSPMessage && data.type) {
        this.traceOutputChannel.append(`[LSP   - ${new Date().toLocaleTimeString()}] `);
      } else {
        this.traceOutputChannel.append(`[Trace - ${new Date().toLocaleTimeString()}] `);
      }
      if (data) {
        this.traceOutputChannel.appendLine(`${JSON.stringify(data)}`);
      }
    }
    needsStart() {
      return this.$state === ClientState.Initial || this.$state === ClientState.Stopping || this.$state === ClientState.Stopped;
    }
    needsStop() {
      return this.$state === ClientState.Starting || this.$state === ClientState.Running;
    }
    activeConnection() {
      return this.$state === ClientState.Running && this._connection !== void 0 ? this._connection : void 0;
    }
    isRunning() {
      return this.$state === ClientState.Running;
    }
    async start() {
      if (this._disposed === "disposing" || this._disposed === "disposed") {
        throw new Error(`Client got disposed and can't be restarted.`);
      }
      if (this.$state === ClientState.Stopping) {
        throw new Error(`Client is currently stopping. Can only restart a full stopped client`);
      }
      if (this._onStart !== void 0) {
        return this._onStart;
      }
      const [promise, resolve, reject] = this.createOnStartPromise();
      this._onStart = promise;
      if (this._diagnostics === void 0) {
        this._diagnostics = this._clientOptions.diagnosticCollectionName ? vscode_12.languages.createDiagnosticCollection(this._clientOptions.diagnosticCollectionName) : vscode_12.languages.createDiagnosticCollection();
      }
      for (const [method, handler] of this._notificationHandlers) {
        if (!this._pendingNotificationHandlers.has(method)) {
          this._pendingNotificationHandlers.set(method, handler);
        }
      }
      for (const [method, handler] of this._requestHandlers) {
        if (!this._pendingRequestHandlers.has(method)) {
          this._pendingRequestHandlers.set(method, handler);
        }
      }
      for (const [token, data] of this._progressHandlers) {
        if (!this._pendingProgressHandlers.has(token)) {
          this._pendingProgressHandlers.set(token, data);
        }
      }
      this.$state = ClientState.Starting;
      try {
        const connection2 = await this.createConnection();
        connection2.onNotification(vscode_languageserver_protocol_12.LogMessageNotification.type, (message) => {
          switch (message.type) {
            case vscode_languageserver_protocol_12.MessageType.Error:
              this.error(message.message, void 0, false);
              break;
            case vscode_languageserver_protocol_12.MessageType.Warning:
              this.warn(message.message, void 0, false);
              break;
            case vscode_languageserver_protocol_12.MessageType.Info:
              this.info(message.message, void 0, false);
              break;
            default:
              this.outputChannel.appendLine(message.message);
          }
        });
        connection2.onNotification(vscode_languageserver_protocol_12.ShowMessageNotification.type, (message) => {
          switch (message.type) {
            case vscode_languageserver_protocol_12.MessageType.Error:
              void vscode_12.window.showErrorMessage(message.message);
              break;
            case vscode_languageserver_protocol_12.MessageType.Warning:
              void vscode_12.window.showWarningMessage(message.message);
              break;
            case vscode_languageserver_protocol_12.MessageType.Info:
              void vscode_12.window.showInformationMessage(message.message);
              break;
            default:
              void vscode_12.window.showInformationMessage(message.message);
          }
        });
        connection2.onRequest(vscode_languageserver_protocol_12.ShowMessageRequest.type, (params) => {
          let messageFunc;
          switch (params.type) {
            case vscode_languageserver_protocol_12.MessageType.Error:
              messageFunc = vscode_12.window.showErrorMessage;
              break;
            case vscode_languageserver_protocol_12.MessageType.Warning:
              messageFunc = vscode_12.window.showWarningMessage;
              break;
            case vscode_languageserver_protocol_12.MessageType.Info:
              messageFunc = vscode_12.window.showInformationMessage;
              break;
            default:
              messageFunc = vscode_12.window.showInformationMessage;
          }
          let actions = params.actions || [];
          return messageFunc(params.message, ...actions);
        });
        connection2.onNotification(vscode_languageserver_protocol_12.TelemetryEventNotification.type, (data) => {
          this._telemetryEmitter.fire(data);
        });
        connection2.onRequest(vscode_languageserver_protocol_12.ShowDocumentRequest.type, async (params) => {
          var _a;
          const showDocument = async (params2) => {
            const uri = this.protocol2CodeConverter.asUri(params2.uri);
            try {
              if (params2.external === true) {
                const success = await vscode_12.env.openExternal(uri);
                return { success };
              } else {
                const options = {};
                if (params2.selection !== void 0) {
                  options.selection = this.protocol2CodeConverter.asRange(params2.selection);
                }
                if (params2.takeFocus === void 0 || params2.takeFocus === false) {
                  options.preserveFocus = true;
                } else if (params2.takeFocus === true) {
                  options.preserveFocus = false;
                }
                await vscode_12.window.showTextDocument(uri, options);
                return { success: true };
              }
            } catch (error2) {
              return { success: false };
            }
          };
          const middleware = (_a = this._clientOptions.middleware.window) == null ? void 0 : _a.showDocument;
          if (middleware !== void 0) {
            return middleware(params, showDocument);
          } else {
            return showDocument(params);
          }
        });
        connection2.listen();
        await this.initialize(connection2);
        resolve();
      } catch (error2) {
        this.$state = ClientState.StartFailed;
        this.error(`${this._name} client: couldn't create connection to server.`, error2, "force");
        reject(error2);
      }
      return this._onStart;
    }
    createOnStartPromise() {
      let resolve;
      let reject;
      const promise = new Promise((_resolve, _reject) => {
        resolve = _resolve;
        reject = _reject;
      });
      return [promise, resolve, reject];
    }
    async initialize(connection2) {
      this.refreshTrace(connection2, false);
      const initOption = this._clientOptions.initializationOptions;
      const [rootPath, workspaceFolders] = this._clientOptions.workspaceFolder !== void 0 ? [this._clientOptions.workspaceFolder.uri.fsPath, [{ uri: this._c2p.asUri(this._clientOptions.workspaceFolder.uri), name: this._clientOptions.workspaceFolder.name }]] : [this._clientGetRootPath(), null];
      const initParams = {
        processId: null,
        clientInfo: {
          name: vscode_12.env.appName,
          version: vscode_12.version
        },
        locale: this.getLocale(),
        rootPath: rootPath ? rootPath : null,
        rootUri: rootPath ? this._c2p.asUri(vscode_12.Uri.file(rootPath)) : null,
        capabilities: this.computeClientCapabilities(),
        initializationOptions: Is2.func(initOption) ? initOption() : initOption,
        trace: vscode_languageserver_protocol_12.Trace.toString(this._trace),
        workspaceFolders
      };
      this.fillInitializeParams(initParams);
      if (this._clientOptions.progressOnInitialization) {
        const token = UUID2.generateUuid();
        const part = new progressPart_12.ProgressPart(connection2, token);
        initParams.workDoneToken = token;
        try {
          const result = await this.doInitialize(connection2, initParams);
          part.done();
          return result;
        } catch (error2) {
          part.cancel();
          throw error2;
        }
      } else {
        return this.doInitialize(connection2, initParams);
      }
    }
    async doInitialize(connection2, initParams) {
      try {
        const result = await connection2.initialize(initParams);
        if (result.capabilities.positionEncoding !== void 0 && result.capabilities.positionEncoding !== vscode_languageserver_protocol_12.PositionEncodingKind.UTF16) {
          throw new Error(`Unsupported position encoding (${result.capabilities.positionEncoding}) received from server ${this.name}`);
        }
        this._initializeResult = result;
        this.$state = ClientState.Running;
        let textDocumentSyncOptions = void 0;
        if (Is2.number(result.capabilities.textDocumentSync)) {
          if (result.capabilities.textDocumentSync === vscode_languageserver_protocol_12.TextDocumentSyncKind.None) {
            textDocumentSyncOptions = {
              openClose: false,
              change: vscode_languageserver_protocol_12.TextDocumentSyncKind.None,
              save: void 0
            };
          } else {
            textDocumentSyncOptions = {
              openClose: true,
              change: result.capabilities.textDocumentSync,
              save: {
                includeText: false
              }
            };
          }
        } else if (result.capabilities.textDocumentSync !== void 0 && result.capabilities.textDocumentSync !== null) {
          textDocumentSyncOptions = result.capabilities.textDocumentSync;
        }
        this._capabilities = Object.assign({}, result.capabilities, { resolvedTextDocumentSync: textDocumentSyncOptions });
        connection2.onNotification(vscode_languageserver_protocol_12.PublishDiagnosticsNotification.type, (params) => this.handleDiagnostics(params));
        connection2.onRequest(vscode_languageserver_protocol_12.RegistrationRequest.type, (params) => this.handleRegistrationRequest(params));
        connection2.onRequest("client/registerFeature", (params) => this.handleRegistrationRequest(params));
        connection2.onRequest(vscode_languageserver_protocol_12.UnregistrationRequest.type, (params) => this.handleUnregistrationRequest(params));
        connection2.onRequest("client/unregisterFeature", (params) => this.handleUnregistrationRequest(params));
        connection2.onRequest(vscode_languageserver_protocol_12.ApplyWorkspaceEditRequest.type, (params) => this.handleApplyWorkspaceEdit(params));
        for (const [method, handler] of this._pendingNotificationHandlers) {
          this._notificationDisposables.set(method, connection2.onNotification(method, handler));
        }
        this._pendingNotificationHandlers.clear();
        for (const [method, handler] of this._pendingRequestHandlers) {
          this._requestDisposables.set(method, connection2.onRequest(method, handler));
        }
        this._pendingRequestHandlers.clear();
        for (const [token, data] of this._pendingProgressHandlers) {
          this._progressDisposables.set(token, connection2.onProgress(data.type, token, data.handler));
        }
        this._pendingProgressHandlers.clear();
        await connection2.sendNotification(vscode_languageserver_protocol_12.InitializedNotification.type, {});
        this.hookFileEvents(connection2);
        this.hookConfigurationChanged(connection2);
        this.initializeFeatures(connection2);
        return result;
      } catch (error2) {
        if (this._clientOptions.initializationFailedHandler) {
          if (this._clientOptions.initializationFailedHandler(error2)) {
            void this.initialize(connection2);
          } else {
            void this.stop();
          }
        } else if (error2 instanceof vscode_languageserver_protocol_12.ResponseError && error2.data && error2.data.retry) {
          void vscode_12.window.showErrorMessage(error2.message, { title: "Retry", id: "retry" }).then((item) => {
            if (item && item.id === "retry") {
              void this.initialize(connection2);
            } else {
              void this.stop();
            }
          });
        } else {
          if (error2 && error2.message) {
            void vscode_12.window.showErrorMessage(error2.message);
          }
          this.error("Server initialization failed.", error2);
          void this.stop();
        }
        throw error2;
      }
    }
    _clientGetRootPath() {
      let folders = vscode_12.workspace.workspaceFolders;
      if (!folders || folders.length === 0) {
        return void 0;
      }
      let folder = folders[0];
      if (folder.uri.scheme === "file") {
        return folder.uri.fsPath;
      }
      return void 0;
    }
    stop(timeout = 2e3) {
      return this.shutdown("stop", timeout);
    }
    dispose(timeout = 2e3) {
      try {
        this._disposed = "disposing";
        return this.stop(timeout);
      } finally {
        this._disposed = "disposed";
      }
    }
    async shutdown(mode, timeout) {
      if (this.$state === ClientState.Stopped || this.$state === ClientState.Initial) {
        return;
      }
      if (this.$state === ClientState.Stopping) {
        if (this._onStop !== void 0) {
          return this._onStop;
        } else {
          throw new Error(`Client is stopping but no stop promise available.`);
        }
      }
      const connection2 = this.activeConnection();
      if (connection2 === void 0 || this.$state !== ClientState.Running) {
        throw new Error(`Client is not running and can't be stopped. It's current state is: ${this.$state}`);
      }
      this._initializeResult = void 0;
      this.$state = ClientState.Stopping;
      this.cleanUp(mode);
      const tp = new Promise((c) => {
        (0, vscode_languageserver_protocol_12.RAL)().timer.setTimeout(c, timeout);
      });
      const shutdown = (async (connection3) => {
        await connection3.shutdown();
        await connection3.exit();
        return connection3;
      })(connection2);
      return this._onStop = Promise.race([tp, shutdown]).then((connection3) => {
        if (connection3 !== void 0) {
          connection3.end();
          connection3.dispose();
        } else {
          this.error(`Stopping server timed out`, void 0, false);
          throw new Error(`Stopping the server timed out`);
        }
      }, (error2) => {
        this.error(`Stopping server failed`, error2, false);
        throw error2;
      }).finally(() => {
        this.$state = ClientState.Stopped;
        mode === "stop" && this.cleanUpChannel();
        this._onStart = void 0;
        this._onStop = void 0;
        this._connection = void 0;
        this._ignoredRegistrations.clear();
      });
    }
    cleanUp(mode) {
      this._fileEvents = [];
      this._fileEventDelayer.cancel();
      const disposables = this._listeners.splice(0, this._listeners.length);
      for (const disposable2 of disposables) {
        disposable2.dispose();
      }
      if (this._syncedDocuments) {
        this._syncedDocuments.clear();
      }
      for (const feature of Array.from(this._features.entries()).map((entry) => entry[1]).reverse()) {
        feature.dispose();
      }
      if (mode === "stop" && this._diagnostics !== void 0) {
        this._diagnostics.dispose();
        this._diagnostics = void 0;
      }
      if (this._idleInterval !== void 0) {
        this._idleInterval.dispose();
        this._idleInterval = void 0;
      }
    }
    cleanUpChannel() {
      if (this._outputChannel !== void 0 && this._disposeOutputChannel) {
        this._outputChannel.dispose();
        this._outputChannel = void 0;
      }
    }
    notifyFileEvent(event) {
      var _a;
      const client2 = this;
      async function didChangeWatchedFile(event2) {
        client2._fileEvents.push(event2);
        return client2._fileEventDelayer.trigger(async () => {
          await client2.sendNotification(vscode_languageserver_protocol_12.DidChangeWatchedFilesNotification.type, { changes: client2._fileEvents });
          client2._fileEvents = [];
        });
      }
      const workSpaceMiddleware = (_a = this.clientOptions.middleware) == null ? void 0 : _a.workspace;
      ((workSpaceMiddleware == null ? void 0 : workSpaceMiddleware.didChangeWatchedFile) ? workSpaceMiddleware.didChangeWatchedFile(event, didChangeWatchedFile) : didChangeWatchedFile(event)).catch((error2) => {
        client2.error(`Notify file events failed.`, error2);
      });
    }
    async sendPendingFullTextDocumentChanges(connection2) {
      return this._pendingChangeSemaphore.lock(async () => {
        try {
          const changes = this._didChangeTextDocumentFeature.getPendingDocumentChanges(this._pendingOpenNotifications);
          if (changes.length === 0) {
            return;
          }
          for (const document of changes) {
            const params = this.code2ProtocolConverter.asChangeTextDocumentParams(document);
            await connection2.sendNotification(vscode_languageserver_protocol_12.DidChangeTextDocumentNotification.type, params);
            this._didChangeTextDocumentFeature.notificationSent(document, vscode_languageserver_protocol_12.DidChangeTextDocumentNotification.type, params);
          }
        } catch (error2) {
          this.error(`Sending pending changes failed`, error2, false);
          throw error2;
        }
      });
    }
    triggerPendingChangeDelivery() {
      this._pendingChangeDelayer.trigger(async () => {
        const connection2 = this.activeConnection();
        if (connection2 === void 0) {
          this.triggerPendingChangeDelivery();
          return;
        }
        await this.sendPendingFullTextDocumentChanges(connection2);
      }).catch((error2) => this.error(`Delivering pending changes failed`, error2, false));
    }
    handleDiagnostics(params) {
      if (!this._diagnostics) {
        return;
      }
      const key = params.uri;
      if (this._diagnosticQueueState.state === "busy" && this._diagnosticQueueState.document === key) {
        this._diagnosticQueueState.tokenSource.cancel();
      }
      this._diagnosticQueue.set(params.uri, params.diagnostics);
      this.triggerDiagnosticQueue();
    }
    triggerDiagnosticQueue() {
      (0, vscode_languageserver_protocol_12.RAL)().timer.setImmediate(() => {
        this.workDiagnosticQueue();
      });
    }
    workDiagnosticQueue() {
      if (this._diagnosticQueueState.state === "busy") {
        return;
      }
      const next = this._diagnosticQueue.entries().next();
      if (next.done === true) {
        return;
      }
      const [document, diagnostics] = next.value;
      this._diagnosticQueue.delete(document);
      const tokenSource = new vscode_12.CancellationTokenSource();
      this._diagnosticQueueState = { state: "busy", document, tokenSource };
      this._p2c.asDiagnostics(diagnostics, tokenSource.token).then((converted) => {
        if (!tokenSource.token.isCancellationRequested) {
          const uri = this._p2c.asUri(document);
          const middleware = this.clientOptions.middleware;
          if (middleware.handleDiagnostics) {
            middleware.handleDiagnostics(uri, converted, (uri2, diagnostics2) => this.setDiagnostics(uri2, diagnostics2));
          } else {
            this.setDiagnostics(uri, converted);
          }
        }
      }).finally(() => {
        this._diagnosticQueueState = { state: "idle" };
        this.triggerDiagnosticQueue();
      });
    }
    setDiagnostics(uri, diagnostics) {
      if (!this._diagnostics) {
        return;
      }
      this._diagnostics.set(uri, diagnostics);
    }
    getLocale() {
      return vscode_12.env.language;
    }
    async $start() {
      if (this.$state === ClientState.StartFailed) {
        throw new Error(`Previous start failed. Can't restart server.`);
      }
      await this.start();
      const connection2 = this.activeConnection();
      if (connection2 === void 0) {
        throw new Error(`Starting server failed`);
      }
      return connection2;
    }
    async createConnection() {
      let errorHandler = (error2, message, count) => {
        this.handleConnectionError(error2, message, count).catch((error3) => this.error(`Handling connection error failed`, error3));
      };
      let closeHandler = () => {
        this.handleConnectionClosed().catch((error2) => this.error(`Handling connection close failed`, error2));
      };
      const transports = await this.createMessageTransports(this._clientOptions.stdioEncoding || "utf8");
      this._connection = createConnection(transports.reader, transports.writer, errorHandler, closeHandler, this._clientOptions.connectionOptions);
      return this._connection;
    }
    async handleConnectionClosed() {
      if (this.$state === ClientState.Stopped) {
        return;
      }
      try {
        if (this._connection !== void 0) {
          this._connection.dispose();
        }
      } catch (error2) {
      }
      let handlerResult = { action: CloseAction.DoNotRestart };
      if (this.$state !== ClientState.Stopping) {
        try {
          handlerResult = await this._clientOptions.errorHandler.closed();
        } catch (error2) {
        }
      }
      this._connection = void 0;
      if (handlerResult.action === CloseAction.DoNotRestart) {
        this.error(handlerResult.message ?? "Connection to server got closed. Server will not be restarted.", void 0, handlerResult.handled === true ? false : "force");
        this.cleanUp("stop");
        if (this.$state === ClientState.Starting) {
          this.$state = ClientState.StartFailed;
        } else {
          this.$state = ClientState.Stopped;
        }
        this._onStop = Promise.resolve();
        this._onStart = void 0;
      } else if (handlerResult.action === CloseAction.Restart) {
        this.info(handlerResult.message ?? "Connection to server got closed. Server will restart.", !handlerResult.handled);
        this.cleanUp("restart");
        this.$state = ClientState.Initial;
        this._onStop = Promise.resolve();
        this._onStart = void 0;
        this.start().catch((error2) => this.error(`Restarting server failed`, error2, "force"));
      }
    }
    async handleConnectionError(error2, message, count) {
      const handlerResult = await this._clientOptions.errorHandler.error(error2, message, count);
      if (handlerResult.action === ErrorAction.Shutdown) {
        this.error(handlerResult.message ?? `Client ${this._name}: connection to server is erroring. Shutting down server.`, void 0, handlerResult.handled === true ? false : "force");
        this.stop().catch((error3) => {
          this.error(`Stopping server failed`, error3, false);
        });
      }
    }
    hookConfigurationChanged(connection2) {
      this._listeners.push(vscode_12.workspace.onDidChangeConfiguration(() => {
        this.refreshTrace(connection2, true);
      }));
    }
    refreshTrace(connection2, sendNotification = false) {
      const config = vscode_12.workspace.getConfiguration(this._id);
      let trace = vscode_languageserver_protocol_12.Trace.Off;
      let traceFormat = vscode_languageserver_protocol_12.TraceFormat.Text;
      if (config) {
        const traceConfig = config.get("trace.server", "off");
        if (typeof traceConfig === "string") {
          trace = vscode_languageserver_protocol_12.Trace.fromString(traceConfig);
        } else {
          trace = vscode_languageserver_protocol_12.Trace.fromString(config.get("trace.server.verbosity", "off"));
          traceFormat = vscode_languageserver_protocol_12.TraceFormat.fromString(config.get("trace.server.format", "text"));
        }
      }
      this._trace = trace;
      this._traceFormat = traceFormat;
      connection2.trace(this._trace, this._tracer, {
        sendNotification,
        traceFormat: this._traceFormat
      }).catch((error2) => {
        this.error(`Updating trace failed with error`, error2, false);
      });
    }
    hookFileEvents(_connection) {
      let fileEvents = this._clientOptions.synchronize.fileEvents;
      if (!fileEvents) {
        return;
      }
      let watchers;
      if (Is2.array(fileEvents)) {
        watchers = fileEvents;
      } else {
        watchers = [fileEvents];
      }
      if (!watchers) {
        return;
      }
      this._dynamicFeatures.get(vscode_languageserver_protocol_12.DidChangeWatchedFilesNotification.type.method).registerRaw(UUID2.generateUuid(), watchers);
    }
    registerFeatures(features2) {
      for (let feature of features2) {
        this.registerFeature(feature);
      }
    }
    registerFeature(feature) {
      this._features.push(feature);
      if (features_12.DynamicFeature.is(feature)) {
        const registrationType = feature.registrationType;
        this._dynamicFeatures.set(registrationType.method, feature);
      }
    }
    getFeature(request) {
      return this._dynamicFeatures.get(request);
    }
    hasDedicatedTextSynchronizationFeature(textDocument) {
      const feature = this.getFeature(vscode_languageserver_protocol_12.NotebookDocumentSyncRegistrationType.method);
      if (feature === void 0 || !(feature instanceof notebook_1.NotebookDocumentSyncFeature)) {
        return false;
      }
      return feature.handles(textDocument);
    }
    registerBuiltinFeatures() {
      const pendingFullTextDocumentChanges = /* @__PURE__ */ new Map();
      this.registerFeature(new configuration_1.ConfigurationFeature(this));
      this.registerFeature(new textSynchronization_1.DidOpenTextDocumentFeature(this, this._syncedDocuments));
      this._didChangeTextDocumentFeature = new textSynchronization_1.DidChangeTextDocumentFeature(this, pendingFullTextDocumentChanges);
      this._didChangeTextDocumentFeature.onPendingChangeAdded(() => {
        this.triggerPendingChangeDelivery();
      });
      this.registerFeature(this._didChangeTextDocumentFeature);
      this.registerFeature(new textSynchronization_1.WillSaveFeature(this));
      this.registerFeature(new textSynchronization_1.WillSaveWaitUntilFeature(this));
      this.registerFeature(new textSynchronization_1.DidSaveTextDocumentFeature(this));
      this.registerFeature(new textSynchronization_1.DidCloseTextDocumentFeature(this, this._syncedDocuments, pendingFullTextDocumentChanges));
      this.registerFeature(new fileSystemWatcher_1.FileSystemWatcherFeature(this, (event) => this.notifyFileEvent(event)));
      this.registerFeature(new completion_1.CompletionItemFeature(this));
      this.registerFeature(new hover_1.HoverFeature(this));
      this.registerFeature(new signatureHelp_1.SignatureHelpFeature(this));
      this.registerFeature(new definition_1.DefinitionFeature(this));
      this.registerFeature(new reference_1.ReferencesFeature(this));
      this.registerFeature(new documentHighlight_1.DocumentHighlightFeature(this));
      this.registerFeature(new documentSymbol_12.DocumentSymbolFeature(this));
      this.registerFeature(new workspaceSymbol_1.WorkspaceSymbolFeature(this));
      this.registerFeature(new codeAction_1.CodeActionFeature(this));
      this.registerFeature(new codeLens_1.CodeLensFeature(this));
      this.registerFeature(new formatting_1.DocumentFormattingFeature(this));
      this.registerFeature(new formatting_1.DocumentRangeFormattingFeature(this));
      this.registerFeature(new formatting_1.DocumentOnTypeFormattingFeature(this));
      this.registerFeature(new rename_1.RenameFeature(this));
      this.registerFeature(new documentLink_1.DocumentLinkFeature(this));
      this.registerFeature(new executeCommand_1.ExecuteCommandFeature(this));
      this.registerFeature(new configuration_1.SyncConfigurationFeature(this));
      this.registerFeature(new typeDefinition_1.TypeDefinitionFeature(this));
      this.registerFeature(new implementation_1.ImplementationFeature(this));
      this.registerFeature(new colorProvider_1.ColorProviderFeature(this));
      if (this.clientOptions.workspaceFolder === void 0) {
        this.registerFeature(new workspaceFolder_1.WorkspaceFoldersFeature(this));
      }
      this.registerFeature(new foldingRange_1.FoldingRangeFeature(this));
      this.registerFeature(new declaration_1.DeclarationFeature(this));
      this.registerFeature(new selectionRange_1.SelectionRangeFeature(this));
      this.registerFeature(new progress_1.ProgressFeature(this));
      this.registerFeature(new callHierarchy_1.CallHierarchyFeature(this));
      this.registerFeature(new semanticTokens_1.SemanticTokensFeature(this));
      this.registerFeature(new linkedEditingRange_1.LinkedEditingFeature(this));
      this.registerFeature(new fileOperations_1.DidCreateFilesFeature(this));
      this.registerFeature(new fileOperations_1.DidRenameFilesFeature(this));
      this.registerFeature(new fileOperations_1.DidDeleteFilesFeature(this));
      this.registerFeature(new fileOperations_1.WillCreateFilesFeature(this));
      this.registerFeature(new fileOperations_1.WillRenameFilesFeature(this));
      this.registerFeature(new fileOperations_1.WillDeleteFilesFeature(this));
      this.registerFeature(new typeHierarchy_1.TypeHierarchyFeature(this));
      this.registerFeature(new inlineValue_1.InlineValueFeature(this));
      this.registerFeature(new inlayHint_1.InlayHintsFeature(this));
      this.registerFeature(new diagnostic_1.DiagnosticFeature(this));
      this.registerFeature(new notebook_1.NotebookDocumentSyncFeature(this));
    }
    registerProposedFeatures() {
      this.registerFeatures(ProposedFeatures.createAll(this));
    }
    fillInitializeParams(params) {
      for (let feature of this._features) {
        if (Is2.func(feature.fillInitializeParams)) {
          feature.fillInitializeParams(params);
        }
      }
    }
    computeClientCapabilities() {
      const result = {};
      (0, features_12.ensure)(result, "workspace").applyEdit = true;
      const workspaceEdit = (0, features_12.ensure)((0, features_12.ensure)(result, "workspace"), "workspaceEdit");
      workspaceEdit.documentChanges = true;
      workspaceEdit.resourceOperations = [vscode_languageserver_protocol_12.ResourceOperationKind.Create, vscode_languageserver_protocol_12.ResourceOperationKind.Rename, vscode_languageserver_protocol_12.ResourceOperationKind.Delete];
      workspaceEdit.failureHandling = vscode_languageserver_protocol_12.FailureHandlingKind.TextOnlyTransactional;
      workspaceEdit.normalizesLineEndings = true;
      workspaceEdit.changeAnnotationSupport = {
        groupsOnLabel: true
      };
      const diagnostics = (0, features_12.ensure)((0, features_12.ensure)(result, "textDocument"), "publishDiagnostics");
      diagnostics.relatedInformation = true;
      diagnostics.versionSupport = false;
      diagnostics.tagSupport = { valueSet: [vscode_languageserver_protocol_12.DiagnosticTag.Unnecessary, vscode_languageserver_protocol_12.DiagnosticTag.Deprecated] };
      diagnostics.codeDescriptionSupport = true;
      diagnostics.dataSupport = true;
      const windowCapabilities = (0, features_12.ensure)(result, "window");
      const showMessage = (0, features_12.ensure)(windowCapabilities, "showMessage");
      showMessage.messageActionItem = { additionalPropertiesSupport: true };
      const showDocument = (0, features_12.ensure)(windowCapabilities, "showDocument");
      showDocument.support = true;
      const generalCapabilities = (0, features_12.ensure)(result, "general");
      generalCapabilities.staleRequestSupport = {
        cancel: true,
        retryOnContentModified: Array.from(BaseLanguageClient.RequestsToCancelOnContentModified)
      };
      generalCapabilities.regularExpressions = { engine: "ECMAScript", version: "ES2020" };
      generalCapabilities.markdown = {
        parser: "marked",
        version: "1.1.0"
      };
      generalCapabilities.positionEncodings = ["utf-16"];
      if (this._clientOptions.markdown.supportHtml) {
        generalCapabilities.markdown.allowedTags = ["ul", "li", "p", "code", "blockquote", "ol", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "em", "pre", "table", "thead", "tbody", "tr", "th", "td", "div", "del", "a", "strong", "br", "img", "span"];
      }
      for (let feature of this._features) {
        feature.fillClientCapabilities(result);
      }
      return result;
    }
    initializeFeatures(_connection) {
      const documentSelector = this._clientOptions.documentSelector;
      for (const feature of this._features) {
        if (Is2.func(feature.preInitialize)) {
          feature.preInitialize(this._capabilities, documentSelector);
        }
      }
      for (const feature of this._features) {
        feature.initialize(this._capabilities, documentSelector);
      }
    }
    async handleRegistrationRequest(params) {
      if (!this.isRunning()) {
        for (const registration of params.registrations) {
          this._ignoredRegistrations.add(registration.id);
        }
        return;
      }
      for (const registration of params.registrations) {
        const feature = this._dynamicFeatures.get(registration.method);
        if (feature === void 0) {
          return Promise.reject(new Error(`No feature implementation for ${registration.method} found. Registration failed.`));
        }
        const options = registration.registerOptions ?? {};
        options.documentSelector = options.documentSelector ?? this._clientOptions.documentSelector;
        const data = {
          id: registration.id,
          registerOptions: options
        };
        try {
          feature.register(data);
        } catch (err) {
          return Promise.reject(err);
        }
      }
    }
    async handleUnregistrationRequest(params) {
      for (let unregistration of params.unregisterations) {
        if (this._ignoredRegistrations.has(unregistration.id)) {
          continue;
        }
        const feature = this._dynamicFeatures.get(unregistration.method);
        if (!feature) {
          return Promise.reject(new Error(`No feature implementation for ${unregistration.method} found. Unregistration failed.`));
        }
        feature.unregister(unregistration.id);
      }
    }
    async handleApplyWorkspaceEdit(params) {
      const workspaceEdit = params.edit;
      const converted = await this.workspaceEditLock.lock(() => {
        return this._p2c.asWorkspaceEdit(workspaceEdit);
      });
      const openTextDocuments = /* @__PURE__ */ new Map();
      vscode_12.workspace.textDocuments.forEach((document) => openTextDocuments.set(document.uri.toString(), document));
      let versionMismatch = false;
      if (workspaceEdit.documentChanges) {
        for (const change of workspaceEdit.documentChanges) {
          if (vscode_languageserver_protocol_12.TextDocumentEdit.is(change) && change.textDocument.version && change.textDocument.version >= 0) {
            const changeUri = this._p2c.asUri(change.textDocument.uri).toString();
            const textDocument = openTextDocuments.get(changeUri);
            if (textDocument && textDocument.version !== change.textDocument.version) {
              versionMismatch = true;
              break;
            }
          }
        }
      }
      if (versionMismatch) {
        return Promise.resolve({ applied: false });
      }
      return Is2.asPromise(vscode_12.workspace.applyEdit(converted).then((value) => {
        return { applied: value };
      }));
    }
    handleFailedRequest(type, token, error2, defaultValue, showNotification = true) {
      if (error2 instanceof vscode_languageserver_protocol_12.ResponseError) {
        if (error2.code === vscode_languageserver_protocol_12.ErrorCodes.PendingResponseRejected || error2.code === vscode_languageserver_protocol_12.ErrorCodes.ConnectionInactive) {
          return defaultValue;
        }
        if (error2.code === vscode_languageserver_protocol_12.LSPErrorCodes.RequestCancelled || error2.code === vscode_languageserver_protocol_12.LSPErrorCodes.ServerCancelled) {
          if (token !== void 0 && token.isCancellationRequested) {
            return defaultValue;
          } else {
            if (error2.data !== void 0) {
              throw new features_12.LSPCancellationError(error2.data);
            } else {
              throw new vscode_12.CancellationError();
            }
          }
        } else if (error2.code === vscode_languageserver_protocol_12.LSPErrorCodes.ContentModified) {
          if (BaseLanguageClient.RequestsToCancelOnContentModified.has(type.method) || BaseLanguageClient.CancellableResolveCalls.has(type.method)) {
            throw new vscode_12.CancellationError();
          } else {
            return defaultValue;
          }
        }
      }
      this.error(`Request ${type.method} failed.`, error2, showNotification);
      throw error2;
    }
  }
  exports2.BaseLanguageClient = BaseLanguageClient;
  BaseLanguageClient.RequestsToCancelOnContentModified = /* @__PURE__ */ new Set([
    vscode_languageserver_protocol_12.SemanticTokensRequest.method,
    vscode_languageserver_protocol_12.SemanticTokensRangeRequest.method,
    vscode_languageserver_protocol_12.SemanticTokensDeltaRequest.method
  ]);
  BaseLanguageClient.CancellableResolveCalls = /* @__PURE__ */ new Set([
    vscode_languageserver_protocol_12.CompletionResolveRequest.method,
    vscode_languageserver_protocol_12.CodeLensResolveRequest.method,
    vscode_languageserver_protocol_12.CodeActionResolveRequest.method,
    vscode_languageserver_protocol_12.InlayHintResolveRequest.method,
    vscode_languageserver_protocol_12.DocumentLinkResolveRequest.method,
    vscode_languageserver_protocol_12.WorkspaceSymbolResolveRequest.method
  ]);
  class ConsoleLogger {
    error(message) {
      (0, vscode_languageserver_protocol_12.RAL)().console.error(message);
    }
    warn(message) {
      (0, vscode_languageserver_protocol_12.RAL)().console.warn(message);
    }
    info(message) {
      (0, vscode_languageserver_protocol_12.RAL)().console.info(message);
    }
    log(message) {
      (0, vscode_languageserver_protocol_12.RAL)().console.log(message);
    }
  }
  function createConnection(input, output, errorHandler, closeHandler, options) {
    const logger = new ConsoleLogger();
    const connection2 = (0, vscode_languageserver_protocol_12.createProtocolConnection)(input, output, logger, options);
    connection2.onError((data) => {
      errorHandler(data[0], data[1], data[2]);
    });
    connection2.onClose(closeHandler);
    const result = {
      listen: () => connection2.listen(),
      sendRequest: connection2.sendRequest,
      onRequest: connection2.onRequest,
      hasPendingResponse: connection2.hasPendingResponse,
      sendNotification: connection2.sendNotification,
      onNotification: connection2.onNotification,
      onProgress: connection2.onProgress,
      sendProgress: connection2.sendProgress,
      trace: (value, tracer, sendNotificationOrTraceOptions) => {
        const defaultTraceOptions = {
          sendNotification: false,
          traceFormat: vscode_languageserver_protocol_12.TraceFormat.Text
        };
        if (sendNotificationOrTraceOptions === void 0) {
          return connection2.trace(value, tracer, defaultTraceOptions);
        } else if (Is2.boolean(sendNotificationOrTraceOptions)) {
          return connection2.trace(value, tracer, sendNotificationOrTraceOptions);
        } else {
          return connection2.trace(value, tracer, sendNotificationOrTraceOptions);
        }
      },
      initialize: (params) => {
        return connection2.sendRequest(vscode_languageserver_protocol_12.InitializeRequest.type, params);
      },
      shutdown: () => {
        return connection2.sendRequest(vscode_languageserver_protocol_12.ShutdownRequest.type, void 0);
      },
      exit: () => {
        return connection2.sendNotification(vscode_languageserver_protocol_12.ExitNotification.type);
      },
      end: () => connection2.end(),
      dispose: () => connection2.dispose()
    };
    return result;
  }
  var ProposedFeatures;
  (function(ProposedFeatures2) {
    function createAll(_client) {
      let result = [];
      return result;
    }
    ProposedFeatures2.createAll = createAll;
  })(ProposedFeatures = exports2.ProposedFeatures || (exports2.ProposedFeatures = {}));
})(client$2);
const client = /* @__PURE__ */ getDefaultExportFromCjs(client$2);
const client$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: client
}, [client$2]);
const require$$3 = /* @__PURE__ */ getAugmentedNamespace(client$1);
(function(exports2) {
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
        __createBinding(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.DiagnosticPullMode = exports2.vsdiag = void 0;
  __exportStar(require$$0$5, exports2);
  __exportStar(require$$1$4, exports2);
  var diagnostic_1 = require$$2$2;
  Object.defineProperty(exports2, "vsdiag", { enumerable: true, get: function() {
    return diagnostic_1.vsdiag;
  } });
  Object.defineProperty(exports2, "DiagnosticPullMode", { enumerable: true, get: function() {
    return diagnostic_1.DiagnosticPullMode;
  } });
  __exportStar(require$$3, exports2);
})(api$6);
const api = /* @__PURE__ */ getDefaultExportFromCjs(api$6);
const api$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: api
}, [api$6]);
const require$$0$2 = /* @__PURE__ */ getAugmentedNamespace(api$1);
var browserExports = {};
var browser$4 = {
  get exports() {
    return browserExports;
  },
  set exports(v) {
    browserExports = v;
  }
};
(function(module2) {
  module2.exports = require$$0$5;
})(browser$4);
const browser$2 = /* @__PURE__ */ getDefaultExportFromCjs(browserExports);
const browser$3 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: browser$2
}, [browserExports]);
const require$$1$1 = /* @__PURE__ */ getAugmentedNamespace(browser$3);
(function(exports2) {
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
        __createBinding(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.LanguageClient = void 0;
  const api_12 = require$$0$2;
  const browser_1 = require$$1$1;
  __exportStar(require$$1$1, exports2);
  __exportStar(require$$0$2, exports2);
  class LanguageClient extends api_12.BaseLanguageClient {
    constructor(id, name, clientOptions, worker) {
      super(id, name, clientOptions);
      this.worker = worker;
    }
    createMessageTransports(_encoding) {
      const reader = new browser_1.BrowserMessageReader(this.worker);
      const writer = new browser_1.BrowserMessageWriter(this.worker);
      return Promise.resolve({ reader, writer });
    }
  }
  exports2.LanguageClient = LanguageClient;
})(main$9);
const main = /* @__PURE__ */ getDefaultExportFromCjs(main$9);
const main$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: main
}, [main$9]);
const require$$0$1 = /* @__PURE__ */ getAugmentedNamespace(main$1);
(function(module2) {
  module2.exports = require$$0$1;
})(node);
var ansiStylesExports = {};
var ansiStyles$3 = {
  get exports() {
    return ansiStylesExports;
  },
  set exports(v) {
    ansiStylesExports = v;
  }
};
var colorName;
var hasRequiredColorName;
function requireColorName() {
  if (hasRequiredColorName)
    return colorName;
  hasRequiredColorName = 1;
  colorName = {
    "aliceblue": [240, 248, 255],
    "antiquewhite": [250, 235, 215],
    "aqua": [0, 255, 255],
    "aquamarine": [127, 255, 212],
    "azure": [240, 255, 255],
    "beige": [245, 245, 220],
    "bisque": [255, 228, 196],
    "black": [0, 0, 0],
    "blanchedalmond": [255, 235, 205],
    "blue": [0, 0, 255],
    "blueviolet": [138, 43, 226],
    "brown": [165, 42, 42],
    "burlywood": [222, 184, 135],
    "cadetblue": [95, 158, 160],
    "chartreuse": [127, 255, 0],
    "chocolate": [210, 105, 30],
    "coral": [255, 127, 80],
    "cornflowerblue": [100, 149, 237],
    "cornsilk": [255, 248, 220],
    "crimson": [220, 20, 60],
    "cyan": [0, 255, 255],
    "darkblue": [0, 0, 139],
    "darkcyan": [0, 139, 139],
    "darkgoldenrod": [184, 134, 11],
    "darkgray": [169, 169, 169],
    "darkgreen": [0, 100, 0],
    "darkgrey": [169, 169, 169],
    "darkkhaki": [189, 183, 107],
    "darkmagenta": [139, 0, 139],
    "darkolivegreen": [85, 107, 47],
    "darkorange": [255, 140, 0],
    "darkorchid": [153, 50, 204],
    "darkred": [139, 0, 0],
    "darksalmon": [233, 150, 122],
    "darkseagreen": [143, 188, 143],
    "darkslateblue": [72, 61, 139],
    "darkslategray": [47, 79, 79],
    "darkslategrey": [47, 79, 79],
    "darkturquoise": [0, 206, 209],
    "darkviolet": [148, 0, 211],
    "deeppink": [255, 20, 147],
    "deepskyblue": [0, 191, 255],
    "dimgray": [105, 105, 105],
    "dimgrey": [105, 105, 105],
    "dodgerblue": [30, 144, 255],
    "firebrick": [178, 34, 34],
    "floralwhite": [255, 250, 240],
    "forestgreen": [34, 139, 34],
    "fuchsia": [255, 0, 255],
    "gainsboro": [220, 220, 220],
    "ghostwhite": [248, 248, 255],
    "gold": [255, 215, 0],
    "goldenrod": [218, 165, 32],
    "gray": [128, 128, 128],
    "green": [0, 128, 0],
    "greenyellow": [173, 255, 47],
    "grey": [128, 128, 128],
    "honeydew": [240, 255, 240],
    "hotpink": [255, 105, 180],
    "indianred": [205, 92, 92],
    "indigo": [75, 0, 130],
    "ivory": [255, 255, 240],
    "khaki": [240, 230, 140],
    "lavender": [230, 230, 250],
    "lavenderblush": [255, 240, 245],
    "lawngreen": [124, 252, 0],
    "lemonchiffon": [255, 250, 205],
    "lightblue": [173, 216, 230],
    "lightcoral": [240, 128, 128],
    "lightcyan": [224, 255, 255],
    "lightgoldenrodyellow": [250, 250, 210],
    "lightgray": [211, 211, 211],
    "lightgreen": [144, 238, 144],
    "lightgrey": [211, 211, 211],
    "lightpink": [255, 182, 193],
    "lightsalmon": [255, 160, 122],
    "lightseagreen": [32, 178, 170],
    "lightskyblue": [135, 206, 250],
    "lightslategray": [119, 136, 153],
    "lightslategrey": [119, 136, 153],
    "lightsteelblue": [176, 196, 222],
    "lightyellow": [255, 255, 224],
    "lime": [0, 255, 0],
    "limegreen": [50, 205, 50],
    "linen": [250, 240, 230],
    "magenta": [255, 0, 255],
    "maroon": [128, 0, 0],
    "mediumaquamarine": [102, 205, 170],
    "mediumblue": [0, 0, 205],
    "mediumorchid": [186, 85, 211],
    "mediumpurple": [147, 112, 219],
    "mediumseagreen": [60, 179, 113],
    "mediumslateblue": [123, 104, 238],
    "mediumspringgreen": [0, 250, 154],
    "mediumturquoise": [72, 209, 204],
    "mediumvioletred": [199, 21, 133],
    "midnightblue": [25, 25, 112],
    "mintcream": [245, 255, 250],
    "mistyrose": [255, 228, 225],
    "moccasin": [255, 228, 181],
    "navajowhite": [255, 222, 173],
    "navy": [0, 0, 128],
    "oldlace": [253, 245, 230],
    "olive": [128, 128, 0],
    "olivedrab": [107, 142, 35],
    "orange": [255, 165, 0],
    "orangered": [255, 69, 0],
    "orchid": [218, 112, 214],
    "palegoldenrod": [238, 232, 170],
    "palegreen": [152, 251, 152],
    "paleturquoise": [175, 238, 238],
    "palevioletred": [219, 112, 147],
    "papayawhip": [255, 239, 213],
    "peachpuff": [255, 218, 185],
    "peru": [205, 133, 63],
    "pink": [255, 192, 203],
    "plum": [221, 160, 221],
    "powderblue": [176, 224, 230],
    "purple": [128, 0, 128],
    "rebeccapurple": [102, 51, 153],
    "red": [255, 0, 0],
    "rosybrown": [188, 143, 143],
    "royalblue": [65, 105, 225],
    "saddlebrown": [139, 69, 19],
    "salmon": [250, 128, 114],
    "sandybrown": [244, 164, 96],
    "seagreen": [46, 139, 87],
    "seashell": [255, 245, 238],
    "sienna": [160, 82, 45],
    "silver": [192, 192, 192],
    "skyblue": [135, 206, 235],
    "slateblue": [106, 90, 205],
    "slategray": [112, 128, 144],
    "slategrey": [112, 128, 144],
    "snow": [255, 250, 250],
    "springgreen": [0, 255, 127],
    "steelblue": [70, 130, 180],
    "tan": [210, 180, 140],
    "teal": [0, 128, 128],
    "thistle": [216, 191, 216],
    "tomato": [255, 99, 71],
    "turquoise": [64, 224, 208],
    "violet": [238, 130, 238],
    "wheat": [245, 222, 179],
    "white": [255, 255, 255],
    "whitesmoke": [245, 245, 245],
    "yellow": [255, 255, 0],
    "yellowgreen": [154, 205, 50]
  };
  return colorName;
}
var conversions;
var hasRequiredConversions;
function requireConversions() {
  if (hasRequiredConversions)
    return conversions;
  hasRequiredConversions = 1;
  const cssKeywords = requireColorName();
  const reverseKeywords = {};
  for (const key of Object.keys(cssKeywords)) {
    reverseKeywords[cssKeywords[key]] = key;
  }
  const convert = {
    rgb: { channels: 3, labels: "rgb" },
    hsl: { channels: 3, labels: "hsl" },
    hsv: { channels: 3, labels: "hsv" },
    hwb: { channels: 3, labels: "hwb" },
    cmyk: { channels: 4, labels: "cmyk" },
    xyz: { channels: 3, labels: "xyz" },
    lab: { channels: 3, labels: "lab" },
    lch: { channels: 3, labels: "lch" },
    hex: { channels: 1, labels: ["hex"] },
    keyword: { channels: 1, labels: ["keyword"] },
    ansi16: { channels: 1, labels: ["ansi16"] },
    ansi256: { channels: 1, labels: ["ansi256"] },
    hcg: { channels: 3, labels: ["h", "c", "g"] },
    apple: { channels: 3, labels: ["r16", "g16", "b16"] },
    gray: { channels: 1, labels: ["gray"] }
  };
  conversions = convert;
  for (const model of Object.keys(convert)) {
    if (!("channels" in convert[model])) {
      throw new Error("missing channels property: " + model);
    }
    if (!("labels" in convert[model])) {
      throw new Error("missing channel labels property: " + model);
    }
    if (convert[model].labels.length !== convert[model].channels) {
      throw new Error("channel and label counts mismatch: " + model);
    }
    const { channels, labels } = convert[model];
    delete convert[model].channels;
    delete convert[model].labels;
    Object.defineProperty(convert[model], "channels", { value: channels });
    Object.defineProperty(convert[model], "labels", { value: labels });
  }
  convert.rgb.hsl = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const delta = max - min;
    let h;
    let s;
    if (max === min) {
      h = 0;
    } else if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else if (b === max) {
      h = 4 + (r - g) / delta;
    }
    h = Math.min(h * 60, 360);
    if (h < 0) {
      h += 360;
    }
    const l = (min + max) / 2;
    if (max === min) {
      s = 0;
    } else if (l <= 0.5) {
      s = delta / (max + min);
    } else {
      s = delta / (2 - max - min);
    }
    return [h, s * 100, l * 100];
  };
  convert.rgb.hsv = function(rgb) {
    let rdif;
    let gdif;
    let bdif;
    let h;
    let s;
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const v = Math.max(r, g, b);
    const diff = v - Math.min(r, g, b);
    const diffc = function(c) {
      return (v - c) / 6 / diff + 1 / 2;
    };
    if (diff === 0) {
      h = 0;
      s = 0;
    } else {
      s = diff / v;
      rdif = diffc(r);
      gdif = diffc(g);
      bdif = diffc(b);
      if (r === v) {
        h = bdif - gdif;
      } else if (g === v) {
        h = 1 / 3 + rdif - bdif;
      } else if (b === v) {
        h = 2 / 3 + gdif - rdif;
      }
      if (h < 0) {
        h += 1;
      } else if (h > 1) {
        h -= 1;
      }
    }
    return [
      h * 360,
      s * 100,
      v * 100
    ];
  };
  convert.rgb.hwb = function(rgb) {
    const r = rgb[0];
    const g = rgb[1];
    let b = rgb[2];
    const h = convert.rgb.hsl(rgb)[0];
    const w = 1 / 255 * Math.min(r, Math.min(g, b));
    b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return [h, w * 100, b * 100];
  };
  convert.rgb.cmyk = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const k = Math.min(1 - r, 1 - g, 1 - b);
    const c = (1 - r - k) / (1 - k) || 0;
    const m = (1 - g - k) / (1 - k) || 0;
    const y = (1 - b - k) / (1 - k) || 0;
    return [c * 100, m * 100, y * 100, k * 100];
  };
  function comparativeDistance(x, y) {
    return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
  }
  convert.rgb.keyword = function(rgb) {
    const reversed = reverseKeywords[rgb];
    if (reversed) {
      return reversed;
    }
    let currentClosestDistance = Infinity;
    let currentClosestKeyword;
    for (const keyword of Object.keys(cssKeywords)) {
      const value = cssKeywords[keyword];
      const distance = comparativeDistance(rgb, value);
      if (distance < currentClosestDistance) {
        currentClosestDistance = distance;
        currentClosestKeyword = keyword;
      }
    }
    return currentClosestKeyword;
  };
  convert.keyword.rgb = function(keyword) {
    return cssKeywords[keyword];
  };
  convert.rgb.xyz = function(rgb) {
    let r = rgb[0] / 255;
    let g = rgb[1] / 255;
    let b = rgb[2] / 255;
    r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
    g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
    b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
    const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
    return [x * 100, y * 100, z * 100];
  };
  convert.rgb.lab = function(rgb) {
    const xyz = convert.rgb.xyz(rgb);
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [l, a, b];
  };
  convert.hsl.rgb = function(hsl) {
    const h = hsl[0] / 360;
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    let t2;
    let t3;
    let val;
    if (s === 0) {
      val = l * 255;
      return [val, val, val];
    }
    if (l < 0.5) {
      t2 = l * (1 + s);
    } else {
      t2 = l + s - l * s;
    }
    const t1 = 2 * l - t2;
    const rgb = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
      t3 = h + 1 / 3 * -(i - 1);
      if (t3 < 0) {
        t3++;
      }
      if (t3 > 1) {
        t3--;
      }
      if (6 * t3 < 1) {
        val = t1 + (t2 - t1) * 6 * t3;
      } else if (2 * t3 < 1) {
        val = t2;
      } else if (3 * t3 < 2) {
        val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
      } else {
        val = t1;
      }
      rgb[i] = val * 255;
    }
    return rgb;
  };
  convert.hsl.hsv = function(hsl) {
    const h = hsl[0];
    let s = hsl[1] / 100;
    let l = hsl[2] / 100;
    let smin = s;
    const lmin = Math.max(l, 0.01);
    l *= 2;
    s *= l <= 1 ? l : 2 - l;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    const v = (l + s) / 2;
    const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
    return [h, sv * 100, v * 100];
  };
  convert.hsv.rgb = function(hsv) {
    const h = hsv[0] / 60;
    const s = hsv[1] / 100;
    let v = hsv[2] / 100;
    const hi = Math.floor(h) % 6;
    const f = h - Math.floor(h);
    const p = 255 * v * (1 - s);
    const q = 255 * v * (1 - s * f);
    const t = 255 * v * (1 - s * (1 - f));
    v *= 255;
    switch (hi) {
      case 0:
        return [v, t, p];
      case 1:
        return [q, v, p];
      case 2:
        return [p, v, t];
      case 3:
        return [p, q, v];
      case 4:
        return [t, p, v];
      case 5:
        return [v, p, q];
    }
  };
  convert.hsv.hsl = function(hsv) {
    const h = hsv[0];
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const vmin = Math.max(v, 0.01);
    let sl;
    let l;
    l = (2 - s) * v;
    const lmin = (2 - s) * vmin;
    sl = s * vmin;
    sl /= lmin <= 1 ? lmin : 2 - lmin;
    sl = sl || 0;
    l /= 2;
    return [h, sl * 100, l * 100];
  };
  convert.hwb.rgb = function(hwb) {
    const h = hwb[0] / 360;
    let wh = hwb[1] / 100;
    let bl = hwb[2] / 100;
    const ratio = wh + bl;
    let f;
    if (ratio > 1) {
      wh /= ratio;
      bl /= ratio;
    }
    const i = Math.floor(6 * h);
    const v = 1 - bl;
    f = 6 * h - i;
    if ((i & 1) !== 0) {
      f = 1 - f;
    }
    const n = wh + f * (v - wh);
    let r;
    let g;
    let b;
    switch (i) {
      default:
      case 6:
      case 0:
        r = v;
        g = n;
        b = wh;
        break;
      case 1:
        r = n;
        g = v;
        b = wh;
        break;
      case 2:
        r = wh;
        g = v;
        b = n;
        break;
      case 3:
        r = wh;
        g = n;
        b = v;
        break;
      case 4:
        r = n;
        g = wh;
        b = v;
        break;
      case 5:
        r = v;
        g = wh;
        b = n;
        break;
    }
    return [r * 255, g * 255, b * 255];
  };
  convert.cmyk.rgb = function(cmyk) {
    const c = cmyk[0] / 100;
    const m = cmyk[1] / 100;
    const y = cmyk[2] / 100;
    const k = cmyk[3] / 100;
    const r = 1 - Math.min(1, c * (1 - k) + k);
    const g = 1 - Math.min(1, m * (1 - k) + k);
    const b = 1 - Math.min(1, y * (1 - k) + k);
    return [r * 255, g * 255, b * 255];
  };
  convert.xyz.rgb = function(xyz) {
    const x = xyz[0] / 100;
    const y = xyz[1] / 100;
    const z = xyz[2] / 100;
    let r;
    let g;
    let b;
    r = x * 3.2406 + y * -1.5372 + z * -0.4986;
    g = x * -0.9689 + y * 1.8758 + z * 0.0415;
    b = x * 0.0557 + y * -0.204 + z * 1.057;
    r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
    g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
    b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);
    return [r * 255, g * 255, b * 255];
  };
  convert.xyz.lab = function(xyz) {
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [l, a, b];
  };
  convert.lab.xyz = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let x;
    let y;
    let z;
    y = (l + 16) / 116;
    x = a / 500 + y;
    z = y - b / 200;
    const y2 = y ** 3;
    const x2 = x ** 3;
    const z2 = z ** 3;
    y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
    x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
    z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
    x *= 95.047;
    y *= 100;
    z *= 108.883;
    return [x, y, z];
  };
  convert.lab.lch = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let h;
    const hr = Math.atan2(b, a);
    h = hr * 360 / 2 / Math.PI;
    if (h < 0) {
      h += 360;
    }
    const c = Math.sqrt(a * a + b * b);
    return [l, c, h];
  };
  convert.lch.lab = function(lch) {
    const l = lch[0];
    const c = lch[1];
    const h = lch[2];
    const hr = h / 360 * 2 * Math.PI;
    const a = c * Math.cos(hr);
    const b = c * Math.sin(hr);
    return [l, a, b];
  };
  convert.rgb.ansi16 = function(args, saturation = null) {
    const [r, g, b] = args;
    let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
    value = Math.round(value / 50);
    if (value === 0) {
      return 30;
    }
    let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
    if (value === 2) {
      ansi += 60;
    }
    return ansi;
  };
  convert.hsv.ansi16 = function(args) {
    return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
  };
  convert.rgb.ansi256 = function(args) {
    const r = args[0];
    const g = args[1];
    const b = args[2];
    if (r === g && g === b) {
      if (r < 8) {
        return 16;
      }
      if (r > 248) {
        return 231;
      }
      return Math.round((r - 8) / 247 * 24) + 232;
    }
    const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
    return ansi;
  };
  convert.ansi16.rgb = function(args) {
    let color = args % 10;
    if (color === 0 || color === 7) {
      if (args > 50) {
        color += 3.5;
      }
      color = color / 10.5 * 255;
      return [color, color, color];
    }
    const mult = (~~(args > 50) + 1) * 0.5;
    const r = (color & 1) * mult * 255;
    const g = (color >> 1 & 1) * mult * 255;
    const b = (color >> 2 & 1) * mult * 255;
    return [r, g, b];
  };
  convert.ansi256.rgb = function(args) {
    if (args >= 232) {
      const c = (args - 232) * 10 + 8;
      return [c, c, c];
    }
    args -= 16;
    let rem;
    const r = Math.floor(args / 36) / 5 * 255;
    const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
    const b = rem % 6 / 5 * 255;
    return [r, g, b];
  };
  convert.rgb.hex = function(args) {
    const integer2 = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
    const string2 = integer2.toString(16).toUpperCase();
    return "000000".substring(string2.length) + string2;
  };
  convert.hex.rgb = function(args) {
    const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!match) {
      return [0, 0, 0];
    }
    let colorString = match[0];
    if (match[0].length === 3) {
      colorString = colorString.split("").map((char) => {
        return char + char;
      }).join("");
    }
    const integer2 = parseInt(colorString, 16);
    const r = integer2 >> 16 & 255;
    const g = integer2 >> 8 & 255;
    const b = integer2 & 255;
    return [r, g, b];
  };
  convert.rgb.hcg = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const max = Math.max(Math.max(r, g), b);
    const min = Math.min(Math.min(r, g), b);
    const chroma = max - min;
    let grayscale;
    let hue;
    if (chroma < 1) {
      grayscale = min / (1 - chroma);
    } else {
      grayscale = 0;
    }
    if (chroma <= 0) {
      hue = 0;
    } else if (max === r) {
      hue = (g - b) / chroma % 6;
    } else if (max === g) {
      hue = 2 + (b - r) / chroma;
    } else {
      hue = 4 + (r - g) / chroma;
    }
    hue /= 6;
    hue %= 1;
    return [hue * 360, chroma * 100, grayscale * 100];
  };
  convert.hsl.hcg = function(hsl) {
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
    let f = 0;
    if (c < 1) {
      f = (l - 0.5 * c) / (1 - c);
    }
    return [hsl[0], c * 100, f * 100];
  };
  convert.hsv.hcg = function(hsv) {
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const c = s * v;
    let f = 0;
    if (c < 1) {
      f = (v - c) / (1 - c);
    }
    return [hsv[0], c * 100, f * 100];
  };
  convert.hcg.rgb = function(hcg) {
    const h = hcg[0] / 360;
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    if (c === 0) {
      return [g * 255, g * 255, g * 255];
    }
    const pure = [0, 0, 0];
    const hi = h % 1 * 6;
    const v = hi % 1;
    const w = 1 - v;
    let mg = 0;
    switch (Math.floor(hi)) {
      case 0:
        pure[0] = 1;
        pure[1] = v;
        pure[2] = 0;
        break;
      case 1:
        pure[0] = w;
        pure[1] = 1;
        pure[2] = 0;
        break;
      case 2:
        pure[0] = 0;
        pure[1] = 1;
        pure[2] = v;
        break;
      case 3:
        pure[0] = 0;
        pure[1] = w;
        pure[2] = 1;
        break;
      case 4:
        pure[0] = v;
        pure[1] = 0;
        pure[2] = 1;
        break;
      default:
        pure[0] = 1;
        pure[1] = 0;
        pure[2] = w;
    }
    mg = (1 - c) * g;
    return [
      (c * pure[0] + mg) * 255,
      (c * pure[1] + mg) * 255,
      (c * pure[2] + mg) * 255
    ];
  };
  convert.hcg.hsv = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1 - c);
    let f = 0;
    if (v > 0) {
      f = c / v;
    }
    return [hcg[0], f * 100, v * 100];
  };
  convert.hcg.hsl = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const l = g * (1 - c) + 0.5 * c;
    let s = 0;
    if (l > 0 && l < 0.5) {
      s = c / (2 * l);
    } else if (l >= 0.5 && l < 1) {
      s = c / (2 * (1 - l));
    }
    return [hcg[0], s * 100, l * 100];
  };
  convert.hcg.hwb = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1 - c);
    return [hcg[0], (v - c) * 100, (1 - v) * 100];
  };
  convert.hwb.hcg = function(hwb) {
    const w = hwb[1] / 100;
    const b = hwb[2] / 100;
    const v = 1 - b;
    const c = v - w;
    let g = 0;
    if (c < 1) {
      g = (v - c) / (1 - c);
    }
    return [hwb[0], c * 100, g * 100];
  };
  convert.apple.rgb = function(apple) {
    return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
  };
  convert.rgb.apple = function(rgb) {
    return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
  };
  convert.gray.rgb = function(args) {
    return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
  };
  convert.gray.hsl = function(args) {
    return [0, 0, args[0]];
  };
  convert.gray.hsv = convert.gray.hsl;
  convert.gray.hwb = function(gray) {
    return [0, 100, gray[0]];
  };
  convert.gray.cmyk = function(gray) {
    return [0, 0, 0, gray[0]];
  };
  convert.gray.lab = function(gray) {
    return [gray[0], 0, 0];
  };
  convert.gray.hex = function(gray) {
    const val = Math.round(gray[0] / 100 * 255) & 255;
    const integer2 = (val << 16) + (val << 8) + val;
    const string2 = integer2.toString(16).toUpperCase();
    return "000000".substring(string2.length) + string2;
  };
  convert.rgb.gray = function(rgb) {
    const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [val / 255 * 100];
  };
  return conversions;
}
var route;
var hasRequiredRoute;
function requireRoute() {
  if (hasRequiredRoute)
    return route;
  hasRequiredRoute = 1;
  const conversions2 = requireConversions();
  function buildGraph() {
    const graph = {};
    const models = Object.keys(conversions2);
    for (let len = models.length, i = 0; i < len; i++) {
      graph[models[i]] = {
        // http://jsperf.com/1-vs-infinity
        // micro-opt, but this is simple.
        distance: -1,
        parent: null
      };
    }
    return graph;
  }
  function deriveBFS(fromModel) {
    const graph = buildGraph();
    const queue = [fromModel];
    graph[fromModel].distance = 0;
    while (queue.length) {
      const current = queue.pop();
      const adjacents = Object.keys(conversions2[current]);
      for (let len = adjacents.length, i = 0; i < len; i++) {
        const adjacent = adjacents[i];
        const node2 = graph[adjacent];
        if (node2.distance === -1) {
          node2.distance = graph[current].distance + 1;
          node2.parent = current;
          queue.unshift(adjacent);
        }
      }
    }
    return graph;
  }
  function link(from, to) {
    return function(args) {
      return to(from(args));
    };
  }
  function wrapConversion(toModel, graph) {
    const path2 = [graph[toModel].parent, toModel];
    let fn = conversions2[graph[toModel].parent][toModel];
    let cur = graph[toModel].parent;
    while (graph[cur].parent) {
      path2.unshift(graph[cur].parent);
      fn = link(conversions2[graph[cur].parent][cur], fn);
      cur = graph[cur].parent;
    }
    fn.conversion = path2;
    return fn;
  }
  route = function(fromModel) {
    const graph = deriveBFS(fromModel);
    const conversion = {};
    const models = Object.keys(graph);
    for (let len = models.length, i = 0; i < len; i++) {
      const toModel = models[i];
      const node2 = graph[toModel];
      if (node2.parent === null) {
        continue;
      }
      conversion[toModel] = wrapConversion(toModel, graph);
    }
    return conversion;
  };
  return route;
}
var colorConvert;
var hasRequiredColorConvert;
function requireColorConvert() {
  if (hasRequiredColorConvert)
    return colorConvert;
  hasRequiredColorConvert = 1;
  const conversions2 = requireConversions();
  const route2 = requireRoute();
  const convert = {};
  const models = Object.keys(conversions2);
  function wrapRaw(fn) {
    const wrappedFn = function(...args) {
      const arg0 = args[0];
      if (arg0 === void 0 || arg0 === null) {
        return arg0;
      }
      if (arg0.length > 1) {
        args = arg0;
      }
      return fn(args);
    };
    if ("conversion" in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  }
  function wrapRounded(fn) {
    const wrappedFn = function(...args) {
      const arg0 = args[0];
      if (arg0 === void 0 || arg0 === null) {
        return arg0;
      }
      if (arg0.length > 1) {
        args = arg0;
      }
      const result = fn(args);
      if (typeof result === "object") {
        for (let len = result.length, i = 0; i < len; i++) {
          result[i] = Math.round(result[i]);
        }
      }
      return result;
    };
    if ("conversion" in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  }
  models.forEach((fromModel) => {
    convert[fromModel] = {};
    Object.defineProperty(convert[fromModel], "channels", { value: conversions2[fromModel].channels });
    Object.defineProperty(convert[fromModel], "labels", { value: conversions2[fromModel].labels });
    const routes = route2(fromModel);
    const routeModels = Object.keys(routes);
    routeModels.forEach((toModel) => {
      const fn = routes[toModel];
      convert[fromModel][toModel] = wrapRounded(fn);
      convert[fromModel][toModel].raw = wrapRaw(fn);
    });
  });
  colorConvert = convert;
  return colorConvert;
}
(function(module2) {
  const wrapAnsi16 = (fn, offset) => (...args) => {
    const code2 = fn(...args);
    return `\x1B[${code2 + offset}m`;
  };
  const wrapAnsi256 = (fn, offset) => (...args) => {
    const code2 = fn(...args);
    return `\x1B[${38 + offset};5;${code2}m`;
  };
  const wrapAnsi16m = (fn, offset) => (...args) => {
    const rgb = fn(...args);
    return `\x1B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
  };
  const ansi2ansi = (n) => n;
  const rgb2rgb = (r, g, b) => [r, g, b];
  const setLazyProperty = (object, property, get) => {
    Object.defineProperty(object, property, {
      get: () => {
        const value = get();
        Object.defineProperty(object, property, {
          value,
          enumerable: true,
          configurable: true
        });
        return value;
      },
      enumerable: true,
      configurable: true
    });
  };
  let colorConvert2;
  const makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
    if (colorConvert2 === void 0) {
      colorConvert2 = requireColorConvert();
    }
    const offset = isBackground ? 10 : 0;
    const styles2 = {};
    for (const [sourceSpace, suite] of Object.entries(colorConvert2)) {
      const name = sourceSpace === "ansi16" ? "ansi" : sourceSpace;
      if (sourceSpace === targetSpace) {
        styles2[name] = wrap(identity, offset);
      } else if (typeof suite === "object") {
        styles2[name] = wrap(suite[targetSpace], offset);
      }
    }
    return styles2;
  };
  function assembleStyles() {
    const codes = /* @__PURE__ */ new Map();
    const styles2 = {
      modifier: {
        reset: [0, 0],
        // 21 isn't widely supported and 22 does the same thing
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        // Bright color
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        // Bright color
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    styles2.color.gray = styles2.color.blackBright;
    styles2.bgColor.bgGray = styles2.bgColor.bgBlackBright;
    styles2.color.grey = styles2.color.blackBright;
    styles2.bgColor.bgGrey = styles2.bgColor.bgBlackBright;
    for (const [groupName, group2] of Object.entries(styles2)) {
      for (const [styleName, style] of Object.entries(group2)) {
        styles2[styleName] = {
          open: `\x1B[${style[0]}m`,
          close: `\x1B[${style[1]}m`
        };
        group2[styleName] = styles2[styleName];
        codes.set(style[0], style[1]);
      }
      Object.defineProperty(styles2, groupName, {
        value: group2,
        enumerable: false
      });
    }
    Object.defineProperty(styles2, "codes", {
      value: codes,
      enumerable: false
    });
    styles2.color.close = "\x1B[39m";
    styles2.bgColor.close = "\x1B[49m";
    setLazyProperty(styles2.color, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, false));
    setLazyProperty(styles2.color, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, false));
    setLazyProperty(styles2.color, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, false));
    setLazyProperty(styles2.bgColor, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, true));
    setLazyProperty(styles2.bgColor, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, true));
    setLazyProperty(styles2.bgColor, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, true));
    return styles2;
  }
  Object.defineProperty(module2, "exports", {
    enumerable: true,
    get: assembleStyles
  });
})(ansiStyles$3);
const ansiStyles$1 = ansiStylesExports;
const ansiStyles$2 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: ansiStyles$1
}, [ansiStylesExports]);
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(ansiStyles$2);
var browser = {
  stdout: false,
  stderr: false
};
const browser$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: browser
}, [browser]);
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(browser$1);
const stringReplaceAll$1 = (string2, substring, replacer) => {
  let index = string2.indexOf(substring);
  if (index === -1) {
    return string2;
  }
  const substringLength = substring.length;
  let endIndex = 0;
  let returnValue = "";
  do {
    returnValue += string2.substr(endIndex, index - endIndex) + substring + replacer;
    endIndex = index + substringLength;
    index = string2.indexOf(substring, endIndex);
  } while (index !== -1);
  returnValue += string2.substr(endIndex);
  return returnValue;
};
const stringEncaseCRLFWithFirstIndex$1 = (string2, prefix, postfix, index) => {
  let endIndex = 0;
  let returnValue = "";
  do {
    const gotCR = string2[index - 1] === "\r";
    returnValue += string2.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
    endIndex = index + 1;
    index = string2.indexOf("\n", endIndex);
  } while (index !== -1);
  returnValue += string2.substr(endIndex);
  return returnValue;
};
var util = {
  stringReplaceAll: stringReplaceAll$1,
  stringEncaseCRLFWithFirstIndex: stringEncaseCRLFWithFirstIndex$1
};
const util$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: util
}, [util]);
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(util$1);
var templates;
var hasRequiredTemplates;
function requireTemplates() {
  if (hasRequiredTemplates)
    return templates;
  hasRequiredTemplates = 1;
  const TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
  const STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
  const STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
  const ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
  const ESCAPES = /* @__PURE__ */ new Map([
    ["n", "\n"],
    ["r", "\r"],
    ["t", "	"],
    ["b", "\b"],
    ["f", "\f"],
    ["v", "\v"],
    ["0", "\0"],
    ["\\", "\\"],
    ["e", "\x1B"],
    ["a", "\x07"]
  ]);
  function unescape(c) {
    const u = c[0] === "u";
    const bracket = c[1] === "{";
    if (u && !bracket && c.length === 5 || c[0] === "x" && c.length === 3) {
      return String.fromCharCode(parseInt(c.slice(1), 16));
    }
    if (u && bracket) {
      return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
    }
    return ESCAPES.get(c) || c;
  }
  function parseArguments(name, arguments_) {
    const results = [];
    const chunks = arguments_.trim().split(/\s*,\s*/g);
    let matches;
    for (const chunk of chunks) {
      const number2 = Number(chunk);
      if (!Number.isNaN(number2)) {
        results.push(number2);
      } else if (matches = chunk.match(STRING_REGEX)) {
        results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
      } else {
        throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
      }
    }
    return results;
  }
  function parseStyle(style) {
    STYLE_REGEX.lastIndex = 0;
    const results = [];
    let matches;
    while ((matches = STYLE_REGEX.exec(style)) !== null) {
      const name = matches[1];
      if (matches[2]) {
        const args = parseArguments(name, matches[2]);
        results.push([name].concat(args));
      } else {
        results.push([name]);
      }
    }
    return results;
  }
  function buildStyle(chalk2, styles2) {
    const enabled = {};
    for (const layer of styles2) {
      for (const style of layer.styles) {
        enabled[style[0]] = layer.inverse ? null : style.slice(1);
      }
    }
    let current = chalk2;
    for (const [styleName, styles3] of Object.entries(enabled)) {
      if (!Array.isArray(styles3)) {
        continue;
      }
      if (!(styleName in current)) {
        throw new Error(`Unknown Chalk style: ${styleName}`);
      }
      current = styles3.length > 0 ? current[styleName](...styles3) : current[styleName];
    }
    return current;
  }
  templates = (chalk2, temporary) => {
    const styles2 = [];
    const chunks = [];
    let chunk = [];
    temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
      if (escapeCharacter) {
        chunk.push(unescape(escapeCharacter));
      } else if (style) {
        const string2 = chunk.join("");
        chunk = [];
        chunks.push(styles2.length === 0 ? string2 : buildStyle(chalk2, styles2)(string2));
        styles2.push({ inverse, styles: parseStyle(style) });
      } else if (close) {
        if (styles2.length === 0) {
          throw new Error("Found extraneous } in Chalk template literal");
        }
        chunks.push(buildStyle(chalk2, styles2)(chunk.join("")));
        chunk = [];
        styles2.pop();
      } else {
        chunk.push(character);
      }
    });
    chunks.push(chunk.join(""));
    if (styles2.length > 0) {
      const errMessage = `Chalk template literal is missing ${styles2.length} closing bracket${styles2.length === 1 ? "" : "s"} (\`}\`)`;
      throw new Error(errMessage);
    }
    return chunks.join("");
  };
  return templates;
}
const ansiStyles = require$$0;
const { stdout: stdoutColor, stderr: stderrColor } = require$$1;
const {
  stringReplaceAll,
  stringEncaseCRLFWithFirstIndex
} = require$$2;
const { isArray } = Array;
const levelMapping = [
  "ansi",
  "ansi",
  "ansi256",
  "ansi16m"
];
const styles = /* @__PURE__ */ Object.create(null);
const applyOptions = (object, options = {}) => {
  if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
    throw new Error("The `level` option should be an integer from 0 to 3");
  }
  const colorLevel = stdoutColor ? stdoutColor.level : 0;
  object.level = options.level === void 0 ? colorLevel : options.level;
};
class ChalkClass {
  constructor(options) {
    return chalkFactory(options);
  }
}
const chalkFactory = (options) => {
  const chalk2 = {};
  applyOptions(chalk2, options);
  chalk2.template = (...arguments_) => chalkTag(chalk2.template, ...arguments_);
  Object.setPrototypeOf(chalk2, Chalk.prototype);
  Object.setPrototypeOf(chalk2.template, chalk2);
  chalk2.template.constructor = () => {
    throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
  };
  chalk2.template.Instance = ChalkClass;
  return chalk2.template;
};
function Chalk(options) {
  return chalkFactory(options);
}
for (const [styleName, style] of Object.entries(ansiStyles)) {
  styles[styleName] = {
    get() {
      const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
      Object.defineProperty(this, styleName, { value: builder });
      return builder;
    }
  };
}
styles.visible = {
  get() {
    const builder = createBuilder(this, this._styler, true);
    Object.defineProperty(this, "visible", { value: builder });
    return builder;
  }
};
const usedModels = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
for (const model of usedModels) {
  styles[model] = {
    get() {
      const { level } = this;
      return function(...arguments_) {
        const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
        return createBuilder(this, styler, this._isEmpty);
      };
    }
  };
}
for (const model of usedModels) {
  const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
  styles[bgModel] = {
    get() {
      const { level } = this;
      return function(...arguments_) {
        const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
        return createBuilder(this, styler, this._isEmpty);
      };
    }
  };
}
const proto = Object.defineProperties(() => {
}, {
  ...styles,
  level: {
    enumerable: true,
    get() {
      return this._generator.level;
    },
    set(level) {
      this._generator.level = level;
    }
  }
});
const createStyler = (open, close, parent) => {
  let openAll;
  let closeAll;
  if (parent === void 0) {
    openAll = open;
    closeAll = close;
  } else {
    openAll = parent.openAll + open;
    closeAll = close + parent.closeAll;
  }
  return {
    open,
    close,
    openAll,
    closeAll,
    parent
  };
};
const createBuilder = (self2, _styler, _isEmpty) => {
  const builder = (...arguments_) => {
    if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
      return applyStyle(builder, chalkTag(builder, ...arguments_));
    }
    return applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
  };
  Object.setPrototypeOf(builder, proto);
  builder._generator = self2;
  builder._styler = _styler;
  builder._isEmpty = _isEmpty;
  return builder;
};
const applyStyle = (self2, string2) => {
  if (self2.level <= 0 || !string2) {
    return self2._isEmpty ? "" : string2;
  }
  let styler = self2._styler;
  if (styler === void 0) {
    return string2;
  }
  const { openAll, closeAll } = styler;
  if (string2.indexOf("\x1B") !== -1) {
    while (styler !== void 0) {
      string2 = stringReplaceAll(string2, styler.close, styler.open);
      styler = styler.parent;
    }
  }
  const lfIndex = string2.indexOf("\n");
  if (lfIndex !== -1) {
    string2 = stringEncaseCRLFWithFirstIndex(string2, closeAll, openAll, lfIndex);
  }
  return openAll + string2 + closeAll;
};
let template;
const chalkTag = (chalk2, ...strings) => {
  const [firstString] = strings;
  if (!isArray(firstString) || !isArray(firstString.raw)) {
    return strings.join(" ");
  }
  const arguments_ = strings.slice(1);
  const parts = [firstString.raw[0]];
  for (let i = 1; i < firstString.length; i++) {
    parts.push(
      String(arguments_[i - 1]).replace(/[{}\\]/g, "\\$&"),
      String(firstString.raw[i])
    );
  }
  if (template === void 0) {
    template = requireTemplates();
  }
  return template(chalk2, parts.join(""));
};
Object.defineProperties(Chalk.prototype, styles);
const chalk = Chalk();
chalk.supportsColor = stdoutColor;
chalk.stderr = Chalk({ level: stderrColor ? stderrColor.level : 0 });
chalk.stderr.supportsColor = stderrColor;
var source = chalk;
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
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
})(doc);
const MAX_LINES = 4;
const defaultOptions$1 = {
  printWidth: 30,
  tabWidth: 4,
  useTabs: false
};
function prettierPrint(doc2) {
  return docExports.printer.printDocToString(doc2, defaultOptions$1).formatted;
}
function addCursor(state, cursor = "^", error2 = false) {
  const color = (error2 ? source.red : source.green).bold;
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
  return docExports.builders.group(docs, { ...defaultOptions$1, ...groupOptions });
};
const opStyle = (op) => source.gray(op);
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
    const parserString = innerInnerParser != null ? print(innerInnerParser, id) : source.red.bold("unknown");
    let s2 = (() => {
      switch (name) {
        case "string":
          return source.yellow(`"${args[0]}"`);
        case "regex":
        case "regexConcat":
        case "regexWrap":
          return source.redBright(`${args[0]}`);
        case "wrap":
        case "trim": {
          const [left, right] = args;
          return group([
            print(left, id),
            docExports.builders.indent([docExports.builders.softline, parserString]),
            docExports.builders.softline,
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
            docExports.builders.indent([
              docExports.builders.softline,
              docExports.builders.join(
                [delim, docExports.builders.softline],
                args.map((x) => print(x, id))
              )
            ]),
            docExports.builders.softline,
            "]"
          ]);
        }
        case "any":
        case "or": {
          const delim = opStyle("| ");
          return group([
            [
              docExports.builders.join(
                [docExports.builders.softline, docExports.builders.ifBreak(delim, " " + delim)],
                args.map((x) => print(x, id))
              )
            ]
          ]);
        }
        case "many":
          const [min, max] = args;
          let bounds = max === Infinity ? `${min},` : `${min},${max}`;
          bounds = source.bold.gray(` {${bounds}}`);
          return group([parserString, bounds]);
        case "sepBy":
          return group([
            parserString,
            docExports.builders.indent([" sepBy ", print(args[0], id)])
          ]);
        case "lazy": {
          const [lazy2] = args;
          const p = getLazyParser(lazy2);
          if (!id) {
            const s3 = print(p, p.id);
            PARSER_STRINGS.set(p.id, s3);
            return s3;
          } else {
            return source.bold.blue(name);
          }
        }
        case "debug":
          return parserString;
      }
    })();
    s2 ?? (s2 = source.red.bold(name));
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
  const stateBgColor = !state.isError ? source.bgGreen : source.bgRed;
  const stateColor = !state.isError ? source.green : source.red;
  const finished = state.offset >= state.src.length;
  const stateSymbol = !state.isError ? finished ? "🎉" : "✓" : "ｘ";
  const stateName = !state.isError ? finished ? "Done" : "Ok" : "Err";
  const stateString = " " + stateName + " " + stateSymbol + " ";
  const header = group([
    stateBgColor.bold(stateString),
    stateColor(`	${name}	${state.offset}`),
    docExports.builders.softline,
    "	" + source.yellow(parserString)
  ]);
  const body = (() => {
    if (state.offset >= state.src.length) {
      return source.bold.greenBright(addCursor(state, "", state.isError));
    }
    return addCursor(state, "^", state.isError);
  })();
  const headerBody = group([header, docExports.builders.hardline, docExports.builders.indent([body])]);
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
    const map2 = (state) => {
      const newState = this.parser(state);
      if (!newState.isError || mapError) {
        return newState.ok(fn(newState.value));
      }
      return newState;
    };
    return new Parser(map2, createParserContext("map", this));
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
function isStringParsers(...parsers) {
  return parsers.every(
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
function concatStringParsers(parsers, delim = "", matchFunction) {
  const s = parsers.map((s2) => `(${stringParserValue(s2)})`).join(delim);
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
function any(...parsers) {
  if (isStringParsers(...parsers)) {
    return concatStringParsers(parsers, "|");
  }
  const any2 = (state) => {
    for (const parser of parsers) {
      const newState = parser.parser(state);
      if (!newState.isError) {
        return newState;
      }
    }
    mergeErrorState(state);
    return state.err(void 0);
  };
  return new Parser(
    parsers.length === 1 ? parsers[0].parser : any2,
    createParserContext("any", void 0, ...parsers)
  );
}
function all(...parsers) {
  const all2 = (state) => {
    const matches = [];
    for (const parser of parsers) {
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
    parsers.length === 1 ? parsers[0].parser : all2,
    createParserContext("all", void 0, ...parsers)
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
const defaultOptions = {
  debug: false,
  comments: true
};
class EBNFGrammar {
  constructor(options) {
    __publicField(this, "options");
    this.options = {
      ...defaultOptions,
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
  function visit(node2, stack) {
    if (stack.has(node2) || visited.has(node2)) {
      return;
    }
    stack.add(node2);
    const productionRule = ast.get(node2);
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
    visited.add(node2);
    stack.delete(node2);
    order.unshift(ast.get(node2));
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
        const parsers = expr.value.map((x) => generateParser(name, x));
        if (((_b = (_a = parsers.at(-1)) == null ? void 0 : _a.context) == null ? void 0 : _b.name) === "eof") {
          parsers.pop();
        }
        return all(...parsers);
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
const DOCUMENT_SELECTOR = {
  language: "bbnf",
  scheme: "file"
};
let LANGUAGE_CLIENT;
const testGrammarCache = /* @__PURE__ */ new Map();
const testGrammar = require$$0$9.commands.registerCommand(
  "extension.testGrammar",
  async () => {
    const editor = require$$0$9.window.activeTextEditor;
    if (!editor) {
      return;
    }
    const document = editor.document;
    const text = document.getText();
    if (text.length === 0) {
      return;
    }
    let nonterminals, ast;
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
    const nonterminalString = await require$$0$9.window.showInputBox({
      prompt: "Enter a nonterminal to test",
      placeHolder: "Type here...",
      value: cache.nonterminal
    });
    if (!nonterminalString || !nonterminals[nonterminalString]) {
      require$$0$9.window.showErrorMessage(
        `Nonterminal ${nonterminalString} not found`
      );
      return;
    }
    cache.nonterminal = nonterminalString;
    const testString = await require$$0$9.window.showInputBox({
      prompt: "Enter your test string",
      placeHolder: "Type here...",
      value: cache.testString
    });
    if (!testString) {
      require$$0$9.window.showErrorMessage("No test string provided");
      return;
    }
    cache.testString = testString;
    const parser = nonterminals[nonterminalString];
    const result = parser.parse(testString);
    if (!result) {
      require$$0$9.window.showInformationMessage("No match X");
    } else {
      require$$0$9.window.showInformationMessage(`Matched ✓: ${result}`);
    }
  }
);
function activate(context) {
  const serverModule = context.asAbsolutePath(
    path$3.join("server", "out", "server.js")
  );
  const serverOptions = {
    run: { module: serverModule, transport: nodeExports.TransportKind.ipc },
    debug: {
      module: serverModule,
      transport: nodeExports.TransportKind.ipc
    }
  };
  const clientOptions = {
    // Register the server for plain text documents
    documentSelector: [DOCUMENT_SELECTOR],
    synchronize: {
      // Notify the server about file changes to '.clientrc files contained in the workspace
      fileEvents: require$$0$9.workspace.createFileSystemWatcher("**/.clientrc")
    }
  };
  LANGUAGE_CLIENT = new nodeExports.LanguageClient(
    "languageServerExample",
    "Language Server Example",
    serverOptions,
    clientOptions
  );
  LANGUAGE_CLIENT.start();
  context.subscriptions.push(testGrammar);
}
function deactivate() {
  if (!LANGUAGE_CLIENT) {
    return void 0;
  }
  return LANGUAGE_CLIENT.stop();
}
exports.activate = activate;
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
