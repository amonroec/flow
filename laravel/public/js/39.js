webpackJsonp([39],{

/***/ 1002:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(663);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1748a901", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-8960f7fa\",\"scoped\":false,\"hasInlineConfig\":true}!./simple_themify.css", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-8960f7fa\",\"scoped\":false,\"hasInlineConfig\":true}!./simple_themify.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1003:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(664);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("767424e5", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-8960f7fa\",\"scoped\":false,\"hasInlineConfig\":true}!./toastr.min.css", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-8960f7fa\",\"scoped\":false,\"hasInlineConfig\":true}!./toastr.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1003)
__webpack_require__(1002)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(437),
  /* template */
  __webpack_require__(859),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Sites/vue_workflows/laravel/resources/assets/js/components/components/themify_icons.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] themify_icons.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8960f7fa", Component.options)
  } else {
    hotAPI.reload("data-v-8960f7fa", Component.options)
  }
})()}

module.exports = Component.exports


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

/***/ 437:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "themify_icons",
    mounted: function mounted() {
        "use strict";

        $(document).ready(function () {
            $('#icon-search').on("input", function () {
                $(".icon-name").each(function () {
                    var regex = new RegExp($("#icon-search").val().trim().toLowerCase());
                    var x = $(this).text();
                    var res = x.match(regex, "i");
                    if (res == null) {
                        $(this).closest(".icon-preview-box").hide();
                    } else {
                        $(this).closest(".icon-preview-box").show();
                    }
                });
            });
            jQuery.fn.outerHTML = function () {
                return jQuery('<div />').append(this.eq(0).clone()).html();
            };
            var icon_size = $("#icon-size");
            icon_size.on("input", function () {
                var x = parseInt(icon_size.val()) + parseInt(6);
                $(".fontnormal").html(".preview span[class|=ti]{font-size:" + icon_size.val() + "px;}.preview:hover span[class|=ti]{font-size:" + x + "px;}");
                $(".icon-sizeshow").text(icon_size.val() + "px");
            });
            $("head").append("<style class='fontnormal'></style>");
            $(".preview").on("click", function () {
                var x = $(this).find("span[class|=ti]").outerHTML();
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

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.input-group {\r\n    width: 100%;\r\n    margin-bottom: 10px;\n}\n.input-group-addon.icon-sizeshow {\r\n    border: none;\r\n    background-color: transparent;\n}\n.input-group input[type=\"range\"] {\r\n    border: none;\r\n    box-shadow: none;\n}\n#icon-search {\r\n    border-radius: 17px !important;\n}\nform {\r\n    text-align: center;\r\n    padding: 10px;\n}\ninput[type=\"range\"] {\r\n    cursor: pointer;\n}\n.name {\r\n    display: block;\n}\n.preview {\r\n    padding: 30px 10px;\r\n    font-size: 12px;\r\n    height: 120px;\r\n    transition: all .2s linear;\r\n    -o-transition: all .2s linear;\r\n    -moz-transition: all .2s linear;\r\n    -webkit-transition: all .2s linear;\n}\n.preview:hover {\r\n    background-color: #DCDCDC;\r\n    transition: all .2s linear;\r\n    -o-transition: all .2s linear;\r\n    -moz-transition: all .2s linear;\r\n    -webkit-transition: all .2s linear;\n}\n.preview span[class|=ti] {\r\n    display: block;\n}\n.preview i,\r\n.preview span[class|=ti] {\r\n    color: #428BCA;\r\n    font-size: 24px;\n}\n.preview:hover i,\r\n.preview:hover span[class|=ti] {\r\n    font-size: 30px;\n}\r\n", ""]);

/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.toast-title{font-weight:700\n}\n.toast-message{-ms-word-wrap:break-word;word-wrap:break-word\n}\n.toast-message a,.toast-message label{color:#FFF\n}\n.toast-message a:hover{color:#CCC;text-decoration:none\n}\n.toast-close-button{position:relative;right:-.3em;top:-.3em;float:right;font-size:20px;font-weight:700;color:#FFF;-webkit-text-shadow:0 1px 0 #fff;text-shadow:0 1px 0 #fff;opacity:.8;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=80);filter:alpha(opacity=80);line-height:1\n}\n.toast-close-button:focus,.toast-close-button:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.4;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=40);filter:alpha(opacity=40)\n}\n.rtl .toast-close-button{left:-.3em;float:left;right:.3em\n}\nbutton.toast-close-button{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none\n}\n.toast-top-center{top:0;right:0;width:100%\n}\n.toast-bottom-center{bottom:0;right:0;width:100%\n}\n.toast-top-full-width{top:0;right:0;width:100%\n}\n.toast-bottom-full-width{bottom:0;right:0;width:100%\n}\n.toast-top-left{top:12px;left:12px\n}\n.toast-top-right{top:12px;right:12px\n}\n.toast-bottom-right{right:12px;bottom:12px\n}\n.toast-bottom-left{bottom:12px;left:12px\n}\n#toast-container{position:fixed;z-index:999999;pointer-events:none\n}\n#toast-container *{box-sizing:border-box\n}\n#toast-container>div{position:relative;pointer-events:auto;overflow:hidden;margin:0 0 6px;padding:15px 15px 15px 50px;width:300px;border-radius:3px;background-position:15px center;background-repeat:no-repeat;box-shadow:0 0 12px #999;color:#FFF;opacity:.8;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=80);filter:alpha(opacity=80)\n}\n#toast-container>div.rtl{direction:rtl;padding:15px 50px 15px 15px;background-position:right 15px center\n}\n#toast-container>div:hover{box-shadow:0 0 12px #000;opacity:1;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);filter:alpha(opacity=100);cursor:pointer\n}\n#toast-container>.toast-info{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=)!important\n}\n#toast-container>.toast-error{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=)!important\n}\n#toast-container>.toast-success{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==)!important\n}\n#toast-container>.toast-warning{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=)!important\n}\n#toast-container.toast-bottom-center>div,#toast-container.toast-top-center>div{width:300px;margin-left:auto;margin-right:auto\n}\n#toast-container.toast-bottom-full-width>div,#toast-container.toast-top-full-width>div{width:96%;margin-left:auto;margin-right:auto\n}\n.toast{background-color:#030303\n}\n.toast-success{background-color:#51A351\n}\n.toast-error{background-color:#BD362F\n}\n.toast-info{background-color:#2F96B4\n}\n.toast-warning{background-color:#F89406\n}\n.toast-progress{position:absolute;left:0;bottom:0;height:4px;background-color:#000;opacity:.4;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=40);filter:alpha(opacity=40)\n}\n@media all and (max-width:240px){\n#toast-container>div{padding:8px 8px 8px 50px;width:11em\n}\n#toast-container>div.rtl{padding:8px 50px 8px 8px\n}\n#toast-container .toast-close-button{right:-.2em;top:-.2em\n}\n#toast-container .rtl .toast-close-button{left:-.2em;right:.2em\n}\n}\n@media all and (min-width:241px) and (max-width:480px){\n#toast-container>div{padding:8px 8px 8px 50px;width:18em\n}\n#toast-container>div.rtl{padding:8px 50px 8px 8px\n}\n#toast-container .toast-close-button{right:-.2em;top:-.2em\n}\n#toast-container .rtl .toast-close-button{left:-.2em;right:.2em\n}\n}\n@media all and (min-width:481px) and (max-width:768px){\n#toast-container>div{padding:15px 15px 15px 50px;width:25em\n}\n#toast-container>div.rtl{padding:15px 50px 15px 15px\n}\n}", ""]);

/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "panel"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-font"
  }), _vm._v(" Themify Icons\n                ")]), _vm._v(" "), _c('span', {
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
    staticClass: "text-center"
  }, [_c('h3', {
    staticClass: "text-left"
  }, [_vm._v("\n                                Themify Icons\n                            ")]), _vm._v(" "), _c('div', {
    staticClass: "icon-section"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h3', [_vm._v("Arrows & Direction Icons ")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-arrow-up"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-arrow-up")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-arrow-right"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-arrow-right")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-arrow-left"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-arrow-left")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-arrow-down"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-arrow-down")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-arrows-vertical"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-arrows-vertical")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-arrows-horizontal"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-arrows-horizontal")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-angle-up"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-angle-up")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-angle-right"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-angle-right")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-angle-left"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-angle-left")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-angle-down"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-angle-down")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-angle-double-up"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-angle-double-up")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-angle-double-right"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-angle-double-right")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-angle-double-left"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-angle-double-left")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-angle-double-down"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-angle-double-down")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-move"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-move")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-fullscreen"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-fullscreen")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-arrow-top-right"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-arrow-top-right")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-arrow-top-left"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-arrow-top-left")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-arrow-circle-up"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-arrow-circle-up")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-arrow-circle-right"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-arrow-circle-right")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-arrow-circle-left"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-arrow-circle-left")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-arrow-circle-down"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-arrow-circle-down")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-arrows-corner"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-arrows-corner")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-split-v"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-split-v")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-split-v-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-split-v-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-split-h"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-split-h")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-hand-point-up"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-hand-point-up")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-hand-point-right"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-hand-point-right")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-hand-point-left"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-hand-point-left")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-hand-point-down"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-hand-point-down")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-back-right"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-back-right")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-back-left"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-back-left")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-exchange-vertical"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-exchange-vertical")])])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-section"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h3', [_vm._v("Web App Icons")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-wand"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-wand")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-save"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-save")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-save-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-save-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-direction"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-direction")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-direction-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-direction-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-user"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-user")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-link"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-link")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-unlink"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-unlink")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-trash"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-trash")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-target"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-target")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-tag"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-tag")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-desktop"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-desktop")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-tablet"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-tablet")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-mobile"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-mobile")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-email"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-email")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-star"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-star")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-spray"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-spray")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-signal"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-signal")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-shopping-cart"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-shopping-cart")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-shopping-cart-full"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-shopping-cart-full")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-settings"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-settings")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-search"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-search")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-zoom-in"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-zoom-in")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-zoom-out"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-zoom-out")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-cut"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-cut")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-ruler"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-ruler")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-ruler-alt-2"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-ruler-alt-2")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-ruler-pencil"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-ruler-pencil")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-ruler-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-ruler-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-bookmark"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-bookmark")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-bookmark-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-bookmark-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-reload"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-reload")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-plus"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-plus")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-minus"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-minus")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-close"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-close")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-pin"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-pin")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-pencil"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-pencil")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-pencil-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-pencil-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-paint-roller"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-paint-roller")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-paint-bucket"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-paint-bucket")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-na"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-na")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-medall"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-medall")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-medall-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-medall-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-marker"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-marker")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-marker-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-marker-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-lock"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-lock")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-unlock"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-unlock")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-location-arrow"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-location-arrow")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layers"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layers")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layers-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layers-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-key"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-key")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-image"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-image")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-heart"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-heart")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-heart-broken"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-heart-broken")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-hand-stop"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-hand-stop")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-hand-open"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-hand-open")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-hand-drag"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-hand-drag")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-flag"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-flag")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-flag-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-flag-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-flag-alt-2"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-flag-alt-2")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-eye"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-eye")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-import"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-import")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-export"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-export")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-cup"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-cup")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-crown"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-crown")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-comments"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-comments")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-comment"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-comment")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-comment-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-comment-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-thought"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-thought")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-clip"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-clip")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-check"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-check")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-check-box"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-check-box")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-camera"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-camera")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-announcement"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-announcement")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-brush"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-brush")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-brush-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-brush-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-palette"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-palette")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-briefcase"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-briefcase")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-bolt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-bolt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-bolt-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-bolt-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-blackboard"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-blackboard")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-bag"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-bag")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-world"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-world")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-wheelchair"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-wheelchair")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-car"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-car")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-truck"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-truck")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-timer"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-timer")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-ticket"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-ticket")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-thumb-up"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-thumb-up")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-thumb-down"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-thumb-down")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-stats-up"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-stats-up")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-stats-down"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-stats-down")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-shine"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-shine")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-shift-right"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-shift-right")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-shift-left"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-shift-left")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-shift-right-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-shift-right-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-shift-left-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-shift-left-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-shield"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-shield")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-notepad"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-notepad")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-server"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-server")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-pulse"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-pulse")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-printer"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-printer")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-power-off"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-power-off")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-plug"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-plug")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-pie-chart"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-pie-chart")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-panel"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-panel")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-package"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-package")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-music"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-music")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-music-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-music-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-mouse"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-mouse")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-mouse-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-mouse-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-money"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-money")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-microphone"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-microphone")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-menu"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-menu")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-menu-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-menu-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-map"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-map")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-map-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-map-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-location-pin"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-location-pin")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-light-bulb"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-light-bulb")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-info"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-info")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-infinite"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-infinite")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-id-badge"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-id-badge")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-hummer"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-hummer")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-home"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-home")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-help"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-help")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-headphone"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-headphone")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-harddrives"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-harddrives")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-harddrive"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-harddrive")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-gift"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-gift")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-game"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-game")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-filter"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-filter")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-files"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-files")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-file"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-file")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-zip"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-zip")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-folder"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-folder")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-envelope"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-envelope")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-dashboard"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-dashboard")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-cloud"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-cloud")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-cloud-up"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-cloud-up")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-cloud-down"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-cloud-down")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-clipboard"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-clipboard")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-calendar"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-calendar")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-book"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-book")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-bell"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-bell")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-basketball"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-basketball")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-bar-chart"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-bar-chart")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-bar-chart-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-bar-chart-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-archive"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-archive")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-anchor"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-anchor")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-alert"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-alert")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-alarm-clock"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-alarm-clock")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-agenda"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-agenda")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-write"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-write")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-wallet"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-wallet")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-video-clapper"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-video-clapper")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-video-camera"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-video-camera")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-control-skip-forward"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-control-skip-forward")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-support"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-support")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-stamp"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-stamp")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-slice"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-slice")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-shortcode"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-shortcode")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-receipt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-receipt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-pin2"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-pin2")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-pin-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-pin-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-pencil-alt2"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-pencil-alt2")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-eraser"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-eraser")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-more"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-more")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-more-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-more-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-microphone-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-microphone-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-magnet"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-magnet")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-line-double"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-line-double")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-line-dotted"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-line-dotted")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-line-dashed"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-line-dashed")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-ink-pen"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-ink-pen")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-info-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-info-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-help-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-help-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-headphone-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-headphone-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-gallery"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-gallery")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-face-smile"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-face-smile")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-face-sad"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-face-sad")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-credit-card"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-credit-card")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-comments-smiley"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-comments-smiley")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-time"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-time")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-share"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-share")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-share-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-share-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-rocket"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-rocket")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-new-window"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-new-window")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-rss"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-rss")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-rss-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-rss-alt")])])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-section"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h3', [_vm._v("Control Icons")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-control-stop"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-control-stop")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-control-shuffle"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-control-shuffle")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-control-play"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-control-play")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-control-pause"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-control-pause")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-control-forward"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-control-forward")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-control-backward"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-control-backward")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-volume"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-volume")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-control-skip-forward"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-control-skip-forward")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-control-skip-backward"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-control-skip-backward")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-control-record"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-control-record")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-control-eject"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-control-eject")])])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-section"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h3', [_vm._v("Text Editor")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-paragraph"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-paragraph")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-uppercase"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-uppercase")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-underline"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-underline")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-text"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-text")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-Italic"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-Italic")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-smallcap"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-smallcap")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-list"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-list")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-list-ol"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-list-ol")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-align-right"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-align-right")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-align-left"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-align-left")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-align-justify"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-align-justify")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-align-center"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-align-center")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-quote-right"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-quote-right")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-quote-left"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-quote-left")])])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-section"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h3', [_vm._v("Layout Icons")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-width-full"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-width-full")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-width-default"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-width-default")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-width-default-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-width-default-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-tab"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-tab")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-tab-window"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-tab-window")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-tab-v"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-tab-v")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-tab-min"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-tab-min")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-slider"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-slider")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-slider-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-slider-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-sidebar-right"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-sidebar-right")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-sidebar-none"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-sidebar-none")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-sidebar-left"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-sidebar-left")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-placeholder"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-placeholder")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-menu"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-menu")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-menu-v"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-menu-v")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-menu-separated"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-menu-separated")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-menu-full"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-menu-full")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-media-right"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-media-right")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-media-right-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-media-right-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-media-overlay"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-media-overlay")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-media-overlay-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-media-overlay-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-media-overlay-alt-2"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-media-overlay-alt-2")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-media-left"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-media-left")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-media-left-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-media-left-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-media-center"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-media-center")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-media-center-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-media-center-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-list-thumb"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-list-thumb")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-list-thumb-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-list-thumb-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-list-post"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-list-post")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-list-large-image"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-list-large-image")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-line-solid"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-line-solid")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-grid4"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-grid4")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-grid3"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-grid3")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-grid2"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-grid2")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-grid2-thumb"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-grid2-thumb")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-cta-right"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-cta-right")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-cta-left"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-cta-left")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-cta-center"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-cta-center")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-cta-btn-right"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-cta-btn-right")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-cta-btn-left"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-cta-btn-left")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-column4"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-column4")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-column3"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-column3")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-column2"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-column2")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-accordion-separated"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-accordion-separated")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-accordion-merged"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-accordion-merged")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-accordion-list"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-accordion-list")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-widgetized"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-widgetized")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-widget"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-widget")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-widget-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-widget-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-view-list"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-view-list")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-view-list-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-view-list-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-view-grid"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-view-grid")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-upload"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-upload")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-download"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-download")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-loop"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-loop")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-sidebar-2"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-sidebar-2")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-grid4-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-grid4-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-grid3-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-grid3-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-grid2-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-grid2-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-column4-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-column4-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-column3-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-column3-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-layout-column2-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-layout-column2-alt")])])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-section"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h3', [_vm._v("Brand Icons")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-flickr"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-flickr")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-flickr-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-flickr-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-instagram"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-instagram")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-google"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-google")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-github"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-github")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-facebook"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-facebook")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-dropbox"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-dropbox")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-dropbox-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-dropbox-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-dribbble"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-dribbble")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-apple"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-apple")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-android"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-android")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-yahoo"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-yahoo")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-trello"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-trello")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-stack-overflow"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-stack-overflow")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-soundcloud"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-soundcloud")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-sharethis"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-sharethis")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-sharethis-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-sharethis-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-reddit"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-reddit")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-microsoft"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-microsoft")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-microsoft-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-microsoft-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-linux"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-linux")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-jsfiddle"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-jsfiddle")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-joomla"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-joomla")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-html5"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-html5")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-css3"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-css3")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-drupal"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-drupal")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-wordpress"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-wordpress")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-tumblr"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-tumblr")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-tumblr-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-tumblr-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-skype"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-skype")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-youtube"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-youtube")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-vimeo"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-vimeo")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-vimeo-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-vimeo-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-twitter"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-twitter")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-twitter-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-twitter-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-linkedin"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-linkedin")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-pinterest"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-pinterest")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-pinterest-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-pinterest-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-themify-logo"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-themify-logo")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-themify-favicon"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-themify-favicon")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('span', {
    staticClass: "ti-themify-favicon-alt"
  }), _c('span', {
    staticClass: "icon-name"
  }, [_vm._v(" ti-themify-favicon-alt")])])])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8960f7fa", module.exports)
  }
}

/***/ })

});