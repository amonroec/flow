webpackJsonp([41],{

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

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery, $) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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


/* harmony default export */ __webpack_exports__["default"] = ({
    name: "fontawesome_icons",
    mounted: function mounted() {
        "use strict";

        jQuery.fn.outerHTML = function () {
            return jQuery('<div />').append(this.eq(0).clone()).html();
        };
        $(document).ready(function () {

            $(".fa-icon").each(function () {
                $(this).find("i").after("<br />");
            });
            $(".iconoptions button").on("click", function () {
                if (!$(this).hasClass("active")) {
                    __WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js___default.a.info('Changes Made, Hover on any icon to see effect');
                }
                $(".iconoptions").find(".active").removeClass("active");
                $(this).addClass("active");
            });
            $(".fa-icon").hover(function () {
                if ($(".iconoptions").find('.active').attr("data-faclass") != undefined) {
                    $(this).find("i").toggleClass($(".iconoptions .active").attr("data-faclass"));
                }
            }).on("click", function () {
                var x = $(this).find("i").outerHTML();
                copyTextToClipboard(x);
            });
            $('#icon-search').on("input", function () {
                $(".fa-icon").each(function () {
                    var regex = new RegExp($("#icon-search").val().trim().toLowerCase());
                    var x = $(this).clone().children().remove().end().text();
                    var res = x.match(regex, "i");
                    if (res == null) {
                        $(this).hide();
                    } else {
                        $(this).show();
                    }
                });
            });
            var icon_size = $("#icon-size");
            icon_size.on("input", function () {
                var x = parseInt(icon_size.val()) + parseInt(6);
                $(".fontnormal").html(".fa-icon i{font-size:" + icon_size.val() + "px;}.fa-icon:hover i{font-size:" + x + "px;}");
                $(".icon-sizeshow").text(icon_size.val() + "px");
            });
            $("head").append("<style class='fontnormal'></style>");
        });

        function copyTextToClipboard(text) {
            var textArea = document.createElement("textarea");
            textArea.value = text;
            document.body.appendChild(textArea).select();
            var successful = document.execCommand('copy');
            document.body.removeChild(textArea);
            __WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js___default.a.success('Element Copied to Clipboard. Now you can use it anywhere.');
        }
        $(".iconoption_toggle").on("click", function () {
            $(this).toggleClass("right_175");
            $(this).find("i").toggleClass("fa-flip-horizontal");
            $(".iconoptions").toggleClass("right_0");
        });
    },
    destroyed: function destroyed() {}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0), __webpack_require__(0)))

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.fa-icon {\r\n    text-align: center;\r\n    padding: 20px 0;\r\n    margin: 10px 0;\r\n    height: 89px;\r\n    transition: all .2s linear;\r\n    -o-transition: all .2s linear;\r\n    -moz-transition: all .2s linear;\r\n    -webkit-transition: all .2s linear;\n}\n.fa-icon:hover {\r\n    background-color: #dcdcdc;\r\n    padding: 15px 0;\r\n    transition: all .2s linear;\r\n    -o-transition: all .2s linear;\r\n    -moz-transition: all .2s linear;\r\n    -webkit-transition: all .2s linear;\n}\n.fa-icon:hover i {\r\n    font-size: 30px;\n}\n.fa-icon:hover .text-muted {\r\n    color: #888;\n}\n.fa-icon i {\r\n    font-size: 24px;\r\n    color: #428bca;\r\n    margin-bottom: 10px;\n}\ninput[type=\"range\"] {\r\n    cursor: pointer;\n}\n.input-group {\r\n    width: 100%;\r\n    margin-bottom: 10px;\n}\n.input-group-addon.icon-sizeshow {\r\n    border: none;\r\n    background-color: transparent;\n}\n.input-group input[type=\"range\"] {\r\n    border: none;\r\n    box-shadow: none;\n}\n#icon-search {\r\n    border-radius: 17px !important;\n}\nform {\r\n    text-align: center;\r\n    padding: 10px;\n}\n.iconoption_toggle {\r\n    border-radius: 5px 0 0 5px;\r\n    border: 1px solid rgba(0, 0, 0, 0.298039);\r\n    border-right: none;\r\n    position: fixed;\r\n    top: 188px;\r\n    right: 0;\r\n    background-color: rgba(238, 238, 238, 0.4);\r\n    padding: 7px;\r\n    z-index: 999998;\r\n    cursor: pointer;\n}\n.iconoption_toggle i {\r\n    color: rgb(119, 119, 119);\r\n    font-size: 20px;\n}\n.right_175 {\r\n    right: 175px;\n}\n.iconoptions {\r\n    position: fixed;\r\n    padding: 6px;\r\n    height: 240px;\r\n    width: 175px;\r\n    background-color: #fff;\r\n    z-index: 9999999;\r\n    top: 100px;\r\n    right: -175px;\r\n    border: 2px solid #428bca;\n}\n.right_0 {\r\n    right: 0;\n}\n.iconoptions > button {\r\n    border: none;\r\n    border-radius: 4px;\r\n    margin-top: 10px;\r\n    display: block;\n}\n.iconoptions .active,\r\n.iconoptions .active:focus,\r\n.iconoptions .active:hover {\r\n    background-color: #ffb65f !important;\n}\r\n", ""]);

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.toast-title{font-weight:700\n}\n.toast-message{-ms-word-wrap:break-word;word-wrap:break-word\n}\n.toast-message a,.toast-message label{color:#FFF\n}\n.toast-message a:hover{color:#CCC;text-decoration:none\n}\n.toast-close-button{position:relative;right:-.3em;top:-.3em;float:right;font-size:20px;font-weight:700;color:#FFF;-webkit-text-shadow:0 1px 0 #fff;text-shadow:0 1px 0 #fff;opacity:.8;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=80);filter:alpha(opacity=80);line-height:1\n}\n.toast-close-button:focus,.toast-close-button:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.4;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=40);filter:alpha(opacity=40)\n}\n.rtl .toast-close-button{left:-.3em;float:left;right:.3em\n}\nbutton.toast-close-button{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none\n}\n.toast-top-center{top:0;right:0;width:100%\n}\n.toast-bottom-center{bottom:0;right:0;width:100%\n}\n.toast-top-full-width{top:0;right:0;width:100%\n}\n.toast-bottom-full-width{bottom:0;right:0;width:100%\n}\n.toast-top-left{top:12px;left:12px\n}\n.toast-top-right{top:12px;right:12px\n}\n.toast-bottom-right{right:12px;bottom:12px\n}\n.toast-bottom-left{bottom:12px;left:12px\n}\n#toast-container{position:fixed;z-index:999999;pointer-events:none\n}\n#toast-container *{box-sizing:border-box\n}\n#toast-container>div{position:relative;pointer-events:auto;overflow:hidden;margin:0 0 6px;padding:15px 15px 15px 50px;width:300px;border-radius:3px;background-position:15px center;background-repeat:no-repeat;box-shadow:0 0 12px #999;color:#FFF;opacity:.8;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=80);filter:alpha(opacity=80)\n}\n#toast-container>div.rtl{direction:rtl;padding:15px 50px 15px 15px;background-position:right 15px center\n}\n#toast-container>div:hover{box-shadow:0 0 12px #000;opacity:1;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);filter:alpha(opacity=100);cursor:pointer\n}\n#toast-container>.toast-info{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=)!important\n}\n#toast-container>.toast-error{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=)!important\n}\n#toast-container>.toast-success{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==)!important\n}\n#toast-container>.toast-warning{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=)!important\n}\n#toast-container.toast-bottom-center>div,#toast-container.toast-top-center>div{width:300px;margin-left:auto;margin-right:auto\n}\n#toast-container.toast-bottom-full-width>div,#toast-container.toast-top-full-width>div{width:96%;margin-left:auto;margin-right:auto\n}\n.toast{background-color:#030303\n}\n.toast-success{background-color:#51A351\n}\n.toast-error{background-color:#BD362F\n}\n.toast-info{background-color:#2F96B4\n}\n.toast-warning{background-color:#F89406\n}\n.toast-progress{position:absolute;left:0;bottom:0;height:4px;background-color:#000;opacity:.4;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=40);filter:alpha(opacity=40)\n}\n@media all and (max-width:240px){\n#toast-container>div{padding:8px 8px 8px 50px;width:11em\n}\n#toast-container>div.rtl{padding:8px 50px 8px 8px\n}\n#toast-container .toast-close-button{right:-.2em;top:-.2em\n}\n#toast-container .rtl .toast-close-button{left:-.2em;right:.2em\n}\n}\n@media all and (min-width:241px) and (max-width:480px){\n#toast-container>div{padding:8px 8px 8px 50px;width:18em\n}\n#toast-container>div.rtl{padding:8px 50px 8px 8px\n}\n#toast-container .toast-close-button{right:-.2em;top:-.2em\n}\n#toast-container .rtl .toast-close-button{left:-.2em;right:.2em\n}\n}\n@media all and (min-width:481px) and (max-width:768px){\n#toast-container>div{padding:15px 15px 15px 50px;width:25em\n}\n#toast-container>div.rtl{padding:15px 50px 15px 15px\n}\n}", ""]);

/***/ }),

