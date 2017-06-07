webpackJsonp([46],{

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(903)
__webpack_require__(902)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(436),
  /* template */
  __webpack_require__(812),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Sites/vue_workflows/laravel/resources/assets/js/components/components/tags_input.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tags_input.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d72194c", Component.options)
  } else {
    hotAPI.reload("data-v-1d72194c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendors_insignia_dist_insignia_min_js__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendors_insignia_dist_insignia_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendors_insignia_dist_insignia_min_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: "tags_input",
    mounted: function mounted() {
        'use strict';

        void function () {

            __WEBPACK_IMPORTED_MODULE_0__vendors_insignia_dist_insignia_min_js___default()(ty);
            __WEBPACK_IMPORTED_MODULE_0__vendors_insignia_dist_insignia_min_js___default()(custom, {
                delimiter: ','
            });
            __WEBPACK_IMPORTED_MODULE_0__vendors_insignia_dist_insignia_min_js___default()(del, {
                deletion: true
            });
            __WEBPACK_IMPORTED_MODULE_0__vendors_insignia_dist_insignia_min_js___default()(def);
            __WEBPACK_IMPORTED_MODULE_0__vendors_insignia_dist_insignia_min_js___default()(lng);
            __WEBPACK_IMPORTED_MODULE_0__vendors_insignia_dist_insignia_min_js___default()(dup, {
                validate: function validate() {
                    return true;
                }
            });

            function events(el, type, fn) {
                if (el.addEventListener) {
                    el.addEventListener(type, fn);
                } else if (el.attachEvent) {
                    el.attachEvent('on' + type, wrap(fn));
                } else {
                    el['on' + type] = wrap(fn);
                }

                function wrap(originalEvent) {
                    var e = originalEvent || global.event;
                    e.target = e.target || e.srcElement;
                    e.preventDefault = e.preventDefault || function preventDefault() {
                        e.returnValue = false;
                    };
                    e.stopPropagation = e.stopPropagation || function stopPropagation() {
                        e.cancelBubble = true;
                    };
                    fn.call(el, e);
                }
            }
        }();
    },
    destroyed: function destroyed() {}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(5)))

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  if ("object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    var t;"undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self), t.insignia = e();
  }
}(function () {
  return function e(t, n, r) {
    function i(a, s) {
      if (!n[a]) {
        if (!t[a]) {
          var u = "function" == typeof require && require;if (!s && u) return require(a, !0);if (o) return o(a, !0);var l = new Error("Cannot find module '" + a + "'");throw l.code = "MODULE_NOT_FOUND", l;
        }var f = n[a] = { exports: {} };t[a][0].call(f.exports, function (e) {
          var n = t[a][1][e];return i(n ? n : e);
        }, f, f.exports, e, t, n, r);
      }return n[a].exports;
    }for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) {
      i(r[a]);
    }return i;
  }({ 1: [function (e, t) {
      "use strict";
      var n = e("crossvent"),
          r = e("./dom"),
          i = e("./text"),
          o = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent", "webkitBoxSizing", "mozBoxSizing", "boxSizing", "padding", "border"],
          a = 20;t.exports = function (e) {
        function t() {
          var e,
              t,
              n = f();for (t = 0; t < o.length; t++) {
            e = n[o[t]], void 0 !== e && null !== e && (c.style[o[t]] = e);
          }c.disabled = "disabled", c.style.whiteSpace = "pre", c.style.position = "absolute", c.style.top = c.style.left = "-9999em";
        }function s() {
          var t = e.value;if (t !== c.value) {
            i(c, t);var n = c.offsetWidth + a;e.style.width = n + "px";
          }
        }function u(t) {
          var r = t ? "remove" : "add";n[r](e, "keydown", s), n[r](e, "keyup", s), n[r](e, "input", s), n[r](e, "paste", s), n[r](e, "change", s);
        }function l() {
          u(!0), c.parentElement.removeChild(c), e.style.width = "";
        }function f() {
          return window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
        }var c = r("span");return document.body.appendChild(c), t(), u(), { remap: t, refresh: s, destroy: l };
      };
    }, { "./dom": 2, "./text": 9, crossvent: 4 }], 2: [function (e, t) {
      "use strict";
      t.exports = function (e, t) {
        var n = document.createElement(e);return t && (n.className = t), n;
      };
    }, {}], 3: [function (e, t) {
      "use strict";
      function n(e) {
        var t, n;for (n = 0; n < w.length; n++) {
          if (t = w[n], t.el === e) return t.api;
        }return null;
      }function r(e, t) {
        function r(t) {
          var n = t ? "remove" : "add";i[n](e, "keydown", z), i[n](e, "keypress", D), i[n](e, "paste", A), i[n](it, "click", k), tt && i[n](document.documentElement, "focus", O, !0);
        }function S() {
          return r(!0), e.value = $(), e.className = e.className.replace(E, ""), it.className = it.className.replace(x, ""), nt.parentElement.removeChild(nt), rt.parentElement.removeChild(rt), w.splice(w.indexOf(st), 1), ot.destroy(), at.destroyed = !0, at.destroy = N(at), at.tags = at.value = N(null), at;
        }function N(e) {
          return function () {
            return e;
          };
        }function O(t) {
          t.target !== e && (H = !0, F(!0), H = !1);
        }function k(t) {
          var n = t.target;if (y.test(n.className)) return R(n.parentElement, { start: "end", end: "end", remove: !0 }), void T();for (var r = n, i = h.test(r.className); i === !1 && r.parentElement;) {
            r = r.parentElement, i = h.test(r.className);
          }i ? R(r, C) : n !== e && (T(), e.focus());
        }function T() {
          R(rt.lastChild, C), j([K], !0);
        }function F(t) {
          return j([K], t), t && U(rt, B), i.fabricate(e, "insignia-converted"), at;
        }function B(e, t) {
          nt.appendChild(t);
        }function z(t) {
          var n = l(e),
              r = t.which || t.keyCode || t.charCode;if (r === v) nt.firstChild ? R(nt.firstChild, {}) : l(e, { start: 0, end: 0 });else if (r === p) rt.lastChild ? R(rt.lastChild, C) : l(e, C);else if (r === g && 0 === n.start && nt.lastChild) R(nt.lastChild, C);else if (r !== d || 0 !== n.start || 0 !== n.end && n.end === e.value.length || !nt.lastChild) {
            if (r !== m || n.end !== e.value.length || !rt.firstChild) return;R(rt.firstChild, {});
          } else R(nt.lastChild, C);return t.preventDefault(), !1;
        }function D(e) {
          var t = e.which || e.keyCode || e.charCode;return String.fromCharCode(t) === K ? (F(), e.preventDefault(), !1) : void 0;
        }function A() {
          setTimeout(function () {
            j();
          }, 0);
        }function j(t, n) {
          var r = l(e),
              o = n ? 1 / 0 : r.start,
              a = e.value.slice(0, o).concat(t || []).split(K);if (!(a.length < 1)) {
            var s,
                u = a.pop() + e.value.slice(o),
                f = a.join(K).length;for (s = 0; s < a.length; s++) {
              M(nt, a[s]);
            }L(), e.value = u, r.start -= f, r.end -= f, H !== !0 && l(e, r), ot.refresh(), i.fabricate(e, "insignia-evaluated");
          }
        }function L() {
          function e(e, n) {
            Y(e, s(t)) ? t.push(e) : n.parentElement.removeChild(n);
          }var t = [];U(nt, e), U(rt, e);
        }function q(e, t) {
          a(e, t);
        }function I(e) {
          return a(e);
        }function M(e, t) {
          var n = t.trim();if (0 !== n.length) {
            var r = o("span", "nsg-tag");Z(r, X(n)), J.deletion && r.appendChild(o("span", "nsg-tag-remove")), e.appendChild(r);
          }
        }function R(t, n) {
          if (t) {
            j([K], !0);var r = t.parentElement;if (r === nt) for (; r.lastChild !== t;) {
              rt.insertBefore(r.lastChild, rt.firstChild);
            } else for (; r.firstChild !== t;) {
              nt.appendChild(r.firstChild);
            }t.parentElement.removeChild(t), e.value = n.remove ? "" : et(t), e.focus(), l(e, n), ot.refresh();
          }
        }function P() {
          var t,
              n = e.parentElement.children;for (t = 0; t < n.length; t++) {
            if (n[t] !== e && n[t].nodeType === c) return !0;
          }return !1;
        }function U(e, t) {
          var n,
              r,
              i = s(e.children);for (n = 0; n < i.length; n++) {
            r = i[n], t(et(r), r, n);
          }
        }function W() {
          function t(e) {
            if (e) {
              var t = X(e);Y(t, s(r)) && r.push(t);
            }
          }var n,
              r = [],
              i = e.value.split(K);for (U(nt, t), n = 0; n < i.length; n++) {
            t(i[n]);
          }return U(rt, t), r;
        }function $() {
          return W().join(K);
        }function _(e) {
          return e.trim().toLowerCase();
        }function V(e, t) {
          return -1 === t.indexOf(e);
        }var G = n(e);if (G) return G;var H = document.activeElement !== e,
            J = t || {},
            K = J.delimiter || b;if (1 !== K.length) throw new Error("Insignia expected a single-character delimiter string");var Q = P(e);if (Q || !f.test(e.tagName)) throw new Error("Insignia expected an input element without any siblings");var X = J.parse || _,
            Y = J.validate || V,
            Z = J.render || q,
            et = J.readTag || I,
            tt = J.convertOnFocus !== !1,
            nt = o("span", "nsg-tags nsg-tags-before"),
            rt = o("span", "nsg-tags nsg-tags-after"),
            it = e.parentElement;e.className += " nsg-input", it.className += " nsg-editor", it.insertBefore(nt, e), it.insertBefore(rt, e.nextSibling), r();var ot = u(e),
            at = { tags: W, value: $, convert: F, destroy: S },
            st = { el: e, api: at };return j([K], !0), w.push(st), H = !1, at;
      }e("./polyfills/String.prototype.trim"), e("./polyfills/Array.prototype.indexOf");var i = e("crossvent"),
          o = e("./dom"),
          a = e("./text"),
          s = e("./slice"),
          u = e("./autosize"),
          l = e("./selection"),
          f = /^input$/i,
          c = 1,
          d = 8,
          p = 35,
          v = 36,
          g = 37,
          m = 39,
          h = /\bnsg-tag\b/,
          y = /\bnsg-tag-remove\b/,
          x = /\bnsg-editor\b/g,
          E = /\bnsg-input\b/g,
          C = { start: "end", end: "end" },
          w = [],
          b = " ";r.find = n, t.exports = r;
    }, { "./autosize": 1, "./dom": 2, "./polyfills/Array.prototype.indexOf": 5, "./polyfills/String.prototype.trim": 6, "./selection": 7, "./slice": 8, "./text": 9, crossvent: 4 }], 4: [function (e, t) {
      (function (e) {
        "use strict";
        function n(e, t, n, r) {
          return e.addEventListener(t, n, r);
        }function r(e, t, n) {
          return e.attachEvent("on" + t, u(e, t, n));
        }function i(e, t, n, r) {
          return e.removeEventListener(t, n, r);
        }function o(e, t, n) {
          return e.detachEvent("on" + t, l(e, t, n));
        }function a(e, t) {
          var n;c.createEvent ? (n = c.createEvent("Event"), n.initEvent(t, !0, !0), e.dispatchEvent(n)) : c.createEventObject && (n = c.createEventObject(), e.fireEvent("on" + t, n));
        }function s(t, n, r) {
          return function (n) {
            var i = n || e.event;i.target = i.target || i.srcElement, i.preventDefault = i.preventDefault || function () {
              i.returnValue = !1;
            }, i.stopPropagation = i.stopPropagation || function () {
              i.cancelBubble = !0;
            }, r.call(t, i);
          };
        }function u(e, t, n) {
          var r = l(e, t, n) || s(e, t, n);return v.push({ wrapper: r, element: e, type: t, fn: n }), r;
        }function l(e, t, n) {
          var r = f(e, t, n);if (r) {
            var i = v[r].wrapper;return v.splice(r, 1), i;
          }
        }function f(e, t, n) {
          var r, i;for (r = 0; r < v.length; r++) {
            if (i = v[r], i.element === e && i.type === t && i.fn === n) return r;
          }
        }var c = document,
            d = n,
            p = i,
            v = [];e.addEventListener || (d = r, p = o), t.exports = { add: d, remove: p, fabricate: a };
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}], 5: [function () {
      "use strict";
      Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
        if (void 0 === this || null === this) throw new TypeError();var n = this.length;for (t = +t || 0, 1 / 0 === Math.abs(t) ? t = 0 : 0 > t && (t += n, 0 > t && (t = 0)); n > t; t++) {
          if (this[t] === e) return t;
        }return -1;
      });
    }, {}], 6: [function () {
      "use strict";
      if (!String.prototype.trim) {
        var e = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;String.prototype.trim = function () {
          return this.replace(e, "");
        };
      }
    }, {}], 7: [function (e, t) {
      "use strict";
      function n(e) {
        return { start: e.selectionStart, end: e.selectionEnd };
      }function r(e) {
        function t(t, r) {
          return n !== e && (n ? n.focus() : e.blur()), { start: t, end: r };
        }var n = document.activeElement;n !== e && e.focus();var r = document.selection.createRange(),
            a = r.getBookmark(),
            s = e.value,
            u = i(s),
            l = r.parentElement();if (null === l || !o(l)) return t(0, 0);r.text = u + r.text + u;var f = e.value;return e.value = s, r.moveToBookmark(a), r.select(), t(f.indexOf(u), f.lastIndexOf(u) - u.length);
      }function i(e) {
        var t;do {
          t = "@@marker." + Math.random() * new Date();
        } while (-1 !== e.indexOf(t));return t;
      }function o(e) {
        return d.test(e.tagName) && "text" === e.type || p.test(e.tagName);
      }function a(e, t) {
        e.selectionStart = u(e, t.start), e.selectionEnd = u(e, t.end);
      }function s(e, t) {
        var n = e.createTextRange();"end" === t.start && "end" === t.end ? (n.collapse(!1), n.select()) : (n.collapse(!0), n.moveEnd("character", t.end), n.moveStart("character", t.start), n.select());
      }function u(e, t) {
        return "end" === t ? e.value.length : t || 0;
      }function l(e, t) {
        return 2 === arguments.length && c(e, t), f(e);
      }var f = n,
          c = a,
          d = /input/i,
          p = /textarea/i;document.selection && document.selection.createRange && (f = r, c = s), t.exports = l;
    }, {}], 8: [function (e, t) {
      "use strict";
      function n(e) {
        var t,
            n = [];for (t = 0; t < e.length; t++) {
          n.push(e[t]);
        }return n;
      }t.exports = n;
    }, {}], 9: [function (e, t) {
      "use strict";
      function n(e, t) {
        return 2 === arguments.length && (e.innerText = e.textContent = t), "string" == typeof e.innerText ? e.innerText : e.textContent;
      }t.exports = n;
    }, {}] }, {}, [3])(3);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(5)))

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.nsg-tag {\r\n    border-color     : #6699cc;\r\n    background-color : #6699cc;\r\n    border-radius    : 4px;\r\n    padding          : 3px 7px;\n}\n.input {\r\n    background-color : #eeeeee;\r\n    color            : #FFF;\r\n    padding          : 10px;\n}\ninput {\r\n    outline          : none;\r\n    background-color : #eeeeee;\r\n    color            : #6699cc;\r\n    border           : 0;\r\n    padding          : 3px;\r\n    margin           : 5px 0;\n}\n.nsg-tag-remove:after {\r\n    background-color : #6699cc;\n}\nlabel.tag1 {\r\n    margin-top    : 15px;\r\n    margin-bottom : 15px;\n}\n.m-t-b-15 {\r\n    margin-top    : 15px;\r\n    margin-bottom : 15px;\n}", ""]);

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.nsg-editor{padding:10px;cursor:text\n}\n.nsg-tag{display:inline-block;border:1px solid #666;padding:3px;margin:4px\n}\n.nsg-tag-remove:after{margin-left:4px;padding:0 4px;content:'x';background-color:#ccc;cursor:pointer\n}\n.nsg-input{transition:width .25s;padding:3px;margin:5px 0\n}", ""]);

/***/ }),

