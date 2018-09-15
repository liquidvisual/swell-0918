var _$$headroom;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

!function (e, t) {
  "use strict";
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
      i = e.document,
      r = Object.getPrototypeOf,
      o = n.slice,
      s = n.concat,
      a = n.push,
      l = n.indexOf,
      c = {},
      u = c.toString,
      d = c.hasOwnProperty,
      h = d.toString,
      f = h.call(Object),
      p = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      g = function g(e) {
    return null != e && e === e.window;
  },
      v = { type: !0, src: !0, noModule: !0 };function y(e, t, n) {
    var r,
        o = (t = t || i).createElement("script");if (o.text = e, n) for (r in v) {
      n[r] && (o[r] = n[r]);
    }t.head.appendChild(o).parentNode.removeChild(o);
  }function b(e) {
    return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? c[u.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
  }var w = function w(e, t) {
    return new w.fn.init(e, t);
  },
      E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function C(e) {
    var t = !!e && "length" in e && e.length,
        n = b(e);return !m(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }w.fn = w.prototype = { jquery: "3.3.1", constructor: w, length: 0, toArray: function toArray() {
      return o.call(this);
    }, get: function get(e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    }, pushStack: function pushStack(e) {
      var t = w.merge(this.constructor(), e);return t.prevObject = this, t;
    }, each: function each(e) {
      return w.each(this, e);
    }, map: function map(e) {
      return this.pushStack(w.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, slice: function slice() {
      return this.pushStack(o.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: a, sort: n.sort, splice: n.splice }, w.extend = w.fn.extend = function () {
    var e,
        t,
        n,
        i,
        r,
        o,
        s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) || m(s) || (s = {}), a === l && (s = this, a--); a < l; a++) {
      if (null != (e = arguments[a])) for (t in e) {
        n = s[t], s !== (i = e[t]) && (c && i && (w.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, s[t] = w.extend(c, o, i)) : void 0 !== i && (s[t] = i));
      }
    }return s;
  }, w.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
      throw new Error(e);
    }, noop: function noop() {}, isPlainObject: function isPlainObject(e) {
      var t, n;return !(!e || "[object Object]" !== u.call(e)) && (!(t = r(e)) || "function" == typeof (n = d.call(t, "constructor") && t.constructor) && h.call(n) === f);
    }, isEmptyObject: function isEmptyObject(e) {
      var t;for (t in e) {
        return !1;
      }return !0;
    }, globalEval: function globalEval(e) {
      y(e);
    }, each: function each(e, t) {
      var n,
          i = 0;if (C(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) {} else for (i in e) {
        if (!1 === t.call(e[i], i, e[i])) break;
      }return e;
    }, trim: function trim(e) {
      return null == e ? "" : (e + "").replace(E, "");
    }, makeArray: function makeArray(e, t) {
      var n = t || [];return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n;
    }, inArray: function inArray(e, t, n) {
      return null == t ? -1 : l.call(t, e, n);
    }, merge: function merge(e, t) {
      for (var n = +t.length, i = 0, r = e.length; i < n; i++) {
        e[r++] = t[i];
      }return e.length = r, e;
    }, grep: function grep(e, t, n) {
      for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) {
        !t(e[r], r) !== s && i.push(e[r]);
      }return i;
    }, map: function map(e, t, n) {
      var i,
          r,
          o = 0,
          a = [];if (C(e)) for (i = e.length; o < i; o++) {
        null != (r = t(e[o], o, n)) && a.push(r);
      } else for (o in e) {
        null != (r = t(e[o], o, n)) && a.push(r);
      }return s.apply([], a);
    }, guid: 1, support: p }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    c["[object " + t + "]"] = t.toLowerCase();
  });var _ = function (e) {
    var t,
        n,
        i,
        r,
        o,
        s,
        a,
        l,
        c,
        u,
        d,
        h,
        f,
        p,
        m,
        g,
        v,
        y,
        b,
        w = "sizzle" + 1 * new Date(),
        E = e.document,
        C = 0,
        _ = 0,
        T = se(),
        x = se(),
        k = se(),
        S = function S(e, t) {
      return e === t && (d = !0), 0;
    },
        A = {}.hasOwnProperty,
        D = [],
        I = D.pop,
        N = D.push,
        P = D.push,
        L = D.slice,
        O = function O(e, t) {
      for (var n = 0, i = e.length; n < i; n++) {
        if (e[n] === t) return n;
      }return -1;
    },
        j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        q = "\\[" + M + "*(" + H + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + M + "*\\]",
        F = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
        B = new RegExp(M + "+", "g"),
        R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        z = new RegExp("^" + M + "*," + M + "*"),
        W = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
        V = new RegExp(F),
        $ = new RegExp("^" + H + "$"),
        K = { ID: new RegExp("^#(" + H + ")"), CLASS: new RegExp("^\\.(" + H + ")"), TAG: new RegExp("^(" + H + "|[*])"), ATTR: new RegExp("^" + q), PSEUDO: new RegExp("^" + F), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + j + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
        Y = /^(?:input|select|textarea|button)$/i,
        Q = /^h\d$/i,
        G = /^[^{]+\{\s*\[native \w/,
        X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        J = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ee = function ee(e, t, n) {
      var i = "0x" + t - 65536;return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
    },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function ne(e, t) {
      return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        ie = function ie() {
      h();
    },
        re = ye(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, { dir: "parentNode", next: "legend" });try {
      P.apply(D = L.call(E.childNodes), E.childNodes), D[E.childNodes.length].nodeType;
    } catch (e) {
      P = { apply: D.length ? function (e, t) {
          N.apply(e, L.call(t));
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];) {}e.length = n - 1;
        } };
    }function oe(e, t, i, r) {
      var o,
          a,
          c,
          u,
          d,
          p,
          v,
          y = t && t.ownerDocument,
          C = t ? t.nodeType : 9;if (i = i || [], "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C) return i;if (!r && ((t ? t.ownerDocument || t : E) !== f && h(t), t = t || f, m)) {
        if (11 !== C && (d = X.exec(e))) if (o = d[1]) {
          if (9 === C) {
            if (!(c = t.getElementById(o))) return i;if (c.id === o) return i.push(c), i;
          } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return i.push(c), i;
        } else {
          if (d[2]) return P.apply(i, t.getElementsByTagName(e)), i;if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return P.apply(i, t.getElementsByClassName(o)), i;
        }if (n.qsa && !k[e + " "] && (!g || !g.test(e))) {
          if (1 !== C) y = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
            for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = w), a = (p = s(e)).length; a--;) {
              p[a] = "#" + u + " " + ve(p[a]);
            }v = p.join(","), y = J.test(e) && me(t.parentNode) || t;
          }if (v) try {
            return P.apply(i, y.querySelectorAll(v)), i;
          } catch (e) {} finally {
            u === w && t.removeAttribute("id");
          }
        }
      }return l(e.replace(R, "$1"), t, i, r);
    }function se() {
      var e = [];return function t(n, r) {
        return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r;
      };
    }function ae(e) {
      return e[w] = !0, e;
    }function le(e) {
      var t = f.createElement("fieldset");try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function ce(e, t) {
      for (var n = e.split("|"), r = n.length; r--;) {
        i.attrHandle[n[r]] = t;
      }
    }function ue(e, t) {
      var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (i) return i;if (n) for (; n = n.nextSibling;) {
        if (n === t) return -1;
      }return e ? 1 : -1;
    }function de(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }function he(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
      };
    }function fe(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }function pe(e) {
      return ae(function (t) {
        return t = +t, ae(function (n, i) {
          for (var r, o = e([], n.length, t), s = o.length; s--;) {
            n[r = o[s]] && (n[r] = !(i[r] = n[r]));
          }
        });
      });
    }function me(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }for (t in n = oe.support = {}, o = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, h = oe.setDocument = function (e) {
      var t,
          r,
          s = e ? e.ownerDocument || e : E;return s !== f && 9 === s.nodeType && s.documentElement ? (p = (f = s).documentElement, m = !o(f), E !== f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ie, !1) : r.attachEvent && r.attachEvent("onunload", ie)), n.attributes = le(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = le(function (e) {
        return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = G.test(f.getElementsByClassName), n.getById = le(function (e) {
        return p.appendChild(e).id = w, !f.getElementsByName || !f.getElementsByName(w).length;
      }), n.getById ? (i.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          return e.getAttribute("id") === t;
        };
      }, i.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && m) {
          var n = t.getElementById(e);return n ? [n] : [];
        }
      }) : (i.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
        };
      }, i.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && m) {
          var n,
              i,
              r,
              o = t.getElementById(e);if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];for (r = t.getElementsByName(e), i = 0; o = r[i++];) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }return [];
        }
      }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            i = [],
            r = 0,
            o = t.getElementsByTagName(e);if ("*" === e) {
          for (; n = o[r++];) {
            1 === n.nodeType && i.push(n);
          }return i;
        }return o;
      }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e);
      }, v = [], g = [], (n.qsa = G.test(f.querySelectorAll)) && (le(function (e) {
        p.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + M + "*(?:value|" + j + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]");
      }), le(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = f.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:");
      })), (n.matchesSelector = G.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function (e) {
        n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", F);
      }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = G.test(p.compareDocumentPosition), b = t || G.test(p.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            i = t && t.parentNode;return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) {
          if (t === e) return !0;
        }return !1;
      }, S = t ? function (e, t) {
        if (e === t) return d = !0, 0;var i = !e.compareDocumentPosition - !t.compareDocumentPosition;return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === f || e.ownerDocument === E && b(E, e) ? -1 : t === f || t.ownerDocument === E && b(E, t) ? 1 : u ? O(u, e) - O(u, t) : 0 : 4 & i ? -1 : 1);
      } : function (e, t) {
        if (e === t) return d = !0, 0;var n,
            i = 0,
            r = e.parentNode,
            o = t.parentNode,
            s = [e],
            a = [t];if (!r || !o) return e === f ? -1 : t === f ? 1 : r ? -1 : o ? 1 : u ? O(u, e) - O(u, t) : 0;if (r === o) return ue(e, t);for (n = e; n = n.parentNode;) {
          s.unshift(n);
        }for (n = t; n = n.parentNode;) {
          a.unshift(n);
        }for (; s[i] === a[i];) {
          i++;
        }return i ? ue(s[i], a[i]) : s[i] === E ? -1 : a[i] === E ? 1 : 0;
      }, f) : f;
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== f && h(e), t = t.replace(U, "='$1']"), n.matchesSelector && m && !k[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
        var i = y.call(e, t);if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
      } catch (e) {}return oe(t, f, null, [e]).length > 0;
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== f && h(e), b(e, t);
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== f && h(e);var r = i.attrHandle[t.toLowerCase()],
          o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, oe.escape = function (e) {
      return (e + "").replace(te, ne);
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, oe.uniqueSort = function (e) {
      var t,
          i = [],
          r = 0,
          o = 0;if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(S), d) {
        for (; t = e[o++];) {
          t === e[o] && (r = i.push(o));
        }for (; r--;) {
          e.splice(i[r], 1);
        }
      }return u = null, e;
    }, r = oe.getText = function (e) {
      var t,
          n = "",
          i = 0,
          o = e.nodeType;if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
            n += r(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else for (; t = e[i++];) {
        n += r(t);
      }return n;
    }, (i = oe.selectors = { cacheLength: 50, createPseudo: ae, match: K, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(Z, ee).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = T[e + " "];return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && T(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, t, n) {
          return function (i) {
            var r = oe.attr(i, e);return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"));
          };
        }, CHILD: function CHILD(e, t, n, i, r) {
          var o = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;return 1 === i && 0 === r ? function (e) {
            return !!e.parentNode;
          } : function (t, n, l) {
            var c,
                u,
                d,
                h,
                f,
                p,
                m = o !== s ? "nextSibling" : "previousSibling",
                g = t.parentNode,
                v = a && t.nodeName.toLowerCase(),
                y = !l && !a,
                b = !1;if (g) {
              if (o) {
                for (; m;) {
                  for (h = t; h = h[m];) {
                    if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                  }p = m = "only" === e && !p && "nextSibling";
                }return !0;
              }if (p = [s ? g.firstChild : g.lastChild], s && y) {
                for (b = (f = (c = (u = (d = (h = g)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === C && c[1]) && c[2], h = f && g.childNodes[f]; h = ++f && h && h[m] || (b = f = 0) || p.pop();) {
                  if (1 === h.nodeType && ++b && h === t) {
                    u[e] = [C, f, b];break;
                  }
                }
              } else if (y && (b = f = (c = (u = (d = (h = t)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === C && c[1]), !1 === b) for (; (h = ++f && h && h[m] || (b = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((u = (d = h[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [C, b]), h !== t));) {}return (b -= r) === i || b % i == 0 && b / i >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, t) {
          var n,
              r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);return r[w] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, n) {
            for (var i, o = r(e, t), s = o.length; s--;) {
              e[i = O(e, o[s])] = !(n[i] = o[s]);
            }
          }) : function (e) {
            return r(e, 0, n);
          }) : r;
        } }, pseudos: { not: ae(function (e) {
          var t = [],
              n = [],
              i = a(e.replace(R, "$1"));return i[w] ? ae(function (e, t, n, r) {
            for (var o, s = i(e, null, r, []), a = e.length; a--;) {
              (o = s[a]) && (e[a] = !(t[a] = o));
            }
          }) : function (e, r, o) {
            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop();
          };
        }), has: ae(function (e) {
          return function (t) {
            return oe(e, t).length > 0;
          };
        }), contains: ae(function (e) {
          return e = e.replace(Z, ee), function (t) {
            return (t.textContent || t.innerText || r(t)).indexOf(e) > -1;
          };
        }), lang: ae(function (e) {
          return $.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
            var n;do {
              if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function root(e) {
          return e === p;
        }, focus: function focus(e) {
          return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: fe(!1), disabled: fe(!0), checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(e) {
          return !i.pseudos.empty(e);
        }, header: function header(e) {
          return Q.test(e.nodeName);
        }, input: function input(e) {
          return Y.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function text(e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        }, first: pe(function () {
          return [0];
        }), last: pe(function (e, t) {
          return [t - 1];
        }), eq: pe(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }), even: pe(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }return e;
        }), odd: pe(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }return e;
        }), lt: pe(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; --i >= 0;) {
            e.push(i);
          }return e;
        }), gt: pe(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t;) {
            e.push(i);
          }return e;
        }) } }).pseudos.nth = i.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      i.pseudos[t] = de(t);
    }for (t in { submit: !0, reset: !0 }) {
      i.pseudos[t] = he(t);
    }function ge() {}function ve(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) {
        i += e[t].value;
      }return i;
    }function ye(e, t, n) {
      var i = t.dir,
          r = t.next,
          o = r || i,
          s = n && "parentNode" === o,
          a = _++;return t.first ? function (t, n, r) {
        for (; t = t[i];) {
          if (1 === t.nodeType || s) return e(t, n, r);
        }return !1;
      } : function (t, n, l) {
        var c,
            u,
            d,
            h = [C, a];if (l) {
          for (; t = t[i];) {
            if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
          }
        } else for (; t = t[i];) {
          if (1 === t.nodeType || s) if (u = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;else {
            if ((c = u[o]) && c[0] === C && c[1] === a) return h[2] = c[2];if (u[o] = h, h[2] = e(t, n, l)) return !0;
          }
        }return !1;
      };
    }function be(e) {
      return e.length > 1 ? function (t, n, i) {
        for (var r = e.length; r--;) {
          if (!e[r](t, n, i)) return !1;
        }return !0;
      } : e[0];
    }function we(e, t, n, i, r) {
      for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++) {
        (o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
      }return s;
    }function Ee(e, t, n, i, r, o) {
      return i && !i[w] && (i = Ee(i)), r && !r[w] && (r = Ee(r, o)), ae(function (o, s, a, l) {
        var c,
            u,
            d,
            h = [],
            f = [],
            p = s.length,
            m = o || function (e, t, n) {
          for (var i = 0, r = t.length; i < r; i++) {
            oe(e, t[i], n);
          }return n;
        }(t || "*", a.nodeType ? [a] : a, []),
            g = !e || !o && t ? m : we(m, h, e, a, l),
            v = n ? r || (o ? e : p || i) ? [] : s : g;if (n && n(g, v, a, l), i) for (c = we(v, f), i(c, [], a, l), u = c.length; u--;) {
          (d = c[u]) && (v[f[u]] = !(g[f[u]] = d));
        }if (o) {
          if (r || e) {
            if (r) {
              for (c = [], u = v.length; u--;) {
                (d = v[u]) && c.push(g[u] = d);
              }r(null, v = [], c, l);
            }for (u = v.length; u--;) {
              (d = v[u]) && (c = r ? O(o, d) : h[u]) > -1 && (o[c] = !(s[c] = d));
            }
          }
        } else v = we(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, l) : P.apply(s, v);
      });
    }function Ce(e) {
      for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = ye(function (e) {
        return e === t;
      }, a, !0), d = ye(function (e) {
        return O(t, e) > -1;
      }, a, !0), h = [function (e, n, i) {
        var r = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));return t = null, r;
      }]; l < o; l++) {
        if (n = i.relative[e[l].type]) h = [ye(be(h), n)];else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
            for (r = ++l; r < o && !i.relative[e[r].type]; r++) {}return Ee(l > 1 && be(h), l > 1 && ve(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(R, "$1"), n, l < r && Ce(e.slice(l, r)), r < o && Ce(e = e.slice(r)), r < o && ve(e));
          }h.push(n);
        }
      }return be(h);
    }return ge.prototype = i.filters = i.pseudos, i.setFilters = new ge(), s = oe.tokenize = function (e, t) {
      var n,
          r,
          o,
          s,
          a,
          l,
          c,
          u = x[e + " "];if (u) return t ? 0 : u.slice(0);for (a = e, l = [], c = i.preFilter; a;) {
        for (s in n && !(r = z.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = W.exec(a)) && (n = r.shift(), o.push({ value: n, type: r[0].replace(R, " ") }), a = a.slice(n.length)), i.filter) {
          !(r = K[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({ value: n, type: s, matches: r }), a = a.slice(n.length));
        }if (!n) break;
      }return t ? a.length : a ? oe.error(e) : x(e, l).slice(0);
    }, a = oe.compile = function (e, t) {
      var n,
          r = [],
          o = [],
          a = k[e + " "];if (!a) {
        for (t || (t = s(e)), n = t.length; n--;) {
          (a = Ce(t[n]))[w] ? r.push(a) : o.push(a);
        }(a = k(e, function (e, t) {
          var n = t.length > 0,
              r = e.length > 0,
              o = function o(_o, s, a, l, u) {
            var d,
                p,
                g,
                v = 0,
                y = "0",
                b = _o && [],
                w = [],
                E = c,
                _ = _o || r && i.find.TAG("*", u),
                T = C += null == E ? 1 : Math.random() || .1,
                x = _.length;for (u && (c = s === f || s || u); y !== x && null != (d = _[y]); y++) {
              if (r && d) {
                for (p = 0, s || d.ownerDocument === f || (h(d), a = !m); g = e[p++];) {
                  if (g(d, s || f, a)) {
                    l.push(d);break;
                  }
                }u && (C = T);
              }n && ((d = !g && d) && v--, _o && b.push(d));
            }if (v += y, n && y !== v) {
              for (p = 0; g = t[p++];) {
                g(b, w, s, a);
              }if (_o) {
                if (v > 0) for (; y--;) {
                  b[y] || w[y] || (w[y] = I.call(l));
                }w = we(w);
              }P.apply(l, w), u && !_o && w.length > 0 && v + t.length > 1 && oe.uniqueSort(l);
            }return u && (C = T, c = E), b;
          };return n ? ae(o) : o;
        }(o, r))).selector = e;
      }return a;
    }, l = oe.select = function (e, t, n, r) {
      var o,
          l,
          c,
          u,
          d,
          h = "function" == typeof e && e,
          f = !r && s(e = h.selector || e);if (n = n || [], 1 === f.length) {
        if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
          if (!(t = (i.find.ID(c.matches[0].replace(Z, ee), t) || [])[0])) return n;h && (t = t.parentNode), e = e.slice(l.shift().value.length);
        }for (o = K.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !i.relative[u = c.type]);) {
          if ((d = i.find[u]) && (r = d(c.matches[0].replace(Z, ee), J.test(l[0].type) && me(t.parentNode) || t))) {
            if (l.splice(o, 1), !(e = r.length && ve(l))) return P.apply(n, r), n;break;
          }
        }
      }return (h || a(e, f))(r, t, !m, n, !t || J.test(e) && me(t.parentNode) || t), n;
    }, n.sortStable = w.split("").sort(S).join("") === w, n.detectDuplicates = !!d, h(), n.sortDetached = le(function (e) {
      return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
    }), le(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || ce("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && le(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || ce("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), le(function (e) {
      return null == e.getAttribute("disabled");
    }) || ce(j, function (e, t, n) {
      var i;if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
    }), oe;
  }(e);w.find = _, w.expr = _.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = _.uniqueSort, w.text = _.getText, w.isXMLDoc = _.isXML, w.contains = _.contains, w.escapeSelector = _.escape;var T = function T(e, t, n) {
    for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
      if (1 === e.nodeType) {
        if (r && w(e).is(n)) break;i.push(e);
      }
    }return i;
  },
      x = function x(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }return n;
  },
      k = w.expr.match.needsContext;function S(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e, t, n) {
    return m(t) ? w.grep(e, function (e, i) {
      return !!t.call(e, i, e) !== n;
    }) : t.nodeType ? w.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? w.grep(e, function (e) {
      return l.call(t, e) > -1 !== n;
    }) : w.filter(t, e, n);
  }w.filter = function (e, t, n) {
    var i = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? w.find.matchesSelector(i, e) ? [i] : [] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, w.fn.extend({ find: function find(e) {
      var t,
          n,
          i = this.length,
          r = this;if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < i; t++) {
          if (w.contains(r[t], this)) return !0;
        }
      }));for (n = this.pushStack([]), t = 0; t < i; t++) {
        w.find(e, r[t], n);
      }return i > 1 ? w.uniqueSort(n) : n;
    }, filter: function filter(e) {
      return this.pushStack(D(this, e || [], !1));
    }, not: function not(e) {
      return this.pushStack(D(this, e || [], !0));
    }, is: function is(e) {
      return !!D(this, "string" == typeof e && k.test(e) ? w(e) : e || [], !1).length;
    } });var I,
      N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init = function (e, t, n) {
    var r, o;if (!e) return this;if (n = n || I, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : N.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (r[1]) {
        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), A.test(r[1]) && w.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }return this;
      }return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this;
    }return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
  }).prototype = w.fn, I = w(i);var P = /^(?:parents|prev(?:Until|All))/,
      L = { children: !0, contents: !0, next: !0, prev: !0 };function O(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) {}return e;
  }w.fn.extend({ has: function has(e) {
      var t = w(e, this),
          n = t.length;return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (w.contains(this, t[e])) return !0;
        }
      });
    }, closest: function closest(e, t) {
      var n,
          i = 0,
          r = this.length,
          o = [],
          s = "string" != typeof e && w(e);if (!k.test(e)) for (; i < r; i++) {
        for (n = this[i]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
            o.push(n);break;
          }
        }
      }return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    }, index: function index(e) {
      return e ? "string" == typeof e ? l.call(w(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } }), w.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return T(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return T(e, "parentNode", n);
    }, next: function next(e) {
      return O(e, "nextSibling");
    }, prev: function prev(e) {
      return O(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return T(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return T(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return T(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return T(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return x((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return x(e.firstChild);
    }, contents: function contents(e) {
      return S(e, "iframe") ? e.contentDocument : (S(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
    } }, function (e, t) {
    w.fn[e] = function (n, i) {
      var r = w.map(this, t, n);return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = w.filter(i, r)), this.length > 1 && (L[e] || w.uniqueSort(r), P.test(e) && r.reverse()), this.pushStack(r);
    };
  });var j = /[^\x20\t\r\n\f]+/g;function M(e) {
    return e;
  }function H(e) {
    throw e;
  }function q(e, t, n, i) {
    var r;try {
      e && m(r = e.promise) ? r.call(e).done(t).fail(n) : e && m(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }w.Callbacks = function (e) {
    e = "string" == typeof e ? function (e) {
      var t = {};return w.each(e.match(j) || [], function (e, n) {
        t[n] = !0;
      }), t;
    }(e) : w.extend({}, e);var t,
        n,
        i,
        r,
        o = [],
        s = [],
        a = -1,
        l = function l() {
      for (r = r || e.once, i = t = !0; s.length; a = -1) {
        for (n = s.shift(); ++a < o.length;) {
          !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
        }
      }e.memory || (n = !1), t = !1, r && (o = n ? [] : "");
    },
        c = { add: function add() {
        return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
          w.each(n, function (n, i) {
            m(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== b(i) && t(i);
          });
        }(arguments), n && !t && l()), this;
      }, remove: function remove() {
        return w.each(arguments, function (e, t) {
          for (var n; (n = w.inArray(t, o, n)) > -1;) {
            o.splice(n, 1), n <= a && a--;
          }
        }), this;
      }, has: function has(e) {
        return e ? w.inArray(e, o) > -1 : o.length > 0;
      }, empty: function empty() {
        return o && (o = []), this;
      }, disable: function disable() {
        return r = s = [], o = n = "", this;
      }, disabled: function disabled() {
        return !o;
      }, lock: function lock() {
        return r = s = [], n || t || (o = n = ""), this;
      }, locked: function locked() {
        return !!r;
      }, fireWith: function fireWith(e, n) {
        return r || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this;
      }, fire: function fire() {
        return c.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!i;
      } };return c;
  }, w.extend({ Deferred: function Deferred(t) {
      var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          r = { state: function state() {
          return i;
        }, always: function always() {
          return o.done(arguments).fail(arguments), this;
        }, catch: function _catch(e) {
          return r.then(null, e);
        }, pipe: function pipe() {
          var e = arguments;return w.Deferred(function (t) {
            w.each(n, function (n, i) {
              var r = m(e[i[4]]) && e[i[4]];o[i[1]](function () {
                var e = r && r.apply(this, arguments);e && m(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, then: function then(t, i, r) {
          var o = 0;function s(t, n, i, r) {
            return function () {
              var a = this,
                  l = arguments,
                  c = function c() {
                var e, c;if (!(t < o)) {
                  if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");c = e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, m(c) ? r ? c.call(e, s(o, n, M, r), s(o, n, H, r)) : (o++, c.call(e, s(o, n, M, r), s(o, n, H, r), s(o, n, M, n.notifyWith))) : (i !== M && (a = void 0, l = [e]), (r || n.resolveWith)(a, l));
                }
              },
                  u = r ? c : function () {
                try {
                  c();
                } catch (e) {
                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= o && (i !== H && (a = void 0, l = [e]), n.rejectWith(a, l));
                }
              };t ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()), e.setTimeout(u));
            };
          }return w.Deferred(function (e) {
            n[0][3].add(s(0, e, m(r) ? r : M, e.notifyWith)), n[1][3].add(s(0, e, m(t) ? t : M)), n[2][3].add(s(0, e, m(i) ? i : H));
          }).promise();
        }, promise: function promise(e) {
          return null != e ? w.extend(e, r) : r;
        } },
          o = {};return w.each(n, function (e, t) {
        var s = t[2],
            a = t[5];r[t[1]] = s.add, a && s.add(function () {
          i = a;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, o[t[0] + "With"] = s.fireWith;
      }), r.promise(o), t && t.call(o, o), o;
    }, when: function when(e) {
      var t = arguments.length,
          n = t,
          i = Array(n),
          r = o.call(arguments),
          s = w.Deferred(),
          a = function a(e) {
        return function (n) {
          i[e] = this, r[e] = arguments.length > 1 ? o.call(arguments) : n, --t || s.resolveWith(i, r);
        };
      };if (t <= 1 && (q(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || m(r[n] && r[n].then))) return s.then();for (; n--;) {
        q(r[n], a(n), s.reject);
      }return s.promise();
    } });var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && F.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, w.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };var B = w.Deferred();function R() {
    i.removeEventListener("DOMContentLoaded", R), e.removeEventListener("load", R), w.ready();
  }w.fn.ready = function (e) {
    return B.then(e).catch(function (e) {
      w.readyException(e);
    }), this;
  }, w.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || B.resolveWith(i, [w]));
    } }), w.ready.then = B.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(w.ready) : (i.addEventListener("DOMContentLoaded", R), e.addEventListener("load", R));var z = function z(e, t, n, i, r, o, s) {
    var a = 0,
        l = e.length,
        c = null == n;if ("object" === b(n)) for (a in r = !0, n) {
      z(e, t, a, n[a], !0, o, s);
    } else if (void 0 !== i && (r = !0, m(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function t(e, _t2, n) {
      return c.call(w(e), n);
    })), t)) for (; a < l; a++) {
      t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
    }return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
  },
      W = /^-ms-/,
      U = /-([a-z])/g;function V(e, t) {
    return t.toUpperCase();
  }function $(e) {
    return e.replace(W, "ms-").replace(U, V);
  }var K = function K(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };function Y() {
    this.expando = w.expando + Y.uid++;
  }Y.uid = 1, Y.prototype = { cache: function cache(e) {
      var t = e[this.expando];return t || (t = {}, K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function set(e, t, n) {
      var i,
          r = this.cache(e);if ("string" == typeof t) r[$(t)] = n;else for (i in t) {
        r[$(i)] = t[i];
      }return r;
    }, get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][$(t)];
    }, access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    }, remove: function remove(e, t) {
      var n,
          i = e[this.expando];if (void 0 !== i) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map($) : (t = $(t)) in i ? [t] : t.match(j) || []).length;for (; n--;) {
            delete i[t[n]];
          }
        }(void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function hasData(e) {
      var t = e[this.expando];return void 0 !== t && !w.isEmptyObject(t);
    } };var Q = new Y(),
      G = new Y(),
      X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      J = /[A-Z]/g;function Z(e, t, n) {
    var i;if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
      try {
        n = function (e) {
          return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : X.test(e) ? JSON.parse(e) : e);
        }(n);
      } catch (e) {}G.set(e, t, n);
    } else n = void 0;return n;
  }w.extend({ hasData: function hasData(e) {
      return G.hasData(e) || Q.hasData(e);
    }, data: function data(e, t, n) {
      return G.access(e, t, n);
    }, removeData: function removeData(e, t) {
      G.remove(e, t);
    }, _data: function _data(e, t, n) {
      return Q.access(e, t, n);
    }, _removeData: function _removeData(e, t) {
      Q.remove(e, t);
    } }), w.fn.extend({ data: function data(e, t) {
      var n,
          i,
          r,
          o = this[0],
          s = o && o.attributes;if (void 0 === e) {
        if (this.length && (r = G.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
          for (n = s.length; n--;) {
            s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = $(i.slice(5)), Z(o, i, r[i]));
          }Q.set(o, "hasDataAttrs", !0);
        }return r;
      }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
        G.set(this, e);
      }) : z(this, function (t) {
        var n;if (o && void 0 === t) return void 0 !== (n = G.get(o, e)) ? n : void 0 !== (n = Z(o, e)) ? n : void 0;this.each(function () {
          G.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    }, removeData: function removeData(e) {
      return this.each(function () {
        G.remove(this, e);
      });
    } }), w.extend({ queue: function queue(e, t, n) {
      var i;if (e) return t = (t || "fx") + "queue", i = Q.get(e, t), n && (!i || Array.isArray(n) ? i = Q.access(e, t, w.makeArray(n)) : i.push(n)), i || [];
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = w.queue(e, t),
          i = n.length,
          r = n.shift(),
          o = w._queueHooks(e, t);"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
        w.dequeue(e, t);
      }, o)), !i && o && o.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return Q.get(e, n) || Q.access(e, n, { empty: w.Callbacks("once memory").add(function () {
          Q.remove(e, [t + "queue", n]);
        }) });
    } }), w.fn.extend({ queue: function queue(e, t) {
      var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = w.queue(this, e, t);w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        w.dequeue(this, e);
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, t) {
      var n,
          i = 1,
          r = w.Deferred(),
          o = this,
          s = this.length,
          a = function a() {
        --i || r.resolveWith(o, [o]);
      };for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) {
        (n = Q.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
      }return a(), r.promise(t);
    } });var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      ie = function ie(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
  },
      re = function re(e, t, n, i) {
    var r,
        o,
        s = {};for (o in t) {
      s[o] = e.style[o], e.style[o] = t[o];
    }for (o in r = n.apply(e, i || []), t) {
      e.style[o] = s[o];
    }return r;
  };function oe(e, t, n, i) {
    var r,
        o,
        s = 20,
        a = i ? function () {
      return i.cur();
    } : function () {
      return w.css(e, t, "");
    },
        l = a(),
        c = n && n[3] || (w.cssNumber[t] ? "" : "px"),
        u = (w.cssNumber[t] || "px" !== c && +l) && te.exec(w.css(e, t));if (u && u[3] !== c) {
      for (l /= 2, c = c || u[3], u = +l || 1; s--;) {
        w.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
      }u *= 2, w.style(e, t, u + c), n = n || [];
    }return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r;
  }var se = {};function ae(e) {
    var t,
        n = e.ownerDocument,
        i = e.nodeName,
        r = se[i];return r || (t = n.body.appendChild(n.createElement(i)), r = w.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), se[i] = r, r);
  }function le(e, t) {
    for (var n, i, r = [], o = 0, s = e.length; o < s; o++) {
      (i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = Q.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ie(i) && (r[o] = ae(i))) : "none" !== n && (r[o] = "none", Q.set(i, "display", n)));
    }for (o = 0; o < s; o++) {
      null != r[o] && (e[o].style.display = r[o]);
    }return e;
  }w.fn.extend({ show: function show() {
      return le(this, !0);
    }, hide: function hide() {
      return le(this);
    }, toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ie(this) ? w(this).show() : w(this).hide();
      });
    } });var ce = /^(?:checkbox|radio)$/i,
      ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      de = /^$|^module$|\/(?:java|ecma)script/i,
      he = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };function fe(e, t) {
    var n;return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && S(e, t) ? w.merge([e], n) : n;
  }function pe(e, t) {
    for (var n = 0, i = e.length; n < i; n++) {
      Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
    }
  }he.optgroup = he.option, he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td;var me,
      ge,
      ve = /<|&#?\w+;/;function ye(e, t, n, i, r) {
    for (var o, s, a, l, c, u, d = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++) {
      if ((o = e[f]) || 0 === o) if ("object" === b(o)) w.merge(h, o.nodeType ? [o] : o);else if (ve.test(o)) {
        for (s = s || d.appendChild(t.createElement("div")), a = (ue.exec(o) || ["", ""])[1].toLowerCase(), l = he[a] || he._default, s.innerHTML = l[1] + w.htmlPrefilter(o) + l[2], u = l[0]; u--;) {
          s = s.lastChild;
        }w.merge(h, s.childNodes), (s = d.firstChild).textContent = "";
      } else h.push(t.createTextNode(o));
    }for (d.textContent = "", f = 0; o = h[f++];) {
      if (i && w.inArray(o, i) > -1) r && r.push(o);else if (c = w.contains(o.ownerDocument, o), s = fe(d.appendChild(o), "script"), c && pe(s), n) for (u = 0; o = s[u++];) {
        de.test(o.type || "") && n.push(o);
      }
    }return d;
  }me = i.createDocumentFragment().appendChild(i.createElement("div")), (ge = i.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), me.appendChild(ge), p.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;var be = i.documentElement,
      we = /^key/,
      Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ce = /^([^.]*)(?:\.(.+)|)/;function _e() {
    return !0;
  }function Te() {
    return !1;
  }function xe() {
    try {
      return i.activeElement;
    } catch (e) {}
  }function ke(e, t, n, i, r, o) {
    var s, a;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
      for (a in "string" != typeof n && (i = i || n, n = void 0), t) {
        ke(e, a, n, i, t[a], o);
      }return e;
    }if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Te;else if (!r) return e;return 1 === o && (s = r, (r = function r(e) {
      return w().off(e), s.apply(this, arguments);
    }).guid = s.guid || (s.guid = w.guid++)), e.each(function () {
      w.event.add(this, t, r, i, n);
    });
  }w.event = { global: {}, add: function add(e, t, n, i, r) {
      var o,
          s,
          a,
          l,
          c,
          u,
          d,
          h,
          f,
          p,
          m,
          g = Q.get(e);if (g) for (n.handler && (n = (o = n).handler, r = o.selector), r && w.find.matchesSelector(be, r), n.guid || (n.guid = w.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (t) {
        return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
      }), c = (t = (t || "").match(j) || [""]).length; c--;) {
        f = m = (a = Ce.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f && (d = w.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = w.event.special[f] || {}, u = w.extend({ type: f, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && w.expr.match.needsContext.test(r), namespace: p.join(".") }, o), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, u) : h.push(u), w.event.global[f] = !0);
      }
    }, remove: function remove(e, t, n, i, r) {
      var o,
          s,
          a,
          l,
          c,
          u,
          d,
          h,
          f,
          p,
          m,
          g = Q.hasData(e) && Q.get(e);if (g && (l = g.events)) {
        for (c = (t = (t || "").match(j) || [""]).length; c--;) {
          if (f = m = (a = Ce.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
            for (d = w.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) {
              u = h[o], !r && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(o, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
            }s && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || w.removeEvent(e, f, g.handle), delete l[f]);
          } else for (f in l) {
            w.event.remove(e, f + t[c], n, i, !0);
          }
        }w.isEmptyObject(l) && Q.remove(e, "handle events");
      }
    }, dispatch: function dispatch(e) {
      var t,
          n,
          i,
          r,
          o,
          s,
          a = w.event.fix(e),
          l = new Array(arguments.length),
          c = (Q.get(this, "events") || {})[a.type] || [],
          u = w.event.special[a.type] || {};for (l[0] = a, t = 1; t < arguments.length; t++) {
        l[t] = arguments[t];
      }if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
        for (s = w.event.handlers.call(this, a, c), t = 0; (r = s[t++]) && !a.isPropagationStopped();) {
          for (a.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) {
            a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((w.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
          }
        }return u.postDispatch && u.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(e, t) {
      var n,
          i,
          r,
          o,
          s,
          a = [],
          l = t.delegateCount,
          c = e.target;if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) {
        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
          for (o = [], s = {}, n = 0; n < l; n++) {
            void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? w(r, this).index(c) > -1 : w.find(r, this, null, [c]).length), s[r] && o.push(i);
          }o.length && a.push({ elem: c, handlers: o });
        }
      }return c = this, l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a;
    }, addProp: function addProp(e, t) {
      Object.defineProperty(w.Event.prototype, e, { enumerable: !0, configurable: !0, get: m(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        }, set: function set(t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        } });
    }, fix: function fix(e) {
      return e[w.expando] ? e : new w.Event(e);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== xe() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === xe() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && S(this, "input")) return this.click(), !1;
        }, _default: function _default(e) {
          return S(e.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        } } } }, w.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, w.Event = function (e, t) {
    if (!(this instanceof w.Event)) return new w.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? _e : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
  }, w.Event.prototype = { constructor: w.Event, isDefaultPrevented: Te, isPropagationStopped: Te, isImmediatePropagationStopped: Te, isSimulated: !1, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = _e, e && !this.isSimulated && e.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = _e, e && !this.isSimulated && e.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;this.isImmediatePropagationStopped = _e, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    } }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
      var t = e.button;return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ee.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    } }, w.event.addProp), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
    w.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            i = e.relatedTarget,
            r = e.handleObj;return i && (i === this || w.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n;
      } };
  }), w.fn.extend({ on: function on(e, t, n, i) {
      return ke(this, e, t, n, i);
    }, one: function one(e, t, n, i) {
      return ke(this, e, t, n, i, 1);
    }, off: function off(e, t, n) {
      var i, r;if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
        for (r in e) {
          this.off(r, t, e[r]);
        }return this;
      }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
        w.event.remove(this, e, n, t);
      });
    } });var Se = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ae = /<script|<style|<link/i,
      De = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ne(e, t) {
    return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e;
  }function Pe(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function Le(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }function Oe(e, t) {
    var n, i, r, o, s, a, l, c;if (1 === t.nodeType) {
      if (Q.hasData(e) && (o = Q.access(e), s = Q.set(t, o), c = o.events)) for (r in delete s.handle, s.events = {}, c) {
        for (n = 0, i = c[r].length; n < i; n++) {
          w.event.add(t, r, c[r][n]);
        }
      }G.hasData(e) && (a = G.access(e), l = w.extend({}, a), G.set(t, l));
    }
  }function je(e, t, n, i) {
    t = s.apply([], t);var r,
        o,
        a,
        l,
        c,
        u,
        d = 0,
        h = e.length,
        f = h - 1,
        g = t[0],
        v = m(g);if (v || h > 1 && "string" == typeof g && !p.checkClone && De.test(g)) return e.each(function (r) {
      var o = e.eq(r);v && (t[0] = g.call(this, r, o.html())), je(o, t, n, i);
    });if (h && (o = (r = ye(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
      for (l = (a = w.map(fe(r, "script"), Pe)).length; d < h; d++) {
        c = r, d !== f && (c = w.clone(c, !0, !0), l && w.merge(a, fe(c, "script"))), n.call(e[d], c, d);
      }if (l) for (u = a[a.length - 1].ownerDocument, w.map(a, Le), d = 0; d < l; d++) {
        c = a[d], de.test(c.type || "") && !Q.access(c, "globalEval") && w.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(c.src) : y(c.textContent.replace(Ie, ""), u, c));
      }
    }return e;
  }function Me(e, t, n) {
    for (var i, r = t ? w.filter(t, e) : e, o = 0; null != (i = r[o]); o++) {
      n || 1 !== i.nodeType || w.cleanData(fe(i)), i.parentNode && (n && w.contains(i.ownerDocument, i) && pe(fe(i, "script")), i.parentNode.removeChild(i));
    }return e;
  }w.extend({ htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(Se, "<$1></$2>");
    }, clone: function clone(e, t, n) {
      var i,
          r,
          o,
          s,
          a,
          l,
          c,
          u = e.cloneNode(!0),
          d = w.contains(e.ownerDocument, e);if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (s = fe(u), i = 0, r = (o = fe(e)).length; i < r; i++) {
        a = o[i], l = s[i], void 0, "input" === (c = l.nodeName.toLowerCase()) && ce.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
      }if (t) if (n) for (o = o || fe(e), s = s || fe(u), i = 0, r = o.length; i < r; i++) {
        Oe(o[i], s[i]);
      } else Oe(e, u);return (s = fe(u, "script")).length > 0 && pe(s, !d && fe(e, "script")), u;
    }, cleanData: function cleanData(e) {
      for (var t, n, i, r = w.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (K(n)) {
          if (t = n[Q.expando]) {
            if (t.events) for (i in t.events) {
              r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
            }n[Q.expando] = void 0;
          }n[G.expando] && (n[G.expando] = void 0);
        }
      }
    } }), w.fn.extend({ detach: function detach(e) {
      return Me(this, e, !0);
    }, remove: function remove(e) {
      return Me(this, e);
    }, text: function text(e) {
      return z(this, function (e) {
        return void 0 === e ? w.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    }, append: function append() {
      return je(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e);
      });
    }, prepend: function prepend() {
      return je(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Ne(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return je(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return je(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (w.cleanData(fe(e, !1)), e.textContent = "");
      }return this;
    }, clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return w.clone(this, e, t);
      });
    }, html: function html(e) {
      return z(this, function (e) {
        var t = this[0] || {},
            n = 0,
            i = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Ae.test(e) && !he[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = w.htmlPrefilter(e);try {
            for (; n < i; n++) {
              1 === (t = this[n] || {}).nodeType && (w.cleanData(fe(t, !1)), t.innerHTML = e);
            }t = 0;
          } catch (e) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = [];return je(this, arguments, function (t) {
        var n = this.parentNode;w.inArray(this, e) < 0 && (w.cleanData(fe(this)), n && n.replaceChild(t, this));
      }, e);
    } }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    w.fn[e] = function (e) {
      for (var n, i = [], r = w(e), o = r.length - 1, s = 0; s <= o; s++) {
        n = s === o ? this : this.clone(!0), w(r[s])[t](n), a.apply(i, n.get());
      }return this.pushStack(i);
    };
  });var He = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      qe = function qe(t) {
    var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      Fe = new RegExp(ne.join("|"), "i");function Be(e, t, n) {
    var i,
        r,
        o,
        s,
        a = e.style;return (n = n || qe(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (s = w.style(e, t)), !p.pixelBoxStyles() && He.test(s) && Fe.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s;
  }function Re(e, t) {
    return { get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
      } };
  }!function () {
    function t() {
      if (u) {
        c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(c).appendChild(u);var t = e.getComputedStyle(u);r = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", a = 36 === n(t.right), o = 36 === n(t.width), u.style.position = "absolute", s = 36 === u.offsetWidth || "absolute", be.removeChild(c), u = null;
      }
    }function n(e) {
      return Math.round(parseFloat(e));
    }var r,
        o,
        s,
        a,
        l,
        c = i.createElement("div"),
        u = i.createElement("div");u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === u.style.backgroundClip, w.extend(p, { boxSizingReliable: function boxSizingReliable() {
        return t(), o;
      }, pixelBoxStyles: function pixelBoxStyles() {
        return t(), a;
      }, pixelPosition: function pixelPosition() {
        return t(), r;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return t(), l;
      }, scrollboxSize: function scrollboxSize() {
        return t(), s;
      } }));
  }();var ze = /^(none|table(?!-c[ea]).+)/,
      We = /^--/,
      Ue = { position: "absolute", visibility: "hidden", display: "block" },
      Ve = { letterSpacing: "0", fontWeight: "400" },
      $e = ["Webkit", "Moz", "ms"],
      Ke = i.createElement("div").style;function Ye(e) {
    var t = w.cssProps[e];return t || (t = w.cssProps[e] = function (e) {
      if (e in Ke) return e;for (var t = e[0].toUpperCase() + e.slice(1), n = $e.length; n--;) {
        if ((e = $e[n] + t) in Ke) return e;
      }
    }(e) || e), t;
  }function Qe(e, t, n) {
    var i = te.exec(t);return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }function Ge(e, t, n, i, r, o) {
    var s = "width" === t ? 1 : 0,
        a = 0,
        l = 0;if (n === (i ? "border" : "content")) return 0;for (; s < 4; s += 2) {
      "margin" === n && (l += w.css(e, n + ne[s], !0, r)), i ? ("content" === n && (l -= w.css(e, "padding" + ne[s], !0, r)), "margin" !== n && (l -= w.css(e, "border" + ne[s] + "Width", !0, r))) : (l += w.css(e, "padding" + ne[s], !0, r), "padding" !== n ? l += w.css(e, "border" + ne[s] + "Width", !0, r) : a += w.css(e, "border" + ne[s] + "Width", !0, r));
    }return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5))), l;
  }function Xe(e, t, n) {
    var i = qe(e),
        r = Be(e, t, i),
        o = "border-box" === w.css(e, "boxSizing", !1, i),
        s = o;if (He.test(r)) {
      if (!n) return r;r = "auto";
    }return s = s && (p.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === w.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + Ge(e, t, n || (o ? "border" : "content"), s, i, r) + "px";
  }function Je(e, t, n, i, r) {
    return new Je.prototype.init(e, t, n, i, r);
  }w.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = Be(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
            o,
            s,
            a = $(t),
            l = We.test(t),
            c = e.style;if (l || (t = Ye(a)), s = w.cssHooks[t] || w.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];"string" === (o = typeof n === "undefined" ? "undefined" : _typeof(n)) && (r = te.exec(n)) && r[1] && (n = oe(e, t, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (w.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n));
      }
    }, css: function css(e, t, n, i) {
      var r,
          o,
          s,
          a = $(t);return We.test(t) || (t = Ye(a)), (s = w.cssHooks[t] || w.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Be(e, t, i)), "normal" === r && t in Ve && (r = Ve[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r;
    } }), w.each(["height", "width"], function (e, t) {
    w.cssHooks[t] = { get: function get(e, n, i) {
        if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Xe(e, t, i) : re(e, Ue, function () {
          return Xe(e, t, i);
        });
      }, set: function set(e, n, i) {
        var r,
            o = qe(e),
            s = "border-box" === w.css(e, "boxSizing", !1, o),
            a = i && Ge(e, t, i, s, o);return s && p.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ge(e, t, "border", !1, o) - .5)), a && (r = te.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Qe(0, n, a);
      } };
  }), w.cssHooks.marginLeft = Re(p.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    w.cssHooks[e + t] = { expand: function expand(n) {
        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) {
          r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
        }return r;
      } }, "margin" !== e && (w.cssHooks[e + t].set = Qe);
  }), w.fn.extend({ css: function css(e, t) {
      return z(this, function (e, t, n) {
        var i,
            r,
            o = {},
            s = 0;if (Array.isArray(t)) {
          for (i = qe(e), r = t.length; s < r; s++) {
            o[t[s]] = w.css(e, t[s], !1, i);
          }return o;
        }return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
      }, e, t, arguments.length > 1);
    } }), w.Tween = Je, Je.prototype = { constructor: Je, init: function init(e, t, n, i, r, o) {
      this.elem = e, this.prop = n, this.easing = r || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (w.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var e = Je.propHooks[this.prop];return e && e.get ? e.get(this) : Je.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          n = Je.propHooks[this.prop];return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Je.propHooks._default.set(this), this;
    } }, Je.prototype.init.prototype = Je.prototype, Je.propHooks = { _default: { get: function get(e) {
        var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      }, set: function set(e) {
        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
      } } }, Je.propHooks.scrollTop = Je.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, w.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }, _default: "swing" }, w.fx = Je.prototype.init, w.fx.step = {};var Ze,
      et,
      tt = /^(?:toggle|show|hide)$/,
      nt = /queueHooks$/;function it() {
    et && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(it) : e.setTimeout(it, w.fx.interval), w.fx.tick());
  }function rt() {
    return e.setTimeout(function () {
      Ze = void 0;
    }), Ze = Date.now();
  }function ot(e, t) {
    var n,
        i = 0,
        r = { height: e };for (t = t ? 1 : 0; i < 4; i += 2 - t) {
      r["margin" + (n = ne[i])] = r["padding" + n] = e;
    }return t && (r.opacity = r.width = e), r;
  }function st(e, t, n) {
    for (var i, r = (at.tweeners[t] || []).concat(at.tweeners["*"]), o = 0, s = r.length; o < s; o++) {
      if (i = r[o].call(n, t, e)) return i;
    }
  }function at(e, t, n) {
    var i,
        r,
        o = 0,
        s = at.prefilters.length,
        a = w.Deferred().always(function () {
      delete l.elem;
    }),
        l = function l() {
      if (r) return !1;for (var t = Ze || rt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) {
        c.tweens[o].run(i);
      }return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
    },
        c = a.promise({ elem: e, props: w.extend({}, t), opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n), originalProperties: t, originalOptions: n, startTime: Ze || rt(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
        var i = w.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);return c.tweens.push(i), i;
      }, stop: function stop(t) {
        var n = 0,
            i = t ? c.tweens.length : 0;if (r) return this;for (r = !0; n < i; n++) {
          c.tweens[n].run(1);
        }return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
      } }),
        u = c.props;for (!function (e, t) {
      var n, i, r, o, s;for (n in e) {
        if (r = t[i = $(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = w.cssHooks[i]) && ("expand" in s)) for (n in o = s.expand(o), delete e[i], o) {
          (n in e) || (e[n] = o[n], t[n] = r);
        } else t[i] = r;
      }
    }(u, c.opts.specialEasing); o < s; o++) {
      if (i = at.prefilters[o].call(c, e, u, c.opts)) return m(i.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
    }return w.map(u, st, c), m(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), w.fx.timer(w.extend(l, { elem: e, anim: c, queue: c.opts.queue })), c;
  }w.Animation = w.extend(at, { tweeners: { "*": [function (e, t) {
        var n = this.createTween(e, t);return oe(n.elem, e, te.exec(t), n), n;
      }] }, tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(j);for (var n, i = 0, r = e.length; i < r; i++) {
        n = e[i], at.tweeners[n] = at.tweeners[n] || [], at.tweeners[n].unshift(t);
      }
    }, prefilters: [function (e, t, n) {
      var i,
          r,
          o,
          s,
          a,
          l,
          c,
          u,
          d = "width" in t || "height" in t,
          h = this,
          f = {},
          p = e.style,
          m = e.nodeType && ie(e),
          g = Q.get(e, "fxshow");for (i in n.queue || (null == (s = w._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
        s.unqueued || a();
      }), s.unqueued++, h.always(function () {
        h.always(function () {
          s.unqueued--, w.queue(e, "fx").length || s.empty.fire();
        });
      })), t) {
        if (r = t[i], tt.test(r)) {
          if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
            if ("show" !== r || !g || void 0 === g[i]) continue;m = !0;
          }f[i] = g && g[i] || w.style(e, i);
        }
      }if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(f)) for (i in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = g && g.display) && (c = Q.get(e, "display")), "none" === (u = w.css(e, "display")) && (c ? u = c : (le([e], !0), c = e.style.display || c, u = w.css(e, "display"), le([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === w.css(e, "float") && (l || (h.done(function () {
        p.display = c;
      }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
      })), l = !1, f) {
        l || (g ? "hidden" in g && (m = g.hidden) : g = Q.access(e, "fxshow", { display: c }), o && (g.hidden = !m), m && le([e], !0), h.done(function () {
          for (i in m || le([e]), Q.remove(e, "fxshow"), f) {
            w.style(e, i, f[i]);
          }
        })), l = st(m ? g[i] : 0, i, h), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0));
      }
    }], prefilter: function prefilter(e, t) {
      t ? at.prefilters.unshift(e) : at.prefilters.push(e);
    } }), w.speed = function (e, t, n) {
    var i = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? w.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t };return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in w.fx.speeds ? i.duration = w.fx.speeds[i.duration] : i.duration = w.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      m(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue);
    }, i;
  }, w.fn.extend({ fadeTo: function fadeTo(e, t, n, i) {
      return this.filter(ie).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
    }, animate: function animate(e, t, n, i) {
      var r = w.isEmptyObject(e),
          o = w.speed(t, n, i),
          s = function s() {
        var t = at(this, w.extend({}, e), o);(r || Q.get(this, "finish")) && t.stop(!0);
      };return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
    }, stop: function stop(e, t, n) {
      var i = function i(e) {
        var t = e.stop;delete e.stop, t(n);
      };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            r = null != e && e + "queueHooks",
            o = w.timers,
            s = Q.get(this);if (r) s[r] && s[r].stop && i(s[r]);else for (r in s) {
          s[r] && s[r].stop && nt.test(r) && i(s[r]);
        }for (r = o.length; r--;) {
          o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
        }!t && n || w.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = Q.get(this),
            i = n[e + "queue"],
            r = n[e + "queueHooks"],
            o = w.timers,
            s = i ? i.length : 0;for (n.finish = !0, w.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }for (t = 0; t < s; t++) {
          i[t] && i[t].finish && i[t].finish.call(this);
        }delete n.finish;
      });
    } }), w.each(["toggle", "show", "hide"], function (e, t) {
    var n = w.fn[t];w.fn[t] = function (e, i, r) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ot(t, !0), e, i, r);
    };
  }), w.each({ slideDown: ot("show"), slideUp: ot("hide"), slideToggle: ot("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    w.fn[e] = function (e, n, i) {
      return this.animate(t, e, n, i);
    };
  }), w.timers = [], w.fx.tick = function () {
    var e,
        t = 0,
        n = w.timers;for (Ze = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }n.length || w.fx.stop(), Ze = void 0;
  }, w.fx.timer = function (e) {
    w.timers.push(e), w.fx.start();
  }, w.fx.interval = 13, w.fx.start = function () {
    et || (et = !0, it());
  }, w.fx.stop = function () {
    et = null;
  }, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function (t, n) {
    return t = w.fx && w.fx.speeds[t] || t, n = n || "fx", this.queue(n, function (n, i) {
      var r = e.setTimeout(n, t);i.stop = function () {
        e.clearTimeout(r);
      };
    });
  }, function () {
    var e = i.createElement("input"),
        t = i.createElement("select").appendChild(i.createElement("option"));e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value;
  }();var lt,
      ct = w.expr.attrHandle;w.fn.extend({ attr: function attr(e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    } }), w.extend({ attr: function attr(e, t, n) {
      var i,
          r,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (r = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = w.find.attr(e, t)) ? void 0 : i);
    }, attrHooks: { type: { set: function set(e, t) {
          if (!p.radioValue && "radio" === t && S(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, removeAttr: function removeAttr(e, t) {
      var n,
          i = 0,
          r = t && t.match(j);if (r && 1 === e.nodeType) for (; n = r[i++];) {
        e.removeAttribute(n);
      }
    } }), lt = { set: function set(e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ct[t] || w.find.attr;ct[t] = function (e, t, i) {
      var r,
          o,
          s = t.toLowerCase();return i || (o = ct[s], ct[s] = r, r = null != n(e, t, i) ? s : null, ct[s] = o), r;
    };
  });var ut = /^(?:input|select|textarea|button)$/i,
      dt = /^(?:a|area)$/i;function ht(e) {
    return (e.match(j) || []).join(" ");
  }function ft(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }function pt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(j) || [];
  }w.fn.extend({ prop: function prop(e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    }, removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    } }), w.extend({ prop: function prop(e, t, n) {
      var i,
          r,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, r = w.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t];
    }, propHooks: { tabIndex: { get: function get(e) {
          var t = w.find.attr(e, "tabindex");return t ? parseInt(t, 10) : ut.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1;
        } } }, propFix: { for: "htmlFor", class: "className" } }), p.optSelected || (w.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    }, set: function set(e) {
      var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    } }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    w.propFix[this.toLowerCase()] = this;
  }), w.fn.extend({ addClass: function addClass(e) {
      var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;if (m(e)) return this.each(function (t) {
        w(this).addClass(e.call(this, t, ft(this)));
      });if ((t = pt(e)).length) for (; n = this[l++];) {
        if (r = ft(n), i = 1 === n.nodeType && " " + ht(r) + " ") {
          for (s = 0; o = t[s++];) {
            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
          }r !== (a = ht(i)) && n.setAttribute("class", a);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;if (m(e)) return this.each(function (t) {
        w(this).removeClass(e.call(this, t, ft(this)));
      });if (!arguments.length) return this.attr("class", "");if ((t = pt(e)).length) for (; n = this[l++];) {
        if (r = ft(n), i = 1 === n.nodeType && " " + ht(r) + " ") {
          for (s = 0; o = t[s++];) {
            for (; i.indexOf(" " + o + " ") > -1;) {
              i = i.replace(" " + o + " ", " ");
            }
          }r !== (a = ht(i)) && n.setAttribute("class", a);
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = typeof e === "undefined" ? "undefined" : _typeof(e),
          i = "string" === n || Array.isArray(e);return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each(function (n) {
        w(this).toggleClass(e.call(this, n, ft(this), t), t);
      }) : this.each(function () {
        var t, r, o, s;if (i) for (r = 0, o = w(this), s = pt(e); t = s[r++];) {
          o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
        } else void 0 !== e && "boolean" !== n || ((t = ft(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(e) {
      var t,
          n,
          i = 0;for (t = " " + e + " "; n = this[i++];) {
        if (1 === n.nodeType && (" " + ht(ft(n)) + " ").indexOf(t) > -1) return !0;
      }return !1;
    } });var mt = /\r/g;w.fn.extend({ val: function val(e) {
      var t,
          n,
          i,
          r = this[0];return arguments.length ? (i = m(e), this.each(function (n) {
        var r;1 === this.nodeType && (null == (r = i ? e.call(this, n, w(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = w.map(r, function (e) {
          return null == e ? "" : e + "";
        })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r));
      })) : r ? (t = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(mt, "") : null == n ? "" : n : void 0;
    } }), w.extend({ valHooks: { option: { get: function get(e) {
          var t = w.find.attr(e, "value");return null != t ? t : ht(w.text(e));
        } }, select: { get: function get(e) {
          var t,
              n,
              i,
              r = e.options,
              o = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              l = s ? o + 1 : r.length;for (i = o < 0 ? l : s ? o : 0; i < l; i++) {
            if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
              if (t = w(n).val(), s) return t;a.push(t);
            }
          }return a;
        }, set: function set(e, t) {
          for (var n, i, r = e.options, o = w.makeArray(t), s = r.length; s--;) {
            ((i = r[s]).selected = w.inArray(w.valHooks.option.get(i), o) > -1) && (n = !0);
          }return n || (e.selectedIndex = -1), o;
        } } } }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = { set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
      } }, p.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), p.focusin = "onfocusin" in e;var gt = /^(?:focusinfocus|focusoutblur)$/,
      vt = function vt(e) {
    e.stopPropagation();
  };w.extend(w.event, { trigger: function trigger(t, n, r, o) {
      var s,
          a,
          l,
          c,
          u,
          h,
          f,
          p,
          v = [r || i],
          y = d.call(t, "type") ? t.type : t,
          b = d.call(t, "namespace") ? t.namespace.split(".") : [];if (a = p = l = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !gt.test(y + w.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(), b.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t)).isTrigger = o ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : w.makeArray(n, [t]), f = w.event.special[y] || {}, o || !f.trigger || !1 !== f.trigger.apply(r, n))) {
        if (!o && !f.noBubble && !g(r)) {
          for (c = f.delegateType || y, gt.test(c + y) || (a = a.parentNode); a; a = a.parentNode) {
            v.push(a), l = a;
          }l === (r.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e);
        }for (s = 0; (a = v[s++]) && !t.isPropagationStopped();) {
          p = a, t.type = s > 1 ? c : f.bindType || y, (h = (Q.get(a, "events") || {})[t.type] && Q.get(a, "handle")) && h.apply(a, n), (h = u && a[u]) && h.apply && K(a) && (t.result = h.apply(a, n), !1 === t.result && t.preventDefault());
        }return t.type = y, o || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(v.pop(), n) || !K(r) || u && m(r[y]) && !g(r) && ((l = r[u]) && (r[u] = null), w.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, vt), r[y](), t.isPropagationStopped() && p.removeEventListener(y, vt), w.event.triggered = void 0, l && (r[u] = l)), t.result;
      }
    }, simulate: function simulate(e, t, n) {
      var i = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });w.event.trigger(i, null, t);
    } }), w.fn.extend({ trigger: function trigger(e, t) {
      return this.each(function () {
        w.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      var n = this[0];if (n) return w.event.trigger(e, t, n, !0);
    } }), p.focusin || w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = function n(e) {
      w.event.simulate(t, e.target, w.event.fix(e));
    };w.event.special[t] = { setup: function setup() {
        var i = this.ownerDocument || this,
            r = Q.access(i, t);r || i.addEventListener(e, n, !0), Q.access(i, t, (r || 0) + 1);
      }, teardown: function teardown() {
        var i = this.ownerDocument || this,
            r = Q.access(i, t) - 1;r ? Q.access(i, t, r) : (i.removeEventListener(e, n, !0), Q.remove(i, t));
      } };
  });var yt = e.location,
      bt = Date.now(),
      wt = /\?/;w.parseXML = function (t) {
    var n;if (!t || "string" != typeof t) return null;try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
  };var Et = /\[\]$/,
      Ct = /\r?\n/g,
      _t = /^(?:submit|button|image|reset|file)$/i,
      Tt = /^(?:input|select|textarea|keygen)/i;function xt(e, t, n, i) {
    var r;if (Array.isArray(t)) w.each(t, function (t, r) {
      n || Et.test(e) ? i(e, r) : xt(e + "[" + ("object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && null != r ? t : "") + "]", r, n, i);
    });else if (n || "object" !== b(t)) i(e, t);else for (r in t) {
      xt(e + "[" + r + "]", t[r], n, i);
    }
  }w.param = function (e, t) {
    var n,
        i = [],
        r = function r(e, t) {
      var n = m(t) ? t() : t;i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      r(this.name, this.value);
    });else for (n in e) {
      xt(n, e[n], t, r);
    }return i.join("&");
  }, w.fn.extend({ serialize: function serialize() {
      return w.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = w.prop(this, "elements");return e ? w.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !w(this).is(":disabled") && Tt.test(this.nodeName) && !_t.test(e) && (this.checked || !ce.test(e));
      }).map(function (e, t) {
        var n = w(this).val();return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
          return { name: t.name, value: e.replace(Ct, "\r\n") };
        }) : { name: t.name, value: n.replace(Ct, "\r\n") };
      }).get();
    } });var kt = /%20/g,
      St = /#.*$/,
      At = /([?&])_=[^&]*/,
      Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      It = /^(?:GET|HEAD)$/,
      Nt = /^\/\//,
      Pt = {},
      Lt = {},
      Ot = "*/".concat("*"),
      jt = i.createElement("a");function Mt(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");var i,
          r = 0,
          o = t.toLowerCase().match(j) || [];if (m(n)) for (; i = o[r++];) {
        "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
      }
    };
  }function Ht(e, t, n, i) {
    var r = {},
        o = e === Lt;function s(a) {
      var l;return r[a] = !0, w.each(e[a] || [], function (e, a) {
        var c = a(t, n, i);return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1);
      }), l;
    }return s(t.dataTypes[0]) || !r["*"] && s("*");
  }function qt(e, t) {
    var n,
        i,
        r = w.ajaxSettings.flatOptions || {};for (n in t) {
      void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    }return i && w.extend(!0, e, i), e;
  }jt.href = yt.href, w.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: yt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Ot, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? qt(qt(e, w.ajaxSettings), t) : qt(w.ajaxSettings, e);
    }, ajaxPrefilter: Mt(Pt), ajaxTransport: Mt(Lt), ajax: function ajax(t, n) {
      "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {};var r,
          o,
          s,
          a,
          l,
          c,
          u,
          d,
          h,
          f,
          p = w.ajaxSetup({}, n),
          m = p.context || p,
          g = p.context && (m.nodeType || m.jquery) ? w(m) : w.event,
          v = w.Deferred(),
          y = w.Callbacks("once memory"),
          b = p.statusCode || {},
          E = {},
          C = {},
          _ = "canceled",
          T = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (u) {
            if (!a) for (a = {}; t = Dt.exec(s);) {
              a[t[1].toLowerCase()] = t[2];
            }t = a[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return u ? s : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          return null == u && (e = C[e.toLowerCase()] = C[e.toLowerCase()] || e, E[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return null == u && (p.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          var t;if (e) if (u) T.always(e[T.status]);else for (t in e) {
            b[t] = [b[t], e[t]];
          }return this;
        }, abort: function abort(e) {
          var t = e || _;return r && r.abort(t), x(0, t), this;
        } };if (v.promise(T), p.url = ((t || p.url || yt.href) + "").replace(Nt, yt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(j) || [""], null == p.crossDomain) {
        c = i.createElement("a");try {
          c.href = p.url, c.href = c.href, p.crossDomain = jt.protocol + "//" + jt.host != c.protocol + "//" + c.host;
        } catch (e) {
          p.crossDomain = !0;
        }
      }if (p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), Ht(Pt, p, n, T), u) return T;for (h in (d = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !It.test(p.type), o = p.url.replace(St, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(kt, "+")) : (f = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (wt.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(At, "$1"), f = (wt.test(o) ? "&" : "?") + "_=" + bt++ + f), p.url = o + f), p.ifModified && (w.lastModified[o] && T.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && T.setRequestHeader("If-None-Match", w.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : p.accepts["*"]), p.headers) {
        T.setRequestHeader(h, p.headers[h]);
      }if (p.beforeSend && (!1 === p.beforeSend.call(m, T, p) || u)) return T.abort();if (_ = "abort", y.add(p.complete), T.done(p.success), T.fail(p.error), r = Ht(Lt, p, n, T)) {
        if (T.readyState = 1, d && g.trigger("ajaxSend", [T, p]), u) return T;p.async && p.timeout > 0 && (l = e.setTimeout(function () {
          T.abort("timeout");
        }, p.timeout));try {
          u = !1, r.send(E, x);
        } catch (e) {
          if (u) throw e;x(-1, e);
        }
      } else x(-1, "No Transport");function x(t, n, i, a) {
        var c,
            h,
            f,
            E,
            C,
            _ = n;u || (u = !0, l && e.clearTimeout(l), r = void 0, s = a || "", T.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (E = function (e, t, n) {
          for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0];) {
            l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
          }if (i) for (r in a) {
            if (a[r] && a[r].test(i)) {
              l.unshift(r);break;
            }
          }if (l[0] in n) o = l[0];else {
            for (r in n) {
              if (!l[0] || e.converters[r + " " + l[0]]) {
                o = r;break;
              }s || (s = r);
            }o = o || s;
          }if (o) return o !== l[0] && l.unshift(o), n[o];
        }(p, T, i)), E = function (e, t, n, i) {
          var r,
              o,
              s,
              a,
              l,
              c = {},
              u = e.dataTypes.slice();if (u[1]) for (s in e.converters) {
            c[s.toLowerCase()] = e.converters[s];
          }for (o = u.shift(); o;) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
              if (!(s = c[l + " " + o] || c["* " + o])) for (r in c) {
                if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                  !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));break;
                }
              }if (!0 !== s) if (s && e.throws) t = s(t);else try {
                t = s(t);
              } catch (e) {
                return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + o };
              }
            }
          }return { state: "success", data: t };
        }(p, E, T, c), c ? (p.ifModified && ((C = T.getResponseHeader("Last-Modified")) && (w.lastModified[o] = C), (C = T.getResponseHeader("etag")) && (w.etag[o] = C)), 204 === t || "HEAD" === p.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = E.state, h = E.data, c = !(f = E.error))) : (f = _, !t && _ || (_ = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || _) + "", c ? v.resolveWith(m, [h, _, T]) : v.rejectWith(m, [T, _, f]), T.statusCode(b), b = void 0, d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [T, p, c ? h : f]), y.fireWith(m, [T, _]), d && (g.trigger("ajaxComplete", [T, p]), --w.active || w.event.trigger("ajaxStop")));
      }return T;
    }, getJSON: function getJSON(e, t, n) {
      return w.get(e, t, n, "json");
    }, getScript: function getScript(e, t) {
      return w.get(e, void 0, t, "script");
    } }), w.each(["get", "post"], function (e, t) {
    w[t] = function (e, n, i, r) {
      return m(n) && (r = r || i, i = n, n = void 0), w.ajax(w.extend({ url: e, type: t, dataType: r, data: n, success: i }, w.isPlainObject(e) && e));
    };
  }), w._evalUrl = function (e) {
    return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
  }, w.fn.extend({ wrapAll: function wrapAll(e) {
      var t;return this[0] && (m(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) {
          e = e.firstElementChild;
        }return e;
      }).append(this)), this;
    }, wrapInner: function wrapInner(e) {
      return m(e) ? this.each(function (t) {
        w(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = w(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = m(e);return this.each(function (n) {
        w(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        w(this).replaceWith(this.childNodes);
      }), this;
    } }), w.expr.pseudos.hidden = function (e) {
    return !w.expr.pseudos.visible(e);
  }, w.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, w.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };var Ft = { 0: 200, 1223: 204 },
      Bt = w.ajaxSettings.xhr();p.cors = !!Bt && "withCredentials" in Bt, p.ajax = Bt = !!Bt, w.ajaxTransport(function (t) {
    var _n, i;if (p.cors || Bt && !t.crossDomain) return { send: function send(r, o) {
        var s,
            a = t.xhr();if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) {
          a[s] = t.xhrFields[s];
        }for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) {
          a.setRequestHeader(s, r[s]);
        }_n = function n(e) {
          return function () {
            _n && (_n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ft[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
          };
        }, a.onload = _n(), i = a.onerror = a.ontimeout = _n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
          4 === a.readyState && e.setTimeout(function () {
            _n && i();
          });
        }, _n = _n("abort");try {
          a.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n) throw e;
        }
      }, abort: function abort() {
        _n && _n();
      } };
  }), w.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), w.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
        return w.globalEval(e), e;
      } } }), w.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), w.ajaxTransport("script", function (e) {
    var t, _n2;if (e.crossDomain) return { send: function send(r, o) {
        t = w("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n2 = function n(e) {
          t.remove(), _n2 = null, e && o("error" === e.type ? 404 : 200, e.type);
        }), i.head.appendChild(t[0]);
      }, abort: function abort() {
        _n2 && _n2();
      } };
  });var Rt,
      zt = [],
      Wt = /(=)\?(?=&|$)|\?\?/;w.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = zt.pop() || w.expando + "_" + bt++;return this[e] = !0, e;
    } }), w.ajaxPrefilter("json jsonp", function (t, n, i) {
    var r,
        o,
        s,
        a = !1 !== t.jsonp && (Wt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(t.data) && "data");if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Wt, "$1" + r) : !1 !== t.jsonp && (t.url += (wt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
      return s || w.error(r + " was not called"), s[0];
    }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
      s = arguments;
    }, i.always(function () {
      void 0 === o ? w(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, zt.push(r)), s && m(o) && o(s[0]), s = o = void 0;
    }), "script";
  }), p.createHTMLDocument = ((Rt = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Rt.childNodes.length), w.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(r)) : t = i), o = A.exec(e), s = !n && [], o ? [t.createElement(o[1])] : (o = ye([e], t, s), s && s.length && w(s).remove(), w.merge([], o.childNodes)));var r, o, s;
  }, w.fn.load = function (e, t, n) {
    var i,
        r,
        o,
        s = this,
        a = e.indexOf(" ");return a > -1 && (i = ht(e.slice(a)), e = e.slice(0, a)), m(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (r = "POST"), s.length > 0 && w.ajax({ url: e, type: r || "GET", dataType: "html", data: t }).done(function (e) {
      o = arguments, s.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e);
    }).always(n && function (e, t) {
      s.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    w.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), w.expr.pseudos.animated = function (e) {
    return w.grep(w.timers, function (t) {
      return e === t.elem;
    }).length;
  }, w.offset = { setOffset: function setOffset(e, t, n) {
      var i,
          r,
          o,
          s,
          a,
          l,
          c = w.css(e, "position"),
          u = w(e),
          d = {};"static" === c && (e.style.position = "relative"), a = u.offset(), o = w.css(e, "top"), l = w.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), m(t) && (t = t.call(e, n, w.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : u.css(d);
    } }, w.fn.extend({ offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        w.offset.setOffset(this, e, t);
      });var t,
          n,
          i = this[0];return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0;
    }, position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            i = this[0],
            r = { top: 0, left: 0 };if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();else {
          for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) {
            e = e.parentNode;
          }e && e !== i && 1 === e.nodeType && ((r = w(e).offset()).top += w.css(e, "borderTopWidth", !0), r.left += w.css(e, "borderLeftWidth", !0));
        }return { top: t.top - r.top - w.css(i, "marginTop", !0), left: t.left - r.left - w.css(i, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === w.css(e, "position");) {
          e = e.offsetParent;
        }return e || be;
      });
    } }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
    var n = "pageYOffset" === t;w.fn[e] = function (i) {
      return z(this, function (e, i, r) {
        var o;if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r;
      }, e, i, arguments.length);
    };
  }), w.each(["top", "left"], function (e, t) {
    w.cssHooks[t] = Re(p.pixelPosition, function (e, n) {
      if (n) return n = Be(e, t), He.test(n) ? w(e).position()[t] + "px" : n;
    });
  }), w.each({ Height: "height", Width: "width" }, function (e, t) {
    w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
      w.fn[i] = function (r, o) {
        var s = arguments.length && (n || "boolean" != typeof r),
            a = n || (!0 === r || !0 === o ? "margin" : "border");return z(this, function (t, n, r) {
          var o;return g(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? w.css(t, n, a) : w.style(t, n, r, a);
        }, t, s ? r : void 0, s);
      };
    });
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    w.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), w.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    } }), w.fn.extend({ bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, i) {
      return this.on(t, e, n, i);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } }), w.proxy = function (e, t) {
    var n, i, r;if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return i = o.call(arguments, 2), (r = function r() {
      return e.apply(t || this, i.concat(o.call(arguments)));
    }).guid = e.guid = e.guid || w.guid++, r;
  }, w.holdReady = function (e) {
    e ? w.readyWait++ : w.ready(!0);
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = S, w.isFunction = m, w.isWindow = g, w.camelCase = $, w.type = b, w.now = Date.now, w.isNumeric = function (e) {
    var t = w.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return w;
  });var Ut = e.jQuery,
      Vt = e.$;return w.noConflict = function (t) {
    return e.$ === w && (e.$ = Vt), t && e.jQuery === w && (e.jQuery = Ut), w;
  }, t || (e.jQuery = e.$ = w), w;
}), function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t();
}(this, function () {
  "use strict";
  for (var e = "undefined" != typeof window && "undefined" != typeof document, t = ["Edge", "Trident", "Firefox"], n = 0, i = 0; i < t.length; i += 1) {
    if (e && navigator.userAgent.indexOf(t[i]) >= 0) {
      n = 1;break;
    }
  }var r = e && window.Promise ? function (e) {
    var t = !1;return function () {
      t || (t = !0, window.Promise.resolve().then(function () {
        t = !1, e();
      }));
    };
  } : function (e) {
    var t = !1;return function () {
      t || (t = !0, setTimeout(function () {
        t = !1, e();
      }, n));
    };
  };function o(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }function s(e, t) {
    if (1 !== e.nodeType) return [];var n = getComputedStyle(e, null);return t ? n[t] : n;
  }function a(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }function l(e) {
    if (!e) return document.body;switch (e.nodeName) {case "HTML":case "BODY":
        return e.ownerDocument.body;case "#document":
        return e.body;}var t = s(e),
        n = t.overflow,
        i = t.overflowX,
        r = t.overflowY;return (/(auto|scroll|overlay)/.test(n + r + i) ? e : l(a(e))
    );
  }var c = e && !(!window.MSInputMethodContext || !document.documentMode),
      u = e && /MSIE 10/.test(navigator.userAgent);function d(e) {
    return 11 === e ? c : 10 === e ? u : c || u;
  }function h(e) {
    if (!e) return document.documentElement;for (var t = d(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling;) {
      n = (e = e.nextElementSibling).offsetParent;
    }var i = n && n.nodeName;return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === s(n, "position") ? h(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
  }function f(e) {
    return null !== e.parentNode ? f(e.parentNode) : e;
  }function p(e, t) {
    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? e : t,
        r = n ? t : e,
        o = document.createRange();o.setStart(i, 0), o.setEnd(r, 0);var s,
        a,
        l = o.commonAncestorContainer;if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && h(s.firstElementChild) !== s ? h(l) : l;var c = f(e);return c.host ? p(c.host, t) : p(e, f(t).host);
  }function m(e) {
    var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
        n = e.nodeName;if ("BODY" === n || "HTML" === n) {
      var i = e.ownerDocument.documentElement;return (e.ownerDocument.scrollingElement || i)[t];
    }return e[t];
  }function g(e, t) {
    var n = "x" === t ? "Left" : "Top",
        i = "Left" === n ? "Right" : "Bottom";return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10);
  }function v(e, t, n, i) {
    return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], d(10) ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0);
  }function y() {
    var e = document.body,
        t = document.documentElement,
        n = d(10) && getComputedStyle(t);return { height: v("Height", e, t, n), width: v("Width", e, t, n) };
  }var b = function b(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  },
      w = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t;
    };
  }(),
      E = function E(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  },
      C = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];for (var i in n) {
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
    }return e;
  };function _(e) {
    return C({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }function T(e) {
    var t = {};try {
      if (d(10)) {
        t = e.getBoundingClientRect();var n = m(e, "top"),
            i = m(e, "left");t.top += n, t.left += i, t.bottom += n, t.right += i;
      } else t = e.getBoundingClientRect();
    } catch (e) {}var r = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
        o = "HTML" === e.nodeName ? y() : {},
        a = o.width || e.clientWidth || r.right - r.left,
        l = o.height || e.clientHeight || r.bottom - r.top,
        c = e.offsetWidth - a,
        u = e.offsetHeight - l;if (c || u) {
      var h = s(e);c -= g(h, "x"), u -= g(h, "y"), r.width -= c, r.height -= u;
    }return _(r);
  }function x(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = d(10),
        r = "HTML" === t.nodeName,
        o = T(e),
        a = T(t),
        c = l(e),
        u = s(t),
        h = parseFloat(u.borderTopWidth, 10),
        f = parseFloat(u.borderLeftWidth, 10);n && "HTML" === t.nodeName && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));var p = _({ top: o.top - a.top - h, left: o.left - a.left - f, width: o.width, height: o.height });if (p.marginTop = 0, p.marginLeft = 0, !i && r) {
      var g = parseFloat(u.marginTop, 10),
          v = parseFloat(u.marginLeft, 10);p.top -= h - g, p.bottom -= h - g, p.left -= f - v, p.right -= f - v, p.marginTop = g, p.marginLeft = v;
    }return (i && !n ? t.contains(c) : t === c && "BODY" !== c.nodeName) && (p = function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = m(t, "top"),
          r = m(t, "left"),
          o = n ? -1 : 1;return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e;
    }(p, t)), p;
  }function k(e) {
    if (!e || !e.parentElement || d()) return document.documentElement;for (var t = e.parentElement; t && "none" === s(t, "transform");) {
      t = t.parentElement;
    }return t || document.documentElement;
  }function S(e, t, n, i) {
    var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        o = { top: 0, left: 0 },
        c = r ? k(e) : p(e, t);if ("viewport" === i) o = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = e.ownerDocument.documentElement,
          i = x(e, n),
          r = Math.max(n.clientWidth, window.innerWidth || 0),
          o = Math.max(n.clientHeight, window.innerHeight || 0),
          s = t ? 0 : m(n),
          a = t ? 0 : m(n, "left");return _({ top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: r, height: o });
    }(c, r);else {
      var u = void 0;"scrollParent" === i ? "BODY" === (u = l(a(t))).nodeName && (u = e.ownerDocument.documentElement) : u = "window" === i ? e.ownerDocument.documentElement : i;var d = x(u, c, r);if ("HTML" !== u.nodeName || function e(t) {
        var n = t.nodeName;return "BODY" !== n && "HTML" !== n && ("fixed" === s(t, "position") || e(a(t)));
      }(c)) o = d;else {
        var h = y(),
            f = h.height,
            g = h.width;o.top += d.top - d.marginTop, o.bottom = f + d.top, o.left += d.left - d.marginLeft, o.right = g + d.left;
      }
    }return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o;
  }function A(e, t, n, i, r) {
    var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;if (-1 === e.indexOf("auto")) return e;var s = S(n, i, o, r),
        a = { top: { width: s.width, height: t.top - s.top }, right: { width: s.right - t.right, height: s.height }, bottom: { width: s.width, height: s.bottom - t.bottom }, left: { width: t.left - s.left, height: s.height } },
        l = Object.keys(a).map(function (e) {
      return C({ key: e }, a[e], { area: (t = a[e], t.width * t.height) });var t;
    }).sort(function (e, t) {
      return t.area - e.area;
    }),
        c = l.filter(function (e) {
      var t = e.width,
          i = e.height;return t >= n.clientWidth && i >= n.clientHeight;
    }),
        u = c.length > 0 ? c[0].key : l[0].key,
        d = e.split("-")[1];return u + (d ? "-" + d : "");
  }function D(e, t, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;return x(n, i ? k(t) : p(t, n), i);
  }function I(e) {
    var t = getComputedStyle(e),
        n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
        i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);return { width: e.offsetWidth + i, height: e.offsetHeight + n };
  }function N(e) {
    var t = { left: "right", right: "left", bottom: "top", top: "bottom" };return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }function P(e, t, n) {
    n = n.split("-")[0];var i = I(e),
        r = { width: i.width, height: i.height },
        o = -1 !== ["right", "left"].indexOf(n),
        s = o ? "top" : "left",
        a = o ? "left" : "top",
        l = o ? "height" : "width",
        c = o ? "width" : "height";return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[N(a)], r;
  }function L(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }function O(e, t, n) {
    return (void 0 === n ? e : e.slice(0, function (e, t, n) {
      if (Array.prototype.findIndex) return e.findIndex(function (e) {
        return e[t] === n;
      });var i = L(e, function (e) {
        return e[t] === n;
      });return e.indexOf(i);
    }(e, "name", n))).forEach(function (e) {
      e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n = e.function || e.fn;e.enabled && o(n) && (t.offsets.popper = _(t.offsets.popper), t.offsets.reference = _(t.offsets.reference), t = n(t, e));
    }), t;
  }function j(e, t) {
    return e.some(function (e) {
      var n = e.name;return e.enabled && n === t;
    });
  }function M(e) {
    for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
      var r = t[i],
          o = r ? "" + r + n : e;if (void 0 !== document.body.style[o]) return o;
    }return null;
  }function H(e) {
    var t = e.ownerDocument;return t ? t.defaultView : window;
  }function q(e, t, n, i) {
    n.updateBound = i, H(e).addEventListener("resize", n.updateBound, { passive: !0 });var r = l(e);return function e(t, n, i, r) {
      var o = "BODY" === t.nodeName,
          s = o ? t.ownerDocument.defaultView : t;s.addEventListener(n, i, { passive: !0 }), o || e(l(s.parentNode), n, i, r), r.push(s);
    }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n;
  }function F() {
    var e, t;this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, H(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener("scroll", t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t));
  }function B(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }function R(e, t) {
    Object.keys(t).forEach(function (n) {
      var i = "";-1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && B(t[n]) && (i = "px"), e.style[n] = t[n] + i;
    });
  }function z(e, t, n) {
    var i = L(e, function (e) {
      return e.name === t;
    }),
        r = !!i && e.some(function (e) {
      return e.name === n && e.enabled && e.order < i.order;
    });if (!r) {
      var o = "`" + t + "`",
          s = "`" + n + "`";console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!");
    }return r;
  }var W = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      U = W.slice(3);function V(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = U.indexOf(e),
        i = U.slice(n + 1).concat(U.slice(0, n));return t ? i.reverse() : i;
  }var $ = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" };function K(e, t, n, i) {
    var r = [0, 0],
        o = -1 !== ["right", "left"].indexOf(i),
        s = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        a = s.indexOf(L(s, function (e) {
      return -1 !== e.search(/,|\s/);
    }));s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l = /\s*,\s*|\s+/,
        c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];return (c = c.map(function (e, i) {
      var r = (1 === i ? !o : o) ? "height" : "width",
          s = !1;return e.reduce(function (e, t) {
        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return function (e, t, n, i) {
          var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
              o = +r[1],
              s = r[2];if (!o) return e;if (0 === s.indexOf("%")) {
            var a = void 0;switch (s) {case "%p":
                a = n;break;case "%":case "%r":default:
                a = i;}return _(a)[t] / 100 * o;
          }if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;return o;
        }(e, r, t, n);
      });
    })).forEach(function (e, t) {
      e.forEach(function (n, i) {
        B(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1));
      });
    }), r;
  }var Y = { placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function onCreate() {}, onUpdate: function onUpdate() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function fn(e) {
          var t = e.placement,
              n = t.split("-")[0],
              i = t.split("-")[1];if (i) {
            var r = e.offsets,
                o = r.reference,
                s = r.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                u = { start: E({}, l, o[l]), end: E({}, l, o[l] + o[c] - s[c]) };e.offsets.popper = C({}, s, u[i]);
          }return e;
        } }, offset: { order: 200, enabled: !0, fn: function fn(e, t) {
          var n = t.offset,
              i = e.placement,
              r = e.offsets,
              o = r.popper,
              s = r.reference,
              a = i.split("-")[0],
              l = void 0;return l = B(+n) ? [+n, 0] : K(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), e.popper = o, e;
        }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function fn(e, t) {
          var n = t.boundariesElement || h(e.instance.popper);e.instance.reference === n && (n = h(n));var i = M("transform"),
              r = e.instance.popper.style,
              o = r.top,
              s = r.left,
              a = r[i];r.top = "", r.left = "", r[i] = "";var l = S(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);r.top = o, r.left = s, r[i] = a, t.boundaries = l;var c = t.priority,
              u = e.offsets.popper,
              d = { primary: function primary(e) {
              var n = u[e];return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), E({}, e, n);
            }, secondary: function secondary(e) {
              var n = "right" === e ? "left" : "top",
                  i = u[n];return u[e] > l[e] && !t.escapeWithReference && (i = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), E({}, n, i);
            } };return c.forEach(function (e) {
            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";u = C({}, u, d[t](e));
          }), e.offsets.popper = u, e;
        }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function fn(e) {
          var t = e.offsets,
              n = t.popper,
              i = t.reference,
              r = e.placement.split("-")[0],
              o = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(r),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e;
        } }, arrow: { order: 500, enabled: !0, fn: function fn(e, t) {
          var n;if (!z(e.instance.modifiers, "arrow", "keepTogether")) return e;var i = t.element;if ("string" == typeof i) {
            if (!(i = e.instance.popper.querySelector(i))) return e;
          } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;var r = e.placement.split("-")[0],
              o = e.offsets,
              a = o.popper,
              l = o.reference,
              c = -1 !== ["left", "right"].indexOf(r),
              u = c ? "height" : "width",
              d = c ? "Top" : "Left",
              h = d.toLowerCase(),
              f = c ? "left" : "top",
              p = c ? "bottom" : "right",
              m = I(i)[u];l[p] - m < a[h] && (e.offsets.popper[h] -= a[h] - (l[p] - m)), l[h] + m > a[p] && (e.offsets.popper[h] += l[h] + m - a[p]), e.offsets.popper = _(e.offsets.popper);var g = l[h] + l[u] / 2 - m / 2,
              v = s(e.instance.popper),
              y = parseFloat(v["margin" + d], 10),
              b = parseFloat(v["border" + d + "Width"], 10),
              w = g - e.offsets.popper[h] - y - b;return w = Math.max(Math.min(a[u] - m, w), 0), e.arrowElement = i, e.offsets.arrow = (E(n = {}, h, Math.round(w)), E(n, f, ""), n), e;
        }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function fn(e, t) {
          if (j(e.instance.modifiers, "inner")) return e;if (e.flipped && e.placement === e.originalPlacement) return e;var n = S(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
              i = e.placement.split("-")[0],
              r = N(i),
              o = e.placement.split("-")[1] || "",
              s = [];switch (t.behavior) {case $.FLIP:
              s = [i, r];break;case $.CLOCKWISE:
              s = V(i);break;case $.COUNTERCLOCKWISE:
              s = V(i, !0);break;default:
              s = t.behavior;}return s.forEach(function (a, l) {
            if (i !== a || s.length === l + 1) return e;i = e.placement.split("-")[0], r = N(i);var c = e.offsets.popper,
                u = e.offsets.reference,
                d = Math.floor,
                h = "left" === i && d(c.right) > d(u.left) || "right" === i && d(c.left) < d(u.right) || "top" === i && d(c.bottom) > d(u.top) || "bottom" === i && d(c.top) < d(u.bottom),
                f = d(c.left) < d(n.left),
                p = d(c.right) > d(n.right),
                m = d(c.top) < d(n.top),
                g = d(c.bottom) > d(n.bottom),
                v = "left" === i && f || "right" === i && p || "top" === i && m || "bottom" === i && g,
                y = -1 !== ["top", "bottom"].indexOf(i),
                b = !!t.flipVariations && (y && "start" === o && f || y && "end" === o && p || !y && "start" === o && m || !y && "end" === o && g);(h || v || b) && (e.flipped = !0, (h || v) && (i = s[l + 1]), b && (o = function (e) {
              return "end" === e ? "start" : "start" === e ? "end" : e;
            }(o)), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = C({}, e.offsets.popper, P(e.instance.popper, e.offsets.reference, e.placement)), e = O(e.instance.modifiers, e, "flip"));
          }), e;
        }, behavior: "flip", padding: 5, boundariesElement: "viewport" }, inner: { order: 700, enabled: !1, fn: function fn(e) {
          var t = e.placement,
              n = t.split("-")[0],
              i = e.offsets,
              r = i.popper,
              o = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = N(t), e.offsets.popper = _(r), e;
        } }, hide: { order: 800, enabled: !0, fn: function fn(e) {
          if (!z(e.instance.modifiers, "hide", "preventOverflow")) return e;var t = e.offsets.reference,
              n = L(e.instance.modifiers, function (e) {
            return "preventOverflow" === e.name;
          }).boundaries;if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
            if (!0 === e.hide) return e;e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
          } else {
            if (!1 === e.hide) return e;e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
          }return e;
        } }, computeStyle: { order: 850, enabled: !0, fn: function fn(e, t) {
          var n = t.x,
              i = t.y,
              r = e.offsets.popper,
              o = L(e.instance.modifiers, function (e) {
            return "applyStyle" === e.name;
          }).gpuAcceleration;void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s = void 0 !== o ? o : t.gpuAcceleration,
              a = T(h(e.instance.popper)),
              l = { position: r.position },
              c = { left: Math.floor(r.left), top: Math.round(r.top), bottom: Math.round(r.bottom), right: Math.floor(r.right) },
              u = "bottom" === n ? "top" : "bottom",
              d = "right" === i ? "left" : "right",
              f = M("transform"),
              p = void 0,
              m = void 0;if (m = "bottom" === u ? -a.height + c.bottom : c.top, p = "right" === d ? -a.width + c.right : c.left, s && f) l[f] = "translate3d(" + p + "px, " + m + "px, 0)", l[u] = 0, l[d] = 0, l.willChange = "transform";else {
            var g = "bottom" === u ? -1 : 1,
                v = "right" === d ? -1 : 1;l[u] = m * g, l[d] = p * v, l.willChange = u + ", " + d;
          }var y = { "x-placement": e.placement };return e.attributes = C({}, y, e.attributes), e.styles = C({}, l, e.styles), e.arrowStyles = C({}, e.offsets.arrow, e.arrowStyles), e;
        }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function fn(e) {
          var t, n;return R(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function (e) {
            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
          }), e.arrowElement && Object.keys(e.arrowStyles).length && R(e.arrowElement, e.arrowStyles), e;
        }, onLoad: function onLoad(e, t, n, i, r) {
          var o = D(r, t, e, n.positionFixed),
              s = A(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);return t.setAttribute("x-placement", s), R(t, { position: n.positionFixed ? "fixed" : "absolute" }), n;
        }, gpuAcceleration: void 0 } } },
      Q = function () {
    function e(t, n) {
      var i = this,
          s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};b(this, e), this.scheduleUpdate = function () {
        return requestAnimationFrame(i.update);
      }, this.update = r(this.update.bind(this)), this.options = C({}, e.Defaults, s), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(C({}, e.Defaults.modifiers, s.modifiers)).forEach(function (t) {
        i.options.modifiers[t] = C({}, e.Defaults.modifiers[t] || {}, s.modifiers ? s.modifiers[t] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return C({ name: e }, i.options.modifiers[e]);
      }).sort(function (e, t) {
        return e.order - t.order;
      }), this.modifiers.forEach(function (e) {
        e.enabled && o(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state);
      }), this.update();var a = this.options.eventsEnabled;a && this.enableEventListeners(), this.state.eventsEnabled = a;
    }return w(e, [{ key: "update", value: function value() {
        return function () {
          if (!this.state.isDestroyed) {
            var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };e.offsets.reference = D(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = A(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = P(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = O(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
          }
        }.call(this);
      } }, { key: "destroy", value: function value() {
        return function () {
          return this.state.isDestroyed = !0, j(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[M("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
        }.call(this);
      } }, { key: "enableEventListeners", value: function value() {
        return function () {
          this.state.eventsEnabled || (this.state = q(this.reference, this.options, this.state, this.scheduleUpdate));
        }.call(this);
      } }, { key: "disableEventListeners", value: function value() {
        return F.call(this);
      } }]), e;
  }();return Q.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Q.placements = W, Q.Defaults = Y, Q;
}), function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(e.bootstrap = {}, e.jQuery, e.Popper);
}(this, function (e, t, n) {
  "use strict";
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }function r(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e;
  }function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }function s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable;
      }))), i.forEach(function (t) {
        o(e, t, n[t]);
      });
    }return e;
  }t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;var a = function (e) {
    var t = "transitionend";function n(t) {
      var n = this,
          r = !1;return e(this).one(i.TRANSITION_END, function () {
        r = !0;
      }), setTimeout(function () {
        r || i.triggerTransitionEnd(n);
      }, t), this;
    }var i = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(e) {
        do {
          e += ~~(1e6 * Math.random());
        } while (document.getElementById(e));return e;
      }, getSelectorFromElement: function getSelectorFromElement(t) {
        var n = t.getAttribute("data-target");n && "#" !== n || (n = t.getAttribute("href") || "");try {
          return e(document).find(n).length > 0 ? n : null;
        } catch (e) {
          return null;
        }
      }, getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
        if (!t) return 0;var n = e(t).css("transition-duration");return parseFloat(n) ? (n = n.split(",")[0], 1e3 * parseFloat(n)) : 0;
      }, reflow: function reflow(e) {
        return e.offsetHeight;
      }, triggerTransitionEnd: function triggerTransitionEnd(n) {
        e(n).trigger(t);
      }, supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(t);
      }, isElement: function isElement(e) {
        return (e[0] || e).nodeType;
      }, typeCheckConfig: function typeCheckConfig(e, t, n) {
        for (var r in n) {
          if (Object.prototype.hasOwnProperty.call(n, r)) {
            var o = n[r],
                s = t[r],
                a = s && i.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());if (!new RegExp(o).test(a)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + o + '".');
          }
        }var l;
      } };return e.fn.emulateTransitionEnd = n, e.event.special[i.TRANSITION_END] = { bindType: t, delegateType: t, handle: function handle(t) {
        if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
      } }, i;
  }(t),
      l = function (e) {
    var t = e.fn.alert,
        n = { CLOSE: "close.bs.alert", CLOSED: "closed.bs.alert", CLICK_DATA_API: "click.bs.alert.data-api" },
        i = "alert",
        o = "fade",
        s = "show",
        l = function () {
      function t(e) {
        this._element = e;
      }var l = t.prototype;return l.close = function (e) {
        e = e || this._element;var t = this._getRootElement(e);this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
      }, l.dispose = function () {
        e.removeData(this._element, "bs.alert"), this._element = null;
      }, l._getRootElement = function (t) {
        var n = a.getSelectorFromElement(t),
            r = !1;return n && (r = e(n)[0]), r || (r = e(t).closest("." + i)[0]), r;
      }, l._triggerCloseEvent = function (t) {
        var i = e.Event(n.CLOSE);return e(t).trigger(i), i;
      }, l._removeElement = function (t) {
        var n = this;if (e(t).removeClass(s), e(t).hasClass(o)) {
          var i = a.getTransitionDurationFromElement(t);e(t).one(a.TRANSITION_END, function (e) {
            return n._destroyElement(t, e);
          }).emulateTransitionEnd(i);
        } else this._destroyElement(t);
      }, l._destroyElement = function (t) {
        e(t).detach().trigger(n.CLOSED).remove();
      }, t._jQueryInterface = function (n) {
        return this.each(function () {
          var i = e(this),
              r = i.data("bs.alert");r || (r = new t(this), i.data("bs.alert", r)), "close" === n && r[n](this);
        });
      }, t._handleDismiss = function (e) {
        return function (t) {
          t && t.preventDefault(), e.close(this);
        };
      }, r(t, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }]), t;
    }();return e(document).on(n.CLICK_DATA_API, '[data-dismiss="alert"]', l._handleDismiss(new l())), e.fn.alert = l._jQueryInterface, e.fn.alert.Constructor = l, e.fn.alert.noConflict = function () {
      return e.fn.alert = t, l._jQueryInterface;
    }, l;
  }(t),
      c = function (e) {
    var t = "button",
        n = e.fn[t],
        i = "active",
        o = "btn",
        s = "focus",
        a = '[data-toggle^="button"]',
        l = '[data-toggle="buttons"]',
        c = "input",
        u = ".active",
        d = ".btn",
        h = { CLICK_DATA_API: "click.bs.button.data-api", FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api" },
        f = function () {
      function t(e) {
        this._element = e;
      }var n = t.prototype;return n.toggle = function () {
        var t = !0,
            n = !0,
            r = e(this._element).closest(l)[0];if (r) {
          var o = e(this._element).find(c)[0];if (o) {
            if ("radio" === o.type) if (o.checked && e(this._element).hasClass(i)) t = !1;else {
              var s = e(r).find(u)[0];s && e(s).removeClass(i);
            }if (t) {
              if (o.hasAttribute("disabled") || r.hasAttribute("disabled") || o.classList.contains("disabled") || r.classList.contains("disabled")) return;o.checked = !e(this._element).hasClass(i), e(o).trigger("change");
            }o.focus(), n = !1;
          }
        }n && this._element.setAttribute("aria-pressed", !e(this._element).hasClass(i)), t && e(this._element).toggleClass(i);
      }, n.dispose = function () {
        e.removeData(this._element, "bs.button"), this._element = null;
      }, t._jQueryInterface = function (n) {
        return this.each(function () {
          var i = e(this).data("bs.button");i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]();
        });
      }, r(t, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }]), t;
    }();return e(document).on(h.CLICK_DATA_API, a, function (t) {
      t.preventDefault();var n = t.target;e(n).hasClass(o) || (n = e(n).closest(d)), f._jQueryInterface.call(e(n), "toggle");
    }).on(h.FOCUS_BLUR_DATA_API, a, function (t) {
      var n = e(t.target).closest(d)[0];e(n).toggleClass(s, /^focus(in)?$/.test(t.type));
    }), e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function () {
      return e.fn[t] = n, f._jQueryInterface;
    }, f;
  }(t),
      u = function (e) {
    var t = "carousel",
        n = "bs.carousel",
        i = "." + n,
        o = e.fn[t],
        l = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 },
        c = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" },
        u = "next",
        d = "prev",
        h = "left",
        f = "right",
        p = { SLIDE: "slide" + i, SLID: "slid" + i, KEYDOWN: "keydown" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i, TOUCHEND: "touchend" + i, LOAD_DATA_API: "load.bs.carousel.data-api", CLICK_DATA_API: "click.bs.carousel.data-api" },
        m = "carousel",
        g = "active",
        v = "slide",
        y = "carousel-item-right",
        b = "carousel-item-left",
        w = "carousel-item-next",
        E = "carousel-item-prev",
        C = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
        _ = function () {
      function o(t, n) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(C.INDICATORS)[0], this._addEventListeners();
      }var _ = o.prototype;return _.next = function () {
        this._isSliding || this._slide(u);
      }, _.nextWhenVisible = function () {
        !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next();
      }, _.prev = function () {
        this._isSliding || this._slide(d);
      }, _.pause = function (t) {
        t || (this._isPaused = !0), e(this._element).find(C.NEXT_PREV)[0] && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }, _.cycle = function (e) {
        e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }, _.to = function (t) {
        var n = this;this._activeElement = e(this._element).find(C.ACTIVE_ITEM)[0];var i = this._getItemIndex(this._activeElement);if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) e(this._element).one(p.SLID, function () {
          return n.to(t);
        });else {
          if (i === t) return this.pause(), void this.cycle();var r = t > i ? u : d;this._slide(r, this._items[t]);
        }
      }, _.dispose = function () {
        e(this._element).off(i), e.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
      }, _._getConfig = function (e) {
        return e = s({}, l, e), a.typeCheckConfig(t, e, c), e;
      }, _._addEventListeners = function () {
        var t = this;this._config.keyboard && e(this._element).on(p.KEYDOWN, function (e) {
          return t._keydown(e);
        }), "hover" === this._config.pause && (e(this._element).on(p.MOUSEENTER, function (e) {
          return t.pause(e);
        }).on(p.MOUSELEAVE, function (e) {
          return t.cycle(e);
        }), "ontouchstart" in document.documentElement && e(this._element).on(p.TOUCHEND, function () {
          t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
            return t.cycle(e);
          }, 500 + t._config.interval);
        }));
      }, _._keydown = function (e) {
        if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {case 37:
            e.preventDefault(), this.prev();break;case 39:
            e.preventDefault(), this.next();}
      }, _._getItemIndex = function (t) {
        return this._items = e.makeArray(e(t).parent().find(C.ITEM)), this._items.indexOf(t);
      }, _._getItemByDirection = function (e, t) {
        var n = e === u,
            i = e === d,
            r = this._getItemIndex(t),
            o = this._items.length - 1;if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;var s = (r + (e === d ? -1 : 1)) % this._items.length;return -1 === s ? this._items[this._items.length - 1] : this._items[s];
      }, _._triggerSlideEvent = function (t, n) {
        var i = this._getItemIndex(t),
            r = this._getItemIndex(e(this._element).find(C.ACTIVE_ITEM)[0]),
            o = e.Event(p.SLIDE, { relatedTarget: t, direction: n, from: r, to: i });return e(this._element).trigger(o), o;
      }, _._setActiveIndicatorElement = function (t) {
        if (this._indicatorsElement) {
          e(this._indicatorsElement).find(C.ACTIVE).removeClass(g);var n = this._indicatorsElement.children[this._getItemIndex(t)];n && e(n).addClass(g);
        }
      }, _._slide = function (t, n) {
        var i,
            r,
            o,
            s = this,
            l = e(this._element).find(C.ACTIVE_ITEM)[0],
            c = this._getItemIndex(l),
            d = n || l && this._getItemByDirection(t, l),
            m = this._getItemIndex(d),
            _ = Boolean(this._interval);if (t === u ? (i = b, r = w, o = h) : (i = y, r = E, o = f), d && e(d).hasClass(g)) this._isSliding = !1;else if (!this._triggerSlideEvent(d, o).isDefaultPrevented() && l && d) {
          this._isSliding = !0, _ && this.pause(), this._setActiveIndicatorElement(d);var T = e.Event(p.SLID, { relatedTarget: d, direction: o, from: c, to: m });if (e(this._element).hasClass(v)) {
            e(d).addClass(r), a.reflow(d), e(l).addClass(i), e(d).addClass(i);var x = a.getTransitionDurationFromElement(l);e(l).one(a.TRANSITION_END, function () {
              e(d).removeClass(i + " " + r).addClass(g), e(l).removeClass(g + " " + r + " " + i), s._isSliding = !1, setTimeout(function () {
                return e(s._element).trigger(T);
              }, 0);
            }).emulateTransitionEnd(x);
          } else e(l).removeClass(g), e(d).addClass(g), this._isSliding = !1, e(this._element).trigger(T);_ && this.cycle();
        }
      }, o._jQueryInterface = function (t) {
        return this.each(function () {
          var i = e(this).data(n),
              r = s({}, l, e(this).data());"object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (r = s({}, r, t));var a = "string" == typeof t ? t : r.slide;if (i || (i = new o(this, r), e(this).data(n, i)), "number" == typeof t) i.to(t);else if ("string" == typeof a) {
            if (void 0 === i[a]) throw new TypeError('No method named "' + a + '"');i[a]();
          } else r.interval && (i.pause(), i.cycle());
        });
      }, o._dataApiClickHandler = function (t) {
        var i = a.getSelectorFromElement(this);if (i) {
          var r = e(i)[0];if (r && e(r).hasClass(m)) {
            var l = s({}, e(r).data(), e(this).data()),
                c = this.getAttribute("data-slide-to");c && (l.interval = !1), o._jQueryInterface.call(e(r), l), c && e(r).data(n).to(c), t.preventDefault();
          }
        }
      }, r(o, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return l;
        } }]), o;
    }();return e(document).on(p.CLICK_DATA_API, C.DATA_SLIDE, _._dataApiClickHandler), e(window).on(p.LOAD_DATA_API, function () {
      e(C.DATA_RIDE).each(function () {
        var t = e(this);_._jQueryInterface.call(t, t.data());
      });
    }), e.fn[t] = _._jQueryInterface, e.fn[t].Constructor = _, e.fn[t].noConflict = function () {
      return e.fn[t] = o, _._jQueryInterface;
    }, _;
  }(t),
      d = function (e) {
    var t = "collapse",
        n = "bs.collapse",
        i = e.fn[t],
        o = { toggle: !0, parent: "" },
        l = { toggle: "boolean", parent: "(string|element)" },
        c = { SHOW: "show.bs.collapse", SHOWN: "shown.bs.collapse", HIDE: "hide.bs.collapse", HIDDEN: "hidden.bs.collapse", CLICK_DATA_API: "click.bs.collapse.data-api" },
        u = "show",
        d = "collapse",
        h = "collapsing",
        f = "collapsed",
        p = "width",
        m = "height",
        g = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
        v = function () {
      function i(t, n) {
        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));for (var i = e(g.DATA_TOGGLE), r = 0; r < i.length; r++) {
          var o = i[r],
              s = a.getSelectorFromElement(o);null !== s && e(s).filter(t).length > 0 && (this._selector = s, this._triggerArray.push(o));
        }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
      }var v = i.prototype;return v.toggle = function () {
        e(this._element).hasClass(u) ? this.hide() : this.show();
      }, v.show = function () {
        var t,
            r,
            o = this;if (!this._isTransitioning && !e(this._element).hasClass(u) && (this._parent && 0 === (t = e.makeArray(e(this._parent).find(g.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (r = e(t).not(this._selector).data(n)) && r._isTransitioning))) {
          var s = e.Event(c.SHOW);if (e(this._element).trigger(s), !s.isDefaultPrevented()) {
            t && (i._jQueryInterface.call(e(t).not(this._selector), "hide"), r || e(t).data(n, null));var l = this._getDimension();e(this._element).removeClass(d).addClass(h), this._element.style[l] = 0, this._triggerArray.length > 0 && e(this._triggerArray).removeClass(f).attr("aria-expanded", !0), this.setTransitioning(!0);var p = "scroll" + (l[0].toUpperCase() + l.slice(1)),
                m = a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END, function () {
              e(o._element).removeClass(h).addClass(d).addClass(u), o._element.style[l] = "", o.setTransitioning(!1), e(o._element).trigger(c.SHOWN);
            }).emulateTransitionEnd(m), this._element.style[l] = this._element[p] + "px";
          }
        }
      }, v.hide = function () {
        var t = this;if (!this._isTransitioning && e(this._element).hasClass(u)) {
          var n = e.Event(c.HIDE);if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
            var i = this._getDimension();if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", a.reflow(this._element), e(this._element).addClass(h).removeClass(d).removeClass(u), this._triggerArray.length > 0) for (var r = 0; r < this._triggerArray.length; r++) {
              var o = this._triggerArray[r],
                  s = a.getSelectorFromElement(o);if (null !== s) e(s).hasClass(u) || e(o).addClass(f).attr("aria-expanded", !1);
            }this.setTransitioning(!0);this._element.style[i] = "";var l = a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END, function () {
              t.setTransitioning(!1), e(t._element).removeClass(h).addClass(d).trigger(c.HIDDEN);
            }).emulateTransitionEnd(l);
          }
        }
      }, v.setTransitioning = function (e) {
        this._isTransitioning = e;
      }, v.dispose = function () {
        e.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
      }, v._getConfig = function (e) {
        return (e = s({}, o, e)).toggle = Boolean(e.toggle), a.typeCheckConfig(t, e, l), e;
      }, v._getDimension = function () {
        return e(this._element).hasClass(p) ? p : m;
      }, v._getParent = function () {
        var t = this,
            n = null;a.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = e(this._config.parent)[0];var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';return e(n).find(r).each(function (e, n) {
          t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n]);
        }), n;
      }, v._addAriaAndCollapsedClass = function (t, n) {
        if (t) {
          var i = e(t).hasClass(u);n.length > 0 && e(n).toggleClass(f, !i).attr("aria-expanded", i);
        }
      }, i._getTargetFromElement = function (t) {
        var n = a.getSelectorFromElement(t);return n ? e(n)[0] : null;
      }, i._jQueryInterface = function (t) {
        return this.each(function () {
          var r = e(this),
              a = r.data(n),
              l = s({}, o, r.data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t);if (!a && l.toggle && /show|hide/.test(t) && (l.toggle = !1), a || (a = new i(this, l), r.data(n, a)), "string" == typeof t) {
            if (void 0 === a[t]) throw new TypeError('No method named "' + t + '"');a[t]();
          }
        });
      }, r(i, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return o;
        } }]), i;
    }();return e(document).on(c.CLICK_DATA_API, g.DATA_TOGGLE, function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();var i = e(this),
          r = a.getSelectorFromElement(this);e(r).each(function () {
        var t = e(this),
            r = t.data(n) ? "toggle" : i.data();v._jQueryInterface.call(t, r);
      });
    }), e.fn[t] = v._jQueryInterface, e.fn[t].Constructor = v, e.fn[t].noConflict = function () {
      return e.fn[t] = i, v._jQueryInterface;
    }, v;
  }(t),
      h = function (e) {
    var t = "dropdown",
        i = "bs.dropdown",
        o = "." + i,
        l = e.fn[t],
        c = new RegExp("38|40|27"),
        u = { HIDE: "hide" + o, HIDDEN: "hidden" + o, SHOW: "show" + o, SHOWN: "shown" + o, CLICK: "click" + o, CLICK_DATA_API: "click.bs.dropdown.data-api", KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api", KEYUP_DATA_API: "keyup.bs.dropdown.data-api" },
        d = "disabled",
        h = "show",
        f = "dropup",
        p = "dropright",
        m = "dropleft",
        g = "dropdown-menu-right",
        v = "position-static",
        y = '[data-toggle="dropdown"]',
        b = ".dropdown form",
        w = ".dropdown-menu",
        E = ".navbar-nav",
        C = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        _ = "top-start",
        T = "top-end",
        x = "bottom-start",
        k = "bottom-end",
        S = "right-start",
        A = "left-start",
        D = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" },
        I = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" },
        N = function () {
      function l(e, t) {
        this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
      }var b = l.prototype;return b.toggle = function () {
        if (!this._element.disabled && !e(this._element).hasClass(d)) {
          var t = l._getParentFromElement(this._element),
              i = e(this._menu).hasClass(h);if (l._clearMenus(), !i) {
            var r = { relatedTarget: this._element },
                o = e.Event(u.SHOW, r);if (e(t).trigger(o), !o.isDefaultPrevented()) {
              if (!this._inNavbar) {
                if (void 0 === n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var s = this._element;"parent" === this._config.reference ? s = t : a.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(t).addClass(v), this._popper = new n(s, this._menu, this._getPopperConfig());
              }"ontouchstart" in document.documentElement && 0 === e(t).closest(E).length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(h), e(t).toggleClass(h).trigger(e.Event(u.SHOWN, r));
            }
          }
        }
      }, b.dispose = function () {
        e.removeData(this._element, i), e(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
      }, b.update = function () {
        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
      }, b._addEventListeners = function () {
        var t = this;e(this._element).on(u.CLICK, function (e) {
          e.preventDefault(), e.stopPropagation(), t.toggle();
        });
      }, b._getConfig = function (n) {
        return n = s({}, this.constructor.Default, e(this._element).data(), n), a.typeCheckConfig(t, n, this.constructor.DefaultType), n;
      }, b._getMenuElement = function () {
        if (!this._menu) {
          var t = l._getParentFromElement(this._element);this._menu = e(t).find(w)[0];
        }return this._menu;
      }, b._getPlacement = function () {
        var t = e(this._element).parent(),
            n = x;return t.hasClass(f) ? (n = _, e(this._menu).hasClass(g) && (n = T)) : t.hasClass(p) ? n = S : t.hasClass(m) ? n = A : e(this._menu).hasClass(g) && (n = k), n;
      }, b._detectNavbar = function () {
        return e(this._element).closest(".navbar").length > 0;
      }, b._getPopperConfig = function () {
        var e = this,
            t = {};"function" == typeof this._config.offset ? t.fn = function (t) {
          return t.offsets = s({}, t.offsets, e._config.offset(t.offsets) || {}), t;
        } : t.offset = this._config.offset;var n = { placement: this._getPlacement(), modifiers: { offset: t, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };return "static" === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }), n;
      }, l._jQueryInterface = function (t) {
        return this.each(function () {
          var n = e(this).data(i);if (n || (n = new l(this, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : null), e(this).data(i, n)), "string" == typeof t) {
            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');n[t]();
          }
        });
      }, l._clearMenus = function (t) {
        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var n = e.makeArray(e(y)), r = 0; r < n.length; r++) {
          var o = l._getParentFromElement(n[r]),
              s = e(n[r]).data(i),
              a = { relatedTarget: n[r] };if (s) {
            var c = s._menu;if (e(o).hasClass(h) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(o, t.target))) {
              var d = e.Event(u.HIDE, a);e(o).trigger(d), d.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), n[r].setAttribute("aria-expanded", "false"), e(c).removeClass(h), e(o).removeClass(h).trigger(e.Event(u.HIDDEN, a)));
            }
          }
        }
      }, l._getParentFromElement = function (t) {
        var n,
            i = a.getSelectorFromElement(t);return i && (n = e(i)[0]), n || t.parentNode;
      }, l._dataApiKeydownHandler = function (t) {
        if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(w).length)) : c.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(d))) {
          var n = l._getParentFromElement(this),
              i = e(n).hasClass(h);if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
            var r = e(n).find(C).get();if (0 !== r.length) {
              var o = r.indexOf(t.target);38 === t.which && o > 0 && o--, 40 === t.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus();
            }
          } else {
            if (27 === t.which) {
              var s = e(n).find(y)[0];e(s).trigger("focus");
            }e(this).trigger("click");
          }
        }
      }, r(l, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return D;
        } }, { key: "DefaultType", get: function get() {
          return I;
        } }]), l;
    }();return e(document).on(u.KEYDOWN_DATA_API, y, N._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API, w, N._dataApiKeydownHandler).on(u.CLICK_DATA_API + " " + u.KEYUP_DATA_API, N._clearMenus).on(u.CLICK_DATA_API, y, function (t) {
      t.preventDefault(), t.stopPropagation(), N._jQueryInterface.call(e(this), "toggle");
    }).on(u.CLICK_DATA_API, b, function (e) {
      e.stopPropagation();
    }), e.fn[t] = N._jQueryInterface, e.fn[t].Constructor = N, e.fn[t].noConflict = function () {
      return e.fn[t] = l, N._jQueryInterface;
    }, N;
  }(t),
      f = function (e) {
    var t = "modal",
        n = ".bs.modal",
        i = e.fn.modal,
        o = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        l = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        c = { HIDE: "hide.bs.modal", HIDDEN: "hidden.bs.modal", SHOW: "show.bs.modal", SHOWN: "shown.bs.modal", FOCUSIN: "focusin.bs.modal", RESIZE: "resize.bs.modal", CLICK_DISMISS: "click.dismiss.bs.modal", KEYDOWN_DISMISS: "keydown.dismiss.bs.modal", MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal", MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal", CLICK_DATA_API: "click.bs.modal.data-api" },
        u = "modal-scrollbar-measure",
        d = "modal-backdrop",
        h = "modal-open",
        f = "fade",
        p = "show",
        m = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler" },
        g = function () {
      function i(t, n) {
        this._config = this._getConfig(n), this._element = t, this._dialog = e(t).find(m.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0;
      }var g = i.prototype;return g.toggle = function (e) {
        return this._isShown ? this.hide() : this.show(e);
      }, g.show = function (t) {
        var n = this;if (!this._isTransitioning && !this._isShown) {
          e(this._element).hasClass(f) && (this._isTransitioning = !0);var i = e.Event(c.SHOW, { relatedTarget: t });e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(h), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(c.CLICK_DISMISS, m.DATA_DISMISS, function (e) {
            return n.hide(e);
          }), e(this._dialog).on(c.MOUSEDOWN_DISMISS, function () {
            e(n._element).one(c.MOUSEUP_DISMISS, function (t) {
              e(t.target).is(n._element) && (n._ignoreBackdropClick = !0);
            });
          }), this._showBackdrop(function () {
            return n._showElement(t);
          }));
        }
      }, g.hide = function (t) {
        var n = this;if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
          var i = e.Event(c.HIDE);if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
            this._isShown = !1;var r = e(this._element).hasClass(f);if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(c.FOCUSIN), e(this._element).removeClass(p), e(this._element).off(c.CLICK_DISMISS), e(this._dialog).off(c.MOUSEDOWN_DISMISS), r) {
              var o = a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END, function (e) {
                return n._hideModal(e);
              }).emulateTransitionEnd(o);
            } else this._hideModal();
          }
        }
      }, g.dispose = function () {
        e.removeData(this._element, "bs.modal"), e(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
      }, g.handleUpdate = function () {
        this._adjustDialog();
      }, g._getConfig = function (e) {
        return e = s({}, o, e), a.typeCheckConfig(t, e, l), e;
      }, g._showElement = function (t) {
        var n = this,
            i = e(this._element).hasClass(f);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && a.reflow(this._element), e(this._element).addClass(p), this._config.focus && this._enforceFocus();var r = e.Event(c.SHOWN, { relatedTarget: t }),
            o = function o() {
          n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(r);
        };if (i) {
          var s = a.getTransitionDurationFromElement(this._element);e(this._dialog).one(a.TRANSITION_END, o).emulateTransitionEnd(s);
        } else o();
      }, g._enforceFocus = function () {
        var t = this;e(document).off(c.FOCUSIN).on(c.FOCUSIN, function (n) {
          document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus();
        });
      }, g._setEscapeEvent = function () {
        var t = this;this._isShown && this._config.keyboard ? e(this._element).on(c.KEYDOWN_DISMISS, function (e) {
          27 === e.which && (e.preventDefault(), t.hide());
        }) : this._isShown || e(this._element).off(c.KEYDOWN_DISMISS);
      }, g._setResizeEvent = function () {
        var t = this;this._isShown ? e(window).on(c.RESIZE, function (e) {
          return t.handleUpdate(e);
        }) : e(window).off(c.RESIZE);
      }, g._hideModal = function () {
        var t = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
          e(document.body).removeClass(h), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(c.HIDDEN);
        });
      }, g._removeBackdrop = function () {
        this._backdrop && (e(this._backdrop).remove(), this._backdrop = null);
      }, g._showBackdrop = function (t) {
        var n = this,
            i = e(this._element).hasClass(f) ? f : "";if (this._isShown && this._config.backdrop) {
          if (this._backdrop = document.createElement("div"), this._backdrop.className = d, i && e(this._backdrop).addClass(i), e(this._backdrop).appendTo(document.body), e(this._element).on(c.CLICK_DISMISS, function (e) {
            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide());
          }), i && a.reflow(this._backdrop), e(this._backdrop).addClass(p), !t) return;if (!i) return void t();var r = a.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(a.TRANSITION_END, t).emulateTransitionEnd(r);
        } else if (!this._isShown && this._backdrop) {
          e(this._backdrop).removeClass(p);var o = function o() {
            n._removeBackdrop(), t && t();
          };if (e(this._element).hasClass(f)) {
            var s = a.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(a.TRANSITION_END, o).emulateTransitionEnd(s);
          } else o();
        } else t && t();
      }, g._adjustDialog = function () {
        var e = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
      }, g._resetAdjustments = function () {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }, g._checkScrollbar = function () {
        var e = document.body.getBoundingClientRect();this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
      }, g._setScrollbar = function () {
        var t = this;if (this._isBodyOverflowing) {
          e(m.FIXED_CONTENT).each(function (n, i) {
            var r = e(i)[0].style.paddingRight,
                o = e(i).css("padding-right");e(i).data("padding-right", r).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px");
          }), e(m.STICKY_CONTENT).each(function (n, i) {
            var r = e(i)[0].style.marginRight,
                o = e(i).css("margin-right");e(i).data("margin-right", r).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px");
          }), e(m.NAVBAR_TOGGLER).each(function (n, i) {
            var r = e(i)[0].style.marginRight,
                o = e(i).css("margin-right");e(i).data("margin-right", r).css("margin-right", parseFloat(o) + t._scrollbarWidth + "px");
          });var n = document.body.style.paddingRight,
              i = e(document.body).css("padding-right");e(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
        }
      }, g._resetScrollbar = function () {
        e(m.FIXED_CONTENT).each(function (t, n) {
          var i = e(n).data("padding-right");void 0 !== i && e(n).css("padding-right", i).removeData("padding-right");
        }), e(m.STICKY_CONTENT + ", " + m.NAVBAR_TOGGLER).each(function (t, n) {
          var i = e(n).data("margin-right");void 0 !== i && e(n).css("margin-right", i).removeData("margin-right");
        });var t = e(document.body).data("padding-right");void 0 !== t && e(document.body).css("padding-right", t).removeData("padding-right");
      }, g._getScrollbarWidth = function () {
        var e = document.createElement("div");e.className = u, document.body.appendChild(e);var t = e.getBoundingClientRect().width - e.clientWidth;return document.body.removeChild(e), t;
      }, i._jQueryInterface = function (t, n) {
        return this.each(function () {
          var r = e(this).data("bs.modal"),
              o = s({}, i.Default, e(this).data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t);if (r || (r = new i(this, o), e(this).data("bs.modal", r)), "string" == typeof t) {
            if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');r[t](n);
          } else o.show && r.show(n);
        });
      }, r(i, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return o;
        } }]), i;
    }();return e(document).on(c.CLICK_DATA_API, m.DATA_TOGGLE, function (t) {
      var n,
          i = this,
          r = a.getSelectorFromElement(this);r && (n = e(r)[0]);var o = e(n).data("bs.modal") ? "toggle" : s({}, e(n).data(), e(this).data());"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();var l = e(n).one(c.SHOW, function (t) {
        t.isDefaultPrevented() || l.one(c.HIDDEN, function () {
          e(i).is(":visible") && i.focus();
        });
      });g._jQueryInterface.call(e(n), o, this);
    }), e.fn.modal = g._jQueryInterface, e.fn.modal.Constructor = g, e.fn.modal.noConflict = function () {
      return e.fn.modal = i, g._jQueryInterface;
    }, g;
  }(t),
      p = function (e) {
    var t = "tooltip",
        i = ".bs.tooltip",
        o = e.fn[t],
        l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        c = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" },
        u = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        d = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" },
        h = "show",
        f = "out",
        p = { HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, INSERTED: "inserted" + i, CLICK: "click" + i, FOCUSIN: "focusin" + i, FOCUSOUT: "focusout" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i },
        m = "fade",
        g = "show",
        v = ".tooltip-inner",
        y = ".arrow",
        b = "hover",
        w = "focus",
        E = "click",
        C = "manual",
        _ = function () {
      function o(e, t) {
        if (void 0 === n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners();
      }var _ = o.prototype;return _.enable = function () {
        this._isEnabled = !0;
      }, _.disable = function () {
        this._isEnabled = !1;
      }, _.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled;
      }, _.toggle = function (t) {
        if (this._isEnabled) if (t) {
          var n = this.constructor.DATA_KEY,
              i = e(t.currentTarget).data(n);i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
        } else {
          if (e(this.getTipElement()).hasClass(g)) return void this._leave(null, this);this._enter(null, this);
        }
      }, _.dispose = function () {
        clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
      }, _.show = function () {
        var t = this;if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");var i = e.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
          e(this.element).trigger(i);var r = e.contains(this.element.ownerDocument.documentElement, this.element);if (i.isDefaultPrevented() || !r) return;var o = this.getTipElement(),
              s = a.getUID(this.constructor.NAME);o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && e(o).addClass(m);var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
              c = this._getAttachment(l);this.addAttachmentClass(c);var u = !1 === this.config.container ? document.body : e(this.config.container);e(o).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(o).appendTo(u), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, o, { placement: c, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: y }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function onCreate(e) {
              e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
            }, onUpdate: function onUpdate(e) {
              t._handlePopperPlacementChange(e);
            } }), e(o).addClass(g), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);var d = function d() {
            t.config.animation && t._fixTransition();var n = t._hoverState;t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === f && t._leave(null, t);
          };if (e(this.tip).hasClass(m)) {
            var h = a.getTransitionDurationFromElement(this.tip);e(this.tip).one(a.TRANSITION_END, d).emulateTransitionEnd(h);
          } else d();
        }
      }, _.hide = function (t) {
        var n = this,
            i = this.getTipElement(),
            r = e.Event(this.constructor.Event.HIDE),
            o = function o() {
          n._hoverState !== h && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t();
        };if (e(this.element).trigger(r), !r.isDefaultPrevented()) {
          if (e(i).removeClass(g), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger[E] = !1, this._activeTrigger[w] = !1, this._activeTrigger[b] = !1, e(this.tip).hasClass(m)) {
            var s = a.getTransitionDurationFromElement(i);e(i).one(a.TRANSITION_END, o).emulateTransitionEnd(s);
          } else o();this._hoverState = "";
        }
      }, _.update = function () {
        null !== this._popper && this._popper.scheduleUpdate();
      }, _.isWithContent = function () {
        return Boolean(this.getTitle());
      }, _.addAttachmentClass = function (t) {
        e(this.getTipElement()).addClass("bs-tooltip-" + t);
      }, _.getTipElement = function () {
        return this.tip = this.tip || e(this.config.template)[0], this.tip;
      }, _.setContent = function () {
        var t = e(this.getTipElement());this.setElementContent(t.find(v), this.getTitle()), t.removeClass(m + " " + g);
      }, _.setElementContent = function (t, n) {
        var i = this.config.html;"object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n);
      }, _.getTitle = function () {
        var e = this.element.getAttribute("data-original-title");return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
      }, _._getAttachment = function (e) {
        return u[e.toUpperCase()];
      }, _._setListeners = function () {
        var t = this;this.config.trigger.split(" ").forEach(function (n) {
          if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
            return t.toggle(e);
          });else if (n !== C) {
            var i = n === b ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                r = n === b ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;e(t.element).on(i, t.config.selector, function (e) {
              return t._enter(e);
            }).on(r, t.config.selector, function (e) {
              return t._leave(e);
            });
          }e(t.element).closest(".modal").on("hide.bs.modal", function () {
            return t.hide();
          });
        }), this.config.selector ? this.config = s({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
      }, _._fixTitle = function () {
        var e = _typeof(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
      }, _._enter = function (t, n) {
        var i = this.constructor.DATA_KEY;(n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? w : b] = !0), e(n.getTipElement()).hasClass(g) || n._hoverState === h ? n._hoverState = h : (clearTimeout(n._timeout), n._hoverState = h, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
          n._hoverState === h && n.show();
        }, n.config.delay.show) : n.show());
      }, _._leave = function (t, n) {
        var i = this.constructor.DATA_KEY;(n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? w : b] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
          n._hoverState === f && n.hide();
        }, n.config.delay.hide) : n.hide());
      }, _._isWithActiveTrigger = function () {
        for (var e in this._activeTrigger) {
          if (this._activeTrigger[e]) return !0;
        }return !1;
      }, _._getConfig = function (n) {
        return "number" == typeof (n = s({}, this.constructor.Default, e(this.element).data(), n)).delay && (n.delay = { show: n.delay, hide: n.delay }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), a.typeCheckConfig(t, n, this.constructor.DefaultType), n;
      }, _._getDelegateConfig = function () {
        var e = {};if (this.config) for (var t in this.config) {
          this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
        }return e;
      }, _._cleanTipClass = function () {
        var t = e(this.getTipElement()),
            n = t.attr("class").match(l);null !== n && n.length > 0 && t.removeClass(n.join(""));
      }, _._handlePopperPlacementChange = function (e) {
        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
      }, _._fixTransition = function () {
        var t = this.getTipElement(),
            n = this.config.animation;null === t.getAttribute("x-placement") && (e(t).removeClass(m), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n);
      }, o._jQueryInterface = function (t) {
        return this.each(function () {
          var n = e(this).data("bs.tooltip"),
              i = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t;if ((n || !/dispose|hide/.test(t)) && (n || (n = new o(this, i), e(this).data("bs.tooltip", n)), "string" == typeof t)) {
            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');n[t]();
          }
        });
      }, r(o, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return d;
        } }, { key: "NAME", get: function get() {
          return t;
        } }, { key: "DATA_KEY", get: function get() {
          return "bs.tooltip";
        } }, { key: "Event", get: function get() {
          return p;
        } }, { key: "EVENT_KEY", get: function get() {
          return i;
        } }, { key: "DefaultType", get: function get() {
          return c;
        } }]), o;
    }();return e.fn[t] = _._jQueryInterface, e.fn[t].Constructor = _, e.fn[t].noConflict = function () {
      return e.fn[t] = o, _._jQueryInterface;
    }, _;
  }(t),
      m = function (e) {
    var t = "popover",
        n = ".bs.popover",
        i = e.fn[t],
        o = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        a = s({}, p.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        l = s({}, p.DefaultType, { content: "(string|element|function)" }),
        c = "fade",
        u = "show",
        d = ".popover-header",
        h = ".popover-body",
        f = { HIDE: "hide" + n, HIDDEN: "hidden" + n, SHOW: "show" + n, SHOWN: "shown" + n, INSERTED: "inserted" + n, CLICK: "click" + n, FOCUSIN: "focusin" + n, FOCUSOUT: "focusout" + n, MOUSEENTER: "mouseenter" + n, MOUSELEAVE: "mouseleave" + n },
        m = function (i) {
      var s, p;function m() {
        return i.apply(this, arguments) || this;
      }p = i, (s = m).prototype = Object.create(p.prototype), s.prototype.constructor = s, s.__proto__ = p;var g = m.prototype;return g.isWithContent = function () {
        return this.getTitle() || this._getContent();
      }, g.addAttachmentClass = function (t) {
        e(this.getTipElement()).addClass("bs-popover-" + t);
      }, g.getTipElement = function () {
        return this.tip = this.tip || e(this.config.template)[0], this.tip;
      }, g.setContent = function () {
        var t = e(this.getTipElement());this.setElementContent(t.find(d), this.getTitle());var n = this._getContent();"function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(h), n), t.removeClass(c + " " + u);
      }, g._getContent = function () {
        return this.element.getAttribute("data-content") || this.config.content;
      }, g._cleanTipClass = function () {
        var t = e(this.getTipElement()),
            n = t.attr("class").match(o);null !== n && n.length > 0 && t.removeClass(n.join(""));
      }, m._jQueryInterface = function (t) {
        return this.each(function () {
          var n = e(this).data("bs.popover"),
              i = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : null;if ((n || !/destroy|hide/.test(t)) && (n || (n = new m(this, i), e(this).data("bs.popover", n)), "string" == typeof t)) {
            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');n[t]();
          }
        });
      }, r(m, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return a;
        } }, { key: "NAME", get: function get() {
          return t;
        } }, { key: "DATA_KEY", get: function get() {
          return "bs.popover";
        } }, { key: "Event", get: function get() {
          return f;
        } }, { key: "EVENT_KEY", get: function get() {
          return n;
        } }, { key: "DefaultType", get: function get() {
          return l;
        } }]), m;
    }(p);return e.fn[t] = m._jQueryInterface, e.fn[t].Constructor = m, e.fn[t].noConflict = function () {
      return e.fn[t] = i, m._jQueryInterface;
    }, m;
  }(t),
      g = function (e) {
    var t = "scrollspy",
        n = e.fn[t],
        i = { offset: 10, method: "auto", target: "" },
        o = { offset: "number", method: "string", target: "(string|element)" },
        l = { ACTIVATE: "activate.bs.scrollspy", SCROLL: "scroll.bs.scrollspy", LOAD_DATA_API: "load.bs.scrollspy.data-api" },
        c = "dropdown-item",
        u = "active",
        d = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
        h = "offset",
        f = "position",
        p = function () {
      function n(t, n) {
        var i = this;this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + d.NAV_LINKS + "," + this._config.target + " " + d.LIST_ITEMS + "," + this._config.target + " " + d.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(l.SCROLL, function (e) {
          return i._process(e);
        }), this.refresh(), this._process();
      }var p = n.prototype;return p.refresh = function () {
        var t = this,
            n = this._scrollElement === this._scrollElement.window ? h : f,
            i = "auto" === this._config.method ? n : this._config.method,
            r = i === f ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.makeArray(e(this._selector)).map(function (t) {
          var n,
              o = a.getSelectorFromElement(t);if (o && (n = e(o)[0]), n) {
            var s = n.getBoundingClientRect();if (s.width || s.height) return [e(n)[i]().top + r, o];
          }return null;
        }).filter(function (e) {
          return e;
        }).sort(function (e, t) {
          return e[0] - t[0];
        }).forEach(function (e) {
          t._offsets.push(e[0]), t._targets.push(e[1]);
        });
      }, p.dispose = function () {
        e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
      }, p._getConfig = function (n) {
        if ("string" != typeof (n = s({}, i, n)).target) {
          var r = e(n.target).attr("id");r || (r = a.getUID(t), e(n.target).attr("id", r)), n.target = "#" + r;
        }return a.typeCheckConfig(t, n, o), n;
      }, p._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }, p._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }, p._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }, p._process = function () {
        var e = this._getScrollTop() + this._config.offset,
            t = this._getScrollHeight(),
            n = this._config.offset + t - this._getOffsetHeight();if (this._scrollHeight !== t && this.refresh(), e >= n) {
          var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
        } else {
          if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();for (var r = this._offsets.length; r--;) {
            this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r]);
          }
        }
      }, p._activate = function (t) {
        this._activeTarget = t, this._clear();var n = this._selector.split(",");n = n.map(function (e) {
          return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
        });var i = e(n.join(","));i.hasClass(c) ? (i.closest(d.DROPDOWN).find(d.DROPDOWN_TOGGLE).addClass(u), i.addClass(u)) : (i.addClass(u), i.parents(d.NAV_LIST_GROUP).prev(d.NAV_LINKS + ", " + d.LIST_ITEMS).addClass(u), i.parents(d.NAV_LIST_GROUP).prev(d.NAV_ITEMS).children(d.NAV_LINKS).addClass(u)), e(this._scrollElement).trigger(l.ACTIVATE, { relatedTarget: t });
      }, p._clear = function () {
        e(this._selector).filter(d.ACTIVE).removeClass(u);
      }, n._jQueryInterface = function (t) {
        return this.each(function () {
          var i = e(this).data("bs.scrollspy");if (i || (i = new n(this, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t), e(this).data("bs.scrollspy", i)), "string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');i[t]();
          }
        });
      }, r(n, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return i;
        } }]), n;
    }();return e(window).on(l.LOAD_DATA_API, function () {
      for (var t = e.makeArray(e(d.DATA_SPY)), n = t.length; n--;) {
        var i = e(t[n]);p._jQueryInterface.call(i, i.data());
      }
    }), e.fn[t] = p._jQueryInterface, e.fn[t].Constructor = p, e.fn[t].noConflict = function () {
      return e.fn[t] = n, p._jQueryInterface;
    }, p;
  }(t),
      v = function (e) {
    var t = e.fn.tab,
        n = { HIDE: "hide.bs.tab", HIDDEN: "hidden.bs.tab", SHOW: "show.bs.tab", SHOWN: "shown.bs.tab", CLICK_DATA_API: "click.bs.tab.data-api" },
        i = "dropdown-menu",
        o = "active",
        s = "disabled",
        l = "fade",
        c = "show",
        u = ".dropdown",
        d = ".nav, .list-group",
        h = ".active",
        f = "> li > .active",
        p = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        m = ".dropdown-toggle",
        g = "> .dropdown-menu .active",
        v = function () {
      function t(e) {
        this._element = e;
      }var p = t.prototype;return p.show = function () {
        var t = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(o) || e(this._element).hasClass(s))) {
          var i,
              r,
              l = e(this._element).closest(d)[0],
              c = a.getSelectorFromElement(this._element);if (l) {
            var u = "UL" === l.nodeName ? f : h;r = (r = e.makeArray(e(l).find(u)))[r.length - 1];
          }var p = e.Event(n.HIDE, { relatedTarget: this._element }),
              m = e.Event(n.SHOW, { relatedTarget: r });if (r && e(r).trigger(p), e(this._element).trigger(m), !m.isDefaultPrevented() && !p.isDefaultPrevented()) {
            c && (i = e(c)[0]), this._activate(this._element, l);var g = function g() {
              var i = e.Event(n.HIDDEN, { relatedTarget: t._element }),
                  o = e.Event(n.SHOWN, { relatedTarget: r });e(r).trigger(i), e(t._element).trigger(o);
            };i ? this._activate(i, i.parentNode, g) : g();
          }
        }
      }, p.dispose = function () {
        e.removeData(this._element, "bs.tab"), this._element = null;
      }, p._activate = function (t, n, i) {
        var r = this,
            o = ("UL" === n.nodeName ? e(n).find(f) : e(n).children(h))[0],
            s = i && o && e(o).hasClass(l),
            c = function c() {
          return r._transitionComplete(t, o, i);
        };if (o && s) {
          var u = a.getTransitionDurationFromElement(o);e(o).one(a.TRANSITION_END, c).emulateTransitionEnd(u);
        } else c();
      }, p._transitionComplete = function (t, n, r) {
        if (n) {
          e(n).removeClass(c + " " + o);var s = e(n.parentNode).find(g)[0];s && e(s).removeClass(o), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
        }if (e(t).addClass(o), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), a.reflow(t), e(t).addClass(c), t.parentNode && e(t.parentNode).hasClass(i)) {
          var l = e(t).closest(u)[0];l && e(l).find(m).addClass(o), t.setAttribute("aria-expanded", !0);
        }r && r();
      }, t._jQueryInterface = function (n) {
        return this.each(function () {
          var i = e(this),
              r = i.data("bs.tab");if (r || (r = new t(this), i.data("bs.tab", r)), "string" == typeof n) {
            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');r[n]();
          }
        });
      }, r(t, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }]), t;
    }();return e(document).on(n.CLICK_DATA_API, p, function (t) {
      t.preventDefault(), v._jQueryInterface.call(e(this), "show");
    }), e.fn.tab = v._jQueryInterface, e.fn.tab.Constructor = v, e.fn.tab.noConflict = function () {
      return e.fn.tab = t, v._jQueryInterface;
    }, v;
  }(t);!function (e) {
    if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t = e.fn.jquery.split(" ")[0].split(".");if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(t), e.Util = a, e.Alert = l, e.Button = c, e.Carousel = u, e.Collapse = d, e.Dropdown = h, e.Modal = f, e.Popover = m, e.Scrollspy = g, e.Tab = v, e.Tooltip = p, Object.defineProperty(e, "__esModule", { value: !0 });
}), function (e, t) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (n) {
    return t(e, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("jquery")) : e.jQueryBridget = t(e, e.jQuery);
}(window, function (e, t) {
  "use strict";
  var n = Array.prototype.slice,
      i = e.console,
      r = void 0 === i ? function () {} : function (e) {
    i.error(e);
  };function o(i, o, a) {
    (a = a || t || e.jQuery) && (o.prototype.option || (o.prototype.option = function (e) {
      a.isPlainObject(e) && (this.options = a.extend(!0, this.options, e));
    }), a.fn[i] = function (e) {
      var t;return "string" == typeof e ? function (e, t, n) {
        var o,
            s = "$()." + i + '("' + t + '")';return e.each(function (e, l) {
          var c = a.data(l, i);if (c) {
            var u = c[t];if (u && "_" != t.charAt(0)) {
              var d = u.apply(c, n);o = void 0 === o ? d : o;
            } else r(s + " is not a valid method");
          } else r(i + " not initialized. Cannot call methods, i.e. " + s);
        }), void 0 !== o ? o : e;
      }(this, e, n.call(arguments, 1)) : (t = e, this.each(function (e, n) {
        var r = a.data(n, i);r ? (r.option(t), r._init()) : (r = new o(n, t), a.data(n, i, r));
      }), this);
    }, s(a));
  }function s(e) {
    !e || e && e.bridget || (e.bridget = o);
  }return s(t || e.jQuery), o;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t() : e.EvEmitter = t();
}("undefined" != typeof window ? window : this, function () {
  function e() {}var t = e.prototype;return t.on = function (e, t) {
    if (e && t) {
      var n = this._events = this._events || {},
          i = n[e] = n[e] || [];return -1 == i.indexOf(t) && i.push(t), this;
    }
  }, t.once = function (e, t) {
    if (e && t) {
      this.on(e, t);var n = this._onceEvents = this._onceEvents || {};return (n[e] = n[e] || {})[t] = !0, this;
    }
  }, t.off = function (e, t) {
    var n = this._events && this._events[e];if (n && n.length) {
      var i = n.indexOf(t);return -1 != i && n.splice(i, 1), this;
    }
  }, t.emitEvent = function (e, t) {
    var n = this._events && this._events[e];if (n && n.length) {
      n = n.slice(0), t = t || [];for (var i = this._onceEvents && this._onceEvents[e], r = 0; r < n.length; r++) {
        var o = n[r];i && i[o] && (this.off(e, o), delete i[o]), o.apply(this, t);
      }return this;
    }
  }, t.allOff = function () {
    delete this._events, delete this._onceEvents;
  }, e;
}), function (e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
    return t();
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t() : e.getSize = t();
}(window, function () {
  "use strict";
  function e(e) {
    var t = parseFloat(e);return -1 == e.indexOf("%") && !isNaN(t) && t;
  }var t = "undefined" == typeof console ? function () {} : function (e) {
    console.error(e);
  },
      n = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      i = n.length;function r(e) {
    var n = getComputedStyle(e);return n || t("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), n;
  }var o,
      s = !1;function a(t) {
    if (function () {
      if (!s) {
        s = !0;var t = document.createElement("div");t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";var n = document.body || document.documentElement;n.appendChild(t);var i = r(t);a.isBoxSizeOuter = o = 200 == e(i.width), n.removeChild(t);
      }
    }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t.nodeType) {
      var l = r(t);if ("none" == l.display) return function () {
        for (var e = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, t = 0; t < i; t++) {
          e[n[t]] = 0;
        }return e;
      }();var c = {};c.width = t.offsetWidth, c.height = t.offsetHeight;for (var u = c.isBorderBox = "border-box" == l.boxSizing, d = 0; d < i; d++) {
        var h = n[d],
            f = l[h],
            p = parseFloat(f);c[h] = isNaN(p) ? 0 : p;
      }var m = c.paddingLeft + c.paddingRight,
          g = c.paddingTop + c.paddingBottom,
          v = c.marginLeft + c.marginRight,
          y = c.marginTop + c.marginBottom,
          b = c.borderLeftWidth + c.borderRightWidth,
          w = c.borderTopWidth + c.borderBottomWidth,
          E = u && o,
          C = e(l.width);!1 !== C && (c.width = C + (E ? 0 : m + b));var _ = e(l.height);return !1 !== _ && (c.height = _ + (E ? 0 : g + w)), c.innerWidth = c.width - (m + b), c.innerHeight = c.height - (g + w), c.outerWidth = c.width + v, c.outerHeight = c.height + y, c;
    }
  }return a;
}), function (e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t() : e.matchesSelector = t();
}(window, function () {
  "use strict";
  var e = function () {
    var e = window.Element.prototype;if (e.matches) return "matches";if (e.matchesSelector) return "matchesSelector";for (var t = ["webkit", "moz", "ms", "o"], n = 0; n < t.length; n++) {
      var i = t[n] + "MatchesSelector";if (e[i]) return i;
    }
  }();return function (t, n) {
    return t[e](n);
  };
}), function (e, t) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (n) {
    return t(e, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.matchesSelector);
}(window, function (e, t) {
  var n = { extend: function extend(e, t) {
      for (var n in t) {
        e[n] = t[n];
      }return e;
    }, modulo: function modulo(e, t) {
      return (e % t + t) % t;
    } },
      i = Array.prototype.slice;n.makeArray = function (e) {
    return Array.isArray(e) ? e : null === e || void 0 === e ? [] : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "number" == typeof e.length ? i.call(e) : [e];
  }, n.removeFrom = function (e, t) {
    var n = e.indexOf(t);-1 != n && e.splice(n, 1);
  }, n.getParent = function (e, n) {
    for (; e.parentNode && e != document.body;) {
      if (e = e.parentNode, t(e, n)) return e;
    }
  }, n.getQueryElement = function (e) {
    return "string" == typeof e ? document.querySelector(e) : e;
  }, n.handleEvent = function (e) {
    var t = "on" + e.type;this[t] && this[t](e);
  }, n.filterFindElements = function (e, i) {
    var r = [];return (e = n.makeArray(e)).forEach(function (e) {
      if (e instanceof HTMLElement) if (i) {
        t(e, i) && r.push(e);for (var n = e.querySelectorAll(i), o = 0; o < n.length; o++) {
          r.push(n[o]);
        }
      } else r.push(e);
    }), r;
  }, n.debounceMethod = function (e, t, n) {
    n = n || 100;var i = e.prototype[t],
        r = t + "Timeout";e.prototype[t] = function () {
      var e = this[r];clearTimeout(e);var t = arguments,
          o = this;this[r] = setTimeout(function () {
        i.apply(o, t), delete o[r];
      }, n);
    };
  }, n.docReady = function (e) {
    var t = document.readyState;"complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e);
  }, n.toDashed = function (e) {
    return e.replace(/(.)([A-Z])/g, function (e, t, n) {
      return t + "-" + n;
    }).toLowerCase();
  };var r = e.console;return n.htmlInit = function (t, i) {
    n.docReady(function () {
      var o = n.toDashed(i),
          s = "data-" + o,
          a = document.querySelectorAll("[" + s + "]"),
          l = document.querySelectorAll(".js-" + o),
          c = n.makeArray(a).concat(n.makeArray(l)),
          u = s + "-options",
          d = e.jQuery;c.forEach(function (e) {
        var n,
            o = e.getAttribute(s) || e.getAttribute(u);try {
          n = o && JSON.parse(o);
        } catch (t) {
          return void (r && r.error("Error parsing " + s + " on " + e.className + ": " + t));
        }var a = new t(e, n);d && d.data(e, i, a);
      });
    });
  }, n;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function (n) {
    return t(e, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("get-size")) : (e.Flickity = e.Flickity || {}, e.Flickity.Cell = t(e, e.getSize));
}(window, function (e, t) {
  function n(e, t) {
    this.element = e, this.parent = t, this.create();
  }var i = n.prototype;return i.create = function () {
    this.element.style.position = "absolute", this.element.setAttribute("aria-selected", "false"), this.x = 0, this.shift = 0;
  }, i.destroy = function () {
    this.element.style.position = "";var e = this.parent.originSide;this.element.removeAttribute("aria-selected"), this.element.style[e] = "";
  }, i.getSize = function () {
    this.size = t(this.element);
  }, i.setPosition = function (e) {
    this.x = e, this.updateTarget(), this.renderPosition(e);
  }, i.updateTarget = i.setDefaultTarget = function () {
    var e = "left" == this.parent.originSide ? "marginLeft" : "marginRight";this.target = this.x + this.size[e] + this.size.width * this.parent.cellAlign;
  }, i.renderPosition = function (e) {
    var t = this.parent.originSide;this.element.style[t] = this.parent.getPositionValue(e);
  }, i.wrapShift = function (e) {
    this.shift = e, this.renderPosition(this.x + this.parent.slideableWidth * e);
  }, i.remove = function () {
    this.element.parentNode.removeChild(this.element);
  }, n;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/slide", t) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t() : (e.Flickity = e.Flickity || {}, e.Flickity.Slide = t());
}(window, function () {
  "use strict";
  function e(e) {
    this.parent = e, this.isOriginLeft = "left" == e.originSide, this.cells = [], this.outerWidth = 0, this.height = 0;
  }var t = e.prototype;return t.addCell = function (e) {
    if (this.cells.push(e), this.outerWidth += e.size.outerWidth, this.height = Math.max(e.size.outerHeight, this.height), 1 == this.cells.length) {
      this.x = e.x;var t = this.isOriginLeft ? "marginLeft" : "marginRight";this.firstMargin = e.size[t];
    }
  }, t.updateTarget = function () {
    var e = this.isOriginLeft ? "marginRight" : "marginLeft",
        t = this.getLastCell(),
        n = t ? t.size[e] : 0,
        i = this.outerWidth - (this.firstMargin + n);this.target = this.x + this.firstMargin + i * this.parent.cellAlign;
  }, t.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  }, t.select = function () {
    this.changeSelected(!0);
  }, t.unselect = function () {
    this.changeSelected(!1);
  }, t.changeSelected = function (e) {
    var t = e ? "add" : "remove";this.cells.forEach(function (n) {
      n.element.classList[t]("is-selected"), n.element.setAttribute("aria-selected", e.toString());
    });
  }, t.getCellElements = function () {
    return this.cells.map(function (e) {
      return e.element;
    });
  }, e;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (n) {
    return t(e, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("fizzy-ui-utils")) : (e.Flickity = e.Flickity || {}, e.Flickity.animatePrototype = t(e, e.fizzyUIUtils));
}(window, function (e, t) {
  var n = { startAnimation: function startAnimation() {
      this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate());
    }, animate: function animate() {
      this.applyDragForce(), this.applySelectedAttraction();var e = this.x;if (this.integratePhysics(), this.positionSlider(), this.settle(e), this.isAnimating) {
        var t = this;requestAnimationFrame(function () {
          t.animate();
        });
      }
    }, positionSlider: function positionSlider() {
      var e = this.x;this.options.wrapAround && this.cells.length > 1 && (e = t.modulo(e, this.slideableWidth), e -= this.slideableWidth, this.shiftWrapCells(e)), e += this.cursorPosition, e = this.options.rightToLeft ? -e : e;var n = this.getPositionValue(e);this.slider.style.transform = this.isAnimating ? "translate3d(" + n + ",0,0)" : "translateX(" + n + ")";var i = this.slides[0];if (i) {
        var r = -this.x - i.target,
            o = r / this.slidesWidth;this.dispatchEvent("scroll", null, [o, r]);
      }
    }, positionSliderAtSelected: function positionSliderAtSelected() {
      this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider());
    }, getPositionValue: function getPositionValue(e) {
      return this.options.percentPosition ? .01 * Math.round(e / this.size.innerWidth * 1e4) + "%" : Math.round(e) + "px";
    }, settle: function settle(e) {
      this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * e) || this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]));
    }, shiftWrapCells: function shiftWrapCells(e) {
      var t = this.cursorPosition + e;this._shiftCells(this.beforeShiftCells, t, -1);var n = this.size.innerWidth - (e + this.slideableWidth + this.cursorPosition);this._shiftCells(this.afterShiftCells, n, 1);
    }, _shiftCells: function _shiftCells(e, t, n) {
      for (var i = 0; i < e.length; i++) {
        var r = e[i],
            o = t > 0 ? n : 0;r.wrapShift(o), t -= r.size.outerWidth;
      }
    }, _unshiftCells: function _unshiftCells(e) {
      if (e && e.length) for (var t = 0; t < e.length; t++) {
        e[t].wrapShift(0);
      }
    }, integratePhysics: function integratePhysics() {
      this.x += this.velocity, this.velocity *= this.getFrictionFactor();
    }, applyForce: function applyForce(e) {
      this.velocity += e;
    }, getFrictionFactor: function getFrictionFactor() {
      return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"];
    }, getRestingPosition: function getRestingPosition() {
      return this.x + this.velocity / (1 - this.getFrictionFactor());
    }, applyDragForce: function applyDragForce() {
      if (this.isDraggable && this.isPointerDown) {
        var e = this.dragX - this.x - this.velocity;this.applyForce(e);
      }
    }, applySelectedAttraction: function applySelectedAttraction() {
      if (!(this.isDraggable && this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
        var e = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;this.applyForce(e);
      }
    } };return n;
}), function (e, t) {
  if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function (n, i, r, o, s, a) {
    return t(e, n, i, r, o, s, a);
  });else if ("object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports) module.exports = t(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));else {
    var n = e.Flickity;e.Flickity = t(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, n.Cell, n.Slide, n.animatePrototype);
  }
}(window, function (e, t, n, i, r, o, s) {
  var a = e.jQuery,
      l = e.getComputedStyle,
      c = e.console;function u(e, t) {
    for (e = i.makeArray(e); e.length;) {
      t.appendChild(e.shift());
    }
  }var d = 0,
      h = {};function f(e, t) {
    var n = i.getQueryElement(e);if (n) {
      if (this.element = n, this.element.flickityGUID) {
        var r = h[this.element.flickityGUID];return r.option(t), r;
      }a && (this.$element = a(this.element)), this.options = i.extend({}, this.constructor.defaults), this.option(t), this._create();
    } else c && c.error("Bad element for Flickity: " + (n || e));
  }f.defaults = { accessibility: !0, cellAlign: "center", freeScrollFriction: .075, friction: .28, namespaceJQueryEvents: !0, percentPosition: !0, resize: !0, selectedAttraction: .025, setGallerySize: !0 }, f.createMethods = [];var p = f.prototype;i.extend(p, t.prototype), p._create = function () {
    var t = this.guid = ++d;for (var n in this.element.flickityGUID = t, h[t] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && e.addEventListener("resize", this), this.options.on) {
      var i = this.options.on[n];this.on(n, i);
    }f.createMethods.forEach(function (e) {
      this[e]();
    }, this), this.options.watchCSS ? this.watchCSS() : this.activate();
  }, p.option = function (e) {
    i.extend(this.options, e);
  }, p.activate = function () {
    if (!this.isActive) {
      var e;this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), u(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate");var t = this.options.initialIndex;e = this.isInitActivated ? this.selectedIndex : void 0 !== t && this.cells[t] ? t : 0, this.select(e, !1, !0), this.isInitActivated = !0, this.dispatchEvent("ready");
    }
  }, p._createSlider = function () {
    var e = document.createElement("div");e.className = "flickity-slider", e.style[this.originSide] = 0, this.slider = e;
  }, p._filterFindCellElements = function (e) {
    return i.filterFindElements(e, this.options.cellSelector);
  }, p.reloadCells = function () {
    this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize();
  }, p._makeCells = function (e) {
    return this._filterFindCellElements(e).map(function (e) {
      return new r(e, this);
    }, this);
  }, p.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  }, p.getLastSlide = function () {
    return this.slides[this.slides.length - 1];
  }, p.positionCells = function () {
    this._sizeCells(this.cells), this._positionCells(0);
  }, p._positionCells = function (e) {
    e = e || 0, this.maxCellHeight = e && this.maxCellHeight || 0;var t = 0;if (e > 0) {
      var n = this.cells[e - 1];t = n.x + n.size.outerWidth;
    }for (var i = this.cells.length, r = e; r < i; r++) {
      var o = this.cells[r];o.setPosition(t), t += o.size.outerWidth, this.maxCellHeight = Math.max(o.size.outerHeight, this.maxCellHeight);
    }this.slideableWidth = t, this.updateSlides(), this._containSlides(), this.slidesWidth = i ? this.getLastSlide().target - this.slides[0].target : 0;
  }, p._sizeCells = function (e) {
    e.forEach(function (e) {
      e.getSize();
    });
  }, p.updateSlides = function () {
    if (this.slides = [], this.cells.length) {
      var e = new o(this);this.slides.push(e);var t = "left" == this.originSide ? "marginRight" : "marginLeft",
          n = this._getCanCellFit();this.cells.forEach(function (i, r) {
        if (e.cells.length) {
          var s = e.outerWidth - e.firstMargin + (i.size.outerWidth - i.size[t]);n.call(this, r, s) ? e.addCell(i) : (e.updateTarget(), e = new o(this), this.slides.push(e), e.addCell(i));
        } else e.addCell(i);
      }, this), e.updateTarget(), this.updateSelectedSlide();
    }
  }, p._getCanCellFit = function () {
    var e = this.options.groupCells;if (!e) return function () {
      return !1;
    };if ("number" == typeof e) {
      var t = parseInt(e, 10);return function (e) {
        return e % t != 0;
      };
    }var n = "string" == typeof e && e.match(/^(\d+)%$/),
        i = n ? parseInt(n[1], 10) / 100 : 1;return function (e, t) {
      return t <= (this.size.innerWidth + 1) * i;
    };
  }, p._init = p.reposition = function () {
    this.positionCells(), this.positionSliderAtSelected();
  }, p.getSize = function () {
    this.size = n(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign;
  };var m = { center: { left: .5, right: .5 }, left: { left: 0, right: 1 }, right: { right: 0, left: 1 } };return p.setCellAlign = function () {
    var e = m[this.options.cellAlign];this.cellAlign = e ? e[this.originSide] : this.options.cellAlign;
  }, p.setGallerySize = function () {
    if (this.options.setGallerySize) {
      var e = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;this.viewport.style.height = e + "px";
    }
  }, p._getWrapShiftCells = function () {
    if (this.options.wrapAround) {
      this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);var e = this.cursorPosition,
          t = this.cells.length - 1;this.beforeShiftCells = this._getGapCells(e, t, -1), e = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(e, 0, 1);
    }
  }, p._getGapCells = function (e, t, n) {
    for (var i = []; e > 0;) {
      var r = this.cells[t];if (!r) break;i.push(r), t += n, e -= r.size.outerWidth;
    }return i;
  }, p._containSlides = function () {
    if (this.options.contain && !this.options.wrapAround && this.cells.length) {
      var e = this.options.rightToLeft,
          t = e ? "marginRight" : "marginLeft",
          n = e ? "marginLeft" : "marginRight",
          i = this.slideableWidth - this.getLastCell().size[n],
          r = i < this.size.innerWidth,
          o = this.cursorPosition + this.cells[0].size[t],
          s = i - this.size.innerWidth * (1 - this.cellAlign);this.slides.forEach(function (e) {
        r ? e.target = i * this.cellAlign : (e.target = Math.max(e.target, o), e.target = Math.min(e.target, s));
      }, this);
    }
  }, p.dispatchEvent = function (e, t, n) {
    var i = t ? [t].concat(n) : n;if (this.emitEvent(e, i), a && this.$element) {
      var r = e += this.options.namespaceJQueryEvents ? ".flickity" : "";if (t) {
        var o = a.Event(t);o.type = e, r = o;
      }this.$element.trigger(r, n);
    }
  }, p.select = function (e, t, n) {
    if (this.isActive && (e = parseInt(e, 10), this._wrapSelect(e), (this.options.wrapAround || t) && (e = i.modulo(e, this.slides.length)), this.slides[e])) {
      var r = this.selectedIndex;this.selectedIndex = e, this.updateSelectedSlide(), n ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [e]), e != r && this.dispatchEvent("change", null, [e]), this.dispatchEvent("cellSelect");
    }
  }, p._wrapSelect = function (e) {
    var t = this.slides.length;if (!(this.options.wrapAround && t > 1)) return e;var n = i.modulo(e, t),
        r = Math.abs(n - this.selectedIndex),
        o = Math.abs(n + t - this.selectedIndex),
        s = Math.abs(n - t - this.selectedIndex);!this.isDragSelect && o < r ? e += t : !this.isDragSelect && s < r && (e -= t), e < 0 ? this.x -= this.slideableWidth : e >= t && (this.x += this.slideableWidth);
  }, p.previous = function (e, t) {
    this.select(this.selectedIndex - 1, e, t);
  }, p.next = function (e, t) {
    this.select(this.selectedIndex + 1, e, t);
  }, p.updateSelectedSlide = function () {
    var e = this.slides[this.selectedIndex];e && (this.unselectSelectedSlide(), this.selectedSlide = e, e.select(), this.selectedCells = e.cells, this.selectedElements = e.getCellElements(), this.selectedCell = e.cells[0], this.selectedElement = this.selectedElements[0]);
  }, p.unselectSelectedSlide = function () {
    this.selectedSlide && this.selectedSlide.unselect();
  }, p.selectCell = function (e, t, n) {
    var i = this.queryCell(e);if (i) {
      var r = this.getCellSlideIndex(i);this.select(r, t, n);
    }
  }, p.getCellSlideIndex = function (e) {
    for (var t = 0; t < this.slides.length; t++) {
      if (-1 != this.slides[t].cells.indexOf(e)) return t;
    }
  }, p.getCell = function (e) {
    for (var t = 0; t < this.cells.length; t++) {
      var n = this.cells[t];if (n.element == e) return n;
    }
  }, p.getCells = function (e) {
    var t = [];return (e = i.makeArray(e)).forEach(function (e) {
      var n = this.getCell(e);n && t.push(n);
    }, this), t;
  }, p.getCellElements = function () {
    return this.cells.map(function (e) {
      return e.element;
    });
  }, p.getParentCell = function (e) {
    var t = this.getCell(e);return t || (e = i.getParent(e, ".flickity-slider > *"), this.getCell(e));
  }, p.getAdjacentCellElements = function (e, t) {
    if (!e) return this.selectedSlide.getCellElements();t = void 0 === t ? this.selectedIndex : t;var n = this.slides.length;if (1 + 2 * e >= n) return this.getCellElements();for (var r = [], o = t - e; o <= t + e; o++) {
      var s = this.options.wrapAround ? i.modulo(o, n) : o,
          a = this.slides[s];a && (r = r.concat(a.getCellElements()));
    }return r;
  }, p.queryCell = function (e) {
    return "number" == typeof e ? this.cells[e] : ("string" == typeof e && (e = this.element.querySelector(e)), this.getCell(e));
  }, p.uiChange = function () {
    this.emitEvent("uiChange");
  }, p.childUIPointerDown = function (e) {
    this.emitEvent("childUIPointerDown", [e]);
  }, p.onresize = function () {
    this.watchCSS(), this.resize();
  }, i.debounceMethod(f, "onresize", 150), p.resize = function () {
    if (this.isActive) {
      this.getSize(), this.options.wrapAround && (this.x = i.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");var e = this.selectedElements && this.selectedElements[0];this.selectCell(e, !1, !0);
    }
  }, p.watchCSS = function () {
    this.options.watchCSS && (-1 != l(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate());
  }, p.onkeydown = function (e) {
    var t = document.activeElement && document.activeElement != this.element;if (this.options.accessibility && !t) {
      var n = f.keyboardHandlers[e.keyCode];n && n.call(this);
    }
  }, f.keyboardHandlers = { 37: function _() {
      var e = this.options.rightToLeft ? "next" : "previous";this.uiChange(), this[e]();
    }, 39: function _() {
      var e = this.options.rightToLeft ? "previous" : "next";this.uiChange(), this[e]();
    } }, p.focus = function () {
    var t = e.pageYOffset;this.element.focus(), e.pageYOffset != t && e.scrollTo(e.pageXOffset, t);
  }, p.deactivate = function () {
    this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach(function (e) {
      e.destroy();
    }), this.element.removeChild(this.viewport), u(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"));
  }, p.destroy = function () {
    this.deactivate(), e.removeEventListener("resize", this), this.emitEvent("destroy"), a && this.$element && a.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete h[this.guid];
  }, i.extend(p, s), f.data = function (e) {
    var t = (e = i.getQueryElement(e)) && e.flickityGUID;return t && h[t];
  }, i.htmlInit(f, "flickity"), a && a.bridget && a.bridget("flickity", f), f.setJQuery = function (e) {
    a = e;
  }, f.Cell = r, f;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function (n) {
    return t(e, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("ev-emitter")) : e.Unipointer = t(e, e.EvEmitter);
}(window, function (e, t) {
  function n() {}var i = n.prototype = Object.create(t.prototype);i.bindStartEvent = function (e) {
    this._bindStartEvent(e, !0);
  }, i.unbindStartEvent = function (e) {
    this._bindStartEvent(e, !1);
  }, i._bindStartEvent = function (t, n) {
    var i = (n = void 0 === n || n) ? "addEventListener" : "removeEventListener",
        r = "mousedown";e.PointerEvent ? r = "pointerdown" : "ontouchstart" in e && (r = "touchstart"), t[i](r, this);
  }, i.handleEvent = function (e) {
    var t = "on" + e.type;this[t] && this[t](e);
  }, i.getTouch = function (e) {
    for (var t = 0; t < e.length; t++) {
      var n = e[t];if (n.identifier == this.pointerIdentifier) return n;
    }
  }, i.onmousedown = function (e) {
    var t = e.button;t && 0 !== t && 1 !== t || this._pointerDown(e, e);
  }, i.ontouchstart = function (e) {
    this._pointerDown(e, e.changedTouches[0]);
  }, i.onpointerdown = function (e) {
    this._pointerDown(e, e);
  }, i._pointerDown = function (e, t) {
    e.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== t.pointerId ? t.pointerId : t.identifier, this.pointerDown(e, t));
  }, i.pointerDown = function (e, t) {
    this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t]);
  };var r = { mousedown: ["mousemove", "mouseup"], touchstart: ["touchmove", "touchend", "touchcancel"], pointerdown: ["pointermove", "pointerup", "pointercancel"] };return i._bindPostStartEvents = function (t) {
    if (t) {
      var n = r[t.type];n.forEach(function (t) {
        e.addEventListener(t, this);
      }, this), this._boundPointerEvents = n;
    }
  }, i._unbindPostStartEvents = function () {
    this._boundPointerEvents && (this._boundPointerEvents.forEach(function (t) {
      e.removeEventListener(t, this);
    }, this), delete this._boundPointerEvents);
  }, i.onmousemove = function (e) {
    this._pointerMove(e, e);
  }, i.onpointermove = function (e) {
    e.pointerId == this.pointerIdentifier && this._pointerMove(e, e);
  }, i.ontouchmove = function (e) {
    var t = this.getTouch(e.changedTouches);t && this._pointerMove(e, t);
  }, i._pointerMove = function (e, t) {
    this.pointerMove(e, t);
  }, i.pointerMove = function (e, t) {
    this.emitEvent("pointerMove", [e, t]);
  }, i.onmouseup = function (e) {
    this._pointerUp(e, e);
  }, i.onpointerup = function (e) {
    e.pointerId == this.pointerIdentifier && this._pointerUp(e, e);
  }, i.ontouchend = function (e) {
    var t = this.getTouch(e.changedTouches);t && this._pointerUp(e, t);
  }, i._pointerUp = function (e, t) {
    this._pointerDone(), this.pointerUp(e, t);
  }, i.pointerUp = function (e, t) {
    this.emitEvent("pointerUp", [e, t]);
  }, i._pointerDone = function () {
    this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone();
  }, i._pointerReset = function () {
    this.isPointerDown = !1, delete this.pointerIdentifier;
  }, i.pointerDone = function () {}, i.onpointercancel = function (e) {
    e.pointerId == this.pointerIdentifier && this._pointerCancel(e, e);
  }, i.ontouchcancel = function (e) {
    var t = this.getTouch(e.changedTouches);t && this._pointerCancel(e, t);
  }, i._pointerCancel = function (e, t) {
    this._pointerDone(), this.pointerCancel(e, t);
  }, i.pointerCancel = function (e, t) {
    this.emitEvent("pointerCancel", [e, t]);
  }, n.getPointerPoint = function (e) {
    return { x: e.pageX, y: e.pageY };
  }, n;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function (n) {
    return t(e, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("unipointer")) : e.Unidragger = t(e, e.Unipointer);
}(window, function (e, t) {
  function n() {}var i = n.prototype = Object.create(t.prototype);i.bindHandles = function () {
    this._bindHandles(!0);
  }, i.unbindHandles = function () {
    this._bindHandles(!1);
  }, i._bindHandles = function (t) {
    for (var n = (t = void 0 === t || t) ? "addEventListener" : "removeEventListener", i = t ? this._touchActionValue : "", r = 0; r < this.handles.length; r++) {
      var o = this.handles[r];this._bindStartEvent(o, t), o[n]("click", this), e.PointerEvent && (o.style.touchAction = i);
    }
  }, i._touchActionValue = "none", i.pointerDown = function (e, t) {
    this.okayPointerDown(e) && (this.pointerDownPointer = t, e.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t]));
  };var r = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 },
      o = { radio: !0, checkbox: !0, button: !0, submit: !0, image: !0, file: !0 };return i.okayPointerDown = function (e) {
    var t = r[e.target.nodeName],
        n = o[e.target.type],
        i = !t || n;return i || this._pointerReset(), i;
  }, i.pointerDownBlur = function () {
    var e = document.activeElement;e && e.blur && e != document.body && e.blur();
  }, i.pointerMove = function (e, t) {
    var n = this._dragPointerMove(e, t);this.emitEvent("pointerMove", [e, t, n]), this._dragMove(e, t, n);
  }, i._dragPointerMove = function (e, t) {
    var n = { x: t.pageX - this.pointerDownPointer.pageX, y: t.pageY - this.pointerDownPointer.pageY };return !this.isDragging && this.hasDragStarted(n) && this._dragStart(e, t), n;
  }, i.hasDragStarted = function (e) {
    return Math.abs(e.x) > 3 || Math.abs(e.y) > 3;
  }, i.pointerUp = function (e, t) {
    this.emitEvent("pointerUp", [e, t]), this._dragPointerUp(e, t);
  }, i._dragPointerUp = function (e, t) {
    this.isDragging ? this._dragEnd(e, t) : this._staticClick(e, t);
  }, i._dragStart = function (e, t) {
    this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(e, t);
  }, i.dragStart = function (e, t) {
    this.emitEvent("dragStart", [e, t]);
  }, i._dragMove = function (e, t, n) {
    this.isDragging && this.dragMove(e, t, n);
  }, i.dragMove = function (e, t, n) {
    e.preventDefault(), this.emitEvent("dragMove", [e, t, n]);
  }, i._dragEnd = function (e, t) {
    this.isDragging = !1, setTimeout(function () {
      delete this.isPreventingClicks;
    }.bind(this)), this.dragEnd(e, t);
  }, i.dragEnd = function (e, t) {
    this.emitEvent("dragEnd", [e, t]);
  }, i.onclick = function (e) {
    this.isPreventingClicks && e.preventDefault();
  }, i._staticClick = function (e, t) {
    this.isIgnoringMouseUp && "mouseup" == e.type || (this.staticClick(e, t), "mouseup" != e.type && (this.isIgnoringMouseUp = !0, setTimeout(function () {
      delete this.isIgnoringMouseUp;
    }.bind(this), 400)));
  }, i.staticClick = function (e, t) {
    this.emitEvent("staticClick", [e, t]);
  }, n.getPointerPoint = t.getPointerPoint, n;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function (n, i, r) {
    return t(e, n, i, r);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : e.Flickity = t(e, e.Flickity, e.Unidragger, e.fizzyUIUtils);
}(window, function (e, t, n, i) {
  i.extend(t.defaults, { draggable: ">1", dragThreshold: 3 }), t.createMethods.push("_createDrag");var r = t.prototype;i.extend(r, n.prototype), r._touchActionValue = "pan-y";var o = "createTouch" in document,
      s = !1;r._createDrag = function () {
    this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("childUIPointerDown", this._childUIPointerDownDrag), this.on("deactivate", this.unbindDrag), this.on("cellChange", this.updateDraggable), o && !s && (e.addEventListener("touchmove", function () {}), s = !0);
  }, r.onActivateDrag = function () {
    this.handles = [this.viewport], this.bindHandles(), this.updateDraggable();
  }, r.onDeactivateDrag = function () {
    this.unbindHandles(), this.element.classList.remove("is-draggable");
  }, r.updateDraggable = function () {
    ">1" == this.options.draggable ? this.isDraggable = this.slides.length > 1 : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable");
  }, r.bindDrag = function () {
    this.options.draggable = !0, this.updateDraggable();
  }, r.unbindDrag = function () {
    this.options.draggable = !1, this.updateDraggable();
  }, r._uiChangeDrag = function () {
    delete this.isFreeScrolling;
  }, r._childUIPointerDownDrag = function (e) {
    e.preventDefault(), this.pointerDownFocus(e);
  }, r.pointerDown = function (t, n) {
    this.isDraggable ? this.okayPointerDown(t) && (this._pointerDownPreventDefault(t), this.pointerDownFocus(t), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = l(), e.addEventListener("scroll", this), this._pointerDownDefault(t, n)) : this._pointerDownDefault(t, n);
  }, r._pointerDownDefault = function (e, t) {
    this.pointerDownPointer = t, this._bindPostStartEvents(e), this.dispatchEvent("pointerDown", e, [t]);
  };var a = { INPUT: !0, TEXTAREA: !0, SELECT: !0 };function l() {
    return { x: e.pageXOffset, y: e.pageYOffset };
  }return r.pointerDownFocus = function (e) {
    a[e.target.nodeName] || this.focus();
  }, r._pointerDownPreventDefault = function (e) {
    var t = "touchstart" == e.type,
        n = "touch" == e.pointerType,
        i = a[e.target.nodeName];t || n || i || e.preventDefault();
  }, r.hasDragStarted = function (e) {
    return Math.abs(e.x) > this.options.dragThreshold;
  }, r.pointerUp = function (e, t) {
    delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", e, [t]), this._dragPointerUp(e, t);
  }, r.pointerDone = function () {
    e.removeEventListener("scroll", this), delete this.pointerDownScroll;
  }, r.dragStart = function (t, n) {
    this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), e.removeEventListener("scroll", this), this.dispatchEvent("dragStart", t, [n]));
  }, r.pointerMove = function (e, t) {
    var n = this._dragPointerMove(e, t);this.dispatchEvent("pointerMove", e, [t, n]), this._dragMove(e, t, n);
  }, r.dragMove = function (e, t, n) {
    if (this.isDraggable) {
      e.preventDefault(), this.previousDragX = this.dragX;var i = this.options.rightToLeft ? -1 : 1;this.options.wrapAround && (n.x = n.x % this.slideableWidth);var r = this.dragStartPosition + n.x * i;if (!this.options.wrapAround && this.slides.length) {
        var o = Math.max(-this.slides[0].target, this.dragStartPosition);r = r > o ? .5 * (r + o) : r;var s = Math.min(-this.getLastSlide().target, this.dragStartPosition);r = r < s ? .5 * (r + s) : r;
      }this.dragX = r, this.dragMoveTime = new Date(), this.dispatchEvent("dragMove", e, [t, n]);
    }
  }, r.dragEnd = function (e, t) {
    if (this.isDraggable) {
      this.options.freeScroll && (this.isFreeScrolling = !0);var n = this.dragEndRestingSelect();if (this.options.freeScroll && !this.options.wrapAround) {
        var i = this.getRestingPosition();this.isFreeScrolling = -i > this.slides[0].target && -i < this.getLastSlide().target;
      } else this.options.freeScroll || n != this.selectedIndex || (n += this.dragEndBoostSelect());delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(n), delete this.isDragSelect, this.dispatchEvent("dragEnd", e, [t]);
    }
  }, r.dragEndRestingSelect = function () {
    var e = this.getRestingPosition(),
        t = Math.abs(this.getSlideDistance(-e, this.selectedIndex)),
        n = this._getClosestResting(e, t, 1),
        i = this._getClosestResting(e, t, -1);return n.distance < i.distance ? n.index : i.index;
  }, r._getClosestResting = function (e, t, n) {
    for (var i = this.selectedIndex, r = 1 / 0, o = this.options.contain && !this.options.wrapAround ? function (e, t) {
      return e <= t;
    } : function (e, t) {
      return e < t;
    }; o(t, r) && (i += n, r = t, null !== (t = this.getSlideDistance(-e, i)));) {
      t = Math.abs(t);
    }return { distance: r, index: i - n };
  }, r.getSlideDistance = function (e, t) {
    var n = this.slides.length,
        r = this.options.wrapAround && n > 1,
        o = r ? i.modulo(t, n) : t,
        s = this.slides[o];if (!s) return null;var a = r ? this.slideableWidth * Math.floor(t / n) : 0;return e - (s.target + a);
  }, r.dragEndBoostSelect = function () {
    if (void 0 === this.previousDragX || !this.dragMoveTime || new Date() - this.dragMoveTime > 100) return 0;var e = this.getSlideDistance(-this.dragX, this.selectedIndex),
        t = this.previousDragX - this.dragX;return e > 0 && t > 0 ? 1 : e < 0 && t < 0 ? -1 : 0;
  }, r.staticClick = function (e, t) {
    var n = this.getParentCell(e.target),
        i = n && n.element,
        r = n && this.cells.indexOf(n);this.dispatchEvent("staticClick", e, [t, i, r]);
  }, r.onscroll = function () {
    var e = l(),
        t = this.pointerDownScroll.x - e.x,
        n = this.pointerDownScroll.y - e.y;(Math.abs(t) > 3 || Math.abs(n) > 3) && this._pointerDone();
  }, t;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("tap-listener/tap-listener", ["unipointer/unipointer"], function (n) {
    return t(e, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("unipointer")) : e.TapListener = t(e, e.Unipointer);
}(window, function (e, t) {
  function n(e) {
    this.bindTap(e);
  }var i = n.prototype = Object.create(t.prototype);return i.bindTap = function (e) {
    e && (this.unbindTap(), this.tapElement = e, this._bindStartEvent(e, !0));
  }, i.unbindTap = function () {
    this.tapElement && (this._bindStartEvent(this.tapElement, !0), delete this.tapElement);
  }, i.pointerUp = function (n, i) {
    if (!this.isIgnoringMouseUp || "mouseup" != n.type) {
      var r = t.getPointerPoint(i),
          o = this.tapElement.getBoundingClientRect(),
          s = e.pageXOffset,
          a = e.pageYOffset;if (r.x >= o.left + s && r.x <= o.right + s && r.y >= o.top + a && r.y <= o.bottom + a && this.emitEvent("tap", [n, i]), "mouseup" != n.type) {
        this.isIgnoringMouseUp = !0;var l = this;setTimeout(function () {
          delete l.isIgnoringMouseUp;
        }, 400);
      }
    }
  }, i.destroy = function () {
    this.pointerDone(), this.unbindTap();
  }, n;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function (n, i, r) {
    return t(e, n, i, r);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : t(e, e.Flickity, e.TapListener, e.fizzyUIUtils);
}(window, function (e, t, n, i) {
  "use strict";
  var r = "http://www.w3.org/2000/svg";function o(e, t) {
    this.direction = e, this.parent = t, this._create();
  }o.prototype = Object.create(n.prototype), o.prototype._create = function () {
    this.isEnabled = !0, this.isPrevious = -1 == this.direction;var e = this.parent.options.rightToLeft ? 1 : -1;this.isLeft = this.direction == e;var t = this.element = document.createElement("button");t.className = "flickity-button flickity-prev-next-button", t.className += this.isPrevious ? " previous" : " next", t.setAttribute("type", "button"), this.disable(), t.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");var n = this.createSVG();t.appendChild(n), this.on("tap", this.onTap), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
  }, o.prototype.activate = function () {
    this.bindTap(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element);
  }, o.prototype.deactivate = function () {
    this.parent.element.removeChild(this.element), n.prototype.destroy.call(this), this.element.removeEventListener("click", this);
  }, o.prototype.createSVG = function () {
    var e = document.createElementNS(r, "svg");e.setAttribute("class", "flickity-button-icon"), e.setAttribute("viewBox", "0 0 100 100");var t = document.createElementNS(r, "path"),
        n = function (e) {
      if ("string" == typeof e) return e;return "M " + e.x0 + ",50 L " + e.x1 + "," + (e.y1 + 50) + " L " + e.x2 + "," + (e.y2 + 50) + " L " + e.x3 + ",50  L " + e.x2 + "," + (50 - e.y2) + " L " + e.x1 + "," + (50 - e.y1) + " Z";
    }(this.parent.options.arrowShape);return t.setAttribute("d", n), t.setAttribute("class", "arrow"), this.isLeft || t.setAttribute("transform", "translate(100, 100) rotate(180) "), e.appendChild(t), e;
  }, o.prototype.onTap = function () {
    if (this.isEnabled) {
      this.parent.uiChange();var e = this.isPrevious ? "previous" : "next";this.parent[e]();
    }
  }, o.prototype.handleEvent = i.handleEvent, o.prototype.onclick = function (e) {
    var t = document.activeElement;t && t == this.element && this.onTap(e, e);
  }, o.prototype.enable = function () {
    this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0);
  }, o.prototype.disable = function () {
    this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1);
  }, o.prototype.update = function () {
    var e = this.parent.slides;if (this.parent.options.wrapAround && e.length > 1) this.enable();else {
      var t = e.length ? e.length - 1 : 0,
          n = this.isPrevious ? 0 : t;this[this.parent.selectedIndex == n ? "disable" : "enable"]();
    }
  }, o.prototype.destroy = function () {
    this.deactivate();
  }, i.extend(t.defaults, { prevNextButtons: !0, arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 } }), t.createMethods.push("_createPrevNextButtons");var s = t.prototype;return s._createPrevNextButtons = function () {
    this.options.prevNextButtons && (this.prevButton = new o(-1, this), this.nextButton = new o(1, this), this.on("activate", this.activatePrevNextButtons));
  }, s.activatePrevNextButtons = function () {
    this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons);
  }, s.deactivatePrevNextButtons = function () {
    this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons);
  }, t.PrevNextButton = o, t;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function (n, i, r) {
    return t(e, n, i, r);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : t(e, e.Flickity, e.TapListener, e.fizzyUIUtils);
}(window, function (e, t, n, i) {
  function r(e) {
    this.parent = e, this._create();
  }r.prototype = new n(), r.prototype._create = function () {
    this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.on("tap", this.onTap), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
  }, r.prototype.activate = function () {
    this.setDots(), this.bindTap(this.holder), this.parent.element.appendChild(this.holder);
  }, r.prototype.deactivate = function () {
    this.parent.element.removeChild(this.holder), n.prototype.destroy.call(this);
  }, r.prototype.setDots = function () {
    var e = this.parent.slides.length - this.dots.length;e > 0 ? this.addDots(e) : e < 0 && this.removeDots(-e);
  }, r.prototype.addDots = function (e) {
    for (var t = document.createDocumentFragment(), n = [], i = this.dots.length, r = i + e, o = i; o < r; o++) {
      var s = document.createElement("li");s.className = "dot", s.setAttribute("aria-label", "Page dot " + (o + 1)), t.appendChild(s), n.push(s);
    }this.holder.appendChild(t), this.dots = this.dots.concat(n);
  }, r.prototype.removeDots = function (e) {
    this.dots.splice(this.dots.length - e, e).forEach(function (e) {
      this.holder.removeChild(e);
    }, this);
  }, r.prototype.updateSelected = function () {
    this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"));
  }, r.prototype.onTap = function (e) {
    var t = e.target;if ("LI" == t.nodeName) {
      this.parent.uiChange();var n = this.dots.indexOf(t);this.parent.select(n);
    }
  }, r.prototype.destroy = function () {
    this.deactivate();
  }, t.PageDots = r, i.extend(t.defaults, { pageDots: !0 }), t.createMethods.push("_createPageDots");var o = t.prototype;return o._createPageDots = function () {
    this.options.pageDots && (this.pageDots = new r(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots));
  }, o.activatePageDots = function () {
    this.pageDots.activate();
  }, o.updateSelectedPageDots = function () {
    this.pageDots.updateSelected();
  }, o.updatePageDots = function () {
    this.pageDots.setDots();
  }, o.deactivatePageDots = function () {
    this.pageDots.deactivate();
  }, t.PageDots = r, t;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function (e, n, i) {
    return t(e, n, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : t(e.EvEmitter, e.fizzyUIUtils, e.Flickity);
}(window, function (e, t, n) {
  function i(e) {
    this.parent = e, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this);
  }i.prototype = Object.create(e.prototype), i.prototype.play = function () {
    "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()));
  }, i.prototype.tick = function () {
    if ("playing" == this.state) {
      var e = this.parent.options.autoPlay;e = "number" == typeof e ? e : 3e3;var t = this;this.clear(), this.timeout = setTimeout(function () {
        t.parent.next(!0), t.tick();
      }, e);
    }
  }, i.prototype.stop = function () {
    this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange);
  }, i.prototype.clear = function () {
    clearTimeout(this.timeout);
  }, i.prototype.pause = function () {
    "playing" == this.state && (this.state = "paused", this.clear());
  }, i.prototype.unpause = function () {
    "paused" == this.state && this.play();
  }, i.prototype.visibilityChange = function () {
    this[document.hidden ? "pause" : "unpause"]();
  }, i.prototype.visibilityPlay = function () {
    this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay);
  }, t.extend(n.defaults, { pauseAutoPlayOnHover: !0 }), n.createMethods.push("_createPlayer");var r = n.prototype;return r._createPlayer = function () {
    this.player = new i(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer);
  }, r.activatePlayer = function () {
    this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this));
  }, r.playPlayer = function () {
    this.player.play();
  }, r.stopPlayer = function () {
    this.player.stop();
  }, r.pausePlayer = function () {
    this.player.pause();
  }, r.unpausePlayer = function () {
    this.player.unpause();
  }, r.deactivatePlayer = function () {
    this.player.stop(), this.element.removeEventListener("mouseenter", this);
  }, r.onmouseenter = function () {
    this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this));
  }, r.onmouseleave = function () {
    this.player.unpause(), this.element.removeEventListener("mouseleave", this);
  }, n.Player = i, n;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function (n, i) {
    return t(e, n, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("./flickity"), require("fizzy-ui-utils")) : t(e, e.Flickity, e.fizzyUIUtils);
}(window, function (e, t, n) {
  var i = t.prototype;return i.insert = function (e, t) {
    var n = this._makeCells(e);if (n && n.length) {
      var i = this.cells.length;t = void 0 === t ? i : t;var r = function (e) {
        var t = document.createDocumentFragment();return e.forEach(function (e) {
          t.appendChild(e.element);
        }), t;
      }(n),
          o = t == i;if (o) this.slider.appendChild(r);else {
        var s = this.cells[t].element;this.slider.insertBefore(r, s);
      }if (0 === t) this.cells = n.concat(this.cells);else if (o) this.cells = this.cells.concat(n);else {
        var a = this.cells.splice(t, i - t);this.cells = this.cells.concat(n).concat(a);
      }this._sizeCells(n), this.cellChange(t, !0);
    }
  }, i.append = function (e) {
    this.insert(e, this.cells.length);
  }, i.prepend = function (e) {
    this.insert(e, 0);
  }, i.remove = function (e) {
    var t = this.getCells(e);if (t && t.length) {
      var i = this.cells.length - 1;t.forEach(function (e) {
        e.remove();var t = this.cells.indexOf(e);i = Math.min(t, i), n.removeFrom(this.cells, e);
      }, this), this.cellChange(i, !0);
    }
  }, i.cellSizeChange = function (e) {
    var t = this.getCell(e);if (t) {
      t.getSize();var n = this.cells.indexOf(t);this.cellChange(n);
    }
  }, i.cellChange = function (e, t) {
    var n = this.selectedElement;this._positionCells(e), this._getWrapShiftCells(), this.setGallerySize();var i = this.getCell(n);i && (this.selectedIndex = this.getCellSlideIndex(i)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [e]), this.select(this.selectedIndex), t && this.positionSliderAtSelected();
  }, t;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function (n, i) {
    return t(e, n, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("./flickity"), require("fizzy-ui-utils")) : t(e, e.Flickity, e.fizzyUIUtils);
}(window, function (e, t, n) {
  "use strict";
  t.createMethods.push("_createLazyload");var i = t.prototype;function r(e, t) {
    this.img = e, this.flickity = t, this.load();
  }return i._createLazyload = function () {
    this.on("select", this.lazyLoad);
  }, i.lazyLoad = function () {
    var e = this.options.lazyLoad;if (e) {
      var t = "number" == typeof e ? e : 0,
          i = [];this.getAdjacentCellElements(t).forEach(function (e) {
        var t = function (e) {
          if ("IMG" == e.nodeName) {
            var t = e.getAttribute("data-flickity-lazyload"),
                i = e.getAttribute("data-flickity-lazyload-src"),
                r = e.getAttribute("data-flickity-lazyload-srcset");if (t || i || r) return [e];
          }var o = e.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");return n.makeArray(o);
        }(e);i = i.concat(t);
      }), i.forEach(function (e) {
        new r(e, this);
      }, this);
    }
  }, r.prototype.handleEvent = n.handleEvent, r.prototype.load = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this);var e = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
        t = this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src = e, t && this.img.setAttribute("srcset", t), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset");
  }, r.prototype.onload = function (e) {
    this.complete(e, "flickity-lazyloaded");
  }, r.prototype.onerror = function (e) {
    this.complete(e, "flickity-lazyerror");
  }, r.prototype.complete = function (e, t) {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);var n = this.flickity.getParentCell(this.img),
        i = n && n.element;this.flickity.cellSizeChange(i), this.img.classList.add(t), this.flickity.dispatchEvent("lazyLoad", e, i);
  }, t.LazyLoader = r, t;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], t) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports && (module.exports = t(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")));
}(window, function (e) {
  return e;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], t) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(require("flickity"), require("fizzy-ui-utils")) : e.Flickity = t(e.Flickity, e.fizzyUIUtils);
}(window, function (e, t) {
  e.createMethods.push("_createAsNavFor");var n = e.prototype;return n._createAsNavFor = function () {
    this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);var e = this.options.asNavFor;if (e) {
      var t = this;setTimeout(function () {
        t.setNavCompanion(e);
      });
    }
  }, n.setNavCompanion = function (n) {
    n = t.getQueryElement(n);var i = e.data(n);if (i && i != this) {
      this.navCompanion = i;var r = this;this.onNavCompanionSelect = function () {
        r.navCompanionSelect();
      }, i.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0);
    }
  }, n.navCompanionSelect = function (e) {
    if (this.navCompanion) {
      var t,
          n,
          i,
          r = this.navCompanion.selectedCells[0],
          o = this.navCompanion.cells.indexOf(r),
          s = o + this.navCompanion.selectedCells.length - 1,
          a = Math.floor((t = o, n = s, i = this.navCompanion.cellAlign, (n - t) * i + t));if (this.selectCell(a, !1, e), this.removeNavSelectedElements(), !(a >= this.cells.length)) {
        var l = this.cells.slice(o, s + 1);this.navSelectedElements = l.map(function (e) {
          return e.element;
        }), this.changeNavSelectedClass("add");
      }
    }
  }, n.changeNavSelectedClass = function (e) {
    this.navSelectedElements.forEach(function (t) {
      t.classList[e]("is-nav-selected");
    });
  }, n.activateAsNavFor = function () {
    this.navCompanionSelect(!0);
  }, n.removeNavSelectedElements = function () {
    this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements);
  }, n.onNavStaticClick = function (e, t, n, i) {
    "number" == typeof i && this.navCompanion.selectCell(i);
  }, n.deactivateAsNavFor = function () {
    this.removeNavSelectedElements();
  }, n.destroyAsNavFor = function () {
    this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion);
  }, e;
}), function (e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function (n) {
    return t(e, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter);
}("undefined" != typeof window ? window : this, function (e, t) {
  var n = e.jQuery,
      i = e.console;function r(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }var o = Array.prototype.slice;function s(e, t, a) {
    if (!(this instanceof s)) return new s(e, t, a);var l,
        c = e;("string" == typeof e && (c = document.querySelectorAll(e)), c) ? (this.elements = (l = c, Array.isArray(l) ? l : "object" == (typeof l === "undefined" ? "undefined" : _typeof(l)) && "number" == typeof l.length ? o.call(l) : [l]), this.options = r({}, this.options), "function" == typeof t ? a = t : r(this.options, t), a && this.on("always", a), this.getImages(), n && (this.jqDeferred = new n.Deferred()), setTimeout(this.check.bind(this))) : i.error("Bad element for imagesLoaded " + (c || e));
  }s.prototype = Object.create(t.prototype), s.prototype.options = {}, s.prototype.getImages = function () {
    this.images = [], this.elements.forEach(this.addElementImages, this);
  }, s.prototype.addElementImages = function (e) {
    "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);var t = e.nodeType;if (t && a[t]) {
      for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
        var r = n[i];this.addImage(r);
      }if ("string" == typeof this.options.background) {
        var o = e.querySelectorAll(this.options.background);for (i = 0; i < o.length; i++) {
          var s = o[i];this.addElementBackgroundImages(s);
        }
      }
    }
  };var a = { 1: !0, 9: !0, 11: !0 };function l(e) {
    this.img = e;
  }function c(e, t) {
    this.url = e, this.element = t, this.img = new Image();
  }return s.prototype.addElementBackgroundImages = function (e) {
    var t = getComputedStyle(e);if (t) for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
      var r = i && i[2];r && this.addBackground(r, e), i = n.exec(t.backgroundImage);
    }
  }, s.prototype.addImage = function (e) {
    var t = new l(e);this.images.push(t);
  }, s.prototype.addBackground = function (e, t) {
    var n = new c(e, t);this.images.push(n);
  }, s.prototype.check = function () {
    var e = this;function t(t, n, i) {
      setTimeout(function () {
        e.progress(t, n, i);
      });
    }this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function (e) {
      e.once("progress", t), e.check();
    }) : this.complete();
  }, s.prototype.progress = function (e, t, n) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && i && i.log("progress: " + n, e, t);
  }, s.prototype.complete = function () {
    var e = this.hasAnyBroken ? "fail" : "done";if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
      var t = this.hasAnyBroken ? "reject" : "resolve";this.jqDeferred[t](this);
    }
  }, l.prototype = Object.create(t.prototype), l.prototype.check = function () {
    this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image(), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src);
  }, l.prototype.getIsImageComplete = function () {
    return this.img.complete && this.img.naturalWidth;
  }, l.prototype.confirm = function (e, t) {
    this.isLoaded = e, this.emitEvent("progress", [this, this.img, t]);
  }, l.prototype.handleEvent = function (e) {
    var t = "on" + e.type;this[t] && this[t](e);
  }, l.prototype.onload = function () {
    this.confirm(!0, "onload"), this.unbindEvents();
  }, l.prototype.onerror = function () {
    this.confirm(!1, "onerror"), this.unbindEvents();
  }, l.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
  }, c.prototype = Object.create(l.prototype), c.prototype.check = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
  }, c.prototype.unbindEvents = function () {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
  }, c.prototype.confirm = function (e, t) {
    this.isLoaded = e, this.emitEvent("progress", [this, this.element, t]);
  }, s.makeJQueryPlugin = function (t) {
    (t = t || e.jQuery) && ((n = t).fn.imagesLoaded = function (e, t) {
      return new s(this, e, t).jqDeferred.promise(n(this));
    });
  }, s.makeJQueryPlugin(), s;
}), function (e, t) {
  "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function (n, i) {
    return t(e, n, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("flickity"), require("imagesloaded")) : e.Flickity = t(e, e.Flickity, e.imagesLoaded);
}(window, function (e, t, n) {
  "use strict";
  t.createMethods.push("_createImagesLoaded");var i = t.prototype;return i._createImagesLoaded = function () {
    this.on("activate", this.imagesLoaded);
  }, i.imagesLoaded = function () {
    if (this.options.imagesLoaded) {
      var e = this;n(this.slider).on("progress", function (t, n) {
        var i = e.getParentCell(n.img);e.cellSizeChange(i && i.element), e.options.freeScroll || e.positionSliderAtSelected();
      });
    }
  }, t;
}), function (e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = t() : e.Headroom = t();
}(this, function () {
  "use strict";
  var e = { bind: !!function () {}.bind, classList: "classList" in document.documentElement, rAF: !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame) };function t(e) {
    this.callback = e, this.ticking = !1;
  }function n(e, t) {
    var i;t = function e(t) {
      if (arguments.length <= 0) throw new Error("Missing arguments in extend function");var n,
          i,
          r,
          o = t || {};for (i = 1; i < arguments.length; i++) {
        var s = arguments[i] || {};for (n in s) {
          "object" != _typeof(o[n]) || (r = o[n]) && "undefined" != typeof window && (r === window || r.nodeType) ? o[n] = o[n] || s[n] : o[n] = e(o[n], s[n]);
        }
      }return o;
    }(t, n.options), this.lastKnownScrollY = 0, this.elem = e, this.tolerance = (i = t.tolerance) === Object(i) ? i : { down: i, up: i }, this.classes = t.classes, this.offset = t.offset, this.scroller = t.scroller, this.initialised = !1, this.onPin = t.onPin, this.onUnpin = t.onUnpin, this.onTop = t.onTop, this.onNotTop = t.onNotTop, this.onBottom = t.onBottom, this.onNotBottom = t.onNotBottom;
  }return window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, t.prototype = { constructor: t, update: function update() {
      this.callback && this.callback(), this.ticking = !1;
    }, requestTick: function requestTick() {
      this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0);
    }, handleEvent: function handleEvent() {
      this.requestTick();
    } }, n.prototype = { constructor: n, init: function init() {
      if (n.cutsTheMustard) return this.debouncer = new t(this.update.bind(this)), this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this;
    }, destroy: function destroy() {
      var e = this.classes;for (var t in this.initialised = !1, e) {
        e.hasOwnProperty(t) && this.elem.classList.remove(e[t]);
      }this.scroller.removeEventListener("scroll", this.debouncer, !1);
    }, attachEvent: function attachEvent() {
      this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent());
    }, unpin: function unpin() {
      var e = this.elem.classList,
          t = this.classes;!e.contains(t.pinned) && e.contains(t.unpinned) || (e.add(t.unpinned), e.remove(t.pinned), this.onUnpin && this.onUnpin.call(this));
    }, pin: function pin() {
      var e = this.elem.classList,
          t = this.classes;e.contains(t.unpinned) && (e.remove(t.unpinned), e.add(t.pinned), this.onPin && this.onPin.call(this));
    }, top: function top() {
      var e = this.elem.classList,
          t = this.classes;e.contains(t.top) || (e.add(t.top), e.remove(t.notTop), this.onTop && this.onTop.call(this));
    }, notTop: function notTop() {
      var e = this.elem.classList,
          t = this.classes;e.contains(t.notTop) || (e.add(t.notTop), e.remove(t.top), this.onNotTop && this.onNotTop.call(this));
    }, bottom: function bottom() {
      var e = this.elem.classList,
          t = this.classes;e.contains(t.bottom) || (e.add(t.bottom), e.remove(t.notBottom), this.onBottom && this.onBottom.call(this));
    }, notBottom: function notBottom() {
      var e = this.elem.classList,
          t = this.classes;e.contains(t.notBottom) || (e.add(t.notBottom), e.remove(t.bottom), this.onNotBottom && this.onNotBottom.call(this));
    }, getScrollY: function getScrollY() {
      return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }, getViewportHeight: function getViewportHeight() {
      return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }, getElementPhysicalHeight: function getElementPhysicalHeight(e) {
      return Math.max(e.offsetHeight, e.clientHeight);
    }, getScrollerPhysicalHeight: function getScrollerPhysicalHeight() {
      return this.scroller === window || this.scroller === document.body ? this.getViewportHeight() : this.getElementPhysicalHeight(this.scroller);
    }, getDocumentHeight: function getDocumentHeight() {
      var e = document.body,
          t = document.documentElement;return Math.max(e.scrollHeight, t.scrollHeight, e.offsetHeight, t.offsetHeight, e.clientHeight, t.clientHeight);
    }, getElementHeight: function getElementHeight(e) {
      return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight);
    }, getScrollerHeight: function getScrollerHeight() {
      return this.scroller === window || this.scroller === document.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller);
    }, isOutOfBounds: function isOutOfBounds(e) {
      var t = e < 0,
          n = e + this.getScrollerPhysicalHeight() > this.getScrollerHeight();return t || n;
    }, toleranceExceeded: function toleranceExceeded(e, t) {
      return Math.abs(e - this.lastKnownScrollY) >= this.tolerance[t];
    }, shouldUnpin: function shouldUnpin(e, t) {
      var n = e > this.lastKnownScrollY,
          i = e >= this.offset;return n && i && t;
    }, shouldPin: function shouldPin(e, t) {
      var n = e < this.lastKnownScrollY,
          i = e <= this.offset;return n && t || i;
    }, update: function update() {
      var e = this.getScrollY(),
          t = e > this.lastKnownScrollY ? "down" : "up",
          n = this.toleranceExceeded(e, t);this.isOutOfBounds(e) || (e <= this.offset ? this.top() : this.notTop(), e + this.getViewportHeight() >= this.getScrollerHeight() ? this.bottom() : this.notBottom(), this.shouldUnpin(e, n) ? this.unpin() : this.shouldPin(e, n) && this.pin(), this.lastKnownScrollY = e);
    } }, n.options = { tolerance: { up: 0, down: 0 }, offset: 0, scroller: window, classes: { pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", bottom: "headroom--bottom", notBottom: "headroom--not-bottom", initial: "headroom" } }, n.cutsTheMustard = void 0 !== e && e.rAF && e.bind && e.classList, n;
}), function (e) {
  e && (e.fn.headroom = function (t) {
    return this.each(function () {
      var n = e(this),
          i = n.data("headroom"),
          r = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t;r = e.extend(!0, {}, Headroom.options, r), i || ((i = new Headroom(this, r)).init(), n.data("headroom", i)), "string" == typeof t && (i[t](), "destroy" === t && n.removeData("headroom"));
    });
  }, e("[data-headroom]").each(function () {
    var t = e(this);t.headroom(t.data());
  }));
}(window.Zepto || window.jQuery), function (e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery);
}(function (e) {
  "use strict";
  var t = e.scrollTo = function (t, n, i) {
    return e(window).scrollTo(t, n, i);
  };function n(t) {
    return !t.nodeName || -1 !== e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
  }function i(t) {
    return e.isFunction(t) || e.isPlainObject(t) ? t : { top: t, left: t };
  }return t.defaults = { axis: "xy", duration: 0, limit: !0 }, e.fn.scrollTo = function (r, o, s) {
    "object" == (typeof o === "undefined" ? "undefined" : _typeof(o)) && (s = o, o = 0), "function" == typeof s && (s = { onAfter: s }), "max" === r && (r = 9e9), s = e.extend({}, t.defaults, s), o = o || s.duration;var a = s.queue && s.axis.length > 1;return a && (o /= 2), s.offset = i(s.offset), s.over = i(s.over), this.each(function () {
      if (null !== r) {
        var l,
            c = n(this),
            u = c ? this.contentWindow || window : this,
            d = e(u),
            h = r,
            f = {};switch (typeof h === "undefined" ? "undefined" : _typeof(h)) {case "number":case "string":
            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(h)) {
              h = i(h);break;
            }h = c ? e(h) : e(h, u);case "object":
            if (0 === h.length) return;(h.is || h.style) && (l = (h = e(h)).offset());}var p = e.isFunction(s.offset) && s.offset(u, h) || s.offset;e.each(s.axis.split(""), function (e, n) {
          var i = "x" === n ? "Left" : "Top",
              r = i.toLowerCase(),
              o = "scroll" + i,
              g = d[o](),
              v = t.max(u, n);if (l) f[o] = l[r] + (c ? 0 : g - d.offset()[r]), s.margin && (f[o] -= parseInt(h.css("margin" + i), 10) || 0, f[o] -= parseInt(h.css("border" + i + "Width"), 10) || 0), f[o] += p[r] || 0, s.over[r] && (f[o] += h["x" === n ? "width" : "height"]() * s.over[r]);else {
            var y = h[r];f[o] = y.slice && "%" === y.slice(-1) ? parseFloat(y) / 100 * v : y;
          }s.limit && /^\d+$/.test(f[o]) && (f[o] = f[o] <= 0 ? 0 : Math.min(f[o], v)), !e && s.axis.length > 1 && (g === f[o] ? f = {} : a && (m(s.onAfterFirst), f = {}));
        }), m(s.onAfter);
      }function m(t) {
        var n = e.extend({}, s, { queue: !0, duration: o, complete: t && function () {
            t.call(u, h, s);
          } });d.animate(f, n);
      }
    });
  }, t.max = function (t, i) {
    var r = "x" === i ? "Width" : "Height",
        o = "scroll" + r;if (!n(t)) return t[o] - e(t)[r.toLowerCase()]();var s = "client" + r,
        a = t.ownerDocument || t.document,
        l = a.documentElement,
        c = a.body;return Math.max(l[o], c[o]) - Math.min(l[s], c[s]);
  }, e.Tween.propHooks.scrollLeft = e.Tween.propHooks.scrollTop = { get: function get(t) {
      return e(t.elem)[t.prop]();
    }, set: function set(t) {
      var n = this.get(t);if (t.options.interrupt && t._last && t._last !== n) return e(t.elem).stop();var i = Math.round(t.now);n !== i && (e(t.elem)[t.prop](i), t._last = this.get(t));
    } }, t;
}), function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? e(require("jquery")) : e(window.jQuery || window.Zepto);
}(function (e) {
  var t,
      n,
      i,
      r,
      o,
      s,
      a = function a() {},
      l = !!window.jQuery,
      c = e(window),
      u = function u(e, n) {
    t.ev.on("mfp" + e + ".mfp", n);
  },
      d = function d(t, n, i, r) {
    var o = document.createElement("div");return o.className = "mfp-" + t, i && (o.innerHTML = i), r ? n && n.appendChild(o) : (o = e(o), n && o.appendTo(n)), o;
  },
      h = function h(n, i) {
    t.ev.triggerHandler("mfp" + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]));
  },
      f = function f(n) {
    return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn;
  },
      p = function p() {
    e.magnificPopup.instance || ((t = new a()).init(), e.magnificPopup.instance = t);
  };a.prototype = { constructor: a, init: function init() {
      var n = navigator.appVersion;t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = function () {
        var e = document.createElement("p").style,
            t = ["ms", "O", "Moz", "Webkit"];if (void 0 !== e.transition) return !0;for (; t.length;) {
          if (t.pop() + "Transition" in e) return !0;
        }return !1;
      }(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = e(document), t.popupsCache = {};
    }, open: function open(n) {
      var r;if (!1 === n.isObj) {
        t.items = n.items.toArray(), t.index = 0;var s,
            a = n.items;for (r = 0; r < a.length; r++) {
          if ((s = a[r]).parsed && (s = s.el[0]), s === n.el[0]) {
            t.index = r;break;
          }
        }
      } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;if (!t.isOpen) {
        t.types = [], o = "", n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = i, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = d("bg").on("click.mfp", function () {
          t.close();
        }), t.wrap = d("wrap").attr("tabindex", -1).on("click.mfp", function (e) {
          t._checkIfClose(e.target) && t.close();
        }), t.container = d("container", t.wrap)), t.contentContainer = d("content"), t.st.preloader && (t.preloader = d("preloader", t.container, t.st.tLoading));var l = e.magnificPopup.modules;for (r = 0; r < l.length; r++) {
          var p = l[r];p = p.charAt(0).toUpperCase() + p.slice(1), t["init" + p].call(t);
        }h("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (u("MarkupParse", function (e, t, n, i) {
          n.close_replaceWith = f(i.type);
        }), o += " mfp-close-btn-in") : t.wrap.append(f())), t.st.alignTop && (o += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({ overflow: t.st.overflowY, overflowX: "hidden", overflowY: t.st.overflowY }) : t.wrap.css({ top: c.scrollTop(), position: "absolute" }), (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({ height: i.height(), position: "absolute" }), t.st.enableEscapeKey && i.on("keyup.mfp", function (e) {
          27 === e.keyCode && t.close();
        }), c.on("resize.mfp", function () {
          t.updateSize();
        }), t.st.closeOnContentClick || (o += " mfp-auto-cursor"), o && t.wrap.addClass(o);var m = t.wH = c.height(),
            g = {};if (t.fixedContentPos && t._hasScrollBar(m)) {
          var v = t._getScrollbarSize();v && (g.marginRight = v);
        }t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : g.overflow = "hidden");var y = t.st.mainClass;return t.isIE7 && (y += " mfp-ie7"), y && t._addClassToMFP(y), t.updateItemHTML(), h("BuildControls"), e("html").css(g), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function () {
          t.content ? (t._addClassToMFP("mfp-ready"), t._setFocus()) : t.bgOverlay.addClass("mfp-ready"), i.on("focusin.mfp", t._onFocusIn);
        }, 16), t.isOpen = !0, t.updateSize(m), h("Open"), n;
      }t.updateItemHTML();
    }, close: function close() {
      t.isOpen && (h("BeforeClose"), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP("mfp-removing"), setTimeout(function () {
        t._close();
      }, t.st.removalDelay)) : t._close());
    }, _close: function _close() {
      h("Close");var n = "mfp-removing mfp-ready ";if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
        var r = { marginRight: "" };t.isIE7 ? e("body, html").css("overflow", "") : r.overflow = "", e("html").css(r);
      }i.off("keyup.mfp focusin.mfp"), t.ev.off(".mfp"), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, h("AfterClose");
    }, updateSize: function updateSize(e) {
      if (t.isIOS) {
        var n = document.documentElement.clientWidth / window.innerWidth,
            i = window.innerHeight * n;t.wrap.css("height", i), t.wH = i;
      } else t.wH = e || c.height();t.fixedContentPos || t.wrap.css("height", t.wH), h("Resize");
    }, updateItemHTML: function updateItemHTML() {
      var n = t.items[t.index];t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));var i = n.type;if (h("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
        var o = !!t.st[i] && t.st[i].markup;h("FirstMarkupParse", o), t.currTemplate[i] = !o || e(o);
      }r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");var s = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);t.appendContent(s, i), n.preloaded = !0, h("Change", n), r = n.type, t.container.prepend(t.contentContainer), h("AfterChange");
    }, appendContent: function appendContent(e, n) {
      t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[n] ? t.content.find(".mfp-close").length || t.content.append(f()) : t.content = e : t.content = "", h("BeforeAppend"), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content);
    }, parseEl: function parseEl(n) {
      var i,
          r = t.items[n];if (r.tagName ? r = { el: e(r) } : (i = r.type, r = { data: r, src: r.src }), r.el) {
        for (var o = t.types, s = 0; s < o.length; s++) {
          if (r.el.hasClass("mfp-" + o[s])) {
            i = o[s];break;
          }
        }r.src = r.el.attr("data-mfp-src"), r.src || (r.src = r.el.attr("href"));
      }return r.type = i || t.st.type || "inline", r.index = n, r.parsed = !0, t.items[n] = r, h("ElementParse", r), t.items[n];
    }, addGroup: function addGroup(e, n) {
      var i = function i(_i) {
        _i.mfpEl = this, t._openClick(_i, e, n);
      };n || (n = {});var r = "click.magnificPopup";n.mainEl = e, n.items ? (n.isObj = !0, e.off(r).on(r, i)) : (n.isObj = !1, n.delegate ? e.off(r).on(r, n.delegate, i) : (n.items = e, e.off(r).on(r, i)));
    }, _openClick: function _openClick(n, i, r) {
      if ((void 0 !== r.midClick ? r.midClick : e.magnificPopup.defaults.midClick) || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
        var o = void 0 !== r.disableOn ? r.disableOn : e.magnificPopup.defaults.disableOn;if (o) if (e.isFunction(o)) {
          if (!o.call(t)) return !0;
        } else if (c.width() < o) return !0;n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), r.el = e(n.mfpEl), r.delegate && (r.items = i.find(r.delegate)), t.open(r);
      }
    }, updateStatus: function updateStatus(e, i) {
      if (t.preloader) {
        n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);var r = { status: e, text: i };h("UpdateStatus", r), e = r.status, i = r.text, t.preloader.html(i), t.preloader.find("a").on("click", function (e) {
          e.stopImmediatePropagation();
        }), t.container.addClass("mfp-s-" + e), n = e;
      }
    }, _checkIfClose: function _checkIfClose(n) {
      if (!e(n).hasClass("mfp-prevent-close")) {
        var i = t.st.closeOnContentClick,
            r = t.st.closeOnBgClick;if (i && r) return !0;if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;if (n === t.content[0] || e.contains(t.content[0], n)) {
          if (i) return !0;
        } else if (r && e.contains(document, n)) return !0;return !1;
      }
    }, _addClassToMFP: function _addClassToMFP(e) {
      t.bgOverlay.addClass(e), t.wrap.addClass(e);
    }, _removeClassFromMFP: function _removeClassFromMFP(e) {
      this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
    }, _hasScrollBar: function _hasScrollBar(e) {
      return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || c.height());
    }, _setFocus: function _setFocus() {
      (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
    }, _onFocusIn: function _onFocusIn(n) {
      if (n.target !== t.wrap[0] && !e.contains(t.wrap[0], n.target)) return t._setFocus(), !1;
    }, _parseMarkup: function _parseMarkup(t, n, i) {
      var r;i.data && (n = e.extend(i.data, n)), h("MarkupParse", [t, n, i]), e.each(n, function (n, i) {
        if (void 0 === i || !1 === i) return !0;if ((r = n.split("_")).length > 1) {
          var o = t.find(".mfp-" + r[0]);if (o.length > 0) {
            var s = r[1];"replaceWith" === s ? o[0] !== i[0] && o.replaceWith(i) : "img" === s ? o.is("img") ? o.attr("src", i) : o.replaceWith(e("<img>").attr("src", i).attr("class", o.attr("class"))) : o.attr(r[1], i);
          }
        } else t.find(".mfp-" + n).html(i);
      });
    }, _getScrollbarSize: function _getScrollbarSize() {
      if (void 0 === t.scrollbarSize) {
        var e = document.createElement("div");e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e);
      }return t.scrollbarSize;
    } }, e.magnificPopup = { instance: null, proto: a.prototype, modules: [], open: function open(t, n) {
      return p(), (t = t ? e.extend(!0, {}, t) : {}).isObj = !0, t.index = n || 0, this.instance.open(t);
    }, close: function close() {
      return e.magnificPopup.instance && e.magnificPopup.instance.close();
    }, registerModule: function registerModule(t, n) {
      n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t);
    }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, e.fn.magnificPopup = function (n) {
    p();var i = e(this);if ("string" == typeof n) {
      if ("open" === n) {
        var r,
            o = l ? i.data("magnificPopup") : i[0].magnificPopup,
            s = parseInt(arguments[1], 10) || 0;o.items ? r = o.items[s] : (r = i, o.delegate && (r = r.find(o.delegate)), r = r.eq(s)), t._openClick({ mfpEl: r }, i, o);
      } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
    } else n = e.extend(!0, {}, n), l ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);return i;
  };var m,
      g,
      v,
      y = function y() {
    v && (g.after(v.addClass(m)).detach(), v = null);
  };e.magnificPopup.registerModule("inline", { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function initInline() {
        t.types.push("inline"), u("Close.inline", function () {
          y();
        });
      }, getInline: function getInline(n, i) {
        if (y(), n.src) {
          var r = t.st.inline,
              o = e(n.src);if (o.length) {
            var s = o[0].parentNode;s && s.tagName && (g || (m = r.hiddenClass, g = d(m), m = "mfp-" + m), v = o.after(g).detach().removeClass(m)), t.updateStatus("ready");
          } else t.updateStatus("error", r.tNotFound), o = e("<div>");return n.inlineElement = o, o;
        }return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i;
      } } });var b,
      w = function w() {
    b && e(document.body).removeClass(b);
  },
      E = function E() {
    w(), t.req && t.req.abort();
  };e.magnificPopup.registerModule("ajax", { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function initAjax() {
        t.types.push("ajax"), b = t.st.ajax.cursor, u("Close.ajax", E), u("BeforeChange.ajax", E);
      }, getAjax: function getAjax(n) {
        b && e(document.body).addClass(b), t.updateStatus("loading");var i = e.extend({ url: n.src, success: function success(i, r, o) {
            var s = { data: i, xhr: o };h("ParseAjax", s), t.appendContent(e(s.data), "ajax"), n.finished = !0, w(), t._setFocus(), setTimeout(function () {
              t.wrap.addClass("mfp-ready");
            }, 16), t.updateStatus("ready"), h("AjaxContentAdded");
          }, error: function error() {
            w(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src));
          } }, t.st.ajax.settings);return t.req = e.ajax(i), "";
      } } });var C;e.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function initImage() {
        var n = t.st.image,
            i = ".image";t.types.push("image"), u("Open" + i, function () {
          "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor);
        }), u("Close" + i, function () {
          n.cursor && e(document.body).removeClass(n.cursor), c.off("resize.mfp");
        }), u("Resize" + i, t.resizeImage), t.isLowIE && u("AfterChange", t.resizeImage);
      }, resizeImage: function resizeImage() {
        var e = t.currItem;if (e && e.img && t.st.image.verticalFit) {
          var n = 0;t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n);
        }
      }, _onImageHasSize: function _onImageHasSize(e) {
        e.img && (e.hasSize = !0, C && clearInterval(C), e.isCheckingImgSize = !1, h("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1));
      }, findImageSize: function findImageSize(e) {
        var n = 0,
            i = e.img[0],
            r = function r(o) {
          C && clearInterval(C), C = setInterval(function () {
            i.naturalWidth > 0 ? t._onImageHasSize(e) : (n > 200 && clearInterval(C), 3 === ++n ? r(10) : 40 === n ? r(50) : 100 === n && r(500));
          }, o);
        };r(1);
      }, getImage: function getImage(n, i) {
        var r = 0,
            o = function o() {
          n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, h("ImageLoadComplete")) : ++r < 200 ? setTimeout(o, 100) : s());
        },
            s = function s() {
          n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", a.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0);
        },
            a = t.st.image,
            l = i.find(".mfp-img");if (l.length) {
          var c = document.createElement("img");c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = e(c).on("load.mfploader", o).on("error.mfploader", s), c.src = n.src, l.is("img") && (n.img = n.img.clone()), (c = n.img[0]).naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1);
        }return t._parseMarkup(i, { title: function (n) {
            if (n.data && void 0 !== n.data.title) return n.data.title;var i = t.st.image.titleSrc;if (i) {
              if (e.isFunction(i)) return i.call(t, n);if (n.el) return n.el.attr(i) || "";
            }return "";
          }(n), img_replaceWith: n.img }, n), t.resizeImage(), n.hasSize ? (C && clearInterval(C), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", a.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i);
      } } });var _;e.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function opener(e) {
        return e.is("img") ? e : e.find("img");
      } }, proto: { initZoom: function initZoom() {
        var e,
            n = t.st.zoom,
            i = ".zoom";if (n.enabled && t.supportsTransition) {
          var r,
              o,
              s = n.duration,
              a = function a(e) {
            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                i = "all " + n.duration / 1e3 + "s " + n.easing,
                r = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                o = "transition";return r["-webkit-" + o] = r["-moz-" + o] = r["-o-" + o] = r[o] = i, t.css(r), t;
          },
              l = function l() {
            t.content.css("visibility", "visible");
          };u("BuildControls" + i, function () {
            if (t._allowZoom()) {
              if (clearTimeout(r), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom())) return void l();(o = a(e)).css(t._getOffset()), t.wrap.append(o), r = setTimeout(function () {
                o.css(t._getOffset(!0)), r = setTimeout(function () {
                  l(), setTimeout(function () {
                    o.remove(), e = o = null, h("ZoomAnimationEnded");
                  }, 16);
                }, s);
              }, 16);
            }
          }), u("BeforeClose" + i, function () {
            if (t._allowZoom()) {
              if (clearTimeout(r), t.st.removalDelay = s, !e) {
                if (!(e = t._getItemToZoom())) return;o = a(e);
              }o.css(t._getOffset(!0)), t.wrap.append(o), t.content.css("visibility", "hidden"), setTimeout(function () {
                o.css(t._getOffset());
              }, 16);
            }
          }), u("Close" + i, function () {
            t._allowZoom() && (l(), o && o.remove(), e = null);
          });
        }
      }, _allowZoom: function _allowZoom() {
        return "image" === t.currItem.type;
      }, _getItemToZoom: function _getItemToZoom() {
        return !!t.currItem.hasSize && t.currItem.img;
      }, _getOffset: function _getOffset(n) {
        var i,
            r = (i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
            o = parseInt(i.css("padding-top"), 10),
            s = parseInt(i.css("padding-bottom"), 10);r.top -= e(window).scrollTop() - o;var a = { width: i.width(), height: (l ? i.innerHeight() : i[0].offsetHeight) - s - o };return void 0 === _ && (_ = void 0 !== document.createElement("p").style.MozTransform), _ ? a["-moz-transform"] = a.transform = "translate(" + r.left + "px," + r.top + "px)" : (a.left = r.left, a.top = r.top), a;
      } } });var T = function T(e) {
    if (t.currTemplate.iframe) {
      var n = t.currTemplate.iframe.find("iframe");n.length && (e || (n[0].src = "//about:blank"), t.isIE8 && n.css("display", e ? "block" : "none"));
    }
  };e.magnificPopup.registerModule("iframe", { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function initIframe() {
        t.types.push("iframe"), u("BeforeChange", function (e, t, n) {
          t !== n && ("iframe" === t ? T() : "iframe" === n && T(!0));
        }), u("Close.iframe", function () {
          T();
        });
      }, getIframe: function getIframe(n, i) {
        var r = n.src,
            o = t.st.iframe;e.each(o.patterns, function () {
          if (r.indexOf(this.index) > -1) return this.id && (r = "string" == typeof this.id ? r.substr(r.lastIndexOf(this.id) + this.id.length, r.length) : this.id.call(this, r)), r = this.src.replace("%id%", r), !1;
        });var s = {};return o.srcAction && (s[o.srcAction] = r), t._parseMarkup(i, s, n), t.updateStatus("ready"), i;
      } } });var x = function x(e) {
    var n = t.items.length;return e > n - 1 ? e - n : e < 0 ? n + e : e;
  },
      k = function k(e, t, n) {
    return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
  };e.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function initGallery() {
        var n = t.st.gallery,
            r = ".mfp-gallery";if (t.direction = !0, !n || !n.enabled) return !1;o += " mfp-gallery", u("Open" + r, function () {
          n.navigateByImgClick && t.wrap.on("click" + r, ".mfp-img", function () {
            if (t.items.length > 1) return t.next(), !1;
          }), i.on("keydown" + r, function (e) {
            37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
          });
        }), u("UpdateStatus" + r, function (e, n) {
          n.text && (n.text = k(n.text, t.currItem.index, t.items.length));
        }), u("MarkupParse" + r, function (e, i, r, o) {
          var s = t.items.length;r.counter = s > 1 ? k(n.tCounter, o.index, s) : "";
        }), u("BuildControls" + r, function () {
          if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
            var i = n.arrowMarkup,
                r = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass("mfp-prevent-close"),
                o = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass("mfp-prevent-close");r.click(function () {
              t.prev();
            }), o.click(function () {
              t.next();
            }), t.container.append(r.add(o));
          }
        }), u("Change" + r, function () {
          t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
            t.preloadNearbyImages(), t._preloadTimeout = null;
          }, 16);
        }), u("Close" + r, function () {
          i.off(r), t.wrap.off("click" + r), t.arrowRight = t.arrowLeft = null;
        });
      }, next: function next() {
        t.direction = !0, t.index = x(t.index + 1), t.updateItemHTML();
      }, prev: function prev() {
        t.direction = !1, t.index = x(t.index - 1), t.updateItemHTML();
      }, goTo: function goTo(e) {
        t.direction = e >= t.index, t.index = e, t.updateItemHTML();
      }, preloadNearbyImages: function preloadNearbyImages() {
        var e,
            n = t.st.gallery.preload,
            i = Math.min(n[0], t.items.length),
            r = Math.min(n[1], t.items.length);for (e = 1; e <= (t.direction ? r : i); e++) {
          t._preloadItem(t.index + e);
        }for (e = 1; e <= (t.direction ? i : r); e++) {
          t._preloadItem(t.index - e);
        }
      }, _preloadItem: function _preloadItem(n) {
        if (n = x(n), !t.items[n].preloaded) {
          var i = t.items[n];i.parsed || (i = t.parseEl(n)), h("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
            i.hasSize = !0;
          }).on("error.mfploader", function () {
            i.hasSize = !0, i.loadError = !0, h("LazyLoadError", i);
          }).attr("src", i.src)), i.preloaded = !0;
        }
      } } });e.magnificPopup.registerModule("retina", { options: { replaceSrc: function replaceSrc(e) {
        return e.src.replace(/\.\w+$/, function (e) {
          return "@2x" + e;
        });
      }, ratio: 1 }, proto: { initRetina: function initRetina() {
        if (window.devicePixelRatio > 1) {
          var e = t.st.retina,
              n = e.ratio;(n = isNaN(n) ? n() : n) > 1 && (u("ImageHasSize.retina", function (e, t) {
            t.img.css({ "max-width": t.img[0].naturalWidth / n, width: "100%" });
          }), u("ElementParse.retina", function (t, i) {
            i.src = e.replaceSrc(i, n);
          }));
        }
      } } }), p();
}), "object" == (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) && function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : e.Plyr = t();
}(this, function () {
  "use strict";
  "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;var e,
      t,
      n = (function (e, t) {
    var n;n = function n() {
      var e = function e() {},
          t = {},
          n = {},
          i = {};function r(e, t) {
        if (e) {
          var r = i[e];if (n[e] = t, r) for (; r.length;) {
            r[0](e, t), r.splice(0, 1);
          }
        }
      }function o(t, n) {
        t.call && (t = { success: t }), n.length ? (t.error || e)(n) : (t.success || e)(t);
      }function s(t, n, i, r) {
        var o,
            a,
            l = document,
            c = i.async,
            u = (i.numRetries || 0) + 1,
            d = i.before || e,
            h = t.replace(/^(css|img)!/, "");r = r || 0, /(^css!|\.css$)/.test(t) ? (o = !0, (a = l.createElement("link")).rel = "stylesheet", a.href = h) : /(^img!|\.(png|gif|jpg|svg)$)/.test(t) ? (a = l.createElement("img")).src = h : ((a = l.createElement("script")).src = t, a.async = void 0 === c || c), a.onload = a.onerror = a.onbeforeload = function (e) {
          var l = e.type[0];if (o && "hideFocus" in a) try {
            a.sheet.cssText.length || (l = "e");
          } catch (e) {
            l = "e";
          }if ("e" == l && (r += 1) < u) return s(t, n, i, r);n(t, l, e.defaultPrevented);
        }, !1 !== d(t, a) && l.head.appendChild(a);
      }function a(e, n, i) {
        var a, l;if (n && n.trim && (a = n), l = (a ? i : n) || {}, a) {
          if (a in t) throw "LoadJS";t[a] = !0;
        }!function (e, t, n) {
          var i,
              r,
              o = (e = e.push ? e : [e]).length,
              a = o,
              l = [];for (i = function i(e, n, _i2) {
            if ("e" == n && l.push(e), "b" == n) {
              if (!_i2) return;l.push(e);
            }--o || t(l);
          }, r = 0; r < a; r++) {
            s(e[r], i, n);
          }
        }(e, function (e) {
          o(l, e), r(a, e);
        }, l);
      }return a.ready = function (e, t) {
        return function (e, t) {
          var r,
              o,
              s,
              a = [],
              l = (e = e.push ? e : [e]).length,
              c = l;for (r = function r(e, n) {
            n.length && a.push(e), --c || t(a);
          }; l--;) {
            o = e[l], (s = n[o]) ? r(o, s) : (i[o] = i[o] || []).push(r);
          }
        }(e, function (e) {
          o(t, e);
        }), a;
      }, a.done = function (e) {
        r(e, []);
      }, a.reset = function () {
        t = {}, n = {}, i = {};
      }, a.isDefined = function (e) {
        return e in t;
      }, a;
    }, e.exports = n();
  }(e = { exports: {} }, e.exports), e.exports),
      i = function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  },
      r = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t;
    };
  }(),
      o = function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  },
      s = function () {
    return function (e, t) {
      if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return function (e, t) {
        var n = [],
            i = !0,
            r = !1,
            o = void 0;try {
          for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0) {}
        } catch (e) {
          r = !0, o = e;
        } finally {
          try {
            !i && a.return && a.return();
          } finally {
            if (r) throw o;
          }
        }return n;
      }(e, t);throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }(),
      a = function () {
    function e(t) {
      i(this, e), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key;
    }return r(e, [{ key: "get", value: function value(t) {
        if (!e.supported || !this.enabled) return null;var n = window.localStorage.getItem(this.key);if (u.is.empty(n)) return null;var i = JSON.parse(n);return u.is.string(t) && t.length ? i[t] : i;
      } }, { key: "set", value: function value(t) {
        if (e.supported && this.enabled && u.is.object(t)) {
          var n = this.get();u.is.empty(n) && (n = {}), u.extend(n, t), window.localStorage.setItem(this.key, JSON.stringify(n));
        }
      } }], [{ key: "supported", get: function get() {
        try {
          if (!("localStorage" in window)) return !1;return window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0;
        } catch (e) {
          return !1;
        }
      } }]), e;
  }(),
      l = { html5: "html5", youtube: "youtube", vimeo: "vimeo" },
      c = { audio: "audio", video: "video" },
      u = { is: { object: function object(e) {
        return u.getConstructor(e) === Object;
      }, number: function number(e) {
        return u.getConstructor(e) === Number && !Number.isNaN(e);
      }, string: function string(e) {
        return u.getConstructor(e) === String;
      }, boolean: function boolean(e) {
        return u.getConstructor(e) === Boolean;
      }, function: function _function(e) {
        return u.getConstructor(e) === Function;
      }, array: function array(e) {
        return !u.is.nullOrUndefined(e) && Array.isArray(e);
      }, weakMap: function weakMap(e) {
        return u.is.instanceof(e, WeakMap);
      }, nodeList: function nodeList(e) {
        return u.is.instanceof(e, NodeList);
      }, element: function element(e) {
        return u.is.instanceof(e, Element);
      }, textNode: function textNode(e) {
        return u.getConstructor(e) === Text;
      }, event: function event(e) {
        return u.is.instanceof(e, Event);
      }, cue: function cue(e) {
        return u.is.instanceof(e, window.TextTrackCue) || u.is.instanceof(e, window.VTTCue);
      }, track: function track(e) {
        return u.is.instanceof(e, TextTrack) || !u.is.nullOrUndefined(e) && u.is.string(e.kind);
      }, url: function url(e) {
        return !u.is.nullOrUndefined(e) && /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/.test(e);
      }, nullOrUndefined: function nullOrUndefined(e) {
        return null === e || void 0 === e;
      }, empty: function empty(e) {
        return u.is.nullOrUndefined(e) || (u.is.string(e) || u.is.array(e) || u.is.nodeList(e)) && !e.length || u.is.object(e) && !Object.keys(e).length;
      }, instanceof: function _instanceof(e, t) {
        return Boolean(e && t && e instanceof t);
      } }, getConstructor: function getConstructor(e) {
      return u.is.nullOrUndefined(e) ? null : e.constructor;
    }, getBrowser: function getBrowser() {
      return { isIE: !!document.documentMode, isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent), isIPhone: /(iPhone|iPod)/gi.test(navigator.platform), isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform) };
    }, fetch: function fetch(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";return new Promise(function (n, i) {
        try {
          var r = new XMLHttpRequest();if (!("withCredentials" in r)) return;r.addEventListener("load", function () {
            if ("text" === t) try {
              n(JSON.parse(r.responseText));
            } catch (e) {
              n(r.responseText);
            } else n(r.response);
          }), r.addEventListener("error", function () {
            throw new Error(r.statusText);
          }), r.open("GET", e, !0), r.responseType = t, r.send();
        } catch (e) {
          i(e);
        }
      });
    }, loadImage: function loadImage(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;return new Promise(function (n, i) {
        var r = new Image(),
            o = function o() {
          delete r.onload, delete r.onerror, (r.naturalWidth >= t ? n : i)(r);
        };Object.assign(r, { onload: o, onerror: o, src: e });
      });
    }, loadScript: function loadScript(e) {
      return new Promise(function (t, i) {
        n(e, { success: t, error: i });
      });
    }, loadSprite: function loadSprite(e, t) {
      if (u.is.string(e)) {
        var n = u.is.string(t),
            i = function i() {
          return null !== document.getElementById(t);
        },
            r = function r(e, t) {
          e.innerHTML = t, n && i() || document.body.insertAdjacentElement("afterbegin", e);
        };if (!n || !i()) {
          var o = a.supported,
              s = document.createElement("div");if (u.toggleHidden(s, !0), n && s.setAttribute("id", t), o) {
            var l = window.localStorage.getItem("cache-" + t);if (null !== l) {
              var c = JSON.parse(l);r(s, c.content);
            }
          }u.fetch(e).then(function (e) {
            u.is.empty(e) || (o && window.localStorage.setItem("cache-" + t, JSON.stringify({ content: e })), r(s, e));
          }).catch(function () {});
        }
      }
    }, generateId: function generateId(e) {
      return e + "-" + Math.floor(1e4 * Math.random());
    }, wrap: function wrap(e, t) {
      var n = e.length ? e : [e];Array.from(n).reverse().forEach(function (e, n) {
        var i = n > 0 ? t.cloneNode(!0) : t,
            r = e.parentNode,
            o = e.nextSibling;i.appendChild(e), o ? r.insertBefore(i, o) : r.appendChild(i);
      });
    }, createElement: function createElement(e, t, n) {
      var i = document.createElement(e);return u.is.object(t) && u.setAttributes(i, t), u.is.string(n) && (i.innerText = n), i;
    }, insertAfter: function insertAfter(e, t) {
      t.parentNode.insertBefore(e, t.nextSibling);
    }, insertElement: function insertElement(e, t, n, i) {
      t.appendChild(u.createElement(e, n, i));
    }, removeElement: function removeElement(e) {
      u.is.nodeList(e) || u.is.array(e) ? Array.from(e).forEach(u.removeElement) : u.is.element(e) && u.is.element(e.parentNode) && e.parentNode.removeChild(e);
    }, emptyElement: function emptyElement(e) {
      for (var t = e.childNodes.length; t > 0;) {
        e.removeChild(e.lastChild), t -= 1;
      }
    }, replaceElement: function replaceElement(e, t) {
      return u.is.element(t) && u.is.element(t.parentNode) && u.is.element(e) ? (t.parentNode.replaceChild(e, t), e) : null;
    }, setAttributes: function setAttributes(e, t) {
      u.is.element(e) && !u.is.empty(t) && Object.entries(t).forEach(function (t) {
        var n = s(t, 2),
            i = n[0],
            r = n[1];e.setAttribute(i, r);
      });
    }, getAttributesFromSelector: function getAttributesFromSelector(e, t) {
      if (!u.is.string(e) || u.is.empty(e)) return {};var n = {},
          i = t;return e.split(",").forEach(function (e) {
        var t = e.trim(),
            r = t.replace(".", ""),
            o = t.replace(/[[\]]/g, "").split("="),
            s = o[0],
            a = o.length > 1 ? o[1].replace(/["']/g, "") : "";switch (t.charAt(0)) {case ".":
            u.is.object(i) && u.is.string(i.class) && (i.class += " " + r), n.class = r;break;case "#":
            n.id = t.replace("#", "");break;case "[":
            n[s] = a;}
      }), n;
    }, toggleHidden: function toggleHidden(e, t) {
      if (u.is.element(e)) {
        var n = t;u.is.boolean(n) || (n = !e.hasAttribute("hidden")), n ? e.setAttribute("hidden", "") : e.removeAttribute("hidden");
      }
    }, toggleClass: function toggleClass(e, t, n) {
      if (u.is.element(e)) {
        var i = "toggle";return void 0 !== n && (i = n ? "add" : "remove"), e.classList[i](t), e.classList.contains(t);
      }return null;
    }, hasClass: function hasClass(e, t) {
      return u.is.element(e) && e.classList.contains(t);
    }, matches: function matches(e, t) {
      var n = { Element: Element };var i = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function () {
        return Array.from(document.querySelectorAll(t)).includes(this);
      };return i.call(e, t);
    }, getElements: function getElements(e) {
      return this.elements.container.querySelectorAll(e);
    }, getElement: function getElement(e) {
      return this.elements.container.querySelector(e);
    }, getFocusElement: function getFocusElement() {
      var e = document.activeElement;return e = e && e !== document.body ? document.querySelector(":focus") : null;
    }, trapFocus: function trapFocus() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];if (u.is.element(e)) {
        var n = u.getElements.call(this, "button:not(:disabled), input:not(:disabled), [tabindex]"),
            i = n[0],
            r = n[n.length - 1],
            o = function o(e) {
          if ("Tab" === e.key && 9 === e.keyCode) {
            var t = u.getFocusElement();t !== r || e.shiftKey ? t === i && e.shiftKey && (r.focus(), e.preventDefault()) : (i.focus(), e.preventDefault());
          }
        };t ? u.on(this.elements.container, "keydown", o, !1) : u.off(this.elements.container, "keydown", o, !1);
      }
    }, toggleListener: function toggleListener(e, t, n) {
      var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];if (!u.is.empty(e) && !u.is.empty(t) && u.is.function(n)) if (u.is.nodeList(e) || u.is.array(e)) Array.from(e).forEach(function (e) {
        e instanceof Node && u.toggleListener.call(null, e, t, n, i, r, o);
      });else {
        var s = t.split(" "),
            a = o;d.passiveListeners && (a = { passive: r, capture: o }), s.forEach(function (t) {
          e[i ? "addEventListener" : "removeEventListener"](t, n, a);
        });
      }
    }, on: function on(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = arguments[2],
          i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];u.toggleListener(e, t, n, !0, i, r);
    }, off: function off(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = arguments[2],
          i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];u.toggleListener(e, t, n, !1, i, r);
    }, dispatchEvent: function dispatchEvent(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};if (u.is.element(e) && !u.is.empty(t)) {
        var r = new CustomEvent(t, { bubbles: n, detail: Object.assign({}, i, { plyr: this }) });e.dispatchEvent(r);
      }
    }, toggleState: function toggleState(e, t) {
      if (u.is.array(e) || u.is.nodeList(e)) Array.from(e).forEach(function (e) {
        return u.toggleState(e, t);
      });else if (u.is.element(e)) {
        var n = "true" === e.getAttribute("aria-pressed"),
            i = u.is.boolean(t) ? t : !n;e.setAttribute("aria-pressed", i);
      }
    }, format: function format(e) {
      for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) {
        n[i - 1] = arguments[i];
      }return u.is.empty(e) ? e : e.toString().replace(/{(\d+)}/g, function (e, t) {
        return u.is.string(n[t]) ? n[t] : "";
      });
    }, getPercentage: function getPercentage(e, t) {
      return 0 === e || 0 === t || Number.isNaN(e) || Number.isNaN(t) ? 0 : (e / t * 100).toFixed(2);
    }, getHours: function getHours(e) {
      return parseInt(e / 60 / 60 % 60, 10);
    }, getMinutes: function getMinutes(e) {
      return parseInt(e / 60 % 60, 10);
    }, getSeconds: function getSeconds(e) {
      return parseInt(e % 60, 10);
    }, formatTime: function formatTime() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];if (!u.is.number(e)) return u.formatTime(null, t, n);var i = function i(e) {
        return ("0" + e).slice(-2);
      },
          r = u.getHours(e),
          o = u.getMinutes(e),
          s = u.getSeconds(e);return t || r > 0 ? r += ":" : r = "", (n ? "-" : "") + r + i(o) + ":" + i(s);
    }, replaceAll: function replaceAll() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), n.toString());
    }, toTitleCase: function toTitleCase() {
      return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/\w\S*/g, function (e) {
        return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
      });
    }, toPascalCase: function toPascalCase() {
      var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();return e = u.replaceAll(e, "-", " "), e = u.replaceAll(e, "_", " "), e = u.toTitleCase(e), u.replaceAll(e, " ", "");
    }, toCamelCase: function toCamelCase() {
      var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();return (e = u.toPascalCase(e)).charAt(0).toLowerCase() + e.slice(1);
    }, extend: function extend() {
      for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) {
        n[i - 1] = arguments[i];
      }if (!n.length) return e;var r = n.shift();return u.is.object(r) ? (Object.keys(r).forEach(function (t) {
        u.is.object(r[t]) ? (Object.keys(e).includes(t) || Object.assign(e, o({}, t, {})), u.extend(e[t], r[t])) : Object.assign(e, o({}, t, r[t]));
      }), u.extend.apply(u, [e].concat(function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) {
            n[t] = e[t];
          }return n;
        }return Array.from(e);
      }(n)))) : e;
    }, dedupe: function dedupe(e) {
      return u.is.array(e) ? e.filter(function (t, n) {
        return e.indexOf(t) === n;
      }) : e;
    }, cloneDeep: function cloneDeep(e) {
      return JSON.parse(JSON.stringify(e));
    }, getDeep: function getDeep(e, t) {
      return t.split(".").reduce(function (e, t) {
        return e && e[t];
      }, e);
    }, closest: function closest(e, t) {
      return u.is.array(e) && e.length ? e.reduce(function (e, n) {
        return Math.abs(n - t) < Math.abs(e - t) ? n : e;
      }) : null;
    }, getProviderByUrl: function getProviderByUrl(e) {
      return (/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(e) ? l.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? l.vimeo : null
      );
    }, parseYouTubeId: function parseYouTubeId(e) {
      if (u.is.empty(e)) return null;return e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : e;
    }, parseVimeoId: function parseVimeoId(e) {
      if (u.is.empty(e)) return null;if (u.is.number(Number(e))) return e;return e.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : e;
    }, parseUrl: function parseUrl(e) {
      var t = document.createElement("a");return t.href = e, t;
    }, getUrlParams: function getUrlParams(e) {
      var t = e;(e.startsWith("http://") || e.startsWith("https://")) && (t = u.parseUrl(e).search);return u.is.empty(t) ? null : t.slice(t.indexOf("?") + 1).split("&").reduce(function (e, t) {
        var n = t.split("="),
            i = s(n, 2),
            r = i[0],
            a = i[1];return Object.assign(e, o({}, r, decodeURIComponent(a)));
      }, {});
    }, buildUrlParams: function buildUrlParams(e) {
      return u.is.object(e) ? Object.keys(e).map(function (t) {
        return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
      }).join("&") : "";
    }, stripHTML: function stripHTML(e) {
      var t = document.createDocumentFragment(),
          n = document.createElement("div");return t.appendChild(n), n.innerHTML = e, t.firstChild.innerText;
    }, getHTML: function getHTML(e) {
      var t = document.createElement("div");return t.appendChild(e), t.innerHTML;
    }, getAspectRatio: function getAspectRatio(e, t) {
      var n = function e(t, n) {
        return 0 === n ? t : e(n, t % n);
      }(e, t);return e / n + ":" + t / n;
    }, get transitionEndEvent() {
      var e = document.createElement("span"),
          t = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" },
          n = Object.keys(t).find(function (t) {
        return void 0 !== e.style[t];
      });return !!u.is.string(n) && t[n];
    }, repaint: function repaint(e) {
      setTimeout(function () {
        u.toggleHidden(e, !0), e.offsetHeight, u.toggleHidden(e, !1);
      }, 0);
    } },
      d = { audio: "canPlayType" in document.createElement("audio"), video: "canPlayType" in document.createElement("video"), check: function check(e, t, n) {
      var i = !1,
          r = !1,
          o = u.getBrowser(),
          s = o.isIPhone && n && d.playsinline;switch (t + ":" + e) {case "html5:video":
          r = (i = d.video) && d.rangeInput && (!o.isIPhone || s);break;case "html5:audio":
          r = (i = d.audio) && d.rangeInput;break;case "youtube:video":case "vimeo:video":
          i = !0, r = d.rangeInput && (!o.isIPhone || s);break;default:
          r = (i = d.audio && d.video) && d.rangeInput;}return { api: i, ui: r };
    }, pip: !u.getBrowser().isIPhone && u.is.function(u.createElement("video").webkitSetPresentationMode), airplay: u.is.function(window.WebKitPlaybackTargetAvailabilityEvent), playsinline: "playsInline" in document.createElement("video"), mime: function mime(e) {
      var t = this.media;try {
        if (!this.isHTML5 || !u.is.function(t.canPlayType)) return !1;if (e.includes("codecs=")) return t.canPlayType(e).replace(/no/, "");if (this.isVideo) switch (e) {case "video/webm":
            return t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, "");case "video/mp4":
            return t.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, "");case "video/ogg":
            return t.canPlayType('video/ogg; codecs="theora"').replace(/no/, "");default:
            return !1;} else if (this.isAudio) switch (e) {case "audio/mpeg":
            return t.canPlayType("audio/mpeg;").replace(/no/, "");case "audio/ogg":
            return t.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, "");case "audio/wav":
            return t.canPlayType('audio/wav; codecs="1"').replace(/no/, "");default:
            return !1;}
      } catch (e) {
        return !1;
      }return !1;
    }, textTracks: "textTracks" in document.createElement("video"), passiveListeners: function () {
      var e = !1;try {
        var t = Object.defineProperty({}, "passive", { get: function get() {
            return e = !0, null;
          } });window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
      } catch (e) {}return e;
    }(), rangeInput: (t = document.createElement("input"), t.type = "range", "range" === t.type), touch: "ontouchstart" in document.documentElement, transitions: !1 !== u.transitionEndEvent, reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches },
      h = { getSources: function getSources() {
      return this.isHTML5 ? this.media.querySelectorAll("source") : null;
    }, getQualityOptions: function getQualityOptions() {
      if (!this.isHTML5) return null;var e = h.getSources.call(this);if (u.is.empty(e)) return null;var t = Array.from(e).filter(function (e) {
        return !u.is.empty(e.getAttribute("size"));
      });return u.is.empty(t) ? null : u.dedupe(t.map(function (e) {
        return Number(e.getAttribute("size"));
      }));
    }, extend: function extend() {
      if (this.isHTML5) {
        var e = this;Object.defineProperty(e.media, "quality", { get: function get() {
            var t = h.getSources.call(e);if (u.is.empty(t)) return null;var n = Array.from(t).filter(function (t) {
              return t.getAttribute("src") === e.source;
            });return u.is.empty(n) ? null : Number(n[0].getAttribute("size"));
          }, set: function set(t) {
            var n = h.getSources.call(e);if (!u.is.empty(n)) {
              var i = Array.from(n).filter(function (e) {
                return Number(e.getAttribute("size")) === t;
              });if (!u.is.empty(i)) {
                var r = i.filter(function (t) {
                  return d.mime.call(e, t.getAttribute("type"));
                });if (!u.is.empty(r)) {
                  u.dispatchEvent.call(e, e.media, "qualityrequested", !1, { quality: t });var o = e.currentTime,
                      s = e.playing;e.media.src = r[0].getAttribute("src");e.on("loadedmetadata", function t() {
                    e.currentTime = o, e.off("loadedmetadata", t);
                  }), e.media.load(), s && e.play(), u.dispatchEvent.call(e, e.media, "qualitychange", !1, { quality: t });
                }
              }
            }
          } });
      }
    }, cancelRequests: function cancelRequests() {
      this.isHTML5 && (u.removeElement(h.getSources()), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
    } },
      f = function f() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};if (u.is.empty(e) || u.is.empty(t)) return "";var n = u.getDeep(t.i18n, e);if (u.is.empty(n)) return "";var i = { "{seektime}": t.seekTime, "{title}": t.title };return Object.entries(i).forEach(function (e) {
      var t = s(e, 2),
          i = t[0],
          r = t[1];n = u.replaceAll(n, i, r);
    }), n;
  },
      p = u.getBrowser(),
      m = { getIconUrl: function getIconUrl() {
      var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || p.isIE && !window.svg4everybody;return { url: this.config.iconUrl, cors: e };
    }, findElements: function findElements() {
      try {
        return this.elements.controls = u.getElement.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = { play: u.getElements.call(this, this.config.selectors.buttons.play), pause: u.getElement.call(this, this.config.selectors.buttons.pause), restart: u.getElement.call(this, this.config.selectors.buttons.restart), rewind: u.getElement.call(this, this.config.selectors.buttons.rewind), fastForward: u.getElement.call(this, this.config.selectors.buttons.fastForward), mute: u.getElement.call(this, this.config.selectors.buttons.mute), pip: u.getElement.call(this, this.config.selectors.buttons.pip), airplay: u.getElement.call(this, this.config.selectors.buttons.airplay), settings: u.getElement.call(this, this.config.selectors.buttons.settings), captions: u.getElement.call(this, this.config.selectors.buttons.captions), fullscreen: u.getElement.call(this, this.config.selectors.buttons.fullscreen) }, this.elements.progress = u.getElement.call(this, this.config.selectors.progress), this.elements.inputs = { seek: u.getElement.call(this, this.config.selectors.inputs.seek), volume: u.getElement.call(this, this.config.selectors.inputs.volume) }, this.elements.display = { buffer: u.getElement.call(this, this.config.selectors.display.buffer), currentTime: u.getElement.call(this, this.config.selectors.display.currentTime), duration: u.getElement.call(this, this.config.selectors.display.duration) }, u.is.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector("." + this.config.classNames.tooltip)), !0;
      } catch (e) {
        return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1;
      }
    }, createIcon: function createIcon(e, t) {
      var n = m.getIconUrl.call(this),
          i = (n.cors ? "" : n.url) + "#" + this.config.iconPrefix,
          r = document.createElementNS("http://www.w3.org/2000/svg", "svg");u.setAttributes(r, u.extend(t, { role: "presentation", focusable: "false" }));var o = document.createElementNS("http://www.w3.org/2000/svg", "use"),
          s = i + "-" + e;return "href" in o ? o.setAttributeNS("http://www.w3.org/1999/xlink", "href", s) : o.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s), r.appendChild(o), r;
    }, createLabel: function createLabel(e, t) {
      var n = f(e, this.config),
          i = Object.assign({}, t);switch (e) {case "pip":
          n = "PIP";break;case "airplay":
          n = "AirPlay";}return "class" in i ? i.class += " " + this.config.classNames.hidden : i.class = this.config.classNames.hidden, u.createElement("span", i, n);
    }, createBadge: function createBadge(e) {
      if (u.is.empty(e)) return null;var t = u.createElement("span", { class: this.config.classNames.menu.value });return t.appendChild(u.createElement("span", { class: this.config.classNames.menu.badge }, e)), t;
    }, createButton: function createButton(e, t) {
      var n = u.createElement("button"),
          i = Object.assign({}, t),
          r = u.toCamelCase(e),
          o = !1,
          s = void 0,
          a = void 0,
          l = void 0,
          c = void 0;switch ("type" in i || (i.type = "button"), "class" in i ? i.class.includes(this.config.classNames.control) && (i.class += " " + this.config.classNames.control) : i.class = this.config.classNames.control, e) {case "play":
          o = !0, s = "play", l = "pause", a = "play", c = "pause";break;case "mute":
          o = !0, s = "mute", l = "unmute", a = "volume", c = "muted";break;case "captions":
          o = !0, s = "enableCaptions", l = "disableCaptions", a = "captions-off", c = "captions-on";break;case "fullscreen":
          o = !0, s = "enterFullscreen", l = "exitFullscreen", a = "enter-fullscreen", c = "exit-fullscreen";break;case "play-large":
          i.class += " " + this.config.classNames.control + "--overlaid", r = "play", s = "play", a = "play";break;default:
          s = r, a = e;}return o ? (n.appendChild(m.createIcon.call(this, c, { class: "icon--pressed" })), n.appendChild(m.createIcon.call(this, a, { class: "icon--not-pressed" })), n.appendChild(m.createLabel.call(this, l, { class: "label--pressed" })), n.appendChild(m.createLabel.call(this, s, { class: "label--not-pressed" })), i["aria-pressed"] = !1) : (n.appendChild(m.createIcon.call(this, a)), n.appendChild(m.createLabel.call(this, s))), u.extend(i, u.getAttributesFromSelector(this.config.selectors.buttons[r], i)), u.setAttributes(n, i), "play" === r ? (u.is.array(this.elements.buttons[r]) || (this.elements.buttons[r] = []), this.elements.buttons[r].push(n)) : this.elements.buttons[r] = n, n;
    }, createRange: function createRange(e, t) {
      var n = u.createElement("label", { for: t.id, id: t.id + "-label", class: this.config.classNames.hidden }, f(e, this.config)),
          i = u.createElement("input", u.extend(u.getAttributesFromSelector(this.config.selectors.inputs[e]), { type: "range", min: 0, max: 100, step: .01, value: 0, autocomplete: "off", role: "slider", "aria-labelledby": t.id + "-label", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": 0 }, t));return this.elements.inputs[e] = i, m.updateRangeFill.call(this, i), { label: n, input: i };
    }, createProgress: function createProgress(e, t) {
      var n = u.createElement("progress", u.extend(u.getAttributesFromSelector(this.config.selectors.display[e]), { min: 0, max: 100, value: 0, role: "presentation", "aria-hidden": !0 }, t));if ("volume" !== e) {
        n.appendChild(u.createElement("span", null, "0"));var i = "";switch (e) {case "played":
            i = f("played", this.config);break;case "buffer":
            i = f("buffered", this.config);}n.innerText = "% " + i.toLowerCase();
      }return this.elements.display[e] = n, n;
    }, createTime: function createTime(e) {
      var t = u.getAttributesFromSelector(this.config.selectors.display[e]),
          n = u.createElement("div", u.extend(t, { class: "plyr__time " + t.class, "aria-label": f(e, this.config) }), "00:00");return this.elements.display[e] = n, n;
    }, createMenuItem: function createMenuItem(e) {
      var t = e.value,
          n = e.list,
          i = e.type,
          r = e.title,
          o = e.badge,
          s = void 0 === o ? null : o,
          a = e.checked,
          l = void 0 !== a && a,
          c = u.createElement("li"),
          d = u.createElement("label", { class: this.config.classNames.control }),
          h = u.createElement("input", u.extend(u.getAttributesFromSelector(this.config.selectors.inputs[i]), { type: "radio", name: "plyr-" + i, value: t, checked: l, class: "plyr__sr-only" })),
          f = u.createElement("span", { hidden: "" });d.appendChild(h), d.appendChild(f), d.insertAdjacentHTML("beforeend", r), u.is.element(s) && d.appendChild(s), c.appendChild(d), n.appendChild(c);
    }, updateTimeDisplay: function updateTimeDisplay() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];if (u.is.element(e) && u.is.number(t)) {
        var i = u.getHours(this.duration) > 0;e.innerText = u.formatTime(t, i, n);
      }
    }, updateVolume: function updateVolume() {
      this.supported.ui && (u.is.element(this.elements.inputs.volume) && m.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), u.is.element(this.elements.buttons.mute) && u.toggleState(this.elements.buttons.mute, this.muted || 0 === this.volume));
    }, setRange: function setRange(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;u.is.element(e) && (e.value = t, m.updateRangeFill.call(this, e));
    }, updateProgress: function updateProgress(e) {
      var t = this;if (this.supported.ui && u.is.event(e)) {
        var n = 0;if (e) switch (e.type) {case "timeupdate":case "seeking":case "seeked":
            n = u.getPercentage(this.currentTime, this.duration), "timeupdate" === e.type && m.setRange.call(this, this.elements.inputs.seek, n);break;case "playing":case "progress":
            !function (e, n) {
              var i = u.is.number(n) ? n : 0,
                  r = u.is.element(e) ? e : t.elements.display.buffer;if (u.is.element(r)) {
                r.value = i;var o = r.getElementsByTagName("span")[0];u.is.element(o) && (o.childNodes[0].nodeValue = i);
              }
            }(this.elements.display.buffer, 100 * this.buffered);}
      }
    }, updateRangeFill: function updateRangeFill(e) {
      var t = u.is.event(e) ? e.target : e;u.is.element(t) && "range" === t.getAttribute("type") && (t.setAttribute("aria-valuenow", t.value), p.isWebkit && t.style.setProperty("--value", t.value / t.max * 100 + "%"));
    }, updateSeekTooltip: function updateSeekTooltip(e) {
      var t = this;if (this.config.tooltips.seek && u.is.element(this.elements.inputs.seek) && u.is.element(this.elements.display.seekTooltip) && 0 !== this.duration) {
        var n = 0,
            i = this.elements.progress.getBoundingClientRect(),
            r = this.config.classNames.tooltip + "--visible",
            o = function o(e) {
          u.toggleClass(t.elements.display.seekTooltip, r, e);
        };if (this.touch) o(!1);else {
          if (u.is.event(e)) n = 100 / i.width * (e.pageX - i.left);else {
            if (!u.hasClass(this.elements.display.seekTooltip, r)) return;n = parseFloat(this.elements.display.seekTooltip.style.left, 10);
          }n < 0 ? n = 0 : n > 100 && (n = 100), m.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * n), this.elements.display.seekTooltip.style.left = n + "%", u.is.event(e) && ["mouseenter", "mouseleave"].includes(e.type) && o("mouseenter" === e.type);
        }
      }
    }, timeUpdate: function timeUpdate(e) {
      var t = !u.is.element(this.elements.display.duration) && this.config.invertTime;m.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || m.updateProgress.call(this, e);
    }, durationUpdate: function durationUpdate() {
      if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
        var e = u.is.element(this.elements.display.duration);!e && this.config.displayDuration && this.paused && m.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && m.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), m.updateSeekTooltip.call(this);
      }
    }, toggleTab: function toggleTab(e, t) {
      u.toggleHidden(this.elements.settings.tabs[e], !t);
    }, setQualityMenu: function setQualityMenu(e) {
      var t = this;if (u.is.element(this.elements.settings.panes.quality)) {
        var n = this.elements.settings.panes.quality.querySelector("ul");u.is.array(e) && (this.options.quality = e.filter(function (e) {
          return t.config.quality.options.includes(e);
        }));var i = !u.is.empty(this.options.quality) && this.options.quality.length > 1;if (m.toggleTab.call(this, "quality", i), m.checkMenu.call(this), i) {
          u.emptyElement(n);this.options.quality.sort(function (e, n) {
            var i = t.config.quality.options;return i.indexOf(e) > i.indexOf(n) ? 1 : -1;
          }).forEach(function (e) {
            m.createMenuItem.call(t, { value: e, list: n, type: "quality", title: m.getLabel.call(t, "quality", e), badge: function (e) {
                var n = f("qualityBadge." + e, t.config);return n.length ? m.createBadge.call(t, n) : null;
              }(e) });
          }), m.updateSetting.call(this, "quality", n);
        }
      }
    }, getLabel: function getLabel(e, t) {
      switch (e) {case "speed":
          return 1 === t ? f("normal", this.config) : t + "&times;";case "quality":
          if (u.is.number(t)) {
            var n = f("qualityLabel." + t, this.config);return n.length ? n : t + "p";
          }return u.toTitleCase(t);case "captions":
          return g.getLabel.call(this);default:
          return null;}
    }, updateSetting: function updateSetting(e, t, n) {
      var i = this.elements.settings.panes[e],
          r = null,
          o = t;switch (e) {case "captions":
          r = this.currentTrack;break;default:
          if (r = u.is.empty(n) ? this[e] : n, u.is.empty(r) && (r = this.config[e].default), !u.is.empty(this.options[e]) && !this.options[e].includes(r)) return void this.debug.warn("Unsupported value of '" + r + "' for " + e);if (!this.config[e].options.includes(r)) return void this.debug.warn("Disabled value of '" + r + "' for " + e);}if (u.is.element(o) || (o = i && i.querySelector("ul")), u.is.element(o)) {
        this.elements.settings.tabs[e].querySelector("." + this.config.classNames.menu.value).innerHTML = m.getLabel.call(this, e, r);var s = o && o.querySelector('input[value="' + r + '"]');u.is.element(s) && (s.checked = !0);
      }
    }, setCaptionsMenu: function setCaptionsMenu() {
      var e = this,
          t = this.elements.settings.panes.captions.querySelector("ul"),
          n = g.getTracks.call(this);if (m.toggleTab.call(this, "captions", n.length), u.emptyElement(t), m.checkMenu.call(this), n.length) {
        var i = n.map(function (n, i) {
          return { value: i, checked: e.captions.active && e.currentTrack === i, title: g.getLabel.call(e, n), badge: n.language && m.createBadge.call(e, n.language.toUpperCase()), list: t, type: "language" };
        });i.unshift({ value: -1, checked: !this.captions.active, title: f("disabled", this.config), list: t, type: "language" }), i.forEach(m.createMenuItem.bind(this)), m.updateSetting.call(this, "captions", t);
      }
    }, setSpeedMenu: function setSpeedMenu(e) {
      var t = this;if (this.config.controls.includes("settings") && this.config.settings.includes("speed") && u.is.element(this.elements.settings.panes.speed)) {
        u.is.array(e) ? this.options.speed = e : (this.isHTML5 || this.isVimeo) && (this.options.speed = [.5, .75, 1, 1.25, 1.5, 1.75, 2]), this.options.speed = this.options.speed.filter(function (e) {
          return t.config.speed.options.includes(e);
        });var n = !u.is.empty(this.options.speed) && this.options.speed.length > 1;if (m.toggleTab.call(this, "speed", n), m.checkMenu.call(this), n) {
          var i = this.elements.settings.panes.speed.querySelector("ul");u.emptyElement(i), this.options.speed.forEach(function (e) {
            m.createMenuItem.call(t, { value: e, list: i, type: "speed", title: m.getLabel.call(t, "speed", e) });
          }), m.updateSetting.call(this, "speed", i);
        }
      }
    }, checkMenu: function checkMenu() {
      var e = this.elements.settings.tabs,
          t = !u.is.empty(e) && Object.values(e).some(function (e) {
        return !e.hidden;
      });u.toggleHidden(this.elements.settings.menu, !t);
    }, toggleMenu: function toggleMenu(e) {
      var t = this.elements.settings.form,
          n = this.elements.buttons.settings;if (u.is.element(t) && u.is.element(n)) {
        var i = u.is.boolean(e) ? e : u.is.element(t) && t.hasAttribute("hidden");if (u.is.event(e)) {
          var r = u.is.element(t) && t.contains(e.target),
              o = e.target === this.elements.buttons.settings;if (r || !r && !o && i) return;o && e.stopPropagation();
        }u.is.element(n) && n.setAttribute("aria-expanded", i), u.is.element(t) && (u.toggleHidden(t, !i), u.toggleClass(this.elements.container, this.config.classNames.menu.open, i), i ? t.removeAttribute("tabindex") : t.setAttribute("tabindex", -1));
      }
    }, getTabSize: function getTabSize(e) {
      var t = e.cloneNode(!0);t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), Array.from(t.querySelectorAll("input[name]")).forEach(function (e) {
        var t = e.getAttribute("name");e.setAttribute("name", t + "-clone");
      }), e.parentNode.appendChild(t);var n = t.scrollWidth,
          i = t.scrollHeight;return u.removeElement(t), { width: n, height: i };
    }, showTab: function showTab() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = this.elements.settings.menu,
          n = document.getElementById(e);if (u.is.element(n) && "tabpanel" === n.getAttribute("role")) {
        var i = t.querySelector('[role="tabpanel"]:not([hidden])'),
            r = i.parentNode;if (Array.from(t.querySelectorAll('[aria-controls="' + i.getAttribute("id") + '"]')).forEach(function (e) {
          e.setAttribute("aria-expanded", !1);
        }), d.transitions && !d.reducedMotion) {
          r.style.width = i.scrollWidth + "px", r.style.height = i.scrollHeight + "px";var o = m.getTabSize.call(this, n);u.on(r, u.transitionEndEvent, function e(t) {
            t.target === r && ["width", "height"].includes(t.propertyName) && (r.style.width = "", r.style.height = "", u.off(r, u.transitionEndEvent, e));
          }), r.style.width = o.width + "px", r.style.height = o.height + "px";
        }u.toggleHidden(i, !0), i.setAttribute("tabindex", -1), u.toggleHidden(n, !1);var s = u.getElements.call(this, '[aria-controls="' + e + '"]');Array.from(s).forEach(function (e) {
          e.setAttribute("aria-expanded", !0);
        }), n.removeAttribute("tabindex"), n.querySelectorAll("button:not(:disabled), input:not(:disabled), [tabindex]")[0].focus();
      }
    }, create: function create(e) {
      var t = this;if (u.is.empty(this.config.controls)) return null;var n = u.createElement("div", u.getAttributesFromSelector(this.config.selectors.controls.wrapper));if (this.config.controls.includes("restart") && n.appendChild(m.createButton.call(this, "restart")), this.config.controls.includes("rewind") && n.appendChild(m.createButton.call(this, "rewind")), this.config.controls.includes("play") && n.appendChild(m.createButton.call(this, "play")), this.config.controls.includes("fast-forward") && n.appendChild(m.createButton.call(this, "fast-forward")), this.config.controls.includes("progress")) {
        var i = u.createElement("div", u.getAttributesFromSelector(this.config.selectors.progress)),
            r = m.createRange.call(this, "seek", { id: "plyr-seek-" + e.id });if (i.appendChild(r.label), i.appendChild(r.input), i.appendChild(m.createProgress.call(this, "buffer")), this.config.tooltips.seek) {
          var o = u.createElement("span", { class: this.config.classNames.tooltip }, "00:00");i.appendChild(o), this.elements.display.seekTooltip = o;
        }this.elements.progress = i, n.appendChild(this.elements.progress);
      }if (this.config.controls.includes("current-time") && n.appendChild(m.createTime.call(this, "currentTime")), this.config.controls.includes("duration") && n.appendChild(m.createTime.call(this, "duration")), this.config.controls.includes("mute") && n.appendChild(m.createButton.call(this, "mute")), this.config.controls.includes("volume")) {
        var s = u.createElement("div", { class: "plyr__volume" }),
            a = { max: 1, step: .05, value: this.config.volume },
            l = m.createRange.call(this, "volume", u.extend(a, { id: "plyr-volume-" + e.id }));s.appendChild(l.label), s.appendChild(l.input), this.elements.volume = s, n.appendChild(s);
      }if (this.config.controls.includes("captions") && n.appendChild(m.createButton.call(this, "captions")), this.config.controls.includes("settings") && !u.is.empty(this.config.settings)) {
        var c = u.createElement("div", { class: "plyr__menu", hidden: "" });c.appendChild(m.createButton.call(this, "settings", { id: "plyr-settings-toggle-" + e.id, "aria-haspopup": !0, "aria-controls": "plyr-settings-" + e.id, "aria-expanded": !1 }));var p = u.createElement("form", { class: "plyr__menu__container", id: "plyr-settings-" + e.id, hidden: "", "aria-labelled-by": "plyr-settings-toggle-" + e.id, role: "tablist", tabindex: -1 }),
            g = u.createElement("div"),
            v = u.createElement("div", { id: "plyr-settings-" + e.id + "-home", "aria-labelled-by": "plyr-settings-toggle-" + e.id, role: "tabpanel" }),
            y = u.createElement("ul", { role: "tablist" });this.config.settings.forEach(function (n) {
          var i = u.createElement("li", { role: "tab", hidden: "" }),
              r = u.createElement("button", u.extend(u.getAttributesFromSelector(t.config.selectors.buttons.settings), { type: "button", class: t.config.classNames.control + " " + t.config.classNames.control + "--forward", id: "plyr-settings-" + e.id + "-" + n + "-tab", "aria-haspopup": !0, "aria-controls": "plyr-settings-" + e.id + "-" + n, "aria-expanded": !1 }), f(n, t.config)),
              o = u.createElement("span", { class: t.config.classNames.menu.value });o.innerHTML = e[n], r.appendChild(o), i.appendChild(r), y.appendChild(i), t.elements.settings.tabs[n] = i;
        }), v.appendChild(y), g.appendChild(v), this.config.settings.forEach(function (n) {
          var i = u.createElement("div", { id: "plyr-settings-" + e.id + "-" + n, hidden: "", "aria-labelled-by": "plyr-settings-" + e.id + "-" + n + "-tab", role: "tabpanel", tabindex: -1 }),
              r = u.createElement("button", { type: "button", class: t.config.classNames.control + " " + t.config.classNames.control + "--back", "aria-haspopup": !0, "aria-controls": "plyr-settings-" + e.id + "-home", "aria-expanded": !1 }, f(n, t.config));i.appendChild(r);var o = u.createElement("ul");i.appendChild(o), g.appendChild(i), t.elements.settings.panes[n] = i;
        }), p.appendChild(g), c.appendChild(p), n.appendChild(c), this.elements.settings.form = p, this.elements.settings.menu = c;
      }return this.config.controls.includes("pip") && d.pip && n.appendChild(m.createButton.call(this, "pip")), this.config.controls.includes("airplay") && d.airplay && n.appendChild(m.createButton.call(this, "airplay")), this.config.controls.includes("fullscreen") && n.appendChild(m.createButton.call(this, "fullscreen")), this.config.controls.includes("play-large") && this.elements.container.appendChild(m.createButton.call(this, "play-large")), this.elements.controls = n, this.isHTML5 && m.setQualityMenu.call(this, h.getQualityOptions.call(this)), m.setSpeedMenu.call(this), n;
    }, inject: function inject() {
      var e = this;if (this.config.loadSprite) {
        var t = m.getIconUrl.call(this);t.cors && u.loadSprite(t.url, "sprite-plyr");
      }this.id = Math.floor(1e4 * Math.random());var n = null;this.elements.controls = null;var i = { id: this.id, seektime: this.config.seekTime, title: this.config.title },
          r = !0;u.is.string(this.config.controls) || u.is.element(this.config.controls) ? n = this.config.controls : u.is.function(this.config.controls) ? n = this.config.controls.call(this, i) : (n = m.create.call(this, { id: this.id, seektime: this.config.seekTime, speed: this.speed, quality: this.quality, captions: g.getLabel.call(this) }), r = !1);var o = function o(e) {
        var t = e;return Object.entries(i).forEach(function (e) {
          var n = s(e, 2),
              i = n[0],
              r = n[1];t = u.replaceAll(t, "{" + i + "}", r);
        }), t;
      };r && (u.is.string(this.config.controls) ? n = o(n) : u.is.element(n) && (n.innerHTML = o(n.innerHTML)));var a = void 0;if (u.is.string(this.config.selectors.controls.container) && (a = document.querySelector(this.config.selectors.controls.container)), u.is.element(a) || (a = this.elements.container), u.is.element(n) ? a.appendChild(n) : n && a.insertAdjacentHTML("beforeend", n), u.is.element(this.elements.controls) || m.findElements.call(this), window.navigator.userAgent.includes("Edge") && u.repaint(a), this.config.tooltips.controls) {
        var l = u.getElements.call(this, [this.config.selectors.controls.wrapper, " ", this.config.selectors.labels, " .", this.config.classNames.hidden].join(""));Array.from(l).forEach(function (t) {
          u.toggleClass(t, e.config.classNames.hidden, !1), u.toggleClass(t, e.config.classNames.tooltip, !0), t.setAttribute("role", "tooltip");
        });
      }
    } },
      g = { setup: function setup() {
      if (this.supported.ui) if (!this.isVideo || this.isYouTube || this.isHTML5 && !d.textTracks) u.is.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && m.setCaptionsMenu.call(this);else {
        if (u.is.element(this.elements.captions) || (this.elements.captions = u.createElement("div", u.getAttributesFromSelector(this.config.selectors.captions)), u.insertAfter(this.elements.captions, this.elements.wrapper)), u.getBrowser().isIE && window.URL) {
          var e = this.media.querySelectorAll("track");Array.from(e).forEach(function (e) {
            var t = e.getAttribute("src"),
                n = u.parseUrl(t);n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && u.fetch(t, "blob").then(function (t) {
              e.setAttribute("src", window.URL.createObjectURL(t));
            }).catch(function () {
              u.removeElement(e);
            });
          });
        }var t = this.storage.get("captions");u.is.boolean(t) || (t = this.config.captions.active);var n = this.storage.get("language") || this.config.captions.language;if ("auto" === n) {
          var i = (navigator.language || navigator.userLanguage).split("-");n = s(i, 1)[0];
        }if (g.setLanguage.call(this, n, t), this.isHTML5) {
          var r = this.config.captions.update ? "addtrack removetrack" : "removetrack";u.on(this.media.textTracks, r, g.update.bind(this));
        }setTimeout(g.update.bind(this), 0);
      }
    }, update: function update() {
      var e = this,
          t = g.getTracks.call(this, !0),
          n = this.captions,
          i = n.language,
          r = n.meta;this.isHTML5 && this.isVideo && t.filter(function (e) {
        return !r.get(e);
      }).forEach(function (t) {
        e.debug.log("Track added", t), r.set(t, { default: "showing" === t.mode }), t.mode = "hidden", u.on(t, "cuechange", function () {
          return g.updateCues.call(e);
        });
      });var o = !t.find(function (t) {
        return t === e.captions.currentTrackNode;
      }),
          s = this.language !== i && t.find(function (e) {
        return e.language === i;
      });(o || s) && g.setLanguage.call(this, i, this.config.captions.active), u.toggleClass(this.elements.container, this.config.classNames.captions.enabled, !u.is.empty(t)), (this.config.controls || []).includes("settings") && this.config.settings.includes("captions") && m.setCaptionsMenu.call(this);
    }, set: function set(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          i = g.getTracks.call(this);if (-1 !== e) {
        if (u.is.number(e)) {
          if (e in i) {
            if (this.captions.currentTrack !== e) {
              this.captions.currentTrack = e;var r = g.getCurrentTrack.call(this),
                  o = (r || {}).language;this.captions.currentTrackNode = r, t && (this.captions.language = o), this.isVimeo && this.embed.enableTextTrack(o), u.dispatchEvent.call(this, this.media, "languagechange");
            }this.isHTML5 && this.isVideo && g.updateCues.call(this), n && this.toggleCaptions(!0);
          } else this.debug.warn("Track not found", e);
        } else this.debug.warn("Invalid caption argument", e);
      } else this.toggleCaptions(!1);
    }, setLanguage: function setLanguage(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];if (u.is.string(e)) {
        this.captions.language = e.toLowerCase();var n = g.getTracks.call(this),
            i = g.getCurrentTrack.call(this, !0);g.set.call(this, n.indexOf(i), !1, t);
      } else this.debug.warn("Invalid language argument", e);
    }, getTracks: function getTracks() {
      var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];return Array.from((this.media || {}).textTracks || []).filter(function (n) {
        return !e.isHTML5 || t || e.captions.meta.has(n);
      }).filter(function (e) {
        return ["captions", "subtitles"].includes(e.kind);
      });
    }, getCurrentTrack: function getCurrentTrack() {
      var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          n = g.getTracks.call(this),
          i = function i(t) {
        return Number((e.captions.meta.get(t) || {}).default);
      },
          r = Array.from(n).sort(function (e, t) {
        return i(t) - i(e);
      });return !t && n[this.currentTrack] || r.find(function (t) {
        return t.language === e.captions.language;
      }) || r[0];
    }, getLabel: function getLabel(e) {
      var t = e;return !u.is.track(t) && d.textTracks && this.captions.active && (t = g.getCurrentTrack.call(this)), u.is.track(t) ? u.is.empty(t.label) ? u.is.empty(t.language) ? f("enabled", this.config) : e.language.toUpperCase() : t.label : f("disabled", this.config);
    }, updateCues: function updateCues(e) {
      if (this.supported.ui) if (u.is.element(this.elements.captions)) {
        if (u.is.nullOrUndefined(e) || Array.isArray(e)) {
          var t = e;if (!t) {
            var n = g.getCurrentTrack.call(this);t = Array.from((n || {}).activeCues || []).map(function (e) {
              return e.getCueAsHTML();
            }).map(u.getHTML);
          }var i = t.map(function (e) {
            return e.trim();
          }).join("\n");if (i !== this.elements.captions.innerHTML) {
            u.emptyElement(this.elements.captions);var r = u.createElement("span", u.getAttributesFromSelector(this.config.selectors.caption));r.innerHTML = i, this.elements.captions.appendChild(r), u.dispatchEvent.call(this, this.media, "cuechange");
          }
        } else this.debug.warn("updateCues: Invalid input", e);
      } else this.debug.warn("No captions element to render to");
    } },
      v = function v() {},
      y = function () {
    function e() {
      var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];i(this, e), this.enabled = window.console && t, this.enabled && this.log("Debugging enabled");
    }return r(e, [{ key: "log", get: function get() {
        return this.enabled ? Function.prototype.bind.call(console.log, console) : v;
      } }, { key: "warn", get: function get() {
        return this.enabled ? Function.prototype.bind.call(console.warn, console) : v;
      } }, { key: "error", get: function get() {
        return this.enabled ? Function.prototype.bind.call(console.error, console) : v;
      } }]), e;
  }(),
      b = { enabled: !0, title: "", debug: !1, autoplay: !1, autopause: !0, seekTime: 10, volume: 1, muted: !1, duration: null, displayDuration: !0, invertTime: !0, toggleInvert: !0, ratio: "16:9", clickToPlay: !0, hideControls: !0, resetOnEnd: !1, disableContextMenu: !0, loadSprite: !0, iconPrefix: "plyr", iconUrl: "https://cdn.plyr.io/3.3.12/plyr.svg", blankVideo: "https://cdn.plyr.io/static/blank.mp4", quality: { default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240, "default"] }, loop: { active: !1 }, speed: { selected: 1, options: [.5, .75, 1, 1.25, 1.5, 1.75, 2] }, keyboard: { focused: !0, global: !1 }, tooltips: { controls: !1, seek: !0 }, captions: { active: !1, language: "auto", update: !1 }, fullscreen: { enabled: !0, fallback: !0, iosNative: !1 }, storage: { enabled: !0, key: "plyr" }, controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"], settings: ["captions", "quality", "speed"], i18n: { restart: "Restart", rewind: "Rewind {seektime}s", play: "Play", pause: "Pause", fastForward: "Forward {seektime}s", seek: "Seek", played: "Played", buffered: "Buffered", currentTime: "Current time", duration: "Duration", volume: "Volume", mute: "Mute", unmute: "Unmute", enableCaptions: "Enable captions", disableCaptions: "Disable captions", enterFullscreen: "Enter fullscreen", exitFullscreen: "Exit fullscreen", frameTitle: "Player for {title}", captions: "Captions", settings: "Settings", speed: "Speed", normal: "Normal", quality: "Quality", loop: "Loop", start: "Start", end: "End", all: "All", reset: "Reset", disabled: "Disabled", enabled: "Enabled", advertisement: "Ad", qualityBadge: { 2160: "4K", 1440: "HD", 1080: "HD", 720: "HD", 576: "SD", 480: "SD" } }, urls: { vimeo: { sdk: "https://player.vimeo.com/api/player.js", iframe: "https://player.vimeo.com/video/{0}?{1}", api: "https://vimeo.com/api/v2/video/{0}.json" }, youtube: { sdk: "https://www.youtube.com/iframe_api", api: "https://www.googleapis.com/youtube/v3/videos?id={0}&key={1}&fields=items(snippet(title))&part=snippet" }, googleIMA: { sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js" } }, listeners: { seek: null, play: null, pause: null, restart: null, rewind: null, fastForward: null, mute: null, volume: null, captions: null, fullscreen: null, pip: null, airplay: null, speed: null, quality: null, loop: null, language: null }, events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "qualityrequested", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"], selectors: { editable: "input, textarea, select, [contenteditable]", container: ".plyr", controls: { container: null, wrapper: ".plyr__controls" }, labels: "[data-plyr]", buttons: { play: '[data-plyr="play"]', pause: '[data-plyr="pause"]', restart: '[data-plyr="restart"]', rewind: '[data-plyr="rewind"]', fastForward: '[data-plyr="fast-forward"]', mute: '[data-plyr="mute"]', captions: '[data-plyr="captions"]', fullscreen: '[data-plyr="fullscreen"]', pip: '[data-plyr="pip"]', airplay: '[data-plyr="airplay"]', settings: '[data-plyr="settings"]', loop: '[data-plyr="loop"]' }, inputs: { seek: '[data-plyr="seek"]', volume: '[data-plyr="volume"]', speed: '[data-plyr="speed"]', language: '[data-plyr="language"]', quality: '[data-plyr="quality"]' }, display: { currentTime: ".plyr__time--current", duration: ".plyr__time--duration", buffer: ".plyr__progress__buffer", loop: ".plyr__progress__loop", volume: ".plyr__volume--display" }, progress: ".plyr__progress", captions: ".plyr__captions", caption: ".plyr__caption", menu: { quality: ".js-plyr__menu__list--quality" } }, classNames: { type: "plyr--{0}", provider: "plyr--{0}", video: "plyr__video-wrapper", embed: "plyr__video-embed", embedContainer: "plyr__video-embed__container", poster: "plyr__poster", posterEnabled: "plyr__poster-enabled", ads: "plyr__ads", control: "plyr__control", playing: "plyr--playing", paused: "plyr--paused", stopped: "plyr--stopped", loading: "plyr--loading", hover: "plyr--hover", tooltip: "plyr__tooltip", cues: "plyr__cues", hidden: "plyr__sr-only", hideControls: "plyr--hide-controls", isIos: "plyr--is-ios", isTouch: "plyr--is-touch", uiSupported: "plyr--full-ui", noTransition: "plyr--no-transition", menu: { value: "plyr__menu__value", badge: "plyr__badge", open: "plyr--menu-open" }, captions: { enabled: "plyr--captions-enabled", active: "plyr--captions-active" }, fullscreen: { enabled: "plyr--fullscreen-enabled", fallback: "plyr--fullscreen-fallback" }, pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" }, airplay: { supported: "plyr--airplay-supported", active: "plyr--airplay-active" }, tabFocus: "plyr__tab-focus" }, attributes: { embed: { provider: "data-plyr-provider", id: "data-plyr-embed-id" } }, keys: { google: null }, ads: { enabled: !1, publisherId: "" } },
      w = u.getBrowser();function E() {
    if (this.enabled) {
      var e = this.player.elements.buttons.fullscreen;u.is.element(e) && u.toggleState(e, this.active), u.dispatchEvent.call(this.player, this.target, this.active ? "enterfullscreen" : "exitfullscreen", !0), w.isIos || u.trapFocus.call(this.player, this.target, this.active);
    }
  }function C() {
    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];e ? this.scrollPosition = { x: window.scrollX || 0, y: window.scrollY || 0 } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", u.toggleClass(this.target, this.player.config.classNames.fullscreen.fallback, e), E.call(this);
  }var _ = function () {
    function e(t) {
      var n = this;i(this, e), this.player = t, this.prefix = e.prefix, this.property = e.property, this.scrollPosition = { x: 0, y: 0 }, u.on(document, "ms" === this.prefix ? "MSFullscreenChange" : this.prefix + "fullscreenchange", function () {
        E.call(n);
      }), u.on(this.player.elements.container, "dblclick", function (e) {
        u.is.element(n.player.elements.controls) && n.player.elements.controls.contains(e.target) || n.toggle();
      }), this.update();
    }return r(e, [{ key: "update", value: function value() {
        this.enabled ? this.player.debug.log((e.native ? "Native" : "Fallback") + " fullscreen enabled") : this.player.debug.log("Fullscreen not supported and fallback disabled"), u.toggleClass(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled);
      } }, { key: "enter", value: function value() {
        this.enabled && (w.isIos && this.player.config.fullscreen.iosNative ? this.player.playing && this.target.webkitEnterFullscreen() : e.native ? this.prefix ? u.is.empty(this.prefix) || this.target[this.prefix + "Request" + this.property]() : this.target.requestFullscreen() : C.call(this, !0));
      } }, { key: "exit", value: function value() {
        if (this.enabled) if (w.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), this.player.play();else if (e.native) {
          if (this.prefix) {
            if (!u.is.empty(this.prefix)) {
              var t = "moz" === this.prefix ? "Cancel" : "Exit";document["" + this.prefix + t + this.property]();
            }
          } else (document.cancelFullScreen || document.exitFullscreen).call(document);
        } else C.call(this, !1);
      } }, { key: "toggle", value: function value() {
        this.active ? this.exit() : this.enter();
      } }, { key: "enabled", get: function get() {
        return (e.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo;
      } }, { key: "active", get: function get() {
        return !!this.enabled && (e.native ? (this.prefix ? document["" + this.prefix + this.property + "Element"] : document.fullscreenElement) === this.target : u.hasClass(this.target, this.player.config.classNames.fullscreen.fallback));
      } }, { key: "target", get: function get() {
        return w.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.container;
      } }], [{ key: "native", get: function get() {
        return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
      } }, { key: "prefix", get: function get() {
        if (u.is.function(document.exitFullscreen)) return "";var e = "";return ["webkit", "moz", "ms"].some(function (t) {
          return !(!u.is.function(document[t + "ExitFullscreen"]) && !u.is.function(document[t + "CancelFullScreen"])) && (e = t, !0);
        }), e;
      } }, { key: "property", get: function get() {
        return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
      } }]), e;
  }(),
      T = u.getBrowser(),
      x = { addStyleHook: function addStyleHook() {
      u.toggleClass(this.elements.container, this.config.selectors.container.replace(".", ""), !0), u.toggleClass(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
    }, toggleNativeControls: function toggleNativeControls() {
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
    }, build: function build() {
      var e = this;if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for " + this.provider + " " + this.type), void x.toggleNativeControls.call(this, !0);u.is.element(this.elements.controls) || (m.inject.call(this), this.listeners.controls()), x.toggleNativeControls.call(this), this.isHTML5 && g.setup.call(this), this.volume = null, this.muted = null, this.speed = null, this.loop = null, this.quality = null, m.updateVolume.call(this), m.timeUpdate.call(this), x.checkPlaying.call(this), u.toggleClass(this.elements.container, this.config.classNames.pip.supported, d.pip && this.isHTML5 && this.isVideo), u.toggleClass(this.elements.container, this.config.classNames.airplay.supported, d.airplay && this.isHTML5), u.toggleClass(this.elements.container, this.config.classNames.isIos, T.isIos), u.toggleClass(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(function () {
        u.dispatchEvent.call(e, e.media, "ready");
      }, 0), x.setTitle.call(this), this.poster && this.elements.poster && !this.elements.poster.style.backgroundImage && x.setPoster.call(this, this.poster), this.config.duration && m.durationUpdate.call(this);
    }, setTitle: function setTitle() {
      var e = f("play", this.config);if (u.is.string(this.config.title) && !u.is.empty(this.config.title) && (e += ", " + this.config.title, this.elements.container.setAttribute("aria-label", this.config.title)), u.is.nodeList(this.elements.buttons.play) && Array.from(this.elements.buttons.play).forEach(function (t) {
        t.setAttribute("aria-label", e);
      }), this.isEmbed) {
        var t = u.getElement.call(this, "iframe");if (!u.is.element(t)) return;var n = u.is.empty(this.config.title) ? "video" : this.config.title,
            i = f("frameTitle", this.config);t.setAttribute("title", i.replace("{title}", n));
      }
    }, togglePoster: function togglePoster(e) {
      u.toggleClass(this.elements.container, this.config.classNames.posterEnabled, e);
    }, setPoster: function setPoster(e) {
      var t = this;if (this.media.setAttribute("poster", e), !u.is.element(this.elements.poster)) return Promise.reject();var n = u.loadImage(e).then(function () {
        return t.elements.poster.style.backgroundImage = "url('" + e + "')", Object.assign(t.elements.poster.style, { backgroundImage: "url('" + e + "')", backgroundSize: "" }), x.togglePoster.call(t, !0), e;
      });return n.catch(function () {
        return x.togglePoster.call(t, !1);
      }), n;
    }, checkPlaying: function checkPlaying(e) {
      u.toggleClass(this.elements.container, this.config.classNames.playing, this.playing), u.toggleClass(this.elements.container, this.config.classNames.paused, this.paused), u.toggleClass(this.elements.container, this.config.classNames.stopped, this.stopped), u.toggleState(this.elements.buttons.play, this.playing), u.is.event(e) && "timeupdate" === e.type || x.toggleControls.call(this);
    }, checkLoading: function checkLoading(e) {
      var t = this;this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function () {
        u.toggleClass(t.elements.container, t.config.classNames.loading, t.loading), x.toggleControls.call(t);
      }, this.loading ? 250 : 0);
    }, toggleControls: function toggleControls(e) {
      var t = this.elements.controls;t && this.config.hideControls && this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover));
    } },
      k = u.getBrowser(),
      S = function () {
    function e(t) {
      i(this, e), this.player = t, this.lastKey = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.firstTouch = this.firstTouch.bind(this);
    }return r(e, [{ key: "handleKey", value: function value(e) {
        var t = this,
            n = e.keyCode ? e.keyCode : e.which,
            i = "keydown" === e.type,
            r = i && n === this.lastKey;if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && u.is.number(n)) {
          if (i) {
            var o = u.getFocusElement();if (u.is.element(o) && o !== this.player.elements.inputs.seek && u.matches(o, this.player.config.selectors.editable)) return;switch ([48, 49, 50, 51, 52, 53, 54, 56, 57, 32, 75, 38, 40, 77, 39, 37, 70, 67, 73, 76, 79].includes(n) && (e.preventDefault(), e.stopPropagation()), n) {case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
                r || (t.player.currentTime = t.player.duration / 10 * (n - 48));break;case 32:case 75:
                r || this.player.togglePlay();break;case 38:
                this.player.increaseVolume(.1);break;case 40:
                this.player.decreaseVolume(.1);break;case 77:
                r || (this.player.muted = !this.player.muted);break;case 39:
                this.player.forward();break;case 37:
                this.player.rewind();break;case 70:
                this.player.fullscreen.toggle();break;case 67:
                r || this.player.toggleCaptions();break;case 76:
                this.player.loop = !this.player.loop;}!this.player.fullscreen.enabled && this.player.fullscreen.active && 27 === n && this.player.fullscreen.toggle(), this.lastKey = n;
          } else this.lastKey = null;
        }
      } }, { key: "toggleMenu", value: function value(e) {
        m.toggleMenu.call(this.player, e);
      } }, { key: "firstTouch", value: function value() {
        this.player.touch = !0, u.toggleClass(this.player.elements.container, this.player.config.classNames.isTouch, !0), u.off(document.body, "touchstart", this.firstTouch);
      } }, { key: "global", value: function value() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];this.player.config.keyboard.global && u.toggleListener(window, "keydown keyup", this.handleKey, e, !1), u.toggleListener(document.body, "click", this.toggleMenu, e), u.on(document.body, "touchstart", this.firstTouch);
      } }, { key: "container", value: function value() {
        var e = this;!this.player.config.keyboard.global && this.player.config.keyboard.focused && u.on(this.player.elements.container, "keydown keyup", this.handleKey, !1), u.on(this.player.elements.container, "focusout", function (t) {
          u.toggleClass(t.target, e.player.config.classNames.tabFocus, !1);
        }), u.on(this.player.elements.container, "keydown", function (t) {
          9 === t.keyCode && setTimeout(function () {
            u.toggleClass(u.getFocusElement(), e.player.config.classNames.tabFocus, !0);
          }, 0);
        }), u.on(this.player.elements.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", function (t) {
          var n = e.player.elements.controls;"enterfullscreen" === t.type && (n.pressed = !1, n.hover = !1);var i = 0;["touchstart", "touchmove", "mousemove"].includes(t.type) && (x.toggleControls.call(e.player, !0), i = e.player.touch ? 3e3 : 2e3), clearTimeout(e.player.timers.controls), e.player.timers.controls = setTimeout(function () {
            return x.toggleControls.call(e.player, !1);
          }, i);
        });
      } }, { key: "media", value: function value() {
        var e = this;if (u.on(this.player.media, "timeupdate seeking seeked", function (t) {
          return m.timeUpdate.call(e.player, t);
        }), u.on(this.player.media, "durationchange loadeddata loadedmetadata", function (t) {
          return m.durationUpdate.call(e.player, t);
        }), u.on(this.player.media, "loadeddata", function () {
          u.toggleHidden(e.player.elements.volume, !e.player.hasAudio), u.toggleHidden(e.player.elements.buttons.mute, !e.player.hasAudio);
        }), u.on(this.player.media, "ended", function () {
          e.player.isHTML5 && e.player.isVideo && e.player.config.resetOnEnd && e.player.restart();
        }), u.on(this.player.media, "progress playing seeking seeked", function (t) {
          return m.updateProgress.call(e.player, t);
        }), u.on(this.player.media, "volumechange", function (t) {
          return m.updateVolume.call(e.player, t);
        }), u.on(this.player.media, "playing play pause ended emptied timeupdate", function (t) {
          return x.checkPlaying.call(e.player, t);
        }), u.on(this.player.media, "waiting canplay seeked playing", function (t) {
          return x.checkLoading.call(e.player, t);
        }), u.on(this.player.media, "playing", function () {
          e.player.ads && e.player.ads.enabled && !e.player.ads.initialized && e.player.ads.managerPromise.then(function () {
            return e.player.ads.play();
          }).catch(function () {
            return e.player.play();
          });
        }), this.player.supported.ui && this.player.config.clickToPlay && !this.player.isAudio) {
          var t = u.getElement.call(this.player, "." + this.player.config.classNames.video);if (!u.is.element(t)) return;u.on(t, "click", function () {
            e.player.config.hideControls && e.player.touch && !e.player.paused || (e.player.paused ? e.player.play() : e.player.ended ? (e.player.restart(), e.player.play()) : e.player.pause());
          });
        }this.player.supported.ui && this.player.config.disableContextMenu && u.on(this.player.elements.wrapper, "contextmenu", function (e) {
          e.preventDefault();
        }, !1), u.on(this.player.media, "volumechange", function () {
          e.player.storage.set({ volume: e.player.volume, muted: e.player.muted });
        }), u.on(this.player.media, "ratechange", function () {
          m.updateSetting.call(e.player, "speed"), e.player.storage.set({ speed: e.player.speed });
        }), u.on(this.player.media, "qualityrequested", function (t) {
          e.player.storage.set({ quality: t.detail.quality });
        }), u.on(this.player.media, "qualitychange", function (t) {
          m.updateSetting.call(e.player, "quality", null, t.detail.quality);
        }), u.on(this.player.media, "languagechange", function () {
          m.updateSetting.call(e.player, "captions"), e.player.storage.set({ language: e.player.language });
        }), u.on(this.player.media, "captionsenabled captionsdisabled", function () {
          m.updateSetting.call(e.player, "captions"), e.player.storage.set({ captions: e.player.captions.active });
        }), u.on(this.player.media, this.player.config.events.concat(["keyup", "keydown"]).join(" "), function (t) {
          var n = t.detail,
              i = void 0 === n ? {} : n;"error" === t.type && (i = e.player.media.error), u.dispatchEvent.call(e.player, e.player.elements.container, t.type, !0, i);
        });
      } }, { key: "controls", value: function value() {
        var e = this,
            t = k.isIE ? "change" : "input",
            n = function n(t, _n3, i) {
          var r = e.player.config.listeners[i],
              o = !0;u.is.function(r) && (o = r.call(e.player, t)), o && u.is.function(_n3) && _n3.call(e.player, t);
        },
            i = function i(t, _i3, r, o) {
          var s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              a = e.player.config.listeners[o],
              l = u.is.function(a);u.on(t, _i3, function (e) {
            return n(e, r, o);
          }, s && !l);
        };i(this.player.elements.buttons.play, "click", this.player.togglePlay, "play"), i(this.player.elements.buttons.restart, "click", this.player.restart, "restart"), i(this.player.elements.buttons.rewind, "click", this.player.rewind, "rewind"), i(this.player.elements.buttons.fastForward, "click", this.player.forward, "fastForward"), i(this.player.elements.buttons.mute, "click", function () {
          e.player.muted = !e.player.muted;
        }, "mute"), i(this.player.elements.buttons.captions, "click", this.player.toggleCaptions), i(this.player.elements.buttons.fullscreen, "click", function () {
          e.player.fullscreen.toggle();
        }, "fullscreen"), i(this.player.elements.buttons.pip, "click", function () {
          e.player.pip = "toggle";
        }, "pip"), i(this.player.elements.buttons.airplay, "click", this.player.airplay, "airplay"), i(this.player.elements.buttons.settings, "click", function (t) {
          m.toggleMenu.call(e.player, t);
        }), i(this.player.elements.settings.form, "click", function (t) {
          t.stopPropagation();var i = function i() {
            var t = "plyr-settings-" + e.player.id + "-home";m.showTab.call(e.player, t);
          };if (u.matches(t.target, e.player.config.selectors.inputs.language)) n(t, function () {
            e.player.currentTrack = Number(t.target.value), i();
          }, "language");else if (u.matches(t.target, e.player.config.selectors.inputs.quality)) n(t, function () {
            e.player.quality = t.target.value, i();
          }, "quality");else if (u.matches(t.target, e.player.config.selectors.inputs.speed)) n(t, function () {
            e.player.speed = parseFloat(t.target.value), i();
          }, "speed");else {
            var r = t.target;m.showTab.call(e.player, r.getAttribute("aria-controls"));
          }
        }), i(this.player.elements.inputs.seek, "mousedown mousemove", function (t) {
          var n = e.player.elements.progress.getBoundingClientRect(),
              i = 100 / n.width * (t.pageX - n.left);t.currentTarget.setAttribute("seek-value", i);
        }), i(this.player.elements.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", function (t) {
          var n = t.currentTarget,
              i = t.keyCode ? t.keyCode : t.which,
              r = t.type;if ("keydown" !== r && "keyup" !== r || 39 === i || 37 === i) {
            var o = n.hasAttribute("play-on-seeked"),
                s = ["mouseup", "touchend", "keyup"].includes(t.type);o && s ? (n.removeAttribute("play-on-seeked"), e.player.play()) : !s && e.player.playing && (n.setAttribute("play-on-seeked", ""), e.player.pause());
          }
        }), i(this.player.elements.inputs.seek, t, function (t) {
          var n = t.currentTarget,
              i = n.getAttribute("seek-value");u.is.empty(i) && (i = n.value), n.removeAttribute("seek-value"), e.player.currentTime = i / n.max * e.player.duration;
        }, "seek"), this.player.config.toggleInvert && !u.is.element(this.player.elements.display.duration) && i(this.player.elements.display.currentTime, "click", function () {
          0 !== e.player.currentTime && (e.player.config.invertTime = !e.player.config.invertTime, m.timeUpdate.call(e.player));
        }), i(this.player.elements.inputs.volume, t, function (t) {
          e.player.volume = t.target.value;
        }, "volume"), k.isWebkit && i(u.getElements.call(this.player, 'input[type="range"]'), "input", function (t) {
          m.updateRangeFill.call(e.player, t.target);
        }), i(this.player.elements.progress, "mouseenter mouseleave mousemove", function (t) {
          return m.updateSeekTooltip.call(e.player, t);
        }), i(this.player.elements.controls, "mouseenter mouseleave", function (t) {
          e.player.elements.controls.hover = !e.player.touch && "mouseenter" === t.type;
        }), i(this.player.elements.controls, "mousedown mouseup touchstart touchend touchcancel", function (t) {
          e.player.elements.controls.pressed = ["mousedown", "touchstart"].includes(t.type);
        }), i(this.player.elements.controls, "focusin focusout", function (t) {
          var n = e.player,
              i = n.config,
              r = n.elements,
              o = n.timers;if (u.toggleClass(r.controls, i.classNames.noTransition, "focusin" === t.type), x.toggleControls.call(e.player, "focusin" === t.type), "focusin" === t.type) {
            setTimeout(function () {
              u.toggleClass(r.controls, i.classNames.noTransition, !1);
            }, 0);var s = e.touch ? 3e3 : 4e3;clearTimeout(o.controls), o.controls = setTimeout(function () {
              return x.toggleControls.call(e.player, !1);
            }, s);
          }
        }), i(this.player.elements.inputs.volume, "wheel", function (t) {
          var n = t.webkitDirectionInvertedFromDevice,
              i = 0;(t.deltaY < 0 || t.deltaX > 0) && (n ? (e.player.decreaseVolume(.02), i = -1) : (e.player.increaseVolume(.02), i = 1)), (t.deltaY > 0 || t.deltaX < 0) && (n ? (e.player.increaseVolume(.02), i = 1) : (e.player.decreaseVolume(.02), i = -1)), (1 === i && e.player.media.volume < 1 || -1 === i && e.player.media.volume > 0) && t.preventDefault();
        }, "volume", !1);
      } }, { key: "clear", value: function value() {
        this.global(!1);
      } }]), e;
  }();function A(e) {
    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, u.dispatchEvent.call(this, this.media, e ? "play" : "pause"));
  }var D = { setup: function setup() {
      var e = this;u.toggleClass(this.elements.wrapper, this.config.classNames.embed, !0), D.setAspectRatio.call(this), u.is.object(window.Vimeo) ? D.ready.call(this) : u.loadScript(this.config.urls.vimeo.sdk).then(function () {
        D.ready.call(e);
      }).catch(function (t) {
        e.debug.warn("Vimeo API failed to load", t);
      });
    }, setAspectRatio: function setAspectRatio(e) {
      var t = u.is.string(e) ? e.split(":") : this.config.ratio.split(":"),
          n = 100 / t[0] * t[1];if (this.elements.wrapper.style.paddingBottom = n + "%", this.supported.ui) {
        var i = (240 - n) / 4.8;this.media.style.transform = "translateY(-" + i + "%)";
      }
    }, ready: function ready() {
      var e = this,
          t = this,
          n = { loop: t.config.loop.active, autoplay: t.autoplay, byline: !1, portrait: !1, title: !1, speed: !0, transparent: 0, gesture: "media", playsinline: !this.config.fullscreen.iosNative },
          i = u.buildUrlParams(n),
          r = t.media.getAttribute("src");u.is.empty(r) && (r = t.media.getAttribute(t.config.attributes.embed.id));var o = u.parseVimeoId(r),
          s = u.createElement("iframe"),
          a = u.format(t.config.urls.vimeo.iframe, o, i);s.setAttribute("src", a), s.setAttribute("allowfullscreen", ""), s.setAttribute("allowtransparency", ""), s.setAttribute("allow", "autoplay");var l = u.createElement("div", { class: t.config.classNames.embedContainer });l.appendChild(s), t.media = u.replaceElement(l, t.media), u.fetch(u.format(t.config.urls.vimeo.api, o), "json").then(function (e) {
        if (!u.is.empty(e)) {
          var n = new URL(e[0].thumbnail_large);n.pathname = n.pathname.split("_")[0] + ".jpg", x.setPoster.call(t, n.href);
        }
      }), t.embed = new window.Vimeo.Player(s, { autopause: t.config.autopause, muted: t.muted }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function () {
        return A.call(t, !0), t.embed.play();
      }, t.media.pause = function () {
        return A.call(t, !1), t.embed.pause();
      }, t.media.stop = function () {
        t.pause(), t.currentTime = 0;
      };var c = t.media.currentTime;Object.defineProperty(t.media, "currentTime", { get: function get() {
          return c;
        }, set: function set(e) {
          var n = t.embed,
              i = t.media,
              r = t.paused,
              o = t.volume,
              s = r && !n.hasPlayed;i.seeking = !0, u.dispatchEvent.call(t, i, "seeking"), Promise.resolve(s && n.setVolume(0)).then(function () {
            return n.setCurrentTime(e);
          }).then(function () {
            return s && n.pause();
          }).then(function () {
            return s && n.setVolume(o);
          }).catch(function () {});
        } });var d = t.config.speed.selected;Object.defineProperty(t.media, "playbackRate", { get: function get() {
          return d;
        }, set: function set(e) {
          t.embed.setPlaybackRate(e).then(function () {
            d = e, u.dispatchEvent.call(t, t.media, "ratechange");
          }).catch(function (e) {
            "Error" === e.name && m.setSpeedMenu.call(t, []);
          });
        } });var h = t.config.volume;Object.defineProperty(t.media, "volume", { get: function get() {
          return h;
        }, set: function set(e) {
          t.embed.setVolume(e).then(function () {
            h = e, u.dispatchEvent.call(t, t.media, "volumechange");
          });
        } });var f = t.config.muted;Object.defineProperty(t.media, "muted", { get: function get() {
          return f;
        }, set: function set(e) {
          var n = !!u.is.boolean(e) && e;t.embed.setVolume(n ? 0 : t.config.volume).then(function () {
            f = n, u.dispatchEvent.call(t, t.media, "volumechange");
          });
        } });var p = t.config.loop;Object.defineProperty(t.media, "loop", { get: function get() {
          return p;
        }, set: function set(e) {
          var n = u.is.boolean(e) ? e : t.config.loop.active;t.embed.setLoop(n).then(function () {
            p = n;
          });
        } });var v = void 0;t.embed.getVideoUrl().then(function (e) {
        v = e;
      }).catch(function (t) {
        e.debug.warn(t);
      }), Object.defineProperty(t.media, "currentSrc", { get: function get() {
          return v;
        } }), Object.defineProperty(t.media, "ended", { get: function get() {
          return t.currentTime === t.duration;
        } }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then(function (t) {
        var n = u.getAspectRatio(t[0], t[1]);D.setAspectRatio.call(e, n);
      }), t.embed.setAutopause(t.config.autopause).then(function (e) {
        t.config.autopause = e;
      }), t.embed.getVideoTitle().then(function (n) {
        t.config.title = n, x.setTitle.call(e);
      }), t.embed.getCurrentTime().then(function (e) {
        c = e, u.dispatchEvent.call(t, t.media, "timeupdate");
      }), t.embed.getDuration().then(function (e) {
        t.media.duration = e, u.dispatchEvent.call(t, t.media, "durationchange");
      }), t.embed.getTextTracks().then(function (e) {
        t.media.textTracks = e, g.setup.call(t);
      }), t.embed.on("cuechange", function (e) {
        var n = e.cues,
            i = (void 0 === n ? [] : n).map(function (e) {
          return u.stripHTML(e.text);
        });g.updateCues.call(t, i);
      }), t.embed.on("loaded", function () {
        (t.embed.getPaused().then(function (e) {
          A.call(t, !e), e || u.dispatchEvent.call(t, t.media, "playing");
        }), u.is.element(t.embed.element) && t.supported.ui) && t.embed.element.setAttribute("tabindex", -1);
      }), t.embed.on("play", function () {
        A.call(t, !0), u.dispatchEvent.call(t, t.media, "playing");
      }), t.embed.on("pause", function () {
        A.call(t, !1);
      }), t.embed.on("timeupdate", function (e) {
        t.media.seeking = !1, c = e.seconds, u.dispatchEvent.call(t, t.media, "timeupdate");
      }), t.embed.on("progress", function (e) {
        t.media.buffered = e.percent, u.dispatchEvent.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && u.dispatchEvent.call(t, t.media, "canplaythrough"), t.embed.getDuration().then(function (e) {
          e !== t.media.duration && (t.media.duration = e, u.dispatchEvent.call(t, t.media, "durationchange"));
        });
      }), t.embed.on("seeked", function () {
        t.media.seeking = !1, u.dispatchEvent.call(t, t.media, "seeked");
      }), t.embed.on("ended", function () {
        t.media.paused = !0, u.dispatchEvent.call(t, t.media, "ended");
      }), t.embed.on("error", function (e) {
        t.media.error = e, u.dispatchEvent.call(t, t.media, "error");
      }), setTimeout(function () {
        return x.build.call(t);
      }, 0);
    } };function I(e) {
    switch (e) {case "hd2160":
        return 2160;case 2160:
        return "hd2160";case "hd1440":
        return 1440;case 1440:
        return "hd1440";case "hd1080":
        return 1080;case 1080:
        return "hd1080";case "hd720":
        return 720;case 720:
        return "hd720";case "large":
        return 480;case 480:
        return "large";case "medium":
        return 360;case 360:
        return "medium";case "small":
        return 240;case 240:
        return "small";default:
        return "default";}
  }function N(e) {
    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, u.dispatchEvent.call(this, this.media, e ? "play" : "pause"));
  }var P = { setup: function setup() {
      var e = this;u.toggleClass(this.elements.wrapper, this.config.classNames.embed, !0), P.setAspectRatio.call(this), u.is.object(window.YT) && u.is.function(window.YT.Player) ? P.ready.call(this) : (u.loadScript(this.config.urls.youtube.sdk).catch(function (t) {
        e.debug.warn("YouTube API failed to load", t);
      }), window.onYouTubeReadyCallbacks = window.onYouTubeReadyCallbacks || [], window.onYouTubeReadyCallbacks.push(function () {
        P.ready.call(e);
      }), window.onYouTubeIframeAPIReady = function () {
        window.onYouTubeReadyCallbacks.forEach(function (e) {
          e();
        });
      });
    }, getTitle: function getTitle(e) {
      var t = this;if (u.is.function(this.embed.getVideoData)) {
        var n = this.embed.getVideoData().title;if (u.is.empty(n)) return this.config.title = n, void x.setTitle.call(this);
      }var i = this.config.keys.google;if (u.is.string(i) && !u.is.empty(i)) {
        var r = u.format(this.config.urls.youtube.api, e, i);u.fetch(r).then(function (e) {
          u.is.object(e) && (t.config.title = e.items[0].snippet.title, x.setTitle.call(t));
        }).catch(function () {});
      }
    }, setAspectRatio: function setAspectRatio() {
      var e = this.config.ratio.split(":");this.elements.wrapper.style.paddingBottom = 100 / e[0] * e[1] + "%";
    }, ready: function ready() {
      var e = this,
          t = e.media.getAttribute("id");if (u.is.empty(t) || !t.startsWith("youtube-")) {
        var n = e.media.getAttribute("src");u.is.empty(n) && (n = e.media.getAttribute(this.config.attributes.embed.id));var i = u.parseYouTubeId(n),
            r = u.generateId(e.provider),
            o = u.createElement("div", { id: r });e.media = u.replaceElement(o, e.media);var s = function s(e) {
          return "https://img.youtube.com/vi/" + i + "/" + e + "default.jpg";
        };u.loadImage(s("maxres"), 121).catch(function () {
          return u.loadImage(s("sd"), 121);
        }).catch(function () {
          return u.loadImage(s("hq"));
        }).then(function (t) {
          return x.setPoster.call(e, t.src);
        }).then(function (t) {
          t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover");
        }), e.embed = new window.YT.Player(r, { videoId: i, playerVars: { autoplay: e.config.autoplay ? 1 : 0, controls: e.supported.ui ? 0 : 1, rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1, disablekb: 1, playsinline: 1, widget_referrer: window ? window.location.href : null, cc_load_policy: e.captions.active ? 1 : 0, cc_lang_pref: e.config.captions.language }, events: { onError: function onError(t) {
              if (!u.is.object(e.media.error)) {
                var n = { code: t.data };switch (t.data) {case 2:
                    n.message = "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.";break;case 5:
                    n.message = "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.";break;case 100:
                    n.message = "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.";break;case 101:case 150:
                    n.message = "The owner of the requested video does not allow it to be played in embedded players.";break;default:
                    n.message = "An unknown error occured";}e.media.error = n, u.dispatchEvent.call(e, e.media, "error");
              }
            }, onPlaybackQualityChange: function onPlaybackQualityChange() {
              u.dispatchEvent.call(e, e.media, "qualitychange", !1, { quality: e.media.quality });
            }, onPlaybackRateChange: function onPlaybackRateChange(t) {
              var n = t.target;e.media.playbackRate = n.getPlaybackRate(), u.dispatchEvent.call(e, e.media, "ratechange");
            }, onReady: function onReady(t) {
              var n = t.target;P.getTitle.call(e, i), e.media.play = function () {
                N.call(e, !0), n.playVideo();
              }, e.media.pause = function () {
                N.call(e, !1), n.pauseVideo();
              }, e.media.stop = function () {
                n.stopVideo();
              }, e.media.duration = n.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", { get: function get() {
                  return Number(n.getCurrentTime());
                }, set: function set(t) {
                  e.paused && e.embed.mute(), e.media.seeking = !0, u.dispatchEvent.call(e, e.media, "seeking"), n.seekTo(t);
                } }), Object.defineProperty(e.media, "playbackRate", { get: function get() {
                  return n.getPlaybackRate();
                }, set: function set(e) {
                  n.setPlaybackRate(e);
                } }), Object.defineProperty(e.media, "quality", { get: function get() {
                  return I(n.getPlaybackQuality());
                }, set: function set(t) {
                  var i = t;n.setPlaybackQuality(I(i)), u.dispatchEvent.call(e, e.media, "qualityrequested", !1, { quality: i });
                } });var r = e.config.volume;Object.defineProperty(e.media, "volume", { get: function get() {
                  return r;
                }, set: function set(t) {
                  r = t, n.setVolume(100 * r), u.dispatchEvent.call(e, e.media, "volumechange");
                } });var o = e.config.muted;Object.defineProperty(e.media, "muted", { get: function get() {
                  return o;
                }, set: function set(t) {
                  var i = u.is.boolean(t) ? t : o;o = i, n[i ? "mute" : "unMute"](), u.dispatchEvent.call(e, e.media, "volumechange");
                } }), Object.defineProperty(e.media, "currentSrc", { get: function get() {
                  return n.getVideoUrl();
                } }), Object.defineProperty(e.media, "ended", { get: function get() {
                  return e.currentTime === e.duration;
                } }), e.options.speed = n.getAvailablePlaybackRates(), e.supported.ui && e.media.setAttribute("tabindex", -1), u.dispatchEvent.call(e, e.media, "timeupdate"), u.dispatchEvent.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(function () {
                e.media.buffered = n.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && u.dispatchEvent.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), u.dispatchEvent.call(e, e.media, "canplaythrough"));
              }, 200), setTimeout(function () {
                return x.build.call(e);
              }, 50);
            }, onStateChange: function onStateChange(t) {
              var n,
                  i = t.target;switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(t.data) && (e.media.seeking = !1, u.dispatchEvent.call(e, e.media, "seeked")), t.data) {case -1:
                  u.dispatchEvent.call(e, e.media, "timeupdate"), e.media.buffered = i.getVideoLoadedFraction(), u.dispatchEvent.call(e, e.media, "progress");break;case 0:
                  N.call(e, !1), e.media.loop ? (i.stopVideo(), i.playVideo()) : u.dispatchEvent.call(e, e.media, "ended");break;case 1:
                  e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (N.call(e, !0), u.dispatchEvent.call(e, e.media, "playing"), e.timers.playing = setInterval(function () {
                    u.dispatchEvent.call(e, e.media, "timeupdate");
                  }, 50), e.media.duration !== i.getDuration() && (e.media.duration = i.getDuration(), u.dispatchEvent.call(e, e.media, "durationchange")), m.setQualityMenu.call(e, (n = i.getAvailableQualityLevels(), u.is.empty(n) ? n : u.dedupe(n.map(function (e) {
                    return I(e);
                  })))));break;case 2:
                  e.muted || e.embed.unMute(), N.call(e, !1);}u.dispatchEvent.call(e, e.elements.container, "statechange", !1, { code: t.data });
            } } });
      }
    } },
      L = { setup: function setup() {
      if (this.media) {
        if (u.toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), u.toggleClass(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && u.toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = u.createElement("div", { class: this.config.classNames.video }), u.wrap(this.media, this.elements.wrapper), this.elements.poster = u.createElement("div", { class: this.config.classNames.poster }), this.elements.wrapper.appendChild(this.elements.poster)), this.isEmbed) switch (this.provider) {case "youtube":
            P.setup.call(this);break;case "vimeo":
            D.setup.call(this);} else this.isHTML5 && h.extend.call(this);
      } else this.debug.warn("No media element found!");
    } },
      O = function () {
    function e(t) {
      var n = this;i(this, e), this.player = t, this.publisherId = t.config.ads.publisherId, this.playing = !1, this.initialized = !1, this.elements = { container: null, displayContainer: null }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function (e, t) {
        n.on("loaded", e), n.on("error", t);
      }), this.load();
    }return r(e, [{ key: "load", value: function value() {
        var e = this;this.enabled && (u.is.object(window.google) && u.is.object(window.google.ima) ? this.ready() : u.loadScript(this.player.config.urls.googleIMA.sdk).then(function () {
          e.ready();
        }).catch(function () {
          e.trigger("error", new Error("Google IMA SDK failed to load"));
        }));
      } }, { key: "ready", value: function value() {
        var e = this;this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(function () {
          e.clearSafetyTimer("onAdsManagerLoaded()");
        }), this.listeners(), this.setupIMA();
      } }, { key: "setupIMA", value: function value() {
        this.elements.container = u.createElement("div", { class: this.player.config.classNames.ads }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container), this.requestAds();
      } }, { key: "requestAds", value: function value() {
        var e = this,
            t = this.player.elements.container;try {
          this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (t) {
            return e.onAdsManagerLoaded(t);
          }, !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (t) {
            return e.onAdError(t);
          }, !1);var n = new google.ima.AdsRequest();n.adTagUrl = this.tagUrl, n.linearAdSlotWidth = t.offsetWidth, n.linearAdSlotHeight = t.offsetHeight, n.nonLinearAdSlotWidth = t.offsetWidth, n.nonLinearAdSlotHeight = t.offsetHeight, n.forceNonLinearFullSlot = !1, n.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(n);
        } catch (e) {
          this.onAdError(e);
        }
      } }, { key: "pollCountdown", value: function value() {
        var e = this;if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0])) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");this.countdownTimer = setInterval(function () {
          var t = u.formatTime(Math.max(e.manager.getRemainingTime(), 0)),
              n = f("advertisement", e.player.config) + " - " + t;e.elements.container.setAttribute("data-badge-text", n);
        }, 100);
      } }, { key: "onAdsManagerLoaded", value: function value(e) {
        var t = this,
            n = new google.ima.AdsRenderingSettings();n.restoreCustomPlaybackStateOnAdBreakComplete = !0, n.enablePreloading = !0, this.manager = e.getAdsManager(this.player, n), this.cuePoints = this.manager.getCuePoints(), u.is.empty(this.cuePoints) || this.cuePoints.forEach(function (e) {
          if (0 !== e && -1 !== e && e < t.player.duration) {
            var n = t.player.elements.progress;if (u.is.element(n)) {
              var i = 100 / t.player.duration * e,
                  r = u.createElement("span", { class: t.player.config.classNames.cues });r.style.left = i.toString() + "%", n.appendChild(r);
            }
          }
        }), this.manager.setVolume(this.player.volume), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
          return t.onAdError(e);
        }), Object.keys(google.ima.AdEvent.Type).forEach(function (e) {
          t.manager.addEventListener(google.ima.AdEvent.Type[e], function (e) {
            return t.onAdEvent(e);
          });
        }), this.trigger("loaded");
      } }, { key: "onAdEvent", value: function value(e) {
        var t = this,
            n = this.player.elements.container,
            i = e.getAd(),
            r = function r(e) {
          var n = "ads" + e.replace(/_/g, "").toLowerCase();u.dispatchEvent.call(t.player, t.player.media, n);
        };switch (e.type) {case google.ima.AdEvent.Type.LOADED:
            this.trigger("loaded"), r(e.type), this.pollCountdown(!0), i.isLinear() || (i.width = n.offsetWidth, i.height = n.offsetHeight);break;case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
            r(e.type), this.loadAds();break;case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
            r(e.type), this.pauseContent();break;case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
            r(e.type), this.pollCountdown(), this.resumeContent();break;case google.ima.AdEvent.Type.STARTED:case google.ima.AdEvent.Type.MIDPOINT:case google.ima.AdEvent.Type.COMPLETE:case google.ima.AdEvent.Type.IMPRESSION:case google.ima.AdEvent.Type.CLICK:
            r(e.type);}
      } }, { key: "onAdError", value: function value(e) {
        this.cancel(), this.player.debug.warn("Ads error", e);
      } }, { key: "listeners", value: function value() {
        var e = this,
            t = this.player.elements.container,
            n = void 0;this.player.on("ended", function () {
          e.loader.contentComplete();
        }), this.player.on("seeking", function () {
          return n = e.player.currentTime;
        }), this.player.on("seeked", function () {
          var t = e.player.currentTime;u.is.empty(e.cuePoints) || e.cuePoints.forEach(function (i, r) {
            n < i && i < t && (e.manager.discardAdBreak(), e.cuePoints.splice(r, 1));
          });
        }), window.addEventListener("resize", function () {
          e.manager && e.manager.resize(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL);
        });
      } }, { key: "play", value: function value() {
        var e = this,
            t = this.player.elements.container;this.managerPromise || this.resumeContent(), this.managerPromise.then(function () {
          e.elements.displayContainer.initialize();try {
            e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), e.manager.start()), e.initialized = !0;
          } catch (t) {
            e.onAdError(t);
          }
        }).catch(function () {});
      } }, { key: "resumeContent", value: function value() {
        this.elements.container.style.zIndex = "", this.playing = !1, this.player.currentTime < this.player.duration && this.player.play();
      } }, { key: "pauseContent", value: function value() {
        this.elements.container.style.zIndex = 3, this.playing = !0, this.player.pause();
      } }, { key: "cancel", value: function value() {
        this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds();
      } }, { key: "loadAds", value: function value() {
        var e = this;this.managerPromise.then(function () {
          e.manager && e.manager.destroy(), e.managerPromise = new Promise(function (t) {
            e.on("loaded", t), e.player.debug.log(e.manager);
          }), e.requestAds();
        }).catch(function () {});
      } }, { key: "trigger", value: function value(e) {
        for (var t = this, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) {
          i[r - 1] = arguments[r];
        }var o = this.events[e];u.is.array(o) && o.forEach(function (e) {
          u.is.function(e) && e.apply(t, i);
        });
      } }, { key: "on", value: function value(e, t) {
        return u.is.array(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this;
      } }, { key: "startSafetyTimer", value: function value(e, t) {
        var n = this;this.player.debug.log("Safety timer invoked from: " + t), this.safetyTimer = setTimeout(function () {
          n.cancel(), n.clearSafetyTimer("startSafetyTimer()");
        }, e);
      } }, { key: "clearSafetyTimer", value: function value(e) {
        u.is.nullOrUndefined(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: " + e), clearTimeout(this.safetyTimer), this.safetyTimer = null);
      } }, { key: "enabled", get: function get() {
        return this.player.isVideo && this.player.config.ads.enabled && !u.is.empty(this.publisherId);
      } }, { key: "tagUrl", get: function get() {
        var e = { AV_PUBLISHERID: "58c25bb0073ef448b1087ad6", AV_CHANNELID: "5a0458dc28a06145e4519d21", AV_URL: location.hostname, cb: Date.now(), AV_WIDTH: 640, AV_HEIGHT: 480, AV_CDIM2: this.publisherId };return "https://go.aniview.com/api/adserver6/vast/?" + u.buildUrlParams(e);
      } }]), e;
  }(),
      j = { insertElements: function insertElements(e, t) {
      var n = this;u.is.string(t) ? u.insertElement(e, this.media, { src: t }) : u.is.array(t) && t.forEach(function (t) {
        u.insertElement(e, n.media, t);
      });
    }, change: function change(e) {
      var t = this;u.is.object(e) && "sources" in e && e.sources.length ? (h.cancelRequests.call(this), this.destroy.call(this, function () {
        switch (t.options.quality = [], u.removeElement(t.media), t.media = null, u.is.element(t.elements.container) && t.elements.container.removeAttribute("class"), t.type = e.type, t.provider = u.is.empty(e.sources[0].provider) ? l.html5 : e.sources[0].provider, t.supported = d.check(t.type, t.provider, t.config.playsinline), t.provider + ":" + t.type) {case "html5:video":
            t.media = u.createElement("video");break;case "html5:audio":
            t.media = u.createElement("audio");break;case "youtube:video":case "vimeo:video":
            t.media = u.createElement("div", { src: e.sources[0].src });}t.elements.container.appendChild(t.media), u.is.boolean(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), u.is.empty(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), x.addStyleHook.call(t), t.isHTML5 && j.insertElements.call(t, "source", e.sources), t.config.title = e.title, L.setup.call(t), t.isHTML5 && ("tracks" in e && j.insertElements.call(t, "track", e.tracks), t.media.load()), (t.isHTML5 || t.isEmbed && !t.supported.ui) && x.build.call(t), t.fullscreen.update();
      }, !0)) : this.debug.warn("Invalid source format");
    } },
      M = function () {
    function e(t, n) {
      var r = this;if (i(this, e), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = d.touch, this.media = t, u.is.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || u.is.nodeList(this.media) || u.is.array(this.media)) && (this.media = this.media[0]), this.config = u.extend({}, b, e.defaults, n || {}, function () {
        try {
          return JSON.parse(r.media.getAttribute("data-plyr-config"));
        } catch (e) {
          return {};
        }
      }()), this.elements = { container: null, buttons: {}, display: {}, progress: {}, inputs: {}, settings: { menu: null, panes: {}, tabs: {} }, captions: null }, this.captions = { active: null, currentTrack: -1, meta: new WeakMap() }, this.fullscreen = { active: !1 }, this.options = { speed: [], quality: [] }, this.debug = new y(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", d), !u.is.nullOrUndefined(this.media) && u.is.element(this.media)) {
        if (this.media.plyr) this.debug.warn("Target already setup");else if (this.config.enabled) {
          if (d.check().api) {
            var o = this.media.cloneNode(!0);o.autoplay = !1, this.elements.original = o;var s = this.media.tagName.toLowerCase(),
                h = null,
                f = null,
                p = null;switch (s) {case "div":
                if (h = this.media.querySelector("iframe"), u.is.element(h)) {
                  if (f = h.getAttribute("src"), this.provider = u.getProviderByUrl(f), this.elements.container = this.media, this.media = h, this.elements.container.className = "", p = u.getUrlParams(f), !u.is.empty(p)) {
                    var m = ["1", "true"];m.includes(p.autoplay) && (this.config.autoplay = !0), m.includes(p.loop) && (this.config.loop.active = !0), this.isYouTube ? this.config.playsinline = m.includes(p.playsinline) : this.config.playsinline = !0;
                  }
                } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);if (u.is.empty(this.provider) || !Object.keys(l).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");this.type = c.video;break;case "video":case "audio":
                this.type = s, this.provider = l.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), this.media.hasAttribute("playsinline") && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);break;default:
                return void this.debug.error("Setup failed: unsupported type");}this.supported = d.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.listeners = new S(this), this.storage = new a(this), this.media.plyr = this, u.is.element(this.elements.container) || (this.elements.container = u.createElement("div"), u.wrap(this.media, this.elements.container)), this.elements.container.setAttribute("tabindex", 0), x.addStyleHook.call(this), L.setup.call(this), this.config.debug && u.on(this.elements.container, this.config.events.join(" "), function (e) {
              r.debug.log("event: " + e.type);
            }), (this.isHTML5 || this.isEmbed && !this.supported.ui) && x.build.call(this), this.listeners.container(), this.listeners.global(), this.fullscreen = new _(this), this.ads = new O(this), this.config.autoplay && this.play()) : this.debug.error("Setup failed: no support");
          } else this.debug.error("Setup failed: no support");
        } else this.debug.error("Setup failed: disabled by config");
      } else this.debug.error("Setup failed: no suitable element passed");
    }return r(e, [{ key: "play", value: function value() {
        return u.is.function(this.media.play) ? this.media.play() : null;
      } }, { key: "pause", value: function value() {
        this.playing && u.is.function(this.media.pause) && this.media.pause();
      } }, { key: "togglePlay", value: function value(e) {
        (u.is.boolean(e) ? e : !this.playing) ? this.play() : this.pause();
      } }, { key: "stop", value: function value() {
        this.isHTML5 ? (this.pause(), this.restart()) : u.is.function(this.media.stop) && this.media.stop();
      } }, { key: "restart", value: function value() {
        this.currentTime = 0;
      } }, { key: "rewind", value: function value(e) {
        this.currentTime = this.currentTime - (u.is.number(e) ? e : this.config.seekTime);
      } }, { key: "forward", value: function value(e) {
        this.currentTime = this.currentTime + (u.is.number(e) ? e : this.config.seekTime);
      } }, { key: "increaseVolume", value: function value(e) {
        var t = this.media.muted ? 0 : this.volume;this.volume = t + (u.is.number(e) ? e : 1);
      } }, { key: "decreaseVolume", value: function value(e) {
        var t = this.media.muted ? 0 : this.volume;this.volume = t - (u.is.number(e) ? e : 1);
      } }, { key: "toggleCaptions", value: function value(e) {
        if (this.supported.ui) {
          var t = u.is.boolean(e) ? e : !this.elements.container.classList.contains(this.config.classNames.captions.active);u.toggleState(this.elements.buttons.captions, t), u.toggleClass(this.elements.container, this.config.classNames.captions.active, t), t !== this.captions.active && (this.captions.active = t, u.dispatchEvent.call(this, this.media, this.captions.active ? "captionsenabled" : "captionsdisabled"));
        }
      } }, { key: "airplay", value: function value() {
        d.airplay && this.media.webkitShowPlaybackTargetPicker();
      } }, { key: "toggleControls", value: function value(e) {
        if (this.supported.ui && !this.isAudio) {
          var t = u.hasClass(this.elements.container, this.config.classNames.hideControls),
              n = void 0 === e ? void 0 : !e,
              i = u.toggleClass(this.elements.container, this.config.classNames.hideControls, n);if (i && this.config.controls.includes("settings") && !u.is.empty(this.config.settings) && m.toggleMenu.call(this, !1), i !== t) {
            var r = i ? "controlshidden" : "controlsshown";u.dispatchEvent.call(this, this.media, r);
          }return !i;
        }return !1;
      } }, { key: "on", value: function value(e, t) {
        u.on(this.elements.container, e, t);
      } }, { key: "off", value: function value(e, t) {
        u.off(this.elements.container, e, t);
      } }, { key: "destroy", value: function value(e) {
        var t = this,
            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];if (this.ready) {
          var i = function i() {
            document.body.style.overflow = "", t.embed = null, n ? (Object.keys(t.elements).length && (u.removeElement(t.elements.buttons.play), u.removeElement(t.elements.captions), u.removeElement(t.elements.controls), u.removeElement(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), u.is.function(e) && e()) : (t.listeners.clear(), u.replaceElement(t.elements.original, t.elements.container), u.dispatchEvent.call(t, t.elements.original, "destroyed", !0), u.is.function(e) && e.call(t.elements.original), t.ready = !1, setTimeout(function () {
              t.elements = null, t.media = null;
            }, 200));
          };switch (this.stop(), this.provider + ":" + this.type) {case "html5:video":case "html5:audio":
              clearTimeout(this.timers.loading), x.toggleNativeControls.call(this, !0), i();break;case "youtube:video":
              clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && u.is.function(this.embed.destroy) && this.embed.destroy(), i();break;case "vimeo:video":
              null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200);}
        }
      } }, { key: "supports", value: function value(e) {
        return d.mime.call(this, e);
      } }, { key: "isHTML5", get: function get() {
        return Boolean(this.provider === l.html5);
      } }, { key: "isEmbed", get: function get() {
        return Boolean(this.isYouTube || this.isVimeo);
      } }, { key: "isYouTube", get: function get() {
        return Boolean(this.provider === l.youtube);
      } }, { key: "isVimeo", get: function get() {
        return Boolean(this.provider === l.vimeo);
      } }, { key: "isVideo", get: function get() {
        return Boolean(this.type === c.video);
      } }, { key: "isAudio", get: function get() {
        return Boolean(this.type === c.audio);
      } }, { key: "playing", get: function get() {
        return Boolean(this.ready && !this.paused && !this.ended);
      } }, { key: "paused", get: function get() {
        return Boolean(this.media.paused);
      } }, { key: "stopped", get: function get() {
        return Boolean(this.paused && 0 === this.currentTime);
      } }, { key: "ended", get: function get() {
        return Boolean(this.media.ended);
      } }, { key: "currentTime", set: function set(e) {
        if (this.duration) {
          var t = u.is.number(e) && e > 0;this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to " + this.currentTime + " seconds");
        }
      }, get: function get() {
        return Number(this.media.currentTime);
      } }, { key: "buffered", get: function get() {
        var e = this.media.buffered;return u.is.number(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0;
      } }, { key: "seeking", get: function get() {
        return Boolean(this.media.seeking);
      } }, { key: "duration", get: function get() {
        var e = parseFloat(this.config.duration),
            t = (this.media || {}).duration || 0;return e || t;
      } }, { key: "volume", set: function set(e) {
        var t = e;u.is.string(t) && (t = Number(t)), u.is.number(t) || (t = this.storage.get("volume")), u.is.number(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !u.is.empty(e) && this.muted && t > 0 && (this.muted = !1);
      }, get: function get() {
        return Number(this.media.volume);
      } }, { key: "muted", set: function set(e) {
        var t = e;u.is.boolean(t) || (t = this.storage.get("muted")), u.is.boolean(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t;
      }, get: function get() {
        return Boolean(this.media.muted);
      } }, { key: "hasAudio", get: function get() {
        return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
      } }, { key: "speed", set: function set(e) {
        var t = null;u.is.number(e) && (t = e), u.is.number(t) || (t = this.storage.get("speed")), u.is.number(t) || (t = this.config.speed.selected), t < .1 && (t = .1), t > 2 && (t = 2), this.config.speed.options.includes(t) ? (this.config.speed.selected = t, this.media.playbackRate = t) : this.debug.warn("Unsupported speed (" + t + ")");
      }, get: function get() {
        return Number(this.media.playbackRate);
      } }, { key: "quality", set: function set(e) {
        var t = null;if (u.is.empty(e) || (t = Number(e)), u.is.number(t) || (t = this.storage.get("quality")), u.is.number(t) || (t = this.config.quality.selected), u.is.number(t) || (t = this.config.quality.default), this.options.quality.length) {
          if (!this.options.quality.includes(t)) {
            var n = u.closest(this.options.quality, t);this.debug.warn("Unsupported quality option: " + t + ", using " + n + " instead"), t = n;
          }this.config.quality.selected = t, this.media.quality = t;
        }
      }, get: function get() {
        return this.media.quality;
      } }, { key: "loop", set: function set(e) {
        var t = u.is.boolean(e) ? e : this.config.loop.active;this.config.loop.active = t, this.media.loop = t;
      }, get: function get() {
        return Boolean(this.media.loop);
      } }, { key: "source", set: function set(e) {
        j.change.call(this, e);
      }, get: function get() {
        return this.media.currentSrc;
      } }, { key: "poster", set: function set(e) {
        this.isVideo ? x.setPoster.call(this, e) : this.debug.warn("Poster can only be set for video");
      }, get: function get() {
        return this.isVideo ? this.media.getAttribute("poster") : null;
      } }, { key: "autoplay", set: function set(e) {
        var t = u.is.boolean(e) ? e : this.config.autoplay;this.config.autoplay = t;
      }, get: function get() {
        return Boolean(this.config.autoplay);
      } }, { key: "currentTrack", set: function set(e) {
        g.set.call(this, e);
      }, get: function get() {
        var e = this.captions,
            t = e.active,
            n = e.currentTrack;return t ? n : -1;
      } }, { key: "language", set: function set(e) {
        g.setLanguage.call(this, e);
      }, get: function get() {
        return (g.getCurrentTrack.call(this) || {}).language;
      } }, { key: "pip", set: function set(e) {
        var t = "picture-in-picture",
            n = "inline";if (d.pip) {
          var i = u.is.boolean(e) ? e : this.pip === n;this.media.webkitSetPresentationMode(i ? t : n);
        }
      }, get: function get() {
        return d.pip ? this.media.webkitPresentationMode : null;
      } }], [{ key: "supported", value: function value(e, t, n) {
        return d.check(e, t, n);
      } }, { key: "loadSprite", value: function value(e, t) {
        return u.loadSprite(e, t);
      } }, { key: "setup", value: function value(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = null;return u.is.string(t) ? i = Array.from(document.querySelectorAll(t)) : u.is.nodeList(t) ? i = Array.from(t) : u.is.array(t) && (i = t.filter(u.is.element)), u.is.empty(i) ? null : i.map(function (t) {
          return new e(t, n);
        });
      } }]), e;
  }();return M.defaults = u.cloneDeep(b), M;
}), function (e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery);
}(function ($) {
  "use strict";
  var ArrayProto = Array.prototype,
      ObjProto = Object.prototype,
      push = ArrayProto.push,
      splice = ArrayProto.splice,
      hasOwnProperty = ObjProto.hasOwnProperty,
      namespace = "Scrollax",
      lownamespace = namespace.toLowerCase(),
      numberRegExp = /[-+]?\d+(\.\d+)?/g,
      transforms = ["translateX", "translateY", "rotate", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "scaleX", "scaleY"],
      $win = $(window),
      $doc = $(document.body),
      transform,
      gpuAcceleration,
      _position,
      bind,
      unbind,
      Scrollax = function Scrollax(e, t, n) {
    var i = this,
        r = e && $(e).eq(0) || $win,
        o = Scrollax.instances,
        s = null;if (e = r[0], $.each(o, function (t, n) {
      t && t.frame === e && (s = !0);
    }), e && !s) {
      var a,
          l,
          c,
          u,
          d,
          h,
          f,
          p,
          m,
          g,
          v,
          y,
          b,
          w,
          E,
          C,
          _,
          T,
          x,
          k,
          S,
          A,
          D = $.extend({}, Scrollax.defaults, t),
          I = [],
          N = null,
          P = D.parentSelector || "[data-" + lownamespace + "-parent]",
          L = D.elementsSelector || "[data-" + lownamespace + "]",
          O = {},
          j = [],
          M = isWindow(e);i.frame = e, i.options = D, i.parents = I, i.initialized = !1, i.reload = q;var H = function H(e, t) {
        var n = $(t),
            i = getInlineOptions($(t)),
            r = {};r.element = t, r.options = i, r.parallaxElements = [], n.find(L).each(function (e, t) {
          var n = getInlineOptions($(t));n.element = t, push.call(r.parallaxElements, n);
        }), push.call(I, r);
      };i.scroll = B, i.getIndex = function (e) {
        return void 0 !== e ? is_numeric(e) ? e >= 0 && e < I.length ? e : -1 : N.index(e) : -1;
      }, i.one = function (e, t) {
        return i.on(e, function n() {
          t.apply(i, arguments), i.off(e, n);
        }), i;
      }, i.on = function (e, t) {
        if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) for (var n in e) {
          hasOwnProperty.call(e, n) && i.on(n, e[n]);
        } else if ("function" == typeof t) for (var r = e.split(" "), o = 0, s = r.length; o < s; o++) {
          O[r[o]] = O[r[o]] || [], -1 === U(r[o], t) && push.call(O[r[o]], t);
        } else if ("array" == typeof t) for (var a = 0, l = t.length; a < l; a++) {
          i.on(e, t[a]);
        }return i;
      }, i.off = function (e, t) {
        if (t instanceof Array) for (var n = 0, r = t.length; n < r; n++) {
          i.off(e, t[n]);
        } else for (var o = e.split(" "), s = 0, a = o.length; s < a; s++) {
          if (O[o[s]] = O[o[s]] || [], void 0 === t) O[o[s]].length = 0;else {
            var l = U(o[s], t);-1 !== l && splice.call(O[o[s]], l, 1);
          }
        }return i;
      }, i.set = function (e, t) {
        return $.isPlainObject(e) ? $.extend(D, e) : hasOwnProperty.call(D, e) && (D[e] = t), q(), i;
      }, i.destroy = function () {
        return unbind(window, "resize", F), unbind(e, "scroll", B), $.each(o, function (t, n) {
          t && t.frame === e && splice.call(Scrollax.instances, n, 1);
        }), I.length = 0, i.initialized = !1, W("destroy"), i;
      }, i.init = function () {
        if (!i.initialized) return i.on(n), q(), bind(window, "resize", F), bind(e, "scroll", B), push.call(Scrollax.instances, i), i.initialized = !0, W("initialized"), i;
      };
    } else warn(s ? namespace + ": Scrollax has been initialized for this frame!" : namespace + ": Frame is not available!");function q() {
      return N = M ? $doc.find(P) : r.find(P), I.length = 0, p = !!D.horizontal, N.each(H), B(), D.performanceTrick && (u = M ? $doc : r), W("load"), i;
    }function F() {
      a && (a = clearTimeout(a)), a = setTimeout(function () {
        i.reload();
      });
    }function B() {
      var t = I.length;if (D.performanceTrick && u && (clearTimeout(d), h || (u.addClass("scrollax-performance"), h = !0), d = setTimeout(function () {
        u.removeClass("scrollax-performance"), h = !1;
      }, 100)), t) {
        f = getOffset(e);for (var n = 0; n < t; n++) {
          v = I[n], (g = _position(v.element, e))[p ? "right" : "bottom"] < 0 || g[p ? "left" : "top"] > f[p ? "width" : "height"] || (y = v.options, m = y.offset || D.offset || 0, w = g[p ? "right" : "bottom"], E = g[p ? "width" : "height"], (b = (E - w + m) / E) < 0 && (w = g[p ? "left" : "top"], E = f[p ? "width" : "height"], b = (E - w + m) / E - 1), b > 1 || b < -1 || R(v, b));
        }W("scroll", f);
      }
    }function R(e, t) {
      var n = (C = e.parallaxElements).length;if (n) for (var i = 0; i < n; i++) {
        _ = C[i], z(_.element, _, t);
      }
    }function z(e, t, n) {
      for (x in T = t.properties || (p ? { translateX: "100%" } : { translateY: "100%" }), S = "", T) {
        if ("number" == typeof (k = T[x])) k *= n;else if ("string" == typeof k) for (A = k.match(numberRegExp), k = k, l = 0, c = A.length; l < c; l++) {
          k = k.replace(A[l], parseFloat(A[l] * n));
        }-1 !== $.inArray(x, transforms) ? S += x + "(" + k + ")" : e.style[x] = "opacity" === x ? within(n < 0 ? 1 + k : 1 - k, 0, 1) : k;
      }S && (e.style[transform] = gpuAcceleration + S);
    }function W(e, t) {
      if (O[e]) {
        for (c = O[e].length, j.length = 0, l = 0; l < c; l++) {
          push.call(j, O[e][l]);
        }for (l = 0; l < c; l++) {
          j[l].call(i, e, t);
        }
      }
    }function U(e, t) {
      for (var n = 0, i = O[e].length; n < i; n++) {
        if (O[e][n] === t) return n;
      }return -1;
    }
  };function warn(e) {
    if (!console || !console.warn) throw namespace + ": " + e;console.warn(namespace + ": " + e);
  }function getOffset(e) {
    var t = !!("pageYOffset" in e);return { width: t ? window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth : e.offsetWidth, height: t ? window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight : e.offsetHeight, left: e[t ? "pageXOffset" : "scrollLeft"], top: e[t ? "pageYOffset" : "scrollTop"] };
  }function is_numeric(e) {
    return ("number" == typeof e || "string" == typeof e) && "" !== e && !isNaN(e);
  }function within(e, t, n) {
    return e < t ? t : e > n ? n : e;
  }function getInlineOptions($element) {
    var data = $element.data(lownamespace.toLowerCase());return data && eval("({" + data + "})") || {};
  }function isWindow(e) {
    var t, n;return !!(e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "object" == _typeof(e.window) && e.window == e && e.setTimeout && e.alert && (t = e.document) && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (n = t.defaultView || t.parentWindow) && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n == e);
  }Scrollax.instances = [], function () {
    var e, t, n, i, r, o, s, a;_position = function position(l, c) {
      return t = l.ownerDocument || l, n = t.documentElement, i = isWindow(c) ? c : t.defaultView || window, c = c && c !== t ? c : n, r = (i.pageYOffset || n.scrollTop) - n.clientTop, o = (i.pageXOffset || n.scrollLeft) - n.clientLeft, s = { top: 0, left: 0 }, l && l.getBoundingClientRect ? ((s = function (t, n) {
        for (e in n) {
          t[e] = n[e];
        }return t;
      }({}, l.getBoundingClientRect())).width = s.right - s.left, s.height = s.bottom - s.top, c === i ? s : (s.top += r, s.left += o, s.right += o, s.bottom += r, c === n ? s : (a = _position(c), s.left -= a.left, s.right -= a.left, s.top -= a.top, s.bottom -= a.top, s))) : null;
    };
  }(), function () {
    function e() {
      this.returnValue = !1;
    }function t() {
      this.cancelBubble = !0;
    }bind = window.addEventListener ? function (e, t, n, i) {
      return e.addEventListener(t, n, i || !1), n;
    } : function (n, i, r) {
      var o = i + r;return n[o] = n[o] || function () {
        var i = window.event;i.target = i.srcElement, i.preventDefault = e, i.stopPropagation = t, r.call(n, i);
      }, n.attachEvent("on" + i, n[o]), r;
    }, unbind = window.removeEventListener ? function (e, t, n, i) {
      return e.removeEventListener(t, n, i || !1), n;
    } : function (e, t, n) {
      var i = t + n;e.detachEvent("on" + t, e[i]);try {
        delete e[i];
      } catch (t) {
        e[i] = void 0;
      }return n;
    };
  }(), function () {
    var e = ["", "webkit", "moz", "ms", "o"],
        t = document.createElement("div");function n(n) {
      for (var i = 0, r = e.length; i < r; i++) {
        var o = e[i] ? e[i] + n.charAt(0).toUpperCase() + n.slice(1) : n;if (null != t.style[o]) return o;
      }
    }transform = n("transform"), gpuAcceleration = n("perspective") ? "translateZ(0) " : "";
  }(), Scrollax.defaults = { horizontal: !1, offset: 0, parentSelector: null, elementsSelector: null, performanceTrick: !1 }, window.Scrollax = Scrollax, $.fn.Scrollax = function (e, t) {
    var n, i;return $.isPlainObject(e) || ("string" != typeof e && !1 !== e || (n = !1 === e ? "destroy" : e, i = slice.call(arguments, 1)), e = {}), this.each(function (r, o) {
      var s = $.data(o, lownamespace);s || n ? s && n && s[n] && s[n].apply(s, i) : s = $.data(o, lownamespace, new Scrollax(o, e, t).init());
    });
  }, $.Scrollax = function (e, t) {
    $win.Scrollax(e, t);
  };var css = ".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };",
      head = document.head || document.getElementsByTagName("head")[0],
      style = document.createElement("style");return style.type = "text/css", style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css)), head.appendChild(style), Scrollax;
}), function (e) {
  "use strict";
  var t = {},
      n = ["xs", "sm", "md", "lg", "xl", "xxl"];function i() {
    var n = e("body");1 != e(".lv-screen-data").length && n.append('<div class="lv-screen-data"></div>');var i,
        r,
        o = window.innerWidth,
        s = window.innerHeight,
        a = e(window).width(),
        l = e(window).height();o < t.sm && (i = "xs"), o >= t.sm && o < t.md && (i = "sm"), o >= t.md && o < t.lg && (i = "md"), o >= t.lg && o < t.xl && (i = "lg"), o >= t.xl && (i = "xl"), a < t.sm && (r = "xs"), a >= t.sm && a < t.md && (r = "sm"), a >= t.md && a < t.lg && (r = "md"), a >= t.lg && a < t.xl && (r = "lg"), a >= t.xl && (r = "xl"), e(".lv-screen-data").html(a + " x " + l + "<br><small>" + o + " x " + s + "</small><br>" + i + "  [" + r + "]").css({ position: "fixed", top: 0, padding: "5px 10px", background: "rgba(0,0,0,0.5)", "font-family": "Helvetica Neue", "font-size": "14px", color: "white", "z-index": 2147483646 }).click(function () {
      n.toggleClass("developer");
    });
  }!function () {
    for (var i, r = "", o = window.getComputedStyle(document.getElementsByTagName("body")[0]).getPropertyValue("content").replace(/\\a/g, "").replace(/ /g, "").replace(/'/g, "").replace(/"/g, "").split("|"), s = 0; s < o.length; s++) {
      t[n[s]] = Number(o[s].replace("px", "")), r += "<tr><td>" + n[s] + "</td><td>" + o[s] + "</td></tr>";
    }i = '<table class="table breakpoints-table" style="width: 300px;">' + r + "</table>", e('[data-js="lv-responsive-table"]').append(i);
  }(), e("html[development]").length && (i(), e(window).resize(function () {
    i();
  }));
}(jQuery);var LOGGING_ENABLED = !1;function log(e) {
  LOGGING_ENABLED && console.log(e);
}Vue.config.productionTip = !1, Vue.component("docs", { props: { files: String }, data: function data() {
    return { filesArray: [], url: "https://raw.githubusercontent.com/liquidvisual/inspire-0118/master/src/", codeEnabled: !1, showProperties: !1 };
  }, created: function created() {
    var e = this.files.split(","),
        t = e.length;for (var r in e) {
      var n = { name: e[r], alias: e[r].split("/").pop(), path: this.url + e[r] + "?" + Date.now(), active: !1, result: "loading..." },
          i = Number(r) + 1 === t;this.fetchDataAXIOS(n, i), this.filesArray.push(n);
    }
  },
  methods: {
    fetchDataAXIOS: function fetchDataAXIOS(e) {
      axios.get(e.path).then(function (t) {
        e.result = t.data;
      });
    },
    enableCode: function enableCode() {
      this.codeEnabled = !this.codeEnabled, this.selectFile(0);
    },
    deselectFiles: function deselectFiles() {
      for (var e in this.filesArray) {
        this.filesArray[e].active = !1;
      }
    },
    selectFile: function selectFile(e) {
      e = Number.isInteger(e) ? this.filesArray[e] : e;this.deselectFiles(), e.active = !0;
    }
  } });var docsExist = document.getElementById("docs-app");function cardSlider() {
  Flickity.prototype._createResizeClass = function () {
    this.element.classList.add("flickity-resize");
  }, Flickity.createMethods.push("_createResizeClass");var e = Flickity.prototype.resize;Flickity.prototype.resize = function () {
    this.element.classList.remove("flickity-resize"), e.call(this), this.element.classList.add("flickity-resize");
  };
}function launchGallery() {
  $("[data-lightbox-group]").each(function () {
    var e = $(this),
        t = e.attr("data-lightbox-group");e.magnificPopup({ delegate: "a", type: "image", tLoading: "Loading image #%curr%...", mainClass: "mfp-img-mobile", gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] }, image: { tError: '<a href="%url%">The image #%curr%</a> could not be loaded.', titleSrc: function titleSrc(e) {
          return '<div class="mb-1">' + e.el.attr("title") + "</div><small>" + t + "</small>";
        } }, callbacks: { elementParse: function elementParse(e) {
          (-1 != e.src.indexOf("youtube") || -1 != e.src.indexOf("vimeo") || -1 != e.src.indexOf("maps")) && (e.type = "iframe");
        } } });
  });
}function launchSlider() {
  $("[data-hero-slider]").each(function () {
    var e = $(this),
        t = $(".lv-hero", e),
        n = $(".lv-hero-item-caption", e),
        i = $(".lv-hero-item", t).length,
        r = $(".lv-hero-slider-prev-btn", e),
        o = $(".lv-hero-slider-next-btn", e);i > 1 && (r.on("click", function () {
      t.flickity("previous").flickity("stopPlayer");
    }), o.on("click", function () {
      t.flickity("next").flickity("stopPlayer");
    }), t.on("ready.flickity change.flickity", function () {
      $(window).width() > 576 && (n.hide(), setTimeout(function () {
        n.show();
      }, 500));
    }));
  });
}function closeSearch() {
  $("[data-global-search]").removeClass("active"), document.activeElement.blur();
}docsExist && new Vue({ el: "#docs-app", data: function data() {
    return { themes: [{ name: "theme-base", label: "Base", active: !1 }, { name: "theme-silverfox", label: "Base", active: !1 }, { name: "theme-skyblue", label: "Base", active: !1 }, { name: "theme-posh", label: "Base", active: !1 }, { name: "theme-midnight", label: "Base", active: !1 }], modifiers: [{ name: "is-tinted", label: "Tint", active: !1 }, { name: "has-image-bg", label: "Bg Image", active: !1 }, { name: "is-fixed", label: "Fixed Image", active: !1 }, { name: "is-parallax", label: "Parallax", active: !1 }] };
  }, computed: {
    currentTheme: function currentTheme() {
      return this.themes.find(function (e) {
        return !0 === e.active;
      });
    }
  }, created: function created() {
    var e = document.createElement("script");e.setAttribute("src", "//cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"), document.head.appendChild(e);
  },
  methods: {
    selectTheme: function selectTheme(e) {
      for (var _t3 in this.themes) {
        this.themes[_t3] !== e && (this.themes[_t3].active = !1);
      }e.active = !e.active;var t = e.active ? e.name : "";$(".card-docs-component .section, .global-header, .global-footer, .lv-hero-wrapper .lv-hero-item, .lv-breadcrumb-wrapper").removeClass(function (e, t) {
        return (t.match(/\btheme-\S+/g) || []).join(" ");
      }).addClass(t);
    },
    selectModifier: function selectModifier(e) {
      if ("is-tinted" == e.name) {
        var t = e.active ? "" : e.name;$(".card-docs-component .section, .lv-hero-item").removeClass(e.name).addClass(t);
      }if ("has-image-bg" == e.name) {
        var n = e.active ? "" : e.name;$(".card-docs-component .section, .parallax-layer, .lv-hero-item").removeClass(e.name).addClass(n), e.active ? $(".card-docs-component .section, .parallax-layer, .lv-hero-item").css("background-image", "none") : $(".card-docs-component .section, .parallax-layer, .lv-hero-item").css("background-image", "url(https://source.unsplash.com/random)");
      }if ("is-fixed" == e.name) {
        var i = e.active ? "" : e.name;$(".card-docs-component .section, .lv-hero-item").removeClass(e.name).addClass(i);
      }if ("is-parallax" == e.name) {
        var r = e.active ? "" : e.name;$(".card-docs-component .section, .lv-hero-item, .lv-hero-wrapper").removeClass(e.name).addClass(r);
      }
    }
  } }), cardSlider(), launchGallery(), launchSlider(), function (e) {
  "use strict";
  var t = e("html"),
      n = e(".lv-off-canvas .dropdown"),
      i = e(".lv-page"),
      r = e(".lv-off-canvas"),
      o = e('a[href*="#"]:not([href="#"])', r),
      s = e('<span class="submenu-trigger"><i class="fa fa-angle-right"></i></span>');e("[data-menu-toggle]").click(function (n) {
    e(".has-open-menu").length || (t.removeClass("has-closed-menu").addClass("has-open-menu"), setTimeout(function () {
      i.click(function (n) {
        n.stopPropagation(), e(".has-open-menu").length && (t.removeClass("has-open-menu").addClass("has-closed-menu"), e(this).unbind("click"));
      });
    }, 10));
  }), o.click(function (e) {
    e.preventDefault(), e.stopPropagation(), t.removeClass("has-open-menu").addClass("has-closed-menu"), i.unbind("click");
  }), s.click(function (t) {
    t.preventDefault(), t.stopPropagation(), e(this).parent().next(".dropdown").addClass("is-open");
  }), n.click(function (t) {
    e(this).removeClass("is-open"), t.stopPropagation();
  }), e(".lv-off-canvas .has-dropdown > a").append(s);
}(jQuery), $("[data-search-trigger]").click(function (e) {
  return $("[data-global-search]").addClass("active"), $("[data-global-search] input").focus(), !1;
}), $("[data-global-search]").on("mousedown", function () {
  closeSearch();
}), $("[data-global-search] input").on("mousedown", function (e) {
  e.stopPropagation();
}), $(document).keyup(function (e) {
  27 === e.keyCode && closeSearch();
}), $(window).on("load", function () {
  $("html").addClass("has-loaded");
});var player = new Plyr("audio", {});window.player = player, $(function () {
  $('[data-toggle="tooltip"]').tooltip(), $.Scrollax();
}), $('a[href*="#"]:not([href="#"], [href="#sitemap"], [data-toggle="tab"])').click(function () {
  var e = $(this).attr("href"),
      t = $(e);t.length && $.scrollTo(t.offset().top - 50, 500);
}), $("[data-back-top]").click(function () {
  $.scrollTo(0, 500);
}), $('a[href="#sitemap"]').length && $('a[href="#sitemap"]').click(function () {
  var e = $(this).attr("href"),
      t = $(e);$(".fa-angle-down").toggleClass("is-active"), setTimeout(function () {
    $.scrollTo(t.offset().top, 300);
  }, 300);
}), $(".global-header, .btn-back-top").headroom((_$$headroom = { offset: 60, tolerance: 0 }, _defineProperty(_$$headroom, "tolerance", { up: 5, down: 0 }), _defineProperty(_$$headroom, "classes", { initial: "headroom", pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", bottom: "headroom--bottom", notBottom: "headroom--not-bottom" }), _defineProperty(_$$headroom, "onPin", function onPin() {}), _defineProperty(_$$headroom, "onUnpin", function onUnpin() {}), _defineProperty(_$$headroom, "onTop", function onTop() {}), _defineProperty(_$$headroom, "onNotTop", function onNotTop() {}), _defineProperty(_$$headroom, "onBottom", function onBottom() {}), _defineProperty(_$$headroom, "onNotBottom", function onNotBottom() {}), _$$headroom));
