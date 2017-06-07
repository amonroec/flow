webpackJsonp([18],{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(919)
__webpack_require__(920)
__webpack_require__(918)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(432),
  /* template */
  __webpack_require__(819),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Sites/vue_workflows/laravel/resources/assets/js/components/components/simple_line_icons.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] simple_line_icons.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b8571c4", Component.options)
  } else {
    hotAPI.reload("data-v-2b8571c4", Component.options)
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

/***/ 278:
/***/ (function(module, exports) {

module.exports = "/fonts/Simple-Line-Icons.eot?f33df365d6d0255b586f2920355e94d7";

/***/ }),

/***/ 301:
/***/ (function(module, exports) {

module.exports = "/fonts/Simple-Line-Icons.svg?2fe2efe63441d830b1acd106c1fe8734";

/***/ }),

/***/ 302:
/***/ (function(module, exports) {

module.exports = "/fonts/Simple-Line-Icons.ttf?d2285965fe34b05465047401b8595dd0";

/***/ }),

/***/ 303:
/***/ (function(module, exports) {

module.exports = "/fonts/Simple-Line-Icons.woff2?0cb0b9c589c0624c9c78dd3d83e946f6";

/***/ }),

/***/ 304:
/***/ (function(module, exports) {

module.exports = "/fonts/Simple-Line-Icons.woff?78f07e2c2a535c26ef21d95e41bd7175";

/***/ }),

/***/ 432:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    name: "blank",
    mounted: function mounted() {
        "use strict";

        $(document).ready(function () {
            $('#icon-search').on("input", function () {
                $(".name").each(function () {
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
                $(".fontnormal").html(".preview i{font-size:" + icon_size.val() + "px;}.preview:hover i{font-size:" + x + "px;}");
                $(".icon-sizeshow").text(icon_size.val() + "px");
            });
            $("head").append("<style class='fontnormal'></style>");
            $(".preview").on("click", function () {
                var x = $(this).find("i").outerHTML();
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

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.input-group {\r\n    width: 100%;\r\n    margin-bottom: 10px;\n}\n.input-group-addon.icon-sizeshow {\r\n    border: none;\r\n    background-color: transparent;\n}\n.input-group input[type=\"range\"] {\r\n    border: none;\r\n    box-shadow: none;\n}\n#icon-search {\r\n    border-radius: 17px !important;\n}\nform {\r\n    text-align: center;\r\n    padding: 10px;\n}\ninput[type=\"range\"] {\r\n    cursor: pointer;\n}\n.name {\r\n    display: block;\n}\n.preview {\r\n    padding: 30px 10px;\r\n    font-size: 12px;\r\n    height: 120px;\r\n    transition: all .2s linear;\r\n    -o-transition: all .2s linear;\r\n    -moz-transition: all .2s linear;\r\n    -webkit-transition: all .2s linear;\n}\n.preview:hover {\r\n    background-color: #DCDCDC;\r\n    transition: all .2s linear;\r\n    -o-transition: all .2s linear;\r\n    -moz-transition: all .2s linear;\r\n    -webkit-transition: all .2s linear;\n}\n.preview span[class|=ti] {\r\n    display: block;\n}\n.preview i,\r\n.preview span[class|=ti] {\r\n    color: #428BCA;\r\n    font-size: 24px;\n}\n.preview:hover i,\r\n.preview:hover span[class|=ti] {\r\n    font-size: 30px;\n}\r\n", ""]);

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n@font-face {\n  font-family: 'simple-line-icons';\n  src: url("+__webpack_require__(278)+");\n  src: url("+__webpack_require__(278)+"#iefix) format('embedded-opentype'), url("+__webpack_require__(303)+") format('woff2'), url("+__webpack_require__(302)+") format('truetype'), url("+__webpack_require__(304)+") format('woff'), url("+__webpack_require__(301)+"#simple-line-icons) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n/*\n Use the following CSS code if you want to have a class per icon.\n Instead of a list of all class selectors, you can use the generic [class*=\"icon-\"] selector, but it's slower:\n*/\n.icon-user,\n.icon-people,\n.icon-user-female,\n.icon-user-follow,\n.icon-user-following,\n.icon-user-unfollow,\n.icon-login,\n.icon-logout,\n.icon-emotsmile,\n.icon-phone,\n.icon-call-end,\n.icon-call-in,\n.icon-call-out,\n.icon-map,\n.icon-location-pin,\n.icon-direction,\n.icon-directions,\n.icon-compass,\n.icon-layers,\n.icon-menu,\n.icon-list,\n.icon-options-vertical,\n.icon-options,\n.icon-arrow-down,\n.icon-arrow-left,\n.icon-arrow-right,\n.icon-arrow-up,\n.icon-arrow-up-circle,\n.icon-arrow-left-circle,\n.icon-arrow-right-circle,\n.icon-arrow-down-circle,\n.icon-check,\n.icon-clock,\n.icon-plus,\n.icon-minus,\n.icon-close,\n.icon-event,\n.icon-exclamation,\n.icon-organization,\n.icon-trophy,\n.icon-screen-smartphone,\n.icon-screen-desktop,\n.icon-plane,\n.icon-notebook,\n.icon-mustache,\n.icon-mouse,\n.icon-magnet,\n.icon-energy,\n.icon-disc,\n.icon-cursor,\n.icon-cursor-move,\n.icon-crop,\n.icon-chemistry,\n.icon-speedometer,\n.icon-shield,\n.icon-screen-tablet,\n.icon-magic-wand,\n.icon-hourglass,\n.icon-graduation,\n.icon-ghost,\n.icon-game-controller,\n.icon-fire,\n.icon-eyeglass,\n.icon-envelope-open,\n.icon-envelope-letter,\n.icon-bell,\n.icon-badge,\n.icon-anchor,\n.icon-wallet,\n.icon-vector,\n.icon-speech,\n.icon-puzzle,\n.icon-printer,\n.icon-present,\n.icon-playlist,\n.icon-pin,\n.icon-picture,\n.icon-handbag,\n.icon-globe-alt,\n.icon-globe,\n.icon-folder-alt,\n.icon-folder,\n.icon-film,\n.icon-feed,\n.icon-drop,\n.icon-drawer,\n.icon-docs,\n.icon-doc,\n.icon-diamond,\n.icon-cup,\n.icon-calculator,\n.icon-bubbles,\n.icon-briefcase,\n.icon-book-open,\n.icon-basket-loaded,\n.icon-basket,\n.icon-bag,\n.icon-action-undo,\n.icon-action-redo,\n.icon-wrench,\n.icon-umbrella,\n.icon-trash,\n.icon-tag,\n.icon-support,\n.icon-frame,\n.icon-size-fullscreen,\n.icon-size-actual,\n.icon-shuffle,\n.icon-share-alt,\n.icon-share,\n.icon-rocket,\n.icon-question,\n.icon-pie-chart,\n.icon-pencil,\n.icon-note,\n.icon-loop,\n.icon-home,\n.icon-grid,\n.icon-graph,\n.icon-microphone,\n.icon-music-tone-alt,\n.icon-music-tone,\n.icon-earphones-alt,\n.icon-earphones,\n.icon-equalizer,\n.icon-like,\n.icon-dislike,\n.icon-control-start,\n.icon-control-rewind,\n.icon-control-play,\n.icon-control-pause,\n.icon-control-forward,\n.icon-control-end,\n.icon-volume-1,\n.icon-volume-2,\n.icon-volume-off,\n.icon-calendar,\n.icon-bulb,\n.icon-chart,\n.icon-ban,\n.icon-bubble,\n.icon-camrecorder,\n.icon-camera,\n.icon-cloud-download,\n.icon-cloud-upload,\n.icon-envelope,\n.icon-eye,\n.icon-flag,\n.icon-heart,\n.icon-info,\n.icon-key,\n.icon-link,\n.icon-lock,\n.icon-lock-open,\n.icon-magnifier,\n.icon-magnifier-add,\n.icon-magnifier-remove,\n.icon-paper-clip,\n.icon-paper-plane,\n.icon-power,\n.icon-refresh,\n.icon-reload,\n.icon-settings,\n.icon-star,\n.icon-symbol-female,\n.icon-symbol-male,\n.icon-target,\n.icon-credit-card,\n.icon-paypal,\n.icon-social-tumblr,\n.icon-social-twitter,\n.icon-social-facebook,\n.icon-social-instagram,\n.icon-social-linkedin,\n.icon-social-pinterest,\n.icon-social-github,\n.icon-social-google,\n.icon-social-reddit,\n.icon-social-skype,\n.icon-social-dribbble,\n.icon-social-behance,\n.icon-social-foursqare,\n.icon-social-soundcloud,\n.icon-social-spotify,\n.icon-social-stumbleupon,\n.icon-social-youtube,\n.icon-social-dropbox,\n.icon-social-vkontakte,\n.icon-social-steam {\n  font-family: 'simple-line-icons';\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-user:before {\n  content: \"\\e005\";\n}\n.icon-people:before {\n  content: \"\\e001\";\n}\n.icon-user-female:before {\n  content: \"\\e000\";\n}\n.icon-user-follow:before {\n  content: \"\\e002\";\n}\n.icon-user-following:before {\n  content: \"\\e003\";\n}\n.icon-user-unfollow:before {\n  content: \"\\e004\";\n}\n.icon-login:before {\n  content: \"\\e066\";\n}\n.icon-logout:before {\n  content: \"\\e065\";\n}\n.icon-emotsmile:before {\n  content: \"\\e021\";\n}\n.icon-phone:before {\n  content: \"\\e600\";\n}\n.icon-call-end:before {\n  content: \"\\e048\";\n}\n.icon-call-in:before {\n  content: \"\\e047\";\n}\n.icon-call-out:before {\n  content: \"\\e046\";\n}\n.icon-map:before {\n  content: \"\\e033\";\n}\n.icon-location-pin:before {\n  content: \"\\e096\";\n}\n.icon-direction:before {\n  content: \"\\e042\";\n}\n.icon-directions:before {\n  content: \"\\e041\";\n}\n.icon-compass:before {\n  content: \"\\e045\";\n}\n.icon-layers:before {\n  content: \"\\e034\";\n}\n.icon-menu:before {\n  content: \"\\e601\";\n}\n.icon-list:before {\n  content: \"\\e067\";\n}\n.icon-options-vertical:before {\n  content: \"\\e602\";\n}\n.icon-options:before {\n  content: \"\\e603\";\n}\n.icon-arrow-down:before {\n  content: \"\\e604\";\n}\n.icon-arrow-left:before {\n  content: \"\\e605\";\n}\n.icon-arrow-right:before {\n  content: \"\\e606\";\n}\n.icon-arrow-up:before {\n  content: \"\\e607\";\n}\n.icon-arrow-up-circle:before {\n  content: \"\\e078\";\n}\n.icon-arrow-left-circle:before {\n  content: \"\\e07a\";\n}\n.icon-arrow-right-circle:before {\n  content: \"\\e079\";\n}\n.icon-arrow-down-circle:before {\n  content: \"\\e07b\";\n}\n.icon-check:before {\n  content: \"\\e080\";\n}\n.icon-clock:before {\n  content: \"\\e081\";\n}\n.icon-plus:before {\n  content: \"\\e095\";\n}\n.icon-minus:before {\n  content: \"\\e615\";\n}\n.icon-close:before {\n  content: \"\\e082\";\n}\n.icon-event:before {\n  content: \"\\e619\";\n}\n.icon-exclamation:before {\n  content: \"\\e617\";\n}\n.icon-organization:before {\n  content: \"\\e616\";\n}\n.icon-trophy:before {\n  content: \"\\e006\";\n}\n.icon-screen-smartphone:before {\n  content: \"\\e010\";\n}\n.icon-screen-desktop:before {\n  content: \"\\e011\";\n}\n.icon-plane:before {\n  content: \"\\e012\";\n}\n.icon-notebook:before {\n  content: \"\\e013\";\n}\n.icon-mustache:before {\n  content: \"\\e014\";\n}\n.icon-mouse:before {\n  content: \"\\e015\";\n}\n.icon-magnet:before {\n  content: \"\\e016\";\n}\n.icon-energy:before {\n  content: \"\\e020\";\n}\n.icon-disc:before {\n  content: \"\\e022\";\n}\n.icon-cursor:before {\n  content: \"\\e06e\";\n}\n.icon-cursor-move:before {\n  content: \"\\e023\";\n}\n.icon-crop:before {\n  content: \"\\e024\";\n}\n.icon-chemistry:before {\n  content: \"\\e026\";\n}\n.icon-speedometer:before {\n  content: \"\\e007\";\n}\n.icon-shield:before {\n  content: \"\\e00e\";\n}\n.icon-screen-tablet:before {\n  content: \"\\e00f\";\n}\n.icon-magic-wand:before {\n  content: \"\\e017\";\n}\n.icon-hourglass:before {\n  content: \"\\e018\";\n}\n.icon-graduation:before {\n  content: \"\\e019\";\n}\n.icon-ghost:before {\n  content: \"\\e01a\";\n}\n.icon-game-controller:before {\n  content: \"\\e01b\";\n}\n.icon-fire:before {\n  content: \"\\e01c\";\n}\n.icon-eyeglass:before {\n  content: \"\\e01d\";\n}\n.icon-envelope-open:before {\n  content: \"\\e01e\";\n}\n.icon-envelope-letter:before {\n  content: \"\\e01f\";\n}\n.icon-bell:before {\n  content: \"\\e027\";\n}\n.icon-badge:before {\n  content: \"\\e028\";\n}\n.icon-anchor:before {\n  content: \"\\e029\";\n}\n.icon-wallet:before {\n  content: \"\\e02a\";\n}\n.icon-vector:before {\n  content: \"\\e02b\";\n}\n.icon-speech:before {\n  content: \"\\e02c\";\n}\n.icon-puzzle:before {\n  content: \"\\e02d\";\n}\n.icon-printer:before {\n  content: \"\\e02e\";\n}\n.icon-present:before {\n  content: \"\\e02f\";\n}\n.icon-playlist:before {\n  content: \"\\e030\";\n}\n.icon-pin:before {\n  content: \"\\e031\";\n}\n.icon-picture:before {\n  content: \"\\e032\";\n}\n.icon-handbag:before {\n  content: \"\\e035\";\n}\n.icon-globe-alt:before {\n  content: \"\\e036\";\n}\n.icon-globe:before {\n  content: \"\\e037\";\n}\n.icon-folder-alt:before {\n  content: \"\\e039\";\n}\n.icon-folder:before {\n  content: \"\\e089\";\n}\n.icon-film:before {\n  content: \"\\e03a\";\n}\n.icon-feed:before {\n  content: \"\\e03b\";\n}\n.icon-drop:before {\n  content: \"\\e03e\";\n}\n.icon-drawer:before {\n  content: \"\\e03f\";\n}\n.icon-docs:before {\n  content: \"\\e040\";\n}\n.icon-doc:before {\n  content: \"\\e085\";\n}\n.icon-diamond:before {\n  content: \"\\e043\";\n}\n.icon-cup:before {\n  content: \"\\e044\";\n}\n.icon-calculator:before {\n  content: \"\\e049\";\n}\n.icon-bubbles:before {\n  content: \"\\e04a\";\n}\n.icon-briefcase:before {\n  content: \"\\e04b\";\n}\n.icon-book-open:before {\n  content: \"\\e04c\";\n}\n.icon-basket-loaded:before {\n  content: \"\\e04d\";\n}\n.icon-basket:before {\n  content: \"\\e04e\";\n}\n.icon-bag:before {\n  content: \"\\e04f\";\n}\n.icon-action-undo:before {\n  content: \"\\e050\";\n}\n.icon-action-redo:before {\n  content: \"\\e051\";\n}\n.icon-wrench:before {\n  content: \"\\e052\";\n}\n.icon-umbrella:before {\n  content: \"\\e053\";\n}\n.icon-trash:before {\n  content: \"\\e054\";\n}\n.icon-tag:before {\n  content: \"\\e055\";\n}\n.icon-support:before {\n  content: \"\\e056\";\n}\n.icon-frame:before {\n  content: \"\\e038\";\n}\n.icon-size-fullscreen:before {\n  content: \"\\e057\";\n}\n.icon-size-actual:before {\n  content: \"\\e058\";\n}\n.icon-shuffle:before {\n  content: \"\\e059\";\n}\n.icon-share-alt:before {\n  content: \"\\e05a\";\n}\n.icon-share:before {\n  content: \"\\e05b\";\n}\n.icon-rocket:before {\n  content: \"\\e05c\";\n}\n.icon-question:before {\n  content: \"\\e05d\";\n}\n.icon-pie-chart:before {\n  content: \"\\e05e\";\n}\n.icon-pencil:before {\n  content: \"\\e05f\";\n}\n.icon-note:before {\n  content: \"\\e060\";\n}\n.icon-loop:before {\n  content: \"\\e064\";\n}\n.icon-home:before {\n  content: \"\\e069\";\n}\n.icon-grid:before {\n  content: \"\\e06a\";\n}\n.icon-graph:before {\n  content: \"\\e06b\";\n}\n.icon-microphone:before {\n  content: \"\\e063\";\n}\n.icon-music-tone-alt:before {\n  content: \"\\e061\";\n}\n.icon-music-tone:before {\n  content: \"\\e062\";\n}\n.icon-earphones-alt:before {\n  content: \"\\e03c\";\n}\n.icon-earphones:before {\n  content: \"\\e03d\";\n}\n.icon-equalizer:before {\n  content: \"\\e06c\";\n}\n.icon-like:before {\n  content: \"\\e068\";\n}\n.icon-dislike:before {\n  content: \"\\e06d\";\n}\n.icon-control-start:before {\n  content: \"\\e06f\";\n}\n.icon-control-rewind:before {\n  content: \"\\e070\";\n}\n.icon-control-play:before {\n  content: \"\\e071\";\n}\n.icon-control-pause:before {\n  content: \"\\e072\";\n}\n.icon-control-forward:before {\n  content: \"\\e073\";\n}\n.icon-control-end:before {\n  content: \"\\e074\";\n}\n.icon-volume-1:before {\n  content: \"\\e09f\";\n}\n.icon-volume-2:before {\n  content: \"\\e0a0\";\n}\n.icon-volume-off:before {\n  content: \"\\e0a1\";\n}\n.icon-calendar:before {\n  content: \"\\e075\";\n}\n.icon-bulb:before {\n  content: \"\\e076\";\n}\n.icon-chart:before {\n  content: \"\\e077\";\n}\n.icon-ban:before {\n  content: \"\\e07c\";\n}\n.icon-bubble:before {\n  content: \"\\e07d\";\n}\n.icon-camrecorder:before {\n  content: \"\\e07e\";\n}\n.icon-camera:before {\n  content: \"\\e07f\";\n}\n.icon-cloud-download:before {\n  content: \"\\e083\";\n}\n.icon-cloud-upload:before {\n  content: \"\\e084\";\n}\n.icon-envelope:before {\n  content: \"\\e086\";\n}\n.icon-eye:before {\n  content: \"\\e087\";\n}\n.icon-flag:before {\n  content: \"\\e088\";\n}\n.icon-heart:before {\n  content: \"\\e08a\";\n}\n.icon-info:before {\n  content: \"\\e08b\";\n}\n.icon-key:before {\n  content: \"\\e08c\";\n}\n.icon-link:before {\n  content: \"\\e08d\";\n}\n.icon-lock:before {\n  content: \"\\e08e\";\n}\n.icon-lock-open:before {\n  content: \"\\e08f\";\n}\n.icon-magnifier:before {\n  content: \"\\e090\";\n}\n.icon-magnifier-add:before {\n  content: \"\\e091\";\n}\n.icon-magnifier-remove:before {\n  content: \"\\e092\";\n}\n.icon-paper-clip:before {\n  content: \"\\e093\";\n}\n.icon-paper-plane:before {\n  content: \"\\e094\";\n}\n.icon-power:before {\n  content: \"\\e097\";\n}\n.icon-refresh:before {\n  content: \"\\e098\";\n}\n.icon-reload:before {\n  content: \"\\e099\";\n}\n.icon-settings:before {\n  content: \"\\e09a\";\n}\n.icon-star:before {\n  content: \"\\e09b\";\n}\n.icon-symbol-female:before {\n  content: \"\\e09c\";\n}\n.icon-symbol-male:before {\n  content: \"\\e09d\";\n}\n.icon-target:before {\n  content: \"\\e09e\";\n}\n.icon-credit-card:before {\n  content: \"\\e025\";\n}\n.icon-paypal:before {\n  content: \"\\e608\";\n}\n.icon-social-tumblr:before {\n  content: \"\\e00a\";\n}\n.icon-social-twitter:before {\n  content: \"\\e009\";\n}\n.icon-social-facebook:before {\n  content: \"\\e00b\";\n}\n.icon-social-instagram:before {\n  content: \"\\e609\";\n}\n.icon-social-linkedin:before {\n  content: \"\\e60a\";\n}\n.icon-social-pinterest:before {\n  content: \"\\e60b\";\n}\n.icon-social-github:before {\n  content: \"\\e60c\";\n}\n.icon-social-google:before {\n  content: \"\\e60d\";\n}\n.icon-social-reddit:before {\n  content: \"\\e60e\";\n}\n.icon-social-skype:before {\n  content: \"\\e60f\";\n}\n.icon-social-dribbble:before {\n  content: \"\\e00d\";\n}\n.icon-social-behance:before {\n  content: \"\\e610\";\n}\n.icon-social-foursqare:before {\n  content: \"\\e611\";\n}\n.icon-social-soundcloud:before {\n  content: \"\\e612\";\n}\n.icon-social-spotify:before {\n  content: \"\\e613\";\n}\n.icon-social-stumbleupon:before {\n  content: \"\\e614\";\n}\n.icon-social-youtube:before {\n  content: \"\\e008\";\n}\n.icon-social-dropbox:before {\n  content: \"\\e00c\";\n}\n.icon-social-vkontakte:before {\n  content: \"\\e618\";\n}\n.icon-social-steam:before {\n  content: \"\\e620\";\n}\n", ""]);

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.toast-title{font-weight:700\n}\n.toast-message{-ms-word-wrap:break-word;word-wrap:break-word\n}\n.toast-message a,.toast-message label{color:#FFF\n}\n.toast-message a:hover{color:#CCC;text-decoration:none\n}\n.toast-close-button{position:relative;right:-.3em;top:-.3em;float:right;font-size:20px;font-weight:700;color:#FFF;-webkit-text-shadow:0 1px 0 #fff;text-shadow:0 1px 0 #fff;opacity:.8;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=80);filter:alpha(opacity=80);line-height:1\n}\n.toast-close-button:focus,.toast-close-button:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.4;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=40);filter:alpha(opacity=40)\n}\n.rtl .toast-close-button{left:-.3em;float:left;right:.3em\n}\nbutton.toast-close-button{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none\n}\n.toast-top-center{top:0;right:0;width:100%\n}\n.toast-bottom-center{bottom:0;right:0;width:100%\n}\n.toast-top-full-width{top:0;right:0;width:100%\n}\n.toast-bottom-full-width{bottom:0;right:0;width:100%\n}\n.toast-top-left{top:12px;left:12px\n}\n.toast-top-right{top:12px;right:12px\n}\n.toast-bottom-right{right:12px;bottom:12px\n}\n.toast-bottom-left{bottom:12px;left:12px\n}\n#toast-container{position:fixed;z-index:999999;pointer-events:none\n}\n#toast-container *{box-sizing:border-box\n}\n#toast-container>div{position:relative;pointer-events:auto;overflow:hidden;margin:0 0 6px;padding:15px 15px 15px 50px;width:300px;border-radius:3px;background-position:15px center;background-repeat:no-repeat;box-shadow:0 0 12px #999;color:#FFF;opacity:.8;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=80);filter:alpha(opacity=80)\n}\n#toast-container>div.rtl{direction:rtl;padding:15px 50px 15px 15px;background-position:right 15px center\n}\n#toast-container>div:hover{box-shadow:0 0 12px #000;opacity:1;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);filter:alpha(opacity=100);cursor:pointer\n}\n#toast-container>.toast-info{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=)!important\n}\n#toast-container>.toast-error{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=)!important\n}\n#toast-container>.toast-success{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==)!important\n}\n#toast-container>.toast-warning{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=)!important\n}\n#toast-container.toast-bottom-center>div,#toast-container.toast-top-center>div{width:300px;margin-left:auto;margin-right:auto\n}\n#toast-container.toast-bottom-full-width>div,#toast-container.toast-top-full-width>div{width:96%;margin-left:auto;margin-right:auto\n}\n.toast{background-color:#030303\n}\n.toast-success{background-color:#51A351\n}\n.toast-error{background-color:#BD362F\n}\n.toast-info{background-color:#2F96B4\n}\n.toast-warning{background-color:#F89406\n}\n.toast-progress{position:absolute;left:0;bottom:0;height:4px;background-color:#000;opacity:.4;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=40);filter:alpha(opacity=40)\n}\n@media all and (max-width:240px){\n#toast-container>div{padding:8px 8px 8px 50px;width:11em\n}\n#toast-container>div.rtl{padding:8px 50px 8px 8px\n}\n#toast-container .toast-close-button{right:-.2em;top:-.2em\n}\n#toast-container .rtl .toast-close-button{left:-.2em;right:.2em\n}\n}\n@media all and (min-width:241px) and (max-width:480px){\n#toast-container>div{padding:8px 8px 8px 50px;width:18em\n}\n#toast-container>div.rtl{padding:8px 50px 8px 8px\n}\n#toast-container .toast-close-button{right:-.2em;top:-.2em\n}\n#toast-container .rtl .toast-close-button{left:-.2em;right:.2em\n}\n}\n@media all and (min-width:481px) and (max-width:768px){\n#toast-container>div{padding:15px 15px 15px 50px;width:25em\n}\n#toast-container>div.rtl{padding:15px 50px 15px 15px\n}\n}", ""]);

/***/ }),

/***/ 819:
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
  }), _vm._v(" Simple Line Icons\n                ")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("\n                                Simple Line Icons\n                            ")]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-user icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("user")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-people icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("people")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-user-female icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("user-female")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-user-follow icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("user-follow")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-user-following icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("user-following")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-user-unfollow icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("user-unfollow")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-login icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("login")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-logout icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("logout")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-emotsmile icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("emotsmile")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-phone icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("phone")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-call-end icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("call-end")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-call-in icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("call-in")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-call-out icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("call-out")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-map icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("map")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-location-pin icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("location-pin")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-direction icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("direction")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-directions icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("directions")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-compass icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("compass")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-layers icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("layers")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-menu icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("menu")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-list icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("list")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-options-vertical icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("options-vertical")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-options icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("options")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-arrow-down icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("arrow-down")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-arrow-left icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("arrow-left")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-arrow-right icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("arrow-right")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-arrow-up icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("arrow-up")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-arrow-up-circle icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("arrow-up-circle")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-arrow-left-circle icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("arrow-left-circle")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-arrow-right-circle icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("arrow-right-circle")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-arrow-down-circle icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("arrow-down-circle")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-check icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("check")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-clock icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("clock")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-plus icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("plus")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-minus icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("minus")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-close icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("close")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-event icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("event")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-exclamation icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("exclamation")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-organization icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("organization")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-trophy icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("trophy")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-screen-smartphone icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("screen-smartphone")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-screen-desktop icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("screen-desktop")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-plane icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("plane")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-notebook icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("notebook")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-mustache icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("mustache")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-mouse icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("mouse")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-magnet icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("magnet")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-energy icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("energy")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-disc icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("disc")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-cursor icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("cursor")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-cursor-move icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("cursor-move")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-crop icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("crop")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-chemistry icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("chemistry")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-speedometer icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("speedometer")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-shield icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("shield")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-screen-tablet icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("screen-tablet")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-magic-wand icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("magic-wand")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-hourglass icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("hourglass")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-graduation icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("graduation")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-ghost icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("ghost")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-game-controller icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("game-controller")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-fire icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("fire")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-eyeglass icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("eyeglass")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-envelope-open icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("envelope-open")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-envelope-letter icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("envelope-letter")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-bell icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("bell")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-badge icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("badge")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-anchor icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("anchor")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-wallet icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("wallet")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-vector icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("vector")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-speech icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("speech")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-puzzle icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("puzzle")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-printer icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("printer")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-present icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("present")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-playlist icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("playlist")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-pin icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("pin")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-picture icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("picture")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-handbag icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("handbag")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-globe-alt icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("globe-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-globe icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("globe")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-folder-alt icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("folder-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-folder icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("folder")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-film icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("film")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-feed icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("feed")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-drop icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("drop")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-drawer icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("drawer")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-docs icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("docs")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-doc icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("doc")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-diamond icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("diamond")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-cup icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("cup")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-calculator icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("calculator")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-bubbles icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("bubbles")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-briefcase icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("briefcase")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-book-open icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("book-open")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-basket-loaded icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("basket-loaded")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-basket icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("basket")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-bag icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("bag")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-action-undo icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("action-undo")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-action-redo icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("action-redo")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-wrench icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("wrench")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-umbrella icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("umbrella")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-trash icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("trash")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-tag icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("tag")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-support icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("support")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-frame icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("frame")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-size-fullscreen icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("size-fullscreen")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-size-actual icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("size-actual")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-shuffle icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("shuffle")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-share-alt icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("share-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-share icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("share")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-rocket icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("rocket")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-question icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("question")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-pie-chart icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("pie-chart")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-pencil icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("pencil")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-note icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("note")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-loop icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("loop")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-home icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("home")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-grid icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("grid")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-graph icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("graph")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-microphone icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("microphone")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-music-tone-alt icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("music-tone-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-music-tone icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("music-tone")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-earphones-alt icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("earphones-alt")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-earphones icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("earphones")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-equalizer icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("equalizer")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-like icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("like")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-dislike icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("dislike")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-control-start icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("control-start")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-control-rewind icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("control-rewind")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-control-play icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("control-play")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-control-pause icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("control-pause")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-control-forward icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("control-forward")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-control-end icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("control-end")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-volume-1 icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("volume-1")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-volume-2 icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("volume-2")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-volume-off icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("volume-off")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-calendar icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("calendar")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-bulb icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("bulb")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-chart icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("chart")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-ban icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("ban")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-bubble icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("bubble")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-camrecorder icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("camrecorder")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-camera icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("camera")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-cloud-download icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("cloud-download")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-cloud-upload icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("cloud-upload")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-envelope icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("envelope")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-eye icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("eye")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-flag icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("flag")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-heart icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("heart")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-info icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("info")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-key icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("key")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-link icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("link")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-lock icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("lock")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-lock-open icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("lock-open")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-magnifier icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("magnifier")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-magnifier-add icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("magnifier-add")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-magnifier-remove icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("magnifier-remove")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-paper-clip icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("paper-clip")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-paper-plane icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("paper-plane")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-power icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("power")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-refresh icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("refresh")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-reload icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("reload")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-settings icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("settings")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-star icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("star")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-symbol-female icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("symbol-female")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-symbol-male icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("symbol-male")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-target icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("target")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-credit-card icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("credit-card")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-paypal icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("paypal")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-social-tumblr icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("social-tumblr")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-social-twitter icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("social-twitter")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-social-facebook icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("social-facebook")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-social-instagram icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("social-instagram")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-social-linkedin icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("social-linkedin")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-social-pinterest icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("social-pinterest")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-social-github icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("social-github")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-social-google icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("social-google")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-social-reddit icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("social-reddit")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-social-skype icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("social-skype")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-social-dribbble icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("social-dribbble")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-social-behance icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("social-behance")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-social-foursqare icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("social-foursqare")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-social-soundcloud icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("social-soundcloud")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-social-spotify icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("social-spotify")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-social-stumbleupon icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("social-stumbleupon")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-social-youtube icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("social-youtube")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-social-dropbox icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("social-dropbox")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-social-vkontakte icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("social-vkontakte")])])]), _vm._v(" "), _c('div', {
    staticClass: "icon-preview-box col-xs-12 col-sm-4 col-md-3 col-lg-3"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('i', {
    staticClass: "icon-social-steam icons"
  }), _c('span', {
    staticClass: "name"
  }, [_vm._v("social-steam")])])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2b8571c4", module.exports)
  }
}

/***/ }),

/***/ 918:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(577);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("4d72a620", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2b8571c4\",\"scoped\":false,\"hasInlineConfig\":true}!./simple_themify.css", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2b8571c4\",\"scoped\":false,\"hasInlineConfig\":true}!./simple_themify.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(578);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("a622318a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2b8571c4\",\"scoped\":false,\"hasInlineConfig\":true}!./simple-line-icons.css", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2b8571c4\",\"scoped\":false,\"hasInlineConfig\":true}!./simple-line-icons.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 920:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(579);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("3a377854", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2b8571c4\",\"scoped\":false,\"hasInlineConfig\":true}!./toastr.min.css", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2b8571c4\",\"scoped\":false,\"hasInlineConfig\":true}!./toastr.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});