var Og = Object.defineProperty;
var Ag = (e, t, n) =>
  t in e
    ? Og(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Cl = (e, t, n) => Ag(e, typeof t != "symbol" ? t + "" : t, n);
function Tg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function sm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Dg(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            },
      );
    }),
    n
  );
}
var am = { exports: {} },
  Pa = {},
  lm = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oo = Symbol.for("react.element"),
  Mg = Symbol.for("react.portal"),
  Ng = Symbol.for("react.fragment"),
  $g = Symbol.for("react.strict_mode"),
  Ig = Symbol.for("react.profiler"),
  zg = Symbol.for("react.provider"),
  Lg = Symbol.for("react.context"),
  Bg = Symbol.for("react.forward_ref"),
  Fg = Symbol.for("react.suspense"),
  Hg = Symbol.for("react.memo"),
  Ug = Symbol.for("react.lazy"),
  bf = Symbol.iterator;
function Vg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bf && e[bf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var um = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  cm = Object.assign,
  dm = {};
function ui(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = dm),
    (this.updater = n || um);
}
ui.prototype.isReactComponent = {};
ui.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ui.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function fm() {}
fm.prototype = ui.prototype;
function Oc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = dm),
    (this.updater = n || um);
}
var Ac = (Oc.prototype = new fm());
Ac.constructor = Oc;
cm(Ac, ui.prototype);
Ac.isPureReactComponent = !0;
var _f = Array.isArray,
  pm = Object.prototype.hasOwnProperty,
  Tc = { current: null },
  hm = { key: !0, ref: !0, __self: !0, __source: !0 };
function mm(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      pm.call(t, r) && !hm.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Oo,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Tc.current,
  };
}
function Wg(e, t) {
  return {
    $$typeof: Oo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Dc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Oo;
}
function Qg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var jf = /\/+/g;
function Rl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Qg("" + e.key)
    : t.toString(36);
}
function xs(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Oo:
          case Mg:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Rl(s, 0) : r),
      _f(i)
        ? ((n = ""),
          e != null && (n = e.replace(jf, "$&/") + "/"),
          xs(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Dc(i) &&
            (i = Wg(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(jf, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), _f(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + Rl(o, a);
      s += xs(o, t, n, l, i);
    }
  else if (((l = Vg(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + Rl(o, a++)), (s += xs(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return s;
}
function Xo(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    xs(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Gg(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ie = { current: null },
  ws = { transition: null },
  qg = {
    ReactCurrentDispatcher: Ie,
    ReactCurrentBatchConfig: ws,
    ReactCurrentOwner: Tc,
  };
function ym() {
  throw Error("act(...) is not supported in production builds of React.");
}
V.Children = {
  map: Xo,
  forEach: function (e, t, n) {
    Xo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Xo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Xo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Dc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
V.Component = ui;
V.Fragment = Ng;
V.Profiler = Ig;
V.PureComponent = Oc;
V.StrictMode = $g;
V.Suspense = Fg;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qg;
V.act = ym;
V.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = cm({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Tc.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      pm.call(t, l) &&
        !hm.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Oo, type: e.type, key: i, ref: o, props: r, _owner: s };
};
V.createContext = function (e) {
  return (
    (e = {
      $$typeof: Lg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: zg, _context: e }),
    (e.Consumer = e)
  );
};
V.createElement = mm;
V.createFactory = function (e) {
  var t = mm.bind(null, e);
  return (t.type = e), t;
};
V.createRef = function () {
  return { current: null };
};
V.forwardRef = function (e) {
  return { $$typeof: Bg, render: e };
};
V.isValidElement = Dc;
V.lazy = function (e) {
  return { $$typeof: Ug, _payload: { _status: -1, _result: e }, _init: Gg };
};
V.memo = function (e, t) {
  return { $$typeof: Hg, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
  var t = ws.transition;
  ws.transition = {};
  try {
    e();
  } finally {
    ws.transition = t;
  }
};
V.unstable_act = ym;
V.useCallback = function (e, t) {
  return Ie.current.useCallback(e, t);
};
V.useContext = function (e) {
  return Ie.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
  return Ie.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
  return Ie.current.useEffect(e, t);
};
V.useId = function () {
  return Ie.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
  return Ie.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
  return Ie.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
  return Ie.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
  return Ie.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
  return Ie.current.useReducer(e, t, n);
};
V.useRef = function (e) {
  return Ie.current.useRef(e);
};
V.useState = function (e) {
  return Ie.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
  return Ie.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
  return Ie.current.useTransition();
};
V.version = "18.3.1";
lm.exports = V;
var R = lm.exports;
const pn = sm(R),
  Ur = Tg({ __proto__: null, default: pn }, [R]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kg = R,
  Xg = Symbol.for("react.element"),
  Yg = Symbol.for("react.fragment"),
  Jg = Object.prototype.hasOwnProperty,
  Zg = Kg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  e1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function vm(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Jg.call(t, r) && !e1.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Xg,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Zg.current,
  };
}
Pa.Fragment = Yg;
Pa.jsx = vm;
Pa.jsxs = vm;
am.exports = Pa;
var x = am.exports,
  fu = {},
  gm = { exports: {} },
  it = {},
  Sm = { exports: {} },
  xm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(A, I) {
    var $ = A.length;
    A.push(I);
    e: for (; 0 < $; ) {
      var H = ($ - 1) >>> 1,
        U = A[H];
      if (0 < i(U, I)) (A[H] = I), (A[$] = U), ($ = H);
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var I = A[0],
      $ = A.pop();
    if ($ !== I) {
      A[0] = $;
      e: for (var H = 0, U = A.length, Z = U >>> 1; H < Z; ) {
        var X = 2 * (H + 1) - 1,
          me = A[X],
          qe = X + 1,
          Vt = A[qe];
        if (0 > i(me, $))
          qe < U && 0 > i(Vt, me)
            ? ((A[H] = Vt), (A[qe] = $), (H = qe))
            : ((A[H] = me), (A[X] = $), (H = X));
        else if (qe < U && 0 > i(Vt, $)) (A[H] = Vt), (A[qe] = $), (H = qe);
        else break e;
      }
    }
    return I;
  }
  function i(A, I) {
    var $ = A.sortIndex - I.sortIndex;
    return $ !== 0 ? $ : A.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    v = !1,
    S = !1,
    m = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(A) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= A)
        r(u), (I.sortIndex = I.expirationTime), t(l, I);
      else break;
      I = n(u);
    }
  }
  function g(A) {
    if (((m = !1), h(A), !S))
      if (n(l) !== null) (S = !0), F(C);
      else {
        var I = n(u);
        I !== null && W(g, I.startTime - A);
      }
  }
  function C(A, I) {
    (S = !1), m && ((m = !1), y(P), (P = -1)), (v = !0);
    var $ = d;
    try {
      for (
        h(I), f = n(l);
        f !== null && (!(f.expirationTime > I) || (A && !j()));

      ) {
        var H = f.callback;
        if (typeof H == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var U = H(f.expirationTime <= I);
          (I = e.unstable_now()),
            typeof U == "function" ? (f.callback = U) : f === n(l) && r(l),
            h(I);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var Z = !0;
      else {
        var X = n(u);
        X !== null && W(g, X.startTime - I), (Z = !1);
      }
      return Z;
    } finally {
      (f = null), (d = $), (v = !1);
    }
  }
  var E = !1,
    k = null,
    P = -1,
    _ = 5,
    b = -1;
  function j() {
    return !(e.unstable_now() - b < _);
  }
  function O() {
    if (k !== null) {
      var A = e.unstable_now();
      b = A;
      var I = !0;
      try {
        I = k(!0, A);
      } finally {
        I ? D() : ((E = !1), (k = null));
      }
    } else E = !1;
  }
  var D;
  if (typeof p == "function")
    D = function () {
      p(O);
    };
  else if (typeof MessageChannel < "u") {
    var T = new MessageChannel(),
      z = T.port2;
    (T.port1.onmessage = O),
      (D = function () {
        z.postMessage(null);
      });
  } else
    D = function () {
      w(O, 0);
    };
  function F(A) {
    (k = A), E || ((E = !0), D());
  }
  function W(A, I) {
    P = w(function () {
      A(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || v || ((S = !0), F(C));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (_ = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (A) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = d;
      }
      var $ = d;
      d = I;
      try {
        return A();
      } finally {
        d = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, I) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var $ = d;
      d = A;
      try {
        return I();
      } finally {
        d = $;
      }
    }),
    (e.unstable_scheduleCallback = function (A, I, $) {
      var H = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? H + $ : H))
          : ($ = H),
        A)
      ) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3;
      }
      return (
        (U = $ + U),
        (A = {
          id: c++,
          callback: I,
          priorityLevel: A,
          startTime: $,
          expirationTime: U,
          sortIndex: -1,
        }),
        $ > H
          ? ((A.sortIndex = $),
            t(u, A),
            n(l) === null &&
              A === n(u) &&
              (m ? (y(P), (P = -1)) : (m = !0), W(g, $ - H)))
          : ((A.sortIndex = U), t(l, A), S || v || ((S = !0), F(C))),
        A
      );
    }),
    (e.unstable_shouldYield = j),
    (e.unstable_wrapCallback = function (A) {
      var I = d;
      return function () {
        var $ = d;
        d = I;
        try {
          return A.apply(this, arguments);
        } finally {
          d = $;
        }
      };
    });
})(xm);
Sm.exports = xm;
var t1 = Sm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var n1 = R,
  tt = t1;
function M(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var wm = new Set(),
  Zi = {};
function ur(e, t) {
  Vr(e, t), Vr(e + "Capture", t);
}
function Vr(e, t) {
  for (Zi[e] = t, e = 0; e < t.length; e++) wm.add(t[e]);
}
var Yt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  pu = Object.prototype.hasOwnProperty,
  r1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Of = {},
  Af = {};
function i1(e) {
  return pu.call(Af, e)
    ? !0
    : pu.call(Of, e)
      ? !1
      : r1.test(e)
        ? (Af[e] = !0)
        : ((Of[e] = !0), !1);
}
function o1(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function s1(e, t, n, r) {
  if (t === null || typeof t > "u" || o1(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ze(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var _e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    _e[e] = new ze(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  _e[t] = new ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  _e[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  _e[e] = new ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    _e[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  _e[e] = new ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  _e[e] = new ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  _e[e] = new ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  _e[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Mc = /[\-:]([a-z])/g;
function Nc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Mc, Nc);
    _e[t] = new ze(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Mc, Nc);
    _e[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Mc, Nc);
  _e[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  _e[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_e.xlinkHref = new ze(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  _e[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $c(e, t, n, r) {
  var i = _e.hasOwnProperty(t) ? _e[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (s1(t, n, i, r) && (n = null),
    r || i === null
      ? i1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var on = n1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Yo = Symbol.for("react.element"),
  kr = Symbol.for("react.portal"),
  Er = Symbol.for("react.fragment"),
  Ic = Symbol.for("react.strict_mode"),
  hu = Symbol.for("react.profiler"),
  km = Symbol.for("react.provider"),
  Em = Symbol.for("react.context"),
  zc = Symbol.for("react.forward_ref"),
  mu = Symbol.for("react.suspense"),
  yu = Symbol.for("react.suspense_list"),
  Lc = Symbol.for("react.memo"),
  un = Symbol.for("react.lazy"),
  Cm = Symbol.for("react.offscreen"),
  Tf = Symbol.iterator;
function yi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Tf && e[Tf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ae = Object.assign,
  Pl;
function ji(e) {
  if (Pl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Pl = (t && t[1]) || "";
    }
  return (
    `
` +
    Pl +
    e
  );
}
var bl = !1;
function _l(e, t) {
  if (!e || bl) return "";
  bl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (bl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ji(e) : "";
}
function a1(e) {
  switch (e.tag) {
    case 5:
      return ji(e.type);
    case 16:
      return ji("Lazy");
    case 13:
      return ji("Suspense");
    case 19:
      return ji("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = _l(e.type, !1)), e;
    case 11:
      return (e = _l(e.type.render, !1)), e;
    case 1:
      return (e = _l(e.type, !0)), e;
    default:
      return "";
  }
}
function vu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Er:
      return "Fragment";
    case kr:
      return "Portal";
    case hu:
      return "Profiler";
    case Ic:
      return "StrictMode";
    case mu:
      return "Suspense";
    case yu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Em:
        return (e.displayName || "Context") + ".Consumer";
      case km:
        return (e._context.displayName || "Context") + ".Provider";
      case zc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Lc:
        return (
          (t = e.displayName || null), t !== null ? t : vu(e.type) || "Memo"
        );
      case un:
        (t = e._payload), (e = e._init);
        try {
          return vu(e(t));
        } catch {}
    }
  return null;
}
function l1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return vu(t);
    case 8:
      return t === Ic ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Pn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Rm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function u1(e) {
  var t = Rm(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Jo(e) {
  e._valueTracker || (e._valueTracker = u1(e));
}
function Pm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Rm(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function zs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function gu(e, t) {
  var n = t.checked;
  return ae({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Df(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Pn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function bm(e, t) {
  (t = t.checked), t != null && $c(e, "checked", t, !1);
}
function Su(e, t) {
  bm(e, t);
  var n = Pn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? xu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && xu(e, t.type, Pn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Mf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function xu(e, t, n) {
  (t !== "number" || zs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Oi = Array.isArray;
function Mr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Pn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function wu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return ae({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Nf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(M(92));
      if (Oi(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Pn(n) };
}
function _m(e, t) {
  var n = Pn(t.value),
    r = Pn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function $f(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function jm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ku(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? jm(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Zo,
  Om = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Zo = Zo || document.createElement("div"),
          Zo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Zo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function eo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var $i = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  c1 = ["Webkit", "ms", "Moz", "O"];
Object.keys($i).forEach(function (e) {
  c1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($i[t] = $i[e]);
  });
});
function Am(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || ($i.hasOwnProperty(e) && $i[e])
      ? ("" + t).trim()
      : t + "px";
}
function Tm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Am(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var d1 = ae(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Eu(e, t) {
  if (t) {
    if (d1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
  }
}
function Cu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ru = null;
function Bc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Pu = null,
  Nr = null,
  $r = null;
function If(e) {
  if ((e = Do(e))) {
    if (typeof Pu != "function") throw Error(M(280));
    var t = e.stateNode;
    t && ((t = Aa(t)), Pu(e.stateNode, e.type, t));
  }
}
function Dm(e) {
  Nr ? ($r ? $r.push(e) : ($r = [e])) : (Nr = e);
}
function Mm() {
  if (Nr) {
    var e = Nr,
      t = $r;
    if ((($r = Nr = null), If(e), t)) for (e = 0; e < t.length; e++) If(t[e]);
  }
}
function Nm(e, t) {
  return e(t);
}
function $m() {}
var jl = !1;
function Im(e, t, n) {
  if (jl) return e(t, n);
  jl = !0;
  try {
    return Nm(e, t, n);
  } finally {
    (jl = !1), (Nr !== null || $r !== null) && ($m(), Mm());
  }
}
function to(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Aa(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(M(231, t, typeof n));
  return n;
}
var bu = !1;
if (Yt)
  try {
    var vi = {};
    Object.defineProperty(vi, "passive", {
      get: function () {
        bu = !0;
      },
    }),
      window.addEventListener("test", vi, vi),
      window.removeEventListener("test", vi, vi);
  } catch {
    bu = !1;
  }
function f1(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ii = !1,
  Ls = null,
  Bs = !1,
  _u = null,
  p1 = {
    onError: function (e) {
      (Ii = !0), (Ls = e);
    },
  };
function h1(e, t, n, r, i, o, s, a, l) {
  (Ii = !1), (Ls = null), f1.apply(p1, arguments);
}
function m1(e, t, n, r, i, o, s, a, l) {
  if ((h1.apply(this, arguments), Ii)) {
    if (Ii) {
      var u = Ls;
      (Ii = !1), (Ls = null);
    } else throw Error(M(198));
    Bs || ((Bs = !0), (_u = u));
  }
}
function cr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function zm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function zf(e) {
  if (cr(e) !== e) throw Error(M(188));
}
function y1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = cr(e)), t === null)) throw Error(M(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return zf(i), e;
        if (o === r) return zf(i), t;
        o = o.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function Lm(e) {
  return (e = y1(e)), e !== null ? Bm(e) : null;
}
function Bm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Bm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Fm = tt.unstable_scheduleCallback,
  Lf = tt.unstable_cancelCallback,
  v1 = tt.unstable_shouldYield,
  g1 = tt.unstable_requestPaint,
  pe = tt.unstable_now,
  S1 = tt.unstable_getCurrentPriorityLevel,
  Fc = tt.unstable_ImmediatePriority,
  Hm = tt.unstable_UserBlockingPriority,
  Fs = tt.unstable_NormalPriority,
  x1 = tt.unstable_LowPriority,
  Um = tt.unstable_IdlePriority,
  ba = null,
  $t = null;
function w1(e) {
  if ($t && typeof $t.onCommitFiberRoot == "function")
    try {
      $t.onCommitFiberRoot(ba, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ct = Math.clz32 ? Math.clz32 : C1,
  k1 = Math.log,
  E1 = Math.LN2;
function C1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((k1(e) / E1) | 0)) | 0;
}
var es = 64,
  ts = 4194304;
function Ai(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Hs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Ai(a)) : ((o &= s), o !== 0 && (r = Ai(o)));
  } else (s = n & ~i), s !== 0 ? (r = Ai(s)) : o !== 0 && (r = Ai(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ct(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function R1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function P1(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Ct(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (!(a & n) || a & r) && (i[s] = R1(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function ju(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Vm() {
  var e = es;
  return (es <<= 1), !(es & 4194240) && (es = 64), e;
}
function Ol(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ao(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ct(t)),
    (e[t] = n);
}
function b1(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ct(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Hc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ct(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var Y = 0;
function Wm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Qm,
  Uc,
  Gm,
  qm,
  Km,
  Ou = !1,
  ns = [],
  vn = null,
  gn = null,
  Sn = null,
  no = new Map(),
  ro = new Map(),
  dn = [],
  _1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Bf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      vn = null;
      break;
    case "dragenter":
    case "dragleave":
      gn = null;
      break;
    case "mouseover":
    case "mouseout":
      Sn = null;
      break;
    case "pointerover":
    case "pointerout":
      no.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ro.delete(t.pointerId);
  }
}
function gi(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Do(t)), t !== null && Uc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function j1(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (vn = gi(vn, e, t, n, r, i)), !0;
    case "dragenter":
      return (gn = gi(gn, e, t, n, r, i)), !0;
    case "mouseover":
      return (Sn = gi(Sn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return no.set(o, gi(no.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), ro.set(o, gi(ro.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Xm(e) {
  var t = Qn(e.target);
  if (t !== null) {
    var n = cr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = zm(n)), t !== null)) {
          (e.blockedOn = t),
            Km(e.priority, function () {
              Gm(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ks(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Au(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ru = r), n.target.dispatchEvent(r), (Ru = null);
    } else return (t = Do(n)), t !== null && Uc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ff(e, t, n) {
  ks(e) && n.delete(t);
}
function O1() {
  (Ou = !1),
    vn !== null && ks(vn) && (vn = null),
    gn !== null && ks(gn) && (gn = null),
    Sn !== null && ks(Sn) && (Sn = null),
    no.forEach(Ff),
    ro.forEach(Ff);
}
function Si(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ou ||
      ((Ou = !0),
      tt.unstable_scheduleCallback(tt.unstable_NormalPriority, O1)));
}
function io(e) {
  function t(i) {
    return Si(i, e);
  }
  if (0 < ns.length) {
    Si(ns[0], e);
    for (var n = 1; n < ns.length; n++) {
      var r = ns[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    vn !== null && Si(vn, e),
      gn !== null && Si(gn, e),
      Sn !== null && Si(Sn, e),
      no.forEach(t),
      ro.forEach(t),
      n = 0;
    n < dn.length;
    n++
  )
    (r = dn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < dn.length && ((n = dn[0]), n.blockedOn === null); )
    Xm(n), n.blockedOn === null && dn.shift();
}
var Ir = on.ReactCurrentBatchConfig,
  Us = !0;
function A1(e, t, n, r) {
  var i = Y,
    o = Ir.transition;
  Ir.transition = null;
  try {
    (Y = 1), Vc(e, t, n, r);
  } finally {
    (Y = i), (Ir.transition = o);
  }
}
function T1(e, t, n, r) {
  var i = Y,
    o = Ir.transition;
  Ir.transition = null;
  try {
    (Y = 4), Vc(e, t, n, r);
  } finally {
    (Y = i), (Ir.transition = o);
  }
}
function Vc(e, t, n, r) {
  if (Us) {
    var i = Au(e, t, n, r);
    if (i === null) Bl(e, t, r, Vs, n), Bf(e, r);
    else if (j1(i, e, t, n, r)) r.stopPropagation();
    else if ((Bf(e, r), t & 4 && -1 < _1.indexOf(e))) {
      for (; i !== null; ) {
        var o = Do(i);
        if (
          (o !== null && Qm(o),
          (o = Au(e, t, n, r)),
          o === null && Bl(e, t, r, Vs, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Bl(e, t, r, null, n);
  }
}
var Vs = null;
function Au(e, t, n, r) {
  if (((Vs = null), (e = Bc(r)), (e = Qn(e)), e !== null))
    if (((t = cr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = zm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Vs = e), null;
}
function Ym(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (S1()) {
        case Fc:
          return 1;
        case Hm:
          return 4;
        case Fs:
        case x1:
          return 16;
        case Um:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var hn = null,
  Wc = null,
  Es = null;
function Jm() {
  if (Es) return Es;
  var e,
    t = Wc,
    n = t.length,
    r,
    i = "value" in hn ? hn.value : hn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Es = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Cs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function rs() {
  return !0;
}
function Hf() {
  return !1;
}
function ot(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? rs
        : Hf),
      (this.isPropagationStopped = Hf),
      this
    );
  }
  return (
    ae(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = rs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = rs));
      },
      persist: function () {},
      isPersistent: rs,
    }),
    t
  );
}
var ci = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Qc = ot(ci),
  To = ae({}, ci, { view: 0, detail: 0 }),
  D1 = ot(To),
  Al,
  Tl,
  xi,
  _a = ae({}, To, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Gc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== xi &&
            (xi && e.type === "mousemove"
              ? ((Al = e.screenX - xi.screenX), (Tl = e.screenY - xi.screenY))
              : (Tl = Al = 0),
            (xi = e)),
          Al);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Tl;
    },
  }),
  Uf = ot(_a),
  M1 = ae({}, _a, { dataTransfer: 0 }),
  N1 = ot(M1),
  $1 = ae({}, To, { relatedTarget: 0 }),
  Dl = ot($1),
  I1 = ae({}, ci, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  z1 = ot(I1),
  L1 = ae({}, ci, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  B1 = ot(L1),
  F1 = ae({}, ci, { data: 0 }),
  Vf = ot(F1),
  H1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  U1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  V1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function W1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = V1[e]) ? !!t[e] : !1;
}
function Gc() {
  return W1;
}
var Q1 = ae({}, To, {
    key: function (e) {
      if (e.key) {
        var t = H1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Cs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? U1[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Gc,
    charCode: function (e) {
      return e.type === "keypress" ? Cs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Cs(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  G1 = ot(Q1),
  q1 = ae({}, _a, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Wf = ot(q1),
  K1 = ae({}, To, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Gc,
  }),
  X1 = ot(K1),
  Y1 = ae({}, ci, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  J1 = ot(Y1),
  Z1 = ae({}, _a, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  eS = ot(Z1),
  tS = [9, 13, 27, 32],
  qc = Yt && "CompositionEvent" in window,
  zi = null;
Yt && "documentMode" in document && (zi = document.documentMode);
var nS = Yt && "TextEvent" in window && !zi,
  Zm = Yt && (!qc || (zi && 8 < zi && 11 >= zi)),
  Qf = " ",
  Gf = !1;
function ey(e, t) {
  switch (e) {
    case "keyup":
      return tS.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ty(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Cr = !1;
function rS(e, t) {
  switch (e) {
    case "compositionend":
      return ty(t);
    case "keypress":
      return t.which !== 32 ? null : ((Gf = !0), Qf);
    case "textInput":
      return (e = t.data), e === Qf && Gf ? null : e;
    default:
      return null;
  }
}
function iS(e, t) {
  if (Cr)
    return e === "compositionend" || (!qc && ey(e, t))
      ? ((e = Jm()), (Es = Wc = hn = null), (Cr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Zm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var oS = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function qf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!oS[e.type] : t === "textarea";
}
function ny(e, t, n, r) {
  Dm(r),
    (t = Ws(t, "onChange")),
    0 < t.length &&
      ((n = new Qc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Li = null,
  oo = null;
function sS(e) {
  py(e, 0);
}
function ja(e) {
  var t = br(e);
  if (Pm(t)) return e;
}
function aS(e, t) {
  if (e === "change") return t;
}
var ry = !1;
if (Yt) {
  var Ml;
  if (Yt) {
    var Nl = "oninput" in document;
    if (!Nl) {
      var Kf = document.createElement("div");
      Kf.setAttribute("oninput", "return;"),
        (Nl = typeof Kf.oninput == "function");
    }
    Ml = Nl;
  } else Ml = !1;
  ry = Ml && (!document.documentMode || 9 < document.documentMode);
}
function Xf() {
  Li && (Li.detachEvent("onpropertychange", iy), (oo = Li = null));
}
function iy(e) {
  if (e.propertyName === "value" && ja(oo)) {
    var t = [];
    ny(t, oo, e, Bc(e)), Im(sS, t);
  }
}
function lS(e, t, n) {
  e === "focusin"
    ? (Xf(), (Li = t), (oo = n), Li.attachEvent("onpropertychange", iy))
    : e === "focusout" && Xf();
}
function uS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ja(oo);
}
function cS(e, t) {
  if (e === "click") return ja(t);
}
function dS(e, t) {
  if (e === "input" || e === "change") return ja(t);
}
function fS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var _t = typeof Object.is == "function" ? Object.is : fS;
function so(e, t) {
  if (_t(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!pu.call(t, i) || !_t(e[i], t[i])) return !1;
  }
  return !0;
}
function Yf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Jf(e, t) {
  var n = Yf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Yf(n);
  }
}
function oy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? oy(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function sy() {
  for (var e = window, t = zs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = zs(e.document);
  }
  return t;
}
function Kc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function pS(e) {
  var t = sy(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    oy(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Kc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Jf(n, o));
        var s = Jf(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var hS = Yt && "documentMode" in document && 11 >= document.documentMode,
  Rr = null,
  Tu = null,
  Bi = null,
  Du = !1;
function Zf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Du ||
    Rr == null ||
    Rr !== zs(r) ||
    ((r = Rr),
    "selectionStart" in r && Kc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Bi && so(Bi, r)) ||
      ((Bi = r),
      (r = Ws(Tu, "onSelect")),
      0 < r.length &&
        ((t = new Qc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Rr))));
}
function is(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Pr = {
    animationend: is("Animation", "AnimationEnd"),
    animationiteration: is("Animation", "AnimationIteration"),
    animationstart: is("Animation", "AnimationStart"),
    transitionend: is("Transition", "TransitionEnd"),
  },
  $l = {},
  ay = {};
Yt &&
  ((ay = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Pr.animationend.animation,
    delete Pr.animationiteration.animation,
    delete Pr.animationstart.animation),
  "TransitionEvent" in window || delete Pr.transitionend.transition);
function Oa(e) {
  if ($l[e]) return $l[e];
  if (!Pr[e]) return e;
  var t = Pr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ay) return ($l[e] = t[n]);
  return e;
}
var ly = Oa("animationend"),
  uy = Oa("animationiteration"),
  cy = Oa("animationstart"),
  dy = Oa("transitionend"),
  fy = new Map(),
  ep =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function On(e, t) {
  fy.set(e, t), ur(t, [e]);
}
for (var Il = 0; Il < ep.length; Il++) {
  var zl = ep[Il],
    mS = zl.toLowerCase(),
    yS = zl[0].toUpperCase() + zl.slice(1);
  On(mS, "on" + yS);
}
On(ly, "onAnimationEnd");
On(uy, "onAnimationIteration");
On(cy, "onAnimationStart");
On("dblclick", "onDoubleClick");
On("focusin", "onFocus");
On("focusout", "onBlur");
On(dy, "onTransitionEnd");
Vr("onMouseEnter", ["mouseout", "mouseover"]);
Vr("onMouseLeave", ["mouseout", "mouseover"]);
Vr("onPointerEnter", ["pointerout", "pointerover"]);
Vr("onPointerLeave", ["pointerout", "pointerover"]);
ur(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
ur(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
ur("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ur(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
ur(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
ur(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Ti =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  vS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ti));
function tp(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), m1(r, t, void 0, e), (e.currentTarget = null);
}
function py(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          tp(i, a, u), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          tp(i, a, u), (o = l);
        }
    }
  }
  if (Bs) throw ((e = _u), (Bs = !1), (_u = null), e);
}
function te(e, t) {
  var n = t[zu];
  n === void 0 && (n = t[zu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (hy(t, e, 2, !1), n.add(r));
}
function Ll(e, t, n) {
  var r = 0;
  t && (r |= 4), hy(n, e, r, t);
}
var os = "_reactListening" + Math.random().toString(36).slice(2);
function ao(e) {
  if (!e[os]) {
    (e[os] = !0),
      wm.forEach(function (n) {
        n !== "selectionchange" && (vS.has(n) || Ll(n, !1, e), Ll(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[os] || ((t[os] = !0), Ll("selectionchange", !1, t));
  }
}
function hy(e, t, n, r) {
  switch (Ym(t)) {
    case 1:
      var i = A1;
      break;
    case 4:
      i = T1;
      break;
    default:
      i = Vc;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !bu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
}
function Bl(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Qn(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Im(function () {
    var u = o,
      c = Bc(n),
      f = [];
    e: {
      var d = fy.get(e);
      if (d !== void 0) {
        var v = Qc,
          S = e;
        switch (e) {
          case "keypress":
            if (Cs(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = G1;
            break;
          case "focusin":
            (S = "focus"), (v = Dl);
            break;
          case "focusout":
            (S = "blur"), (v = Dl);
            break;
          case "beforeblur":
          case "afterblur":
            v = Dl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Uf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = N1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = X1;
            break;
          case ly:
          case uy:
          case cy:
            v = z1;
            break;
          case dy:
            v = J1;
            break;
          case "scroll":
            v = D1;
            break;
          case "wheel":
            v = eS;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = B1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Wf;
        }
        var m = (t & 4) !== 0,
          w = !m && e === "scroll",
          y = m ? (d !== null ? d + "Capture" : null) : d;
        m = [];
        for (var p = u, h; p !== null; ) {
          h = p;
          var g = h.stateNode;
          if (
            (h.tag === 5 &&
              g !== null &&
              ((h = g),
              y !== null && ((g = to(p, y)), g != null && m.push(lo(p, g, h)))),
            w)
          )
            break;
          p = p.return;
        }
        0 < m.length &&
          ((d = new v(d, S, null, n, c)), f.push({ event: d, listeners: m }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Ru &&
            (S = n.relatedTarget || n.fromElement) &&
            (Qn(S) || S[Jt]))
        )
          break e;
        if (
          (v || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          v
            ? ((S = n.relatedTarget || n.toElement),
              (v = u),
              (S = S ? Qn(S) : null),
              S !== null &&
                ((w = cr(S)), S !== w || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((v = null), (S = u)),
          v !== S)
        ) {
          if (
            ((m = Uf),
            (g = "onMouseLeave"),
            (y = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((m = Wf),
              (g = "onPointerLeave"),
              (y = "onPointerEnter"),
              (p = "pointer")),
            (w = v == null ? d : br(v)),
            (h = S == null ? d : br(S)),
            (d = new m(g, p + "leave", v, n, c)),
            (d.target = w),
            (d.relatedTarget = h),
            (g = null),
            Qn(c) === u &&
              ((m = new m(y, p + "enter", S, n, c)),
              (m.target = h),
              (m.relatedTarget = w),
              (g = m)),
            (w = g),
            v && S)
          )
            t: {
              for (m = v, y = S, p = 0, h = m; h; h = fr(h)) p++;
              for (h = 0, g = y; g; g = fr(g)) h++;
              for (; 0 < p - h; ) (m = fr(m)), p--;
              for (; 0 < h - p; ) (y = fr(y)), h--;
              for (; p--; ) {
                if (m === y || (y !== null && m === y.alternate)) break t;
                (m = fr(m)), (y = fr(y));
              }
              m = null;
            }
          else m = null;
          v !== null && np(f, d, v, m, !1),
            S !== null && w !== null && np(f, w, S, m, !0);
        }
      }
      e: {
        if (
          ((d = u ? br(u) : window),
          (v = d.nodeName && d.nodeName.toLowerCase()),
          v === "select" || (v === "input" && d.type === "file"))
        )
          var C = aS;
        else if (qf(d))
          if (ry) C = dS;
          else {
            C = uS;
            var E = lS;
          }
        else
          (v = d.nodeName) &&
            v.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (C = cS);
        if (C && (C = C(e, u))) {
          ny(f, C, n, c);
          break e;
        }
        E && E(e, d, u),
          e === "focusout" &&
            (E = d._wrapperState) &&
            E.controlled &&
            d.type === "number" &&
            xu(d, "number", d.value);
      }
      switch (((E = u ? br(u) : window), e)) {
        case "focusin":
          (qf(E) || E.contentEditable === "true") &&
            ((Rr = E), (Tu = u), (Bi = null));
          break;
        case "focusout":
          Bi = Tu = Rr = null;
          break;
        case "mousedown":
          Du = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Du = !1), Zf(f, n, c);
          break;
        case "selectionchange":
          if (hS) break;
        case "keydown":
        case "keyup":
          Zf(f, n, c);
      }
      var k;
      if (qc)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Cr
          ? ey(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Zm &&
          n.locale !== "ko" &&
          (Cr || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Cr && (k = Jm())
            : ((hn = c),
              (Wc = "value" in hn ? hn.value : hn.textContent),
              (Cr = !0))),
        (E = Ws(u, P)),
        0 < E.length &&
          ((P = new Vf(P, e, null, n, c)),
          f.push({ event: P, listeners: E }),
          k ? (P.data = k) : ((k = ty(n)), k !== null && (P.data = k)))),
        (k = nS ? rS(e, n) : iS(e, n)) &&
          ((u = Ws(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Vf("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = k)));
    }
    py(f, t);
  });
}
function lo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ws(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = to(e, n)),
      o != null && r.unshift(lo(e, o, i)),
      (o = to(e, t)),
      o != null && r.push(lo(e, o, i))),
      (e = e.return);
  }
  return r;
}
function fr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function np(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = to(n, o)), l != null && s.unshift(lo(n, l, a)))
        : i || ((l = to(n, o)), l != null && s.push(lo(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var gS = /\r\n?/g,
  SS = /\u0000|\uFFFD/g;
function rp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      gS,
      `
`,
    )
    .replace(SS, "");
}
function ss(e, t, n) {
  if (((t = rp(t)), rp(e) !== t && n)) throw Error(M(425));
}
function Qs() {}
var Mu = null,
  Nu = null;
function $u(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Iu = typeof setTimeout == "function" ? setTimeout : void 0,
  xS = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ip = typeof Promise == "function" ? Promise : void 0,
  wS =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ip < "u"
        ? function (e) {
            return ip.resolve(null).then(e).catch(kS);
          }
        : Iu;
function kS(e) {
  setTimeout(function () {
    throw e;
  });
}
function Fl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), io(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  io(t);
}
function xn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function op(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var di = Math.random().toString(36).slice(2),
  Nt = "__reactFiber$" + di,
  uo = "__reactProps$" + di,
  Jt = "__reactContainer$" + di,
  zu = "__reactEvents$" + di,
  ES = "__reactListeners$" + di,
  CS = "__reactHandles$" + di;
function Qn(e) {
  var t = e[Nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Jt] || n[Nt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = op(e); e !== null; ) {
          if ((n = e[Nt])) return n;
          e = op(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Do(e) {
  return (
    (e = e[Nt] || e[Jt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function br(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function Aa(e) {
  return e[uo] || null;
}
var Lu = [],
  _r = -1;
function An(e) {
  return { current: e };
}
function ne(e) {
  0 > _r || ((e.current = Lu[_r]), (Lu[_r] = null), _r--);
}
function ee(e, t) {
  _r++, (Lu[_r] = e.current), (e.current = t);
}
var bn = {},
  Me = An(bn),
  Fe = An(!1),
  er = bn;
function Wr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return bn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function He(e) {
  return (e = e.childContextTypes), e != null;
}
function Gs() {
  ne(Fe), ne(Me);
}
function sp(e, t, n) {
  if (Me.current !== bn) throw Error(M(168));
  ee(Me, t), ee(Fe, n);
}
function my(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(M(108, l1(e) || "Unknown", i));
  return ae({}, n, r);
}
function qs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || bn),
    (er = Me.current),
    ee(Me, e),
    ee(Fe, Fe.current),
    !0
  );
}
function ap(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  n
    ? ((e = my(e, t, er)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ne(Fe),
      ne(Me),
      ee(Me, e))
    : ne(Fe),
    ee(Fe, n);
}
var Qt = null,
  Ta = !1,
  Hl = !1;
function yy(e) {
  Qt === null ? (Qt = [e]) : Qt.push(e);
}
function RS(e) {
  (Ta = !0), yy(e);
}
function Tn() {
  if (!Hl && Qt !== null) {
    Hl = !0;
    var e = 0,
      t = Y;
    try {
      var n = Qt;
      for (Y = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Qt = null), (Ta = !1);
    } catch (i) {
      throw (Qt !== null && (Qt = Qt.slice(e + 1)), Fm(Fc, Tn), i);
    } finally {
      (Y = t), (Hl = !1);
    }
  }
  return null;
}
var jr = [],
  Or = 0,
  Ks = null,
  Xs = 0,
  at = [],
  lt = 0,
  tr = null,
  qt = 1,
  Kt = "";
function Bn(e, t) {
  (jr[Or++] = Xs), (jr[Or++] = Ks), (Ks = e), (Xs = t);
}
function vy(e, t, n) {
  (at[lt++] = qt), (at[lt++] = Kt), (at[lt++] = tr), (tr = e);
  var r = qt;
  e = Kt;
  var i = 32 - Ct(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Ct(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (qt = (1 << (32 - Ct(t) + i)) | (n << i) | r),
      (Kt = o + e);
  } else (qt = (1 << o) | (n << i) | r), (Kt = e);
}
function Xc(e) {
  e.return !== null && (Bn(e, 1), vy(e, 1, 0));
}
function Yc(e) {
  for (; e === Ks; )
    (Ks = jr[--Or]), (jr[Or] = null), (Xs = jr[--Or]), (jr[Or] = null);
  for (; e === tr; )
    (tr = at[--lt]),
      (at[lt] = null),
      (Kt = at[--lt]),
      (at[lt] = null),
      (qt = at[--lt]),
      (at[lt] = null);
}
var Ze = null,
  Ye = null,
  ie = !1,
  kt = null;
function gy(e, t) {
  var n = ct(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function lp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ze = e), (Ye = xn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ze = e), (Ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = tr !== null ? { id: qt, overflow: Kt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ct(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ze = e),
            (Ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Bu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fu(e) {
  if (ie) {
    var t = Ye;
    if (t) {
      var n = t;
      if (!lp(e, t)) {
        if (Bu(e)) throw Error(M(418));
        t = xn(n.nextSibling);
        var r = Ze;
        t && lp(e, t)
          ? gy(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ie = !1), (Ze = e));
      }
    } else {
      if (Bu(e)) throw Error(M(418));
      (e.flags = (e.flags & -4097) | 2), (ie = !1), (Ze = e);
    }
  }
}
function up(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ze = e;
}
function as(e) {
  if (e !== Ze) return !1;
  if (!ie) return up(e), (ie = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !$u(e.type, e.memoizedProps))),
    t && (t = Ye))
  ) {
    if (Bu(e)) throw (Sy(), Error(M(418)));
    for (; t; ) gy(e, t), (t = xn(t.nextSibling));
  }
  if ((up(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ye = xn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else Ye = Ze ? xn(e.stateNode.nextSibling) : null;
  return !0;
}
function Sy() {
  for (var e = Ye; e; ) e = xn(e.nextSibling);
}
function Qr() {
  (Ye = Ze = null), (ie = !1);
}
function Jc(e) {
  kt === null ? (kt = [e]) : kt.push(e);
}
var PS = on.ReactCurrentBatchConfig;
function wi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function ls(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      M(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function cp(e) {
  var t = e._init;
  return t(e._payload);
}
function xy(e) {
  function t(y, p) {
    if (e) {
      var h = y.deletions;
      h === null ? ((y.deletions = [p]), (y.flags |= 16)) : h.push(p);
    }
  }
  function n(y, p) {
    if (!e) return null;
    for (; p !== null; ) t(y, p), (p = p.sibling);
    return null;
  }
  function r(y, p) {
    for (y = new Map(); p !== null; )
      p.key !== null ? y.set(p.key, p) : y.set(p.index, p), (p = p.sibling);
    return y;
  }
  function i(y, p) {
    return (y = Cn(y, p)), (y.index = 0), (y.sibling = null), y;
  }
  function o(y, p, h) {
    return (
      (y.index = h),
      e
        ? ((h = y.alternate),
          h !== null
            ? ((h = h.index), h < p ? ((y.flags |= 2), p) : h)
            : ((y.flags |= 2), p))
        : ((y.flags |= 1048576), p)
    );
  }
  function s(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function a(y, p, h, g) {
    return p === null || p.tag !== 6
      ? ((p = Kl(h, y.mode, g)), (p.return = y), p)
      : ((p = i(p, h)), (p.return = y), p);
  }
  function l(y, p, h, g) {
    var C = h.type;
    return C === Er
      ? c(y, p, h.props.children, g, h.key)
      : p !== null &&
          (p.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === un &&
              cp(C) === p.type))
        ? ((g = i(p, h.props)), (g.ref = wi(y, p, h)), (g.return = y), g)
        : ((g = As(h.type, h.key, h.props, null, y.mode, g)),
          (g.ref = wi(y, p, h)),
          (g.return = y),
          g);
  }
  function u(y, p, h, g) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== h.containerInfo ||
      p.stateNode.implementation !== h.implementation
      ? ((p = Xl(h, y.mode, g)), (p.return = y), p)
      : ((p = i(p, h.children || [])), (p.return = y), p);
  }
  function c(y, p, h, g, C) {
    return p === null || p.tag !== 7
      ? ((p = Jn(h, y.mode, g, C)), (p.return = y), p)
      : ((p = i(p, h)), (p.return = y), p);
  }
  function f(y, p, h) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Kl("" + p, y.mode, h)), (p.return = y), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Yo:
          return (
            (h = As(p.type, p.key, p.props, null, y.mode, h)),
            (h.ref = wi(y, null, p)),
            (h.return = y),
            h
          );
        case kr:
          return (p = Xl(p, y.mode, h)), (p.return = y), p;
        case un:
          var g = p._init;
          return f(y, g(p._payload), h);
      }
      if (Oi(p) || yi(p))
        return (p = Jn(p, y.mode, h, null)), (p.return = y), p;
      ls(y, p);
    }
    return null;
  }
  function d(y, p, h, g) {
    var C = p !== null ? p.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return C !== null ? null : a(y, p, "" + h, g);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Yo:
          return h.key === C ? l(y, p, h, g) : null;
        case kr:
          return h.key === C ? u(y, p, h, g) : null;
        case un:
          return (C = h._init), d(y, p, C(h._payload), g);
      }
      if (Oi(h) || yi(h)) return C !== null ? null : c(y, p, h, g, null);
      ls(y, h);
    }
    return null;
  }
  function v(y, p, h, g, C) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (y = y.get(h) || null), a(p, y, "" + g, C);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Yo:
          return (y = y.get(g.key === null ? h : g.key) || null), l(p, y, g, C);
        case kr:
          return (y = y.get(g.key === null ? h : g.key) || null), u(p, y, g, C);
        case un:
          var E = g._init;
          return v(y, p, h, E(g._payload), C);
      }
      if (Oi(g) || yi(g)) return (y = y.get(h) || null), c(p, y, g, C, null);
      ls(p, g);
    }
    return null;
  }
  function S(y, p, h, g) {
    for (
      var C = null, E = null, k = p, P = (p = 0), _ = null;
      k !== null && P < h.length;
      P++
    ) {
      k.index > P ? ((_ = k), (k = null)) : (_ = k.sibling);
      var b = d(y, k, h[P], g);
      if (b === null) {
        k === null && (k = _);
        break;
      }
      e && k && b.alternate === null && t(y, k),
        (p = o(b, p, P)),
        E === null ? (C = b) : (E.sibling = b),
        (E = b),
        (k = _);
    }
    if (P === h.length) return n(y, k), ie && Bn(y, P), C;
    if (k === null) {
      for (; P < h.length; P++)
        (k = f(y, h[P], g)),
          k !== null &&
            ((p = o(k, p, P)), E === null ? (C = k) : (E.sibling = k), (E = k));
      return ie && Bn(y, P), C;
    }
    for (k = r(y, k); P < h.length; P++)
      (_ = v(k, y, P, h[P], g)),
        _ !== null &&
          (e && _.alternate !== null && k.delete(_.key === null ? P : _.key),
          (p = o(_, p, P)),
          E === null ? (C = _) : (E.sibling = _),
          (E = _));
    return (
      e &&
        k.forEach(function (j) {
          return t(y, j);
        }),
      ie && Bn(y, P),
      C
    );
  }
  function m(y, p, h, g) {
    var C = yi(h);
    if (typeof C != "function") throw Error(M(150));
    if (((h = C.call(h)), h == null)) throw Error(M(151));
    for (
      var E = (C = null), k = p, P = (p = 0), _ = null, b = h.next();
      k !== null && !b.done;
      P++, b = h.next()
    ) {
      k.index > P ? ((_ = k), (k = null)) : (_ = k.sibling);
      var j = d(y, k, b.value, g);
      if (j === null) {
        k === null && (k = _);
        break;
      }
      e && k && j.alternate === null && t(y, k),
        (p = o(j, p, P)),
        E === null ? (C = j) : (E.sibling = j),
        (E = j),
        (k = _);
    }
    if (b.done) return n(y, k), ie && Bn(y, P), C;
    if (k === null) {
      for (; !b.done; P++, b = h.next())
        (b = f(y, b.value, g)),
          b !== null &&
            ((p = o(b, p, P)), E === null ? (C = b) : (E.sibling = b), (E = b));
      return ie && Bn(y, P), C;
    }
    for (k = r(y, k); !b.done; P++, b = h.next())
      (b = v(k, y, P, b.value, g)),
        b !== null &&
          (e && b.alternate !== null && k.delete(b.key === null ? P : b.key),
          (p = o(b, p, P)),
          E === null ? (C = b) : (E.sibling = b),
          (E = b));
    return (
      e &&
        k.forEach(function (O) {
          return t(y, O);
        }),
      ie && Bn(y, P),
      C
    );
  }
  function w(y, p, h, g) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Er &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Yo:
          e: {
            for (var C = h.key, E = p; E !== null; ) {
              if (E.key === C) {
                if (((C = h.type), C === Er)) {
                  if (E.tag === 7) {
                    n(y, E.sibling),
                      (p = i(E, h.props.children)),
                      (p.return = y),
                      (y = p);
                    break e;
                  }
                } else if (
                  E.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === un &&
                    cp(C) === E.type)
                ) {
                  n(y, E.sibling),
                    (p = i(E, h.props)),
                    (p.ref = wi(y, E, h)),
                    (p.return = y),
                    (y = p);
                  break e;
                }
                n(y, E);
                break;
              } else t(y, E);
              E = E.sibling;
            }
            h.type === Er
              ? ((p = Jn(h.props.children, y.mode, g, h.key)),
                (p.return = y),
                (y = p))
              : ((g = As(h.type, h.key, h.props, null, y.mode, g)),
                (g.ref = wi(y, p, h)),
                (g.return = y),
                (y = g));
          }
          return s(y);
        case kr:
          e: {
            for (E = h.key; p !== null; ) {
              if (p.key === E)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === h.containerInfo &&
                  p.stateNode.implementation === h.implementation
                ) {
                  n(y, p.sibling),
                    (p = i(p, h.children || [])),
                    (p.return = y),
                    (y = p);
                  break e;
                } else {
                  n(y, p);
                  break;
                }
              else t(y, p);
              p = p.sibling;
            }
            (p = Xl(h, y.mode, g)), (p.return = y), (y = p);
          }
          return s(y);
        case un:
          return (E = h._init), w(y, p, E(h._payload), g);
      }
      if (Oi(h)) return S(y, p, h, g);
      if (yi(h)) return m(y, p, h, g);
      ls(y, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        p !== null && p.tag === 6
          ? (n(y, p.sibling), (p = i(p, h)), (p.return = y), (y = p))
          : (n(y, p), (p = Kl(h, y.mode, g)), (p.return = y), (y = p)),
        s(y))
      : n(y, p);
  }
  return w;
}
var Gr = xy(!0),
  wy = xy(!1),
  Ys = An(null),
  Js = null,
  Ar = null,
  Zc = null;
function ed() {
  Zc = Ar = Js = null;
}
function td(e) {
  var t = Ys.current;
  ne(Ys), (e._currentValue = t);
}
function Hu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function zr(e, t) {
  (Js = e),
    (Zc = Ar = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Be = !0), (e.firstContext = null));
}
function ht(e) {
  var t = e._currentValue;
  if (Zc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ar === null)) {
      if (Js === null) throw Error(M(308));
      (Ar = e), (Js.dependencies = { lanes: 0, firstContext: e });
    } else Ar = Ar.next = e;
  return t;
}
var Gn = null;
function nd(e) {
  Gn === null ? (Gn = [e]) : Gn.push(e);
}
function ky(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), nd(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Zt(e, r)
  );
}
function Zt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var cn = !1;
function rd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ey(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Xt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function wn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Q & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Zt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), nd(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Zt(e, n)
  );
}
function Rs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Hc(e, n);
  }
}
function dp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Zs(e, t, n, r) {
  var i = e.updateQueue;
  cn = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = l = null), (a = o);
    do {
      var d = a.lane,
        v = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var S = e,
            m = a;
          switch (((d = t), (v = n), m.tag)) {
            case 1:
              if (((S = m.payload), typeof S == "function")) {
                f = S.call(v, f, d);
                break e;
              }
              f = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = m.payload),
                (d = typeof S == "function" ? S.call(v, f, d) : S),
                d == null)
              )
                break e;
              f = ae({}, f, d);
              break e;
            case 2:
              cn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (v = {
          eventTime: v,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = v), (l = f)) : (c = c.next = v),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (rr |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function fp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(M(191, i));
        i.call(r);
      }
    }
}
var Mo = {},
  It = An(Mo),
  co = An(Mo),
  fo = An(Mo);
function qn(e) {
  if (e === Mo) throw Error(M(174));
  return e;
}
function id(e, t) {
  switch ((ee(fo, t), ee(co, e), ee(It, Mo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ku(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ku(t, e));
  }
  ne(It), ee(It, t);
}
function qr() {
  ne(It), ne(co), ne(fo);
}
function Cy(e) {
  qn(fo.current);
  var t = qn(It.current),
    n = ku(t, e.type);
  t !== n && (ee(co, e), ee(It, n));
}
function od(e) {
  co.current === e && (ne(It), ne(co));
}
var oe = An(0);
function ea(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ul = [];
function sd() {
  for (var e = 0; e < Ul.length; e++)
    Ul[e]._workInProgressVersionPrimary = null;
  Ul.length = 0;
}
var Ps = on.ReactCurrentDispatcher,
  Vl = on.ReactCurrentBatchConfig,
  nr = 0,
  se = null,
  ge = null,
  xe = null,
  ta = !1,
  Fi = !1,
  po = 0,
  bS = 0;
function Oe() {
  throw Error(M(321));
}
function ad(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!_t(e[n], t[n])) return !1;
  return !0;
}
function ld(e, t, n, r, i, o) {
  if (
    ((nr = o),
    (se = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ps.current = e === null || e.memoizedState === null ? AS : TS),
    (e = n(r, i)),
    Fi)
  ) {
    o = 0;
    do {
      if (((Fi = !1), (po = 0), 25 <= o)) throw Error(M(301));
      (o += 1),
        (xe = ge = null),
        (t.updateQueue = null),
        (Ps.current = DS),
        (e = n(r, i));
    } while (Fi);
  }
  if (
    ((Ps.current = na),
    (t = ge !== null && ge.next !== null),
    (nr = 0),
    (xe = ge = se = null),
    (ta = !1),
    t)
  )
    throw Error(M(300));
  return e;
}
function ud() {
  var e = po !== 0;
  return (po = 0), e;
}
function Tt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return xe === null ? (se.memoizedState = xe = e) : (xe = xe.next = e), xe;
}
function mt() {
  if (ge === null) {
    var e = se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = xe === null ? se.memoizedState : xe.next;
  if (t !== null) (xe = t), (ge = e);
  else {
    if (e === null) throw Error(M(310));
    (ge = e),
      (e = {
        memoizedState: ge.memoizedState,
        baseState: ge.baseState,
        baseQueue: ge.baseQueue,
        queue: ge.queue,
        next: null,
      }),
      xe === null ? (se.memoizedState = xe = e) : (xe = xe.next = e);
  }
  return xe;
}
function ho(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Wl(e) {
  var t = mt(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = ge,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((nr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (se.lanes |= c),
          (rr |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (s = r) : (l.next = a),
      _t(r, t.memoizedState) || (Be = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (se.lanes |= o), (rr |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ql(e) {
  var t = mt(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    _t(o, t.memoizedState) || (Be = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Ry() {}
function Py(e, t) {
  var n = se,
    r = mt(),
    i = t(),
    o = !_t(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Be = !0)),
    (r = r.queue),
    cd(jy.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (xe !== null && xe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      mo(9, _y.bind(null, n, r, i, t), void 0, null),
      we === null)
    )
      throw Error(M(349));
    nr & 30 || by(n, t, i);
  }
  return i;
}
function by(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (se.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function _y(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Oy(t) && Ay(e);
}
function jy(e, t, n) {
  return n(function () {
    Oy(t) && Ay(e);
  });
}
function Oy(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !_t(e, n);
  } catch {
    return !0;
  }
}
function Ay(e) {
  var t = Zt(e, 1);
  t !== null && Rt(t, e, 1, -1);
}
function pp(e) {
  var t = Tt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ho,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = OS.bind(null, se, e)),
    [t.memoizedState, e]
  );
}
function mo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (se.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ty() {
  return mt().memoizedState;
}
function bs(e, t, n, r) {
  var i = Tt();
  (se.flags |= e),
    (i.memoizedState = mo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Da(e, t, n, r) {
  var i = mt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ge !== null) {
    var s = ge.memoizedState;
    if (((o = s.destroy), r !== null && ad(r, s.deps))) {
      i.memoizedState = mo(t, n, o, r);
      return;
    }
  }
  (se.flags |= e), (i.memoizedState = mo(1 | t, n, o, r));
}
function hp(e, t) {
  return bs(8390656, 8, e, t);
}
function cd(e, t) {
  return Da(2048, 8, e, t);
}
function Dy(e, t) {
  return Da(4, 2, e, t);
}
function My(e, t) {
  return Da(4, 4, e, t);
}
function Ny(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function $y(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Da(4, 4, Ny.bind(null, t, e), n)
  );
}
function dd() {}
function Iy(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ad(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function zy(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ad(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ly(e, t, n) {
  return nr & 21
    ? (_t(n, t) || ((n = Vm()), (se.lanes |= n), (rr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Be = !0)), (e.memoizedState = n));
}
function _S(e, t) {
  var n = Y;
  (Y = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Vl.transition;
  Vl.transition = {};
  try {
    e(!1), t();
  } finally {
    (Y = n), (Vl.transition = r);
  }
}
function By() {
  return mt().memoizedState;
}
function jS(e, t, n) {
  var r = En(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Fy(e))
  )
    Hy(t, n);
  else if (((n = ky(e, t, n, r)), n !== null)) {
    var i = $e();
    Rt(n, e, r, i), Uy(n, t, r);
  }
}
function OS(e, t, n) {
  var r = En(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Fy(e)) Hy(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), _t(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), nd(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = ky(e, t, i, r)),
      n !== null && ((i = $e()), Rt(n, e, r, i), Uy(n, t, r));
  }
}
function Fy(e) {
  var t = e.alternate;
  return e === se || (t !== null && t === se);
}
function Hy(e, t) {
  Fi = ta = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Uy(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Hc(e, n);
  }
}
var na = {
    readContext: ht,
    useCallback: Oe,
    useContext: Oe,
    useEffect: Oe,
    useImperativeHandle: Oe,
    useInsertionEffect: Oe,
    useLayoutEffect: Oe,
    useMemo: Oe,
    useReducer: Oe,
    useRef: Oe,
    useState: Oe,
    useDebugValue: Oe,
    useDeferredValue: Oe,
    useTransition: Oe,
    useMutableSource: Oe,
    useSyncExternalStore: Oe,
    useId: Oe,
    unstable_isNewReconciler: !1,
  },
  AS = {
    readContext: ht,
    useCallback: function (e, t) {
      return (Tt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ht,
    useEffect: hp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        bs(4194308, 4, Ny.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return bs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return bs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Tt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Tt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = jS.bind(null, se, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Tt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: pp,
    useDebugValue: dd,
    useDeferredValue: function (e) {
      return (Tt().memoizedState = e);
    },
    useTransition: function () {
      var e = pp(!1),
        t = e[0];
      return (e = _S.bind(null, e[1])), (Tt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = se,
        i = Tt();
      if (ie) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (((n = t()), we === null)) throw Error(M(349));
        nr & 30 || by(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        hp(jy.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        mo(9, _y.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Tt(),
        t = we.identifierPrefix;
      if (ie) {
        var n = Kt,
          r = qt;
        (n = (r & ~(1 << (32 - Ct(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = po++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = bS++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  TS = {
    readContext: ht,
    useCallback: Iy,
    useContext: ht,
    useEffect: cd,
    useImperativeHandle: $y,
    useInsertionEffect: Dy,
    useLayoutEffect: My,
    useMemo: zy,
    useReducer: Wl,
    useRef: Ty,
    useState: function () {
      return Wl(ho);
    },
    useDebugValue: dd,
    useDeferredValue: function (e) {
      var t = mt();
      return Ly(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = Wl(ho)[0],
        t = mt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ry,
    useSyncExternalStore: Py,
    useId: By,
    unstable_isNewReconciler: !1,
  },
  DS = {
    readContext: ht,
    useCallback: Iy,
    useContext: ht,
    useEffect: cd,
    useImperativeHandle: $y,
    useInsertionEffect: Dy,
    useLayoutEffect: My,
    useMemo: zy,
    useReducer: Ql,
    useRef: Ty,
    useState: function () {
      return Ql(ho);
    },
    useDebugValue: dd,
    useDeferredValue: function (e) {
      var t = mt();
      return ge === null ? (t.memoizedState = e) : Ly(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = Ql(ho)[0],
        t = mt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ry,
    useSyncExternalStore: Py,
    useId: By,
    unstable_isNewReconciler: !1,
  };
function xt(e, t) {
  if (e && e.defaultProps) {
    (t = ae({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Uu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ae({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ma = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? cr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = $e(),
      i = En(e),
      o = Xt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = wn(e, o, i)),
      t !== null && (Rt(t, e, i, r), Rs(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = $e(),
      i = En(e),
      o = Xt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = wn(e, o, i)),
      t !== null && (Rt(t, e, i, r), Rs(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = $e(),
      r = En(e),
      i = Xt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = wn(e, i, r)),
      t !== null && (Rt(t, e, r, n), Rs(t, e, r));
  },
};
function mp(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !so(n, r) || !so(i, o)
        : !0
  );
}
function Vy(e, t, n) {
  var r = !1,
    i = bn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = ht(o))
      : ((i = He(t) ? er : Me.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Wr(e, i) : bn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ma),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function yp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ma.enqueueReplaceState(t, t.state, null);
}
function Vu(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), rd(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = ht(o))
    : ((o = He(t) ? er : Me.current), (i.context = Wr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Uu(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Ma.enqueueReplaceState(i, i.state, null),
      Zs(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Kr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += a1(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Gl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Wu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var MS = typeof WeakMap == "function" ? WeakMap : Map;
function Wy(e, t, n) {
  (n = Xt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ia || ((ia = !0), (tc = r)), Wu(e, t);
    }),
    n
  );
}
function Qy(e, t, n) {
  (n = Xt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Wu(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Wu(e, t),
          typeof r != "function" &&
            (kn === null ? (kn = new Set([this])) : kn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function vp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new MS();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = qS.bind(null, e, t, n)), t.then(e, e));
}
function gp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Sp(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Xt(-1, 1)), (t.tag = 2), wn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var NS = on.ReactCurrentOwner,
  Be = !1;
function Ne(e, t, n, r) {
  t.child = e === null ? wy(t, null, n, r) : Gr(t, e.child, n, r);
}
function xp(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    zr(t, i),
    (r = ld(e, t, n, r, o, i)),
    (n = ud()),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        en(e, t, i))
      : (ie && n && Xc(t), (t.flags |= 1), Ne(e, t, r, i), t.child)
  );
}
function wp(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Sd(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Gy(e, t, o, r, i))
      : ((e = As(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : so), n(s, r) && e.ref === t.ref)
    )
      return en(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Cn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Gy(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (so(o, r) && e.ref === t.ref)
      if (((Be = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Be = !0);
      else return (t.lanes = e.lanes), en(e, t, i);
  }
  return Qu(e, t, n, r, i);
}
function qy(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ee(Dr, Ke),
        (Ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ee(Dr, Ke),
          (Ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ee(Dr, Ke),
        (Ke |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ee(Dr, Ke),
      (Ke |= r);
  return Ne(e, t, i, n), t.child;
}
function Ky(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Qu(e, t, n, r, i) {
  var o = He(n) ? er : Me.current;
  return (
    (o = Wr(t, o)),
    zr(t, i),
    (n = ld(e, t, n, r, o, i)),
    (r = ud()),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        en(e, t, i))
      : (ie && r && Xc(t), (t.flags |= 1), Ne(e, t, n, i), t.child)
  );
}
function kp(e, t, n, r, i) {
  if (He(n)) {
    var o = !0;
    qs(t);
  } else o = !1;
  if ((zr(t, i), t.stateNode === null))
    _s(e, t), Vy(t, n, r), Vu(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ht(u))
      : ((u = He(n) ? er : Me.current), (u = Wr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && yp(t, s, r, u)),
      (cn = !1);
    var d = t.memoizedState;
    (s.state = d),
      Zs(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || Fe.current || cn
        ? (typeof c == "function" && (Uu(t, n, c, r), (l = t.memoizedState)),
          (a = cn || mp(t, n, a, r, d, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Ey(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : xt(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = ht(l))
        : ((l = He(n) ? er : Me.current), (l = Wr(t, l)));
    var v = n.getDerivedStateFromProps;
    (c =
      typeof v == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && yp(t, s, r, l)),
      (cn = !1),
      (d = t.memoizedState),
      (s.state = d),
      Zs(t, r, s, i);
    var S = t.memoizedState;
    a !== f || d !== S || Fe.current || cn
      ? (typeof v == "function" && (Uu(t, n, v, r), (S = t.memoizedState)),
        (u = cn || mp(t, n, u, r, d, S, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, S, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, S, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (s.props = r),
        (s.state = S),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Gu(e, t, n, r, o, i);
}
function Gu(e, t, n, r, i, o) {
  Ky(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && ap(t, n, !1), en(e, t, o);
  (r = t.stateNode), (NS.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Gr(t, e.child, null, o)), (t.child = Gr(t, null, a, o)))
      : Ne(e, t, a, o),
    (t.memoizedState = r.state),
    i && ap(t, n, !0),
    t.child
  );
}
function Xy(e) {
  var t = e.stateNode;
  t.pendingContext
    ? sp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && sp(e, t.context, !1),
    id(e, t.containerInfo);
}
function Ep(e, t, n, r, i) {
  return Qr(), Jc(i), (t.flags |= 256), Ne(e, t, n, r), t.child;
}
var qu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ku(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Yy(e, t, n) {
  var r = t.pendingProps,
    i = oe.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ee(oe, i & 1),
    e === null)
  )
    return (
      Fu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Ia(s, r, 0, null)),
              (e = Jn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ku(n)),
              (t.memoizedState = qu),
              e)
            : fd(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return $S(e, t, s, r, a, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Cn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = Cn(a, o)) : ((o = Jn(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Ku(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = qu),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Cn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function fd(e, t) {
  return (
    (t = Ia({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function us(e, t, n, r) {
  return (
    r !== null && Jc(r),
    Gr(t, e.child, null, n),
    (e = fd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function $S(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Gl(Error(M(422)))), us(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = Ia({ mode: "visible", children: r.children }, i, 0, null)),
          (o = Jn(o, i, s, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && Gr(t, e.child, null, s),
          (t.child.memoizedState = Ku(s)),
          (t.memoizedState = qu),
          o);
  if (!(t.mode & 1)) return us(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(M(419))), (r = Gl(o, r, void 0)), us(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Be || a)) {
    if (((r = we), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Zt(e, i), Rt(r, e, i, -1));
    }
    return gd(), (r = Gl(Error(M(421)))), us(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = KS.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ye = xn(i.nextSibling)),
      (Ze = t),
      (ie = !0),
      (kt = null),
      e !== null &&
        ((at[lt++] = qt),
        (at[lt++] = Kt),
        (at[lt++] = tr),
        (qt = e.id),
        (Kt = e.overflow),
        (tr = t)),
      (t = fd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Cp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Hu(e.return, t, n);
}
function ql(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Jy(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ne(e, t, r.children, n), (r = oe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Cp(e, n, t);
        else if (e.tag === 19) Cp(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ee(oe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && ea(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ql(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ea(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ql(t, !0, n, null, o);
        break;
      case "together":
        ql(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function _s(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function en(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (rr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Cn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Cn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function IS(e, t, n) {
  switch (t.tag) {
    case 3:
      Xy(t), Qr();
      break;
    case 5:
      Cy(t);
      break;
    case 1:
      He(t.type) && qs(t);
      break;
    case 4:
      id(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ee(Ys, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ee(oe, oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Yy(e, t, n)
            : (ee(oe, oe.current & 1),
              (e = en(e, t, n)),
              e !== null ? e.sibling : null);
      ee(oe, oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Jy(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ee(oe, oe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), qy(e, t, n);
  }
  return en(e, t, n);
}
var Zy, Xu, ev, tv;
Zy = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Xu = function () {};
ev = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), qn(It.current);
    var o = null;
    switch (n) {
      case "input":
        (i = gu(e, i)), (r = gu(e, r)), (o = []);
        break;
      case "select":
        (i = ae({}, i, { value: void 0 })),
          (r = ae({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = wu(e, i)), (r = wu(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Qs);
    }
    Eu(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Zi.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (o = o || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Zi.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && te("scroll", e),
                    o || a === l || (o = []))
                  : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
tv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ki(e, t) {
  if (!ie)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ae(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function zS(e, t, n) {
  var r = t.pendingProps;
  switch ((Yc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ae(t), null;
    case 1:
      return He(t.type) && Gs(), Ae(t), null;
    case 3:
      return (
        (r = t.stateNode),
        qr(),
        ne(Fe),
        ne(Me),
        sd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (as(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), kt !== null && (ic(kt), (kt = null)))),
        Xu(e, t),
        Ae(t),
        null
      );
    case 5:
      od(t);
      var i = qn(fo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ev(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return Ae(t), null;
        }
        if (((e = qn(It.current)), as(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Nt] = t), (r[uo] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              te("cancel", r), te("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              te("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Ti.length; i++) te(Ti[i], r);
              break;
            case "source":
              te("error", r);
              break;
            case "img":
            case "image":
            case "link":
              te("error", r), te("load", r);
              break;
            case "details":
              te("toggle", r);
              break;
            case "input":
              Df(r, o), te("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                te("invalid", r);
              break;
            case "textarea":
              Nf(r, o), te("invalid", r);
          }
          Eu(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      ss(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      ss(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Zi.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  te("scroll", r);
            }
          switch (n) {
            case "input":
              Jo(r), Mf(r, o, !0);
              break;
            case "textarea":
              Jo(r), $f(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Qs);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = jm(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Nt] = t),
            (e[uo] = r),
            Zy(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Cu(n, r)), n)) {
              case "dialog":
                te("cancel", e), te("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                te("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ti.length; i++) te(Ti[i], e);
                i = r;
                break;
              case "source":
                te("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                te("error", e), te("load", e), (i = r);
                break;
              case "details":
                te("toggle", e), (i = r);
                break;
              case "input":
                Df(e, r), (i = gu(e, r)), te("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ae({}, r, { value: void 0 })),
                  te("invalid", e);
                break;
              case "textarea":
                Nf(e, r), (i = wu(e, r)), te("invalid", e);
                break;
              default:
                i = r;
            }
            Eu(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? Tm(e, l)
                  : o === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Om(e, l))
                    : o === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && eo(e, l)
                        : typeof l == "number" && eo(e, "" + l)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Zi.hasOwnProperty(o)
                          ? l != null && o === "onScroll" && te("scroll", e)
                          : l != null && $c(e, o, l, s));
              }
            switch (n) {
              case "input":
                Jo(e), Mf(e, r, !1);
                break;
              case "textarea":
                Jo(e), $f(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Pn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Mr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Mr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Qs);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ae(t), null;
    case 6:
      if (e && t.stateNode != null) tv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
        if (((n = qn(fo.current)), qn(It.current), as(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Nt] = t),
            (o = r.nodeValue !== n) && ((e = Ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                ss(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ss(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Nt] = t),
            (t.stateNode = r);
      }
      return Ae(t), null;
    case 13:
      if (
        (ne(oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ie && Ye !== null && t.mode & 1 && !(t.flags & 128))
          Sy(), Qr(), (t.flags |= 98560), (o = !1);
        else if (((o = as(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(M(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(M(317));
            o[Nt] = t;
          } else
            Qr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ae(t), (o = !1);
        } else kt !== null && (ic(kt), (kt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || oe.current & 1 ? Se === 0 && (Se = 3) : gd())),
          t.updateQueue !== null && (t.flags |= 4),
          Ae(t),
          null);
    case 4:
      return (
        qr(), Xu(e, t), e === null && ao(t.stateNode.containerInfo), Ae(t), null
      );
    case 10:
      return td(t.type._context), Ae(t), null;
    case 17:
      return He(t.type) && Gs(), Ae(t), null;
    case 19:
      if ((ne(oe), (o = t.memoizedState), o === null)) return Ae(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) ki(o, !1);
        else {
          if (Se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ea(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ki(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ee(oe, (oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            pe() > Xr &&
            ((t.flags |= 128), (r = !0), ki(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ea(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ki(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !ie)
            )
              return Ae(t), null;
          } else
            2 * pe() - o.renderingStartTime > Xr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ki(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = pe()),
          (t.sibling = null),
          (n = oe.current),
          ee(oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ae(t), null);
    case 22:
    case 23:
      return (
        vd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ke & 1073741824 && (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ae(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function LS(e, t) {
  switch ((Yc(t), t.tag)) {
    case 1:
      return (
        He(t.type) && Gs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        qr(),
        ne(Fe),
        ne(Me),
        sd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return od(t), null;
    case 13:
      if (
        (ne(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(M(340));
        Qr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ne(oe), null;
    case 4:
      return qr(), null;
    case 10:
      return td(t.type._context), null;
    case 22:
    case 23:
      return vd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var cs = !1,
  De = !1,
  BS = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function Tr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ce(e, t, r);
      }
    else n.current = null;
}
function Yu(e, t, n) {
  try {
    n();
  } catch (r) {
    ce(e, t, r);
  }
}
var Rp = !1;
function FS(e, t) {
  if (((Mu = Us), (e = sy()), Kc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var v;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (v = f.firstChild) !== null;

            )
              (d = f), (f = v);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (a = s),
                d === o && ++c === r && (l = s),
                (v = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = v;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Nu = { focusedElem: e, selectionRange: n }, Us = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var m = S.memoizedProps,
                    w = S.memoizedState,
                    y = t.stateNode,
                    p = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? m : xt(t.type, m),
                      w,
                    );
                  y.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(M(163));
            }
        } catch (g) {
          ce(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (S = Rp), (Rp = !1), S;
}
function Hi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Yu(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Na(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ju(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function nv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), nv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Nt], delete t[uo], delete t[zu], delete t[ES], delete t[CS])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function rv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Pp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || rv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Zu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Qs));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Zu(e, t, n), e = e.sibling; e !== null; ) Zu(e, t, n), (e = e.sibling);
}
function ec(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ec(e, t, n), e = e.sibling; e !== null; ) ec(e, t, n), (e = e.sibling);
}
var Ce = null,
  wt = !1;
function an(e, t, n) {
  for (n = n.child; n !== null; ) iv(e, t, n), (n = n.sibling);
}
function iv(e, t, n) {
  if ($t && typeof $t.onCommitFiberUnmount == "function")
    try {
      $t.onCommitFiberUnmount(ba, n);
    } catch {}
  switch (n.tag) {
    case 5:
      De || Tr(n, t);
    case 6:
      var r = Ce,
        i = wt;
      (Ce = null),
        an(e, t, n),
        (Ce = r),
        (wt = i),
        Ce !== null &&
          (wt
            ? ((e = Ce),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ce.removeChild(n.stateNode));
      break;
    case 18:
      Ce !== null &&
        (wt
          ? ((e = Ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? Fl(e.parentNode, n)
              : e.nodeType === 1 && Fl(e, n),
            io(e))
          : Fl(Ce, n.stateNode));
      break;
    case 4:
      (r = Ce),
        (i = wt),
        (Ce = n.stateNode.containerInfo),
        (wt = !0),
        an(e, t, n),
        (Ce = r),
        (wt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !De &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Yu(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      an(e, t, n);
      break;
    case 1:
      if (
        !De &&
        (Tr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ce(n, t, a);
        }
      an(e, t, n);
      break;
    case 21:
      an(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((De = (r = De) || n.memoizedState !== null), an(e, t, n), (De = r))
        : an(e, t, n);
      break;
    default:
      an(e, t, n);
  }
}
function bp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new BS()),
      t.forEach(function (r) {
        var i = XS.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function St(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ce = a.stateNode), (wt = !1);
              break e;
            case 3:
              (Ce = a.stateNode.containerInfo), (wt = !0);
              break e;
            case 4:
              (Ce = a.stateNode.containerInfo), (wt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ce === null) throw Error(M(160));
        iv(o, s, i), (Ce = null), (wt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        ce(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ov(t, e), (t = t.sibling);
}
function ov(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((St(t, e), At(e), r & 4)) {
        try {
          Hi(3, e, e.return), Na(3, e);
        } catch (m) {
          ce(e, e.return, m);
        }
        try {
          Hi(5, e, e.return);
        } catch (m) {
          ce(e, e.return, m);
        }
      }
      break;
    case 1:
      St(t, e), At(e), r & 512 && n !== null && Tr(n, n.return);
      break;
    case 5:
      if (
        (St(t, e),
        At(e),
        r & 512 && n !== null && Tr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          eo(i, "");
        } catch (m) {
          ce(e, e.return, m);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && bm(i, o),
              Cu(a, s);
            var u = Cu(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === "style"
                ? Tm(i, f)
                : c === "dangerouslySetInnerHTML"
                  ? Om(i, f)
                  : c === "children"
                    ? eo(i, f)
                    : $c(i, c, f, u);
            }
            switch (a) {
              case "input":
                Su(i, o);
                break;
              case "textarea":
                _m(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? Mr(i, !!o.multiple, v, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Mr(i, !!o.multiple, o.defaultValue, !0)
                      : Mr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[uo] = o;
          } catch (m) {
            ce(e, e.return, m);
          }
      }
      break;
    case 6:
      if ((St(t, e), At(e), r & 4)) {
        if (e.stateNode === null) throw Error(M(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (m) {
          ce(e, e.return, m);
        }
      }
      break;
    case 3:
      if (
        (St(t, e), At(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          io(t.containerInfo);
        } catch (m) {
          ce(e, e.return, m);
        }
      break;
    case 4:
      St(t, e), At(e);
      break;
    case 13:
      St(t, e),
        At(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (md = pe())),
        r & 4 && bp(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((De = (u = De) || c), St(t, e), (De = u)) : St(t, e),
        At(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (L = e, c = e.child; c !== null; ) {
            for (f = L = c; L !== null; ) {
              switch (((d = L), (v = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hi(4, d, d.return);
                  break;
                case 1:
                  Tr(d, d.return);
                  var S = d.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (m) {
                      ce(r, n, m);
                    }
                  }
                  break;
                case 5:
                  Tr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    jp(f);
                    continue;
                  }
              }
              v !== null ? ((v.return = d), (L = v)) : jp(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Am("display", s)));
              } catch (m) {
                ce(e, e.return, m);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (m) {
                ce(e, e.return, m);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      St(t, e), At(e), r & 4 && bp(e);
      break;
    case 21:
      break;
    default:
      St(t, e), At(e);
  }
}
function At(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (rv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (eo(i, ""), (r.flags &= -33));
          var o = Pp(e);
          ec(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Pp(e);
          Zu(e, a, s);
          break;
        default:
          throw Error(M(161));
      }
    } catch (l) {
      ce(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function HS(e, t, n) {
  (L = e), sv(e);
}
function sv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var i = L,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || cs;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || De;
        a = cs;
        var u = De;
        if (((cs = s), (De = l) && !u))
          for (L = i; L !== null; )
            (s = L),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Op(i)
                : l !== null
                  ? ((l.return = s), (L = l))
                  : Op(i);
        for (; o !== null; ) (L = o), sv(o), (o = o.sibling);
        (L = i), (cs = a), (De = u);
      }
      _p(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (L = o)) : _p(e);
  }
}
function _p(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              De || Na(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !De)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : xt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && fp(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                fp(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && io(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(M(163));
          }
        De || (t.flags & 512 && Ju(t));
      } catch (d) {
        ce(t, t.return, d);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function jp(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Op(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Na(4, t);
          } catch (l) {
            ce(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ce(t, i, l);
            }
          }
          var o = t.return;
          try {
            Ju(t);
          } catch (l) {
            ce(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ju(t);
          } catch (l) {
            ce(t, s, l);
          }
      }
    } catch (l) {
      ce(t, t.return, l);
    }
    if (t === e) {
      L = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (L = a);
      break;
    }
    L = t.return;
  }
}
var US = Math.ceil,
  ra = on.ReactCurrentDispatcher,
  pd = on.ReactCurrentOwner,
  dt = on.ReactCurrentBatchConfig,
  Q = 0,
  we = null,
  ve = null,
  be = 0,
  Ke = 0,
  Dr = An(0),
  Se = 0,
  yo = null,
  rr = 0,
  $a = 0,
  hd = 0,
  Ui = null,
  Le = null,
  md = 0,
  Xr = 1 / 0,
  Wt = null,
  ia = !1,
  tc = null,
  kn = null,
  ds = !1,
  mn = null,
  oa = 0,
  Vi = 0,
  nc = null,
  js = -1,
  Os = 0;
function $e() {
  return Q & 6 ? pe() : js !== -1 ? js : (js = pe());
}
function En(e) {
  return e.mode & 1
    ? Q & 2 && be !== 0
      ? be & -be
      : PS.transition !== null
        ? (Os === 0 && (Os = Vm()), Os)
        : ((e = Y),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ym(e.type))),
          e)
    : 1;
}
function Rt(e, t, n, r) {
  if (50 < Vi) throw ((Vi = 0), (nc = null), Error(M(185)));
  Ao(e, n, r),
    (!(Q & 2) || e !== we) &&
      (e === we && (!(Q & 2) && ($a |= n), Se === 4 && fn(e, be)),
      Ue(e, r),
      n === 1 && Q === 0 && !(t.mode & 1) && ((Xr = pe() + 500), Ta && Tn()));
}
function Ue(e, t) {
  var n = e.callbackNode;
  P1(e, t);
  var r = Hs(e, e === we ? be : 0);
  if (r === 0)
    n !== null && Lf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Lf(n), t === 1))
      e.tag === 0 ? RS(Ap.bind(null, e)) : yy(Ap.bind(null, e)),
        wS(function () {
          !(Q & 6) && Tn();
        }),
        (n = null);
    else {
      switch (Wm(r)) {
        case 1:
          n = Fc;
          break;
        case 4:
          n = Hm;
          break;
        case 16:
          n = Fs;
          break;
        case 536870912:
          n = Um;
          break;
        default:
          n = Fs;
      }
      n = hv(n, av.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function av(e, t) {
  if (((js = -1), (Os = 0), Q & 6)) throw Error(M(327));
  var n = e.callbackNode;
  if (Lr() && e.callbackNode !== n) return null;
  var r = Hs(e, e === we ? be : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = sa(e, r);
  else {
    t = r;
    var i = Q;
    Q |= 2;
    var o = uv();
    (we !== e || be !== t) && ((Wt = null), (Xr = pe() + 500), Yn(e, t));
    do
      try {
        QS();
        break;
      } catch (a) {
        lv(e, a);
      }
    while (!0);
    ed(),
      (ra.current = o),
      (Q = i),
      ve !== null ? (t = 0) : ((we = null), (be = 0), (t = Se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ju(e)), i !== 0 && ((r = i), (t = rc(e, i)))), t === 1)
    )
      throw ((n = yo), Yn(e, 0), fn(e, r), Ue(e, pe()), n);
    if (t === 6) fn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !VS(i) &&
          ((t = sa(e, r)),
          t === 2 && ((o = ju(e)), o !== 0 && ((r = o), (t = rc(e, o)))),
          t === 1))
      )
        throw ((n = yo), Yn(e, 0), fn(e, r), Ue(e, pe()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          Fn(e, Le, Wt);
          break;
        case 3:
          if (
            (fn(e, r), (r & 130023424) === r && ((t = md + 500 - pe()), 10 < t))
          ) {
            if (Hs(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              $e(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Iu(Fn.bind(null, e, Le, Wt), t);
            break;
          }
          Fn(e, Le, Wt);
          break;
        case 4:
          if ((fn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Ct(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = pe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * US(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Iu(Fn.bind(null, e, Le, Wt), r);
            break;
          }
          Fn(e, Le, Wt);
          break;
        case 5:
          Fn(e, Le, Wt);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return Ue(e, pe()), e.callbackNode === n ? av.bind(null, e) : null;
}
function rc(e, t) {
  var n = Ui;
  return (
    e.current.memoizedState.isDehydrated && (Yn(e, t).flags |= 256),
    (e = sa(e, t)),
    e !== 2 && ((t = Le), (Le = n), t !== null && ic(t)),
    e
  );
}
function ic(e) {
  Le === null ? (Le = e) : Le.push.apply(Le, e);
}
function VS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!_t(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function fn(e, t) {
  for (
    t &= ~hd,
      t &= ~$a,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ct(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ap(e) {
  if (Q & 6) throw Error(M(327));
  Lr();
  var t = Hs(e, 0);
  if (!(t & 1)) return Ue(e, pe()), null;
  var n = sa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ju(e);
    r !== 0 && ((t = r), (n = rc(e, r)));
  }
  if (n === 1) throw ((n = yo), Yn(e, 0), fn(e, t), Ue(e, pe()), n);
  if (n === 6) throw Error(M(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Fn(e, Le, Wt),
    Ue(e, pe()),
    null
  );
}
function yd(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && ((Xr = pe() + 500), Ta && Tn());
  }
}
function ir(e) {
  mn !== null && mn.tag === 0 && !(Q & 6) && Lr();
  var t = Q;
  Q |= 1;
  var n = dt.transition,
    r = Y;
  try {
    if (((dt.transition = null), (Y = 1), e)) return e();
  } finally {
    (Y = r), (dt.transition = n), (Q = t), !(Q & 6) && Tn();
  }
}
function vd() {
  (Ke = Dr.current), ne(Dr);
}
function Yn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), xS(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch ((Yc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Gs();
          break;
        case 3:
          qr(), ne(Fe), ne(Me), sd();
          break;
        case 5:
          od(r);
          break;
        case 4:
          qr();
          break;
        case 13:
          ne(oe);
          break;
        case 19:
          ne(oe);
          break;
        case 10:
          td(r.type._context);
          break;
        case 22:
        case 23:
          vd();
      }
      n = n.return;
    }
  if (
    ((we = e),
    (ve = e = Cn(e.current, null)),
    (be = Ke = t),
    (Se = 0),
    (yo = null),
    (hd = $a = rr = 0),
    (Le = Ui = null),
    Gn !== null)
  ) {
    for (t = 0; t < Gn.length; t++)
      if (((n = Gn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Gn = null;
  }
  return e;
}
function lv(e, t) {
  do {
    var n = ve;
    try {
      if ((ed(), (Ps.current = na), ta)) {
        for (var r = se.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        ta = !1;
      }
      if (
        ((nr = 0),
        (xe = ge = se = null),
        (Fi = !1),
        (po = 0),
        (pd.current = null),
        n === null || n.return === null)
      ) {
        (Se = 1), (yo = t), (ve = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = be),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = gp(s);
          if (v !== null) {
            (v.flags &= -257),
              Sp(v, s, a, o, t),
              v.mode & 1 && vp(o, u, t),
              (t = v),
              (l = u);
            var S = t.updateQueue;
            if (S === null) {
              var m = new Set();
              m.add(l), (t.updateQueue = m);
            } else S.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              vp(o, u, t), gd();
              break e;
            }
            l = Error(M(426));
          }
        } else if (ie && a.mode & 1) {
          var w = gp(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              Sp(w, s, a, o, t),
              Jc(Kr(l, a));
            break e;
          }
        }
        (o = l = Kr(l, a)),
          Se !== 4 && (Se = 2),
          Ui === null ? (Ui = [o]) : Ui.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var y = Wy(o, l, t);
              dp(o, y);
              break e;
            case 1:
              a = l;
              var p = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (kn === null || !kn.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var g = Qy(o, a, t);
                dp(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      dv(n);
    } catch (C) {
      (t = C), ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function uv() {
  var e = ra.current;
  return (ra.current = na), e === null ? na : e;
}
function gd() {
  (Se === 0 || Se === 3 || Se === 2) && (Se = 4),
    we === null || (!(rr & 268435455) && !($a & 268435455)) || fn(we, be);
}
function sa(e, t) {
  var n = Q;
  Q |= 2;
  var r = uv();
  (we !== e || be !== t) && ((Wt = null), Yn(e, t));
  do
    try {
      WS();
      break;
    } catch (i) {
      lv(e, i);
    }
  while (!0);
  if ((ed(), (Q = n), (ra.current = r), ve !== null)) throw Error(M(261));
  return (we = null), (be = 0), Se;
}
function WS() {
  for (; ve !== null; ) cv(ve);
}
function QS() {
  for (; ve !== null && !v1(); ) cv(ve);
}
function cv(e) {
  var t = pv(e.alternate, e, Ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? dv(e) : (ve = t),
    (pd.current = null);
}
function dv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = LS(n, t)), n !== null)) {
        (n.flags &= 32767), (ve = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Se = 6), (ve = null);
        return;
      }
    } else if (((n = zS(n, t, Ke)), n !== null)) {
      ve = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  Se === 0 && (Se = 5);
}
function Fn(e, t, n) {
  var r = Y,
    i = dt.transition;
  try {
    (dt.transition = null), (Y = 1), GS(e, t, n, r);
  } finally {
    (dt.transition = i), (Y = r);
  }
  return null;
}
function GS(e, t, n, r) {
  do Lr();
  while (mn !== null);
  if (Q & 6) throw Error(M(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(M(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (b1(e, o),
    e === we && ((ve = we = null), (be = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ds ||
      ((ds = !0),
      hv(Fs, function () {
        return Lr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = dt.transition), (dt.transition = null);
    var s = Y;
    Y = 1;
    var a = Q;
    (Q |= 4),
      (pd.current = null),
      FS(e, n),
      ov(n, e),
      pS(Nu),
      (Us = !!Mu),
      (Nu = Mu = null),
      (e.current = n),
      HS(n),
      g1(),
      (Q = a),
      (Y = s),
      (dt.transition = o);
  } else e.current = n;
  if (
    (ds && ((ds = !1), (mn = e), (oa = i)),
    (o = e.pendingLanes),
    o === 0 && (kn = null),
    w1(n.stateNode),
    Ue(e, pe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ia) throw ((ia = !1), (e = tc), (tc = null), e);
  return (
    oa & 1 && e.tag !== 0 && Lr(),
    (o = e.pendingLanes),
    o & 1 ? (e === nc ? Vi++ : ((Vi = 0), (nc = e))) : (Vi = 0),
    Tn(),
    null
  );
}
function Lr() {
  if (mn !== null) {
    var e = Wm(oa),
      t = dt.transition,
      n = Y;
    try {
      if (((dt.transition = null), (Y = 16 > e ? 16 : e), mn === null))
        var r = !1;
      else {
        if (((e = mn), (mn = null), (oa = 0), Q & 6)) throw Error(M(331));
        var i = Q;
        for (Q |= 4, L = e.current; L !== null; ) {
          var o = L,
            s = o.child;
          if (L.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (L = u; L !== null; ) {
                  var c = L;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hi(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (L = f);
                  else
                    for (; L !== null; ) {
                      c = L;
                      var d = c.sibling,
                        v = c.return;
                      if ((nv(c), c === u)) {
                        L = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = v), (L = d);
                        break;
                      }
                      L = v;
                    }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var m = S.child;
                if (m !== null) {
                  S.child = null;
                  do {
                    var w = m.sibling;
                    (m.sibling = null), (m = w);
                  } while (m !== null);
                }
              }
              L = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (L = s);
          else
            e: for (; L !== null; ) {
              if (((o = L), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hi(9, o, o.return);
                }
              var y = o.sibling;
              if (y !== null) {
                (y.return = o.return), (L = y);
                break e;
              }
              L = o.return;
            }
        }
        var p = e.current;
        for (L = p; L !== null; ) {
          s = L;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null) (h.return = s), (L = h);
          else
            e: for (s = p; L !== null; ) {
              if (((a = L), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Na(9, a);
                  }
                } catch (C) {
                  ce(a, a.return, C);
                }
              if (a === s) {
                L = null;
                break e;
              }
              var g = a.sibling;
              if (g !== null) {
                (g.return = a.return), (L = g);
                break e;
              }
              L = a.return;
            }
        }
        if (
          ((Q = i), Tn(), $t && typeof $t.onPostCommitFiberRoot == "function")
        )
          try {
            $t.onPostCommitFiberRoot(ba, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Y = n), (dt.transition = t);
    }
  }
  return !1;
}
function Tp(e, t, n) {
  (t = Kr(n, t)),
    (t = Wy(e, t, 1)),
    (e = wn(e, t, 1)),
    (t = $e()),
    e !== null && (Ao(e, 1, t), Ue(e, t));
}
function ce(e, t, n) {
  if (e.tag === 3) Tp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Tp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (kn === null || !kn.has(r)))
        ) {
          (e = Kr(n, e)),
            (e = Qy(t, e, 1)),
            (t = wn(t, e, 1)),
            (e = $e()),
            t !== null && (Ao(t, 1, e), Ue(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function qS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = $e()),
    (e.pingedLanes |= e.suspendedLanes & n),
    we === e &&
      (be & n) === n &&
      (Se === 4 || (Se === 3 && (be & 130023424) === be && 500 > pe() - md)
        ? Yn(e, 0)
        : (hd |= n)),
    Ue(e, t);
}
function fv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ts), (ts <<= 1), !(ts & 130023424) && (ts = 4194304))
      : (t = 1));
  var n = $e();
  (e = Zt(e, t)), e !== null && (Ao(e, t, n), Ue(e, n));
}
function KS(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), fv(e, n);
}
function XS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(M(314));
  }
  r !== null && r.delete(t), fv(e, n);
}
var pv;
pv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Fe.current) Be = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Be = !1), IS(e, t, n);
      Be = !!(e.flags & 131072);
    }
  else (Be = !1), ie && t.flags & 1048576 && vy(t, Xs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      _s(e, t), (e = t.pendingProps);
      var i = Wr(t, Me.current);
      zr(t, n), (i = ld(null, t, r, e, i, n));
      var o = ud();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            He(r) ? ((o = !0), qs(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            rd(t),
            (i.updater = Ma),
            (t.stateNode = i),
            (i._reactInternals = t),
            Vu(t, r, e, n),
            (t = Gu(null, t, r, !0, o, n)))
          : ((t.tag = 0), ie && o && Xc(t), Ne(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (_s(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = JS(r)),
          (e = xt(r, e)),
          i)
        ) {
          case 0:
            t = Qu(null, t, r, e, n);
            break e;
          case 1:
            t = kp(null, t, r, e, n);
            break e;
          case 11:
            t = xp(null, t, r, e, n);
            break e;
          case 14:
            t = wp(null, t, r, xt(r.type, e), n);
            break e;
        }
        throw Error(M(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : xt(r, i)),
        Qu(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : xt(r, i)),
        kp(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Xy(t), e === null)) throw Error(M(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Ey(e, t),
          Zs(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Kr(Error(M(423)), t)), (t = Ep(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Kr(Error(M(424)), t)), (t = Ep(e, t, r, n, i));
            break e;
          } else
            for (
              Ye = xn(t.stateNode.containerInfo.firstChild),
                Ze = t,
                ie = !0,
                kt = null,
                n = wy(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Qr(), r === i)) {
            t = en(e, t, n);
            break e;
          }
          Ne(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Cy(t),
        e === null && Fu(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        $u(r, i) ? (s = null) : o !== null && $u(r, o) && (t.flags |= 32),
        Ky(e, t),
        Ne(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Fu(t), null;
    case 13:
      return Yy(e, t, n);
    case 4:
      return (
        id(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Gr(t, null, r, n)) : Ne(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : xt(r, i)),
        xp(e, t, r, i, n)
      );
    case 7:
      return Ne(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          ee(Ys, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (_t(o.value, s)) {
            if (o.children === i.children && !Fe.current) {
              t = en(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = Xt(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Hu(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(M(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Hu(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Ne(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        zr(t, n),
        (i = ht(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ne(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = xt(r, t.pendingProps)),
        (i = xt(r.type, i)),
        wp(e, t, r, i, n)
      );
    case 15:
      return Gy(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : xt(r, i)),
        _s(e, t),
        (t.tag = 1),
        He(r) ? ((e = !0), qs(t)) : (e = !1),
        zr(t, n),
        Vy(t, r, i),
        Vu(t, r, i, n),
        Gu(null, t, r, !0, e, n)
      );
    case 19:
      return Jy(e, t, n);
    case 22:
      return qy(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function hv(e, t) {
  return Fm(e, t);
}
function YS(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ct(e, t, n, r) {
  return new YS(e, t, n, r);
}
function Sd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function JS(e) {
  if (typeof e == "function") return Sd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === zc)) return 11;
    if (e === Lc) return 14;
  }
  return 2;
}
function Cn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ct(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function As(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Sd(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Er:
        return Jn(n.children, i, o, t);
      case Ic:
        (s = 8), (i |= 8);
        break;
      case hu:
        return (
          (e = ct(12, n, t, i | 2)), (e.elementType = hu), (e.lanes = o), e
        );
      case mu:
        return (e = ct(13, n, t, i)), (e.elementType = mu), (e.lanes = o), e;
      case yu:
        return (e = ct(19, n, t, i)), (e.elementType = yu), (e.lanes = o), e;
      case Cm:
        return Ia(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case km:
              s = 10;
              break e;
            case Em:
              s = 9;
              break e;
            case zc:
              s = 11;
              break e;
            case Lc:
              s = 14;
              break e;
            case un:
              (s = 16), (r = null);
              break e;
          }
        throw Error(M(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ct(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Jn(e, t, n, r) {
  return (e = ct(7, e, r, t)), (e.lanes = n), e;
}
function Ia(e, t, n, r) {
  return (
    (e = ct(22, e, r, t)),
    (e.elementType = Cm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Kl(e, t, n) {
  return (e = ct(6, e, null, t)), (e.lanes = n), e;
}
function Xl(e, t, n) {
  return (
    (t = ct(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ZS(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ol(0)),
    (this.expirationTimes = Ol(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ol(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function xd(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new ZS(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = ct(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    rd(o),
    e
  );
}
function ex(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: kr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function mv(e) {
  if (!e) return bn;
  e = e._reactInternals;
  e: {
    if (cr(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (He(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (He(n)) return my(e, n, t);
  }
  return t;
}
function yv(e, t, n, r, i, o, s, a, l) {
  return (
    (e = xd(n, r, !0, e, i, o, s, a, l)),
    (e.context = mv(null)),
    (n = e.current),
    (r = $e()),
    (i = En(n)),
    (o = Xt(r, i)),
    (o.callback = t ?? null),
    wn(n, o, i),
    (e.current.lanes = i),
    Ao(e, i, r),
    Ue(e, r),
    e
  );
}
function za(e, t, n, r) {
  var i = t.current,
    o = $e(),
    s = En(i);
  return (
    (n = mv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Xt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = wn(i, t, s)),
    e !== null && (Rt(e, i, s, o), Rs(e, i, s)),
    s
  );
}
function aa(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Dp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function wd(e, t) {
  Dp(e, t), (e = e.alternate) && Dp(e, t);
}
function tx() {
  return null;
}
var vv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function kd(e) {
  this._internalRoot = e;
}
La.prototype.render = kd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  za(e, t, null, null);
};
La.prototype.unmount = kd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ir(function () {
      za(null, e, null, null);
    }),
      (t[Jt] = null);
  }
};
function La(e) {
  this._internalRoot = e;
}
La.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = qm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < dn.length && t !== 0 && t < dn[n].priority; n++);
    dn.splice(n, 0, e), n === 0 && Xm(e);
  }
};
function Ed(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ba(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Mp() {}
function nx(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = aa(s);
        o.call(u);
      };
    }
    var s = yv(t, r, e, 0, null, !1, !1, "", Mp);
    return (
      (e._reactRootContainer = s),
      (e[Jt] = s.current),
      ao(e.nodeType === 8 ? e.parentNode : e),
      ir(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = aa(l);
      a.call(u);
    };
  }
  var l = xd(e, 0, !1, null, null, !1, !1, "", Mp);
  return (
    (e._reactRootContainer = l),
    (e[Jt] = l.current),
    ao(e.nodeType === 8 ? e.parentNode : e),
    ir(function () {
      za(t, l, n, r);
    }),
    l
  );
}
function Fa(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = aa(s);
        a.call(l);
      };
    }
    za(t, s, e, i);
  } else s = nx(n, t, e, i, r);
  return aa(s);
}
Qm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ai(t.pendingLanes);
        n !== 0 &&
          (Hc(t, n | 1), Ue(t, pe()), !(Q & 6) && ((Xr = pe() + 500), Tn()));
      }
      break;
    case 13:
      ir(function () {
        var r = Zt(e, 1);
        if (r !== null) {
          var i = $e();
          Rt(r, e, 1, i);
        }
      }),
        wd(e, 1);
  }
};
Uc = function (e) {
  if (e.tag === 13) {
    var t = Zt(e, 134217728);
    if (t !== null) {
      var n = $e();
      Rt(t, e, 134217728, n);
    }
    wd(e, 134217728);
  }
};
Gm = function (e) {
  if (e.tag === 13) {
    var t = En(e),
      n = Zt(e, t);
    if (n !== null) {
      var r = $e();
      Rt(n, e, t, r);
    }
    wd(e, t);
  }
};
qm = function () {
  return Y;
};
Km = function (e, t) {
  var n = Y;
  try {
    return (Y = e), t();
  } finally {
    Y = n;
  }
};
Pu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Su(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Aa(r);
            if (!i) throw Error(M(90));
            Pm(r), Su(r, i);
          }
        }
      }
      break;
    case "textarea":
      _m(e, n);
      break;
    case "select":
      (t = n.value), t != null && Mr(e, !!n.multiple, t, !1);
  }
};
Nm = yd;
$m = ir;
var rx = { usingClientEntryPoint: !1, Events: [Do, br, Aa, Dm, Mm, yd] },
  Ei = {
    findFiberByHostInstance: Qn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  ix = {
    bundleType: Ei.bundleType,
    version: Ei.version,
    rendererPackageName: Ei.rendererPackageName,
    rendererConfig: Ei.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: on.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Lm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ei.findFiberByHostInstance || tx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var fs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!fs.isDisabled && fs.supportsFiber)
    try {
      (ba = fs.inject(ix)), ($t = fs);
    } catch {}
}
it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rx;
it.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ed(t)) throw Error(M(200));
  return ex(e, t, null, n);
};
it.createRoot = function (e, t) {
  if (!Ed(e)) throw Error(M(299));
  var n = !1,
    r = "",
    i = vv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = xd(e, 1, !1, null, null, n, !1, r, i)),
    (e[Jt] = t.current),
    ao(e.nodeType === 8 ? e.parentNode : e),
    new kd(t)
  );
};
it.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(M(188))
      : ((e = Object.keys(e).join(",")), Error(M(268, e)));
  return (e = Lm(t)), (e = e === null ? null : e.stateNode), e;
};
it.flushSync = function (e) {
  return ir(e);
};
it.hydrate = function (e, t, n) {
  if (!Ba(t)) throw Error(M(200));
  return Fa(null, e, t, !0, n);
};
it.hydrateRoot = function (e, t, n) {
  if (!Ed(e)) throw Error(M(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = vv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = yv(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[Jt] = t.current),
    ao(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new La(t);
};
it.render = function (e, t, n) {
  if (!Ba(t)) throw Error(M(200));
  return Fa(null, e, t, !1, n);
};
it.unmountComponentAtNode = function (e) {
  if (!Ba(e)) throw Error(M(40));
  return e._reactRootContainer
    ? (ir(function () {
        Fa(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Jt] = null);
        });
      }),
      !0)
    : !1;
};
it.unstable_batchedUpdates = yd;
it.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ba(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return Fa(e, t, n, !1, r);
};
it.version = "18.3.1-next-f1338f8080-20240426";
function gv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gv);
    } catch (e) {
      console.error(e);
    }
}
gv(), (gm.exports = it);
var Cd = gm.exports;
const Di = sm(Cd);
var Np = Cd;
(fu.createRoot = Np.createRoot), (fu.hydrateRoot = Np.hydrateRoot);
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function vo() {
  return (
    (vo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vo.apply(this, arguments)
  );
}
var yn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(yn || (yn = {}));
const $p = "popstate";
function ox(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: a } = r.location;
    return oc(
      "",
      { pathname: o, search: s, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default",
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : la(i);
  }
  return ax(t, n, null, e);
}
function de(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Sv(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function sx() {
  return Math.random().toString(36).substr(2, 8);
}
function Ip(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function oc(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    vo(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? fi(t) : t,
      { state: n, key: (t && t.key) || r || sx() },
    )
  );
}
function la(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function fi(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function ax(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    a = yn.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(vo({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = yn.Pop;
    let w = c(),
      y = w == null ? null : w - u;
    (u = w), l && l({ action: a, location: m.location, delta: y });
  }
  function d(w, y) {
    a = yn.Push;
    let p = oc(m.location, w, y);
    u = c() + 1;
    let h = Ip(p, u),
      g = m.createHref(p);
    try {
      s.pushState(h, "", g);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      i.location.assign(g);
    }
    o && l && l({ action: a, location: m.location, delta: 1 });
  }
  function v(w, y) {
    a = yn.Replace;
    let p = oc(m.location, w, y);
    u = c();
    let h = Ip(p, u),
      g = m.createHref(p);
    s.replaceState(h, "", g),
      o && l && l({ action: a, location: m.location, delta: 0 });
  }
  function S(w) {
    let y = i.location.origin !== "null" ? i.location.origin : i.location.href,
      p = typeof w == "string" ? w : la(w);
    return (
      (p = p.replace(/ $/, "%20")),
      de(
        y,
        "No window.location.(origin|href) available to create URL for href: " +
          p,
      ),
      new URL(p, y)
    );
  }
  let m = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(w) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener($p, f),
        (l = w),
        () => {
          i.removeEventListener($p, f), (l = null);
        }
      );
    },
    createHref(w) {
      return t(i, w);
    },
    createURL: S,
    encodeLocation(w) {
      let y = S(w);
      return { pathname: y.pathname, search: y.search, hash: y.hash };
    },
    push: d,
    replace: v,
    go(w) {
      return s.go(w);
    },
  };
  return m;
}
var zp;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(zp || (zp = {}));
function lx(e, t, n) {
  return n === void 0 && (n = "/"), ux(e, t, n, !1);
}
function ux(e, t, n, r) {
  let i = typeof t == "string" ? fi(t) : t,
    o = Yr(i.pathname || "/", n);
  if (o == null) return null;
  let s = xv(e);
  cx(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = wx(o);
    a = Sx(s[l], u, r);
  }
  return a;
}
function xv(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, a) => {
    let l = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    l.relativePath.startsWith("/") &&
      (de(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Rn([r, l.relativePath]),
      c = n.concat(l);
    o.children &&
      o.children.length > 0 &&
      (de(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      xv(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: vx(u, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, s) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, s);
      else for (let l of wv(o.path)) i(o, s, l);
    }),
    t
  );
}
function wv(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = wv(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? o : [o, l].join("/")))),
    i && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function cx(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : gx(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const dx = /^:[\w-]+$/,
  fx = 3,
  px = 2,
  hx = 1,
  mx = 10,
  yx = -2,
  Lp = (e) => e === "*";
function vx(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Lp) && (r += yx),
    t && (r += px),
    n
      .filter((i) => !Lp(i))
      .reduce((i, o) => i + (dx.test(o) ? fx : o === "" ? hx : mx), r)
  );
}
function gx(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Sx(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    o = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      f = ua(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c,
      ),
      d = l.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = ua(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c,
        )),
      !f)
    )
      return null;
    Object.assign(i, f.params),
      s.push({
        params: i,
        pathname: Rn([o, f.pathname]),
        pathnameBase: Rx(Rn([o, f.pathnameBase])),
        route: d,
      }),
      f.pathnameBase !== "/" && (o = Rn([o, f.pathnameBase]));
  }
  return s;
}
function ua(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = xx(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: d, isOptional: v } = c;
      if (d === "*") {
        let m = a[f] || "";
        s = o.slice(0, o.length - m.length).replace(/(.)\/+$/, "$1");
      }
      const S = a[f];
      return (
        v && !S ? (u[d] = void 0) : (u[d] = (S || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function xx(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Sv(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (i += "\\/*$")
        : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function wx(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Sv(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function Yr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function kx(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? fi(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Ex(n, t)) : t,
    search: Px(r),
    hash: bx(i),
  };
}
function Ex(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Yl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Cx(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function kv(e, t) {
  let n = Cx(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Ev(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = fi(e))
    : ((i = vo({}, e)),
      de(
        !i.pathname || !i.pathname.includes("?"),
        Yl("?", "pathname", "search", i),
      ),
      de(
        !i.pathname || !i.pathname.includes("#"),
        Yl("#", "pathname", "hash", i),
      ),
      de(!i.search || !i.search.includes("#"), Yl("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    a;
  if (s == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; ) d.shift(), (f -= 1);
      i.pathname = d.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = kx(i, a),
    u = s && s !== "/" && s.endsWith("/"),
    c = (o || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const Rn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Rx = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Px = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  bx = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function _x(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Cv = ["post", "put", "patch", "delete"];
new Set(Cv);
const jx = ["get", ...Cv];
new Set(jx);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function go() {
  return (
    (go = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    go.apply(this, arguments)
  );
}
const Ha = R.createContext(null),
  Rv = R.createContext(null),
  Dn = R.createContext(null),
  Ua = R.createContext(null),
  dr = R.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Pv = R.createContext(null);
function Ox(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  No() || de(!1);
  let { basename: r, navigator: i } = R.useContext(Dn),
    { hash: o, pathname: s, search: a } = Va(e, { relative: n }),
    l = s;
  return (
    r !== "/" && (l = s === "/" ? r : Rn([r, s])),
    i.createHref({ pathname: l, search: a, hash: o })
  );
}
function No() {
  return R.useContext(Ua) != null;
}
function $o() {
  return No() || de(!1), R.useContext(Ua).location;
}
function bv(e) {
  R.useContext(Dn).static || R.useLayoutEffect(e);
}
function Ot() {
  let { isDataRoute: e } = R.useContext(dr);
  return e ? Ux() : Ax();
}
function Ax() {
  No() || de(!1);
  let e = R.useContext(Ha),
    { basename: t, future: n, navigator: r } = R.useContext(Dn),
    { matches: i } = R.useContext(dr),
    { pathname: o } = $o(),
    s = JSON.stringify(kv(i, n.v7_relativeSplatPath)),
    a = R.useRef(!1);
  return (
    bv(() => {
      a.current = !0;
    }),
    R.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = Ev(u, JSON.parse(s), o, c.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Rn([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [t, r, s, o, e],
    )
  );
}
function Va(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = R.useContext(Dn),
    { matches: i } = R.useContext(dr),
    { pathname: o } = $o(),
    s = JSON.stringify(kv(i, r.v7_relativeSplatPath));
  return R.useMemo(() => Ev(e, JSON.parse(s), o, n === "path"), [e, s, o, n]);
}
function Tx(e, t) {
  return Dx(e, t);
}
function Dx(e, t, n, r) {
  No() || de(!1);
  let { navigator: i } = R.useContext(Dn),
    { matches: o } = R.useContext(dr),
    s = o[o.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = $o(),
    c;
  if (t) {
    var f;
    let w = typeof t == "string" ? fi(t) : t;
    l === "/" || ((f = w.pathname) != null && f.startsWith(l)) || de(!1),
      (c = w);
  } else c = u;
  let d = c.pathname || "/",
    v = d;
  if (l !== "/") {
    let w = l.replace(/^\//, "").split("/");
    v = "/" + d.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let S = lx(e, { pathname: v }),
    m = zx(
      S &&
        S.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, a, w.params),
            pathname: Rn([
              l,
              i.encodeLocation
                ? i.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? l
                : Rn([
                    l,
                    i.encodeLocation
                      ? i.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          }),
        ),
      o,
      n,
      r,
    );
  return t && m
    ? R.createElement(
        Ua.Provider,
        {
          value: {
            location: go(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c,
            ),
            navigationType: yn.Pop,
          },
        },
        m,
      )
    : m;
}
function Mx() {
  let e = Hx(),
    t = _x(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return R.createElement(
    R.Fragment,
    null,
    R.createElement("h2", null, "Unexpected Application Error!"),
    R.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? R.createElement("pre", { style: i }, n) : null,
    null,
  );
}
const Nx = R.createElement(Mx, null);
class $x extends R.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? R.createElement(
          dr.Provider,
          { value: this.props.routeContext },
          R.createElement(Pv.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Ix(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = R.useContext(Ha);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    R.createElement(dr.Provider, { value: t }, r)
  );
}
function zx(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = s.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0,
    );
    c >= 0 || de(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let f = s[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: d, errors: v } = n,
          S =
            f.route.loader &&
            d[f.route.id] === void 0 &&
            (!v || v[f.route.id] === void 0);
        if (f.route.lazy || S) {
          (l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, f, d) => {
    let v,
      S = !1,
      m = null,
      w = null;
    n &&
      ((v = a && f.route.id ? a[f.route.id] : void 0),
      (m = f.route.errorElement || Nx),
      l &&
        (u < 0 && d === 0
          ? ((S = !0), (w = null))
          : u === d &&
            ((S = !0), (w = f.route.hydrateFallbackElement || null))));
    let y = t.concat(s.slice(0, d + 1)),
      p = () => {
        let h;
        return (
          v
            ? (h = m)
            : S
              ? (h = w)
              : f.route.Component
                ? (h = R.createElement(f.route.Component, null))
                : f.route.element
                  ? (h = f.route.element)
                  : (h = c),
          R.createElement(Ix, {
            match: f,
            routeContext: { outlet: c, matches: y, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
      ? R.createElement($x, {
          location: n.location,
          revalidation: n.revalidation,
          component: m,
          error: v,
          children: p(),
          routeContext: { outlet: null, matches: y, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var _v = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(_v || {}),
  ca = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(ca || {});
function Lx(e) {
  let t = R.useContext(Ha);
  return t || de(!1), t;
}
function Bx(e) {
  let t = R.useContext(Rv);
  return t || de(!1), t;
}
function Fx(e) {
  let t = R.useContext(dr);
  return t || de(!1), t;
}
function jv(e) {
  let t = Fx(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || de(!1), n.route.id;
}
function Hx() {
  var e;
  let t = R.useContext(Pv),
    n = Bx(ca.UseRouteError),
    r = jv(ca.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Ux() {
  let { router: e } = Lx(_v.UseNavigateStable),
    t = jv(ca.UseNavigateStable),
    n = R.useRef(!1);
  return (
    bv(() => {
      n.current = !0;
    }),
    R.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, go({ fromRouteId: t }, o)));
      },
      [e, t],
    )
  );
}
function Hn(e) {
  de(!1);
}
function Vx(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = yn.Pop,
    navigator: o,
    static: s = !1,
    future: a,
  } = e;
  No() && de(!1);
  let l = t.replace(/^\/*/, "/"),
    u = R.useMemo(
      () => ({
        basename: l,
        navigator: o,
        static: s,
        future: go({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, o, s],
    );
  typeof r == "string" && (r = fi(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: d = "",
      state: v = null,
      key: S = "default",
    } = r,
    m = R.useMemo(() => {
      let w = Yr(c, l);
      return w == null
        ? null
        : {
            location: { pathname: w, search: f, hash: d, state: v, key: S },
            navigationType: i,
          };
    }, [l, c, f, d, v, S, i]);
  return m == null
    ? null
    : R.createElement(
        Dn.Provider,
        { value: u },
        R.createElement(Ua.Provider, { children: n, value: m }),
      );
}
function Wx(e) {
  let { children: t, location: n } = e;
  return Tx(sc(t), n);
}
new Promise(() => {});
function sc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    R.Children.forEach(e, (r, i) => {
      if (!R.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === R.Fragment) {
        n.push.apply(n, sc(r.props.children, o));
        return;
      }
      r.type !== Hn && de(!1), !r.props.index || !r.props.children || de(!1);
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = sc(r.props.children, o)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function da() {
  return (
    (da = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    da.apply(this, arguments)
  );
}
function Ov(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Qx(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Gx(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Qx(e);
}
const qx = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  Kx = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "viewTransition",
    "children",
  ],
  Xx = "6";
try {
  window.__reactRouterVersion = Xx;
} catch {}
const Yx = R.createContext({ isTransitioning: !1 }),
  Jx = "startTransition",
  Bp = Ur[Jx];
function Zx(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = R.useRef();
  o.current == null && (o.current = ox({ window: i, v5Compat: !0 }));
  let s = o.current,
    [a, l] = R.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = R.useCallback(
      (f) => {
        u && Bp ? Bp(() => l(f)) : l(f);
      },
      [l, u],
    );
  return (
    R.useLayoutEffect(() => s.listen(c), [s, c]),
    R.createElement(Vx, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
const ew =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  tw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  nw = R.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        viewTransition: f,
      } = t,
      d = Ov(t, qx),
      { basename: v } = R.useContext(Dn),
      S,
      m = !1;
    if (typeof u == "string" && tw.test(u) && ((S = u), ew))
      try {
        let h = new URL(window.location.href),
          g = u.startsWith("//") ? new URL(h.protocol + u) : new URL(u),
          C = Yr(g.pathname, v);
        g.origin === h.origin && C != null
          ? (u = C + g.search + g.hash)
          : (m = !0);
      } catch {}
    let w = Ox(u, { relative: i }),
      y = iw(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: i,
        viewTransition: f,
      });
    function p(h) {
      r && r(h), h.defaultPrevented || y(h);
    }
    return R.createElement(
      "a",
      da({}, d, { href: S || w, onClick: m || o ? r : p, ref: n, target: l }),
    );
  }),
  Av = R.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: o = "",
        end: s = !1,
        style: a,
        to: l,
        viewTransition: u,
        children: c,
      } = t,
      f = Ov(t, Kx),
      d = Va(l, { relative: f.relative }),
      v = $o(),
      S = R.useContext(Rv),
      { navigator: m, basename: w } = R.useContext(Dn),
      y = S != null && ow(d) && u === !0,
      p = m.encodeLocation ? m.encodeLocation(d).pathname : d.pathname,
      h = v.pathname,
      g =
        S && S.navigation && S.navigation.location
          ? S.navigation.location.pathname
          : null;
    i ||
      ((h = h.toLowerCase()),
      (g = g ? g.toLowerCase() : null),
      (p = p.toLowerCase())),
      g && w && (g = Yr(g, w) || g);
    const C = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
    let E = h === p || (!s && h.startsWith(p) && h.charAt(C) === "/"),
      k =
        g != null &&
        (g === p || (!s && g.startsWith(p) && g.charAt(p.length) === "/")),
      P = { isActive: E, isPending: k, isTransitioning: y },
      _ = E ? r : void 0,
      b;
    typeof o == "function"
      ? (b = o(P))
      : (b = [
          o,
          E ? "active" : null,
          k ? "pending" : null,
          y ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let j = typeof a == "function" ? a(P) : a;
    return R.createElement(
      nw,
      da({}, f, {
        "aria-current": _,
        className: b,
        ref: n,
        style: j,
        to: l,
        viewTransition: u,
      }),
      typeof c == "function" ? c(P) : c,
    );
  });
var ac;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(ac || (ac = {}));
var Fp;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Fp || (Fp = {}));
function rw(e) {
  let t = R.useContext(Ha);
  return t || de(!1), t;
}
function iw(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: s,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    l = Ot(),
    u = $o(),
    c = Va(e, { relative: s });
  return R.useCallback(
    (f) => {
      if (Gx(f, n)) {
        f.preventDefault();
        let d = r !== void 0 ? r : la(u) === la(c);
        l(e, {
          replace: d,
          state: i,
          preventScrollReset: o,
          relative: s,
          viewTransition: a,
        });
      }
    },
    [u, l, c, r, i, n, e, o, s, a],
  );
}
function ow(e, t) {
  t === void 0 && (t = {});
  let n = R.useContext(Yx);
  n == null && de(!1);
  let { basename: r } = rw(ac.useViewTransitionState),
    i = Va(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = Yr(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    s = Yr(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return ua(i.pathname, s) != null || ua(i.pathname, o) != null;
}
var Tv = { exports: {} },
  Dv = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Io = R;
function sw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var aw = typeof Object.is == "function" ? Object.is : sw,
  lw = Io.useSyncExternalStore,
  uw = Io.useRef,
  cw = Io.useEffect,
  dw = Io.useMemo,
  fw = Io.useDebugValue;
Dv.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = uw(null);
  if (o.current === null) {
    var s = { hasValue: !1, value: null };
    o.current = s;
  } else s = o.current;
  o = dw(
    function () {
      function l(v) {
        if (!u) {
          if (((u = !0), (c = v), (v = r(v)), i !== void 0 && s.hasValue)) {
            var S = s.value;
            if (i(S, v)) return (f = S);
          }
          return (f = v);
        }
        if (((S = f), aw(c, v))) return S;
        var m = r(v);
        return i !== void 0 && i(S, m) ? S : ((c = v), (f = m));
      }
      var u = !1,
        c,
        f,
        d = n === void 0 ? null : n;
      return [
        function () {
          return l(t());
        },
        d === null
          ? void 0
          : function () {
              return l(d());
            },
      ];
    },
    [t, n, r, i],
  );
  var a = lw(e, o[0], o[1]);
  return (
    cw(
      function () {
        (s.hasValue = !0), (s.value = a);
      },
      [a],
    ),
    fw(a),
    a
  );
};
Tv.exports = Dv;
var pw = Tv.exports,
  Je = "default" in Ur ? pn : Ur,
  Hp = Symbol.for("react-redux-context"),
  Up = typeof globalThis < "u" ? globalThis : {};
function hw() {
  if (!Je.createContext) return {};
  const e = Up[Hp] ?? (Up[Hp] = new Map());
  let t = e.get(Je.createContext);
  return t || ((t = Je.createContext(null)), e.set(Je.createContext, t)), t;
}
var _n = hw(),
  mw = () => {
    throw new Error("uSES not initialized!");
  };
function Rd(e = _n) {
  return function () {
    return Je.useContext(e);
  };
}
var Mv = Rd(),
  Nv = mw,
  yw = (e) => {
    Nv = e;
  },
  vw = (e, t) => e === t;
function gw(e = _n) {
  const t = e === _n ? Mv : Rd(e),
    n = (r, i = {}) => {
      const { equalityFn: o = vw, devModeChecks: s = {} } =
          typeof i == "function" ? { equalityFn: i } : i,
        {
          store: a,
          subscription: l,
          getServerState: u,
          stabilityCheck: c,
          identityFunctionCheck: f,
        } = t();
      Je.useRef(!0);
      const d = Je.useCallback(
          {
            [r.name](S) {
              return r(S);
            },
          }[r.name],
          [r, c, s.stabilityCheck],
        ),
        v = Nv(l.addNestedSub, a.getState, u || a.getState, d, o);
      return Je.useDebugValue(v), v;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var N = gw();
function $v(e) {
  e();
}
function Sw() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      $v(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const i = (t = { callback: n, next: null, prev: t });
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next));
        }
      );
    },
  };
}
var Vp = { notify() {}, get: () => [] };
function xw(e, t) {
  let n,
    r = Vp,
    i = 0,
    o = !1;
  function s(m) {
    c();
    const w = r.subscribe(m);
    let y = !1;
    return () => {
      y || ((y = !0), w(), f());
    };
  }
  function a() {
    r.notify();
  }
  function l() {
    S.onStateChange && S.onStateChange();
  }
  function u() {
    return o;
  }
  function c() {
    i++, n || ((n = e.subscribe(l)), (r = Sw()));
  }
  function f() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = Vp));
  }
  function d() {
    o || ((o = !0), c());
  }
  function v() {
    o && ((o = !1), f());
  }
  const S = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: v,
    getListeners: () => r,
  };
  return S;
}
var ww =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  kw = typeof navigator < "u" && navigator.product === "ReactNative",
  Ew = ww || kw ? Je.useLayoutEffect : Je.useEffect;
function Wp(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Wi(e, t) {
  if (Wp(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let i = 0; i < n.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, n[i]) || !Wp(e[n[i]], t[n[i]]))
      return !1;
  return !0;
}
function Cw({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  identityFunctionCheck: o = "once",
}) {
  const s = Je.useMemo(() => {
      const u = xw(e);
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        identityFunctionCheck: o,
      };
    }, [e, r, i, o]),
    a = Je.useMemo(() => e.getState(), [e]);
  Ew(() => {
    const { subscription: u } = s;
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      a !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0);
      }
    );
  }, [s, a]);
  const l = t || _n;
  return Je.createElement(l.Provider, { value: s }, n);
}
var Rw = Cw;
function Iv(e = _n) {
  const t = e === _n ? Mv : Rd(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var zv = Iv();
function Pw(e = _n) {
  const t = e === _n ? zv : Iv(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var K = Pw(),
  bw = $v;
yw(pw.useSyncExternalStoreWithSelector);
function Ee(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var _w = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  Qp = _w,
  Jl = () => Math.random().toString(36).substring(7).split("").join("."),
  jw = {
    INIT: `@@redux/INIT${Jl()}`,
    REPLACE: `@@redux/REPLACE${Jl()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Jl()}`,
  },
  fa = jw;
function Ft(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Lv(e, t, n) {
  if (typeof e != "function") throw new Error(Ee(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Ee(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(Ee(1));
    return n(Lv)(e, t);
  }
  let r = e,
    i = t,
    o = new Map(),
    s = o,
    a = 0,
    l = !1;
  function u() {
    s === o &&
      ((s = new Map()),
      o.forEach((w, y) => {
        s.set(y, w);
      }));
  }
  function c() {
    if (l) throw new Error(Ee(3));
    return i;
  }
  function f(w) {
    if (typeof w != "function") throw new Error(Ee(4));
    if (l) throw new Error(Ee(5));
    let y = !0;
    u();
    const p = a++;
    return (
      s.set(p, w),
      function () {
        if (y) {
          if (l) throw new Error(Ee(6));
          (y = !1), u(), s.delete(p), (o = null);
        }
      }
    );
  }
  function d(w) {
    if (!Ft(w)) throw new Error(Ee(7));
    if (typeof w.type > "u") throw new Error(Ee(8));
    if (typeof w.type != "string") throw new Error(Ee(17));
    if (l) throw new Error(Ee(9));
    try {
      (l = !0), (i = r(i, w));
    } finally {
      l = !1;
    }
    return (
      (o = s).forEach((p) => {
        p();
      }),
      w
    );
  }
  function v(w) {
    if (typeof w != "function") throw new Error(Ee(10));
    (r = w), d({ type: fa.REPLACE });
  }
  function S() {
    const w = f;
    return {
      subscribe(y) {
        if (typeof y != "object" || y === null) throw new Error(Ee(11));
        function p() {
          const g = y;
          g.next && g.next(c());
        }
        return p(), { unsubscribe: w(p) };
      },
      [Qp]() {
        return this;
      },
    };
  }
  return (
    d({ type: fa.INIT }),
    { dispatch: d, subscribe: f, getState: c, replaceReducer: v, [Qp]: S }
  );
}
function Ow(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: fa.INIT }) > "u") throw new Error(Ee(12));
    if (typeof n(void 0, { type: fa.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Ee(13));
  });
}
function Bv(e) {
  const t = Object.keys(e),
    n = {};
  for (let o = 0; o < t.length; o++) {
    const s = t[o];
    typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let i;
  try {
    Ow(n);
  } catch (o) {
    i = o;
  }
  return function (s = {}, a) {
    if (i) throw i;
    let l = !1;
    const u = {};
    for (let c = 0; c < r.length; c++) {
      const f = r[c],
        d = n[f],
        v = s[f],
        S = d(v, a);
      if (typeof S > "u") throw (a && a.type, new Error(Ee(14)));
      (u[f] = S), (l = l || S !== v);
    }
    return (l = l || r.length !== Object.keys(s).length), l ? u : s;
  };
}
function pa(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
      ? e[0]
      : e.reduce(
          (t, n) =>
            (...r) =>
              t(n(...r)),
        );
}
function Aw(...e) {
  return (t) => (n, r) => {
    const i = t(n, r);
    let o = () => {
      throw new Error(Ee(15));
    };
    const s = { getState: i.getState, dispatch: (l, ...u) => o(l, ...u) },
      a = e.map((l) => l(s));
    return (o = pa(...a)(i.dispatch)), { ...i, dispatch: o };
  };
}
function Fv(e) {
  return Ft(e) && "type" in e && typeof e.type == "string";
}
var Pd = Symbol.for("immer-nothing"),
  Qi = Symbol.for("immer-draftable"),
  Qe = Symbol.for("immer-state");
function Pe(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var or = Object.getPrototypeOf;
function Ht(e) {
  return !!e && !!e[Qe];
}
function jt(e) {
  var t;
  return e
    ? Hv(e) ||
        Array.isArray(e) ||
        !!e[Qi] ||
        !!((t = e.constructor) != null && t[Qi]) ||
        zo(e) ||
        Lo(e)
    : !1;
}
var Tw = Object.prototype.constructor.toString();
function Hv(e) {
  if (!e || typeof e != "object") return !1;
  const t = or(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === Tw;
}
function Dw(e) {
  return Ht(e) || Pe(15, e), e[Qe].base_;
}
function Jr(e, t) {
  sr(e) === 0
    ? Object.entries(e).forEach(([n, r]) => {
        t(n, r, e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function sr(e) {
  const t = e[Qe];
  return t ? t.type_ : Array.isArray(e) ? 1 : zo(e) ? 2 : Lo(e) ? 3 : 0;
}
function So(e, t) {
  return sr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Zl(e, t) {
  return sr(e) === 2 ? e.get(t) : e[t];
}
function Uv(e, t, n) {
  const r = sr(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function Mw(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function zo(e) {
  return e instanceof Map;
}
function Lo(e) {
  return e instanceof Set;
}
function Un(e) {
  return e.copy_ || e.base_;
}
function lc(e, t) {
  if (zo(e)) return new Map(e);
  if (Lo(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  if (!t && Hv(e))
    return or(e) ? { ...e } : Object.assign(Object.create(null), e);
  const n = Object.getOwnPropertyDescriptors(e);
  delete n[Qe];
  let r = Reflect.ownKeys(n);
  for (let i = 0; i < r.length; i++) {
    const o = r[i],
      s = n[o];
    s.writable === !1 && ((s.writable = !0), (s.configurable = !0)),
      (s.get || s.set) &&
        (n[o] = {
          configurable: !0,
          writable: !0,
          enumerable: s.enumerable,
          value: e[o],
        });
  }
  return Object.create(or(e), n);
}
function bd(e, t = !1) {
  return (
    Wa(e) ||
      Ht(e) ||
      !jt(e) ||
      (sr(e) > 1 && (e.set = e.add = e.clear = e.delete = Nw),
      Object.freeze(e),
      t && Jr(e, (n, r) => bd(r, !0))),
    e
  );
}
function Nw() {
  Pe(2);
}
function Wa(e) {
  return Object.isFrozen(e);
}
var uc = {};
function ar(e) {
  const t = uc[e];
  return t || Pe(0, e), t;
}
function $w(e, t) {
  uc[e] || (uc[e] = t);
}
var xo;
function Vv() {
  return xo;
}
function Iw(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Gp(e, t) {
  t &&
    (ar("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function cc(e) {
  dc(e), e.drafts_.forEach(zw), (e.drafts_ = null);
}
function dc(e) {
  e === xo && (xo = e.parent_);
}
function qp(e) {
  return (xo = Iw(xo, e));
}
function zw(e) {
  const t = e[Qe];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Kp(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[Qe].modified_ && (cc(t), Pe(4)),
        jt(e) && ((e = ha(t, e)), t.parent_ || ma(t, e)),
        t.patches_ &&
          ar("Patches").generateReplacementPatches_(
            n[Qe].base_,
            e,
            t.patches_,
            t.inversePatches_,
          ))
      : (e = ha(t, n, [])),
    cc(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== Pd ? e : void 0
  );
}
function ha(e, t, n) {
  if (Wa(t)) return t;
  const r = t[Qe];
  if (!r) return Jr(t, (i, o) => Xp(e, r, t, i, o, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return ma(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let o = i,
      s = !1;
    r.type_ === 3 && ((o = new Set(i)), i.clear(), (s = !0)),
      Jr(o, (a, l) => Xp(e, r, i, a, l, n, s)),
      ma(e, i, !1),
      n &&
        e.patches_ &&
        ar("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function Xp(e, t, n, r, i, o, s) {
  if (Ht(i)) {
    const a =
        o && t && t.type_ !== 3 && !So(t.assigned_, r) ? o.concat(r) : void 0,
      l = ha(e, i, a);
    if ((Uv(n, r, l), Ht(l))) e.canAutoFreeze_ = !1;
    else return;
  } else s && n.add(i);
  if (jt(i) && !Wa(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    ha(e, i), (!t || !t.scope_.parent_) && ma(e, i);
  }
}
function ma(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && bd(t, n);
}
function Lw(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : Vv(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let i = r,
    o = _d;
  n && ((i = [r]), (o = wo));
  const { revoke: s, proxy: a } = Proxy.revocable(i, o);
  return (r.draft_ = a), (r.revoke_ = s), a;
}
var _d = {
    get(e, t) {
      if (t === Qe) return e;
      const n = Un(e);
      if (!So(n, t)) return Bw(e, n, t);
      const r = n[t];
      return e.finalized_ || !jt(r)
        ? r
        : r === eu(e.base_, t)
          ? (tu(e), (e.copy_[t] = pc(r, e)))
          : r;
    },
    has(e, t) {
      return t in Un(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Un(e));
    },
    set(e, t, n) {
      const r = Wv(Un(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const i = eu(Un(e), t),
          o = i == null ? void 0 : i[Qe];
        if (o && o.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (Mw(n, i) && (n !== void 0 || So(e.base_, t))) return !0;
        tu(e), fc(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        eu(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), tu(e), fc(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = Un(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      Pe(11);
    },
    getPrototypeOf(e) {
      return or(e.base_);
    },
    setPrototypeOf() {
      Pe(12);
    },
  },
  wo = {};
Jr(_d, (e, t) => {
  wo[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
wo.deleteProperty = function (e, t) {
  return wo.set.call(this, e, t, void 0);
};
wo.set = function (e, t, n) {
  return _d.set.call(this, e[0], t, n, e[0]);
};
function eu(e, t) {
  const n = e[Qe];
  return (n ? Un(n) : e)[t];
}
function Bw(e, t, n) {
  var i;
  const r = Wv(t, n);
  return r
    ? "value" in r
      ? r.value
      : (i = r.get) == null
        ? void 0
        : i.call(e.draft_)
    : void 0;
}
function Wv(e, t) {
  if (!(t in e)) return;
  let n = or(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = or(n);
  }
}
function fc(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && fc(e.parent_));
}
function tu(e) {
  e.copy_ || (e.copy_ = lc(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var Fw = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const o = n;
          n = t;
          const s = this;
          return function (l = o, ...u) {
            return s.produce(l, (c) => n.call(this, c, ...u));
          };
        }
        typeof n != "function" && Pe(6),
          r !== void 0 && typeof r != "function" && Pe(7);
        let i;
        if (jt(t)) {
          const o = qp(this),
            s = pc(t, void 0);
          let a = !0;
          try {
            (i = n(s)), (a = !1);
          } finally {
            a ? cc(o) : dc(o);
          }
          return Gp(o, r), Kp(i, o);
        } else if (!t || typeof t != "object") {
          if (
            ((i = n(t)),
            i === void 0 && (i = t),
            i === Pd && (i = void 0),
            this.autoFreeze_ && bd(i, !0),
            r)
          ) {
            const o = [],
              s = [];
            ar("Patches").generateReplacementPatches_(t, i, o, s), r(o, s);
          }
          return i;
        } else Pe(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (s, ...a) => this.produceWithPatches(s, (l) => t(l, ...a));
        let r, i;
        return [
          this.produce(t, n, (s, a) => {
            (r = s), (i = a);
          }),
          r,
          i,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    jt(e) || Pe(8), Ht(e) && (e = Hw(e));
    const t = qp(this),
      n = pc(e, void 0);
    return (n[Qe].isManual_ = !0), dc(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Qe];
    (!n || !n.isManual_) && Pe(9);
    const { scope_: r } = n;
    return Gp(r, t), Kp(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const i = t[n];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = ar("Patches").applyPatches_;
    return Ht(e) ? r(e, t) : this.produce(e, (i) => r(i, t));
  }
};
function pc(e, t) {
  const n = zo(e)
    ? ar("MapSet").proxyMap_(e, t)
    : Lo(e)
      ? ar("MapSet").proxySet_(e, t)
      : Lw(e, t);
  return (t ? t.scope_ : Vv()).drafts_.push(n), n;
}
function Hw(e) {
  return Ht(e) || Pe(10, e), Qv(e);
}
function Qv(e) {
  if (!jt(e) || Wa(e)) return e;
  const t = e[Qe];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = lc(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = lc(e, !0);
  return (
    Jr(n, (r, i) => {
      Uv(n, r, Qv(i));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
function Uw() {
  const t = "replace",
    n = "add",
    r = "remove";
  function i(d, v, S, m) {
    switch (d.type_) {
      case 0:
      case 2:
        return s(d, v, S, m);
      case 1:
        return o(d, v, S, m);
      case 3:
        return a(d, v, S, m);
    }
  }
  function o(d, v, S, m) {
    let { base_: w, assigned_: y } = d,
      p = d.copy_;
    p.length < w.length && (([w, p] = [p, w]), ([S, m] = [m, S]));
    for (let h = 0; h < w.length; h++)
      if (y[h] && p[h] !== w[h]) {
        const g = v.concat([h]);
        S.push({ op: t, path: g, value: f(p[h]) }),
          m.push({ op: t, path: g, value: f(w[h]) });
      }
    for (let h = w.length; h < p.length; h++) {
      const g = v.concat([h]);
      S.push({ op: n, path: g, value: f(p[h]) });
    }
    for (let h = p.length - 1; w.length <= h; --h) {
      const g = v.concat([h]);
      m.push({ op: r, path: g });
    }
  }
  function s(d, v, S, m) {
    const { base_: w, copy_: y } = d;
    Jr(d.assigned_, (p, h) => {
      const g = Zl(w, p),
        C = Zl(y, p),
        E = h ? (So(w, p) ? t : n) : r;
      if (g === C && E === t) return;
      const k = v.concat(p);
      S.push(E === r ? { op: E, path: k } : { op: E, path: k, value: C }),
        m.push(
          E === n
            ? { op: r, path: k }
            : E === r
              ? { op: n, path: k, value: f(g) }
              : { op: t, path: k, value: f(g) },
        );
    });
  }
  function a(d, v, S, m) {
    let { base_: w, copy_: y } = d,
      p = 0;
    w.forEach((h) => {
      if (!y.has(h)) {
        const g = v.concat([p]);
        S.push({ op: r, path: g, value: h }),
          m.unshift({ op: n, path: g, value: h });
      }
      p++;
    }),
      (p = 0),
      y.forEach((h) => {
        if (!w.has(h)) {
          const g = v.concat([p]);
          S.push({ op: n, path: g, value: h }),
            m.unshift({ op: r, path: g, value: h });
        }
        p++;
      });
  }
  function l(d, v, S, m) {
    S.push({ op: t, path: [], value: v === Pd ? void 0 : v }),
      m.push({ op: t, path: [], value: d });
  }
  function u(d, v) {
    return (
      v.forEach((S) => {
        const { path: m, op: w } = S;
        let y = d;
        for (let C = 0; C < m.length - 1; C++) {
          const E = sr(y);
          let k = m[C];
          typeof k != "string" && typeof k != "number" && (k = "" + k),
            (E === 0 || E === 1) &&
              (k === "__proto__" || k === "constructor") &&
              Pe(19),
            typeof y == "function" && k === "prototype" && Pe(19),
            (y = Zl(y, k)),
            typeof y != "object" && Pe(18, m.join("/"));
        }
        const p = sr(y),
          h = c(S.value),
          g = m[m.length - 1];
        switch (w) {
          case t:
            switch (p) {
              case 2:
                return y.set(g, h);
              case 3:
                Pe(16);
              default:
                return (y[g] = h);
            }
          case n:
            switch (p) {
              case 1:
                return g === "-" ? y.push(h) : y.splice(g, 0, h);
              case 2:
                return y.set(g, h);
              case 3:
                return y.add(h);
              default:
                return (y[g] = h);
            }
          case r:
            switch (p) {
              case 1:
                return y.splice(g, 1);
              case 2:
                return y.delete(g);
              case 3:
                return y.delete(S.value);
              default:
                return delete y[g];
            }
          default:
            Pe(17, w);
        }
      }),
      d
    );
  }
  function c(d) {
    if (!jt(d)) return d;
    if (Array.isArray(d)) return d.map(c);
    if (zo(d))
      return new Map(Array.from(d.entries()).map(([S, m]) => [S, c(m)]));
    if (Lo(d)) return new Set(Array.from(d).map(c));
    const v = Object.create(or(d));
    for (const S in d) v[S] = c(d[S]);
    return So(d, Qi) && (v[Qi] = d[Qi]), v;
  }
  function f(d) {
    return Ht(d) ? c(d) : d;
  }
  $w("Patches", {
    applyPatches_: u,
    generatePatches_: i,
    generateReplacementPatches_: l,
  });
}
var nt = new Fw(),
  Bo = nt.produce,
  Gv = nt.produceWithPatches.bind(nt);
nt.setAutoFreeze.bind(nt);
nt.setUseStrictShallowCopy.bind(nt);
var Yp = nt.applyPatches.bind(nt);
nt.createDraft.bind(nt);
nt.finishDraft.bind(nt);
function Vw(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function") throw new TypeError(t);
}
function Ww(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object") throw new TypeError(t);
}
function Qw(
  e,
  t = "expected all items to be functions, instead received the following types: ",
) {
  if (!e.every((n) => typeof n == "function")) {
    const n = e
      .map((r) =>
        typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r,
      )
      .join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var Jp = (e) => (Array.isArray(e) ? e : [e]);
function Gw(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return (
    Qw(
      t,
      "createSelector expects all input-selectors to be functions, but received the following types: ",
    ),
    t
  );
}
function qw(e, t) {
  const n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var Kw = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  Xw = typeof WeakRef < "u" ? WeakRef : Kw,
  Yw = 0,
  Zp = 1;
function ps() {
  return { s: Yw, v: void 0, o: null, p: null };
}
function ya(e, t = {}) {
  let n = ps();
  const { resultEqualityCheck: r } = t;
  let i,
    o = 0;
  function s() {
    var f;
    let a = n;
    const { length: l } = arguments;
    for (let d = 0, v = l; d < v; d++) {
      const S = arguments[d];
      if (typeof S == "function" || (typeof S == "object" && S !== null)) {
        let m = a.o;
        m === null && (a.o = m = new WeakMap());
        const w = m.get(S);
        w === void 0 ? ((a = ps()), m.set(S, a)) : (a = w);
      } else {
        let m = a.p;
        m === null && (a.p = m = new Map());
        const w = m.get(S);
        w === void 0 ? ((a = ps()), m.set(S, a)) : (a = w);
      }
    }
    const u = a;
    let c;
    if (a.s === Zp) c = a.v;
    else if (((c = e.apply(null, arguments)), o++, r)) {
      const d =
        ((f = i == null ? void 0 : i.deref) == null ? void 0 : f.call(i)) ?? i;
      d != null && r(d, c) && ((c = d), o !== 0 && o--),
        (i =
          (typeof c == "object" && c !== null) || typeof c == "function"
            ? new Xw(c)
            : c);
    }
    return (u.s = Zp), (u.v = c), c;
  }
  return (
    (s.clearCache = () => {
      (n = ps()), s.resetResultsCount();
    }),
    (s.resultsCount = () => o),
    (s.resetResultsCount = () => {
      o = 0;
    }),
    s
  );
}
function Jw(e, ...t) {
  const n = typeof e == "function" ? { memoize: e, memoizeOptions: t } : e,
    r = (...i) => {
      let o = 0,
        s = 0,
        a,
        l = {},
        u = i.pop();
      typeof u == "object" && ((l = u), (u = i.pop())),
        Vw(
          u,
          `createSelector expects an output function after the inputs, but received: [${typeof u}]`,
        );
      const c = { ...n, ...l },
        {
          memoize: f,
          memoizeOptions: d = [],
          argsMemoize: v = ya,
          argsMemoizeOptions: S = [],
          devModeChecks: m = {},
        } = c,
        w = Jp(d),
        y = Jp(S),
        p = Gw(i),
        h = f(
          function () {
            return o++, u.apply(null, arguments);
          },
          ...w,
        ),
        g = v(
          function () {
            s++;
            const E = qw(p, arguments);
            return (a = h.apply(null, E)), a;
          },
          ...y,
        );
      return Object.assign(g, {
        resultFunc: u,
        memoizedResultFunc: h,
        dependencies: p,
        dependencyRecomputations: () => s,
        resetDependencyRecomputations: () => {
          s = 0;
        },
        lastResult: () => a,
        recomputations: () => o,
        resetRecomputations: () => {
          o = 0;
        },
        memoize: f,
        argsMemoize: v,
      });
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var jd = Jw(ya),
  Zw = Object.assign(
    (e, t = jd) => {
      Ww(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      const n = Object.keys(e),
        r = n.map((o) => e[o]);
      return t(r, (...o) => o.reduce((s, a, l) => ((s[n[l]] = a), s), {}));
    },
    { withTypes: () => Zw },
  );
function qv(e) {
  return ({ dispatch: n, getState: r }) =>
    (i) =>
    (o) =>
      typeof o == "function" ? o(n, r, e) : i(o);
}
var e2 = qv(),
  t2 = qv,
  n2 =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? pa
              : pa.apply(null, arguments);
        },
  r2 = (e) => e && typeof e.match == "function";
function Pt(e, t) {
  function n(...r) {
    if (t) {
      let i = t(...r);
      if (!i) throw new Error(ft(0));
      return {
        type: e,
        payload: i.payload,
        ...("meta" in i && { meta: i.meta }),
        ...("error" in i && { error: i.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => Fv(r) && r.type === e),
    n
  );
}
var Kv = class Mi extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Mi.prototype);
  }
  static get [Symbol.species]() {
    return Mi;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new Mi(...t[0].concat(this))
      : new Mi(...t.concat(this));
  }
};
function eh(e) {
  return jt(e) ? Bo(e, () => {}) : e;
}
function th(e, t, n) {
  if (e.has(t)) {
    let i = e.get(t);
    return n.update && ((i = n.update(i, t, e)), e.set(t, i)), i;
  }
  if (!n.insert) throw new Error(ft(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function i2(e) {
  return typeof e == "boolean";
}
var o2 = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: o = !0,
      } = t ?? {};
      let s = new Kv();
      return n && (i2(n) ? s.push(e2) : s.push(t2(n.extraArgument))), s;
    },
  Kn = "RTK_autoBatch",
  Ci = () => (e) => ({ payload: e, meta: { [Kn]: !0 } }),
  Xv = (e) => (t) => {
    setTimeout(t, e);
  },
  s2 =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : Xv(10),
  a2 =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let i = !0,
        o = !1,
        s = !1;
      const a = new Set(),
        l =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
              ? s2
              : e.type === "callback"
                ? e.queueNotification
                : Xv(e.timeout),
        u = () => {
          (s = !1), o && ((o = !1), a.forEach((c) => c()));
        };
      return Object.assign({}, r, {
        subscribe(c) {
          const f = () => i && c(),
            d = r.subscribe(f);
          return (
            a.add(c),
            () => {
              d(), a.delete(c);
            }
          );
        },
        dispatch(c) {
          var f;
          try {
            return (
              (i = !((f = c == null ? void 0 : c.meta) != null && f[Kn])),
              (o = !i),
              o && (s || ((s = !0), l(u))),
              r.dispatch(c)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  l2 = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let i = new Kv(e);
      return r && i.push(a2(typeof r == "object" ? r : void 0)), i;
    };
function u2(e) {
  const t = o2(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      preloadedState: o = void 0,
      enhancers: s = void 0,
    } = e || {};
  let a;
  if (typeof n == "function") a = n;
  else if (Ft(n)) a = Bv(n);
  else throw new Error(ft(1));
  let l;
  typeof r == "function" ? (l = r(t)) : (l = t());
  let u = pa;
  i && (u = n2({ trace: !1, ...(typeof i == "object" && i) }));
  const c = Aw(...l),
    f = l2(c);
  let d = typeof s == "function" ? s(f) : f();
  const v = u(...d);
  return Lv(a, o, v);
}
function Yv(e) {
  const t = {},
    n = [];
  let r;
  const i = {
    addCase(o, s) {
      const a = typeof o == "string" ? o : o.type;
      if (!a) throw new Error(ft(28));
      if (a in t) throw new Error(ft(29));
      return (t[a] = s), i;
    },
    addMatcher(o, s) {
      return n.push({ matcher: o, reducer: s }), i;
    },
    addDefaultCase(o) {
      return (r = o), i;
    },
  };
  return e(i), [t, n, r];
}
function c2(e) {
  return typeof e == "function";
}
function d2(e, t) {
  let [n, r, i] = Yv(t),
    o;
  if (c2(e)) o = () => eh(e());
  else {
    const a = eh(e);
    o = () => a;
  }
  function s(a = o(), l) {
    let u = [
      n[l.type],
      ...r.filter(({ matcher: c }) => c(l)).map(({ reducer: c }) => c),
    ];
    return (
      u.filter((c) => !!c).length === 0 && (u = [i]),
      u.reduce((c, f) => {
        if (f)
          if (Ht(c)) {
            const v = f(c, l);
            return v === void 0 ? c : v;
          } else {
            if (jt(c)) return Bo(c, (d) => f(d, l));
            {
              const d = f(c, l);
              if (d === void 0) {
                if (c === null) return c;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined",
                );
              }
              return d;
            }
          }
        return c;
      }, a)
    );
  }
  return (s.getInitialState = o), s;
}
var Jv = (e, t) => (r2(e) ? e.match(t) : e(t));
function tn(...e) {
  return (t) => e.some((n) => Jv(n, t));
}
function Gi(...e) {
  return (t) => e.every((n) => Jv(n, t));
}
function Qa(e, t) {
  if (!e || !e.meta) return !1;
  const n = typeof e.meta.requestId == "string",
    r = t.indexOf(e.meta.requestStatus) > -1;
  return n && r;
}
function Fo(e) {
  return (
    typeof e[0] == "function" &&
    "pending" in e[0] &&
    "fulfilled" in e[0] &&
    "rejected" in e[0]
  );
}
function Od(...e) {
  return e.length === 0
    ? (t) => Qa(t, ["pending"])
    : Fo(e)
      ? tn(...e.map((t) => t.pending))
      : Od()(e[0]);
}
function Zr(...e) {
  return e.length === 0
    ? (t) => Qa(t, ["rejected"])
    : Fo(e)
      ? tn(...e.map((t) => t.rejected))
      : Zr()(e[0]);
}
function Ga(...e) {
  const t = (n) => n && n.meta && n.meta.rejectedWithValue;
  return e.length === 0
    ? Gi(Zr(...e), t)
    : Fo(e)
      ? Gi(Zr(...e), t)
      : Ga()(e[0]);
}
function jn(...e) {
  return e.length === 0
    ? (t) => Qa(t, ["fulfilled"])
    : Fo(e)
      ? tn(...e.map((t) => t.fulfilled))
      : jn()(e[0]);
}
function hc(...e) {
  return e.length === 0
    ? (t) => Qa(t, ["pending", "fulfilled", "rejected"])
    : Fo(e)
      ? tn(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled]))
      : hc()(e[0]);
}
var f2 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  Ad = (e = 21) => {
    let t = "",
      n = e;
    for (; n--; ) t += f2[(Math.random() * 64) | 0];
    return t;
  },
  p2 = ["name", "message", "stack", "code"],
  nu = class {
    constructor(e, t) {
      Cl(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  nh = class {
    constructor(e, t) {
      Cl(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  h2 = (e) => {
    if (typeof e == "object" && e !== null) {
      const t = {};
      for (const n of p2) typeof e[n] == "string" && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  rh = (() => {
    function e(t, n, r) {
      const i = Pt(t + "/fulfilled", (l, u, c, f) => ({
          payload: l,
          meta: {
            ...(f || {}),
            arg: c,
            requestId: u,
            requestStatus: "fulfilled",
          },
        })),
        o = Pt(t + "/pending", (l, u, c) => ({
          payload: void 0,
          meta: {
            ...(c || {}),
            arg: u,
            requestId: l,
            requestStatus: "pending",
          },
        })),
        s = Pt(t + "/rejected", (l, u, c, f, d) => ({
          payload: f,
          error: ((r && r.serializeError) || h2)(l || "Rejected"),
          meta: {
            ...(d || {}),
            arg: c,
            requestId: u,
            rejectedWithValue: !!f,
            requestStatus: "rejected",
            aborted: (l == null ? void 0 : l.name) === "AbortError",
            condition: (l == null ? void 0 : l.name) === "ConditionError",
          },
        }));
      function a(l) {
        return (u, c, f) => {
          const d = r != null && r.idGenerator ? r.idGenerator(l) : Ad(),
            v = new AbortController();
          let S, m;
          function w(p) {
            (m = p), v.abort();
          }
          const y = (async function () {
            var g, C;
            let p;
            try {
              let E =
                (g = r == null ? void 0 : r.condition) == null
                  ? void 0
                  : g.call(r, l, { getState: c, extra: f });
              if ((y2(E) && (E = await E), E === !1 || v.signal.aborted))
                throw {
                  name: "ConditionError",
                  message: "Aborted due to condition callback returning false.",
                };
              const k = new Promise((P, _) => {
                (S = () => {
                  _({ name: "AbortError", message: m || "Aborted" });
                }),
                  v.signal.addEventListener("abort", S);
              });
              u(
                o(
                  d,
                  l,
                  (C = r == null ? void 0 : r.getPendingMeta) == null
                    ? void 0
                    : C.call(
                        r,
                        { requestId: d, arg: l },
                        { getState: c, extra: f },
                      ),
                ),
              ),
                (p = await Promise.race([
                  k,
                  Promise.resolve(
                    n(l, {
                      dispatch: u,
                      getState: c,
                      extra: f,
                      requestId: d,
                      signal: v.signal,
                      abort: w,
                      rejectWithValue: (P, _) => new nu(P, _),
                      fulfillWithValue: (P, _) => new nh(P, _),
                    }),
                  ).then((P) => {
                    if (P instanceof nu) throw P;
                    return P instanceof nh
                      ? i(P.payload, d, l, P.meta)
                      : i(P, d, l);
                  }),
                ]));
            } catch (E) {
              p =
                E instanceof nu ? s(null, d, l, E.payload, E.meta) : s(E, d, l);
            } finally {
              S && v.signal.removeEventListener("abort", S);
            }
            return (
              (r &&
                !r.dispatchConditionRejection &&
                s.match(p) &&
                p.meta.condition) ||
                u(p),
              p
            );
          })();
          return Object.assign(y, {
            abort: w,
            requestId: d,
            arg: l,
            unwrap() {
              return y.then(m2);
            },
          });
        };
      }
      return Object.assign(a, {
        pending: o,
        rejected: s,
        fulfilled: i,
        settled: tn(s, i),
        typePrefix: t,
      });
    }
    return (e.withTypes = () => e), e;
  })();
function m2(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function y2(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var v2 = Symbol.for("rtk-slice-createasyncthunk");
function g2(e, t) {
  return `${e}/${t}`;
}
function S2({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[v2];
  return function (i) {
    const { name: o, reducerPath: s = o } = i;
    if (!o) throw new Error(ft(11));
    typeof process < "u";
    const a =
        (typeof i.reducers == "function" ? i.reducers(w2()) : i.reducers) || {},
      l = Object.keys(a),
      u = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      c = {
        addCase(h, g) {
          const C = typeof h == "string" ? h : h.type;
          if (!C) throw new Error(ft(12));
          if (C in u.sliceCaseReducersByType) throw new Error(ft(13));
          return (u.sliceCaseReducersByType[C] = g), c;
        },
        addMatcher(h, g) {
          return u.sliceMatchers.push({ matcher: h, reducer: g }), c;
        },
        exposeAction(h, g) {
          return (u.actionCreators[h] = g), c;
        },
        exposeCaseReducer(h, g) {
          return (u.sliceCaseReducersByName[h] = g), c;
        },
      };
    l.forEach((h) => {
      const g = a[h],
        C = {
          reducerName: h,
          type: g2(o, h),
          createNotation: typeof i.reducers == "function",
        };
      E2(g) ? R2(C, g, c, t) : k2(C, g, c);
    });
    function f() {
      const [h = {}, g = [], C = void 0] =
          typeof i.extraReducers == "function"
            ? Yv(i.extraReducers)
            : [i.extraReducers],
        E = { ...h, ...u.sliceCaseReducersByType };
      return d2(i.initialState, (k) => {
        for (let P in E) k.addCase(P, E[P]);
        for (let P of u.sliceMatchers) k.addMatcher(P.matcher, P.reducer);
        for (let P of g) k.addMatcher(P.matcher, P.reducer);
        C && k.addDefaultCase(C);
      });
    }
    const d = (h) => h,
      v = new Map();
    let S;
    function m(h, g) {
      return S || (S = f()), S(h, g);
    }
    function w() {
      return S || (S = f()), S.getInitialState();
    }
    function y(h, g = !1) {
      function C(k) {
        let P = k[h];
        return typeof P > "u" && g && (P = w()), P;
      }
      function E(k = d) {
        const P = th(v, g, { insert: () => new WeakMap() });
        return th(P, k, {
          insert: () => {
            const _ = {};
            for (const [b, j] of Object.entries(i.selectors ?? {}))
              _[b] = x2(j, k, w, g);
            return _;
          },
        });
      }
      return {
        reducerPath: h,
        getSelectors: E,
        get selectors() {
          return E(C);
        },
        selectSlice: C,
      };
    }
    const p = {
      name: o,
      reducer: m,
      actions: u.actionCreators,
      caseReducers: u.sliceCaseReducersByName,
      getInitialState: w,
      ...y(s),
      injectInto(h, { reducerPath: g, ...C } = {}) {
        const E = g ?? s;
        return (
          h.inject({ reducerPath: E, reducer: m }, C), { ...p, ...y(E, !0) }
        );
      },
    };
    return p;
  };
}
function x2(e, t, n, r) {
  function i(o, ...s) {
    let a = t(o);
    return typeof a > "u" && r && (a = n()), e(a, ...s);
  }
  return (i.unwrapped = e), i;
}
var Et = S2();
function w2() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" },
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function k2({ type: e, reducerName: t, createNotation: n }, r, i) {
  let o, s;
  if ("reducer" in r) {
    if (n && !C2(r)) throw new Error(ft(17));
    (o = r.reducer), (s = r.prepare);
  } else o = r;
  i.addCase(e, o)
    .exposeCaseReducer(t, o)
    .exposeAction(t, s ? Pt(e, s) : Pt(e));
}
function E2(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function C2(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function R2({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw new Error(ft(18));
  const {
      payloadCreator: o,
      fulfilled: s,
      pending: a,
      rejected: l,
      settled: u,
      options: c,
    } = n,
    f = i(e, o, c);
  r.exposeAction(t, f),
    s && r.addCase(f.fulfilled, s),
    a && r.addCase(f.pending, a),
    l && r.addCase(f.rejected, l),
    u && r.addMatcher(f.settled, u),
    r.exposeCaseReducer(t, {
      fulfilled: s || hs,
      pending: a || hs,
      rejected: l || hs,
      settled: u || hs,
    });
}
function hs() {}
function ft(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const ih = {
    roundsPlayed: 1,
    isGameActive: !1,
    isGameIntro: !0,
    isAddPlayersRound: !1,
    isBetRoundActive: !1,
    isPlayerRoundActive: !1,
    isDealerCardRevealed: !1,
    isDealerDrawing: !1,
    isInsuranceRoundComplete: !1,
    isDealerRoundActive: !1,
    isMainResultsActive: !1,
    isSplitResultsActive: !1,
    isRoundActive: !1,
  },
  Zv = Et({
    name: "game-data",
    initialState: ih,
    reducers: {
      setGameData: (e, t) => t.payload,
      resetGame: () => ih,
      revealDealerCard: (e) => {
        e.isDealerCardRevealed = !0;
      },
      beginDealerDrawing: (e) => {
        e.isDealerDrawing = !0;
      },
      endFullRound: (e) => {
        e.isRoundActive = !1;
      },
      beginInsuranceRound: (e) => {
        e.isInsuranceRoundComplete = !1;
      },
      endInsuranceRound: (e) => {
        e.isInsuranceRoundComplete = !0;
      },
      endMainHandResults: (e) => {
        e.isMainResultsActive = !1;
      },
      beginSplitRound: (e) => {
        e.isSplitResultsActive = !0;
      },
      startBetRound: (e) => ({
        ...e,
        isAddPlayersRound: !1,
        isBetRoundActive: !0,
      }),
      returnToPrevGame: (e) => ({
        ...e,
        isGameIntro: !1,
        isGameActive: !0,
        isBetRoundActive: !0,
      }),
      startAddPlayers: (e) => ({
        ...e,
        isGameActive: !0,
        isAddPlayersRound: !0,
        isGameIntro: !1,
      }),
      beginPlayerRound: (e) => ({
        ...e,
        isBetRoundActive: !1,
        isPlayerRoundActive: !0,
        isRoundActive: !0,
      }),
      endIsGameActive: (e) => ({
        ...e,
        isGameActive: !1,
        isAddPlayersRound: !1,
        isBetRoundActive: !1,
        isPlayerRoundActive: !1,
        isDealerCardRevealed: !1,
        isDealerDrawing: !1,
        isInsuranceRoundComplete: !1,
        isDealerRoundActive: !1,
        isMainResultsActive: !1,
        isSplitResultsActive: !1,
        isRoundActive: !1,
      }),
      beginDealerRound: (e) => ({
        ...e,
        isPlayerRoundActive: !1,
        isDealerRoundActive: !0,
      }),
      endDealerRound: (e) => ({
        ...e,
        isDealerRoundActive: !1,
        isMainResultsActive: !0,
        isDealerDrawing: !1,
      }),
      endDealerAndRound: (e) => ({
        ...e,
        isDealerRoundActive: !1,
        isMainResultsActive: !1,
        isDealerDrawing: !1,
      }),
      endSplitRound: (e) => ({
        ...e,
        isSplitResultsActive: !1,
        isRoundActive: !1,
      }),
      resetGameData: (e, t) => {
        const n = t.payload;
        return {
          ...e,
          roundsPlayed: n ? e.roundsPlayed : e.roundsPlayed + 1,
          isDealerCardRevealed: !1,
          isInsuranceRoundComplete: !1,
          isBetRoundActive: !n,
          isGameActive: !n,
        };
      },
    },
  }),
  {
    returnToPrevGame: P2,
    revealDealerCard: b2,
    beginPlayerRound: e0,
    beginDealerRound: t0,
    endDealerRound: _2,
    endMainHandResults: j2,
    beginSplitRound: O2,
    beginDealerDrawing: A2,
    endSplitRound: T2,
    endFullRound: n0,
    beginInsuranceRound: D2,
    endInsuranceRound: M2,
    endDealerAndRound: N2,
    endIsGameActive: r0,
    startBetRound: $2,
    startAddPlayers: I2,
    resetGameData: z2,
    resetGame: i0,
    setGameData: D4,
  } = Zv.actions,
  L2 = Zv.reducer,
  qa = ({ children: e }) =>
    x.jsx("main", { className: "wrapper", children: e }),
  pi = ({ children: e, bgClass: t }) =>
    x.jsx("section", { className: `${t} photo-container`, children: e });
/*! js-cookie v3.0.5 | MIT */ function ms(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) e[r] = n[r];
  }
  return e;
}
var B2 = {
  read: function (e) {
    return (
      e[0] === '"' && (e = e.slice(1, -1)),
      e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    );
  },
  write: function (e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent,
    );
  },
};
function mc(e, t) {
  function n(i, o, s) {
    if (!(typeof document > "u")) {
      (s = ms({}, t, s)),
        typeof s.expires == "number" &&
          (s.expires = new Date(Date.now() + s.expires * 864e5)),
        s.expires && (s.expires = s.expires.toUTCString()),
        (i = encodeURIComponent(i)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape));
      var a = "";
      for (var l in s)
        s[l] &&
          ((a += "; " + l), s[l] !== !0 && (a += "=" + s[l].split(";")[0]));
      return (document.cookie = i + "=" + e.write(o, i) + a);
    }
  }
  function r(i) {
    if (!(typeof document > "u" || (arguments.length && !i))) {
      for (
        var o = document.cookie ? document.cookie.split("; ") : [],
          s = {},
          a = 0;
        a < o.length;
        a++
      ) {
        var l = o[a].split("="),
          u = l.slice(1).join("=");
        try {
          var c = decodeURIComponent(l[0]);
          if (((s[c] = e.read(u, c)), i === c)) break;
        } catch {}
      }
      return i ? s[i] : s;
    }
  }
  return Object.create(
    {
      set: n,
      get: r,
      remove: function (i, o) {
        n(i, "", ms({}, o, { expires: -1 }));
      },
      withAttributes: function (i) {
        return mc(this.converter, ms({}, this.attributes, i));
      },
      withConverter: function (i) {
        return mc(ms({}, this.converter, i), this.attributes);
      },
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) },
    },
  );
}
var qi = mc(B2, { path: "/" });
function hi({
  open: e,
  children: t,
  closeModal: n,
  isTimer: r = !1,
  isCloseOnClick: i = !0,
}) {
  const [o, s] = R.useState(!1),
    a = R.useCallback(() => {
      !r && i && (s(!1), n());
    }, [n, r, i]);
  return (
    R.useEffect(() => {
      e && s(!0);
    }, [e]),
    e
      ? Di.createPortal(
          x.jsxs(x.Fragment, {
            children: [
              x.jsx("div", {
                onClick: a,
                className: o ? "modal-overlay active" : "modal-overlay",
              }),
              x.jsx("div", {
                className: o ? "modal-container active" : "modal-container",
                children: t && t,
              }),
            ],
          }),
          document.getElementById("portal"),
        )
      : null
  );
}
const oh = [
    { card: "2", value: 2, suits: [2, 2, 2, 2] },
    { card: "3", value: 3, suits: [2, 2, 2, 2] },
    { card: "4", value: 4, suits: [2, 2, 2, 2] },
    { card: "5", value: 5, suits: [2, 2, 2, 2] },
    { card: "6", value: 6, suits: [2, 2, 2, 2] },
    { card: "7", value: 7, suits: [2, 2, 2, 2] },
    { card: "8", value: 8, suits: [2, 2, 2, 2] },
    { card: "9", value: 9, suits: [2, 2, 2, 2] },
    { card: "0", value: 10, suits: [2, 2, 2, 2] },
    { card: "J", value: 10, suits: [2, 2, 2, 2] },
    { card: "Q", value: 10, suits: [2, 2, 2, 2] },
    { card: "K", value: 10, suits: [2, 2, 2, 2] },
    { card: "A", value: 11, suits: [2, 2, 2, 2] },
  ],
  o0 = Et({
    name: "deck",
    initialState: oh,
    reducers: {
      updateDeck: (e, t) => {
        (e.length = 0), e.push(...t.payload);
      },
      resetDeck: () => oh,
      setDeck: (e, t) => t.payload,
    },
  }),
  { setDeck: F2, updateDeck: s0, resetDeck: a0 } = o0.actions,
  H2 = o0.reducer,
  U2 = (e, t, n = "main") => {
    const { wonInsuranceRound: r } = e,
      i = n === "main" ? e.hand : e.splitHand,
      { cardSum: o, cardUrlVals: s } = i,
      a = o === 21 && s.length === 2,
      l = t.hand.cardSum,
      u = o > 21,
      c = t.hand.cardSum > 21,
      f = t.hand.cardSum === 21 && t.hand.cards.length === 2;
    return f && r
      ? "Insured"
      : (a && !f) || (!u && c) || (!u && !c && o > l)
        ? "Won"
        : (!a && f) || (u && !c) || (!u && !c && o < l)
          ? "Lost"
          : "Push";
  },
  ru = (e) => {
    const t = [1, 5, 25, 50, 100, 500],
      n = t.reduce((o, s) => o + s, 0);
    let r = [],
      i = e;
    if (n > e)
      for (const o of t)
        if (i - o >= 0) r.push(o), (i -= o);
        else break;
    else r = t;
    return r;
  },
  sh = (e) => {
    const t = e.filter((r) => r.bank < 5),
      n = e
        .filter((r) => r.bank >= 5)
        .map((r) => ({
          ...r,
          hand: {
            cards: [],
            cardUrlVals: [],
            cardNumVals: [],
            cardSum: 0,
            isBlackjack: !1,
          },
          splitHand: {
            cards: [],
            cardUrlVals: [],
            cardNumVals: [],
            cardSum: 0,
            isBlackjack: !1,
          },
          currBet: r.minBet <= r.bank ? r.minBet : 5,
          minBet: r.minBet <= r.bank ? r.minBet : 5,
          bank: r.minBet <= r.bank ? r.bank - r.minBet : r.bank - 5,
          insuranceBet: 0,
          wonInsuranceRound: !1,
          splitBet: 0,
          isPlayerSplit: !1,
          isDoubleDown: !1,
          roundResults: { mainResults: "", splitResults: "", isComplete: !1 },
          beginningRoundBank: r.bank,
        }));
    return [...t, ...n];
  },
  ah = [],
  l0 = Et({
    name: "playersArr",
    initialState: ah,
    reducers: {
      setPlayers: (e, t) => t.payload,
      addPlayer: (e, t) => {
        e.push(t.payload);
      },
      updatePlayer: (e, t) => {
        const n = e.findIndex((r) => r.name === t.payload.name);
        n !== -1 && (e[n] = t.payload);
      },
      makeDoubleDownFalse: (e, t) => {
        e[t.payload].isDoubleDown = !1;
      },
      updatePlayerInsurance: (e, t) => {
        const n = t.payload,
          r = e[n];
        if (r) {
          const i = Math.ceil(r.currBet / 2),
            o = r.bank - i;
          e[n] = { ...r, bank: o, insuranceBet: i };
        }
      },
      resetAfterInsuranceWin: (e, t) => {
        const n = e.findIndex((a) => a.name === t.payload.name),
          { bank: r, insuranceBet: i, currBet: o, splitBet: s } = e[n];
        e[n] = {
          ...e[n],
          bank: r + i + o + s,
          wonInsuranceRound: !0,
          insuranceBet: 0,
          currBet: 0,
          splitBet: 0,
        };
      },
      updateDoubleDownHand: (e, t) => {
        const n = e[t.payload],
          { currBet: r, splitBet: i, bank: o, splitHand: s } = n,
          a = s.cards.length < 2;
        e[t.payload] = {
          ...n,
          isDoubleDown: !0,
          currBet: a ? r * 2 : r,
          splitBet: a ? i : i * 2,
          bank: a ? o - r : o - i,
        };
      },
      splitPlayerHand: (e, t) => {
        const n = e[t.payload],
          { hand: r, currBet: i, bank: o } = n,
          { cards: s, cardNumVals: a, cardUrlVals: l } = r;
        e[t.payload] = {
          ...n,
          hand: {
            ...r,
            cards: [s[0]],
            cardNumVals: [a[0]],
            cardUrlVals: [l[0]],
            cardSum: a[0],
          },
          splitHand: {
            ...r,
            cards: [s[1]],
            cardNumVals: [a[1]],
            cardUrlVals: [l[1]],
            cardSum: a[1],
          },
          splitBet: i,
          isPlayerSplit: !0,
          bank: o - i,
        };
      },
      updateTokens: (e, t) => {
        const n = t.payload.type,
          r = t.payload.index,
          i = e[r],
          { bank: o, currBet: s, minBet: a } = i;
        if (n === "all-tokens")
          e[r] = { ...e[r], bank: 0, currBet: s + o, currTokens: ru(0) };
        else {
          const l = o + s - a;
          e[r] = { ...e[r], bank: l, currBet: a, currTokens: ru(l) };
        }
      },
      clickTokenUpdate: (e, t) => {
        const n = t.payload.number,
          r = t.payload.index,
          i = e[r],
          { bank: o, currBet: s } = i;
        e[r] = { ...e[r], currBet: s + n, bank: o - n, currTokens: ru(o - n) };
      },
      updateWinOrLose: (e, t) => {
        const { player: n, dealerObj: r } = t.payload,
          i = e.findIndex((c) => c.name === n.name),
          { roundResults: o } = n,
          s = n.currBet !== 0 ? "main" : "split",
          a = U2(n, r, s),
          l =
            s === "main" ? { ...o, mainResults: a } : { ...o, splitResults: a },
          u = a === "Won" ? n.roundsWon + 1 : n.roundsWon;
        e[i] = { ...e[i], roundResults: l, roundsWon: u };
      },
      removePlayer: (e, t) => {
        const n = e.findIndex((r) => r.name === t.payload.name);
        n !== -1 && e.splice(n, 1);
      },
      removePlayers: (e, t) => {
        const n = t.payload.map((r) => r.name);
        return e.filter((r) => !n.includes(r.name));
      },
      resetPlayersArr: (e) => {
        e.splice(0, e.length, ...ah);
      },
      reverseCurrSplitHand: (e, t) =>
        e.map((r, i) =>
          i === t.payload
            ? { ...r, hand: r.splitHand, splitHand: r.hand, isDoubleDown: !1 }
            : r,
        ),
      reverseAllSplitHands: (e) =>
        e.map((n) =>
          n.splitHand.cards.length > 0
            ? { ...n, hand: n.splitHand, splitHand: n.hand }
            : n,
        ),
      updateAllPlayers: (e) => sh(e),
      updatePlayersFromPrevGame: (e, t) => {
        const n = t.payload;
        return sh(n);
      },
      updateHandResults: (e, t) => {
        const n = e.findIndex((y) => y.name === t.payload.name),
          r = e[n],
          {
            currBet: i,
            splitBet: o,
            bank: s,
            roundResults: a,
            splitHand: l,
          } = r,
          { splitResults: u, mainResults: c } = a,
          { cardSum: f, cardUrlVals: d } = r.hand,
          v = f === 21 && d.length === 2,
          S = l.cards.length === 0,
          m = { ...a, isComplete: S };
        let w = 0;
        i !== 0
          ? (c === "Won"
              ? (w = v ? Math.ceil(s + i * 2.5) : s + i * 2)
              : c === "Push"
                ? (w = s + i)
                : (w = s),
            (e[n] = { ...r, bank: w, currBet: 0, roundResults: m }))
          : o && r.wonInsuranceRound
            ? (e[n] = { ...r, bank: r.bank + o, splitBet: 0, roundResults: m })
            : (u === "Won"
                ? (w = v ? Math.ceil(s + o * 2.5) : s + o * 2)
                : u === "Push"
                  ? (w = s + o)
                  : (w = s),
              (e[n] = { ...r, bank: w, splitBet: 0, roundResults: m }));
      },
    },
  }),
  {
    setPlayers: M4,
    addPlayer: V2,
    updatePlayer: Td,
    removePlayer: u0,
    resetPlayersArr: W2,
    updateAllPlayers: Q2,
    removePlayers: G2,
    reverseAllSplitHands: q2,
    reverseCurrSplitHand: K2,
    updatePlayerInsurance: X2,
    updateHandResults: iu,
    makeDoubleDownFalse: Y2,
    resetAfterInsuranceWin: J2,
    updateWinOrLose: c0,
    updateDoubleDownHand: Z2,
    splitPlayerHand: ek,
    updateTokens: yc,
    clickTokenUpdate: tk,
    updatePlayersFromPrevGame: nk,
  } = l0.actions,
  rk = l0.reducer,
  lh = [],
  d0 = Et({
    name: "inactivePlayersArr",
    initialState: lh,
    reducers: {
      setInactivePlayers: (e, t) => t.payload,
      addInactivePlayer: (e, t) => [...e, t.payload],
      addInactivePlayers: (e, t) => [...e, ...t.payload],
      resetInactivePlayers: () => lh,
    },
  }),
  {
    setInactivePlayers: ik,
    addInactivePlayer: ok,
    addInactivePlayers: vc,
    resetInactivePlayers: sk,
  } = d0.actions,
  ak = d0.reducer;
var f0 = ((e) => (
  (e.uninitialized = "uninitialized"),
  (e.pending = "pending"),
  (e.fulfilled = "fulfilled"),
  (e.rejected = "rejected"),
  e
))(f0 || {});
function lk(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected",
  };
}
var uh = Ft;
function p0(e, t) {
  if (e === t || !((uh(e) && uh(t)) || (Array.isArray(e) && Array.isArray(t))))
    return t;
  const n = Object.keys(t),
    r = Object.keys(e);
  let i = n.length === r.length;
  const o = Array.isArray(t) ? [] : {};
  for (const s of n) (o[s] = p0(e[s], t[s])), i && (i = e[s] === o[s]);
  return i ? e : o;
}
function Br(e) {
  let t = 0;
  for (const n in e) t++;
  return t;
}
var ch = (e) => [].concat(...e);
function uk(e) {
  return new RegExp("(^|:)//").test(e);
}
function ck() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function dh(e) {
  return e != null;
}
function dk() {
  return typeof navigator > "u" || navigator.onLine === void 0
    ? !0
    : navigator.onLine;
}
var fk = (e) => e.replace(/\/$/, ""),
  pk = (e) => e.replace(/^\//, "");
function hk(e, t) {
  if (!e) return t;
  if (!t) return e;
  if (uk(t)) return t;
  const n = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
  return (e = fk(e)), (t = pk(t)), `${e}${n}${t}`;
}
var fh = (...e) => fetch(...e),
  mk = (e) => e.status >= 200 && e.status <= 299,
  yk = (e) => /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "");
function ph(e) {
  if (!Ft(e)) return e;
  const t = { ...e };
  for (const [n, r] of Object.entries(t)) r === void 0 && delete t[n];
  return t;
}
function vk({
  baseUrl: e,
  prepareHeaders: t = (f) => f,
  fetchFn: n = fh,
  paramsSerializer: r,
  isJsonContentType: i = yk,
  jsonContentType: o = "application/json",
  jsonReplacer: s,
  timeout: a,
  responseHandler: l,
  validateStatus: u,
  ...c
} = {}) {
  return (
    typeof fetch > "u" &&
      n === fh &&
      console.warn(
        "Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.",
      ),
    async (d, v, S) => {
      const { getState: m, extra: w, endpoint: y, forced: p, type: h } = v;
      let g,
        {
          url: C,
          headers: E = new Headers(c.headers),
          params: k = void 0,
          responseHandler: P = l ?? "json",
          validateStatus: _ = u ?? mk,
          timeout: b = a,
          ...j
        } = typeof d == "string" ? { url: d } : d,
        O,
        D = v.signal;
      b &&
        ((O = new AbortController()),
        v.signal.addEventListener("abort", O.abort),
        (D = O.signal));
      let T = { ...c, signal: D, ...j };
      (E = new Headers(ph(E))),
        (T.headers =
          (await t(E, {
            getState: m,
            arg: d,
            extra: w,
            endpoint: y,
            forced: p,
            type: h,
            extraOptions: S,
          })) || E);
      const z = (X) =>
        typeof X == "object" &&
        (Ft(X) || Array.isArray(X) || typeof X.toJSON == "function");
      if (
        (!T.headers.has("content-type") &&
          z(T.body) &&
          T.headers.set("content-type", o),
        z(T.body) && i(T.headers) && (T.body = JSON.stringify(T.body, s)),
        k)
      ) {
        const X = ~C.indexOf("?") ? "&" : "?",
          me = r ? r(k) : new URLSearchParams(ph(k));
        C += X + me;
      }
      C = hk(e, C);
      const F = new Request(C, T);
      g = { request: new Request(C, T) };
      let A,
        I = !1,
        $ =
          O &&
          setTimeout(() => {
            (I = !0), O.abort();
          }, b);
      try {
        A = await n(F);
      } catch (X) {
        return {
          error: {
            status: I ? "TIMEOUT_ERROR" : "FETCH_ERROR",
            error: String(X),
          },
          meta: g,
        };
      } finally {
        $ && clearTimeout($),
          O == null || O.signal.removeEventListener("abort", O.abort);
      }
      const H = A.clone();
      g.response = H;
      let U,
        Z = "";
      try {
        let X;
        if (
          (await Promise.all([
            f(A, P).then(
              (me) => (U = me),
              (me) => (X = me),
            ),
            H.text().then(
              (me) => (Z = me),
              () => {},
            ),
          ]),
          X)
        )
          throw X;
      } catch (X) {
        return {
          error: {
            status: "PARSING_ERROR",
            originalStatus: A.status,
            data: Z,
            error: String(X),
          },
          meta: g,
        };
      }
      return _(A, U)
        ? { data: U, meta: g }
        : { error: { status: A.status, data: U }, meta: g };
    }
  );
  async function f(d, v) {
    if (typeof v == "function") return v(d);
    if (
      (v === "content-type" && (v = i(d.headers) ? "json" : "text"),
      v === "json")
    ) {
      const S = await d.text();
      return S.length ? JSON.parse(S) : null;
    }
    return d.text();
  }
}
var hh = class {
    constructor(e, t = void 0) {
      (this.value = e), (this.meta = t);
    }
  },
  Dd = Pt("__rtkq/focused"),
  h0 = Pt("__rtkq/unfocused"),
  Md = Pt("__rtkq/online"),
  m0 = Pt("__rtkq/offline");
function y0(e) {
  return e.type === "query";
}
function gk(e) {
  return e.type === "mutation";
}
function Nd(e, t, n, r, i, o) {
  return Sk(e)
    ? e(t, n, r, i).map(gc).map(o)
    : Array.isArray(e)
      ? e.map(gc).map(o)
      : [];
}
function Sk(e) {
  return typeof e == "function";
}
function gc(e) {
  return typeof e == "string" ? { type: e } : e;
}
function xk(e, t) {
  return e.catch(t);
}
var ko = Symbol("forceQueryFn"),
  Sc = (e) => typeof e[ko] == "function";
function wk({
  serializeQueryArgs: e,
  queryThunk: t,
  mutationThunk: n,
  api: r,
  context: i,
}) {
  const o = new Map(),
    s = new Map(),
    {
      unsubscribeQueryResult: a,
      removeMutationResult: l,
      updateSubscriptionOptions: u,
    } = r.internalActions;
  return {
    buildInitiateQuery: S,
    buildInitiateMutation: m,
    getRunningQueryThunk: c,
    getRunningMutationThunk: f,
    getRunningQueriesThunk: d,
    getRunningMutationsThunk: v,
  };
  function c(w, y) {
    return (p) => {
      var C;
      const h = i.endpointDefinitions[w],
        g = e({ queryArgs: y, endpointDefinition: h, endpointName: w });
      return (C = o.get(p)) == null ? void 0 : C[g];
    };
  }
  function f(w, y) {
    return (p) => {
      var h;
      return (h = s.get(p)) == null ? void 0 : h[y];
    };
  }
  function d() {
    return (w) => Object.values(o.get(w) || {}).filter(dh);
  }
  function v() {
    return (w) => Object.values(s.get(w) || {}).filter(dh);
  }
  function S(w, y) {
    const p =
      (
        h,
        {
          subscribe: g = !0,
          forceRefetch: C,
          subscriptionOptions: E,
          [ko]: k,
          ...P
        } = {},
      ) =>
      (_, b) => {
        var U;
        const j = e({ queryArgs: h, endpointDefinition: y, endpointName: w }),
          O = t({
            ...P,
            type: "query",
            subscribe: g,
            forceRefetch: C,
            subscriptionOptions: E,
            endpointName: w,
            originalArgs: h,
            queryCacheKey: j,
            [ko]: k,
          }),
          D = r.endpoints[w].select(h),
          T = _(O),
          z = D(b()),
          { requestId: F, abort: W } = T,
          A = z.requestId !== F,
          I = (U = o.get(_)) == null ? void 0 : U[j],
          $ = () => D(b()),
          H = Object.assign(
            k
              ? T.then($)
              : A && !I
                ? Promise.resolve(z)
                : Promise.all([I, T]).then($),
            {
              arg: h,
              requestId: F,
              subscriptionOptions: E,
              queryCacheKey: j,
              abort: W,
              async unwrap() {
                const Z = await H;
                if (Z.isError) throw Z.error;
                return Z.data;
              },
              refetch: () => _(p(h, { subscribe: !1, forceRefetch: !0 })),
              unsubscribe() {
                g && _(a({ queryCacheKey: j, requestId: F }));
              },
              updateSubscriptionOptions(Z) {
                (H.subscriptionOptions = Z),
                  _(
                    u({
                      endpointName: w,
                      requestId: F,
                      queryCacheKey: j,
                      options: Z,
                    }),
                  );
              },
            },
          );
        if (!I && !A && !k) {
          const Z = o.get(_) || {};
          (Z[j] = H),
            o.set(_, Z),
            H.then(() => {
              delete Z[j], Br(Z) || o.delete(_);
            });
        }
        return H;
      };
    return p;
  }
  function m(w) {
    return (y, { track: p = !0, fixedCacheKey: h } = {}) =>
      (g, C) => {
        const E = n({
            type: "mutation",
            endpointName: w,
            originalArgs: y,
            track: p,
            fixedCacheKey: h,
          }),
          k = g(E),
          { requestId: P, abort: _, unwrap: b } = k,
          j = xk(
            k.unwrap().then((z) => ({ data: z })),
            (z) => ({ error: z }),
          ),
          O = () => {
            g(l({ requestId: P, fixedCacheKey: h }));
          },
          D = Object.assign(j, {
            arg: k.arg,
            requestId: P,
            abort: _,
            unwrap: b,
            reset: O,
          }),
          T = s.get(g) || {};
        return (
          s.set(g, T),
          (T[P] = D),
          D.then(() => {
            delete T[P], Br(T) || s.delete(g);
          }),
          h &&
            ((T[h] = D),
            D.then(() => {
              T[h] === D && (delete T[h], Br(T) || s.delete(g));
            })),
          D
        );
      };
  }
}
function mh(e) {
  return e;
}
function kk({
  reducerPath: e,
  baseQuery: t,
  context: { endpointDefinitions: n },
  serializeQueryArgs: r,
  api: i,
  assertTagType: o,
}) {
  const s = (p, h, g, C) => (E, k) => {
      const P = n[p],
        _ = r({ queryArgs: h, endpointDefinition: P, endpointName: p });
      if (
        (E(
          i.internalActions.queryResultPatched({
            queryCacheKey: _,
            patches: g,
          }),
        ),
        !C)
      )
        return;
      const b = i.endpoints[p].select(h)(k()),
        j = Nd(P.providesTags, b.data, void 0, h, {}, o);
      E(
        i.internalActions.updateProvidedBy({
          queryCacheKey: _,
          providedTags: j,
        }),
      );
    },
    a =
      (p, h, g, C = !0) =>
      (E, k) => {
        const _ = i.endpoints[p].select(h)(k()),
          b = {
            patches: [],
            inversePatches: [],
            undo: () => E(i.util.patchQueryData(p, h, b.inversePatches, C)),
          };
        if (_.status === "uninitialized") return b;
        let j;
        if ("data" in _)
          if (jt(_.data)) {
            const [O, D, T] = Gv(_.data, g);
            b.patches.push(...D), b.inversePatches.push(...T), (j = O);
          } else
            (j = g(_.data)),
              b.patches.push({ op: "replace", path: [], value: j }),
              b.inversePatches.push({ op: "replace", path: [], value: _.data });
        return (
          b.patches.length === 0 ||
            E(i.util.patchQueryData(p, h, b.patches, C)),
          b
        );
      },
    l = (p, h, g) => (C) =>
      C(
        i.endpoints[p].initiate(h, {
          subscribe: !1,
          forceRefetch: !0,
          [ko]: () => ({ data: g }),
        }),
      ),
    u = async (
      p,
      {
        signal: h,
        abort: g,
        rejectWithValue: C,
        fulfillWithValue: E,
        dispatch: k,
        getState: P,
        extra: _,
      },
    ) => {
      const b = n[p.endpointName];
      try {
        let j = mh,
          O;
        const D = {
            signal: h,
            abort: g,
            dispatch: k,
            getState: P,
            extra: _,
            endpoint: p.endpointName,
            type: p.type,
            forced: p.type === "query" ? c(p, P()) : void 0,
            queryCacheKey: p.type === "query" ? p.queryCacheKey : void 0,
          },
          T = p.type === "query" ? p[ko] : void 0;
        if (
          (T
            ? (O = T())
            : b.query
              ? ((O = await t(b.query(p.originalArgs), D, b.extraOptions)),
                b.transformResponse && (j = b.transformResponse))
              : (O = await b.queryFn(p.originalArgs, D, b.extraOptions, (z) =>
                  t(z, D, b.extraOptions),
                )),
          typeof process < "u",
          O.error)
        )
          throw new hh(O.error, O.meta);
        return E(await j(O.data, O.meta, p.originalArgs), {
          fulfilledTimeStamp: Date.now(),
          baseQueryMeta: O.meta,
          [Kn]: !0,
        });
      } catch (j) {
        let O = j;
        if (O instanceof hh) {
          let D = mh;
          b.query && b.transformErrorResponse && (D = b.transformErrorResponse);
          try {
            return C(await D(O.value, O.meta, p.originalArgs), {
              baseQueryMeta: O.meta,
              [Kn]: !0,
            });
          } catch (T) {
            O = T;
          }
        }
        throw (typeof process < "u", console.error(O), O);
      }
    };
  function c(p, h) {
    var P, _, b;
    const g =
        (_ = (P = h[e]) == null ? void 0 : P.queries) == null
          ? void 0
          : _[p.queryCacheKey],
      C = (b = h[e]) == null ? void 0 : b.config.refetchOnMountOrArgChange,
      E = g == null ? void 0 : g.fulfilledTimeStamp,
      k = p.forceRefetch ?? (p.subscribe && C);
    return k ? k === !0 || (Number(new Date()) - Number(E)) / 1e3 >= k : !1;
  }
  const f = rh(`${e}/executeQuery`, u, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [Kn]: !0 };
      },
      condition(p, { getState: h }) {
        var b, j, O;
        const g = h(),
          C =
            (j = (b = g[e]) == null ? void 0 : b.queries) == null
              ? void 0
              : j[p.queryCacheKey],
          E = C == null ? void 0 : C.fulfilledTimeStamp,
          k = p.originalArgs,
          P = C == null ? void 0 : C.originalArgs,
          _ = n[p.endpointName];
        return Sc(p)
          ? !0
          : (C == null ? void 0 : C.status) === "pending"
            ? !1
            : c(p, g) ||
                (y0(_) &&
                  (O = _ == null ? void 0 : _.forceRefetch) != null &&
                  O.call(_, {
                    currentArg: k,
                    previousArg: P,
                    endpointState: C,
                    state: g,
                  }))
              ? !0
              : !E;
      },
      dispatchConditionRejection: !0,
    }),
    d = rh(`${e}/executeMutation`, u, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [Kn]: !0 };
      },
    }),
    v = (p) => "force" in p,
    S = (p) => "ifOlderThan" in p,
    m = (p, h, g) => (C, E) => {
      const k = v(g) && g.force,
        P = S(g) && g.ifOlderThan,
        _ = (j = !0) => {
          const O = { forceRefetch: j, isPrefetch: !0 };
          return i.endpoints[p].initiate(h, O);
        },
        b = i.endpoints[p].select(h)(E());
      if (k) C(_());
      else if (P) {
        const j = b == null ? void 0 : b.fulfilledTimeStamp;
        if (!j) {
          C(_());
          return;
        }
        (Number(new Date()) - Number(new Date(j))) / 1e3 >= P && C(_());
      } else C(_(!1));
    };
  function w(p) {
    return (h) => {
      var g, C;
      return (
        ((C = (g = h == null ? void 0 : h.meta) == null ? void 0 : g.arg) ==
        null
          ? void 0
          : C.endpointName) === p
      );
    };
  }
  function y(p, h) {
    return {
      matchPending: Gi(Od(p), w(h)),
      matchFulfilled: Gi(jn(p), w(h)),
      matchRejected: Gi(Zr(p), w(h)),
    };
  }
  return {
    queryThunk: f,
    mutationThunk: d,
    prefetch: m,
    updateQueryData: a,
    upsertQueryData: l,
    patchQueryData: s,
    buildMatchThunkActions: y,
  };
}
function v0(e, t, n, r) {
  return Nd(
    n[e.meta.arg.endpointName][t],
    jn(e) ? e.payload : void 0,
    Ga(e) ? e.payload : void 0,
    e.meta.arg.originalArgs,
    "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0,
    r,
  );
}
function ys(e, t, n) {
  const r = e[t];
  r && n(r);
}
function Eo(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function yh(e, t, n) {
  const r = e[Eo(t)];
  r && n(r);
}
var Ri = {};
function Ek({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: n,
  serializeQueryArgs: r,
  context: {
    endpointDefinitions: i,
    apiUid: o,
    extractRehydrationInfo: s,
    hasRehydrationInfo: a,
  },
  assertTagType: l,
  config: u,
}) {
  const c = Pt(`${e}/resetApiState`);
  function f(E, k, P, _) {
    var b;
    E[(b = k.queryCacheKey)] ??
      (E[b] = { status: "uninitialized", endpointName: k.endpointName }),
      ys(E, k.queryCacheKey, (j) => {
        (j.status = "pending"),
          (j.requestId = P && j.requestId ? j.requestId : _.requestId),
          k.originalArgs !== void 0 && (j.originalArgs = k.originalArgs),
          (j.startedTimeStamp = _.startedTimeStamp);
      });
  }
  function d(E, k, P) {
    ys(E, k.arg.queryCacheKey, (_) => {
      if (_.requestId !== k.requestId && !Sc(k.arg)) return;
      const { merge: b } = i[k.arg.endpointName];
      if (((_.status = "fulfilled"), b))
        if (_.data !== void 0) {
          const {
            fulfilledTimeStamp: j,
            arg: O,
            baseQueryMeta: D,
            requestId: T,
          } = k;
          let z = Bo(_.data, (F) =>
            b(F, P, {
              arg: O.originalArgs,
              baseQueryMeta: D,
              fulfilledTimeStamp: j,
              requestId: T,
            }),
          );
          _.data = z;
        } else _.data = P;
      else
        _.data =
          (i[k.arg.endpointName].structuralSharing ?? !0)
            ? p0(Ht(_.data) ? Dw(_.data) : _.data, P)
            : P;
      delete _.error, (_.fulfilledTimeStamp = k.fulfilledTimeStamp);
    });
  }
  const v = Et({
      name: `${e}/queries`,
      initialState: Ri,
      reducers: {
        removeQueryResult: {
          reducer(E, { payload: { queryCacheKey: k } }) {
            delete E[k];
          },
          prepare: Ci(),
        },
        cacheEntriesUpserted: {
          reducer(E, k) {
            for (const P of k.payload) {
              const { queryDescription: _, value: b } = P;
              f(E, _, !0, {
                arg: _,
                requestId: k.meta.requestId,
                startedTimeStamp: k.meta.timestamp,
              }),
                d(
                  E,
                  {
                    arg: _,
                    requestId: k.meta.requestId,
                    fulfilledTimeStamp: k.meta.timestamp,
                    baseQueryMeta: {},
                  },
                  b,
                );
            }
          },
          prepare: (E) => ({
            payload: E.map((_) => {
              const { endpointName: b, arg: j, value: O } = _,
                D = i[b];
              return {
                queryDescription: {
                  type: "query",
                  endpointName: b,
                  originalArgs: _.arg,
                  queryCacheKey: r({
                    queryArgs: j,
                    endpointDefinition: D,
                    endpointName: b,
                  }),
                },
                value: O,
              };
            }),
            meta: { [Kn]: !0, requestId: Ad(), timestamp: Date.now() },
          }),
        },
        queryResultPatched: {
          reducer(E, { payload: { queryCacheKey: k, patches: P } }) {
            ys(E, k, (_) => {
              _.data = Yp(_.data, P.concat());
            });
          },
          prepare: Ci(),
        },
      },
      extraReducers(E) {
        E.addCase(t.pending, (k, { meta: P, meta: { arg: _ } }) => {
          const b = Sc(_);
          f(k, _, b, P);
        })
          .addCase(t.fulfilled, (k, { meta: P, payload: _ }) => {
            d(k, P, _);
          })
          .addCase(
            t.rejected,
            (
              k,
              {
                meta: { condition: P, arg: _, requestId: b },
                error: j,
                payload: O,
              },
            ) => {
              ys(k, _.queryCacheKey, (D) => {
                if (!P) {
                  if (D.requestId !== b) return;
                  (D.status = "rejected"), (D.error = O ?? j);
                }
              });
            },
          )
          .addMatcher(a, (k, P) => {
            const { queries: _ } = s(P);
            for (const [b, j] of Object.entries(_))
              ((j == null ? void 0 : j.status) === "fulfilled" ||
                (j == null ? void 0 : j.status) === "rejected") &&
                (k[b] = j);
          });
      },
    }),
    S = Et({
      name: `${e}/mutations`,
      initialState: Ri,
      reducers: {
        removeMutationResult: {
          reducer(E, { payload: k }) {
            const P = Eo(k);
            P in E && delete E[P];
          },
          prepare: Ci(),
        },
      },
      extraReducers(E) {
        E.addCase(
          n.pending,
          (
            k,
            { meta: P, meta: { requestId: _, arg: b, startedTimeStamp: j } },
          ) => {
            b.track &&
              (k[Eo(P)] = {
                requestId: _,
                status: "pending",
                endpointName: b.endpointName,
                startedTimeStamp: j,
              });
          },
        )
          .addCase(n.fulfilled, (k, { payload: P, meta: _ }) => {
            _.arg.track &&
              yh(k, _, (b) => {
                b.requestId === _.requestId &&
                  ((b.status = "fulfilled"),
                  (b.data = P),
                  (b.fulfilledTimeStamp = _.fulfilledTimeStamp));
              });
          })
          .addCase(n.rejected, (k, { payload: P, error: _, meta: b }) => {
            b.arg.track &&
              yh(k, b, (j) => {
                j.requestId === b.requestId &&
                  ((j.status = "rejected"), (j.error = P ?? _));
              });
          })
          .addMatcher(a, (k, P) => {
            const { mutations: _ } = s(P);
            for (const [b, j] of Object.entries(_))
              ((j == null ? void 0 : j.status) === "fulfilled" ||
                (j == null ? void 0 : j.status) === "rejected") &&
                b !== (j == null ? void 0 : j.requestId) &&
                (k[b] = j);
          });
      },
    }),
    m = Et({
      name: `${e}/invalidation`,
      initialState: Ri,
      reducers: {
        updateProvidedBy: {
          reducer(E, k) {
            var b, j;
            const { queryCacheKey: P, providedTags: _ } = k.payload;
            for (const O of Object.values(E))
              for (const D of Object.values(O)) {
                const T = D.indexOf(P);
                T !== -1 && D.splice(T, 1);
              }
            for (const { type: O, id: D } of _) {
              const T =
                (b = E[O] ?? (E[O] = {}))[(j = D || "__internal_without_id")] ??
                (b[j] = []);
              T.includes(P) || T.push(P);
            }
          },
          prepare: Ci(),
        },
      },
      extraReducers(E) {
        E.addCase(
          v.actions.removeQueryResult,
          (k, { payload: { queryCacheKey: P } }) => {
            for (const _ of Object.values(k))
              for (const b of Object.values(_)) {
                const j = b.indexOf(P);
                j !== -1 && b.splice(j, 1);
              }
          },
        )
          .addMatcher(a, (k, P) => {
            var b, j;
            const { provided: _ } = s(P);
            for (const [O, D] of Object.entries(_))
              for (const [T, z] of Object.entries(D)) {
                const F =
                  (b = k[O] ?? (k[O] = {}))[
                    (j = T || "__internal_without_id")
                  ] ?? (b[j] = []);
                for (const W of z) F.includes(W) || F.push(W);
              }
          })
          .addMatcher(tn(jn(t), Ga(t)), (k, P) => {
            const _ = v0(P, "providesTags", i, l),
              { queryCacheKey: b } = P.meta.arg;
            m.caseReducers.updateProvidedBy(
              k,
              m.actions.updateProvidedBy({ queryCacheKey: b, providedTags: _ }),
            );
          });
      },
    }),
    w = Et({
      name: `${e}/subscriptions`,
      initialState: Ri,
      reducers: {
        updateSubscriptionOptions(E, k) {},
        unsubscribeQueryResult(E, k) {},
        internal_getRTKQSubscriptions() {},
      },
    }),
    y = Et({
      name: `${e}/internalSubscriptions`,
      initialState: Ri,
      reducers: {
        subscriptionsUpdated: {
          reducer(E, k) {
            return Yp(E, k.payload);
          },
          prepare: Ci(),
        },
      },
    }),
    p = Et({
      name: `${e}/config`,
      initialState: {
        online: dk(),
        focused: ck(),
        middlewareRegistered: !1,
        ...u,
      },
      reducers: {
        middlewareRegistered(E, { payload: k }) {
          E.middlewareRegistered =
            E.middlewareRegistered === "conflict" || o !== k ? "conflict" : !0;
        },
      },
      extraReducers: (E) => {
        E.addCase(Md, (k) => {
          k.online = !0;
        })
          .addCase(m0, (k) => {
            k.online = !1;
          })
          .addCase(Dd, (k) => {
            k.focused = !0;
          })
          .addCase(h0, (k) => {
            k.focused = !1;
          })
          .addMatcher(a, (k) => ({ ...k }));
      },
    }),
    h = Bv({
      queries: v.reducer,
      mutations: S.reducer,
      provided: m.reducer,
      subscriptions: y.reducer,
      config: p.reducer,
    }),
    g = (E, k) => h(c.match(k) ? void 0 : E, k),
    C = {
      ...p.actions,
      ...v.actions,
      ...w.actions,
      ...y.actions,
      ...S.actions,
      ...m.actions,
      resetApiState: c,
    };
  return { reducer: g, actions: C };
}
var Xn = Symbol.for("RTKQ/skipToken"),
  g0 = { status: "uninitialized" },
  vh = Bo(g0, () => {}),
  gh = Bo(g0, () => {});
function Ck({ serializeQueryArgs: e, reducerPath: t, createSelector: n }) {
  const r = (f) => vh,
    i = (f) => gh;
  return {
    buildQuerySelector: a,
    buildMutationSelector: l,
    selectInvalidatedBy: u,
    selectCachedArgsForQuery: c,
  };
  function o(f) {
    return { ...f, ...lk(f.status) };
  }
  function s(f) {
    return f[t];
  }
  function a(f, d) {
    return (v) => {
      const S = e({ queryArgs: v, endpointDefinition: d, endpointName: f });
      return n(
        v === Xn
          ? r
          : (y) => {
              var p, h;
              return (
                ((h = (p = s(y)) == null ? void 0 : p.queries) == null
                  ? void 0
                  : h[S]) ?? vh
              );
            },
        o,
      );
    };
  }
  function l() {
    return (f) => {
      let d;
      return (
        typeof f == "object" ? (d = Eo(f) ?? Xn) : (d = f),
        n(
          d === Xn
            ? i
            : (m) => {
                var w, y;
                return (
                  ((y = (w = s(m)) == null ? void 0 : w.mutations) == null
                    ? void 0
                    : y[d]) ?? gh
                );
              },
          o,
        )
      );
    };
  }
  function u(f, d) {
    const v = f[t],
      S = new Set();
    for (const m of d.map(gc)) {
      const w = v.provided[m.type];
      if (!w) continue;
      let y = (m.id !== void 0 ? w[m.id] : ch(Object.values(w))) ?? [];
      for (const p of y) S.add(p);
    }
    return ch(
      Array.from(S.values()).map((m) => {
        const w = v.queries[m];
        return w
          ? [
              {
                queryCacheKey: m,
                endpointName: w.endpointName,
                originalArgs: w.originalArgs,
              },
            ]
          : [];
      }),
    );
  }
  function c(f, d) {
    return Object.values(f[t].queries)
      .filter(
        (v) =>
          (v == null ? void 0 : v.endpointName) === d &&
          v.status !== "uninitialized",
      )
      .map((v) => v.originalArgs);
  }
}
var pr = WeakMap ? new WeakMap() : void 0,
  Sh = ({ endpointName: e, queryArgs: t }) => {
    let n = "";
    const r = pr == null ? void 0 : pr.get(t);
    if (typeof r == "string") n = r;
    else {
      const i = JSON.stringify(
        t,
        (o, s) => (
          (s = typeof s == "bigint" ? { $bigint: s.toString() } : s),
          (s = Ft(s)
            ? Object.keys(s)
                .sort()
                .reduce((a, l) => ((a[l] = s[l]), a), {})
            : s),
          s
        ),
      );
      Ft(t) && (pr == null || pr.set(t, i)), (n = i);
    }
    return `${e}(${n})`;
  };
function Rk(...e) {
  return function (n) {
    const r = ya((u) => {
        var c;
        return (c = n.extractRehydrationInfo) == null
          ? void 0
          : c.call(n, u, { reducerPath: n.reducerPath ?? "api" });
      }),
      i = {
        reducerPath: "api",
        keepUnusedDataFor: 60,
        refetchOnMountOrArgChange: !1,
        refetchOnFocus: !1,
        refetchOnReconnect: !1,
        invalidationBehavior: "delayed",
        ...n,
        extractRehydrationInfo: r,
        serializeQueryArgs(u) {
          let c = Sh;
          if ("serializeQueryArgs" in u.endpointDefinition) {
            const f = u.endpointDefinition.serializeQueryArgs;
            c = (d) => {
              const v = f(d);
              return typeof v == "string" ? v : Sh({ ...d, queryArgs: v });
            };
          } else n.serializeQueryArgs && (c = n.serializeQueryArgs);
          return c(u);
        },
        tagTypes: [...(n.tagTypes || [])],
      },
      o = {
        endpointDefinitions: {},
        batch(u) {
          u();
        },
        apiUid: Ad(),
        extractRehydrationInfo: r,
        hasRehydrationInfo: ya((u) => r(u) != null),
      },
      s = {
        injectEndpoints: l,
        enhanceEndpoints({ addTagTypes: u, endpoints: c }) {
          if (u)
            for (const f of u) i.tagTypes.includes(f) || i.tagTypes.push(f);
          if (c)
            for (const [f, d] of Object.entries(c))
              typeof d == "function"
                ? d(o.endpointDefinitions[f])
                : Object.assign(o.endpointDefinitions[f] || {}, d);
          return s;
        },
      },
      a = e.map((u) => u.init(s, i, o));
    function l(u) {
      const c = u.endpoints({
        query: (f) => ({ ...f, type: "query" }),
        mutation: (f) => ({ ...f, type: "mutation" }),
      });
      for (const [f, d] of Object.entries(c)) {
        if (u.overrideExisting !== !0 && f in o.endpointDefinitions) {
          if (u.overrideExisting === "throw") throw new Error(ft(39));
          typeof process < "u";
          continue;
        }
        o.endpointDefinitions[f] = d;
        for (const v of a) v.injectEndpoint(f, d);
      }
      return s;
    }
    return s.injectEndpoints({ endpoints: n.endpoints });
  };
}
function ln(e, ...t) {
  return Object.assign(e, ...t);
}
var Pk = ({ api: e, queryThunk: t, internalState: n }) => {
  const r = `${e.reducerPath}/subscriptions`;
  let i = null,
    o = null;
  const { updateSubscriptionOptions: s, unsubscribeQueryResult: a } =
      e.internalActions,
    l = (v, S) => {
      var w, y, p;
      if (s.match(S)) {
        const { queryCacheKey: h, requestId: g, options: C } = S.payload;
        return (
          (w = v == null ? void 0 : v[h]) != null && w[g] && (v[h][g] = C), !0
        );
      }
      if (a.match(S)) {
        const { queryCacheKey: h, requestId: g } = S.payload;
        return v[h] && delete v[h][g], !0;
      }
      if (e.internalActions.removeQueryResult.match(S))
        return delete v[S.payload.queryCacheKey], !0;
      if (t.pending.match(S)) {
        const {
            meta: { arg: h, requestId: g },
          } = S,
          C = v[(y = h.queryCacheKey)] ?? (v[y] = {});
        return (
          (C[`${g}_running`] = {}),
          h.subscribe && (C[g] = h.subscriptionOptions ?? C[g] ?? {}),
          !0
        );
      }
      let m = !1;
      if (t.fulfilled.match(S) || t.rejected.match(S)) {
        const h = v[S.meta.arg.queryCacheKey] || {},
          g = `${S.meta.requestId}_running`;
        m || (m = !!h[g]), delete h[g];
      }
      if (t.rejected.match(S)) {
        const {
          meta: { condition: h, arg: g, requestId: C },
        } = S;
        if (h && g.subscribe) {
          const E = v[(p = g.queryCacheKey)] ?? (v[p] = {});
          (E[C] = g.subscriptionOptions ?? E[C] ?? {}), (m = !0);
        }
      }
      return m;
    },
    u = () => n.currentSubscriptions,
    d = {
      getSubscriptions: u,
      getSubscriptionCount: (v) => {
        const m = u()[v] ?? {};
        return Br(m);
      },
      isRequestSubscribed: (v, S) => {
        var w;
        const m = u();
        return !!((w = m == null ? void 0 : m[v]) != null && w[S]);
      },
    };
  return (v, S) => {
    if (
      (i || (i = JSON.parse(JSON.stringify(n.currentSubscriptions))),
      e.util.resetApiState.match(v))
    )
      return (i = n.currentSubscriptions = {}), (o = null), [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(v))
      return [!1, d];
    const m = l(n.currentSubscriptions, v);
    let w = !0;
    if (m) {
      o ||
        (o = setTimeout(() => {
          const h = JSON.parse(JSON.stringify(n.currentSubscriptions)),
            [, g] = Gv(i, () => h);
          S.next(e.internalActions.subscriptionsUpdated(g)),
            (i = h),
            (o = null);
        }, 500));
      const y = typeof v.type == "string" && !!v.type.startsWith(r),
        p = t.rejected.match(v) && v.meta.condition && !!v.meta.arg.subscribe;
      w = !y && !p;
    }
    return [w, !1];
  };
};
function bk(e) {
  for (const t in e) return !1;
  return !0;
}
var _k = 2147483647 / 1e3 - 1,
  jk = ({
    reducerPath: e,
    api: t,
    queryThunk: n,
    context: r,
    internalState: i,
  }) => {
    const {
        removeQueryResult: o,
        unsubscribeQueryResult: s,
        cacheEntriesUpserted: a,
      } = t.internalActions,
      l = tn(s.match, n.fulfilled, n.rejected, a.match);
    function u(v) {
      const S = i.currentSubscriptions[v];
      return !!S && !bk(S);
    }
    const c = {},
      f = (v, S, m) => {
        var w;
        if (l(v)) {
          const y = S.getState()[e];
          let p;
          if (a.match(v))
            p = v.payload.map((h) => h.queryDescription.queryCacheKey);
          else {
            const { queryCacheKey: h } = s.match(v) ? v.payload : v.meta.arg;
            p = [h];
          }
          for (const h of p)
            d(
              h,
              (w = y.queries[h]) == null ? void 0 : w.endpointName,
              S,
              y.config,
            );
        }
        if (t.util.resetApiState.match(v))
          for (const [y, p] of Object.entries(c))
            p && clearTimeout(p), delete c[y];
        if (r.hasRehydrationInfo(v)) {
          const y = S.getState()[e],
            { queries: p } = r.extractRehydrationInfo(v);
          for (const [h, g] of Object.entries(p))
            d(h, g == null ? void 0 : g.endpointName, S, y.config);
        }
      };
    function d(v, S, m, w) {
      const y = r.endpointDefinitions[S],
        p = (y == null ? void 0 : y.keepUnusedDataFor) ?? w.keepUnusedDataFor;
      if (p === 1 / 0) return;
      const h = Math.max(0, Math.min(p, _k));
      if (!u(v)) {
        const g = c[v];
        g && clearTimeout(g),
          (c[v] = setTimeout(() => {
            u(v) || m.dispatch(o({ queryCacheKey: v })), delete c[v];
          }, h * 1e3));
      }
    }
    return f;
  },
  xh = new Error("Promise never resolved before cacheEntryRemoved."),
  Ok = ({
    api: e,
    reducerPath: t,
    context: n,
    queryThunk: r,
    mutationThunk: i,
    internalState: o,
  }) => {
    const s = hc(r),
      a = hc(i),
      l = jn(r, i),
      u = {};
    function c(m, w, y) {
      const p = u[m];
      p != null &&
        p.valueResolved &&
        (p.valueResolved({ data: w, meta: y }), delete p.valueResolved);
    }
    function f(m) {
      const w = u[m];
      w && (delete u[m], w.cacheEntryRemoved());
    }
    const d = (m, w, y) => {
      const p = v(m);
      function h(g, C, E, k) {
        const P = y[t].queries[C],
          _ = w.getState()[t].queries[C];
        !P && _ && S(g, k, C, w, E);
      }
      if (r.pending.match(m))
        h(
          m.meta.arg.endpointName,
          p,
          m.meta.requestId,
          m.meta.arg.originalArgs,
        );
      else if (e.internalActions.cacheEntriesUpserted.match(m))
        for (const { queryDescription: g, value: C } of m.payload) {
          const { endpointName: E, originalArgs: k, queryCacheKey: P } = g;
          h(E, P, m.meta.requestId, k), c(P, C, {});
        }
      else if (i.pending.match(m))
        w.getState()[t].mutations[p] &&
          S(
            m.meta.arg.endpointName,
            m.meta.arg.originalArgs,
            p,
            w,
            m.meta.requestId,
          );
      else if (l(m)) c(p, m.payload, m.meta.baseQueryMeta);
      else if (
        e.internalActions.removeQueryResult.match(m) ||
        e.internalActions.removeMutationResult.match(m)
      )
        f(p);
      else if (e.util.resetApiState.match(m))
        for (const g of Object.keys(u)) f(g);
    };
    function v(m) {
      return s(m)
        ? m.meta.arg.queryCacheKey
        : a(m)
          ? (m.meta.arg.fixedCacheKey ?? m.meta.requestId)
          : e.internalActions.removeQueryResult.match(m)
            ? m.payload.queryCacheKey
            : e.internalActions.removeMutationResult.match(m)
              ? Eo(m.payload)
              : "";
    }
    function S(m, w, y, p, h) {
      const g = n.endpointDefinitions[m],
        C = g == null ? void 0 : g.onCacheEntryAdded;
      if (!C) return;
      const E = {},
        k = new Promise((D) => {
          E.cacheEntryRemoved = D;
        }),
        P = Promise.race([
          new Promise((D) => {
            E.valueResolved = D;
          }),
          k.then(() => {
            throw xh;
          }),
        ]);
      P.catch(() => {}), (u[y] = E);
      const _ = e.endpoints[m].select(g.type === "query" ? w : y),
        b = p.dispatch((D, T, z) => z),
        j = {
          ...p,
          getCacheEntry: () => _(p.getState()),
          requestId: h,
          extra: b,
          updateCachedData:
            g.type === "query"
              ? (D) => p.dispatch(e.util.updateQueryData(m, w, D))
              : void 0,
          cacheDataLoaded: P,
          cacheEntryRemoved: k,
        },
        O = C(w, j);
      Promise.resolve(O).catch((D) => {
        if (D !== xh) throw D;
      });
    }
    return d;
  },
  Ak =
    ({ api: e, context: { apiUid: t }, reducerPath: n }) =>
    (r, i) => {
      e.util.resetApiState.match(r) &&
        i.dispatch(e.internalActions.middlewareRegistered(t)),
        typeof process < "u";
    },
  Tk = ({
    reducerPath: e,
    context: t,
    context: { endpointDefinitions: n },
    mutationThunk: r,
    queryThunk: i,
    api: o,
    assertTagType: s,
    refetchQuery: a,
    internalState: l,
  }) => {
    const { removeQueryResult: u } = o.internalActions,
      c = tn(jn(r), Ga(r)),
      f = tn(jn(r, i), Zr(r, i));
    let d = [];
    const v = (w, y) => {
      c(w)
        ? m(v0(w, "invalidatesTags", n, s), y)
        : f(w)
          ? m([], y)
          : o.util.invalidateTags.match(w) &&
            m(Nd(w.payload, void 0, void 0, void 0, void 0, s), y);
    };
    function S(w) {
      var y, p;
      for (const h in w.queries)
        if (((y = w.queries[h]) == null ? void 0 : y.status) === "pending")
          return !0;
      for (const h in w.mutations)
        if (((p = w.mutations[h]) == null ? void 0 : p.status) === "pending")
          return !0;
      return !1;
    }
    function m(w, y) {
      const p = y.getState(),
        h = p[e];
      if ((d.push(...w), h.config.invalidationBehavior === "delayed" && S(h)))
        return;
      const g = d;
      if (((d = []), g.length === 0)) return;
      const C = o.util.selectInvalidatedBy(p, g);
      t.batch(() => {
        const E = Array.from(C.values());
        for (const { queryCacheKey: k } of E) {
          const P = h.queries[k],
            _ = l.currentSubscriptions[k] ?? {};
          P &&
            (Br(_) === 0
              ? y.dispatch(u({ queryCacheKey: k }))
              : P.status !== "uninitialized" && y.dispatch(a(P)));
        }
      });
    }
    return v;
  },
  Dk = ({
    reducerPath: e,
    queryThunk: t,
    api: n,
    refetchQuery: r,
    internalState: i,
  }) => {
    const o = {},
      s = (d, v) => {
        (n.internalActions.updateSubscriptionOptions.match(d) ||
          n.internalActions.unsubscribeQueryResult.match(d)) &&
          l(d.payload, v),
          (t.pending.match(d) || (t.rejected.match(d) && d.meta.condition)) &&
            l(d.meta.arg, v),
          (t.fulfilled.match(d) ||
            (t.rejected.match(d) && !d.meta.condition)) &&
            a(d.meta.arg, v),
          n.util.resetApiState.match(d) && c();
      };
    function a({ queryCacheKey: d }, v) {
      const S = v.getState()[e],
        m = S.queries[d],
        w = i.currentSubscriptions[d];
      if (!m || m.status === "uninitialized") return;
      const { lowestPollingInterval: y, skipPollingIfUnfocused: p } = f(w);
      if (!Number.isFinite(y)) return;
      const h = o[d];
      h != null && h.timeout && (clearTimeout(h.timeout), (h.timeout = void 0));
      const g = Date.now() + y;
      o[d] = {
        nextPollTimestamp: g,
        pollingInterval: y,
        timeout: setTimeout(() => {
          (S.config.focused || !p) && v.dispatch(r(m)),
            a({ queryCacheKey: d }, v);
        }, y),
      };
    }
    function l({ queryCacheKey: d }, v) {
      const m = v.getState()[e].queries[d],
        w = i.currentSubscriptions[d];
      if (!m || m.status === "uninitialized") return;
      const { lowestPollingInterval: y } = f(w);
      if (!Number.isFinite(y)) {
        u(d);
        return;
      }
      const p = o[d],
        h = Date.now() + y;
      (!p || h < p.nextPollTimestamp) && a({ queryCacheKey: d }, v);
    }
    function u(d) {
      const v = o[d];
      v != null && v.timeout && clearTimeout(v.timeout), delete o[d];
    }
    function c() {
      for (const d of Object.keys(o)) u(d);
    }
    function f(d = {}) {
      let v = !1,
        S = Number.POSITIVE_INFINITY;
      for (let m in d)
        d[m].pollingInterval &&
          ((S = Math.min(d[m].pollingInterval, S)),
          (v = d[m].skipPollingIfUnfocused || v));
      return { lowestPollingInterval: S, skipPollingIfUnfocused: v };
    }
    return s;
  },
  Mk = ({ api: e, context: t, queryThunk: n, mutationThunk: r }) => {
    const i = Od(n, r),
      o = Zr(n, r),
      s = jn(n, r),
      a = {};
    return (u, c) => {
      var f, d;
      if (i(u)) {
        const {
            requestId: v,
            arg: { endpointName: S, originalArgs: m },
          } = u.meta,
          w = t.endpointDefinitions[S],
          y = w == null ? void 0 : w.onQueryStarted;
        if (y) {
          const p = {},
            h = new Promise((k, P) => {
              (p.resolve = k), (p.reject = P);
            });
          h.catch(() => {}), (a[v] = p);
          const g = e.endpoints[S].select(w.type === "query" ? m : v),
            C = c.dispatch((k, P, _) => _),
            E = {
              ...c,
              getCacheEntry: () => g(c.getState()),
              requestId: v,
              extra: C,
              updateCachedData:
                w.type === "query"
                  ? (k) => c.dispatch(e.util.updateQueryData(S, m, k))
                  : void 0,
              queryFulfilled: h,
            };
          y(m, E);
        }
      } else if (s(u)) {
        const { requestId: v, baseQueryMeta: S } = u.meta;
        (f = a[v]) == null || f.resolve({ data: u.payload, meta: S }),
          delete a[v];
      } else if (o(u)) {
        const { requestId: v, rejectedWithValue: S, baseQueryMeta: m } = u.meta;
        (d = a[v]) == null ||
          d.reject({
            error: u.payload ?? u.error,
            isUnhandledError: !S,
            meta: m,
          }),
          delete a[v];
      }
    };
  },
  Nk = ({
    reducerPath: e,
    context: t,
    api: n,
    refetchQuery: r,
    internalState: i,
  }) => {
    const { removeQueryResult: o } = n.internalActions,
      s = (l, u) => {
        Dd.match(l) && a(u, "refetchOnFocus"),
          Md.match(l) && a(u, "refetchOnReconnect");
      };
    function a(l, u) {
      const c = l.getState()[e],
        f = c.queries,
        d = i.currentSubscriptions;
      t.batch(() => {
        for (const v of Object.keys(d)) {
          const S = f[v],
            m = d[v];
          if (!m || !S) continue;
          (Object.values(m).some((y) => y[u] === !0) ||
            (Object.values(m).every((y) => y[u] === void 0) && c.config[u])) &&
            (Br(m) === 0
              ? l.dispatch(o({ queryCacheKey: v }))
              : S.status !== "uninitialized" && l.dispatch(r(S)));
        }
      });
    }
    return s;
  };
function $k(e) {
  const { reducerPath: t, queryThunk: n, api: r, context: i } = e,
    { apiUid: o } = i,
    s = { invalidateTags: Pt(`${t}/invalidateTags`) },
    a = (f) => f.type.startsWith(`${t}/`),
    l = [Ak, jk, Tk, Dk, Ok, Mk];
  return {
    middleware: (f) => {
      let d = !1;
      const S = {
          ...e,
          internalState: { currentSubscriptions: {} },
          refetchQuery: c,
          isThisApiSliceAction: a,
        },
        m = l.map((p) => p(S)),
        w = Pk(S),
        y = Nk(S);
      return (p) => (h) => {
        if (!Fv(h)) return p(h);
        d || ((d = !0), f.dispatch(r.internalActions.middlewareRegistered(o)));
        const g = { ...f, next: p },
          C = f.getState(),
          [E, k] = w(h, g, C);
        let P;
        if (
          (E ? (P = p(h)) : (P = k),
          f.getState()[t] && (y(h, g, C), a(h) || i.hasRehydrationInfo(h)))
        )
          for (const _ of m) _(h, g, C);
        return P;
      };
    },
    actions: s,
  };
  function c(f) {
    return e.api.endpoints[f.endpointName].initiate(f.originalArgs, {
      subscribe: !1,
      forceRefetch: !0,
    });
  }
}
var wh = Symbol(),
  Ik = ({ createSelector: e = jd } = {}) => ({
    name: wh,
    init(
      t,
      {
        baseQuery: n,
        tagTypes: r,
        reducerPath: i,
        serializeQueryArgs: o,
        keepUnusedDataFor: s,
        refetchOnMountOrArgChange: a,
        refetchOnFocus: l,
        refetchOnReconnect: u,
        invalidationBehavior: c,
      },
      f,
    ) {
      Uw();
      const d = (A) => (typeof process < "u", A);
      Object.assign(t, {
        reducerPath: i,
        endpoints: {},
        internalActions: {
          onOnline: Md,
          onOffline: m0,
          onFocus: Dd,
          onFocusLost: h0,
        },
        util: {},
      });
      const {
          queryThunk: v,
          mutationThunk: S,
          patchQueryData: m,
          updateQueryData: w,
          upsertQueryData: y,
          prefetch: p,
          buildMatchThunkActions: h,
        } = kk({
          baseQuery: n,
          reducerPath: i,
          context: f,
          api: t,
          serializeQueryArgs: o,
          assertTagType: d,
        }),
        { reducer: g, actions: C } = Ek({
          context: f,
          queryThunk: v,
          mutationThunk: S,
          serializeQueryArgs: o,
          reducerPath: i,
          assertTagType: d,
          config: {
            refetchOnFocus: l,
            refetchOnReconnect: u,
            refetchOnMountOrArgChange: a,
            keepUnusedDataFor: s,
            reducerPath: i,
            invalidationBehavior: c,
          },
        });
      ln(t.util, {
        patchQueryData: m,
        updateQueryData: w,
        upsertQueryData: y,
        prefetch: p,
        resetApiState: C.resetApiState,
        upsertQueryEntries: C.cacheEntriesUpserted,
      }),
        ln(t.internalActions, C);
      const { middleware: E, actions: k } = $k({
        reducerPath: i,
        context: f,
        queryThunk: v,
        mutationThunk: S,
        api: t,
        assertTagType: d,
      });
      ln(t.util, k), ln(t, { reducer: g, middleware: E });
      const {
        buildQuerySelector: P,
        buildMutationSelector: _,
        selectInvalidatedBy: b,
        selectCachedArgsForQuery: j,
      } = Ck({ serializeQueryArgs: o, reducerPath: i, createSelector: e });
      ln(t.util, { selectInvalidatedBy: b, selectCachedArgsForQuery: j });
      const {
        buildInitiateQuery: O,
        buildInitiateMutation: D,
        getRunningMutationThunk: T,
        getRunningMutationsThunk: z,
        getRunningQueriesThunk: F,
        getRunningQueryThunk: W,
      } = wk({
        queryThunk: v,
        mutationThunk: S,
        api: t,
        serializeQueryArgs: o,
        context: f,
      });
      return (
        ln(t.util, {
          getRunningMutationThunk: T,
          getRunningMutationsThunk: z,
          getRunningQueryThunk: W,
          getRunningQueriesThunk: F,
        }),
        {
          name: wh,
          injectEndpoint(A, I) {
            var H;
            const $ = t;
            (H = $.endpoints)[A] ?? (H[A] = {}),
              y0(I)
                ? ln(
                    $.endpoints[A],
                    { name: A, select: P(A, I), initiate: O(A, I) },
                    h(v, A),
                  )
                : gk(I) &&
                  ln(
                    $.endpoints[A],
                    { name: A, select: _(), initiate: D(A) },
                    h(S, A),
                  );
          },
        }
      );
    },
  });
function zk(e) {
  return e.type === "query";
}
function Lk(e) {
  return e.type === "mutation";
}
function vs(e, ...t) {
  return Object.assign(e, ...t);
}
function ou(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
var hr = WeakMap ? new WeakMap() : void 0,
  Bk = ({ endpointName: e, queryArgs: t }) => {
    let n = "";
    const r = hr == null ? void 0 : hr.get(t);
    if (typeof r == "string") n = r;
    else {
      const i = JSON.stringify(
        t,
        (o, s) => (
          (s = typeof s == "bigint" ? { $bigint: s.toString() } : s),
          (s = Ft(s)
            ? Object.keys(s)
                .sort()
                .reduce((a, l) => ((a[l] = s[l]), a), {})
            : s),
          s
        ),
      );
      Ft(t) && (hr == null || hr.set(t, i)), (n = i);
    }
    return `${e}(${n})`;
  },
  su = Symbol();
function kh(e, t, n, r) {
  const i = R.useMemo(
      () => ({
        queryArgs: e,
        serialized:
          typeof e == "object"
            ? t({ queryArgs: e, endpointDefinition: n, endpointName: r })
            : e,
      }),
      [e, t, n, r],
    ),
    o = R.useRef(i);
  return (
    R.useEffect(() => {
      o.current.serialized !== i.serialized && (o.current = i);
    }, [i]),
    o.current.serialized === i.serialized ? o.current.queryArgs : e
  );
}
function au(e) {
  const t = R.useRef(e);
  return (
    R.useEffect(() => {
      Wi(t.current, e) || (t.current = e);
    }, [e]),
    Wi(t.current, e) ? t.current : e
  );
}
var Fk = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Hk = Fk(),
  Uk = () => typeof navigator < "u" && navigator.product === "ReactNative",
  Vk = Uk(),
  Wk = () => (Hk || Vk ? R.useLayoutEffect : R.useEffect),
  Qk = Wk(),
  Gk = (e) =>
    e.isUninitialized
      ? {
          ...e,
          isUninitialized: !1,
          isFetching: !0,
          isLoading: e.data === void 0,
          status: f0.pending,
        }
      : e;
function qk({
  api: e,
  moduleOptions: {
    batch: t,
    hooks: { useDispatch: n, useSelector: r, useStore: i },
    unstable__sideEffectsInRender: o,
    createSelector: s,
  },
  serializeQueryArgs: a,
  context: l,
}) {
  const u = o ? (S) => S() : R.useEffect;
  return { buildQueryHooks: d, buildMutationHook: v, usePrefetch: f };
  function c(S, m, w) {
    if (m != null && m.endpointName && S.isUninitialized) {
      const { endpointName: E } = m,
        k = l.endpointDefinitions[E];
      a({
        queryArgs: m.originalArgs,
        endpointDefinition: k,
        endpointName: E,
      }) === a({ queryArgs: w, endpointDefinition: k, endpointName: E }) &&
        (m = void 0);
    }
    let y = S.isSuccess ? S.data : m == null ? void 0 : m.data;
    y === void 0 && (y = S.data);
    const p = y !== void 0,
      h = S.isLoading,
      g = (!m || m.isLoading || m.isUninitialized) && !p && h,
      C = S.isSuccess || (h && p);
    return {
      ...S,
      data: y,
      currentData: S.data,
      isFetching: h,
      isLoading: g,
      isSuccess: C,
    };
  }
  function f(S, m) {
    const w = n(),
      y = au(m);
    return R.useCallback(
      (p, h) => w(e.util.prefetch(S, p, { ...y, ...h })),
      [S, w, y],
    );
  }
  function d(S) {
    const m = (
        p,
        {
          refetchOnReconnect: h,
          refetchOnFocus: g,
          refetchOnMountOrArgChange: C,
          skip: E = !1,
          pollingInterval: k = 0,
          skipPollingIfUnfocused: P = !1,
        } = {},
      ) => {
        const { initiate: _ } = e.endpoints[S],
          b = n(),
          j = R.useRef(void 0);
        if (!j.current) {
          const $ = b(e.internalActions.internal_getRTKQSubscriptions());
          j.current = $;
        }
        const O = kh(E ? Xn : p, Bk, l.endpointDefinitions[S], S),
          D = au({
            refetchOnReconnect: h,
            refetchOnFocus: g,
            pollingInterval: k,
            skipPollingIfUnfocused: P,
          }),
          T = R.useRef(!1),
          z = R.useRef(void 0);
        let { queryCacheKey: F, requestId: W } = z.current || {},
          A = !1;
        F && W && (A = j.current.isRequestSubscribed(F, W));
        const I = !A && T.current;
        return (
          u(() => {
            T.current = A;
          }),
          u(() => {
            I && (z.current = void 0);
          }, [I]),
          u(() => {
            var U;
            const $ = z.current;
            if ((typeof process < "u", O === Xn)) {
              $ == null || $.unsubscribe(), (z.current = void 0);
              return;
            }
            const H = (U = z.current) == null ? void 0 : U.subscriptionOptions;
            if (!$ || $.arg !== O) {
              $ == null || $.unsubscribe();
              const Z = b(_(O, { subscriptionOptions: D, forceRefetch: C }));
              z.current = Z;
            } else D !== H && $.updateSubscriptionOptions(D);
          }, [b, _, C, O, D, I]),
          R.useEffect(
            () => () => {
              var $;
              ($ = z.current) == null || $.unsubscribe(), (z.current = void 0);
            },
            [],
          ),
          R.useMemo(
            () => ({
              refetch: () => {
                var $;
                if (!z.current) throw new Error(ft(38));
                return ($ = z.current) == null ? void 0 : $.refetch();
              },
            }),
            [],
          )
        );
      },
      w = ({
        refetchOnReconnect: p,
        refetchOnFocus: h,
        pollingInterval: g = 0,
        skipPollingIfUnfocused: C = !1,
      } = {}) => {
        const { initiate: E } = e.endpoints[S],
          k = n(),
          [P, _] = R.useState(su),
          b = R.useRef(void 0),
          j = au({
            refetchOnReconnect: p,
            refetchOnFocus: h,
            pollingInterval: g,
            skipPollingIfUnfocused: C,
          });
        u(() => {
          var z, F;
          const T = (z = b.current) == null ? void 0 : z.subscriptionOptions;
          j !== T &&
            ((F = b.current) == null || F.updateSubscriptionOptions(j));
        }, [j]);
        const O = R.useRef(j);
        u(() => {
          O.current = j;
        }, [j]);
        const D = R.useCallback(
          function (T, z = !1) {
            let F;
            return (
              t(() => {
                var W;
                (W = b.current) == null || W.unsubscribe(),
                  (b.current = F =
                    k(
                      E(T, {
                        subscriptionOptions: O.current,
                        forceRefetch: !z,
                      }),
                    )),
                  _(T);
              }),
              F
            );
          },
          [k, E],
        );
        return (
          R.useEffect(
            () => () => {
              var T;
              (T = b == null ? void 0 : b.current) == null || T.unsubscribe();
            },
            [],
          ),
          R.useEffect(() => {
            P !== su && !b.current && D(P, !0);
          }, [P, D]),
          R.useMemo(() => [D, P], [D, P])
        );
      },
      y = (p, { skip: h = !1, selectFromResult: g } = {}) => {
        const { select: C } = e.endpoints[S],
          E = kh(h ? Xn : p, a, l.endpointDefinitions[S], S),
          k = R.useRef(void 0),
          P = R.useMemo(
            () =>
              s([C(E), (D, T) => T, (D) => E], c, {
                memoizeOptions: { resultEqualityCheck: Wi },
              }),
            [C, E],
          ),
          _ = R.useMemo(
            () =>
              g
                ? s([P], g, {
                    devModeChecks: { identityFunctionCheck: "never" },
                  })
                : P,
            [P, g],
          ),
          b = r((D) => _(D, k.current), Wi),
          j = i(),
          O = P(j.getState(), k.current);
        return (
          Qk(() => {
            k.current = O;
          }, [O]),
          b
        );
      };
    return {
      useQueryState: y,
      useQuerySubscription: m,
      useLazyQuerySubscription: w,
      useLazyQuery(p) {
        const [h, g] = w(p),
          C = y(g, { ...p, skip: g === su }),
          E = R.useMemo(() => ({ lastArg: g }), [g]);
        return R.useMemo(() => [h, C, E], [h, C, E]);
      },
      useQuery(p, h) {
        const g = m(p, h),
          C = y(p, {
            selectFromResult: p === Xn || (h != null && h.skip) ? void 0 : Gk,
            ...h,
          }),
          {
            data: E,
            status: k,
            isLoading: P,
            isSuccess: _,
            isError: b,
            error: j,
          } = C;
        return (
          R.useDebugValue({
            data: E,
            status: k,
            isLoading: P,
            isSuccess: _,
            isError: b,
            error: j,
          }),
          R.useMemo(() => ({ ...C, ...g }), [C, g])
        );
      },
    };
  }
  function v(S) {
    return ({ selectFromResult: m, fixedCacheKey: w } = {}) => {
      const { select: y, initiate: p } = e.endpoints[S],
        h = n(),
        [g, C] = R.useState();
      R.useEffect(
        () => () => {
          (g != null && g.arg.fixedCacheKey) || g == null || g.reset();
        },
        [g],
      );
      const E = R.useCallback(
          function (H) {
            const U = h(p(H, { fixedCacheKey: w }));
            return C(U), U;
          },
          [h, p, w],
        ),
        { requestId: k } = g || {},
        P = R.useMemo(
          () =>
            y({
              fixedCacheKey: w,
              requestId: g == null ? void 0 : g.requestId,
            }),
          [w, g, y],
        ),
        _ = R.useMemo(() => (m ? s([P], m) : P), [m, P]),
        b = r(_, Wi),
        j = w == null ? (g == null ? void 0 : g.arg.originalArgs) : void 0,
        O = R.useCallback(() => {
          t(() => {
            g && C(void 0),
              w &&
                h(
                  e.internalActions.removeMutationResult({
                    requestId: k,
                    fixedCacheKey: w,
                  }),
                );
          });
        }, [h, w, g, k]),
        {
          endpointName: D,
          data: T,
          status: z,
          isLoading: F,
          isSuccess: W,
          isError: A,
          error: I,
        } = b;
      R.useDebugValue({
        endpointName: D,
        data: T,
        status: z,
        isLoading: F,
        isSuccess: W,
        isError: A,
        error: I,
      });
      const $ = R.useMemo(
        () => ({ ...b, originalArgs: j, reset: O }),
        [b, j, O],
      );
      return R.useMemo(() => [E, $], [E, $]);
    };
  }
}
var Kk = Symbol(),
  Xk = ({
    batch: e = bw,
    hooks: t = { useDispatch: K, useSelector: N, useStore: zv },
    createSelector: n = jd,
    unstable__sideEffectsInRender: r = !1,
    ...i
  } = {}) => ({
    name: Kk,
    init(o, { serializeQueryArgs: s }, a) {
      const l = o,
        {
          buildQueryHooks: u,
          buildMutationHook: c,
          usePrefetch: f,
        } = qk({
          api: o,
          moduleOptions: {
            batch: e,
            hooks: t,
            unstable__sideEffectsInRender: r,
            createSelector: n,
          },
          serializeQueryArgs: s,
          context: a,
        });
      return (
        vs(l, { usePrefetch: f }),
        vs(a, { batch: e }),
        {
          injectEndpoint(d, v) {
            if (zk(v)) {
              const {
                useQuery: S,
                useLazyQuery: m,
                useLazyQuerySubscription: w,
                useQueryState: y,
                useQuerySubscription: p,
              } = u(d);
              vs(l.endpoints[d], {
                useQuery: S,
                useLazyQuery: m,
                useLazyQuerySubscription: w,
                useQueryState: y,
                useQuerySubscription: p,
              }),
                (o[`use${ou(d)}Query`] = S),
                (o[`useLazy${ou(d)}Query`] = m);
            } else if (Lk(v)) {
              const S = c(d);
              vs(l.endpoints[d], { useMutation: S }),
                (o[`use${ou(d)}Mutation`] = S);
            }
          },
        }
      );
    },
  }),
  Yk = Rk(Ik(), Xk());
const Jk = "http://localhost:3500",
  Ki = Yk({
    reducerPath: "api",
    baseQuery: vk({ baseUrl: Jk }),
    endpoints: (e) => ({
      getAllGameSessions: e.query({ query: () => "gameSessions" }),
      getGameSessionById: e.query({ query: (t) => `gameSessions/${t}` }),
      createGameSession: e.mutation({
        query: (t) => ({ url: "gameSessions", method: "POST", body: t }),
      }),
      updateGameSession: e.mutation({
        query: ({ id: t, ...n }) => ({
          url: `gameSessions/${t}`,
          method: "PATCH",
          body: n,
        }),
      }),
      deleteGameSession: e.mutation({
        query: (t) => ({ url: `gameSessions/${t}`, method: "DELETE" }),
      }),
    }),
  }),
  {
    useGetAllGameSessionsQuery: N4,
    useGetGameSessionByIdQuery: $4,
    useLazyGetGameSessionByIdQuery: Zk,
    useCreateGameSessionMutation: e3,
    useUpdateGameSessionMutation: t3,
    useDeleteGameSessionMutation: n3,
  } = Ki;
Ki.reducer;
const Ka = () => {
    const [e] = e3(),
      [t] = t3(),
      [n] = n3(),
      r = qi.get("blackjack-session-id"),
      i = N((d) => d.playersArr),
      o = N((d) => d.inactivePlayers),
      s = N((d) => d.dealerObj),
      a = N((d) => d.gameData),
      l = N((d) => d.deck);
    return {
      createGameSessionHandler: async () => {
        try {
          const d = await e({
            playersArr: i,
            inactivePlayers: o,
            dealerObj: s,
            gameData: a,
            deck: l,
          }).unwrap();
          console.log(`New game session created. id#: ${d.gameSession._id}`);
          const v = d.gameSession._id;
          qi.set("blackjack-session-id", v, { expires: 365 });
        } catch (d) {
          console.error("Failed to create game session:", d);
        }
      },
      updateGameSessionHandler: async () => {
        if (r)
          try {
            const d = await t({
              playersArr: i,
              inactivePlayers: o,
              dealerObj: s,
              gameData: a,
              deck: l,
              id: r,
            }).unwrap();
            console.log(`Game session updated. Id#: ${d.gameSession._id}`);
          } catch (d) {
            console.error("Failed to update game session:", d);
          }
      },
      deleteGameSessionHandler: async () => {
        if (r)
          try {
            qi.remove("blackjack-session-id"),
              await n(r).unwrap(),
              console.log(`Game session deleted. Id#: ${r}`);
          } catch (d) {
            console.error("Failed to update game session:", d);
          }
      },
    };
  },
  va = {
    cards: [],
    cardUrlVals: [],
    cardNumVals: [],
    cardSum: 0,
    isBlackjack: !1,
  },
  r3 = {
    name: "",
    hand: va,
    splitHand: va,
    bank: 995,
    beginningRoundBank: 1e3,
    currBet: 5,
    minBet: 5,
    insuranceBet: 0,
    wonInsuranceRound: !1,
    splitBet: 0,
    isPlayerSplit: !1,
    isDoubleDown: !1,
    playerLeftTable: !1,
    roundResults: { mainResults: "", splitResults: "", isComplete: !1 },
    currTokens: [1, 5, 25, 50, 100, 500],
    roundsWon: 0,
  };
function i3({
  closeModal: e,
  open: t,
  playersArr: n,
  deck: r,
  inactivePlayers: i,
}) {
  const { deleteGameSessionHandler: o } = Ka(),
    s = Ot(),
    a = K();
  if (!n) return null;
  const l = n.map((f) => ({
      ...f,
      hand: va,
      splitHand: va,
      currBet: 0,
      splitBet: 0,
    })),
    u = () => {
      a(P2()), a(nk(l)), a(F2(r)), a(ik(i)), s("/placeBets");
    },
    c = () => {
      e(), o();
    };
  return x.jsx(hi, {
    closeModal: e,
    open: t,
    isTimer: !1,
    isCloseOnClick: !1,
    children: x.jsxs("div", {
      className: "prev-game-modal",
      children: [
        x.jsx("h2", {
          children: "There is a previous game. Would you like to continue?",
        }),
        x.jsxs("div", {
          className: "btn-container",
          children: [
            x.jsx("button", {
              "aria-label": "Return to previous game",
              onClick: u,
              className: "game-btn",
              children: "Yes",
            }),
            x.jsx("button", {
              "aria-label": "Start new game",
              onClick: c,
              className: "game-btn",
              children: "No",
            }),
          ],
        }),
      ],
    }),
  });
}
function o3({
  dot1Color: e = "#d1495b",
  dot2Color: t = "#00798c",
  dot3Color: n = "#edae49",
  textColor: r = "#003049",
  backColor: i = "rgba(255, 255, 255, .5)",
}) {
  return x.jsxs("div", {
    style: { background: i },
    className: "loader ",
    children: [
      x.jsxs("div", {
        className: "dots",
        children: [
          x.jsx("span", { style: { background: e } }),
          x.jsx("span", { style: { background: t } }),
          x.jsx("span", { style: { background: n } }),
        ],
      }),
      x.jsx("p", {
        style: { color: r },
        className: "loading",
        children: "Loading",
      }),
    ],
  });
}
let Eh = !0;
function s3() {
  const [e, { data: t, isLoading: n }] = Zk(),
    [r, i] = R.useState(!1),
    o = () => i(!1),
    s = K(),
    a = () => {
      s(I2());
    };
  R.useEffect(() => {
    async function u() {
      const c = qi.get("blackjack-session-id");
      if (Eh && c) {
        try {
          await e(c), i(!0);
        } catch (f) {
          console.error("Error grabbing data:", f);
        }
        Eh = !1;
      }
    }
    u();
  }, []);
  let l = null;
  return (
    n
      ? (l = x.jsx(o3, {}))
      : (l = x.jsxs(qa, {
          children: [
            x.jsx("h1", { children: "Welcome to the Blackjack Table" }),
            x.jsx(Av, {
              to: "/addPlayers",
              children: x.jsx("button", {
                className: "game-btn",
                onClick: a,
                children: "Start Game",
              }),
            }),
            x.jsx(i3, {
              closeModal: o,
              open: r,
              playersArr: t == null ? void 0 : t.playersArr,
              deck: t == null ? void 0 : t.deck,
              inactivePlayers: t == null ? void 0 : t.inactivePlayers,
            }),
          ],
        })),
    x.jsx(pi, { bgClass: "card-image", children: l })
  );
}
function a3() {
  const e = N((u) => u.playersArr),
    t = K(),
    [n, r] = R.useState(""),
    [i, o] = R.useState(!0),
    [s, a] = R.useState("Please enter a valid name"),
    l = (u) => {
      if (
        (u.preventDefault(),
        n.trim().length > 0 &&
          e.length < 5 &&
          !e.some((f) => f.name.toLowerCase() === n.trim().toLowerCase()))
      ) {
        const f = n.trim().charAt(0).toUpperCase() + n.trim().slice(1);
        t(V2({ ...r3, name: f })), r(""), o(!0);
      } else
        o(!1),
          n.trim().length === 0
            ? a("Valid names must have at least 1 character")
            : e.length === 5
              ? a("Only 5 players can join")
              : a(
                  `There is already a player named ${n}. Try adding a distinguishing feature like a last name`,
                );
    };
  return x.jsxs("form", {
    onSubmit: l,
    children: [
      x.jsxs("div", {
        children: [
          x.jsx("input", {
            className: `name-input ${i ? "" : "error"}`,
            type: "text",
            placeholder: "Enter Name",
            value: n,
            onChange: (u) => {
              r(u.target.value);
            },
          }),
          x.jsx("button", { className: "game-btn", children: "Add Player" }),
        ],
      }),
      !i && x.jsx("span", { className: "error-message", children: s }),
    ],
  });
}
var $d = {},
  S0 = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(S0);
var Mn = S0.exports,
  lu = {};
function B() {
  return (
    (B = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    B.apply(this, arguments)
  );
}
function Gt(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function x0(e) {
  if (!Gt(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = x0(e[n]);
    }),
    t
  );
}
function bt(e, t, n = { clone: !0 }) {
  const r = n.clone ? B({}, e) : e;
  return (
    Gt(e) &&
      Gt(t) &&
      Object.keys(t).forEach((i) => {
        i !== "__proto__" &&
          (Gt(t[i]) && i in e && Gt(e[i])
            ? (r[i] = bt(e[i], t[i], n))
            : n.clone
              ? (r[i] = Gt(t[i]) ? x0(t[i]) : t[i])
              : (r[i] = t[i]));
      }),
    r
  );
}
function ei(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function zt(e) {
  if (typeof e != "string") throw new Error(ei(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function l3(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...i) {
            t.apply(this, i), n.apply(this, i);
          },
    () => {},
  );
}
function u3(e, t = 166) {
  let n;
  function r(...i) {
    const o = () => {
      e.apply(this, i);
    };
    clearTimeout(n), (n = setTimeout(o, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function c3(e, t) {
  return () => null;
}
function d3(e, t) {
  var n, r;
  return (
    R.isValidElement(e) &&
    t.indexOf(
      (n = e.type.muiName) != null
        ? n
        : (r = e.type) == null ||
            (r = r._payload) == null ||
            (r = r.value) == null
          ? void 0
          : r.muiName,
    ) !== -1
  );
}
function ga(e) {
  return (e && e.ownerDocument) || document;
}
function f3(e) {
  return ga(e).defaultView || window;
}
function p3(e, t) {
  return () => null;
}
function Sa(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const ti = typeof window < "u" ? R.useLayoutEffect : R.useEffect;
let Ch = 0;
function h3(e) {
  const [t, n] = R.useState(e),
    r = e || t;
  return (
    R.useEffect(() => {
      t == null && ((Ch += 1), n(`mui-${Ch}`));
    }, [t]),
    r
  );
}
const Rh = Ur.useId;
function m3(e) {
  if (Rh !== void 0) {
    const t = Rh();
    return e ?? t;
  }
  return h3(e);
}
function y3(e, t, n, r, i) {
  return null;
}
function v3({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: i } = R.useRef(e !== void 0),
    [o, s] = R.useState(t),
    a = i ? e : o,
    l = R.useCallback((u) => {
      i || s(u);
    }, []);
  return [a, l];
}
function g3(e) {
  const t = R.useRef(e);
  return (
    ti(() => {
      t.current = e;
    }),
    R.useRef((...n) => (0, t.current)(...n)).current
  );
}
function ni(...e) {
  return R.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              Sa(n, t);
            });
          },
    e,
  );
}
let Xa = !0,
  xc = !1,
  Ph;
const S3 = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0,
};
function x3(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && S3[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function w3(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Xa = !0);
}
function uu() {
  Xa = !1;
}
function k3() {
  this.visibilityState === "hidden" && xc && (Xa = !0);
}
function E3(e) {
  e.addEventListener("keydown", w3, !0),
    e.addEventListener("mousedown", uu, !0),
    e.addEventListener("pointerdown", uu, !0),
    e.addEventListener("touchstart", uu, !0),
    e.addEventListener("visibilitychange", k3, !0);
}
function C3(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return Xa || x3(t);
}
function R3() {
  const e = R.useCallback((i) => {
      i != null && E3(i.ownerDocument);
    }, []),
    t = R.useRef(!1);
  function n() {
    return t.current
      ? ((xc = !0),
        window.clearTimeout(Ph),
        (Ph = window.setTimeout(() => {
          xc = !1;
        }, 100)),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(i) {
    return C3(i) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function w0(e, t) {
  const n = B({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = B({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const i = e[r] || {},
          o = t[r];
        (n[r] = {}),
          !o || !Object.keys(o)
            ? (n[r] = i)
            : !i || !Object.keys(i)
              ? (n[r] = o)
              : ((n[r] = B({}, o)),
                Object.keys(i).forEach((s) => {
                  n[r][s] = w0(i[s], o[s]);
                }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function k0(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((i) => {
      r[i] = e[i]
        .reduce((o, s) => {
          if (s) {
            const a = t(s);
            a !== "" && o.push(a), n && n[s] && o.push(n[s]);
          }
          return o;
        }, [])
        .join(" ");
    }),
    r
  );
}
const bh = (e) => e,
  P3 = () => {
    let e = bh;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = bh;
      },
    };
  },
  Id = P3(),
  b3 = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected",
  };
function zd(e, t, n = "Mui") {
  const r = b3[t];
  return r ? `${n}-${r}` : `${Id.generate(e)}-${t}`;
}
function Ld(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((i) => {
      r[i] = zd(e, i, n);
    }),
    r
  );
}
function je(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function E0(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = E0(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function xa() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = E0(e)) && (r && (r += " "), (r += t));
  return r;
}
function C0(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var _3 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  j3 = C0(function (e) {
    return (
      _3.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  O3 = !1;
function A3(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function T3(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var D3 = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (i) {
        var o;
        r.tags.length === 0
          ? r.insertionPoint
            ? (o = r.insertionPoint.nextSibling)
            : r.prepend
              ? (o = r.container.firstChild)
              : (o = r.before)
          : (o = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(i, o),
          r.tags.push(i);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !O3 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(T3(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = A3(i);
          try {
            o.insertRule(r, o.cssRules.length);
          } catch {}
        } else i.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          var i;
          return (i = r.parentNode) == null ? void 0 : i.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Te = "-ms-",
  wa = "-moz-",
  G = "-webkit-",
  R0 = "comm",
  Bd = "rule",
  Fd = "decl",
  M3 = "@import",
  P0 = "@keyframes",
  N3 = "@layer",
  $3 = Math.abs,
  Ya = String.fromCharCode,
  I3 = Object.assign;
function z3(e, t) {
  return Re(e, 0) ^ 45
    ? (((((((t << 2) ^ Re(e, 0)) << 2) ^ Re(e, 1)) << 2) ^ Re(e, 2)) << 2) ^
        Re(e, 3)
    : 0;
}
function b0(e) {
  return e.trim();
}
function L3(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function q(e, t, n) {
  return e.replace(t, n);
}
function wc(e, t) {
  return e.indexOf(t);
}
function Re(e, t) {
  return e.charCodeAt(t) | 0;
}
function Co(e, t, n) {
  return e.slice(t, n);
}
function Dt(e) {
  return e.length;
}
function Hd(e) {
  return e.length;
}
function gs(e, t) {
  return t.push(e), e;
}
function B3(e, t) {
  return e.map(t).join("");
}
var Ja = 1,
  ri = 1,
  _0 = 0,
  Ge = 0,
  ye = 0,
  mi = "";
function Za(e, t, n, r, i, o, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: Ja,
    column: ri,
    length: s,
    return: "",
  };
}
function Pi(e, t) {
  return I3(Za("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function F3() {
  return ye;
}
function H3() {
  return (
    (ye = Ge > 0 ? Re(mi, --Ge) : 0), ri--, ye === 10 && ((ri = 1), Ja--), ye
  );
}
function et() {
  return (
    (ye = Ge < _0 ? Re(mi, Ge++) : 0), ri++, ye === 10 && ((ri = 1), Ja++), ye
  );
}
function Lt() {
  return Re(mi, Ge);
}
function Ts() {
  return Ge;
}
function Ho(e, t) {
  return Co(mi, e, t);
}
function Ro(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function j0(e) {
  return (Ja = ri = 1), (_0 = Dt((mi = e))), (Ge = 0), [];
}
function O0(e) {
  return (mi = ""), e;
}
function Ds(e) {
  return b0(Ho(Ge - 1, kc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function U3(e) {
  for (; (ye = Lt()) && ye < 33; ) et();
  return Ro(e) > 2 || Ro(ye) > 3 ? "" : " ";
}
function V3(e, t) {
  for (
    ;
    --t &&
    et() &&
    !(ye < 48 || ye > 102 || (ye > 57 && ye < 65) || (ye > 70 && ye < 97));

  );
  return Ho(e, Ts() + (t < 6 && Lt() == 32 && et() == 32));
}
function kc(e) {
  for (; et(); )
    switch (ye) {
      case e:
        return Ge;
      case 34:
      case 39:
        e !== 34 && e !== 39 && kc(ye);
        break;
      case 40:
        e === 41 && kc(e);
        break;
      case 92:
        et();
        break;
    }
  return Ge;
}
function W3(e, t) {
  for (; et() && e + ye !== 57; ) if (e + ye === 84 && Lt() === 47) break;
  return "/*" + Ho(t, Ge - 1) + "*" + Ya(e === 47 ? e : et());
}
function Q3(e) {
  for (; !Ro(Lt()); ) et();
  return Ho(e, Ge);
}
function G3(e) {
  return O0(Ms("", null, null, null, [""], (e = j0(e)), 0, [0], e));
}
function Ms(e, t, n, r, i, o, s, a, l) {
  for (
    var u = 0,
      c = 0,
      f = s,
      d = 0,
      v = 0,
      S = 0,
      m = 1,
      w = 1,
      y = 1,
      p = 0,
      h = "",
      g = i,
      C = o,
      E = r,
      k = h;
    w;

  )
    switch (((S = p), (p = et()))) {
      case 40:
        if (S != 108 && Re(k, f - 1) == 58) {
          wc((k += q(Ds(p), "&", "&\f")), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += Ds(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += U3(S);
        break;
      case 92:
        k += V3(Ts() - 1, 7);
        continue;
      case 47:
        switch (Lt()) {
          case 42:
          case 47:
            gs(q3(W3(et(), Ts()), t, n), l);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * m:
        a[u++] = Dt(k) * y;
      case 125 * m:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            w = 0;
          case 59 + c:
            y == -1 && (k = q(k, /\f/g, "")),
              v > 0 &&
                Dt(k) - f &&
                gs(
                  v > 32
                    ? jh(k + ";", r, n, f - 1)
                    : jh(q(k, " ", "") + ";", r, n, f - 2),
                  l,
                );
            break;
          case 59:
            k += ";";
          default:
            if (
              (gs((E = _h(k, t, n, u, c, i, a, h, (g = []), (C = []), f)), o),
              p === 123)
            )
              if (c === 0) Ms(k, t, E, E, g, o, f, a, C);
              else
                switch (d === 99 && Re(k, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ms(
                      e,
                      E,
                      E,
                      r && gs(_h(e, E, E, 0, 0, i, a, h, i, (g = []), f), C),
                      i,
                      C,
                      f,
                      a,
                      r ? g : C,
                    );
                    break;
                  default:
                    Ms(k, E, E, E, [""], C, 0, a, C);
                }
        }
        (u = c = v = 0), (m = y = 1), (h = k = ""), (f = s);
        break;
      case 58:
        (f = 1 + Dt(k)), (v = S);
      default:
        if (m < 1) {
          if (p == 123) --m;
          else if (p == 125 && m++ == 0 && H3() == 125) continue;
        }
        switch (((k += Ya(p)), p * m)) {
          case 38:
            y = c > 0 ? 1 : ((k += "\f"), -1);
            break;
          case 44:
            (a[u++] = (Dt(k) - 1) * y), (y = 1);
            break;
          case 64:
            Lt() === 45 && (k += Ds(et())),
              (d = Lt()),
              (c = f = Dt((h = k += Q3(Ts())))),
              p++;
            break;
          case 45:
            S === 45 && Dt(k) == 2 && (m = 0);
        }
    }
  return o;
}
function _h(e, t, n, r, i, o, s, a, l, u, c) {
  for (
    var f = i - 1, d = i === 0 ? o : [""], v = Hd(d), S = 0, m = 0, w = 0;
    S < r;
    ++S
  )
    for (var y = 0, p = Co(e, f + 1, (f = $3((m = s[S])))), h = e; y < v; ++y)
      (h = b0(m > 0 ? d[y] + " " + p : q(p, /&\f/g, d[y]))) && (l[w++] = h);
  return Za(e, t, n, i === 0 ? Bd : a, l, u, c);
}
function q3(e, t, n) {
  return Za(e, t, n, R0, Ya(F3()), Co(e, 2, -2), 0);
}
function jh(e, t, n, r) {
  return Za(e, t, n, Fd, Co(e, 0, r), Co(e, r + 1, -1), r);
}
function Fr(e, t) {
  for (var n = "", r = Hd(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
  return n;
}
function K3(e, t, n, r) {
  switch (e.type) {
    case N3:
      if (e.children.length) break;
    case M3:
    case Fd:
      return (e.return = e.return || e.value);
    case R0:
      return "";
    case P0:
      return (e.return = e.value + "{" + Fr(e.children, r) + "}");
    case Bd:
      e.value = e.props.join(",");
  }
  return Dt((n = Fr(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function X3(e) {
  var t = Hd(e);
  return function (n, r, i, o) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, i, o) || "";
    return s;
  };
}
function Y3(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var J3 = function (t, n, r) {
    for (
      var i = 0, o = 0;
      (i = o), (o = Lt()), i === 38 && o === 12 && (n[r] = 1), !Ro(o);

    )
      et();
    return Ho(t, Ge);
  },
  Z3 = function (t, n) {
    var r = -1,
      i = 44;
    do
      switch (Ro(i)) {
        case 0:
          i === 38 && Lt() === 12 && (n[r] = 1), (t[r] += J3(Ge - 1, n, r));
          break;
        case 2:
          t[r] += Ds(i);
          break;
        case 4:
          if (i === 44) {
            (t[++r] = Lt() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Ya(i);
      }
    while ((i = et()));
    return t;
  },
  eE = function (t, n) {
    return O0(Z3(j0(t), n));
  },
  Oh = new WeakMap(),
  tE = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          i = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Oh.get(r)) &&
        !i
      ) {
        Oh.set(t, !0);
        for (
          var o = [], s = eE(n, o), a = r.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var c = 0; c < a.length; c++, u++)
            t.props[u] = o[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l];
      }
    }
  },
  nE = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function A0(e, t) {
  switch (z3(e, t)) {
    case 5103:
      return G + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return G + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return G + e + wa + e + Te + e + e;
    case 6828:
    case 4268:
      return G + e + Te + e + e;
    case 6165:
      return G + e + Te + "flex-" + e + e;
    case 5187:
      return (
        G + e + q(e, /(\w+).+(:[^]+)/, G + "box-$1$2" + Te + "flex-$1$2") + e
      );
    case 5443:
      return G + e + Te + "flex-item-" + q(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        G +
        e +
        Te +
        "flex-line-pack" +
        q(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return G + e + Te + q(e, "shrink", "negative") + e;
    case 5292:
      return G + e + Te + q(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        G +
        "box-" +
        q(e, "-grow", "") +
        G +
        e +
        Te +
        q(e, "grow", "positive") +
        e
      );
    case 4554:
      return G + q(e, /([^-])(transform)/g, "$1" + G + "$2") + e;
    case 6187:
      return (
        q(q(q(e, /(zoom-|grab)/, G + "$1"), /(image-set)/, G + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return q(e, /(image-set\([^]*)/, G + "$1$`$1");
    case 4968:
      return (
        q(
          q(e, /(.+:)(flex-)?(.*)/, G + "box-pack:$3" + Te + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        G +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return q(e, /(.+)-inline(.+)/, G + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Dt(e) - 1 - t > 6)
        switch (Re(e, t + 1)) {
          case 109:
            if (Re(e, t + 4) !== 45) break;
          case 102:
            return (
              q(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  G +
                  "$2-$3$1" +
                  wa +
                  (Re(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~wc(e, "stretch")
              ? A0(q(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Re(e, t + 1) !== 115) break;
    case 6444:
      switch (Re(e, Dt(e) - 3 - (~wc(e, "!important") && 10))) {
        case 107:
          return q(e, ":", ":" + G) + e;
        case 101:
          return (
            q(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                G +
                (Re(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                G +
                "$2$3$1" +
                Te +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (Re(e, t + 11)) {
        case 114:
          return G + e + Te + q(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return G + e + Te + q(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return G + e + Te + q(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return G + e + Te + e + e;
  }
  return e;
}
var rE = function (t, n, r, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Fd:
          t.return = A0(t.value, t.length);
          break;
        case P0:
          return Fr([Pi(t, { value: q(t.value, "@", "@" + G) })], i);
        case Bd:
          if (t.length)
            return B3(t.props, function (o) {
              switch (L3(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Fr(
                    [Pi(t, { props: [q(o, /:(read-\w+)/, ":" + wa + "$1")] })],
                    i,
                  );
                case "::placeholder":
                  return Fr(
                    [
                      Pi(t, {
                        props: [q(o, /:(plac\w+)/, ":" + G + "input-$1")],
                      }),
                      Pi(t, { props: [q(o, /:(plac\w+)/, ":" + wa + "$1")] }),
                      Pi(t, { props: [q(o, /:(plac\w+)/, Te + "input-$1")] }),
                    ],
                    i,
                  );
              }
              return "";
            });
      }
  },
  iE = [rE],
  oE = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (m) {
        var w = m.getAttribute("data-emotion");
        w.indexOf(" ") !== -1 &&
          (document.head.appendChild(m), m.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || iE,
      o = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (m) {
          for (
            var w = m.getAttribute("data-emotion").split(" "), y = 1;
            y < w.length;
            y++
          )
            o[w[y]] = !0;
          a.push(m);
        },
      );
    var l,
      u = [tE, nE];
    {
      var c,
        f = [
          K3,
          Y3(function (m) {
            c.insert(m);
          }),
        ],
        d = X3(u.concat(i, f)),
        v = function (w) {
          return Fr(G3(w), d);
        };
      l = function (w, y, p, h) {
        (c = p),
          v(w ? w + "{" + y.styles + "}" : y.styles),
          h && (S.inserted[y.name] = !0);
      };
    }
    var S = {
      key: n,
      sheet: new D3({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: o,
      registered: {},
      insert: l,
    };
    return S.sheet.hydrate(a), S;
  },
  T0 = { exports: {} },
  J = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ke = typeof Symbol == "function" && Symbol.for,
  Ud = ke ? Symbol.for("react.element") : 60103,
  Vd = ke ? Symbol.for("react.portal") : 60106,
  el = ke ? Symbol.for("react.fragment") : 60107,
  tl = ke ? Symbol.for("react.strict_mode") : 60108,
  nl = ke ? Symbol.for("react.profiler") : 60114,
  rl = ke ? Symbol.for("react.provider") : 60109,
  il = ke ? Symbol.for("react.context") : 60110,
  Wd = ke ? Symbol.for("react.async_mode") : 60111,
  ol = ke ? Symbol.for("react.concurrent_mode") : 60111,
  sl = ke ? Symbol.for("react.forward_ref") : 60112,
  al = ke ? Symbol.for("react.suspense") : 60113,
  sE = ke ? Symbol.for("react.suspense_list") : 60120,
  ll = ke ? Symbol.for("react.memo") : 60115,
  ul = ke ? Symbol.for("react.lazy") : 60116,
  aE = ke ? Symbol.for("react.block") : 60121,
  lE = ke ? Symbol.for("react.fundamental") : 60117,
  uE = ke ? Symbol.for("react.responder") : 60118,
  cE = ke ? Symbol.for("react.scope") : 60119;
function st(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ud:
        switch (((e = e.type), e)) {
          case Wd:
          case ol:
          case el:
          case nl:
          case tl:
          case al:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case il:
              case sl:
              case ul:
              case ll:
              case rl:
                return e;
              default:
                return t;
            }
        }
      case Vd:
        return t;
    }
  }
}
function D0(e) {
  return st(e) === ol;
}
J.AsyncMode = Wd;
J.ConcurrentMode = ol;
J.ContextConsumer = il;
J.ContextProvider = rl;
J.Element = Ud;
J.ForwardRef = sl;
J.Fragment = el;
J.Lazy = ul;
J.Memo = ll;
J.Portal = Vd;
J.Profiler = nl;
J.StrictMode = tl;
J.Suspense = al;
J.isAsyncMode = function (e) {
  return D0(e) || st(e) === Wd;
};
J.isConcurrentMode = D0;
J.isContextConsumer = function (e) {
  return st(e) === il;
};
J.isContextProvider = function (e) {
  return st(e) === rl;
};
J.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ud;
};
J.isForwardRef = function (e) {
  return st(e) === sl;
};
J.isFragment = function (e) {
  return st(e) === el;
};
J.isLazy = function (e) {
  return st(e) === ul;
};
J.isMemo = function (e) {
  return st(e) === ll;
};
J.isPortal = function (e) {
  return st(e) === Vd;
};
J.isProfiler = function (e) {
  return st(e) === nl;
};
J.isStrictMode = function (e) {
  return st(e) === tl;
};
J.isSuspense = function (e) {
  return st(e) === al;
};
J.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === el ||
    e === ol ||
    e === nl ||
    e === tl ||
    e === al ||
    e === sE ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === ul ||
        e.$$typeof === ll ||
        e.$$typeof === rl ||
        e.$$typeof === il ||
        e.$$typeof === sl ||
        e.$$typeof === lE ||
        e.$$typeof === uE ||
        e.$$typeof === cE ||
        e.$$typeof === aE))
  );
};
J.typeOf = st;
T0.exports = J;
var dE = T0.exports,
  M0 = dE,
  fE = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  pE = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  N0 = {};
N0[M0.ForwardRef] = fE;
N0[M0.Memo] = pE;
var hE = !0;
function mE(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ";") : i && (r += i + " ");
    }),
    r
  );
}
var $0 = function (t, n, r) {
    var i = t.key + "-" + n.name;
    (r === !1 || hE === !1) &&
      t.registered[i] === void 0 &&
      (t.registered[i] = n.styles);
  },
  I0 = function (t, n, r) {
    $0(t, n, r);
    var i = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var o = n;
      do t.insert(n === o ? "." + i : "", o, t.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function yE(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var vE = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  gE = !1,
  SE = /[A-Z]|^ms/g,
  xE = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  z0 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Ah = function (t) {
    return t != null && typeof t != "boolean";
  },
  cu = C0(function (e) {
    return z0(e) ? e : e.replace(SE, "-$&").toLowerCase();
  }),
  Th = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(xE, function (r, i, o) {
            return (Mt = { name: i, styles: o, next: Mt }), i;
          });
    }
    return vE[t] !== 1 && !z0(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  },
  wE =
    "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Po(e, t, n) {
  if (n == null) return "";
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var i = n;
      if (i.anim === 1)
        return (Mt = { name: i.name, styles: i.styles, next: Mt }), i.name;
      var o = n;
      if (o.styles !== void 0) {
        var s = o.next;
        if (s !== void 0)
          for (; s !== void 0; )
            (Mt = { name: s.name, styles: s.styles, next: Mt }), (s = s.next);
        var a = o.styles + ";";
        return a;
      }
      return kE(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = Mt,
          u = n(e);
        return (Mt = l), Po(e, t, u);
      }
      break;
    }
  }
  var c = n;
  if (t == null) return c;
  var f = t[c];
  return f !== void 0 ? f : c;
}
function kE(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++) r += Po(e, t, n[i]) + ";";
  else
    for (var o in n) {
      var s = n[o];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0
          ? (r += o + "{" + t[a] + "}")
          : Ah(a) && (r += cu(o) + ":" + Th(o, a) + ";");
      } else {
        if (o === "NO_COMPONENT_SELECTOR" && gE) throw new Error(wE);
        if (
          Array.isArray(s) &&
          typeof s[0] == "string" &&
          (t == null || t[s[0]] === void 0)
        )
          for (var l = 0; l < s.length; l++)
            Ah(s[l]) && (r += cu(o) + ":" + Th(o, s[l]) + ";");
        else {
          var u = Po(e, t, s);
          switch (o) {
            case "animation":
            case "animationName": {
              r += cu(o) + ":" + u + ";";
              break;
            }
            default:
              r += o + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var Dh = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Mt;
function L0(e, t, n) {
  if (
    e.length === 1 &&
    typeof e[0] == "object" &&
    e[0] !== null &&
    e[0].styles !== void 0
  )
    return e[0];
  var r = !0,
    i = "";
  Mt = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0) (r = !1), (i += Po(n, t, o));
  else {
    var s = o;
    i += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (((i += Po(n, t, e[a])), r)) {
      var l = o;
      i += l[a];
    }
  Dh.lastIndex = 0;
  for (var u = "", c; (c = Dh.exec(i)) !== null; ) u += "-" + c[1];
  var f = yE(i) + u;
  return { name: f, styles: i, next: Mt };
}
var EE = function (t) {
    return t();
  },
  B0 = Ur.useInsertionEffect ? Ur.useInsertionEffect : !1,
  CE = B0 || EE,
  Mh = B0 || R.useLayoutEffect,
  F0 = R.createContext(typeof HTMLElement < "u" ? oE({ key: "css" }) : null);
F0.Provider;
var H0 = function (t) {
    return R.forwardRef(function (n, r) {
      var i = R.useContext(F0);
      return t(n, i, r);
    });
  },
  Qd = R.createContext({}),
  RE = H0(function (e, t) {
    var n = e.styles,
      r = L0([n], void 0, R.useContext(Qd)),
      i = R.useRef();
    return (
      Mh(
        function () {
          var o = t.key + "-global",
            s = new t.sheet.constructor({
              key: o,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            a = !1,
            l = document.querySelector(
              'style[data-emotion="' + o + " " + r.name + '"]',
            );
          return (
            t.sheet.tags.length && (s.before = t.sheet.tags[0]),
            l !== null &&
              ((a = !0), l.setAttribute("data-emotion", o), s.hydrate([l])),
            (i.current = [s, a]),
            function () {
              s.flush();
            }
          );
        },
        [t],
      ),
      Mh(
        function () {
          var o = i.current,
            s = o[0],
            a = o[1];
          if (a) {
            o[1] = !1;
            return;
          }
          if ((r.next !== void 0 && I0(t, r.next, !0), s.tags.length)) {
            var l = s.tags[s.tags.length - 1].nextElementSibling;
            (s.before = l), s.flush();
          }
          t.insert("", r, s, !1);
        },
        [t, r.name],
      ),
      null
    );
  }),
  PE = j3,
  bE = function (t) {
    return t !== "theme";
  },
  Nh = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? PE : bE;
  },
  $h = function (t, n, r) {
    var i;
    if (n) {
      var o = n.shouldForwardProp;
      i =
        t.__emotion_forwardProp && o
          ? function (s) {
              return t.__emotion_forwardProp(s) && o(s);
            }
          : o;
    }
    return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
  },
  _E = !1,
  jE = function (t) {
    var n = t.cache,
      r = t.serialized,
      i = t.isStringTag;
    return (
      $0(n, r, i),
      CE(function () {
        return I0(n, r, i);
      }),
      null
    );
  },
  OE = function e(t, n) {
    var r = t.__emotion_real === t,
      i = (r && t.__emotion_base) || t,
      o,
      s;
    n !== void 0 && ((o = n.label), (s = n.target));
    var a = $h(t, n, r),
      l = a || Nh(i),
      u = !l("as");
    return function () {
      var c = arguments,
        f =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (o !== void 0 && f.push("label:" + o + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        f.push.apply(f, c);
      else {
        f.push(c[0][0]);
        for (var d = c.length, v = 1; v < d; v++) f.push(c[v], c[0][v]);
      }
      var S = H0(function (m, w, y) {
        var p = (u && m.as) || i,
          h = "",
          g = [],
          C = m;
        if (m.theme == null) {
          C = {};
          for (var E in m) C[E] = m[E];
          C.theme = R.useContext(Qd);
        }
        typeof m.className == "string"
          ? (h = mE(w.registered, g, m.className))
          : m.className != null && (h = m.className + " ");
        var k = L0(f.concat(g), w.registered, C);
        (h += w.key + "-" + k.name), s !== void 0 && (h += " " + s);
        var P = u && a === void 0 ? Nh(p) : l,
          _ = {};
        for (var b in m) (u && b === "as") || (P(b) && (_[b] = m[b]));
        return (
          (_.className = h),
          y && (_.ref = y),
          R.createElement(
            R.Fragment,
            null,
            R.createElement(jE, {
              cache: w,
              serialized: k,
              isStringTag: typeof p == "string",
            }),
            R.createElement(p, _),
          )
        );
      });
      return (
        (S.displayName =
          o !== void 0
            ? o
            : "Styled(" +
              (typeof i == "string"
                ? i
                : i.displayName || i.name || "Component") +
              ")"),
        (S.defaultProps = t.defaultProps),
        (S.__emotion_real = S),
        (S.__emotion_base = i),
        (S.__emotion_styles = f),
        (S.__emotion_forwardProp = a),
        Object.defineProperty(S, "toString", {
          value: function () {
            return s === void 0 && _E ? "NO_COMPONENT_SELECTOR" : "." + s;
          },
        }),
        (S.withComponent = function (m, w) {
          return e(m, B({}, n, w, { shouldForwardProp: $h(S, w, !0) })).apply(
            void 0,
            f,
          );
        }),
        S
      );
    };
  },
  AE = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Ec = OE.bind();
AE.forEach(function (e) {
  Ec[e] = Ec(e);
});
function TE(e) {
  return e == null || Object.keys(e).length === 0;
}
function DE(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == "function" ? (i) => t(TE(i) ? n : i) : t;
  return x.jsx(RE, { styles: r });
}
function U0(e, t) {
  return Ec(e, t);
}
const ME = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  NE = ["values", "unit", "step"],
  $E = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => B({}, n, { [r.key]: r.val }), {})
    );
  };
function IE(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    i = je(e, NE),
    o = $E(t),
    s = Object.keys(o);
  function a(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function l(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - r / 100}${n})`;
  }
  function u(d, v) {
    const S = s.indexOf(v);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n}) and (max-width:${(S !== -1 && typeof t[s[S]] == "number" ? t[s[S]] : v) - r / 100}${n})`;
  }
  function c(d) {
    return s.indexOf(d) + 1 < s.length ? u(d, s[s.indexOf(d) + 1]) : a(d);
  }
  function f(d) {
    const v = s.indexOf(d);
    return v === 0
      ? a(s[1])
      : v === s.length - 1
        ? l(s[v])
        : u(d, s[s.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return B(
    {
      keys: s,
      values: o,
      up: a,
      down: l,
      between: u,
      only: c,
      not: f,
      unit: n,
    },
    i,
  );
}
const zE = { borderRadius: 4 };
function Xi(e, t) {
  return t ? bt(e, t, { clone: !1 }) : e;
}
const Gd = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Ih = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Gd[e]}px)`,
  };
function nn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || Ih;
    return t.reduce((s, a, l) => ((s[o.up(o.keys[l])] = n(t[l])), s), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || Ih;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(o.values || Gd).indexOf(a) !== -1) {
        const l = o.up(a);
        s[l] = n(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function LE(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, i) => {
          const o = e.up(i);
          return (r[o] = {}), r;
        }, {})) || {}
  );
}
function BE(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function cl(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((i, o) => (i && i[o] ? i[o] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, i) => (r && r[i] != null ? r[i] : null), e);
}
function ka(e, t, n, r = n) {
  let i;
  return (
    typeof e == "function"
      ? (i = e(n))
      : Array.isArray(e)
        ? (i = e[n] || r)
        : (i = cl(e, n) || r),
    t && (i = t(i, r, e)),
    i
  );
}
function he(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: i } = e,
    o = (s) => {
      if (s[t] == null) return null;
      const a = s[t],
        l = s.theme,
        u = cl(l, r) || {};
      return nn(s, a, (f) => {
        let d = ka(u, i, f);
        return (
          f === d &&
            typeof f == "string" &&
            (d = ka(u, i, `${t}${f === "default" ? "" : zt(f)}`, f)),
          n === !1 ? d : { [n]: d }
        );
      });
    };
  return (o.propTypes = {}), (o.filterProps = [t]), o;
}
function FE(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const HE = { m: "margin", p: "padding" },
  UE = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  zh = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  VE = FE((e) => {
    if (e.length > 2)
      if (zh[e]) e = zh[e];
      else return [e];
    const [t, n] = e.split(""),
      r = HE[t],
      i = UE[n] || "";
    return Array.isArray(i) ? i.map((o) => r + o) : [r + i];
  }),
  qd = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Kd = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...qd, ...Kd];
function Uo(e, t, n, r) {
  var i;
  const o = (i = cl(e, t, !1)) != null ? i : n;
  return typeof o == "number"
    ? (s) => (typeof s == "string" ? s : o * s)
    : Array.isArray(o)
      ? (s) => (typeof s == "string" ? s : o[s])
      : typeof o == "function"
        ? o
        : () => {};
}
function V0(e) {
  return Uo(e, "spacing", 8);
}
function Vo(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function WE(e, t) {
  return (n) => e.reduce((r, i) => ((r[i] = Vo(t, n)), r), {});
}
function QE(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const i = VE(n),
    o = WE(i, r),
    s = e[n];
  return nn(e, s, o);
}
function W0(e, t) {
  const n = V0(e.theme);
  return Object.keys(e)
    .map((r) => QE(e, t, r, n))
    .reduce(Xi, {});
}
function le(e) {
  return W0(e, qd);
}
le.propTypes = {};
le.filterProps = qd;
function ue(e) {
  return W0(e, Kd);
}
ue.propTypes = {};
ue.filterProps = Kd;
function GE(e = 8) {
  if (e.mui) return e;
  const t = V0({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((o) => {
          const s = t(o);
          return typeof s == "number" ? `${s}px` : s;
        })
        .join(" ");
  return (n.mui = !0), n;
}
function dl(...e) {
  const t = e.reduce(
      (r, i) => (
        i.filterProps.forEach((o) => {
          r[o] = i;
        }),
        r
      ),
      {},
    ),
    n = (r) => Object.keys(r).reduce((i, o) => (t[o] ? Xi(i, t[o](r)) : i), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), [])),
    n
  );
}
function ut(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function gt(e, t) {
  return he({ prop: e, themeKey: "borders", transform: t });
}
const qE = gt("border", ut),
  KE = gt("borderTop", ut),
  XE = gt("borderRight", ut),
  YE = gt("borderBottom", ut),
  JE = gt("borderLeft", ut),
  ZE = gt("borderColor"),
  eC = gt("borderTopColor"),
  tC = gt("borderRightColor"),
  nC = gt("borderBottomColor"),
  rC = gt("borderLeftColor"),
  iC = gt("outline", ut),
  oC = gt("outlineColor"),
  fl = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = Uo(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: Vo(t, r) });
      return nn(e, e.borderRadius, n);
    }
    return null;
  };
fl.propTypes = {};
fl.filterProps = ["borderRadius"];
dl(qE, KE, XE, YE, JE, ZE, eC, tC, nC, rC, fl, iC, oC);
const pl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Uo(e.theme, "spacing", 8),
      n = (r) => ({ gap: Vo(t, r) });
    return nn(e, e.gap, n);
  }
  return null;
};
pl.propTypes = {};
pl.filterProps = ["gap"];
const hl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Uo(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: Vo(t, r) });
    return nn(e, e.columnGap, n);
  }
  return null;
};
hl.propTypes = {};
hl.filterProps = ["columnGap"];
const ml = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Uo(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: Vo(t, r) });
    return nn(e, e.rowGap, n);
  }
  return null;
};
ml.propTypes = {};
ml.filterProps = ["rowGap"];
const sC = he({ prop: "gridColumn" }),
  aC = he({ prop: "gridRow" }),
  lC = he({ prop: "gridAutoFlow" }),
  uC = he({ prop: "gridAutoColumns" }),
  cC = he({ prop: "gridAutoRows" }),
  dC = he({ prop: "gridTemplateColumns" }),
  fC = he({ prop: "gridTemplateRows" }),
  pC = he({ prop: "gridTemplateAreas" }),
  hC = he({ prop: "gridArea" });
dl(pl, hl, ml, sC, aC, lC, uC, cC, dC, fC, pC, hC);
function Hr(e, t) {
  return t === "grey" ? t : e;
}
const mC = he({ prop: "color", themeKey: "palette", transform: Hr }),
  yC = he({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Hr,
  }),
  vC = he({ prop: "backgroundColor", themeKey: "palette", transform: Hr });
dl(mC, yC, vC);
function Xe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const gC = he({ prop: "width", transform: Xe }),
  Xd = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, i;
        const o =
          ((r = e.theme) == null ||
          (r = r.breakpoints) == null ||
          (r = r.values) == null
            ? void 0
            : r[n]) || Gd[n];
        return o
          ? ((i = e.theme) == null || (i = i.breakpoints) == null
              ? void 0
              : i.unit) !== "px"
            ? { maxWidth: `${o}${e.theme.breakpoints.unit}` }
            : { maxWidth: o }
          : { maxWidth: Xe(n) };
      };
      return nn(e, e.maxWidth, t);
    }
    return null;
  };
Xd.filterProps = ["maxWidth"];
const SC = he({ prop: "minWidth", transform: Xe }),
  xC = he({ prop: "height", transform: Xe }),
  wC = he({ prop: "maxHeight", transform: Xe }),
  kC = he({ prop: "minHeight", transform: Xe });
he({ prop: "size", cssProperty: "width", transform: Xe });
he({ prop: "size", cssProperty: "height", transform: Xe });
const EC = he({ prop: "boxSizing" });
dl(gC, Xd, SC, xC, wC, kC, EC);
const yl = {
  border: { themeKey: "borders", transform: ut },
  borderTop: { themeKey: "borders", transform: ut },
  borderRight: { themeKey: "borders", transform: ut },
  borderBottom: { themeKey: "borders", transform: ut },
  borderLeft: { themeKey: "borders", transform: ut },
  borderColor: { themeKey: "palette" },
  borderTopColor: { themeKey: "palette" },
  borderRightColor: { themeKey: "palette" },
  borderBottomColor: { themeKey: "palette" },
  borderLeftColor: { themeKey: "palette" },
  outline: { themeKey: "borders", transform: ut },
  outlineColor: { themeKey: "palette" },
  borderRadius: { themeKey: "shape.borderRadius", style: fl },
  color: { themeKey: "palette", transform: Hr },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Hr,
  },
  backgroundColor: { themeKey: "palette", transform: Hr },
  p: { style: ue },
  pt: { style: ue },
  pr: { style: ue },
  pb: { style: ue },
  pl: { style: ue },
  px: { style: ue },
  py: { style: ue },
  padding: { style: ue },
  paddingTop: { style: ue },
  paddingRight: { style: ue },
  paddingBottom: { style: ue },
  paddingLeft: { style: ue },
  paddingX: { style: ue },
  paddingY: { style: ue },
  paddingInline: { style: ue },
  paddingInlineStart: { style: ue },
  paddingInlineEnd: { style: ue },
  paddingBlock: { style: ue },
  paddingBlockStart: { style: ue },
  paddingBlockEnd: { style: ue },
  m: { style: le },
  mt: { style: le },
  mr: { style: le },
  mb: { style: le },
  ml: { style: le },
  mx: { style: le },
  my: { style: le },
  margin: { style: le },
  marginTop: { style: le },
  marginRight: { style: le },
  marginBottom: { style: le },
  marginLeft: { style: le },
  marginX: { style: le },
  marginY: { style: le },
  marginInline: { style: le },
  marginInlineStart: { style: le },
  marginInlineEnd: { style: le },
  marginBlock: { style: le },
  marginBlockStart: { style: le },
  marginBlockEnd: { style: le },
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({ "@media print": { display: e } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: pl },
  rowGap: { style: ml },
  columnGap: { style: hl },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: "zIndex" },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: "shadows" },
  width: { transform: Xe },
  maxWidth: { style: Xd },
  minWidth: { transform: Xe },
  height: { transform: Xe },
  maxHeight: { transform: Xe },
  minHeight: { transform: Xe },
  boxSizing: {},
  fontFamily: { themeKey: "typography" },
  fontSize: { themeKey: "typography" },
  fontStyle: { themeKey: "typography" },
  fontWeight: { themeKey: "typography" },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: "typography" },
};
function CC(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function RC(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function PC() {
  function e(n, r, i, o) {
    const s = { [n]: r, theme: i },
      a = o[n];
    if (!a) return { [n]: r };
    const { cssProperty: l = n, themeKey: u, transform: c, style: f } = a;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const d = cl(i, u) || {};
    return f
      ? f(s)
      : nn(s, r, (S) => {
          let m = ka(d, c, S);
          return (
            S === m &&
              typeof S == "string" &&
              (m = ka(d, c, `${n}${S === "default" ? "" : zt(S)}`, S)),
            l === !1 ? m : { [l]: m }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: i, theme: o = {} } = n || {};
    if (!i) return null;
    const s = (r = o.unstable_sxConfig) != null ? r : yl;
    function a(l) {
      let u = l;
      if (typeof l == "function") u = l(o);
      else if (typeof l != "object") return l;
      if (!u) return null;
      const c = LE(o.breakpoints),
        f = Object.keys(c);
      let d = c;
      return (
        Object.keys(u).forEach((v) => {
          const S = RC(u[v], o);
          if (S != null)
            if (typeof S == "object")
              if (s[v]) d = Xi(d, e(v, S, o, s));
              else {
                const m = nn({ theme: o }, S, (w) => ({ [v]: w }));
                CC(m, S) ? (d[v] = t({ sx: S, theme: o })) : (d = Xi(d, m));
              }
            else d = Xi(d, e(v, S, o, s));
        }),
        BE(f, d)
      );
    }
    return Array.isArray(i) ? i.map(a) : a(i);
  }
  return t;
}
const Wo = PC();
Wo.filterProps = ["sx"];
const bC = ["breakpoints", "palette", "spacing", "shape"];
function Yd(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: i, shape: o = {} } = e,
    s = je(e, bC),
    a = IE(n),
    l = GE(i);
  let u = bt(
    {
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: B({ mode: "light" }, r),
      spacing: l,
      shape: B({}, zE, o),
    },
    s,
  );
  return (
    (u = t.reduce((c, f) => bt(c, f), u)),
    (u.unstable_sxConfig = B({}, yl, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return Wo({ sx: f, theme: this });
    }),
    u
  );
}
function _C(e) {
  return Object.keys(e).length === 0;
}
function Q0(e = null) {
  const t = R.useContext(Qd);
  return !t || _C(t) ? e : t;
}
const jC = Yd();
function vl(e = jC) {
  return Q0(e);
}
function OC({ styles: e, themeId: t, defaultTheme: n = {} }) {
  const r = vl(n),
    i = typeof e == "function" ? e((t && r[t]) || r) : e;
  return x.jsx(DE, { styles: i });
}
const AC = ["sx"],
  TC = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      i =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : yl;
    return (
      Object.keys(e).forEach((o) => {
        i[o] ? (r.systemProps[o] = e[o]) : (r.otherProps[o] = e[o]);
      }),
      r
    );
  };
function DC(e) {
  const { sx: t } = e,
    n = je(e, AC),
    { systemProps: r, otherProps: i } = TC(n);
  let o;
  return (
    Array.isArray(t)
      ? (o = [r, ...t])
      : typeof t == "function"
        ? (o = (...s) => {
            const a = t(...s);
            return Gt(a) ? B({}, r, a) : r;
          })
        : (o = B({}, r, t)),
    B({}, i, { sx: o })
  );
}
const MC = ["className", "component"];
function NC(e = {}) {
  const {
      themeId: t,
      defaultTheme: n,
      defaultClassName: r = "MuiBox-root",
      generateClassName: i,
    } = e,
    o = U0("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as",
    })(Wo);
  return R.forwardRef(function (l, u) {
    const c = vl(n),
      f = DC(l),
      { className: d, component: v = "div" } = f,
      S = je(f, MC);
    return x.jsx(
      o,
      B(
        {
          as: v,
          ref: u,
          className: xa(d, i ? i(r) : r),
          theme: (t && c[t]) || c,
        },
        S,
      ),
    );
  });
}
const $C = ["variant"];
function Lh(e) {
  return e.length === 0;
}
function G0(e) {
  const { variant: t } = e,
    n = je(e, $C);
  let r = t || "";
  return (
    Object.keys(n)
      .sort()
      .forEach((i) => {
        i === "color"
          ? (r += Lh(r) ? e[i] : zt(e[i]))
          : (r += `${Lh(r) ? i : zt(i)}${zt(e[i].toString())}`);
      }),
    r
  );
}
const IC = [
  "name",
  "slot",
  "skipVariantsResolver",
  "skipSx",
  "overridesResolver",
];
function zC(e) {
  return Object.keys(e).length === 0;
}
function LC(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
const BC = (e, t) =>
    t.components && t.components[e] && t.components[e].styleOverrides
      ? t.components[e].styleOverrides
      : null,
  Ea = (e) => {
    let t = 0;
    const n = {};
    return (
      e &&
        e.forEach((r) => {
          let i = "";
          typeof r.props == "function"
            ? ((i = `callback${t}`), (t += 1))
            : (i = G0(r.props)),
            (n[i] = r.style);
        }),
      n
    );
  },
  FC = (e, t) => {
    let n = [];
    return (
      t &&
        t.components &&
        t.components[e] &&
        t.components[e].variants &&
        (n = t.components[e].variants),
      Ea(n)
    );
  },
  Ca = (e, t, n) => {
    const { ownerState: r = {} } = e,
      i = [];
    let o = 0;
    return (
      n &&
        n.forEach((s) => {
          let a = !0;
          if (typeof s.props == "function") {
            const l = B({}, e, r);
            a = s.props(l);
          } else
            Object.keys(s.props).forEach((l) => {
              r[l] !== s.props[l] && e[l] !== s.props[l] && (a = !1);
            });
          a &&
            (typeof s.props == "function"
              ? i.push(t[`callback${o}`])
              : i.push(t[G0(s.props)])),
            typeof s.props == "function" && (o += 1);
        }),
      i
    );
  },
  HC = (e, t, n, r) => {
    var i;
    const o =
      n == null || (i = n.components) == null || (i = i[r]) == null
        ? void 0
        : i.variants;
    return Ca(e, t, o);
  };
function Ns(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const UC = Yd(),
  VC = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function $s({ defaultTheme: e, theme: t, themeId: n }) {
  return zC(t) ? e : t[n] || t;
}
function WC(e) {
  return e ? (t, n) => n[e] : null;
}
const Bh = ({ styledArg: e, props: t, defaultTheme: n, themeId: r }) => {
  const i = e(
    B({}, t, { theme: $s(B({}, t, { defaultTheme: n, themeId: r })) }),
  );
  let o;
  if ((i && i.variants && ((o = i.variants), delete i.variants), o)) {
    const s = Ca(t, Ea(o), o);
    return [i, ...s];
  }
  return i;
};
function QC(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = UC,
      rootShouldForwardProp: r = Ns,
      slotShouldForwardProp: i = Ns,
    } = e,
    o = (s) =>
      Wo(B({}, s, { theme: $s(B({}, s, { defaultTheme: n, themeId: t })) }));
  return (
    (o.__mui_systemSx = !0),
    (s, a = {}) => {
      ME(s, (g) => g.filter((C) => !(C != null && C.__mui_systemSx)));
      const {
          name: l,
          slot: u,
          skipVariantsResolver: c,
          skipSx: f,
          overridesResolver: d = WC(VC(u)),
        } = a,
        v = je(a, IC),
        S = c !== void 0 ? c : (u && u !== "Root" && u !== "root") || !1,
        m = f || !1;
      let w,
        y = Ns;
      u === "Root" || u === "root"
        ? (y = r)
        : u
          ? (y = i)
          : LC(s) && (y = void 0);
      const p = U0(s, B({ shouldForwardProp: y, label: w }, v)),
        h = (g, ...C) => {
          const E = C
            ? C.map((b) => {
                if (typeof b == "function" && b.__emotion_real !== b)
                  return (j) =>
                    Bh({ styledArg: b, props: j, defaultTheme: n, themeId: t });
                if (Gt(b)) {
                  let j = b,
                    O;
                  return (
                    b &&
                      b.variants &&
                      ((O = b.variants),
                      delete j.variants,
                      (j = (D) => {
                        let T = b;
                        return (
                          Ca(D, Ea(O), O).forEach((F) => {
                            T = bt(T, F);
                          }),
                          T
                        );
                      })),
                    j
                  );
                }
                return b;
              })
            : [];
          let k = g;
          if (Gt(g)) {
            let b;
            g &&
              g.variants &&
              ((b = g.variants),
              delete k.variants,
              (k = (j) => {
                let O = g;
                return (
                  Ca(j, Ea(b), b).forEach((T) => {
                    O = bt(O, T);
                  }),
                  O
                );
              }));
          } else
            typeof g == "function" &&
              g.__emotion_real !== g &&
              (k = (b) =>
                Bh({ styledArg: g, props: b, defaultTheme: n, themeId: t }));
          l &&
            d &&
            E.push((b) => {
              const j = $s(B({}, b, { defaultTheme: n, themeId: t })),
                O = BC(l, j);
              if (O) {
                const D = {};
                return (
                  Object.entries(O).forEach(([T, z]) => {
                    D[T] =
                      typeof z == "function" ? z(B({}, b, { theme: j })) : z;
                  }),
                  d(b, D)
                );
              }
              return null;
            }),
            l &&
              !S &&
              E.push((b) => {
                const j = $s(B({}, b, { defaultTheme: n, themeId: t }));
                return HC(b, FC(l, j), j, l);
              }),
            m || E.push(o);
          const P = E.length - C.length;
          if (Array.isArray(g) && P > 0) {
            const b = new Array(P).fill("");
            (k = [...g, ...b]), (k.raw = [...g.raw, ...b]);
          }
          const _ = p(k, ...E);
          return s.muiName && (_.muiName = s.muiName), _;
        };
      return p.withConfig && (h.withConfig = p.withConfig), h;
    }
  );
}
function GC(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : w0(t.components[n].defaultProps, r);
}
function qC({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let i = vl(n);
  return r && (i = i[r] || i), GC({ theme: i, name: t, props: e });
}
function q0(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function KC(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, i) => (i < 3 ? parseInt(r, 16) : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3)).join(", ")})`
      : ""
  );
}
function ii(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return ii(KC(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(ei(9, e));
  let r = e.substring(t + 1, e.length - 1),
    i;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (i = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        i,
      ) === -1)
    )
      throw new Error(ei(10, i));
  } else r = r.split(",");
  return (
    (r = r.map((o) => parseFloat(o))), { type: n, values: r, colorSpace: i }
  );
}
function Jd(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((i, o) => (o < 3 ? parseInt(i, 10) : i)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function XC(e) {
  e = ii(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    i = t[2] / 100,
    o = r * Math.min(i, 1 - i),
    s = (u, c = (u + n / 30) % 12) =>
      i - o * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let a = "rgb";
  const l = [
    Math.round(s(0) * 255),
    Math.round(s(8) * 255),
    Math.round(s(4) * 255),
  ];
  return (
    e.type === "hsla" && ((a += "a"), l.push(t[3])), Jd({ type: a, values: l })
  );
}
function Fh(e) {
  e = ii(e);
  let t = e.type === "hsl" || e.type === "hsla" ? ii(XC(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      ),
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function YC(e, t) {
  const n = Fh(e),
    r = Fh(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function JC(e, t) {
  if (((e = ii(e)), (t = q0(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return Jd(e);
}
function ZC(e, t) {
  if (((e = ii(e)), (t = q0(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return Jd(e);
}
function e5(e, t) {
  return B(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t,
  );
}
const bo = { black: "#000", white: "#fff" },
  t5 = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  mr = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  yr = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  bi = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  vr = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  gr = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  Sr = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  n5 = ["mode", "contrastThreshold", "tonalOffset"],
  Hh = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: bo.white, default: bo.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  du = {
    text: {
      primary: bo.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: bo.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function Uh(e, t, n, r) {
  const i = r.light || r,
    o = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
        ? (e.light = ZC(e.main, i))
        : t === "dark" && (e.dark = JC(e.main, o)));
}
function r5(e = "light") {
  return e === "dark"
    ? { main: vr[200], light: vr[50], dark: vr[400] }
    : { main: vr[700], light: vr[400], dark: vr[800] };
}
function i5(e = "light") {
  return e === "dark"
    ? { main: mr[200], light: mr[50], dark: mr[400] }
    : { main: mr[500], light: mr[300], dark: mr[700] };
}
function o5(e = "light") {
  return e === "dark"
    ? { main: yr[500], light: yr[300], dark: yr[700] }
    : { main: yr[700], light: yr[400], dark: yr[800] };
}
function s5(e = "light") {
  return e === "dark"
    ? { main: gr[400], light: gr[300], dark: gr[700] }
    : { main: gr[700], light: gr[500], dark: gr[900] };
}
function a5(e = "light") {
  return e === "dark"
    ? { main: Sr[400], light: Sr[300], dark: Sr[700] }
    : { main: Sr[800], light: Sr[500], dark: Sr[900] };
}
function l5(e = "light") {
  return e === "dark"
    ? { main: bi[400], light: bi[300], dark: bi[700] }
    : { main: "#ed6c02", light: bi[500], dark: bi[900] };
}
function u5(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    i = je(e, n5),
    o = e.primary || r5(t),
    s = e.secondary || i5(t),
    a = e.error || o5(t),
    l = e.info || s5(t),
    u = e.success || a5(t),
    c = e.warning || l5(t);
  function f(m) {
    return YC(m, du.text.primary) >= n ? du.text.primary : Hh.text.primary;
  }
  const d = ({
      color: m,
      name: w,
      mainShade: y = 500,
      lightShade: p = 300,
      darkShade: h = 700,
    }) => {
      if (
        ((m = B({}, m)),
        !m.main && m[y] && (m.main = m[y]),
        !m.hasOwnProperty("main"))
      )
        throw new Error(ei(11, w ? ` (${w})` : "", y));
      if (typeof m.main != "string")
        throw new Error(ei(12, w ? ` (${w})` : "", JSON.stringify(m.main)));
      return (
        Uh(m, "light", p, r),
        Uh(m, "dark", h, r),
        m.contrastText || (m.contrastText = f(m.main)),
        m
      );
    },
    v = { dark: du, light: Hh };
  return bt(
    B(
      {
        common: B({}, bo),
        mode: t,
        primary: d({ color: o, name: "primary" }),
        secondary: d({
          color: s,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: d({ color: a, name: "error" }),
        warning: d({ color: c, name: "warning" }),
        info: d({ color: l, name: "info" }),
        success: d({ color: u, name: "success" }),
        grey: t5,
        contrastThreshold: n,
        getContrastText: f,
        augmentColor: d,
        tonalOffset: r,
      },
      v[t],
    ),
    i,
  );
}
const c5 = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function d5(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Vh = { textTransform: "uppercase" },
  Wh = '"Roboto", "Helvetica", "Arial", sans-serif';
function f5(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = Wh,
      fontSize: i = 14,
      fontWeightLight: o = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: l = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: f,
    } = n,
    d = je(n, c5),
    v = i / 14,
    S = f || ((y) => `${(y / u) * v}rem`),
    m = (y, p, h, g, C) =>
      B(
        { fontFamily: r, fontWeight: y, fontSize: S(p), lineHeight: h },
        r === Wh ? { letterSpacing: `${d5(g / p)}em` } : {},
        C,
        c,
      ),
    w = {
      h1: m(o, 96, 1.167, -1.5),
      h2: m(o, 60, 1.2, -0.5),
      h3: m(s, 48, 1.167, 0),
      h4: m(s, 34, 1.235, 0.25),
      h5: m(s, 24, 1.334, 0),
      h6: m(a, 20, 1.6, 0.15),
      subtitle1: m(s, 16, 1.75, 0.15),
      subtitle2: m(a, 14, 1.57, 0.1),
      body1: m(s, 16, 1.5, 0.15),
      body2: m(s, 14, 1.43, 0.15),
      button: m(a, 14, 1.75, 0.4, Vh),
      caption: m(s, 12, 1.66, 0.4),
      overline: m(s, 12, 2.66, 1, Vh),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return bt(
    B(
      {
        htmlFontSize: u,
        pxToRem: S,
        fontFamily: r,
        fontSize: i,
        fontWeightLight: o,
        fontWeightRegular: s,
        fontWeightMedium: a,
        fontWeightBold: l,
      },
      w,
    ),
    d,
    { clone: !1 },
  );
}
const p5 = 0.2,
  h5 = 0.14,
  m5 = 0.12;
function re(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${p5})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${h5})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${m5})`,
  ].join(",");
}
const y5 = [
    "none",
    re(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    re(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    re(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    re(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    re(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    re(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    re(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    re(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    re(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    re(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    re(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    re(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    re(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    re(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    re(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    re(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    re(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    re(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    re(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    re(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    re(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    re(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    re(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    re(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  v5 = ["duration", "easing", "delay"],
  g5 = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  S5 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Qh(e) {
  return `${Math.round(e)}ms`;
}
function x5(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function w5(e) {
  const t = B({}, g5, e.easing),
    n = B({}, S5, e.duration);
  return B(
    {
      getAutoHeightDuration: x5,
      create: (i = ["all"], o = {}) => {
        const {
          duration: s = n.standard,
          easing: a = t.easeInOut,
          delay: l = 0,
        } = o;
        return (
          je(o, v5),
          (Array.isArray(i) ? i : [i])
            .map(
              (u) =>
                `${u} ${typeof s == "string" ? s : Qh(s)} ${a} ${typeof l == "string" ? l : Qh(l)}`,
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n },
  );
}
const k5 = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  E5 = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function K0(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: i = {},
      typography: o = {},
    } = e,
    s = je(e, E5);
  if (e.vars) throw new Error(ei(18));
  const a = u5(r),
    l = Yd(e);
  let u = bt(l, {
    mixins: e5(l.breakpoints, n),
    palette: a,
    shadows: y5.slice(),
    typography: f5(a, o),
    transitions: w5(i),
    zIndex: B({}, k5),
  });
  return (
    (u = bt(u, s)),
    (u = t.reduce((c, f) => bt(c, f), u)),
    (u.unstable_sxConfig = B({}, yl, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return Wo({ sx: f, theme: this });
    }),
    u
  );
}
const gl = K0(),
  Qo = "$$material";
function Zd({ props: e, name: t }) {
  return qC({ props: e, name: t, defaultTheme: gl, themeId: Qo });
}
const C5 = (e) => Ns(e) && e !== "classes",
  X0 = QC({ themeId: Qo, defaultTheme: gl, rootShouldForwardProp: C5 });
function R5(e) {
  return zd("MuiSvgIcon", e);
}
Ld("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const P5 = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  b5 = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      i = {
        root: ["root", t !== "inherit" && `color${zt(t)}`, `fontSize${zt(n)}`],
      };
    return k0(i, R5, r);
  },
  _5 = X0("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${zt(n.color)}`],
        t[`fontSize${zt(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, i, o, s, a, l, u, c, f, d, v, S;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: t.hasSvgAsChild ? void 0 : "currentColor",
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, "fill", {
              duration:
                (i = e.transitions) == null || (i = i.duration) == null
                  ? void 0
                  : i.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((o = e.typography) == null || (s = o.pxToRem) == null
            ? void 0
            : s.call(o, 20)) || "1.25rem",
        medium:
          ((a = e.typography) == null || (l = a.pxToRem) == null
            ? void 0
            : l.call(a, 24)) || "1.5rem",
        large:
          ((u = e.typography) == null || (c = u.pxToRem) == null
            ? void 0
            : c.call(u, 35)) || "2.1875rem",
      }[t.fontSize],
      color:
        (f =
          (d = (e.vars || e).palette) == null || (d = d[t.color]) == null
            ? void 0
            : d.main) != null
          ? f
          : {
              action:
                (v = (e.vars || e).palette) == null || (v = v.action) == null
                  ? void 0
                  : v.active,
              disabled:
                (S = (e.vars || e).palette) == null || (S = S.action) == null
                  ? void 0
                  : S.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  Cc = R.forwardRef(function (t, n) {
    const r = Zd({ props: t, name: "MuiSvgIcon" }),
      {
        children: i,
        className: o,
        color: s = "inherit",
        component: a = "svg",
        fontSize: l = "medium",
        htmlColor: u,
        inheritViewBox: c = !1,
        titleAccess: f,
        viewBox: d = "0 0 24 24",
      } = r,
      v = je(r, P5),
      S = R.isValidElement(i) && i.type === "svg",
      m = B({}, r, {
        color: s,
        component: a,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: c,
        viewBox: d,
        hasSvgAsChild: S,
      }),
      w = {};
    c || (w.viewBox = d);
    const y = b5(m);
    return x.jsxs(
      _5,
      B(
        {
          as: a,
          className: xa(y.root, o),
          focusable: "false",
          color: u,
          "aria-hidden": f ? void 0 : !0,
          role: f ? "img" : void 0,
          ref: n,
        },
        w,
        v,
        S && i.props,
        {
          ownerState: m,
          children: [
            S ? i.props.children : i,
            f ? x.jsx("title", { children: f }) : null,
          ],
        },
      ),
    );
  });
Cc.muiName = "SvgIcon";
function j5(e, t) {
  function n(r, i) {
    return x.jsx(
      Cc,
      B({ "data-testid": `${t}Icon`, ref: i }, r, { children: e }),
    );
  }
  return (n.muiName = Cc.muiName), R.memo(R.forwardRef(n));
}
const O5 = {
    configure: (e) => {
      Id.configure(e);
    },
  },
  A5 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: zt,
        createChainedFunction: l3,
        createSvgIcon: j5,
        debounce: u3,
        deprecatedPropType: c3,
        isMuiElement: d3,
        ownerDocument: ga,
        ownerWindow: f3,
        requirePropFactory: p3,
        setRef: Sa,
        unstable_ClassNameGenerator: O5,
        unstable_useEnhancedEffect: ti,
        unstable_useId: m3,
        unsupportedProp: y3,
        useControlled: v3,
        useEventCallback: g3,
        useForkRef: ni,
        useIsFocusVisible: R3,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  T5 = Dg(A5);
var Gh;
function Nn() {
  return (
    Gh ||
      ((Gh = 1),
      (function (e) {
        "use client";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return t.createSvgIcon;
            },
          });
        var t = T5;
      })(lu)),
    lu
  );
}
var D5 = Mn;
Object.defineProperty($d, "__esModule", { value: !0 });
var Y0 = ($d.default = void 0),
  M5 = D5(Nn()),
  N5 = x,
  $5 = (0, M5.default)(
    (0, N5.jsx)("path", {
      d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z",
    }),
    "DeleteForever",
  );
Y0 = $d.default = $5;
function I5() {
  const e = vl(gl);
  return e[Qo] || e;
}
const z5 = Ld("MuiBox", ["root"]),
  L5 = K0(),
  B5 = NC({
    themeId: Qo,
    defaultTheme: L5,
    defaultClassName: z5.root,
    generateClassName: Id.generate,
  });
var Ve = "top",
  yt = "bottom",
  vt = "right",
  We = "left",
  ef = "auto",
  Go = [Ve, yt, vt, We],
  oi = "start",
  _o = "end",
  F5 = "clippingParents",
  J0 = "viewport",
  _i = "popper",
  H5 = "reference",
  qh = Go.reduce(function (e, t) {
    return e.concat([t + "-" + oi, t + "-" + _o]);
  }, []),
  Z0 = [].concat(Go, [ef]).reduce(function (e, t) {
    return e.concat([t, t + "-" + oi, t + "-" + _o]);
  }, []),
  U5 = "beforeRead",
  V5 = "read",
  W5 = "afterRead",
  Q5 = "beforeMain",
  G5 = "main",
  q5 = "afterMain",
  K5 = "beforeWrite",
  X5 = "write",
  Y5 = "afterWrite",
  J5 = [U5, V5, W5, Q5, G5, q5, K5, X5, Y5];
function Ut(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function rt(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function lr(e) {
  var t = rt(e).Element;
  return e instanceof t || e instanceof Element;
}
function pt(e) {
  var t = rt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function tf(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = rt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Z5(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var r = t.styles[n] || {},
      i = t.attributes[n] || {},
      o = t.elements[n];
    !pt(o) ||
      !Ut(o) ||
      (Object.assign(o.style, r),
      Object.keys(i).forEach(function (s) {
        var a = i[s];
        a === !1 ? o.removeAttribute(s) : o.setAttribute(s, a === !0 ? "" : a);
      }));
  });
}
function eR(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var i = t.elements[r],
          o = t.attributes[r] || {},
          s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
          a = s.reduce(function (l, u) {
            return (l[u] = ""), l;
          }, {});
        !pt(i) ||
          !Ut(i) ||
          (Object.assign(i.style, a),
          Object.keys(o).forEach(function (l) {
            i.removeAttribute(l);
          }));
      });
    }
  );
}
const tR = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Z5,
  effect: eR,
  requires: ["computeStyles"],
};
function Bt(e) {
  return e.split("-")[0];
}
var Zn = Math.max,
  Ra = Math.min,
  si = Math.round;
function Rc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function eg() {
  return !/^((?!chrome|android).)*safari/i.test(Rc());
}
function ai(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    i = 1,
    o = 1;
  t &&
    pt(e) &&
    ((i = (e.offsetWidth > 0 && si(r.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && si(r.height) / e.offsetHeight) || 1));
  var s = lr(e) ? rt(e) : window,
    a = s.visualViewport,
    l = !eg() && n,
    u = (r.left + (l && a ? a.offsetLeft : 0)) / i,
    c = (r.top + (l && a ? a.offsetTop : 0)) / o,
    f = r.width / i,
    d = r.height / o;
  return {
    width: f,
    height: d,
    top: c,
    right: u + f,
    bottom: c + d,
    left: u,
    x: u,
    y: c,
  };
}
function nf(e) {
  var t = ai(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function tg(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && tf(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function rn(e) {
  return rt(e).getComputedStyle(e);
}
function nR(e) {
  return ["table", "td", "th"].indexOf(Ut(e)) >= 0;
}
function $n(e) {
  return ((lr(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function Sl(e) {
  return Ut(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (tf(e) ? e.host : null) || $n(e);
}
function Kh(e) {
  return !pt(e) || rn(e).position === "fixed" ? null : e.offsetParent;
}
function rR(e) {
  var t = /firefox/i.test(Rc()),
    n = /Trident/i.test(Rc());
  if (n && pt(e)) {
    var r = rn(e);
    if (r.position === "fixed") return null;
  }
  var i = Sl(e);
  for (tf(i) && (i = i.host); pt(i) && ["html", "body"].indexOf(Ut(i)) < 0; ) {
    var o = rn(i);
    if (
      o.transform !== "none" ||
      o.perspective !== "none" ||
      o.contain === "paint" ||
      ["transform", "perspective"].indexOf(o.willChange) !== -1 ||
      (t && o.willChange === "filter") ||
      (t && o.filter && o.filter !== "none")
    )
      return i;
    i = i.parentNode;
  }
  return null;
}
function qo(e) {
  for (var t = rt(e), n = Kh(e); n && nR(n) && rn(n).position === "static"; )
    n = Kh(n);
  return n &&
    (Ut(n) === "html" || (Ut(n) === "body" && rn(n).position === "static"))
    ? t
    : n || rR(e) || t;
}
function rf(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Yi(e, t, n) {
  return Zn(e, Ra(t, n));
}
function iR(e, t, n) {
  var r = Yi(e, t, n);
  return r > n ? n : r;
}
function ng() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function rg(e) {
  return Object.assign({}, ng(), e);
}
function ig(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var oR = function (t, n) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    rg(typeof t != "number" ? t : ig(t, Go))
  );
};
function sR(e) {
  var t,
    n = e.state,
    r = e.name,
    i = e.options,
    o = n.elements.arrow,
    s = n.modifiersData.popperOffsets,
    a = Bt(n.placement),
    l = rf(a),
    u = [We, vt].indexOf(a) >= 0,
    c = u ? "height" : "width";
  if (!(!o || !s)) {
    var f = oR(i.padding, n),
      d = nf(o),
      v = l === "y" ? Ve : We,
      S = l === "y" ? yt : vt,
      m =
        n.rects.reference[c] + n.rects.reference[l] - s[l] - n.rects.popper[c],
      w = s[l] - n.rects.reference[l],
      y = qo(o),
      p = y ? (l === "y" ? y.clientHeight || 0 : y.clientWidth || 0) : 0,
      h = m / 2 - w / 2,
      g = f[v],
      C = p - d[c] - f[S],
      E = p / 2 - d[c] / 2 + h,
      k = Yi(g, E, C),
      P = l;
    n.modifiersData[r] = ((t = {}), (t[P] = k), (t.centerOffset = k - E), t);
  }
}
function aR(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null &&
    ((typeof i == "string" && ((i = t.elements.popper.querySelector(i)), !i)) ||
      (tg(t.elements.popper, i) && (t.elements.arrow = i)));
}
const lR = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: sR,
  effect: aR,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function li(e) {
  return e.split("-")[1];
}
var uR = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function cR(e, t) {
  var n = e.x,
    r = e.y,
    i = t.devicePixelRatio || 1;
  return { x: si(n * i) / i || 0, y: si(r * i) / i || 0 };
}
function Xh(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    i = e.placement,
    o = e.variation,
    s = e.offsets,
    a = e.position,
    l = e.gpuAcceleration,
    u = e.adaptive,
    c = e.roundOffsets,
    f = e.isFixed,
    d = s.x,
    v = d === void 0 ? 0 : d,
    S = s.y,
    m = S === void 0 ? 0 : S,
    w = typeof c == "function" ? c({ x: v, y: m }) : { x: v, y: m };
  (v = w.x), (m = w.y);
  var y = s.hasOwnProperty("x"),
    p = s.hasOwnProperty("y"),
    h = We,
    g = Ve,
    C = window;
  if (u) {
    var E = qo(n),
      k = "clientHeight",
      P = "clientWidth";
    if (
      (E === rt(n) &&
        ((E = $n(n)),
        rn(E).position !== "static" &&
          a === "absolute" &&
          ((k = "scrollHeight"), (P = "scrollWidth"))),
      (E = E),
      i === Ve || ((i === We || i === vt) && o === _o))
    ) {
      g = yt;
      var _ = f && E === C && C.visualViewport ? C.visualViewport.height : E[k];
      (m -= _ - r.height), (m *= l ? 1 : -1);
    }
    if (i === We || ((i === Ve || i === yt) && o === _o)) {
      h = vt;
      var b = f && E === C && C.visualViewport ? C.visualViewport.width : E[P];
      (v -= b - r.width), (v *= l ? 1 : -1);
    }
  }
  var j = Object.assign({ position: a }, u && uR),
    O = c === !0 ? cR({ x: v, y: m }, rt(n)) : { x: v, y: m };
  if (((v = O.x), (m = O.y), l)) {
    var D;
    return Object.assign(
      {},
      j,
      ((D = {}),
      (D[g] = p ? "0" : ""),
      (D[h] = y ? "0" : ""),
      (D.transform =
        (C.devicePixelRatio || 1) <= 1
          ? "translate(" + v + "px, " + m + "px)"
          : "translate3d(" + v + "px, " + m + "px, 0)"),
      D),
    );
  }
  return Object.assign(
    {},
    j,
    ((t = {}),
    (t[g] = p ? m + "px" : ""),
    (t[h] = y ? v + "px" : ""),
    (t.transform = ""),
    t),
  );
}
function dR(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    i = r === void 0 ? !0 : r,
    o = n.adaptive,
    s = o === void 0 ? !0 : o,
    a = n.roundOffsets,
    l = a === void 0 ? !0 : a,
    u = {
      placement: Bt(t.placement),
      variation: li(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Xh(
        Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: s,
          roundOffsets: l,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Xh(
          Object.assign({}, u, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: l,
          }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const fR = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: dR,
  data: {},
};
var Ss = { passive: !0 };
function pR(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    i = r.scroll,
    o = i === void 0 ? !0 : i,
    s = r.resize,
    a = s === void 0 ? !0 : s,
    l = rt(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    o &&
      u.forEach(function (c) {
        c.addEventListener("scroll", n.update, Ss);
      }),
    a && l.addEventListener("resize", n.update, Ss),
    function () {
      o &&
        u.forEach(function (c) {
          c.removeEventListener("scroll", n.update, Ss);
        }),
        a && l.removeEventListener("resize", n.update, Ss);
    }
  );
}
const hR = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: pR,
  data: {},
};
var mR = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Is(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return mR[t];
  });
}
var yR = { start: "end", end: "start" };
function Yh(e) {
  return e.replace(/start|end/g, function (t) {
    return yR[t];
  });
}
function of(e) {
  var t = rt(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function sf(e) {
  return ai($n(e)).left + of(e).scrollLeft;
}
function vR(e, t) {
  var n = rt(e),
    r = $n(e),
    i = n.visualViewport,
    o = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (i) {
    (o = i.width), (s = i.height);
    var u = eg();
    (u || (!u && t === "fixed")) && ((a = i.offsetLeft), (l = i.offsetTop));
  }
  return { width: o, height: s, x: a + sf(e), y: l };
}
function gR(e) {
  var t,
    n = $n(e),
    r = of(e),
    i = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = Zn(
      n.scrollWidth,
      n.clientWidth,
      i ? i.scrollWidth : 0,
      i ? i.clientWidth : 0,
    ),
    s = Zn(
      n.scrollHeight,
      n.clientHeight,
      i ? i.scrollHeight : 0,
      i ? i.clientHeight : 0,
    ),
    a = -r.scrollLeft + sf(e),
    l = -r.scrollTop;
  return (
    rn(i || n).direction === "rtl" &&
      (a += Zn(n.clientWidth, i ? i.clientWidth : 0) - o),
    { width: o, height: s, x: a, y: l }
  );
}
function af(e) {
  var t = rn(e),
    n = t.overflow,
    r = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function og(e) {
  return ["html", "body", "#document"].indexOf(Ut(e)) >= 0
    ? e.ownerDocument.body
    : pt(e) && af(e)
      ? e
      : og(Sl(e));
}
function Ji(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = og(e),
    i = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    o = rt(r),
    s = i ? [o].concat(o.visualViewport || [], af(r) ? r : []) : r,
    a = t.concat(s);
  return i ? a : a.concat(Ji(Sl(s)));
}
function Pc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function SR(e, t) {
  var n = ai(e, !1, t === "fixed");
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function Jh(e, t, n) {
  return t === J0 ? Pc(vR(e, n)) : lr(t) ? SR(t, n) : Pc(gR($n(e)));
}
function xR(e) {
  var t = Ji(Sl(e)),
    n = ["absolute", "fixed"].indexOf(rn(e).position) >= 0,
    r = n && pt(e) ? qo(e) : e;
  return lr(r)
    ? t.filter(function (i) {
        return lr(i) && tg(i, r) && Ut(i) !== "body";
      })
    : [];
}
function wR(e, t, n, r) {
  var i = t === "clippingParents" ? xR(e) : [].concat(t),
    o = [].concat(i, [n]),
    s = o[0],
    a = o.reduce(
      function (l, u) {
        var c = Jh(e, u, r);
        return (
          (l.top = Zn(c.top, l.top)),
          (l.right = Ra(c.right, l.right)),
          (l.bottom = Ra(c.bottom, l.bottom)),
          (l.left = Zn(c.left, l.left)),
          l
        );
      },
      Jh(e, s, r),
    );
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
function sg(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    i = r ? Bt(r) : null,
    o = r ? li(r) : null,
    s = t.x + t.width / 2 - n.width / 2,
    a = t.y + t.height / 2 - n.height / 2,
    l;
  switch (i) {
    case Ve:
      l = { x: s, y: t.y - n.height };
      break;
    case yt:
      l = { x: s, y: t.y + t.height };
      break;
    case vt:
      l = { x: t.x + t.width, y: a };
      break;
    case We:
      l = { x: t.x - n.width, y: a };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = i ? rf(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (o) {
      case oi:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case _o:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function jo(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = r === void 0 ? e.placement : r,
    o = n.strategy,
    s = o === void 0 ? e.strategy : o,
    a = n.boundary,
    l = a === void 0 ? F5 : a,
    u = n.rootBoundary,
    c = u === void 0 ? J0 : u,
    f = n.elementContext,
    d = f === void 0 ? _i : f,
    v = n.altBoundary,
    S = v === void 0 ? !1 : v,
    m = n.padding,
    w = m === void 0 ? 0 : m,
    y = rg(typeof w != "number" ? w : ig(w, Go)),
    p = d === _i ? H5 : _i,
    h = e.rects.popper,
    g = e.elements[S ? p : d],
    C = wR(lr(g) ? g : g.contextElement || $n(e.elements.popper), l, c, s),
    E = ai(e.elements.reference),
    k = sg({ reference: E, element: h, strategy: "absolute", placement: i }),
    P = Pc(Object.assign({}, h, k)),
    _ = d === _i ? P : E,
    b = {
      top: C.top - _.top + y.top,
      bottom: _.bottom - C.bottom + y.bottom,
      left: C.left - _.left + y.left,
      right: _.right - C.right + y.right,
    },
    j = e.modifiersData.offset;
  if (d === _i && j) {
    var O = j[i];
    Object.keys(b).forEach(function (D) {
      var T = [vt, yt].indexOf(D) >= 0 ? 1 : -1,
        z = [Ve, yt].indexOf(D) >= 0 ? "y" : "x";
      b[D] += O[z] * T;
    });
  }
  return b;
}
function kR(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = n.boundary,
    o = n.rootBoundary,
    s = n.padding,
    a = n.flipVariations,
    l = n.allowedAutoPlacements,
    u = l === void 0 ? Z0 : l,
    c = li(r),
    f = c
      ? a
        ? qh
        : qh.filter(function (S) {
            return li(S) === c;
          })
      : Go,
    d = f.filter(function (S) {
      return u.indexOf(S) >= 0;
    });
  d.length === 0 && (d = f);
  var v = d.reduce(function (S, m) {
    return (
      (S[m] = jo(e, { placement: m, boundary: i, rootBoundary: o, padding: s })[
        Bt(m)
      ]),
      S
    );
  }, {});
  return Object.keys(v).sort(function (S, m) {
    return v[S] - v[m];
  });
}
function ER(e) {
  if (Bt(e) === ef) return [];
  var t = Is(e);
  return [Yh(e), t, Yh(t)];
}
function CR(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var i = n.mainAxis,
        o = i === void 0 ? !0 : i,
        s = n.altAxis,
        a = s === void 0 ? !0 : s,
        l = n.fallbackPlacements,
        u = n.padding,
        c = n.boundary,
        f = n.rootBoundary,
        d = n.altBoundary,
        v = n.flipVariations,
        S = v === void 0 ? !0 : v,
        m = n.allowedAutoPlacements,
        w = t.options.placement,
        y = Bt(w),
        p = y === w,
        h = l || (p || !S ? [Is(w)] : ER(w)),
        g = [w].concat(h).reduce(function (X, me) {
          return X.concat(
            Bt(me) === ef
              ? kR(t, {
                  placement: me,
                  boundary: c,
                  rootBoundary: f,
                  padding: u,
                  flipVariations: S,
                  allowedAutoPlacements: m,
                })
              : me,
          );
        }, []),
        C = t.rects.reference,
        E = t.rects.popper,
        k = new Map(),
        P = !0,
        _ = g[0],
        b = 0;
      b < g.length;
      b++
    ) {
      var j = g[b],
        O = Bt(j),
        D = li(j) === oi,
        T = [Ve, yt].indexOf(O) >= 0,
        z = T ? "width" : "height",
        F = jo(t, {
          placement: j,
          boundary: c,
          rootBoundary: f,
          altBoundary: d,
          padding: u,
        }),
        W = T ? (D ? vt : We) : D ? yt : Ve;
      C[z] > E[z] && (W = Is(W));
      var A = Is(W),
        I = [];
      if (
        (o && I.push(F[O] <= 0),
        a && I.push(F[W] <= 0, F[A] <= 0),
        I.every(function (X) {
          return X;
        }))
      ) {
        (_ = j), (P = !1);
        break;
      }
      k.set(j, I);
    }
    if (P)
      for (
        var $ = S ? 3 : 1,
          H = function (me) {
            var qe = g.find(function (Vt) {
              var zn = k.get(Vt);
              if (zn)
                return zn.slice(0, me).every(function (wl) {
                  return wl;
                });
            });
            if (qe) return (_ = qe), "break";
          },
          U = $;
        U > 0;
        U--
      ) {
        var Z = H(U);
        if (Z === "break") break;
      }
    t.placement !== _ &&
      ((t.modifiersData[r]._skip = !0), (t.placement = _), (t.reset = !0));
  }
}
const RR = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: CR,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Zh(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function em(e) {
  return [Ve, vt, yt, We].some(function (t) {
    return e[t] >= 0;
  });
}
function PR(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    i = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    s = jo(t, { elementContext: "reference" }),
    a = jo(t, { altBoundary: !0 }),
    l = Zh(s, r),
    u = Zh(a, i, o),
    c = em(l),
    f = em(u);
  (t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: f,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": c,
      "data-popper-escaped": f,
    }));
}
const bR = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: PR,
};
function _R(e, t, n) {
  var r = Bt(e),
    i = [We, Ve].indexOf(r) >= 0 ? -1 : 1,
    o = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
    s = o[0],
    a = o[1];
  return (
    (s = s || 0),
    (a = (a || 0) * i),
    [We, vt].indexOf(r) >= 0 ? { x: a, y: s } : { x: s, y: a }
  );
}
function jR(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.offset,
    o = i === void 0 ? [0, 0] : i,
    s = Z0.reduce(function (c, f) {
      return (c[f] = _R(f, t.rects, o)), c;
    }, {}),
    a = s[t.placement],
    l = a.x,
    u = a.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[r] = s);
}
const OR = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: jR,
};
function AR(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = sg({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const TR = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: AR,
  data: {},
};
function DR(e) {
  return e === "x" ? "y" : "x";
}
function MR(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.mainAxis,
    o = i === void 0 ? !0 : i,
    s = n.altAxis,
    a = s === void 0 ? !1 : s,
    l = n.boundary,
    u = n.rootBoundary,
    c = n.altBoundary,
    f = n.padding,
    d = n.tether,
    v = d === void 0 ? !0 : d,
    S = n.tetherOffset,
    m = S === void 0 ? 0 : S,
    w = jo(t, { boundary: l, rootBoundary: u, padding: f, altBoundary: c }),
    y = Bt(t.placement),
    p = li(t.placement),
    h = !p,
    g = rf(y),
    C = DR(g),
    E = t.modifiersData.popperOffsets,
    k = t.rects.reference,
    P = t.rects.popper,
    _ =
      typeof m == "function"
        ? m(Object.assign({}, t.rects, { placement: t.placement }))
        : m,
    b =
      typeof _ == "number"
        ? { mainAxis: _, altAxis: _ }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, _),
    j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    O = { x: 0, y: 0 };
  if (E) {
    if (o) {
      var D,
        T = g === "y" ? Ve : We,
        z = g === "y" ? yt : vt,
        F = g === "y" ? "height" : "width",
        W = E[g],
        A = W + w[T],
        I = W - w[z],
        $ = v ? -P[F] / 2 : 0,
        H = p === oi ? k[F] : P[F],
        U = p === oi ? -P[F] : -k[F],
        Z = t.elements.arrow,
        X = v && Z ? nf(Z) : { width: 0, height: 0 },
        me = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : ng(),
        qe = me[T],
        Vt = me[z],
        zn = Yi(0, k[F], X[F]),
        wl = h ? k[F] / 2 - $ - zn - qe - b.mainAxis : H - zn - qe - b.mainAxis,
        Cg = h
          ? -k[F] / 2 + $ + zn + Vt + b.mainAxis
          : U + zn + Vt + b.mainAxis,
        kl = t.elements.arrow && qo(t.elements.arrow),
        Rg = kl ? (g === "y" ? kl.clientTop || 0 : kl.clientLeft || 0) : 0,
        gf = (D = j == null ? void 0 : j[g]) != null ? D : 0,
        Pg = W + wl - gf - Rg,
        bg = W + Cg - gf,
        Sf = Yi(v ? Ra(A, Pg) : A, W, v ? Zn(I, bg) : I);
      (E[g] = Sf), (O[g] = Sf - W);
    }
    if (a) {
      var xf,
        _g = g === "x" ? Ve : We,
        jg = g === "x" ? yt : vt,
        Ln = E[C],
        Ko = C === "y" ? "height" : "width",
        wf = Ln + w[_g],
        kf = Ln - w[jg],
        El = [Ve, We].indexOf(y) !== -1,
        Ef = (xf = j == null ? void 0 : j[C]) != null ? xf : 0,
        Cf = El ? wf : Ln - k[Ko] - P[Ko] - Ef + b.altAxis,
        Rf = El ? Ln + k[Ko] + P[Ko] - Ef - b.altAxis : kf,
        Pf = v && El ? iR(Cf, Ln, Rf) : Yi(v ? Cf : wf, Ln, v ? Rf : kf);
      (E[C] = Pf), (O[C] = Pf - Ln);
    }
    t.modifiersData[r] = O;
  }
}
const NR = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: MR,
  requiresIfExists: ["offset"],
};
function $R(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function IR(e) {
  return e === rt(e) || !pt(e) ? of(e) : $R(e);
}
function zR(e) {
  var t = e.getBoundingClientRect(),
    n = si(t.width) / e.offsetWidth || 1,
    r = si(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function LR(e, t, n) {
  n === void 0 && (n = !1);
  var r = pt(t),
    i = pt(t) && zR(t),
    o = $n(t),
    s = ai(e, i, n),
    a = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((Ut(t) !== "body" || af(o)) && (a = IR(t)),
      pt(t)
        ? ((l = ai(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : o && (l.x = sf(o))),
    {
      x: s.left + a.scrollLeft - l.x,
      y: s.top + a.scrollTop - l.y,
      width: s.width,
      height: s.height,
    }
  );
}
function BR(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (o) {
    t.set(o.name, o);
  });
  function i(o) {
    n.add(o.name);
    var s = [].concat(o.requires || [], o.requiresIfExists || []);
    s.forEach(function (a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && i(l);
      }
    }),
      r.push(o);
  }
  return (
    e.forEach(function (o) {
      n.has(o.name) || i(o);
    }),
    r
  );
}
function FR(e) {
  var t = BR(e);
  return J5.reduce(function (n, r) {
    return n.concat(
      t.filter(function (i) {
        return i.phase === r;
      }),
    );
  }, []);
}
function HR(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function UR(e) {
  var t = e.reduce(function (n, r) {
    var i = n[r.name];
    return (
      (n[r.name] = i
        ? Object.assign({}, i, r, {
            options: Object.assign({}, i.options, r.options),
            data: Object.assign({}, i.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var tm = { placement: "bottom", modifiers: [], strategy: "absolute" };
function nm() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function VR(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    i = t.defaultOptions,
    o = i === void 0 ? tm : i;
  return function (a, l, u) {
    u === void 0 && (u = o);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, tm, o),
        modifiersData: {},
        elements: { reference: a, popper: l },
        attributes: {},
        styles: {},
      },
      f = [],
      d = !1,
      v = {
        state: c,
        setOptions: function (y) {
          var p = typeof y == "function" ? y(c.options) : y;
          m(),
            (c.options = Object.assign({}, o, c.options, p)),
            (c.scrollParents = {
              reference: lr(a)
                ? Ji(a)
                : a.contextElement
                  ? Ji(a.contextElement)
                  : [],
              popper: Ji(l),
            });
          var h = FR(UR([].concat(r, c.options.modifiers)));
          return (
            (c.orderedModifiers = h.filter(function (g) {
              return g.enabled;
            })),
            S(),
            v.update()
          );
        },
        forceUpdate: function () {
          if (!d) {
            var y = c.elements,
              p = y.reference,
              h = y.popper;
            if (nm(p, h)) {
              (c.rects = {
                reference: LR(p, qo(h), c.options.strategy === "fixed"),
                popper: nf(h),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (b) {
                  return (c.modifiersData[b.name] = Object.assign({}, b.data));
                });
              for (var g = 0; g < c.orderedModifiers.length; g++) {
                if (c.reset === !0) {
                  (c.reset = !1), (g = -1);
                  continue;
                }
                var C = c.orderedModifiers[g],
                  E = C.fn,
                  k = C.options,
                  P = k === void 0 ? {} : k,
                  _ = C.name;
                typeof E == "function" &&
                  (c = E({ state: c, options: P, name: _, instance: v }) || c);
              }
            }
          }
        },
        update: HR(function () {
          return new Promise(function (w) {
            v.forceUpdate(), w(c);
          });
        }),
        destroy: function () {
          m(), (d = !0);
        },
      };
    if (!nm(a, l)) return v;
    v.setOptions(u).then(function (w) {
      !d && u.onFirstUpdate && u.onFirstUpdate(w);
    });
    function S() {
      c.orderedModifiers.forEach(function (w) {
        var y = w.name,
          p = w.options,
          h = p === void 0 ? {} : p,
          g = w.effect;
        if (typeof g == "function") {
          var C = g({ state: c, name: y, instance: v, options: h }),
            E = function () {};
          f.push(C || E);
        }
      });
    }
    function m() {
      f.forEach(function (w) {
        return w();
      }),
        (f = []);
    }
    return v;
  };
}
var WR = [hR, TR, fR, tR, OR, RR, NR, lR, bR],
  QR = VR({ defaultModifiers: WR });
function GR(e) {
  return typeof e == "function" ? e() : e;
}
const qR = R.forwardRef(function (t, n) {
  const { children: r, container: i, disablePortal: o = !1 } = t,
    [s, a] = R.useState(null),
    l = ni(R.isValidElement(r) ? r.ref : null, n);
  if (
    (ti(() => {
      o || a(GR(i) || document.body);
    }, [i, o]),
    ti(() => {
      if (s && !o)
        return (
          Sa(n, s),
          () => {
            Sa(n, null);
          }
        );
    }, [n, s, o]),
    o)
  ) {
    if (R.isValidElement(r)) {
      const u = { ref: l };
      return R.cloneElement(r, u);
    }
    return x.jsx(R.Fragment, { children: r });
  }
  return x.jsx(R.Fragment, { children: s && Cd.createPortal(r, s) });
});
function KR(e) {
  return zd("MuiPopper", e);
}
Ld("MuiPopper", ["root"]);
function XR(e) {
  return typeof e == "string";
}
function YR(e, t, n) {
  return e === void 0 || XR(e)
    ? t
    : B({}, t, { ownerState: B({}, t.ownerState, n) });
}
const JR = { disableDefaultClasses: !1 },
  ZR = R.createContext(JR);
function eP(e) {
  const { disableDefaultClasses: t } = R.useContext(ZR);
  return (n) => (t ? "" : e(n));
}
function tP(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r),
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function nP(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function rm(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function rP(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: o,
  } = e;
  if (!t) {
    const v = xa(
        n == null ? void 0 : n.className,
        o,
        i == null ? void 0 : i.className,
        r == null ? void 0 : r.className,
      ),
      S = B(
        {},
        n == null ? void 0 : n.style,
        i == null ? void 0 : i.style,
        r == null ? void 0 : r.style,
      ),
      m = B({}, n, i, r);
    return (
      v.length > 0 && (m.className = v),
      Object.keys(S).length > 0 && (m.style = S),
      { props: m, internalRef: void 0 }
    );
  }
  const s = tP(B({}, i, r)),
    a = rm(r),
    l = rm(i),
    u = t(s),
    c = xa(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      o,
      i == null ? void 0 : i.className,
      r == null ? void 0 : r.className,
    ),
    f = B(
      {},
      u == null ? void 0 : u.style,
      n == null ? void 0 : n.style,
      i == null ? void 0 : i.style,
      r == null ? void 0 : r.style,
    ),
    d = B({}, u, n, l, a);
  return (
    c.length > 0 && (d.className = c),
    Object.keys(f).length > 0 && (d.style = f),
    { props: d, internalRef: u.ref }
  );
}
const iP = [
  "elementType",
  "externalSlotProps",
  "ownerState",
  "skipResolvingSlotProps",
];
function oP(e) {
  var t;
  const {
      elementType: n,
      externalSlotProps: r,
      ownerState: i,
      skipResolvingSlotProps: o = !1,
    } = e,
    s = je(e, iP),
    a = o ? {} : nP(r, i),
    { props: l, internalRef: u } = rP(B({}, s, { externalSlotProps: a })),
    c = ni(
      u,
      a == null ? void 0 : a.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref,
    );
  return YR(n, B({}, l, { ref: c }), i);
}
const sP = [
    "anchorEl",
    "children",
    "direction",
    "disablePortal",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "slotProps",
    "slots",
    "TransitionProps",
    "ownerState",
  ],
  aP = [
    "anchorEl",
    "children",
    "container",
    "direction",
    "disablePortal",
    "keepMounted",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "style",
    "transition",
    "slotProps",
    "slots",
  ];
function lP(e, t) {
  if (t === "ltr") return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function bc(e) {
  return typeof e == "function" ? e() : e;
}
function uP(e) {
  return e.nodeType !== void 0;
}
const cP = () => k0({ root: ["root"] }, eP(KR)),
  dP = {},
  fP = R.forwardRef(function (t, n) {
    var r;
    const {
        anchorEl: i,
        children: o,
        direction: s,
        disablePortal: a,
        modifiers: l,
        open: u,
        placement: c,
        popperOptions: f,
        popperRef: d,
        slotProps: v = {},
        slots: S = {},
        TransitionProps: m,
      } = t,
      w = je(t, sP),
      y = R.useRef(null),
      p = ni(y, n),
      h = R.useRef(null),
      g = ni(h, d),
      C = R.useRef(g);
    ti(() => {
      C.current = g;
    }, [g]),
      R.useImperativeHandle(d, () => h.current, []);
    const E = lP(c, s),
      [k, P] = R.useState(E),
      [_, b] = R.useState(bc(i));
    R.useEffect(() => {
      h.current && h.current.forceUpdate();
    }),
      R.useEffect(() => {
        i && b(bc(i));
      }, [i]),
      ti(() => {
        if (!_ || !u) return;
        const z = (A) => {
          P(A.placement);
        };
        let F = [
          { name: "preventOverflow", options: { altBoundary: a } },
          { name: "flip", options: { altBoundary: a } },
          {
            name: "onUpdate",
            enabled: !0,
            phase: "afterWrite",
            fn: ({ state: A }) => {
              z(A);
            },
          },
        ];
        l != null && (F = F.concat(l)),
          f && f.modifiers != null && (F = F.concat(f.modifiers));
        const W = QR(_, y.current, B({ placement: E }, f, { modifiers: F }));
        return (
          C.current(W),
          () => {
            W.destroy(), C.current(null);
          }
        );
      }, [_, a, l, u, f, E]);
    const j = { placement: k };
    m !== null && (j.TransitionProps = m);
    const O = cP(),
      D = (r = S.root) != null ? r : "div",
      T = oP({
        elementType: D,
        externalSlotProps: v.root,
        externalForwardedProps: w,
        additionalProps: { role: "tooltip", ref: p },
        ownerState: t,
        className: O.root,
      });
    return x.jsx(D, B({}, T, { children: typeof o == "function" ? o(j) : o }));
  }),
  pP = R.forwardRef(function (t, n) {
    const {
        anchorEl: r,
        children: i,
        container: o,
        direction: s = "ltr",
        disablePortal: a = !1,
        keepMounted: l = !1,
        modifiers: u,
        open: c,
        placement: f = "bottom",
        popperOptions: d = dP,
        popperRef: v,
        style: S,
        transition: m = !1,
        slotProps: w = {},
        slots: y = {},
      } = t,
      p = je(t, aP),
      [h, g] = R.useState(!0),
      C = () => {
        g(!1);
      },
      E = () => {
        g(!0);
      };
    if (!l && !c && (!m || h)) return null;
    let k;
    if (o) k = o;
    else if (r) {
      const b = bc(r);
      k = b && uP(b) ? ga(b).body : ga(null).body;
    }
    const P = !c && l && (!m || h) ? "none" : void 0,
      _ = m ? { in: c, onEnter: C, onExited: E } : void 0;
    return x.jsx(qR, {
      disablePortal: a,
      container: k,
      children: x.jsx(
        fP,
        B(
          {
            anchorEl: r,
            direction: s,
            disablePortal: a,
            modifiers: u,
            ref: n,
            open: m ? !h : c,
            placement: f,
            popperOptions: d,
            popperRef: v,
            slotProps: w,
            slots: y,
          },
          p,
          {
            style: B({ position: "fixed", top: 0, left: 0, display: P }, S),
            TransitionProps: _,
            children: i,
          },
        ),
      ),
    });
  }),
  hP = [
    "anchorEl",
    "component",
    "components",
    "componentsProps",
    "container",
    "disablePortal",
    "keepMounted",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "transition",
    "slots",
    "slotProps",
  ],
  mP = X0(pP, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  yP = R.forwardRef(function (t, n) {
    var r;
    const i = Q0(),
      o = Zd({ props: t, name: "MuiPopper" }),
      {
        anchorEl: s,
        component: a,
        components: l,
        componentsProps: u,
        container: c,
        disablePortal: f,
        keepMounted: d,
        modifiers: v,
        open: S,
        placement: m,
        popperOptions: w,
        popperRef: y,
        transition: p,
        slots: h,
        slotProps: g,
      } = o,
      C = je(o, hP),
      E =
        (r = h == null ? void 0 : h.root) != null
          ? r
          : l == null
            ? void 0
            : l.Root,
      k = B(
        {
          anchorEl: s,
          container: c,
          disablePortal: f,
          keepMounted: d,
          modifiers: v,
          open: S,
          placement: m,
          popperOptions: w,
          popperRef: y,
          transition: p,
        },
        C,
      );
    return x.jsx(
      mP,
      B(
        {
          as: a,
          direction: i == null ? void 0 : i.direction,
          slots: { root: E },
          slotProps: g ?? u,
        },
        k,
        { ref: n },
      ),
    );
  });
function _c(e, t) {
  return (
    (_c = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    _c(e, t)
  );
}
function vP(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    _c(e, t);
}
const im = { disabled: !1 },
  ag = pn.createContext(null);
var gP = function (t) {
    return t.scrollTop;
  },
  Ni = "unmounted",
  Vn = "exited",
  Wn = "entering",
  wr = "entered",
  jc = "exiting",
  sn = (function (e) {
    vP(t, e);
    function t(r, i) {
      var o;
      o = e.call(this, r, i) || this;
      var s = i,
        a = s && !s.isMounting ? r.enter : r.appear,
        l;
      return (
        (o.appearStatus = null),
        r.in
          ? a
            ? ((l = Vn), (o.appearStatus = Wn))
            : (l = wr)
          : r.unmountOnExit || r.mountOnEnter
            ? (l = Ni)
            : (l = Vn),
        (o.state = { status: l }),
        (o.nextCallback = null),
        o
      );
    }
    t.getDerivedStateFromProps = function (i, o) {
      var s = i.in;
      return s && o.status === Ni ? { status: Vn } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (i) {
        var o = null;
        if (i !== this.props) {
          var s = this.state.status;
          this.props.in
            ? s !== Wn && s !== wr && (o = Wn)
            : (s === Wn || s === wr) && (o = jc);
        }
        this.updateStatus(!1, o);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var i = this.props.timeout,
          o,
          s,
          a;
        return (
          (o = s = a = i),
          i != null &&
            typeof i != "number" &&
            ((o = i.exit),
            (s = i.enter),
            (a = i.appear !== void 0 ? i.appear : s)),
          { exit: o, enter: s, appear: a }
        );
      }),
      (n.updateStatus = function (i, o) {
        if ((i === void 0 && (i = !1), o !== null))
          if ((this.cancelNextCallback(), o === Wn)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : Di.findDOMNode(this);
              s && gP(s);
            }
            this.performEnter(i);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Vn &&
            this.setState({ status: Ni });
      }),
      (n.performEnter = function (i) {
        var o = this,
          s = this.props.enter,
          a = this.context ? this.context.isMounting : i,
          l = this.props.nodeRef ? [a] : [Di.findDOMNode(this), a],
          u = l[0],
          c = l[1],
          f = this.getTimeouts(),
          d = a ? f.appear : f.enter;
        if ((!i && !s) || im.disabled) {
          this.safeSetState({ status: wr }, function () {
            o.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, c),
          this.safeSetState({ status: Wn }, function () {
            o.props.onEntering(u, c),
              o.onTransitionEnd(d, function () {
                o.safeSetState({ status: wr }, function () {
                  o.props.onEntered(u, c);
                });
              });
          });
      }),
      (n.performExit = function () {
        var i = this,
          o = this.props.exit,
          s = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : Di.findDOMNode(this);
        if (!o || im.disabled) {
          this.safeSetState({ status: Vn }, function () {
            i.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: jc }, function () {
            i.props.onExiting(a),
              i.onTransitionEnd(s.exit, function () {
                i.safeSetState({ status: Vn }, function () {
                  i.props.onExited(a);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (i, o) {
        (o = this.setNextCallback(o)), this.setState(i, o);
      }),
      (n.setNextCallback = function (i) {
        var o = this,
          s = !0;
        return (
          (this.nextCallback = function (a) {
            s && ((s = !1), (o.nextCallback = null), i(a));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (i, o) {
        this.setNextCallback(o);
        var s = this.props.nodeRef
            ? this.props.nodeRef.current
            : Di.findDOMNode(this),
          a = i == null && !this.props.addEndListener;
        if (!s || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [s, this.nextCallback],
            u = l[0],
            c = l[1];
          this.props.addEndListener(u, c);
        }
        i != null && setTimeout(this.nextCallback, i);
      }),
      (n.render = function () {
        var i = this.state.status;
        if (i === Ni) return null;
        var o = this.props,
          s = o.children;
        o.in,
          o.mountOnEnter,
          o.unmountOnExit,
          o.appear,
          o.enter,
          o.exit,
          o.timeout,
          o.addEndListener,
          o.onEnter,
          o.onEntering,
          o.onEntered,
          o.onExit,
          o.onExiting,
          o.onExited,
          o.nodeRef;
        var a = je(o, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return pn.createElement(
          ag.Provider,
          { value: null },
          typeof s == "function"
            ? s(i, a)
            : pn.cloneElement(pn.Children.only(s), a),
        );
      }),
      t
    );
  })(pn.Component);
sn.contextType = ag;
sn.propTypes = {};
function xr() {}
sn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: xr,
  onEntering: xr,
  onEntered: xr,
  onExit: xr,
  onExiting: xr,
  onExited: xr,
};
sn.UNMOUNTED = Ni;
sn.EXITED = Vn;
sn.ENTERING = Wn;
sn.ENTERED = wr;
sn.EXITING = jc;
const SP = (e) => e.scrollTop;
function om(e, t) {
  var n, r;
  const { timeout: i, easing: o, style: s = {} } = e;
  return {
    duration:
      (n = s.transitionDuration) != null
        ? n
        : typeof i == "number"
          ? i
          : i[t.mode] || 0,
    easing:
      (r = s.transitionTimingFunction) != null
        ? r
        : typeof o == "object"
          ? o[t.mode]
          : o,
    delay: s.transitionDelay,
  };
}
const xP = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ],
  wP = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  kP = R.forwardRef(function (t, n) {
    const r = I5(),
      i = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: o,
        appear: s = !0,
        children: a,
        easing: l,
        in: u,
        onEnter: c,
        onEntered: f,
        onEntering: d,
        onExit: v,
        onExited: S,
        onExiting: m,
        style: w,
        timeout: y = i,
        TransitionComponent: p = sn,
      } = t,
      h = je(t, xP),
      g = R.useRef(null),
      C = ni(g, a.ref, n),
      E = (T) => (z) => {
        if (T) {
          const F = g.current;
          z === void 0 ? T(F) : T(F, z);
        }
      },
      k = E(d),
      P = E((T, z) => {
        SP(T);
        const F = om({ style: w, timeout: y, easing: l }, { mode: "enter" });
        (T.style.webkitTransition = r.transitions.create("opacity", F)),
          (T.style.transition = r.transitions.create("opacity", F)),
          c && c(T, z);
      }),
      _ = E(f),
      b = E(m),
      j = E((T) => {
        const z = om({ style: w, timeout: y, easing: l }, { mode: "exit" });
        (T.style.webkitTransition = r.transitions.create("opacity", z)),
          (T.style.transition = r.transitions.create("opacity", z)),
          v && v(T);
      }),
      O = E(S),
      D = (T) => {
        o && o(g.current, T);
      };
    return x.jsx(
      p,
      B(
        {
          appear: s,
          in: u,
          nodeRef: g,
          onEnter: P,
          onEntered: _,
          onEntering: k,
          onExit: j,
          onExited: O,
          onExiting: b,
          addEndListener: D,
          timeout: y,
        },
        h,
        {
          children: (T, z) =>
            R.cloneElement(
              a,
              B(
                {
                  style: B(
                    {
                      opacity: 0,
                      visibility: T === "exited" && !u ? "hidden" : void 0,
                    },
                    wP[T],
                    w,
                    a.props.style,
                  ),
                  ref: C,
                },
                z,
              ),
            ),
        },
      ),
    );
  });
function In({ icon: e, text: t, placement: n = "bottom" }) {
  const [r, i] = R.useState(!1),
    [o, s] = R.useState(null),
    a = (f) => {
      s(f.currentTarget), i(!0);
    },
    l = () => {
      i(!1);
    },
    u = r && !!o,
    c = u ? "icon-popper" : void 0;
  return x.jsxs("div", {
    className: "icon-container",
    onMouseEnter: a,
    onMouseLeave: l,
    children: [
      x.jsx(e, {}),
      x.jsx(yP, {
        placement: n,
        id: c,
        open: u,
        anchorEl: o,
        transition: !0,
        children: ({ TransitionProps: f }) =>
          x.jsx(kP, {
            ...f,
            timeout: 350,
            children: x.jsx(B5, {
              sx: {
                border: 1,
                p: 1,
                bgcolor: "background.paper",
                borderRadius: 2,
                paddingTop: 0.2,
                paddingBottom: 0.2,
                paddingRight: 2,
                paddingLeft: 2,
                marginTop: 1.5,
              },
              children: t,
            }),
          }),
      }),
    ],
  });
}
function EP({ placement: e = "bottom" }) {
  return x.jsx(In, {
    icon: (t) => x.jsx(Y0, { sx: t }),
    text: "Leave table",
    placement: e,
  });
}
function CP({ name: e }) {
  const t = K(),
    n = e.charAt(0).toUpperCase() + e.slice(1);
  return x.jsxs("li", {
    children: [
      n,
      x.jsx("div", {
        onClick: () => t(u0({ name: e })),
        className: "delete-icon",
        children: x.jsx(EP, { placement: "right" }),
      }),
    ],
  });
}
function RP() {
  const e = N((t) => t.playersArr);
  return x.jsxs("div", {
    className: "player-list",
    children: [
      x.jsx("h3", { children: "Current players:" }),
      x.jsx("ul", {
        children: e.map((t) => x.jsx(CP, { name: t.name }, t.name)),
      }),
    ],
  });
}
function PP() {
  const e = K(),
    t = N((i) => i.playersArr),
    { createGameSessionHandler: n } = Ka(),
    r = () => {
      e($2()), n();
    };
  return x.jsxs(pi, {
    bgClass: "card-image",
    children: [
      x.jsxs(qa, {
        children: [
          x.jsx("h2", { children: "Enter your name to join the game" }),
          x.jsx(a3, {}),
        ],
      }),
      t.length > 0 && x.jsx(RP, {}),
      t.length > 0 &&
        x.jsx("div", {
          className: "start-game-btn",
          children: x.jsx(Av, {
            to: "/playGame",
            children: x.jsx("button", {
              onClick: () => r(),
              className: "game-btn",
              children: "Start Game",
            }),
          }),
        }),
    ],
  });
}
const fe = (e) => new Promise((t) => setTimeout(t, e)),
  bP = [
    "https://deckofcardsapi.com/static/img/AH.png",
    "https://deckofcardsapi.com/static/img/2H.png",
    "https://deckofcardsapi.com/static/img/3H.png",
    "https://deckofcardsapi.com/static/img/4H.png",
    "https://deckofcardsapi.com/static/img/5H.png",
    "https://deckofcardsapi.com/static/img/6H.png",
    "https://deckofcardsapi.com/static/img/7H.png",
    "https://deckofcardsapi.com/static/img/8H.png",
    "https://deckofcardsapi.com/static/img/9H.png",
    "https://deckofcardsapi.com/static/img/0H.png",
    "https://deckofcardsapi.com/static/img/JH.png",
    "https://deckofcardsapi.com/static/img/QH.png",
    "https://deckofcardsapi.com/static/img/KH.png",
    "https://deckofcardsapi.com/static/img/AD.png",
    "https://deckofcardsapi.com/static/img/2D.png",
    "https://deckofcardsapi.com/static/img/3D.png",
    "https://deckofcardsapi.com/static/img/4D.png",
    "https://deckofcardsapi.com/static/img/5D.png",
    "https://deckofcardsapi.com/static/img/6D.png",
    "https://deckofcardsapi.com/static/img/7D.png",
    "https://deckofcardsapi.com/static/img/8D.png",
    "https://deckofcardsapi.com/static/img/9D.png",
    "https://deckofcardsapi.com/static/img/0D.png",
    "https://deckofcardsapi.com/static/img/JD.png",
    "https://deckofcardsapi.com/static/img/QD.png",
    "https://deckofcardsapi.com/static/img/KD.png",
    "https://deckofcardsapi.com/static/img/AC.png",
    "https://deckofcardsapi.com/static/img/2C.png",
    "https://deckofcardsapi.com/static/img/3C.png",
    "https://deckofcardsapi.com/static/img/4C.png",
    "https://deckofcardsapi.com/static/img/5C.png",
    "https://deckofcardsapi.com/static/img/6C.png",
    "https://deckofcardsapi.com/static/img/7C.png",
    "https://deckofcardsapi.com/static/img/8C.png",
    "https://deckofcardsapi.com/static/img/9C.png",
    "https://deckofcardsapi.com/static/img/0C.png",
    "https://deckofcardsapi.com/static/img/JC.png",
    "https://deckofcardsapi.com/static/img/QC.png",
    "https://deckofcardsapi.com/static/img/KC.png",
    "https://deckofcardsapi.com/static/img/AS.png",
    "https://deckofcardsapi.com/static/img/2S.png",
    "https://deckofcardsapi.com/static/img/3S.png",
    "https://deckofcardsapi.com/static/img/4S.png",
    "https://deckofcardsapi.com/static/img/5S.png",
    "https://deckofcardsapi.com/static/img/6S.png",
    "https://deckofcardsapi.com/static/img/7S.png",
    "https://deckofcardsapi.com/static/img/8S.png",
    "https://deckofcardsapi.com/static/img/9S.png",
    "https://deckofcardsapi.com/static/img/0S.png",
    "https://deckofcardsapi.com/static/img/JS.png",
    "https://deckofcardsapi.com/static/img/QS.png",
    "https://deckofcardsapi.com/static/img/KS.png",
    "https://deckofcardsapi.com/static/img/back.png",
    "https://images.unsplash.com/photo-1542145177-4dc9b8029711?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1514441615332-67834d513dea?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  _P = () => {
    const e = document.head;
    bP.forEach((t) => {
      const n = document.createElement("link");
      (n.rel = "preload"), (n.href = t), (n.as = "image"), e.appendChild(n);
    });
  };
function jP() {
  const e = Ot(),
    t = N((n) => n.gameData.roundsPlayed);
  return (
    R.useEffect(() => {
      (async () => {
        await fe(1500), e("/placeBets");
      })();
    }, [e]),
    R.useEffect(() => {
      _P();
    }, []),
    x.jsx(pi, {
      bgClass: "dark-background main-game",
      children: x.jsxs("h2", { children: ["Begin Round ", t] }),
    })
  );
}
function OP(e) {
  return x.jsx(OC, B({}, e, { defaultTheme: gl, themeId: Qo }));
}
const AP = (e, t) =>
    B(
      {
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        boxSizing: "border-box",
        WebkitTextSizeAdjust: "100%",
      },
      t && !e.vars && { colorScheme: e.palette.mode },
    ),
  TP = (e) =>
    B({ color: (e.vars || e).palette.text.primary }, e.typography.body1, {
      backgroundColor: (e.vars || e).palette.background.default,
      "@media print": { backgroundColor: (e.vars || e).palette.common.white },
    }),
  DP = (e, t = !1) => {
    var n;
    const r = {};
    t &&
      e.colorSchemes &&
      Object.entries(e.colorSchemes).forEach(([s, a]) => {
        var l;
        r[e.getColorSchemeSelector(s).replace(/\s*&/, "")] = {
          colorScheme: (l = a.palette) == null ? void 0 : l.mode,
        };
      });
    let i = B(
      {
        html: AP(e, t),
        "*, *::before, *::after": { boxSizing: "inherit" },
        "strong, b": { fontWeight: e.typography.fontWeightBold },
        body: B({ margin: 0 }, TP(e), {
          "&::backdrop": {
            backgroundColor: (e.vars || e).palette.background.default,
          },
        }),
      },
      r,
    );
    const o =
      (n = e.components) == null || (n = n.MuiCssBaseline) == null
        ? void 0
        : n.styleOverrides;
    return o && (i = [i, o]), i;
  };
function MP(e) {
  const t = Zd({ props: e, name: "MuiCssBaseline" }),
    { children: n, enableColorScheme: r = !1 } = t;
  return x.jsxs(R.Fragment, {
    children: [x.jsx(OP, { styles: (i) => DP(i, r) }), n],
  });
}
var lf = {},
  NP = Mn;
Object.defineProperty(lf, "__esModule", { value: !0 });
var lg = (lf.default = void 0),
  $P = NP(Nn()),
  IP = x,
  zP = (0, $P.default)(
    (0, IP.jsx)("path", {
      d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z",
    }),
    "Assessment",
  );
lg = lf.default = zP;
function LP({ placement: e = "bottom" }) {
  return x.jsx(In, {
    icon: (t) => x.jsx(lg, { sx: t }),
    text: "Player Stats",
    placement: e,
  });
}
function BP({ player: e }) {
  const { name: t, bank: n, roundsWon: r } = e;
  return x.jsxs("li", {
    children: [t, ": Bank: ", `$${n}`, ": Rounds Won: ", r],
  });
}
var uf = {},
  FP = Mn;
Object.defineProperty(uf, "__esModule", { value: !0 });
var ug = (uf.default = void 0),
  HP = FP(Nn()),
  UP = x,
  VP = (0, HP.default)(
    (0, UP.jsx)("path", {
      d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z",
    }),
    "Fullscreen",
  );
ug = uf.default = VP;
var cf = {},
  WP = Mn;
Object.defineProperty(cf, "__esModule", { value: !0 });
var cg = (cf.default = void 0),
  QP = WP(Nn()),
  GP = x,
  qP = (0, QP.default)(
    (0, GP.jsx)("path", {
      d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z",
    }),
    "FullscreenExit",
  );
cg = cf.default = qP;
function KP({ closeModal: e, open: t }) {
  const [n, r] = R.useState(!1),
    i = N((l) => l.playersArr),
    o = N((l) => l.gameData.roundsPlayed),
    s = () => {
      n ? document.exitFullscreen() : document.body.requestFullscreen(), r(!n);
    },
    a = n ? "Exit" : "Enter";
  return x.jsx(hi, {
    closeModal: e,
    open: t,
    isTimer: !1,
    children: x.jsxs("section", {
      className: "stats-modal-container",
      children: [
        x.jsx("h3", { children: "Player Stats" }),
        x.jsxs("h4", { children: ["Current Round: ", o] }),
        x.jsx("ul", {
          children: i.map((l) => x.jsx(BP, { player: l }, l.name)),
        }),
        x.jsx("div", {
          onClick: e,
          className: "game-btn",
          children: "Return to game",
        }),
        x.jsxs("div", {
          className: "full-screen-container",
          children: [
            x.jsxs("p", { children: [a, " full screen:"] }),
            x.jsx("div", {
              role: "button",
              onClick: s,
              children: n
                ? x.jsx(cg, {
                    "aria-label": "exit full screen",
                    fontSize: "medium",
                  })
                : x.jsx(ug, {
                    "aria-label": "enter full screen",
                    fontSize: "medium",
                  }),
            }),
          ],
        }),
      ],
    }),
  });
}
function XP() {
  const [e, t] = R.useState(!1),
    n = () => t(!0),
    r = () => t(!1);
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx("div", {
        "aria-label": "player stats",
        onClick: n,
        children: x.jsx(LP, {}),
      }),
      x.jsx(KP, { open: e, closeModal: r }),
    ],
  });
}
var df = {},
  YP = Mn;
Object.defineProperty(df, "__esModule", { value: !0 });
var dg = (df.default = void 0),
  JP = YP(Nn()),
  ZP = x,
  eb = (0, JP.default)(
    (0, ZP.jsx)("path", {
      d: "M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
    }),
    "HighlightOff",
  );
dg = df.default = eb;
function tb({ placement: e = "bottom" }) {
  return x.jsx(In, {
    icon: (t) => x.jsx(dg, { sx: t }),
    text: "Quit game",
    placement: e,
  });
}
const nb = {
    name: "Dealer",
    hand: {
      cards: [],
      cardUrlVals: [],
      cardNumVals: [],
      cardSum: 0,
      isBlackjack: !1,
    },
  },
  fg = Et({
    name: "dealerObj",
    initialState: nb,
    reducers: {
      updateDealer: (e, t) => ({ ...e, ...t.payload }),
      resetDealer: (e) => ({
        ...e,
        hand: {
          cards: [],
          cardUrlVals: [],
          cardNumVals: [],
          cardSum: 0,
          isBlackjack: !1,
        },
      }),
      setDealer: (e, t) => t.payload,
    },
  }),
  { setDealer: I4, updateDealer: rb, resetDealer: ff } = fg.actions,
  ib = fg.reducer;
function ob() {
  const { deleteGameSessionHandler: e } = Ka(),
    t = N((c) => c.playersArr),
    {
      isBetRoundActive: n,
      isAddPlayersRound: r,
      roundsPlayed: i,
    } = N((c) => c.gameData),
    o = Ot(),
    s = K(),
    a = () => {
      e(), l(), s(W2()), s(ff()), s(r0()), u();
    },
    l = () => {
      if (n) {
        const c = t.map((f) => ({
          ...f,
          bank: f.beginningRoundBank,
          currBet: 0,
        }));
        s(vc(c));
      } else s(vc(t));
    },
    u = () => {
      (i === 1 && n) || r ? (o("/"), s(i0())) : o("/finalResults");
    };
  return x.jsx("div", {
    "aria-label": "quit game",
    onClick: a,
    children: x.jsx(tb, {}),
  });
}
function sb() {
  const {
      isGameIntro: e,
      isAddPlayersRound: t,
      isGameActive: n,
    } = N((a) => a.gameData),
    r = !e && !t && n,
    { isPlayerRoundActive: i, isRoundActive: o } = N((a) => a.gameData),
    s = !i && o;
  return x.jsx("nav", {
    className: "game-menu",
    children: x.jsxs("div", {
      className: "menu-container",
      children: [
        x.jsx("h2", { children: "Blackjack" }),
        x.jsxs("div", {
          className: s ? "disabled menu-icons" : "menu-icons",
          children: [r && x.jsx(XP, {}), n && x.jsx(ob, {})],
        }),
      ],
    }),
  });
}
function ab({ number: e, currPlayerIndex: t }) {
  const n = K();
  return x.jsx("div", {
    "aria-labelledby": "player-tokens",
    id: `token${e}`,
    onClick: () => n(tk({ index: t, number: e })),
    children: e,
  });
}
function lb({ currPlayerIndex: e }) {
  const t = K(),
    n = N((i) => i.playersArr),
    r = n[e].bank > 0 ? "all-tokens" : "all-tokens disabled";
  return x.jsxs("div", {
    id: "player-tokens",
    className: "tokens-container",
    "aria-label": "player tokens",
    children: [
      n[e].currTokens.map((i) =>
        x.jsx(ab, { number: i, currPlayerIndex: e }, i),
      ),
      x.jsx("div", {
        onClick: () => t(yc({ index: e, type: "all-tokens" })),
        className: r,
        children: "All",
      }),
    ],
  });
}
function ub({ setIsModalOpen: e, currPlayerIndex: t, moveToNextPlayer: n }) {
  const r = N((d) => d.playersArr),
    i = N((d) => d.deck),
    o = r[t],
    s = K(),
    a = Ot(),
    c =
      i.map((d) => d.suits.reduce((v, S) => v + S)).reduce((d, v) => d + v) <
      104 / 2,
    f = () => {
      s(Td({ ...o, minBet: o.currBet })),
        r.length - 1 !== t
          ? n()
          : c
            ? (s(a0()), e(!0))
            : (s(e0()), a("/startRound"));
    };
  return x.jsx("button", {
    className: "game-btn",
    onClick: f,
    children: "Place Bet",
  });
}
var pf = {},
  cb = Mn;
Object.defineProperty(pf, "__esModule", { value: !0 });
var pg = (pf.default = void 0),
  db = cb(Nn()),
  fb = x,
  pb = (0, db.default)(
    (0, fb.jsx)("path", {
      d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z",
    }),
    "Refresh",
  );
pg = pf.default = pb;
function hb({ placement: e = "bottom" }) {
  return x.jsx(In, {
    icon: (t) => x.jsx(pg, { sx: t }),
    text: "Reset bet",
    placement: e,
  });
}
function mb({ currPlayerIndex: e }) {
  const { isBetRoundActive: t } = N((r) => r.gameData),
    n = K();
  return (
    R.useEffect(() => {
      t && n(yc({ index: e, type: "reset-tokens" }));
    }, [t, e, n]),
    x.jsx("div", {
      "aria-label": "reset tokens",
      className: "reset-tokens",
      onClick: () => n(yc({ index: e, type: "reset-tokens" })),
      children: x.jsx(hb, { placement: "top" }),
    })
  );
}
function xl({ timeout: e, onTimeout: t }) {
  const [n, r] = R.useState(e),
    [i, o] = R.useState(!1);
  R.useEffect(() => {
    let l;
    return (
      i ||
        (l = setTimeout(() => {
          t(), r(0);
        }, n)),
      () => clearTimeout(l)
    );
  }, [n, t, i]),
    R.useEffect(() => {
      let l;
      return (
        i ||
          (l = setInterval(() => {
            r((u) => Math.max(u - 100, 0));
          }, 100)),
        () => clearInterval(l)
      );
    }, [i]);
  const s = () => {
      o(!0);
    },
    a = () => {
      o(!1);
    };
  return x.jsx("div", {
    id: "progress-wrapper",
    children: x.jsx("progress", {
      id: "question-time",
      max: e,
      value: n,
      onMouseEnter: s,
      onMouseLeave: a,
    }),
  });
}
function yb({ closeModal: e, open: t }) {
  const n = K(),
    r = Ot(),
    i = async () => {
      e(), n(e0()), r("/startRound");
    };
  return x.jsx(hi, {
    closeModal: e,
    open: t,
    isTimer: !0,
    children: x.jsxs("div", {
      className: "shuffle-deck-modal",
      children: [
        x.jsx("h2", { children: "Dealer shuffling Deck..." }),
        x.jsx(xl, { timeout: 4e3, onTimeout: i }),
      ],
    }),
  });
}
function vb() {
  const [e, t] = R.useState(0),
    [n, r] = R.useState(!1),
    i = N((l) => l.playersArr);
  if (!i.length) return;
  const o = i[e],
    s = () => r(!1),
    a = () => {
      t((l) => (l + 1) % i.length);
    };
  return x.jsx(pi, {
    bgClass: "token-image",
    children: x.jsxs(qa, {
      children: [
        x.jsx(mb, { currPlayerIndex: e }),
        x.jsxs("h3", { children: ["Place Bet: ", o.name] }),
        x.jsxs("p", { children: ["Bank: ", `$${o.bank + o.currBet}`] }),
        x.jsxs("p", { children: ["Min bit: ", `$${o.minBet}`] }),
        x.jsxs("p", { children: ["Current Bet: ", `$${o.currBet}`] }),
        x.jsxs("p", { children: ["Bank after bet: ", `$${o.bank}`] }),
        x.jsx(lb, { currPlayerIndex: e }),
        x.jsx(ub, {
          currPlayerIndex: e,
          moveToNextPlayer: a,
          setIsModalOpen: r,
        }),
        x.jsx(yb, { closeModal: s, open: n }),
      ],
    }),
  });
}
function gb({ playerIndex: e }) {
  const n = N((s) => s.playersArr)[e],
    { hand: r, name: i } = n;
  let o = "";
  return (
    r.cardSum > 21
      ? (o = "Bust!")
      : r.cards.length === 2 && r.cardSum === 21
        ? (o = "Blackjack!")
        : r.cards.length === 3 && r.cardSum < 21 && n.isDoubleDown
          ? (o = `${i} doubled up`)
          : (o = `${i} stands`),
    x.jsx("h2", { children: o })
  );
}
function Sb({ playerIndex: e }) {
  const t = N((s) => s.playersArr),
    { hand: n, bank: r, currBet: i, isDoubleDown: o } = t[e];
  return x.jsxs("div", {
    className: "end-turn-stats",
    children: [
      o
        ? x.jsxs("h3", { children: ["Doubled bet: ", i] })
        : x.jsxs("h3", { children: ["Bet: ", i] }),
      x.jsxs("h3", { children: ["Bank: ", r] }),
      x.jsxs("h3", { children: ["Final Sum: ", n.cardSum] }),
    ],
  });
}
function xb({ playerIndex: e, endResultsBtnHandler: t }) {
  const n = R.useRef(null),
    r = () => {
      n.current && n.current.click();
    };
  return x.jsxs("div", {
    className: "end-turn-modal",
    children: [
      x.jsx(gb, { playerIndex: e }),
      x.jsx(Sb, { playerIndex: e }),
      x.jsx("button", {
        "aria-label": "Show end results",
        className: "hidden-btn",
        ref: n,
        onClick: t,
      }),
      x.jsx(xl, { timeout: 1500, onTimeout: r }),
    ],
  });
}
function wb({
  playerIndex: e,
  isCurrPlayerFinished: t,
  makeCurrPlayerNotFinished: n,
  changeToNextPlayer: r,
}) {
  const i = N((d) => d.playersArr),
    o = K(),
    s = i[e],
    a = i.some((d) => d.splitHand.cards.length > 0),
    { splitHand: l, isPlayerSplit: u } = s,
    c = i.length - 1 === e,
    f = R.useCallback(async () => {
      u && u && l.cards.length === 1 && o(K2(e)),
        c
          ? u && l.cards.length === 1
            ? n()
            : (a && o(q2()), o(t0()))
          : ((!u || (u && l.cards.length > 1)) && r(), n());
    }, [r, o, c, u, n, e, a, l.cards.length]);
  return x.jsx(hi, {
    closeModal: f,
    open: t,
    isTimer: !0,
    children: x.jsx(xb, { playerIndex: e, endResultsBtnHandler: f }),
  });
}
function kb({
  playerIndex: e,
  isCurrPlayerFinished: t,
  makeCurrPlayerFinished: n,
  makeCurrPlayerNotFinished: r,
  changeToNextPlayer: i,
}) {
  const s = N((c) => c.playersArr)[e],
    { hand: a, isDoubleDown: l } = s,
    u = N((c) => c.gameData.isPlayerRoundActive);
  return (
    R.useEffect(() => {
      let c;
      async function f() {
        !t &&
          u &&
          ((a.cards.length > 2 && a.cardSum > 21) ||
            (a.cards.length === 2 && a.cardSum === 21) ||
            (a.cards.length === 3 && l)) &&
          (c = setTimeout(n, 1e3));
      }
      return f(), () => clearTimeout(c);
    }, [a, l, n, t, u]),
    x.jsx(wb, {
      playerIndex: e,
      isCurrPlayerFinished: t,
      makeCurrPlayerNotFinished: r,
      changeToNextPlayer: i,
    })
  );
}
const hf = ({ cardUrlVal: e, isHidden: t }) => {
    const n = `https://deckofcardsapi.com/static/img/${e}.png`,
      [r, i] = R.useState(!1);
    return (
      R.useEffect(() => {
        const o = new Image();
        (o.src = n),
          (o.onload = () => {
            i(!0);
          });
      }, [n]),
      x.jsx("div", {
        className: `playing-card ${r ? "animate-in" : ""} ${t ? "hidden" : ""}`,
        children: x.jsx("img", {
          width: 100,
          height: 140,
          style: { opacity: r ? 1 : 0 },
          src: n,
          alt: `${e}.png`,
        }),
      })
    );
  },
  hg = ({ cardUrlVals: e, isDealerCardRevealed: t }) =>
    x.jsx(x.Fragment, {
      children: e.map((n, r) =>
        x.jsx(hf, { cardUrlVal: n, isHidden: !t && r === 0 }, r),
      ),
    }),
  mg = (e) => {
    let t = { cardIndex: 0, suitIndex: 0 },
      n = !1;
    for (; !n; ) {
      const r = Math.floor(Math.random() * 4),
        i = Math.floor(Math.random() * 13);
      e[i].suits[r] > 0 && ((t = { cardIndex: i, suitIndex: r }), (n = !0));
    }
    return t;
  },
  yg = (e, t, n, r) => {
    const i = { ...e },
      o = ["♦", "♣", "♥", "♠"],
      s = ["D", "S", "H", "S"],
      a = `${r[t].card}${o[n]}`,
      l = r[t].value,
      u = `${r[t].card}${s[n]}`,
      c = [...i.cards, a],
      f = [...i.cardNumVals, l],
      d = [...i.cardUrlVals, u];
    return {
      ...i,
      cards: c,
      cardNumVals: f,
      cardUrlVals: d,
      cardSum: i.cardSum + l,
    };
  },
  vg = (e) => {
    const t = { ...e };
    if (t.cardSum > 21)
      for (; t.cardSum > 21; ) {
        const n = t.cardNumVals.lastIndexOf(11);
        if (n === -1) break;
        (t.cardNumVals[n] = 1),
          (t.cardSum = t.cardNumVals.reduce((r, i) => r + i));
      }
    return t;
  },
  gg = (e, t, n) =>
    e.map((r, i) =>
      i === t
        ? { ...r, suits: r.suits.map((o, s) => (s === n ? o - 1 : o)) }
        : r,
    ),
  Eb = () => {
    const e = K(),
      t = N((o) => o.dealerObj),
      n = N((o) => o.deck),
      r = R.useCallback(
        (o) => {
          e(rb({ ...t, ...o }));
        },
        [e, t],
      );
    return R.useCallback(() => {
      const { cardIndex: o, suitIndex: s } = mg(n),
        a = { ...t.hand },
        l = yg(a, o, s, n);
      let u;
      l.cardNumVals.includes(11)
        ? (u = { ...t, hand: vg(l) })
        : (u = { ...t, hand: l }),
        r(u);
      const c = gg(n, o, s);
      e(s0(c));
    }, [n, e, t, r]);
  };
function Cb() {
  const e = K(),
    { isDealerCardRevealed: t, isDealerRoundActive: n } = N((i) => i.gameData),
    r = "https://deckofcardsapi.com/static/img/back.png";
  return (
    R.useEffect(() => {
      let i = !0;
      async function o() {
        i && n && !t && (await fe(1500), e(b2()));
      }
      return (
        o(),
        () => {
          i = !1;
        }
      );
    }, [n, e, t]),
    x.jsx("div", {
      className: "playing-card",
      children: x.jsx("img", {
        width: 100,
        height: 140,
        className: "back-of-card hiddenCardAnimation",
        src: r,
        alt: "Back of Card",
      }),
    })
  );
}
function Rb({ showDealerData: e, makeBlackjackTrue: t }) {
  const { isDealerCardRevealed: n, isDealerRoundActive: r } = N(
      (c) => c.gameData,
    ),
    i = N((c) => c.dealerObj),
    { name: o, hand: s } = i,
    { cardSum: a, cardUrlVals: l } = s;
  R.useEffect(() => {
    let c = !0;
    async function f() {
      c && (await fe(1e3), a === 21 && l.length === 2 && n && t());
    }
    return (
      f(),
      () => {
        c = !1;
      }
    );
  }, [n, l, a, t]);
  let u = o;
  return (
    e.isBlackjack
      ? (u = x.jsxs("h3", {
          className: " win-color",
          children: [o, " BlackJack!"],
        }))
      : !r && a > 21
        ? (u = x.jsxs("h3", {
            className: " lose-color",
            children: [o, " Bust!"],
          }))
        : !r && a >= 17 && a < 21
          ? (u = x.jsxs("h3", {
              className: " stay-color",
              children: [o, " Stays"],
            }))
          : (u = x.jsx("h3", { className: "", children: o })),
    u
  );
}
function Pb({ showDealerData: e, updateIsInsuranceEval: t }) {
  const {
      isDealerCardRevealed: n,
      isInsuranceRoundComplete: r,
      isDealerRoundActive: i,
    } = N((f) => f.gameData),
    o = N((f) => f.playersArr),
    a = N((f) => f.dealerObj).hand.cardSum,
    l = o.some((f) => f.insuranceBet !== 0);
  R.useEffect(() => {
    let f = !0;
    async function d() {
      f && i && (n && l ? (await fe(1500), t(!0)) : t(!1));
    }
    return (
      d(),
      () => {
        f = !1;
      }
    );
  }, [l, n, i, t]);
  const u = r ? "dealer-status dealer-status-reverse" : "dealer-status";
  let c = "";
  return (
    !r && e.isInsuranceEval
      ? (c = "Checking insurance bets...")
      : r && i && n && !e.isBlackjack && a < 16
        ? (c = "Dealer drawing cards...")
        : (c = ""),
    x.jsx("div", {
      className: u,
      children: x.jsx("h5", { className: "dealer-status", children: c }),
    })
  );
}
function bb() {
  const [e, t] = R.useState({ isInsuranceEval: !1, isBlackjack: !1 }),
    n = R.useCallback(() => {
      t((l) => ({ ...l, isBlackjack: !0 }));
    }, []),
    r = R.useCallback((l) => {
      t((u) => ({ ...u, isInsuranceEval: l }));
    }, []),
    { isDealerCardRevealed: i } = N((l) => l.gameData),
    o = N((l) => l.dealerObj),
    { hand: s } = o,
    { cardSum: a } = s;
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx(Rb, { showDealerData: e, makeBlackjackTrue: n }),
      x.jsxs("p", {
        className: `hide-item ${i ? "reveal-item" : ""}`,
        children: ["Sum: ", a],
      }),
      x.jsx(Pb, { showDealerData: e, updateIsInsuranceEval: r }),
    ],
  });
}
function _b() {
  const { isPlayerRoundActive: e } = N((t) => t.gameData);
  return x.jsx("div", {
    className: "dealer-details",
    children: e ? x.jsx("h3", { children: "Dealer" }) : x.jsx(bb, {}),
  });
}
const jb = (e) =>
    x.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      xmlSpace: "preserve",
      viewBox: "0 0 100 125",
      ...e,
      children: x.jsx("switch", {
        children: x.jsxs("g", {
          children: [
            x.jsx("path", {
              d: "M77.4 17.7c-.9-3-3.3-5.4-6.4-6.2C69.9 7.7 66.5 5 62.4 5H24.8c-5 0-9 4-9 9v59.6c0 4.2 2.9 7.7 6.8 8.7.9 3 3.3 5.4 6.4 6.2 1.1 3.7 4.6 6.5 8.6 6.5h37.6c5 0 9-4 9-9V26.4c0-4.2-2.9-7.8-6.8-8.7zM18.7 73.6V14c0-3.3 2.7-6.1 6.1-6.1h37.6c3.3 0 6.1 2.7 6.1 6.1v59.6c0 3.3-2.7 6.1-6.1 6.1H24.8c-3.4 0-6.1-2.7-6.1-6.1zm12.5 12.3c-2.3 0-4.4-1.3-5.4-3.3h36.6c5 0 9-4 9-9V14.7c2.1 1 3.5 3.1 3.5 5.5v59.6c0 3.3-2.7 6.1-6.1 6.1H31.2zm50.1.1c0 3.3-2.7 6.1-6.1 6.1H37.6c-2.3 0-4.4-1.3-5.4-3.3h36.6c5 0 9-4 9-9V20.9c2.1 1 3.5 3.1 3.5 5.5V86z",
            }),
            x.jsx("path", {
              d: "M64.6 72.3V15.4c0-1.8-1.5-3.3-3.3-3.3H25.9c-1.8 0-3.3 1.5-3.3 3.3v56.9c0 1.8 1.5 3.3 3.3 3.3h35.3c1.9 0 3.4-1.5 3.4-3.3zm-.8-7.2-3 4.6-3.8-5.9 3.8-5.9 3 4.6v2.6zM38.7 50.6l-3.8 5.9-3.9-5.9 3.8-5.9 3.9 5.9zM31 37.3l3.8-5.9 3.8 5.9-3.8 5.9-3.8-5.9zm4.3 6.6 3.8-5.9 3.8 5.9-3.8 5.9-3.8-5.9zm4.3-6.6 3.8-5.9 3.8 5.9-3.8 5.9-3.8-5.9zm3.9 7.4 3.8 5.9-3.8 5.9-3.8-5.9 3.8-5.9zm.5-.8 3.8-5.9 3.8 5.9-3.8 5.9-3.8-5.9zm4.3-6.6 3.8-5.9 3.8 5.9-3.8 5.9-3.8-5.9zm3.8 7.4 3.8 5.9-3.8 5.9-3.8-5.9 3.8-5.9zm.5-.8 3.8-5.9 3.8 5.9-3.8 5.9-3.8-5.9zm0-13.2 3.8-5.9 3.8 5.9-3.8 5.9-3.8-5.9zm-.5-.8L48.3 24l3.8-5.9 3.8 5.9-3.8 5.9zm-.5.8-3.8 5.9-3.8-5.9 3.8-5.9 3.8 5.9zm-8.1-.8L39.6 24l3.8-5.9 3.8 5.9-3.7 5.9zm-.5.8-3.8 5.9-3.8-5.9 3.8-5.9 3.8 5.9zm-8.2-.8L31 24l3.8-5.9 3.8 5.9-3.8 5.9zm-.4.8-3.8 5.9-3.8-5.9 3.8-5.9 3.8 5.9zm0 13.2-3.8 5.9-3.8-5.9 3.8-5.9 3.8 5.9zm0 13.3-3.8 5.9-3.8-5.9 3.8-5.9 3.8 5.9zm.4.8 3.8 5.9-3.8 5.9-3.8-5.9 3.8-5.9zm.5-.8 3.8-5.9 3.8 5.9-3.8 5.9-3.8-5.9zm8.2.8 3.8 5.9-3.8 5.9-3.8-5.9 3.8-5.9zm.5-.8 3.8-5.9 3.8 5.9-3.8 5.9-3.8-5.9zm8.1.8 3.8 5.9-3.8 5.9-3.8-5.9 3.8-5.9zm.5-.8 3.8-5.9 3.8 5.9-3.8 5.9-3.8-5.9zm11.2 3.9-2.5-3.9 2.5-3.9v7.8zm0-9.3-3 4.6-3.8-5.9 3.8-5.9 3 4.6v2.6zm0-4-2.5-3.9 2.5-3.9v7.8zm0-9.3-3 4.6-3.8-5.9 3.8-5.9 3 4.6v2.6zm0-3.9-2.5-3.9 2.5-3.9v7.8zm0-9.3-3 4.6-3.9-5.9 3.8-5.9 3 4.6v2.6zm0-9.9v5.9l-2.5-3.9 2.2-3.3c.1.3.3.8.3 1.3zm-37.9-2.6h35.3c.6 0 1.2.2 1.6.6l-2.1 3.2-2.4-3.8h-1l2.9 4.5-3.8 5.9-3.8-5.9 2.9-4.5h-1l-2.4 3.8-2.4-3.8h-1l2.9 4.5-3.8 5.9-3.8-5.8 2.9-4.5h-1l-2.4 3.8-2.5-3.8h-1l2.9 4.5-3.8 5.9-3.8-5.9 2.9-4.5h-1l-2.4 3.8-2.4-3.8h-1l2.9 4.5-3.8 5.9-3.8-5.9 2.9-4.5h-1l-2.4 3.8-2-3.1c.4-.5 1-.8 1.7-.8zm-2.5 2.6c0-.4.1-.8.3-1.1l2.1 3.2-2.4 3.5v-5.6zm0 7 2.8-4.3L30 24l-3.8 5.9-2.8-4.3v-3.2zm0 4.7 2.3 3.6-2.3 3.6v-7.2zm0 8.6 2.8-4.3 3.8 5.9-3.8 5.9-2.8-4.3v-3.2zm0 4.7 2.3 3.6-2.3 3.6v-7.2zm0 8.6 2.8-4.3 3.8 5.9-3.8 5.9-2.8-4.3V49zm0 4.6 2.3 3.6-2.3 3.6v-7.2zm0 8.7 2.8-4.3 3.8 5.9-3.8 5.9-2.8-4.3v-3.2zm0 10V67l2.3 3.6-2 3c-.2-.4-.3-.9-.3-1.3zm2.5 2.5c-.6 0-1.2-.2-1.6-.6l1.9-2.9 2.3 3.5h-2.6zm3.6 0-2.8-4.3 3.8-5.9 3.8 5.9-2.8 4.3h-2zm3 0 2.3-3.5 2.3 3.5h-4.6zm5.6 0-2.8-4.3 3.8-5.9 3.8 5.9-2.8 4.3h-2zm3.1 0 2.3-3.5 2.3 3.5h-4.6zm5.5 0L44 70.5l3.8-5.9 3.8 5.9-2.8 4.3h-2.1zm3.1 0 2.3-3.5 2.3 3.5h-4.6zm5.6 0-2.8-4.3 3.8-5.9 3.8 5.9-2.8 4.3h-2zm5.8 0h-2.8l2.3-3.5 2 3.1c-.4.2-.9.4-1.5.4zm0-4.3 2.5-3.9v5.7c0 .5-.2 1-.5 1.4l-2-3.2z",
            }),
          ],
        }),
      }),
    }),
  Ob = () => {
    const e = N((h) => h.dealerObj),
      t = N((h) => h.playersArr),
      n = N((h) => h.gameData),
      {
        isInsuranceRoundComplete: r,
        isDealerCardRevealed: i,
        isDealerRoundActive: o,
        isPlayerRoundActive: s,
        roundsPlayed: a,
        isGameIntro: l,
        isAddPlayersRound: u,
        isBetRoundActive: c,
      } = n,
      { cards: f, cardSum: d } = e.hand,
      v = f.length,
      S = Eb(),
      m = K(),
      w = !l && !u && !c,
      y = t.some((h) => h.insuranceBet !== 0),
      p = t.every((h) => h.wonInsuranceRound);
    return (
      R.useEffect(() => {
        let h = !0;
        async function g() {
          h && s && (v === 0 && S(), v === 1 && (await fe(400), S()));
        }
        return (
          g(),
          () => {
            h = !1;
          }
        );
      }, [f, S, v, s]),
      R.useEffect(() => {
        o && (y && i ? m(D2()) : !r && !y && m(M2()));
      }, [y, i, m, r, o]),
      R.useEffect(() => {
        let h = !0;
        async function g() {
          h &&
            o &&
            (i && d < 17 && r
              ? (await fe(1500), m(A2()), S())
              : d >= 17 && r && i && (await fe(1500), m(p ? N2() : _2())));
        }
        return (
          g(),
          () => {
            h = !1;
          }
        );
      }, [d, S, i, r, o, m, p]),
      x.jsxs("section", {
        className: "dealer-table",
        children: [
          x.jsx(jb, { className: "full-deck-image" }),
          x.jsxs("div", {
            className: "dealer-hand",
            children: [
              w &&
                x.jsxs("h2", {
                  className: "rounds-played",
                  children: ["Round ", a],
                }),
              x.jsx(_b, {}),
              x.jsxs("div", {
                className: "dealer-cards",
                children: [
                  !i && x.jsx(Cb, {}),
                  x.jsx(hg, {
                    cardUrlVals: e.hand.cardUrlVals,
                    isDealerCardRevealed: i,
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  mf = (e) => {
    const t = K(),
      n = N((s) => s.playersArr),
      r = N((s) => s.deck),
      i = R.useCallback(
        (s) => {
          t(Td({ ...n[e], ...s }));
        },
        [t, e, n],
      );
    return R.useCallback(() => {
      const { cardIndex: s, suitIndex: a } = mg(r),
        l = n[e],
        u = yg(l.hand, s, a, r);
      let c;
      u.cardNumVals.includes(11)
        ? (c = { ...l, hand: vg(u) })
        : (c = { ...l, hand: u }),
        i(c);
      const f = gg(r, s, a);
      t(s0(f));
    }, [r, t, e, n, i]);
  };
function Ab({ playerIndex: e }) {
  const n = N((l) => l.playersArr)[e],
    { hand: r, currBet: i, bank: o } = n,
    s = K(),
    a = { display: r.cards.length > 2 && o >= i ? "none" : "block" };
  return x.jsx("button", {
    style: a,
    onClick: () => s(Z2(e)),
    className: "game-btn double-btn",
    children: "Double Down",
  });
}
function Tb({ playerIndex: e }) {
  const t = mf(e),
    r = N((u) => u.playersArr)[e],
    { hand: i, isDoubleDown: o, currBet: s, bank: a } = r;
  R.useEffect(() => {
    o &&
      i.cards.length === 2 &&
      setTimeout(() => {
        t();
      }, 300);
  }, [o, i, t]);
  const l = s < a;
  return x.jsx("div", {
    className: "player-btn-container",
    children: i.cards.length === 2 && l && x.jsx(Ab, { playerIndex: e }),
  });
}
function Db({ makeCurrPlayerFinished: e, playerIndex: t }) {
  const n = N((a) => a.playersArr),
    { isDoubleDown: r, hand: i } = n[t];
  let o = "";
  i.cards.length < 2 ||
  r ||
  (i.cardSum === 21 && i.cards.length === 2) ||
  i.cardSum > 21
    ? (o = "game-btn stand-btn disabled")
    : (o = "game-btn stand-btn");
  const s = () => {
    setTimeout(() => {
      e();
    }, 350);
  };
  return x.jsx("div", {
    className: "player-btn-container",
    children: x.jsx("button", { onClick: s, className: o, children: "Stand" }),
  });
}
const Mb = (e) =>
  x.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    viewBox: "0 0 64 80",
    ...e,
    children: [
      x.jsx("path", {
        d: "M50 5H14a1 1 0 0 0-1 1v52a1 1 0 0 0 1 1h36a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-1 52H15V7h34v50z",
      }),
      x.jsx("path", {
        d: "M17 56h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H17a1 1 0 0 0-1 1v46a1 1 0 0 0 1 1zm1-46h28v44H18V10z",
      }),
      x.jsx("path", {
        d: "M44 46.031a1 1 0 0 0-1 1V52a1 1 0 1 0 2 0v-4.969a1 1 0 0 0-1-1zM20 11a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1zM34.756 27.6C33.634 26.84 33 26.369 33 25.539a1 1 0 1 0-2 0c0 .83-.634 1.301-1.756 2.061-1.297.878-2.911 1.972-2.911 4.278 0 2.024 1.301 3.33 3.53 3.613l-.355 2.846a1 1 0 0 0 .993 1.124h3a1 1 0 0 0 .968-1.319l-.331-2.648c.682-.086 1.279-.266 1.782-.54.797-.434 1.748-1.319 1.748-3.075-.001-2.308-1.615-3.401-2.912-4.279zm.206 5.597c-.424.23-1.041.353-1.785.353l-.145-.002a.966.966 0 0 0-.764.33 1.004 1.004 0 0 0-.25.794l.349 2.789h-.734l.349-2.789a1 1 0 0 0-.25-.794.975.975 0 0 0-.764-.33l-.145.002c-2.489 0-2.489-1.215-2.489-1.672 0-1.186.772-1.769 2.033-2.623.541-.366 1.142-.774 1.634-1.296.492.521 1.093.93 1.634 1.296 1.26.854 2.033 1.438 2.033 2.623-.001.829-.378 1.141-.706 1.319z",
      }),
      x.jsx("text", {
        y: 79,
        fontFamily:
          "'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif",
        fontSize: 5,
        fontWeight: "bold",
      }),
      x.jsx("text", {
        y: 84,
        fontFamily:
          "'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif",
        fontSize: 5,
        fontWeight: "bold",
      }),
    ],
  });
function Nb({ placement: e = "bottom" }) {
  return x.jsx(In, {
    icon: () => x.jsx(Mb, {}),
    text: "Draw card",
    placement: e,
  });
}
function $b({ playerIndex: e }) {
  const t = N((a) => a.playersArr),
    { isDoubleDown: n, hand: r } = t[e],
    i = mf(e),
    o = async () => {
      await fe(200), i();
    };
  let s;
  return (
    r.cards.length < 2 ||
    n ||
    (r.cardSum === 21 && r.cards.length === 2) ||
    r.cardSum > 21
      ? (s = "draw-cards-icon disabled")
      : (s = "draw-cards-icon"),
    x.jsx("div", {
      "aria-label": "draw card",
      onClick: o,
      className: s,
      children: x.jsx(Nb, { placement: "top" }),
    })
  );
}
function Ib({ playerIndex: e }) {
  const t = K(),
    r = N((a) => a.playersArr)[e],
    { hand: i } = r;
  let o = !1;
  if (i.cards.length === 2) {
    const a = i.cards.map((l) => l.slice(0, 1));
    a[0] === a[1] &&
      r.splitHand.cards.length === 0 &&
      r.bank >= r.currBet &&
      (o = !0);
  }
  if (!o) return;
  const s = async () => {
    await fe(500), t(ek(e));
  };
  return x.jsx("div", {
    className: "player-btn-container",
    children: x.jsx("button", {
      className: "game-btn split-btn",
      onClick: s,
      children: "Split",
    }),
  });
}
function zb({ playerIndex: e }) {
  const n = N((a) => a.playersArr)[e],
    { hand: r } = n,
    i = N((a) => a.dealerObj),
    o = K();
  if (i.hand.cardNumVals.length === 2) {
    if (
      i.hand.cardNumVals[1] !== 11 ||
      r.cards.length !== 2 ||
      (r.cards.length === 2 && r.cardSum === 21) ||
      n.insuranceBet !== 0 ||
      n.splitBet !== 0 ||
      n.bank < Math.ceil(n.currBet / 2)
    )
      return;
  } else return;
  const s = async () => {
    await fe(300), o(X2(e));
  };
  return x.jsx("div", {
    className: "player-btn-container",
    children: x.jsx("button", {
      onClick: s,
      className: "insurance-btn game-btn",
      children: "Insurance",
    }),
  });
}
const Lb = (e) =>
  x.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    viewBox: "0 0 100 125",
    ...e,
    children: [
      x.jsx("switch", {
        children: x.jsxs("g", {
          children: [
            x.jsx("path", {
              d: "M5273.1 2400.1v-2c0-2.8-5-4-9.7-4s-9.7 1.3-9.7 4v2c0 1.8.7 3.6 2 4.9l5 4.9c.3.3.4.6.4 1v6.4c0 .4.2.7.6.8l2.9.9c.5.1 1-.2 1-.8v-7.2c0-.4.2-.7.4-1l5.1-5c1.3-1.3 2-3.1 2-4.9zm-9.7-.1c-4.8 0-7.4-1.3-7.5-1.8.1-.5 2.7-1.8 7.5-1.8s7.3 1.3 7.5 1.8c-.2.5-2.7 1.8-7.5 1.8z",
            }),
            x.jsx("path", {
              d: "M5268.4 2410.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1h-4.3zM5272.7 2413.7h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1zM5272.7 2417h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1 0-.5-.4-1-1-1zM94.9 15.7H58.3c-1.5 0-2.6 1.2-2.6 2.6v20.4c0 1.5 1.2 2.6 2.6 2.6 1.5 0 2.6-1.2 2.6-2.6V21h31.3v58H60.9V61.3c0-1.5-1.2-2.6-2.6-2.6-1.5 0-2.6 1.2-2.6 2.6v20.4c0 1.5 1.2 2.6 2.6 2.6h36.6c1.5 0 2.6-1.2 2.6-2.6V18.3c0-1.4-1.2-2.6-2.6-2.6z",
            }),
            x.jsx("path", {
              d: "M69.2 59c-1.1 1.1-1.1 2.9 0 4 .5.5 1.3.8 2 .8s1.4-.3 2-.8l11-11c1.1-1.1 1.1-2.9 0-4l-11-11c-1.1-1.1-2.9-1.1-4 0s-1.1 2.9 0 4l6.2 6.2H48.6c-1.6 0-2.8 1.3-2.8 2.8s1.3 2.8 2.8 2.8h26.7L69.2 59zM12.2 58l-.1-.1-.7 4.9c-.1.9-.4 1.9-.9 2.8L4.6 78c-.9 1.9-.1 4.1 1.8 5 .5.3 1.1.4 1.6.4 1.4 0 2.8-.8 3.4-2.2l5.9-12.5c.7-1.4 1.1-2.8 1.4-4.4-.4-.4-.9-.8-1.3-1.3-2.4-2.2-4.9-4.7-5.2-5z",
            }),
            x.jsx("path", {
              d: "m39.7 45.4-3.2-2.1c-1.8-1.2-3.4-2.6-4.7-4.3-4.5-5.8-5.6-6.5-7.2-6.6l-5.2-.3c-1.1-.1-2.2.3-4.7 1.7-4.4 2.4-8 5.9-10.4 10.3l-1.5 2.8c-.8 1.5-.3 3.4 1.3 4.3.5.3 1 .4 1.5.4 1.1 0 2.2-.6 2.8-1.6l1.5-2.8c1.1-2 2.5-3.7 4.1-5.1-.2 2.2-.5 4.8-.7 6.4-.4 3.2-1.1 5.4 1 7.4.7.7 9.9 9.6 9.9 9.6 1 .9 1.6 2.1 2 3.4L29 80.5c.4 1.7 2 2.9 3.7 2.9.3 0 .6 0 .9-.1 2-.5 3.3-2.5 2.8-4.6L33.5 67c-.6-2.7-2-5.1-4-7.1l-4.9-4.8 2.5-12c1.7 2.1 3.7 3.9 6 5.4l3.2 2.1c1.5.9 3.4.5 4.4-.9.9-1.4.5-3.3-1-4.3z",
            }),
            x.jsx("circle", {
              cx: 23,
              cy: 23.6,
              r: 7,
              transform: "rotate(-83.788 23.024 23.611)",
            }),
          ],
        }),
      }),
      x.jsx("text", {
        y: 115,
        fontFamily:
          "'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif",
        fontSize: 5,
        fontWeight: "bold",
      }),
      x.jsx("text", {
        y: 120,
        fontFamily:
          "'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif",
        fontSize: 5,
        fontWeight: "bold",
      }),
    ],
  });
function Bb({ placement: e = "bottom" }) {
  return x.jsx(In, {
    "aria-labelledby": "exit-table-icon",
    icon: () => x.jsx(Lb, {}),
    text: "Leave table",
    placement: e,
  });
}
function Fb({ player: e }) {
  const t = N((o) => o.playersArr),
    n = e.name,
    r = t[t.length - 1].name;
  let i = "";
  return (
    t.length > 1
      ? n === r
        ? (i = "Player round complete")
        : (i = "")
      : (i = "Game Over"),
    x.jsxs(x.Fragment, {
      children: [
        i && x.jsx("h2", { children: i }),
        x.jsxs("h3", { children: [e.name, " left the table"] }),
        x.jsxs("ul", {
          children: [
            x.jsxs("li", { children: ["Bank: $", e.bank] }),
            x.jsxs("li", { children: ["Rounds won: ", e.roundsWon] }),
          ],
        }),
      ],
    })
  );
}
function Hb({ player: e }) {
  const t = N((a) => a.playersArr),
    n = N((a) => a.gameData.isPlayerRoundActive),
    r = e.name,
    i = t[t.length - 1].name;
  let o = "";
  const s = t.findIndex((a) => a.name === r);
  return (
    t.length > 1
      ? n
        ? r === i
          ? (o = "Beginning dealer round...")
          : (o = `Beginning ${t[s + 1].name}'s turn...`)
        : (o = "Returning to round results...")
      : (o = "All players left the table. Showing final results..."),
    x.jsx("p", { children: o })
  );
}
function Ub({ player: e, closeModal: t }) {
  const n = N((u) => u.playersArr),
    { isPlayerRoundActive: r } = N((u) => u.gameData),
    i = K(),
    o = Ot(),
    s = () => {
      const u = e.name,
        c = n[n.length - 1].name;
      i(u0({ name: e.name })),
        i(ok({ ...e })),
        n.length > 1
          ? u === c && r && i(t0())
          : (i(ff()), i(r0()), o("/finalResults")),
        t();
    },
    a = R.useRef(null),
    l = () => {
      a.current && a.current.click();
    };
  return x.jsx(x.Fragment, {
    children: x.jsxs("div", {
      className: "exit-table-modal",
      children: [
        x.jsx(Fb, { player: e }),
        x.jsx("button", {
          "aria-label": "Exit table",
          className: "hidden-btn",
          ref: a,
          onClick: s,
        }),
        x.jsx(xl, { timeout: 2e3, onTimeout: l }),
        x.jsx(Hb, { player: e }),
      ],
    }),
  });
}
function Vb({ player: e, closeModal: t, isModalOpen: n }) {
  return x.jsx(hi, {
    closeModal: t,
    open: n,
    isTimer: !0,
    children: x.jsx(Ub, { player: e, closeModal: t }),
  });
}
function Sg({ player: e }) {
  const [t, n] = R.useState(!1),
    r = () => n(!1),
    i = () => n(!0);
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx("div", {
        id: "exit-table-icon",
        onClick: i,
        className: "exit-table-icon",
        "aria-label": "exit table",
        children: x.jsx(Bb, { placement: "top" }),
      }),
      x.jsx(Vb, { player: e, closeModal: r, isModalOpen: t }),
    ],
  });
}
function Wb({ playerIndex: e, makeCurrPlayerFinished: t }) {
  const r = N((i) => i.playersArr)[e];
  return x.jsxs(x.Fragment, {
    children: [
      x.jsxs("div", {
        className: "current-options",
        children: [
          x.jsx(Tb, { playerIndex: e }),
          x.jsx(Ib, { playerIndex: e }),
          x.jsx(zb, { playerIndex: e }),
        ],
      }),
      x.jsx(Db, { playerIndex: e, makeCurrPlayerFinished: t }),
      x.jsx($b, { playerIndex: e }),
      x.jsx(Sg, { player: r }),
    ],
  });
}
function Qb({ playerIndex: e }) {
  const n = N((r) => r.playersArr)[e];
  return x.jsxs("aside", {
    className: "player-info",
    children: [
      x.jsxs("h5", { children: ["Current Bank: $", n.bank] }),
      x.jsxs("h5", { children: ["Main Bet: $", n.currBet] }),
      n.splitBet > 0 &&
        x.jsxs("h5", { children: [" Split Bet: $", n.splitBet] }),
      n.insuranceBet > 0 &&
        x.jsxs("h5", { children: [" Insurance Bet: $", n.insuranceBet] }),
      x.jsxs("h5", { children: ["Card sum: ", n.hand.cardSum] }),
    ],
  });
}
function Gb({ playerIndex: e }) {
  const n = N((o) => o.playersArr)[e],
    { splitHand: r } = n,
    i = r.cards.length === 1 ? "Split hand" : "Main hand";
  return x.jsxs("div", {
    className: "split-card-preview disabled",
    children: [
      x.jsx("h5", { children: i }),
      x.jsx(hf, { isHidden: !1, cardUrlVal: r.cardUrlVals[0] }),
    ],
  });
}
function qb({ playerIndex: e, makeCurrPlayerFinished: t }) {
  const n = N((c) => c.playersArr),
    r = N((c) => c.dealerObj),
    { hand: i, splitHand: o, splitBet: s, name: a } = n[e],
    l = mf(e);
  R.useEffect(() => {
    let c = !0;
    async function f() {
      c &&
        (await fe(400),
        r.hand.cards.length === 2 &&
          (i.cards.length === 0 || i.cards.length === 1) &&
          l());
    }
    return (
      f(),
      () => {
        c = !1;
      }
    );
  }, [i, r, l]);
  const u = o.cards.length === 1 ? ": Main hand" : ": Split hand";
  return x.jsxs("section", {
    className: "player-table",
    children: [
      x.jsx(Wb, { makeCurrPlayerFinished: t, playerIndex: e }),
      x.jsx(Qb, { playerIndex: e }),
      x.jsxs("div", {
        className: "main-player-hand",
        children: [
          x.jsxs("div", {
            className: "player-header",
            children: [
              x.jsxs("h2", { children: [a, " "] }),
              s > 0 && x.jsxs("h2", { children: [" ", u] }),
            ],
          }),
          x.jsx("div", {
            className: "player-cards",
            children: x.jsx(hg, { cardUrlVals: i.cardUrlVals, playerIndex: e }),
          }),
        ],
      }),
      n[e].splitHand.cards.length > 0 && x.jsx(Gb, { playerIndex: e }),
    ],
  });
}
function xg({ cardUrlVals: e }) {
  return x.jsx("div", {
    className: "curr-player-hand",
    children: e.map((t, n) => x.jsx(hf, { cardUrlVal: t, isHidden: !1 }, n)),
  });
}
function wg({ player: e, mainOrSplit: t = "main" }) {
  const n = t === "main" ? e.hand : e.splitHand,
    { cardUrlVals: r, cardSum: i } = n,
    o = i === 21 && r.length === 2;
  let s = "";
  return (
    o
      ? (s = x.jsx("p", { className: "win-color", children: "BlackJack!" }))
      : i > 21
        ? (s = x.jsx("p", { className: "lose-color", children: "Bust!" }))
        : (s = x.jsx("p", { className: "stay-color", children: "Stay!" })),
    x.jsx("div", { children: s })
  );
}
function Kb({ player: e }) {
  const t = K(),
    n = N((c) => c.dealerObj),
    { isRoundActive: r, isMainResultsActive: i } = N((c) => c.gameData),
    { roundResults: o, name: s, wonInsuranceRound: a } = e,
    { mainResults: l } = o;
  R.useEffect(() => {
    let c = !0;
    async function f() {
      c &&
        i &&
        r &&
        o.mainResults === "" &&
        !a &&
        (await fe(2e3), t(c0({ player: e, dealerObj: n })));
    }
    return (
      f(),
      () => {
        c = !1;
      }
    );
  }, [n, t, i, r, e, o.mainResults, a]);
  let u = "";
  return (
    l === "Won"
      ? (u = `${s} won!`)
      : l === "Lost"
        ? (u = "Dealer won!")
        : l === "Push"
          ? (u = "Push!")
          : (u = ""),
    u !== "" && x.jsx("p", { children: u })
  );
}
function Xb({ player: e }) {
  const { hand: t, bank: n, currBet: r } = e,
    { cardSum: i } = t;
  return x.jsxs(x.Fragment, {
    children: [
      x.jsxs("p", { children: ["Sum: ", i] }),
      x.jsxs("p", { children: ["Bank: ", n] }),
      r !== 0 && x.jsxs("p", { children: ["Bet: ", r] }),
      x.jsx(wg, { player: e, mainOrSplit: "main" }),
      x.jsx(Kb, { player: e }),
    ],
  });
}
function Yb({ player: e }) {
  const t = K(),
    n = N((l) => l.dealerObj),
    { isRoundActive: r } = N((l) => l.gameData),
    { roundResults: i, name: o } = e,
    { splitResults: s } = i;
  R.useEffect(() => {
    let l = !0;
    async function u() {
      l &&
        r &&
        i.splitResults === "" &&
        (await fe(1500), t(c0({ player: e, dealerObj: n })));
    }
    return (
      u(),
      () => {
        l = !1;
      }
    );
  }, [n, t, r, e, i.splitResults]);
  let a = "";
  return (
    s === "Won"
      ? (a = `${o} won!`)
      : s === "Lost"
        ? (a = "Dealer won!")
        : s === "Push"
          ? (a = "Push!")
          : (a = ""),
    a && x.jsx("p", { children: a })
  );
}
function Jb({ player: e }) {
  const { splitBet: t, bank: n } = e,
    { cardUrlVals: r, cardSum: i } = e.splitHand;
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx(xg, { cardUrlVals: r }),
      x.jsxs("p", { children: ["Sum: ", i] }),
      x.jsxs("p", { children: ["Bank: ", n] }),
      t !== 0 && x.jsxs("p", { children: ["Split bet: ", t] }),
      x.jsx(wg, { player: e, mainOrSplit: "split" }),
      x.jsx(Yb, { player: e }),
    ],
  });
}
var yf = {},
  Zb = Mn;
Object.defineProperty(yf, "__esModule", { value: !0 });
var kg = (yf.default = void 0),
  e4 = Zb(Nn()),
  t4 = x,
  n4 = (0, e4.default)(
    (0, t4.jsx)("path", {
      d: "M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12zm10-1h4v2h-4v3l-4-4 4-4v3z",
    }),
    "ArrowCircleLeft",
  );
kg = yf.default = n4;
function r4({ placement: e = "top" }) {
  return x.jsx(In, {
    icon: (t) => x.jsx(kg, { sx: t }),
    text: "Show main hand",
    placement: e,
  });
}
var vf = {},
  i4 = Mn;
Object.defineProperty(vf, "__esModule", { value: !0 });
var Eg = (vf.default = void 0),
  o4 = i4(Nn()),
  s4 = x,
  a4 = (0, o4.default)(
    (0, s4.jsx)("path", {
      d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-10 1H8v-2h4V8l4 4-4 4v-3z",
    }),
    "ArrowCircleRight",
  );
Eg = vf.default = a4;
function l4({ placement: e = "top" }) {
  return x.jsx(In, {
    icon: (t) => x.jsx(Eg, { sx: t }),
    text: "Show split hand",
    placement: e,
  });
}
function u4({
  player: e,
  changeToMainHand: t,
  changeToSplitHand: n,
  showSplitHand: r,
}) {
  const { isRoundActive: i } = N((s) => s.gameData),
    o = e.splitHand.cards.length !== 0;
  return x.jsxs("div", {
    className: "player-header",
    children: [
      o &&
        r &&
        x.jsx("div", {
          className: `main-hand-icon ${i && "disabled"}`,
          onClick: t,
          children: x.jsx(r4, {}),
        }),
      x.jsx("h3", { children: e.name }),
      o &&
        !r &&
        x.jsx("div", {
          className: `split-hand-icon ${i && "disabled"}`,
          onClick: n,
          children: x.jsx(l4, {}),
        }),
    ],
  });
}
function c4({ player: e }) {
  const t = N((a) => a.dealerObj),
    n = K(),
    { cardNumVals: r } = t.hand,
    { isDealerCardRevealed: i } = N((a) => a.gameData),
    [o, s] = R.useState({
      status: "",
      class_: "insurance-msg",
      isComplete: !1,
    });
  return (
    R.useEffect(() => {
      let a = !0;
      async function l() {
        a &&
          (await fe(2500),
          i &&
            e.insuranceBet !== 0 &&
            (r[0] === 10 && r[1] === 11
              ? s({
                  status: "Won!",
                  class_: "insurance-msg win-color revealed",
                  isComplete: !0,
                })
              : s({
                  status: "Lost!",
                  class_: "insurance-msg lose-color revealed",
                  isComplete: !0,
                })));
      }
      return (
        l(),
        () => {
          a = !1;
        }
      );
    }, [i, r, e]),
    R.useEffect(() => {
      let a = !0;
      async function l() {
        a &&
          (await fe(1500),
          o.isComplete &&
            e.insuranceBet !== 0 &&
            (o.status === "Won!"
              ? n(J2(e))
              : n(Td({ ...e, insuranceBet: 0 }))));
      }
      return (
        l(),
        () => {
          a = !1;
        }
      );
    }, [o, e, n]),
    x.jsx(x.Fragment, {
      children:
        o.status !== "" &&
        x.jsxs("p", {
          className: o.class_,
          children: ["Insurance ", o.status],
        }),
    })
  );
}
function d4({ player: e }) {
  const { insuranceBet: t } = e;
  return x.jsxs(x.Fragment, {
    children: [
      t !== 0 && x.jsxs("p", { children: ["Insurance: ", e.insuranceBet] }),
      x.jsx(c4, { player: e }),
    ],
  });
}
function f4({ player: e }) {
  const { bank: t, beginningRoundBank: n } = e;
  let r = "";
  return (
    t > n
      ? (r = `Money earned: $${t - n}`)
      : t < n
        ? (r = `Money lost: $${n - t}`)
        : (r = "Broke even"),
    x.jsx("p", { children: r })
  );
}
function p4({ player: e }) {
  const t = K(),
    { isRoundActive: n, isMainResultsActive: r } = N((i) => i.gameData);
  return (
    R.useEffect(() => {
      let i = !0;
      async function o() {
        if (i) {
          const { wonInsuranceRound: s, roundResults: a, splitBet: l } = e,
            { mainResults: u, isComplete: c } = a;
          (r || l) &&
            (r && u && !s && !c && (await fe(1500), t(iu(e)), t(j2())),
            n && a.splitResults && (await fe(1500), t(iu(e)), t(T2())),
            l && e.wonInsuranceRound && (t(iu(e)), t(n0())));
        }
      }
      return (
        o(),
        () => {
          i = !1;
        }
      );
    }, [t, e, n, r]),
    !n && x.jsx(f4, { player: e })
  );
}
function h4({ player: e }) {
  const [t, n] = R.useState(!1),
    [r, i] = R.useState("player-hand"),
    o = () => n(!0),
    s = () => n(!1),
    a = R.useCallback(
      (E) => {
        i(E);
      },
      [i],
    ),
    {
      isSplitResultsActive: l,
      isInsuranceRoundComplete: u,
      isDealerCardRevealed: c,
      isDealerDrawing: f,
      isMainResultsActive: d,
      isRoundActive: v,
    } = N((E) => E.gameData),
    { hand: S, wonInsuranceRound: m } = e,
    { splitResults: w, mainResults: y } = e.roundResults,
    { cardUrlVals: p } = S,
    h = N((E) => E.dealerObj.hand.cardSum),
    g = R.useCallback(
      (E) => {
        E === "Won"
          ? a("player-hand emphasize emphasize-win")
          : E === "Lost"
            ? a("player-hand emphasize emphasize-lose")
            : E === "Push" && a("player-hand emphasize emphasize-push");
      },
      [a],
    );
  R.useEffect(() => {
    let E = !0;
    async function k() {
      E &&
        (!u && c && !f
          ? (e.insuranceBet !== 0
              ? (await fe(1500), i("player-hand emphasize"))
              : e.insuranceBet === 0 && i("player-hand obscure-item"),
            await fe(900),
            h === 21 && e.insuranceBet !== 0
              ? i("player-hand emphasize emphasize-win")
              : h !== 21 &&
                e.insuranceBet !== 0 &&
                i("player-hand emphasize emphasize-lose"))
          : d
            ? y === ""
              ? a(m ? "player-hand obscure-item" : "player-hand emphasize")
              : y !== "" && !m && g(y)
            : l
              ? w === ""
                ? (await fe(1e3),
                  e.splitHand.cards.length !== 0
                    ? (o(), a("player-hand emphasize"))
                    : e.splitHand.cards.length === 0 &&
                      a("player-hand obscure-item"))
                : w !== "" && g(w)
              : a("player-hand"));
    }
    return (
      k(),
      () => {
        E = !1;
      }
    );
  }, [
    h,
    c,
    f,
    u,
    d,
    v,
    l,
    y,
    e.insuranceBet,
    e.splitHand.cards.length,
    w,
    a,
    g,
    m,
  ]);
  const C = e.bank + e.currBet <= 5;
  return x.jsxs("article", {
    className: r,
    children: [
      x.jsx(u4, {
        player: e,
        changeToSplitHand: o,
        changeToMainHand: s,
        showSplitHand: t,
      }),
      !t &&
        x.jsxs(x.Fragment, {
          children: [x.jsx(xg, { cardUrlVals: p }), x.jsx(Xb, { player: e })],
        }),
      t &&
        e.splitHand.cards.length > 0 &&
        x.jsx(Jb, { player: e, updatePlayerClass: a }),
      x.jsx(d4, { player: e }),
      x.jsx(p4, { player: e }),
      !v && !C && x.jsx(Sg, { player: e }),
    ],
  });
}
function m4({ player: e }) {
  return x.jsx("li", {
    children: x.jsxs("h3", {
      children: [e.name, " ran out of money and has left the table"],
    }),
  });
}
function y4({ closeModal: e }) {
  const { roundsPlayed: t } = N((a) => a.gameData),
    n = N((a) => a.playersArr),
    r = n.filter((a) => a.bank < 5),
    i = n.some((a) => a.bank >= 5),
    o = i
      ? `Moving to round ${t + 1} bets...`
      : "All players have left the table. Loading final results...";
  let s = null;
  return (
    i
      ? (s = x.jsx("ul", {
          className: "empty-bank-list",
          children: r.map((a) => x.jsx(m4, { player: a }, a.name)),
        }))
      : (s = x.jsx("h3", {
          className: "game-over-header",
          children: "Game Over",
        })),
    x.jsxs("div", {
      className: "empty-bank-container",
      children: [
        s,
        x.jsx(xl, { timeout: 2e3, onTimeout: e }),
        x.jsx("p", { children: o }),
      ],
    })
  );
}
function v4({ closePlayerBrokeModal: e, isPlayersBrokeModal: t }) {
  const n = Ot(),
    r = N((u) => u.playersArr),
    i = r.every((u) => u.bank < 5),
    o = r.filter((u) => u.bank < 5),
    s = K(),
    a = () => {
      e(), l();
    },
    l = () => {
      s(G2(o)), s(vc(o)), n(i ? "/finalResults" : "/placeBets");
    };
  return x.jsx(hi, {
    closeModal: a,
    open: t,
    isTimer: !0,
    children: x.jsx(y4, { closeModal: a }),
  });
}
function g4() {
  const [e, t] = R.useState(!1),
    n = () => t(!1),
    { roundsPlayed: r } = N((f) => f.gameData),
    i = N((f) => f.playersArr),
    o = i.every((f) => f.bank + f.currBet < 5),
    s = i.some((f) => f.bank < 5),
    a = K(),
    l = Ot(),
    u = async () => {
      await fe(300), s ? t(!0) : (l("/placeBets"), a(z2(o))), a(Q2()), a(ff());
    },
    c = o ? "View final results" : `Start Round ${r + 1}`;
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx("button", { onClick: u, className: "game-btn", children: c }),
      x.jsx(v4, { closePlayerBrokeModal: n, isPlayersBrokeModal: e }),
    ],
  });
}
function S4() {
  const {
      isMainResultsActive: e,
      isSplitResultsActive: t,
      isRoundActive: n,
    } = N((s) => s.gameData),
    i = N((s) => s.playersArr).every((s) => s.bank + s.currBet < 5);
  let o = "";
  return (
    t
      ? (o = "Split hand results...")
      : e
        ? (o = "Main hand results...")
        : i
          ? (o = "Game Over")
          : n
            ? (o = "")
            : (o = "Round complete:"),
    x.jsxs("header", {
      className: "header-btn-container",
      children: [o && x.jsx("h2", { children: o }), !n && x.jsx(g4, {})],
    })
  );
}
function x4() {
  const e = N((l) => l.playersArr),
    {
      isPlayerRoundActive: t,
      isMainResultsActive: n,
      isDealerRoundActive: r,
      isSplitResultsActive: i,
      isRoundActive: o,
    } = N((l) => l.gameData),
    s = K(),
    a = e.some((l) => l.splitHand.cards.length > 0 && !l.wonInsuranceRound);
  return (
    R.useEffect(() => {
      let l = !0;
      async function u() {
        l && o && !t && !r && !i && !n && (await fe(1200), s(a ? O2() : n0()));
      }
      return (
        u(),
        () => {
          l = !1;
        }
      );
    }, [t, r, i, s, a, n, o]),
    x.jsxs("section", {
      className: "player-results-table",
      children: [
        x.jsx(S4, {}),
        x.jsx("div", {
          className: "player-hand-results",
          children: e.map((l) => x.jsx(h4, { player: l }, l.name)),
        }),
      ],
    })
  );
}
function w4({ playerIndex: e, makeCurrPlayerFinished: t }) {
  const { isPlayerRoundActive: n } = N((r) => r.gameData);
  return x.jsxs("main", {
    className: "table",
    children: [
      x.jsx(Ob, {}),
      n && x.jsx(qb, { playerIndex: e, makeCurrPlayerFinished: t }),
      !n && x.jsx(x4, {}),
    ],
  });
}
function k4() {
  const e = K(),
    t = N((c) => c.playersArr),
    { isPlayerRoundActive: n } = N((c) => c.gameData),
    [r, i] = R.useState(0),
    [o, s] = R.useState(!1),
    a = R.useCallback(() => s(!0), []),
    l = R.useCallback(() => s(!1), []),
    u = () => {
      i((c) => (c + 1) % t.length), e(Y2(r));
    };
  return x.jsxs(pi, {
    bgClass: "dark-background play-round",
    children: [
      x.jsx(w4, { playerIndex: r, makeCurrPlayerFinished: a }),
      n &&
        x.jsx(kb, {
          playerIndex: r,
          isCurrPlayerFinished: o,
          makeCurrPlayerNotFinished: l,
          changeToNextPlayer: u,
          makeCurrPlayerFinished: a,
        }),
    ],
  });
}
function E4({ player: e }) {
  const { name: t, bank: n, roundsWon: r } = e,
    i = `Rounds won: ${r}`,
    o = `Bank: ${n}`,
    s = n > 1e3 ? "Won!" : "Lost",
    a = n > 1e3 ? "win-color" : "lose-color",
    l =
      n > 1e3
        ? x.jsxs("span", {
            children: [
              "Amount won: ",
              x.jsxs("span", {
                className: "win-color",
                children: ["$", n - 1e3],
              }),
              " ",
            ],
          })
        : x.jsxs("span", {
            children: [
              "Amount lost: ",
              x.jsxs("span", {
                className: "lose-color",
                children: ["$", 1e3 - n],
              }),
              " ",
            ],
          });
  return x.jsxs("li", {
    children: [
      x.jsxs("h5", { className: a, children: [t, " ", s, " "] }),
      x.jsxs("p", { children: [i, " - ", o, " - ", l] }),
    ],
  });
}
function C4() {
  const e = N((o) => o.inactivePlayers),
    t = N((o) => o.gameData),
    n = K(),
    r = Ot(),
    i = () => {
      n(i0()),
        n(sk()),
        n(a0()),
        r("/"),
        document.fullscreenElement && document.exitFullscreen();
    };
  return x.jsx(pi, {
    bgClass: "bright-lights",
    children: x.jsxs(qa, {
      children: [
        x.jsx("h2", { children: "Game Over" }),
        x.jsx("h3", { children: "Final results:" }),
        x.jsxs("h4", { children: ["Total rounds played: ", t.roundsPlayed] }),
        x.jsx("h4", { children: "Player stats:" }),
        x.jsx("ul", {
          children:
            e.length > 0 && e.map((o) => x.jsx(E4, { player: o }, o.name)),
        }),
        x.jsx("button", {
          onClick: i,
          className: "game-btn",
          children: "Return to main menu",
        }),
      ],
    }),
  });
}
const R4 = (e) => {
  R.useEffect(() => {
    const t = document.title;
    return (
      (document.title = e),
      () => {
        document.title = t;
      }
    );
  }, [e]);
};
function P4() {
  const e = N((a) => a.playersArr),
    t = N((a) => a.gameData),
    { deleteGameSessionHandler: n, updateGameSessionHandler: r } = Ka(),
    i = Ot();
  R4("Blackjack"),
    R.useEffect(() => {
      if (location.pathname !== "/") {
        i("/");
        return;
      }
    }, []);
  const o = e.every((a) => a.bank + a.currBet < 5);
  R.useEffect(() => {
    ((!t.isGameIntro && !t.isAddPlayersRound && o) ||
      (!t.isGameIntro && !t.isAddPlayersRound && e.length === 0)) &&
      n();
  }, [e, n, t, o]);
  const s = qi.get("blackjack-session-id");
  return (
    R.useEffect(() => {
      !t.isGameIntro &&
        !t.isAddPlayersRound &&
        !t.isBetRoundActive &&
        s &&
        setTimeout(() => {
          r();
        }, 300);
    }, [e]),
    x.jsxs(x.Fragment, {
      children: [
        x.jsx(MP, {}),
        x.jsx(sb, {}),
        x.jsxs(Wx, {
          children: [
            x.jsx(Hn, { path: "/", element: x.jsx(s3, {}) }),
            x.jsx(Hn, { path: "/addPlayers", element: x.jsx(PP, {}) }),
            x.jsx(Hn, { path: "/playGame", element: x.jsx(jP, {}) }),
            x.jsx(Hn, { path: "/placeBets", element: x.jsx(vb, {}) }),
            x.jsx(Hn, { path: "/startRound", element: x.jsx(k4, {}) }),
            x.jsx(Hn, { path: "/finalResults", element: x.jsx(C4, {}) }),
          ],
        }),
      ],
    })
  );
}
const b4 = u2({
  reducer: {
    dealerObj: ib,
    playersArr: rk,
    deck: H2,
    gameData: L2,
    inactivePlayers: ak,
    [Ki.reducerPath]: Ki.reducer,
  },
  middleware: (e) => e().concat(Ki.middleware),
  devTools: !0,
});
function _4(e) {
  return typeof e == "function";
}
function j4(e) {
  const t = typeof e;
  return t === "function" || (t === "object" && !!e);
}
function O4() {
  return typeof window < "u" && window.document;
}
function A4() {
  if (O4()) {
    if (!j4(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) return;
    for (const e in window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
      if (e === "renderers") {
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__[e] = new Map();
        continue;
      }
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[e] = _4(
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__[e],
      )
        ? Function.prototype
        : null;
    }
  }
}
A4();
fu.createRoot(document.getElementById("root")).render(
  x.jsx(pn.StrictMode, {
    children: x.jsx(Zx, {
      children: x.jsx(Rw, { store: b4, children: x.jsx(P4, {}) }),
    }),
  }),
);