/***/ 805:
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
    staticClass: "fa fa-fw ti-ink-pen"
  }), _vm._v(" Font Icons\n                ")]), _vm._v(" "), _c('span', {
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
    staticClass: "col-xs-12"
  }, [_c('section', {
    attrs: {
      "id": "web-application"
    }
  }, [_c('div', {
    staticClass: "iconoption_toggle"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-fighter-jet fa-flip-horizontal"
  })]), _vm._v(" "), _c('div', {
    staticClass: "iconoptions text-center"
  }, [_c('button', {
    staticClass: "active btn btn-info btn-block"
  }, [_vm._v("No Options")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info btn-block",
    attrs: {
      "data-faclass": "fa-spin"
    }
  }, [_vm._v("Spin")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info btn-block",
    attrs: {
      "data-faclass": "fa-flip-horizontal"
    }
  }, [_vm._v("Flip Horizontally\n                            ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info btn-block",
    attrs: {
      "data-faclass": "fa-flip-vertical"
    }
  }, [_vm._v("Flip Vertically\n                            ")]), _vm._v(" "), _c('h4', [_vm._v("Rotate")]), _vm._v(" "), _c('div', {
    staticClass: "btn-group"
  }, [_c('button', {
    staticClass: "btn btn-info btn-sm",
    attrs: {
      "data-faclass": ""
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info btn-sm",
    attrs: {
      "data-faclass": "fa-rotate-90"
    }
  }, [_vm._v("90")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info btn-sm",
    attrs: {
      "data-faclass": "fa-rotate-180"
    }
  }, [_vm._v("180")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info btn-sm",
    attrs: {
      "data-faclass": "fa-rotate-270"
    }
  }, [_vm._v("270")])])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("Click on any icon to copy its code to clipboard.")]), _vm._v(" "), _c('h4', {
    staticClass: "page-header"
  }, [_vm._v("\n                                Web Application Icons\n                            ")]), _vm._v(" "), _c('div', {
    staticClass: "row fontawesome-icon-list"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-12"
  }, [_c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-adjust"
  }), _vm._v(" fa-adjust\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-anchor"
  }), _vm._v(" fa-anchor\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-archive"
  }), _vm._v(" fa-archive\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-arrows"
  }), _vm._v(" fa-arrows\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-arrows-h"
  }), _vm._v(" fa-arrows-h\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-arrows-v"
  }), _vm._v(" fa-arrows-v\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-asterisk"
  }), _vm._v(" fa-asterisk\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-ban"
  }), _vm._v(" fa-ban\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-bar-chart-o"
  }), _vm._v(" fa-bar-chart-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-barcode"
  }), _vm._v(" fa-barcode\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-bars"
  }), _vm._v(" fa-bars\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-beer"
  }), _vm._v(" fa-beer\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-bell"
  }), _vm._v(" fa-bell\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-bell-o"
  }), _vm._v(" fa-bell-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-bolt"
  }), _vm._v(" fa-bolt\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-book"
  }), _vm._v(" fa-book\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-bookmark"
  }), _vm._v(" fa-bookmark\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-bookmark-o"
  }), _vm._v(" fa-bookmark-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-briefcase"
  }), _vm._v(" fa-briefcase\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-bug"
  }), _vm._v(" fa-bug\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-building-o"
  }), _vm._v(" fa-building-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-bullhorn"
  }), _vm._v(" fa-bullhorn\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-bullseye"
  }), _vm._v(" fa-bullseye\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-calendar"
  }), _vm._v(" fa-calendar\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-calendar-o"
  }), _vm._v(" fa-calendar-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-camera"
  }), _vm._v(" fa-camera\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-camera-retro"
  }), _vm._v(" fa-camera-retro\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-caret-square-o-down"
  }), _vm._v(" fa-caret-square-o-down\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-caret-square-o-left"
  }), _vm._v(" fa-caret-square-o-left\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-caret-square-o-right"
  }), _vm._v(" fa-caret-square-o-right\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-caret-square-o-up"
  }), _vm._v(" fa-caret-square-o-up\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-certificate"
  }), _vm._v(" fa-certificate\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-check"
  }), _vm._v(" fa-check\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-check-circle"
  }), _vm._v(" fa-check-circle\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-check-circle-o"
  }), _vm._v(" fa-check-circle-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-check-square"
  }), _vm._v(" fa-check-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-check-square-o"
  }), _vm._v(" fa-check-square-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-circle"
  }), _vm._v(" fa-circle\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-circle-o"
  }), _vm._v(" fa-circle-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-clock-o"
  }), _vm._v(" fa-clock-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-cloud"
  }), _vm._v(" fa-cloud\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-cloud-download"
  }), _vm._v(" fa-cloud-download\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-cloud-upload"
  }), _vm._v(" fa-cloud-upload\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-code"
  }), _vm._v(" fa-code\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-code-fork"
  }), _vm._v(" fa-code-fork\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-coffee"
  }), _vm._v(" fa-coffee\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-cog"
  }), _vm._v(" fa-cog\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-cogs"
  }), _vm._v(" fa-cogs\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-comment"
  }), _vm._v(" fa-comment\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-comment-o"
  }), _vm._v(" fa-comment-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-comments"
  }), _vm._v(" fa-comments\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-comments-o"
  }), _vm._v(" fa-comments-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-compass"
  }), _vm._v(" fa-compass\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-credit-card"
  }), _vm._v(" fa-credit-card\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-crop"
  }), _vm._v(" fa-crop\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-move"
  }), _vm._v(" fa-crosshairs\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-cutlery"
  }), _vm._v(" fa-cutlery\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-dashboard"
  }), _vm._v(" fa-dashboard\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-desktop"
  }), _vm._v(" fa-desktop\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-dot-circle-o"
  }), _vm._v(" fa-dot-circle-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-download"
  }), _vm._v(" fa-download\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-edit"
  }), _vm._v(" fa-edit\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-ellipsis-h"
  }), _vm._v(" fa-ellipsis-h\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-ellipsis-v"
  }), _vm._v(" fa-ellipsis-v\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-envelope"
  }), _vm._v(" fa-envelope\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-envelope-o"
  }), _vm._v(" fa-envelope-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-eraser"
  }), _vm._v(" fa-eraser\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-hand-o-left"
  }), _vm._v(" fa-exchange\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-exclamation"
  }), _vm._v(" fa-exclamation\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-exclamation-circle"
  }), _vm._v(" fa-exclamation-circle\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-exclamation-triangle"
  }), _vm._v(" fa-exclamation-triangle\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-external-link"
  }), _vm._v(" fa-external-link\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-external-link-square"
  }), _vm._v(" fa-external-link-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-eye"
  }), _vm._v(" fa-eye\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-eye-slash"
  }), _vm._v(" fa-eye-slash\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-female"
  }), _vm._v(" fa-female\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-fighter-jet"
  }), _vm._v(" fa-fighter-jet\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-film"
  }), _vm._v(" fa-film\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-filter"
  }), _vm._v(" fa-filter\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-cup"
  }), _vm._v(" fa-fire\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-fire-extinguisher"
  }), _vm._v(" fa-fire-extinguisher\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-flag"
  }), _vm._v(" fa-flag\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-flag-checkered"
  }), _vm._v(" fa-flag-checkered\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-flag-o"
  }), _vm._v(" fa-flag-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-flash"
  }), _vm._v(" fa-flash\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-flask"
  }), _vm._v(" fa-flask\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-folder"
  }), _vm._v(" fa-folder\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-folder-o"
  }), _vm._v(" fa-folder-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-folder-open"
  }), _vm._v(" fa-folder-open\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-folder-open-o"
  }), _vm._v(" fa-folder-open-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-frown-o"
  }), _vm._v(" fa-frown-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-gamepad"
  }), _vm._v(" fa-gamepad\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-gavel"
  }), _vm._v(" fa-gavel\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-settings"
  }), _vm._v(" fa-gear\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-gears"
  }), _vm._v(" fa-gears\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-gift"
  }), _vm._v(" fa-gift\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-glass"
  }), _vm._v(" fa-glass\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-globe"
  }), _vm._v(" fa-globe\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-group"
  }), _vm._v(" fa-group\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-hdd-o"
  }), _vm._v(" fa-hdd-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-headphones"
  }), _vm._v(" fa-headphones\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-heart"
  }), _vm._v(" fa-heart\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-heart-o"
  }), _vm._v(" fa-heart-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-home"
  }), _vm._v(" fa-home\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-inbox"
  }), _vm._v(" fa-inbox\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-info"
  }), _vm._v(" fa-info\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-info-circle"
  }), _vm._v(" fa-info-circle\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-key"
  }), _vm._v(" fa-key\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-keyboard-o"
  }), _vm._v(" fa-keyboard-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-laptop"
  }), _vm._v(" fa-laptop\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-leaf"
  }), _vm._v(" fa-leaf\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-legal"
  }), _vm._v(" fa-legal\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-lemon-o"
  }), _vm._v(" fa-lemon-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-level-down"
  }), _vm._v(" fa-level-down\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-level-up"
  }), _vm._v(" fa-level-up\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-lightbulb-o"
  }), _vm._v(" fa-lightbulb-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-location-arrow"
  }), _vm._v(" fa-location-arrow\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-lock"
  }), _vm._v(" fa-lock\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-magic"
  }), _vm._v(" fa-magic\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-magnet"
  }), _vm._v(" fa-magnet\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-mail-forward"
  }), _vm._v(" fa-mail-forward\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-mail-reply"
  }), _vm._v(" fa-mail-reply\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-mail-reply-all"
  }), _vm._v(" fa-mail-reply-all\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-male"
  }), _vm._v(" fa-male\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-map-marker"
  }), _vm._v(" fa-map-marker\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-meh-o"
  }), _vm._v(" fa-meh-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-microphone"
  }), _vm._v(" fa-microphone\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-microphone-slash"
  }), _vm._v(" fa-microphone-slash\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-minus"
  }), _vm._v(" fa-minus\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-minus-circle"
  }), _vm._v(" fa-minus-circle\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-minus-square"
  }), _vm._v(" fa-minus-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-minus-square-o"
  }), _vm._v(" fa-minus-square-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-mobile"
  }), _vm._v(" fa-mobile\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-mobile-phone"
  }), _vm._v(" fa-mobile-phone\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-money"
  }), _vm._v(" fa-money\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-moon-o"
  }), _vm._v(" fa-moon-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-music"
  }), _vm._v(" fa-music\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-pencil"
  }), _vm._v(" fa-pencil\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-pencil-square"
  }), _vm._v(" fa-pencil-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-pencil-square-o"
  }), _vm._v(" fa-pencil-square-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-phone"
  }), _vm._v(" fa-phone\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-phone-square"
  }), _vm._v(" fa-phone-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-picture-o"
  }), _vm._v(" fa-picture-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-plane"
  }), _vm._v(" fa-plane\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-plus"
  }), _vm._v(" fa-plus\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-plus-circle"
  }), _vm._v(" fa-plus-circle\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-plus-square"
  }), _vm._v(" fa-plus-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-plus-square-o"
  }), _vm._v(" fa-plus-square-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-power-off"
  }), _vm._v(" fa-power-off\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-print"
  }), _vm._v(" fa-print\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-puzzle-piece"
  }), _vm._v(" fa-puzzle-piece\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-qrcode"
  }), _vm._v(" fa-qrcode\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-question"
  }), _vm._v(" fa-question\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-question-circle"
  }), _vm._v(" fa-question-circle\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-quote-left"
  }), _vm._v(" fa-quote-left\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-quote-right"
  }), _vm._v(" fa-quote-right\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-random"
  }), _vm._v(" fa-random\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-refresh"
  }), _vm._v(" fa-refresh\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-reply"
  }), _vm._v(" fa-reply\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-reply-all"
  }), _vm._v(" fa-reply-all\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-retweet"
  }), _vm._v(" fa-retweet\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-road"
  }), _vm._v(" fa-road\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-rocket"
  }), _vm._v(" fa-rocket\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-rss"
  }), _vm._v(" fa-rss\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-rss-square"
  }), _vm._v(" fa-rss-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-search"
  }), _vm._v(" fa-search\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-search-minus"
  }), _vm._v(" fa-search-minus\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-search-plus"
  }), _vm._v(" fa-search-plus\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-share"
  }), _vm._v(" fa-share\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-share-square"
  }), _vm._v(" fa-share-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-share-square-o"
  }), _vm._v(" fa-share-square-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-shield"
  }), _vm._v(" fa-shield\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-shopping-cart"
  }), _vm._v(" fa-shopping-cart\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-sign-in"
  }), _vm._v(" fa-sign-in\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-shift-right"
  }), _vm._v(" fa-sign-out\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-signal"
  }), _vm._v(" fa-signal\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-sitemap"
  }), _vm._v(" fa-sitemap\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-smile-o"
  }), _vm._v(" fa-smile-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-sort"
  }), _vm._v(" fa-sort\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-sort-alpha-asc"
  }), _vm._v(" fa-sort-alpha-asc\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-sort-alpha-desc"
  }), _vm._v(" fa-sort-alpha-desc\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-sort-amount-asc"
  }), _vm._v(" fa-sort-amount-asc\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-sort-amount-desc"
  }), _vm._v(" fa-sort-amount-desc\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-sort-asc"
  }), _vm._v(" fa-sort-asc\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-sort-desc"
  }), _vm._v(" fa-sort-desc\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-sort-down"
  }), _vm._v(" fa-sort-down\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-sort-numeric-asc"
  }), _vm._v(" fa-sort-numeric-asc\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-sort-numeric-desc"
  }), _vm._v(" fa-sort-numeric-desc\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-sort-up"
  }), _vm._v(" fa-sort-up\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-spinner"
  }), _vm._v(" fa-spinner\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-square"
  }), _vm._v(" fa-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-square-o"
  }), _vm._v(" fa-square-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-star"
  }), _vm._v(" fa-star\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-star-half"
  }), _vm._v(" fa-star-half\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-star-half-empty"
  }), _vm._v(" fa-star-half-empty\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-star-half-full"
  }), _vm._v(" fa-star-half-full\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-star-half-o"
  }), _vm._v(" fa-star-half-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-star-o"
  }), _vm._v(" fa-star-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-subscript"
  }), _vm._v(" fa-subscript\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-suitcase"
  }), _vm._v(" fa-suitcase\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-sun-o"
  }), _vm._v(" fa-sun-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-superscript"
  }), _vm._v(" fa-superscript\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-tablet"
  }), _vm._v(" fa-tablet\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-tachometer"
  }), _vm._v(" fa-tachometer\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-tag"
  }), _vm._v(" fa-tag\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-tags"
  }), _vm._v(" fa-tags\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-tasks"
  }), _vm._v(" fa-tasks\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-terminal"
  }), _vm._v(" fa-terminal\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-thumb-tack"
  }), _vm._v(" fa-thumb-tack\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-thumbs-down"
  }), _vm._v(" fa-thumbs-down\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-thumbs-o-down"
  }), _vm._v(" fa-thumbs-o-down\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-thumbs-o-up"
  }), _vm._v(" fa-thumbs-o-up\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-thumbs-up"
  }), _vm._v(" fa-thumbs-up\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-ticket"
  }), _vm._v(" fa-ticket\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-times"
  }), _vm._v(" fa-times\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-times-circle"
  }), _vm._v(" fa-times-circle\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-times-circle-o"
  }), _vm._v(" fa-times-circle-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-tint"
  }), _vm._v(" fa-tint\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-toggle-down"
  }), _vm._v(" fa-toggle-down\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-toggle-left"
  }), _vm._v(" fa-toggle-left\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-toggle-right"
  }), _vm._v(" fa-toggle-right\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-toggle-up"
  }), _vm._v(" fa-toggle-up\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-trash-o"
  }), _vm._v(" fa-trash-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-trophy"
  }), _vm._v(" fa-trophy\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-truck"
  }), _vm._v(" fa-truck\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-umbrella"
  }), _vm._v(" fa-umbrella\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-unlock"
  }), _vm._v(" fa-unlock\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-unlock-alt"
  }), _vm._v(" fa-unlock-alt\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-unsorted"
  }), _vm._v(" fa-unsorted\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-upload"
  }), _vm._v(" fa-upload\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-user"
  }), _vm._v(" fa-user\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-users"
  }), _vm._v(" fa-users\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-video-camera"
  }), _vm._v(" fa-video-camera\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-volume-down"
  }), _vm._v(" fa-volume-down\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-volume-off"
  }), _vm._v(" fa-volume-off\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-volume-up"
  }), _vm._v(" fa-volume-up\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-warning"
  }), _vm._v(" fa-warning\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-wheelchair"
  }), _vm._v(" fa-wheelchair\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-wrench"
  }), _vm._v(" fa-wrench\n                                ")])])])]), _vm._v(" "), _c('section', {
    attrs: {
      "id": "form-control"
    }
  }, [_c('h4', {
    staticClass: "page-header"
  }, [_vm._v("\n                                Form Control Icons\n                            ")]), _vm._v(" "), _c('div', {
    staticClass: "row fontawesome-icon-list"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-12"
  }, [_c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-check-square"
  }), _vm._v(" fa-check-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-check-square-o"
  }), _vm._v(" fa-check-square-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-circle"
  }), _vm._v(" fa-circle\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-circle-o"
  }), _vm._v(" fa-circle-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-dot-circle-o"
  }), _vm._v(" fa-dot-circle-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-minus-square"
  }), _vm._v(" fa-minus-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-minus-square-o"
  }), _vm._v(" fa-minus-square-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-plus-square"
  }), _vm._v(" fa-plus-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-plus-square-o"
  }), _vm._v(" fa-plus-square-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-square"
  }), _vm._v(" fa-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-square-o"
  }), _vm._v(" fa-square-o\n                                ")])])])]), _vm._v(" "), _c('section', {
    attrs: {
      "id": "currency"
    }
  }, [_c('h4', {
    staticClass: "page-header"
  }, [_vm._v("\n                                Currency Icons\n                            ")]), _vm._v(" "), _c('div', {
    staticClass: "row fontawesome-icon-list"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-12"
  }, [_c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-bitcoin"
  }), _vm._v(" fa-bitcoin\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-btc"
  }), _vm._v(" fa-btc\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-cny"
  }), _vm._v(" fa-cny\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-dollar"
  }), _vm._v(" fa-dollar\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-eur"
  }), _vm._v(" fa-eur\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-euro"
  }), _vm._v(" fa-euro\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-gbp"
  }), _vm._v(" fa-gbp\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-inr"
  }), _vm._v(" fa-inr\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-jpy"
  }), _vm._v(" fa-jpy\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-krw"
  }), _vm._v(" fa-krw\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-money"
  }), _vm._v(" fa-money\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-rmb"
  }), _vm._v(" fa-rmb\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-rouble"
  }), _vm._v(" fa-rouble\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-rub"
  }), _vm._v(" fa-rub\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-ruble"
  }), _vm._v(" fa-ruble\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-rupee"
  }), _vm._v(" fa-rupee\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-try"
  }), _vm._v(" fa-try\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-turkish-lira"
  }), _vm._v(" fa-turkish-lira\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-usd"
  }), _vm._v(" fa-usd\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-won"
  }), _vm._v(" fa-won\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-yen"
  }), _vm._v(" fa-yen\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])])])])]), _vm._v(" "), _c('section', {
    attrs: {
      "id": "text-editor"
    }
  }, [_c('h4', {
    staticClass: "page-header"
  }, [_vm._v("\n                                Text Editor Icons\n                            ")]), _vm._v(" "), _c('div', {
    staticClass: "row fontawesome-icon-list"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-12"
  }, [_c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-align-center"
  }), _vm._v(" fa-align-center\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-align-justify"
  }), _vm._v(" fa-align-justify\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-align-left"
  }), _vm._v(" fa-align-left\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-align-right"
  }), _vm._v(" fa-align-right\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-bold"
  }), _vm._v(" fa-bold\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-chain"
  }), _vm._v(" fa-chain\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-chain-broken"
  }), _vm._v(" fa-chain-broken\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-clipboard"
  }), _vm._v(" fa-clipboard\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-columns"
  }), _vm._v(" fa-columns\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-copy"
  }), _vm._v(" fa-copy\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-cut"
  }), _vm._v(" fa-cut\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-dedent"
  }), _vm._v(" fa-dedent\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-eraser"
  }), _vm._v(" fa-eraser\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-file"
  }), _vm._v(" fa-file\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-file-o"
  }), _vm._v(" fa-file-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-file-text"
  }), _vm._v(" fa-file-text\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-pencil"
  }), _vm._v(" fa-file-text-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-files-o"
  }), _vm._v(" fa-files-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-floppy-o"
  }), _vm._v(" fa-floppy-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-font"
  }), _vm._v(" fa-font\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-indent"
  }), _vm._v(" fa-indent\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-italic"
  }), _vm._v(" fa-italic\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-link"
  }), _vm._v(" fa-link\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-list"
  }), _vm._v(" fa-list\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-list-alt"
  }), _vm._v(" fa-list-alt\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-list-ol"
  }), _vm._v(" fa-list-ol\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-list-ul"
  }), _vm._v(" fa-list-ul\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-outdent"
  }), _vm._v(" fa-outdent\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-paperclip"
  }), _vm._v(" fa-paperclip\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-paste"
  }), _vm._v(" fa-paste\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-repeat"
  }), _vm._v(" fa-repeat\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-rotate-left"
  }), _vm._v(" fa-rotate-left\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-rotate-right"
  }), _vm._v(" fa-rotate-right\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-save"
  }), _vm._v(" fa-save\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-scissors"
  }), _vm._v(" fa-scissors\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-strikethrough"
  }), _vm._v(" fa-strikethrough\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-table"
  }), _vm._v(" fa-table\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-text-height"
  }), _vm._v(" fa-text-height\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-text-width"
  }), _vm._v(" fa-text-width\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-th"
  }), _vm._v(" fa-th\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-th-large"
  }), _vm._v(" fa-th-large\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-th-list"
  }), _vm._v(" fa-th-list\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-underline"
  }), _vm._v(" fa-underline\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-undo"
  }), _vm._v(" fa-undo\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-unlink"
  }), _vm._v(" fa-unlink\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])])])])]), _vm._v(" "), _c('section', {
    attrs: {
      "id": "directional"
    }
  }, [_c('h4', {
    staticClass: "page-header"
  }, [_vm._v("\n                                Directional Icons\n                            ")]), _vm._v(" "), _c('div', {
    staticClass: "row fontawesome-icon-list"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-12"
  }, [_c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-angle-double-down"
  }), _vm._v(" fa-angle-double-down\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-angle-double-left"
  }), _vm._v(" fa-angle-double-left\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-angle-double-right"
  }), _vm._v(" fa-angle-double-right\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-angle-double-up"
  }), _vm._v(" fa-angle-double-up\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-angle-down"
  }), _vm._v(" fa-angle-down\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-angle-left"
  }), _vm._v(" fa-angle-left\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-angle-right"
  }), _vm._v(" fa-angle-right\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-angle-up"
  }), _vm._v(" fa-angle-up\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-arrow-circle-down"
  }), _vm._v(" fa-arrow-circle-down\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-arrow-circle-left"
  }), _vm._v(" fa-arrow-circle-left\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-arrow-circle-o-down"
  }), _vm._v(" fa-arrow-circle-o-down\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-arrow-circle-o-left"
  }), _vm._v(" fa-arrow-circle-o-left\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-arrow-circle-o-right"
  }), _vm._v(" fa-arrow-circle-o-right\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-arrow-circle-o-up"
  }), _vm._v(" fa-arrow-circle-o-up\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-arrow-circle-right"
  }), _vm._v(" fa-arrow-circle-right\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-arrow-circle-up"
  }), _vm._v(" fa-arrow-circle-up\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-arrow-down"
  }), _vm._v(" fa-arrow-down\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-arrow-left"
  }), _vm._v(" fa-arrow-left\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-arrow-right"
  }), _vm._v(" fa-arrow-right\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-arrow-up"
  }), _vm._v(" fa-arrow-up\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-arrows"
  }), _vm._v(" fa-arrows\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-arrows-alt"
  }), _vm._v(" fa-arrows-alt\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-arrows-h"
  }), _vm._v(" fa-arrows-h\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-arrows-v"
  }), _vm._v(" fa-arrows-v\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-caret-down"
  }), _vm._v(" fa-caret-down\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-caret-left"
  }), _vm._v(" fa-caret-left\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-caret-right"
  }), _vm._v(" fa-caret-right\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-caret-square-o-down"
  }), _vm._v(" fa-caret-square-o-down\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-caret-square-o-left"
  }), _vm._v(" fa-caret-square-o-left\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-caret-square-o-right"
  }), _vm._v(" fa-caret-square-o-right\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-caret-square-o-up"
  }), _vm._v(" fa-caret-square-o-up\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-caret-up"
  }), _vm._v(" fa-caret-up\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-chevron-circle-down"
  }), _vm._v(" fa-chevron-circle-down\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-chevron-circle-left"
  }), _vm._v(" fa-chevron-circle-left\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-chevron-circle-right"
  }), _vm._v(" fa-chevron-circle-right\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-chevron-circle-up"
  }), _vm._v(" fa-chevron-circle-up\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-chevron-down"
  }), _vm._v(" fa-chevron-down\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-chevron-left"
  }), _vm._v(" fa-chevron-left\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-chevron-right"
  }), _vm._v(" fa-chevron-right\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" fa-chevron-up\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-hand-o-down"
  }), _vm._v(" fa-hand-o-down\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-hand-o-left"
  }), _vm._v(" fa-hand-o-left\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-hand-o-right"
  }), _vm._v(" fa-hand-o-right\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-hand-o-up"
  }), _vm._v(" fa-hand-o-up\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-long-arrow-down"
  }), _vm._v(" fa-long-arrow-down\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-long-arrow-left"
  }), _vm._v(" fa-long-arrow-left\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-long-arrow-right"
  }), _vm._v(" fa-long-arrow-right\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-long-arrow-up"
  }), _vm._v(" fa-long-arrow-up\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-toggle-down"
  }), _vm._v(" fa-toggle-down\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-toggle-left"
  }), _vm._v(" fa-toggle-left\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-toggle-right"
  }), _vm._v(" fa-toggle-right\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-toggle-up"
  }), _vm._v(" fa-toggle-up\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])])])])]), _vm._v(" "), _c('section', {
    attrs: {
      "id": "video-player"
    }
  }, [_c('h4', {
    staticClass: "page-header"
  }, [_vm._v("\n                                Video Player Icons\n                            ")]), _vm._v(" "), _c('div', {
    staticClass: "row fontawesome-icon-list"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-12"
  }, [_c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-arrows-alt"
  }), _vm._v(" fa-arrows-alt\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-backward"
  }), _vm._v(" fa-backward\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-compress"
  }), _vm._v(" fa-compress\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-eject"
  }), _vm._v(" fa-eject\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-expand"
  }), _vm._v(" fa-expand\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-fast-backward"
  }), _vm._v(" fa-fast-backward\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-fast-forward"
  }), _vm._v(" fa-fast-forward\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-forward"
  }), _vm._v(" fa-forward\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-pause"
  }), _vm._v(" fa-pause\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-play"
  }), _vm._v(" fa-play\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-play-circle"
  }), _vm._v(" fa-play-circle\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-play-circle-o"
  }), _vm._v(" fa-play-circle-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-step-backward"
  }), _vm._v(" fa-step-backward\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-step-forward"
  }), _vm._v(" fa-step-forward\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-stop"
  }), _vm._v(" fa-stop\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-youtube-play"
  }), _vm._v(" fa-youtube-play\n                                ")])])])]), _vm._v(" "), _c('section', {
    attrs: {
      "id": "brand"
    }
  }, [_c('h4', {
    staticClass: "page-header"
  }, [_vm._v("\n                                Brand Icons\n                            ")]), _vm._v(" "), _c('div', {
    staticClass: "row fontawesome-icon-list"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-12"
  }, [_c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-adn"
  }), _vm._v(" fa-adn\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-android"
  }), _vm._v(" fa-android\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-apple"
  }), _vm._v(" fa-apple\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-bitbucket"
  }), _vm._v(" fa-bitbucket\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-bitbucket-square"
  }), _vm._v(" fa-bitbucket-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-bitcoin"
  }), _vm._v(" fa-bitcoin\n                                    "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(alias)")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-btc"
  }), _vm._v(" fa-btc\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-css3"
  }), _vm._v(" fa-css3\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-dribbble"
  }), _vm._v(" fa-dribbble\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-dropbox"
  }), _vm._v(" fa-dropbox\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-facebook"
  }), _vm._v(" fa-facebook\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-facebook-square"
  }), _vm._v(" fa-facebook-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-flickr"
  }), _vm._v(" fa-flickr\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-foursquare"
  }), _vm._v(" fa-foursquare\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-github"
  }), _vm._v(" fa-github\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-github-alt"
  }), _vm._v(" fa-github-alt\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-github-square"
  }), _vm._v(" fa-github-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-gittip"
  }), _vm._v(" fa-gittip\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-google-plus"
  }), _vm._v(" fa-google-plus\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-google-plus-square"
  }), _vm._v(" fa-google-plus-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-html5"
  }), _vm._v(" fa-html5\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-instagram"
  }), _vm._v(" fa-instagram\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-linkedin"
  }), _vm._v(" fa-linkedin\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-linkedin-square"
  }), _vm._v(" fa-linkedin-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-linux"
  }), _vm._v(" fa-linux\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-maxcdn"
  }), _vm._v(" fa-maxcdn\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-pagelines"
  }), _vm._v(" fa-pagelines\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-pinterest"
  }), _vm._v(" fa-pinterest\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-pinterest-square"
  }), _vm._v(" fa-pinterest-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-renren"
  }), _vm._v(" fa-renren\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-skype"
  }), _vm._v(" fa-skype\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-stack-exchange"
  }), _vm._v(" fa-stack-exchange\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-stack-overflow"
  }), _vm._v(" fa-stack-overflow\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-trello"
  }), _vm._v(" fa-trello\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-tumblr"
  }), _vm._v(" fa-tumblr\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-tumblr-square"
  }), _vm._v(" fa-tumblr-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-twitter"
  }), _vm._v(" fa-twitter\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-twitter-square"
  }), _vm._v(" fa-twitter-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-vimeo-square"
  }), _vm._v(" fa-vimeo-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-vk"
  }), _vm._v(" fa-vk\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-weibo"
  }), _vm._v(" fa-weibo\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-windows"
  }), _vm._v(" fa-windows\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-xing"
  }), _vm._v(" fa-xing\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-xing-square"
  }), _vm._v(" fa-xing-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-youtube"
  }), _vm._v(" fa-youtube\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-youtube-play"
  }), _vm._v(" fa-youtube-play\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-youtube-square"
  }), _vm._v(" fa-youtube-square\n                                ")])])])]), _vm._v(" "), _c('section', {
    attrs: {
      "id": "medical"
    }
  }, [_c('h4', {
    staticClass: "page-header"
  }, [_vm._v("\n                                Medical Icons\n                            ")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-12"
  }, [_c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-ambulance"
  }), _vm._v(" fa-ambulance\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-h-square"
  }), _vm._v(" fa-h-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-hospital-o"
  }), _vm._v(" fa-hospital-o\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-medkit"
  }), _vm._v(" fa-medkit\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-plus-square"
  }), _vm._v(" fa-plus-square\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-stethoscope"
  }), _vm._v(" fa-stethoscope\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-user-md"
  }), _vm._v(" fa-user-md\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 fa-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-wheelchair"
  }), _vm._v(" fa-wheelchair\n                                ")])])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-12087cd7", module.exports)
  }
}

/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(549);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("10ae7618", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-12087cd7\",\"scoped\":false,\"hasInlineConfig\":true}!./fontawesome_icons.css", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-12087cd7\",\"scoped\":false,\"hasInlineConfig\":true}!./fontawesome_icons.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 891:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(550);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("7de23a04", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-12087cd7\",\"scoped\":false,\"hasInlineConfig\":true}!./toastr.min.css", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-12087cd7\",\"scoped\":false,\"hasInlineConfig\":true}!./toastr.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(891)
__webpack_require__(890)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(400),
  /* template */
  __webpack_require__(805),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Sites/vue_workflows/laravel/resources/assets/js/components/components/fontawesome_icons.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] fontawesome_icons.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12087cd7", Component.options)
  } else {
    hotAPI.reload("data-v-12087cd7", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});