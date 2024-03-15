import L from "react";
function Se(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var ce = { exports: {} }, H = { exports: {} }, b = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var le;
function Oe() {
  if (le)
    return b;
  le = 1;
  var o = typeof Symbol == "function" && Symbol.for, x = o ? Symbol.for("react.element") : 60103, P = o ? Symbol.for("react.portal") : 60106, l = o ? Symbol.for("react.fragment") : 60107, S = o ? Symbol.for("react.strict_mode") : 60108, a = o ? Symbol.for("react.profiler") : 60114, O = o ? Symbol.for("react.provider") : 60109, c = o ? Symbol.for("react.context") : 60110, _ = o ? Symbol.for("react.async_mode") : 60111, g = o ? Symbol.for("react.concurrent_mode") : 60111, y = o ? Symbol.for("react.forward_ref") : 60112, T = o ? Symbol.for("react.suspense") : 60113, C = o ? Symbol.for("react.suspense_list") : 60120, w = o ? Symbol.for("react.memo") : 60115, q = o ? Symbol.for("react.lazy") : 60116, R = o ? Symbol.for("react.block") : 60121, I = o ? Symbol.for("react.fundamental") : 60117, Y = o ? Symbol.for("react.responder") : 60118, U = o ? Symbol.for("react.scope") : 60119;
  function j(t) {
    if (typeof t == "object" && t !== null) {
      var W = t.$$typeof;
      switch (W) {
        case x:
          switch (t = t.type, t) {
            case _:
            case g:
            case l:
            case a:
            case S:
            case T:
              return t;
            default:
              switch (t = t && t.$$typeof, t) {
                case c:
                case y:
                case q:
                case w:
                case O:
                  return t;
                default:
                  return W;
              }
          }
        case P:
          return W;
      }
    }
  }
  function A(t) {
    return j(t) === g;
  }
  return b.AsyncMode = _, b.ConcurrentMode = g, b.ContextConsumer = c, b.ContextProvider = O, b.Element = x, b.ForwardRef = y, b.Fragment = l, b.Lazy = q, b.Memo = w, b.Portal = P, b.Profiler = a, b.StrictMode = S, b.Suspense = T, b.isAsyncMode = function(t) {
    return A(t) || j(t) === _;
  }, b.isConcurrentMode = A, b.isContextConsumer = function(t) {
    return j(t) === c;
  }, b.isContextProvider = function(t) {
    return j(t) === O;
  }, b.isElement = function(t) {
    return typeof t == "object" && t !== null && t.$$typeof === x;
  }, b.isForwardRef = function(t) {
    return j(t) === y;
  }, b.isFragment = function(t) {
    return j(t) === l;
  }, b.isLazy = function(t) {
    return j(t) === q;
  }, b.isMemo = function(t) {
    return j(t) === w;
  }, b.isPortal = function(t) {
    return j(t) === P;
  }, b.isProfiler = function(t) {
    return j(t) === a;
  }, b.isStrictMode = function(t) {
    return j(t) === S;
  }, b.isSuspense = function(t) {
    return j(t) === T;
  }, b.isValidElementType = function(t) {
    return typeof t == "string" || typeof t == "function" || t === l || t === g || t === a || t === S || t === T || t === C || typeof t == "object" && t !== null && (t.$$typeof === q || t.$$typeof === w || t.$$typeof === O || t.$$typeof === c || t.$$typeof === y || t.$$typeof === I || t.$$typeof === Y || t.$$typeof === U || t.$$typeof === R);
  }, b.typeOf = j, b;
}
var h = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var de;
function Pe() {
  return de || (de = 1, process.env.NODE_ENV !== "production" && function() {
    var o = typeof Symbol == "function" && Symbol.for, x = o ? Symbol.for("react.element") : 60103, P = o ? Symbol.for("react.portal") : 60106, l = o ? Symbol.for("react.fragment") : 60107, S = o ? Symbol.for("react.strict_mode") : 60108, a = o ? Symbol.for("react.profiler") : 60114, O = o ? Symbol.for("react.provider") : 60109, c = o ? Symbol.for("react.context") : 60110, _ = o ? Symbol.for("react.async_mode") : 60111, g = o ? Symbol.for("react.concurrent_mode") : 60111, y = o ? Symbol.for("react.forward_ref") : 60112, T = o ? Symbol.for("react.suspense") : 60113, C = o ? Symbol.for("react.suspense_list") : 60120, w = o ? Symbol.for("react.memo") : 60115, q = o ? Symbol.for("react.lazy") : 60116, R = o ? Symbol.for("react.block") : 60121, I = o ? Symbol.for("react.fundamental") : 60117, Y = o ? Symbol.for("react.responder") : 60118, U = o ? Symbol.for("react.scope") : 60119;
    function j(r) {
      return typeof r == "string" || typeof r == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      r === l || r === g || r === a || r === S || r === T || r === C || typeof r == "object" && r !== null && (r.$$typeof === q || r.$$typeof === w || r.$$typeof === O || r.$$typeof === c || r.$$typeof === y || r.$$typeof === I || r.$$typeof === Y || r.$$typeof === U || r.$$typeof === R);
    }
    function A(r) {
      if (typeof r == "object" && r !== null) {
        var D = r.$$typeof;
        switch (D) {
          case x:
            var V = r.type;
            switch (V) {
              case _:
              case g:
              case l:
              case a:
              case S:
              case T:
                return V;
              default:
                var fe = V && V.$$typeof;
                switch (fe) {
                  case c:
                  case y:
                  case q:
                  case w:
                  case O:
                    return fe;
                  default:
                    return D;
                }
            }
          case P:
            return D;
        }
      }
    }
    var t = _, W = g, J = c, X = O, G = x, K = y, B = l, Z = q, Q = w, z = P, ee = a, k = S, F = T, N = !1;
    function re(r) {
      return N || (N = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(r) || A(r) === _;
    }
    function e(r) {
      return A(r) === g;
    }
    function n(r) {
      return A(r) === c;
    }
    function d(r) {
      return A(r) === O;
    }
    function u(r) {
      return typeof r == "object" && r !== null && r.$$typeof === x;
    }
    function i(r) {
      return A(r) === y;
    }
    function p(r) {
      return A(r) === l;
    }
    function s(r) {
      return A(r) === q;
    }
    function f(r) {
      return A(r) === w;
    }
    function v(r) {
      return A(r) === P;
    }
    function E(r) {
      return A(r) === a;
    }
    function m(r) {
      return A(r) === S;
    }
    function $(r) {
      return A(r) === T;
    }
    h.AsyncMode = t, h.ConcurrentMode = W, h.ContextConsumer = J, h.ContextProvider = X, h.Element = G, h.ForwardRef = K, h.Fragment = B, h.Lazy = Z, h.Memo = Q, h.Portal = z, h.Profiler = ee, h.StrictMode = k, h.Suspense = F, h.isAsyncMode = re, h.isConcurrentMode = e, h.isContextConsumer = n, h.isContextProvider = d, h.isElement = u, h.isForwardRef = i, h.isFragment = p, h.isLazy = s, h.isMemo = f, h.isPortal = v, h.isProfiler = E, h.isStrictMode = m, h.isSuspense = $, h.isValidElementType = j, h.typeOf = A;
  }()), h;
}
var ye;
function Ee() {
  return ye || (ye = 1, process.env.NODE_ENV === "production" ? H.exports = Oe() : H.exports = Pe()), H.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var te, pe;
function _e() {
  if (pe)
    return te;
  pe = 1;
  var o = Object.getOwnPropertySymbols, x = Object.prototype.hasOwnProperty, P = Object.prototype.propertyIsEnumerable;
  function l(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function S() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var O = {}, c = 0; c < 10; c++)
        O["_" + String.fromCharCode(c)] = c;
      var _ = Object.getOwnPropertyNames(O).map(function(y) {
        return O[y];
      });
      if (_.join("") !== "0123456789")
        return !1;
      var g = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(y) {
        g[y] = y;
      }), Object.keys(Object.assign({}, g)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return te = S() ? Object.assign : function(a, O) {
    for (var c, _ = l(a), g, y = 1; y < arguments.length; y++) {
      c = Object(arguments[y]);
      for (var T in c)
        x.call(c, T) && (_[T] = c[T]);
      if (o) {
        g = o(c);
        for (var C = 0; C < g.length; C++)
          P.call(c, g[C]) && (_[g[C]] = c[g[C]]);
      }
    }
    return _;
  }, te;
}
var ne, ve;
function ue() {
  if (ve)
    return ne;
  ve = 1;
  var o = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ne = o, ne;
}
var oe, me;
function ge() {
  return me || (me = 1, oe = Function.call.bind(Object.prototype.hasOwnProperty)), oe;
}
var ie, be;
function Re() {
  if (be)
    return ie;
  be = 1;
  var o = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var x = ue(), P = {}, l = ge();
    o = function(a) {
      var O = "Warning: " + a;
      typeof console < "u" && console.error(O);
      try {
        throw new Error(O);
      } catch {
      }
    };
  }
  function S(a, O, c, _, g) {
    if (process.env.NODE_ENV !== "production") {
      for (var y in a)
        if (l(a, y)) {
          var T;
          try {
            if (typeof a[y] != "function") {
              var C = Error(
                (_ || "React class") + ": " + c + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw C.name = "Invariant Violation", C;
            }
            T = a[y](O, y, _, c, null, x);
          } catch (q) {
            T = q;
          }
          if (T && !(T instanceof Error) && o(
            (_ || "React class") + ": type specification of " + c + " `" + y + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof T + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), T instanceof Error && !(T.message in P)) {
            P[T.message] = !0;
            var w = g ? g() : "";
            o(
              "Failed " + c + " type: " + T.message + (w ?? "")
            );
          }
        }
    }
  }
  return S.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (P = {});
  }, ie = S, ie;
}
var ae, he;
function Ce() {
  if (he)
    return ae;
  he = 1;
  var o = Ee(), x = _e(), P = ue(), l = ge(), S = Re(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(c) {
    var _ = "Warning: " + c;
    typeof console < "u" && console.error(_);
    try {
      throw new Error(_);
    } catch {
    }
  });
  function O() {
    return null;
  }
  return ae = function(c, _) {
    var g = typeof Symbol == "function" && Symbol.iterator, y = "@@iterator";
    function T(e) {
      var n = e && (g && e[g] || e[y]);
      if (typeof n == "function")
        return n;
    }
    var C = "<<anonymous>>", w = {
      array: Y("array"),
      bigint: Y("bigint"),
      bool: Y("boolean"),
      func: Y("function"),
      number: Y("number"),
      object: Y("object"),
      string: Y("string"),
      symbol: Y("symbol"),
      any: U(),
      arrayOf: j,
      element: A(),
      elementType: t(),
      instanceOf: W,
      node: K(),
      objectOf: X,
      oneOf: J,
      oneOfType: G,
      shape: Z,
      exact: Q
    };
    function q(e, n) {
      return e === n ? e !== 0 || 1 / e === 1 / n : e !== e && n !== n;
    }
    function R(e, n) {
      this.message = e, this.data = n && typeof n == "object" ? n : {}, this.stack = "";
    }
    R.prototype = Error.prototype;
    function I(e) {
      if (process.env.NODE_ENV !== "production")
        var n = {}, d = 0;
      function u(p, s, f, v, E, m, $) {
        if (v = v || C, m = m || f, $ !== P) {
          if (_) {
            var r = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw r.name = "Invariant Violation", r;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var D = v + ":" + f;
            !n[D] && // Avoid spamming the console because they are often not actionable except for lib authors
            d < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + m + "` prop on `" + v + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), n[D] = !0, d++);
          }
        }
        return s[f] == null ? p ? s[f] === null ? new R("The " + E + " `" + m + "` is marked as required " + ("in `" + v + "`, but its value is `null`.")) : new R("The " + E + " `" + m + "` is marked as required in " + ("`" + v + "`, but its value is `undefined`.")) : null : e(s, f, v, E, m);
      }
      var i = u.bind(null, !1);
      return i.isRequired = u.bind(null, !0), i;
    }
    function Y(e) {
      function n(d, u, i, p, s, f) {
        var v = d[u], E = k(v);
        if (E !== e) {
          var m = F(v);
          return new R(
            "Invalid " + p + " `" + s + "` of type " + ("`" + m + "` supplied to `" + i + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return I(n);
    }
    function U() {
      return I(O);
    }
    function j(e) {
      function n(d, u, i, p, s) {
        if (typeof e != "function")
          return new R("Property `" + s + "` of component `" + i + "` has invalid PropType notation inside arrayOf.");
        var f = d[u];
        if (!Array.isArray(f)) {
          var v = k(f);
          return new R("Invalid " + p + " `" + s + "` of type " + ("`" + v + "` supplied to `" + i + "`, expected an array."));
        }
        for (var E = 0; E < f.length; E++) {
          var m = e(f, E, i, p, s + "[" + E + "]", P);
          if (m instanceof Error)
            return m;
        }
        return null;
      }
      return I(n);
    }
    function A() {
      function e(n, d, u, i, p) {
        var s = n[d];
        if (!c(s)) {
          var f = k(s);
          return new R("Invalid " + i + " `" + p + "` of type " + ("`" + f + "` supplied to `" + u + "`, expected a single ReactElement."));
        }
        return null;
      }
      return I(e);
    }
    function t() {
      function e(n, d, u, i, p) {
        var s = n[d];
        if (!o.isValidElementType(s)) {
          var f = k(s);
          return new R("Invalid " + i + " `" + p + "` of type " + ("`" + f + "` supplied to `" + u + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return I(e);
    }
    function W(e) {
      function n(d, u, i, p, s) {
        if (!(d[u] instanceof e)) {
          var f = e.name || C, v = re(d[u]);
          return new R("Invalid " + p + " `" + s + "` of type " + ("`" + v + "` supplied to `" + i + "`, expected ") + ("instance of `" + f + "`."));
        }
        return null;
      }
      return I(n);
    }
    function J(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), O;
      function n(d, u, i, p, s) {
        for (var f = d[u], v = 0; v < e.length; v++)
          if (q(f, e[v]))
            return null;
        var E = JSON.stringify(e, function($, r) {
          var D = F(r);
          return D === "symbol" ? String(r) : r;
        });
        return new R("Invalid " + p + " `" + s + "` of value `" + String(f) + "` " + ("supplied to `" + i + "`, expected one of " + E + "."));
      }
      return I(n);
    }
    function X(e) {
      function n(d, u, i, p, s) {
        if (typeof e != "function")
          return new R("Property `" + s + "` of component `" + i + "` has invalid PropType notation inside objectOf.");
        var f = d[u], v = k(f);
        if (v !== "object")
          return new R("Invalid " + p + " `" + s + "` of type " + ("`" + v + "` supplied to `" + i + "`, expected an object."));
        for (var E in f)
          if (l(f, E)) {
            var m = e(f, E, i, p, s + "." + E, P);
            if (m instanceof Error)
              return m;
          }
        return null;
      }
      return I(n);
    }
    function G(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), O;
      for (var n = 0; n < e.length; n++) {
        var d = e[n];
        if (typeof d != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + N(d) + " at index " + n + "."
          ), O;
      }
      function u(i, p, s, f, v) {
        for (var E = [], m = 0; m < e.length; m++) {
          var $ = e[m], r = $(i, p, s, f, v, P);
          if (r == null)
            return null;
          r.data && l(r.data, "expectedType") && E.push(r.data.expectedType);
        }
        var D = E.length > 0 ? ", expected one of type [" + E.join(", ") + "]" : "";
        return new R("Invalid " + f + " `" + v + "` supplied to " + ("`" + s + "`" + D + "."));
      }
      return I(u);
    }
    function K() {
      function e(n, d, u, i, p) {
        return z(n[d]) ? null : new R("Invalid " + i + " `" + p + "` supplied to " + ("`" + u + "`, expected a ReactNode."));
      }
      return I(e);
    }
    function B(e, n, d, u, i) {
      return new R(
        (e || "React class") + ": " + n + " type `" + d + "." + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + i + "`."
      );
    }
    function Z(e) {
      function n(d, u, i, p, s) {
        var f = d[u], v = k(f);
        if (v !== "object")
          return new R("Invalid " + p + " `" + s + "` of type `" + v + "` " + ("supplied to `" + i + "`, expected `object`."));
        for (var E in e) {
          var m = e[E];
          if (typeof m != "function")
            return B(i, p, s, E, F(m));
          var $ = m(f, E, i, p, s + "." + E, P);
          if ($)
            return $;
        }
        return null;
      }
      return I(n);
    }
    function Q(e) {
      function n(d, u, i, p, s) {
        var f = d[u], v = k(f);
        if (v !== "object")
          return new R("Invalid " + p + " `" + s + "` of type `" + v + "` " + ("supplied to `" + i + "`, expected `object`."));
        var E = x({}, d[u], e);
        for (var m in E) {
          var $ = e[m];
          if (l(e, m) && typeof $ != "function")
            return B(i, p, s, m, F($));
          if (!$)
            return new R(
              "Invalid " + p + " `" + s + "` key `" + m + "` supplied to `" + i + "`.\nBad object: " + JSON.stringify(d[u], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var r = $(f, m, i, p, s + "." + m, P);
          if (r)
            return r;
        }
        return null;
      }
      return I(n);
    }
    function z(e) {
      switch (typeof e) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !e;
        case "object":
          if (Array.isArray(e))
            return e.every(z);
          if (e === null || c(e))
            return !0;
          var n = T(e);
          if (n) {
            var d = n.call(e), u;
            if (n !== e.entries) {
              for (; !(u = d.next()).done; )
                if (!z(u.value))
                  return !1;
            } else
              for (; !(u = d.next()).done; ) {
                var i = u.value;
                if (i && !z(i[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ee(e, n) {
      return e === "symbol" ? !0 : n ? n["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && n instanceof Symbol : !1;
    }
    function k(e) {
      var n = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : ee(n, e) ? "symbol" : n;
    }
    function F(e) {
      if (typeof e > "u" || e === null)
        return "" + e;
      var n = k(e);
      if (n === "object") {
        if (e instanceof Date)
          return "date";
        if (e instanceof RegExp)
          return "regexp";
      }
      return n;
    }
    function N(e) {
      var n = F(e);
      switch (n) {
        case "array":
        case "object":
          return "an " + n;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + n;
        default:
          return n;
      }
    }
    function re(e) {
      return !e.constructor || !e.constructor.name ? C : e.constructor.name;
    }
    return w.checkPropTypes = S, w.resetWarningCache = S.resetWarningCache, w.PropTypes = w, w;
  }, ae;
}
var se, Te;
function we() {
  if (Te)
    return se;
  Te = 1;
  var o = ue();
  function x() {
  }
  function P() {
  }
  return P.resetWarningCache = x, se = function() {
    function l(O, c, _, g, y, T) {
      if (T !== o) {
        var C = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw C.name = "Invariant Violation", C;
      }
    }
    l.isRequired = l;
    function S() {
      return l;
    }
    var a = {
      array: l,
      bigint: l,
      bool: l,
      func: l,
      number: l,
      object: l,
      string: l,
      symbol: l,
      any: l,
      arrayOf: S,
      element: l,
      elementType: l,
      instanceOf: S,
      node: l,
      objectOf: S,
      oneOf: S,
      oneOfType: S,
      shape: S,
      exact: S,
      checkPropTypes: P,
      resetWarningCache: x
    };
    return a.PropTypes = a, a;
  }, se;
}
if (process.env.NODE_ENV !== "production") {
  var xe = Ee(), Ae = !0;
  ce.exports = Ce()(xe.isElement, Ae);
} else
  ce.exports = we()();
var je = ce.exports;
const M = /* @__PURE__ */ Se(je), Ie = ({
  isOpen: o,
  onClose: x,
  modalWidth: P,
  modalBackgroundColor: l,
  modalBorderColor: S,
  modalTitle: a,
  modalTitleColor: O,
  modalTitleFontSize: c,
  modalTitleFontWeight: _,
  modalTitleFont: g,
  closeButtonColor: y,
  closeButtonSize: T,
  lineColor: C,
  children: w
}) => o ? /* @__PURE__ */ L.createElement("div", null, /* @__PURE__ */ L.createElement("div", { className: "modal-overlay", onClick: x }), /* @__PURE__ */ L.createElement(
  "div",
  {
    className: "modal",
    style: {
      backgroundColor: l,
      width: P,
      borderColor: S
    }
  },
  /* @__PURE__ */ L.createElement("div", { className: "modal-header", style: { borderColor: C } }, /* @__PURE__ */ L.createElement(
    "h2",
    {
      style: {
        color: O,
        fontSize: c,
        fontWeight: _,
        fontFamily: g
      }
    },
    a
  ), /* @__PURE__ */ L.createElement(
    "button",
    {
      onClick: x,
      className: "close-button",
      style: { color: y, fontSize: T }
    },
    "X"
  )),
  /* @__PURE__ */ L.createElement("div", { className: "modal-content" }, w)
)) : null;
Ie.propTypes = {
  isOpen: M.bool.isRequired,
  onClose: M.func.isRequired,
  modalWidth: M.string,
  modalBackgroundColor: M.string,
  modalBorderColor: M.string,
  modalTitle: M.string,
  modalTitleColor: M.string,
  modalTitleFontSize: M.string,
  modalTitleFontWeight: M.string,
  modalTitleFont: M.string,
  closeButtonColor: M.string,
  closeButtonSize: M.string,
  lineColor: M.string,
  children: M.node
};
export {
  Ie as default
};
