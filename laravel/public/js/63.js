webpackJsonp([63],{

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
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
    name: "err404",
    mounted: function mounted() {
        $(window).on('load', function () {
            $('.preloader img').fadeOut();
            $('.preloader').fadeOut();
            $("html,body").css("height", "auto");
        });
    },
    destroyed: function destroyed() {}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600);", ""]);
exports.push([module.i, "/*404 and 500 pages css*/\n\nbody {\r\n    font-family: 'Open Sans', sans-serif;\n}\r\n\r\n\r\n/*404*/\n.error_img img {\r\n    width: 100%;\n}\n.error_img {\r\n    margin-top: 10%;\n}\r\n\r\n\r\n/*500*/\n.bg-500 {\r\n    background-color: #C79D6F;\n}\n.error_msg img {\r\n    width: 100%;\n}\n@media screen and (max-width: 470px) {\n.error_msg img {\r\n        margin-top: 7%;\n}\n}\n.seperator {\r\n    border: 0;\r\n    height: 1px;\r\n    margin: 20px 0;\r\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, .6), rgba(0, 0, 0, 0));\n}\n.link-home {\r\n    border-radius: 30px;\n}\r\n\r\n\r\n/* ===== Preloader =====*/\n.preloader {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 100000;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    background: #ffffff;\n}\n.loader_img {\r\n    width: 50px;\r\n    height: 50px;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    background-position: center;\r\n    margin: -25px 0 0 -25px;\n}\r\n", ""]);

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(904)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(373),
  /* template */
  __webpack_require__(813),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Sites/vue_workflows/laravel/resources/assets/js/components/components/404.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] 404.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e634140", Component.options)
  } else {
    hotAPI.reload("data-v-1e634140", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 756:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: /home/vagrant/Sites/vue_workflows/laravel/node_modules/gifsicle/vendor/gifsicle: 1: /home/vagrant/Sites/vue_workflows/laravel/node_modules/gifsicle/vendor/gifsicle: Syntax error: \"(\" unexpected\n\n    at Promise.all.then.arr (/home/vagrant/Sites/vue_workflows/laravel/node_modules/execa/index.js:201:11)\n    at process._tickCallback (internal/process/next_tick.js:109:7)");

/***/ }),

/***/ 813:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1"
  }, [_c('div', {
    staticClass: "text-center"
  }, [_c('div', [_c('div', {
    staticClass: "error_img"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(756),
      "alt": "404 error image"
    }
  })]), _vm._v(" "), _c('hr', {
    staticClass: "seperator"
  }), _vm._v(" "), _c('a', {
    staticClass: "btn btn-primary link-home",
    attrs: {
      "href": "/"
    }
  }, [_vm._v("Go Home")])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1e634140", module.exports)
  }
}

/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(563);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("7114ec9e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1e634140\",\"scoped\":false,\"hasInlineConfig\":true}!./404.css", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1e634140\",\"scoped\":false,\"hasInlineConfig\":true}!./404.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});