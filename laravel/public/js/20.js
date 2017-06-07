webpackJsonp([20],{

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(889)
__webpack_require__(888)
__webpack_require__(886)
__webpack_require__(887)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(410),
  /* template */
  __webpack_require__(804),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Sites/vue_workflows/laravel/resources/assets/js/components/components/image_filter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] image_filter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0eb357f8", Component.options)
  } else {
    hotAPI.reload("data-v-0eb357f8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 300:
/***/ (function(module, exports) {

module.exports = "/fonts/dropify.eot?4e8b017aef78cc114006cba896850fbd";

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * =============================================================
 * dropify v0.2.1 - Override your input files with style.
 * https://github.com/JeremyFagis/dropify
 *
 * (c) 2016 - Jeremy FAGIS <jeremy@fagis.fr> (http://fagis.fr)
 * =============================================================
 */

!function (e, i) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (i),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = i(require("jquery")) : e.Dropify = i(e.jQuery);
}(this, function (e) {
  function i(i, t) {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      var s = { defaultFile: "", maxFileSize: 0, minWidth: 0, maxWidth: 0, minHeight: 0, maxHeight: 0, showRemove: !0, showLoader: !0, showErrors: !0, errorTimeout: 3e3, errorsPosition: "overlay", imgFileExtensions: ["png", "jpg", "jpeg", "gif", "bmp"], maxFileSizePreview: "5M", allowedFormats: ["portrait", "square", "landscape"], allowedFileExtensions: ["*"], messages: { "default": "Drag and drop a file here or click", replace: "Drag and drop or click to replace", remove: "Remove", error: "Ooops, something wrong appended." }, error: { fileSize: "The file size is too big ({{ value }} max).", minWidth: "The image width is too small ({{ value }}}px min).", maxWidth: "The image width is too big ({{ value }}}px max).", minHeight: "The image height is too small ({{ value }}}px min).", maxHeight: "The image height is too big ({{ value }}px max).", imageFormat: "The image format is not allowed ({{ value }} only).", fileExtension: "The file is not allowed ({{ value }} only)." }, tpl: { wrap: '<div class="dropify-wrapper"></div>', loader: '<div class="dropify-loader"></div>', message: '<div class="dropify-message"><span class="file-icon" /> <p>{{ default }}</p></div>', preview: '<div class="dropify-preview"><span class="dropify-render"></span><div class="dropify-infos"><div class="dropify-infos-inner"><p class="dropify-infos-message">{{ replace }}</p></div></div></div>', filename: '<p class="dropify-filename"><span class="file-icon"></span> <span class="dropify-filename-inner"></span></p>', clearButton: '<button type="button" class="dropify-clear">{{ remove }}</button>', errorLine: '<p class="dropify-error">{{ error }}</p>', errorsContainer: '<div class="dropify-errors-container"><ul></ul></div>' } };this.element = i, this.input = e(this.element), this.wrapper = null, this.preview = null, this.filenameWrapper = null, this.settings = e.extend(!0, s, t, this.input.data()), this.errorsEvent = e.Event("dropify.errors"), this.isDisabled = !1, this.isInit = !1, this.file = { object: null, name: null, size: null, width: null, height: null, type: null }, Array.isArray(this.settings.allowedFormats) || (this.settings.allowedFormats = this.settings.allowedFormats.split(" ")), Array.isArray(this.settings.allowedFileExtensions) || (this.settings.allowedFileExtensions = this.settings.allowedFileExtensions.split(" ")), this.onChange = this.onChange.bind(this), this.clearElement = this.clearElement.bind(this), this.onFileReady = this.onFileReady.bind(this), this.translateMessages(), this.createElements(), this.setContainerSize(), this.errorsEvent.errors = [], this.input.on("change", this.onChange);
    }
  }var t = "dropify";return i.prototype.onChange = function () {
    this.resetPreview(), this.readFile(this.element);
  }, i.prototype.createElements = function () {
    this.isInit = !0, this.input.wrap(e(this.settings.tpl.wrap)), this.wrapper = this.input.parent();var i = e(this.settings.tpl.message).insertBefore(this.input);e(this.settings.tpl.errorLine).appendTo(i), this.isTouchDevice() === !0 && this.wrapper.addClass("touch-fallback"), this.input.attr("disabled") && (this.isDisabled = !0, this.wrapper.addClass("disabled")), this.settings.showLoader === !0 && (this.loader = e(this.settings.tpl.loader), this.loader.insertBefore(this.input)), this.preview = e(this.settings.tpl.preview), this.preview.insertAfter(this.input), this.isDisabled === !1 && this.settings.showRemove === !0 && (this.clearButton = e(this.settings.tpl.clearButton), this.clearButton.insertAfter(this.input), this.clearButton.on("click", this.clearElement)), this.filenameWrapper = e(this.settings.tpl.filename), this.filenameWrapper.prependTo(this.preview.find(".dropify-infos-inner")), this.settings.showErrors === !0 && (this.errorsContainer = e(this.settings.tpl.errorsContainer), "outside" === this.settings.errorsPosition ? this.errorsContainer.insertAfter(this.wrapper) : this.errorsContainer.insertBefore(this.input));var t = this.settings.defaultFile || "";"" !== t.trim() && (this.file.name = this.cleanFilename(t), this.setPreview(this.isImage(), t));
  }, i.prototype.readFile = function (i) {
    if (i.files && i.files[0]) {
      var t = new FileReader(),
          s = new Image(),
          r = i.files[0],
          n = null,
          o = this,
          h = e.Event("dropify.fileReady");this.clearErrors(), this.showLoader(), this.setFileInformations(r), this.errorsEvent.errors = [], this.checkFileSize(), this.isFileExtensionAllowed(), this.isImage() && this.file.size < this.sizeToByte(this.settings.maxFileSizePreview) ? (this.input.on("dropify.fileReady", this.onFileReady), t.readAsDataURL(r), t.onload = function (e) {
        n = e.target.result, s.src = e.target.result, s.onload = function () {
          o.setFileDimensions(this.width, this.height), o.validateImage(), o.input.trigger(h, [!0, n]);
        };
      }.bind(this)) : this.onFileReady(!1);
    }
  }, i.prototype.onFileReady = function (e, i, t) {
    if (this.input.off("dropify.fileReady", this.onFileReady), 0 === this.errorsEvent.errors.length) this.setPreview(i, t);else {
      this.input.trigger(this.errorsEvent, [this]);for (var s = this.errorsEvent.errors.length - 1; s >= 0; s--) {
        var r = this.errorsEvent.errors[s].namespace,
            n = r.split(".").pop();this.showError(n);
      }if ("undefined" != typeof this.errorsContainer) {
        this.errorsContainer.addClass("visible");var o = this.errorsContainer;setTimeout(function () {
          o.removeClass("visible");
        }, this.settings.errorTimeout);
      }this.wrapper.addClass("has-error"), this.resetPreview(), this.clearElement();
    }
  }, i.prototype.setFileInformations = function (e) {
    this.file.object = e, this.file.name = e.name, this.file.size = e.size, this.file.type = e.type, this.file.width = null, this.file.height = null;
  }, i.prototype.setFileDimensions = function (e, i) {
    this.file.width = e, this.file.height = i;
  }, i.prototype.setPreview = function (i, t) {
    this.wrapper.removeClass("has-error").addClass("has-preview"), this.filenameWrapper.children(".dropify-filename-inner").html(this.file.name);var s = this.preview.children(".dropify-render");if (this.hideLoader(), i === !0) {
      var r = e("<img />").attr("src", t);this.settings.height && r.css("max-height", this.settings.height), r.appendTo(s);
    } else e("<i />").attr("class", "dropify-font-file").appendTo(s), e('<span class="dropify-extension" />').html(this.getFileType()).appendTo(s);this.preview.fadeIn();
  }, i.prototype.resetPreview = function () {
    this.wrapper.removeClass("has-preview");var e = this.preview.children(".dropify-render");e.find(".dropify-extension").remove(), e.find("i").remove(), e.find("img").remove(), this.preview.hide(), this.hideLoader();
  }, i.prototype.cleanFilename = function (e) {
    var i = e.split("\\").pop();return i == e && (i = e.split("/").pop()), "" !== e ? i : "";
  }, i.prototype.clearElement = function () {
    if (0 === this.errorsEvent.errors.length) {
      var i = e.Event("dropify.beforeClear");this.input.trigger(i, [this]), i.result !== !1 && (this.resetFile(), this.input.val(""), this.resetPreview(), this.input.trigger(e.Event("dropify.afterClear"), [this]));
    } else this.resetFile(), this.input.val(""), this.resetPreview();
  }, i.prototype.resetFile = function () {
    this.file.object = null, this.file.name = null, this.file.size = null, this.file.type = null, this.file.width = null, this.file.height = null;
  }, i.prototype.setContainerSize = function () {
    this.settings.height && this.wrapper.height(this.settings.height);
  }, i.prototype.isTouchDevice = function () {
    return "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }, i.prototype.getFileType = function () {
    return this.file.name.split(".").pop().toLowerCase();
  }, i.prototype.isImage = function () {
    return "-1" != this.settings.imgFileExtensions.indexOf(this.getFileType()) ? !0 : !1;
  }, i.prototype.isFileExtensionAllowed = function () {
    return "-1" != this.settings.allowedFileExtensions.indexOf("*") || "-1" != this.settings.allowedFileExtensions.indexOf(this.getFileType()) ? !0 : (this.pushError("fileExtension"), !1);
  }, i.prototype.translateMessages = function () {
    for (var e in this.settings.tpl) {
      for (var i in this.settings.messages) {
        this.settings.tpl[e] = this.settings.tpl[e].replace("{{ " + i + " }}", this.settings.messages[i]);
      }
    }
  }, i.prototype.checkFileSize = function () {
    0 !== this.sizeToByte(this.settings.maxFileSize) && this.file.size > this.sizeToByte(this.settings.maxFileSize) && this.pushError("fileSize");
  }, i.prototype.sizeToByte = function (e) {
    var i = 0;if (0 !== e) {
      var t = e.slice(-1).toUpperCase(),
          s = 1024,
          r = 1024 * s,
          n = 1024 * r;"K" === t ? i = parseFloat(e) * s : "M" === t ? i = parseFloat(e) * r : "G" === t && (i = parseFloat(e) * n);
    }return i;
  }, i.prototype.validateImage = function () {
    0 !== this.settings.minWidth && this.settings.minWidth >= this.file.width && this.pushError("minWidth"), 0 !== this.settings.maxWidth && this.settings.maxWidth <= this.file.width && this.pushError("maxWidth"), 0 !== this.settings.minHeight && this.settings.minHeight >= this.file.height && this.pushError("minHeight"), 0 !== this.settings.maxHeight && this.settings.maxHeight <= this.file.height && this.pushError("maxHeight"), "-1" == this.settings.allowedFormats.indexOf(this.getImageFormat()) && this.pushError("imageFormat");
  }, i.prototype.getImageFormat = function () {
    return this.file.width == this.file.height ? "square" : this.file.width < this.file.height ? "portrait" : this.file.width > this.file.height ? "landscape" : void 0;
  }, i.prototype.pushError = function (i) {
    var t = e.Event("dropify.error." + i);this.errorsEvent.errors.push(t), this.input.trigger(t, [this]);
  }, i.prototype.clearErrors = function () {
    "undefined" != typeof this.errorsContainer && this.errorsContainer.children("ul").html("");
  }, i.prototype.showError = function (e) {
    "undefined" != typeof this.errorsContainer && this.errorsContainer.children("ul").append("<li>" + this.getError(e) + "</li>");
  }, i.prototype.getError = function (e) {
    var i = this.settings.error[e],
        t = "";return "fileSize" === e ? t = this.settings.maxFileSize : "minWidth" === e ? t = this.settings.minWidth : "maxWidth" === e ? t = this.settings.maxWidth : "minHeight" === e ? t = this.settings.minHeight : "maxHeight" === e ? t = this.settings.maxHeight : "imageFormat" === e ? t = this.settings.allowedFormats.join(", ") : "fileExtension" === e && (t = this.settings.allowedFileExtensions.join(", ")), "" !== t ? i.replace("{{ value }}", t) : i;
  }, i.prototype.showLoader = function () {
    "undefined" != typeof this.loader && this.loader.show();
  }, i.prototype.hideLoader = function () {
    "undefined" != typeof this.loader && this.loader.hide();
  }, i.prototype.destroy = function () {
    this.input.siblings().remove(), this.input.unwrap(), this.isInit = !1;
  }, i.prototype.init = function () {
    this.createElements();
  }, i.prototype.isDropified = function () {
    return this.isInit;
  }, e.fn[t] = function (s) {
    return this.each(function () {
      e.data(this, t) || e.data(this, t, new i(this, s));
    }), this;
  }, i;
});

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

module.exports = "/fonts/dropify.svg?b321d818cc153b16e739072ea8bc94b8";

/***/ }),

/***/ 355:
/***/ (function(module, exports) {

module.exports = "/fonts/dropify.ttf?86cb1ab018f1680d8e0fa0ca6a53d64c";

/***/ }),

/***/ 356:
/***/ (function(module, exports) {

module.exports = "/fonts/dropify.woff?950ffd1efa29c33a70dd86ea761cb3d8";

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendors_dropify_dist_js_dropify_min_js__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendors_dropify_dist_js_dropify_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendors_dropify_dist_js_dropify_min_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "image_filter",
    mounted: function mounted() {
        "use strict";

        $(document).ready(function () {

            $("[data-filter1]").on('click', function () {
                $("[data-filter1]").removeClass('active_filter');
                $(this).addClass('active_filter');
                $("#imgfigure1").removeClass().addClass($(this).attr('data-filter1'));
            });

            $("[data-filter2]").on('click', function () {
                $("[data-filter2]").removeClass('active_filter');
                $(this).addClass('active_filter');
                $("#imgfigure2").removeClass().addClass($(this).attr('data-filter2'));
            });

            $("[data-filter3]").on('click', function () {
                $("[data-filter3]").removeClass('active_filter');
                $(this).addClass('active_filter');
                $("#imgfigure3").removeClass().addClass($(this).attr('data-filter3'));
            });

            // $('.dropify').dropify();
            $("[data-max-file-size]").dropify({
                error: {
                    'fileSize': 'The file size is too big ({{ value }}B max).'
                }
            });

            //        dynamic img change of all filters on uploading image

            $('#filter-1').on('change', function () {
                var tmppath = URL.createObjectURL(event.target.files[0]);
                $('.temp_path1').attr('src', tmppath);
            });
            $('#filter-2').on('change', function () {
                var tmppath = URL.createObjectURL(event.target.files[0]);
                $('.temp_path2').attr('src', tmppath);
            });
            $('#filter-3').on('change', function () {
                var tmppath = URL.createObjectURL(event.target.files[0]);
                $('.temp_path3').attr('src', tmppath);
            });
        });
    },
    destroyed: function destroyed() {}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.dropify-wrapper,\r\n.dropify-wrapper .dropify-clear {\r\n    font-family : \"Open Sans\", sans-serif;\n}\n.dropify-wrapper.has-error {\r\n    border-color : #ff6666;\n}\n.dropify-errors-container.visible {\r\n    background-color : #ff6666;\n}\n.dropify-wrapper .dropify-message p.dropify-error {\r\n    color : #ff6666;\n}\n.p-30 {\r\n    padding : 30px;\n}\r\n", ""]);

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.pagination figure {\r\n    max-width : 100px;\n}\n.pagination > li {\r\n    display : inline-block;\r\n    margin  : 6px;\n}\n@media screen and (max-width : 342px) {\n.pagination {\r\n        margin-left : 2%\n}\n}\n.pagination > li:hover, .active_filter {\r\n    cursor              : pointer;\r\n    -webkit-transform   : scale(1.1);\r\n    transform           : scale(1.1);\r\n    transition-duration : 0.3s;\n}\n.active_filter {\r\n    cursor              : pointer;\r\n    -webkit-transform   : scale(1.15);\r\n    transform           : scale(1.15);\r\n    transition-duration : 0.3s;\r\n    box-shadow          : 0 0 10px #555;\r\n    -moz-box-shadow     : 0 0 10px #555;\r\n    -webkit-box-shadow  : 0 0 10px #555;\r\n    -o-box-shadow       : 0 0 10px #555;\n}\n.dropify-render img {\r\n    width : 100%;\n}\n.font-ccc {\r\n    color : #ccc;\n}\n.dropify-wrapper,\r\n.dropify-wrapper .dropify-clear {\r\n    font-family : \"Open Sans\", sans-serif;\n}\n.dropify-wrapper.has-error {\r\n    border-color : #ff6666;\n}\n.dropify-errors-container.visible {\r\n    background-color : #ff6666;\n}\n.dropify-wrapper .dropify-message p.dropify-error {\r\n    color : #ff6666;\n}", ""]);

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.aden{position:relative;-webkit-filter:hue-rotate(-20deg) contrast(.9) saturate(.85) brightness(1.2);filter:hue-rotate(-20deg) contrast(.9) saturate(.85) brightness(1.2)\n}\n.aden:after,.aden:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n.aden img{width:100%;z-index:1\n}\n.aden:before{z-index:2\n}\n.aden:after{z-index:3\n}\n.aden::after{background:linear-gradient(to right,rgba(66,10,14,.2),transparent);mix-blend-mode:darken\n}\n.gingham::after,.perpetua::after,.reyes::after{mix-blend-mode:soft-light\n}\n.inkwell{position:relative;-webkit-filter:sepia(.3) contrast(1.1) brightness(1.1) grayscale(1);filter:sepia(.3) contrast(1.1) brightness(1.1) grayscale(1)\n}\n.inkwell:after,.inkwell:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n.inkwell img{width:100%;z-index:1\n}\n.inkwell:before{z-index:2\n}\n.inkwell:after{z-index:3\n}\n.perpetua{position:relative\n}\n.perpetua:after,.perpetua:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n.perpetua img{width:100%;z-index:1\n}\n.perpetua:before{z-index:2\n}\n.perpetua:after{z-index:3\n}\n.perpetua::after{background:linear-gradient(to bottom,#005b9a,#e6c13d);opacity:.5\n}\n.reyes{position:relative;-webkit-filter:sepia(.22) brightness(1.1) contrast(.85) saturate(.75);filter:sepia(.22) brightness(1.1) contrast(.85) saturate(.75)\n}\n.reyes:after,.reyes:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n.reyes img{width:100%;z-index:1\n}\n.reyes:before{z-index:2\n}\n.reyes:after{z-index:3\n}\n.reyes::after{background:#efcdad;opacity:.5\n}\n.gingham{position:relative;-webkit-filter:brightness(1.05) hue-rotate(-10deg);filter:brightness(1.05) hue-rotate(-10deg)\n}\n.gingham:after,.gingham:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n.gingham img{width:100%;z-index:1\n}\n.gingham:before{z-index:2\n}\n.gingham:after{z-index:3\n}\n.gingham::after{background:#e6e6fa\n}\n.toaster{position:relative;-webkit-filter:contrast(1.5) brightness(.9);filter:contrast(1.5) brightness(.9)\n}\n.toaster:after,.toaster:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n.toaster img{width:100%;z-index:1\n}\n.toaster:before{z-index:2\n}\n.toaster:after{z-index:3\n}\n.toaster::after{background:radial-gradient(circle,#804e0f,#3b003b);mix-blend-mode:screen\n}\n.walden{position:relative;-webkit-filter:brightness(1.1) hue-rotate(-10deg) sepia(.3) saturate(1.6);filter:brightness(1.1) hue-rotate(-10deg) sepia(.3) saturate(1.6)\n}\n.walden:after,.walden:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n.walden img{width:100%;z-index:1\n}\n.walden:before{z-index:2\n}\n.walden:after{z-index:3\n}\n.walden::after{background:#04c;mix-blend-mode:screen;opacity:.3\n}\n.hudson{position:relative;-webkit-filter:brightness(1.2) contrast(.9) saturate(1.1);filter:brightness(1.2) contrast(.9) saturate(1.1)\n}\n.hudson:after,.hudson:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n.hudson img{width:100%;z-index:1\n}\n.hudson:before{z-index:2\n}\n.hudson:after{z-index:3\n}\n.hudson::after{background:radial-gradient(circle,#a6b1ff 50%,#342134);mix-blend-mode:multiply;opacity:.5\n}\n.earlybird{position:relative;-webkit-filter:contrast(.9) sepia(.2);filter:contrast(.9) sepia(.2)\n}\n.earlybird:after,.earlybird:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n.earlybird img{width:100%;z-index:1\n}\n.earlybird:before{z-index:2\n}\n.earlybird:after{z-index:3\n}\n.earlybird::after{background:radial-gradient(circle,#d0ba8e 20%,#360309 85%,#1d0210 100%);mix-blend-mode:overlay\n}\n.mayfair{position:relative;-webkit-filter:contrast(1.1) saturate(1.1);filter:contrast(1.1) saturate(1.1)\n}\n.mayfair:after,.mayfair:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n.mayfair img{width:100%;z-index:1\n}\n.mayfair:before{z-index:2\n}\n.mayfair:after{z-index:3\n}\n.mayfair::after{background:radial-gradient(circle at 40% 40%,rgba(255,255,255,.8),rgba(255,200,200,.6),#111 60%);mix-blend-mode:overlay;opacity:.4\n}\n.lofi{position:relative;-webkit-filter:saturate(1.1) contrast(1.5);filter:saturate(1.1) contrast(1.5)\n}\n.lofi:after,.lofi:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n.lofi img{width:100%;z-index:1\n}\n.lofi:before{z-index:2\n}\n.lofi:after{z-index:3\n}\n.lofi::after{background:radial-gradient(circle,transparent 70%,#222 150%);mix-blend-mode:multiply\n}\n._1977{position:relative;-webkit-filter:contrast(1.1) brightness(1.1) saturate(1.3);filter:contrast(1.1) brightness(1.1) saturate(1.3)\n}\n._1977:after,._1977:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n._1977 img{width:100%;z-index:1\n}\n._1977:before{z-index:2\n}\n._1977:after{z-index:3;background:rgba(243,106,188,.3);mix-blend-mode:screen\n}\n.brooklyn{position:relative;-webkit-filter:contrast(.9) brightness(1.1);filter:contrast(.9) brightness(1.1)\n}\n.brooklyn:after,.brooklyn:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n.brooklyn img{width:100%;z-index:1\n}\n.brooklyn:before{z-index:2\n}\n.brooklyn:after{z-index:3\n}\n.brooklyn::after{background:radial-gradient(circle,rgba(168,223,193,.4) 70%,#c4b7c8);mix-blend-mode:overlay\n}\n.xpro2{position:relative;-webkit-filter:sepia(.3);filter:sepia(.3)\n}\n.xpro2:after,.xpro2:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n.xpro2 img{width:100%;z-index:1\n}\n.xpro2:before{z-index:2\n}\n.xpro2:after{z-index:3\n}\n.xpro2::after{background:radial-gradient(circle,#e6e7e0 40%,rgba(43,42,161,.6) 110%);mix-blend-mode:color-burn\n}\n.nashville{position:relative;-webkit-filter:sepia(.2) contrast(1.2) brightness(1.05) saturate(1.2);filter:sepia(.2) contrast(1.2) brightness(1.05) saturate(1.2)\n}\n.nashville:after,.nashville:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n.nashville img{width:100%;z-index:1\n}\n.nashville:before{z-index:2\n}\n.nashville:after{z-index:3\n}\n.nashville::after{background:rgba(0,70,150,.4);mix-blend-mode:lighten\n}\n.nashville::before{background:rgba(247,176,153,.56);mix-blend-mode:darken\n}\n.lark{position:relative;-webkit-filter:contrast(.9);filter:contrast(.9)\n}\n.lark:after,.lark:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n.lark img{width:100%;z-index:1\n}\n.lark:before{z-index:2\n}\n.lark:after{z-index:3\n}\n.lark::after{background:rgba(242,242,242,.8);mix-blend-mode:darken\n}\n.lark::before{background:#22253f;mix-blend-mode:color-dodge\n}\n.moon{position:relative;-webkit-filter:grayscale(1) contrast(1.1) brightness(1.1);filter:grayscale(1) contrast(1.1) brightness(1.1)\n}\n.moon:after,.moon:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n.moon img{width:100%;z-index:1\n}\n.moon:before{z-index:2\n}\n.moon:after{z-index:3\n}\n.moon::before{background:#a0a0a0;mix-blend-mode:soft-light\n}\n.moon::after{background:#383838;mix-blend-mode:lighten\n}\n.clarendon{position:relative;-webkit-filter:contrast(1.2) saturate(1.35);filter:contrast(1.2) saturate(1.35)\n}\n.clarendon:after,.clarendon:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n.clarendon img{width:100%;z-index:1\n}\n.clarendon:before{z-index:2;background:rgba(127,187,227,.2);mix-blend-mode:overlay\n}\n.clarendon:after{z-index:3\n}\n.willow{position:relative;-webkit-filter:grayscale(.5) contrast(.95) brightness(.9);filter:grayscale(.5) contrast(.95) brightness(.9)\n}\n.willow:after,.willow:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n.willow img{width:100%;z-index:1\n}\n.willow:before{z-index:2\n}\n.willow:after{z-index:3\n}\n.willow::before{background-color:radial-gradient(40%,circle,#d4a9af 55%,#000 150%);mix-blend-mode:overlay\n}\n.willow::after{background-color:#d8cdcb;mix-blend-mode:color\n}\n.rise{position:relative;-webkit-filter:brightness(1.05) sepia(.2) contrast(.9) saturate(.9);filter:brightness(1.05) sepia(.2) contrast(.9) saturate(.9)\n}\n.rise:after,.rise:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n.rise img{width:100%;z-index:1\n}\n.rise:before{z-index:2\n}\n.rise:after{z-index:3\n}\n.rise::after{background:radial-gradient(circle,rgba(232,197,152,.8),transparent 90%);mix-blend-mode:overlay;opacity:.6\n}\n.rise::before{background:radial-gradient(circle,rgba(236,205,169,.15) 55%,rgba(50,30,7,.4));mix-blend-mode:multiply\n}\n.slumber{position:relative;-webkit-filter:saturate(.66) brightness(1.05);filter:saturate(.66) brightness(1.05)\n}\n.slumber:after,.slumber:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n.slumber img{width:100%;z-index:1\n}\n.slumber:before{z-index:2\n}\n.slumber:after{z-index:3\n}\n.slumber::after{background:rgba(125,105,24,.5);mix-blend-mode:soft-light\n}\n.slumber::before{background:rgba(69,41,12,.4);mix-blend-mode:lighten\n}\n.brannan{position:relative;-webkit-filter:sepia(.5) contrast(1.4);filter:sepia(.5) contrast(1.4)\n}\n.brannan:after,.brannan:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n.brannan img{width:100%;z-index:1\n}\n.brannan:before{z-index:2\n}\n.brannan:after{z-index:3\n}\n.brannan::after{background-color:rgba(161,44,199,.31);mix-blend-mode:lighten\n}\n.valencia{position:relative;-webkit-filter:contrast(1.08) brightness(1.08) sepia(.08);filter:contrast(1.08) brightness(1.08) sepia(.08)\n}\n.valencia:after,.valencia:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n.valencia img{width:100%;z-index:1\n}\n.valencia:before{z-index:2\n}\n.valencia:after{z-index:3\n}\n.valencia::after{background:#3a0339;mix-blend-mode:exclusion;opacity:.5\n}\n.kelvin{position:relative\n}\n.kelvin:after,.kelvin:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n.kelvin img{width:100%;z-index:1\n}\n.kelvin:before{z-index:2\n}\n.kelvin:after{z-index:3\n}\n.kelvin::after{background:#b77d21;mix-blend-mode:overlay\n}\n.kelvin::before{background:#382c34;mix-blend-mode:color-dodge\n}\n.maven{position:relative;-webkit-filter:sepia(.25) brightness(.95) contrast(.95) saturate(1.5);filter:sepia(.25) brightness(.95) contrast(.95) saturate(1.5)\n}\n.maven:after,.maven:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none\n}\n.maven img{width:100%;z-index:1\n}\n.maven:before{z-index:2\n}\n.maven:after{z-index:3;background:rgba(3,230,26,.2);mix-blend-mode:hue\n}", ""]);

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n@charset \"UTF-8\";/*!\n * =============================================================\n * dropify v0.2.1 - Override your input files with style.\n * https://github.com/JeremyFagis/dropify\n *\n * (c) 2016 - Jeremy FAGIS <jeremy@fagis.fr> (http://fagis.fr)\n * =============================================================\n */\n@font-face{font-family:dropify;src:url("+__webpack_require__(300)+");src:url("+__webpack_require__(300)+"#iefix) format(\"embedded-opentype\"),url("+__webpack_require__(356)+") format(\"woff\"),url("+__webpack_require__(355)+") format(\"truetype\"),url("+__webpack_require__(354)+"#dropify) format(\"svg\");font-weight:400;font-style:normal\n}\n.dropify-font:before,.dropify-wrapper .dropify-message span.file-icon:before,.dropify-wrapper .dropify-preview .dropify-infos .dropify-infos-inner p.dropify-filename span.file-icon:before,[class*=\" dropify-font-\"]:before,[class^=dropify-font-]:before{font-family:dropify;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-left:.2em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em\n}\n.dropify-wrapper,.dropify-wrapper .dropify-clear{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial\n}\n.dropify-wrapper.has-error .dropify-message .dropify-error,.dropify-wrapper.has-preview .dropify-clear{display:block\n}\n.dropify-font-upload:before,.dropify-wrapper .dropify-message span.file-icon:before{content:'\\e800'\n}\n.dropify-font-file:before{content:'\\e801'\n}\n.dropify-wrapper{display:block;position:relative;cursor:pointer;overflow:hidden;width:100%;max-width:100%;height:200px;padding:5px 10px;font-size:14px;line-height:22px;color:#777;background-color:#FFF;background-image:none;text-align:center;border:2px solid #E5E5E5;transition:border-color .15s linear\n}\n.dropify-wrapper:hover{background-size:30px 30px;background-image:linear-gradient(-45deg,#F6F6F6 25%,transparent 25%,transparent 50%,#F6F6F6 50%,#F6F6F6 75%,transparent 75%,transparent);-webkit-animation:stripes 2s linear infinite;animation:stripes 2s linear infinite\n}\n.dropify-wrapper.has-error{border-color:#F34141\n}\n.dropify-wrapper.has-error:hover .dropify-errors-container{visibility:visible;opacity:1;transition-delay:0s\n}\n.dropify-wrapper.disabled input{cursor:not-allowed\n}\n.dropify-wrapper.disabled:hover{background-image:none;-webkit-animation:none;animation:none\n}\n.dropify-wrapper.disabled .dropify-message{opacity:.5;text-decoration:line-through\n}\n.dropify-wrapper.disabled .dropify-infos-message{display:none\n}\n.dropify-wrapper input{position:absolute;top:0;right:0;bottom:0;left:0;height:100%;width:100%;opacity:0;cursor:pointer;z-index:5\n}\n.dropify-wrapper .dropify-message{position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)\n}\n.dropify-wrapper .dropify-message span.file-icon{font-size:50px;color:#CCC\n}\n.dropify-wrapper .dropify-message p{margin:5px 0 0\n}\n.dropify-wrapper .dropify-message p.dropify-error{color:#F34141;font-weight:700;display:none\n}\n.dropify-wrapper .dropify-clear{display:none;position:absolute;opacity:0;z-index:7;top:10px;right:10px;background:0 0;border:2px solid #FFF;text-transform:uppercase;font-size:11px;padding:4px 8px;font-weight:700;color:#FFF;transition:all .15s linear\n}\n.dropify-wrapper .dropify-clear:hover{background:rgba(255,255,255,.2)\n}\n.dropify-wrapper .dropify-preview{display:none;position:absolute;z-index:1;background-color:#FFF;padding:5px;width:100%;height:100%;top:0;right:0;bottom:0;left:0;overflow:hidden;text-align:center\n}\n.dropify-wrapper .dropify-preview .dropify-render img{top:50%;-webkit-transform:translate(0,-50%);transform:translate(0,-50%);position:relative;max-width:100%;max-height:100%;background-color:#FFF;transition:border-color .15s linear\n}\n.dropify-wrapper .dropify-preview .dropify-render i{font-size:70px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute;color:#777\n}\n.dropify-wrapper .dropify-preview .dropify-render .dropify-extension{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);margin-top:10px;text-transform:uppercase;font-weight:900;letter-spacing:-.03em;font-size:13px;width:42px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis\n}\n.dropify-wrapper .dropify-preview .dropify-infos{position:absolute;left:0;top:0;right:0;bottom:0;z-index:3;background:rgba(0,0,0,.7);opacity:0;transition:opacity .15s linear\n}\n.dropify-wrapper .dropify-preview .dropify-infos .dropify-infos-inner{position:absolute;top:50%;-webkit-transform:translate(0,-40%);transform:translate(0,-40%);-webkit-backface-visibility:hidden;backface-visibility:hidden;width:100%;padding:0 20px;transition:all .2s ease\n}\n.dropify-wrapper .dropify-preview .dropify-infos .dropify-infos-inner p{padding:0;margin:0;position:relative;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#FFF;text-align:center;line-height:25px;font-weight:700\n}\n.dropify-wrapper .dropify-preview .dropify-infos .dropify-infos-inner p.dropify-filename span.file-icon{margin-right:2px\n}\n.dropify-wrapper .dropify-preview .dropify-infos .dropify-infos-inner p.dropify-infos-message{margin-top:15px;padding-top:15px;font-size:12px;position:relative;opacity:.5\n}\n.dropify-wrapper .dropify-preview .dropify-infos .dropify-infos-inner p.dropify-infos-message::before{content:'';position:absolute;top:0;left:50%;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);background:#FFF;width:30px;height:2px\n}\n.dropify-wrapper:hover .dropify-clear,.dropify-wrapper:hover .dropify-preview .dropify-infos{opacity:1\n}\n.dropify-wrapper:hover .dropify-preview .dropify-infos .dropify-infos-inner{margin-top:-5px\n}\n.dropify-wrapper.touch-fallback{height:auto!important\n}\n.dropify-wrapper.touch-fallback:hover{background-image:none;-webkit-animation:none;animation:none\n}\n.dropify-wrapper.touch-fallback .dropify-preview{position:relative;padding:0\n}\n.dropify-wrapper.touch-fallback .dropify-preview .dropify-render{display:block;position:relative\n}\n.dropify-wrapper.touch-fallback .dropify-preview .dropify-infos .dropify-infos-inner p.dropify-infos-message::before,.dropify-wrapper.touch-fallback.has-preview .dropify-message{display:none\n}\n.dropify-wrapper.touch-fallback .dropify-preview .dropify-render .dropify-font-file{position:relative;-webkit-transform:translate(0,0);transform:translate(0,0);top:0;left:0\n}\n.dropify-wrapper.touch-fallback .dropify-preview .dropify-render .dropify-font-file::before{margin-top:30px;margin-bottom:30px\n}\n.dropify-wrapper.touch-fallback .dropify-preview .dropify-render img{position:relative;-webkit-transform:translate(0,0);transform:translate(0,0)\n}\n.dropify-wrapper.touch-fallback .dropify-preview .dropify-infos{position:relative;opacity:1;background:0 0\n}\n.dropify-wrapper.touch-fallback .dropify-preview .dropify-infos .dropify-infos-inner{position:relative;top:0;-webkit-transform:translate(0,0);transform:translate(0,0);padding:5px 90px 5px 0\n}\n.dropify-wrapper.touch-fallback .dropify-preview .dropify-infos .dropify-infos-inner p{padding:0;margin:0;position:relative;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#777;text-align:left;line-height:25px\n}\n.dropify-wrapper.touch-fallback .dropify-preview .dropify-infos .dropify-infos-inner p.dropify-filename{font-weight:700\n}\n.dropify-wrapper.touch-fallback .dropify-preview .dropify-infos .dropify-infos-inner p.dropify-infos-message{margin-top:0;padding-top:0;font-size:11px;position:relative;opacity:1\n}\n.dropify-wrapper.touch-fallback .dropify-message{-webkit-transform:translate(0,0);transform:translate(0,0);padding:40px 0\n}\n.dropify-wrapper.touch-fallback .dropify-clear{top:auto;bottom:23px;opacity:1;border-color:rgba(119,119,119,.7);color:#777\n}\n.dropify-wrapper.touch-fallback:hover .dropify-preview .dropify-infos .dropify-infos-inner{margin-top:0\n}\n.dropify-wrapper .dropify-loader{position:absolute;top:15px;right:15px;display:none;z-index:9\n}\n.dropify-wrapper .dropify-loader::after{display:block;position:relative;width:20px;height:20px;-webkit-animation:rotate .6s linear infinite;animation:rotate .6s linear infinite;border-radius:100%;border-top:1px solid #CCC;border-bottom:1px solid #777;border-left:1px solid #CCC;border-right:1px solid #777;content:''\n}\n.dropify-wrapper .dropify-errors-container{position:absolute;left:0;top:0;right:0;bottom:0;z-index:3;background:rgba(243,65,65,.8);text-align:left;visibility:hidden;opacity:0;transition:visibility 0s linear .15s,opacity .15s linear\n}\n.dropify-wrapper .dropify-errors-container ul{padding:10px 20px;margin:0;position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)\n}\n.dropify-wrapper .dropify-errors-container ul li{margin-left:20px;color:#FFF;font-weight:700\n}\n.dropify-wrapper .dropify-errors-container.visible{visibility:visible;opacity:1;transition-delay:0s\n}\n.dropify-wrapper~.dropify-errors-container ul{padding:0;margin:15px 0\n}\n.dropify-wrapper~.dropify-errors-container ul li{margin-left:20px;color:#F34141;font-weight:700\n}\n@-webkit-keyframes stripes{\nfrom{background-position:0 0\n}\nto{background-position:60px 30px\n}\n}\n@keyframes stripes{\nfrom{background-position:0 0\n}\nto{background-position:60px 30px\n}\n}\n@-webkit-keyframes rotate{\n0%{-webkit-transform:rotateZ(-360deg);transform:rotateZ(-360deg)\n}\n100%{-webkit-transform:rotateZ(0);transform:rotateZ(0)\n}\n}\n@keyframes rotate{\n0%{-webkit-transform:rotateZ(-360deg);transform:rotateZ(-360deg)\n}\n100%{-webkit-transform:rotateZ(0);transform:rotateZ(0)\n}\n}", ""]);

/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "panel"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-image"
  }), _vm._v(" Image Filters (Aden - Hudson)\n                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12 col-xs-12"
  }, [_c('div', {
    staticClass: "col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-xs-12 text-center"
  }, [_c('figure', {
    attrs: {
      "id": "imgfigure1"
    }
  }, [_c('input', {
    staticClass: " dropify",
    attrs: {
      "type": "file",
      "id": "filter-1",
      "data-show-remove": "false",
      "data-max-file-size": "3M",
      "data-allowed-file-extensions": "jpg png tif gif",
      "data-default-file": "/static/img/gallery/full/16.jpg"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12 col-xs-12 text-center"
  }, [_c('ul', {
    staticClass: "pagination"
  }, [_c('li', {
    attrs: {
      "data-filter1": "aden"
    }
  }, [_c('figure', {
    staticClass: "aden text-center"
  }, [_c('img', {
    staticClass: "temp_path1",
    attrs: {
      "src": "/static/img/gallery/full/16.jpg",
      "height": "75",
      "alt": "aden image"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Aden")])])]), _vm._v(" "), _c('li', {
    attrs: {
      "data-filter1": "brannan"
    }
  }, [_c('figure', {
    staticClass: "brannan text-center"
  }, [_c('img', {
    staticClass: "temp_path1",
    attrs: {
      "src": "/static/img/gallery/full/16.jpg",
      "height": "75",
      "alt": "brannan image"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Brannan")])])]), _vm._v(" "), _c('li', {
    attrs: {
      "data-filter1": "brooklyn"
    }
  }, [_c('figure', {
    staticClass: "brooklyn text-center"
  }, [_c('img', {
    staticClass: "temp_path1",
    attrs: {
      "src": "/static/img/gallery/full/16.jpg",
      "height": "75",
      "alt": "brooklyn image"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Brooklyn")])])]), _vm._v(" "), _c('li', {
    attrs: {
      "data-filter1": "clarendon"
    }
  }, [_c('figure', {
    staticClass: "clarendon text-center"
  }, [_c('img', {
    staticClass: "temp_path1",
    attrs: {
      "src": "/static/img/gallery/full/16.jpg",
      "height": "75",
      "alt": "clarendon image"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Clarendon")])])]), _vm._v(" "), _c('li', {
    attrs: {
      "data-filter1": "earlybird"
    }
  }, [_c('figure', {
    staticClass: "earlybird text-center"
  }, [_c('img', {
    staticClass: "temp_path1",
    attrs: {
      "src": "/static/img/gallery/full/16.jpg",
      "height": "75",
      "alt": "earlybird image"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "font-ccc"
  }, [_vm._v("Earlybird")])])]), _vm._v(" "), _c('li', {
    attrs: {
      "data-filter1": "gingham"
    }
  }, [_c('figure', {
    staticClass: "gingham text-center"
  }, [_c('img', {
    staticClass: "temp_path1",
    attrs: {
      "src": "/static/img/gallery/full/16.jpg",
      "height": "75",
      "alt": "gingham image"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Gingham")])])]), _vm._v(" "), _c('li', {
    attrs: {
      "data-filter1": "hudson"
    }
  }, [_c('figure', {
    staticClass: "hudson text-center"
  }, [_c('img', {
    staticClass: "temp_path1",
    attrs: {
      "src": "/static/img/gallery/full/16.jpg",
      "height": "75",
      "alt": "hudson image"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Hudson")])])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "panel"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-image"
  }), _vm._v(" Image Filters (Inkwell - Perpetua)\n                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12 col-xs-12"
  }, [_c('div', {
    staticClass: "col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-xs-12 text-center"
  }, [_c('figure', {
    attrs: {
      "id": "imgfigure2"
    }
  }, [_c('input', {
    staticClass: " dropify",
    attrs: {
      "type": "file",
      "id": "filter-2",
      "data-allowed-file-extensions": "jpg png tif gif",
      "data-max-file-size": "3M",
      "data-default-file": "/static/img/gallery/full/15.jpg",
      "data-show-remove": "false"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12 col-xs-12 text-center"
  }, [_c('ul', {
    staticClass: "pagination"
  }, [_c('li', {
    attrs: {
      "data-filter2": "inkwell"
    }
  }, [_c('figure', {
    staticClass: "inkwell text-center"
  }, [_c('img', {
    staticClass: "temp_path2",
    attrs: {
      "src": "/static/img/gallery/full/15.jpg",
      "height": "75",
      "alt": "inkwell image"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Inkwell")])])]), _vm._v(" "), _c('li', {
    attrs: {
      "data-filter2": "lark"
    }
  }, [_c('figure', {
    staticClass: "lark text-center"
  }, [_c('img', {
    staticClass: "temp_path2",
    attrs: {
      "src": "/static/img/gallery/full/15.jpg",
      "height": "75",
      "alt": "lark image"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "font-ccc"
  }, [_vm._v("Lark")])])]), _vm._v(" "), _c('li', {
    attrs: {
      "data-filter2": "lofi"
    }
  }, [_c('figure', {
    staticClass: "lofi text-center"
  }, [_c('img', {
    staticClass: "temp_path2",
    attrs: {
      "src": "/static/img/gallery/full/15.jpg",
      "height": "75",
      "alt": "lofi image"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Lofi")])])]), _vm._v(" "), _c('li', {
    attrs: {
      "data-filter2": "mayfair"
    }
  }, [_c('figure', {
    staticClass: "mayfair text-center"
  }, [_c('img', {
    staticClass: "temp_path2",
    attrs: {
      "src": "/static/img/gallery/full/15.jpg",
      "height": "75",
      "alt": "mayfair image"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Mayfair")])])]), _vm._v(" "), _c('li', {
    attrs: {
      "data-filter2": "moon"
    }
  }, [_c('figure', {
    staticClass: "moon text-center"
  }, [_c('img', {
    staticClass: "temp_path2",
    attrs: {
      "src": "/static/img/gallery/full/15.jpg",
      "height": "75",
      "alt": "moon image"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Moon")])])]), _vm._v(" "), _c('li', {
    attrs: {
      "data-filter2": "nashville"
    }
  }, [_c('figure', {
    staticClass: "nashville text-center"
  }, [_c('img', {
    staticClass: "temp_path2",
    attrs: {
      "src": "/static/img/gallery/full/15.jpg",
      "height": "75",
      "alt": "nashville image"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Nashville")])])]), _vm._v(" "), _c('li', {
    attrs: {
      "data-filter2": "perpetua"
    }
  }, [_c('figure', {
    staticClass: "perpetua text-center"
  }, [_c('img', {
    staticClass: "temp_path2",
    attrs: {
      "src": "/static/img/gallery/full/15.jpg",
      "height": "75",
      "alt": "perpetua image"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Perpetua")])])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "panel"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-image"
  }), _vm._v(" Image Filters (Rise - Xpro2)\n                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12 col-xs-12"
  }, [_c('div', {
    staticClass: "col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-xs-12 text-center"
  }, [_c('figure', {
    attrs: {
      "id": "imgfigure3"
    }
  }, [_c('input', {
    staticClass: " dropify",
    attrs: {
      "type": "file",
      "id": "filter-3",
      "data-allowed-file-extensions": "jpg png tif gif",
      "data-max-file-size": "3M",
      "data-default-file": "/static/img/gallery/full/5.jpg",
      "data-show-remove": "false"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12 col-xs-12 text-center"
  }, [_c('ul', {
    staticClass: "pagination"
  }, [_c('li', {
    attrs: {
      "data-filter3": "rise"
    }
  }, [_c('figure', {
    staticClass: "rise text-center"
  }, [_c('img', {
    staticClass: "temp_path3",
    attrs: {
      "src": "/static/img/gallery/full/5.jpg",
      "height": "75",
      "alt": "rise image"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Rise")])])]), _vm._v(" "), _c('li', {
    attrs: {
      "data-filter3": "slumber"
    }
  }, [_c('figure', {
    staticClass: "slumber text-center"
  }, [_c('img', {
    staticClass: "temp_path3",
    attrs: {
      "src": "/static/img/gallery/full/5.jpg",
      "height": "75",
      "alt": "slumber image"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Slumber")])])]), _vm._v(" "), _c('li', {
    attrs: {
      "data-filter3": "toaster"
    }
  }, [_c('figure', {
    staticClass: "toaster text-center"
  }, [_c('img', {
    staticClass: "temp_path3",
    attrs: {
      "src": "/static/img/gallery/full/5.jpg",
      "height": "75",
      "alt": "toaster image"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "font-ccc"
  }, [_vm._v("Toaster")])])]), _vm._v(" "), _c('li', {
    attrs: {
      "data-filter3": "valencia"
    }
  }, [_c('figure', {
    staticClass: "valencia text-center"
  }, [_c('img', {
    staticClass: "temp_path3",
    attrs: {
      "src": "/static/img/gallery/full/5.jpg",
      "height": "75",
      "alt": "valencia image"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Valencia")])])]), _vm._v(" "), _c('li', {
    attrs: {
      "data-filter3": "walden"
    }
  }, [_c('figure', {
    staticClass: "walden text-center"
  }, [_c('img', {
    staticClass: "temp_path3",
    attrs: {
      "src": "/static/img/gallery/full/5.jpg",
      "height": "75",
      "alt": "walden image"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Walden")])])]), _vm._v(" "), _c('li', {
    attrs: {
      "data-filter3": "willow"
    }
  }, [_c('figure', {
    staticClass: "willow text-center"
  }, [_c('img', {
    staticClass: "temp_path3",
    attrs: {
      "src": "/static/img/gallery/full/5.jpg",
      "height": "75",
      "alt": "willow image"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Willow")])])]), _vm._v(" "), _c('li', {
    attrs: {
      "data-filter3": "xpro2"
    }
  }, [_c('figure', {
    staticClass: "xpro2 text-center"
  }, [_c('img', {
    staticClass: "temp_path3",
    attrs: {
      "src": "/static/img/gallery/full/5.jpg",
      "height": "75",
      "alt": "xpro2 image"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Xpro2")])])])])])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0eb357f8", module.exports)
  }
}

/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(545);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("0caeadec", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0eb357f8\",\"scoped\":false,\"hasInlineConfig\":true}!./dropify.css", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0eb357f8\",\"scoped\":false,\"hasInlineConfig\":true}!./dropify.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(546);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("238fc87c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0eb357f8\",\"scoped\":false,\"hasInlineConfig\":true}!./image_filters.css", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0eb357f8\",\"scoped\":false,\"hasInlineConfig\":true}!./image_filters.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(547);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("6daee61b", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0eb357f8\",\"scoped\":false,\"hasInlineConfig\":true}!./cssgram.min.css", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0eb357f8\",\"scoped\":false,\"hasInlineConfig\":true}!./cssgram.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(548);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("31992eb0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0eb357f8\",\"scoped\":false,\"hasInlineConfig\":true}!./dropify.min.css", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0eb357f8\",\"scoped\":false,\"hasInlineConfig\":true}!./dropify.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});