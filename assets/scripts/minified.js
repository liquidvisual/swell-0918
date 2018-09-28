var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function launchSlider() {
  $("[data-thumb-slider]").each(function () {
    var e = $(this),
        t = e.parent().find(".thumb-slider-prev-btn"),
        n = e.parent().find(".thumb-slider-next-btn"),
        i = e.flickity({ adaptiveHeight: !0, autoPlay: !1, cellAlign: "left", contain: !0, dragThreshold: 3, freeScroll: !0, freeScrollFriction: .075, friction: .28, imagesLoaded: !0, pageDots: !1, prevNextButtons: !1, pauseAutoPlayOnHover: !1, selectedAttraction: .025, watchCSS: !0, wrapAround: !1 });t.on("click", function () {
      i.flickity("previous");
    }), n.on("click", function () {
      i.flickity("next");
    });
  });
}!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.axios = t() : e.axios = t();
}(this, function () {
  return function (e) {
    var t = {};function n(i) {
      if (t[i]) return t[i].exports;var r = t[i] = { exports: {}, id: i, loaded: !1 };return e[i].call(r.exports, r, r.exports, n), r.loaded = !0, r.exports;
    }return n.m = e, n.c = t, n.p = "", n(0);
  }([function (e, t, n) {
    e.exports = n(1);
  }, function (e, t, n) {
    "use strict";
    var i = n(2),
        r = n(3),
        o = n(5),
        s = n(6);function a(e) {
      var t = new o(e),
          n = r(o.prototype.request, t);return i.extend(n, o.prototype, t), i.extend(n, t), n;
    }var l = a(s);l.Axios = o, l.create = function (e) {
      return a(i.merge(s, e));
    }, l.Cancel = n(23), l.CancelToken = n(24), l.isCancel = n(20), l.all = function (e) {
      return Promise.all(e);
    }, l.spread = n(25), e.exports = l, e.exports.default = l;
  }, function (e, t, n) {
    "use strict";
    var i = n(3),
        r = n(4),
        o = Object.prototype.toString;function s(e) {
      return "[object Array]" === o.call(e);
    }function a(e) {
      return null !== e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
    }function l(e) {
      return "[object Function]" === o.call(e);
    }function c(e, t) {
      if (null !== e && void 0 !== e) if ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && (e = [e]), s(e)) for (var n = 0, i = e.length; n < i; n++) {
        t.call(null, e[n], n, e);
      } else for (var r in e) {
        Object.prototype.hasOwnProperty.call(e, r) && t.call(null, e[r], r, e);
      }
    }e.exports = { isArray: s, isArrayBuffer: function isArrayBuffer(e) {
        return "[object ArrayBuffer]" === o.call(e);
      }, isBuffer: r, isFormData: function isFormData(e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      }, isArrayBufferView: function isArrayBufferView(e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
      }, isString: function isString(e) {
        return "string" == typeof e;
      }, isNumber: function isNumber(e) {
        return "number" == typeof e;
      }, isObject: a, isUndefined: function isUndefined(e) {
        return void 0 === e;
      }, isDate: function isDate(e) {
        return "[object Date]" === o.call(e);
      }, isFile: function isFile(e) {
        return "[object File]" === o.call(e);
      }, isBlob: function isBlob(e) {
        return "[object Blob]" === o.call(e);
      }, isFunction: l, isStream: function isStream(e) {
        return a(e) && l(e.pipe);
      }, isURLSearchParams: function isURLSearchParams(e) {
        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
      }, isStandardBrowserEnv: function isStandardBrowserEnv() {
        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
      }, forEach: c, merge: function e() {
        var t = {};function n(n, i) {
          "object" == _typeof(t[i]) && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? t[i] = e(t[i], n) : t[i] = n;
        }for (var i = 0, r = arguments.length; i < r; i++) {
          c(arguments[i], n);
        }return t;
      }, extend: function extend(e, t, n) {
        return c(t, function (t, r) {
          e[r] = n && "function" == typeof t ? i(t, n) : t;
        }), e;
      }, trim: function trim(e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "");
      } };
  }, function (e, t) {
    "use strict";
    e.exports = function (e, t) {
      return function () {
        for (var n = new Array(arguments.length), i = 0; i < n.length; i++) {
          n[i] = arguments[i];
        }return e.apply(t, n);
      };
    };
  }, function (e, t) {
    function n(e) {
      return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
    }e.exports = function (e) {
      return null != e && (n(e) || function (e) {
        return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0));
      }(e) || !!e._isBuffer);
    };
  }, function (e, t, n) {
    "use strict";
    var i = n(6),
        r = n(2),
        o = n(17),
        s = n(18);function a(e) {
      this.defaults = e, this.interceptors = { request: new o(), response: new o() };
    }a.prototype.request = function (e) {
      "string" == typeof e && (e = r.merge({ url: arguments[0] }, arguments[1])), (e = r.merge(i, { method: "get" }, this.defaults, e)).method = e.method.toLowerCase();var t = [s, void 0],
          n = Promise.resolve(e);for (this.interceptors.request.forEach(function (e) {
        t.unshift(e.fulfilled, e.rejected);
      }), this.interceptors.response.forEach(function (e) {
        t.push(e.fulfilled, e.rejected);
      }); t.length;) {
        n = n.then(t.shift(), t.shift());
      }return n;
    }, r.forEach(["delete", "get", "head", "options"], function (e) {
      a.prototype[e] = function (t, n) {
        return this.request(r.merge(n || {}, { method: e, url: t }));
      };
    }), r.forEach(["post", "put", "patch"], function (e) {
      a.prototype[e] = function (t, n, i) {
        return this.request(r.merge(i || {}, { method: e, url: t, data: n }));
      };
    }), e.exports = a;
  }, function (e, t, n) {
    "use strict";
    var i = n(2),
        r = n(7),
        o = { "Content-Type": "application/x-www-form-urlencoded" };function s(e, t) {
      !i.isUndefined(e) && i.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
    }var a,
        l = { adapter: ("undefined" != typeof XMLHttpRequest ? a = n(8) : "undefined" != typeof process && (a = n(8)), a), transformRequest: [function (e, t) {
        return r(t, "Content-Type"), i.isFormData(e) || i.isArrayBuffer(e) || i.isBuffer(e) || i.isStream(e) || i.isFile(e) || i.isBlob(e) ? e : i.isArrayBufferView(e) ? e.buffer : i.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : i.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e;
      }], transformResponse: [function (e) {
        if ("string" == typeof e) try {
          e = JSON.parse(e);
        } catch (e) {}return e;
      }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, validateStatus: function validateStatus(e) {
        return e >= 200 && e < 300;
      } };l.headers = { common: { Accept: "application/json, text/plain, */*" } }, i.forEach(["delete", "get", "head"], function (e) {
      l.headers[e] = {};
    }), i.forEach(["post", "put", "patch"], function (e) {
      l.headers[e] = i.merge(o);
    }), e.exports = l;
  }, function (e, t, n) {
    "use strict";
    var i = n(2);e.exports = function (e, t) {
      i.forEach(e, function (n, i) {
        i !== t && i.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[i]);
      });
    };
  }, function (e, t, n) {
    "use strict";
    var i = n(2),
        r = n(9),
        o = n(12),
        s = n(13),
        a = n(14),
        l = n(10),
        c = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(15);e.exports = function (e) {
      return new Promise(function (t, u) {
        var d = e.data,
            h = e.headers;i.isFormData(d) && delete h["Content-Type"];var f = new XMLHttpRequest(),
            p = "onreadystatechange",
            m = !1;if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in f || a(e.url) || (f = new window.XDomainRequest(), p = "onload", m = !0, f.onprogress = function () {}, f.ontimeout = function () {}), e.auth) {
          var g = e.auth.username || "",
              v = e.auth.password || "";h.Authorization = "Basic " + c(g + ":" + v);
        }if (f.open(e.method.toUpperCase(), o(e.url, e.params, e.paramsSerializer), !0), f.timeout = e.timeout, f[p] = function () {
          if (f && (4 === f.readyState || m) && (0 !== f.status || f.responseURL && 0 === f.responseURL.indexOf("file:"))) {
            var n = "getAllResponseHeaders" in f ? s(f.getAllResponseHeaders()) : null,
                i = { data: e.responseType && "text" !== e.responseType ? f.response : f.responseText, status: 1223 === f.status ? 204 : f.status, statusText: 1223 === f.status ? "No Content" : f.statusText, headers: n, config: e, request: f };r(t, u, i), f = null;
          }
        }, f.onerror = function () {
          u(l("Network Error", e, null, f)), f = null;
        }, f.ontimeout = function () {
          u(l("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", f)), f = null;
        }, i.isStandardBrowserEnv()) {
          var y = n(16),
              b = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? y.read(e.xsrfCookieName) : void 0;b && (h[e.xsrfHeaderName] = b);
        }if ("setRequestHeader" in f && i.forEach(h, function (e, t) {
          void 0 === d && "content-type" === t.toLowerCase() ? delete h[t] : f.setRequestHeader(t, e);
        }), e.withCredentials && (f.withCredentials = !0), e.responseType) try {
          f.responseType = e.responseType;
        } catch (t) {
          if ("json" !== e.responseType) throw t;
        }"function" == typeof e.onDownloadProgress && f.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && f.upload && f.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
          f && (f.abort(), u(e), f = null);
        }), void 0 === d && (d = null), f.send(d);
      });
    };
  }, function (e, t, n) {
    "use strict";
    var i = n(10);e.exports = function (e, t, n) {
      var r = n.config.validateStatus;n.status && r && !r(n.status) ? t(i("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n);
    };
  }, function (e, t, n) {
    "use strict";
    var i = n(11);e.exports = function (e, t, n, r, o) {
      var s = new Error(e);return i(s, t, n, r, o);
    };
  }, function (e, t) {
    "use strict";
    e.exports = function (e, t, n, i, r) {
      return e.config = t, n && (e.code = n), e.request = i, e.response = r, e;
    };
  }, function (e, t, n) {
    "use strict";
    var i = n(2);function r(e) {
      return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }e.exports = function (e, t, n) {
      if (!t) return e;var o;if (n) o = n(t);else if (i.isURLSearchParams(t)) o = t.toString();else {
        var s = [];i.forEach(t, function (e, t) {
          null !== e && void 0 !== e && (i.isArray(e) ? t += "[]" : e = [e], i.forEach(e, function (e) {
            i.isDate(e) ? e = e.toISOString() : i.isObject(e) && (e = JSON.stringify(e)), s.push(r(t) + "=" + r(e));
          }));
        }), o = s.join("&");
      }return o && (e += (-1 === e.indexOf("?") ? "?" : "&") + o), e;
    };
  }, function (e, t, n) {
    "use strict";
    var i = n(2),
        r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];e.exports = function (e) {
      var t,
          n,
          o,
          s = {};return e ? (i.forEach(e.split("\n"), function (e) {
        if (o = e.indexOf(":"), t = i.trim(e.substr(0, o)).toLowerCase(), n = i.trim(e.substr(o + 1)), t) {
          if (s[t] && r.indexOf(t) >= 0) return;s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n;
        }
      }), s) : s;
    };
  }, function (e, t, n) {
    "use strict";
    var i = n(2);e.exports = i.isStandardBrowserEnv() ? function () {
      var e,
          t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a");function r(e) {
        var i = e;return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname };
      }return e = r(window.location.href), function (t) {
        var n = i.isString(t) ? r(t) : t;return n.protocol === e.protocol && n.host === e.host;
      };
    }() : function () {
      return !0;
    };
  }, function (e, t) {
    "use strict";
    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function i() {
      this.message = "String contains an invalid character";
    }i.prototype = new Error(), i.prototype.code = 5, i.prototype.name = "InvalidCharacterError", e.exports = function (e) {
      for (var t, r, o = String(e), s = "", a = 0, l = n; o.charAt(0 | a) || (l = "=", a % 1); s += l.charAt(63 & t >> 8 - a % 1 * 8)) {
        if ((r = o.charCodeAt(a += .75)) > 255) throw new i();t = t << 8 | r;
      }return s;
    };
  }, function (e, t, n) {
    "use strict";
    var i = n(2);e.exports = i.isStandardBrowserEnv() ? { write: function write(e, t, n, r, o, s) {
        var a = [];a.push(e + "=" + encodeURIComponent(t)), i.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), i.isString(r) && a.push("path=" + r), i.isString(o) && a.push("domain=" + o), !0 === s && a.push("secure"), document.cookie = a.join("; ");
      }, read: function read(e) {
        var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));return t ? decodeURIComponent(t[3]) : null;
      }, remove: function remove(e) {
        this.write(e, "", Date.now() - 864e5);
      } } : { write: function write() {}, read: function read() {
        return null;
      }, remove: function remove() {} };
  }, function (e, t, n) {
    "use strict";
    var i = n(2);function r() {
      this.handlers = [];
    }r.prototype.use = function (e, t) {
      return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1;
    }, r.prototype.eject = function (e) {
      this.handlers[e] && (this.handlers[e] = null);
    }, r.prototype.forEach = function (e) {
      i.forEach(this.handlers, function (t) {
        null !== t && e(t);
      });
    }, e.exports = r;
  }, function (e, t, n) {
    "use strict";
    var i = n(2),
        r = n(19),
        o = n(20),
        s = n(6),
        a = n(21),
        l = n(22);function c(e) {
      e.cancelToken && e.cancelToken.throwIfRequested();
    }e.exports = function (e) {
      return c(e), e.baseURL && !a(e.url) && (e.url = l(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = r(e.data, e.headers, e.transformRequest), e.headers = i.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
        delete e.headers[t];
      }), (e.adapter || s.adapter)(e).then(function (t) {
        return c(e), t.data = r(t.data, t.headers, e.transformResponse), t;
      }, function (t) {
        return o(t) || (c(e), t && t.response && (t.response.data = r(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
      });
    };
  }, function (e, t, n) {
    "use strict";
    var i = n(2);e.exports = function (e, t, n) {
      return i.forEach(n, function (n) {
        e = n(e, t);
      }), e;
    };
  }, function (e, t) {
    "use strict";
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  }, function (e, t) {
    "use strict";
    e.exports = function (e) {
      return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
      );
    };
  }, function (e, t) {
    "use strict";
    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
  }, function (e, t) {
    "use strict";
    function n(e) {
      this.message = e;
    }n.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }, n.prototype.__CANCEL__ = !0, e.exports = n;
  }, function (e, t, n) {
    "use strict";
    var i = n(23);function r(e) {
      if ("function" != typeof e) throw new TypeError("executor must be a function.");var t;this.promise = new Promise(function (e) {
        t = e;
      });var n = this;e(function (e) {
        n.reason || (n.reason = new i(e), t(n.reason));
      });
    }r.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }, r.source = function () {
      var e;return { token: new r(function (t) {
          e = t;
        }), cancel: e };
    }, e.exports = r;
  }, function (e, t) {
    "use strict";
    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  }]);
}), function (e, t) {
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
  }var _ = function _(e, t) {
    return new _.fn.init(e, t);
  },
      w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function E(e) {
    var t = !!e && "length" in e && e.length,
        n = b(e);return !m(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }_.fn = _.prototype = { jquery: "3.3.1", constructor: _, length: 0, toArray: function toArray() {
      return o.call(this);
    }, get: function get(e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    }, pushStack: function pushStack(e) {
      var t = _.merge(this.constructor(), e);return t.prevObject = this, t;
    }, each: function each(e) {
      return _.each(this, e);
    }, map: function map(e) {
      return this.pushStack(_.map(this, function (t, n) {
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
    }, push: a, sort: n.sort, splice: n.splice }, _.extend = _.fn.extend = function () {
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
        n = s[t], s !== (i = e[t]) && (c && i && (_.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && _.isPlainObject(n) ? n : {}, s[t] = _.extend(c, o, i)) : void 0 !== i && (s[t] = i));
      }
    }return s;
  }, _.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
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
          i = 0;if (E(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) {} else for (i in e) {
        if (!1 === t.call(e[i], i, e[i])) break;
      }return e;
    }, trim: function trim(e) {
      return null == e ? "" : (e + "").replace(w, "");
    }, makeArray: function makeArray(e, t) {
      var n = t || [];return null != e && (E(Object(e)) ? _.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n;
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
          a = [];if (E(e)) for (i = e.length; o < i; o++) {
        null != (r = t(e[o], o, n)) && a.push(r);
      } else for (o in e) {
        null != (r = t(e[o], o, n)) && a.push(r);
      }return s.apply([], a);
    }, guid: 1, support: p }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = n[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    c["[object " + t + "]"] = t.toLowerCase();
  });var T = function (e) {
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
        _ = "sizzle" + 1 * new Date(),
        w = e.document,
        E = 0,
        T = 0,
        k = se(),
        S = se(),
        x = se(),
        C = function C(e, t) {
      return e === t && (d = !0), 0;
    },
        D = {}.hasOwnProperty,
        A = [],
        P = A.pop,
        M = A.push,
        I = A.push,
        O = A.slice,
        L = function L(e, t) {
      for (var n = 0, i = e.length; n < i; n++) {
        if (e[n] === t) return n;
      }return -1;
    },
        N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        j = "[\\x20\\t\\r\\n\\f]",
        H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        F = "\\[" + j + "*(" + H + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + j + "*\\]",
        R = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
        q = new RegExp(j + "+", "g"),
        W = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
        Y = new RegExp("^" + j + "*," + j + "*"),
        z = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
        U = new RegExp("=" + j + "*([^\\]'\"]*?)" + j + "*\\]", "g"),
        B = new RegExp(R),
        V = new RegExp("^" + H + "$"),
        G = { ID: new RegExp("^#(" + H + ")"), CLASS: new RegExp("^\\.(" + H + ")"), TAG: new RegExp("^(" + H + "|[*])"), ATTR: new RegExp("^" + F), PSEUDO: new RegExp("^" + R), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"), bool: new RegExp("^(?:" + N + ")$", "i"), needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i") },
        K = /^(?:input|select|textarea|button)$/i,
        $ = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Z = /[+~]/,
        J = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"),
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
      I.apply(A = O.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
    } catch (e) {
      I = { apply: A.length ? function (e, t) {
          M.apply(e, O.call(t));
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
          E = t ? t.nodeType : 9;if (i = i || [], "string" != typeof e || !e || 1 !== E && 9 !== E && 11 !== E) return i;if (!r && ((t ? t.ownerDocument || t : w) !== f && h(t), t = t || f, m)) {
        if (11 !== E && (d = X.exec(e))) if (o = d[1]) {
          if (9 === E) {
            if (!(c = t.getElementById(o))) return i;if (c.id === o) return i.push(c), i;
          } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return i.push(c), i;
        } else {
          if (d[2]) return I.apply(i, t.getElementsByTagName(e)), i;if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return I.apply(i, t.getElementsByClassName(o)), i;
        }if (n.qsa && !x[e + " "] && (!g || !g.test(e))) {
          if (1 !== E) y = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
            for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = _), a = (p = s(e)).length; a--;) {
              p[a] = "#" + u + " " + ve(p[a]);
            }v = p.join(","), y = Z.test(e) && me(t.parentNode) || t;
          }if (v) try {
            return I.apply(i, y.querySelectorAll(v)), i;
          } catch (e) {} finally {
            u === _ && t.removeAttribute("id");
          }
        }
      }return l(e.replace(W, "$1"), t, i, r);
    }function se() {
      var e = [];return function t(n, r) {
        return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r;
      };
    }function ae(e) {
      return e[_] = !0, e;
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
          s = e ? e.ownerDocument || e : w;return s !== f && 9 === s.nodeType && s.documentElement ? (p = (f = s).documentElement, m = !o(f), w !== f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ie, !1) : r.attachEvent && r.attachEvent("onunload", ie)), n.attributes = le(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = le(function (e) {
        return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = Q.test(f.getElementsByClassName), n.getById = le(function (e) {
        return p.appendChild(e).id = _, !f.getElementsByName || !f.getElementsByName(_).length;
      }), n.getById ? (i.filter.ID = function (e) {
        var t = e.replace(J, ee);return function (e) {
          return e.getAttribute("id") === t;
        };
      }, i.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && m) {
          var n = t.getElementById(e);return n ? [n] : [];
        }
      }) : (i.filter.ID = function (e) {
        var t = e.replace(J, ee);return function (e) {
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
      }, v = [], g = [], (n.qsa = Q.test(f.querySelectorAll)) && (le(function (e) {
        p.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + j + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + j + "*(?:value|" + N + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || g.push(".#.+[+~]");
      }), le(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = f.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + j + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:");
      })), (n.matchesSelector = Q.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function (e) {
        n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", R);
      }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(p.compareDocumentPosition), b = t || Q.test(p.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            i = t && t.parentNode;return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) {
          if (t === e) return !0;
        }return !1;
      }, C = t ? function (e, t) {
        if (e === t) return d = !0, 0;var i = !e.compareDocumentPosition - !t.compareDocumentPosition;return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === f || e.ownerDocument === w && b(w, e) ? -1 : t === f || t.ownerDocument === w && b(w, t) ? 1 : u ? L(u, e) - L(u, t) : 0 : 4 & i ? -1 : 1);
      } : function (e, t) {
        if (e === t) return d = !0, 0;var n,
            i = 0,
            r = e.parentNode,
            o = t.parentNode,
            s = [e],
            a = [t];if (!r || !o) return e === f ? -1 : t === f ? 1 : r ? -1 : o ? 1 : u ? L(u, e) - L(u, t) : 0;if (r === o) return ue(e, t);for (n = e; n = n.parentNode;) {
          s.unshift(n);
        }for (n = t; n = n.parentNode;) {
          a.unshift(n);
        }for (; s[i] === a[i];) {
          i++;
        }return i ? ue(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0;
      }, f) : f;
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== f && h(e), t = t.replace(U, "='$1']"), n.matchesSelector && m && !x[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
        var i = y.call(e, t);if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
      } catch (e) {}return oe(t, f, null, [e]).length > 0;
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== f && h(e), b(e, t);
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== f && h(e);var r = i.attrHandle[t.toLowerCase()],
          o = r && D.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, oe.escape = function (e) {
      return (e + "").replace(te, ne);
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, oe.uniqueSort = function (e) {
      var t,
          i = [],
          r = 0,
          o = 0;if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(C), d) {
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
    }, (i = oe.selectors = { cacheLength: 50, createPseudo: ae, match: G, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(J, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && B.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(J, ee).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = k[e + " "];return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && k(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, t, n) {
          return function (i) {
            var r = oe.attr(i, e);return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(q, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"));
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
                for (b = (f = (c = (u = (d = (h = g)[_] || (h[_] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === E && c[1]) && c[2], h = f && g.childNodes[f]; h = ++f && h && h[m] || (b = f = 0) || p.pop();) {
                  if (1 === h.nodeType && ++b && h === t) {
                    u[e] = [E, f, b];break;
                  }
                }
              } else if (y && (b = f = (c = (u = (d = (h = t)[_] || (h[_] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === E && c[1]), !1 === b) for (; (h = ++f && h && h[m] || (b = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((u = (d = h[_] || (h[_] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [E, b]), h !== t));) {}return (b -= r) === i || b % i == 0 && b / i >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, t) {
          var n,
              r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);return r[_] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, n) {
            for (var i, o = r(e, t), s = o.length; s--;) {
              e[i = L(e, o[s])] = !(n[i] = o[s]);
            }
          }) : function (e) {
            return r(e, 0, n);
          }) : r;
        } }, pseudos: { not: ae(function (e) {
          var t = [],
              n = [],
              i = a(e.replace(W, "$1"));return i[_] ? ae(function (e, t, n, r) {
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
          return e = e.replace(J, ee), function (t) {
            return (t.textContent || t.innerText || r(t)).indexOf(e) > -1;
          };
        }), lang: ae(function (e) {
          return V.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(J, ee).toLowerCase(), function (t) {
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
          return $.test(e.nodeName);
        }, input: function input(e) {
          return K.test(e.nodeName);
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
          a = T++;return t.first ? function (t, n, r) {
        for (; t = t[i];) {
          if (1 === t.nodeType || s) return e(t, n, r);
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
          if (1 === t.nodeType || s) if (u = (d = t[_] || (t[_] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;else {
            if ((c = u[o]) && c[0] === E && c[1] === a) return h[2] = c[2];if (u[o] = h, h[2] = e(t, n, l)) return !0;
          }
        }return !1;
      };
    }function be(e) {
      return e.length > 1 ? function (t, n, i) {
        for (var r = e.length; r--;) {
          if (!e[r](t, n, i)) return !1;
        }return !0;
      } : e[0];
    }function _e(e, t, n, i, r) {
      for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++) {
        (o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
      }return s;
    }function we(e, t, n, i, r, o) {
      return i && !i[_] && (i = we(i)), r && !r[_] && (r = we(r, o)), ae(function (o, s, a, l) {
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
            g = !e || !o && t ? m : _e(m, h, e, a, l),
            v = n ? r || (o ? e : p || i) ? [] : s : g;if (n && n(g, v, a, l), i) for (c = _e(v, f), i(c, [], a, l), u = c.length; u--;) {
          (d = c[u]) && (v[f[u]] = !(g[f[u]] = d));
        }if (o) {
          if (r || e) {
            if (r) {
              for (c = [], u = v.length; u--;) {
                (d = v[u]) && c.push(g[u] = d);
              }r(null, v = [], c, l);
            }for (u = v.length; u--;) {
              (d = v[u]) && (c = r ? L(o, d) : h[u]) > -1 && (o[c] = !(s[c] = d));
            }
          }
        } else v = _e(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, l) : I.apply(s, v);
      });
    }function Ee(e) {
      for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = ye(function (e) {
        return e === t;
      }, a, !0), d = ye(function (e) {
        return L(t, e) > -1;
      }, a, !0), h = [function (e, n, i) {
        var r = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));return t = null, r;
      }]; l < o; l++) {
        if (n = i.relative[e[l].type]) h = [ye(be(h), n)];else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
            for (r = ++l; r < o && !i.relative[e[r].type]; r++) {}return we(l > 1 && be(h), l > 1 && ve(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(W, "$1"), n, l < r && Ee(e.slice(l, r)), r < o && Ee(e = e.slice(r)), r < o && ve(e));
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
          u = S[e + " "];if (u) return t ? 0 : u.slice(0);for (a = e, l = [], c = i.preFilter; a;) {
        for (s in n && !(r = Y.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), o.push({ value: n, type: r[0].replace(W, " ") }), a = a.slice(n.length)), i.filter) {
          !(r = G[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({ value: n, type: s, matches: r }), a = a.slice(n.length));
        }if (!n) break;
      }return t ? a.length : a ? oe.error(e) : S(e, l).slice(0);
    }, a = oe.compile = function (e, t) {
      var n,
          r = [],
          o = [],
          a = x[e + " "];if (!a) {
        for (t || (t = s(e)), n = t.length; n--;) {
          (a = Ee(t[n]))[_] ? r.push(a) : o.push(a);
        }(a = x(e, function (e, t) {
          var n = t.length > 0,
              r = e.length > 0,
              o = function o(_o, s, a, l, u) {
            var d,
                p,
                g,
                v = 0,
                y = "0",
                b = _o && [],
                _ = [],
                w = c,
                T = _o || r && i.find.TAG("*", u),
                k = E += null == w ? 1 : Math.random() || .1,
                S = T.length;for (u && (c = s === f || s || u); y !== S && null != (d = T[y]); y++) {
              if (r && d) {
                for (p = 0, s || d.ownerDocument === f || (h(d), a = !m); g = e[p++];) {
                  if (g(d, s || f, a)) {
                    l.push(d);break;
                  }
                }u && (E = k);
              }n && ((d = !g && d) && v--, _o && b.push(d));
            }if (v += y, n && y !== v) {
              for (p = 0; g = t[p++];) {
                g(b, _, s, a);
              }if (_o) {
                if (v > 0) for (; y--;) {
                  b[y] || _[y] || (_[y] = P.call(l));
                }_ = _e(_);
              }I.apply(l, _), u && !_o && _.length > 0 && v + t.length > 1 && oe.uniqueSort(l);
            }return u && (E = k, c = w), b;
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
          if (!(t = (i.find.ID(c.matches[0].replace(J, ee), t) || [])[0])) return n;h && (t = t.parentNode), e = e.slice(l.shift().value.length);
        }for (o = G.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !i.relative[u = c.type]);) {
          if ((d = i.find[u]) && (r = d(c.matches[0].replace(J, ee), Z.test(l[0].type) && me(t.parentNode) || t))) {
            if (l.splice(o, 1), !(e = r.length && ve(l))) return I.apply(n, r), n;break;
          }
        }
      }return (h || a(e, f))(r, t, !m, n, !t || Z.test(e) && me(t.parentNode) || t), n;
    }, n.sortStable = _.split("").sort(C).join("") === _, n.detectDuplicates = !!d, h(), n.sortDetached = le(function (e) {
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
    }) || ce(N, function (e, t, n) {
      var i;if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
    }), oe;
  }(e);_.find = T, _.expr = T.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = T.uniqueSort, _.text = T.getText, _.isXMLDoc = T.isXML, _.contains = T.contains, _.escapeSelector = T.escape;var k = function k(e, t, n) {
    for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
      if (1 === e.nodeType) {
        if (r && _(e).is(n)) break;i.push(e);
      }
    }return i;
  },
      S = function S(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }return n;
  },
      x = _.expr.match.needsContext;function C(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function A(e, t, n) {
    return m(t) ? _.grep(e, function (e, i) {
      return !!t.call(e, i, e) !== n;
    }) : t.nodeType ? _.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? _.grep(e, function (e) {
      return l.call(t, e) > -1 !== n;
    }) : _.filter(t, e, n);
  }_.filter = function (e, t, n) {
    var i = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? _.find.matchesSelector(i, e) ? [i] : [] : _.find.matches(e, _.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, _.fn.extend({ find: function find(e) {
      var t,
          n,
          i = this.length,
          r = this;if ("string" != typeof e) return this.pushStack(_(e).filter(function () {
        for (t = 0; t < i; t++) {
          if (_.contains(r[t], this)) return !0;
        }
      }));for (n = this.pushStack([]), t = 0; t < i; t++) {
        _.find(e, r[t], n);
      }return i > 1 ? _.uniqueSort(n) : n;
    }, filter: function filter(e) {
      return this.pushStack(A(this, e || [], !1));
    }, not: function not(e) {
      return this.pushStack(A(this, e || [], !0));
    }, is: function is(e) {
      return !!A(this, "string" == typeof e && x.test(e) ? _(e) : e || [], !1).length;
    } });var P,
      M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(_.fn.init = function (e, t, n) {
    var r, o;if (!e) return this;if (n = n || P, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : M.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (r[1]) {
        if (t = t instanceof _ ? t[0] : t, _.merge(this, _.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), D.test(r[1]) && _.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }return this;
      }return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this;
    }return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(_) : _.makeArray(e, this);
  }).prototype = _.fn, P = _(i);var I = /^(?:parents|prev(?:Until|All))/,
      O = { children: !0, contents: !0, next: !0, prev: !0 };function L(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) {}return e;
  }_.fn.extend({ has: function has(e) {
      var t = _(e, this),
          n = t.length;return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (_.contains(this, t[e])) return !0;
        }
      });
    }, closest: function closest(e, t) {
      var n,
          i = 0,
          r = this.length,
          o = [],
          s = "string" != typeof e && _(e);if (!x.test(e)) for (; i < r; i++) {
        for (n = this[i]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
            o.push(n);break;
          }
        }
      }return this.pushStack(o.length > 1 ? _.uniqueSort(o) : o);
    }, index: function index(e) {
      return e ? "string" == typeof e ? l.call(_(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } }), _.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return k(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return k(e, "parentNode", n);
    }, next: function next(e) {
      return L(e, "nextSibling");
    }, prev: function prev(e) {
      return L(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return k(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return k(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return k(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return k(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return S(e.firstChild);
    }, contents: function contents(e) {
      return C(e, "iframe") ? e.contentDocument : (C(e, "template") && (e = e.content || e), _.merge([], e.childNodes));
    } }, function (e, t) {
    _.fn[e] = function (n, i) {
      var r = _.map(this, t, n);return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = _.filter(i, r)), this.length > 1 && (O[e] || _.uniqueSort(r), I.test(e) && r.reverse()), this.pushStack(r);
    };
  });var N = /[^\x20\t\r\n\f]+/g;function j(e) {
    return e;
  }function H(e) {
    throw e;
  }function F(e, t, n, i) {
    var r;try {
      e && m(r = e.promise) ? r.call(e).done(t).fail(n) : e && m(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }_.Callbacks = function (e) {
    e = "string" == typeof e ? function (e) {
      var t = {};return _.each(e.match(N) || [], function (e, n) {
        t[n] = !0;
      }), t;
    }(e) : _.extend({}, e);var t,
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
          _.each(n, function (n, i) {
            m(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== b(i) && t(i);
          });
        }(arguments), n && !t && l()), this;
      }, remove: function remove() {
        return _.each(arguments, function (e, t) {
          for (var n; (n = _.inArray(t, o, n)) > -1;) {
            o.splice(n, 1), n <= a && a--;
          }
        }), this;
      }, has: function has(e) {
        return e ? _.inArray(e, o) > -1 : o.length > 0;
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
  }, _.extend({ Deferred: function Deferred(t) {
      var n = [["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2], ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          r = { state: function state() {
          return i;
        }, always: function always() {
          return o.done(arguments).fail(arguments), this;
        }, catch: function _catch(e) {
          return r.then(null, e);
        }, pipe: function pipe() {
          var e = arguments;return _.Deferred(function (t) {
            _.each(n, function (n, i) {
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
                  if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");c = e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, m(c) ? r ? c.call(e, s(o, n, j, r), s(o, n, H, r)) : (o++, c.call(e, s(o, n, j, r), s(o, n, H, r), s(o, n, j, n.notifyWith))) : (i !== j && (a = void 0, l = [e]), (r || n.resolveWith)(a, l));
                }
              },
                  u = r ? c : function () {
                try {
                  c();
                } catch (e) {
                  _.Deferred.exceptionHook && _.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= o && (i !== H && (a = void 0, l = [e]), n.rejectWith(a, l));
                }
              };t ? u() : (_.Deferred.getStackHook && (u.stackTrace = _.Deferred.getStackHook()), e.setTimeout(u));
            };
          }return _.Deferred(function (e) {
            n[0][3].add(s(0, e, m(r) ? r : j, e.notifyWith)), n[1][3].add(s(0, e, m(t) ? t : j)), n[2][3].add(s(0, e, m(i) ? i : H));
          }).promise();
        }, promise: function promise(e) {
          return null != e ? _.extend(e, r) : r;
        } },
          o = {};return _.each(n, function (e, t) {
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
          s = _.Deferred(),
          a = function a(e) {
        return function (n) {
          i[e] = this, r[e] = arguments.length > 1 ? o.call(arguments) : n, --t || s.resolveWith(i, r);
        };
      };if (t <= 1 && (F(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || m(r[n] && r[n].then))) return s.then();for (; n--;) {
        F(r[n], a(n), s.reject);
      }return s.promise();
    } });var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;_.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && R.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, _.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };var q = _.Deferred();function W() {
    i.removeEventListener("DOMContentLoaded", W), e.removeEventListener("load", W), _.ready();
  }_.fn.ready = function (e) {
    return q.then(e).catch(function (e) {
      _.readyException(e);
    }), this;
  }, _.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
      (!0 === e ? --_.readyWait : _.isReady) || (_.isReady = !0, !0 !== e && --_.readyWait > 0 || q.resolveWith(i, [_]));
    } }), _.ready.then = q.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(_.ready) : (i.addEventListener("DOMContentLoaded", W), e.addEventListener("load", W));var Y = function Y(e, t, n, i, r, o, s) {
    var a = 0,
        l = e.length,
        c = null == n;if ("object" === b(n)) for (a in r = !0, n) {
      Y(e, t, a, n[a], !0, o, s);
    } else if (void 0 !== i && (r = !0, m(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function t(e, _t2, n) {
      return c.call(_(e), n);
    })), t)) for (; a < l; a++) {
      t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
    }return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
  },
      z = /^-ms-/,
      U = /-([a-z])/g;function B(e, t) {
    return t.toUpperCase();
  }function V(e) {
    return e.replace(z, "ms-").replace(U, B);
  }var G = function G(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };function K() {
    this.expando = _.expando + K.uid++;
  }K.uid = 1, K.prototype = { cache: function cache(e) {
      var t = e[this.expando];return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function set(e, t, n) {
      var i,
          r = this.cache(e);if ("string" == typeof t) r[V(t)] = n;else for (i in t) {
        r[V(i)] = t[i];
      }return r;
    }, get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
    }, access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    }, remove: function remove(e, t) {
      var n,
          i = e[this.expando];if (void 0 !== i) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in i ? [t] : t.match(N) || []).length;for (; n--;) {
            delete i[t[n]];
          }
        }(void 0 === t || _.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function hasData(e) {
      var t = e[this.expando];return void 0 !== t && !_.isEmptyObject(t);
    } };var $ = new K(),
      Q = new K(),
      X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;function J(e, t, n) {
    var i;if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
      try {
        n = function (e) {
          return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : X.test(e) ? JSON.parse(e) : e);
        }(n);
      } catch (e) {}Q.set(e, t, n);
    } else n = void 0;return n;
  }_.extend({ hasData: function hasData(e) {
      return Q.hasData(e) || $.hasData(e);
    }, data: function data(e, t, n) {
      return Q.access(e, t, n);
    }, removeData: function removeData(e, t) {
      Q.remove(e, t);
    }, _data: function _data(e, t, n) {
      return $.access(e, t, n);
    }, _removeData: function _removeData(e, t) {
      $.remove(e, t);
    } }), _.fn.extend({ data: function data(e, t) {
      var n,
          i,
          r,
          o = this[0],
          s = o && o.attributes;if (void 0 === e) {
        if (this.length && (r = Q.get(o), 1 === o.nodeType && !$.get(o, "hasDataAttrs"))) {
          for (n = s.length; n--;) {
            s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = V(i.slice(5)), J(o, i, r[i]));
          }$.set(o, "hasDataAttrs", !0);
        }return r;
      }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
        Q.set(this, e);
      }) : Y(this, function (t) {
        var n;if (o && void 0 === t) return void 0 !== (n = Q.get(o, e)) ? n : void 0 !== (n = J(o, e)) ? n : void 0;this.each(function () {
          Q.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    }, removeData: function removeData(e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    } }), _.extend({ queue: function queue(e, t, n) {
      var i;if (e) return t = (t || "fx") + "queue", i = $.get(e, t), n && (!i || Array.isArray(n) ? i = $.access(e, t, _.makeArray(n)) : i.push(n)), i || [];
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = _.queue(e, t),
          i = n.length,
          r = n.shift(),
          o = _._queueHooks(e, t);"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
        _.dequeue(e, t);
      }, o)), !i && o && o.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return $.get(e, n) || $.access(e, n, { empty: _.Callbacks("once memory").add(function () {
          $.remove(e, [t + "queue", n]);
        }) });
    } }), _.fn.extend({ queue: function queue(e, t) {
      var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? _.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = _.queue(this, e, t);_._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && _.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        _.dequeue(this, e);
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, t) {
      var n,
          i = 1,
          r = _.Deferred(),
          o = this,
          s = this.length,
          a = function a() {
        --i || r.resolveWith(o, [o]);
      };for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) {
        (n = $.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
      }return a(), r.promise(t);
    } });var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      ie = function ie(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && _.contains(e.ownerDocument, e) && "none" === _.css(e, "display");
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
      return _.css(e, t, "");
    },
        l = a(),
        c = n && n[3] || (_.cssNumber[t] ? "" : "px"),
        u = (_.cssNumber[t] || "px" !== c && +l) && te.exec(_.css(e, t));if (u && u[3] !== c) {
      for (l /= 2, c = c || u[3], u = +l || 1; s--;) {
        _.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
      }u *= 2, _.style(e, t, u + c), n = n || [];
    }return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r;
  }var se = {};function ae(e) {
    var t,
        n = e.ownerDocument,
        i = e.nodeName,
        r = se[i];return r || (t = n.body.appendChild(n.createElement(i)), r = _.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), se[i] = r, r);
  }function le(e, t) {
    for (var n, i, r = [], o = 0, s = e.length; o < s; o++) {
      (i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = $.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ie(i) && (r[o] = ae(i))) : "none" !== n && (r[o] = "none", $.set(i, "display", n)));
    }for (o = 0; o < s; o++) {
      null != r[o] && (e[o].style.display = r[o]);
    }return e;
  }_.fn.extend({ show: function show() {
      return le(this, !0);
    }, hide: function hide() {
      return le(this);
    }, toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ie(this) ? _(this).show() : _(this).hide();
      });
    } });var ce = /^(?:checkbox|radio)$/i,
      ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      de = /^$|^module$|\/(?:java|ecma)script/i,
      he = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };function fe(e, t) {
    var n;return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && C(e, t) ? _.merge([e], n) : n;
  }function pe(e, t) {
    for (var n = 0, i = e.length; n < i; n++) {
      $.set(e[n], "globalEval", !t || $.get(t[n], "globalEval"));
    }
  }he.optgroup = he.option, he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td;var me,
      ge,
      ve = /<|&#?\w+;/;function ye(e, t, n, i, r) {
    for (var o, s, a, l, c, u, d = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++) {
      if ((o = e[f]) || 0 === o) if ("object" === b(o)) _.merge(h, o.nodeType ? [o] : o);else if (ve.test(o)) {
        for (s = s || d.appendChild(t.createElement("div")), a = (ue.exec(o) || ["", ""])[1].toLowerCase(), l = he[a] || he._default, s.innerHTML = l[1] + _.htmlPrefilter(o) + l[2], u = l[0]; u--;) {
          s = s.lastChild;
        }_.merge(h, s.childNodes), (s = d.firstChild).textContent = "";
      } else h.push(t.createTextNode(o));
    }for (d.textContent = "", f = 0; o = h[f++];) {
      if (i && _.inArray(o, i) > -1) r && r.push(o);else if (c = _.contains(o.ownerDocument, o), s = fe(d.appendChild(o), "script"), c && pe(s), n) for (u = 0; o = s[u++];) {
        de.test(o.type || "") && n.push(o);
      }
    }return d;
  }me = i.createDocumentFragment().appendChild(i.createElement("div")), (ge = i.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), me.appendChild(ge), p.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;var be = i.documentElement,
      _e = /^key/,
      we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ee = /^([^.]*)(?:\.(.+)|)/;function Te() {
    return !0;
  }function ke() {
    return !1;
  }function Se() {
    try {
      return i.activeElement;
    } catch (e) {}
  }function xe(e, t, n, i, r, o) {
    var s, a;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
      for (a in "string" != typeof n && (i = i || n, n = void 0), t) {
        xe(e, a, n, i, t[a], o);
      }return e;
    }if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = ke;else if (!r) return e;return 1 === o && (s = r, (r = function r(e) {
      return _().off(e), s.apply(this, arguments);
    }).guid = s.guid || (s.guid = _.guid++)), e.each(function () {
      _.event.add(this, t, r, i, n);
    });
  }_.event = { global: {}, add: function add(e, t, n, i, r) {
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
          g = $.get(e);if (g) for (n.handler && (n = (o = n).handler, r = o.selector), r && _.find.matchesSelector(be, r), n.guid || (n.guid = _.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (t) {
        return void 0 !== _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0;
      }), c = (t = (t || "").match(N) || [""]).length; c--;) {
        f = m = (a = Ee.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f && (d = _.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = _.event.special[f] || {}, u = _.extend({ type: f, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && _.expr.match.needsContext.test(r), namespace: p.join(".") }, o), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, u) : h.push(u), _.event.global[f] = !0);
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
          g = $.hasData(e) && $.get(e);if (g && (l = g.events)) {
        for (c = (t = (t || "").match(N) || [""]).length; c--;) {
          if (f = m = (a = Ee.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
            for (d = _.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) {
              u = h[o], !r && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(o, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
            }s && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || _.removeEvent(e, f, g.handle), delete l[f]);
          } else for (f in l) {
            _.event.remove(e, f + t[c], n, i, !0);
          }
        }_.isEmptyObject(l) && $.remove(e, "handle events");
      }
    }, dispatch: function dispatch(e) {
      var t,
          n,
          i,
          r,
          o,
          s,
          a = _.event.fix(e),
          l = new Array(arguments.length),
          c = ($.get(this, "events") || {})[a.type] || [],
          u = _.event.special[a.type] || {};for (l[0] = a, t = 1; t < arguments.length; t++) {
        l[t] = arguments[t];
      }if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
        for (s = _.event.handlers.call(this, a, c), t = 0; (r = s[t++]) && !a.isPropagationStopped();) {
          for (a.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) {
            a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((_.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
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
            void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? _(r, this).index(c) > -1 : _.find(r, this, null, [c]).length), s[r] && o.push(i);
          }o.length && a.push({ elem: c, handlers: o });
        }
      }return c = this, l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a;
    }, addProp: function addProp(e, t) {
      Object.defineProperty(_.Event.prototype, e, { enumerable: !0, configurable: !0, get: m(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        }, set: function set(t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        } });
    }, fix: function fix(e) {
      return e[_.expando] ? e : new _.Event(e);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== Se() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === Se() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && C(this, "input")) return this.click(), !1;
        }, _default: function _default(e) {
          return C(e.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        } } } }, _.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, _.Event = function (e, t) {
    if (!(this instanceof _.Event)) return new _.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && _.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[_.expando] = !0;
  }, _.Event.prototype = { constructor: _.Event, isDefaultPrevented: ke, isPropagationStopped: ke, isImmediatePropagationStopped: ke, isSimulated: !1, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    } }, _.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
      var t = e.button;return null == e.which && _e.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    } }, _.event.addProp), _.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
    _.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            i = e.relatedTarget,
            r = e.handleObj;return i && (i === this || _.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n;
      } };
  }), _.fn.extend({ on: function on(e, t, n, i) {
      return xe(this, e, t, n, i);
    }, one: function one(e, t, n, i) {
      return xe(this, e, t, n, i, 1);
    }, off: function off(e, t, n) {
      var i, r;if (e && e.preventDefault && e.handleObj) return i = e.handleObj, _(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
        for (r in e) {
          this.off(r, t, e[r]);
        }return this;
      }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
        _.event.remove(this, e, n, t);
      });
    } });var Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      De = /<script|<style|<link/i,
      Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Me(e, t) {
    return C(e, "table") && C(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0] || e;
  }function Ie(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function Oe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }function Le(e, t) {
    var n, i, r, o, s, a, l, c;if (1 === t.nodeType) {
      if ($.hasData(e) && (o = $.access(e), s = $.set(t, o), c = o.events)) for (r in delete s.handle, s.events = {}, c) {
        for (n = 0, i = c[r].length; n < i; n++) {
          _.event.add(t, r, c[r][n]);
        }
      }Q.hasData(e) && (a = Q.access(e), l = _.extend({}, a), Q.set(t, l));
    }
  }function Ne(e, t, n, i) {
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
        v = m(g);if (v || h > 1 && "string" == typeof g && !p.checkClone && Ae.test(g)) return e.each(function (r) {
      var o = e.eq(r);v && (t[0] = g.call(this, r, o.html())), Ne(o, t, n, i);
    });if (h && (o = (r = ye(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
      for (l = (a = _.map(fe(r, "script"), Ie)).length; d < h; d++) {
        c = r, d !== f && (c = _.clone(c, !0, !0), l && _.merge(a, fe(c, "script"))), n.call(e[d], c, d);
      }if (l) for (u = a[a.length - 1].ownerDocument, _.map(a, Oe), d = 0; d < l; d++) {
        c = a[d], de.test(c.type || "") && !$.access(c, "globalEval") && _.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? _._evalUrl && _._evalUrl(c.src) : y(c.textContent.replace(Pe, ""), u, c));
      }
    }return e;
  }function je(e, t, n) {
    for (var i, r = t ? _.filter(t, e) : e, o = 0; null != (i = r[o]); o++) {
      n || 1 !== i.nodeType || _.cleanData(fe(i)), i.parentNode && (n && _.contains(i.ownerDocument, i) && pe(fe(i, "script")), i.parentNode.removeChild(i));
    }return e;
  }_.extend({ htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(Ce, "<$1></$2>");
    }, clone: function clone(e, t, n) {
      var i,
          r,
          o,
          s,
          a,
          l,
          c,
          u = e.cloneNode(!0),
          d = _.contains(e.ownerDocument, e);if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e))) for (s = fe(u), i = 0, r = (o = fe(e)).length; i < r; i++) {
        a = o[i], l = s[i], void 0, "input" === (c = l.nodeName.toLowerCase()) && ce.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
      }if (t) if (n) for (o = o || fe(e), s = s || fe(u), i = 0, r = o.length; i < r; i++) {
        Le(o[i], s[i]);
      } else Le(e, u);return (s = fe(u, "script")).length > 0 && pe(s, !d && fe(e, "script")), u;
    }, cleanData: function cleanData(e) {
      for (var t, n, i, r = _.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (G(n)) {
          if (t = n[$.expando]) {
            if (t.events) for (i in t.events) {
              r[i] ? _.event.remove(n, i) : _.removeEvent(n, i, t.handle);
            }n[$.expando] = void 0;
          }n[Q.expando] && (n[Q.expando] = void 0);
        }
      }
    } }), _.fn.extend({ detach: function detach(e) {
      return je(this, e, !0);
    }, remove: function remove(e) {
      return je(this, e);
    }, text: function text(e) {
      return Y(this, function (e) {
        return void 0 === e ? _.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    }, append: function append() {
      return Ne(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e);
      });
    }, prepend: function prepend() {
      return Ne(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Me(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return Ne(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return Ne(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (_.cleanData(fe(e, !1)), e.textContent = "");
      }return this;
    }, clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return _.clone(this, e, t);
      });
    }, html: function html(e) {
      return Y(this, function (e) {
        var t = this[0] || {},
            n = 0,
            i = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !De.test(e) && !he[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = _.htmlPrefilter(e);try {
            for (; n < i; n++) {
              1 === (t = this[n] || {}).nodeType && (_.cleanData(fe(t, !1)), t.innerHTML = e);
            }t = 0;
          } catch (e) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = [];return Ne(this, arguments, function (t) {
        var n = this.parentNode;_.inArray(this, e) < 0 && (_.cleanData(fe(this)), n && n.replaceChild(t, this));
      }, e);
    } }), _.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    _.fn[e] = function (e) {
      for (var n, i = [], r = _(e), o = r.length - 1, s = 0; s <= o; s++) {
        n = s === o ? this : this.clone(!0), _(r[s])[t](n), a.apply(i, n.get());
      }return this.pushStack(i);
    };
  });var He = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Fe = function Fe(t) {
    var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      Re = new RegExp(ne.join("|"), "i");function qe(e, t, n) {
    var i,
        r,
        o,
        s,
        a = e.style;return (n = n || Fe(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || _.contains(e.ownerDocument, e) || (s = _.style(e, t)), !p.pixelBoxStyles() && He.test(s) && Re.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s;
  }function We(e, t) {
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
        u = i.createElement("div");u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === u.style.backgroundClip, _.extend(p, { boxSizingReliable: function boxSizingReliable() {
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
  }();var Ye = /^(none|table(?!-c[ea]).+)/,
      ze = /^--/,
      Ue = { position: "absolute", visibility: "hidden", display: "block" },
      Be = { letterSpacing: "0", fontWeight: "400" },
      Ve = ["Webkit", "Moz", "ms"],
      Ge = i.createElement("div").style;function Ke(e) {
    var t = _.cssProps[e];return t || (t = _.cssProps[e] = function (e) {
      if (e in Ge) return e;for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--;) {
        if ((e = Ve[n] + t) in Ge) return e;
      }
    }(e) || e), t;
  }function $e(e, t, n) {
    var i = te.exec(t);return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }function Qe(e, t, n, i, r, o) {
    var s = "width" === t ? 1 : 0,
        a = 0,
        l = 0;if (n === (i ? "border" : "content")) return 0;for (; s < 4; s += 2) {
      "margin" === n && (l += _.css(e, n + ne[s], !0, r)), i ? ("content" === n && (l -= _.css(e, "padding" + ne[s], !0, r)), "margin" !== n && (l -= _.css(e, "border" + ne[s] + "Width", !0, r))) : (l += _.css(e, "padding" + ne[s], !0, r), "padding" !== n ? l += _.css(e, "border" + ne[s] + "Width", !0, r) : a += _.css(e, "border" + ne[s] + "Width", !0, r));
    }return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5))), l;
  }function Xe(e, t, n) {
    var i = Fe(e),
        r = qe(e, t, i),
        o = "border-box" === _.css(e, "boxSizing", !1, i),
        s = o;if (He.test(r)) {
      if (!n) return r;r = "auto";
    }return s = s && (p.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === _.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + Qe(e, t, n || (o ? "border" : "content"), s, i, r) + "px";
  }function Ze(e, t, n, i, r) {
    return new Ze.prototype.init(e, t, n, i, r);
  }_.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = qe(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
            o,
            s,
            a = V(t),
            l = ze.test(t),
            c = e.style;if (l || (t = Ke(a)), s = _.cssHooks[t] || _.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];"string" === (o = typeof n === "undefined" ? "undefined" : _typeof(n)) && (r = te.exec(n)) && r[1] && (n = oe(e, t, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (_.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n));
      }
    }, css: function css(e, t, n, i) {
      var r,
          o,
          s,
          a = V(t);return ze.test(t) || (t = Ke(a)), (s = _.cssHooks[t] || _.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = qe(e, t, i)), "normal" === r && t in Be && (r = Be[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r;
    } }), _.each(["height", "width"], function (e, t) {
    _.cssHooks[t] = { get: function get(e, n, i) {
        if (n) return !Ye.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Xe(e, t, i) : re(e, Ue, function () {
          return Xe(e, t, i);
        });
      }, set: function set(e, n, i) {
        var r,
            o = Fe(e),
            s = "border-box" === _.css(e, "boxSizing", !1, o),
            a = i && Qe(e, t, i, s, o);return s && p.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Qe(e, t, "border", !1, o) - .5)), a && (r = te.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = _.css(e, t)), $e(0, n, a);
      } };
  }), _.cssHooks.marginLeft = We(p.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(qe(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), _.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    _.cssHooks[e + t] = { expand: function expand(n) {
        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) {
          r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
        }return r;
      } }, "margin" !== e && (_.cssHooks[e + t].set = $e);
  }), _.fn.extend({ css: function css(e, t) {
      return Y(this, function (e, t, n) {
        var i,
            r,
            o = {},
            s = 0;if (Array.isArray(t)) {
          for (i = Fe(e), r = t.length; s < r; s++) {
            o[t[s]] = _.css(e, t[s], !1, i);
          }return o;
        }return void 0 !== n ? _.style(e, t, n) : _.css(e, t);
      }, e, t, arguments.length > 1);
    } }), _.Tween = Ze, Ze.prototype = { constructor: Ze, init: function init(e, t, n, i, r, o) {
      this.elem = e, this.prop = n, this.easing = r || _.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (_.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var e = Ze.propHooks[this.prop];return e && e.get ? e.get(this) : Ze.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          n = Ze.propHooks[this.prop];return this.options.duration ? this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ze.propHooks._default.set(this), this;
    } }, Ze.prototype.init.prototype = Ze.prototype, Ze.propHooks = { _default: { get: function get(e) {
        var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      }, set: function set(e) {
        _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[_.cssProps[e.prop]] && !_.cssHooks[e.prop] ? e.elem[e.prop] = e.now : _.style(e.elem, e.prop, e.now + e.unit);
      } } }, Ze.propHooks.scrollTop = Ze.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, _.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }, _default: "swing" }, _.fx = Ze.prototype.init, _.fx.step = {};var Je,
      et,
      tt = /^(?:toggle|show|hide)$/,
      nt = /queueHooks$/;function it() {
    et && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(it) : e.setTimeout(it, _.fx.interval), _.fx.tick());
  }function rt() {
    return e.setTimeout(function () {
      Je = void 0;
    }), Je = Date.now();
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
        a = _.Deferred().always(function () {
      delete l.elem;
    }),
        l = function l() {
      if (r) return !1;for (var t = Je || rt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) {
        c.tweens[o].run(i);
      }return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
    },
        c = a.promise({ elem: e, props: _.extend({}, t), opts: _.extend(!0, { specialEasing: {}, easing: _.easing._default }, n), originalProperties: t, originalOptions: n, startTime: Je || rt(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
        var i = _.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);return c.tweens.push(i), i;
      }, stop: function stop(t) {
        var n = 0,
            i = t ? c.tweens.length : 0;if (r) return this;for (r = !0; n < i; n++) {
          c.tweens[n].run(1);
        }return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
      } }),
        u = c.props;for (!function (e, t) {
      var n, i, r, o, s;for (n in e) {
        if (r = t[i = V(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = _.cssHooks[i]) && ("expand" in s)) for (n in o = s.expand(o), delete e[i], o) {
          (n in e) || (e[n] = o[n], t[n] = r);
        } else t[i] = r;
      }
    }(u, c.opts.specialEasing); o < s; o++) {
      if (i = at.prefilters[o].call(c, e, u, c.opts)) return m(i.stop) && (_._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
    }return _.map(u, st, c), m(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), _.fx.timer(_.extend(l, { elem: e, anim: c, queue: c.opts.queue })), c;
  }_.Animation = _.extend(at, { tweeners: { "*": [function (e, t) {
        var n = this.createTween(e, t);return oe(n.elem, e, te.exec(t), n), n;
      }] }, tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(N);for (var n, i = 0, r = e.length; i < r; i++) {
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
          g = $.get(e, "fxshow");for (i in n.queue || (null == (s = _._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
        s.unqueued || a();
      }), s.unqueued++, h.always(function () {
        h.always(function () {
          s.unqueued--, _.queue(e, "fx").length || s.empty.fire();
        });
      })), t) {
        if (r = t[i], tt.test(r)) {
          if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
            if ("show" !== r || !g || void 0 === g[i]) continue;m = !0;
          }f[i] = g && g[i] || _.style(e, i);
        }
      }if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(f)) for (i in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = g && g.display) && (c = $.get(e, "display")), "none" === (u = _.css(e, "display")) && (c ? u = c : (le([e], !0), c = e.style.display || c, u = _.css(e, "display"), le([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === _.css(e, "float") && (l || (h.done(function () {
        p.display = c;
      }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
      })), l = !1, f) {
        l || (g ? "hidden" in g && (m = g.hidden) : g = $.access(e, "fxshow", { display: c }), o && (g.hidden = !m), m && le([e], !0), h.done(function () {
          for (i in m || le([e]), $.remove(e, "fxshow"), f) {
            _.style(e, i, f[i]);
          }
        })), l = st(m ? g[i] : 0, i, h), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0));
      }
    }], prefilter: function prefilter(e, t) {
      t ? at.prefilters.unshift(e) : at.prefilters.push(e);
    } }), _.speed = function (e, t, n) {
    var i = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? _.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t };return _.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in _.fx.speeds ? i.duration = _.fx.speeds[i.duration] : i.duration = _.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      m(i.old) && i.old.call(this), i.queue && _.dequeue(this, i.queue);
    }, i;
  }, _.fn.extend({ fadeTo: function fadeTo(e, t, n, i) {
      return this.filter(ie).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
    }, animate: function animate(e, t, n, i) {
      var r = _.isEmptyObject(e),
          o = _.speed(t, n, i),
          s = function s() {
        var t = at(this, _.extend({}, e), o);(r || $.get(this, "finish")) && t.stop(!0);
      };return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
    }, stop: function stop(e, t, n) {
      var i = function i(e) {
        var t = e.stop;delete e.stop, t(n);
      };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            r = null != e && e + "queueHooks",
            o = _.timers,
            s = $.get(this);if (r) s[r] && s[r].stop && i(s[r]);else for (r in s) {
          s[r] && s[r].stop && nt.test(r) && i(s[r]);
        }for (r = o.length; r--;) {
          o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
        }!t && n || _.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = $.get(this),
            i = n[e + "queue"],
            r = n[e + "queueHooks"],
            o = _.timers,
            s = i ? i.length : 0;for (n.finish = !0, _.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }for (t = 0; t < s; t++) {
          i[t] && i[t].finish && i[t].finish.call(this);
        }delete n.finish;
      });
    } }), _.each(["toggle", "show", "hide"], function (e, t) {
    var n = _.fn[t];_.fn[t] = function (e, i, r) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ot(t, !0), e, i, r);
    };
  }), _.each({ slideDown: ot("show"), slideUp: ot("hide"), slideToggle: ot("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    _.fn[e] = function (e, n, i) {
      return this.animate(t, e, n, i);
    };
  }), _.timers = [], _.fx.tick = function () {
    var e,
        t = 0,
        n = _.timers;for (Je = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }n.length || _.fx.stop(), Je = void 0;
  }, _.fx.timer = function (e) {
    _.timers.push(e), _.fx.start();
  }, _.fx.interval = 13, _.fx.start = function () {
    et || (et = !0, it());
  }, _.fx.stop = function () {
    et = null;
  }, _.fx.speeds = { slow: 600, fast: 200, _default: 400 }, _.fn.delay = function (t, n) {
    return t = _.fx && _.fx.speeds[t] || t, n = n || "fx", this.queue(n, function (n, i) {
      var r = e.setTimeout(n, t);i.stop = function () {
        e.clearTimeout(r);
      };
    });
  }, function () {
    var e = i.createElement("input"),
        t = i.createElement("select").appendChild(i.createElement("option"));e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value;
  }();var lt,
      ct = _.expr.attrHandle;_.fn.extend({ attr: function attr(e, t) {
      return Y(this, _.attr, e, t, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        _.removeAttr(this, e);
      });
    } }), _.extend({ attr: function attr(e, t, n) {
      var i,
          r,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? _.prop(e, t, n) : (1 === o && _.isXMLDoc(e) || (r = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void _.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = _.find.attr(e, t)) ? void 0 : i);
    }, attrHooks: { type: { set: function set(e, t) {
          if (!p.radioValue && "radio" === t && C(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, removeAttr: function removeAttr(e, t) {
      var n,
          i = 0,
          r = t && t.match(N);if (r && 1 === e.nodeType) for (; n = r[i++];) {
        e.removeAttribute(n);
      }
    } }), lt = { set: function set(e, t, n) {
      return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, _.each(_.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ct[t] || _.find.attr;ct[t] = function (e, t, i) {
      var r,
          o,
          s = t.toLowerCase();return i || (o = ct[s], ct[s] = r, r = null != n(e, t, i) ? s : null, ct[s] = o), r;
    };
  });var ut = /^(?:input|select|textarea|button)$/i,
      dt = /^(?:a|area)$/i;function ht(e) {
    return (e.match(N) || []).join(" ");
  }function ft(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }function pt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(N) || [];
  }_.fn.extend({ prop: function prop(e, t) {
      return Y(this, _.prop, e, t, arguments.length > 1);
    }, removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[_.propFix[e] || e];
      });
    } }), _.extend({ prop: function prop(e, t, n) {
      var i,
          r,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && _.isXMLDoc(e) || (t = _.propFix[t] || t, r = _.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t];
    }, propHooks: { tabIndex: { get: function get(e) {
          var t = _.find.attr(e, "tabindex");return t ? parseInt(t, 10) : ut.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1;
        } } }, propFix: { for: "htmlFor", class: "className" } }), p.optSelected || (_.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    }, set: function set(e) {
      var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    } }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    _.propFix[this.toLowerCase()] = this;
  }), _.fn.extend({ addClass: function addClass(e) {
      var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;if (m(e)) return this.each(function (t) {
        _(this).addClass(e.call(this, t, ft(this)));
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
        _(this).removeClass(e.call(this, t, ft(this)));
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
        _(this).toggleClass(e.call(this, n, ft(this), t), t);
      }) : this.each(function () {
        var t, r, o, s;if (i) for (r = 0, o = _(this), s = pt(e); t = s[r++];) {
          o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
        } else void 0 !== e && "boolean" !== n || ((t = ft(this)) && $.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : $.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(e) {
      var t,
          n,
          i = 0;for (t = " " + e + " "; n = this[i++];) {
        if (1 === n.nodeType && (" " + ht(ft(n)) + " ").indexOf(t) > -1) return !0;
      }return !1;
    } });var mt = /\r/g;_.fn.extend({ val: function val(e) {
      var t,
          n,
          i,
          r = this[0];return arguments.length ? (i = m(e), this.each(function (n) {
        var r;1 === this.nodeType && (null == (r = i ? e.call(this, n, _(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = _.map(r, function (e) {
          return null == e ? "" : e + "";
        })), (t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r));
      })) : r ? (t = _.valHooks[r.type] || _.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(mt, "") : null == n ? "" : n : void 0;
    } }), _.extend({ valHooks: { option: { get: function get(e) {
          var t = _.find.attr(e, "value");return null != t ? t : ht(_.text(e));
        } }, select: { get: function get(e) {
          var t,
              n,
              i,
              r = e.options,
              o = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              l = s ? o + 1 : r.length;for (i = o < 0 ? l : s ? o : 0; i < l; i++) {
            if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !C(n.parentNode, "optgroup"))) {
              if (t = _(n).val(), s) return t;a.push(t);
            }
          }return a;
        }, set: function set(e, t) {
          for (var n, i, r = e.options, o = _.makeArray(t), s = r.length; s--;) {
            ((i = r[s]).selected = _.inArray(_.valHooks.option.get(i), o) > -1) && (n = !0);
          }return n || (e.selectedIndex = -1), o;
        } } } }), _.each(["radio", "checkbox"], function () {
    _.valHooks[this] = { set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = _.inArray(_(e).val(), t) > -1;
      } }, p.checkOn || (_.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), p.focusin = "onfocusin" in e;var gt = /^(?:focusinfocus|focusoutblur)$/,
      vt = function vt(e) {
    e.stopPropagation();
  };_.extend(_.event, { trigger: function trigger(t, n, r, o) {
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
          b = d.call(t, "namespace") ? t.namespace.split(".") : [];if (a = p = l = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !gt.test(y + _.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(), b.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[_.expando] ? t : new _.Event(y, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t)).isTrigger = o ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : _.makeArray(n, [t]), f = _.event.special[y] || {}, o || !f.trigger || !1 !== f.trigger.apply(r, n))) {
        if (!o && !f.noBubble && !g(r)) {
          for (c = f.delegateType || y, gt.test(c + y) || (a = a.parentNode); a; a = a.parentNode) {
            v.push(a), l = a;
          }l === (r.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e);
        }for (s = 0; (a = v[s++]) && !t.isPropagationStopped();) {
          p = a, t.type = s > 1 ? c : f.bindType || y, (h = ($.get(a, "events") || {})[t.type] && $.get(a, "handle")) && h.apply(a, n), (h = u && a[u]) && h.apply && G(a) && (t.result = h.apply(a, n), !1 === t.result && t.preventDefault());
        }return t.type = y, o || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(v.pop(), n) || !G(r) || u && m(r[y]) && !g(r) && ((l = r[u]) && (r[u] = null), _.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, vt), r[y](), t.isPropagationStopped() && p.removeEventListener(y, vt), _.event.triggered = void 0, l && (r[u] = l)), t.result;
      }
    }, simulate: function simulate(e, t, n) {
      var i = _.extend(new _.Event(), n, { type: e, isSimulated: !0 });_.event.trigger(i, null, t);
    } }), _.fn.extend({ trigger: function trigger(e, t) {
      return this.each(function () {
        _.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      var n = this[0];if (n) return _.event.trigger(e, t, n, !0);
    } }), p.focusin || _.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = function n(e) {
      _.event.simulate(t, e.target, _.event.fix(e));
    };_.event.special[t] = { setup: function setup() {
        var i = this.ownerDocument || this,
            r = $.access(i, t);r || i.addEventListener(e, n, !0), $.access(i, t, (r || 0) + 1);
      }, teardown: function teardown() {
        var i = this.ownerDocument || this,
            r = $.access(i, t) - 1;r ? $.access(i, t, r) : (i.removeEventListener(e, n, !0), $.remove(i, t));
      } };
  });var yt = e.location,
      bt = Date.now(),
      _t = /\?/;_.parseXML = function (t) {
    var n;if (!t || "string" != typeof t) return null;try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }return n && !n.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + t), n;
  };var wt = /\[\]$/,
      Et = /\r?\n/g,
      Tt = /^(?:submit|button|image|reset|file)$/i,
      kt = /^(?:input|select|textarea|keygen)/i;function St(e, t, n, i) {
    var r;if (Array.isArray(t)) _.each(t, function (t, r) {
      n || wt.test(e) ? i(e, r) : St(e + "[" + ("object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && null != r ? t : "") + "]", r, n, i);
    });else if (n || "object" !== b(t)) i(e, t);else for (r in t) {
      St(e + "[" + r + "]", t[r], n, i);
    }
  }_.param = function (e, t) {
    var n,
        i = [],
        r = function r(e, t) {
      var n = m(t) ? t() : t;i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };if (Array.isArray(e) || e.jquery && !_.isPlainObject(e)) _.each(e, function () {
      r(this.name, this.value);
    });else for (n in e) {
      St(n, e[n], t, r);
    }return i.join("&");
  }, _.fn.extend({ serialize: function serialize() {
      return _.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = _.prop(this, "elements");return e ? _.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !_(this).is(":disabled") && kt.test(this.nodeName) && !Tt.test(e) && (this.checked || !ce.test(e));
      }).map(function (e, t) {
        var n = _(this).val();return null == n ? null : Array.isArray(n) ? _.map(n, function (e) {
          return { name: t.name, value: e.replace(Et, "\r\n") };
        }) : { name: t.name, value: n.replace(Et, "\r\n") };
      }).get();
    } });var xt = /%20/g,
      Ct = /#.*$/,
      Dt = /([?&])_=[^&]*/,
      At = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Pt = /^(?:GET|HEAD)$/,
      Mt = /^\/\//,
      It = {},
      Ot = {},
      Lt = "*/".concat("*"),
      Nt = i.createElement("a");function jt(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");var i,
          r = 0,
          o = t.toLowerCase().match(N) || [];if (m(n)) for (; i = o[r++];) {
        "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
      }
    };
  }function Ht(e, t, n, i) {
    var r = {},
        o = e === Ot;function s(a) {
      var l;return r[a] = !0, _.each(e[a] || [], function (e, a) {
        var c = a(t, n, i);return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1);
      }), l;
    }return s(t.dataTypes[0]) || !r["*"] && s("*");
  }function Ft(e, t) {
    var n,
        i,
        r = _.ajaxSettings.flatOptions || {};for (n in t) {
      void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    }return i && _.extend(!0, e, i), e;
  }Nt.href = yt.href, _.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: yt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Lt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": _.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? Ft(Ft(e, _.ajaxSettings), t) : Ft(_.ajaxSettings, e);
    }, ajaxPrefilter: jt(It), ajaxTransport: jt(Ot), ajax: function ajax(t, n) {
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
          p = _.ajaxSetup({}, n),
          m = p.context || p,
          g = p.context && (m.nodeType || m.jquery) ? _(m) : _.event,
          v = _.Deferred(),
          y = _.Callbacks("once memory"),
          b = p.statusCode || {},
          w = {},
          E = {},
          T = "canceled",
          k = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (u) {
            if (!a) for (a = {}; t = At.exec(s);) {
              a[t[1].toLowerCase()] = t[2];
            }t = a[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return u ? s : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          return null == u && (e = E[e.toLowerCase()] = E[e.toLowerCase()] || e, w[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return null == u && (p.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          var t;if (e) if (u) k.always(e[k.status]);else for (t in e) {
            b[t] = [b[t], e[t]];
          }return this;
        }, abort: function abort(e) {
          var t = e || T;return r && r.abort(t), S(0, t), this;
        } };if (v.promise(k), p.url = ((t || p.url || yt.href) + "").replace(Mt, yt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(N) || [""], null == p.crossDomain) {
        c = i.createElement("a");try {
          c.href = p.url, c.href = c.href, p.crossDomain = Nt.protocol + "//" + Nt.host != c.protocol + "//" + c.host;
        } catch (e) {
          p.crossDomain = !0;
        }
      }if (p.data && p.processData && "string" != typeof p.data && (p.data = _.param(p.data, p.traditional)), Ht(It, p, n, k), u) return k;for (h in (d = _.event && p.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Pt.test(p.type), o = p.url.replace(Ct, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(xt, "+")) : (f = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (_t.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(Dt, "$1"), f = (_t.test(o) ? "&" : "?") + "_=" + bt++ + f), p.url = o + f), p.ifModified && (_.lastModified[o] && k.setRequestHeader("If-Modified-Since", _.lastModified[o]), _.etag[o] && k.setRequestHeader("If-None-Match", _.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Lt + "; q=0.01" : "") : p.accepts["*"]), p.headers) {
        k.setRequestHeader(h, p.headers[h]);
      }if (p.beforeSend && (!1 === p.beforeSend.call(m, k, p) || u)) return k.abort();if (T = "abort", y.add(p.complete), k.done(p.success), k.fail(p.error), r = Ht(Ot, p, n, k)) {
        if (k.readyState = 1, d && g.trigger("ajaxSend", [k, p]), u) return k;p.async && p.timeout > 0 && (l = e.setTimeout(function () {
          k.abort("timeout");
        }, p.timeout));try {
          u = !1, r.send(w, S);
        } catch (e) {
          if (u) throw e;S(-1, e);
        }
      } else S(-1, "No Transport");function S(t, n, i, a) {
        var c,
            h,
            f,
            w,
            E,
            T = n;u || (u = !0, l && e.clearTimeout(l), r = void 0, s = a || "", k.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (w = function (e, t, n) {
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
        }(p, k, i)), w = function (e, t, n, i) {
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
        }(p, w, k, c), c ? (p.ifModified && ((E = k.getResponseHeader("Last-Modified")) && (_.lastModified[o] = E), (E = k.getResponseHeader("etag")) && (_.etag[o] = E)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, h = w.data, c = !(f = w.error))) : (f = T, !t && T || (T = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (n || T) + "", c ? v.resolveWith(m, [h, T, k]) : v.rejectWith(m, [k, T, f]), k.statusCode(b), b = void 0, d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [k, p, c ? h : f]), y.fireWith(m, [k, T]), d && (g.trigger("ajaxComplete", [k, p]), --_.active || _.event.trigger("ajaxStop")));
      }return k;
    }, getJSON: function getJSON(e, t, n) {
      return _.get(e, t, n, "json");
    }, getScript: function getScript(e, t) {
      return _.get(e, void 0, t, "script");
    } }), _.each(["get", "post"], function (e, t) {
    _[t] = function (e, n, i, r) {
      return m(n) && (r = r || i, i = n, n = void 0), _.ajax(_.extend({ url: e, type: t, dataType: r, data: n, success: i }, _.isPlainObject(e) && e));
    };
  }), _._evalUrl = function (e) {
    return _.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
  }, _.fn.extend({ wrapAll: function wrapAll(e) {
      var t;return this[0] && (m(e) && (e = e.call(this[0])), t = _(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) {
          e = e.firstElementChild;
        }return e;
      }).append(this)), this;
    }, wrapInner: function wrapInner(e) {
      return m(e) ? this.each(function (t) {
        _(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = _(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = m(e);return this.each(function (n) {
        _(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        _(this).replaceWith(this.childNodes);
      }), this;
    } }), _.expr.pseudos.hidden = function (e) {
    return !_.expr.pseudos.visible(e);
  }, _.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, _.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };var Rt = { 0: 200, 1223: 204 },
      qt = _.ajaxSettings.xhr();p.cors = !!qt && "withCredentials" in qt, p.ajax = qt = !!qt, _.ajaxTransport(function (t) {
    var _n2, i;if (p.cors || qt && !t.crossDomain) return { send: function send(r, o) {
        var s,
            a = t.xhr();if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) {
          a[s] = t.xhrFields[s];
        }for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) {
          a.setRequestHeader(s, r[s]);
        }_n2 = function n(e) {
          return function () {
            _n2 && (_n2 = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Rt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
          };
        }, a.onload = _n2(), i = a.onerror = a.ontimeout = _n2("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
          4 === a.readyState && e.setTimeout(function () {
            _n2 && i();
          });
        }, _n2 = _n2("abort");try {
          a.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n2) throw e;
        }
      }, abort: function abort() {
        _n2 && _n2();
      } };
  }), _.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), _.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
        return _.globalEval(e), e;
      } } }), _.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), _.ajaxTransport("script", function (e) {
    var t, _n3;if (e.crossDomain) return { send: function send(r, o) {
        t = _("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n3 = function n(e) {
          t.remove(), _n3 = null, e && o("error" === e.type ? 404 : 200, e.type);
        }), i.head.appendChild(t[0]);
      }, abort: function abort() {
        _n3 && _n3();
      } };
  });var Wt,
      Yt = [],
      zt = /(=)\?(?=&|$)|\?\?/;_.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = Yt.pop() || _.expando + "_" + bt++;return this[e] = !0, e;
    } }), _.ajaxPrefilter("json jsonp", function (t, n, i) {
    var r,
        o,
        s,
        a = !1 !== t.jsonp && (zt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(t.data) && "data");if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(zt, "$1" + r) : !1 !== t.jsonp && (t.url += (_t.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
      return s || _.error(r + " was not called"), s[0];
    }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
      s = arguments;
    }, i.always(function () {
      void 0 === o ? _(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Yt.push(r)), s && m(o) && o(s[0]), s = o = void 0;
    }), "script";
  }), p.createHTMLDocument = ((Wt = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Wt.childNodes.length), _.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(r)) : t = i), o = D.exec(e), s = !n && [], o ? [t.createElement(o[1])] : (o = ye([e], t, s), s && s.length && _(s).remove(), _.merge([], o.childNodes)));var r, o, s;
  }, _.fn.load = function (e, t, n) {
    var i,
        r,
        o,
        s = this,
        a = e.indexOf(" ");return a > -1 && (i = ht(e.slice(a)), e = e.slice(0, a)), m(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (r = "POST"), s.length > 0 && _.ajax({ url: e, type: r || "GET", dataType: "html", data: t }).done(function (e) {
      o = arguments, s.html(i ? _("<div>").append(_.parseHTML(e)).find(i) : e);
    }).always(n && function (e, t) {
      s.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    _.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), _.expr.pseudos.animated = function (e) {
    return _.grep(_.timers, function (t) {
      return e === t.elem;
    }).length;
  }, _.offset = { setOffset: function setOffset(e, t, n) {
      var i,
          r,
          o,
          s,
          a,
          l,
          c = _.css(e, "position"),
          u = _(e),
          d = {};"static" === c && (e.style.position = "relative"), a = u.offset(), o = _.css(e, "top"), l = _.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), m(t) && (t = t.call(e, n, _.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : u.css(d);
    } }, _.fn.extend({ offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        _.offset.setOffset(this, e, t);
      });var t,
          n,
          i = this[0];return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0;
    }, position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            i = this[0],
            r = { top: 0, left: 0 };if ("fixed" === _.css(i, "position")) t = i.getBoundingClientRect();else {
          for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position");) {
            e = e.parentNode;
          }e && e !== i && 1 === e.nodeType && ((r = _(e).offset()).top += _.css(e, "borderTopWidth", !0), r.left += _.css(e, "borderLeftWidth", !0));
        }return { top: t.top - r.top - _.css(i, "marginTop", !0), left: t.left - r.left - _.css(i, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === _.css(e, "position");) {
          e = e.offsetParent;
        }return e || be;
      });
    } }), _.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
    var n = "pageYOffset" === t;_.fn[e] = function (i) {
      return Y(this, function (e, i, r) {
        var o;if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r;
      }, e, i, arguments.length);
    };
  }), _.each(["top", "left"], function (e, t) {
    _.cssHooks[t] = We(p.pixelPosition, function (e, n) {
      if (n) return n = qe(e, t), He.test(n) ? _(e).position()[t] + "px" : n;
    });
  }), _.each({ Height: "height", Width: "width" }, function (e, t) {
    _.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
      _.fn[i] = function (r, o) {
        var s = arguments.length && (n || "boolean" != typeof r),
            a = n || (!0 === r || !0 === o ? "margin" : "border");return Y(this, function (t, n, r) {
          var o;return g(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? _.css(t, n, a) : _.style(t, n, r, a);
        }, t, s ? r : void 0, s);
      };
    });
  }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    _.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), _.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    } }), _.fn.extend({ bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, i) {
      return this.on(t, e, n, i);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } }), _.proxy = function (e, t) {
    var n, i, r;if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return i = o.call(arguments, 2), (r = function r() {
      return e.apply(t || this, i.concat(o.call(arguments)));
    }).guid = e.guid = e.guid || _.guid++, r;
  }, _.holdReady = function (e) {
    e ? _.readyWait++ : _.ready(!0);
  }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = C, _.isFunction = m, _.isWindow = g, _.camelCase = V, _.type = b, _.now = Date.now, _.isNumeric = function (e) {
    var t = _.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return _;
  });var Ut = e.jQuery,
      Bt = e.$;return _.noConflict = function (t) {
    return e.$ === _ && (e.$ = Bt), t && e.jQuery === _ && (e.jQuery = Ut), _;
  }, t || (e.jQuery = e.$ = _), _;
}), function (e) {
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
    return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], d(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0);
  }function y(e) {
    var t = e.body,
        n = e.documentElement,
        i = d(10) && getComputedStyle(n);return { height: v("Height", t, n, i), width: v("Width", t, n, i) };
  }var b = function b(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  },
      _ = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t;
    };
  }(),
      w = function w(e, t, n) {
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
  }function k(e) {
    var t = {};try {
      if (d(10)) {
        t = e.getBoundingClientRect();var n = m(e, "top"),
            i = m(e, "left");t.top += n, t.left += i, t.bottom += n, t.right += i;
      } else t = e.getBoundingClientRect();
    } catch (e) {}var r = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
        o = "HTML" === e.nodeName ? y(e.ownerDocument) : {},
        a = o.width || e.clientWidth || r.right - r.left,
        l = o.height || e.clientHeight || r.bottom - r.top,
        c = e.offsetWidth - a,
        u = e.offsetHeight - l;if (c || u) {
      var h = s(e);c -= g(h, "x"), u -= g(h, "y"), r.width -= c, r.height -= u;
    }return T(r);
  }function S(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = d(10),
        r = "HTML" === t.nodeName,
        o = k(e),
        a = k(t),
        c = l(e),
        u = s(t),
        h = parseFloat(u.borderTopWidth, 10),
        f = parseFloat(u.borderLeftWidth, 10);n && r && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));var p = T({ top: o.top - a.top - h, left: o.left - a.left - f, width: o.width, height: o.height });if (p.marginTop = 0, p.marginLeft = 0, !i && r) {
      var g = parseFloat(u.marginTop, 10),
          v = parseFloat(u.marginLeft, 10);p.top -= h - g, p.bottom -= h - g, p.left -= f - v, p.right -= f - v, p.marginTop = g, p.marginLeft = v;
    }return (i && !n ? t.contains(c) : t === c && "BODY" !== c.nodeName) && (p = function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = m(t, "top"),
          r = m(t, "left"),
          o = n ? -1 : 1;return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e;
    }(p, t)), p;
  }function x(e) {
    if (!e || !e.parentElement || d()) return document.documentElement;for (var t = e.parentElement; t && "none" === s(t, "transform");) {
      t = t.parentElement;
    }return t || document.documentElement;
  }function C(e, t, n, i) {
    var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        o = { top: 0, left: 0 },
        c = r ? x(e) : p(e, t);if ("viewport" === i) o = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = e.ownerDocument.documentElement,
          i = S(e, n),
          r = Math.max(n.clientWidth, window.innerWidth || 0),
          o = Math.max(n.clientHeight, window.innerHeight || 0),
          s = t ? 0 : m(n),
          a = t ? 0 : m(n, "left");return T({ top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: r, height: o });
    }(c, r);else {
      var u = void 0;"scrollParent" === i ? "BODY" === (u = l(a(t))).nodeName && (u = e.ownerDocument.documentElement) : u = "window" === i ? e.ownerDocument.documentElement : i;var d = S(u, c, r);if ("HTML" !== u.nodeName || function e(t) {
        var n = t.nodeName;return "BODY" !== n && "HTML" !== n && ("fixed" === s(t, "position") || e(a(t)));
      }(c)) o = d;else {
        var h = y(e.ownerDocument),
            f = h.height,
            g = h.width;o.top += d.top - d.marginTop, o.bottom = f + d.top, o.left += d.left - d.marginLeft, o.right = g + d.left;
      }
    }var v = "number" == typeof (n = n || 0);return o.left += v ? n : n.left || 0, o.top += v ? n : n.top || 0, o.right -= v ? n : n.right || 0, o.bottom -= v ? n : n.bottom || 0, o;
  }function D(e, t, n, i, r) {
    var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;if (-1 === e.indexOf("auto")) return e;var s = C(n, i, o, r),
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
  }function A(e, t, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;return S(n, i ? x(t) : p(t, n), i);
  }function P(e) {
    var t = getComputedStyle(e),
        n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
        i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);return { width: e.offsetWidth + i, height: e.offsetHeight + n };
  }function M(e) {
    var t = { left: "right", right: "left", bottom: "top", top: "bottom" };return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }function I(e, t, n) {
    n = n.split("-")[0];var i = P(e),
        r = { width: i.width, height: i.height },
        o = -1 !== ["right", "left"].indexOf(n),
        s = o ? "top" : "left",
        a = o ? "left" : "top",
        l = o ? "height" : "width",
        c = o ? "width" : "height";return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[M(a)], r;
  }function O(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }function L(e, t, n) {
    return (void 0 === n ? e : e.slice(0, function (e, t, n) {
      if (Array.prototype.findIndex) return e.findIndex(function (e) {
        return e[t] === n;
      });var i = O(e, function (e) {
        return e[t] === n;
      });return e.indexOf(i);
    }(e, "name", n))).forEach(function (e) {
      e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n = e.function || e.fn;e.enabled && o(n) && (t.offsets.popper = T(t.offsets.popper), t.offsets.reference = T(t.offsets.reference), t = n(t, e));
    }), t;
  }function N(e, t) {
    return e.some(function (e) {
      var n = e.name;return e.enabled && n === t;
    });
  }function j(e) {
    for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
      var r = t[i],
          o = r ? "" + r + n : e;if (void 0 !== document.body.style[o]) return o;
    }return null;
  }function H(e) {
    var t = e.ownerDocument;return t ? t.defaultView : window;
  }function F(e, t, n, i) {
    n.updateBound = i, H(e).addEventListener("resize", n.updateBound, { passive: !0 });var r = l(e);return function e(t, n, i, r) {
      var o = "BODY" === t.nodeName,
          s = o ? t.ownerDocument.defaultView : t;s.addEventListener(n, i, { passive: !0 }), o || e(l(s.parentNode), n, i, r), r.push(s);
    }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n;
  }function R() {
    var e, t;this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, H(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener("scroll", t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t));
  }function q(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }function W(e, t) {
    Object.keys(t).forEach(function (n) {
      var i = "";-1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && q(t[n]) && (i = "px"), e.style[n] = t[n] + i;
    });
  }function Y(e, t, n) {
    var i = O(e, function (e) {
      return e.name === t;
    }),
        r = !!i && e.some(function (e) {
      return e.name === n && e.enabled && e.order < i.order;
    });if (!r) {
      var o = "`" + t + "`",
          s = "`" + n + "`";console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!");
    }return r;
  }var z = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      U = z.slice(3);function B(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = U.indexOf(e),
        i = U.slice(n + 1).concat(U.slice(0, n));return t ? i.reverse() : i;
  }var V = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" };function G(e, t, n, i) {
    var r = [0, 0],
        o = -1 !== ["right", "left"].indexOf(i),
        s = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        a = s.indexOf(O(s, function (e) {
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
                a = i;}return T(a)[t] / 100 * o;
          }if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;return o;
        }(e, r, t, n);
      });
    })).forEach(function (e, t) {
      e.forEach(function (n, i) {
        q(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1));
      });
    }), r;
  }var K = { placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function onCreate() {}, onUpdate: function onUpdate() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function fn(e) {
          var t = e.placement,
              n = t.split("-")[0],
              i = t.split("-")[1];if (i) {
            var r = e.offsets,
                o = r.reference,
                s = r.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                u = { start: w({}, l, o[l]), end: w({}, l, o[l] + o[c] - s[c]) };e.offsets.popper = E({}, s, u[i]);
          }return e;
        } }, offset: { order: 200, enabled: !0, fn: function fn(e, t) {
          var n = t.offset,
              i = e.placement,
              r = e.offsets,
              o = r.popper,
              s = r.reference,
              a = i.split("-")[0],
              l = void 0;return l = q(+n) ? [+n, 0] : G(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), e.popper = o, e;
        }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function fn(e, t) {
          var n = t.boundariesElement || h(e.instance.popper);e.instance.reference === n && (n = h(n));var i = j("transform"),
              r = e.instance.popper.style,
              o = r.top,
              s = r.left,
              a = r[i];r.top = "", r.left = "", r[i] = "";var l = C(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);r.top = o, r.left = s, r[i] = a, t.boundaries = l;var c = t.priority,
              u = e.offsets.popper,
              d = { primary: function primary(e) {
              var n = u[e];return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), w({}, e, n);
            }, secondary: function secondary(e) {
              var n = "right" === e ? "left" : "top",
                  i = u[n];return u[e] > l[e] && !t.escapeWithReference && (i = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), w({}, n, i);
            } };return c.forEach(function (e) {
            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";u = E({}, u, d[t](e));
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
          var n;if (!Y(e.instance.modifiers, "arrow", "keepTogether")) return e;var i = t.element;if ("string" == typeof i) {
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
              m = P(i)[u];l[p] - m < a[h] && (e.offsets.popper[h] -= a[h] - (l[p] - m)), l[h] + m > a[p] && (e.offsets.popper[h] += l[h] + m - a[p]), e.offsets.popper = T(e.offsets.popper);var g = l[h] + l[u] / 2 - m / 2,
              v = s(e.instance.popper),
              y = parseFloat(v["margin" + d], 10),
              b = parseFloat(v["border" + d + "Width"], 10),
              _ = g - e.offsets.popper[h] - y - b;return _ = Math.max(Math.min(a[u] - m, _), 0), e.arrowElement = i, e.offsets.arrow = (w(n = {}, h, Math.round(_)), w(n, f, ""), n), e;
        }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function fn(e, t) {
          if (N(e.instance.modifiers, "inner")) return e;if (e.flipped && e.placement === e.originalPlacement) return e;var n = C(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
              i = e.placement.split("-")[0],
              r = M(i),
              o = e.placement.split("-")[1] || "",
              s = [];switch (t.behavior) {case V.FLIP:
              s = [i, r];break;case V.CLOCKWISE:
              s = B(i);break;case V.COUNTERCLOCKWISE:
              s = B(i, !0);break;default:
              s = t.behavior;}return s.forEach(function (a, l) {
            if (i !== a || s.length === l + 1) return e;i = e.placement.split("-")[0], r = M(i);var c = e.offsets.popper,
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
            }(o)), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = E({}, e.offsets.popper, I(e.instance.popper, e.offsets.reference, e.placement)), e = L(e.instance.modifiers, e, "flip"));
          }), e;
        }, behavior: "flip", padding: 5, boundariesElement: "viewport" }, inner: { order: 700, enabled: !1, fn: function fn(e) {
          var t = e.placement,
              n = t.split("-")[0],
              i = e.offsets,
              r = i.popper,
              o = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = M(t), e.offsets.popper = T(r), e;
        } }, hide: { order: 800, enabled: !0, fn: function fn(e) {
          if (!Y(e.instance.modifiers, "hide", "preventOverflow")) return e;var t = e.offsets.reference,
              n = O(e.instance.modifiers, function (e) {
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
              o = O(e.instance.modifiers, function (e) {
            return "applyStyle" === e.name;
          }).gpuAcceleration;void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s = void 0 !== o ? o : t.gpuAcceleration,
              a = h(e.instance.popper),
              l = k(a),
              c = { position: r.position },
              u = { left: Math.floor(r.left), top: Math.round(r.top), bottom: Math.round(r.bottom), right: Math.floor(r.right) },
              d = "bottom" === n ? "top" : "bottom",
              f = "right" === i ? "left" : "right",
              p = j("transform"),
              m = void 0,
              g = void 0;if (g = "bottom" === d ? "HTML" === a.nodeName ? -a.clientHeight + u.bottom : -l.height + u.bottom : u.top, m = "right" === f ? "HTML" === a.nodeName ? -a.clientWidth + u.right : -l.width + u.right : u.left, s && p) c[p] = "translate3d(" + m + "px, " + g + "px, 0)", c[d] = 0, c[f] = 0, c.willChange = "transform";else {
            var v = "bottom" === d ? -1 : 1,
                y = "right" === f ? -1 : 1;c[d] = g * v, c[f] = m * y, c.willChange = d + ", " + f;
          }var b = { "x-placement": e.placement };return e.attributes = E({}, b, e.attributes), e.styles = E({}, c, e.styles), e.arrowStyles = E({}, e.offsets.arrow, e.arrowStyles), e;
        }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function fn(e) {
          var t, n;return W(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function (e) {
            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
          }), e.arrowElement && Object.keys(e.arrowStyles).length && W(e.arrowElement, e.arrowStyles), e;
        }, onLoad: function onLoad(e, t, n, i, r) {
          var o = A(r, t, e, n.positionFixed),
              s = D(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);return t.setAttribute("x-placement", s), W(t, { position: n.positionFixed ? "fixed" : "absolute" }), n;
        }, gpuAcceleration: void 0 } } },
      $ = function () {
    function e(t, n) {
      var i = this,
          s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};b(this, e), this.scheduleUpdate = function () {
        return requestAnimationFrame(i.update);
      }, this.update = r(this.update.bind(this)), this.options = E({}, e.Defaults, s), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(E({}, e.Defaults.modifiers, s.modifiers)).forEach(function (t) {
        i.options.modifiers[t] = E({}, e.Defaults.modifiers[t] || {}, s.modifiers ? s.modifiers[t] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return E({ name: e }, i.options.modifiers[e]);
      }).sort(function (e, t) {
        return e.order - t.order;
      }), this.modifiers.forEach(function (e) {
        e.enabled && o(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state);
      }), this.update();var a = this.options.eventsEnabled;a && this.enableEventListeners(), this.state.eventsEnabled = a;
    }return _(e, [{ key: "update", value: function value() {
        return function () {
          if (!this.state.isDestroyed) {
            var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };e.offsets.reference = A(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = D(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = I(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = L(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
          }
        }.call(this);
      } }, { key: "destroy", value: function value() {
        return function () {
          return this.state.isDestroyed = !0, N(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[j("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
        }.call(this);
      } }, { key: "enableEventListeners", value: function value() {
        return function () {
          this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate));
        }.call(this);
      } }, { key: "disableEventListeners", value: function value() {
        return R.call(this);
      } }]), e;
  }();return $.Utils = ("undefined" != typeof window ? window : global).PopperUtils, $.placements = z, $.Defaults = K, $;
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
      }, getSelectorFromElement: function getSelectorFromElement(e) {
        var t = e.getAttribute("data-target");t && "#" !== t || (t = e.getAttribute("href") || "");try {
          return document.querySelector(t) ? t : null;
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
        var t = this._element;e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
      }, l.dispose = function () {
        e.removeData(this._element, "bs.alert"), this._element = null;
      }, l._getRootElement = function (t) {
        var n = a.getSelectorFromElement(t),
            r = !1;return n && (r = document.querySelector(n)), r || (r = e(t).closest("." + i)[0]), r;
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
          return "4.1.3";
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
          var o = this._element.querySelector(c);if (o) {
            if ("radio" === o.type) if (o.checked && this._element.classList.contains(i)) t = !1;else {
              var s = r.querySelector(u);s && e(s).removeClass(i);
            }if (t) {
              if (o.hasAttribute("disabled") || r.hasAttribute("disabled") || o.classList.contains("disabled") || r.classList.contains("disabled")) return;o.checked = !this._element.classList.contains(i), e(o).trigger("change");
            }o.focus(), n = !1;
          }
        }n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(i)), t && e(this._element).toggleClass(i);
      }, n.dispose = function () {
        e.removeData(this._element, "bs.button"), this._element = null;
      }, t._jQueryInterface = function (n) {
        return this.each(function () {
          var i = e(this).data("bs.button");i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]();
        });
      }, r(t, null, [{ key: "VERSION", get: function get() {
          return "4.1.3";
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
        _ = "carousel-item-next",
        w = "carousel-item-prev",
        E = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
        T = function () {
      function o(t, n) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = e(t)[0], this._indicatorsElement = this._element.querySelector(E.INDICATORS), this._addEventListeners();
      }var T = o.prototype;return T.next = function () {
        this._isSliding || this._slide(u);
      }, T.nextWhenVisible = function () {
        !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next();
      }, T.prev = function () {
        this._isSliding || this._slide(d);
      }, T.pause = function (e) {
        e || (this._isPaused = !0), this._element.querySelector(E.NEXT_PREV) && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }, T.cycle = function (e) {
        e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }, T.to = function (t) {
        var n = this;this._activeElement = this._element.querySelector(E.ACTIVE_ITEM);var i = this._getItemIndex(this._activeElement);if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) e(this._element).one(p.SLID, function () {
          return n.to(t);
        });else {
          if (i === t) return this.pause(), void this.cycle();var r = t > i ? u : d;this._slide(r, this._items[t]);
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
      }, T._getItemIndex = function (e) {
        return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(E.ITEM)) : [], this._items.indexOf(e);
      }, T._getItemByDirection = function (e, t) {
        var n = e === u,
            i = e === d,
            r = this._getItemIndex(t),
            o = this._items.length - 1;if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;var s = (r + (e === d ? -1 : 1)) % this._items.length;return -1 === s ? this._items[this._items.length - 1] : this._items[s];
      }, T._triggerSlideEvent = function (t, n) {
        var i = this._getItemIndex(t),
            r = this._getItemIndex(this._element.querySelector(E.ACTIVE_ITEM)),
            o = e.Event(p.SLIDE, { relatedTarget: t, direction: n, from: r, to: i });return e(this._element).trigger(o), o;
      }, T._setActiveIndicatorElement = function (t) {
        if (this._indicatorsElement) {
          var n = [].slice.call(this._indicatorsElement.querySelectorAll(E.ACTIVE));e(n).removeClass(g);var i = this._indicatorsElement.children[this._getItemIndex(t)];i && e(i).addClass(g);
        }
      }, T._slide = function (t, n) {
        var i,
            r,
            o,
            s = this,
            l = this._element.querySelector(E.ACTIVE_ITEM),
            c = this._getItemIndex(l),
            d = n || l && this._getItemByDirection(t, l),
            m = this._getItemIndex(d),
            T = Boolean(this._interval);if (t === u ? (i = b, r = _, o = h) : (i = y, r = w, o = f), d && e(d).hasClass(g)) this._isSliding = !1;else if (!this._triggerSlideEvent(d, o).isDefaultPrevented() && l && d) {
          this._isSliding = !0, T && this.pause(), this._setActiveIndicatorElement(d);var k = e.Event(p.SLID, { relatedTarget: d, direction: o, from: c, to: m });if (e(this._element).hasClass(v)) {
            e(d).addClass(r), a.reflow(d), e(l).addClass(i), e(d).addClass(i);var S = a.getTransitionDurationFromElement(l);e(l).one(a.TRANSITION_END, function () {
              e(d).removeClass(i + " " + r).addClass(g), e(l).removeClass(g + " " + r + " " + i), s._isSliding = !1, setTimeout(function () {
                return e(s._element).trigger(k);
              }, 0);
            }).emulateTransitionEnd(S);
          } else e(l).removeClass(g), e(d).addClass(g), this._isSliding = !1, e(this._element).trigger(k);T && this.cycle();
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
          return "4.1.3";
        } }, { key: "Default", get: function get() {
          return l;
        } }]), o;
    }();return e(document).on(p.CLICK_DATA_API, E.DATA_SLIDE, T._dataApiClickHandler), e(window).on(p.LOAD_DATA_API, function () {
      for (var t = [].slice.call(document.querySelectorAll(E.DATA_RIDE)), n = 0, i = t.length; n < i; n++) {
        var r = e(t[n]);T._jQueryInterface.call(r, r.data());
      }
    }), e.fn[t] = T._jQueryInterface, e.fn[t].Constructor = T, e.fn[t].noConflict = function () {
      return e.fn[t] = o, T._jQueryInterface;
    }, T;
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
        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));for (var i = [].slice.call(document.querySelectorAll(g.DATA_TOGGLE)), r = 0, o = i.length; r < o; r++) {
          var s = i[r],
              l = a.getSelectorFromElement(s),
              c = [].slice.call(document.querySelectorAll(l)).filter(function (e) {
            return e === t;
          });null !== l && c.length > 0 && (this._selector = l, this._triggerArray.push(s));
        }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
      }var v = i.prototype;return v.toggle = function () {
        e(this._element).hasClass(u) ? this.hide() : this.show();
      }, v.show = function () {
        var t,
            r,
            o = this;if (!this._isTransitioning && !e(this._element).hasClass(u) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(g.ACTIVES)).filter(function (e) {
          return e.getAttribute("data-parent") === o._config.parent;
        })).length && (t = null), !(t && (r = e(t).not(this._selector).data(n)) && r._isTransitioning))) {
          var s = e.Event(c.SHOW);if (e(this._element).trigger(s), !s.isDefaultPrevented()) {
            t && (i._jQueryInterface.call(e(t).not(this._selector), "hide"), r || e(t).data(n, null));var l = this._getDimension();e(this._element).removeClass(d).addClass(h), this._element.style[l] = 0, this._triggerArray.length && e(this._triggerArray).removeClass(f).attr("aria-expanded", !0), this.setTransitioning(!0);var p = "scroll" + (l[0].toUpperCase() + l.slice(1)),
                m = a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END, function () {
              e(o._element).removeClass(h).addClass(d).addClass(u), o._element.style[l] = "", o.setTransitioning(!1), e(o._element).trigger(c.SHOWN);
            }).emulateTransitionEnd(m), this._element.style[l] = this._element[p] + "px";
          }
        }
      }, v.hide = function () {
        var t = this;if (!this._isTransitioning && e(this._element).hasClass(u)) {
          var n = e.Event(c.HIDE);if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
            var i = this._getDimension();this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", a.reflow(this._element), e(this._element).addClass(h).removeClass(d).removeClass(u);var r = this._triggerArray.length;if (r > 0) for (var o = 0; o < r; o++) {
              var s = this._triggerArray[o],
                  l = a.getSelectorFromElement(s);if (null !== l) e([].slice.call(document.querySelectorAll(l))).hasClass(u) || e(s).addClass(f).attr("aria-expanded", !1);
            }this.setTransitioning(!0);this._element.style[i] = "";var p = a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END, function () {
              t.setTransitioning(!1), e(t._element).removeClass(h).addClass(d).trigger(c.HIDDEN);
            }).emulateTransitionEnd(p);
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
            n = null;a.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
            o = [].slice.call(n.querySelectorAll(r));return e(o).each(function (e, n) {
          t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n]);
        }), n;
      }, v._addAriaAndCollapsedClass = function (t, n) {
        if (t) {
          var i = e(t).hasClass(u);n.length && e(n).toggleClass(f, !i).attr("aria-expanded", i);
        }
      }, i._getTargetFromElement = function (e) {
        var t = a.getSelectorFromElement(e);return t ? document.querySelector(t) : null;
      }, i._jQueryInterface = function (t) {
        return this.each(function () {
          var r = e(this),
              a = r.data(n),
              l = s({}, o, r.data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t ? t : {});if (!a && l.toggle && /show|hide/.test(t) && (l.toggle = !1), a || (a = new i(this, l), r.data(n, a)), "string" == typeof t) {
            if (void 0 === a[t]) throw new TypeError('No method named "' + t + '"');a[t]();
          }
        });
      }, r(i, null, [{ key: "VERSION", get: function get() {
          return "4.1.3";
        } }, { key: "Default", get: function get() {
          return o;
        } }]), i;
    }();return e(document).on(c.CLICK_DATA_API, g.DATA_TOGGLE, function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();var i = e(this),
          r = a.getSelectorFromElement(this),
          o = [].slice.call(document.querySelectorAll(r));e(o).each(function () {
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
        _ = ".dropdown-menu",
        w = ".navbar-nav",
        E = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        T = "top-start",
        k = "top-end",
        S = "bottom-start",
        x = "bottom-end",
        C = "right-start",
        D = "left-start",
        A = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" },
        P = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" },
        M = function () {
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
              }"ontouchstart" in document.documentElement && 0 === e(t).closest(w).length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(h), e(t).toggleClass(h).trigger(e.Event(u.SHOWN, r));
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
          var e = l._getParentFromElement(this._element);e && (this._menu = e.querySelector(_));
        }return this._menu;
      }, b._getPlacement = function () {
        var t = e(this._element.parentNode),
            n = S;return t.hasClass(f) ? (n = T, e(this._menu).hasClass(g) && (n = k)) : t.hasClass(p) ? n = C : t.hasClass(m) ? n = D : e(this._menu).hasClass(g) && (n = x), n;
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
        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var n = [].slice.call(document.querySelectorAll(y)), r = 0, o = n.length; r < o; r++) {
          var s = l._getParentFromElement(n[r]),
              a = e(n[r]).data(i),
              c = { relatedTarget: n[r] };if (t && "click" === t.type && (c.clickEvent = t), a) {
            var d = a._menu;if (e(s).hasClass(h) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(s, t.target))) {
              var f = e.Event(u.HIDE, c);e(s).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), n[r].setAttribute("aria-expanded", "false"), e(d).removeClass(h), e(s).removeClass(h).trigger(e.Event(u.HIDDEN, c)));
            }
          }
        }
      }, l._getParentFromElement = function (e) {
        var t,
            n = a.getSelectorFromElement(e);return n && (t = document.querySelector(n)), t || e.parentNode;
      }, l._dataApiKeydownHandler = function (t) {
        if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(_).length)) : c.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(d))) {
          var n = l._getParentFromElement(this),
              i = e(n).hasClass(h);if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
            var r = [].slice.call(n.querySelectorAll(E));if (0 !== r.length) {
              var o = r.indexOf(t.target);38 === t.which && o > 0 && o--, 40 === t.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus();
            }
          } else {
            if (27 === t.which) {
              var s = n.querySelector(y);e(s).trigger("focus");
            }e(this).trigger("click");
          }
        }
      }, r(l, null, [{ key: "VERSION", get: function get() {
          return "4.1.3";
        } }, { key: "Default", get: function get() {
          return A;
        } }, { key: "DefaultType", get: function get() {
          return P;
        } }]), l;
    }();return e(document).on(u.KEYDOWN_DATA_API, y, M._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API, _, M._dataApiKeydownHandler).on(u.CLICK_DATA_API + " " + u.KEYUP_DATA_API, M._clearMenus).on(u.CLICK_DATA_API, y, function (t) {
      t.preventDefault(), t.stopPropagation(), M._jQueryInterface.call(e(this), "toggle");
    }).on(u.CLICK_DATA_API, b, function (e) {
      e.stopPropagation();
    }), e.fn[t] = M._jQueryInterface, e.fn[t].Constructor = M, e.fn[t].noConflict = function () {
      return e.fn[t] = l, M._jQueryInterface;
    }, M;
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
        m = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top" },
        g = function () {
      function i(e, t) {
        this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(m.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0;
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
          if (this._backdrop = document.createElement("div"), this._backdrop.className = d, i && this._backdrop.classList.add(i), e(this._backdrop).appendTo(document.body), e(this._element).on(c.CLICK_DISMISS, function (e) {
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
          var n = [].slice.call(document.querySelectorAll(m.FIXED_CONTENT)),
              i = [].slice.call(document.querySelectorAll(m.STICKY_CONTENT));e(n).each(function (n, i) {
            var r = i.style.paddingRight,
                o = e(i).css("padding-right");e(i).data("padding-right", r).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px");
          }), e(i).each(function (n, i) {
            var r = i.style.marginRight,
                o = e(i).css("margin-right");e(i).data("margin-right", r).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px");
          });var r = document.body.style.paddingRight,
              o = e(document.body).css("padding-right");e(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px");
        }
      }, g._resetScrollbar = function () {
        var t = [].slice.call(document.querySelectorAll(m.FIXED_CONTENT));e(t).each(function (t, n) {
          var i = e(n).data("padding-right");e(n).removeData("padding-right"), n.style.paddingRight = i || "";
        });var n = [].slice.call(document.querySelectorAll("" + m.STICKY_CONTENT));e(n).each(function (t, n) {
          var i = e(n).data("margin-right");void 0 !== i && e(n).css("margin-right", i).removeData("margin-right");
        });var i = e(document.body).data("padding-right");e(document.body).removeData("padding-right"), document.body.style.paddingRight = i || "";
      }, g._getScrollbarWidth = function () {
        var e = document.createElement("div");e.className = u, document.body.appendChild(e);var t = e.getBoundingClientRect().width - e.clientWidth;return document.body.removeChild(e), t;
      }, i._jQueryInterface = function (t, n) {
        return this.each(function () {
          var r = e(this).data("bs.modal"),
              a = s({}, o, e(this).data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t ? t : {});if (r || (r = new i(this, a), e(this).data("bs.modal", r)), "string" == typeof t) {
            if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');r[t](n);
          } else a.show && r.show(n);
        });
      }, r(i, null, [{ key: "VERSION", get: function get() {
          return "4.1.3";
        } }, { key: "Default", get: function get() {
          return o;
        } }]), i;
    }();return e(document).on(c.CLICK_DATA_API, m.DATA_TOGGLE, function (t) {
      var n,
          i = this,
          r = a.getSelectorFromElement(this);r && (n = document.querySelector(r));var o = e(n).data("bs.modal") ? "toggle" : s({}, e(n).data(), e(this).data());"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();var l = e(n).one(c.SHOW, function (t) {
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
        _ = "focus",
        w = "click",
        E = "manual",
        T = function () {
      function o(e, t) {
        if (void 0 === n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners();
      }var T = o.prototype;return T.enable = function () {
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
          e(this.element).trigger(i);var r = e.contains(this.element.ownerDocument.documentElement, this.element);if (i.isDefaultPrevented() || !r) return;var o = this.getTipElement(),
              s = a.getUID(this.constructor.NAME);o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && e(o).addClass(m);var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
              c = this._getAttachment(l);this.addAttachmentClass(c);var u = !1 === this.config.container ? document.body : e(document).find(this.config.container);e(o).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(o).appendTo(u), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, o, { placement: c, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: y }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function onCreate(e) {
              e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
            }, onUpdate: function onUpdate(e) {
              t._handlePopperPlacementChange(e);
            } }), e(o).addClass(g), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);var d = function d() {
            t.config.animation && t._fixTransition();var n = t._hoverState;t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === f && t._leave(null, t);
          };if (e(this.tip).hasClass(m)) {
            var h = a.getTransitionDurationFromElement(this.tip);e(this.tip).one(a.TRANSITION_END, d).emulateTransitionEnd(h);
          } else d();
        }
      }, T.hide = function (t) {
        var n = this,
            i = this.getTipElement(),
            r = e.Event(this.constructor.Event.HIDE),
            o = function o() {
          n._hoverState !== h && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t();
        };if (e(this.element).trigger(r), !r.isDefaultPrevented()) {
          if (e(i).removeClass(g), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger[w] = !1, this._activeTrigger[_] = !1, this._activeTrigger[b] = !1, e(this.tip).hasClass(m)) {
            var s = a.getTransitionDurationFromElement(i);e(i).one(a.TRANSITION_END, o).emulateTransitionEnd(s);
          } else o();this._hoverState = "";
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
        var t = this.getTipElement();this.setElementContent(e(t.querySelectorAll(v)), this.getTitle()), e(t).removeClass(m + " " + g);
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
                r = n === b ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;e(t.element).on(i, t.config.selector, function (e) {
              return t._enter(e);
            }).on(r, t.config.selector, function (e) {
              return t._leave(e);
            });
          }e(t.element).closest(".modal").on("hide.bs.modal", function () {
            return t.hide();
          });
        }), this.config.selector ? this.config = s({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
      }, T._fixTitle = function () {
        var e = _typeof(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
      }, T._enter = function (t, n) {
        var i = this.constructor.DATA_KEY;(n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? _ : b] = !0), e(n.getTipElement()).hasClass(g) || n._hoverState === h ? n._hoverState = h : (clearTimeout(n._timeout), n._hoverState = h, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
          n._hoverState === h && n.show();
        }, n.config.delay.show) : n.show());
      }, T._leave = function (t, n) {
        var i = this.constructor.DATA_KEY;(n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? _ : b] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
          n._hoverState === f && n.hide();
        }, n.config.delay.hide) : n.hide());
      }, T._isWithActiveTrigger = function () {
        for (var e in this._activeTrigger) {
          if (this._activeTrigger[e]) return !0;
        }return !1;
      }, T._getConfig = function (n) {
        return "number" == typeof (n = s({}, this.constructor.Default, e(this.element).data(), "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n ? n : {})).delay && (n.delay = { show: n.delay, hide: n.delay }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), a.typeCheckConfig(t, n, this.constructor.DefaultType), n;
      }, T._getDelegateConfig = function () {
        var e = {};if (this.config) for (var t in this.config) {
          this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
        }return e;
      }, T._cleanTipClass = function () {
        var t = e(this.getTipElement()),
            n = t.attr("class").match(l);null !== n && n.length && t.removeClass(n.join(""));
      }, T._handlePopperPlacementChange = function (e) {
        var t = e.instance;this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
      }, T._fixTransition = function () {
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
          return "4.1.3";
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
    }();return e.fn[t] = T._jQueryInterface, e.fn[t].Constructor = T, e.fn[t].noConflict = function () {
      return e.fn[t] = o, T._jQueryInterface;
    }, T;
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
          return "4.1.3";
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
            r = i === f ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
          var n,
              o = a.getSelectorFromElement(t);if (o && (n = document.querySelector(o)), n) {
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
        if ("string" != typeof (n = s({}, i, "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n ? n : {})).target) {
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
        });var i = e([].slice.call(document.querySelectorAll(n.join(","))));i.hasClass(c) ? (i.closest(d.DROPDOWN).find(d.DROPDOWN_TOGGLE).addClass(u), i.addClass(u)) : (i.addClass(u), i.parents(d.NAV_LIST_GROUP).prev(d.NAV_LINKS + ", " + d.LIST_ITEMS).addClass(u), i.parents(d.NAV_LIST_GROUP).prev(d.NAV_ITEMS).children(d.NAV_LINKS).addClass(u)), e(this._scrollElement).trigger(l.ACTIVATE, { relatedTarget: t });
      }, p._clear = function () {
        var t = [].slice.call(document.querySelectorAll(this._selector));e(t).filter(d.ACTIVE).removeClass(u);
      }, n._jQueryInterface = function (t) {
        return this.each(function () {
          var i = e(this).data("bs.scrollspy");if (i || (i = new n(this, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t), e(this).data("bs.scrollspy", i)), "string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');i[t]();
          }
        });
      }, r(n, null, [{ key: "VERSION", get: function get() {
          return "4.1.3";
        } }, { key: "Default", get: function get() {
          return i;
        } }]), n;
    }();return e(window).on(l.LOAD_DATA_API, function () {
      for (var t = [].slice.call(document.querySelectorAll(d.DATA_SPY)), n = t.length; n--;) {
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
            c && (i = document.querySelector(c)), this._activate(this._element, l);var g = function g() {
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
          var l = e(t).closest(u)[0];if (l) {
            var d = [].slice.call(l.querySelectorAll(m));e(d).addClass(o);
          }t.setAttribute("aria-expanded", !0);
        }r && r();
      }, t._jQueryInterface = function (n) {
        return this.each(function () {
          var i = e(this),
              r = i.data("bs.tab");if (r || (r = new t(this), i.data("bs.tab", r)), "string" == typeof n) {
            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');r[n]();
          }
        });
      }, r(t, null, [{ key: "VERSION", get: function get() {
          return "4.1.3";
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
  "function" == typeof define && define.amd ? define("get-size/get-size", t) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t() : e.getSize = t();
}(window, function () {
  "use strict";
  function e(e) {
    var t = parseFloat(e);return -1 == e.indexOf("%") && !isNaN(t) && t;
  }var t = "undefined" == typeof console ? function () {} : function (e) {
    console.error(e);
  },
      n = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      i = n.length;function r(e) {
    var n = getComputedStyle(e);return n || t("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), n;
  }var o,
      s = !1;function a(t) {
    if (function () {
      if (!s) {
        s = !0;var t = document.createElement("div");t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";var n = document.body || document.documentElement;n.appendChild(t);var i = r(t);o = 200 == Math.round(e(i.width)), a.isBoxSizeOuter = o, n.removeChild(t);
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
          _ = c.borderTopWidth + c.borderBottomWidth,
          w = u && o,
          E = e(l.width);!1 !== E && (c.width = E + (w ? 0 : m + b));var T = e(l.height);return !1 !== T && (c.height = T + (w ? 0 : g + _)), c.innerWidth = c.width - (m + b), c.innerHeight = c.height - (g + _), c.outerWidth = c.width + v, c.outerHeight = c.height + y, c;
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
    var t = e.pageYOffset;this.element.focus({ preventScroll: !0 }), e.pageYOffset != t && e.scrollTo(e.pageXOffset, t);
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
    this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("childUIPointerDown", this._childUIPointerDownDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable), o && !s && (e.addEventListener("touchmove", function () {}), s = !0);
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
  "function" == typeof define && define.amd ? define(["flickity/js/index", "fizzy-ui-utils/utils"], t) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(require("flickity"), require("fizzy-ui-utils")) : t(e.Flickity, e.fizzyUIUtils);
}(window, function (e, t) {
  "use strict";
  e.createMethods.push("_createBgLazyLoad");var n = e.prototype;function i(e, t, n) {
    this.element = e, this.url = t, this.img = new Image(), this.flickity = n, this.load();
  }return n._createBgLazyLoad = function () {
    this.on("select", this.bgLazyLoad);
  }, n.bgLazyLoad = function () {
    var e = this.options.bgLazyLoad;if (e) for (var t = "number" == typeof e ? e : 0, n = this.getAdjacentCellElements(t), i = 0; i < n.length; i++) {
      var r = n[i];this.bgLazyLoadElem(r);for (var o = r.querySelectorAll("[data-flickity-bg-lazyload]"), s = 0; s < o.length; s++) {
        this.bgLazyLoadElem(o[s]);
      }
    }
  }, n.bgLazyLoadElem = function (e) {
    var t = e.getAttribute("data-flickity-bg-lazyload");t && new i(e, t, this);
  }, i.prototype.handleEvent = t.handleEvent, i.prototype.load = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.element.removeAttribute("data-flickity-bg-lazyload");
  }, i.prototype.onload = function (e) {
    this.element.style.backgroundImage = "url(" + this.url + ")", this.complete(e, "flickity-bg-lazyloaded");
  }, i.prototype.onerror = function (e) {
    this.complete(e, "flickity-bg-lazyerror");
  }, i.prototype.complete = function (e, t) {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this), this.element.classList.add(t), this.flickity.dispatchEvent("bgLazyLoad", e, this.element);
  }, e.BgLazyLoader = i, e;
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
      var i = function i(_i2) {
        _i2.mfpEl = this, t._openClick(_i2, e, n);
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
      _ = function _() {
    b && e(document.body).removeClass(b);
  },
      w = function w() {
    _(), t.req && t.req.abort();
  };e.magnificPopup.registerModule("ajax", { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function initAjax() {
        t.types.push("ajax"), b = t.st.ajax.cursor, u("Close.ajax", w), u("BeforeChange.ajax", w);
      }, getAjax: function getAjax(n) {
        b && e(document.body).addClass(b), t.updateStatus("loading");var i = e.extend({ url: n.src, success: function success(i, r, o) {
            var s = { data: i, xhr: o };h("ParseAjax", s), t.appendContent(e(s.data), "ajax"), n.finished = !0, _(), t._setFocus(), setTimeout(function () {
              t.wrap.addClass("mfp-ready");
            }, 16), t.updateStatus("ready"), h("AjaxContentAdded");
          }, error: function error() {
            _(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src));
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
            r = function r(o) {
          E && clearInterval(E), E = setInterval(function () {
            i.naturalWidth > 0 ? t._onImageHasSize(e) : (n > 200 && clearInterval(E), 3 === ++n ? r(10) : 40 === n ? r(50) : 100 === n && r(500));
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
          }(n), img_replaceWith: n.img }, n), t.resizeImage(), n.hasSize ? (E && clearInterval(E), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", a.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i);
      } } });var T;e.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function opener(e) {
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
            s = parseInt(i.css("padding-bottom"), 10);r.top -= e(window).scrollTop() - o;var a = { width: i.width(), height: (l ? i.innerHeight() : i[0].offsetHeight) - s - o };return void 0 === T && (T = void 0 !== document.createElement("p").style.MozTransform), T ? a["-moz-transform"] = a.transform = "translate(" + r.left + "px," + r.top + "px)" : (a.left = r.left, a.top = r.top), a;
      } } });var k = function k(e) {
    if (t.currTemplate.iframe) {
      var n = t.currTemplate.iframe.find("iframe");n.length && (e || (n[0].src = "//about:blank"), t.isIE8 && n.css("display", e ? "block" : "none"));
    }
  };e.magnificPopup.registerModule("iframe", { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function initIframe() {
        t.types.push("iframe"), u("BeforeChange", function (e, t, n) {
          t !== n && ("iframe" === t ? k() : "iframe" === n && k(!0));
        }), u("Close.iframe", function () {
          k();
        });
      }, getIframe: function getIframe(n, i) {
        var r = n.src,
            o = t.st.iframe;e.each(o.patterns, function () {
          if (r.indexOf(this.index) > -1) return this.id && (r = "string" == typeof this.id ? r.substr(r.lastIndexOf(this.id) + this.id.length, r.length) : this.id.call(this, r)), r = this.src.replace("%id%", r), !1;
        });var s = {};return o.srcAction && (s[o.srcAction] = r), t._parseMarkup(i, s, n), t.updateStatus("ready"), i;
      } } });var S = function S(e) {
    var n = t.items.length;return e > n - 1 ? e - n : e < 0 ? n + e : e;
  },
      x = function x(e, t, n) {
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
          n.text && (n.text = x(n.text, t.currItem.index, t.items.length));
        }), u("MarkupParse" + r, function (e, i, r, o) {
          var s = t.items.length;r.counter = s > 1 ? x(n.tCounter, o.index, s) : "";
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
        t.direction = !0, t.index = S(t.index + 1), t.updateItemHTML();
      }, prev: function prev() {
        t.direction = !1, t.index = S(t.index - 1), t.updateItemHTML();
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
        if (n = S(n), !t.items[n].preloaded) {
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
}), function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t();
}(this, function () {
  "use strict";
  var e, t;function n() {
    return e.apply(null, arguments);
  }function i(e) {
    return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e);
  }function r(e) {
    return null != e && "[object Object]" === Object.prototype.toString.call(e);
  }function o(e) {
    return void 0 === e;
  }function s(e) {
    return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e);
  }function a(e) {
    return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e);
  }function l(e, t) {
    var n,
        i = [];for (n = 0; n < e.length; ++n) {
      i.push(t(e[n], n));
    }return i;
  }function c(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }function u(e, t) {
    for (var n in t) {
      c(t, n) && (e[n] = t[n]);
    }return c(t, "toString") && (e.toString = t.toString), c(t, "valueOf") && (e.valueOf = t.valueOf), e;
  }function d(e, t, n, i) {
    return St(e, t, n, i, !0).utc();
  }function h(e) {
    return null == e._pf && (e._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 }), e._pf;
  }function f(e) {
    if (null == e._isValid) {
      var n = h(e),
          i = t.call(n.parsedDateParts, function (e) {
        return null != e;
      }),
          r = !isNaN(e._d.getTime()) && n.overflow < 0 && !n.empty && !n.invalidMonth && !n.invalidWeekday && !n.weekdayMismatch && !n.nullInput && !n.invalidFormat && !n.userInvalidated && (!n.meridiem || n.meridiem && i);if (e._strict && (r = r && 0 === n.charsLeftOver && 0 === n.unusedTokens.length && void 0 === n.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return r;e._isValid = r;
    }return e._isValid;
  }function p(e) {
    var t = d(NaN);return null != e ? u(h(t), e) : h(t).userInvalidated = !0, t;
  }t = Array.prototype.some ? Array.prototype.some : function (e) {
    for (var t = Object(this), n = t.length >>> 0, i = 0; i < n; i++) {
      if (i in t && e.call(this, t[i], i, t)) return !0;
    }return !1;
  };var m = n.momentProperties = [];function g(e, t) {
    var n, i, r;if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), o(t._pf) || (e._pf = h(t)), o(t._locale) || (e._locale = t._locale), 0 < m.length) for (n = 0; n < m.length; n++) {
      o(r = t[i = m[n]]) || (e[i] = r);
    }return e;
  }var v = !1;function y(e) {
    g(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === v && (v = !0, n.updateOffset(this), v = !1);
  }function b(e) {
    return e instanceof y || null != e && null != e._isAMomentObject;
  }function _(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
  }function w(e) {
    var t = +e,
        n = 0;return 0 !== t && isFinite(t) && (n = _(t)), n;
  }function E(e, t, n) {
    var i,
        r = Math.min(e.length, t.length),
        o = Math.abs(e.length - t.length),
        s = 0;for (i = 0; i < r; i++) {
      (n && e[i] !== t[i] || !n && w(e[i]) !== w(t[i])) && s++;
    }return s + o;
  }function T(e) {
    !1 === n.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e);
  }function k(e, t) {
    var i = !0;return u(function () {
      if (null != n.deprecationHandler && n.deprecationHandler(null, e), i) {
        for (var r, o = [], s = 0; s < arguments.length; s++) {
          if (r = "", "object" == _typeof(arguments[s])) {
            for (var a in r += "\n[" + s + "] ", arguments[0]) {
              r += a + ": " + arguments[0][a] + ", ";
            }r = r.slice(0, -2);
          } else r = arguments[s];o.push(r);
        }T(e + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + new Error().stack), i = !1;
      }return t.apply(this, arguments);
    }, t);
  }var S,
      x = {};function C(e, t) {
    null != n.deprecationHandler && n.deprecationHandler(e, t), x[e] || (T(t), x[e] = !0);
  }function D(e) {
    return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e);
  }function A(e, t) {
    var n,
        i = u({}, e);for (n in t) {
      c(t, n) && (r(e[n]) && r(t[n]) ? (i[n] = {}, u(i[n], e[n]), u(i[n], t[n])) : null != t[n] ? i[n] = t[n] : delete i[n]);
    }for (n in e) {
      c(e, n) && !c(t, n) && r(e[n]) && (i[n] = u({}, i[n]));
    }return i;
  }function P(e) {
    null != e && this.set(e);
  }n.suppressDeprecationWarnings = !1, n.deprecationHandler = null, S = Object.keys ? Object.keys : function (e) {
    var t,
        n = [];for (t in e) {
      c(e, t) && n.push(t);
    }return n;
  };var M = {};function I(e, t) {
    var n = e.toLowerCase();M[n] = M[n + "s"] = M[t] = e;
  }function O(e) {
    return "string" == typeof e ? M[e] || M[e.toLowerCase()] : void 0;
  }function L(e) {
    var t,
        n,
        i = {};for (n in e) {
      c(e, n) && (t = O(n)) && (i[t] = e[n]);
    }return i;
  }var N = {};function j(e, t) {
    N[e] = t;
  }function H(e, t, n) {
    var i = "" + Math.abs(e),
        r = t - i.length;return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i;
  }var F = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      R = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      q = {},
      W = {};function Y(e, t, n, i) {
    var r = i;"string" == typeof i && (r = function r() {
      return this[i]();
    }), e && (W[e] = r), t && (W[t[0]] = function () {
      return H(r.apply(this, arguments), t[1], t[2]);
    }), n && (W[n] = function () {
      return this.localeData().ordinal(r.apply(this, arguments), e);
    });
  }function z(e, t) {
    return e.isValid() ? (t = U(t, e.localeData()), q[t] = q[t] || function (e) {
      var t,
          n,
          i,
          r = e.match(F);for (t = 0, n = r.length; t < n; t++) {
        W[r[t]] ? r[t] = W[r[t]] : r[t] = (i = r[t]).match(/\[[\s\S]/) ? i.replace(/^\[|\]$/g, "") : i.replace(/\\/g, "");
      }return function (t) {
        var i,
            o = "";for (i = 0; i < n; i++) {
          o += D(r[i]) ? r[i].call(t, e) : r[i];
        }return o;
      };
    }(t), q[t](e)) : e.localeData().invalidDate();
  }function U(e, t) {
    var n = 5;function i(e) {
      return t.longDateFormat(e) || e;
    }for (R.lastIndex = 0; 0 <= n && R.test(e);) {
      e = e.replace(R, i), R.lastIndex = 0, n -= 1;
    }return e;
  }var B = /\d/,
      V = /\d\d/,
      G = /\d{3}/,
      K = /\d{4}/,
      $ = /[+-]?\d{6}/,
      Q = /\d\d?/,
      X = /\d\d\d\d?/,
      Z = /\d\d\d\d\d\d?/,
      J = /\d{1,3}/,
      ee = /\d{1,4}/,
      te = /[+-]?\d{1,6}/,
      ne = /\d+/,
      ie = /[+-]?\d+/,
      re = /Z|[+-]\d\d:?\d\d/gi,
      oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
      se = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
      ae = {};function le(e, t, n) {
    ae[e] = D(t) ? t : function (e, i) {
      return e && n ? n : t;
    };
  }function ce(e, t) {
    return c(ae, e) ? ae[e](t._strict, t._locale) : new RegExp(ue(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, i, r) {
      return t || n || i || r;
    })));
  }function ue(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }var de = {};function he(e, t) {
    var n,
        i = t;for ("string" == typeof e && (e = [e]), s(t) && (i = function i(e, n) {
      n[t] = w(e);
    }), n = 0; n < e.length; n++) {
      de[e[n]] = i;
    }
  }function fe(e, t) {
    he(e, function (e, n, i, r) {
      i._w = i._w || {}, t(e, i._w, i, r);
    });
  }var pe = 0,
      me = 1,
      ge = 2,
      ve = 3,
      ye = 4,
      be = 5,
      _e = 6,
      we = 7,
      Ee = 8;function Te(e) {
    return ke(e) ? 366 : 365;
  }function ke(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
  }Y("Y", 0, 0, function () {
    var e = this.year();return e <= 9999 ? "" + e : "+" + e;
  }), Y(0, ["YY", 2], 0, function () {
    return this.year() % 100;
  }), Y(0, ["YYYY", 4], 0, "year"), Y(0, ["YYYYY", 5], 0, "year"), Y(0, ["YYYYYY", 6, !0], 0, "year"), I("year", "y"), j("year", 1), le("Y", ie), le("YY", Q, V), le("YYYY", ee, K), le("YYYYY", te, $), le("YYYYYY", te, $), he(["YYYYY", "YYYYYY"], pe), he("YYYY", function (e, t) {
    t[pe] = 2 === e.length ? n.parseTwoDigitYear(e) : w(e);
  }), he("YY", function (e, t) {
    t[pe] = n.parseTwoDigitYear(e);
  }), he("Y", function (e, t) {
    t[pe] = parseInt(e, 10);
  }), n.parseTwoDigitYear = function (e) {
    return w(e) + (68 < w(e) ? 1900 : 2e3);
  };var Se,
      xe = Ce("FullYear", !0);function Ce(e, t) {
    return function (i) {
      return null != i ? (Ae(this, e, i), n.updateOffset(this, t), this) : De(this, e);
    };
  }function De(e, t) {
    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
  }function Ae(e, t, n) {
    e.isValid() && !isNaN(n) && ("FullYear" === t && ke(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Pe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
  }function Pe(e, t) {
    if (isNaN(e) || isNaN(t)) return NaN;var n = (t % 12 + 12) % 12;return e += (t - n) / 12, 1 === n ? ke(e) ? 29 : 28 : 31 - n % 7 % 2;
  }Se = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
    var t;for (t = 0; t < this.length; ++t) {
      if (this[t] === e) return t;
    }return -1;
  }, Y("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  }), Y("MMM", 0, 0, function (e) {
    return this.localeData().monthsShort(this, e);
  }), Y("MMMM", 0, 0, function (e) {
    return this.localeData().months(this, e);
  }), I("month", "M"), j("month", 8), le("M", Q), le("MM", Q, V), le("MMM", function (e, t) {
    return t.monthsShortRegex(e);
  }), le("MMMM", function (e, t) {
    return t.monthsRegex(e);
  }), he(["M", "MM"], function (e, t) {
    t[me] = w(e) - 1;
  }), he(["MMM", "MMMM"], function (e, t, n, i) {
    var r = n._locale.monthsParse(e, i, n._strict);null != r ? t[me] = r : h(n).invalidMonth = e;
  });var Me = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
      Ie = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      Oe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Le(e, t) {
    var n;if (!e.isValid()) return e;if ("string" == typeof t) if (/^\d+$/.test(t)) t = w(t);else if (!s(t = e.localeData().monthsParse(t))) return e;return n = Math.min(e.date(), Pe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e;
  }function Ne(e) {
    return null != e ? (Le(this, e), n.updateOffset(this, !0), this) : De(this, "Month");
  }var je = se,
      He = se;function Fe() {
    function e(e, t) {
      return t.length - e.length;
    }var t,
        n,
        i = [],
        r = [],
        o = [];for (t = 0; t < 12; t++) {
      n = d([2e3, t]), i.push(this.monthsShort(n, "")), r.push(this.months(n, "")), o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
    }for (i.sort(e), r.sort(e), o.sort(e), t = 0; t < 12; t++) {
      i[t] = ue(i[t]), r[t] = ue(r[t]);
    }for (t = 0; t < 24; t++) {
      o[t] = ue(o[t]);
    }this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i");
  }function Re(e) {
    var t = new Date(Date.UTC.apply(null, arguments));return e < 100 && 0 <= e && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t;
  }function qe(e, t, n) {
    var i = 7 + t - n;return -(7 + Re(e, 0, i).getUTCDay() - t) % 7 + i - 1;
  }function We(e, t, n, i, r) {
    var o,
        s,
        a = 1 + 7 * (t - 1) + (7 + n - i) % 7 + qe(e, i, r);return a <= 0 ? s = Te(o = e - 1) + a : a > Te(e) ? (o = e + 1, s = a - Te(e)) : (o = e, s = a), { year: o, dayOfYear: s };
  }function Ye(e, t, n) {
    var i,
        r,
        o = qe(e.year(), t, n),
        s = Math.floor((e.dayOfYear() - o - 1) / 7) + 1;return s < 1 ? i = s + ze(r = e.year() - 1, t, n) : s > ze(e.year(), t, n) ? (i = s - ze(e.year(), t, n), r = e.year() + 1) : (r = e.year(), i = s), { week: i, year: r };
  }function ze(e, t, n) {
    var i = qe(e, t, n),
        r = qe(e + 1, t, n);return (Te(e) - i + r) / 7;
  }Y("w", ["ww", 2], "wo", "week"), Y("W", ["WW", 2], "Wo", "isoWeek"), I("week", "w"), I("isoWeek", "W"), j("week", 5), j("isoWeek", 5), le("w", Q), le("ww", Q, V), le("W", Q), le("WW", Q, V), fe(["w", "ww", "W", "WW"], function (e, t, n, i) {
    t[i.substr(0, 1)] = w(e);
  }), Y("d", 0, "do", "day"), Y("dd", 0, 0, function (e) {
    return this.localeData().weekdaysMin(this, e);
  }), Y("ddd", 0, 0, function (e) {
    return this.localeData().weekdaysShort(this, e);
  }), Y("dddd", 0, 0, function (e) {
    return this.localeData().weekdays(this, e);
  }), Y("e", 0, 0, "weekday"), Y("E", 0, 0, "isoWeekday"), I("day", "d"), I("weekday", "e"), I("isoWeekday", "E"), j("day", 11), j("weekday", 11), j("isoWeekday", 11), le("d", Q), le("e", Q), le("E", Q), le("dd", function (e, t) {
    return t.weekdaysMinRegex(e);
  }), le("ddd", function (e, t) {
    return t.weekdaysShortRegex(e);
  }), le("dddd", function (e, t) {
    return t.weekdaysRegex(e);
  }), fe(["dd", "ddd", "dddd"], function (e, t, n, i) {
    var r = n._locale.weekdaysParse(e, i, n._strict);null != r ? t.d = r : h(n).invalidWeekday = e;
  }), fe(["d", "e", "E"], function (e, t, n, i) {
    t[i] = w(e);
  });var Ue = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      Be = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      Ve = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      Ge = se,
      Ke = se,
      $e = se;function Qe() {
    function e(e, t) {
      return t.length - e.length;
    }var t,
        n,
        i,
        r,
        o,
        s = [],
        a = [],
        l = [],
        c = [];for (t = 0; t < 7; t++) {
      n = d([2e3, 1]).day(t), i = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), o = this.weekdays(n, ""), s.push(i), a.push(r), l.push(o), c.push(i), c.push(r), c.push(o);
    }for (s.sort(e), a.sort(e), l.sort(e), c.sort(e), t = 0; t < 7; t++) {
      a[t] = ue(a[t]), l[t] = ue(l[t]), c[t] = ue(c[t]);
    }this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i");
  }function Xe() {
    return this.hours() % 12 || 12;
  }function Ze(e, t) {
    Y(e, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), t);
    });
  }function Je(e, t) {
    return t._meridiemParse;
  }Y("H", ["HH", 2], 0, "hour"), Y("h", ["hh", 2], 0, Xe), Y("k", ["kk", 2], 0, function () {
    return this.hours() || 24;
  }), Y("hmm", 0, 0, function () {
    return "" + Xe.apply(this) + H(this.minutes(), 2);
  }), Y("hmmss", 0, 0, function () {
    return "" + Xe.apply(this) + H(this.minutes(), 2) + H(this.seconds(), 2);
  }), Y("Hmm", 0, 0, function () {
    return "" + this.hours() + H(this.minutes(), 2);
  }), Y("Hmmss", 0, 0, function () {
    return "" + this.hours() + H(this.minutes(), 2) + H(this.seconds(), 2);
  }), Ze("a", !0), Ze("A", !1), I("hour", "h"), j("hour", 13), le("a", Je), le("A", Je), le("H", Q), le("h", Q), le("k", Q), le("HH", Q, V), le("hh", Q, V), le("kk", Q, V), le("hmm", X), le("hmmss", Z), le("Hmm", X), le("Hmmss", Z), he(["H", "HH"], ve), he(["k", "kk"], function (e, t, n) {
    var i = w(e);t[ve] = 24 === i ? 0 : i;
  }), he(["a", "A"], function (e, t, n) {
    n._isPm = n._locale.isPM(e), n._meridiem = e;
  }), he(["h", "hh"], function (e, t, n) {
    t[ve] = w(e), h(n).bigHour = !0;
  }), he("hmm", function (e, t, n) {
    var i = e.length - 2;t[ve] = w(e.substr(0, i)), t[ye] = w(e.substr(i)), h(n).bigHour = !0;
  }), he("hmmss", function (e, t, n) {
    var i = e.length - 4,
        r = e.length - 2;t[ve] = w(e.substr(0, i)), t[ye] = w(e.substr(i, 2)), t[be] = w(e.substr(r)), h(n).bigHour = !0;
  }), he("Hmm", function (e, t, n) {
    var i = e.length - 2;t[ve] = w(e.substr(0, i)), t[ye] = w(e.substr(i));
  }), he("Hmmss", function (e, t, n) {
    var i = e.length - 4,
        r = e.length - 2;t[ve] = w(e.substr(0, i)), t[ye] = w(e.substr(i, 2)), t[be] = w(e.substr(r));
  });var et,
      tt = Ce("Hours", !0),
      nt = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: Ie, monthsShort: Oe, week: { dow: 0, doy: 6 }, weekdays: Ue, weekdaysMin: Ve, weekdaysShort: Be, meridiemParse: /[ap]\.?m?\.?/i },
      it = {},
      rt = {};function ot(e) {
    return e ? e.toLowerCase().replace("_", "-") : e;
  }function st(e) {
    var t = null;if (!it[e] && "undefined" != typeof module && module && module.exports) try {
      t = et._abbr, require("./locale/" + e), at(t);
    } catch (e) {}return it[e];
  }function at(e, t) {
    var n;return e && ((n = o(t) ? ct(e) : lt(e, t)) ? et = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), et._abbr;
  }function lt(e, t) {
    if (null !== t) {
      var n,
          i = nt;if (t.abbr = e, null != it[e]) C("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = it[e]._config;else if (null != t.parentLocale) if (null != it[t.parentLocale]) i = it[t.parentLocale]._config;else {
        if (null == (n = st(t.parentLocale))) return rt[t.parentLocale] || (rt[t.parentLocale] = []), rt[t.parentLocale].push({ name: e, config: t }), null;i = n._config;
      }return it[e] = new P(A(i, t)), rt[e] && rt[e].forEach(function (e) {
        lt(e.name, e.config);
      }), at(e), it[e];
    }return delete it[e], null;
  }function ct(e) {
    var t;if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return et;if (!i(e)) {
      if (t = st(e)) return t;e = [e];
    }return function (e) {
      for (var t, n, i, r, o = 0; o < e.length;) {
        for (t = (r = ot(e[o]).split("-")).length, n = (n = ot(e[o + 1])) ? n.split("-") : null; 0 < t;) {
          if (i = st(r.slice(0, t).join("-"))) return i;if (n && n.length >= t && E(r, n, !0) >= t - 1) break;t--;
        }o++;
      }return et;
    }(e);
  }function ut(e) {
    var t,
        n = e._a;return n && -2 === h(e).overflow && (t = n[me] < 0 || 11 < n[me] ? me : n[ge] < 1 || n[ge] > Pe(n[pe], n[me]) ? ge : n[ve] < 0 || 24 < n[ve] || 24 === n[ve] && (0 !== n[ye] || 0 !== n[be] || 0 !== n[_e]) ? ve : n[ye] < 0 || 59 < n[ye] ? ye : n[be] < 0 || 59 < n[be] ? be : n[_e] < 0 || 999 < n[_e] ? _e : -1, h(e)._overflowDayOfYear && (t < pe || ge < t) && (t = ge), h(e)._overflowWeeks && -1 === t && (t = we), h(e)._overflowWeekday && -1 === t && (t = Ee), h(e).overflow = t), e;
  }function dt(e, t, n) {
    return null != e ? e : null != t ? t : n;
  }function ht(e) {
    var t,
        i,
        r,
        o,
        s,
        a = [];if (!e._d) {
      var l, c;for (l = e, c = new Date(n.now()), r = l._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()], e._w && null == e._a[ge] && null == e._a[me] && function (e) {
        var t, n, i, r, o, s, a, l;if (null != (t = e._w).GG || null != t.W || null != t.E) o = 1, s = 4, n = dt(t.GG, e._a[pe], Ye(xt(), 1, 4).year), i = dt(t.W, 1), ((r = dt(t.E, 1)) < 1 || 7 < r) && (l = !0);else {
          o = e._locale._week.dow, s = e._locale._week.doy;var c = Ye(xt(), o, s);n = dt(t.gg, e._a[pe], c.year), i = dt(t.w, c.week), null != t.d ? ((r = t.d) < 0 || 6 < r) && (l = !0) : null != t.e ? (r = t.e + o, (t.e < 0 || 6 < t.e) && (l = !0)) : r = o;
        }i < 1 || i > ze(n, o, s) ? h(e)._overflowWeeks = !0 : null != l ? h(e)._overflowWeekday = !0 : (a = We(n, i, r, o, s), e._a[pe] = a.year, e._dayOfYear = a.dayOfYear);
      }(e), null != e._dayOfYear && (s = dt(e._a[pe], r[pe]), (e._dayOfYear > Te(s) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0), i = Re(s, 0, e._dayOfYear), e._a[me] = i.getUTCMonth(), e._a[ge] = i.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) {
        e._a[t] = a[t] = r[t];
      }for (; t < 7; t++) {
        e._a[t] = a[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
      }24 === e._a[ve] && 0 === e._a[ye] && 0 === e._a[be] && 0 === e._a[_e] && (e._nextDay = !0, e._a[ve] = 0), e._d = (e._useUTC ? Re : function (e, t, n, i, r, o, s) {
        var a = new Date(e, t, n, i, r, o, s);return e < 100 && 0 <= e && isFinite(a.getFullYear()) && a.setFullYear(e), a;
      }).apply(null, a), o = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ve] = 24), e._w && void 0 !== e._w.d && e._w.d !== o && (h(e).weekdayMismatch = !0);
    }
  }var ft = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      pt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      mt = /Z|[+-]\d\d(?::?\d\d)?/,
      gt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
      vt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
      yt = /^\/?Date\((\-?\d+)/i;function bt(e) {
    var t,
        n,
        i,
        r,
        o,
        s,
        a = e._i,
        l = ft.exec(a) || pt.exec(a);if (l) {
      for (h(e).iso = !0, t = 0, n = gt.length; t < n; t++) {
        if (gt[t][1].exec(l[1])) {
          r = gt[t][0], i = !1 !== gt[t][2];break;
        }
      }if (null == r) return void (e._isValid = !1);if (l[3]) {
        for (t = 0, n = vt.length; t < n; t++) {
          if (vt[t][1].exec(l[3])) {
            o = (l[2] || " ") + vt[t][0];break;
          }
        }if (null == o) return void (e._isValid = !1);
      }if (!i && null != o) return void (e._isValid = !1);if (l[4]) {
        if (!mt.exec(l[4])) return void (e._isValid = !1);s = "Z";
      }e._f = r + (o || "") + (s || ""), Tt(e);
    } else e._isValid = !1;
  }var _t = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;var wt = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };function Et(e) {
    var t,
        n,
        i,
        r = _t.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));if (r) {
      var o = function (e, t, n, i, r, o) {
        var s = [function (e) {
          var t = parseInt(e, 10);return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
        }(e), Oe.indexOf(t), parseInt(n, 10), parseInt(i, 10), parseInt(r, 10)];return o && s.push(parseInt(o, 10)), s;
      }(r[4], r[3], r[2], r[5], r[6], r[7]);if (n = o, i = e, (t = r[1]) && Be.indexOf(t) !== new Date(n[0], n[1], n[2]).getDay() && (h(i).weekdayMismatch = !0, !(i._isValid = !1))) return;e._a = o, e._tzm = function (e, t, n) {
        if (e) return wt[e];if (t) return 0;var i = parseInt(n, 10),
            r = i % 100;return (i - r) / 100 * 60 + r;
      }(r[8], r[9], r[10]), e._d = Re.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), h(e).rfc2822 = !0;
    } else e._isValid = !1;
  }function Tt(e) {
    if (e._f !== n.ISO_8601) {
      if (e._f !== n.RFC_2822) {
        e._a = [], h(e).empty = !0;var t,
            i,
            r,
            o,
            s,
            a,
            l,
            u,
            d = "" + e._i,
            f = d.length,
            p = 0;for (r = U(e._f, e._locale).match(F) || [], t = 0; t < r.length; t++) {
          o = r[t], (i = (d.match(ce(o, e)) || [])[0]) && (0 < (s = d.substr(0, d.indexOf(i))).length && h(e).unusedInput.push(s), d = d.slice(d.indexOf(i) + i.length), p += i.length), W[o] ? (i ? h(e).empty = !1 : h(e).unusedTokens.push(o), a = o, u = e, null != (l = i) && c(de, a) && de[a](l, u._a, u, a)) : e._strict && !i && h(e).unusedTokens.push(o);
        }h(e).charsLeftOver = f - p, 0 < d.length && h(e).unusedInput.push(d), e._a[ve] <= 12 && !0 === h(e).bigHour && 0 < e._a[ve] && (h(e).bigHour = void 0), h(e).parsedDateParts = e._a.slice(0), h(e).meridiem = e._meridiem, e._a[ve] = function (e, t, n) {
          var i;return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : (null != e.isPM && ((i = e.isPM(n)) && t < 12 && (t += 12), i || 12 !== t || (t = 0)), t);
        }(e._locale, e._a[ve], e._meridiem), ht(e), ut(e);
      } else Et(e);
    } else bt(e);
  }function kt(e) {
    var t,
        c,
        d,
        m,
        v = e._i,
        _ = e._f;return e._locale = e._locale || ct(e._l), null === v || void 0 === _ && "" === v ? p({ nullInput: !0 }) : ("string" == typeof v && (e._i = v = e._locale.preparse(v)), b(v) ? new y(ut(v)) : (a(v) ? e._d = v : i(_) ? function (e) {
      var t, n, i, r, o;if (0 === e._f.length) return h(e).invalidFormat = !0, e._d = new Date(NaN);for (r = 0; r < e._f.length; r++) {
        o = 0, t = g({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], Tt(t), f(t) && (o += h(t).charsLeftOver, o += 10 * h(t).unusedTokens.length, h(t).score = o, (null == i || o < i) && (i = o, n = t));
      }u(e, n || t);
    }(e) : _ ? Tt(e) : o(c = (t = e)._i) ? t._d = new Date(n.now()) : a(c) ? t._d = new Date(c.valueOf()) : "string" == typeof c ? (d = t, null === (m = yt.exec(d._i)) ? (bt(d), !1 === d._isValid && (delete d._isValid, Et(d), !1 === d._isValid && (delete d._isValid, n.createFromInputFallback(d)))) : d._d = new Date(+m[1])) : i(c) ? (t._a = l(c.slice(0), function (e) {
      return parseInt(e, 10);
    }), ht(t)) : r(c) ? function (e) {
      if (!e._d) {
        var t = L(e._i);e._a = l([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
          return e && parseInt(e, 10);
        }), ht(e);
      }
    }(t) : s(c) ? t._d = new Date(c) : n.createFromInputFallback(t), f(e) || (e._d = null), e));
  }function St(e, t, n, o, s) {
    var a,
        l = {};return !0 !== n && !1 !== n || (o = n, n = void 0), (r(e) && function (e) {
      if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;var t;for (t in e) {
        if (e.hasOwnProperty(t)) return !1;
      }return !0;
    }(e) || i(e) && 0 === e.length) && (e = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = s, l._l = n, l._i = e, l._f = t, l._strict = o, (a = new y(ut(kt(l))))._nextDay && (a.add(1, "d"), a._nextDay = void 0), a;
  }function xt(e, t, n, i) {
    return St(e, t, n, i, !1);
  }n.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }), n.ISO_8601 = function () {}, n.RFC_2822 = function () {};var Ct = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var e = xt.apply(null, arguments);return this.isValid() && e.isValid() ? e < this ? this : e : p();
  }),
      Dt = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var e = xt.apply(null, arguments);return this.isValid() && e.isValid() ? this < e ? this : e : p();
  });function At(e, t) {
    var n, r;if (1 === t.length && i(t[0]) && (t = t[0]), !t.length) return xt();for (n = t[0], r = 1; r < t.length; ++r) {
      t[r].isValid() && !t[r][e](n) || (n = t[r]);
    }return n;
  }var Pt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];function Mt(e) {
    var t = L(e),
        n = t.year || 0,
        i = t.quarter || 0,
        r = t.month || 0,
        o = t.week || 0,
        s = t.day || 0,
        a = t.hour || 0,
        l = t.minute || 0,
        c = t.second || 0,
        u = t.millisecond || 0;this._isValid = function (e) {
      for (var t in e) {
        if (-1 === Se.call(Pt, t) || null != e[t] && isNaN(e[t])) return !1;
      }for (var n = !1, i = 0; i < Pt.length; ++i) {
        if (e[Pt[i]]) {
          if (n) return !1;parseFloat(e[Pt[i]]) !== w(e[Pt[i]]) && (n = !0);
        }
      }return !0;
    }(t), this._milliseconds = +u + 1e3 * c + 6e4 * l + 1e3 * a * 60 * 60, this._days = +s + 7 * o, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = ct(), this._bubble();
  }function It(e) {
    return e instanceof Mt;
  }function Ot(e) {
    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
  }function Lt(e, t) {
    Y(e, 0, 0, function () {
      var e = this.utcOffset(),
          n = "+";return e < 0 && (e = -e, n = "-"), n + H(~~(e / 60), 2) + t + H(~~e % 60, 2);
    });
  }Lt("Z", ":"), Lt("ZZ", ""), le("Z", oe), le("ZZ", oe), he(["Z", "ZZ"], function (e, t, n) {
    n._useUTC = !0, n._tzm = jt(oe, e);
  });var Nt = /([\+\-]|\d\d)/gi;function jt(e, t) {
    var n = (t || "").match(e);if (null === n) return null;var i = ((n[n.length - 1] || []) + "").match(Nt) || ["-", 0, 0],
        r = 60 * i[1] + w(i[2]);return 0 === r ? 0 : "+" === i[0] ? r : -r;
  }function Ht(e, t) {
    var i, r;return t._isUTC ? (i = t.clone(), r = (b(e) || a(e) ? e.valueOf() : xt(e).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + r), n.updateOffset(i, !1), i) : xt(e).local();
  }function Ft(e) {
    return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
  }function Rt() {
    return !!this.isValid() && this._isUTC && 0 === this._offset;
  }n.updateOffset = function () {};var qt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
      Wt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Yt(e, t) {
    var n,
        i,
        r,
        o = e,
        a = null;return It(e) ? o = { ms: e._milliseconds, d: e._days, M: e._months } : s(e) ? (o = {}, t ? o[t] = e : o.milliseconds = e) : (a = qt.exec(e)) ? (n = "-" === a[1] ? -1 : 1, o = { y: 0, d: w(a[ge]) * n, h: w(a[ve]) * n, m: w(a[ye]) * n, s: w(a[be]) * n, ms: w(Ot(1e3 * a[_e])) * n }) : (a = Wt.exec(e)) ? (n = "-" === a[1] ? -1 : (a[1], 1), o = { y: zt(a[2], n), M: zt(a[3], n), w: zt(a[4], n), d: zt(a[5], n), h: zt(a[6], n), m: zt(a[7], n), s: zt(a[8], n) }) : null == o ? o = {} : "object" == (typeof o === "undefined" ? "undefined" : _typeof(o)) && ("from" in o || "to" in o) && (r = function (e, t) {
      var n;return e.isValid() && t.isValid() ? (t = Ht(t, e), e.isBefore(t) ? n = Ut(e, t) : ((n = Ut(t, e)).milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
    }(xt(o.from), xt(o.to)), (o = {}).ms = r.milliseconds, o.M = r.months), i = new Mt(o), It(e) && c(e, "_locale") && (i._locale = e._locale), i;
  }function zt(e, t) {
    var n = e && parseFloat(e.replace(",", "."));return (isNaN(n) ? 0 : n) * t;
  }function Ut(e, t) {
    var n = { milliseconds: 0, months: 0 };return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
  }function Bt(e, t) {
    return function (n, i) {
      var r;return null === i || isNaN(+i) || (C(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = n, n = i, i = r), Vt(this, Yt(n = "string" == typeof n ? +n : n, i), e), this;
    };
  }function Vt(e, t, i, r) {
    var o = t._milliseconds,
        s = Ot(t._days),
        a = Ot(t._months);e.isValid() && (r = null == r || r, a && Le(e, De(e, "Month") + a * i), s && Ae(e, "Date", De(e, "Date") + s * i), o && e._d.setTime(e._d.valueOf() + o * i), r && n.updateOffset(e, s || a));
  }Yt.fn = Mt.prototype, Yt.invalid = function () {
    return Yt(NaN);
  };var Gt = Bt(1, "add"),
      Kt = Bt(-1, "subtract");function $t(e, t) {
    var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
        i = e.clone().add(n, "months");return -(n + (t - i < 0 ? (t - i) / (i - e.clone().add(n - 1, "months")) : (t - i) / (e.clone().add(n + 1, "months") - i))) || 0;
  }function Qt(e) {
    var t;return void 0 === e ? this._locale._abbr : (null != (t = ct(e)) && (this._locale = t), this);
  }n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";var Xt = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
    return void 0 === e ? this.localeData() : this.locale(e);
  });function Zt() {
    return this._locale;
  }function Jt(e, t) {
    Y(0, [e, e.length], 0, t);
  }function en(e, t, n, i, r) {
    var o;return null == e ? Ye(this, i, r).year : ((o = ze(e, i, r)) < t && (t = o), function (e, t, n, i, r) {
      var o = We(e, t, n, i, r),
          s = Re(o.year, 0, o.dayOfYear);return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this;
    }.call(this, e, t, n, i, r));
  }Y(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  }), Y(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100;
  }), Jt("gggg", "weekYear"), Jt("ggggg", "weekYear"), Jt("GGGG", "isoWeekYear"), Jt("GGGGG", "isoWeekYear"), I("weekYear", "gg"), I("isoWeekYear", "GG"), j("weekYear", 1), j("isoWeekYear", 1), le("G", ie), le("g", ie), le("GG", Q, V), le("gg", Q, V), le("GGGG", ee, K), le("gggg", ee, K), le("GGGGG", te, $), le("ggggg", te, $), fe(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, i) {
    t[i.substr(0, 2)] = w(e);
  }), fe(["gg", "GG"], function (e, t, i, r) {
    t[r] = n.parseTwoDigitYear(e);
  }), Y("Q", 0, "Qo", "quarter"), I("quarter", "Q"), j("quarter", 7), le("Q", B), he("Q", function (e, t) {
    t[me] = 3 * (w(e) - 1);
  }), Y("D", ["DD", 2], "Do", "date"), I("date", "D"), j("date", 9), le("D", Q), le("DD", Q, V), le("Do", function (e, t) {
    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
  }), he(["D", "DD"], ge), he("Do", function (e, t) {
    t[ge] = w(e.match(Q)[0]);
  });var tn = Ce("Date", !0);Y("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), I("dayOfYear", "DDD"), j("dayOfYear", 4), le("DDD", J), le("DDDD", G), he(["DDD", "DDDD"], function (e, t, n) {
    n._dayOfYear = w(e);
  }), Y("m", ["mm", 2], 0, "minute"), I("minute", "m"), j("minute", 14), le("m", Q), le("mm", Q, V), he(["m", "mm"], ye);var nn = Ce("Minutes", !1);Y("s", ["ss", 2], 0, "second"), I("second", "s"), j("second", 15), le("s", Q), le("ss", Q, V), he(["s", "ss"], be);var rn,
      on = Ce("Seconds", !1);for (Y("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  }), Y(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10);
  }), Y(0, ["SSS", 3], 0, "millisecond"), Y(0, ["SSSS", 4], 0, function () {
    return 10 * this.millisecond();
  }), Y(0, ["SSSSS", 5], 0, function () {
    return 100 * this.millisecond();
  }), Y(0, ["SSSSSS", 6], 0, function () {
    return 1e3 * this.millisecond();
  }), Y(0, ["SSSSSSS", 7], 0, function () {
    return 1e4 * this.millisecond();
  }), Y(0, ["SSSSSSSS", 8], 0, function () {
    return 1e5 * this.millisecond();
  }), Y(0, ["SSSSSSSSS", 9], 0, function () {
    return 1e6 * this.millisecond();
  }), I("millisecond", "ms"), j("millisecond", 16), le("S", J, B), le("SS", J, V), le("SSS", J, G), rn = "SSSS"; rn.length <= 9; rn += "S") {
    le(rn, ne);
  }function sn(e, t) {
    t[_e] = w(1e3 * ("0." + e));
  }for (rn = "S"; rn.length <= 9; rn += "S") {
    he(rn, sn);
  }var an = Ce("Milliseconds", !1);Y("z", 0, 0, "zoneAbbr"), Y("zz", 0, 0, "zoneName");var ln = y.prototype;function cn(e) {
    return e;
  }ln.add = Gt, ln.calendar = function (e, t) {
    var i = e || xt(),
        r = Ht(i, this).startOf("day"),
        o = n.calendarFormat(this, r) || "sameElse",
        s = t && (D(t[o]) ? t[o].call(this, i) : t[o]);return this.format(s || this.localeData().calendar(o, this, xt(i)));
  }, ln.clone = function () {
    return new y(this);
  }, ln.diff = function (e, t, n) {
    var i, r, o;if (!this.isValid()) return NaN;if (!(i = Ht(e, this)).isValid()) return NaN;switch (r = 6e4 * (i.utcOffset() - this.utcOffset()), t = O(t)) {case "year":
        o = $t(this, i) / 12;break;case "month":
        o = $t(this, i);break;case "quarter":
        o = $t(this, i) / 3;break;case "second":
        o = (this - i) / 1e3;break;case "minute":
        o = (this - i) / 6e4;break;case "hour":
        o = (this - i) / 36e5;break;case "day":
        o = (this - i - r) / 864e5;break;case "week":
        o = (this - i - r) / 6048e5;break;default:
        o = this - i;}return n ? o : _(o);
  }, ln.endOf = function (e) {
    return void 0 === (e = O(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"));
  }, ln.format = function (e) {
    e || (e = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);var t = z(this, e);return this.localeData().postformat(t);
  }, ln.from = function (e, t) {
    return this.isValid() && (b(e) && e.isValid() || xt(e).isValid()) ? Yt({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
  }, ln.fromNow = function (e) {
    return this.from(xt(), e);
  }, ln.to = function (e, t) {
    return this.isValid() && (b(e) && e.isValid() || xt(e).isValid()) ? Yt({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
  }, ln.toNow = function (e) {
    return this.to(xt(), e);
  }, ln.get = function (e) {
    return D(this[e = O(e)]) ? this[e]() : this;
  }, ln.invalidAt = function () {
    return h(this).overflow;
  }, ln.isAfter = function (e, t) {
    var n = b(e) ? e : xt(e);return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = O(o(t) ? "millisecond" : t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf());
  }, ln.isBefore = function (e, t) {
    var n = b(e) ? e : xt(e);return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = O(o(t) ? "millisecond" : t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf());
  }, ln.isBetween = function (e, t, n, i) {
    return ("(" === (i = i || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === i[1] ? this.isBefore(t, n) : !this.isAfter(t, n));
  }, ln.isSame = function (e, t) {
    var n,
        i = b(e) ? e : xt(e);return !(!this.isValid() || !i.isValid()) && ("millisecond" === (t = O(t || "millisecond")) ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()));
  }, ln.isSameOrAfter = function (e, t) {
    return this.isSame(e, t) || this.isAfter(e, t);
  }, ln.isSameOrBefore = function (e, t) {
    return this.isSame(e, t) || this.isBefore(e, t);
  }, ln.isValid = function () {
    return f(this);
  }, ln.lang = Xt, ln.locale = Qt, ln.localeData = Zt, ln.max = Dt, ln.min = Ct, ln.parsingFlags = function () {
    return u({}, h(this));
  }, ln.set = function (e, t) {
    if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) for (var n = function (e) {
      var t = [];for (var n in e) {
        t.push({ unit: n, priority: N[n] });
      }return t.sort(function (e, t) {
        return e.priority - t.priority;
      }), t;
    }(e = L(e)), i = 0; i < n.length; i++) {
      this[n[i].unit](e[n[i].unit]);
    } else if (D(this[e = O(e)])) return this[e](t);return this;
  }, ln.startOf = function (e) {
    switch (e = O(e)) {case "year":
        this.month(0);case "quarter":case "month":
        this.date(1);case "week":case "isoWeek":case "day":case "date":
        this.hours(0);case "hour":
        this.minutes(0);case "minute":
        this.seconds(0);case "second":
        this.milliseconds(0);}return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this;
  }, ln.subtract = Kt, ln.toArray = function () {
    var e = this;return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()];
  }, ln.toObject = function () {
    var e = this;return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() };
  }, ln.toDate = function () {
    return new Date(this.valueOf());
  }, ln.toISOString = function (e) {
    if (!this.isValid()) return null;var t = !0 !== e,
        n = t ? this.clone().utc() : this;return n.year() < 0 || 9999 < n.year() ? z(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : D(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", z(n, "Z")) : z(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
  }, ln.inspect = function () {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";var e = "moment",
        t = "";this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");var n = "[" + e + '("]',
        i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        r = t + '[")]';return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + r);
  }, ln.toJSON = function () {
    return this.isValid() ? this.toISOString() : null;
  }, ln.toString = function () {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }, ln.unix = function () {
    return Math.floor(this.valueOf() / 1e3);
  }, ln.valueOf = function () {
    return this._d.valueOf() - 6e4 * (this._offset || 0);
  }, ln.creationData = function () {
    return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict };
  }, ln.year = xe, ln.isLeapYear = function () {
    return ke(this.year());
  }, ln.weekYear = function (e) {
    return en.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }, ln.isoWeekYear = function (e) {
    return en.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
  }, ln.quarter = ln.quarters = function (e) {
    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3);
  }, ln.month = Ne, ln.daysInMonth = function () {
    return Pe(this.year(), this.month());
  }, ln.week = ln.weeks = function (e) {
    var t = this.localeData().week(this);return null == e ? t : this.add(7 * (e - t), "d");
  }, ln.isoWeek = ln.isoWeeks = function (e) {
    var t = Ye(this, 1, 4).week;return null == e ? t : this.add(7 * (e - t), "d");
  }, ln.weeksInYear = function () {
    var e = this.localeData()._week;return ze(this.year(), e.dow, e.doy);
  }, ln.isoWeeksInYear = function () {
    return ze(this.year(), 1, 4);
  }, ln.date = tn, ln.day = ln.days = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;var t,
        n,
        i = this._isUTC ? this._d.getUTCDay() : this._d.getDay();return null != e ? (t = e, n = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = n.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - i, "d")) : i;
  }, ln.weekday = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;var t = (this.day() + 7 - this.localeData()._week.dow) % 7;return null == e ? t : this.add(e - t, "d");
  }, ln.isoWeekday = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;if (null != e) {
      var t = (n = e, i = this.localeData(), "string" == typeof n ? i.weekdaysParse(n) % 7 || 7 : isNaN(n) ? null : n);return this.day(this.day() % 7 ? t : t - 7);
    }return this.day() || 7;var n, i;
  }, ln.dayOfYear = function (e) {
    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;return null == e ? t : this.add(e - t, "d");
  }, ln.hour = ln.hours = tt, ln.minute = ln.minutes = nn, ln.second = ln.seconds = on, ln.millisecond = ln.milliseconds = an, ln.utcOffset = function (e, t, i) {
    var r,
        o = this._offset || 0;if (!this.isValid()) return null != e ? this : NaN;if (null != e) {
      if ("string" == typeof e) {
        if (null === (e = jt(oe, e))) return this;
      } else Math.abs(e) < 16 && !i && (e *= 60);return !this._isUTC && t && (r = Ft(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), o !== e && (!t || this._changeInProgress ? Vt(this, Yt(e - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this;
    }return this._isUTC ? o : Ft(this);
  }, ln.utc = function (e) {
    return this.utcOffset(0, e);
  }, ln.local = function (e) {
    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ft(this), "m")), this;
  }, ln.parseZone = function () {
    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);else if ("string" == typeof this._i) {
      var e = jt(re, this._i);null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
    }return this;
  }, ln.hasAlignedHourOffset = function (e) {
    return !!this.isValid() && (e = e ? xt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0);
  }, ln.isDST = function () {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }, ln.isLocal = function () {
    return !!this.isValid() && !this._isUTC;
  }, ln.isUtcOffset = function () {
    return !!this.isValid() && this._isUTC;
  }, ln.isUtc = Rt, ln.isUTC = Rt, ln.zoneAbbr = function () {
    return this._isUTC ? "UTC" : "";
  }, ln.zoneName = function () {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }, ln.dates = k("dates accessor is deprecated. Use date instead.", tn), ln.months = k("months accessor is deprecated. Use month instead", Ne), ln.years = k("years accessor is deprecated. Use year instead", xe), ln.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, t) {
    return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
  }), ln.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
    if (!o(this._isDSTShifted)) return this._isDSTShifted;var e = {};if (g(e, this), (e = kt(e))._a) {
      var t = e._isUTC ? d(e._a) : xt(e._a);this._isDSTShifted = this.isValid() && 0 < E(e._a, t.toArray());
    } else this._isDSTShifted = !1;return this._isDSTShifted;
  });var un = P.prototype;function dn(e, t, n, i) {
    var r = ct(),
        o = d().set(i, t);return r[n](o, e);
  }function hn(e, t, n) {
    if (s(e) && (t = e, e = void 0), e = e || "", null != t) return dn(e, t, n, "month");var i,
        r = [];for (i = 0; i < 12; i++) {
      r[i] = dn(e, i, n, "month");
    }return r;
  }function fn(e, t, n, i) {
    "boolean" == typeof e ? s(t) && (n = t, t = void 0) : (t = e, e = !1, s(n = t) && (n = t, t = void 0)), t = t || "";var r,
        o = ct(),
        a = e ? o._week.dow : 0;if (null != n) return dn(t, (n + a) % 7, i, "day");var l = [];for (r = 0; r < 7; r++) {
      l[r] = dn(t, (r + a) % 7, i, "day");
    }return l;
  }un.calendar = function (e, t, n) {
    var i = this._calendar[e] || this._calendar.sameElse;return D(i) ? i.call(t, n) : i;
  }, un.longDateFormat = function (e) {
    var t = this._longDateFormat[e],
        n = this._longDateFormat[e.toUpperCase()];return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
      return e.slice(1);
    }), this._longDateFormat[e]);
  }, un.invalidDate = function () {
    return this._invalidDate;
  }, un.ordinal = function (e) {
    return this._ordinal.replace("%d", e);
  }, un.preparse = cn, un.postformat = cn, un.relativeTime = function (e, t, n, i) {
    var r = this._relativeTime[n];return D(r) ? r(e, t, n, i) : r.replace(/%d/i, e);
  }, un.pastFuture = function (e, t) {
    var n = this._relativeTime[0 < e ? "future" : "past"];return D(n) ? n(t) : n.replace(/%s/i, t);
  }, un.set = function (e) {
    var t, n;for (n in e) {
      D(t = e[n]) ? this[n] = t : this["_" + n] = t;
    }this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
  }, un.months = function (e, t) {
    return e ? i(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Me).test(t) ? "format" : "standalone"][e.month()] : i(this._months) ? this._months : this._months.standalone;
  }, un.monthsShort = function (e, t) {
    return e ? i(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Me.test(t) ? "format" : "standalone"][e.month()] : i(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
  }, un.monthsParse = function (e, t, n) {
    var i, r, o;if (this._monthsParseExact) return function (e, t, n) {
      var i,
          r,
          o,
          s = e.toLocaleLowerCase();if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) {
        o = d([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase();
      }return n ? "MMM" === t ? -1 !== (r = Se.call(this._shortMonthsParse, s)) ? r : null : -1 !== (r = Se.call(this._longMonthsParse, s)) ? r : null : "MMM" === t ? -1 !== (r = Se.call(this._shortMonthsParse, s)) ? r : -1 !== (r = Se.call(this._longMonthsParse, s)) ? r : null : -1 !== (r = Se.call(this._longMonthsParse, s)) ? r : -1 !== (r = Se.call(this._shortMonthsParse, s)) ? r : null;
    }.call(this, e, t, n);for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
      if (r = d([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[i].test(e)) return i;if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;if (!n && this._monthsParse[i].test(e)) return i;
    }
  }, un.monthsRegex = function (e) {
    return this._monthsParseExact ? (c(this, "_monthsRegex") || Fe.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = He), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
  }, un.monthsShortRegex = function (e) {
    return this._monthsParseExact ? (c(this, "_monthsRegex") || Fe.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = je), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
  }, un.week = function (e) {
    return Ye(e, this._week.dow, this._week.doy).week;
  }, un.firstDayOfYear = function () {
    return this._week.doy;
  }, un.firstDayOfWeek = function () {
    return this._week.dow;
  }, un.weekdays = function (e, t) {
    return e ? i(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : i(this._weekdays) ? this._weekdays : this._weekdays.standalone;
  }, un.weekdaysMin = function (e) {
    return e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
  }, un.weekdaysShort = function (e) {
    return e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
  }, un.weekdaysParse = function (e, t, n) {
    var i, r, o;if (this._weekdaysParseExact) return function (e, t, n) {
      var i,
          r,
          o,
          s = e.toLocaleLowerCase();if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) {
        o = d([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase();
      }return n ? "dddd" === t ? -1 !== (r = Se.call(this._weekdaysParse, s)) ? r : null : "ddd" === t ? -1 !== (r = Se.call(this._shortWeekdaysParse, s)) ? r : null : -1 !== (r = Se.call(this._minWeekdaysParse, s)) ? r : null : "dddd" === t ? -1 !== (r = Se.call(this._weekdaysParse, s)) ? r : -1 !== (r = Se.call(this._shortWeekdaysParse, s)) ? r : -1 !== (r = Se.call(this._minWeekdaysParse, s)) ? r : null : "ddd" === t ? -1 !== (r = Se.call(this._shortWeekdaysParse, s)) ? r : -1 !== (r = Se.call(this._weekdaysParse, s)) ? r : -1 !== (r = Se.call(this._minWeekdaysParse, s)) ? r : null : -1 !== (r = Se.call(this._minWeekdaysParse, s)) ? r : -1 !== (r = Se.call(this._weekdaysParse, s)) ? r : -1 !== (r = Se.call(this._shortWeekdaysParse, s)) ? r : null;
    }.call(this, e, t, n);for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
      if (r = d([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[i] || (o = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[i].test(e)) return i;if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e)) return i;if (n && "dd" === t && this._minWeekdaysParse[i].test(e)) return i;if (!n && this._weekdaysParse[i].test(e)) return i;
    }
  }, un.weekdaysRegex = function (e) {
    return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Ge), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
  }, un.weekdaysShortRegex = function (e) {
    return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ke), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
  }, un.weekdaysMinRegex = function (e) {
    return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = $e), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
  }, un.isPM = function (e) {
    return "p" === (e + "").toLowerCase().charAt(0);
  }, un.meridiem = function (e, t, n) {
    return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM";
  }, at("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function ordinal(e) {
      var t = e % 10;return e + (1 === w(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
    } }), n.lang = k("moment.lang is deprecated. Use moment.locale instead.", at), n.langData = k("moment.langData is deprecated. Use moment.localeData instead.", ct);var pn = Math.abs;function mn(e, t, n, i) {
    var r = Yt(t, n);return e._milliseconds += i * r._milliseconds, e._days += i * r._days, e._months += i * r._months, e._bubble();
  }function gn(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }function vn(e) {
    return 4800 * e / 146097;
  }function yn(e) {
    return 146097 * e / 4800;
  }function bn(e) {
    return function () {
      return this.as(e);
    };
  }var _n = bn("ms"),
      wn = bn("s"),
      En = bn("m"),
      Tn = bn("h"),
      kn = bn("d"),
      Sn = bn("w"),
      xn = bn("M"),
      Cn = bn("y");function Dn(e) {
    return function () {
      return this.isValid() ? this._data[e] : NaN;
    };
  }var An = Dn("milliseconds"),
      Pn = Dn("seconds"),
      Mn = Dn("minutes"),
      In = Dn("hours"),
      On = Dn("days"),
      Ln = Dn("months"),
      Nn = Dn("years"),
      jn = Math.round,
      Hn = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
      Fn = Math.abs;function Rn(e) {
    return (0 < e) - (e < 0) || +e;
  }function qn() {
    if (!this.isValid()) return this.localeData().invalidDate();var e,
        t,
        n = Fn(this._milliseconds) / 1e3,
        i = Fn(this._days),
        r = Fn(this._months);t = _((e = _(n / 60)) / 60), n %= 60, e %= 60;var o = _(r / 12),
        s = r %= 12,
        a = i,
        l = t,
        c = e,
        u = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
        d = this.asSeconds();if (!d) return "P0D";var h = d < 0 ? "-" : "",
        f = Rn(this._months) !== Rn(d) ? "-" : "",
        p = Rn(this._days) !== Rn(d) ? "-" : "",
        m = Rn(this._milliseconds) !== Rn(d) ? "-" : "";return h + "P" + (o ? f + o + "Y" : "") + (s ? f + s + "M" : "") + (a ? p + a + "D" : "") + (l || c || u ? "T" : "") + (l ? m + l + "H" : "") + (c ? m + c + "M" : "") + (u ? m + u + "S" : "");
  }var Wn = Mt.prototype;return Wn.isValid = function () {
    return this._isValid;
  }, Wn.abs = function () {
    var e = this._data;return this._milliseconds = pn(this._milliseconds), this._days = pn(this._days), this._months = pn(this._months), e.milliseconds = pn(e.milliseconds), e.seconds = pn(e.seconds), e.minutes = pn(e.minutes), e.hours = pn(e.hours), e.months = pn(e.months), e.years = pn(e.years), this;
  }, Wn.add = function (e, t) {
    return mn(this, e, t, 1);
  }, Wn.subtract = function (e, t) {
    return mn(this, e, t, -1);
  }, Wn.as = function (e) {
    if (!this.isValid()) return NaN;var t,
        n,
        i = this._milliseconds;if ("month" === (e = O(e)) || "year" === e) return t = this._days + i / 864e5, n = this._months + vn(t), "month" === e ? n : n / 12;switch (t = this._days + Math.round(yn(this._months)), e) {case "week":
        return t / 7 + i / 6048e5;case "day":
        return t + i / 864e5;case "hour":
        return 24 * t + i / 36e5;case "minute":
        return 1440 * t + i / 6e4;case "second":
        return 86400 * t + i / 1e3;case "millisecond":
        return Math.floor(864e5 * t) + i;default:
        throw new Error("Unknown unit " + e);}
  }, Wn.asMilliseconds = _n, Wn.asSeconds = wn, Wn.asMinutes = En, Wn.asHours = Tn, Wn.asDays = kn, Wn.asWeeks = Sn, Wn.asMonths = xn, Wn.asYears = Cn, Wn.valueOf = function () {
    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * w(this._months / 12) : NaN;
  }, Wn._bubble = function () {
    var e,
        t,
        n,
        i,
        r,
        o = this._milliseconds,
        s = this._days,
        a = this._months,
        l = this._data;return 0 <= o && 0 <= s && 0 <= a || o <= 0 && s <= 0 && a <= 0 || (o += 864e5 * gn(yn(a) + s), a = s = 0), l.milliseconds = o % 1e3, e = _(o / 1e3), l.seconds = e % 60, t = _(e / 60), l.minutes = t % 60, n = _(t / 60), l.hours = n % 24, a += r = _(vn(s += _(n / 24))), s -= gn(yn(r)), i = _(a / 12), a %= 12, l.days = s, l.months = a, l.years = i, this;
  }, Wn.clone = function () {
    return Yt(this);
  }, Wn.get = function (e) {
    return e = O(e), this.isValid() ? this[e + "s"]() : NaN;
  }, Wn.milliseconds = An, Wn.seconds = Pn, Wn.minutes = Mn, Wn.hours = In, Wn.days = On, Wn.weeks = function () {
    return _(this.days() / 7);
  }, Wn.months = Ln, Wn.years = Nn, Wn.humanize = function (e) {
    if (!this.isValid()) return this.localeData().invalidDate();var t,
        n,
        i,
        r,
        o,
        s,
        a,
        l,
        c,
        u,
        d = this.localeData(),
        h = (t = !e, n = d, i = Yt(this).abs(), r = jn(i.as("s")), o = jn(i.as("m")), s = jn(i.as("h")), a = jn(i.as("d")), l = jn(i.as("M")), c = jn(i.as("y")), (u = r <= Hn.ss && ["s", r] || r < Hn.s && ["ss", r] || o <= 1 && ["m"] || o < Hn.m && ["mm", o] || s <= 1 && ["h"] || s < Hn.h && ["hh", s] || a <= 1 && ["d"] || a < Hn.d && ["dd", a] || l <= 1 && ["M"] || l < Hn.M && ["MM", l] || c <= 1 && ["y"] || ["yy", c])[2] = t, u[3] = 0 < +this, u[4] = n, function (e, t, n, i, r) {
      return r.relativeTime(t || 1, !!n, e, i);
    }.apply(null, u));return e && (h = d.pastFuture(+this, h)), d.postformat(h);
  }, Wn.toISOString = qn, Wn.toString = qn, Wn.toJSON = qn, Wn.locale = Qt, Wn.localeData = Zt, Wn.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", qn), Wn.lang = Xt, Y("X", 0, 0, "unix"), Y("x", 0, 0, "valueOf"), le("x", ie), le("X", /[+-]?\d+(\.\d{1,3})?/), he("X", function (e, t, n) {
    n._d = new Date(1e3 * parseFloat(e, 10));
  }), he("x", function (e, t, n) {
    n._d = new Date(w(e));
  }), n.version = "2.22.2", e = xt, n.fn = ln, n.min = function () {
    return At("isBefore", [].slice.call(arguments, 0));
  }, n.max = function () {
    return At("isAfter", [].slice.call(arguments, 0));
  }, n.now = function () {
    return Date.now ? Date.now() : +new Date();
  }, n.utc = d, n.unix = function (e) {
    return xt(1e3 * e);
  }, n.months = function (e, t) {
    return hn(e, t, "months");
  }, n.isDate = a, n.locale = at, n.invalid = p, n.duration = Yt, n.isMoment = b, n.weekdays = function (e, t, n) {
    return fn(e, t, n, "weekdays");
  }, n.parseZone = function () {
    return xt.apply(null, arguments).parseZone();
  }, n.localeData = ct, n.isDuration = It, n.monthsShort = function (e, t) {
    return hn(e, t, "monthsShort");
  }, n.weekdaysMin = function (e, t, n) {
    return fn(e, t, n, "weekdaysMin");
  }, n.defineLocale = lt, n.updateLocale = function (e, t) {
    if (null != t) {
      var n,
          i,
          r = nt;null != (i = st(e)) && (r = i._config), (n = new P(t = A(r, t))).parentLocale = it[e], it[e] = n, at(e);
    } else null != it[e] && (null != it[e].parentLocale ? it[e] = it[e].parentLocale : null != it[e] && delete it[e]);return it[e];
  }, n.locales = function () {
    return S(it);
  }, n.weekdaysShort = function (e, t, n) {
    return fn(e, t, n, "weekdaysShort");
  }, n.normalizeUnits = O, n.relativeTimeRounding = function (e) {
    return void 0 === e ? jn : "function" == typeof e && (jn = e, !0);
  }, n.relativeTimeThreshold = function (e, t) {
    return void 0 !== Hn[e] && (void 0 === t ? Hn[e] : (Hn[e] = t, "s" === e && (Hn.ss = t - 1), !0));
  }, n.calendarFormat = function (e, t) {
    var n = e.diff(t, "days", !0);return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
  }, n.prototype = ln, n.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "YYYY-[W]WW", MONTH: "YYYY-MM" }, n;
}), function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module && "function" == typeof require ? t(require("../moment")) : "function" == typeof define && define.amd ? define(["../moment"], t) : t(e.moment);
}(this, function (e) {
  "use strict";
  return e.defineLocale("en-au", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(e) {
      var t = e % 10;return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
    }, week: { dow: 1, doy: 4 } });
}), "object" == (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) && function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : e.Plyr = t();
}(this, function () {
  "use strict";
  !function () {
    if ("undefined" != typeof window) try {
      var e = new window.CustomEvent("test", { cancelable: !0 });if (e.preventDefault(), !0 !== e.defaultPrevented) throw new Error("Could not prevent default");
    } catch (e) {
      var t = function t(e, _t3) {
        var n, i;return _t3 = _t3 || { bubbles: !1, cancelable: !1, detail: void 0 }, (n = document.createEvent("CustomEvent")).initCustomEvent(e, _t3.bubbles, _t3.cancelable, _t3.detail), i = n.preventDefault, n.preventDefault = function () {
          i.call(this);try {
            Object.defineProperty(this, "defaultPrevented", { get: function get() {
                return !0;
              } });
          } catch (e) {
            this.defaultPrevented = !0;
          }
        }, n;
      };t.prototype = window.Event.prototype, window.CustomEvent = t;
    }
  }();var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};function t(e, t) {
    return e(t = { exports: {} }, t.exports), t.exports;
  }!function (e) {
    var t = function () {
      try {
        return !!Symbol.iterator;
      } catch (e) {
        return !1;
      }
    }(),
        n = function n(e) {
      var n = { next: function next() {
          var t = e.shift();return { done: void 0 === t, value: t };
        } };return t && (n[Symbol.iterator] = function () {
        return n;
      }), n;
    },
        i = function i(e) {
      return encodeURIComponent(e).replace(/%20/g, "+");
    },
        r = function r(e) {
      return decodeURIComponent(e).replace(/\+/g, " ");
    };"URLSearchParams" in e && "a=1" === new URLSearchParams("?a=1").toString() || function () {
      var o = function o(e) {
        if (Object.defineProperty(this, "_entries", { writable: !0, value: {} }), "string" == typeof e) "" !== e && this._fromString(e);else if (e instanceof o) {
          var t = this;e.forEach(function (e, n) {
            t.append(n, e);
          });
        }
      },
          s = o.prototype;s.append = function (e, t) {
        e in this._entries ? this._entries[e].push(t.toString()) : this._entries[e] = [t.toString()];
      }, s.delete = function (e) {
        delete this._entries[e];
      }, s.get = function (e) {
        return e in this._entries ? this._entries[e][0] : null;
      }, s.getAll = function (e) {
        return e in this._entries ? this._entries[e].slice(0) : [];
      }, s.has = function (e) {
        return e in this._entries;
      }, s.set = function (e, t) {
        this._entries[e] = [t.toString()];
      }, s.forEach = function (e, t) {
        var n;for (var i in this._entries) {
          if (this._entries.hasOwnProperty(i)) {
            n = this._entries[i];for (var r = 0; r < n.length; r++) {
              e.call(t, n[r], i, this);
            }
          }
        }
      }, s.keys = function () {
        var e = [];return this.forEach(function (t, n) {
          e.push(n);
        }), n(e);
      }, s.values = function () {
        var e = [];return this.forEach(function (t) {
          e.push(t);
        }), n(e);
      }, s.entries = function () {
        var e = [];return this.forEach(function (t, n) {
          e.push([n, t]);
        }), n(e);
      }, t && (s[Symbol.iterator] = s.entries), s.toString = function () {
        var e = [];return this.forEach(function (t, n) {
          e.push(i(n) + "=" + i(t));
        }), e.join("&");
      }, Object.defineProperty(s, "_fromString", { enumerable: !1, configurable: !1, writable: !1, value: function value(e) {
          this._entries = {};for (var t, n = (e = e.replace(/^\?/, "")).split("&"), i = 0; i < n.length; i++) {
            t = n[i].split("="), this.append(r(t[0]), t.length > 1 ? r(t[1]) : "");
          }
        } }), e.URLSearchParams = o;
    }(), "function" != typeof URLSearchParams.prototype.sort && (URLSearchParams.prototype.sort = function () {
      var e = this,
          t = [];this.forEach(function (n, i) {
        t.push([i, n]), e._entries || e.delete(i);
      }), t.sort(function (e, t) {
        return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0;
      }), e._entries && (e._entries = {});for (var n = 0; n < t.length; n++) {
        this.append(t[n][0], t[n][1]);
      }
    });
  }(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : e), function (e) {
    if (function () {
      try {
        var e = new URL("b", "http://a");return e.pathname = "c%20d", "http://a/c%20d" === e.href && e.searchParams;
      } catch (e) {
        return !1;
      }
    }() || function () {
      var t = e.URL,
          n = function n(t, _n4) {
        "string" != typeof t && (t = String(t));var i,
            r = document;if (_n4 && (void 0 === e.location || _n4 !== e.location.href)) {
          (i = (r = document.implementation.createHTMLDocument("")).createElement("base")).href = _n4, r.head.appendChild(i);try {
            if (0 !== i.href.indexOf(_n4)) throw new Error(i.href);
          } catch (e) {
            throw new Error("URL unable to set base " + _n4 + " due to " + e);
          }
        }var o = r.createElement("a");if (o.href = t, i && (r.body.appendChild(o), o.href = o.href), ":" === o.protocol || !/:/.test(o.href)) throw new TypeError("Invalid URL");Object.defineProperty(this, "_anchorElement", { value: o });var s = new URLSearchParams(this.search),
            a = !0,
            l = !0,
            c = this;["append", "delete", "set"].forEach(function (e) {
          var t = s[e];s[e] = function () {
            t.apply(s, arguments), a && (l = !1, c.search = s.toString(), l = !0);
          };
        }), Object.defineProperty(this, "searchParams", { value: s, enumerable: !0 });var u = void 0;Object.defineProperty(this, "_updateSearchParams", { enumerable: !1, configurable: !1, writable: !1, value: function value() {
            this.search !== u && (u = this.search, l && (a = !1, this.searchParams._fromString(this.search), a = !0));
          } });
      },
          i = n.prototype;["hash", "host", "hostname", "port", "protocol"].forEach(function (e) {
        !function (e) {
          Object.defineProperty(i, e, { get: function get() {
              return this._anchorElement[e];
            }, set: function set(t) {
              this._anchorElement[e] = t;
            }, enumerable: !0 });
        }(e);
      }), Object.defineProperty(i, "search", { get: function get() {
          return this._anchorElement.search;
        }, set: function set(e) {
          this._anchorElement.search = e, this._updateSearchParams();
        }, enumerable: !0 }), Object.defineProperties(i, { toString: { get: function get() {
            var e = this;return function () {
              return e.href;
            };
          } }, href: { get: function get() {
            return this._anchorElement.href.replace(/\?$/, "");
          }, set: function set(e) {
            this._anchorElement.href = e, this._updateSearchParams();
          }, enumerable: !0 }, pathname: { get: function get() {
            return this._anchorElement.pathname.replace(/(^\/?)/, "/");
          }, set: function set(e) {
            this._anchorElement.pathname = e;
          }, enumerable: !0 }, origin: { get: function get() {
            var e = { "http:": 80, "https:": 443, "ftp:": 21 }[this._anchorElement.protocol],
                t = this._anchorElement.port != e && "" !== this._anchorElement.port;return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (t ? ":" + this._anchorElement.port : "");
          }, enumerable: !0 }, password: { get: function get() {
            return "";
          }, set: function set(e) {}, enumerable: !0 }, username: { get: function get() {
            return "";
          }, set: function set(e) {}, enumerable: !0 } }), n.createObjectURL = function (e) {
        return t.createObjectURL.apply(t, arguments);
      }, n.revokeObjectURL = function (e) {
        return t.revokeObjectURL.apply(t, arguments);
      }, e.URL = n;
    }(), void 0 !== e.location && !("origin" in e.location)) {
      var t = function t() {
        return e.location.protocol + "//" + e.location.hostname + (e.location.port ? ":" + e.location.port : "");
      };try {
        Object.defineProperty(e.location, "origin", { get: t, enumerable: !0 });
      } catch (n) {
        setInterval(function () {
          e.location.origin = t();
        }, 100);
      }
    }
  }(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : e);var n = function n(e) {
    if ("function" != typeof e) throw TypeError(e + " is not a function!");return e;
  },
      i = function i(e, t, _i3) {
    if (n(e), void 0 === t) return e;switch (_i3) {case 1:
        return function (n) {
          return e.call(t, n);
        };case 2:
        return function (n, i) {
          return e.call(t, n, i);
        };case 3:
        return function (n, i, r) {
          return e.call(t, n, i, r);
        };}return function () {
      return e.apply(t, arguments);
    };
  },
      r = t(function (e) {
    var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = t);
  }),
      o = t(function (e) {
    var t = e.exports = { version: "2.5.7" };"number" == typeof __e && (__e = t);
  }),
      s = (o.version, function (e) {
    return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? null !== e : "function" == typeof e;
  }),
      a = function a(e) {
    if (!s(e)) throw TypeError(e + " is not an object!");return e;
  },
      l = function l(e) {
    try {
      return !!e();
    } catch (e) {
      return !0;
    }
  },
      c = !l(function () {
    return 7 != Object.defineProperty({}, "a", { get: function get() {
        return 7;
      } }).a;
  }),
      u = r.document,
      d = s(u) && s(u.createElement),
      h = function h(e) {
    return d ? u.createElement(e) : {};
  },
      f = !c && !l(function () {
    return 7 != Object.defineProperty(h("div"), "a", { get: function get() {
        return 7;
      } }).a;
  }),
      p = function p(e, t) {
    if (!s(e)) return e;var n, i;if (t && "function" == typeof (n = e.toString) && !s(i = n.call(e))) return i;if ("function" == typeof (n = e.valueOf) && !s(i = n.call(e))) return i;if (!t && "function" == typeof (n = e.toString) && !s(i = n.call(e))) return i;throw TypeError("Can't convert object to primitive value");
  },
      m = Object.defineProperty,
      g = { f: c ? Object.defineProperty : function (e, t, n) {
      if (a(e), t = p(t, !0), a(n), f) try {
        return m(e, t, n);
      } catch (e) {}if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");return "value" in n && (e[t] = n.value), e;
    } },
      v = function v(e, t) {
    return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
  },
      y = c ? function (e, t, n) {
    return g.f(e, t, v(1, n));
  } : function (e, t, n) {
    return e[t] = n, e;
  },
      b = {}.hasOwnProperty,
      _ = function _(e, t) {
    return b.call(e, t);
  },
      w = 0,
      E = Math.random(),
      T = function T(e) {
    return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++w + E).toString(36));
  },
      k = t(function (e) {
    var t = T("src"),
        n = Function.toString,
        i = ("" + n).split("toString");o.inspectSource = function (e) {
      return n.call(e);
    }, (e.exports = function (e, n, o, s) {
      var a = "function" == typeof o;a && (_(o, "name") || y(o, "name", n)), e[n] !== o && (a && (_(o, t) || y(o, t, e[n] ? "" + e[n] : i.join(String(n)))), e === r ? e[n] = o : s ? e[n] ? e[n] = o : y(e, n, o) : (delete e[n], y(e, n, o)));
    })(Function.prototype, "toString", function () {
      return "function" == typeof this && this[t] || n.call(this);
    });
  }),
      S = function S(e, t, n) {
    var s,
        a,
        l,
        c,
        u = e & S.F,
        d = e & S.G,
        h = e & S.S,
        f = e & S.P,
        p = e & S.B,
        m = d ? r : h ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
        g = d ? o : o[t] || (o[t] = {}),
        v = g.prototype || (g.prototype = {});for (s in d && (n = t), n) {
      l = ((a = !u && m && void 0 !== m[s]) ? m : n)[s], c = p && a ? i(l, r) : f && "function" == typeof l ? i(Function.call, l) : l, m && k(m, s, l, e & S.U), g[s] != l && y(g, s, c), f && v[s] != l && (v[s] = l);
    }
  };r.core = o, S.F = 1, S.G = 2, S.S = 4, S.P = 8, S.B = 16, S.W = 32, S.U = 64, S.R = 128;var x = S,
      C = function C(e) {
    if (void 0 == e) throw TypeError("Can't call method on  " + e);return e;
  },
      D = function D(e) {
    return Object(C(e));
  },
      A = function A(e, t, n, i) {
    try {
      return i ? t(a(n)[0], n[1]) : t(n);
    } catch (t) {
      var r = e.return;throw void 0 !== r && a(r.call(e)), t;
    }
  },
      P = {},
      M = t(function (e) {
    var t = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});(e.exports = function (e, n) {
      return t[e] || (t[e] = void 0 !== n ? n : {});
    })("versions", []).push({ version: o.version, mode: "global", copyright: "© 2018 Denis Pushkarev (zloirock.ru)" });
  }),
      I = t(function (e) {
    var t = M("wks"),
        n = r.Symbol,
        i = "function" == typeof n;(e.exports = function (e) {
      return t[e] || (t[e] = i && n[e] || (i ? n : T)("Symbol." + e));
    }).store = t;
  }),
      O = I("iterator"),
      L = Array.prototype,
      N = function N(e) {
    return void 0 !== e && (P.Array === e || L[O] === e);
  },
      j = Math.ceil,
      H = Math.floor,
      F = function F(e) {
    return isNaN(e = +e) ? 0 : (e > 0 ? H : j)(e);
  },
      R = Math.min,
      q = function q(e) {
    return e > 0 ? R(F(e), 9007199254740991) : 0;
  },
      W = function W(e, t, n) {
    t in e ? g.f(e, t, v(0, n)) : e[t] = n;
  },
      Y = {}.toString,
      z = function z(e) {
    return Y.call(e).slice(8, -1);
  },
      U = I("toStringTag"),
      B = "Arguments" == z(function () {
    return arguments;
  }()),
      V = function V(e) {
    var t, n, i;return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
      try {
        return e[t];
      } catch (e) {}
    }(t = Object(e), U)) ? n : B ? z(t) : "Object" == (i = z(t)) && "function" == typeof t.callee ? "Arguments" : i;
  },
      G = I("iterator"),
      K = o.getIteratorMethod = function (e) {
    if (void 0 != e) return e[G] || e["@@iterator"] || P[V(e)];
  },
      $ = I("iterator"),
      Q = !1;try {
    [7][$]().return = function () {
      Q = !0;
    };
  } catch (e) {}var X = function X(e, t) {
    if (!t && !Q) return !1;var n = !1;try {
      var i = [7],
          r = i[$]();r.next = function () {
        return { done: n = !0 };
      }, i[$] = function () {
        return r;
      }, e(i);
    } catch (e) {}return n;
  };x(x.S + x.F * !X(function (e) {}), "Array", { from: function from(e) {
      var t,
          n,
          r,
          o,
          s = D(e),
          a = "function" == typeof this ? this : Array,
          l = arguments.length,
          c = l > 1 ? arguments[1] : void 0,
          u = void 0 !== c,
          d = 0,
          h = K(s);if (u && (c = i(c, l > 2 ? arguments[2] : void 0, 2)), void 0 == h || a == Array && N(h)) for (n = new a(t = q(s.length)); t > d; d++) {
        W(n, d, u ? c(s[d], d) : s[d]);
      } else for (o = h.call(s), n = new a(); !(r = o.next()).done; d++) {
        W(n, d, u ? A(o, c, [r.value, d], !0) : r.value);
      }return n.length = d, n;
    } });var Z = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
    return "String" == z(e) ? e.split("") : Object(e);
  },
      J = Array.isArray || function (e) {
    return "Array" == z(e);
  },
      ee = I("species"),
      te = function te(e, t) {
    return new (function (e) {
      var t;return J(e) && ("function" != typeof (t = e.constructor) || t !== Array && !J(t.prototype) || (t = void 0), s(t) && null === (t = t[ee]) && (t = void 0)), void 0 === t ? Array : t;
    }(e))(t);
  },
      ne = function ne(e, t) {
    var n = 1 == e,
        r = 2 == e,
        o = 3 == e,
        s = 4 == e,
        a = 6 == e,
        l = 5 == e || a,
        c = t || te;return function (t, u, d) {
      for (var h, f, p = D(t), m = Z(p), g = i(u, d, 3), v = q(m.length), y = 0, b = n ? c(t, v) : r ? c(t, 0) : void 0; v > y; y++) {
        if ((l || y in m) && (f = g(h = m[y], y, p), e)) if (n) b[y] = f;else if (f) switch (e) {case 3:
            return !0;case 5:
            return h;case 6:
            return y;case 2:
            b.push(h);} else if (s) return !1;
      }return a ? -1 : o || s ? s : b;
    };
  },
      ie = I("unscopables"),
      re = Array.prototype;void 0 == re[ie] && y(re, ie, {});var oe = function oe(e) {
    re[ie][e] = !0;
  },
      se = ne(5),
      ae = !0;"find" in [] && Array(1).find(function () {
    ae = !1;
  }), x(x.P + x.F * ae, "Array", { find: function find(e) {
      return se(this, e, arguments.length > 1 ? arguments[1] : void 0);
    } }), oe("find");var le = { f: {}.propertyIsEnumerable },
      ce = function ce(e) {
    return Z(C(e));
  },
      ue = Object.getOwnPropertyDescriptor,
      de = { f: c ? ue : function (e, t) {
      if (e = ce(e), t = p(t, !0), f) try {
        return ue(e, t);
      } catch (e) {}if (_(e, t)) return v(!le.f.call(e, t), e[t]);
    } },
      he = function he(e, t) {
    if (a(e), !s(t) && null !== t) throw TypeError(t + ": can't set as prototype!");
  },
      fe = { set: Object.setPrototypeOf || ("__proto__" in {} ? function (e, t, n) {
      try {
        (n = i(Function.call, de.f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array);
      } catch (e) {
        t = !0;
      }return function (e, i) {
        return he(e, i), t ? e.__proto__ = i : n(e, i), e;
      };
    }({}, !1) : void 0), check: he }.set,
      pe = function pe(e, t, n) {
    var i,
        r = t.constructor;return r !== n && "function" == typeof r && (i = r.prototype) !== n.prototype && s(i) && fe && fe(e, i), e;
  },
      me = Math.max,
      ge = Math.min,
      ve = function ve(e) {
    return function (t, n, i) {
      var r,
          o = ce(t),
          s = q(o.length),
          a = function (e, t) {
        return (e = F(e)) < 0 ? me(e + t, 0) : ge(e, t);
      }(i, s);if (e && n != n) {
        for (; s > a;) {
          if ((r = o[a++]) != r) return !0;
        }
      } else for (; s > a; a++) {
        if ((e || a in o) && o[a] === n) return e || a || 0;
      }return !e && -1;
    };
  },
      ye = M("keys"),
      be = function be(e) {
    return ye[e] || (ye[e] = T(e));
  },
      _e = ve(!1),
      we = be("IE_PROTO"),
      Ee = function Ee(e, t) {
    var n,
        i = ce(e),
        r = 0,
        o = [];for (n in i) {
      n != we && _(i, n) && o.push(n);
    }for (; t.length > r;) {
      _(i, n = t[r++]) && (~_e(o, n) || o.push(n));
    }return o;
  },
      Te = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
      ke = Te.concat("length", "prototype"),
      Se = { f: Object.getOwnPropertyNames || function (e) {
      return Ee(e, ke);
    } },
      xe = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF",
      Ce = "[" + xe + "]",
      De = RegExp("^" + Ce + Ce + "*"),
      Ae = RegExp(Ce + Ce + "*$"),
      Pe = function Pe(e, t, n) {
    var i = {},
        r = l(function () {
      return !!xe[e]() || "​" != "​"[e]();
    }),
        o = i[e] = r ? t(Me) : xe[e];n && (i[n] = o), x(x.P + x.F * r, "String", i);
  },
      Me = Pe.trim = function (e, t) {
    return e = String(C(e)), 1 & t && (e = e.replace(De, "")), 2 & t && (e = e.replace(Ae, "")), e;
  },
      Ie = Pe,
      Oe = Object.keys || function (e) {
    return Ee(e, Te);
  },
      Le = c ? Object.defineProperties : function (e, t) {
    a(e);for (var n, i = Oe(t), r = i.length, o = 0; r > o;) {
      g.f(e, n = i[o++], t[n]);
    }return e;
  },
      Ne = r.document,
      je = Ne && Ne.documentElement,
      He = be("IE_PROTO"),
      Fe = function Fe() {},
      _Re = function Re() {
    var e,
        t = h("iframe"),
        n = Te.length;for (t.style.display = "none", je.appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), _Re = e.F; n--;) {
      delete _Re.prototype[Te[n]];
    }return _Re();
  },
      qe = Object.create || function (e, t) {
    var n;return null !== e ? (Fe.prototype = a(e), n = new Fe(), Fe.prototype = null, n[He] = e) : n = _Re(), void 0 === t ? n : Le(n, t);
  },
      We = Se.f,
      Ye = de.f,
      ze = g.f,
      Ue = Ie.trim,
      _Be = r.Number,
      Ve = _Be,
      Ge = _Be.prototype,
      Ke = "Number" == z(qe(Ge)),
      $e = "trim" in String.prototype,
      Qe = function Qe(e) {
    var t = p(e, !1);if ("string" == typeof t && t.length > 2) {
      var n,
          i,
          r,
          o = (t = $e ? t.trim() : Ue(t, 3)).charCodeAt(0);if (43 === o || 45 === o) {
        if (88 === (n = t.charCodeAt(2)) || 120 === n) return NaN;
      } else if (48 === o) {
        switch (t.charCodeAt(1)) {case 66:case 98:
            i = 2, r = 49;break;case 79:case 111:
            i = 8, r = 55;break;default:
            return +t;}for (var s, a = t.slice(2), l = 0, c = a.length; l < c; l++) {
          if ((s = a.charCodeAt(l)) < 48 || s > r) return NaN;
        }return parseInt(a, i);
      }
    }return +t;
  };if (!_Be(" 0o1") || !_Be("0b1") || _Be("+0x1")) {
    _Be = function Be(e) {
      var t = arguments.length < 1 ? 0 : e,
          n = this;return n instanceof _Be && (Ke ? l(function () {
        Ge.valueOf.call(n);
      }) : "Number" != z(n)) ? pe(new Ve(Qe(t)), n, _Be) : Qe(t);
    };for (var Xe, Ze = c ? We(Ve) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), Je = 0; Ze.length > Je; Je++) {
      _(Ve, Xe = Ze[Je]) && !_(_Be, Xe) && ze(_Be, Xe, Ye(Ve, Xe));
    }_Be.prototype = Ge, Ge.constructor = _Be, k(r, "Number", _Be);
  }!function (e, t) {
    var n = (o.Object || {})[e] || Object[e],
        i = {};i[e] = t(n), x(x.S + x.F * l(function () {
      n(1);
    }), "Object", i);
  }("keys", function () {
    return function (e) {
      return Oe(D(e));
    };
  });var et = I("match"),
      tt = function tt(e) {
    var t;return s(e) && (void 0 !== (t = e[et]) ? !!t : "RegExp" == z(e));
  },
      nt = function nt(e, t, n) {
    if (tt(t)) throw TypeError("String#" + n + " doesn't accept regex!");return String(C(e));
  },
      it = I("match"),
      rt = function rt(e) {
    var t = /./;try {
      "/./"[e](t);
    } catch (n) {
      try {
        return t[it] = !1, !"/./"[e](t);
      } catch (e) {}
    }return !0;
  };x(x.P + x.F * rt("includes"), "String", { includes: function includes(e) {
      return !!~nt(this, e, "includes").indexOf(e, arguments.length > 1 ? arguments[1] : void 0);
    } });var ot = ve(!0);x(x.P, "Array", { includes: function includes(e) {
      return ot(this, e, arguments.length > 1 ? arguments[1] : void 0);
    } }), oe("includes");var st = function st(e, t, n) {
    var i = I(e),
        r = n(C, i, ""[e]),
        o = r[0],
        s = r[1];l(function () {
      var t = {};return t[i] = function () {
        return 7;
      }, 7 != ""[e](t);
    }) && (k(String.prototype, e, o), y(RegExp.prototype, i, 2 == t ? function (e, t) {
      return s.call(e, this, t);
    } : function (e) {
      return s.call(e, this);
    }));
  };st("search", 1, function (e, t, n) {
    return [function (n) {
      var i = e(this),
          r = void 0 == n ? void 0 : n[t];return void 0 !== r ? r.call(n, i) : new RegExp(n)[t](String(i));
    }, n];
  });var at = function at() {
    var e = a(this),
        t = "";return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t;
  };c && "g" != /./g.flags && g.f(RegExp.prototype, "flags", { configurable: !0, get: at });var lt = /./.toString,
      ct = function ct(e) {
    k(RegExp.prototype, "toString", e, !0);
  };l(function () {
    return "/a/b" != lt.call({ source: "a", flags: "b" });
  }) ? ct(function () {
    var e = a(this);return "/".concat(e.source, "/", "flags" in e ? e.flags : !c && e instanceof RegExp ? at.call(e) : void 0);
  }) : "toString" != lt.name && ct(function () {
    return lt.call(this);
  });var ut = function ut(e, t) {
    return { value: t, done: !!e };
  },
      dt = g.f,
      ht = I("toStringTag"),
      ft = function ft(e, t, n) {
    e && !_(e = n ? e : e.prototype, ht) && dt(e, ht, { configurable: !0, value: t });
  },
      pt = {};y(pt, I("iterator"), function () {
    return this;
  });var mt = function mt(e, t, n) {
    e.prototype = qe(pt, { next: v(1, n) }), ft(e, t + " Iterator");
  },
      gt = be("IE_PROTO"),
      vt = Object.prototype,
      yt = Object.getPrototypeOf || function (e) {
    return e = D(e), _(e, gt) ? e[gt] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? vt : null;
  },
      bt = I("iterator"),
      _t = !([].keys && "next" in [].keys()),
      wt = function wt() {
    return this;
  },
      Et = function Et(e, t, n, i, r, o, s) {
    mt(n, t, i);var a,
        l,
        c,
        u = function u(e) {
      if (!_t && e in p) return p[e];switch (e) {case "keys":case "values":
          return function () {
            return new n(this, e);
          };}return function () {
        return new n(this, e);
      };
    },
        d = t + " Iterator",
        h = "values" == r,
        f = !1,
        p = e.prototype,
        m = p[bt] || p["@@iterator"] || r && p[r],
        g = m || u(r),
        v = r ? h ? u("entries") : g : void 0,
        b = "Array" == t && p.entries || m;if (b && (c = yt(b.call(new e()))) !== Object.prototype && c.next && (ft(c, d, !0), "function" != typeof c[bt] && y(c, bt, wt)), h && m && "values" !== m.name && (f = !0, g = function g() {
      return m.call(this);
    }), (_t || f || !p[bt]) && y(p, bt, g), P[t] = g, P[d] = wt, r) if (a = { values: h ? g : u("values"), keys: o ? g : u("keys"), entries: v }, s) for (l in a) {
      l in p || k(p, l, a[l]);
    } else x(x.P + x.F * (_t || f), t, a);return a;
  },
      Tt = Et(Array, "Array", function (e, t) {
    this._t = ce(e), this._i = 0, this._k = t;
  }, function () {
    var e = this._t,
        t = this._k,
        n = this._i++;return !e || n >= e.length ? (this._t = void 0, ut(1)) : ut(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
  }, "values");P.Arguments = P.Array, oe("keys"), oe("values"), oe("entries");for (var kt = I("iterator"), St = I("toStringTag"), xt = P.Array, Ct = { CSSRuleList: !0, CSSStyleDeclaration: !1, CSSValueList: !1, ClientRectList: !1, DOMRectList: !1, DOMStringList: !1, DOMTokenList: !0, DataTransferItemList: !1, FileList: !1, HTMLAllCollection: !1, HTMLCollection: !1, HTMLFormElement: !1, HTMLSelectElement: !1, MediaList: !0, MimeTypeArray: !1, NamedNodeMap: !1, NodeList: !0, PaintRequestList: !1, Plugin: !1, PluginArray: !1, SVGLengthList: !1, SVGNumberList: !1, SVGPathSegList: !1, SVGPointList: !1, SVGStringList: !1, SVGTransformList: !1, SourceBufferList: !1, StyleSheetList: !0, TextTrackCueList: !1, TextTrackList: !1, TouchList: !1 }, Dt = Oe(Ct), At = 0; At < Dt.length; At++) {
    var Pt,
        Mt = Dt[At],
        It = Ct[Mt],
        Ot = r[Mt],
        Lt = Ot && Ot.prototype;if (Lt && (Lt[kt] || y(Lt, kt, xt), Lt[St] || y(Lt, St, Mt), P[Mt] = xt, It)) for (Pt in Tt) {
      Lt[Pt] || k(Lt, Pt, Tt[Pt], !0);
    }
  }var Nt = function (e) {
    return function (t, n) {
      var i,
          r,
          o = String(C(t)),
          s = F(n),
          a = o.length;return s < 0 || s >= a ? e ? "" : void 0 : (i = o.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === a || (r = o.charCodeAt(s + 1)) < 56320 || r > 57343 ? e ? o.charAt(s) : i : e ? o.slice(s, s + 2) : r - 56320 + (i - 55296 << 10) + 65536;
    };
  }(!0);Et(String, "String", function (e) {
    this._t = String(e), this._i = 0;
  }, function () {
    var e,
        t = this._t,
        n = this._i;return n >= t.length ? { value: void 0, done: !0 } : (e = Nt(t, n), this._i += e.length, { value: e, done: !1 });
  });var jt = t(function (e) {
    var t = T("meta"),
        n = g.f,
        i = 0,
        r = Object.isExtensible || function () {
      return !0;
    },
        o = !l(function () {
      return r(Object.preventExtensions({}));
    }),
        a = function a(e) {
      n(e, t, { value: { i: "O" + ++i, w: {} } });
    },
        c = e.exports = { KEY: t, NEED: !1, fastKey: function fastKey(e, n) {
        if (!s(e)) return "symbol" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : ("string" == typeof e ? "S" : "P") + e;if (!_(e, t)) {
          if (!r(e)) return "F";if (!n) return "E";a(e);
        }return e[t].i;
      }, getWeak: function getWeak(e, n) {
        if (!_(e, t)) {
          if (!r(e)) return !0;if (!n) return !1;a(e);
        }return e[t].w;
      }, onFreeze: function onFreeze(e) {
        return o && c.NEED && r(e) && !_(e, t) && a(e), e;
      } };
  }),
      Ht = (jt.KEY, jt.NEED, jt.fastKey, jt.getWeak, jt.onFreeze, { f: Object.getOwnPropertySymbols }),
      Ft = Object.assign,
      Rt = !Ft || l(function () {
    var e = {},
        t = {},
        n = Symbol(),
        i = "abcdefghijklmnopqrst";return e[n] = 7, i.split("").forEach(function (e) {
      t[e] = e;
    }), 7 != Ft({}, e)[n] || Object.keys(Ft({}, t)).join("") != i;
  }) ? function (e, t) {
    for (var n = D(e), i = arguments.length, r = 1, o = Ht.f, s = le.f; i > r;) {
      for (var a, l = Z(arguments[r++]), c = o ? Oe(l).concat(o(l)) : Oe(l), u = c.length, d = 0; u > d;) {
        s.call(l, a = c[d++]) && (n[a] = l[a]);
      }
    }return n;
  } : Ft,
      qt = function qt(e, t, n) {
    for (var i in t) {
      k(e, i, t[i], n);
    }return e;
  },
      Wt = function Wt(e, t, n, i) {
    if (!(e instanceof t) || void 0 !== i && i in e) throw TypeError(n + ": incorrect invocation!");return e;
  },
      Yt = t(function (e) {
    var t = {},
        n = {},
        r = e.exports = function (e, r, o, s, l) {
      var c,
          u,
          d,
          h,
          f = l ? function () {
        return e;
      } : K(e),
          p = i(o, s, r ? 2 : 1),
          m = 0;if ("function" != typeof f) throw TypeError(e + " is not iterable!");if (N(f)) {
        for (c = q(e.length); c > m; m++) {
          if ((h = r ? p(a(u = e[m])[0], u[1]) : p(e[m])) === t || h === n) return h;
        }
      } else for (d = f.call(e); !(u = d.next()).done;) {
        if ((h = A(d, p, u.value, r)) === t || h === n) return h;
      }
    };r.BREAK = t, r.RETURN = n;
  }),
      zt = function zt(e, t) {
    if (!s(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");return e;
  },
      Ut = jt.getWeak,
      Bt = ne(5),
      Vt = ne(6),
      Gt = 0,
      Kt = function Kt(e) {
    return e._l || (e._l = new $t());
  },
      $t = function $t() {
    this.a = [];
  },
      Qt = function Qt(e, t) {
    return Bt(e.a, function (e) {
      return e[0] === t;
    });
  };$t.prototype = { get: function get(e) {
      var t = Qt(this, e);if (t) return t[1];
    }, has: function has(e) {
      return !!Qt(this, e);
    }, set: function set(e, t) {
      var n = Qt(this, e);n ? n[1] = t : this.a.push([e, t]);
    }, delete: function _delete(e) {
      var t = Vt(this.a, function (t) {
        return t[0] === e;
      });return ~t && this.a.splice(t, 1), !!~t;
    } };var Xt = { getConstructor: function getConstructor(e, t, n, i) {
      var r = e(function (e, o) {
        Wt(e, r, t, "_i"), e._t = t, e._i = Gt++, e._l = void 0, void 0 != o && Yt(o, n, e[i], e);
      });return qt(r.prototype, { delete: function _delete(e) {
          if (!s(e)) return !1;var n = Ut(e);return !0 === n ? Kt(zt(this, t)).delete(e) : n && _(n, this._i) && delete n[this._i];
        }, has: function has(e) {
          if (!s(e)) return !1;var n = Ut(e);return !0 === n ? Kt(zt(this, t)).has(e) : n && _(n, this._i);
        } }), r;
    }, def: function def(e, t, n) {
      var i = Ut(a(t), !0);return !0 === i ? Kt(e).set(t, n) : i[e._i] = n, e;
    }, ufstore: Kt };t(function (e) {
    var t,
        n = ne(0),
        i = jt.getWeak,
        o = Object.isExtensible,
        a = Xt.ufstore,
        c = {},
        u = function u(e) {
      return function () {
        return e(this, arguments.length > 0 ? arguments[0] : void 0);
      };
    },
        d = { get: function get(e) {
        if (s(e)) {
          var t = i(e);return !0 === t ? a(zt(this, "WeakMap")).get(e) : t ? t[this._i] : void 0;
        }
      }, set: function set(e, t) {
        return Xt.def(zt(this, "WeakMap"), e, t);
      } },
        h = e.exports = function (e, t, n, i, o, a) {
      var c = r[e],
          u = c,
          d = o ? "set" : "add",
          h = u && u.prototype,
          f = {},
          p = function p(e) {
        var t = h[e];k(h, e, "delete" == e ? function (e) {
          return !(a && !s(e)) && t.call(this, 0 === e ? 0 : e);
        } : "has" == e ? function (e) {
          return !(a && !s(e)) && t.call(this, 0 === e ? 0 : e);
        } : "get" == e ? function (e) {
          return a && !s(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
        } : "add" == e ? function (e) {
          return t.call(this, 0 === e ? 0 : e), this;
        } : function (e, n) {
          return t.call(this, 0 === e ? 0 : e, n), this;
        });
      };if ("function" == typeof u && (a || h.forEach && !l(function () {
        new u().entries().next();
      }))) {
        var m = new u(),
            g = m[d](a ? {} : -0, 1) != m,
            v = l(function () {
          m.has(1);
        }),
            y = X(function (e) {
          new u(e);
        }),
            b = !a && l(function () {
          for (var e = new u(), t = 5; t--;) {
            e[d](t, t);
          }return !e.has(-0);
        });y || ((u = t(function (t, n) {
          Wt(t, u, e);var i = pe(new c(), t, u);return void 0 != n && Yt(n, o, i[d], i), i;
        })).prototype = h, h.constructor = u), (v || b) && (p("delete"), p("has"), o && p("get")), (b || g) && p(d), a && h.clear && delete h.clear;
      } else u = i.getConstructor(t, e, o, d), qt(u.prototype, n), jt.NEED = !0;return ft(u, e), f[e] = u, x(x.G + x.W + x.F * (u != c), f), a || i.setStrong(u, e, o), u;
    }("WeakMap", u, d, Xt, !0, !0);l(function () {
      return 7 != new h().set((Object.freeze || Object)(c), 7).get(c);
    }) && (t = Xt.getConstructor(u, "WeakMap"), Rt(t.prototype, d), jt.NEED = !0, n(["delete", "has", "get", "set"], function (e) {
      var n = h.prototype,
          i = n[e];k(n, e, function (n, r) {
        if (s(n) && !o(n)) {
          this._f || (this._f = new t());var a = this._f[e](n, r);return "set" == e ? this : a;
        }return i.call(this, n, r);
      });
    }));
  });function Zt(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function Jt(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }function en(e, t, n) {
    return t && Jt(e.prototype, t), n && Jt(e, n), e;
  }function tn(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }function nn(e, t) {
    return function (e) {
      if (Array.isArray(e)) return e;
    }(e) || function (e, t) {
      var n = [],
          i = !0,
          r = !1,
          o = void 0;try {
        for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0) {}
      } catch (e) {
        r = !0, o = e;
      } finally {
        try {
          i || null == a.return || a.return();
        } finally {
          if (r) throw o;
        }
      }return n;
    }(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }();
  }function rn(e) {
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
  }x(x.S + x.F, "Object", { assign: Rt }), st("split", 2, function (e, t, n) {
    var i = tt,
        r = n,
        o = [].push;if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length) {
      var s = void 0 === /()??/.exec("")[1];n = function n(e, t) {
        var n = String(this);if (void 0 === e && 0 === t) return [];if (!i(e)) return r.call(n, e, t);var a,
            l,
            c,
            u,
            d,
            h = [],
            f = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""),
            p = 0,
            m = void 0 === t ? 4294967295 : t >>> 0,
            g = new RegExp(e.source, f + "g");for (s || (a = new RegExp("^" + g.source + "$(?!\\s)", f)); (l = g.exec(n)) && !((c = l.index + l[0].length) > p && (h.push(n.slice(p, l.index)), !s && l.length > 1 && l[0].replace(a, function () {
          for (d = 1; d < arguments.length - 2; d++) {
            void 0 === arguments[d] && (l[d] = void 0);
          }
        }), l.length > 1 && l.index < n.length && o.apply(h, l.slice(1)), u = l[0].length, p = c, h.length >= m));) {
          g.lastIndex === l.index && g.lastIndex++;
        }return p === n.length ? !u && g.test("") || h.push("") : h.push(n.slice(p)), h.length > m ? h.slice(0, m) : h;
      };
    } else "0".split(void 0, 0).length && (n = function n(e, t) {
      return void 0 === e && 0 === t ? [] : r.call(this, e, t);
    });return [function (i, r) {
      var o = e(this),
          s = void 0 == i ? void 0 : i[t];return void 0 !== s ? s.call(i, o, r) : n.call(String(o), i, r);
    }, n];
  });var on = le.f,
      sn = function sn(e) {
    return function (t) {
      for (var n, i = ce(t), r = Oe(i), o = r.length, s = 0, a = []; o > s;) {
        on.call(i, n = r[s++]) && a.push(e ? [n, i[n]] : i[n]);
      }return a;
    };
  },
      an = sn(!0);x(x.S, "Object", { entries: function entries(e) {
      return an(e);
    } });var ln = sn(!1);x(x.S, "Object", { values: function values(e) {
      return ln(e);
    } }), st("replace", 2, function (e, t, n) {
    return [function (i, r) {
      var o = e(this),
          s = void 0 == i ? void 0 : i[t];return void 0 !== s ? s.call(i, o, r) : n.call(String(o), i, r);
    }, n];
  });var cn,
      un,
      dn,
      hn = I("species"),
      fn = r.process,
      pn = r.setImmediate,
      mn = r.clearImmediate,
      gn = r.MessageChannel,
      vn = r.Dispatch,
      yn = 0,
      bn = {},
      _n = function _n() {
    var e = +this;if (bn.hasOwnProperty(e)) {
      var t = bn[e];delete bn[e], t();
    }
  },
      wn = function wn(e) {
    _n.call(e.data);
  };pn && mn || (pn = function pn(e) {
    for (var t = [], n = 1; arguments.length > n;) {
      t.push(arguments[n++]);
    }return bn[++yn] = function () {
      !function (e, t, n) {
        var i = void 0 === n;switch (t.length) {case 0:
            return i ? e() : e.call(n);case 1:
            return i ? e(t[0]) : e.call(n, t[0]);case 2:
            return i ? e(t[0], t[1]) : e.call(n, t[0], t[1]);case 3:
            return i ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);case 4:
            return i ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]);}e.apply(n, t);
      }("function" == typeof e ? e : Function(e), t);
    }, cn(yn), yn;
  }, mn = function mn(e) {
    delete bn[e];
  }, "process" == z(fn) ? cn = function cn(e) {
    fn.nextTick(i(_n, e, 1));
  } : vn && vn.now ? cn = function cn(e) {
    vn.now(i(_n, e, 1));
  } : gn ? (dn = (un = new gn()).port2, un.port1.onmessage = wn, cn = i(dn.postMessage, dn, 1)) : r.addEventListener && "function" == typeof postMessage && !r.importScripts ? (cn = function cn(e) {
    r.postMessage(e + "", "*");
  }, r.addEventListener("message", wn, !1)) : cn = "onreadystatechange" in h("script") ? function (e) {
    je.appendChild(h("script")).onreadystatechange = function () {
      je.removeChild(this), _n.call(e);
    };
  } : function (e) {
    setTimeout(i(_n, e, 1), 0);
  });var En = { set: pn, clear: mn },
      Tn = En.set,
      kn = r.MutationObserver || r.WebKitMutationObserver,
      Sn = r.process,
      xn = r.Promise,
      Cn = "process" == z(Sn);var Dn,
      An,
      Pn,
      Mn,
      In = { f: function f(e) {
      return new function (e) {
        var t, i;this.promise = new e(function (e, n) {
          if (void 0 !== t || void 0 !== i) throw TypeError("Bad Promise constructor");t = e, i = n;
        }), this.resolve = n(t), this.reject = n(i);
      }(e);
    } },
      On = function On(e) {
    try {
      return { e: !1, v: e() };
    } catch (e) {
      return { e: !0, v: e };
    }
  },
      Ln = r.navigator,
      Nn = Ln && Ln.userAgent || "",
      jn = I("species"),
      Hn = function Hn(e) {
    var t = r[e];c && t && !t[jn] && g.f(t, jn, { configurable: !0, get: function get() {
        return this;
      } });
  },
      Fn = En.set,
      Rn = function () {
    var e,
        t,
        n,
        i = function i() {
      var i, r;for (Cn && (i = Sn.domain) && i.exit(); e;) {
        r = e.fn, e = e.next;try {
          r();
        } catch (i) {
          throw e ? n() : t = void 0, i;
        }
      }t = void 0, i && i.enter();
    };if (Cn) n = function n() {
      Sn.nextTick(i);
    };else if (!kn || r.navigator && r.navigator.standalone) {
      if (xn && xn.resolve) {
        var o = xn.resolve(void 0);n = function n() {
          o.then(i);
        };
      } else n = function n() {
        Tn.call(r, i);
      };
    } else {
      var s = !0,
          a = document.createTextNode("");new kn(i).observe(a, { characterData: !0 }), n = function n() {
        a.data = s = !s;
      };
    }return function (i) {
      var r = { fn: i, next: void 0 };t && (t.next = r), e || (e = r, n()), t = r;
    };
  }(),
      qn = r.TypeError,
      Wn = r.process,
      Yn = Wn && Wn.versions,
      zn = Yn && Yn.v8 || "",
      _Un = r.Promise,
      Bn = "process" == V(Wn),
      Vn = function Vn() {},
      Gn = An = In.f,
      Kn = !!function () {
    try {
      var e = _Un.resolve(1),
          t = (e.constructor = {})[I("species")] = function (e) {
        e(Vn, Vn);
      };return (Bn || "function" == typeof PromiseRejectionEvent) && e.then(Vn) instanceof t && 0 !== zn.indexOf("6.6") && -1 === Nn.indexOf("Chrome/66");
    } catch (e) {}
  }(),
      $n = function $n(e) {
    var t;return !(!s(e) || "function" != typeof (t = e.then)) && t;
  },
      Qn = function Qn(e, t) {
    if (!e._n) {
      e._n = !0;var n = e._c;Rn(function () {
        for (var i = e._v, r = 1 == e._s, o = 0, s = function s(t) {
          var n,
              o,
              s,
              a = r ? t.ok : t.fail,
              l = t.resolve,
              c = t.reject,
              u = t.domain;try {
            a ? (r || (2 == e._h && Jn(e), e._h = 1), !0 === a ? n = i : (u && u.enter(), n = a(i), u && (u.exit(), s = !0)), n === t.promise ? c(qn("Promise-chain cycle")) : (o = $n(n)) ? o.call(n, l, c) : l(n)) : c(i);
          } catch (e) {
            u && !s && u.exit(), c(e);
          }
        }; n.length > o;) {
          s(n[o++]);
        }e._c = [], e._n = !1, t && !e._h && Xn(e);
      });
    }
  },
      Xn = function Xn(e) {
    Fn.call(r, function () {
      var t,
          n,
          i,
          o = e._v,
          s = Zn(e);if (s && (t = On(function () {
        Bn ? Wn.emit("unhandledRejection", o, e) : (n = r.onunhandledrejection) ? n({ promise: e, reason: o }) : (i = r.console) && i.error && i.error("Unhandled promise rejection", o);
      }), e._h = Bn || Zn(e) ? 2 : 1), e._a = void 0, s && t.e) throw t.v;
    });
  },
      Zn = function Zn(e) {
    return 1 !== e._h && 0 === (e._a || e._c).length;
  },
      Jn = function Jn(e) {
    Fn.call(r, function () {
      var t;Bn ? Wn.emit("rejectionHandled", e) : (t = r.onrejectionhandled) && t({ promise: e, reason: e._v });
    });
  },
      ei = function ei(e) {
    var t = this;t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), Qn(t, !0));
  },
      ti = function ti(e) {
    var t,
        n = this;if (!n._d) {
      n._d = !0, n = n._w || n;try {
        if (n === e) throw qn("Promise can't be resolved itself");(t = $n(e)) ? Rn(function () {
          var r = { _w: n, _d: !1 };try {
            t.call(e, i(ti, r, 1), i(ei, r, 1));
          } catch (e) {
            ei.call(r, e);
          }
        }) : (n._v = e, n._s = 1, Qn(n, !1));
      } catch (e) {
        ei.call({ _w: n, _d: !1 }, e);
      }
    }
  };Kn || (_Un = function Un(e) {
    Wt(this, _Un, "Promise", "_h"), n(e), Dn.call(this);try {
      e(i(ti, this, 1), i(ei, this, 1));
    } catch (e) {
      ei.call(this, e);
    }
  }, (Dn = function Dn(e) {
    this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
  }).prototype = qt(_Un.prototype, { then: function then(e, t) {
      var i,
          r,
          o,
          s = Gn((i = _Un, void 0 === (o = a(this).constructor) || void 0 == (r = a(o)[hn]) ? i : n(r)));return s.ok = "function" != typeof e || e, s.fail = "function" == typeof t && t, s.domain = Bn ? Wn.domain : void 0, this._c.push(s), this._a && this._a.push(s), this._s && Qn(this, !1), s.promise;
    }, catch: function _catch(e) {
      return this.then(void 0, e);
    } }), Pn = function Pn() {
    var e = new Dn();this.promise = e, this.resolve = i(ti, e, 1), this.reject = i(ei, e, 1);
  }, In.f = Gn = function Gn(e) {
    return e === _Un || e === Mn ? new Pn(e) : An(e);
  }), x(x.G + x.W + x.F * !Kn, { Promise: _Un }), ft(_Un, "Promise"), Hn("Promise"), Mn = o.Promise, x(x.S + x.F * !Kn, "Promise", { reject: function reject(e) {
      var t = Gn(this);return (0, t.reject)(e), t.promise;
    } }), x(x.S + x.F * !Kn, "Promise", { resolve: function resolve(e) {
      return function (e, t) {
        if (a(e), s(t) && t.constructor === e) return t;var n = In.f(e);return (0, n.resolve)(t), n.promise;
      }(this, e);
    } }), x(x.S + x.F * !(Kn && X(function (e) {
    _Un.all(e).catch(Vn);
  })), "Promise", { all: function all(e) {
      var t = this,
          n = Gn(t),
          i = n.resolve,
          r = n.reject,
          o = On(function () {
        var n = [],
            o = 0,
            s = 1;Yt(e, !1, function (e) {
          var a = o++,
              l = !1;n.push(void 0), s++, t.resolve(e).then(function (e) {
            l || (l = !0, n[a] = e, --s || i(n));
          }, r);
        }), --s || i(n);
      });return o.e && r(o.v), n.promise;
    }, race: function race(e) {
      var t = this,
          n = Gn(t),
          i = n.reject,
          r = On(function () {
        Yt(e, !1, function (e) {
          t.resolve(e).then(n.resolve, i);
        });
      });return r.e && i(r.v), n.promise;
    } });var ni = "".startsWith;x(x.P + x.F * rt("startsWith"), "String", { startsWith: function startsWith(e) {
      var t = nt(this, e, "startsWith"),
          n = q(Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)),
          i = String(e);return ni ? ni.call(t, i, n) : t.slice(n, n + i.length) === i;
    } }), x(x.S, "Number", { isNaN: function isNaN(e) {
      return e != e;
    } });var ii = function ii(e) {
    return null !== e && void 0 !== e ? e.constructor : null;
  },
      ri = function ri(e, t) {
    return Boolean(e && t && e instanceof t);
  },
      oi = function oi(e) {
    return null === e || void 0 === e;
  },
      si = function si(e) {
    return ii(e) === Object;
  },
      ai = function ai(e) {
    return ii(e) === String;
  },
      li = function li(e) {
    return Array.isArray(e);
  },
      ci = function ci(e) {
    return ri(e, NodeList);
  },
      ui = function ui(e) {
    return oi(e) || (ai(e) || li(e) || ci(e)) && !e.length || si(e) && !Object.keys(e).length;
  },
      di = { nullOrUndefined: oi, object: si, number: function number(e) {
      return ii(e) === Number && !Number.isNaN(e);
    }, string: ai, boolean: function boolean(e) {
      return ii(e) === Boolean;
    }, function: function _function(e) {
      return ii(e) === Function;
    }, array: li, weakMap: function weakMap(e) {
      return ri(e, WeakMap);
    }, nodeList: ci, element: function element(e) {
      return ri(e, Element);
    }, textNode: function textNode(e) {
      return ii(e) === Text;
    }, event: function event(e) {
      return ri(e, Event);
    }, keyboardEvent: function keyboardEvent(e) {
      return ri(e, KeyboardEvent);
    }, cue: function cue(e) {
      return ri(e, window.TextTrackCue) || ri(e, window.VTTCue);
    }, track: function track(e) {
      return ri(e, TextTrack) || !oi(e) && ai(e.kind);
    }, url: function url(e) {
      if (ri(e, window.URL)) return !0;var t = e;e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));try {
        return !ui(new URL(t).hostname);
      } catch (e) {
        return !1;
      }
    }, empty: ui },
      hi = function () {
    var e = !1;try {
      var t = Object.defineProperty({}, "passive", { get: function get() {
          return e = !0, null;
        } });window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
    } catch (e) {}return e;
  }();function fi(e, t, n) {
    var i = this,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
        s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];if (e && "addEventListener" in e && !di.empty(t) && di.function(n)) {
      var a = t.split(" "),
          l = s;hi && (l = { passive: o, capture: s }), a.forEach(function (t) {
        i && i.eventListeners && r && i.eventListeners.push({ element: e, type: t, callback: n, options: l }), e[r ? "addEventListener" : "removeEventListener"](t, n, l);
      });
    }
  }function pi(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];fi.call(this, e, t, n, !0, i, r);
  }function mi(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];fi.call(this, e, t, n, !1, i, r);
  }function gi(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];fi.call(this, e, t, function o() {
      mi(e, t, o, i, r);for (var s = arguments.length, a = new Array(s), l = 0; l < s; l++) {
        a[l] = arguments[l];
      }n.apply(this, a);
    }, !0, i, r);
  }function vi(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};if (di.element(e) && !di.empty(t)) {
      var r = new CustomEvent(t, { bubbles: n, detail: Object.assign({}, i, { plyr: this }) });e.dispatchEvent(r);
    }
  }function yi(e, t) {
    var n = e.length ? e : [e];Array.from(n).reverse().forEach(function (e, n) {
      var i = n > 0 ? t.cloneNode(!0) : t,
          r = e.parentNode,
          o = e.nextSibling;i.appendChild(e), o ? r.insertBefore(i, o) : r.appendChild(i);
    });
  }function bi(e, t) {
    di.element(e) && !di.empty(t) && Object.entries(t).filter(function (e) {
      var t = nn(e, 2)[1];return !di.nullOrUndefined(t);
    }).forEach(function (t) {
      var n = nn(t, 2),
          i = n[0],
          r = n[1];return e.setAttribute(i, r);
    });
  }function _i(e, t, n) {
    var i = document.createElement(e);return di.object(t) && bi(i, t), di.string(n) && (i.innerText = n), i;
  }function wi(e, t, n, i) {
    di.element(t) && t.appendChild(_i(e, n, i));
  }function Ei(e) {
    di.nodeList(e) || di.array(e) ? Array.from(e).forEach(Ei) : di.element(e) && di.element(e.parentNode) && e.parentNode.removeChild(e);
  }function Ti(e) {
    if (di.element(e)) for (var t = e.childNodes.length; t > 0;) {
      e.removeChild(e.lastChild), t -= 1;
    }
  }function ki(e, t) {
    return di.element(t) && di.element(t.parentNode) && di.element(e) ? (t.parentNode.replaceChild(e, t), e) : null;
  }function Si(e, t) {
    if (!di.string(e) || di.empty(e)) return {};var n = {},
        i = t;return e.split(",").forEach(function (e) {
      var t = e.trim(),
          r = t.replace(".", ""),
          o = t.replace(/[[\]]/g, "").split("="),
          s = o[0],
          a = o.length > 1 ? o[1].replace(/["']/g, "") : "";switch (t.charAt(0)) {case ".":
          di.object(i) && di.string(i.class) && (i.class += " ".concat(r)), n.class = r;break;case "#":
          n.id = t.replace("#", "");break;case "[":
          n[s] = a;}
    }), n;
  }function xi(e, t) {
    if (di.element(e)) {
      var n = t;di.boolean(n) || (n = !e.hidden), n ? e.setAttribute("hidden", "") : e.removeAttribute("hidden");
    }
  }function Ci(e, t, n) {
    if (di.nodeList(e)) return Array.from(e).map(function (e) {
      return Ci(e, t, n);
    });if (di.element(e)) {
      var i = "toggle";return void 0 !== n && (i = n ? "add" : "remove"), e.classList[i](t), e.classList.contains(t);
    }return !1;
  }function Di(e, t) {
    return di.element(e) && e.classList.contains(t);
  }function Ai(e, t) {
    var n = { Element: Element };return (n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function () {
      return Array.from(document.querySelectorAll(t)).includes(this);
    }).call(e, t);
  }function Pi(e) {
    return this.elements.container.querySelectorAll(e);
  }function Mi(e) {
    return this.elements.container.querySelector(e);
  }function Ii() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];di.element(e) && (e.focus(), t && Ci(e, this.config.classNames.tabFocus));
  }var Oi,
      Li,
      Ni,
      ji = (Oi = document.createElement("span"), Li = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }, Ni = Object.keys(Li).find(function (e) {
    return void 0 !== Oi.style[e];
  }), !!di.string(Ni) && Li[Ni]);function Hi(e) {
    setTimeout(function () {
      try {
        xi(e, !0), e.offsetHeight, xi(e, !1);
      } catch (e) {}
    }, 0);
  }var Fi,
      Ri = { isIE: !!document.documentMode, isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent), isIPhone: /(iPhone|iPod)/gi.test(navigator.platform), isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform) },
      qi = { "audio/ogg": "vorbis", "audio/wav": "1", "video/webm": "vp8, vorbis", "video/mp4": "avc1.42E01E, mp4a.40.2", "video/ogg": "theora" },
      Wi = { audio: "canPlayType" in document.createElement("audio"), video: "canPlayType" in document.createElement("video"), check: function check(e, t, n) {
      var i = Ri.isIPhone && n && Wi.playsinline,
          r = Wi[e] || "html5" !== t;return { api: r, ui: r && Wi.rangeInput && ("video" !== e || !Ri.isIPhone || i) };
    }, pip: !Ri.isIPhone && di.function(_i("video").webkitSetPresentationMode), airplay: di.function(window.WebKitPlaybackTargetAvailabilityEvent), playsinline: "playsInline" in document.createElement("video"), mime: function mime(e) {
      var t,
          n = nn(e.split("/"), 1)[0];if (!this.isHTML5 || n !== this.type) return !1;e && e.includes("codecs=") ? t = e : "audio/mpeg" === e ? t = "audio/mpeg;" : e in qi && (t = "".concat(e, '; codecs="').concat(qi[e], '"'));try {
        return Boolean(t && this.media.canPlayType(t).replace(/no/, ""));
      } catch (e) {
        return !1;
      }
    }, textTracks: "textTracks" in document.createElement("video"), rangeInput: (Fi = document.createElement("input"), Fi.type = "range", "range" === Fi.type), touch: "ontouchstart" in document.documentElement, transitions: !1 !== ji, reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches },
      Yi = { getSources: function getSources() {
      var e = this;return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(function (t) {
        return Wi.mime.call(e, t.getAttribute("type"));
      }) : [];
    }, getQualityOptions: function getQualityOptions() {
      return Yi.getSources.call(this).map(function (e) {
        return Number(e.getAttribute("size"));
      }).filter(Boolean);
    }, extend: function extend() {
      if (this.isHTML5) {
        var e = this;Object.defineProperty(e.media, "quality", { get: function get() {
            var t = Yi.getSources.call(e).find(function (t) {
              return t.getAttribute("src") === e.source;
            });return t && Number(t.getAttribute("size"));
          }, set: function set(t) {
            var n = Yi.getSources.call(e).find(function (e) {
              return Number(e.getAttribute("size")) === t;
            });if (n) {
              var i = e.media,
                  r = i.currentTime,
                  o = i.paused,
                  s = i.preload,
                  a = i.readyState;e.media.src = n.getAttribute("src"), ("none" !== s || a) && (e.once("loadedmetadata", function () {
                e.currentTime = r, o || e.play();
              }), e.media.load()), vi.call(e, e.media, "qualitychange", !1, { quality: t }), e.storage.set({ quality: t });
            }
          } });
      }
    }, cancelRequests: function cancelRequests() {
      this.isHTML5 && (Ei(Yi.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
    } };function zi(e) {
    return di.array(e) ? e.filter(function (t, n) {
      return e.indexOf(t) === n;
    }) : e;
  }function Ui(e, t) {
    return t.split(".").reduce(function (e, t) {
      return e && e[t];
    }, e);
  }function Bi() {
    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) {
      n[i - 1] = arguments[i];
    }if (!n.length) return e;var r = n.shift();return di.object(r) ? (Object.keys(r).forEach(function (t) {
      di.object(r[t]) ? (Object.keys(e).includes(t) || Object.assign(e, tn({}, t, {})), Bi(e[t], r[t])) : Object.assign(e, tn({}, t, r[t]));
    }), Bi.apply(void 0, [e].concat(n))) : e;
  }var Vi = g.f,
      Gi = Se.f,
      _Ki = r.RegExp,
      $i = _Ki,
      Qi = _Ki.prototype,
      Xi = /a/g,
      Zi = /a/g,
      Ji = new _Ki(Xi) !== Xi;if (c && (!Ji || l(function () {
    return Zi[I("match")] = !1, _Ki(Xi) != Xi || _Ki(Zi) == Zi || "/a/i" != _Ki(Xi, "i");
  }))) {
    _Ki = function Ki(e, t) {
      var n = this instanceof _Ki,
          i = tt(e),
          r = void 0 === t;return !n && i && e.constructor === _Ki && r ? e : pe(Ji ? new $i(i && !r ? e.source : e, t) : $i((i = e instanceof _Ki) ? e.source : e, i && r ? at.call(e) : t), n ? this : Qi, _Ki);
    };for (var er = function er(e) {
      (e in _Ki) || Vi(_Ki, e, { configurable: !0, get: function get() {
          return $i[e];
        }, set: function set(t) {
          $i[e] = t;
        } });
    }, tr = Gi($i), nr = 0; tr.length > nr;) {
      er(tr[nr++]);
    }Qi.constructor = _Ki, _Ki.prototype = Qi, k(r, "RegExp", _Ki);
  }function ir(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) {
      n[i - 1] = arguments[i];
    }return di.empty(e) ? e : e.toString().replace(/{(\d+)}/g, function (e, t) {
      return n[t].toString();
    });
  }function rr() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), n.toString());
  }function or() {
    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/\w\S*/g, function (e) {
      return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
    });
  }function sr() {
    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();return (e = function () {
      var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();return rr(e = or(e = rr(e = rr(e, "-", " "), "_", " ")), " ", "");
    }(e)).charAt(0).toLowerCase() + e.slice(1);
  }function ar(e) {
    var t = document.createElement("div");return t.appendChild(e), t.innerHTML;
  }Hn("RegExp");var lr = function lr() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};if (di.empty(e) || di.empty(t)) return "";var n = Ui(t.i18n, e);if (di.empty(n)) return "";var i = { "{seektime}": t.seekTime, "{title}": t.title };return Object.entries(i).forEach(function (e) {
      var t = nn(e, 2),
          i = t[0],
          r = t[1];n = rr(n, i, r);
    }), n;
  },
      cr = function () {
    function e(t) {
      Zt(this, e), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key;
    }return en(e, [{ key: "get", value: function value(t) {
        if (!e.supported || !this.enabled) return null;var n = window.localStorage.getItem(this.key);if (di.empty(n)) return null;var i = JSON.parse(n);return di.string(t) && t.length ? i[t] : i;
      } }, { key: "set", value: function value(t) {
        if (e.supported && this.enabled && di.object(t)) {
          var n = this.get();di.empty(n) && (n = {}), Bi(n, t), window.localStorage.setItem(this.key, JSON.stringify(n));
        }
      } }], [{ key: "supported", get: function get() {
        try {
          if (!("localStorage" in window)) return !1;return window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0;
        } catch (e) {
          return !1;
        }
      } }]), e;
  }();function ur(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";return new Promise(function (n, i) {
      try {
        var r = new XMLHttpRequest();if (!("withCredentials" in r)) return;r.addEventListener("load", function () {
          if ("text" === t) try {
            n(JSON.parse(r.responseText));
          } catch (e) {
            n(r.responseText);
          } else n(r.response);
        }), r.addEventListener("error", function () {
          throw new Error(r.status);
        }), r.open("GET", e, !0), r.responseType = t, r.send();
      } catch (e) {
        i(e);
      }
    });
  }function dr(e, t) {
    if (di.string(e)) {
      var n = di.string(t),
          i = function i() {
        return null !== document.getElementById(t);
      },
          r = function r(e, t) {
        e.innerHTML = t, n && i() || document.body.insertAdjacentElement("afterbegin", e);
      };if (!n || !i()) {
        var o = cr.supported,
            s = document.createElement("div");if (s.setAttribute("hidden", ""), n && s.setAttribute("id", t), o) {
          var a = window.localStorage.getItem("".concat("cache", "-").concat(t));if (null !== a) {
            var l = JSON.parse(a);r(s, l.content);
          }
        }ur(e).then(function (e) {
          di.empty(e) || (o && window.localStorage.setItem("".concat("cache", "-").concat(t), JSON.stringify({ content: e })), r(s, e));
        }).catch(function () {});
      }
    }
  }var hr = function hr(e) {
    return parseInt(e / 60 / 60 % 60, 10);
  },
      fr = function fr(e) {
    return parseInt(e / 60 % 60, 10);
  },
      pr = function pr(e) {
    return parseInt(e % 60, 10);
  };function mr() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];if (!di.number(e)) return mr(null, t, n);var i = function i(e) {
      return "0".concat(e).slice(-2);
    },
        r = hr(e),
        o = fr(e),
        s = pr(e);return r = t || r > 0 ? "".concat(r, ":") : "", "".concat(n && e > 0 ? "-" : "").concat(r).concat(i(o), ":").concat(i(s));
  }var gr = { getIconUrl: function getIconUrl() {
      var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || Ri.isIE && !window.svg4everybody;return { url: this.config.iconUrl, cors: e };
    }, findElements: function findElements() {
      try {
        return this.elements.controls = Mi.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = { play: Pi.call(this, this.config.selectors.buttons.play), pause: Mi.call(this, this.config.selectors.buttons.pause), restart: Mi.call(this, this.config.selectors.buttons.restart), rewind: Mi.call(this, this.config.selectors.buttons.rewind), fastForward: Mi.call(this, this.config.selectors.buttons.fastForward), mute: Mi.call(this, this.config.selectors.buttons.mute), pip: Mi.call(this, this.config.selectors.buttons.pip), airplay: Mi.call(this, this.config.selectors.buttons.airplay), settings: Mi.call(this, this.config.selectors.buttons.settings), captions: Mi.call(this, this.config.selectors.buttons.captions), fullscreen: Mi.call(this, this.config.selectors.buttons.fullscreen) }, this.elements.progress = Mi.call(this, this.config.selectors.progress), this.elements.inputs = { seek: Mi.call(this, this.config.selectors.inputs.seek), volume: Mi.call(this, this.config.selectors.inputs.volume) }, this.elements.display = { buffer: Mi.call(this, this.config.selectors.display.buffer), currentTime: Mi.call(this, this.config.selectors.display.currentTime), duration: Mi.call(this, this.config.selectors.display.duration) }, di.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0;
      } catch (e) {
        return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1;
      }
    }, createIcon: function createIcon(e, t) {
      var n = gr.getIconUrl.call(this),
          i = "".concat(n.cors ? "" : n.url, "#").concat(this.config.iconPrefix),
          r = document.createElementNS("http://www.w3.org/2000/svg", "svg");bi(r, Bi(t, { role: "presentation", focusable: "false" }));var o = document.createElementNS("http://www.w3.org/2000/svg", "use"),
          s = "".concat(i, "-").concat(e);return "href" in o ? o.setAttributeNS("http://www.w3.org/1999/xlink", "href", s) : o.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s), r.appendChild(o), r;
    }, createLabel: function createLabel(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = { pip: "PIP", airplay: "AirPlay" }[e] || lr(e, this.config);return _i("span", Object.assign({}, t, { class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ") }), n);
    }, createBadge: function createBadge(e) {
      if (di.empty(e)) return null;var t = _i("span", { class: this.config.classNames.menu.value });return t.appendChild(_i("span", { class: this.config.classNames.menu.badge }, e)), t;
    }, createButton: function createButton(e, t) {
      var n,
          i,
          r,
          o,
          s = _i("button"),
          a = Object.assign({}, t),
          l = sr(e),
          c = !1;switch ("type" in a || (a.type = "button"), "class" in a ? a.class.includes(this.config.classNames.control) || (a.class += " ".concat(this.config.classNames.control)) : a.class = this.config.classNames.control, e) {case "play":
          c = !0, n = "play", r = "pause", i = "play", o = "pause";break;case "mute":
          c = !0, n = "mute", r = "unmute", i = "volume", o = "muted";break;case "captions":
          c = !0, n = "enableCaptions", r = "disableCaptions", i = "captions-off", o = "captions-on";break;case "fullscreen":
          c = !0, n = "enterFullscreen", r = "exitFullscreen", i = "enter-fullscreen", o = "exit-fullscreen";break;case "play-large":
          a.class += " ".concat(this.config.classNames.control, "--overlaid"), l = "play", n = "play", i = "play";break;default:
          n = l, i = e;}return c ? (s.appendChild(gr.createIcon.call(this, o, { class: "icon--pressed" })), s.appendChild(gr.createIcon.call(this, i, { class: "icon--not-pressed" })), s.appendChild(gr.createLabel.call(this, r, { class: "label--pressed" })), s.appendChild(gr.createLabel.call(this, n, { class: "label--not-pressed" }))) : (s.appendChild(gr.createIcon.call(this, i)), s.appendChild(gr.createLabel.call(this, n))), Bi(a, Si(this.config.selectors.buttons[l], a)), bi(s, a), "play" === l ? (di.array(this.elements.buttons[l]) || (this.elements.buttons[l] = []), this.elements.buttons[l].push(s)) : this.elements.buttons[l] = s, s;
    }, createRange: function createRange(e, t) {
      var n = _i("input", Bi(Si(this.config.selectors.inputs[e]), { type: "range", min: 0, max: 100, step: .01, value: 0, autocomplete: "off", role: "slider", "aria-label": lr(e, this.config), "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": 0 }, t));return this.elements.inputs[e] = n, gr.updateRangeFill.call(this, n), n;
    }, createProgress: function createProgress(e, t) {
      var n = _i("progress", Bi(Si(this.config.selectors.display[e]), { min: 0, max: 100, value: 0, role: "presentation", "aria-hidden": !0 }, t));if ("volume" !== e) {
        n.appendChild(_i("span", null, "0"));var i = { played: "played", buffer: "buffered" }[e],
            r = i ? lr(i, this.config) : "";n.innerText = "% ".concat(r.toLowerCase());
      }return this.elements.display[e] = n, n;
    }, createTime: function createTime(e) {
      var t = Si(this.config.selectors.display[e]),
          n = _i("div", Bi(t, { class: "".concat(this.config.classNames.display.time, " ").concat(t.class ? t.class : "").trim(), "aria-label": lr(e, this.config) }), "00:00");return this.elements.display[e] = n, n;
    }, bindMenuItemShortcuts: function bindMenuItemShortcuts(e, t) {
      var n = this;pi(e, "keydown keyup", function (i) {
        if ([32, 38, 39, 40].includes(i.which) && (i.preventDefault(), i.stopPropagation(), "keydown" !== i.type)) {
          var r,
              o = Ai(e, '[role="menuitemradio"]');if (!o && [32, 39].includes(i.which)) gr.showMenuPanel.call(n, t, !0);else 32 !== i.which && (40 === i.which || o && 39 === i.which ? (r = e.nextElementSibling, di.element(r) || (r = e.parentNode.firstElementChild)) : (r = e.previousElementSibling, di.element(r) || (r = e.parentNode.lastElementChild)), Ii.call(n, r, !0));
        }
      }, !1), pi(e, "keyup", function (e) {
        13 === e.which && gr.focusFirstMenuItem.call(n, null, !0);
      });
    }, createMenuItem: function createMenuItem(e) {
      var t = this,
          n = e.value,
          i = e.list,
          r = e.type,
          o = e.title,
          s = e.badge,
          a = void 0 === s ? null : s,
          l = e.checked,
          c = void 0 !== l && l,
          u = Si(this.config.selectors.inputs[r]),
          d = _i("button", Bi(u, { type: "button", role: "menuitemradio", class: "".concat(this.config.classNames.control, " ").concat(u.class ? u.class : "").trim(), "aria-checked": c, value: n })),
          h = _i("span");h.innerHTML = o, di.element(a) && h.appendChild(a), d.appendChild(h), Object.defineProperty(d, "checked", { enumerable: !0, get: function get() {
          return "true" === d.getAttribute("aria-checked");
        }, set: function set(e) {
          e && Array.from(d.parentNode.children).filter(function (e) {
            return Ai(e, '[role="menuitemradio"]');
          }).forEach(function (e) {
            return e.setAttribute("aria-checked", "false");
          }), d.setAttribute("aria-checked", e ? "true" : "false");
        } }), this.listeners.bind(d, "click keyup", function (e) {
        if (!di.keyboardEvent(e) || 32 === e.which) {
          switch (e.preventDefault(), e.stopPropagation(), d.checked = !0, r) {case "language":
              t.currentTrack = Number(n);break;case "quality":
              t.quality = n;break;case "speed":
              t.speed = parseFloat(n);}gr.showMenuPanel.call(t, "home", di.keyboardEvent(e));
        }
      }, r, !1), gr.bindMenuItemShortcuts.call(this, d, r), i.appendChild(d);
    }, formatTime: function formatTime() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];return di.number(e) ? mr(e, hr(this.duration) > 0, t) : e;
    }, updateTimeDisplay: function updateTimeDisplay() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];di.element(e) && di.number(t) && (e.innerText = gr.formatTime(t, n));
    }, updateVolume: function updateVolume() {
      this.supported.ui && (di.element(this.elements.inputs.volume) && gr.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), di.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume));
    }, setRange: function setRange(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;di.element(e) && (e.value = t, gr.updateRangeFill.call(this, e));
    }, updateProgress: function updateProgress(e) {
      var t = this;if (this.supported.ui && di.event(e)) {
        var n,
            i,
            r = 0;if (e) switch (e.type) {case "timeupdate":case "seeking":case "seeked":
            n = this.currentTime, i = this.duration, r = 0 === n || 0 === i || Number.isNaN(n) || Number.isNaN(i) ? 0 : (n / i * 100).toFixed(2), "timeupdate" === e.type && gr.setRange.call(this, this.elements.inputs.seek, r);break;case "playing":case "progress":
            !function (e, n) {
              var i = di.number(n) ? n : 0,
                  r = di.element(e) ? e : t.elements.display.buffer;if (di.element(r)) {
                r.value = i;var o = r.getElementsByTagName("span")[0];di.element(o) && (o.childNodes[0].nodeValue = i);
              }
            }(this.elements.display.buffer, 100 * this.buffered);}
      }
    }, updateRangeFill: function updateRangeFill(e) {
      var t = di.event(e) ? e.target : e;if (di.element(t) && "range" === t.getAttribute("type")) {
        if (Ai(t, this.config.selectors.inputs.seek)) {
          t.setAttribute("aria-valuenow", this.currentTime);var n = gr.formatTime(this.currentTime),
              i = gr.formatTime(this.duration),
              r = lr("seekLabel", this.config);t.setAttribute("aria-valuetext", r.replace("{currentTime}", n).replace("{duration}", i));
        } else if (Ai(t, this.config.selectors.inputs.volume)) {
          var o = 100 * t.value;t.setAttribute("aria-valuenow", o), t.setAttribute("aria-valuetext", "".concat(o.toFixed(1), "%"));
        } else t.setAttribute("aria-valuenow", t.value);Ri.isWebkit && t.style.setProperty("--value", "".concat(t.value / t.max * 100, "%"));
      }
    }, updateSeekTooltip: function updateSeekTooltip(e) {
      var t = this;if (this.config.tooltips.seek && di.element(this.elements.inputs.seek) && di.element(this.elements.display.seekTooltip) && 0 !== this.duration) {
        var n = 0,
            i = this.elements.progress.getBoundingClientRect(),
            r = "".concat(this.config.classNames.tooltip, "--visible"),
            o = function o(e) {
          Ci(t.elements.display.seekTooltip, r, e);
        };if (this.touch) o(!1);else {
          if (di.event(e)) n = 100 / i.width * (e.pageX - i.left);else {
            if (!Di(this.elements.display.seekTooltip, r)) return;n = parseFloat(this.elements.display.seekTooltip.style.left, 10);
          }n < 0 ? n = 0 : n > 100 && (n = 100), gr.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * n), this.elements.display.seekTooltip.style.left = "".concat(n, "%"), di.event(e) && ["mouseenter", "mouseleave"].includes(e.type) && o("mouseenter" === e.type);
        }
      }
    }, timeUpdate: function timeUpdate(e) {
      var t = !di.element(this.elements.display.duration) && this.config.invertTime;gr.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || gr.updateProgress.call(this, e);
    }, durationUpdate: function durationUpdate() {
      if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
        if (this.duration >= Math.pow(2, 32)) return xi(this.elements.display.currentTime, !0), void xi(this.elements.progress, !0);di.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);var e = di.element(this.elements.display.duration);!e && this.config.displayDuration && this.paused && gr.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && gr.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), gr.updateSeekTooltip.call(this);
      }
    }, toggleMenuButton: function toggleMenuButton(e, t) {
      xi(this.elements.settings.buttons[e], !t);
    }, updateSetting: function updateSetting(e, t, n) {
      var i = this.elements.settings.panels[e],
          r = null,
          o = t;if ("captions" === e) r = this.currentTrack;else {
        if (r = di.empty(n) ? this[e] : n, di.empty(r) && (r = this.config[e].default), !di.empty(this.options[e]) && !this.options[e].includes(r)) return void this.debug.warn("Unsupported value of '".concat(r, "' for ").concat(e));if (!this.config[e].options.includes(r)) return void this.debug.warn("Disabled value of '".concat(r, "' for ").concat(e));
      }if (di.element(o) || (o = i && i.querySelector('[role="menu"]')), di.element(o)) {
        this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = gr.getLabel.call(this, e, r);var s = o && o.querySelector('[value="'.concat(r, '"]'));di.element(s) && (s.checked = !0);
      }
    }, getLabel: function getLabel(e, t) {
      switch (e) {case "speed":
          return 1 === t ? lr("normal", this.config) : "".concat(t, "&times;");case "quality":
          if (di.number(t)) {
            var n = lr("qualityLabel.".concat(t), this.config);return n.length ? n : "".concat(t, "p");
          }return or(t);case "captions":
          return br.getLabel.call(this);default:
          return null;}
    }, setQualityMenu: function setQualityMenu(e) {
      var t = this;if (di.element(this.elements.settings.panels.quality)) {
        var n = this.elements.settings.panels.quality.querySelector('[role="menu"]');di.array(e) && (this.options.quality = zi(e).filter(function (e) {
          return t.config.quality.options.includes(e);
        }));var i = !di.empty(this.options.quality) && this.options.quality.length > 1;if (gr.toggleMenuButton.call(this, "quality", i), Ti(n), gr.checkMenu.call(this), i) {
          this.options.quality.sort(function (e, n) {
            var i = t.config.quality.options;return i.indexOf(e) > i.indexOf(n) ? 1 : -1;
          }).forEach(function (e) {
            gr.createMenuItem.call(t, { value: e, list: n, type: "quality", title: gr.getLabel.call(t, "quality", e), badge: function (e) {
                var n = lr("qualityBadge.".concat(e), t.config);return n.length ? gr.createBadge.call(t, n) : null;
              }(e) });
          }), gr.updateSetting.call(this, "quality", n);
        }
      }
    }, setCaptionsMenu: function setCaptionsMenu() {
      var e = this;if (di.element(this.elements.settings.panels.captions)) {
        var t = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
            n = br.getTracks.call(this),
            i = Boolean(n.length);if (gr.toggleMenuButton.call(this, "captions", i), Ti(t), gr.checkMenu.call(this), i) {
          var r = n.map(function (n, i) {
            return { value: i, checked: e.captions.toggled && e.currentTrack === i, title: br.getLabel.call(e, n), badge: n.language && gr.createBadge.call(e, n.language.toUpperCase()), list: t, type: "language" };
          });r.unshift({ value: -1, checked: !this.captions.toggled, title: lr("disabled", this.config), list: t, type: "language" }), r.forEach(gr.createMenuItem.bind(this)), gr.updateSetting.call(this, "captions", t);
        }
      }
    }, setSpeedMenu: function setSpeedMenu(e) {
      var t = this;if (di.element(this.elements.settings.panels.speed)) {
        var n = this.elements.settings.panels.speed.querySelector('[role="menu"]');di.array(e) ? this.options.speed = e : (this.isHTML5 || this.isVimeo) && (this.options.speed = [.5, .75, 1, 1.25, 1.5, 1.75, 2]), this.options.speed = this.options.speed.filter(function (e) {
          return t.config.speed.options.includes(e);
        });var i = !di.empty(this.options.speed) && this.options.speed.length > 1;gr.toggleMenuButton.call(this, "speed", i), Ti(n), gr.checkMenu.call(this), i && (this.options.speed.forEach(function (e) {
          gr.createMenuItem.call(t, { value: e, list: n, type: "speed", title: gr.getLabel.call(t, "speed", e) });
        }), gr.updateSetting.call(this, "speed", n));
      }
    }, checkMenu: function checkMenu() {
      var e = this.elements.settings.buttons,
          t = !di.empty(e) && Object.values(e).some(function (e) {
        return !e.hidden;
      });xi(this.elements.settings.menu, !t);
    }, focusFirstMenuItem: function focusFirstMenuItem(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];if (!this.elements.settings.popup.hidden) {
        var n = e;di.element(n) || (n = Object.values(this.elements.settings.panels).find(function (e) {
          return !e.hidden;
        }));var i = n.querySelector('[role^="menuitem"]');Ii.call(this, i, t);
      }
    }, toggleMenu: function toggleMenu(e) {
      var t = this.elements.settings.popup,
          n = this.elements.buttons.settings;if (di.element(t) && di.element(n)) {
        var i = t.hidden,
            r = i;if (di.boolean(e)) r = e;else if (di.keyboardEvent(e) && 27 === e.which) r = !1;else if (di.event(e)) {
          var o = t.contains(e.target);if (o || !o && e.target !== n && r) return;
        }n.setAttribute("aria-expanded", r), xi(t, !r), Ci(this.elements.container, this.config.classNames.menu.open, r), r && di.keyboardEvent(e) ? gr.focusFirstMenuItem.call(this, null, !0) : r || i || Ii.call(this, n, di.keyboardEvent(e));
      }
    }, getMenuSize: function getMenuSize(e) {
      var t = e.cloneNode(!0);t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);var n = t.scrollWidth,
          i = t.scrollHeight;return Ei(t), { width: n, height: i };
    }, showMenuPanel: function showMenuPanel() {
      var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          i = document.getElementById("plyr-settings-".concat(this.id, "-").concat(t));if (di.element(i)) {
        var r = i.parentNode,
            o = Array.from(r.children).find(function (e) {
          return !e.hidden;
        });if (Wi.transitions && !Wi.reducedMotion) {
          r.style.width = "".concat(o.scrollWidth, "px"), r.style.height = "".concat(o.scrollHeight, "px");var s = gr.getMenuSize.call(this, i);pi.call(this, r, ji, function t(n) {
            n.target === r && ["width", "height"].includes(n.propertyName) && (r.style.width = "", r.style.height = "", mi.call(e, r, ji, t));
          }), r.style.width = "".concat(s.width, "px"), r.style.height = "".concat(s.height, "px");
        }xi(o, !0), xi(i, !1), gr.focusFirstMenuItem.call(this, i, n);
      }
    }, create: function create(e) {
      var t = this,
          n = _i("div", Si(this.config.selectors.controls.wrapper));if (this.config.controls.includes("restart") && n.appendChild(gr.createButton.call(this, "restart")), this.config.controls.includes("rewind") && n.appendChild(gr.createButton.call(this, "rewind")), this.config.controls.includes("play") && n.appendChild(gr.createButton.call(this, "play")), this.config.controls.includes("fast-forward") && n.appendChild(gr.createButton.call(this, "fast-forward")), this.config.controls.includes("progress")) {
        var i = _i("div", Si(this.config.selectors.progress));if (i.appendChild(gr.createRange.call(this, "seek", { id: "plyr-seek-".concat(e.id) })), i.appendChild(gr.createProgress.call(this, "buffer")), this.config.tooltips.seek) {
          var r = _i("span", { class: this.config.classNames.tooltip }, "00:00");i.appendChild(r), this.elements.display.seekTooltip = r;
        }this.elements.progress = i, n.appendChild(this.elements.progress);
      }if (this.config.controls.includes("current-time") && n.appendChild(gr.createTime.call(this, "currentTime")), this.config.controls.includes("duration") && n.appendChild(gr.createTime.call(this, "duration")), this.config.controls.includes("mute") || this.config.controls.includes("volume")) {
        var o = _i("div", { class: "plyr__volume" });if (this.config.controls.includes("mute") && o.appendChild(gr.createButton.call(this, "mute")), this.config.controls.includes("volume")) {
          var s = { max: 1, step: .05, value: this.config.volume };o.appendChild(gr.createRange.call(this, "volume", Bi(s, { id: "plyr-volume-".concat(e.id) }))), this.elements.volume = o;
        }n.appendChild(o);
      }if (this.config.controls.includes("captions") && n.appendChild(gr.createButton.call(this, "captions")), this.config.controls.includes("settings") && !di.empty(this.config.settings)) {
        var a = _i("div", { class: "plyr__menu", hidden: "" });a.appendChild(gr.createButton.call(this, "settings", { "aria-haspopup": !0, "aria-controls": "plyr-settings-".concat(e.id), "aria-expanded": !1 }));var l = _i("div", { class: "plyr__menu__container", id: "plyr-settings-".concat(e.id), hidden: "" }),
            c = _i("div"),
            u = _i("div", { id: "plyr-settings-".concat(e.id, "-home") }),
            d = _i("div", { role: "menu" });u.appendChild(d), c.appendChild(u), this.elements.settings.panels.home = u, this.config.settings.forEach(function (n) {
          var i = _i("button", Bi(Si(t.config.selectors.buttons.settings), { type: "button", class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--forward"), role: "menuitem", "aria-haspopup": !0, hidden: "" }));gr.bindMenuItemShortcuts.call(t, i, n), pi(i, "click", function () {
            gr.showMenuPanel.call(t, n, !1);
          });var r = _i("span", null, lr(n, t.config)),
              o = _i("span", { class: t.config.classNames.menu.value });o.innerHTML = e[n], r.appendChild(o), i.appendChild(r), d.appendChild(i);var s = _i("div", { id: "plyr-settings-".concat(e.id, "-").concat(n), hidden: "" }),
              a = _i("button", { type: "button", class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--back") });a.appendChild(_i("span", { "aria-hidden": !0 }, lr(n, t.config))), a.appendChild(_i("span", { class: t.config.classNames.hidden }, lr("menuBack", t.config))), pi(s, "keydown", function (e) {
            37 === e.which && (e.preventDefault(), e.stopPropagation(), gr.showMenuPanel.call(t, "home", !0));
          }, !1), pi(a, "click", function () {
            gr.showMenuPanel.call(t, "home", !1);
          }), s.appendChild(a), s.appendChild(_i("div", { role: "menu" })), c.appendChild(s), t.elements.settings.buttons[n] = i, t.elements.settings.panels[n] = s;
        }), l.appendChild(c), a.appendChild(l), n.appendChild(a), this.elements.settings.popup = l, this.elements.settings.menu = a;
      }return this.config.controls.includes("pip") && Wi.pip && n.appendChild(gr.createButton.call(this, "pip")), this.config.controls.includes("airplay") && Wi.airplay && n.appendChild(gr.createButton.call(this, "airplay")), this.config.controls.includes("fullscreen") && n.appendChild(gr.createButton.call(this, "fullscreen")), this.config.controls.includes("play-large") && this.elements.container.appendChild(gr.createButton.call(this, "play-large")), this.elements.controls = n, this.isHTML5 && gr.setQualityMenu.call(this, Yi.getQualityOptions.call(this)), gr.setSpeedMenu.call(this), n;
    }, inject: function inject() {
      var e = this;if (this.config.loadSprite) {
        var t = gr.getIconUrl.call(this);t.cors && dr(t.url, "sprite-plyr");
      }this.id = Math.floor(1e4 * Math.random());var n = null;this.elements.controls = null;var i = { id: this.id, seektime: this.config.seekTime, title: this.config.title },
          r = !0;di.function(this.config.controls) && (this.config.controls = this.config.controls.call(this.props)), this.config.controls || (this.config.controls = []), di.element(this.config.controls) || di.string(this.config.controls) ? n = this.config.controls : (n = gr.create.call(this, { id: this.id, seektime: this.config.seekTime, speed: this.speed, quality: this.quality, captions: br.getLabel.call(this) }), r = !1);var o,
          s = function s(e) {
        var t = e;return Object.entries(i).forEach(function (e) {
          var n = nn(e, 2),
              i = n[0],
              r = n[1];t = rr(t, "{".concat(i, "}"), r);
        }), t;
      };if (r && (di.string(this.config.controls) ? n = s(n) : di.element(n) && (n.innerHTML = s(n.innerHTML))), di.string(this.config.selectors.controls.container) && (o = document.querySelector(this.config.selectors.controls.container)), di.element(o) || (o = this.elements.container), o[di.element(n) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", n), di.element(this.elements.controls) || gr.findElements.call(this), !di.empty(this.elements.buttons)) {
        var a = function a(t) {
          var n = e.config.classNames.controlPressed;Object.defineProperty(t, "pressed", { enumerable: !0, get: function get() {
              return Di(t, n);
            }, set: function set() {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];Ci(t, n, e);
            } });
        };Object.values(this.elements.buttons).filter(Boolean).forEach(function (e) {
          di.array(e) || di.nodeList(e) ? Array.from(e).filter(Boolean).forEach(a) : a(e);
        });
      }if (window.navigator.userAgent.includes("Edge") && Hi(o), this.config.tooltips.controls) {
        var l = this.config,
            c = l.classNames,
            u = l.selectors,
            d = "".concat(u.controls.wrapper, " ").concat(u.labels, " .").concat(c.hidden),
            h = Pi.call(this, d);Array.from(h).forEach(function (t) {
          Ci(t, e.config.classNames.hidden, !1), Ci(t, e.config.classNames.tooltip, !0);
        });
      }
    } };function vr(e) {
    var t = e;if (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) {
      var n = document.createElement("a");n.href = t, t = n.href;
    }try {
      return new URL(t);
    } catch (e) {
      return null;
    }
  }function yr(e) {
    var t = new URLSearchParams();return di.object(e) && Object.entries(e).forEach(function (e) {
      var n = nn(e, 2),
          i = n[0],
          r = n[1];t.set(i, r);
    }), t;
  }var br = { setup: function setup() {
      if (this.supported.ui) if (!this.isVideo || this.isYouTube || this.isHTML5 && !Wi.textTracks) di.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && gr.setCaptionsMenu.call(this);else {
        var e, t;if (di.element(this.elements.captions) || (this.elements.captions = _i("div", Si(this.config.selectors.captions)), e = this.elements.captions, t = this.elements.wrapper, di.element(e) && di.element(t) && t.parentNode.insertBefore(e, t.nextSibling)), Ri.isIE && window.URL) {
          var n = this.media.querySelectorAll("track");Array.from(n).forEach(function (e) {
            var t = e.getAttribute("src"),
                n = vr(t);null !== n && n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && ur(t, "blob").then(function (t) {
              e.setAttribute("src", window.URL.createObjectURL(t));
            }).catch(function () {
              Ei(e);
            });
          });
        }var i = zi((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(function (e) {
          return e.split("-")[0];
        })),
            r = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();if ("auto" === r) r = nn(i, 1)[0];var o = this.storage.get("captions");if (di.boolean(o) || (o = this.config.captions.active), Object.assign(this.captions, { toggled: !1, active: o, language: r, languages: i }), this.isHTML5) {
          var s = this.config.captions.update ? "addtrack removetrack" : "removetrack";pi.call(this, this.media.textTracks, s, br.update.bind(this));
        }setTimeout(br.update.bind(this), 0);
      }
    }, update: function update() {
      var e = this,
          t = br.getTracks.call(this, !0),
          n = this.captions,
          i = n.active,
          r = n.language,
          o = n.meta,
          s = n.currentTrackNode,
          a = Boolean(t.find(function (e) {
        return e.language === r;
      }));this.isHTML5 && this.isVideo && t.filter(function (e) {
        return !o.get(e);
      }).forEach(function (t) {
        e.debug.log("Track added", t), o.set(t, { default: "showing" === t.mode }), t.mode = "hidden", pi.call(e, t, "cuechange", function () {
          return br.updateCues.call(e);
        });
      }), (a && this.language !== r || !t.includes(s)) && (br.setLanguage.call(this, r), br.toggle.call(this, i && a)), Ci(this.elements.container, this.config.classNames.captions.enabled, !di.empty(t)), (this.config.controls || []).includes("settings") && this.config.settings.includes("captions") && gr.setCaptionsMenu.call(this);
    }, toggle: function toggle(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];if (this.supported.ui) {
        var n = this.captions.toggled,
            i = this.config.classNames.captions.active,
            r = di.nullOrUndefined(e) ? !n : e;if (r !== n) {
          if (t || (this.captions.active = r, this.storage.set({ captions: r })), !this.language && r && !t) {
            var o = br.getTracks.call(this),
                s = br.findTrack.call(this, [this.captions.language].concat(rn(this.captions.languages)), !0);return this.captions.language = s.language, void br.set.call(this, o.indexOf(s));
          }this.elements.buttons.captions && (this.elements.buttons.captions.pressed = r), Ci(this.elements.container, i, r), this.captions.toggled = r, gr.updateSetting.call(this, "captions"), vi.call(this, this.media, r ? "captionsenabled" : "captionsdisabled");
        }
      }
    }, set: function set(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          n = br.getTracks.call(this);if (-1 !== e) {
        if (di.number(e)) {
          if (e in n) {
            if (this.captions.currentTrack !== e) {
              this.captions.currentTrack = e;var i = n[e],
                  r = (i || {}).language;this.captions.currentTrackNode = i, gr.updateSetting.call(this, "captions"), t || (this.captions.language = r, this.storage.set({ language: r })), this.isVimeo && this.embed.enableTextTrack(r), vi.call(this, this.media, "languagechange");
            }br.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && br.updateCues.call(this);
          } else this.debug.warn("Track not found", e);
        } else this.debug.warn("Invalid caption argument", e);
      } else br.toggle.call(this, !1, t);
    }, setLanguage: function setLanguage(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];if (di.string(e)) {
        var n = e.toLowerCase();this.captions.language = n;var i = br.getTracks.call(this),
            r = br.findTrack.call(this, [n]);br.set.call(this, i.indexOf(r), t);
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
          r = br.getTracks.call(this),
          o = function o(e) {
        return Number((n.captions.meta.get(e) || {}).default);
      },
          s = Array.from(r).sort(function (e, t) {
        return o(t) - o(e);
      });return e.every(function (e) {
        return !(t = s.find(function (t) {
          return t.language === e;
        }));
      }), t || (i ? s[0] : void 0);
    }, getCurrentTrack: function getCurrentTrack() {
      return br.getTracks.call(this)[this.currentTrack];
    }, getLabel: function getLabel(e) {
      var t = e;return !di.track(t) && Wi.textTracks && this.captions.toggled && (t = br.getCurrentTrack.call(this)), di.track(t) ? di.empty(t.label) ? di.empty(t.language) ? lr("enabled", this.config) : e.language.toUpperCase() : t.label : lr("disabled", this.config);
    }, updateCues: function updateCues(e) {
      if (this.supported.ui) if (di.element(this.elements.captions)) {
        if (di.nullOrUndefined(e) || Array.isArray(e)) {
          var t = e;if (!t) {
            var n = br.getCurrentTrack.call(this);t = Array.from((n || {}).activeCues || []).map(function (e) {
              return e.getCueAsHTML();
            }).map(ar);
          }var i = t.map(function (e) {
            return e.trim();
          }).join("\n");if (i !== this.elements.captions.innerHTML) {
            Ti(this.elements.captions);var r = _i("span", Si(this.config.selectors.caption));r.innerHTML = i, this.elements.captions.appendChild(r), vi.call(this, this.media, "cuechange");
          }
        } else this.debug.warn("updateCues: Invalid input", e);
      } else this.debug.warn("No captions element to render to");
    } },
      _r = { enabled: !0, title: "", debug: !1, autoplay: !1, autopause: !0, playsinline: !0, seekTime: 10, volume: 1, muted: !1, duration: null, displayDuration: !0, invertTime: !0, toggleInvert: !0, ratio: "16:9", clickToPlay: !0, hideControls: !0, resetOnEnd: !1, disableContextMenu: !0, loadSprite: !0, iconPrefix: "plyr", iconUrl: "https://cdn.plyr.io/3.3.12/plyr.svg", blankVideo: "https://cdn.plyr.io/static/blank.mp4", quality: { default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240] }, loop: { active: !1 }, speed: { selected: 1, options: [.5, .75, 1, 1.25, 1.5, 1.75, 2] }, keyboard: { focused: !0, global: !1 }, tooltips: { controls: !1, seek: !0 }, captions: { active: !1, language: "auto", update: !1 }, fullscreen: { enabled: !0, fallback: !0, iosNative: !1 }, storage: { enabled: !0, key: "plyr" }, controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"], settings: ["captions", "quality", "speed"], i18n: { restart: "Restart", rewind: "Rewind {seektime}s", play: "Play", pause: "Pause", fastForward: "Forward {seektime}s", seek: "Seek", seekLabel: "{currentTime} of {duration}", played: "Played", buffered: "Buffered", currentTime: "Current time", duration: "Duration", volume: "Volume", mute: "Mute", unmute: "Unmute", enableCaptions: "Enable captions", disableCaptions: "Disable captions", enterFullscreen: "Enter fullscreen", exitFullscreen: "Exit fullscreen", frameTitle: "Player for {title}", captions: "Captions", settings: "Settings", menuBack: "Go back to previous menu", speed: "Speed", normal: "Normal", quality: "Quality", loop: "Loop", start: "Start", end: "End", all: "All", reset: "Reset", disabled: "Disabled", enabled: "Enabled", advertisement: "Ad", qualityBadge: { 2160: "4K", 1440: "HD", 1080: "HD", 720: "HD", 576: "SD", 480: "SD" } }, urls: { vimeo: { sdk: "https://player.vimeo.com/api/player.js", iframe: "https://player.vimeo.com/video/{0}?{1}", api: "https://vimeo.com/api/v2/video/{0}.json" }, youtube: { sdk: "https://www.youtube.com/iframe_api", api: "https://www.googleapis.com/youtube/v3/videos?id={0}&key={1}&fields=items(snippet(title))&part=snippet" }, googleIMA: { sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js" } }, listeners: { seek: null, play: null, pause: null, restart: null, rewind: null, fastForward: null, mute: null, volume: null, captions: null, fullscreen: null, pip: null, airplay: null, speed: null, quality: null, loop: null, language: null }, events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"], selectors: { editable: "input, textarea, select, [contenteditable]", container: ".plyr", controls: { container: null, wrapper: ".plyr__controls" }, labels: "[data-plyr]", buttons: { play: '[data-plyr="play"]', pause: '[data-plyr="pause"]', restart: '[data-plyr="restart"]', rewind: '[data-plyr="rewind"]', fastForward: '[data-plyr="fast-forward"]', mute: '[data-plyr="mute"]', captions: '[data-plyr="captions"]', fullscreen: '[data-plyr="fullscreen"]', pip: '[data-plyr="pip"]', airplay: '[data-plyr="airplay"]', settings: '[data-plyr="settings"]', loop: '[data-plyr="loop"]' }, inputs: { seek: '[data-plyr="seek"]', volume: '[data-plyr="volume"]', speed: '[data-plyr="speed"]', language: '[data-plyr="language"]', quality: '[data-plyr="quality"]' }, display: { currentTime: ".plyr__time--current", duration: ".plyr__time--duration", buffer: ".plyr__progress__buffer", loop: ".plyr__progress__loop", volume: ".plyr__volume--display" }, progress: ".plyr__progress", captions: ".plyr__captions", caption: ".plyr__caption", menu: { quality: ".js-plyr__menu__list--quality" } }, classNames: { type: "plyr--{0}", provider: "plyr--{0}", video: "plyr__video-wrapper", embed: "plyr__video-embed", embedContainer: "plyr__video-embed__container", poster: "plyr__poster", posterEnabled: "plyr__poster-enabled", ads: "plyr__ads", control: "plyr__control", controlPressed: "plyr__control--pressed", playing: "plyr--playing", paused: "plyr--paused", stopped: "plyr--stopped", loading: "plyr--loading", hover: "plyr--hover", tooltip: "plyr__tooltip", cues: "plyr__cues", hidden: "plyr__sr-only", hideControls: "plyr--hide-controls", isIos: "plyr--is-ios", isTouch: "plyr--is-touch", uiSupported: "plyr--full-ui", noTransition: "plyr--no-transition", display: { time: "plyr__time" }, menu: { value: "plyr__menu__value", badge: "plyr__badge", open: "plyr--menu-open" }, captions: { enabled: "plyr--captions-enabled", active: "plyr--captions-active" }, fullscreen: { enabled: "plyr--fullscreen-enabled", fallback: "plyr--fullscreen-fallback" }, pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" }, airplay: { supported: "plyr--airplay-supported", active: "plyr--airplay-active" }, tabFocus: "plyr__tab-focus" }, attributes: { embed: { provider: "data-plyr-provider", id: "data-plyr-embed-id" } }, keys: { google: null }, ads: { enabled: !1, publisherId: "" } },
      wr = { html5: "html5", youtube: "youtube", vimeo: "vimeo" },
      Er = { audio: "audio", video: "video" };var Tr = function Tr() {},
      kr = function () {
    function e() {
      var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];Zt(this, e), this.enabled = window.console && t, this.enabled && this.log("Debugging enabled");
    }return en(e, [{ key: "log", get: function get() {
        return this.enabled ? Function.prototype.bind.call(console.log, console) : Tr;
      } }, { key: "warn", get: function get() {
        return this.enabled ? Function.prototype.bind.call(console.warn, console) : Tr;
      } }, { key: "error", get: function get() {
        return this.enabled ? Function.prototype.bind.call(console.error, console) : Tr;
      } }]), e;
  }();function Sr() {
    if (this.enabled) {
      var e = this.player.elements.buttons.fullscreen;di.element(e) && (e.pressed = this.active), vi.call(this.player, this.target, this.active ? "enterfullscreen" : "exitfullscreen", !0), Ri.isIos || function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];if (di.element(e)) {
          var n = Pi.call(this, "button:not(:disabled), input:not(:disabled), [tabindex]"),
              i = n[0],
              r = n[n.length - 1];fi.call(this, this.elements.container, "keydown", function (e) {
            if ("Tab" === e.key && 9 === e.keyCode) {
              var t = document.activeElement;t !== r || e.shiftKey ? t === i && e.shiftKey && (r.focus(), e.preventDefault()) : (i.focus(), e.preventDefault());
            }
          }, t, !1);
        }
      }.call(this.player, this.target, this.active);
    }
  }function xr() {
    var e = this,
        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];if (t ? this.scrollPosition = { x: window.scrollX || 0, y: window.scrollY || 0 } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = t ? "hidden" : "", Ci(this.target, this.player.config.classNames.fullscreen.fallback, t), Ri.isIos) {
      var n = document.head.querySelector('meta[name="viewport"]'),
          i = "viewport-fit=cover";n || (n = document.createElement("meta")).setAttribute("name", "viewport");var r = di.string(n.content) && n.content.includes(i);t ? (this.cleanupViewport = !r, r || (n.content += ",".concat(i))) : this.cleanupViewport && (n.content = n.content.split(",").filter(function (e) {
        return e.trim() !== i;
      }).join(",")), setTimeout(function () {
        return Hi(e.target);
      }, 100);
    }Sr.call(this);
  }var Cr = function () {
    function e(t) {
      var n = this;Zt(this, e), this.player = t, this.prefix = e.prefix, this.property = e.property, this.scrollPosition = { x: 0, y: 0 }, pi.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), function () {
        Sr.call(n);
      }), pi.call(this.player, this.player.elements.container, "dblclick", function (e) {
        di.element(n.player.elements.controls) && n.player.elements.controls.contains(e.target) || n.toggle();
      }), this.update();
    }return en(e, [{ key: "update", value: function value() {
        this.enabled ? this.player.debug.log("".concat(e.native ? "Native" : "Fallback", " fullscreen enabled")) : this.player.debug.log("Fullscreen not supported and fallback disabled"), Ci(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled);
      } }, { key: "enter", value: function value() {
        this.enabled && (Ri.isIos && this.player.config.fullscreen.iosNative ? this.target.webkitEnterFullscreen() : e.native ? this.prefix ? di.empty(this.prefix) || this.target["".concat(this.prefix, "Request").concat(this.property)]() : this.target.requestFullscreen() : xr.call(this, !0));
      } }, { key: "exit", value: function value() {
        if (this.enabled) if (Ri.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), this.player.play();else if (e.native) {
          if (this.prefix) {
            if (!di.empty(this.prefix)) {
              var t = "moz" === this.prefix ? "Cancel" : "Exit";document["".concat(this.prefix).concat(t).concat(this.property)]();
            }
          } else (document.cancelFullScreen || document.exitFullscreen).call(document);
        } else xr.call(this, !1);
      } }, { key: "toggle", value: function value() {
        this.active ? this.exit() : this.enter();
      } }, { key: "enabled", get: function get() {
        return (e.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo;
      } }, { key: "active", get: function get() {
        return !!this.enabled && (e.native ? (this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement) === this.target : Di(this.target, this.player.config.classNames.fullscreen.fallback));
      } }, { key: "target", get: function get() {
        return Ri.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.container;
      } }], [{ key: "native", get: function get() {
        return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
      } }, { key: "prefix", get: function get() {
        if (di.function(document.exitFullscreen)) return "";var e = "";return ["webkit", "moz", "ms"].some(function (t) {
          return !(!di.function(document["".concat(t, "ExitFullscreen")]) && !di.function(document["".concat(t, "CancelFullScreen")])) && (e = t, !0);
        }), e;
      } }, { key: "property", get: function get() {
        return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
      } }]), e;
  }(),
      Dr = Math.sign || function (e) {
    return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1;
  };function Ar(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;return new Promise(function (n, i) {
      var r = new Image(),
          o = function o() {
        delete r.onload, delete r.onerror, (r.naturalWidth >= t ? n : i)(r);
      };Object.assign(r, { onload: o, onerror: o, src: e });
    });
  }x(x.S, "Math", { sign: Dr });var Pr = { addStyleHook: function addStyleHook() {
      Ci(this.elements.container, this.config.selectors.container.replace(".", ""), !0), Ci(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
    }, toggleNativeControls: function toggleNativeControls() {
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
    }, build: function build() {
      var e = this;if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void Pr.toggleNativeControls.call(this, !0);di.element(this.elements.controls) || (gr.inject.call(this), this.listeners.controls()), Pr.toggleNativeControls.call(this), this.isHTML5 && br.setup.call(this), this.volume = null, this.muted = null, this.speed = null, this.loop = null, this.quality = null, gr.updateVolume.call(this), gr.timeUpdate.call(this), Pr.checkPlaying.call(this), Ci(this.elements.container, this.config.classNames.pip.supported, Wi.pip && this.isHTML5 && this.isVideo), Ci(this.elements.container, this.config.classNames.airplay.supported, Wi.airplay && this.isHTML5), Ci(this.elements.container, this.config.classNames.isIos, Ri.isIos), Ci(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(function () {
        vi.call(e, e.media, "ready");
      }, 0), Pr.setTitle.call(this), this.poster && Pr.setPoster.call(this, this.poster, !1).catch(function () {}), this.config.duration && gr.durationUpdate.call(this);
    }, setTitle: function setTitle() {
      var e = lr("play", this.config);if (di.string(this.config.title) && !di.empty(this.config.title) && (e += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach(function (t) {
        t.setAttribute("aria-label", e);
      }), this.isEmbed) {
        var t = Mi.call(this, "iframe");if (!di.element(t)) return;var n = di.empty(this.config.title) ? "video" : this.config.title,
            i = lr("frameTitle", this.config);t.setAttribute("title", i.replace("{title}", n));
      }
    }, togglePoster: function togglePoster(e) {
      Ci(this.elements.container, this.config.classNames.posterEnabled, e);
    }, setPoster: function setPoster(e) {
      var t = this;return arguments.length > 1 && void 0 !== arguments[1] && !arguments[1] || !this.poster ? (this.media.setAttribute("poster", e), function () {
        var e = this;return new Promise(function (t) {
          return e.ready ? setTimeout(t, 0) : pi.call(e, e.elements.container, "ready", t);
        }).then(function () {});
      }.call(this).then(function () {
        return Ar(e);
      }).catch(function (n) {
        throw e === t.poster && Pr.togglePoster.call(t, !1), n;
      }).then(function () {
        if (e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster");
      }).then(function () {
        return Object.assign(t.elements.poster.style, { backgroundImage: "url('".concat(e, "')"), backgroundSize: "" }), Pr.togglePoster.call(t, !0), e;
      })) : Promise.reject(new Error("Poster already set"));
    }, checkPlaying: function checkPlaying(e) {
      var t = this;Ci(this.elements.container, this.config.classNames.playing, this.playing), Ci(this.elements.container, this.config.classNames.paused, this.paused), Ci(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(function (e) {
        e.pressed = t.playing;
      }), di.event(e) && "timeupdate" === e.type || Pr.toggleControls.call(this);
    }, checkLoading: function checkLoading(e) {
      var t = this;this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function () {
        Ci(t.elements.container, t.config.classNames.loading, t.loading), Pr.toggleControls.call(t);
      }, this.loading ? 250 : 0);
    }, toggleControls: function toggleControls(e) {
      var t = this.elements.controls;t && this.config.hideControls && this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover));
    } },
      Mr = function () {
    function e(t) {
      Zt(this, e), this.player = t, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this);
    }return en(e, [{ key: "handleKey", value: function value(e) {
        var t = this.player,
            n = t.elements,
            i = e.keyCode ? e.keyCode : e.which,
            r = "keydown" === e.type,
            o = r && i === this.lastKey;if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && di.number(i)) {
          if (r) {
            var s = document.activeElement;if (di.element(s)) {
              var a = t.config.selectors.editable;if (s !== n.inputs.seek && Ai(s, a)) return;if (32 === e.which && Ai(s, 'button, [role^="menuitem"]')) return;
            }switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(i) && (e.preventDefault(), e.stopPropagation()), i) {case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
                o || (t.currentTime = t.duration / 10 * (i - 48));break;case 32:case 75:
                o || t.togglePlay();break;case 38:
                t.increaseVolume(.1);break;case 40:
                t.decreaseVolume(.1);break;case 77:
                o || (t.muted = !t.muted);break;case 39:
                t.forward();break;case 37:
                t.rewind();break;case 70:
                t.fullscreen.toggle();break;case 67:
                o || t.toggleCaptions();break;case 76:
                t.loop = !t.loop;}!t.fullscreen.enabled && t.fullscreen.active && 27 === i && t.fullscreen.toggle(), this.lastKey = i;
          } else this.lastKey = null;
        }
      } }, { key: "toggleMenu", value: function value(e) {
        gr.toggleMenu.call(this.player, e);
      } }, { key: "firstTouch", value: function value() {
        var e = this.player,
            t = e.elements;e.touch = !0, Ci(t.container, e.config.classNames.isTouch, !0);
      } }, { key: "setTabFocus", value: function value(e) {
        var t = this.player,
            n = t.elements;if (clearTimeout(this.focusTimer), "keydown" !== e.type || 9 === e.which) {
          "keydown" === e.type && (this.lastKeyDown = e.timeStamp);var i,
              r = e.timeStamp - this.lastKeyDown <= 20;if ("focus" !== e.type || r) i = t.config.classNames.tabFocus, Ci(Pi.call(t, ".".concat(i)), i, !1), this.focusTimer = setTimeout(function () {
            var e = document.activeElement;n.container.contains(e) && Ci(document.activeElement, t.config.classNames.tabFocus, !0);
          }, 10);
        }
      } }, { key: "global", value: function value() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = this.player;t.config.keyboard.global && fi.call(t, window, "keydown keyup", this.handleKey, e, !1), fi.call(t, document.body, "click", this.toggleMenu, e), gi.call(t, document.body, "touchstart", this.firstTouch), fi.call(t, document.body, "keydown focus blur", this.setTabFocus, e, !1, !0);
      } }, { key: "container", value: function value() {
        var e = this.player,
            t = e.elements;!e.config.keyboard.global && e.config.keyboard.focused && pi.call(e, t.container, "keydown keyup", this.handleKey, !1), pi.call(e, t.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", function (n) {
          var i = t.controls;i && "enterfullscreen" === n.type && (i.pressed = !1, i.hover = !1);var r = 0;["touchstart", "touchmove", "mousemove"].includes(n.type) && (Pr.toggleControls.call(e, !0), r = e.touch ? 3e3 : 2e3), clearTimeout(e.timers.controls), e.timers.controls = setTimeout(function () {
            return Pr.toggleControls.call(e, !1);
          }, r);
        });
      } }, { key: "media", value: function value() {
        var e = this.player,
            t = e.elements;if (pi.call(e, e.media, "timeupdate seeking seeked", function (t) {
          return gr.timeUpdate.call(e, t);
        }), pi.call(e, e.media, "durationchange loadeddata loadedmetadata", function (t) {
          return gr.durationUpdate.call(e, t);
        }), pi.call(e, e.media, "canplay", function () {
          xi(t.volume, !e.hasAudio), xi(t.buttons.mute, !e.hasAudio);
        }), pi.call(e, e.media, "ended", function () {
          e.isHTML5 && e.isVideo && e.config.resetOnEnd && e.restart();
        }), pi.call(e, e.media, "progress playing seeking seeked", function (t) {
          return gr.updateProgress.call(e, t);
        }), pi.call(e, e.media, "volumechange", function (t) {
          return gr.updateVolume.call(e, t);
        }), pi.call(e, e.media, "playing play pause ended emptied timeupdate", function (t) {
          return Pr.checkPlaying.call(e, t);
        }), pi.call(e, e.media, "waiting canplay seeked playing", function (t) {
          return Pr.checkLoading.call(e, t);
        }), pi.call(e, e.media, "playing", function () {
          e.ads && e.ads.enabled && !e.ads.initialized && e.ads.managerPromise.then(function () {
            return e.ads.play();
          }).catch(function () {
            return e.play();
          });
        }), e.supported.ui && e.config.clickToPlay && !e.isAudio) {
          var n = Mi.call(e, ".".concat(e.config.classNames.video));if (!di.element(n)) return;pi.call(e, t.container, "click", function (i) {
            ([t.container, n].includes(i.target) || n.contains(i.target)) && (e.touch && e.config.hideControls || (e.ended ? (e.restart(), e.play()) : e.togglePlay()));
          });
        }e.supported.ui && e.config.disableContextMenu && pi.call(e, t.wrapper, "contextmenu", function (e) {
          e.preventDefault();
        }, !1), pi.call(e, e.media, "volumechange", function () {
          e.storage.set({ volume: e.volume, muted: e.muted });
        }), pi.call(e, e.media, "ratechange", function () {
          gr.updateSetting.call(e, "speed"), e.storage.set({ speed: e.speed });
        }), pi.call(e, e.media, "qualitychange", function (t) {
          gr.updateSetting.call(e, "quality", null, t.detail.quality);
        });var i = e.config.events.concat(["keyup", "keydown"]).join(" ");pi.call(e, e.media, i, function (n) {
          var i = n.detail,
              r = void 0 === i ? {} : i;"error" === n.type && (r = e.media.error), vi.call(e, t.container, n.type, !0, r);
        });
      } }, { key: "proxy", value: function value(e, t, n) {
        var i = this.player,
            r = i.config.listeners[n],
            o = !0;di.function(r) && (o = r.call(i, e)), o && di.function(t) && t.call(i, e);
      } }, { key: "bind", value: function value(e, t, n, i) {
        var r = this,
            o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
            s = this.player,
            a = s.config.listeners[i],
            l = di.function(a);pi.call(s, e, t, function (e) {
          return r.proxy(e, n, i);
        }, o && !l);
      } }, { key: "controls", value: function value() {
        var e = this,
            t = this.player,
            n = t.elements,
            i = Ri.isIE ? "change" : "input";if (n.buttons.play && Array.from(n.buttons.play).forEach(function (n) {
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
          e.stopPropagation(), gr.toggleMenu.call(t, e);
        }), this.bind(n.buttons.settings, "keyup", function (e) {
          var n = e.which;[13, 32].includes(n) && (13 !== n ? (e.preventDefault(), e.stopPropagation(), gr.toggleMenu.call(t, e)) : gr.focusFirstMenuItem.call(t, null, !0));
        }, null, !1), this.bind(n.settings.menu, "keydown", function (e) {
          27 === e.which && gr.toggleMenu.call(t, e);
        }), this.bind(n.inputs.seek, "mousedown mousemove", function (e) {
          var t = n.progress.getBoundingClientRect(),
              i = 100 / t.width * (e.pageX - t.left);e.currentTarget.setAttribute("seek-value", i);
        }), this.bind(n.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", function (e) {
          var n = e.currentTarget,
              i = e.keyCode ? e.keyCode : e.which;if (!di.keyboardEvent(e) || 39 === i || 37 === i) {
            var r = n.hasAttribute("play-on-seeked"),
                o = ["mouseup", "touchend", "keyup"].includes(e.type);r && o ? (n.removeAttribute("play-on-seeked"), t.play()) : !o && t.playing && (n.setAttribute("play-on-seeked", ""), t.pause());
          }
        }), Ri.isIos) {
          var r = Pi.call(t, 'input[type="range"]');Array.from(r).forEach(function (t) {
            return e.bind(t, i, function (e) {
              return Hi(e.target);
            });
          });
        }this.bind(n.inputs.seek, i, function (e) {
          var n = e.currentTarget,
              i = n.getAttribute("seek-value");di.empty(i) && (i = n.value), n.removeAttribute("seek-value"), t.currentTime = i / n.max * t.duration;
        }, "seek"), this.bind(n.progress, "mouseenter mouseleave mousemove", function (e) {
          return gr.updateSeekTooltip.call(t, e);
        }), Ri.isWebkit && Array.from(Pi.call(t, 'input[type="range"]')).forEach(function (n) {
          e.bind(n, "input", function (e) {
            return gr.updateRangeFill.call(t, e.target);
          });
        }), t.config.toggleInvert && !di.element(n.display.duration) && this.bind(n.display.currentTime, "click", function () {
          0 !== t.currentTime && (t.config.invertTime = !t.config.invertTime, gr.timeUpdate.call(t));
        }), this.bind(n.inputs.volume, i, function (e) {
          t.volume = e.target.value;
        }, "volume"), this.bind(n.controls, "mouseenter mouseleave", function (e) {
          n.controls.hover = !t.touch && "mouseenter" === e.type;
        }), this.bind(n.controls, "mousedown mouseup touchstart touchend touchcancel", function (e) {
          n.controls.pressed = ["mousedown", "touchstart"].includes(e.type);
        }), this.bind(n.controls, "focusin focusout", function (n) {
          var i = t.config,
              r = t.elements,
              o = t.timers,
              s = "focusin" === n.type;if (Ci(r.controls, i.classNames.noTransition, s), Pr.toggleControls.call(t, s), s) {
            setTimeout(function () {
              Ci(r.controls, i.classNames.noTransition, !1);
            }, 0);var a = e.touch ? 3e3 : 4e3;clearTimeout(o.controls), o.controls = setTimeout(function () {
              return Pr.toggleControls.call(t, !1);
            }, a);
          }
        }), this.bind(n.inputs.volume, "wheel", function (e) {
          var n = e.webkitDirectionInvertedFromDevice,
              i = nn([e.deltaX, -e.deltaY].map(function (e) {
            return n ? -e : e;
          }), 2),
              r = i[0],
              o = i[1],
              s = Math.sign(Math.abs(r) > Math.abs(o) ? r : o);t.increaseVolume(s / 50);var a = t.media.volume;(1 === s && a < 1 || -1 === s && a > 0) && e.preventDefault();
        }, "volume", !1);
      } }]), e;
  }(),
      Ir = g.f,
      Or = Function.prototype,
      Lr = /^\s*function ([^ (]*)/;"name" in Or || c && Ir(Or, "name", { configurable: !0, get: function get() {
      try {
        return ("" + this).match(Lr)[1];
      } catch (e) {
        return "";
      }
    } }), st("match", 1, function (e, t, n) {
    return [function (n) {
      var i = e(this),
          r = void 0 == n ? void 0 : n[t];return void 0 !== r ? r.call(n, i) : new RegExp(n)[t](String(i));
    }, n];
  });var Nr = t(function (e, t) {
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
              l = [];for (i = function i(e, n, _i4) {
            if ("e" == n && l.push(e), "b" == n) {
              if (!_i4) return;l.push(e);
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
  });function jr(e) {
    return new Promise(function (t, n) {
      Nr(e, { success: t, error: n });
    });
  }function Hr(e) {
    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, vi.call(this, this.media, e ? "play" : "pause"));
  }var Fr = { setup: function setup() {
      var e = this;Ci(this.elements.wrapper, this.config.classNames.embed, !0), Fr.setAspectRatio.call(this), di.object(window.Vimeo) ? Fr.ready.call(this) : jr(this.config.urls.vimeo.sdk).then(function () {
        Fr.ready.call(e);
      }).catch(function (t) {
        e.debug.warn("Vimeo API failed to load", t);
      });
    }, setAspectRatio: function setAspectRatio(e) {
      var t = nn((di.string(e) ? e : this.config.ratio).split(":"), 2),
          n = 100 / t[0] * t[1];if (this.elements.wrapper.style.paddingBottom = "".concat(n, "%"), this.supported.ui) {
        var i = (240 - n) / 4.8;this.media.style.transform = "translateY(-".concat(i, "%)");
      }
    }, ready: function ready() {
      var e = this,
          t = this,
          n = yr({ loop: t.config.loop.active, autoplay: t.autoplay, byline: !1, portrait: !1, title: !1, speed: !0, transparent: 0, gesture: "media", playsinline: !this.config.fullscreen.iosNative }),
          i = t.media.getAttribute("src");di.empty(i) && (i = t.media.getAttribute(t.config.attributes.embed.id));var r,
          o = (r = i, di.empty(r) ? null : di.number(Number(r)) ? r : r.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : r),
          s = _i("iframe"),
          a = ir(t.config.urls.vimeo.iframe, o, n);s.setAttribute("src", a), s.setAttribute("allowfullscreen", ""), s.setAttribute("allowtransparency", ""), s.setAttribute("allow", "autoplay");var l = _i("div", { poster: t.poster, class: t.config.classNames.embedContainer });l.appendChild(s), t.media = ki(l, t.media), ur(ir(t.config.urls.vimeo.api, o), "json").then(function (e) {
        if (!di.empty(e)) {
          var n = new URL(e[0].thumbnail_large);n.pathname = "".concat(n.pathname.split("_")[0], ".jpg"), Pr.setPoster.call(t, n.href).catch(function () {});
        }
      }), t.embed = new window.Vimeo.Player(s, { autopause: t.config.autopause, muted: t.muted }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function () {
        return Hr.call(t, !0), t.embed.play();
      }, t.media.pause = function () {
        return Hr.call(t, !1), t.embed.pause();
      }, t.media.stop = function () {
        t.pause(), t.currentTime = 0;
      };var c = t.media.currentTime;Object.defineProperty(t.media, "currentTime", { get: function get() {
          return c;
        }, set: function set(e) {
          var n = t.embed,
              i = t.media,
              r = t.paused,
              o = t.volume,
              s = r && !n.hasPlayed;i.seeking = !0, vi.call(t, i, "seeking"), Promise.resolve(s && n.setVolume(0)).then(function () {
            return n.setCurrentTime(e);
          }).then(function () {
            return s && n.pause();
          }).then(function () {
            return s && n.setVolume(o);
          }).catch(function () {});
        } });var u = t.config.speed.selected;Object.defineProperty(t.media, "playbackRate", { get: function get() {
          return u;
        }, set: function set(e) {
          t.embed.setPlaybackRate(e).then(function () {
            u = e, vi.call(t, t.media, "ratechange");
          }).catch(function (e) {
            "Error" === e.name && gr.setSpeedMenu.call(t, []);
          });
        } });var d = t.config.volume;Object.defineProperty(t.media, "volume", { get: function get() {
          return d;
        }, set: function set(e) {
          t.embed.setVolume(e).then(function () {
            d = e, vi.call(t, t.media, "volumechange");
          });
        } });var h = t.config.muted;Object.defineProperty(t.media, "muted", { get: function get() {
          return h;
        }, set: function set(e) {
          var n = !!di.boolean(e) && e;t.embed.setVolume(n ? 0 : t.config.volume).then(function () {
            h = n, vi.call(t, t.media, "volumechange");
          });
        } });var f,
          p = t.config.loop;Object.defineProperty(t.media, "loop", { get: function get() {
          return p;
        }, set: function set(e) {
          var n = di.boolean(e) ? e : t.config.loop.active;t.embed.setLoop(n).then(function () {
            p = n;
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
        }(t[0], t[1]);Fr.setAspectRatio.call(e, n);
      }), t.embed.setAutopause(t.config.autopause).then(function (e) {
        t.config.autopause = e;
      }), t.embed.getVideoTitle().then(function (n) {
        t.config.title = n, Pr.setTitle.call(e);
      }), t.embed.getCurrentTime().then(function (e) {
        c = e, vi.call(t, t.media, "timeupdate");
      }), t.embed.getDuration().then(function (e) {
        t.media.duration = e, vi.call(t, t.media, "durationchange");
      }), t.embed.getTextTracks().then(function (e) {
        t.media.textTracks = e, br.setup.call(t);
      }), t.embed.on("cuechange", function (e) {
        var n = e.cues,
            i = (void 0 === n ? [] : n).map(function (e) {
          return t = e.text, n = document.createDocumentFragment(), i = document.createElement("div"), n.appendChild(i), i.innerHTML = t, n.firstChild.innerText;var t, n, i;
        });br.updateCues.call(t, i);
      }), t.embed.on("loaded", function () {
        (t.embed.getPaused().then(function (e) {
          Hr.call(t, !e), e || vi.call(t, t.media, "playing");
        }), di.element(t.embed.element) && t.supported.ui) && t.embed.element.setAttribute("tabindex", -1);
      }), t.embed.on("play", function () {
        Hr.call(t, !0), vi.call(t, t.media, "playing");
      }), t.embed.on("pause", function () {
        Hr.call(t, !1);
      }), t.embed.on("timeupdate", function (e) {
        t.media.seeking = !1, c = e.seconds, vi.call(t, t.media, "timeupdate");
      }), t.embed.on("progress", function (e) {
        t.media.buffered = e.percent, vi.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && vi.call(t, t.media, "canplaythrough"), t.embed.getDuration().then(function (e) {
          e !== t.media.duration && (t.media.duration = e, vi.call(t, t.media, "durationchange"));
        });
      }), t.embed.on("seeked", function () {
        t.media.seeking = !1, vi.call(t, t.media, "seeked");
      }), t.embed.on("ended", function () {
        t.media.paused = !0, vi.call(t, t.media, "ended");
      }), t.embed.on("error", function (e) {
        t.media.error = e, vi.call(t, t.media, "error");
      }), setTimeout(function () {
        return Pr.build.call(t);
      }, 0);
    } };function Rr(e) {
    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, vi.call(this, this.media, e ? "play" : "pause"));
  }var qr,
      Wr = { setup: function setup() {
      var e = this;Ci(this.elements.wrapper, this.config.classNames.embed, !0), Wr.setAspectRatio.call(this), di.object(window.YT) && di.function(window.YT.Player) ? Wr.ready.call(this) : (jr(this.config.urls.youtube.sdk).catch(function (t) {
        e.debug.warn("YouTube API failed to load", t);
      }), window.onYouTubeReadyCallbacks = window.onYouTubeReadyCallbacks || [], window.onYouTubeReadyCallbacks.push(function () {
        Wr.ready.call(e);
      }), window.onYouTubeIframeAPIReady = function () {
        window.onYouTubeReadyCallbacks.forEach(function (e) {
          e();
        });
      });
    }, getTitle: function getTitle(e) {
      var t = this;if (di.function(this.embed.getVideoData)) {
        var n = this.embed.getVideoData().title;if (di.empty(n)) return this.config.title = n, void Pr.setTitle.call(this);
      }var i = this.config.keys.google;di.string(i) && !di.empty(i) && ur(ir(this.config.urls.youtube.api, e, i)).then(function (e) {
        di.object(e) && (t.config.title = e.items[0].snippet.title, Pr.setTitle.call(t));
      }).catch(function () {});
    }, setAspectRatio: function setAspectRatio() {
      var e = this.config.ratio.split(":");this.elements.wrapper.style.paddingBottom = "".concat(100 / e[0] * e[1], "%");
    }, ready: function ready() {
      var e = this,
          t = e.media.getAttribute("id");if (di.empty(t) || !t.startsWith("youtube-")) {
        var n = e.media.getAttribute("src");di.empty(n) && (n = e.media.getAttribute(this.config.attributes.embed.id));var i,
            r,
            o = (i = n, di.empty(i) ? null : i.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : i),
            s = (r = e.provider, "".concat(r, "-").concat(Math.floor(1e4 * Math.random()))),
            a = _i("div", { id: s, poster: e.poster });e.media = ki(a, e.media);var l = function l(e) {
          return "https://img.youtube.com/vi/".concat(o, "/").concat(e, "default.jpg");
        };Ar(l("maxres"), 121).catch(function () {
          return Ar(l("sd"), 121);
        }).catch(function () {
          return Ar(l("hq"));
        }).then(function (t) {
          return Pr.setPoster.call(e, t.src);
        }).then(function (t) {
          t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover");
        }).catch(function () {}), e.embed = new window.YT.Player(s, { videoId: o, playerVars: { autoplay: e.config.autoplay ? 1 : 0, hl: e.config.hl, controls: e.supported.ui ? 0 : 1, rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1, disablekb: 1, playsinline: 1, widget_referrer: window ? window.location.href : null, cc_load_policy: e.captions.active ? 1 : 0, cc_lang_pref: e.config.captions.language }, events: { onError: function onError(t) {
              if (!e.media.error) {
                var n = t.data,
                    i = { 2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.", 5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.", 100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.", 101: "The owner of the requested video does not allow it to be played in embedded players.", 150: "The owner of the requested video does not allow it to be played in embedded players." }[n] || "An unknown error occured";e.media.error = { code: n, message: i }, vi.call(e, e.media, "error");
              }
            }, onPlaybackRateChange: function onPlaybackRateChange(t) {
              var n = t.target;e.media.playbackRate = n.getPlaybackRate(), vi.call(e, e.media, "ratechange");
            }, onReady: function onReady(t) {
              if (!di.function(e.media.play)) {
                var n = t.target;Wr.getTitle.call(e, o), e.media.play = function () {
                  Rr.call(e, !0), n.playVideo();
                }, e.media.pause = function () {
                  Rr.call(e, !1), n.pauseVideo();
                }, e.media.stop = function () {
                  n.stopVideo();
                }, e.media.duration = n.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", { get: function get() {
                    return Number(n.getCurrentTime());
                  }, set: function set(t) {
                    e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, vi.call(e, e.media, "seeking"), n.seekTo(t);
                  } }), Object.defineProperty(e.media, "playbackRate", { get: function get() {
                    return n.getPlaybackRate();
                  }, set: function set(e) {
                    n.setPlaybackRate(e);
                  } });var i = e.config.volume;Object.defineProperty(e.media, "volume", { get: function get() {
                    return i;
                  }, set: function set(t) {
                    i = t, n.setVolume(100 * i), vi.call(e, e.media, "volumechange");
                  } });var r = e.config.muted;Object.defineProperty(e.media, "muted", { get: function get() {
                    return r;
                  }, set: function set(t) {
                    var i = di.boolean(t) ? t : r;r = i, n[i ? "mute" : "unMute"](), vi.call(e, e.media, "volumechange");
                  } }), Object.defineProperty(e.media, "currentSrc", { get: function get() {
                    return n.getVideoUrl();
                  } }), Object.defineProperty(e.media, "ended", { get: function get() {
                    return e.currentTime === e.duration;
                  } }), e.options.speed = n.getAvailablePlaybackRates(), e.supported.ui && e.media.setAttribute("tabindex", -1), vi.call(e, e.media, "timeupdate"), vi.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(function () {
                  e.media.buffered = n.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && vi.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), vi.call(e, e.media, "canplaythrough"));
                }, 200), setTimeout(function () {
                  return Pr.build.call(e);
                }, 50);
              }
            }, onStateChange: function onStateChange(t) {
              var n = t.target;switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(t.data) && (e.media.seeking = !1, vi.call(e, e.media, "seeked")), t.data) {case -1:
                  vi.call(e, e.media, "timeupdate"), e.media.buffered = n.getVideoLoadedFraction(), vi.call(e, e.media, "progress");break;case 0:
                  Rr.call(e, !1), e.media.loop ? (n.stopVideo(), n.playVideo()) : vi.call(e, e.media, "ended");break;case 1:
                  e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (Rr.call(e, !0), vi.call(e, e.media, "playing"), e.timers.playing = setInterval(function () {
                    vi.call(e, e.media, "timeupdate");
                  }, 50), e.media.duration !== n.getDuration() && (e.media.duration = n.getDuration(), vi.call(e, e.media, "durationchange")));break;case 2:
                  e.muted || e.embed.unMute(), Rr.call(e, !1);}vi.call(e, e.elements.container, "statechange", !1, { code: t.data });
            } } });
      }
    } },
      Yr = { setup: function setup() {
      this.media ? (Ci(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), Ci(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && Ci(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = _i("div", { class: this.config.classNames.video }), yi(this.media, this.elements.wrapper), this.elements.poster = _i("div", { class: this.config.classNames.poster }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? Yi.extend.call(this) : this.isYouTube ? Wr.setup.call(this) : this.isVimeo && Fr.setup.call(this)) : this.debug.warn("No media element found!");
    } },
      zr = function () {
    function e(t) {
      var n = this;Zt(this, e), this.player = t, this.publisherId = t.config.ads.publisherId, this.playing = !1, this.initialized = !1, this.elements = { container: null, displayContainer: null }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function (e, t) {
        n.on("loaded", e), n.on("error", t);
      }), this.load();
    }return en(e, [{ key: "load", value: function value() {
        var e = this;this.enabled && (di.object(window.google) && di.object(window.google.ima) ? this.ready() : jr(this.player.config.urls.googleIMA.sdk).then(function () {
          e.ready();
        }).catch(function () {
          e.trigger("error", new Error("Google IMA SDK failed to load"));
        }));
      } }, { key: "ready", value: function value() {
        var e = this;this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(function () {
          e.clearSafetyTimer("onAdsManagerLoaded()");
        }), this.listeners(), this.setupIMA();
      } }, { key: "setupIMA", value: function value() {
        this.elements.container = _i("div", { class: this.player.config.classNames.ads }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container), this.requestAds();
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
          var t = mr(Math.max(e.manager.getRemainingTime(), 0)),
              n = "".concat(lr("advertisement", e.player.config), " - ").concat(t);e.elements.container.setAttribute("data-badge-text", n);
        }, 100);
      } }, { key: "onAdsManagerLoaded", value: function value(e) {
        var t = this;if (this.enabled) {
          var n = new google.ima.AdsRenderingSettings();n.restoreCustomPlaybackStateOnAdBreakComplete = !0, n.enablePreloading = !0, this.manager = e.getAdsManager(this.player, n), this.cuePoints = this.manager.getCuePoints(), di.empty(this.cuePoints) || this.cuePoints.forEach(function (e) {
            if (0 !== e && -1 !== e && e < t.player.duration) {
              var n = t.player.elements.progress;if (di.element(n)) {
                var i = 100 / t.player.duration * e,
                    r = _i("span", { class: t.player.config.classNames.cues });r.style.left = "".concat(i.toString(), "%"), n.appendChild(r);
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
            r = function r(e) {
          var n = "ads".concat(e.replace(/_/g, "").toLowerCase());vi.call(t.player, t.player.media, n);
        };switch (e.type) {case google.ima.AdEvent.Type.LOADED:
            this.trigger("loaded"), r(e.type), this.pollCountdown(!0), i.isLinear() || (i.width = n.offsetWidth, i.height = n.offsetHeight);break;case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
            r(e.type), this.loadAds();break;case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
            r(e.type), this.pauseContent();break;case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
            r(e.type), this.pollCountdown(), this.resumeContent();break;case google.ima.AdEvent.Type.STARTED:case google.ima.AdEvent.Type.MIDPOINT:case google.ima.AdEvent.Type.COMPLETE:case google.ima.AdEvent.Type.IMPRESSION:case google.ima.AdEvent.Type.CLICK:
            r(e.type);}
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
          var n = t.player.currentTime;di.empty(t.cuePoints) || t.cuePoints.forEach(function (i, r) {
            e < i && i < n && (t.manager.discardAdBreak(), t.cuePoints.splice(r, 1));
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
        for (var t = this, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) {
          i[r - 1] = arguments[r];
        }var o = this.events[e];di.array(o) && o.forEach(function (e) {
          di.function(e) && e.apply(t, i);
        });
      } }, { key: "on", value: function value(e, t) {
        return di.array(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this;
      } }, { key: "startSafetyTimer", value: function value(e, t) {
        var n = this;this.player.debug.log("Safety timer invoked from: ".concat(t)), this.safetyTimer = setTimeout(function () {
          n.cancel(), n.clearSafetyTimer("startSafetyTimer()");
        }, e);
      } }, { key: "clearSafetyTimer", value: function value(e) {
        di.nullOrUndefined(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: ".concat(e)), clearTimeout(this.safetyTimer), this.safetyTimer = null);
      } }, { key: "enabled", get: function get() {
        return this.player.isHTML5 && this.player.isVideo && this.player.config.ads.enabled && !di.empty(this.publisherId);
      } }, { key: "tagUrl", get: function get() {
        var e = { AV_PUBLISHERID: "58c25bb0073ef448b1087ad6", AV_CHANNELID: "5a0458dc28a06145e4519d21", AV_URL: window.location.hostname, cb: Date.now(), AV_WIDTH: 640, AV_HEIGHT: 480, AV_CDIM2: this.publisherId };return "".concat("https://go.aniview.com/api/adserver6/vast/", "?").concat(yr(e));
      } }]), e;
  }(),
      Ur = { insertElements: function insertElements(e, t) {
      var n = this;di.string(t) ? wi(e, this.media, { src: t }) : di.array(t) && t.forEach(function (t) {
        wi(e, n.media, t);
      });
    }, change: function change(e) {
      var t = this;Ui(e, "sources.length") ? (Yi.cancelRequests.call(this), this.destroy.call(this, function () {
        t.options.quality = [], Ei(t.media), t.media = null, di.element(t.elements.container) && t.elements.container.removeAttribute("class");var n = e.sources,
            i = e.type,
            r = nn(n, 1)[0],
            o = r.provider,
            s = void 0 === o ? wr.html5 : o,
            a = r.src,
            l = "html5" === s ? i : "div",
            c = "html5" === s ? {} : { src: a };Object.assign(t, { provider: s, type: i, supported: Wi.check(i, s, t.config.playsinline), media: _i(l, c) }), t.elements.container.appendChild(t.media), di.boolean(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), di.empty(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), Pr.addStyleHook.call(t), t.isHTML5 && Ur.insertElements.call(t, "source", n), t.config.title = e.title, Yr.setup.call(t), t.isHTML5 && ("tracks" in e && Ur.insertElements.call(t, "track", e.tracks), t.media.load()), (t.isHTML5 || t.isEmbed && !t.supported.ui) && Pr.build.call(t), t.fullscreen.update();
      }, !0)) : this.debug.warn("Invalid source format");
    } },
      Br = function () {
    function e(t, n) {
      var i = this;if (Zt(this, e), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = Wi.touch, this.media = t, di.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || di.nodeList(this.media) || di.array(this.media)) && (this.media = this.media[0]), this.config = Bi({}, _r, e.defaults, n || {}, function () {
        try {
          return JSON.parse(i.media.getAttribute("data-plyr-config"));
        } catch (e) {
          return {};
        }
      }()), this.elements = { container: null, captions: null, buttons: {}, display: {}, progress: {}, inputs: {}, settings: { popup: null, menu: null, panels: {}, buttons: {} } }, this.captions = { active: null, currentTrack: -1, meta: new WeakMap() }, this.fullscreen = { active: !1 }, this.options = { speed: [], quality: [] }, this.debug = new kr(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", Wi), !di.nullOrUndefined(this.media) && di.element(this.media)) {
        if (this.media.plyr) this.debug.warn("Target already setup");else if (this.config.enabled) {
          if (Wi.check().api) {
            var r = this.media.cloneNode(!0);r.autoplay = !1, this.elements.original = r;var o = this.media.tagName.toLowerCase(),
                s = null,
                a = null;switch (o) {case "div":
                if (s = this.media.querySelector("iframe"), di.element(s)) {
                  if (a = vr(s.getAttribute("src")), this.provider = function (e) {
                    return (/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(e) ? wr.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? wr.vimeo : null
                    );
                  }(a.toString()), this.elements.container = this.media, this.media = s, this.elements.container.className = "", a.search.length) {
                    var l = ["1", "true"];l.includes(a.searchParams.get("autoplay")) && (this.config.autoplay = !0), l.includes(a.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = l.includes(a.searchParams.get("playsinline")), this.config.hl = a.searchParams.get("hl")) : this.config.playsinline = !0;
                  }
                } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);if (di.empty(this.provider) || !Object.keys(wr).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");this.type = Er.video;break;case "video":case "audio":
                this.type = o, this.provider = wr.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);break;default:
                return void this.debug.error("Setup failed: unsupported type");}this.supported = Wi.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new Mr(this), this.storage = new cr(this), this.media.plyr = this, di.element(this.elements.container) || (this.elements.container = _i("div"), yi(this.media, this.elements.container)), Pr.addStyleHook.call(this), Yr.setup.call(this), this.config.debug && pi.call(this, this.elements.container, this.config.events.join(" "), function (e) {
              i.debug.log("event: ".concat(e.type));
            }), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Pr.build.call(this), this.listeners.container(), this.listeners.global(), this.fullscreen = new Cr(this), this.config.ads.enabled && (this.ads = new zr(this)), this.config.autoplay && this.play()) : this.debug.error("Setup failed: no support");
          } else this.debug.error("Setup failed: no support");
        } else this.debug.error("Setup failed: disabled by config");
      } else this.debug.error("Setup failed: no suitable element passed");
    }return en(e, [{ key: "play", value: function value() {
        return di.function(this.media.play) ? this.media.play() : null;
      } }, { key: "pause", value: function value() {
        this.playing && di.function(this.media.pause) && this.media.pause();
      } }, { key: "togglePlay", value: function value(e) {
        (di.boolean(e) ? e : !this.playing) ? this.play() : this.pause();
      } }, { key: "stop", value: function value() {
        this.isHTML5 ? (this.pause(), this.restart()) : di.function(this.media.stop) && this.media.stop();
      } }, { key: "restart", value: function value() {
        this.currentTime = 0;
      } }, { key: "rewind", value: function value(e) {
        this.currentTime = this.currentTime - (di.number(e) ? e : this.config.seekTime);
      } }, { key: "forward", value: function value(e) {
        this.currentTime = this.currentTime + (di.number(e) ? e : this.config.seekTime);
      } }, { key: "increaseVolume", value: function value(e) {
        var t = this.media.muted ? 0 : this.volume;this.volume = t + (di.number(e) ? e : 0);
      } }, { key: "decreaseVolume", value: function value(e) {
        this.increaseVolume(-e);
      } }, { key: "toggleCaptions", value: function value(e) {
        br.toggle.call(this, e, !1);
      } }, { key: "airplay", value: function value() {
        Wi.airplay && this.media.webkitShowPlaybackTargetPicker();
      } }, { key: "toggleControls", value: function value(e) {
        if (this.supported.ui && !this.isAudio) {
          var t = Di(this.elements.container, this.config.classNames.hideControls),
              n = void 0 === e ? void 0 : !e,
              i = Ci(this.elements.container, this.config.classNames.hideControls, n);if (i && this.config.controls.includes("settings") && !di.empty(this.config.settings) && gr.toggleMenu.call(this, !1), i !== t) {
            var r = i ? "controlshidden" : "controlsshown";vi.call(this, this.media, r);
          }return !i;
        }return !1;
      } }, { key: "on", value: function value(e, t) {
        pi.call(this, this.elements.container, e, t);
      } }, { key: "once", value: function value(e, t) {
        gi.call(this, this.elements.container, e, t);
      } }, { key: "off", value: function value(e, t) {
        mi(this.elements.container, e, t);
      } }, { key: "destroy", value: function value(e) {
        var t = this,
            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];if (this.ready) {
          var i = function i() {
            document.body.style.overflow = "", t.embed = null, n ? (Object.keys(t.elements).length && (Ei(t.elements.buttons.play), Ei(t.elements.captions), Ei(t.elements.controls), Ei(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), di.function(e) && e()) : (function () {
              this && this.eventListeners && (this.eventListeners.forEach(function (e) {
                var t = e.element,
                    n = e.type,
                    i = e.callback,
                    r = e.options;t.removeEventListener(n, i, r);
              }), this.eventListeners = []);
            }.call(t), ki(t.elements.original, t.elements.container), vi.call(t, t.elements.original, "destroyed", !0), di.function(e) && e.call(t.elements.original), t.ready = !1, setTimeout(function () {
              t.elements = null, t.media = null;
            }, 200));
          };this.stop(), this.isHTML5 ? (clearTimeout(this.timers.loading), Pr.toggleNativeControls.call(this, !0), i()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && di.function(this.embed.destroy) && this.embed.destroy(), i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200));
        }
      } }, { key: "supports", value: function value(e) {
        return Wi.mime.call(this, e);
      } }, { key: "isHTML5", get: function get() {
        return Boolean(this.provider === wr.html5);
      } }, { key: "isEmbed", get: function get() {
        return Boolean(this.isYouTube || this.isVimeo);
      } }, { key: "isYouTube", get: function get() {
        return Boolean(this.provider === wr.youtube);
      } }, { key: "isVimeo", get: function get() {
        return Boolean(this.provider === wr.vimeo);
      } }, { key: "isVideo", get: function get() {
        return Boolean(this.type === Er.video);
      } }, { key: "isAudio", get: function get() {
        return Boolean(this.type === Er.audio);
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
          var t = di.number(e) && e > 0;this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"));
        }
      }, get: function get() {
        return Number(this.media.currentTime);
      } }, { key: "buffered", get: function get() {
        var e = this.media.buffered;return di.number(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0;
      } }, { key: "seeking", get: function get() {
        return Boolean(this.media.seeking);
      } }, { key: "duration", get: function get() {
        var e = parseFloat(this.config.duration),
            t = (this.media || {}).duration,
            n = di.number(t) && t !== 1 / 0 ? t : 0;return e || n;
      } }, { key: "volume", set: function set(e) {
        var t = e;di.string(t) && (t = Number(t)), di.number(t) || (t = this.storage.get("volume")), di.number(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !di.empty(e) && this.muted && t > 0 && (this.muted = !1);
      }, get: function get() {
        return Number(this.media.volume);
      } }, { key: "muted", set: function set(e) {
        var t = e;di.boolean(t) || (t = this.storage.get("muted")), di.boolean(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t;
      }, get: function get() {
        return Boolean(this.media.muted);
      } }, { key: "hasAudio", get: function get() {
        return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
      } }, { key: "speed", set: function set(e) {
        var t = null;di.number(e) && (t = e), di.number(t) || (t = this.storage.get("speed")), di.number(t) || (t = this.config.speed.selected), t < .1 && (t = .1), t > 2 && (t = 2), this.config.speed.options.includes(t) ? (this.config.speed.selected = t, this.media.playbackRate = t) : this.debug.warn("Unsupported speed (".concat(t, ")"));
      }, get: function get() {
        return Number(this.media.playbackRate);
      } }, { key: "quality", set: function set(e) {
        var t = this.config.quality,
            n = this.options.quality;if (n.length) {
          var i = [!di.empty(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(di.number);if (!n.includes(i)) {
            var r = function (e, t) {
              return di.array(e) && e.length ? e.reduce(function (e, n) {
                return Math.abs(n - t) < Math.abs(e - t) ? n : e;
              }) : null;
            }(n, i);this.debug.warn("Unsupported quality option: ".concat(i, ", using ").concat(r, " instead")), i = r;
          }t.selected = i, this.media.quality = i;
        }
      }, get: function get() {
        return this.media.quality;
      } }, { key: "loop", set: function set(e) {
        var t = di.boolean(e) ? e : this.config.loop.active;this.config.loop.active = t, this.media.loop = t;
      }, get: function get() {
        return Boolean(this.media.loop);
      } }, { key: "source", set: function set(e) {
        Ur.change.call(this, e);
      }, get: function get() {
        return this.media.currentSrc;
      } }, { key: "poster", set: function set(e) {
        this.isVideo ? Pr.setPoster.call(this, e, !1).catch(function () {}) : this.debug.warn("Poster can only be set for video");
      }, get: function get() {
        return this.isVideo ? this.media.getAttribute("poster") : null;
      } }, { key: "autoplay", set: function set(e) {
        var t = di.boolean(e) ? e : this.config.autoplay;this.config.autoplay = t;
      }, get: function get() {
        return Boolean(this.config.autoplay);
      } }, { key: "currentTrack", set: function set(e) {
        br.set.call(this, e, !1);
      }, get: function get() {
        var e = this.captions,
            t = e.toggled,
            n = e.currentTrack;return t ? n : -1;
      } }, { key: "language", set: function set(e) {
        br.setLanguage.call(this, e, !1);
      }, get: function get() {
        return (br.getCurrentTrack.call(this) || {}).language;
      } }, { key: "pip", set: function set(e) {
        var t = "picture-in-picture",
            n = "inline";if (Wi.pip) {
          var i = di.boolean(e) ? e : this.pip === n;this.media.webkitSetPresentationMode(i ? t : n);
        }
      }, get: function get() {
        return Wi.pip ? this.media.webkitPresentationMode : null;
      } }], [{ key: "supported", value: function value(e, t, n) {
        return Wi.check(e, t, n);
      } }, { key: "loadSprite", value: function value(e, t) {
        return dr(e, t);
      } }, { key: "setup", value: function value(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = null;return di.string(t) ? i = Array.from(document.querySelectorAll(t)) : di.nodeList(t) ? i = Array.from(t) : di.array(t) && (i = t.filter(di.element)), di.empty(i) ? null : i.map(function (t) {
          return new e(t, n);
        });
      } }]), e;
  }();return Br.defaults = (qr = _r, JSON.parse(JSON.stringify(qr))), Br;
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
}(jQuery), function (e) {
  "use strict";
  var t = e("html"),
      n = (e(".lv-page"), e(".lv-off-canvas")),
      i = e(".dropdown", n),
      r = e("li:not(.has-dropdown) > a", i),
      o = e(".submenu-arrow");e("[data-menu-toggle]").click(function (n) {
    n.preventDefault(), t.toggleClass("has-open-menu"), e(".has-open-menu").length;
  }), o.click(function (t) {
    t.preventDefault(), t.stopPropagation(), e(this).parent().next(".dropdown").addClass("is-open");
  }), r.click(function (e) {
    t.removeClass("has-open-menu");
  }), i.click(function (t) {
    e(this).removeClass("is-open"), t.stopPropagation();
  });
}(jQuery), function (e) {
  "use strict";
  var t = e('a[href="/reports/"], a[href="/surfcams/"]'),
      n = e(".lv-nav .is-reports-mega-menu > .dropdown"),
      i = e("li", n);window.location.pathname.split("/")[1];function r(t) {
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
          r = i > 429 ? i : 429;n.height(r);
    }(), !1;
  }r(n.find("> li:first-child")), t.each(function () {
    e(this).click(function (e) {
      e.preventDefault();
    });
  }), i.on("click", function (t) {
    var n = e(this);if (n.hasClass("has-dropdown")) return r(n), !1;var i = n.find("a").attr("href");window.location = i;
  });
}(jQuery), launchSlider(), $(window).on("load", function () {
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
