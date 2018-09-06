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
  var i = [],
      n = e.document,
      r = Object.getPrototypeOf,
      o = i.slice,
      s = i.concat,
      a = i.push,
      l = i.indexOf,
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
      v = { type: !0, src: !0, noModule: !0 };function y(e, t, i) {
    var r,
        o = (t = t || n).createElement("script");if (o.text = e, i) for (r in v) {
      i[r] && (o[r] = i[r]);
    }t.head.appendChild(o).parentNode.removeChild(o);
  }function b(e) {
    return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? c[u.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
  }var w = function w(e, t) {
    return new w.fn.init(e, t);
  },
      E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function C(e) {
    var t = !!e && "length" in e && e.length,
        i = b(e);return !m(e) && !g(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }w.fn = w.prototype = { jquery: "3.3.1", constructor: w, length: 0, toArray: function toArray() {
      return o.call(this);
    }, get: function get(e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    }, pushStack: function pushStack(e) {
      var t = w.merge(this.constructor(), e);return t.prevObject = this, t;
    }, each: function each(e) {
      return w.each(this, e);
    }, map: function map(e) {
      return this.pushStack(w.map(this, function (t, i) {
        return e.call(t, i, t);
      }));
    }, slice: function slice() {
      return this.pushStack(o.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          i = +e + (e < 0 ? t : 0);return this.pushStack(i >= 0 && i < t ? [this[i]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: a, sort: i.sort, splice: i.splice }, w.extend = w.fn.extend = function () {
    var e,
        t,
        i,
        n,
        r,
        o,
        s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) || m(s) || (s = {}), a === l && (s = this, a--); a < l; a++) {
      if (null != (e = arguments[a])) for (t in e) {
        i = s[t], s !== (n = e[t]) && (c && n && (w.isPlainObject(n) || (r = Array.isArray(n))) ? (r ? (r = !1, o = i && Array.isArray(i) ? i : []) : o = i && w.isPlainObject(i) ? i : {}, s[t] = w.extend(c, o, n)) : void 0 !== n && (s[t] = n));
      }
    }return s;
  }, w.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
      throw new Error(e);
    }, noop: function noop() {}, isPlainObject: function isPlainObject(e) {
      var t, i;return !(!e || "[object Object]" !== u.call(e)) && (!(t = r(e)) || "function" == typeof (i = d.call(t, "constructor") && t.constructor) && h.call(i) === f);
    }, isEmptyObject: function isEmptyObject(e) {
      var t;for (t in e) {
        return !1;
      }return !0;
    }, globalEval: function globalEval(e) {
      y(e);
    }, each: function each(e, t) {
      var i,
          n = 0;if (C(e)) for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++) {} else for (n in e) {
        if (!1 === t.call(e[n], n, e[n])) break;
      }return e;
    }, trim: function trim(e) {
      return null == e ? "" : (e + "").replace(E, "");
    }, makeArray: function makeArray(e, t) {
      var i = t || [];return null != e && (C(Object(e)) ? w.merge(i, "string" == typeof e ? [e] : e) : a.call(i, e)), i;
    }, inArray: function inArray(e, t, i) {
      return null == t ? -1 : l.call(t, e, i);
    }, merge: function merge(e, t) {
      for (var i = +t.length, n = 0, r = e.length; n < i; n++) {
        e[r++] = t[n];
      }return e.length = r, e;
    }, grep: function grep(e, t, i) {
      for (var n = [], r = 0, o = e.length, s = !i; r < o; r++) {
        !t(e[r], r) !== s && n.push(e[r]);
      }return n;
    }, map: function map(e, t, i) {
      var n,
          r,
          o = 0,
          a = [];if (C(e)) for (n = e.length; o < n; o++) {
        null != (r = t(e[o], o, i)) && a.push(r);
      } else for (o in e) {
        null != (r = t(e[o], o, i)) && a.push(r);
      }return s.apply([], a);
    }, guid: 1, support: p }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = i[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    c["[object " + t + "]"] = t.toLowerCase();
  });var _ = function (e) {
    var t,
        i,
        n,
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
      for (var i = 0, n = e.length; i < n; i++) {
        if (e[i] === t) return i;
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
        Q = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        G = /^[^{]+\{\s*\[native \w/,
        X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        J = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ee = function ee(e, t, i) {
      var n = "0x" + t - 65536;return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320);
    },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function ie(e, t) {
      return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        ne = function ne() {
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
          for (var i = e.length, n = 0; e[i++] = t[n++];) {}e.length = i - 1;
        } };
    }function oe(e, t, n, r) {
      var o,
          a,
          c,
          u,
          d,
          p,
          v,
          y = t && t.ownerDocument,
          C = t ? t.nodeType : 9;if (n = n || [], "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C) return n;if (!r && ((t ? t.ownerDocument || t : E) !== f && h(t), t = t || f, m)) {
        if (11 !== C && (d = X.exec(e))) if (o = d[1]) {
          if (9 === C) {
            if (!(c = t.getElementById(o))) return n;if (c.id === o) return n.push(c), n;
          } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return n.push(c), n;
        } else {
          if (d[2]) return P.apply(n, t.getElementsByTagName(e)), n;if ((o = d[3]) && i.getElementsByClassName && t.getElementsByClassName) return P.apply(n, t.getElementsByClassName(o)), n;
        }if (i.qsa && !k[e + " "] && (!g || !g.test(e))) {
          if (1 !== C) y = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
            for ((u = t.getAttribute("id")) ? u = u.replace(te, ie) : t.setAttribute("id", u = w), a = (p = s(e)).length; a--;) {
              p[a] = "#" + u + " " + ve(p[a]);
            }v = p.join(","), y = J.test(e) && me(t.parentNode) || t;
          }if (v) try {
            return P.apply(n, y.querySelectorAll(v)), n;
          } catch (e) {} finally {
            u === w && t.removeAttribute("id");
          }
        }
      }return l(e.replace(R, "$1"), t, n, r);
    }function se() {
      var e = [];return function t(i, r) {
        return e.push(i + " ") > n.cacheLength && delete t[e.shift()], t[i + " "] = r;
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
      for (var i = e.split("|"), r = i.length; r--;) {
        n.attrHandle[i[r]] = t;
      }
    }function ue(e, t) {
      var i = t && e,
          n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (n) return n;if (i) for (; i = i.nextSibling;) {
        if (i === t) return -1;
      }return e ? 1 : -1;
    }function de(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }function he(e) {
      return function (t) {
        var i = t.nodeName.toLowerCase();return ("input" === i || "button" === i) && t.type === e;
      };
    }function fe(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }function pe(e) {
      return ae(function (t) {
        return t = +t, ae(function (i, n) {
          for (var r, o = e([], i.length, t), s = o.length; s--;) {
            i[r = o[s]] && (i[r] = !(n[r] = i[r]));
          }
        });
      });
    }function me(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }for (t in i = oe.support = {}, o = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, h = oe.setDocument = function (e) {
      var t,
          r,
          s = e ? e.ownerDocument || e : E;return s !== f && 9 === s.nodeType && s.documentElement ? (p = (f = s).documentElement, m = !o(f), E !== f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ne, !1) : r.attachEvent && r.attachEvent("onunload", ne)), i.attributes = le(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), i.getElementsByTagName = le(function (e) {
        return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length;
      }), i.getElementsByClassName = G.test(f.getElementsByClassName), i.getById = le(function (e) {
        return p.appendChild(e).id = w, !f.getElementsByName || !f.getElementsByName(w).length;
      }), i.getById ? (n.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          return e.getAttribute("id") === t;
        };
      }, n.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && m) {
          var i = t.getElementById(e);return i ? [i] : [];
        }
      }) : (n.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");return i && i.value === t;
        };
      }, n.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && m) {
          var i,
              n,
              r,
              o = t.getElementById(e);if (o) {
            if ((i = o.getAttributeNode("id")) && i.value === e) return [o];for (r = t.getElementsByName(e), n = 0; o = r[n++];) {
              if ((i = o.getAttributeNode("id")) && i.value === e) return [o];
            }
          }return [];
        }
      }), n.find.TAG = i.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var i,
            n = [],
            r = 0,
            o = t.getElementsByTagName(e);if ("*" === e) {
          for (; i = o[r++];) {
            1 === i.nodeType && n.push(i);
          }return n;
        }return o;
      }, n.find.CLASS = i.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e);
      }, v = [], g = [], (i.qsa = G.test(f.querySelectorAll)) && (le(function (e) {
        p.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + M + "*(?:value|" + j + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]");
      }), le(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = f.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:");
      })), (i.matchesSelector = G.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function (e) {
        i.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", F);
      }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = G.test(p.compareDocumentPosition), b = t || G.test(p.contains) ? function (e, t) {
        var i = 9 === e.nodeType ? e.documentElement : e,
            n = t && t.parentNode;return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) {
          if (t === e) return !0;
        }return !1;
      }, S = t ? function (e, t) {
        if (e === t) return d = !0, 0;var n = !e.compareDocumentPosition - !t.compareDocumentPosition;return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e === f || e.ownerDocument === E && b(E, e) ? -1 : t === f || t.ownerDocument === E && b(E, t) ? 1 : u ? O(u, e) - O(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return d = !0, 0;var i,
            n = 0,
            r = e.parentNode,
            o = t.parentNode,
            s = [e],
            a = [t];if (!r || !o) return e === f ? -1 : t === f ? 1 : r ? -1 : o ? 1 : u ? O(u, e) - O(u, t) : 0;if (r === o) return ue(e, t);for (i = e; i = i.parentNode;) {
          s.unshift(i);
        }for (i = t; i = i.parentNode;) {
          a.unshift(i);
        }for (; s[n] === a[n];) {
          n++;
        }return n ? ue(s[n], a[n]) : s[n] === E ? -1 : a[n] === E ? 1 : 0;
      }, f) : f;
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== f && h(e), t = t.replace(U, "='$1']"), i.matchesSelector && m && !k[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
        var n = y.call(e, t);if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {}return oe(t, f, null, [e]).length > 0;
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== f && h(e), b(e, t);
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== f && h(e);var r = n.attrHandle[t.toLowerCase()],
          o = r && A.call(n.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;return void 0 !== o ? o : i.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, oe.escape = function (e) {
      return (e + "").replace(te, ie);
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, oe.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          o = 0;if (d = !i.detectDuplicates, u = !i.sortStable && e.slice(0), e.sort(S), d) {
        for (; t = e[o++];) {
          t === e[o] && (r = n.push(o));
        }for (; r--;) {
          e.splice(n[r], 1);
        }
      }return u = null, e;
    }, r = oe.getText = function (e) {
      var t,
          i = "",
          n = 0,
          o = e.nodeType;if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
            i += r(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else for (; t = e[n++];) {
        i += r(t);
      }return i;
    }, (n = oe.selectors = { cacheLength: 50, createPseudo: ae, match: K, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t,
              i = !e[6] && e[2];return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && V.test(i) && (t = s(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3));
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
        }, ATTR: function ATTR(e, t, i) {
          return function (n) {
            var r = oe.attr(n, e);return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === i : "!=" === t ? r !== i : "^=" === t ? i && 0 === r.indexOf(i) : "*=" === t ? i && r.indexOf(i) > -1 : "$=" === t ? i && r.slice(-i.length) === i : "~=" === t ? (" " + r.replace(B, " ") + " ").indexOf(i) > -1 : "|=" === t && (r === i || r.slice(0, i.length + 1) === i + "-"));
          };
        }, CHILD: function CHILD(e, t, i, n, r) {
          var o = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;return 1 === n && 0 === r ? function (e) {
            return !!e.parentNode;
          } : function (t, i, l) {
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
              } else if (y && (b = f = (c = (u = (d = (h = t)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === C && c[1]), !1 === b) for (; (h = ++f && h && h[m] || (b = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((u = (d = h[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [C, b]), h !== t));) {}return (b -= r) === n || b % n == 0 && b / n >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, t) {
          var i,
              r = n.pseudos[e] || n.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);return r[w] ? r(t) : r.length > 1 ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, i) {
            for (var n, o = r(e, t), s = o.length; s--;) {
              e[n = O(e, o[s])] = !(i[n] = o[s]);
            }
          }) : function (e) {
            return r(e, 0, i);
          }) : r;
        } }, pseudos: { not: ae(function (e) {
          var t = [],
              i = [],
              n = a(e.replace(R, "$1"));return n[w] ? ae(function (e, t, i, r) {
            for (var o, s = n(e, null, r, []), a = e.length; a--;) {
              (o = s[a]) && (e[a] = !(t[a] = o));
            }
          }) : function (e, r, o) {
            return t[0] = e, n(t, null, o, i), t[0] = null, !i.pop();
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
            var i;do {
              if (i = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var i = e.location && e.location.hash;return i && i.slice(1) === t.id;
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
          return !n.pseudos.empty(e);
        }, header: function header(e) {
          return Y.test(e.nodeName);
        }, input: function input(e) {
          return Q.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function text(e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        }, first: pe(function () {
          return [0];
        }), last: pe(function (e, t) {
          return [t - 1];
        }), eq: pe(function (e, t, i) {
          return [i < 0 ? i + t : i];
        }), even: pe(function (e, t) {
          for (var i = 0; i < t; i += 2) {
            e.push(i);
          }return e;
        }), odd: pe(function (e, t) {
          for (var i = 1; i < t; i += 2) {
            e.push(i);
          }return e;
        }), lt: pe(function (e, t, i) {
          for (var n = i < 0 ? i + t : i; --n >= 0;) {
            e.push(n);
          }return e;
        }), gt: pe(function (e, t, i) {
          for (var n = i < 0 ? i + t : i; ++n < t;) {
            e.push(n);
          }return e;
        }) } }).pseudos.nth = n.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      n.pseudos[t] = de(t);
    }for (t in { submit: !0, reset: !0 }) {
      n.pseudos[t] = he(t);
    }function ge() {}function ve(e) {
      for (var t = 0, i = e.length, n = ""; t < i; t++) {
        n += e[t].value;
      }return n;
    }function ye(e, t, i) {
      var n = t.dir,
          r = t.next,
          o = r || n,
          s = i && "parentNode" === o,
          a = _++;return t.first ? function (t, i, r) {
        for (; t = t[n];) {
          if (1 === t.nodeType || s) return e(t, i, r);
        }return !1;
      } : function (t, i, l) {
        var c,
            u,
            d,
            h = [C, a];if (l) {
          for (; t = t[n];) {
            if ((1 === t.nodeType || s) && e(t, i, l)) return !0;
          }
        } else for (; t = t[n];) {
          if (1 === t.nodeType || s) if (u = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[n] || t;else {
            if ((c = u[o]) && c[0] === C && c[1] === a) return h[2] = c[2];if (u[o] = h, h[2] = e(t, i, l)) return !0;
          }
        }return !1;
      };
    }function be(e) {
      return e.length > 1 ? function (t, i, n) {
        for (var r = e.length; r--;) {
          if (!e[r](t, i, n)) return !1;
        }return !0;
      } : e[0];
    }function we(e, t, i, n, r) {
      for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++) {
        (o = e[a]) && (i && !i(o, n, r) || (s.push(o), c && t.push(a)));
      }return s;
    }function Ee(e, t, i, n, r, o) {
      return n && !n[w] && (n = Ee(n)), r && !r[w] && (r = Ee(r, o)), ae(function (o, s, a, l) {
        var c,
            u,
            d,
            h = [],
            f = [],
            p = s.length,
            m = o || function (e, t, i) {
          for (var n = 0, r = t.length; n < r; n++) {
            oe(e, t[n], i);
          }return i;
        }(t || "*", a.nodeType ? [a] : a, []),
            g = !e || !o && t ? m : we(m, h, e, a, l),
            v = i ? r || (o ? e : p || n) ? [] : s : g;if (i && i(g, v, a, l), n) for (c = we(v, f), n(c, [], a, l), u = c.length; u--;) {
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
      for (var t, i, r, o = e.length, s = n.relative[e[0].type], a = s || n.relative[" "], l = s ? 1 : 0, u = ye(function (e) {
        return e === t;
      }, a, !0), d = ye(function (e) {
        return O(t, e) > -1;
      }, a, !0), h = [function (e, i, n) {
        var r = !s && (n || i !== c) || ((t = i).nodeType ? u(e, i, n) : d(e, i, n));return t = null, r;
      }]; l < o; l++) {
        if (i = n.relative[e[l].type]) h = [ye(be(h), i)];else {
          if ((i = n.filter[e[l].type].apply(null, e[l].matches))[w]) {
            for (r = ++l; r < o && !n.relative[e[r].type]; r++) {}return Ee(l > 1 && be(h), l > 1 && ve(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(R, "$1"), i, l < r && Ce(e.slice(l, r)), r < o && Ce(e = e.slice(r)), r < o && ve(e));
          }h.push(i);
        }
      }return be(h);
    }return ge.prototype = n.filters = n.pseudos, n.setFilters = new ge(), s = oe.tokenize = function (e, t) {
      var i,
          r,
          o,
          s,
          a,
          l,
          c,
          u = x[e + " "];if (u) return t ? 0 : u.slice(0);for (a = e, l = [], c = n.preFilter; a;) {
        for (s in i && !(r = z.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = W.exec(a)) && (i = r.shift(), o.push({ value: i, type: r[0].replace(R, " ") }), a = a.slice(i.length)), n.filter) {
          !(r = K[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({ value: i, type: s, matches: r }), a = a.slice(i.length));
        }if (!i) break;
      }return t ? a.length : a ? oe.error(e) : x(e, l).slice(0);
    }, a = oe.compile = function (e, t) {
      var i,
          r = [],
          o = [],
          a = k[e + " "];if (!a) {
        for (t || (t = s(e)), i = t.length; i--;) {
          (a = Ce(t[i]))[w] ? r.push(a) : o.push(a);
        }(a = k(e, function (e, t) {
          var i = t.length > 0,
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
                _ = _o || r && n.find.TAG("*", u),
                T = C += null == E ? 1 : Math.random() || .1,
                x = _.length;for (u && (c = s === f || s || u); y !== x && null != (d = _[y]); y++) {
              if (r && d) {
                for (p = 0, s || d.ownerDocument === f || (h(d), a = !m); g = e[p++];) {
                  if (g(d, s || f, a)) {
                    l.push(d);break;
                  }
                }u && (C = T);
              }i && ((d = !g && d) && v--, _o && b.push(d));
            }if (v += y, i && y !== v) {
              for (p = 0; g = t[p++];) {
                g(b, w, s, a);
              }if (_o) {
                if (v > 0) for (; y--;) {
                  b[y] || w[y] || (w[y] = I.call(l));
                }w = we(w);
              }P.apply(l, w), u && !_o && w.length > 0 && v + t.length > 1 && oe.uniqueSort(l);
            }return u && (C = T, c = E), b;
          };return i ? ae(o) : o;
        }(o, r))).selector = e;
      }return a;
    }, l = oe.select = function (e, t, i, r) {
      var o,
          l,
          c,
          u,
          d,
          h = "function" == typeof e && e,
          f = !r && s(e = h.selector || e);if (i = i || [], 1 === f.length) {
        if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && n.relative[l[1].type]) {
          if (!(t = (n.find.ID(c.matches[0].replace(Z, ee), t) || [])[0])) return i;h && (t = t.parentNode), e = e.slice(l.shift().value.length);
        }for (o = K.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !n.relative[u = c.type]);) {
          if ((d = n.find[u]) && (r = d(c.matches[0].replace(Z, ee), J.test(l[0].type) && me(t.parentNode) || t))) {
            if (l.splice(o, 1), !(e = r.length && ve(l))) return P.apply(i, r), i;break;
          }
        }
      }return (h || a(e, f))(r, t, !m, i, !t || J.test(e) && me(t.parentNode) || t), i;
    }, i.sortStable = w.split("").sort(S).join("") === w, i.detectDuplicates = !!d, h(), i.sortDetached = le(function (e) {
      return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
    }), le(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || ce("type|href|height|width", function (e, t, i) {
      if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), i.attributes && le(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || ce("value", function (e, t, i) {
      if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), le(function (e) {
      return null == e.getAttribute("disabled");
    }) || ce(j, function (e, t, i) {
      var n;if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
    }), oe;
  }(e);w.find = _, w.expr = _.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = _.uniqueSort, w.text = _.getText, w.isXMLDoc = _.isXML, w.contains = _.contains, w.escapeSelector = _.escape;var T = function T(e, t, i) {
    for (var n = [], r = void 0 !== i; (e = e[t]) && 9 !== e.nodeType;) {
      if (1 === e.nodeType) {
        if (r && w(e).is(i)) break;n.push(e);
      }
    }return n;
  },
      x = function x(e, t) {
    for (var i = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && i.push(e);
    }return i;
  },
      k = w.expr.match.needsContext;function S(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e, t, i) {
    return m(t) ? w.grep(e, function (e, n) {
      return !!t.call(e, n, e) !== i;
    }) : t.nodeType ? w.grep(e, function (e) {
      return e === t !== i;
    }) : "string" != typeof t ? w.grep(e, function (e) {
      return l.call(t, e) > -1 !== i;
    }) : w.filter(t, e, i);
  }w.filter = function (e, t, i) {
    var n = t[0];return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? w.find.matchesSelector(n, e) ? [n] : [] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, w.fn.extend({ find: function find(e) {
      var t,
          i,
          n = this.length,
          r = this;if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < n; t++) {
          if (w.contains(r[t], this)) return !0;
        }
      }));for (i = this.pushStack([]), t = 0; t < n; t++) {
        w.find(e, r[t], i);
      }return n > 1 ? w.uniqueSort(i) : i;
    }, filter: function filter(e) {
      return this.pushStack(D(this, e || [], !1));
    }, not: function not(e) {
      return this.pushStack(D(this, e || [], !0));
    }, is: function is(e) {
      return !!D(this, "string" == typeof e && k.test(e) ? w(e) : e || [], !1).length;
    } });var I,
      N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init = function (e, t, i) {
    var r, o;if (!e) return this;if (i = i || I, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : N.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);if (r[1]) {
        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : n, !0)), A.test(r[1]) && w.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }return this;
      }return (o = n.getElementById(r[2])) && (this[0] = o, this.length = 1), this;
    }return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== i.ready ? i.ready(e) : e(w) : w.makeArray(e, this);
  }).prototype = w.fn, I = w(n);var P = /^(?:parents|prev(?:Until|All))/,
      L = { children: !0, contents: !0, next: !0, prev: !0 };function O(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) {}return e;
  }w.fn.extend({ has: function has(e) {
      var t = w(e, this),
          i = t.length;return this.filter(function () {
        for (var e = 0; e < i; e++) {
          if (w.contains(this, t[e])) return !0;
        }
      });
    }, closest: function closest(e, t) {
      var i,
          n = 0,
          r = this.length,
          o = [],
          s = "string" != typeof e && w(e);if (!k.test(e)) for (; n < r; n++) {
        for (i = this[n]; i && i !== t; i = i.parentNode) {
          if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && w.find.matchesSelector(i, e))) {
            o.push(i);break;
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
    }, parentsUntil: function parentsUntil(e, t, i) {
      return T(e, "parentNode", i);
    }, next: function next(e) {
      return O(e, "nextSibling");
    }, prev: function prev(e) {
      return O(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return T(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return T(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, i) {
      return T(e, "nextSibling", i);
    }, prevUntil: function prevUntil(e, t, i) {
      return T(e, "previousSibling", i);
    }, siblings: function siblings(e) {
      return x((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return x(e.firstChild);
    }, contents: function contents(e) {
      return S(e, "iframe") ? e.contentDocument : (S(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
    } }, function (e, t) {
    w.fn[e] = function (i, n) {
      var r = w.map(this, t, i);return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (r = w.filter(n, r)), this.length > 1 && (L[e] || w.uniqueSort(r), P.test(e) && r.reverse()), this.pushStack(r);
    };
  });var j = /[^\x20\t\r\n\f]+/g;function M(e) {
    return e;
  }function H(e) {
    throw e;
  }function q(e, t, i, n) {
    var r;try {
      e && m(r = e.promise) ? r.call(e).done(t).fail(i) : e && m(r = e.then) ? r.call(e, t, i) : t.apply(void 0, [e].slice(n));
    } catch (e) {
      i.apply(void 0, [e]);
    }
  }w.Callbacks = function (e) {
    e = "string" == typeof e ? function (e) {
      var t = {};return w.each(e.match(j) || [], function (e, i) {
        t[i] = !0;
      }), t;
    }(e) : w.extend({}, e);var t,
        i,
        n,
        r,
        o = [],
        s = [],
        a = -1,
        l = function l() {
      for (r = r || e.once, n = t = !0; s.length; a = -1) {
        for (i = s.shift(); ++a < o.length;) {
          !1 === o[a].apply(i[0], i[1]) && e.stopOnFalse && (a = o.length, i = !1);
        }
      }e.memory || (i = !1), t = !1, r && (o = i ? [] : "");
    },
        c = { add: function add() {
        return o && (i && !t && (a = o.length - 1, s.push(i)), function t(i) {
          w.each(i, function (i, n) {
            m(n) ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== b(n) && t(n);
          });
        }(arguments), i && !t && l()), this;
      }, remove: function remove() {
        return w.each(arguments, function (e, t) {
          for (var i; (i = w.inArray(t, o, i)) > -1;) {
            o.splice(i, 1), i <= a && a--;
          }
        }), this;
      }, has: function has(e) {
        return e ? w.inArray(e, o) > -1 : o.length > 0;
      }, empty: function empty() {
        return o && (o = []), this;
      }, disable: function disable() {
        return r = s = [], o = i = "", this;
      }, disabled: function disabled() {
        return !o;
      }, lock: function lock() {
        return r = s = [], i || t || (o = i = ""), this;
      }, locked: function locked() {
        return !!r;
      }, fireWith: function fireWith(e, i) {
        return r || (i = [e, (i = i || []).slice ? i.slice() : i], s.push(i), t || l()), this;
      }, fire: function fire() {
        return c.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!n;
      } };return c;
  }, w.extend({ Deferred: function Deferred(t) {
      var i = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
          n = "pending",
          r = { state: function state() {
          return n;
        }, always: function always() {
          return o.done(arguments).fail(arguments), this;
        }, catch: function _catch(e) {
          return r.then(null, e);
        }, pipe: function pipe() {
          var e = arguments;return w.Deferred(function (t) {
            w.each(i, function (i, n) {
              var r = m(e[n[4]]) && e[n[4]];o[n[1]](function () {
                var e = r && r.apply(this, arguments);e && m(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, r ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, then: function then(t, n, r) {
          var o = 0;function s(t, i, n, r) {
            return function () {
              var a = this,
                  l = arguments,
                  c = function c() {
                var e, c;if (!(t < o)) {
                  if ((e = n.apply(a, l)) === i.promise()) throw new TypeError("Thenable self-resolution");c = e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, m(c) ? r ? c.call(e, s(o, i, M, r), s(o, i, H, r)) : (o++, c.call(e, s(o, i, M, r), s(o, i, H, r), s(o, i, M, i.notifyWith))) : (n !== M && (a = void 0, l = [e]), (r || i.resolveWith)(a, l));
                }
              },
                  u = r ? c : function () {
                try {
                  c();
                } catch (e) {
                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= o && (n !== H && (a = void 0, l = [e]), i.rejectWith(a, l));
                }
              };t ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()), e.setTimeout(u));
            };
          }return w.Deferred(function (e) {
            i[0][3].add(s(0, e, m(r) ? r : M, e.notifyWith)), i[1][3].add(s(0, e, m(t) ? t : M)), i[2][3].add(s(0, e, m(n) ? n : H));
          }).promise();
        }, promise: function promise(e) {
          return null != e ? w.extend(e, r) : r;
        } },
          o = {};return w.each(i, function (e, t) {
        var s = t[2],
            a = t[5];r[t[1]] = s.add, a && s.add(function () {
          n = a;
        }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock), s.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, o[t[0] + "With"] = s.fireWith;
      }), r.promise(o), t && t.call(o, o), o;
    }, when: function when(e) {
      var t = arguments.length,
          i = t,
          n = Array(i),
          r = o.call(arguments),
          s = w.Deferred(),
          a = function a(e) {
        return function (i) {
          n[e] = this, r[e] = arguments.length > 1 ? o.call(arguments) : i, --t || s.resolveWith(n, r);
        };
      };if (t <= 1 && (q(e, s.done(a(i)).resolve, s.reject, !t), "pending" === s.state() || m(r[i] && r[i].then))) return s.then();for (; i--;) {
        q(r[i], a(i), s.reject);
      }return s.promise();
    } });var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook = function (t, i) {
    e.console && e.console.warn && t && F.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i);
  }, w.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };var B = w.Deferred();function R() {
    n.removeEventListener("DOMContentLoaded", R), e.removeEventListener("load", R), w.ready();
  }w.fn.ready = function (e) {
    return B.then(e).catch(function (e) {
      w.readyException(e);
    }), this;
  }, w.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || B.resolveWith(n, [w]));
    } }), w.ready.then = B.then, "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll ? e.setTimeout(w.ready) : (n.addEventListener("DOMContentLoaded", R), e.addEventListener("load", R));var z = function z(e, t, i, n, r, o, s) {
    var a = 0,
        l = e.length,
        c = null == i;if ("object" === b(i)) for (a in r = !0, i) {
      z(e, t, a, i[a], !0, o, s);
    } else if (void 0 !== n && (r = !0, m(n) || (s = !0), c && (s ? (t.call(e, n), t = null) : (c = t, t = function t(e, _t2, i) {
      return c.call(w(e), i);
    })), t)) for (; a < l; a++) {
      t(e[a], i, s ? n : n.call(e[a], a, t(e[a], i)));
    }return r ? e : c ? t.call(e) : l ? t(e[0], i) : o;
  },
      W = /^-ms-/,
      U = /-([a-z])/g;function V(e, t) {
    return t.toUpperCase();
  }function $(e) {
    return e.replace(W, "ms-").replace(U, V);
  }var K = function K(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };function Q() {
    this.expando = w.expando + Q.uid++;
  }Q.uid = 1, Q.prototype = { cache: function cache(e) {
      var t = e[this.expando];return t || (t = {}, K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function set(e, t, i) {
      var n,
          r = this.cache(e);if ("string" == typeof t) r[$(t)] = i;else for (n in t) {
        r[$(n)] = t[n];
      }return r;
    }, get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][$(t)];
    }, access: function access(e, t, i) {
      return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t);
    }, remove: function remove(e, t) {
      var i,
          n = e[this.expando];if (void 0 !== n) {
        if (void 0 !== t) {
          i = (t = Array.isArray(t) ? t.map($) : (t = $(t)) in n ? [t] : t.match(j) || []).length;for (; i--;) {
            delete n[t[i]];
          }
        }(void 0 === t || w.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function hasData(e) {
      var t = e[this.expando];return void 0 !== t && !w.isEmptyObject(t);
    } };var Y = new Q(),
      G = new Q(),
      X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      J = /[A-Z]/g;function Z(e, t, i) {
    var n;if (void 0 === i && 1 === e.nodeType) if (n = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (i = e.getAttribute(n))) {
      try {
        i = function (e) {
          return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : X.test(e) ? JSON.parse(e) : e);
        }(i);
      } catch (e) {}G.set(e, t, i);
    } else i = void 0;return i;
  }w.extend({ hasData: function hasData(e) {
      return G.hasData(e) || Y.hasData(e);
    }, data: function data(e, t, i) {
      return G.access(e, t, i);
    }, removeData: function removeData(e, t) {
      G.remove(e, t);
    }, _data: function _data(e, t, i) {
      return Y.access(e, t, i);
    }, _removeData: function _removeData(e, t) {
      Y.remove(e, t);
    } }), w.fn.extend({ data: function data(e, t) {
      var i,
          n,
          r,
          o = this[0],
          s = o && o.attributes;if (void 0 === e) {
        if (this.length && (r = G.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          for (i = s.length; i--;) {
            s[i] && 0 === (n = s[i].name).indexOf("data-") && (n = $(n.slice(5)), Z(o, n, r[n]));
          }Y.set(o, "hasDataAttrs", !0);
        }return r;
      }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
        G.set(this, e);
      }) : z(this, function (t) {
        var i;if (o && void 0 === t) return void 0 !== (i = G.get(o, e)) ? i : void 0 !== (i = Z(o, e)) ? i : void 0;this.each(function () {
          G.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    }, removeData: function removeData(e) {
      return this.each(function () {
        G.remove(this, e);
      });
    } }), w.extend({ queue: function queue(e, t, i) {
      var n;if (e) return t = (t || "fx") + "queue", n = Y.get(e, t), i && (!n || Array.isArray(i) ? n = Y.access(e, t, w.makeArray(i)) : n.push(i)), n || [];
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var i = w.queue(e, t),
          n = i.length,
          r = i.shift(),
          o = w._queueHooks(e, t);"inprogress" === r && (r = i.shift(), n--), r && ("fx" === t && i.unshift("inprogress"), delete o.stop, r.call(e, function () {
        w.dequeue(e, t);
      }, o)), !n && o && o.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var i = t + "queueHooks";return Y.get(e, i) || Y.access(e, i, { empty: w.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", i]);
        }) });
    } }), w.fn.extend({ queue: function queue(e, t) {
      var i = 2;return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var i = w.queue(this, e, t);w._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && w.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        w.dequeue(this, e);
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, t) {
      var i,
          n = 1,
          r = w.Deferred(),
          o = this,
          s = this.length,
          a = function a() {
        --n || r.resolveWith(o, [o]);
      };for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) {
        (i = Y.get(o[s], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
      }return a(), r.promise(t);
    } });var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ie = ["Top", "Right", "Bottom", "Left"],
      ne = function ne(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
  },
      re = function re(e, t, i, n) {
    var r,
        o,
        s = {};for (o in t) {
      s[o] = e.style[o], e.style[o] = t[o];
    }for (o in r = i.apply(e, n || []), t) {
      e.style[o] = s[o];
    }return r;
  };function oe(e, t, i, n) {
    var r,
        o,
        s = 20,
        a = n ? function () {
      return n.cur();
    } : function () {
      return w.css(e, t, "");
    },
        l = a(),
        c = i && i[3] || (w.cssNumber[t] ? "" : "px"),
        u = (w.cssNumber[t] || "px" !== c && +l) && te.exec(w.css(e, t));if (u && u[3] !== c) {
      for (l /= 2, c = c || u[3], u = +l || 1; s--;) {
        w.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
      }u *= 2, w.style(e, t, u + c), i = i || [];
    }return i && (u = +u || +l || 0, r = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = r)), r;
  }var se = {};function ae(e) {
    var t,
        i = e.ownerDocument,
        n = e.nodeName,
        r = se[n];return r || (t = i.body.appendChild(i.createElement(n)), r = w.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), se[n] = r, r);
  }function le(e, t) {
    for (var i, n, r = [], o = 0, s = e.length; o < s; o++) {
      (n = e[o]).style && (i = n.style.display, t ? ("none" === i && (r[o] = Y.get(n, "display") || null, r[o] || (n.style.display = "")), "" === n.style.display && ne(n) && (r[o] = ae(n))) : "none" !== i && (r[o] = "none", Y.set(n, "display", i)));
    }for (o = 0; o < s; o++) {
      null != r[o] && (e[o].style.display = r[o]);
    }return e;
  }w.fn.extend({ show: function show() {
      return le(this, !0);
    }, hide: function hide() {
      return le(this);
    }, toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ne(this) ? w(this).show() : w(this).hide();
      });
    } });var ce = /^(?:checkbox|radio)$/i,
      ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      de = /^$|^module$|\/(?:java|ecma)script/i,
      he = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };function fe(e, t) {
    var i;return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && S(e, t) ? w.merge([e], i) : i;
  }function pe(e, t) {
    for (var i = 0, n = e.length; i < n; i++) {
      Y.set(e[i], "globalEval", !t || Y.get(t[i], "globalEval"));
    }
  }he.optgroup = he.option, he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td;var me,
      ge,
      ve = /<|&#?\w+;/;function ye(e, t, i, n, r) {
    for (var o, s, a, l, c, u, d = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++) {
      if ((o = e[f]) || 0 === o) if ("object" === b(o)) w.merge(h, o.nodeType ? [o] : o);else if (ve.test(o)) {
        for (s = s || d.appendChild(t.createElement("div")), a = (ue.exec(o) || ["", ""])[1].toLowerCase(), l = he[a] || he._default, s.innerHTML = l[1] + w.htmlPrefilter(o) + l[2], u = l[0]; u--;) {
          s = s.lastChild;
        }w.merge(h, s.childNodes), (s = d.firstChild).textContent = "";
      } else h.push(t.createTextNode(o));
    }for (d.textContent = "", f = 0; o = h[f++];) {
      if (n && w.inArray(o, n) > -1) r && r.push(o);else if (c = w.contains(o.ownerDocument, o), s = fe(d.appendChild(o), "script"), c && pe(s), i) for (u = 0; o = s[u++];) {
        de.test(o.type || "") && i.push(o);
      }
    }return d;
  }me = n.createDocumentFragment().appendChild(n.createElement("div")), (ge = n.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), me.appendChild(ge), p.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;var be = n.documentElement,
      we = /^key/,
      Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ce = /^([^.]*)(?:\.(.+)|)/;function _e() {
    return !0;
  }function Te() {
    return !1;
  }function xe() {
    try {
      return n.activeElement;
    } catch (e) {}
  }function ke(e, t, i, n, r, o) {
    var s, a;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
      for (a in "string" != typeof i && (n = n || i, i = void 0), t) {
        ke(e, a, i, n, t[a], o);
      }return e;
    }if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = Te;else if (!r) return e;return 1 === o && (s = r, (r = function r(e) {
      return w().off(e), s.apply(this, arguments);
    }).guid = s.guid || (s.guid = w.guid++)), e.each(function () {
      w.event.add(this, t, r, n, i);
    });
  }w.event = { global: {}, add: function add(e, t, i, n, r) {
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
          g = Y.get(e);if (g) for (i.handler && (i = (o = i).handler, r = o.selector), r && w.find.matchesSelector(be, r), i.guid || (i.guid = w.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (t) {
        return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
      }), c = (t = (t || "").match(j) || [""]).length; c--;) {
        f = m = (a = Ce.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f && (d = w.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = w.event.special[f] || {}, u = w.extend({ type: f, origType: m, data: n, handler: i, guid: i.guid, selector: r, needsContext: r && w.expr.match.needsContext.test(r), namespace: p.join(".") }, o), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, n, p, s) || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), r ? h.splice(h.delegateCount++, 0, u) : h.push(u), w.event.global[f] = !0);
      }
    }, remove: function remove(e, t, i, n, r) {
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
          g = Y.hasData(e) && Y.get(e);if (g && (l = g.events)) {
        for (c = (t = (t || "").match(j) || [""]).length; c--;) {
          if (f = m = (a = Ce.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
            for (d = w.event.special[f] || {}, h = l[f = (n ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) {
              u = h[o], !r && m !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (h.splice(o, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
            }s && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || w.removeEvent(e, f, g.handle), delete l[f]);
          } else for (f in l) {
            w.event.remove(e, f + t[c], i, n, !0);
          }
        }w.isEmptyObject(l) && Y.remove(e, "handle events");
      }
    }, dispatch: function dispatch(e) {
      var t,
          i,
          n,
          r,
          o,
          s,
          a = w.event.fix(e),
          l = new Array(arguments.length),
          c = (Y.get(this, "events") || {})[a.type] || [],
          u = w.event.special[a.type] || {};for (l[0] = a, t = 1; t < arguments.length; t++) {
        l[t] = arguments[t];
      }if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
        for (s = w.event.handlers.call(this, a, c), t = 0; (r = s[t++]) && !a.isPropagationStopped();) {
          for (a.currentTarget = r.elem, i = 0; (o = r.handlers[i++]) && !a.isImmediatePropagationStopped();) {
            a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (n = ((w.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
          }
        }return u.postDispatch && u.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(e, t) {
      var i,
          n,
          r,
          o,
          s,
          a = [],
          l = t.delegateCount,
          c = e.target;if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) {
        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
          for (o = [], s = {}, i = 0; i < l; i++) {
            void 0 === s[r = (n = t[i]).selector + " "] && (s[r] = n.needsContext ? w(r, this).index(c) > -1 : w.find(r, this, null, [c]).length), s[r] && o.push(n);
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
        } } } }, w.removeEvent = function (e, t, i) {
    e.removeEventListener && e.removeEventListener(t, i);
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
        var i,
            n = e.relatedTarget,
            r = e.handleObj;return n && (n === this || w.contains(this, n)) || (e.type = r.origType, i = r.handler.apply(this, arguments), e.type = t), i;
      } };
  }), w.fn.extend({ on: function on(e, t, i, n) {
      return ke(this, e, t, i, n);
    }, one: function one(e, t, i, n) {
      return ke(this, e, t, i, n, 1);
    }, off: function off(e, t, i) {
      var n, r;if (e && e.preventDefault && e.handleObj) return n = e.handleObj, w(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
        for (r in e) {
          this.off(r, t, e[r]);
        }return this;
      }return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = Te), this.each(function () {
        w.event.remove(this, e, i, t);
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
    var i, n, r, o, s, a, l, c;if (1 === t.nodeType) {
      if (Y.hasData(e) && (o = Y.access(e), s = Y.set(t, o), c = o.events)) for (r in delete s.handle, s.events = {}, c) {
        for (i = 0, n = c[r].length; i < n; i++) {
          w.event.add(t, r, c[r][i]);
        }
      }G.hasData(e) && (a = G.access(e), l = w.extend({}, a), G.set(t, l));
    }
  }function je(e, t, i, n) {
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
      var o = e.eq(r);v && (t[0] = g.call(this, r, o.html())), je(o, t, i, n);
    });if (h && (o = (r = ye(t, e[0].ownerDocument, !1, e, n)).firstChild, 1 === r.childNodes.length && (r = o), o || n)) {
      for (l = (a = w.map(fe(r, "script"), Pe)).length; d < h; d++) {
        c = r, d !== f && (c = w.clone(c, !0, !0), l && w.merge(a, fe(c, "script"))), i.call(e[d], c, d);
      }if (l) for (u = a[a.length - 1].ownerDocument, w.map(a, Le), d = 0; d < l; d++) {
        c = a[d], de.test(c.type || "") && !Y.access(c, "globalEval") && w.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(c.src) : y(c.textContent.replace(Ie, ""), u, c));
      }
    }return e;
  }function Me(e, t, i) {
    for (var n, r = t ? w.filter(t, e) : e, o = 0; null != (n = r[o]); o++) {
      i || 1 !== n.nodeType || w.cleanData(fe(n)), n.parentNode && (i && w.contains(n.ownerDocument, n) && pe(fe(n, "script")), n.parentNode.removeChild(n));
    }return e;
  }w.extend({ htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(Se, "<$1></$2>");
    }, clone: function clone(e, t, i) {
      var n,
          r,
          o,
          s,
          a,
          l,
          c,
          u = e.cloneNode(!0),
          d = w.contains(e.ownerDocument, e);if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (s = fe(u), n = 0, r = (o = fe(e)).length; n < r; n++) {
        a = o[n], l = s[n], void 0, "input" === (c = l.nodeName.toLowerCase()) && ce.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
      }if (t) if (i) for (o = o || fe(e), s = s || fe(u), n = 0, r = o.length; n < r; n++) {
        Oe(o[n], s[n]);
      } else Oe(e, u);return (s = fe(u, "script")).length > 0 && pe(s, !d && fe(e, "script")), u;
    }, cleanData: function cleanData(e) {
      for (var t, i, n, r = w.event.special, o = 0; void 0 !== (i = e[o]); o++) {
        if (K(i)) {
          if (t = i[Y.expando]) {
            if (t.events) for (n in t.events) {
              r[n] ? w.event.remove(i, n) : w.removeEvent(i, n, t.handle);
            }i[Y.expando] = void 0;
          }i[G.expando] && (i[G.expando] = void 0);
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
            i = 0,
            n = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Ae.test(e) && !he[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = w.htmlPrefilter(e);try {
            for (; i < n; i++) {
              1 === (t = this[i] || {}).nodeType && (w.cleanData(fe(t, !1)), t.innerHTML = e);
            }t = 0;
          } catch (e) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = [];return je(this, arguments, function (t) {
        var i = this.parentNode;w.inArray(this, e) < 0 && (w.cleanData(fe(this)), i && i.replaceChild(t, this));
      }, e);
    } }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    w.fn[e] = function (e) {
      for (var i, n = [], r = w(e), o = r.length - 1, s = 0; s <= o; s++) {
        i = s === o ? this : this.clone(!0), w(r[s])[t](i), a.apply(n, i.get());
      }return this.pushStack(n);
    };
  });var He = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      qe = function qe(t) {
    var i = t.ownerDocument.defaultView;return i && i.opener || (i = e), i.getComputedStyle(t);
  },
      Fe = new RegExp(ie.join("|"), "i");function Be(e, t, i) {
    var n,
        r,
        o,
        s,
        a = e.style;return (i = i || qe(e)) && ("" !== (s = i.getPropertyValue(t) || i[t]) || w.contains(e.ownerDocument, e) || (s = w.style(e, t)), !p.pixelBoxStyles() && He.test(s) && Fe.test(t) && (n = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s;
  }function Re(e, t) {
    return { get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
      } };
  }!function () {
    function t() {
      if (u) {
        c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(c).appendChild(u);var t = e.getComputedStyle(u);r = "1%" !== t.top, l = 12 === i(t.marginLeft), u.style.right = "60%", a = 36 === i(t.right), o = 36 === i(t.width), u.style.position = "absolute", s = 36 === u.offsetWidth || "absolute", be.removeChild(c), u = null;
      }
    }function i(e) {
      return Math.round(parseFloat(e));
    }var r,
        o,
        s,
        a,
        l,
        c = n.createElement("div"),
        u = n.createElement("div");u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === u.style.backgroundClip, w.extend(p, { boxSizingReliable: function boxSizingReliable() {
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
      Ke = n.createElement("div").style;function Qe(e) {
    var t = w.cssProps[e];return t || (t = w.cssProps[e] = function (e) {
      if (e in Ke) return e;for (var t = e[0].toUpperCase() + e.slice(1), i = $e.length; i--;) {
        if ((e = $e[i] + t) in Ke) return e;
      }
    }(e) || e), t;
  }function Ye(e, t, i) {
    var n = te.exec(t);return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t;
  }function Ge(e, t, i, n, r, o) {
    var s = "width" === t ? 1 : 0,
        a = 0,
        l = 0;if (i === (n ? "border" : "content")) return 0;for (; s < 4; s += 2) {
      "margin" === i && (l += w.css(e, i + ie[s], !0, r)), n ? ("content" === i && (l -= w.css(e, "padding" + ie[s], !0, r)), "margin" !== i && (l -= w.css(e, "border" + ie[s] + "Width", !0, r))) : (l += w.css(e, "padding" + ie[s], !0, r), "padding" !== i ? l += w.css(e, "border" + ie[s] + "Width", !0, r) : a += w.css(e, "border" + ie[s] + "Width", !0, r));
    }return !n && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5))), l;
  }function Xe(e, t, i) {
    var n = qe(e),
        r = Be(e, t, n),
        o = "border-box" === w.css(e, "boxSizing", !1, n),
        s = o;if (He.test(r)) {
      if (!i) return r;r = "auto";
    }return s = s && (p.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === w.css(e, "display", !1, n)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + Ge(e, t, i || (o ? "border" : "content"), s, n, r) + "px";
  }function Je(e, t, i, n, r) {
    return new Je.prototype.init(e, t, i, n, r);
  }w.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var i = Be(e, "opacity");return "" === i ? "1" : i;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(e, t, i, n) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
            o,
            s,
            a = $(t),
            l = We.test(t),
            c = e.style;if (l || (t = Qe(a)), s = w.cssHooks[t] || w.cssHooks[a], void 0 === i) return s && "get" in s && void 0 !== (r = s.get(e, !1, n)) ? r : c[t];"string" === (o = typeof i === "undefined" ? "undefined" : _typeof(i)) && (r = te.exec(i)) && r[1] && (i = oe(e, t, r), o = "number"), null != i && i == i && ("number" === o && (i += r && r[3] || (w.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (i = s.set(e, i, n)) || (l ? c.setProperty(t, i) : c[t] = i));
      }
    }, css: function css(e, t, i, n) {
      var r,
          o,
          s,
          a = $(t);return We.test(t) || (t = Qe(a)), (s = w.cssHooks[t] || w.cssHooks[a]) && "get" in s && (r = s.get(e, !0, i)), void 0 === r && (r = Be(e, t, n)), "normal" === r && t in Ve && (r = Ve[t]), "" === i || i ? (o = parseFloat(r), !0 === i || isFinite(o) ? o || 0 : r) : r;
    } }), w.each(["height", "width"], function (e, t) {
    w.cssHooks[t] = { get: function get(e, i, n) {
        if (i) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Xe(e, t, n) : re(e, Ue, function () {
          return Xe(e, t, n);
        });
      }, set: function set(e, i, n) {
        var r,
            o = qe(e),
            s = "border-box" === w.css(e, "boxSizing", !1, o),
            a = n && Ge(e, t, n, s, o);return s && p.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ge(e, t, "border", !1, o) - .5)), a && (r = te.exec(i)) && "px" !== (r[3] || "px") && (e.style[t] = i, i = w.css(e, t)), Ye(0, i, a);
      } };
  }), w.cssHooks.marginLeft = Re(p.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    w.cssHooks[e + t] = { expand: function expand(i) {
        for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) {
          r[e + ie[n] + t] = o[n] || o[n - 2] || o[0];
        }return r;
      } }, "margin" !== e && (w.cssHooks[e + t].set = Ye);
  }), w.fn.extend({ css: function css(e, t) {
      return z(this, function (e, t, i) {
        var n,
            r,
            o = {},
            s = 0;if (Array.isArray(t)) {
          for (n = qe(e), r = t.length; s < r; s++) {
            o[t[s]] = w.css(e, t[s], !1, n);
          }return o;
        }return void 0 !== i ? w.style(e, t, i) : w.css(e, t);
      }, e, t, arguments.length > 1);
    } }), w.Tween = Je, Je.prototype = { constructor: Je, init: function init(e, t, i, n, r, o) {
      this.elem = e, this.prop = i, this.easing = r || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = o || (w.cssNumber[i] ? "" : "px");
    }, cur: function cur() {
      var e = Je.propHooks[this.prop];return e && e.get ? e.get(this) : Je.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          i = Je.propHooks[this.prop];return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Je.propHooks._default.set(this), this;
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
      it = /queueHooks$/;function nt() {
    et && (!1 === n.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(nt) : e.setTimeout(nt, w.fx.interval), w.fx.tick());
  }function rt() {
    return e.setTimeout(function () {
      Ze = void 0;
    }), Ze = Date.now();
  }function ot(e, t) {
    var i,
        n = 0,
        r = { height: e };for (t = t ? 1 : 0; n < 4; n += 2 - t) {
      r["margin" + (i = ie[n])] = r["padding" + i] = e;
    }return t && (r.opacity = r.width = e), r;
  }function st(e, t, i) {
    for (var n, r = (at.tweeners[t] || []).concat(at.tweeners["*"]), o = 0, s = r.length; o < s; o++) {
      if (n = r[o].call(i, t, e)) return n;
    }
  }function at(e, t, i) {
    var n,
        r,
        o = 0,
        s = at.prefilters.length,
        a = w.Deferred().always(function () {
      delete l.elem;
    }),
        l = function l() {
      if (r) return !1;for (var t = Ze || rt(), i = Math.max(0, c.startTime + c.duration - t), n = 1 - (i / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) {
        c.tweens[o].run(n);
      }return a.notifyWith(e, [c, n, i]), n < 1 && s ? i : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
    },
        c = a.promise({ elem: e, props: w.extend({}, t), opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, i), originalProperties: t, originalOptions: i, startTime: Ze || rt(), duration: i.duration, tweens: [], createTween: function createTween(t, i) {
        var n = w.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);return c.tweens.push(n), n;
      }, stop: function stop(t) {
        var i = 0,
            n = t ? c.tweens.length : 0;if (r) return this;for (r = !0; i < n; i++) {
          c.tweens[i].run(1);
        }return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
      } }),
        u = c.props;for (!function (e, t) {
      var i, n, r, o, s;for (i in e) {
        if (r = t[n = $(i)], o = e[i], Array.isArray(o) && (r = o[1], o = e[i] = o[0]), i !== n && (e[n] = o, delete e[i]), (s = w.cssHooks[n]) && ("expand" in s)) for (i in o = s.expand(o), delete e[n], o) {
          (i in e) || (e[i] = o[i], t[i] = r);
        } else t[n] = r;
      }
    }(u, c.opts.specialEasing); o < s; o++) {
      if (n = at.prefilters[o].call(c, e, u, c.opts)) return m(n.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
    }return w.map(u, st, c), m(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), w.fx.timer(w.extend(l, { elem: e, anim: c, queue: c.opts.queue })), c;
  }w.Animation = w.extend(at, { tweeners: { "*": [function (e, t) {
        var i = this.createTween(e, t);return oe(i.elem, e, te.exec(t), i), i;
      }] }, tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(j);for (var i, n = 0, r = e.length; n < r; n++) {
        i = e[n], at.tweeners[i] = at.tweeners[i] || [], at.tweeners[i].unshift(t);
      }
    }, prefilters: [function (e, t, i) {
      var n,
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
          m = e.nodeType && ne(e),
          g = Y.get(e, "fxshow");for (n in i.queue || (null == (s = w._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
        s.unqueued || a();
      }), s.unqueued++, h.always(function () {
        h.always(function () {
          s.unqueued--, w.queue(e, "fx").length || s.empty.fire();
        });
      })), t) {
        if (r = t[n], tt.test(r)) {
          if (delete t[n], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
            if ("show" !== r || !g || void 0 === g[n]) continue;m = !0;
          }f[n] = g && g[n] || w.style(e, n);
        }
      }if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(f)) for (n in d && 1 === e.nodeType && (i.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = g && g.display) && (c = Y.get(e, "display")), "none" === (u = w.css(e, "display")) && (c ? u = c : (le([e], !0), c = e.style.display || c, u = w.css(e, "display"), le([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === w.css(e, "float") && (l || (h.done(function () {
        p.display = c;
      }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), i.overflow && (p.overflow = "hidden", h.always(function () {
        p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2];
      })), l = !1, f) {
        l || (g ? "hidden" in g && (m = g.hidden) : g = Y.access(e, "fxshow", { display: c }), o && (g.hidden = !m), m && le([e], !0), h.done(function () {
          for (n in m || le([e]), Y.remove(e, "fxshow"), f) {
            w.style(e, n, f[n]);
          }
        })), l = st(m ? g[n] : 0, n, h), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0));
      }
    }], prefilter: function prefilter(e, t) {
      t ? at.prefilters.unshift(e) : at.prefilters.push(e);
    } }), w.speed = function (e, t, i) {
    var n = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? w.extend({}, e) : { complete: i || !i && t || m(e) && e, duration: e, easing: i && t || t && !m(t) && t };return w.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in w.fx.speeds ? n.duration = w.fx.speeds[n.duration] : n.duration = w.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
      m(n.old) && n.old.call(this), n.queue && w.dequeue(this, n.queue);
    }, n;
  }, w.fn.extend({ fadeTo: function fadeTo(e, t, i, n) {
      return this.filter(ne).css("opacity", 0).show().end().animate({ opacity: t }, e, i, n);
    }, animate: function animate(e, t, i, n) {
      var r = w.isEmptyObject(e),
          o = w.speed(t, i, n),
          s = function s() {
        var t = at(this, w.extend({}, e), o);(r || Y.get(this, "finish")) && t.stop(!0);
      };return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
    }, stop: function stop(e, t, i) {
      var n = function n(e) {
        var t = e.stop;delete e.stop, t(i);
      };return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            r = null != e && e + "queueHooks",
            o = w.timers,
            s = Y.get(this);if (r) s[r] && s[r].stop && n(s[r]);else for (r in s) {
          s[r] && s[r].stop && it.test(r) && n(s[r]);
        }for (r = o.length; r--;) {
          o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(i), t = !1, o.splice(r, 1));
        }!t && i || w.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            i = Y.get(this),
            n = i[e + "queue"],
            r = i[e + "queueHooks"],
            o = w.timers,
            s = n ? n.length : 0;for (i.finish = !0, w.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }for (t = 0; t < s; t++) {
          n[t] && n[t].finish && n[t].finish.call(this);
        }delete i.finish;
      });
    } }), w.each(["toggle", "show", "hide"], function (e, t) {
    var i = w.fn[t];w.fn[t] = function (e, n, r) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ot(t, !0), e, n, r);
    };
  }), w.each({ slideDown: ot("show"), slideUp: ot("hide"), slideToggle: ot("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    w.fn[e] = function (e, i, n) {
      return this.animate(t, e, i, n);
    };
  }), w.timers = [], w.fx.tick = function () {
    var e,
        t = 0,
        i = w.timers;for (Ze = Date.now(); t < i.length; t++) {
      (e = i[t])() || i[t] !== e || i.splice(t--, 1);
    }i.length || w.fx.stop(), Ze = void 0;
  }, w.fx.timer = function (e) {
    w.timers.push(e), w.fx.start();
  }, w.fx.interval = 13, w.fx.start = function () {
    et || (et = !0, nt());
  }, w.fx.stop = function () {
    et = null;
  }, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function (t, i) {
    return t = w.fx && w.fx.speeds[t] || t, i = i || "fx", this.queue(i, function (i, n) {
      var r = e.setTimeout(i, t);n.stop = function () {
        e.clearTimeout(r);
      };
    });
  }, function () {
    var e = n.createElement("input"),
        t = n.createElement("select").appendChild(n.createElement("option"));e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = n.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value;
  }();var lt,
      ct = w.expr.attrHandle;w.fn.extend({ attr: function attr(e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    } }), w.extend({ attr: function attr(e, t, i) {
      var n,
          r,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? w.prop(e, t, i) : (1 === o && w.isXMLDoc(e) || (r = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? lt : void 0)), void 0 !== i ? null === i ? void w.removeAttr(e, t) : r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : r && "get" in r && null !== (n = r.get(e, t)) ? n : null == (n = w.find.attr(e, t)) ? void 0 : n);
    }, attrHooks: { type: { set: function set(e, t) {
          if (!p.radioValue && "radio" === t && S(e, "input")) {
            var i = e.value;return e.setAttribute("type", t), i && (e.value = i), t;
          }
        } } }, removeAttr: function removeAttr(e, t) {
      var i,
          n = 0,
          r = t && t.match(j);if (r && 1 === e.nodeType) for (; i = r[n++];) {
        e.removeAttribute(i);
      }
    } }), lt = { set: function set(e, t, i) {
      return !1 === t ? w.removeAttr(e, i) : e.setAttribute(i, i), i;
    } }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var i = ct[t] || w.find.attr;ct[t] = function (e, t, n) {
      var r,
          o,
          s = t.toLowerCase();return n || (o = ct[s], ct[s] = r, r = null != i(e, t, n) ? s : null, ct[s] = o), r;
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
    } }), w.extend({ prop: function prop(e, t, i) {
      var n,
          r,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, r = w.propHooks[t]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : e[t] = i : r && "get" in r && null !== (n = r.get(e, t)) ? n : e[t];
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
          i,
          n,
          r,
          o,
          s,
          a,
          l = 0;if (m(e)) return this.each(function (t) {
        w(this).addClass(e.call(this, t, ft(this)));
      });if ((t = pt(e)).length) for (; i = this[l++];) {
        if (r = ft(i), n = 1 === i.nodeType && " " + ht(r) + " ") {
          for (s = 0; o = t[s++];) {
            n.indexOf(" " + o + " ") < 0 && (n += o + " ");
          }r !== (a = ht(n)) && i.setAttribute("class", a);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          i,
          n,
          r,
          o,
          s,
          a,
          l = 0;if (m(e)) return this.each(function (t) {
        w(this).removeClass(e.call(this, t, ft(this)));
      });if (!arguments.length) return this.attr("class", "");if ((t = pt(e)).length) for (; i = this[l++];) {
        if (r = ft(i), n = 1 === i.nodeType && " " + ht(r) + " ") {
          for (s = 0; o = t[s++];) {
            for (; n.indexOf(" " + o + " ") > -1;) {
              n = n.replace(" " + o + " ", " ");
            }
          }r !== (a = ht(n)) && i.setAttribute("class", a);
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var i = typeof e === "undefined" ? "undefined" : _typeof(e),
          n = "string" === i || Array.isArray(e);return "boolean" == typeof t && n ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each(function (i) {
        w(this).toggleClass(e.call(this, i, ft(this), t), t);
      }) : this.each(function () {
        var t, r, o, s;if (n) for (r = 0, o = w(this), s = pt(e); t = s[r++];) {
          o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
        } else void 0 !== e && "boolean" !== i || ((t = ft(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(e) {
      var t,
          i,
          n = 0;for (t = " " + e + " "; i = this[n++];) {
        if (1 === i.nodeType && (" " + ht(ft(i)) + " ").indexOf(t) > -1) return !0;
      }return !1;
    } });var mt = /\r/g;w.fn.extend({ val: function val(e) {
      var t,
          i,
          n,
          r = this[0];return arguments.length ? (n = m(e), this.each(function (i) {
        var r;1 === this.nodeType && (null == (r = n ? e.call(this, i, w(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = w.map(r, function (e) {
          return null == e ? "" : e + "";
        })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r));
      })) : r ? (t = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(r, "value")) ? i : "string" == typeof (i = r.value) ? i.replace(mt, "") : null == i ? "" : i : void 0;
    } }), w.extend({ valHooks: { option: { get: function get(e) {
          var t = w.find.attr(e, "value");return null != t ? t : ht(w.text(e));
        } }, select: { get: function get(e) {
          var t,
              i,
              n,
              r = e.options,
              o = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              l = s ? o + 1 : r.length;for (n = o < 0 ? l : s ? o : 0; n < l; n++) {
            if (((i = r[n]).selected || n === o) && !i.disabled && (!i.parentNode.disabled || !S(i.parentNode, "optgroup"))) {
              if (t = w(i).val(), s) return t;a.push(t);
            }
          }return a;
        }, set: function set(e, t) {
          for (var i, n, r = e.options, o = w.makeArray(t), s = r.length; s--;) {
            ((n = r[s]).selected = w.inArray(w.valHooks.option.get(n), o) > -1) && (i = !0);
          }return i || (e.selectedIndex = -1), o;
        } } } }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = { set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
      } }, p.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), p.focusin = "onfocusin" in e;var gt = /^(?:focusinfocus|focusoutblur)$/,
      vt = function vt(e) {
    e.stopPropagation();
  };w.extend(w.event, { trigger: function trigger(t, i, r, o) {
      var s,
          a,
          l,
          c,
          u,
          h,
          f,
          p,
          v = [r || n],
          y = d.call(t, "type") ? t.type : t,
          b = d.call(t, "namespace") ? t.namespace.split(".") : [];if (a = p = l = r = r || n, 3 !== r.nodeType && 8 !== r.nodeType && !gt.test(y + w.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(), b.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t)).isTrigger = o ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), i = null == i ? [t] : w.makeArray(i, [t]), f = w.event.special[y] || {}, o || !f.trigger || !1 !== f.trigger.apply(r, i))) {
        if (!o && !f.noBubble && !g(r)) {
          for (c = f.delegateType || y, gt.test(c + y) || (a = a.parentNode); a; a = a.parentNode) {
            v.push(a), l = a;
          }l === (r.ownerDocument || n) && v.push(l.defaultView || l.parentWindow || e);
        }for (s = 0; (a = v[s++]) && !t.isPropagationStopped();) {
          p = a, t.type = s > 1 ? c : f.bindType || y, (h = (Y.get(a, "events") || {})[t.type] && Y.get(a, "handle")) && h.apply(a, i), (h = u && a[u]) && h.apply && K(a) && (t.result = h.apply(a, i), !1 === t.result && t.preventDefault());
        }return t.type = y, o || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(v.pop(), i) || !K(r) || u && m(r[y]) && !g(r) && ((l = r[u]) && (r[u] = null), w.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, vt), r[y](), t.isPropagationStopped() && p.removeEventListener(y, vt), w.event.triggered = void 0, l && (r[u] = l)), t.result;
      }
    }, simulate: function simulate(e, t, i) {
      var n = w.extend(new w.Event(), i, { type: e, isSimulated: !0 });w.event.trigger(n, null, t);
    } }), w.fn.extend({ trigger: function trigger(e, t) {
      return this.each(function () {
        w.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      var i = this[0];if (i) return w.event.trigger(e, t, i, !0);
    } }), p.focusin || w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var i = function i(e) {
      w.event.simulate(t, e.target, w.event.fix(e));
    };w.event.special[t] = { setup: function setup() {
        var n = this.ownerDocument || this,
            r = Y.access(n, t);r || n.addEventListener(e, i, !0), Y.access(n, t, (r || 0) + 1);
      }, teardown: function teardown() {
        var n = this.ownerDocument || this,
            r = Y.access(n, t) - 1;r ? Y.access(n, t, r) : (n.removeEventListener(e, i, !0), Y.remove(n, t));
      } };
  });var yt = e.location,
      bt = Date.now(),
      wt = /\?/;w.parseXML = function (t) {
    var i;if (!t || "string" != typeof t) return null;try {
      i = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      i = void 0;
    }return i && !i.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), i;
  };var Et = /\[\]$/,
      Ct = /\r?\n/g,
      _t = /^(?:submit|button|image|reset|file)$/i,
      Tt = /^(?:input|select|textarea|keygen)/i;function xt(e, t, i, n) {
    var r;if (Array.isArray(t)) w.each(t, function (t, r) {
      i || Et.test(e) ? n(e, r) : xt(e + "[" + ("object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && null != r ? t : "") + "]", r, i, n);
    });else if (i || "object" !== b(t)) n(e, t);else for (r in t) {
      xt(e + "[" + r + "]", t[r], i, n);
    }
  }w.param = function (e, t) {
    var i,
        n = [],
        r = function r(e, t) {
      var i = m(t) ? t() : t;n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i);
    };if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      r(this.name, this.value);
    });else for (i in e) {
      xt(i, e[i], t, r);
    }return n.join("&");
  }, w.fn.extend({ serialize: function serialize() {
      return w.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = w.prop(this, "elements");return e ? w.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !w(this).is(":disabled") && Tt.test(this.nodeName) && !_t.test(e) && (this.checked || !ce.test(e));
      }).map(function (e, t) {
        var i = w(this).val();return null == i ? null : Array.isArray(i) ? w.map(i, function (e) {
          return { name: t.name, value: e.replace(Ct, "\r\n") };
        }) : { name: t.name, value: i.replace(Ct, "\r\n") };
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
      jt = n.createElement("a");function Mt(e) {
    return function (t, i) {
      "string" != typeof t && (i = t, t = "*");var n,
          r = 0,
          o = t.toLowerCase().match(j) || [];if (m(i)) for (; n = o[r++];) {
        "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i);
      }
    };
  }function Ht(e, t, i, n) {
    var r = {},
        o = e === Lt;function s(a) {
      var l;return r[a] = !0, w.each(e[a] || [], function (e, a) {
        var c = a(t, i, n);return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1);
      }), l;
    }return s(t.dataTypes[0]) || !r["*"] && s("*");
  }function qt(e, t) {
    var i,
        n,
        r = w.ajaxSettings.flatOptions || {};for (i in t) {
      void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
    }return n && w.extend(!0, e, n), e;
  }jt.href = yt.href, w.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: yt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Ot, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? qt(qt(e, w.ajaxSettings), t) : qt(w.ajaxSettings, e);
    }, ajaxPrefilter: Mt(Pt), ajaxTransport: Mt(Lt), ajax: function ajax(t, i) {
      "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (i = t, t = void 0), i = i || {};var r,
          o,
          s,
          a,
          l,
          c,
          u,
          d,
          h,
          f,
          p = w.ajaxSetup({}, i),
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
        } };if (v.promise(T), p.url = ((t || p.url || yt.href) + "").replace(Nt, yt.protocol + "//"), p.type = i.method || i.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(j) || [""], null == p.crossDomain) {
        c = n.createElement("a");try {
          c.href = p.url, c.href = c.href, p.crossDomain = jt.protocol + "//" + jt.host != c.protocol + "//" + c.host;
        } catch (e) {
          p.crossDomain = !0;
        }
      }if (p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), Ht(Pt, p, i, T), u) return T;for (h in (d = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !It.test(p.type), o = p.url.replace(St, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(kt, "+")) : (f = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (wt.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(At, "$1"), f = (wt.test(o) ? "&" : "?") + "_=" + bt++ + f), p.url = o + f), p.ifModified && (w.lastModified[o] && T.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && T.setRequestHeader("If-None-Match", w.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || i.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : p.accepts["*"]), p.headers) {
        T.setRequestHeader(h, p.headers[h]);
      }if (p.beforeSend && (!1 === p.beforeSend.call(m, T, p) || u)) return T.abort();if (_ = "abort", y.add(p.complete), T.done(p.success), T.fail(p.error), r = Ht(Lt, p, i, T)) {
        if (T.readyState = 1, d && g.trigger("ajaxSend", [T, p]), u) return T;p.async && p.timeout > 0 && (l = e.setTimeout(function () {
          T.abort("timeout");
        }, p.timeout));try {
          u = !1, r.send(E, x);
        } catch (e) {
          if (u) throw e;x(-1, e);
        }
      } else x(-1, "No Transport");function x(t, i, n, a) {
        var c,
            h,
            f,
            E,
            C,
            _ = i;u || (u = !0, l && e.clearTimeout(l), r = void 0, s = a || "", T.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, n && (E = function (e, t, i) {
          for (var n, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0];) {
            l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
          }if (n) for (r in a) {
            if (a[r] && a[r].test(n)) {
              l.unshift(r);break;
            }
          }if (l[0] in i) o = l[0];else {
            for (r in i) {
              if (!l[0] || e.converters[r + " " + l[0]]) {
                o = r;break;
              }s || (s = r);
            }o = o || s;
          }if (o) return o !== l[0] && l.unshift(o), i[o];
        }(p, T, n)), E = function (e, t, i, n) {
          var r,
              o,
              s,
              a,
              l,
              c = {},
              u = e.dataTypes.slice();if (u[1]) for (s in e.converters) {
            c[s.toLowerCase()] = e.converters[s];
          }for (o = u.shift(); o;) {
            if (e.responseFields[o] && (i[e.responseFields[o]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
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
        }(p, E, T, c), c ? (p.ifModified && ((C = T.getResponseHeader("Last-Modified")) && (w.lastModified[o] = C), (C = T.getResponseHeader("etag")) && (w.etag[o] = C)), 204 === t || "HEAD" === p.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = E.state, h = E.data, c = !(f = E.error))) : (f = _, !t && _ || (_ = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (i || _) + "", c ? v.resolveWith(m, [h, _, T]) : v.rejectWith(m, [T, _, f]), T.statusCode(b), b = void 0, d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [T, p, c ? h : f]), y.fireWith(m, [T, _]), d && (g.trigger("ajaxComplete", [T, p]), --w.active || w.event.trigger("ajaxStop")));
      }return T;
    }, getJSON: function getJSON(e, t, i) {
      return w.get(e, t, i, "json");
    }, getScript: function getScript(e, t) {
      return w.get(e, void 0, t, "script");
    } }), w.each(["get", "post"], function (e, t) {
    w[t] = function (e, i, n, r) {
      return m(i) && (r = r || n, n = i, i = void 0), w.ajax(w.extend({ url: e, type: t, dataType: r, data: i, success: n }, w.isPlainObject(e) && e));
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
            i = t.contents();i.length ? i.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = m(e);return this.each(function (i) {
        w(this).wrapAll(t ? e.call(this, i) : e);
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
    var _i, n;if (p.cors || Bt && !t.crossDomain) return { send: function send(r, o) {
        var s,
            a = t.xhr();if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) {
          a[s] = t.xhrFields[s];
        }for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) {
          a.setRequestHeader(s, r[s]);
        }_i = function i(e) {
          return function () {
            _i && (_i = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ft[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
          };
        }, a.onload = _i(), n = a.onerror = a.ontimeout = _i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function () {
          4 === a.readyState && e.setTimeout(function () {
            _i && n();
          });
        }, _i = _i("abort");try {
          a.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_i) throw e;
        }
      }, abort: function abort() {
        _i && _i();
      } };
  }), w.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), w.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
        return w.globalEval(e), e;
      } } }), w.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), w.ajaxTransport("script", function (e) {
    var t, _i2;if (e.crossDomain) return { send: function send(r, o) {
        t = w("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _i2 = function i(e) {
          t.remove(), _i2 = null, e && o("error" === e.type ? 404 : 200, e.type);
        }), n.head.appendChild(t[0]);
      }, abort: function abort() {
        _i2 && _i2();
      } };
  });var Rt,
      zt = [],
      Wt = /(=)\?(?=&|$)|\?\?/;w.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = zt.pop() || w.expando + "_" + bt++;return this[e] = !0, e;
    } }), w.ajaxPrefilter("json jsonp", function (t, i, n) {
    var r,
        o,
        s,
        a = !1 !== t.jsonp && (Wt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(t.data) && "data");if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Wt, "$1" + r) : !1 !== t.jsonp && (t.url += (wt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
      return s || w.error(r + " was not called"), s[0];
    }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
      s = arguments;
    }, n.always(function () {
      void 0 === o ? w(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = i.jsonpCallback, zt.push(r)), s && m(o) && o(s[0]), s = o = void 0;
    }), "script";
  }), p.createHTMLDocument = ((Rt = n.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Rt.childNodes.length), w.parseHTML = function (e, t, i) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (p.createHTMLDocument ? ((r = (t = n.implementation.createHTMLDocument("")).createElement("base")).href = n.location.href, t.head.appendChild(r)) : t = n), o = A.exec(e), s = !i && [], o ? [t.createElement(o[1])] : (o = ye([e], t, s), s && s.length && w(s).remove(), w.merge([], o.childNodes)));var r, o, s;
  }, w.fn.load = function (e, t, i) {
    var n,
        r,
        o,
        s = this,
        a = e.indexOf(" ");return a > -1 && (n = ht(e.slice(a)), e = e.slice(0, a)), m(t) ? (i = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (r = "POST"), s.length > 0 && w.ajax({ url: e, type: r || "GET", dataType: "html", data: t }).done(function (e) {
      o = arguments, s.html(n ? w("<div>").append(w.parseHTML(e)).find(n) : e);
    }).always(i && function (e, t) {
      s.each(function () {
        i.apply(this, o || [e.responseText, t, e]);
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
  }, w.offset = { setOffset: function setOffset(e, t, i) {
      var n,
          r,
          o,
          s,
          a,
          l,
          c = w.css(e, "position"),
          u = w(e),
          d = {};"static" === c && (e.style.position = "relative"), a = u.offset(), o = w.css(e, "top"), l = w.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (n = u.position()).top, r = n.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), m(t) && (t = t.call(e, i, w.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : u.css(d);
    } }, w.fn.extend({ offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        w.offset.setOffset(this, e, t);
      });var t,
          i,
          n = this[0];return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, { top: t.top + i.pageYOffset, left: t.left + i.pageXOffset }) : { top: 0, left: 0 } : void 0;
    }, position: function position() {
      if (this[0]) {
        var e,
            t,
            i,
            n = this[0],
            r = { top: 0, left: 0 };if ("fixed" === w.css(n, "position")) t = n.getBoundingClientRect();else {
          for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === w.css(e, "position");) {
            e = e.parentNode;
          }e && e !== n && 1 === e.nodeType && ((r = w(e).offset()).top += w.css(e, "borderTopWidth", !0), r.left += w.css(e, "borderLeftWidth", !0));
        }return { top: t.top - r.top - w.css(n, "marginTop", !0), left: t.left - r.left - w.css(n, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === w.css(e, "position");) {
          e = e.offsetParent;
        }return e || be;
      });
    } }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
    var i = "pageYOffset" === t;w.fn[e] = function (n) {
      return z(this, function (e, n, r) {
        var o;if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[n];o ? o.scrollTo(i ? o.pageXOffset : r, i ? r : o.pageYOffset) : e[n] = r;
      }, e, n, arguments.length);
    };
  }), w.each(["top", "left"], function (e, t) {
    w.cssHooks[t] = Re(p.pixelPosition, function (e, i) {
      if (i) return i = Be(e, t), He.test(i) ? w(e).position()[t] + "px" : i;
    });
  }), w.each({ Height: "height", Width: "width" }, function (e, t) {
    w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (i, n) {
      w.fn[n] = function (r, o) {
        var s = arguments.length && (i || "boolean" != typeof r),
            a = i || (!0 === r || !0 === o ? "margin" : "border");return z(this, function (t, i, r) {
          var o;return g(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? w.css(t, i, a) : w.style(t, i, r, a);
        }, t, s ? r : void 0, s);
      };
    });
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    w.fn[t] = function (e, i) {
      return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t);
    };
  }), w.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    } }), w.fn.extend({ bind: function bind(e, t, i) {
      return this.on(e, null, t, i);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, i, n) {
      return this.on(t, e, i, n);
    }, undelegate: function undelegate(e, t, i) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i);
    } }), w.proxy = function (e, t) {
    var i, n, r;if ("string" == typeof t && (i = e[t], t = e, e = i), m(e)) return n = o.call(arguments, 2), (r = function r() {
      return e.apply(t || this, n.concat(o.call(arguments)));
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
  for (var e = "undefined" != typeof window && "undefined" != typeof document, t = ["Edge", "Trident", "Firefox"], i = 0, n = 0; n < t.length; n += 1) {
    if (e && navigator.userAgent.indexOf(t[n]) >= 0) {
      i = 1;break;
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
      }, i));
    };
  };function o(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }function s(e, t) {
    if (1 !== e.nodeType) return [];var i = getComputedStyle(e, null);return t ? i[t] : i;
  }function a(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }function l(e) {
    if (!e) return document.body;switch (e.nodeName) {case "HTML":case "BODY":
        return e.ownerDocument.body;case "#document":
        return e.body;}var t = s(e),
        i = t.overflow,
        n = t.overflowX,
        r = t.overflowY;return (/(auto|scroll|overlay)/.test(i + r + n) ? e : l(a(e))
    );
  }var c = e && !(!window.MSInputMethodContext || !document.documentMode),
      u = e && /MSIE 10/.test(navigator.userAgent);function d(e) {
    return 11 === e ? c : 10 === e ? u : c || u;
  }function h(e) {
    if (!e) return document.documentElement;for (var t = d(10) ? document.body : null, i = e.offsetParent; i === t && e.nextElementSibling;) {
      i = (e = e.nextElementSibling).offsetParent;
    }var n = i && i.nodeName;return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(i.nodeName) && "static" === s(i, "position") ? h(i) : i : e ? e.ownerDocument.documentElement : document.documentElement;
  }function f(e) {
    return null !== e.parentNode ? f(e.parentNode) : e;
  }function p(e, t) {
    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;var i = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        n = i ? e : t,
        r = i ? t : e,
        o = document.createRange();o.setStart(n, 0), o.setEnd(r, 0);var s,
        a,
        l = o.commonAncestorContainer;if (e !== l && t !== l || n.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && h(s.firstElementChild) !== s ? h(l) : l;var c = f(e);return c.host ? p(c.host, t) : p(e, f(t).host);
  }function m(e) {
    var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
        i = e.nodeName;if ("BODY" === i || "HTML" === i) {
      var n = e.ownerDocument.documentElement;return (e.ownerDocument.scrollingElement || n)[t];
    }return e[t];
  }function g(e, t) {
    var i = "x" === t ? "Left" : "Top",
        n = "Left" === i ? "Right" : "Bottom";return parseFloat(e["border" + i + "Width"], 10) + parseFloat(e["border" + n + "Width"], 10);
  }function v(e, t, i, n) {
    return Math.max(t["offset" + e], t["scroll" + e], i["client" + e], i["offset" + e], i["scroll" + e], d(10) ? i["offset" + e] + n["margin" + ("Height" === e ? "Top" : "Left")] + n["margin" + ("Height" === e ? "Bottom" : "Right")] : 0);
  }function y() {
    var e = document.body,
        t = document.documentElement,
        i = d(10) && getComputedStyle(t);return { height: v("Height", e, t, i), width: v("Width", e, t, i) };
  }var b = function b(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  },
      w = function () {
    function e(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }return function (t, i, n) {
      return i && e(t.prototype, i), n && e(t, n), t;
    };
  }(),
      E = function E(e, t, i) {
    return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
  },
      C = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];for (var n in i) {
        Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
      }
    }return e;
  };function _(e) {
    return C({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }function T(e) {
    var t = {};try {
      if (d(10)) {
        t = e.getBoundingClientRect();var i = m(e, "top"),
            n = m(e, "left");t.top += i, t.left += n, t.bottom += i, t.right += n;
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
    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = d(10),
        r = "HTML" === t.nodeName,
        o = T(e),
        a = T(t),
        c = l(e),
        u = s(t),
        h = parseFloat(u.borderTopWidth, 10),
        f = parseFloat(u.borderLeftWidth, 10);i && "HTML" === t.nodeName && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));var p = _({ top: o.top - a.top - h, left: o.left - a.left - f, width: o.width, height: o.height });if (p.marginTop = 0, p.marginLeft = 0, !n && r) {
      var g = parseFloat(u.marginTop, 10),
          v = parseFloat(u.marginLeft, 10);p.top -= h - g, p.bottom -= h - g, p.left -= f - v, p.right -= f - v, p.marginTop = g, p.marginLeft = v;
    }return (n && !i ? t.contains(c) : t === c && "BODY" !== c.nodeName) && (p = function (e, t) {
      var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          n = m(t, "top"),
          r = m(t, "left"),
          o = i ? -1 : 1;return e.top += n * o, e.bottom += n * o, e.left += r * o, e.right += r * o, e;
    }(p, t)), p;
  }function k(e) {
    if (!e || !e.parentElement || d()) return document.documentElement;for (var t = e.parentElement; t && "none" === s(t, "transform");) {
      t = t.parentElement;
    }return t || document.documentElement;
  }function S(e, t, i, n) {
    var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        o = { top: 0, left: 0 },
        c = r ? k(e) : p(e, t);if ("viewport" === n) o = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          i = e.ownerDocument.documentElement,
          n = x(e, i),
          r = Math.max(i.clientWidth, window.innerWidth || 0),
          o = Math.max(i.clientHeight, window.innerHeight || 0),
          s = t ? 0 : m(i),
          a = t ? 0 : m(i, "left");return _({ top: s - n.top + n.marginTop, left: a - n.left + n.marginLeft, width: r, height: o });
    }(c, r);else {
      var u = void 0;"scrollParent" === n ? "BODY" === (u = l(a(t))).nodeName && (u = e.ownerDocument.documentElement) : u = "window" === n ? e.ownerDocument.documentElement : n;var d = x(u, c, r);if ("HTML" !== u.nodeName || function e(t) {
        var i = t.nodeName;return "BODY" !== i && "HTML" !== i && ("fixed" === s(t, "position") || e(a(t)));
      }(c)) o = d;else {
        var h = y(),
            f = h.height,
            g = h.width;o.top += d.top - d.marginTop, o.bottom = f + d.top, o.left += d.left - d.marginLeft, o.right = g + d.left;
      }
    }return o.left += i, o.top += i, o.right -= i, o.bottom -= i, o;
  }function A(e, t, i, n, r) {
    var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;if (-1 === e.indexOf("auto")) return e;var s = S(i, n, o, r),
        a = { top: { width: s.width, height: t.top - s.top }, right: { width: s.right - t.right, height: s.height }, bottom: { width: s.width, height: s.bottom - t.bottom }, left: { width: t.left - s.left, height: s.height } },
        l = Object.keys(a).map(function (e) {
      return C({ key: e }, a[e], { area: (t = a[e], t.width * t.height) });var t;
    }).sort(function (e, t) {
      return t.area - e.area;
    }),
        c = l.filter(function (e) {
      var t = e.width,
          n = e.height;return t >= i.clientWidth && n >= i.clientHeight;
    }),
        u = c.length > 0 ? c[0].key : l[0].key,
        d = e.split("-")[1];return u + (d ? "-" + d : "");
  }function D(e, t, i) {
    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;return x(i, n ? k(t) : p(t, i), n);
  }function I(e) {
    var t = getComputedStyle(e),
        i = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
        n = parseFloat(t.marginLeft) + parseFloat(t.marginRight);return { width: e.offsetWidth + n, height: e.offsetHeight + i };
  }function N(e) {
    var t = { left: "right", right: "left", bottom: "top", top: "bottom" };return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }function P(e, t, i) {
    i = i.split("-")[0];var n = I(e),
        r = { width: n.width, height: n.height },
        o = -1 !== ["right", "left"].indexOf(i),
        s = o ? "top" : "left",
        a = o ? "left" : "top",
        l = o ? "height" : "width",
        c = o ? "width" : "height";return r[s] = t[s] + t[l] / 2 - n[l] / 2, r[a] = i === a ? t[a] - n[c] : t[N(a)], r;
  }function L(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }function O(e, t, i) {
    return (void 0 === i ? e : e.slice(0, function (e, t, i) {
      if (Array.prototype.findIndex) return e.findIndex(function (e) {
        return e[t] === i;
      });var n = L(e, function (e) {
        return e[t] === i;
      });return e.indexOf(n);
    }(e, "name", i))).forEach(function (e) {
      e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var i = e.function || e.fn;e.enabled && o(i) && (t.offsets.popper = _(t.offsets.popper), t.offsets.reference = _(t.offsets.reference), t = i(t, e));
    }), t;
  }function j(e, t) {
    return e.some(function (e) {
      var i = e.name;return e.enabled && i === t;
    });
  }function M(e) {
    for (var t = [!1, "ms", "Webkit", "Moz", "O"], i = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
      var r = t[n],
          o = r ? "" + r + i : e;if (void 0 !== document.body.style[o]) return o;
    }return null;
  }function H(e) {
    var t = e.ownerDocument;return t ? t.defaultView : window;
  }function q(e, t, i, n) {
    i.updateBound = n, H(e).addEventListener("resize", i.updateBound, { passive: !0 });var r = l(e);return function e(t, i, n, r) {
      var o = "BODY" === t.nodeName,
          s = o ? t.ownerDocument.defaultView : t;s.addEventListener(i, n, { passive: !0 }), o || e(l(s.parentNode), i, n, r), r.push(s);
    }(r, "scroll", i.updateBound, i.scrollParents), i.scrollElement = r, i.eventsEnabled = !0, i;
  }function F() {
    var e, t;this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, H(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener("scroll", t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t));
  }function B(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }function R(e, t) {
    Object.keys(t).forEach(function (i) {
      var n = "";-1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && B(t[i]) && (n = "px"), e.style[i] = t[i] + n;
    });
  }function z(e, t, i) {
    var n = L(e, function (e) {
      return e.name === t;
    }),
        r = !!n && e.some(function (e) {
      return e.name === i && e.enabled && e.order < n.order;
    });if (!r) {
      var o = "`" + t + "`",
          s = "`" + i + "`";console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!");
    }return r;
  }var W = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      U = W.slice(3);function V(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = U.indexOf(e),
        n = U.slice(i + 1).concat(U.slice(0, i));return t ? n.reverse() : n;
  }var $ = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" };function K(e, t, i, n) {
    var r = [0, 0],
        o = -1 !== ["right", "left"].indexOf(n),
        s = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        a = s.indexOf(L(s, function (e) {
      return -1 !== e.search(/,|\s/);
    }));s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l = /\s*,\s*|\s+/,
        c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];return (c = c.map(function (e, n) {
      var r = (1 === n ? !o : o) ? "height" : "width",
          s = !1;return e.reduce(function (e, t) {
        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return function (e, t, i, n) {
          var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
              o = +r[1],
              s = r[2];if (!o) return e;if (0 === s.indexOf("%")) {
            var a = void 0;switch (s) {case "%p":
                a = i;break;case "%":case "%r":default:
                a = n;}return _(a)[t] / 100 * o;
          }if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;return o;
        }(e, r, t, i);
      });
    })).forEach(function (e, t) {
      e.forEach(function (i, n) {
        B(i) && (r[t] += i * ("-" === e[n - 1] ? -1 : 1));
      });
    }), r;
  }var Q = { placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function onCreate() {}, onUpdate: function onUpdate() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function fn(e) {
          var t = e.placement,
              i = t.split("-")[0],
              n = t.split("-")[1];if (n) {
            var r = e.offsets,
                o = r.reference,
                s = r.popper,
                a = -1 !== ["bottom", "top"].indexOf(i),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                u = { start: E({}, l, o[l]), end: E({}, l, o[l] + o[c] - s[c]) };e.offsets.popper = C({}, s, u[n]);
          }return e;
        } }, offset: { order: 200, enabled: !0, fn: function fn(e, t) {
          var i = t.offset,
              n = e.placement,
              r = e.offsets,
              o = r.popper,
              s = r.reference,
              a = n.split("-")[0],
              l = void 0;return l = B(+i) ? [+i, 0] : K(i, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), e.popper = o, e;
        }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function fn(e, t) {
          var i = t.boundariesElement || h(e.instance.popper);e.instance.reference === i && (i = h(i));var n = M("transform"),
              r = e.instance.popper.style,
              o = r.top,
              s = r.left,
              a = r[n];r.top = "", r.left = "", r[n] = "";var l = S(e.instance.popper, e.instance.reference, t.padding, i, e.positionFixed);r.top = o, r.left = s, r[n] = a, t.boundaries = l;var c = t.priority,
              u = e.offsets.popper,
              d = { primary: function primary(e) {
              var i = u[e];return u[e] < l[e] && !t.escapeWithReference && (i = Math.max(u[e], l[e])), E({}, e, i);
            }, secondary: function secondary(e) {
              var i = "right" === e ? "left" : "top",
                  n = u[i];return u[e] > l[e] && !t.escapeWithReference && (n = Math.min(u[i], l[e] - ("right" === e ? u.width : u.height))), E({}, i, n);
            } };return c.forEach(function (e) {
            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";u = C({}, u, d[t](e));
          }), e.offsets.popper = u, e;
        }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function fn(e) {
          var t = e.offsets,
              i = t.popper,
              n = t.reference,
              r = e.placement.split("-")[0],
              o = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(r),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";return i[a] < o(n[l]) && (e.offsets.popper[l] = o(n[l]) - i[c]), i[l] > o(n[a]) && (e.offsets.popper[l] = o(n[a])), e;
        } }, arrow: { order: 500, enabled: !0, fn: function fn(e, t) {
          var i;if (!z(e.instance.modifiers, "arrow", "keepTogether")) return e;var n = t.element;if ("string" == typeof n) {
            if (!(n = e.instance.popper.querySelector(n))) return e;
          } else if (!e.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;var r = e.placement.split("-")[0],
              o = e.offsets,
              a = o.popper,
              l = o.reference,
              c = -1 !== ["left", "right"].indexOf(r),
              u = c ? "height" : "width",
              d = c ? "Top" : "Left",
              h = d.toLowerCase(),
              f = c ? "left" : "top",
              p = c ? "bottom" : "right",
              m = I(n)[u];l[p] - m < a[h] && (e.offsets.popper[h] -= a[h] - (l[p] - m)), l[h] + m > a[p] && (e.offsets.popper[h] += l[h] + m - a[p]), e.offsets.popper = _(e.offsets.popper);var g = l[h] + l[u] / 2 - m / 2,
              v = s(e.instance.popper),
              y = parseFloat(v["margin" + d], 10),
              b = parseFloat(v["border" + d + "Width"], 10),
              w = g - e.offsets.popper[h] - y - b;return w = Math.max(Math.min(a[u] - m, w), 0), e.arrowElement = n, e.offsets.arrow = (E(i = {}, h, Math.round(w)), E(i, f, ""), i), e;
        }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function fn(e, t) {
          if (j(e.instance.modifiers, "inner")) return e;if (e.flipped && e.placement === e.originalPlacement) return e;var i = S(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
              n = e.placement.split("-")[0],
              r = N(n),
              o = e.placement.split("-")[1] || "",
              s = [];switch (t.behavior) {case $.FLIP:
              s = [n, r];break;case $.CLOCKWISE:
              s = V(n);break;case $.COUNTERCLOCKWISE:
              s = V(n, !0);break;default:
              s = t.behavior;}return s.forEach(function (a, l) {
            if (n !== a || s.length === l + 1) return e;n = e.placement.split("-")[0], r = N(n);var c = e.offsets.popper,
                u = e.offsets.reference,
                d = Math.floor,
                h = "left" === n && d(c.right) > d(u.left) || "right" === n && d(c.left) < d(u.right) || "top" === n && d(c.bottom) > d(u.top) || "bottom" === n && d(c.top) < d(u.bottom),
                f = d(c.left) < d(i.left),
                p = d(c.right) > d(i.right),
                m = d(c.top) < d(i.top),
                g = d(c.bottom) > d(i.bottom),
                v = "left" === n && f || "right" === n && p || "top" === n && m || "bottom" === n && g,
                y = -1 !== ["top", "bottom"].indexOf(n),
                b = !!t.flipVariations && (y && "start" === o && f || y && "end" === o && p || !y && "start" === o && m || !y && "end" === o && g);(h || v || b) && (e.flipped = !0, (h || v) && (n = s[l + 1]), b && (o = function (e) {
              return "end" === e ? "start" : "start" === e ? "end" : e;
            }(o)), e.placement = n + (o ? "-" + o : ""), e.offsets.popper = C({}, e.offsets.popper, P(e.instance.popper, e.offsets.reference, e.placement)), e = O(e.instance.modifiers, e, "flip"));
          }), e;
        }, behavior: "flip", padding: 5, boundariesElement: "viewport" }, inner: { order: 700, enabled: !1, fn: function fn(e) {
          var t = e.placement,
              i = t.split("-")[0],
              n = e.offsets,
              r = n.popper,
              o = n.reference,
              s = -1 !== ["left", "right"].indexOf(i),
              a = -1 === ["top", "left"].indexOf(i);return r[s ? "left" : "top"] = o[i] - (a ? r[s ? "width" : "height"] : 0), e.placement = N(t), e.offsets.popper = _(r), e;
        } }, hide: { order: 800, enabled: !0, fn: function fn(e) {
          if (!z(e.instance.modifiers, "hide", "preventOverflow")) return e;var t = e.offsets.reference,
              i = L(e.instance.modifiers, function (e) {
            return "preventOverflow" === e.name;
          }).boundaries;if (t.bottom < i.top || t.left > i.right || t.top > i.bottom || t.right < i.left) {
            if (!0 === e.hide) return e;e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
          } else {
            if (!1 === e.hide) return e;e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
          }return e;
        } }, computeStyle: { order: 850, enabled: !0, fn: function fn(e, t) {
          var i = t.x,
              n = t.y,
              r = e.offsets.popper,
              o = L(e.instance.modifiers, function (e) {
            return "applyStyle" === e.name;
          }).gpuAcceleration;void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s = void 0 !== o ? o : t.gpuAcceleration,
              a = T(h(e.instance.popper)),
              l = { position: r.position },
              c = { left: Math.floor(r.left), top: Math.round(r.top), bottom: Math.round(r.bottom), right: Math.floor(r.right) },
              u = "bottom" === i ? "top" : "bottom",
              d = "right" === n ? "left" : "right",
              f = M("transform"),
              p = void 0,
              m = void 0;if (m = "bottom" === u ? -a.height + c.bottom : c.top, p = "right" === d ? -a.width + c.right : c.left, s && f) l[f] = "translate3d(" + p + "px, " + m + "px, 0)", l[u] = 0, l[d] = 0, l.willChange = "transform";else {
            var g = "bottom" === u ? -1 : 1,
                v = "right" === d ? -1 : 1;l[u] = m * g, l[d] = p * v, l.willChange = u + ", " + d;
          }var y = { "x-placement": e.placement };return e.attributes = C({}, y, e.attributes), e.styles = C({}, l, e.styles), e.arrowStyles = C({}, e.offsets.arrow, e.arrowStyles), e;
        }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function fn(e) {
          var t, i;return R(e.instance.popper, e.styles), t = e.instance.popper, i = e.attributes, Object.keys(i).forEach(function (e) {
            !1 !== i[e] ? t.setAttribute(e, i[e]) : t.removeAttribute(e);
          }), e.arrowElement && Object.keys(e.arrowStyles).length && R(e.arrowElement, e.arrowStyles), e;
        }, onLoad: function onLoad(e, t, i, n, r) {
          var o = D(r, t, e, i.positionFixed),
              s = A(i.placement, o, t, e, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);return t.setAttribute("x-placement", s), R(t, { position: i.positionFixed ? "fixed" : "absolute" }), i;
        }, gpuAcceleration: void 0 } } },
      Y = function () {
    function e(t, i) {
      var n = this,
          s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};b(this, e), this.scheduleUpdate = function () {
        return requestAnimationFrame(n.update);
      }, this.update = r(this.update.bind(this)), this.options = C({}, e.Defaults, s), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = t && t.jquery ? t[0] : t, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(C({}, e.Defaults.modifiers, s.modifiers)).forEach(function (t) {
        n.options.modifiers[t] = C({}, e.Defaults.modifiers[t] || {}, s.modifiers ? s.modifiers[t] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return C({ name: e }, n.options.modifiers[e]);
      }).sort(function (e, t) {
        return e.order - t.order;
      }), this.modifiers.forEach(function (e) {
        e.enabled && o(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state);
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
  }();return Y.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Y.placements = W, Y.Defaults = Q, Y;
}), function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(e.bootstrap = {}, e.jQuery, e.Popper);
}(this, function (e, t, i) {
  "use strict";
  function n(e, t) {
    for (var i = 0; i < t.length; i++) {
      var n = t[i];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }function r(e, t, i) {
    return t && n(e.prototype, t), i && n(e, i), e;
  }function o(e, t, i) {
    return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
  }function s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(i);"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function (e) {
        return Object.getOwnPropertyDescriptor(i, e).enumerable;
      }))), n.forEach(function (t) {
        o(e, t, i[t]);
      });
    }return e;
  }t = t && t.hasOwnProperty("default") ? t.default : t, i = i && i.hasOwnProperty("default") ? i.default : i;var a = function (e) {
    var t = "transitionend";function i(t) {
      var i = this,
          r = !1;return e(this).one(n.TRANSITION_END, function () {
        r = !0;
      }), setTimeout(function () {
        r || n.triggerTransitionEnd(i);
      }, t), this;
    }var n = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(e) {
        do {
          e += ~~(1e6 * Math.random());
        } while (document.getElementById(e));return e;
      }, getSelectorFromElement: function getSelectorFromElement(t) {
        var i = t.getAttribute("data-target");i && "#" !== i || (i = t.getAttribute("href") || "");try {
          return e(document).find(i).length > 0 ? i : null;
        } catch (e) {
          return null;
        }
      }, getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
        if (!t) return 0;var i = e(t).css("transition-duration");return parseFloat(i) ? (i = i.split(",")[0], 1e3 * parseFloat(i)) : 0;
      }, reflow: function reflow(e) {
        return e.offsetHeight;
      }, triggerTransitionEnd: function triggerTransitionEnd(i) {
        e(i).trigger(t);
      }, supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(t);
      }, isElement: function isElement(e) {
        return (e[0] || e).nodeType;
      }, typeCheckConfig: function typeCheckConfig(e, t, i) {
        for (var r in i) {
          if (Object.prototype.hasOwnProperty.call(i, r)) {
            var o = i[r],
                s = t[r],
                a = s && n.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());if (!new RegExp(o).test(a)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + o + '".');
          }
        }var l;
      } };return e.fn.emulateTransitionEnd = i, e.event.special[n.TRANSITION_END] = { bindType: t, delegateType: t, handle: function handle(t) {
        if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
      } }, n;
  }(t),
      l = function (e) {
    var t = e.fn.alert,
        i = { CLOSE: "close.bs.alert", CLOSED: "closed.bs.alert", CLICK_DATA_API: "click.bs.alert.data-api" },
        n = "alert",
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
        var i = a.getSelectorFromElement(t),
            r = !1;return i && (r = e(i)[0]), r || (r = e(t).closest("." + n)[0]), r;
      }, l._triggerCloseEvent = function (t) {
        var n = e.Event(i.CLOSE);return e(t).trigger(n), n;
      }, l._removeElement = function (t) {
        var i = this;if (e(t).removeClass(s), e(t).hasClass(o)) {
          var n = a.getTransitionDurationFromElement(t);e(t).one(a.TRANSITION_END, function (e) {
            return i._destroyElement(t, e);
          }).emulateTransitionEnd(n);
        } else this._destroyElement(t);
      }, l._destroyElement = function (t) {
        e(t).detach().trigger(i.CLOSED).remove();
      }, t._jQueryInterface = function (i) {
        return this.each(function () {
          var n = e(this),
              r = n.data("bs.alert");r || (r = new t(this), n.data("bs.alert", r)), "close" === i && r[i](this);
        });
      }, t._handleDismiss = function (e) {
        return function (t) {
          t && t.preventDefault(), e.close(this);
        };
      }, r(t, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }]), t;
    }();return e(document).on(i.CLICK_DATA_API, '[data-dismiss="alert"]', l._handleDismiss(new l())), e.fn.alert = l._jQueryInterface, e.fn.alert.Constructor = l, e.fn.alert.noConflict = function () {
      return e.fn.alert = t, l._jQueryInterface;
    }, l;
  }(t),
      c = function (e) {
    var t = "button",
        i = e.fn[t],
        n = "active",
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
      }var i = t.prototype;return i.toggle = function () {
        var t = !0,
            i = !0,
            r = e(this._element).closest(l)[0];if (r) {
          var o = e(this._element).find(c)[0];if (o) {
            if ("radio" === o.type) if (o.checked && e(this._element).hasClass(n)) t = !1;else {
              var s = e(r).find(u)[0];s && e(s).removeClass(n);
            }if (t) {
              if (o.hasAttribute("disabled") || r.hasAttribute("disabled") || o.classList.contains("disabled") || r.classList.contains("disabled")) return;o.checked = !e(this._element).hasClass(n), e(o).trigger("change");
            }o.focus(), i = !1;
          }
        }i && this._element.setAttribute("aria-pressed", !e(this._element).hasClass(n)), t && e(this._element).toggleClass(n);
      }, i.dispose = function () {
        e.removeData(this._element, "bs.button"), this._element = null;
      }, t._jQueryInterface = function (i) {
        return this.each(function () {
          var n = e(this).data("bs.button");n || (n = new t(this), e(this).data("bs.button", n)), "toggle" === i && n[i]();
        });
      }, r(t, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }]), t;
    }();return e(document).on(h.CLICK_DATA_API, a, function (t) {
      t.preventDefault();var i = t.target;e(i).hasClass(o) || (i = e(i).closest(d)), f._jQueryInterface.call(e(i), "toggle");
    }).on(h.FOCUS_BLUR_DATA_API, a, function (t) {
      var i = e(t.target).closest(d)[0];e(i).toggleClass(s, /^focus(in)?$/.test(t.type));
    }), e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function () {
      return e.fn[t] = i, f._jQueryInterface;
    }, f;
  }(t),
      u = function (e) {
    var t = "carousel",
        i = "bs.carousel",
        n = "." + i,
        o = e.fn[t],
        l = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 },
        c = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" },
        u = "next",
        d = "prev",
        h = "left",
        f = "right",
        p = { SLIDE: "slide" + n, SLID: "slid" + n, KEYDOWN: "keydown" + n, MOUSEENTER: "mouseenter" + n, MOUSELEAVE: "mouseleave" + n, TOUCHEND: "touchend" + n, LOAD_DATA_API: "load.bs.carousel.data-api", CLICK_DATA_API: "click.bs.carousel.data-api" },
        m = "carousel",
        g = "active",
        v = "slide",
        y = "carousel-item-right",
        b = "carousel-item-left",
        w = "carousel-item-next",
        E = "carousel-item-prev",
        C = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
        _ = function () {
      function o(t, i) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(i), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(C.INDICATORS)[0], this._addEventListeners();
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
        var i = this;this._activeElement = e(this._element).find(C.ACTIVE_ITEM)[0];var n = this._getItemIndex(this._activeElement);if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) e(this._element).one(p.SLID, function () {
          return i.to(t);
        });else {
          if (n === t) return this.pause(), void this.cycle();var r = t > n ? u : d;this._slide(r, this._items[t]);
        }
      }, _.dispose = function () {
        e(this._element).off(n), e.removeData(this._element, i), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
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
        var i = e === u,
            n = e === d,
            r = this._getItemIndex(t),
            o = this._items.length - 1;if ((n && 0 === r || i && r === o) && !this._config.wrap) return t;var s = (r + (e === d ? -1 : 1)) % this._items.length;return -1 === s ? this._items[this._items.length - 1] : this._items[s];
      }, _._triggerSlideEvent = function (t, i) {
        var n = this._getItemIndex(t),
            r = this._getItemIndex(e(this._element).find(C.ACTIVE_ITEM)[0]),
            o = e.Event(p.SLIDE, { relatedTarget: t, direction: i, from: r, to: n });return e(this._element).trigger(o), o;
      }, _._setActiveIndicatorElement = function (t) {
        if (this._indicatorsElement) {
          e(this._indicatorsElement).find(C.ACTIVE).removeClass(g);var i = this._indicatorsElement.children[this._getItemIndex(t)];i && e(i).addClass(g);
        }
      }, _._slide = function (t, i) {
        var n,
            r,
            o,
            s = this,
            l = e(this._element).find(C.ACTIVE_ITEM)[0],
            c = this._getItemIndex(l),
            d = i || l && this._getItemByDirection(t, l),
            m = this._getItemIndex(d),
            _ = Boolean(this._interval);if (t === u ? (n = b, r = w, o = h) : (n = y, r = E, o = f), d && e(d).hasClass(g)) this._isSliding = !1;else if (!this._triggerSlideEvent(d, o).isDefaultPrevented() && l && d) {
          this._isSliding = !0, _ && this.pause(), this._setActiveIndicatorElement(d);var T = e.Event(p.SLID, { relatedTarget: d, direction: o, from: c, to: m });if (e(this._element).hasClass(v)) {
            e(d).addClass(r), a.reflow(d), e(l).addClass(n), e(d).addClass(n);var x = a.getTransitionDurationFromElement(l);e(l).one(a.TRANSITION_END, function () {
              e(d).removeClass(n + " " + r).addClass(g), e(l).removeClass(g + " " + r + " " + n), s._isSliding = !1, setTimeout(function () {
                return e(s._element).trigger(T);
              }, 0);
            }).emulateTransitionEnd(x);
          } else e(l).removeClass(g), e(d).addClass(g), this._isSliding = !1, e(this._element).trigger(T);_ && this.cycle();
        }
      }, o._jQueryInterface = function (t) {
        return this.each(function () {
          var n = e(this).data(i),
              r = s({}, l, e(this).data());"object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (r = s({}, r, t));var a = "string" == typeof t ? t : r.slide;if (n || (n = new o(this, r), e(this).data(i, n)), "number" == typeof t) n.to(t);else if ("string" == typeof a) {
            if (void 0 === n[a]) throw new TypeError('No method named "' + a + '"');n[a]();
          } else r.interval && (n.pause(), n.cycle());
        });
      }, o._dataApiClickHandler = function (t) {
        var n = a.getSelectorFromElement(this);if (n) {
          var r = e(n)[0];if (r && e(r).hasClass(m)) {
            var l = s({}, e(r).data(), e(this).data()),
                c = this.getAttribute("data-slide-to");c && (l.interval = !1), o._jQueryInterface.call(e(r), l), c && e(r).data(i).to(c), t.preventDefault();
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
        i = "bs.collapse",
        n = e.fn[t],
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
      function n(t, i) {
        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(i), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));for (var n = e(g.DATA_TOGGLE), r = 0; r < n.length; r++) {
          var o = n[r],
              s = a.getSelectorFromElement(o);null !== s && e(s).filter(t).length > 0 && (this._selector = s, this._triggerArray.push(o));
        }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
      }var v = n.prototype;return v.toggle = function () {
        e(this._element).hasClass(u) ? this.hide() : this.show();
      }, v.show = function () {
        var t,
            r,
            o = this;if (!this._isTransitioning && !e(this._element).hasClass(u) && (this._parent && 0 === (t = e.makeArray(e(this._parent).find(g.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (r = e(t).not(this._selector).data(i)) && r._isTransitioning))) {
          var s = e.Event(c.SHOW);if (e(this._element).trigger(s), !s.isDefaultPrevented()) {
            t && (n._jQueryInterface.call(e(t).not(this._selector), "hide"), r || e(t).data(i, null));var l = this._getDimension();e(this._element).removeClass(d).addClass(h), this._element.style[l] = 0, this._triggerArray.length > 0 && e(this._triggerArray).removeClass(f).attr("aria-expanded", !0), this.setTransitioning(!0);var p = "scroll" + (l[0].toUpperCase() + l.slice(1)),
                m = a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END, function () {
              e(o._element).removeClass(h).addClass(d).addClass(u), o._element.style[l] = "", o.setTransitioning(!1), e(o._element).trigger(c.SHOWN);
            }).emulateTransitionEnd(m), this._element.style[l] = this._element[p] + "px";
          }
        }
      }, v.hide = function () {
        var t = this;if (!this._isTransitioning && e(this._element).hasClass(u)) {
          var i = e.Event(c.HIDE);if (e(this._element).trigger(i), !i.isDefaultPrevented()) {
            var n = this._getDimension();if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", a.reflow(this._element), e(this._element).addClass(h).removeClass(d).removeClass(u), this._triggerArray.length > 0) for (var r = 0; r < this._triggerArray.length; r++) {
              var o = this._triggerArray[r],
                  s = a.getSelectorFromElement(o);if (null !== s) e(s).hasClass(u) || e(o).addClass(f).attr("aria-expanded", !1);
            }this.setTransitioning(!0);this._element.style[n] = "";var l = a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END, function () {
              t.setTransitioning(!1), e(t._element).removeClass(h).addClass(d).trigger(c.HIDDEN);
            }).emulateTransitionEnd(l);
          }
        }
      }, v.setTransitioning = function (e) {
        this._isTransitioning = e;
      }, v.dispose = function () {
        e.removeData(this._element, i), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
      }, v._getConfig = function (e) {
        return (e = s({}, o, e)).toggle = Boolean(e.toggle), a.typeCheckConfig(t, e, l), e;
      }, v._getDimension = function () {
        return e(this._element).hasClass(p) ? p : m;
      }, v._getParent = function () {
        var t = this,
            i = null;a.isElement(this._config.parent) ? (i = this._config.parent, void 0 !== this._config.parent.jquery && (i = this._config.parent[0])) : i = e(this._config.parent)[0];var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';return e(i).find(r).each(function (e, i) {
          t._addAriaAndCollapsedClass(n._getTargetFromElement(i), [i]);
        }), i;
      }, v._addAriaAndCollapsedClass = function (t, i) {
        if (t) {
          var n = e(t).hasClass(u);i.length > 0 && e(i).toggleClass(f, !n).attr("aria-expanded", n);
        }
      }, n._getTargetFromElement = function (t) {
        var i = a.getSelectorFromElement(t);return i ? e(i)[0] : null;
      }, n._jQueryInterface = function (t) {
        return this.each(function () {
          var r = e(this),
              a = r.data(i),
              l = s({}, o, r.data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t);if (!a && l.toggle && /show|hide/.test(t) && (l.toggle = !1), a || (a = new n(this, l), r.data(i, a)), "string" == typeof t) {
            if (void 0 === a[t]) throw new TypeError('No method named "' + t + '"');a[t]();
          }
        });
      }, r(n, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return o;
        } }]), n;
    }();return e(document).on(c.CLICK_DATA_API, g.DATA_TOGGLE, function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();var n = e(this),
          r = a.getSelectorFromElement(this);e(r).each(function () {
        var t = e(this),
            r = t.data(i) ? "toggle" : n.data();v._jQueryInterface.call(t, r);
      });
    }), e.fn[t] = v._jQueryInterface, e.fn[t].Constructor = v, e.fn[t].noConflict = function () {
      return e.fn[t] = n, v._jQueryInterface;
    }, v;
  }(t),
      h = function (e) {
    var t = "dropdown",
        n = "bs.dropdown",
        o = "." + n,
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
              n = e(this._menu).hasClass(h);if (l._clearMenus(), !n) {
            var r = { relatedTarget: this._element },
                o = e.Event(u.SHOW, r);if (e(t).trigger(o), !o.isDefaultPrevented()) {
              if (!this._inNavbar) {
                if (void 0 === i) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var s = this._element;"parent" === this._config.reference ? s = t : a.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(t).addClass(v), this._popper = new i(s, this._menu, this._getPopperConfig());
              }"ontouchstart" in document.documentElement && 0 === e(t).closest(E).length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(h), e(t).toggleClass(h).trigger(e.Event(u.SHOWN, r));
            }
          }
        }
      }, b.dispose = function () {
        e.removeData(this._element, n), e(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
      }, b.update = function () {
        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
      }, b._addEventListeners = function () {
        var t = this;e(this._element).on(u.CLICK, function (e) {
          e.preventDefault(), e.stopPropagation(), t.toggle();
        });
      }, b._getConfig = function (i) {
        return i = s({}, this.constructor.Default, e(this._element).data(), i), a.typeCheckConfig(t, i, this.constructor.DefaultType), i;
      }, b._getMenuElement = function () {
        if (!this._menu) {
          var t = l._getParentFromElement(this._element);this._menu = e(t).find(w)[0];
        }return this._menu;
      }, b._getPlacement = function () {
        var t = e(this._element).parent(),
            i = x;return t.hasClass(f) ? (i = _, e(this._menu).hasClass(g) && (i = T)) : t.hasClass(p) ? i = S : t.hasClass(m) ? i = A : e(this._menu).hasClass(g) && (i = k), i;
      }, b._detectNavbar = function () {
        return e(this._element).closest(".navbar").length > 0;
      }, b._getPopperConfig = function () {
        var e = this,
            t = {};"function" == typeof this._config.offset ? t.fn = function (t) {
          return t.offsets = s({}, t.offsets, e._config.offset(t.offsets) || {}), t;
        } : t.offset = this._config.offset;var i = { placement: this._getPlacement(), modifiers: { offset: t, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };return "static" === this._config.display && (i.modifiers.applyStyle = { enabled: !1 }), i;
      }, l._jQueryInterface = function (t) {
        return this.each(function () {
          var i = e(this).data(n);if (i || (i = new l(this, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : null), e(this).data(n, i)), "string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');i[t]();
          }
        });
      }, l._clearMenus = function (t) {
        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var i = e.makeArray(e(y)), r = 0; r < i.length; r++) {
          var o = l._getParentFromElement(i[r]),
              s = e(i[r]).data(n),
              a = { relatedTarget: i[r] };if (s) {
            var c = s._menu;if (e(o).hasClass(h) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(o, t.target))) {
              var d = e.Event(u.HIDE, a);e(o).trigger(d), d.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), i[r].setAttribute("aria-expanded", "false"), e(c).removeClass(h), e(o).removeClass(h).trigger(e.Event(u.HIDDEN, a)));
            }
          }
        }
      }, l._getParentFromElement = function (t) {
        var i,
            n = a.getSelectorFromElement(t);return n && (i = e(n)[0]), i || t.parentNode;
      }, l._dataApiKeydownHandler = function (t) {
        if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(w).length)) : c.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(d))) {
          var i = l._getParentFromElement(this),
              n = e(i).hasClass(h);if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
            var r = e(i).find(C).get();if (0 !== r.length) {
              var o = r.indexOf(t.target);38 === t.which && o > 0 && o--, 40 === t.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus();
            }
          } else {
            if (27 === t.which) {
              var s = e(i).find(y)[0];e(s).trigger("focus");
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
        i = ".bs.modal",
        n = e.fn.modal,
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
      function n(t, i) {
        this._config = this._getConfig(i), this._element = t, this._dialog = e(t).find(m.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0;
      }var g = n.prototype;return g.toggle = function (e) {
        return this._isShown ? this.hide() : this.show(e);
      }, g.show = function (t) {
        var i = this;if (!this._isTransitioning && !this._isShown) {
          e(this._element).hasClass(f) && (this._isTransitioning = !0);var n = e.Event(c.SHOW, { relatedTarget: t });e(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(h), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(c.CLICK_DISMISS, m.DATA_DISMISS, function (e) {
            return i.hide(e);
          }), e(this._dialog).on(c.MOUSEDOWN_DISMISS, function () {
            e(i._element).one(c.MOUSEUP_DISMISS, function (t) {
              e(t.target).is(i._element) && (i._ignoreBackdropClick = !0);
            });
          }), this._showBackdrop(function () {
            return i._showElement(t);
          }));
        }
      }, g.hide = function (t) {
        var i = this;if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
          var n = e.Event(c.HIDE);if (e(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
            this._isShown = !1;var r = e(this._element).hasClass(f);if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(c.FOCUSIN), e(this._element).removeClass(p), e(this._element).off(c.CLICK_DISMISS), e(this._dialog).off(c.MOUSEDOWN_DISMISS), r) {
              var o = a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END, function (e) {
                return i._hideModal(e);
              }).emulateTransitionEnd(o);
            } else this._hideModal();
          }
        }
      }, g.dispose = function () {
        e.removeData(this._element, "bs.modal"), e(window, document, this._element, this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
      }, g.handleUpdate = function () {
        this._adjustDialog();
      }, g._getConfig = function (e) {
        return e = s({}, o, e), a.typeCheckConfig(t, e, l), e;
      }, g._showElement = function (t) {
        var i = this,
            n = e(this._element).hasClass(f);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && a.reflow(this._element), e(this._element).addClass(p), this._config.focus && this._enforceFocus();var r = e.Event(c.SHOWN, { relatedTarget: t }),
            o = function o() {
          i._config.focus && i._element.focus(), i._isTransitioning = !1, e(i._element).trigger(r);
        };if (n) {
          var s = a.getTransitionDurationFromElement(this._element);e(this._dialog).one(a.TRANSITION_END, o).emulateTransitionEnd(s);
        } else o();
      }, g._enforceFocus = function () {
        var t = this;e(document).off(c.FOCUSIN).on(c.FOCUSIN, function (i) {
          document !== i.target && t._element !== i.target && 0 === e(t._element).has(i.target).length && t._element.focus();
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
        var i = this,
            n = e(this._element).hasClass(f) ? f : "";if (this._isShown && this._config.backdrop) {
          if (this._backdrop = document.createElement("div"), this._backdrop.className = d, n && e(this._backdrop).addClass(n), e(this._backdrop).appendTo(document.body), e(this._element).on(c.CLICK_DISMISS, function (e) {
            i._ignoreBackdropClick ? i._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide());
          }), n && a.reflow(this._backdrop), e(this._backdrop).addClass(p), !t) return;if (!n) return void t();var r = a.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(a.TRANSITION_END, t).emulateTransitionEnd(r);
        } else if (!this._isShown && this._backdrop) {
          e(this._backdrop).removeClass(p);var o = function o() {
            i._removeBackdrop(), t && t();
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
          e(m.FIXED_CONTENT).each(function (i, n) {
            var r = e(n)[0].style.paddingRight,
                o = e(n).css("padding-right");e(n).data("padding-right", r).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px");
          }), e(m.STICKY_CONTENT).each(function (i, n) {
            var r = e(n)[0].style.marginRight,
                o = e(n).css("margin-right");e(n).data("margin-right", r).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px");
          }), e(m.NAVBAR_TOGGLER).each(function (i, n) {
            var r = e(n)[0].style.marginRight,
                o = e(n).css("margin-right");e(n).data("margin-right", r).css("margin-right", parseFloat(o) + t._scrollbarWidth + "px");
          });var i = document.body.style.paddingRight,
              n = e(document.body).css("padding-right");e(document.body).data("padding-right", i).css("padding-right", parseFloat(n) + this._scrollbarWidth + "px");
        }
      }, g._resetScrollbar = function () {
        e(m.FIXED_CONTENT).each(function (t, i) {
          var n = e(i).data("padding-right");void 0 !== n && e(i).css("padding-right", n).removeData("padding-right");
        }), e(m.STICKY_CONTENT + ", " + m.NAVBAR_TOGGLER).each(function (t, i) {
          var n = e(i).data("margin-right");void 0 !== n && e(i).css("margin-right", n).removeData("margin-right");
        });var t = e(document.body).data("padding-right");void 0 !== t && e(document.body).css("padding-right", t).removeData("padding-right");
      }, g._getScrollbarWidth = function () {
        var e = document.createElement("div");e.className = u, document.body.appendChild(e);var t = e.getBoundingClientRect().width - e.clientWidth;return document.body.removeChild(e), t;
      }, n._jQueryInterface = function (t, i) {
        return this.each(function () {
          var r = e(this).data("bs.modal"),
              o = s({}, n.Default, e(this).data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t);if (r || (r = new n(this, o), e(this).data("bs.modal", r)), "string" == typeof t) {
            if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');r[t](i);
          } else o.show && r.show(i);
        });
      }, r(n, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return o;
        } }]), n;
    }();return e(document).on(c.CLICK_DATA_API, m.DATA_TOGGLE, function (t) {
      var i,
          n = this,
          r = a.getSelectorFromElement(this);r && (i = e(r)[0]);var o = e(i).data("bs.modal") ? "toggle" : s({}, e(i).data(), e(this).data());"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();var l = e(i).one(c.SHOW, function (t) {
        t.isDefaultPrevented() || l.one(c.HIDDEN, function () {
          e(n).is(":visible") && n.focus();
        });
      });g._jQueryInterface.call(e(i), o, this);
    }), e.fn.modal = g._jQueryInterface, e.fn.modal.Constructor = g, e.fn.modal.noConflict = function () {
      return e.fn.modal = n, g._jQueryInterface;
    }, g;
  }(t),
      p = function (e) {
    var t = "tooltip",
        n = ".bs.tooltip",
        o = e.fn[t],
        l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        c = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" },
        u = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        d = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" },
        h = "show",
        f = "out",
        p = { HIDE: "hide" + n, HIDDEN: "hidden" + n, SHOW: "show" + n, SHOWN: "shown" + n, INSERTED: "inserted" + n, CLICK: "click" + n, FOCUSIN: "focusin" + n, FOCUSOUT: "focusout" + n, MOUSEENTER: "mouseenter" + n, MOUSELEAVE: "mouseleave" + n },
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
        if (void 0 === i) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners();
      }var _ = o.prototype;return _.enable = function () {
        this._isEnabled = !0;
      }, _.disable = function () {
        this._isEnabled = !1;
      }, _.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled;
      }, _.toggle = function (t) {
        if (this._isEnabled) if (t) {
          var i = this.constructor.DATA_KEY,
              n = e(t.currentTarget).data(i);n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
        } else {
          if (e(this.getTipElement()).hasClass(g)) return void this._leave(null, this);this._enter(null, this);
        }
      }, _.dispose = function () {
        clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
      }, _.show = function () {
        var t = this;if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");var n = e.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
          e(this.element).trigger(n);var r = e.contains(this.element.ownerDocument.documentElement, this.element);if (n.isDefaultPrevented() || !r) return;var o = this.getTipElement(),
              s = a.getUID(this.constructor.NAME);o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && e(o).addClass(m);var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
              c = this._getAttachment(l);this.addAttachmentClass(c);var u = !1 === this.config.container ? document.body : e(this.config.container);e(o).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(o).appendTo(u), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new i(this.element, o, { placement: c, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: y }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function onCreate(e) {
              e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
            }, onUpdate: function onUpdate(e) {
              t._handlePopperPlacementChange(e);
            } }), e(o).addClass(g), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);var d = function d() {
            t.config.animation && t._fixTransition();var i = t._hoverState;t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), i === f && t._leave(null, t);
          };if (e(this.tip).hasClass(m)) {
            var h = a.getTransitionDurationFromElement(this.tip);e(this.tip).one(a.TRANSITION_END, d).emulateTransitionEnd(h);
          } else d();
        }
      }, _.hide = function (t) {
        var i = this,
            n = this.getTipElement(),
            r = e.Event(this.constructor.Event.HIDE),
            o = function o() {
          i._hoverState !== h && n.parentNode && n.parentNode.removeChild(n), i._cleanTipClass(), i.element.removeAttribute("aria-describedby"), e(i.element).trigger(i.constructor.Event.HIDDEN), null !== i._popper && i._popper.destroy(), t && t();
        };if (e(this.element).trigger(r), !r.isDefaultPrevented()) {
          if (e(n).removeClass(g), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger[E] = !1, this._activeTrigger[w] = !1, this._activeTrigger[b] = !1, e(this.tip).hasClass(m)) {
            var s = a.getTransitionDurationFromElement(n);e(n).one(a.TRANSITION_END, o).emulateTransitionEnd(s);
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
      }, _.setElementContent = function (t, i) {
        var n = this.config.html;"object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && (i.nodeType || i.jquery) ? n ? e(i).parent().is(t) || t.empty().append(i) : t.text(e(i).text()) : t[n ? "html" : "text"](i);
      }, _.getTitle = function () {
        var e = this.element.getAttribute("data-original-title");return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
      }, _._getAttachment = function (e) {
        return u[e.toUpperCase()];
      }, _._setListeners = function () {
        var t = this;this.config.trigger.split(" ").forEach(function (i) {
          if ("click" === i) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
            return t.toggle(e);
          });else if (i !== C) {
            var n = i === b ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                r = i === b ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;e(t.element).on(n, t.config.selector, function (e) {
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
      }, _._enter = function (t, i) {
        var n = this.constructor.DATA_KEY;(i = i || e(t.currentTarget).data(n)) || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), t && (i._activeTrigger["focusin" === t.type ? w : b] = !0), e(i.getTipElement()).hasClass(g) || i._hoverState === h ? i._hoverState = h : (clearTimeout(i._timeout), i._hoverState = h, i.config.delay && i.config.delay.show ? i._timeout = setTimeout(function () {
          i._hoverState === h && i.show();
        }, i.config.delay.show) : i.show());
      }, _._leave = function (t, i) {
        var n = this.constructor.DATA_KEY;(i = i || e(t.currentTarget).data(n)) || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), t && (i._activeTrigger["focusout" === t.type ? w : b] = !1), i._isWithActiveTrigger() || (clearTimeout(i._timeout), i._hoverState = f, i.config.delay && i.config.delay.hide ? i._timeout = setTimeout(function () {
          i._hoverState === f && i.hide();
        }, i.config.delay.hide) : i.hide());
      }, _._isWithActiveTrigger = function () {
        for (var e in this._activeTrigger) {
          if (this._activeTrigger[e]) return !0;
        }return !1;
      }, _._getConfig = function (i) {
        return "number" == typeof (i = s({}, this.constructor.Default, e(this.element).data(), i)).delay && (i.delay = { show: i.delay, hide: i.delay }), "number" == typeof i.title && (i.title = i.title.toString()), "number" == typeof i.content && (i.content = i.content.toString()), a.typeCheckConfig(t, i, this.constructor.DefaultType), i;
      }, _._getDelegateConfig = function () {
        var e = {};if (this.config) for (var t in this.config) {
          this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
        }return e;
      }, _._cleanTipClass = function () {
        var t = e(this.getTipElement()),
            i = t.attr("class").match(l);null !== i && i.length > 0 && t.removeClass(i.join(""));
      }, _._handlePopperPlacementChange = function (e) {
        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
      }, _._fixTransition = function () {
        var t = this.getTipElement(),
            i = this.config.animation;null === t.getAttribute("x-placement") && (e(t).removeClass(m), this.config.animation = !1, this.hide(), this.show(), this.config.animation = i);
      }, o._jQueryInterface = function (t) {
        return this.each(function () {
          var i = e(this).data("bs.tooltip"),
              n = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t;if ((i || !/dispose|hide/.test(t)) && (i || (i = new o(this, n), e(this).data("bs.tooltip", i)), "string" == typeof t)) {
            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');i[t]();
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
          return n;
        } }, { key: "DefaultType", get: function get() {
          return c;
        } }]), o;
    }();return e.fn[t] = _._jQueryInterface, e.fn[t].Constructor = _, e.fn[t].noConflict = function () {
      return e.fn[t] = o, _._jQueryInterface;
    }, _;
  }(t),
      m = function (e) {
    var t = "popover",
        i = ".bs.popover",
        n = e.fn[t],
        o = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        a = s({}, p.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        l = s({}, p.DefaultType, { content: "(string|element|function)" }),
        c = "fade",
        u = "show",
        d = ".popover-header",
        h = ".popover-body",
        f = { HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, INSERTED: "inserted" + i, CLICK: "click" + i, FOCUSIN: "focusin" + i, FOCUSOUT: "focusout" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i },
        m = function (n) {
      var s, p;function m() {
        return n.apply(this, arguments) || this;
      }p = n, (s = m).prototype = Object.create(p.prototype), s.prototype.constructor = s, s.__proto__ = p;var g = m.prototype;return g.isWithContent = function () {
        return this.getTitle() || this._getContent();
      }, g.addAttachmentClass = function (t) {
        e(this.getTipElement()).addClass("bs-popover-" + t);
      }, g.getTipElement = function () {
        return this.tip = this.tip || e(this.config.template)[0], this.tip;
      }, g.setContent = function () {
        var t = e(this.getTipElement());this.setElementContent(t.find(d), this.getTitle());var i = this._getContent();"function" == typeof i && (i = i.call(this.element)), this.setElementContent(t.find(h), i), t.removeClass(c + " " + u);
      }, g._getContent = function () {
        return this.element.getAttribute("data-content") || this.config.content;
      }, g._cleanTipClass = function () {
        var t = e(this.getTipElement()),
            i = t.attr("class").match(o);null !== i && i.length > 0 && t.removeClass(i.join(""));
      }, m._jQueryInterface = function (t) {
        return this.each(function () {
          var i = e(this).data("bs.popover"),
              n = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : null;if ((i || !/destroy|hide/.test(t)) && (i || (i = new m(this, n), e(this).data("bs.popover", i)), "string" == typeof t)) {
            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');i[t]();
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
          return i;
        } }, { key: "DefaultType", get: function get() {
          return l;
        } }]), m;
    }(p);return e.fn[t] = m._jQueryInterface, e.fn[t].Constructor = m, e.fn[t].noConflict = function () {
      return e.fn[t] = n, m._jQueryInterface;
    }, m;
  }(t),
      g = function (e) {
    var t = "scrollspy",
        i = e.fn[t],
        n = { offset: 10, method: "auto", target: "" },
        o = { offset: "number", method: "string", target: "(string|element)" },
        l = { ACTIVATE: "activate.bs.scrollspy", SCROLL: "scroll.bs.scrollspy", LOAD_DATA_API: "load.bs.scrollspy.data-api" },
        c = "dropdown-item",
        u = "active",
        d = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
        h = "offset",
        f = "position",
        p = function () {
      function i(t, i) {
        var n = this;this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(i), this._selector = this._config.target + " " + d.NAV_LINKS + "," + this._config.target + " " + d.LIST_ITEMS + "," + this._config.target + " " + d.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(l.SCROLL, function (e) {
          return n._process(e);
        }), this.refresh(), this._process();
      }var p = i.prototype;return p.refresh = function () {
        var t = this,
            i = this._scrollElement === this._scrollElement.window ? h : f,
            n = "auto" === this._config.method ? i : this._config.method,
            r = n === f ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.makeArray(e(this._selector)).map(function (t) {
          var i,
              o = a.getSelectorFromElement(t);if (o && (i = e(o)[0]), i) {
            var s = i.getBoundingClientRect();if (s.width || s.height) return [e(i)[n]().top + r, o];
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
      }, p._getConfig = function (i) {
        if ("string" != typeof (i = s({}, n, i)).target) {
          var r = e(i.target).attr("id");r || (r = a.getUID(t), e(i.target).attr("id", r)), i.target = "#" + r;
        }return a.typeCheckConfig(t, i, o), i;
      }, p._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }, p._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }, p._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }, p._process = function () {
        var e = this._getScrollTop() + this._config.offset,
            t = this._getScrollHeight(),
            i = this._config.offset + t - this._getOffsetHeight();if (this._scrollHeight !== t && this.refresh(), e >= i) {
          var n = this._targets[this._targets.length - 1];this._activeTarget !== n && this._activate(n);
        } else {
          if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();for (var r = this._offsets.length; r--;) {
            this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r]);
          }
        }
      }, p._activate = function (t) {
        this._activeTarget = t, this._clear();var i = this._selector.split(",");i = i.map(function (e) {
          return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
        });var n = e(i.join(","));n.hasClass(c) ? (n.closest(d.DROPDOWN).find(d.DROPDOWN_TOGGLE).addClass(u), n.addClass(u)) : (n.addClass(u), n.parents(d.NAV_LIST_GROUP).prev(d.NAV_LINKS + ", " + d.LIST_ITEMS).addClass(u), n.parents(d.NAV_LIST_GROUP).prev(d.NAV_ITEMS).children(d.NAV_LINKS).addClass(u)), e(this._scrollElement).trigger(l.ACTIVATE, { relatedTarget: t });
      }, p._clear = function () {
        e(this._selector).filter(d.ACTIVE).removeClass(u);
      }, i._jQueryInterface = function (t) {
        return this.each(function () {
          var n = e(this).data("bs.scrollspy");if (n || (n = new i(this, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t), e(this).data("bs.scrollspy", n)), "string" == typeof t) {
            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');n[t]();
          }
        });
      }, r(i, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return n;
        } }]), i;
    }();return e(window).on(l.LOAD_DATA_API, function () {
      for (var t = e.makeArray(e(d.DATA_SPY)), i = t.length; i--;) {
        var n = e(t[i]);p._jQueryInterface.call(n, n.data());
      }
    }), e.fn[t] = p._jQueryInterface, e.fn[t].Constructor = p, e.fn[t].noConflict = function () {
      return e.fn[t] = i, p._jQueryInterface;
    }, p;
  }(t),
      v = function (e) {
    var t = e.fn.tab,
        i = { HIDE: "hide.bs.tab", HIDDEN: "hidden.bs.tab", SHOW: "show.bs.tab", SHOWN: "shown.bs.tab", CLICK_DATA_API: "click.bs.tab.data-api" },
        n = "dropdown-menu",
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
          var n,
              r,
              l = e(this._element).closest(d)[0],
              c = a.getSelectorFromElement(this._element);if (l) {
            var u = "UL" === l.nodeName ? f : h;r = (r = e.makeArray(e(l).find(u)))[r.length - 1];
          }var p = e.Event(i.HIDE, { relatedTarget: this._element }),
              m = e.Event(i.SHOW, { relatedTarget: r });if (r && e(r).trigger(p), e(this._element).trigger(m), !m.isDefaultPrevented() && !p.isDefaultPrevented()) {
            c && (n = e(c)[0]), this._activate(this._element, l);var g = function g() {
              var n = e.Event(i.HIDDEN, { relatedTarget: t._element }),
                  o = e.Event(i.SHOWN, { relatedTarget: r });e(r).trigger(n), e(t._element).trigger(o);
            };n ? this._activate(n, n.parentNode, g) : g();
          }
        }
      }, p.dispose = function () {
        e.removeData(this._element, "bs.tab"), this._element = null;
      }, p._activate = function (t, i, n) {
        var r = this,
            o = ("UL" === i.nodeName ? e(i).find(f) : e(i).children(h))[0],
            s = n && o && e(o).hasClass(l),
            c = function c() {
          return r._transitionComplete(t, o, n);
        };if (o && s) {
          var u = a.getTransitionDurationFromElement(o);e(o).one(a.TRANSITION_END, c).emulateTransitionEnd(u);
        } else c();
      }, p._transitionComplete = function (t, i, r) {
        if (i) {
          e(i).removeClass(c + " " + o);var s = e(i.parentNode).find(g)[0];s && e(s).removeClass(o), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1);
        }if (e(t).addClass(o), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), a.reflow(t), e(t).addClass(c), t.parentNode && e(t.parentNode).hasClass(n)) {
          var l = e(t).closest(u)[0];l && e(l).find(m).addClass(o), t.setAttribute("aria-expanded", !0);
        }r && r();
      }, t._jQueryInterface = function (i) {
        return this.each(function () {
          var n = e(this),
              r = n.data("bs.tab");if (r || (r = new t(this), n.data("bs.tab", r)), "string" == typeof i) {
            if (void 0 === r[i]) throw new TypeError('No method named "' + i + '"');r[i]();
          }
        });
      }, r(t, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }]), t;
    }();return e(document).on(i.CLICK_DATA_API, p, function (t) {
      t.preventDefault(), v._jQueryInterface.call(e(this), "show");
    }), e.fn.tab = v._jQueryInterface, e.fn.tab.Constructor = v, e.fn.tab.noConflict = function () {
      return e.fn.tab = t, v._jQueryInterface;
    }, v;
  }(t);!function (e) {
    if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t = e.fn.jquery.split(" ")[0].split(".");if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(t), e.Util = a, e.Alert = l, e.Button = c, e.Carousel = u, e.Collapse = d, e.Dropdown = h, e.Modal = f, e.Popover = m, e.Scrollspy = g, e.Tab = v, e.Tooltip = p, Object.defineProperty(e, "__esModule", { value: !0 });
}), function (e, t) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
    return t(e, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("jquery")) : e.jQueryBridget = t(e, e.jQuery);
}(window, function (e, t) {
  "use strict";
  var i = Array.prototype.slice,
      n = e.console,
      r = void 0 === n ? function () {} : function (e) {
    n.error(e);
  };function o(n, o, a) {
    (a = a || t || e.jQuery) && (o.prototype.option || (o.prototype.option = function (e) {
      a.isPlainObject(e) && (this.options = a.extend(!0, this.options, e));
    }), a.fn[n] = function (e) {
      var t;return "string" == typeof e ? function (e, t, i) {
        var o,
            s = "$()." + n + '("' + t + '")';return e.each(function (e, l) {
          var c = a.data(l, n);if (c) {
            var u = c[t];if (u && "_" != t.charAt(0)) {
              var d = u.apply(c, i);o = void 0 === o ? d : o;
            } else r(s + " is not a valid method");
          } else r(n + " not initialized. Cannot call methods, i.e. " + s);
        }), void 0 !== o ? o : e;
      }(this, e, i.call(arguments, 1)) : (t = e, this.each(function (e, i) {
        var r = a.data(i, n);r ? (r.option(t), r._init()) : (r = new o(i, t), a.data(i, n, r));
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
      var i = this._events = this._events || {},
          n = i[e] = i[e] || [];return -1 == n.indexOf(t) && n.push(t), this;
    }
  }, t.once = function (e, t) {
    if (e && t) {
      this.on(e, t);var i = this._onceEvents = this._onceEvents || {};return (i[e] = i[e] || {})[t] = !0, this;
    }
  }, t.off = function (e, t) {
    var i = this._events && this._events[e];if (i && i.length) {
      var n = i.indexOf(t);return -1 != n && i.splice(n, 1), this;
    }
  }, t.emitEvent = function (e, t) {
    var i = this._events && this._events[e];if (i && i.length) {
      i = i.slice(0), t = t || [];for (var n = this._onceEvents && this._onceEvents[e], r = 0; r < i.length; r++) {
        var o = i[r];n && n[o] && (this.off(e, o), delete n[o]), o.apply(this, t);
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
      i = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      n = i.length;function r(e) {
    var i = getComputedStyle(e);return i || t("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i;
  }var o,
      s = !1;function a(t) {
    if (function () {
      if (!s) {
        s = !0;var t = document.createElement("div");t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";var i = document.body || document.documentElement;i.appendChild(t);var n = r(t);a.isBoxSizeOuter = o = 200 == e(n.width), i.removeChild(t);
      }
    }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t.nodeType) {
      var l = r(t);if ("none" == l.display) return function () {
        for (var e = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, t = 0; t < n; t++) {
          e[i[t]] = 0;
        }return e;
      }();var c = {};c.width = t.offsetWidth, c.height = t.offsetHeight;for (var u = c.isBorderBox = "border-box" == l.boxSizing, d = 0; d < n; d++) {
        var h = i[d],
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
    var e = window.Element.prototype;if (e.matches) return "matches";if (e.matchesSelector) return "matchesSelector";for (var t = ["webkit", "moz", "ms", "o"], i = 0; i < t.length; i++) {
      var n = t[i] + "MatchesSelector";if (e[n]) return n;
    }
  }();return function (t, i) {
    return t[e](i);
  };
}), function (e, t) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
    return t(e, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.matchesSelector);
}(window, function (e, t) {
  var i = { extend: function extend(e, t) {
      for (var i in t) {
        e[i] = t[i];
      }return e;
    }, modulo: function modulo(e, t) {
      return (e % t + t) % t;
    } },
      n = Array.prototype.slice;i.makeArray = function (e) {
    return Array.isArray(e) ? e : null === e || void 0 === e ? [] : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "number" == typeof e.length ? n.call(e) : [e];
  }, i.removeFrom = function (e, t) {
    var i = e.indexOf(t);-1 != i && e.splice(i, 1);
  }, i.getParent = function (e, i) {
    for (; e.parentNode && e != document.body;) {
      if (e = e.parentNode, t(e, i)) return e;
    }
  }, i.getQueryElement = function (e) {
    return "string" == typeof e ? document.querySelector(e) : e;
  }, i.handleEvent = function (e) {
    var t = "on" + e.type;this[t] && this[t](e);
  }, i.filterFindElements = function (e, n) {
    var r = [];return (e = i.makeArray(e)).forEach(function (e) {
      if (e instanceof HTMLElement) if (n) {
        t(e, n) && r.push(e);for (var i = e.querySelectorAll(n), o = 0; o < i.length; o++) {
          r.push(i[o]);
        }
      } else r.push(e);
    }), r;
  }, i.debounceMethod = function (e, t, i) {
    i = i || 100;var n = e.prototype[t],
        r = t + "Timeout";e.prototype[t] = function () {
      var e = this[r];clearTimeout(e);var t = arguments,
          o = this;this[r] = setTimeout(function () {
        n.apply(o, t), delete o[r];
      }, i);
    };
  }, i.docReady = function (e) {
    var t = document.readyState;"complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e);
  }, i.toDashed = function (e) {
    return e.replace(/(.)([A-Z])/g, function (e, t, i) {
      return t + "-" + i;
    }).toLowerCase();
  };var r = e.console;return i.htmlInit = function (t, n) {
    i.docReady(function () {
      var o = i.toDashed(n),
          s = "data-" + o,
          a = document.querySelectorAll("[" + s + "]"),
          l = document.querySelectorAll(".js-" + o),
          c = i.makeArray(a).concat(i.makeArray(l)),
          u = s + "-options",
          d = e.jQuery;c.forEach(function (e) {
        var i,
            o = e.getAttribute(s) || e.getAttribute(u);try {
          i = o && JSON.parse(o);
        } catch (t) {
          return void (r && r.error("Error parsing " + s + " on " + e.className + ": " + t));
        }var a = new t(e, i);d && d.data(e, n, a);
      });
    });
  }, i;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function (i) {
    return t(e, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("get-size")) : (e.Flickity = e.Flickity || {}, e.Flickity.Cell = t(e, e.getSize));
}(window, function (e, t) {
  function i(e, t) {
    this.element = e, this.parent = t, this.create();
  }var n = i.prototype;return n.create = function () {
    this.element.style.position = "absolute", this.element.setAttribute("aria-selected", "false"), this.x = 0, this.shift = 0;
  }, n.destroy = function () {
    this.element.style.position = "";var e = this.parent.originSide;this.element.removeAttribute("aria-selected"), this.element.style[e] = "";
  }, n.getSize = function () {
    this.size = t(this.element);
  }, n.setPosition = function (e) {
    this.x = e, this.updateTarget(), this.renderPosition(e);
  }, n.updateTarget = n.setDefaultTarget = function () {
    var e = "left" == this.parent.originSide ? "marginLeft" : "marginRight";this.target = this.x + this.size[e] + this.size.width * this.parent.cellAlign;
  }, n.renderPosition = function (e) {
    var t = this.parent.originSide;this.element.style[t] = this.parent.getPositionValue(e);
  }, n.wrapShift = function (e) {
    this.shift = e, this.renderPosition(this.x + this.parent.slideableWidth * e);
  }, n.remove = function () {
    this.element.parentNode.removeChild(this.element);
  }, i;
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
        i = t ? t.size[e] : 0,
        n = this.outerWidth - (this.firstMargin + i);this.target = this.x + this.firstMargin + n * this.parent.cellAlign;
  }, t.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  }, t.select = function () {
    this.changeSelected(!0);
  }, t.unselect = function () {
    this.changeSelected(!1);
  }, t.changeSelected = function (e) {
    var t = e ? "add" : "remove";this.cells.forEach(function (i) {
      i.element.classList[t]("is-selected"), i.element.setAttribute("aria-selected", e.toString());
    });
  }, t.getCellElements = function () {
    return this.cells.map(function (e) {
      return e.element;
    });
  }, e;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (i) {
    return t(e, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("fizzy-ui-utils")) : (e.Flickity = e.Flickity || {}, e.Flickity.animatePrototype = t(e, e.fizzyUIUtils));
}(window, function (e, t) {
  var i = { startAnimation: function startAnimation() {
      this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate());
    }, animate: function animate() {
      this.applyDragForce(), this.applySelectedAttraction();var e = this.x;if (this.integratePhysics(), this.positionSlider(), this.settle(e), this.isAnimating) {
        var t = this;requestAnimationFrame(function () {
          t.animate();
        });
      }
    }, positionSlider: function positionSlider() {
      var e = this.x;this.options.wrapAround && this.cells.length > 1 && (e = t.modulo(e, this.slideableWidth), e -= this.slideableWidth, this.shiftWrapCells(e)), e += this.cursorPosition, e = this.options.rightToLeft ? -e : e;var i = this.getPositionValue(e);this.slider.style.transform = this.isAnimating ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")";var n = this.slides[0];if (n) {
        var r = -this.x - n.target,
            o = r / this.slidesWidth;this.dispatchEvent("scroll", null, [o, r]);
      }
    }, positionSliderAtSelected: function positionSliderAtSelected() {
      this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider());
    }, getPositionValue: function getPositionValue(e) {
      return this.options.percentPosition ? .01 * Math.round(e / this.size.innerWidth * 1e4) + "%" : Math.round(e) + "px";
    }, settle: function settle(e) {
      this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * e) || this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]));
    }, shiftWrapCells: function shiftWrapCells(e) {
      var t = this.cursorPosition + e;this._shiftCells(this.beforeShiftCells, t, -1);var i = this.size.innerWidth - (e + this.slideableWidth + this.cursorPosition);this._shiftCells(this.afterShiftCells, i, 1);
    }, _shiftCells: function _shiftCells(e, t, i) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = t > 0 ? i : 0;r.wrapShift(o), t -= r.size.outerWidth;
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
    } };return i;
}), function (e, t) {
  if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function (i, n, r, o, s, a) {
    return t(e, i, n, r, o, s, a);
  });else if ("object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports) module.exports = t(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));else {
    var i = e.Flickity;e.Flickity = t(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, i.Cell, i.Slide, i.animatePrototype);
  }
}(window, function (e, t, i, n, r, o, s) {
  var a = e.jQuery,
      l = e.getComputedStyle,
      c = e.console;function u(e, t) {
    for (e = n.makeArray(e); e.length;) {
      t.appendChild(e.shift());
    }
  }var d = 0,
      h = {};function f(e, t) {
    var i = n.getQueryElement(e);if (i) {
      if (this.element = i, this.element.flickityGUID) {
        var r = h[this.element.flickityGUID];return r.option(t), r;
      }a && (this.$element = a(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(t), this._create();
    } else c && c.error("Bad element for Flickity: " + (i || e));
  }f.defaults = { accessibility: !0, cellAlign: "center", freeScrollFriction: .075, friction: .28, namespaceJQueryEvents: !0, percentPosition: !0, resize: !0, selectedAttraction: .025, setGallerySize: !0 }, f.createMethods = [];var p = f.prototype;n.extend(p, t.prototype), p._create = function () {
    var t = this.guid = ++d;for (var i in this.element.flickityGUID = t, h[t] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && e.addEventListener("resize", this), this.options.on) {
      var n = this.options.on[i];this.on(i, n);
    }f.createMethods.forEach(function (e) {
      this[e]();
    }, this), this.options.watchCSS ? this.watchCSS() : this.activate();
  }, p.option = function (e) {
    n.extend(this.options, e);
  }, p.activate = function () {
    if (!this.isActive) {
      var e;this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), u(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate");var t = this.options.initialIndex;e = this.isInitActivated ? this.selectedIndex : void 0 !== t && this.cells[t] ? t : 0, this.select(e, !1, !0), this.isInitActivated = !0, this.dispatchEvent("ready");
    }
  }, p._createSlider = function () {
    var e = document.createElement("div");e.className = "flickity-slider", e.style[this.originSide] = 0, this.slider = e;
  }, p._filterFindCellElements = function (e) {
    return n.filterFindElements(e, this.options.cellSelector);
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
      var i = this.cells[e - 1];t = i.x + i.size.outerWidth;
    }for (var n = this.cells.length, r = e; r < n; r++) {
      var o = this.cells[r];o.setPosition(t), t += o.size.outerWidth, this.maxCellHeight = Math.max(o.size.outerHeight, this.maxCellHeight);
    }this.slideableWidth = t, this.updateSlides(), this._containSlides(), this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0;
  }, p._sizeCells = function (e) {
    e.forEach(function (e) {
      e.getSize();
    });
  }, p.updateSlides = function () {
    if (this.slides = [], this.cells.length) {
      var e = new o(this);this.slides.push(e);var t = "left" == this.originSide ? "marginRight" : "marginLeft",
          i = this._getCanCellFit();this.cells.forEach(function (n, r) {
        if (e.cells.length) {
          var s = e.outerWidth - e.firstMargin + (n.size.outerWidth - n.size[t]);i.call(this, r, s) ? e.addCell(n) : (e.updateTarget(), e = new o(this), this.slides.push(e), e.addCell(n));
        } else e.addCell(n);
      }, this), e.updateTarget(), this.updateSelectedSlide();
    }
  }, p._getCanCellFit = function () {
    var e = this.options.groupCells;if (!e) return function () {
      return !1;
    };if ("number" == typeof e) {
      var t = parseInt(e, 10);return function (e) {
        return e % t != 0;
      };
    }var i = "string" == typeof e && e.match(/^(\d+)%$/),
        n = i ? parseInt(i[1], 10) / 100 : 1;return function (e, t) {
      return t <= (this.size.innerWidth + 1) * n;
    };
  }, p._init = p.reposition = function () {
    this.positionCells(), this.positionSliderAtSelected();
  }, p.getSize = function () {
    this.size = i(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign;
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
  }, p._getGapCells = function (e, t, i) {
    for (var n = []; e > 0;) {
      var r = this.cells[t];if (!r) break;n.push(r), t += i, e -= r.size.outerWidth;
    }return n;
  }, p._containSlides = function () {
    if (this.options.contain && !this.options.wrapAround && this.cells.length) {
      var e = this.options.rightToLeft,
          t = e ? "marginRight" : "marginLeft",
          i = e ? "marginLeft" : "marginRight",
          n = this.slideableWidth - this.getLastCell().size[i],
          r = n < this.size.innerWidth,
          o = this.cursorPosition + this.cells[0].size[t],
          s = n - this.size.innerWidth * (1 - this.cellAlign);this.slides.forEach(function (e) {
        r ? e.target = n * this.cellAlign : (e.target = Math.max(e.target, o), e.target = Math.min(e.target, s));
      }, this);
    }
  }, p.dispatchEvent = function (e, t, i) {
    var n = t ? [t].concat(i) : i;if (this.emitEvent(e, n), a && this.$element) {
      var r = e += this.options.namespaceJQueryEvents ? ".flickity" : "";if (t) {
        var o = a.Event(t);o.type = e, r = o;
      }this.$element.trigger(r, i);
    }
  }, p.select = function (e, t, i) {
    if (this.isActive && (e = parseInt(e, 10), this._wrapSelect(e), (this.options.wrapAround || t) && (e = n.modulo(e, this.slides.length)), this.slides[e])) {
      var r = this.selectedIndex;this.selectedIndex = e, this.updateSelectedSlide(), i ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [e]), e != r && this.dispatchEvent("change", null, [e]), this.dispatchEvent("cellSelect");
    }
  }, p._wrapSelect = function (e) {
    var t = this.slides.length;if (!(this.options.wrapAround && t > 1)) return e;var i = n.modulo(e, t),
        r = Math.abs(i - this.selectedIndex),
        o = Math.abs(i + t - this.selectedIndex),
        s = Math.abs(i - t - this.selectedIndex);!this.isDragSelect && o < r ? e += t : !this.isDragSelect && s < r && (e -= t), e < 0 ? this.x -= this.slideableWidth : e >= t && (this.x += this.slideableWidth);
  }, p.previous = function (e, t) {
    this.select(this.selectedIndex - 1, e, t);
  }, p.next = function (e, t) {
    this.select(this.selectedIndex + 1, e, t);
  }, p.updateSelectedSlide = function () {
    var e = this.slides[this.selectedIndex];e && (this.unselectSelectedSlide(), this.selectedSlide = e, e.select(), this.selectedCells = e.cells, this.selectedElements = e.getCellElements(), this.selectedCell = e.cells[0], this.selectedElement = this.selectedElements[0]);
  }, p.unselectSelectedSlide = function () {
    this.selectedSlide && this.selectedSlide.unselect();
  }, p.selectCell = function (e, t, i) {
    var n = this.queryCell(e);if (n) {
      var r = this.getCellSlideIndex(n);this.select(r, t, i);
    }
  }, p.getCellSlideIndex = function (e) {
    for (var t = 0; t < this.slides.length; t++) {
      if (-1 != this.slides[t].cells.indexOf(e)) return t;
    }
  }, p.getCell = function (e) {
    for (var t = 0; t < this.cells.length; t++) {
      var i = this.cells[t];if (i.element == e) return i;
    }
  }, p.getCells = function (e) {
    var t = [];return (e = n.makeArray(e)).forEach(function (e) {
      var i = this.getCell(e);i && t.push(i);
    }, this), t;
  }, p.getCellElements = function () {
    return this.cells.map(function (e) {
      return e.element;
    });
  }, p.getParentCell = function (e) {
    var t = this.getCell(e);return t || (e = n.getParent(e, ".flickity-slider > *"), this.getCell(e));
  }, p.getAdjacentCellElements = function (e, t) {
    if (!e) return this.selectedSlide.getCellElements();t = void 0 === t ? this.selectedIndex : t;var i = this.slides.length;if (1 + 2 * e >= i) return this.getCellElements();for (var r = [], o = t - e; o <= t + e; o++) {
      var s = this.options.wrapAround ? n.modulo(o, i) : o,
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
  }, n.debounceMethod(f, "onresize", 150), p.resize = function () {
    if (this.isActive) {
      this.getSize(), this.options.wrapAround && (this.x = n.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");var e = this.selectedElements && this.selectedElements[0];this.selectCell(e, !1, !0);
    }
  }, p.watchCSS = function () {
    this.options.watchCSS && (-1 != l(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate());
  }, p.onkeydown = function (e) {
    var t = document.activeElement && document.activeElement != this.element;if (this.options.accessibility && !t) {
      var i = f.keyboardHandlers[e.keyCode];i && i.call(this);
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
  }, n.extend(p, s), f.data = function (e) {
    var t = (e = n.getQueryElement(e)) && e.flickityGUID;return t && h[t];
  }, n.htmlInit(f, "flickity"), a && a.bridget && a.bridget("flickity", f), f.setJQuery = function (e) {
    a = e;
  }, f.Cell = r, f;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function (i) {
    return t(e, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("ev-emitter")) : e.Unipointer = t(e, e.EvEmitter);
}(window, function (e, t) {
  function i() {}var n = i.prototype = Object.create(t.prototype);n.bindStartEvent = function (e) {
    this._bindStartEvent(e, !0);
  }, n.unbindStartEvent = function (e) {
    this._bindStartEvent(e, !1);
  }, n._bindStartEvent = function (t, i) {
    var n = (i = void 0 === i || i) ? "addEventListener" : "removeEventListener",
        r = "mousedown";e.PointerEvent ? r = "pointerdown" : "ontouchstart" in e && (r = "touchstart"), t[n](r, this);
  }, n.handleEvent = function (e) {
    var t = "on" + e.type;this[t] && this[t](e);
  }, n.getTouch = function (e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];if (i.identifier == this.pointerIdentifier) return i;
    }
  }, n.onmousedown = function (e) {
    var t = e.button;t && 0 !== t && 1 !== t || this._pointerDown(e, e);
  }, n.ontouchstart = function (e) {
    this._pointerDown(e, e.changedTouches[0]);
  }, n.onpointerdown = function (e) {
    this._pointerDown(e, e);
  }, n._pointerDown = function (e, t) {
    e.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== t.pointerId ? t.pointerId : t.identifier, this.pointerDown(e, t));
  }, n.pointerDown = function (e, t) {
    this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t]);
  };var r = { mousedown: ["mousemove", "mouseup"], touchstart: ["touchmove", "touchend", "touchcancel"], pointerdown: ["pointermove", "pointerup", "pointercancel"] };return n._bindPostStartEvents = function (t) {
    if (t) {
      var i = r[t.type];i.forEach(function (t) {
        e.addEventListener(t, this);
      }, this), this._boundPointerEvents = i;
    }
  }, n._unbindPostStartEvents = function () {
    this._boundPointerEvents && (this._boundPointerEvents.forEach(function (t) {
      e.removeEventListener(t, this);
    }, this), delete this._boundPointerEvents);
  }, n.onmousemove = function (e) {
    this._pointerMove(e, e);
  }, n.onpointermove = function (e) {
    e.pointerId == this.pointerIdentifier && this._pointerMove(e, e);
  }, n.ontouchmove = function (e) {
    var t = this.getTouch(e.changedTouches);t && this._pointerMove(e, t);
  }, n._pointerMove = function (e, t) {
    this.pointerMove(e, t);
  }, n.pointerMove = function (e, t) {
    this.emitEvent("pointerMove", [e, t]);
  }, n.onmouseup = function (e) {
    this._pointerUp(e, e);
  }, n.onpointerup = function (e) {
    e.pointerId == this.pointerIdentifier && this._pointerUp(e, e);
  }, n.ontouchend = function (e) {
    var t = this.getTouch(e.changedTouches);t && this._pointerUp(e, t);
  }, n._pointerUp = function (e, t) {
    this._pointerDone(), this.pointerUp(e, t);
  }, n.pointerUp = function (e, t) {
    this.emitEvent("pointerUp", [e, t]);
  }, n._pointerDone = function () {
    this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone();
  }, n._pointerReset = function () {
    this.isPointerDown = !1, delete this.pointerIdentifier;
  }, n.pointerDone = function () {}, n.onpointercancel = function (e) {
    e.pointerId == this.pointerIdentifier && this._pointerCancel(e, e);
  }, n.ontouchcancel = function (e) {
    var t = this.getTouch(e.changedTouches);t && this._pointerCancel(e, t);
  }, n._pointerCancel = function (e, t) {
    this._pointerDone(), this.pointerCancel(e, t);
  }, n.pointerCancel = function (e, t) {
    this.emitEvent("pointerCancel", [e, t]);
  }, i.getPointerPoint = function (e) {
    return { x: e.pageX, y: e.pageY };
  }, i;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function (i) {
    return t(e, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("unipointer")) : e.Unidragger = t(e, e.Unipointer);
}(window, function (e, t) {
  function i() {}var n = i.prototype = Object.create(t.prototype);n.bindHandles = function () {
    this._bindHandles(!0);
  }, n.unbindHandles = function () {
    this._bindHandles(!1);
  }, n._bindHandles = function (t) {
    for (var i = (t = void 0 === t || t) ? "addEventListener" : "removeEventListener", n = t ? this._touchActionValue : "", r = 0; r < this.handles.length; r++) {
      var o = this.handles[r];this._bindStartEvent(o, t), o[i]("click", this), e.PointerEvent && (o.style.touchAction = n);
    }
  }, n._touchActionValue = "none", n.pointerDown = function (e, t) {
    this.okayPointerDown(e) && (this.pointerDownPointer = t, e.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t]));
  };var r = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 },
      o = { radio: !0, checkbox: !0, button: !0, submit: !0, image: !0, file: !0 };return n.okayPointerDown = function (e) {
    var t = r[e.target.nodeName],
        i = o[e.target.type],
        n = !t || i;return n || this._pointerReset(), n;
  }, n.pointerDownBlur = function () {
    var e = document.activeElement;e && e.blur && e != document.body && e.blur();
  }, n.pointerMove = function (e, t) {
    var i = this._dragPointerMove(e, t);this.emitEvent("pointerMove", [e, t, i]), this._dragMove(e, t, i);
  }, n._dragPointerMove = function (e, t) {
    var i = { x: t.pageX - this.pointerDownPointer.pageX, y: t.pageY - this.pointerDownPointer.pageY };return !this.isDragging && this.hasDragStarted(i) && this._dragStart(e, t), i;
  }, n.hasDragStarted = function (e) {
    return Math.abs(e.x) > 3 || Math.abs(e.y) > 3;
  }, n.pointerUp = function (e, t) {
    this.emitEvent("pointerUp", [e, t]), this._dragPointerUp(e, t);
  }, n._dragPointerUp = function (e, t) {
    this.isDragging ? this._dragEnd(e, t) : this._staticClick(e, t);
  }, n._dragStart = function (e, t) {
    this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(e, t);
  }, n.dragStart = function (e, t) {
    this.emitEvent("dragStart", [e, t]);
  }, n._dragMove = function (e, t, i) {
    this.isDragging && this.dragMove(e, t, i);
  }, n.dragMove = function (e, t, i) {
    e.preventDefault(), this.emitEvent("dragMove", [e, t, i]);
  }, n._dragEnd = function (e, t) {
    this.isDragging = !1, setTimeout(function () {
      delete this.isPreventingClicks;
    }.bind(this)), this.dragEnd(e, t);
  }, n.dragEnd = function (e, t) {
    this.emitEvent("dragEnd", [e, t]);
  }, n.onclick = function (e) {
    this.isPreventingClicks && e.preventDefault();
  }, n._staticClick = function (e, t) {
    this.isIgnoringMouseUp && "mouseup" == e.type || (this.staticClick(e, t), "mouseup" != e.type && (this.isIgnoringMouseUp = !0, setTimeout(function () {
      delete this.isIgnoringMouseUp;
    }.bind(this), 400)));
  }, n.staticClick = function (e, t) {
    this.emitEvent("staticClick", [e, t]);
  }, i.getPointerPoint = t.getPointerPoint, i;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function (i, n, r) {
    return t(e, i, n, r);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : e.Flickity = t(e, e.Flickity, e.Unidragger, e.fizzyUIUtils);
}(window, function (e, t, i, n) {
  n.extend(t.defaults, { draggable: ">1", dragThreshold: 3 }), t.createMethods.push("_createDrag");var r = t.prototype;n.extend(r, i.prototype), r._touchActionValue = "pan-y";var o = "createTouch" in document,
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
  }, r.pointerDown = function (t, i) {
    this.isDraggable ? this.okayPointerDown(t) && (this._pointerDownPreventDefault(t), this.pointerDownFocus(t), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = l(), e.addEventListener("scroll", this), this._pointerDownDefault(t, i)) : this._pointerDownDefault(t, i);
  }, r._pointerDownDefault = function (e, t) {
    this.pointerDownPointer = t, this._bindPostStartEvents(e), this.dispatchEvent("pointerDown", e, [t]);
  };var a = { INPUT: !0, TEXTAREA: !0, SELECT: !0 };function l() {
    return { x: e.pageXOffset, y: e.pageYOffset };
  }return r.pointerDownFocus = function (e) {
    a[e.target.nodeName] || this.focus();
  }, r._pointerDownPreventDefault = function (e) {
    var t = "touchstart" == e.type,
        i = "touch" == e.pointerType,
        n = a[e.target.nodeName];t || i || n || e.preventDefault();
  }, r.hasDragStarted = function (e) {
    return Math.abs(e.x) > this.options.dragThreshold;
  }, r.pointerUp = function (e, t) {
    delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", e, [t]), this._dragPointerUp(e, t);
  }, r.pointerDone = function () {
    e.removeEventListener("scroll", this), delete this.pointerDownScroll;
  }, r.dragStart = function (t, i) {
    this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), e.removeEventListener("scroll", this), this.dispatchEvent("dragStart", t, [i]));
  }, r.pointerMove = function (e, t) {
    var i = this._dragPointerMove(e, t);this.dispatchEvent("pointerMove", e, [t, i]), this._dragMove(e, t, i);
  }, r.dragMove = function (e, t, i) {
    if (this.isDraggable) {
      e.preventDefault(), this.previousDragX = this.dragX;var n = this.options.rightToLeft ? -1 : 1;this.options.wrapAround && (i.x = i.x % this.slideableWidth);var r = this.dragStartPosition + i.x * n;if (!this.options.wrapAround && this.slides.length) {
        var o = Math.max(-this.slides[0].target, this.dragStartPosition);r = r > o ? .5 * (r + o) : r;var s = Math.min(-this.getLastSlide().target, this.dragStartPosition);r = r < s ? .5 * (r + s) : r;
      }this.dragX = r, this.dragMoveTime = new Date(), this.dispatchEvent("dragMove", e, [t, i]);
    }
  }, r.dragEnd = function (e, t) {
    if (this.isDraggable) {
      this.options.freeScroll && (this.isFreeScrolling = !0);var i = this.dragEndRestingSelect();if (this.options.freeScroll && !this.options.wrapAround) {
        var n = this.getRestingPosition();this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target;
      } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(i), delete this.isDragSelect, this.dispatchEvent("dragEnd", e, [t]);
    }
  }, r.dragEndRestingSelect = function () {
    var e = this.getRestingPosition(),
        t = Math.abs(this.getSlideDistance(-e, this.selectedIndex)),
        i = this._getClosestResting(e, t, 1),
        n = this._getClosestResting(e, t, -1);return i.distance < n.distance ? i.index : n.index;
  }, r._getClosestResting = function (e, t, i) {
    for (var n = this.selectedIndex, r = 1 / 0, o = this.options.contain && !this.options.wrapAround ? function (e, t) {
      return e <= t;
    } : function (e, t) {
      return e < t;
    }; o(t, r) && (n += i, r = t, null !== (t = this.getSlideDistance(-e, n)));) {
      t = Math.abs(t);
    }return { distance: r, index: n - i };
  }, r.getSlideDistance = function (e, t) {
    var i = this.slides.length,
        r = this.options.wrapAround && i > 1,
        o = r ? n.modulo(t, i) : t,
        s = this.slides[o];if (!s) return null;var a = r ? this.slideableWidth * Math.floor(t / i) : 0;return e - (s.target + a);
  }, r.dragEndBoostSelect = function () {
    if (void 0 === this.previousDragX || !this.dragMoveTime || new Date() - this.dragMoveTime > 100) return 0;var e = this.getSlideDistance(-this.dragX, this.selectedIndex),
        t = this.previousDragX - this.dragX;return e > 0 && t > 0 ? 1 : e < 0 && t < 0 ? -1 : 0;
  }, r.staticClick = function (e, t) {
    var i = this.getParentCell(e.target),
        n = i && i.element,
        r = i && this.cells.indexOf(i);this.dispatchEvent("staticClick", e, [t, n, r]);
  }, r.onscroll = function () {
    var e = l(),
        t = this.pointerDownScroll.x - e.x,
        i = this.pointerDownScroll.y - e.y;(Math.abs(t) > 3 || Math.abs(i) > 3) && this._pointerDone();
  }, t;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("tap-listener/tap-listener", ["unipointer/unipointer"], function (i) {
    return t(e, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("unipointer")) : e.TapListener = t(e, e.Unipointer);
}(window, function (e, t) {
  function i(e) {
    this.bindTap(e);
  }var n = i.prototype = Object.create(t.prototype);return n.bindTap = function (e) {
    e && (this.unbindTap(), this.tapElement = e, this._bindStartEvent(e, !0));
  }, n.unbindTap = function () {
    this.tapElement && (this._bindStartEvent(this.tapElement, !0), delete this.tapElement);
  }, n.pointerUp = function (i, n) {
    if (!this.isIgnoringMouseUp || "mouseup" != i.type) {
      var r = t.getPointerPoint(n),
          o = this.tapElement.getBoundingClientRect(),
          s = e.pageXOffset,
          a = e.pageYOffset;if (r.x >= o.left + s && r.x <= o.right + s && r.y >= o.top + a && r.y <= o.bottom + a && this.emitEvent("tap", [i, n]), "mouseup" != i.type) {
        this.isIgnoringMouseUp = !0;var l = this;setTimeout(function () {
          delete l.isIgnoringMouseUp;
        }, 400);
      }
    }
  }, n.destroy = function () {
    this.pointerDone(), this.unbindTap();
  }, i;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function (i, n, r) {
    return t(e, i, n, r);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : t(e, e.Flickity, e.TapListener, e.fizzyUIUtils);
}(window, function (e, t, i, n) {
  "use strict";
  var r = "http://www.w3.org/2000/svg";function o(e, t) {
    this.direction = e, this.parent = t, this._create();
  }o.prototype = Object.create(i.prototype), o.prototype._create = function () {
    this.isEnabled = !0, this.isPrevious = -1 == this.direction;var e = this.parent.options.rightToLeft ? 1 : -1;this.isLeft = this.direction == e;var t = this.element = document.createElement("button");t.className = "flickity-button flickity-prev-next-button", t.className += this.isPrevious ? " previous" : " next", t.setAttribute("type", "button"), this.disable(), t.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");var i = this.createSVG();t.appendChild(i), this.on("tap", this.onTap), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
  }, o.prototype.activate = function () {
    this.bindTap(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element);
  }, o.prototype.deactivate = function () {
    this.parent.element.removeChild(this.element), i.prototype.destroy.call(this), this.element.removeEventListener("click", this);
  }, o.prototype.createSVG = function () {
    var e = document.createElementNS(r, "svg");e.setAttribute("class", "flickity-button-icon"), e.setAttribute("viewBox", "0 0 100 100");var t = document.createElementNS(r, "path"),
        i = function (e) {
      if ("string" == typeof e) return e;return "M " + e.x0 + ",50 L " + e.x1 + "," + (e.y1 + 50) + " L " + e.x2 + "," + (e.y2 + 50) + " L " + e.x3 + ",50  L " + e.x2 + "," + (50 - e.y2) + " L " + e.x1 + "," + (50 - e.y1) + " Z";
    }(this.parent.options.arrowShape);return t.setAttribute("d", i), t.setAttribute("class", "arrow"), this.isLeft || t.setAttribute("transform", "translate(100, 100) rotate(180) "), e.appendChild(t), e;
  }, o.prototype.onTap = function () {
    if (this.isEnabled) {
      this.parent.uiChange();var e = this.isPrevious ? "previous" : "next";this.parent[e]();
    }
  }, o.prototype.handleEvent = n.handleEvent, o.prototype.onclick = function (e) {
    var t = document.activeElement;t && t == this.element && this.onTap(e, e);
  }, o.prototype.enable = function () {
    this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0);
  }, o.prototype.disable = function () {
    this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1);
  }, o.prototype.update = function () {
    var e = this.parent.slides;if (this.parent.options.wrapAround && e.length > 1) this.enable();else {
      var t = e.length ? e.length - 1 : 0,
          i = this.isPrevious ? 0 : t;this[this.parent.selectedIndex == i ? "disable" : "enable"]();
    }
  }, o.prototype.destroy = function () {
    this.deactivate();
  }, n.extend(t.defaults, { prevNextButtons: !0, arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 } }), t.createMethods.push("_createPrevNextButtons");var s = t.prototype;return s._createPrevNextButtons = function () {
    this.options.prevNextButtons && (this.prevButton = new o(-1, this), this.nextButton = new o(1, this), this.on("activate", this.activatePrevNextButtons));
  }, s.activatePrevNextButtons = function () {
    this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons);
  }, s.deactivatePrevNextButtons = function () {
    this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons);
  }, t.PrevNextButton = o, t;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function (i, n, r) {
    return t(e, i, n, r);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : t(e, e.Flickity, e.TapListener, e.fizzyUIUtils);
}(window, function (e, t, i, n) {
  function r(e) {
    this.parent = e, this._create();
  }r.prototype = new i(), r.prototype._create = function () {
    this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.on("tap", this.onTap), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
  }, r.prototype.activate = function () {
    this.setDots(), this.bindTap(this.holder), this.parent.element.appendChild(this.holder);
  }, r.prototype.deactivate = function () {
    this.parent.element.removeChild(this.holder), i.prototype.destroy.call(this);
  }, r.prototype.setDots = function () {
    var e = this.parent.slides.length - this.dots.length;e > 0 ? this.addDots(e) : e < 0 && this.removeDots(-e);
  }, r.prototype.addDots = function (e) {
    for (var t = document.createDocumentFragment(), i = [], n = this.dots.length, r = n + e, o = n; o < r; o++) {
      var s = document.createElement("li");s.className = "dot", s.setAttribute("aria-label", "Page dot " + (o + 1)), t.appendChild(s), i.push(s);
    }this.holder.appendChild(t), this.dots = this.dots.concat(i);
  }, r.prototype.removeDots = function (e) {
    this.dots.splice(this.dots.length - e, e).forEach(function (e) {
      this.holder.removeChild(e);
    }, this);
  }, r.prototype.updateSelected = function () {
    this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"));
  }, r.prototype.onTap = function (e) {
    var t = e.target;if ("LI" == t.nodeName) {
      this.parent.uiChange();var i = this.dots.indexOf(t);this.parent.select(i);
    }
  }, r.prototype.destroy = function () {
    this.deactivate();
  }, t.PageDots = r, n.extend(t.defaults, { pageDots: !0 }), t.createMethods.push("_createPageDots");var o = t.prototype;return o._createPageDots = function () {
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
  "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function (e, i, n) {
    return t(e, i, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : t(e.EvEmitter, e.fizzyUIUtils, e.Flickity);
}(window, function (e, t, i) {
  function n(e) {
    this.parent = e, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this);
  }n.prototype = Object.create(e.prototype), n.prototype.play = function () {
    "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()));
  }, n.prototype.tick = function () {
    if ("playing" == this.state) {
      var e = this.parent.options.autoPlay;e = "number" == typeof e ? e : 3e3;var t = this;this.clear(), this.timeout = setTimeout(function () {
        t.parent.next(!0), t.tick();
      }, e);
    }
  }, n.prototype.stop = function () {
    this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange);
  }, n.prototype.clear = function () {
    clearTimeout(this.timeout);
  }, n.prototype.pause = function () {
    "playing" == this.state && (this.state = "paused", this.clear());
  }, n.prototype.unpause = function () {
    "paused" == this.state && this.play();
  }, n.prototype.visibilityChange = function () {
    this[document.hidden ? "pause" : "unpause"]();
  }, n.prototype.visibilityPlay = function () {
    this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay);
  }, t.extend(i.defaults, { pauseAutoPlayOnHover: !0 }), i.createMethods.push("_createPlayer");var r = i.prototype;return r._createPlayer = function () {
    this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer);
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
  }, i.Player = n, i;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function (i, n) {
    return t(e, i, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("./flickity"), require("fizzy-ui-utils")) : t(e, e.Flickity, e.fizzyUIUtils);
}(window, function (e, t, i) {
  var n = t.prototype;return n.insert = function (e, t) {
    var i = this._makeCells(e);if (i && i.length) {
      var n = this.cells.length;t = void 0 === t ? n : t;var r = function (e) {
        var t = document.createDocumentFragment();return e.forEach(function (e) {
          t.appendChild(e.element);
        }), t;
      }(i),
          o = t == n;if (o) this.slider.appendChild(r);else {
        var s = this.cells[t].element;this.slider.insertBefore(r, s);
      }if (0 === t) this.cells = i.concat(this.cells);else if (o) this.cells = this.cells.concat(i);else {
        var a = this.cells.splice(t, n - t);this.cells = this.cells.concat(i).concat(a);
      }this._sizeCells(i), this.cellChange(t, !0);
    }
  }, n.append = function (e) {
    this.insert(e, this.cells.length);
  }, n.prepend = function (e) {
    this.insert(e, 0);
  }, n.remove = function (e) {
    var t = this.getCells(e);if (t && t.length) {
      var n = this.cells.length - 1;t.forEach(function (e) {
        e.remove();var t = this.cells.indexOf(e);n = Math.min(t, n), i.removeFrom(this.cells, e);
      }, this), this.cellChange(n, !0);
    }
  }, n.cellSizeChange = function (e) {
    var t = this.getCell(e);if (t) {
      t.getSize();var i = this.cells.indexOf(t);this.cellChange(i);
    }
  }, n.cellChange = function (e, t) {
    var i = this.selectedElement;this._positionCells(e), this._getWrapShiftCells(), this.setGallerySize();var n = this.getCell(i);n && (this.selectedIndex = this.getCellSlideIndex(n)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [e]), this.select(this.selectedIndex), t && this.positionSliderAtSelected();
  }, t;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function (i, n) {
    return t(e, i, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("./flickity"), require("fizzy-ui-utils")) : t(e, e.Flickity, e.fizzyUIUtils);
}(window, function (e, t, i) {
  "use strict";
  t.createMethods.push("_createLazyload");var n = t.prototype;function r(e, t) {
    this.img = e, this.flickity = t, this.load();
  }return n._createLazyload = function () {
    this.on("select", this.lazyLoad);
  }, n.lazyLoad = function () {
    var e = this.options.lazyLoad;if (e) {
      var t = "number" == typeof e ? e : 0,
          n = [];this.getAdjacentCellElements(t).forEach(function (e) {
        var t = function (e) {
          if ("IMG" == e.nodeName) {
            var t = e.getAttribute("data-flickity-lazyload"),
                n = e.getAttribute("data-flickity-lazyload-src"),
                r = e.getAttribute("data-flickity-lazyload-srcset");if (t || n || r) return [e];
          }var o = e.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");return i.makeArray(o);
        }(e);n = n.concat(t);
      }), n.forEach(function (e) {
        new r(e, this);
      }, this);
    }
  }, r.prototype.handleEvent = i.handleEvent, r.prototype.load = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this);var e = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
        t = this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src = e, t && this.img.setAttribute("srcset", t), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset");
  }, r.prototype.onload = function (e) {
    this.complete(e, "flickity-lazyloaded");
  }, r.prototype.onerror = function (e) {
    this.complete(e, "flickity-lazyerror");
  }, r.prototype.complete = function (e, t) {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);var i = this.flickity.getParentCell(this.img),
        n = i && i.element;this.flickity.cellSizeChange(n), this.img.classList.add(t), this.flickity.dispatchEvent("lazyLoad", e, n);
  }, t.LazyLoader = r, t;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], t) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports && (module.exports = t(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")));
}(window, function (e) {
  return e;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], t) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(require("flickity"), require("fizzy-ui-utils")) : e.Flickity = t(e.Flickity, e.fizzyUIUtils);
}(window, function (e, t) {
  e.createMethods.push("_createAsNavFor");var i = e.prototype;return i._createAsNavFor = function () {
    this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);var e = this.options.asNavFor;if (e) {
      var t = this;setTimeout(function () {
        t.setNavCompanion(e);
      });
    }
  }, i.setNavCompanion = function (i) {
    i = t.getQueryElement(i);var n = e.data(i);if (n && n != this) {
      this.navCompanion = n;var r = this;this.onNavCompanionSelect = function () {
        r.navCompanionSelect();
      }, n.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0);
    }
  }, i.navCompanionSelect = function (e) {
    if (this.navCompanion) {
      var t,
          i,
          n,
          r = this.navCompanion.selectedCells[0],
          o = this.navCompanion.cells.indexOf(r),
          s = o + this.navCompanion.selectedCells.length - 1,
          a = Math.floor((t = o, i = s, n = this.navCompanion.cellAlign, (i - t) * n + t));if (this.selectCell(a, !1, e), this.removeNavSelectedElements(), !(a >= this.cells.length)) {
        var l = this.cells.slice(o, s + 1);this.navSelectedElements = l.map(function (e) {
          return e.element;
        }), this.changeNavSelectedClass("add");
      }
    }
  }, i.changeNavSelectedClass = function (e) {
    this.navSelectedElements.forEach(function (t) {
      t.classList[e]("is-nav-selected");
    });
  }, i.activateAsNavFor = function () {
    this.navCompanionSelect(!0);
  }, i.removeNavSelectedElements = function () {
    this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements);
  }, i.onNavStaticClick = function (e, t, i, n) {
    "number" == typeof n && this.navCompanion.selectCell(n);
  }, i.deactivateAsNavFor = function () {
    this.removeNavSelectedElements();
  }, i.destroyAsNavFor = function () {
    this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion);
  }, e;
}), function (e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function (i) {
    return t(e, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter);
}("undefined" != typeof window ? window : this, function (e, t) {
  var i = e.jQuery,
      n = e.console;function r(e, t) {
    for (var i in t) {
      e[i] = t[i];
    }return e;
  }var o = Array.prototype.slice;function s(e, t, a) {
    if (!(this instanceof s)) return new s(e, t, a);var l,
        c = e;("string" == typeof e && (c = document.querySelectorAll(e)), c) ? (this.elements = (l = c, Array.isArray(l) ? l : "object" == (typeof l === "undefined" ? "undefined" : _typeof(l)) && "number" == typeof l.length ? o.call(l) : [l]), this.options = r({}, this.options), "function" == typeof t ? a = t : r(this.options, t), a && this.on("always", a), this.getImages(), i && (this.jqDeferred = new i.Deferred()), setTimeout(this.check.bind(this))) : n.error("Bad element for imagesLoaded " + (c || e));
  }s.prototype = Object.create(t.prototype), s.prototype.options = {}, s.prototype.getImages = function () {
    this.images = [], this.elements.forEach(this.addElementImages, this);
  }, s.prototype.addElementImages = function (e) {
    "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);var t = e.nodeType;if (t && a[t]) {
      for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
        var r = i[n];this.addImage(r);
      }if ("string" == typeof this.options.background) {
        var o = e.querySelectorAll(this.options.background);for (n = 0; n < o.length; n++) {
          var s = o[n];this.addElementBackgroundImages(s);
        }
      }
    }
  };var a = { 1: !0, 9: !0, 11: !0 };function l(e) {
    this.img = e;
  }function c(e, t) {
    this.url = e, this.element = t, this.img = new Image();
  }return s.prototype.addElementBackgroundImages = function (e) {
    var t = getComputedStyle(e);if (t) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
      var r = n && n[2];r && this.addBackground(r, e), n = i.exec(t.backgroundImage);
    }
  }, s.prototype.addImage = function (e) {
    var t = new l(e);this.images.push(t);
  }, s.prototype.addBackground = function (e, t) {
    var i = new c(e, t);this.images.push(i);
  }, s.prototype.check = function () {
    var e = this;function t(t, i, n) {
      setTimeout(function () {
        e.progress(t, i, n);
      });
    }this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function (e) {
      e.once("progress", t), e.check();
    }) : this.complete();
  }, s.prototype.progress = function (e, t, i) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && n && n.log("progress: " + i, e, t);
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
    (t = t || e.jQuery) && ((i = t).fn.imagesLoaded = function (e, t) {
      return new s(this, e, t).jqDeferred.promise(i(this));
    });
  }, s.makeJQueryPlugin(), s;
}), function (e, t) {
  "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function (i, n) {
    return t(e, i, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("flickity"), require("imagesloaded")) : e.Flickity = t(e, e.Flickity, e.imagesLoaded);
}(window, function (e, t, i) {
  "use strict";
  t.createMethods.push("_createImagesLoaded");var n = t.prototype;return n._createImagesLoaded = function () {
    this.on("activate", this.imagesLoaded);
  }, n.imagesLoaded = function () {
    if (this.options.imagesLoaded) {
      var e = this;i(this.slider).on("progress", function (t, i) {
        var n = e.getParentCell(i.img);e.cellSizeChange(n && n.element), e.options.freeScroll || e.positionSliderAtSelected();
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
  }function i(e, t) {
    var n;t = function e(t) {
      if (arguments.length <= 0) throw new Error("Missing arguments in extend function");var i,
          n,
          r,
          o = t || {};for (n = 1; n < arguments.length; n++) {
        var s = arguments[n] || {};for (i in s) {
          "object" != _typeof(o[i]) || (r = o[i]) && "undefined" != typeof window && (r === window || r.nodeType) ? o[i] = o[i] || s[i] : o[i] = e(o[i], s[i]);
        }
      }return o;
    }(t, i.options), this.lastKnownScrollY = 0, this.elem = e, this.tolerance = (n = t.tolerance) === Object(n) ? n : { down: n, up: n }, this.classes = t.classes, this.offset = t.offset, this.scroller = t.scroller, this.initialised = !1, this.onPin = t.onPin, this.onUnpin = t.onUnpin, this.onTop = t.onTop, this.onNotTop = t.onNotTop, this.onBottom = t.onBottom, this.onNotBottom = t.onNotBottom;
  }return window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, t.prototype = { constructor: t, update: function update() {
      this.callback && this.callback(), this.ticking = !1;
    }, requestTick: function requestTick() {
      this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0);
    }, handleEvent: function handleEvent() {
      this.requestTick();
    } }, i.prototype = { constructor: i, init: function init() {
      if (i.cutsTheMustard) return this.debouncer = new t(this.update.bind(this)), this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this;
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
          i = e + this.getScrollerPhysicalHeight() > this.getScrollerHeight();return t || i;
    }, toleranceExceeded: function toleranceExceeded(e, t) {
      return Math.abs(e - this.lastKnownScrollY) >= this.tolerance[t];
    }, shouldUnpin: function shouldUnpin(e, t) {
      var i = e > this.lastKnownScrollY,
          n = e >= this.offset;return i && n && t;
    }, shouldPin: function shouldPin(e, t) {
      var i = e < this.lastKnownScrollY,
          n = e <= this.offset;return i && t || n;
    }, update: function update() {
      var e = this.getScrollY(),
          t = e > this.lastKnownScrollY ? "down" : "up",
          i = this.toleranceExceeded(e, t);this.isOutOfBounds(e) || (e <= this.offset ? this.top() : this.notTop(), e + this.getViewportHeight() >= this.getScrollerHeight() ? this.bottom() : this.notBottom(), this.shouldUnpin(e, i) ? this.unpin() : this.shouldPin(e, i) && this.pin(), this.lastKnownScrollY = e);
    } }, i.options = { tolerance: { up: 0, down: 0 }, offset: 0, scroller: window, classes: { pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", bottom: "headroom--bottom", notBottom: "headroom--not-bottom", initial: "headroom" } }, i.cutsTheMustard = void 0 !== e && e.rAF && e.bind && e.classList, i;
}), function (e) {
  e && (e.fn.headroom = function (t) {
    return this.each(function () {
      var i = e(this),
          n = i.data("headroom"),
          r = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t;r = e.extend(!0, {}, Headroom.options, r), n || ((n = new Headroom(this, r)).init(), i.data("headroom", n)), "string" == typeof t && (n[t](), "destroy" === t && i.removeData("headroom"));
    });
  }, e("[data-headroom]").each(function () {
    var t = e(this);t.headroom(t.data());
  }));
}(window.Zepto || window.jQuery), function (e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery);
}(function (e) {
  "use strict";
  var t = e.scrollTo = function (t, i, n) {
    return e(window).scrollTo(t, i, n);
  };function i(t) {
    return !t.nodeName || -1 !== e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
  }function n(t) {
    return e.isFunction(t) || e.isPlainObject(t) ? t : { top: t, left: t };
  }return t.defaults = { axis: "xy", duration: 0, limit: !0 }, e.fn.scrollTo = function (r, o, s) {
    "object" == (typeof o === "undefined" ? "undefined" : _typeof(o)) && (s = o, o = 0), "function" == typeof s && (s = { onAfter: s }), "max" === r && (r = 9e9), s = e.extend({}, t.defaults, s), o = o || s.duration;var a = s.queue && s.axis.length > 1;return a && (o /= 2), s.offset = n(s.offset), s.over = n(s.over), this.each(function () {
      if (null !== r) {
        var l,
            c = i(this),
            u = c ? this.contentWindow || window : this,
            d = e(u),
            h = r,
            f = {};switch (typeof h === "undefined" ? "undefined" : _typeof(h)) {case "number":case "string":
            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(h)) {
              h = n(h);break;
            }h = c ? e(h) : e(h, u);case "object":
            if (0 === h.length) return;(h.is || h.style) && (l = (h = e(h)).offset());}var p = e.isFunction(s.offset) && s.offset(u, h) || s.offset;e.each(s.axis.split(""), function (e, i) {
          var n = "x" === i ? "Left" : "Top",
              r = n.toLowerCase(),
              o = "scroll" + n,
              g = d[o](),
              v = t.max(u, i);if (l) f[o] = l[r] + (c ? 0 : g - d.offset()[r]), s.margin && (f[o] -= parseInt(h.css("margin" + n), 10) || 0, f[o] -= parseInt(h.css("border" + n + "Width"), 10) || 0), f[o] += p[r] || 0, s.over[r] && (f[o] += h["x" === i ? "width" : "height"]() * s.over[r]);else {
            var y = h[r];f[o] = y.slice && "%" === y.slice(-1) ? parseFloat(y) / 100 * v : y;
          }s.limit && /^\d+$/.test(f[o]) && (f[o] = f[o] <= 0 ? 0 : Math.min(f[o], v)), !e && s.axis.length > 1 && (g === f[o] ? f = {} : a && (m(s.onAfterFirst), f = {}));
        }), m(s.onAfter);
      }function m(t) {
        var i = e.extend({}, s, { queue: !0, duration: o, complete: t && function () {
            t.call(u, h, s);
          } });d.animate(f, i);
      }
    });
  }, t.max = function (t, n) {
    var r = "x" === n ? "Width" : "Height",
        o = "scroll" + r;if (!i(t)) return t[o] - e(t)[r.toLowerCase()]();var s = "client" + r,
        a = t.ownerDocument || t.document,
        l = a.documentElement,
        c = a.body;return Math.max(l[o], c[o]) - Math.min(l[s], c[s]);
  }, e.Tween.propHooks.scrollLeft = e.Tween.propHooks.scrollTop = { get: function get(t) {
      return e(t.elem)[t.prop]();
    }, set: function set(t) {
      var i = this.get(t);if (t.options.interrupt && t._last && t._last !== i) return e(t.elem).stop();var n = Math.round(t.now);i !== n && (e(t.elem)[t.prop](n), t._last = this.get(t));
    } }, t;
}), function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? e(require("jquery")) : e(window.jQuery || window.Zepto);
}(function (e) {
  var t,
      i,
      n,
      r,
      o,
      s,
      a = function a() {},
      l = !!window.jQuery,
      c = e(window),
      u = function u(e, i) {
    t.ev.on("mfp" + e + ".mfp", i);
  },
      d = function d(t, i, n, r) {
    var o = document.createElement("div");return o.className = "mfp-" + t, n && (o.innerHTML = n), r ? i && i.appendChild(o) : (o = e(o), i && o.appendTo(i)), o;
  },
      h = function h(i, n) {
    t.ev.triggerHandler("mfp" + i, n), t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), t.st.callbacks[i] && t.st.callbacks[i].apply(t, e.isArray(n) ? n : [n]));
  },
      f = function f(i) {
    return i === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = i), t.currTemplate.closeBtn;
  },
      p = function p() {
    e.magnificPopup.instance || ((t = new a()).init(), e.magnificPopup.instance = t);
  };a.prototype = { constructor: a, init: function init() {
      var i = navigator.appVersion;t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(i), t.isIOS = /iphone|ipad|ipod/gi.test(i), t.supportsTransition = function () {
        var e = document.createElement("p").style,
            t = ["ms", "O", "Moz", "Webkit"];if (void 0 !== e.transition) return !0;for (; t.length;) {
          if (t.pop() + "Transition" in e) return !0;
        }return !1;
      }(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = e(document), t.popupsCache = {};
    }, open: function open(i) {
      var r;if (!1 === i.isObj) {
        t.items = i.items.toArray(), t.index = 0;var s,
            a = i.items;for (r = 0; r < a.length; r++) {
          if ((s = a[r]).parsed && (s = s.el[0]), s === i.el[0]) {
            t.index = r;break;
          }
        }
      } else t.items = e.isArray(i.items) ? i.items : [i.items], t.index = i.index || 0;if (!t.isOpen) {
        t.types = [], o = "", i.mainEl && i.mainEl.length ? t.ev = i.mainEl.eq(0) : t.ev = n, i.key ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}), t.currTemplate = t.popupsCache[i.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, i), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = d("bg").on("click.mfp", function () {
          t.close();
        }), t.wrap = d("wrap").attr("tabindex", -1).on("click.mfp", function (e) {
          t._checkIfClose(e.target) && t.close();
        }), t.container = d("container", t.wrap)), t.contentContainer = d("content"), t.st.preloader && (t.preloader = d("preloader", t.container, t.st.tLoading));var l = e.magnificPopup.modules;for (r = 0; r < l.length; r++) {
          var p = l[r];p = p.charAt(0).toUpperCase() + p.slice(1), t["init" + p].call(t);
        }h("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (u("MarkupParse", function (e, t, i, n) {
          i.close_replaceWith = f(n.type);
        }), o += " mfp-close-btn-in") : t.wrap.append(f())), t.st.alignTop && (o += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({ overflow: t.st.overflowY, overflowX: "hidden", overflowY: t.st.overflowY }) : t.wrap.css({ top: c.scrollTop(), position: "absolute" }), (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({ height: n.height(), position: "absolute" }), t.st.enableEscapeKey && n.on("keyup.mfp", function (e) {
          27 === e.keyCode && t.close();
        }), c.on("resize.mfp", function () {
          t.updateSize();
        }), t.st.closeOnContentClick || (o += " mfp-auto-cursor"), o && t.wrap.addClass(o);var m = t.wH = c.height(),
            g = {};if (t.fixedContentPos && t._hasScrollBar(m)) {
          var v = t._getScrollbarSize();v && (g.marginRight = v);
        }t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : g.overflow = "hidden");var y = t.st.mainClass;return t.isIE7 && (y += " mfp-ie7"), y && t._addClassToMFP(y), t.updateItemHTML(), h("BuildControls"), e("html").css(g), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function () {
          t.content ? (t._addClassToMFP("mfp-ready"), t._setFocus()) : t.bgOverlay.addClass("mfp-ready"), n.on("focusin.mfp", t._onFocusIn);
        }, 16), t.isOpen = !0, t.updateSize(m), h("Open"), i;
      }t.updateItemHTML();
    }, close: function close() {
      t.isOpen && (h("BeforeClose"), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP("mfp-removing"), setTimeout(function () {
        t._close();
      }, t.st.removalDelay)) : t._close());
    }, _close: function _close() {
      h("Close");var i = "mfp-removing mfp-ready ";if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (i += t.st.mainClass + " "), t._removeClassFromMFP(i), t.fixedContentPos) {
        var r = { marginRight: "" };t.isIE7 ? e("body, html").css("overflow", "") : r.overflow = "", e("html").css(r);
      }n.off("keyup.mfp focusin.mfp"), t.ev.off(".mfp"), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, h("AfterClose");
    }, updateSize: function updateSize(e) {
      if (t.isIOS) {
        var i = document.documentElement.clientWidth / window.innerWidth,
            n = window.innerHeight * i;t.wrap.css("height", n), t.wH = n;
      } else t.wH = e || c.height();t.fixedContentPos || t.wrap.css("height", t.wH), h("Resize");
    }, updateItemHTML: function updateItemHTML() {
      var i = t.items[t.index];t.contentContainer.detach(), t.content && t.content.detach(), i.parsed || (i = t.parseEl(t.index));var n = i.type;if (h("BeforeChange", [t.currItem ? t.currItem.type : "", n]), t.currItem = i, !t.currTemplate[n]) {
        var o = !!t.st[n] && t.st[n].markup;h("FirstMarkupParse", o), t.currTemplate[n] = !o || e(o);
      }r && r !== i.type && t.container.removeClass("mfp-" + r + "-holder");var s = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, t.currTemplate[n]);t.appendContent(s, n), i.preloaded = !0, h("Change", i), r = i.type, t.container.prepend(t.contentContainer), h("AfterChange");
    }, appendContent: function appendContent(e, i) {
      t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[i] ? t.content.find(".mfp-close").length || t.content.append(f()) : t.content = e : t.content = "", h("BeforeAppend"), t.container.addClass("mfp-" + i + "-holder"), t.contentContainer.append(t.content);
    }, parseEl: function parseEl(i) {
      var n,
          r = t.items[i];if (r.tagName ? r = { el: e(r) } : (n = r.type, r = { data: r, src: r.src }), r.el) {
        for (var o = t.types, s = 0; s < o.length; s++) {
          if (r.el.hasClass("mfp-" + o[s])) {
            n = o[s];break;
          }
        }r.src = r.el.attr("data-mfp-src"), r.src || (r.src = r.el.attr("href"));
      }return r.type = n || t.st.type || "inline", r.index = i, r.parsed = !0, t.items[i] = r, h("ElementParse", r), t.items[i];
    }, addGroup: function addGroup(e, i) {
      var n = function n(_n) {
        _n.mfpEl = this, t._openClick(_n, e, i);
      };i || (i = {});var r = "click.magnificPopup";i.mainEl = e, i.items ? (i.isObj = !0, e.off(r).on(r, n)) : (i.isObj = !1, i.delegate ? e.off(r).on(r, i.delegate, n) : (i.items = e, e.off(r).on(r, n)));
    }, _openClick: function _openClick(i, n, r) {
      if ((void 0 !== r.midClick ? r.midClick : e.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
        var o = void 0 !== r.disableOn ? r.disableOn : e.magnificPopup.defaults.disableOn;if (o) if (e.isFunction(o)) {
          if (!o.call(t)) return !0;
        } else if (c.width() < o) return !0;i.type && (i.preventDefault(), t.isOpen && i.stopPropagation()), r.el = e(i.mfpEl), r.delegate && (r.items = n.find(r.delegate)), t.open(r);
      }
    }, updateStatus: function updateStatus(e, n) {
      if (t.preloader) {
        i !== e && t.container.removeClass("mfp-s-" + i), n || "loading" !== e || (n = t.st.tLoading);var r = { status: e, text: n };h("UpdateStatus", r), e = r.status, n = r.text, t.preloader.html(n), t.preloader.find("a").on("click", function (e) {
          e.stopImmediatePropagation();
        }), t.container.addClass("mfp-s-" + e), i = e;
      }
    }, _checkIfClose: function _checkIfClose(i) {
      if (!e(i).hasClass("mfp-prevent-close")) {
        var n = t.st.closeOnContentClick,
            r = t.st.closeOnBgClick;if (n && r) return !0;if (!t.content || e(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0]) return !0;if (i === t.content[0] || e.contains(t.content[0], i)) {
          if (n) return !0;
        } else if (r && e.contains(document, i)) return !0;return !1;
      }
    }, _addClassToMFP: function _addClassToMFP(e) {
      t.bgOverlay.addClass(e), t.wrap.addClass(e);
    }, _removeClassFromMFP: function _removeClassFromMFP(e) {
      this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
    }, _hasScrollBar: function _hasScrollBar(e) {
      return (t.isIE7 ? n.height() : document.body.scrollHeight) > (e || c.height());
    }, _setFocus: function _setFocus() {
      (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
    }, _onFocusIn: function _onFocusIn(i) {
      if (i.target !== t.wrap[0] && !e.contains(t.wrap[0], i.target)) return t._setFocus(), !1;
    }, _parseMarkup: function _parseMarkup(t, i, n) {
      var r;n.data && (i = e.extend(n.data, i)), h("MarkupParse", [t, i, n]), e.each(i, function (i, n) {
        if (void 0 === n || !1 === n) return !0;if ((r = i.split("_")).length > 1) {
          var o = t.find(".mfp-" + r[0]);if (o.length > 0) {
            var s = r[1];"replaceWith" === s ? o[0] !== n[0] && o.replaceWith(n) : "img" === s ? o.is("img") ? o.attr("src", n) : o.replaceWith(e("<img>").attr("src", n).attr("class", o.attr("class"))) : o.attr(r[1], n);
          }
        } else t.find(".mfp-" + i).html(n);
      });
    }, _getScrollbarSize: function _getScrollbarSize() {
      if (void 0 === t.scrollbarSize) {
        var e = document.createElement("div");e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e);
      }return t.scrollbarSize;
    } }, e.magnificPopup = { instance: null, proto: a.prototype, modules: [], open: function open(t, i) {
      return p(), (t = t ? e.extend(!0, {}, t) : {}).isObj = !0, t.index = i || 0, this.instance.open(t);
    }, close: function close() {
      return e.magnificPopup.instance && e.magnificPopup.instance.close();
    }, registerModule: function registerModule(t, i) {
      i.options && (e.magnificPopup.defaults[t] = i.options), e.extend(this.proto, i.proto), this.modules.push(t);
    }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, e.fn.magnificPopup = function (i) {
    p();var n = e(this);if ("string" == typeof i) {
      if ("open" === i) {
        var r,
            o = l ? n.data("magnificPopup") : n[0].magnificPopup,
            s = parseInt(arguments[1], 10) || 0;o.items ? r = o.items[s] : (r = n, o.delegate && (r = r.find(o.delegate)), r = r.eq(s)), t._openClick({ mfpEl: r }, n, o);
      } else t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1));
    } else i = e.extend(!0, {}, i), l ? n.data("magnificPopup", i) : n[0].magnificPopup = i, t.addGroup(n, i);return n;
  };var m,
      g,
      v,
      y = function y() {
    v && (g.after(v.addClass(m)).detach(), v = null);
  };e.magnificPopup.registerModule("inline", { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function initInline() {
        t.types.push("inline"), u("Close.inline", function () {
          y();
        });
      }, getInline: function getInline(i, n) {
        if (y(), i.src) {
          var r = t.st.inline,
              o = e(i.src);if (o.length) {
            var s = o[0].parentNode;s && s.tagName && (g || (m = r.hiddenClass, g = d(m), m = "mfp-" + m), v = o.after(g).detach().removeClass(m)), t.updateStatus("ready");
          } else t.updateStatus("error", r.tNotFound), o = e("<div>");return i.inlineElement = o, o;
        }return t.updateStatus("ready"), t._parseMarkup(n, {}, i), n;
      } } });var b,
      w = function w() {
    b && e(document.body).removeClass(b);
  },
      E = function E() {
    w(), t.req && t.req.abort();
  };e.magnificPopup.registerModule("ajax", { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function initAjax() {
        t.types.push("ajax"), b = t.st.ajax.cursor, u("Close.ajax", E), u("BeforeChange.ajax", E);
      }, getAjax: function getAjax(i) {
        b && e(document.body).addClass(b), t.updateStatus("loading");var n = e.extend({ url: i.src, success: function success(n, r, o) {
            var s = { data: n, xhr: o };h("ParseAjax", s), t.appendContent(e(s.data), "ajax"), i.finished = !0, w(), t._setFocus(), setTimeout(function () {
              t.wrap.addClass("mfp-ready");
            }, 16), t.updateStatus("ready"), h("AjaxContentAdded");
          }, error: function error() {
            w(), i.finished = i.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", i.src));
          } }, t.st.ajax.settings);return t.req = e.ajax(n), "";
      } } });var C;e.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function initImage() {
        var i = t.st.image,
            n = ".image";t.types.push("image"), u("Open" + n, function () {
          "image" === t.currItem.type && i.cursor && e(document.body).addClass(i.cursor);
        }), u("Close" + n, function () {
          i.cursor && e(document.body).removeClass(i.cursor), c.off("resize.mfp");
        }), u("Resize" + n, t.resizeImage), t.isLowIE && u("AfterChange", t.resizeImage);
      }, resizeImage: function resizeImage() {
        var e = t.currItem;if (e && e.img && t.st.image.verticalFit) {
          var i = 0;t.isLowIE && (i = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - i);
        }
      }, _onImageHasSize: function _onImageHasSize(e) {
        e.img && (e.hasSize = !0, C && clearInterval(C), e.isCheckingImgSize = !1, h("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1));
      }, findImageSize: function findImageSize(e) {
        var i = 0,
            n = e.img[0],
            r = function r(o) {
          C && clearInterval(C), C = setInterval(function () {
            n.naturalWidth > 0 ? t._onImageHasSize(e) : (i > 200 && clearInterval(C), 3 === ++i ? r(10) : 40 === i ? r(50) : 100 === i && r(500));
          }, o);
        };r(1);
      }, getImage: function getImage(i, n) {
        var r = 0,
            o = function o() {
          i && (i.img[0].complete ? (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, h("ImageLoadComplete")) : ++r < 200 ? setTimeout(o, 100) : s());
        },
            s = function s() {
          i && (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0);
        },
            a = t.st.image,
            l = n.find(".mfp-img");if (l.length) {
          var c = document.createElement("img");c.className = "mfp-img", i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")), i.img = e(c).on("load.mfploader", o).on("error.mfploader", s), c.src = i.src, l.is("img") && (i.img = i.img.clone()), (c = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1);
        }return t._parseMarkup(n, { title: function (i) {
            if (i.data && void 0 !== i.data.title) return i.data.title;var n = t.st.image.titleSrc;if (n) {
              if (e.isFunction(n)) return n.call(t, i);if (i.el) return i.el.attr(n) || "";
            }return "";
          }(i), img_replaceWith: i.img }, i), t.resizeImage(), i.hasSize ? (C && clearInterval(C), i.loadError ? (n.addClass("mfp-loading"), t.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), t.updateStatus("ready")), n) : (t.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), t.findImageSize(i)), n);
      } } });var _;e.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function opener(e) {
        return e.is("img") ? e : e.find("img");
      } }, proto: { initZoom: function initZoom() {
        var e,
            i = t.st.zoom,
            n = ".zoom";if (i.enabled && t.supportsTransition) {
          var r,
              o,
              s = i.duration,
              a = function a(e) {
            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                n = "all " + i.duration / 1e3 + "s " + i.easing,
                r = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                o = "transition";return r["-webkit-" + o] = r["-moz-" + o] = r["-o-" + o] = r[o] = n, t.css(r), t;
          },
              l = function l() {
            t.content.css("visibility", "visible");
          };u("BuildControls" + n, function () {
            if (t._allowZoom()) {
              if (clearTimeout(r), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom())) return void l();(o = a(e)).css(t._getOffset()), t.wrap.append(o), r = setTimeout(function () {
                o.css(t._getOffset(!0)), r = setTimeout(function () {
                  l(), setTimeout(function () {
                    o.remove(), e = o = null, h("ZoomAnimationEnded");
                  }, 16);
                }, s);
              }, 16);
            }
          }), u("BeforeClose" + n, function () {
            if (t._allowZoom()) {
              if (clearTimeout(r), t.st.removalDelay = s, !e) {
                if (!(e = t._getItemToZoom())) return;o = a(e);
              }o.css(t._getOffset(!0)), t.wrap.append(o), t.content.css("visibility", "hidden"), setTimeout(function () {
                o.css(t._getOffset());
              }, 16);
            }
          }), u("Close" + n, function () {
            t._allowZoom() && (l(), o && o.remove(), e = null);
          });
        }
      }, _allowZoom: function _allowZoom() {
        return "image" === t.currItem.type;
      }, _getItemToZoom: function _getItemToZoom() {
        return !!t.currItem.hasSize && t.currItem.img;
      }, _getOffset: function _getOffset(i) {
        var n,
            r = (n = i ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
            o = parseInt(n.css("padding-top"), 10),
            s = parseInt(n.css("padding-bottom"), 10);r.top -= e(window).scrollTop() - o;var a = { width: n.width(), height: (l ? n.innerHeight() : n[0].offsetHeight) - s - o };return void 0 === _ && (_ = void 0 !== document.createElement("p").style.MozTransform), _ ? a["-moz-transform"] = a.transform = "translate(" + r.left + "px," + r.top + "px)" : (a.left = r.left, a.top = r.top), a;
      } } });var T = function T(e) {
    if (t.currTemplate.iframe) {
      var i = t.currTemplate.iframe.find("iframe");i.length && (e || (i[0].src = "//about:blank"), t.isIE8 && i.css("display", e ? "block" : "none"));
    }
  };e.magnificPopup.registerModule("iframe", { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function initIframe() {
        t.types.push("iframe"), u("BeforeChange", function (e, t, i) {
          t !== i && ("iframe" === t ? T() : "iframe" === i && T(!0));
        }), u("Close.iframe", function () {
          T();
        });
      }, getIframe: function getIframe(i, n) {
        var r = i.src,
            o = t.st.iframe;e.each(o.patterns, function () {
          if (r.indexOf(this.index) > -1) return this.id && (r = "string" == typeof this.id ? r.substr(r.lastIndexOf(this.id) + this.id.length, r.length) : this.id.call(this, r)), r = this.src.replace("%id%", r), !1;
        });var s = {};return o.srcAction && (s[o.srcAction] = r), t._parseMarkup(n, s, i), t.updateStatus("ready"), n;
      } } });var x = function x(e) {
    var i = t.items.length;return e > i - 1 ? e - i : e < 0 ? i + e : e;
  },
      k = function k(e, t, i) {
    return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i);
  };e.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function initGallery() {
        var i = t.st.gallery,
            r = ".mfp-gallery";if (t.direction = !0, !i || !i.enabled) return !1;o += " mfp-gallery", u("Open" + r, function () {
          i.navigateByImgClick && t.wrap.on("click" + r, ".mfp-img", function () {
            if (t.items.length > 1) return t.next(), !1;
          }), n.on("keydown" + r, function (e) {
            37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
          });
        }), u("UpdateStatus" + r, function (e, i) {
          i.text && (i.text = k(i.text, t.currItem.index, t.items.length));
        }), u("MarkupParse" + r, function (e, n, r, o) {
          var s = t.items.length;r.counter = s > 1 ? k(i.tCounter, o.index, s) : "";
        }), u("BuildControls" + r, function () {
          if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
            var n = i.arrowMarkup,
                r = t.arrowLeft = e(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass("mfp-prevent-close"),
                o = t.arrowRight = e(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass("mfp-prevent-close");r.click(function () {
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
          n.off(r), t.wrap.off("click" + r), t.arrowRight = t.arrowLeft = null;
        });
      }, next: function next() {
        t.direction = !0, t.index = x(t.index + 1), t.updateItemHTML();
      }, prev: function prev() {
        t.direction = !1, t.index = x(t.index - 1), t.updateItemHTML();
      }, goTo: function goTo(e) {
        t.direction = e >= t.index, t.index = e, t.updateItemHTML();
      }, preloadNearbyImages: function preloadNearbyImages() {
        var e,
            i = t.st.gallery.preload,
            n = Math.min(i[0], t.items.length),
            r = Math.min(i[1], t.items.length);for (e = 1; e <= (t.direction ? r : n); e++) {
          t._preloadItem(t.index + e);
        }for (e = 1; e <= (t.direction ? n : r); e++) {
          t._preloadItem(t.index - e);
        }
      }, _preloadItem: function _preloadItem(i) {
        if (i = x(i), !t.items[i].preloaded) {
          var n = t.items[i];n.parsed || (n = t.parseEl(i)), h("LazyLoad", n), "image" === n.type && (n.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
            n.hasSize = !0;
          }).on("error.mfploader", function () {
            n.hasSize = !0, n.loadError = !0, h("LazyLoadError", n);
          }).attr("src", n.src)), n.preloaded = !0;
        }
      } } });e.magnificPopup.registerModule("retina", { options: { replaceSrc: function replaceSrc(e) {
        return e.src.replace(/\.\w+$/, function (e) {
          return "@2x" + e;
        });
      }, ratio: 1 }, proto: { initRetina: function initRetina() {
        if (window.devicePixelRatio > 1) {
          var e = t.st.retina,
              i = e.ratio;(i = isNaN(i) ? i() : i) > 1 && (u("ImageHasSize.retina", function (e, t) {
            t.img.css({ "max-width": t.img[0].naturalWidth / i, width: "100%" });
          }), u("ElementParse.retina", function (t, n) {
            n.src = e.replaceSrc(n, i);
          }));
        }
      } } }), p();
}), "object" == (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) && function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : e.Plyr = t();
}(this, function () {
  "use strict";
  "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;var e,
      t,
      i = (function (e, t) {
    var i;i = function i() {
      var e = function e() {},
          t = {},
          i = {},
          n = {};function r(e, t) {
        if (e) {
          var r = n[e];if (i[e] = t, r) for (; r.length;) {
            r[0](e, t), r.splice(0, 1);
          }
        }
      }function o(t, i) {
        t.call && (t = { success: t }), i.length ? (t.error || e)(i) : (t.success || e)(t);
      }function s(t, i, n, r) {
        var o,
            a,
            l = document,
            c = n.async,
            u = (n.numRetries || 0) + 1,
            d = n.before || e,
            h = t.replace(/^(css|img)!/, "");r = r || 0, /(^css!|\.css$)/.test(t) ? (o = !0, (a = l.createElement("link")).rel = "stylesheet", a.href = h) : /(^img!|\.(png|gif|jpg|svg)$)/.test(t) ? (a = l.createElement("img")).src = h : ((a = l.createElement("script")).src = t, a.async = void 0 === c || c), a.onload = a.onerror = a.onbeforeload = function (e) {
          var l = e.type[0];if (o && "hideFocus" in a) try {
            a.sheet.cssText.length || (l = "e");
          } catch (e) {
            l = "e";
          }if ("e" == l && (r += 1) < u) return s(t, i, n, r);i(t, l, e.defaultPrevented);
        }, !1 !== d(t, a) && l.head.appendChild(a);
      }function a(e, i, n) {
        var a, l;if (i && i.trim && (a = i), l = (a ? n : i) || {}, a) {
          if (a in t) throw "LoadJS";t[a] = !0;
        }!function (e, t, i) {
          var n,
              r,
              o = (e = e.push ? e : [e]).length,
              a = o,
              l = [];for (n = function n(e, i, _n2) {
            if ("e" == i && l.push(e), "b" == i) {
              if (!_n2) return;l.push(e);
            }--o || t(l);
          }, r = 0; r < a; r++) {
            s(e[r], n, i);
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
              c = l;for (r = function r(e, i) {
            i.length && a.push(e), --c || t(a);
          }; l--;) {
            o = e[l], (s = i[o]) ? r(o, s) : (n[o] = n[o] || []).push(r);
          }
        }(e, function (e) {
          o(t, e);
        }), a;
      }, a.done = function (e) {
        r(e, []);
      }, a.reset = function () {
        t = {}, i = {}, n = {};
      }, a.isDefined = function (e) {
        return e in t;
      }, a;
    }, e.exports = i();
  }(e = { exports: {} }, e.exports), e.exports),
      n = function n(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  },
      r = function () {
    function e(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }return function (t, i, n) {
      return i && e(t.prototype, i), n && e(t, n), t;
    };
  }(),
      o = function o(e, t, i) {
    return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
  },
      s = function () {
    return function (e, t) {
      if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return function (e, t) {
        var i = [],
            n = !0,
            r = !1,
            o = void 0;try {
          for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value), !t || i.length !== t); n = !0) {}
        } catch (e) {
          r = !0, o = e;
        } finally {
          try {
            !n && a.return && a.return();
          } finally {
            if (r) throw o;
          }
        }return i;
      }(e, t);throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }(),
      a = function () {
    function e(t) {
      n(this, e), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key;
    }return r(e, [{ key: "get", value: function value(t) {
        if (!e.supported || !this.enabled) return null;var i = window.localStorage.getItem(this.key);if (u.is.empty(i)) return null;var n = JSON.parse(i);return u.is.string(t) && t.length ? n[t] : n;
      } }, { key: "set", value: function value(t) {
        if (e.supported && this.enabled && u.is.object(t)) {
          var i = this.get();u.is.empty(i) && (i = {}), u.extend(i, t), window.localStorage.setItem(this.key, JSON.stringify(i));
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
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";return new Promise(function (i, n) {
        try {
          var r = new XMLHttpRequest();if (!("withCredentials" in r)) return;r.addEventListener("load", function () {
            if ("text" === t) try {
              i(JSON.parse(r.responseText));
            } catch (e) {
              i(r.responseText);
            } else i(r.response);
          }), r.addEventListener("error", function () {
            throw new Error(r.statusText);
          }), r.open("GET", e, !0), r.responseType = t, r.send();
        } catch (e) {
          n(e);
        }
      });
    }, loadImage: function loadImage(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;return new Promise(function (i, n) {
        var r = new Image(),
            o = function o() {
          delete r.onload, delete r.onerror, (r.naturalWidth >= t ? i : n)(r);
        };Object.assign(r, { onload: o, onerror: o, src: e });
      });
    }, loadScript: function loadScript(e) {
      return new Promise(function (t, n) {
        i(e, { success: t, error: n });
      });
    }, loadSprite: function loadSprite(e, t) {
      if (u.is.string(e)) {
        var i = u.is.string(t),
            n = function n() {
          return null !== document.getElementById(t);
        },
            r = function r(e, t) {
          e.innerHTML = t, i && n() || document.body.insertAdjacentElement("afterbegin", e);
        };if (!i || !n()) {
          var o = a.supported,
              s = document.createElement("div");if (u.toggleHidden(s, !0), i && s.setAttribute("id", t), o) {
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
      var i = e.length ? e : [e];Array.from(i).reverse().forEach(function (e, i) {
        var n = i > 0 ? t.cloneNode(!0) : t,
            r = e.parentNode,
            o = e.nextSibling;n.appendChild(e), o ? r.insertBefore(n, o) : r.appendChild(n);
      });
    }, createElement: function createElement(e, t, i) {
      var n = document.createElement(e);return u.is.object(t) && u.setAttributes(n, t), u.is.string(i) && (n.innerText = i), n;
    }, insertAfter: function insertAfter(e, t) {
      t.parentNode.insertBefore(e, t.nextSibling);
    }, insertElement: function insertElement(e, t, i, n) {
      t.appendChild(u.createElement(e, i, n));
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
        var i = s(t, 2),
            n = i[0],
            r = i[1];e.setAttribute(n, r);
      });
    }, getAttributesFromSelector: function getAttributesFromSelector(e, t) {
      if (!u.is.string(e) || u.is.empty(e)) return {};var i = {},
          n = t;return e.split(",").forEach(function (e) {
        var t = e.trim(),
            r = t.replace(".", ""),
            o = t.replace(/[[\]]/g, "").split("="),
            s = o[0],
            a = o.length > 1 ? o[1].replace(/["']/g, "") : "";switch (t.charAt(0)) {case ".":
            u.is.object(n) && u.is.string(n.class) && (n.class += " " + r), i.class = r;break;case "#":
            i.id = t.replace("#", "");break;case "[":
            i[s] = a;}
      }), i;
    }, toggleHidden: function toggleHidden(e, t) {
      if (u.is.element(e)) {
        var i = t;u.is.boolean(i) || (i = !e.hasAttribute("hidden")), i ? e.setAttribute("hidden", "") : e.removeAttribute("hidden");
      }
    }, toggleClass: function toggleClass(e, t, i) {
      if (u.is.element(e)) {
        var n = "toggle";return void 0 !== i && (n = i ? "add" : "remove"), e.classList[n](t), e.classList.contains(t);
      }return null;
    }, hasClass: function hasClass(e, t) {
      return u.is.element(e) && e.classList.contains(t);
    }, matches: function matches(e, t) {
      var i = { Element: Element };var n = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function () {
        return Array.from(document.querySelectorAll(t)).includes(this);
      };return n.call(e, t);
    }, getElements: function getElements(e) {
      return this.elements.container.querySelectorAll(e);
    }, getElement: function getElement(e) {
      return this.elements.container.querySelector(e);
    }, getFocusElement: function getFocusElement() {
      var e = document.activeElement;return e = e && e !== document.body ? document.querySelector(":focus") : null;
    }, trapFocus: function trapFocus() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];if (u.is.element(e)) {
        var i = u.getElements.call(this, "button:not(:disabled), input:not(:disabled), [tabindex]"),
            n = i[0],
            r = i[i.length - 1],
            o = function o(e) {
          if ("Tab" === e.key && 9 === e.keyCode) {
            var t = u.getFocusElement();t !== r || e.shiftKey ? t === n && e.shiftKey && (r.focus(), e.preventDefault()) : (n.focus(), e.preventDefault());
          }
        };t ? u.on(this.elements.container, "keydown", o, !1) : u.off(this.elements.container, "keydown", o, !1);
      }
    }, toggleListener: function toggleListener(e, t, i) {
      var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];if (!u.is.empty(e) && !u.is.empty(t) && u.is.function(i)) if (u.is.nodeList(e) || u.is.array(e)) Array.from(e).forEach(function (e) {
        e instanceof Node && u.toggleListener.call(null, e, t, i, n, r, o);
      });else {
        var s = t.split(" "),
            a = o;d.passiveListeners && (a = { passive: r, capture: o }), s.forEach(function (t) {
          e[n ? "addEventListener" : "removeEventListener"](t, i, a);
        });
      }
    }, on: function on(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          i = arguments[2],
          n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];u.toggleListener(e, t, i, !0, n, r);
    }, off: function off(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          i = arguments[2],
          n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];u.toggleListener(e, t, i, !1, n, r);
    }, dispatchEvent: function dispatchEvent(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};if (u.is.element(e) && !u.is.empty(t)) {
        var r = new CustomEvent(t, { bubbles: i, detail: Object.assign({}, n, { plyr: this }) });e.dispatchEvent(r);
      }
    }, toggleState: function toggleState(e, t) {
      if (u.is.array(e) || u.is.nodeList(e)) Array.from(e).forEach(function (e) {
        return u.toggleState(e, t);
      });else if (u.is.element(e)) {
        var i = "true" === e.getAttribute("aria-pressed"),
            n = u.is.boolean(t) ? t : !i;e.setAttribute("aria-pressed", n);
      }
    }, format: function format(e) {
      for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) {
        i[n - 1] = arguments[n];
      }return u.is.empty(e) ? e : e.toString().replace(/{(\d+)}/g, function (e, t) {
        return u.is.string(i[t]) ? i[t] : "";
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
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];if (!u.is.number(e)) return u.formatTime(null, t, i);var n = function n(e) {
        return ("0" + e).slice(-2);
      },
          r = u.getHours(e),
          o = u.getMinutes(e),
          s = u.getSeconds(e);return t || r > 0 ? r += ":" : r = "", (i ? "-" : "") + r + n(o) + ":" + n(s);
    }, replaceAll: function replaceAll() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i.toString());
    }, toTitleCase: function toTitleCase() {
      return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/\w\S*/g, function (e) {
        return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
      });
    }, toPascalCase: function toPascalCase() {
      var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();return e = u.replaceAll(e, "-", " "), e = u.replaceAll(e, "_", " "), e = u.toTitleCase(e), u.replaceAll(e, " ", "");
    }, toCamelCase: function toCamelCase() {
      var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();return (e = u.toPascalCase(e)).charAt(0).toLowerCase() + e.slice(1);
    }, extend: function extend() {
      for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) {
        i[n - 1] = arguments[n];
      }if (!i.length) return e;var r = i.shift();return u.is.object(r) ? (Object.keys(r).forEach(function (t) {
        u.is.object(r[t]) ? (Object.keys(e).includes(t) || Object.assign(e, o({}, t, {})), u.extend(e[t], r[t])) : Object.assign(e, o({}, t, r[t]));
      }), u.extend.apply(u, [e].concat(function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, i = Array(e.length); t < e.length; t++) {
            i[t] = e[t];
          }return i;
        }return Array.from(e);
      }(i)))) : e;
    }, dedupe: function dedupe(e) {
      return u.is.array(e) ? e.filter(function (t, i) {
        return e.indexOf(t) === i;
      }) : e;
    }, cloneDeep: function cloneDeep(e) {
      return JSON.parse(JSON.stringify(e));
    }, getDeep: function getDeep(e, t) {
      return t.split(".").reduce(function (e, t) {
        return e && e[t];
      }, e);
    }, closest: function closest(e, t) {
      return u.is.array(e) && e.length ? e.reduce(function (e, i) {
        return Math.abs(i - t) < Math.abs(e - t) ? i : e;
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
        var i = t.split("="),
            n = s(i, 2),
            r = n[0],
            a = n[1];return Object.assign(e, o({}, r, decodeURIComponent(a)));
      }, {});
    }, buildUrlParams: function buildUrlParams(e) {
      return u.is.object(e) ? Object.keys(e).map(function (t) {
        return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
      }).join("&") : "";
    }, stripHTML: function stripHTML(e) {
      var t = document.createDocumentFragment(),
          i = document.createElement("div");return t.appendChild(i), i.innerHTML = e, t.firstChild.innerText;
    }, getHTML: function getHTML(e) {
      var t = document.createElement("div");return t.appendChild(e), t.innerHTML;
    }, getAspectRatio: function getAspectRatio(e, t) {
      var i = function e(t, i) {
        return 0 === i ? t : e(i, t % i);
      }(e, t);return e / i + ":" + t / i;
    }, get transitionEndEvent() {
      var e = document.createElement("span"),
          t = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" },
          i = Object.keys(t).find(function (t) {
        return void 0 !== e.style[t];
      });return !!u.is.string(i) && t[i];
    }, repaint: function repaint(e) {
      setTimeout(function () {
        u.toggleHidden(e, !0), e.offsetHeight, u.toggleHidden(e, !1);
      }, 0);
    } },
      d = { audio: "canPlayType" in document.createElement("audio"), video: "canPlayType" in document.createElement("video"), check: function check(e, t, i) {
      var n = !1,
          r = !1,
          o = u.getBrowser(),
          s = o.isIPhone && i && d.playsinline;switch (t + ":" + e) {case "html5:video":
          r = (n = d.video) && d.rangeInput && (!o.isIPhone || s);break;case "html5:audio":
          r = (n = d.audio) && d.rangeInput;break;case "youtube:video":case "vimeo:video":
          n = !0, r = d.rangeInput && (!o.isIPhone || s);break;default:
          r = (n = d.audio && d.video) && d.rangeInput;}return { api: n, ui: r };
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
            var t = h.getSources.call(e);if (u.is.empty(t)) return null;var i = Array.from(t).filter(function (t) {
              return t.getAttribute("src") === e.source;
            });return u.is.empty(i) ? null : Number(i[0].getAttribute("size"));
          }, set: function set(t) {
            var i = h.getSources.call(e);if (!u.is.empty(i)) {
              var n = Array.from(i).filter(function (e) {
                return Number(e.getAttribute("size")) === t;
              });if (!u.is.empty(n)) {
                var r = n.filter(function (t) {
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
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};if (u.is.empty(e) || u.is.empty(t)) return "";var i = u.getDeep(t.i18n, e);if (u.is.empty(i)) return "";var n = { "{seektime}": t.seekTime, "{title}": t.title };return Object.entries(n).forEach(function (e) {
      var t = s(e, 2),
          n = t[0],
          r = t[1];i = u.replaceAll(i, n, r);
    }), i;
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
      var i = m.getIconUrl.call(this),
          n = (i.cors ? "" : i.url) + "#" + this.config.iconPrefix,
          r = document.createElementNS("http://www.w3.org/2000/svg", "svg");u.setAttributes(r, u.extend(t, { role: "presentation", focusable: "false" }));var o = document.createElementNS("http://www.w3.org/2000/svg", "use"),
          s = n + "-" + e;return "href" in o ? o.setAttributeNS("http://www.w3.org/1999/xlink", "href", s) : o.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s), r.appendChild(o), r;
    }, createLabel: function createLabel(e, t) {
      var i = f(e, this.config),
          n = Object.assign({}, t);switch (e) {case "pip":
          i = "PIP";break;case "airplay":
          i = "AirPlay";}return "class" in n ? n.class += " " + this.config.classNames.hidden : n.class = this.config.classNames.hidden, u.createElement("span", n, i);
    }, createBadge: function createBadge(e) {
      if (u.is.empty(e)) return null;var t = u.createElement("span", { class: this.config.classNames.menu.value });return t.appendChild(u.createElement("span", { class: this.config.classNames.menu.badge }, e)), t;
    }, createButton: function createButton(e, t) {
      var i = u.createElement("button"),
          n = Object.assign({}, t),
          r = u.toCamelCase(e),
          o = !1,
          s = void 0,
          a = void 0,
          l = void 0,
          c = void 0;switch ("type" in n || (n.type = "button"), "class" in n ? n.class.includes(this.config.classNames.control) && (n.class += " " + this.config.classNames.control) : n.class = this.config.classNames.control, e) {case "play":
          o = !0, s = "play", l = "pause", a = "play", c = "pause";break;case "mute":
          o = !0, s = "mute", l = "unmute", a = "volume", c = "muted";break;case "captions":
          o = !0, s = "enableCaptions", l = "disableCaptions", a = "captions-off", c = "captions-on";break;case "fullscreen":
          o = !0, s = "enterFullscreen", l = "exitFullscreen", a = "enter-fullscreen", c = "exit-fullscreen";break;case "play-large":
          n.class += " " + this.config.classNames.control + "--overlaid", r = "play", s = "play", a = "play";break;default:
          s = r, a = e;}return o ? (i.appendChild(m.createIcon.call(this, c, { class: "icon--pressed" })), i.appendChild(m.createIcon.call(this, a, { class: "icon--not-pressed" })), i.appendChild(m.createLabel.call(this, l, { class: "label--pressed" })), i.appendChild(m.createLabel.call(this, s, { class: "label--not-pressed" })), n["aria-pressed"] = !1) : (i.appendChild(m.createIcon.call(this, a)), i.appendChild(m.createLabel.call(this, s))), u.extend(n, u.getAttributesFromSelector(this.config.selectors.buttons[r], n)), u.setAttributes(i, n), "play" === r ? (u.is.array(this.elements.buttons[r]) || (this.elements.buttons[r] = []), this.elements.buttons[r].push(i)) : this.elements.buttons[r] = i, i;
    }, createRange: function createRange(e, t) {
      var i = u.createElement("label", { for: t.id, id: t.id + "-label", class: this.config.classNames.hidden }, f(e, this.config)),
          n = u.createElement("input", u.extend(u.getAttributesFromSelector(this.config.selectors.inputs[e]), { type: "range", min: 0, max: 100, step: .01, value: 0, autocomplete: "off", role: "slider", "aria-labelledby": t.id + "-label", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": 0 }, t));return this.elements.inputs[e] = n, m.updateRangeFill.call(this, n), { label: i, input: n };
    }, createProgress: function createProgress(e, t) {
      var i = u.createElement("progress", u.extend(u.getAttributesFromSelector(this.config.selectors.display[e]), { min: 0, max: 100, value: 0, role: "presentation", "aria-hidden": !0 }, t));if ("volume" !== e) {
        i.appendChild(u.createElement("span", null, "0"));var n = "";switch (e) {case "played":
            n = f("played", this.config);break;case "buffer":
            n = f("buffered", this.config);}i.innerText = "% " + n.toLowerCase();
      }return this.elements.display[e] = i, i;
    }, createTime: function createTime(e) {
      var t = u.getAttributesFromSelector(this.config.selectors.display[e]),
          i = u.createElement("div", u.extend(t, { class: "plyr__time " + t.class, "aria-label": f(e, this.config) }), "00:00");return this.elements.display[e] = i, i;
    }, createMenuItem: function createMenuItem(e) {
      var t = e.value,
          i = e.list,
          n = e.type,
          r = e.title,
          o = e.badge,
          s = void 0 === o ? null : o,
          a = e.checked,
          l = void 0 !== a && a,
          c = u.createElement("li"),
          d = u.createElement("label", { class: this.config.classNames.control }),
          h = u.createElement("input", u.extend(u.getAttributesFromSelector(this.config.selectors.inputs[n]), { type: "radio", name: "plyr-" + n, value: t, checked: l, class: "plyr__sr-only" })),
          f = u.createElement("span", { hidden: "" });d.appendChild(h), d.appendChild(f), d.insertAdjacentHTML("beforeend", r), u.is.element(s) && d.appendChild(s), c.appendChild(d), i.appendChild(c);
    }, updateTimeDisplay: function updateTimeDisplay() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];if (u.is.element(e) && u.is.number(t)) {
        var n = u.getHours(this.duration) > 0;e.innerText = u.formatTime(t, n, i);
      }
    }, updateVolume: function updateVolume() {
      this.supported.ui && (u.is.element(this.elements.inputs.volume) && m.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), u.is.element(this.elements.buttons.mute) && u.toggleState(this.elements.buttons.mute, this.muted || 0 === this.volume));
    }, setRange: function setRange(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;u.is.element(e) && (e.value = t, m.updateRangeFill.call(this, e));
    }, updateProgress: function updateProgress(e) {
      var t = this;if (this.supported.ui && u.is.event(e)) {
        var i = 0;if (e) switch (e.type) {case "timeupdate":case "seeking":case "seeked":
            i = u.getPercentage(this.currentTime, this.duration), "timeupdate" === e.type && m.setRange.call(this, this.elements.inputs.seek, i);break;case "playing":case "progress":
            !function (e, i) {
              var n = u.is.number(i) ? i : 0,
                  r = u.is.element(e) ? e : t.elements.display.buffer;if (u.is.element(r)) {
                r.value = n;var o = r.getElementsByTagName("span")[0];u.is.element(o) && (o.childNodes[0].nodeValue = n);
              }
            }(this.elements.display.buffer, 100 * this.buffered);}
      }
    }, updateRangeFill: function updateRangeFill(e) {
      var t = u.is.event(e) ? e.target : e;u.is.element(t) && "range" === t.getAttribute("type") && (t.setAttribute("aria-valuenow", t.value), p.isWebkit && t.style.setProperty("--value", t.value / t.max * 100 + "%"));
    }, updateSeekTooltip: function updateSeekTooltip(e) {
      var t = this;if (this.config.tooltips.seek && u.is.element(this.elements.inputs.seek) && u.is.element(this.elements.display.seekTooltip) && 0 !== this.duration) {
        var i = 0,
            n = this.elements.progress.getBoundingClientRect(),
            r = this.config.classNames.tooltip + "--visible",
            o = function o(e) {
          u.toggleClass(t.elements.display.seekTooltip, r, e);
        };if (this.touch) o(!1);else {
          if (u.is.event(e)) i = 100 / n.width * (e.pageX - n.left);else {
            if (!u.hasClass(this.elements.display.seekTooltip, r)) return;i = parseFloat(this.elements.display.seekTooltip.style.left, 10);
          }i < 0 ? i = 0 : i > 100 && (i = 100), m.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * i), this.elements.display.seekTooltip.style.left = i + "%", u.is.event(e) && ["mouseenter", "mouseleave"].includes(e.type) && o("mouseenter" === e.type);
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
        var i = this.elements.settings.panes.quality.querySelector("ul");u.is.array(e) && (this.options.quality = e.filter(function (e) {
          return t.config.quality.options.includes(e);
        }));var n = !u.is.empty(this.options.quality) && this.options.quality.length > 1;if (m.toggleTab.call(this, "quality", n), m.checkMenu.call(this), n) {
          u.emptyElement(i);this.options.quality.sort(function (e, i) {
            var n = t.config.quality.options;return n.indexOf(e) > n.indexOf(i) ? 1 : -1;
          }).forEach(function (e) {
            m.createMenuItem.call(t, { value: e, list: i, type: "quality", title: m.getLabel.call(t, "quality", e), badge: function (e) {
                var i = f("qualityBadge." + e, t.config);return i.length ? m.createBadge.call(t, i) : null;
              }(e) });
          }), m.updateSetting.call(this, "quality", i);
        }
      }
    }, getLabel: function getLabel(e, t) {
      switch (e) {case "speed":
          return 1 === t ? f("normal", this.config) : t + "&times;";case "quality":
          if (u.is.number(t)) {
            var i = f("qualityLabel." + t, this.config);return i.length ? i : t + "p";
          }return u.toTitleCase(t);case "captions":
          return g.getLabel.call(this);default:
          return null;}
    }, updateSetting: function updateSetting(e, t, i) {
      var n = this.elements.settings.panes[e],
          r = null,
          o = t;switch (e) {case "captions":
          r = this.currentTrack;break;default:
          if (r = u.is.empty(i) ? this[e] : i, u.is.empty(r) && (r = this.config[e].default), !u.is.empty(this.options[e]) && !this.options[e].includes(r)) return void this.debug.warn("Unsupported value of '" + r + "' for " + e);if (!this.config[e].options.includes(r)) return void this.debug.warn("Disabled value of '" + r + "' for " + e);}if (u.is.element(o) || (o = n && n.querySelector("ul")), u.is.element(o)) {
        this.elements.settings.tabs[e].querySelector("." + this.config.classNames.menu.value).innerHTML = m.getLabel.call(this, e, r);var s = o && o.querySelector('input[value="' + r + '"]');u.is.element(s) && (s.checked = !0);
      }
    }, setCaptionsMenu: function setCaptionsMenu() {
      var e = this,
          t = this.elements.settings.panes.captions.querySelector("ul"),
          i = g.getTracks.call(this);if (m.toggleTab.call(this, "captions", i.length), u.emptyElement(t), m.checkMenu.call(this), i.length) {
        var n = i.map(function (i, n) {
          return { value: n, checked: e.captions.active && e.currentTrack === n, title: g.getLabel.call(e, i), badge: i.language && m.createBadge.call(e, i.language.toUpperCase()), list: t, type: "language" };
        });n.unshift({ value: -1, checked: !this.captions.active, title: f("disabled", this.config), list: t, type: "language" }), n.forEach(m.createMenuItem.bind(this)), m.updateSetting.call(this, "captions", t);
      }
    }, setSpeedMenu: function setSpeedMenu(e) {
      var t = this;if (this.config.controls.includes("settings") && this.config.settings.includes("speed") && u.is.element(this.elements.settings.panes.speed)) {
        u.is.array(e) ? this.options.speed = e : (this.isHTML5 || this.isVimeo) && (this.options.speed = [.5, .75, 1, 1.25, 1.5, 1.75, 2]), this.options.speed = this.options.speed.filter(function (e) {
          return t.config.speed.options.includes(e);
        });var i = !u.is.empty(this.options.speed) && this.options.speed.length > 1;if (m.toggleTab.call(this, "speed", i), m.checkMenu.call(this), i) {
          var n = this.elements.settings.panes.speed.querySelector("ul");u.emptyElement(n), this.options.speed.forEach(function (e) {
            m.createMenuItem.call(t, { value: e, list: n, type: "speed", title: m.getLabel.call(t, "speed", e) });
          }), m.updateSetting.call(this, "speed", n);
        }
      }
    }, checkMenu: function checkMenu() {
      var e = this.elements.settings.tabs,
          t = !u.is.empty(e) && Object.values(e).some(function (e) {
        return !e.hidden;
      });u.toggleHidden(this.elements.settings.menu, !t);
    }, toggleMenu: function toggleMenu(e) {
      var t = this.elements.settings.form,
          i = this.elements.buttons.settings;if (u.is.element(t) && u.is.element(i)) {
        var n = u.is.boolean(e) ? e : u.is.element(t) && t.hasAttribute("hidden");if (u.is.event(e)) {
          var r = u.is.element(t) && t.contains(e.target),
              o = e.target === this.elements.buttons.settings;if (r || !r && !o && n) return;o && e.stopPropagation();
        }u.is.element(i) && i.setAttribute("aria-expanded", n), u.is.element(t) && (u.toggleHidden(t, !n), u.toggleClass(this.elements.container, this.config.classNames.menu.open, n), n ? t.removeAttribute("tabindex") : t.setAttribute("tabindex", -1));
      }
    }, getTabSize: function getTabSize(e) {
      var t = e.cloneNode(!0);t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), Array.from(t.querySelectorAll("input[name]")).forEach(function (e) {
        var t = e.getAttribute("name");e.setAttribute("name", t + "-clone");
      }), e.parentNode.appendChild(t);var i = t.scrollWidth,
          n = t.scrollHeight;return u.removeElement(t), { width: i, height: n };
    }, showTab: function showTab() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = this.elements.settings.menu,
          i = document.getElementById(e);if (u.is.element(i) && "tabpanel" === i.getAttribute("role")) {
        var n = t.querySelector('[role="tabpanel"]:not([hidden])'),
            r = n.parentNode;if (Array.from(t.querySelectorAll('[aria-controls="' + n.getAttribute("id") + '"]')).forEach(function (e) {
          e.setAttribute("aria-expanded", !1);
        }), d.transitions && !d.reducedMotion) {
          r.style.width = n.scrollWidth + "px", r.style.height = n.scrollHeight + "px";var o = m.getTabSize.call(this, i);u.on(r, u.transitionEndEvent, function e(t) {
            t.target === r && ["width", "height"].includes(t.propertyName) && (r.style.width = "", r.style.height = "", u.off(r, u.transitionEndEvent, e));
          }), r.style.width = o.width + "px", r.style.height = o.height + "px";
        }u.toggleHidden(n, !0), n.setAttribute("tabindex", -1), u.toggleHidden(i, !1);var s = u.getElements.call(this, '[aria-controls="' + e + '"]');Array.from(s).forEach(function (e) {
          e.setAttribute("aria-expanded", !0);
        }), i.removeAttribute("tabindex"), i.querySelectorAll("button:not(:disabled), input:not(:disabled), [tabindex]")[0].focus();
      }
    }, create: function create(e) {
      var t = this;if (u.is.empty(this.config.controls)) return null;var i = u.createElement("div", u.getAttributesFromSelector(this.config.selectors.controls.wrapper));if (this.config.controls.includes("restart") && i.appendChild(m.createButton.call(this, "restart")), this.config.controls.includes("rewind") && i.appendChild(m.createButton.call(this, "rewind")), this.config.controls.includes("play") && i.appendChild(m.createButton.call(this, "play")), this.config.controls.includes("fast-forward") && i.appendChild(m.createButton.call(this, "fast-forward")), this.config.controls.includes("progress")) {
        var n = u.createElement("div", u.getAttributesFromSelector(this.config.selectors.progress)),
            r = m.createRange.call(this, "seek", { id: "plyr-seek-" + e.id });if (n.appendChild(r.label), n.appendChild(r.input), n.appendChild(m.createProgress.call(this, "buffer")), this.config.tooltips.seek) {
          var o = u.createElement("span", { class: this.config.classNames.tooltip }, "00:00");n.appendChild(o), this.elements.display.seekTooltip = o;
        }this.elements.progress = n, i.appendChild(this.elements.progress);
      }if (this.config.controls.includes("current-time") && i.appendChild(m.createTime.call(this, "currentTime")), this.config.controls.includes("duration") && i.appendChild(m.createTime.call(this, "duration")), this.config.controls.includes("mute") && i.appendChild(m.createButton.call(this, "mute")), this.config.controls.includes("volume")) {
        var s = u.createElement("div", { class: "plyr__volume" }),
            a = { max: 1, step: .05, value: this.config.volume },
            l = m.createRange.call(this, "volume", u.extend(a, { id: "plyr-volume-" + e.id }));s.appendChild(l.label), s.appendChild(l.input), this.elements.volume = s, i.appendChild(s);
      }if (this.config.controls.includes("captions") && i.appendChild(m.createButton.call(this, "captions")), this.config.controls.includes("settings") && !u.is.empty(this.config.settings)) {
        var c = u.createElement("div", { class: "plyr__menu", hidden: "" });c.appendChild(m.createButton.call(this, "settings", { id: "plyr-settings-toggle-" + e.id, "aria-haspopup": !0, "aria-controls": "plyr-settings-" + e.id, "aria-expanded": !1 }));var p = u.createElement("form", { class: "plyr__menu__container", id: "plyr-settings-" + e.id, hidden: "", "aria-labelled-by": "plyr-settings-toggle-" + e.id, role: "tablist", tabindex: -1 }),
            g = u.createElement("div"),
            v = u.createElement("div", { id: "plyr-settings-" + e.id + "-home", "aria-labelled-by": "plyr-settings-toggle-" + e.id, role: "tabpanel" }),
            y = u.createElement("ul", { role: "tablist" });this.config.settings.forEach(function (i) {
          var n = u.createElement("li", { role: "tab", hidden: "" }),
              r = u.createElement("button", u.extend(u.getAttributesFromSelector(t.config.selectors.buttons.settings), { type: "button", class: t.config.classNames.control + " " + t.config.classNames.control + "--forward", id: "plyr-settings-" + e.id + "-" + i + "-tab", "aria-haspopup": !0, "aria-controls": "plyr-settings-" + e.id + "-" + i, "aria-expanded": !1 }), f(i, t.config)),
              o = u.createElement("span", { class: t.config.classNames.menu.value });o.innerHTML = e[i], r.appendChild(o), n.appendChild(r), y.appendChild(n), t.elements.settings.tabs[i] = n;
        }), v.appendChild(y), g.appendChild(v), this.config.settings.forEach(function (i) {
          var n = u.createElement("div", { id: "plyr-settings-" + e.id + "-" + i, hidden: "", "aria-labelled-by": "plyr-settings-" + e.id + "-" + i + "-tab", role: "tabpanel", tabindex: -1 }),
              r = u.createElement("button", { type: "button", class: t.config.classNames.control + " " + t.config.classNames.control + "--back", "aria-haspopup": !0, "aria-controls": "plyr-settings-" + e.id + "-home", "aria-expanded": !1 }, f(i, t.config));n.appendChild(r);var o = u.createElement("ul");n.appendChild(o), g.appendChild(n), t.elements.settings.panes[i] = n;
        }), p.appendChild(g), c.appendChild(p), i.appendChild(c), this.elements.settings.form = p, this.elements.settings.menu = c;
      }return this.config.controls.includes("pip") && d.pip && i.appendChild(m.createButton.call(this, "pip")), this.config.controls.includes("airplay") && d.airplay && i.appendChild(m.createButton.call(this, "airplay")), this.config.controls.includes("fullscreen") && i.appendChild(m.createButton.call(this, "fullscreen")), this.config.controls.includes("play-large") && this.elements.container.appendChild(m.createButton.call(this, "play-large")), this.elements.controls = i, this.isHTML5 && m.setQualityMenu.call(this, h.getQualityOptions.call(this)), m.setSpeedMenu.call(this), i;
    }, inject: function inject() {
      var e = this;if (this.config.loadSprite) {
        var t = m.getIconUrl.call(this);t.cors && u.loadSprite(t.url, "sprite-plyr");
      }this.id = Math.floor(1e4 * Math.random());var i = null;this.elements.controls = null;var n = { id: this.id, seektime: this.config.seekTime, title: this.config.title },
          r = !0;u.is.string(this.config.controls) || u.is.element(this.config.controls) ? i = this.config.controls : u.is.function(this.config.controls) ? i = this.config.controls.call(this, n) : (i = m.create.call(this, { id: this.id, seektime: this.config.seekTime, speed: this.speed, quality: this.quality, captions: g.getLabel.call(this) }), r = !1);var o = function o(e) {
        var t = e;return Object.entries(n).forEach(function (e) {
          var i = s(e, 2),
              n = i[0],
              r = i[1];t = u.replaceAll(t, "{" + n + "}", r);
        }), t;
      };r && (u.is.string(this.config.controls) ? i = o(i) : u.is.element(i) && (i.innerHTML = o(i.innerHTML)));var a = void 0;if (u.is.string(this.config.selectors.controls.container) && (a = document.querySelector(this.config.selectors.controls.container)), u.is.element(a) || (a = this.elements.container), u.is.element(i) ? a.appendChild(i) : i && a.insertAdjacentHTML("beforeend", i), u.is.element(this.elements.controls) || m.findElements.call(this), window.navigator.userAgent.includes("Edge") && u.repaint(a), this.config.tooltips.controls) {
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
                i = u.parseUrl(t);i.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i.protocol) && u.fetch(t, "blob").then(function (t) {
              e.setAttribute("src", window.URL.createObjectURL(t));
            }).catch(function () {
              u.removeElement(e);
            });
          });
        }var t = this.storage.get("captions");u.is.boolean(t) || (t = this.config.captions.active);var i = this.storage.get("language") || this.config.captions.language;if ("auto" === i) {
          var n = (navigator.language || navigator.userLanguage).split("-");i = s(n, 1)[0];
        }if (g.setLanguage.call(this, i, t), this.isHTML5) {
          var r = this.config.captions.update ? "addtrack removetrack" : "removetrack";u.on(this.media.textTracks, r, g.update.bind(this));
        }setTimeout(g.update.bind(this), 0);
      }
    }, update: function update() {
      var e = this,
          t = g.getTracks.call(this, !0),
          i = this.captions,
          n = i.language,
          r = i.meta;this.isHTML5 && this.isVideo && t.filter(function (e) {
        return !r.get(e);
      }).forEach(function (t) {
        e.debug.log("Track added", t), r.set(t, { default: "showing" === t.mode }), t.mode = "hidden", u.on(t, "cuechange", function () {
          return g.updateCues.call(e);
        });
      });var o = !t.find(function (t) {
        return t === e.captions.currentTrackNode;
      }),
          s = this.language !== n && t.find(function (e) {
        return e.language === n;
      });(o || s) && g.setLanguage.call(this, n, this.config.captions.active), u.toggleClass(this.elements.container, this.config.classNames.captions.enabled, !u.is.empty(t)), (this.config.controls || []).includes("settings") && this.config.settings.includes("captions") && m.setCaptionsMenu.call(this);
    }, set: function set(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          n = g.getTracks.call(this);if (-1 !== e) {
        if (u.is.number(e)) {
          if (e in n) {
            if (this.captions.currentTrack !== e) {
              this.captions.currentTrack = e;var r = g.getCurrentTrack.call(this),
                  o = (r || {}).language;this.captions.currentTrackNode = r, t && (this.captions.language = o), this.isVimeo && this.embed.enableTextTrack(o), u.dispatchEvent.call(this, this.media, "languagechange");
            }this.isHTML5 && this.isVideo && g.updateCues.call(this), i && this.toggleCaptions(!0);
          } else this.debug.warn("Track not found", e);
        } else this.debug.warn("Invalid caption argument", e);
      } else this.toggleCaptions(!1);
    }, setLanguage: function setLanguage(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];if (u.is.string(e)) {
        this.captions.language = e.toLowerCase();var i = g.getTracks.call(this),
            n = g.getCurrentTrack.call(this, !0);g.set.call(this, i.indexOf(n), !1, t);
      } else this.debug.warn("Invalid language argument", e);
    }, getTracks: function getTracks() {
      var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];return Array.from((this.media || {}).textTracks || []).filter(function (i) {
        return !e.isHTML5 || t || e.captions.meta.has(i);
      }).filter(function (e) {
        return ["captions", "subtitles"].includes(e.kind);
      });
    }, getCurrentTrack: function getCurrentTrack() {
      var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          i = g.getTracks.call(this),
          n = function n(t) {
        return Number((e.captions.meta.get(t) || {}).default);
      },
          r = Array.from(i).sort(function (e, t) {
        return n(t) - n(e);
      });return !t && i[this.currentTrack] || r.find(function (t) {
        return t.language === e.captions.language;
      }) || r[0];
    }, getLabel: function getLabel(e) {
      var t = e;return !u.is.track(t) && d.textTracks && this.captions.active && (t = g.getCurrentTrack.call(this)), u.is.track(t) ? u.is.empty(t.label) ? u.is.empty(t.language) ? f("enabled", this.config) : e.language.toUpperCase() : t.label : f("disabled", this.config);
    }, updateCues: function updateCues(e) {
      if (this.supported.ui) if (u.is.element(this.elements.captions)) {
        if (u.is.nullOrUndefined(e) || Array.isArray(e)) {
          var t = e;if (!t) {
            var i = g.getCurrentTrack.call(this);t = Array.from((i || {}).activeCues || []).map(function (e) {
              return e.getCueAsHTML();
            }).map(u.getHTML);
          }var n = t.map(function (e) {
            return e.trim();
          }).join("\n");if (n !== this.elements.captions.innerHTML) {
            u.emptyElement(this.elements.captions);var r = u.createElement("span", u.getAttributesFromSelector(this.config.selectors.caption));r.innerHTML = n, this.elements.captions.appendChild(r), u.dispatchEvent.call(this, this.media, "cuechange");
          }
        } else this.debug.warn("updateCues: Invalid input", e);
      } else this.debug.warn("No captions element to render to");
    } },
      v = function v() {},
      y = function () {
    function e() {
      var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];n(this, e), this.enabled = window.console && t, this.enabled && this.log("Debugging enabled");
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
      var i = this;n(this, e), this.player = t, this.prefix = e.prefix, this.property = e.property, this.scrollPosition = { x: 0, y: 0 }, u.on(document, "ms" === this.prefix ? "MSFullscreenChange" : this.prefix + "fullscreenchange", function () {
        E.call(i);
      }), u.on(this.player.elements.container, "dblclick", function (e) {
        u.is.element(i.player.elements.controls) && i.player.elements.controls.contains(e.target) || i.toggle();
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
        var t = u.getElement.call(this, "iframe");if (!u.is.element(t)) return;var i = u.is.empty(this.config.title) ? "video" : this.config.title,
            n = f("frameTitle", this.config);t.setAttribute("title", n.replace("{title}", i));
      }
    }, togglePoster: function togglePoster(e) {
      u.toggleClass(this.elements.container, this.config.classNames.posterEnabled, e);
    }, setPoster: function setPoster(e) {
      var t = this;if (this.media.setAttribute("poster", e), !u.is.element(this.elements.poster)) return Promise.reject();var i = u.loadImage(e).then(function () {
        return t.elements.poster.style.backgroundImage = "url('" + e + "')", Object.assign(t.elements.poster.style, { backgroundImage: "url('" + e + "')", backgroundSize: "" }), x.togglePoster.call(t, !0), e;
      });return i.catch(function () {
        return x.togglePoster.call(t, !1);
      }), i;
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
      n(this, e), this.player = t, this.lastKey = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.firstTouch = this.firstTouch.bind(this);
    }return r(e, [{ key: "handleKey", value: function value(e) {
        var t = this,
            i = e.keyCode ? e.keyCode : e.which,
            n = "keydown" === e.type,
            r = n && i === this.lastKey;if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && u.is.number(i)) {
          if (n) {
            var o = u.getFocusElement();if (u.is.element(o) && o !== this.player.elements.inputs.seek && u.matches(o, this.player.config.selectors.editable)) return;switch ([48, 49, 50, 51, 52, 53, 54, 56, 57, 32, 75, 38, 40, 77, 39, 37, 70, 67, 73, 76, 79].includes(i) && (e.preventDefault(), e.stopPropagation()), i) {case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
                r || (t.player.currentTime = t.player.duration / 10 * (i - 48));break;case 32:case 75:
                r || this.player.togglePlay();break;case 38:
                this.player.increaseVolume(.1);break;case 40:
                this.player.decreaseVolume(.1);break;case 77:
                r || (this.player.muted = !this.player.muted);break;case 39:
                this.player.forward();break;case 37:
                this.player.rewind();break;case 70:
                this.player.fullscreen.toggle();break;case 67:
                r || this.player.toggleCaptions();break;case 76:
                this.player.loop = !this.player.loop;}!this.player.fullscreen.enabled && this.player.fullscreen.active && 27 === i && this.player.fullscreen.toggle(), this.lastKey = i;
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
          var i = e.player.elements.controls;"enterfullscreen" === t.type && (i.pressed = !1, i.hover = !1);var n = 0;["touchstart", "touchmove", "mousemove"].includes(t.type) && (x.toggleControls.call(e.player, !0), n = e.player.touch ? 3e3 : 2e3), clearTimeout(e.player.timers.controls), e.player.timers.controls = setTimeout(function () {
            return x.toggleControls.call(e.player, !1);
          }, n);
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
          var i = t.detail,
              n = void 0 === i ? {} : i;"error" === t.type && (n = e.player.media.error), u.dispatchEvent.call(e.player, e.player.elements.container, t.type, !0, n);
        });
      } }, { key: "controls", value: function value() {
        var e = this,
            t = k.isIE ? "change" : "input",
            i = function i(t, _i3, n) {
          var r = e.player.config.listeners[n],
              o = !0;u.is.function(r) && (o = r.call(e.player, t)), o && u.is.function(_i3) && _i3.call(e.player, t);
        },
            n = function n(t, _n3, r, o) {
          var s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              a = e.player.config.listeners[o],
              l = u.is.function(a);u.on(t, _n3, function (e) {
            return i(e, r, o);
          }, s && !l);
        };n(this.player.elements.buttons.play, "click", this.player.togglePlay, "play"), n(this.player.elements.buttons.restart, "click", this.player.restart, "restart"), n(this.player.elements.buttons.rewind, "click", this.player.rewind, "rewind"), n(this.player.elements.buttons.fastForward, "click", this.player.forward, "fastForward"), n(this.player.elements.buttons.mute, "click", function () {
          e.player.muted = !e.player.muted;
        }, "mute"), n(this.player.elements.buttons.captions, "click", this.player.toggleCaptions), n(this.player.elements.buttons.fullscreen, "click", function () {
          e.player.fullscreen.toggle();
        }, "fullscreen"), n(this.player.elements.buttons.pip, "click", function () {
          e.player.pip = "toggle";
        }, "pip"), n(this.player.elements.buttons.airplay, "click", this.player.airplay, "airplay"), n(this.player.elements.buttons.settings, "click", function (t) {
          m.toggleMenu.call(e.player, t);
        }), n(this.player.elements.settings.form, "click", function (t) {
          t.stopPropagation();var n = function n() {
            var t = "plyr-settings-" + e.player.id + "-home";m.showTab.call(e.player, t);
          };if (u.matches(t.target, e.player.config.selectors.inputs.language)) i(t, function () {
            e.player.currentTrack = Number(t.target.value), n();
          }, "language");else if (u.matches(t.target, e.player.config.selectors.inputs.quality)) i(t, function () {
            e.player.quality = t.target.value, n();
          }, "quality");else if (u.matches(t.target, e.player.config.selectors.inputs.speed)) i(t, function () {
            e.player.speed = parseFloat(t.target.value), n();
          }, "speed");else {
            var r = t.target;m.showTab.call(e.player, r.getAttribute("aria-controls"));
          }
        }), n(this.player.elements.inputs.seek, "mousedown mousemove", function (t) {
          var i = e.player.elements.progress.getBoundingClientRect(),
              n = 100 / i.width * (t.pageX - i.left);t.currentTarget.setAttribute("seek-value", n);
        }), n(this.player.elements.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", function (t) {
          var i = t.currentTarget,
              n = t.keyCode ? t.keyCode : t.which,
              r = t.type;if ("keydown" !== r && "keyup" !== r || 39 === n || 37 === n) {
            var o = i.hasAttribute("play-on-seeked"),
                s = ["mouseup", "touchend", "keyup"].includes(t.type);o && s ? (i.removeAttribute("play-on-seeked"), e.player.play()) : !s && e.player.playing && (i.setAttribute("play-on-seeked", ""), e.player.pause());
          }
        }), n(this.player.elements.inputs.seek, t, function (t) {
          var i = t.currentTarget,
              n = i.getAttribute("seek-value");u.is.empty(n) && (n = i.value), i.removeAttribute("seek-value"), e.player.currentTime = n / i.max * e.player.duration;
        }, "seek"), this.player.config.toggleInvert && !u.is.element(this.player.elements.display.duration) && n(this.player.elements.display.currentTime, "click", function () {
          0 !== e.player.currentTime && (e.player.config.invertTime = !e.player.config.invertTime, m.timeUpdate.call(e.player));
        }), n(this.player.elements.inputs.volume, t, function (t) {
          e.player.volume = t.target.value;
        }, "volume"), k.isWebkit && n(u.getElements.call(this.player, 'input[type="range"]'), "input", function (t) {
          m.updateRangeFill.call(e.player, t.target);
        }), n(this.player.elements.progress, "mouseenter mouseleave mousemove", function (t) {
          return m.updateSeekTooltip.call(e.player, t);
        }), n(this.player.elements.controls, "mouseenter mouseleave", function (t) {
          e.player.elements.controls.hover = !e.player.touch && "mouseenter" === t.type;
        }), n(this.player.elements.controls, "mousedown mouseup touchstart touchend touchcancel", function (t) {
          e.player.elements.controls.pressed = ["mousedown", "touchstart"].includes(t.type);
        }), n(this.player.elements.controls, "focusin focusout", function (t) {
          var i = e.player,
              n = i.config,
              r = i.elements,
              o = i.timers;if (u.toggleClass(r.controls, n.classNames.noTransition, "focusin" === t.type), x.toggleControls.call(e.player, "focusin" === t.type), "focusin" === t.type) {
            setTimeout(function () {
              u.toggleClass(r.controls, n.classNames.noTransition, !1);
            }, 0);var s = e.touch ? 3e3 : 4e3;clearTimeout(o.controls), o.controls = setTimeout(function () {
              return x.toggleControls.call(e.player, !1);
            }, s);
          }
        }), n(this.player.elements.inputs.volume, "wheel", function (t) {
          var i = t.webkitDirectionInvertedFromDevice,
              n = 0;(t.deltaY < 0 || t.deltaX > 0) && (i ? (e.player.decreaseVolume(.02), n = -1) : (e.player.increaseVolume(.02), n = 1)), (t.deltaY > 0 || t.deltaX < 0) && (i ? (e.player.increaseVolume(.02), n = 1) : (e.player.decreaseVolume(.02), n = -1)), (1 === n && e.player.media.volume < 1 || -1 === n && e.player.media.volume > 0) && t.preventDefault();
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
          i = 100 / t[0] * t[1];if (this.elements.wrapper.style.paddingBottom = i + "%", this.supported.ui) {
        var n = (240 - i) / 4.8;this.media.style.transform = "translateY(-" + n + "%)";
      }
    }, ready: function ready() {
      var e = this,
          t = this,
          i = { loop: t.config.loop.active, autoplay: t.autoplay, byline: !1, portrait: !1, title: !1, speed: !0, transparent: 0, gesture: "media", playsinline: !this.config.fullscreen.iosNative },
          n = u.buildUrlParams(i),
          r = t.media.getAttribute("src");u.is.empty(r) && (r = t.media.getAttribute(t.config.attributes.embed.id));var o = u.parseVimeoId(r),
          s = u.createElement("iframe"),
          a = u.format(t.config.urls.vimeo.iframe, o, n);s.setAttribute("src", a), s.setAttribute("allowfullscreen", ""), s.setAttribute("allowtransparency", ""), s.setAttribute("allow", "autoplay");var l = u.createElement("div", { class: t.config.classNames.embedContainer });l.appendChild(s), t.media = u.replaceElement(l, t.media), u.fetch(u.format(t.config.urls.vimeo.api, o), "json").then(function (e) {
        if (!u.is.empty(e)) {
          var i = new URL(e[0].thumbnail_large);i.pathname = i.pathname.split("_")[0] + ".jpg", x.setPoster.call(t, i.href);
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
          var i = t.embed,
              n = t.media,
              r = t.paused,
              o = t.volume,
              s = r && !i.hasPlayed;n.seeking = !0, u.dispatchEvent.call(t, n, "seeking"), Promise.resolve(s && i.setVolume(0)).then(function () {
            return i.setCurrentTime(e);
          }).then(function () {
            return s && i.pause();
          }).then(function () {
            return s && i.setVolume(o);
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
          var i = !!u.is.boolean(e) && e;t.embed.setVolume(i ? 0 : t.config.volume).then(function () {
            f = i, u.dispatchEvent.call(t, t.media, "volumechange");
          });
        } });var p = t.config.loop;Object.defineProperty(t.media, "loop", { get: function get() {
          return p;
        }, set: function set(e) {
          var i = u.is.boolean(e) ? e : t.config.loop.active;t.embed.setLoop(i).then(function () {
            p = i;
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
        var i = u.getAspectRatio(t[0], t[1]);D.setAspectRatio.call(e, i);
      }), t.embed.setAutopause(t.config.autopause).then(function (e) {
        t.config.autopause = e;
      }), t.embed.getVideoTitle().then(function (i) {
        t.config.title = i, x.setTitle.call(e);
      }), t.embed.getCurrentTime().then(function (e) {
        c = e, u.dispatchEvent.call(t, t.media, "timeupdate");
      }), t.embed.getDuration().then(function (e) {
        t.media.duration = e, u.dispatchEvent.call(t, t.media, "durationchange");
      }), t.embed.getTextTracks().then(function (e) {
        t.media.textTracks = e, g.setup.call(t);
      }), t.embed.on("cuechange", function (e) {
        var i = e.cues,
            n = (void 0 === i ? [] : i).map(function (e) {
          return u.stripHTML(e.text);
        });g.updateCues.call(t, n);
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
        var i = this.embed.getVideoData().title;if (u.is.empty(i)) return this.config.title = i, void x.setTitle.call(this);
      }var n = this.config.keys.google;if (u.is.string(n) && !u.is.empty(n)) {
        var r = u.format(this.config.urls.youtube.api, e, n);u.fetch(r).then(function (e) {
          u.is.object(e) && (t.config.title = e.items[0].snippet.title, x.setTitle.call(t));
        }).catch(function () {});
      }
    }, setAspectRatio: function setAspectRatio() {
      var e = this.config.ratio.split(":");this.elements.wrapper.style.paddingBottom = 100 / e[0] * e[1] + "%";
    }, ready: function ready() {
      var e = this,
          t = e.media.getAttribute("id");if (u.is.empty(t) || !t.startsWith("youtube-")) {
        var i = e.media.getAttribute("src");u.is.empty(i) && (i = e.media.getAttribute(this.config.attributes.embed.id));var n = u.parseYouTubeId(i),
            r = u.generateId(e.provider),
            o = u.createElement("div", { id: r });e.media = u.replaceElement(o, e.media);var s = function s(e) {
          return "https://img.youtube.com/vi/" + n + "/" + e + "default.jpg";
        };u.loadImage(s("maxres"), 121).catch(function () {
          return u.loadImage(s("sd"), 121);
        }).catch(function () {
          return u.loadImage(s("hq"));
        }).then(function (t) {
          return x.setPoster.call(e, t.src);
        }).then(function (t) {
          t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover");
        }), e.embed = new window.YT.Player(r, { videoId: n, playerVars: { autoplay: e.config.autoplay ? 1 : 0, controls: e.supported.ui ? 0 : 1, rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1, disablekb: 1, playsinline: 1, widget_referrer: window ? window.location.href : null, cc_load_policy: e.captions.active ? 1 : 0, cc_lang_pref: e.config.captions.language }, events: { onError: function onError(t) {
              if (!u.is.object(e.media.error)) {
                var i = { code: t.data };switch (t.data) {case 2:
                    i.message = "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.";break;case 5:
                    i.message = "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.";break;case 100:
                    i.message = "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.";break;case 101:case 150:
                    i.message = "The owner of the requested video does not allow it to be played in embedded players.";break;default:
                    i.message = "An unknown error occured";}e.media.error = i, u.dispatchEvent.call(e, e.media, "error");
              }
            }, onPlaybackQualityChange: function onPlaybackQualityChange() {
              u.dispatchEvent.call(e, e.media, "qualitychange", !1, { quality: e.media.quality });
            }, onPlaybackRateChange: function onPlaybackRateChange(t) {
              var i = t.target;e.media.playbackRate = i.getPlaybackRate(), u.dispatchEvent.call(e, e.media, "ratechange");
            }, onReady: function onReady(t) {
              var i = t.target;P.getTitle.call(e, n), e.media.play = function () {
                N.call(e, !0), i.playVideo();
              }, e.media.pause = function () {
                N.call(e, !1), i.pauseVideo();
              }, e.media.stop = function () {
                i.stopVideo();
              }, e.media.duration = i.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", { get: function get() {
                  return Number(i.getCurrentTime());
                }, set: function set(t) {
                  e.paused && e.embed.mute(), e.media.seeking = !0, u.dispatchEvent.call(e, e.media, "seeking"), i.seekTo(t);
                } }), Object.defineProperty(e.media, "playbackRate", { get: function get() {
                  return i.getPlaybackRate();
                }, set: function set(e) {
                  i.setPlaybackRate(e);
                } }), Object.defineProperty(e.media, "quality", { get: function get() {
                  return I(i.getPlaybackQuality());
                }, set: function set(t) {
                  var n = t;i.setPlaybackQuality(I(n)), u.dispatchEvent.call(e, e.media, "qualityrequested", !1, { quality: n });
                } });var r = e.config.volume;Object.defineProperty(e.media, "volume", { get: function get() {
                  return r;
                }, set: function set(t) {
                  r = t, i.setVolume(100 * r), u.dispatchEvent.call(e, e.media, "volumechange");
                } });var o = e.config.muted;Object.defineProperty(e.media, "muted", { get: function get() {
                  return o;
                }, set: function set(t) {
                  var n = u.is.boolean(t) ? t : o;o = n, i[n ? "mute" : "unMute"](), u.dispatchEvent.call(e, e.media, "volumechange");
                } }), Object.defineProperty(e.media, "currentSrc", { get: function get() {
                  return i.getVideoUrl();
                } }), Object.defineProperty(e.media, "ended", { get: function get() {
                  return e.currentTime === e.duration;
                } }), e.options.speed = i.getAvailablePlaybackRates(), e.supported.ui && e.media.setAttribute("tabindex", -1), u.dispatchEvent.call(e, e.media, "timeupdate"), u.dispatchEvent.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(function () {
                e.media.buffered = i.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && u.dispatchEvent.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), u.dispatchEvent.call(e, e.media, "canplaythrough"));
              }, 200), setTimeout(function () {
                return x.build.call(e);
              }, 50);
            }, onStateChange: function onStateChange(t) {
              var i,
                  n = t.target;switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(t.data) && (e.media.seeking = !1, u.dispatchEvent.call(e, e.media, "seeked")), t.data) {case -1:
                  u.dispatchEvent.call(e, e.media, "timeupdate"), e.media.buffered = n.getVideoLoadedFraction(), u.dispatchEvent.call(e, e.media, "progress");break;case 0:
                  N.call(e, !1), e.media.loop ? (n.stopVideo(), n.playVideo()) : u.dispatchEvent.call(e, e.media, "ended");break;case 1:
                  e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (N.call(e, !0), u.dispatchEvent.call(e, e.media, "playing"), e.timers.playing = setInterval(function () {
                    u.dispatchEvent.call(e, e.media, "timeupdate");
                  }, 50), e.media.duration !== n.getDuration() && (e.media.duration = n.getDuration(), u.dispatchEvent.call(e, e.media, "durationchange")), m.setQualityMenu.call(e, (i = n.getAvailableQualityLevels(), u.is.empty(i) ? i : u.dedupe(i.map(function (e) {
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
      var i = this;n(this, e), this.player = t, this.publisherId = t.config.ads.publisherId, this.playing = !1, this.initialized = !1, this.elements = { container: null, displayContainer: null }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function (e, t) {
        i.on("loaded", e), i.on("error", t);
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
          }, !1);var i = new google.ima.AdsRequest();i.adTagUrl = this.tagUrl, i.linearAdSlotWidth = t.offsetWidth, i.linearAdSlotHeight = t.offsetHeight, i.nonLinearAdSlotWidth = t.offsetWidth, i.nonLinearAdSlotHeight = t.offsetHeight, i.forceNonLinearFullSlot = !1, i.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(i);
        } catch (e) {
          this.onAdError(e);
        }
      } }, { key: "pollCountdown", value: function value() {
        var e = this;if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0])) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");this.countdownTimer = setInterval(function () {
          var t = u.formatTime(Math.max(e.manager.getRemainingTime(), 0)),
              i = f("advertisement", e.player.config) + " - " + t;e.elements.container.setAttribute("data-badge-text", i);
        }, 100);
      } }, { key: "onAdsManagerLoaded", value: function value(e) {
        var t = this,
            i = new google.ima.AdsRenderingSettings();i.restoreCustomPlaybackStateOnAdBreakComplete = !0, i.enablePreloading = !0, this.manager = e.getAdsManager(this.player, i), this.cuePoints = this.manager.getCuePoints(), u.is.empty(this.cuePoints) || this.cuePoints.forEach(function (e) {
          if (0 !== e && -1 !== e && e < t.player.duration) {
            var i = t.player.elements.progress;if (u.is.element(i)) {
              var n = 100 / t.player.duration * e,
                  r = u.createElement("span", { class: t.player.config.classNames.cues });r.style.left = n.toString() + "%", i.appendChild(r);
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
            i = this.player.elements.container,
            n = e.getAd(),
            r = function r(e) {
          var i = "ads" + e.replace(/_/g, "").toLowerCase();u.dispatchEvent.call(t.player, t.player.media, i);
        };switch (e.type) {case google.ima.AdEvent.Type.LOADED:
            this.trigger("loaded"), r(e.type), this.pollCountdown(!0), n.isLinear() || (n.width = i.offsetWidth, n.height = i.offsetHeight);break;case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
            r(e.type), this.loadAds();break;case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
            r(e.type), this.pauseContent();break;case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
            r(e.type), this.pollCountdown(), this.resumeContent();break;case google.ima.AdEvent.Type.STARTED:case google.ima.AdEvent.Type.MIDPOINT:case google.ima.AdEvent.Type.COMPLETE:case google.ima.AdEvent.Type.IMPRESSION:case google.ima.AdEvent.Type.CLICK:
            r(e.type);}
      } }, { key: "onAdError", value: function value(e) {
        this.cancel(), this.player.debug.warn("Ads error", e);
      } }, { key: "listeners", value: function value() {
        var e = this,
            t = this.player.elements.container,
            i = void 0;this.player.on("ended", function () {
          e.loader.contentComplete();
        }), this.player.on("seeking", function () {
          return i = e.player.currentTime;
        }), this.player.on("seeked", function () {
          var t = e.player.currentTime;u.is.empty(e.cuePoints) || e.cuePoints.forEach(function (n, r) {
            i < n && n < t && (e.manager.discardAdBreak(), e.cuePoints.splice(r, 1));
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
        for (var t = this, i = arguments.length, n = Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) {
          n[r - 1] = arguments[r];
        }var o = this.events[e];u.is.array(o) && o.forEach(function (e) {
          u.is.function(e) && e.apply(t, n);
        });
      } }, { key: "on", value: function value(e, t) {
        return u.is.array(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this;
      } }, { key: "startSafetyTimer", value: function value(e, t) {
        var i = this;this.player.debug.log("Safety timer invoked from: " + t), this.safetyTimer = setTimeout(function () {
          i.cancel(), i.clearSafetyTimer("startSafetyTimer()");
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
      var i = this;u.is.string(t) ? u.insertElement(e, this.media, { src: t }) : u.is.array(t) && t.forEach(function (t) {
        u.insertElement(e, i.media, t);
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
    function e(t, i) {
      var r = this;if (n(this, e), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = d.touch, this.media = t, u.is.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || u.is.nodeList(this.media) || u.is.array(this.media)) && (this.media = this.media[0]), this.config = u.extend({}, b, e.defaults, i || {}, function () {
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
              i = void 0 === e ? void 0 : !e,
              n = u.toggleClass(this.elements.container, this.config.classNames.hideControls, i);if (n && this.config.controls.includes("settings") && !u.is.empty(this.config.settings) && m.toggleMenu.call(this, !1), n !== t) {
            var r = n ? "controlshidden" : "controlsshown";u.dispatchEvent.call(this, this.media, r);
          }return !n;
        }return !1;
      } }, { key: "on", value: function value(e, t) {
        u.on(this.elements.container, e, t);
      } }, { key: "off", value: function value(e, t) {
        u.off(this.elements.container, e, t);
      } }, { key: "destroy", value: function value(e) {
        var t = this,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];if (this.ready) {
          var n = function n() {
            document.body.style.overflow = "", t.embed = null, i ? (Object.keys(t.elements).length && (u.removeElement(t.elements.buttons.play), u.removeElement(t.elements.captions), u.removeElement(t.elements.controls), u.removeElement(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), u.is.function(e) && e()) : (t.listeners.clear(), u.replaceElement(t.elements.original, t.elements.container), u.dispatchEvent.call(t, t.elements.original, "destroyed", !0), u.is.function(e) && e.call(t.elements.original), t.ready = !1, setTimeout(function () {
              t.elements = null, t.media = null;
            }, 200));
          };switch (this.stop(), this.provider + ":" + this.type) {case "html5:video":case "html5:audio":
              clearTimeout(this.timers.loading), x.toggleNativeControls.call(this, !0), n();break;case "youtube:video":
              clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && u.is.function(this.embed.destroy) && this.embed.destroy(), n();break;case "vimeo:video":
              null !== this.embed && this.embed.unload().then(n), setTimeout(n, 200);}
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
            var i = u.closest(this.options.quality, t);this.debug.warn("Unsupported quality option: " + t + ", using " + i + " instead"), t = i;
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
            i = e.currentTrack;return t ? i : -1;
      } }, { key: "language", set: function set(e) {
        g.setLanguage.call(this, e);
      }, get: function get() {
        return (g.getCurrentTrack.call(this) || {}).language;
      } }, { key: "pip", set: function set(e) {
        var t = "picture-in-picture",
            i = "inline";if (d.pip) {
          var n = u.is.boolean(e) ? e : this.pip === i;this.media.webkitSetPresentationMode(n ? t : i);
        }
      }, get: function get() {
        return d.pip ? this.media.webkitPresentationMode : null;
      } }], [{ key: "supported", value: function value(e, t, i) {
        return d.check(e, t, i);
      } }, { key: "loadSprite", value: function value(e, t) {
        return u.loadSprite(e, t);
      } }, { key: "setup", value: function value(t) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = null;return u.is.string(t) ? n = Array.from(document.querySelectorAll(t)) : u.is.nodeList(t) ? n = Array.from(t) : u.is.array(t) && (n = t.filter(u.is.element)), u.is.empty(n) ? null : n.map(function (t) {
          return new e(t, i);
        });
      } }]), e;
  }();return M.defaults = u.cloneDeep(b), M;
}), function (e) {
  "use strict";
  var t = {},
      i = ["xs", "sm", "md", "lg", "xl", "xxl"];function n() {
    var i = e("body");1 != e(".lv-screen-data").length && i.append('<div class="lv-screen-data"></div>');var n,
        r,
        o = window.innerWidth,
        s = window.innerHeight,
        a = e(window).width(),
        l = e(window).height();o < t.sm && (n = "xs"), o >= t.sm && o < t.md && (n = "sm"), o >= t.md && o < t.lg && (n = "md"), o >= t.lg && o < t.xl && (n = "lg"), o >= t.xl && (n = "xl"), a < t.sm && (r = "xs"), a >= t.sm && a < t.md && (r = "sm"), a >= t.md && a < t.lg && (r = "md"), a >= t.lg && a < t.xl && (r = "lg"), a >= t.xl && (r = "xl"), e(".lv-screen-data").html(a + " x " + l + "<br><small>" + o + " x " + s + "</small><br>" + n + "  [" + r + "]").css({ position: "fixed", top: 0, padding: "5px 10px", background: "rgba(0,0,0,0.5)", "font-family": "Helvetica Neue", "font-size": "14px", color: "white", "z-index": 2147483646 }).click(function () {
      i.toggleClass("developer");
    });
  }!function () {
    for (var n, r = "", o = window.getComputedStyle(document.getElementsByTagName("body")[0]).getPropertyValue("content").replace(/\\a/g, "").replace(/ /g, "").replace(/'/g, "").replace(/"/g, "").split("|"), s = 0; s < o.length; s++) {
      t[i[s]] = Number(o[s].replace("px", "")), r += "<tr><td>" + i[s] + "</td><td>" + o[s] + "</td></tr>";
    }n = '<table class="table breakpoints-table" style="width: 300px;">' + r + "</table>", e('[data-js="lv-responsive-table"]').append(n);
  }(), e("html[development]").length && (n(), e(window).resize(function () {
    n();
  }));
}(jQuery);var LOGGING_ENABLED = !1;function log(e) {
  LOGGING_ENABLED && console.log(e);
}Vue.config.productionTip = !1, Vue.component("docs", { props: { files: String }, data: function data() {
    return { filesArray: [], url: "https://raw.githubusercontent.com/liquidvisual/inspire-0118/master/src/", codeEnabled: !1, showProperties: !1 };
  }, created: function created() {
    var e = this.files.split(","),
        t = e.length;for (var r in e) {
      var i = { name: e[r], alias: e[r].split("/").pop(), path: this.url + e[r] + "?" + Date.now(), active: !1, result: "loading..." },
          n = Number(r) + 1 === t;this.fetchDataAXIOS(i, n), this.filesArray.push(i);
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
        i = $(".lv-hero-item-caption", e),
        n = $(".lv-hero-item", t).length,
        r = $(".lv-hero-slider-prev-btn", e),
        o = $(".lv-hero-slider-next-btn", e);n > 1 && (r.on("click", function () {
      t.flickity("previous").flickity("stopPlayer");
    }), o.on("click", function () {
      t.flickity("next").flickity("stopPlayer");
    }), t.on("ready.flickity change.flickity", function () {
      $(window).width() > 576 && (i.hide(), setTimeout(function () {
        i.show();
      }, 500));
    }));
  });
}function closeSearch() {
  $("[data-global-search]").removeClass("active"), document.activeElement.blur();
}docsExist && new Vue({ el: "#docs-app", data: function data() {
    return { themes: [{ name: "theme-base", label: "Base", active: !1 }, { name: "theme-silverfox", label: "Base", active: !1 }, { name: "theme-skyblue", label: "Base", active: !1 }, { name: "theme-posh", label: "Base", active: !1 }, { name: "theme-midnight", label: "Base", active: !1 }], modifiers: [{ name: "is-tinted", label: "Tint", active: !1 }, { name: "has-image-bg", label: "Bg Image", active: !1 }, { name: "is-fixed", label: "Fixed Image", active: !1 }] };
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
        var i = e.active ? "" : e.name;$(".card-docs-component .section, .lv-hero-item").removeClass(e.name).addClass(i), e.active ? $(".card-docs-component .section, .lv-hero-item").css("background-image", "none") : $(".card-docs-component .section, .lv-hero-item").css("background-image", "url(https://source.unsplash.com/random)");
      }if ("is-fixed" == e.name) {
        var n = e.active ? "" : e.name;$(".card-docs-component .section, .lv-hero-item").removeClass(e.name).addClass(n);
      }
    }
  } }), cardSlider(), launchGallery(), launchSlider(), function (e) {
  "use strict";
  var t = e("html"),
      i = e(".lv-off-canvas .dropdown"),
      n = e(".lv-page"),
      r = e(".lv-off-canvas"),
      o = e('a[href*="#"]:not([href="#"])', r),
      s = e('<span class="submenu-trigger"><i class="fa fa-angle-right"></i></span>');e("[data-menu-toggle]").click(function (i) {
    e(".has-open-menu").length || (t.removeClass("has-closed-menu").addClass("has-open-menu"), setTimeout(function () {
      n.click(function (i) {
        i.stopPropagation(), e(".has-open-menu").length && (t.removeClass("has-open-menu").addClass("has-closed-menu"), e(this).unbind("click"));
      });
    }, 10));
  }), o.click(function (e) {
    e.preventDefault(), e.stopPropagation(), t.removeClass("has-open-menu").addClass("has-closed-menu"), n.unbind("click");
  }), s.click(function (t) {
    t.preventDefault(), t.stopPropagation(), e(this).parent().next(".dropdown").addClass("is-open");
  }), i.click(function (t) {
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
  $('[data-toggle="tooltip"]').tooltip();
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
