webpackJsonp([40],{

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1026)
__webpack_require__(1025)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(407),
  /* template */
  __webpack_require__(872),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Sites/vue_workflows/laravel/resources/assets/js/components/components/glyphicons.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] glyphicons.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e0bd0cd4", Component.options)
  } else {
    hotAPI.reload("data-v-e0bd0cd4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 1025:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(686);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("a2c0bf06", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e0bd0cd4\",\"scoped\":false,\"hasInlineConfig\":true}!./glyphicons.css", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e0bd0cd4\",\"scoped\":false,\"hasInlineConfig\":true}!./glyphicons.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1026:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(687);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("8f2c48c8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e0bd0cd4\",\"scoped\":false,\"hasInlineConfig\":true}!./toastr.min.css", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e0bd0cd4\",\"scoped\":false,\"hasInlineConfig\":true}!./toastr.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function (e) {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (e) {
    return function () {
      function t(e, t, n) {
        return g({ type: O.error, iconClass: m().iconClasses.error, message: e, optionsOverride: n, title: t });
      }function n(t, n) {
        return t || (t = m()), v = e("#" + t.containerId), v.length ? v : (n && (v = d(t)), v);
      }function o(e, t, n) {
        return g({ type: O.info, iconClass: m().iconClasses.info, message: e, optionsOverride: n, title: t });
      }function s(e) {
        C = e;
      }function i(e, t, n) {
        return g({ type: O.success, iconClass: m().iconClasses.success, message: e, optionsOverride: n, title: t });
      }function a(e, t, n) {
        return g({ type: O.warning, iconClass: m().iconClasses.warning, message: e, optionsOverride: n, title: t });
      }function r(e, t) {
        var o = m();v || n(o), u(e, o, t) || l(o);
      }function c(t) {
        var o = m();return v || n(o), t && 0 === e(":focus", t).length ? void h(t) : void (v.children().length && v.remove());
      }function l(t) {
        for (var n = v.children(), o = n.length - 1; o >= 0; o--) {
          u(e(n[o]), t);
        }
      }function u(t, n, o) {
        var s = !(!o || !o.force) && o.force;return !(!t || !s && 0 !== e(":focus", t).length) && (t[n.hideMethod]({ duration: n.hideDuration, easing: n.hideEasing, complete: function complete() {
            h(t);
          } }), !0);
      }function d(t) {
        return v = e("<div/>").attr("id", t.containerId).addClass(t.positionClass), v.appendTo(e(t.target)), v;
      }function p() {
        return { tapToDismiss: !0, toastClass: "toast", containerId: "toast-container", debug: !1, showMethod: "fadeIn", showDuration: 300, showEasing: "swing", onShown: void 0, hideMethod: "fadeOut", hideDuration: 1e3, hideEasing: "swing", onHidden: void 0, closeMethod: !1, closeDuration: !1, closeEasing: !1, closeOnHover: !0, extendedTimeOut: 1e3, iconClasses: { error: "toast-error", info: "toast-info", success: "toast-success", warning: "toast-warning" }, iconClass: "toast-info", positionClass: "toast-top-right", timeOut: 5e3, titleClass: "toast-title", messageClass: "toast-message", escapeHtml: !1, target: "body", closeHtml: '<button type="button">&times;</button>', closeClass: "toast-close-button", newestOnTop: !0, preventDuplicates: !1, progressBar: !1, progressClass: "toast-progress", rtl: !1 };
      }function f(e) {
        C && C(e);
      }function g(t) {
        function o(e) {
          return null == e && (e = ""), e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }function s() {
          c(), u(), d(), p(), g(), C(), l(), i();
        }function i() {
          var e = "";switch (t.iconClass) {case "toast-success":case "toast-info":
              e = "polite";break;default:
              e = "assertive";}I.attr("aria-live", e);
        }function a() {
          E.closeOnHover && I.hover(H, D), !E.onclick && E.tapToDismiss && I.click(b), E.closeButton && j && j.click(function (e) {
            e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && e.cancelBubble !== !0 && (e.cancelBubble = !0), E.onCloseClick && E.onCloseClick(e), b(!0);
          }), E.onclick && I.click(function (e) {
            E.onclick(e), b();
          });
        }function r() {
          I.hide(), I[E.showMethod]({ duration: E.showDuration, easing: E.showEasing, complete: E.onShown }), E.timeOut > 0 && (k = setTimeout(b, E.timeOut), F.maxHideTime = parseFloat(E.timeOut), F.hideEta = new Date().getTime() + F.maxHideTime, E.progressBar && (F.intervalId = setInterval(x, 10)));
        }function c() {
          t.iconClass && I.addClass(E.toastClass).addClass(y);
        }function l() {
          E.newestOnTop ? v.prepend(I) : v.append(I);
        }function u() {
          if (t.title) {
            var e = t.title;E.escapeHtml && (e = o(t.title)), M.append(e).addClass(E.titleClass), I.append(M);
          }
        }function d() {
          if (t.message) {
            var e = t.message;E.escapeHtml && (e = o(t.message)), B.append(e).addClass(E.messageClass), I.append(B);
          }
        }function p() {
          E.closeButton && (j.addClass(E.closeClass).attr("role", "button"), I.prepend(j));
        }function g() {
          E.progressBar && (q.addClass(E.progressClass), I.prepend(q));
        }function C() {
          E.rtl && I.addClass("rtl");
        }function O(e, t) {
          if (e.preventDuplicates) {
            if (t.message === w) return !0;w = t.message;
          }return !1;
        }function b(t) {
          var n = t && E.closeMethod !== !1 ? E.closeMethod : E.hideMethod,
              o = t && E.closeDuration !== !1 ? E.closeDuration : E.hideDuration,
              s = t && E.closeEasing !== !1 ? E.closeEasing : E.hideEasing;if (!e(":focus", I).length || t) return clearTimeout(F.intervalId), I[n]({ duration: o, easing: s, complete: function complete() {
              h(I), clearTimeout(k), E.onHidden && "hidden" !== P.state && E.onHidden(), P.state = "hidden", P.endTime = new Date(), f(P);
            } });
        }function D() {
          (E.timeOut > 0 || E.extendedTimeOut > 0) && (k = setTimeout(b, E.extendedTimeOut), F.maxHideTime = parseFloat(E.extendedTimeOut), F.hideEta = new Date().getTime() + F.maxHideTime);
        }function H() {
          clearTimeout(k), F.hideEta = 0, I.stop(!0, !0)[E.showMethod]({ duration: E.showDuration, easing: E.showEasing });
        }function x() {
          var e = (F.hideEta - new Date().getTime()) / F.maxHideTime * 100;q.width(e + "%");
        }var E = m(),
            y = t.iconClass || E.iconClass;if ("undefined" != typeof t.optionsOverride && (E = e.extend(E, t.optionsOverride), y = t.optionsOverride.iconClass || y), !O(E, t)) {
          T++, v = n(E, !0);var k = null,
              I = e("<div/>"),
              M = e("<div/>"),
              B = e("<div/>"),
              q = e("<div/>"),
              j = e(E.closeHtml),
              F = { intervalId: null, hideEta: null, maxHideTime: null },
              P = { toastId: T, state: "visible", startTime: new Date(), options: E, map: t };return s(), r(), a(), f(P), E.debug && console && console.log(P), I;
        }
      }function m() {
        return e.extend({}, p(), b.options);
      }function h(e) {
        v || (v = n()), e.is(":visible") || (e.remove(), e = null, 0 === v.children().length && (v.remove(), w = void 0));
      }var v,
          C,
          w,
          T = 0,
          O = { error: "error", info: "info", success: "success", warning: "warning" },
          b = { clear: r, remove: c, error: t, getContainer: n, info: o, options: {}, subscribe: s, success: i, version: "2.1.3", warning: a };return b;
    }();
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}(__webpack_require__(276));
//# sourceMappingURL=toastr.js.map

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, jQuery) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js__);
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
    name: "glyphicons",
    mounted: function mounted() {
        "use strict";

        $(document).ready(function () {

            $('#icon-search').on("input", function () {
                $(".bs-glyphicons").find(".glyphicon-class").each(function () {
                    var regex = new RegExp($("#icon-search").val().trim().toLowerCase());
                    var x = $(this).text();
                    var res = x.match(regex, "i");
                    if (res == null) {
                        $(this).closest("li").hide();
                    } else {
                        $(this).closest("li").show();
                    }
                });
            });
            jQuery.fn.outerHTML = function () {
                return jQuery('<div />').append(this.eq(0).clone()).html();
            };
            var icon_size = $("#icon-size");
            icon_size.on("input", function () {
                var x = parseInt(icon_size.val()) + parseInt(6);
                $(".fontnormal").html(".bs-glyphicons .glyphicon{font-size:" + icon_size.val() + "px;}.bs-glyphicons>li:hover>.glyphicon{font-size:" + x + "px;}");
                $(".icon-sizeshow").text(icon_size.val() + "px");
            });
            $("head").append("<style class='fontnormal'></style>");
            $(".bs-glyphicons>li").on("click", function () {
                var x = $(this).find(".glyphicon").outerHTML();
                copyTextToClipboard(x);
            });

            function copyTextToClipboard(text) {
                var textArea = document.createElement("textarea");
                textArea.value = text;
                document.body.appendChild(textArea).select();
                var successful = document.execCommand('copy');
                document.body.removeChild(textArea);
                __WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js___default.a.success('Element Copied to Clipboard. Now you can use it anywhere.');
            }
        });
    },
    destroyed: function destroyed() {}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0), __webpack_require__(0)))

