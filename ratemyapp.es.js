import re, { useState as te } from "react";
var h = { exports: {} }, _ = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M;
function ne() {
  if (M) return _;
  M = 1;
  var u = Symbol.for("react.transitional.element"), R = Symbol.for("react.fragment");
  function E(l, a, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), a.key !== void 0 && (i = "" + a.key), "key" in a) {
      s = {};
      for (var f in a)
        f !== "key" && (s[f] = a[f]);
    } else s = a;
    return a = s.ref, {
      $$typeof: u,
      type: l,
      key: i,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return _.Fragment = R, _.jsx = E, _.jsxs = E, _;
}
var p = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function oe() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && function() {
    function u(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case O:
          return "Fragment";
        case J:
          return "Profiler";
        case q:
          return "StrictMode";
        case X:
          return "Suspense";
        case B:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case U:
            return "Portal";
          case V:
            return (e.displayName || "Context") + ".Provider";
          case z:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : u(e.type) || "Memo";
          case y:
            r = e._payload, e = e._init;
            try {
              return u(e(r));
            } catch {
            }
        }
      return null;
    }
    function R(e) {
      return "" + e;
    }
    function E(e) {
      try {
        R(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), R(e);
      }
    }
    function l(e) {
      if (e === O) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === y)
        return "<...>";
      try {
        var r = u(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = S.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(e) {
      if (C.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, r) {
      function t() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function w() {
      var e = u(this.type);
      return I[e] || (I[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function b(e, r, t, n, m, c, A, g) {
      return t = c.ref, e = {
        $$typeof: N,
        type: e,
        key: r,
        props: c,
        _owner: m
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: w
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: g
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function d(e, r, t, n, m, c, A, g) {
      var o = r.children;
      if (o !== void 0)
        if (n)
          if (K(o)) {
            for (n = 0; n < o.length; n++)
              P(o[n]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else P(o);
      if (C.call(r, "key")) {
        o = u(e);
        var v = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        n = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", F[o + n] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          v,
          o
        ), F[o + n] = !0);
      }
      if (o = null, t !== void 0 && (E(t), o = "" + t), i(r) && (E(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var x in r)
          x !== "key" && (t[x] = r[x]);
      } else t = r;
      return o && f(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), b(
        e,
        o,
        c,
        m,
        a(),
        t,
        A,
        g
      );
    }
    function P(e) {
      typeof e == "object" && e !== null && e.$$typeof === N && e._store && (e._store.validated = 1);
    }
    var k = re, N = Symbol.for("react.transitional.element"), U = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), V = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), S = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, K = Array.isArray, j = console.createTask ? console.createTask : function() {
      return null;
    };
    k = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var Y, I = {}, $ = k["react-stack-bottom-frame"].bind(
      k,
      s
    )(), L = j(l(s)), F = {};
    p.Fragment = O, p.jsx = function(e, r, t, n, m) {
      var c = 1e4 > S.recentlyCreatedOwnerStacks++;
      return d(
        e,
        r,
        t,
        !1,
        n,
        m,
        c ? Error("react-stack-top-frame") : $,
        c ? j(l(e)) : L
      );
    }, p.jsxs = function(e, r, t, n, m) {
      var c = 1e4 > S.recentlyCreatedOwnerStacks++;
      return d(
        e,
        r,
        t,
        !0,
        n,
        m,
        c ? Error("react-stack-top-frame") : $,
        c ? j(l(e)) : L
      );
    };
  }()), p;
}
var W;
function ae() {
  return W || (W = 1, process.env.NODE_ENV === "production" ? h.exports = ne() : h.exports = oe()), h.exports;
}
var T = ae();
const ce = ({
  totalStars: u = 5,
  rating: R = 0,
  onRatingChange: E = () => {
  },
  size: l = 24,
  color: a = "#facc15",
  className: s = ""
}) => {
  const [i, f] = te(0), w = ({ filled: b }) => /* @__PURE__ */ T.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: b ? a : "none", viewBox: "0 0 24 24", stroke: b ? a : "#d1d5db", strokeWidth: 2, width: l, height: l, className: "transition-colors duration-200", children: /* @__PURE__ */ T.jsx(
    "path",
    {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.91c.969 0 1.371 1.24.588 1.81l-3.974 2.888a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.974-2.888a1 1 0 00-1.176 0l-3.974 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.083 10.1c-.783-.57-.38-1.81.588-1.81h4.91a1 1 0 00.95-.69l1.518-4.674z"
    }
  ) });
  return /* @__PURE__ */ T.jsx("div", { className: `flex items-center gap-1 ${s}`, children: Array.from({ length: u }).map((b, d) => /* @__PURE__ */ T.jsx(
    "div",
    {
      className: "cursor-pointer",
      onMouseEnter: () => f(d),
      onMouseLeave: () => f(0),
      onClick: () => E(d + 1),
      children: /* @__PURE__ */ T.jsx(w, { filled: i !== 0 ? d <= i : d < R })
    },
    d
  )) });
};
export {
  ce as StarRating
};