/***/ 812:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-tag"
  }), _vm._v(" Markup\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "example example_markup"
  }, [_c('div', {
    staticClass: "parent"
  }, [_c('label', {
    staticClass: "m-t-b-15",
    attrs: {
      "for": "ty"
    }
  }, [_vm._v("Enter a space-separated list of tags:")]), _vm._v(" "), _c('div', {
    staticClass: "input"
  }, [_c('input', {
    attrs: {
      "id": "ty",
      "value": "hi"
    }
  })])]), _vm._v(" "), _c('label', {
    staticClass: "m-t-b-15",
    attrs: {
      "for": "custom"
    }
  }, [_vm._v("Enter a list of tags using a custom delimiter: ")]), _vm._v(" "), _c('div', {
    staticClass: "input"
  }, [_c('input', {
    attrs: {
      "id": "custom",
      "value": "hello"
    }
  })]), _vm._v(" "), _c('label', {
    staticClass: "m-t-b-15",
    attrs: {
      "for": "del"
    }
  }, [_vm._v("If you want, you can allow humans to remove tags by clicking on the crosses.\n                        ")]), _vm._v(" "), _c('div', {
    staticClass: "input"
  }, [_c('input', {
    attrs: {
      "id": "del",
      "value": "welcome"
    }
  })]), _vm._v(" "), _c('label', {
    staticClass: "m-t-b-15",
    attrs: {
      "for": "def"
    }
  }, [_vm._v("Default values are naturally welcome.")]), _vm._v(" "), _c('div', {
    staticClass: "input"
  }, [_c('input', {
    attrs: {
      "id": "def",
      "value": "tagging as a service"
    }
  })])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-tag"
  }), _vm._v(" Categorizing tags\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "example example_tagclass"
  }, [_c('label', {
    staticClass: "m-t-b-15",
    attrs: {
      "for": "dup"
    }
  }, [_vm._v("Duplicates are okay sometimes: ")]), _vm._v(" "), _c('div', {
    staticClass: "input"
  }, [_c('input', {
    attrs: {
      "id": "dup",
      "value": "hello hello hello"
    }
  })]), _vm._v(" "), _c('label', {
    staticClass: "m-t-b-15",
    attrs: {
      "for": "lng"
    }
  }, [_vm._v("Really long lists behave reasonably well, too.")]), _vm._v(" "), _c('div', {
    staticClass: "input"
  }, [_c('input', {
    attrs: {
      "id": "lng",
      "value": "Really long lists behave reasonably well, too. Especially if you take into account this is JavaScript!"
    }
  })])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1d72194c", module.exports)
  }
}

/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(561);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("300af4ee", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1d72194c\",\"scoped\":false,\"hasInlineConfig\":true}!./insignia_custom.css", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1d72194c\",\"scoped\":false,\"hasInlineConfig\":true}!./insignia_custom.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(562);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("10b9b498", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1d72194c\",\"scoped\":false,\"hasInlineConfig\":true}!./insignia.min.css", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1d72194c\",\"scoped\":false,\"hasInlineConfig\":true}!./insignia.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});