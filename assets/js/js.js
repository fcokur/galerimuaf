!(function (t, e) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = t.document
        ? e(t, !0)
        : function (t) {
            if (!t.document)
              throw new Error("jQuery requires a window with a document");
            return e(t);
          })
    : e(t);
})("undefined" != typeof window ? window : this, function (E, t) {
  "use strict";
  function m(t) {
    return null != t && t === t.window;
  }
  var e = [],
    n = Object.getPrototypeOf,
    a = e.slice,
    g = e.flat
      ? function (t) {
          return e.flat.call(t);
        }
      : function (t) {
          return e.concat.apply([], t);
        },
    l = e.push,
    o = e.indexOf,
    i = {},
    r = i.toString,
    y = i.hasOwnProperty,
    s = y.toString,
    u = s.call(Object),
    v = {},
    _ = function (t) {
      return "function" == typeof t && "number" != typeof t.nodeType;
    },
    x = E.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(t, e, n) {
    var i,
      o,
      r = (n = n || x).createElement("script");
    if (((r.text = t), e))
      for (i in c)
        (o = e[i] || (e.getAttribute && e.getAttribute(i))) &&
          r.setAttribute(i, o);
    n.head.appendChild(r).parentNode.removeChild(r);
  }
  function p(t) {
    return null == t
      ? t + ""
      : "object" == typeof t || "function" == typeof t
      ? i[r.call(t)] || "object"
      : typeof t;
  }
  var f = "3.5.1",
    T = function (t, e) {
      return new T.fn.init(t, e);
    };
  function d(t) {
    var e = !!t && "length" in t && t.length,
      n = p(t);
    return (
      !_(t) &&
      !m(t) &&
      ("array" === n ||
        0 === e ||
        ("number" == typeof e && 0 < e && e - 1 in t))
    );
  }
  (T.fn = T.prototype =
    {
      jquery: f,
      constructor: T,
      length: 0,
      toArray: function () {
        return a.call(this);
      },
      get: function (t) {
        return null == t
          ? a.call(this)
          : t < 0
          ? this[t + this.length]
          : this[t];
      },
      pushStack: function (t) {
        t = T.merge(this.constructor(), t);
        return (t.prevObject = this), t;
      },
      each: function (t) {
        return T.each(this, t);
      },
      map: function (n) {
        return this.pushStack(
          T.map(this, function (t, e) {
            return n.call(t, e, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(a.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          T.grep(this, function (t, e) {
            return (e + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          T.grep(this, function (t, e) {
            return e % 2;
          })
        );
      },
      eq: function (t) {
        var e = this.length,
          t = +t + (t < 0 ? e : 0);
        return this.pushStack(0 <= t && t < e ? [this[t]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: l,
      sort: e.sort,
      splice: e.splice,
    }),
    (T.extend = T.fn.extend =
      function () {
        var t,
          e,
          n,
          i,
          o,
          r = arguments[0] || {},
          s = 1,
          a = arguments.length,
          l = !1;
        for (
          "boolean" == typeof r && ((l = r), (r = arguments[s] || {}), s++),
            "object" == typeof r || _(r) || (r = {}),
            s === a && ((r = this), s--);
          s < a;
          s++
        )
          if (null != (t = arguments[s]))
            for (e in t)
              (n = t[e]),
                "__proto__" !== e &&
                  r !== n &&
                  (l && n && (T.isPlainObject(n) || (i = Array.isArray(n)))
                    ? ((o = r[e]),
                      (o =
                        i && !Array.isArray(o)
                          ? []
                          : i || T.isPlainObject(o)
                          ? o
                          : {}),
                      (i = !1),
                      (r[e] = T.extend(l, o, n)))
                    : void 0 !== n && (r[e] = n));
        return r;
      }),
    T.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (t) {
        throw new Error(t);
      },
      noop: function () {},
      isPlainObject: function (t) {
        return (
          !(!t || "[object Object]" !== r.call(t)) &&
          (!(t = n(t)) ||
            ("function" ==
              typeof (t = y.call(t, "constructor") && t.constructor) &&
              s.call(t) === u))
        );
      },
      isEmptyObject: function (t) {
        for (var e in t) return !1;
        return !0;
      },
      globalEval: function (t, e, n) {
        b(t, { nonce: e && e.nonce }, n);
      },
      each: function (t, e) {
        var n,
          i = 0;
        if (d(t))
          for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
        else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
        return t;
      },
      makeArray: function (t, e) {
        e = e || [];
        return (
          null != t &&
            (d(Object(t))
              ? T.merge(e, "string" == typeof t ? [t] : t)
              : l.call(e, t)),
          e
        );
      },
      inArray: function (t, e, n) {
        return null == e ? -1 : o.call(e, t, n);
      },
      merge: function (t, e) {
        for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
        return (t.length = o), t;
      },
      grep: function (t, e, n) {
        for (var i = [], o = 0, r = t.length, s = !n; o < r; o++)
          !e(t[o], o) != s && i.push(t[o]);
        return i;
      },
      map: function (t, e, n) {
        var i,
          o,
          r = 0,
          s = [];
        if (d(t))
          for (i = t.length; r < i; r++)
            null != (o = e(t[r], r, n)) && s.push(o);
        else for (r in t) null != (o = e(t[r], r, n)) && s.push(o);
        return g(s);
      },
      guid: 1,
      support: v,
    }),
    "function" == typeof Symbol && (T.fn[Symbol.iterator] = e[Symbol.iterator]),
    T.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (t, e) {
        i["[object " + e + "]"] = e.toLowerCase();
      }
    );
  var h = (function (n) {
    function f(t, e) {
      return (
        (t = "0x" + t.slice(1) - 65536),
        e ||
          (t < 0
            ? String.fromCharCode(65536 + t)
            : String.fromCharCode((t >> 10) | 55296, (1023 & t) | 56320))
      );
    }
    function i() {
      E();
    }
    var t,
      h,
      b,
      r,
      o,
      p,
      d,
      m,
      w,
      l,
      u,
      E,
      x,
      s,
      T,
      g,
      a,
      c,
      y,
      C = "sizzle" + +new Date(),
      v = n.document,
      S = 0,
      _ = 0,
      I = lt(),
      D = lt(),
      k = lt(),
      A = lt(),
      L = function (t, e) {
        return t === e && (u = !0), 0;
      },
      N = {}.hasOwnProperty,
      e = [],
      O = e.pop,
      j = e.push,
      z = e.push,
      q = e.slice,
      R = function (t, e) {
        for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
        return -1;
      },
      P =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      W = "[\\x20\\t\\r\\n\\f]",
      H =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        W +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      M =
        "\\[" +
        W +
        "*(" +
        H +
        ")(?:" +
        W +
        "*([*^$|!~]?=)" +
        W +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        H +
        "))|)" +
        W +
        "*\\]",
      F =
        ":(" +
        H +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        M +
        ")*)|.*)\\)|)",
      B = new RegExp(W + "+", "g"),
      Q = new RegExp("^" + W + "+|((?:^|[^\\\\])(?:\\\\.)*)" + W + "+$", "g"),
      U = new RegExp("^" + W + "*," + W + "*"),
      Y = new RegExp("^" + W + "*([>+~]|" + W + ")" + W + "*"),
      $ = new RegExp(W + "|>"),
      V = new RegExp(F),
      X = new RegExp("^" + H + "$"),
      G = {
        ID: new RegExp("^#(" + H + ")"),
        CLASS: new RegExp("^\\.(" + H + ")"),
        TAG: new RegExp("^(" + H + "|[*])"),
        ATTR: new RegExp("^" + M),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            W +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            W +
            "*(?:([+-]|)" +
            W +
            "*(\\d+)|))" +
            W +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + P + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            W +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            W +
            "*((?:-\\d)?\\d*)" +
            W +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      K = /HTML$/i,
      J = /^(?:input|select|textarea|button)$/i,
      Z = /^h\d$/i,
      tt = /^[^{]+\{\s*\[native \w/,
      et = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      nt = /[+~]/,
      it = new RegExp("\\\\[\\da-fA-F]{1,6}" + W + "?|\\\\([^\\r\\n\\f])", "g"),
      ot = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      rt = function (t, e) {
        return e
          ? "\0" === t
            ? "ï¿½"
            : t.slice(0, -1) +
              "\\" +
              t.charCodeAt(t.length - 1).toString(16) +
              " "
          : "\\" + t;
      },
      st = vt(
        function (t) {
          return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      z.apply((e = q.call(v.childNodes)), v.childNodes),
        e[v.childNodes.length].nodeType;
    } catch (t) {
      z = {
        apply: e.length
          ? function (t, e) {
              j.apply(t, q.call(e));
            }
          : function (t, e) {
              for (var n = t.length, i = 0; (t[n++] = e[i++]); );
              t.length = n - 1;
            },
      };
    }
    function at(e, t, n, i) {
      var o,
        r,
        s,
        a,
        l,
        u,
        c,
        f = t && t.ownerDocument,
        d = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof e || !e || (1 !== d && 9 !== d && 11 !== d))
      )
        return n;
      if (!i && (E(t), (t = t || x), T)) {
        if (11 !== d && (l = et.exec(e)))
          if ((o = l[1])) {
            if (9 === d) {
              if (!(s = t.getElementById(o))) return n;
              if (s.id === o) return n.push(s), n;
            } else if (f && (s = f.getElementById(o)) && y(t, s) && s.id === o)
              return n.push(s), n;
          } else {
            if (l[2]) return z.apply(n, t.getElementsByTagName(e)), n;
            if (
              (o = l[3]) &&
              h.getElementsByClassName &&
              t.getElementsByClassName
            )
              return z.apply(n, t.getElementsByClassName(o)), n;
          }
        if (
          h.qsa &&
          !A[e + " "] &&
          (!g || !g.test(e)) &&
          (1 !== d || "object" !== t.nodeName.toLowerCase())
        ) {
          if (((c = e), (f = t), 1 === d && ($.test(e) || Y.test(e)))) {
            for (
              ((f = (nt.test(e) && mt(t.parentNode)) || t) === t && h.scope) ||
                ((a = t.getAttribute("id"))
                  ? (a = a.replace(ot, rt))
                  : t.setAttribute("id", (a = C))),
                r = (u = p(e)).length;
              r--;

            )
              u[r] = (a ? "#" + a : ":scope") + " " + yt(u[r]);
            c = u.join(",");
          }
          try {
            return z.apply(n, f.querySelectorAll(c)), n;
          } catch (t) {
            A(e, !0);
          } finally {
            a === C && t.removeAttribute("id");
          }
        }
      }
      return m(e.replace(Q, "$1"), t, n, i);
    }
    function lt() {
      var n = [];
      function i(t, e) {
        return (
          n.push(t + " ") > b.cacheLength && delete i[n.shift()],
          (i[t + " "] = e)
        );
      }
      return i;
    }
    function ut(t) {
      return (t[C] = !0), t;
    }
    function ct(t) {
      var e = x.createElement("fieldset");
      try {
        return !!t(e);
      } catch (t) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), (e = null);
      }
    }
    function ft(t, e) {
      for (var n = t.split("|"), i = n.length; i--; ) b.attrHandle[n[i]] = e;
    }
    function dt(t, e) {
      var n = e && t,
        i =
          n &&
          1 === t.nodeType &&
          1 === e.nodeType &&
          t.sourceIndex - e.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
      return t ? 1 : -1;
    }
    function ht(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && st(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function pt(s) {
      return ut(function (r) {
        return (
          (r = +r),
          ut(function (t, e) {
            for (var n, i = s([], t.length, r), o = i.length; o--; )
              t[(n = i[o])] && (t[n] = !(e[n] = t[n]));
          })
        );
      });
    }
    function mt(t) {
      return t && void 0 !== t.getElementsByTagName && t;
    }
    for (t in ((h = at.support = {}),
    (o = at.isXML =
      function (t) {
        var e = t.namespaceURI,
          t = (t.ownerDocument || t).documentElement;
        return !K.test(e || (t && t.nodeName) || "HTML");
      }),
    (E = at.setDocument =
      function (t) {
        var e,
          t = t ? t.ownerDocument || t : v;
        return (
          t != x &&
            9 === t.nodeType &&
            t.documentElement &&
            ((s = (x = t).documentElement),
            (T = !o(x)),
            v != x &&
              (e = x.defaultView) &&
              e.top !== e &&
              (e.addEventListener
                ? e.addEventListener("unload", i, !1)
                : e.attachEvent && e.attachEvent("onunload", i)),
            (h.scope = ct(function (t) {
              return (
                s.appendChild(t).appendChild(x.createElement("div")),
                void 0 !== t.querySelectorAll &&
                  !t.querySelectorAll(":scope fieldset div").length
              );
            })),
            (h.attributes = ct(function (t) {
              return (t.className = "i"), !t.getAttribute("className");
            })),
            (h.getElementsByTagName = ct(function (t) {
              return (
                t.appendChild(x.createComment("")),
                !t.getElementsByTagName("*").length
              );
            })),
            (h.getElementsByClassName = tt.test(x.getElementsByClassName)),
            (h.getById = ct(function (t) {
              return (
                (s.appendChild(t).id = C),
                !x.getElementsByName || !x.getElementsByName(C).length
              );
            })),
            h.getById
              ? ((b.filter.ID = function (t) {
                  var e = t.replace(it, f);
                  return function (t) {
                    return t.getAttribute("id") === e;
                  };
                }),
                (b.find.ID = function (t, e) {
                  if (void 0 !== e.getElementById && T) {
                    t = e.getElementById(t);
                    return t ? [t] : [];
                  }
                }))
              : ((b.filter.ID = function (t) {
                  var e = t.replace(it, f);
                  return function (t) {
                    t =
                      void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return t && t.value === e;
                  };
                }),
                (b.find.ID = function (t, e) {
                  if (void 0 !== e.getElementById && T) {
                    var n,
                      i,
                      o,
                      r = e.getElementById(t);
                    if (r) {
                      if ((n = r.getAttributeNode("id")) && n.value === t)
                        return [r];
                      for (o = e.getElementsByName(t), i = 0; (r = o[i++]); )
                        if ((n = r.getAttributeNode("id")) && n.value === t)
                          return [r];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = h.getElementsByTagName
              ? function (t, e) {
                  return void 0 !== e.getElementsByTagName
                    ? e.getElementsByTagName(t)
                    : h.qsa
                    ? e.querySelectorAll(t)
                    : void 0;
                }
              : function (t, e) {
                  var n,
                    i = [],
                    o = 0,
                    r = e.getElementsByTagName(t);
                  if ("*" !== t) return r;
                  for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                  return i;
                }),
            (b.find.CLASS =
              h.getElementsByClassName &&
              function (t, e) {
                if (void 0 !== e.getElementsByClassName && T)
                  return e.getElementsByClassName(t);
              }),
            (a = []),
            (g = []),
            (h.qsa = tt.test(x.querySelectorAll)) &&
              (ct(function (t) {
                var e;
                (s.appendChild(t).innerHTML =
                  "<a id='" +
                  C +
                  "'></a><select id='" +
                  C +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  t.querySelectorAll("[msallowcapture^='']").length &&
                    g.push("[*^$]=" + W + "*(?:''|\"\")"),
                  t.querySelectorAll("[selected]").length ||
                    g.push("\\[" + W + "*(?:value|" + P + ")"),
                  t.querySelectorAll("[id~=" + C + "-]").length || g.push("~="),
                  (e = x.createElement("input")).setAttribute("name", ""),
                  t.appendChild(e),
                  t.querySelectorAll("[name='']").length ||
                    g.push("\\[" + W + "*name" + W + "*=" + W + "*(?:''|\"\")"),
                  t.querySelectorAll(":checked").length || g.push(":checked"),
                  t.querySelectorAll("a#" + C + "+*").length ||
                    g.push(".#.+[+~]"),
                  t.querySelectorAll("\\\f"),
                  g.push("[\\r\\n\\f]");
              }),
              ct(function (t) {
                t.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = x.createElement("input");
                e.setAttribute("type", "hidden"),
                  t.appendChild(e).setAttribute("name", "D"),
                  t.querySelectorAll("[name=d]").length &&
                    g.push("name" + W + "*[*^$|!~]?="),
                  2 !== t.querySelectorAll(":enabled").length &&
                    g.push(":enabled", ":disabled"),
                  (s.appendChild(t).disabled = !0),
                  2 !== t.querySelectorAll(":disabled").length &&
                    g.push(":enabled", ":disabled"),
                  t.querySelectorAll("*,:x"),
                  g.push(",.*:");
              })),
            (h.matchesSelector = tt.test(
              (c =
                s.matches ||
                s.webkitMatchesSelector ||
                s.mozMatchesSelector ||
                s.oMatchesSelector ||
                s.msMatchesSelector)
            )) &&
              ct(function (t) {
                (h.disconnectedMatch = c.call(t, "*")),
                  c.call(t, "[s!='']:x"),
                  a.push("!=", F);
              }),
            (g = g.length && new RegExp(g.join("|"))),
            (a = a.length && new RegExp(a.join("|"))),
            (e = tt.test(s.compareDocumentPosition)),
            (y =
              e || tt.test(s.contains)
                ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                      e = e && e.parentNode;
                    return (
                      t === e ||
                      !(
                        !e ||
                        1 !== e.nodeType ||
                        !(n.contains
                          ? n.contains(e)
                          : t.compareDocumentPosition &&
                            16 & t.compareDocumentPosition(e))
                      )
                    );
                  }
                : function (t, e) {
                    if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                    return !1;
                  }),
            (L = e
              ? function (t, e) {
                  if (t === e) return (u = !0), 0;
                  var n =
                    !t.compareDocumentPosition - !e.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (t.ownerDocument || t) == (e.ownerDocument || e)
                          ? t.compareDocumentPosition(e)
                          : 1) ||
                    (!h.sortDetached && e.compareDocumentPosition(t) === n)
                      ? t == x || (t.ownerDocument == v && y(v, t))
                        ? -1
                        : e == x || (e.ownerDocument == v && y(v, e))
                        ? 1
                        : l
                        ? R(l, t) - R(l, e)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (t, e) {
                  if (t === e) return (u = !0), 0;
                  var n,
                    i = 0,
                    o = t.parentNode,
                    r = e.parentNode,
                    s = [t],
                    a = [e];
                  if (!o || !r)
                    return t == x
                      ? -1
                      : e == x
                      ? 1
                      : o
                      ? -1
                      : r
                      ? 1
                      : l
                      ? R(l, t) - R(l, e)
                      : 0;
                  if (o === r) return dt(t, e);
                  for (n = t; (n = n.parentNode); ) s.unshift(n);
                  for (n = e; (n = n.parentNode); ) a.unshift(n);
                  for (; s[i] === a[i]; ) i++;
                  return i
                    ? dt(s[i], a[i])
                    : s[i] == v
                    ? -1
                    : a[i] == v
                    ? 1
                    : 0;
                })),
          x
        );
      }),
    (at.matches = function (t, e) {
      return at(t, null, null, e);
    }),
    (at.matchesSelector = function (t, e) {
      if (
        (E(t),
        h.matchesSelector &&
          T &&
          !A[e + " "] &&
          (!a || !a.test(e)) &&
          (!g || !g.test(e)))
      )
        try {
          var n = c.call(t, e);
          if (
            n ||
            h.disconnectedMatch ||
            (t.document && 11 !== t.document.nodeType)
          )
            return n;
        } catch (t) {
          A(e, !0);
        }
      return 0 < at(e, x, null, [t]).length;
    }),
    (at.contains = function (t, e) {
      return (t.ownerDocument || t) != x && E(t), y(t, e);
    }),
    (at.attr = function (t, e) {
      (t.ownerDocument || t) != x && E(t);
      var n = b.attrHandle[e.toLowerCase()],
        n = n && N.call(b.attrHandle, e.toLowerCase()) ? n(t, e, !T) : void 0;
      return void 0 !== n
        ? n
        : h.attributes || !T
        ? t.getAttribute(e)
        : (n = t.getAttributeNode(e)) && n.specified
        ? n.value
        : null;
    }),
    (at.escape = function (t) {
      return (t + "").replace(ot, rt);
    }),
    (at.error = function (t) {
      throw new Error("Syntax error, unrecognized expression: " + t);
    }),
    (at.uniqueSort = function (t) {
      var e,
        n = [],
        i = 0,
        o = 0;
      if (
        ((u = !h.detectDuplicates),
        (l = !h.sortStable && t.slice(0)),
        t.sort(L),
        u)
      ) {
        for (; (e = t[o++]); ) e === t[o] && (i = n.push(o));
        for (; i--; ) t.splice(n[i], 1);
      }
      return (l = null), t;
    }),
    (r = at.getText =
      function (t) {
        var e,
          n = "",
          i = 0,
          o = t.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof t.textContent) return t.textContent;
            for (t = t.firstChild; t; t = t.nextSibling) n += r(t);
          } else if (3 === o || 4 === o) return t.nodeValue;
        } else for (; (e = t[i++]); ) n += r(e);
        return n;
      }),
    ((b = at.selectors =
      {
        cacheLength: 50,
        createPseudo: ut,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (t) {
            return (
              (t[1] = t[1].replace(it, f)),
              (t[3] = (t[3] || t[4] || t[5] || "").replace(it, f)),
              "~=" === t[2] && (t[3] = " " + t[3] + " "),
              t.slice(0, 4)
            );
          },
          CHILD: function (t) {
            return (
              (t[1] = t[1].toLowerCase()),
              "nth" === t[1].slice(0, 3)
                ? (t[3] || at.error(t[0]),
                  (t[4] = +(t[4]
                    ? t[5] + (t[6] || 1)
                    : 2 * ("even" === t[3] || "odd" === t[3]))),
                  (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                : t[3] && at.error(t[0]),
              t
            );
          },
          PSEUDO: function (t) {
            var e,
              n = !t[6] && t[2];
            return G.CHILD.test(t[0])
              ? null
              : (t[3]
                  ? (t[2] = t[4] || t[5] || "")
                  : n &&
                    V.test(n) &&
                    (e = p(n, !0)) &&
                    (e = n.indexOf(")", n.length - e) - n.length) &&
                    ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                t.slice(0, 3));
          },
        },
        filter: {
          TAG: function (t) {
            var e = t.replace(it, f).toLowerCase();
            return "*" === t
              ? function () {
                  return !0;
                }
              : function (t) {
                  return t.nodeName && t.nodeName.toLowerCase() === e;
                };
          },
          CLASS: function (t) {
            var e = I[t + " "];
            return (
              e ||
              ((e = new RegExp("(^|" + W + ")" + t + "(" + W + "|$)")) &&
                I(t, function (t) {
                  return e.test(
                    ("string" == typeof t.className && t.className) ||
                      (void 0 !== t.getAttribute && t.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, n, i) {
            return function (t) {
              t = at.attr(t, e);
              return null == t
                ? "!=" === n
                : !n ||
                    ((t += ""),
                    "=" === n
                      ? t === i
                      : "!=" === n
                      ? t !== i
                      : "^=" === n
                      ? i && 0 === t.indexOf(i)
                      : "*=" === n
                      ? i && -1 < t.indexOf(i)
                      : "$=" === n
                      ? i && t.slice(-i.length) === i
                      : "~=" === n
                      ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                      : "|=" === n &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (p, t, e, m, g) {
            var y = "nth" !== p.slice(0, 3),
              v = "last" !== p.slice(-4),
              _ = "of-type" === t;
            return 1 === m && 0 === g
              ? function (t) {
                  return !!t.parentNode;
                }
              : function (t, e, n) {
                  var i,
                    o,
                    r,
                    s,
                    a,
                    l,
                    u = y != v ? "nextSibling" : "previousSibling",
                    c = t.parentNode,
                    f = _ && t.nodeName.toLowerCase(),
                    d = !n && !_,
                    h = !1;
                  if (c) {
                    if (y) {
                      for (; u; ) {
                        for (s = t; (s = s[u]); )
                          if (
                            _
                              ? s.nodeName.toLowerCase() === f
                              : 1 === s.nodeType
                          )
                            return !1;
                        l = u = "only" === p && !l && "nextSibling";
                      }
                      return !0;
                    }
                    if (((l = [v ? c.firstChild : c.lastChild]), v && d)) {
                      for (
                        h =
                          (a =
                            (i =
                              (o =
                                (r = (s = c)[C] || (s[C] = {}))[s.uniqueID] ||
                                (r[s.uniqueID] = {}))[p] || [])[0] === S &&
                            i[1]) && i[2],
                          s = a && c.childNodes[a];
                        (s = (++a && s && s[u]) || (h = a = 0) || l.pop());

                      )
                        if (1 === s.nodeType && ++h && s === t) {
                          o[p] = [S, a, h];
                          break;
                        }
                    } else if (
                      (d &&
                        (h = a =
                          (i =
                            (o =
                              (r = (s = t)[C] || (s[C] = {}))[s.uniqueID] ||
                              (r[s.uniqueID] = {}))[p] || [])[0] === S && i[1]),
                      !1 === h)
                    )
                      for (
                        ;
                        (s = (++a && s && s[u]) || (h = a = 0) || l.pop()) &&
                        ((_
                          ? s.nodeName.toLowerCase() !== f
                          : 1 !== s.nodeType) ||
                          !++h ||
                          (d &&
                            ((o =
                              (r = s[C] || (s[C] = {}))[s.uniqueID] ||
                              (r[s.uniqueID] = {}))[p] = [S, h]),
                          s !== t));

                      );
                    return (h -= g) === m || (h % m == 0 && 0 <= h / m);
                  }
                };
          },
          PSEUDO: function (t, r) {
            var e,
              s =
                b.pseudos[t] ||
                b.setFilters[t.toLowerCase()] ||
                at.error("unsupported pseudo: " + t);
            return s[C]
              ? s(r)
              : 1 < s.length
              ? ((e = [t, t, "", r]),
                b.setFilters.hasOwnProperty(t.toLowerCase())
                  ? ut(function (t, e) {
                      for (var n, i = s(t, r), o = i.length; o--; )
                        t[(n = R(t, i[o]))] = !(e[n] = i[o]);
                    })
                  : function (t) {
                      return s(t, 0, e);
                    })
              : s;
          },
        },
        pseudos: {
          not: ut(function (t) {
            var i = [],
              o = [],
              a = d(t.replace(Q, "$1"));
            return a[C]
              ? ut(function (t, e, n, i) {
                  for (var o, r = a(t, null, i, []), s = t.length; s--; )
                    (o = r[s]) && (t[s] = !(e[s] = o));
                })
              : function (t, e, n) {
                  return (i[0] = t), a(i, null, n, o), (i[0] = null), !o.pop();
                };
          }),
          has: ut(function (e) {
            return function (t) {
              return 0 < at(e, t).length;
            };
          }),
          contains: ut(function (e) {
            return (
              (e = e.replace(it, f)),
              function (t) {
                return -1 < (t.textContent || r(t)).indexOf(e);
              }
            );
          }),
          lang: ut(function (n) {
            return (
              X.test(n || "") || at.error("unsupported lang: " + n),
              (n = n.replace(it, f).toLowerCase()),
              function (t) {
                var e;
                do {
                  if (
                    (e = T
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var e = n.location && n.location.hash;
            return e && e.slice(1) === t.id;
          },
          root: function (t) {
            return t === s;
          },
          focus: function (t) {
            return (
              t === x.activeElement &&
              (!x.hasFocus || x.hasFocus()) &&
              !!(t.type || t.href || ~t.tabIndex)
            );
          },
          enabled: ht(!1),
          disabled: ht(!0),
          checked: function (t) {
            var e = t.nodeName.toLowerCase();
            return (
              ("input" === e && !!t.checked) || ("option" === e && !!t.selected)
            );
          },
          selected: function (t) {
            return (
              t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
            );
          },
          empty: function (t) {
            for (t = t.firstChild; t; t = t.nextSibling)
              if (t.nodeType < 6) return !1;
            return !0;
          },
          parent: function (t) {
            return !b.pseudos.empty(t);
          },
          header: function (t) {
            return Z.test(t.nodeName);
          },
          input: function (t) {
            return J.test(t.nodeName);
          },
          button: function (t) {
            var e = t.nodeName.toLowerCase();
            return ("input" === e && "button" === t.type) || "button" === e;
          },
          text: function (t) {
            return (
              "input" === t.nodeName.toLowerCase() &&
              "text" === t.type &&
              (null == (t = t.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: pt(function () {
            return [0];
          }),
          last: pt(function (t, e) {
            return [e - 1];
          }),
          eq: pt(function (t, e, n) {
            return [n < 0 ? n + e : n];
          }),
          even: pt(function (t, e) {
            for (var n = 0; n < e; n += 2) t.push(n);
            return t;
          }),
          odd: pt(function (t, e) {
            for (var n = 1; n < e; n += 2) t.push(n);
            return t;
          }),
          lt: pt(function (t, e, n) {
            for (var i = n < 0 ? n + e : e < n ? e : n; 0 <= --i; ) t.push(i);
            return t;
          }),
          gt: pt(function (t, e, n) {
            for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
            return t;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[t] = (function (e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      })(t);
    for (t in { submit: !0, reset: !0 })
      b.pseudos[t] = (function (n) {
        return function (t) {
          var e = t.nodeName.toLowerCase();
          return ("input" === e || "button" === e) && t.type === n;
        };
      })(t);
    function gt() {}
    function yt(t) {
      for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
      return i;
    }
    function vt(s, t, e) {
      var a = t.dir,
        l = t.next,
        u = l || a,
        c = e && "parentNode" === u,
        f = _++;
      return t.first
        ? function (t, e, n) {
            for (; (t = t[a]); ) if (1 === t.nodeType || c) return s(t, e, n);
            return !1;
          }
        : function (t, e, n) {
            var i,
              o,
              r = [S, f];
            if (n) {
              for (; (t = t[a]); )
                if ((1 === t.nodeType || c) && s(t, e, n)) return !0;
            } else
              for (; (t = t[a]); )
                if (1 === t.nodeType || c)
                  if (
                    ((i =
                      (o = t[C] || (t[C] = {}))[t.uniqueID] ||
                      (o[t.uniqueID] = {})),
                    l && l === t.nodeName.toLowerCase())
                  )
                    t = t[a] || t;
                  else {
                    if ((o = i[u]) && o[0] === S && o[1] === f)
                      return (r[2] = o[2]);
                    if (((i[u] = r)[2] = s(t, e, n))) return !0;
                  }
            return !1;
          };
    }
    function _t(o) {
      return 1 < o.length
        ? function (t, e, n) {
            for (var i = o.length; i--; ) if (!o[i](t, e, n)) return !1;
            return !0;
          }
        : o[0];
    }
    function bt(t, e, n, i, o) {
      for (var r, s = [], a = 0, l = t.length, u = null != e; a < l; a++)
        (r = t[a]) && ((n && !n(r, i, o)) || (s.push(r), u && e.push(a)));
      return s;
    }
    function wt(h, p, m, g, y, t) {
      return (
        g && !g[C] && (g = wt(g)),
        y && !y[C] && (y = wt(y, t)),
        ut(function (t, e, n, i) {
          var o,
            r,
            s,
            a = [],
            l = [],
            u = e.length,
            c =
              t ||
              (function (t, e, n) {
                for (var i = 0, o = e.length; i < o; i++) at(t, e[i], n);
                return n;
              })(p || "*", n.nodeType ? [n] : n, []),
            f = !h || (!t && p) ? c : bt(c, a, h, n, i),
            d = m ? (y || (t ? h : u || g) ? [] : e) : f;
          if ((m && m(f, d, n, i), g))
            for (o = bt(d, l), g(o, [], n, i), r = o.length; r--; )
              (s = o[r]) && (d[l[r]] = !(f[l[r]] = s));
          if (t) {
            if (y || h) {
              if (y) {
                for (o = [], r = d.length; r--; )
                  (s = d[r]) && o.push((f[r] = s));
                y(null, (d = []), o, i);
              }
              for (r = d.length; r--; )
                (s = d[r]) &&
                  -1 < (o = y ? R(t, s) : a[r]) &&
                  (t[o] = !(e[o] = s));
            }
          } else (d = bt(d === e ? d.splice(u, d.length) : d)), y ? y(null, e, d, i) : z.apply(e, d);
        })
      );
    }
    function Et(g, y) {
      function t(t, e, n, i, o) {
        var r,
          s,
          a,
          l = 0,
          u = "0",
          c = t && [],
          f = [],
          d = w,
          h = t || (_ && b.find.TAG("*", o)),
          p = (S += null == d ? 1 : Math.random() || 0.1),
          m = h.length;
        for (o && (w = e == x || e || o); u !== m && null != (r = h[u]); u++) {
          if (_ && r) {
            for (
              s = 0, e || r.ownerDocument == x || (E(r), (n = !T));
              (a = g[s++]);

            )
              if (a(r, e || x, n)) {
                i.push(r);
                break;
              }
            o && (S = p);
          }
          v && ((r = !a && r) && l--, t && c.push(r));
        }
        if (((l += u), v && u !== l)) {
          for (s = 0; (a = y[s++]); ) a(c, f, e, n);
          if (t) {
            if (0 < l) for (; u--; ) c[u] || f[u] || (f[u] = O.call(i));
            f = bt(f);
          }
          z.apply(i, f),
            o && !t && 0 < f.length && 1 < l + y.length && at.uniqueSort(i);
        }
        return o && ((S = p), (w = d)), c;
      }
      var v = 0 < y.length,
        _ = 0 < g.length;
      return v ? ut(t) : t;
    }
    return (
      (gt.prototype = b.filters = b.pseudos),
      (b.setFilters = new gt()),
      (p = at.tokenize =
        function (t, e) {
          var n,
            i,
            o,
            r,
            s,
            a,
            l,
            u = D[t + " "];
          if (u) return e ? 0 : u.slice(0);
          for (s = t, a = [], l = b.preFilter; s; ) {
            for (r in ((n && !(i = U.exec(s))) ||
              (i && (s = s.slice(i[0].length) || s), a.push((o = []))),
            (n = !1),
            (i = Y.exec(s)) &&
              ((n = i.shift()),
              o.push({ value: n, type: i[0].replace(Q, " ") }),
              (s = s.slice(n.length))),
            b.filter))
              !(i = G[r].exec(s)) ||
                (l[r] && !(i = l[r](i))) ||
                ((n = i.shift()),
                o.push({ value: n, type: r, matches: i }),
                (s = s.slice(n.length)));
            if (!n) break;
          }
          return e ? s.length : s ? at.error(t) : D(t, a).slice(0);
        }),
      (d = at.compile =
        function (t, e) {
          var n,
            i = [],
            o = [],
            r = k[t + " "];
          if (!r) {
            for (n = (e = e || p(t)).length; n--; )
              ((r = (function t(e) {
                for (
                  var i,
                    n,
                    o,
                    r = e.length,
                    s = b.relative[e[0].type],
                    a = s || b.relative[" "],
                    l = s ? 1 : 0,
                    u = vt(
                      function (t) {
                        return t === i;
                      },
                      a,
                      !0
                    ),
                    c = vt(
                      function (t) {
                        return -1 < R(i, t);
                      },
                      a,
                      !0
                    ),
                    f = [
                      function (t, e, n) {
                        return (
                          (n =
                            (!s && (n || e !== w)) ||
                            ((i = e).nodeType ? u : c)(t, e, n)),
                          (i = null),
                          n
                        );
                      },
                    ];
                  l < r;
                  l++
                )
                  if ((n = b.relative[e[l].type])) f = [vt(_t(f), n)];
                  else {
                    if (
                      (n = b.filter[e[l].type].apply(null, e[l].matches))[C]
                    ) {
                      for (o = ++l; o < r && !b.relative[e[o].type]; o++);
                      return wt(
                        1 < l && _t(f),
                        1 < l &&
                          yt(
                            e
                              .slice(0, l - 1)
                              .concat({
                                value: " " === e[l - 2].type ? "*" : "",
                              })
                          ).replace(Q, "$1"),
                        n,
                        l < o && t(e.slice(l, o)),
                        o < r && t((e = e.slice(o))),
                        o < r && yt(e)
                      );
                    }
                    f.push(n);
                  }
                return _t(f);
              })(e[n]))[C]
                ? i
                : o
              ).push(r);
            (r = k(t, Et(o, i))).selector = t;
          }
          return r;
        }),
      (m = at.select =
        function (t, e, n, i) {
          var o,
            r,
            s,
            a,
            l,
            u = "function" == typeof t && t,
            c = !i && p((t = u.selector || t));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (r = c[0] = c[0].slice(0)).length &&
              "ID" === (s = r[0]).type &&
              9 === e.nodeType &&
              T &&
              b.relative[r[1].type]
            ) {
              if (!(e = (b.find.ID(s.matches[0].replace(it, f), e) || [])[0]))
                return n;
              u && (e = e.parentNode), (t = t.slice(r.shift().value.length));
            }
            for (
              o = G.needsContext.test(t) ? 0 : r.length;
              o-- && ((s = r[o]), !b.relative[(a = s.type)]);

            )
              if (
                (l = b.find[a]) &&
                (i = l(
                  s.matches[0].replace(it, f),
                  (nt.test(r[0].type) && mt(e.parentNode)) || e
                ))
              ) {
                if ((r.splice(o, 1), !(t = i.length && yt(r))))
                  return z.apply(n, i), n;
                break;
              }
          }
          return (
            (u || d(t, c))(
              i,
              e,
              !T,
              n,
              !e || (nt.test(t) && mt(e.parentNode)) || e
            ),
            n
          );
        }),
      (h.sortStable = C.split("").sort(L).join("") === C),
      (h.detectDuplicates = !!u),
      E(),
      (h.sortDetached = ct(function (t) {
        return 1 & t.compareDocumentPosition(x.createElement("fieldset"));
      })),
      ct(function (t) {
        return (
          (t.innerHTML = "<a href='#'></a>"),
          "#" === t.firstChild.getAttribute("href")
        );
      }) ||
        ft("type|href|height|width", function (t, e, n) {
          if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }),
      (h.attributes &&
        ct(function (t) {
          return (
            (t.innerHTML = "<input/>"),
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
          );
        })) ||
        ft("value", function (t, e, n) {
          if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
        }),
      ct(function (t) {
        return null == t.getAttribute("disabled");
      }) ||
        ft(P, function (t, e, n) {
          if (!n)
            return !0 === t[e]
              ? e.toLowerCase()
              : (e = t.getAttributeNode(e)) && e.specified
              ? e.value
              : null;
        }),
      at
    );
  })(E);
  (T.find = h),
    (T.expr = h.selectors),
    (T.expr[":"] = T.expr.pseudos),
    (T.uniqueSort = T.unique = h.uniqueSort),
    (T.text = h.getText),
    (T.isXMLDoc = h.isXML),
    (T.contains = h.contains),
    (T.escapeSelector = h.escape);
  function w(t, e, n) {
    for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
      if (1 === t.nodeType) {
        if (o && T(t).is(n)) break;
        i.push(t);
      }
    return i;
  }
  function C(t, e) {
    for (var n = []; t; t = t.nextSibling)
      1 === t.nodeType && t !== e && n.push(t);
    return n;
  }
  var S = T.expr.match.needsContext;
  function I(t, e) {
    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
  }
  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function k(t, n, i) {
    return _(n)
      ? T.grep(t, function (t, e) {
          return !!n.call(t, e, t) !== i;
        })
      : n.nodeType
      ? T.grep(t, function (t) {
          return (t === n) !== i;
        })
      : "string" != typeof n
      ? T.grep(t, function (t) {
          return -1 < o.call(n, t) !== i;
        })
      : T.filter(n, t, i);
  }
  (T.filter = function (t, e, n) {
    var i = e[0];
    return (
      n && (t = ":not(" + t + ")"),
      1 === e.length && 1 === i.nodeType
        ? T.find.matchesSelector(i, t)
          ? [i]
          : []
        : T.find.matches(
            t,
            T.grep(e, function (t) {
              return 1 === t.nodeType;
            })
          )
    );
  }),
    T.fn.extend({
      find: function (t) {
        var e,
          n,
          i = this.length,
          o = this;
        if ("string" != typeof t)
          return this.pushStack(
            T(t).filter(function () {
              for (e = 0; e < i; e++) if (T.contains(o[e], this)) return !0;
            })
          );
        for (n = this.pushStack([]), e = 0; e < i; e++) T.find(t, o[e], n);
        return 1 < i ? T.uniqueSort(n) : n;
      },
      filter: function (t) {
        return this.pushStack(k(this, t || [], !1));
      },
      not: function (t) {
        return this.pushStack(k(this, t || [], !0));
      },
      is: function (t) {
        return !!k(this, "string" == typeof t && S.test(t) ? T(t) : t || [], !1)
          .length;
      },
    });
  var A,
    L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((T.fn.init = function (t, e, n) {
    if (!t) return this;
    if (((n = n || A), "string" != typeof t))
      return t.nodeType
        ? ((this[0] = t), (this.length = 1), this)
        : _(t)
        ? void 0 !== n.ready
          ? n.ready(t)
          : t(T)
        : T.makeArray(t, this);
    if (
      !(i =
        "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length
          ? [null, t, null]
          : L.exec(t)) ||
      (!i[1] && e)
    )
      return (!e || e.jquery ? e || n : this.constructor(e)).find(t);
    if (i[1]) {
      if (
        ((e = e instanceof T ? e[0] : e),
        T.merge(
          this,
          T.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : x, !0)
        ),
        D.test(i[1]) && T.isPlainObject(e))
      )
        for (var i in e) _(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
      return this;
    }
    return (
      (t = x.getElementById(i[2])) && ((this[0] = t), (this.length = 1)), this
    );
  }).prototype = T.fn),
    (A = T(x));
  var N = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  function j(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType; );
    return t;
  }
  T.fn.extend({
    has: function (t) {
      var e = T(t, this),
        n = e.length;
      return this.filter(function () {
        for (var t = 0; t < n; t++) if (T.contains(this, e[t])) return !0;
      });
    },
    closest: function (t, e) {
      var n,
        i = 0,
        o = this.length,
        r = [],
        s = "string" != typeof t && T(t);
      if (!S.test(t))
        for (; i < o; i++)
          for (n = this[i]; n && n !== e; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? -1 < s.index(n)
                : 1 === n.nodeType && T.find.matchesSelector(n, t))
            ) {
              r.push(n);
              break;
            }
      return this.pushStack(1 < r.length ? T.uniqueSort(r) : r);
    },
    index: function (t) {
      return t
        ? "string" == typeof t
          ? o.call(T(t), this[0])
          : o.call(this, t.jquery ? t[0] : t)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (t, e) {
      return this.pushStack(T.uniqueSort(T.merge(this.get(), T(t, e))));
    },
    addBack: function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    },
  }),
    T.each(
      {
        parent: function (t) {
          t = t.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (t) {
          return w(t, "parentNode");
        },
        parentsUntil: function (t, e, n) {
          return w(t, "parentNode", n);
        },
        next: function (t) {
          return j(t, "nextSibling");
        },
        prev: function (t) {
          return j(t, "previousSibling");
        },
        nextAll: function (t) {
          return w(t, "nextSibling");
        },
        prevAll: function (t) {
          return w(t, "previousSibling");
        },
        nextUntil: function (t, e, n) {
          return w(t, "nextSibling", n);
        },
        prevUntil: function (t, e, n) {
          return w(t, "previousSibling", n);
        },
        siblings: function (t) {
          return C((t.parentNode || {}).firstChild, t);
        },
        children: function (t) {
          return C(t.firstChild);
        },
        contents: function (t) {
          return null != t.contentDocument && n(t.contentDocument)
            ? t.contentDocument
            : (I(t, "template") && (t = t.content || t),
              T.merge([], t.childNodes));
        },
      },
      function (i, o) {
        T.fn[i] = function (t, e) {
          var n = T.map(this, o, t);
          return (
            "Until" !== i.slice(-5) && (e = t),
            e && "string" == typeof e && (n = T.filter(e, n)),
            1 < this.length &&
              (O[i] || T.uniqueSort(n), N.test(i) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var z = /[^\x20\t\r\n\f]+/g;
  function q(t) {
    return t;
  }
  function R(t) {
    throw t;
  }
  function P(t, e, n, i) {
    var o;
    try {
      t && _((o = t.promise))
        ? o.call(t).done(e).fail(n)
        : t && _((o = t.then))
        ? o.call(t, e, n)
        : e.apply(void 0, [t].slice(i));
    } catch (t) {
      n.apply(void 0, [t]);
    }
  }
  (T.Callbacks = function (i) {
    var t, n;
    i =
      "string" == typeof i
        ? ((t = i),
          (n = {}),
          T.each(t.match(z) || [], function (t, e) {
            n[e] = !0;
          }),
          n)
        : T.extend({}, i);
    function o() {
      for (a = a || i.once, s = r = !0; u.length; c = -1)
        for (e = u.shift(); ++c < l.length; )
          !1 === l[c].apply(e[0], e[1]) &&
            i.stopOnFalse &&
            ((c = l.length), (e = !1));
      i.memory || (e = !1), (r = !1), a && (l = e ? [] : "");
    }
    var r,
      e,
      s,
      a,
      l = [],
      u = [],
      c = -1,
      f = {
        add: function () {
          return (
            l &&
              (e && !r && ((c = l.length - 1), u.push(e)),
              (function n(t) {
                T.each(t, function (t, e) {
                  _(e)
                    ? (i.unique && f.has(e)) || l.push(e)
                    : e && e.length && "string" !== p(e) && n(e);
                });
              })(arguments),
              e && !r && o()),
            this
          );
        },
        remove: function () {
          return (
            T.each(arguments, function (t, e) {
              for (var n; -1 < (n = T.inArray(e, l, n)); )
                l.splice(n, 1), n <= c && c--;
            }),
            this
          );
        },
        has: function (t) {
          return t ? -1 < T.inArray(t, l) : 0 < l.length;
        },
        empty: function () {
          return (l = l && []), this;
        },
        disable: function () {
          return (a = u = []), (l = e = ""), this;
        },
        disabled: function () {
          return !l;
        },
        lock: function () {
          return (a = u = []), e || r || (l = e = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (t, e) {
          return (
            a ||
              ((e = [t, (e = e || []).slice ? e.slice() : e]),
              u.push(e),
              r || o()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!s;
        },
      };
    return f;
  }),
    T.extend({
      Deferred: function (t) {
        var r = [
            [
              "notify",
              "progress",
              T.Callbacks("memory"),
              T.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              T.Callbacks("once memory"),
              T.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              T.Callbacks("once memory"),
              T.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          o = "pending",
          s = {
            state: function () {
              return o;
            },
            always: function () {
              return a.done(arguments).fail(arguments), this;
            },
            catch: function (t) {
              return s.then(null, t);
            },
            pipe: function () {
              var o = arguments;
              return T.Deferred(function (i) {
                T.each(r, function (t, e) {
                  var n = _(o[e[4]]) && o[e[4]];
                  a[e[1]](function () {
                    var t = n && n.apply(this, arguments);
                    t && _(t.promise)
                      ? t
                          .promise()
                          .progress(i.notify)
                          .done(i.resolve)
                          .fail(i.reject)
                      : i[e[0] + "With"](this, n ? [t] : arguments);
                  });
                }),
                  (o = null);
              }).promise();
            },
            then: function (e, n, i) {
              var l = 0;
              function u(o, r, s, a) {
                return function () {
                  function t() {
                    var t, e;
                    if (!(o < l)) {
                      if ((t = s.apply(n, i)) === r.promise())
                        throw new TypeError("Thenable self-resolution");
                      (e =
                        t &&
                        ("object" == typeof t || "function" == typeof t) &&
                        t.then),
                        _(e)
                          ? a
                            ? e.call(t, u(l, r, q, a), u(l, r, R, a))
                            : (l++,
                              e.call(
                                t,
                                u(l, r, q, a),
                                u(l, r, R, a),
                                u(l, r, q, r.notifyWith)
                              ))
                          : (s !== q && ((n = void 0), (i = [t])),
                            (a || r.resolveWith)(n, i));
                    }
                  }
                  var n = this,
                    i = arguments,
                    e = a
                      ? t
                      : function () {
                          try {
                            t();
                          } catch (t) {
                            T.Deferred.exceptionHook &&
                              T.Deferred.exceptionHook(t, e.stackTrace),
                              l <= o + 1 &&
                                (s !== R && ((n = void 0), (i = [t])),
                                r.rejectWith(n, i));
                          }
                        };
                  o
                    ? e()
                    : (T.Deferred.getStackHook &&
                        (e.stackTrace = T.Deferred.getStackHook()),
                      E.setTimeout(e));
                };
              }
              return T.Deferred(function (t) {
                r[0][3].add(u(0, t, _(i) ? i : q, t.notifyWith)),
                  r[1][3].add(u(0, t, _(e) ? e : q)),
                  r[2][3].add(u(0, t, _(n) ? n : R));
              }).promise();
            },
            promise: function (t) {
              return null != t ? T.extend(t, s) : s;
            },
          },
          a = {};
        return (
          T.each(r, function (t, e) {
            var n = e[2],
              i = e[5];
            (s[e[1]] = n.add),
              i &&
                n.add(
                  function () {
                    o = i;
                  },
                  r[3 - t][2].disable,
                  r[3 - t][3].disable,
                  r[0][2].lock,
                  r[0][3].lock
                ),
              n.add(e[3].fire),
              (a[e[0]] = function () {
                return (
                  a[e[0] + "With"](this === a ? void 0 : this, arguments), this
                );
              }),
              (a[e[0] + "With"] = n.fireWith);
          }),
          s.promise(a),
          t && t.call(a, a),
          a
        );
      },
      when: function (t) {
        function e(e) {
          return function (t) {
            (o[e] = this),
              (r[e] = 1 < arguments.length ? a.call(arguments) : t),
              --n || s.resolveWith(o, r);
          };
        }
        var n = arguments.length,
          i = n,
          o = Array(i),
          r = a.call(arguments),
          s = T.Deferred();
        if (
          n <= 1 &&
          (P(t, s.done(e(i)).resolve, s.reject, !n),
          "pending" === s.state() || _(r[i] && r[i].then))
        )
          return s.then();
        for (; i--; ) P(r[i], e(i), s.reject);
        return s.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (T.Deferred.exceptionHook = function (t, e) {
    E.console &&
      E.console.warn &&
      t &&
      W.test(t.name) &&
      E.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
  }),
    (T.readyException = function (t) {
      E.setTimeout(function () {
        throw t;
      });
    });
  var H = T.Deferred();
  function M() {
    x.removeEventListener("DOMContentLoaded", M),
      E.removeEventListener("load", M),
      T.ready();
  }
  (T.fn.ready = function (t) {
    return (
      H.then(t).catch(function (t) {
        T.readyException(t);
      }),
      this
    );
  }),
    T.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (t) {
        (!0 === t ? --T.readyWait : T.isReady) ||
          ((T.isReady = !0) !== t && 0 < --T.readyWait) ||
          H.resolveWith(x, [T]);
      },
    }),
    (T.ready.then = H.then),
    "complete" === x.readyState ||
    ("loading" !== x.readyState && !x.documentElement.doScroll)
      ? E.setTimeout(T.ready)
      : (x.addEventListener("DOMContentLoaded", M),
        E.addEventListener("load", M));
  var F = function (t, e, n, i, o, r, s) {
      var a = 0,
        l = t.length,
        u = null == n;
      if ("object" === p(n))
        for (a in ((o = !0), n)) F(t, e, a, n[a], !0, r, s);
      else if (
        void 0 !== i &&
        ((o = !0),
        _(i) || (s = !0),
        u &&
          (e = s
            ? (e.call(t, i), null)
            : ((u = e),
              function (t, e, n) {
                return u.call(T(t), n);
              })),
        e)
      )
        for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
      return o ? t : u ? e.call(t) : l ? e(t[0], n) : r;
    },
    B = /^-ms-/,
    Q = /-([a-z])/g;
  function U(t, e) {
    return e.toUpperCase();
  }
  function Y(t) {
    return t.replace(B, "ms-").replace(Q, U);
  }
  function $(t) {
    return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
  }
  function V() {
    this.expando = T.expando + V.uid++;
  }
  (V.uid = 1),
    (V.prototype = {
      cache: function (t) {
        var e = t[this.expando];
        return (
          e ||
            ((e = {}),
            $(t) &&
              (t.nodeType
                ? (t[this.expando] = e)
                : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0,
                  }))),
          e
        );
      },
      set: function (t, e, n) {
        var i,
          o = this.cache(t);
        if ("string" == typeof e) o[Y(e)] = n;
        else for (i in e) o[Y(i)] = e[i];
        return o;
      },
      get: function (t, e) {
        return void 0 === e
          ? this.cache(t)
          : t[this.expando] && t[this.expando][Y(e)];
      },
      access: function (t, e, n) {
        return void 0 === e || (e && "string" == typeof e && void 0 === n)
          ? this.get(t, e)
          : (this.set(t, e, n), void 0 !== n ? n : e);
      },
      remove: function (t, e) {
        var n,
          i = t[this.expando];
        if (void 0 !== i) {
          if (void 0 !== e) {
            n = (e = Array.isArray(e)
              ? e.map(Y)
              : (e = Y(e)) in i
              ? [e]
              : e.match(z) || []).length;
            for (; n--; ) delete i[e[n]];
          }
          (void 0 !== e && !T.isEmptyObject(i)) ||
            (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
        }
      },
      hasData: function (t) {
        t = t[this.expando];
        return void 0 !== t && !T.isEmptyObject(t);
      },
    });
  var X = new V(),
    G = new V(),
    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    J = /[A-Z]/g;
  function Z(t, e, n) {
    var i, o;
    if (void 0 === n && 1 === t.nodeType)
      if (
        ((i = "data-" + e.replace(J, "-$&").toLowerCase()),
        "string" == typeof (n = t.getAttribute(i)))
      ) {
        try {
          n =
            "true" === (o = n) ||
            ("false" !== o &&
              ("null" === o
                ? null
                : o === +o + ""
                ? +o
                : K.test(o)
                ? JSON.parse(o)
                : o));
        } catch (t) {}
        G.set(t, e, n);
      } else n = void 0;
    return n;
  }
  T.extend({
    hasData: function (t) {
      return G.hasData(t) || X.hasData(t);
    },
    data: function (t, e, n) {
      return G.access(t, e, n);
    },
    removeData: function (t, e) {
      G.remove(t, e);
    },
    _data: function (t, e, n) {
      return X.access(t, e, n);
    },
    _removeData: function (t, e) {
      X.remove(t, e);
    },
  }),
    T.fn.extend({
      data: function (n, t) {
        var e,
          i,
          o,
          r = this[0],
          s = r && r.attributes;
        if (void 0 !== n)
          return "object" == typeof n
            ? this.each(function () {
                G.set(this, n);
              })
            : F(
                this,
                function (t) {
                  var e;
                  return r && void 0 === t
                    ? void 0 !== (e = G.get(r, n)) || void 0 !== (e = Z(r, n))
                      ? e
                      : void 0
                    : void this.each(function () {
                        G.set(this, n, t);
                      });
                },
                null,
                t,
                1 < arguments.length,
                null,
                !0
              );
        if (
          this.length &&
          ((o = G.get(r)), 1 === r.nodeType && !X.get(r, "hasDataAttrs"))
        ) {
          for (e = s.length; e--; )
            s[e] &&
              0 === (i = s[e].name).indexOf("data-") &&
              ((i = Y(i.slice(5))), Z(r, i, o[i]));
          X.set(r, "hasDataAttrs", !0);
        }
        return o;
      },
      removeData: function (t) {
        return this.each(function () {
          G.remove(this, t);
        });
      },
    }),
    T.extend({
      queue: function (t, e, n) {
        var i;
        if (t)
          return (
            (e = (e || "fx") + "queue"),
            (i = X.get(t, e)),
            n &&
              (!i || Array.isArray(n)
                ? (i = X.access(t, e, T.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (t, e) {
        e = e || "fx";
        var n = T.queue(t, e),
          i = n.length,
          o = n.shift(),
          r = T._queueHooks(t, e);
        "inprogress" === o && ((o = n.shift()), i--),
          o &&
            ("fx" === e && n.unshift("inprogress"),
            delete r.stop,
            o.call(
              t,
              function () {
                T.dequeue(t, e);
              },
              r
            )),
          !i && r && r.empty.fire();
      },
      _queueHooks: function (t, e) {
        var n = e + "queueHooks";
        return (
          X.get(t, n) ||
          X.access(t, n, {
            empty: T.Callbacks("once memory").add(function () {
              X.remove(t, [e + "queue", n]);
            }),
          })
        );
      },
    }),
    T.fn.extend({
      queue: function (e, n) {
        var t = 2;
        return (
          "string" != typeof e && ((n = e), (e = "fx"), t--),
          arguments.length < t
            ? T.queue(this[0], e)
            : void 0 === n
            ? this
            : this.each(function () {
                var t = T.queue(this, e, n);
                T._queueHooks(this, e),
                  "fx" === e && "inprogress" !== t[0] && T.dequeue(this, e);
              })
        );
      },
      dequeue: function (t) {
        return this.each(function () {
          T.dequeue(this, t);
        });
      },
      clearQueue: function (t) {
        return this.queue(t || "fx", []);
      },
      promise: function (t, e) {
        function n() {
          --o || r.resolveWith(s, [s]);
        }
        var i,
          o = 1,
          r = T.Deferred(),
          s = this,
          a = this.length;
        for (
          "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
          a--;

        )
          (i = X.get(s[a], t + "queueHooks")) &&
            i.empty &&
            (o++, i.empty.add(n));
        return n(), r.promise(e);
      },
    });
  var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
    nt = ["Top", "Right", "Bottom", "Left"],
    it = x.documentElement,
    ot = function (t) {
      return T.contains(t.ownerDocument, t);
    },
    rt = { composed: !0 };
  it.getRootNode &&
    (ot = function (t) {
      return (
        T.contains(t.ownerDocument, t) || t.getRootNode(rt) === t.ownerDocument
      );
    });
  var st = function (t, e) {
    return (
      "none" === (t = e || t).style.display ||
      ("" === t.style.display && ot(t) && "none" === T.css(t, "display"))
    );
  };
  function at(t, e, n, i) {
    var o,
      r,
      s = 20,
      a = i
        ? function () {
            return i.cur();
          }
        : function () {
            return T.css(t, e, "");
          },
      l = a(),
      u = (n && n[3]) || (T.cssNumber[e] ? "" : "px"),
      c =
        t.nodeType &&
        (T.cssNumber[e] || ("px" !== u && +l)) &&
        et.exec(T.css(t, e));
    if (c && c[3] !== u) {
      for (l /= 2, u = u || c[3], c = +l || 1; s--; )
        T.style(t, e, c + u),
          (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0),
          (c /= r);
      (c *= 2), T.style(t, e, c + u), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +l || 0),
        (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = u), (i.start = c), (i.end = o))),
      o
    );
  }
  var lt = {};
  function ut(t, e) {
    for (var n, i, o, r, s, a = [], l = 0, u = t.length; l < u; l++)
      (i = t[l]).style &&
        ((n = i.style.display),
        e
          ? ("none" === n &&
              ((a[l] = X.get(i, "display") || null),
              a[l] || (i.style.display = "")),
            "" === i.style.display &&
              st(i) &&
              (a[l] =
                ((s = r = void 0),
                (r = (o = i).ownerDocument),
                (s = o.nodeName),
                (o = lt[s]) ||
                  ((r = r.body.appendChild(r.createElement(s))),
                  (o = T.css(r, "display")),
                  r.parentNode.removeChild(r),
                  "none" === o && (o = "block"),
                  (lt[s] = o)))))
          : "none" !== n && ((a[l] = "none"), X.set(i, "display", n)));
    for (l = 0; l < u; l++) null != a[l] && (t[l].style.display = a[l]);
    return t;
  }
  T.fn.extend({
    show: function () {
      return ut(this, !0);
    },
    hide: function () {
      return ut(this);
    },
    toggle: function (t) {
      return "boolean" == typeof t
        ? t
          ? this.show()
          : this.hide()
        : this.each(function () {
            st(this) ? T(this).show() : T(this).hide();
          });
    },
  });
  var ct = /^(?:checkbox|radio)$/i,
    ft = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    dt = /^$|^module$|\/(?:java|ecma)script/i;
  (f = x.createDocumentFragment().appendChild(x.createElement("div"))),
    (h = x.createElement("input")).setAttribute("type", "radio"),
    h.setAttribute("checked", "checked"),
    h.setAttribute("name", "t"),
    f.appendChild(h),
    (v.checkClone = f.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (f.innerHTML = "<textarea>x</textarea>"),
    (v.noCloneChecked = !!f.cloneNode(!0).lastChild.defaultValue),
    (f.innerHTML = "<option></option>"),
    (v.option = !!f.lastChild);
  var ht = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function pt(t, e) {
    var n =
      void 0 !== t.getElementsByTagName
        ? t.getElementsByTagName(e || "*")
        : void 0 !== t.querySelectorAll
        ? t.querySelectorAll(e || "*")
        : [];
    return void 0 === e || (e && I(t, e)) ? T.merge([t], n) : n;
  }
  function mt(t, e) {
    for (var n = 0, i = t.length; n < i; n++)
      X.set(t[n], "globalEval", !e || X.get(e[n], "globalEval"));
  }
  (ht.tbody = ht.tfoot = ht.colgroup = ht.caption = ht.thead),
    (ht.th = ht.td),
    v.option ||
      (ht.optgroup = ht.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var gt = /<|&#?\w+;/;
  function yt(t, e, n, i, o) {
    for (
      var r,
        s,
        a,
        l,
        u,
        c = e.createDocumentFragment(),
        f = [],
        d = 0,
        h = t.length;
      d < h;
      d++
    )
      if ((r = t[d]) || 0 === r)
        if ("object" === p(r)) T.merge(f, r.nodeType ? [r] : r);
        else if (gt.test(r)) {
          for (
            s = s || c.appendChild(e.createElement("div")),
              a = (ft.exec(r) || ["", ""])[1].toLowerCase(),
              a = ht[a] || ht._default,
              s.innerHTML = a[1] + T.htmlPrefilter(r) + a[2],
              u = a[0];
            u--;

          )
            s = s.lastChild;
          T.merge(f, s.childNodes), ((s = c.firstChild).textContent = "");
        } else f.push(e.createTextNode(r));
    for (c.textContent = "", d = 0; (r = f[d++]); )
      if (i && -1 < T.inArray(r, i)) o && o.push(r);
      else if (
        ((l = ot(r)), (s = pt(c.appendChild(r), "script")), l && mt(s), n)
      )
        for (u = 0; (r = s[u++]); ) dt.test(r.type || "") && n.push(r);
    return c;
  }
  var vt = /^key/,
    _t = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    bt = /^([^.]*)(?:\.(.+)|)/;
  function wt() {
    return !0;
  }
  function Et() {
    return !1;
  }
  function xt(t, e) {
    return (
      (t ===
        (function () {
          try {
            return x.activeElement;
          } catch (t) {}
        })()) ==
      ("focus" === e)
    );
  }
  function Tt(t, e, n, i, o, r) {
    var s, a;
    if ("object" == typeof e) {
      for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), e))
        Tt(t, a, n, i, e[a], r);
      return t;
    }
    if (
      (null == i && null == o
        ? ((o = n), (i = n = void 0))
        : null == o &&
          ("string" == typeof n
            ? ((o = i), (i = void 0))
            : ((o = i), (i = n), (n = void 0))),
      !1 === o)
    )
      o = Et;
    else if (!o) return t;
    return (
      1 === r &&
        ((s = o),
        ((o = function (t) {
          return T().off(t), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = T.guid++))),
      t.each(function () {
        T.event.add(this, e, o, i, n);
      })
    );
  }
  function Ct(t, o, r) {
    r
      ? (X.set(t, o, !1),
        T.event.add(t, o, {
          namespace: !1,
          handler: function (t) {
            var e,
              n,
              i = X.get(this, o);
            if (1 & t.isTrigger && this[o]) {
              if (i.length)
                (T.event.special[o] || {}).delegateType && t.stopPropagation();
              else if (
                ((i = a.call(arguments)),
                X.set(this, o, i),
                (e = r(this, o)),
                this[o](),
                i !== (n = X.get(this, o)) || e ? X.set(this, o, !1) : (n = {}),
                i !== n)
              )
                return (
                  t.stopImmediatePropagation(), t.preventDefault(), n.value
                );
            } else
              i.length &&
                (X.set(this, o, {
                  value: T.event.trigger(
                    T.extend(i[0], T.Event.prototype),
                    i.slice(1),
                    this
                  ),
                }),
                t.stopImmediatePropagation());
          },
        }))
      : void 0 === X.get(t, o) && T.event.add(t, o, wt);
  }
  (T.event = {
    global: {},
    add: function (e, t, n, i, o) {
      var r,
        s,
        a,
        l,
        u,
        c,
        f,
        d,
        h,
        p = X.get(e);
      if ($(e))
        for (
          n.handler && ((n = (r = n).handler), (o = r.selector)),
            o && T.find.matchesSelector(it, o),
            n.guid || (n.guid = T.guid++),
            (a = p.events) || (a = p.events = Object.create(null)),
            (s = p.handle) ||
              (s = p.handle =
                function (t) {
                  return void 0 !== T && T.event.triggered !== t.type
                    ? T.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            l = (t = (t || "").match(z) || [""]).length;
          l--;

        )
          (f = h = (u = bt.exec(t[l]) || [])[1]),
            (d = (u[2] || "").split(".").sort()),
            f &&
              ((c = T.event.special[f] || {}),
              (f = (o ? c.delegateType : c.bindType) || f),
              (c = T.event.special[f] || {}),
              (u = T.extend(
                {
                  type: f,
                  origType: h,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && T.expr.match.needsContext.test(o),
                  namespace: d.join("."),
                },
                r
              )),
              (h = a[f]) ||
                (((h = a[f] = []).delegateCount = 0),
                (c.setup && !1 !== c.setup.call(e, i, d, s)) ||
                  (e.addEventListener && e.addEventListener(f, s))),
              c.add &&
                (c.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
              o ? h.splice(h.delegateCount++, 0, u) : h.push(u),
              (T.event.global[f] = !0));
    },
    remove: function (t, e, n, i, o) {
      var r,
        s,
        a,
        l,
        u,
        c,
        f,
        d,
        h,
        p,
        m,
        g = X.hasData(t) && X.get(t);
      if (g && (l = g.events)) {
        for (u = (e = (e || "").match(z) || [""]).length; u--; )
          if (
            ((h = m = (a = bt.exec(e[u]) || [])[1]),
            (p = (a[2] || "").split(".").sort()),
            h)
          ) {
            for (
              f = T.event.special[h] || {},
                d = l[(h = (i ? f.delegateType : f.bindType) || h)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = r = d.length;
              r--;

            )
              (c = d[r]),
                (!o && m !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (a && !a.test(c.namespace)) ||
                  (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                  (d.splice(r, 1),
                  c.selector && d.delegateCount--,
                  f.remove && f.remove.call(t, c));
            s &&
              !d.length &&
              ((f.teardown && !1 !== f.teardown.call(t, p, g.handle)) ||
                T.removeEvent(t, h, g.handle),
              delete l[h]);
          } else for (h in l) T.event.remove(t, h + e[u], n, i, !0);
        T.isEmptyObject(l) && X.remove(t, "handle events");
      }
    },
    dispatch: function (t) {
      var e,
        n,
        i,
        o,
        r,
        s = new Array(arguments.length),
        a = T.event.fix(t),
        l = (X.get(this, "events") || Object.create(null))[a.type] || [],
        t = T.event.special[a.type] || {};
      for (s[0] = a, e = 1; e < arguments.length; e++) s[e] = arguments[e];
      if (
        ((a.delegateTarget = this),
        !t.preDispatch || !1 !== t.preDispatch.call(this, a))
      ) {
        for (
          r = T.event.handlers.call(this, a, l), e = 0;
          (i = r[e++]) && !a.isPropagationStopped();

        )
          for (
            a.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();

          )
            (a.rnamespace &&
              !1 !== o.namespace &&
              !a.rnamespace.test(o.namespace)) ||
              ((a.handleObj = o),
              (a.data = o.data),
              void 0 !==
                (o = (
                  (T.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (a.result = o) &&
                (a.preventDefault(), a.stopPropagation()));
        return t.postDispatch && t.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (t, e) {
      var n,
        i,
        o,
        r,
        s,
        a = [],
        l = e.delegateCount,
        u = t.target;
      if (l && u.nodeType && !("click" === t.type && 1 <= t.button))
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
            for (r = [], s = {}, n = 0; n < l; n++)
              void 0 === s[(o = (i = e[n]).selector + " ")] &&
                (s[o] = i.needsContext
                  ? -1 < T(o, this).index(u)
                  : T.find(o, this, null, [u]).length),
                s[o] && r.push(i);
            r.length && a.push({ elem: u, handlers: r });
          }
      return (
        (u = this), l < e.length && a.push({ elem: u, handlers: e.slice(l) }), a
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(T.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: _(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (t) {
      return t[T.expando] ? t : new T.Event(t);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (t) {
          t = this || t;
          return (
            ct.test(t.type) && t.click && I(t, "input") && Ct(t, "click", wt),
            !1
          );
        },
        trigger: function (t) {
          t = this || t;
          return (
            ct.test(t.type) && t.click && I(t, "input") && Ct(t, "click"), !0
          );
        },
        _default: function (t) {
          t = t.target;
          return (
            (ct.test(t.type) &&
              t.click &&
              I(t, "input") &&
              X.get(t, "click")) ||
            I(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (t) {
          void 0 !== t.result &&
            t.originalEvent &&
            (t.originalEvent.returnValue = t.result);
        },
      },
    },
  }),
    (T.removeEvent = function (t, e, n) {
      t.removeEventListener && t.removeEventListener(e, n);
    }),
    (T.Event = function (t, e) {
      if (!(this instanceof T.Event)) return new T.Event(t, e);
      t && t.type
        ? ((this.originalEvent = t),
          (this.type = t.type),
          (this.isDefaultPrevented =
            t.defaultPrevented ||
            (void 0 === t.defaultPrevented && !1 === t.returnValue)
              ? wt
              : Et),
          (this.target =
            t.target && 3 === t.target.nodeType
              ? t.target.parentNode
              : t.target),
          (this.currentTarget = t.currentTarget),
          (this.relatedTarget = t.relatedTarget))
        : (this.type = t),
        e && T.extend(this, e),
        (this.timeStamp = (t && t.timeStamp) || Date.now()),
        (this[T.expando] = !0);
    }),
    (T.Event.prototype = {
      constructor: T.Event,
      isDefaultPrevented: Et,
      isPropagationStopped: Et,
      isImmediatePropagationStopped: Et,
      isSimulated: !1,
      preventDefault: function () {
        var t = this.originalEvent;
        (this.isDefaultPrevented = wt),
          t && !this.isSimulated && t.preventDefault();
      },
      stopPropagation: function () {
        var t = this.originalEvent;
        (this.isPropagationStopped = wt),
          t && !this.isSimulated && t.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var t = this.originalEvent;
        (this.isImmediatePropagationStopped = wt),
          t && !this.isSimulated && t.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    T.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
          var e = t.button;
          return null == t.which && vt.test(t.type)
            ? null != t.charCode
              ? t.charCode
              : t.keyCode
            : !t.which && void 0 !== e && _t.test(t.type)
            ? 1 & e
              ? 1
              : 2 & e
              ? 3
              : 4 & e
              ? 2
              : 0
            : t.which;
        },
      },
      T.event.addProp
    ),
    T.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
      T.event.special[t] = {
        setup: function () {
          return Ct(this, t, xt), !1;
        },
        trigger: function () {
          return Ct(this, t), !0;
        },
        delegateType: e,
      };
    }),
    T.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (t, o) {
        T.event.special[t] = {
          delegateType: o,
          bindType: o,
          handle: function (t) {
            var e,
              n = t.relatedTarget,
              i = t.handleObj;
            return (
              (n && (n === this || T.contains(this, n))) ||
                ((t.type = i.origType),
                (e = i.handler.apply(this, arguments)),
                (t.type = o)),
              e
            );
          },
        };
      }
    ),
    T.fn.extend({
      on: function (t, e, n, i) {
        return Tt(this, t, e, n, i);
      },
      one: function (t, e, n, i) {
        return Tt(this, t, e, n, i, 1);
      },
      off: function (t, e, n) {
        var i, o;
        if (t && t.preventDefault && t.handleObj)
          return (
            (i = t.handleObj),
            T(t.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" != typeof t)
          return (
            (!1 !== e && "function" != typeof e) || ((n = e), (e = void 0)),
            !1 === n && (n = Et),
            this.each(function () {
              T.event.remove(this, t, n, e);
            })
          );
        for (o in t) this.off(o, e, t[o]);
        return this;
      },
    });
  var St = /<script|<style|<link/i,
    It = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function kt(t, e) {
    return (
      (I(t, "table") &&
        I(11 !== e.nodeType ? e : e.firstChild, "tr") &&
        T(t).children("tbody")[0]) ||
      t
    );
  }
  function At(t) {
    return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
  }
  function Lt(t) {
    return (
      "true/" === (t.type || "").slice(0, 5)
        ? (t.type = t.type.slice(5))
        : t.removeAttribute("type"),
      t
    );
  }
  function Nt(t, e) {
    var n, i, o, r;
    if (1 === e.nodeType) {
      if (X.hasData(t) && (r = X.get(t).events))
        for (o in (X.remove(e, "handle events"), r))
          for (n = 0, i = r[o].length; n < i; n++) T.event.add(e, o, r[o][n]);
      G.hasData(t) && ((t = G.access(t)), (t = T.extend({}, t)), G.set(e, t));
    }
  }
  function Ot(n, i, o, r) {
    i = g(i);
    var t,
      e,
      s,
      a,
      l,
      u,
      c = 0,
      f = n.length,
      d = f - 1,
      h = i[0],
      p = _(h);
    if (p || (1 < f && "string" == typeof h && !v.checkClone && It.test(h)))
      return n.each(function (t) {
        var e = n.eq(t);
        p && (i[0] = h.call(this, t, e.html())), Ot(e, i, o, r);
      });
    if (
      f &&
      ((e = (t = yt(i, n[0].ownerDocument, !1, n, r)).firstChild),
      1 === t.childNodes.length && (t = e),
      e || r)
    ) {
      for (a = (s = T.map(pt(t, "script"), At)).length; c < f; c++)
        (l = t),
          c !== d &&
            ((l = T.clone(l, !0, !0)), a && T.merge(s, pt(l, "script"))),
          o.call(n[c], l, c);
      if (a)
        for (u = s[s.length - 1].ownerDocument, T.map(s, Lt), c = 0; c < a; c++)
          (l = s[c]),
            dt.test(l.type || "") &&
              !X.access(l, "globalEval") &&
              T.contains(u, l) &&
              (l.src && "module" !== (l.type || "").toLowerCase()
                ? T._evalUrl &&
                  !l.noModule &&
                  T._evalUrl(
                    l.src,
                    { nonce: l.nonce || l.getAttribute("nonce") },
                    u
                  )
                : b(l.textContent.replace(Dt, ""), l, u));
    }
    return n;
  }
  function jt(t, e, n) {
    for (var i, o = e ? T.filter(e, t) : t, r = 0; null != (i = o[r]); r++)
      n || 1 !== i.nodeType || T.cleanData(pt(i)),
        i.parentNode &&
          (n && ot(i) && mt(pt(i, "script")), i.parentNode.removeChild(i));
    return t;
  }
  T.extend({
    htmlPrefilter: function (t) {
      return t;
    },
    clone: function (t, e, n) {
      var i,
        o,
        r,
        s,
        a,
        l,
        u,
        c = t.cloneNode(!0),
        f = ot(t);
      if (
        !(
          v.noCloneChecked ||
          (1 !== t.nodeType && 11 !== t.nodeType) ||
          T.isXMLDoc(t)
        )
      )
        for (s = pt(c), i = 0, o = (r = pt(t)).length; i < o; i++)
          (a = r[i]),
            (l = s[i]),
            (u = void 0),
            "input" === (u = l.nodeName.toLowerCase()) && ct.test(a.type)
              ? (l.checked = a.checked)
              : ("input" !== u && "textarea" !== u) ||
                (l.defaultValue = a.defaultValue);
      if (e)
        if (n)
          for (r = r || pt(t), s = s || pt(c), i = 0, o = r.length; i < o; i++)
            Nt(r[i], s[i]);
        else Nt(t, c);
      return (
        0 < (s = pt(c, "script")).length && mt(s, !f && pt(t, "script")), c
      );
    },
    cleanData: function (t) {
      for (var e, n, i, o = T.event.special, r = 0; void 0 !== (n = t[r]); r++)
        if ($(n)) {
          if ((e = n[X.expando])) {
            if (e.events)
              for (i in e.events)
                o[i] ? T.event.remove(n, i) : T.removeEvent(n, i, e.handle);
            n[X.expando] = void 0;
          }
          n[G.expando] && (n[G.expando] = void 0);
        }
    },
  }),
    T.fn.extend({
      detach: function (t) {
        return jt(this, t, !0);
      },
      remove: function (t) {
        return jt(this, t);
      },
      text: function (t) {
        return F(
          this,
          function (t) {
            return void 0 === t
              ? T.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = t);
                });
          },
          null,
          t,
          arguments.length
        );
      },
      append: function () {
        return Ot(this, arguments, function (t) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            kt(this, t).appendChild(t);
        });
      },
      prepend: function () {
        return Ot(this, arguments, function (t) {
          var e;
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            (e = kt(this, t)).insertBefore(t, e.firstChild);
        });
      },
      before: function () {
        return Ot(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function () {
        return Ot(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++)
          1 === t.nodeType && (T.cleanData(pt(t, !1)), (t.textContent = ""));
        return this;
      },
      clone: function (t, e) {
        return (
          (t = null != t && t),
          (e = null == e ? t : e),
          this.map(function () {
            return T.clone(this, t, e);
          })
        );
      },
      html: function (t) {
        return F(
          this,
          function (t) {
            var e = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
            if (
              "string" == typeof t &&
              !St.test(t) &&
              !ht[(ft.exec(t) || ["", ""])[1].toLowerCase()]
            ) {
              t = T.htmlPrefilter(t);
              try {
                for (; n < i; n++)
                  1 === (e = this[n] || {}).nodeType &&
                    (T.cleanData(pt(e, !1)), (e.innerHTML = t));
                e = 0;
              } catch (t) {}
            }
            e && this.empty().append(t);
          },
          null,
          t,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return Ot(
          this,
          arguments,
          function (t) {
            var e = this.parentNode;
            T.inArray(this, n) < 0 &&
              (T.cleanData(pt(this)), e && e.replaceChild(t, this));
          },
          n
        );
      },
    }),
    T.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (t, s) {
        T.fn[t] = function (t) {
          for (var e, n = [], i = T(t), o = i.length - 1, r = 0; r <= o; r++)
            (e = r === o ? this : this.clone(!0)),
              T(i[r])[s](e),
              l.apply(n, e.get());
          return this.pushStack(n);
        };
      }
    );
  function zt(t, e, n) {
    var i,
      o = {};
    for (i in e) (o[i] = t.style[i]), (t.style[i] = e[i]);
    for (i in ((n = n.call(t)), e)) t.style[i] = o[i];
    return n;
  }
  var qt,
    Rt,
    Pt,
    Wt,
    Ht,
    Mt,
    Ft,
    Bt,
    Qt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
    Ut = function (t) {
      var e = t.ownerDocument.defaultView;
      return (e && e.opener) || (e = E), e.getComputedStyle(t);
    },
    Yt = new RegExp(nt.join("|"), "i");
  function $t() {
    var t;
    Bt &&
      ((Ft.style.cssText =
        "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
      (Bt.style.cssText =
        "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
      it.appendChild(Ft).appendChild(Bt),
      (t = E.getComputedStyle(Bt)),
      (qt = "1%" !== t.top),
      (Mt = 12 === Vt(t.marginLeft)),
      (Bt.style.right = "60%"),
      (Wt = 36 === Vt(t.right)),
      (Rt = 36 === Vt(t.width)),
      (Bt.style.position = "absolute"),
      (Pt = 12 === Vt(Bt.offsetWidth / 3)),
      it.removeChild(Ft),
      (Bt = null));
  }
  function Vt(t) {
    return Math.round(parseFloat(t));
  }
  function Xt(t, e, n) {
    var i,
      o,
      r = t.style;
    return (
      (n = n || Ut(t)) &&
        ("" !== (o = n.getPropertyValue(e) || n[e]) ||
          ot(t) ||
          (o = T.style(t, e)),
        !v.pixelBoxStyles() &&
          Qt.test(o) &&
          Yt.test(e) &&
          ((i = r.width),
          (t = r.minWidth),
          (e = r.maxWidth),
          (r.minWidth = r.maxWidth = r.width = o),
          (o = n.width),
          (r.width = i),
          (r.minWidth = t),
          (r.maxWidth = e))),
      void 0 !== o ? o + "" : o
    );
  }
  function Gt(t, e) {
    return {
      get: function () {
        if (!t()) return (this.get = e).apply(this, arguments);
        delete this.get;
      },
    };
  }
  (Ft = x.createElement("div")),
    (Bt = x.createElement("div")).style &&
      ((Bt.style.backgroundClip = "content-box"),
      (Bt.cloneNode(!0).style.backgroundClip = ""),
      (v.clearCloneStyle = "content-box" === Bt.style.backgroundClip),
      T.extend(v, {
        boxSizingReliable: function () {
          return $t(), Rt;
        },
        pixelBoxStyles: function () {
          return $t(), Wt;
        },
        pixelPosition: function () {
          return $t(), qt;
        },
        reliableMarginLeft: function () {
          return $t(), Mt;
        },
        scrollboxSize: function () {
          return $t(), Pt;
        },
        reliableTrDimensions: function () {
          var t, e, n;
          return (
            null == Ht &&
              ((t = x.createElement("table")),
              (n = x.createElement("tr")),
              (e = x.createElement("div")),
              (t.style.cssText = "position:absolute;left:-11111px"),
              (n.style.height = "1px"),
              (e.style.height = "9px"),
              it.appendChild(t).appendChild(n).appendChild(e),
              (n = E.getComputedStyle(n)),
              (Ht = 3 < parseInt(n.height)),
              it.removeChild(t)),
            Ht
          );
        },
      }));
  var Kt = ["Webkit", "Moz", "ms"],
    Jt = x.createElement("div").style,
    Zt = {};
  function te(t) {
    var e = T.cssProps[t] || Zt[t];
    return (
      e ||
      (t in Jt
        ? t
        : (Zt[t] =
            (function (t) {
              for (
                var e = t[0].toUpperCase() + t.slice(1), n = Kt.length;
                n--;

              )
                if ((t = Kt[n] + e) in Jt) return t;
            })(t) || t))
    );
  }
  var ee = /^(none|table(?!-c[ea]).+)/,
    ne = /^--/,
    ie = { position: "absolute", visibility: "hidden", display: "block" },
    oe = { letterSpacing: "0", fontWeight: "400" };
  function re(t, e, n) {
    var i = et.exec(e);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
  }
  function se(t, e, n, i, o, r) {
    var s = "width" === e ? 1 : 0,
      a = 0,
      l = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; s < 4; s += 2)
      "margin" === n && (l += T.css(t, n + nt[s], !0, o)),
        i
          ? ("content" === n && (l -= T.css(t, "padding" + nt[s], !0, o)),
            "margin" !== n &&
              (l -= T.css(t, "border" + nt[s] + "Width", !0, o)))
          : ((l += T.css(t, "padding" + nt[s], !0, o)),
            "padding" !== n
              ? (l += T.css(t, "border" + nt[s] + "Width", !0, o))
              : (a += T.css(t, "border" + nt[s] + "Width", !0, o)));
    return (
      !i &&
        0 <= r &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - 0.5
            )
          ) || 0),
      l
    );
  }
  function ae(t, e, n) {
    var i = Ut(t),
      o =
        (!v.boxSizingReliable() || n) &&
        "border-box" === T.css(t, "boxSizing", !1, i),
      r = o,
      s = Xt(t, e, i),
      a = "offset" + e[0].toUpperCase() + e.slice(1);
    if (Qt.test(s)) {
      if (!n) return s;
      s = "auto";
    }
    return (
      ((!v.boxSizingReliable() && o) ||
        (!v.reliableTrDimensions() && I(t, "tr")) ||
        "auto" === s ||
        (!parseFloat(s) && "inline" === T.css(t, "display", !1, i))) &&
        t.getClientRects().length &&
        ((o = "border-box" === T.css(t, "boxSizing", !1, i)),
        (r = a in t) && (s = t[a])),
      (s = parseFloat(s) || 0) +
        se(t, e, n || (o ? "border" : "content"), r, i, s) +
        "px"
    );
  }
  function le(t, e, n, i, o) {
    return new le.prototype.init(t, e, n, i, o);
  }
  T.extend({
    cssHooks: {
      opacity: {
        get: function (t, e) {
          if (e) {
            t = Xt(t, "opacity");
            return "" === t ? "1" : t;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (t, e, n, i) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var o,
          r,
          s,
          a = Y(e),
          l = ne.test(e),
          u = t.style;
        if (
          (l || (e = te(a)), (s = T.cssHooks[e] || T.cssHooks[a]), void 0 === n)
        )
          return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : u[e];
        "string" === (r = typeof n) &&
          (o = et.exec(n)) &&
          o[1] &&
          ((n = at(t, e, o)), (r = "number")),
          null != n &&
            n == n &&
            ("number" !== r ||
              l ||
              (n += (o && o[3]) || (T.cssNumber[a] ? "" : "px")),
            v.clearCloneStyle ||
              "" !== n ||
              0 !== e.indexOf("background") ||
              (u[e] = "inherit"),
            (s && "set" in s && void 0 === (n = s.set(t, n, i))) ||
              (l ? u.setProperty(e, n) : (u[e] = n)));
      }
    },
    css: function (t, e, n, i) {
      var o,
        r = Y(e);
      return (
        ne.test(e) || (e = te(r)),
        (r = T.cssHooks[e] || T.cssHooks[r]) &&
          "get" in r &&
          (o = r.get(t, !0, n)),
        void 0 === o && (o = Xt(t, e, i)),
        "normal" === o && e in oe && (o = oe[e]),
        "" === n || n
          ? ((e = parseFloat(o)), !0 === n || isFinite(e) ? e || 0 : o)
          : o
      );
    },
  }),
    T.each(["height", "width"], function (t, a) {
      T.cssHooks[a] = {
        get: function (t, e, n) {
          if (e)
            return !ee.test(T.css(t, "display")) ||
              (t.getClientRects().length && t.getBoundingClientRect().width)
              ? ae(t, a, n)
              : zt(t, ie, function () {
                  return ae(t, a, n);
                });
        },
        set: function (t, e, n) {
          var i,
            o = Ut(t),
            r = !v.scrollboxSize() && "absolute" === o.position,
            s = (r || n) && "border-box" === T.css(t, "boxSizing", !1, o),
            n = n ? se(t, a, n, s, o) : 0;
          return (
            s &&
              r &&
              (n -= Math.ceil(
                t["offset" + a[0].toUpperCase() + a.slice(1)] -
                  parseFloat(o[a]) -
                  se(t, a, "border", !1, o) -
                  0.5
              )),
            n &&
              (i = et.exec(e)) &&
              "px" !== (i[3] || "px") &&
              ((t.style[a] = e), (e = T.css(t, a))),
            re(0, e, n)
          );
        },
      };
    }),
    (T.cssHooks.marginLeft = Gt(v.reliableMarginLeft, function (t, e) {
      if (e)
        return (
          (parseFloat(Xt(t, "marginLeft")) ||
            t.getBoundingClientRect().left -
              zt(t, { marginLeft: 0 }, function () {
                return t.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    T.each({ margin: "", padding: "", border: "Width" }, function (o, r) {
      (T.cssHooks[o + r] = {
        expand: function (t) {
          for (
            var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t];
            e < 4;
            e++
          )
            n[o + nt[e] + r] = i[e] || i[e - 2] || i[0];
          return n;
        },
      }),
        "margin" !== o && (T.cssHooks[o + r].set = re);
    }),
    T.fn.extend({
      css: function (t, e) {
        return F(
          this,
          function (t, e, n) {
            var i,
              o,
              r = {},
              s = 0;
            if (Array.isArray(e)) {
              for (i = Ut(t), o = e.length; s < o; s++)
                r[e[s]] = T.css(t, e[s], !1, i);
              return r;
            }
            return void 0 !== n ? T.style(t, e, n) : T.css(t, e);
          },
          t,
          e,
          1 < arguments.length
        );
      },
    }),
    ((T.Tween = le).prototype = {
      constructor: le,
      init: function (t, e, n, i, o, r) {
        (this.elem = t),
          (this.prop = n),
          (this.easing = o || T.easing._default),
          (this.options = e),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = r || (T.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var t = le.propHooks[this.prop];
        return (t && t.get ? t : le.propHooks._default).get(this);
      },
      run: function (t) {
        var e,
          n = le.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = e =
                T.easing[this.easing](
                  t,
                  this.options.duration * t,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = e = t),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          (n && n.set ? n : le.propHooks._default).set(this),
          this
        );
      },
    }),
    (le.prototype.init.prototype = le.prototype),
    (le.propHooks = {
      _default: {
        get: function (t) {
          return 1 !== t.elem.nodeType ||
            (null != t.elem[t.prop] && null == t.elem.style[t.prop])
            ? t.elem[t.prop]
            : (t = T.css(t.elem, t.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (t) {
          T.fx.step[t.prop]
            ? T.fx.step[t.prop](t)
            : 1 !== t.elem.nodeType ||
              (!T.cssHooks[t.prop] && null == t.elem.style[te(t.prop)])
            ? (t.elem[t.prop] = t.now)
            : T.style(t.elem, t.prop, t.now + t.unit);
        },
      },
    }),
    (le.propHooks.scrollTop = le.propHooks.scrollLeft =
      {
        set: function (t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        },
      }),
    (T.easing = {
      linear: function (t) {
        return t;
      },
      swing: function (t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (T.fx = le.prototype.init),
    (T.fx.step = {});
  var ue,
    ce,
    fe = /^(?:toggle|show|hide)$/,
    de = /queueHooks$/;
  function he() {
    ce &&
      (!1 === x.hidden && E.requestAnimationFrame
        ? E.requestAnimationFrame(he)
        : E.setTimeout(he, T.fx.interval),
      T.fx.tick());
  }
  function pe() {
    return (
      E.setTimeout(function () {
        ue = void 0;
      }),
      (ue = Date.now())
    );
  }
  function me(t, e) {
    var n,
      i = 0,
      o = { height: t };
    for (e = e ? 1 : 0; i < 4; i += 2 - e)
      o["margin" + (n = nt[i])] = o["padding" + n] = t;
    return e && (o.opacity = o.width = t), o;
  }
  function ge(t, e, n) {
    for (
      var i,
        o = (ye.tweeners[e] || []).concat(ye.tweeners["*"]),
        r = 0,
        s = o.length;
      r < s;
      r++
    )
      if ((i = o[r].call(n, e, t))) return i;
  }
  function ye(o, t, e) {
    var n,
      r,
      i = 0,
      s = ye.prefilters.length,
      a = T.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (r) return !1;
        for (
          var t = ue || pe(),
            t = Math.max(0, u.startTime + u.duration - t),
            e = 1 - (t / u.duration || 0),
            n = 0,
            i = u.tweens.length;
          n < i;
          n++
        )
          u.tweens[n].run(e);
        return (
          a.notifyWith(o, [u, e, t]),
          e < 1 && i
            ? t
            : (i || a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u]), !1)
        );
      },
      u = a.promise({
        elem: o,
        props: T.extend({}, t),
        opts: T.extend(!0, { specialEasing: {}, easing: T.easing._default }, e),
        originalProperties: t,
        originalOptions: e,
        startTime: ue || pe(),
        duration: e.duration,
        tweens: [],
        createTween: function (t, e) {
          t = T.Tween(
            o,
            u.opts,
            t,
            e,
            u.opts.specialEasing[t] || u.opts.easing
          );
          return u.tweens.push(t), t;
        },
        stop: function (t) {
          var e = 0,
            n = t ? u.tweens.length : 0;
          if (r) return this;
          for (r = !0; e < n; e++) u.tweens[e].run(1);
          return (
            t
              ? (a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u, t]))
              : a.rejectWith(o, [u, t]),
            this
          );
        },
      }),
      c = u.props;
    for (
      !(function (t, e) {
        var n, i, o, r, s;
        for (n in t)
          if (
            ((o = e[(i = Y(n))]),
            (r = t[n]),
            Array.isArray(r) && ((o = r[1]), (r = t[n] = r[0])),
            n !== i && ((t[i] = r), delete t[n]),
            (s = T.cssHooks[i]) && ("expand" in s))
          )
            for (n in ((r = s.expand(r)), delete t[i], r))
              (n in t) || ((t[n] = r[n]), (e[n] = o));
          else e[i] = o;
      })(c, u.opts.specialEasing);
      i < s;
      i++
    )
      if ((n = ye.prefilters[i].call(u, o, c, u.opts)))
        return (
          _(n.stop) &&
            (T._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      T.map(c, ge, u),
      _(u.opts.start) && u.opts.start.call(o, u),
      u
        .progress(u.opts.progress)
        .done(u.opts.done, u.opts.complete)
        .fail(u.opts.fail)
        .always(u.opts.always),
      T.fx.timer(T.extend(l, { elem: o, anim: u, queue: u.opts.queue })),
      u
    );
  }
  (T.Animation = T.extend(ye, {
    tweeners: {
      "*": [
        function (t, e) {
          var n = this.createTween(t, e);
          return at(n.elem, t, et.exec(e), n), n;
        },
      ],
    },
    tweener: function (t, e) {
      for (
        var n, i = 0, o = (t = _(t) ? ((e = t), ["*"]) : t.match(z)).length;
        i < o;
        i++
      )
        (n = t[i]),
          (ye.tweeners[n] = ye.tweeners[n] || []),
          ye.tweeners[n].unshift(e);
    },
    prefilters: [
      function (t, e, n) {
        var i,
          o,
          r,
          s,
          a,
          l,
          u,
          c = "width" in e || "height" in e,
          f = this,
          d = {},
          h = t.style,
          p = t.nodeType && st(t),
          m = X.get(t, "fxshow");
        for (i in (n.queue ||
          (null == (s = T._queueHooks(t, "fx")).unqueued &&
            ((s.unqueued = 0),
            (a = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || a();
            })),
          s.unqueued++,
          f.always(function () {
            f.always(function () {
              s.unqueued--, T.queue(t, "fx").length || s.empty.fire();
            });
          })),
        e))
          if (((o = e[i]), fe.test(o))) {
            if (
              (delete e[i],
              (r = r || "toggle" === o),
              o === (p ? "hide" : "show"))
            ) {
              if ("show" !== o || !m || void 0 === m[i]) continue;
              p = !0;
            }
            d[i] = (m && m[i]) || T.style(t, i);
          }
        if ((l = !T.isEmptyObject(e)) || !T.isEmptyObject(d))
          for (i in (c &&
            1 === t.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (u = m && m.display) && (u = X.get(t, "display")),
            "none" === (c = T.css(t, "display")) &&
              (u
                ? (c = u)
                : (ut([t], !0),
                  (u = t.style.display || u),
                  (c = T.css(t, "display")),
                  ut([t]))),
            ("inline" === c || ("inline-block" === c && null != u)) &&
              "none" === T.css(t, "float") &&
              (l ||
                (f.done(function () {
                  h.display = u;
                }),
                null == u && ((c = h.display), (u = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            f.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (l = !1),
          d))
            l ||
              (m
                ? "hidden" in m && (p = m.hidden)
                : (m = X.access(t, "fxshow", { display: u })),
              r && (m.hidden = !p),
              p && ut([t], !0),
              f.done(function () {
                for (i in (p || ut([t]), X.remove(t, "fxshow"), d))
                  T.style(t, i, d[i]);
              })),
              (l = ge(p ? m[i] : 0, i, f)),
              i in m ||
                ((m[i] = l.start), p && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (t, e) {
      e ? ye.prefilters.unshift(t) : ye.prefilters.push(t);
    },
  })),
    (T.speed = function (t, e, n) {
      var i =
        t && "object" == typeof t
          ? T.extend({}, t)
          : {
              complete: n || (!n && e) || (_(t) && t),
              duration: t,
              easing: (n && e) || (e && !_(e) && e),
            };
      return (
        T.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration in T.fx.speeds
              ? (i.duration = T.fx.speeds[i.duration])
              : (i.duration = T.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          _(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue);
        }),
        i
      );
    }),
    T.fn.extend({
      fadeTo: function (t, e, n, i) {
        return this.filter(st)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: e }, t, n, i);
      },
      animate: function (e, t, n, i) {
        var o = T.isEmptyObject(e),
          r = T.speed(t, n, i),
          i = function () {
            var t = ye(this, T.extend({}, e), r);
            (o || X.get(this, "finish")) && t.stop(!0);
          };
        return (
          (i.finish = i),
          o || !1 === r.queue ? this.each(i) : this.queue(r.queue, i)
        );
      },
      stop: function (o, t, r) {
        function s(t) {
          var e = t.stop;
          delete t.stop, e(r);
        }
        return (
          "string" != typeof o && ((r = t), (t = o), (o = void 0)),
          t && this.queue(o || "fx", []),
          this.each(function () {
            var t = !0,
              e = null != o && o + "queueHooks",
              n = T.timers,
              i = X.get(this);
            if (e) i[e] && i[e].stop && s(i[e]);
            else for (e in i) i[e] && i[e].stop && de.test(e) && s(i[e]);
            for (e = n.length; e--; )
              n[e].elem !== this ||
                (null != o && n[e].queue !== o) ||
                (n[e].anim.stop(r), (t = !1), n.splice(e, 1));
            (!t && r) || T.dequeue(this, o);
          })
        );
      },
      finish: function (s) {
        return (
          !1 !== s && (s = s || "fx"),
          this.each(function () {
            var t,
              e = X.get(this),
              n = e[s + "queue"],
              i = e[s + "queueHooks"],
              o = T.timers,
              r = n ? n.length : 0;
            for (
              e.finish = !0,
                T.queue(this, s, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === s &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < r; t++)
              n[t] && n[t].finish && n[t].finish.call(this);
            delete e.finish;
          })
        );
      },
    }),
    T.each(["toggle", "show", "hide"], function (t, i) {
      var o = T.fn[i];
      T.fn[i] = function (t, e, n) {
        return null == t || "boolean" == typeof t
          ? o.apply(this, arguments)
          : this.animate(me(i, !0), t, e, n);
      };
    }),
    T.each(
      {
        slideDown: me("show"),
        slideUp: me("hide"),
        slideToggle: me("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (t, i) {
        T.fn[t] = function (t, e, n) {
          return this.animate(i, t, e, n);
        };
      }
    ),
    (T.timers = []),
    (T.fx.tick = function () {
      var t,
        e = 0,
        n = T.timers;
      for (ue = Date.now(); e < n.length; e++)
        (t = n[e])() || n[e] !== t || n.splice(e--, 1);
      n.length || T.fx.stop(), (ue = void 0);
    }),
    (T.fx.timer = function (t) {
      T.timers.push(t), T.fx.start();
    }),
    (T.fx.interval = 13),
    (T.fx.start = function () {
      ce || ((ce = !0), he());
    }),
    (T.fx.stop = function () {
      ce = null;
    }),
    (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (T.fn.delay = function (i, t) {
      return (
        (i = (T.fx && T.fx.speeds[i]) || i),
        (t = t || "fx"),
        this.queue(t, function (t, e) {
          var n = E.setTimeout(t, i);
          e.stop = function () {
            E.clearTimeout(n);
          };
        })
      );
    }),
    (f = x.createElement("input")),
    (tt = x.createElement("select").appendChild(x.createElement("option"))),
    (f.type = "checkbox"),
    (v.checkOn = "" !== f.value),
    (v.optSelected = tt.selected),
    ((f = x.createElement("input")).value = "t"),
    (f.type = "radio"),
    (v.radioValue = "t" === f.value);
  var ve,
    _e = T.expr.attrHandle;
  T.fn.extend({
    attr: function (t, e) {
      return F(this, T.attr, t, e, 1 < arguments.length);
    },
    removeAttr: function (t) {
      return this.each(function () {
        T.removeAttr(this, t);
      });
    },
  }),
    T.extend({
      attr: function (t, e, n) {
        var i,
          o,
          r = t.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return void 0 === t.getAttribute
            ? T.prop(t, e, n)
            : ((1 === r && T.isXMLDoc(t)) ||
                (o =
                  T.attrHooks[e.toLowerCase()] ||
                  (T.expr.match.bool.test(e) ? ve : void 0)),
              void 0 !== n
                ? null === n
                  ? void T.removeAttr(t, e)
                  : o && "set" in o && void 0 !== (i = o.set(t, n, e))
                  ? i
                  : (t.setAttribute(e, n + ""), n)
                : !(o && "get" in o && null !== (i = o.get(t, e))) &&
                  null == (i = T.find.attr(t, e))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (!v.radioValue && "radio" === e && I(t, "input")) {
              var n = t.value;
              return t.setAttribute("type", e), n && (t.value = n), e;
            }
          },
        },
      },
      removeAttr: function (t, e) {
        var n,
          i = 0,
          o = e && e.match(z);
        if (o && 1 === t.nodeType) for (; (n = o[i++]); ) t.removeAttribute(n);
      },
    }),
    (ve = {
      set: function (t, e, n) {
        return !1 === e ? T.removeAttr(t, n) : t.setAttribute(n, n), n;
      },
    }),
    T.each(T.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var s = _e[e] || T.find.attr;
      _e[e] = function (t, e, n) {
        var i,
          o,
          r = e.toLowerCase();
        return (
          n ||
            ((o = _e[r]),
            (_e[r] = i),
            (i = null != s(t, e, n) ? r : null),
            (_e[r] = o)),
          i
        );
      };
    });
  var be = /^(?:input|select|textarea|button)$/i,
    we = /^(?:a|area)$/i;
  function Ee(t) {
    return (t.match(z) || []).join(" ");
  }
  function xe(t) {
    return (t.getAttribute && t.getAttribute("class")) || "";
  }
  function Te(t) {
    return Array.isArray(t) ? t : ("string" == typeof t && t.match(z)) || [];
  }
  T.fn.extend({
    prop: function (t, e) {
      return F(this, T.prop, t, e, 1 < arguments.length);
    },
    removeProp: function (t) {
      return this.each(function () {
        delete this[T.propFix[t] || t];
      });
    },
  }),
    T.extend({
      prop: function (t, e, n) {
        var i,
          o,
          r = t.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return (
            (1 === r && T.isXMLDoc(t)) ||
              ((e = T.propFix[e] || e), (o = T.propHooks[e])),
            void 0 !== n
              ? o && "set" in o && void 0 !== (i = o.set(t, n, e))
                ? i
                : (t[e] = n)
              : o && "get" in o && null !== (i = o.get(t, e))
              ? i
              : t[e]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            var e = T.find.attr(t, "tabindex");
            return e
              ? parseInt(e, 10)
              : be.test(t.nodeName) || (we.test(t.nodeName) && t.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    v.optSelected ||
      (T.propHooks.selected = {
        get: function (t) {
          t = t.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (t) {
          t = t.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    T.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        T.propFix[this.toLowerCase()] = this;
      }
    ),
    T.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a = 0;
        if (_(e))
          return this.each(function (t) {
            T(this).addClass(e.call(this, t, xe(this)));
          });
        if ((t = Te(e)).length)
          for (; (n = this[a++]); )
            if (((s = xe(n)), (i = 1 === n.nodeType && " " + Ee(s) + " "))) {
              for (r = 0; (o = t[r++]); )
                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
              s !== (s = Ee(i)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a = 0;
        if (_(e))
          return this.each(function (t) {
            T(this).removeClass(e.call(this, t, xe(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((t = Te(e)).length)
          for (; (n = this[a++]); )
            if (((s = xe(n)), (i = 1 === n.nodeType && " " + Ee(s) + " "))) {
              for (r = 0; (o = t[r++]); )
                for (; -1 < i.indexOf(" " + o + " "); )
                  i = i.replace(" " + o + " ", " ");
              s !== (s = Ee(i)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (o, e) {
        var r = typeof o,
          s = "string" == r || Array.isArray(o);
        return "boolean" == typeof e && s
          ? e
            ? this.addClass(o)
            : this.removeClass(o)
          : _(o)
          ? this.each(function (t) {
              T(this).toggleClass(o.call(this, t, xe(this), e), e);
            })
          : this.each(function () {
              var t, e, n, i;
              if (s)
                for (e = 0, n = T(this), i = Te(o); (t = i[e++]); )
                  n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
              else
                (void 0 !== o && "boolean" != r) ||
                  ((t = xe(this)) && X.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      (!t && !1 !== o && X.get(this, "__className__")) || ""
                    ));
            });
      },
      hasClass: function (t) {
        for (var e, n = 0, i = " " + t + " "; (e = this[n++]); )
          if (1 === e.nodeType && -1 < (" " + Ee(xe(e)) + " ").indexOf(i))
            return !0;
        return !1;
      },
    });
  var Ce = /\r/g;
  T.fn.extend({
    val: function (e) {
      var n,
        t,
        i,
        o = this[0];
      return arguments.length
        ? ((i = _(e)),
          this.each(function (t) {
            1 === this.nodeType &&
              (null == (t = i ? e.call(this, t, T(this).val()) : e)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = T.map(t, function (t) {
                    return null == t ? "" : t + "";
                  })),
              ((n =
                T.valHooks[this.type] ||
                T.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in n &&
                void 0 !== n.set(this, t, "value")) ||
                (this.value = t));
          }))
        : o
        ? (n = T.valHooks[o.type] || T.valHooks[o.nodeName.toLowerCase()]) &&
          "get" in n &&
          void 0 !== (t = n.get(o, "value"))
          ? t
          : "string" == typeof (t = o.value)
          ? t.replace(Ce, "")
          : null == t
          ? ""
          : t
        : void 0;
    },
  }),
    T.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = T.find.attr(t, "value");
            return null != e ? e : Ee(T.text(t));
          },
        },
        select: {
          get: function (t) {
            for (
              var e,
                n = t.options,
                i = t.selectedIndex,
                o = "select-one" === t.type,
                r = o ? null : [],
                s = o ? i + 1 : n.length,
                a = i < 0 ? s : o ? i : 0;
              a < s;
              a++
            )
              if (
                ((e = n[a]).selected || a === i) &&
                !e.disabled &&
                (!e.parentNode.disabled || !I(e.parentNode, "optgroup"))
              ) {
                if (((e = T(e).val()), o)) return e;
                r.push(e);
              }
            return r;
          },
          set: function (t, e) {
            for (
              var n, i, o = t.options, r = T.makeArray(e), s = o.length;
              s--;

            )
              ((i = o[s]).selected =
                -1 < T.inArray(T.valHooks.option.get(i), r)) && (n = !0);
            return n || (t.selectedIndex = -1), r;
          },
        },
      },
    }),
    T.each(["radio", "checkbox"], function () {
      (T.valHooks[this] = {
        set: function (t, e) {
          if (Array.isArray(e))
            return (t.checked = -1 < T.inArray(T(t).val(), e));
        },
      }),
        v.checkOn ||
          (T.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value;
          });
    }),
    (v.focusin = "onfocusin" in E);
  function Se(t) {
    t.stopPropagation();
  }
  var Ie = /^(?:focusinfocus|focusoutblur)$/;
  T.extend(T.event, {
    trigger: function (t, e, n, i) {
      var o,
        r,
        s,
        a,
        l,
        u,
        c,
        f = [n || x],
        d = y.call(t, "type") ? t.type : t,
        h = y.call(t, "namespace") ? t.namespace.split(".") : [],
        p = (c = r = n = n || x);
      if (
        3 !== n.nodeType &&
        8 !== n.nodeType &&
        !Ie.test(d + T.event.triggered) &&
        (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
        (a = d.indexOf(":") < 0 && "on" + d),
        ((t = t[T.expando]
          ? t
          : new T.Event(d, "object" == typeof t && t)).isTrigger = i ? 2 : 3),
        (t.namespace = h.join(".")),
        (t.rnamespace = t.namespace
          ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
          : null),
        (t.result = void 0),
        t.target || (t.target = n),
        (e = null == e ? [t] : T.makeArray(e, [t])),
        (u = T.event.special[d] || {}),
        i || !u.trigger || !1 !== u.trigger.apply(n, e))
      ) {
        if (!i && !u.noBubble && !m(n)) {
          for (
            s = u.delegateType || d, Ie.test(s + d) || (p = p.parentNode);
            p;
            p = p.parentNode
          )
            f.push(p), (r = p);
          r === (n.ownerDocument || x) &&
            f.push(r.defaultView || r.parentWindow || E);
        }
        for (o = 0; (p = f[o++]) && !t.isPropagationStopped(); )
          (c = p),
            (t.type = 1 < o ? s : u.bindType || d),
            (l =
              (X.get(p, "events") || Object.create(null))[t.type] &&
              X.get(p, "handle")) && l.apply(p, e),
            (l = a && p[a]) &&
              l.apply &&
              $(p) &&
              ((t.result = l.apply(p, e)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = d),
          i ||
            t.isDefaultPrevented() ||
            (u._default && !1 !== u._default.apply(f.pop(), e)) ||
            !$(n) ||
            (a &&
              _(n[d]) &&
              !m(n) &&
              ((r = n[a]) && (n[a] = null),
              (T.event.triggered = d),
              t.isPropagationStopped() && c.addEventListener(d, Se),
              n[d](),
              t.isPropagationStopped() && c.removeEventListener(d, Se),
              (T.event.triggered = void 0),
              r && (n[a] = r))),
          t.result
        );
      }
    },
    simulate: function (t, e, n) {
      t = T.extend(new T.Event(), n, { type: t, isSimulated: !0 });
      T.event.trigger(t, null, e);
    },
  }),
    T.fn.extend({
      trigger: function (t, e) {
        return this.each(function () {
          T.event.trigger(t, e, this);
        });
      },
      triggerHandler: function (t, e) {
        var n = this[0];
        if (n) return T.event.trigger(t, e, n, !0);
      },
    }),
    v.focusin ||
      T.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
        function o(t) {
          T.event.simulate(i, t.target, T.event.fix(t));
        }
        T.event.special[i] = {
          setup: function () {
            var t = this.ownerDocument || this.document || this,
              e = X.access(t, i);
            e || t.addEventListener(n, o, !0), X.access(t, i, (e || 0) + 1);
          },
          teardown: function () {
            var t = this.ownerDocument || this.document || this,
              e = X.access(t, i) - 1;
            e
              ? X.access(t, i, e)
              : (t.removeEventListener(n, o, !0), X.remove(t, i));
          },
        };
      });
  var De = E.location,
    ke = { guid: Date.now() },
    Ae = /\?/;
  T.parseXML = function (t) {
    var e;
    if (!t || "string" != typeof t) return null;
    try {
      e = new E.DOMParser().parseFromString(t, "text/xml");
    } catch (t) {
      e = void 0;
    }
    return (
      (e && !e.getElementsByTagName("parsererror").length) ||
        T.error("Invalid XML: " + t),
      e
    );
  };
  var Le = /\[\]$/,
    Ne = /\r?\n/g,
    Oe = /^(?:submit|button|image|reset|file)$/i,
    je = /^(?:input|select|textarea|keygen)/i;
  (T.param = function (t, e) {
    function n(t, e) {
      (e = _(e) ? e() : e),
        (o[o.length] =
          encodeURIComponent(t) + "=" + encodeURIComponent(null == e ? "" : e));
    }
    var i,
      o = [];
    if (null == t) return "";
    if (Array.isArray(t) || (t.jquery && !T.isPlainObject(t)))
      T.each(t, function () {
        n(this.name, this.value);
      });
    else
      for (i in t)
        !(function n(i, t, o, r) {
          if (Array.isArray(t))
            T.each(t, function (t, e) {
              o || Le.test(i)
                ? r(i, e)
                : n(
                    i +
                      "[" +
                      ("object" == typeof e && null != e ? t : "") +
                      "]",
                    e,
                    o,
                    r
                  );
            });
          else if (o || "object" !== p(t)) r(i, t);
          else for (var e in t) n(i + "[" + e + "]", t[e], o, r);
        })(i, t[i], e, n);
    return o.join("&");
  }),
    T.fn.extend({
      serialize: function () {
        return T.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var t = T.prop(this, "elements");
          return t ? T.makeArray(t) : this;
        })
          .filter(function () {
            var t = this.type;
            return (
              this.name &&
              !T(this).is(":disabled") &&
              je.test(this.nodeName) &&
              !Oe.test(t) &&
              (this.checked || !ct.test(t))
            );
          })
          .map(function (t, e) {
            var n = T(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? T.map(n, function (t) {
                  return { name: e.name, value: t.replace(Ne, "\r\n") };
                })
              : { name: e.name, value: n.replace(Ne, "\r\n") };
          })
          .get();
      },
    });
  var ze = /%20/g,
    qe = /#.*$/,
    Re = /([?&])_=[^&]*/,
    Pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    We = /^(?:GET|HEAD)$/,
    He = /^\/\//,
    Me = {},
    Fe = {},
    Be = "*/".concat("*"),
    Qe = x.createElement("a");
  function Ue(r) {
    return function (t, e) {
      "string" != typeof t && ((e = t), (t = "*"));
      var n,
        i = 0,
        o = t.toLowerCase().match(z) || [];
      if (_(e))
        for (; (n = o[i++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (r[n] = r[n] || []).unshift(e))
            : (r[n] = r[n] || []).push(e);
    };
  }
  function Ye(e, i, o, r) {
    var s = {},
      a = e === Fe;
    function l(t) {
      var n;
      return (
        (s[t] = !0),
        T.each(e[t] || [], function (t, e) {
          e = e(i, o, r);
          return "string" != typeof e || a || s[e]
            ? a
              ? !(n = e)
              : void 0
            : (i.dataTypes.unshift(e), l(e), !1);
        }),
        n
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function $e(t, e) {
    var n,
      i,
      o = T.ajaxSettings.flatOptions || {};
    for (n in e) void 0 !== e[n] && ((o[n] ? t : (i = i || {}))[n] = e[n]);
    return i && T.extend(!0, t, i), t;
  }
  (Qe.href = De.href),
    T.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: De.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            De.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Be,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": T.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (t, e) {
        return e ? $e($e(t, T.ajaxSettings), e) : $e(T.ajaxSettings, t);
      },
      ajaxPrefilter: Ue(Me),
      ajaxTransport: Ue(Fe),
      ajax: function (t, e) {
        "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
        var l,
          u,
          c,
          n,
          f,
          i,
          d,
          h,
          o,
          p = T.ajaxSetup({}, e),
          m = p.context || p,
          g = p.context && (m.nodeType || m.jquery) ? T(m) : T.event,
          y = T.Deferred(),
          v = T.Callbacks("once memory"),
          _ = p.statusCode || {},
          r = {},
          s = {},
          a = "canceled",
          b = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (d) {
                if (!n)
                  for (n = {}; (e = Pe.exec(c)); )
                    n[e[1].toLowerCase() + " "] = (
                      n[e[1].toLowerCase() + " "] || []
                    ).concat(e[2]);
                e = n[t.toLowerCase() + " "];
              }
              return null == e ? null : e.join(", ");
            },
            getAllResponseHeaders: function () {
              return d ? c : null;
            },
            setRequestHeader: function (t, e) {
              return (
                null == d &&
                  ((t = s[t.toLowerCase()] = s[t.toLowerCase()] || t),
                  (r[t] = e)),
                this
              );
            },
            overrideMimeType: function (t) {
              return null == d && (p.mimeType = t), this;
            },
            statusCode: function (t) {
              if (t)
                if (d) b.always(t[b.status]);
                else for (var e in t) _[e] = [_[e], t[e]];
              return this;
            },
            abort: function (t) {
              t = t || a;
              return l && l.abort(t), w(0, t), this;
            },
          };
        if (
          (y.promise(b),
          (p.url = ((t || p.url || De.href) + "").replace(
            He,
            De.protocol + "//"
          )),
          (p.type = e.method || e.type || p.method || p.type),
          (p.dataTypes = (p.dataType || "*").toLowerCase().match(z) || [""]),
          null == p.crossDomain)
        ) {
          i = x.createElement("a");
          try {
            (i.href = p.url),
              (i.href = i.href),
              (p.crossDomain =
                Qe.protocol + "//" + Qe.host != i.protocol + "//" + i.host);
          } catch (t) {
            p.crossDomain = !0;
          }
        }
        if (
          (p.data &&
            p.processData &&
            "string" != typeof p.data &&
            (p.data = T.param(p.data, p.traditional)),
          Ye(Me, p, e, b),
          d)
        )
          return b;
        for (o in ((h = T.event && p.global) &&
          0 == T.active++ &&
          T.event.trigger("ajaxStart"),
        (p.type = p.type.toUpperCase()),
        (p.hasContent = !We.test(p.type)),
        (u = p.url.replace(qe, "")),
        p.hasContent
          ? p.data &&
            p.processData &&
            0 ===
              (p.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (p.data = p.data.replace(ze, "+"))
          : ((t = p.url.slice(u.length)),
            p.data &&
              (p.processData || "string" == typeof p.data) &&
              ((u += (Ae.test(u) ? "&" : "?") + p.data), delete p.data),
            !1 === p.cache &&
              ((u = u.replace(Re, "$1")),
              (t = (Ae.test(u) ? "&" : "?") + "_=" + ke.guid++ + t)),
            (p.url = u + t)),
        p.ifModified &&
          (T.lastModified[u] &&
            b.setRequestHeader("If-Modified-Since", T.lastModified[u]),
          T.etag[u] && b.setRequestHeader("If-None-Match", T.etag[u])),
        ((p.data && p.hasContent && !1 !== p.contentType) || e.contentType) &&
          b.setRequestHeader("Content-Type", p.contentType),
        b.setRequestHeader(
          "Accept",
          p.dataTypes[0] && p.accepts[p.dataTypes[0]]
            ? p.accepts[p.dataTypes[0]] +
                ("*" !== p.dataTypes[0] ? ", " + Be + "; q=0.01" : "")
            : p.accepts["*"]
        ),
        p.headers))
          b.setRequestHeader(o, p.headers[o]);
        if (p.beforeSend && (!1 === p.beforeSend.call(m, b, p) || d))
          return b.abort();
        if (
          ((a = "abort"),
          v.add(p.complete),
          b.done(p.success),
          b.fail(p.error),
          (l = Ye(Fe, p, e, b)))
        ) {
          if (((b.readyState = 1), h && g.trigger("ajaxSend", [b, p]), d))
            return b;
          p.async &&
            0 < p.timeout &&
            (f = E.setTimeout(function () {
              b.abort("timeout");
            }, p.timeout));
          try {
            (d = !1), l.send(r, w);
          } catch (t) {
            if (d) throw t;
            w(-1, t);
          }
        } else w(-1, "No Transport");
        function w(t, e, n, i) {
          var o,
            r,
            s,
            a = e;
          d ||
            ((d = !0),
            f && E.clearTimeout(f),
            (l = void 0),
            (c = i || ""),
            (b.readyState = 0 < t ? 4 : 0),
            (i = (200 <= t && t < 300) || 304 === t),
            n &&
              (s = (function (t, e, n) {
                for (
                  var i, o, r, s, a = t.contents, l = t.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === i &&
                      (i = t.mimeType || e.getResponseHeader("Content-Type"));
                if (i)
                  for (o in a)
                    if (a[o] && a[o].test(i)) {
                      l.unshift(o);
                      break;
                    }
                if (l[0] in n) r = l[0];
                else {
                  for (o in n) {
                    if (!l[0] || t.converters[o + " " + l[0]]) {
                      r = o;
                      break;
                    }
                    s = s || o;
                  }
                  r = r || s;
                }
                if (r) return r !== l[0] && l.unshift(r), n[r];
              })(p, b, n)),
            !i &&
              -1 < T.inArray("script", p.dataTypes) &&
              (p.converters["text script"] = function () {}),
            (s = (function (t, e, n, i) {
              var o,
                r,
                s,
                a,
                l,
                u = {},
                c = t.dataTypes.slice();
              if (c[1])
                for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
              for (r = c.shift(); r; )
                if (
                  (t.responseFields[r] && (n[t.responseFields[r]] = e),
                  !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                  (l = r),
                  (r = c.shift()))
                )
                  if ("*" === r) r = l;
                  else if ("*" !== l && l !== r) {
                    if (!(s = u[l + " " + r] || u["* " + r]))
                      for (o in u)
                        if (
                          ((a = o.split(" ")),
                          a[1] === r &&
                            (s = u[l + " " + a[0]] || u["* " + a[0]]))
                        ) {
                          !0 === s
                            ? (s = u[o])
                            : !0 !== u[o] && ((r = a[0]), c.unshift(a[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && t.throws) e = s(e);
                      else
                        try {
                          e = s(e);
                        } catch (t) {
                          return {
                            state: "parsererror",
                            error: s
                              ? t
                              : "No conversion from " + l + " to " + r,
                          };
                        }
                  }
              return { state: "success", data: e };
            })(p, s, b, i)),
            i
              ? (p.ifModified &&
                  ((n = b.getResponseHeader("Last-Modified")) &&
                    (T.lastModified[u] = n),
                  (n = b.getResponseHeader("etag")) && (T.etag[u] = n)),
                204 === t || "HEAD" === p.type
                  ? (a = "nocontent")
                  : 304 === t
                  ? (a = "notmodified")
                  : ((a = s.state), (o = s.data), (i = !(r = s.error))))
              : ((r = a), (!t && a) || ((a = "error"), t < 0 && (t = 0))),
            (b.status = t),
            (b.statusText = (e || a) + ""),
            i ? y.resolveWith(m, [o, a, b]) : y.rejectWith(m, [b, a, r]),
            b.statusCode(_),
            (_ = void 0),
            h && g.trigger(i ? "ajaxSuccess" : "ajaxError", [b, p, i ? o : r]),
            v.fireWith(m, [b, a]),
            h &&
              (g.trigger("ajaxComplete", [b, p]),
              --T.active || T.event.trigger("ajaxStop")));
        }
        return b;
      },
      getJSON: function (t, e, n) {
        return T.get(t, e, n, "json");
      },
      getScript: function (t, e) {
        return T.get(t, void 0, e, "script");
      },
    }),
    T.each(["get", "post"], function (t, o) {
      T[o] = function (t, e, n, i) {
        return (
          _(e) && ((i = i || n), (n = e), (e = void 0)),
          T.ajax(
            T.extend(
              { url: t, type: o, dataType: i, data: e, success: n },
              T.isPlainObject(t) && t
            )
          )
        );
      };
    }),
    T.ajaxPrefilter(function (t) {
      for (var e in t.headers)
        "content-type" === e.toLowerCase() &&
          (t.contentType = t.headers[e] || "");
    }),
    (T._evalUrl = function (t, e, n) {
      return T.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (t) {
          T.globalEval(t, e, n);
        },
      });
    }),
    T.fn.extend({
      wrapAll: function (t) {
        return (
          this[0] &&
            (_(t) && (t = t.call(this[0])),
            (t = T(t, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var t = this; t.firstElementChild; )
                  t = t.firstElementChild;
                return t;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return _(n)
          ? this.each(function (t) {
              T(this).wrapInner(n.call(this, t));
            })
          : this.each(function () {
              var t = T(this),
                e = t.contents();
              e.length ? e.wrapAll(n) : t.append(n);
            });
      },
      wrap: function (e) {
        var n = _(e);
        return this.each(function (t) {
          T(this).wrapAll(n ? e.call(this, t) : e);
        });
      },
      unwrap: function (t) {
        return (
          this.parent(t)
            .not("body")
            .each(function () {
              T(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (T.expr.pseudos.hidden = function (t) {
      return !T.expr.pseudos.visible(t);
    }),
    (T.expr.pseudos.visible = function (t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
    }),
    (T.ajaxSettings.xhr = function () {
      try {
        return new E.XMLHttpRequest();
      } catch (t) {}
    });
  var Ve = { 0: 200, 1223: 204 },
    Xe = T.ajaxSettings.xhr();
  (v.cors = !!Xe && "withCredentials" in Xe),
    (v.ajax = Xe = !!Xe),
    T.ajaxTransport(function (o) {
      var r, s;
      if (v.cors || (Xe && !o.crossDomain))
        return {
          send: function (t, e) {
            var n,
              i = o.xhr();
            if (
              (i.open(o.type, o.url, o.async, o.username, o.password),
              o.xhrFields)
            )
              for (n in o.xhrFields) i[n] = o.xhrFields[n];
            for (n in (o.mimeType &&
              i.overrideMimeType &&
              i.overrideMimeType(o.mimeType),
            o.crossDomain ||
              t["X-Requested-With"] ||
              (t["X-Requested-With"] = "XMLHttpRequest"),
            t))
              i.setRequestHeader(n, t[n]);
            (r = function (t) {
              return function () {
                r &&
                  ((r =
                    s =
                    i.onload =
                    i.onerror =
                    i.onabort =
                    i.ontimeout =
                    i.onreadystatechange =
                      null),
                  "abort" === t
                    ? i.abort()
                    : "error" === t
                    ? "number" != typeof i.status
                      ? e(0, "error")
                      : e(i.status, i.statusText)
                    : e(
                        Ve[i.status] || i.status,
                        i.statusText,
                        "text" !== (i.responseType || "text") ||
                          "string" != typeof i.responseText
                          ? { binary: i.response }
                          : { text: i.responseText },
                        i.getAllResponseHeaders()
                      ));
              };
            }),
              (i.onload = r()),
              (s = i.onerror = i.ontimeout = r("error")),
              void 0 !== i.onabort
                ? (i.onabort = s)
                : (i.onreadystatechange = function () {
                    4 === i.readyState &&
                      E.setTimeout(function () {
                        r && s();
                      });
                  }),
              (r = r("abort"));
            try {
              i.send((o.hasContent && o.data) || null);
            } catch (t) {
              if (r) throw t;
            }
          },
          abort: function () {
            r && r();
          },
        };
    }),
    T.ajaxPrefilter(function (t) {
      t.crossDomain && (t.contents.script = !1);
    }),
    T.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (t) {
          return T.globalEval(t), t;
        },
      },
    }),
    T.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }),
    T.ajaxTransport("script", function (n) {
      var i, o;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (t, e) {
            (i = T("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (o = function (t) {
                  i.remove(),
                    (o = null),
                    t && e("error" === t.type ? 404 : 200, t.type);
                })
              )),
              x.head.appendChild(i[0]);
          },
          abort: function () {
            o && o();
          },
        };
    });
  var Ge = [],
    Ke = /(=)\?(?=&|$)|\?\?/;
  T.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var t = Ge.pop() || T.expando + "_" + ke.guid++;
      return (this[t] = !0), t;
    },
  }),
    T.ajaxPrefilter("json jsonp", function (t, e, n) {
      var i,
        o,
        r,
        s =
          !1 !== t.jsonp &&
          (Ke.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Ke.test(t.data) &&
              "data");
      if (s || "jsonp" === t.dataTypes[0])
        return (
          (i = t.jsonpCallback =
            _(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(Ke, "$1" + i))
            : !1 !== t.jsonp &&
              (t.url += (Ae.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return r || T.error(i + " was not called"), r[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = E[i]),
          (E[i] = function () {
            r = arguments;
          }),
          n.always(function () {
            void 0 === o ? T(E).removeProp(i) : (E[i] = o),
              t[i] && ((t.jsonpCallback = e.jsonpCallback), Ge.push(i)),
              r && _(o) && o(r[0]),
              (r = o = void 0);
          }),
          "script"
        );
    }),
    (v.createHTMLDocument =
      (((f = x.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === f.childNodes.length)),
    (T.parseHTML = function (t, e, n) {
      return "string" != typeof t
        ? []
        : ("boolean" == typeof e && ((n = e), (e = !1)),
          e ||
            (v.createHTMLDocument
              ? (((i = (e =
                  x.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = x.location.href),
                e.head.appendChild(i))
              : (e = x)),
          (i = !n && []),
          (n = D.exec(t))
            ? [e.createElement(n[1])]
            : ((n = yt([t], e, i)),
              i && i.length && T(i).remove(),
              T.merge([], n.childNodes)));
      var i;
    }),
    (T.fn.load = function (t, e, n) {
      var i,
        o,
        r,
        s = this,
        a = t.indexOf(" ");
      return (
        -1 < a && ((i = Ee(t.slice(a))), (t = t.slice(0, a))),
        _(e)
          ? ((n = e), (e = void 0))
          : e && "object" == typeof e && (o = "POST"),
        0 < s.length &&
          T.ajax({ url: t, type: o || "GET", dataType: "html", data: e })
            .done(function (t) {
              (r = arguments),
                s.html(i ? T("<div>").append(T.parseHTML(t)).find(i) : t);
            })
            .always(
              n &&
                function (t, e) {
                  s.each(function () {
                    n.apply(this, r || [t.responseText, e, t]);
                  });
                }
            ),
        this
      );
    }),
    (T.expr.pseudos.animated = function (e) {
      return T.grep(T.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (T.offset = {
      setOffset: function (t, e, n) {
        var i,
          o,
          r,
          s,
          a = T.css(t, "position"),
          l = T(t),
          u = {};
        "static" === a && (t.style.position = "relative"),
          (r = l.offset()),
          (i = T.css(t, "top")),
          (s = T.css(t, "left")),
          (s =
            ("absolute" === a || "fixed" === a) && -1 < (i + s).indexOf("auto")
              ? ((o = (a = l.position()).top), a.left)
              : ((o = parseFloat(i) || 0), parseFloat(s) || 0)),
          _(e) && (e = e.call(t, n, T.extend({}, r))),
          null != e.top && (u.top = e.top - r.top + o),
          null != e.left && (u.left = e.left - r.left + s),
          "using" in e
            ? e.using.call(t, u)
            : ("number" == typeof u.top && (u.top += "px"),
              "number" == typeof u.left && (u.left += "px"),
              l.css(u));
      },
    }),
    T.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                T.offset.setOffset(this, e, t);
              });
        var t,
          n = this[0];
        return n
          ? n.getClientRects().length
            ? ((t = n.getBoundingClientRect()),
              (n = n.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var t,
            e,
            n,
            i = this[0],
            o = { top: 0, left: 0 };
          if ("fixed" === T.css(i, "position")) e = i.getBoundingClientRect();
          else {
            for (
              e = this.offset(),
                n = i.ownerDocument,
                t = i.offsetParent || n.documentElement;
              t &&
              (t === n.body || t === n.documentElement) &&
              "static" === T.css(t, "position");

            )
              t = t.parentNode;
            t &&
              t !== i &&
              1 === t.nodeType &&
              (((o = T(t).offset()).top += T.css(t, "borderTopWidth", !0)),
              (o.left += T.css(t, "borderLeftWidth", !0)));
          }
          return {
            top: e.top - o.top - T.css(i, "marginTop", !0),
            left: e.left - o.left - T.css(i, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var t = this.offsetParent;
            t && "static" === T.css(t, "position");

          )
            t = t.offsetParent;
          return t || it;
        });
      },
    }),
    T.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, o) {
        var r = "pageYOffset" === o;
        T.fn[e] = function (t) {
          return F(
            this,
            function (t, e, n) {
              var i;
              return (
                m(t) ? (i = t) : 9 === t.nodeType && (i = t.defaultView),
                void 0 === n
                  ? i
                    ? i[o]
                    : t[e]
                  : void (i
                      ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset)
                      : (t[e] = n))
              );
            },
            e,
            t,
            arguments.length
          );
        };
      }
    ),
    T.each(["top", "left"], function (t, n) {
      T.cssHooks[n] = Gt(v.pixelPosition, function (t, e) {
        if (e)
          return (e = Xt(t, n)), Qt.test(e) ? T(t).position()[n] + "px" : e;
      });
    }),
    T.each({ Height: "height", Width: "width" }, function (s, a) {
      T.each(
        { padding: "inner" + s, content: a, "": "outer" + s },
        function (i, r) {
          T.fn[r] = function (t, e) {
            var n = arguments.length && (i || "boolean" != typeof t),
              o = i || (!0 === t || !0 === e ? "margin" : "border");
            return F(
              this,
              function (t, e, n) {
                var i;
                return m(t)
                  ? 0 === r.indexOf("outer")
                    ? t["inner" + s]
                    : t.document.documentElement["client" + s]
                  : 9 === t.nodeType
                  ? ((i = t.documentElement),
                    Math.max(
                      t.body["scroll" + s],
                      i["scroll" + s],
                      t.body["offset" + s],
                      i["offset" + s],
                      i["client" + s]
                    ))
                  : void 0 === n
                  ? T.css(t, e, o)
                  : T.style(t, e, n, o);
              },
              a,
              n ? t : void 0,
              n
            );
          };
        }
      );
    }),
    T.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (t, e) {
        T.fn[e] = function (t) {
          return this.on(e, t);
        };
      }
    ),
    T.fn.extend({
      bind: function (t, e, n) {
        return this.on(t, null, e, n);
      },
      unbind: function (t, e) {
        return this.off(t, null, e);
      },
      delegate: function (t, e, n, i) {
        return this.on(e, t, n, i);
      },
      undelegate: function (t, e, n) {
        return 1 === arguments.length
          ? this.off(t, "**")
          : this.off(e, t || "**", n);
      },
      hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t);
      },
    }),
    T.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (t, n) {
        T.fn[n] = function (t, e) {
          return 0 < arguments.length
            ? this.on(n, null, t, e)
            : this.trigger(n);
        };
      }
    );
  var Je = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (T.proxy = function (t, e) {
    var n, i;
    if (("string" == typeof e && ((i = t[e]), (e = t), (t = i)), _(t)))
      return (
        (n = a.call(arguments, 2)),
        ((i = function () {
          return t.apply(e || this, n.concat(a.call(arguments)));
        }).guid = t.guid =
          t.guid || T.guid++),
        i
      );
  }),
    (T.holdReady = function (t) {
      t ? T.readyWait++ : T.ready(!0);
    }),
    (T.isArray = Array.isArray),
    (T.parseJSON = JSON.parse),
    (T.nodeName = I),
    (T.isFunction = _),
    (T.isWindow = m),
    (T.camelCase = Y),
    (T.type = p),
    (T.now = Date.now),
    (T.isNumeric = function (t) {
      var e = T.type(t);
      return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
    }),
    (T.trim = function (t) {
      return null == t ? "" : (t + "").replace(Je, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return T;
      });
  var Ze = E.jQuery,
    tn = E.$;
  return (
    (T.noConflict = function (t) {
      return E.$ === T && (E.$ = tn), t && E.jQuery === T && (E.jQuery = Ze), T;
    }),
    void 0 === t && (E.jQuery = E.$ = T),
    T
  );
}),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? e(exports, require("jquery"))
      : "function" == typeof define && define.amd
      ? define(["exports", "jquery"], e)
      : e(
          ((t =
            "undefined" != typeof globalThis
              ? globalThis
              : t || self).bootstrap = {}),
          t.jQuery
        );
  })(this, function (t, e) {
    "use strict";
    function n(t) {
      return t && "object" == typeof t && "default" in t ? t : { default: t };
    }
    var c = n(e);
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    function s(t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t;
    }
    function a() {
      return (a =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n,
              i = arguments[e];
            for (n in i)
              Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
          }
          return t;
        }).apply(this, arguments);
    }
    var o = "transitionend";
    function r(t) {
      var e = this,
        n = !1;
      return (
        c.default(this).one(f.TRANSITION_END, function () {
          n = !0;
        }),
        setTimeout(function () {
          n || f.triggerTransitionEnd(e);
        }, t),
        this
      );
    }
    var f = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function (t) {
        for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
        return t;
      },
      getSelectorFromElement: function (t) {
        var e = t.getAttribute("data-target");
        (e && "#" !== e) ||
          (e = (t = t.getAttribute("href")) && "#" !== t ? t.trim() : "");
        try {
          return document.querySelector(e) ? e : null;
        } catch (t) {
          return null;
        }
      },
      getTransitionDurationFromElement: function (t) {
        if (!t) return 0;
        var e = c.default(t).css("transition-duration"),
          n = c.default(t).css("transition-delay"),
          i = parseFloat(e),
          t = parseFloat(n);
        return i || t
          ? ((e = e.split(",")[0]),
            (n = n.split(",")[0]),
            1e3 * (parseFloat(e) + parseFloat(n)))
          : 0;
      },
      reflow: function (t) {
        return t.offsetHeight;
      },
      triggerTransitionEnd: function (t) {
        c.default(t).trigger(o);
      },
      supportsTransitionEnd: function () {
        return Boolean(o);
      },
      isElement: function (t) {
        return (t[0] || t).nodeType;
      },
      typeCheckConfig: function (t, e, n) {
        for (var i in n)
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            var o = n[i],
              r = e[i],
              s =
                r && f.isElement(r)
                  ? "element"
                  : null == (s = r)
                  ? "" + s
                  : {}.toString
                      .call(s)
                      .match(/\s([a-z]+)/i)[1]
                      .toLowerCase();
            if (!new RegExp(o).test(s))
              throw new Error(
                t.toUpperCase() +
                  ': Option "' +
                  i +
                  '" provided type "' +
                  s +
                  '" but expected type "' +
                  o +
                  '".'
              );
          }
        var s;
      },
      findShadowRoot: function (t) {
        if (!document.documentElement.attachShadow) return null;
        if ("function" != typeof t.getRootNode)
          return t instanceof ShadowRoot
            ? t
            : t.parentNode
            ? f.findShadowRoot(t.parentNode)
            : null;
        t = t.getRootNode();
        return t instanceof ShadowRoot ? t : null;
      },
      jQueryDetection: function () {
        if (void 0 === c.default)
          throw new TypeError(
            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
          );
        var t = c.default.fn.jquery.split(" ")[0].split(".");
        if (
          (t[0] < 2 && t[1] < 9) ||
          (1 === t[0] && 9 === t[1] && t[2] < 1) ||
          4 <= t[0]
        )
          throw new Error(
            "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
          );
      },
    };
    f.jQueryDetection(),
      (c.default.fn.emulateTransitionEnd = r),
      (c.default.event.special[f.TRANSITION_END] = {
        bindType: o,
        delegateType: o,
        handle: function (t) {
          if (c.default(t.target).is(this))
            return t.handleObj.handler.apply(this, arguments);
        },
      });
    var l = "alert",
      u = "bs.alert",
      d = "." + u,
      h = c.default.fn[l],
      p = (function () {
        function i(t) {
          this._element = t;
        }
        var t = i.prototype;
        return (
          (t.close = function (t) {
            var e = this._element;
            t && (e = this._getRootElement(t)),
              this._triggerCloseEvent(e).isDefaultPrevented() ||
                this._removeElement(e);
          }),
          (t.dispose = function () {
            c.default.removeData(this._element, u), (this._element = null);
          }),
          (t._getRootElement = function (t) {
            var e = f.getSelectorFromElement(t),
              n = !1;
            return (
              e && (n = document.querySelector(e)),
              (n = n || c.default(t).closest(".alert")[0])
            );
          }),
          (t._triggerCloseEvent = function (t) {
            var e = c.default.Event("close.bs.alert");
            return c.default(t).trigger(e), e;
          }),
          (t._removeElement = function (e) {
            var t,
              n = this;
            c.default(e).removeClass("show"),
              c.default(e).hasClass("fade")
                ? ((t = f.getTransitionDurationFromElement(e)),
                  c
                    .default(e)
                    .one(f.TRANSITION_END, function (t) {
                      return n._destroyElement(e, t);
                    })
                    .emulateTransitionEnd(t))
                : this._destroyElement(e);
          }),
          (t._destroyElement = function (t) {
            c.default(t).detach().trigger("closed.bs.alert").remove();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = c.default(this),
                e = t.data(u);
              e || ((e = new i(this)), t.data(u, e)),
                "close" === n && e[n](this);
            });
          }),
          (i._handleDismiss = function (e) {
            return function (t) {
              t && t.preventDefault(), e.close(this);
            };
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.5.3";
              },
            },
          ]),
          i
        );
      })();
    c
      .default(document)
      .on(
        "click.bs.alert.data-api",
        '[data-dismiss="alert"]',
        p._handleDismiss(new p())
      ),
      (c.default.fn[l] = p._jQueryInterface),
      (c.default.fn[l].Constructor = p),
      (c.default.fn[l].noConflict = function () {
        return (c.default.fn[l] = h), p._jQueryInterface;
      });
    var m = "button",
      g = "bs.button",
      y = "." + g,
      e = ".data-api",
      v = c.default.fn[m],
      _ = "active",
      d = '[data-toggle^="button"]',
      b = 'input:not([type="hidden"])',
      w = (function () {
        function o(t) {
          (this._element = t), (this.shouldAvoidTriggerChange = !1);
        }
        var t = o.prototype;
        return (
          (t.toggle = function () {
            var t,
              e = !0,
              n = !0,
              i = c
                .default(this._element)
                .closest('[data-toggle="buttons"]')[0];
            !i ||
              ((t = this._element.querySelector(b)) &&
                ("radio" === t.type &&
                  (t.checked && this._element.classList.contains(_)
                    ? (e = !1)
                    : (i = i.querySelector(".active")) &&
                      c.default(i).removeClass(_)),
                e &&
                  (("checkbox" !== t.type && "radio" !== t.type) ||
                    (t.checked = !this._element.classList.contains(_)),
                  this.shouldAvoidTriggerChange ||
                    c.default(t).trigger("change")),
                t.focus(),
                (n = !1))),
              this._element.hasAttribute("disabled") ||
                this._element.classList.contains("disabled") ||
                (n &&
                  this._element.setAttribute(
                    "aria-pressed",
                    !this._element.classList.contains(_)
                  ),
                e && c.default(this._element).toggleClass(_));
          }),
          (t.dispose = function () {
            c.default.removeData(this._element, g), (this._element = null);
          }),
          (o._jQueryInterface = function (n, i) {
            return this.each(function () {
              var t = c.default(this),
                e = t.data(g);
              e || ((e = new o(this)), t.data(g, e)),
                (e.shouldAvoidTriggerChange = i),
                "toggle" === n && e[n]();
            });
          }),
          s(o, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.5.3";
              },
            },
          ]),
          o
        );
      })();
    c
      .default(document)
      .on("click.bs.button.data-api", d, function (t) {
        var e,
          n = t.target,
          i = n;
        c.default(n).hasClass("btn") || (n = c.default(n).closest(".btn")[0]),
          !n ||
          n.hasAttribute("disabled") ||
          n.classList.contains("disabled") ||
          ((e = n.querySelector(b)) &&
            (e.hasAttribute("disabled") || e.classList.contains("disabled")))
            ? t.preventDefault()
            : ("INPUT" !== i.tagName && "LABEL" === n.tagName) ||
              w._jQueryInterface.call(
                c.default(n),
                "toggle",
                "INPUT" === i.tagName
              );
      })
      .on("focus.bs.button.data-api blur.bs.button.data-api", d, function (t) {
        var e = c.default(t.target).closest(".btn")[0];
        c.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
      }),
      c.default(window).on("load.bs.button.data-api", function () {
        for (
          var t = [].slice.call(
              document.querySelectorAll('[data-toggle="buttons"] .btn')
            ),
            e = 0,
            n = t.length;
          e < n;
          e++
        ) {
          var i = t[e],
            o = i.querySelector(b);
          o.checked || o.hasAttribute("checked")
            ? i.classList.add(_)
            : i.classList.remove(_);
        }
        for (
          var r = 0,
            s = (t = [].slice.call(
              document.querySelectorAll('[data-toggle="button"]')
            )).length;
          r < s;
          r++
        ) {
          var a = t[r];
          "true" === a.getAttribute("aria-pressed")
            ? a.classList.add(_)
            : a.classList.remove(_);
        }
      }),
      (c.default.fn[m] = w._jQueryInterface),
      (c.default.fn[m].Constructor = w),
      (c.default.fn[m].noConflict = function () {
        return (c.default.fn[m] = v), w._jQueryInterface;
      });
    var E = "carousel",
      x = "bs.carousel",
      T = "." + x,
      y = ".data-api",
      C = c.default.fn[E],
      S = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0,
      },
      I = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean",
      },
      D = "next",
      k = "prev",
      A = "slid" + T,
      L = "active",
      N = ".active.carousel-item",
      O = { TOUCH: "touch", PEN: "pen" },
      j = (function () {
        function o(t, e) {
          (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this.touchStartX = 0),
            (this.touchDeltaX = 0),
            (this._config = this._getConfig(e)),
            (this._element = t),
            (this._indicatorsElement = this._element.querySelector(
              ".carousel-indicators"
            )),
            (this._touchSupported =
              "ontouchstart" in document.documentElement ||
              0 < navigator.maxTouchPoints),
            (this._pointerEvent = Boolean(
              window.PointerEvent || window.MSPointerEvent
            )),
            this._addEventListeners();
        }
        var t = o.prototype;
        return (
          (t.next = function () {
            this._isSliding || this._slide(D);
          }),
          (t.nextWhenVisible = function () {
            var t = c.default(this._element);
            !document.hidden &&
              t.is(":visible") &&
              "hidden" !== t.css("visibility") &&
              this.next();
          }),
          (t.prev = function () {
            this._isSliding || this._slide(k);
          }),
          (t.pause = function (t) {
            t || (this._isPaused = !0),
              this._element.querySelector(
                ".carousel-item-next, .carousel-item-prev"
              ) && (f.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (t.cycle = function (t) {
            t || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                ));
          }),
          (t.to = function (t) {
            var e = this;
            this._activeElement = this._element.querySelector(N);
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
              if (this._isSliding)
                c.default(this._element).one(A, function () {
                  return e.to(t);
                });
              else {
                if (n === t) return this.pause(), void this.cycle();
                n = n < t ? D : k;
                this._slide(n, this._items[t]);
              }
          }),
          (t.dispose = function () {
            c.default(this._element).off(T),
              c.default.removeData(this._element, x),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (t._getConfig = function (t) {
            return (t = a({}, S, t)), f.typeCheckConfig(E, t, I), t;
          }),
          (t._handleSwipe = function () {
            var t = Math.abs(this.touchDeltaX);
            t <= 40 ||
              ((t = t / this.touchDeltaX),
              (this.touchDeltaX = 0) < t && this.prev(),
              t < 0 && this.next());
          }),
          (t._addEventListeners = function () {
            var e = this;
            this._config.keyboard &&
              c.default(this._element).on("keydown.bs.carousel", function (t) {
                return e._keydown(t);
              }),
              "hover" === this._config.pause &&
                c
                  .default(this._element)
                  .on("mouseenter.bs.carousel", function (t) {
                    return e.pause(t);
                  })
                  .on("mouseleave.bs.carousel", function (t) {
                    return e.cycle(t);
                  }),
              this._config.touch && this._addTouchEventListeners();
          }),
          (t._addTouchEventListeners = function () {
            var t,
              e,
              n = this;
            this._touchSupported &&
              ((t = function (t) {
                n._pointerEvent && O[t.originalEvent.pointerType.toUpperCase()]
                  ? (n.touchStartX = t.originalEvent.clientX)
                  : n._pointerEvent ||
                    (n.touchStartX = t.originalEvent.touches[0].clientX);
              }),
              (e = function (t) {
                n._pointerEvent &&
                  O[t.originalEvent.pointerType.toUpperCase()] &&
                  (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX),
                  n._handleSwipe(),
                  "hover" === n._config.pause &&
                    (n.pause(),
                    n.touchTimeout && clearTimeout(n.touchTimeout),
                    (n.touchTimeout = setTimeout(function (t) {
                      return n.cycle(t);
                    }, 500 + n._config.interval)));
              }),
              c
                .default(this._element.querySelectorAll(".carousel-item img"))
                .on("dragstart.bs.carousel", function (t) {
                  return t.preventDefault();
                }),
              this._pointerEvent
                ? (c.default(this._element).on("pointerdown.bs.carousel", t),
                  c.default(this._element).on("pointerup.bs.carousel", e),
                  this._element.classList.add("pointer-event"))
                : (c.default(this._element).on("touchstart.bs.carousel", t),
                  c
                    .default(this._element)
                    .on("touchmove.bs.carousel", function (t) {
                      (t = t).originalEvent.touches &&
                      1 < t.originalEvent.touches.length
                        ? (n.touchDeltaX = 0)
                        : (n.touchDeltaX =
                            t.originalEvent.touches[0].clientX - n.touchStartX);
                    }),
                  c.default(this._element).on("touchend.bs.carousel", e)));
          }),
          (t._keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName))
              switch (t.which) {
                case 37:
                  t.preventDefault(), this.prev();
                  break;
                case 39:
                  t.preventDefault(), this.next();
              }
          }),
          (t._getItemIndex = function (t) {
            return (
              (this._items =
                t && t.parentNode
                  ? [].slice.call(
                      t.parentNode.querySelectorAll(".carousel-item")
                    )
                  : []),
              this._items.indexOf(t)
            );
          }),
          (t._getItemByDirection = function (t, e) {
            var n = t === D,
              i = t === k,
              o = this._getItemIndex(e),
              r = this._items.length - 1;
            if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
              return e;
            t = (o + (t === k ? -1 : 1)) % this._items.length;
            return -1 == t
              ? this._items[this._items.length - 1]
              : this._items[t];
          }),
          (t._triggerSlideEvent = function (t, e) {
            var n = this._getItemIndex(t),
              i = this._getItemIndex(this._element.querySelector(N)),
              n = c.default.Event("slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n,
              });
            return c.default(this._element).trigger(n), n;
          }),
          (t._setActiveIndicatorElement = function (t) {
            var e;
            this._indicatorsElement &&
              ((e = [].slice.call(
                this._indicatorsElement.querySelectorAll(".active")
              )),
              c.default(e).removeClass(L),
              (t = this._indicatorsElement.children[this._getItemIndex(t)]) &&
                c.default(t).addClass(L));
          }),
          (t._slide = function (t, e) {
            var n,
              i,
              o,
              r = this,
              s = this._element.querySelector(N),
              a = this._getItemIndex(s),
              l = e || (s && this._getItemByDirection(t, s)),
              u = this._getItemIndex(l),
              e = Boolean(this._interval),
              t =
                t === D
                  ? ((n = "carousel-item-left"),
                    (i = "carousel-item-next"),
                    "left")
                  : ((n = "carousel-item-right"),
                    (i = "carousel-item-prev"),
                    "right");
            l && c.default(l).hasClass(L)
              ? (this._isSliding = !1)
              : this._triggerSlideEvent(l, t).isDefaultPrevented() ||
                (s &&
                  l &&
                  ((this._isSliding = !0),
                  e && this.pause(),
                  this._setActiveIndicatorElement(l),
                  (o = c.default.Event(A, {
                    relatedTarget: l,
                    direction: t,
                    from: a,
                    to: u,
                  })),
                  c.default(this._element).hasClass("slide")
                    ? (c.default(l).addClass(i),
                      f.reflow(l),
                      c.default(s).addClass(n),
                      c.default(l).addClass(n),
                      (u = parseInt(l.getAttribute("data-interval"), 10))
                        ? ((this._config.defaultInterval =
                            this._config.defaultInterval ||
                            this._config.interval),
                          (this._config.interval = u))
                        : (this._config.interval =
                            this._config.defaultInterval ||
                            this._config.interval),
                      (u = f.getTransitionDurationFromElement(s)),
                      c
                        .default(s)
                        .one(f.TRANSITION_END, function () {
                          c
                            .default(l)
                            .removeClass(n + " " + i)
                            .addClass(L),
                            c.default(s).removeClass(L + " " + i + " " + n),
                            (r._isSliding = !1),
                            setTimeout(function () {
                              return c.default(r._element).trigger(o);
                            }, 0);
                        })
                        .emulateTransitionEnd(u))
                    : (c.default(s).removeClass(L),
                      c.default(l).addClass(L),
                      (this._isSliding = !1),
                      c.default(this._element).trigger(o)),
                  e && this.cycle()));
          }),
          (o._jQueryInterface = function (i) {
            return this.each(function () {
              var t = c.default(this).data(x),
                e = a({}, S, c.default(this).data());
              "object" == typeof i && (e = a({}, e, i));
              var n = "string" == typeof i ? i : e.slide;
              if (
                (t || ((t = new o(this, e)), c.default(this).data(x, t)),
                "number" == typeof i)
              )
                t.to(i);
              else if ("string" == typeof n) {
                if (void 0 === t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              } else e.interval && e.ride && (t.pause(), t.cycle());
            });
          }),
          (o._dataApiClickHandler = function (t) {
            var e,
              n,
              i = f.getSelectorFromElement(this);
            !i ||
              ((e = c.default(i)[0]) &&
                c.default(e).hasClass("carousel") &&
                ((n = a({}, c.default(e).data(), c.default(this).data())),
                (i = this.getAttribute("data-slide-to")) && (n.interval = !1),
                o._jQueryInterface.call(c.default(e), n),
                i && c.default(e).data(x).to(i),
                t.preventDefault()));
          }),
          s(o, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.5.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return S;
              },
            },
          ]),
          o
        );
      })();
    c
      .default(document)
      .on(
        "click.bs.carousel.data-api",
        "[data-slide], [data-slide-to]",
        j._dataApiClickHandler
      ),
      c.default(window).on("load.bs.carousel.data-api", function () {
        for (
          var t = [].slice.call(
              document.querySelectorAll('[data-ride="carousel"]')
            ),
            e = 0,
            n = t.length;
          e < n;
          e++
        ) {
          var i = c.default(t[e]);
          j._jQueryInterface.call(i, i.data());
        }
      }),
      (c.default.fn[E] = j._jQueryInterface),
      (c.default.fn[E].Constructor = j),
      (c.default.fn[E].noConflict = function () {
        return (c.default.fn[E] = C), j._jQueryInterface;
      });
    var z = "collapse",
      q = "bs.collapse",
      e = "." + q,
      R = c.default.fn[z],
      P = { toggle: !0, parent: "" },
      W = { toggle: "boolean", parent: "(string|element)" },
      H = "show",
      M = "collapse",
      F = "collapsing",
      B = "collapsed",
      Q = '[data-toggle="collapse"]',
      U = (function () {
        function r(e, t) {
          (this._isTransitioning = !1),
            (this._element = e),
            (this._config = this._getConfig(t)),
            (this._triggerArray = [].slice.call(
              document.querySelectorAll(
                '[data-toggle="collapse"][href="#' +
                  e.id +
                  '"],[data-toggle="collapse"][data-target="#' +
                  e.id +
                  '"]'
              )
            ));
          for (
            var n = [].slice.call(document.querySelectorAll(Q)),
              i = 0,
              o = n.length;
            i < o;
            i++
          ) {
            var r = n[i],
              s = f.getSelectorFromElement(r),
              a = [].slice
                .call(document.querySelectorAll(s))
                .filter(function (t) {
                  return t === e;
                });
            null !== s &&
              0 < a.length &&
              ((this._selector = s), this._triggerArray.push(r));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent ||
              this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        var t = r.prototype;
        return (
          (t.toggle = function () {
            c.default(this._element).hasClass(H) ? this.hide() : this.show();
          }),
          (t.show = function () {
            var t,
              e,
              n,
              i,
              o = this;
            this._isTransitioning ||
              c.default(this._element).hasClass(H) ||
              (this._parent &&
                0 ===
                  (i = [].slice
                    .call(this._parent.querySelectorAll(".show, .collapsing"))
                    .filter(function (t) {
                      return "string" == typeof o._config.parent
                        ? t.getAttribute("data-parent") === o._config.parent
                        : t.classList.contains(M);
                    })).length &&
                (i = null),
              (i &&
                (n = c.default(i).not(this._selector).data(q)) &&
                n._isTransitioning) ||
                ((t = c.default.Event("show.bs.collapse")),
                c.default(this._element).trigger(t),
                t.isDefaultPrevented() ||
                  (i &&
                    (r._jQueryInterface.call(
                      c.default(i).not(this._selector),
                      "hide"
                    ),
                    n || c.default(i).data(q, null)),
                  (e = this._getDimension()),
                  c.default(this._element).removeClass(M).addClass(F),
                  (this._element.style[e] = 0),
                  this._triggerArray.length &&
                    c
                      .default(this._triggerArray)
                      .removeClass(B)
                      .attr("aria-expanded", !0),
                  this.setTransitioning(!0),
                  (n = "scroll" + (e[0].toUpperCase() + e.slice(1))),
                  (i = f.getTransitionDurationFromElement(this._element)),
                  c
                    .default(this._element)
                    .one(f.TRANSITION_END, function () {
                      c
                        .default(o._element)
                        .removeClass(F)
                        .addClass(M + " " + H),
                        (o._element.style[e] = ""),
                        o.setTransitioning(!1),
                        c.default(o._element).trigger("shown.bs.collapse");
                    })
                    .emulateTransitionEnd(i),
                  (this._element.style[e] = this._element[n] + "px"))));
          }),
          (t.hide = function () {
            var t = this;
            if (
              !this._isTransitioning &&
              c.default(this._element).hasClass(H)
            ) {
              var e = c.default.Event("hide.bs.collapse");
              if (
                (c.default(this._element).trigger(e), !e.isDefaultPrevented())
              ) {
                e = this._getDimension();
                (this._element.style[e] =
                  this._element.getBoundingClientRect()[e] + "px"),
                  f.reflow(this._element),
                  c
                    .default(this._element)
                    .addClass(F)
                    .removeClass(M + " " + H);
                var n = this._triggerArray.length;
                if (0 < n)
                  for (var i = 0; i < n; i++) {
                    var o = this._triggerArray[i],
                      r = f.getSelectorFromElement(o);
                    null !== r &&
                      (c
                        .default([].slice.call(document.querySelectorAll(r)))
                        .hasClass(H) ||
                        c.default(o).addClass(B).attr("aria-expanded", !1));
                  }
                this.setTransitioning(!0);
                this._element.style[e] = "";
                e = f.getTransitionDurationFromElement(this._element);
                c.default(this._element)
                  .one(f.TRANSITION_END, function () {
                    t.setTransitioning(!1),
                      c
                        .default(t._element)
                        .removeClass(F)
                        .addClass(M)
                        .trigger("hidden.bs.collapse");
                  })
                  .emulateTransitionEnd(e);
              }
            }
          }),
          (t.setTransitioning = function (t) {
            this._isTransitioning = t;
          }),
          (t.dispose = function () {
            c.default.removeData(this._element, q),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (t._getConfig = function (t) {
            return (
              ((t = a({}, P, t)).toggle = Boolean(t.toggle)),
              f.typeCheckConfig(z, t, W),
              t
            );
          }),
          (t._getDimension = function () {
            return c.default(this._element).hasClass("width")
              ? "width"
              : "height";
          }),
          (t._getParent = function () {
            var t,
              n = this;
            f.isElement(this._config.parent)
              ? ((t = this._config.parent),
                void 0 !== this._config.parent.jquery &&
                  (t = this._config.parent[0]))
              : (t = document.querySelector(this._config.parent));
            var e =
                '[data-toggle="collapse"][data-parent="' +
                this._config.parent +
                '"]',
              e = [].slice.call(t.querySelectorAll(e));
            return (
              c.default(e).each(function (t, e) {
                n._addAriaAndCollapsedClass(r._getTargetFromElement(e), [e]);
              }),
              t
            );
          }),
          (t._addAriaAndCollapsedClass = function (t, e) {
            t = c.default(t).hasClass(H);
            e.length &&
              c.default(e).toggleClass(B, !t).attr("aria-expanded", t);
          }),
          (r._getTargetFromElement = function (t) {
            t = f.getSelectorFromElement(t);
            return t ? document.querySelector(t) : null;
          }),
          (r._jQueryInterface = function (i) {
            return this.each(function () {
              var t = c.default(this),
                e = t.data(q),
                n = a({}, P, t.data(), "object" == typeof i && i ? i : {});
              if (
                (!e &&
                  n.toggle &&
                  "string" == typeof i &&
                  /show|hide/.test(i) &&
                  (n.toggle = !1),
                e || ((e = new r(this, n)), t.data(q, e)),
                "string" == typeof i)
              ) {
                if (void 0 === e[i])
                  throw new TypeError('No method named "' + i + '"');
                e[i]();
              }
            });
          }),
          s(r, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.5.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return P;
              },
            },
          ]),
          r
        );
      })();
    c.default(document).on("click.bs.collapse.data-api", Q, function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();
      var n = c.default(this),
        t = f.getSelectorFromElement(this),
        t = [].slice.call(document.querySelectorAll(t));
      c.default(t).each(function () {
        var t = c.default(this),
          e = t.data(q) ? "toggle" : n.data();
        U._jQueryInterface.call(t, e);
      });
    }),
      (c.default.fn[z] = U._jQueryInterface),
      (c.default.fn[z].Constructor = U),
      (c.default.fn[z].noConflict = function () {
        return (c.default.fn[z] = R), U._jQueryInterface;
      });
    var Y =
        "undefined" != typeof window &&
        "undefined" != typeof document &&
        "undefined" != typeof navigator,
      $ = (function () {
        for (
          var t = ["Edge", "Trident", "Firefox"], e = 0;
          e < t.length;
          e += 1
        )
          if (Y && 0 <= navigator.userAgent.indexOf(t[e])) return 1;
        return 0;
      })();
    var V =
      Y && window.Promise
        ? function (t) {
            var e = !1;
            return function () {
              e ||
                ((e = !0),
                window.Promise.resolve().then(function () {
                  (e = !1), t();
                }));
            };
          }
        : function (t) {
            var e = !1;
            return function () {
              e ||
                ((e = !0),
                setTimeout(function () {
                  (e = !1), t();
                }, $));
            };
          };
    function X(t) {
      return t && "[object Function]" === {}.toString.call(t);
    }
    function G(t, e) {
      if (1 !== t.nodeType) return [];
      t = t.ownerDocument.defaultView.getComputedStyle(t, null);
      return e ? t[e] : t;
    }
    function K(t) {
      return "HTML" === t.nodeName ? t : t.parentNode || t.host;
    }
    function J(t) {
      if (!t) return document.body;
      switch (t.nodeName) {
        case "HTML":
        case "BODY":
          return t.ownerDocument.body;
        case "#document":
          return t.body;
      }
      var e = G(t),
        n = e.overflow,
        i = e.overflowX,
        e = e.overflowY;
      return /(auto|scroll|overlay)/.test(n + e + i) ? t : J(K(t));
    }
    function Z(t) {
      return t && t.referenceNode ? t.referenceNode : t;
    }
    var tt = Y && !(!window.MSInputMethodContext || !document.documentMode),
      et = Y && /MSIE 10/.test(navigator.userAgent);
    function nt(t) {
      return 11 === t ? tt : (10 !== t && tt) || et;
    }
    function it(t) {
      if (!t) return document.documentElement;
      for (
        var e = nt(10) ? document.body : null, n = t.offsetParent || null;
        n === e && t.nextElementSibling;

      )
        n = (t = t.nextElementSibling).offsetParent;
      var i = n && n.nodeName;
      return i && "BODY" !== i && "HTML" !== i
        ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
          "static" === G(n, "position")
          ? it(n)
          : n
        : (t ? t.ownerDocument : document).documentElement;
    }
    function ot(t) {
      return null !== t.parentNode ? ot(t.parentNode) : t;
    }
    function rt(t, e) {
      if (!(t && t.nodeType && e && e.nodeType))
        return document.documentElement;
      var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? t : e,
        o = n ? e : t,
        n = document.createRange();
      n.setStart(i, 0), n.setEnd(o, 0);
      n = n.commonAncestorContainer;
      if ((t !== n && e !== n) || i.contains(o))
        return "BODY" === (o = (i = n).nodeName) ||
          ("HTML" !== o && it(i.firstElementChild) !== i)
          ? it(n)
          : n;
      n = ot(t);
      return n.host ? rt(n.host, e) : rt(t, ot(e).host);
    }
    function st(t, e) {
      var n =
          "top" === (1 < arguments.length && void 0 !== e ? e : "top")
            ? "scrollTop"
            : "scrollLeft",
        e = t.nodeName;
      if ("BODY" !== e && "HTML" !== e) return t[n];
      e = t.ownerDocument.documentElement;
      return (t.ownerDocument.scrollingElement || e)[n];
    }
    function at(t, e) {
      var n = "x" === e ? "Left" : "Top",
        e = "Left" == n ? "Right" : "Bottom";
      return (
        parseFloat(t["border" + n + "Width"]) +
        parseFloat(t["border" + e + "Width"])
      );
    }
    function lt(t, e, n, i) {
      return Math.max(
        e["offset" + t],
        e["scroll" + t],
        n["client" + t],
        n["offset" + t],
        n["scroll" + t],
        nt(10)
          ? parseInt(n["offset" + t]) +
              parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) +
              parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")])
          : 0
      );
    }
    function ut(t) {
      var e = t.body,
        n = t.documentElement,
        t = nt(10) && getComputedStyle(n);
      return { height: lt("Height", e, n, t), width: lt("Width", e, n, t) };
    }
    var ct = function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      },
      d = function (t, e, n) {
        return e && ft(t.prototype, e), n && ft(t, n), t;
      };
    function ft(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    function dt(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    var ht =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n,
            i = arguments[e];
          for (n in i)
            Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
        }
        return t;
      };
    function pt(t) {
      return ht({}, t, { right: t.left + t.width, bottom: t.top + t.height });
    }
    function mt(t) {
      var e,
        n,
        i = {};
      try {
        nt(10)
          ? ((i = t.getBoundingClientRect()),
            (e = st(t, "top")),
            (n = st(t, "left")),
            (i.top += e),
            (i.left += n),
            (i.bottom += e),
            (i.right += n))
          : (i = t.getBoundingClientRect());
      } catch (t) {}
      var o = {
          left: i.left,
          top: i.top,
          width: i.right - i.left,
          height: i.bottom - i.top,
        },
        r = "HTML" === t.nodeName ? ut(t.ownerDocument) : {},
        s = r.width || t.clientWidth || o.width,
        a = r.height || t.clientHeight || o.height,
        r = t.offsetWidth - s,
        s = t.offsetHeight - a;
      return (
        (r || s) &&
          ((r -= at((a = G(t)), "x")),
          (s -= at(a, "y")),
          (o.width -= r),
          (o.height -= s)),
        pt(o)
      );
    }
    function gt(t, e, n) {
      var i = 2 < arguments.length && void 0 !== n && n,
        o = nt(10),
        r = "HTML" === e.nodeName,
        s = mt(t),
        a = mt(e),
        l = J(t),
        u = G(e),
        n = parseFloat(u.borderTopWidth),
        t = parseFloat(u.borderLeftWidth);
      i && r && ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
      s = pt({
        top: s.top - a.top - n,
        left: s.left - a.left - t,
        width: s.width,
        height: s.height,
      });
      return (
        (s.marginTop = 0),
        (s.marginLeft = 0),
        !o &&
          r &&
          ((r = parseFloat(u.marginTop)),
          (u = parseFloat(u.marginLeft)),
          (s.top -= n - r),
          (s.bottom -= n - r),
          (s.left -= t - u),
          (s.right -= t - u),
          (s.marginTop = r),
          (s.marginLeft = u)),
        (o && !i ? e.contains(l) : e === l && "BODY" !== l.nodeName) &&
          (s = (function (t, e, n) {
            var i = 2 < arguments.length && void 0 !== n && n,
              n = st(e, "top"),
              e = st(e, "left"),
              i = i ? -1 : 1;
            return (
              (t.top += n * i),
              (t.bottom += n * i),
              (t.left += e * i),
              (t.right += e * i),
              t
            );
          })(s, e)),
        s
      );
    }
    function yt(t) {
      if (!t || !t.parentElement || nt()) return document.documentElement;
      for (var e = t.parentElement; e && "none" === G(e, "transform"); )
        e = e.parentElement;
      return e || document.documentElement;
    }
    function vt(t, e, n, i, o) {
      var r = 4 < arguments.length && void 0 !== o && o,
        s = { top: 0, left: 0 },
        a = r ? yt(t) : rt(t, Z(e));
      "viewport" === i
        ? (s = (function (t, e) {
            var n = 1 < arguments.length && void 0 !== e && e,
              i = t.ownerDocument.documentElement,
              o = gt(t, i),
              r = Math.max(i.clientWidth, window.innerWidth || 0),
              e = Math.max(i.clientHeight, window.innerHeight || 0),
              t = n ? 0 : st(i),
              i = n ? 0 : st(i, "left");
            return pt({
              top: t - o.top + o.marginTop,
              left: i - o.left + o.marginLeft,
              width: r,
              height: e,
            });
          })(a, r))
        : ((o = void 0),
          "scrollParent" === i
            ? "BODY" === (o = J(K(e))).nodeName &&
              (o = t.ownerDocument.documentElement)
            : (o = "window" === i ? t.ownerDocument.documentElement : i),
          (l = gt(o, a, r)),
          "HTML" !== o.nodeName ||
          (function t(e) {
            var n = e.nodeName;
            if ("BODY" === n || "HTML" === n) return !1;
            if ("fixed" === G(e, "position")) return !0;
            e = K(e);
            return !!e && t(e);
          })(a)
            ? (s = l)
            : ((t = (a = ut(t.ownerDocument)).height),
              (a = a.width),
              (s.top += l.top - l.marginTop),
              (s.bottom = t + l.top),
              (s.left += l.left - l.marginLeft),
              (s.right = a + l.left)));
      var l = "number" == typeof (n = n || 0);
      return (
        (s.left += l ? n : n.left || 0),
        (s.top += l ? n : n.top || 0),
        (s.right -= l ? n : n.right || 0),
        (s.bottom -= l ? n : n.bottom || 0),
        s
      );
    }
    function _t(t, e, n, i, o, r) {
      r = 5 < arguments.length && void 0 !== r ? r : 0;
      if (-1 === t.indexOf("auto")) return t;
      var o = vt(n, i, r, o),
        s = {
          top: { width: o.width, height: e.top - o.top },
          right: { width: o.right - e.right, height: o.height },
          bottom: { width: o.width, height: o.bottom - e.bottom },
          left: { width: e.left - o.left, height: o.height },
        },
        e = Object.keys(s)
          .map(function (t) {
            return ht({ key: t }, s[t], { area: (t = s[t]).width * t.height });
          })
          .sort(function (t, e) {
            return e.area - t.area;
          }),
        o = e.filter(function (t) {
          var e = t.width,
            t = t.height;
          return e >= n.clientWidth && t >= n.clientHeight;
        }),
        e = (0 < o.length ? o : e)[0].key,
        t = t.split("-")[1];
      return e + (t ? "-" + t : "");
    }
    function bt(t, e, n, i) {
      i = 3 < arguments.length && void 0 !== i ? i : null;
      return gt(n, i ? yt(e) : rt(e, Z(n)), i);
    }
    function wt(t) {
      var e = t.ownerDocument.defaultView.getComputedStyle(t),
        n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
        e = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
      return { width: t.offsetWidth + e, height: t.offsetHeight + n };
    }
    function Et(t) {
      var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
      return t.replace(/left|right|bottom|top/g, function (t) {
        return e[t];
      });
    }
    function xt(t, e, n) {
      n = n.split("-")[0];
      var i = wt(t),
        o = { width: i.width, height: i.height },
        r = -1 !== ["right", "left"].indexOf(n),
        s = r ? "top" : "left",
        a = r ? "left" : "top",
        t = r ? "height" : "width",
        r = r ? "width" : "height";
      return (
        (o[s] = e[s] + e[t] / 2 - i[t] / 2),
        (o[a] = n === a ? e[a] - i[r] : e[Et(a)]),
        o
      );
    }
    function Tt(t, e) {
      return Array.prototype.find ? t.find(e) : t.filter(e)[0];
    }
    function Ct(t, n, e) {
      return (
        (void 0 === e
          ? t
          : t.slice(
              0,
              (function (t, e, n) {
                if (Array.prototype.findIndex)
                  return t.findIndex(function (t) {
                    return t[e] === n;
                  });
                var i = Tt(t, function (t) {
                  return t[e] === n;
                });
                return t.indexOf(i);
              })(t, "name", e)
            )
        ).forEach(function (t) {
          t.function &&
            console.warn(
              "`modifier.function` is deprecated, use `modifier.fn`!"
            );
          var e = t.function || t.fn;
          t.enabled &&
            X(e) &&
            ((n.offsets.popper = pt(n.offsets.popper)),
            (n.offsets.reference = pt(n.offsets.reference)),
            (n = e(n, t)));
        }),
        n
      );
    }
    function St(t, n) {
      return t.some(function (t) {
        var e = t.name;
        return t.enabled && e === n;
      });
    }
    function It(t) {
      for (
        var e = [!1, "ms", "Webkit", "Moz", "O"],
          n = t.charAt(0).toUpperCase() + t.slice(1),
          i = 0;
        i < e.length;
        i++
      ) {
        var o = e[i],
          o = o ? "" + o + n : t;
        if (void 0 !== document.body.style[o]) return o;
      }
      return null;
    }
    function Dt(t) {
      t = t.ownerDocument;
      return t ? t.defaultView : window;
    }
    function kt(t, e, n, i) {
      (n.updateBound = i),
        Dt(t).addEventListener("resize", n.updateBound, { passive: !0 });
      t = J(t);
      return (
        (function t(e, n, i, o) {
          var r = "BODY" === e.nodeName,
            e = r ? e.ownerDocument.defaultView : e;
          e.addEventListener(n, i, { passive: !0 }),
            r || t(J(e.parentNode), n, i, o),
            o.push(e);
        })(t, "scroll", n.updateBound, n.scrollParents),
        (n.scrollElement = t),
        (n.eventsEnabled = !0),
        n
      );
    }
    function At() {
      var t, e;
      this.state.eventsEnabled &&
        (cancelAnimationFrame(this.scheduleUpdate),
        (this.state =
          ((t = this.reference),
          (e = this.state),
          Dt(t).removeEventListener("resize", e.updateBound),
          e.scrollParents.forEach(function (t) {
            t.removeEventListener("scroll", e.updateBound);
          }),
          (e.updateBound = null),
          (e.scrollParents = []),
          (e.scrollElement = null),
          (e.eventsEnabled = !1),
          e)));
    }
    function Lt(t) {
      return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
    }
    function Nt(n, i) {
      Object.keys(i).forEach(function (t) {
        var e = "";
        -1 !==
          ["width", "height", "top", "right", "bottom", "left"].indexOf(t) &&
          Lt(i[t]) &&
          (e = "px"),
          (n.style[t] = i[t] + e);
      });
    }
    var Ot = Y && /Firefox/i.test(navigator.userAgent);
    function jt(t, e, n) {
      var i,
        o = Tt(t, function (t) {
          return t.name === e;
        }),
        r =
          !!o &&
          t.some(function (t) {
            return t.name === n && t.enabled && t.order < o.order;
          });
      return (
        r ||
          ((i = "`" + e + "`"),
          (t = "`" + n + "`"),
          console.warn(
            t +
              " modifier is required by " +
              i +
              " modifier in order to work, be sure to include it before " +
              i +
              "!"
          )),
        r
      );
    }
    var y = [
        "auto-start",
        "auto",
        "auto-end",
        "top-start",
        "top",
        "top-end",
        "right-start",
        "right",
        "right-end",
        "bottom-end",
        "bottom",
        "bottom-start",
        "left-end",
        "left",
        "left-start",
      ],
      zt = y.slice(3);
    function qt(t, e) {
      (e = 1 < arguments.length && void 0 !== e && e),
        (t = zt.indexOf(t)),
        (t = zt.slice(t + 1).concat(zt.slice(0, t)));
      return e ? t.reverse() : t;
    }
    var Rt = "flip",
      Pt = "clockwise",
      Wt = "counterclockwise";
    function Ht(t, o, r, e) {
      var s = [0, 0],
        a = -1 !== ["right", "left"].indexOf(e),
        n = t.split(/(\+|\-)/).map(function (t) {
          return t.trim();
        }),
        e = n.indexOf(
          Tt(n, function (t) {
            return -1 !== t.search(/,|\s/);
          })
        );
      n[e] &&
        -1 === n[e].indexOf(",") &&
        console.warn(
          "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
        );
      t = /\s*,\s*|\s+/;
      return (
        (-1 !== e
          ? [
              n.slice(0, e).concat([n[e].split(t)[0]]),
              [n[e].split(t)[1]].concat(n.slice(e + 1)),
            ]
          : [n]
        )
          .map(function (t, e) {
            var n = (1 === e ? !a : a) ? "height" : "width",
              i = !1;
            return t
              .reduce(function (t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e)
                  ? ((t[t.length - 1] = e), (i = !0), t)
                  : i
                  ? ((t[t.length - 1] += e), (i = !1), t)
                  : t.concat(e);
              }, [])
              .map(function (t) {
                return (function (t, e, n, i) {
                  var o = +(r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/))[1],
                    r = r[2];
                  if (!o) return t;
                  if (0 !== r.indexOf("%"))
                    return "vh" !== r && "vw" !== r
                      ? o
                      : (("vh" === r
                          ? Math.max(
                              document.documentElement.clientHeight,
                              window.innerHeight || 0
                            )
                          : Math.max(
                              document.documentElement.clientWidth,
                              window.innerWidth || 0
                            )) /
                          100) *
                          o;
                  var s = void 0;
                  switch (r) {
                    case "%p":
                      s = n;
                      break;
                    case "%":
                    case "%r":
                    default:
                      s = i;
                  }
                  return (pt(s)[e] / 100) * o;
                })(t, n, o, r);
              });
          })
          .forEach(function (n, i) {
            n.forEach(function (t, e) {
              Lt(t) && (s[i] += t * ("-" === n[e - 1] ? -1 : 1));
            });
          }),
        s
      );
    }
    var e = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: {
          shift: {
            order: 100,
            enabled: !0,
            fn: function (t) {
              var e,
                n,
                i = t.placement,
                o = i.split("-")[0],
                r = i.split("-")[1];
              return (
                r &&
                  ((e = (n = t.offsets).reference),
                  (i = n.popper),
                  (o = (n = -1 !== ["bottom", "top"].indexOf(o))
                    ? "width"
                    : "height"),
                  (o = {
                    start: dt({}, (n = n ? "left" : "top"), e[n]),
                    end: dt({}, n, e[n] + e[o] - i[o]),
                  }),
                  (t.offsets.popper = ht({}, i, o[r]))),
                t
              );
            },
          },
          offset: {
            order: 200,
            enabled: !0,
            fn: function (t, e) {
              var n = e.offset,
                i = t.placement,
                o = (r = t.offsets).popper,
                e = r.reference,
                r = i.split("-")[0],
                i = void 0,
                i = Lt(+n) ? [+n, 0] : Ht(n, o, e, r);
              return (
                "left" === r
                  ? ((o.top += i[0]), (o.left -= i[1]))
                  : "right" === r
                  ? ((o.top += i[0]), (o.left += i[1]))
                  : "top" === r
                  ? ((o.left += i[0]), (o.top -= i[1]))
                  : "bottom" === r && ((o.left += i[0]), (o.top += i[1])),
                (t.popper = o),
                t
              );
            },
            offset: 0,
          },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function (t, i) {
              var e = i.boundariesElement || it(t.instance.popper);
              t.instance.reference === e && (e = it(e));
              var n = It("transform"),
                o = t.instance.popper.style,
                r = o.top,
                s = o.left,
                a = o[n];
              (o.top = ""), (o.left = ""), (o[n] = "");
              var l = vt(
                t.instance.popper,
                t.instance.reference,
                i.padding,
                e,
                t.positionFixed
              );
              (o.top = r), (o.left = s), (o[n] = a), (i.boundaries = l);
              var a = i.priority,
                u = t.offsets.popper,
                c = {
                  primary: function (t) {
                    var e = u[t];
                    return (
                      u[t] < l[t] &&
                        !i.escapeWithReference &&
                        (e = Math.max(u[t], l[t])),
                      dt({}, t, e)
                    );
                  },
                  secondary: function (t) {
                    var e = "right" === t ? "left" : "top",
                      n = u[e];
                    return (
                      u[t] > l[t] &&
                        !i.escapeWithReference &&
                        (n = Math.min(
                          u[e],
                          l[t] - ("right" === t ? u.width : u.height)
                        )),
                      dt({}, e, n)
                    );
                  },
                };
              return (
                a.forEach(function (t) {
                  var e =
                    -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                  u = ht({}, u, c[e](t));
                }),
                (t.offsets.popper = u),
                t
              );
            },
            priority: ["left", "right", "top", "bottom"],
            padding: 5,
            boundariesElement: "scrollParent",
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn: function (t) {
              var e = (r = t.offsets).popper,
                n = r.reference,
                i = t.placement.split("-")[0],
                o = Math.floor,
                r = (s = -1 !== ["top", "bottom"].indexOf(i))
                  ? "right"
                  : "bottom",
                i = s ? "left" : "top",
                s = s ? "width" : "height";
              return (
                e[r] < o(n[i]) && (t.offsets.popper[i] = o(n[i]) - e[s]),
                e[i] > o(n[r]) && (t.offsets.popper[i] = o(n[r])),
                t
              );
            },
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: function (t, e) {
              if (!jt(t.instance.modifiers, "arrow", "keepTogether")) return t;
              var n = e.element;
              if ("string" == typeof n) {
                if (!(n = t.instance.popper.querySelector(n))) return t;
              } else if (!t.instance.popper.contains(n))
                return (
                  console.warn(
                    "WARNING: `arrow.element` must be child of its popper element!"
                  ),
                  t
                );
              var i = t.placement.split("-")[0],
                o = (c = t.offsets).popper,
                r = c.reference,
                s = -1 !== ["left", "right"].indexOf(i),
                a = s ? "height" : "width",
                l = s ? "Top" : "Left",
                u = l.toLowerCase(),
                e = s ? "left" : "top",
                c = s ? "bottom" : "right",
                i = wt(n)[a];
              return (
                r[c] - i < o[u] && (t.offsets.popper[u] -= o[u] - (r[c] - i)),
                r[u] + i > o[c] && (t.offsets.popper[u] += r[u] + i - o[c]),
                (t.offsets.popper = pt(t.offsets.popper)),
                (s = r[u] + r[a] / 2 - i / 2),
                (c = G(t.instance.popper)),
                (r = parseFloat(c["margin" + l])),
                (l = parseFloat(c["border" + l + "Width"])),
                (l = s - t.offsets.popper[u] - r - l),
                (l = Math.max(Math.min(o[a] - i, l), 0)),
                (t.arrowElement = n),
                (t.offsets.arrow =
                  (dt((n = {}), u, Math.round(l)), dt(n, e, ""), n)),
                t
              );
            },
            element: "[x-arrow]",
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: function (u, c) {
              if (St(u.instance.modifiers, "inner")) return u;
              if (u.flipped && u.placement === u.originalPlacement) return u;
              var f = vt(
                  u.instance.popper,
                  u.instance.reference,
                  c.padding,
                  c.boundariesElement,
                  u.positionFixed
                ),
                d = u.placement.split("-")[0],
                h = Et(d),
                p = u.placement.split("-")[1] || "",
                m = [];
              switch (c.behavior) {
                case Rt:
                  m = [d, h];
                  break;
                case Pt:
                  m = qt(d);
                  break;
                case Wt:
                  m = qt(d, !0);
                  break;
                default:
                  m = c.behavior;
              }
              return (
                m.forEach(function (t, e) {
                  if (d !== t || m.length === e + 1) return u;
                  (d = u.placement.split("-")[0]), (h = Et(d));
                  var n = u.offsets.popper,
                    i = u.offsets.reference,
                    o = Math.floor,
                    r =
                      ("left" === d && o(n.right) > o(i.left)) ||
                      ("right" === d && o(n.left) < o(i.right)) ||
                      ("top" === d && o(n.bottom) > o(i.top)) ||
                      ("bottom" === d && o(n.top) < o(i.bottom)),
                    s = o(n.left) < o(f.left),
                    a = o(n.right) > o(f.right),
                    l = o(n.top) < o(f.top),
                    t = o(n.bottom) > o(f.bottom),
                    i =
                      ("left" === d && s) ||
                      ("right" === d && a) ||
                      ("top" === d && l) ||
                      ("bottom" === d && t),
                    n = -1 !== ["top", "bottom"].indexOf(d),
                    o =
                      !!c.flipVariations &&
                      ((n && "start" === p && s) ||
                        (n && "end" === p && a) ||
                        (!n && "start" === p && l) ||
                        (!n && "end" === p && t)),
                    l =
                      !!c.flipVariationsByContent &&
                      ((n && "start" === p && a) ||
                        (n && "end" === p && s) ||
                        (!n && "start" === p && t) ||
                        (!n && "end" === p && l)),
                    l = o || l;
                  (r || i || l) &&
                    ((u.flipped = !0),
                    (r || i) && (d = m[e + 1]),
                    l &&
                      (p =
                        "end" === (l = p)
                          ? "start"
                          : "start" === l
                          ? "end"
                          : l),
                    (u.placement = d + (p ? "-" + p : "")),
                    (u.offsets.popper = ht(
                      {},
                      u.offsets.popper,
                      xt(u.instance.popper, u.offsets.reference, u.placement)
                    )),
                    (u = Ct(u.instance.modifiers, u, "flip")));
                }),
                u
              );
            },
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport",
            flipVariations: !1,
            flipVariationsByContent: !1,
          },
          inner: {
            order: 700,
            enabled: !1,
            fn: function (t) {
              var e = t.placement,
                n = e.split("-")[0],
                i = (s = t.offsets).popper,
                o = s.reference,
                r = -1 !== ["left", "right"].indexOf(n),
                s = -1 === ["top", "left"].indexOf(n);
              return (
                (i[r ? "left" : "top"] =
                  o[n] - (s ? i[r ? "width" : "height"] : 0)),
                (t.placement = Et(e)),
                (t.offsets.popper = pt(i)),
                t
              );
            },
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: function (t) {
              if (!jt(t.instance.modifiers, "hide", "preventOverflow"))
                return t;
              var e = t.offsets.reference,
                n = Tt(t.instance.modifiers, function (t) {
                  return "preventOverflow" === t.name;
                }).boundaries;
              if (
                e.bottom < n.top ||
                e.left > n.right ||
                e.top > n.bottom ||
                e.right < n.left
              ) {
                if (!0 === t.hide) return t;
                (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
              } else {
                if (!1 === t.hide) return t;
                (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
              }
              return t;
            },
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: function (t, e) {
              var n = e.x,
                i = e.y,
                o = t.offsets.popper;
              void 0 !==
                (p = Tt(t.instance.modifiers, function (t) {
                  return "applyStyle" === t.name;
                }).gpuAcceleration) &&
                console.warn(
                  "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                );
              var r,
                s,
                a,
                l,
                u = void 0 !== p ? p : e.gpuAcceleration,
                c = it(t.instance.popper),
                f = mt(c),
                d = { position: o.position },
                h =
                  ((r = t),
                  (h = window.devicePixelRatio < 2 || !Ot),
                  (m = (l = r.offsets).popper),
                  (s = l.reference),
                  (a = Math.round),
                  (p = Math.floor),
                  (e = function (t) {
                    return t;
                  }),
                  (o = a(s.width)),
                  (l = a(m.width)),
                  (s = -1 !== ["left", "right"].indexOf(r.placement)),
                  (r = -1 !== r.placement.indexOf("-")),
                  (p = h ? (s || r || o % 2 == l % 2 ? a : p) : e),
                  (e = h ? a : e),
                  {
                    left: p(
                      o % 2 == 1 && l % 2 == 1 && !r && h ? m.left - 1 : m.left
                    ),
                    top: e(m.top),
                    bottom: e(m.bottom),
                    right: p(m.right),
                  }),
                e = "bottom" === n ? "top" : "bottom",
                p = "right" === i ? "left" : "right",
                m = It("transform"),
                n = void 0,
                i = void 0,
                i =
                  "bottom" == e
                    ? "HTML" === c.nodeName
                      ? -c.clientHeight + h.bottom
                      : -f.height + h.bottom
                    : h.top,
                n =
                  "right" == p
                    ? "HTML" === c.nodeName
                      ? -c.clientWidth + h.right
                      : -f.width + h.right
                    : h.left;
              return (
                u && m
                  ? ((d[m] = "translate3d(" + n + "px, " + i + "px, 0)"),
                    (d[e] = 0),
                    (d[p] = 0),
                    (d.willChange = "transform"))
                  : ((u = "bottom" == e ? -1 : 1),
                    (m = "right" == p ? -1 : 1),
                    (d[e] = i * u),
                    (d[p] = n * m),
                    (d.willChange = e + ", " + p)),
                (p = { "x-placement": t.placement }),
                (t.attributes = ht({}, p, t.attributes)),
                (t.styles = ht({}, d, t.styles)),
                (t.arrowStyles = ht({}, t.offsets.arrow, t.arrowStyles)),
                t
              );
            },
            gpuAcceleration: !0,
            x: "bottom",
            y: "right",
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: function (t) {
              var e, n;
              return (
                Nt(t.instance.popper, t.styles),
                (e = t.instance.popper),
                (n = t.attributes),
                Object.keys(n).forEach(function (t) {
                  !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
                }),
                t.arrowElement &&
                  Object.keys(t.arrowStyles).length &&
                  Nt(t.arrowElement, t.arrowStyles),
                t
              );
            },
            onLoad: function (t, e, n, i, o) {
              return (
                (o = bt(o, e, t, n.positionFixed)),
                (t = _t(
                  n.placement,
                  o,
                  e,
                  t,
                  n.modifiers.flip.boundariesElement,
                  n.modifiers.flip.padding
                )),
                e.setAttribute("x-placement", t),
                Nt(e, { position: n.positionFixed ? "fixed" : "absolute" }),
                n
              );
            },
            gpuAcceleration: void 0,
          },
        },
      },
      Mt =
        (d(Ft, [
          {
            key: "update",
            value: function () {
              return function () {
                var t;
                this.state.isDestroyed ||
                  (((t = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {},
                  }).offsets.reference = bt(
                    this.state,
                    this.popper,
                    this.reference,
                    this.options.positionFixed
                  )),
                  (t.placement = _t(
                    this.options.placement,
                    t.offsets.reference,
                    this.popper,
                    this.reference,
                    this.options.modifiers.flip.boundariesElement,
                    this.options.modifiers.flip.padding
                  )),
                  (t.originalPlacement = t.placement),
                  (t.positionFixed = this.options.positionFixed),
                  (t.offsets.popper = xt(
                    this.popper,
                    t.offsets.reference,
                    t.placement
                  )),
                  (t.offsets.popper.position = this.options.positionFixed
                    ? "fixed"
                    : "absolute"),
                  (t = Ct(this.modifiers, t)),
                  this.state.isCreated
                    ? this.options.onUpdate(t)
                    : ((this.state.isCreated = !0), this.options.onCreate(t)));
              }.call(this);
            },
          },
          {
            key: "destroy",
            value: function () {
              return function () {
                return (
                  (this.state.isDestroyed = !0),
                  St(this.modifiers, "applyStyle") &&
                    (this.popper.removeAttribute("x-placement"),
                    (this.popper.style.position = ""),
                    (this.popper.style.top = ""),
                    (this.popper.style.left = ""),
                    (this.popper.style.right = ""),
                    (this.popper.style.bottom = ""),
                    (this.popper.style.willChange = ""),
                    (this.popper.style[It("transform")] = "")),
                  this.disableEventListeners(),
                  this.options.removeOnDestroy &&
                    this.popper.parentNode.removeChild(this.popper),
                  this
                );
              }.call(this);
            },
          },
          {
            key: "enableEventListeners",
            value: function () {
              return function () {
                this.state.eventsEnabled ||
                  (this.state = kt(
                    this.reference,
                    this.options,
                    this.state,
                    this.scheduleUpdate
                  ));
              }.call(this);
            },
          },
          {
            key: "disableEventListeners",
            value: function () {
              return At.call(this);
            },
          },
        ]),
        Ft);
    function Ft(t, e) {
      var n = this,
        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      ct(this, Ft),
        (this.scheduleUpdate = function () {
          return requestAnimationFrame(n.update);
        }),
        (this.update = V(this.update.bind(this))),
        (this.options = ht({}, Ft.Defaults, i)),
        (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
        (this.reference = t && t.jquery ? t[0] : t),
        (this.popper = e && e.jquery ? e[0] : e),
        (this.options.modifiers = {}),
        Object.keys(ht({}, Ft.Defaults.modifiers, i.modifiers)).forEach(
          function (t) {
            n.options.modifiers[t] = ht(
              {},
              Ft.Defaults.modifiers[t] || {},
              i.modifiers ? i.modifiers[t] : {}
            );
          }
        ),
        (this.modifiers = Object.keys(this.options.modifiers)
          .map(function (t) {
            return ht({ name: t }, n.options.modifiers[t]);
          })
          .sort(function (t, e) {
            return t.order - e.order;
          })),
        this.modifiers.forEach(function (t) {
          t.enabled &&
            X(t.onLoad) &&
            t.onLoad(n.reference, n.popper, n.options, t, n.state);
        }),
        this.update();
      e = this.options.eventsEnabled;
      e && this.enableEventListeners(), (this.state.eventsEnabled = e);
    }
    (Mt.Utils = ("undefined" != typeof window ? window : global).PopperUtils),
      (Mt.placements = y),
      (Mt.Defaults = e);
    var Bt = "dropdown",
      Qt = "bs.dropdown",
      Ut = "." + Qt,
      d = ".data-api",
      Yt = c.default.fn[Bt],
      $t = new RegExp("38|40|27"),
      Vt = "hide" + Ut,
      Xt = "hidden" + Ut,
      y = "click" + Ut + d,
      e = "keydown" + Ut + d,
      Gt = "disabled",
      Kt = "show",
      Jt = "dropdown-menu-right",
      Zt = '[data-toggle="dropdown"]',
      te = ".dropdown-menu",
      ee = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
      },
      ne = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)",
      },
      ie = (function () {
        function u(t, e) {
          (this._element = t),
            (this._popper = null),
            (this._config = this._getConfig(e)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var t = u.prototype;
        return (
          (t.toggle = function () {
            var t;
            this._element.disabled ||
              c.default(this._element).hasClass(Gt) ||
              ((t = c.default(this._menu).hasClass(Kt)),
              u._clearMenus(),
              t || this.show(!0));
          }),
          (t.show = function (t) {
            if (
              (void 0 === t && (t = !1),
              !(
                this._element.disabled ||
                c.default(this._element).hasClass(Gt) ||
                c.default(this._menu).hasClass(Kt)
              ))
            ) {
              var e = { relatedTarget: this._element },
                n = c.default.Event("show.bs.dropdown", e),
                i = u._getParentFromElement(this._element);
              if ((c.default(i).trigger(n), !n.isDefaultPrevented())) {
                if (!this._inNavbar && t) {
                  if (void 0 === Mt)
                    throw new TypeError(
                      "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                    );
                  t = this._element;
                  "parent" === this._config.reference
                    ? (t = i)
                    : f.isElement(this._config.reference) &&
                      ((t = this._config.reference),
                      void 0 !== this._config.reference.jquery &&
                        (t = this._config.reference[0])),
                    "scrollParent" !== this._config.boundary &&
                      c.default(i).addClass("position-static"),
                    (this._popper = new Mt(
                      t,
                      this._menu,
                      this._getPopperConfig()
                    ));
                }
                "ontouchstart" in document.documentElement &&
                  0 === c.default(i).closest(".navbar-nav").length &&
                  c
                    .default(document.body)
                    .children()
                    .on("mouseover", null, c.default.noop),
                  this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  c.default(this._menu).toggleClass(Kt),
                  c
                    .default(i)
                    .toggleClass(Kt)
                    .trigger(c.default.Event("shown.bs.dropdown", e));
              }
            }
          }),
          (t.hide = function () {
            var t, e, n;
            this._element.disabled ||
              c.default(this._element).hasClass(Gt) ||
              !c.default(this._menu).hasClass(Kt) ||
              ((t = { relatedTarget: this._element }),
              (e = c.default.Event(Vt, t)),
              (n = u._getParentFromElement(this._element)),
              c.default(n).trigger(e),
              e.isDefaultPrevented() ||
                (this._popper && this._popper.destroy(),
                c.default(this._menu).toggleClass(Kt),
                c.default(n).toggleClass(Kt).trigger(c.default.Event(Xt, t))));
          }),
          (t.dispose = function () {
            c.default.removeData(this._element, Qt),
              c.default(this._element).off(Ut),
              (this._element = null),
              (this._menu = null) !== this._popper &&
                (this._popper.destroy(), (this._popper = null));
          }),
          (t.update = function () {
            (this._inNavbar = this._detectNavbar()),
              null !== this._popper && this._popper.scheduleUpdate();
          }),
          (t._addEventListeners = function () {
            var e = this;
            c.default(this._element).on("click.bs.dropdown", function (t) {
              t.preventDefault(), t.stopPropagation(), e.toggle();
            });
          }),
          (t._getConfig = function (t) {
            return (
              (t = a(
                {},
                this.constructor.Default,
                c.default(this._element).data(),
                t
              )),
              f.typeCheckConfig(Bt, t, this.constructor.DefaultType),
              t
            );
          }),
          (t._getMenuElement = function () {
            var t;
            return (
              this._menu ||
                ((t = u._getParentFromElement(this._element)) &&
                  (this._menu = t.querySelector(te))),
              this._menu
            );
          }),
          (t._getPlacement = function () {
            var t = c.default(this._element.parentNode),
              e = "bottom-start";
            return (
              t.hasClass("dropup")
                ? (e = c.default(this._menu).hasClass(Jt)
                    ? "top-end"
                    : "top-start")
                : t.hasClass("dropright")
                ? (e = "right-start")
                : t.hasClass("dropleft")
                ? (e = "left-start")
                : c.default(this._menu).hasClass(Jt) && (e = "bottom-end"),
              e
            );
          }),
          (t._detectNavbar = function () {
            return 0 < c.default(this._element).closest(".navbar").length;
          }),
          (t._getOffset = function () {
            var e = this,
              t = {};
            return (
              "function" == typeof this._config.offset
                ? (t.fn = function (t) {
                    return (
                      (t.offsets = a(
                        {},
                        t.offsets,
                        e._config.offset(t.offsets, e._element) || {}
                      )),
                      t
                    );
                  })
                : (t.offset = this._config.offset),
              t
            );
          }),
          (t._getPopperConfig = function () {
            var t = {
              placement: this._getPlacement(),
              modifiers: {
                offset: this._getOffset(),
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary },
              },
            };
            return (
              "static" === this._config.display &&
                (t.modifiers.applyStyle = { enabled: !1 }),
              a({}, t, this._config.popperConfig)
            );
          }),
          (u._jQueryInterface = function (e) {
            return this.each(function () {
              var t = c.default(this).data(Qt);
              if (
                (t ||
                  ((t = new u(this, "object" == typeof e ? e : null)),
                  c.default(this).data(Qt, t)),
                "string" == typeof e)
              ) {
                if (void 0 === t[e])
                  throw new TypeError('No method named "' + e + '"');
                t[e]();
              }
            });
          }),
          (u._clearMenus = function (t) {
            if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
              for (
                var e = [].slice.call(document.querySelectorAll(Zt)),
                  n = 0,
                  i = e.length;
                n < i;
                n++
              ) {
                var o,
                  r,
                  s = u._getParentFromElement(e[n]),
                  a = c.default(e[n]).data(Qt),
                  l = { relatedTarget: e[n] };
                t && "click" === t.type && (l.clickEvent = t),
                  a &&
                    ((o = a._menu),
                    c.default(s).hasClass(Kt) &&
                      ((t &&
                        (("click" === t.type &&
                          /input|textarea/i.test(t.target.tagName)) ||
                          ("keyup" === t.type && 9 === t.which)) &&
                        c.default.contains(s, t.target)) ||
                        ((r = c.default.Event(Vt, l)),
                        c.default(s).trigger(r),
                        r.isDefaultPrevented() ||
                          ("ontouchstart" in document.documentElement &&
                            c
                              .default(document.body)
                              .children()
                              .off("mouseover", null, c.default.noop),
                          e[n].setAttribute("aria-expanded", "false"),
                          a._popper && a._popper.destroy(),
                          c.default(o).removeClass(Kt),
                          c
                            .default(s)
                            .removeClass(Kt)
                            .trigger(c.default.Event(Xt, l))))));
              }
          }),
          (u._getParentFromElement = function (t) {
            var e,
              n = f.getSelectorFromElement(t);
            return n && (e = document.querySelector(n)), e || t.parentNode;
          }),
          (u._dataApiKeydownHandler = function (t) {
            if (
              (/input|textarea/i.test(t.target.tagName)
                ? !(
                    32 === t.which ||
                    (27 !== t.which &&
                      ((40 !== t.which && 38 !== t.which) ||
                        c.default(t.target).closest(te).length))
                  )
                : $t.test(t.which)) &&
              !this.disabled &&
              !c.default(this).hasClass(Gt)
            ) {
              var e = u._getParentFromElement(this),
                n = c.default(e).hasClass(Kt);
              if (n || 27 !== t.which) {
                if (
                  (t.preventDefault(),
                  t.stopPropagation(),
                  !n || 27 === t.which || 32 === t.which)
                )
                  return (
                    27 === t.which &&
                      c.default(e.querySelector(Zt)).trigger("focus"),
                    void c.default(this).trigger("click")
                  );
                n = [].slice
                  .call(
                    e.querySelectorAll(
                      ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                    )
                  )
                  .filter(function (t) {
                    return c.default(t).is(":visible");
                  });
                0 !== n.length &&
                  ((e = n.indexOf(t.target)),
                  38 === t.which && 0 < e && e--,
                  40 === t.which && e < n.length - 1 && e++,
                  e < 0 && (e = 0),
                  n[e].focus());
              }
            }
          }),
          s(u, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.5.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return ee;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return ne;
              },
            },
          ]),
          u
        );
      })();
    c
      .default(document)
      .on(e, Zt, ie._dataApiKeydownHandler)
      .on(e, te, ie._dataApiKeydownHandler)
      .on(y + " keyup.bs.dropdown.data-api", ie._clearMenus)
      .on(y, Zt, function (t) {
        t.preventDefault(),
          t.stopPropagation(),
          ie._jQueryInterface.call(c.default(this), "toggle");
      })
      .on(y, ".dropdown form", function (t) {
        t.stopPropagation();
      }),
      (c.default.fn[Bt] = ie._jQueryInterface),
      (c.default.fn[Bt].Constructor = ie),
      (c.default.fn[Bt].noConflict = function () {
        return (c.default.fn[Bt] = Yt), ie._jQueryInterface;
      });
    var oe = "modal",
      re = "bs.modal",
      se = "." + re,
      ae = c.default.fn[oe],
      le = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      ue = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean",
      },
      ce = "hidden" + se,
      fe = "show" + se,
      de = "focusin" + se,
      he = "resize" + se,
      pe = "click.dismiss" + se,
      me = "keydown.dismiss" + se,
      ge = "mousedown.dismiss" + se,
      ye = "modal-open",
      ve = "fade",
      _e = "show",
      be = "modal-static",
      we = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      Ee = ".sticky-top",
      xe = (function () {
        function o(t, e) {
          (this._config = this._getConfig(e)),
            (this._element = t),
            (this._dialog = t.querySelector(".modal-dialog")),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._isTransitioning = !1),
            (this._scrollbarWidth = 0);
        }
        var t = o.prototype;
        return (
          (t.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t);
          }),
          (t.show = function (t) {
            var e,
              n = this;
            this._isShown ||
              this._isTransitioning ||
              (c.default(this._element).hasClass(ve) &&
                (this._isTransitioning = !0),
              (e = c.default.Event(fe, { relatedTarget: t })),
              c.default(this._element).trigger(e),
              this._isShown ||
                e.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                c
                  .default(this._element)
                  .on(pe, '[data-dismiss="modal"]', function (t) {
                    return n.hide(t);
                  }),
                c.default(this._dialog).on(ge, function () {
                  c.default(n._element).one(
                    "mouseup.dismiss.bs.modal",
                    function (t) {
                      c.default(t.target).is(n._element) &&
                        (n._ignoreBackdropClick = !0);
                    }
                  );
                }),
                this._showBackdrop(function () {
                  return n._showElement(t);
                })));
          }),
          (t.hide = function (t) {
            var e = this;
            t && t.preventDefault(),
              this._isShown &&
                !this._isTransitioning &&
                ((t = c.default.Event("hide.bs.modal")),
                c.default(this._element).trigger(t),
                this._isShown &&
                  !t.isDefaultPrevented() &&
                  ((this._isShown = !1),
                  (t = c.default(this._element).hasClass(ve)) &&
                    (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  c.default(document).off(de),
                  c.default(this._element).removeClass(_e),
                  c.default(this._element).off(pe),
                  c.default(this._dialog).off(ge),
                  t
                    ? ((t = f.getTransitionDurationFromElement(this._element)),
                      c
                        .default(this._element)
                        .one(f.TRANSITION_END, function (t) {
                          return e._hideModal(t);
                        })
                        .emulateTransitionEnd(t))
                    : this._hideModal()));
          }),
          (t.dispose = function () {
            [window, this._element, this._dialog].forEach(function (t) {
              return c.default(t).off(se);
            }),
              c.default(document).off(de),
              c.default.removeData(this._element, re),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._isTransitioning = null),
              (this._scrollbarWidth = null);
          }),
          (t.handleUpdate = function () {
            this._adjustDialog();
          }),
          (t._getConfig = function (t) {
            return (t = a({}, le, t)), f.typeCheckConfig(oe, t, ue), t;
          }),
          (t._triggerBackdropTransition = function () {
            var t,
              e,
              n,
              i = this;
            "static" === this._config.backdrop
              ? ((t = c.default.Event("hidePrevented.bs.modal")),
                c.default(this._element).trigger(t),
                t.isDefaultPrevented() ||
                  ((e =
                    this._element.scrollHeight >
                    document.documentElement.clientHeight) ||
                    (this._element.style.overflowY = "hidden"),
                  this._element.classList.add(be),
                  (n = f.getTransitionDurationFromElement(this._dialog)),
                  c.default(this._element).off(f.TRANSITION_END),
                  c
                    .default(this._element)
                    .one(f.TRANSITION_END, function () {
                      i._element.classList.remove(be),
                        e ||
                          c
                            .default(i._element)
                            .one(f.TRANSITION_END, function () {
                              i._element.style.overflowY = "";
                            })
                            .emulateTransitionEnd(i._element, n);
                    })
                    .emulateTransitionEnd(n),
                  this._element.focus()))
              : this.hide();
          }),
          (t._showElement = function (t) {
            var e = this,
              n = c.default(this._element).hasClass(ve),
              i = this._dialog
                ? this._dialog.querySelector(".modal-body")
                : null;
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              this._element.setAttribute("aria-modal", !0),
              this._element.setAttribute("role", "dialog"),
              c.default(this._dialog).hasClass("modal-dialog-scrollable") && i
                ? (i.scrollTop = 0)
                : (this._element.scrollTop = 0),
              n && f.reflow(this._element),
              c.default(this._element).addClass(_e),
              this._config.focus && this._enforceFocus();
            var o = c.default.Event("shown.bs.modal", { relatedTarget: t }),
              t = function () {
                e._config.focus && e._element.focus(),
                  (e._isTransitioning = !1),
                  c.default(e._element).trigger(o);
              };
            n
              ? ((n = f.getTransitionDurationFromElement(this._dialog)),
                c
                  .default(this._dialog)
                  .one(f.TRANSITION_END, t)
                  .emulateTransitionEnd(n))
              : t();
          }),
          (t._enforceFocus = function () {
            var e = this;
            c.default(document)
              .off(de)
              .on(de, function (t) {
                document !== t.target &&
                  e._element !== t.target &&
                  0 === c.default(e._element).has(t.target).length &&
                  e._element.focus();
              });
          }),
          (t._setEscapeEvent = function () {
            var e = this;
            this._isShown
              ? c.default(this._element).on(me, function (t) {
                  e._config.keyboard && 27 === t.which
                    ? (t.preventDefault(), e.hide())
                    : e._config.keyboard ||
                      27 !== t.which ||
                      e._triggerBackdropTransition();
                })
              : this._isShown || c.default(this._element).off(me);
          }),
          (t._setResizeEvent = function () {
            var e = this;
            this._isShown
              ? c.default(window).on(he, function (t) {
                  return e.handleUpdate(t);
                })
              : c.default(window).off(he);
          }),
          (t._hideModal = function () {
            var t = this;
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              this._element.removeAttribute("aria-modal"),
              this._element.removeAttribute("role"),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                c.default(document.body).removeClass(ye),
                  t._resetAdjustments(),
                  t._resetScrollbar(),
                  c.default(t._element).trigger(ce);
              });
          }),
          (t._removeBackdrop = function () {
            this._backdrop &&
              (c.default(this._backdrop).remove(), (this._backdrop = null));
          }),
          (t._showBackdrop = function (t) {
            var e,
              n = this,
              i = c.default(this._element).hasClass(ve) ? ve : "";
            this._isShown && this._config.backdrop
              ? ((this._backdrop = document.createElement("div")),
                (this._backdrop.className = "modal-backdrop"),
                i && this._backdrop.classList.add(i),
                c.default(this._backdrop).appendTo(document.body),
                c.default(this._element).on(pe, function (t) {
                  n._ignoreBackdropClick
                    ? (n._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                      n._triggerBackdropTransition();
                }),
                i && f.reflow(this._backdrop),
                c.default(this._backdrop).addClass(_e),
                t &&
                  (i
                    ? ((e = f.getTransitionDurationFromElement(this._backdrop)),
                      c
                        .default(this._backdrop)
                        .one(f.TRANSITION_END, t)
                        .emulateTransitionEnd(e))
                    : t()))
              : !this._isShown && this._backdrop
              ? (c.default(this._backdrop).removeClass(_e),
                (i = function () {
                  n._removeBackdrop(), t && t();
                }),
                c.default(this._element).hasClass(ve)
                  ? ((e = f.getTransitionDurationFromElement(this._backdrop)),
                    c
                      .default(this._backdrop)
                      .one(f.TRANSITION_END, i)
                      .emulateTransitionEnd(e))
                  : i())
              : t && t();
          }),
          (t._adjustDialog = function () {
            var t =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            !this._isBodyOverflowing &&
              t &&
              (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
              this._isBodyOverflowing &&
                !t &&
                (this._element.style.paddingRight =
                  this._scrollbarWidth + "px");
          }),
          (t._resetAdjustments = function () {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }),
          (t._checkScrollbar = function () {
            var t = document.body.getBoundingClientRect();
            (this._isBodyOverflowing =
              Math.round(t.left + t.right) < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (t._setScrollbar = function () {
            var t,
              e,
              o = this;
            this._isBodyOverflowing &&
              ((t = [].slice.call(document.querySelectorAll(we))),
              (e = [].slice.call(document.querySelectorAll(Ee))),
              c.default(t).each(function (t, e) {
                var n = e.style.paddingRight,
                  i = c.default(e).css("padding-right");
                c.default(e)
                  .data("padding-right", n)
                  .css(
                    "padding-right",
                    parseFloat(i) + o._scrollbarWidth + "px"
                  );
              }),
              c.default(e).each(function (t, e) {
                var n = e.style.marginRight,
                  i = c.default(e).css("margin-right");
                c.default(e)
                  .data("margin-right", n)
                  .css(
                    "margin-right",
                    parseFloat(i) - o._scrollbarWidth + "px"
                  );
              }),
              (t = document.body.style.paddingRight),
              (e = c.default(document.body).css("padding-right")),
              c
                .default(document.body)
                .data("padding-right", t)
                .css(
                  "padding-right",
                  parseFloat(e) + this._scrollbarWidth + "px"
                )),
              c.default(document.body).addClass(ye);
          }),
          (t._resetScrollbar = function () {
            var t = [].slice.call(document.querySelectorAll(we));
            c.default(t).each(function (t, e) {
              var n = c.default(e).data("padding-right");
              c.default(e).removeData("padding-right"),
                (e.style.paddingRight = n || "");
            });
            t = [].slice.call(document.querySelectorAll(Ee));
            c.default(t).each(function (t, e) {
              var n = c.default(e).data("margin-right");
              void 0 !== n &&
                c.default(e).css("margin-right", n).removeData("margin-right");
            });
            t = c.default(document.body).data("padding-right");
            c.default(document.body).removeData("padding-right"),
              (document.body.style.paddingRight = t || "");
          }),
          (t._getScrollbarWidth = function () {
            var t = document.createElement("div");
            (t.className = "modal-scrollbar-measure"),
              document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e;
          }),
          (o._jQueryInterface = function (n, i) {
            return this.each(function () {
              var t = c.default(this).data(re),
                e = a(
                  {},
                  le,
                  c.default(this).data(),
                  "object" == typeof n && n ? n : {}
                );
              if (
                (t || ((t = new o(this, e)), c.default(this).data(re, t)),
                "string" == typeof n)
              ) {
                if (void 0 === t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n](i);
              } else e.show && t.show(i);
            });
          }),
          s(o, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.5.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return le;
              },
            },
          ]),
          o
        );
      })();
    c
      .default(document)
      .on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
        var e,
          n = this,
          i = f.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        i = c.default(e).data(re)
          ? "toggle"
          : a({}, c.default(e).data(), c.default(this).data());
        ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
        var o = c.default(e).one(fe, function (t) {
          t.isDefaultPrevented() ||
            o.one(ce, function () {
              c.default(n).is(":visible") && n.focus();
            });
        });
        xe._jQueryInterface.call(c.default(e), i, this);
      }),
      (c.default.fn[oe] = xe._jQueryInterface),
      (c.default.fn[oe].Constructor = xe),
      (c.default.fn[oe].noConflict = function () {
        return (c.default.fn[oe] = ae), xe._jQueryInterface;
      });
    var Te = [
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ],
      y = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
      Se =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function Ie(t, r, e) {
      if (0 === t.length) return t;
      if (e && "function" == typeof e) return e(t);
      for (
        var t = new window.DOMParser().parseFromString(t, "text/html"),
          s = Object.keys(r),
          a = [].slice.call(t.body.querySelectorAll("*")),
          n = function (t, e) {
            var n = a[t],
              i = n.nodeName.toLowerCase();
            if (-1 === s.indexOf(n.nodeName.toLowerCase()))
              return n.parentNode.removeChild(n), "continue";
            var t = [].slice.call(n.attributes),
              o = [].concat(r["*"] || [], r[i] || []);
            t.forEach(function (t) {
              !(function (t, e) {
                var n = t.nodeName.toLowerCase();
                if (-1 !== e.indexOf(n))
                  return (
                    -1 === Te.indexOf(n) ||
                    Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Se))
                  );
                for (
                  var i = e.filter(function (t) {
                      return t instanceof RegExp;
                    }),
                    o = 0,
                    r = i.length;
                  o < r;
                  o++
                )
                  if (n.match(i[o])) return 1;
              })(t, o) && n.removeAttribute(t.nodeName);
            });
          },
          i = 0,
          o = a.length;
        i < o;
        i++
      )
        n(i);
      return t.body.innerHTML;
    }
    var De = "tooltip",
      ke = "bs.tooltip",
      Ae = "." + ke,
      Le = c.default.fn[De],
      Ne = "bs-tooltip",
      Oe = new RegExp("(^|\\s)" + Ne + "\\S+", "g"),
      je = ["sanitize", "whiteList", "sanitizeFn"],
      ze = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)",
      },
      qe = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left",
      },
      Re = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: y,
        popperConfig: null,
      },
      Pe = "show",
      We = {
        HIDE: "hide" + Ae,
        HIDDEN: "hidden" + Ae,
        SHOW: "show" + Ae,
        SHOWN: "shown" + Ae,
        INSERTED: "inserted" + Ae,
        CLICK: "click" + Ae,
        FOCUSIN: "focusin" + Ae,
        FOCUSOUT: "focusout" + Ae,
        MOUSEENTER: "mouseenter" + Ae,
        MOUSELEAVE: "mouseleave" + Ae,
      },
      He = "fade",
      Me = "show",
      Fe = "hover",
      Be = "focus",
      Qe = (function () {
        function o(t, e) {
          if (void 0 === Mt)
            throw new TypeError(
              "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
            );
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ""),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = t),
            (this.config = this._getConfig(e)),
            (this.tip = null),
            this._setListeners();
        }
        var t = o.prototype;
        return (
          (t.enable = function () {
            this._isEnabled = !0;
          }),
          (t.disable = function () {
            this._isEnabled = !1;
          }),
          (t.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (t.toggle = function (t) {
            var e, n;
            this._isEnabled &&
              (t
                ? ((e = this.constructor.DATA_KEY),
                  (n = c.default(t.currentTarget).data(e)) ||
                    ((n = new this.constructor(
                      t.currentTarget,
                      this._getDelegateConfig()
                    )),
                    c.default(t.currentTarget).data(e, n)),
                  (n._activeTrigger.click = !n._activeTrigger.click),
                  n._isWithActiveTrigger()
                    ? n._enter(null, n)
                    : n._leave(null, n))
                : c.default(this.getTipElement()).hasClass(Me)
                ? this._leave(null, this)
                : this._enter(null, this));
          }),
          (t.dispose = function () {
            clearTimeout(this._timeout),
              c.default.removeData(this.element, this.constructor.DATA_KEY),
              c.default(this.element).off(this.constructor.EVENT_KEY),
              c
                .default(this.element)
                .closest(".modal")
                .off("hide.bs.modal", this._hideModalHandler),
              this.tip && c.default(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null),
              this._popper && this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (t.show = function () {
            var e = this;
            if ("none" === c.default(this.element).css("display"))
              throw new Error("Please use show on visible elements");
            var t,
              n,
              i = c.default.Event(this.constructor.Event.SHOW);
            this.isWithContent() &&
              this._isEnabled &&
              (c.default(this.element).trigger(i),
              (n = f.findShadowRoot(this.element)),
              (t = c.default.contains(
                null !== n ? n : this.element.ownerDocument.documentElement,
                this.element
              )),
              !i.isDefaultPrevented() &&
                t &&
                ((n = this.getTipElement()),
                (i = f.getUID(this.constructor.NAME)),
                n.setAttribute("id", i),
                this.element.setAttribute("aria-describedby", i),
                this.setContent(),
                this.config.animation && c.default(n).addClass(He),
                (t =
                  "function" == typeof this.config.placement
                    ? this.config.placement.call(this, n, this.element)
                    : this.config.placement),
                (i = this._getAttachment(t)),
                this.addAttachmentClass(i),
                (t = this._getContainer()),
                c.default(n).data(this.constructor.DATA_KEY, this),
                c.default.contains(
                  this.element.ownerDocument.documentElement,
                  this.tip
                ) || c.default(n).appendTo(t),
                c
                  .default(this.element)
                  .trigger(this.constructor.Event.INSERTED),
                (this._popper = new Mt(
                  this.element,
                  n,
                  this._getPopperConfig(i)
                )),
                c.default(n).addClass(Me),
                "ontouchstart" in document.documentElement &&
                  c
                    .default(document.body)
                    .children()
                    .on("mouseover", null, c.default.noop),
                (i = function () {
                  e.config.animation && e._fixTransition();
                  var t = e._hoverState;
                  (e._hoverState = null),
                    c.default(e.element).trigger(e.constructor.Event.SHOWN),
                    "out" === t && e._leave(null, e);
                }),
                c.default(this.tip).hasClass(He)
                  ? ((n = f.getTransitionDurationFromElement(this.tip)),
                    c
                      .default(this.tip)
                      .one(f.TRANSITION_END, i)
                      .emulateTransitionEnd(n))
                  : i()));
          }),
          (t.hide = function (t) {
            function e() {
              n._hoverState !== Pe &&
                i.parentNode &&
                i.parentNode.removeChild(i),
                n._cleanTipClass(),
                n.element.removeAttribute("aria-describedby"),
                c.default(n.element).trigger(n.constructor.Event.HIDDEN),
                null !== n._popper && n._popper.destroy(),
                t && t();
            }
            var n = this,
              i = this.getTipElement(),
              o = c.default.Event(this.constructor.Event.HIDE);
            c.default(this.element).trigger(o),
              o.isDefaultPrevented() ||
                (c.default(i).removeClass(Me),
                "ontouchstart" in document.documentElement &&
                  c
                    .default(document.body)
                    .children()
                    .off("mouseover", null, c.default.noop),
                (this._activeTrigger.click = !1),
                (this._activeTrigger[Be] = !1),
                (this._activeTrigger[Fe] = !1),
                c.default(this.tip).hasClass(He)
                  ? ((o = f.getTransitionDurationFromElement(i)),
                    c
                      .default(i)
                      .one(f.TRANSITION_END, e)
                      .emulateTransitionEnd(o))
                  : e(),
                (this._hoverState = ""));
          }),
          (t.update = function () {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (t.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (t.addAttachmentClass = function (t) {
            c.default(this.getTipElement()).addClass(Ne + "-" + t);
          }),
          (t.getTipElement = function () {
            return (
              (this.tip = this.tip || c.default(this.config.template)[0]),
              this.tip
            );
          }),
          (t.setContent = function () {
            var t = this.getTipElement();
            this.setElementContent(
              c.default(t.querySelectorAll(".tooltip-inner")),
              this.getTitle()
            ),
              c.default(t).removeClass(He + " " + Me);
          }),
          (t.setElementContent = function (t, e) {
            "object" != typeof e || (!e.nodeType && !e.jquery)
              ? this.config.html
                ? (this.config.sanitize &&
                    (e = Ie(e, this.config.whiteList, this.config.sanitizeFn)),
                  t.html(e))
                : t.text(e)
              : this.config.html
              ? c.default(e).parent().is(t) || t.empty().append(e)
              : t.text(c.default(e).text());
          }),
          (t.getTitle = function () {
            return (
              this.element.getAttribute("data-original-title") ||
              ("function" == typeof this.config.title
                ? this.config.title.call(this.element)
                : this.config.title)
            );
          }),
          (t._getPopperConfig = function (t) {
            var e = this;
            return a(
              {},
              {
                placement: t,
                modifiers: {
                  offset: this._getOffset(),
                  flip: { behavior: this.config.fallbackPlacement },
                  arrow: { element: ".arrow" },
                  preventOverflow: { boundariesElement: this.config.boundary },
                },
                onCreate: function (t) {
                  t.originalPlacement !== t.placement &&
                    e._handlePopperPlacementChange(t);
                },
                onUpdate: function (t) {
                  return e._handlePopperPlacementChange(t);
                },
              },
              this.config.popperConfig
            );
          }),
          (t._getOffset = function () {
            var e = this,
              t = {};
            return (
              "function" == typeof this.config.offset
                ? (t.fn = function (t) {
                    return (
                      (t.offsets = a(
                        {},
                        t.offsets,
                        e.config.offset(t.offsets, e.element) || {}
                      )),
                      t
                    );
                  })
                : (t.offset = this.config.offset),
              t
            );
          }),
          (t._getContainer = function () {
            return !1 === this.config.container
              ? document.body
              : f.isElement(this.config.container)
              ? c.default(this.config.container)
              : c.default(document).find(this.config.container);
          }),
          (t._getAttachment = function (t) {
            return qe[t.toUpperCase()];
          }),
          (t._setListeners = function () {
            var n = this;
            this.config.trigger.split(" ").forEach(function (t) {
              var e;
              "click" === t
                ? c
                    .default(n.element)
                    .on(
                      n.constructor.Event.CLICK,
                      n.config.selector,
                      function (t) {
                        return n.toggle(t);
                      }
                    )
                : "manual" !== t &&
                  ((e =
                    t === Fe
                      ? n.constructor.Event.MOUSEENTER
                      : n.constructor.Event.FOCUSIN),
                  (t =
                    t === Fe
                      ? n.constructor.Event.MOUSELEAVE
                      : n.constructor.Event.FOCUSOUT),
                  c
                    .default(n.element)
                    .on(e, n.config.selector, function (t) {
                      return n._enter(t);
                    })
                    .on(t, n.config.selector, function (t) {
                      return n._leave(t);
                    }));
            }),
              (this._hideModalHandler = function () {
                n.element && n.hide();
              }),
              c
                .default(this.element)
                .closest(".modal")
                .on("hide.bs.modal", this._hideModalHandler),
              this.config.selector
                ? (this.config = a({}, this.config, {
                    trigger: "manual",
                    selector: "",
                  }))
                : this._fixTitle();
          }),
          (t._fixTitle = function () {
            var t = typeof this.element.getAttribute("data-original-title");
            (!this.element.getAttribute("title") && "string" == t) ||
              (this.element.setAttribute(
                "data-original-title",
                this.element.getAttribute("title") || ""
              ),
              this.element.setAttribute("title", ""));
          }),
          (t._enter = function (t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || c.default(t.currentTarget).data(n)) ||
              ((e = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              c.default(t.currentTarget).data(n, e)),
              t && (e._activeTrigger["focusin" === t.type ? Be : Fe] = !0),
              c.default(e.getTipElement()).hasClass(Me) || e._hoverState === Pe
                ? (e._hoverState = Pe)
                : (clearTimeout(e._timeout),
                  (e._hoverState = Pe),
                  e.config.delay && e.config.delay.show
                    ? (e._timeout = setTimeout(function () {
                        e._hoverState === Pe && e.show();
                      }, e.config.delay.show))
                    : e.show());
          }),
          (t._leave = function (t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || c.default(t.currentTarget).data(n)) ||
              ((e = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              c.default(t.currentTarget).data(n, e)),
              t && (e._activeTrigger["focusout" === t.type ? Be : Fe] = !1),
              e._isWithActiveTrigger() ||
                (clearTimeout(e._timeout),
                (e._hoverState = "out"),
                e.config.delay && e.config.delay.hide
                  ? (e._timeout = setTimeout(function () {
                      "out" === e._hoverState && e.hide();
                    }, e.config.delay.hide))
                  : e.hide());
          }),
          (t._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger)
              if (this._activeTrigger[t]) return !0;
            return !1;
          }),
          (t._getConfig = function (t) {
            var e = c.default(this.element).data();
            return (
              Object.keys(e).forEach(function (t) {
                -1 !== je.indexOf(t) && delete e[t];
              }),
              "number" ==
                typeof (t = a(
                  {},
                  this.constructor.Default,
                  e,
                  "object" == typeof t && t ? t : {}
                )).delay && (t.delay = { show: t.delay, hide: t.delay }),
              "number" == typeof t.title && (t.title = t.title.toString()),
              "number" == typeof t.content &&
                (t.content = t.content.toString()),
              f.typeCheckConfig(De, t, this.constructor.DefaultType),
              t.sanitize &&
                (t.template = Ie(t.template, t.whiteList, t.sanitizeFn)),
              t
            );
          }),
          (t._getDelegateConfig = function () {
            var t = {};
            if (this.config)
              for (var e in this.config)
                this.constructor.Default[e] !== this.config[e] &&
                  (t[e] = this.config[e]);
            return t;
          }),
          (t._cleanTipClass = function () {
            var t = c.default(this.getTipElement()),
              e = t.attr("class").match(Oe);
            null !== e && e.length && t.removeClass(e.join(""));
          }),
          (t._handlePopperPlacementChange = function (t) {
            (this.tip = t.instance.popper),
              this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(t.placement));
          }),
          (t._fixTransition = function () {
            var t = this.getTipElement(),
              e = this.config.animation;
            null === t.getAttribute("x-placement") &&
              (c.default(t).removeClass(He),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = e));
          }),
          (o._jQueryInterface = function (i) {
            return this.each(function () {
              var t = c.default(this),
                e = t.data(ke),
                n = "object" == typeof i && i;
              if (
                (e || !/dispose|hide/.test(i)) &&
                (e || ((e = new o(this, n)), t.data(ke, e)),
                "string" == typeof i)
              ) {
                if (void 0 === e[i])
                  throw new TypeError('No method named "' + i + '"');
                e[i]();
              }
            });
          }),
          s(o, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.5.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return Re;
              },
            },
            {
              key: "NAME",
              get: function () {
                return De;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return ke;
              },
            },
            {
              key: "Event",
              get: function () {
                return We;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return Ae;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return ze;
              },
            },
          ]),
          o
        );
      })();
    (c.default.fn[De] = Qe._jQueryInterface),
      (c.default.fn[De].Constructor = Qe),
      (c.default.fn[De].noConflict = function () {
        return (c.default.fn[De] = Le), Qe._jQueryInterface;
      });
    var Ue = "popover",
      Ye = "bs.popover",
      $e = "." + Ye,
      Ve = c.default.fn[Ue],
      Xe = "bs-popover",
      Ge = new RegExp("(^|\\s)" + Xe + "\\S+", "g"),
      Ke = a({}, Qe.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      }),
      Je = a({}, Qe.DefaultType, { content: "(string|element|function)" }),
      Ze = {
        HIDE: "hide" + $e,
        HIDDEN: "hidden" + $e,
        SHOW: "show" + $e,
        SHOWN: "shown" + $e,
        INSERTED: "inserted" + $e,
        CLICK: "click" + $e,
        FOCUSIN: "focusin" + $e,
        FOCUSOUT: "focusout" + $e,
        MOUSEENTER: "mouseenter" + $e,
        MOUSELEAVE: "mouseleave" + $e,
      },
      tn = (function (t) {
        var e;
        function i() {
          return t.apply(this, arguments) || this;
        }
        (n = t),
          ((e = i).prototype = Object.create(n.prototype)),
          ((e.prototype.constructor = e).__proto__ = n);
        var n = i.prototype;
        return (
          (n.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (n.addAttachmentClass = function (t) {
            c.default(this.getTipElement()).addClass(Xe + "-" + t);
          }),
          (n.getTipElement = function () {
            return (
              (this.tip = this.tip || c.default(this.config.template)[0]),
              this.tip
            );
          }),
          (n.setContent = function () {
            var t = c.default(this.getTipElement());
            this.setElementContent(t.find(".popover-header"), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)),
              this.setElementContent(t.find(".popover-body"), e),
              t.removeClass("fade show");
          }),
          (n._getContent = function () {
            return (
              this.element.getAttribute("data-content") || this.config.content
            );
          }),
          (n._cleanTipClass = function () {
            var t = c.default(this.getTipElement()),
              e = t.attr("class").match(Ge);
            null !== e && 0 < e.length && t.removeClass(e.join(""));
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = c.default(this).data(Ye),
                e = "object" == typeof n ? n : null;
              if (
                (t || !/dispose|hide/.test(n)) &&
                (t || ((t = new i(this, e)), c.default(this).data(Ye, t)),
                "string" == typeof n)
              ) {
                if (void 0 === t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.5.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return Ke;
              },
            },
            {
              key: "NAME",
              get: function () {
                return Ue;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return Ye;
              },
            },
            {
              key: "Event",
              get: function () {
                return Ze;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return $e;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Je;
              },
            },
          ]),
          i
        );
      })(Qe);
    (c.default.fn[Ue] = tn._jQueryInterface),
      (c.default.fn[Ue].Constructor = tn),
      (c.default.fn[Ue].noConflict = function () {
        return (c.default.fn[Ue] = Ve), tn._jQueryInterface;
      });
    var en = "scrollspy",
      nn = "bs.scrollspy",
      on = "." + nn,
      rn = c.default.fn[en],
      sn = { offset: 10, method: "auto", target: "" },
      an = { offset: "number", method: "string", target: "(string|element)" },
      ln = "active",
      un = ".nav, .list-group",
      cn = ".nav-link",
      fn = ".list-group-item",
      dn = "position",
      hn = (function () {
        function n(t, e) {
          var n = this;
          (this._element = t),
            (this._scrollElement = "BODY" === t.tagName ? window : t),
            (this._config = this._getConfig(e)),
            (this._selector =
              this._config.target +
              " " +
              cn +
              "," +
              this._config.target +
              " " +
              fn +
              "," +
              this._config.target +
              " .dropdown-item"),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            c
              .default(this._scrollElement)
              .on("scroll.bs.scrollspy", function (t) {
                return n._process(t);
              }),
            this.refresh(),
            this._process();
        }
        var t = n.prototype;
        return (
          (t.refresh = function () {
            var e = this,
              t =
                this._scrollElement === this._scrollElement.window
                  ? "offset"
                  : dn,
              i = "auto" === this._config.method ? t : this._config.method,
              o = i === dn ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              [].slice
                .call(document.querySelectorAll(this._selector))
                .map(function (t) {
                  var e,
                    n = f.getSelectorFromElement(t);
                  if ((n && (e = document.querySelector(n)), e)) {
                    t = e.getBoundingClientRect();
                    if (t.width || t.height)
                      return [c.default(e)[i]().top + o, n];
                  }
                  return null;
                })
                .filter(function (t) {
                  return t;
                })
                .sort(function (t, e) {
                  return t[0] - e[0];
                })
                .forEach(function (t) {
                  e._offsets.push(t[0]), e._targets.push(t[1]);
                });
          }),
          (t.dispose = function () {
            c.default.removeData(this._element, nn),
              c.default(this._scrollElement).off(on),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (t._getConfig = function (t) {
            var e;
            return (
              "string" !=
                typeof (t = a({}, sn, "object" == typeof t && t ? t : {}))
                  .target &&
                f.isElement(t.target) &&
                ((e = c.default(t.target).attr("id")) ||
                  ((e = f.getUID(en)), c.default(t.target).attr("id", e)),
                (t.target = "#" + e)),
              f.typeCheckConfig(en, t, an),
              t
            );
          }),
          (t._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (t._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (t._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (t._process = function () {
            var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              n = this._config.offset + e - this._getOffsetHeight();
            if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
              n = this._targets[this._targets.length - 1];
              this._activeTarget !== n && this._activate(n);
            } else {
              if (
                this._activeTarget &&
                t < this._offsets[0] &&
                0 < this._offsets[0]
              )
                return (this._activeTarget = null), void this._clear();
              for (var i = this._offsets.length; i--; )
                this._activeTarget !== this._targets[i] &&
                  t >= this._offsets[i] &&
                  (void 0 === this._offsets[i + 1] ||
                    t < this._offsets[i + 1]) &&
                  this._activate(this._targets[i]);
            }
          }),
          (t._activate = function (e) {
            (this._activeTarget = e), this._clear();
            var t = this._selector.split(",").map(function (t) {
                return (
                  t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                );
              }),
              t = c.default(
                [].slice.call(document.querySelectorAll(t.join(",")))
              );
            t.hasClass("dropdown-item")
              ? (t.closest(".dropdown").find(".dropdown-toggle").addClass(ln),
                t.addClass(ln))
              : (t.addClass(ln),
                t
                  .parents(un)
                  .prev(cn + ", " + fn)
                  .addClass(ln),
                t.parents(un).prev(".nav-item").children(cn).addClass(ln)),
              c
                .default(this._scrollElement)
                .trigger("activate.bs.scrollspy", { relatedTarget: e });
          }),
          (t._clear = function () {
            [].slice
              .call(document.querySelectorAll(this._selector))
              .filter(function (t) {
                return t.classList.contains(ln);
              })
              .forEach(function (t) {
                return t.classList.remove(ln);
              });
          }),
          (n._jQueryInterface = function (e) {
            return this.each(function () {
              var t = c.default(this).data(nn);
              if (
                (t ||
                  ((t = new n(this, "object" == typeof e && e)),
                  c.default(this).data(nn, t)),
                "string" == typeof e)
              ) {
                if (void 0 === t[e])
                  throw new TypeError('No method named "' + e + '"');
                t[e]();
              }
            });
          }),
          s(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.5.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return sn;
              },
            },
          ]),
          n
        );
      })();
    c.default(window).on("load.bs.scrollspy.data-api", function () {
      for (
        var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
          e = t.length;
        e--;

      ) {
        var n = c.default(t[e]);
        hn._jQueryInterface.call(n, n.data());
      }
    }),
      (c.default.fn[en] = hn._jQueryInterface),
      (c.default.fn[en].Constructor = hn),
      (c.default.fn[en].noConflict = function () {
        return (c.default.fn[en] = rn), hn._jQueryInterface;
      });
    var pn = "bs.tab",
      y = "." + pn,
      mn = c.default.fn.tab,
      gn = "active",
      yn = ".active",
      vn = "> li > .active",
      _n = (function () {
        function i(t) {
          this._element = t;
        }
        var t = i.prototype;
        return (
          (t.show = function () {
            var t,
              e,
              n,
              i,
              o,
              r,
              s = this;
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
              c.default(this._element).hasClass(gn)) ||
              c.default(this._element).hasClass("disabled") ||
              ((r = c.default(this._element).closest(".nav, .list-group")[0]),
              (e = f.getSelectorFromElement(this._element)),
              r &&
                ((o = "UL" === r.nodeName || "OL" === r.nodeName ? vn : yn),
                (n = (n = c.default.makeArray(c.default(r).find(o)))[
                  n.length - 1
                ])),
              (i = c.default.Event("hide.bs.tab", {
                relatedTarget: this._element,
              })),
              (o = c.default.Event("show.bs.tab", { relatedTarget: n })),
              n && c.default(n).trigger(i),
              c.default(this._element).trigger(o),
              o.isDefaultPrevented() ||
                i.isDefaultPrevented() ||
                (e && (t = document.querySelector(e)),
                this._activate(this._element, r),
                (r = function () {
                  var t = c.default.Event("hidden.bs.tab", {
                      relatedTarget: s._element,
                    }),
                    e = c.default.Event("shown.bs.tab", { relatedTarget: n });
                  c.default(n).trigger(t), c.default(s._element).trigger(e);
                }),
                t ? this._activate(t, t.parentNode, r) : r()));
          }),
          (t.dispose = function () {
            c.default.removeData(this._element, pn), (this._element = null);
          }),
          (t._activate = function (t, e, n) {
            var i = this,
              o = (
                !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                  ? c.default(e).children(yn)
                  : c.default(e).find(vn)
              )[0],
              r = n && o && c.default(o).hasClass("fade"),
              e = function () {
                return i._transitionComplete(t, o, n);
              };
            o && r
              ? ((r = f.getTransitionDurationFromElement(o)),
                c
                  .default(o)
                  .removeClass("show")
                  .one(f.TRANSITION_END, e)
                  .emulateTransitionEnd(r))
              : e();
          }),
          (t._transitionComplete = function (t, e, n) {
            var i;
            e &&
              (c.default(e).removeClass(gn),
              (i = c
                .default(e.parentNode)
                .find("> .dropdown-menu .active")[0]) &&
                c.default(i).removeClass(gn),
              "tab" === e.getAttribute("role") &&
                e.setAttribute("aria-selected", !1)),
              c.default(t).addClass(gn),
              "tab" === t.getAttribute("role") &&
                t.setAttribute("aria-selected", !0),
              f.reflow(t),
              t.classList.contains("fade") && t.classList.add("show"),
              t.parentNode &&
                c.default(t.parentNode).hasClass("dropdown-menu") &&
                ((e = c.default(t).closest(".dropdown")[0]) &&
                  ((e = [].slice.call(e.querySelectorAll(".dropdown-toggle"))),
                  c.default(e).addClass(gn)),
                t.setAttribute("aria-expanded", !0)),
              n && n();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = c.default(this),
                e = t.data(pn);
              if (
                (e || ((e = new i(this)), t.data(pn, e)), "string" == typeof n)
              ) {
                if (void 0 === e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.5.3";
              },
            },
          ]),
          i
        );
      })();
    c
      .default(document)
      .on(
        "click.bs.tab.data-api",
        '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        function (t) {
          t.preventDefault(), _n._jQueryInterface.call(c.default(this), "show");
        }
      ),
      (c.default.fn.tab = _n._jQueryInterface),
      (c.default.fn.tab.Constructor = _n),
      (c.default.fn.tab.noConflict = function () {
        return (c.default.fn.tab = mn), _n._jQueryInterface;
      });
    var bn = "toast",
      wn = "bs.toast",
      y = "." + wn,
      En = c.default.fn[bn],
      xn = "click.dismiss" + y,
      Tn = "show",
      Cn = "showing",
      Sn = { animation: "boolean", autohide: "boolean", delay: "number" },
      In = { animation: !0, autohide: !0, delay: 500 },
      Dn = (function () {
        function i(t, e) {
          (this._element = t),
            (this._config = this._getConfig(e)),
            (this._timeout = null),
            this._setListeners();
        }
        var t = i.prototype;
        return (
          (t.show = function () {
            var t,
              e = this,
              n = c.default.Event("show.bs.toast");
            c.default(this._element).trigger(n),
              n.isDefaultPrevented() ||
                (this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade"),
                (t = function () {
                  e._element.classList.remove(Cn),
                    e._element.classList.add(Tn),
                    c.default(e._element).trigger("shown.bs.toast"),
                    e._config.autohide &&
                      (e._timeout = setTimeout(function () {
                        e.hide();
                      }, e._config.delay));
                }),
                this._element.classList.remove("hide"),
                f.reflow(this._element),
                this._element.classList.add(Cn),
                this._config.animation
                  ? ((n = f.getTransitionDurationFromElement(this._element)),
                    c
                      .default(this._element)
                      .one(f.TRANSITION_END, t)
                      .emulateTransitionEnd(n))
                  : t());
          }),
          (t.hide = function () {
            var t;
            this._element.classList.contains(Tn) &&
              ((t = c.default.Event("hide.bs.toast")),
              c.default(this._element).trigger(t),
              t.isDefaultPrevented() || this._close());
          }),
          (t.dispose = function () {
            this._clearTimeout(),
              this._element.classList.contains(Tn) &&
                this._element.classList.remove(Tn),
              c.default(this._element).off(xn),
              c.default.removeData(this._element, wn),
              (this._element = null),
              (this._config = null);
          }),
          (t._getConfig = function (t) {
            return (
              (t = a(
                {},
                In,
                c.default(this._element).data(),
                "object" == typeof t && t ? t : {}
              )),
              f.typeCheckConfig(bn, t, this.constructor.DefaultType),
              t
            );
          }),
          (t._setListeners = function () {
            var t = this;
            c.default(this._element).on(
              xn,
              '[data-dismiss="toast"]',
              function () {
                return t.hide();
              }
            );
          }),
          (t._close = function () {
            function t() {
              n._element.classList.add("hide"),
                c.default(n._element).trigger("hidden.bs.toast");
            }
            var e,
              n = this;
            this._element.classList.remove(Tn),
              this._config.animation
                ? ((e = f.getTransitionDurationFromElement(this._element)),
                  c
                    .default(this._element)
                    .one(f.TRANSITION_END, t)
                    .emulateTransitionEnd(e))
                : t();
          }),
          (t._clearTimeout = function () {
            clearTimeout(this._timeout), (this._timeout = null);
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = c.default(this),
                e = t.data(wn);
              if (
                (e ||
                  ((e = new i(this, "object" == typeof n && n)), t.data(wn, e)),
                "string" == typeof n)
              ) {
                if (void 0 === e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n](this);
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.5.3";
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Sn;
              },
            },
            {
              key: "Default",
              get: function () {
                return In;
              },
            },
          ]),
          i
        );
      })();
    (c.default.fn[bn] = Dn._jQueryInterface),
      (c.default.fn[bn].Constructor = Dn),
      (c.default.fn[bn].noConflict = function () {
        return (c.default.fn[bn] = En), Dn._jQueryInterface;
      }),
      (t.Alert = p),
      (t.Button = w),
      (t.Carousel = j),
      (t.Collapse = U),
      (t.Dropdown = ie),
      (t.Modal = xe),
      (t.Popover = tn),
      (t.Scrollspy = hn),
      (t.Tab = _n),
      (t.Toast = Dn),
      (t.Tooltip = Qe),
      (t.Util = f),
      Object.defineProperty(t, "__esModule", { value: !0 });
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var n = (this._events = this._events || {}),
            t = (n[t] = n[t] || []);
          return -1 == t.indexOf(e) && t.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var n = (this._onceEvents = this._onceEvents || {});
          return ((n[t] = n[t] || {})[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        t = this._events && this._events[t];
        if (t && t.length) {
          e = t.indexOf(e);
          return -1 != e && t.splice(e, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var n = this._events && this._events[t];
        if (n && n.length) {
          (n = n.slice(0)), (e = e || []);
          for (
            var i = this._onceEvents && this._onceEvents[t], o = 0;
            o < n.length;
            o++
          ) {
            var r = n[o];
            i && i[r] && (this.off(t, r), delete i[r]), r.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (e, n) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (t) {
          return n(e, t);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = n(e, require("ev-emitter")))
      : (e.imagesLoaded = n(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    var r = e.jQuery,
      s = e.console;
    function a(t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    }
    var l = Array.prototype.slice;
    function u(t, e, n) {
      if (!(this instanceof u)) return new u(t, e, n);
      var i,
        o = t;
      "string" == typeof t && (o = document.querySelectorAll(t)),
        o
          ? ((this.elements =
              ((i = o),
              Array.isArray(i)
                ? i
                : "object" == typeof i && "number" == typeof i.length
                ? l.call(i)
                : [i])),
            (this.options = a({}, this.options)),
            "function" == typeof e ? (n = e) : a(this.options, e),
            n && this.on("always", n),
            this.getImages(),
            r && (this.jqDeferred = new r.Deferred()),
            setTimeout(this.check.bind(this)))
          : s.error("Bad element for imagesLoaded " + (o || t));
    }
    ((u.prototype = Object.create(t.prototype)).options = {}),
      (u.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (u.prototype.addElementImages = function (t) {
        "IMG" == t.nodeName && this.addImage(t),
          !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && c[e]) {
          for (var n = t.querySelectorAll("img"), i = 0; i < n.length; i++) {
            var o = n[i];
            this.addImage(o);
          }
          if ("string" == typeof this.options.background)
            for (
              var r = t.querySelectorAll(this.options.background), i = 0;
              i < r.length;
              i++
            ) {
              var s = r[i];
              this.addElementBackgroundImages(s);
            }
        }
      });
    var c = { 1: !0, 9: !0, 11: !0 };
    function n(t) {
      this.img = t;
    }
    function i(t, e) {
      (this.url = t), (this.element = e), (this.img = new Image());
    }
    return (
      (u.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t);
        if (e)
          for (
            var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(e.backgroundImage);
            null !== i;

          ) {
            var o = i && i[2];
            o && this.addBackground(o, t), (i = n.exec(e.backgroundImage));
          }
      }),
      (u.prototype.addImage = function (t) {
        t = new n(t);
        this.images.push(t);
      }),
      (u.prototype.addBackground = function (t, e) {
        e = new i(t, e);
        this.images.push(e);
      }),
      (u.prototype.check = function () {
        var i = this;
        function e(t, e, n) {
          setTimeout(function () {
            i.progress(t, e, n);
          });
        }
        (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : this.complete();
      }),
      (u.prototype.progress = function (t, e, n) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
          this.emitEvent("progress", [this, t, e]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, t),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && s && s.log("progress: " + n, t, e);
      }),
      (u.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        (this.isComplete = !0),
          this.emitEvent(t, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred &&
            ((t = this.hasAnyBroken ? "reject" : "resolve"),
            this.jqDeferred[t](this));
      }),
      ((n.prototype = Object.create(t.prototype)).check = function () {
        this.getIsImageComplete()
          ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            (this.proxyImage.src = this.img.src));
      }),
      (n.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (n.prototype.confirm = function (t, e) {
        (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
      }),
      (n.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (n.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (n.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (n.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      ((i.prototype = Object.create(n.prototype)).check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url),
          this.getIsImageComplete() &&
            (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
            this.unbindEvents());
      }),
      (i.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (i.prototype.confirm = function (t, e) {
        (this.isLoaded = t),
          this.emitEvent("progress", [this, this.element, e]);
      }),
      (u.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery) &&
          ((r = t).fn.imagesLoaded = function (t, e) {
            return new u(this, t, e).jqDeferred.promise(r(this));
          });
      })(),
      u
    );
  }),
  (function (e, n) {
    "function" == typeof define && define.amd
      ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
          return n(e, t);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = n(e, require("jquery")))
      : (e.jQueryBridget = n(e, e.jQuery));
  })(window, function (t, e) {
    "use strict";
    var n = Array.prototype.slice,
      i = t.console,
      f =
        void 0 === i
          ? function () {}
          : function (t) {
              i.error(t);
            };
    function o(l, u, c) {
      (c = c || e || t.jQuery) &&
        (u.prototype.option ||
          (u.prototype.option = function (t) {
            c.isPlainObject(t) &&
              (this.options = c.extend(!0, this.options, t));
          }),
        (c.fn[l] = function (t) {
          if ("string" != typeof t)
            return (
              (a = t),
              this.each(function (t, e) {
                var n = c.data(e, l);
                n
                  ? (n.option(a), n._init())
                  : ((n = new u(e, a)), c.data(e, l, n));
              }),
              this
            );
          var i,
            o,
            r,
            s,
            a,
            e = n.call(arguments, 1);
          return (
            (o = e),
            (s = "$()." + l + '("' + (i = t) + '")'),
            (t = this).each(function (t, e) {
              var n = c.data(e, l);
              n
                ? (e = n[i]) && "_" != i.charAt(0)
                  ? ((n = e.apply(n, o)), (r = void 0 === r ? n : r))
                  : f(s + " is not a valid method")
                : f(l + " not initialized. Cannot call methods, i.e. " + s);
            }),
            void 0 !== r ? r : t
          );
        }),
        r(c));
    }
    function r(t) {
      !t || (t && t.bridget) || (t.bridget = o);
    }
    return r(e || t.jQuery), o;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var n = (this._events = this._events || {}),
            t = (n[t] = n[t] || []);
          return -1 == t.indexOf(e) && t.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var n = (this._onceEvents = this._onceEvents || {});
          return ((n[t] = n[t] || {})[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        t = this._events && this._events[t];
        if (t && t.length) {
          e = t.indexOf(e);
          return -1 != e && t.splice(e, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var n = this._events && this._events[t];
        if (n && n.length) {
          (n = n.slice(0)), (e = e || []);
          for (
            var i = this._onceEvents && this._onceEvents[t], o = 0;
            o < n.length;
            o++
          ) {
            var r = n[o];
            i && i[r] && (this.off(t, r), delete i[r]), r.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function h(t) {
      var e = parseFloat(t);
      return -1 == t.indexOf("%") && !isNaN(e) && e;
    }
    var e =
        "undefined" == typeof console
          ? function () {}
          : function (t) {
              console.error(t);
            },
      p = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      m = p.length;
    function g(t) {
      t = getComputedStyle(t);
      return (
        t ||
          e(
            "Style returned " +
              t +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        t
      );
    }
    var y,
      v = !1;
    function _(t) {
      if (
        (v ||
          ((v = !0),
          ((d = document.createElement("div")).style.width = "200px"),
          (d.style.padding = "1px 2px 3px 4px"),
          (d.style.borderStyle = "solid"),
          (d.style.borderWidth = "1px 2px 3px 4px"),
          (d.style.boxSizing = "border-box"),
          (f = document.body || document.documentElement).appendChild(d),
          (c = g(d)),
          (y = 200 == Math.round(h(c.width))),
          (_.isBoxSizeOuter = y),
          f.removeChild(d)),
        "string" == typeof t && (t = document.querySelector(t)),
        t && "object" == typeof t && t.nodeType)
      ) {
        var e = g(t);
        if ("none" == e.display)
          return (function () {
            for (
              var t = {
                  width: 0,
                  height: 0,
                  innerWidth: 0,
                  innerHeight: 0,
                  outerWidth: 0,
                  outerHeight: 0,
                },
                e = 0;
              e < m;
              e++
            )
              t[p[e]] = 0;
            return t;
          })();
        var n = {};
        (n.width = t.offsetWidth), (n.height = t.offsetHeight);
        for (
          var i = (n.isBorderBox = "border-box" == e.boxSizing), o = 0;
          o < m;
          o++
        ) {
          var r = p[o],
            s = e[r],
            s = parseFloat(s);
          n[r] = isNaN(s) ? 0 : s;
        }
        var a = n.paddingLeft + n.paddingRight,
          l = n.paddingTop + n.paddingBottom,
          u = n.marginLeft + n.marginRight,
          c = n.marginTop + n.marginBottom,
          f = n.borderLeftWidth + n.borderRightWidth,
          d = n.borderTopWidth + n.borderBottomWidth,
          t = i && y,
          i = h(e.width);
        !1 !== i && (n.width = i + (t ? 0 : a + f));
        i = h(e.height);
        return (
          !1 !== i && (n.height = i + (t ? 0 : l + d)),
          (n.innerWidth = n.width - (a + f)),
          (n.innerHeight = n.height - (l + d)),
          (n.outerWidth = n.width + u),
          (n.outerHeight = n.height + c),
          n
        );
      }
    }
    return _;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var n = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
        var i = e[n] + "MatchesSelector";
        if (t[i]) return i;
      }
    })();
    return function (t, e) {
      return t[n](e);
    };
  }),
  (function (e, n) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (t) {
            return n(e, t);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = n(e, require("desandro-matches-selector")))
      : (e.fizzyUIUtils = n(e, e.matchesSelector));
  })(window, function (n, r) {
    var u = {
        extend: function (t, e) {
          for (var n in e) t[n] = e[n];
          return t;
        },
        modulo: function (t, e) {
          return ((t % e) + e) % e;
        },
      },
      e = Array.prototype.slice;
    (u.makeArray = function (t) {
      return Array.isArray(t)
        ? t
        : null == t
        ? []
        : "object" == typeof t && "number" == typeof t.length
        ? e.call(t)
        : [t];
    }),
      (u.removeFrom = function (t, e) {
        e = t.indexOf(e);
        -1 != e && t.splice(e, 1);
      }),
      (u.getParent = function (t, e) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), r(t, e))) return t;
      }),
      (u.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (u.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (u.filterFindElements = function (t, i) {
        t = u.makeArray(t);
        var o = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement)
              if (i) {
                r(t, i) && o.push(t);
                for (var e = t.querySelectorAll(i), n = 0; n < e.length; n++)
                  o.push(e[n]);
              } else o.push(t);
          }),
          o
        );
      }),
      (u.debounceMethod = function (t, e, i) {
        i = i || 100;
        var o = t.prototype[e],
          r = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[r];
          clearTimeout(t);
          var e = arguments,
            n = this;
          this[r] = setTimeout(function () {
            o.apply(n, e), delete n[r];
          }, i);
        };
      }),
      (u.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (u.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, n) {
            return e + "-" + n;
          })
          .toLowerCase();
      });
    var c = n.console;
    return (
      (u.htmlInit = function (a, l) {
        u.docReady(function () {
          var t = u.toDashed(l),
            o = "data-" + t,
            e = document.querySelectorAll("[" + o + "]"),
            t = document.querySelectorAll(".js-" + t),
            t = u.makeArray(e).concat(u.makeArray(t)),
            r = o + "-options",
            s = n.jQuery;
          t.forEach(function (e) {
            var t,
              n = e.getAttribute(o) || e.getAttribute(r);
            try {
              t = n && JSON.parse(n);
            } catch (t) {
              return void (
                c &&
                c.error("Error parsing " + o + " on " + e.className + ": " + t)
              );
            }
            var i = new a(e, t);
            s && s.data(e, l, i);
          });
        });
      }),
      u
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    var n = document.documentElement.style,
      i = "string" == typeof n.transition ? "transition" : "WebkitTransition",
      o = "string" == typeof n.transform ? "transform" : "WebkitTransform",
      r = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[i],
      s = {
        transform: o,
        transition: i,
        transitionDuration: i + "Duration",
        transitionProperty: i + "Property",
        transitionDelay: i + "Delay",
      };
    function a(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    t = a.prototype = Object.create(t.prototype);
    (t.constructor = a),
      (t._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (t.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (t.getSize = function () {
        this.size = e(this.element);
      }),
      (t.css = function (t) {
        var e,
          n = this.element.style;
        for (e in t) n[s[e] || e] = t[e];
      }),
      (t.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop"),
          i = t[e ? "left" : "right"],
          o = t[n ? "top" : "bottom"],
          r = parseFloat(i),
          s = parseFloat(o),
          t = this.layout.size;
        -1 != i.indexOf("%") && (r = (r / 100) * t.width),
          -1 != o.indexOf("%") && (s = (s / 100) * t.height),
          (r = isNaN(r) ? 0 : r),
          (s = isNaN(s) ? 0 : s),
          (r -= e ? t.paddingLeft : t.paddingRight),
          (s -= n ? t.paddingTop : t.paddingBottom),
          (this.position.x = r),
          (this.position.y = s);
      }),
      (t.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          n = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          o = n ? "paddingLeft" : "paddingRight",
          r = n ? "left" : "right",
          n = n ? "right" : "left",
          o = this.position.x + t[o];
        (e[r] = this.getXValue(o)), (e[n] = "");
        (o = i ? "paddingTop" : "paddingBottom"),
          (n = i ? "top" : "bottom"),
          (i = i ? "bottom" : "top"),
          (o = this.position.y + t[o]);
        (e[n] = this.getYValue(o)),
          (e[i] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (t.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (t.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (t._transitionTo = function (t, e) {
        this.getPosition();
        var n = this.position.x,
          i = this.position.y,
          o = t == this.position.x && e == this.position.y;
        this.setPosition(t, e),
          !o || this.isTransitioning
            ? ((n = t - n),
              (e -= i),
              ((i = {}).transform = this.getTranslate(n, e)),
              this.transition({
                to: i,
                onTransitionEnd: { transform: this.layoutPosition },
                isCleaning: !0,
              }))
            : this.layoutPosition();
      }),
      (t.getTranslate = function (t, e) {
        return (
          "translate3d(" +
          (t = this.layout._getOption("originLeft") ? t : -t) +
          "px, " +
          (e = this.layout._getOption("originTop") ? e : -e) +
          "px, 0)"
        );
      }),
      (t.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (t.moveTo = t._transitionTo),
      (t.setPosition = function (t, e) {
        (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
      }),
      (t._nonTransition = function (t) {
        for (var e in (this.css(t.to),
        t.isCleaning && this._removeStyles(t.to),
        t.onTransitionEnd))
          t.onTransitionEnd[e].call(this);
      }),
      (t.transition = function (t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
          var e,
            n = this._transn;
          for (e in t.onTransitionEnd) n.onEnd[e] = t.onTransitionEnd[e];
          for (e in t.to)
            (n.ingProperties[e] = !0), t.isCleaning && (n.clean[e] = !0);
          t.from && (this.css(t.from), this.element.offsetHeight, 0),
            this.enableTransition(t.to),
            this.css(t.to),
            (this.isTransitioning = !0);
        } else this._nonTransition(t);
      });
    var l =
      "opacity," +
      o.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    (t.enableTransition = function () {
      var t;
      this.isTransitioning ||
        ((t =
          "number" == typeof (t = this.layout.options.transitionDuration)
            ? t + "ms"
            : t),
        this.css({
          transitionProperty: l,
          transitionDuration: t,
          transitionDelay: this.staggerDelay || 0,
        }),
        this.element.addEventListener(r, this, !1));
    }),
      (t.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (t.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var u = { "-webkit-transform": "transform" };
    (t.ontransitionend = function (t) {
      var e, n;
      t.target === this.element &&
        ((e = this._transn),
        (n = u[t.propertyName] || t.propertyName),
        delete e.ingProperties[n],
        (function (t) {
          for (var e in t) return;
          return 1;
        })(e.ingProperties) && this.disableTransition(),
        n in e.clean &&
          ((this.element.style[t.propertyName] = ""), delete e.clean[n]),
        n in e.onEnd && (e.onEnd[n].call(this), delete e.onEnd[n]),
        this.emitEvent("transitionEnd", [this]));
    }),
      (t.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(r, this, !1),
          (this.isTransitioning = !1);
      }),
      (t._removeStyles = function (t) {
        var e,
          n = {};
        for (e in t) n[e] = "";
        this.css(n);
      });
    var c = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (t.removeTransitionStyles = function () {
        this.css(c);
      }),
      (t.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (t.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (t.remove = function () {
        i && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            this.hide())
          : this.removeElem();
      }),
      (t.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {};
        (e[this.getHideRevealTransitionEndProperty("visibleStyle")] =
          this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (t.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (t.getHideRevealTransitionEndProperty = function (t) {
        var e,
          t = this.layout.options[t];
        if (t.opacity) return "opacity";
        for (e in t) return e;
      }),
      (t.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {};
        (e[this.getHideRevealTransitionEndProperty("hiddenStyle")] =
          this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (t.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (t.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      a
    );
  }),
  (function (o, r) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (t, e, n, i) {
            return r(o, t, e, n, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = r(
          o,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (o.Outlayer = r(
          o,
          o.EvEmitter,
          o.getSize,
          o.fizzyUIUtils,
          o.Outlayer.Item
        ));
  })(window, function (t, e, o, i, r) {
    "use strict";
    function n() {}
    var s = t.console,
      a = t.jQuery,
      l = 0,
      u = {};
    function c(t, e) {
      var n = i.getQueryElement(t);
      n
        ? ((this.element = n),
          a && (this.$element = a(this.element)),
          (this.options = i.extend({}, this.constructor.defaults)),
          this.option(e),
          (e = ++l),
          (this.element.outlayerGUID = e),
          (u[e] = this)._create(),
          this._getOption("initLayout") && this.layout())
        : s &&
          s.error(
            "Bad element for " + this.constructor.namespace + ": " + (n || t)
          );
    }
    (c.namespace = "outlayer"),
      (c.Item = r),
      (c.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var f = c.prototype;
    function d(t) {
      function e() {
        t.apply(this, arguments);
      }
      return ((e.prototype = Object.create(t.prototype)).constructor = e);
    }
    i.extend(f, e.prototype),
      (f.option = function (t) {
        i.extend(this.options, t);
      }),
      (f._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (c.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (f._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          i.extend(this.element.style, this.options.containerStyle),
          this._getOption("resize") && this.bindResize();
      }),
      (f.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (f._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            n = this.constructor.Item,
            i = [],
            o = 0;
          o < e.length;
          o++
        ) {
          var r = new n(e[o], this);
          i.push(r);
        }
        return i;
      }),
      (f._filterFindItemElements = function (t) {
        return i.filterFindElements(t, this.options.itemSelector);
      }),
      (f.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (f.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          t = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, t), (this._isLayoutInited = !0);
      }),
      (f._init = f.layout),
      (f._resetLayout = function () {
        this.getSize();
      }),
      (f.getSize = function () {
        this.size = o(this.element);
      }),
      (f._getMeasurement = function (t, e) {
        var n,
          i = this.options[t];
        i
          ? ("string" == typeof i
              ? (n = this.element.querySelector(i))
              : i instanceof HTMLElement && (n = i),
            (this[t] = n ? o(n)[e] : i))
          : (this[t] = 0);
      }),
      (f.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (f._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (f._layoutItems = function (t, n) {
        var i;
        this._emitCompleteOnItems("layout", t),
          t &&
            t.length &&
            ((i = []),
            t.forEach(function (t) {
              var e = this._getItemLayoutPosition(t);
              (e.item = t), (e.isInstant = n || t.isLayoutInstant), i.push(e);
            }, this),
            this._processLayoutQueue(i));
      }),
      (f._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (f._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (f.updateStagger = function () {
        var t = this.options.stagger;
        if (null != t)
          return (
            (this.stagger = (function (t) {
              if ("number" == typeof t) return t;
              var e = t.match(/(^\d*\.?\d*)(\w*)/),
                t = e && e[1],
                e = e && e[2];
              if (!t.length) return 0;
              t = parseFloat(t);
              e = h[e] || 1;
              return t * e;
            })(t)),
            this.stagger
          );
        this.stagger = 0;
      }),
      (f._positionItem = function (t, e, n, i, o) {
        i ? t.goTo(e, n) : (t.stagger(o * this.stagger), t.moveTo(e, n));
      }),
      (f._postLayout = function () {
        this.resizeContainer();
      }),
      (f.resizeContainer = function () {
        var t;
        !this._getOption("resizeContainer") ||
          ((t = this._getContainerSize()) &&
            (this._setContainerMeasure(t.width, !0),
            this._setContainerMeasure(t.height, !1)));
      }),
      (f._getContainerSize = n),
      (f._setContainerMeasure = function (t, e) {
        var n;
        void 0 !== t &&
          ((n = this.size).isBorderBox &&
            (t += e
              ? n.paddingLeft +
                n.paddingRight +
                n.borderLeftWidth +
                n.borderRightWidth
              : n.paddingBottom +
                n.paddingTop +
                n.borderTopWidth +
                n.borderBottomWidth),
          (t = Math.max(t, 0)),
          (this.element.style[e ? "width" : "height"] = t + "px"));
      }),
      (f._emitCompleteOnItems = function (e, t) {
        var n = this;
        function i() {
          n.dispatchEvent(e + "Complete", null, [t]);
        }
        var o,
          r = t.length;
        function s() {
          ++o == r && i();
        }
        t && r
          ? ((o = 0),
            t.forEach(function (t) {
              t.once(e, s);
            }))
          : i();
      }),
      (f.dispatchEvent = function (t, e, n) {
        var i = e ? [e].concat(n) : n;
        this.emitEvent(t, i),
          a &&
            ((this.$element = this.$element || a(this.element)),
            e
              ? (((e = a.Event(e)).type = t), this.$element.trigger(e, n))
              : this.$element.trigger(t, n));
      }),
      (f.ignore = function (t) {
        t = this.getItem(t);
        t && (t.isIgnored = !0);
      }),
      (f.unignore = function (t) {
        t = this.getItem(t);
        t && delete t.isIgnored;
      }),
      (f.stamp = function (t) {
        (t = this._find(t)) &&
          ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
      }),
      (f.unstamp = function (t) {
        (t = this._find(t)) &&
          t.forEach(function (t) {
            i.removeFrom(this.stamps, t), this.unignore(t);
          }, this);
      }),
      (f._find = function (t) {
        if (t)
          return (
            "string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = i.makeArray(t))
          );
      }),
      (f._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (f._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (f._manageStamp = n),
      (f._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          n = this._boundingRect,
          t = o(t);
        return {
          left: e.left - n.left - t.marginLeft,
          top: e.top - n.top - t.marginTop,
          right: n.right - e.right - t.marginRight,
          bottom: n.bottom - e.bottom - t.marginBottom,
        };
      }),
      (f.handleEvent = i.handleEvent),
      (f.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (f.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (f.onresize = function () {
        this.resize();
      }),
      i.debounceMethod(c, "onresize", 100),
      (f.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (f.needsResizeLayout = function () {
        var t = o(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth;
      }),
      (f.addItems = function (t) {
        t = this._itemize(t);
        return t.length && (this.items = this.items.concat(t)), t;
      }),
      (f.appended = function (t) {
        t = this.addItems(t);
        t.length && (this.layoutItems(t, !0), this.reveal(t));
      }),
      (f.prepended = function (t) {
        var e = this._itemize(t);
        e.length &&
          ((t = this.items.slice(0)),
          (this.items = e.concat(t)),
          this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(e, !0),
          this.reveal(e),
          this.layoutItems(t));
      }),
      (f.reveal = function (t) {
        var n;
        this._emitCompleteOnItems("reveal", t),
          t &&
            t.length &&
            ((n = this.updateStagger()),
            t.forEach(function (t, e) {
              t.stagger(e * n), t.reveal();
            }));
      }),
      (f.hide = function (t) {
        var n;
        this._emitCompleteOnItems("hide", t),
          t &&
            t.length &&
            ((n = this.updateStagger()),
            t.forEach(function (t, e) {
              t.stagger(e * n), t.hide();
            }));
      }),
      (f.revealItemElements = function (t) {
        t = this.getItems(t);
        this.reveal(t);
      }),
      (f.hideItemElements = function (t) {
        t = this.getItems(t);
        this.hide(t);
      }),
      (f.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var n = this.items[e];
          if (n.element == t) return n;
        }
      }),
      (f.getItems = function (t) {
        t = i.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            t = this.getItem(t);
            t && e.push(t);
          }, this),
          e
        );
      }),
      (f.remove = function (t) {
        t = this.getItems(t);
        this._emitCompleteOnItems("remove", t),
          t &&
            t.length &&
            t.forEach(function (t) {
              t.remove(), i.removeFrom(this.items, t);
            }, this);
      }),
      (f.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        t = this.element.outlayerGUID;
        delete u[t],
          delete this.element.outlayerGUID,
          a && a.removeData(this.element, this.constructor.namespace);
      }),
      (c.data = function (t) {
        t = (t = i.getQueryElement(t)) && t.outlayerGUID;
        return t && u[t];
      }),
      (c.create = function (t, e) {
        var n = d(c);
        return (
          (n.defaults = i.extend({}, c.defaults)),
          i.extend(n.defaults, e),
          (n.compatOptions = i.extend({}, c.compatOptions)),
          (n.namespace = t),
          (n.data = c.data),
          (n.Item = d(r)),
          i.htmlInit(n, t),
          a && a.bridget && a.bridget(t, n),
          n
        );
      });
    var h = { ms: 1, s: 1e3 };
    return (c.Item = r), c;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(["outlayer/outlayer", "get-size/get-size"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, a) {
    var e = t.create("masonry");
    e.compatOptions.fitWidth = "isFitWidth";
    t = e.prototype;
    return (
      (t._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (t.measureColumns = function () {
        this.getContainerWidth(),
          this.columnWidth ||
            ((n = (e = this.items[0]) && e.element),
            (this.columnWidth = (n && a(n).outerWidth) || this.containerWidth));
        var t = (this.columnWidth += this.gutter),
          e = this.containerWidth + this.gutter,
          n = e / t,
          t = t - (e % t),
          n = Math[t && t < 1 ? "round" : "floor"](n);
        this.cols = Math.max(n, 1);
      }),
      (t.getContainerWidth = function () {
        var t = this._getOption("fitWidth")
            ? this.element.parentNode
            : this.element,
          t = a(t);
        this.containerWidth = t && t.innerWidth;
      }),
      (t._getItemLayoutPosition = function (t) {
        t.getSize();
        for (
          var e = t.size.outerWidth % this.columnWidth,
            n = Math[e && e < 1 ? "round" : "ceil"](
              t.size.outerWidth / this.columnWidth
            ),
            n = Math.min(n, this.cols),
            i = this[
              this.options.horizontalOrder
                ? "_getHorizontalColPosition"
                : "_getTopColPosition"
            ](n, t),
            e = { x: this.columnWidth * i.col, y: i.y },
            o = i.y + t.size.outerHeight,
            r = n + i.col,
            s = i.col;
          s < r;
          s++
        )
          this.colYs[s] = o;
        return e;
      }),
      (t._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          t = Math.min.apply(Math, e);
        return { col: e.indexOf(t), y: t };
      }),
      (t._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], n = this.cols + 1 - t, i = 0; i < n; i++)
          e[i] = this._getColGroupY(i, t);
        return e;
      }),
      (t._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        e = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, e);
      }),
      (t._getHorizontalColPosition = function (t, e) {
        var n = this.horizontalColIndex % this.cols,
          n = 1 < t && n + t > this.cols ? 0 : n,
          e = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = e ? n + t : this.horizontalColIndex),
          { col: n, y: this._getColGroupY(n, t) }
        );
      }),
      (t._manageStamp = function (t) {
        var e = a(t),
          n = this._getElementOffset(t),
          i = this._getOption("originLeft") ? n.left : n.right,
          t = i + e.outerWidth,
          i = Math.floor(i / this.columnWidth),
          i = Math.max(0, i),
          o = Math.floor(t / this.columnWidth);
        (o -= t % this.columnWidth ? 0 : 1), (o = Math.min(this.cols - 1, o));
        for (
          var r =
              (this._getOption("originTop") ? n.top : n.bottom) + e.outerHeight,
            s = i;
          s <= o;
          s++
        )
          this.colYs[s] = Math.max(r, this.colYs[s]);
      }),
      (t._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (t._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (t.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      e
    );
  }),
  (function (e, n) {
    "function" == typeof define && define.amd
      ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
          return n(e, t);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = n(e, require("jquery")))
      : (e.jQueryBridget = n(e, e.jQuery));
  })(window, function (t, e) {
    "use strict";
    var n = Array.prototype.slice,
      i = t.console,
      f =
        void 0 === i
          ? function () {}
          : function (t) {
              i.error(t);
            };
    function o(l, u, c) {
      (c = c || e || t.jQuery) &&
        (u.prototype.option ||
          (u.prototype.option = function (t) {
            c.isPlainObject(t) &&
              (this.options = c.extend(!0, this.options, t));
          }),
        (c.fn[l] = function (t) {
          if ("string" != typeof t)
            return (
              (a = t),
              this.each(function (t, e) {
                var n = c.data(e, l);
                n
                  ? (n.option(a), n._init())
                  : ((n = new u(e, a)), c.data(e, l, n));
              }),
              this
            );
          var i,
            o,
            r,
            s,
            a,
            e = n.call(arguments, 1);
          return (
            (o = e),
            (s = "$()." + l + '("' + (i = t) + '")'),
            (t = this).each(function (t, e) {
              var n = c.data(e, l);
              n
                ? (e = n[i]) && "_" != i.charAt(0)
                  ? ((n = e.apply(n, o)), (r = void 0 === r ? n : r))
                  : f(s + " is not a valid method")
                : f(l + " not initialized. Cannot call methods, i.e. " + s);
            }),
            void 0 !== r ? r : t
          );
        }),
        r(c));
    }
    function r(t) {
      !t || (t && t.bridget) || (t.bridget = o);
    }
    return r(e || t.jQuery), o;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var n = (this._events = this._events || {}),
            t = (n[t] = n[t] || []);
          return -1 == t.indexOf(e) && t.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var n = (this._onceEvents = this._onceEvents || {});
          return ((n[t] = n[t] || {})[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        t = this._events && this._events[t];
        if (t && t.length) {
          e = t.indexOf(e);
          return -1 != e && t.splice(e, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var n = this._events && this._events[t];
        if (n && n.length) {
          (n = n.slice(0)), (e = e || []);
          for (
            var i = this._onceEvents && this._onceEvents[t], o = 0;
            o < n.length;
            o++
          ) {
            var r = n[o];
            i && i[r] && (this.off(t, r), delete i[r]), r.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function h(t) {
      var e = parseFloat(t);
      return -1 == t.indexOf("%") && !isNaN(e) && e;
    }
    var e =
        "undefined" == typeof console
          ? function () {}
          : function (t) {
              console.error(t);
            },
      p = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      m = p.length;
    function g(t) {
      t = getComputedStyle(t);
      return (
        t ||
          e(
            "Style returned " +
              t +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        t
      );
    }
    var y,
      v = !1;
    function _(t) {
      if (
        (v ||
          ((v = !0),
          ((d = document.createElement("div")).style.width = "200px"),
          (d.style.padding = "1px 2px 3px 4px"),
          (d.style.borderStyle = "solid"),
          (d.style.borderWidth = "1px 2px 3px 4px"),
          (d.style.boxSizing = "border-box"),
          (f = document.body || document.documentElement).appendChild(d),
          (c = g(d)),
          (y = 200 == Math.round(h(c.width))),
          (_.isBoxSizeOuter = y),
          f.removeChild(d)),
        "string" == typeof t && (t = document.querySelector(t)),
        t && "object" == typeof t && t.nodeType)
      ) {
        var e = g(t);
        if ("none" == e.display)
          return (function () {
            for (
              var t = {
                  width: 0,
                  height: 0,
                  innerWidth: 0,
                  innerHeight: 0,
                  outerWidth: 0,
                  outerHeight: 0,
                },
                e = 0;
              e < m;
              e++
            )
              t[p[e]] = 0;
            return t;
          })();
        var n = {};
        (n.width = t.offsetWidth), (n.height = t.offsetHeight);
        for (
          var i = (n.isBorderBox = "border-box" == e.boxSizing), o = 0;
          o < m;
          o++
        ) {
          var r = p[o],
            s = e[r],
            s = parseFloat(s);
          n[r] = isNaN(s) ? 0 : s;
        }
        var a = n.paddingLeft + n.paddingRight,
          l = n.paddingTop + n.paddingBottom,
          u = n.marginLeft + n.marginRight,
          c = n.marginTop + n.marginBottom,
          f = n.borderLeftWidth + n.borderRightWidth,
          d = n.borderTopWidth + n.borderBottomWidth,
          t = i && y,
          i = h(e.width);
        !1 !== i && (n.width = i + (t ? 0 : a + f));
        i = h(e.height);
        return (
          !1 !== i && (n.height = i + (t ? 0 : l + d)),
          (n.innerWidth = n.width - (a + f)),
          (n.innerHeight = n.height - (l + d)),
          (n.outerWidth = n.width + u),
          (n.outerHeight = n.height + c),
          n
        );
      }
    }
    return _;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var n = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
        var i = e[n] + "MatchesSelector";
        if (t[i]) return i;
      }
    })();
    return function (t, e) {
      return t[n](e);
    };
  }),
  (function (e, n) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (t) {
            return n(e, t);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = n(e, require("desandro-matches-selector")))
      : (e.fizzyUIUtils = n(e, e.matchesSelector));
  })(window, function (n, r) {
    var u = {
        extend: function (t, e) {
          for (var n in e) t[n] = e[n];
          return t;
        },
        modulo: function (t, e) {
          return ((t % e) + e) % e;
        },
      },
      e = Array.prototype.slice;
    (u.makeArray = function (t) {
      return Array.isArray(t)
        ? t
        : null == t
        ? []
        : "object" == typeof t && "number" == typeof t.length
        ? e.call(t)
        : [t];
    }),
      (u.removeFrom = function (t, e) {
        e = t.indexOf(e);
        -1 != e && t.splice(e, 1);
      }),
      (u.getParent = function (t, e) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), r(t, e))) return t;
      }),
      (u.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (u.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (u.filterFindElements = function (t, i) {
        t = u.makeArray(t);
        var o = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement)
              if (i) {
                r(t, i) && o.push(t);
                for (var e = t.querySelectorAll(i), n = 0; n < e.length; n++)
                  o.push(e[n]);
              } else o.push(t);
          }),
          o
        );
      }),
      (u.debounceMethod = function (t, e, i) {
        i = i || 100;
        var o = t.prototype[e],
          r = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[r];
          clearTimeout(t);
          var e = arguments,
            n = this;
          this[r] = setTimeout(function () {
            o.apply(n, e), delete n[r];
          }, i);
        };
      }),
      (u.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (u.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, n) {
            return e + "-" + n;
          })
          .toLowerCase();
      });
    var c = n.console;
    return (
      (u.htmlInit = function (a, l) {
        u.docReady(function () {
          var t = u.toDashed(l),
            o = "data-" + t,
            e = document.querySelectorAll("[" + o + "]"),
            t = document.querySelectorAll(".js-" + t),
            t = u.makeArray(e).concat(u.makeArray(t)),
            r = o + "-options",
            s = n.jQuery;
          t.forEach(function (e) {
            var t,
              n = e.getAttribute(o) || e.getAttribute(r);
            try {
              t = n && JSON.parse(n);
            } catch (t) {
              return void (
                c &&
                c.error("Error parsing " + o + " on " + e.className + ": " + t)
              );
            }
            var i = new a(e, t);
            s && s.data(e, l, i);
          });
        });
      }),
      u
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    var n = document.documentElement.style,
      i = "string" == typeof n.transition ? "transition" : "WebkitTransition",
      o = "string" == typeof n.transform ? "transform" : "WebkitTransform",
      r = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[i],
      s = {
        transform: o,
        transition: i,
        transitionDuration: i + "Duration",
        transitionProperty: i + "Property",
        transitionDelay: i + "Delay",
      };
    function a(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    t = a.prototype = Object.create(t.prototype);
    (t.constructor = a),
      (t._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (t.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (t.getSize = function () {
        this.size = e(this.element);
      }),
      (t.css = function (t) {
        var e,
          n = this.element.style;
        for (e in t) n[s[e] || e] = t[e];
      }),
      (t.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop"),
          i = t[e ? "left" : "right"],
          o = t[n ? "top" : "bottom"],
          r = parseFloat(i),
          s = parseFloat(o),
          t = this.layout.size;
        -1 != i.indexOf("%") && (r = (r / 100) * t.width),
          -1 != o.indexOf("%") && (s = (s / 100) * t.height),
          (r = isNaN(r) ? 0 : r),
          (s = isNaN(s) ? 0 : s),
          (r -= e ? t.paddingLeft : t.paddingRight),
          (s -= n ? t.paddingTop : t.paddingBottom),
          (this.position.x = r),
          (this.position.y = s);
      }),
      (t.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          n = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          o = n ? "paddingLeft" : "paddingRight",
          r = n ? "left" : "right",
          n = n ? "right" : "left",
          o = this.position.x + t[o];
        (e[r] = this.getXValue(o)), (e[n] = "");
        (o = i ? "paddingTop" : "paddingBottom"),
          (n = i ? "top" : "bottom"),
          (i = i ? "bottom" : "top"),
          (o = this.position.y + t[o]);
        (e[n] = this.getYValue(o)),
          (e[i] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (t.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (t.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (t._transitionTo = function (t, e) {
        this.getPosition();
        var n = this.position.x,
          i = this.position.y,
          o = t == this.position.x && e == this.position.y;
        this.setPosition(t, e),
          !o || this.isTransitioning
            ? ((n = t - n),
              (e -= i),
              ((i = {}).transform = this.getTranslate(n, e)),
              this.transition({
                to: i,
                onTransitionEnd: { transform: this.layoutPosition },
                isCleaning: !0,
              }))
            : this.layoutPosition();
      }),
      (t.getTranslate = function (t, e) {
        return (
          "translate3d(" +
          (t = this.layout._getOption("originLeft") ? t : -t) +
          "px, " +
          (e = this.layout._getOption("originTop") ? e : -e) +
          "px, 0)"
        );
      }),
      (t.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (t.moveTo = t._transitionTo),
      (t.setPosition = function (t, e) {
        (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
      }),
      (t._nonTransition = function (t) {
        for (var e in (this.css(t.to),
        t.isCleaning && this._removeStyles(t.to),
        t.onTransitionEnd))
          t.onTransitionEnd[e].call(this);
      }),
      (t.transition = function (t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
          var e,
            n = this._transn;
          for (e in t.onTransitionEnd) n.onEnd[e] = t.onTransitionEnd[e];
          for (e in t.to)
            (n.ingProperties[e] = !0), t.isCleaning && (n.clean[e] = !0);
          t.from && (this.css(t.from), this.element.offsetHeight, 0),
            this.enableTransition(t.to),
            this.css(t.to),
            (this.isTransitioning = !0);
        } else this._nonTransition(t);
      });
    var l =
      "opacity," +
      o.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    (t.enableTransition = function () {
      var t;
      this.isTransitioning ||
        ((t =
          "number" == typeof (t = this.layout.options.transitionDuration)
            ? t + "ms"
            : t),
        this.css({
          transitionProperty: l,
          transitionDuration: t,
          transitionDelay: this.staggerDelay || 0,
        }),
        this.element.addEventListener(r, this, !1));
    }),
      (t.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (t.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var u = { "-webkit-transform": "transform" };
    (t.ontransitionend = function (t) {
      var e, n;
      t.target === this.element &&
        ((e = this._transn),
        (n = u[t.propertyName] || t.propertyName),
        delete e.ingProperties[n],
        (function (t) {
          for (var e in t) return;
          return 1;
        })(e.ingProperties) && this.disableTransition(),
        n in e.clean &&
          ((this.element.style[t.propertyName] = ""), delete e.clean[n]),
        n in e.onEnd && (e.onEnd[n].call(this), delete e.onEnd[n]),
        this.emitEvent("transitionEnd", [this]));
    }),
      (t.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(r, this, !1),
          (this.isTransitioning = !1);
      }),
      (t._removeStyles = function (t) {
        var e,
          n = {};
        for (e in t) n[e] = "";
        this.css(n);
      });
    var c = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (t.removeTransitionStyles = function () {
        this.css(c);
      }),
      (t.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (t.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (t.remove = function () {
        i && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            this.hide())
          : this.removeElem();
      }),
      (t.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {};
        (e[this.getHideRevealTransitionEndProperty("visibleStyle")] =
          this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (t.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (t.getHideRevealTransitionEndProperty = function (t) {
        var e,
          t = this.layout.options[t];
        if (t.opacity) return "opacity";
        for (e in t) return e;
      }),
      (t.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {};
        (e[this.getHideRevealTransitionEndProperty("hiddenStyle")] =
          this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (t.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (t.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      a
    );
  }),
  (function (o, r) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (t, e, n, i) {
            return r(o, t, e, n, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = r(
          o,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (o.Outlayer = r(
          o,
          o.EvEmitter,
          o.getSize,
          o.fizzyUIUtils,
          o.Outlayer.Item
        ));
  })(window, function (t, e, o, i, r) {
    "use strict";
    function n() {}
    var s = t.console,
      a = t.jQuery,
      l = 0,
      u = {};
    function c(t, e) {
      var n = i.getQueryElement(t);
      n
        ? ((this.element = n),
          a && (this.$element = a(this.element)),
          (this.options = i.extend({}, this.constructor.defaults)),
          this.option(e),
          (e = ++l),
          (this.element.outlayerGUID = e),
          (u[e] = this)._create(),
          this._getOption("initLayout") && this.layout())
        : s &&
          s.error(
            "Bad element for " + this.constructor.namespace + ": " + (n || t)
          );
    }
    (c.namespace = "outlayer"),
      (c.Item = r),
      (c.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var f = c.prototype;
    function d(t) {
      function e() {
        t.apply(this, arguments);
      }
      return ((e.prototype = Object.create(t.prototype)).constructor = e);
    }
    i.extend(f, e.prototype),
      (f.option = function (t) {
        i.extend(this.options, t);
      }),
      (f._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (c.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (f._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          i.extend(this.element.style, this.options.containerStyle),
          this._getOption("resize") && this.bindResize();
      }),
      (f.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (f._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            n = this.constructor.Item,
            i = [],
            o = 0;
          o < e.length;
          o++
        ) {
          var r = new n(e[o], this);
          i.push(r);
        }
        return i;
      }),
      (f._filterFindItemElements = function (t) {
        return i.filterFindElements(t, this.options.itemSelector);
      }),
      (f.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (f.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          t = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, t), (this._isLayoutInited = !0);
      }),
      (f._init = f.layout),
      (f._resetLayout = function () {
        this.getSize();
      }),
      (f.getSize = function () {
        this.size = o(this.element);
      }),
      (f._getMeasurement = function (t, e) {
        var n,
          i = this.options[t];
        i
          ? ("string" == typeof i
              ? (n = this.element.querySelector(i))
              : i instanceof HTMLElement && (n = i),
            (this[t] = n ? o(n)[e] : i))
          : (this[t] = 0);
      }),
      (f.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (f._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (f._layoutItems = function (t, n) {
        var i;
        this._emitCompleteOnItems("layout", t),
          t &&
            t.length &&
            ((i = []),
            t.forEach(function (t) {
              var e = this._getItemLayoutPosition(t);
              (e.item = t), (e.isInstant = n || t.isLayoutInstant), i.push(e);
            }, this),
            this._processLayoutQueue(i));
      }),
      (f._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (f._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (f.updateStagger = function () {
        var t = this.options.stagger;
        if (null != t)
          return (
            (this.stagger = (function (t) {
              if ("number" == typeof t) return t;
              var e = t.match(/(^\d*\.?\d*)(\w*)/),
                t = e && e[1],
                e = e && e[2];
              if (!t.length) return 0;
              t = parseFloat(t);
              e = h[e] || 1;
              return t * e;
            })(t)),
            this.stagger
          );
        this.stagger = 0;
      }),
      (f._positionItem = function (t, e, n, i, o) {
        i ? t.goTo(e, n) : (t.stagger(o * this.stagger), t.moveTo(e, n));
      }),
      (f._postLayout = function () {
        this.resizeContainer();
      }),
      (f.resizeContainer = function () {
        var t;
        !this._getOption("resizeContainer") ||
          ((t = this._getContainerSize()) &&
            (this._setContainerMeasure(t.width, !0),
            this._setContainerMeasure(t.height, !1)));
      }),
      (f._getContainerSize = n),
      (f._setContainerMeasure = function (t, e) {
        var n;
        void 0 !== t &&
          ((n = this.size).isBorderBox &&
            (t += e
              ? n.paddingLeft +
                n.paddingRight +
                n.borderLeftWidth +
                n.borderRightWidth
              : n.paddingBottom +
                n.paddingTop +
                n.borderTopWidth +
                n.borderBottomWidth),
          (t = Math.max(t, 0)),
          (this.element.style[e ? "width" : "height"] = t + "px"));
      }),
      (f._emitCompleteOnItems = function (e, t) {
        var n = this;
        function i() {
          n.dispatchEvent(e + "Complete", null, [t]);
        }
        var o,
          r = t.length;
        function s() {
          ++o == r && i();
        }
        t && r
          ? ((o = 0),
            t.forEach(function (t) {
              t.once(e, s);
            }))
          : i();
      }),
      (f.dispatchEvent = function (t, e, n) {
        var i = e ? [e].concat(n) : n;
        this.emitEvent(t, i),
          a &&
            ((this.$element = this.$element || a(this.element)),
            e
              ? (((e = a.Event(e)).type = t), this.$element.trigger(e, n))
              : this.$element.trigger(t, n));
      }),
      (f.ignore = function (t) {
        t = this.getItem(t);
        t && (t.isIgnored = !0);
      }),
      (f.unignore = function (t) {
        t = this.getItem(t);
        t && delete t.isIgnored;
      }),
      (f.stamp = function (t) {
        (t = this._find(t)) &&
          ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
      }),
      (f.unstamp = function (t) {
        (t = this._find(t)) &&
          t.forEach(function (t) {
            i.removeFrom(this.stamps, t), this.unignore(t);
          }, this);
      }),
      (f._find = function (t) {
        if (t)
          return (
            "string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = i.makeArray(t))
          );
      }),
      (f._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (f._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (f._manageStamp = n),
      (f._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          n = this._boundingRect,
          t = o(t);
        return {
          left: e.left - n.left - t.marginLeft,
          top: e.top - n.top - t.marginTop,
          right: n.right - e.right - t.marginRight,
          bottom: n.bottom - e.bottom - t.marginBottom,
        };
      }),
      (f.handleEvent = i.handleEvent),
      (f.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (f.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (f.onresize = function () {
        this.resize();
      }),
      i.debounceMethod(c, "onresize", 100),
      (f.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (f.needsResizeLayout = function () {
        var t = o(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth;
      }),
      (f.addItems = function (t) {
        t = this._itemize(t);
        return t.length && (this.items = this.items.concat(t)), t;
      }),
      (f.appended = function (t) {
        t = this.addItems(t);
        t.length && (this.layoutItems(t, !0), this.reveal(t));
      }),
      (f.prepended = function (t) {
        var e = this._itemize(t);
        e.length &&
          ((t = this.items.slice(0)),
          (this.items = e.concat(t)),
          this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(e, !0),
          this.reveal(e),
          this.layoutItems(t));
      }),
      (f.reveal = function (t) {
        var n;
        this._emitCompleteOnItems("reveal", t),
          t &&
            t.length &&
            ((n = this.updateStagger()),
            t.forEach(function (t, e) {
              t.stagger(e * n), t.reveal();
            }));
      }),
      (f.hide = function (t) {
        var n;
        this._emitCompleteOnItems("hide", t),
          t &&
            t.length &&
            ((n = this.updateStagger()),
            t.forEach(function (t, e) {
              t.stagger(e * n), t.hide();
            }));
      }),
      (f.revealItemElements = function (t) {
        t = this.getItems(t);
        this.reveal(t);
      }),
      (f.hideItemElements = function (t) {
        t = this.getItems(t);
        this.hide(t);
      }),
      (f.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var n = this.items[e];
          if (n.element == t) return n;
        }
      }),
      (f.getItems = function (t) {
        t = i.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            t = this.getItem(t);
            t && e.push(t);
          }, this),
          e
        );
      }),
      (f.remove = function (t) {
        t = this.getItems(t);
        this._emitCompleteOnItems("remove", t),
          t &&
            t.length &&
            t.forEach(function (t) {
              t.remove(), i.removeFrom(this.items, t);
            }, this);
      }),
      (f.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        t = this.element.outlayerGUID;
        delete u[t],
          delete this.element.outlayerGUID,
          a && a.removeData(this.element, this.constructor.namespace);
      }),
      (c.data = function (t) {
        t = (t = i.getQueryElement(t)) && t.outlayerGUID;
        return t && u[t];
      }),
      (c.create = function (t, e) {
        var n = d(c);
        return (
          (n.defaults = i.extend({}, c.defaults)),
          i.extend(n.defaults, e),
          (n.compatOptions = i.extend({}, c.compatOptions)),
          (n.namespace = t),
          (n.data = c.data),
          (n.Item = d(r)),
          i.htmlInit(n, t),
          a && a.bridget && a.bridget(t, n),
          n
        );
      });
    var h = { ms: 1, s: 1e3 };
    return (c.Item = r), c;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var n = (e.prototype = Object.create(t.Item.prototype)),
      i = n._create;
    (n._create = function () {
      (this.id = this.layout.itemGUID++), i.call(this), (this.sortData = {});
    }),
      (n.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var t,
            e = this.layout.options.getSortData,
            n = this.layout._sorters;
          for (t in e) {
            var i = n[t];
            this.sortData[t] = i(this.element, this);
          }
        }
      });
    var o = n.destroy;
    return (
      (n.destroy = function () {
        o.apply(this, arguments), this.css({ display: "" });
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (e, n) {
    "use strict";
    function i(t) {
      (this.isotope = t) &&
        ((this.options = t.options[this.namespace]),
        (this.element = t.element),
        (this.items = t.filteredItems),
        (this.size = t.size));
    }
    var o = i.prototype;
    return (
      [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ].forEach(function (t) {
        o[t] = function () {
          return n.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (o.needsVerticalResizeLayout = function () {
        var t = e(this.isotope.element);
        return (
          this.isotope.size &&
          t &&
          t.innerHeight != this.isotope.size.innerHeight
        );
      }),
      (o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (o.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (o.getSegmentSize = function (t, e) {
        var n = t + e,
          i = "outer" + e;
        this._getMeasurement(n, i),
          this[n] ||
            ((t = this.getFirstItemSize()),
            (this[n] = (t && t[i]) || this.isotope.size["inner" + e]));
      }),
      (o.getFirstItemSize = function () {
        var t = this.isotope.filteredItems[0];
        return t && t.element && e(t.element);
      }),
      (o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (o.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (i.modes = {}),
      (i.create = function (t, e) {
        function n() {
          i.apply(this, arguments);
        }
        return (
          ((n.prototype = Object.create(o)).constructor = n),
          e && (n.options = e),
          (i.modes[(n.prototype.namespace = t)] = n)
        );
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "masonry-layout/masonry",
          ["outlayer/outlayer", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, a) {
    var e = t.create("masonry");
    e.compatOptions.fitWidth = "isFitWidth";
    t = e.prototype;
    return (
      (t._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (t.measureColumns = function () {
        this.getContainerWidth(),
          this.columnWidth ||
            ((n = (e = this.items[0]) && e.element),
            (this.columnWidth = (n && a(n).outerWidth) || this.containerWidth));
        var t = (this.columnWidth += this.gutter),
          e = this.containerWidth + this.gutter,
          n = e / t,
          t = t - (e % t),
          n = Math[t && t < 1 ? "round" : "floor"](n);
        this.cols = Math.max(n, 1);
      }),
      (t.getContainerWidth = function () {
        var t = this._getOption("fitWidth")
            ? this.element.parentNode
            : this.element,
          t = a(t);
        this.containerWidth = t && t.innerWidth;
      }),
      (t._getItemLayoutPosition = function (t) {
        t.getSize();
        for (
          var e = t.size.outerWidth % this.columnWidth,
            n = Math[e && e < 1 ? "round" : "ceil"](
              t.size.outerWidth / this.columnWidth
            ),
            n = Math.min(n, this.cols),
            i = this[
              this.options.horizontalOrder
                ? "_getHorizontalColPosition"
                : "_getTopColPosition"
            ](n, t),
            e = { x: this.columnWidth * i.col, y: i.y },
            o = i.y + t.size.outerHeight,
            r = n + i.col,
            s = i.col;
          s < r;
          s++
        )
          this.colYs[s] = o;
        return e;
      }),
      (t._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          t = Math.min.apply(Math, e);
        return { col: e.indexOf(t), y: t };
      }),
      (t._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], n = this.cols + 1 - t, i = 0; i < n; i++)
          e[i] = this._getColGroupY(i, t);
        return e;
      }),
      (t._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        e = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, e);
      }),
      (t._getHorizontalColPosition = function (t, e) {
        var n = this.horizontalColIndex % this.cols,
          n = 1 < t && n + t > this.cols ? 0 : n,
          e = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = e ? n + t : this.horizontalColIndex),
          { col: n, y: this._getColGroupY(n, t) }
        );
      }),
      (t._manageStamp = function (t) {
        var e = a(t),
          n = this._getElementOffset(t),
          i = this._getOption("originLeft") ? n.left : n.right,
          t = i + e.outerWidth,
          i = Math.floor(i / this.columnWidth),
          i = Math.max(0, i),
          o = Math.floor(t / this.columnWidth);
        (o -= t % this.columnWidth ? 0 : 1), (o = Math.min(this.cols - 1, o));
        for (
          var r =
              (this._getOption("originTop") ? n.top : n.bottom) + e.outerHeight,
            s = i;
          s <= o;
          s++
        )
          this.colYs[s] = Math.max(r, this.colYs[s]);
      }),
      (t._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (t._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (t.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-modes/masonry",
          ["../layout-mode", "masonry-layout/masonry"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var n,
      t = t.create("masonry"),
      i = t.prototype,
      o = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (n in e.prototype) o[n] || (i[n] = e.prototype[n]);
    var r = i.measureColumns;
    i.measureColumns = function () {
      (this.items = this.isotope.filteredItems), r.call(this);
    };
    var s = i._getOption;
    return (
      (i._getOption = function (t) {
        return "fitWidth" == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : s.apply(this.isotope, arguments);
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      t = e.prototype;
    return (
      (t._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (t._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          n = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > n && ((this.x = 0), (this.y = this.maxY));
        n = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
          (this.x += e),
          n
        );
      }),
      (t._getContainerSize = function () {
        return { height: this.maxY };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
      t = e.prototype;
    return (
      (t._resetLayout = function () {
        this.y = 0;
      }),
      (t._getItemLayoutPosition = function (t) {
        t.getSize();
        var e =
            (this.isotope.size.innerWidth - t.size.outerWidth) *
            this.options.horizontalAlignment,
          n = this.y;
        return (this.y += t.size.outerHeight), { x: e, y: n };
      }),
      (t._getContainerSize = function () {
        return { height: this.y };
      }),
      e
    );
  }),
  (function (s, a) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope-layout/js/item",
            "isotope-layout/js/layout-mode",
            "isotope-layout/js/layout-modes/masonry",
            "isotope-layout/js/layout-modes/fit-rows",
            "isotope-layout/js/layout-modes/vertical",
          ],
          function (t, e, n, i, o, r) {
            return a(s, t, 0, n, i, o, r);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = a(
          s,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope-layout/js/item"),
          require("isotope-layout/js/layout-mode"),
          require("isotope-layout/js/layout-modes/masonry"),
          require("isotope-layout/js/layout-modes/fit-rows"),
          require("isotope-layout/js/layout-modes/vertical")
        ))
      : (s.Isotope = a(
          s,
          s.Outlayer,
          s.getSize,
          s.matchesSelector,
          s.fizzyUIUtils,
          s.Isotope.Item,
          s.Isotope.LayoutMode
        ));
  })(window, function (t, n, e, i, r, o, s) {
    var a = t.jQuery,
      l = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      u = n.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (u.Item = o), (u.LayoutMode = s);
    o = u.prototype;
    (o._create = function () {
      for (var t in ((this.itemGUID = 0),
      (this._sorters = {}),
      this._getSorters(),
      n.prototype._create.call(this),
      (this.modes = {}),
      (this.filteredItems = this.items),
      (this.sortHistory = ["original-order"]),
      s.modes))
        this._initLayoutMode(t);
    }),
      (o.reloadItems = function () {
        (this.itemGUID = 0), n.prototype.reloadItems.call(this);
      }),
      (o._itemize = function () {
        for (
          var t = n.prototype._itemize.apply(this, arguments), e = 0;
          e < t.length;
          e++
        )
          t[e].id = this.itemGUID++;
        return this._updateItemsSortData(t), t;
      }),
      (o._initLayoutMode = function (t) {
        var e = s.modes[t],
          n = this.options[t] || {};
        (this.options[t] = e.options ? r.extend(e.options, n) : n),
          (this.modes[t] = new e(this));
      }),
      (o.layout = function () {
        this._isLayoutInited || !this._getOption("initLayout")
          ? this._layout()
          : this.arrange();
      }),
      (o._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0);
      }),
      (o.arrange = function (t) {
        this.option(t), this._getIsInstant();
        t = this._filter(this.items);
        (this.filteredItems = t.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [t])
            : this._hideReveal(t),
          this._sort(),
          this._layout();
      }),
      (o._init = o.arrange),
      (o._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (o._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          t = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = t);
      }),
      (o._bindArrangeComplete = function () {
        var t,
          e,
          n,
          i = this;
        function o() {
          t &&
            e &&
            n &&
            i.dispatchEvent("arrangeComplete", null, [i.filteredItems]);
        }
        this.once("layoutComplete", function () {
          (t = !0), o();
        }),
          this.once("hideComplete", function () {
            (e = !0), o();
          }),
          this.once("revealComplete", function () {
            (n = !0), o();
          });
      }),
      (o._filter = function (t) {
        for (
          var e = (e = this.options.filter) || "*",
            n = [],
            i = [],
            o = [],
            r = this._getFilterTest(e),
            s = 0;
          s < t.length;
          s++
        ) {
          var a,
            l = t[s];
          l.isIgnored ||
            ((a = r(l)) && n.push(l),
            a && l.isHidden ? i.push(l) : a || l.isHidden || o.push(l));
        }
        return { matches: n, needReveal: i, needHide: o };
      }),
      (o._getFilterTest = function (e) {
        return a && this.options.isJQueryFiltering
          ? function (t) {
              return a(t.element).is(e);
            }
          : "function" == typeof e
          ? function (t) {
              return e(t.element);
            }
          : function (t) {
              return i(t.element, e);
            };
      }),
      (o.updateSortData = function (t) {
        t = t ? ((t = r.makeArray(t)), this.getItems(t)) : this.items;
        this._getSorters(), this._updateItemsSortData(t);
      }),
      (o._getSorters = function () {
        var t,
          e = this.options.getSortData;
        for (t in e) {
          var n = e[t];
          this._sorters[t] = c(n);
        }
      }),
      (o._updateItemsSortData = function (t) {
        for (var e = t && t.length, n = 0; e && n < e; n++)
          t[n].updateSortData();
      });
    var c = function (t) {
      if ("string" != typeof t) return t;
      var e = l(t).split(" "),
        n = e[0],
        i = n.match(/^\[(.+)\]$/),
        o = (function (e, n) {
          if (e)
            return function (t) {
              return t.getAttribute(e);
            };
          return function (t) {
            t = t.querySelector(n);
            return t && t.textContent;
          };
        })(i && i[1], n),
        r = u.sortDataParsers[e[1]];
      return (t = r
        ? function (t) {
            return t && r(o(t));
          }
        : function (t) {
            return t && o(t);
          });
    };
    (u.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (o._sort = function () {
        var t, s, a;
        this.options.sortBy &&
          ((t = r.makeArray(this.options.sortBy)),
          this._getIsSameSortBy(t) ||
            (this.sortHistory = t.concat(this.sortHistory)),
          (s = this.sortHistory),
          (a = this.options.sortAscending),
          (t = function (t, e) {
            for (var n = 0; n < s.length; n++) {
              var i = s[n],
                o = t.sortData[i],
                r = e.sortData[i];
              if (r < o || o < r)
                return (
                  (r < o ? 1 : -1) * ((void 0 !== a[i] ? a[i] : a) ? 1 : -1)
                );
            }
            return 0;
          }),
          this.filteredItems.sort(t));
      }),
      (o._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++)
          if (t[e] != this.sortHistory[e]) return !1;
        return !0;
      }),
      (o._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (o._resetLayout = function () {
        n.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (o._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (o._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (o._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (o.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (o.appended = function (t) {
        t = this.addItems(t);
        t.length &&
          ((t = this._filterRevealAdded(t)),
          (this.filteredItems = this.filteredItems.concat(t)));
      }),
      (o.prepended = function (t) {
        var e = this._itemize(t);
        e.length &&
          (this._resetLayout(),
          this._manageStamps(),
          (t = this._filterRevealAdded(e)),
          this.layoutItems(this.filteredItems),
          (this.filteredItems = t.concat(this.filteredItems)),
          (this.items = e.concat(this.items)));
      }),
      (o._filterRevealAdded = function (t) {
        t = this._filter(t);
        return (
          this.hide(t.needHide),
          this.reveal(t.matches),
          this.layoutItems(t.matches, !0),
          t.matches
        );
      }),
      (o.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          for (var n, i = e.length, o = 0; o < i; o++)
            (n = e[o]), this.element.appendChild(n.element);
          t = this._filter(e).matches;
          for (o = 0; o < i; o++) e[o].isLayoutInstant = !0;
          for (this.arrange(), o = 0; o < i; o++) delete e[o].isLayoutInstant;
          this.reveal(t);
        }
      });
    var f = o.remove;
    return (
      (o.remove = function (t) {
        t = r.makeArray(t);
        var e = this.getItems(t);
        f.call(this, t);
        for (var n = e && e.length, i = 0; n && i < n; i++) {
          var o = e[i];
          r.removeFrom(this.filteredItems, o);
        }
      }),
      (o.shuffle = function () {
        for (var t = 0; t < this.items.length; t++)
          this.items[t].sortData.random = Math.random();
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (o._noTransition = function (t, e) {
        var n = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        e = t.apply(this, e);
        return (this.options.transitionDuration = n), e;
      }),
      (o.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      u
    );
  }),
  (function (t) {
    "use strict";
    setTimeout(function () {
      t(".loading").addClass("animated slideOutRight");
    }, 1e3),
      -1 < navigator.userAgent.toLowerCase().indexOf("android") &&
        setTimeout(function () {
          t(".loading").css("display", "none");
        }, 1e3);
  })(jQuery),
  (function (e) {
    "use strict";
    e(".scroll-to-id").click(function () {
      var t;
      "" !== this.hash &&
        (event.preventDefault(),
        (t = this.hash),
        e("html, body").animate(
          { scrollTop: e(t).offset().top },
          800,
          function () {}
        ));
    }),
      e("#sticky").length &&
        e(window).scroll(function () {
          var t = e(window).scrollTop() - e("#sticky").offset().top;
          0 < t
            ? (e("#sticky >").addClass("sticky-fixed-md"),
              e("#sticky >").css("top", t))
            : (e("#sticky >").removeClass("sticky-fixed-md"),
              e("#sticky >").css("top", 0));
        });
  })(jQuery),
  (function (n) {
    "use strict";
    var t = ".gallery-items",
      i = ".gallery-item",
      o = ".gallery-filter",
      r = "active";
    n(t).imagesLoaded(function () {
      var e = n(t).isotope({
        itemSelector: i,
        masonry: { horizontalOrder: !0 },
      });
      n(o).on("click", ".click", function () {
        var t = n(this).attr("data-filter");
        return (
          n(o).find(".click").removeClass(r),
          n(this).addClass(r),
          n(i).removeClass(r),
          e.isotope({ filter: t }),
          !1
        );
      }),
        n(o).on("click", "li:first-child() .click", function () {
          n(i).addClass(r), e.isotope();
        });
    });
  })(jQuery),
  (function (i) {
    "use strict";
    var o = i(".wpcf7-form, #commentform"),
      n = "Something go wrong. Try again later!";
    o.on("submit", function (t) {
      t.preventDefault(),
        i.ajax({
          url: "form.php",
          type: "POST",
          data: o.serialize(),
          success: function (t) {
            var e,
              t = JSON.parse(t);
            "success" == t.status &&
              (e = "Sender's message was sent successfully"),
              "warning" == t.status && (e = "Fill up the form, please!"),
              "error" == t.status && (e = n),
              a(e, t.status);
          },
          error: function (t) {
            a(n, "error");
          },
        });
    });
    var r,
      s = 5e3;
    function a(t, e) {
      var n;
      i(".alert").stop().remove(),
        "success" == e && (n = "success"),
        "error" == e && (n = "danger"),
        "warning" == e && (n = "warning");
      t =
        '<div class="animated fadeIn alert alert--shadow alert-' +
        n +
        '">' +
        t +
        "</div>";
      i(o).append(t),
        clearTimeout(r),
        (r = setTimeout(function () {
          i(".alert")
            .stop()
            .fadeOut(function () {
              i(this).remove();
            });
        }, s));
    }
    i(function () {
      i("body").on("click", ".alert__button", function (t) {
        t.preventDefault(),
          i(this)
            .parents(".alert")
            .fadeOut("fast", function () {
              i(this).remove(), clearTimeout(r);
            });
      });
    });
  })(jQuery),
  (function () {
    "use strict";
    jQuery(".bd-example a").click(function (t) {
      t.preventDefault();
    });
  })();
