let e, t, n;
function r(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
var i,
  a = globalThis,
  o = {},
  l = {},
  s = a.parcelRequireb57e;
null == s &&
  (((s = function (e) {
    if (e in o) return o[e].exports;
    if (e in l) {
      var t = l[e];
      delete l[e];
      var n = { id: e, exports: {} };
      return (o[e] = n), t.call(n.exports, n, n.exports), n.exports;
    }
    var r = Error("Cannot find module '" + e + "'");
    throw ((r.code = "MODULE_NOT_FOUND"), r);
  }).register = function (e, t) {
    l[e] = t;
  }),
  (a.parcelRequireb57e = s));
var u = s.register;
u("6mwK0", function (e, t) {
  r(
    e.exports,
    "Fragment",
    () => n,
    (e) => (n = e)
  ),
    r(
      e.exports,
      "jsx",
      () => i,
      (e) => (i = e)
    ),
    r(
      e.exports,
      "jsxs",
      () => a,
      (e) => (a = e)
    );
  var n,
    i,
    a,
    o = Symbol.for("react.transitional.element");
  function l(e, t, n) {
    var r = null;
    if (
      (void 0 !== n && (r = "" + n),
      void 0 !== t.key && (r = "" + t.key),
      "key" in t)
    )
      for (var i in ((n = {}), t)) "key" !== i && (n[i] = t[i]);
    else n = t;
    return {
      $$typeof: o,
      type: e,
      key: r,
      ref: void 0 !== (t = n.ref) ? t : null,
      props: n,
    };
  }
  (n = Symbol.for("react.fragment")), (i = l), (a = l);
}),
  u("kgQjf", function (e, t) {
    r(
      e.exports,
      "Activity",
      () => n,
      (e) => (n = e)
    ),
      r(
        e.exports,
        "Children",
        () => i,
        (e) => (i = e)
      ),
      r(
        e.exports,
        "Component",
        () => a,
        (e) => (a = e)
      ),
      r(
        e.exports,
        "Fragment",
        () => o,
        (e) => (o = e)
      ),
      r(
        e.exports,
        "Profiler",
        () => l,
        (e) => (l = e)
      ),
      r(
        e.exports,
        "PureComponent",
        () => s,
        (e) => (s = e)
      ),
      r(
        e.exports,
        "StrictMode",
        () => u,
        (e) => (u = e)
      ),
      r(
        e.exports,
        "Suspense",
        () => c,
        (e) => (c = e)
      ),
      r(
        e.exports,
        "__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE",
        () => d,
        (e) => (d = e)
      ),
      r(
        e.exports,
        "__COMPILER_RUNTIME",
        () => f,
        (e) => (f = e)
      ),
      r(
        e.exports,
        "cache",
        () => p,
        (e) => (p = e)
      ),
      r(
        e.exports,
        "cacheSignal",
        () => h,
        (e) => (h = e)
      ),
      r(
        e.exports,
        "cloneElement",
        () => m,
        (e) => (m = e)
      ),
      r(
        e.exports,
        "createContext",
        () => g,
        (e) => (g = e)
      ),
      r(
        e.exports,
        "createElement",
        () => y,
        (e) => (y = e)
      ),
      r(
        e.exports,
        "createRef",
        () => v,
        (e) => (v = e)
      ),
      r(
        e.exports,
        "forwardRef",
        () => b,
        (e) => (b = e)
      ),
      r(
        e.exports,
        "isValidElement",
        () => x,
        (e) => (x = e)
      ),
      r(
        e.exports,
        "lazy",
        () => w,
        (e) => (w = e)
      ),
      r(
        e.exports,
        "memo",
        () => k,
        (e) => (k = e)
      ),
      r(
        e.exports,
        "startTransition",
        () => S,
        (e) => (S = e)
      ),
      r(
        e.exports,
        "unstable_useCacheRefresh",
        () => E,
        (e) => (E = e)
      ),
      r(
        e.exports,
        "use",
        () => C,
        (e) => (C = e)
      ),
      r(
        e.exports,
        "useActionState",
        () => P,
        (e) => (P = e)
      ),
      r(
        e.exports,
        "useCallback",
        () => T,
        (e) => (T = e)
      ),
      r(
        e.exports,
        "useContext",
        () => N,
        (e) => (N = e)
      ),
      r(
        e.exports,
        "useDebugValue",
        () => j,
        (e) => (j = e)
      ),
      r(
        e.exports,
        "useDeferredValue",
        () => A,
        (e) => (A = e)
      ),
      r(
        e.exports,
        "useEffect",
        () => M,
        (e) => (M = e)
      ),
      r(
        e.exports,
        "useEffectEvent",
        () => R,
        (e) => (R = e)
      ),
      r(
        e.exports,
        "useId",
        () => L,
        (e) => (L = e)
      ),
      r(
        e.exports,
        "useImperativeHandle",
        () => z,
        (e) => (z = e)
      ),
      r(
        e.exports,
        "useInsertionEffect",
        () => D,
        (e) => (D = e)
      ),
      r(
        e.exports,
        "useLayoutEffect",
        () => _,
        (e) => (_ = e)
      ),
      r(
        e.exports,
        "useMemo",
        () => O,
        (e) => (O = e)
      ),
      r(
        e.exports,
        "useOptimistic",
        () => V,
        (e) => (V = e)
      ),
      r(
        e.exports,
        "useReducer",
        () => I,
        (e) => (I = e)
      ),
      r(
        e.exports,
        "useRef",
        () => F,
        (e) => (F = e)
      ),
      r(
        e.exports,
        "useState",
        () => B,
        (e) => (B = e)
      ),
      r(
        e.exports,
        "useSyncExternalStore",
        () => $,
        (e) => ($ = e)
      ),
      r(
        e.exports,
        "useTransition",
        () => U,
        (e) => (U = e)
      ),
      r(
        e.exports,
        "version",
        () => W,
        (e) => (W = e)
      );
    var n,
      i,
      a,
      o,
      l,
      s,
      u,
      c,
      d,
      f,
      p,
      h,
      m,
      g,
      y,
      v,
      b,
      x,
      w,
      k,
      S,
      E,
      C,
      P,
      T,
      N,
      j,
      A,
      M,
      R,
      L,
      z,
      D,
      _,
      O,
      V,
      I,
      F,
      B,
      $,
      U,
      W,
      H = Symbol.for("react.transitional.element"),
      Y = Symbol.for("react.portal"),
      Q = Symbol.for("react.fragment"),
      q = Symbol.for("react.strict_mode"),
      G = Symbol.for("react.profiler"),
      X = Symbol.for("react.consumer"),
      K = Symbol.for("react.context"),
      Z = Symbol.for("react.forward_ref"),
      J = Symbol.for("react.suspense"),
      ee = Symbol.for("react.memo"),
      et = Symbol.for("react.lazy"),
      en = Symbol.for("react.activity"),
      er = Symbol.iterator,
      ei = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      ea = Object.assign,
      eo = {};
    function el(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = eo),
        (this.updater = n || ei);
    }
    function es() {}
    function eu(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = eo),
        (this.updater = n || ei);
    }
    (el.prototype.isReactComponent = {}),
      (el.prototype.setState = function (e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, e, t, "setState");
      }),
      (el.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (es.prototype = el.prototype);
    var ec = (eu.prototype = new es());
    (ec.constructor = eu), ea(ec, el.prototype), (ec.isPureReactComponent = !0);
    var ed = Array.isArray;
    function ef() {}
    var ep = { H: null, A: null, T: null, S: null },
      eh = Object.prototype.hasOwnProperty;
    function em(e, t, n) {
      var r = n.ref;
      return {
        $$typeof: H,
        type: e,
        key: t,
        ref: void 0 !== r ? r : null,
        props: n,
      };
    }
    function eg(e) {
      return "object" == typeof e && null !== e && e.$$typeof === H;
    }
    var ey = /\/+/g;
    function ev(e, t) {
      var n, r;
      return "object" == typeof e && null !== e && null != e.key
        ? ((n = "" + e.key),
          (r = { "=": "=0", ":": "=2" }),
          "$" +
            n.replace(/[=:]/g, function (e) {
              return r[e];
            }))
        : t.toString(36);
    }
    function eb(e, t, n) {
      if (null == e) return e;
      var r = [],
        i = 0;
      return (
        !(function e(t, n, r, i, a) {
          var o,
            l,
            s,
            u = typeof t;
          ("undefined" === u || "boolean" === u) && (t = null);
          var c = !1;
          if (null === t) c = !0;
          else
            switch (u) {
              case "bigint":
              case "string":
              case "number":
                c = !0;
                break;
              case "object":
                switch (t.$$typeof) {
                  case H:
                  case Y:
                    c = !0;
                    break;
                  case et:
                    return e((c = t._init)(t._payload), n, r, i, a);
                }
            }
          if (c)
            return (
              (a = a(t)),
              (c = "" === i ? "." + ev(t, 0) : i),
              ed(a)
                ? ((r = ""),
                  null != c && (r = c.replace(ey, "$&/") + "/"),
                  e(a, n, r, "", function (e) {
                    return e;
                  }))
                : null != a &&
                  (eg(a) &&
                    ((o = a),
                    (l =
                      r +
                      (null == a.key || (t && t.key === a.key)
                        ? ""
                        : ("" + a.key).replace(ey, "$&/") + "/") +
                      c),
                    (a = em(o.type, l, o.props))),
                  n.push(a)),
              1
            );
          c = 0;
          var d = "" === i ? "." : i + ":";
          if (ed(t))
            for (var f = 0; f < t.length; f++)
              (u = d + ev((i = t[f]), f)), (c += e(i, n, r, u, a));
          else if (
            "function" ==
            typeof (f =
              null === (s = t) || "object" != typeof s
                ? null
                : "function" == typeof (s = (er && s[er]) || s["@@iterator"])
                ? s
                : null)
          )
            for (t = f.call(t), f = 0; !(i = t.next()).done; )
              (u = d + ev((i = i.value), f++)), (c += e(i, n, r, u, a));
          else if ("object" === u) {
            if ("function" == typeof t.then)
              return e(
                (function (e) {
                  switch (e.status) {
                    case "fulfilled":
                      return e.value;
                    case "rejected":
                      throw e.reason;
                    default:
                      switch (
                        ("string" == typeof e.status
                          ? e.then(ef, ef)
                          : ((e.status = "pending"),
                            e.then(
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "fulfilled"), (e.value = t));
                              },
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "rejected"), (e.reason = t));
                              }
                            )),
                        e.status)
                      ) {
                        case "fulfilled":
                          return e.value;
                        case "rejected":
                          throw e.reason;
                      }
                  }
                  throw e;
                })(t),
                n,
                r,
                i,
                a
              );
            throw Error(
              "Objects are not valid as a React child (found: " +
                ("[object Object]" === (n = String(t))
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : n) +
                "). If you meant to render a collection of children, use an array instead."
            );
          }
          return c;
        })(e, r, "", "", function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function ex(e) {
      if (-1 === e._status) {
        var t = e._result;
        (t = t()).then(
          function (t) {
            (0 === e._status || -1 === e._status) &&
              ((e._status = 1), (e._result = t));
          },
          function (t) {
            (0 === e._status || -1 === e._status) &&
              ((e._status = 2), (e._result = t));
          }
        ),
          -1 === e._status && ((e._status = 0), (e._result = t));
      }
      if (1 === e._status) return e._result.default;
      throw e._result;
    }
    var ew =
      "function" == typeof reportError
        ? reportError
        : function (e) {
            if (
              "object" == typeof window &&
              "function" == typeof window.ErrorEvent
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  "object" == typeof e &&
                  null !== e &&
                  "string" == typeof e.message
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            }
            console.error(e);
          };
    (n = en),
      (i = {
        map: eb,
        forEach: function (e, t, n) {
          eb(
            e,
            function () {
              t.apply(this, arguments);
            },
            n
          );
        },
        count: function (e) {
          var t = 0;
          return (
            eb(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            eb(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!eg(e))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return e;
        },
      }),
      (a = el),
      (o = Q),
      (l = G),
      (s = eu),
      (u = q),
      (c = J),
      (d = ep),
      (f = {
        __proto__: null,
        c: function (e) {
          return ep.H.useMemoCache(e);
        },
      }),
      (p = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (h = function () {
        return null;
      }),
      (m = function (e, t, n) {
        if (null == e)
          throw Error(
            "The argument must be a React element, but you passed " + e + "."
          );
        var r = ea({}, e.props),
          i = e.key;
        if (null != t)
          for (a in (void 0 !== t.key && (i = "" + t.key), t))
            eh.call(t, a) &&
              "key" !== a &&
              "__self" !== a &&
              "__source" !== a &&
              ("ref" !== a || void 0 !== t.ref) &&
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (1 === a) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), l = 0; l < a; l++) o[l] = arguments[l + 2];
          r.children = o;
        }
        return em(e.type, i, r);
      }),
      (g = function (e) {
        return (
          ((e = {
            $$typeof: K,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }).Provider = e),
          (e.Consumer = { $$typeof: X, _context: e }),
          e
        );
      }),
      (y = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (null != t)
          for (r in (void 0 !== t.key && (a = "" + t.key), t))
            eh.call(t, r) &&
              "key" !== r &&
              "__self" !== r &&
              "__source" !== r &&
              (i[r] = t[r]);
        var o = arguments.length - 2;
        if (1 === o) i.children = n;
        else if (1 < o) {
          for (var l = Array(o), s = 0; s < o; s++) l[s] = arguments[s + 2];
          i.children = l;
        }
        if (e && e.defaultProps)
          for (r in (o = e.defaultProps)) void 0 === i[r] && (i[r] = o[r]);
        return em(e, a, i);
      }),
      (v = function () {
        return { current: null };
      }),
      (b = function (e) {
        return { $$typeof: Z, render: e };
      }),
      (x = eg),
      (w = function (e) {
        return {
          $$typeof: et,
          _payload: { _status: -1, _result: e },
          _init: ex,
        };
      }),
      (k = function (e, t) {
        return { $$typeof: ee, type: e, compare: void 0 === t ? null : t };
      }),
      (S = function (e) {
        var t = ep.T,
          n = {};
        ep.T = n;
        try {
          var r = e(),
            i = ep.S;
          null !== i && i(n, r),
            "object" == typeof r &&
              null !== r &&
              "function" == typeof r.then &&
              r.then(ef, ew);
        } catch (e) {
          ew(e);
        } finally {
          null !== t && null !== n.types && (t.types = n.types), (ep.T = t);
        }
      }),
      (E = function () {
        return ep.H.useCacheRefresh();
      }),
      (C = function (e) {
        return ep.H.use(e);
      }),
      (P = function (e, t, n) {
        return ep.H.useActionState(e, t, n);
      }),
      (T = function (e, t) {
        return ep.H.useCallback(e, t);
      }),
      (N = function (e) {
        return ep.H.useContext(e);
      }),
      (j = function () {}),
      (A = function (e, t) {
        return ep.H.useDeferredValue(e, t);
      }),
      (M = function (e, t) {
        return ep.H.useEffect(e, t);
      }),
      (R = function (e) {
        return ep.H.useEffectEvent(e);
      }),
      (L = function () {
        return ep.H.useId();
      }),
      (z = function (e, t, n) {
        return ep.H.useImperativeHandle(e, t, n);
      }),
      (D = function (e, t) {
        return ep.H.useInsertionEffect(e, t);
      }),
      (_ = function (e, t) {
        return ep.H.useLayoutEffect(e, t);
      }),
      (O = function (e, t) {
        return ep.H.useMemo(e, t);
      }),
      (V = function (e, t) {
        return ep.H.useOptimistic(e, t);
      }),
      (I = function (e, t, n) {
        return ep.H.useReducer(e, t, n);
      }),
      (F = function (e) {
        return ep.H.useRef(e);
      }),
      (B = function (e) {
        return ep.H.useState(e);
      }),
      ($ = function (e, t, n) {
        return ep.H.useSyncExternalStore(e, t, n);
      }),
      (U = function () {
        return ep.H.useTransition();
      }),
      (W = "19.2.7");
  }),
  u("7b93F", function (e, t) {
    r(
      e.exports,
      "createRoot",
      () => tV,
      (e) => (tV = e)
    ),
      r(
        e.exports,
        "hydrateRoot",
        () => tI,
        (e) => (tI = e)
      ),
      r(
        e.exports,
        "version",
        () => tF,
        (e) => (tF = e)
      );
    var n,
      i = s("aALGe"),
      a = s("2YQ6R"),
      o = s("8yZRv");
    function l(e) {
      var t = "https://react.dev/errors/" + e;
      if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += "&args[]=" + encodeURIComponent(arguments[n]);
      }
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function u(e) {
      return !(
        !e ||
        (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
      );
    }
    function c(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do 0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
        while (e);
      }
      return 3 === t.tag ? n : null;
    }
    function d(e) {
      if (13 === e.tag) {
        var t = e.memoizedState;
        if (
          (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
          null !== t)
        )
          return t.dehydrated;
      }
      return null;
    }
    function f(e) {
      if (31 === e.tag) {
        var t = e.memoizedState;
        if (
          (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
          null !== t)
        )
          return t.dehydrated;
      }
      return null;
    }
    function p(e) {
      if (c(e) !== e) throw Error(l(188));
    }
    var h = Object.assign,
      m = Symbol.for("react.element"),
      g = Symbol.for("react.transitional.element"),
      y = Symbol.for("react.portal"),
      v = Symbol.for("react.fragment"),
      b = Symbol.for("react.strict_mode"),
      x = Symbol.for("react.profiler"),
      w = Symbol.for("react.consumer"),
      k = Symbol.for("react.context"),
      S = Symbol.for("react.forward_ref"),
      E = Symbol.for("react.suspense"),
      C = Symbol.for("react.suspense_list"),
      P = Symbol.for("react.memo"),
      T = Symbol.for("react.lazy");
    Symbol.for("react.scope");
    var N = Symbol.for("react.activity");
    Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
    var j = Symbol.for("react.memo_cache_sentinel");
    Symbol.for("react.view_transition");
    var A = Symbol.iterator;
    function M(e) {
      return null === e || "object" != typeof e
        ? null
        : "function" == typeof (e = (A && e[A]) || e["@@iterator"])
        ? e
        : null;
    }
    var R = Symbol.for("react.client.reference"),
      L = Array.isArray,
      z = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      D = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      _ = { pending: !1, data: null, method: null, action: null },
      O = [],
      V = -1;
    function I(e) {
      return { current: e };
    }
    function F(e) {
      0 > V || ((e.current = O[V]), (O[V] = null), V--);
    }
    function B(e, t) {
      (O[++V] = e.current), (e.current = t);
    }
    var $ = I(null),
      U = I(null),
      W = I(null),
      H = I(null);
    function Y(e, t) {
      switch ((B(W, t), B(U, e), B($, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? uk(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI))) e = uS((t = uk(t)), e);
          else
            switch (e) {
              case "svg":
                e = 1;
                break;
              case "math":
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      F($), B($, e);
    }
    function Q() {
      F($), F(U), F(W);
    }
    function q(e) {
      null !== e.memoizedState && B(H, e);
      var t = $.current,
        n = uS(t, e.type);
      t !== n && (B(U, e), B($, n));
    }
    function G(e) {
      U.current === e && (F($), F(U)),
        H.current === e && (F(H), (ca._currentValue = _));
    }
    function X(e) {
      if (void 0 === tB)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          (tB = (t && t[1]) || ""),
            (t$ =
              -1 < e.stack.indexOf("\n    at")
                ? " (<anonymous>)"
                : -1 < e.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
        }
      return "\n" + tB + e + t$;
    }
    var K = !1;
    function Z(e, t) {
      if (!e || K) return "";
      K = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  "object" == typeof Reflect && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) &&
                  "function" == typeof n.catch &&
                  n.catch(function () {});
              }
            } catch (e) {
              if (e && r && "string" == typeof e.stack)
                return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName =
          "DetermineComponentFrameRoot";
        var i = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          "name"
        );
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: "DetermineComponentFrameRoot",
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          l = a[1];
        if (o && l) {
          var s = o.split("\n"),
            u = l.split("\n");
          for (
            i = r = 0;
            r < s.length && !s[r].includes("DetermineComponentFrameRoot");

          )
            r++;
          for (
            ;
            i < u.length && !u[i].includes("DetermineComponentFrameRoot");

          )
            i++;
          if (r === s.length || i === u.length)
            for (
              r = s.length - 1, i = u.length - 1;
              1 <= r && 0 <= i && s[r] !== u[i];

            )
              i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (s[r] !== u[i]) {
              if (1 !== r || 1 !== i)
                do
                  if ((r--, i--, 0 > i || s[r] !== u[i])) {
                    var c = "\n" + s[r].replace(" at new ", " at ");
                    return (
                      e.displayName &&
                        c.includes("<anonymous>") &&
                        (c = c.replace("<anonymous>", e.displayName)),
                      c
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        (K = !1), (Error.prepareStackTrace = n);
      }
      return (n = e ? e.displayName || e.name : "") ? X(n) : "";
    }
    function J(e) {
      try {
        var t = "",
          n = null;
        do
          (t += (function (e, t) {
            switch (e.tag) {
              case 26:
              case 27:
              case 5:
                return X(e.type);
              case 16:
                return X("Lazy");
              case 13:
                return e.child !== t && null !== t
                  ? X("Suspense Fallback")
                  : X("Suspense");
              case 19:
                return X("SuspenseList");
              case 0:
              case 15:
                return Z(e.type, !1);
              case 11:
                return Z(e.type.render, !1);
              case 1:
                return Z(e.type, !0);
              case 31:
                return X("Activity");
              default:
                return "";
            }
          })(e, n)),
            (n = e),
            (e = e.return);
        while (e);
        return t;
      } catch (e) {
        return "\nError generating stack: " + e.message + "\n" + e.stack;
      }
    }
    var ee = Object.prototype.hasOwnProperty,
      et = i.unstable_scheduleCallback,
      en = i.unstable_cancelCallback,
      er = i.unstable_shouldYield,
      ei = i.unstable_requestPaint,
      ea = i.unstable_now,
      eo = i.unstable_getCurrentPriorityLevel,
      el = i.unstable_ImmediatePriority,
      es = i.unstable_UserBlockingPriority,
      eu = i.unstable_NormalPriority,
      ec = i.unstable_LowPriority,
      ed = i.unstable_IdlePriority,
      ef = i.log,
      ep = i.unstable_setDisableYieldValue,
      eh = null,
      em = null;
    function eg(e) {
      if (
        ("function" == typeof ef && ep(e),
        em && "function" == typeof em.setStrictMode)
      )
        try {
          em.setStrictMode(eh, e);
        } catch (e) {}
    }
    var ey = Math.clz32
        ? Math.clz32
        : function (e) {
            return 0 == (e >>>= 0) ? 32 : (31 - ((ev(e) / eb) | 0)) | 0;
          },
      ev = Math.log,
      eb = Math.LN2,
      ex = 256,
      ew = 262144,
      ek = 4194304;
    function eS(e) {
      var t = 42 & e;
      if (0 !== t) return t;
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
          return 64;
        case 128:
          return 128;
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
          return 261888 & e;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return 3932160 & e;
        case 4194304:
        case 8388608:
        case 0x1000000:
        case 0x2000000:
          return 0x3c00000 & e;
        case 0x4000000:
          return 0x4000000;
        case 0x8000000:
          return 0x8000000;
        case 0x10000000:
          return 0x10000000;
        case 0x20000000:
          return 0x20000000;
        case 0x40000000:
          return 0;
        default:
          return e;
      }
    }
    function eE(e, t, n) {
      var r = e.pendingLanes;
      if (0 === r) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var l = 0x7ffffff & r;
      return (
        0 !== l
          ? 0 != (r = l & ~a)
            ? (i = eS(r))
            : 0 != (o &= l)
            ? (i = eS(o))
            : n || (0 != (n = l & ~e) && (i = eS(n)))
          : 0 != (l = r & ~a)
          ? (i = eS(l))
          : 0 !== o
          ? (i = eS(o))
          : n || (0 != (n = r & ~e) && (i = eS(n))),
        0 === i
          ? 0
          : 0 !== t &&
            t !== i &&
            0 == (t & a) &&
            ((a = i & -i) >= (n = t & -t) || (32 === a && 0 != (4194048 & n)))
          ? t
          : i
      );
    }
    function eC(e, t) {
      return 0 == (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t);
    }
    function eP() {
      var e = ek;
      return 0 == (0x3c00000 & (ek <<= 1)) && (ek = 4194304), e;
    }
    function eT(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function eN(e, t) {
      (e.pendingLanes |= t),
        0x10000000 !== t &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
    }
    function ej(e, t, n) {
      (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
      var r = 31 - ey(t);
      (e.entangledLanes |= t),
        (e.entanglements[r] = 0x40000000 | e.entanglements[r] | (261930 & n));
    }
    function eA(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - ey(n),
          i = 1 << r;
        (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
      }
    }
    function eM(e, t) {
      var n = t & -t;
      return 0 != ((n = 0 != (42 & n) ? 1 : eR(n)) & (e.suspendedLanes | t))
        ? 0
        : n;
    }
    function eR(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
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
        case 0x1000000:
        case 0x2000000:
          e = 128;
          break;
        case 0x10000000:
          e = 0x8000000;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function eL(e) {
      return 2 < (e &= -e)
        ? 8 < e
          ? 0 != (0x7ffffff & e)
            ? 32
            : 0x10000000
          : 8
        : 2;
    }
    function ez() {
      var e = D.p;
      return 0 !== e ? e : void 0 === (e = window.event) ? 32 : cx(e.type);
    }
    function eD(e, t) {
      var n = D.p;
      try {
        return (D.p = e), t();
      } finally {
        D.p = n;
      }
    }
    var e_ = Math.random().toString(36).slice(2),
      eO = "__reactFiber$" + e_,
      eV = "__reactProps$" + e_,
      eI = "__reactContainer$" + e_,
      eF = "__reactEvents$" + e_,
      eB = "__reactListeners$" + e_,
      e$ = "__reactHandles$" + e_,
      eU = "__reactResources$" + e_,
      eW = "__reactMarker$" + e_;
    function eH(e) {
      delete e[eO], delete e[eV], delete e[eF], delete e[eB], delete e[e$];
    }
    function eY(e) {
      var t = e[eO];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[eI] || n[eO])) {
          if (
            ((n = t.alternate),
            null !== t.child || (null !== n && null !== n.child))
          )
            for (e = uB(e); null !== e; ) {
              if ((n = e[eO])) return n;
              e = uB(e);
            }
          return t;
        }
        n = (e = n).parentNode;
      }
      return null;
    }
    function eQ(e) {
      if ((e = e[eO] || e[eI])) {
        var t = e.tag;
        if (
          5 === t ||
          6 === t ||
          13 === t ||
          31 === t ||
          26 === t ||
          27 === t ||
          3 === t
        )
          return e;
      }
      return null;
    }
    function eq(e) {
      var t = e.tag;
      if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
      throw Error(l(33));
    }
    function eG(e) {
      var t = e[eU];
      return (
        t ||
          (t = e[eU] =
            { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      );
    }
    function eX(e) {
      e[eW] = !0;
    }
    var eK = new Set(),
      eZ = {};
    function eJ(e, t) {
      e0(e, t), e0(e + "Capture", t);
    }
    function e0(e, t) {
      for (eZ[e] = t, e = 0; e < t.length; e++) eK.add(t[e]);
    }
    var e1 = RegExp(
        "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
      ),
      e2 = {},
      e3 = {};
    function e4(e, t, n) {
      if (
        ee.call(e3, t) ||
        (!ee.call(e2, t) && (e1.test(t) ? (e3[t] = !0) : ((e2[t] = !0), !1)))
      )
        if (null === n) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var r = t.toLowerCase().slice(0, 5);
              if ("data-" !== r && "aria-" !== r)
                return void e.removeAttribute(t);
          }
          e.setAttribute(t, "" + n);
        }
    }
    function e5(e, t, n) {
      if (null === n) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, "" + n);
      }
    }
    function e6(e, t, n, r) {
      if (null === r) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, "" + r);
      }
    }
    function e8(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
        case "object":
          return e;
        default:
          return "";
      }
    }
    function e9(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        "input" === e.toLowerCase() &&
        ("checkbox" === t || "radio" === t)
      );
    }
    function e7(e) {
      if (!e._valueTracker) {
        var t = e9(e) ? "checked" : "value";
        e._valueTracker = (function (e, t, n) {
          var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
          if (
            !e.hasOwnProperty(t) &&
            void 0 !== r &&
            "function" == typeof r.get &&
            "function" == typeof r.set
          ) {
            var i = r.get,
              a = r.set;
            return (
              Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                  return i.call(this);
                },
                set: function (e) {
                  (n = "" + e), a.call(this, e);
                },
              }),
              Object.defineProperty(e, t, { enumerable: r.enumerable }),
              {
                getValue: function () {
                  return n;
                },
                setValue: function (e) {
                  n = "" + e;
                },
                stopTracking: function () {
                  (e._valueTracker = null), delete e[t];
                },
              }
            );
          }
        })(e, t, "" + e[t]);
      }
    }
    function te(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = "";
      return (
        e && (r = e9(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r) !== n && (t.setValue(e), !0)
      );
    }
    function tt(e) {
      if (void 0 === (e = e || ("u" > typeof document ? document : void 0)))
        return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }
    var tn = /[\n"\\]/g;
    function tr(e) {
      return e.replace(tn, function (e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      });
    }
    function ti(e, t, n, r, i, a, o, l) {
      (e.name = ""),
        null != o &&
        "function" != typeof o &&
        "symbol" != typeof o &&
        "boolean" != typeof o
          ? (e.type = o)
          : e.removeAttribute("type"),
        null != t
          ? "number" === o
            ? ((0 === t && "" === e.value) || e.value != t) &&
              (e.value = "" + e8(t))
            : e.value !== "" + e8(t) && (e.value = "" + e8(t))
          : ("submit" !== o && "reset" !== o) || e.removeAttribute("value"),
        null != t
          ? to(e, o, e8(t))
          : null != n
          ? to(e, o, e8(n))
          : null != r && e.removeAttribute("value"),
        null == i && null != a && (e.defaultChecked = !!a),
        null != i &&
          (e.checked = i && "function" != typeof i && "symbol" != typeof i),
        null != l &&
        "function" != typeof l &&
        "symbol" != typeof l &&
        "boolean" != typeof l
          ? (e.name = "" + e8(l))
          : e.removeAttribute("name");
    }
    function ta(e, t, n, r, i, a, o, l) {
      if (
        (null != a &&
          "function" != typeof a &&
          "symbol" != typeof a &&
          "boolean" != typeof a &&
          (e.type = a),
        null != t || null != n)
      ) {
        if (("submit" === a || "reset" === a) && null == t) return void e7(e);
        (n = null != n ? "" + e8(n) : ""),
          (t = null != t ? "" + e8(t) : n),
          l || t === e.value || (e.value = t),
          (e.defaultValue = t);
      }
      (r =
        "function" != typeof (r = null != r ? r : i) &&
        "symbol" != typeof r &&
        !!r),
        (e.checked = l ? e.checked : !!r),
        (e.defaultChecked = !!r),
        null != o &&
          "function" != typeof o &&
          "symbol" != typeof o &&
          "boolean" != typeof o &&
          (e.name = o),
        e7(e);
    }
    function to(e, t, n) {
      ("number" === t && tt(e.ownerDocument) === e) ||
        e.defaultValue === "" + n ||
        (e.defaultValue = "" + n);
    }
    function tl(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          (i = t.hasOwnProperty("$" + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0);
      } else {
        for (n = "" + e8(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            (e[i].selected = !0), r && (e[i].defaultSelected = !0);
            return;
          }
          null !== t || e[i].disabled || (t = e[i]);
        }
        null !== t && (t.selected = !0);
      }
    }
    function ts(e, t, n) {
      if (
        null != t &&
        ((t = "" + e8(t)) !== e.value && (e.value = t), null == n)
      ) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = null != n ? "" + e8(n) : "";
    }
    function tu(e, t, n, r) {
      if (null == t) {
        if (null != r) {
          if (null != n) throw Error(l(92));
          if (L(r)) {
            if (1 < r.length) throw Error(l(93));
            r = r[0];
          }
          n = r;
        }
        null == n && (n = ""), (t = n);
      }
      (e.defaultValue = n = e8(t)),
        (r = e.textContent) === n && "" !== r && null !== r && (e.value = r),
        e7(e);
    }
    function tc(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var td = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    );
    function tf(e, t, n) {
      var r = 0 === t.indexOf("--");
      null == n || "boolean" == typeof n || "" === n
        ? r
          ? e.setProperty(t, "")
          : "float" === t
          ? (e.cssFloat = "")
          : (e[t] = "")
        : r
        ? e.setProperty(t, n)
        : "number" != typeof n || 0 === n || td.has(t)
        ? "float" === t
          ? (e.cssFloat = n)
          : (e[t] = ("" + n).trim())
        : (e[t] = n + "px");
    }
    function tp(e, t, n) {
      if (null != t && "object" != typeof t) throw Error(l(62));
      if (((e = e.style), null != n)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (null != t && t.hasOwnProperty(r)) ||
            (0 === r.indexOf("--")
              ? e.setProperty(r, "")
              : "float" === r
              ? (e.cssFloat = "")
              : (e[r] = ""));
        for (var i in t)
          (r = t[i]), t.hasOwnProperty(i) && n[i] !== r && tf(e, i, r);
      } else for (var a in t) t.hasOwnProperty(a) && tf(e, a, t[a]);
    }
    function th(e) {
      if (-1 === e.indexOf("-")) return !1;
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
    var tm = new Map([
        ["acceptCharset", "accept-charset"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
        ["crossOrigin", "crossorigin"],
        ["accentHeight", "accent-height"],
        ["alignmentBaseline", "alignment-baseline"],
        ["arabicForm", "arabic-form"],
        ["baselineShift", "baseline-shift"],
        ["capHeight", "cap-height"],
        ["clipPath", "clip-path"],
        ["clipRule", "clip-rule"],
        ["colorInterpolation", "color-interpolation"],
        ["colorInterpolationFilters", "color-interpolation-filters"],
        ["colorProfile", "color-profile"],
        ["colorRendering", "color-rendering"],
        ["dominantBaseline", "dominant-baseline"],
        ["enableBackground", "enable-background"],
        ["fillOpacity", "fill-opacity"],
        ["fillRule", "fill-rule"],
        ["floodColor", "flood-color"],
        ["floodOpacity", "flood-opacity"],
        ["fontFamily", "font-family"],
        ["fontSize", "font-size"],
        ["fontSizeAdjust", "font-size-adjust"],
        ["fontStretch", "font-stretch"],
        ["fontStyle", "font-style"],
        ["fontVariant", "font-variant"],
        ["fontWeight", "font-weight"],
        ["glyphName", "glyph-name"],
        ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
        ["glyphOrientationVertical", "glyph-orientation-vertical"],
        ["horizAdvX", "horiz-adv-x"],
        ["horizOriginX", "horiz-origin-x"],
        ["imageRendering", "image-rendering"],
        ["letterSpacing", "letter-spacing"],
        ["lightingColor", "lighting-color"],
        ["markerEnd", "marker-end"],
        ["markerMid", "marker-mid"],
        ["markerStart", "marker-start"],
        ["overlinePosition", "overline-position"],
        ["overlineThickness", "overline-thickness"],
        ["paintOrder", "paint-order"],
        ["panose-1", "panose-1"],
        ["pointerEvents", "pointer-events"],
        ["renderingIntent", "rendering-intent"],
        ["shapeRendering", "shape-rendering"],
        ["stopColor", "stop-color"],
        ["stopOpacity", "stop-opacity"],
        ["strikethroughPosition", "strikethrough-position"],
        ["strikethroughThickness", "strikethrough-thickness"],
        ["strokeDasharray", "stroke-dasharray"],
        ["strokeDashoffset", "stroke-dashoffset"],
        ["strokeLinecap", "stroke-linecap"],
        ["strokeLinejoin", "stroke-linejoin"],
        ["strokeMiterlimit", "stroke-miterlimit"],
        ["strokeOpacity", "stroke-opacity"],
        ["strokeWidth", "stroke-width"],
        ["textAnchor", "text-anchor"],
        ["textDecoration", "text-decoration"],
        ["textRendering", "text-rendering"],
        ["transformOrigin", "transform-origin"],
        ["underlinePosition", "underline-position"],
        ["underlineThickness", "underline-thickness"],
        ["unicodeBidi", "unicode-bidi"],
        ["unicodeRange", "unicode-range"],
        ["unitsPerEm", "units-per-em"],
        ["vAlphabetic", "v-alphabetic"],
        ["vHanging", "v-hanging"],
        ["vIdeographic", "v-ideographic"],
        ["vMathematical", "v-mathematical"],
        ["vectorEffect", "vector-effect"],
        ["vertAdvY", "vert-adv-y"],
        ["vertOriginX", "vert-origin-x"],
        ["vertOriginY", "vert-origin-y"],
        ["wordSpacing", "word-spacing"],
        ["writingMode", "writing-mode"],
        ["xmlnsXlink", "xmlns:xlink"],
        ["xHeight", "x-height"],
      ]),
      tg =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function ty(e) {
      return tg.test("" + e)
        ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
        : e;
    }
    function tv() {}
    var tb = null;
    function tx(e) {
      return (
        (e = e.target || e.srcElement || window).correspondingUseElement &&
          (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
      );
    }
    var tw = null,
      tk = null;
    function tS(e) {
      var t = eQ(e);
      if (t && (e = t.stateNode)) {
        var n = e[eV] || null;
        switch (((e = t.stateNode), t.type)) {
          case "input":
            if (
              (ti(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name
              ),
              (t = n.name),
              "radio" === n.type && null != t)
            ) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  'input[name="' + tr("" + t) + '"][type="radio"]'
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var i = r[eV] || null;
                  if (!i) throw Error(l(90));
                  ti(
                    r,
                    i.value,
                    i.defaultValue,
                    i.defaultValue,
                    i.checked,
                    i.defaultChecked,
                    i.type,
                    i.name
                  );
                }
              }
              for (t = 0; t < n.length; t++)
                (r = n[t]).form === e.form && te(r);
            }
            break;
          case "textarea":
            ts(e, n.value, n.defaultValue);
            break;
          case "select":
            null != (t = n.value) && tl(e, !!n.multiple, t, !1);
        }
      }
    }
    var tE = !1;
    function tC(e, t, n) {
      if (tE) return e(t, n);
      tE = !0;
      try {
        return e(t);
      } finally {
        if (
          ((tE = !1),
          (null !== tw || null !== tk) &&
            (sg(), tw && ((t = tw), (e = tk), (tk = tw = null), tS(t), e)))
        )
          for (t = 0; t < e.length; t++) tS(e[t]);
      }
    }
    function tP(e, t) {
      var n = e.stateNode;
      if (null === n) return null;
      var r = n[eV] || null;
      if (null === r) return null;
      switch (((n = r[t]), t)) {
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
            (r =
              "button" !== (e = e.type) &&
              "input" !== e &&
              "select" !== e &&
              "textarea" !== e),
            (e = !r);
          break;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && "function" != typeof n) throw Error(l(231, t, typeof n));
      return n;
    }
    var tT =
        "u" > typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement,
      tN = !1;
    if (tT)
      try {
        var tj = {};
        Object.defineProperty(tj, "passive", {
          get: function () {
            tN = !0;
          },
        }),
          window.addEventListener("test", tj, tj),
          window.removeEventListener("test", tj, tj);
      } catch (e) {
        tN = !1;
      }
    var tA = null,
      tM = null,
      tR = null;
    function tL() {
      if (tR) return tR;
      var e,
        t,
        n = tM,
        r = n.length,
        i = "value" in tA ? tA.value : tA.textContent,
        a = i.length;
      for (e = 0; e < r && n[e] === i[e]; e++);
      var o = r - e;
      for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
      return (tR = i.slice(e, 1 < t ? 1 - t : void 0));
    }
    function tz(e) {
      var t = e.keyCode;
      return (
        "charCode" in e
          ? 0 === (e = e.charCode) && 13 === t && (e = 13)
          : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
      );
    }
    function tD() {
      return !0;
    }
    function t_() {
      return !1;
    }
    function tO(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            null != i.defaultPrevented
              ? i.defaultPrevented
              : !1 === i.returnValue
          )
            ? tD
            : t_),
          (this.isPropagationStopped = t_),
          this
        );
      }
      return (
        h(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : "unknown" != typeof e.returnValue && (e.returnValue = !1),
              (this.isDefaultPrevented = tD));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
              (this.isPropagationStopped = tD));
          },
          persist: function () {},
          isPersistent: tD,
        }),
        t
      );
    }
    var tV,
      tI,
      tF,
      tB,
      t$,
      tU,
      tW,
      tH,
      tY = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      tQ = tO(tY),
      tq = h({}, tY, { view: 0, detail: 0 }),
      tG = tO(tq),
      tX = h({}, tq, {
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
        getModifierState: t8,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return void 0 === e.relatedTarget
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return "movementX" in e
            ? e.movementX
            : (e !== tH &&
                (tH && "mousemove" === e.type
                  ? ((tU = e.screenX - tH.screenX),
                    (tW = e.screenY - tH.screenY))
                  : (tW = tU = 0),
                (tH = e)),
              tU);
        },
        movementY: function (e) {
          return "movementY" in e ? e.movementY : tW;
        },
      }),
      tK = tO(tX),
      tZ = tO(h({}, tX, { dataTransfer: 0 })),
      tJ = tO(h({}, tq, { relatedTarget: 0 })),
      t0 = tO(
        h({}, tY, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
      ),
      t1 = tO(
        h({}, tY, {
          clipboardData: function (e) {
            return "clipboardData" in e
              ? e.clipboardData
              : window.clipboardData;
          },
        })
      ),
      t2 = tO(h({}, tY, { data: 0 })),
      t3 = {
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
      t4 = {
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
      t5 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function t6(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : !!(e = t5[e]) && !!t[e];
    }
    function t8() {
      return t6;
    }
    var t9 = tO(
        h({}, tq, {
          key: function (e) {
            if (e.key) {
              var t = t3[e.key] || e.key;
              if ("Unidentified" !== t) return t;
            }
            return "keypress" === e.type
              ? 13 === (e = tz(e))
                ? "Enter"
                : String.fromCharCode(e)
              : "keydown" === e.type || "keyup" === e.type
              ? t4[e.keyCode] || "Unidentified"
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
          getModifierState: t8,
          charCode: function (e) {
            return "keypress" === e.type ? tz(e) : 0;
          },
          keyCode: function (e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          },
          which: function (e) {
            return "keypress" === e.type
              ? tz(e)
              : "keydown" === e.type || "keyup" === e.type
              ? e.keyCode
              : 0;
          },
        })
      ),
      t7 = tO(
        h({}, tX, {
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
        })
      ),
      ne = tO(
        h({}, tq, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: t8,
        })
      ),
      nt = tO(h({}, tY, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      nn = tO(
        h({}, tX, {
          deltaX: function (e) {
            return "deltaX" in e
              ? e.deltaX
              : "wheelDeltaX" in e
              ? -e.wheelDeltaX
              : 0;
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
        })
      ),
      nr = tO(h({}, tY, { newState: 0, oldState: 0 })),
      ni = [9, 13, 27, 32],
      na = tT && "CompositionEvent" in window,
      no = null;
    tT && "documentMode" in document && (no = document.documentMode);
    var nl = tT && "TextEvent" in window && !no,
      ns = tT && (!na || (no && 8 < no && 11 >= no)),
      nu = !1;
    function nc(e, t) {
      switch (e) {
        case "keyup":
          return -1 !== ni.indexOf(t.keyCode);
        case "keydown":
          return 229 !== t.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function nd(e) {
      return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
    }
    var nf = !1,
      np = {
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
    function nh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return "input" === t ? !!np[e.type] : "textarea" === t;
    }
    function nm(e, t, n, r) {
      tw ? (tk ? tk.push(r) : (tk = [r])) : (tw = r),
        0 < (t = us(t, "onChange")).length &&
          ((n = new tQ("onChange", "change", null, n, r)),
          e.push({ event: n, listeners: t }));
    }
    var ng = null,
      ny = null;
    function nv(e) {
      ue(e, 0);
    }
    function nb(e) {
      if (te(eq(e))) return e;
    }
    function nx(e, t) {
      if ("change" === e) return t;
    }
    var nw = !1;
    if (tT) {
      if (tT) {
        var nk = "oninput" in document;
        if (!nk) {
          var nS = document.createElement("div");
          nS.setAttribute("oninput", "return;"),
            (nk = "function" == typeof nS.oninput);
        }
        n = nk;
      } else n = !1;
      nw = n && (!document.documentMode || 9 < document.documentMode);
    }
    function nE() {
      ng && (ng.detachEvent("onpropertychange", nC), (ny = ng = null));
    }
    function nC(e) {
      if ("value" === e.propertyName && nb(ny)) {
        var t = [];
        nm(t, ny, e, tx(e)), tC(nv, t);
      }
    }
    function nP(e, t, n) {
      "focusin" === e
        ? (nE(), (ng = t), (ny = n), ng.attachEvent("onpropertychange", nC))
        : "focusout" === e && nE();
    }
    function nT(e) {
      if ("selectionchange" === e || "keyup" === e || "keydown" === e)
        return nb(ny);
    }
    function nN(e, t) {
      if ("click" === e) return nb(t);
    }
    function nj(e, t) {
      if ("input" === e || "change" === e) return nb(t);
    }
    var nA =
      "function" == typeof Object.is
        ? Object.is
        : function (e, t) {
            return (
              (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
            );
          };
    function nM(e, t) {
      if (nA(e, t)) return !0;
      if (
        "object" != typeof e ||
        null === e ||
        "object" != typeof t ||
        null === t
      )
        return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!ee.call(t, i) || !nA(e[i], t[i])) return !1;
      }
      return !0;
    }
    function nR(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function nL(e, t) {
      var n,
        r = nR(e);
      for (e = 0; r; ) {
        if (3 === r.nodeType) {
          if (((n = e + r.textContent.length), e <= t && n >= t))
            return { node: r, offset: t - e };
          e = n;
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = nR(r);
      }
    }
    function nz(e) {
      e =
        null != e &&
        null != e.ownerDocument &&
        null != e.ownerDocument.defaultView
          ? e.ownerDocument.defaultView
          : window;
      for (var t = tt(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = "string" == typeof t.contentWindow.location.href;
        } catch (e) {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = tt(e.document);
      }
      return t;
    }
    function nD(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        (("input" === t &&
          ("text" === e.type ||
            "search" === e.type ||
            "tel" === e.type ||
            "url" === e.type ||
            "password" === e.type)) ||
          "textarea" === t ||
          "true" === e.contentEditable)
      );
    }
    var n_ = tT && "documentMode" in document && 11 >= document.documentMode,
      nO = null,
      nV = null,
      nI = null,
      nF = !1;
    function nB(e, t, n) {
      var r =
        n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
      nF ||
        null == nO ||
        nO !== tt(r) ||
        ((r =
          "selectionStart" in (r = nO) && nD(r)
            ? { start: r.selectionStart, end: r.selectionEnd }
            : {
                anchorNode: (r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
                ).getSelection()).anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset,
              }),
        (nI && nM(nI, r)) ||
          ((nI = r),
          0 < (r = us(nV, "onSelect")).length &&
            ((t = new tQ("onSelect", "select", null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = nO))));
    }
    function n$(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
      );
    }
    var nU = {
        animationend: n$("Animation", "AnimationEnd"),
        animationiteration: n$("Animation", "AnimationIteration"),
        animationstart: n$("Animation", "AnimationStart"),
        transitionrun: n$("Transition", "TransitionRun"),
        transitionstart: n$("Transition", "TransitionStart"),
        transitioncancel: n$("Transition", "TransitionCancel"),
        transitionend: n$("Transition", "TransitionEnd"),
      },
      nW = {},
      nH = {};
    function nY(e) {
      if (nW[e]) return nW[e];
      if (!nU[e]) return e;
      var t,
        n = nU[e];
      for (t in n) if (n.hasOwnProperty(t) && t in nH) return (nW[e] = n[t]);
      return e;
    }
    tT &&
      ((nH = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete nU.animationend.animation,
        delete nU.animationiteration.animation,
        delete nU.animationstart.animation),
      "TransitionEvent" in window || delete nU.transitionend.transition);
    var nQ = nY("animationend"),
      nq = nY("animationiteration"),
      nG = nY("animationstart"),
      nX = nY("transitionrun"),
      nK = nY("transitionstart"),
      nZ = nY("transitioncancel"),
      nJ = nY("transitionend"),
      n0 = new Map(),
      n1 =
        "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " "
        );
    function n2(e, t) {
      n0.set(e, t), eJ(t, [e]);
    }
    n1.push("scrollEnd");
    var n3 =
        "function" == typeof reportError
          ? reportError
          : function (e) {
              if (
                "object" == typeof window &&
                "function" == typeof window.ErrorEvent
              ) {
                var t = new window.ErrorEvent("error", {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    "object" == typeof e &&
                    null !== e &&
                    "string" == typeof e.message
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              }
              console.error(e);
            },
      n4 = [],
      n5 = 0,
      n6 = 0;
    function n8() {
      for (var e = n5, t = (n6 = n5 = 0); t < e; ) {
        var n = n4[t];
        n4[t++] = null;
        var r = n4[t];
        n4[t++] = null;
        var i = n4[t];
        n4[t++] = null;
        var a = n4[t];
        if (((n4[t++] = null), null !== r && null !== i)) {
          var o = r.pending;
          null === o ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (r.pending = i);
        }
        0 !== a && rt(n, i, a);
      }
    }
    function n9(e, t, n, r) {
      (n4[n5++] = e),
        (n4[n5++] = t),
        (n4[n5++] = n),
        (n4[n5++] = r),
        (n6 |= r),
        (e.lanes |= r),
        null !== (e = e.alternate) && (e.lanes |= r);
    }
    function n7(e, t, n, r) {
      return n9(e, t, n, r), rn(e);
    }
    function re(e, t) {
      return n9(e, null, null, t), rn(e);
    }
    function rt(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      null !== r && (r.lanes |= n);
      for (var i = !1, a = e.return; null !== a; )
        (a.childLanes |= n),
          null !== (r = a.alternate) && (r.childLanes |= n),
          22 === a.tag &&
            (null === (e = a.stateNode) || 1 & e._visibility || (i = !0)),
          (e = a),
          (a = a.return);
      return 3 === e.tag
        ? ((a = e.stateNode),
          i &&
            null !== t &&
            ((i = 31 - ey(n)),
            null === (r = (e = a.hiddenUpdates)[i]) ? (e[i] = [t]) : r.push(t),
            (t.lane = 0x20000000 | n)),
          a)
        : null;
    }
    function rn(e) {
      if (50 < ss) throw ((ss = 0), (su = null), Error(l(185)));
      for (var t = e.return; null !== t; ) t = (e = t).return;
      return 3 === e.tag ? e.stateNode : null;
    }
    var rr = {};
    function ri(e, t, n, r) {
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
        (this.refCleanup = this.ref = null),
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
    function ra(e, t, n, r) {
      return new ri(e, t, n, r);
    }
    function ro(e) {
      return !(!(e = e.prototype) || !e.isReactComponent);
    }
    function rl(e, t) {
      var n = e.alternate;
      return (
        null === n
          ? (((n = ra(e.tag, t, e.key, e.mode)).elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = 0x3e00000 & e.flags),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function rs(e, t) {
      e.flags &= 0x3e00002;
      var n = e.alternate;
      return (
        null === n
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (e.dependencies =
              null === (t = n.dependencies)
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function ru(e, t, n, r, i, a) {
      var o = 0;
      if (((r = e), "function" == typeof e)) ro(e) && (o = 1);
      else if ("string" == typeof e)
        o = !(function (e, t, n) {
          if (1 === n || null != t.itemProp) return !1;
          switch (e) {
            case "meta":
            case "title":
              return !0;
            case "style":
              if (
                "string" != typeof t.precedence ||
                "string" != typeof t.href ||
                "" === t.href
              )
                break;
              return !0;
            case "link":
              if (
                "string" != typeof t.rel ||
                "string" != typeof t.href ||
                "" === t.href ||
                t.onLoad ||
                t.onError
              )
                break;
              if ("stylesheet" === t.rel)
                return (
                  (e = t.disabled), "string" == typeof t.precedence && null == e
                );
              return !0;
            case "script":
              if (
                t.async &&
                "function" != typeof t.async &&
                "symbol" != typeof t.async &&
                !t.onLoad &&
                !t.onError &&
                t.src &&
                "string" == typeof t.src
              )
                return !0;
          }
          return !1;
        })(e, n, $.current)
          ? "html" === e || "head" === e || "body" === e
            ? 27
            : 5
          : 26;
      else
        e: switch (e) {
          case N:
            return ((e = ra(31, n, t, i)).elementType = N), (e.lanes = a), e;
          case v:
            return rc(n.children, i, a, t);
          case b:
            (o = 8), (i |= 24);
            break;
          case x:
            return (
              ((e = ra(12, n, t, 2 | i)).elementType = x), (e.lanes = a), e
            );
          case E:
            return ((e = ra(13, n, t, i)).elementType = E), (e.lanes = a), e;
          case C:
            return ((e = ra(19, n, t, i)).elementType = C), (e.lanes = a), e;
          default:
            if ("object" == typeof e && null !== e)
              switch (e.$$typeof) {
                case k:
                  o = 10;
                  break e;
                case w:
                  o = 9;
                  break e;
                case S:
                  o = 11;
                  break e;
                case P:
                  o = 14;
                  break e;
                case T:
                  (o = 16), (r = null);
                  break e;
              }
            (o = 29),
              (n = Error(l(130, null === e ? "null" : typeof e, ""))),
              (r = null);
        }
      return (
        ((t = ra(o, n, t, i)).elementType = e), (t.type = r), (t.lanes = a), t
      );
    }
    function rc(e, t, n, r) {
      return ((e = ra(7, e, r, t)).lanes = n), e;
    }
    function rd(e, t, n) {
      return ((e = ra(6, e, null, t)).lanes = n), e;
    }
    function rf(e) {
      var t = ra(18, null, null, 0);
      return (t.stateNode = e), t;
    }
    function rp(e, t, n) {
      return (
        ((t = ra(4, null !== e.children ? e.children : [], e.key, t)).lanes =
          n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var rh = new WeakMap();
    function rm(e, t) {
      if ("object" == typeof e && null !== e) {
        var n = rh.get(e);
        return void 0 !== n
          ? n
          : ((t = { value: e, source: t, stack: J(t) }), rh.set(e, t), t);
      }
      return { value: e, source: t, stack: J(t) };
    }
    var rg = [],
      ry = 0,
      rv = null,
      rb = 0,
      rx = [],
      rw = 0,
      rk = null,
      rS = 1,
      rE = "";
    function rC(e, t) {
      (rg[ry++] = rb), (rg[ry++] = rv), (rv = e), (rb = t);
    }
    function rP(e, t, n) {
      (rx[rw++] = rS), (rx[rw++] = rE), (rx[rw++] = rk), (rk = e);
      var r = rS;
      e = rE;
      var i = 32 - ey(r) - 1;
      (r &= ~(1 << i)), (n += 1);
      var a = 32 - ey(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        (a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (rS = (1 << (32 - ey(t) + i)) | (n << i) | r),
          (rE = a + e);
      } else (rS = (1 << a) | (n << i) | r), (rE = e);
    }
    function rT(e) {
      null !== e.return && (rC(e, 1), rP(e, 1, 0));
    }
    function rN(e) {
      for (; e === rv; )
        (rv = rg[--ry]), (rg[ry] = null), (rb = rg[--ry]), (rg[ry] = null);
      for (; e === rk; )
        (rk = rx[--rw]),
          (rx[rw] = null),
          (rE = rx[--rw]),
          (rx[rw] = null),
          (rS = rx[--rw]),
          (rx[rw] = null);
    }
    function rj(e, t) {
      (rx[rw++] = rS),
        (rx[rw++] = rE),
        (rx[rw++] = rk),
        (rS = t.id),
        (rE = t.overflow),
        (rk = e);
    }
    var rA = null,
      rM = null,
      rR = !1,
      rL = null,
      rz = !1,
      rD = Error(l(519));
    function r_(e) {
      var t = Error(
        l(
          418,
          1 < arguments.length && void 0 !== arguments[1] && arguments[1]
            ? "text"
            : "HTML",
          ""
        )
      );
      throw (r$(rm(t, e)), rD);
    }
    function rO(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[eO] = e), (t[eV] = r), n)) {
        case "dialog":
          ut("cancel", t), ut("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          ut("load", t);
          break;
        case "video":
        case "audio":
          for (n = 0; n < s9.length; n++) ut(s9[n], t);
          break;
        case "source":
          ut("error", t);
          break;
        case "img":
        case "image":
        case "link":
          ut("error", t), ut("load", t);
          break;
        case "details":
          ut("toggle", t);
          break;
        case "input":
          ut("invalid", t),
            ta(
              t,
              r.value,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
              !0
            );
          break;
        case "select":
          ut("invalid", t);
          break;
        case "textarea":
          ut("invalid", t), tu(t, r.value, r.defaultValue, r.children);
      }
      ("string" != typeof (n = r.children) &&
        "number" != typeof n &&
        "bigint" != typeof n) ||
      t.textContent === "" + n ||
      !0 === r.suppressHydrationWarning ||
      uh(t.textContent, n)
        ? (null != r.popover && (ut("beforetoggle", t), ut("toggle", t)),
          null != r.onScroll && ut("scroll", t),
          null != r.onScrollEnd && ut("scrollend", t),
          null != r.onClick && (t.onclick = tv),
          (t = !0))
        : (t = !1),
        t || r_(e, !0);
    }
    function rV(e) {
      for (rA = e.return; rA; )
        switch (rA.tag) {
          case 5:
          case 31:
          case 13:
            rz = !1;
            return;
          case 27:
          case 3:
            rz = !0;
            return;
          default:
            rA = rA.return;
        }
    }
    function rI(e) {
      if (e !== rA) return !1;
      if (!rR) return rV(e), (rR = !0), !1;
      var t,
        n = e.tag;
      if (
        ((t = 3 !== n && 27 !== n) &&
          ((t = 5 === n) &&
            (t =
              "form" === (t = e.type) ||
              "button" === t ||
              uE(e.type, e.memoizedProps)),
          (t = !t)),
        t && rM && r_(e),
        rV(e),
        13 === n)
      ) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
          throw Error(l(317));
        rM = uF(e);
      } else if (31 === n) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
          throw Error(l(317));
        rM = uF(e);
      } else
        27 === n
          ? ((n = rM),
            uM(e.type) ? ((e = uI), (uI = null), (rM = e)) : (rM = n))
          : (rM = rA ? uV(e.stateNode.nextSibling) : null);
      return !0;
    }
    function rF() {
      (rM = rA = null), (rR = !1);
    }
    function rB() {
      var e = rL;
      return (
        null !== e &&
          (null === l4 ? (l4 = e) : l4.push.apply(l4, e), (rL = null)),
        e
      );
    }
    function r$(e) {
      null === rL ? (rL = [e]) : rL.push(e);
    }
    var rU = I(null),
      rW = null,
      rH = null;
    function rY(e, t, n) {
      B(rU, t._currentValue), (t._currentValue = n);
    }
    function rQ(e) {
      (e._currentValue = rU.current), F(rU);
    }
    function rq(e, t, n) {
      for (; null !== e; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) !== t
            ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
            : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function rG(e, t, n, r) {
      var i = e.child;
      for (null !== i && (i.return = e); null !== i; ) {
        var a = i.dependencies;
        if (null !== a) {
          var o = i.child;
          a = a.firstContext;
          e: for (; null !== a; ) {
            var s = a;
            a = i;
            for (var u = 0; u < t.length; u++)
              if (s.context === t[u]) {
                (a.lanes |= n),
                  null !== (s = a.alternate) && (s.lanes |= n),
                  rq(a.return, n, e),
                  r || (o = null);
                break e;
              }
            a = s.next;
          }
        } else if (18 === i.tag) {
          if (null === (o = i.return)) throw Error(l(341));
          (o.lanes |= n),
            null !== (a = o.alternate) && (a.lanes |= n),
            rq(o, n, e),
            (o = null);
        } else o = i.child;
        if (null !== o) o.return = i;
        else
          for (o = i; null !== o; ) {
            if (o === e) {
              o = null;
              break;
            }
            if (null !== (i = o.sibling)) {
              (i.return = o.return), (o = i);
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function rX(e, t, n, r) {
      e = null;
      for (var i = t, a = !1; null !== i; ) {
        if (!a) {
          if (0 != (524288 & i.flags)) a = !0;
          else if (0 != (262144 & i.flags)) break;
        }
        if (10 === i.tag) {
          var o = i.alternate;
          if (null === o) throw Error(l(387));
          if (null !== (o = o.memoizedProps)) {
            var s = i.type;
            nA(i.pendingProps.value, o.value) ||
              (null !== e ? e.push(s) : (e = [s]));
          }
        } else if (i === H.current) {
          if (null === (o = i.alternate)) throw Error(l(387));
          o.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
            (null !== e ? e.push(ca) : (e = [ca]));
        }
        i = i.return;
      }
      null !== e && rG(t, e, n, r), (t.flags |= 262144);
    }
    function rK(e) {
      for (e = e.firstContext; null !== e; ) {
        if (!nA(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function rZ(e) {
      (rW = e),
        (rH = null),
        null !== (e = e.dependencies) && (e.firstContext = null);
    }
    function rJ(e) {
      return r1(rW, e);
    }
    function r0(e, t) {
      return null === rW && rZ(e), r1(e, t);
    }
    function r1(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), null === rH)) {
        if (null === e) throw Error(l(308));
        (rH = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288);
      } else rH = rH.next = t;
      return n;
    }
    var r2 =
        "u" > typeof AbortController
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                (t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  });
              };
            },
      r3 = i.unstable_scheduleCallback,
      r4 = i.unstable_NormalPriority,
      r5 = {
        $$typeof: k,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function r6() {
      return { controller: new r2(), data: new Map(), refCount: 0 };
    }
    function r8(e) {
      e.refCount--,
        0 === e.refCount &&
          r3(r4, function () {
            e.controller.abort();
          });
    }
    var r9 = null,
      r7 = 0,
      ie = 0,
      it = null;
    function ir() {
      if (0 == --r7 && null !== r9) {
        null !== it && (it.status = "fulfilled");
        var e = r9;
        (r9 = null), (ie = 0), (it = null);
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    var ii = z.S;
    z.S = function (e, t) {
      (l8 = ea()),
        "object" == typeof t &&
          null !== t &&
          "function" == typeof t.then &&
          (function (e) {
            if (null === r9) {
              var t = (r9 = []);
              (r7 = 0),
                (ie = s3()),
                (it = {
                  status: "pending",
                  value: void 0,
                  then: function (e) {
                    t.push(e);
                  },
                });
            }
            r7++, e.then(ir, ir);
          })(t),
        null !== ii && ii(e, t);
    };
    var ia = I(null);
    function io() {
      var e = ia.current;
      return null !== e ? e : l$.pooledCache;
    }
    function il(e, t) {
      null === t ? B(ia, ia.current) : B(ia, t.pool);
    }
    function is() {
      var e = io();
      return null === e ? null : { parent: r5._currentValue, pool: e };
    }
    var iu = Error(l(460)),
      ic = Error(l(474)),
      id = Error(l(542)),
      ip = { then: function () {} };
    function ih(e) {
      return "fulfilled" === (e = e.status) || "rejected" === e;
    }
    function im(e, t, n) {
      switch (
        (void 0 === (n = e[n])
          ? e.push(t)
          : n !== t && (t.then(tv, tv), (t = n)),
        t.status)
      ) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw (ib((e = t.reason)), e);
        default:
          if ("string" == typeof t.status) t.then(tv, tv);
          else {
            if (null !== (e = l$) && 100 < e.shellSuspendCounter)
              throw Error(l(482));
            ((e = t).status = "pending"),
              e.then(
                function (e) {
                  if ("pending" === t.status) {
                    var n = t;
                    (n.status = "fulfilled"), (n.value = e);
                  }
                },
                function (e) {
                  if ("pending" === t.status) {
                    var n = t;
                    (n.status = "rejected"), (n.reason = e);
                  }
                }
              );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw (ib((e = t.reason)), e);
          }
          throw ((iy = t), iu);
      }
    }
    function ig(e) {
      try {
        return (0, e._init)(e._payload);
      } catch (e) {
        if (null !== e && "object" == typeof e && "function" == typeof e.then)
          throw ((iy = e), iu);
        throw e;
      }
    }
    var iy = null;
    function iv() {
      if (null === iy) throw Error(l(459));
      var e = iy;
      return (iy = null), e;
    }
    function ib(e) {
      if (e === iu || e === id) throw Error(l(483));
    }
    var ix = null,
      iw = 0;
    function ik(e) {
      var t = iw;
      return (iw += 1), null === ix && (ix = []), im(ix, e, t);
    }
    function iS(e, t) {
      e.ref = void 0 !== (t = t.props.ref) ? t : null;
    }
    function iE(e, t) {
      if (t.$$typeof === m) throw Error(l(525));
      throw Error(
        l(
          31,
          "[object Object]" === (e = Object.prototype.toString.call(t))
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      );
    }
    function iC(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; null !== r; ) t(n, r), (r = r.sibling);
        return null;
      }
      function r(e) {
        for (var t = new Map(); null !== e; )
          null !== e.key ? t.set(e.key, e) : t.set(e.index, e), (e = e.sibling);
        return t;
      }
      function i(e, t) {
        return ((e = rl(e, t)).index = 0), (e.sibling = null), e;
      }
      function a(t, n, r) {
        return ((t.index = r), e)
          ? null !== (r = t.alternate)
            ? (r = r.index) < n
              ? ((t.flags |= 0x4000002), n)
              : r
            : ((t.flags |= 0x4000002), n)
          : ((t.flags |= 1048576), n);
      }
      function o(t) {
        return e && null === t.alternate && (t.flags |= 0x4000002), t;
      }
      function s(e, t, n, r) {
        return (
          null === t || 6 !== t.tag
            ? ((t = rd(n, e.mode, r)).return = e)
            : ((t = i(t, n)).return = e),
          t
        );
      }
      function u(e, t, n, r) {
        var a = n.type;
        return a === v
          ? d(e, t, n.props.children, r, n.key)
          : (null !== t &&
            (t.elementType === a ||
              ("object" == typeof a &&
                null !== a &&
                a.$$typeof === T &&
                ig(a) === t.type))
              ? iS((t = i(t, n.props)), n)
              : iS((t = ru(n.type, n.key, n.props, null, e.mode, r)), n),
            (t.return = e),
            t);
      }
      function c(e, t, n, r) {
        return (
          null === t ||
          4 !== t.tag ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
            ? ((t = rp(n, e.mode, r)).return = e)
            : ((t = i(t, n.children || [])).return = e),
          t
        );
      }
      function d(e, t, n, r, a) {
        return (
          null === t || 7 !== t.tag
            ? ((t = rc(n, e.mode, r, a)).return = e)
            : ((t = i(t, n)).return = e),
          t
        );
      }
      function f(e, t, n) {
        if (
          ("string" == typeof t && "" !== t) ||
          "number" == typeof t ||
          "bigint" == typeof t
        )
          return ((t = rd("" + t, e.mode, n)).return = e), t;
        if ("object" == typeof t && null !== t) {
          switch (t.$$typeof) {
            case g:
              return (
                iS((n = ru(t.type, t.key, t.props, null, e.mode, n)), t),
                (n.return = e),
                n
              );
            case y:
              return ((t = rp(t, e.mode, n)).return = e), t;
            case T:
              return f(e, (t = ig(t)), n);
          }
          if (L(t) || M(t)) return ((t = rc(t, e.mode, n, null)).return = e), t;
          if ("function" == typeof t.then) return f(e, ik(t), n);
          if (t.$$typeof === k) return f(e, r0(e, t), n);
          iE(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = null !== t ? t.key : null;
        if (
          ("string" == typeof n && "" !== n) ||
          "number" == typeof n ||
          "bigint" == typeof n
        )
          return null !== i ? null : s(e, t, "" + n, r);
        if ("object" == typeof n && null !== n) {
          switch (n.$$typeof) {
            case g:
              return n.key === i ? u(e, t, n, r) : null;
            case y:
              return n.key === i ? c(e, t, n, r) : null;
            case T:
              return p(e, t, (n = ig(n)), r);
          }
          if (L(n) || M(n)) return null !== i ? null : d(e, t, n, r, null);
          if ("function" == typeof n.then) return p(e, t, ik(n), r);
          if (n.$$typeof === k) return p(e, t, r0(e, n), r);
          iE(e, n);
        }
        return null;
      }
      function h(e, t, n, r, i) {
        if (
          ("string" == typeof r && "" !== r) ||
          "number" == typeof r ||
          "bigint" == typeof r
        )
          return s(t, (e = e.get(n) || null), "" + r, i);
        if ("object" == typeof r && null !== r) {
          switch (r.$$typeof) {
            case g:
              return u(
                t,
                (e = e.get(null === r.key ? n : r.key) || null),
                r,
                i
              );
            case y:
              return c(
                t,
                (e = e.get(null === r.key ? n : r.key) || null),
                r,
                i
              );
            case T:
              return h(e, t, n, (r = ig(r)), i);
          }
          if (L(r) || M(r)) return d(t, (e = e.get(n) || null), r, i, null);
          if ("function" == typeof r.then) return h(e, t, n, ik(r), i);
          if (r.$$typeof === k) return h(e, t, n, r0(t, r), i);
          iE(t, r);
        }
        return null;
      }
      return function (s, u, c, d) {
        try {
          iw = 0;
          var m = (function s(u, c, d, m) {
            if (
              ("object" == typeof d &&
                null !== d &&
                d.type === v &&
                null === d.key &&
                (d = d.props.children),
              "object" == typeof d && null !== d)
            ) {
              switch (d.$$typeof) {
                case g:
                  e: {
                    for (var b = d.key; null !== c; ) {
                      if (c.key === b) {
                        if ((b = d.type) === v) {
                          if (7 === c.tag) {
                            n(u, c.sibling),
                              ((m = i(c, d.props.children)).return = u),
                              (u = m);
                            break e;
                          }
                        } else if (
                          c.elementType === b ||
                          ("object" == typeof b &&
                            null !== b &&
                            b.$$typeof === T &&
                            ig(b) === c.type)
                        ) {
                          n(u, c.sibling),
                            iS((m = i(c, d.props)), d),
                            (m.return = u),
                            (u = m);
                          break e;
                        }
                        n(u, c);
                        break;
                      }
                      t(u, c), (c = c.sibling);
                    }
                    d.type === v
                      ? ((m = rc(d.props.children, u.mode, m, d.key)).return =
                          u)
                      : (iS(
                          (m = ru(d.type, d.key, d.props, null, u.mode, m)),
                          d
                        ),
                        (m.return = u)),
                      (u = m);
                  }
                  return o(u);
                case y:
                  e: {
                    for (b = d.key; null !== c; ) {
                      if (c.key === b)
                        if (
                          4 === c.tag &&
                          c.stateNode.containerInfo === d.containerInfo &&
                          c.stateNode.implementation === d.implementation
                        ) {
                          n(u, c.sibling),
                            ((m = i(c, d.children || [])).return = u),
                            (u = m);
                          break e;
                        } else {
                          n(u, c);
                          break;
                        }
                      t(u, c), (c = c.sibling);
                    }
                    ((m = rp(d, u.mode, m)).return = u), (u = m);
                  }
                  return o(u);
                case T:
                  return s(u, c, (d = ig(d)), m);
              }
              if (L(d))
                return (function (i, o, l, s) {
                  for (
                    var u = null, c = null, d = o, m = (o = 0), g = null;
                    null !== d && m < l.length;
                    m++
                  ) {
                    d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
                    var y = p(i, d, l[m], s);
                    if (null === y) {
                      null === d && (d = g);
                      break;
                    }
                    e && d && null === y.alternate && t(i, d),
                      (o = a(y, o, m)),
                      null === c ? (u = y) : (c.sibling = y),
                      (c = y),
                      (d = g);
                  }
                  if (m === l.length) return n(i, d), rR && rC(i, m), u;
                  if (null === d) {
                    for (; m < l.length; m++)
                      null !== (d = f(i, l[m], s)) &&
                        ((o = a(d, o, m)),
                        null === c ? (u = d) : (c.sibling = d),
                        (c = d));
                    return rR && rC(i, m), u;
                  }
                  for (d = r(d); m < l.length; m++)
                    null !== (g = h(d, i, m, l[m], s)) &&
                      (e &&
                        null !== g.alternate &&
                        d.delete(null === g.key ? m : g.key),
                      (o = a(g, o, m)),
                      null === c ? (u = g) : (c.sibling = g),
                      (c = g));
                  return (
                    e &&
                      d.forEach(function (e) {
                        return t(i, e);
                      }),
                    rR && rC(i, m),
                    u
                  );
                })(u, c, d, m);
              if (M(d)) {
                if ("function" != typeof (b = M(d))) throw Error(l(150));
                return (function (i, o, s, u) {
                  if (null == s) throw Error(l(151));
                  for (
                    var c = null,
                      d = null,
                      m = o,
                      g = (o = 0),
                      y = null,
                      v = s.next();
                    null !== m && !v.done;
                    g++, v = s.next()
                  ) {
                    m.index > g ? ((y = m), (m = null)) : (y = m.sibling);
                    var b = p(i, m, v.value, u);
                    if (null === b) {
                      null === m && (m = y);
                      break;
                    }
                    e && m && null === b.alternate && t(i, m),
                      (o = a(b, o, g)),
                      null === d ? (c = b) : (d.sibling = b),
                      (d = b),
                      (m = y);
                  }
                  if (v.done) return n(i, m), rR && rC(i, g), c;
                  if (null === m) {
                    for (; !v.done; g++, v = s.next())
                      null !== (v = f(i, v.value, u)) &&
                        ((o = a(v, o, g)),
                        null === d ? (c = v) : (d.sibling = v),
                        (d = v));
                    return rR && rC(i, g), c;
                  }
                  for (m = r(m); !v.done; g++, v = s.next())
                    null !== (v = h(m, i, g, v.value, u)) &&
                      (e &&
                        null !== v.alternate &&
                        m.delete(null === v.key ? g : v.key),
                      (o = a(v, o, g)),
                      null === d ? (c = v) : (d.sibling = v),
                      (d = v));
                  return (
                    e &&
                      m.forEach(function (e) {
                        return t(i, e);
                      }),
                    rR && rC(i, g),
                    c
                  );
                })(u, c, (d = b.call(d)), m);
              }
              if ("function" == typeof d.then) return s(u, c, ik(d), m);
              if (d.$$typeof === k) return s(u, c, r0(u, d), m);
              iE(u, d);
            }
            return ("string" == typeof d && "" !== d) ||
              "number" == typeof d ||
              "bigint" == typeof d
              ? ((d = "" + d),
                null !== c && 6 === c.tag
                  ? (n(u, c.sibling), ((m = i(c, d)).return = u))
                  : (n(u, c), ((m = rd(d, u.mode, m)).return = u)),
                o((u = m)))
              : n(u, c);
          })(s, u, c, d);
          return (ix = null), m;
        } catch (e) {
          if (e === iu || e === id) throw e;
          var b = ra(29, e, null, s.mode);
          return (b.lanes = d), (b.return = s), b;
        } finally {
        }
      };
    }
    var iP = iC(!0),
      iT = iC(!1),
      iN = !1;
    function ij(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function iA(e, t) {
      (e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          });
    }
    function iM(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function iR(e, t, n) {
      var r = e.updateQueue;
      if (null === r) return null;
      if (((r = r.shared), 0 != (2 & lB))) {
        var i = r.pending;
        return (
          null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = rn(e)),
          rt(e, null, n),
          t
        );
      }
      return n9(e, r, t, n), rn(e);
    }
    function iL(e, t, n) {
      if (
        null !== (t = t.updateQueue) &&
        ((t = t.shared), 0 != (4194048 & n))
      ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), eA(e, n);
      }
    }
    function iz(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (null !== r && n === (r = r.updateQueue)) {
        var i = null,
          a = null;
        if (null !== (n = n.firstBaseUpdate)) {
          do {
            var o = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            };
            null === a ? (i = a = o) : (a = a.next = o), (n = n.next);
          } while (null !== n);
          null === a ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        (n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n);
        return;
      }
      null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
    }
    var iD = !1;
    function i_() {
      if (iD) {
        var e = it;
        if (null !== e) throw e;
      }
    }
    function iO(e, t, n, r) {
      iD = !1;
      var i = e.updateQueue;
      iN = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        l = i.shared.pending;
      if (null !== l) {
        i.shared.pending = null;
        var s = l,
          u = s.next;
        (s.next = null), null === o ? (a = u) : (o.next = u), (o = s);
        var c = e.alternate;
        null !== c &&
          (l = (c = c.updateQueue).lastBaseUpdate) !== o &&
          (null === l ? (c.firstBaseUpdate = u) : (l.next = u),
          (c.lastBaseUpdate = s));
      }
      if (null !== a) {
        var d = i.baseState;
        for (o = 0, c = u = s = null, l = a; ; ) {
          var f = -0x20000001 & l.lane,
            p = f !== l.lane;
          if (p ? (lW & f) === f : (r & f) === f) {
            0 !== f && f === ie && (iD = !0),
              null !== c &&
                (c = c.next =
                  {
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: null,
                    next: null,
                  });
            e: {
              var m = e,
                g = l;
              switch (((f = t), g.tag)) {
                case 1:
                  if ("function" == typeof (m = g.payload)) {
                    d = m.call(n, d, f);
                    break e;
                  }
                  d = m;
                  break e;
                case 3:
                  m.flags = (-65537 & m.flags) | 128;
                case 0:
                  if (
                    null ==
                    (f =
                      "function" == typeof (m = g.payload)
                        ? m.call(n, d, f)
                        : m)
                  )
                    break e;
                  d = h({}, d, f);
                  break e;
                case 2:
                  iN = !0;
              }
            }
            null !== (f = l.callback) &&
              ((e.flags |= 64),
              p && (e.flags |= 8192),
              null === (p = i.callbacks) ? (i.callbacks = [f]) : p.push(f));
          } else
            (p = {
              lane: f,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            }),
              null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
              (o |= f);
          if (null === (l = l.next))
            if (null === (l = i.shared.pending)) break;
            else
              (l = (p = l).next),
                (p.next = null),
                (i.lastBaseUpdate = p),
                (i.shared.pending = null);
        }
        null === c && (s = d),
          (i.baseState = s),
          (i.firstBaseUpdate = u),
          (i.lastBaseUpdate = c),
          null === a && (i.shared.lanes = 0),
          (lZ |= o),
          (e.lanes = o),
          (e.memoizedState = d);
      }
    }
    function iV(e, t) {
      if ("function" != typeof e) throw Error(l(191, e));
      e.call(t);
    }
    function iI(e, t) {
      var n = e.callbacks;
      if (null !== n)
        for (e.callbacks = null, e = 0; e < n.length; e++) iV(n[e], t);
    }
    var iF = I(null),
      iB = I(0);
    function i$(e, t) {
      B(iB, (e = lX)), B(iF, t), (lX = e | t.baseLanes);
    }
    function iU() {
      B(iB, lX), B(iF, iF.current);
    }
    function iW() {
      (lX = iB.current), F(iF), F(iB);
    }
    var iH = I(null),
      iY = null;
    function iQ(e) {
      var t = e.alternate;
      B(iZ, 1 & iZ.current),
        B(iH, e),
        null === iY &&
          (null === t || null !== iF.current
            ? (iY = e)
            : null !== t.memoizedState && (iY = e));
    }
    function iq(e) {
      B(iZ, iZ.current), B(iH, e), null === iY && (iY = e);
    }
    function iG(e) {
      22 === e.tag
        ? (B(iZ, iZ.current), B(iH, e), null === iY && (iY = e))
        : iX();
    }
    function iX() {
      B(iZ, iZ.current), B(iH, iH.current);
    }
    function iK(e) {
      F(iH), iY === e && (iY = null), F(iZ);
    }
    var iZ = I(0);
    function iJ(e) {
      for (var t = e; null !== t; ) {
        if (13 === t.tag) {
          var n = t.memoizedState;
          if (null !== n && (null === (n = n.dehydrated) || u_(n) || uO(n)))
            return t;
        } else if (
          19 === t.tag &&
          ("forwards" === t.memoizedProps.revealOrder ||
            "backwards" === t.memoizedProps.revealOrder ||
            "unstable_legacy-backwards" === t.memoizedProps.revealOrder ||
            "together" === t.memoizedProps.revealOrder)
        ) {
          if (0 != (128 & t.flags)) return t;
        } else if (null !== t.child) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; null === t.sibling; ) {
          if (null === t.return || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    var i0 = 0,
      i1 = null,
      i2 = null,
      i3 = null,
      i4 = !1,
      i5 = !1,
      i6 = !1,
      i8 = 0,
      i9 = 0,
      i7 = null,
      ae = 0;
    function at() {
      throw Error(l(321));
    }
    function an(e, t) {
      if (null === t) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!nA(e[n], t[n])) return !1;
      return !0;
    }
    function ar(e, t, n, r, i, a) {
      return (
        (i0 = a),
        (i1 = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (z.H = null === e || null === e.memoizedState ? ou : oc),
        (i6 = !1),
        (a = n(r, i)),
        (i6 = !1),
        i5 && (a = aa(t, n, r, i)),
        ai(e),
        a
      );
    }
    function ai(e) {
      z.H = os;
      var t = null !== i2 && null !== i2.next;
      if (
        ((i0 = 0), (i3 = i2 = i1 = null), (i4 = !1), (i9 = 0), (i7 = null), t)
      )
        throw Error(l(300));
      null === e || oP || (null !== (e = e.dependencies) && rK(e) && (oP = !0));
    }
    function aa(e, t, n, r) {
      i1 = e;
      var i = 0;
      do {
        if ((i5 && (i7 = null), (i9 = 0), (i5 = !1), 25 <= i))
          throw Error(l(301));
        if (((i += 1), (i3 = i2 = null), null != e.updateQueue)) {
          var a = e.updateQueue;
          (a.lastEffect = null),
            (a.events = null),
            (a.stores = null),
            null != a.memoCache && (a.memoCache.index = 0);
        }
        (z.H = od), (a = t(n, r));
      } while (i5);
      return a;
    }
    function ao() {
      var e = z.H,
        t = e.useState()[0];
      return (
        (t = "function" == typeof t.then ? ap(t) : t),
        (e = e.useState()[0]),
        (null !== i2 ? i2.memoizedState : null) !== e && (i1.flags |= 1024),
        t
      );
    }
    function al() {
      var e = 0 !== i8;
      return (i8 = 0), e;
    }
    function as(e, t, n) {
      (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
    }
    function au(e) {
      if (i4) {
        for (e = e.memoizedState; null !== e; ) {
          var t = e.queue;
          null !== t && (t.pending = null), (e = e.next);
        }
        i4 = !1;
      }
      (i0 = 0), (i3 = i2 = i1 = null), (i5 = !1), (i9 = i8 = 0), (i7 = null);
    }
    function ac() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return null === i3 ? (i1.memoizedState = i3 = e) : (i3 = i3.next = e), i3;
    }
    function ad() {
      if (null === i2) {
        var e = i1.alternate;
        e = null !== e ? e.memoizedState : null;
      } else e = i2.next;
      var t = null === i3 ? i1.memoizedState : i3.next;
      if (null !== t) (i3 = t), (i2 = e);
      else {
        if (null === e) {
          if (null === i1.alternate) throw Error(l(467));
          throw Error(l(310));
        }
        (e = {
          memoizedState: (i2 = e).memoizedState,
          baseState: i2.baseState,
          baseQueue: i2.baseQueue,
          queue: i2.queue,
          next: null,
        }),
          null === i3 ? (i1.memoizedState = i3 = e) : (i3 = i3.next = e);
      }
      return i3;
    }
    function af() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function ap(e) {
      var t = i9;
      return (
        (i9 += 1),
        null === i7 && (i7 = []),
        (e = im(i7, e, t)),
        (t = i1),
        null === (null === i3 ? t.memoizedState : i3.next) &&
          (z.H =
            null === (t = t.alternate) || null === t.memoizedState ? ou : oc),
        e
      );
    }
    function ah(e) {
      if (null !== e && "object" == typeof e) {
        if ("function" == typeof e.then) return ap(e);
        if (e.$$typeof === k) return rJ(e);
      }
      throw Error(l(438, String(e)));
    }
    function am(e) {
      var t = null,
        n = i1.updateQueue;
      if ((null !== n && (t = n.memoCache), null == t)) {
        var r = i1.alternate;
        null !== r &&
          null !== (r = r.updateQueue) &&
          null != (r = r.memoCache) &&
          (t = {
            data: r.data.map(function (e) {
              return e.slice();
            }),
            index: 0,
          });
      }
      if (
        (null == t && (t = { data: [], index: 0 }),
        null === n && ((n = af()), (i1.updateQueue = n)),
        (n.memoCache = t),
        void 0 === (n = t.data[t.index]))
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = j;
      return t.index++, n;
    }
    function ag(e, t) {
      return "function" == typeof t ? t(e) : t;
    }
    function ay(e) {
      return av(ad(), i2, e);
    }
    function av(e, t, n) {
      var r = e.queue;
      if (null === r) throw Error(l(311));
      r.lastRenderedReducer = n;
      var i = e.baseQueue,
        a = r.pending;
      if (null !== a) {
        if (null !== i) {
          var o = i.next;
          (i.next = a.next), (a.next = o);
        }
        (t.baseQueue = i = a), (r.pending = null);
      }
      if (((a = e.baseState), null === i)) e.memoizedState = a;
      else {
        t = i.next;
        var s = (o = null),
          u = null,
          c = t,
          d = !1;
        do {
          var f = -0x20000001 & c.lane;
          if (f !== c.lane ? (lW & f) === f : (i0 & f) === f) {
            var p = c.revertLane;
            if (0 === p)
              null !== u &&
                (u = u.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                  }),
                f === ie && (d = !0);
            else if ((i0 & p) === p) {
              (c = c.next), p === ie && (d = !0);
              continue;
            } else
              (f = {
                lane: 0,
                revertLane: c.revertLane,
                gesture: null,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null,
              }),
                null === u ? ((s = u = f), (o = a)) : (u = u.next = f),
                (i1.lanes |= p),
                (lZ |= p);
            (f = c.action),
              i6 && n(a, f),
              (a = c.hasEagerState ? c.eagerState : n(a, f));
          } else
            (p = {
              lane: f,
              revertLane: c.revertLane,
              gesture: c.gesture,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
              null === u ? ((s = u = p), (o = a)) : (u = u.next = p),
              (i1.lanes |= f),
              (lZ |= f);
          c = c.next;
        } while (null !== c && c !== t);
        if (
          (null === u ? (o = a) : (u.next = s),
          !nA(a, e.memoizedState) && ((oP = !0), d && null !== (n = it)))
        )
          throw n;
        (e.memoizedState = a),
          (e.baseState = o),
          (e.baseQueue = u),
          (r.lastRenderedState = a);
      }
      return null === i && (r.lanes = 0), [e.memoizedState, r.dispatch];
    }
    function ab(e) {
      var t = ad(),
        n = t.queue;
      if (null === n) throw Error(l(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        i = n.pending,
        a = t.memoizedState;
      if (null !== i) {
        n.pending = null;
        var o = (i = i.next);
        do (a = e(a, o.action)), (o = o.next);
        while (o !== i);
        nA(a, t.memoizedState) || (oP = !0),
          (t.memoizedState = a),
          null === t.baseQueue && (t.baseState = a),
          (n.lastRenderedState = a);
      }
      return [a, r];
    }
    function ax(e, t, n) {
      var r = i1,
        i = ad(),
        a = rR;
      if (a) {
        if (void 0 === n) throw Error(l(407));
        n = n();
      } else n = t();
      var o = !nA((i2 || i).memoizedState, n);
      if (
        (o && ((i.memoizedState = n), (oP = !0)),
        (i = i.queue),
        aH(aS.bind(null, r, i, e), [e]),
        i.getSnapshot !== t || o || (null !== i3 && 1 & i3.memoizedState.tag))
      ) {
        if (
          ((r.flags |= 2048),
          aF(9, { destroy: void 0 }, ak.bind(null, r, i, n, t), null),
          null === l$)
        )
          throw Error(l(349));
        a || 0 != (127 & i0) || aw(r, t, n);
      }
      return n;
    }
    function aw(e, t, n) {
      (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = i1.updateQueue)
          ? ((t = af()), (i1.updateQueue = t), (t.stores = [e]))
          : null === (n = t.stores)
          ? (t.stores = [e])
          : n.push(e);
    }
    function ak(e, t, n, r) {
      (t.value = n), (t.getSnapshot = r), aE(t) && aC(e);
    }
    function aS(e, t, n) {
      return n(function () {
        aE(t) && aC(e);
      });
    }
    function aE(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !nA(e, n);
      } catch (e) {
        return !0;
      }
    }
    function aC(e) {
      var t = re(e, 2);
      null !== t && sf(t, e, 2);
    }
    function aP(e) {
      var t = ac();
      if ("function" == typeof e) {
        var n = e;
        if (((e = n()), i6)) {
          eg(!0);
          try {
            n();
          } finally {
            eg(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ag,
          lastRenderedState: e,
        }),
        t
      );
    }
    function aT(e, t, n, r) {
      return (e.baseState = n), av(e, i2, "function" == typeof r ? r : ag);
    }
    function aN(e, t, n, r, i) {
      if (oa(e)) throw Error(l(485));
      if (null !== (e = t.action)) {
        var a = {
          payload: i,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            a.listeners.push(e);
          },
        };
        null !== z.T ? n(!0) : (a.isTransition = !1),
          r(a),
          null === (n = t.pending)
            ? ((a.next = t.pending = a), aj(t, a))
            : ((a.next = n.next), (t.pending = n.next = a));
      }
    }
    function aj(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = z.T,
          o = {};
        z.T = o;
        try {
          var l = n(i, r),
            s = z.S;
          null !== s && s(o, l), aA(e, t, l);
        } catch (n) {
          aR(e, t, n);
        } finally {
          null !== a && null !== o.types && (a.types = o.types), (z.T = a);
        }
      } else
        try {
          (a = n(i, r)), aA(e, t, a);
        } catch (n) {
          aR(e, t, n);
        }
    }
    function aA(e, t, n) {
      null !== n && "object" == typeof n && "function" == typeof n.then
        ? n.then(
            function (n) {
              aM(e, t, n);
            },
            function (n) {
              return aR(e, t, n);
            }
          )
        : aM(e, t, n);
    }
    function aM(e, t, n) {
      (t.status = "fulfilled"),
        (t.value = n),
        aL(t),
        (e.state = n),
        null !== (t = e.pending) &&
          ((n = t.next) === t
            ? (e.pending = null)
            : ((n = n.next), (t.next = n), aj(e, n)));
    }
    function aR(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), null !== r)) {
        r = r.next;
        do (t.status = "rejected"), (t.reason = n), aL(t), (t = t.next);
        while (t !== r);
      }
      e.action = null;
    }
    function aL(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function az(e, t) {
      return t;
    }
    function aD(e, t) {
      if (rR) {
        var n = l$.formState;
        if (null !== n) {
          e: {
            var r = i1;
            if (rR) {
              if (rM) {
                t: {
                  for (var i = rM, a = rz; 8 !== i.nodeType; )
                    if (!a || null === (i = uV(i.nextSibling))) {
                      i = null;
                      break t;
                    }
                  i = "F!" === (a = i.data) || "F" === a ? i : null;
                }
                if (i) {
                  (rM = uV(i.nextSibling)), (r = "F!" === i.data);
                  break e;
                }
              }
              r_(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        ((n = ac()).memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: az,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = on.bind(null, i1, r)),
        (r.dispatch = n),
        (r = aP(!1)),
        (a = oi.bind(null, i1, !1, r.queue)),
        (r = ac()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = aN.bind(null, i1, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function a_(e) {
      return aO(ad(), i2, e);
    }
    function aO(e, t, n) {
      if (
        ((t = av(e, t, az)[0]),
        (e = ay(ag)[0]),
        "object" == typeof t && null !== t && "function" == typeof t.then)
      )
        try {
          var r = ap(t);
        } catch (e) {
          if (e === iu) throw id;
          throw e;
        }
      else r = t;
      var i = (t = ad()).queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((i1.flags |= 2048),
          aF(9, { destroy: void 0 }, aV.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function aV(e, t) {
      e.action = t;
    }
    function aI(e) {
      var t = ad(),
        n = i2;
      if (null !== n) return aO(t, n, e);
      ad(), (t = t.memoizedState);
      var r = (n = ad()).queue.dispatch;
      return (n.memoizedState = e), [t, r, !1];
    }
    function aF(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        null === (t = i1.updateQueue) && ((t = af()), (i1.updateQueue = t)),
        null === (n = t.lastEffect)
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function aB() {
      return ad().memoizedState;
    }
    function a$(e, t, n, r) {
      var i = ac();
      (i1.flags |= e),
        (i.memoizedState = aF(
          1 | t,
          { destroy: void 0 },
          n,
          void 0 === r ? null : r
        ));
    }
    function aU(e, t, n, r) {
      var i = ad();
      r = void 0 === r ? null : r;
      var a = i.memoizedState.inst;
      null !== i2 && null !== r && an(r, i2.memoizedState.deps)
        ? (i.memoizedState = aF(t, a, n, r))
        : ((i1.flags |= e), (i.memoizedState = aF(1 | t, a, n, r)));
    }
    function aW(e, t) {
      a$(8390656, 8, e, t);
    }
    function aH(e, t) {
      aU(2048, 8, e, t);
    }
    function aY(e) {
      var t = ad().memoizedState,
        n = { ref: t, nextImpl: e };
      i1.flags |= 4;
      var r = i1.updateQueue;
      if (null === r) (r = af()), (i1.updateQueue = r), (r.events = [n]);
      else {
        var i = r.events;
        null === i ? (r.events = [n]) : i.push(n);
      }
      return function () {
        if (0 != (2 & lB)) throw Error(l(440));
        return t.impl.apply(void 0, arguments);
      };
    }
    function aQ(e, t) {
      return aU(4, 2, e, t);
    }
    function aq(e, t) {
      return aU(4, 4, e, t);
    }
    function aG(e, t) {
      if ("function" == typeof t) {
        var n = t((e = e()));
        return function () {
          "function" == typeof n ? n() : t(null);
        };
      }
      if (null != t)
        return (
          (t.current = e = e()),
          function () {
            t.current = null;
          }
        );
    }
    function aX(e, t, n) {
      (n = null != n ? n.concat([e]) : null), aU(4, 4, aG.bind(null, t, e), n);
    }
    function aK() {}
    function aZ(e, t) {
      var n = ad();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== t && an(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function aJ(e, t) {
      var n = ad();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      if (null !== t && an(t, r[1])) return r[0];
      if (((r = e()), i6)) {
        eg(!0);
        try {
          e();
        } finally {
          eg(!1);
        }
      }
      return (n.memoizedState = [r, t]), r;
    }
    function a0(e, t, n) {
      return void 0 === n || (0 != (0x40000000 & i0) && 0 == (261930 & lW))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = sd()), (i1.lanes |= e), (lZ |= e), n);
    }
    function a1(e, t, n, r) {
      return nA(n, t)
        ? n
        : null !== iF.current
        ? (nA((e = a0(e, n, r)), t) || (oP = !0), e)
        : 0 == (42 & i0) || (0 != (0x40000000 & i0) && 0 == (261930 & lW))
        ? ((oP = !0), (e.memoizedState = n))
        : ((e = sd()), (i1.lanes |= e), (lZ |= e), t);
    }
    function a2(e, t, n, r, i) {
      var a = D.p;
      D.p = 0 !== a && 8 > a ? a : 8;
      var o = z.T,
        l = {};
      (z.T = l), oi(e, !1, t, n);
      try {
        var s = i(),
          u = z.S;
        if (
          (null !== u && u(l, s),
          null !== s && "object" == typeof s && "function" == typeof s.then)
        ) {
          var c,
            d,
            f =
              ((c = []),
              (d = {
                status: "pending",
                value: null,
                reason: null,
                then: function (e) {
                  c.push(e);
                },
              }),
              s.then(
                function () {
                  (d.status = "fulfilled"), (d.value = r);
                  for (var e = 0; e < c.length; e++) (0, c[e])(r);
                },
                function (e) {
                  for (
                    d.status = "rejected", d.reason = e, e = 0;
                    e < c.length;
                    e++
                  )
                    (0, c[e])(void 0);
                }
              ),
              d);
          or(e, t, f, sc());
        } else or(e, t, r, sc());
      } catch (n) {
        or(e, t, { then: function () {}, status: "rejected", reason: n }, sc());
      } finally {
        (D.p = a),
          null !== o && null !== l.types && (o.types = l.types),
          (z.T = o);
      }
    }
    function a3() {}
    function a4(e, t, n, r) {
      if (5 !== e.tag) throw Error(l(476));
      var i = a5(e).queue;
      a2(
        e,
        i,
        t,
        _,
        null === n
          ? a3
          : function () {
              return a6(e), n(r);
            }
      );
    }
    function a5(e) {
      var t = e.memoizedState;
      if (null !== t) return t;
      var n = {};
      return (
        ((t = {
          memoizedState: _,
          baseState: _,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ag,
            lastRenderedState: _,
          },
          next: null,
        }).next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ag,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        null !== (e = e.alternate) && (e.memoizedState = t),
        t
      );
    }
    function a6(e) {
      var t = a5(e);
      null === t.next && (t = e.alternate.memoizedState),
        or(e, t.next.queue, {}, sc());
    }
    function a8() {
      return rJ(ca);
    }
    function a9() {
      return ad().memoizedState;
    }
    function a7() {
      return ad().memoizedState;
    }
    function oe(e) {
      for (var t = e.return; null !== t; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = sc(),
              r = iR(t, (e = iM(n)), n);
            null !== r && (sf(r, t, n), iL(r, t, n)),
              (t = { cache: r6() }),
              (e.payload = t);
            return;
        }
        t = t.return;
      }
    }
    function ot(e, t, n) {
      var r = sc();
      (n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        oa(e)
          ? oo(t, n)
          : null !== (n = n7(e, t, n, r)) && (sf(n, e, r), ol(n, t, r));
    }
    function on(e, t, n) {
      or(e, t, n, sc());
    }
    function or(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (oa(e)) oo(t, i);
      else {
        var a = e.alternate;
        if (
          0 === e.lanes &&
          (null === a || 0 === a.lanes) &&
          null !== (a = t.lastRenderedReducer)
        )
          try {
            var o = t.lastRenderedState,
              l = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = l), nA(l, o)))
              return n9(e, t, i, 0), null === l$ && n8(), !1;
          } catch (e) {
          } finally {
          }
        if (null !== (n = n7(e, t, i, r))) return sf(n, e, r), ol(n, t, r), !0;
      }
      return !1;
    }
    function oi(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: s3(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        oa(e))
      ) {
        if (t) throw Error(l(479));
      } else null !== (t = n7(e, n, r, 2)) && sf(t, e, 2);
    }
    function oa(e) {
      var t = e.alternate;
      return e === i1 || (null !== t && t === i1);
    }
    function oo(e, t) {
      i5 = i4 = !0;
      var n = e.pending;
      null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
    }
    function ol(e, t, n) {
      if (0 != (4194048 & n)) {
        var r = t.lanes;
        (r &= e.pendingLanes), (t.lanes = n |= r), eA(e, n);
      }
    }
    var os = {
      readContext: rJ,
      use: ah,
      useCallback: at,
      useContext: at,
      useEffect: at,
      useImperativeHandle: at,
      useLayoutEffect: at,
      useInsertionEffect: at,
      useMemo: at,
      useReducer: at,
      useRef: at,
      useState: at,
      useDebugValue: at,
      useDeferredValue: at,
      useTransition: at,
      useSyncExternalStore: at,
      useId: at,
      useHostTransitionStatus: at,
      useFormState: at,
      useActionState: at,
      useOptimistic: at,
      useMemoCache: at,
      useCacheRefresh: at,
    };
    os.useEffectEvent = at;
    var ou = {
        readContext: rJ,
        use: ah,
        useCallback: function (e, t) {
          return (ac().memoizedState = [e, void 0 === t ? null : t]), e;
        },
        useContext: rJ,
        useEffect: aW,
        useImperativeHandle: function (e, t, n) {
          (n = null != n ? n.concat([e]) : null),
            a$(4194308, 4, aG.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
          return a$(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          a$(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = ac();
          t = void 0 === t ? null : t;
          var r = e();
          if (i6) {
            eg(!0);
            try {
              e();
            } finally {
              eg(!1);
            }
          }
          return (n.memoizedState = [r, t]), r;
        },
        useReducer: function (e, t, n) {
          var r = ac();
          if (void 0 !== n) {
            var i = n(t);
            if (i6) {
              eg(!0);
              try {
                n(t);
              } finally {
                eg(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (r.queue = e =
              {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: i,
              }),
            (e = e.dispatch = ot.bind(null, i1, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          return (ac().memoizedState = { current: e });
        },
        useState: function (e) {
          var t = (e = aP(e)).queue,
            n = on.bind(null, i1, t);
          return (t.dispatch = n), [e.memoizedState, n];
        },
        useDebugValue: aK,
        useDeferredValue: function (e, t) {
          return a0(ac(), e, t);
        },
        useTransition: function () {
          var e = aP(!1);
          return (
            (e = a2.bind(null, i1, e.queue, !0, !1)),
            (ac().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, n) {
          var r = i1,
            i = ac();
          if (rR) {
            if (void 0 === n) throw Error(l(407));
            n = n();
          } else {
            if (((n = t()), null === l$)) throw Error(l(349));
            0 != (127 & lW) || aw(r, t, n);
          }
          i.memoizedState = n;
          var a = { value: n, getSnapshot: t };
          return (
            (i.queue = a),
            aW(aS.bind(null, r, a, e), [e]),
            (r.flags |= 2048),
            aF(9, { destroy: void 0 }, ak.bind(null, r, a, n, t), null),
            n
          );
        },
        useId: function () {
          var e = ac(),
            t = l$.identifierPrefix;
          if (rR) {
            var n = rE,
              r = rS;
            (t =
              "_" +
              t +
              "R_" +
              (n = (r & ~(1 << (32 - ey(r) - 1))).toString(32) + n)),
              0 < (n = i8++) && (t += "H" + n.toString(32)),
              (t += "_");
          } else t = "_" + t + "r_" + (n = ae++).toString(32) + "_";
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: a8,
        useFormState: aD,
        useActionState: aD,
        useOptimistic: function (e) {
          var t = ac();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = n),
            (t = oi.bind(null, i1, !0, n)),
            (n.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: am,
        useCacheRefresh: function () {
          return (ac().memoizedState = oe.bind(null, i1));
        },
        useEffectEvent: function (e) {
          var t = ac(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (0 != (2 & lB)) throw Error(l(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      oc = {
        readContext: rJ,
        use: ah,
        useCallback: aZ,
        useContext: rJ,
        useEffect: aH,
        useImperativeHandle: aX,
        useInsertionEffect: aQ,
        useLayoutEffect: aq,
        useMemo: aJ,
        useReducer: ay,
        useRef: aB,
        useState: function () {
          return ay(ag);
        },
        useDebugValue: aK,
        useDeferredValue: function (e, t) {
          return a1(ad(), i2.memoizedState, e, t);
        },
        useTransition: function () {
          var e = ay(ag)[0],
            t = ad().memoizedState;
          return ["boolean" == typeof e ? e : ap(e), t];
        },
        useSyncExternalStore: ax,
        useId: a9,
        useHostTransitionStatus: a8,
        useFormState: a_,
        useActionState: a_,
        useOptimistic: function (e, t) {
          return aT(ad(), i2, e, t);
        },
        useMemoCache: am,
        useCacheRefresh: a7,
      };
    oc.useEffectEvent = aY;
    var od = {
      readContext: rJ,
      use: ah,
      useCallback: aZ,
      useContext: rJ,
      useEffect: aH,
      useImperativeHandle: aX,
      useInsertionEffect: aQ,
      useLayoutEffect: aq,
      useMemo: aJ,
      useReducer: ab,
      useRef: aB,
      useState: function () {
        return ab(ag);
      },
      useDebugValue: aK,
      useDeferredValue: function (e, t) {
        var n = ad();
        return null === i2 ? a0(n, e, t) : a1(n, i2.memoizedState, e, t);
      },
      useTransition: function () {
        var e = ab(ag)[0],
          t = ad().memoizedState;
        return ["boolean" == typeof e ? e : ap(e), t];
      },
      useSyncExternalStore: ax,
      useId: a9,
      useHostTransitionStatus: a8,
      useFormState: aI,
      useActionState: aI,
      useOptimistic: function (e, t) {
        var n = ad();
        return null !== i2
          ? aT(n, i2, e, t)
          : ((n.baseState = e), [e, n.queue.dispatch]);
      },
      useMemoCache: am,
      useCacheRefresh: a7,
    };
    function of(e, t, n, r) {
      (n = null == (n = n(r, (t = e.memoizedState))) ? t : h({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n);
    }
    od.useEffectEvent = aY;
    var op = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = sc(),
          i = iM(r);
        (i.payload = t),
          null != n && (i.callback = n),
          null !== (t = iR(e, i, r)) && (sf(t, e, r), iL(t, e, r));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = sc(),
          i = iM(r);
        (i.tag = 1),
          (i.payload = t),
          null != n && (i.callback = n),
          null !== (t = iR(e, i, r)) && (sf(t, e, r), iL(t, e, r));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = sc(),
          r = iM(n);
        (r.tag = 2),
          null != t && (r.callback = t),
          null !== (t = iR(e, r, n)) && (sf(t, e, n), iL(t, e, n));
      },
    };
    function oh(e, t, n, r, i, a, o) {
      return "function" == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, a, o)
        : !t.prototype ||
            !t.prototype.isPureReactComponent ||
            !nM(n, r) ||
            !nM(i, a);
    }
    function om(e, t, n, r) {
      (e = t.state),
        "function" == typeof t.componentWillReceiveProps &&
          t.componentWillReceiveProps(n, r),
        "function" == typeof t.UNSAFE_componentWillReceiveProps &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && op.enqueueReplaceState(t, t.state, null);
    }
    function og(e, t) {
      var n = t;
      if ("ref" in t) for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = h({}, n)), e))
          void 0 === n[i] && (n[i] = e[i]);
      return n;
    }
    function oy(e) {
      n3(e);
    }
    function ov(e) {
      console.error(e);
    }
    function ob(e) {
      n3(e);
    }
    function ox(e, t) {
      try {
        (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function ow(e, t, n) {
      try {
        (0,
        e.onCaughtError)(n.value, { componentStack: n.stack, errorBoundary: 1 === t.tag ? t.stateNode : null });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function ok(e, t, n) {
      return (
        ((n = iM(n)).tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          ox(e, t);
        }),
        n
      );
    }
    function oS(e) {
      return ((e = iM(e)).tag = 3), e;
    }
    function oE(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if ("function" == typeof i) {
        var a = r.value;
        (e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            ow(t, n, r);
          });
      }
      var o = n.stateNode;
      null !== o &&
        "function" == typeof o.componentDidCatch &&
        (e.callback = function () {
          ow(t, n, r),
            "function" != typeof i &&
              (null === se ? (se = new Set([this])) : se.add(this));
          var e = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: null !== e ? e : "",
          });
        });
    }
    var oC = Error(l(461)),
      oP = !1;
    function oT(e, t, n, r) {
      t.child = null === e ? iT(t, null, n, r) : iP(t, e.child, n, r);
    }
    function oN(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if ("ref" in r) {
        var o = {};
        for (var l in r) "ref" !== l && (o[l] = r[l]);
      } else o = r;
      return (rZ(t), (r = ar(e, t, n, o, a, i)), (l = al()), null === e || oP)
        ? (rR && l && rT(t), (t.flags |= 1), oT(e, t, r, i), t.child)
        : (as(e, t, i), oK(e, t, i));
    }
    function oj(e, t, n, r, i) {
      if (null === e) {
        var a = n.type;
        return "function" != typeof a ||
          ro(a) ||
          void 0 !== a.defaultProps ||
          null !== n.compare
          ? (((e = ru(n.type, null, r, t, t.mode, i)).ref = t.ref),
            (e.return = t),
            (t.child = e))
          : ((t.tag = 15), (t.type = a), oA(e, t, a, r, i));
      }
      if (((a = e.child), !oZ(e, i))) {
        var o = a.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : nM)(o, r) && e.ref === t.ref)
          return oK(e, t, i);
      }
      return (
        (t.flags |= 1),
        ((e = rl(a, r)).ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function oA(e, t, n, r, i) {
      if (null !== e) {
        var a = e.memoizedProps;
        if (nM(a, r) && e.ref === t.ref)
          if (((oP = !1), (t.pendingProps = r = a), !oZ(e, i)))
            return (t.lanes = e.lanes), oK(e, t, i);
          else 0 != (131072 & e.flags) && (oP = !0);
      }
      return oO(e, t, n, r, i);
    }
    function oM(e, t, n, r) {
      var i = r.children,
        a = null !== e ? e.memoizedState : null;
      if (
        (null === e &&
          null === t.stateNode &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        "hidden" === r.mode)
      ) {
        if (0 != (128 & t.flags)) {
          if (((a = null !== a ? a.baseLanes | n : n), null !== e)) {
            for (r = t.child = e.child, i = 0; null !== r; )
              (i = i | r.lanes | r.childLanes), (r = r.sibling);
            r = i & ~a;
          } else (r = 0), (t.child = null);
          return oL(e, t, a, n, r);
        }
        if (0 == (0x20000000 & n))
          return (
            (r = t.lanes = 0x20000000),
            oL(e, t, null !== a ? a.baseLanes | n : n, n, r)
          );
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          null !== e && il(t, null !== a ? a.cachePool : null),
          null !== a ? i$(t, a) : iU(),
          iG(t);
      } else null !== a ? (il(t, a.cachePool), i$(t, a), iX(), (t.memoizedState = null)) : (null !== e && il(t, null), iU(), iX());
      return oT(e, t, i, n), t.child;
    }
    function oR(e, t) {
      return (
        (null !== e && 22 === e.tag) ||
          null !== t.stateNode ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function oL(e, t, n, r, i) {
      var a = io();
      return (
        (t.memoizedState = {
          baseLanes: n,
          cachePool: (a =
            null === a ? null : { parent: r5._currentValue, pool: a }),
        }),
        null !== e && il(t, null),
        iU(),
        iG(t),
        null !== e && rX(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function oz(e, t) {
      return (
        ((t = oY({ mode: t.mode, children: t.children }, e.mode)).ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function oD(e, t, n) {
      return (
        iP(t, e.child, null, n),
        (e = oz(t, t.pendingProps)),
        (e.flags |= 2),
        iK(t),
        (t.memoizedState = null),
        e
      );
    }
    function o_(e, t) {
      var n = t.ref;
      if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
      else {
        if ("function" != typeof n && "object" != typeof n) throw Error(l(284));
        (null === e || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function oO(e, t, n, r, i) {
      return (rZ(t),
      (n = ar(e, t, n, r, void 0, i)),
      (r = al()),
      null === e || oP)
        ? (rR && r && rT(t), (t.flags |= 1), oT(e, t, n, i), t.child)
        : (as(e, t, i), oK(e, t, i));
    }
    function oV(e, t, n, r, i, a) {
      return (rZ(t),
      (t.updateQueue = null),
      (n = aa(t, r, n, i)),
      ai(e),
      (r = al()),
      null === e || oP)
        ? (rR && r && rT(t), (t.flags |= 1), oT(e, t, n, a), t.child)
        : (as(e, t, a), oK(e, t, a));
    }
    function oI(e, t, n, r, i) {
      if ((rZ(t), null === t.stateNode)) {
        var a = rr,
          o = n.contextType;
        "object" == typeof o && null !== o && (a = rJ(o)),
          (t.memoizedState =
            null !== (a = new n(r, a)).state && void 0 !== a.state
              ? a.state
              : null),
          (a.updater = op),
          (t.stateNode = a),
          (a._reactInternals = t),
          ((a = t.stateNode).props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          ij(t),
          (o = n.contextType),
          (a.context = "object" == typeof o && null !== o ? rJ(o) : rr),
          (a.state = t.memoizedState),
          "function" == typeof (o = n.getDerivedStateFromProps) &&
            (of(t, n, o, r), (a.state = t.memoizedState)),
          "function" == typeof n.getDerivedStateFromProps ||
            "function" == typeof a.getSnapshotBeforeUpdate ||
            ("function" != typeof a.UNSAFE_componentWillMount &&
              "function" != typeof a.componentWillMount) ||
            ((o = a.state),
            "function" == typeof a.componentWillMount && a.componentWillMount(),
            "function" == typeof a.UNSAFE_componentWillMount &&
              a.UNSAFE_componentWillMount(),
            o !== a.state && op.enqueueReplaceState(a, a.state, null),
            iO(t, r, a, i),
            i_(),
            (a.state = t.memoizedState)),
          "function" == typeof a.componentDidMount && (t.flags |= 4194308),
          (r = !0);
      } else if (null === e) {
        a = t.stateNode;
        var l = t.memoizedProps,
          s = og(n, l);
        a.props = s;
        var u = a.context,
          c = n.contextType;
        (o = rr), "object" == typeof c && null !== c && (o = rJ(c));
        var d = n.getDerivedStateFromProps;
        (c =
          "function" == typeof d ||
          "function" == typeof a.getSnapshotBeforeUpdate),
          (l = t.pendingProps !== l),
          c ||
            ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
              "function" != typeof a.componentWillReceiveProps) ||
            ((l || u !== o) && om(t, a, r, o)),
          (iN = !1);
        var f = t.memoizedState;
        (a.state = f),
          iO(t, r, a, i),
          i_(),
          (u = t.memoizedState),
          l || f !== u || iN
            ? ("function" == typeof d &&
                (of(t, n, d, r), (u = t.memoizedState)),
              (s = iN || oh(t, n, s, r, f, u, o))
                ? (c ||
                    ("function" != typeof a.UNSAFE_componentWillMount &&
                      "function" != typeof a.componentWillMount) ||
                    ("function" == typeof a.componentWillMount &&
                      a.componentWillMount(),
                    "function" == typeof a.UNSAFE_componentWillMount &&
                      a.UNSAFE_componentWillMount()),
                  "function" == typeof a.componentDidMount &&
                    (t.flags |= 4194308))
                : ("function" == typeof a.componentDidMount &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = u)),
              (a.props = r),
              (a.state = u),
              (a.context = o),
              (r = s))
            : ("function" == typeof a.componentDidMount && (t.flags |= 4194308),
              (r = !1));
      } else {
        (a = t.stateNode),
          iA(e, t),
          (c = og(n, (o = t.memoizedProps))),
          (a.props = c),
          (d = t.pendingProps),
          (f = a.context),
          (u = n.contextType),
          (s = rr),
          "object" == typeof u && null !== u && (s = rJ(u)),
          (u =
            "function" == typeof (l = n.getDerivedStateFromProps) ||
            "function" == typeof a.getSnapshotBeforeUpdate) ||
            ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
              "function" != typeof a.componentWillReceiveProps) ||
            ((o !== d || f !== s) && om(t, a, r, s)),
          (iN = !1),
          (f = t.memoizedState),
          (a.state = f),
          iO(t, r, a, i),
          i_();
        var p = t.memoizedState;
        o !== d ||
        f !== p ||
        iN ||
        (null !== e && null !== e.dependencies && rK(e.dependencies))
          ? ("function" == typeof l && (of(t, n, l, r), (p = t.memoizedState)),
            (c =
              iN ||
              oh(t, n, c, r, f, p, s) ||
              (null !== e && null !== e.dependencies && rK(e.dependencies)))
              ? (u ||
                  ("function" != typeof a.UNSAFE_componentWillUpdate &&
                    "function" != typeof a.componentWillUpdate) ||
                  ("function" == typeof a.componentWillUpdate &&
                    a.componentWillUpdate(r, p, s),
                  "function" == typeof a.UNSAFE_componentWillUpdate &&
                    a.UNSAFE_componentWillUpdate(r, p, s)),
                "function" == typeof a.componentDidUpdate && (t.flags |= 4),
                "function" == typeof a.getSnapshotBeforeUpdate &&
                  (t.flags |= 1024))
              : ("function" != typeof a.componentDidUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof a.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = s),
            (r = c))
          : ("function" != typeof a.componentDidUpdate ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            "function" != typeof a.getSnapshotBeforeUpdate ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        o_(e, t),
        (r = 0 != (128 & t.flags)),
        a || r
          ? ((a = t.stateNode),
            (n =
              r && "function" != typeof n.getDerivedStateFromError
                ? null
                : a.render()),
            (t.flags |= 1),
            null !== e && r
              ? ((t.child = iP(t, e.child, null, i)),
                (t.child = iP(t, null, n, i)))
              : oT(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = oK(e, t, i)),
        e
      );
    }
    function oF(e, t, n, r) {
      return rF(), (t.flags |= 256), oT(e, t, n, r), t.child;
    }
    var oB = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function o$(e) {
      return { baseLanes: e, cachePool: is() };
    }
    function oU(e, t, n) {
      return (e = null !== e ? e.childLanes & ~n : 0), t && (e |= l1), e;
    }
    function oW(e, t, n) {
      var r,
        i = t.pendingProps,
        a = !1,
        o = 0 != (128 & t.flags);
      if (
        ((r = o) ||
          (r =
            (null === e || null !== e.memoizedState) && 0 != (2 & iZ.current)),
        r && ((a = !0), (t.flags &= -129)),
        (r = 0 != (32 & t.flags)),
        (t.flags &= -33),
        null === e)
      ) {
        if (rR) {
          if (
            (a ? iQ(t) : iX(),
            (e = rM)
              ? null !==
                  (e = null !== (e = uD(e, rz)) && "&" !== e.data ? e : null) &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: null !== rk ? { id: rS, overflow: rE } : null,
                  retryLane: 0x20000000,
                  hydrationErrors: null,
                }),
                ((n = rf(e)).return = t),
                (t.child = n),
                (rA = t),
                (rM = null))
              : (e = null),
            null === e)
          )
            throw r_(t);
          return uO(e) ? (t.lanes = 32) : (t.lanes = 0x20000000), null;
        }
        var s = i.children;
        return ((i = i.fallback), a)
          ? (iX(),
            (s = oY({ mode: "hidden", children: s }, (a = t.mode))),
            (i = rc(i, a, n, null)),
            (s.return = t),
            (i.return = t),
            (s.sibling = i),
            (t.child = s),
            ((i = t.child).memoizedState = o$(n)),
            (i.childLanes = oU(e, r, n)),
            (t.memoizedState = oB),
            oR(null, i))
          : (iQ(t), oH(t, s));
      }
      var u = e.memoizedState;
      if (null !== u && null !== (s = u.dehydrated)) {
        if (o)
          256 & t.flags
            ? (iQ(t), (t.flags &= -257), (t = oQ(e, t, n)))
            : null !== t.memoizedState
            ? (iX(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (iX(),
              (s = i.fallback),
              (a = t.mode),
              (i = oY({ mode: "visible", children: i.children }, a)),
              (s = rc(s, a, n, null)),
              (s.flags |= 2),
              (i.return = t),
              (s.return = t),
              (i.sibling = s),
              (t.child = i),
              iP(t, e.child, null, n),
              ((i = t.child).memoizedState = o$(n)),
              (i.childLanes = oU(e, r, n)),
              (t.memoizedState = oB),
              (t = oR(null, i)));
        else if ((iQ(t), uO(s))) {
          if ((r = s.nextSibling && s.nextSibling.dataset)) var c = r.dgst;
          (r = c),
            ((i = Error(l(419))).stack = ""),
            (i.digest = r),
            r$({ value: i, source: null, stack: null }),
            (t = oQ(e, t, n));
        } else if (
          (oP || rX(e, t, n, !1), (r = 0 != (n & e.childLanes)), oP || r)
        ) {
          if (null !== (r = l$) && 0 !== (i = eM(r, n)) && i !== u.retryLane)
            throw ((u.retryLane = i), re(e, i), sf(r, e, i), oC);
          u_(s) || sS(), (t = oQ(e, t, n));
        } else
          u_(s)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = u.treeContext),
              (rM = uV(s.nextSibling)),
              (rA = t),
              (rR = !0),
              (rL = null),
              (rz = !1),
              null !== e && rj(t, e),
              (t = oH(t, i.children)),
              (t.flags |= 4096));
        return t;
      }
      return a
        ? (iX(),
          (s = i.fallback),
          (a = t.mode),
          (c = (u = e.child).sibling),
          ((i = rl(u, { mode: "hidden", children: i.children })).subtreeFlags =
            0x3e00000 & u.subtreeFlags),
          null !== c
            ? (s = rl(c, s))
            : ((s = rc(s, a, n, null)), (s.flags |= 2)),
          (s.return = t),
          (i.return = t),
          (i.sibling = s),
          (t.child = i),
          oR(null, i),
          (i = t.child),
          null === (s = e.child.memoizedState)
            ? (s = o$(n))
            : (null !== (a = s.cachePool)
                ? ((u = r5._currentValue),
                  (a = a.parent !== u ? { parent: u, pool: u } : a))
                : (a = is()),
              (s = { baseLanes: s.baseLanes | n, cachePool: a })),
          (i.memoizedState = s),
          (i.childLanes = oU(e, r, n)),
          (t.memoizedState = oB),
          oR(e.child, i))
        : (iQ(t),
          (e = (n = e.child).sibling),
          ((n = rl(n, { mode: "visible", children: i.children })).return = t),
          (n.sibling = null),
          null !== e &&
            (null === (r = t.deletions)
              ? ((t.deletions = [e]), (t.flags |= 16))
              : r.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function oH(e, t) {
      return (
        ((t = oY({ mode: "visible", children: t }, e.mode)).return = e),
        (e.child = t)
      );
    }
    function oY(e, t) {
      return ((e = ra(22, e, null, t)).lanes = 0), e;
    }
    function oQ(e, t, n) {
      return (
        iP(t, e.child, null, n),
        (e = oH(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function oq(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      null !== r && (r.lanes |= t), rq(e.return, t, n);
    }
    function oG(e, t, n, r, i, a) {
      var o = e.memoizedState;
      null === o
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function oX(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = iZ.current,
        l = 0 != (2 & o);
      if (
        (l ? ((o = (1 & o) | 2), (t.flags |= 128)) : (o &= 1),
        B(iZ, o),
        oT(e, t, r, n),
        (r = rR ? rb : 0),
        !l && null !== e && 0 != (128 & e.flags))
      )
        e: for (e = t.child; null !== e; ) {
          if (13 === e.tag) null !== e.memoizedState && oq(e, n, t);
          else if (19 === e.tag) oq(e, n, t);
          else if (null !== e.child) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break;
          for (; null === e.sibling; ) {
            if (null === e.return || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; null !== n; )
            null !== (e = n.alternate) && null === iJ(e) && (i = n),
              (n = n.sibling);
          null === (n = i)
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
            oG(t, !1, i, n, a, r);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (n = null, i = t.child, t.child = null; null !== i; ) {
            if (null !== (e = i.alternate) && null === iJ(e)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = n), (n = i), (i = e);
          }
          oG(t, !0, n, null, a, r);
          break;
        case "together":
          oG(t, !1, null, null, void 0, r);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function oK(e, t, n) {
      if (
        (null !== e && (t.dependencies = e.dependencies),
        (lZ |= t.lanes),
        0 == (n & t.childLanes))
      ) {
        if (null === e) return null;
        else if ((rX(e, t, n, !1), 0 == (n & t.childLanes))) return null;
      }
      if (null !== e && t.child !== e.child) throw Error(l(153));
      if (null !== t.child) {
        for (
          n = rl((e = t.child), e.pendingProps), t.child = n, n.return = t;
          null !== e.sibling;

        )
          (e = e.sibling), ((n = n.sibling = rl(e, e.pendingProps)).return = t);
        n.sibling = null;
      }
      return t.child;
    }
    function oZ(e, t) {
      return 0 != (e.lanes & t) || !!(null !== (e = e.dependencies) && rK(e));
    }
    function oJ(e, t, n) {
      if (null !== e)
        if (e.memoizedProps !== t.pendingProps) oP = !0;
        else {
          if (!oZ(e, n) && 0 == (128 & t.flags))
            return (
              (oP = !1),
              (function (e, t, n) {
                switch (t.tag) {
                  case 3:
                    Y(t, t.stateNode.containerInfo),
                      rY(t, r5, e.memoizedState.cache),
                      rF();
                    break;
                  case 27:
                  case 5:
                    q(t);
                    break;
                  case 4:
                    Y(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    rY(t, t.type, t.memoizedProps.value);
                    break;
                  case 31:
                    if (null !== t.memoizedState)
                      return (t.flags |= 128), iq(t), null;
                    break;
                  case 13:
                    var r = t.memoizedState;
                    if (null !== r) {
                      if (null !== r.dehydrated)
                        return iQ(t), (t.flags |= 128), null;
                      if (0 != (n & t.child.childLanes)) return oW(e, t, n);
                      return (
                        iQ(t), null !== (e = oK(e, t, n)) ? e.sibling : null
                      );
                    }
                    iQ(t);
                    break;
                  case 19:
                    var i = 0 != (128 & e.flags);
                    if (
                      ((r = 0 != (n & t.childLanes)) ||
                        (rX(e, t, n, !1), (r = 0 != (n & t.childLanes))),
                      i)
                    ) {
                      if (r) return oX(e, t, n);
                      t.flags |= 128;
                    }
                    if (
                      (null !== (i = t.memoizedState) &&
                        ((i.rendering = null),
                        (i.tail = null),
                        (i.lastEffect = null)),
                      B(iZ, iZ.current),
                      !r)
                    )
                      return null;
                    break;
                  case 22:
                    return (t.lanes = 0), oM(e, t, n, t.pendingProps);
                  case 24:
                    rY(t, r5, e.memoizedState.cache);
                }
                return oK(e, t, n);
              })(e, t, n)
            );
          oP = 0 != (131072 & e.flags);
        }
      else (oP = !1), rR && 0 != (1048576 & t.flags) && rP(t, rb, t.index);
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          e: {
            var r = t.pendingProps;
            if (((e = ig(t.elementType)), (t.type = e), "function" == typeof e))
              ro(e)
                ? ((r = og(e, r)), (t.tag = 1), (t = oI(null, t, e, r, n)))
                : ((t.tag = 0), (t = oO(null, t, e, r, n)));
            else {
              if (null != e) {
                var i = e.$$typeof;
                if (i === S) {
                  (t.tag = 11), (t = oN(null, t, e, r, n));
                  break e;
                }
                if (i === P) {
                  (t.tag = 14), (t = oj(null, t, e, r, n));
                  break e;
                }
              }
              throw Error(
                l(
                  306,
                  (t =
                    (function e(t) {
                      if (null == t) return null;
                      if ("function" == typeof t)
                        return t.$$typeof === R
                          ? null
                          : t.displayName || t.name || null;
                      if ("string" == typeof t) return t;
                      switch (t) {
                        case v:
                          return "Fragment";
                        case x:
                          return "Profiler";
                        case b:
                          return "StrictMode";
                        case E:
                          return "Suspense";
                        case C:
                          return "SuspenseList";
                        case N:
                          return "Activity";
                      }
                      if ("object" == typeof t)
                        switch (t.$$typeof) {
                          case y:
                            return "Portal";
                          case k:
                            return t.displayName || "Context";
                          case w:
                            return (
                              (t._context.displayName || "Context") +
                              ".Consumer"
                            );
                          case S:
                            var n = t.render;
                            return (
                              (t = t.displayName) ||
                                (t =
                                  "" !== (t = n.displayName || n.name || "")
                                    ? "ForwardRef(" + t + ")"
                                    : "ForwardRef"),
                              t
                            );
                          case P:
                            return null !== (n = t.displayName || null)
                              ? n
                              : e(t.type) || "Memo";
                          case T:
                            (n = t._payload), (t = t._init);
                            try {
                              return e(t(n));
                            } catch (e) {}
                        }
                      return null;
                    })(e) || e),
                  ""
                )
              );
            }
          }
          return t;
        case 0:
          return oO(e, t, t.type, t.pendingProps, n);
        case 1:
          return (i = og((r = t.type), t.pendingProps)), oI(e, t, r, i, n);
        case 3:
          e: {
            if ((Y(t, t.stateNode.containerInfo), null === e))
              throw Error(l(387));
            r = t.pendingProps;
            var a = t.memoizedState;
            (i = a.element), iA(e, t), iO(t, r, null, n);
            var o = t.memoizedState;
            if (
              (rY(t, r5, (r = o.cache)),
              r !== a.cache && rG(t, [r5], n, !0),
              i_(),
              (r = o.element),
              a.isDehydrated)
            )
              if (
                ((a = { element: r, isDehydrated: !1, cache: o.cache }),
                (t.updateQueue.baseState = a),
                (t.memoizedState = a),
                256 & t.flags)
              ) {
                t = oF(e, t, r, n);
                break e;
              } else if (r !== i) {
                r$((i = rm(Error(l(424)), t))), (t = oF(e, t, r, n));
                break e;
              } else
                for (
                  rM = uV(
                    (e =
                      9 === (e = t.stateNode.containerInfo).nodeType
                        ? e.body
                        : "HTML" === e.nodeName
                        ? e.ownerDocument.body
                        : e).firstChild
                  ),
                    rA = t,
                    rR = !0,
                    rL = null,
                    rz = !0,
                    n = iT(t, null, r, n),
                    t.child = n;
                  n;

                )
                  (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
            else {
              if ((rF(), r === i)) {
                t = oK(e, t, n);
                break e;
              }
              oT(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            o_(e, t),
            null === e
              ? (n = uX(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : rR ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  ((r = uw(W.current).createElement(n))[eO] = t),
                  (r[eV] = e),
                  uy(r, n, e),
                  eX(r),
                  (t.stateNode = r))
              : (t.memoizedState = uX(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState
                )),
            null
          );
        case 27:
          return (
            q(t),
            null === e &&
              rR &&
              ((r = t.stateNode = u$(t.type, t.pendingProps, W.current)),
              (rA = t),
              (rz = !0),
              (i = rM),
              uM(t.type) ? ((uI = i), (rM = uV(r.firstChild))) : (rM = i)),
            oT(e, t, t.pendingProps.children, n),
            o_(e, t),
            null === e && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            null === e &&
              rR &&
              ((i = r = rM) &&
                (null !==
                (r = (function (e, t, n, r) {
                  for (; 1 === e.nodeType; ) {
                    if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                      if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type))
                        break;
                    } else if (r) {
                      if (!e[eW])
                        switch (t) {
                          case "meta":
                            if (!e.hasAttribute("itemprop")) break;
                            return e;
                          case "link":
                            if (
                              ("stylesheet" === (i = e.getAttribute("rel")) &&
                                e.hasAttribute("data-precedence")) ||
                              i !== n.rel ||
                              e.getAttribute("href") !==
                                (null == n.href || "" === n.href
                                  ? null
                                  : n.href) ||
                              e.getAttribute("crossorigin") !==
                                (null == n.crossOrigin
                                  ? null
                                  : n.crossOrigin) ||
                              e.getAttribute("title") !==
                                (null == n.title ? null : n.title)
                            )
                              break;
                            return e;
                          case "style":
                            if (e.hasAttribute("data-precedence")) break;
                            return e;
                          case "script":
                            if (
                              ((i = e.getAttribute("src")) !==
                                (null == n.src ? null : n.src) ||
                                e.getAttribute("type") !==
                                  (null == n.type ? null : n.type) ||
                                e.getAttribute("crossorigin") !==
                                  (null == n.crossOrigin
                                    ? null
                                    : n.crossOrigin)) &&
                              i &&
                              e.hasAttribute("async") &&
                              !e.hasAttribute("itemprop")
                            )
                              break;
                            return e;
                          default:
                            return e;
                        }
                    } else {
                      if ("input" !== t || "hidden" !== e.type) return e;
                      var i = null == n.name ? null : "" + n.name;
                      if ("hidden" === n.type && e.getAttribute("name") === i)
                        return e;
                    }
                    if (null === (e = uV(e.nextSibling))) break;
                  }
                  return null;
                })(r, t.type, t.pendingProps, rz))
                  ? ((t.stateNode = r),
                    (rA = t),
                    (rM = uV(r.firstChild)),
                    (rz = !1),
                    (i = !0))
                  : (i = !1)),
              i || r_(t)),
            q(t),
            (i = t.type),
            (a = t.pendingProps),
            (o = null !== e ? e.memoizedProps : null),
            (r = a.children),
            uE(i, a) ? (r = null) : null !== o && uE(i, o) && (t.flags |= 32),
            null !== t.memoizedState &&
              (ca._currentValue = i = ar(e, t, ao, null, null, n)),
            o_(e, t),
            oT(e, t, r, n),
            t.child
          );
        case 6:
          return (
            null === e &&
              rR &&
              ((e = n = rM) &&
                (null !==
                (n = (function (e, t, n) {
                  if ("" === t) return null;
                  for (; 3 !== e.nodeType; )
                    if (
                      ((1 !== e.nodeType ||
                        "INPUT" !== e.nodeName ||
                        "hidden" !== e.type) &&
                        !n) ||
                      null === (e = uV(e.nextSibling))
                    )
                      return null;
                  return e;
                })(n, t.pendingProps, rz))
                  ? ((t.stateNode = n), (rA = t), (rM = null), (e = !0))
                  : (e = !1)),
              e || r_(t)),
            null
          );
        case 13:
          return oW(e, t, n);
        case 4:
          return (
            Y(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            null === e ? (t.child = iP(t, null, r, n)) : oT(e, t, r, n),
            t.child
          );
        case 11:
          return oN(e, t, t.type, t.pendingProps, n);
        case 7:
          return oT(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
          return oT(e, t, t.pendingProps.children, n), t.child;
        case 10:
          return (
            (r = t.pendingProps),
            rY(t, t.type, r.value),
            oT(e, t, r.children, n),
            t.child
          );
        case 9:
          return (
            (i = t.type._context),
            (r = t.pendingProps.children),
            rZ(t),
            (r = r((i = rJ(i)))),
            (t.flags |= 1),
            oT(e, t, r, n),
            t.child
          );
        case 14:
          return oj(e, t, t.type, t.pendingProps, n);
        case 15:
          return oA(e, t, t.type, t.pendingProps, n);
        case 19:
          return oX(e, t, n);
        case 31:
          var s = e,
            u = t,
            c = n,
            d = u.pendingProps,
            f = 0 != (128 & u.flags);
          if (((u.flags &= -129), null === s)) {
            if (rR) {
              if ("hidden" === d.mode)
                return (s = oz(u, d)), (u.lanes = 0x20000000), oR(null, s);
              if (
                (iq(u),
                (s = rM)
                  ? null !==
                      (s =
                        null !== (s = uD(s, rz)) && "&" === s.data
                          ? s
                          : null) &&
                    ((u.memoizedState = {
                      dehydrated: s,
                      treeContext:
                        null !== rk ? { id: rS, overflow: rE } : null,
                      retryLane: 0x20000000,
                      hydrationErrors: null,
                    }),
                    ((c = rf(s)).return = u),
                    (u.child = c),
                    (rA = u),
                    (rM = null))
                  : (s = null),
                null === s)
              )
                throw r_(u);
              return (u.lanes = 0x20000000), null;
            }
            return oz(u, d);
          }
          var p = s.memoizedState;
          if (null !== p) {
            var h = p.dehydrated;
            if ((iq(u), f))
              if (256 & u.flags) (u.flags &= -257), (u = oD(s, u, c));
              else if (null !== u.memoizedState)
                (u.child = s.child), (u.flags |= 128), (u = null);
              else throw Error(l(558));
            else if (
              (oP || rX(s, u, c, !1), (f = 0 != (c & s.childLanes)), oP || f)
            ) {
              if (
                null !== (d = l$) &&
                0 !== (h = eM(d, c)) &&
                h !== p.retryLane
              )
                throw ((p.retryLane = h), re(s, h), sf(d, s, h), oC);
              sS(), (u = oD(s, u, c));
            } else
              (s = p.treeContext),
                (rM = uV(h.nextSibling)),
                (rA = u),
                (rR = !0),
                (rL = null),
                (rz = !1),
                null !== s && rj(u, s),
                (u = oz(u, d)),
                (u.flags |= 4096);
            return u;
          }
          return (
            ((s = rl(s.child, { mode: d.mode, children: d.children })).ref =
              u.ref),
            (u.child = s),
            (s.return = u),
            s
          );
        case 22:
          return oM(e, t, n, t.pendingProps);
        case 24:
          return (
            rZ(t),
            (r = rJ(r5)),
            null === e
              ? (null === (i = io()) &&
                  ((i = l$),
                  (a = r6()),
                  (i.pooledCache = a),
                  a.refCount++,
                  null !== a && (i.pooledCacheLanes |= n),
                  (i = a)),
                (t.memoizedState = { parent: r, cache: i }),
                ij(t),
                rY(t, r5, i))
              : (0 != (e.lanes & n) && (iA(e, t), iO(t, null, null, n), i_()),
                (i = e.memoizedState),
                (a = t.memoizedState),
                i.parent !== r
                  ? ((i = { parent: r, cache: r }),
                    (t.memoizedState = i),
                    0 === t.lanes &&
                      (t.memoizedState = t.updateQueue.baseState = i),
                    rY(t, r5, r))
                  : (rY(t, r5, (r = a.cache)),
                    r !== i.cache && rG(t, [r5], n, !0))),
            oT(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(l(156, t.tag));
    }
    function o0(e) {
      e.flags |= 4;
    }
    function o1(e, t, n, r, i) {
      if (((t = 0 != (32 & e.mode)) && (t = !1), t)) {
        if (((e.flags |= 0x1000000), (0x13ffff40 & i) === i))
          if (e.stateNode.complete) e.flags |= 8192;
          else if (sx()) e.flags |= 8192;
          else throw ((iy = ip), ic);
      } else e.flags &= -0x1000001;
    }
    function o2(e, t) {
      if ("stylesheet" !== t.type || 0 != (4 & t.state.loading))
        e.flags &= -0x1000001;
      else if (((e.flags |= 0x1000000), !u7(t)))
        if (sx()) e.flags |= 8192;
        else throw ((iy = ip), ic);
    }
    function o3(e, t) {
      null !== t && (e.flags |= 4),
        16384 & e.flags &&
          ((t = 22 !== e.tag ? eP() : 0x20000000), (e.lanes |= t), (l2 |= t));
    }
    function o4(e, t) {
      if (!rR)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var n = null; null !== t; )
              null !== t.alternate && (n = t), (t = t.sibling);
            null === n ? (e.tail = null) : (n.sibling = null);
            break;
          case "collapsed":
            n = e.tail;
            for (var r = null; null !== n; )
              null !== n.alternate && (r = n), (n = n.sibling);
            null === r
              ? t || null === e.tail
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function o5(e) {
      var t = null !== e.alternate && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; null !== i; )
          (n |= i.lanes | i.childLanes),
            (r |= 0x3e00000 & i.subtreeFlags),
            (r |= 0x3e00000 & i.flags),
            (i.return = e),
            (i = i.sibling);
      else
        for (i = e.child; null !== i; )
          (n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling);
      return (e.subtreeFlags |= r), (e.childLanes = n), t;
    }
    function o6(e, t) {
      switch ((rN(t), t.tag)) {
        case 3:
          rQ(r5), Q();
          break;
        case 26:
        case 27:
        case 5:
          G(t);
          break;
        case 4:
          Q();
          break;
        case 31:
          null !== t.memoizedState && iK(t);
          break;
        case 13:
          iK(t);
          break;
        case 19:
          F(iZ);
          break;
        case 10:
          rQ(t.type);
          break;
        case 22:
        case 23:
          iK(t), iW(), null !== e && F(ia);
          break;
        case 24:
          rQ(r5);
      }
    }
    function o8(e, t) {
      try {
        var n = t.updateQueue,
          r = null !== n ? n.lastEffect : null;
        if (null !== r) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create;
              n.inst.destroy = r = a();
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        sV(t, t.return, e);
      }
    }
    function o9(e, t, n) {
      try {
        var r = t.updateQueue,
          i = null !== r ? r.lastEffect : null;
        if (null !== i) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                l = o.destroy;
              if (void 0 !== l) {
                (o.destroy = void 0), (i = t);
                try {
                  l();
                } catch (e) {
                  sV(i, n, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        sV(t, t.return, e);
      }
    }
    function o7(e) {
      var t = e.updateQueue;
      if (null !== t) {
        var n = e.stateNode;
        try {
          iI(t, n);
        } catch (t) {
          sV(e, e.return, t);
        }
      }
    }
    function le(e, t, n) {
      (n.props = og(e.type, e.memoizedProps)), (n.state = e.memoizedState);
      try {
        n.componentWillUnmount();
      } catch (n) {
        sV(e, t, n);
      }
    }
    function lt(e, t) {
      try {
        var n = e.ref;
        if (null !== n) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          "function" == typeof n ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        sV(e, t, n);
      }
    }
    function ln(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (null !== n)
        if ("function" == typeof r)
          try {
            r();
          } catch (n) {
            sV(e, t, n);
          } finally {
            (e.refCleanup = null),
              null != (e = e.alternate) && (e.refCleanup = null);
          }
        else if ("function" == typeof n)
          try {
            n(null);
          } catch (n) {
            sV(e, t, n);
          }
        else n.current = null;
    }
    function lr(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        switch (t) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            n.autoFocus && r.focus();
            break;
          case "img":
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        sV(e, e.return, t);
      }
    }
    function li(e, t, n) {
      try {
        var r = e.stateNode;
        (function (e, t, n, r) {
          switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
              break;
            case "input":
              var i = null,
                a = null,
                o = null,
                s = null,
                u = null,
                c = null,
                d = null;
              for (h in n) {
                var f = n[h];
                if (n.hasOwnProperty(h) && null != f)
                  switch (h) {
                    case "checked":
                    case "value":
                      break;
                    case "defaultValue":
                      u = f;
                    default:
                      r.hasOwnProperty(h) || um(e, t, h, null, r, f);
                  }
              }
              for (var p in r) {
                var h = r[p];
                if (
                  ((f = n[p]), r.hasOwnProperty(p) && (null != h || null != f))
                )
                  switch (p) {
                    case "type":
                      a = h;
                      break;
                    case "name":
                      i = h;
                      break;
                    case "checked":
                      c = h;
                      break;
                    case "defaultChecked":
                      d = h;
                      break;
                    case "value":
                      o = h;
                      break;
                    case "defaultValue":
                      s = h;
                      break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                      if (null != h) throw Error(l(137, t));
                      break;
                    default:
                      h !== f && um(e, t, p, h, r, f);
                  }
              }
              ti(e, o, s, u, c, d, a, i);
              return;
            case "select":
              for (a in ((h = o = s = p = null), n))
                if (((u = n[a]), n.hasOwnProperty(a) && null != u))
                  switch (a) {
                    case "value":
                      break;
                    case "multiple":
                      h = u;
                    default:
                      r.hasOwnProperty(a) || um(e, t, a, null, r, u);
                  }
              for (i in r)
                if (
                  ((a = r[i]),
                  (u = n[i]),
                  r.hasOwnProperty(i) && (null != a || null != u))
                )
                  switch (i) {
                    case "value":
                      p = a;
                      break;
                    case "defaultValue":
                      s = a;
                      break;
                    case "multiple":
                      o = a;
                    default:
                      a !== u && um(e, t, i, a, r, u);
                  }
              (t = s),
                (n = o),
                (r = h),
                null != p
                  ? tl(e, !!n, p, !1)
                  : !!r != !!n &&
                    (null != t
                      ? tl(e, !!n, t, !0)
                      : tl(e, !!n, n ? [] : "", !1));
              return;
            case "textarea":
              for (s in ((h = p = null), n))
                if (
                  ((i = n[s]),
                  n.hasOwnProperty(s) && null != i && !r.hasOwnProperty(s))
                )
                  switch (s) {
                    case "value":
                    case "children":
                      break;
                    default:
                      um(e, t, s, null, r, i);
                  }
              for (o in r)
                if (
                  ((i = r[o]),
                  (a = n[o]),
                  r.hasOwnProperty(o) && (null != i || null != a))
                )
                  switch (o) {
                    case "value":
                      p = i;
                      break;
                    case "defaultValue":
                      h = i;
                      break;
                    case "children":
                      break;
                    case "dangerouslySetInnerHTML":
                      if (null != i) throw Error(l(91));
                      break;
                    default:
                      i !== a && um(e, t, o, i, r, a);
                  }
              ts(e, p, h);
              return;
            case "option":
              for (var m in n)
                (p = n[m]),
                  n.hasOwnProperty(m) &&
                    null != p &&
                    !r.hasOwnProperty(m) &&
                    ("selected" === m
                      ? (e.selected = !1)
                      : um(e, t, m, null, r, p));
              for (u in r)
                (p = r[u]),
                  (h = n[u]),
                  r.hasOwnProperty(u) &&
                    p !== h &&
                    (null != p || null != h) &&
                    ("selected" === u
                      ? (e.selected =
                          p && "function" != typeof p && "symbol" != typeof p)
                      : um(e, t, u, p, r, h));
              return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
              for (var g in n)
                (p = n[g]),
                  n.hasOwnProperty(g) &&
                    null != p &&
                    !r.hasOwnProperty(g) &&
                    um(e, t, g, null, r, p);
              for (c in r)
                if (
                  ((p = r[c]),
                  (h = n[c]),
                  r.hasOwnProperty(c) && p !== h && (null != p || null != h))
                )
                  switch (c) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      if (null != p) throw Error(l(137, t));
                      break;
                    default:
                      um(e, t, c, p, r, h);
                  }
              return;
            default:
              if (th(t)) {
                for (var y in n)
                  (p = n[y]),
                    n.hasOwnProperty(y) &&
                      void 0 !== p &&
                      !r.hasOwnProperty(y) &&
                      ug(e, t, y, void 0, r, p);
                for (d in r)
                  (p = r[d]),
                    (h = n[d]),
                    r.hasOwnProperty(d) &&
                      p !== h &&
                      (void 0 !== p || void 0 !== h) &&
                      ug(e, t, d, p, r, h);
                return;
              }
          }
          for (var v in n)
            (p = n[v]),
              n.hasOwnProperty(v) &&
                null != p &&
                !r.hasOwnProperty(v) &&
                um(e, t, v, null, r, p);
          for (f in r)
            (p = r[f]),
              (h = n[f]),
              r.hasOwnProperty(f) &&
                p !== h &&
                (null != p || null != h) &&
                um(e, t, f, p, r, h);
        })(r, e.type, n, t),
          (r[eV] = t);
      } catch (t) {
        sV(e, e.return, t);
      }
    }
    function la(e) {
      return (
        5 === e.tag ||
        3 === e.tag ||
        26 === e.tag ||
        (27 === e.tag && uM(e.type)) ||
        4 === e.tag
      );
    }
    function lo(e) {
      e: for (;;) {
        for (; null === e.sibling; ) {
          if (null === e.return || la(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

        ) {
          if (
            (27 === e.tag && uM(e.type)) ||
            2 & e.flags ||
            null === e.child ||
            4 === e.tag
          )
            continue e;
          (e.child.return = e), (e = e.child);
        }
        if (!(2 & e.flags)) return e.stateNode;
      }
    }
    function ll(e, t, n) {
      var r = e.tag;
      if (5 === r || 6 === r)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
      else if (
        4 !== r &&
        (27 === r && uM(e.type) && (n = e.stateNode), null !== (e = e.child))
      )
        for (ll(e, t, n), e = e.sibling; null !== e; )
          ll(e, t, n), (e = e.sibling);
    }
    function ls(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length; )
          t.removeAttributeNode(i[0]);
        uy(t, r, n), (t[eO] = e), (t[eV] = n);
      } catch (t) {
        sV(e, e.return, t);
      }
    }
    var lu = !1,
      lc = !1,
      ld = !1,
      lf = "function" == typeof WeakSet ? WeakSet : Set,
      lp = null;
    function lh(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          lP(e, n), 4 & r && o8(5, n);
          break;
        case 1:
          if ((lP(e, n), 4 & r))
            if (((e = n.stateNode), null === t))
              try {
                e.componentDidMount();
              } catch (e) {
                sV(n, n.return, e);
              }
            else {
              var i = og(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(
                  i,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate
                );
              } catch (e) {
                sV(n, n.return, e);
              }
            }
          64 & r && o7(n), 512 & r && lt(n, n.return);
          break;
        case 3:
          if ((lP(e, n), 64 & r && null !== (e = n.updateQueue))) {
            if (((t = null), null !== n.child))
              switch (n.child.tag) {
                case 27:
                case 5:
                case 1:
                  t = n.child.stateNode;
              }
            try {
              iI(e, t);
            } catch (e) {
              sV(n, n.return, e);
            }
          }
          break;
        case 27:
          null === t && 4 & r && ls(n);
        case 26:
        case 5:
          lP(e, n), null === t && 4 & r && lr(n), 512 & r && lt(n, n.return);
          break;
        case 12:
        default:
          lP(e, n);
          break;
        case 31:
          lP(e, n), 4 & r && lb(e, n);
          break;
        case 13:
          lP(e, n),
            4 & r && lx(e, n),
            64 & r &&
              null !== (e = n.memoizedState) &&
              null !== (e = e.dehydrated) &&
              (function (e, t) {
                var n = e.ownerDocument;
                if ("$~" === e.data) e._reactRetry = t;
                else if ("$?" !== e.data || "loading" !== n.readyState) t();
                else {
                  var r = function () {
                    t(), n.removeEventListener("DOMContentLoaded", r);
                  };
                  n.addEventListener("DOMContentLoaded", r),
                    (e._reactRetry = r);
                }
              })(e, (n = s$.bind(null, n)));
          break;
        case 22:
          if (!(r = null !== n.memoizedState || lu)) {
            (t = (null !== t && null !== t.memoizedState) || lc), (i = lu);
            var a = lc;
            (lu = r),
              (lc = t) && !a
                ? (function e(t, n, r) {
                    for (
                      r = r && 0 != (8772 & n.subtreeFlags), n = n.child;
                      null !== n;

                    ) {
                      var i = n.alternate,
                        a = t,
                        o = n,
                        l = o.flags;
                      switch (o.tag) {
                        case 0:
                        case 11:
                        case 15:
                          e(a, o, r), o8(4, o);
                          break;
                        case 1:
                          if (
                            (e(a, o, r),
                            "function" ==
                              typeof (a = (i = o).stateNode).componentDidMount)
                          )
                            try {
                              a.componentDidMount();
                            } catch (e) {
                              sV(i, i.return, e);
                            }
                          if (null !== (a = (i = o).updateQueue)) {
                            var s = i.stateNode;
                            try {
                              var u = a.shared.hiddenCallbacks;
                              if (null !== u)
                                for (
                                  a.shared.hiddenCallbacks = null, a = 0;
                                  a < u.length;
                                  a++
                                )
                                  iV(u[a], s);
                            } catch (e) {
                              sV(i, i.return, e);
                            }
                          }
                          r && 64 & l && o7(o), lt(o, o.return);
                          break;
                        case 27:
                          ls(o);
                        case 26:
                        case 5:
                          e(a, o, r),
                            r && null === i && 4 & l && lr(o),
                            lt(o, o.return);
                          break;
                        case 12:
                        default:
                          e(a, o, r);
                          break;
                        case 31:
                          e(a, o, r), r && 4 & l && lb(a, o);
                          break;
                        case 13:
                          e(a, o, r), r && 4 & l && lx(a, o);
                          break;
                        case 22:
                          null === o.memoizedState && e(a, o, r),
                            lt(o, o.return);
                        case 30:
                      }
                      n = n.sibling;
                    }
                  })(e, n, 0 != (8772 & n.subtreeFlags))
                : lP(e, n),
              (lu = i),
              (lc = a);
          }
        case 30:
      }
    }
    var lm = null,
      lg = !1;
    function ly(e, t, n) {
      for (n = n.child; null !== n; ) lv(e, t, n), (n = n.sibling);
    }
    function lv(e, t, n) {
      if (em && "function" == typeof em.onCommitFiberUnmount)
        try {
          em.onCommitFiberUnmount(eh, n);
        } catch (e) {}
      switch (n.tag) {
        case 26:
          lc || ln(n, t),
            ly(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
          break;
        case 27:
          lc || ln(n, t);
          var r = lm,
            i = lg;
          uM(n.type) && ((lm = n.stateNode), (lg = !1)),
            ly(e, t, n),
            uU(n.stateNode),
            (lm = r),
            (lg = i);
          break;
        case 5:
          lc || ln(n, t);
        case 6:
          if (
            ((r = lm),
            (i = lg),
            (lm = null),
            ly(e, t, n),
            (lm = r),
            (lg = i),
            null !== lm)
          )
            if (lg)
              try {
                (9 === lm.nodeType
                  ? lm.body
                  : "HTML" === lm.nodeName
                  ? lm.ownerDocument.body
                  : lm
                ).removeChild(n.stateNode);
              } catch (e) {
                sV(n, t, e);
              }
            else
              try {
                lm.removeChild(n.stateNode);
              } catch (e) {
                sV(n, t, e);
              }
          break;
        case 18:
          null !== lm &&
            (lg
              ? (uR(
                  9 === (e = lm).nodeType
                    ? e.body
                    : "HTML" === e.nodeName
                    ? e.ownerDocument.body
                    : e,
                  n.stateNode
                ),
                cV(e))
              : uR(lm, n.stateNode));
          break;
        case 4:
          (r = lm),
            (i = lg),
            (lm = n.stateNode.containerInfo),
            (lg = !0),
            ly(e, t, n),
            (lm = r),
            (lg = i);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          o9(2, n, t), lc || o9(4, n, t), ly(e, t, n);
          break;
        case 1:
          lc ||
            (ln(n, t),
            "function" == typeof (r = n.stateNode).componentWillUnmount &&
              le(n, t, r)),
            ly(e, t, n);
          break;
        case 21:
        default:
          ly(e, t, n);
          break;
        case 22:
          (lc = (r = lc) || null !== n.memoizedState), ly(e, t, n), (lc = r);
      }
    }
    function lb(e, t) {
      if (
        null === t.memoizedState &&
        null !== (e = t.alternate) &&
        null !== (e = e.memoizedState)
      ) {
        e = e.dehydrated;
        try {
          cV(e);
        } catch (e) {
          sV(t, t.return, e);
        }
      }
    }
    function lx(e, t) {
      if (
        null === t.memoizedState &&
        null !== (e = t.alternate) &&
        null !== (e = e.memoizedState) &&
        null !== (e = e.dehydrated)
      )
        try {
          cV(e);
        } catch (e) {
          sV(t, t.return, e);
        }
    }
    function lw(e, t) {
      var n = (function (e) {
        switch (e.tag) {
          case 31:
          case 13:
          case 19:
            var t = e.stateNode;
            return null === t && (t = e.stateNode = new lf()), t;
          case 22:
            return (
              null === (t = (e = e.stateNode)._retryCache) &&
                (t = e._retryCache = new lf()),
              t
            );
          default:
            throw Error(l(435, e.tag));
        }
      })(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = sU.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function lk(e, t) {
      var n = t.deletions;
      if (null !== n)
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            a = e,
            o = t,
            s = o;
          e: for (; null !== s; ) {
            switch (s.tag) {
              case 27:
                if (uM(s.type)) {
                  (lm = s.stateNode), (lg = !1);
                  break e;
                }
                break;
              case 5:
                (lm = s.stateNode), (lg = !1);
                break e;
              case 3:
              case 4:
                (lm = s.stateNode.containerInfo), (lg = !0);
                break e;
            }
            s = s.return;
          }
          if (null === lm) throw Error(l(160));
          lv(a, o, i),
            (lm = null),
            (lg = !1),
            null !== (a = i.alternate) && (a.return = null),
            (i.return = null);
        }
      if (13886 & t.subtreeFlags)
        for (t = t.child; null !== t; ) lE(t, e), (t = t.sibling);
    }
    var lS = null;
    function lE(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          lk(t, e),
            lC(e),
            4 & r && (o9(3, e, e.return), o8(3, e), o9(5, e, e.return));
          break;
        case 1:
          lk(t, e),
            lC(e),
            512 & r && (lc || null === n || ln(n, n.return)),
            64 & r &&
              lu &&
              null !== (e = e.updateQueue) &&
              null !== (r = e.callbacks) &&
              ((n = e.shared.hiddenCallbacks),
              (e.shared.hiddenCallbacks = null === n ? r : n.concat(r)));
          break;
        case 26:
          var i = lS;
          if (
            (lk(t, e),
            lC(e),
            512 & r && (lc || null === n || ln(n, n.return)),
            4 & r)
          ) {
            var a = null !== n ? n.memoizedState : null;
            if (((r = e.memoizedState), null === n))
              if (null === r)
                if (null === e.stateNode) {
                  e: {
                    (r = e.type),
                      (n = e.memoizedProps),
                      (i = i.ownerDocument || i);
                    t: switch (r) {
                      case "title":
                        (!(a = i.getElementsByTagName("title")[0]) ||
                          a[eW] ||
                          a[eO] ||
                          "http://www.w3.org/2000/svg" === a.namespaceURI ||
                          a.hasAttribute("itemprop")) &&
                          ((a = i.createElement(r)),
                          i.head.insertBefore(
                            a,
                            i.querySelector("head > title")
                          )),
                          uy(a, r, n),
                          (a[eO] = e),
                          eX(a),
                          (r = a);
                        break e;
                      case "link":
                        var o = u8("link", "href", i).get(r + (n.href || ""));
                        if (o) {
                          for (var s = 0; s < o.length; s++)
                            if (
                              (a = o[s]).getAttribute("href") ===
                                (null == n.href || "" === n.href
                                  ? null
                                  : n.href) &&
                              a.getAttribute("rel") ===
                                (null == n.rel ? null : n.rel) &&
                              a.getAttribute("title") ===
                                (null == n.title ? null : n.title) &&
                              a.getAttribute("crossorigin") ===
                                (null == n.crossOrigin ? null : n.crossOrigin)
                            ) {
                              o.splice(s, 1);
                              break t;
                            }
                        }
                        uy((a = i.createElement(r)), r, n),
                          i.head.appendChild(a);
                        break;
                      case "meta":
                        if (
                          (o = u8("meta", "content", i).get(
                            r + (n.content || "")
                          ))
                        ) {
                          for (s = 0; s < o.length; s++)
                            if (
                              (a = o[s]).getAttribute("content") ===
                                (null == n.content ? null : "" + n.content) &&
                              a.getAttribute("name") ===
                                (null == n.name ? null : n.name) &&
                              a.getAttribute("property") ===
                                (null == n.property ? null : n.property) &&
                              a.getAttribute("http-equiv") ===
                                (null == n.httpEquiv ? null : n.httpEquiv) &&
                              a.getAttribute("charset") ===
                                (null == n.charSet ? null : n.charSet)
                            ) {
                              o.splice(s, 1);
                              break t;
                            }
                        }
                        uy((a = i.createElement(r)), r, n),
                          i.head.appendChild(a);
                        break;
                      default:
                        throw Error(l(468, r));
                    }
                    (a[eO] = e), eX(a), (r = a);
                  }
                  e.stateNode = r;
                } else u9(i, e.type, e.stateNode);
              else e.stateNode = u2(i, r, e.memoizedProps);
            else
              a !== r
                ? (null === a
                    ? null !== n.stateNode &&
                      (n = n.stateNode).parentNode.removeChild(n)
                    : a.count--,
                  null === r
                    ? u9(i, e.type, e.stateNode)
                    : u2(i, r, e.memoizedProps))
                : null === r &&
                  null !== e.stateNode &&
                  li(e, e.memoizedProps, n.memoizedProps);
          }
          break;
        case 27:
          lk(t, e),
            lC(e),
            512 & r && (lc || null === n || ln(n, n.return)),
            null !== n && 4 & r && li(e, e.memoizedProps, n.memoizedProps);
          break;
        case 5:
          if (
            (lk(t, e),
            lC(e),
            512 & r && (lc || null === n || ln(n, n.return)),
            32 & e.flags)
          ) {
            i = e.stateNode;
            try {
              tc(i, "");
            } catch (t) {
              sV(e, e.return, t);
            }
          }
          4 & r &&
            null != e.stateNode &&
            ((i = e.memoizedProps), li(e, i, null !== n ? n.memoizedProps : i)),
            1024 & r && (ld = !0);
          break;
        case 6:
          if ((lk(t, e), lC(e), 4 & r)) {
            if (null === e.stateNode) throw Error(l(162));
            (r = e.memoizedProps), (n = e.stateNode);
            try {
              n.nodeValue = r;
            } catch (t) {
              sV(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((u6 = null),
            (i = lS),
            (lS = uY(t.containerInfo)),
            lk(t, e),
            (lS = i),
            lC(e),
            4 & r && null !== n && n.memoizedState.isDehydrated)
          )
            try {
              cV(t.containerInfo);
            } catch (t) {
              sV(e, e.return, t);
            }
          ld &&
            ((ld = !1),
            (function e(t) {
              if (1024 & t.subtreeFlags)
                for (t = t.child; null !== t; ) {
                  var n = t;
                  e(n),
                    5 === n.tag && 1024 & n.flags && n.stateNode.reset(),
                    (t = t.sibling);
                }
            })(e));
          break;
        case 4:
          (r = lS),
            (lS = uY(e.stateNode.containerInfo)),
            lk(t, e),
            lC(e),
            (lS = r);
          break;
        case 12:
        default:
          lk(t, e), lC(e);
          break;
        case 31:
        case 19:
          lk(t, e),
            lC(e),
            4 & r &&
              null !== (r = e.updateQueue) &&
              ((e.updateQueue = null), lw(e, r));
          break;
        case 13:
          lk(t, e),
            lC(e),
            8192 & e.child.flags &&
              (null !== e.memoizedState) !=
                (null !== n && null !== n.memoizedState) &&
              (l6 = ea()),
            4 & r &&
              null !== (r = e.updateQueue) &&
              ((e.updateQueue = null), lw(e, r));
          break;
        case 22:
          i = null !== e.memoizedState;
          var u = null !== n && null !== n.memoizedState,
            c = lu,
            d = lc;
          if (
            ((lu = c || i),
            (lc = d || u),
            lk(t, e),
            (lc = d),
            (lu = c),
            lC(e),
            8192 & r)
          )
            e: for (
              (t = e.stateNode)._visibility = i
                ? -2 & t._visibility
                : 1 | t._visibility,
                i &&
                  (null === n ||
                    u ||
                    lu ||
                    lc ||
                    (function e(t) {
                      for (t = t.child; null !== t; ) {
                        var n = t;
                        switch (n.tag) {
                          case 0:
                          case 11:
                          case 14:
                          case 15:
                            o9(4, n, n.return), e(n);
                            break;
                          case 1:
                            ln(n, n.return);
                            var r = n.stateNode;
                            "function" == typeof r.componentWillUnmount &&
                              le(n, n.return, r),
                              e(n);
                            break;
                          case 27:
                            uU(n.stateNode);
                          case 26:
                          case 5:
                            ln(n, n.return), e(n);
                            break;
                          case 22:
                            null === n.memoizedState && e(n);
                            break;
                          default:
                            e(n);
                        }
                        t = t.sibling;
                      }
                    })(e)),
                n = null,
                t = e;
              ;

            ) {
              if (5 === t.tag || 26 === t.tag) {
                if (null === n) {
                  u = n = t;
                  try {
                    if (((a = u.stateNode), i))
                      (o = a.style),
                        "function" == typeof o.setProperty
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none");
                    else {
                      s = u.stateNode;
                      var f = u.memoizedProps.style,
                        p =
                          null != f && f.hasOwnProperty("display")
                            ? f.display
                            : null;
                      s.style.display =
                        null == p || "boolean" == typeof p
                          ? ""
                          : ("" + p).trim();
                    }
                  } catch (e) {
                    sV(u, u.return, e);
                  }
                }
              } else if (6 === t.tag) {
                if (null === n) {
                  u = t;
                  try {
                    u.stateNode.nodeValue = i ? "" : u.memoizedProps;
                  } catch (e) {
                    sV(u, u.return, e);
                  }
                }
              } else if (18 === t.tag) {
                if (null === n) {
                  u = t;
                  try {
                    var h = u.stateNode;
                    i ? uL(h, !0) : uL(u.stateNode, !1);
                  } catch (e) {
                    sV(u, u.return, e);
                  }
                }
              } else if (
                ((22 !== t.tag && 23 !== t.tag) ||
                  null === t.memoizedState ||
                  t === e) &&
                null !== t.child
              ) {
                (t.child.return = t), (t = t.child);
                continue;
              }
              if (t === e) break;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) break e;
                n === t && (n = null), (t = t.return);
              }
              n === t && (n = null),
                (t.sibling.return = t.return),
                (t = t.sibling);
            }
          4 & r &&
            null !== (r = e.updateQueue) &&
            null !== (n = r.retryQueue) &&
            ((r.retryQueue = null), lw(e, n));
        case 30:
        case 21:
      }
    }
    function lC(e) {
      var t = e.flags;
      if (2 & t) {
        try {
          for (var n, r = e.return; null !== r; ) {
            if (la(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          if (null == n) throw Error(l(160));
          switch (n.tag) {
            case 27:
              var i = n.stateNode,
                a = lo(e);
              ll(e, a, i);
              break;
            case 5:
              var o = n.stateNode;
              32 & n.flags && (tc(o, ""), (n.flags &= -33));
              var s = lo(e);
              ll(e, s, o);
              break;
            case 3:
            case 4:
              var u = n.stateNode.containerInfo,
                c = lo(e);
              !(function e(t, n, r) {
                var i = t.tag;
                if (5 === i || 6 === i)
                  (t = t.stateNode),
                    n
                      ? (9 === r.nodeType
                          ? r.body
                          : "HTML" === r.nodeName
                          ? r.ownerDocument.body
                          : r
                        ).insertBefore(t, n)
                      : ((n =
                          9 === r.nodeType
                            ? r.body
                            : "HTML" === r.nodeName
                            ? r.ownerDocument.body
                            : r).appendChild(t),
                        null != (r = r._reactRootContainer) ||
                          null !== n.onclick ||
                          (n.onclick = tv));
                else if (
                  4 !== i &&
                  (27 === i && uM(t.type) && ((r = t.stateNode), (n = null)),
                  null !== (t = t.child))
                )
                  for (e(t, n, r), t = t.sibling; null !== t; )
                    e(t, n, r), (t = t.sibling);
              })(e, c, u);
              break;
            default:
              throw Error(l(161));
          }
        } catch (t) {
          sV(e, e.return, t);
        }
        e.flags &= -3;
      }
      4096 & t && (e.flags &= -4097);
    }
    function lP(e, t) {
      if (8772 & t.subtreeFlags)
        for (t = t.child; null !== t; ) lh(e, t.alternate, t), (t = t.sibling);
    }
    function lT(e, t) {
      var n = null;
      null !== e &&
        null !== e.memoizedState &&
        null !== e.memoizedState.cachePool &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        null !== t.memoizedState &&
          null !== t.memoizedState.cachePool &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (null != e && e.refCount++, null != n && r8(n));
    }
    function lN(e, t) {
      (e = null),
        null !== t.alternate && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && r8(e));
    }
    function lj(e, t, n, r) {
      if (10256 & t.subtreeFlags)
        for (t = t.child; null !== t; ) lA(e, t, n, r), (t = t.sibling);
    }
    function lA(e, t, n, r) {
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          lj(e, t, n, r), 2048 & i && o8(9, t);
          break;
        case 1:
        case 31:
        case 13:
        default:
          lj(e, t, n, r);
          break;
        case 3:
          lj(e, t, n, r),
            2048 & i &&
              ((e = null),
              null !== t.alternate && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache) !== e &&
                (t.refCount++, null != e && r8(e)));
          break;
        case 12:
          if (2048 & i) {
            lj(e, t, n, r), (e = t.stateNode);
            try {
              var a = t.memoizedProps,
                o = a.id,
                l = a.onPostCommit;
              "function" == typeof l &&
                l(
                  o,
                  null === t.alternate ? "mount" : "update",
                  e.passiveEffectDuration,
                  -0
                );
            } catch (e) {
              sV(t, t.return, e);
            }
          } else lj(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          (a = t.stateNode),
            (o = t.alternate),
            null !== t.memoizedState
              ? 2 & a._visibility
                ? lj(e, t, n, r)
                : lM(e, t)
              : 2 & a._visibility
              ? lj(e, t, n, r)
              : ((a._visibility |= 2),
                (function e(t, n, r, i, a) {
                  for (
                    a = a && 0 != (10256 & n.subtreeFlags), n = n.child;
                    null !== n;

                  ) {
                    var o = n,
                      l = o.flags;
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        e(t, o, r, i, a), o8(8, o);
                        break;
                      case 23:
                        break;
                      case 22:
                        var s = o.stateNode;
                        null !== o.memoizedState
                          ? 2 & s._visibility
                            ? e(t, o, r, i, a)
                            : lM(t, o)
                          : ((s._visibility |= 2), e(t, o, r, i, a)),
                          a && 2048 & l && lT(o.alternate, o);
                        break;
                      case 24:
                        e(t, o, r, i, a), a && 2048 & l && lN(o.alternate, o);
                        break;
                      default:
                        e(t, o, r, i, a);
                    }
                    n = n.sibling;
                  }
                })(e, t, n, r, 0 != (10256 & t.subtreeFlags))),
            2048 & i && lT(o, t);
          break;
        case 24:
          lj(e, t, n, r), 2048 & i && lN(t.alternate, t);
      }
    }
    function lM(e, t) {
      if (10256 & t.subtreeFlags)
        for (t = t.child; null !== t; ) {
          var n = t,
            r = n.flags;
          switch (n.tag) {
            case 22:
              lM(e, n), 2048 & r && lT(n.alternate, n);
              break;
            case 24:
              lM(e, n), 2048 & r && lN(n.alternate, n);
              break;
            default:
              lM(e, n);
          }
          t = t.sibling;
        }
    }
    var lR = 8192;
    function lL(e, t, n) {
      if (e.subtreeFlags & lR)
        for (e = e.child; null !== e; ) lz(e, t, n), (e = e.sibling);
    }
    function lz(e, t, n) {
      switch (e.tag) {
        case 26:
          lL(e, t, n),
            e.flags & lR &&
              null !== e.memoizedState &&
              (function (e, t, n, r) {
                if (
                  "stylesheet" === n.type &&
                  ("string" != typeof r.media ||
                    !1 !== matchMedia(r.media).matches) &&
                  0 == (4 & n.state.loading)
                ) {
                  if (null === n.instance) {
                    var i = uK(r.href),
                      a = t.querySelector(uZ(i));
                    if (a) {
                      null !== (t = a._p) &&
                        "object" == typeof t &&
                        "function" == typeof t.then &&
                        (e.count++, (e = ct.bind(e)), t.then(e, e)),
                        (n.state.loading |= 4),
                        (n.instance = a),
                        eX(a);
                      return;
                    }
                    (a = t.ownerDocument || t),
                      (r = uJ(r)),
                      (i = uW.get(i)) && u4(r, i),
                      eX((a = a.createElement("link")));
                    var o = a;
                    (o._p = new Promise(function (e, t) {
                      (o.onload = e), (o.onerror = t);
                    })),
                      uy(a, "link", r),
                      (n.instance = a);
                  }
                  null === e.stylesheets && (e.stylesheets = new Map()),
                    e.stylesheets.set(n, t),
                    (t = n.state.preload) &&
                      0 == (3 & n.state.loading) &&
                      (e.count++,
                      (n = ct.bind(e)),
                      t.addEventListener("load", n),
                      t.addEventListener("error", n));
                }
              })(n, lS, e.memoizedState, e.memoizedProps);
          break;
        case 5:
        default:
          lL(e, t, n);
          break;
        case 3:
        case 4:
          var r = lS;
          (lS = uY(e.stateNode.containerInfo)), lL(e, t, n), (lS = r);
          break;
        case 22:
          null === e.memoizedState &&
            (null !== (r = e.alternate) && null !== r.memoizedState
              ? ((r = lR), (lR = 0x1000000), lL(e, t, n), (lR = r))
              : lL(e, t, n));
      }
    }
    function lD(e) {
      var t = e.alternate;
      if (null !== t && null !== (e = t.child)) {
        t.child = null;
        do (t = e.sibling), (e.sibling = null), (e = t);
        while (null !== e);
      }
    }
    function l_(e) {
      var t = e.deletions;
      if (0 != (16 & e.flags)) {
        if (null !== t)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (lp = r), lV(r, e);
          }
        lD(e);
      }
      if (10256 & e.subtreeFlags)
        for (e = e.child; null !== e; ) lO(e), (e = e.sibling);
    }
    function lO(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          l_(e), 2048 & e.flags && o9(9, e, e.return);
          break;
        case 3:
        case 12:
        default:
          l_(e);
          break;
        case 22:
          var t = e.stateNode;
          null !== e.memoizedState &&
          2 & t._visibility &&
          (null === e.return || 13 !== e.return.tag)
            ? ((t._visibility &= -3),
              (function e(t) {
                var n = t.deletions;
                if (0 != (16 & t.flags)) {
                  if (null !== n)
                    for (var r = 0; r < n.length; r++) {
                      var i = n[r];
                      (lp = i), lV(i, t);
                    }
                  lD(t);
                }
                for (t = t.child; null !== t; ) {
                  switch ((n = t).tag) {
                    case 0:
                    case 11:
                    case 15:
                      o9(8, n, n.return), e(n);
                      break;
                    case 22:
                      2 & (r = n.stateNode)._visibility &&
                        ((r._visibility &= -3), e(n));
                      break;
                    default:
                      e(n);
                  }
                  t = t.sibling;
                }
              })(e))
            : l_(e);
      }
    }
    function lV(e, t) {
      for (; null !== lp; ) {
        var n = lp;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            o9(8, n, t);
            break;
          case 23:
          case 22:
            if (
              null !== n.memoizedState &&
              null !== n.memoizedState.cachePool
            ) {
              var r = n.memoizedState.cachePool.pool;
              null != r && r.refCount++;
            }
            break;
          case 24:
            r8(n.memoizedState.cache);
        }
        if (null !== (r = n.child)) (r.return = n), (lp = r);
        else
          for (n = e; null !== lp; ) {
            var i = (r = lp).sibling,
              a = r.return;
            if (
              (!(function e(t) {
                var n = t.alternate;
                null !== n && ((t.alternate = null), e(n)),
                  (t.child = null),
                  (t.deletions = null),
                  (t.sibling = null),
                  5 === t.tag && null !== (n = t.stateNode) && eH(n),
                  (t.stateNode = null),
                  (t.return = null),
                  (t.dependencies = null),
                  (t.memoizedProps = null),
                  (t.memoizedState = null),
                  (t.pendingProps = null),
                  (t.stateNode = null),
                  (t.updateQueue = null);
              })(r),
              r === n)
            ) {
              lp = null;
              break;
            }
            if (null !== i) {
              (i.return = a), (lp = i);
              break;
            }
            lp = a;
          }
      }
    }
    var lI = {
        getCacheForType: function (e) {
          var t = rJ(r5),
            n = t.data.get(e);
          return void 0 === n && ((n = e()), t.data.set(e, n)), n;
        },
        cacheSignal: function () {
          return rJ(r5).controller.signal;
        },
      },
      lF = "function" == typeof WeakMap ? WeakMap : Map,
      lB = 0,
      l$ = null,
      lU = null,
      lW = 0,
      lH = 0,
      lY = null,
      lQ = !1,
      lq = !1,
      lG = !1,
      lX = 0,
      lK = 0,
      lZ = 0,
      lJ = 0,
      l0 = 0,
      l1 = 0,
      l2 = 0,
      l3 = null,
      l4 = null,
      l5 = !1,
      l6 = 0,
      l8 = 0,
      l9 = 1 / 0,
      l7 = null,
      se = null,
      st = 0,
      sn = null,
      sr = null,
      si = 0,
      sa = 0,
      so = null,
      sl = null,
      ss = 0,
      su = null;
    function sc() {
      return 0 != (2 & lB) && 0 !== lW ? lW & -lW : null !== z.T ? s3() : ez();
    }
    function sd() {
      if (0 === l1)
        if (0 == (0x20000000 & lW) || rR) {
          var e = ew;
          0 == (3932160 & (ew <<= 1)) && (ew = 262144), (l1 = e);
        } else l1 = 0x20000000;
      return null !== (e = iH.current) && (e.flags |= 32), l1;
    }
    function sf(e, t, n) {
      ((e === l$ && (2 === lH || 9 === lH)) ||
        null !== e.cancelPendingCommit) &&
        (sv(e, 0), sm(e, lW, l1, !1)),
        eN(e, n),
        (0 == (2 & lB) || e !== l$) &&
          (e === l$ &&
            (0 == (2 & lB) && (lJ |= n), 4 === lK && sm(e, lW, l1, !1)),
          sX(e));
    }
    function sp(e, t, n) {
      if (0 != (6 & lB)) throw Error(l(327));
      for (
        var r = (!n && 0 == (127 & t) && 0 == (t & e.expiredLanes)) || eC(e, t),
          i = r
            ? (function (e, t) {
                var n = lB;
                lB |= 2;
                var r = sw(),
                  i = sk();
                l$ !== e || lW !== t
                  ? ((l7 = null), (l9 = ea() + 500), sv(e, t))
                  : (lq = eC(e, t));
                e: for (;;)
                  try {
                    if (0 !== lH && null !== lU) {
                      t = lU;
                      var a = lY;
                      t: switch (lH) {
                        case 1:
                          (lH = 0), (lY = null), sT(e, t, a, 1);
                          break;
                        case 2:
                        case 9:
                          if (ih(a)) {
                            (lH = 0), (lY = null), sP(t);
                            break;
                          }
                          (t = function () {
                            (2 !== lH && 9 !== lH) || l$ !== e || (lH = 7),
                              sX(e);
                          }),
                            a.then(t, t);
                          break e;
                        case 3:
                          lH = 7;
                          break e;
                        case 4:
                          lH = 5;
                          break e;
                        case 7:
                          ih(a)
                            ? ((lH = 0), (lY = null), sP(t))
                            : ((lH = 0), (lY = null), sT(e, t, a, 7));
                          break;
                        case 5:
                          var o = null;
                          switch (lU.tag) {
                            case 26:
                              o = lU.memoizedState;
                            case 5:
                            case 27:
                              var s = lU;
                              if (o ? u7(o) : s.stateNode.complete) {
                                (lH = 0), (lY = null);
                                var u = s.sibling;
                                if (null !== u) lU = u;
                                else {
                                  var c = s.return;
                                  null !== c ? ((lU = c), sN(c)) : (lU = null);
                                }
                                break t;
                              }
                          }
                          (lH = 0), (lY = null), sT(e, t, a, 5);
                          break;
                        case 6:
                          (lH = 0), (lY = null), sT(e, t, a, 6);
                          break;
                        case 8:
                          sy(), (lK = 6);
                          break e;
                        default:
                          throw Error(l(462));
                      }
                    }
                    for (; null !== lU && !er(); ) sC(lU);
                    break;
                  } catch (t) {
                    sb(e, t);
                  }
                return ((rH = rW = null),
                (z.H = r),
                (z.A = i),
                (lB = n),
                null !== lU)
                  ? 0
                  : ((l$ = null), (lW = 0), n8(), lK);
              })(e, t)
            : sE(e, t, !0),
          a = r;
        ;

      ) {
        if (0 === i) lq && !r && sm(e, t, 0, !1);
        else {
          if (
            ((n = e.current.alternate),
            a &&
              !(function (e) {
                for (var t = e; ; ) {
                  var n = t.tag;
                  if (
                    (0 === n || 11 === n || 15 === n) &&
                    16384 & t.flags &&
                    null !== (n = t.updateQueue) &&
                    null !== (n = n.stores)
                  )
                    for (var r = 0; r < n.length; r++) {
                      var i = n[r],
                        a = i.getSnapshot;
                      i = i.value;
                      try {
                        if (!nA(a(), i)) return !1;
                      } catch (e) {
                        return !1;
                      }
                    }
                  if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                    (n.return = t), (t = n);
                  else {
                    if (t === e) break;
                    for (; null === t.sibling; ) {
                      if (null === t.return || t.return === e) return !0;
                      t = t.return;
                    }
                    (t.sibling.return = t.return), (t = t.sibling);
                  }
                }
                return !0;
              })(n))
          ) {
            (i = sE(e, t, !1)), (a = !1);
            continue;
          }
          if (2 === i) {
            if (((a = t), e.errorRecoveryDisabledLanes & a)) var o = 0;
            else
              o =
                0 != (o = -0x20000001 & e.pendingLanes)
                  ? o
                  : 0x20000000 & o
                  ? 0x20000000
                  : 0;
            if (0 !== o) {
              t = o;
              e: {
                i = l3;
                var s = e.current.memoizedState.isDehydrated;
                if ((s && (sv(e, o).flags |= 256), 2 !== (o = sE(e, o, !1)))) {
                  if (lG && !s) {
                    (e.errorRecoveryDisabledLanes |= a), (lJ |= a), (i = 4);
                    break e;
                  }
                  (a = l4),
                    (l4 = i),
                    null !== a &&
                      (null === l4 ? (l4 = a) : l4.push.apply(l4, a));
                }
                i = o;
              }
              if (((a = !1), 2 !== i)) continue;
            }
          }
          if (1 === i) {
            sv(e, 0), sm(e, t, 0, !0);
            break;
          }
          e: {
            switch (((r = e), (a = i))) {
              case 0:
              case 1:
                throw Error(l(345));
              case 4:
                if ((4194048 & t) !== t) break;
              case 6:
                sm(r, t, l1, !lQ);
                break e;
              case 2:
                l4 = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(l(329));
            }
            if ((0x3c00000 & t) === t && 10 < (i = l6 + 300 - ea())) {
              if ((sm(r, t, l1, !lQ), 0 !== eE(r, 0, !0))) break e;
              (si = t),
                (r.timeoutHandle = uP(
                  sh.bind(
                    null,
                    r,
                    n,
                    l4,
                    l7,
                    l5,
                    t,
                    l1,
                    lJ,
                    l2,
                    lQ,
                    a,
                    "Throttled",
                    -0,
                    0
                  ),
                  i
                ));
              break e;
            }
            sh(r, n, l4, l7, l5, t, l1, lJ, l2, lQ, a, null, -0, 0);
          }
        }
        break;
      }
      sX(e);
    }
    function sh(e, t, n, r, i, a, o, l, s, u, c, d, f, p) {
      if (
        ((e.timeoutHandle = -1),
        8192 & (d = t.subtreeFlags) || 0x1002000 == (0x1002000 & d))
      ) {
        lz(
          t,
          a,
          (d = {
            stylesheets: null,
            count: 0,
            imgCount: 0,
            imgBytes: 0,
            suspenseyImages: [],
            waitingForImages: !0,
            waitingForViewTransition: !1,
            unsuspend: tv,
          })
        );
        var h,
          m,
          g =
            (0x3c00000 & a) === a
              ? l6 - ea()
              : (4194048 & a) === a
              ? l8 - ea()
              : 0;
        if (
          null !==
          ((h = d),
          (m = g),
          h.stylesheets && 0 === h.count && cr(h, h.stylesheets),
          (g =
            0 < h.count || 0 < h.imgCount
              ? function (e) {
                  var t = setTimeout(function () {
                    if ((h.stylesheets && cr(h, h.stylesheets), h.unsuspend)) {
                      var e = h.unsuspend;
                      (h.unsuspend = null), e();
                    }
                  }, 6e4 + m);
                  0 < h.imgBytes &&
                    0 === ce &&
                    (ce =
                      62500 *
                      (function () {
                        if ("function" == typeof performance.getEntriesByType) {
                          for (
                            var e = 0,
                              t = 0,
                              n = performance.getEntriesByType("resource"),
                              r = 0;
                            r < n.length;
                            r++
                          ) {
                            var i = n[r],
                              a = i.transferSize,
                              o = i.initiatorType,
                              l = i.duration;
                            if (a && l && uv(o)) {
                              for (
                                o = 0, l = i.responseEnd, r += 1;
                                r < n.length;
                                r++
                              ) {
                                var s = n[r],
                                  u = s.startTime;
                                if (u > l) break;
                                var c = s.transferSize,
                                  d = s.initiatorType;
                                c &&
                                  uv(d) &&
                                  (o +=
                                    c *
                                    ((s = s.responseEnd) < l
                                      ? 1
                                      : (l - u) / (s - u)));
                              }
                              if (
                                (--r,
                                (t += (8 * (a + o)) / (i.duration / 1e3)),
                                10 < ++e)
                              )
                                break;
                            }
                          }
                          if (0 < e) return t / e / 1e6;
                        }
                        return navigator.connection &&
                          "number" == typeof (e = navigator.connection.downlink)
                          ? e
                          : 5;
                      })());
                  var n = setTimeout(function () {
                    if (
                      ((h.waitingForImages = !1),
                      0 === h.count &&
                        (h.stylesheets && cr(h, h.stylesheets), h.unsuspend))
                    ) {
                      var e = h.unsuspend;
                      (h.unsuspend = null), e();
                    }
                  }, (h.imgBytes > ce ? 50 : 800) + m);
                  return (
                    (h.unsuspend = e),
                    function () {
                      (h.unsuspend = null), clearTimeout(t), clearTimeout(n);
                    }
                  );
                }
              : null))
        ) {
          (si = a),
            (e.cancelPendingCommit = g(
              sA.bind(null, e, t, a, n, r, i, o, l, s, c, d, null, f, p)
            )),
            sm(e, a, o, !u);
          return;
        }
      }
      sA(e, t, a, n, r, i, o, l, s);
    }
    function sm(e, t, n, r) {
      (t &= ~l0),
        (t &= ~lJ),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes);
      for (var i = t; 0 < i; ) {
        var a = 31 - ey(i),
          o = 1 << a;
        (r[a] = -1), (i &= ~o);
      }
      0 !== n && ej(e, n, t);
    }
    function sg() {
      return 0 != (6 & lB) || (sK(0, !1), !1);
    }
    function sy() {
      if (null !== lU) {
        if (0 === lH) var e = lU.return;
        else (e = lU), (rH = rW = null), au(e), (ix = null), (iw = 0), (e = lU);
        for (; null !== e; ) o6(e.alternate, e), (e = e.return);
        lU = null;
      }
    }
    function sv(e, t) {
      var n = e.timeoutHandle;
      -1 !== n && ((e.timeoutHandle = -1), uT(n)),
        null !== (n = e.cancelPendingCommit) &&
          ((e.cancelPendingCommit = null), n()),
        (si = 0),
        sy(),
        (l$ = e),
        (lU = n = rl(e.current, null)),
        (lW = t),
        (lH = 0),
        (lY = null),
        (lQ = !1),
        (lq = eC(e, t)),
        (lG = !1),
        (l2 = l1 = l0 = lJ = lZ = lK = 0),
        (l4 = l3 = null),
        (l5 = !1),
        0 != (8 & t) && (t |= 32 & t);
      var r = e.entangledLanes;
      if (0 !== r)
        for (e = e.entanglements, r &= t; 0 < r; ) {
          var i = 31 - ey(r),
            a = 1 << i;
          (t |= e[i]), (r &= ~a);
        }
      return (lX = t), n8(), n;
    }
    function sb(e, t) {
      (i1 = null),
        (z.H = os),
        t === iu || t === id
          ? ((t = iv()), (lH = 3))
          : t === ic
          ? ((t = iv()), (lH = 4))
          : (lH =
              t === oC
                ? 8
                : null !== t &&
                  "object" == typeof t &&
                  "function" == typeof t.then
                ? 6
                : 1),
        (lY = t),
        null === lU && ((lK = 1), ox(e, rm(t, e.current)));
    }
    function sx() {
      var e = iH.current;
      return (
        null === e ||
        ((4194048 & lW) === lW
          ? null === iY
          : ((0x3c00000 & lW) === lW || 0 != (0x20000000 & lW)) && e === iY)
      );
    }
    function sw() {
      var e = z.H;
      return (z.H = os), null === e ? os : e;
    }
    function sk() {
      var e = z.A;
      return (z.A = lI), e;
    }
    function sS() {
      (lK = 4),
        lQ || ((4194048 & lW) !== lW && null !== iH.current) || (lq = !0),
        (0 == (0x7ffffff & lZ) && 0 == (0x7ffffff & lJ)) ||
          null === l$ ||
          sm(l$, lW, l1, !1);
    }
    function sE(e, t, n) {
      var r = lB;
      lB |= 2;
      var i = sw(),
        a = sk();
      (l$ !== e || lW !== t) && ((l7 = null), sv(e, t)), (t = !1);
      var o = lK;
      e: for (;;)
        try {
          if (0 !== lH && null !== lU) {
            var l = lU,
              s = lY;
            switch (lH) {
              case 8:
                sy(), (o = 6);
                break e;
              case 3:
              case 2:
              case 9:
              case 6:
                null === iH.current && (t = !0);
                var u = lH;
                if (((lH = 0), (lY = null), sT(e, l, s, u), n && lq)) {
                  o = 0;
                  break e;
                }
                break;
              default:
                (u = lH), (lH = 0), (lY = null), sT(e, l, s, u);
            }
          }
          (function () {
            for (; null !== lU; ) sC(lU);
          })(),
            (o = lK);
          break;
        } catch (t) {
          sb(e, t);
        }
      return (
        t && e.shellSuspendCounter++,
        (rH = rW = null),
        (lB = r),
        (z.H = i),
        (z.A = a),
        null === lU && ((l$ = null), (lW = 0), n8()),
        o
      );
    }
    function sC(e) {
      var t = oJ(e.alternate, e, lX);
      (e.memoizedProps = e.pendingProps), null === t ? sN(e) : (lU = t);
    }
    function sP(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = oV(n, t, t.pendingProps, t.type, void 0, lW);
          break;
        case 11:
          t = oV(n, t, t.pendingProps, t.type.render, t.ref, lW);
          break;
        case 5:
          au(t);
        default:
          o6(n, t), (t = oJ(n, (t = lU = rs(t, lX)), lX));
      }
      (e.memoizedProps = e.pendingProps), null === t ? sN(e) : (lU = t);
    }
    function sT(e, t, n, r) {
      (rH = rW = null), au(t), (ix = null), (iw = 0);
      var i = t.return;
      try {
        if (
          (function (e, t, n, r, i) {
            if (
              ((n.flags |= 32768),
              null !== r && "object" == typeof r && "function" == typeof r.then)
            ) {
              if (
                (null !== (t = n.alternate) && rX(t, n, i, !0),
                null !== (n = iH.current))
              ) {
                switch (n.tag) {
                  case 31:
                  case 13:
                    return (
                      null === iY
                        ? sS()
                        : null === n.alternate && 0 === lK && (lK = 3),
                      (n.flags &= -257),
                      (n.flags |= 65536),
                      (n.lanes = i),
                      r === ip
                        ? (n.flags |= 16384)
                        : (null === (t = n.updateQueue)
                            ? (n.updateQueue = new Set([r]))
                            : t.add(r),
                          sI(e, r, i)),
                      !1
                    );
                  case 22:
                    return (
                      (n.flags |= 65536),
                      r === ip
                        ? (n.flags |= 16384)
                        : (null === (t = n.updateQueue)
                            ? ((t = {
                                transitions: null,
                                markerInstances: null,
                                retryQueue: new Set([r]),
                              }),
                              (n.updateQueue = t))
                            : null === (n = t.retryQueue)
                            ? (t.retryQueue = new Set([r]))
                            : n.add(r),
                          sI(e, r, i)),
                      !1
                    );
                }
                throw Error(l(435, n.tag));
              }
              return sI(e, r, i), sS(), !1;
            }
            if (rR)
              return (
                null !== (t = iH.current)
                  ? (0 == (65536 & t.flags) && (t.flags |= 256),
                    (t.flags |= 65536),
                    (t.lanes = i),
                    r !== rD && r$(rm((e = Error(l(422), { cause: r })), n)))
                  : (r !== rD && r$(rm((t = Error(l(423), { cause: r })), n)),
                    (e = e.current.alternate),
                    (e.flags |= 65536),
                    (i &= -i),
                    (e.lanes |= i),
                    (r = rm(r, n)),
                    (i = ok(e.stateNode, r, i)),
                    iz(e, i),
                    4 !== lK && (lK = 2)),
                !1
              );
            var a = Error(l(520), { cause: r });
            if (
              ((a = rm(a, n)),
              null === l3 ? (l3 = [a]) : l3.push(a),
              4 !== lK && (lK = 2),
              null === t)
            )
              return !0;
            (r = rm(r, n)), (n = t);
            do {
              switch (n.tag) {
                case 3:
                  return (
                    (n.flags |= 65536),
                    (e = i & -i),
                    (n.lanes |= e),
                    (e = ok(n.stateNode, r, e)),
                    iz(n, e),
                    !1
                  );
                case 1:
                  if (
                    ((t = n.type),
                    (a = n.stateNode),
                    0 == (128 & n.flags) &&
                      ("function" == typeof t.getDerivedStateFromError ||
                        (null !== a &&
                          "function" == typeof a.componentDidCatch &&
                          (null === se || !se.has(a)))))
                  )
                    return (
                      (n.flags |= 65536),
                      (i &= -i),
                      (n.lanes |= i),
                      oE((i = oS(i)), e, n, r),
                      iz(n, i),
                      !1
                    );
              }
              n = n.return;
            } while (null !== n);
            return !1;
          })(e, i, t, n, lW)
        ) {
          (lK = 1), ox(e, rm(n, e.current)), (lU = null);
          return;
        }
      } catch (t) {
        if (null !== i) throw ((lU = i), t);
        (lK = 1), ox(e, rm(n, e.current)), (lU = null);
        return;
      }
      32768 & t.flags
        ? (rR || 1 === r
            ? (e = !0)
            : lq || 0 != (0x20000000 & lW)
            ? (e = !1)
            : ((lQ = e = !0),
              (2 === r || 9 === r || 3 === r || 6 === r) &&
                null !== (r = iH.current) &&
                13 === r.tag &&
                (r.flags |= 16384)),
          sj(t, e))
        : sN(t);
    }
    function sN(e) {
      var t = e;
      do {
        if (0 != (32768 & t.flags)) return void sj(t, lQ);
        e = t.return;
        var n = (function (e, t, n) {
          var r = t.pendingProps;
          switch ((rN(t), t.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1:
              return o5(t), null;
            case 3:
              return (
                (n = t.stateNode),
                (r = null),
                null !== e && (r = e.memoizedState.cache),
                t.memoizedState.cache !== r && (t.flags |= 2048),
                rQ(r5),
                Q(),
                n.pendingContext &&
                  ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null === e || null === e.child) &&
                  (rI(t)
                    ? o0(t)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                      ((t.flags |= 1024), rB())),
                o5(t),
                null
              );
            case 26:
              var i = t.type,
                a = t.memoizedState;
              return (
                null === e
                  ? (o0(t),
                    null !== a
                      ? (o5(t), o2(t, a))
                      : (o5(t), o1(t, i, null, r, n)))
                  : a
                  ? a !== e.memoizedState
                    ? (o0(t), o5(t), o2(t, a))
                    : (o5(t), (t.flags &= -0x1000001))
                  : ((e = e.memoizedProps) !== r && o0(t),
                    o5(t),
                    o1(t, i, e, r, n)),
                null
              );
            case 27:
              if (
                (G(t),
                (n = W.current),
                (i = t.type),
                null !== e && null != t.stateNode)
              )
                e.memoizedProps !== r && o0(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return o5(t), null;
                }
                (e = $.current),
                  rI(t) ? rO(t) : ((t.stateNode = e = u$(i, r, n)), o0(t));
              }
              return o5(t), null;
            case 5:
              if ((G(t), (i = t.type), null !== e && null != t.stateNode))
                e.memoizedProps !== r && o0(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return o5(t), null;
                }
                if (((a = $.current), rI(t))) rO(t);
                else {
                  var o = uw(W.current);
                  switch (a) {
                    case 1:
                      a = o.createElementNS("http://www.w3.org/2000/svg", i);
                      break;
                    case 2:
                      a = o.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        i
                      );
                      break;
                    default:
                      switch (i) {
                        case "svg":
                          a = o.createElementNS(
                            "http://www.w3.org/2000/svg",
                            i
                          );
                          break;
                        case "math":
                          a = o.createElementNS(
                            "http://www.w3.org/1998/Math/MathML",
                            i
                          );
                          break;
                        case "script":
                          ((a = o.createElement("div")).innerHTML =
                            "<script></script>"),
                            (a = a.removeChild(a.firstChild));
                          break;
                        case "select":
                          (a =
                            "string" == typeof r.is
                              ? o.createElement("select", { is: r.is })
                              : o.createElement("select")),
                            r.multiple
                              ? (a.multiple = !0)
                              : r.size && (a.size = r.size);
                          break;
                        default:
                          a =
                            "string" == typeof r.is
                              ? o.createElement(i, { is: r.is })
                              : o.createElement(i);
                      }
                  }
                  (a[eO] = t), (a[eV] = r);
                  e: for (o = t.child; null !== o; ) {
                    if (5 === o.tag || 6 === o.tag) a.appendChild(o.stateNode);
                    else if (4 !== o.tag && 27 !== o.tag && null !== o.child) {
                      (o.child.return = o), (o = o.child);
                      continue;
                    }
                    if (o === t) break;
                    for (; null === o.sibling; ) {
                      if (null === o.return || o.return === t) break e;
                      o = o.return;
                    }
                    (o.sibling.return = o.return), (o = o.sibling);
                  }
                  switch (((t.stateNode = a), uy(a, i, r), i)) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      r = !!r.autoFocus;
                      break;
                    case "img":
                      r = !0;
                      break;
                    default:
                      r = !1;
                  }
                  r && o0(t);
                }
              }
              return (
                o5(t),
                o1(
                  t,
                  t.type,
                  null === e ? null : e.memoizedProps,
                  t.pendingProps,
                  n
                ),
                null
              );
            case 6:
              if (e && null != t.stateNode) e.memoizedProps !== r && o0(t);
              else {
                if ("string" != typeof r && null === t.stateNode)
                  throw Error(l(166));
                if (((e = W.current), rI(t))) {
                  if (
                    ((e = t.stateNode),
                    (n = t.memoizedProps),
                    (r = null),
                    null !== (i = rA))
                  )
                    switch (i.tag) {
                      case 27:
                      case 5:
                        r = i.memoizedProps;
                    }
                  (e[eO] = t),
                    (e = !!(
                      e.nodeValue === n ||
                      (null !== r && !0 === r.suppressHydrationWarning) ||
                      uh(e.nodeValue, n)
                    )) || r_(t, !0);
                } else
                  ((e = uw(e).createTextNode(r))[eO] = t), (t.stateNode = e);
              }
              return o5(t), null;
            case 31:
              if (
                ((n = t.memoizedState), null === e || null !== e.memoizedState)
              ) {
                if (((r = rI(t)), null !== n)) {
                  if (null === e) {
                    if (!r) throw Error(l(318));
                    if (
                      !(e =
                        null !== (e = t.memoizedState) ? e.dehydrated : null)
                    )
                      throw Error(l(557));
                    e[eO] = t;
                  } else
                    rF(),
                      0 == (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  o5(t), (e = !1);
                } else
                  (n = rB()),
                    null !== e &&
                      null !== e.memoizedState &&
                      (e.memoizedState.hydrationErrors = n),
                    (e = !0);
                if (!e) {
                  if (256 & t.flags) return iK(t), t;
                  return iK(t), null;
                }
                if (0 != (128 & t.flags)) throw Error(l(558));
              }
              return o5(t), null;
            case 13:
              if (
                ((r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (((i = rI(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(l(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(l(317));
                    i[eO] = t;
                  } else
                    rF(),
                      0 == (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  o5(t), (i = !1);
                } else
                  (i = rB()),
                    null !== e &&
                      null !== e.memoizedState &&
                      (e.memoizedState.hydrationErrors = i),
                    (i = !0);
                if (!i) {
                  if (256 & t.flags) return iK(t), t;
                  return iK(t), null;
                }
              }
              if ((iK(t), 0 != (128 & t.flags))) return (t.lanes = n), t;
              return (
                (n = null !== r),
                (e = null !== e && null !== e.memoizedState),
                n &&
                  ((r = t.child),
                  (i = null),
                  null !== r.alternate &&
                    null !== r.alternate.memoizedState &&
                    null !== r.alternate.memoizedState.cachePool &&
                    (i = r.alternate.memoizedState.cachePool.pool),
                  (a = null),
                  null !== r.memoizedState &&
                    null !== r.memoizedState.cachePool &&
                    (a = r.memoizedState.cachePool.pool),
                  a !== i && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                o3(t, t.updateQueue),
                o5(t),
                null
              );
            case 4:
              return (
                Q(), null === e && ui(t.stateNode.containerInfo), o5(t), null
              );
            case 10:
              return rQ(t.type), o5(t), null;
            case 19:
              if ((F(iZ), null === (r = t.memoizedState))) return o5(t), null;
              if (((i = 0 != (128 & t.flags)), null === (a = r.rendering)))
                if (i) o4(r, !1);
                else {
                  if (0 !== lK || (null !== e && 0 != (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (a = iJ(e))) {
                        for (
                          t.flags |= 128,
                            o4(r, !1),
                            t.updateQueue = e = a.updateQueue,
                            o3(t, e),
                            t.subtreeFlags = 0,
                            e = n,
                            n = t.child;
                          null !== n;

                        )
                          rs(n, e), (n = n.sibling);
                        return (
                          B(iZ, (1 & iZ.current) | 2),
                          rR && rC(t, r.treeForkCount),
                          t.child
                        );
                      }
                      e = e.sibling;
                    }
                  null !== r.tail &&
                    ea() > l9 &&
                    ((t.flags |= 128),
                    (i = !0),
                    o4(r, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!i)
                  if (null !== (e = iJ(a))) {
                    if (
                      ((t.flags |= 128),
                      (i = !0),
                      (t.updateQueue = e = e.updateQueue),
                      o3(t, e),
                      o4(r, !0),
                      null === r.tail &&
                        "hidden" === r.tailMode &&
                        !a.alternate &&
                        !rR)
                    )
                      return o5(t), null;
                  } else
                    2 * ea() - r.renderingStartTime > l9 &&
                      0x20000000 !== n &&
                      ((t.flags |= 128),
                      (i = !0),
                      o4(r, !1),
                      (t.lanes = 4194304));
                r.isBackwards
                  ? ((a.sibling = t.child), (t.child = a))
                  : (null !== (e = r.last) ? (e.sibling = a) : (t.child = a),
                    (r.last = a));
              }
              if (null !== r.tail)
                return (
                  (e = r.tail),
                  (r.rendering = e),
                  (r.tail = e.sibling),
                  (r.renderingStartTime = ea()),
                  (e.sibling = null),
                  (n = iZ.current),
                  B(iZ, i ? (1 & n) | 2 : 1 & n),
                  rR && rC(t, r.treeForkCount),
                  e
                );
              return o5(t), null;
            case 22:
            case 23:
              return (
                iK(t),
                iW(),
                (r = null !== t.memoizedState),
                null !== e
                  ? (null !== e.memoizedState) !== r && (t.flags |= 8192)
                  : r && (t.flags |= 8192),
                r
                  ? 0 != (0x20000000 & n) &&
                    0 == (128 & t.flags) &&
                    (o5(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : o5(t),
                null !== (n = t.updateQueue) && o3(t, n.retryQueue),
                (n = null),
                null !== e &&
                  null !== e.memoizedState &&
                  null !== e.memoizedState.cachePool &&
                  (n = e.memoizedState.cachePool.pool),
                (r = null),
                null !== t.memoizedState &&
                  null !== t.memoizedState.cachePool &&
                  (r = t.memoizedState.cachePool.pool),
                r !== n && (t.flags |= 2048),
                null !== e && F(ia),
                null
              );
            case 24:
              return (
                (n = null),
                null !== e && (n = e.memoizedState.cache),
                t.memoizedState.cache !== n && (t.flags |= 2048),
                rQ(r5),
                o5(t),
                null
              );
            case 25:
            case 30:
              return null;
          }
          throw Error(l(156, t.tag));
        })(t.alternate, t, lX);
        if (null !== n) {
          lU = n;
          return;
        }
        if (null !== (t = t.sibling)) {
          lU = t;
          return;
        }
        lU = t = e;
      } while (null !== t);
      0 === lK && (lK = 5);
    }
    function sj(e, t) {
      do {
        var n = (function (e, t) {
          switch ((rN(t), t.tag)) {
            case 1:
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 3:
              return (
                rQ(r5),
                Q(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 26:
            case 27:
            case 5:
              return G(t), null;
            case 31:
              if (null !== t.memoizedState) {
                if ((iK(t), null === t.alternate)) throw Error(l(340));
                rF();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 13:
              if (
                (iK(t), null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340));
                rF();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return F(iZ), null;
            case 4:
              return Q(), null;
            case 10:
              return rQ(t.type), null;
            case 22:
            case 23:
              return (
                iK(t),
                iW(),
                null !== e && F(ia),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 24:
              return rQ(r5), null;
            default:
              return null;
          }
        })(e.alternate, e);
        if (null !== n) {
          (n.flags &= 32767), (lU = n);
          return;
        }
        if (
          (null !== (n = e.return) &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && null !== (e = e.sibling))
        ) {
          lU = e;
          return;
        }
        lU = e = n;
      } while (null !== e);
      (lK = 6), (lU = null);
    }
    function sA(e, t, n, r, i, a, o, s, u) {
      e.cancelPendingCommit = null;
      do sD();
      while (0 !== st);
      if (0 != (6 & lB)) throw Error(l(327));
      if (null !== t) {
        if (t === e.current) throw Error(l(177));
        if (
          (!(function (e, t, n, r, i, a) {
            var o = e.pendingLanes;
            (e.pendingLanes = n),
              (e.suspendedLanes = 0),
              (e.pingedLanes = 0),
              (e.warmLanes = 0),
              (e.expiredLanes &= n),
              (e.entangledLanes &= n),
              (e.errorRecoveryDisabledLanes &= n),
              (e.shellSuspendCounter = 0);
            var l = e.entanglements,
              s = e.expirationTimes,
              u = e.hiddenUpdates;
            for (n = o & ~n; 0 < n; ) {
              var c = 31 - ey(n),
                d = 1 << c;
              (l[c] = 0), (s[c] = -1);
              var f = u[c];
              if (null !== f)
                for (u[c] = null, c = 0; c < f.length; c++) {
                  var p = f[c];
                  null !== p && (p.lane &= -0x20000001);
                }
              n &= ~d;
            }
            0 !== r && ej(e, r, 0),
              0 !== a &&
                0 === i &&
                0 !== e.tag &&
                (e.suspendedLanes |= a & ~(o & ~t));
          })(e, n, (a = t.lanes | t.childLanes | n6), o, s, u),
          e === l$ && ((lU = l$ = null), (lW = 0)),
          (sr = t),
          (sn = e),
          (si = n),
          (sa = a),
          (so = i),
          (sl = r),
          0 != (10256 & t.subtreeFlags) || 0 != (10256 & t.flags)
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              et(eu, function () {
                return s_(), null;
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = 0 != (13878 & t.flags)),
          0 != (13878 & t.subtreeFlags) || r)
        ) {
          (r = z.T), (z.T = null), (i = D.p), (D.p = 2), (o = lB), (lB |= 4);
          try {
            !(function (e, t) {
              if (((e = e.containerInfo), (ub = cp), nD((e = nz(e))))) {
                if ("selectionStart" in e)
                  var n = { start: e.selectionStart, end: e.selectionEnd };
                else
                  e: {
                    var r =
                      (n = ((n = e.ownerDocument) && n.defaultView) || window)
                        .getSelection && n.getSelection();
                    if (r && 0 !== r.rangeCount) {
                      n = r.anchorNode;
                      var i,
                        a = r.anchorOffset,
                        o = r.focusNode;
                      r = r.focusOffset;
                      try {
                        n.nodeType, o.nodeType;
                      } catch (e) {
                        n = null;
                        break e;
                      }
                      var s = 0,
                        u = -1,
                        c = -1,
                        d = 0,
                        f = 0,
                        p = e,
                        h = null;
                      t: for (;;) {
                        for (
                          ;
                          p !== n ||
                            (0 !== a && 3 !== p.nodeType) ||
                            (u = s + a),
                            p !== o ||
                              (0 !== r && 3 !== p.nodeType) ||
                              (c = s + r),
                            3 === p.nodeType && (s += p.nodeValue.length),
                            null !== (i = p.firstChild);

                        )
                          (h = p), (p = i);
                        for (;;) {
                          if (p === e) break t;
                          if (
                            (h === n && ++d === a && (u = s),
                            h === o && ++f === r && (c = s),
                            null !== (i = p.nextSibling))
                          )
                            break;
                          h = (p = h).parentNode;
                        }
                        p = i;
                      }
                      n = -1 === u || -1 === c ? null : { start: u, end: c };
                    } else n = null;
                  }
                n = n || { start: 0, end: 0 };
              } else n = null;
              for (
                ux = { focusedElem: e, selectionRange: n }, cp = !1, lp = t;
                null !== lp;

              )
                if (
                  ((e = (t = lp).child),
                  0 != (1028 & t.subtreeFlags) && null !== e)
                )
                  (e.return = t), (lp = e);
                else
                  for (; null !== lp; ) {
                    switch (((o = (t = lp).alternate), (e = t.flags), t.tag)) {
                      case 0:
                        if (
                          0 != (4 & e) &&
                          null !==
                            (e = null !== (e = t.updateQueue) ? e.events : null)
                        )
                          for (n = 0; n < e.length; n++)
                            (a = e[n]).ref.impl = a.nextImpl;
                        break;
                      case 11:
                      case 15:
                      case 5:
                      case 26:
                      case 27:
                      case 6:
                      case 4:
                      case 17:
                        break;
                      case 1:
                        if (0 != (1024 & e) && null !== o) {
                          (e = void 0),
                            (n = t),
                            (a = o.memoizedProps),
                            (o = o.memoizedState),
                            (r = n.stateNode);
                          try {
                            var m = og(n.type, a);
                            (e = r.getSnapshotBeforeUpdate(m, o)),
                              (r.__reactInternalSnapshotBeforeUpdate = e);
                          } catch (e) {
                            sV(n, n.return, e);
                          }
                        }
                        break;
                      case 3:
                        if (0 != (1024 & e)) {
                          if (
                            9 === (n = (e = t.stateNode.containerInfo).nodeType)
                          )
                            uz(e);
                          else if (1 === n)
                            switch (e.nodeName) {
                              case "HEAD":
                              case "HTML":
                              case "BODY":
                                uz(e);
                                break;
                              default:
                                e.textContent = "";
                            }
                        }
                        break;
                      default:
                        if (0 != (1024 & e)) throw Error(l(163));
                    }
                    if (null !== (e = t.sibling)) {
                      (e.return = t.return), (lp = e);
                      break;
                    }
                    lp = t.return;
                  }
            })(e, t);
          } finally {
            (lB = o), (D.p = i), (z.T = r);
          }
        }
        (st = 1), sM(), sR(), sL();
      }
    }
    function sM() {
      if (1 === st) {
        st = 0;
        var e = sn,
          t = sr,
          n = 0 != (13878 & t.flags);
        if (0 != (13878 & t.subtreeFlags) || n) {
          (n = z.T), (z.T = null);
          var r = D.p;
          D.p = 2;
          var i = lB;
          lB |= 4;
          try {
            lE(t, e);
            var a = ux,
              o = nz(e.containerInfo),
              l = a.focusedElem,
              s = a.selectionRange;
            if (
              o !== l &&
              l &&
              l.ownerDocument &&
              (function e(t, n) {
                return (
                  !!t &&
                  !!n &&
                  (t === n ||
                    ((!t || 3 !== t.nodeType) &&
                      (n && 3 === n.nodeType
                        ? e(t, n.parentNode)
                        : "contains" in t
                        ? t.contains(n)
                        : !!t.compareDocumentPosition &&
                          !!(16 & t.compareDocumentPosition(n)))))
                );
              })(l.ownerDocument.documentElement, l)
            ) {
              if (null !== s && nD(l)) {
                var u = s.start,
                  c = s.end;
                if ((void 0 === c && (c = u), "selectionStart" in l))
                  (l.selectionStart = u),
                    (l.selectionEnd = Math.min(c, l.value.length));
                else {
                  var d = l.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      h = l.textContent.length,
                      m = Math.min(s.start, h),
                      g = void 0 === s.end ? m : Math.min(s.end, h);
                    !p.extend && m > g && ((o = g), (g = m), (m = o));
                    var y = nL(l, m),
                      v = nL(l, g);
                    if (
                      y &&
                      v &&
                      (1 !== p.rangeCount ||
                        p.anchorNode !== y.node ||
                        p.anchorOffset !== y.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var b = d.createRange();
                      b.setStart(y.node, y.offset),
                        p.removeAllRanges(),
                        m > g
                          ? (p.addRange(b), p.extend(v.node, v.offset))
                          : (b.setEnd(v.node, v.offset), p.addRange(b));
                    }
                  }
                }
              }
              for (d = [], p = l; (p = p.parentNode); )
                1 === p.nodeType &&
                  d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (
                "function" == typeof l.focus && l.focus(), l = 0;
                l < d.length;
                l++
              ) {
                var x = d[l];
                (x.element.scrollLeft = x.left), (x.element.scrollTop = x.top);
              }
            }
            (cp = !!ub), (ux = ub = null);
          } finally {
            (lB = i), (D.p = r), (z.T = n);
          }
        }
        (e.current = t), (st = 2);
      }
    }
    function sR() {
      if (2 === st) {
        st = 0;
        var e = sn,
          t = sr,
          n = 0 != (8772 & t.flags);
        if (0 != (8772 & t.subtreeFlags) || n) {
          (n = z.T), (z.T = null);
          var r = D.p;
          D.p = 2;
          var i = lB;
          lB |= 4;
          try {
            lh(e, t.alternate, t);
          } finally {
            (lB = i), (D.p = r), (z.T = n);
          }
        }
        st = 3;
      }
    }
    function sL() {
      if (4 === st || 3 === st) {
        (st = 0), ei();
        var e = sn,
          t = sr,
          n = si,
          r = sl;
        0 != (10256 & t.subtreeFlags) || 0 != (10256 & t.flags)
          ? (st = 5)
          : ((st = 0), (sr = sn = null), sz(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (0 === i && (se = null),
          eL(n),
          (t = t.stateNode),
          em && "function" == typeof em.onCommitFiberRoot)
        )
          try {
            em.onCommitFiberRoot(eh, t, void 0, 128 == (128 & t.current.flags));
          } catch (e) {}
        if (null !== r) {
          (t = z.T), (i = D.p), (D.p = 2), (z.T = null);
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var l = r[o];
              a(l.value, { componentStack: l.stack });
            }
          } finally {
            (z.T = t), (D.p = i);
          }
        }
        0 != (3 & si) && sD(),
          sX(e),
          (i = e.pendingLanes),
          0 != (261930 & n) && 0 != (42 & i)
            ? e === su
              ? ss++
              : ((ss = 0), (su = e))
            : (ss = 0),
          sK(0, !1);
      }
    }
    function sz(e, t) {
      0 == (e.pooledCacheLanes &= t) &&
        null != (t = e.pooledCache) &&
        ((e.pooledCache = null), r8(t));
    }
    function sD() {
      return sM(), sR(), sL(), s_();
    }
    function s_() {
      if (5 !== st) return !1;
      var e = sn,
        t = sa;
      sa = 0;
      var n = eL(si),
        r = z.T,
        i = D.p;
      try {
        (D.p = 32 > n ? 32 : n), (z.T = null), (n = so), (so = null);
        var a = sn,
          o = si;
        if (((st = 0), (sr = sn = null), (si = 0), 0 != (6 & lB)))
          throw Error(l(331));
        var s = lB;
        if (
          ((lB |= 4),
          lO(a.current),
          lA(a, a.current, o, n),
          (lB = s),
          sK(0, !1),
          em && "function" == typeof em.onPostCommitFiberRoot)
        )
          try {
            em.onPostCommitFiberRoot(eh, a);
          } catch (e) {}
        return !0;
      } finally {
        (D.p = i), (z.T = r), sz(e, t);
      }
    }
    function sO(e, t, n) {
      (t = rm(n, t)),
        (t = ok(e.stateNode, t, 2)),
        null !== (e = iR(e, t, 2)) && (eN(e, 2), sX(e));
    }
    function sV(e, t, n) {
      if (3 === e.tag) sO(e, e, n);
      else
        for (; null !== t; ) {
          if (3 === t.tag) {
            sO(t, e, n);
            break;
          }
          if (1 === t.tag) {
            var r = t.stateNode;
            if (
              "function" == typeof t.type.getDerivedStateFromError ||
              ("function" == typeof r.componentDidCatch &&
                (null === se || !se.has(r)))
            ) {
              (e = rm(n, e)),
                null !== (r = iR(t, (n = oS(2)), 2)) &&
                  (oE(n, r, t, e), eN(r, 2), sX(r));
              break;
            }
          }
          t = t.return;
        }
    }
    function sI(e, t, n) {
      var r = e.pingCache;
      if (null === r) {
        r = e.pingCache = new lF();
        var i = new Set();
        r.set(t, i);
      } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
      i.has(n) ||
        ((lG = !0), i.add(n), (e = sF.bind(null, e, t, n)), t.then(e, e));
    }
    function sF(e, t, n) {
      var r = e.pingCache;
      null !== r && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        l$ === e &&
          (lW & n) === n &&
          (4 === lK || (3 === lK && (0x3c00000 & lW) === lW && 300 > ea() - l6)
            ? 0 == (2 & lB) && sv(e, 0)
            : (l0 |= n),
          l2 === lW && (l2 = 0)),
        sX(e);
    }
    function sB(e, t) {
      0 === t && (t = eP()), null !== (e = re(e, t)) && (eN(e, t), sX(e));
    }
    function s$(e) {
      var t = e.memoizedState,
        n = 0;
      null !== t && (n = t.retryLane), sB(e, n);
    }
    function sU(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            i = e.memoizedState;
          null !== i && (n = i.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(l(314));
      }
      null !== r && r.delete(t), sB(e, n);
    }
    var sW = null,
      sH = null,
      sY = !1,
      sQ = !1,
      sq = !1,
      sG = 0;
    function sX(e) {
      e !== sH &&
        null === e.next &&
        (null === sH ? (sW = sH = e) : (sH = sH.next = e)),
        (sQ = !0),
        sY ||
          ((sY = !0),
          uj(function () {
            0 != (6 & lB) ? et(el, sZ) : sJ();
          }));
    }
    function sK(e, t) {
      if (!sq && sQ) {
        sq = !0;
        do
          for (var n = !1, r = sW; null !== r; ) {
            if (!t)
              if (0 !== e) {
                var i = r.pendingLanes;
                if (0 === i) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    l = r.pingedLanes;
                  a =
                    0xc000095 &
                    (a = ((1 << (31 - ey(42 | e) + 1)) - 1) & (i & ~(o & ~l)))
                      ? (0xc000095 & a) | 1
                      : a
                      ? 2 | a
                      : 0;
                }
                0 !== a && ((n = !0), s2(r, a));
              } else
                (a = lW),
                  0 ==
                    (3 &
                      (a = eE(
                        r,
                        r === l$ ? a : 0,
                        null !== r.cancelPendingCommit || -1 !== r.timeoutHandle
                      ))) ||
                    eC(r, a) ||
                    ((n = !0), s2(r, a));
            r = r.next;
          }
        while (n);
        sq = !1;
      }
    }
    function sZ() {
      sJ();
    }
    function sJ() {
      sQ = sY = !1;
      var e,
        t = 0;
      0 === sG ||
        ((e = window.event) && "popstate" === e.type
          ? e === uC || ((uC = e), 0)
          : ((uC = null), 1)) ||
        (t = sG);
      for (var n = ea(), r = null, i = sW; null !== i; ) {
        var a = i.next,
          o = s0(i, n);
        0 === o
          ? ((i.next = null),
            null === r ? (sW = a) : (r.next = a),
            null === a && (sH = r))
          : ((r = i), (0 !== t || 0 != (3 & o)) && (sQ = !0)),
          (i = a);
      }
      (0 !== st && 5 !== st) || sK(t, !1), 0 !== sG && (sG = 0);
    }
    function s0(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = -0x3c00001 & e.pendingLanes;
        0 < a;

      ) {
        var o = 31 - ey(a),
          l = 1 << o,
          s = i[o];
        -1 === s
          ? (0 == (l & n) || 0 != (l & r)) &&
            (i[o] = (function (e, t) {
              switch (e) {
                case 1:
                case 2:
                case 4:
                case 8:
                case 64:
                  return t + 250;
                case 16:
                case 32:
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
                default:
                  return -1;
              }
            })(l, t))
          : s <= t && (e.expiredLanes |= l),
          (a &= ~l);
      }
      if (
        ((t = l$),
        (n = lW),
        (n = eE(
          e,
          e === t ? n : 0,
          null !== e.cancelPendingCommit || -1 !== e.timeoutHandle
        )),
        (r = e.callbackNode),
        0 === n ||
          (e === t && (2 === lH || 9 === lH)) ||
          null !== e.cancelPendingCommit)
      )
        return (
          null !== r && null !== r && en(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (0 == (3 & n) || eC(e, n)) {
        if ((t = n & -n) === e.callbackPriority) return t;
        switch ((null !== r && en(r), eL(n))) {
          case 2:
          case 8:
            n = es;
            break;
          case 32:
          default:
            n = eu;
            break;
          case 0x10000000:
            n = ed;
        }
        return (
          (n = et(n, (r = s1.bind(null, e)))),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        null !== r && null !== r && en(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function s1(e, t) {
      if (0 !== st && 5 !== st)
        return (e.callbackNode = null), (e.callbackPriority = 0), null;
      var n = e.callbackNode;
      if (sD() && e.callbackNode !== n) return null;
      var r = lW;
      return 0 ===
        (r = eE(
          e,
          e === l$ ? r : 0,
          null !== e.cancelPendingCommit || -1 !== e.timeoutHandle
        ))
        ? null
        : (sp(e, r, t),
          s0(e, ea()),
          null != e.callbackNode && e.callbackNode === n
            ? s1.bind(null, e)
            : null);
    }
    function s2(e, t) {
      if (sD()) return null;
      sp(e, t, !0);
    }
    function s3() {
      if (0 === sG) {
        var e = ie;
        0 === e && ((e = ex), 0 == (261888 & (ex <<= 1)) && (ex = 256)),
          (sG = e);
      }
      return sG;
    }
    function s4(e) {
      return null == e || "symbol" == typeof e || "boolean" == typeof e
        ? null
        : "function" == typeof e
        ? e
        : ty("" + e);
    }
    function s5(e, t) {
      var n = t.ownerDocument.createElement("input");
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute("form", e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      );
    }
    for (var s6 = 0; s6 < n1.length; s6++) {
      var s8 = n1[s6];
      n2(s8.toLowerCase(), "on" + (s8[0].toUpperCase() + s8.slice(1)));
    }
    n2(nQ, "onAnimationEnd"),
      n2(nq, "onAnimationIteration"),
      n2(nG, "onAnimationStart"),
      n2("dblclick", "onDoubleClick"),
      n2("focusin", "onFocus"),
      n2("focusout", "onBlur"),
      n2(nX, "onTransitionRun"),
      n2(nK, "onTransitionStart"),
      n2(nZ, "onTransitionCancel"),
      n2(nJ, "onTransitionEnd"),
      e0("onMouseEnter", ["mouseout", "mouseover"]),
      e0("onMouseLeave", ["mouseout", "mouseover"]),
      e0("onPointerEnter", ["pointerout", "pointerover"]),
      e0("onPointerLeave", ["pointerout", "pointerover"]),
      eJ(
        "onChange",
        "change click focusin focusout input keydown keyup selectionchange".split(
          " "
        )
      ),
      eJ(
        "onSelect",
        "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
          " "
        )
      ),
      eJ("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      eJ(
        "onCompositionEnd",
        "compositionend focusout keydown keypress keyup mousedown".split(" ")
      ),
      eJ(
        "onCompositionStart",
        "compositionstart focusout keydown keypress keyup mousedown".split(" ")
      ),
      eJ(
        "onCompositionUpdate",
        "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
      );
    var s9 =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
      s7 = new Set(
        "beforetoggle cancel close invalid load scroll scrollend toggle"
          .split(" ")
          .concat(s9)
      );
    function ue(e, t) {
      t = 0 != (4 & t);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        e: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var l = r[o],
                s = l.instance,
                u = l.currentTarget;
              if (((l = l.listener), s !== a && i.isPropagationStopped()))
                break e;
              (a = l), (i.currentTarget = u);
              try {
                a(i);
              } catch (e) {
                n3(e);
              }
              (i.currentTarget = null), (a = s);
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = (l = r[o]).instance),
                (u = l.currentTarget),
                (l = l.listener),
                s !== a && i.isPropagationStopped())
              )
                break e;
              (a = l), (i.currentTarget = u);
              try {
                a(i);
              } catch (e) {
                n3(e);
              }
              (i.currentTarget = null), (a = s);
            }
        }
      }
    }
    function ut(e, t) {
      var n = t[eF];
      void 0 === n && (n = t[eF] = new Set());
      var r = e + "__bubble";
      n.has(r) || (ua(t, e, 2, !1), n.add(r));
    }
    function un(e, t, n) {
      var r = 0;
      t && (r |= 4), ua(n, e, r, t);
    }
    var ur = "_reactListening" + Math.random().toString(36).slice(2);
    function ui(e) {
      if (!e[ur]) {
        (e[ur] = !0),
          eK.forEach(function (t) {
            "selectionchange" !== t &&
              (s7.has(t) || un(t, !1, e), un(t, !0, e));
          });
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[ur] || ((t[ur] = !0), un("selectionchange", !1, t));
      }
    }
    function ua(e, t, n, r) {
      switch (cx(t)) {
        case 2:
          var i = ch;
          break;
        case 8:
          i = cm;
          break;
        default:
          i = cg;
      }
      (n = i.bind(null, t, n, e)),
        (i = void 0),
        tN &&
          ("touchstart" === t || "touchmove" === t || "wheel" === t) &&
          (i = !0),
        r
          ? void 0 !== i
            ? e.addEventListener(t, n, { capture: !0, passive: i })
            : e.addEventListener(t, n, !0)
          : void 0 !== i
          ? e.addEventListener(t, n, { passive: i })
          : e.addEventListener(t, n, !1);
    }
    function uo(e, t, n, r, i) {
      var a = r;
      if (0 == (1 & t) && 0 == (2 & t) && null !== r)
        e: for (;;) {
          if (null === r) return;
          var o = r.tag;
          if (3 === o || 4 === o) {
            var l = r.stateNode.containerInfo;
            if (l === i) break;
            if (4 === o)
              for (o = r.return; null !== o; ) {
                var s = o.tag;
                if ((3 === s || 4 === s) && o.stateNode.containerInfo === i)
                  return;
                o = o.return;
              }
            for (; null !== l; ) {
              if (null === (o = eY(l))) return;
              if (5 === (s = o.tag) || 6 === s || 26 === s || 27 === s) {
                r = a = o;
                continue e;
              }
              l = l.parentNode;
            }
          }
          r = r.return;
        }
      tC(function () {
        var r = a,
          i = tx(n),
          o = [];
        e: {
          var l = n0.get(e);
          if (void 0 !== l) {
            var s = tQ,
              u = e;
            switch (e) {
              case "keypress":
                if (0 === tz(n)) break e;
              case "keydown":
              case "keyup":
                s = t9;
                break;
              case "focusin":
                (u = "focus"), (s = tJ);
                break;
              case "focusout":
                (u = "blur"), (s = tJ);
                break;
              case "beforeblur":
              case "afterblur":
                s = tJ;
                break;
              case "click":
                if (2 === n.button) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                s = tK;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                s = tZ;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                s = ne;
                break;
              case nQ:
              case nq:
              case nG:
                s = t0;
                break;
              case nJ:
                s = nt;
                break;
              case "scroll":
              case "scrollend":
                s = tG;
                break;
              case "wheel":
                s = nn;
                break;
              case "copy":
              case "cut":
              case "paste":
                s = t1;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                s = t7;
                break;
              case "toggle":
              case "beforetoggle":
                s = nr;
            }
            var d = 0 != (4 & t),
              f = !d && ("scroll" === e || "scrollend" === e),
              p = d ? (null !== l ? l + "Capture" : null) : l;
            d = [];
            for (var h, m = r; null !== m; ) {
              var g = m;
              if (
                ((h = g.stateNode),
                (5 !== (g = g.tag) && 26 !== g && 27 !== g) ||
                  null === h ||
                  null === p ||
                  (null != (g = tP(m, p)) && d.push(ul(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length &&
              ((l = new s(l, u, null, n, i)),
              o.push({ event: l, listeners: d }));
          }
        }
        if (0 == (7 & t)) {
          if (
            ((l = "mouseover" === e || "pointerover" === e),
            (s = "mouseout" === e || "pointerout" === e),
            !(
              l &&
              n !== tb &&
              (u = n.relatedTarget || n.fromElement) &&
              (eY(u) || u[eI])
            )) &&
            (s || l) &&
            ((l =
              i.window === i
                ? i
                : (l = i.ownerDocument)
                ? l.defaultView || l.parentWindow
                : window),
            s
              ? ((u = n.relatedTarget || n.toElement),
                (s = r),
                null !== (u = u ? eY(u) : null) &&
                  ((f = c(u)),
                  (d = u.tag),
                  u !== f || (5 !== d && 27 !== d && 6 !== d)) &&
                  (u = null))
              : ((s = null), (u = r)),
            s !== u)
          ) {
            if (
              ((d = tK),
              (g = "onMouseLeave"),
              (p = "onMouseEnter"),
              (m = "mouse"),
              ("pointerout" === e || "pointerover" === e) &&
                ((d = t7),
                (g = "onPointerLeave"),
                (p = "onPointerEnter"),
                (m = "pointer")),
              (f = null == s ? l : eq(s)),
              (h = null == u ? l : eq(u)),
              ((l = new d(g, m + "leave", s, n, i)).target = f),
              (l.relatedTarget = h),
              (g = null),
              eY(i) === r &&
                (((d = new d(p, m + "enter", u, n, i)).target = h),
                (d.relatedTarget = f),
                (g = d)),
              (f = g),
              s && u)
            )
              t: {
                for (d = uu, p = s, m = u, h = 0, g = p; g; g = d(g)) h++;
                g = 0;
                for (var y, v = m; v; v = d(v)) g++;
                for (; 0 < h - g; ) (p = d(p)), h--;
                for (; 0 < g - h; ) (m = d(m)), g--;
                for (; h--; ) {
                  if (p === m || (null !== m && p === m.alternate)) {
                    d = p;
                    break t;
                  }
                  (p = d(p)), (m = d(m));
                }
                d = null;
              }
            else d = null;
            null !== s && uc(o, l, s, d, !1),
              null !== u && null !== f && uc(o, f, u, d, !0);
          }
          e: {
            if (
              "select" ===
                (s =
                  (l = r ? eq(r) : window).nodeName &&
                  l.nodeName.toLowerCase()) ||
              ("input" === s && "file" === l.type)
            )
              var b = nx;
            else if (nh(l))
              if (nw) b = nj;
              else {
                b = nT;
                var x = nP;
              }
            else
              (s = l.nodeName) &&
              "input" === s.toLowerCase() &&
              ("checkbox" === l.type || "radio" === l.type)
                ? (b = nN)
                : r && th(r.elementType) && (b = nx);
            if (b && (b = b(e, r))) {
              nm(o, b, n, i);
              break e;
            }
            x && x(e, l, r),
              "focusout" === e &&
                r &&
                "number" === l.type &&
                null != r.memoizedProps.value &&
                to(l, "number", l.value);
          }
          switch (((x = r ? eq(r) : window), e)) {
            case "focusin":
              (nh(x) || "true" === x.contentEditable) &&
                ((nO = x), (nV = r), (nI = null));
              break;
            case "focusout":
              nI = nV = nO = null;
              break;
            case "mousedown":
              nF = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (nF = !1), nB(o, n, i);
              break;
            case "selectionchange":
              if (n_) break;
            case "keydown":
            case "keyup":
              nB(o, n, i);
          }
          if (na)
            t: {
              switch (e) {
                case "compositionstart":
                  var w = "onCompositionStart";
                  break t;
                case "compositionend":
                  w = "onCompositionEnd";
                  break t;
                case "compositionupdate":
                  w = "onCompositionUpdate";
                  break t;
              }
              w = void 0;
            }
          else
            nf
              ? nc(e, n) && (w = "onCompositionEnd")
              : "keydown" === e &&
                229 === n.keyCode &&
                (w = "onCompositionStart");
          w &&
            (ns &&
              "ko" !== n.locale &&
              (nf || "onCompositionStart" !== w
                ? "onCompositionEnd" === w && nf && (y = tL())
                : ((tM = "value" in (tA = i) ? tA.value : tA.textContent),
                  (nf = !0))),
            0 < (x = us(r, w)).length &&
              ((w = new t2(w, e, null, n, i)),
              o.push({ event: w, listeners: x }),
              y ? (w.data = y) : null !== (y = nd(n)) && (w.data = y))),
            (y = nl
              ? (function (e, t) {
                  switch (e) {
                    case "compositionend":
                      return nd(t);
                    case "keypress":
                      if (32 !== t.which) return null;
                      return (nu = !0), " ";
                    case "textInput":
                      return " " === (e = t.data) && nu ? null : e;
                    default:
                      return null;
                  }
                })(e, n)
              : (function (e, t) {
                  if (nf)
                    return "compositionend" === e || (!na && nc(e, t))
                      ? ((e = tL()), (tR = tM = tA = null), (nf = !1), e)
                      : null;
                  switch (e) {
                    case "paste":
                    default:
                      return null;
                    case "keypress":
                      if (
                        !(t.ctrlKey || t.altKey || t.metaKey) ||
                        (t.ctrlKey && t.altKey)
                      ) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                      }
                      return null;
                    case "compositionend":
                      return ns && "ko" !== t.locale ? null : t.data;
                  }
                })(e, n)) &&
              0 < (w = us(r, "onBeforeInput")).length &&
              ((x = new t2("onBeforeInput", "beforeinput", null, n, i)),
              o.push({ event: x, listeners: w }),
              (x.data = y));
          var k = e;
          if ("submit" === k && r && r.stateNode === i) {
            var S = s4((i[eV] || null).action),
              E = n.submitter;
            E &&
              null !==
                (k = (k = E[eV] || null)
                  ? s4(k.formAction)
                  : E.getAttribute("formAction")) &&
              ((S = k), (E = null));
            var C = new tQ("action", "action", null, n, i);
            o.push({
              event: C,
              listeners: [
                {
                  instance: null,
                  listener: function () {
                    if (n.defaultPrevented) {
                      if (0 !== sG) {
                        var e = E ? s5(i, E) : new FormData(i);
                        a4(
                          r,
                          { pending: !0, data: e, method: i.method, action: S },
                          null,
                          e
                        );
                      }
                    } else
                      "function" == typeof S &&
                        (C.preventDefault(),
                        a4(
                          r,
                          {
                            pending: !0,
                            data: (e = E ? s5(i, E) : new FormData(i)),
                            method: i.method,
                            action: S,
                          },
                          S,
                          e
                        ));
                  },
                  currentTarget: i,
                },
              ],
            });
          }
        }
        ue(o, t);
      });
    }
    function ul(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function us(e, t) {
      for (var n = t + "Capture", r = []; null !== e; ) {
        var i = e,
          a = i.stateNode;
        if (
          ((5 !== (i = i.tag) && 26 !== i && 27 !== i) ||
            null === a ||
            (null != (i = tP(e, n)) && r.unshift(ul(e, i, a)),
            null != (i = tP(e, t)) && r.push(ul(e, i, a))),
          3 === e.tag)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function uu(e) {
      if (null === e) return null;
      do e = e.return;
      while (e && 5 !== e.tag && 27 !== e.tag);
      return e || null;
    }
    function uc(e, t, n, r, i) {
      for (var a = t._reactName, o = []; null !== n && n !== r; ) {
        var l = n,
          s = l.alternate,
          u = l.stateNode;
        if (((l = l.tag), null !== s && s === r)) break;
        (5 !== l && 26 !== l && 27 !== l) ||
          null === u ||
          ((s = u),
          i
            ? null != (u = tP(n, a)) && o.unshift(ul(n, u, s))
            : i || (null != (u = tP(n, a)) && o.push(ul(n, u, s)))),
          (n = n.return);
      }
      0 !== o.length && e.push({ event: t, listeners: o });
    }
    var ud = /\r\n?/g,
      uf = /\u0000|\uFFFD/g;
    function up(e) {
      return ("string" == typeof e ? e : "" + e)
        .replace(ud, "\n")
        .replace(uf, "");
    }
    function uh(e, t) {
      return (t = up(t)), up(e) === t;
    }
    function um(e, t, n, r, i, a) {
      switch (n) {
        case "children":
          "string" == typeof r
            ? "body" === t || ("textarea" === t && "" === r) || tc(e, r)
            : ("number" == typeof r || "bigint" == typeof r) &&
              "body" !== t &&
              tc(e, "" + r);
          break;
        case "className":
          e5(e, "class", r);
          break;
        case "tabIndex":
          e5(e, "tabindex", r);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          e5(e, n, r);
          break;
        case "style":
          tp(e, r, a);
          break;
        case "data":
          if ("object" !== t) {
            e5(e, "data", r);
            break;
          }
        case "src":
        case "href":
          if (
            ("" === r && ("a" !== t || "href" !== n)) ||
            null == r ||
            "function" == typeof r ||
            "symbol" == typeof r ||
            "boolean" == typeof r
          ) {
            e.removeAttribute(n);
            break;
          }
          (r = ty("" + r)), e.setAttribute(n, r);
          break;
        case "action":
        case "formAction":
          if ("function" == typeof r) {
            e.setAttribute(
              n,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          }
          if (
            ("function" == typeof a &&
              ("formAction" === n
                ? ("input" !== t && um(e, t, "name", i.name, i, null),
                  um(e, t, "formEncType", i.formEncType, i, null),
                  um(e, t, "formMethod", i.formMethod, i, null),
                  um(e, t, "formTarget", i.formTarget, i, null))
                : (um(e, t, "encType", i.encType, i, null),
                  um(e, t, "method", i.method, i, null),
                  um(e, t, "target", i.target, i, null))),
            null == r || "symbol" == typeof r || "boolean" == typeof r)
          ) {
            e.removeAttribute(n);
            break;
          }
          (r = ty("" + r)), e.setAttribute(n, r);
          break;
        case "onClick":
          null != r && (e.onclick = tv);
          break;
        case "onScroll":
          null != r && ut("scroll", e);
          break;
        case "onScrollEnd":
          null != r && ut("scrollend", e);
          break;
        case "dangerouslySetInnerHTML":
          if (null != r) {
            if ("object" != typeof r || !("__html" in r)) throw Error(l(61));
            if (null != (n = r.__html)) {
              if (null != i.children) throw Error(l(60));
              e.innerHTML = n;
            }
          }
          break;
        case "multiple":
          e.multiple = r && "function" != typeof r && "symbol" != typeof r;
          break;
        case "muted":
          e.muted = r && "function" != typeof r && "symbol" != typeof r;
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
        case "autoFocus":
        case "innerText":
        case "textContent":
          break;
        case "xlinkHref":
          if (
            null == r ||
            "function" == typeof r ||
            "boolean" == typeof r ||
            "symbol" == typeof r
          ) {
            e.removeAttribute("xlink:href");
            break;
          }
          (n = ty("" + r)),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          null != r && "function" != typeof r && "symbol" != typeof r
            ? e.setAttribute(n, "" + r)
            : e.removeAttribute(n);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          r && "function" != typeof r && "symbol" != typeof r
            ? e.setAttribute(n, "")
            : e.removeAttribute(n);
          break;
        case "capture":
        case "download":
          !0 === r
            ? e.setAttribute(n, "")
            : !1 !== r &&
              null != r &&
              "function" != typeof r &&
              "symbol" != typeof r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          null != r &&
          "function" != typeof r &&
          "symbol" != typeof r &&
          !isNaN(r) &&
          1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case "rowSpan":
        case "start":
          null == r ||
          "function" == typeof r ||
          "symbol" == typeof r ||
          isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case "popover":
          ut("beforetoggle", e), ut("toggle", e), e4(e, "popover", r);
          break;
        case "xlinkActuate":
          e6(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
          break;
        case "xlinkArcrole":
          e6(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
          break;
        case "xlinkRole":
          e6(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
          break;
        case "xlinkShow":
          e6(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
          break;
        case "xlinkTitle":
          e6(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
          break;
        case "xlinkType":
          e6(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
          break;
        case "xmlBase":
          e6(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
          break;
        case "xmlLang":
          e6(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
          break;
        case "xmlSpace":
          e6(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
          break;
        case "is":
          e4(e, "is", r);
          break;
        default:
          (2 < n.length &&
            ("o" === n[0] || "O" === n[0]) &&
            ("n" === n[1] || "N" === n[1])) ||
            e4(e, (n = tm.get(n) || n), r);
      }
    }
    function ug(e, t, n, r, i, a) {
      switch (n) {
        case "style":
          tp(e, r, a);
          break;
        case "dangerouslySetInnerHTML":
          if (null != r) {
            if ("object" != typeof r || !("__html" in r)) throw Error(l(61));
            if (null != (n = r.__html)) {
              if (null != i.children) throw Error(l(60));
              e.innerHTML = n;
            }
          }
          break;
        case "children":
          "string" == typeof r
            ? tc(e, r)
            : ("number" == typeof r || "bigint" == typeof r) && tc(e, "" + r);
          break;
        case "onScroll":
          null != r && ut("scroll", e);
          break;
        case "onScrollEnd":
          null != r && ut("scrollend", e);
          break;
        case "onClick":
          null != r && (e.onclick = tv);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
        case "innerText":
        case "textContent":
          break;
        default:
          if (!eZ.hasOwnProperty(n))
            e: {
              if (
                "o" === n[0] &&
                "n" === n[1] &&
                ((i = n.endsWith("Capture")),
                (t = n.slice(2, i ? n.length - 7 : void 0)),
                "function" ==
                  typeof (a = null != (a = e[eV] || null) ? a[n] : null) &&
                  e.removeEventListener(t, a, i),
                "function" == typeof r)
              ) {
                "function" != typeof a &&
                  null !== a &&
                  (n in e
                    ? (e[n] = null)
                    : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, i);
                break e;
              }
              n in e
                ? (e[n] = r)
                : !0 === r
                ? e.setAttribute(n, "")
                : e4(e, n, r);
            }
      }
    }
    function uy(e, t, n) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          ut("error", e), ut("load", e);
          var r,
            i = !1,
            a = !1;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var o = n[r];
              if (null != o)
                switch (r) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    a = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(l(137, t));
                  default:
                    um(e, t, r, o, n, null);
                }
            }
          a && um(e, t, "srcSet", n.srcSet, n, null),
            i && um(e, t, "src", n.src, n, null);
          return;
        case "input":
          ut("invalid", e);
          var s = (r = o = a = null),
            u = null,
            c = null;
          for (i in n)
            if (n.hasOwnProperty(i)) {
              var d = n[i];
              if (null != d)
                switch (i) {
                  case "name":
                    a = d;
                    break;
                  case "type":
                    o = d;
                    break;
                  case "checked":
                    u = d;
                    break;
                  case "defaultChecked":
                    c = d;
                    break;
                  case "value":
                    r = d;
                    break;
                  case "defaultValue":
                    s = d;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (null != d) throw Error(l(137, t));
                    break;
                  default:
                    um(e, t, i, d, n, null);
                }
            }
          ta(e, r, s, u, c, o, a, !1);
          return;
        case "select":
          for (a in (ut("invalid", e), (i = o = r = null), n))
            if (n.hasOwnProperty(a) && null != (s = n[a]))
              switch (a) {
                case "value":
                  r = s;
                  break;
                case "defaultValue":
                  o = s;
                  break;
                case "multiple":
                  i = s;
                default:
                  um(e, t, a, s, n, null);
              }
          (t = r),
            (n = o),
            (e.multiple = !!i),
            null != t ? tl(e, !!i, t, !1) : null != n && tl(e, !!i, n, !0);
          return;
        case "textarea":
          for (o in (ut("invalid", e), (r = a = i = null), n))
            if (n.hasOwnProperty(o) && null != (s = n[o]))
              switch (o) {
                case "value":
                  i = s;
                  break;
                case "defaultValue":
                  a = s;
                  break;
                case "children":
                  r = s;
                  break;
                case "dangerouslySetInnerHTML":
                  if (null != s) throw Error(l(91));
                  break;
                default:
                  um(e, t, o, s, n, null);
              }
          tu(e, i, a, r);
          return;
        case "option":
          for (u in n)
            n.hasOwnProperty(u) &&
              null != (i = n[u]) &&
              ("selected" === u
                ? (e.selected =
                    i && "function" != typeof i && "symbol" != typeof i)
                : um(e, t, u, i, n, null));
          return;
        case "dialog":
          ut("beforetoggle", e),
            ut("toggle", e),
            ut("cancel", e),
            ut("close", e);
          break;
        case "iframe":
        case "object":
          ut("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < s9.length; i++) ut(s9[i], e);
          break;
        case "image":
          ut("error", e), ut("load", e);
          break;
        case "details":
          ut("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          ut("error", e), ut("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (c in n)
            if (n.hasOwnProperty(c) && null != (i = n[c]))
              switch (c) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l(137, t));
                default:
                  um(e, t, c, i, n, null);
              }
          return;
        default:
          if (th(t)) {
            for (d in n)
              n.hasOwnProperty(d) &&
                void 0 !== (i = n[d]) &&
                ug(e, t, d, i, n, void 0);
            return;
          }
      }
      for (s in n)
        n.hasOwnProperty(s) && null != (i = n[s]) && um(e, t, s, i, n, null);
    }
    function uv(e) {
      switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return !0;
        default:
          return !1;
      }
    }
    var ub = null,
      ux = null;
    function uw(e) {
      return 9 === e.nodeType ? e : e.ownerDocument;
    }
    function uk(e) {
      switch (e) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function uS(e, t) {
      if (0 === e)
        switch (t) {
          case "svg":
            return 1;
          case "math":
            return 2;
          default:
            return 0;
        }
      return 1 === e && "foreignObject" === t ? 0 : e;
    }
    function uE(e, t) {
      return (
        "textarea" === e ||
        "noscript" === e ||
        "string" == typeof t.children ||
        "number" == typeof t.children ||
        "bigint" == typeof t.children ||
        ("object" == typeof t.dangerouslySetInnerHTML &&
          null !== t.dangerouslySetInnerHTML &&
          null != t.dangerouslySetInnerHTML.__html)
      );
    }
    var uC = null,
      uP = "function" == typeof setTimeout ? setTimeout : void 0,
      uT = "function" == typeof clearTimeout ? clearTimeout : void 0,
      uN = "function" == typeof Promise ? Promise : void 0,
      uj =
        "function" == typeof queueMicrotask
          ? queueMicrotask
          : void 0 !== uN
          ? function (e) {
              return uN.resolve(null).then(e).catch(uA);
            }
          : uP;
    function uA(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function uM(e) {
      return "head" === e;
    }
    function uR(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && 8 === i.nodeType))
          if ("/$" === (n = i.data) || "/&" === n) {
            if (0 === r) {
              e.removeChild(i), cV(t);
              return;
            }
            r--;
          } else if (
            "$" === n ||
            "$?" === n ||
            "$~" === n ||
            "$!" === n ||
            "&" === n
          )
            r++;
          else if ("html" === n) uU(e.ownerDocument.documentElement);
          else if ("head" === n) {
            uU((n = e.ownerDocument.head));
            for (var a = n.firstChild; a; ) {
              var o = a.nextSibling,
                l = a.nodeName;
              a[eW] ||
                "SCRIPT" === l ||
                "STYLE" === l ||
                ("LINK" === l && "stylesheet" === a.rel.toLowerCase()) ||
                n.removeChild(a),
                (a = o);
            }
          } else "body" === n && uU(e.ownerDocument.body);
        n = i;
      } while (n);
      cV(t);
    }
    function uL(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (1 === n.nodeType
            ? t
              ? ((n._stashedDisplay = n.style.display),
                (n.style.display = "none"))
              : ((n.style.display = n._stashedDisplay || ""),
                "" === n.getAttribute("style") && n.removeAttribute("style"))
            : 3 === n.nodeType &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
                : (n.nodeValue = n._stashedText || "")),
          r && 8 === r.nodeType)
        )
          if ("/$" === (n = r.data))
            if (0 === e) break;
            else e--;
          else ("$" !== n && "$?" !== n && "$~" !== n && "$!" !== n) || e++;
        n = r;
      } while (n);
    }
    function uz(e) {
      var t = e.firstChild;
      for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case "HTML":
          case "HEAD":
          case "BODY":
            uz(n), eH(n);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if ("stylesheet" === n.rel.toLowerCase()) continue;
        }
        e.removeChild(n);
      }
    }
    function uD(e, t) {
      for (; 8 !== e.nodeType; )
        if (
          ((1 !== e.nodeType ||
            "INPUT" !== e.nodeName ||
            "hidden" !== e.type) &&
            !t) ||
          null === (e = uV(e.nextSibling))
        )
          return null;
      return e;
    }
    function u_(e) {
      return "$?" === e.data || "$~" === e.data;
    }
    function uO(e) {
      return (
        "$!" === e.data ||
        ("$?" === e.data && "loading" !== e.ownerDocument.readyState)
      );
    }
    function uV(e) {
      for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
        if (8 === t) {
          if (
            "$" === (t = e.data) ||
            "$!" === t ||
            "$?" === t ||
            "$~" === t ||
            "&" === t ||
            "F!" === t ||
            "F" === t
          )
            break;
          if ("/$" === t || "/&" === t) return null;
        }
      }
      return e;
    }
    var uI = null;
    function uF(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data;
          if ("/$" === n || "/&" === n) {
            if (0 === t) return uV(e.nextSibling);
            t--;
          } else
            ("$" !== n &&
              "$!" !== n &&
              "$?" !== n &&
              "$~" !== n &&
              "&" !== n) ||
              t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function uB(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data;
          if (
            "$" === n ||
            "$!" === n ||
            "$?" === n ||
            "$~" === n ||
            "&" === n
          ) {
            if (0 === t) return e;
            t--;
          } else ("/$" !== n && "/&" !== n) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function u$(e, t, n) {
      switch (((t = uw(n)), e)) {
        case "html":
          if (!(e = t.documentElement)) throw Error(l(452));
          return e;
        case "head":
          if (!(e = t.head)) throw Error(l(453));
          return e;
        case "body":
          if (!(e = t.body)) throw Error(l(454));
          return e;
        default:
          throw Error(l(451));
      }
    }
    function uU(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
      eH(e);
    }
    var uW = new Map(),
      uH = new Set();
    function uY(e) {
      return "function" == typeof e.getRootNode
        ? e.getRootNode()
        : 9 === e.nodeType
        ? e
        : e.ownerDocument;
    }
    var uQ = D.d;
    D.d = {
      f: function () {
        var e = uQ.f(),
          t = sg();
        return e || t;
      },
      r: function (e) {
        var t = eQ(e);
        null !== t && 5 === t.tag && "form" === t.type ? a6(t) : uQ.r(e);
      },
      D: function (e) {
        uQ.D(e), uG("dns-prefetch", e, null);
      },
      C: function (e, t) {
        uQ.C(e, t), uG("preconnect", e, t);
      },
      L: function (e, t, n) {
        if ((uQ.L(e, t, n), uq && e && t)) {
          var r = 'link[rel="preload"][as="' + tr(t) + '"]';
          "image" === t && n && n.imageSrcSet
            ? ((r += '[imagesrcset="' + tr(n.imageSrcSet) + '"]'),
              "string" == typeof n.imageSizes &&
                (r += '[imagesizes="' + tr(n.imageSizes) + '"]'))
            : (r += '[href="' + tr(e) + '"]');
          var i = r;
          switch (t) {
            case "style":
              i = uK(e);
              break;
            case "script":
              i = u0(e);
          }
          uW.has(i) ||
            ((e = h(
              {
                rel: "preload",
                href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                as: t,
              },
              n
            )),
            uW.set(i, e),
            null !== uq.querySelector(r) ||
              ("style" === t && uq.querySelector(uZ(i))) ||
              ("script" === t && uq.querySelector(u1(i))) ||
              (uy((t = uq.createElement("link")), "link", e),
              eX(t),
              uq.head.appendChild(t)));
        }
      },
      m: function (e, t) {
        if ((uQ.m(e, t), uq && e)) {
          var n = t && "string" == typeof t.as ? t.as : "script",
            r =
              'link[rel="modulepreload"][as="' +
              tr(n) +
              '"][href="' +
              tr(e) +
              '"]',
            i = r;
          switch (n) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              i = u0(e);
          }
          if (
            !uW.has(i) &&
            ((e = h({ rel: "modulepreload", href: e }, t)),
            uW.set(i, e),
            null === uq.querySelector(r))
          ) {
            switch (n) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (uq.querySelector(u1(i))) return;
            }
            uy((n = uq.createElement("link")), "link", e),
              eX(n),
              uq.head.appendChild(n);
          }
        }
      },
      X: function (e, t) {
        if ((uQ.X(e, t), uq && e)) {
          var n = eG(uq).hoistableScripts,
            r = u0(e),
            i = n.get(r);
          i ||
            ((i = uq.querySelector(u1(r))) ||
              ((e = h({ src: e, async: !0 }, t)),
              (t = uW.get(r)) && u5(e, t),
              eX((i = uq.createElement("script"))),
              uy(i, "link", e),
              uq.head.appendChild(i)),
            (i = { type: "script", instance: i, count: 1, state: null }),
            n.set(r, i));
        }
      },
      S: function (e, t, n) {
        if ((uQ.S(e, t, n), uq && e)) {
          var r = eG(uq).hoistableStyles,
            i = uK(e);
          t = t || "default";
          var a = r.get(i);
          if (!a) {
            var o = { loading: 0, preload: null };
            if ((a = uq.querySelector(uZ(i)))) o.loading = 5;
            else {
              (e = h({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
                (n = uW.get(i)) && u4(e, n);
              var l = (a = uq.createElement("link"));
              eX(l),
                uy(l, "link", e),
                (l._p = new Promise(function (e, t) {
                  (l.onload = e), (l.onerror = t);
                })),
                l.addEventListener("load", function () {
                  o.loading |= 1;
                }),
                l.addEventListener("error", function () {
                  o.loading |= 2;
                }),
                (o.loading |= 4),
                u3(a, t, uq);
            }
            (a = { type: "stylesheet", instance: a, count: 1, state: o }),
              r.set(i, a);
          }
        }
      },
      M: function (e, t) {
        if ((uQ.M(e, t), uq && e)) {
          var n = eG(uq).hoistableScripts,
            r = u0(e),
            i = n.get(r);
          i ||
            ((i = uq.querySelector(u1(r))) ||
              ((e = h({ src: e, async: !0, type: "module" }, t)),
              (t = uW.get(r)) && u5(e, t),
              eX((i = uq.createElement("script"))),
              uy(i, "link", e),
              uq.head.appendChild(i)),
            (i = { type: "script", instance: i, count: 1, state: null }),
            n.set(r, i));
        }
      },
    };
    var uq = "u" < typeof document ? null : document;
    function uG(e, t, n) {
      if (uq && "string" == typeof t && t) {
        var r = tr(t);
        (r = 'link[rel="' + e + '"][href="' + r + '"]'),
          "string" == typeof n && (r += '[crossorigin="' + n + '"]'),
          uH.has(r) ||
            (uH.add(r),
            (e = { rel: e, crossOrigin: n, href: t }),
            null === uq.querySelector(r) &&
              (uy((t = uq.createElement("link")), "link", e),
              eX(t),
              uq.head.appendChild(t)));
      }
    }
    function uX(e, t, n, r) {
      var i = (i = W.current) ? uY(i) : null;
      if (!i) throw Error(l(446));
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return "string" == typeof n.precedence && "string" == typeof n.href
            ? ((t = uK(n.href)),
              (r = (n = eG(i).hoistableStyles).get(t)) ||
                ((r = { type: "style", instance: null, count: 0, state: null }),
                n.set(t, r)),
              r)
            : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (
            "stylesheet" === n.rel &&
            "string" == typeof n.href &&
            "string" == typeof n.precedence
          ) {
            e = uK(n.href);
            var a,
              o,
              s,
              u,
              c = eG(i).hoistableStyles,
              d = c.get(e);
            if (
              (d ||
                ((i = i.ownerDocument || i),
                (d = {
                  type: "stylesheet",
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                c.set(e, d),
                (c = i.querySelector(uZ(e))) &&
                  !c._p &&
                  ((d.instance = c), (d.state.loading = 5)),
                uW.has(e) ||
                  ((n = {
                    rel: "preload",
                    as: "style",
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  uW.set(e, n),
                  c ||
                    ((a = i),
                    (o = e),
                    (s = n),
                    (u = d.state),
                    a.querySelector(
                      'link[rel="preload"][as="style"][' + o + "]"
                    )
                      ? (u.loading = 1)
                      : ((u.preload = o = a.createElement("link")),
                        o.addEventListener("load", function () {
                          return (u.loading |= 1);
                        }),
                        o.addEventListener("error", function () {
                          return (u.loading |= 2);
                        }),
                        uy(o, "link", s),
                        eX(o),
                        a.head.appendChild(o))))),
              t && null === r)
            )
              throw Error(l(528, ""));
            return d;
          }
          if (t && null !== r) throw Error(l(529, ""));
          return null;
        case "script":
          return (
            (t = n.async),
            "string" == typeof (n = n.src) &&
            t &&
            "function" != typeof t &&
            "symbol" != typeof t
              ? ((t = u0(n)),
                (r = (n = eG(i).hoistableScripts).get(t)) ||
                  ((r = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  n.set(t, r)),
                r)
              : { type: "void", instance: null, count: 0, state: null }
          );
        default:
          throw Error(l(444, e));
      }
    }
    function uK(e) {
      return 'href="' + tr(e) + '"';
    }
    function uZ(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function uJ(e) {
      return h({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function u0(e) {
      return '[src="' + tr(e) + '"]';
    }
    function u1(e) {
      return "script[async]" + e;
    }
    function u2(e, t, n) {
      if ((t.count++, null === t.instance))
        switch (t.type) {
          case "style":
            var r = e.querySelector('style[data-href~="' + tr(n.href) + '"]');
            if (r) return (t.instance = r), eX(r), r;
            var i = h({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              eX((r = (e.ownerDocument || e).createElement("style"))),
              uy(r, "style", i),
              u3(r, n.precedence, e),
              (t.instance = r)
            );
          case "stylesheet":
            i = uK(n.href);
            var a = e.querySelector(uZ(i));
            if (a) return (t.state.loading |= 4), (t.instance = a), eX(a), a;
            (r = uJ(n)),
              (i = uW.get(i)) && u4(r, i),
              eX((a = (e.ownerDocument || e).createElement("link")));
            var o = a;
            return (
              (o._p = new Promise(function (e, t) {
                (o.onload = e), (o.onerror = t);
              })),
              uy(a, "link", r),
              (t.state.loading |= 4),
              u3(a, n.precedence, e),
              (t.instance = a)
            );
          case "script":
            if (((a = u0(n.src)), (i = e.querySelector(u1(a)))))
              return (t.instance = i), eX(i), i;
            return (
              (r = n),
              (i = uW.get(a)) && u5((r = h({}, n)), i),
              eX((i = (e = e.ownerDocument || e).createElement("script"))),
              uy(i, "link", r),
              e.head.appendChild(i),
              (t.instance = i)
            );
          case "void":
            return null;
          default:
            throw Error(l(443, t.type));
        }
      return (
        "stylesheet" === t.type &&
          0 == (4 & t.state.loading) &&
          ((r = t.instance), (t.state.loading |= 4), u3(r, n.precedence, e)),
        t.instance
      );
    }
    function u3(e, t, n) {
      for (
        var r = n.querySelectorAll(
            'link[rel="stylesheet"][data-precedence],style[data-precedence]'
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var l = r[o];
        if (l.dataset.precedence === t) a = l;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
    }
    function u4(e, t) {
      null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
        null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
        null == e.title && (e.title = t.title);
    }
    function u5(e, t) {
      null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
        null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
        null == e.integrity && (e.integrity = t.integrity);
    }
    var u6 = null;
    function u8(e, t, n) {
      if (null === u6) {
        var r = new Map(),
          i = (u6 = new Map());
        i.set(n, r);
      } else (r = (i = u6).get(n)) || ((r = new Map()), i.set(n, r));
      if (r.has(e)) return r;
      for (
        r.set(e, null), n = n.getElementsByTagName(e), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        if (
          !(
            a[eW] ||
            a[eO] ||
            ("link" === e && "stylesheet" === a.getAttribute("rel"))
          ) &&
          "http://www.w3.org/2000/svg" !== a.namespaceURI
        ) {
          var o = a.getAttribute(t) || "";
          o = e + o;
          var l = r.get(o);
          l ? l.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function u9(e, t, n) {
      (e = e.ownerDocument || e).head.insertBefore(
        n,
        "title" === t ? e.querySelector("head > title") : null
      );
    }
    function u7(e) {
      return "stylesheet" !== e.type || 0 != (3 & e.state.loading);
    }
    var ce = 0;
    function ct() {
      if (
        (this.count--,
        0 === this.count && (0 === this.imgCount || !this.waitingForImages))
      ) {
        if (this.stylesheets) cr(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          (this.unsuspend = null), e();
        }
      }
    }
    var cn = null;
    function cr(e, t) {
      (e.stylesheets = null),
        null !== e.unsuspend &&
          (e.count++,
          (cn = new Map()),
          t.forEach(ci, e),
          (cn = null),
          ct.call(e));
    }
    function ci(e, t) {
      if (!(4 & t.state.loading)) {
        var n = cn.get(e);
        if (n) var r = n.get(null);
        else {
          (n = new Map()), cn.set(e, n);
          for (
            var i = e.querySelectorAll(
                "link[data-precedence],style[data-precedence]"
              ),
              a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            ("LINK" === o.nodeName || "not all" !== o.getAttribute("media")) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        (o = (i = t.instance).getAttribute("data-precedence")),
          (a = n.get(o) || r) === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = ct.bind(this)),
          i.addEventListener("load", r),
          i.addEventListener("error", r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : (e = 9 === e.nodeType ? e.head : e).insertBefore(i, e.firstChild),
          (t.state.loading |= 4);
      }
    }
    var ca = {
      $$typeof: k,
      Provider: null,
      Consumer: null,
      _currentValue: _,
      _currentValue2: _,
      _threadCount: 0,
    };
    function co(e, t, n, r, i, a, o, l, s) {
      (this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = eT(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = eT(0)),
        (this.hiddenUpdates = eT(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = s),
        (this.incompleteTransitions = new Map());
    }
    function cl(e, t, n, r, i, a, o, l, s, u, c, d) {
      return (
        (e = new co(e, t, n, o, s, u, c, d, l)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = ra(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = r6()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        ij(a),
        e
      );
    }
    function cs(e, t, n, r, i, a) {
      (i = i ? rr : rr),
        null === r.context ? (r.context = i) : (r.pendingContext = i),
        ((r = iM(t)).payload = { element: n }),
        null !== (a = void 0 === a ? null : a) && (r.callback = a),
        null !== (n = iR(e, r, t)) && (sf(n, e, t), iL(n, e, t));
    }
    function cu(e, t) {
      if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
      }
    }
    function cc(e, t) {
      cu(e, t), (e = e.alternate) && cu(e, t);
    }
    function cd(e) {
      if (13 === e.tag || 31 === e.tag) {
        var t = re(e, 0x4000000);
        null !== t && sf(t, e, 0x4000000), cc(e, 0x4000000);
      }
    }
    function cf(e) {
      if (13 === e.tag || 31 === e.tag) {
        var t = sc(),
          n = re(e, (t = eR(t)));
        null !== n && sf(n, e, t), cc(e, t);
      }
    }
    var cp = !0;
    function ch(e, t, n, r) {
      var i = z.T;
      z.T = null;
      var a = D.p;
      try {
        (D.p = 2), cg(e, t, n, r);
      } finally {
        (D.p = a), (z.T = i);
      }
    }
    function cm(e, t, n, r) {
      var i = z.T;
      z.T = null;
      var a = D.p;
      try {
        (D.p = 8), cg(e, t, n, r);
      } finally {
        (D.p = a), (z.T = i);
      }
    }
    function cg(e, t, n, r) {
      if (cp) {
        var i = cy(r);
        if (null === i) uo(e, t, r, cv, n), cj(e, r);
        else if (
          (function (e, t, n, r, i) {
            switch (t) {
              case "focusin":
                return (ck = cA(ck, e, t, n, r, i)), !0;
              case "dragenter":
                return (cS = cA(cS, e, t, n, r, i)), !0;
              case "mouseover":
                return (cE = cA(cE, e, t, n, r, i)), !0;
              case "pointerover":
                var a = i.pointerId;
                return cC.set(a, cA(cC.get(a) || null, e, t, n, r, i)), !0;
              case "gotpointercapture":
                return (
                  (a = i.pointerId),
                  cP.set(a, cA(cP.get(a) || null, e, t, n, r, i)),
                  !0
                );
            }
            return !1;
          })(i, e, t, n, r)
        )
          r.stopPropagation();
        else if ((cj(e, r), 4 & t && -1 < cN.indexOf(e))) {
          for (; null !== i; ) {
            var a = eQ(i);
            if (null !== a)
              switch (a.tag) {
                case 3:
                  if ((a = a.stateNode).current.memoizedState.isDehydrated) {
                    var o = eS(a.pendingLanes);
                    if (0 !== o) {
                      var l = a;
                      for (l.pendingLanes |= 2, l.entangledLanes |= 2; o; ) {
                        var s = 1 << (31 - ey(o));
                        (l.entanglements[1] |= s), (o &= ~s);
                      }
                      sX(a), 0 == (6 & lB) && ((l9 = ea() + 500), sK(0, !1));
                    }
                  }
                  break;
                case 31:
                case 13:
                  null !== (l = re(a, 2)) && sf(l, a, 2), sg(), cc(a, 2);
              }
            if ((null === (a = cy(r)) && uo(e, t, r, cv, n), a === i)) break;
            i = a;
          }
          null !== i && r.stopPropagation();
        } else uo(e, t, r, null, n);
      }
    }
    function cy(e) {
      return cb((e = tx(e)));
    }
    var cv = null;
    function cb(e) {
      if (((cv = null), null !== (e = eY(e)))) {
        var t = c(e);
        if (null === t) e = null;
        else {
          var n = t.tag;
          if (13 === n) {
            if (null !== (e = d(t))) return e;
            e = null;
          } else if (31 === n) {
            if (null !== (e = f(t))) return e;
            e = null;
          } else if (3 === n) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return 3 === t.tag ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return (cv = e), null;
    }
    function cx(e) {
      switch (e) {
        case "beforetoggle":
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
        case "toggle":
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
          return 2;
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
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (eo()) {
            case el:
              return 2;
            case es:
              return 8;
            case eu:
            case ec:
              return 32;
            case ed:
              return 0x10000000;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var cw = !1,
      ck = null,
      cS = null,
      cE = null,
      cC = new Map(),
      cP = new Map(),
      cT = [],
      cN =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
          " "
        );
    function cj(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ck = null;
          break;
        case "dragenter":
        case "dragleave":
          cS = null;
          break;
        case "mouseover":
        case "mouseout":
          cE = null;
          break;
        case "pointerover":
        case "pointerout":
          cC.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          cP.delete(t.pointerId);
      }
    }
    function cA(e, t, n, r, i, a) {
      return (
        null === e || e.nativeEvent !== a
          ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: a,
              targetContainers: [i],
            }),
            null !== t && null !== (t = eQ(t)) && cd(t))
          : ((e.eventSystemFlags |= r),
            (t = e.targetContainers),
            null !== i && -1 === t.indexOf(i) && t.push(i)),
        e
      );
    }
    function cM(e) {
      var t = eY(e.target);
      if (null !== t) {
        var n = c(t);
        if (null !== n) {
          if (13 === (t = n.tag)) {
            if (null !== (t = d(n))) {
              (e.blockedOn = t),
                eD(e.priority, function () {
                  cf(n);
                });
              return;
            }
          } else if (31 === t) {
            if (null !== (t = f(n))) {
              (e.blockedOn = t),
                eD(e.priority, function () {
                  cf(n);
                });
              return;
            }
          } else if (
            3 === t &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function cR(e) {
      if (null !== e.blockedOn) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = cy(e.nativeEvent);
        if (null !== n)
          return null !== (t = eQ(n)) && cd(t), (e.blockedOn = n), !1;
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        (tb = r), n.target.dispatchEvent(r), (tb = null), t.shift();
      }
      return !0;
    }
    function cL(e, t, n) {
      cR(e) && n.delete(t);
    }
    function cz() {
      (cw = !1),
        null !== ck && cR(ck) && (ck = null),
        null !== cS && cR(cS) && (cS = null),
        null !== cE && cR(cE) && (cE = null),
        cC.forEach(cL),
        cP.forEach(cL);
    }
    function cD(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        cw ||
          ((cw = !0),
          i.unstable_scheduleCallback(i.unstable_NormalPriority, cz)));
    }
    var c_ = null;
    function cO(e) {
      c_ !== e &&
        ((c_ = e),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
          c_ === e && (c_ = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if ("function" != typeof r)
              if (null === cb(r || n)) continue;
              else break;
            var a = eQ(n);
            null !== a &&
              (e.splice(t, 3),
              (t -= 3),
              a4(
                a,
                { pending: !0, data: i, method: n.method, action: r },
                r,
                i
              ));
          }
        }));
    }
    function cV(e) {
      function t(t) {
        return cD(t, e);
      }
      null !== ck && cD(ck, e),
        null !== cS && cD(cS, e),
        null !== cE && cD(cE, e),
        cC.forEach(t),
        cP.forEach(t);
      for (var n = 0; n < cT.length; n++) {
        var r = cT[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < cT.length && null === (n = cT[0]).blockedOn; )
        cM(n), null === n.blockedOn && cT.shift();
      if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[eV] || null;
          if ("function" == typeof a) o || cO(n);
          else if (o) {
            var l = null;
            if (a && a.hasAttribute("formAction")) {
              if (((i = a), (o = a[eV] || null))) l = o.formAction;
              else if (null !== cb(i)) continue;
            } else l = o.action;
            "function" == typeof l
              ? (n[r + 1] = l)
              : (n.splice(r, 3), (r -= 3)),
              cO(n);
          }
        }
    }
    function cI() {
      function e(e) {
        e.canIntercept &&
          "react-transition" === e.info &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: "manual",
            scroll: "manual",
          });
      }
      function t() {
        null !== i && (i(), (i = null)), r || setTimeout(n, 20);
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            null != e.url &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: "react-transition",
              history: "replace",
            });
        }
      }
      if ("object" == typeof navigation) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener("navigate", e),
          navigation.addEventListener("navigatesuccess", t),
          navigation.addEventListener("navigateerror", t),
          setTimeout(n, 100),
          function () {
            (r = !0),
              navigation.removeEventListener("navigate", e),
              navigation.removeEventListener("navigatesuccess", t),
              navigation.removeEventListener("navigateerror", t),
              null !== i && (i(), (i = null));
          }
        );
      }
    }
    function cF(e) {
      this._internalRoot = e;
    }
    function cB(e) {
      this._internalRoot = e;
    }
    (cB.prototype.render = cF.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(l(409));
        cs(t.current, sc(), e, t, null, null);
      }),
      (cB.prototype.unmount = cF.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (null !== e) {
            this._internalRoot = null;
            var t = e.containerInfo;
            cs(e.current, 2, null, e, null, null), sg(), (t[eI] = null);
          }
        }),
      (cB.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
          var t = ez();
          e = { blockedOn: null, target: e, priority: t };
          for (var n = 0; n < cT.length && 0 !== t && t < cT[n].priority; n++);
          cT.splice(n, 0, e), 0 === n && cM(e);
        }
      });
    var c$ = a.version;
    if ("19.2.7" !== c$) throw Error(l(527, c$, "19.2.7"));
    if (
      ((D.findDOMNode = function (e) {
        var t = e._reactInternals;
        if (void 0 === t) {
          if ("function" == typeof e.render) throw Error(l(188));
          throw Error(l(268, (e = Object.keys(e).join(","))));
        }
        return null ===
          (e =
            null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = c(e))) throw Error(l(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var i = n.return;
                if (null === i) break;
                var a = i.alternate;
                if (null === a) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === a.child) {
                  for (a = i.child; a; ) {
                    if (a === n) return p(i), e;
                    if (a === r) return p(i), t;
                    a = a.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) (n = i), (r = a);
                else {
                  for (var o = !1, s = i.child; s; ) {
                    if (s === n) {
                      (o = !0), (n = i), (r = a);
                      break;
                    }
                    if (s === r) {
                      (o = !0), (r = i), (n = a);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!o) {
                    for (s = a.child; s; ) {
                      if (s === n) {
                        (o = !0), (n = a), (r = i);
                        break;
                      }
                      if (s === r) {
                        (o = !0), (r = a), (n = i);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!o) throw Error(l(189));
                  }
                }
                if (n.alternate !== r) throw Error(l(190));
              }
              if (3 !== n.tag) throw Error(l(188));
              return n.stateNode.current === n ? e : t;
            })(t))
              ? (function e(t) {
                  var n = t.tag;
                  if (5 === n || 26 === n || 27 === n || 6 === n) return t;
                  for (t = t.child; null !== t; ) {
                    if (null !== (n = e(t))) return n;
                    t = t.sibling;
                  }
                  return null;
                })(e)
              : null)
          ? null
          : e.stateNode;
      }),
      "u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
    ) {
      var cU = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!cU.isDisabled && cU.supportsFiber)
        try {
          (eh = cU.inject({
            bundleType: 0,
            version: "19.2.7",
            rendererPackageName: "react-dom",
            currentDispatcherRef: z,
            reconcilerVersion: "19.2.7",
          })),
            (em = cU);
        } catch (e) {}
    }
    (tV = function (e, t) {
      if (!u(e)) throw Error(l(299));
      var n = !1,
        r = "",
        i = oy,
        a = ov,
        o = ob;
      return (
        null != t &&
          (!0 === t.unstable_strictMode && (n = !0),
          void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
          void 0 !== t.onUncaughtError && (i = t.onUncaughtError),
          void 0 !== t.onCaughtError && (a = t.onCaughtError),
          void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
        (t = cl(e, 1, !1, null, null, n, r, null, i, a, o, cI)),
        (e[eI] = t.current),
        ui(e),
        new cF(t)
      );
    }),
      (tI = function (e, t, n) {
        if (!u(e)) throw Error(l(299));
        var r = !1,
          i = "",
          a = oy,
          o = ov,
          s = ob,
          c = null;
        return (
          null != n &&
            (!0 === n.unstable_strictMode && (r = !0),
            void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
            void 0 !== n.onUncaughtError && (a = n.onUncaughtError),
            void 0 !== n.onCaughtError && (o = n.onCaughtError),
            void 0 !== n.onRecoverableError && (s = n.onRecoverableError),
            void 0 !== n.formState && (c = n.formState)),
          ((t = cl(
            e,
            1,
            !0,
            t,
            null != n ? n : null,
            r,
            i,
            c,
            a,
            o,
            s,
            cI
          )).context = rr),
          (n = t.current),
          ((i = iM((r = eR((r = sc()))))).callback = null),
          iR(n, i, r),
          (n = r),
          (t.current.lanes = n),
          eN(t, n),
          sX(t),
          (e[eI] = t.current),
          ui(e),
          new cB(t)
        );
      }),
      (tF = "19.2.7");
  }),
  u("aALGe", function (e, t) {
    e.exports = s("hurnZ");
  }),
  u("hurnZ", function (e, t) {
    function n(e, t) {
      var n = e.length;
      for (e.push(t); 0 < n; ) {
        var r = (n - 1) >>> 1,
          i = e[r];
        if (0 < o(i, t)) (e[r] = t), (e[n] = i), (n = r);
        else break;
      }
    }
    function i(e) {
      return 0 === e.length ? null : e[0];
    }
    function a(e) {
      if (0 === e.length) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        for (var r = 0, i = e.length, a = i >>> 1; r < a; ) {
          var l = 2 * (r + 1) - 1,
            s = e[l],
            u = l + 1,
            c = e[u];
          if (0 > o(s, n))
            u < i && 0 > o(c, s)
              ? ((e[r] = c), (e[u] = n), (r = u))
              : ((e[r] = s), (e[l] = n), (r = l));
          else if (u < i && 0 > o(c, n)) (e[r] = c), (e[u] = n), (r = u);
          else break;
        }
      }
      return t;
    }
    function o(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return 0 !== n ? n : e.id - t.id;
    }
    if (
      (r(
        e.exports,
        "unstable_now",
        () => l,
        (e) => (l = e)
      ),
      r(
        e.exports,
        "unstable_IdlePriority",
        () => s,
        (e) => (s = e)
      ),
      r(
        e.exports,
        "unstable_ImmediatePriority",
        () => u,
        (e) => (u = e)
      ),
      r(
        e.exports,
        "unstable_LowPriority",
        () => c,
        (e) => (c = e)
      ),
      r(
        e.exports,
        "unstable_NormalPriority",
        () => d,
        (e) => (d = e)
      ),
      r(
        e.exports,
        "unstable_Profiling",
        () => f,
        (e) => (f = e)
      ),
      r(
        e.exports,
        "unstable_UserBlockingPriority",
        () => p,
        (e) => (p = e)
      ),
      r(
        e.exports,
        "unstable_cancelCallback",
        () => h,
        (e) => (h = e)
      ),
      r(
        e.exports,
        "unstable_forceFrameRate",
        () => m,
        (e) => (m = e)
      ),
      r(
        e.exports,
        "unstable_getCurrentPriorityLevel",
        () => g,
        (e) => (g = e)
      ),
      r(
        e.exports,
        "unstable_next",
        () => y,
        (e) => (y = e)
      ),
      r(
        e.exports,
        "unstable_requestPaint",
        () => v,
        (e) => (v = e)
      ),
      r(
        e.exports,
        "unstable_runWithPriority",
        () => b,
        (e) => (b = e)
      ),
      r(
        e.exports,
        "unstable_scheduleCallback",
        () => x,
        (e) => (x = e)
      ),
      r(
        e.exports,
        "unstable_shouldYield",
        () => w,
        (e) => (w = e)
      ),
      r(
        e.exports,
        "unstable_wrapCallback",
        () => k,
        (e) => (k = e)
      ),
      (l = void 0),
      "object" == typeof performance && "function" == typeof performance.now)
    ) {
      var l,
        s,
        u,
        c,
        d,
        f,
        p,
        h,
        m,
        g,
        y,
        v,
        b,
        x,
        w,
        k,
        S,
        E = performance;
      l = function () {
        return E.now();
      };
    } else {
      var C = Date,
        P = C.now();
      l = function () {
        return C.now() - P;
      };
    }
    var T = [],
      N = [],
      j = 1,
      A = null,
      M = 3,
      R = !1,
      L = !1,
      z = !1,
      D = !1,
      _ = "function" == typeof setTimeout ? setTimeout : null,
      O = "function" == typeof clearTimeout ? clearTimeout : null,
      V = "u" > typeof setImmediate ? setImmediate : null;
    function I(e) {
      for (var t = i(N); null !== t; ) {
        if (null === t.callback) a(N);
        else if (t.startTime <= e)
          a(N), (t.sortIndex = t.expirationTime), n(T, t);
        else break;
        t = i(N);
      }
    }
    function F(e) {
      if (((z = !1), I(e), !L))
        if (null !== i(T)) (L = !0), B || ((B = !0), S());
        else {
          var t = i(N);
          null !== t && G(F, t.startTime - e);
        }
    }
    var B = !1,
      $ = -1,
      U = 5,
      W = -1;
    function H() {
      return !!D || !(l() - W < U);
    }
    function Y() {
      if (((D = !1), B)) {
        var e = l();
        W = e;
        var t = !0;
        try {
          e: {
            (L = !1), z && ((z = !1), O($), ($ = -1)), (R = !0);
            var n = M;
            try {
              t: {
                for (
                  I(e), A = i(T);
                  null !== A && !(A.expirationTime > e && H());

                ) {
                  var r = A.callback;
                  if ("function" == typeof r) {
                    (A.callback = null), (M = A.priorityLevel);
                    var o = r(A.expirationTime <= e);
                    if (((e = l()), "function" == typeof o)) {
                      (A.callback = o), I(e), (t = !0);
                      break t;
                    }
                    A === i(T) && a(T), I(e);
                  } else a(T);
                  A = i(T);
                }
                if (null !== A) t = !0;
                else {
                  var s = i(N);
                  null !== s && G(F, s.startTime - e), (t = !1);
                }
              }
              break e;
            } finally {
              (A = null), (M = n), (R = !1);
            }
          }
        } finally {
          t ? S() : (B = !1);
        }
      }
    }
    if ("function" == typeof V)
      S = function () {
        V(Y);
      };
    else if ("u" > typeof MessageChannel) {
      var Q = new MessageChannel(),
        q = Q.port2;
      (Q.port1.onmessage = Y),
        (S = function () {
          q.postMessage(null);
        });
    } else
      S = function () {
        _(Y, 0);
      };
    function G(e, t) {
      $ = _(function () {
        e(l());
      }, t);
    }
    (s = 5),
      (u = 1),
      (c = 4),
      (d = 3),
      (f = null),
      (p = 2),
      (h = function (e) {
        e.callback = null;
      }),
      (m = function (e) {
        0 > e || 125 < e
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (U = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (g = function () {
        return M;
      }),
      (y = function (e) {
        switch (M) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = M;
        }
        var n = M;
        M = t;
        try {
          return e();
        } finally {
          M = n;
        }
      }),
      (v = function () {
        D = !0;
      }),
      (b = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = M;
        M = e;
        try {
          return t();
        } finally {
          M = n;
        }
      }),
      (x = function (e, t, r) {
        var a = l();
        switch (
          ((r =
            "object" == typeof r &&
            null !== r &&
            "number" == typeof (r = r.delay) &&
            0 < r
              ? a + r
              : a),
          e)
        ) {
          case 1:
            var o = -1;
            break;
          case 2:
            o = 250;
            break;
          case 5:
            o = 0x3fffffff;
            break;
          case 4:
            o = 1e4;
            break;
          default:
            o = 5e3;
        }
        return (
          (o = r + o),
          (e = {
            id: j++,
            callback: t,
            priorityLevel: e,
            startTime: r,
            expirationTime: o,
            sortIndex: -1,
          }),
          r > a
            ? ((e.sortIndex = r),
              n(N, e),
              null === i(T) &&
                e === i(N) &&
                (z ? (O($), ($ = -1)) : (z = !0), G(F, r - a)))
            : ((e.sortIndex = o),
              n(T, e),
              L || R || ((L = !0), B || ((B = !0), S()))),
          e
        );
      }),
      (w = H),
      (k = function (e) {
        var t = M;
        return function () {
          var n = M;
          M = t;
          try {
            return e.apply(this, arguments);
          } finally {
            M = n;
          }
        };
      });
  }),
  u("2YQ6R", function (e, t) {
    e.exports = s("kgQjf");
  }),
  u("8yZRv", function (e, t) {
    !(function e() {
      if (
        "u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (e) {
          console.error(e);
        }
    })(),
      (e.exports = s("7klJZ"));
  }),
  u("7klJZ", function (e, t) {
    r(
      e.exports,
      "__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE",
      () => n,
      (e) => (n = e)
    ),
      r(
        e.exports,
        "createPortal",
        () => i,
        (e) => (i = e)
      ),
      r(
        e.exports,
        "flushSync",
        () => a,
        (e) => (a = e)
      ),
      r(
        e.exports,
        "preconnect",
        () => o,
        (e) => (o = e)
      ),
      r(
        e.exports,
        "prefetchDNS",
        () => l,
        (e) => (l = e)
      ),
      r(
        e.exports,
        "preinit",
        () => u,
        (e) => (u = e)
      ),
      r(
        e.exports,
        "preinitModule",
        () => c,
        (e) => (c = e)
      ),
      r(
        e.exports,
        "preload",
        () => d,
        (e) => (d = e)
      ),
      r(
        e.exports,
        "preloadModule",
        () => f,
        (e) => (f = e)
      ),
      r(
        e.exports,
        "requestFormReset",
        () => p,
        (e) => (p = e)
      ),
      r(
        e.exports,
        "unstable_batchedUpdates",
        () => h,
        (e) => (h = e)
      ),
      r(
        e.exports,
        "useFormState",
        () => m,
        (e) => (m = e)
      ),
      r(
        e.exports,
        "useFormStatus",
        () => g,
        (e) => (g = e)
      ),
      r(
        e.exports,
        "version",
        () => y,
        (e) => (y = e)
      );
    var n,
      i,
      a,
      o,
      l,
      u,
      c,
      d,
      f,
      p,
      h,
      m,
      g,
      y,
      v = s("2YQ6R");
    function b(e) {
      var t = "https://react.dev/errors/" + e;
      if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += "&args[]=" + encodeURIComponent(arguments[n]);
      }
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function x() {}
    var w = {
        d: {
          f: x,
          r: function () {
            throw Error(b(522));
          },
          D: x,
          C: x,
          L: x,
          m: x,
          X: x,
          S: x,
          M: x,
        },
        p: 0,
        findDOMNode: null,
      },
      k = Symbol.for("react.portal"),
      S = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function E(e, t) {
      return "font" === e
        ? ""
        : "string" == typeof t
        ? "use-credentials" === t
          ? t
          : ""
        : void 0;
    }
    (n = w),
      (i = function (e, t) {
        var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!t || (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType))
          throw Error(b(299));
        return (function (e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: k,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        })(e, t, null, n);
      }),
      (a = function (e) {
        var t = S.T,
          n = w.p;
        try {
          if (((S.T = null), (w.p = 2), e)) return e();
        } finally {
          (S.T = t), (w.p = n), w.d.f();
        }
      }),
      (o = function (e, t) {
        "string" == typeof e &&
          ((t = t
            ? "string" == typeof (t = t.crossOrigin)
              ? "use-credentials" === t
                ? t
                : ""
              : void 0
            : null),
          w.d.C(e, t));
      }),
      (l = function (e) {
        "string" == typeof e && w.d.D(e);
      }),
      (u = function (e, t) {
        if ("string" == typeof e && t && "string" == typeof t.as) {
          var n = t.as,
            r = E(n, t.crossOrigin),
            i = "string" == typeof t.integrity ? t.integrity : void 0,
            a = "string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
          "style" === n
            ? w.d.S(
                e,
                "string" == typeof t.precedence ? t.precedence : void 0,
                { crossOrigin: r, integrity: i, fetchPriority: a }
              )
            : "script" === n &&
              w.d.X(e, {
                crossOrigin: r,
                integrity: i,
                fetchPriority: a,
                nonce: "string" == typeof t.nonce ? t.nonce : void 0,
              });
        }
      }),
      (c = function (e, t) {
        if ("string" == typeof e)
          if ("object" == typeof t && null !== t) {
            if (null == t.as || "script" === t.as) {
              var n = E(t.as, t.crossOrigin);
              w.d.M(e, {
                crossOrigin: n,
                integrity:
                  "string" == typeof t.integrity ? t.integrity : void 0,
                nonce: "string" == typeof t.nonce ? t.nonce : void 0,
              });
            }
          } else null == t && w.d.M(e);
      }),
      (d = function (e, t) {
        if (
          "string" == typeof e &&
          "object" == typeof t &&
          null !== t &&
          "string" == typeof t.as
        ) {
          var n = t.as,
            r = E(n, t.crossOrigin);
          w.d.L(e, n, {
            crossOrigin: r,
            integrity: "string" == typeof t.integrity ? t.integrity : void 0,
            nonce: "string" == typeof t.nonce ? t.nonce : void 0,
            type: "string" == typeof t.type ? t.type : void 0,
            fetchPriority:
              "string" == typeof t.fetchPriority ? t.fetchPriority : void 0,
            referrerPolicy:
              "string" == typeof t.referrerPolicy ? t.referrerPolicy : void 0,
            imageSrcSet:
              "string" == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
            imageSizes: "string" == typeof t.imageSizes ? t.imageSizes : void 0,
            media: "string" == typeof t.media ? t.media : void 0,
          });
        }
      }),
      (f = function (e, t) {
        if ("string" == typeof e)
          if (t) {
            var n = E(t.as, t.crossOrigin);
            w.d.m(e, {
              as: "string" == typeof t.as && "script" !== t.as ? t.as : void 0,
              crossOrigin: n,
              integrity: "string" == typeof t.integrity ? t.integrity : void 0,
            });
          } else w.d.m(e);
      }),
      (p = function (e) {
        w.d.r(e);
      }),
      (h = function (e, t) {
        return e(t);
      }),
      (m = function (e, t, n) {
        return S.H.useFormState(e, t, n);
      }),
      (g = function () {
        return S.H.useHostTransitionStatus();
      }),
      (y = "19.2.7");
  });
var c = {};
c = s("6mwK0");
var d = s("2YQ6R"),
  f = {};
!(function e() {
  if (
    "u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
    "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
    } catch (e) {
      console.error(e);
    }
})(),
  (f = s("7b93F"));
var d = (s("2YQ6R"), s("2YQ6R"), s("2YQ6R"));
let p = (0, d.createContext)({});
function h(e) {
  let t = (0, d.useRef)(null);
  return null === t.current && (t.current = e()), t.current;
}
var d = (s("2YQ6R"), s("2YQ6R"));
let m = "u" > typeof window ? d.useLayoutEffect : d.useEffect;
var d = (s("2YQ6R"), s("2YQ6R"));
let g = (0, d.createContext)(null),
  y = (e) => "object" == typeof e && null !== e;
function v(e) {
  return y(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
var d = (s("2YQ6R"), s("2YQ6R"));
let b = (0, d.createContext)({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never",
});
var d = s("2YQ6R");
function x(e, t) {
  if ("function" == typeof e) return e(t);
  null != e && (e.current = t);
}
class w extends d.Component {
  getSnapshotBeforeUpdate(e) {
    let t = this.props.childRef.current;
    if (v(t) && e.isPresent && !this.props.isPresent && !1 !== this.props.pop) {
      let e = t.offsetParent,
        n = (v(e) && e.offsetWidth) || 0,
        r = (v(e) && e.offsetHeight) || 0,
        i = getComputedStyle(t),
        a = this.props.sizeRef.current;
      (a.height = parseFloat(i.height)),
        (a.width = parseFloat(i.width)),
        (a.top = t.offsetTop),
        (a.left = t.offsetLeft),
        (a.right = n - a.width - a.left),
        (a.bottom = r - a.height - a.top),
        (a.direction = i.direction);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function k({
  children: e,
  isPresent: t,
  anchorX: n,
  anchorY: r,
  root: i,
  pop: a,
}) {
  let o = (0, d.useId)(),
    l = (0, d.useRef)(null),
    s = (0, d.useRef)({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      direction: "ltr",
    }),
    { nonce: u } = (0, d.useContext)(b),
    f = (function (...e) {
      return d.useCallback(
        (function (...e) {
          return (t) => {
            let n = !1,
              r = e.map((e) => {
                let r = x(e, t);
                return n || "function" != typeof r || (n = !0), r;
              });
            if (n)
              return () => {
                for (let t = 0; t < r.length; t++) {
                  let n = r[t];
                  "function" == typeof n ? n() : x(e[t], null);
                }
              };
          };
        })(...e),
        e
      );
    })(l, e.props?.ref ?? e?.ref);
  return (
    (0, d.useInsertionEffect)(() => {
      let {
        width: e,
        height: c,
        top: d,
        left: f,
        right: p,
        bottom: h,
        direction: m,
      } = s.current;
      if (t || !1 === a || !l.current || !e || !c) return;
      let g = "rtl" === m,
        y =
          "left" === n
            ? g
              ? `right: ${p}`
              : `left: ${f}`
            : g
            ? `left: ${f}`
            : `right: ${p}`,
        v = "bottom" === r ? `bottom: ${h}` : `top: ${d}`;
      l.current.dataset.motionPopId = o;
      let b = document.createElement("style");
      u && (b.nonce = u);
      let x = i ?? document.head;
      return (
        x.appendChild(b),
        b.sheet &&
          b.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${c}px !important;
            ${y}px !important;
            ${v}px !important;
          }
        `),
        () => {
          l.current?.removeAttribute("data-motion-pop-id"),
            x.contains(b) && x.removeChild(b);
        }
      );
    }, [t]),
    (0, c.jsx)(w, {
      isPresent: t,
      childRef: l,
      sizeRef: s,
      pop: a,
      children: !1 === a ? e : d.cloneElement(e, { ref: f }),
    })
  );
}
let S = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: a,
  mode: o,
  anchorX: l,
  anchorY: s,
  root: u,
}) => {
  let f = h(E),
    p = (0, d.useId)(),
    y = (0, d.useRef)(n),
    v = (0, d.useRef)(r);
  m(() => {
    (y.current = n), (v.current = r);
  });
  let b = !0,
    x = (0, d.useMemo)(
      () => (
        (b = !1),
        {
          id: p,
          initial: t,
          isPresent: n,
          custom: i,
          onExitComplete: (e) => {
            for (let t of (f.set(e, !0), f.values())) if (!t) return;
            r && r();
          },
          register: (e) => (
            f.set(e, !1),
            () => {
              f.delete(e), y.current || f.size || v.current?.();
            }
          ),
        }
      ),
      [n, f, r]
    );
  return (
    a && b && (x = { ...x }),
    (0, d.useMemo)(() => {
      f.forEach((e, t) => f.set(t, !1));
    }, [n]),
    d.useEffect(() => {
      n || f.size || !r || r();
    }, [n]),
    (e = (0, c.jsx)(k, {
      pop: "popLayout" === o,
      isPresent: n,
      anchorX: l,
      anchorY: s,
      root: u,
      children: e,
    })),
    (0, c.jsx)(g.Provider, { value: x, children: e })
  );
};
function E() {
  return new Map();
}
function C(e = !0) {
  let t = (0, d.useContext)(g);
  if (null === t) return [!0, null];
  let { isPresent: n, onExitComplete: r, register: i } = t,
    a = (0, d.useId)();
  (0, d.useEffect)(() => {
    if (e) return i(a);
  }, [e]);
  let o = (0, d.useCallback)(() => e && r && r(a), [a, r, e]);
  return !n && r ? [!1, o] : [!0];
}
var d = (s("2YQ6R"), s("2YQ6R"));
let P = (e) => e.key || "";
function T(e) {
  let t = [];
  return (
    d.Children.forEach(e, (e) => {
      (0, d.isValidElement)(e) && t.push(e);
    }),
    t
  );
}
let N = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: a = "sync",
    propagate: o = !1,
    anchorX: l = "left",
    anchorY: s = "top",
    root: u,
  }) => {
    let [f, g] = C(o),
      y = (0, d.useMemo)(() => T(e), [e]),
      v = o && !f ? [] : y.map(P),
      b = (0, d.useRef)(!0),
      x = (0, d.useRef)(y),
      w = h(() => new Map()),
      k = (0, d.useRef)(new Set()),
      [E, N] = (0, d.useState)(y),
      [j, A] = (0, d.useState)(y);
    m(() => {
      (b.current = !1), (x.current = y);
      for (let e = 0; e < j.length; e++) {
        let t = P(j[e]);
        v.includes(t)
          ? (w.delete(t), k.current.delete(t))
          : !0 !== w.get(t) && w.set(t, !1);
      }
    }, [j, v.length, v.join("-")]);
    let M = [];
    if (y !== E) {
      let e = [...y];
      for (let t = 0; t < j.length; t++) {
        let n = j[t],
          r = P(n);
        v.includes(r) || (e.splice(t, 0, n), M.push(n));
      }
      return "wait" === a && M.length && (e = M), A(T(e)), N(y), null;
    }
    let { forceRender: R } = (0, d.useContext)(p);
    return (0, c.jsx)(c.Fragment, {
      children: j.map((e) => {
        let d = P(e),
          p = (!o || !!f) && (y === j || v.includes(d));
        return (0, c.jsx)(
          S,
          {
            isPresent: p,
            initial: (!b.current || !!n) && void 0,
            custom: t,
            presenceAffectsLayout: i,
            mode: a,
            root: u,
            onExitComplete: p
              ? void 0
              : () => {
                  if (k.current.has(d) || !w.has(d)) return;
                  k.current.add(d), w.set(d, !0);
                  let e = !0;
                  w.forEach((t) => {
                    t || (e = !1);
                  }),
                    e && (R?.(), A(x.current), o && g?.(), r && r());
                },
            anchorX: l,
            anchorY: s,
            children: e,
          },
          d
        );
      }),
    });
  },
  j = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  A = new Set([...j, "pathRotation"]),
  M = (e, t, n) => (n > t ? t : n < e ? e : n),
  R = {
    test: (e) => "number" == typeof e,
    parse: parseFloat,
    transform: (e) => e,
  },
  L = { ...R, transform: (e) => M(0, 1, e) },
  z = { ...R, default: 1 },
  D = (e) => Math.round(1e5 * e) / 1e5,
  _ = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  O =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  V = (e, t) => (n) =>
    !!(
      ("string" == typeof n && O.test(n) && n.startsWith(e)) ||
      (t && null != n && Object.prototype.hasOwnProperty.call(n, t))
    ),
  I = (e, t, n) => (r) => {
    if ("string" != typeof r) return r;
    let [i, a, o, l] = r.match(_);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(a),
      [n]: parseFloat(o),
      alpha: void 0 !== l ? parseFloat(l) : 1,
    };
  },
  F = { ...R, transform: (e) => Math.round(M(0, 255, e)) },
  B = {
    test: V("rgb", "red"),
    parse: I("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      F.transform(e) +
      ", " +
      F.transform(t) +
      ", " +
      F.transform(n) +
      ", " +
      D(L.transform(r)) +
      ")",
  },
  $ = {
    test: V("#"),
    parse: function (e) {
      let t = "",
        n = "",
        r = "",
        i = "";
      return (
        e.length > 5
          ? ((t = e.substring(1, 3)),
            (n = e.substring(3, 5)),
            (r = e.substring(5, 7)),
            (i = e.substring(7, 9)))
          : ((t = e.substring(1, 2)),
            (n = e.substring(2, 3)),
            (r = e.substring(3, 4)),
            (i = e.substring(4, 5)),
            (t += t),
            (n += n),
            (r += r),
            (i += i)),
        {
          red: parseInt(t, 16),
          green: parseInt(n, 16),
          blue: parseInt(r, 16),
          alpha: i ? parseInt(i, 16) / 255 : 1,
        }
      );
    },
    transform: B.transform,
  },
  U = (e) => ({
    test: (t) =>
      "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  W = U("deg"),
  H = U("%"),
  Y = U("px"),
  Q = U("vh"),
  q = U("vw"),
  G = {
    ...H,
    parse: (e) => H.parse(e) / 100,
    transform: (e) => H.transform(100 * e),
  },
  X = {
    test: V("hsl", "hue"),
    parse: I("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      H.transform(D(t)) +
      ", " +
      H.transform(D(n)) +
      ", " +
      D(L.transform(r)) +
      ")",
  },
  K = {
    test: (e) => B.test(e) || $.test(e) || X.test(e),
    parse: (e) =>
      B.test(e) ? B.parse(e) : X.test(e) ? X.parse(e) : $.parse(e),
    transform: (e) =>
      "string" == typeof e
        ? e
        : e.hasOwnProperty("red")
        ? B.transform(e)
        : X.transform(e),
    getAnimatableNone: (e) => {
      let t = K.parse(e);
      return (t.alpha = 0), K.transform(t);
    },
  },
  Z =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  J = "number",
  ee = "color",
  et =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function en(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    a = 0,
    o = t
      .replace(
        et,
        (e) => (
          K.test(e)
            ? (r.color.push(a), i.push(ee), n.push(K.parse(e)))
            : e.startsWith("var(")
            ? (r.var.push(a), i.push("var"), n.push(e))
            : (r.number.push(a), i.push(J), n.push(parseFloat(e))),
          ++a,
          "${}"
        )
      )
      .split("${}");
  return { values: n, split: o, indexes: r, types: i };
}
function er({ split: e, types: t }) {
  let n = e.length;
  return (r) => {
    let i = "";
    for (let a = 0; a < n; a++)
      if (((i += e[a]), void 0 !== r[a])) {
        let e = t[a];
        e === J
          ? (i += D(r[a]))
          : e === ee
          ? (i += K.transform(r[a]))
          : (i += r[a]);
      }
    return i;
  };
}
let ei = {
    test: function (e) {
      return (
        isNaN(e) &&
        "string" == typeof e &&
        (e.match(_)?.length || 0) + (e.match(Z)?.length || 0) > 0
      );
    },
    parse: function (e) {
      return en(e).values;
    },
    createTransformer: function (e) {
      return er(en(e));
    },
    getAnimatableNone: function (e) {
      let t = en(e);
      return er(t)(
        t.values.map((e, n) =>
          ((e, t) =>
            "number" == typeof e
              ? t?.trim().endsWith("/")
                ? e
                : 0
              : "number" == typeof e
              ? 0
              : K.test(e)
              ? K.getAnimatableNone(e)
              : e)(e, t.split[n])
        )
      );
    },
  },
  ea = new Set(["brightness", "contrast", "saturate", "opacity"]);
function eo(e) {
  let [t, n] = e.slice(0, -1).split("(");
  if ("drop-shadow" === t) return e;
  let [r] = n.match(_) || [];
  if (!r) return e;
  let i = n.replace(r, ""),
    a = +!!ea.has(t);
  return r !== n && (a *= 100), t + "(" + a + i + ")";
}
let el = /\b([a-z-]*)\(.*?\)/gu,
  es = {
    ...ei,
    getAnimatableNone: (e) => {
      let t = e.match(el);
      return t ? t.map(eo).join(" ") : e;
    },
  },
  eu = {
    ...ei,
    getAnimatableNone: (e) => {
      let t = ei.parse(e);
      return ei.createTransformer(e)(
        t.map((e) =>
          "number" == typeof e
            ? 0
            : "object" == typeof e
            ? { ...e, alpha: 1 }
            : e
        )
      );
    },
  },
  ec = { ...R, transform: Math.round },
  ed = {
    borderWidth: Y,
    borderTopWidth: Y,
    borderRightWidth: Y,
    borderBottomWidth: Y,
    borderLeftWidth: Y,
    borderRadius: Y,
    borderTopLeftRadius: Y,
    borderTopRightRadius: Y,
    borderBottomRightRadius: Y,
    borderBottomLeftRadius: Y,
    width: Y,
    maxWidth: Y,
    height: Y,
    maxHeight: Y,
    top: Y,
    right: Y,
    bottom: Y,
    left: Y,
    inset: Y,
    insetBlock: Y,
    insetBlockStart: Y,
    insetBlockEnd: Y,
    insetInline: Y,
    insetInlineStart: Y,
    insetInlineEnd: Y,
    padding: Y,
    paddingTop: Y,
    paddingRight: Y,
    paddingBottom: Y,
    paddingLeft: Y,
    paddingBlock: Y,
    paddingBlockStart: Y,
    paddingBlockEnd: Y,
    paddingInline: Y,
    paddingInlineStart: Y,
    paddingInlineEnd: Y,
    margin: Y,
    marginTop: Y,
    marginRight: Y,
    marginBottom: Y,
    marginLeft: Y,
    marginBlock: Y,
    marginBlockStart: Y,
    marginBlockEnd: Y,
    marginInline: Y,
    marginInlineStart: Y,
    marginInlineEnd: Y,
    fontSize: Y,
    backgroundPositionX: Y,
    backgroundPositionY: Y,
    rotate: W,
    pathRotation: W,
    rotateX: W,
    rotateY: W,
    rotateZ: W,
    scale: z,
    scaleX: z,
    scaleY: z,
    scaleZ: z,
    skew: W,
    skewX: W,
    skewY: W,
    distance: Y,
    translateX: Y,
    translateY: Y,
    translateZ: Y,
    x: Y,
    y: Y,
    z: Y,
    perspective: Y,
    transformPerspective: Y,
    opacity: L,
    originX: G,
    originY: G,
    originZ: Y,
    zIndex: ec,
    fillOpacity: L,
    strokeOpacity: L,
    numOctaves: ec,
  },
  ef = {
    ...ed,
    color: K,
    backgroundColor: K,
    outlineColor: K,
    fill: K,
    stroke: K,
    borderColor: K,
    borderTopColor: K,
    borderRightColor: K,
    borderBottomColor: K,
    borderLeftColor: K,
    filter: es,
    WebkitFilter: es,
    mask: eu,
    WebkitMask: eu,
  },
  ep = (e) => ef[e],
  eh = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  em = () => ({ x: eh(), y: eh() }),
  eg = () => ({ min: 0, max: 0 }),
  ey = () => ({ x: eg(), y: eg() }),
  ev = (e) => !!(e && e.getVelocity),
  eb = new Set(["width", "height", "top", "left", "right", "bottom", ...j]),
  ex = (e) => (t) => t.test(e),
  ew = [R, Y, H, W, q, Q, { test: (e) => "auto" === e, parse: (e) => e }],
  ek = (e) => ew.find(ex(e)),
  eS = () => {},
  eE = () => {},
  eC = (e) => (t) => "string" == typeof t && t.startsWith(e),
  eP = eC("--"),
  eT = eC("var(--"),
  eN = (e) => !!eT(e) && ej.test(e.split("/*")[0].trim()),
  ej =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function eA(e) {
  return "string" == typeof e && e.split("/*")[0].includes("var(--");
}
let eM = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
  eR = (e) => (180 * e) / Math.PI,
  eL = (e) => eD(eR(Math.atan2(e[1], e[0]))),
  ez = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: eL,
    rotateZ: eL,
    skewX: (e) => eR(Math.atan(e[1])),
    skewY: (e) => eR(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  eD = (e) => ((e %= 360) < 0 && (e += 360), e),
  e_ = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  eO = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  eV = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: e_,
    scaleY: eO,
    scale: (e) => (e_(e) + eO(e)) / 2,
    rotateX: (e) => eD(eR(Math.atan2(e[6], e[5]))),
    rotateY: (e) => eD(eR(Math.atan2(-e[2], e[0]))),
    rotateZ: eL,
    rotate: eL,
    skewX: (e) => eR(Math.atan(e[4])),
    skewY: (e) => eR(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function eI(e) {
  return +!!e.includes("scale");
}
function eF(e, t) {
  let n, r;
  if (!e || "none" === e) return eI(t);
  let i = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  if (i) (n = eV), (r = i);
  else {
    let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (n = ez), (r = t);
  }
  if (!r) return eI(t);
  let a = n[t],
    o = r[1].split(",").map(eB);
  return "function" == typeof a ? a(o) : o[a];
}
function eB(e) {
  return parseFloat(e.trim());
}
let e$ = (e) => e === R || e === Y,
  eU = new Set(["x", "y", "z"]),
  eW = j.filter((e) => !eU.has(e)),
  eH = {
    width: (
      { x: e },
      { paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r }
    ) => {
      let i = e.max - e.min;
      return "border-box" === r ? i : i - parseFloat(t) - parseFloat(n);
    },
    height: (
      { y: e },
      { paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r }
    ) => {
      let i = e.max - e.min;
      return "border-box" === r ? i : i - parseFloat(t) - parseFloat(n);
    },
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: (e, { transform: t }) => eF(t, "x"),
    y: (e, { transform: t }) => eF(t, "y"),
  };
(eH.translateX = eH.x), (eH.translateY = eH.y);
let eY = (e) => e,
  eQ = {},
  eq = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function eG(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    a = () => (n = !0),
    o = eq.reduce(
      (e, t) => (
        (e[t] = (function (e) {
          let t = new Set(),
            n = new Set(),
            r = !1,
            i = !1,
            a = new WeakSet(),
            o = { delta: 0, timestamp: 0, isProcessing: !1 };
          function l(t) {
            a.has(t) && (s.schedule(t), e()), t(o);
          }
          let s = {
            schedule: (e, i = !1, o = !1) => {
              let l = o && r ? t : n;
              return i && a.add(e), l.add(e), e;
            },
            cancel: (e) => {
              n.delete(e), a.delete(e);
            },
            process: (e) => {
              if (((o = e), r)) {
                i = !0;
                return;
              }
              r = !0;
              let a = t;
              (t = n),
                (n = a),
                t.forEach(l),
                t.clear(),
                (r = !1),
                i && ((i = !1), s.process(e));
            },
          };
          return s;
        })(a)),
        e
      ),
      {}
    ),
    {
      setup: l,
      read: s,
      resolveKeyframes: u,
      preUpdate: c,
      update: d,
      preRender: f,
      render: p,
      postRender: h,
    } = o,
    m = () => {
      let a = eQ.useManualTiming,
        o = a ? i.timestamp : performance.now();
      (n = !1),
        a ||
          (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, 40), 1)),
        (i.timestamp = o),
        (i.isProcessing = !0),
        l.process(i),
        s.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        p.process(i),
        h.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(m));
    };
  return {
    schedule: eq.reduce((t, a) => {
      let l = o[a];
      return (
        (t[a] = (t, a = !1, o = !1) => (
          !n && ((n = !0), (r = !0), i.isProcessing || e(m)),
          l.schedule(t, a, o)
        )),
        t
      );
    }, {}),
    cancel: (e) => {
      for (let t = 0; t < eq.length; t++) o[eq[t]].cancel(e);
    },
    state: i,
    steps: o,
  };
}
let {
    schedule: eX,
    cancel: eK,
    state: eZ,
    steps: eJ,
  } = eG("u" > typeof requestAnimationFrame ? requestAnimationFrame : eY, !0),
  e0 = new Set(),
  e1 = !1,
  e2 = !1,
  e3 = !1;
function e4() {
  if (e2) {
    let e = Array.from(e0).filter((e) => e.needsMeasurement),
      t = new Set(e.map((e) => e.element)),
      n = new Map();
    t.forEach((e) => {
      let t,
        r =
          ((t = []),
          eW.forEach((n) => {
            let r = e.getValue(n);
            void 0 !== r &&
              (t.push([n, r.get()]), r.set(+!!n.startsWith("scale")));
          }),
          t);
      r.length && (n.set(e, r), e.render());
    }),
      e.forEach((e) => e.measureInitialState()),
      t.forEach((e) => {
        e.render();
        let t = n.get(e);
        t &&
          t.forEach(([t, n]) => {
            e.getValue(t)?.set(n);
          });
      }),
      e.forEach((e) => e.measureEndState()),
      e.forEach((e) => {
        void 0 !== e.suspendedScrollY && window.scrollTo(0, e.suspendedScrollY);
      });
  }
  (e2 = !1), (e1 = !1), e0.forEach((e) => e.complete(e3)), e0.clear();
}
function e5() {
  e0.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (e2 = !0);
  });
}
class e6 {
  constructor(e, t, n, r, i, a = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...e]),
      (this.onComplete = t),
      (this.name = n),
      (this.motionValue = r),
      (this.element = i),
      (this.isAsync = a);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (e0.add(this),
          e1 || ((e1 = !0), eX.read(e5), eX.resolveKeyframes(e4)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
    if (null === e[0]) {
      let i = r?.get(),
        a = e[e.length - 1];
      if (void 0 !== i) e[0] = i;
      else if (n && t) {
        let r = n.readValue(t, a);
        null != r && (e[0] = r);
      }
      void 0 === e[0] && (e[0] = a), r && void 0 === i && r.set(e[0]);
    }
    for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(e = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
      e0.delete(this);
  }
  cancel() {
    "scheduled" === this.state && (e0.delete(this), (this.state = "pending"));
  }
  resume() {
    "pending" === this.state && this.scheduleResolve();
  }
}
let e8 = new Set([es, eu]);
function e9(e, t) {
  let n = ep(e);
  return (
    e8.has(n) || (n = ei), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
let e7 = new Set(["auto", "none", "0"]);
class te extends e6 {
  constructor(e, t, n, r, i) {
    super(e, t, n, r, i, !0);
  }
  readKeyframes() {
    let { unresolvedKeyframes: e, element: t, name: n } = this;
    if (!t || !t.current) return;
    super.readKeyframes();
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if ("string" == typeof r && eN((r = r.trim()))) {
        let i = (function e(t, n, r = 1) {
          eE(
            `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
          );
          let [i, a] = (function (e) {
            let t = eM.exec(e);
            if (!t) return [,];
            let [, n, r, i] = t;
            return [`--${n ?? r}`, i];
          })(t);
          if (!i) return;
          let o = window.getComputedStyle(n).getPropertyValue(i);
          if (o) {
            let e = o.trim();
            return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e) ? parseFloat(e) : e;
          }
          return eN(a) ? e(a, n, r + 1) : a;
        })(r, t.current);
        void 0 !== i && (e[n] = i),
          n === e.length - 1 && (this.finalKeyframe = r);
      }
    }
    if ((this.resolveNoneKeyframes(), !eb.has(n) || 2 !== e.length)) return;
    let [r, i] = e,
      a = ek(r),
      o = ek(i);
    if (eA(r) !== eA(i) && eH[n]) {
      this.needsMeasurement = !0;
      return;
    }
    if (a !== o)
      if (e$(a) && e$(o))
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          "string" == typeof n && (e[t] = parseFloat(n));
        }
      else eH[n] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    let { unresolvedKeyframes: e, name: t } = this,
      n = [];
    for (let t = 0; t < e.length; t++)
      (null === e[t] ||
        (function (e) {
          if ("number" == typeof e) return 0 === e;
          if (null === e) return !0;
          return "none" === e || "0" === e || /^0[^.\s]+$/u.test(e);
        })(e[t])) &&
        n.push(t);
    n.length &&
      (function (e, t, n) {
        let r,
          i = 0;
        for (; i < e.length && !r; ) {
          let t = e[i];
          "string" == typeof t &&
            !e7.has(t) &&
            en(t).values.length &&
            (r = e[i]),
            i++;
        }
        if (r && n) for (let i of t) e[i] = e9(n, r);
      })(e, n, t);
  }
  measureInitialState() {
    let { element: e, unresolvedKeyframes: t, name: n } = this;
    if (!e || !e.current) return;
    "height" === n && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = eH[n](
        e.measureViewportBox(),
        window.getComputedStyle(e.current)
      )),
      (t[0] = this.measuredOrigin);
    let r = t[t.length - 1];
    void 0 !== r && e.getValue(n, r).jump(r, !1);
  }
  measureEndState() {
    let { element: e, name: t, unresolvedKeyframes: n } = this;
    if (!e || !e.current) return;
    let r = e.getValue(t);
    r && r.jump(this.measuredOrigin, !1);
    let i = n.length - 1,
      a = n[i];
    (n[i] = eH[t](e.measureViewportBox(), window.getComputedStyle(e.current))),
      null !== a && void 0 === this.finalKeyframe && (this.finalKeyframe = a),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([t, n]) => {
          e.getValue(t).set(n);
        }),
      this.resolveNoneKeyframes();
  }
}
let tt = (e) => 1e3 * e;
function tn(e, t) {
  -1 === e.indexOf(t) && e.push(t);
}
function tr(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class ti {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return tn(this.subscriptions, e), () => tr(this.subscriptions, e);
  }
  notify(e, t, n) {
    let r = this.subscriptions.length;
    if (r)
      if (1 === r) this.subscriptions[0](e, t, n);
      else
        for (let i = 0; i < r; i++) {
          let r = this.subscriptions[i];
          r && r(e, t, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function ta(e, t, n) {
  t.startsWith("--") ? e.style.setProperty(t, n) : (e.style[t] = n);
}
function to(e) {
  let t;
  return () => (void 0 === t && (t = e()), t);
}
let tl = {};
function ts(e, t) {
  let n = to(e);
  return () => tl[t] ?? n();
}
let tu = ts(() => void 0 !== window.ScrollTimeline, "scrollTimeline"),
  tc = ts(() => void 0 !== window.ViewTimeline, "viewTimeline"),
  td = (e) => null !== e;
function tf(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
  let a = e.filter(td),
    o = i < 0 || (t && "loop" !== n && t % 2 == 1) ? 0 : a.length - 1;
  return o && void 0 !== r ? r : a[o];
}
class tp {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(e, t) {
    return this.finished.then(e, t);
  }
}
let th = (e) => Array.isArray(e) && "number" == typeof e[0],
  tm = ts(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch (e) {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  tg = (e, t, n = 10) => {
    let r = "",
      i = Math.max(Math.round(t / n), 2);
    for (let t = 0; t < i; t++)
      r += Math.round(1e4 * e(t / (i - 1))) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  ty = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  tv = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ty([0, 0.65, 0.55, 1]),
    circOut: ty([0.55, 0, 1, 0.45]),
    backIn: ty([0.31, 0.01, 0.66, -0.59]),
    backOut: ty([0.33, 1.53, 0.69, 0.99]),
  };
function tb(e) {
  return "function" == typeof e && "applyToOptions" in e;
}
class tx extends tp {
  constructor(e) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !e)
    )
      return;
    let {
      element: t,
      name: n,
      keyframes: r,
      pseudoElement: i,
      allowFlatten: a = !1,
      finalKeyframe: o,
      onComplete: l,
    } = e;
    (this.isPseudoElement = !!i),
      (this.allowFlatten = a),
      (this.options = e),
      eE(e.type);
    let s = (function ({ type: e, ...t }) {
      return tb(e) && tm()
        ? e.applyToOptions(t)
        : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
    })(e);
    (this.animation = (function (
      e,
      t,
      n,
      {
        delay: r = 0,
        duration: i = 300,
        repeat: a = 0,
        repeatType: o = "loop",
        ease: l = "easeOut",
        times: s,
      } = {},
      u
    ) {
      let c = { [t]: n };
      s && (c.offset = s);
      let d = (function e(t, n) {
        if (t)
          return "function" == typeof t
            ? tm()
              ? tg(t, n)
              : "ease-out"
            : th(t)
            ? ty(t)
            : Array.isArray(t)
            ? t.map((t) => e(t, n) || tv.easeOut)
            : tv[t];
      })(l, i);
      Array.isArray(d) && (c.easing = d);
      let f = {
        delay: r,
        duration: i,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: a + 1,
        direction: "reverse" === o ? "alternate" : "normal",
      };
      return u && (f.pseudoElement = u), e.animate(c, f);
    })(t, n, r, s, i)),
      !1 === s.autoplay && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !i)) {
          let e = tf(r, this.options, o, this.speed);
          this.updateMotionValue && this.updateMotionValue(e),
            ta(t, n, e),
            this.animation.cancel();
        }
        l?.(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      "finished" === this.state && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch (e) {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    let { state: e } = this;
    "idle" !== e &&
      "finished" !== e &&
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    let e = this.options?.element;
    !this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    return (
      Number(this.animation.effect?.getComputedTiming?.().duration || 0) / 1e3
    );
  }
  get iterationDuration() {
    let { delay: e = 0 } = this.options || {};
    return this.duration + e / 1e3;
  }
  get time() {
    return (Number(this.animation.currentTime) || 0) / 1e3;
  }
  set time(e) {
    let t = null !== this.finishedTime;
    (this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = tt(e)),
      t && this.animation.pause();
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e);
  }
  get state() {
    return null !== this.finishedTime ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(e) {
    this.manualStartTime = this.animation.startTime = e;
  }
  attachTimeline({ timeline: e, rangeStart: t, rangeEnd: n, observe: r }) {
    return (this.allowFlatten &&
      this.animation.effect?.updateTiming({ easing: "linear" }),
    (this.animation.onfinish = null),
    e && tu())
      ? ((this.animation.timeline = e),
        t && (this.animation.rangeStart = t),
        n && (this.animation.rangeEnd = n),
        eY)
      : r(this);
  }
}
let tw = new Set(["opacity", "clipPath", "filter", "transform"]),
  { schedule: tk, cancel: tS } = eG(queueMicrotask, !1);
function tE() {
  e = void 0;
}
let tC = {
    now: () => (
      void 0 === e &&
        tC.set(
          eZ.isProcessing || eQ.useManualTiming
            ? eZ.timestamp
            : performance.now()
        ),
      e
    ),
    set: (t) => {
      (e = t), queueMicrotask(tE);
    },
  },
  tP = (e, t) => (t ? (1e3 / t) * e : 0),
  tT = { current: void 0 };
class tN {
  constructor(e, t = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (e) => {
        let t = tC.now();
        if (
          (this.updatedAt !== t && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(e),
          this.current !== this.prev &&
            (this.events.change?.notify(this.current), this.dependents))
        )
          for (let e of this.dependents) e.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(e),
      (this.owner = t.owner);
  }
  setCurrent(e) {
    (this.current = e),
      (this.updatedAt = tC.now()),
      null === this.canTrackVelocity &&
        void 0 !== e &&
        (this.canTrackVelocity = !isNaN(parseFloat(this.current)));
  }
  setPrevFrameValue(e = this.current) {
    (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(e) {
    return this.on("change", e);
  }
  on(e, t) {
    this.events[e] || (this.events[e] = new ti());
    let n = this.events[e].add(t);
    return "change" === e
      ? () => {
          n(),
            eX.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : n;
  }
  clearListeners() {
    for (let e in this.events) this.events[e].clear();
  }
  attach(e, t) {
    (this.passiveEffect = e), (this.stopPassiveEffect = t);
  }
  set(e) {
    this.passiveEffect
      ? this.passiveEffect(e, this.updateAndNotify)
      : this.updateAndNotify(e);
  }
  setWithVelocity(e, t, n) {
    this.set(t),
      (this.prev = void 0),
      (this.prevFrameValue = e),
      (this.prevUpdatedAt = this.updatedAt - n);
  }
  jump(e, t = !0) {
    this.updateAndNotify(e),
      (this.prev = e),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      t && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(e) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(e);
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  get() {
    return tT.current && tT.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    let e = tC.now();
    if (
      !this.canTrackVelocity ||
      void 0 === this.prevFrameValue ||
      e - this.updatedAt > 30
    )
      return 0;
    let t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
    return tP(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
  }
  start(e) {
    return (
      this.stop(),
      new Promise((t) => {
        (this.hasAnimated = !0),
          (this.animation = e(t)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function tj(e, t) {
  return new tN(e, t);
}
let tA = [...ew, K, ei],
  tM = new WeakMap();
function tR(e) {
  return null !== e && "object" == typeof e && "function" == typeof e.start;
}
function tL(e) {
  return "string" == typeof e || Array.isArray(e);
}
let tz = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  tD = ["initial", ...tz];
function t_(e) {
  return tR(e.animate) || tD.some((t) => tL(e[t]));
}
function tO(e) {
  return !!(t_(e) || e.variants);
}
let tV = { current: null },
  tI = { current: !1 },
  tF = "u" > typeof window;
function tB(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((e, n) => {
      (t[0][n] = e.get()), (t[1][n] = e.getVelocity());
    }),
    t
  );
}
function t$(e, t, n, r) {
  if ("function" == typeof t) {
    let [i, a] = tB(r);
    t = t(void 0 !== n ? n : e.custom, i, a);
  }
  if (
    ("string" == typeof t && (t = e.variants && e.variants[t]),
    "function" == typeof t)
  ) {
    let [i, a] = tB(r);
    t = t(void 0 !== n ? n : e.custom, i, a);
  }
  return t;
}
let tU = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  tW = {};
class tH {
  scrapeMotionValuesFromProps(e, t, n) {
    return {};
  }
  constructor(
    {
      parent: e,
      props: t,
      presenceContext: n,
      reducedMotionConfig: r,
      skipAnimations: i,
      blockInitialAnimation: a,
      visualState: o,
    },
    l = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = e6),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        let e = tC.now();
        this.renderScheduledAt < e &&
          ((this.renderScheduledAt = e), eX.render(this.render, !1, !0));
      });
    let { latestValues: s, renderState: u } = o;
    (this.latestValues = s),
      (this.baseTarget = { ...s }),
      (this.initialValues = t.initial ? { ...s } : {}),
      (this.renderState = u),
      (this.parent = e),
      (this.props = t),
      (this.presenceContext = n),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = r),
      (this.skipAnimationsConfig = i),
      (this.options = l),
      (this.blockInitialAnimation = !!a),
      (this.isControllingVariants = t_(t)),
      (this.isVariantNode = tO(t)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current));
    let { willChange: c, ...d } = this.scrapeMotionValuesFromProps(t, {}, this);
    for (let e in d) {
      let t = d[e];
      void 0 !== s[e] && ev(t) && t.set(s[e]);
    }
  }
  mount(e) {
    if (this.hasBeenMounted)
      for (let e in this.initialValues)
        this.values.get(e)?.jump(this.initialValues[e]),
          (this.latestValues[e] = this.initialValues[e]);
    (this.current = e),
      tM.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
      "never" === this.reducedMotionConfig
        ? (this.shouldReduceMotion = !1)
        : "always" === this.reducedMotionConfig
        ? (this.shouldReduceMotion = !0)
        : (tI.current ||
            (function () {
              if (((tI.current = !0), tF))
                if (window.matchMedia) {
                  let e = window.matchMedia("(prefers-reduced-motion)"),
                    t = () => (tV.current = e.matches);
                  e.addEventListener("change", t), t();
                } else tV.current = !1;
            })(),
          (this.shouldReduceMotion = tV.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0);
  }
  unmount() {
    for (let e in (this.projection && this.projection.unmount(),
    eK(this.notifyUpdate),
    eK(this.render),
    this.valueSubscriptions.forEach((e) => e()),
    this.valueSubscriptions.clear(),
    this.removeFromVariantTree && this.removeFromVariantTree(),
    this.parent?.removeChild(this),
    this.events))
      this.events[e].clear();
    for (let e in this.features) {
      let t = this.features[e];
      t && (t.unmount(), (t.isMounted = !1));
    }
    this.current = null;
  }
  addChild(e) {
    this.children.add(e),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(e);
  }
  removeChild(e) {
    this.children.delete(e),
      this.enteringChildren && this.enteringChildren.delete(e);
  }
  bindToMotionValue(e, t) {
    let n;
    if (
      (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
      t.accelerate && tw.has(e) && this.current instanceof HTMLElement)
    ) {
      let {
          factory: n,
          keyframes: r,
          times: i,
          ease: a,
          duration: o,
        } = t.accelerate,
        l = new tx({
          element: this.current,
          name: e,
          keyframes: r,
          times: i,
          ease: a,
          duration: tt(o),
        }),
        s = n(l);
      this.valueSubscriptions.set(e, () => {
        s(), l.cancel();
      });
      return;
    }
    let r = A.has(e);
    r && this.onBindTransform && this.onBindTransform();
    let i = t.on("change", (t) => {
      (this.latestValues[e] = t),
        this.props.onUpdate && eX.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender();
    });
    "u" > typeof window &&
      window.MotionCheckAppearSync &&
      (n = window.MotionCheckAppearSync(this, e, t)),
      this.valueSubscriptions.set(e, () => {
        i(), n && n();
      });
  }
  sortNodePosition(e) {
    return this.current && this.sortInstanceNodePosition && this.type === e.type
      ? this.sortInstanceNodePosition(this.current, e.current)
      : 0;
  }
  updateFeatures() {
    let e = "animation";
    for (e in tW) {
      let t = tW[e];
      if (!t) continue;
      let { isEnabled: n, Feature: r } = t;
      if (
        (!this.features[e] &&
          r &&
          n(this.props) &&
          (this.features[e] = new r(this)),
        this.features[e])
      ) {
        let t = this.features[e];
        t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ey();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, t) {
    this.latestValues[e] = t;
  }
  update(e, t) {
    (e.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = t);
    for (let t = 0; t < tU.length; t++) {
      let n = tU[t];
      this.propEventSubscriptions[n] &&
        (this.propEventSubscriptions[n](),
        delete this.propEventSubscriptions[n]);
      let r = e["on" + n];
      r && (this.propEventSubscriptions[n] = this.on(n, r));
    }
    (this.prevMotionValues = (function (e, t, n) {
      for (let r in t) {
        let i = t[r],
          a = n[r];
        if (ev(i)) e.addValue(r, i);
        else if (ev(a)) e.addValue(r, tj(i, { owner: e }));
        else if (a !== i)
          if (e.hasValue(r)) {
            let t = e.getValue(r);
            !0 === t.liveStyle ? t.jump(i) : t.hasAnimated || t.set(i);
          } else {
            let t = e.getStaticValue(r);
            e.addValue(r, tj(void 0 !== t ? t : i, { owner: e }));
          }
      }
      for (let r in n) void 0 === t[r] && e.removeValue(r);
      return t;
    })(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(e) {
    let t = this.getClosestVariantNode();
    if (t)
      return (
        t.variantChildren && t.variantChildren.add(e),
        () => t.variantChildren.delete(e)
      );
  }
  addValue(e, t) {
    let n = this.values.get(e);
    t !== n &&
      (n && this.removeValue(e),
      this.bindToMotionValue(e, t),
      this.values.set(e, t),
      (this.latestValues[e] = t.get()));
  }
  removeValue(e) {
    this.values.delete(e);
    let t = this.valueSubscriptions.get(e);
    t && (t(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState);
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, t) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let n = this.values.get(e);
    return (
      void 0 === n &&
        void 0 !== t &&
        ((n = tj(null === t ? void 0 : t, { owner: this })),
        this.addValue(e, n)),
      n
    );
  }
  readValue(e, t) {
    let n =
      void 0 === this.latestValues[e] && this.current
        ? this.getBaseTargetFromProps(this.props, e) ??
          this.readValueFromInstance(this.current, e, this.options)
        : this.latestValues[e];
    if (null != n) {
      let r, i;
      if (
        "string" == typeof n &&
        ((r = n),
        /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(r) ||
          ((i = n), /^0[^.\s]+$/u.test(i)))
      )
        n = parseFloat(n);
      else {
        let r;
        (r = n), !tA.find(ex(r)) && ei.test(t) && (n = e9(e, t));
      }
      this.setBaseTarget(e, ev(n) ? n.get() : n);
    }
    return ev(n) ? n.get() : n;
  }
  setBaseTarget(e, t) {
    this.baseTarget[e] = t;
  }
  getBaseTarget(e) {
    let t,
      { initial: n } = this.props;
    if ("string" == typeof n || "object" == typeof n) {
      let r = t$(this.props, n, this.presenceContext?.custom);
      r && (t = r[e]);
    }
    if (n && void 0 !== t) return t;
    let r = this.getBaseTargetFromProps(this.props, e);
    return void 0 === r || ev(r)
      ? void 0 !== this.initialValues[e] && void 0 === t
        ? void 0
        : this.baseTarget[e]
      : r;
  }
  on(e, t) {
    return this.events[e] || (this.events[e] = new ti()), this.events[e].add(t);
  }
  notify(e, ...t) {
    this.events[e] && this.events[e].notify(...t);
  }
  scheduleRenderMicrotask() {
    tk.render(this.render);
  }
}
class tY extends tH {
  constructor() {
    super(...arguments), (this.KeyframeResolver = te);
  }
  sortInstanceNodePosition(e, t) {
    return 2 & e.compareDocumentPosition(t) ? 1 : -1;
  }
  getBaseTargetFromProps(e, t) {
    let n = e.style;
    return n ? n[t] : void 0;
  }
  removeValueFromRenderState(e, { vars: t, style: n }) {
    delete t[e], delete n[e];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    let { children: e } = this.props;
    ev(e) &&
      (this.childSubscription = e.on("change", (e) => {
        this.current && (this.current.textContent = `${e}`);
      }));
  }
}
function tQ(e) {
  return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
let tq = (e, t) => (t && "number" == typeof e ? t.transform(e) : e),
  tG = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  tX = j.length;
function tK(e, t, n) {
  let { style: r, vars: i, transformOrigin: a } = e,
    o = !1,
    l = !1;
  for (let e in t) {
    let n = t[e];
    if (A.has(e)) {
      o = !0;
      continue;
    }
    if (eP(e)) {
      i[e] = n;
      continue;
    }
    {
      let t = tq(n, ed[e]);
      e.startsWith("origin") ? ((l = !0), (a[e] = t)) : (r[e] = t);
    }
  }
  if (
    (!t.transform &&
      (o || n
        ? (r.transform = (function (e, t, n) {
            let r = "",
              i = !0;
            for (let a = 0; a < tX; a++) {
              let o = j[a],
                l = e[o];
              if (void 0 === l) continue;
              let s = !0;
              if ("number" == typeof l) s = l === +!!o.startsWith("scale");
              else {
                let e = parseFloat(l);
                s = o.startsWith("scale") ? 1 === e : 0 === e;
              }
              if (!s || n) {
                let e = tq(l, ed[o]);
                if (!s) {
                  i = !1;
                  let t = tG[o] || o;
                  r += `${t}(${e}) `;
                }
                n && (t[o] = e);
              }
            }
            let a = e.pathRotation;
            return (
              a && ((i = !1), (r += `rotate(${tq(a, ed.pathRotation)}) `)),
              (r = r.trim()),
              n ? (r = n(t, i ? "" : r)) : i && (r = "none"),
              r
            );
          })(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    l)
  ) {
    let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
    r.transformOrigin = `${e} ${t} ${n}`;
  }
}
let tZ = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  tJ = { offset: "strokeDashoffset", array: "strokeDasharray" },
  t0 = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function t1(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: a = 1,
    pathOffset: o = 0,
    ...l
  },
  s,
  u,
  c
) {
  if ((tK(e, l, u), s)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  let { attrs: d, style: f } = e;
  for (let e of (d.transform &&
    ((f.transform = d.transform), delete d.transform),
  (f.transform || d.transformOrigin) &&
    ((f.transformOrigin = d.transformOrigin ?? "50% 50%"),
    delete d.transformOrigin),
  f.transform &&
    ((f.transformBox = c?.transformBox ?? "fill-box"), delete d.transformBox),
  t0))
    void 0 !== d[e] && ((f[e] = d[e]), delete d[e]);
  void 0 !== t && (d.x = t),
    void 0 !== n && (d.y = n),
    void 0 !== r && (d.scale = r),
    void 0 !== i &&
      (function (e, t, n = 1, r = 0, i = !0) {
        e.pathLength = 1;
        let a = i ? tZ : tJ;
        (e[a.offset] = `${-r}`), (e[a.array] = `${t} ${n}`);
      })(d, i, a, o, !1);
}
let t2 = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  t3 = (e) => "string" == typeof e && "svg" === e.toLowerCase();
function t4(e, { style: t, vars: n }, r, i) {
  let a,
    o = e.style;
  for (a in t) o[a] = t[a];
  for (a in (i?.applyProjectionStyles(o, r), n)) o.setProperty(a, n[a]);
}
function t5(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
let t6 = {
    correct: (e, t) => {
      if (!t.target) return e;
      if ("string" == typeof e)
        if (!Y.test(e)) return e;
        else e = parseFloat(e);
      let n = t5(e, t.target.x),
        r = t5(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  t8 = (e, t, n) => e + (t - e) * n,
  t9 = {
    borderRadius: {
      ...t6,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: t6,
    borderTopRightRadius: t6,
    borderBottomLeftRadius: t6,
    borderBottomRightRadius: t6,
    boxShadow: {
      correct: (e, { treeScale: t, projectionDelta: n }) => {
        let r = ei.parse(e);
        if (r.length > 5) return e;
        let i = ei.createTransformer(e),
          a = +("number" != typeof r[0]),
          o = n.x.scale * t.x,
          l = n.y.scale * t.y;
        (r[0 + a] /= o), (r[1 + a] /= l);
        let s = t8(o, l, 0.5);
        return (
          "number" == typeof r[2 + a] && (r[2 + a] /= s),
          "number" == typeof r[3 + a] && (r[3 + a] /= s),
          i(r)
        );
      },
    },
  };
function t7(e, { layout: t, layoutId: n }) {
  return (
    A.has(e) ||
    e.startsWith("origin") ||
    ((t || void 0 !== n) && (!!t9[e] || "opacity" === e))
  );
}
function ne(e, t, n) {
  let r = e.style,
    i = t?.style,
    a = {};
  if (!r) return a;
  for (let t in r)
    (ev(r[t]) ||
      (i && ev(i[t])) ||
      t7(t, e) ||
      n?.getValue(t)?.liveStyle !== void 0) &&
      (a[t] = r[t]);
  return a;
}
function nt(e, t, n) {
  let r = ne(e, t, n);
  for (let n in e)
    (ev(e[n]) || ev(t[n])) &&
      (r[
        -1 !== j.indexOf(n)
          ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
          : n
      ] = e[n]);
  return r;
}
class nn extends tY {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = ey);
  }
  getBaseTargetFromProps(e, t) {
    return e[t];
  }
  readValueFromInstance(e, t) {
    if (A.has(t)) {
      let e = ep(t);
      return (e && e.default) || 0;
    }
    return (t = t2.has(t) ? t : tQ(t)), e.getAttribute(t);
  }
  scrapeMotionValuesFromProps(e, t, n) {
    return nt(e, t, n);
  }
  build(e, t, n) {
    t1(e, t, this.isSVGTag, n.transformTemplate, n.style);
  }
  renderInstance(e, t, n, r) {
    for (let n in (t4(e, t, void 0, r), t.attrs))
      e.setAttribute(t2.has(n) ? n : tQ(n), t.attrs[n]);
  }
  mount(e) {
    (this.isSVGTag = t3(e.tagName)), super.mount(e);
  }
}
function nr({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function ni(e) {
  return void 0 === e || 1 === e;
}
function na({ scale: e, scaleX: t, scaleY: n }) {
  return !ni(e) || !ni(t) || !ni(n);
}
function no(e) {
  return (
    na(e) ||
    nl(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function nl(e) {
  var t, n;
  return ((t = e.x) && "0%" !== t) || ((n = e.y) && "0%" !== n);
}
function ns(e, t, n, r, i) {
  return void 0 !== i && (e = r + i * (e - r)), r + n * (e - r) + t;
}
function nu(e, t = 0, n = 1, r, i) {
  (e.min = ns(e.min, t, n, r, i)), (e.max = ns(e.max, t, n, r, i));
}
function nc(e, { x: t, y: n }) {
  nu(e.x, t.translate, t.scale, t.originPoint),
    nu(e.y, n.translate, n.scale, n.originPoint);
}
function nd(e, t) {
  (e.min += t), (e.max += t);
}
function nf(e, t, n, r, i = 0.5) {
  let a = t8(e.min, e.max, i);
  nu(e, t, n, a, r);
}
function np(e, t) {
  return "string" == typeof e ? (parseFloat(e) / 100) * (t.max - t.min) : e;
}
function nh(e, t, n) {
  let r = n ?? e;
  nf(e.x, np(t.x, r.x), t.scaleX, t.scale, t.originX),
    nf(e.y, np(t.y, r.y), t.scaleY, t.scale, t.originY);
}
function nm(e, t) {
  return nr(
    (function (e, t) {
      if (!t) return e;
      let n = t({ x: e.left, y: e.top }),
        r = t({ x: e.right, y: e.bottom });
      return { top: n.y, left: n.x, bottom: r.y, right: r.x };
    })(e.getBoundingClientRect(), t)
  );
}
class ng extends tY {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = t4);
  }
  readValueFromInstance(e, t) {
    if (A.has(t))
      return this.projection?.isProjecting
        ? eI(t)
        : ((e, t) => {
            let { transform: n = "none" } = getComputedStyle(e);
            return eF(n, t);
          })(e, t);
    {
      let n = window.getComputedStyle(e),
        r = (eP(t) ? n.getPropertyValue(t) : n[t]) || 0;
      return "string" == typeof r ? r.trim() : r;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: t }) {
    return nm(e, t);
  }
  build(e, t, n) {
    tK(e, t, n.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, t, n) {
    return ne(e, t, n);
  }
}
var d = s("2YQ6R");
let ny = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function nv(e) {
  if ("string" != typeof e || e.includes("-"));
  else if (ny.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
  return !1;
}
var d = (s("2YQ6R"), s("2YQ6R"));
let nb = (0, d.createContext)({ strict: !1 });
var d = s("2YQ6R");
let nx = (0, d.createContext)({});
function nw(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
var d = (s("2YQ6R"), s("2YQ6R"), s("2YQ6R"));
let nk = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function nS(e, t, n) {
  for (let r in t) ev(t[r]) || t7(r, n) || (e[r] = t[r]);
}
var d = s("2YQ6R");
let nE = () => ({ ...nk(), attrs: {} }),
  nC = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "propagate",
    "ignoreStrict",
    "viewport",
  ]);
function nP(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && "draggable" !== e) ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    nC.has(e)
  );
}
let nT = (e) => !nP(e);
try {
  (i = require("@emotion/is-prop-valid").default),
    "function" == typeof i &&
      (nT = (e) => (e.startsWith("on") ? !nP(e) : i(e)));
} catch {}
function nN(e) {
  return ev(e) ? e.get() : e;
}
var d = s("2YQ6R");
let nj = (e) => (t, n) => {
    let r = (0, d.useContext)(nx),
      i = (0, d.useContext)(g),
      a = () =>
        (function (
          { scrapeMotionValuesFromProps: e, createRenderState: t },
          n,
          r,
          i
        ) {
          return {
            latestValues: (function (e, t, n, r) {
              let i = {},
                a = r(e, {});
              for (let e in a) i[e] = nN(a[e]);
              let { initial: o, animate: l } = e,
                s = t_(e),
                u = tO(e);
              t &&
                u &&
                !s &&
                !1 !== e.inherit &&
                (void 0 === o && (o = t.initial),
                void 0 === l && (l = t.animate));
              let c = !!n && !1 === n.initial,
                d = (c = c || !1 === o) ? l : o;
              if (d && "boolean" != typeof d && !tR(d)) {
                let t = Array.isArray(d) ? d : [d];
                for (let n = 0; n < t.length; n++) {
                  let r = t$(e, t[n]);
                  if (r) {
                    let { transitionEnd: e, transition: t, ...n } = r;
                    for (let e in n) {
                      let t = n[e];
                      if (Array.isArray(t)) {
                        let e = c ? t.length - 1 : 0;
                        t = t[e];
                      }
                      null !== t && (i[e] = t);
                    }
                    for (let t in e) i[t] = e[t];
                  }
                }
              }
              return i;
            })(n, r, i, e),
            renderState: t(),
          };
        })(e, t, r, i);
    return n ? a() : h(a);
  },
  nA = nj({ scrapeMotionValuesFromProps: ne, createRenderState: nk }),
  nM = nj({ scrapeMotionValuesFromProps: nt, createRenderState: nE }),
  nR = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  nL = !1;
function nz() {
  return (
    !(function () {
      if (nL) return;
      let e = {};
      for (let t in nR) e[t] = { isEnabled: (e) => nR[t].some((t) => !!e[t]) };
      (tW = e), (nL = !0);
    })(),
    tW
  );
}
let nD = Symbol.for("motionComponentSymbol");
var d = s("2YQ6R");
let n_ = "data-" + tQ("framerAppearId");
var d = (s("2YQ6R"), s("2YQ6R"));
let nO = (0, d.createContext)({});
function nV(e) {
  return (
    e &&
    "object" == typeof e &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function nI(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
  r &&
    (function (e) {
      let t = nz();
      for (let n in e) t[n] = { ...t[n], ...e[n] };
      tW = t;
    })(r);
  let a = n ? "svg" === n : nv(e),
    o = a ? nM : nA;
  function l(n, r) {
    var l;
    let s,
      u,
      f,
      h = {
        ...(0, d.useContext)(b),
        ...n,
        layoutId: (function ({ layoutId: e }) {
          let t = (0, d.useContext)(p).id;
          return t && void 0 !== e ? t + "-" + e : e;
        })(n),
      },
      { isStatic: y } = h,
      v = (function (e) {
        let { initial: t, animate: n } = (function (e, t) {
          if (t_(e)) {
            let { initial: t, animate: n } = e;
            return {
              initial: !1 === t || tL(t) ? t : void 0,
              animate: tL(n) ? n : void 0,
            };
          }
          return !1 !== e.inherit ? t : {};
        })(e, (0, d.useContext)(nx));
        return (0, d.useMemo)(
          () => ({ initial: t, animate: n }),
          [nw(t), nw(n)]
        );
      })(n),
      x = o(n, y);
    if (!y && "u" > typeof window) {
      (0, d.useContext)(nb).strict;
      let t = (function (e) {
        let { drag: t, layout: n } = nz();
        if (!t && !n) return {};
        let r = { ...t, ...n };
        return {
          MeasureLayout:
            t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
          ProjectionNode: r.ProjectionNode,
        };
      })(h);
      (s = t.MeasureLayout),
        (v.visualElement = (function (e, t, n, r, i, a) {
          let { visualElement: o } = (0, d.useContext)(nx),
            l = (0, d.useContext)(nb),
            s = (0, d.useContext)(g),
            u = (0, d.useContext)(b),
            c = u.reducedMotion,
            f = u.skipAnimations,
            p = (0, d.useRef)(null),
            h = (0, d.useRef)(!1);
          (r = r || l.renderer),
            !p.current &&
              r &&
              ((p.current = r(e, {
                visualState: t,
                parent: o,
                props: n,
                presenceContext: s,
                blockInitialAnimation: !!s && !1 === s.initial,
                reducedMotionConfig: c,
                skipAnimations: f,
                isSVG: a,
              })),
              h.current &&
                p.current &&
                (p.current.manuallyAnimateOnMount = !0));
          let y = p.current,
            v = (0, d.useContext)(nO);
          y &&
            !y.projection &&
            i &&
            ("html" === y.type || "svg" === y.type) &&
            (function (e, t, n, r) {
              let {
                layoutId: i,
                layout: a,
                drag: o,
                dragConstraints: l,
                layoutScroll: s,
                layoutRoot: u,
                layoutAnchor: c,
                layoutCrossfade: d,
              } = t;
              (e.projection = new n(
                e.latestValues,
                t["data-framer-portal-id"]
                  ? void 0
                  : (function e(t) {
                      if (t)
                        return !1 !== t.options.allowProjection
                          ? t.projection
                          : e(t.parent);
                    })(e.parent)
              )),
                e.projection.setOptions({
                  layoutId: i,
                  layout: a,
                  alwaysMeasureLayout: !!o || (l && nV(l)),
                  visualElement: e,
                  animationType: "string" == typeof a ? a : "both",
                  initialPromotionConfig: r,
                  crossfade: d,
                  layoutScroll: s,
                  layoutRoot: u,
                  layoutAnchor: c,
                });
            })(p.current, n, i, v);
          let x = (0, d.useRef)(!1);
          (0, d.useInsertionEffect)(() => {
            y && x.current && y.update(n, s);
          });
          let w = n[n_],
            k = (0, d.useRef)(
              !!w &&
                "u" > typeof window &&
                !window.MotionHandoffIsComplete?.(w) &&
                window.MotionHasOptimisedAnimation?.(w)
            );
          return (
            m(() => {
              (h.current = !0),
                y &&
                  ((x.current = !0),
                  (window.MotionIsMounted = !0),
                  y.updateFeatures(),
                  y.scheduleRenderMicrotask(),
                  k.current &&
                    y.animationState &&
                    y.animationState.animateChanges());
            }),
            (0, d.useEffect)(() => {
              y &&
                (!k.current &&
                  y.animationState &&
                  y.animationState.animateChanges(),
                k.current &&
                  (queueMicrotask(() => {
                    window.MotionHandoffMarkAsComplete?.(w);
                  }),
                  (k.current = !1)),
                (y.enteringChildren = void 0));
            }),
            y
          );
        })(e, x, h, i, t.ProjectionNode, a));
    }
    return (0, c.jsxs)(nx.Provider, {
      value: v,
      children: [
        s && v.visualElement
          ? (0, c.jsx)(s, { visualElement: v.visualElement, ...h })
          : null,
        (function (e, t, n, { latestValues: r }, i, a = !1, o) {
          let l = (
              o ?? nv(e)
                ? function (e, t, n, r) {
                    let i = (0, d.useMemo)(() => {
                      let n = nE();
                      return (
                        t1(n, t, t3(r), e.transformTemplate, e.style),
                        { ...n.attrs, style: { ...n.style } }
                      );
                    }, [t]);
                    if (e.style) {
                      let t = {};
                      nS(t, e.style, e), (i.style = { ...t, ...i.style });
                    }
                    return i;
                  }
                : function (e, t) {
                    let n,
                      r,
                      i = {},
                      a =
                        ((n = e.style || {}),
                        nS((r = {}), n, e),
                        Object.assign(
                          r,
                          (function ({ transformTemplate: e }, t) {
                            return (0, d.useMemo)(() => {
                              let n = nk();
                              return (
                                tK(n, t, e), Object.assign({}, n.vars, n.style)
                              );
                            }, [t]);
                          })(e, t)
                        ),
                        r);
                    return (
                      e.drag &&
                        !1 !== e.dragListener &&
                        ((i.draggable = !1),
                        (a.userSelect =
                          a.WebkitUserSelect =
                          a.WebkitTouchCallout =
                            "none"),
                        (a.touchAction =
                          !0 === e.drag
                            ? "none"
                            : `pan-${"x" === e.drag ? "y" : "x"}`)),
                      void 0 === e.tabIndex &&
                        (e.onTap || e.onTapStart || e.whileTap) &&
                        (i.tabIndex = 0),
                      (i.style = a),
                      i
                    );
                  }
            )(t, r, i, e),
            s = (function (e, t, n) {
              let r = {};
              for (let i in e)
                ("values" !== i || "object" != typeof e.values) &&
                  !ev(e[i]) &&
                  (nT(i) ||
                    (!0 === n && nP(i)) ||
                    (!t && !nP(i)) ||
                    (e.draggable && i.startsWith("onDrag"))) &&
                  (r[i] = e[i]);
              return r;
            })(t, "string" == typeof e, a),
            u = e !== d.Fragment ? { ...s, ...l, ref: n } : {},
            { children: c } = t,
            f = (0, d.useMemo)(() => (ev(c) ? c.get() : c), [c]);
          return (0, d.createElement)(e, { ...u, children: f });
        })(
          e,
          n,
          ((l = v.visualElement),
          (u = (0, d.useRef)(r)),
          (0, d.useInsertionEffect)(() => {
            u.current = r;
          }),
          (f = (0, d.useRef)(null)),
          (0, d.useCallback)(
            (e) => {
              e && x.onMount?.(e), l && (e ? l.mount(e) : l.unmount());
              let t = u.current;
              if ("function" == typeof t)
                if (e) {
                  let n = t(e);
                  "function" == typeof n && (f.current = n);
                } else f.current ? (f.current(), (f.current = null)) : t(e);
              else t && (t.current = e);
            },
            [l]
          )),
          x,
          y,
          t,
          a
        ),
      ],
    });
  }
  l.displayName = `motion.${
    "string" == typeof e ? e : `create(${e.displayName ?? e.name ?? ""})`
  }`;
  let s = (0, d.forwardRef)(l);
  return (s[nD] = e), s;
}
function nF(e, t, n) {
  let r = e.getProps();
  return t$(r, t, void 0 !== n ? n : r.custom, e);
}
function nB(e, t) {
  if (e?.inherit && t) {
    let { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function n$(e, t) {
  let n = e?.[t] ?? e?.default ?? e;
  return n !== e ? nB(n, e) : n;
}
let nU = (e) => Array.isArray(e);
function nW(e, t) {
  let n = e.getValue("willChange");
  if (ev(n) && n.add) return n.add(t);
  if (!n && eQ.WillChange) {
    let n = new eQ.WillChange("auto");
    e.addValue("willChange", n), n.add(t);
  }
}
let nH = (...e) => e.reduce((e, t) => (n) => t(e(n)));
function nY(e, t, n) {
  return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
    ? e + (t - e) * 6 * n
    : n < 0.5
    ? t
    : n < 2 / 3
    ? e + (t - e) * (2 / 3 - n) * 6
    : e;
}
function nQ(e, t) {
  return (n) => (n > 0 ? t : e);
}
let nq = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  nG = [$, B, X];
function nX(e) {
  let t = nG.find((t) => t.test(e));
  if (
    (eS(
      `'${e}' is not an animatable color. Use the equivalent color code instead.`
    ),
    !t)
  )
    return !1;
  let n = t.parse(e);
  return (
    t === X &&
      (n = (function ({ hue: e, saturation: t, lightness: n, alpha: r }) {
        (e /= 360), (n /= 100);
        let i = 0,
          a = 0,
          o = 0;
        if ((t /= 100)) {
          let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
            l = 2 * n - r;
          (i = nY(l, r, e + 1 / 3)),
            (a = nY(l, r, e)),
            (o = nY(l, r, e - 1 / 3));
        } else i = a = o = n;
        return {
          red: Math.round(255 * i),
          green: Math.round(255 * a),
          blue: Math.round(255 * o),
          alpha: r,
        };
      })(n)),
    n
  );
}
let nK = (e, t) => {
    let n = nX(e),
      r = nX(t);
    if (!n || !r) return nQ(e, t);
    let i = { ...n };
    return (e) => (
      (i.red = nq(n.red, r.red, e)),
      (i.green = nq(n.green, r.green, e)),
      (i.blue = nq(n.blue, r.blue, e)),
      (i.alpha = t8(n.alpha, r.alpha, e)),
      B.transform(i)
    );
  },
  nZ = new Set(["none", "hidden"]);
function nJ(e, t) {
  return (n) => t8(e, t, n);
}
function n0(e) {
  return "number" == typeof e
    ? nJ
    : "string" == typeof e
    ? eN(e)
      ? nQ
      : K.test(e)
      ? nK
      : n3
    : Array.isArray(e)
    ? n1
    : "object" == typeof e
    ? K.test(e)
      ? nK
      : n2
    : nQ;
}
function n1(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((e, n) => n0(e)(e, t[n]));
  return (e) => {
    for (let t = 0; t < r; t++) n[t] = i[t](e);
    return n;
  };
}
function n2(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n)
    void 0 !== e[i] && void 0 !== t[i] && (r[i] = n0(e[i])(e[i], t[i]));
  return (e) => {
    for (let t in r) n[t] = r[t](e);
    return n;
  };
}
let n3 = (e, t) => {
  let n = ei.createTransformer(t),
    r = en(e),
    i = en(t);
  if (
    !(
      r.indexes.var.length === i.indexes.var.length &&
      r.indexes.color.length === i.indexes.color.length &&
      r.indexes.number.length >= i.indexes.number.length
    )
  )
    return (
      eS(
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
      ),
      nQ(e, t)
    );
  if ((nZ.has(e) && !i.values.length) || (nZ.has(t) && !r.values.length))
    return nZ.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
  return nH(
    n1(
      (function (e, t) {
        let n = [],
          r = { color: 0, var: 0, number: 0 };
        for (let i = 0; i < t.values.length; i++) {
          let a = t.types[i],
            o = e.indexes[a][r[a]],
            l = e.values[o] ?? 0;
          (n[i] = l), r[a]++;
        }
        return n;
      })(r, i),
      i.values
    ),
    n
  );
};
function n4(e, t, n) {
  return "number" == typeof e && "number" == typeof t && "number" == typeof n
    ? t8(e, t, n)
    : n0(e)(e, t);
}
let n5 = (e) => {
  let t = ({ timestamp: t }) => e(t);
  return {
    start: (e = !0) => eX.update(t, e),
    stop: () => eK(t),
    now: () => (eZ.isProcessing ? eZ.timestamp : tC.now()),
  };
};
function n6(e) {
  let t = 0,
    n = e.next(t);
  for (; !n.done && t < 2e4; ) (t += 50), (n = e.next(t));
  return t >= 2e4 ? 1 / 0 : t;
}
let n8 = 0.01,
  n9 = 2,
  n7 = 0.005,
  re = 0.5;
function rt(e, t) {
  return e * Math.sqrt(1 - t * t);
}
let rn = ["duration", "bounce"],
  rr = ["stiffness", "damping", "mass"];
function ri(e, t) {
  return t.some((t) => void 0 !== e[t]);
}
function ra(e = 0.3, t = 0.3) {
  let n,
    r,
    i,
    a,
    o,
    l,
    s =
      "object" != typeof e
        ? { visualDuration: e, keyframes: [0, 1], bounce: t }
        : e,
    { restSpeed: u, restDelta: c } = s,
    d = s.keyframes[0],
    f = s.keyframes[s.keyframes.length - 1],
    p = { done: !1, value: d },
    {
      stiffness: h,
      damping: m,
      mass: g,
      duration: y,
      velocity: v,
      isResolvedFromDuration: b,
    } = (function (e) {
      let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e,
      };
      if (!ri(e, rr) && ri(e, rn))
        if (((t.velocity = 0), e.visualDuration)) {
          let n = (2 * Math.PI) / (1.2 * e.visualDuration),
            r = n * n,
            i = 2 * M(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(r);
          t = { ...t, mass: 1, stiffness: r, damping: i };
        } else {
          let n = (function ({
            duration: e = 800,
            bounce: t = 0.3,
            velocity: n = 0,
            mass: r = 1,
          }) {
            let i, a;
            eS(tt(10));
            let o = 1 - t;
            (o = M(0.05, 1, o)),
              (e = M(0.01, 10, e / 1e3)),
              o < 1
                ? ((i = (t) => {
                    let r = t * o,
                      i = r * e;
                    return 0.001 - ((r - n) / rt(t, o)) * Math.exp(-i);
                  }),
                  (a = (t) => {
                    let r = t * o * e,
                      a = Math.pow(o, 2) * Math.pow(t, 2) * e,
                      l = Math.exp(-r),
                      s = rt(Math.pow(t, 2), o);
                    return (
                      ((r * n + n - a) * l * (-i(t) + 0.001 > 0 ? -1 : 1)) / s
                    );
                  }))
                : ((i = (t) => -0.001 + Math.exp(-t * e) * ((t - n) * e + 1)),
                  (a = (t) => e * e * (n - t) * Math.exp(-t * e)));
            let l = (function (e, t, n) {
              let r = n;
              for (let n = 1; n < 12; n++) r -= e(r) / t(r);
              return r;
            })(i, a, 5 / e);
            if (((e = tt(e)), isNaN(l)))
              return { stiffness: 100, damping: 10, duration: e };
            {
              let t = Math.pow(l, 2) * r;
              return {
                stiffness: t,
                damping: 2 * o * Math.sqrt(r * t),
                duration: e,
              };
            }
          })({ ...e, velocity: 0 });
          (t = { ...t, ...n, mass: 1 }).isResolvedFromDuration = !0;
        }
      return t;
    })({ ...s, velocity: -((s.velocity || 0) / 1e3) }),
    x = v || 0,
    w = m / (2 * Math.sqrt(h * g)),
    k = f - d,
    S = Math.sqrt(h / g) / 1e3,
    E = 5 > Math.abs(k);
  if ((u || (u = E ? n8 : n9), c || (c = E ? n7 : re), w < 1))
    (i = rt(S, w)),
      (a = (x + w * S * k) / i),
      (n = (e) =>
        f - Math.exp(-w * S * e) * (a * Math.sin(i * e) + k * Math.cos(i * e))),
      (o = w * S * a + k * i),
      (l = w * S * k - a * i),
      (r = (e) =>
        Math.exp(-w * S * e) * (o * Math.sin(i * e) + l * Math.cos(i * e)));
  else if (1 === w) {
    n = (e) => f - Math.exp(-S * e) * (k + (x + S * k) * e);
    let e = x + S * k;
    r = (t) => Math.exp(-S * t) * (S * e * t - x);
  } else {
    let e = S * Math.sqrt(w * w - 1);
    n = (t) => {
      let n = Math.exp(-w * S * t),
        r = Math.min(e * t, 300);
      return (
        f - (n * ((x + w * S * k) * Math.sinh(r) + e * k * Math.cosh(r))) / e
      );
    };
    let t = (x + w * S * k) / e,
      i = w * S * t - k * e,
      a = w * S * k - t * e;
    r = (t) => {
      let n = Math.exp(-w * S * t),
        r = Math.min(e * t, 300);
      return n * (i * Math.sinh(r) + a * Math.cosh(r));
    };
  }
  let C = {
    calculatedDuration: (b && y) || null,
    velocity: (e) => tt(r(e)),
    next: (e) => {
      if (!b && w < 1) {
        let t = Math.exp(-w * S * e),
          n = Math.sin(i * e),
          r = Math.cos(i * e),
          s = f - t * (a * n + k * r);
        return (
          (p.done =
            Math.abs(tt(t * (o * n + l * r))) <= u && Math.abs(f - s) <= c),
          (p.value = p.done ? f : s),
          p
        );
      }
      let t = n(e);
      return (
        b
          ? (p.done = e >= y)
          : (p.done = Math.abs(tt(r(e))) <= u && Math.abs(f - t) <= c),
        (p.value = p.done ? f : t),
        p
      );
    },
    toString: () => {
      let e = Math.min(n6(C), 2e4),
        t = tg((t) => C.next(e * t).value, e, 30);
      return e + "ms " + t;
    },
    toTransition: () => {},
  };
  return C;
}
function ro(e, t, n) {
  let r = Math.max(t - 5, 0);
  return tP(n - e(r), t - r);
}
function rl({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: l,
  max: s,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  let d,
    f,
    p = e[0],
    h = { done: !1, value: p },
    m = n * t,
    g = p + m,
    y = void 0 === o ? g : o(g);
  y !== g && (m = y - p);
  let v = (e) => -m * Math.exp(-e / r),
    b = (e) => y + v(e),
    x = (e) => {
      let t = v(e),
        n = b(e);
      (h.done = Math.abs(t) <= u), (h.value = h.done ? y : n);
    },
    w = (e) => {
      let t;
      if (((t = h.value), (void 0 !== l && t < l) || (void 0 !== s && t > s))) {
        var n;
        (d = e),
          (f = ra({
            keyframes: [
              h.value,
              ((n = h.value),
              void 0 === l
                ? s
                : void 0 === s || Math.abs(l - n) < Math.abs(s - n)
                ? l
                : s),
            ],
            velocity: ro(b, e, h.value),
            damping: i,
            stiffness: a,
            restDelta: u,
            restSpeed: c,
          }));
      }
    };
  return (
    w(0),
    {
      calculatedDuration: null,
      next: (e) => {
        let t = !1;
        return (f || void 0 !== d || ((t = !0), x(e), w(e)),
        void 0 !== d && e >= d)
          ? f.next(e - d)
          : (t || x(e), h);
      },
    }
  );
}
ra.applyToOptions = (e) => {
  let t = (function (e, t = 100, n) {
    let r = n({ ...e, keyframes: [0, t] }),
      i = Math.min(n6(r), 2e4);
    return {
      type: "keyframes",
      ease: (e) => r.next(i * e).value / t,
      duration: i / 1e3,
    };
  })(e, 100, ra);
  return (
    (e.ease = t.ease), (e.duration = tt(t.duration)), (e.type = "keyframes"), e
  );
};
let rs = (e, t, n) =>
  (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
function ru(e, t, n, r) {
  return e === t && n === r
    ? eY
    : (i) =>
        0 === i || 1 === i
          ? i
          : rs(
              (function (e, t, n, r, i) {
                let a,
                  o,
                  l = 0;
                do
                  (a = rs((o = t + (n - t) / 2), r, i) - e) > 0
                    ? (n = o)
                    : (t = o);
                while (Math.abs(a) > 1e-7 && ++l < 12);
                return o;
              })(i, 0, 1, e, n),
              t,
              r
            );
}
let rc = ru(0.42, 0, 1, 1),
  rd = ru(0, 0, 0.58, 1),
  rf = ru(0.42, 0, 0.58, 1),
  rp = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  rh = (e) => (t) => 1 - e(1 - t),
  rm = ru(0.33, 1.53, 0.69, 0.99),
  rg = rh(rm),
  ry = rp(rg),
  rv = (e) =>
    e >= 1
      ? 1
      : (e *= 2) < 1
      ? 0.5 * rg(e)
      : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  rb = (e) => 1 - Math.sin(Math.acos(e)),
  rx = rh(rb),
  rw = rp(rb),
  rk = {
    linear: eY,
    easeIn: rc,
    easeInOut: rf,
    easeOut: rd,
    circIn: rb,
    circInOut: rw,
    circOut: rx,
    backIn: rg,
    backInOut: ry,
    backOut: rm,
    anticipate: rv,
  },
  rS = (e) => {
    if (th(e)) {
      eE(e.length);
      let [t, n, r, i] = e;
      return ru(t, n, r, i);
    }
    return "string" == typeof e
      ? (eE(rk[e], `Invalid easing type '${e}'`), rk[e])
      : e;
  },
  rE = (e, t, n) => {
    let r = t - e;
    return r ? (n - e) / r : 1;
  };
function rC(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let a = e.length;
  if ((eE(t.length), 1 === a)) return () => t[0];
  if (2 === a && t[0] === t[1]) return () => t[1];
  let o = e[0] === e[1];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let l = (function (e, t, n) {
      let r = [],
        i = n || eQ.mix || n4,
        a = e.length - 1;
      for (let n = 0; n < a; n++) {
        let a = i(e[n], e[n + 1]);
        t && (a = nH(Array.isArray(t) ? t[n] || eY : t, a)), r.push(a);
      }
      return r;
    })(t, r, i),
    s = l.length,
    u = (n) => {
      if (o && n < e[0]) return t[0];
      let r = 0;
      if (s > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
      let i = rE(e[r], e[r + 1], n);
      return l[r](i);
    };
  return n ? (t) => u(M(e[0], e[a - 1], t)) : u;
}
function rP(e) {
  let t = [0];
  return (
    !(function (e, t) {
      let n = e[e.length - 1];
      for (let r = 1; r <= t; r++) {
        let i = rE(0, t, r);
        e.push(t8(n, 1, i));
      }
    })(t, e.length - 1),
    t
  );
}
function rT({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  var i;
  let a = Array.isArray(r) && "number" != typeof r[0] ? r.map(rS) : rS(r),
    o = { done: !1, value: t[0] },
    l = rC(
      ((i = n && n.length === t.length ? n : rP(t)), i.map((t) => t * e)),
      t,
      {
        ease: Array.isArray(a)
          ? a
          : t.map(() => a || rf).splice(0, t.length - 1),
      }
    );
  return {
    calculatedDuration: e,
    next: (t) => ((o.value = l(t)), (o.done = t >= e), o),
  };
}
let rN = { decay: rl, inertia: rl, tween: rT, keyframes: rT, spring: ra };
function rj(e) {
  "string" == typeof e.type && (e.type = rN[e.type]);
}
let rA = (e) => e / 100;
class rM extends tp {
  constructor(e) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        let { motionValue: e } = this.options;
        e && e.updatedAt !== tC.now() && this.tick(tC.now()),
          (this.isStopped = !0),
          "idle" !== this.state && (this.teardown(), this.options.onStop?.());
      }),
      (this.options = e),
      this.initAnimation(),
      this.play(),
      !1 === e.autoplay && this.pause();
  }
  initAnimation() {
    let { options: e } = this;
    rj(e);
    let {
        type: t = rT,
        repeat: n = 0,
        repeatDelay: r = 0,
        repeatType: i,
        velocity: a = 0,
      } = e,
      { keyframes: o } = e,
      l = t || rT;
    l !== rT &&
      "number" != typeof o[0] &&
      ((this.mixKeyframes = nH(rA, n4(o[0], o[1]))), (o = [0, 100]));
    let s = l({ ...e, keyframes: o });
    "mirror" === i &&
      (this.mirroredGenerator = l({
        ...e,
        keyframes: [...o].reverse(),
        velocity: -a,
      })),
      null === s.calculatedDuration && (s.calculatedDuration = n6(s));
    let { calculatedDuration: u } = s;
    (this.calculatedDuration = u),
      (this.resolvedDuration = u + r),
      (this.totalDuration = this.resolvedDuration * (n + 1) - r),
      (this.generator = s);
  }
  updateTime(e) {
    let t = Math.round(e - this.startTime) * this.playbackSpeed;
    null !== this.holdTime
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = t);
  }
  tick(e, t = !1) {
    let n,
      {
        generator: r,
        totalDuration: i,
        mixKeyframes: a,
        mirroredGenerator: o,
        resolvedDuration: l,
        calculatedDuration: s,
      } = this;
    if (null === this.startTime) return r.next(0);
    let {
      delay: u = 0,
      keyframes: c,
      repeat: d,
      repeatType: f,
      repeatDelay: p,
      type: h,
      onUpdate: m,
      finalKeyframe: g,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, e))
      : this.speed < 0 &&
        (this.startTime = Math.min(e - i / this.speed, this.startTime)),
      t ? (this.currentTime = e) : this.updateTime(e);
    let y = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      v = this.playbackSpeed >= 0 ? y < 0 : y > i;
    (this.currentTime = Math.max(y, 0)),
      "finished" === this.state &&
        null === this.holdTime &&
        (this.currentTime = i);
    let b = this.currentTime,
      x = r;
    if (d) {
      let e = Math.min(this.currentTime, i) / l,
        t = Math.floor(e),
        n = e % 1;
      !n && e >= 1 && (n = 1),
        1 === n && t--,
        (t = Math.min(t, d + 1)) % 2 &&
          ("reverse" === f
            ? ((n = 1 - n), p && (n -= p / l))
            : "mirror" === f && (x = o)),
        (b = M(0, 1, n) * l);
    }
    v
      ? ((this.delayState.value = c[0]), (n = this.delayState))
      : (n = x.next(b)),
      a && !v && (n.value = a(n.value));
    let { done: w } = n;
    v ||
      null === s ||
      (w =
        this.playbackSpeed >= 0
          ? this.currentTime >= i
          : this.currentTime <= 0);
    let k =
      null === this.holdTime &&
      ("finished" === this.state || ("running" === this.state && w));
    return (
      k && h !== rl && (n.value = tf(c, this.options, g, this.speed)),
      m && m(n.value),
      k && this.finish(),
      n
    );
  }
  then(e, t) {
    return this.finished.then(e, t);
  }
  get duration() {
    return this.calculatedDuration / 1e3;
  }
  get iterationDuration() {
    let { delay: e = 0 } = this.options || {};
    return this.duration + e / 1e3;
  }
  get time() {
    return this.currentTime / 1e3;
  }
  set time(e) {
    (e = tt(e)),
      (this.currentTime = e),
      null === this.startTime ||
      null !== this.holdTime ||
      0 === this.playbackSpeed
        ? (this.holdTime = e)
        : this.driver &&
          (this.startTime = this.driver.now() - e / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0),
          (this.state = "paused"),
          (this.holdTime = e),
          this.tick(e));
  }
  getGeneratorVelocity() {
    let e = this.currentTime;
    if (e <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(e);
    let t = this.generator.next(e).value;
    return ro((e) => this.generator.next(e).value, e, t);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    let t = this.playbackSpeed !== e;
    t && this.driver && this.updateTime(tC.now()),
      (this.playbackSpeed = e),
      t && this.driver && (this.time = this.currentTime / 1e3);
  }
  play() {
    if (this.isStopped) return;
    let { driver: e = n5, startTime: t } = this.options;
    this.driver || (this.driver = e((e) => this.tick(e))),
      this.options.onPlay?.();
    let n = this.driver.now();
    "finished" === this.state
      ? (this.updateFinished(), (this.startTime = n))
      : null !== this.holdTime
      ? (this.startTime = n - this.holdTime)
      : this.startTime || (this.startTime = t ?? n),
      "finished" === this.state &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(tC.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    "running" !== this.state && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      this.options.onComplete?.();
  }
  cancel() {
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(e) {
    return (this.startTime = 0), this.tick(e, !0);
  }
  attachTimeline(e) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      this.driver?.stop(),
      e.observe(this)
    );
  }
}
let rR = { anticipate: rv, backInOut: ry, circInOut: rw };
class rL extends tx {
  constructor(e) {
    "string" == typeof e.ease && e.ease in rR && (e.ease = rR[e.ease]),
      rj(e),
      super(e),
      void 0 !== e.startTime &&
        !1 !== e.autoplay &&
        (this.startTime = e.startTime),
      (this.options = e);
  }
  updateMotionValue(e) {
    let {
      motionValue: t,
      onUpdate: n,
      onComplete: r,
      element: i,
      ...a
    } = this.options;
    if (!t) return;
    if (void 0 !== e) return void t.set(e);
    let o = new rM({ ...a, autoplay: !1 }),
      l = Math.max(10, tC.now() - this.startTime),
      s = M(0, 10, l - 10),
      u = o.sample(l).value,
      { name: c } = this.options;
    i && c && ta(i, c, u),
      t.setWithVelocity(o.sample(Math.max(0, l - s)).value, u, s),
      o.stop();
  }
}
let rz = (e, t) =>
  "zIndex" !== t &&
  !!(
    "number" == typeof e ||
    Array.isArray(e) ||
    ("string" == typeof e && (ei.test(e) || "0" === e) && !e.startsWith("url("))
  );
function rD(e) {
  (e.duration = 0), (e.type = "keyframes");
}
let r_ = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/,
  rO = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  rV = to(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
class rI extends tp {
  constructor({
    autoplay: e = !0,
    delay: t = 0,
    type: n = "keyframes",
    repeat: r = 0,
    repeatDelay: i = 0,
    repeatType: a = "loop",
    keyframes: o,
    name: l,
    motionValue: s,
    element: u,
    ...c
  }) {
    super(),
      (this.stop = () => {
        this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel();
      }),
      (this.createdAt = tC.now());
    let d = {
        autoplay: e,
        delay: t,
        type: n,
        repeat: r,
        repeatDelay: i,
        repeatType: a,
        name: l,
        motionValue: s,
        element: u,
        ...c,
      },
      f = u?.KeyframeResolver || e6;
    (this.keyframeResolver = new f(
      o,
      (e, t, n) => this.onKeyframesResolved(e, t, d, !n),
      l,
      s,
      u
    )),
      this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(e, t, n, r) {
    let i;
    this.keyframeResolver = void 0;
    let {
      name: a,
      type: o,
      velocity: l,
      delay: s,
      isHandoff: u,
      onUpdate: c,
    } = n;
    this.resolvedAt = tC.now();
    let d = !0;
    !(function (e, t, n, r) {
      let i = e[0];
      if (null === i) return !1;
      if ("display" === t || "visibility" === t) return !0;
      let a = e[e.length - 1],
        o = rz(i, t),
        l = rz(a, t);
      return (
        eS(
          `You are trying to animate ${t} from "${i}" to "${a}". "${
            o ? a : i
          }" is not an animatable value.`
        ),
        !!o &&
          !!l &&
          ((function (e) {
            let t = e[0];
            if (1 === e.length) return !0;
            for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
          })(e) ||
            (("spring" === n || tb(n)) && r))
      );
    })(e, a, o, l) &&
      ((d = !1),
      (eQ.instantAnimations || !s) && c?.(tf(e, n, t)),
      (e[0] = e[e.length - 1]),
      rD(n),
      (n.repeat = 0));
    let f = {
        startTime: r
          ? this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt
          : void 0,
        finalKeyframe: t,
        ...n,
        keyframes: e,
      },
      p =
        d &&
        !u &&
        (function (e) {
          let {
            motionValue: t,
            name: n,
            repeatDelay: r,
            repeatType: i,
            damping: a,
            type: o,
            keyframes: l,
          } = e;
          if (!(t?.owner?.current instanceof HTMLElement)) return !1;
          let { onUpdate: s, transformTemplate: u } = t.owner.getProps();
          return (
            rV() &&
            n &&
            (tw.has(n) ||
              (rO.has(n) &&
                (function (e) {
                  for (let t = 0; t < e.length; t++)
                    if ("string" == typeof e[t] && r_.test(e[t])) return !0;
                  return !1;
                })(l))) &&
            ("transform" !== n || !u) &&
            !s &&
            !r &&
            "mirror" !== i &&
            0 !== a &&
            "inertia" !== o
          );
        })(f),
      h = f.motionValue?.owner?.current;
    if (p)
      try {
        i = new rL({ ...f, element: h });
      } catch {
        i = new rM(f);
      }
    else i = new rM(f);
    i.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(eY),
      this.pendingTimeline &&
        ((this.stopTimeline = i.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = i);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, t) {
    return this.finished.finally(e).then(() => {});
  }
  get animation() {
    return (
      this._animation ||
        (this.keyframeResolver?.resume(), (e3 = !0), e5(), e4(), (e3 = !1)),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(e))
        : (this.pendingTimeline = e),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
let rF = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  rB = { type: "keyframes", duration: 0.8 },
  r$ = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  rU = new Set([
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
    "elapsed",
  ]),
  rW =
    (e, t, n, r = {}, i, a) =>
    (o) => {
      let l = n$(r, e) || {},
        s = l.delay || r.delay || 0,
        { elapsed: u = 0 } = r;
      u -= tt(s);
      let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...l,
        delay: -u,
        onUpdate: (e) => {
          t.set(e), l.onUpdate && l.onUpdate(e);
        },
        onComplete: () => {
          o(), l.onComplete && l.onComplete();
        },
        name: e,
        motionValue: t,
        element: a ? void 0 : i,
      };
      !(function (e) {
        for (let t in e) if (!rU.has(t)) return !0;
        return !1;
      })(l) &&
        Object.assign(
          c,
          ((e, { keyframes: t }) =>
            t.length > 2
              ? rB
              : A.has(e)
              ? e.startsWith("scale")
                ? {
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t[1] ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10,
                  }
                : rF
              : r$)(e, c)
        ),
        c.duration && (c.duration = tt(c.duration)),
        c.repeatDelay && (c.repeatDelay = tt(c.repeatDelay)),
        void 0 !== c.from && (c.keyframes[0] = c.from);
      let d = !1;
      if (
        ((!1 !== c.type && (0 !== c.duration || c.repeatDelay)) ||
          (rD(c), 0 === c.delay && (d = !0)),
        (eQ.instantAnimations ||
          eQ.skipAnimations ||
          i?.shouldSkipAnimations ||
          l.skipAnimations) &&
          ((d = !0), rD(c), (c.delay = 0)),
        (c.allowFlatten = !l.type && !l.ease),
        d && !a && void 0 !== t.get())
      ) {
        let e = tf(c.keyframes, l);
        if (void 0 !== e)
          return void eX.update(() => {
            c.onUpdate(e), c.onComplete();
          });
      }
      return l.isSync ? new rM(c) : new rI(c);
    };
function rH(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: a, transitionEnd: o, ...l } = t,
    s = e.getDefaultTransition();
  a = a ? nB(a, s) : s;
  let u = a?.reduceMotion,
    c = a?.skipAnimations;
  r && (a = r);
  let d = [],
    f = i && e.animationState && e.animationState.getState()[i],
    p = a?.path;
  for (let t in (p && p.animateVisualElement(e, l, a, n, d), l)) {
    let r = e.getValue(t, e.latestValues[t] ?? null),
      i = l[t];
    if (
      void 0 === i ||
      (f &&
        (function ({ protectedKeys: e, needsAnimating: t }, n) {
          let r = e.hasOwnProperty(n) && !0 !== t[n];
          return (t[n] = !1), r;
        })(f, t))
    )
      continue;
    let o = { delay: n, ...n$(a || {}, t) };
    c && (o.skipAnimations = !0);
    let s = r.get();
    if (
      void 0 !== s &&
      !r.isAnimating() &&
      !Array.isArray(i) &&
      i === s &&
      !o.velocity
    ) {
      eX.update(() => r.set(i));
      continue;
    }
    let p = !1;
    if (window.MotionHandoffAnimation) {
      let n = e.props[n_];
      if (n) {
        let e = window.MotionHandoffAnimation(n, t, eX);
        null !== e && ((o.startTime = e), (p = !0));
      }
    }
    nW(e, t);
    let h = u ?? e.shouldReduceMotion;
    r.start(rW(t, r, i, h && eb.has(t) ? { type: !1 } : o, e, p));
    let m = r.animation;
    m && d.push(m);
  }
  if (o) {
    let t = () =>
      eX.update(() => {
        o &&
          (function (e, t) {
            let {
              transitionEnd: n = {},
              transition: r = {},
              ...i
            } = nF(e, t) || {};
            for (let t in (i = { ...i, ...n })) {
              var a;
              let n = nU((a = i[t])) ? a[a.length - 1] || 0 : a;
              e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, tj(n));
            }
          })(e, o);
      });
    d.length ? Promise.all(d).then(t) : t();
  }
  return d;
}
function rY(e, t, n, r = 0, i = 1) {
  let a = Array.from(e)
      .sort((e, t) => e.sortNodePosition(t))
      .indexOf(t),
    o = e.size,
    l = (o - 1) * r;
  return "function" == typeof n ? n(a, o) : 1 === i ? a * r : l - a * r;
}
function rQ(e, t, n = {}) {
  let r = nF(e, t, "exit" === n.type ? e.presenceContext?.custom : void 0),
    { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  let a = r ? () => Promise.all(rH(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (r = 0) => {
            let {
              delayChildren: a = 0,
              staggerChildren: o,
              staggerDirection: l,
            } = i;
            return (function (e, t, n = 0, r = 0, i = 0, a = 1, o) {
              let l = [];
              for (let s of e.variantChildren)
                s.notify("AnimationStart", t),
                  l.push(
                    rQ(s, t, {
                      ...o,
                      delay:
                        n +
                        ("function" == typeof r ? 0 : r) +
                        rY(e.variantChildren, s, r, i, a),
                    }).then(() => s.notify("AnimationComplete", t))
                  );
              return Promise.all(l);
            })(e, t, r, a, o, l, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (!l) return Promise.all([a(), o(n.delay)]);
  {
    let [e, t] = "beforeChildren" === l ? [a, o] : [o, a];
    return e().then(() => t());
  }
}
let rq = tD.length;
function rG(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
let rX = [...tz].reverse(),
  rK = tz.length;
function rZ(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function rJ() {
  return {
    animate: rZ(!0),
    whileInView: rZ(),
    whileHover: rZ(),
    whileTap: rZ(),
    whileDrag: rZ(),
    whileFocus: rZ(),
    exit: rZ(),
  };
}
class r0 {
  constructor(e) {
    (this.isMounted = !1), (this.node = e);
  }
  update() {}
}
let r1 = 0,
  r2 = { x: !1, y: !1 };
function r3(e) {
  return [e("x"), e("y")];
}
function r4(e) {
  return e.max - e.min;
}
function r5(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = t8(t.min, t.max, e.origin)),
    (e.scale = r4(n) / r4(t)),
    (e.translate = t8(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= 0.9999 && e.scale <= 1.0001) || isNaN(e.scale)) &&
      (e.scale = 1),
    ((e.translate >= -0.01 && e.translate <= 0.01) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function r6(e, t, n, r) {
  r5(e.x, t.x, n.x, r ? r.originX : void 0),
    r5(e.y, t.y, n.y, r ? r.originY : void 0);
}
function r8(e, t, n, r = 0) {
  (e.min = (r ? t8(n.min, n.max, r) : n.min) + t.min), (e.max = e.min + r4(t));
}
function r9(e, t, n, r = 0) {
  let i = r ? t8(n.min, n.max, r) : n.min;
  (e.min = t.min - i), (e.max = e.min + r4(t));
}
function r7(e, t, n, r) {
  r9(e.x, t.x, n.x, r?.x), r9(e.y, t.y, n.y, r?.y);
}
let ie = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
  it = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function ir(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function ii(e) {
  return y(e) && "ownerSVGElement" in e;
}
function ia(e, t, n) {
  if (null == e) return [];
  if (e instanceof EventTarget) return [e];
  if ("string" == typeof e) {
    let r = document;
    t && (r = t.current);
    let i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e).filter((e) => null != e);
}
let io = new WeakMap(),
  il = (e, t, n) => (r, i) =>
    i && i[0]
      ? i[0][e + "Size"]
      : ii(r) && "getBBox" in r
      ? r.getBBox()[t]
      : r[n],
  is = il("inline", "width", "offsetWidth"),
  iu = il("block", "height", "offsetHeight");
function ic({ target: e, borderBoxSize: t }) {
  io.get(e)?.forEach((n) => {
    n(e, {
      get width() {
        return is(e, t);
      },
      get height() {
        return iu(e, t);
      },
    });
  });
}
function id(e) {
  e.forEach(ic);
}
let ip = new Set();
function ih(e, r) {
  let i;
  return "function" == typeof e
    ? (ip.add(e),
      n ||
        ((n = () => {
          let e = {
            get width() {
              return window.innerWidth;
            },
            get height() {
              return window.innerHeight;
            },
          };
          ip.forEach((t) => t(e));
        }),
        window.addEventListener("resize", n)),
      () => {
        ip.delete(e),
          ip.size ||
            "function" != typeof n ||
            (window.removeEventListener("resize", n), (n = void 0));
      })
    : (!t && "u" > typeof ResizeObserver && (t = new ResizeObserver(id)),
      (i = ia(e)).forEach((e) => {
        let n = io.get(e);
        n || ((n = new Set()), io.set(e, n)), n.add(r), t?.observe(e);
      }),
      () => {
        i.forEach((e) => {
          let n = io.get(e);
          n?.delete(r), n?.size || t?.unobserve(e);
        });
      });
}
let im = (e) =>
  "mouse" === e.pointerType
    ? "number" != typeof e.button || e.button <= 0
    : !1 !== e.isPrimary;
function ig(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
function iy(e, t, n, r) {
  return ir(e, t, (e) => im(e) && n(e, ig(e)), r);
}
let iv = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  ib = (e, t) => Math.abs(e - t),
  ix = new Set(["auto", "scroll"]);
class iw {
  constructor(
    e,
    t,
    {
      transformPagePoint: n,
      contextWindow: r = window,
      dragSnapToOrigin: i = !1,
      distanceThreshold: a = 3,
      element: o,
    } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (e) => {
        this.handleScroll(e.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        var e, t;
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = ik(
            this.lastRawMoveEventInfo,
            this.transformPagePoint
          ));
        let n = iE(this.lastMoveEventInfo, this.history),
          r = null !== this.startEvent,
          i =
            ((e = n.offset),
            (t = { x: 0, y: 0 }),
            Math.sqrt(ib(e.x, t.x) ** 2 + ib(e.y, t.y) ** 2) >=
              this.distanceThreshold);
        if (!r && !i) return;
        let { point: a } = n,
          { timestamp: o } = eZ;
        this.history.push({ ...a, timestamp: o });
        let { onStart: l, onMove: s } = this.handlers;
        r ||
          (l && l(this.lastMoveEvent, n),
          (this.startEvent = this.lastMoveEvent)),
          s && s(this.lastMoveEvent, n);
      }),
      (this.handlePointerMove = (e, t) => {
        (this.lastMoveEvent = e),
          (this.lastRawMoveEventInfo = t),
          (this.lastMoveEventInfo = ik(t, this.transformPagePoint)),
          eX.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (e, t) => {
        this.end();
        let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && i && i(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        let a = iE(
          "pointercancel" === e.type
            ? this.lastMoveEventInfo
            : ik(t, this.transformPagePoint),
          this.history
        );
        this.startEvent && n && n(e, a), r && r(e, a);
      }),
      !im(e))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = t),
      (this.transformPagePoint = n),
      (this.distanceThreshold = a),
      (this.contextWindow = r || window);
    let l = ik(ig(e), this.transformPagePoint),
      { point: s } = l,
      { timestamp: u } = eZ;
    this.history = [{ ...s, timestamp: u }];
    let { onSessionStart: c } = t;
    c && c(e, iE(l, this.history));
    let d = { passive: !0, capture: !0 };
    (this.removeListeners = nH(
      iy(this.contextWindow, "pointermove", this.handlePointerMove, d),
      iy(this.contextWindow, "pointerup", this.handlePointerUp, d),
      iy(this.contextWindow, "pointercancel", this.handlePointerUp, d)
    )),
      o && this.startScrollTracking(o);
  }
  startScrollTracking(e) {
    let t = e.parentElement;
    for (; t; ) {
      let e = getComputedStyle(t);
      (ix.has(e.overflowX) || ix.has(e.overflowY)) &&
        this.scrollPositions.set(t, { x: t.scrollLeft, y: t.scrollTop }),
        (t = t.parentElement);
    }
    this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll);
      });
  }
  handleScroll(e) {
    let t = this.scrollPositions.get(e);
    if (!t) return;
    let n = e === window,
      r = n
        ? { x: window.scrollX, y: window.scrollY }
        : { x: e.scrollLeft, y: e.scrollTop },
      i = { x: r.x - t.x, y: r.y - t.y };
    (0 !== i.x || 0 !== i.y) &&
      (n
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += i.x),
          (this.lastMoveEventInfo.point.y += i.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= i.x), (this.history[0].y -= i.y)),
      this.scrollPositions.set(e, r),
      eX.update(this.updatePoint, !0));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      eK(this.updatePoint);
  }
}
function ik(e, t) {
  return t ? { point: t(e.point) } : e;
}
function iS(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function iE({ point: e }, t) {
  return {
    point: e,
    delta: iS(e, iC(t)),
    offset: iS(e, t[0]),
    velocity: (function (e) {
      if (e.length < 2) return { x: 0, y: 0 };
      let t = e.length - 1,
        n = null,
        r = iC(e);
      for (; t >= 0 && ((n = e[t]), !(r.timestamp - n.timestamp > tt(0.1))); )
        t--;
      if (!n) return { x: 0, y: 0 };
      n === e[0] &&
        e.length > 2 &&
        r.timestamp - n.timestamp > 2 * tt(0.1) &&
        (n = e[1]);
      let i = (r.timestamp - n.timestamp) / 1e3;
      if (0 === i) return { x: 0, y: 0 };
      let a = { x: (r.x - n.x) / i, y: (r.y - n.y) / i };
      return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
    })(t),
  };
}
function iC(e) {
  return e[e.length - 1];
}
function iP(e, t, n) {
  return {
    min: void 0 !== t ? e.min + t : void 0,
    max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
  };
}
function iT(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function iN(e, t, n) {
  return { min: ij(e, t), max: ij(e, n) };
}
function ij(e, t) {
  return "number" == typeof e ? e : e[t] || 0;
}
let iA = new WeakMap();
class iM {
  constructor(e) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ey()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = e);
  }
  start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
    let { presenceContext: r } = this.visualElement;
    if (r && !1 === r.isPresent) return;
    let i = (e) => {
        t && this.snapToCursor(ig(e).point), this.stopAnimation();
      },
      a = (e, t) => {
        let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
        if (
          n &&
          !r &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = (function (e) {
            if ("x" === e || "y" === e)
              if (r2[e]) return null;
              else
                return (
                  (r2[e] = !0),
                  () => {
                    r2[e] = !1;
                  }
                );
            return r2.x || r2.y
              ? null
              : ((r2.x = r2.y = !0),
                () => {
                  r2.x = r2.y = !1;
                });
          })(n)),
          !this.openDragLock)
        )
          return;
        (this.latestPointerEvent = e),
          (this.latestPanInfo = t),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          r3((e) => {
            let t = this.getAxisMotionValue(e).get() || 0;
            if (H.test(t)) {
              let { projection: n } = this.visualElement;
              if (n && n.layout) {
                let r = n.layout.layoutBox[e];
                r && (t = r4(r) * (parseFloat(t) / 100));
              }
            }
            this.originPoint[e] = t;
          }),
          i && eX.update(() => i(e, t), !1, !0),
          nW(this.visualElement, "transform");
        let { animationState: a } = this.visualElement;
        a && a.setActive("whileDrag", !0);
      },
      o = (e, t) => {
        (this.latestPointerEvent = e), (this.latestPanInfo = t);
        let {
          dragPropagation: n,
          dragDirectionLock: r,
          onDirectionLock: i,
          onDrag: a,
        } = this.getProps();
        if (!n && !this.openDragLock) return;
        let { offset: o } = t;
        if (r && null === this.currentDirection) {
          (this.currentDirection = (function (e, t = 10) {
            let n = null;
            return (
              Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n
            );
          })(o)),
            null !== this.currentDirection && i && i(this.currentDirection);
          return;
        }
        this.updateAxis("x", t.point, o),
          this.updateAxis("y", t.point, o),
          this.visualElement.render(),
          a && eX.update(() => a(e, t), !1, !0);
      },
      l = (e, t) => {
        (this.latestPointerEvent = e),
          (this.latestPanInfo = t),
          this.stop(e, t),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      s = () => {
        let { dragSnapToOrigin: e } = this.getProps();
        (e || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new iw(
      e,
      {
        onSessionStart: i,
        onStart: a,
        onMove: o,
        onSessionEnd: l,
        resumeAnimation: s,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        distanceThreshold: n,
        contextWindow: iv(this.visualElement),
        element: this.visualElement.current,
      }
    );
  }
  stop(e, t) {
    let n = e || this.latestPointerEvent,
      r = t || this.latestPanInfo,
      i = this.isDragging;
    if ((this.cancel(), !i || !r || !n)) return;
    let { velocity: a } = r;
    this.startAnimation(a);
    let { onDragEnd: o } = this.getProps();
    o && eX.postRender(() => o(n, r));
  }
  cancel() {
    this.isDragging = !1;
    let { projection: e, animationState: t } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.endPanSession();
    let { dragPropagation: n } = this.getProps();
    !n &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      t && t.setActive("whileDrag", !1);
  }
  endPanSession() {
    this.panSession && this.panSession.end(), (this.panSession = void 0);
  }
  updateAxis(e, t, n) {
    let { drag: r } = this.getProps();
    if (!n || !iL(e, r, this.currentDirection)) return;
    let i = this.getAxisMotionValue(e),
      a = this.originPoint[e] + n[e];
    this.constraints &&
      this.constraints[e] &&
      (a = (function (e, { min: t, max: n }, r) {
        return (
          void 0 !== t && e < t
            ? (e = r ? t8(t, e, r.min) : Math.max(e, t))
            : void 0 !== n &&
              e > n &&
              (e = r ? t8(n, e, r.max) : Math.min(e, n)),
          e
        );
      })(a, this.constraints[e], this.elastic[e])),
      i.set(a);
  }
  resolveConstraints() {
    let { dragConstraints: e, dragElastic: t } = this.getProps(),
      n =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : this.visualElement.projection?.layout,
      r = this.constraints;
    e && nV(e)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : e && n
      ? (this.constraints = (function (
          e,
          { top: t, left: n, bottom: r, right: i }
        ) {
          return { x: iP(e.x, n, i), y: iP(e.y, t, r) };
        })(n.layoutBox, e))
      : (this.constraints = !1),
      (this.elastic = (function (e = 0.35) {
        return (
          !1 === e ? (e = 0) : !0 === e && (e = 0.35),
          { x: iN(e, "left", "right"), y: iN(e, "top", "bottom") }
        );
      })(t)),
      r !== this.constraints &&
        !nV(e) &&
        n &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        r3((e) => {
          var t, r;
          let i;
          !1 !== this.constraints &&
            this.getAxisMotionValue(e) &&
            (this.constraints[e] =
              ((t = n.layoutBox[e]),
              (r = this.constraints[e]),
              (i = {}),
              void 0 !== r.min && (i.min = r.min - t.min),
              void 0 !== r.max && (i.max = r.max - t.min),
              i));
        });
  }
  resolveRefConstraints() {
    var e;
    let { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !nV(t)) return !1;
    let r = t.current;
    eE();
    let { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    i.root && ((i.root.scroll = void 0), i.root.updateScroll());
    let a = (function (e, t, n) {
        let r = nm(e, n),
          { scroll: i } = t;
        return i && (nd(r.x, i.offset.x), nd(r.y, i.offset.y)), r;
      })(r, i.root, this.visualElement.getTransformPagePoint()),
      o = ((e = i.layout.layoutBox), { x: iT(e.x, a.x), y: iT(e.y, a.y) });
    if (n) {
      let e = n(
        (function ({ x: e, y: t }) {
          return { top: t.min, right: e.max, bottom: t.max, left: e.min };
        })(o)
      );
      (this.hasMutatedConstraints = !!e), e && (o = nr(e));
    }
    return o;
  }
  startAnimation(e) {
    let {
        drag: t,
        dragMomentum: n,
        dragElastic: r,
        dragTransition: i,
        dragSnapToOrigin: a,
        onDragTransitionEnd: o,
      } = this.getProps(),
      l = this.constraints || {};
    return Promise.all(
      r3((o) => {
        if (!iL(o, t, this.currentDirection)) return;
        let s = (l && l[o]) || {};
        (!0 === a || a === o) && (s = { min: 0, max: 0 });
        let u = {
          type: "inertia",
          velocity: n ? e[o] : 0,
          bounceStiffness: r ? 200 : 1e6,
          bounceDamping: r ? 40 : 1e7,
          timeConstant: 750,
          restDelta: 1,
          restSpeed: 10,
          ...i,
          ...s,
        };
        return this.startAxisValueAnimation(o, u);
      })
    ).then(o);
  }
  startAxisValueAnimation(e, t) {
    let n = this.getAxisMotionValue(e);
    return (
      nW(this.visualElement, e), n.start(rW(e, n, 0, t, this.visualElement, !1))
    );
  }
  stopAnimation() {
    r3((e) => this.getAxisMotionValue(e).stop());
  }
  getAxisMotionValue(e) {
    let t = `_drag${e.toUpperCase()}`;
    return (
      this.visualElement.getProps()[t] ||
      this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0)
    );
  }
  snapToCursor(e) {
    r3((t) => {
      let { drag: n } = this.getProps();
      if (!iL(t, n, this.currentDirection)) return;
      let { projection: r } = this.visualElement,
        i = this.getAxisMotionValue(t);
      if (r && r.layout) {
        let { min: n, max: a } = r.layout.layoutBox[t],
          o = i.get() || 0;
        i.set(e[t] - t8(n, a, 0.5) + o);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    let { drag: e, dragConstraints: t } = this.getProps(),
      { projection: n } = this.visualElement;
    if (!nV(t) || !n || !this.constraints) return;
    this.stopAnimation();
    let r = { x: 0, y: 0 };
    r3((e) => {
      let t = this.getAxisMotionValue(e);
      if (t && !1 !== this.constraints) {
        var n, i;
        let a,
          o,
          l,
          s = t.get();
        r[e] =
          ((n = { min: s, max: s }),
          (i = this.constraints[e]),
          (a = 0.5),
          (o = r4(n)),
          (l = r4(i)) > o
            ? (a = rE(i.min, i.max - o, n.min))
            : o > l && (a = rE(n.min, n.max - l, i.min)),
          M(0, 1, a));
      }
    });
    let { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      n.root && n.root.updateScroll(),
      n.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      r3((t) => {
        if (!iL(t, e, null)) return;
        let n = this.getAxisMotionValue(t),
          { min: i, max: a } = this.constraints[t];
        n.set(t8(i, a, r[t]));
      }),
      this.visualElement.render();
  }
  addListeners() {
    let e;
    if (!this.visualElement.current) return;
    iA.set(this.visualElement, this);
    let t = this.visualElement.current,
      n = iy(t, "pointerdown", (e) => {
        let { drag: n, dragListener: r = !0 } = this.getProps(),
          i = e.target,
          a = i !== t && (it.has(i.tagName) || !0 === i.isContentEditable);
        n && r && !a && this.start(e);
      }),
      r = () => {
        var n, r, i;
        let a,
          o,
          { dragConstraints: l } = this.getProps();
        nV(l) &&
          l.current &&
          ((this.constraints = this.resolveRefConstraints()),
          e ||
            ((n = t),
            (r = l.current),
            (a = ih(n, iR((i = () => this.scalePositionWithinConstraints())))),
            (o = ih(r, iR(i))),
            (e = () => {
              a(), o();
            })));
      },
      { projection: i } = this.visualElement,
      a = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      eX.read(r);
    let o = ir(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: e, hasLayoutChanged: t }) => {
          this.isDragging &&
            t &&
            (r3((t) => {
              let n = this.getAxisMotionValue(t);
              n &&
                ((this.originPoint[t] += e[t].translate),
                n.set(n.get() + e[t].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), a(), l && l(), e && e();
    };
  }
  getProps() {
    let e = this.visualElement.getProps(),
      {
        drag: t = !1,
        dragDirectionLock: n = !1,
        dragPropagation: r = !1,
        dragConstraints: i = !1,
        dragElastic: a = 0.35,
        dragMomentum: o = !0,
      } = e;
    return {
      ...e,
      drag: t,
      dragDirectionLock: n,
      dragPropagation: r,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: o,
    };
  }
}
function iR(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function iL(e, t, n) {
  return (!0 === t || t === e) && (null === n || n === e);
}
let iz = (e) => (t, n) => {
    e && eX.update(() => e(t, n), !1, !0);
  },
  iD = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
var d = s("2YQ6R");
let i_ = !1;
class iO extends d.Component {
  componentDidMount() {
    let {
        visualElement: e,
        layoutGroup: t,
        switchLayoutGroup: n,
        layoutId: r,
      } = this.props,
      { projection: i } = e;
    i &&
      (t.group && t.group.add(i),
      n && n.register && r && n.register(i),
      i_ && i.root.didUpdate(),
      i.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      i.setOptions({
        ...i.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (iD.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(e) {
    let {
        layoutDependency: t,
        visualElement: n,
        drag: r,
        isPresent: i,
      } = this.props,
      { projection: a } = n;
    return (
      a &&
        ((a.isPresent = i),
        e.layoutDependency !== t &&
          a.setOptions({ ...a.options, layoutDependency: t }),
        (i_ = !0),
        r || e.layoutDependency !== t || void 0 === t || e.isPresent !== i
          ? a.willUpdate()
          : this.safeToRemove(),
        e.isPresent !== i &&
          (i
            ? a.promote()
            : a.relegate() ||
              eX.postRender(() => {
                let e = a.getStack();
                (e && e.members.length) || this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    let { visualElement: e, layoutAnchor: t } = this.props,
      { projection: n } = e;
    n &&
      ((n.options.layoutAnchor = t),
      n.root.didUpdate(),
      tk.postRender(() => {
        !n.currentAnimation && n.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props,
      { projection: r } = e;
    (i_ = !0),
      r &&
        (r.scheduleCheckAfterUnmount(),
        t && t.group && t.group.remove(r),
        n && n.deregister && n.deregister(r));
  }
  safeToRemove() {
    let { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function iV(e) {
  let [t, n] = C(),
    r = (0, d.useContext)(p);
  return (0, c.jsx)(iO, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: (0, d.useContext)(nO),
    isPresent: t,
    safeToRemove: n,
  });
}
let iI = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ],
  iF = iI.length,
  iB = (e) => ("string" == typeof e ? parseFloat(e) : e),
  i$ = (e) => "number" == typeof e || Y.test(e);
function iU(e, t) {
  return void 0 !== e[t] ? e[t] : e.borderRadius;
}
let iW = iY(0, 0.5, rx),
  iH = iY(0.5, 0.95, eY);
function iY(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(rE(e, t, r)));
}
function iQ(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function iq(e, t) {
  iQ(e.x, t.x), iQ(e.y, t.y);
}
function iG(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function iX(e, t, n, r, i) {
  return (
    (e -= t),
    (e = r + (1 / n) * (e - r)),
    void 0 !== i && (e = r + (1 / i) * (e - r)),
    e
  );
}
function iK(e, t, [n, r, i], a, o) {
  !(function (e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
    if (
      (H.test(t) &&
        ((t = parseFloat(t)), (t = t8(o.min, o.max, t / 100) - o.min)),
      "number" != typeof t)
    )
      return;
    let l = t8(a.min, a.max, r);
    e === a && (l -= t),
      (e.min = iX(e.min, t, n, l, i)),
      (e.max = iX(e.max, t, n, l, i));
  })(e, t[n], t[r], t[i], t.scale, a, o);
}
let iZ = ["x", "scaleX", "originX"],
  iJ = ["y", "scaleY", "originY"];
function i0(e, t, n, r) {
  iK(e.x, t, iZ, n ? n.x : void 0, r ? r.x : void 0),
    iK(e.y, t, iJ, n ? n.y : void 0, r ? r.y : void 0);
}
function i1(e) {
  return 0 === e.translate && 1 === e.scale;
}
function i2(e) {
  return i1(e.x) && i1(e.y);
}
function i3(e, t) {
  return e.min === t.min && e.max === t.max;
}
function i4(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function i5(e, t) {
  return i4(e.x, t.x) && i4(e.y, t.y);
}
function i6(e) {
  return r4(e.x) / r4(e.y);
}
function i8(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class i9 {
  constructor() {
    this.members = [];
  }
  add(e) {
    tn(this.members, e);
    for (let t = this.members.length - 1; t >= 0; t--) {
      let n = this.members[t];
      if (n === e || n === this.lead || n === this.prevLead) continue;
      let r = n.instance;
      (r && !1 !== r.isConnected) ||
        n.snapshot ||
        (tr(this.members, n), n.unmount());
    }
    e.scheduleRender();
  }
  remove(e) {
    if (
      (tr(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      let e = this.members[this.members.length - 1];
      e && this.promote(e);
    }
  }
  relegate(e) {
    for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
      let e = this.members[t];
      if (!1 !== e.isPresent && e.instance?.isConnected !== !1)
        return this.promote(e), !0;
    }
    return !1;
  }
  promote(e, t) {
    let n = this.lead;
    if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
      n.updateSnapshot(), e.scheduleRender();
      let { layoutDependency: r } = n.options,
        { layoutDependency: i } = e.options;
      (void 0 === r || r !== i) &&
        ((e.resumeFrom = n),
        t && (n.preserveOpacity = !0),
        n.snapshot &&
          ((e.snapshot = n.snapshot),
          (e.snapshot.latestValues = n.animationValues || n.latestValues)),
        e.root?.isUpdating && (e.isLayoutDirty = !0)),
        !1 === e.options.crossfade && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => e.instance && e.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
let i7 = (e, t) => e.depth - t.depth;
class ae {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(e) {
    tn(this.children, e), (this.isDirty = !0);
  }
  remove(e) {
    tr(this.children, e), (this.isDirty = !0);
  }
  forEach(e) {
    this.isDirty && this.children.sort(i7),
      (this.isDirty = !1),
      this.children.forEach(e);
  }
}
let at = ["", "X", "Y", "Z"],
  an = 0;
function ar(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function ai({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(e = {}, n = t?.()) {
      (this.id = an++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(al),
            this.nodes.forEach(ag),
            this.nodes.forEach(ay),
            this.nodes.forEach(as);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = e),
        (this.root = n ? n.root || n : this),
        (this.path = n ? [...n.path, n] : []),
        (this.parent = n),
        (this.depth = n ? n.depth + 1 : 0);
      for (let e = 0; e < this.path.length; e++)
        this.path[e].shouldResetTransform = !0;
      this.root === this && (this.nodes = new ae());
    }
    addEventListener(e, t) {
      return (
        this.eventHandlers.has(e) || this.eventHandlers.set(e, new ti()),
        this.eventHandlers.get(e).add(t)
      );
    }
    notifyListeners(e, ...t) {
      let n = this.eventHandlers.get(e);
      n && n.notify(...t);
    }
    hasListeners(e) {
      return this.eventHandlers.has(e);
    }
    mount(t) {
      if (this.instance) return;
      (this.isSVG = ii(t) && !(ii(t) && "svg" === t.tagName)),
        (this.instance = t);
      let { layoutId: n, layout: r, visualElement: i } = this.options;
      if (
        (i && !i.current && i.mount(t),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0),
        e)
      ) {
        let n,
          r = 0,
          i = () => (this.root.updateBlockedByResize = !1);
        eX.read(() => {
          r = window.innerWidth;
        }),
          e(t, () => {
            let e = window.innerWidth;
            if (e !== r) {
              let t, a;
              (r = e),
                (this.root.updateBlockedByResize = !0),
                n && n(),
                (t = tC.now()),
                (a = ({ timestamp: e }) => {
                  let n = e - t;
                  n >= 250 && (eK(a), i());
                }),
                eX.setup(a, !0),
                (n = () => eK(a)),
                iD.hasAnimatedSinceResize &&
                  ((iD.hasAnimatedSinceResize = !1), this.nodes.forEach(am));
            }
          });
      }
      n && this.root.registerSharedNode(n, this),
        !1 !== this.options.animate &&
          i &&
          (n || r) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: e,
              hasLayoutChanged: t,
              hasRelativeLayoutChanged: n,
              layout: r,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              let a = this.options.transition || i.getDefaultTransition() || aS,
                { onLayoutAnimationStart: o, onLayoutAnimationComplete: l } =
                  i.getProps(),
                s = !this.targetLayout || !i5(this.targetLayout, r),
                u = !t && n;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                u ||
                (t && (s || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                let t = { ...n$(a, "layout"), onPlay: o, onComplete: l };
                (i.shouldReduceMotion || this.options.layoutRoot) &&
                  ((t.delay = 0), (t.type = !1)),
                  this.startAnimation(t),
                  this.setAnimationOrigin(e, u, t.path);
              } else
                t || am(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = r;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      let e = this.getStack();
      e && e.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        eK(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      !this.isUpdateBlocked() &&
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(av),
        this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: e } = this.options;
      return e && e.getProps().transformTemplate;
    }
    willUpdate(e = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          (function e(t) {
            if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
            let { visualElement: n } = t.options;
            if (!n) return;
            let r = n.props[n_];
            if (window.MotionHasOptimisedAnimation(r, "transform")) {
              let { layout: e, layoutId: n } = t.options;
              window.MotionCancelOptimisedAnimation(
                r,
                "transform",
                eX,
                !(e || n)
              );
            }
            let { parent: i } = t;
            i && !i.hasCheckedOptimisedAppear && e(i);
          })(this),
        this.root.isUpdating || this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let e = 0; e < this.path.length; e++) {
        let t = this.path[e];
        (t.shouldResetTransform = !0),
          ("string" == typeof t.latestValues.x ||
            "string" == typeof t.latestValues.y) &&
            (t.isLayoutDirty = !0),
          t.updateScroll("snapshot"),
          t.options.layoutRoot && t.willUpdate(!1);
      }
      let { layoutId: t, layout: n } = this.options;
      if (void 0 === t && !n) return;
      let r = this.getTransformTemplate();
      (this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        e && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        let e = this.updateBlockedByResize;
        this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          e && this.nodes.forEach(ad),
          this.nodes.forEach(ac);
        return;
      }
      if (this.animationId <= this.animationCommitId)
        return void this.nodes.forEach(af);
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(ap),
            this.nodes.forEach(ah),
            this.nodes.forEach(aa),
            this.nodes.forEach(ao))
          : this.nodes.forEach(af),
        this.clearAllSnapshots();
      let e = tC.now();
      (eZ.delta = M(0, 1e3 / 60, e - eZ.timestamp)),
        (eZ.timestamp = e),
        (eZ.isProcessing = !0),
        eJ.update.process(eZ),
        eJ.preRender.process(eZ),
        eJ.render.process(eZ),
        (eZ.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), tk.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(au), this.sharedNodes.forEach(ab);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        eX.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      eX.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      !this.snapshot &&
        this.instance &&
        ((this.snapshot = this.measure()),
        !this.snapshot ||
          r4(this.snapshot.measuredBox.x) ||
          r4(this.snapshot.measuredBox.y) ||
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
      let e = this.layout;
      (this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = ey()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      let { visualElement: t } = this.options;
      t &&
        t.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          e ? e.layoutBox : void 0
        );
    }
    updateScroll(e = "measure") {
      let t = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === e &&
          (t = !1),
        t && this.instance)
      ) {
        let t = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: e,
          isRoot: t,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : t,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      let e =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        t = this.projectionDelta && !i2(this.projectionDelta),
        n = this.getTransformTemplate(),
        r = n ? n(this.latestValues, "") : void 0,
        a = r !== this.prevTransformTemplateValue;
      e &&
        this.instance &&
        (t || no(this.latestValues) || a) &&
        (i(this.instance, r),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(e = !0) {
      var t;
      let n = this.measurePageBox(),
        r = this.removeElementScroll(n);
      return (
        e && (r = this.removeTransform(r)),
        aP((t = r).x),
        aP(t.y),
        {
          animationId: this.root.animationId,
          measuredBox: n,
          layoutBox: r,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: e } = this.options;
      if (!e) return ey();
      let t = e.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(aN))) {
        let { scroll: e } = this.root;
        e && (nd(t.x, e.offset.x), nd(t.y, e.offset.y));
      }
      return t;
    }
    removeElementScroll(e) {
      let t = ey();
      if ((iq(t, e), this.scroll?.wasRoot)) return t;
      for (let n = 0; n < this.path.length; n++) {
        let r = this.path[n],
          { scroll: i, options: a } = r;
        r !== this.root &&
          i &&
          a.layoutScroll &&
          (i.wasRoot && iq(t, e), nd(t.x, i.offset.x), nd(t.y, i.offset.y));
      }
      return t;
    }
    applyTransform(e, t = !1, n) {
      let r = n || ey();
      iq(r, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        !t &&
          n.options.layoutScroll &&
          n.scroll &&
          n !== n.root &&
          (nd(r.x, -n.scroll.offset.x), nd(r.y, -n.scroll.offset.y)),
          no(n.latestValues) && nh(r, n.latestValues, n.layout?.layoutBox);
      }
      return (
        no(this.latestValues) &&
          nh(r, this.latestValues, this.layout?.layoutBox),
        r
      );
    }
    removeTransform(e) {
      let t = ey();
      iq(t, e);
      for (let e = 0; e < this.path.length; e++) {
        let n,
          r = this.path[e];
        no(r.latestValues) &&
          (r.instance &&
            (na(r.latestValues) && r.updateSnapshot(),
            iq((n = ey()), r.measurePageBox())),
          i0(t, r.latestValues, r.snapshot?.layoutBox, n));
      }
      return no(this.latestValues) && i0(t, this.latestValues), t;
    }
    setTargetDelta(e) {
      (this.targetDelta = e),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(e) {
      this.options = {
        ...this.options,
        ...e,
        crossfade: void 0 === e.crossfade || e.crossfade,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== eZ.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(e = !1) {
      let t = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = t.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = t.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = t.isSharedProjectionDirty);
      let n = !!this.resumingFrom || this !== t;
      if (
        !(
          e ||
          (n && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      let { layout: r, layoutId: i } = this.options;
      if (!this.layout || !(r || i)) return;
      this.resolvedRelativeTargetAt = eZ.timestamp;
      let a = this.getClosestProjectingParent();
      if (
        (a &&
          this.linkedParentVersion !== a.layoutVersion &&
          !a.options.layoutRoot &&
          this.removeRelativeTarget(),
        this.targetDelta ||
          this.relativeTarget ||
          (!1 !== this.options.layoutAnchor && a && a.layout
            ? this.createRelativeTarget(
                a,
                this.layout.layoutBox,
                a.layout.layoutBox
              )
            : this.removeRelativeTarget()),
        this.relativeTarget || this.targetDelta)
      ) {
        if (
          (this.target ||
            ((this.target = ey()), (this.targetWithTransforms = ey())),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target)
        ) {
          var o, l, s, u;
          this.forceRelativeParentToResolveTarget(),
            (o = this.target),
            (l = this.relativeTarget),
            (s = this.relativeParent.target),
            (u = this.options.layoutAnchor || void 0),
            r8(o.x, l.x, s.x, u?.x),
            r8(o.y, l.y, s.y, u?.y);
        } else
          this.targetDelta
            ? (this.resumingFrom
                ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                : iq(this.target, this.layout.layoutBox),
              nc(this.target, this.targetDelta))
            : iq(this.target, this.layout.layoutBox);
        this.attemptToResolveRelativeTarget &&
          ((this.attemptToResolveRelativeTarget = !1),
          !1 !== this.options.layoutAnchor &&
          a &&
          !!a.resumingFrom == !!this.resumingFrom &&
          !a.options.layoutScroll &&
          a.target &&
          1 !== this.animationProgress
            ? this.createRelativeTarget(a, this.target, a.target)
            : (this.relativeParent = this.relativeTarget = void 0));
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          na(this.parent.latestValues) ||
          nl(this.parent.latestValues)
        )
      )
        if (this.parent.isProjecting()) return this.parent;
        else return this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(e, t, n) {
      (this.relativeParent = e),
        (this.linkedParentVersion = e.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = ey()),
        (this.relativeTargetOrigin = ey()),
        r7(
          this.relativeTargetOrigin,
          t,
          n,
          this.options.layoutAnchor || void 0
        ),
        iq(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      let e = this.getLead(),
        t = !!this.resumingFrom || this !== e,
        n = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1),
        t &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (n = !1),
        this.resolvedRelativeTargetAt === eZ.timestamp && (n = !1),
        n)
      )
        return;
      let { layout: r, layoutId: i } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(r || i))
      )
        return;
      iq(this.layoutCorrected, this.layout.layoutBox);
      let a = this.treeScale.x,
        o = this.treeScale.y;
      !(function (e, t, n, r = !1) {
        let i,
          a,
          o = n.length;
        if (o) {
          t.x = t.y = 1;
          for (let l = 0; l < o; l++) {
            a = (i = n[l]).projectionDelta;
            let { visualElement: o } = i.options;
            (!o || !o.props.style || "contents" !== o.props.style.display) &&
              (r &&
                i.options.layoutScroll &&
                i.scroll &&
                i !== i.root &&
                (nd(e.x, -i.scroll.offset.x), nd(e.y, -i.scroll.offset.y)),
              a && ((t.x *= a.x.scale), (t.y *= a.y.scale), nc(e, a)),
              r &&
                no(i.latestValues) &&
                nh(e, i.latestValues, i.layout?.layoutBox));
          }
          t.x < 1.0000000000001 && t.x > 0.999999999999 && (t.x = 1),
            t.y < 1.0000000000001 && t.y > 0.999999999999 && (t.y = 1);
        }
      })(this.layoutCorrected, this.treeScale, this.path, t),
        e.layout &&
          !e.target &&
          (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
          ((e.target = e.layout.layoutBox), (e.targetWithTransforms = ey()));
      let { target: l } = e;
      if (!l) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      this.projectionDelta && this.prevProjectionDelta
        ? (iG(this.prevProjectionDelta.x, this.projectionDelta.x),
          iG(this.prevProjectionDelta.y, this.projectionDelta.y))
        : this.createProjectionDeltas(),
        r6(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
        (this.treeScale.x === a &&
          this.treeScale.y === o &&
          i8(this.projectionDelta.x, this.prevProjectionDelta.x) &&
          i8(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", l));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(e = !0) {
      if ((this.options.visualElement?.scheduleRender(), e)) {
        let e = this.getStack();
        e && e.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = em()),
        (this.projectionDelta = em()),
        (this.projectionDeltaWithTransform = em());
    }
    setAnimationOrigin(e, t = !1, n) {
      let r,
        i = this.snapshot,
        a = i ? i.latestValues : {},
        o = { ...this.latestValues },
        l = em();
      (this.relativeParent && this.relativeParent.options.layoutRoot) ||
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !t);
      let s = ey(),
        u =
          (i ? i.source : void 0) !==
          (this.layout ? this.layout.source : void 0),
        c = this.getStack(),
        d = !c || c.members.length <= 1,
        f = !!(u && !d && !0 === this.options.crossfade && !this.path.some(ak));
      this.animationProgress = 0;
      let p = n?.interpolateProjection(e);
      (this.mixTargetDelta = (t) => {
        let n = t / 1e3,
          i = p?.(n);
        if (
          (i
            ? ((l.x.translate = i.x),
              (l.x.scale = t8(e.x.scale, 1, n)),
              (l.x.origin = e.x.origin),
              (l.x.originPoint = e.x.originPoint),
              (l.y.translate = i.y),
              (l.y.scale = t8(e.y.scale, 1, n)),
              (l.y.origin = e.y.origin),
              (l.y.originPoint = e.y.originPoint))
            : (ax(l.x, e.x, n), ax(l.y, e.y, n)),
          this.setTargetDelta(l),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout)
        ) {
          var c, h, m, g, y, v;
          r7(
            s,
            this.layout.layoutBox,
            this.relativeParent.layout.layoutBox,
            this.options.layoutAnchor || void 0
          ),
            (m = this.relativeTarget),
            (g = this.relativeTargetOrigin),
            (y = s),
            (v = n),
            aw(m.x, g.x, y.x, v),
            aw(m.y, g.y, y.y, v),
            r &&
              ((c = this.relativeTarget),
              (h = r),
              i3(c.x, h.x) && i3(c.y, h.y)) &&
              (this.isProjectionDirty = !1),
            r || (r = ey()),
            iq(r, this.relativeTarget);
        }
        u &&
          ((this.animationValues = o),
          (function (e, t, n, r, i, a) {
            i
              ? ((e.opacity = t8(0, n.opacity ?? 1, iW(r))),
                (e.opacityExit = t8(t.opacity ?? 1, 0, iH(r))))
              : a && (e.opacity = t8(t.opacity ?? 1, n.opacity ?? 1, r));
            for (let i = 0; i < iF; i++) {
              let a = iI[i],
                o = iU(t, a),
                l = iU(n, a);
              (void 0 !== o || void 0 !== l) &&
                (o || (o = 0),
                l || (l = 0),
                0 === o || 0 === l || i$(o) === i$(l)
                  ? ((e[a] = Math.max(t8(iB(o), iB(l), r), 0)),
                    (H.test(l) || H.test(o)) && (e[a] += "%"))
                  : (e[a] = l));
            }
            (t.rotate || n.rotate) &&
              (e.rotate = t8(t.rotate || 0, n.rotate || 0, r));
          })(o, a, this.latestValues, n, f, d)),
          i &&
            void 0 !== i.rotate &&
            (this.animationValues || (this.animationValues = o),
            (this.animationValues.pathRotation = i.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = n);
      }),
        this.mixTargetDelta(1e3 * !!this.options.layoutRoot);
    }
    startAnimation(e) {
      this.notifyListeners("animationStart"),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation &&
          (eK(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = eX.update(() => {
          var t, n, r;
          let i;
          (iD.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = tj(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation =
              ((t = this.motionValue),
              (n = [0, 1e3]),
              (r = {
                ...e,
                velocity: 0,
                isSync: !0,
                onUpdate: (t) => {
                  this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                },
                onComplete: () => {
                  e.onComplete && e.onComplete(), this.completeAnimation();
                },
              }),
              (i = ev(t) ? t : tj(t)).start(rW("", i, n, r)),
              i.animation)),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let e = this.getStack();
      e && e.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(1e3),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      let e = this.getLead(),
        { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
      if (t && n && r) {
        if (
          this !== e &&
          this.layout &&
          r &&
          aT(this.options.animationType, this.layout.layoutBox, r.layoutBox)
        ) {
          n = this.target || ey();
          let t = r4(this.layout.layoutBox.x);
          (n.x.min = e.target.x.min), (n.x.max = n.x.min + t);
          let r = r4(this.layout.layoutBox.y);
          (n.y.min = e.target.y.min), (n.y.max = n.y.min + r);
        }
        iq(t, n),
          nh(t, i),
          r6(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
      }
    }
    registerSharedNode(e, t) {
      this.sharedNodes.has(e) || this.sharedNodes.set(e, new i9()),
        this.sharedNodes.get(e).add(t);
      let n = t.options.initialPromotionConfig;
      t.promote({
        transition: n ? n.transition : void 0,
        preserveFollowOpacity:
          n && n.shouldPreserveFollowOpacity
            ? n.shouldPreserveFollowOpacity(t)
            : void 0,
      });
    }
    isLead() {
      let e = this.getStack();
      return !e || e.lead === this;
    }
    getLead() {
      let { layoutId: e } = this.options;
      return (e && this.getStack()?.lead) || this;
    }
    getPrevLead() {
      let { layoutId: e } = this.options;
      return e ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      let { layoutId: e } = this.options;
      if (e) return this.root.sharedNodes.get(e);
    }
    promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
      let r = this.getStack();
      r && r.promote(this, n),
        e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        t && this.setOptions({ transition: t });
    }
    relegate() {
      let e = this.getStack();
      return !!e && e.relegate(this);
    }
    resetSkewAndRotation() {
      let { visualElement: e } = this.options;
      if (!e) return;
      let t = !1,
        { latestValues: n } = e;
      if (
        ((n.z ||
          n.rotate ||
          n.rotateX ||
          n.rotateY ||
          n.rotateZ ||
          n.skewX ||
          n.skewY) &&
          (t = !0),
        !t)
      )
        return;
      let r = {};
      n.z && ar("z", e, r, this.animationValues);
      for (let t = 0; t < at.length; t++)
        ar(`rotate${at[t]}`, e, r, this.animationValues),
          ar(`skew${at[t]}`, e, r, this.animationValues);
      for (let t in (e.render(), r))
        e.setStaticValue(t, r[t]),
          this.animationValues && (this.animationValues[t] = r[t]);
      e.scheduleRender();
    }
    applyProjectionStyles(e, t) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        e.visibility = "hidden";
        return;
      }
      let n = this.getTransformTemplate();
      if (this.needsReset) {
        (this.needsReset = !1),
          (e.visibility = ""),
          (e.opacity = ""),
          (e.pointerEvents = nN(t?.pointerEvents) || ""),
          (e.transform = n ? n(this.latestValues, "") : "none");
        return;
      }
      let r = this.getLead();
      if (!this.projectionDelta || !this.layout || !r.target) {
        this.options.layoutId &&
          ((e.opacity =
            void 0 !== this.latestValues.opacity
              ? this.latestValues.opacity
              : 1),
          (e.pointerEvents = nN(t?.pointerEvents) || "")),
          this.hasProjected &&
            !no(this.latestValues) &&
            ((e.transform = n ? n({}, "") : "none"), (this.hasProjected = !1));
        return;
      }
      e.visibility = "";
      let i = r.animationValues || r.latestValues;
      this.applyTransformsToTarget();
      let a = (function (e, t, n) {
        let r = "",
          i = e.x.translate / t.x,
          a = e.y.translate / t.y,
          o = n?.z || 0;
        if (
          ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `),
          (1 !== t.x || 1 !== t.y) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
          n)
        ) {
          let {
            transformPerspective: e,
            rotate: t,
            pathRotation: i,
            rotateX: a,
            rotateY: o,
            skewX: l,
            skewY: s,
          } = n;
          e && (r = `perspective(${e}px) ${r}`),
            t && (r += `rotate(${t}deg) `),
            i && (r += `rotate(${i}deg) `),
            a && (r += `rotateX(${a}deg) `),
            o && (r += `rotateY(${o}deg) `),
            l && (r += `skewX(${l}deg) `),
            s && (r += `skewY(${s}deg) `);
        }
        let l = e.x.scale * t.x,
          s = e.y.scale * t.y;
        return (1 !== l || 1 !== s) && (r += `scale(${l}, ${s})`), r || "none";
      })(this.projectionDeltaWithTransform, this.treeScale, i);
      n && (a = n(i, a)), (e.transform = a);
      let { x: o, y: l } = this.projectionDelta;
      for (let t in ((e.transformOrigin = `${100 * o.origin}% ${
        100 * l.origin
      }% 0`),
      r.animationValues
        ? (e.opacity =
            r === this
              ? i.opacity ?? this.latestValues.opacity ?? 1
              : this.preserveOpacity
              ? this.latestValues.opacity
              : i.opacityExit)
        : (e.opacity =
            r === this
              ? void 0 !== i.opacity
                ? i.opacity
                : ""
              : void 0 !== i.opacityExit
              ? i.opacityExit
              : 0),
      t9)) {
        if (void 0 === i[t]) continue;
        let { correct: n, applyTo: o, isCSSVariable: l } = t9[t],
          s = "none" === a ? i[t] : n(i[t], r);
        if (o) {
          let t = o.length;
          for (let n = 0; n < t; n++) e[o[n]] = s;
        } else
          l ? (this.options.visualElement.renderState.vars[t] = s) : (e[t] = s);
      }
      this.options.layoutId &&
        (e.pointerEvents = r === this ? nN(t?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((e) => e.currentAnimation?.stop()),
        this.root.nodes.forEach(ac),
        this.root.sharedNodes.clear();
    }
  };
}
function aa(e) {
  e.updateLayout();
}
function ao(e) {
  let t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    let { layoutBox: n, measuredBox: r } = e.layout,
      { animationType: i } = e.options,
      a = t.source !== e.layout.source;
    if ("size" === i)
      r3((e) => {
        let r = a ? t.measuredBox[e] : t.layoutBox[e],
          i = r4(r);
        (r.min = n[e].min), (r.max = r.min + i);
      });
    else if ("x" === i || "y" === i) {
      let e = "x" === i ? "y" : "x";
      iQ(a ? t.measuredBox[e] : t.layoutBox[e], n[e]);
    } else
      aT(i, t.layoutBox, n) &&
        r3((r) => {
          let i = a ? t.measuredBox[r] : t.layoutBox[r],
            o = r4(n[r]);
          (i.max = i.min + o),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[r].max = e.relativeTarget[r].min + o));
        });
    let o = em();
    r6(o, n, t.layoutBox);
    let l = em();
    a ? r6(l, e.applyTransform(r, !0), t.measuredBox) : r6(l, n, t.layoutBox);
    let s = !i2(o),
      u = !1;
    if (!e.resumeFrom) {
      let r = e.getClosestProjectingParent();
      if (r && !r.resumeFrom) {
        let { snapshot: i, layout: a } = r;
        if (i && a) {
          let o = e.options.layoutAnchor || void 0,
            l = ey();
          r7(l, t.layoutBox, i.layoutBox, o);
          let s = ey();
          r7(s, n, a.layoutBox, o),
            i5(l, s) || (u = !0),
            r.options.layoutRoot &&
              ((e.relativeTarget = s),
              (e.relativeTargetOrigin = l),
              (e.relativeParent = r));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: n,
      snapshot: t,
      delta: l,
      layoutDelta: o,
      hasLayoutChanged: s,
      hasRelativeLayoutChanged: u,
    });
  } else if (e.isLead()) {
    let { onExitComplete: t } = e.options;
    t && t();
  }
  e.options.transition = void 0;
}
function al(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function as(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function au(e) {
  e.clearSnapshot();
}
function ac(e) {
  e.clearMeasurements();
}
function ad(e) {
  (e.isLayoutDirty = !0), e.updateLayout();
}
function af(e) {
  e.isLayoutDirty = !1;
}
function ap(e) {
  e.isAnimationBlocked &&
    e.layout &&
    !e.isLayoutDirty &&
    ((e.snapshot = e.layout), (e.isLayoutDirty = !0));
}
function ah(e) {
  let { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function am(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function ag(e) {
  e.resolveTargetDelta();
}
function ay(e) {
  e.calcProjection();
}
function av(e) {
  e.resetSkewAndRotation();
}
function ab(e) {
  e.removeLeadSnapshot();
}
function ax(e, t, n) {
  (e.translate = t8(t.translate, 0, n)),
    (e.scale = t8(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function aw(e, t, n, r) {
  (e.min = t8(t.min, n.min, r)), (e.max = t8(t.max, n.max, r));
}
function ak(e) {
  return e.animationValues && void 0 !== e.animationValues.opacityExit;
}
let aS = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  aE = (e) =>
    "u" > typeof navigator &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  aC = aE("applewebkit/") && !aE("chrome/") ? Math.round : eY;
function aP(e) {
  (e.min = aC(e.min)), (e.max = aC(e.max));
}
function aT(e, t, n) {
  return (
    "position" === e ||
    ("preserve-aspect" === e && !(0.2 >= Math.abs(i6(t) - i6(n))))
  );
}
function aN(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
let aj = ai({
    attachResizeListener: (e, t) => ir(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
    }),
    checkIsScrollRoot: () => !0,
  }),
  aA = { current: void 0 },
  aM = ai({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!aA.current) {
        let e = new aj({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (aA.current = e);
      }
      return aA.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = void 0 !== t ? t : "none";
    },
    checkIsScrollRoot: (e) => "fixed" === window.getComputedStyle(e).position,
  });
function aR(e, t) {
  let n = ia(e),
    r = new AbortController();
  return [n, { passive: !0, ...t, signal: r.signal }, () => r.abort()];
}
function aL(e, t, n) {
  let { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", "Start" === n);
  let i = r["onHover" + n];
  i && eX.postRender(() => i(t, ig(t)));
}
let az = (e, t) => !!t && (e === t || az(e, t.parentElement)),
  aD = new WeakSet();
function a_(e) {
  return (t) => {
    "Enter" === t.key && e(t);
  };
}
function aO(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
function aV(e) {
  return im(e) && !(r2.x || r2.y);
}
let aI = new WeakSet();
function aF(e, t, n) {
  let { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", "Start" === n);
  let i = r["onTap" + ("End" === n ? "" : n)];
  i && eX.postRender(() => i(t, ig(t)));
}
let aB = new WeakMap(),
  a$ = new WeakMap(),
  aU = (e) => {
    let t = aB.get(e.target);
    t && t(e);
  },
  aW = (e) => {
    e.forEach(aU);
  },
  aH = { some: 0, all: 1 },
  aY = (function (e, t) {
    if ("u" < typeof Proxy) return nI;
    let n = new Map(),
      r = (n, r) => nI(n, r, e, t);
    return new Proxy((e, t) => r(e, t), {
      get: (i, a) =>
        "create" === a
          ? r
          : (n.has(a) || n.set(a, nI(a, void 0, e, t)), n.get(a)),
    });
  })(
    {
      animation: {
        Feature: class extends r0 {
          constructor(e) {
            super(e),
              e.animationState ||
                (e.animationState = (function (e) {
                  let t = (t) =>
                      Promise.all(
                        t.map(({ animation: t, options: n }) =>
                          (function (e, t, n = {}) {
                            let r;
                            if (
                              (e.notify("AnimationStart", t), Array.isArray(t))
                            )
                              r = Promise.all(t.map((t) => rQ(e, t, n)));
                            else if ("string" == typeof t) r = rQ(e, t, n);
                            else {
                              let i =
                                "function" == typeof t ? nF(e, t, n.custom) : t;
                              r = Promise.all(rH(e, i, n));
                            }
                            return r.then(() => {
                              e.notify("AnimationComplete", t);
                            });
                          })(e, t, n)
                        )
                      ),
                    n = rJ(),
                    r = !0,
                    i = !1,
                    a = (t) => (n, r) => {
                      let i = nF(
                        e,
                        r,
                        "exit" === t ? e.presenceContext?.custom : void 0
                      );
                      if (i) {
                        let { transition: e, transitionEnd: t, ...r } = i;
                        n = { ...n, ...r, ...t };
                      }
                      return n;
                    };
                  function o(o) {
                    let { props: l } = e,
                      s =
                        (function e(t) {
                          if (!t) return;
                          if (!t.isControllingVariants) {
                            let n = (t.parent && e(t.parent)) || {};
                            return (
                              void 0 !== t.props.initial &&
                                (n.initial = t.props.initial),
                              n
                            );
                          }
                          let n = {};
                          for (let e = 0; e < rq; e++) {
                            let r = tD[e],
                              i = t.props[r];
                            (tL(i) || !1 === i) && (n[r] = i);
                          }
                          return n;
                        })(e.parent) || {},
                      u = [],
                      c = new Set(),
                      d = {},
                      f = 1 / 0;
                    for (let t = 0; t < rK; t++) {
                      var p, h;
                      let m = rX[t],
                        g = n[m],
                        y = void 0 !== l[m] ? l[m] : s[m],
                        v = tL(y),
                        b = m === o ? g.isActive : null;
                      !1 === b && (f = t);
                      let x = y === s[m] && y !== l[m] && v;
                      if (
                        (x && (r || i) && e.manuallyAnimateOnMount && (x = !1),
                        (g.protectedKeys = { ...d }),
                        (!g.isActive && null === b) ||
                          (!y && !g.prevProp) ||
                          tR(y) ||
                          "boolean" == typeof y)
                      )
                        continue;
                      if ("exit" === m && g.isActive && !0 !== b) {
                        g.prevResolvedValues &&
                          (d = { ...d, ...g.prevResolvedValues });
                        continue;
                      }
                      let w =
                          ((p = g.prevProp),
                          "string" == typeof (h = y)
                            ? h !== p
                            : !!Array.isArray(h) && !rG(h, p)),
                        k =
                          w ||
                          (m === o && g.isActive && !x && v) ||
                          (t > f && v),
                        S = !1,
                        E = Array.isArray(y) ? y : [y],
                        C = E.reduce(a(m), {});
                      !1 === b && (C = {});
                      let { prevResolvedValues: P = {} } = g,
                        T = { ...P, ...C },
                        N = (t) => {
                          (k = !0),
                            c.has(t) && ((S = !0), c.delete(t)),
                            (g.needsAnimating[t] = !0);
                          let n = e.getValue(t);
                          n && (n.liveStyle = !1);
                        };
                      for (let e in T) {
                        let t = C[e],
                          n = P[e];
                        if (!d.hasOwnProperty(e))
                          (nU(t) && nU(n) ? !rG(t, n) || w : t !== n)
                            ? null != t
                              ? N(e)
                              : c.add(e)
                            : void 0 !== t && c.has(e)
                            ? N(e)
                            : (g.protectedKeys[e] = !0);
                      }
                      (g.prevProp = y),
                        (g.prevResolvedValues = C),
                        g.isActive && (d = { ...d, ...C }),
                        (r || i) && e.blockInitialAnimation && (k = !1);
                      let j = x && w,
                        A = !j || S;
                      k &&
                        A &&
                        u.push(
                          ...E.map((t) => {
                            let n = { type: m };
                            if (
                              "string" == typeof t &&
                              (r || i) &&
                              !j &&
                              e.manuallyAnimateOnMount &&
                              e.parent
                            ) {
                              let { parent: r } = e,
                                i = nF(r, t);
                              if (r.enteringChildren && i) {
                                let { delayChildren: t } = i.transition || {};
                                n.delay = rY(r.enteringChildren, e, t);
                              }
                            }
                            return { animation: t, options: n };
                          })
                        );
                    }
                    if (c.size) {
                      let t = {};
                      if ("boolean" != typeof l.initial) {
                        let n = nF(
                          e,
                          Array.isArray(l.initial) ? l.initial[0] : l.initial
                        );
                        n && n.transition && (t.transition = n.transition);
                      }
                      c.forEach((n) => {
                        let r = e.getBaseTarget(n),
                          i = e.getValue(n);
                        i && (i.liveStyle = !0), (t[n] = r ?? null);
                      }),
                        u.push({ animation: t });
                    }
                    let m = !!u.length;
                    return (
                      r &&
                        (!1 === l.initial || l.initial === l.animate) &&
                        !e.manuallyAnimateOnMount &&
                        (m = !1),
                      (r = !1),
                      (i = !1),
                      m ? t(u) : Promise.resolve()
                    );
                  }
                  return {
                    animateChanges: o,
                    setActive: function (t, r) {
                      if (n[t].isActive === r) return Promise.resolve();
                      e.variantChildren?.forEach((e) =>
                        e.animationState?.setActive(t, r)
                      ),
                        (n[t].isActive = r);
                      let i = o(t);
                      for (let e in n) n[e].protectedKeys = {};
                      return i;
                    },
                    setAnimateFunction: function (n) {
                      t = n(e);
                    },
                    getState: () => n,
                    reset: () => {
                      (n = rJ()), (i = !0);
                    },
                  };
                })(e));
          }
          updateAnimationControlsSubscription() {
            let { animate: e } = this.node.getProps();
            tR(e) && (this.unmountControls = e.subscribe(this.node));
          }
          mount() {
            this.updateAnimationControlsSubscription();
          }
          update() {
            let { animate: e } = this.node.getProps(),
              { animate: t } = this.node.prevProps || {};
            e !== t && this.updateAnimationControlsSubscription();
          }
          unmount() {
            this.node.animationState.reset(), this.unmountControls?.();
          }
        },
      },
      exit: {
        Feature: class extends r0 {
          constructor() {
            super(...arguments), (this.id = r1++), (this.isExitComplete = !1);
          }
          update() {
            if (!this.node.presenceContext) return;
            let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
              { isPresent: n } = this.node.prevPresenceContext || {};
            if (!this.node.animationState || e === n) return;
            if (e && !1 === n) {
              if (this.isExitComplete) {
                let { initial: e, custom: t } = this.node.getProps();
                if (
                  "string" == typeof e ||
                  ("object" == typeof e && null !== e && !Array.isArray(e))
                ) {
                  let n = nF(this.node, e, t);
                  if (n) {
                    let { transition: e, transitionEnd: t, ...r } = n;
                    for (let e in r) this.node.getValue(e)?.jump(r[e]);
                  }
                }
                this.node.animationState.reset(),
                  this.node.animationState.animateChanges();
              } else this.node.animationState.setActive("exit", !1);
              this.isExitComplete = !1;
              return;
            }
            let r = this.node.animationState.setActive("exit", !e);
            t &&
              !e &&
              r.then(() => {
                (this.isExitComplete = !0), t(this.id);
              });
          }
          mount() {
            let { register: e, onExitComplete: t } =
              this.node.presenceContext || {};
            t && t(this.id), e && (this.unmount = e(this.id));
          }
          unmount() {}
        },
      },
      inView: {
        Feature: class extends r0 {
          constructor() {
            super(...arguments),
              (this.hasEnteredView = !1),
              (this.isInView = !1);
          }
          startObserver() {
            var e;
            let t;
            this.stopObserver?.();
            let { viewport: n = {} } = this.node.getProps(),
              { root: r, margin: i, amount: a = "some", once: o } = n,
              l = {
                root: r ? r.current : void 0,
                rootMargin: i,
                threshold: "number" == typeof a ? a : aH[a],
              },
              s = (e) => {
                let { isIntersecting: t } = e;
                if (
                  this.isInView === t ||
                  ((this.isInView = t), o && !t && this.hasEnteredView)
                )
                  return;
                t && (this.hasEnteredView = !0),
                  this.node.animationState &&
                    this.node.animationState.setActive("whileInView", t);
                let { onViewportEnter: n, onViewportLeave: r } =
                    this.node.getProps(),
                  i = t ? n : r;
                i && i(e);
              };
            this.stopObserver =
              ((e = this.node.current),
              (t = (function ({ root: e, ...t }) {
                let n = e || document;
                a$.has(n) || a$.set(n, {});
                let r = a$.get(n),
                  i = JSON.stringify(t);
                return (
                  r[i] ||
                    (r[i] = new IntersectionObserver(aW, { root: e, ...t })),
                  r[i]
                );
              })(l)),
              aB.set(e, s),
              t.observe(e),
              () => {
                aB.delete(e), t.unobserve(e);
              });
          }
          mount() {
            this.startObserver();
          }
          update() {
            if ("u" < typeof IntersectionObserver) return;
            let { props: e, prevProps: t } = this.node;
            ["amount", "margin", "root"].some(
              (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
                return (n) => e[n] !== t[n];
              })(e, t)
            ) && this.startObserver();
          }
          unmount() {
            this.stopObserver?.(),
              (this.hasEnteredView = !1),
              (this.isInView = !1);
          }
        },
      },
      tap: {
        Feature: class extends r0 {
          mount() {
            let { current: e } = this.node;
            if (!e) return;
            let { globalTapTarget: t, propagate: n } = this.node.props;
            this.unmount = (function (e, t, n = {}) {
              let [r, i, a] = aR(e, n),
                o = (e) => {
                  let r = e.currentTarget;
                  if (!aV(e) || aI.has(e)) return;
                  aD.add(r), n.stopPropagation && aI.add(e);
                  let a = t(r, e),
                    o = { ...i, capture: !0 },
                    l = (e, t) => {
                      window.removeEventListener("pointerup", s, o),
                        window.removeEventListener("pointercancel", u, o),
                        aD.has(r) && aD.delete(r),
                        aV(e) && "function" == typeof a && a(e, { success: t });
                    },
                    s = (e) => {
                      l(
                        e,
                        r === window ||
                          r === document ||
                          n.useGlobalTarget ||
                          az(r, e.target)
                      );
                    },
                    u = (e) => {
                      l(e, !1);
                    };
                  window.addEventListener("pointerup", s, o),
                    window.addEventListener("pointercancel", u, o);
                };
              return (
                r.forEach((e) => {
                  ((n.useGlobalTarget ? window : e).addEventListener(
                    "pointerdown",
                    o,
                    i
                  ),
                  v(e)) &&
                    (e.addEventListener("focus", (e) =>
                      ((e, t) => {
                        let n = e.currentTarget;
                        if (!n) return;
                        let r = a_(() => {
                          if (aD.has(n)) return;
                          aO(n, "down");
                          let e = a_(() => {
                            aO(n, "up");
                          });
                          n.addEventListener("keyup", e, t),
                            n.addEventListener(
                              "blur",
                              () => aO(n, "cancel"),
                              t
                            );
                        });
                        n.addEventListener("keydown", r, t),
                          n.addEventListener(
                            "blur",
                            () => n.removeEventListener("keydown", r),
                            t
                          );
                      })(e, i)
                    ),
                    ie.has(e.tagName) ||
                      !0 === e.isContentEditable ||
                      e.hasAttribute("tabindex") ||
                      (e.tabIndex = 0));
                }),
                a
              );
            })(
              e,
              (e, t) => (
                aF(this.node, t, "Start"),
                (e, { success: t }) => aF(this.node, e, t ? "End" : "Cancel")
              ),
              { useGlobalTarget: t, stopPropagation: n?.tap === !1 }
            );
          }
          unmount() {}
        },
      },
      focus: {
        Feature: class extends r0 {
          constructor() {
            super(...arguments), (this.isActive = !1);
          }
          onFocus() {
            let e = !1;
            try {
              e = this.node.current.matches(":focus-visible");
            } catch (t) {
              e = !0;
            }
            e &&
              this.node.animationState &&
              (this.node.animationState.setActive("whileFocus", !0),
              (this.isActive = !0));
          }
          onBlur() {
            this.isActive &&
              this.node.animationState &&
              (this.node.animationState.setActive("whileFocus", !1),
              (this.isActive = !1));
          }
          mount() {
            this.unmount = nH(
              ir(this.node.current, "focus", () => this.onFocus()),
              ir(this.node.current, "blur", () => this.onBlur())
            );
          }
          unmount() {}
        },
      },
      hover: {
        Feature: class extends r0 {
          mount() {
            let { current: e } = this.node;
            e &&
              (this.unmount = (function (e, t, n = {}) {
                let [r, i, a] = aR(e, n);
                return (
                  r.forEach((e) => {
                    let n,
                      r = !1,
                      a = !1,
                      o = (t) => {
                        n && (n(t), (n = void 0)),
                          e.removeEventListener("pointerleave", s);
                      },
                      l = (e) => {
                        (r = !1),
                          window.removeEventListener("pointerup", l),
                          window.removeEventListener("pointercancel", l),
                          a && ((a = !1), o(e));
                      },
                      s = (e) => {
                        if ("touch" !== e.pointerType) {
                          if (r) {
                            a = !0;
                            return;
                          }
                          o(e);
                        }
                      };
                    e.addEventListener(
                      "pointerenter",
                      (r) => {
                        if ("touch" === r.pointerType || r2.x || r2.y) return;
                        a = !1;
                        let o = t(e, r);
                        "function" == typeof o &&
                          ((n = o), e.addEventListener("pointerleave", s, i));
                      },
                      i
                    ),
                      e.addEventListener(
                        "pointerdown",
                        () => {
                          (r = !0),
                            window.addEventListener("pointerup", l, i),
                            window.addEventListener("pointercancel", l, i);
                        },
                        i
                      );
                  }),
                  a
                );
              })(
                e,
                (e, t) => (
                  aL(this.node, t, "Start"), (e) => aL(this.node, e, "End")
                )
              ));
          }
          unmount() {}
        },
      },
      pan: {
        Feature: class extends r0 {
          constructor() {
            super(...arguments), (this.removePointerDownListener = eY);
          }
          onPointerDown(e) {
            this.session = new iw(e, this.createPanHandlers(), {
              transformPagePoint: this.node.getTransformPagePoint(),
              contextWindow: iv(this.node),
            });
          }
          createPanHandlers() {
            let {
              onPanSessionStart: e,
              onPanStart: t,
              onPan: n,
              onPanEnd: r,
            } = this.node.getProps();
            return {
              onSessionStart: iz(e),
              onStart: iz(t),
              onMove: iz(n),
              onEnd: (e, t) => {
                delete this.session, r && eX.postRender(() => r(e, t));
              },
            };
          }
          mount() {
            this.removePointerDownListener = iy(
              this.node.current,
              "pointerdown",
              (e) => this.onPointerDown(e)
            );
          }
          update() {
            this.session &&
              this.session.updateHandlers(this.createPanHandlers());
          }
          unmount() {
            this.removePointerDownListener(),
              this.session && this.session.end();
          }
        },
      },
      drag: {
        Feature: class extends r0 {
          constructor(e) {
            super(e),
              (this.removeGroupControls = eY),
              (this.removeListeners = eY),
              (this.controls = new iM(e));
          }
          mount() {
            let { dragControls: e } = this.node.getProps();
            e && (this.removeGroupControls = e.subscribe(this.controls)),
              (this.removeListeners = this.controls.addListeners() || eY);
          }
          update() {
            let { dragControls: e } = this.node.getProps(),
              { dragControls: t } = this.node.prevProps || {};
            e !== t &&
              (this.removeGroupControls(),
              e && (this.removeGroupControls = e.subscribe(this.controls)));
          }
          unmount() {
            this.removeGroupControls(),
              this.removeListeners(),
              this.controls.isDragging || this.controls.endPanSession();
          }
        },
        ProjectionNode: aM,
        MeasureLayout: iV,
      },
      layout: { ProjectionNode: aM, MeasureLayout: iV },
    },
    (e, t) =>
      t.isSVG ?? nv(e)
        ? new nn(t)
        : new ng(t, { allowProjection: e !== d.Fragment })
  );
var d = s("2YQ6R");
let aQ = (...e) =>
    e
      .filter((e, t, n) => !!e && "" !== e.trim() && n.indexOf(e) === t)
      .join(" ")
      .trim(),
  aq = (e) => {
    let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
      n ? n.toUpperCase() : t.toLowerCase()
    );
    return t.charAt(0).toUpperCase() + t.slice(1);
  };
var d = s("2YQ6R"),
  aG = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  d = s("2YQ6R");
let aX = (0, d.createContext)({}),
  aK = (0, d.forwardRef)(
    (
      {
        color: e,
        size: t,
        strokeWidth: n,
        absoluteStrokeWidth: r,
        className: i = "",
        children: a,
        iconNode: o,
        ...l
      },
      s
    ) => {
      let {
          size: u = 24,
          strokeWidth: c = 2,
          absoluteStrokeWidth: f = !1,
          color: p = "currentColor",
          className: h = "",
        } = (0, d.useContext)(aX) ?? {},
        m = r ?? f ? (24 * Number(n ?? c)) / Number(t ?? u) : n ?? c;
      return (0, d.createElement)(
        "svg",
        {
          ref: s,
          ...aG,
          width: t ?? u ?? aG.width,
          height: t ?? u ?? aG.height,
          stroke: e ?? p,
          strokeWidth: m,
          className: aQ("lucide", h, i),
          ...(!a &&
            !((e) => {
              for (let t in e)
                if (t.startsWith("aria-") || "role" === t || "title" === t)
                  return !0;
              return !1;
            })(l) && { "aria-hidden": "true" }),
          ...l,
        },
        [
          ...o.map(([e, t]) => (0, d.createElement)(e, t)),
          ...(Array.isArray(a) ? a : [a]),
        ]
      );
    }
  ),
  aZ = (e, t) => {
    let n = (0, d.forwardRef)(({ className: n, ...r }, i) =>
      (0, d.createElement)(aK, {
        ref: i,
        iconNode: t,
        className: aQ(
          `lucide-${aq(e)
            .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
            .toLowerCase()}`,
          `lucide-${e}`,
          n
        ),
        ...r,
      })
    );
    return (n.displayName = aq(e)), n;
  },
  aJ = aZ("x", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  a0 = aZ("menu", [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ]),
  a1 = "Reza Narimani",
  a2 = "namireza",
  a3 = "https://wa.me/989396006241",
  a4 = "https://linkedin.com/in/rezanarimani",
  a5 = "https://calendly.com/rezana/30min",
  a6 = [
    "Dental Clinics",
    "Business Coaches",
    "Content Creators",
    "Yoga Studios",
    "Law Practices",
    "Home Renovation",
  ],
  a8 = [
    {
      title: "Broken or Poor Mobile Experience",
      body: "Most of your customers browse on phones, but your site is slow, hard to read, or frustrating to use.",
    },
    {
      title: "Visitors Leave Confused",
      body: "People don't instantly understand what you offer or how you can help them.",
    },
    {
      title: "Your Value Is Not Clear",
      body: "Your strengths, experience, and personality are buried, so visitors don't see why they should choose you.",
    },
    {
      title: "No Trust or Credibility",
      body: "Outdated design and lack of social proof make your business look less professional.",
    },
    {
      title: "No Clear Next Step",
      body: "Visitors don't know what to do next, so they just leave.",
    },
  ],
  a9 = [
    "A modern website that perfectly represents your brand",
    "Clear messaging that speaks directly to your ideal clients",
    "Mobile-friendly design that works great on phones",
    "Strong calls-to-action that encourage people to contact you",
    "A site you'll be proud to share",
  ],
  a7 = [
    {
      title: "Mobile-First Design",
      body: "Every page is designed for an exceptional mobile experience first.",
    },
    {
      title: "Performance Focused",
      body: "Fast-loading pages built with modern web technologies.",
    },
    {
      title: "Conversion-Oriented",
      body: "Every section has a clear business goal and CTA.",
    },
    {
      title: "SEO Foundations",
      body: "Semantic HTML, accessibility, and technical SEO built in from day one.",
    },
  ],
  oe = [
    {
      industry: "Dental Clinic",
      tag: "Local service business",
      problem:
        "The website had poor mobile usability, weak visual hierarchy, and unclear calls-to-action.",
      redesign:
        "Improved spacing, typography, mobile navigation, trust signals, and a clear appointment CTA.",
      impact:
        "A smoother user journey designed to encourage more appointment requests.",
    },
    {
      industry: "LinkedIn Content Creator",
      tag: "Personal brand",
      problem:
        "The personal site felt generic and didn't reflect the creator's voice, making it hard for visitors to connect or take the next step.",
      redesign:
        "A bolder, personality-led layout with clearer positioning, a content showcase, and a simple way to start a conversation.",
      impact:
        "A page designed to turn casual visitors into followers and warm leads.",
    },
    {
      industry: "Business Coach",
      tag: "Personal brand / services",
      problem:
        "The site buried the offer beneath long paragraphs, with no clear path to booking a call.",
      redesign:
        "A focused, benefit-led structure with a single clear call-to-action and simplified messaging throughout.",
      impact:
        "A page built to reduce hesitation and guide visitors straight toward booking a call.",
    },
    {
      industry: "Home Renovation Business",
      tag: "Local service business",
      problem:
        "Visitors couldn't tell what services were offered or how to request a quote without scrolling through unclear sections.",
      redesign:
        "A simplified service breakdown, before/after-style visuals, and a streamlined quote request flow.",
      impact:
        "A clearer path designed to help serious leads reach out with less friction.",
    },
  ],
  ot = [
    {
      n: "01",
      title: "Discovery Call",
      body: "We discuss your goals and vision.",
    },
    { n: "02", title: "Proposal", body: "Clear scope and fixed price." },
    {
      n: "03",
      title: "Content & Strategy",
      body: "I guide you on what we need.",
    },
    { n: "04", title: "Custom Design", body: "Tailored to your brand." },
    {
      n: "05",
      title: "Development & Testing",
      body: "Fast, secure, and mobile-ready.",
    },
    {
      n: "06",
      title: "Launch & Support",
      body: "Go live with revisions and training.",
    },
  ],
  on = [
    {
      title: "Transparent Communication",
      body: "You'll always know where things stand — no vague updates, no disappearing acts.",
    },
    {
      title: "No Hidden Costs",
      body: "One fixed price, agreed before any work starts. What we agree on is what you pay.",
    },
    {
      title: "Weekly Progress Updates",
      body: "Short, regular check-ins so you're never left wondering what's happening.",
    },
    {
      title: "Direct Collaboration",
      body: "You work directly with me — no account managers, no middlemen.",
    },
    {
      title: "Conversion-Focused Decisions",
      body: "Every design choice is made to help visitors take action, not just to look nice.",
    },
    {
      title: "Modern Development Standards",
      body: "Clean, accessible, well-structured code built to last — not a drag-and-drop template.",
    },
  ],
  or = [
    {
      q: "Who do you work with?",
      a: "Small business owners and personal brands who already have customers, but whose website isn't helping them get more — shops, studios, clinics, trades, and local services.",
    },
    {
      q: "How long does it take to build a website?",
      a: "Most small-business sites take 2–3 weeks from our first chat to launch day. Bigger projects usually take 4–6 weeks.",
    },
    {
      q: "What if I don't have content ready?",
      a: "That's completely normal. I'll guide you with a simple questionnaire and write the copy for you, based on the basics you share about your business.",
    },
    {
      q: "Do you redesign existing websites?",
      a: "Yes — if the foundation is solid, we can redesign on top of it. I'll always tell you honestly whether that's realistic, or whether a fresh start will save you money in the long run.",
    },
    {
      q: "How much does it cost?",
      a: "One fixed price, agreed before any work starts, so you always know the number before you commit. Most projects fall between $900–$2,200 depending on size.",
    },
    {
      q: "Will my website be mobile friendly?",
      a: "Always. Every site I build is designed mobile-first, since most of your visitors will be browsing on their phones.",
    },
    {
      q: "Do you provide support after launch?",
      a: "Yes. Two weeks of support and two rounds of revisions are included with every project, plus simple monthly support after that if you'd like it.",
    },
  ],
  oi = [
    { href: "#work", label: "Case Studies" },
    { href: "#process", label: "How it works" },
    { href: "#testimonials", label: "What to expect" },
    { href: "#faq", label: "FAQ" },
  ];
function oa() {
  let [e, t] = (0, d.useState)(!1),
    [n, r] = (0, d.useState)(!1);
  return (
    (0, d.useEffect)(() => {
      let e = () => t(window.scrollY > 8);
      return (
        window.addEventListener("scroll", e),
        () => window.removeEventListener("scroll", e)
      );
    }, []),
    (0, d.useEffect)(
      () => (
        (document.body.style.overflow = n ? "hidden" : ""),
        () => {
          document.body.style.overflow = "";
        }
      ),
      [n]
    ),
    (0, c.jsxs)("header", {
      className: `sticky top-0 z-50 border-b transition-colors ${
        e || n
          ? "border-hairline bg-paper/90 backdrop-blur"
          : "border-transparent bg-transparent"
      }`,
      children: [
        (0, c.jsxs)("div", {
          className:
            "mx-auto flex max-w-6xl items-center justify-between px-6 py-4",
          children: [
            (0, c.jsx)("a", {
              href: "#top",
              className:
                "font-display text-lg font-semibold tracking-tight text-inkdark",
              children: a1,
            }),
            (0, c.jsx)("nav", {
              className:
                "hidden items-center gap-8 text-sm text-inkdim md:flex",
              children: oi.map((e) =>
                (0, c.jsx)(
                  "a",
                  {
                    href: e.href,
                    className: "transition-colors hover:text-inkdark",
                    children: e.label,
                  },
                  e.href
                )
              ),
            }),
            (0, c.jsxs)("div", {
              className: "flex items-center gap-3",
              children: [
                (0, c.jsx)("a", {
                  href: "#contact",
                  className:
                    "hidden rounded-full bg-inkdark px-5 py-2 text-sm font-medium text-paper transition-colors hover:bg-gold2 sm:inline-block",
                  children: "Get in touch",
                }),
                (0, c.jsx)("button", {
                  type: "button",
                  onClick: () => r((e) => !e),
                  "aria-label": n ? "Close menu" : "Open menu",
                  "aria-expanded": n,
                  className:
                    "flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-inkdark md:hidden",
                  children: n
                    ? (0, c.jsx)(aJ, { className: "h-5 w-5" })
                    : (0, c.jsx)(a0, { className: "h-5 w-5" }),
                }),
              ],
            }),
          ],
        }),
        (0, c.jsx)(N, {
          children:
            n &&
            (0, c.jsx)(aY.div, {
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: { duration: 0.25 },
              className:
                "overflow-hidden border-t border-hairline bg-paper md:hidden",
              children: (0, c.jsxs)("nav", {
                className: "flex flex-col px-6 py-4 text-sm text-inkdim",
                children: [
                  oi.map((e) =>
                    (0, c.jsx)(
                      "a",
                      {
                        href: e.href,
                        onClick: () => r(!1),
                        className:
                          "border-b border-hairline py-3 transition-colors hover:text-inkdark",
                        children: e.label,
                      },
                      e.href
                    )
                  ),
                  (0, c.jsx)("a", {
                    href: "#contact",
                    onClick: () => r(!1),
                    className:
                      "mt-4 rounded-full bg-inkdark px-5 py-2.5 text-center font-medium text-paper transition-colors hover:bg-gold2",
                    children: "Get in touch",
                  }),
                ],
              }),
            }),
        }),
      ],
    })
  );
}
function oo() {
  let e = [...a6, ...a6];
  return (0, c.jsxs)("section", {
    className: "overflow-hidden border-b border-hairline bg-paper py-10",
    children: [
      (0, c.jsx)("p", {
        className:
          "text-center text-xs font-semibold uppercase tracking-[0.18em] text-inkdim",
        children: "Industries I design for",
      }),
      (0, c.jsxs)("div", {
        className: "relative mt-6 w-full overflow-hidden",
        children: [
          (0, c.jsx)("div", {
            className: "flex w-max items-center gap-12",
            style: { animation: "marquee 28s linear infinite" },
            children: e.map((e, t) =>
              (0, c.jsx)(
                "span",
                {
                  className:
                    "whitespace-nowrap font-display text-base text-inkdim/70",
                  children: e,
                },
                `${e}-${t}`
              )
            ),
          }),
          (0, c.jsx)("div", {
            className:
              "pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-paper to-transparent",
          }),
          (0, c.jsx)("div", {
            className:
              "pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-paper to-transparent",
          }),
        ],
      }),
    ],
  });
}
function ol() {
  return (0, c.jsx)("footer", {
    className: "bg-forest text-cream",
    children: (0, c.jsxs)("div", {
      className: "mx-auto max-w-6xl px-6 py-14",
      children: [
        (0, c.jsxs)("div", {
          className: "grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]",
          children: [
            (0, c.jsxs)("div", {
              children: [
                (0, c.jsx)("p", {
                  className: "font-display text-lg font-semibold",
                  children: a1,
                }),
                (0, c.jsx)("p", {
                  className: "mt-2 max-w-xs text-sm text-creamdim",
                  children:
                    "Web designer building clear, conversion-focused websites for small businesses and personal brands.",
                }),
              ],
            }),
            (0, c.jsxs)("div", {
              children: [
                (0, c.jsx)("p", {
                  className:
                    "text-xs font-semibold uppercase tracking-wide text-creamdim",
                  children: "Get in touch",
                }),
                (0, c.jsxs)("ul", {
                  className: "mt-3 space-y-2 text-sm",
                  children: [
                    (0, c.jsx)("li", {
                      children: (0, c.jsx)("a", {
                        className: "transition-colors hover:text-gold",
                        href: a5,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Book a call (Calendly)",
                      }),
                    }),
                    (0, c.jsx)("li", {
                      children: (0, c.jsx)("a", {
                        className: "transition-colors hover:text-gold",
                        href: `mailto:${a2}`,
                        children: a2,
                      }),
                    }),
                    (0, c.jsx)("li", {
                      children: (0, c.jsx)("a", {
                        className: "transition-colors hover:text-gold",
                        href: a3,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "WhatsApp",
                      }),
                    }),
                    (0, c.jsx)("li", {
                      children: (0, c.jsx)("a", {
                        className: "transition-colors hover:text-gold",
                        href: a4,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "LinkedIn",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, c.jsxs)("div", {
              children: [
                (0, c.jsx)("p", {
                  className:
                    "text-xs font-semibold uppercase tracking-wide text-creamdim",
                  children: "Explore",
                }),
                (0, c.jsxs)("ul", {
                  className: "mt-3 space-y-2 text-sm",
                  children: [
                    (0, c.jsx)("li", {
                      children: (0, c.jsx)("a", {
                        className: "transition-colors hover:text-gold",
                        href: "#work",
                        children: "Case studies",
                      }),
                    }),
                    (0, c.jsx)("li", {
                      children: (0, c.jsx)("a", {
                        className: "transition-colors hover:text-gold",
                        href: "#process",
                        children: "How it works",
                      }),
                    }),
                    (0, c.jsx)("li", {
                      children: (0, c.jsx)("a", {
                        className: "transition-colors hover:text-gold",
                        href: "#testimonials",
                        children: "What to expect",
                      }),
                    }),
                    (0, c.jsx)("li", {
                      children: (0, c.jsx)("a", {
                        className: "transition-colors hover:text-gold",
                        href: "#faq",
                        children: "FAQ",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, c.jsxs)(aY.div, {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: !0 },
          className:
            "mt-12 flex flex-col gap-2 border-t border-hairlineDark pt-6 text-xs text-creamdim sm:flex-row sm:items-center sm:justify-between",
          children: [
            (0, c.jsxs)("span", {
              children: ["© 2026 ", a1, ""],
            }),
            (0, c.jsx)("span", {
              children:
                "",
            }),
          ],
        }),
      ],
    }),
  });
}
var d = (s("2YQ6R"), s("2YQ6R"));
function os(e, t) {
  let n,
    r = () => {
      let { currentTime: r } = t,
        i = (null === r ? 0 : r.value) / 100;
      n !== i && e(i), (n = i);
    };
  return eX.preUpdate(r, !0), () => eK(r);
}
function ou(e) {
  return !("u" < typeof window) && (e ? tc() : tu());
}
let oc = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  od = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function of(e, t, n, r) {
  let i = n[t],
    { length: a, position: o } = od[t],
    l = i.current,
    s = n.time;
  (i.current = Math.abs(e[`scroll${o}`])),
    (i.scrollLength = e[`scroll${a}`] - e[`client${a}`]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = rE(0, i.scrollLength, i.current));
  let u = r - s;
  i.velocity = u > 50 ? 0 : tP(i.current - l, u);
}
let op = { start: 0, center: 0.5, end: 1 };
function oh(e, t, n = 0) {
  let r = 0;
  if ((e in op && (e = op[e]), "string" == typeof e)) {
    let t = parseFloat(e);
    e.endsWith("px")
      ? (r = t)
      : e.endsWith("%")
      ? (e = t / 100)
      : e.endsWith("vw")
      ? (r = (t / 100) * document.documentElement.clientWidth)
      : e.endsWith("vh")
      ? (r = (t / 100) * document.documentElement.clientHeight)
      : (e = t);
  }
  return "number" == typeof e && (r = t * e), n + r;
}
let om = [0, 0],
  og = [
    [0, 0],
    [1, 1],
  ],
  oy = { x: 0, y: 0 },
  ov = new WeakMap(),
  ob = new WeakMap(),
  ox = new WeakMap(),
  ow = new WeakMap(),
  ok = new WeakMap(),
  oS = (e) => (e === document.scrollingElement ? window : e);
function oE(
  e,
  {
    container: t = document.scrollingElement,
    trackContentSize: n = !1,
    ...r
  } = {}
) {
  if (!t) return eY;
  let i = ox.get(t);
  i || ((i = new Set()), ox.set(t, i));
  let a = (function (e, t, n, r = {}) {
    return {
      measure: (t) => {
        !(function (e, t = e, n) {
          if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
            let r = t;
            for (; r && r !== e; )
              (n.x.targetOffset += r.offsetLeft),
                (n.y.targetOffset += r.offsetTop),
                (r = r.offsetParent);
          }
          (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
            (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
            (n.x.containerLength = e.clientWidth),
            (n.y.containerLength = e.clientHeight);
        })(e, r.target, n),
          of(e, "x", n, t),
          of(e, "y", n, t),
          (n.time = t),
          (r.offset || r.target) &&
            (function (e, t, n) {
              let { offset: r = og } = n,
                { target: i = e, axis: a = "y" } = n,
                o = "y" === a ? "height" : "width",
                l =
                  i !== e
                    ? (function (e, t) {
                        let n = { x: 0, y: 0 },
                          r = e;
                        for (; r && r !== t; )
                          if (v(r))
                            (n.x += r.offsetLeft),
                              (n.y += r.offsetTop),
                              (r = r.offsetParent);
                          else if ("svg" === r.tagName) {
                            let e = r.getBoundingClientRect(),
                              t = (r = r.parentElement).getBoundingClientRect();
                            (n.x += e.left - t.left), (n.y += e.top - t.top);
                          } else if (r instanceof SVGGraphicsElement) {
                            let { x: e, y: t } = r.getBBox();
                            (n.x += e), (n.y += t);
                            let i = null,
                              a = r.parentNode;
                            for (; !i; )
                              "svg" === a.tagName && (i = a),
                                (a = r.parentNode);
                            r = i;
                          } else break;
                        return n;
                      })(i, e)
                    : oy,
                s =
                  i === e
                    ? { width: e.scrollWidth, height: e.scrollHeight }
                    : "getBBox" in i && "svg" !== i.tagName
                    ? i.getBBox()
                    : { width: i.clientWidth, height: i.clientHeight },
                u = { width: e.clientWidth, height: e.clientHeight };
              t[a].offset.length = 0;
              let c = !t[a].interpolate,
                d = r.length;
              for (let e = 0; e < d; e++) {
                let n = (function (e, t, n, r) {
                  let i = Array.isArray(e) ? e : om,
                    a = 0;
                  return (
                    "number" == typeof e
                      ? (i = [e, e])
                      : "string" == typeof e &&
                        (i = (e = e.trim()).includes(" ")
                          ? e.split(" ")
                          : [e, op[e] ? e : "0"]),
                    (a = oh(i[0], n, r)) - oh(i[1], t)
                  );
                })(r[e], u[o], s[o], l[a]);
                c || n === t[a].interpolatorOffsets[e] || (c = !0),
                  (t[a].offset[e] = n);
              }
              c &&
                ((t[a].interpolate = rC(t[a].offset, rP(r), { clamp: !1 })),
                (t[a].interpolatorOffsets = [...t[a].offset])),
                (t[a].progress = M(0, 1, t[a].interpolate(t[a].current)));
            })(e, n, r);
      },
      notify: () => t(n),
    };
  })(t, e, { time: 0, x: oc(), y: oc() }, r);
  if ((i.add(a), !ov.has(t))) {
    let e = () => {
        for (let e of i) e.measure(eZ.timestamp);
        eX.preUpdate(n);
      },
      n = () => {
        for (let e of i) e.notify();
      },
      r = () => eX.read(e);
    ov.set(t, r);
    let a = oS(t);
    window.addEventListener("resize", r),
      t !== document.documentElement && ob.set(t, ih(t, r)),
      a.addEventListener("scroll", r),
      r();
  }
  if (n && !ok.has(t)) {
    let e = ov.get(t),
      n = { width: t.scrollWidth, height: t.scrollHeight };
    ow.set(t, n);
    let r = eX.read(() => {
      let r = t.scrollWidth,
        i = t.scrollHeight;
      (n.width !== r || n.height !== i) && (e(), (n.width = r), (n.height = i));
    }, !0);
    ok.set(t, r);
  }
  let o = ov.get(t);
  return (
    eX.read(o, !1, !0),
    () => {
      eK(o);
      let e = ox.get(t);
      if (!e || (e.delete(a), e.size)) return;
      let n = ov.get(t);
      ov.delete(t),
        n &&
          (oS(t).removeEventListener("scroll", n),
          ob.get(t)?.(),
          window.removeEventListener("resize", n));
      let r = ok.get(t);
      r && (eK(r), ok.delete(t)), ow.delete(t);
    }
  );
}
let oC = [
    [
      [
        [0, 1],
        [1, 1],
      ],
      "entry",
    ],
    [
      [
        [0, 0],
        [1, 0],
      ],
      "exit",
    ],
    [
      [
        [1, 0],
        [0, 1],
      ],
      "cover",
    ],
    [og, "contain"],
  ],
  oP = { start: 0, end: 1 };
function oT(e) {
  if (!e) return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
  for (let [t, n] of oC)
    if (
      (function (e, t) {
        let n = (function (e) {
          if (2 !== e.length) return;
          let t = [];
          for (let n of e)
            if (Array.isArray(n)) t.push(n);
            else {
              if ("string" != typeof n) return;
              let e = (function (e) {
                let t = e.trim().split(/\s+/);
                if (2 !== t.length) return;
                let n = oP[t[0]],
                  r = oP[t[1]];
                if (void 0 !== n && void 0 !== r) return [n, r];
              })(n);
              if (!e) return;
              t.push(e);
            }
          return t;
        })(e);
        if (!n) return !1;
        for (let e = 0; e < 2; e++) {
          let r = n[e],
            i = t[e];
          if (r[0] !== i[0] || r[1] !== i[1]) return !1;
        }
        return !0;
      })(e, t)
    )
      return { rangeStart: `${n} 0%`, rangeEnd: `${n} 100%` };
}
let oN = new Map();
function oj(e) {
  let t = { value: 0 },
    n = oE((n) => {
      t.value = 100 * n[e.axis].progress;
    }, e);
  return { currentTime: t, cancel: n };
}
function oA({ source: e, container: t, ...n }) {
  let { axis: r } = n;
  e && (t = e);
  let i = oN.get(t);
  i || ((i = new Map()), oN.set(t, i));
  let a = n.target ?? "self",
    o = i.get(a);
  o || ((o = {}), i.set(a, o));
  let l = r + (n.offset ?? []).join(",");
  return (
    o[l] ||
      (n.target && ou(n.target)
        ? oT(n.offset)
          ? (o[l] = new ViewTimeline({ subject: n.target, axis: r }))
          : (o[l] = oj({ container: t, ...n }))
        : ou()
        ? (o[l] = new ScrollTimeline({ source: t, axis: r }))
        : (o[l] = oj({ container: t, ...n }))),
    o[l]
  );
}
function oM(
  e,
  { axis: t = "y", container: n = document.scrollingElement, ...r } = {}
) {
  let i, a, o;
  if (!n) return eY;
  let l = { axis: t, container: n, ...r };
  return "function" == typeof e
    ? (function (e, t) {
        return 2 === e.length || (t && (t.target || t.offset))
          ? oE((n) => {
              e(n[t.axis].progress, n);
            }, t)
          : os(e, oA(t));
      })(e, l)
    : ((i = oA(l)),
      (a = l.target ? oT(l.offset) : void 0),
      (o = l.target ? ou(l.target) && !!a : ou()),
      e.attachTimeline({
        timeline: o ? i : void 0,
        ...(a && o && { rangeStart: a.rangeStart, rangeEnd: a.rangeEnd }),
        observe: (e) => (
          e.pause(),
          os((t) => {
            e.time = e.iterationDuration * t;
          }, i)
        ),
      }));
}
let oR = () => ({
    scrollX: tj(0),
    scrollY: tj(0),
    scrollXProgress: tj(0),
    scrollYProgress: tj(0),
  }),
  oL = (e) => !!e && !e.current;
function oz(e, t, n, r) {
  return {
    factory: (i) => {
      let a,
        o = () => {
          oL(n) || oL(r)
            ? tk.read(o)
            : (a = oM(i, {
                ...t,
                axis: e,
                container: n?.current || void 0,
                target: r?.current || void 0,
              }));
        };
      return (
        tk.read(o),
        () => {
          tS(o), a?.();
        }
      );
    },
    times: [0, 1],
    keyframes: [0, 1],
    ease: (e) => e,
    duration: 1,
  };
}
function oD({ container: e, target: t, ...n } = {}) {
  var r;
  let i = h(oR);
  (r = n.offset),
    !("u" < typeof window) &&
      (t ? tc() && !!oT(r) : tu()) &&
      ((i.scrollXProgress.accelerate = oz("x", n, e, t)),
      (i.scrollYProgress.accelerate = oz("y", n, e, t)));
  let a = (0, d.useRef)(null),
    o = (0, d.useRef)(!1),
    l = (0, d.useCallback)(
      () => (
        (a.current = oM(
          (e, { x: t, y: n }) => {
            i.scrollX.set(t.current),
              i.scrollXProgress.set(t.progress),
              i.scrollY.set(n.current),
              i.scrollYProgress.set(n.progress);
          },
          {
            ...n,
            container: e?.current || void 0,
            target: t?.current || void 0,
          }
        )),
        () => {
          a.current?.();
        }
      ),
      [e, t, JSON.stringify(n.offset)]
    );
  return (
    m(() => {
      if (((o.current = !1), !(oL(e) || oL(t)))) return l();
      o.current = !0;
    }, [l]),
    (0, d.useEffect)(() => {
      let n;
      if (!o.current) return;
      let r = () => {
        let r = oL(e),
          i = oL(t);
        eE(), eE(), r || i || (n = l());
      };
      return (
        tk.read(r),
        () => {
          tS(r), n?.();
        }
      );
    }, [l]),
    i
  );
}
var d = s("2YQ6R");
function o_(e, t) {
  let n = (function (e) {
      let t = h(() => tj(e)),
        { isStatic: n } = (0, d.useContext)(b);
      if (n) {
        let [, n] = (0, d.useState)(e);
        (0, d.useEffect)(() => t.on("change", n), []);
      }
      return t;
    })(t()),
    r = () => n.set(t());
  return (
    r(),
    m(() => {
      let t = () => eX.preRender(r, !1, !0),
        n = e.map((e) => e.on("change", t));
      return () => {
        n.forEach((e) => e()), eK(r);
      };
    }),
    n
  );
}
function oO(e, t, n, r) {
  if ("function" == typeof e) {
    let t;
    return (
      (tT.current = []), e(), (t = o_(tT.current, e)), (tT.current = void 0), t
    );
  }
  if (void 0 !== n && !Array.isArray(n) && "function" != typeof t) {
    var i = e,
      a = t,
      o = n,
      l = r;
    let s = h(() => Object.keys(o)),
      u = h(() => ({}));
    for (let e of s) u[e] = oO(i, a, o[e], l);
    return u;
  }
  let s =
      "function" == typeof t
        ? t
        : (function (...e) {
            let t = !Array.isArray(e[0]),
              n = t ? 0 : -1,
              r = e[0 + n],
              i = rC(e[1 + n], e[2 + n], e[3 + n]);
            return t ? i(r) : i;
          })(t, n, r),
    u = Array.isArray(e) ? oV(e, s) : oV([e], ([e]) => s(e)),
    c = Array.isArray(e) ? void 0 : e.accelerate;
  return (
    c &&
      !c.isTransformed &&
      "function" != typeof t &&
      Array.isArray(n) &&
      r?.clamp !== !1 &&
      (u.accelerate = {
        ...c,
        times: t,
        keyframes: n,
        isTransformed: !0,
        ...(r?.ease ? { ease: r.ease } : {}),
      }),
    u
  );
}
function oV(e, t) {
  let n = h(() => []);
  return o_(e, () => {
    n.length = 0;
    let r = e.length;
    for (let t = 0; t < r; t++) n[t] = e[t].get();
    return t(n);
  });
}
let oI = aZ("message-circle", [
    [
      "path",
      {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
        key: "1sd12s",
      },
    ],
  ]),
  oF = aZ("star", [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ]),
  oB = aZ("circle-check", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ]);
function o$() {
  let e = (0, d.useRef)(null),
    { scrollYProgress: t } = oD({
      target: e,
      offset: ["start start", "end start"],
    }),
    n = oO(t, [0, 1], [1, 0.25]),
    r = oO(t, [0, 1], [0, 60]),
    i = oO(t, [0, 1], [1, 0]);
  return (0, c.jsxs)("section", {
    ref: e,
    className: "relative isolate overflow-hidden bg-forest text-cream",
    children: [
      (0, c.jsxs)(aY.div, {
        "aria-hidden": "true",
        className:
          "pointer-events-none absolute inset-0 -z-10 blur-2xl will-change-transform",
        style: { opacity: n },
        children: [
          (0, c.jsx)(aY.div, {
            className:
              "absolute -left-16 -top-16 h-72 w-72 rounded-full bg-gold/35",
            animate: { x: [0, 24, 0], y: [0, 30, 0] },
            transition: { duration: 22, repeat: 1 / 0, ease: "easeInOut" },
          }),
          (0, c.jsx)(aY.div, {
            className:
              "absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#7E9C8B]/30",
            animate: { x: [0, -20, 0], y: [0, -24, 0] },
            transition: { duration: 24, repeat: 1 / 0, ease: "easeInOut" },
          }),
        ],
      }),
      (0, c.jsx)("div", {
        "aria-hidden": "true",
        className:
          "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-forest/10 via-forest/50 to-forest",
      }),
      (0, c.jsx)(aY.div, {
        style: { y: r, opacity: i },
        className:
          "relative mx-auto max-w-6xl px-6 pt-14 pb-24 md:pt-16 md:pb-28",
        children: (0, c.jsxs)("div", {
          className: "grid gap-16 md:grid-cols-[1.05fr_1fr] md:items-center",
          children: [
            (0, c.jsxs)("div", {
              children: [
                (0, c.jsx)(aY.p, {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.45, delay: 0.05 },
                  className:
                    "text-xs font-semibold uppercase tracking-[0.18em] text-gold",
                  children: "",
                }),
                (0, c.jsx)(aY.h1, {
                  initial: { opacity: 0, y: 16 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5, delay: 0.1 },
                  className:
                    "mt-5 break-words font-display text-[2rem] font-medium leading-[1.15] tracking-tight sm:text-4xl md:text-[3rem]",
                  children: "Stop Losing Clients Because of Your Website.",
                }),
                (0, c.jsx)(aY.p, {
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5, delay: 0.2 },
                  className:
                    "mt-5 max-w-md font-display text-lg leading-snug text-gold sm:text-xl",
                  children:
                    "Turn your website into a client magnet and make it your hardest-working employee.",
                }),
                (0, c.jsx)(aY.p, {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5, delay: 0.3 },
                  className:
                    "mt-5 max-w-md text-base leading-relaxed text-creamdim",
                  children:
                    "I create clear, professional, and conversion-focused websites for small local businesses and personal brands — so you get more inquiries, bookings, and sales, without the stress.",
                }),
                (0, c.jsxs)(aY.div, {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5, delay: 0.4 },
                  className: "mt-9 flex flex-wrap items-center gap-4",
                  children: [
                    (0, c.jsx)("a", {
                      href: "#contact",
                      className:
                        "rounded-full bg-gold px-7 py-3 font-medium text-forest transition-colors hover:bg-gold2",
                      children: "Get in touch",
                    }),
                    (0, c.jsx)("a", {
                      href: "#work",
                      className:
                        "rounded-full border border-hairlineDark px-7 py-3 font-medium text-cream transition-colors hover:border-gold hover:text-gold",
                      children: "View Similar Case Studies",
                    }),
                  ],
                }),
                (0, c.jsx)(aY.p, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 0.5, delay: 0.5 },
                  className: "mt-3 text-xs text-creamdim/80",
                }),
              ],
            }),
            (0, c.jsxs)(aY.div, {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.2 },
              className: "relative mx-auto w-full max-w-sm",
              children: [
                (0, c.jsxs)("div", {
                  className:
                    "relative rounded-2xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl",
                  children: [
                    (0, c.jsxs)("div", {
                      className: "flex items-center gap-1.5 pb-3",
                      children: [
                        (0, c.jsx)("span", {
                          className: "h-2.5 w-2.5 rounded-full bg-white/25",
                        }),
                        (0, c.jsx)("span", {
                          className: "h-2.5 w-2.5 rounded-full bg-white/25",
                        }),
                        (0, c.jsx)("span", {
                          className: "h-2.5 w-2.5 rounded-full bg-white/25",
                        }),
                      ],
                    }),
                    (0, c.jsxs)("div", {
                      className:
                        "flex items-center gap-3 rounded-xl bg-forest2/70 p-4",
                      children: [
                        (0, c.jsx)("span", {
                          className:
                            "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold text-forest",
                          children: (0, c.jsxs)("svg", {
                            viewBox: "0 0 24 24",
                            className: "h-7 w-7",
                            fill: "none",
                            children: [
                              (0, c.jsx)("circle", {
                                cx: "9",
                                cy: "9.5",
                                r: "1.2",
                                fill: "currentColor",
                              }),
                              (0, c.jsx)("circle", {
                                cx: "15",
                                cy: "9.5",
                                r: "1.2",
                                fill: "currentColor",
                              }),
                              (0, c.jsx)("path", {
                                d: "M8 14c1 1.3 2.4 2 4 2s3-0.7 4-2",
                                stroke: "currentColor",
                                strokeWidth: "1.6",
                                strokeLinecap: "round",
                                fill: "none",
                              }),
                            ],
                          }),
                        }),
                        (0, c.jsxs)("div", {
                          children: [
                            (0, c.jsx)("div", {
                              className: "h-2.5 w-28 rounded-full bg-cream/70",
                            }),
                            (0, c.jsx)("div", {
                              className:
                                "mt-2 h-2 w-20 rounded-full bg-white/20",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, c.jsx)("div", {
                      className: "mt-3 h-9 w-full rounded-lg bg-white/10",
                    }),
                  ],
                }),
                (0, c.jsx)("div", {
                  className:
                    "mx-auto -mt-1 h-3 w-[88%] rounded-b-xl bg-white/10",
                }),
                (0, c.jsxs)(aY.div, {
                  initial: { opacity: 0, scale: 0.85, x: 10 },
                  animate: { opacity: 1, scale: 1, x: 0 },
                  transition: { duration: 0.45, delay: 0.7 },
                  className:
                    "absolute -right-3 top-2 flex items-center gap-2 rounded-xl border border-white/15 bg-forest2/95 px-3 py-2 shadow-lg sm:right-0",
                  children: [
                    (0, c.jsx)(oI, {
                      className: "h-4 w-4 flex-shrink-0 text-gold",
                    }),
                    (0, c.jsxs)("div", {
                      children: [
                        (0, c.jsx)("p", {
                          className: "text-[11px] font-medium text-cream",
                          children: "New inquiry",
                        }),
                        (0, c.jsx)("p", {
                          className: "text-[10px] text-creamdim",
                          children: '"Can I book a visit?"',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, c.jsxs)(aY.div, {
                  initial: { opacity: 0, scale: 0.85, x: -10 },
                  animate: { opacity: 1, scale: 1, x: 0 },
                  transition: { duration: 0.45, delay: 1 },
                  className:
                    "absolute -left-4 top-1/2 flex items-center gap-2 rounded-xl border border-white/15 bg-forest2/95 px-3 py-2 shadow-lg",
                  children: [
                    (0, c.jsx)(oF, {
                      className: "h-4 w-4 flex-shrink-0 fill-current text-gold",
                      strokeWidth: 0,
                    }),
                    (0, c.jsxs)("div", {
                      children: [
                        (0, c.jsx)("p", {
                          className: "text-[11px] font-medium text-cream",
                          children: "Builds trust fast",
                        }),
                        (0, c.jsx)("p", {
                          className: "text-[10px] text-creamdim",
                          children: "clear, professional design",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, c.jsxs)(aY.div, {
                  initial: { opacity: 0, scale: 0.85, x: 10 },
                  animate: { opacity: 1, scale: 1, x: 0 },
                  transition: { duration: 0.45, delay: 1.3 },
                  className:
                    "absolute -right-2 bottom-2 flex items-center gap-2 rounded-xl border border-white/15 bg-forest2/95 px-3 py-2 shadow-lg sm:right-2",
                  children: [
                    (0, c.jsx)(oB, {
                      className: "h-4 w-4 flex-shrink-0 text-gold",
                    }),
                    (0, c.jsxs)("div", {
                      children: [
                        (0, c.jsx)("p", {
                          className: "text-[11px] font-medium text-cream",
                          children: "Booking confirmed",
                        }),
                        (0, c.jsx)("p", {
                          className: "text-[10px] text-creamdim",
                          children: "for Thursday, 3 PM",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
let oU = aZ("smartphone", [
    [
      "rect",
      {
        width: "14",
        height: "20",
        x: "5",
        y: "2",
        rx: "2",
        ry: "2",
        key: "1yt0o3",
      },
    ],
    ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ]),
  oW = [
    oU,
    aZ("circle-question-mark", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
      ["path", { d: "M12 17h.01", key: "p32p05" }],
    ]),
    aZ("gem", [
      ["path", { d: "M10.5 3 8 9l4 13 4-13-2.5-6", key: "b3dvk1" }],
      [
        "path",
        {
          d: "M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z",
          key: "7w4byz",
        },
      ],
      ["path", { d: "M2 9h20", key: "16fsjt" }],
    ]),
    aZ("shield-alert", [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
          key: "oel41y",
        },
      ],
      ["path", { d: "M12 8v4", key: "1got3b" }],
      ["path", { d: "M12 16h.01", key: "1drbdi" }],
    ]),
    aZ("mouse-pointer-click", [
      ["path", { d: "M14 4.1 12 6", key: "ita8i4" }],
      ["path", { d: "m5.1 8-2.9-.8", key: "1go3kf" }],
      ["path", { d: "m6 12-1.9 2", key: "mnht97" }],
      ["path", { d: "M7.2 2.2 8 5.1", key: "1cfko1" }],
      [
        "path",
        {
          d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",
          key: "s0h3yz",
        },
      ],
    ]),
  ];
function oH() {
  return (0, c.jsx)("section", {
    className: "border-b border-hairline bg-paper2 py-24",
    children: (0, c.jsxs)("div", {
      className: "mx-auto max-w-6xl px-6",
      children: [
        (0, c.jsxs)(aY.div, {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, margin: "-10%" },
          transition: { duration: 0.6 },
          children: [
            (0, c.jsx)("p", {
              className:
                "text-xs font-semibold uppercase tracking-[0.18em] text-gold2",
              children: "Sound familiar?",
            }),
            (0, c.jsx)("h2", {
              className:
                "mt-4 max-w-xl font-display text-3xl font-medium tracking-tight text-inkdark sm:text-4xl",
              children: "Why Most Small Business Websites Fail",
            }),
            (0, c.jsx)("p", {
              className: "mt-3 max-w-xl text-base text-inkdim",
              children:
                "They look decent… but they're quietly costing you customers every day.",
            }),
          ],
        }),
        (0, c.jsx)("div", {
          className: "mt-12 grid gap-4 sm:grid-cols-2",
          children: a8.map((e, t) => {
            let n = oW[t];
            return (0, c.jsxs)(
              aY.div,
              {
                initial: { opacity: 0, y: 18 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: "-10%" },
                transition: { duration: 0.45, delay: (t % 4) * 0.06 },
                className:
                  "flex gap-4 rounded-xl border border-hairline bg-paper p-6",
                children: [
                  (0, c.jsx)(n, {
                    className: "mt-0.5 h-5 w-5 flex-shrink-0 text-gold2",
                    strokeWidth: 1.5,
                  }),
                  (0, c.jsxs)("div", {
                    children: [
                      (0, c.jsx)("h3", {
                        className:
                          "font-display text-base font-semibold text-inkdark",
                        children: e.title,
                      }),
                      (0, c.jsx)("p", {
                        className: "mt-1.5 text-sm leading-relaxed text-inkdim",
                        children: e.body,
                      }),
                    ],
                  }),
                ],
              },
              e.title
            );
          }),
        }),
      ],
    }),
  });
}
function oY() {
  return (0, c.jsx)("section", {
    id: "solution",
    className: "border-b border-hairline bg-paper py-24",
    children: (0, c.jsx)("div", {
      className: "mx-auto max-w-6xl px-6",
      children: (0, c.jsxs)("div", {
        className: "grid gap-12 md:grid-cols-2 md:items-start",
        children: [
          (0, c.jsxs)(aY.div, {
            initial: { opacity: 0, x: -16 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: !0, margin: "-10%" },
            transition: { duration: 0.6 },
            children: [
              (0, c.jsx)("p", {
                className:
                  "text-xs font-semibold uppercase tracking-[0.18em] text-gold2",
                children: "Here's the fix",
              }),
              (0, c.jsx)("h2", {
                className:
                  "mt-4 font-display text-3xl font-medium tracking-tight text-inkdark sm:text-4xl",
                children: "I Build Websites That Actually Bring You Clients",
              }),
              (0, c.jsx)("p", {
                className: "mt-6 text-base leading-relaxed text-inkdim",
                children:
                  "I don't just make pretty websites. I design websites that clearly communicate your value, build trust, and turn visitors into real customers.",
              }),
            ],
          }),
          (0, c.jsxs)(aY.div, {
            initial: { opacity: 0, x: 16 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: !0, margin: "-10%" },
            transition: { duration: 0.6, delay: 0.1 },
            className: "rounded-xl border border-hairline bg-paper2 p-7",
            children: [
              (0, c.jsx)("p", {
                className:
                  "text-xs font-semibold uppercase tracking-wide text-inkdim",
                children: "What you get",
              }),
              (0, c.jsx)("ul", {
                className: "mt-4 space-y-4",
                children: a9.map((e) =>
                  (0, c.jsxs)(
                    "li",
                    {
                      className: "flex gap-3 text-sm text-inkdark",
                      children: [
                        (0, c.jsx)(oB, {
                          className: "mt-0.5 h-5 w-5 flex-shrink-0 text-gold2",
                          strokeWidth: 1.5,
                        }),
                        (0, c.jsx)("span", {
                          className: "leading-relaxed",
                          children: e,
                        }),
                      ],
                    },
                    e
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
let oQ = aZ("search-check", [
    ["path", { d: "m8 11 2 2 4-4", key: "1sed1v" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
  ]),
  oq = aZ("target", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ]),
  oG = [
    oU,
    aZ("zap", [
      [
        "path",
        {
          d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
          key: "1xq2db",
        },
      ],
    ]),
    oq,
    oQ,
  ],
  oX = ["gold2", "sage", "coral", "gold2"];
function oK() {
  return (0, c.jsx)("section", {
    className: "border-b border-hairline bg-paper py-24",
    children: (0, c.jsxs)("div", {
      className: "mx-auto max-w-6xl px-6",
      children: [
        (0, c.jsxs)(aY.div, {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, margin: "-10%" },
          transition: { duration: 0.6 },
          children: [
            (0, c.jsx)("p", {
              className:
                "text-xs font-semibold uppercase tracking-[0.18em] text-gold2",
              children: "What you can expect from the work",
            }),
            (0, c.jsx)("h2", {
              className:
                "mt-4 max-w-xl font-display text-3xl font-medium tracking-tight text-inkdark sm:text-4xl",
              children: "Built on a few simple standards, every time.",
            }),
          ],
        }),
        (0, c.jsx)("div", {
          className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
          children: a7.map((e, t) => {
            let n = oG[t];
            return (0, c.jsxs)(
              aY.div,
              {
                initial: { opacity: 0, y: 18 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: "-10%" },
                transition: { duration: 0.45, delay: 0.07 * t },
                className: `flex flex-col justify-between rounded-xl border border-hairline bg-paper2/70 p-6 ${
                  0 === t ? "sm:col-span-2 lg:col-span-2" : ""
                }`,
                children: [
                  (0, c.jsx)(n, {
                    className: `h-6 w-6 ${
                      "sage" === oX[t]
                        ? "text-sage"
                        : "coral" === oX[t]
                        ? "text-coral"
                        : "text-gold2"
                    }`,
                    strokeWidth: 1.5,
                  }),
                  (0, c.jsxs)("div", {
                    className: "mt-5",
                    children: [
                      (0, c.jsx)("h3", {
                        className:
                          "font-display text-lg font-semibold text-inkdark",
                        children: e.title,
                      }),
                      (0, c.jsx)("p", {
                        className: "mt-1.5 text-sm leading-relaxed text-inkdim",
                        children: e.body,
                      }),
                    ],
                  }),
                ],
              },
              e.title
            );
          }),
        }),
      ],
    }),
  });
}
let oZ = aZ("triangle-alert", [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq",
      },
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ]),
  oJ = aZ("trending-up", [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
  ]),
  o0 = aZ("wand-sparkles", [
    [
      "path",
      {
        d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
        key: "ul74o6",
      },
    ],
    ["path", { d: "m14 7 3 3", key: "1r5n42" }],
    ["path", { d: "M5 6v4", key: "ilb8ba" }],
    ["path", { d: "M19 14v4", key: "blhpug" }],
    ["path", { d: "M10 2v2", key: "7u0qdc" }],
    ["path", { d: "M7 8H3", key: "zfb6yr" }],
    ["path", { d: "M21 16h-4", key: "1cnmox" }],
    ["path", { d: "M11 3H9", key: "1obp7u" }],
  ]),
  o1 = ["#C99A2E", "#7E9C8B", "#D9683F", "#C9A35E"];
function o2() {
  return (0, c.jsx)("section", {
    id: "work",
    className: "border-b border-hairline bg-paper py-24",
    children: (0, c.jsxs)("div", {
      className: "mx-auto max-w-6xl px-6",
      children: [
        (0, c.jsxs)(aY.div, {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, margin: "-10%" },
          transition: { duration: 0.6 },
          children: [
            (0, c.jsx)("p", {
              className:
                "text-xs font-semibold uppercase tracking-[0.18em] text-gold2",
              children: "Case studies",
            }),
            (0, c.jsx)("h2", {
              className:
                "mt-4 max-w-xl font-display text-3xl font-medium tracking-tight text-inkdark sm:text-4xl",
              children:
                "Redesign case studies, across a few different industries.",
            }),
            (0, c.jsx)("p", {
              className: "mt-3 max-w-xl text-sm text-inkdim",
              children:
                "These redesigns are built to show how I think through the design problems.",
            }),
          ],
        }),
        (0, c.jsx)("div", {
          className: "mt-14 space-y-14",
          children: oe.map((e, t) => {
            let n = o1[t % o1.length];
            return (0, c.jsxs)(
              aY.article,
              {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: "-10%" },
                transition: { duration: 0.5 },
                className: `grid items-start gap-8 rounded-xl border border-hairline bg-paper2/60 p-7 sm:p-9 md:grid-cols-[0.85fr_1.15fr] ${
                  t % 2 == 1 ? "md:[&>*:first-child]:order-2" : ""
                }`,
                children: [
                  (0, c.jsxs)("div", {
                    children: [
                      (0, c.jsx)("span", {
                        className:
                          "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-paper",
                        style: { backgroundColor: n },
                        children: e.tag,
                      }),
                      (0, c.jsx)("h3", {
                        className:
                          "mt-4 font-display text-2xl font-semibold text-inkdark",
                        children: e.industry,
                      }),
                    ],
                  }),
                  (0, c.jsxs)("div", {
                    className: "space-y-5",
                    children: [
                      (0, c.jsxs)("div", {
                        className: "flex gap-3",
                        children: [
                          (0, c.jsx)(oZ, {
                            className:
                              "mt-0.5 h-5 w-5 flex-shrink-0 text-coral",
                            strokeWidth: 1.5,
                          }),
                          (0, c.jsxs)("div", {
                            children: [
                              (0, c.jsx)("p", {
                                className:
                                  "text-xs font-semibold uppercase tracking-wide text-inkdim",
                                children: "The problem",
                              }),
                              (0, c.jsx)("p", {
                                className:
                                  "mt-1 text-sm leading-relaxed text-inkdim",
                                children: e.problem,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, c.jsxs)("div", {
                        className: "flex gap-3",
                        children: [
                          (0, c.jsx)(o0, {
                            className:
                              "mt-0.5 h-5 w-5 flex-shrink-0 text-gold2",
                            strokeWidth: 1.5,
                          }),
                          (0, c.jsxs)("div", {
                            children: [
                              (0, c.jsx)("p", {
                                className:
                                  "text-xs font-semibold uppercase tracking-wide text-inkdim",
                                children: "Design improvements",
                              }),
                              (0, c.jsx)("p", {
                                className:
                                  "mt-1 text-sm leading-relaxed text-inkdim",
                                children: e.redesign,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, c.jsxs)("div", {
                        className: "flex gap-3",
                        children: [
                          (0, c.jsx)(oJ, {
                            className: "mt-0.5 h-5 w-5 flex-shrink-0 text-sage",
                            strokeWidth: 1.5,
                          }),
                          (0, c.jsxs)("div", {
                            children: [
                              (0, c.jsx)("p", {
                                className:
                                  "text-xs font-semibold uppercase tracking-wide text-inkdim",
                                children: "Expected business impact",
                              }),
                              (0, c.jsx)("p", {
                                className:
                                  "mt-1 text-sm leading-relaxed text-inkdim",
                                children: e.impact,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              e.industry
            );
          }),
        }),
      ],
    }),
  });
}
var d = s("2YQ6R");
function o3() {
  let e = (0, d.useRef)(null),
    { scrollYProgress: t } = oD({
      target: e,
      offset: ["start 0.8", "end 0.6"],
    }),
    n = oO(t, [0, 1], ["0%", "100%"]);
  return (0, c.jsx)("section", {
    id: "process",
    className: "border-b border-hairline bg-paper2 py-24",
    children: (0, c.jsxs)("div", {
      className: "mx-auto max-w-6xl px-6",
      children: [
        (0, c.jsxs)(aY.div, {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, margin: "-10%" },
          transition: { duration: 0.6 },
          children: [
            (0, c.jsx)("p", {
              className:
                "text-xs font-semibold uppercase tracking-[0.18em] text-gold2",
              children: "How it works",
            }),
            (0, c.jsx)("h2", {
              className:
                "mt-4 max-w-xl font-display text-3xl font-medium tracking-tight text-inkdark sm:text-4xl",
              children: "My Simple 6-Step Process",
            }),
          ],
        }),
        (0, c.jsxs)("div", {
          ref: e,
          className: "relative mt-14",
          children: [
            (0, c.jsx)("div", {
              className:
                "absolute left-[18px] top-2 bottom-2 hidden w-px bg-hairline sm:block",
            }),
            (0, c.jsx)(aY.div, {
              className:
                "absolute left-[18px] top-2 hidden w-px bg-gold sm:block",
              style: { height: n },
            }),
            (0, c.jsx)("ol", {
              className: "space-y-10",
              children: ot.map((e, t) =>
                (0, c.jsxs)(
                  aY.li,
                  {
                    initial: { opacity: 0, x: -14 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: !0, margin: "-15%" },
                    transition: { duration: 0.5, delay: (t % 3) * 0.06 },
                    className: "relative flex gap-6 sm:gap-8",
                    children: [
                      (0, c.jsx)("span", {
                        className:
                          "relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-hairline bg-paper text-xs font-semibold text-gold2",
                        children: e.n,
                      }),
                      (0, c.jsxs)("div", {
                        className: "-mt-1",
                        children: [
                          (0, c.jsx)("h3", {
                            className:
                              "font-display text-lg font-semibold text-inkdark",
                            children: e.title,
                          }),
                          (0, c.jsx)("p", {
                            className:
                              "mt-1.5 max-w-xl text-sm leading-relaxed text-inkdim",
                            children: e.body,
                          }),
                        ],
                      }),
                    ],
                  },
                  e.n
                )
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
let o4 = aZ("clock", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ]),
  o5 = [
    {
      label: "Book a call",
      sub: "Calendly",
      href: a5,
      Icon: function ({ className: e = "h-5 w-5" }) {
        return (0, c.jsxs)("svg", {
          viewBox: "0 0 24 24",
          className: e,
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.8",
          children: [
            (0, c.jsx)("rect", {
              x: "3.5",
              y: "4.5",
              width: "17",
              height: "16",
              rx: "3",
            }),
            (0, c.jsx)("path", { d: "M3.5 9.5h17", strokeLinecap: "round" }),
            (0, c.jsx)("path", { d: "M8 3v3M16 3v3", strokeLinecap: "round" }),
            (0, c.jsx)("path", {
              d: "M8.5 13.5l2 2 4.5-4.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        });
      },
    },
    {
      label: "Message me",
      sub: "WhatsApp",
      href: a3,
      Icon: function ({ className: e = "h-5 w-5" }) {
        return (0, c.jsx)("svg", {
          viewBox: "0 0 24 24",
          className: e,
          fill: "currentColor",
          children: (0, c.jsx)("path", {
            d: "M12.04 2.5c-5.26 0-9.54 4.27-9.54 9.54 0 1.68.44 3.32 1.28 4.76L2.5 21.5l4.85-1.27a9.5 9.5 0 0 0 4.69 1.24h.01c5.26 0 9.54-4.27 9.54-9.54 0-2.55-.99-4.94-2.79-6.74a9.49 9.49 0 0 0-6.76-2.69zm0 17.46h-.01a7.9 7.9 0 0 1-4.03-1.1l-.29-.17-3 .79.8-2.92-.19-.3a7.9 7.9 0 0 1-1.22-4.22c0-4.38 3.57-7.94 7.95-7.94 2.12 0 4.12.83 5.62 2.33a7.88 7.88 0 0 1 2.32 5.62c0 4.38-3.56 7.91-7.95 7.91zm4.36-5.94c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z",
          }),
        });
      },
    },
    {
      label: "Send an email",
      sub: a2,
      href: `mailto:${a2}`,
      Icon: function ({ className: e = "h-5 w-5" }) {
        return (0, c.jsxs)("svg", {
          viewBox: "0 0 24 24",
          className: e,
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.8",
          children: [
            (0, c.jsx)("rect", {
              x: "3",
              y: "5",
              width: "18",
              height: "14",
              rx: "2.5",
            }),
            (0, c.jsx)("path", {
              d: "M4 7l8 6 8-6",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        });
      },
    },
    {
      label: "Connect",
      sub: "LinkedIn",
      href: a4,
      Icon: function ({ className: e = "h-5 w-5" }) {
        return (0, c.jsx)("svg", {
          viewBox: "0 0 24 24",
          className: e,
          fill: "currentColor",
          children: (0, c.jsx)("path", {
            d: "M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0zM3.5 8.75h3.4V20.5H3.5V8.75zM9.5 8.75h3.26v1.6h.05c.45-.86 1.56-1.76 3.22-1.76 3.44 0 4.07 2.27 4.07 5.22v6.69h-3.4v-5.93c0-1.41-.03-3.23-1.97-3.23-1.97 0-2.27 1.54-2.27 3.13v6.03H9.5V8.75z",
          }),
        });
      },
    },
  ];
function o6() {
  return (0, c.jsx)("section", {
    id: "contact",
    className: "bg-forest py-24 text-cream",
    children: (0, c.jsx)("div", {
      className: "mx-auto max-w-6xl px-6",
      children: (0, c.jsxs)(aY.div, {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0, margin: "-10%" },
        transition: { duration: 0.6 },
        className:
          "rounded-2xl border border-hairlineDark bg-forest2 px-6 py-14 text-center sm:px-12",
        children: [
          (0, c.jsx)("p", {
            className:
              "text-xs font-semibold uppercase tracking-[0.18em] text-gold",
            children: "Let's talk",
          }),
          (0, c.jsx)("h2", {
            className:
              "mx-auto mt-4 max-w-xl font-display text-3xl font-medium tracking-tight sm:text-4xl",
            children: "Start a conversation, no commitment needed.",
          }),
          (0, c.jsx)("p", {
            className:
              "mx-auto mt-4 max-w-md text-sm leading-relaxed text-creamdim",
            children:
              "Pick whichever way is easiest for you. I'll get back to you personally.",
          }),
          (0, c.jsx)("div", {
            className:
              "mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2 sm:gap-4",
            children: o5.map((e, t) =>
              (0, c.jsxs)(
                aY.a,
                {
                  href: e.href,
                  target: e.href.startsWith("http") ? "_blank" : void 0,
                  rel: e.href.startsWith("http")
                    ? "noopener noreferrer"
                    : void 0,
                  initial: { opacity: 0, y: 14 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, margin: "-10%" },
                  transition: { duration: 0.4, delay: 0.06 * t },
                  whileHover: { y: -3 },
                  className:
                    "flex items-center gap-3 rounded-xl border border-hairlineDark bg-forest px-5 py-4 text-left transition-colors hover:border-gold",
                  children: [
                    (0, c.jsx)("span", {
                      className:
                        "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold",
                      children: (0, c.jsx)(e.Icon, { className: "h-5 w-5" }),
                    }),
                    (0, c.jsxs)("span", {
                      children: [
                        (0, c.jsx)("span", {
                          className: "block text-sm font-medium text-cream",
                          children: e.label,
                        }),
                        (0, c.jsx)("span", {
                          className: "block text-xs text-creamdim",
                          children: e.sub,
                        }),
                      ],
                    }),
                  ],
                },
                e.label
              )
            ),
          }),
          (0, c.jsxs)(aY.div, {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: !0, margin: "-10%" },
            transition: { duration: 0.5, delay: 0.3 },
            className:
              "mt-8 flex items-center justify-center gap-2 text-xs text-creamdim",
            children: [
              (0, c.jsx)(o4, { className: "h-3.5 w-3.5 text-gold" }),
              (0, c.jsx)("span", {
                children: "Usually replies within 24 hours.",
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
let o8 = aZ("ban", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M4.929 4.929 19.07 19.071", key: "196cmz" }],
  ]),
  o9 = aZ("calendar-clock", [
    ["path", { d: "M16 14v2.2l1.6 1", key: "fo4ql5" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "path",
      {
        d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",
        key: "1osxxc",
      },
    ],
    ["path", { d: "M3 10h5", key: "r794hk" }],
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }],
  ]),
  o7 = aZ("code-xml", [
    ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
    ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
    ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
  ]),
  le = [
    aZ("message-square", [
      [
        "path",
        {
          d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
          key: "18887p",
        },
      ],
    ]),
    o8,
    o9,
    aZ("users", [
      [
        "path",
        { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" },
      ],
      ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
      ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ]),
    oq,
    o7,
  ];
function lt() {
  return (0, c.jsx)("section", {
    id: "testimonials",
    className: "border-b border-hairline bg-paper2 py-24",
    children: (0, c.jsxs)("div", {
      className: "mx-auto max-w-6xl px-6",
      children: [
        (0, c.jsxs)(aY.div, {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, margin: "-10%" },
          transition: { duration: 0.6 },
          children: [
            (0, c.jsx)("p", {
              className:
                "text-xs font-semibold uppercase tracking-[0.18em] text-gold2",
              children: "Working together",
            }),
            (0, c.jsx)("h2", {
              className:
                "mt-4 max-w-xl font-display text-3xl font-medium tracking-tight text-inkdark sm:text-4xl",
              children: "What You Can Expect",
            }),
          ],
        }),
        (0, c.jsx)("div", {
          className:
            "mt-12 divide-y divide-hairline overflow-hidden rounded-xl border border-hairline bg-paper sm:grid sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-3",
          children: on.map((e, t) => {
            let n = le[t];
            return (0, c.jsxs)(
              aY.div,
              {
                initial: { opacity: 0, y: 14 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: "-10%" },
                transition: { duration: 0.4, delay: (t % 3) * 0.06 },
                className: "flex items-start gap-4 p-6",
                children: [
                  (0, c.jsx)(n, {
                    className: "mt-0.5 h-5 w-5 flex-shrink-0 text-gold2",
                    strokeWidth: 1.5,
                  }),
                  (0, c.jsxs)("div", {
                    children: [
                      (0, c.jsx)("h3", {
                        className:
                          "font-display text-base font-semibold text-inkdark",
                        children: e.title,
                      }),
                      (0, c.jsx)("p", {
                        className: "mt-1.5 text-sm leading-relaxed text-inkdim",
                        children: e.body,
                      }),
                    ],
                  }),
                ],
              },
              e.title
            );
          }),
        }),
      ],
    }),
  });
}
function ln(e, t = []) {
  let n = [],
    r = () => {
      let t = n.map((e) => d.createContext(e));
      return function (n) {
        let r = n?.[e] || t;
        return d.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: r } }), [n, r]);
      };
    };
  return (
    (r.scopeName = e),
    [
      function (t, r) {
        let i = d.createContext(r);
        i.displayName = t + "Context";
        let a = n.length;
        n = [...n, r];
        let o = (t) => {
          let { scope: n, children: r, ...o } = t,
            l = n?.[e]?.[a] || i,
            s = d.useMemo(() => o, Object.values(o));
          return (0, c.jsx)(l.Provider, { value: s, children: r });
        };
        return (
          (o.displayName = t + "Provider"),
          [
            o,
            function (n, o) {
              let l = o?.[e]?.[a] || i,
                s = d.useContext(l);
              if (s) return s;
              if (void 0 !== r) return r;
              throw Error(`\`${n}\` must be used within \`${t}\``);
            },
          ]
        );
      },
      (function (...e) {
        let t = e[0];
        if (1 === e.length) return t;
        let n = () => {
          let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
          return function (e) {
            let r = n.reduce((t, { useScope: n, scopeName: r }) => {
              let i = n(e)[`__scope${r}`];
              return { ...t, ...i };
            }, {});
            return d.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
          };
        };
        return (n.scopeName = t.scopeName), n;
      })(r, ...t),
    ]
  );
}
function lr(e, t) {
  if ("function" == typeof e) return e(t);
  null != e && (e.current = t);
}
function li(...e) {
  return d.useCallback(
    (function (...e) {
      return (t) => {
        let n = !1,
          r = e.map((e) => {
            let r = lr(e, t);
            return n || "function" != typeof r || (n = !0), r;
          });
        if (n)
          return () => {
            for (let t = 0; t < r.length; t++) {
              let n = r[t];
              "function" == typeof n ? n() : lr(e[t], null);
            }
          };
      };
    })(...e),
    e
  );
}
var d =
  (s("2YQ6R"), s("2YQ6R"), s("2YQ6R"), s("2YQ6R"), s("2YQ6R"), s("2YQ6R"));
function la(e) {
  let t = d.forwardRef((t, n) => {
    var r;
    let i,
      a,
      { children: o, ...l } = t,
      s = null,
      u = !1,
      c = [];
    lu(o) && "function" == typeof lf && (o = lf(o._payload)),
      d.Children.forEach(o, (e) => {
        var t;
        if (
          ((t = e),
          d.isValidElement(t) &&
            "function" == typeof t.type &&
            "__radixId" in t.type &&
            t.type.__radixId === lo)
        ) {
          u = !0;
          let t = "child" in e.props ? e.props.child : e.props.children;
          lu(t) && "function" == typeof lf && (t = lf(t._payload)),
            (s = ll(e, t)),
            c.push(s?.props?.children);
        } else c.push(e);
      }),
      s
        ? (s = d.cloneElement(s, void 0, c))
        : !u && 1 === d.Children.count(o) && d.isValidElement(o) && (s = o);
    let f = s
        ? ((r = s),
          (a =
            (i = Object.getOwnPropertyDescriptor(r.props, "ref")?.get) &&
            "isReactWarning" in i &&
            i.isReactWarning)
            ? r.ref
            : (a =
                (i = Object.getOwnPropertyDescriptor(r, "ref")?.get) &&
                "isReactWarning" in i &&
                i.isReactWarning)
            ? r.props.ref
            : r.props.ref || r.ref)
        : void 0,
      p = li(n, f);
    if (!s) {
      if (o || 0 === o) throw Error(u ? ld(e) : lc(e));
      return o;
    }
    let h = (function (e, t) {
      let n = { ...t };
      for (let r in t) {
        let i = e[r],
          a = t[r];
        /^on[A-Z]/.test(r)
          ? i && a
            ? (n[r] = (...e) => {
                let t = a(...e);
                return i(...e), t;
              })
            : i && (n[r] = i)
          : "style" === r
          ? (n[r] = { ...i, ...a })
          : "className" === r && (n[r] = [i, a].filter(Boolean).join(" "));
      }
      return { ...e, ...n };
    })(l, s.props ?? {});
    return s.type !== d.Fragment && (h.ref = n ? p : f), d.cloneElement(s, h);
  });
  return (t.displayName = `${e}.Slot`), t;
}
var lo = Symbol.for("radix.slottable"),
  ll = (e, t) => {
    if ("child" in e.props) {
      let t = e.props.child;
      return d.isValidElement(t)
        ? d.cloneElement(t, void 0, e.props.children(t.props.children))
        : null;
    }
    return d.isValidElement(t) ? t : null;
  },
  ls = Symbol.for("react.lazy");
function lu(e) {
  var t;
  return (
    null != e &&
    "object" == typeof e &&
    "$$typeof" in e &&
    e.$$typeof === ls &&
    "_payload" in e &&
    "object" == typeof (t = e._payload) &&
    null !== t &&
    "then" in t
  );
}
var lc = (e) =>
    `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
  ld = (e) =>
    `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
  lf = d[" use ".trim().toString()];
function lp(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (r) {
    if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
  };
}
"u" > typeof window && window.document && window.document.createElement;
var d = (s("2YQ6R"), s("2YQ6R")),
  lh = globalThis?.document ? d.useLayoutEffect : () => {},
  d = s("2YQ6R");
d[" useEffectEvent ".trim().toString()],
  d[" useInsertionEffect ".trim().toString()];
var lm = d[" useInsertionEffect ".trim().toString()] || lh;
function lg({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  let [i, a, o] = (function ({ defaultProp: e, onChange: t }) {
      let [n, r] = d.useState(e),
        i = d.useRef(n),
        a = d.useRef(t);
      return (
        lm(() => {
          a.current = t;
        }, [t]),
        d.useEffect(() => {
          i.current !== n && (a.current?.(n), (i.current = n));
        }, [n, i]),
        [n, r, a]
      );
    })({ defaultProp: t, onChange: n }),
    l = void 0 !== e,
    s = l ? e : i;
  {
    let t = d.useRef(void 0 !== e);
    d.useEffect(() => {
      let e = t.current;
      if (e !== l) {
        let t = l ? "controlled" : "uncontrolled";
        console.warn(
          `${r} is changing from ${
            e ? "controlled" : "uncontrolled"
          } to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        );
      }
      t.current = l;
    }, [l, r]);
  }
  return [
    s,
    d.useCallback(
      (t) => {
        if (l) {
          let n = "function" == typeof t ? t(e) : t;
          n !== e && o.current?.(n);
        } else a(t);
      },
      [l, e, a, o]
    ),
  ];
}
Symbol("RADIX:SYNC_STATE");
var d = s("2YQ6R");
s("8yZRv");
var ly = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ].reduce((e, t) => {
    let n = la(`Primitive.${t}`),
      r = d.forwardRef((e, r) => {
        let { asChild: i, ...a } = e;
        return (
          "u" > typeof window && (window[Symbol.for("radix-ui")] = !0),
          (0, c.jsx)(i ? n : t, { ...a, ref: r })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {}),
  d = (s("2YQ6R"), s("2YQ6R")),
  lv = (e) => {
    var t;
    let n,
      r,
      { present: i, children: a } = e,
      o = (function (e) {
        var t, n;
        let [r, i] = d.useState(),
          a = d.useRef(null),
          o = d.useRef(e),
          l = d.useRef("none"),
          [s, u] =
            ((t = e ? "mounted" : "unmounted"),
            (n = {
              mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended",
              },
              unmountSuspended: {
                MOUNT: "mounted",
                ANIMATION_END: "unmounted",
              },
              unmounted: { MOUNT: "mounted" },
            }),
            d.useReducer((e, t) => n[e][t] ?? e, t));
        return (
          d.useEffect(() => {
            let e = lx(a.current);
            l.current = "mounted" === s ? e : "none";
          }, [s]),
          lh(() => {
            let t = a.current,
              n = o.current;
            if (n !== e) {
              let r = l.current,
                i = lx(t);
              e
                ? u("MOUNT")
                : "none" === i || t?.display === "none"
                ? u("UNMOUNT")
                : n && r !== i
                ? u("ANIMATION_OUT")
                : u("UNMOUNT"),
                (o.current = e);
            }
          }, [e, u]),
          lh(() => {
            if (r) {
              let e,
                t = r.ownerDocument.defaultView ?? window,
                n = (n) => {
                  let i = lx(a.current).includes(CSS.escape(n.animationName));
                  if (n.target === r && i && (u("ANIMATION_END"), !o.current)) {
                    let n = r.style.animationFillMode;
                    (r.style.animationFillMode = "forwards"),
                      (e = t.setTimeout(() => {
                        "forwards" === r.style.animationFillMode &&
                          (r.style.animationFillMode = n);
                      }));
                  }
                },
                i = (e) => {
                  e.target === r && (l.current = lx(a.current));
                };
              return (
                r.addEventListener("animationstart", i),
                r.addEventListener("animationcancel", n),
                r.addEventListener("animationend", n),
                () => {
                  t.clearTimeout(e),
                    r.removeEventListener("animationstart", i),
                    r.removeEventListener("animationcancel", n),
                    r.removeEventListener("animationend", n);
                }
              );
            }
            u("ANIMATION_END");
          }, [r, u]),
          {
            isPresent: ["mounted", "unmountSuspended"].includes(s),
            ref: d.useCallback((e) => {
              (a.current = e ? getComputedStyle(e) : null), i(e);
            }, []),
          }
        );
      })(i),
      l =
        "function" == typeof a
          ? a({ present: o.isPresent })
          : d.Children.only(a),
      s = (function (...e) {
        let t = d.useRef(e);
        return (
          (t.current = e),
          d.useCallback((e) => {
            let n = t.current,
              r = !1,
              i = n.map((t) => {
                let n = lb(t, e);
                return r || "function" != typeof n || (r = !0), n;
              });
            if (r)
              return () => {
                for (let e = 0; e < i.length; e++) {
                  let t = i[e];
                  "function" == typeof t ? t() : lb(n[e], null);
                }
              };
          }, [])
        );
      })(
        o.ref,
        ((t = l),
        (r =
          (n = Object.getOwnPropertyDescriptor(t.props, "ref")?.get) &&
          "isReactWarning" in n &&
          n.isReactWarning)
          ? t.ref
          : (r =
              (n = Object.getOwnPropertyDescriptor(t, "ref")?.get) &&
              "isReactWarning" in n &&
              n.isReactWarning)
          ? t.props.ref
          : t.props.ref || t.ref)
      );
    return "function" == typeof a || o.isPresent
      ? d.cloneElement(l, { ref: s })
      : null;
  };
function lb(e, t) {
  if ("function" == typeof e) return e(t);
  null != e && (e.current = t);
}
function lx(e) {
  return e?.animationName || "none";
}
lv.displayName = "Presence";
var d = s("2YQ6R"),
  lw = d[" useId ".trim().toString()] || (() => void 0),
  lk = 0;
function lS(e) {
  let [t, n] = d.useState(lw());
  return (
    lh(() => {
      e || n((e) => e ?? String(lk++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
var lE = "Collapsible",
  [lC, lP] = ln(lE),
  [lT, lN] = lC(lE),
  lj = d.forwardRef((e, t) => {
    let {
        __scopeCollapsible: n,
        open: r,
        defaultOpen: i,
        disabled: a,
        onOpenChange: o,
        ...l
      } = e,
      [s, u] = lg({ prop: r, defaultProp: i ?? !1, onChange: o, caller: lE });
    return (0, c.jsx)(lT, {
      scope: n,
      disabled: a,
      contentId: lS(),
      open: s,
      onOpenToggle: d.useCallback(() => u((e) => !e), [u]),
      children: (0, c.jsx)(ly.div, {
        "data-state": lD(s),
        "data-disabled": a ? "" : void 0,
        ...l,
        ref: t,
      }),
    });
  });
lj.displayName = lE;
var lA = "CollapsibleTrigger",
  lM = d.forwardRef((e, t) => {
    let { __scopeCollapsible: n, ...r } = e,
      i = lN(lA, n);
    return (0, c.jsx)(ly.button, {
      type: "button",
      "aria-controls": i.open ? i.contentId : void 0,
      "aria-expanded": i.open || !1,
      "data-state": lD(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      disabled: i.disabled,
      ...r,
      ref: t,
      onClick: lp(e.onClick, i.onOpenToggle),
    });
  });
lM.displayName = lA;
var lR = "CollapsibleContent",
  lL = d.forwardRef((e, t) => {
    let { forceMount: n, ...r } = e,
      i = lN(lR, e.__scopeCollapsible);
    return (0, c.jsx)(lv, {
      present: n || i.open,
      children: ({ present: e }) =>
        (0, c.jsx)(lz, { ...r, ref: t, present: e }),
    });
  });
lL.displayName = lR;
var lz = d.forwardRef((e, t) => {
  let { __scopeCollapsible: n, present: r, children: i, ...a } = e,
    o = lN(lR, n),
    [l, s] = d.useState(r),
    u = d.useRef(null),
    f = li(t, u),
    p = d.useRef(0),
    h = p.current,
    m = d.useRef(0),
    g = m.current,
    y = o.open || l,
    v = d.useRef(y),
    b = d.useRef(void 0);
  return (
    d.useEffect(() => {
      let e = requestAnimationFrame(() => (v.current = !1));
      return () => cancelAnimationFrame(e);
    }, []),
    lh(() => {
      let e = u.current;
      if (e) {
        (b.current = b.current || {
          transitionDuration: e.style.transitionDuration,
          animationName: e.style.animationName,
        }),
          (e.style.transitionDuration = "0s"),
          (e.style.animationName = "none");
        let t = e.getBoundingClientRect();
        (p.current = t.height),
          (m.current = t.width),
          v.current ||
            ((e.style.transitionDuration = b.current.transitionDuration),
            (e.style.animationName = b.current.animationName)),
          s(r);
      }
    }, [o.open, r]),
    (0, c.jsx)(ly.div, {
      "data-state": lD(o.open),
      "data-disabled": o.disabled ? "" : void 0,
      id: o.contentId,
      hidden: !y,
      ...a,
      ref: f,
      style: {
        "--radix-collapsible-content-height": h ? `${h}px` : void 0,
        "--radix-collapsible-content-width": g ? `${g}px` : void 0,
        ...e.style,
      },
      children: y && i,
    })
  );
});
function lD(e) {
  return e ? "open" : "closed";
}
var d = s("2YQ6R"),
  l_ = d.createContext(void 0),
  lO = "Accordion",
  lV = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
  [lI, lF, lB] = (function (e) {
    let t = e + "CollectionProvider",
      [n, r] = ln(t),
      [i, a] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
      o = (e) => {
        let { scope: t, children: n } = e,
          r = d.useRef(null),
          a = d.useRef(new Map()).current;
        return (0, c.jsx)(i, {
          scope: t,
          itemMap: a,
          collectionRef: r,
          children: n,
        });
      };
    o.displayName = t;
    let l = e + "CollectionSlot",
      s = la(l),
      u = d.forwardRef((e, t) => {
        let { scope: n, children: r } = e,
          i = li(t, a(l, n).collectionRef);
        return (0, c.jsx)(s, { ref: i, children: r });
      });
    u.displayName = l;
    let f = e + "CollectionItemSlot",
      p = "data-radix-collection-item",
      h = la(f),
      m = d.forwardRef((e, t) => {
        let { scope: n, children: r, ...i } = e,
          o = d.useRef(null),
          l = li(t, o),
          s = a(f, n);
        return (
          d.useEffect(
            () => (
              s.itemMap.set(o, { ref: o, ...i }), () => void s.itemMap.delete(o)
            )
          ),
          (0, c.jsx)(h, { [p]: "", ref: l, children: r })
        );
      });
    return (
      (m.displayName = f),
      [
        { Provider: o, Slot: u, ItemSlot: m },
        function (t) {
          let n = a(e + "CollectionConsumer", t);
          return d.useCallback(() => {
            let e = n.collectionRef.current;
            if (!e) return [];
            let t = Array.from(e.querySelectorAll(`[${p}]`));
            return Array.from(n.itemMap.values()).sort(
              (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
            );
          }, [n.collectionRef, n.itemMap]);
        },
        r,
      ]
    );
  })(lO),
  [l$, lU] = ln(lO, [lB, lP]),
  lW = lP(),
  lH = d.forwardRef((e, t) => {
    let { type: n, ...r } = e;
    return (0, c.jsx)(lI.Provider, {
      scope: e.__scopeAccordion,
      children:
        "multiple" === n
          ? (0, c.jsx)(lK, { ...r, ref: t })
          : (0, c.jsx)(lX, { ...r, ref: t }),
    });
  });
lH.displayName = lO;
var [lY, lQ] = l$(lO),
  [lq, lG] = l$(lO, { collapsible: !1 }),
  lX = d.forwardRef((e, t) => {
    let {
        value: n,
        defaultValue: r,
        onValueChange: i = () => {},
        collapsible: a = !1,
        ...o
      } = e,
      [l, s] = lg({ prop: n, defaultProp: r ?? "", onChange: i, caller: lO });
    return (0, c.jsx)(lY, {
      scope: e.__scopeAccordion,
      value: d.useMemo(() => (l ? [l] : []), [l]),
      onItemOpen: s,
      onItemClose: d.useCallback(() => a && s(""), [a, s]),
      children: (0, c.jsx)(lq, {
        scope: e.__scopeAccordion,
        collapsible: a,
        children: (0, c.jsx)(l0, { ...o, ref: t }),
      }),
    });
  }),
  lK = d.forwardRef((e, t) => {
    let { value: n, defaultValue: r, onValueChange: i = () => {}, ...a } = e,
      [o, l] = lg({ prop: n, defaultProp: r ?? [], onChange: i, caller: lO }),
      s = d.useCallback((e) => l((t = []) => [...t, e]), [l]),
      u = d.useCallback((e) => l((t = []) => t.filter((t) => t !== e)), [l]);
    return (0, c.jsx)(lY, {
      scope: e.__scopeAccordion,
      value: o,
      onItemOpen: s,
      onItemClose: u,
      children: (0, c.jsx)(lq, {
        scope: e.__scopeAccordion,
        collapsible: !0,
        children: (0, c.jsx)(l0, { ...a, ref: t }),
      }),
    });
  }),
  [lZ, lJ] = l$(lO),
  l0 = d.forwardRef((e, t) => {
    let n,
      {
        __scopeAccordion: r,
        disabled: i,
        dir: a,
        orientation: o = "vertical",
        ...l
      } = e,
      s = li(d.useRef(null), t),
      u = lF(r),
      f = "ltr" === ((n = d.useContext(l_)), a || n || "ltr"),
      p = lp(e.onKeyDown, (e) => {
        if (!lV.includes(e.key)) return;
        let t = e.target,
          n = u().filter((e) => !e.ref.current?.disabled),
          r = n.findIndex((e) => e.ref.current === t),
          i = n.length;
        if (-1 === r) return;
        e.preventDefault();
        let a = r,
          l = i - 1,
          s = () => {
            (a = r + 1) > l && (a = 0);
          },
          c = () => {
            (a = r - 1) < 0 && (a = l);
          };
        switch (e.key) {
          case "Home":
            a = 0;
            break;
          case "End":
            a = l;
            break;
          case "ArrowRight":
            "horizontal" === o && (f ? s() : c());
            break;
          case "ArrowDown":
            "vertical" === o && s();
            break;
          case "ArrowLeft":
            "horizontal" === o && (f ? c() : s());
            break;
          case "ArrowUp":
            "vertical" === o && c();
        }
        let d = a % i;
        n[d].ref.current?.focus();
      });
    return (0, c.jsx)(lZ, {
      scope: r,
      disabled: i,
      direction: a,
      orientation: o,
      children: (0, c.jsx)(lI.Slot, {
        scope: r,
        children: (0, c.jsx)(ly.div, {
          ...l,
          "data-orientation": o,
          ref: s,
          onKeyDown: i ? void 0 : p,
        }),
      }),
    });
  }),
  l1 = "AccordionItem",
  [l2, l3] = l$(l1),
  l4 = d.forwardRef((e, t) => {
    let { __scopeAccordion: n, value: r, ...i } = e,
      a = lJ(l1, n),
      o = lQ(l1, n),
      l = lW(n),
      s = lS(),
      u = (r && o.value.includes(r)) || !1,
      d = a.disabled || e.disabled;
    return (0, c.jsx)(l2, {
      scope: n,
      open: u,
      disabled: d,
      triggerId: s,
      children: (0, c.jsx)(lj, {
        "data-orientation": a.orientation,
        "data-state": st(u),
        ...l,
        ...i,
        ref: t,
        disabled: d,
        open: u,
        onOpenChange: (e) => {
          e ? o.onItemOpen(r) : o.onItemClose(r);
        },
      }),
    });
  });
l4.displayName = l1;
var l5 = "AccordionHeader",
  l6 = d.forwardRef((e, t) => {
    let { __scopeAccordion: n, ...r } = e,
      i = lJ(lO, n),
      a = l3(l5, n);
    return (0, c.jsx)(ly.h3, {
      "data-orientation": i.orientation,
      "data-state": st(a.open),
      "data-disabled": a.disabled ? "" : void 0,
      ...r,
      ref: t,
    });
  });
l6.displayName = l5;
var l8 = "AccordionTrigger",
  l9 = d.forwardRef((e, t) => {
    let { __scopeAccordion: n, ...r } = e,
      i = lJ(lO, n),
      a = l3(l8, n),
      o = lG(l8, n),
      l = lW(n);
    return (0, c.jsx)(lI.ItemSlot, {
      scope: n,
      children: (0, c.jsx)(lM, {
        "aria-disabled": (a.open && !o.collapsible) || void 0,
        "data-orientation": i.orientation,
        id: a.triggerId,
        ...l,
        ...r,
        ref: t,
      }),
    });
  });
l9.displayName = l8;
var l7 = "AccordionContent",
  se = d.forwardRef((e, t) => {
    let { __scopeAccordion: n, ...r } = e,
      i = lJ(lO, n),
      a = l3(l7, n),
      o = lW(n);
    return (0, c.jsx)(lL, {
      role: "region",
      "aria-labelledby": a.triggerId,
      "data-orientation": i.orientation,
      ...o,
      ...r,
      ref: t,
      style: {
        "--radix-accordion-content-height":
          "var(--radix-collapsible-content-height)",
        "--radix-accordion-content-width":
          "var(--radix-collapsible-content-width)",
        ...e.style,
      },
    });
  });
function st(e) {
  return e ? "open" : "closed";
}
se.displayName = l7;
let sn = aZ("chevron-down", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
var sr = {};
Object.defineProperty(sr, Symbol.toStringTag, { value: "Module" });
let si = (e = new Map(), t = null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n,
  }),
  sa = [],
  so = (e, t, n) => {
    if (0 == e.length - t) return n.classGroupId;
    let r = e[t],
      i = n.nextPart.get(r);
    if (i) {
      let n = so(e, t + 1, i);
      if (n) return n;
    }
    let a = n.validators;
    if (null === a) return;
    let o = 0 === t ? e.join("-") : e.slice(t).join("-"),
      l = a.length;
    for (let e = 0; e < l; e++) {
      let t = a[e];
      if (t.validator(o)) return t.classGroupId;
    }
  },
  sl = (e, t) => {
    let n = si();
    for (let r in e) ss(e[r], n, r, t);
    return n;
  },
  ss = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) su(e[a], t, n, r);
  },
  su = (e, t, n, r) => {
    "string" == typeof e
      ? sc(e, t, n)
      : "function" == typeof e
      ? sd(e, t, n, r)
      : sf(e, t, n, r);
  },
  sc = (e, t, n) => {
    ("" === e ? t : sp(t, e)).classGroupId = n;
  },
  sd = (e, t, n, r) => {
    sh(e)
      ? ss(e(r), t, n, r)
      : (null === t.validators && (t.validators = []),
        t.validators.push({ classGroupId: n, validator: e }));
  },
  sf = (e, t, n, r) => {
    let i = Object.entries(e),
      a = i.length;
    for (let e = 0; e < a; e++) {
      let [a, o] = i[e];
      ss(o, sp(t, a), n, r);
    }
  },
  sp = (e, t) => {
    let n = e,
      r = t.split("-"),
      i = r.length;
    for (let e = 0; e < i; e++) {
      let t = r[e],
        i = n.nextPart.get(t);
      i || ((i = si()), n.nextPart.set(t, i)), (n = i);
    }
    return n;
  },
  sh = (e) => "isThemeGetter" in e && !0 === e.isThemeGetter,
  sm = [],
  sg = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i,
  }),
  sy = /\s+/,
  sv = (...e) => {
    let t,
      n,
      r = 0,
      i = "";
    for (; r < e.length; )
      (t = e[r++]) && (n = sb(t)) && (i && (i += " "), (i += n));
    return i;
  },
  sb = (e) => {
    let t;
    if ("string" == typeof e) return e;
    let n = "";
    for (let r = 0; r < e.length; r++)
      e[r] && (t = sb(e[r])) && (n && (n += " "), (n += t));
    return n;
  },
  sx = (e, ...t) => {
    let n,
      r,
      i,
      a,
      o = (e) => {
        let t = r(e);
        if (t) return t;
        let a = ((e, t) => {
          let {
              parseClassName: n,
              getClassGroupId: r,
              getConflictingClassGroupIds: i,
              sortModifiers: a,
              postfixLookupClassGroupIds: o,
            } = t,
            l = [],
            s = e.trim().split(sy),
            u = "";
          for (let e = s.length - 1; e >= 0; e -= 1) {
            let t,
              c = s[e],
              {
                isExternal: d,
                modifiers: f,
                hasImportantModifier: p,
                baseClassName: h,
                maybePostfixModifierPosition: m,
              } = n(c);
            if (d) {
              u = c + (u.length > 0 ? " " + u : u);
              continue;
            }
            let g = !!m;
            if (g) {
              let e = (t = r(h.substring(0, m))) && o[t] ? r(h) : void 0;
              e && e !== t && ((t = e), (g = !1));
            } else t = r(h);
            if (!t) {
              if (!g || !(t = r(h))) {
                u = c + (u.length > 0 ? " " + u : u);
                continue;
              }
              g = !1;
            }
            let y =
                0 === f.length ? "" : 1 === f.length ? f[0] : a(f).join(":"),
              v = p ? y + "!" : y,
              b = v + t;
            if (l.indexOf(b) > -1) continue;
            l.push(b);
            let x = i(t, g);
            for (let e = 0; e < x.length; ++e) {
              let t = x[e];
              l.push(v + t);
            }
            u = c + (u.length > 0 ? " " + u : u);
          }
          return u;
        })(e, n);
        return i(e, a), a;
      };
    return (
      (a = (l) => {
        var s;
        let u;
        return (
          (r = (n = {
            cache: ((e) => {
              if (e < 1) return { get: () => void 0, set: () => {} };
              let t = 0,
                n = Object.create(null),
                r = Object.create(null),
                i = (i, a) => {
                  (n[i] = a),
                    ++t > e && ((t = 0), (r = n), (n = Object.create(null)));
                };
              return {
                get(e) {
                  let t = n[e];
                  return void 0 !== t
                    ? t
                    : void 0 !== (t = r[e])
                    ? (i(e, t), t)
                    : void 0;
                },
                set(e, t) {
                  e in n ? (n[e] = t) : i(e, t);
                },
              };
            })((s = t.reduce((e, t) => t(e), e())).cacheSize),
            parseClassName: ((e) => {
              let { prefix: t, experimentalParseClassName: n } = e,
                r = (e) => {
                  let t,
                    n = [],
                    r = 0,
                    i = 0,
                    a = 0,
                    o = e.length;
                  for (let l = 0; l < o; l++) {
                    let o = e[l];
                    if (0 === r && 0 === i) {
                      if (":" === o) {
                        n.push(e.slice(a, l)), (a = l + 1);
                        continue;
                      }
                      if ("/" === o) {
                        t = l;
                        continue;
                      }
                    }
                    "[" === o
                      ? r++
                      : "]" === o
                      ? r--
                      : "(" === o
                      ? i++
                      : ")" === o && i--;
                  }
                  let l = 0 === n.length ? e : e.slice(a),
                    s = l,
                    u = !1;
                  return (
                    l.endsWith("!")
                      ? ((s = l.slice(0, -1)), (u = !0))
                      : l.startsWith("!") && ((s = l.slice(1)), (u = !0)),
                    sg(n, u, s, t && t > a ? t - a : void 0)
                  );
                };
              if (t) {
                let e = t + ":",
                  n = r;
                r = (t) =>
                  t.startsWith(e)
                    ? n(t.slice(e.length))
                    : sg(sm, !1, t, void 0, !0);
              }
              if (n) {
                let e = r;
                r = (t) => n({ className: t, parseClassName: e });
              }
              return r;
            })(s),
            sortModifiers:
              ((u = new Map()),
              s.orderSensitiveModifiers.forEach((e, t) => {
                u.set(e, 1e6 + t);
              }),
              (e) => {
                let t = [],
                  n = [];
                for (let r = 0; r < e.length; r++) {
                  let i = e[r],
                    a = "[" === i[0],
                    o = u.has(i);
                  a || o
                    ? (n.length > 0 && (n.sort(), t.push(...n), (n = [])),
                      t.push(i))
                    : n.push(i);
                }
                return n.length > 0 && (n.sort(), t.push(...n)), t;
              }),
            postfixLookupClassGroupIds: ((e) => {
              let t = Object.create(null),
                n = e.postfixLookupClassGroups;
              if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
              return t;
            })(s),
            ...((e) => {
              let t = ((e) => {
                  let { theme: t, classGroups: n } = e;
                  return sl(n, t);
                })(e),
                {
                  conflictingClassGroups: n,
                  conflictingClassGroupModifiers: r,
                } = e;
              return {
                getClassGroupId: (e) => {
                  if (e.startsWith("[") && e.endsWith("]")) {
                    var n;
                    let t, r, i;
                    return -1 === (n = e).slice(1, -1).indexOf(":")
                      ? void 0
                      : ((r = (t = n.slice(1, -1)).indexOf(":")),
                        (i = t.slice(0, r)) ? "arbitrary.." + i : void 0);
                  }
                  let r = e.split("-"),
                    i = +("" === r[0] && r.length > 1);
                  return so(r, i, t);
                },
                getConflictingClassGroupIds: (e, t) => {
                  if (t) {
                    let t = r[e],
                      i = n[e];
                    if (t) {
                      if (i) {
                        let e = Array(i.length + t.length);
                        for (let t = 0; t < i.length; t++) e[t] = i[t];
                        for (let n = 0; n < t.length; n++)
                          e[i.length + n] = t[n];
                        return e;
                      }
                      return t;
                    }
                    return i || sa;
                  }
                  return n[e] || sa;
                },
              };
            })(s),
          }).cache.get),
          (i = n.cache.set),
          (a = o),
          o(l)
        );
      }),
      (...e) => a(sv(...e))
    );
  },
  sw = [],
  sk = (e) => {
    let t = (t) => t[e] || sw;
    return (t.isThemeGetter = !0), t;
  },
  sS = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  sE = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  sC = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  sP = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  sT =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  sN = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  sj = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  sA =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  sM = (e) => sC.test(e),
  sR = (e) => !!e && !Number.isNaN(Number(e)),
  sL = (e) => !!e && Number.isInteger(Number(e)),
  sz = (e) => e.endsWith("%") && sR(e.slice(0, -1)),
  sD = (e) => sP.test(e),
  s_ = () => !0,
  sO = (e) => sT.test(e) && !sN.test(e),
  sV = () => !1,
  sI = (e) => sj.test(e),
  sF = (e) => sA.test(e),
  sB = (e) => !sW(e) && !sZ(e),
  s$ = (e) =>
    e.startsWith("@container") &&
    (("/" === e[10] && void 0 !== e[11]) ||
      ("s" === e[11] && void 0 !== e[16] && e.startsWith("-size/", 10)) ||
      ("n" === e[11] && void 0 !== e[18] && e.startsWith("-normal/", 10))),
  sU = (e) => s6(e, ue, sV),
  sW = (e) => sS.test(e),
  sH = (e) => s6(e, ut, sO),
  sY = (e) => s6(e, un, sR),
  sQ = (e) => s6(e, ui, s_),
  sq = (e) => s6(e, ur, sV),
  sG = (e) => s6(e, s9, sV),
  sX = (e) => s6(e, s7, sF),
  sK = (e) => s6(e, ua, sI),
  sZ = (e) => sE.test(e),
  sJ = (e) => s8(e, ut),
  s0 = (e) => s8(e, ur),
  s1 = (e) => s8(e, s9),
  s2 = (e) => s8(e, ue),
  s3 = (e) => s8(e, s7),
  s4 = (e) => s8(e, ua, !0),
  s5 = (e) => s8(e, ui, !0),
  s6 = (e, t, n) => {
    let r = sS.exec(e);
    return !!r && (r[1] ? t(r[1]) : n(r[2]));
  },
  s8 = (e, t, n = !1) => {
    let r = sE.exec(e);
    return !!r && (r[1] ? t(r[1]) : n);
  },
  s9 = (e) => "position" === e || "percentage" === e,
  s7 = (e) => "image" === e || "url" === e,
  ue = (e) => "length" === e || "size" === e || "bg-size" === e,
  ut = (e) => "length" === e,
  un = (e) => "number" === e,
  ur = (e) => "family-name" === e,
  ui = (e) => "number" === e || "weight" === e,
  ua = (e) => "shadow" === e,
  uo = Object.defineProperty(
    {
      __proto__: null,
      isAny: s_,
      isAnyNonArbitrary: sB,
      isArbitraryFamilyName: sq,
      isArbitraryImage: sX,
      isArbitraryLength: sH,
      isArbitraryNumber: sY,
      isArbitraryPosition: sG,
      isArbitraryShadow: sK,
      isArbitrarySize: sU,
      isArbitraryValue: sW,
      isArbitraryVariable: sZ,
      isArbitraryVariableFamilyName: s0,
      isArbitraryVariableImage: s3,
      isArbitraryVariableLength: sJ,
      isArbitraryVariablePosition: s1,
      isArbitraryVariableShadow: s4,
      isArbitraryVariableSize: s2,
      isArbitraryVariableWeight: s5,
      isArbitraryWeight: sQ,
      isFraction: sM,
      isInteger: sL,
      isNamedContainerQuery: s$,
      isNumber: sR,
      isPercent: sz,
      isTshirtSize: sD,
    },
    Symbol.toStringTag,
    { value: "Module" }
  ),
  ul = () => {
    let e = sk("color"),
      t = sk("font"),
      n = sk("text"),
      r = sk("font-weight"),
      i = sk("tracking"),
      a = sk("leading"),
      o = sk("breakpoint"),
      l = sk("container"),
      s = sk("spacing"),
      u = sk("radius"),
      c = sk("shadow"),
      d = sk("inset-shadow"),
      f = sk("text-shadow"),
      p = sk("drop-shadow"),
      h = sk("blur"),
      m = sk("perspective"),
      g = sk("aspect"),
      y = sk("ease"),
      v = sk("animate"),
      b = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      x = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      w = () => [...x(), sZ, sW],
      k = () => ["auto", "hidden", "clip", "visible", "scroll"],
      S = () => ["auto", "contain", "none"],
      E = () => [sZ, sW, s],
      C = () => [sM, "full", "auto", ...E()],
      P = () => [sL, "none", "subgrid", sZ, sW],
      T = () => ["auto", { span: ["full", sL, sZ, sW] }, sL, sZ, sW],
      N = () => [sL, "auto", sZ, sW],
      j = () => ["auto", "min", "max", "fr", sZ, sW],
      A = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      M = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      R = () => ["auto", ...E()],
      L = () => [
        sM,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...E(),
      ],
      z = () => [
        sM,
        "screen",
        "full",
        "dvw",
        "lvw",
        "svw",
        "min",
        "max",
        "fit",
        ...E(),
      ],
      D = () => [
        sM,
        "screen",
        "full",
        "lh",
        "dvh",
        "lvh",
        "svh",
        "min",
        "max",
        "fit",
        ...E(),
      ],
      _ = () => [e, sZ, sW],
      O = () => [...x(), s1, sG, { position: [sZ, sW] }],
      V = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      I = () => ["auto", "cover", "contain", s2, sU, { size: [sZ, sW] }],
      F = () => [sz, sJ, sH],
      B = () => ["", "none", "full", u, sZ, sW],
      $ = () => ["", sR, sJ, sH],
      U = () => ["solid", "dashed", "dotted", "double"],
      W = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      H = () => [sR, sz, s1, sG],
      Y = () => ["", "none", h, sZ, sW],
      Q = () => ["none", sR, sZ, sW],
      q = () => ["none", sR, sZ, sW],
      G = () => [sR, sZ, sW],
      X = () => [sM, "full", ...E()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [sD],
        breakpoint: [sD],
        color: [s_],
        container: [sD],
        "drop-shadow": [sD],
        ease: ["in", "out", "in-out"],
        font: [sB],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [sD],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [sD],
        shadow: [sD],
        spacing: ["px", sR],
        text: [sD],
        "text-shadow": [sD],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", sM, sW, sZ, g] }],
        container: ["container"],
        "container-type": [{ "@container": ["", "normal", "size", sZ, sW] }],
        "container-named": [s$],
        columns: [{ columns: [sR, sW, sZ, l] }],
        "break-after": [{ "break-after": b() }],
        "break-before": [{ "break-before": b() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: w() }],
        overflow: [{ overflow: k() }],
        "overflow-x": [{ "overflow-x": k() }],
        "overflow-y": [{ "overflow-y": k() }],
        overscroll: [{ overscroll: S() }],
        "overscroll-x": [{ "overscroll-x": S() }],
        "overscroll-y": [{ "overscroll-y": S() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: C() }],
        "inset-x": [{ "inset-x": C() }],
        "inset-y": [{ "inset-y": C() }],
        start: [{ "inset-s": C(), start: C() }],
        end: [{ "inset-e": C(), end: C() }],
        "inset-bs": [{ "inset-bs": C() }],
        "inset-be": [{ "inset-be": C() }],
        top: [{ top: C() }],
        right: [{ right: C() }],
        bottom: [{ bottom: C() }],
        left: [{ left: C() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [sL, "auto", sZ, sW] }],
        basis: [{ basis: [sM, "full", "auto", l, ...E()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [sR, sM, "auto", "initial", "none", sW] }],
        grow: [{ grow: ["", sR, sZ, sW] }],
        shrink: [{ shrink: ["", sR, sZ, sW] }],
        order: [{ order: [sL, "first", "last", "none", sZ, sW] }],
        "grid-cols": [{ "grid-cols": P() }],
        "col-start-end": [{ col: T() }],
        "col-start": [{ "col-start": N() }],
        "col-end": [{ "col-end": N() }],
        "grid-rows": [{ "grid-rows": P() }],
        "row-start-end": [{ row: T() }],
        "row-start": [{ "row-start": N() }],
        "row-end": [{ "row-end": N() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": j() }],
        "auto-rows": [{ "auto-rows": j() }],
        gap: [{ gap: E() }],
        "gap-x": [{ "gap-x": E() }],
        "gap-y": [{ "gap-y": E() }],
        "justify-content": [{ justify: [...A(), "normal"] }],
        "justify-items": [{ "justify-items": [...M(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...M()] }],
        "align-content": [{ content: ["normal", ...A()] }],
        "align-items": [{ items: [...M(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...M(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": A() }],
        "place-items": [{ "place-items": [...M(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...M()] }],
        p: [{ p: E() }],
        px: [{ px: E() }],
        py: [{ py: E() }],
        ps: [{ ps: E() }],
        pe: [{ pe: E() }],
        pbs: [{ pbs: E() }],
        pbe: [{ pbe: E() }],
        pt: [{ pt: E() }],
        pr: [{ pr: E() }],
        pb: [{ pb: E() }],
        pl: [{ pl: E() }],
        m: [{ m: R() }],
        mx: [{ mx: R() }],
        my: [{ my: R() }],
        ms: [{ ms: R() }],
        me: [{ me: R() }],
        mbs: [{ mbs: R() }],
        mbe: [{ mbe: R() }],
        mt: [{ mt: R() }],
        mr: [{ mr: R() }],
        mb: [{ mb: R() }],
        ml: [{ ml: R() }],
        "space-x": [{ "space-x": E() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": E() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: L() }],
        "inline-size": [{ inline: ["auto", ...z()] }],
        "min-inline-size": [{ "min-inline": ["auto", ...z()] }],
        "max-inline-size": [{ "max-inline": ["none", ...z()] }],
        "block-size": [{ block: ["auto", ...D()] }],
        "min-block-size": [{ "min-block": ["auto", ...D()] }],
        "max-block-size": [{ "max-block": ["none", ...D()] }],
        w: [{ w: [l, "screen", ...L()] }],
        "min-w": [{ "min-w": [l, "screen", "none", ...L()] }],
        "max-w": [
          { "max-w": [l, "screen", "none", "prose", { screen: [o] }, ...L()] },
        ],
        h: [{ h: ["screen", "lh", ...L()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...L()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...L()] }],
        "font-size": [{ text: ["base", n, sJ, sH] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [r, s5, sQ] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              sz,
              sW,
            ],
          },
        ],
        "font-family": [{ font: [s0, sq, t] }],
        "font-features": [{ "font-features": [sW] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [i, sZ, sW] }],
        "line-clamp": [{ "line-clamp": [sR, "none", sZ, sY] }],
        leading: [{ leading: [a, ...E()] }],
        "list-image": [{ "list-image": ["none", sZ, sW] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", sZ, sW] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: _() }],
        "text-color": [{ text: _() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...U(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [sR, "from-font", "auto", sZ, sH] },
        ],
        "text-decoration-color": [{ decoration: _() }],
        "underline-offset": [{ "underline-offset": [sR, "auto", sZ, sW] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: E() }],
        "tab-size": [{ tab: [sL, sZ, sW] }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              sZ,
              sW,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", sZ, sW] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: O() }],
        "bg-repeat": [{ bg: V() }],
        "bg-size": [{ bg: I() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  sL,
                  sZ,
                  sW,
                ],
                radial: ["", sZ, sW],
                conic: [sL, sZ, sW],
              },
              s3,
              sX,
            ],
          },
        ],
        "bg-color": [{ bg: _() }],
        "gradient-from-pos": [{ from: F() }],
        "gradient-via-pos": [{ via: F() }],
        "gradient-to-pos": [{ to: F() }],
        "gradient-from": [{ from: _() }],
        "gradient-via": [{ via: _() }],
        "gradient-to": [{ to: _() }],
        rounded: [{ rounded: B() }],
        "rounded-s": [{ "rounded-s": B() }],
        "rounded-e": [{ "rounded-e": B() }],
        "rounded-t": [{ "rounded-t": B() }],
        "rounded-r": [{ "rounded-r": B() }],
        "rounded-b": [{ "rounded-b": B() }],
        "rounded-l": [{ "rounded-l": B() }],
        "rounded-ss": [{ "rounded-ss": B() }],
        "rounded-se": [{ "rounded-se": B() }],
        "rounded-ee": [{ "rounded-ee": B() }],
        "rounded-es": [{ "rounded-es": B() }],
        "rounded-tl": [{ "rounded-tl": B() }],
        "rounded-tr": [{ "rounded-tr": B() }],
        "rounded-br": [{ "rounded-br": B() }],
        "rounded-bl": [{ "rounded-bl": B() }],
        "border-w": [{ border: $() }],
        "border-w-x": [{ "border-x": $() }],
        "border-w-y": [{ "border-y": $() }],
        "border-w-s": [{ "border-s": $() }],
        "border-w-e": [{ "border-e": $() }],
        "border-w-bs": [{ "border-bs": $() }],
        "border-w-be": [{ "border-be": $() }],
        "border-w-t": [{ "border-t": $() }],
        "border-w-r": [{ "border-r": $() }],
        "border-w-b": [{ "border-b": $() }],
        "border-w-l": [{ "border-l": $() }],
        "divide-x": [{ "divide-x": $() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": $() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...U(), "hidden", "none"] }],
        "divide-style": [{ divide: [...U(), "hidden", "none"] }],
        "border-color": [{ border: _() }],
        "border-color-x": [{ "border-x": _() }],
        "border-color-y": [{ "border-y": _() }],
        "border-color-s": [{ "border-s": _() }],
        "border-color-e": [{ "border-e": _() }],
        "border-color-bs": [{ "border-bs": _() }],
        "border-color-be": [{ "border-be": _() }],
        "border-color-t": [{ "border-t": _() }],
        "border-color-r": [{ "border-r": _() }],
        "border-color-b": [{ "border-b": _() }],
        "border-color-l": [{ "border-l": _() }],
        "divide-color": [{ divide: _() }],
        "outline-style": [{ outline: [...U(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [sR, sZ, sW] }],
        "outline-w": [{ outline: ["", sR, sJ, sH] }],
        "outline-color": [{ outline: _() }],
        shadow: [{ shadow: ["", "none", c, s4, sK] }],
        "shadow-color": [{ shadow: _() }],
        "inset-shadow": [{ "inset-shadow": ["none", d, s4, sK] }],
        "inset-shadow-color": [{ "inset-shadow": _() }],
        "ring-w": [{ ring: $() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: _() }],
        "ring-offset-w": [{ "ring-offset": [sR, sH] }],
        "ring-offset-color": [{ "ring-offset": _() }],
        "inset-ring-w": [{ "inset-ring": $() }],
        "inset-ring-color": [{ "inset-ring": _() }],
        "text-shadow": [{ "text-shadow": ["none", f, s4, sK] }],
        "text-shadow-color": [{ "text-shadow": _() }],
        opacity: [{ opacity: [sR, sZ, sW] }],
        "mix-blend": [{ "mix-blend": [...W(), "plus-darker", "plus-lighter"] }],
        "bg-blend": [{ "bg-blend": W() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [sR] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": H() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": H() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": _() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": _() }],
        "mask-image-t-from-pos": [{ "mask-t-from": H() }],
        "mask-image-t-to-pos": [{ "mask-t-to": H() }],
        "mask-image-t-from-color": [{ "mask-t-from": _() }],
        "mask-image-t-to-color": [{ "mask-t-to": _() }],
        "mask-image-r-from-pos": [{ "mask-r-from": H() }],
        "mask-image-r-to-pos": [{ "mask-r-to": H() }],
        "mask-image-r-from-color": [{ "mask-r-from": _() }],
        "mask-image-r-to-color": [{ "mask-r-to": _() }],
        "mask-image-b-from-pos": [{ "mask-b-from": H() }],
        "mask-image-b-to-pos": [{ "mask-b-to": H() }],
        "mask-image-b-from-color": [{ "mask-b-from": _() }],
        "mask-image-b-to-color": [{ "mask-b-to": _() }],
        "mask-image-l-from-pos": [{ "mask-l-from": H() }],
        "mask-image-l-to-pos": [{ "mask-l-to": H() }],
        "mask-image-l-from-color": [{ "mask-l-from": _() }],
        "mask-image-l-to-color": [{ "mask-l-to": _() }],
        "mask-image-x-from-pos": [{ "mask-x-from": H() }],
        "mask-image-x-to-pos": [{ "mask-x-to": H() }],
        "mask-image-x-from-color": [{ "mask-x-from": _() }],
        "mask-image-x-to-color": [{ "mask-x-to": _() }],
        "mask-image-y-from-pos": [{ "mask-y-from": H() }],
        "mask-image-y-to-pos": [{ "mask-y-to": H() }],
        "mask-image-y-from-color": [{ "mask-y-from": _() }],
        "mask-image-y-to-color": [{ "mask-y-to": _() }],
        "mask-image-radial": [{ "mask-radial": [sZ, sW] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": H() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": H() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": _() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": _() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": x() }],
        "mask-image-conic-pos": [{ "mask-conic": [sR] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": H() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": H() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": _() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": _() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: O() }],
        "mask-repeat": [{ mask: V() }],
        "mask-size": [{ mask: I() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", sZ, sW] }],
        filter: [{ filter: ["", "none", sZ, sW] }],
        blur: [{ blur: Y() }],
        brightness: [{ brightness: [sR, sZ, sW] }],
        contrast: [{ contrast: [sR, sZ, sW] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", p, s4, sK] }],
        "drop-shadow-color": [{ "drop-shadow": _() }],
        grayscale: [{ grayscale: ["", sR, sZ, sW] }],
        "hue-rotate": [{ "hue-rotate": [sR, sZ, sW] }],
        invert: [{ invert: ["", sR, sZ, sW] }],
        saturate: [{ saturate: [sR, sZ, sW] }],
        sepia: [{ sepia: ["", sR, sZ, sW] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", sZ, sW] }],
        "backdrop-blur": [{ "backdrop-blur": Y() }],
        "backdrop-brightness": [{ "backdrop-brightness": [sR, sZ, sW] }],
        "backdrop-contrast": [{ "backdrop-contrast": [sR, sZ, sW] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", sR, sZ, sW] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [sR, sZ, sW] }],
        "backdrop-invert": [{ "backdrop-invert": ["", sR, sZ, sW] }],
        "backdrop-opacity": [{ "backdrop-opacity": [sR, sZ, sW] }],
        "backdrop-saturate": [{ "backdrop-saturate": [sR, sZ, sW] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", sR, sZ, sW] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": E() }],
        "border-spacing-x": [{ "border-spacing-x": E() }],
        "border-spacing-y": [{ "border-spacing-y": E() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              sZ,
              sW,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [sR, "initial", sZ, sW] }],
        ease: [{ ease: ["linear", "initial", y, sZ, sW] }],
        delay: [{ delay: [sR, sZ, sW] }],
        animate: [{ animate: ["none", v, sZ, sW] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [m, sZ, sW] }],
        "perspective-origin": [{ "perspective-origin": w() }],
        rotate: [{ rotate: Q() }],
        "rotate-x": [{ "rotate-x": Q() }],
        "rotate-y": [{ "rotate-y": Q() }],
        "rotate-z": [{ "rotate-z": Q() }],
        scale: [{ scale: q() }],
        "scale-x": [{ "scale-x": q() }],
        "scale-y": [{ "scale-y": q() }],
        "scale-z": [{ "scale-z": q() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: G() }],
        "skew-x": [{ "skew-x": G() }],
        "skew-y": [{ "skew-y": G() }],
        transform: [{ transform: [sZ, sW, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: w() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: X() }],
        "translate-x": [{ "translate-x": X() }],
        "translate-y": [{ "translate-y": X() }],
        "translate-z": [{ "translate-z": X() }],
        "translate-none": ["translate-none"],
        zoom: [{ zoom: [sL, sZ, sW] }],
        accent: [{ accent: _() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: _() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              sZ,
              sW,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": _() }],
        "scrollbar-track-color": [{ "scrollbar-track": _() }],
        "scrollbar-gutter": [
          { "scrollbar-gutter": ["auto", "stable", "both"] },
        ],
        "scrollbar-w": [{ scrollbar: ["auto", "thin", "none"] }],
        "scroll-m": [{ "scroll-m": E() }],
        "scroll-mx": [{ "scroll-mx": E() }],
        "scroll-my": [{ "scroll-my": E() }],
        "scroll-ms": [{ "scroll-ms": E() }],
        "scroll-me": [{ "scroll-me": E() }],
        "scroll-mbs": [{ "scroll-mbs": E() }],
        "scroll-mbe": [{ "scroll-mbe": E() }],
        "scroll-mt": [{ "scroll-mt": E() }],
        "scroll-mr": [{ "scroll-mr": E() }],
        "scroll-mb": [{ "scroll-mb": E() }],
        "scroll-ml": [{ "scroll-ml": E() }],
        "scroll-p": [{ "scroll-p": E() }],
        "scroll-px": [{ "scroll-px": E() }],
        "scroll-py": [{ "scroll-py": E() }],
        "scroll-ps": [{ "scroll-ps": E() }],
        "scroll-pe": [{ "scroll-pe": E() }],
        "scroll-pbs": [{ "scroll-pbs": E() }],
        "scroll-pbe": [{ "scroll-pbe": E() }],
        "scroll-pt": [{ "scroll-pt": E() }],
        "scroll-pr": [{ "scroll-pr": E() }],
        "scroll-pb": [{ "scroll-pb": E() }],
        "scroll-pl": [{ "scroll-pl": E() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", sZ, sW],
          },
        ],
        fill: [{ fill: ["none", ..._()] }],
        "stroke-w": [{ stroke: [sR, sJ, sH, sY] }],
        stroke: [{ stroke: ["none", ..._()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        "container-named": ["container-type"],
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "inset-bs",
          "inset-be",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-bs",
          "border-w-be",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-bs",
          "border-color-be",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mbs",
          "scroll-mbe",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pbs",
          "scroll-pbe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      postfixLookupClassGroups: ["container-type"],
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  us = (
    e,
    {
      cacheSize: t,
      prefix: n,
      experimentalParseClassName: r,
      extend: i = {},
      override: a = {},
    }
  ) => (
    uu(e, "cacheSize", t),
    uu(e, "prefix", n),
    uu(e, "experimentalParseClassName", r),
    uc(e.theme, a.theme),
    uc(e.classGroups, a.classGroups),
    uc(e.conflictingClassGroups, a.conflictingClassGroups),
    uc(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers),
    uu(e, "postfixLookupClassGroups", a.postfixLookupClassGroups),
    uu(e, "orderSensitiveModifiers", a.orderSensitiveModifiers),
    ud(e.theme, i.theme),
    ud(e.classGroups, i.classGroups),
    ud(e.conflictingClassGroups, i.conflictingClassGroups),
    ud(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers),
    uf(e, i, "postfixLookupClassGroups"),
    uf(e, i, "orderSensitiveModifiers"),
    e
  ),
  uu = (e, t, n) => {
    void 0 !== n && (e[t] = n);
  },
  uc = (e, t) => {
    if (t) for (let n in t) uu(e, n, t[n]);
  },
  ud = (e, t) => {
    if (t) for (let n in t) uf(e, t, n);
  },
  uf = (e, t, n) => {
    let r = t[n];
    void 0 !== r && (e[n] = e[n] ? e[n].concat(r) : r);
  },
  up = sx(ul);
function uh(...e) {
  return (0, sr.twMerge)(
    (function () {
      for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
        (e = arguments[n]) &&
          (t = (function e(t) {
            var n,
              r,
              i = "";
            if ("string" == typeof t || "number" == typeof t) i += t;
            else if ("object" == typeof t)
              if (Array.isArray(t)) {
                var a = t.length;
                for (n = 0; n < a; n++)
                  t[n] && (r = e(t[n])) && (i && (i += " "), (i += r));
              } else for (r in t) t[r] && (i && (i += " "), (i += r));
            return i;
          })(e)) &&
          (r && (r += " "), (r += t));
      return r;
    })(e)
  );
}
(sr.createTailwindMerge = sx),
  (sr.extendTailwindMerge = (e, ...t) =>
    "function" == typeof e ? sx(ul, e, ...t) : sx(() => us(ul(), e), ...t)),
  (sr.fromTheme = sk),
  (sr.getDefaultConfig = ul),
  (sr.mergeConfigs = us),
  (sr.twJoin = sv),
  (sr.twMerge = up),
  (sr.validators = uo);
let um = d.forwardRef(({ className: e, ...t }, n) =>
  (0, c.jsx)(l4, { ref: n, className: uh("border-b", e), ...t })
);
um.displayName = "AccordionItem";
let ug = d.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, c.jsx)(l6, {
    className: "flex",
    children: (0, c.jsxs)(l9, {
      ref: r,
      className: uh(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...n,
      children: [
        t,
        (0, c.jsx)(sn, {
          className:
            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
        }),
      ],
    }),
  })
);
ug.displayName = l9.displayName;
let uy = d.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, c.jsx)(se, {
    ref: r,
    className:
      "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: (0, c.jsx)("div", { className: uh("pb-4 pt-0", e), children: t }),
  })
);
function uv() {
  return (0, c.jsx)("section", {
    id: "faq",
    className: "border-b border-hairline bg-paper2 py-24",
    children: (0, c.jsxs)("div", {
      className: "mx-auto max-w-3xl px-6",
      children: [
        (0, c.jsxs)(aY.div, {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, margin: "-10%" },
          transition: { duration: 0.6 },
          children: [
            (0, c.jsx)("p", {
              className:
                "text-center text-xs font-semibold uppercase tracking-[0.18em] text-gold2",
              children: "FAQ",
            }),
            (0, c.jsx)("h2", {
              className:
                "mt-4 text-center font-display text-3xl font-medium tracking-tight text-inkdark sm:text-4xl",
              children: "Frequently Asked Questions",
            }),
          ],
        }),
        (0, c.jsx)(aY.div, {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, margin: "-10%" },
          transition: { duration: 0.6, delay: 0.1 },
          children: (0, c.jsx)(lH, {
            type: "single",
            collapsible: !0,
            className: "mt-10",
            children: or.map((e, t) =>
              (0, c.jsxs)(
                um,
                {
                  value: `item-${t}`,
                  className: "border-hairline",
                  children: [
                    (0, c.jsx)(ug, {
                      className:
                        "font-display text-base font-medium text-inkdark hover:text-gold2",
                      children: e.q,
                    }),
                    (0, c.jsx)(uy, {
                      className: "text-sm leading-relaxed text-inkdim",
                      children: e.a,
                    }),
                  ],
                },
                e.q
              )
            ),
          }),
        }),
      ],
    }),
  });
}
(uy.displayName = se.displayName),
  (0, f.createRoot)(document.getElementById("root")).render(
    (0, c.jsx)(d.StrictMode, {
      children: (0, c.jsx)(function () {
        return (0,
        c.jsxs)("div", { id: "top", className: "min-h-screen w-full overflow-x-hidden bg-paper font-body text-inkdark", children: [(0, c.jsx)(oa, {}), (0, c.jsxs)("main", { children: [(0, c.jsx)(o$, {}), (0, c.jsx)(oo, {}), (0, c.jsx)(oH, {}), (0, c.jsx)(oY, {}), (0, c.jsx)(oK, {}), (0, c.jsx)(o2, {}), (0, c.jsx)(o3, {}), (0, c.jsx)(o6, {}), (0, c.jsx)(lt, {}), (0, c.jsx)(uv, {})] }), (0, c.jsx)(ol, {})] });
      }, {}),
    })
  );
