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
      o = Object.getPrototypeOf,
      r = n.slice,
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
    var o,
        r = (t = t || i).createElement("script");if (r.text = e, n) for (o in v) {
      n[o] && (r[o] = n[o]);
    }t.head.appendChild(r).parentNode.removeChild(r);
  }function b(e) {
    return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? c[u.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
  }var w = function w(e, t) {
    return new w.fn.init(e, t);
  },
      _ = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function E(e) {
    var t = !!e && "length" in e && e.length,
        n = b(e);return !m(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }w.fn = w.prototype = { jquery: "3.3.1", constructor: w, length: 0, toArray: function toArray() {
      return r.call(this);
    }, get: function get(e) {
      return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e];
    }, pushStack: function pushStack(e) {
      var t = w.merge(this.constructor(), e);return t.prevObject = this, t;
    }, each: function each(e) {
      return w.each(this, e);
    }, map: function map(e) {
      return this.pushStack(w.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, slice: function slice() {
      return this.pushStack(r.apply(this, arguments));
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
        o,
        r,
        s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) || m(s) || (s = {}), a === l && (s = this, a--); a < l; a++) {
      if (null != (e = arguments[a])) for (t in e) {
        n = s[t], s !== (i = e[t]) && (c && i && (w.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && w.isPlainObject(n) ? n : {}, s[t] = w.extend(c, r, i)) : void 0 !== i && (s[t] = i));
      }
    }return s;
  }, w.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
      throw new Error(e);
    }, noop: function noop() {}, isPlainObject: function isPlainObject(e) {
      var t, n;return !(!e || "[object Object]" !== u.call(e)) && (!(t = o(e)) || "function" == typeof (n = d.call(t, "constructor") && t.constructor) && h.call(n) === f);
    }, isEmptyObject: function isEmptyObject(e) {
      var t;for (t in e) {
        return !1;
      }return !0;
    }, globalEval: function globalEval(e) {
      y(e);
    }, each: function each(e, t) {
      var n,
          i = 0;if (E(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) {} else for (i in e) {
        if (!1 === t.call(e[i], i, e[i])) break;
      }return e;
    }, trim: function trim(e) {
      return null == e ? "" : (e + "").replace(_, "");
    }, makeArray: function makeArray(e, t) {
      var n = t || [];return null != e && (E(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n;
    }, inArray: function inArray(e, t, n) {
      return null == t ? -1 : l.call(t, e, n);
    }, merge: function merge(e, t) {
      for (var n = +t.length, i = 0, o = e.length; i < n; i++) {
        e[o++] = t[i];
      }return e.length = o, e;
    }, grep: function grep(e, t, n) {
      for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) {
        !t(e[o], o) !== s && i.push(e[o]);
      }return i;
    }, map: function map(e, t, n) {
      var i,
          o,
          r = 0,
          a = [];if (E(e)) for (i = e.length; r < i; r++) {
        null != (o = t(e[r], r, n)) && a.push(o);
      } else for (r in e) {
        null != (o = t(e[r], r, n)) && a.push(o);
      }return s.apply([], a);
    }, guid: 1, support: p }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    c["[object " + t + "]"] = t.toLowerCase();
  });var T = function (e) {
    var t,
        n,
        i,
        o,
        r,
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
        _ = e.document,
        E = 0,
        T = 0,
        C = se(),
        k = se(),
        x = se(),
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
        M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        j = "[\\x20\\t\\r\\n\\f]",
        H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        F = "\\[" + j + "*(" + H + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + j + "*\\]",
        q = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
        B = new RegExp(j + "+", "g"),
        R = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
        z = new RegExp("^" + j + "*," + j + "*"),
        W = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
        U = new RegExp("=" + j + "*([^\\]'\"]*?)" + j + "*\\]", "g"),
        V = new RegExp(q),
        K = new RegExp("^" + H + "$"),
        Y = { ID: new RegExp("^#(" + H + ")"), CLASS: new RegExp("^\\.(" + H + ")"), TAG: new RegExp("^(" + H + "|[*])"), ATTR: new RegExp("^" + F), PSEUDO: new RegExp("^" + q), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"), bool: new RegExp("^(?:" + M + ")$", "i"), needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i") },
        $ = /^(?:input|select|textarea|button)$/i,
        Q = /^h\d$/i,
        G = /^[^{]+\{\s*\[native \w/,
        X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        J = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"),
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
        oe = ye(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, { dir: "parentNode", next: "legend" });try {
      P.apply(D = L.call(_.childNodes), _.childNodes), D[_.childNodes.length].nodeType;
    } catch (e) {
      P = { apply: D.length ? function (e, t) {
          N.apply(e, L.call(t));
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];) {}e.length = n - 1;
        } };
    }function re(e, t, i, o) {
      var r,
          a,
          c,
          u,
          d,
          p,
          v,
          y = t && t.ownerDocument,
          E = t ? t.nodeType : 9;if (i = i || [], "string" != typeof e || !e || 1 !== E && 9 !== E && 11 !== E) return i;if (!o && ((t ? t.ownerDocument || t : _) !== f && h(t), t = t || f, m)) {
        if (11 !== E && (d = X.exec(e))) if (r = d[1]) {
          if (9 === E) {
            if (!(c = t.getElementById(r))) return i;if (c.id === r) return i.push(c), i;
          } else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r) return i.push(c), i;
        } else {
          if (d[2]) return P.apply(i, t.getElementsByTagName(e)), i;if ((r = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return P.apply(i, t.getElementsByClassName(r)), i;
        }if (n.qsa && !x[e + " "] && (!g || !g.test(e))) {
          if (1 !== E) y = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
            for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = w), a = (p = s(e)).length; a--;) {
              p[a] = "#" + u + " " + ve(p[a]);
            }v = p.join(","), y = J.test(e) && me(t.parentNode) || t;
          }if (v) try {
            return P.apply(i, y.querySelectorAll(v)), i;
          } catch (e) {} finally {
            u === w && t.removeAttribute("id");
          }
        }
      }return l(e.replace(R, "$1"), t, i, o);
    }function se() {
      var e = [];return function t(n, o) {
        return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o;
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
      for (var n = e.split("|"), o = n.length; o--;) {
        i.attrHandle[n[o]] = t;
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
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }function pe(e) {
      return ae(function (t) {
        return t = +t, ae(function (n, i) {
          for (var o, r = e([], n.length, t), s = r.length; s--;) {
            n[o = r[s]] && (n[o] = !(i[o] = n[o]));
          }
        });
      });
    }function me(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }for (t in n = re.support = {}, r = re.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, h = re.setDocument = function (e) {
      var t,
          o,
          s = e ? e.ownerDocument || e : _;return s !== f && 9 === s.nodeType && s.documentElement ? (p = (f = s).documentElement, m = !r(f), _ !== f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), n.attributes = le(function (e) {
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
              o,
              r = t.getElementById(e);if (r) {
            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];for (o = t.getElementsByName(e), i = 0; r = o[i++];) {
              if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
            }
          }return [];
        }
      }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            i = [],
            o = 0,
            r = t.getElementsByTagName(e);if ("*" === e) {
          for (; n = r[o++];) {
            1 === n.nodeType && i.push(n);
          }return i;
        }return r;
      }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e);
      }, v = [], g = [], (n.qsa = G.test(f.querySelectorAll)) && (le(function (e) {
        p.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + j + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + j + "*(?:value|" + M + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]");
      }), le(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = f.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + j + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:");
      })), (n.matchesSelector = G.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function (e) {
        n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", q);
      }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = G.test(p.compareDocumentPosition), b = t || G.test(p.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            i = t && t.parentNode;return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) {
          if (t === e) return !0;
        }return !1;
      }, S = t ? function (e, t) {
        if (e === t) return d = !0, 0;var i = !e.compareDocumentPosition - !t.compareDocumentPosition;return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === f || e.ownerDocument === _ && b(_, e) ? -1 : t === f || t.ownerDocument === _ && b(_, t) ? 1 : u ? O(u, e) - O(u, t) : 0 : 4 & i ? -1 : 1);
      } : function (e, t) {
        if (e === t) return d = !0, 0;var n,
            i = 0,
            o = e.parentNode,
            r = t.parentNode,
            s = [e],
            a = [t];if (!o || !r) return e === f ? -1 : t === f ? 1 : o ? -1 : r ? 1 : u ? O(u, e) - O(u, t) : 0;if (o === r) return ue(e, t);for (n = e; n = n.parentNode;) {
          s.unshift(n);
        }for (n = t; n = n.parentNode;) {
          a.unshift(n);
        }for (; s[i] === a[i];) {
          i++;
        }return i ? ue(s[i], a[i]) : s[i] === _ ? -1 : a[i] === _ ? 1 : 0;
      }, f) : f;
    }, re.matches = function (e, t) {
      return re(e, null, null, t);
    }, re.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== f && h(e), t = t.replace(U, "='$1']"), n.matchesSelector && m && !x[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
        var i = y.call(e, t);if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
      } catch (e) {}return re(t, f, null, [e]).length > 0;
    }, re.contains = function (e, t) {
      return (e.ownerDocument || e) !== f && h(e), b(e, t);
    }, re.attr = function (e, t) {
      (e.ownerDocument || e) !== f && h(e);var o = i.attrHandle[t.toLowerCase()],
          r = o && A.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;return void 0 !== r ? r : n.attributes || !m ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, re.escape = function (e) {
      return (e + "").replace(te, ne);
    }, re.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, re.uniqueSort = function (e) {
      var t,
          i = [],
          o = 0,
          r = 0;if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(S), d) {
        for (; t = e[r++];) {
          t === e[r] && (o = i.push(r));
        }for (; o--;) {
          e.splice(i[o], 1);
        }
      }return u = null, e;
    }, o = re.getText = function (e) {
      var t,
          n = "",
          i = 0,
          r = e.nodeType;if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === r || 4 === r) return e.nodeValue;
      } else for (; t = e[i++];) {
        n += o(t);
      }return n;
    }, (i = re.selectors = { cacheLength: 50, createPseudo: ae, match: Y, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(Z, ee).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = C[e + " "];return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && C(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, t, n) {
          return function (i) {
            var o = re.attr(i, e);return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
          };
        }, CHILD: function CHILD(e, t, n, i, o) {
          var r = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;return 1 === i && 0 === o ? function (e) {
            return !!e.parentNode;
          } : function (t, n, l) {
            var c,
                u,
                d,
                h,
                f,
                p,
                m = r !== s ? "nextSibling" : "previousSibling",
                g = t.parentNode,
                v = a && t.nodeName.toLowerCase(),
                y = !l && !a,
                b = !1;if (g) {
              if (r) {
                for (; m;) {
                  for (h = t; h = h[m];) {
                    if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                  }p = m = "only" === e && !p && "nextSibling";
                }return !0;
              }if (p = [s ? g.firstChild : g.lastChild], s && y) {
                for (b = (f = (c = (u = (d = (h = g)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === E && c[1]) && c[2], h = f && g.childNodes[f]; h = ++f && h && h[m] || (b = f = 0) || p.pop();) {
                  if (1 === h.nodeType && ++b && h === t) {
                    u[e] = [E, f, b];break;
                  }
                }
              } else if (y && (b = f = (c = (u = (d = (h = t)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === E && c[1]), !1 === b) for (; (h = ++f && h && h[m] || (b = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((u = (d = h[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [E, b]), h !== t));) {}return (b -= o) === i || b % i == 0 && b / i >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, t) {
          var n,
              o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);return o[w] ? o(t) : o.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, n) {
            for (var i, r = o(e, t), s = r.length; s--;) {
              e[i = O(e, r[s])] = !(n[i] = r[s]);
            }
          }) : function (e) {
            return o(e, 0, n);
          }) : o;
        } }, pseudos: { not: ae(function (e) {
          var t = [],
              n = [],
              i = a(e.replace(R, "$1"));return i[w] ? ae(function (e, t, n, o) {
            for (var r, s = i(e, null, o, []), a = e.length; a--;) {
              (r = s[a]) && (e[a] = !(t[a] = r));
            }
          }) : function (e, o, r) {
            return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop();
          };
        }), has: ae(function (e) {
          return function (t) {
            return re(e, t).length > 0;
          };
        }), contains: ae(function (e) {
          return e = e.replace(Z, ee), function (t) {
            return (t.textContent || t.innerText || o(t)).indexOf(e) > -1;
          };
        }), lang: ae(function (e) {
          return K.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
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
          return $.test(e.nodeName);
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
          o = t.next,
          r = o || i,
          s = n && "parentNode" === r,
          a = T++;return t.first ? function (t, n, o) {
        for (; t = t[i];) {
          if (1 === t.nodeType || s) return e(t, n, o);
        }return !1;
      } : function (t, n, l) {
        var c,
            u,
            d,
            h = [E, a];if (l) {
          for (; t = t[i];) {
            if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
          }
        } else for (; t = t[i];) {
          if (1 === t.nodeType || s) if (u = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;else {
            if ((c = u[r]) && c[0] === E && c[1] === a) return h[2] = c[2];if (u[r] = h, h[2] = e(t, n, l)) return !0;
          }
        }return !1;
      };
    }function be(e) {
      return e.length > 1 ? function (t, n, i) {
        for (var o = e.length; o--;) {
          if (!e[o](t, n, i)) return !1;
        }return !0;
      } : e[0];
    }function we(e, t, n, i, o) {
      for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++) {
        (r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
      }return s;
    }function _e(e, t, n, i, o, r) {
      return i && !i[w] && (i = _e(i)), o && !o[w] && (o = _e(o, r)), ae(function (r, s, a, l) {
        var c,
            u,
            d,
            h = [],
            f = [],
            p = s.length,
            m = r || function (e, t, n) {
          for (var i = 0, o = t.length; i < o; i++) {
            re(e, t[i], n);
          }return n;
        }(t || "*", a.nodeType ? [a] : a, []),
            g = !e || !r && t ? m : we(m, h, e, a, l),
            v = n ? o || (r ? e : p || i) ? [] : s : g;if (n && n(g, v, a, l), i) for (c = we(v, f), i(c, [], a, l), u = c.length; u--;) {
          (d = c[u]) && (v[f[u]] = !(g[f[u]] = d));
        }if (r) {
          if (o || e) {
            if (o) {
              for (c = [], u = v.length; u--;) {
                (d = v[u]) && c.push(g[u] = d);
              }o(null, v = [], c, l);
            }for (u = v.length; u--;) {
              (d = v[u]) && (c = o ? O(r, d) : h[u]) > -1 && (r[c] = !(s[c] = d));
            }
          }
        } else v = we(v === s ? v.splice(p, v.length) : v), o ? o(null, s, v, l) : P.apply(s, v);
      });
    }function Ee(e) {
      for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = ye(function (e) {
        return e === t;
      }, a, !0), d = ye(function (e) {
        return O(t, e) > -1;
      }, a, !0), h = [function (e, n, i) {
        var o = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));return t = null, o;
      }]; l < r; l++) {
        if (n = i.relative[e[l].type]) h = [ye(be(h), n)];else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
            for (o = ++l; o < r && !i.relative[e[o].type]; o++) {}return _e(l > 1 && be(h), l > 1 && ve(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(R, "$1"), n, l < o && Ee(e.slice(l, o)), o < r && Ee(e = e.slice(o)), o < r && ve(e));
          }h.push(n);
        }
      }return be(h);
    }return ge.prototype = i.filters = i.pseudos, i.setFilters = new ge(), s = re.tokenize = function (e, t) {
      var n,
          o,
          r,
          s,
          a,
          l,
          c,
          u = k[e + " "];if (u) return t ? 0 : u.slice(0);for (a = e, l = [], c = i.preFilter; a;) {
        for (s in n && !(o = z.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = W.exec(a)) && (n = o.shift(), r.push({ value: n, type: o[0].replace(R, " ") }), a = a.slice(n.length)), i.filter) {
          !(o = Y[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({ value: n, type: s, matches: o }), a = a.slice(n.length));
        }if (!n) break;
      }return t ? a.length : a ? re.error(e) : k(e, l).slice(0);
    }, a = re.compile = function (e, t) {
      var n,
          o = [],
          r = [],
          a = x[e + " "];if (!a) {
        for (t || (t = s(e)), n = t.length; n--;) {
          (a = Ee(t[n]))[w] ? o.push(a) : r.push(a);
        }(a = x(e, function (e, t) {
          var n = t.length > 0,
              o = e.length > 0,
              r = function r(_r, s, a, l, u) {
            var d,
                p,
                g,
                v = 0,
                y = "0",
                b = _r && [],
                w = [],
                _ = c,
                T = _r || o && i.find.TAG("*", u),
                C = E += null == _ ? 1 : Math.random() || .1,
                k = T.length;for (u && (c = s === f || s || u); y !== k && null != (d = T[y]); y++) {
              if (o && d) {
                for (p = 0, s || d.ownerDocument === f || (h(d), a = !m); g = e[p++];) {
                  if (g(d, s || f, a)) {
                    l.push(d);break;
                  }
                }u && (E = C);
              }n && ((d = !g && d) && v--, _r && b.push(d));
            }if (v += y, n && y !== v) {
              for (p = 0; g = t[p++];) {
                g(b, w, s, a);
              }if (_r) {
                if (v > 0) for (; y--;) {
                  b[y] || w[y] || (w[y] = I.call(l));
                }w = we(w);
              }P.apply(l, w), u && !_r && w.length > 0 && v + t.length > 1 && re.uniqueSort(l);
            }return u && (E = C, c = _), b;
          };return n ? ae(r) : r;
        }(r, o))).selector = e;
      }return a;
    }, l = re.select = function (e, t, n, o) {
      var r,
          l,
          c,
          u,
          d,
          h = "function" == typeof e && e,
          f = !o && s(e = h.selector || e);if (n = n || [], 1 === f.length) {
        if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
          if (!(t = (i.find.ID(c.matches[0].replace(Z, ee), t) || [])[0])) return n;h && (t = t.parentNode), e = e.slice(l.shift().value.length);
        }for (r = Y.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r], !i.relative[u = c.type]);) {
          if ((d = i.find[u]) && (o = d(c.matches[0].replace(Z, ee), J.test(l[0].type) && me(t.parentNode) || t))) {
            if (l.splice(r, 1), !(e = o.length && ve(l))) return P.apply(n, o), n;break;
          }
        }
      }return (h || a(e, f))(o, t, !m, n, !t || J.test(e) && me(t.parentNode) || t), n;
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
    }) || ce(M, function (e, t, n) {
      var i;if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
    }), re;
  }(e);w.find = T, w.expr = T.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = T.uniqueSort, w.text = T.getText, w.isXMLDoc = T.isXML, w.contains = T.contains, w.escapeSelector = T.escape;var C = function C(e, t, n) {
    for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
      if (1 === e.nodeType) {
        if (o && w(e).is(n)) break;i.push(e);
      }
    }return i;
  },
      k = function k(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }return n;
  },
      x = w.expr.match.needsContext;function S(e, t) {
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
          o = this;if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < i; t++) {
          if (w.contains(o[t], this)) return !0;
        }
      }));for (n = this.pushStack([]), t = 0; t < i; t++) {
        w.find(e, o[t], n);
      }return i > 1 ? w.uniqueSort(n) : n;
    }, filter: function filter(e) {
      return this.pushStack(D(this, e || [], !1));
    }, not: function not(e) {
      return this.pushStack(D(this, e || [], !0));
    }, is: function is(e) {
      return !!D(this, "string" == typeof e && x.test(e) ? w(e) : e || [], !1).length;
    } });var I,
      N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init = function (e, t, n) {
    var o, r;if (!e) return this;if (n = n || I, "string" == typeof e) {
      if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : N.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (o[1]) {
        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), A.test(o[1]) && w.isPlainObject(t)) for (o in t) {
          m(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
        }return this;
      }return (r = i.getElementById(o[2])) && (this[0] = r, this.length = 1), this;
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
          o = this.length,
          r = [],
          s = "string" != typeof e && w(e);if (!x.test(e)) for (; i < o; i++) {
        for (n = this[i]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
            r.push(n);break;
          }
        }
      }return this.pushStack(r.length > 1 ? w.uniqueSort(r) : r);
    }, index: function index(e) {
      return e ? "string" == typeof e ? l.call(w(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } }), w.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return C(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return C(e, "parentNode", n);
    }, next: function next(e) {
      return O(e, "nextSibling");
    }, prev: function prev(e) {
      return O(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return C(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return C(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return C(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return C(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return k((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return k(e.firstChild);
    }, contents: function contents(e) {
      return S(e, "iframe") ? e.contentDocument : (S(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
    } }, function (e, t) {
    w.fn[e] = function (n, i) {
      var o = w.map(this, t, n);return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = w.filter(i, o)), this.length > 1 && (L[e] || w.uniqueSort(o), P.test(e) && o.reverse()), this.pushStack(o);
    };
  });var M = /[^\x20\t\r\n\f]+/g;function j(e) {
    return e;
  }function H(e) {
    throw e;
  }function F(e, t, n, i) {
    var o;try {
      e && m(o = e.promise) ? o.call(e).done(t).fail(n) : e && m(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }w.Callbacks = function (e) {
    e = "string" == typeof e ? function (e) {
      var t = {};return w.each(e.match(M) || [], function (e, n) {
        t[n] = !0;
      }), t;
    }(e) : w.extend({}, e);var t,
        n,
        i,
        o,
        r = [],
        s = [],
        a = -1,
        l = function l() {
      for (o = o || e.once, i = t = !0; s.length; a = -1) {
        for (n = s.shift(); ++a < r.length;) {
          !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length, n = !1);
        }
      }e.memory || (n = !1), t = !1, o && (r = n ? [] : "");
    },
        c = { add: function add() {
        return r && (n && !t && (a = r.length - 1, s.push(n)), function t(n) {
          w.each(n, function (n, i) {
            m(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== b(i) && t(i);
          });
        }(arguments), n && !t && l()), this;
      }, remove: function remove() {
        return w.each(arguments, function (e, t) {
          for (var n; (n = w.inArray(t, r, n)) > -1;) {
            r.splice(n, 1), n <= a && a--;
          }
        }), this;
      }, has: function has(e) {
        return e ? w.inArray(e, r) > -1 : r.length > 0;
      }, empty: function empty() {
        return r && (r = []), this;
      }, disable: function disable() {
        return o = s = [], r = n = "", this;
      }, disabled: function disabled() {
        return !r;
      }, lock: function lock() {
        return o = s = [], n || t || (r = n = ""), this;
      }, locked: function locked() {
        return !!o;
      }, fireWith: function fireWith(e, n) {
        return o || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this;
      }, fire: function fire() {
        return c.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!i;
      } };return c;
  }, w.extend({ Deferred: function Deferred(t) {
      var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          o = { state: function state() {
          return i;
        }, always: function always() {
          return r.done(arguments).fail(arguments), this;
        }, catch: function _catch(e) {
          return o.then(null, e);
        }, pipe: function pipe() {
          var e = arguments;return w.Deferred(function (t) {
            w.each(n, function (n, i) {
              var o = m(e[i[4]]) && e[i[4]];r[i[1]](function () {
                var e = o && o.apply(this, arguments);e && m(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, then: function then(t, i, o) {
          var r = 0;function s(t, n, i, o) {
            return function () {
              var a = this,
                  l = arguments,
                  c = function c() {
                var e, c;if (!(t < r)) {
                  if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");c = e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, m(c) ? o ? c.call(e, s(r, n, j, o), s(r, n, H, o)) : (r++, c.call(e, s(r, n, j, o), s(r, n, H, o), s(r, n, j, n.notifyWith))) : (i !== j && (a = void 0, l = [e]), (o || n.resolveWith)(a, l));
                }
              },
                  u = o ? c : function () {
                try {
                  c();
                } catch (e) {
                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= r && (i !== H && (a = void 0, l = [e]), n.rejectWith(a, l));
                }
              };t ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()), e.setTimeout(u));
            };
          }return w.Deferred(function (e) {
            n[0][3].add(s(0, e, m(o) ? o : j, e.notifyWith)), n[1][3].add(s(0, e, m(t) ? t : j)), n[2][3].add(s(0, e, m(i) ? i : H));
          }).promise();
        }, promise: function promise(e) {
          return null != e ? w.extend(e, o) : o;
        } },
          r = {};return w.each(n, function (e, t) {
        var s = t[2],
            a = t[5];o[t[1]] = s.add, a && s.add(function () {
          i = a;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), r[t[0]] = function () {
          return r[t[0] + "With"](this === r ? void 0 : this, arguments), this;
        }, r[t[0] + "With"] = s.fireWith;
      }), o.promise(r), t && t.call(r, r), r;
    }, when: function when(e) {
      var t = arguments.length,
          n = t,
          i = Array(n),
          o = r.call(arguments),
          s = w.Deferred(),
          a = function a(e) {
        return function (n) {
          i[e] = this, o[e] = arguments.length > 1 ? r.call(arguments) : n, --t || s.resolveWith(i, o);
        };
      };if (t <= 1 && (F(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || m(o[n] && o[n].then))) return s.then();for (; n--;) {
        F(o[n], a(n), s.reject);
      }return s.promise();
    } });var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && q.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
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
    } }), w.ready.then = B.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(w.ready) : (i.addEventListener("DOMContentLoaded", R), e.addEventListener("load", R));var z = function z(e, t, n, i, o, r, s) {
    var a = 0,
        l = e.length,
        c = null == n;if ("object" === b(n)) for (a in o = !0, n) {
      z(e, t, a, n[a], !0, r, s);
    } else if (void 0 !== i && (o = !0, m(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function t(e, _t2, n) {
      return c.call(w(e), n);
    })), t)) for (; a < l; a++) {
      t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
    }return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
  },
      W = /^-ms-/,
      U = /-([a-z])/g;function V(e, t) {
    return t.toUpperCase();
  }function K(e) {
    return e.replace(W, "ms-").replace(U, V);
  }var Y = function Y(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };function $() {
    this.expando = w.expando + $.uid++;
  }$.uid = 1, $.prototype = { cache: function cache(e) {
      var t = e[this.expando];return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function set(e, t, n) {
      var i,
          o = this.cache(e);if ("string" == typeof t) o[K(t)] = n;else for (i in t) {
        o[K(i)] = t[i];
      }return o;
    }, get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)];
    }, access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    }, remove: function remove(e, t) {
      var n,
          i = e[this.expando];if (void 0 !== i) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(K) : (t = K(t)) in i ? [t] : t.match(M) || []).length;for (; n--;) {
            delete i[t[n]];
          }
        }(void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function hasData(e) {
      var t = e[this.expando];return void 0 !== t && !w.isEmptyObject(t);
    } };var Q = new $(),
      G = new $(),
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
          o,
          r = this[0],
          s = r && r.attributes;if (void 0 === e) {
        if (this.length && (o = G.get(r), 1 === r.nodeType && !Q.get(r, "hasDataAttrs"))) {
          for (n = s.length; n--;) {
            s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = K(i.slice(5)), Z(r, i, o[i]));
          }Q.set(r, "hasDataAttrs", !0);
        }return o;
      }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
        G.set(this, e);
      }) : z(this, function (t) {
        var n;if (r && void 0 === t) return void 0 !== (n = G.get(r, e)) ? n : void 0 !== (n = Z(r, e)) ? n : void 0;this.each(function () {
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
          o = n.shift(),
          r = w._queueHooks(e, t);"inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function () {
        w.dequeue(e, t);
      }, r)), !i && r && r.empty.fire();
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
          o = w.Deferred(),
          r = this,
          s = this.length,
          a = function a() {
        --i || o.resolveWith(r, [r]);
      };for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) {
        (n = Q.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
      }return a(), o.promise(t);
    } });var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      ie = function ie(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
  },
      oe = function oe(e, t, n, i) {
    var o,
        r,
        s = {};for (r in t) {
      s[r] = e.style[r], e.style[r] = t[r];
    }for (r in o = n.apply(e, i || []), t) {
      e.style[r] = s[r];
    }return o;
  };function re(e, t, n, i) {
    var o,
        r,
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
        w.style(e, t, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
      }u *= 2, w.style(e, t, u + c), n = n || [];
    }return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o;
  }var se = {};function ae(e) {
    var t,
        n = e.ownerDocument,
        i = e.nodeName,
        o = se[i];return o || (t = n.body.appendChild(n.createElement(i)), o = w.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), se[i] = o, o);
  }function le(e, t) {
    for (var n, i, o = [], r = 0, s = e.length; r < s; r++) {
      (i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = Q.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && ie(i) && (o[r] = ae(i))) : "none" !== n && (o[r] = "none", Q.set(i, "display", n)));
    }for (r = 0; r < s; r++) {
      null != o[r] && (e[r].style.display = o[r]);
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
      ve = /<|&#?\w+;/;function ye(e, t, n, i, o) {
    for (var r, s, a, l, c, u, d = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++) {
      if ((r = e[f]) || 0 === r) if ("object" === b(r)) w.merge(h, r.nodeType ? [r] : r);else if (ve.test(r)) {
        for (s = s || d.appendChild(t.createElement("div")), a = (ue.exec(r) || ["", ""])[1].toLowerCase(), l = he[a] || he._default, s.innerHTML = l[1] + w.htmlPrefilter(r) + l[2], u = l[0]; u--;) {
          s = s.lastChild;
        }w.merge(h, s.childNodes), (s = d.firstChild).textContent = "";
      } else h.push(t.createTextNode(r));
    }for (d.textContent = "", f = 0; r = h[f++];) {
      if (i && w.inArray(r, i) > -1) o && o.push(r);else if (c = w.contains(r.ownerDocument, r), s = fe(d.appendChild(r), "script"), c && pe(s), n) for (u = 0; r = s[u++];) {
        de.test(r.type || "") && n.push(r);
      }
    }return d;
  }me = i.createDocumentFragment().appendChild(i.createElement("div")), (ge = i.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), me.appendChild(ge), p.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;var be = i.documentElement,
      we = /^key/,
      _e = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ee = /^([^.]*)(?:\.(.+)|)/;function Te() {
    return !0;
  }function Ce() {
    return !1;
  }function ke() {
    try {
      return i.activeElement;
    } catch (e) {}
  }function xe(e, t, n, i, o, r) {
    var s, a;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
      for (a in "string" != typeof n && (i = i || n, n = void 0), t) {
        xe(e, a, n, i, t[a], r);
      }return e;
    }if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Ce;else if (!o) return e;return 1 === r && (s = o, (o = function o(e) {
      return w().off(e), s.apply(this, arguments);
    }).guid = s.guid || (s.guid = w.guid++)), e.each(function () {
      w.event.add(this, t, o, i, n);
    });
  }w.event = { global: {}, add: function add(e, t, n, i, o) {
      var r,
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
          g = Q.get(e);if (g) for (n.handler && (n = (r = n).handler, o = r.selector), o && w.find.matchesSelector(be, o), n.guid || (n.guid = w.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (t) {
        return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
      }), c = (t = (t || "").match(M) || [""]).length; c--;) {
        f = m = (a = Ee.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f && (d = w.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = w.event.special[f] || {}, u = w.extend({ type: f, origType: m, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && w.expr.match.needsContext.test(o), namespace: p.join(".") }, r), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), w.event.global[f] = !0);
      }
    }, remove: function remove(e, t, n, i, o) {
      var r,
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
        for (c = (t = (t || "").match(M) || [""]).length; c--;) {
          if (f = m = (a = Ee.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
            for (d = w.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) {
              u = h[r], !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
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
          o,
          r,
          s,
          a = w.event.fix(e),
          l = new Array(arguments.length),
          c = (Q.get(this, "events") || {})[a.type] || [],
          u = w.event.special[a.type] || {};for (l[0] = a, t = 1; t < arguments.length; t++) {
        l[t] = arguments[t];
      }if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
        for (s = w.event.handlers.call(this, a, c), t = 0; (o = s[t++]) && !a.isPropagationStopped();) {
          for (a.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) {
            a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((w.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
          }
        }return u.postDispatch && u.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(e, t) {
      var n,
          i,
          o,
          r,
          s,
          a = [],
          l = t.delegateCount,
          c = e.target;if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) {
        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
          for (r = [], s = {}, n = 0; n < l; n++) {
            void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? w(o, this).index(c) > -1 : w.find(o, this, null, [c]).length), s[o] && r.push(i);
          }r.length && a.push({ elem: c, handlers: r });
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
          if (this !== ke() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === ke() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && S(this, "input")) return this.click(), !1;
        }, _default: function _default(e) {
          return S(e.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        } } } }, w.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, w.Event = function (e, t) {
    if (!(this instanceof w.Event)) return new w.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
  }, w.Event.prototype = { constructor: w.Event, isDefaultPrevented: Ce, isPropagationStopped: Ce, isImmediatePropagationStopped: Ce, isSimulated: !1, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    } }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
      var t = e.button;return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && _e.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    } }, w.event.addProp), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
    w.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            i = e.relatedTarget,
            o = e.handleObj;return i && (i === this || w.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      } };
  }), w.fn.extend({ on: function on(e, t, n, i) {
      return xe(this, e, t, n, i);
    }, one: function one(e, t, n, i) {
      return xe(this, e, t, n, i, 1);
    }, off: function off(e, t, n) {
      var i, o;if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
        for (o in e) {
          this.off(o, t, e[o]);
        }return this;
      }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each(function () {
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
    var n, i, o, r, s, a, l, c;if (1 === t.nodeType) {
      if (Q.hasData(e) && (r = Q.access(e), s = Q.set(t, r), c = r.events)) for (o in delete s.handle, s.events = {}, c) {
        for (n = 0, i = c[o].length; n < i; n++) {
          w.event.add(t, o, c[o][n]);
        }
      }G.hasData(e) && (a = G.access(e), l = w.extend({}, a), G.set(t, l));
    }
  }function Me(e, t, n, i) {
    t = s.apply([], t);var o,
        r,
        a,
        l,
        c,
        u,
        d = 0,
        h = e.length,
        f = h - 1,
        g = t[0],
        v = m(g);if (v || h > 1 && "string" == typeof g && !p.checkClone && De.test(g)) return e.each(function (o) {
      var r = e.eq(o);v && (t[0] = g.call(this, o, r.html())), Me(r, t, n, i);
    });if (h && (r = (o = ye(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
      for (l = (a = w.map(fe(o, "script"), Pe)).length; d < h; d++) {
        c = o, d !== f && (c = w.clone(c, !0, !0), l && w.merge(a, fe(c, "script"))), n.call(e[d], c, d);
      }if (l) for (u = a[a.length - 1].ownerDocument, w.map(a, Le), d = 0; d < l; d++) {
        c = a[d], de.test(c.type || "") && !Q.access(c, "globalEval") && w.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(c.src) : y(c.textContent.replace(Ie, ""), u, c));
      }
    }return e;
  }function je(e, t, n) {
    for (var i, o = t ? w.filter(t, e) : e, r = 0; null != (i = o[r]); r++) {
      n || 1 !== i.nodeType || w.cleanData(fe(i)), i.parentNode && (n && w.contains(i.ownerDocument, i) && pe(fe(i, "script")), i.parentNode.removeChild(i));
    }return e;
  }w.extend({ htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(Se, "<$1></$2>");
    }, clone: function clone(e, t, n) {
      var i,
          o,
          r,
          s,
          a,
          l,
          c,
          u = e.cloneNode(!0),
          d = w.contains(e.ownerDocument, e);if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (s = fe(u), i = 0, o = (r = fe(e)).length; i < o; i++) {
        a = r[i], l = s[i], void 0, "input" === (c = l.nodeName.toLowerCase()) && ce.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
      }if (t) if (n) for (r = r || fe(e), s = s || fe(u), i = 0, o = r.length; i < o; i++) {
        Oe(r[i], s[i]);
      } else Oe(e, u);return (s = fe(u, "script")).length > 0 && pe(s, !d && fe(e, "script")), u;
    }, cleanData: function cleanData(e) {
      for (var t, n, i, o = w.event.special, r = 0; void 0 !== (n = e[r]); r++) {
        if (Y(n)) {
          if (t = n[Q.expando]) {
            if (t.events) for (i in t.events) {
              o[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
            }n[Q.expando] = void 0;
          }n[G.expando] && (n[G.expando] = void 0);
        }
      }
    } }), w.fn.extend({ detach: function detach(e) {
      return je(this, e, !0);
    }, remove: function remove(e) {
      return je(this, e);
    }, text: function text(e) {
      return z(this, function (e) {
        return void 0 === e ? w.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    }, append: function append() {
      return Me(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e);
      });
    }, prepend: function prepend() {
      return Me(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Ne(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return Me(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return Me(this, arguments, function (e) {
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
      var e = [];return Me(this, arguments, function (t) {
        var n = this.parentNode;w.inArray(this, e) < 0 && (w.cleanData(fe(this)), n && n.replaceChild(t, this));
      }, e);
    } }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    w.fn[e] = function (e) {
      for (var n, i = [], o = w(e), r = o.length - 1, s = 0; s <= r; s++) {
        n = s === r ? this : this.clone(!0), w(o[s])[t](n), a.apply(i, n.get());
      }return this.pushStack(i);
    };
  });var He = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Fe = function Fe(t) {
    var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      qe = new RegExp(ne.join("|"), "i");function Be(e, t, n) {
    var i,
        o,
        r,
        s,
        a = e.style;return (n = n || Fe(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (s = w.style(e, t)), !p.pixelBoxStyles() && He.test(s) && qe.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s;
  }function Re(e, t) {
    return { get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
      } };
  }!function () {
    function t() {
      if (u) {
        c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(c).appendChild(u);var t = e.getComputedStyle(u);o = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", a = 36 === n(t.right), r = 36 === n(t.width), u.style.position = "absolute", s = 36 === u.offsetWidth || "absolute", be.removeChild(c), u = null;
      }
    }function n(e) {
      return Math.round(parseFloat(e));
    }var o,
        r,
        s,
        a,
        l,
        c = i.createElement("div"),
        u = i.createElement("div");u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === u.style.backgroundClip, w.extend(p, { boxSizingReliable: function boxSizingReliable() {
        return t(), r;
      }, pixelBoxStyles: function pixelBoxStyles() {
        return t(), a;
      }, pixelPosition: function pixelPosition() {
        return t(), o;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return t(), l;
      }, scrollboxSize: function scrollboxSize() {
        return t(), s;
      } }));
  }();var ze = /^(none|table(?!-c[ea]).+)/,
      We = /^--/,
      Ue = { position: "absolute", visibility: "hidden", display: "block" },
      Ve = { letterSpacing: "0", fontWeight: "400" },
      Ke = ["Webkit", "Moz", "ms"],
      Ye = i.createElement("div").style;function $e(e) {
    var t = w.cssProps[e];return t || (t = w.cssProps[e] = function (e) {
      if (e in Ye) return e;for (var t = e[0].toUpperCase() + e.slice(1), n = Ke.length; n--;) {
        if ((e = Ke[n] + t) in Ye) return e;
      }
    }(e) || e), t;
  }function Qe(e, t, n) {
    var i = te.exec(t);return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }function Ge(e, t, n, i, o, r) {
    var s = "width" === t ? 1 : 0,
        a = 0,
        l = 0;if (n === (i ? "border" : "content")) return 0;for (; s < 4; s += 2) {
      "margin" === n && (l += w.css(e, n + ne[s], !0, o)), i ? ("content" === n && (l -= w.css(e, "padding" + ne[s], !0, o)), "margin" !== n && (l -= w.css(e, "border" + ne[s] + "Width", !0, o))) : (l += w.css(e, "padding" + ne[s], !0, o), "padding" !== n ? l += w.css(e, "border" + ne[s] + "Width", !0, o) : a += w.css(e, "border" + ne[s] + "Width", !0, o));
    }return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5))), l;
  }function Xe(e, t, n) {
    var i = Fe(e),
        o = Be(e, t, i),
        r = "border-box" === w.css(e, "boxSizing", !1, i),
        s = r;if (He.test(o)) {
      if (!n) return o;o = "auto";
    }return s = s && (p.boxSizingReliable() || o === e.style[t]), ("auto" === o || !parseFloat(o) && "inline" === w.css(e, "display", !1, i)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (o = parseFloat(o) || 0) + Ge(e, t, n || (r ? "border" : "content"), s, i, o) + "px";
  }function Je(e, t, n, i, o) {
    return new Je.prototype.init(e, t, n, i, o);
  }w.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = Be(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
            r,
            s,
            a = K(t),
            l = We.test(t),
            c = e.style;if (l || (t = $e(a)), s = w.cssHooks[t] || w.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];"string" === (r = typeof n === "undefined" ? "undefined" : _typeof(n)) && (o = te.exec(n)) && o[1] && (n = re(e, t, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (w.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n));
      }
    }, css: function css(e, t, n, i) {
      var o,
          r,
          s,
          a = K(t);return We.test(t) || (t = $e(a)), (s = w.cssHooks[t] || w.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = Be(e, t, i)), "normal" === o && t in Ve && (o = Ve[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o;
    } }), w.each(["height", "width"], function (e, t) {
    w.cssHooks[t] = { get: function get(e, n, i) {
        if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Xe(e, t, i) : oe(e, Ue, function () {
          return Xe(e, t, i);
        });
      }, set: function set(e, n, i) {
        var o,
            r = Fe(e),
            s = "border-box" === w.css(e, "boxSizing", !1, r),
            a = i && Ge(e, t, i, s, r);return s && p.scrollboxSize() === r.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - Ge(e, t, "border", !1, r) - .5)), a && (o = te.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Qe(0, n, a);
      } };
  }), w.cssHooks.marginLeft = Re(p.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - oe(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    w.cssHooks[e + t] = { expand: function expand(n) {
        for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) {
          o[e + ne[i] + t] = r[i] || r[i - 2] || r[0];
        }return o;
      } }, "margin" !== e && (w.cssHooks[e + t].set = Qe);
  }), w.fn.extend({ css: function css(e, t) {
      return z(this, function (e, t, n) {
        var i,
            o,
            r = {},
            s = 0;if (Array.isArray(t)) {
          for (i = Fe(e), o = t.length; s < o; s++) {
            r[t[s]] = w.css(e, t[s], !1, i);
          }return r;
        }return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
      }, e, t, arguments.length > 1);
    } }), w.Tween = Je, Je.prototype = { constructor: Je, init: function init(e, t, n, i, o, r) {
      this.elem = e, this.prop = n, this.easing = o || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (w.cssNumber[n] ? "" : "px");
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
  }function ot() {
    return e.setTimeout(function () {
      Ze = void 0;
    }), Ze = Date.now();
  }function rt(e, t) {
    var n,
        i = 0,
        o = { height: e };for (t = t ? 1 : 0; i < 4; i += 2 - t) {
      o["margin" + (n = ne[i])] = o["padding" + n] = e;
    }return t && (o.opacity = o.width = e), o;
  }function st(e, t, n) {
    for (var i, o = (at.tweeners[t] || []).concat(at.tweeners["*"]), r = 0, s = o.length; r < s; r++) {
      if (i = o[r].call(n, t, e)) return i;
    }
  }function at(e, t, n) {
    var i,
        o,
        r = 0,
        s = at.prefilters.length,
        a = w.Deferred().always(function () {
      delete l.elem;
    }),
        l = function l() {
      if (o) return !1;for (var t = Ze || ot(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) {
        c.tweens[r].run(i);
      }return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
    },
        c = a.promise({ elem: e, props: w.extend({}, t), opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n), originalProperties: t, originalOptions: n, startTime: Ze || ot(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
        var i = w.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);return c.tweens.push(i), i;
      }, stop: function stop(t) {
        var n = 0,
            i = t ? c.tweens.length : 0;if (o) return this;for (o = !0; n < i; n++) {
          c.tweens[n].run(1);
        }return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
      } }),
        u = c.props;for (!function (e, t) {
      var n, i, o, r, s;for (n in e) {
        if (o = t[i = K(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = w.cssHooks[i]) && ("expand" in s)) for (n in r = s.expand(r), delete e[i], r) {
          (n in e) || (e[n] = r[n], t[n] = o);
        } else t[i] = o;
      }
    }(u, c.opts.specialEasing); r < s; r++) {
      if (i = at.prefilters[r].call(c, e, u, c.opts)) return m(i.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
    }return w.map(u, st, c), m(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), w.fx.timer(w.extend(l, { elem: e, anim: c, queue: c.opts.queue })), c;
  }w.Animation = w.extend(at, { tweeners: { "*": [function (e, t) {
        var n = this.createTween(e, t);return re(n.elem, e, te.exec(t), n), n;
      }] }, tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(M);for (var n, i = 0, o = e.length; i < o; i++) {
        n = e[i], at.tweeners[n] = at.tweeners[n] || [], at.tweeners[n].unshift(t);
      }
    }, prefilters: [function (e, t, n) {
      var i,
          o,
          r,
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
        if (o = t[i], tt.test(o)) {
          if (delete t[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
            if ("show" !== o || !g || void 0 === g[i]) continue;m = !0;
          }f[i] = g && g[i] || w.style(e, i);
        }
      }if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(f)) for (i in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = g && g.display) && (c = Q.get(e, "display")), "none" === (u = w.css(e, "display")) && (c ? u = c : (le([e], !0), c = e.style.display || c, u = w.css(e, "display"), le([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === w.css(e, "float") && (l || (h.done(function () {
        p.display = c;
      }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
      })), l = !1, f) {
        l || (g ? "hidden" in g && (m = g.hidden) : g = Q.access(e, "fxshow", { display: c }), r && (g.hidden = !m), m && le([e], !0), h.done(function () {
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
      var o = w.isEmptyObject(e),
          r = w.speed(t, n, i),
          s = function s() {
        var t = at(this, w.extend({}, e), r);(o || Q.get(this, "finish")) && t.stop(!0);
      };return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
    }, stop: function stop(e, t, n) {
      var i = function i(e) {
        var t = e.stop;delete e.stop, t(n);
      };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            o = null != e && e + "queueHooks",
            r = w.timers,
            s = Q.get(this);if (o) s[o] && s[o].stop && i(s[o]);else for (o in s) {
          s[o] && s[o].stop && nt.test(o) && i(s[o]);
        }for (o = r.length; o--;) {
          r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
        }!t && n || w.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = Q.get(this),
            i = n[e + "queue"],
            o = n[e + "queueHooks"],
            r = w.timers,
            s = i ? i.length : 0;for (n.finish = !0, w.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) {
          r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
        }for (t = 0; t < s; t++) {
          i[t] && i[t].finish && i[t].finish.call(this);
        }delete n.finish;
      });
    } }), w.each(["toggle", "show", "hide"], function (e, t) {
    var n = w.fn[t];w.fn[t] = function (e, i, o) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(rt(t, !0), e, i, o);
    };
  }), w.each({ slideDown: rt("show"), slideUp: rt("hide"), slideToggle: rt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
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
      var o = e.setTimeout(n, t);i.stop = function () {
        e.clearTimeout(o);
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
          o,
          r = e.nodeType;if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === r && w.isXMLDoc(e) || (o = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = w.find.attr(e, t)) ? void 0 : i);
    }, attrHooks: { type: { set: function set(e, t) {
          if (!p.radioValue && "radio" === t && S(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, removeAttr: function removeAttr(e, t) {
      var n,
          i = 0,
          o = t && t.match(M);if (o && 1 === e.nodeType) for (; n = o[i++];) {
        e.removeAttribute(n);
      }
    } }), lt = { set: function set(e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ct[t] || w.find.attr;ct[t] = function (e, t, i) {
      var o,
          r,
          s = t.toLowerCase();return i || (r = ct[s], ct[s] = o, o = null != n(e, t, i) ? s : null, ct[s] = r), o;
    };
  });var ut = /^(?:input|select|textarea|button)$/i,
      dt = /^(?:a|area)$/i;function ht(e) {
    return (e.match(M) || []).join(" ");
  }function ft(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }function pt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || [];
  }w.fn.extend({ prop: function prop(e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    }, removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    } }), w.extend({ prop: function prop(e, t, n) {
      var i,
          o,
          r = e.nodeType;if (3 !== r && 8 !== r && 2 !== r) return 1 === r && w.isXMLDoc(e) || (t = w.propFix[t] || t, o = w.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t];
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
          o,
          r,
          s,
          a,
          l = 0;if (m(e)) return this.each(function (t) {
        w(this).addClass(e.call(this, t, ft(this)));
      });if ((t = pt(e)).length) for (; n = this[l++];) {
        if (o = ft(n), i = 1 === n.nodeType && " " + ht(o) + " ") {
          for (s = 0; r = t[s++];) {
            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
          }o !== (a = ht(i)) && n.setAttribute("class", a);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;if (m(e)) return this.each(function (t) {
        w(this).removeClass(e.call(this, t, ft(this)));
      });if (!arguments.length) return this.attr("class", "");if ((t = pt(e)).length) for (; n = this[l++];) {
        if (o = ft(n), i = 1 === n.nodeType && " " + ht(o) + " ") {
          for (s = 0; r = t[s++];) {
            for (; i.indexOf(" " + r + " ") > -1;) {
              i = i.replace(" " + r + " ", " ");
            }
          }o !== (a = ht(i)) && n.setAttribute("class", a);
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = typeof e === "undefined" ? "undefined" : _typeof(e),
          i = "string" === n || Array.isArray(e);return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each(function (n) {
        w(this).toggleClass(e.call(this, n, ft(this), t), t);
      }) : this.each(function () {
        var t, o, r, s;if (i) for (o = 0, r = w(this), s = pt(e); t = s[o++];) {
          r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
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
          o = this[0];return arguments.length ? (i = m(e), this.each(function (n) {
        var o;1 === this.nodeType && (null == (o = i ? e.call(this, n, w(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = w.map(o, function (e) {
          return null == e ? "" : e + "";
        })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o));
      })) : o ? (t = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(mt, "") : null == n ? "" : n : void 0;
    } }), w.extend({ valHooks: { option: { get: function get(e) {
          var t = w.find.attr(e, "value");return null != t ? t : ht(w.text(e));
        } }, select: { get: function get(e) {
          var t,
              n,
              i,
              o = e.options,
              r = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              l = s ? r + 1 : o.length;for (i = r < 0 ? l : s ? r : 0; i < l; i++) {
            if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
              if (t = w(n).val(), s) return t;a.push(t);
            }
          }return a;
        }, set: function set(e, t) {
          for (var n, i, o = e.options, r = w.makeArray(t), s = o.length; s--;) {
            ((i = o[s]).selected = w.inArray(w.valHooks.option.get(i), r) > -1) && (n = !0);
          }return n || (e.selectedIndex = -1), r;
        } } } }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = { set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
      } }, p.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), p.focusin = "onfocusin" in e;var gt = /^(?:focusinfocus|focusoutblur)$/,
      vt = function vt(e) {
    e.stopPropagation();
  };w.extend(w.event, { trigger: function trigger(t, n, o, r) {
      var s,
          a,
          l,
          c,
          u,
          h,
          f,
          p,
          v = [o || i],
          y = d.call(t, "type") ? t.type : t,
          b = d.call(t, "namespace") ? t.namespace.split(".") : [];if (a = p = l = o = o || i, 3 !== o.nodeType && 8 !== o.nodeType && !gt.test(y + w.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(), b.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t)).isTrigger = r ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), n = null == n ? [t] : w.makeArray(n, [t]), f = w.event.special[y] || {}, r || !f.trigger || !1 !== f.trigger.apply(o, n))) {
        if (!r && !f.noBubble && !g(o)) {
          for (c = f.delegateType || y, gt.test(c + y) || (a = a.parentNode); a; a = a.parentNode) {
            v.push(a), l = a;
          }l === (o.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e);
        }for (s = 0; (a = v[s++]) && !t.isPropagationStopped();) {
          p = a, t.type = s > 1 ? c : f.bindType || y, (h = (Q.get(a, "events") || {})[t.type] && Q.get(a, "handle")) && h.apply(a, n), (h = u && a[u]) && h.apply && Y(a) && (t.result = h.apply(a, n), !1 === t.result && t.preventDefault());
        }return t.type = y, r || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(v.pop(), n) || !Y(o) || u && m(o[y]) && !g(o) && ((l = o[u]) && (o[u] = null), w.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, vt), o[y](), t.isPropagationStopped() && p.removeEventListener(y, vt), w.event.triggered = void 0, l && (o[u] = l)), t.result;
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
            o = Q.access(i, t);o || i.addEventListener(e, n, !0), Q.access(i, t, (o || 0) + 1);
      }, teardown: function teardown() {
        var i = this.ownerDocument || this,
            o = Q.access(i, t) - 1;o ? Q.access(i, t, o) : (i.removeEventListener(e, n, !0), Q.remove(i, t));
      } };
  });var yt = e.location,
      bt = Date.now(),
      wt = /\?/;w.parseXML = function (t) {
    var n;if (!t || "string" != typeof t) return null;try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
  };var _t = /\[\]$/,
      Et = /\r?\n/g,
      Tt = /^(?:submit|button|image|reset|file)$/i,
      Ct = /^(?:input|select|textarea|keygen)/i;function kt(e, t, n, i) {
    var o;if (Array.isArray(t)) w.each(t, function (t, o) {
      n || _t.test(e) ? i(e, o) : kt(e + "[" + ("object" == (typeof o === "undefined" ? "undefined" : _typeof(o)) && null != o ? t : "") + "]", o, n, i);
    });else if (n || "object" !== b(t)) i(e, t);else for (o in t) {
      kt(e + "[" + o + "]", t[o], n, i);
    }
  }w.param = function (e, t) {
    var n,
        i = [],
        o = function o(e, t) {
      var n = m(t) ? t() : t;i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      o(this.name, this.value);
    });else for (n in e) {
      kt(n, e[n], t, o);
    }return i.join("&");
  }, w.fn.extend({ serialize: function serialize() {
      return w.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = w.prop(this, "elements");return e ? w.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !w(this).is(":disabled") && Ct.test(this.nodeName) && !Tt.test(e) && (this.checked || !ce.test(e));
      }).map(function (e, t) {
        var n = w(this).val();return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
          return { name: t.name, value: e.replace(Et, "\r\n") };
        }) : { name: t.name, value: n.replace(Et, "\r\n") };
      }).get();
    } });var xt = /%20/g,
      St = /#.*$/,
      At = /([?&])_=[^&]*/,
      Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      It = /^(?:GET|HEAD)$/,
      Nt = /^\/\//,
      Pt = {},
      Lt = {},
      Ot = "*/".concat("*"),
      Mt = i.createElement("a");function jt(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");var i,
          o = 0,
          r = t.toLowerCase().match(M) || [];if (m(n)) for (; i = r[o++];) {
        "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
      }
    };
  }function Ht(e, t, n, i) {
    var o = {},
        r = e === Lt;function s(a) {
      var l;return o[a] = !0, w.each(e[a] || [], function (e, a) {
        var c = a(t, n, i);return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1);
      }), l;
    }return s(t.dataTypes[0]) || !o["*"] && s("*");
  }function Ft(e, t) {
    var n,
        i,
        o = w.ajaxSettings.flatOptions || {};for (n in t) {
      void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
    }return i && w.extend(!0, e, i), e;
  }Mt.href = yt.href, w.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: yt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Ot, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? Ft(Ft(e, w.ajaxSettings), t) : Ft(w.ajaxSettings, e);
    }, ajaxPrefilter: jt(Pt), ajaxTransport: jt(Lt), ajax: function ajax(t, n) {
      "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {};var o,
          r,
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
          _ = {},
          E = {},
          T = "canceled",
          C = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (u) {
            if (!a) for (a = {}; t = Dt.exec(s);) {
              a[t[1].toLowerCase()] = t[2];
            }t = a[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return u ? s : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          return null == u && (e = E[e.toLowerCase()] = E[e.toLowerCase()] || e, _[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return null == u && (p.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          var t;if (e) if (u) C.always(e[C.status]);else for (t in e) {
            b[t] = [b[t], e[t]];
          }return this;
        }, abort: function abort(e) {
          var t = e || T;return o && o.abort(t), k(0, t), this;
        } };if (v.promise(C), p.url = ((t || p.url || yt.href) + "").replace(Nt, yt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(M) || [""], null == p.crossDomain) {
        c = i.createElement("a");try {
          c.href = p.url, c.href = c.href, p.crossDomain = Mt.protocol + "//" + Mt.host != c.protocol + "//" + c.host;
        } catch (e) {
          p.crossDomain = !0;
        }
      }if (p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), Ht(Pt, p, n, C), u) return C;for (h in (d = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !It.test(p.type), r = p.url.replace(St, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(xt, "+")) : (f = p.url.slice(r.length), p.data && (p.processData || "string" == typeof p.data) && (r += (wt.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(At, "$1"), f = (wt.test(r) ? "&" : "?") + "_=" + bt++ + f), p.url = r + f), p.ifModified && (w.lastModified[r] && C.setRequestHeader("If-Modified-Since", w.lastModified[r]), w.etag[r] && C.setRequestHeader("If-None-Match", w.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : p.accepts["*"]), p.headers) {
        C.setRequestHeader(h, p.headers[h]);
      }if (p.beforeSend && (!1 === p.beforeSend.call(m, C, p) || u)) return C.abort();if (T = "abort", y.add(p.complete), C.done(p.success), C.fail(p.error), o = Ht(Lt, p, n, C)) {
        if (C.readyState = 1, d && g.trigger("ajaxSend", [C, p]), u) return C;p.async && p.timeout > 0 && (l = e.setTimeout(function () {
          C.abort("timeout");
        }, p.timeout));try {
          u = !1, o.send(_, k);
        } catch (e) {
          if (u) throw e;k(-1, e);
        }
      } else k(-1, "No Transport");function k(t, n, i, a) {
        var c,
            h,
            f,
            _,
            E,
            T = n;u || (u = !0, l && e.clearTimeout(l), o = void 0, s = a || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (_ = function (e, t, n) {
          for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];) {
            l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
          }if (i) for (o in a) {
            if (a[o] && a[o].test(i)) {
              l.unshift(o);break;
            }
          }if (l[0] in n) r = l[0];else {
            for (o in n) {
              if (!l[0] || e.converters[o + " " + l[0]]) {
                r = o;break;
              }s || (s = o);
            }r = r || s;
          }if (r) return r !== l[0] && l.unshift(r), n[r];
        }(p, C, i)), _ = function (e, t, n, i) {
          var o,
              r,
              s,
              a,
              l,
              c = {},
              u = e.dataTypes.slice();if (u[1]) for (s in e.converters) {
            c[s.toLowerCase()] = e.converters[s];
          }for (r = u.shift(); r;) {
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift()) if ("*" === r) r = l;else if ("*" !== l && l !== r) {
              if (!(s = c[l + " " + r] || c["* " + r])) for (o in c) {
                if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                  !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));break;
                }
              }if (!0 !== s) if (s && e.throws) t = s(t);else try {
                t = s(t);
              } catch (e) {
                return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + r };
              }
            }
          }return { state: "success", data: t };
        }(p, _, C, c), c ? (p.ifModified && ((E = C.getResponseHeader("Last-Modified")) && (w.lastModified[r] = E), (E = C.getResponseHeader("etag")) && (w.etag[r] = E)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = _.state, h = _.data, c = !(f = _.error))) : (f = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + "", c ? v.resolveWith(m, [h, T, C]) : v.rejectWith(m, [C, T, f]), C.statusCode(b), b = void 0, d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? h : f]), y.fireWith(m, [C, T]), d && (g.trigger("ajaxComplete", [C, p]), --w.active || w.event.trigger("ajaxStop")));
      }return C;
    }, getJSON: function getJSON(e, t, n) {
      return w.get(e, t, n, "json");
    }, getScript: function getScript(e, t) {
      return w.get(e, void 0, t, "script");
    } }), w.each(["get", "post"], function (e, t) {
    w[t] = function (e, n, i, o) {
      return m(n) && (o = o || i, i = n, n = void 0), w.ajax(w.extend({ url: e, type: t, dataType: o, data: n, success: i }, w.isPlainObject(e) && e));
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
  };var qt = { 0: 200, 1223: 204 },
      Bt = w.ajaxSettings.xhr();p.cors = !!Bt && "withCredentials" in Bt, p.ajax = Bt = !!Bt, w.ajaxTransport(function (t) {
    var _n, i;if (p.cors || Bt && !t.crossDomain) return { send: function send(o, r) {
        var s,
            a = t.xhr();if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) {
          a[s] = t.xhrFields[s];
        }for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) {
          a.setRequestHeader(s, o[s]);
        }_n = function n(e) {
          return function () {
            _n && (_n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(qt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
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
    var t, _n2;if (e.crossDomain) return { send: function send(o, r) {
        t = w("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n2 = function n(e) {
          t.remove(), _n2 = null, e && r("error" === e.type ? 404 : 200, e.type);
        }), i.head.appendChild(t[0]);
      }, abort: function abort() {
        _n2 && _n2();
      } };
  });var Rt,
      zt = [],
      Wt = /(=)\?(?=&|$)|\?\?/;w.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = zt.pop() || w.expando + "_" + bt++;return this[e] = !0, e;
    } }), w.ajaxPrefilter("json jsonp", function (t, n, i) {
    var o,
        r,
        s,
        a = !1 !== t.jsonp && (Wt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(t.data) && "data");if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Wt, "$1" + o) : !1 !== t.jsonp && (t.url += (wt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
      return s || w.error(o + " was not called"), s[0];
    }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
      s = arguments;
    }, i.always(function () {
      void 0 === r ? w(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, zt.push(o)), s && m(r) && r(s[0]), s = r = void 0;
    }), "script";
  }), p.createHTMLDocument = ((Rt = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Rt.childNodes.length), w.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((o = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(o)) : t = i), r = A.exec(e), s = !n && [], r ? [t.createElement(r[1])] : (r = ye([e], t, s), s && s.length && w(s).remove(), w.merge([], r.childNodes)));var o, r, s;
  }, w.fn.load = function (e, t, n) {
    var i,
        o,
        r,
        s = this,
        a = e.indexOf(" ");return a > -1 && (i = ht(e.slice(a)), e = e.slice(0, a)), m(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (o = "POST"), s.length > 0 && w.ajax({ url: e, type: o || "GET", dataType: "html", data: t }).done(function (e) {
      r = arguments, s.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e);
    }).always(n && function (e, t) {
      s.each(function () {
        n.apply(this, r || [e.responseText, t, e]);
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
          o,
          r,
          s,
          a,
          l,
          c = w.css(e, "position"),
          u = w(e),
          d = {};"static" === c && (e.style.position = "relative"), a = u.offset(), r = w.css(e, "top"), l = w.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), m(t) && (t = t.call(e, n, w.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : u.css(d);
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
            o = { top: 0, left: 0 };if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();else {
          for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) {
            e = e.parentNode;
          }e && e !== i && 1 === e.nodeType && ((o = w(e).offset()).top += w.css(e, "borderTopWidth", !0), o.left += w.css(e, "borderLeftWidth", !0));
        }return { top: t.top - o.top - w.css(i, "marginTop", !0), left: t.left - o.left - w.css(i, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === w.css(e, "position");) {
          e = e.offsetParent;
        }return e || be;
      });
    } }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
    var n = "pageYOffset" === t;w.fn[e] = function (i) {
      return z(this, function (e, i, o) {
        var r;if (g(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o;
      }, e, i, arguments.length);
    };
  }), w.each(["top", "left"], function (e, t) {
    w.cssHooks[t] = Re(p.pixelPosition, function (e, n) {
      if (n) return n = Be(e, t), He.test(n) ? w(e).position()[t] + "px" : n;
    });
  }), w.each({ Height: "height", Width: "width" }, function (e, t) {
    w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
      w.fn[i] = function (o, r) {
        var s = arguments.length && (n || "boolean" != typeof o),
            a = n || (!0 === o || !0 === r ? "margin" : "border");return z(this, function (t, n, o) {
          var r;return g(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? w.css(t, n, a) : w.style(t, n, o, a);
        }, t, s ? o : void 0, s);
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
    var n, i, o;if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return i = r.call(arguments, 2), (o = function o() {
      return e.apply(t || this, i.concat(r.call(arguments)));
    }).guid = e.guid = e.guid || w.guid++, o;
  }, w.holdReady = function (e) {
    e ? w.readyWait++ : w.ready(!0);
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = S, w.isFunction = m, w.isWindow = g, w.camelCase = K, w.type = b, w.now = Date.now, w.isNumeric = function (e) {
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
  }var o = e && window.Promise ? function (e) {
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
  };function r(e) {
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
        o = t.overflowY;return (/(auto|scroll|overlay)/.test(n + o + i) ? e : l(a(e))
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
        o = n ? t : e,
        r = document.createRange();r.setStart(i, 0), r.setEnd(o, 0);var s,
        a,
        l = r.commonAncestorContainer;if (e !== l && t !== l || i.contains(o)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && h(s.firstElementChild) !== s ? h(l) : l;var c = f(e);return c.host ? p(c.host, t) : p(e, f(t).host);
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
      _ = function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  },
      E = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];for (var i in n) {
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
    }return e;
  };function T(e) {
    return E({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }function C(e) {
    var t = {};try {
      if (d(10)) {
        t = e.getBoundingClientRect();var n = m(e, "top"),
            i = m(e, "left");t.top += n, t.left += i, t.bottom += n, t.right += i;
      } else t = e.getBoundingClientRect();
    } catch (e) {}var o = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
        r = "HTML" === e.nodeName ? y() : {},
        a = r.width || e.clientWidth || o.right - o.left,
        l = r.height || e.clientHeight || o.bottom - o.top,
        c = e.offsetWidth - a,
        u = e.offsetHeight - l;if (c || u) {
      var h = s(e);c -= g(h, "x"), u -= g(h, "y"), o.width -= c, o.height -= u;
    }return T(o);
  }function k(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = d(10),
        o = "HTML" === t.nodeName,
        r = C(e),
        a = C(t),
        c = l(e),
        u = s(t),
        h = parseFloat(u.borderTopWidth, 10),
        f = parseFloat(u.borderLeftWidth, 10);n && "HTML" === t.nodeName && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));var p = T({ top: r.top - a.top - h, left: r.left - a.left - f, width: r.width, height: r.height });if (p.marginTop = 0, p.marginLeft = 0, !i && o) {
      var g = parseFloat(u.marginTop, 10),
          v = parseFloat(u.marginLeft, 10);p.top -= h - g, p.bottom -= h - g, p.left -= f - v, p.right -= f - v, p.marginTop = g, p.marginLeft = v;
    }return (i && !n ? t.contains(c) : t === c && "BODY" !== c.nodeName) && (p = function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = m(t, "top"),
          o = m(t, "left"),
          r = n ? -1 : 1;return e.top += i * r, e.bottom += i * r, e.left += o * r, e.right += o * r, e;
    }(p, t)), p;
  }function x(e) {
    if (!e || !e.parentElement || d()) return document.documentElement;for (var t = e.parentElement; t && "none" === s(t, "transform");) {
      t = t.parentElement;
    }return t || document.documentElement;
  }function S(e, t, n, i) {
    var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        r = { top: 0, left: 0 },
        c = o ? x(e) : p(e, t);if ("viewport" === i) r = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = e.ownerDocument.documentElement,
          i = k(e, n),
          o = Math.max(n.clientWidth, window.innerWidth || 0),
          r = Math.max(n.clientHeight, window.innerHeight || 0),
          s = t ? 0 : m(n),
          a = t ? 0 : m(n, "left");return T({ top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: o, height: r });
    }(c, o);else {
      var u = void 0;"scrollParent" === i ? "BODY" === (u = l(a(t))).nodeName && (u = e.ownerDocument.documentElement) : u = "window" === i ? e.ownerDocument.documentElement : i;var d = k(u, c, o);if ("HTML" !== u.nodeName || function e(t) {
        var n = t.nodeName;return "BODY" !== n && "HTML" !== n && ("fixed" === s(t, "position") || e(a(t)));
      }(c)) r = d;else {
        var h = y(),
            f = h.height,
            g = h.width;r.top += d.top - d.marginTop, r.bottom = f + d.top, r.left += d.left - d.marginLeft, r.right = g + d.left;
      }
    }return r.left += n, r.top += n, r.right -= n, r.bottom -= n, r;
  }function A(e, t, n, i, o) {
    var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;if (-1 === e.indexOf("auto")) return e;var s = S(n, i, r, o),
        a = { top: { width: s.width, height: t.top - s.top }, right: { width: s.right - t.right, height: s.height }, bottom: { width: s.width, height: s.bottom - t.bottom }, left: { width: t.left - s.left, height: s.height } },
        l = Object.keys(a).map(function (e) {
      return E({ key: e }, a[e], { area: (t = a[e], t.width * t.height) });var t;
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
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;return k(n, i ? x(t) : p(t, n), i);
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
        o = { width: i.width, height: i.height },
        r = -1 !== ["right", "left"].indexOf(n),
        s = r ? "top" : "left",
        a = r ? "left" : "top",
        l = r ? "height" : "width",
        c = r ? "width" : "height";return o[s] = t[s] + t[l] / 2 - i[l] / 2, o[a] = n === a ? t[a] - i[c] : t[N(a)], o;
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
      e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n = e.function || e.fn;e.enabled && r(n) && (t.offsets.popper = T(t.offsets.popper), t.offsets.reference = T(t.offsets.reference), t = n(t, e));
    }), t;
  }function M(e, t) {
    return e.some(function (e) {
      var n = e.name;return e.enabled && n === t;
    });
  }function j(e) {
    for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
      var o = t[i],
          r = o ? "" + o + n : e;if (void 0 !== document.body.style[r]) return r;
    }return null;
  }function H(e) {
    var t = e.ownerDocument;return t ? t.defaultView : window;
  }function F(e, t, n, i) {
    n.updateBound = i, H(e).addEventListener("resize", n.updateBound, { passive: !0 });var o = l(e);return function e(t, n, i, o) {
      var r = "BODY" === t.nodeName,
          s = r ? t.ownerDocument.defaultView : t;s.addEventListener(n, i, { passive: !0 }), r || e(l(s.parentNode), n, i, o), o.push(s);
    }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n;
  }function q() {
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
        o = !!i && e.some(function (e) {
      return e.name === n && e.enabled && e.order < i.order;
    });if (!o) {
      var r = "`" + t + "`",
          s = "`" + n + "`";console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
    }return o;
  }var W = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      U = W.slice(3);function V(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = U.indexOf(e),
        i = U.slice(n + 1).concat(U.slice(0, n));return t ? i.reverse() : i;
  }var K = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" };function Y(e, t, n, i) {
    var o = [0, 0],
        r = -1 !== ["right", "left"].indexOf(i),
        s = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        a = s.indexOf(L(s, function (e) {
      return -1 !== e.search(/,|\s/);
    }));s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l = /\s*,\s*|\s+/,
        c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];return (c = c.map(function (e, i) {
      var o = (1 === i ? !r : r) ? "height" : "width",
          s = !1;return e.reduce(function (e, t) {
        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return function (e, t, n, i) {
          var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
              r = +o[1],
              s = o[2];if (!r) return e;if (0 === s.indexOf("%")) {
            var a = void 0;switch (s) {case "%p":
                a = n;break;case "%":case "%r":default:
                a = i;}return T(a)[t] / 100 * r;
          }if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;return r;
        }(e, o, t, n);
      });
    })).forEach(function (e, t) {
      e.forEach(function (n, i) {
        B(n) && (o[t] += n * ("-" === e[i - 1] ? -1 : 1));
      });
    }), o;
  }var $ = { placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function onCreate() {}, onUpdate: function onUpdate() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function fn(e) {
          var t = e.placement,
              n = t.split("-")[0],
              i = t.split("-")[1];if (i) {
            var o = e.offsets,
                r = o.reference,
                s = o.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                u = { start: _({}, l, r[l]), end: _({}, l, r[l] + r[c] - s[c]) };e.offsets.popper = E({}, s, u[i]);
          }return e;
        } }, offset: { order: 200, enabled: !0, fn: function fn(e, t) {
          var n = t.offset,
              i = e.placement,
              o = e.offsets,
              r = o.popper,
              s = o.reference,
              a = i.split("-")[0],
              l = void 0;return l = B(+n) ? [+n, 0] : Y(n, r, s, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), e.popper = r, e;
        }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function fn(e, t) {
          var n = t.boundariesElement || h(e.instance.popper);e.instance.reference === n && (n = h(n));var i = j("transform"),
              o = e.instance.popper.style,
              r = o.top,
              s = o.left,
              a = o[i];o.top = "", o.left = "", o[i] = "";var l = S(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);o.top = r, o.left = s, o[i] = a, t.boundaries = l;var c = t.priority,
              u = e.offsets.popper,
              d = { primary: function primary(e) {
              var n = u[e];return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), _({}, e, n);
            }, secondary: function secondary(e) {
              var n = "right" === e ? "left" : "top",
                  i = u[n];return u[e] > l[e] && !t.escapeWithReference && (i = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), _({}, n, i);
            } };return c.forEach(function (e) {
            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";u = E({}, u, d[t](e));
          }), e.offsets.popper = u, e;
        }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function fn(e) {
          var t = e.offsets,
              n = t.popper,
              i = t.reference,
              o = e.placement.split("-")[0],
              r = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(o),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";return n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])), e;
        } }, arrow: { order: 500, enabled: !0, fn: function fn(e, t) {
          var n;if (!z(e.instance.modifiers, "arrow", "keepTogether")) return e;var i = t.element;if ("string" == typeof i) {
            if (!(i = e.instance.popper.querySelector(i))) return e;
          } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;var o = e.placement.split("-")[0],
              r = e.offsets,
              a = r.popper,
              l = r.reference,
              c = -1 !== ["left", "right"].indexOf(o),
              u = c ? "height" : "width",
              d = c ? "Top" : "Left",
              h = d.toLowerCase(),
              f = c ? "left" : "top",
              p = c ? "bottom" : "right",
              m = I(i)[u];l[p] - m < a[h] && (e.offsets.popper[h] -= a[h] - (l[p] - m)), l[h] + m > a[p] && (e.offsets.popper[h] += l[h] + m - a[p]), e.offsets.popper = T(e.offsets.popper);var g = l[h] + l[u] / 2 - m / 2,
              v = s(e.instance.popper),
              y = parseFloat(v["margin" + d], 10),
              b = parseFloat(v["border" + d + "Width"], 10),
              w = g - e.offsets.popper[h] - y - b;return w = Math.max(Math.min(a[u] - m, w), 0), e.arrowElement = i, e.offsets.arrow = (_(n = {}, h, Math.round(w)), _(n, f, ""), n), e;
        }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function fn(e, t) {
          if (M(e.instance.modifiers, "inner")) return e;if (e.flipped && e.placement === e.originalPlacement) return e;var n = S(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
              i = e.placement.split("-")[0],
              o = N(i),
              r = e.placement.split("-")[1] || "",
              s = [];switch (t.behavior) {case K.FLIP:
              s = [i, o];break;case K.CLOCKWISE:
              s = V(i);break;case K.COUNTERCLOCKWISE:
              s = V(i, !0);break;default:
              s = t.behavior;}return s.forEach(function (a, l) {
            if (i !== a || s.length === l + 1) return e;i = e.placement.split("-")[0], o = N(i);var c = e.offsets.popper,
                u = e.offsets.reference,
                d = Math.floor,
                h = "left" === i && d(c.right) > d(u.left) || "right" === i && d(c.left) < d(u.right) || "top" === i && d(c.bottom) > d(u.top) || "bottom" === i && d(c.top) < d(u.bottom),
                f = d(c.left) < d(n.left),
                p = d(c.right) > d(n.right),
                m = d(c.top) < d(n.top),
                g = d(c.bottom) > d(n.bottom),
                v = "left" === i && f || "right" === i && p || "top" === i && m || "bottom" === i && g,
                y = -1 !== ["top", "bottom"].indexOf(i),
                b = !!t.flipVariations && (y && "start" === r && f || y && "end" === r && p || !y && "start" === r && m || !y && "end" === r && g);(h || v || b) && (e.flipped = !0, (h || v) && (i = s[l + 1]), b && (r = function (e) {
              return "end" === e ? "start" : "start" === e ? "end" : e;
            }(r)), e.placement = i + (r ? "-" + r : ""), e.offsets.popper = E({}, e.offsets.popper, P(e.instance.popper, e.offsets.reference, e.placement)), e = O(e.instance.modifiers, e, "flip"));
          }), e;
        }, behavior: "flip", padding: 5, boundariesElement: "viewport" }, inner: { order: 700, enabled: !1, fn: function fn(e) {
          var t = e.placement,
              n = t.split("-")[0],
              i = e.offsets,
              o = i.popper,
              r = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), e.placement = N(t), e.offsets.popper = T(o), e;
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
              o = e.offsets.popper,
              r = L(e.instance.modifiers, function (e) {
            return "applyStyle" === e.name;
          }).gpuAcceleration;void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s = void 0 !== r ? r : t.gpuAcceleration,
              a = C(h(e.instance.popper)),
              l = { position: o.position },
              c = { left: Math.floor(o.left), top: Math.round(o.top), bottom: Math.round(o.bottom), right: Math.floor(o.right) },
              u = "bottom" === n ? "top" : "bottom",
              d = "right" === i ? "left" : "right",
              f = j("transform"),
              p = void 0,
              m = void 0;if (m = "bottom" === u ? -a.height + c.bottom : c.top, p = "right" === d ? -a.width + c.right : c.left, s && f) l[f] = "translate3d(" + p + "px, " + m + "px, 0)", l[u] = 0, l[d] = 0, l.willChange = "transform";else {
            var g = "bottom" === u ? -1 : 1,
                v = "right" === d ? -1 : 1;l[u] = m * g, l[d] = p * v, l.willChange = u + ", " + d;
          }var y = { "x-placement": e.placement };return e.attributes = E({}, y, e.attributes), e.styles = E({}, l, e.styles), e.arrowStyles = E({}, e.offsets.arrow, e.arrowStyles), e;
        }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function fn(e) {
          var t, n;return R(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function (e) {
            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
          }), e.arrowElement && Object.keys(e.arrowStyles).length && R(e.arrowElement, e.arrowStyles), e;
        }, onLoad: function onLoad(e, t, n, i, o) {
          var r = D(o, t, e, n.positionFixed),
              s = A(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);return t.setAttribute("x-placement", s), R(t, { position: n.positionFixed ? "fixed" : "absolute" }), n;
        }, gpuAcceleration: void 0 } } },
      Q = function () {
    function e(t, n) {
      var i = this,
          s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};b(this, e), this.scheduleUpdate = function () {
        return requestAnimationFrame(i.update);
      }, this.update = o(this.update.bind(this)), this.options = E({}, e.Defaults, s), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(E({}, e.Defaults.modifiers, s.modifiers)).forEach(function (t) {
        i.options.modifiers[t] = E({}, e.Defaults.modifiers[t] || {}, s.modifiers ? s.modifiers[t] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return E({ name: e }, i.options.modifiers[e]);
      }).sort(function (e, t) {
        return e.order - t.order;
      }), this.modifiers.forEach(function (e) {
        e.enabled && r(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state);
      }), this.update();var a = this.options.eventsEnabled;a && this.enableEventListeners(), this.state.eventsEnabled = a;
    }return w(e, [{ key: "update", value: function value() {
        return function () {
          if (!this.state.isDestroyed) {
            var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };e.offsets.reference = D(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = A(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = P(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = O(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
          }
        }.call(this);
      } }, { key: "destroy", value: function value() {
        return function () {
          return this.state.isDestroyed = !0, M(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[j("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
        }.call(this);
      } }, { key: "enableEventListeners", value: function value() {
        return function () {
          this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate));
        }.call(this);
      } }, { key: "disableEventListeners", value: function value() {
        return q.call(this);
      } }]), e;
  }();return Q.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Q.placements = W, Q.Defaults = $, Q;
}), function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(e.bootstrap = {}, e.jQuery, e.Popper);
}(this, function (e, t, n) {
  "use strict";
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }function o(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e;
  }function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }function s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable;
      }))), i.forEach(function (t) {
        r(e, t, n[t]);
      });
    }return e;
  }t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;var a = function (e) {
    var t = "transitionend";function n(t) {
      var n = this,
          o = !1;return e(this).one(i.TRANSITION_END, function () {
        o = !0;
      }), setTimeout(function () {
        o || i.triggerTransitionEnd(n);
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
        for (var o in n) {
          if (Object.prototype.hasOwnProperty.call(n, o)) {
            var r = n[o],
                s = t[o],
                a = s && i.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());if (!new RegExp(r).test(a)) throw new Error(e.toUpperCase() + ': Option "' + o + '" provided type "' + a + '" but expected type "' + r + '".');
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
        r = "fade",
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
            o = !1;return n && (o = e(n)[0]), o || (o = e(t).closest("." + i)[0]), o;
      }, l._triggerCloseEvent = function (t) {
        var i = e.Event(n.CLOSE);return e(t).trigger(i), i;
      }, l._removeElement = function (t) {
        var n = this;if (e(t).removeClass(s), e(t).hasClass(r)) {
          var i = a.getTransitionDurationFromElement(t);e(t).one(a.TRANSITION_END, function (e) {
            return n._destroyElement(t, e);
          }).emulateTransitionEnd(i);
        } else this._destroyElement(t);
      }, l._destroyElement = function (t) {
        e(t).detach().trigger(n.CLOSED).remove();
      }, t._jQueryInterface = function (n) {
        return this.each(function () {
          var i = e(this),
              o = i.data("bs.alert");o || (o = new t(this), i.data("bs.alert", o)), "close" === n && o[n](this);
        });
      }, t._handleDismiss = function (e) {
        return function (t) {
          t && t.preventDefault(), e.close(this);
        };
      }, o(t, null, [{ key: "VERSION", get: function get() {
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
        r = "btn",
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
            o = e(this._element).closest(l)[0];if (o) {
          var r = e(this._element).find(c)[0];if (r) {
            if ("radio" === r.type) if (r.checked && e(this._element).hasClass(i)) t = !1;else {
              var s = e(o).find(u)[0];s && e(s).removeClass(i);
            }if (t) {
              if (r.hasAttribute("disabled") || o.hasAttribute("disabled") || r.classList.contains("disabled") || o.classList.contains("disabled")) return;r.checked = !e(this._element).hasClass(i), e(r).trigger("change");
            }r.focus(), n = !1;
          }
        }n && this._element.setAttribute("aria-pressed", !e(this._element).hasClass(i)), t && e(this._element).toggleClass(i);
      }, n.dispose = function () {
        e.removeData(this._element, "bs.button"), this._element = null;
      }, t._jQueryInterface = function (n) {
        return this.each(function () {
          var i = e(this).data("bs.button");i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]();
        });
      }, o(t, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }]), t;
    }();return e(document).on(h.CLICK_DATA_API, a, function (t) {
      t.preventDefault();var n = t.target;e(n).hasClass(r) || (n = e(n).closest(d)), f._jQueryInterface.call(e(n), "toggle");
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
        r = e.fn[t],
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
        _ = "carousel-item-prev",
        E = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
        T = function () {
      function r(t, n) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(E.INDICATORS)[0], this._addEventListeners();
      }var T = r.prototype;return T.next = function () {
        this._isSliding || this._slide(u);
      }, T.nextWhenVisible = function () {
        !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next();
      }, T.prev = function () {
        this._isSliding || this._slide(d);
      }, T.pause = function (t) {
        t || (this._isPaused = !0), e(this._element).find(E.NEXT_PREV)[0] && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }, T.cycle = function (e) {
        e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }, T.to = function (t) {
        var n = this;this._activeElement = e(this._element).find(E.ACTIVE_ITEM)[0];var i = this._getItemIndex(this._activeElement);if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) e(this._element).one(p.SLID, function () {
          return n.to(t);
        });else {
          if (i === t) return this.pause(), void this.cycle();var o = t > i ? u : d;this._slide(o, this._items[t]);
        }
      }, T.dispose = function () {
        e(this._element).off(i), e.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
      }, T._getConfig = function (e) {
        return e = s({}, l, e), a.typeCheckConfig(t, e, c), e;
      }, T._addEventListeners = function () {
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
      }, T._keydown = function (e) {
        if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {case 37:
            e.preventDefault(), this.prev();break;case 39:
            e.preventDefault(), this.next();}
      }, T._getItemIndex = function (t) {
        return this._items = e.makeArray(e(t).parent().find(E.ITEM)), this._items.indexOf(t);
      }, T._getItemByDirection = function (e, t) {
        var n = e === u,
            i = e === d,
            o = this._getItemIndex(t),
            r = this._items.length - 1;if ((i && 0 === o || n && o === r) && !this._config.wrap) return t;var s = (o + (e === d ? -1 : 1)) % this._items.length;return -1 === s ? this._items[this._items.length - 1] : this._items[s];
      }, T._triggerSlideEvent = function (t, n) {
        var i = this._getItemIndex(t),
            o = this._getItemIndex(e(this._element).find(E.ACTIVE_ITEM)[0]),
            r = e.Event(p.SLIDE, { relatedTarget: t, direction: n, from: o, to: i });return e(this._element).trigger(r), r;
      }, T._setActiveIndicatorElement = function (t) {
        if (this._indicatorsElement) {
          e(this._indicatorsElement).find(E.ACTIVE).removeClass(g);var n = this._indicatorsElement.children[this._getItemIndex(t)];n && e(n).addClass(g);
        }
      }, T._slide = function (t, n) {
        var i,
            o,
            r,
            s = this,
            l = e(this._element).find(E.ACTIVE_ITEM)[0],
            c = this._getItemIndex(l),
            d = n || l && this._getItemByDirection(t, l),
            m = this._getItemIndex(d),
            T = Boolean(this._interval);if (t === u ? (i = b, o = w, r = h) : (i = y, o = _, r = f), d && e(d).hasClass(g)) this._isSliding = !1;else if (!this._triggerSlideEvent(d, r).isDefaultPrevented() && l && d) {
          this._isSliding = !0, T && this.pause(), this._setActiveIndicatorElement(d);var C = e.Event(p.SLID, { relatedTarget: d, direction: r, from: c, to: m });if (e(this._element).hasClass(v)) {
            e(d).addClass(o), a.reflow(d), e(l).addClass(i), e(d).addClass(i);var k = a.getTransitionDurationFromElement(l);e(l).one(a.TRANSITION_END, function () {
              e(d).removeClass(i + " " + o).addClass(g), e(l).removeClass(g + " " + o + " " + i), s._isSliding = !1, setTimeout(function () {
                return e(s._element).trigger(C);
              }, 0);
            }).emulateTransitionEnd(k);
          } else e(l).removeClass(g), e(d).addClass(g), this._isSliding = !1, e(this._element).trigger(C);T && this.cycle();
        }
      }, r._jQueryInterface = function (t) {
        return this.each(function () {
          var i = e(this).data(n),
              o = s({}, l, e(this).data());"object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (o = s({}, o, t));var a = "string" == typeof t ? t : o.slide;if (i || (i = new r(this, o), e(this).data(n, i)), "number" == typeof t) i.to(t);else if ("string" == typeof a) {
            if (void 0 === i[a]) throw new TypeError('No method named "' + a + '"');i[a]();
          } else o.interval && (i.pause(), i.cycle());
        });
      }, r._dataApiClickHandler = function (t) {
        var i = a.getSelectorFromElement(this);if (i) {
          var o = e(i)[0];if (o && e(o).hasClass(m)) {
            var l = s({}, e(o).data(), e(this).data()),
                c = this.getAttribute("data-slide-to");c && (l.interval = !1), r._jQueryInterface.call(e(o), l), c && e(o).data(n).to(c), t.preventDefault();
          }
        }
      }, o(r, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return l;
        } }]), r;
    }();return e(document).on(p.CLICK_DATA_API, E.DATA_SLIDE, T._dataApiClickHandler), e(window).on(p.LOAD_DATA_API, function () {
      e(E.DATA_RIDE).each(function () {
        var t = e(this);T._jQueryInterface.call(t, t.data());
      });
    }), e.fn[t] = T._jQueryInterface, e.fn[t].Constructor = T, e.fn[t].noConflict = function () {
      return e.fn[t] = r, T._jQueryInterface;
    }, T;
  }(t),
      d = function (e) {
    var t = "collapse",
        n = "bs.collapse",
        i = e.fn[t],
        r = { toggle: !0, parent: "" },
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
        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));for (var i = e(g.DATA_TOGGLE), o = 0; o < i.length; o++) {
          var r = i[o],
              s = a.getSelectorFromElement(r);null !== s && e(s).filter(t).length > 0 && (this._selector = s, this._triggerArray.push(r));
        }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
      }var v = i.prototype;return v.toggle = function () {
        e(this._element).hasClass(u) ? this.hide() : this.show();
      }, v.show = function () {
        var t,
            o,
            r = this;if (!this._isTransitioning && !e(this._element).hasClass(u) && (this._parent && 0 === (t = e.makeArray(e(this._parent).find(g.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (o = e(t).not(this._selector).data(n)) && o._isTransitioning))) {
          var s = e.Event(c.SHOW);if (e(this._element).trigger(s), !s.isDefaultPrevented()) {
            t && (i._jQueryInterface.call(e(t).not(this._selector), "hide"), o || e(t).data(n, null));var l = this._getDimension();e(this._element).removeClass(d).addClass(h), this._element.style[l] = 0, this._triggerArray.length > 0 && e(this._triggerArray).removeClass(f).attr("aria-expanded", !0), this.setTransitioning(!0);var p = "scroll" + (l[0].toUpperCase() + l.slice(1)),
                m = a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END, function () {
              e(r._element).removeClass(h).addClass(d).addClass(u), r._element.style[l] = "", r.setTransitioning(!1), e(r._element).trigger(c.SHOWN);
            }).emulateTransitionEnd(m), this._element.style[l] = this._element[p] + "px";
          }
        }
      }, v.hide = function () {
        var t = this;if (!this._isTransitioning && e(this._element).hasClass(u)) {
          var n = e.Event(c.HIDE);if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
            var i = this._getDimension();if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", a.reflow(this._element), e(this._element).addClass(h).removeClass(d).removeClass(u), this._triggerArray.length > 0) for (var o = 0; o < this._triggerArray.length; o++) {
              var r = this._triggerArray[o],
                  s = a.getSelectorFromElement(r);if (null !== s) e(s).hasClass(u) || e(r).addClass(f).attr("aria-expanded", !1);
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
        return (e = s({}, r, e)).toggle = Boolean(e.toggle), a.typeCheckConfig(t, e, l), e;
      }, v._getDimension = function () {
        return e(this._element).hasClass(p) ? p : m;
      }, v._getParent = function () {
        var t = this,
            n = null;a.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = e(this._config.parent)[0];var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';return e(n).find(o).each(function (e, n) {
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
          var o = e(this),
              a = o.data(n),
              l = s({}, r, o.data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t);if (!a && l.toggle && /show|hide/.test(t) && (l.toggle = !1), a || (a = new i(this, l), o.data(n, a)), "string" == typeof t) {
            if (void 0 === a[t]) throw new TypeError('No method named "' + t + '"');a[t]();
          }
        });
      }, o(i, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return r;
        } }]), i;
    }();return e(document).on(c.CLICK_DATA_API, g.DATA_TOGGLE, function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();var i = e(this),
          o = a.getSelectorFromElement(this);e(o).each(function () {
        var t = e(this),
            o = t.data(n) ? "toggle" : i.data();v._jQueryInterface.call(t, o);
      });
    }), e.fn[t] = v._jQueryInterface, e.fn[t].Constructor = v, e.fn[t].noConflict = function () {
      return e.fn[t] = i, v._jQueryInterface;
    }, v;
  }(t),
      h = function (e) {
    var t = "dropdown",
        i = "bs.dropdown",
        r = "." + i,
        l = e.fn[t],
        c = new RegExp("38|40|27"),
        u = { HIDE: "hide" + r, HIDDEN: "hidden" + r, SHOW: "show" + r, SHOWN: "shown" + r, CLICK: "click" + r, CLICK_DATA_API: "click.bs.dropdown.data-api", KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api", KEYUP_DATA_API: "keyup.bs.dropdown.data-api" },
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
        _ = ".navbar-nav",
        E = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        T = "top-start",
        C = "top-end",
        k = "bottom-start",
        x = "bottom-end",
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
            var o = { relatedTarget: this._element },
                r = e.Event(u.SHOW, o);if (e(t).trigger(r), !r.isDefaultPrevented()) {
              if (!this._inNavbar) {
                if (void 0 === n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var s = this._element;"parent" === this._config.reference ? s = t : a.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(t).addClass(v), this._popper = new n(s, this._menu, this._getPopperConfig());
              }"ontouchstart" in document.documentElement && 0 === e(t).closest(_).length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(h), e(t).toggleClass(h).trigger(e.Event(u.SHOWN, o));
            }
          }
        }
      }, b.dispose = function () {
        e.removeData(this._element, i), e(this._element).off(r), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
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
            n = k;return t.hasClass(f) ? (n = T, e(this._menu).hasClass(g) && (n = C)) : t.hasClass(p) ? n = S : t.hasClass(m) ? n = A : e(this._menu).hasClass(g) && (n = x), n;
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
        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var n = e.makeArray(e(y)), o = 0; o < n.length; o++) {
          var r = l._getParentFromElement(n[o]),
              s = e(n[o]).data(i),
              a = { relatedTarget: n[o] };if (s) {
            var c = s._menu;if (e(r).hasClass(h) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(r, t.target))) {
              var d = e.Event(u.HIDE, a);e(r).trigger(d), d.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), n[o].setAttribute("aria-expanded", "false"), e(c).removeClass(h), e(r).removeClass(h).trigger(e.Event(u.HIDDEN, a)));
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
            var o = e(n).find(E).get();if (0 !== o.length) {
              var r = o.indexOf(t.target);38 === t.which && r > 0 && r--, 40 === t.which && r < o.length - 1 && r++, r < 0 && (r = 0), o[r].focus();
            }
          } else {
            if (27 === t.which) {
              var s = e(n).find(y)[0];e(s).trigger("focus");
            }e(this).trigger("click");
          }
        }
      }, o(l, null, [{ key: "VERSION", get: function get() {
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
        r = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
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
            this._isShown = !1;var o = e(this._element).hasClass(f);if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(c.FOCUSIN), e(this._element).removeClass(p), e(this._element).off(c.CLICK_DISMISS), e(this._dialog).off(c.MOUSEDOWN_DISMISS), o) {
              var r = a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END, function (e) {
                return n._hideModal(e);
              }).emulateTransitionEnd(r);
            } else this._hideModal();
          }
        }
      }, g.dispose = function () {
        e.removeData(this._element, "bs.modal"), e(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
      }, g.handleUpdate = function () {
        this._adjustDialog();
      }, g._getConfig = function (e) {
        return e = s({}, r, e), a.typeCheckConfig(t, e, l), e;
      }, g._showElement = function (t) {
        var n = this,
            i = e(this._element).hasClass(f);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && a.reflow(this._element), e(this._element).addClass(p), this._config.focus && this._enforceFocus();var o = e.Event(c.SHOWN, { relatedTarget: t }),
            r = function r() {
          n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(o);
        };if (i) {
          var s = a.getTransitionDurationFromElement(this._element);e(this._dialog).one(a.TRANSITION_END, r).emulateTransitionEnd(s);
        } else r();
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
          }), i && a.reflow(this._backdrop), e(this._backdrop).addClass(p), !t) return;if (!i) return void t();var o = a.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(a.TRANSITION_END, t).emulateTransitionEnd(o);
        } else if (!this._isShown && this._backdrop) {
          e(this._backdrop).removeClass(p);var r = function r() {
            n._removeBackdrop(), t && t();
          };if (e(this._element).hasClass(f)) {
            var s = a.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(a.TRANSITION_END, r).emulateTransitionEnd(s);
          } else r();
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
            var o = e(i)[0].style.paddingRight,
                r = e(i).css("padding-right");e(i).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px");
          }), e(m.STICKY_CONTENT).each(function (n, i) {
            var o = e(i)[0].style.marginRight,
                r = e(i).css("margin-right");e(i).data("margin-right", o).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px");
          }), e(m.NAVBAR_TOGGLER).each(function (n, i) {
            var o = e(i)[0].style.marginRight,
                r = e(i).css("margin-right");e(i).data("margin-right", o).css("margin-right", parseFloat(r) + t._scrollbarWidth + "px");
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
          var o = e(this).data("bs.modal"),
              r = s({}, i.Default, e(this).data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t);if (o || (o = new i(this, r), e(this).data("bs.modal", o)), "string" == typeof t) {
            if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');o[t](n);
          } else r.show && o.show(n);
        });
      }, o(i, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return r;
        } }]), i;
    }();return e(document).on(c.CLICK_DATA_API, m.DATA_TOGGLE, function (t) {
      var n,
          i = this,
          o = a.getSelectorFromElement(this);o && (n = e(o)[0]);var r = e(n).data("bs.modal") ? "toggle" : s({}, e(n).data(), e(this).data());"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();var l = e(n).one(c.SHOW, function (t) {
        t.isDefaultPrevented() || l.one(c.HIDDEN, function () {
          e(i).is(":visible") && i.focus();
        });
      });g._jQueryInterface.call(e(n), r, this);
    }), e.fn.modal = g._jQueryInterface, e.fn.modal.Constructor = g, e.fn.modal.noConflict = function () {
      return e.fn.modal = i, g._jQueryInterface;
    }, g;
  }(t),
      p = function (e) {
    var t = "tooltip",
        i = ".bs.tooltip",
        r = e.fn[t],
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
        _ = "click",
        E = "manual",
        T = function () {
      function r(e, t) {
        if (void 0 === n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners();
      }var T = r.prototype;return T.enable = function () {
        this._isEnabled = !0;
      }, T.disable = function () {
        this._isEnabled = !1;
      }, T.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled;
      }, T.toggle = function (t) {
        if (this._isEnabled) if (t) {
          var n = this.constructor.DATA_KEY,
              i = e(t.currentTarget).data(n);i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
        } else {
          if (e(this.getTipElement()).hasClass(g)) return void this._leave(null, this);this._enter(null, this);
        }
      }, T.dispose = function () {
        clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
      }, T.show = function () {
        var t = this;if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");var i = e.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
          e(this.element).trigger(i);var o = e.contains(this.element.ownerDocument.documentElement, this.element);if (i.isDefaultPrevented() || !o) return;var r = this.getTipElement(),
              s = a.getUID(this.constructor.NAME);r.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && e(r).addClass(m);var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
              c = this._getAttachment(l);this.addAttachmentClass(c);var u = !1 === this.config.container ? document.body : e(this.config.container);e(r).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(r).appendTo(u), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, { placement: c, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: y }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function onCreate(e) {
              e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
            }, onUpdate: function onUpdate(e) {
              t._handlePopperPlacementChange(e);
            } }), e(r).addClass(g), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);var d = function d() {
            t.config.animation && t._fixTransition();var n = t._hoverState;t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === f && t._leave(null, t);
          };if (e(this.tip).hasClass(m)) {
            var h = a.getTransitionDurationFromElement(this.tip);e(this.tip).one(a.TRANSITION_END, d).emulateTransitionEnd(h);
          } else d();
        }
      }, T.hide = function (t) {
        var n = this,
            i = this.getTipElement(),
            o = e.Event(this.constructor.Event.HIDE),
            r = function r() {
          n._hoverState !== h && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t();
        };if (e(this.element).trigger(o), !o.isDefaultPrevented()) {
          if (e(i).removeClass(g), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger[_] = !1, this._activeTrigger[w] = !1, this._activeTrigger[b] = !1, e(this.tip).hasClass(m)) {
            var s = a.getTransitionDurationFromElement(i);e(i).one(a.TRANSITION_END, r).emulateTransitionEnd(s);
          } else r();this._hoverState = "";
        }
      }, T.update = function () {
        null !== this._popper && this._popper.scheduleUpdate();
      }, T.isWithContent = function () {
        return Boolean(this.getTitle());
      }, T.addAttachmentClass = function (t) {
        e(this.getTipElement()).addClass("bs-tooltip-" + t);
      }, T.getTipElement = function () {
        return this.tip = this.tip || e(this.config.template)[0], this.tip;
      }, T.setContent = function () {
        var t = e(this.getTipElement());this.setElementContent(t.find(v), this.getTitle()), t.removeClass(m + " " + g);
      }, T.setElementContent = function (t, n) {
        var i = this.config.html;"object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n);
      }, T.getTitle = function () {
        var e = this.element.getAttribute("data-original-title");return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
      }, T._getAttachment = function (e) {
        return u[e.toUpperCase()];
      }, T._setListeners = function () {
        var t = this;this.config.trigger.split(" ").forEach(function (n) {
          if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
            return t.toggle(e);
          });else if (n !== E) {
            var i = n === b ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                o = n === b ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;e(t.element).on(i, t.config.selector, function (e) {
              return t._enter(e);
            }).on(o, t.config.selector, function (e) {
              return t._leave(e);
            });
          }e(t.element).closest(".modal").on("hide.bs.modal", function () {
            return t.hide();
          });
        }), this.config.selector ? this.config = s({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
      }, T._fixTitle = function () {
        var e = _typeof(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
      }, T._enter = function (t, n) {
        var i = this.constructor.DATA_KEY;(n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? w : b] = !0), e(n.getTipElement()).hasClass(g) || n._hoverState === h ? n._hoverState = h : (clearTimeout(n._timeout), n._hoverState = h, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
          n._hoverState === h && n.show();
        }, n.config.delay.show) : n.show());
      }, T._leave = function (t, n) {
        var i = this.constructor.DATA_KEY;(n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? w : b] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
          n._hoverState === f && n.hide();
        }, n.config.delay.hide) : n.hide());
      }, T._isWithActiveTrigger = function () {
        for (var e in this._activeTrigger) {
          if (this._activeTrigger[e]) return !0;
        }return !1;
      }, T._getConfig = function (n) {
        return "number" == typeof (n = s({}, this.constructor.Default, e(this.element).data(), n)).delay && (n.delay = { show: n.delay, hide: n.delay }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), a.typeCheckConfig(t, n, this.constructor.DefaultType), n;
      }, T._getDelegateConfig = function () {
        var e = {};if (this.config) for (var t in this.config) {
          this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
        }return e;
      }, T._cleanTipClass = function () {
        var t = e(this.getTipElement()),
            n = t.attr("class").match(l);null !== n && n.length > 0 && t.removeClass(n.join(""));
      }, T._handlePopperPlacementChange = function (e) {
        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
      }, T._fixTransition = function () {
        var t = this.getTipElement(),
            n = this.config.animation;null === t.getAttribute("x-placement") && (e(t).removeClass(m), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n);
      }, r._jQueryInterface = function (t) {
        return this.each(function () {
          var n = e(this).data("bs.tooltip"),
              i = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t;if ((n || !/dispose|hide/.test(t)) && (n || (n = new r(this, i), e(this).data("bs.tooltip", n)), "string" == typeof t)) {
            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');n[t]();
          }
        });
      }, o(r, null, [{ key: "VERSION", get: function get() {
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
        } }]), r;
    }();return e.fn[t] = T._jQueryInterface, e.fn[t].Constructor = T, e.fn[t].noConflict = function () {
      return e.fn[t] = r, T._jQueryInterface;
    }, T;
  }(t),
      m = function (e) {
    var t = "popover",
        n = ".bs.popover",
        i = e.fn[t],
        r = new RegExp("(^|\\s)bs-popover\\S+", "g"),
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
            n = t.attr("class").match(r);null !== n && n.length > 0 && t.removeClass(n.join(""));
      }, m._jQueryInterface = function (t) {
        return this.each(function () {
          var n = e(this).data("bs.popover"),
              i = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : null;if ((n || !/destroy|hide/.test(t)) && (n || (n = new m(this, i), e(this).data("bs.popover", n)), "string" == typeof t)) {
            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');n[t]();
          }
        });
      }, o(m, null, [{ key: "VERSION", get: function get() {
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
        r = { offset: "number", method: "string", target: "(string|element)" },
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
            o = i === f ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.makeArray(e(this._selector)).map(function (t) {
          var n,
              r = a.getSelectorFromElement(t);if (r && (n = e(r)[0]), n) {
            var s = n.getBoundingClientRect();if (s.width || s.height) return [e(n)[i]().top + o, r];
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
          var o = e(n.target).attr("id");o || (o = a.getUID(t), e(n.target).attr("id", o)), n.target = "#" + o;
        }return a.typeCheckConfig(t, n, r), n;
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
          if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();for (var o = this._offsets.length; o--;) {
            this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o]);
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
      }, o(n, null, [{ key: "VERSION", get: function get() {
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
        r = "active",
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
        var t = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(r) || e(this._element).hasClass(s))) {
          var i,
              o,
              l = e(this._element).closest(d)[0],
              c = a.getSelectorFromElement(this._element);if (l) {
            var u = "UL" === l.nodeName ? f : h;o = (o = e.makeArray(e(l).find(u)))[o.length - 1];
          }var p = e.Event(n.HIDE, { relatedTarget: this._element }),
              m = e.Event(n.SHOW, { relatedTarget: o });if (o && e(o).trigger(p), e(this._element).trigger(m), !m.isDefaultPrevented() && !p.isDefaultPrevented()) {
            c && (i = e(c)[0]), this._activate(this._element, l);var g = function g() {
              var i = e.Event(n.HIDDEN, { relatedTarget: t._element }),
                  r = e.Event(n.SHOWN, { relatedTarget: o });e(o).trigger(i), e(t._element).trigger(r);
            };i ? this._activate(i, i.parentNode, g) : g();
          }
        }
      }, p.dispose = function () {
        e.removeData(this._element, "bs.tab"), this._element = null;
      }, p._activate = function (t, n, i) {
        var o = this,
            r = ("UL" === n.nodeName ? e(n).find(f) : e(n).children(h))[0],
            s = i && r && e(r).hasClass(l),
            c = function c() {
          return o._transitionComplete(t, r, i);
        };if (r && s) {
          var u = a.getTransitionDurationFromElement(r);e(r).one(a.TRANSITION_END, c).emulateTransitionEnd(u);
        } else c();
      }, p._transitionComplete = function (t, n, o) {
        if (n) {
          e(n).removeClass(c + " " + r);var s = e(n.parentNode).find(g)[0];s && e(s).removeClass(r), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
        }if (e(t).addClass(r), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), a.reflow(t), e(t).addClass(c), t.parentNode && e(t.parentNode).hasClass(i)) {
          var l = e(t).closest(u)[0];l && e(l).find(m).addClass(r), t.setAttribute("aria-expanded", !0);
        }o && o();
      }, t._jQueryInterface = function (n) {
        return this.each(function () {
          var i = e(this),
              o = i.data("bs.tab");if (o || (o = new t(this), i.data("bs.tab", o)), "string" == typeof n) {
            if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');o[n]();
          }
        });
      }, o(t, null, [{ key: "VERSION", get: function get() {
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
      o = void 0 === i ? function () {} : function (e) {
    i.error(e);
  };function r(i, r, a) {
    (a = a || t || e.jQuery) && (r.prototype.option || (r.prototype.option = function (e) {
      a.isPlainObject(e) && (this.options = a.extend(!0, this.options, e));
    }), a.fn[i] = function (e) {
      var t;return "string" == typeof e ? function (e, t, n) {
        var r,
            s = "$()." + i + '("' + t + '")';return e.each(function (e, l) {
          var c = a.data(l, i);if (c) {
            var u = c[t];if (u && "_" != t.charAt(0)) {
              var d = u.apply(c, n);r = void 0 === r ? d : r;
            } else o(s + " is not a valid method");
          } else o(i + " not initialized. Cannot call methods, i.e. " + s);
        }), void 0 !== r ? r : e;
      }(this, e, n.call(arguments, 1)) : (t = e, this.each(function (e, n) {
        var o = a.data(n, i);o ? (o.option(t), o._init()) : (o = new r(n, t), a.data(n, i, o));
      }), this);
    }, s(a));
  }function s(e) {
    !e || e && e.bridget || (e.bridget = r);
  }return s(t || e.jQuery), r;
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
      n = n.slice(0), t = t || [];for (var i = this._onceEvents && this._onceEvents[e], o = 0; o < n.length; o++) {
        var r = n[o];i && i[r] && (this.off(e, r), delete i[r]), r.apply(this, t);
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
      i = n.length;function o(e) {
    var n = getComputedStyle(e);return n || t("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), n;
  }var r,
      s = !1;function a(t) {
    if (function () {
      if (!s) {
        s = !0;var t = document.createElement("div");t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";var n = document.body || document.documentElement;n.appendChild(t);var i = o(t);a.isBoxSizeOuter = r = 200 == e(i.width), n.removeChild(t);
      }
    }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t.nodeType) {
      var l = o(t);if ("none" == l.display) return function () {
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
          _ = u && r,
          E = e(l.width);!1 !== E && (c.width = E + (_ ? 0 : m + b));var T = e(l.height);return !1 !== T && (c.height = T + (_ ? 0 : g + w)), c.innerWidth = c.width - (m + b), c.innerHeight = c.height - (g + w), c.outerWidth = c.width + v, c.outerHeight = c.height + y, c;
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
    var o = [];return (e = n.makeArray(e)).forEach(function (e) {
      if (e instanceof HTMLElement) if (i) {
        t(e, i) && o.push(e);for (var n = e.querySelectorAll(i), r = 0; r < n.length; r++) {
          o.push(n[r]);
        }
      } else o.push(e);
    }), o;
  }, n.debounceMethod = function (e, t, n) {
    n = n || 100;var i = e.prototype[t],
        o = t + "Timeout";e.prototype[t] = function () {
      var e = this[o];clearTimeout(e);var t = arguments,
          r = this;this[o] = setTimeout(function () {
        i.apply(r, t), delete r[o];
      }, n);
    };
  }, n.docReady = function (e) {
    var t = document.readyState;"complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e);
  }, n.toDashed = function (e) {
    return e.replace(/(.)([A-Z])/g, function (e, t, n) {
      return t + "-" + n;
    }).toLowerCase();
  };var o = e.console;return n.htmlInit = function (t, i) {
    n.docReady(function () {
      var r = n.toDashed(i),
          s = "data-" + r,
          a = document.querySelectorAll("[" + s + "]"),
          l = document.querySelectorAll(".js-" + r),
          c = n.makeArray(a).concat(n.makeArray(l)),
          u = s + "-options",
          d = e.jQuery;c.forEach(function (e) {
        var n,
            r = e.getAttribute(s) || e.getAttribute(u);try {
          n = r && JSON.parse(r);
        } catch (t) {
          return void (o && o.error("Error parsing " + s + " on " + e.className + ": " + t));
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
        var o = -this.x - i.target,
            r = o / this.slidesWidth;this.dispatchEvent("scroll", null, [r, o]);
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
        var o = e[i],
            r = t > 0 ? n : 0;o.wrapShift(r), t -= o.size.outerWidth;
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
  if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function (n, i, o, r, s, a) {
    return t(e, n, i, o, r, s, a);
  });else if ("object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports) module.exports = t(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));else {
    var n = e.Flickity;e.Flickity = t(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, n.Cell, n.Slide, n.animatePrototype);
  }
}(window, function (e, t, n, i, o, r, s) {
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
        var o = h[this.element.flickityGUID];return o.option(t), o;
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
      return new o(e, this);
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
    }for (var i = this.cells.length, o = e; o < i; o++) {
      var r = this.cells[o];r.setPosition(t), t += r.size.outerWidth, this.maxCellHeight = Math.max(r.size.outerHeight, this.maxCellHeight);
    }this.slideableWidth = t, this.updateSlides(), this._containSlides(), this.slidesWidth = i ? this.getLastSlide().target - this.slides[0].target : 0;
  }, p._sizeCells = function (e) {
    e.forEach(function (e) {
      e.getSize();
    });
  }, p.updateSlides = function () {
    if (this.slides = [], this.cells.length) {
      var e = new r(this);this.slides.push(e);var t = "left" == this.originSide ? "marginRight" : "marginLeft",
          n = this._getCanCellFit();this.cells.forEach(function (i, o) {
        if (e.cells.length) {
          var s = e.outerWidth - e.firstMargin + (i.size.outerWidth - i.size[t]);n.call(this, o, s) ? e.addCell(i) : (e.updateTarget(), e = new r(this), this.slides.push(e), e.addCell(i));
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
      var o = this.cells[t];if (!o) break;i.push(o), t += n, e -= o.size.outerWidth;
    }return i;
  }, p._containSlides = function () {
    if (this.options.contain && !this.options.wrapAround && this.cells.length) {
      var e = this.options.rightToLeft,
          t = e ? "marginRight" : "marginLeft",
          n = e ? "marginLeft" : "marginRight",
          i = this.slideableWidth - this.getLastCell().size[n],
          o = i < this.size.innerWidth,
          r = this.cursorPosition + this.cells[0].size[t],
          s = i - this.size.innerWidth * (1 - this.cellAlign);this.slides.forEach(function (e) {
        o ? e.target = i * this.cellAlign : (e.target = Math.max(e.target, r), e.target = Math.min(e.target, s));
      }, this);
    }
  }, p.dispatchEvent = function (e, t, n) {
    var i = t ? [t].concat(n) : n;if (this.emitEvent(e, i), a && this.$element) {
      var o = e += this.options.namespaceJQueryEvents ? ".flickity" : "";if (t) {
        var r = a.Event(t);r.type = e, o = r;
      }this.$element.trigger(o, n);
    }
  }, p.select = function (e, t, n) {
    if (this.isActive && (e = parseInt(e, 10), this._wrapSelect(e), (this.options.wrapAround || t) && (e = i.modulo(e, this.slides.length)), this.slides[e])) {
      var o = this.selectedIndex;this.selectedIndex = e, this.updateSelectedSlide(), n ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [e]), e != o && this.dispatchEvent("change", null, [e]), this.dispatchEvent("cellSelect");
    }
  }, p._wrapSelect = function (e) {
    var t = this.slides.length;if (!(this.options.wrapAround && t > 1)) return e;var n = i.modulo(e, t),
        o = Math.abs(n - this.selectedIndex),
        r = Math.abs(n + t - this.selectedIndex),
        s = Math.abs(n - t - this.selectedIndex);!this.isDragSelect && r < o ? e += t : !this.isDragSelect && s < o && (e -= t), e < 0 ? this.x -= this.slideableWidth : e >= t && (this.x += this.slideableWidth);
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
      var o = this.getCellSlideIndex(i);this.select(o, t, n);
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
    if (!e) return this.selectedSlide.getCellElements();t = void 0 === t ? this.selectedIndex : t;var n = this.slides.length;if (1 + 2 * e >= n) return this.getCellElements();for (var o = [], r = t - e; r <= t + e; r++) {
      var s = this.options.wrapAround ? i.modulo(r, n) : r,
          a = this.slides[s];a && (o = o.concat(a.getCellElements()));
    }return o;
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
  }, f.Cell = o, f;
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
        o = "mousedown";e.PointerEvent ? o = "pointerdown" : "ontouchstart" in e && (o = "touchstart"), t[i](o, this);
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
  };var o = { mousedown: ["mousemove", "mouseup"], touchstart: ["touchmove", "touchend", "touchcancel"], pointerdown: ["pointermove", "pointerup", "pointercancel"] };return i._bindPostStartEvents = function (t) {
    if (t) {
      var n = o[t.type];n.forEach(function (t) {
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
    for (var n = (t = void 0 === t || t) ? "addEventListener" : "removeEventListener", i = t ? this._touchActionValue : "", o = 0; o < this.handles.length; o++) {
      var r = this.handles[o];this._bindStartEvent(r, t), r[n]("click", this), e.PointerEvent && (r.style.touchAction = i);
    }
  }, i._touchActionValue = "none", i.pointerDown = function (e, t) {
    this.okayPointerDown(e) && (this.pointerDownPointer = t, e.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t]));
  };var o = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 },
      r = { radio: !0, checkbox: !0, button: !0, submit: !0, image: !0, file: !0 };return i.okayPointerDown = function (e) {
    var t = o[e.target.nodeName],
        n = r[e.target.type],
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
  "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function (n, i, o) {
    return t(e, n, i, o);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : e.Flickity = t(e, e.Flickity, e.Unidragger, e.fizzyUIUtils);
}(window, function (e, t, n, i) {
  i.extend(t.defaults, { draggable: ">1", dragThreshold: 3 }), t.createMethods.push("_createDrag");var o = t.prototype;i.extend(o, n.prototype), o._touchActionValue = "pan-y";var r = "createTouch" in document,
      s = !1;o._createDrag = function () {
    this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("childUIPointerDown", this._childUIPointerDownDrag), this.on("deactivate", this.unbindDrag), this.on("cellChange", this.updateDraggable), r && !s && (e.addEventListener("touchmove", function () {}), s = !0);
  }, o.onActivateDrag = function () {
    this.handles = [this.viewport], this.bindHandles(), this.updateDraggable();
  }, o.onDeactivateDrag = function () {
    this.unbindHandles(), this.element.classList.remove("is-draggable");
  }, o.updateDraggable = function () {
    ">1" == this.options.draggable ? this.isDraggable = this.slides.length > 1 : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable");
  }, o.bindDrag = function () {
    this.options.draggable = !0, this.updateDraggable();
  }, o.unbindDrag = function () {
    this.options.draggable = !1, this.updateDraggable();
  }, o._uiChangeDrag = function () {
    delete this.isFreeScrolling;
  }, o._childUIPointerDownDrag = function (e) {
    e.preventDefault(), this.pointerDownFocus(e);
  }, o.pointerDown = function (t, n) {
    this.isDraggable ? this.okayPointerDown(t) && (this._pointerDownPreventDefault(t), this.pointerDownFocus(t), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = l(), e.addEventListener("scroll", this), this._pointerDownDefault(t, n)) : this._pointerDownDefault(t, n);
  }, o._pointerDownDefault = function (e, t) {
    this.pointerDownPointer = t, this._bindPostStartEvents(e), this.dispatchEvent("pointerDown", e, [t]);
  };var a = { INPUT: !0, TEXTAREA: !0, SELECT: !0 };function l() {
    return { x: e.pageXOffset, y: e.pageYOffset };
  }return o.pointerDownFocus = function (e) {
    a[e.target.nodeName] || this.focus();
  }, o._pointerDownPreventDefault = function (e) {
    var t = "touchstart" == e.type,
        n = "touch" == e.pointerType,
        i = a[e.target.nodeName];t || n || i || e.preventDefault();
  }, o.hasDragStarted = function (e) {
    return Math.abs(e.x) > this.options.dragThreshold;
  }, o.pointerUp = function (e, t) {
    delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", e, [t]), this._dragPointerUp(e, t);
  }, o.pointerDone = function () {
    e.removeEventListener("scroll", this), delete this.pointerDownScroll;
  }, o.dragStart = function (t, n) {
    this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), e.removeEventListener("scroll", this), this.dispatchEvent("dragStart", t, [n]));
  }, o.pointerMove = function (e, t) {
    var n = this._dragPointerMove(e, t);this.dispatchEvent("pointerMove", e, [t, n]), this._dragMove(e, t, n);
  }, o.dragMove = function (e, t, n) {
    if (this.isDraggable) {
      e.preventDefault(), this.previousDragX = this.dragX;var i = this.options.rightToLeft ? -1 : 1;this.options.wrapAround && (n.x = n.x % this.slideableWidth);var o = this.dragStartPosition + n.x * i;if (!this.options.wrapAround && this.slides.length) {
        var r = Math.max(-this.slides[0].target, this.dragStartPosition);o = o > r ? .5 * (o + r) : o;var s = Math.min(-this.getLastSlide().target, this.dragStartPosition);o = o < s ? .5 * (o + s) : o;
      }this.dragX = o, this.dragMoveTime = new Date(), this.dispatchEvent("dragMove", e, [t, n]);
    }
  }, o.dragEnd = function (e, t) {
    if (this.isDraggable) {
      this.options.freeScroll && (this.isFreeScrolling = !0);var n = this.dragEndRestingSelect();if (this.options.freeScroll && !this.options.wrapAround) {
        var i = this.getRestingPosition();this.isFreeScrolling = -i > this.slides[0].target && -i < this.getLastSlide().target;
      } else this.options.freeScroll || n != this.selectedIndex || (n += this.dragEndBoostSelect());delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(n), delete this.isDragSelect, this.dispatchEvent("dragEnd", e, [t]);
    }
  }, o.dragEndRestingSelect = function () {
    var e = this.getRestingPosition(),
        t = Math.abs(this.getSlideDistance(-e, this.selectedIndex)),
        n = this._getClosestResting(e, t, 1),
        i = this._getClosestResting(e, t, -1);return n.distance < i.distance ? n.index : i.index;
  }, o._getClosestResting = function (e, t, n) {
    for (var i = this.selectedIndex, o = 1 / 0, r = this.options.contain && !this.options.wrapAround ? function (e, t) {
      return e <= t;
    } : function (e, t) {
      return e < t;
    }; r(t, o) && (i += n, o = t, null !== (t = this.getSlideDistance(-e, i)));) {
      t = Math.abs(t);
    }return { distance: o, index: i - n };
  }, o.getSlideDistance = function (e, t) {
    var n = this.slides.length,
        o = this.options.wrapAround && n > 1,
        r = o ? i.modulo(t, n) : t,
        s = this.slides[r];if (!s) return null;var a = o ? this.slideableWidth * Math.floor(t / n) : 0;return e - (s.target + a);
  }, o.dragEndBoostSelect = function () {
    if (void 0 === this.previousDragX || !this.dragMoveTime || new Date() - this.dragMoveTime > 100) return 0;var e = this.getSlideDistance(-this.dragX, this.selectedIndex),
        t = this.previousDragX - this.dragX;return e > 0 && t > 0 ? 1 : e < 0 && t < 0 ? -1 : 0;
  }, o.staticClick = function (e, t) {
    var n = this.getParentCell(e.target),
        i = n && n.element,
        o = n && this.cells.indexOf(n);this.dispatchEvent("staticClick", e, [t, i, o]);
  }, o.onscroll = function () {
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
      var o = t.getPointerPoint(i),
          r = this.tapElement.getBoundingClientRect(),
          s = e.pageXOffset,
          a = e.pageYOffset;if (o.x >= r.left + s && o.x <= r.right + s && o.y >= r.top + a && o.y <= r.bottom + a && this.emitEvent("tap", [n, i]), "mouseup" != n.type) {
        this.isIgnoringMouseUp = !0;var l = this;setTimeout(function () {
          delete l.isIgnoringMouseUp;
        }, 400);
      }
    }
  }, i.destroy = function () {
    this.pointerDone(), this.unbindTap();
  }, n;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function (n, i, o) {
    return t(e, n, i, o);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : t(e, e.Flickity, e.TapListener, e.fizzyUIUtils);
}(window, function (e, t, n, i) {
  "use strict";
  var o = "http://www.w3.org/2000/svg";function r(e, t) {
    this.direction = e, this.parent = t, this._create();
  }r.prototype = Object.create(n.prototype), r.prototype._create = function () {
    this.isEnabled = !0, this.isPrevious = -1 == this.direction;var e = this.parent.options.rightToLeft ? 1 : -1;this.isLeft = this.direction == e;var t = this.element = document.createElement("button");t.className = "flickity-button flickity-prev-next-button", t.className += this.isPrevious ? " previous" : " next", t.setAttribute("type", "button"), this.disable(), t.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");var n = this.createSVG();t.appendChild(n), this.on("tap", this.onTap), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
  }, r.prototype.activate = function () {
    this.bindTap(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element);
  }, r.prototype.deactivate = function () {
    this.parent.element.removeChild(this.element), n.prototype.destroy.call(this), this.element.removeEventListener("click", this);
  }, r.prototype.createSVG = function () {
    var e = document.createElementNS(o, "svg");e.setAttribute("class", "flickity-button-icon"), e.setAttribute("viewBox", "0 0 100 100");var t = document.createElementNS(o, "path"),
        n = function (e) {
      if ("string" == typeof e) return e;return "M " + e.x0 + ",50 L " + e.x1 + "," + (e.y1 + 50) + " L " + e.x2 + "," + (e.y2 + 50) + " L " + e.x3 + ",50  L " + e.x2 + "," + (50 - e.y2) + " L " + e.x1 + "," + (50 - e.y1) + " Z";
    }(this.parent.options.arrowShape);return t.setAttribute("d", n), t.setAttribute("class", "arrow"), this.isLeft || t.setAttribute("transform", "translate(100, 100) rotate(180) "), e.appendChild(t), e;
  }, r.prototype.onTap = function () {
    if (this.isEnabled) {
      this.parent.uiChange();var e = this.isPrevious ? "previous" : "next";this.parent[e]();
    }
  }, r.prototype.handleEvent = i.handleEvent, r.prototype.onclick = function (e) {
    var t = document.activeElement;t && t == this.element && this.onTap(e, e);
  }, r.prototype.enable = function () {
    this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0);
  }, r.prototype.disable = function () {
    this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1);
  }, r.prototype.update = function () {
    var e = this.parent.slides;if (this.parent.options.wrapAround && e.length > 1) this.enable();else {
      var t = e.length ? e.length - 1 : 0,
          n = this.isPrevious ? 0 : t;this[this.parent.selectedIndex == n ? "disable" : "enable"]();
    }
  }, r.prototype.destroy = function () {
    this.deactivate();
  }, i.extend(t.defaults, { prevNextButtons: !0, arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 } }), t.createMethods.push("_createPrevNextButtons");var s = t.prototype;return s._createPrevNextButtons = function () {
    this.options.prevNextButtons && (this.prevButton = new r(-1, this), this.nextButton = new r(1, this), this.on("activate", this.activatePrevNextButtons));
  }, s.activatePrevNextButtons = function () {
    this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons);
  }, s.deactivatePrevNextButtons = function () {
    this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons);
  }, t.PrevNextButton = r, t;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function (n, i, o) {
    return t(e, n, i, o);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : t(e, e.Flickity, e.TapListener, e.fizzyUIUtils);
}(window, function (e, t, n, i) {
  function o(e) {
    this.parent = e, this._create();
  }o.prototype = new n(), o.prototype._create = function () {
    this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.on("tap", this.onTap), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
  }, o.prototype.activate = function () {
    this.setDots(), this.bindTap(this.holder), this.parent.element.appendChild(this.holder);
  }, o.prototype.deactivate = function () {
    this.parent.element.removeChild(this.holder), n.prototype.destroy.call(this);
  }, o.prototype.setDots = function () {
    var e = this.parent.slides.length - this.dots.length;e > 0 ? this.addDots(e) : e < 0 && this.removeDots(-e);
  }, o.prototype.addDots = function (e) {
    for (var t = document.createDocumentFragment(), n = [], i = this.dots.length, o = i + e, r = i; r < o; r++) {
      var s = document.createElement("li");s.className = "dot", s.setAttribute("aria-label", "Page dot " + (r + 1)), t.appendChild(s), n.push(s);
    }this.holder.appendChild(t), this.dots = this.dots.concat(n);
  }, o.prototype.removeDots = function (e) {
    this.dots.splice(this.dots.length - e, e).forEach(function (e) {
      this.holder.removeChild(e);
    }, this);
  }, o.prototype.updateSelected = function () {
    this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"));
  }, o.prototype.onTap = function (e) {
    var t = e.target;if ("LI" == t.nodeName) {
      this.parent.uiChange();var n = this.dots.indexOf(t);this.parent.select(n);
    }
  }, o.prototype.destroy = function () {
    this.deactivate();
  }, t.PageDots = o, i.extend(t.defaults, { pageDots: !0 }), t.createMethods.push("_createPageDots");var r = t.prototype;return r._createPageDots = function () {
    this.options.pageDots && (this.pageDots = new o(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots));
  }, r.activatePageDots = function () {
    this.pageDots.activate();
  }, r.updateSelectedPageDots = function () {
    this.pageDots.updateSelected();
  }, r.updatePageDots = function () {
    this.pageDots.setDots();
  }, r.deactivatePageDots = function () {
    this.pageDots.deactivate();
  }, t.PageDots = o, t;
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
  }, t.extend(n.defaults, { pauseAutoPlayOnHover: !0 }), n.createMethods.push("_createPlayer");var o = n.prototype;return o._createPlayer = function () {
    this.player = new i(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer);
  }, o.activatePlayer = function () {
    this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this));
  }, o.playPlayer = function () {
    this.player.play();
  }, o.stopPlayer = function () {
    this.player.stop();
  }, o.pausePlayer = function () {
    this.player.pause();
  }, o.unpausePlayer = function () {
    this.player.unpause();
  }, o.deactivatePlayer = function () {
    this.player.stop(), this.element.removeEventListener("mouseenter", this);
  }, o.onmouseenter = function () {
    this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this));
  }, o.onmouseleave = function () {
    this.player.unpause(), this.element.removeEventListener("mouseleave", this);
  }, n.Player = i, n;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function (n, i) {
    return t(e, n, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("./flickity"), require("fizzy-ui-utils")) : t(e, e.Flickity, e.fizzyUIUtils);
}(window, function (e, t, n) {
  var i = t.prototype;return i.insert = function (e, t) {
    var n = this._makeCells(e);if (n && n.length) {
      var i = this.cells.length;t = void 0 === t ? i : t;var o = function (e) {
        var t = document.createDocumentFragment();return e.forEach(function (e) {
          t.appendChild(e.element);
        }), t;
      }(n),
          r = t == i;if (r) this.slider.appendChild(o);else {
        var s = this.cells[t].element;this.slider.insertBefore(o, s);
      }if (0 === t) this.cells = n.concat(this.cells);else if (r) this.cells = this.cells.concat(n);else {
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
  t.createMethods.push("_createLazyload");var i = t.prototype;function o(e, t) {
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
                o = e.getAttribute("data-flickity-lazyload-srcset");if (t || i || o) return [e];
          }var r = e.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");return n.makeArray(r);
        }(e);i = i.concat(t);
      }), i.forEach(function (e) {
        new o(e, this);
      }, this);
    }
  }, o.prototype.handleEvent = n.handleEvent, o.prototype.load = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this);var e = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
        t = this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src = e, t && this.img.setAttribute("srcset", t), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset");
  }, o.prototype.onload = function (e) {
    this.complete(e, "flickity-lazyloaded");
  }, o.prototype.onerror = function (e) {
    this.complete(e, "flickity-lazyerror");
  }, o.prototype.complete = function (e, t) {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);var n = this.flickity.getParentCell(this.img),
        i = n && n.element;this.flickity.cellSizeChange(i), this.img.classList.add(t), this.flickity.dispatchEvent("lazyLoad", e, i);
  }, t.LazyLoader = o, t;
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
      this.navCompanion = i;var o = this;this.onNavCompanionSelect = function () {
        o.navCompanionSelect();
      }, i.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0);
    }
  }, n.navCompanionSelect = function (e) {
    if (this.navCompanion) {
      var t,
          n,
          i,
          o = this.navCompanion.selectedCells[0],
          r = this.navCompanion.cells.indexOf(o),
          s = r + this.navCompanion.selectedCells.length - 1,
          a = Math.floor((t = r, n = s, i = this.navCompanion.cellAlign, (n - t) * i + t));if (this.selectCell(a, !1, e), this.removeNavSelectedElements(), !(a >= this.cells.length)) {
        var l = this.cells.slice(r, s + 1);this.navSelectedElements = l.map(function (e) {
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
      i = e.console;function o(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }var r = Array.prototype.slice;function s(e, t, a) {
    if (!(this instanceof s)) return new s(e, t, a);var l,
        c = e;("string" == typeof e && (c = document.querySelectorAll(e)), c) ? (this.elements = (l = c, Array.isArray(l) ? l : "object" == (typeof l === "undefined" ? "undefined" : _typeof(l)) && "number" == typeof l.length ? r.call(l) : [l]), this.options = o({}, this.options), "function" == typeof t ? a = t : o(this.options, t), a && this.on("always", a), this.getImages(), n && (this.jqDeferred = new n.Deferred()), setTimeout(this.check.bind(this))) : i.error("Bad element for imagesLoaded " + (c || e));
  }s.prototype = Object.create(t.prototype), s.prototype.options = {}, s.prototype.getImages = function () {
    this.images = [], this.elements.forEach(this.addElementImages, this);
  }, s.prototype.addElementImages = function (e) {
    "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);var t = e.nodeType;if (t && a[t]) {
      for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
        var o = n[i];this.addImage(o);
      }if ("string" == typeof this.options.background) {
        var r = e.querySelectorAll(this.options.background);for (i = 0; i < r.length; i++) {
          var s = r[i];this.addElementBackgroundImages(s);
        }
      }
    }
  };var a = { 1: !0, 9: !0, 11: !0 };function l(e) {
    this.img = e;
  }function c(e, t) {
    this.url = e, this.element = t, this.img = new Image();
  }return s.prototype.addElementBackgroundImages = function (e) {
    var t = getComputedStyle(e);if (t) for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
      var o = i && i[2];o && this.addBackground(o, e), i = n.exec(t.backgroundImage);
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
          o,
          r = t || {};for (i = 1; i < arguments.length; i++) {
        var s = arguments[i] || {};for (n in s) {
          "object" != _typeof(r[n]) || (o = r[n]) && "undefined" != typeof window && (o === window || o.nodeType) ? r[n] = r[n] || s[n] : r[n] = e(r[n], s[n]);
        }
      }return r;
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
          o = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t;o = e.extend(!0, {}, Headroom.options, o), i || ((i = new Headroom(this, o)).init(), n.data("headroom", i)), "string" == typeof t && (i[t](), "destroy" === t && n.removeData("headroom"));
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
  }return t.defaults = { axis: "xy", duration: 0, limit: !0 }, e.fn.scrollTo = function (o, r, s) {
    "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && (s = r, r = 0), "function" == typeof s && (s = { onAfter: s }), "max" === o && (o = 9e9), s = e.extend({}, t.defaults, s), r = r || s.duration;var a = s.queue && s.axis.length > 1;return a && (r /= 2), s.offset = i(s.offset), s.over = i(s.over), this.each(function () {
      if (null !== o) {
        var l,
            c = n(this),
            u = c ? this.contentWindow || window : this,
            d = e(u),
            h = o,
            f = {};switch (typeof h === "undefined" ? "undefined" : _typeof(h)) {case "number":case "string":
            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(h)) {
              h = i(h);break;
            }h = c ? e(h) : e(h, u);case "object":
            if (0 === h.length) return;(h.is || h.style) && (l = (h = e(h)).offset());}var p = e.isFunction(s.offset) && s.offset(u, h) || s.offset;e.each(s.axis.split(""), function (e, n) {
          var i = "x" === n ? "Left" : "Top",
              o = i.toLowerCase(),
              r = "scroll" + i,
              g = d[r](),
              v = t.max(u, n);if (l) f[r] = l[o] + (c ? 0 : g - d.offset()[o]), s.margin && (f[r] -= parseInt(h.css("margin" + i), 10) || 0, f[r] -= parseInt(h.css("border" + i + "Width"), 10) || 0), f[r] += p[o] || 0, s.over[o] && (f[r] += h["x" === n ? "width" : "height"]() * s.over[o]);else {
            var y = h[o];f[r] = y.slice && "%" === y.slice(-1) ? parseFloat(y) / 100 * v : y;
          }s.limit && /^\d+$/.test(f[r]) && (f[r] = f[r] <= 0 ? 0 : Math.min(f[r], v)), !e && s.axis.length > 1 && (g === f[r] ? f = {} : a && (m(s.onAfterFirst), f = {}));
        }), m(s.onAfter);
      }function m(t) {
        var n = e.extend({}, s, { queue: !0, duration: r, complete: t && function () {
            t.call(u, h, s);
          } });d.animate(f, n);
      }
    });
  }, t.max = function (t, i) {
    var o = "x" === i ? "Width" : "Height",
        r = "scroll" + o;if (!n(t)) return t[r] - e(t)[o.toLowerCase()]();var s = "client" + o,
        a = t.ownerDocument || t.document,
        l = a.documentElement,
        c = a.body;return Math.max(l[r], c[r]) - Math.min(l[s], c[s]);
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
      o,
      r,
      s,
      a = function a() {},
      l = !!window.jQuery,
      c = e(window),
      u = function u(e, n) {
    t.ev.on("mfp" + e + ".mfp", n);
  },
      d = function d(t, n, i, o) {
    var r = document.createElement("div");return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r;
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
      var o;if (!1 === n.isObj) {
        t.items = n.items.toArray(), t.index = 0;var s,
            a = n.items;for (o = 0; o < a.length; o++) {
          if ((s = a[o]).parsed && (s = s.el[0]), s === n.el[0]) {
            t.index = o;break;
          }
        }
      } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;if (!t.isOpen) {
        t.types = [], r = "", n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = i, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = d("bg").on("click.mfp", function () {
          t.close();
        }), t.wrap = d("wrap").attr("tabindex", -1).on("click.mfp", function (e) {
          t._checkIfClose(e.target) && t.close();
        }), t.container = d("container", t.wrap)), t.contentContainer = d("content"), t.st.preloader && (t.preloader = d("preloader", t.container, t.st.tLoading));var l = e.magnificPopup.modules;for (o = 0; o < l.length; o++) {
          var p = l[o];p = p.charAt(0).toUpperCase() + p.slice(1), t["init" + p].call(t);
        }h("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (u("MarkupParse", function (e, t, n, i) {
          n.close_replaceWith = f(i.type);
        }), r += " mfp-close-btn-in") : t.wrap.append(f())), t.st.alignTop && (r += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({ overflow: t.st.overflowY, overflowX: "hidden", overflowY: t.st.overflowY }) : t.wrap.css({ top: c.scrollTop(), position: "absolute" }), (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({ height: i.height(), position: "absolute" }), t.st.enableEscapeKey && i.on("keyup.mfp", function (e) {
          27 === e.keyCode && t.close();
        }), c.on("resize.mfp", function () {
          t.updateSize();
        }), t.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && t.wrap.addClass(r);var m = t.wH = c.height(),
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
        var o = { marginRight: "" };t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "", e("html").css(o);
      }i.off("keyup.mfp focusin.mfp"), t.ev.off(".mfp"), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, h("AfterClose");
    }, updateSize: function updateSize(e) {
      if (t.isIOS) {
        var n = document.documentElement.clientWidth / window.innerWidth,
            i = window.innerHeight * n;t.wrap.css("height", i), t.wH = i;
      } else t.wH = e || c.height();t.fixedContentPos || t.wrap.css("height", t.wH), h("Resize");
    }, updateItemHTML: function updateItemHTML() {
      var n = t.items[t.index];t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));var i = n.type;if (h("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
        var r = !!t.st[i] && t.st[i].markup;h("FirstMarkupParse", r), t.currTemplate[i] = !r || e(r);
      }o && o !== n.type && t.container.removeClass("mfp-" + o + "-holder");var s = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);t.appendContent(s, i), n.preloaded = !0, h("Change", n), o = n.type, t.container.prepend(t.contentContainer), h("AfterChange");
    }, appendContent: function appendContent(e, n) {
      t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[n] ? t.content.find(".mfp-close").length || t.content.append(f()) : t.content = e : t.content = "", h("BeforeAppend"), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content);
    }, parseEl: function parseEl(n) {
      var i,
          o = t.items[n];if (o.tagName ? o = { el: e(o) } : (i = o.type, o = { data: o, src: o.src }), o.el) {
        for (var r = t.types, s = 0; s < r.length; s++) {
          if (o.el.hasClass("mfp-" + r[s])) {
            i = r[s];break;
          }
        }o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"));
      }return o.type = i || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, h("ElementParse", o), t.items[n];
    }, addGroup: function addGroup(e, n) {
      var i = function i(_i) {
        _i.mfpEl = this, t._openClick(_i, e, n);
      };n || (n = {});var o = "click.magnificPopup";n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)));
    }, _openClick: function _openClick(n, i, o) {
      if ((void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick) || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
        var r = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;if (r) if (e.isFunction(r)) {
          if (!r.call(t)) return !0;
        } else if (c.width() < r) return !0;n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o);
      }
    }, updateStatus: function updateStatus(e, i) {
      if (t.preloader) {
        n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);var o = { status: e, text: i };h("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("click", function (e) {
          e.stopImmediatePropagation();
        }), t.container.addClass("mfp-s-" + e), n = e;
      }
    }, _checkIfClose: function _checkIfClose(n) {
      if (!e(n).hasClass("mfp-prevent-close")) {
        var i = t.st.closeOnContentClick,
            o = t.st.closeOnBgClick;if (i && o) return !0;if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;if (n === t.content[0] || e.contains(t.content[0], n)) {
          if (i) return !0;
        } else if (o && e.contains(document, n)) return !0;return !1;
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
      var o;i.data && (n = e.extend(i.data, n)), h("MarkupParse", [t, n, i]), e.each(n, function (n, i) {
        if (void 0 === i || !1 === i) return !0;if ((o = n.split("_")).length > 1) {
          var r = t.find(".mfp-" + o[0]);if (r.length > 0) {
            var s = o[1];"replaceWith" === s ? r[0] !== i[0] && r.replaceWith(i) : "img" === s ? r.is("img") ? r.attr("src", i) : r.replaceWith(e("<img>").attr("src", i).attr("class", r.attr("class"))) : r.attr(o[1], i);
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
        var o,
            r = l ? i.data("magnificPopup") : i[0].magnificPopup,
            s = parseInt(arguments[1], 10) || 0;r.items ? o = r.items[s] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(s)), t._openClick({ mfpEl: o }, i, r);
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
          var o = t.st.inline,
              r = e(n.src);if (r.length) {
            var s = r[0].parentNode;s && s.tagName && (g || (m = o.hiddenClass, g = d(m), m = "mfp-" + m), v = r.after(g).detach().removeClass(m)), t.updateStatus("ready");
          } else t.updateStatus("error", o.tNotFound), r = e("<div>");return n.inlineElement = r, r;
        }return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i;
      } } });var b,
      w = function w() {
    b && e(document.body).removeClass(b);
  },
      _ = function _() {
    w(), t.req && t.req.abort();
  };e.magnificPopup.registerModule("ajax", { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function initAjax() {
        t.types.push("ajax"), b = t.st.ajax.cursor, u("Close.ajax", _), u("BeforeChange.ajax", _);
      }, getAjax: function getAjax(n) {
        b && e(document.body).addClass(b), t.updateStatus("loading");var i = e.extend({ url: n.src, success: function success(i, o, r) {
            var s = { data: i, xhr: r };h("ParseAjax", s), t.appendContent(e(s.data), "ajax"), n.finished = !0, w(), t._setFocus(), setTimeout(function () {
              t.wrap.addClass("mfp-ready");
            }, 16), t.updateStatus("ready"), h("AjaxContentAdded");
          }, error: function error() {
            w(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src));
          } }, t.st.ajax.settings);return t.req = e.ajax(i), "";
      } } });var E;e.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function initImage() {
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
        e.img && (e.hasSize = !0, E && clearInterval(E), e.isCheckingImgSize = !1, h("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1));
      }, findImageSize: function findImageSize(e) {
        var n = 0,
            i = e.img[0],
            o = function o(r) {
          E && clearInterval(E), E = setInterval(function () {
            i.naturalWidth > 0 ? t._onImageHasSize(e) : (n > 200 && clearInterval(E), 3 === ++n ? o(10) : 40 === n ? o(50) : 100 === n && o(500));
          }, r);
        };o(1);
      }, getImage: function getImage(n, i) {
        var o = 0,
            r = function r() {
          n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, h("ImageLoadComplete")) : ++o < 200 ? setTimeout(r, 100) : s());
        },
            s = function s() {
          n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", a.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0);
        },
            a = t.st.image,
            l = i.find(".mfp-img");if (l.length) {
          var c = document.createElement("img");c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = e(c).on("load.mfploader", r).on("error.mfploader", s), c.src = n.src, l.is("img") && (n.img = n.img.clone()), (c = n.img[0]).naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1);
        }return t._parseMarkup(i, { title: function (n) {
            if (n.data && void 0 !== n.data.title) return n.data.title;var i = t.st.image.titleSrc;if (i) {
              if (e.isFunction(i)) return i.call(t, n);if (n.el) return n.el.attr(i) || "";
            }return "";
          }(n), img_replaceWith: n.img }, n), t.resizeImage(), n.hasSize ? (E && clearInterval(E), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", a.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i);
      } } });var T;e.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function opener(e) {
        return e.is("img") ? e : e.find("img");
      } }, proto: { initZoom: function initZoom() {
        var e,
            n = t.st.zoom,
            i = ".zoom";if (n.enabled && t.supportsTransition) {
          var o,
              r,
              s = n.duration,
              a = function a(e) {
            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                i = "all " + n.duration / 1e3 + "s " + n.easing,
                o = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                r = "transition";return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css(o), t;
          },
              l = function l() {
            t.content.css("visibility", "visible");
          };u("BuildControls" + i, function () {
            if (t._allowZoom()) {
              if (clearTimeout(o), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom())) return void l();(r = a(e)).css(t._getOffset()), t.wrap.append(r), o = setTimeout(function () {
                r.css(t._getOffset(!0)), o = setTimeout(function () {
                  l(), setTimeout(function () {
                    r.remove(), e = r = null, h("ZoomAnimationEnded");
                  }, 16);
                }, s);
              }, 16);
            }
          }), u("BeforeClose" + i, function () {
            if (t._allowZoom()) {
              if (clearTimeout(o), t.st.removalDelay = s, !e) {
                if (!(e = t._getItemToZoom())) return;r = a(e);
              }r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function () {
                r.css(t._getOffset());
              }, 16);
            }
          }), u("Close" + i, function () {
            t._allowZoom() && (l(), r && r.remove(), e = null);
          });
        }
      }, _allowZoom: function _allowZoom() {
        return "image" === t.currItem.type;
      }, _getItemToZoom: function _getItemToZoom() {
        return !!t.currItem.hasSize && t.currItem.img;
      }, _getOffset: function _getOffset(n) {
        var i,
            o = (i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
            r = parseInt(i.css("padding-top"), 10),
            s = parseInt(i.css("padding-bottom"), 10);o.top -= e(window).scrollTop() - r;var a = { width: i.width(), height: (l ? i.innerHeight() : i[0].offsetHeight) - s - r };return void 0 === T && (T = void 0 !== document.createElement("p").style.MozTransform), T ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a;
      } } });var C = function C(e) {
    if (t.currTemplate.iframe) {
      var n = t.currTemplate.iframe.find("iframe");n.length && (e || (n[0].src = "//about:blank"), t.isIE8 && n.css("display", e ? "block" : "none"));
    }
  };e.magnificPopup.registerModule("iframe", { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function initIframe() {
        t.types.push("iframe"), u("BeforeChange", function (e, t, n) {
          t !== n && ("iframe" === t ? C() : "iframe" === n && C(!0));
        }), u("Close.iframe", function () {
          C();
        });
      }, getIframe: function getIframe(n, i) {
        var o = n.src,
            r = t.st.iframe;e.each(r.patterns, function () {
          if (o.indexOf(this.index) > -1) return this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1;
        });var s = {};return r.srcAction && (s[r.srcAction] = o), t._parseMarkup(i, s, n), t.updateStatus("ready"), i;
      } } });var k = function k(e) {
    var n = t.items.length;return e > n - 1 ? e - n : e < 0 ? n + e : e;
  },
      x = function x(e, t, n) {
    return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
  };e.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function initGallery() {
        var n = t.st.gallery,
            o = ".mfp-gallery";if (t.direction = !0, !n || !n.enabled) return !1;r += " mfp-gallery", u("Open" + o, function () {
          n.navigateByImgClick && t.wrap.on("click" + o, ".mfp-img", function () {
            if (t.items.length > 1) return t.next(), !1;
          }), i.on("keydown" + o, function (e) {
            37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
          });
        }), u("UpdateStatus" + o, function (e, n) {
          n.text && (n.text = x(n.text, t.currItem.index, t.items.length));
        }), u("MarkupParse" + o, function (e, i, o, r) {
          var s = t.items.length;o.counter = s > 1 ? x(n.tCounter, r.index, s) : "";
        }), u("BuildControls" + o, function () {
          if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
            var i = n.arrowMarkup,
                o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass("mfp-prevent-close"),
                r = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass("mfp-prevent-close");o.click(function () {
              t.prev();
            }), r.click(function () {
              t.next();
            }), t.container.append(o.add(r));
          }
        }), u("Change" + o, function () {
          t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
            t.preloadNearbyImages(), t._preloadTimeout = null;
          }, 16);
        }), u("Close" + o, function () {
          i.off(o), t.wrap.off("click" + o), t.arrowRight = t.arrowLeft = null;
        });
      }, next: function next() {
        t.direction = !0, t.index = k(t.index + 1), t.updateItemHTML();
      }, prev: function prev() {
        t.direction = !1, t.index = k(t.index - 1), t.updateItemHTML();
      }, goTo: function goTo(e) {
        t.direction = e >= t.index, t.index = e, t.updateItemHTML();
      }, preloadNearbyImages: function preloadNearbyImages() {
        var e,
            n = t.st.gallery.preload,
            i = Math.min(n[0], t.items.length),
            o = Math.min(n[1], t.items.length);for (e = 1; e <= (t.direction ? o : i); e++) {
          t._preloadItem(t.index + e);
        }for (e = 1; e <= (t.direction ? i : o); e++) {
          t._preloadItem(t.index - e);
        }
      }, _preloadItem: function _preloadItem(n) {
        if (n = k(n), !t.items[n].preloaded) {
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
  function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function t(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }function n(e, n, i) {
    return n && t(e.prototype, n), i && t(e, i), e;
  }function i(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }function o(e, t) {
    return function (e) {
      if (Array.isArray(e)) return e;
    }(e) || function (e, t) {
      var n = [],
          i = !0,
          o = !1,
          r = void 0;try {
        for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0) {}
      } catch (e) {
        o = !0, r = e;
      } finally {
        try {
          i || null == a.return || a.return();
        } finally {
          if (o) throw r;
        }
      }return n;
    }(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }();
  }function r(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) {
          n[t] = e[t];
        }return n;
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }();
  }var s = function s(e) {
    return null !== e && void 0 !== e ? e.constructor : null;
  },
      a = function a(e, t) {
    return Boolean(e && t && e instanceof t);
  },
      l = function l(e) {
    return null === e || void 0 === e;
  },
      c = function c(e) {
    return s(e) === Object;
  },
      u = function u(e) {
    return s(e) === String;
  },
      d = function d(e) {
    return Array.isArray(e);
  },
      h = function h(e) {
    return a(e, NodeList);
  },
      f = function f(e) {
    return l(e) || (u(e) || d(e) || h(e)) && !e.length || c(e) && !Object.keys(e).length;
  },
      p = { nullOrUndefined: l, object: c, number: function number(e) {
      return s(e) === Number && !Number.isNaN(e);
    }, string: u, boolean: function boolean(e) {
      return s(e) === Boolean;
    }, function: function _function(e) {
      return s(e) === Function;
    }, array: d, weakMap: function weakMap(e) {
      return a(e, WeakMap);
    }, nodeList: h, element: function element(e) {
      return a(e, Element);
    }, textNode: function textNode(e) {
      return s(e) === Text;
    }, event: function event(e) {
      return a(e, Event);
    }, keyboardEvent: function keyboardEvent(e) {
      return a(e, KeyboardEvent);
    }, cue: function cue(e) {
      return a(e, window.TextTrackCue) || a(e, window.VTTCue);
    }, track: function track(e) {
      return a(e, TextTrack) || !l(e) && u(e.kind);
    }, url: function url(e) {
      if (a(e, window.URL)) return !0;var t = e;e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));try {
        return !f(new URL(t).hostname);
      } catch (e) {
        return !1;
      }
    }, empty: f },
      m = function () {
    var e = !1;try {
      var t = Object.defineProperty({}, "passive", { get: function get() {
          return e = !0, null;
        } });window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
    } catch (e) {}return e;
  }();function g(e, t, n) {
    var i = this,
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
        s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];if (e && "addEventListener" in e && !p.empty(t) && p.function(n)) {
      var a = t.split(" "),
          l = s;m && (l = { passive: r, capture: s }), a.forEach(function (t) {
        i && i.eventListeners && o && i.eventListeners.push({ element: e, type: t, callback: n, options: l }), e[o ? "addEventListener" : "removeEventListener"](t, n, l);
      });
    }
  }function v(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];g.call(this, e, t, n, !0, i, o);
  }function y(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];g.call(this, e, t, n, !1, i, o);
  }function b(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];g.call(this, e, t, function r() {
      y(e, t, r, i, o);for (var s = arguments.length, a = new Array(s), l = 0; l < s; l++) {
        a[l] = arguments[l];
      }n.apply(this, a);
    }, !0, i, o);
  }function w(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};if (p.element(e) && !p.empty(t)) {
      var o = new CustomEvent(t, { bubbles: n, detail: Object.assign({}, i, { plyr: this }) });e.dispatchEvent(o);
    }
  }function _(e, t) {
    var n = e.length ? e : [e];Array.from(n).reverse().forEach(function (e, n) {
      var i = n > 0 ? t.cloneNode(!0) : t,
          o = e.parentNode,
          r = e.nextSibling;i.appendChild(e), r ? o.insertBefore(i, r) : o.appendChild(i);
    });
  }function E(e, t) {
    p.element(e) && !p.empty(t) && Object.entries(t).filter(function (e) {
      var t = o(e, 2)[1];return !p.nullOrUndefined(t);
    }).forEach(function (t) {
      var n = o(t, 2),
          i = n[0],
          r = n[1];return e.setAttribute(i, r);
    });
  }function T(e, t, n) {
    var i = document.createElement(e);return p.object(t) && E(i, t), p.string(n) && (i.innerText = n), i;
  }function C(e, t, n, i) {
    p.element(t) && t.appendChild(T(e, n, i));
  }function k(e) {
    p.nodeList(e) || p.array(e) ? Array.from(e).forEach(k) : p.element(e) && p.element(e.parentNode) && e.parentNode.removeChild(e);
  }function x(e) {
    if (p.element(e)) for (var t = e.childNodes.length; t > 0;) {
      e.removeChild(e.lastChild), t -= 1;
    }
  }function S(e, t) {
    return p.element(t) && p.element(t.parentNode) && p.element(e) ? (t.parentNode.replaceChild(e, t), e) : null;
  }function A(e, t) {
    if (!p.string(e) || p.empty(e)) return {};var n = {},
        i = t;return e.split(",").forEach(function (e) {
      var t = e.trim(),
          o = t.replace(".", ""),
          r = t.replace(/[[\]]/g, "").split("="),
          s = r[0],
          a = r.length > 1 ? r[1].replace(/["']/g, "") : "";switch (t.charAt(0)) {case ".":
          p.object(i) && p.string(i.class) && (i.class += " ".concat(o)), n.class = o;break;case "#":
          n.id = t.replace("#", "");break;case "[":
          n[s] = a;}
    }), n;
  }function D(e, t) {
    if (p.element(e)) {
      var n = t;p.boolean(n) || (n = !e.hidden), n ? e.setAttribute("hidden", "") : e.removeAttribute("hidden");
    }
  }function I(e, t, n) {
    if (p.nodeList(e)) return Array.from(e).map(function (e) {
      return I(e, t, n);
    });if (p.element(e)) {
      var i = "toggle";return void 0 !== n && (i = n ? "add" : "remove"), e.classList[i](t), e.classList.contains(t);
    }return !1;
  }function N(e, t) {
    return p.element(e) && e.classList.contains(t);
  }function P(e, t) {
    var n = { Element: Element };return (n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function () {
      return Array.from(document.querySelectorAll(t)).includes(this);
    }).call(e, t);
  }function L(e) {
    return this.elements.container.querySelectorAll(e);
  }function O(e) {
    return this.elements.container.querySelector(e);
  }function M() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];p.element(e) && (e.focus(), t && I(e, this.config.classNames.tabFocus));
  }var j,
      H,
      F,
      q = (j = document.createElement("span"), H = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }, F = Object.keys(H).find(function (e) {
    return void 0 !== j.style[e];
  }), !!p.string(F) && H[F]);function B(e) {
    setTimeout(function () {
      try {
        D(e, !0), e.offsetHeight, D(e, !1);
      } catch (e) {}
    }, 0);
  }var R,
      z = { isIE: !!document.documentMode, isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent), isIPhone: /(iPhone|iPod)/gi.test(navigator.platform), isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform) },
      W = { "audio/ogg": "vorbis", "audio/wav": "1", "video/webm": "vp8, vorbis", "video/mp4": "avc1.42E01E, mp4a.40.2", "video/ogg": "theora" },
      U = { audio: "canPlayType" in document.createElement("audio"), video: "canPlayType" in document.createElement("video"), check: function check(e, t, n) {
      var i = z.isIPhone && n && U.playsinline,
          o = U[e] || "html5" !== t;return { api: o, ui: o && U.rangeInput && ("video" !== e || !z.isIPhone || i) };
    }, pip: !z.isIPhone && p.function(T("video").webkitSetPresentationMode), airplay: p.function(window.WebKitPlaybackTargetAvailabilityEvent), playsinline: "playsInline" in document.createElement("video"), mime: function mime(e) {
      var t,
          n = o(e.split("/"), 1)[0];if (!this.isHTML5 || n !== this.type) return !1;e && e.includes("codecs=") ? t = e : "audio/mpeg" === e ? t = "audio/mpeg;" : e in W && (t = "".concat(e, '; codecs="').concat(W[e], '"'));try {
        return Boolean(t && this.media.canPlayType(t).replace(/no/, ""));
      } catch (e) {
        return !1;
      }
    }, textTracks: "textTracks" in document.createElement("video"), rangeInput: (R = document.createElement("input"), R.type = "range", "range" === R.type), touch: "ontouchstart" in document.documentElement, transitions: !1 !== q, reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches },
      V = { getSources: function getSources() {
      var e = this;return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(function (t) {
        return U.mime.call(e, t.getAttribute("type"));
      }) : [];
    }, getQualityOptions: function getQualityOptions() {
      return V.getSources.call(this).map(function (e) {
        return Number(e.getAttribute("size"));
      }).filter(Boolean);
    }, extend: function extend() {
      if (this.isHTML5) {
        var e = this;Object.defineProperty(e.media, "quality", { get: function get() {
            var t = V.getSources.call(e).find(function (t) {
              return t.getAttribute("src") === e.source;
            });return t && Number(t.getAttribute("size"));
          }, set: function set(t) {
            var n = V.getSources.call(e).find(function (e) {
              return Number(e.getAttribute("size")) === t;
            });if (n) {
              var i = e.media,
                  o = i.currentTime,
                  r = i.paused,
                  s = i.preload,
                  a = i.readyState;e.media.src = n.getAttribute("src"), ("none" !== s || a) && (e.once("loadedmetadata", function () {
                e.currentTime = o, r || e.play();
              }), e.media.load()), w.call(e, e.media, "qualitychange", !1, { quality: t }), e.storage.set({ quality: t });
            }
          } });
      }
    }, cancelRequests: function cancelRequests() {
      this.isHTML5 && (k(V.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
    } };function K(e) {
    return p.array(e) ? e.filter(function (t, n) {
      return e.indexOf(t) === n;
    }) : e;
  }function Y(e, t) {
    return t.split(".").reduce(function (e, t) {
      return e && e[t];
    }, e);
  }function $() {
    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) {
      n[o - 1] = arguments[o];
    }if (!n.length) return e;var r = n.shift();return p.object(r) ? (Object.keys(r).forEach(function (t) {
      p.object(r[t]) ? (Object.keys(e).includes(t) || Object.assign(e, i({}, t, {})), $(e[t], r[t])) : Object.assign(e, i({}, t, r[t]));
    }), $.apply(void 0, [e].concat(n))) : e;
  }function Q(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) {
      n[i - 1] = arguments[i];
    }return p.empty(e) ? e : e.toString().replace(/{(\d+)}/g, function (e, t) {
      return n[t].toString();
    });
  }function G() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), n.toString());
  }function X() {
    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/\w\S*/g, function (e) {
      return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
    });
  }function J() {
    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();return (e = function () {
      var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();return G(e = X(e = G(e = G(e, "-", " "), "_", " ")), " ", "");
    }(e)).charAt(0).toLowerCase() + e.slice(1);
  }function Z(e) {
    var t = document.createElement("div");return t.appendChild(e), t.innerHTML;
  }var ee = function ee() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};if (p.empty(e) || p.empty(t)) return "";var n = Y(t.i18n, e);if (p.empty(n)) return "";var i = { "{seektime}": t.seekTime, "{title}": t.title };return Object.entries(i).forEach(function (e) {
      var t = o(e, 2),
          i = t[0],
          r = t[1];n = G(n, i, r);
    }), n;
  },
      te = function () {
    function t(n) {
      e(this, t), this.enabled = n.config.storage.enabled, this.key = n.config.storage.key;
    }return n(t, [{ key: "get", value: function value(e) {
        if (!t.supported || !this.enabled) return null;var n = window.localStorage.getItem(this.key);if (p.empty(n)) return null;var i = JSON.parse(n);return p.string(e) && e.length ? i[e] : i;
      } }, { key: "set", value: function value(e) {
        if (t.supported && this.enabled && p.object(e)) {
          var n = this.get();p.empty(n) && (n = {}), $(n, e), window.localStorage.setItem(this.key, JSON.stringify(n));
        }
      } }], [{ key: "supported", get: function get() {
        try {
          if (!("localStorage" in window)) return !1;return window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0;
        } catch (e) {
          return !1;
        }
      } }]), t;
  }();function ne(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";return new Promise(function (n, i) {
      try {
        var o = new XMLHttpRequest();if (!("withCredentials" in o)) return;o.addEventListener("load", function () {
          if ("text" === t) try {
            n(JSON.parse(o.responseText));
          } catch (e) {
            n(o.responseText);
          } else n(o.response);
        }), o.addEventListener("error", function () {
          throw new Error(o.status);
        }), o.open("GET", e, !0), o.responseType = t, o.send();
      } catch (e) {
        i(e);
      }
    });
  }function ie(e, t) {
    if (p.string(e)) {
      var n = p.string(t),
          i = function i() {
        return null !== document.getElementById(t);
      },
          o = function o(e, t) {
        e.innerHTML = t, n && i() || document.body.insertAdjacentElement("afterbegin", e);
      };if (!n || !i()) {
        var r = te.supported,
            s = document.createElement("div");if (s.setAttribute("hidden", ""), n && s.setAttribute("id", t), r) {
          var a = window.localStorage.getItem("".concat("cache", "-").concat(t));if (null !== a) {
            var l = JSON.parse(a);o(s, l.content);
          }
        }ne(e).then(function (e) {
          p.empty(e) || (r && window.localStorage.setItem("".concat("cache", "-").concat(t), JSON.stringify({ content: e })), o(s, e));
        }).catch(function () {});
      }
    }
  }var oe = function oe(e) {
    return parseInt(e / 60 / 60 % 60, 10);
  },
      re = function re(e) {
    return parseInt(e / 60 % 60, 10);
  },
      se = function se(e) {
    return parseInt(e % 60, 10);
  };function ae() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];if (!p.number(e)) return ae(null, t, n);var i = function i(e) {
      return "0".concat(e).slice(-2);
    },
        o = oe(e),
        r = re(e),
        s = se(e);return o = t || o > 0 ? "".concat(o, ":") : "", "".concat(n && e > 0 ? "-" : "").concat(o).concat(i(r), ":").concat(i(s));
  }var le = { getIconUrl: function getIconUrl() {
      var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || z.isIE && !window.svg4everybody;return { url: this.config.iconUrl, cors: e };
    }, findElements: function findElements() {
      try {
        return this.elements.controls = O.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = { play: L.call(this, this.config.selectors.buttons.play), pause: O.call(this, this.config.selectors.buttons.pause), restart: O.call(this, this.config.selectors.buttons.restart), rewind: O.call(this, this.config.selectors.buttons.rewind), fastForward: O.call(this, this.config.selectors.buttons.fastForward), mute: O.call(this, this.config.selectors.buttons.mute), pip: O.call(this, this.config.selectors.buttons.pip), airplay: O.call(this, this.config.selectors.buttons.airplay), settings: O.call(this, this.config.selectors.buttons.settings), captions: O.call(this, this.config.selectors.buttons.captions), fullscreen: O.call(this, this.config.selectors.buttons.fullscreen) }, this.elements.progress = O.call(this, this.config.selectors.progress), this.elements.inputs = { seek: O.call(this, this.config.selectors.inputs.seek), volume: O.call(this, this.config.selectors.inputs.volume) }, this.elements.display = { buffer: O.call(this, this.config.selectors.display.buffer), currentTime: O.call(this, this.config.selectors.display.currentTime), duration: O.call(this, this.config.selectors.display.duration) }, p.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0;
      } catch (e) {
        return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1;
      }
    }, createIcon: function createIcon(e, t) {
      var n = le.getIconUrl.call(this),
          i = "".concat(n.cors ? "" : n.url, "#").concat(this.config.iconPrefix),
          o = document.createElementNS("http://www.w3.org/2000/svg", "svg");E(o, $(t, { role: "presentation", focusable: "false" }));var r = document.createElementNS("http://www.w3.org/2000/svg", "use"),
          s = "".concat(i, "-").concat(e);return "href" in r ? r.setAttributeNS("http://www.w3.org/1999/xlink", "href", s) : r.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s), o.appendChild(r), o;
    }, createLabel: function createLabel(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = { pip: "PIP", airplay: "AirPlay" }[e] || ee(e, this.config);return T("span", Object.assign({}, t, { class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ") }), n);
    }, createBadge: function createBadge(e) {
      if (p.empty(e)) return null;var t = T("span", { class: this.config.classNames.menu.value });return t.appendChild(T("span", { class: this.config.classNames.menu.badge }, e)), t;
    }, createButton: function createButton(e, t) {
      var n,
          i,
          o,
          r,
          s = T("button"),
          a = Object.assign({}, t),
          l = J(e),
          c = !1;switch ("type" in a || (a.type = "button"), "class" in a ? a.class.includes(this.config.classNames.control) || (a.class += " ".concat(this.config.classNames.control)) : a.class = this.config.classNames.control, e) {case "play":
          c = !0, n = "play", o = "pause", i = "play", r = "pause";break;case "mute":
          c = !0, n = "mute", o = "unmute", i = "volume", r = "muted";break;case "captions":
          c = !0, n = "enableCaptions", o = "disableCaptions", i = "captions-off", r = "captions-on";break;case "fullscreen":
          c = !0, n = "enterFullscreen", o = "exitFullscreen", i = "enter-fullscreen", r = "exit-fullscreen";break;case "play-large":
          a.class += " ".concat(this.config.classNames.control, "--overlaid"), l = "play", n = "play", i = "play";break;default:
          n = l, i = e;}return c ? (s.appendChild(le.createIcon.call(this, r, { class: "icon--pressed" })), s.appendChild(le.createIcon.call(this, i, { class: "icon--not-pressed" })), s.appendChild(le.createLabel.call(this, o, { class: "label--pressed" })), s.appendChild(le.createLabel.call(this, n, { class: "label--not-pressed" }))) : (s.appendChild(le.createIcon.call(this, i)), s.appendChild(le.createLabel.call(this, n))), $(a, A(this.config.selectors.buttons[l], a)), E(s, a), "play" === l ? (p.array(this.elements.buttons[l]) || (this.elements.buttons[l] = []), this.elements.buttons[l].push(s)) : this.elements.buttons[l] = s, s;
    }, createRange: function createRange(e, t) {
      var n = T("input", $(A(this.config.selectors.inputs[e]), { type: "range", min: 0, max: 100, step: .01, value: 0, autocomplete: "off", role: "slider", "aria-label": ee(e, this.config), "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": 0 }, t));return this.elements.inputs[e] = n, le.updateRangeFill.call(this, n), n;
    }, createProgress: function createProgress(e, t) {
      var n = T("progress", $(A(this.config.selectors.display[e]), { min: 0, max: 100, value: 0, role: "presentation", "aria-hidden": !0 }, t));if ("volume" !== e) {
        n.appendChild(T("span", null, "0"));var i = { played: "played", buffer: "buffered" }[e],
            o = i ? ee(i, this.config) : "";n.innerText = "% ".concat(o.toLowerCase());
      }return this.elements.display[e] = n, n;
    }, createTime: function createTime(e) {
      var t = A(this.config.selectors.display[e]),
          n = T("div", $(t, { class: "".concat(this.config.classNames.display.time, " ").concat(t.class ? t.class : "").trim(), "aria-label": ee(e, this.config) }), "00:00");return this.elements.display[e] = n, n;
    }, bindMenuItemShortcuts: function bindMenuItemShortcuts(e, t) {
      var n = this;v(e, "keydown keyup", function (i) {
        if ([32, 38, 39, 40].includes(i.which) && (i.preventDefault(), i.stopPropagation(), "keydown" !== i.type)) {
          var o,
              r = P(e, '[role="menuitemradio"]');if (!r && [32, 39].includes(i.which)) le.showMenuPanel.call(n, t, !0);else 32 !== i.which && (40 === i.which || r && 39 === i.which ? (o = e.nextElementSibling, p.element(o) || (o = e.parentNode.firstElementChild)) : (o = e.previousElementSibling, p.element(o) || (o = e.parentNode.lastElementChild)), M.call(n, o, !0));
        }
      }, !1), v(e, "keyup", function (e) {
        13 === e.which && le.focusFirstMenuItem.call(n, null, !0);
      });
    }, createMenuItem: function createMenuItem(e) {
      var t = this,
          n = e.value,
          i = e.list,
          o = e.type,
          r = e.title,
          s = e.badge,
          a = void 0 === s ? null : s,
          l = e.checked,
          c = void 0 !== l && l,
          u = A(this.config.selectors.inputs[o]),
          d = T("button", $(u, { type: "button", role: "menuitemradio", class: "".concat(this.config.classNames.control, " ").concat(u.class ? u.class : "").trim(), "aria-checked": c, value: n })),
          h = T("span");h.innerHTML = r, p.element(a) && h.appendChild(a), d.appendChild(h), Object.defineProperty(d, "checked", { enumerable: !0, get: function get() {
          return "true" === d.getAttribute("aria-checked");
        }, set: function set(e) {
          e && Array.from(d.parentNode.children).filter(function (e) {
            return P(e, '[role="menuitemradio"]');
          }).forEach(function (e) {
            return e.setAttribute("aria-checked", "false");
          }), d.setAttribute("aria-checked", e ? "true" : "false");
        } }), this.listeners.bind(d, "click keyup", function (e) {
        if (!p.keyboardEvent(e) || 32 === e.which) {
          switch (e.preventDefault(), e.stopPropagation(), d.checked = !0, o) {case "language":
              t.currentTrack = Number(n);break;case "quality":
              t.quality = n;break;case "speed":
              t.speed = parseFloat(n);}le.showMenuPanel.call(t, "home", p.keyboardEvent(e));
        }
      }, o, !1), le.bindMenuItemShortcuts.call(this, d, o), i.appendChild(d);
    }, formatTime: function formatTime() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];return p.number(e) ? ae(e, oe(this.duration) > 0, t) : e;
    }, updateTimeDisplay: function updateTimeDisplay() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];p.element(e) && p.number(t) && (e.innerText = le.formatTime(t, n));
    }, updateVolume: function updateVolume() {
      this.supported.ui && (p.element(this.elements.inputs.volume) && le.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), p.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume));
    }, setRange: function setRange(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;p.element(e) && (e.value = t, le.updateRangeFill.call(this, e));
    }, updateProgress: function updateProgress(e) {
      var t = this;if (this.supported.ui && p.event(e)) {
        var n,
            i,
            o = 0;if (e) switch (e.type) {case "timeupdate":case "seeking":case "seeked":
            n = this.currentTime, i = this.duration, o = 0 === n || 0 === i || Number.isNaN(n) || Number.isNaN(i) ? 0 : (n / i * 100).toFixed(2), "timeupdate" === e.type && le.setRange.call(this, this.elements.inputs.seek, o);break;case "playing":case "progress":
            !function (e, n) {
              var i = p.number(n) ? n : 0,
                  o = p.element(e) ? e : t.elements.display.buffer;if (p.element(o)) {
                o.value = i;var r = o.getElementsByTagName("span")[0];p.element(r) && (r.childNodes[0].nodeValue = i);
              }
            }(this.elements.display.buffer, 100 * this.buffered);}
      }
    }, updateRangeFill: function updateRangeFill(e) {
      var t = p.event(e) ? e.target : e;if (p.element(t) && "range" === t.getAttribute("type")) {
        if (P(t, this.config.selectors.inputs.seek)) {
          t.setAttribute("aria-valuenow", this.currentTime);var n = le.formatTime(this.currentTime),
              i = le.formatTime(this.duration),
              o = ee("seekLabel", this.config);t.setAttribute("aria-valuetext", o.replace("{currentTime}", n).replace("{duration}", i));
        } else if (P(t, this.config.selectors.inputs.volume)) {
          var r = 100 * t.value;t.setAttribute("aria-valuenow", r), t.setAttribute("aria-valuetext", "".concat(r.toFixed(1), "%"));
        } else t.setAttribute("aria-valuenow", t.value);z.isWebkit && t.style.setProperty("--value", "".concat(t.value / t.max * 100, "%"));
      }
    }, updateSeekTooltip: function updateSeekTooltip(e) {
      var t = this;if (this.config.tooltips.seek && p.element(this.elements.inputs.seek) && p.element(this.elements.display.seekTooltip) && 0 !== this.duration) {
        var n = 0,
            i = this.elements.progress.getBoundingClientRect(),
            o = "".concat(this.config.classNames.tooltip, "--visible"),
            r = function r(e) {
          I(t.elements.display.seekTooltip, o, e);
        };if (this.touch) r(!1);else {
          if (p.event(e)) n = 100 / i.width * (e.pageX - i.left);else {
            if (!N(this.elements.display.seekTooltip, o)) return;n = parseFloat(this.elements.display.seekTooltip.style.left, 10);
          }n < 0 ? n = 0 : n > 100 && (n = 100), le.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * n), this.elements.display.seekTooltip.style.left = "".concat(n, "%"), p.event(e) && ["mouseenter", "mouseleave"].includes(e.type) && r("mouseenter" === e.type);
        }
      }
    }, timeUpdate: function timeUpdate(e) {
      var t = !p.element(this.elements.display.duration) && this.config.invertTime;le.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || le.updateProgress.call(this, e);
    }, durationUpdate: function durationUpdate() {
      if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
        if (this.duration >= Math.pow(2, 32)) return D(this.elements.display.currentTime, !0), void D(this.elements.progress, !0);p.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);var e = p.element(this.elements.display.duration);!e && this.config.displayDuration && this.paused && le.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && le.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), le.updateSeekTooltip.call(this);
      }
    }, toggleMenuButton: function toggleMenuButton(e, t) {
      D(this.elements.settings.buttons[e], !t);
    }, updateSetting: function updateSetting(e, t, n) {
      var i = this.elements.settings.panels[e],
          o = null,
          r = t;if ("captions" === e) o = this.currentTrack;else {
        if (o = p.empty(n) ? this[e] : n, p.empty(o) && (o = this.config[e].default), !p.empty(this.options[e]) && !this.options[e].includes(o)) return void this.debug.warn("Unsupported value of '".concat(o, "' for ").concat(e));if (!this.config[e].options.includes(o)) return void this.debug.warn("Disabled value of '".concat(o, "' for ").concat(e));
      }if (p.element(r) || (r = i && i.querySelector('[role="menu"]')), p.element(r)) {
        this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = le.getLabel.call(this, e, o);var s = r && r.querySelector('[value="'.concat(o, '"]'));p.element(s) && (s.checked = !0);
      }
    }, getLabel: function getLabel(e, t) {
      switch (e) {case "speed":
          return 1 === t ? ee("normal", this.config) : "".concat(t, "&times;");case "quality":
          if (p.number(t)) {
            var n = ee("qualityLabel.".concat(t), this.config);return n.length ? n : "".concat(t, "p");
          }return X(t);case "captions":
          return de.getLabel.call(this);default:
          return null;}
    }, setQualityMenu: function setQualityMenu(e) {
      var t = this;if (p.element(this.elements.settings.panels.quality)) {
        var n = this.elements.settings.panels.quality.querySelector('[role="menu"]');p.array(e) && (this.options.quality = K(e).filter(function (e) {
          return t.config.quality.options.includes(e);
        }));var i = !p.empty(this.options.quality) && this.options.quality.length > 1;if (le.toggleMenuButton.call(this, "quality", i), x(n), le.checkMenu.call(this), i) {
          this.options.quality.sort(function (e, n) {
            var i = t.config.quality.options;return i.indexOf(e) > i.indexOf(n) ? 1 : -1;
          }).forEach(function (e) {
            le.createMenuItem.call(t, { value: e, list: n, type: "quality", title: le.getLabel.call(t, "quality", e), badge: function (e) {
                var n = ee("qualityBadge.".concat(e), t.config);return n.length ? le.createBadge.call(t, n) : null;
              }(e) });
          }), le.updateSetting.call(this, "quality", n);
        }
      }
    }, setCaptionsMenu: function setCaptionsMenu() {
      var e = this;if (p.element(this.elements.settings.panels.captions)) {
        var t = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
            n = de.getTracks.call(this),
            i = Boolean(n.length);if (le.toggleMenuButton.call(this, "captions", i), x(t), le.checkMenu.call(this), i) {
          var o = n.map(function (n, i) {
            return { value: i, checked: e.captions.toggled && e.currentTrack === i, title: de.getLabel.call(e, n), badge: n.language && le.createBadge.call(e, n.language.toUpperCase()), list: t, type: "language" };
          });o.unshift({ value: -1, checked: !this.captions.toggled, title: ee("disabled", this.config), list: t, type: "language" }), o.forEach(le.createMenuItem.bind(this)), le.updateSetting.call(this, "captions", t);
        }
      }
    }, setSpeedMenu: function setSpeedMenu(e) {
      var t = this;if (p.element(this.elements.settings.panels.speed)) {
        var n = this.elements.settings.panels.speed.querySelector('[role="menu"]');p.array(e) ? this.options.speed = e : (this.isHTML5 || this.isVimeo) && (this.options.speed = [.5, .75, 1, 1.25, 1.5, 1.75, 2]), this.options.speed = this.options.speed.filter(function (e) {
          return t.config.speed.options.includes(e);
        });var i = !p.empty(this.options.speed) && this.options.speed.length > 1;le.toggleMenuButton.call(this, "speed", i), x(n), le.checkMenu.call(this), i && (this.options.speed.forEach(function (e) {
          le.createMenuItem.call(t, { value: e, list: n, type: "speed", title: le.getLabel.call(t, "speed", e) });
        }), le.updateSetting.call(this, "speed", n));
      }
    }, checkMenu: function checkMenu() {
      var e = this.elements.settings.buttons,
          t = !p.empty(e) && Object.values(e).some(function (e) {
        return !e.hidden;
      });D(this.elements.settings.menu, !t);
    }, focusFirstMenuItem: function focusFirstMenuItem(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];if (!this.elements.settings.popup.hidden) {
        var n = e;p.element(n) || (n = Object.values(this.elements.settings.panels).find(function (e) {
          return !e.hidden;
        }));var i = n.querySelector('[role^="menuitem"]');M.call(this, i, t);
      }
    }, toggleMenu: function toggleMenu(e) {
      var t = this.elements.settings.popup,
          n = this.elements.buttons.settings;if (p.element(t) && p.element(n)) {
        var i = t.hidden,
            o = i;if (p.boolean(e)) o = e;else if (p.keyboardEvent(e) && 27 === e.which) o = !1;else if (p.event(e)) {
          var r = t.contains(e.target);if (r || !r && e.target !== n && o) return;
        }n.setAttribute("aria-expanded", o), D(t, !o), I(this.elements.container, this.config.classNames.menu.open, o), o && p.keyboardEvent(e) ? le.focusFirstMenuItem.call(this, null, !0) : o || i || M.call(this, n, p.keyboardEvent(e));
      }
    }, getMenuSize: function getMenuSize(e) {
      var t = e.cloneNode(!0);t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);var n = t.scrollWidth,
          i = t.scrollHeight;return k(t), { width: n, height: i };
    }, showMenuPanel: function showMenuPanel() {
      var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          i = document.getElementById("plyr-settings-".concat(this.id, "-").concat(t));if (p.element(i)) {
        var o = i.parentNode,
            r = Array.from(o.children).find(function (e) {
          return !e.hidden;
        });if (U.transitions && !U.reducedMotion) {
          o.style.width = "".concat(r.scrollWidth, "px"), o.style.height = "".concat(r.scrollHeight, "px");var s = le.getMenuSize.call(this, i);v.call(this, o, q, function t(n) {
            n.target === o && ["width", "height"].includes(n.propertyName) && (o.style.width = "", o.style.height = "", y.call(e, o, q, t));
          }), o.style.width = "".concat(s.width, "px"), o.style.height = "".concat(s.height, "px");
        }D(r, !0), D(i, !1), le.focusFirstMenuItem.call(this, i, n);
      }
    }, create: function create(e) {
      var t = this,
          n = T("div", A(this.config.selectors.controls.wrapper));if (this.config.controls.includes("restart") && n.appendChild(le.createButton.call(this, "restart")), this.config.controls.includes("rewind") && n.appendChild(le.createButton.call(this, "rewind")), this.config.controls.includes("play") && n.appendChild(le.createButton.call(this, "play")), this.config.controls.includes("fast-forward") && n.appendChild(le.createButton.call(this, "fast-forward")), this.config.controls.includes("progress")) {
        var i = T("div", A(this.config.selectors.progress));if (i.appendChild(le.createRange.call(this, "seek", { id: "plyr-seek-".concat(e.id) })), i.appendChild(le.createProgress.call(this, "buffer")), this.config.tooltips.seek) {
          var o = T("span", { class: this.config.classNames.tooltip }, "00:00");i.appendChild(o), this.elements.display.seekTooltip = o;
        }this.elements.progress = i, n.appendChild(this.elements.progress);
      }if (this.config.controls.includes("current-time") && n.appendChild(le.createTime.call(this, "currentTime")), this.config.controls.includes("duration") && n.appendChild(le.createTime.call(this, "duration")), this.config.controls.includes("mute") || this.config.controls.includes("volume")) {
        var r = T("div", { class: "plyr__volume" });if (this.config.controls.includes("mute") && r.appendChild(le.createButton.call(this, "mute")), this.config.controls.includes("volume")) {
          var s = { max: 1, step: .05, value: this.config.volume };r.appendChild(le.createRange.call(this, "volume", $(s, { id: "plyr-volume-".concat(e.id) }))), this.elements.volume = r;
        }n.appendChild(r);
      }if (this.config.controls.includes("captions") && n.appendChild(le.createButton.call(this, "captions")), this.config.controls.includes("settings") && !p.empty(this.config.settings)) {
        var a = T("div", { class: "plyr__menu", hidden: "" });a.appendChild(le.createButton.call(this, "settings", { "aria-haspopup": !0, "aria-controls": "plyr-settings-".concat(e.id), "aria-expanded": !1 }));var l = T("div", { class: "plyr__menu__container", id: "plyr-settings-".concat(e.id), hidden: "" }),
            c = T("div"),
            u = T("div", { id: "plyr-settings-".concat(e.id, "-home") }),
            d = T("div", { role: "menu" });u.appendChild(d), c.appendChild(u), this.elements.settings.panels.home = u, this.config.settings.forEach(function (n) {
          var i = T("button", $(A(t.config.selectors.buttons.settings), { type: "button", class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--forward"), role: "menuitem", "aria-haspopup": !0, hidden: "" }));le.bindMenuItemShortcuts.call(t, i, n), v(i, "click", function () {
            le.showMenuPanel.call(t, n, !1);
          });var o = T("span", null, ee(n, t.config)),
              r = T("span", { class: t.config.classNames.menu.value });r.innerHTML = e[n], o.appendChild(r), i.appendChild(o), d.appendChild(i);var s = T("div", { id: "plyr-settings-".concat(e.id, "-").concat(n), hidden: "" }),
              a = T("button", { type: "button", class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--back") });a.appendChild(T("span", { "aria-hidden": !0 }, ee(n, t.config))), a.appendChild(T("span", { class: t.config.classNames.hidden }, ee("menuBack", t.config))), v(s, "keydown", function (e) {
            37 === e.which && (e.preventDefault(), e.stopPropagation(), le.showMenuPanel.call(t, "home", !0));
          }, !1), v(a, "click", function () {
            le.showMenuPanel.call(t, "home", !1);
          }), s.appendChild(a), s.appendChild(T("div", { role: "menu" })), c.appendChild(s), t.elements.settings.buttons[n] = i, t.elements.settings.panels[n] = s;
        }), l.appendChild(c), a.appendChild(l), n.appendChild(a), this.elements.settings.popup = l, this.elements.settings.menu = a;
      }return this.config.controls.includes("pip") && U.pip && n.appendChild(le.createButton.call(this, "pip")), this.config.controls.includes("airplay") && U.airplay && n.appendChild(le.createButton.call(this, "airplay")), this.config.controls.includes("fullscreen") && n.appendChild(le.createButton.call(this, "fullscreen")), this.config.controls.includes("play-large") && this.elements.container.appendChild(le.createButton.call(this, "play-large")), this.elements.controls = n, this.isHTML5 && le.setQualityMenu.call(this, V.getQualityOptions.call(this)), le.setSpeedMenu.call(this), n;
    }, inject: function inject() {
      var e = this;if (this.config.loadSprite) {
        var t = le.getIconUrl.call(this);t.cors && ie(t.url, "sprite-plyr");
      }this.id = Math.floor(1e4 * Math.random());var n = null;this.elements.controls = null;var i = { id: this.id, seektime: this.config.seekTime, title: this.config.title },
          r = !0;p.function(this.config.controls) && (this.config.controls = this.config.controls.call(this.props)), this.config.controls || (this.config.controls = []), p.element(this.config.controls) || p.string(this.config.controls) ? n = this.config.controls : (n = le.create.call(this, { id: this.id, seektime: this.config.seekTime, speed: this.speed, quality: this.quality, captions: de.getLabel.call(this) }), r = !1);var s,
          a = function a(e) {
        var t = e;return Object.entries(i).forEach(function (e) {
          var n = o(e, 2),
              i = n[0],
              r = n[1];t = G(t, "{".concat(i, "}"), r);
        }), t;
      };if (r && (p.string(this.config.controls) ? n = a(n) : p.element(n) && (n.innerHTML = a(n.innerHTML))), p.string(this.config.selectors.controls.container) && (s = document.querySelector(this.config.selectors.controls.container)), p.element(s) || (s = this.elements.container), s[p.element(n) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", n), p.element(this.elements.controls) || le.findElements.call(this), !p.empty(this.elements.buttons)) {
        var l = function l(t) {
          var n = e.config.classNames.controlPressed;Object.defineProperty(t, "pressed", { enumerable: !0, get: function get() {
              return N(t, n);
            }, set: function set() {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];I(t, n, e);
            } });
        };Object.values(this.elements.buttons).filter(Boolean).forEach(function (e) {
          p.array(e) || p.nodeList(e) ? Array.from(e).filter(Boolean).forEach(l) : l(e);
        });
      }if (window.navigator.userAgent.includes("Edge") && B(s), this.config.tooltips.controls) {
        var c = this.config,
            u = c.classNames,
            d = c.selectors,
            h = "".concat(d.controls.wrapper, " ").concat(d.labels, " .").concat(u.hidden),
            f = L.call(this, h);Array.from(f).forEach(function (t) {
          I(t, e.config.classNames.hidden, !1), I(t, e.config.classNames.tooltip, !0);
        });
      }
    } };function ce(e) {
    var t = e;if (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) {
      var n = document.createElement("a");n.href = t, t = n.href;
    }try {
      return new URL(t);
    } catch (e) {
      return null;
    }
  }function ue(e) {
    var t = new URLSearchParams();return p.object(e) && Object.entries(e).forEach(function (e) {
      var n = o(e, 2),
          i = n[0],
          r = n[1];t.set(i, r);
    }), t;
  }var de = { setup: function setup() {
      if (this.supported.ui) if (!this.isVideo || this.isYouTube || this.isHTML5 && !U.textTracks) p.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && le.setCaptionsMenu.call(this);else {
        var e, t;if (p.element(this.elements.captions) || (this.elements.captions = T("div", A(this.config.selectors.captions)), e = this.elements.captions, t = this.elements.wrapper, p.element(e) && p.element(t) && t.parentNode.insertBefore(e, t.nextSibling)), z.isIE && window.URL) {
          var n = this.media.querySelectorAll("track");Array.from(n).forEach(function (e) {
            var t = e.getAttribute("src"),
                n = ce(t);null !== n && n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && ne(t, "blob").then(function (t) {
              e.setAttribute("src", window.URL.createObjectURL(t));
            }).catch(function () {
              k(e);
            });
          });
        }var i = K((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(function (e) {
          return e.split("-")[0];
        })),
            r = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();if ("auto" === r) r = o(i, 1)[0];var s = this.storage.get("captions");if (p.boolean(s) || (s = this.config.captions.active), Object.assign(this.captions, { toggled: !1, active: s, language: r, languages: i }), this.isHTML5) {
          var a = this.config.captions.update ? "addtrack removetrack" : "removetrack";v.call(this, this.media.textTracks, a, de.update.bind(this));
        }setTimeout(de.update.bind(this), 0);
      }
    }, update: function update() {
      var e = this,
          t = de.getTracks.call(this, !0),
          n = this.captions,
          i = n.active,
          o = n.language,
          r = n.meta,
          s = n.currentTrackNode,
          a = Boolean(t.find(function (e) {
        return e.language === o;
      }));this.isHTML5 && this.isVideo && t.filter(function (e) {
        return !r.get(e);
      }).forEach(function (t) {
        e.debug.log("Track added", t), r.set(t, { default: "showing" === t.mode }), t.mode = "hidden", v.call(e, t, "cuechange", function () {
          return de.updateCues.call(e);
        });
      }), (a && this.language !== o || !t.includes(s)) && (de.setLanguage.call(this, o), de.toggle.call(this, i && a)), I(this.elements.container, this.config.classNames.captions.enabled, !p.empty(t)), (this.config.controls || []).includes("settings") && this.config.settings.includes("captions") && le.setCaptionsMenu.call(this);
    }, toggle: function toggle(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];if (this.supported.ui) {
        var n = this.captions.toggled,
            i = this.config.classNames.captions.active,
            o = p.nullOrUndefined(e) ? !n : e;if (o !== n) {
          if (t || (this.captions.active = o, this.storage.set({ captions: o })), !this.language && o && !t) {
            var s = de.getTracks.call(this),
                a = de.findTrack.call(this, [this.captions.language].concat(r(this.captions.languages)), !0);return this.captions.language = a.language, void de.set.call(this, s.indexOf(a));
          }this.elements.buttons.captions && (this.elements.buttons.captions.pressed = o), I(this.elements.container, i, o), this.captions.toggled = o, le.updateSetting.call(this, "captions"), w.call(this, this.media, o ? "captionsenabled" : "captionsdisabled");
        }
      }
    }, set: function set(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          n = de.getTracks.call(this);if (-1 !== e) {
        if (p.number(e)) {
          if (e in n) {
            if (this.captions.currentTrack !== e) {
              this.captions.currentTrack = e;var i = n[e],
                  o = (i || {}).language;this.captions.currentTrackNode = i, le.updateSetting.call(this, "captions"), t || (this.captions.language = o, this.storage.set({ language: o })), this.isVimeo && this.embed.enableTextTrack(o), w.call(this, this.media, "languagechange");
            }de.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && de.updateCues.call(this);
          } else this.debug.warn("Track not found", e);
        } else this.debug.warn("Invalid caption argument", e);
      } else de.toggle.call(this, !1, t);
    }, setLanguage: function setLanguage(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];if (p.string(e)) {
        var n = e.toLowerCase();this.captions.language = n;var i = de.getTracks.call(this),
            o = de.findTrack.call(this, [n]);de.set.call(this, i.indexOf(o), t);
      } else this.debug.warn("Invalid language argument", e);
    }, getTracks: function getTracks() {
      var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];return Array.from((this.media || {}).textTracks || []).filter(function (n) {
        return !e.isHTML5 || t || e.captions.meta.has(n);
      }).filter(function (e) {
        return ["captions", "subtitles"].includes(e.kind);
      });
    }, findTrack: function findTrack(e) {
      var t,
          n = this,
          i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          o = de.getTracks.call(this),
          r = function r(e) {
        return Number((n.captions.meta.get(e) || {}).default);
      },
          s = Array.from(o).sort(function (e, t) {
        return r(t) - r(e);
      });return e.every(function (e) {
        return !(t = s.find(function (t) {
          return t.language === e;
        }));
      }), t || (i ? s[0] : void 0);
    }, getCurrentTrack: function getCurrentTrack() {
      return de.getTracks.call(this)[this.currentTrack];
    }, getLabel: function getLabel(e) {
      var t = e;return !p.track(t) && U.textTracks && this.captions.toggled && (t = de.getCurrentTrack.call(this)), p.track(t) ? p.empty(t.label) ? p.empty(t.language) ? ee("enabled", this.config) : e.language.toUpperCase() : t.label : ee("disabled", this.config);
    }, updateCues: function updateCues(e) {
      if (this.supported.ui) if (p.element(this.elements.captions)) {
        if (p.nullOrUndefined(e) || Array.isArray(e)) {
          var t = e;if (!t) {
            var n = de.getCurrentTrack.call(this);t = Array.from((n || {}).activeCues || []).map(function (e) {
              return e.getCueAsHTML();
            }).map(Z);
          }var i = t.map(function (e) {
            return e.trim();
          }).join("\n");if (i !== this.elements.captions.innerHTML) {
            x(this.elements.captions);var o = T("span", A(this.config.selectors.caption));o.innerHTML = i, this.elements.captions.appendChild(o), w.call(this, this.media, "cuechange");
          }
        } else this.debug.warn("updateCues: Invalid input", e);
      } else this.debug.warn("No captions element to render to");
    } },
      he = { enabled: !0, title: "", debug: !1, autoplay: !1, autopause: !0, playsinline: !0, seekTime: 10, volume: 1, muted: !1, duration: null, displayDuration: !0, invertTime: !0, toggleInvert: !0, ratio: "16:9", clickToPlay: !0, hideControls: !0, resetOnEnd: !1, disableContextMenu: !0, loadSprite: !0, iconPrefix: "plyr", iconUrl: "https://cdn.plyr.io/3.3.12/plyr.svg", blankVideo: "https://cdn.plyr.io/static/blank.mp4", quality: { default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240] }, loop: { active: !1 }, speed: { selected: 1, options: [.5, .75, 1, 1.25, 1.5, 1.75, 2] }, keyboard: { focused: !0, global: !1 }, tooltips: { controls: !1, seek: !0 }, captions: { active: !1, language: "auto", update: !1 }, fullscreen: { enabled: !0, fallback: !0, iosNative: !1 }, storage: { enabled: !0, key: "plyr" }, controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"], settings: ["captions", "quality", "speed"], i18n: { restart: "Restart", rewind: "Rewind {seektime}s", play: "Play", pause: "Pause", fastForward: "Forward {seektime}s", seek: "Seek", seekLabel: "{currentTime} of {duration}", played: "Played", buffered: "Buffered", currentTime: "Current time", duration: "Duration", volume: "Volume", mute: "Mute", unmute: "Unmute", enableCaptions: "Enable captions", disableCaptions: "Disable captions", enterFullscreen: "Enter fullscreen", exitFullscreen: "Exit fullscreen", frameTitle: "Player for {title}", captions: "Captions", settings: "Settings", menuBack: "Go back to previous menu", speed: "Speed", normal: "Normal", quality: "Quality", loop: "Loop", start: "Start", end: "End", all: "All", reset: "Reset", disabled: "Disabled", enabled: "Enabled", advertisement: "Ad", qualityBadge: { 2160: "4K", 1440: "HD", 1080: "HD", 720: "HD", 576: "SD", 480: "SD" } }, urls: { vimeo: { sdk: "https://player.vimeo.com/api/player.js", iframe: "https://player.vimeo.com/video/{0}?{1}", api: "https://vimeo.com/api/v2/video/{0}.json" }, youtube: { sdk: "https://www.youtube.com/iframe_api", api: "https://www.googleapis.com/youtube/v3/videos?id={0}&key={1}&fields=items(snippet(title))&part=snippet" }, googleIMA: { sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js" } }, listeners: { seek: null, play: null, pause: null, restart: null, rewind: null, fastForward: null, mute: null, volume: null, captions: null, fullscreen: null, pip: null, airplay: null, speed: null, quality: null, loop: null, language: null }, events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"], selectors: { editable: "input, textarea, select, [contenteditable]", container: ".plyr", controls: { container: null, wrapper: ".plyr__controls" }, labels: "[data-plyr]", buttons: { play: '[data-plyr="play"]', pause: '[data-plyr="pause"]', restart: '[data-plyr="restart"]', rewind: '[data-plyr="rewind"]', fastForward: '[data-plyr="fast-forward"]', mute: '[data-plyr="mute"]', captions: '[data-plyr="captions"]', fullscreen: '[data-plyr="fullscreen"]', pip: '[data-plyr="pip"]', airplay: '[data-plyr="airplay"]', settings: '[data-plyr="settings"]', loop: '[data-plyr="loop"]' }, inputs: { seek: '[data-plyr="seek"]', volume: '[data-plyr="volume"]', speed: '[data-plyr="speed"]', language: '[data-plyr="language"]', quality: '[data-plyr="quality"]' }, display: { currentTime: ".plyr__time--current", duration: ".plyr__time--duration", buffer: ".plyr__progress__buffer", loop: ".plyr__progress__loop", volume: ".plyr__volume--display" }, progress: ".plyr__progress", captions: ".plyr__captions", caption: ".plyr__caption", menu: { quality: ".js-plyr__menu__list--quality" } }, classNames: { type: "plyr--{0}", provider: "plyr--{0}", video: "plyr__video-wrapper", embed: "plyr__video-embed", embedContainer: "plyr__video-embed__container", poster: "plyr__poster", posterEnabled: "plyr__poster-enabled", ads: "plyr__ads", control: "plyr__control", controlPressed: "plyr__control--pressed", playing: "plyr--playing", paused: "plyr--paused", stopped: "plyr--stopped", loading: "plyr--loading", hover: "plyr--hover", tooltip: "plyr__tooltip", cues: "plyr__cues", hidden: "plyr__sr-only", hideControls: "plyr--hide-controls", isIos: "plyr--is-ios", isTouch: "plyr--is-touch", uiSupported: "plyr--full-ui", noTransition: "plyr--no-transition", display: { time: "plyr__time" }, menu: { value: "plyr__menu__value", badge: "plyr__badge", open: "plyr--menu-open" }, captions: { enabled: "plyr--captions-enabled", active: "plyr--captions-active" }, fullscreen: { enabled: "plyr--fullscreen-enabled", fallback: "plyr--fullscreen-fallback" }, pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" }, airplay: { supported: "plyr--airplay-supported", active: "plyr--airplay-active" }, tabFocus: "plyr__tab-focus" }, attributes: { embed: { provider: "data-plyr-provider", id: "data-plyr-embed-id" } }, keys: { google: null }, ads: { enabled: !1, publisherId: "" } },
      fe = { html5: "html5", youtube: "youtube", vimeo: "vimeo" },
      pe = { audio: "audio", video: "video" };var me = function me() {},
      ge = function () {
    function t() {
      var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];e(this, t), this.enabled = window.console && n, this.enabled && this.log("Debugging enabled");
    }return n(t, [{ key: "log", get: function get() {
        return this.enabled ? Function.prototype.bind.call(console.log, console) : me;
      } }, { key: "warn", get: function get() {
        return this.enabled ? Function.prototype.bind.call(console.warn, console) : me;
      } }, { key: "error", get: function get() {
        return this.enabled ? Function.prototype.bind.call(console.error, console) : me;
      } }]), t;
  }();function ve() {
    if (this.enabled) {
      var e = this.player.elements.buttons.fullscreen;p.element(e) && (e.pressed = this.active), w.call(this.player, this.target, this.active ? "enterfullscreen" : "exitfullscreen", !0), z.isIos || function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];if (p.element(e)) {
          var n = L.call(this, "button:not(:disabled), input:not(:disabled), [tabindex]"),
              i = n[0],
              o = n[n.length - 1];g.call(this, this.elements.container, "keydown", function (e) {
            if ("Tab" === e.key && 9 === e.keyCode) {
              var t = document.activeElement;t !== o || e.shiftKey ? t === i && e.shiftKey && (o.focus(), e.preventDefault()) : (i.focus(), e.preventDefault());
            }
          }, t, !1);
        }
      }.call(this.player, this.target, this.active);
    }
  }function ye() {
    var e = this,
        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];if (t ? this.scrollPosition = { x: window.scrollX || 0, y: window.scrollY || 0 } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = t ? "hidden" : "", I(this.target, this.player.config.classNames.fullscreen.fallback, t), z.isIos) {
      var n = document.head.querySelector('meta[name="viewport"]'),
          i = "viewport-fit=cover";n || (n = document.createElement("meta")).setAttribute("name", "viewport");var o = p.string(n.content) && n.content.includes(i);t ? (this.cleanupViewport = !o, o || (n.content += ",".concat(i))) : this.cleanupViewport && (n.content = n.content.split(",").filter(function (e) {
        return e.trim() !== i;
      }).join(",")), setTimeout(function () {
        return B(e.target);
      }, 100);
    }ve.call(this);
  }var be = function () {
    function t(n) {
      var i = this;e(this, t), this.player = n, this.prefix = t.prefix, this.property = t.property, this.scrollPosition = { x: 0, y: 0 }, v.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), function () {
        ve.call(i);
      }), v.call(this.player, this.player.elements.container, "dblclick", function (e) {
        p.element(i.player.elements.controls) && i.player.elements.controls.contains(e.target) || i.toggle();
      }), this.update();
    }return n(t, [{ key: "update", value: function value() {
        this.enabled ? this.player.debug.log("".concat(t.native ? "Native" : "Fallback", " fullscreen enabled")) : this.player.debug.log("Fullscreen not supported and fallback disabled"), I(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled);
      } }, { key: "enter", value: function value() {
        this.enabled && (z.isIos && this.player.config.fullscreen.iosNative ? this.target.webkitEnterFullscreen() : t.native ? this.prefix ? p.empty(this.prefix) || this.target["".concat(this.prefix, "Request").concat(this.property)]() : this.target.requestFullscreen() : ye.call(this, !0));
      } }, { key: "exit", value: function value() {
        if (this.enabled) if (z.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), this.player.play();else if (t.native) {
          if (this.prefix) {
            if (!p.empty(this.prefix)) {
              var e = "moz" === this.prefix ? "Cancel" : "Exit";document["".concat(this.prefix).concat(e).concat(this.property)]();
            }
          } else (document.cancelFullScreen || document.exitFullscreen).call(document);
        } else ye.call(this, !1);
      } }, { key: "toggle", value: function value() {
        this.active ? this.exit() : this.enter();
      } }, { key: "enabled", get: function get() {
        return (t.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo;
      } }, { key: "active", get: function get() {
        return !!this.enabled && (t.native ? (this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement) === this.target : N(this.target, this.player.config.classNames.fullscreen.fallback));
      } }, { key: "target", get: function get() {
        return z.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.container;
      } }], [{ key: "native", get: function get() {
        return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
      } }, { key: "prefix", get: function get() {
        if (p.function(document.exitFullscreen)) return "";var e = "";return ["webkit", "moz", "ms"].some(function (t) {
          return !(!p.function(document["".concat(t, "ExitFullscreen")]) && !p.function(document["".concat(t, "CancelFullScreen")])) && (e = t, !0);
        }), e;
      } }, { key: "property", get: function get() {
        return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
      } }]), t;
  }();function we(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;return new Promise(function (n, i) {
      var o = new Image(),
          r = function r() {
        delete o.onload, delete o.onerror, (o.naturalWidth >= t ? n : i)(o);
      };Object.assign(o, { onload: r, onerror: r, src: e });
    });
  }var _e = { addStyleHook: function addStyleHook() {
      I(this.elements.container, this.config.selectors.container.replace(".", ""), !0), I(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
    }, toggleNativeControls: function toggleNativeControls() {
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
    }, build: function build() {
      var e = this;if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void _e.toggleNativeControls.call(this, !0);p.element(this.elements.controls) || (le.inject.call(this), this.listeners.controls()), _e.toggleNativeControls.call(this), this.isHTML5 && de.setup.call(this), this.volume = null, this.muted = null, this.speed = null, this.loop = null, this.quality = null, le.updateVolume.call(this), le.timeUpdate.call(this), _e.checkPlaying.call(this), I(this.elements.container, this.config.classNames.pip.supported, U.pip && this.isHTML5 && this.isVideo), I(this.elements.container, this.config.classNames.airplay.supported, U.airplay && this.isHTML5), I(this.elements.container, this.config.classNames.isIos, z.isIos), I(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(function () {
        w.call(e, e.media, "ready");
      }, 0), _e.setTitle.call(this), this.poster && _e.setPoster.call(this, this.poster, !1).catch(function () {}), this.config.duration && le.durationUpdate.call(this);
    }, setTitle: function setTitle() {
      var e = ee("play", this.config);if (p.string(this.config.title) && !p.empty(this.config.title) && (e += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach(function (t) {
        t.setAttribute("aria-label", e);
      }), this.isEmbed) {
        var t = O.call(this, "iframe");if (!p.element(t)) return;var n = p.empty(this.config.title) ? "video" : this.config.title,
            i = ee("frameTitle", this.config);t.setAttribute("title", i.replace("{title}", n));
      }
    }, togglePoster: function togglePoster(e) {
      I(this.elements.container, this.config.classNames.posterEnabled, e);
    }, setPoster: function setPoster(e) {
      var t = this;return arguments.length > 1 && void 0 !== arguments[1] && !arguments[1] || !this.poster ? (this.media.setAttribute("poster", e), function () {
        var e = this;return new Promise(function (t) {
          return e.ready ? setTimeout(t, 0) : v.call(e, e.elements.container, "ready", t);
        }).then(function () {});
      }.call(this).then(function () {
        return we(e);
      }).catch(function (n) {
        throw e === t.poster && _e.togglePoster.call(t, !1), n;
      }).then(function () {
        if (e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster");
      }).then(function () {
        return Object.assign(t.elements.poster.style, { backgroundImage: "url('".concat(e, "')"), backgroundSize: "" }), _e.togglePoster.call(t, !0), e;
      })) : Promise.reject(new Error("Poster already set"));
    }, checkPlaying: function checkPlaying(e) {
      var t = this;I(this.elements.container, this.config.classNames.playing, this.playing), I(this.elements.container, this.config.classNames.paused, this.paused), I(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(function (e) {
        e.pressed = t.playing;
      }), p.event(e) && "timeupdate" === e.type || _e.toggleControls.call(this);
    }, checkLoading: function checkLoading(e) {
      var t = this;this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function () {
        I(t.elements.container, t.config.classNames.loading, t.loading), _e.toggleControls.call(t);
      }, this.loading ? 250 : 0);
    }, toggleControls: function toggleControls(e) {
      var t = this.elements.controls;t && this.config.hideControls && this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover));
    } },
      Ee = function () {
    function t(n) {
      e(this, t), this.player = n, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this);
    }return n(t, [{ key: "handleKey", value: function value(e) {
        var t = this.player,
            n = t.elements,
            i = e.keyCode ? e.keyCode : e.which,
            o = "keydown" === e.type,
            r = o && i === this.lastKey;if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && p.number(i)) {
          if (o) {
            var s = document.activeElement;if (p.element(s)) {
              var a = t.config.selectors.editable;if (s !== n.inputs.seek && P(s, a)) return;if (32 === e.which && P(s, 'button, [role^="menuitem"]')) return;
            }switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(i) && (e.preventDefault(), e.stopPropagation()), i) {case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
                r || (t.currentTime = t.duration / 10 * (i - 48));break;case 32:case 75:
                r || t.togglePlay();break;case 38:
                t.increaseVolume(.1);break;case 40:
                t.decreaseVolume(.1);break;case 77:
                r || (t.muted = !t.muted);break;case 39:
                t.forward();break;case 37:
                t.rewind();break;case 70:
                t.fullscreen.toggle();break;case 67:
                r || t.toggleCaptions();break;case 76:
                t.loop = !t.loop;}!t.fullscreen.enabled && t.fullscreen.active && 27 === i && t.fullscreen.toggle(), this.lastKey = i;
          } else this.lastKey = null;
        }
      } }, { key: "toggleMenu", value: function value(e) {
        le.toggleMenu.call(this.player, e);
      } }, { key: "firstTouch", value: function value() {
        var e = this.player,
            t = e.elements;e.touch = !0, I(t.container, e.config.classNames.isTouch, !0);
      } }, { key: "setTabFocus", value: function value(e) {
        var t = this.player,
            n = t.elements;if (clearTimeout(this.focusTimer), "keydown" !== e.type || 9 === e.which) {
          "keydown" === e.type && (this.lastKeyDown = e.timeStamp);var i,
              o = e.timeStamp - this.lastKeyDown <= 20;if ("focus" !== e.type || o) i = t.config.classNames.tabFocus, I(L.call(t, ".".concat(i)), i, !1), this.focusTimer = setTimeout(function () {
            var e = document.activeElement;n.container.contains(e) && I(document.activeElement, t.config.classNames.tabFocus, !0);
          }, 10);
        }
      } }, { key: "global", value: function value() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = this.player;t.config.keyboard.global && g.call(t, window, "keydown keyup", this.handleKey, e, !1), g.call(t, document.body, "click", this.toggleMenu, e), b.call(t, document.body, "touchstart", this.firstTouch), g.call(t, document.body, "keydown focus blur", this.setTabFocus, e, !1, !0);
      } }, { key: "container", value: function value() {
        var e = this.player,
            t = e.elements;!e.config.keyboard.global && e.config.keyboard.focused && v.call(e, t.container, "keydown keyup", this.handleKey, !1), v.call(e, t.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", function (n) {
          var i = t.controls;i && "enterfullscreen" === n.type && (i.pressed = !1, i.hover = !1);var o = 0;["touchstart", "touchmove", "mousemove"].includes(n.type) && (_e.toggleControls.call(e, !0), o = e.touch ? 3e3 : 2e3), clearTimeout(e.timers.controls), e.timers.controls = setTimeout(function () {
            return _e.toggleControls.call(e, !1);
          }, o);
        });
      } }, { key: "media", value: function value() {
        var e = this.player,
            t = e.elements;if (v.call(e, e.media, "timeupdate seeking seeked", function (t) {
          return le.timeUpdate.call(e, t);
        }), v.call(e, e.media, "durationchange loadeddata loadedmetadata", function (t) {
          return le.durationUpdate.call(e, t);
        }), v.call(e, e.media, "canplay", function () {
          D(t.volume, !e.hasAudio), D(t.buttons.mute, !e.hasAudio);
        }), v.call(e, e.media, "ended", function () {
          e.isHTML5 && e.isVideo && e.config.resetOnEnd && e.restart();
        }), v.call(e, e.media, "progress playing seeking seeked", function (t) {
          return le.updateProgress.call(e, t);
        }), v.call(e, e.media, "volumechange", function (t) {
          return le.updateVolume.call(e, t);
        }), v.call(e, e.media, "playing play pause ended emptied timeupdate", function (t) {
          return _e.checkPlaying.call(e, t);
        }), v.call(e, e.media, "waiting canplay seeked playing", function (t) {
          return _e.checkLoading.call(e, t);
        }), v.call(e, e.media, "playing", function () {
          e.ads && e.ads.enabled && !e.ads.initialized && e.ads.managerPromise.then(function () {
            return e.ads.play();
          }).catch(function () {
            return e.play();
          });
        }), e.supported.ui && e.config.clickToPlay && !e.isAudio) {
          var n = O.call(e, ".".concat(e.config.classNames.video));if (!p.element(n)) return;v.call(e, t.container, "click", function (i) {
            ([t.container, n].includes(i.target) || n.contains(i.target)) && (e.touch && e.config.hideControls || (e.ended ? (e.restart(), e.play()) : e.togglePlay()));
          });
        }e.supported.ui && e.config.disableContextMenu && v.call(e, t.wrapper, "contextmenu", function (e) {
          e.preventDefault();
        }, !1), v.call(e, e.media, "volumechange", function () {
          e.storage.set({ volume: e.volume, muted: e.muted });
        }), v.call(e, e.media, "ratechange", function () {
          le.updateSetting.call(e, "speed"), e.storage.set({ speed: e.speed });
        }), v.call(e, e.media, "qualitychange", function (t) {
          le.updateSetting.call(e, "quality", null, t.detail.quality);
        });var i = e.config.events.concat(["keyup", "keydown"]).join(" ");v.call(e, e.media, i, function (n) {
          var i = n.detail,
              o = void 0 === i ? {} : i;"error" === n.type && (o = e.media.error), w.call(e, t.container, n.type, !0, o);
        });
      } }, { key: "proxy", value: function value(e, t, n) {
        var i = this.player,
            o = i.config.listeners[n],
            r = !0;p.function(o) && (r = o.call(i, e)), r && p.function(t) && t.call(i, e);
      } }, { key: "bind", value: function value(e, t, n, i) {
        var o = this,
            r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
            s = this.player,
            a = s.config.listeners[i],
            l = p.function(a);v.call(s, e, t, function (e) {
          return o.proxy(e, n, i);
        }, r && !l);
      } }, { key: "controls", value: function value() {
        var e = this,
            t = this.player,
            n = t.elements,
            i = z.isIE ? "change" : "input";if (n.buttons.play && Array.from(n.buttons.play).forEach(function (n) {
          e.bind(n, "click", t.togglePlay, "play");
        }), this.bind(n.buttons.restart, "click", t.restart, "restart"), this.bind(n.buttons.rewind, "click", t.rewind, "rewind"), this.bind(n.buttons.fastForward, "click", t.forward, "fastForward"), this.bind(n.buttons.mute, "click", function () {
          t.muted = !t.muted;
        }, "mute"), this.bind(n.buttons.captions, "click", function () {
          return t.toggleCaptions();
        }), this.bind(n.buttons.fullscreen, "click", function () {
          t.fullscreen.toggle();
        }, "fullscreen"), this.bind(n.buttons.pip, "click", function () {
          t.pip = "toggle";
        }, "pip"), this.bind(n.buttons.airplay, "click", t.airplay, "airplay"), this.bind(n.buttons.settings, "click", function (e) {
          e.stopPropagation(), le.toggleMenu.call(t, e);
        }), this.bind(n.buttons.settings, "keyup", function (e) {
          var n = e.which;[13, 32].includes(n) && (13 !== n ? (e.preventDefault(), e.stopPropagation(), le.toggleMenu.call(t, e)) : le.focusFirstMenuItem.call(t, null, !0));
        }, null, !1), this.bind(n.settings.menu, "keydown", function (e) {
          27 === e.which && le.toggleMenu.call(t, e);
        }), this.bind(n.inputs.seek, "mousedown mousemove", function (e) {
          var t = n.progress.getBoundingClientRect(),
              i = 100 / t.width * (e.pageX - t.left);e.currentTarget.setAttribute("seek-value", i);
        }), this.bind(n.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", function (e) {
          var n = e.currentTarget,
              i = e.keyCode ? e.keyCode : e.which;if (!p.keyboardEvent(e) || 39 === i || 37 === i) {
            var o = n.hasAttribute("play-on-seeked"),
                r = ["mouseup", "touchend", "keyup"].includes(e.type);o && r ? (n.removeAttribute("play-on-seeked"), t.play()) : !r && t.playing && (n.setAttribute("play-on-seeked", ""), t.pause());
          }
        }), z.isIos) {
          var r = L.call(t, 'input[type="range"]');Array.from(r).forEach(function (t) {
            return e.bind(t, i, function (e) {
              return B(e.target);
            });
          });
        }this.bind(n.inputs.seek, i, function (e) {
          var n = e.currentTarget,
              i = n.getAttribute("seek-value");p.empty(i) && (i = n.value), n.removeAttribute("seek-value"), t.currentTime = i / n.max * t.duration;
        }, "seek"), this.bind(n.progress, "mouseenter mouseleave mousemove", function (e) {
          return le.updateSeekTooltip.call(t, e);
        }), z.isWebkit && Array.from(L.call(t, 'input[type="range"]')).forEach(function (n) {
          e.bind(n, "input", function (e) {
            return le.updateRangeFill.call(t, e.target);
          });
        }), t.config.toggleInvert && !p.element(n.display.duration) && this.bind(n.display.currentTime, "click", function () {
          0 !== t.currentTime && (t.config.invertTime = !t.config.invertTime, le.timeUpdate.call(t));
        }), this.bind(n.inputs.volume, i, function (e) {
          t.volume = e.target.value;
        }, "volume"), this.bind(n.controls, "mouseenter mouseleave", function (e) {
          n.controls.hover = !t.touch && "mouseenter" === e.type;
        }), this.bind(n.controls, "mousedown mouseup touchstart touchend touchcancel", function (e) {
          n.controls.pressed = ["mousedown", "touchstart"].includes(e.type);
        }), this.bind(n.controls, "focusin focusout", function (n) {
          var i = t.config,
              o = t.elements,
              r = t.timers,
              s = "focusin" === n.type;if (I(o.controls, i.classNames.noTransition, s), _e.toggleControls.call(t, s), s) {
            setTimeout(function () {
              I(o.controls, i.classNames.noTransition, !1);
            }, 0);var a = e.touch ? 3e3 : 4e3;clearTimeout(r.controls), r.controls = setTimeout(function () {
              return _e.toggleControls.call(t, !1);
            }, a);
          }
        }), this.bind(n.inputs.volume, "wheel", function (e) {
          var n = e.webkitDirectionInvertedFromDevice,
              i = o([e.deltaX, -e.deltaY].map(function (e) {
            return n ? -e : e;
          }), 2),
              r = i[0],
              s = i[1],
              a = Math.sign(Math.abs(r) > Math.abs(s) ? r : s);t.increaseVolume(a / 50);var l = t.media.volume;(1 === a && l < 1 || -1 === a && l > 0) && e.preventDefault();
        }, "volume", !1);
      } }]), t;
  }();"undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;var Te,
      Ce = (function (e, t) {
    var n;n = function n() {
      var e = function e() {},
          t = {},
          n = {},
          i = {};function o(e, t) {
        if (e) {
          var o = i[e];if (n[e] = t, o) for (; o.length;) {
            o[0](e, t), o.splice(0, 1);
          }
        }
      }function r(t, n) {
        t.call && (t = { success: t }), n.length ? (t.error || e)(n) : (t.success || e)(t);
      }function s(t, n, i, o) {
        var r,
            a,
            l = document,
            c = i.async,
            u = (i.numRetries || 0) + 1,
            d = i.before || e,
            h = t.replace(/^(css|img)!/, "");o = o || 0, /(^css!|\.css$)/.test(t) ? (r = !0, (a = l.createElement("link")).rel = "stylesheet", a.href = h) : /(^img!|\.(png|gif|jpg|svg)$)/.test(t) ? (a = l.createElement("img")).src = h : ((a = l.createElement("script")).src = t, a.async = void 0 === c || c), a.onload = a.onerror = a.onbeforeload = function (e) {
          var l = e.type[0];if (r && "hideFocus" in a) try {
            a.sheet.cssText.length || (l = "e");
          } catch (e) {
            l = "e";
          }if ("e" == l && (o += 1) < u) return s(t, n, i, o);n(t, l, e.defaultPrevented);
        }, !1 !== d(t, a) && l.head.appendChild(a);
      }function a(e, n, i) {
        var a, l;if (n && n.trim && (a = n), l = (a ? i : n) || {}, a) {
          if (a in t) throw "LoadJS";t[a] = !0;
        }!function (e, t, n) {
          var i,
              o,
              r = (e = e.push ? e : [e]).length,
              a = r,
              l = [];for (i = function i(e, n, _i2) {
            if ("e" == n && l.push(e), "b" == n) {
              if (!_i2) return;l.push(e);
            }--r || t(l);
          }, o = 0; o < a; o++) {
            s(e[o], i, n);
          }
        }(e, function (e) {
          r(l, e), o(a, e);
        }, l);
      }return a.ready = function (e, t) {
        return function (e, t) {
          var o,
              r,
              s,
              a = [],
              l = (e = e.push ? e : [e]).length,
              c = l;for (o = function o(e, n) {
            n.length && a.push(e), --c || t(a);
          }; l--;) {
            r = e[l], (s = n[r]) ? o(r, s) : (i[r] = i[r] || []).push(o);
          }
        }(e, function (e) {
          r(t, e);
        }), a;
      }, a.done = function (e) {
        o(e, []);
      }, a.reset = function () {
        t = {}, n = {}, i = {};
      }, a.isDefined = function (e) {
        return e in t;
      }, a;
    }, e.exports = n();
  }(Te = { exports: {} }, Te.exports), Te.exports);function ke(e) {
    return new Promise(function (t, n) {
      Ce(e, { success: t, error: n });
    });
  }function xe(e) {
    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, w.call(this, this.media, e ? "play" : "pause"));
  }var Se = { setup: function setup() {
      var e = this;I(this.elements.wrapper, this.config.classNames.embed, !0), Se.setAspectRatio.call(this), p.object(window.Vimeo) ? Se.ready.call(this) : ke(this.config.urls.vimeo.sdk).then(function () {
        Se.ready.call(e);
      }).catch(function (t) {
        e.debug.warn("Vimeo API failed to load", t);
      });
    }, setAspectRatio: function setAspectRatio(e) {
      var t = o((p.string(e) ? e : this.config.ratio).split(":"), 2),
          n = 100 / t[0] * t[1];if (this.elements.wrapper.style.paddingBottom = "".concat(n, "%"), this.supported.ui) {
        var i = (240 - n) / 4.8;this.media.style.transform = "translateY(-".concat(i, "%)");
      }
    }, ready: function ready() {
      var e = this,
          t = this,
          n = ue({ loop: t.config.loop.active, autoplay: t.autoplay, byline: !1, portrait: !1, title: !1, speed: !0, transparent: 0, gesture: "media", playsinline: !this.config.fullscreen.iosNative }),
          i = t.media.getAttribute("src");p.empty(i) && (i = t.media.getAttribute(t.config.attributes.embed.id));var o,
          r = (o = i, p.empty(o) ? null : p.number(Number(o)) ? o : o.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : o),
          s = T("iframe"),
          a = Q(t.config.urls.vimeo.iframe, r, n);s.setAttribute("src", a), s.setAttribute("allowfullscreen", ""), s.setAttribute("allowtransparency", ""), s.setAttribute("allow", "autoplay");var l = T("div", { poster: t.poster, class: t.config.classNames.embedContainer });l.appendChild(s), t.media = S(l, t.media), ne(Q(t.config.urls.vimeo.api, r), "json").then(function (e) {
        if (!p.empty(e)) {
          var n = new URL(e[0].thumbnail_large);n.pathname = "".concat(n.pathname.split("_")[0], ".jpg"), _e.setPoster.call(t, n.href).catch(function () {});
        }
      }), t.embed = new window.Vimeo.Player(s, { autopause: t.config.autopause, muted: t.muted }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function () {
        return xe.call(t, !0), t.embed.play();
      }, t.media.pause = function () {
        return xe.call(t, !1), t.embed.pause();
      }, t.media.stop = function () {
        t.pause(), t.currentTime = 0;
      };var c = t.media.currentTime;Object.defineProperty(t.media, "currentTime", { get: function get() {
          return c;
        }, set: function set(e) {
          var n = t.embed,
              i = t.media,
              o = t.paused,
              r = t.volume,
              s = o && !n.hasPlayed;i.seeking = !0, w.call(t, i, "seeking"), Promise.resolve(s && n.setVolume(0)).then(function () {
            return n.setCurrentTime(e);
          }).then(function () {
            return s && n.pause();
          }).then(function () {
            return s && n.setVolume(r);
          }).catch(function () {});
        } });var u = t.config.speed.selected;Object.defineProperty(t.media, "playbackRate", { get: function get() {
          return u;
        }, set: function set(e) {
          t.embed.setPlaybackRate(e).then(function () {
            u = e, w.call(t, t.media, "ratechange");
          }).catch(function (e) {
            "Error" === e.name && le.setSpeedMenu.call(t, []);
          });
        } });var d = t.config.volume;Object.defineProperty(t.media, "volume", { get: function get() {
          return d;
        }, set: function set(e) {
          t.embed.setVolume(e).then(function () {
            d = e, w.call(t, t.media, "volumechange");
          });
        } });var h = t.config.muted;Object.defineProperty(t.media, "muted", { get: function get() {
          return h;
        }, set: function set(e) {
          var n = !!p.boolean(e) && e;t.embed.setVolume(n ? 0 : t.config.volume).then(function () {
            h = n, w.call(t, t.media, "volumechange");
          });
        } });var f,
          m = t.config.loop;Object.defineProperty(t.media, "loop", { get: function get() {
          return m;
        }, set: function set(e) {
          var n = p.boolean(e) ? e : t.config.loop.active;t.embed.setLoop(n).then(function () {
            m = n;
          });
        } }), t.embed.getVideoUrl().then(function (e) {
        f = e;
      }).catch(function (t) {
        e.debug.warn(t);
      }), Object.defineProperty(t.media, "currentSrc", { get: function get() {
          return f;
        } }), Object.defineProperty(t.media, "ended", { get: function get() {
          return t.currentTime === t.duration;
        } }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then(function (t) {
        var n = function (e, t) {
          var n = function e(t, n) {
            return 0 === n ? t : e(n, t % n);
          }(e, t);return "".concat(e / n, ":").concat(t / n);
        }(t[0], t[1]);Se.setAspectRatio.call(e, n);
      }), t.embed.setAutopause(t.config.autopause).then(function (e) {
        t.config.autopause = e;
      }), t.embed.getVideoTitle().then(function (n) {
        t.config.title = n, _e.setTitle.call(e);
      }), t.embed.getCurrentTime().then(function (e) {
        c = e, w.call(t, t.media, "timeupdate");
      }), t.embed.getDuration().then(function (e) {
        t.media.duration = e, w.call(t, t.media, "durationchange");
      }), t.embed.getTextTracks().then(function (e) {
        t.media.textTracks = e, de.setup.call(t);
      }), t.embed.on("cuechange", function (e) {
        var n = e.cues,
            i = (void 0 === n ? [] : n).map(function (e) {
          return t = e.text, n = document.createDocumentFragment(), i = document.createElement("div"), n.appendChild(i), i.innerHTML = t, n.firstChild.innerText;var t, n, i;
        });de.updateCues.call(t, i);
      }), t.embed.on("loaded", function () {
        (t.embed.getPaused().then(function (e) {
          xe.call(t, !e), e || w.call(t, t.media, "playing");
        }), p.element(t.embed.element) && t.supported.ui) && t.embed.element.setAttribute("tabindex", -1);
      }), t.embed.on("play", function () {
        xe.call(t, !0), w.call(t, t.media, "playing");
      }), t.embed.on("pause", function () {
        xe.call(t, !1);
      }), t.embed.on("timeupdate", function (e) {
        t.media.seeking = !1, c = e.seconds, w.call(t, t.media, "timeupdate");
      }), t.embed.on("progress", function (e) {
        t.media.buffered = e.percent, w.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && w.call(t, t.media, "canplaythrough"), t.embed.getDuration().then(function (e) {
          e !== t.media.duration && (t.media.duration = e, w.call(t, t.media, "durationchange"));
        });
      }), t.embed.on("seeked", function () {
        t.media.seeking = !1, w.call(t, t.media, "seeked");
      }), t.embed.on("ended", function () {
        t.media.paused = !0, w.call(t, t.media, "ended");
      }), t.embed.on("error", function (e) {
        t.media.error = e, w.call(t, t.media, "error");
      }), setTimeout(function () {
        return _e.build.call(t);
      }, 0);
    } };function Ae(e) {
    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, w.call(this, this.media, e ? "play" : "pause"));
  }var De,
      Ie = { setup: function setup() {
      var e = this;I(this.elements.wrapper, this.config.classNames.embed, !0), Ie.setAspectRatio.call(this), p.object(window.YT) && p.function(window.YT.Player) ? Ie.ready.call(this) : (ke(this.config.urls.youtube.sdk).catch(function (t) {
        e.debug.warn("YouTube API failed to load", t);
      }), window.onYouTubeReadyCallbacks = window.onYouTubeReadyCallbacks || [], window.onYouTubeReadyCallbacks.push(function () {
        Ie.ready.call(e);
      }), window.onYouTubeIframeAPIReady = function () {
        window.onYouTubeReadyCallbacks.forEach(function (e) {
          e();
        });
      });
    }, getTitle: function getTitle(e) {
      var t = this;if (p.function(this.embed.getVideoData)) {
        var n = this.embed.getVideoData().title;if (p.empty(n)) return this.config.title = n, void _e.setTitle.call(this);
      }var i = this.config.keys.google;p.string(i) && !p.empty(i) && ne(Q(this.config.urls.youtube.api, e, i)).then(function (e) {
        p.object(e) && (t.config.title = e.items[0].snippet.title, _e.setTitle.call(t));
      }).catch(function () {});
    }, setAspectRatio: function setAspectRatio() {
      var e = this.config.ratio.split(":");this.elements.wrapper.style.paddingBottom = "".concat(100 / e[0] * e[1], "%");
    }, ready: function ready() {
      var e = this,
          t = e.media.getAttribute("id");if (p.empty(t) || !t.startsWith("youtube-")) {
        var n = e.media.getAttribute("src");p.empty(n) && (n = e.media.getAttribute(this.config.attributes.embed.id));var i,
            o,
            r = (i = n, p.empty(i) ? null : i.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : i),
            s = (o = e.provider, "".concat(o, "-").concat(Math.floor(1e4 * Math.random()))),
            a = T("div", { id: s, poster: e.poster });e.media = S(a, e.media);var l = function l(e) {
          return "https://img.youtube.com/vi/".concat(r, "/").concat(e, "default.jpg");
        };we(l("maxres"), 121).catch(function () {
          return we(l("sd"), 121);
        }).catch(function () {
          return we(l("hq"));
        }).then(function (t) {
          return _e.setPoster.call(e, t.src);
        }).then(function (t) {
          t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover");
        }).catch(function () {}), e.embed = new window.YT.Player(s, { videoId: r, playerVars: { autoplay: e.config.autoplay ? 1 : 0, hl: e.config.hl, controls: e.supported.ui ? 0 : 1, rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1, disablekb: 1, playsinline: 1, widget_referrer: window ? window.location.href : null, cc_load_policy: e.captions.active ? 1 : 0, cc_lang_pref: e.config.captions.language }, events: { onError: function onError(t) {
              if (!e.media.error) {
                var n = t.data,
                    i = { 2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.", 5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.", 100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.", 101: "The owner of the requested video does not allow it to be played in embedded players.", 150: "The owner of the requested video does not allow it to be played in embedded players." }[n] || "An unknown error occured";e.media.error = { code: n, message: i }, w.call(e, e.media, "error");
              }
            }, onPlaybackRateChange: function onPlaybackRateChange(t) {
              var n = t.target;e.media.playbackRate = n.getPlaybackRate(), w.call(e, e.media, "ratechange");
            }, onReady: function onReady(t) {
              if (!p.function(e.media.play)) {
                var n = t.target;Ie.getTitle.call(e, r), e.media.play = function () {
                  Ae.call(e, !0), n.playVideo();
                }, e.media.pause = function () {
                  Ae.call(e, !1), n.pauseVideo();
                }, e.media.stop = function () {
                  n.stopVideo();
                }, e.media.duration = n.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", { get: function get() {
                    return Number(n.getCurrentTime());
                  }, set: function set(t) {
                    e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, w.call(e, e.media, "seeking"), n.seekTo(t);
                  } }), Object.defineProperty(e.media, "playbackRate", { get: function get() {
                    return n.getPlaybackRate();
                  }, set: function set(e) {
                    n.setPlaybackRate(e);
                  } });var i = e.config.volume;Object.defineProperty(e.media, "volume", { get: function get() {
                    return i;
                  }, set: function set(t) {
                    i = t, n.setVolume(100 * i), w.call(e, e.media, "volumechange");
                  } });var o = e.config.muted;Object.defineProperty(e.media, "muted", { get: function get() {
                    return o;
                  }, set: function set(t) {
                    var i = p.boolean(t) ? t : o;o = i, n[i ? "mute" : "unMute"](), w.call(e, e.media, "volumechange");
                  } }), Object.defineProperty(e.media, "currentSrc", { get: function get() {
                    return n.getVideoUrl();
                  } }), Object.defineProperty(e.media, "ended", { get: function get() {
                    return e.currentTime === e.duration;
                  } }), e.options.speed = n.getAvailablePlaybackRates(), e.supported.ui && e.media.setAttribute("tabindex", -1), w.call(e, e.media, "timeupdate"), w.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(function () {
                  e.media.buffered = n.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && w.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), w.call(e, e.media, "canplaythrough"));
                }, 200), setTimeout(function () {
                  return _e.build.call(e);
                }, 50);
              }
            }, onStateChange: function onStateChange(t) {
              var n = t.target;switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(t.data) && (e.media.seeking = !1, w.call(e, e.media, "seeked")), t.data) {case -1:
                  w.call(e, e.media, "timeupdate"), e.media.buffered = n.getVideoLoadedFraction(), w.call(e, e.media, "progress");break;case 0:
                  Ae.call(e, !1), e.media.loop ? (n.stopVideo(), n.playVideo()) : w.call(e, e.media, "ended");break;case 1:
                  e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (Ae.call(e, !0), w.call(e, e.media, "playing"), e.timers.playing = setInterval(function () {
                    w.call(e, e.media, "timeupdate");
                  }, 50), e.media.duration !== n.getDuration() && (e.media.duration = n.getDuration(), w.call(e, e.media, "durationchange")));break;case 2:
                  e.muted || e.embed.unMute(), Ae.call(e, !1);}w.call(e, e.elements.container, "statechange", !1, { code: t.data });
            } } });
      }
    } },
      Ne = { setup: function setup() {
      this.media ? (I(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), I(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && I(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = T("div", { class: this.config.classNames.video }), _(this.media, this.elements.wrapper), this.elements.poster = T("div", { class: this.config.classNames.poster }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? V.extend.call(this) : this.isYouTube ? Ie.setup.call(this) : this.isVimeo && Se.setup.call(this)) : this.debug.warn("No media element found!");
    } },
      Pe = function () {
    function t(n) {
      var i = this;e(this, t), this.player = n, this.publisherId = n.config.ads.publisherId, this.playing = !1, this.initialized = !1, this.elements = { container: null, displayContainer: null }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function (e, t) {
        i.on("loaded", e), i.on("error", t);
      }), this.load();
    }return n(t, [{ key: "load", value: function value() {
        var e = this;this.enabled && (p.object(window.google) && p.object(window.google.ima) ? this.ready() : ke(this.player.config.urls.googleIMA.sdk).then(function () {
          e.ready();
        }).catch(function () {
          e.trigger("error", new Error("Google IMA SDK failed to load"));
        }));
      } }, { key: "ready", value: function value() {
        var e = this;this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(function () {
          e.clearSafetyTimer("onAdsManagerLoaded()");
        }), this.listeners(), this.setupIMA();
      } }, { key: "setupIMA", value: function value() {
        this.elements.container = T("div", { class: this.player.config.classNames.ads }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container), this.requestAds();
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
          var t = ae(Math.max(e.manager.getRemainingTime(), 0)),
              n = "".concat(ee("advertisement", e.player.config), " - ").concat(t);e.elements.container.setAttribute("data-badge-text", n);
        }, 100);
      } }, { key: "onAdsManagerLoaded", value: function value(e) {
        var t = this;if (this.enabled) {
          var n = new google.ima.AdsRenderingSettings();n.restoreCustomPlaybackStateOnAdBreakComplete = !0, n.enablePreloading = !0, this.manager = e.getAdsManager(this.player, n), this.cuePoints = this.manager.getCuePoints(), p.empty(this.cuePoints) || this.cuePoints.forEach(function (e) {
            if (0 !== e && -1 !== e && e < t.player.duration) {
              var n = t.player.elements.progress;if (p.element(n)) {
                var i = 100 / t.player.duration * e,
                    o = T("span", { class: t.player.config.classNames.cues });o.style.left = "".concat(i.toString(), "%"), n.appendChild(o);
              }
            }
          }), this.manager.setVolume(this.player.volume), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
            return t.onAdError(e);
          }), Object.keys(google.ima.AdEvent.Type).forEach(function (e) {
            t.manager.addEventListener(google.ima.AdEvent.Type[e], function (e) {
              return t.onAdEvent(e);
            });
          }), this.trigger("loaded");
        }
      } }, { key: "onAdEvent", value: function value(e) {
        var t = this,
            n = this.player.elements.container,
            i = e.getAd(),
            o = function o(e) {
          var n = "ads".concat(e.replace(/_/g, "").toLowerCase());w.call(t.player, t.player.media, n);
        };switch (e.type) {case google.ima.AdEvent.Type.LOADED:
            this.trigger("loaded"), o(e.type), this.pollCountdown(!0), i.isLinear() || (i.width = n.offsetWidth, i.height = n.offsetHeight);break;case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
            o(e.type), this.loadAds();break;case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
            o(e.type), this.pauseContent();break;case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
            o(e.type), this.pollCountdown(), this.resumeContent();break;case google.ima.AdEvent.Type.STARTED:case google.ima.AdEvent.Type.MIDPOINT:case google.ima.AdEvent.Type.COMPLETE:case google.ima.AdEvent.Type.IMPRESSION:case google.ima.AdEvent.Type.CLICK:
            o(e.type);}
      } }, { key: "onAdError", value: function value(e) {
        this.cancel(), this.player.debug.warn("Ads error", e);
      } }, { key: "listeners", value: function value() {
        var e,
            t = this,
            n = this.player.elements.container;this.player.on("ended", function () {
          t.loader.contentComplete();
        }), this.player.on("seeking", function () {
          return e = t.player.currentTime;
        }), this.player.on("seeked", function () {
          var n = t.player.currentTime;p.empty(t.cuePoints) || t.cuePoints.forEach(function (i, o) {
            e < i && i < n && (t.manager.discardAdBreak(), t.cuePoints.splice(o, 1));
          });
        }), window.addEventListener("resize", function () {
          t.manager && t.manager.resize(n.offsetWidth, n.offsetHeight, google.ima.ViewMode.NORMAL);
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
        for (var t = this, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) {
          i[o - 1] = arguments[o];
        }var r = this.events[e];p.array(r) && r.forEach(function (e) {
          p.function(e) && e.apply(t, i);
        });
      } }, { key: "on", value: function value(e, t) {
        return p.array(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this;
      } }, { key: "startSafetyTimer", value: function value(e, t) {
        var n = this;this.player.debug.log("Safety timer invoked from: ".concat(t)), this.safetyTimer = setTimeout(function () {
          n.cancel(), n.clearSafetyTimer("startSafetyTimer()");
        }, e);
      } }, { key: "clearSafetyTimer", value: function value(e) {
        p.nullOrUndefined(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: ".concat(e)), clearTimeout(this.safetyTimer), this.safetyTimer = null);
      } }, { key: "enabled", get: function get() {
        return this.player.isHTML5 && this.player.isVideo && this.player.config.ads.enabled && !p.empty(this.publisherId);
      } }, { key: "tagUrl", get: function get() {
        var e = { AV_PUBLISHERID: "58c25bb0073ef448b1087ad6", AV_CHANNELID: "5a0458dc28a06145e4519d21", AV_URL: window.location.hostname, cb: Date.now(), AV_WIDTH: 640, AV_HEIGHT: 480, AV_CDIM2: this.publisherId };return "".concat("https://go.aniview.com/api/adserver6/vast/", "?").concat(ue(e));
      } }]), t;
  }(),
      Le = { insertElements: function insertElements(e, t) {
      var n = this;p.string(t) ? C(e, this.media, { src: t }) : p.array(t) && t.forEach(function (t) {
        C(e, n.media, t);
      });
    }, change: function change(e) {
      var t = this;Y(e, "sources.length") ? (V.cancelRequests.call(this), this.destroy.call(this, function () {
        t.options.quality = [], k(t.media), t.media = null, p.element(t.elements.container) && t.elements.container.removeAttribute("class");var n = e.sources,
            i = e.type,
            r = o(n, 1)[0],
            s = r.provider,
            a = void 0 === s ? fe.html5 : s,
            l = r.src,
            c = "html5" === a ? i : "div",
            u = "html5" === a ? {} : { src: l };Object.assign(t, { provider: a, type: i, supported: U.check(i, a, t.config.playsinline), media: T(c, u) }), t.elements.container.appendChild(t.media), p.boolean(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), p.empty(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), _e.addStyleHook.call(t), t.isHTML5 && Le.insertElements.call(t, "source", n), t.config.title = e.title, Ne.setup.call(t), t.isHTML5 && ("tracks" in e && Le.insertElements.call(t, "track", e.tracks), t.media.load()), (t.isHTML5 || t.isEmbed && !t.supported.ui) && _e.build.call(t), t.fullscreen.update();
      }, !0)) : this.debug.warn("Invalid source format");
    } },
      Oe = function () {
    function t(n, i) {
      var o = this;if (e(this, t), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = U.touch, this.media = n, p.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || p.nodeList(this.media) || p.array(this.media)) && (this.media = this.media[0]), this.config = $({}, he, t.defaults, i || {}, function () {
        try {
          return JSON.parse(o.media.getAttribute("data-plyr-config"));
        } catch (e) {
          return {};
        }
      }()), this.elements = { container: null, captions: null, buttons: {}, display: {}, progress: {}, inputs: {}, settings: { popup: null, menu: null, panels: {}, buttons: {} } }, this.captions = { active: null, currentTrack: -1, meta: new WeakMap() }, this.fullscreen = { active: !1 }, this.options = { speed: [], quality: [] }, this.debug = new ge(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", U), !p.nullOrUndefined(this.media) && p.element(this.media)) {
        if (this.media.plyr) this.debug.warn("Target already setup");else if (this.config.enabled) {
          if (U.check().api) {
            var r = this.media.cloneNode(!0);r.autoplay = !1, this.elements.original = r;var s = this.media.tagName.toLowerCase(),
                a = null,
                l = null;switch (s) {case "div":
                if (a = this.media.querySelector("iframe"), p.element(a)) {
                  if (l = ce(a.getAttribute("src")), this.provider = function (e) {
                    return (/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(e) ? fe.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? fe.vimeo : null
                    );
                  }(l.toString()), this.elements.container = this.media, this.media = a, this.elements.container.className = "", l.search.length) {
                    var c = ["1", "true"];c.includes(l.searchParams.get("autoplay")) && (this.config.autoplay = !0), c.includes(l.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = c.includes(l.searchParams.get("playsinline")), this.config.hl = l.searchParams.get("hl")) : this.config.playsinline = !0;
                  }
                } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);if (p.empty(this.provider) || !Object.keys(fe).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");this.type = pe.video;break;case "video":case "audio":
                this.type = s, this.provider = fe.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);break;default:
                return void this.debug.error("Setup failed: unsupported type");}this.supported = U.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new Ee(this), this.storage = new te(this), this.media.plyr = this, p.element(this.elements.container) || (this.elements.container = T("div"), _(this.media, this.elements.container)), _e.addStyleHook.call(this), Ne.setup.call(this), this.config.debug && v.call(this, this.elements.container, this.config.events.join(" "), function (e) {
              o.debug.log("event: ".concat(e.type));
            }), (this.isHTML5 || this.isEmbed && !this.supported.ui) && _e.build.call(this), this.listeners.container(), this.listeners.global(), this.fullscreen = new be(this), this.config.ads.enabled && (this.ads = new Pe(this)), this.config.autoplay && this.play()) : this.debug.error("Setup failed: no support");
          } else this.debug.error("Setup failed: no support");
        } else this.debug.error("Setup failed: disabled by config");
      } else this.debug.error("Setup failed: no suitable element passed");
    }return n(t, [{ key: "play", value: function value() {
        return p.function(this.media.play) ? this.media.play() : null;
      } }, { key: "pause", value: function value() {
        this.playing && p.function(this.media.pause) && this.media.pause();
      } }, { key: "togglePlay", value: function value(e) {
        (p.boolean(e) ? e : !this.playing) ? this.play() : this.pause();
      } }, { key: "stop", value: function value() {
        this.isHTML5 ? (this.pause(), this.restart()) : p.function(this.media.stop) && this.media.stop();
      } }, { key: "restart", value: function value() {
        this.currentTime = 0;
      } }, { key: "rewind", value: function value(e) {
        this.currentTime = this.currentTime - (p.number(e) ? e : this.config.seekTime);
      } }, { key: "forward", value: function value(e) {
        this.currentTime = this.currentTime + (p.number(e) ? e : this.config.seekTime);
      } }, { key: "increaseVolume", value: function value(e) {
        var t = this.media.muted ? 0 : this.volume;this.volume = t + (p.number(e) ? e : 0);
      } }, { key: "decreaseVolume", value: function value(e) {
        this.increaseVolume(-e);
      } }, { key: "toggleCaptions", value: function value(e) {
        de.toggle.call(this, e, !1);
      } }, { key: "airplay", value: function value() {
        U.airplay && this.media.webkitShowPlaybackTargetPicker();
      } }, { key: "toggleControls", value: function value(e) {
        if (this.supported.ui && !this.isAudio) {
          var t = N(this.elements.container, this.config.classNames.hideControls),
              n = void 0 === e ? void 0 : !e,
              i = I(this.elements.container, this.config.classNames.hideControls, n);if (i && this.config.controls.includes("settings") && !p.empty(this.config.settings) && le.toggleMenu.call(this, !1), i !== t) {
            var o = i ? "controlshidden" : "controlsshown";w.call(this, this.media, o);
          }return !i;
        }return !1;
      } }, { key: "on", value: function value(e, t) {
        v.call(this, this.elements.container, e, t);
      } }, { key: "once", value: function value(e, t) {
        b.call(this, this.elements.container, e, t);
      } }, { key: "off", value: function value(e, t) {
        y(this.elements.container, e, t);
      } }, { key: "destroy", value: function value(e) {
        var t = this,
            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];if (this.ready) {
          var i = function i() {
            document.body.style.overflow = "", t.embed = null, n ? (Object.keys(t.elements).length && (k(t.elements.buttons.play), k(t.elements.captions), k(t.elements.controls), k(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), p.function(e) && e()) : (function () {
              this && this.eventListeners && (this.eventListeners.forEach(function (e) {
                var t = e.element,
                    n = e.type,
                    i = e.callback,
                    o = e.options;t.removeEventListener(n, i, o);
              }), this.eventListeners = []);
            }.call(t), S(t.elements.original, t.elements.container), w.call(t, t.elements.original, "destroyed", !0), p.function(e) && e.call(t.elements.original), t.ready = !1, setTimeout(function () {
              t.elements = null, t.media = null;
            }, 200));
          };this.stop(), this.isHTML5 ? (clearTimeout(this.timers.loading), _e.toggleNativeControls.call(this, !0), i()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && p.function(this.embed.destroy) && this.embed.destroy(), i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200));
        }
      } }, { key: "supports", value: function value(e) {
        return U.mime.call(this, e);
      } }, { key: "isHTML5", get: function get() {
        return Boolean(this.provider === fe.html5);
      } }, { key: "isEmbed", get: function get() {
        return Boolean(this.isYouTube || this.isVimeo);
      } }, { key: "isYouTube", get: function get() {
        return Boolean(this.provider === fe.youtube);
      } }, { key: "isVimeo", get: function get() {
        return Boolean(this.provider === fe.vimeo);
      } }, { key: "isVideo", get: function get() {
        return Boolean(this.type === pe.video);
      } }, { key: "isAudio", get: function get() {
        return Boolean(this.type === pe.audio);
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
          var t = p.number(e) && e > 0;this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"));
        }
      }, get: function get() {
        return Number(this.media.currentTime);
      } }, { key: "buffered", get: function get() {
        var e = this.media.buffered;return p.number(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0;
      } }, { key: "seeking", get: function get() {
        return Boolean(this.media.seeking);
      } }, { key: "duration", get: function get() {
        var e = parseFloat(this.config.duration),
            t = (this.media || {}).duration,
            n = p.number(t) && t !== 1 / 0 ? t : 0;return e || n;
      } }, { key: "volume", set: function set(e) {
        var t = e;p.string(t) && (t = Number(t)), p.number(t) || (t = this.storage.get("volume")), p.number(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !p.empty(e) && this.muted && t > 0 && (this.muted = !1);
      }, get: function get() {
        return Number(this.media.volume);
      } }, { key: "muted", set: function set(e) {
        var t = e;p.boolean(t) || (t = this.storage.get("muted")), p.boolean(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t;
      }, get: function get() {
        return Boolean(this.media.muted);
      } }, { key: "hasAudio", get: function get() {
        return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
      } }, { key: "speed", set: function set(e) {
        var t = null;p.number(e) && (t = e), p.number(t) || (t = this.storage.get("speed")), p.number(t) || (t = this.config.speed.selected), t < .1 && (t = .1), t > 2 && (t = 2), this.config.speed.options.includes(t) ? (this.config.speed.selected = t, this.media.playbackRate = t) : this.debug.warn("Unsupported speed (".concat(t, ")"));
      }, get: function get() {
        return Number(this.media.playbackRate);
      } }, { key: "quality", set: function set(e) {
        var t = this.config.quality,
            n = this.options.quality;if (n.length) {
          var i = [!p.empty(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(p.number);if (!n.includes(i)) {
            var o = function (e, t) {
              return p.array(e) && e.length ? e.reduce(function (e, n) {
                return Math.abs(n - t) < Math.abs(e - t) ? n : e;
              }) : null;
            }(n, i);this.debug.warn("Unsupported quality option: ".concat(i, ", using ").concat(o, " instead")), i = o;
          }t.selected = i, this.media.quality = i;
        }
      }, get: function get() {
        return this.media.quality;
      } }, { key: "loop", set: function set(e) {
        var t = p.boolean(e) ? e : this.config.loop.active;this.config.loop.active = t, this.media.loop = t;
      }, get: function get() {
        return Boolean(this.media.loop);
      } }, { key: "source", set: function set(e) {
        Le.change.call(this, e);
      }, get: function get() {
        return this.media.currentSrc;
      } }, { key: "poster", set: function set(e) {
        this.isVideo ? _e.setPoster.call(this, e, !1).catch(function () {}) : this.debug.warn("Poster can only be set for video");
      }, get: function get() {
        return this.isVideo ? this.media.getAttribute("poster") : null;
      } }, { key: "autoplay", set: function set(e) {
        var t = p.boolean(e) ? e : this.config.autoplay;this.config.autoplay = t;
      }, get: function get() {
        return Boolean(this.config.autoplay);
      } }, { key: "currentTrack", set: function set(e) {
        de.set.call(this, e, !1);
      }, get: function get() {
        var e = this.captions,
            t = e.toggled,
            n = e.currentTrack;return t ? n : -1;
      } }, { key: "language", set: function set(e) {
        de.setLanguage.call(this, e, !1);
      }, get: function get() {
        return (de.getCurrentTrack.call(this) || {}).language;
      } }, { key: "pip", set: function set(e) {
        var t = "picture-in-picture",
            n = "inline";if (U.pip) {
          var i = p.boolean(e) ? e : this.pip === n;this.media.webkitSetPresentationMode(i ? t : n);
        }
      }, get: function get() {
        return U.pip ? this.media.webkitPresentationMode : null;
      } }], [{ key: "supported", value: function value(e, t, n) {
        return U.check(e, t, n);
      } }, { key: "loadSprite", value: function value(e, t) {
        return ie(e, t);
      } }, { key: "setup", value: function value(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = null;return p.string(e) ? i = Array.from(document.querySelectorAll(e)) : p.nodeList(e) ? i = Array.from(e) : p.array(e) && (i = e.filter(p.element)), p.empty(i) ? null : i.map(function (e) {
          return new t(e, n);
        });
      } }]), t;
  }();return Oe.defaults = (De = he, JSON.parse(JSON.stringify(De))), Oe;
}), function (e) {
  "use strict";
  var t = {},
      n = ["xs", "sm", "md", "lg", "xl", "xxl"];function i() {
    var n = e("body");1 != e(".lv-screen-data").length && n.append('<div class="lv-screen-data"></div>');var i,
        o,
        r = window.innerWidth,
        s = window.innerHeight,
        a = e(window).width(),
        l = e(window).height();r < t.sm && (i = "xs"), r >= t.sm && r < t.md && (i = "sm"), r >= t.md && r < t.lg && (i = "md"), r >= t.lg && r < t.xl && (i = "lg"), r >= t.xl && (i = "xl"), a < t.sm && (o = "xs"), a >= t.sm && a < t.md && (o = "sm"), a >= t.md && a < t.lg && (o = "md"), a >= t.lg && a < t.xl && (o = "lg"), a >= t.xl && (o = "xl"), e(".lv-screen-data").html(a + " x " + l + "<br><small>" + r + " x " + s + "</small><br>" + i + "  [" + o + "]").css({ position: "fixed", top: 0, padding: "5px 10px", background: "rgba(0,0,0,0.5)", "font-family": "Helvetica Neue", "font-size": "14px", color: "white", "z-index": 2147483646 }).click(function () {
      n.toggleClass("developer");
    });
  }!function () {
    for (var i, o = "", r = window.getComputedStyle(document.getElementsByTagName("body")[0]).getPropertyValue("content").replace(/\\a/g, "").replace(/ /g, "").replace(/'/g, "").replace(/"/g, "").split("|"), s = 0; s < r.length; s++) {
      t[n[s]] = Number(r[s].replace("px", "")), o += "<tr><td>" + n[s] + "</td><td>" + r[s] + "</td></tr>";
    }i = '<table class="table breakpoints-table" style="width: 300px;">' + o + "</table>", e('[data-js="lv-responsive-table"]').append(i);
  }(), e("html[development]").length && (i(), e(window).resize(function () {
    i();
  }));
}(jQuery), function (e) {
  "use strict";
  var t = e("html"),
      n = (e(".lv-page"), e(".lv-off-canvas")),
      i = e(".dropdown", n),
      o = e("li:not(.has-dropdown) > a", i),
      r = e(".submenu-arrow");e("[data-menu-toggle]").click(function (n) {
    n.preventDefault(), t.toggleClass("has-open-menu"), e(".has-open-menu").length;
  }), r.click(function (t) {
    t.preventDefault(), t.stopPropagation(), e(this).parent().next(".dropdown").addClass("is-open");
  }), o.click(function (e) {
    t.removeClass("has-open-menu");
  }), i.click(function (t) {
    e(this).removeClass("is-open"), t.stopPropagation();
  });
}(jQuery), function (e) {
  "use strict";
  var t = e('a[href="/reports/"], a[href="/surfcams/"]'),
      n = e(".lv-nav .is-reports-mega-menu > .dropdown"),
      i = e("li", n);window.location.pathname.split("/")[1];function o(t) {
    return i.removeClass("active"), t.addClass("active"), function t(n) {
      if (n.hasClass("has-dropdown")) {
        var i = e("> .dropdown > li.has-dropdown:first-child", n);i.addClass("active"), t(i);
      }
    }(t), function e(t) {
      if (!t.parent().parent().hasClass("is-mega")) {
        var n = t.parent().parent();n.addClass("active"), e(n);
      }
    }(t), function () {
      var t = [];e(".lv-nav .is-mega .dropdown > li.active > .dropdown").each(function () {
        t.push(e(this).height());
      });var i = Math.max.apply(Math, t),
          o = i > 429 ? i : 429;n.height(o);
    }(), !1;
  }o(n.find("> li:first-child")), t.each(function () {
    e(this).click(function (e) {
      e.preventDefault();
    });
  }), i.on("click", function (t) {
    var n = e(this);if (n.hasClass("has-dropdown")) return o(n), !1;var i = n.find("a").attr("href");window.location = i;
  });
}(jQuery), $(window).on("load", function () {
  $("html").addClass("has-loaded");
}), $(function () {
  $('[data-toggle="tooltip"]').tooltip(), setPagePaddingTop(), initHeadroom();
}), $(".page-state-switcher input").click(function (e) {
  var t = $("body"),
      n = $(this),
      i = n.attr("value");n.is(":checked") ? t.addClass(i) : t.removeClass(i), setPagePaddingTop(), initHeadroom();
}), $("[data-back-top]").click(function () {
  $.scrollTo(0, 500);
});var $lvPage = $(".lv-page"),
    $globalHeader = $(".global-header");function setPagePaddingTop() {
  $lvPage.css("paddingTop", $globalHeader.height() + 40);
}function initHeadroom() {
  var _$$headroom;

  $(".lv-page, .btn-back-top").headroom((_$$headroom = { offset: $(".global-header-top").height(), tolerance: 0 }, _defineProperty(_$$headroom, "tolerance", { up: 5, down: 0 }), _defineProperty(_$$headroom, "classes", { initial: "headroom", pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", bottom: "headroom--bottom", notBottom: "headroom--not-bottom" }), _defineProperty(_$$headroom, "onPin", function onPin() {}), _defineProperty(_$$headroom, "onUnpin", function onUnpin() {}), _defineProperty(_$$headroom, "onTop", setPagePaddingTop), _defineProperty(_$$headroom, "onNotTop", function onNotTop() {}), _defineProperty(_$$headroom, "onBottom", function onBottom() {}), _defineProperty(_$$headroom, "onNotBottom", function onNotBottom() {}), _$$headroom));
}$(window).on("resize", setPagePaddingTop);