/***/ }),

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.bs-glyphicons {\r\n    padding-left: 0;\r\n    padding-bottom: 1px;\r\n    margin-bottom: 20px;\r\n    list-style: none;\r\n    overflow: hidden;\n}\n.bs-glyphicons li {\r\n    float: left;\r\n    width: 25%;\r\n    height: 120px;\r\n    padding: 20px 10px;\r\n    font-size: 12px;\r\n    text-align: center;\r\n    transition: all .2s linear;\r\n    -o-transition: all .2s linear;\r\n    -moz-transition: all .2s linear;\r\n    -webkit-transition: all .2s linear;\n}\n@media only screen and (max-width: 660px) {\n.bs-glyphicons li {\r\n        height: 130px;\r\n        width: 50%;\n}\n}\n.bs-glyphicons li:hover {\r\n    background-color: #dcdcdc;\r\n    padding: 20px 10px;\r\n    transition: all .2s linear;\r\n    -o-transition: all .2s linear;\r\n    -moz-transition: all .2s linear;\r\n    -webkit-transition: all .2s linear;\n}\n.bs-glyphicons .glyphicon {\r\n    margin-top: 5px;\r\n    margin-bottom: 10px;\r\n    font-size: 24px;\r\n    color: #428bca;\n}\n.bs-glyphicons > li:hover > .glyphicon {\r\n    font-size: 30px;\n}\n.bs-glyphicons .glyphicon-class {\r\n    display: block;\r\n    text-align: center;\r\n    word-wrap: break-word;\n}\n.input-group {\r\n    width: 100%;\r\n    margin-bottom: 10px;\n}\n.input-group-addon.icon-sizeshow {\r\n    border: none;\r\n    background-color: transparent;\n}\n.input-group input[type=\"range\"] {\r\n    border: none;\r\n    box-shadow: none;\n}\n#icon-search {\r\n    border-radius: 17px !important;\n}\nform {\r\n    text-align: center;\r\n    padding: 10px;\n}\ninput[type=\"range\"] {\r\n    cursor: pointer;\n}\r\n", ""]);

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.toast-title{font-weight:700\n}\n.toast-message{-ms-word-wrap:break-word;word-wrap:break-word\n}\n.toast-message a,.toast-message label{color:#FFF\n}\n.toast-message a:hover{color:#CCC;text-decoration:none\n}\n.toast-close-button{position:relative;right:-.3em;top:-.3em;float:right;font-size:20px;font-weight:700;color:#FFF;-webkit-text-shadow:0 1px 0 #fff;text-shadow:0 1px 0 #fff;opacity:.8;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=80);filter:alpha(opacity=80);line-height:1\n}\n.toast-close-button:focus,.toast-close-button:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.4;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=40);filter:alpha(opacity=40)\n}\n.rtl .toast-close-button{left:-.3em;float:left;right:.3em\n}\nbutton.toast-close-button{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none\n}\n.toast-top-center{top:0;right:0;width:100%\n}\n.toast-bottom-center{bottom:0;right:0;width:100%\n}\n.toast-top-full-width{top:0;right:0;width:100%\n}\n.toast-bottom-full-width{bottom:0;right:0;width:100%\n}\n.toast-top-left{top:12px;left:12px\n}\n.toast-top-right{top:12px;right:12px\n}\n.toast-bottom-right{right:12px;bottom:12px\n}\n.toast-bottom-left{bottom:12px;left:12px\n}\n#toast-container{position:fixed;z-index:999999;pointer-events:none\n}\n#toast-container *{box-sizing:border-box\n}\n#toast-container>div{position:relative;pointer-events:auto;overflow:hidden;margin:0 0 6px;padding:15px 15px 15px 50px;width:300px;border-radius:3px;background-position:15px center;background-repeat:no-repeat;box-shadow:0 0 12px #999;color:#FFF;opacity:.8;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=80);filter:alpha(opacity=80)\n}\n#toast-container>div.rtl{direction:rtl;padding:15px 50px 15px 15px;background-position:right 15px center\n}\n#toast-container>div:hover{box-shadow:0 0 12px #000;opacity:1;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);filter:alpha(opacity=100);cursor:pointer\n}\n#toast-container>.toast-info{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=)!important\n}\n#toast-container>.toast-error{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=)!important\n}\n#toast-container>.toast-success{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==)!important\n}\n#toast-container>.toast-warning{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=)!important\n}\n#toast-container.toast-bottom-center>div,#toast-container.toast-top-center>div{width:300px;margin-left:auto;margin-right:auto\n}\n#toast-container.toast-bottom-full-width>div,#toast-container.toast-top-full-width>div{width:96%;margin-left:auto;margin-right:auto\n}\n.toast{background-color:#030303\n}\n.toast-success{background-color:#51A351\n}\n.toast-error{background-color:#BD362F\n}\n.toast-info{background-color:#2F96B4\n}\n.toast-warning{background-color:#F89406\n}\n.toast-progress{position:absolute;left:0;bottom:0;height:4px;background-color:#000;opacity:.4;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=40);filter:alpha(opacity=40)\n}\n@media all and (max-width:240px){\n#toast-container>div{padding:8px 8px 8px 50px;width:11em\n}\n#toast-container>div.rtl{padding:8px 50px 8px 8px\n}\n#toast-container .toast-close-button{right:-.2em;top:-.2em\n}\n#toast-container .rtl .toast-close-button{left:-.2em;right:.2em\n}\n}\n@media all and (min-width:241px) and (max-width:480px){\n#toast-container>div{padding:8px 8px 8px 50px;width:18em\n}\n#toast-container>div.rtl{padding:8px 50px 8px 8px\n}\n#toast-container .toast-close-button{right:-.2em;top:-.2em\n}\n#toast-container .rtl .toast-close-button{left:-.2em;right:.2em\n}\n}\n@media all and (min-width:481px) and (max-width:768px){\n#toast-container>div{padding:15px 15px 15px 50px;width:25em\n}\n#toast-container>div.rtl{padding:15px 50px 15px 15px\n}\n}", ""]);

/***/ }),

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "panel"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-font"
  }), _vm._v(" Glyphicons\n                ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6 col-md-offset-3"
  }, [_c('form', {
    attrs: {
      "role": "form"
    }
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('label', {
    staticClass: "sr-only",
    attrs: {
      "for": "icon-search"
    }
  }, [_vm._v("Search")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "icon-search",
      "id": "icon-search",
      "placeholder": "Search Icon"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('label', {
    staticClass: "sr-only",
    attrs: {
      "for": "icon-size"
    }
  }, [_vm._v("Size")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "range",
      "name": "icon-size",
      "id": "icon-size",
      "min": "24",
      "max": "40",
      "value": "24"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-group-addon icon-sizeshow"
  }, [_vm._v("24px")])])])])]), _vm._v(" "), _c('h4', {
    staticClass: "text-center"
  }, [_vm._v("Click on any icon to copy its code to clipboard.")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    attrs: {
      "id": "glyphicons"
    }
  }, [_c('h3', [_vm._v("\n                                Glyphicons provided by Bootstrap\n                            ")]), _vm._v(" "), _c('ul', {
    staticClass: "bs-glyphicons"
  }, [_c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-adjust"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-adjust\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-align-center"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-align-center\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-align-justify"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-align-justify\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-align-left"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-align-left\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-align-right"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-align-right\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-arrow-down"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-arrow-down\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-arrow-left"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-arrow-left\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-arrow-right"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-arrow-right\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-arrow-up"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-arrow-up\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-asterisk"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-asterisk\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-backward"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-backward\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-ban-circle"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-ban-circle\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-barcode"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-barcode\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-bell"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-bell\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-bold"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-bold\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-book"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-book\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-bookmark"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-bookmark\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-briefcase"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-briefcase\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-bullhorn"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-bullhorn\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-calendar"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-calendar\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-camera"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-camera\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-certificate"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-certificate\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-check"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-check\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-chevron-down"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-chevron-down\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-chevron-left"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-chevron-left\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-chevron-right"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-chevron-right\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-chevron-up"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-chevron-up\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-circle-arrow-down"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-circle-arrow-down\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-circle-arrow-left"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-circle-arrow-left\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-circle-arrow-right"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-circle-arrow-right\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-circle-arrow-up"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-circle-arrow-up\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-cloud"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-cloud\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-cloud-download"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-cloud-download\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-cloud-upload"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-cloud-upload\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-cog"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-cog\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-collapse-down"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-collapse-down\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-collapse-up"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-collapse-up\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-comment"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-comment\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-compressed"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-compressed\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-copyright-mark"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-copyright-mark\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-credit-card"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-credit-card\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-cutlery"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-cutlery\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-dashboard"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-dashboard\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-download"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-download\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-download-alt"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-download-alt\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-earphone"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-earphone\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-edit"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-edit\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-eject"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-eject\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-envelope"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-envelope\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-euro"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-euro\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-exclamation-sign"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-exclamation-sign\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-expand"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-expand\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-export"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-export\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-eye-close"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-eye-close\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-eye-open"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-eye-open\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-facetime-video"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-facetime-video\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-fast-backward"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-fast-backward\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-fast-forward"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-fast-forward\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-file"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-file\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-film"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-film\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-filter"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-filter\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-fire"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-fire\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-flag"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-flag\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-flash"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-flash\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-floppy-disk"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-floppy-disk\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-floppy-open"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-floppy-open\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-floppy-remove"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-floppy-remove\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-floppy-save"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-floppy-save\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-floppy-saved"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-floppy-saved\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-folder-close"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-folder-close\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-folder-open"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-folder-open\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-font"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-font\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-forward"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-forward\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-fullscreen"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-fullscreen\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-gbp"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-gbp\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-gift"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-gift\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-glass"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-glass\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-globe"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-globe\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-hand-down"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-hand-down\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-hand-left"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-hand-left\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-hand-right"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-hand-right\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-hand-up"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-hand-up\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-hd-video"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-hd-video\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-hdd"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-hdd\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-header"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-header\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-headphones"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-headphones\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-heart"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-heart\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-heart-empty"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-heart-empty\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-home"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-home\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-import"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-import\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-inbox"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-inbox\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-indent-left"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-indent-left\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-indent-right"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-indent-right\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-info-sign"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-info-sign\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-italic"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-italic\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-leaf"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-leaf\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-link"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-link\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-list"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-list\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-list-alt"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-list-alt\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-lock"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-lock\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-log-in"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-log-in\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-log-out"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-log-out\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-magnet"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-magnet\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-map-marker"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-map-marker\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-minus"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-minus\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-minus-sign"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-minus-sign\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-move"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-move\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-music"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-music\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-new-window"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-new-window\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-off"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-off\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-ok"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-ok\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-ok-circle"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-ok-circle\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-ok-sign"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-ok-sign\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-open"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-open\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-paperclip"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-paperclip\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-pause"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-pause\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-pencil"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-pencil\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-phone"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-phone\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-phone-alt"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-phone-alt\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-picture"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-picture\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-plane"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-plane\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-play"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-play\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-play-circle"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-play-circle\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-plus"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-plus\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-plus-sign"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-plus-sign\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-print"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-print\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-pushpin"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-pushpin\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-qrcode"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-qrcode\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-question-sign"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-question-sign\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-random"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-random\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-record"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-record\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-refresh"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-refresh\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-registration-mark"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-registration-mark\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-remove"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-remove\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-remove-circle"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-remove-circle\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-remove-sign"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-remove-sign\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-repeat"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-repeat\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-resize-full"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-resize-full\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-resize-horizontal"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-resize-horizontal\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-resize-small"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-resize-small\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-resize-vertical"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-resize-vertical\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-retweet"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-retweet\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-road"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-road\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-save"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-save\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-saved"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-saved\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-screenshot"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-screenshot\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-sd-video"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-sd-video\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-search"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-search\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-send"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-send\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-share"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-share\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-share-alt"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-share-alt\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-shopping-cart"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-shopping-cart\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-signal"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-signal\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-sort"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-sort\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-sort-by-alphabet"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-sort-by-alphabet\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-sort-by-alphabet-alt"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-sort-by-alphabet-alt\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-sort-by-attributes"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-sort-by-attributes\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-sort-by-attributes-alt"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-sort-by-attributes-alt\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-sort-by-order"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-sort-by-order\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-sort-by-order-alt"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-sort-by-order-alt\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-sound-5-1"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-sound-5-1\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-sound-6-1"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-sound-6-1\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-sound-7-1"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-sound-7-1\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-sound-dolby"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-sound-dolby\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-sound-stereo"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-sound-stereo\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-star"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-star\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-star-empty"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-star-empty\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-stats"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-stats\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-step-backward"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-step-backward\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-step-forward"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-step-forward\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-stop"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-stop\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-subtitles"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-subtitles\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-tag"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-tag\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-tags"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-tags\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-tasks"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-tasks\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-text-height"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-text-height\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-text-width"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-text-width\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-th"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-th\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-th-large"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-th-large\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-th-list"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-th-list\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-thumbs-down"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-thumbs-down\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-thumbs-up"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-thumbs-up\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-time"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-time\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-tint"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-tint\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-tower"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-tower\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-transfer"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-transfer\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-trash"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-trash\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-tree-conifer"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-tree-conifer\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-tree-deciduous"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-tree-deciduous\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-unchecked"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-unchecked\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-upload"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-upload\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-usd"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-usd\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-user"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-user\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-volume-down"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-volume-down\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-volume-off"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-volume-off\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-volume-up"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-volume-up\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-warning-sign"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-warning-sign\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-wrench"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-wrench\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-zoom-in"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-zoom-in\n                                                ")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "glyphicon glyphicon-zoom-out"
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon-class"
  }, [_vm._v("\n                                                    glyphicon glyphicon-zoom-out\n                                                ")])])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e0bd0cd4", module.exports)
  }
}

/***/ })

});