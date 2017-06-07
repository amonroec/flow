webpackJsonp([66],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(926)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(409),
  /* template */
  __webpack_require__(822),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Sites/vue_workflows/laravel/resources/assets/js/components/components/grid_layout.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] grid_layout.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e5adccb", Component.options)
  } else {
    hotAPI.reload("data-v-2e5adccb", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 409:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import gridstack from "../vendors/gridstack/dist/gridstack.min.js"
// var gridstack = require("gridstack");
/* harmony default export */ __webpack_exports__["default"] = ({
    name: "grid_layout",
    mounted: function mounted() {
        "use strict";

        $(document).ready(function () {
            // $(function() {
            //     $('.grid-stack').gridstack({
            //         width: 12,
            //         alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            //         resizable: {
            //             handles: 'e, se, s, sw, w'
            //         }
            //     });
            // });
        });
    },
    destroyed: function destroyed() {}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "/*grid layouts*/\n.grid-property {\r\n    padding          : 1.5em 0;\r\n    background-color : #fff;\r\n    border           : 2px solid #888;\r\n    border-radius    : 3px;\n}\n.grid-section {\r\n    margin-top : 77px;\n}\n.grid-section h3 {\r\n    margin-left : 15px;\n}\r\n/*grid layout responsive*/\n@media only screen and (max-width : 768px) {\n.grid-selection2 {\r\n        margin-top : 22px;\n}\n}\n@media only screen and (max-width : 425px) {\n.grid-selection1 {\r\n        margin-top : 22px;\n}\n}\r\n/*grid-stack*/\n.grid-stack-item-content {\r\n    color      : #2c3e50;\r\n    text-align : center;\r\n    font-size  : 20px;\n}\n.grid-stack-item-content .fa {\r\n    font-size : 64px;\r\n    display   : block;\r\n    margin    : 20px 0 10px 0;\n}\n.grid-stack > .grid-stack-item > .grid-stack-item-content {\r\n    cursor : move;\n}", ""]);

/***/ }),

/***/ 822:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12 "
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-layout-menu-v"
  }), _vm._v(" Responsive Grid Examples\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right hidden-xs"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('p', [_vm._v("\n                                This demostrates Bootstrap Grid system and how it responds to different screen sizes.\n                            ")]), _vm._v(" "), _c('div', {}, [_c('p', {
    staticClass: "visible-lg"
  }, [_vm._v("\n                                    lg indicates that the large grid displaying. The grid stacks horizontally < 1200px.\n                                ")]), _vm._v(" "), _c('p', {
    staticClass: "visible-md"
  }, [_vm._v("\n                                    md indicates that the medium grid displaying. The grid stacks horizontally < 992px.\n                                ")]), _vm._v(" "), _c('p', {
    staticClass: "visible-sm"
  }, [_vm._v("\n                                    sm indicates that the small grid displaying. The grid stacks horizontally < 768px.\n                                ")]), _vm._v(" "), _c('p', {
    staticClass: "visible-xs"
  }, [_vm._v("\n                                    xs indicates that the extra small grid displaying. This grid is always horizontal.\n                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12 col-xs-12"
  }, [_c('div', {
    staticClass: "col-lg-4 col-md-4 col-sm-3 col-xs-4"
  }, [_c('div', {
    staticClass: "text-center grid-property"
  }, [_c('span', {
    staticClass: "visible-lg"
  }, [_vm._v(".col-lg-4")]), _vm._v(" "), _c('span', {
    staticClass: "visible-md"
  }, [_vm._v(".col-md-4")]), _vm._v(" "), _c('span', {
    staticClass: "visible-sm"
  }, [_vm._v(".col-sm-3")]), _vm._v(" "), _c('span', {
    staticClass: "visible-xs"
  }, [_vm._v(".col-xs-4")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4 col-md-2 col-sm-3 col-xs-4"
  }, [_c('div', {
    staticClass: "text-center grid-property"
  }, [_c('span', {
    staticClass: "visible-lg"
  }, [_vm._v(".col-lg-4")]), _vm._v(" "), _c('span', {
    staticClass: "visible-md"
  }, [_vm._v(".col-md-2")]), _vm._v(" "), _c('span', {
    staticClass: "visible-sm"
  }, [_vm._v(".col-sm-3")]), _vm._v(" "), _c('span', {
    staticClass: "visible-xs"
  }, [_vm._v(".col-xs-4")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4 col-md-6 col-sm-6 col-xs-4"
  }, [_c('div', {
    staticClass: "text-center grid-property"
  }, [_c('span', {
    staticClass: "visible-lg"
  }, [_vm._v(".col-lg-4")]), _vm._v(" "), _c('span', {
    staticClass: "visible-md"
  }, [_vm._v(".col-md-6")]), _vm._v(" "), _c('span', {
    staticClass: "visible-sm"
  }, [_vm._v(".col-sm-6")]), _vm._v(" "), _c('span', {
    staticClass: "visible-xs"
  }, [_vm._v(".col-xs-4")])])]), _vm._v(" "), _c('div', {
    staticClass: "grid-section"
  }, [_c('h3', [_vm._v("xs Grid")]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-5"
  }, [_c('div', {
    staticClass: "text-center grid-property"
  }, [_c('span', [_vm._v(".col-xs-5")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-4"
  }, [_c('div', {
    staticClass: "text-center grid-property"
  }, [_c('span', [_vm._v(".col-xs-4")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-3"
  }, [_c('div', {
    staticClass: "text-center grid-property"
  }, [_c('span', [_vm._v(".col-xs-3")])])])]), _vm._v(" "), _c('div', {
    staticClass: "grid-section"
  }, [_c('h3', [_vm._v("sm Grid")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-2"
  }, [_c('div', {
    staticClass: "text-center grid-property"
  }, [_c('span', [_vm._v(".col-sm-2")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: " text-center grid-property"
  }, [_c('span', [_vm._v(".col-sm-4")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "text-center grid-property"
  }, [_c('span', [_vm._v(".col-sm-6")])])])]), _vm._v(" "), _c('div', {
    staticClass: "grid-section grid-selection1"
  }, [_c('h3', [_vm._v("md Grid")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2"
  }, [_c('div', {
    staticClass: " text-center grid-property"
  }, [_c('span', [_vm._v(".col-md-2")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "text-center grid-property"
  }, [_c('span', [_vm._v(".col-md-4")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "text-center grid-property"
  }, [_c('span', [_vm._v(".col-md-6")])])])]), _vm._v(" "), _c('div', {
    staticClass: "grid-section grid-selection2"
  }, [_c('h3', [_vm._v("lg Grid")]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4"
  }, [_c('div', {
    staticClass: " text-center grid-property"
  }, [_c('span', [_vm._v(".col-lg-4")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4"
  }, [_c('div', {
    staticClass: "text-center grid-property"
  }, [_c('span', [_vm._v(".col-lg-4")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4"
  }, [_c('div', {
    staticClass: "text-center grid-property"
  }, [_c('span', [_vm._v(".col-lg-4")])])])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "background-overlay"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2e5adccb", module.exports)
  }
}

/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(585);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("304e2bbc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2e5adccb\",\"scoped\":false,\"hasInlineConfig\":true}!./grids_layout.css", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2e5adccb\",\"scoped\":false,\"hasInlineConfig\":true}!./grids_layout.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});