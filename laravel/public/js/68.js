webpackJsonp([68],{

/***/ 1045:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(707);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("317b0658", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-f78574b0\",\"scoped\":false,\"hasInlineConfig\":true}!./form_layouts.css", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-f78574b0\",\"scoped\":false,\"hasInlineConfig\":true}!./form_layouts.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 402:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "form_layouts",
    mounted: function mounted() {
        "use strict";

        $(".content .row").find('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        });

        $('[type="reset"]').on('click', function () {
            setTimeout(function () {
                $("input").iCheck("update");
            }, 10);
        });
    },
    destroyed: function destroyed() {}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.input-group-sm > .input-group-addon {\r\n    padding : 3px 10px;\n}\n.input-group-lg > .input-group-addon {\r\n    padding : 9px 16px;\n}\n.has-success .input-group-addon,\r\n.has-error .input-group-addon {\r\n    color : #fff;\n}\n.input-group-btn:last-child > .btn,\r\n.input-group-btn:last-child > .btn-group {\r\n    z-index : 0 !important;\n}\n.form-bordered .form-group > div {\r\n    padding     : 15px;\r\n    border-left : 1px solid #efefef;\n}\n.form-bordered .form-group {\r\n    margin        : 0;\r\n    border-bottom : 1px solid #efefef;\n}\n.form-bordered .control-label {\r\n    padding-top   : 17px;\r\n    margin-bottom : 0;\r\n    text-align    : right;\n}\n.form-bordered-row .form-group {\r\n    margin        : 0;\r\n    border-bottom : 1px solid #efefef;\n}\n.form-bordered-row .control-label {\r\n    padding-top   : 17px;\r\n    margin-bottom : 0;\r\n    text-align    : right;\n}\n.form-bordered-row .form-group > div {\r\n    padding : 15px;\n}\n.right_aligned button {\r\n    margin-left : 7px;\n}\n.has-success .input-group-addon,\r\n.has-error .input-group-addon {\r\n    color : #555;\n}\n.proc {\r\n    position : relative;\r\n    top      : -25px;\r\n    left     : 95%;\n}\n@media only screen and (max-width : 768px) {\n.form-bordered .form-group > div {\r\n        border : none;\n}\n}\n@media only screen and (max-width : 425px) {\n.proc {\r\n        position : relative;\r\n        top      : -25px;\r\n        left     : 91%;\n}\n}\n#tab3 .form-horizontal .radio, #tab3 .form-horizontal .checkbox,\r\n#tab3 .form-horizontal .radio-inline,#tab3 .form-horizontal .checkbox-inline {\r\n    padding-top: 0;\r\n    margin-bottom: 4px;\n}\n.m-l-10 {\r\n    margin-left :10px;\n}\n.panel-heading.tab-list {\r\n    padding: 2px 0 0 10px;\n}\n.tab-list .nav-tabs {\r\n    border-bottom: 0;\n}\n@media (min-width: 768px){\n.form-inline .form-group {\r\n        margin-bottom: 13px;\n}\n}", ""]);

/***/ }),

/***/ 880:
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
    staticClass: "panel-heading tab-list"
  }, [_c('ul', {
    staticClass: "nav nav-tabs "
  }, [_c('li', {
    staticClass: "active"
  }, [_c('a', {
    attrs: {
      "href": "#tab1",
      "data-toggle": "tab"
    }
  }, [_vm._v("\n                                    Form Actions\n                                ")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#tab2",
      "data-toggle": "tab"
    }
  }, [_vm._v("\n                                    2 Columns\n                                ")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#tab3",
      "data-toggle": "tab"
    }
  }, [_vm._v("\n                                    Form Striped\n                                ")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#tab4",
      "data-toggle": "tab"
    }
  }, [_vm._v("\n                                    More Examples\n                                ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "tab-content"
  }, [_c('div', {
    staticClass: "tab-pane fade active in",
    attrs: {
      "id": "tab1"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-pencil"
  }), _vm._v(" Form Actions On Top\n                                                ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right hidden-xs"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('form', {
    staticClass: "form-horizontal",
    attrs: {
      "action": "#"
    }
  }, [_c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-offset-3 col-sm-9"
  }, [_c('button', {
    staticClass: "btn btn-primary m-t-10",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Submit\n                                                            ")]), _vm._v("\n                                                             \n                                                            "), _c('button', {
    staticClass: "btn btn-danger m-t-10",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Cancel\n                                                            ")]), _vm._v("\n                                                             \n                                                            "), _c('button', {
    staticClass: "btn btn-default bttn_reset m-t-10",
    attrs: {
      "type": "reset"
    }
  }, [_vm._v("\n                                                                Reset\n                                                            ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-body"
  }, [_c('div', {
    staticClass: "form-group m-t-10"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputUsername1"
    }
  }, [_vm._v("\n                                                            Username\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-user"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Username",
      "id": "inputUsername1"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputEmail"
    }
  }, [_vm._v("\n                                                            Email\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa ti-email"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Email Address"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputpass"
    }
  }, [_vm._v("\n                                                            Password\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-key"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "placeholder": "Password",
      "id": "inputpass"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputnumber1"
    }
  }, [_vm._v("\n                                                            Phone Number\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-mobile"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Phone Number",
      "id": "inputnumber1"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputAddress"
    }
  }, [_vm._v("\n                                                            Address\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-pencil"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "inputAddress",
      "placeholder": "Address"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputContent1"
    }
  }, [_vm._v("Message")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('textarea', {
    staticClass: "form-control resize_vertical",
    attrs: {
      "id": "inputContent1",
      "rows": "3",
      "name": "inputContent1"
    }
  })])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-pencil"
  }), _vm._v(" Form Actions On Bottom\n                                                ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right hidden-xs"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('form', {
    staticClass: "form-horizontal",
    attrs: {
      "action": "#"
    }
  }, [_c('div', {
    staticClass: "form-body"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputUsername2"
    }
  }, [_vm._v("\n                                                            Username\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-user"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "inputUsername2",
      "placeholder": "Username"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputEmail"
    }
  }, [_vm._v("\n                                                            Email\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa ti-email"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Email Address"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "keypassword"
    }
  }, [_vm._v("\n                                                            Password\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-key"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "placeholder": "Password",
      "id": "keypassword"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputnumber2"
    }
  }, [_vm._v("\n                                                            Phone Number\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-mobile"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "inputnumber2",
      "placeholder": "Phone Number"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputAddress2"
    }
  }, [_vm._v("\n                                                            Address\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-pencil"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Address",
      "id": "inputAddress2"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputContent2"
    }
  }, [_vm._v("Message")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('textarea', {
    staticClass: "form-control resize_vertical",
    attrs: {
      "id": "inputContent2",
      "rows": "3"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-actions"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-offset-3 col-sm-9"
  }, [_c('button', {
    staticClass: "btn btn-primary m-t-10",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Submit\n                                                            ")]), _vm._v("\n                                                             \n                                                            "), _c('button', {
    staticClass: "btn btn-danger m-t-10",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Cancel\n                                                            ")]), _vm._v("\n                                                             \n                                                            "), _c('button', {
    staticClass: "btn btn-default m-t-10 bttn_reset",
    attrs: {
      "type": "reset"
    }
  }, [_vm._v("\n                                                                Reset\n                                                            ")])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-pencil"
  }), _vm._v(" Form Actions On Top & Bottom\n                                                ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right hidden-xs"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('form', {
    staticClass: "form-horizontal",
    attrs: {
      "action": "#"
    }
  }, [_c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12 text-center"
  }, [_c('button', {
    staticClass: "btn btn-primary m-t-10",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Submit\n                                                            ")]), _vm._v("\n                                                             \n                                                            "), _c('button', {
    staticClass: "btn btn-danger m-t-10",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Cancel\n                                                            ")]), _vm._v("\n                                                             \n                                                            "), _c('button', {
    staticClass: "btn btn-default bttn_reset m-t-10",
    attrs: {
      "type": "reset"
    }
  }, [_vm._v("\n                                                                Reset\n                                                            ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-body"
  }, [_c('div', {
    staticClass: "form-group m-t-10"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputUsername3"
    }
  }, [_vm._v("\n                                                            Username\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-user"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "inputUsername3",
      "placeholder": "Username"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputEmail"
    }
  }, [_vm._v("\n                                                            Email\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa ti-email"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Email Address"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "fapassword"
    }
  }, [_vm._v("\n                                                            Password\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-key"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "placeholder": "Password",
      "id": "fapassword"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputnumber3"
    }
  }, [_vm._v("\n                                                            Phone Number\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-mobile"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "inputnumber3",
      "placeholder": "Phone Number"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputAddress"
    }
  }, [_vm._v("\n                                                            Address\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-pencil"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Address"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputContent3"
    }
  }, [_vm._v("Message")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('textarea', {
    staticClass: "form-control resize_vertical",
    attrs: {
      "id": "inputContent3",
      "rows": "3"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-actions"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12 text-center"
  }, [_c('button', {
    staticClass: "btn btn-primary m-t-10",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Submit\n                                                            ")]), _vm._v("\n                                                             \n                                                            "), _c('button', {
    staticClass: "btn btn-danger m-t-10",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Cancel\n                                                            ")]), _vm._v("\n                                                             \n                                                            "), _c('button', {
    staticClass: "btn btn-default bttn_reset m-t-10",
    attrs: {
      "type": "reset"
    }
  }, [_vm._v("\n                                                                Reset\n                                                            ")])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-pencil"
  }), _vm._v(" Left Aligned\n                                                ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right hidden-xs"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('form', {
    attrs: {
      "action": "#"
    }
  }, [_c('div', [_c('button', {
    staticClass: "btn btn-primary m-t-10",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Submit")]), _vm._v("\n                                                     \n                                                    "), _c('button', {
    staticClass: "btn btn-danger m-t-10",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Cancel")]), _vm._v("\n                                                     \n                                                    "), _c('button', {
    staticClass: "btn btn-default bttn_reset m-t-10",
    attrs: {
      "type": "reset"
    }
  }, [_vm._v("Reset\n                                                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "form-body"
  }, [_c('div', {
    staticClass: "form-group m-t-10"
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "inputUsername4"
    }
  }, [_vm._v("\n                                                            Username\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-user"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "inputUsername4",
      "placeholder": "Username"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "inputEmail"
    }
  }, [_vm._v("\n                                                            Email\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa ti-email"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Email Address"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "validpassword"
    }
  }, [_vm._v("\n                                                            Password\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-key"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "placeholder": "Password",
      "id": "validpassword"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "inputnumber4"
    }
  }, [_vm._v("\n                                                            Phone Number\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-mobile"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "inputnumber4",
      "placeholder": "Phone Number"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "inputAddress"
    }
  }, [_vm._v("\n                                                            Address\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-pencil"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Address"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group mbn"
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "inputContent4"
    }
  }, [_vm._v("Message")]), _vm._v(" "), _c('textarea', {
    staticClass: "form-control resize_vertical",
    attrs: {
      "id": "inputContent4",
      "rows": "3"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-actions"
  }, [_c('button', {
    staticClass: "btn btn-primary m-t-10",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Submit")]), _vm._v("\n                                                     \n                                                    "), _c('button', {
    staticClass: "btn btn-danger m-t-10",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Cancel")]), _vm._v("\n                                                     \n                                                    "), _c('button', {
    staticClass: "btn btn-default bttn_reset m-t-10",
    attrs: {
      "type": "reset"
    }
  }, [_vm._v("Reset\n                                                    ")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-pencil"
  }), _vm._v(" Right Aligned\n                                                ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right hidden-xs"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('form', {
    staticClass: "right_aligned",
    attrs: {
      "action": "#"
    }
  }, [_c('div', {
    staticClass: "text-right "
  }, [_c('button', {
    staticClass: "btn btn-primary m-t-10",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Submit")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-danger m-t-10",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default bttn_reset m-t-10",
    attrs: {
      "type": "reset"
    }
  }, [_vm._v("Reset\n                                                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "form-body"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "inputUsername5"
    }
  }, [_vm._v("\n                                                            Username\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-user"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "inputUsername5",
      "placeholder": "Username"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "inputEmail"
    }
  }, [_vm._v("\n                                                            Email\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa ti-email"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Email Address"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "uniquepassword"
    }
  }, [_vm._v("\n                                                            Password\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-key"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "placeholder": "Password",
      "id": "uniquepassword"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "inputnumber5"
    }
  }, [_vm._v("\n                                                            Phone Number\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-mobile"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "inputnumber5",
      "placeholder": "Phone Number"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "inputAddress"
    }
  }, [_vm._v("\n                                                            Address\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-pencil"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Address"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group mbn"
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "inputContent"
    }
  }, [_vm._v("Message")]), _vm._v(" "), _c('textarea', {
    staticClass: "form-control resize_vertical",
    attrs: {
      "id": "inputContent",
      "rows": "3"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-actions text-right "
  }, [_c('button', {
    staticClass: "btn btn-primary m-t-10",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Submit")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-danger m-t-10",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default bttn_reset m-t-10",
    attrs: {
      "type": "reset"
    }
  }, [_vm._v("Reset\n                                                    ")])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "tab-pane fade",
    attrs: {
      "id": "tab2"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-pencil"
  }), _vm._v(" Form 2 Columns Default\n                                                ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right hidden-xs"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('form', {
    staticClass: "form-horizontal"
  }, [_c('div', {
    staticClass: "form-group has-success"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputSuccess1"
    }
  }, [_vm._v("First Name\n                                                            ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "inputSuccess1",
      "placeholder": "Input with success"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("\n                                                                    First name is too small\n                                                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group has-warning"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputWarning1"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "inputWarning1",
      "placeholder": "Input with warning"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("\n                                                                    Password strength: Weak\n                                                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group has-error"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputError1"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "inputError1",
      "placeholder": "Input with error"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("\n                                                                    Please enter a valid email address\n                                                                ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('form', {
    staticClass: "form-horizontal"
  }, [_c('div', {
    staticClass: "form-group has-success has-feedback"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputSuccess2"
    }
  }, [_vm._v("\n                                                                Second Name\n                                                            ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "inputSuccess2",
      "placeholder": "Input with success"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon glyphicon-ok form-control-feedback"
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("\n                                                                    Second name is too small\n                                                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group has-warning has-feedback"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputWarning2"
    }
  }, [_vm._v("\n                                                                Confirm Password\n                                                            ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "inputWarning2",
      "placeholder": "Input with warning"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon glyphicon-warning-sign form-control-feedback"
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("\n                                                                    Password mis-match\n                                                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group has-error has-feedback"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputError2"
    }
  }, [_vm._v("\n                                                                Confirm Email\n                                                            ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "inputError2",
      "placeholder": "Input with error"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon glyphicon-remove form-control-feedback"
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("\n                                                                    Email mis-match\n                                                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-sm-offset-2 col-sm-10"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Login\n                                                                ")])])])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-pencil"
  }), _vm._v(" Personal Details Horizontal\n                                                ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right hidden-xs"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', [_c('form', {
    staticClass: "form-horizontal",
    attrs: {
      "method": "post"
    }
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3",
    attrs: {
      "for": "first_Name"
    }
  }, [_vm._v("First Name:\n                                                            ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "first_Name",
      "placeholder": "First Name"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3",
    attrs: {
      "for": "input_Email"
    }
  }, [_vm._v("Email:")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "input_Email",
      "placeholder": "Email"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3",
    attrs: {
      "for": "input_Password"
    }
  }, [_vm._v("Password:")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "input_Password",
      "placeholder": "Password"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3 m-t-10"
  }, [_vm._v("Date of Birth:\n                                                            ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3 m-t-10"
  }, [_c('select', {
    staticClass: "form-control"
  }, [_c('option', [_vm._v("Date")]), _vm._v(" "), _c('option', [_vm._v("1")]), _vm._v(" "), _c('option', [_vm._v("2")]), _vm._v(" "), _c('option', [_vm._v("3")]), _vm._v(" "), _c('option', [_vm._v("4")]), _vm._v(" "), _c('option', [_vm._v("5")]), _vm._v(" "), _c('option', [_vm._v("6")]), _vm._v(" "), _c('option', [_vm._v("7")]), _vm._v(" "), _c('option', [_vm._v("8")]), _vm._v(" "), _c('option', [_vm._v("9")]), _vm._v(" "), _c('option', [_vm._v("10")]), _vm._v(" "), _c('option', [_vm._v("11")]), _vm._v(" "), _c('option', [_vm._v("12")]), _vm._v(" "), _c('option', [_vm._v("13")]), _vm._v(" "), _c('option', [_vm._v("14")]), _vm._v(" "), _c('option', [_vm._v("15")]), _vm._v(" "), _c('option', [_vm._v("16")]), _vm._v(" "), _c('option', [_vm._v("17")]), _vm._v(" "), _c('option', [_vm._v("18")]), _vm._v(" "), _c('option', [_vm._v("19")]), _vm._v(" "), _c('option', [_vm._v("20")]), _vm._v(" "), _c('option', [_vm._v("21")]), _vm._v(" "), _c('option', [_vm._v("22")]), _vm._v(" "), _c('option', [_vm._v("23")]), _vm._v(" "), _c('option', [_vm._v("24")]), _vm._v(" "), _c('option', [_vm._v("25")]), _vm._v(" "), _c('option', [_vm._v("26")]), _vm._v(" "), _c('option', [_vm._v("27")]), _vm._v(" "), _c('option', [_vm._v("28")]), _vm._v(" "), _c('option', [_vm._v("29")]), _vm._v(" "), _c('option', [_vm._v("30")]), _vm._v(" "), _c('option', [_vm._v("31")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3 m-t-10"
  }, [_c('select', {
    staticClass: "form-control"
  }, [_c('option', [_vm._v("Month")]), _vm._v(" "), _c('option', [_vm._v("1")]), _vm._v(" "), _c('option', [_vm._v("2")]), _vm._v(" "), _c('option', [_vm._v("3")]), _vm._v(" "), _c('option', [_vm._v("4")]), _vm._v(" "), _c('option', [_vm._v("5")]), _vm._v(" "), _c('option', [_vm._v("6")]), _vm._v(" "), _c('option', [_vm._v("7")]), _vm._v(" "), _c('option', [_vm._v("8")]), _vm._v(" "), _c('option', [_vm._v("9")]), _vm._v(" "), _c('option', [_vm._v("10")]), _vm._v(" "), _c('option', [_vm._v("11")]), _vm._v(" "), _c('option', [_vm._v("12")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3 m-t-10"
  }, [_c('select', {
    staticClass: "form-control"
  }, [_c('option', [_vm._v("Year")]), _vm._v(" "), _c('option', [_vm._v("1991")]), _vm._v(" "), _c('option', [_vm._v("1992")]), _vm._v(" "), _c('option', [_vm._v("1993")]), _vm._v(" "), _c('option', [_vm._v("1994")]), _vm._v(" "), _c('option', [_vm._v("1995")]), _vm._v(" "), _c('option', [_vm._v("1996")]), _vm._v(" "), _c('option', [_vm._v("1997")]), _vm._v(" "), _c('option', [_vm._v("1998")]), _vm._v(" "), _c('option', [_vm._v("1999")]), _vm._v(" "), _c('option', [_vm._v("2000")]), _vm._v(" "), _c('option', [_vm._v("2001")]), _vm._v(" "), _c('option', [_vm._v("2002")]), _vm._v(" "), _c('option', [_vm._v("2003")]), _vm._v(" "), _c('option', [_vm._v("2004")]), _vm._v(" "), _c('option', [_vm._v("2005")]), _vm._v(" "), _c('option', [_vm._v("2006")]), _vm._v(" "), _c('option', [_vm._v("2007")]), _vm._v(" "), _c('option', [_vm._v("2008")]), _vm._v(" "), _c('option', [_vm._v("2009")]), _vm._v(" "), _c('option', [_vm._v("2000")]), _vm._v(" "), _c('option', [_vm._v("2011")]), _vm._v(" "), _c('option', [_vm._v("2012")]), _vm._v(" "), _c('option', [_vm._v("2013")]), _vm._v(" "), _c('option', [_vm._v("2014")]), _vm._v(" "), _c('option', [_vm._v("2015")]), _vm._v(" "), _c('option', [_vm._v("2016")]), _vm._v(" "), _c('option', [_vm._v("2017")]), _vm._v(" "), _c('option', [_vm._v("2018")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3",
    attrs: {
      "for": "Zip_Code"
    }
  }, [_vm._v("Zip Code:\n                                                            ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "Zip_Code",
      "placeholder": "Zip Code"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3",
    attrs: {
      "for": "city"
    }
  }, [_vm._v("City:")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "city",
      "placeholder": "City"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-sm-offset-3 col-sm-9"
  }, [_c('label', {
    staticClass: "checkbox-inline"
  }, [_c('input', {
    staticClass: "square-blue",
    attrs: {
      "type": "checkbox",
      "value": "news"
    }
  }), _vm._v(" Send me latest news and updates.\n                                                                ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3",
    attrs: {
      "for": "last_Name"
    }
  }, [_vm._v("Last Name:\n                                                            ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "last_Name",
      "placeholder": "Last Name"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3",
    attrs: {
      "for": "phone_Number"
    }
  }, [_vm._v("Phone:")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "tel",
      "id": "phone_Number",
      "placeholder": "Phone Number"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3",
    attrs: {
      "for": "confirm_Password"
    }
  }, [_vm._v("Confirm Password:")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "confirm_Password",
      "placeholder": "Confirm Password"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3",
    attrs: {
      "for": "postal_Address"
    }
  }, [_vm._v("Address:")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('textarea', {
    staticClass: "form-control resize_vertical",
    attrs: {
      "rows": "3",
      "id": "postal_Address",
      "placeholder": "Postal Address"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3"
  }, [_vm._v("Gender:")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('label', {
    staticClass: "radio-inline"
  }, [_c('input', {
    staticClass: "radio-blue",
    attrs: {
      "type": "radio",
      "name": "genderRadios"
    }
  }), _vm._v(" Male")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('label', {
    staticClass: "radio-inline"
  }, [_c('input', {
    staticClass: "radio-blue",
    attrs: {
      "type": "radio",
      "name": "genderRadios",
      "value": "female"
    }
  }), _vm._v(" Female\n                                                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-sm-offset-3 col-sm-9"
  }, [_c('label', {
    staticClass: "checkbox-inline"
  }, [_c('input', {
    staticClass: "square-blue",
    attrs: {
      "type": "checkbox",
      "value": "agree"
    }
  }), _vm._v(" I agree to the\n                                                                    "), _c('a', {
    staticClass: "forgot",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Terms and Conditions")]), _vm._v(" .\n                                                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group form-actions"
  }, [_c('div', {
    staticClass: "col-sm-offset-3 col-sm-9"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Submit\n                                                                ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-effect-ripple btn-default  reset_btn1",
    attrs: {
      "type": "reset"
    }
  }, [_vm._v("\n                                                                    Reset\n                                                                ")])])])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-pencil"
  }), _vm._v(" Form 2 Columns Readonly\n                                                ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right hidden-xs"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('form', {
    staticClass: "form-horizontal",
    attrs: {
      "action": "#"
    }
  }, [_c('div', {
    staticClass: "form-body"
  }, [_c('h3', [_vm._v("Personal")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6 col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-4 control-label"
  }, [_vm._v("\n                                                                    First Name :\n                                                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('p', {
    staticClass: "form-control-static"
  }, [_vm._v("Jenny")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-4 control-label"
  }, [_vm._v("\n                                                                    Last Name :\n                                                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('p', {
    staticClass: "form-control-static"
  }, [_vm._v("Kerry")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6 col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-4 control-label",
    attrs: {
      "for": "inputEmail"
    }
  }, [_vm._v("Email :\n                                                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('p', {
    staticClass: "form-control-static"
  }, [_c('a', {
    staticClass: "forgot",
    attrs: {
      "href": "mailto:whisfat1935@jourrapide.com"
    }
  }, [_vm._v("\n                                                                                Jenny321@example.com\n                                                                            ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-4 control-label"
  }, [_vm._v("Gender :\n                                                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('p', {
    staticClass: "form-control-static"
  }, [_vm._v("Female")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6 col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-4 control-label"
  }, [_vm._v("Birthday :\n                                                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('p', {
    staticClass: "form-control-static"
  }, [_vm._v("10.11.1980")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-4 control-label"
  }, [_vm._v("Phone :\n                                                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('p', {
    staticClass: "form-control-static"
  }, [_vm._v("\n                                                                        321-333-5432\n                                                                    ")])])])])]), _vm._v(" "), _c('h3', [_vm._v("Address")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6 col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-4 control-label"
  }, [_vm._v("\n                                                                    Address 1 :\n                                                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('p', {
    staticClass: "form-control-static"
  }, [_vm._v("\n                                                                        1219 Quiet Subdivision\n                                                                    ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-4 control-label"
  }, [_vm._v("\n                                                                    Address 2 :\n                                                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('p', {
    staticClass: "form-control-static"
  }, [_vm._v("\n                                                                        3536 Petunia Way\n                                                                    ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6 col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-4 control-label"
  }, [_vm._v("City :")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('p', {
    staticClass: "form-control-static"
  }, [_vm._v("Albany")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-4 control-label"
  }, [_vm._v("State :\n                                                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('p', {
    staticClass: "form-control-static"
  }, [_vm._v("New york")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6 col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-4 control-label"
  }, [_vm._v("\n                                                                    Country :\n                                                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('p', {
    staticClass: "form-control-static"
  }, [_vm._v("USA")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-4 control-label"
  }, [_vm._v("\n                                                                    Post Code :\n                                                                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('p', {
    staticClass: "form-control-static"
  }, [_vm._v("12203")])])])])])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "tab-pane fade",
    attrs: {
      "id": "tab3"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-move"
  }), _vm._v(" Form Bordered Striped\n                                                ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right hidden-xs"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body border"
  }, [_c('form', {
    staticClass: "form-horizontal form-bordered",
    attrs: {
      "method": "post",
      "enctype": "multipart/form-data"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group striped-col"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label"
  }, [_vm._v("Static")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('p', {
    staticClass: "form-control-static"
  }, [_vm._v("\n                                                                Static text\n                                                            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-text-input1"
    }
  }, [_vm._v("Text")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "example-text-input1",
      "name": "example-text-input",
      "placeholder": "Text"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("\n                                                        This is a help text\n                                                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group striped-col"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-email1"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "example-email1",
      "name": "example-email",
      "placeholder": "Email"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-password1"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "example-password1",
      "name": "example-password",
      "placeholder": "Password"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group striped-col"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-disabled1"
    }
  }, [_vm._v("Disabled")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "example-disabled1",
      "name": "example-disabled",
      "placeholder": "Disabled",
      "disabled": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-textarea-input2"
    }
  }, [_vm._v("Textarea")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('textarea', {
    staticClass: "form-control resize_vertical",
    attrs: {
      "id": "example-textarea-input2",
      "name": "example-textarea-input",
      "rows": "7",
      "placeholder": "Description...."
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group striped-col"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-select1"
    }
  }, [_vm._v("Select")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('select', {
    staticClass: "form-control",
    attrs: {
      "id": "example-select1",
      "name": "example-select",
      "size": "1"
    }
  }, [_c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("\n                                                                    Please select\n                                                                ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Bootstrap")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("CSS")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("JavaScript")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "4"
    }
  }, [_vm._v("HTML")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-multiple-select2"
    }
  }, [_vm._v("Multiple")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('select', {
    staticClass: "form-control",
    attrs: {
      "id": "example-multiple-select2",
      "name": "example-multiple-select",
      "size": "5",
      "multiple": ""
    }
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Option #1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("Option #2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("Option #3")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "4"
    }
  }, [_vm._v("Option #4")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "5"
    }
  }, [_vm._v("Option #5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "6"
    }
  }, [_vm._v("Option #6")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "7"
    }
  }, [_vm._v("Option #7")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "8"
    }
  }, [_vm._v("Option #8")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "9"
    }
  }, [_vm._v("Option #9")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "10"
    }
  }, [_vm._v("Option #10")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group striped-col"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label"
  }, [_vm._v("Radio Buttons\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', [_c('label', {
    attrs: {
      "for": "example-radio4"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "example-radio4",
      "name": "example-radios",
      "value": "option1"
    }
  }), _vm._v("  HTML")])]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": "example-radio5"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "example-radio5",
      "name": "example-radios",
      "value": "option2"
    }
  }), _vm._v("  CSS")])]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": "example-radio6"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "example-radio6",
      "name": "example-radios",
      "value": "option3"
    }
  }), _vm._v("  JavaScript\n                                                                ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label"
  }, [_vm._v("\n                                                            Inline Radio Buttons\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('label', {
    staticClass: "radio-inline",
    attrs: {
      "for": "example-inline-radio7"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "example-inline-radio7",
      "name": "example-inline-radios",
      "value": "option1"
    }
  }), _vm._v("  HTML\n                                                                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('label', {
    staticClass: "radio-inline",
    attrs: {
      "for": "example-inline-radio8"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "example-inline-radio8",
      "name": "example-inline-radios",
      "value": "option2"
    }
  }), _vm._v("  CSS\n                                                                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('label', {
    staticClass: "radio-inline",
    attrs: {
      "for": "example-inline-radio9"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "example-inline-radio9",
      "name": "example-inline-radios",
      "value": "option3"
    }
  }), _vm._v("  JavaScript\n                                                                    ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group striped-col"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label"
  }, [_vm._v("Checkboxes")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', [_c('label', {
    attrs: {
      "for": "example-checkbox4"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "example-checkbox4",
      "name": "example-checkbox1",
      "value": "option1"
    }
  }), _vm._v("  HTML\n                                                                ")])]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": "example-checkbox5"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "example-checkbox5",
      "name": "example-checkbox2",
      "value": "option2"
    }
  }), _vm._v("  CSS\n                                                                ")])]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": "example-checkbox6"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "example-checkbox6",
      "name": "example-checkbox3",
      "value": "option3"
    }
  }), _vm._v("  JavaScript\n                                                                ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label"
  }, [_vm._v("\n                                                            Inline Checkboxes\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('label', {
    staticClass: "checkbox-inline",
    attrs: {
      "for": "example-inline-checkbox7"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "example-inline-checkbox7",
      "name": "example-inline-checkbox1",
      "value": "option1"
    }
  }), _vm._v("  HTML\n                                                                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('label', {
    staticClass: "checkbox-inline",
    attrs: {
      "for": "example-inline-checkbox8"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "example-inline-checkbox8",
      "name": "example-inline-checkbox2",
      "value": "option2"
    }
  }), _vm._v("  CSS\n                                                                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('label', {
    staticClass: "checkbox-inline",
    attrs: {
      "for": "example-inline-checkbox9"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "example-inline-checkbox9",
      "name": "example-inline-checkbox3",
      "value": "option3"
    }
  }), _vm._v("  JavaScript\n                                                                    ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group striped-col "
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-file-input1"
    }
  }, [_vm._v("File")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    attrs: {
      "type": "file",
      "id": "example-file-input1",
      "name": "example-file-input"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-file-multiple-input1"
    }
  }, [_vm._v("\n                                                            Multiple File\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    attrs: {
      "type": "file",
      "id": "example-file-multiple-input1",
      "name": "example-file-multiple-input",
      "multiple": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group form-actions"
  }, [_c('div', {
    staticClass: "col-sm-9 col-sm-offset-3"
  }, [_c('button', {
    staticClass: "btn btn-effect-ripple btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("\n                                                                Submit\n                                                            ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-effect-ripple btn-default reset_btn2",
    attrs: {
      "type": "reset"
    }
  }, [_vm._v("\n                                                                Reset\n                                                            ")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-move"
  }), _vm._v(" Form Seperated Row Striped\n                                                ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right hidden-xs"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body border"
  }, [_c('form', {
    staticClass: "form-horizontal form-bordered-row",
    attrs: {
      "method": "post",
      "enctype": "multipart/form-data"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group striped-col"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label"
  }, [_vm._v("Static")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('p', {
    staticClass: "form-control-static"
  }, [_vm._v("\n                                                                Static text\n                                                            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-text-input2"
    }
  }, [_vm._v("Text")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "example-text-input2",
      "name": "example-text-input",
      "placeholder": "Text"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("\n                                                            This is a help text\n                                                        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group striped-col"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-email2"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "example-email2",
      "name": "example-email",
      "placeholder": "Email"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-password2"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "example-password2",
      "name": "example-password",
      "placeholder": "Password"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group striped-col"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-disabled2"
    }
  }, [_vm._v("Disabled")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "example-disabled2",
      "name": "example-disabled",
      "placeholder": "Disabled",
      "disabled": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-textarea-input1"
    }
  }, [_vm._v("Textarea")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('textarea', {
    staticClass: "form-control resize_vertical",
    attrs: {
      "id": "example-textarea-input1",
      "name": "example-textarea-input",
      "rows": "7",
      "placeholder": "Description.."
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group striped-col"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-select2"
    }
  }, [_vm._v("Select")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('select', {
    staticClass: "form-control",
    attrs: {
      "id": "example-select2",
      "name": "example-select",
      "size": "1"
    }
  }, [_c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("\n                                                                    Please select\n                                                                ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Bootstrap")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("CSS")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("JavaScript")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "4"
    }
  }, [_vm._v("HTML")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-multiple-select1"
    }
  }, [_vm._v("Multiple")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('select', {
    staticClass: "form-control",
    attrs: {
      "id": "example-multiple-select1",
      "name": "example-multiple-select",
      "size": "5",
      "multiple": ""
    }
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Option #1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("Option #2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("Option #3")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "4"
    }
  }, [_vm._v("Option #4")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "5"
    }
  }, [_vm._v("Option #5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "6"
    }
  }, [_vm._v("Option #6")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "7"
    }
  }, [_vm._v("Option #7")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "8"
    }
  }, [_vm._v("Option #8")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "9"
    }
  }, [_vm._v("Option #9")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "10"
    }
  }, [_vm._v("Option #10")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group striped-col"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label"
  }, [_vm._v("Radio Buttons\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', [_c('label', {
    attrs: {
      "for": "example-radio7"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "example-radio7",
      "name": "example-radios",
      "value": "option1"
    }
  }), _vm._v("  HTML")])]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": "example-radio8"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "example-radio8",
      "name": "example-radios",
      "value": "option2"
    }
  }), _vm._v("  CSS")])]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": "example-radio9"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "example-radio9",
      "name": "example-radios",
      "value": "option3"
    }
  }), _vm._v("  JavaScript\n                                                                ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label"
  }, [_vm._v("\n                                                            Inline Radio Buttons\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('label', {
    staticClass: "radio-inline ",
    attrs: {
      "for": "example-inline-radio10"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "example-inline-radio10",
      "name": "example-inline-radios",
      "value": "option1"
    }
  }), _vm._v("  HTML\n                                                                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('label', {
    staticClass: "radio-inline",
    attrs: {
      "for": "example-inline-radio11"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "example-inline-radio11",
      "name": "example-inline-radios",
      "value": "option2"
    }
  }), _vm._v("  CSS\n                                                                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('label', {
    staticClass: "radio-inline",
    attrs: {
      "for": "example-inline-radio12"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "example-inline-radio12",
      "name": "example-inline-radios",
      "value": "option3"
    }
  }), _vm._v("  JavaScript\n                                                                    ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group striped-col"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label"
  }, [_vm._v("Checkboxes")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', [_c('label', {
    attrs: {
      "for": "example-checkbox13"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "example-checkbox13",
      "name": "example-checkbox1",
      "value": "option1"
    }
  }), _vm._v("  HTML\n                                                                ")])]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": "example-checkbox14"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "example-checkbox14",
      "name": "example-checkbox2",
      "value": "option2"
    }
  }), _vm._v("  CSS\n                                                                ")])]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": "example-checkbox15"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "example-checkbox15",
      "name": "example-checkbox3",
      "value": "option3"
    }
  }), _vm._v("  JavaScript\n                                                                ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label"
  }, [_vm._v("\n                                                            Inline Checkboxes\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('label', {
    staticClass: "checkbox-inline",
    attrs: {
      "for": "example-inline-checkbox16"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "example-inline-checkbox16",
      "name": "example-inline-checkbox1",
      "value": "option1"
    }
  }), _vm._v("  HTML\n                                                                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('label', {
    staticClass: "checkbox-inline",
    attrs: {
      "for": "example-inline-checkbox17"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "example-inline-checkbox17",
      "name": "example-inline-checkbox2",
      "value": "option2"
    }
  }), _vm._v("  CSS\n                                                                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('label', {
    staticClass: "checkbox-inline",
    attrs: {
      "for": "example-inline-checkbox18"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "example-inline-checkbox18",
      "name": "example-inline-checkbox3",
      "value": "option3"
    }
  }), _vm._v("  JavaScript\n                                                                    ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group striped-col "
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-file-input2"
    }
  }, [_vm._v("File")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    attrs: {
      "type": "file",
      "id": "example-file-input2",
      "name": "example-file-input"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-file-multiple-input2"
    }
  }, [_vm._v("\n                                                            Multiple File\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    attrs: {
      "type": "file",
      "id": "example-file-multiple-input2",
      "name": "example-file-multiple-input",
      "multiple": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group form-actions"
  }, [_c('div', {
    staticClass: "col-sm-9 col-sm-offset-3"
  }, [_c('button', {
    staticClass: "btn btn-effect-ripple btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("\n                                                                Submit\n                                                            ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-effect-ripple btn-default reset_btn3",
    attrs: {
      "type": "reset"
    }
  }, [_vm._v("\n                                                                Reset\n                                                            ")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-move"
  }), _vm._v(" Form Bordered\n                                                ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right hidden-xs"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body border"
  }, [_c('form', {
    staticClass: "form-horizontal form-bordered",
    attrs: {
      "method": "post",
      "enctype": "multipart/form-data"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label"
  }, [_vm._v("Static")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('p', {
    staticClass: "form-control-static"
  }, [_vm._v("\n                                                                Static text\n                                                            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-text-input3"
    }
  }, [_vm._v("Text")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "example-text-input3",
      "name": "example-text-input",
      "placeholder": "Text"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("\n                                                            This is a help text\n                                                        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-email3"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "example-email3",
      "name": "example-email",
      "placeholder": "Email"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-password3"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "example-password3",
      "name": "example-password",
      "placeholder": "Password"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-disabled3"
    }
  }, [_vm._v("Disabled")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "example-disabled3",
      "name": "example-disabled",
      "placeholder": "Disabled",
      "disabled": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-textarea-input3"
    }
  }, [_vm._v("Textarea")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('textarea', {
    staticClass: "form-control resize_vertical",
    attrs: {
      "id": "example-textarea-input3",
      "name": "example-textarea-input",
      "rows": "7",
      "placeholder": "Description.."
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-select3"
    }
  }, [_vm._v("Select")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('select', {
    staticClass: "form-control",
    attrs: {
      "id": "example-select3",
      "name": "example-select",
      "size": "1"
    }
  }, [_c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("\n                                                                    Please select\n                                                                ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Bootstrap")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("CSS")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("JavaScript")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "4"
    }
  }, [_vm._v("HTML")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-multiple-select3"
    }
  }, [_vm._v("Multiple")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('select', {
    staticClass: "form-control",
    attrs: {
      "id": "example-multiple-select3",
      "name": "example-multiple-select",
      "size": "5",
      "multiple": ""
    }
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Option #1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("Option #2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("Option #3")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "4"
    }
  }, [_vm._v("Option #4")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "5"
    }
  }, [_vm._v("Option #5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "6"
    }
  }, [_vm._v("Option #6")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "7"
    }
  }, [_vm._v("Option #7")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "8"
    }
  }, [_vm._v("Option #8")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "9"
    }
  }, [_vm._v("Option #9")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "10"
    }
  }, [_vm._v("Option #10")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label"
  }, [_vm._v("Radio Buttons\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', [_c('label', {
    attrs: {
      "for": "example-radio10"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "example-radio10",
      "name": "example-radios10",
      "value": "option1"
    }
  }), _vm._v("  HTML\n                                                                ")])]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": "example-radio11"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "example-radio11",
      "name": "example-radios10",
      "value": "option2"
    }
  }), _vm._v("  CSS\n                                                                ")])]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": "example-radio12"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "example-radio12",
      "name": "example-radios10",
      "value": "option3"
    }
  }), _vm._v("  JavaScript\n                                                                ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label"
  }, [_vm._v("\n                                                            Inline Radio Buttons\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('label', {
    staticClass: "radio-inline",
    attrs: {
      "for": "example-inline-radio13"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "example-inline-radio13",
      "name": "example-inline-radios13",
      "value": "option1"
    }
  }), _vm._v("  HTML\n                                                                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('label', {
    staticClass: "radio-inline",
    attrs: {
      "for": "example-inline-radio14"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "example-inline-radio14",
      "name": "example-inline-radios13",
      "value": "option2"
    }
  }), _vm._v("  CSS\n                                                                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('label', {
    staticClass: "radio-inline",
    attrs: {
      "for": "example-inline-radio15"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "example-inline-radio15",
      "name": "example-inline-radios13",
      "value": "option3"
    }
  }), _vm._v("  JavaScript\n                                                                    ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label"
  }, [_vm._v("Checkboxes")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', [_c('label', {
    attrs: {
      "for": "example-checkbox7"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "example-checkbox7",
      "name": "example-checkbox7",
      "value": "option1"
    }
  }), _vm._v("  HTML\n                                                                ")])]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": "example-checkbox8"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "example-checkbox8",
      "name": "example-checkbox8",
      "value": "option2"
    }
  }), _vm._v("  CSS\n                                                                ")])]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": "example-checkbox9"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "example-checkbox9",
      "name": "example-checkbox9",
      "value": "option3"
    }
  }), _vm._v("  JavaScript\n                                                                ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label"
  }, [_vm._v("\n                                                            Inline Checkboxes\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('label', {
    staticClass: "checkbox-inline",
    attrs: {
      "for": "example-inline-checkbox4"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "example-inline-checkbox4",
      "name": "example-inline-checkbox1",
      "value": "option1"
    }
  }), _vm._v("  HTML\n                                                                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('label', {
    staticClass: "checkbox-inline",
    attrs: {
      "for": "example-inline-checkbox5"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "example-inline-checkbox5",
      "name": "example-inline-checkbox2",
      "value": "option2"
    }
  }), _vm._v("  CSS\n                                                                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('label', {
    staticClass: "checkbox-inline",
    attrs: {
      "for": "example-inline-checkbox6"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "example-inline-checkbox6",
      "name": "example-inline-checkbox3",
      "value": "option3"
    }
  }), _vm._v("  JavaScript\n                                                                    ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-file-input3"
    }
  }, [_vm._v("File")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    attrs: {
      "type": "file",
      "id": "example-file-input3",
      "name": "example-file-input3"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-file-multiple-input3"
    }
  }, [_vm._v("\n                                                            Multiple File\n                                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    attrs: {
      "type": "file",
      "id": "example-file-multiple-input3",
      "name": "example-file-multiple-input3",
      "multiple": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group form-actions"
  }, [_c('div', {
    staticClass: "col-sm-9 col-sm-offset-3"
  }, [_c('button', {
    staticClass: "btn btn-effect-ripple btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("\n                                                                Submit\n                                                            ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-effect-ripple btn-default reset_btn4",
    attrs: {
      "type": "reset"
    }
  }, [_vm._v("\n                                                                Reset\n                                                            ")])])])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "tab-pane fade",
    attrs: {
      "id": "tab4"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-heart"
  }), _vm._v(" Vertical Form Layout\n                                                ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right hidden-xs"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('form', [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "inputEmail1"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "inputEmail1",
      "placeholder": "Email"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "inputPassword1"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "inputPassword1",
      "placeholder": "Password"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    staticStyle: {
      "margin-right": "7px"
    },
    attrs: {
      "type": "checkbox"
    }
  }), _vm._v(" Remember me\n                                                    ")])]), _vm._v(" "), _c('div', [_c('button', {
    staticClass: "btn btn-primary m-t-10",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Login\n                                                    ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-pencil"
  }), _vm._v(" Inline Form Layout\n                                                ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right hidden-xs"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('form', {
    staticClass: "form-inline",
    attrs: {
      "role": "form"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "sr-only",
    attrs: {
      "for": "inputEmail2"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "inputEmail2",
      "placeholder": "Email"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "sr-only",
    attrs: {
      "for": "inputPassword2"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "inputPassword2",
      "placeholder": "Password"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    staticClass: "mar-right4",
    attrs: {
      "type": "checkbox"
    }
  }), _vm._v(" Remember me\n                                                    ")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary m-t-10",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Login")])])])]), _vm._v(" "), _c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-pencil"
  }), _vm._v(" Static Form Control\n                                                ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right hidden-xs"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('form', {
    staticClass: "form-horizontal"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3",
    attrs: {
      "for": "inputEmail"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('p', {
    staticClass: "form-control-static"
  }, [_vm._v("\n                                                            harrypotter@mail.com\n                                                        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3",
    attrs: {
      "for": "inputPassword"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "inputPassword3",
      "placeholder": "Password"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-sm-offset-3 col-sm-9"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    attrs: {
      "type": "checkbox"
    }
  }), _vm._v(" Remember me\n                                                            ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-sm-offset-3 col-sm-9"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Login")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-pencil"
  }), _vm._v(" Button Dropdowns\n                                                ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right hidden-xs"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('form', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "col-sm-6 col-xs-12 m-t-10"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('div', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-info dropdown-toggle",
    attrs: {
      "type": "button",
      "data-toggle": "dropdown"
    }
  }, [_vm._v("\n                                                                        Action\n                                                                        "), _c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("\n                                                                                    Another action\n                                                                                ")])]), _vm._v(" "), _c('li', {
    staticClass: "divider"
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("\n                                                                                    Separated link\n                                                                                ")])])])]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-xs-12 m-t-10"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-info dropdown-toggle",
    attrs: {
      "type": "button",
      "data-toggle": "dropdown"
    }
  }, [_vm._v("\n                                                                        Action\n                                                                        "), _c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu pull-right"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("\n                                                                                    Another action\n                                                                                ")])]), _vm._v(" "), _c('li', {
    staticClass: "divider"
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("\n                                                                                    Separated link\n                                                                                ")])])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-12"
  }, [_c('hr')]), _vm._v(" "), _c('form', [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('div', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-warning dropdown-toggle",
    attrs: {
      "type": "button",
      "data-toggle": "dropdown"
    }
  }, [_vm._v("\n                                                                Action\n                                                                "), _c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("\n                                                                            Another action\n                                                                        ")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("\n                                                                            Something else here\n                                                                        ")])]), _vm._v(" "), _c('li', {
    staticClass: "divider"
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("\n                                                                            Separated link\n                                                                        ")])])])]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text"
    }
  })]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-warning dropdown-toggle",
    attrs: {
      "type": "button",
      "data-toggle": "dropdown"
    }
  }, [_vm._v("\n                                                                Action\n                                                                "), _c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu pull-right"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("\n                                                                            Another action\n                                                                        ")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("\n                                                                            Something else here\n                                                                        ")])]), _vm._v(" "), _c('li', {
    staticClass: "divider"
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("\n                                                                            Separated link\n                                                                        ")])])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-pencil"
  }), _vm._v(" Disabled Inputs\n                                                ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right hidden-xs"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('form', [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Disabled input",
      "disabled": "disabled"
    }
  })]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('form', {
    staticClass: "form-horizontal"
  }, [_c('fieldset', {
    attrs: {
      "disabled": "disabled"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3",
    attrs: {
      "for": "inputEmail3"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "inputEmail3",
      "placeholder": "Email"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3",
    attrs: {
      "for": "inputPassword4"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "inputPassword4",
      "placeholder": "Password"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-sm-offset-3 col-sm-9"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    attrs: {
      "type": "checkbox",
      "disabled": ""
    }
  }), _vm._v(" Remember me\n                                                                ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-sm-offset-3 col-sm-9"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Login\n                                                            ")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-pencil"
  }), _vm._v(" Supported Form Controls in\n                                                    Twitter Bootstrap\n                                                ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right hidden-xs"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('form', {
    staticClass: "form-horizontal"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3 col-xs-12",
    attrs: {
      "for": "inputEmail4"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9 col-xs-12"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "inputEmail4",
      "placeholder": "Email"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3 col-xs-12",
    attrs: {
      "for": "inputPassword5"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9 col-xs-12"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "inputPassword5",
      "placeholder": "Password"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3 col-xs-12",
    attrs: {
      "for": "confirmPassword"
    }
  }, [_vm._v("\n                                                        Confirm Password\n                                                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9 col-xs-12"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "confirmPassword",
      "placeholder": "Confirm Password"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3 col-xs-12",
    attrs: {
      "for": "firstName"
    }
  }, [_vm._v("\n                                                        First Name\n                                                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9 col-xs-12"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "firstName",
      "placeholder": "First Name"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3 col-xs-12",
    attrs: {
      "for": "lastName"
    }
  }, [_vm._v("Last Name\n                                                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9 col-xs-12"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "lastName",
      "placeholder": "Last Name"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3 col-xs-12",
    attrs: {
      "for": "phoneNumber"
    }
  }, [_vm._v("Phone")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9 col-xs-12"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "tel",
      "id": "phoneNumber",
      "placeholder": "Phone Number"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3 col-xs-12"
  }, [_vm._v("\n                                                        Date of Birth\n                                                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3 col-xs-12 m-t-10"
  }, [_c('select', {
    staticClass: "form-control"
  }, [_c('option', [_vm._v("Date")]), _vm._v(" "), _c('option', [_vm._v("1")]), _vm._v(" "), _c('option', [_vm._v("2")]), _vm._v(" "), _c('option', [_vm._v("3")]), _vm._v(" "), _c('option', [_vm._v("4")]), _vm._v(" "), _c('option', [_vm._v("5")]), _vm._v(" "), _c('option', [_vm._v("6")]), _vm._v(" "), _c('option', [_vm._v("7")]), _vm._v(" "), _c('option', [_vm._v("8")]), _vm._v(" "), _c('option', [_vm._v("9")]), _vm._v(" "), _c('option', [_vm._v("10")]), _vm._v(" "), _c('option', [_vm._v("11")]), _vm._v(" "), _c('option', [_vm._v("12")]), _vm._v(" "), _c('option', [_vm._v("13")]), _vm._v(" "), _c('option', [_vm._v("14")]), _vm._v(" "), _c('option', [_vm._v("15")]), _vm._v(" "), _c('option', [_vm._v("16")]), _vm._v(" "), _c('option', [_vm._v("17")]), _vm._v(" "), _c('option', [_vm._v("18")]), _vm._v(" "), _c('option', [_vm._v("19")]), _vm._v(" "), _c('option', [_vm._v("20")]), _vm._v(" "), _c('option', [_vm._v("21")]), _vm._v(" "), _c('option', [_vm._v("22")]), _vm._v(" "), _c('option', [_vm._v("23")]), _vm._v(" "), _c('option', [_vm._v("24")]), _vm._v(" "), _c('option', [_vm._v("25")]), _vm._v(" "), _c('option', [_vm._v("26")]), _vm._v(" "), _c('option', [_vm._v("27")]), _vm._v(" "), _c('option', [_vm._v("28")]), _vm._v(" "), _c('option', [_vm._v("29")]), _vm._v(" "), _c('option', [_vm._v("30")]), _vm._v(" "), _c('option', [_vm._v("31")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3 col-xs-12 m-t-10"
  }, [_c('select', {
    staticClass: "form-control"
  }, [_c('option', [_vm._v("Month")]), _vm._v(" "), _c('option', [_vm._v("1")]), _vm._v(" "), _c('option', [_vm._v("2")]), _vm._v(" "), _c('option', [_vm._v("3")]), _vm._v(" "), _c('option', [_vm._v("4")]), _vm._v(" "), _c('option', [_vm._v("5")]), _vm._v(" "), _c('option', [_vm._v("6")]), _vm._v(" "), _c('option', [_vm._v("7")]), _vm._v(" "), _c('option', [_vm._v("8")]), _vm._v(" "), _c('option', [_vm._v("9")]), _vm._v(" "), _c('option', [_vm._v("10")]), _vm._v(" "), _c('option', [_vm._v("11")]), _vm._v(" "), _c('option', [_vm._v("12")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3 col-xs-12 m-t-10"
  }, [_c('select', {
    staticClass: "form-control"
  }, [_c('option', [_vm._v("Year")]), _vm._v(" "), _c('option', [_vm._v("1991")]), _vm._v(" "), _c('option', [_vm._v("1992")]), _vm._v(" "), _c('option', [_vm._v("1993")]), _vm._v(" "), _c('option', [_vm._v("1994")]), _vm._v(" "), _c('option', [_vm._v("1995")]), _vm._v(" "), _c('option', [_vm._v("1996")]), _vm._v(" "), _c('option', [_vm._v("1997")]), _vm._v(" "), _c('option', [_vm._v("1998")]), _vm._v(" "), _c('option', [_vm._v("1999")]), _vm._v(" "), _c('option', [_vm._v("2000")]), _vm._v(" "), _c('option', [_vm._v("2001")]), _vm._v(" "), _c('option', [_vm._v("2002")]), _vm._v(" "), _c('option', [_vm._v("2003")]), _vm._v(" "), _c('option', [_vm._v("2004")]), _vm._v(" "), _c('option', [_vm._v("2005")]), _vm._v(" "), _c('option', [_vm._v("2006")]), _vm._v(" "), _c('option', [_vm._v("2007")]), _vm._v(" "), _c('option', [_vm._v("2008")]), _vm._v(" "), _c('option', [_vm._v("2009")]), _vm._v(" "), _c('option', [_vm._v("2000")]), _vm._v(" "), _c('option', [_vm._v("2011")]), _vm._v(" "), _c('option', [_vm._v("2012")]), _vm._v(" "), _c('option', [_vm._v("2013")]), _vm._v(" "), _c('option', [_vm._v("2014")]), _vm._v(" "), _c('option', [_vm._v("2015")]), _vm._v(" "), _c('option', [_vm._v("2016")]), _vm._v(" "), _c('option', [_vm._v("2017")]), _vm._v(" "), _c('option', [_vm._v("2018")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3 col-xs-12",
    attrs: {
      "for": "postalAddress"
    }
  }, [_vm._v("Address")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9 col-xs-12"
  }, [_c('textarea', {
    staticClass: "form-control resize_vertical",
    attrs: {
      "rows": "3",
      "id": "postalAddress",
      "placeholder": "Postal Address"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3 col-xs-12",
    attrs: {
      "for": "ZipCode"
    }
  }, [_vm._v("Zip Code\n                                                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9 col-xs-12"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "ZipCode",
      "placeholder": "Zip Code"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3 col-xs-12"
  }, [_vm._v("Gender")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9 col-xs-12"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('label', {
    attrs: {
      "for": "gender-radio1"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "gender-radio1",
      "name": "gender-radios1",
      "value": "option1"
    }
  }), _vm._v(" Male\n                                                                ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('label', {
    attrs: {
      "for": "gender-radio2"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "gender-radio2",
      "name": "gender-radios1",
      "value": "option2"
    }
  }), _vm._v(" Female\n                                                                ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('label', {
    attrs: {
      "for": "gender-radio3"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "gender-radio3",
      "name": "gender-radios1",
      "value": "option3"
    }
  }), _vm._v(" Other\n                                                                ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-sm-offset-3 col-sm-offset-3 col-xs-9"
  }, [_c('label', {
    staticClass: "checkbox-inline"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "value": "news"
    }
  }), _vm._v("  Send me latest news and updates.\n                                                        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-sm-offset-3 col-sm-offset-3 col-xs-9"
  }, [_c('label', {
    staticClass: "checkbox-inline"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "value": "agree"
    }
  }), _vm._v("  I agree to the\n                                                            "), _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("\n                                                                    Terms and Conditions\n                                                                ")]), _vm._v(" .\n                                                        ")])])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-sm-offset-3 col-sm-offset-3 col-xs-9"
  }, [_c('input', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button",
      "value": "Submit"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "reset"
    }
  }, [_vm._v("Reset")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-check-box"
  }), _vm._v(" Horizontal Form Layout\n                                                ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right hidden-xs"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('form', {
    staticClass: "form-horizontal"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3",
    attrs: {
      "for": "inputEmail"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "inputEmail",
      "placeholder": "Email"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label hidden-xs col-sm-3",
    attrs: {
      "for": "inputPassword"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('label', {
    staticClass: "control-label visible-xs  hidden-lg hidden-sm hidden-sm col-xs-2",
    attrs: {
      "for": "inputPassword"
    }
  }, [_vm._v("Pwd")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "inputPassword",
      "placeholder": "Password"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-sm-offset-3 col-sm-9"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    attrs: {
      "type": "checkbox"
    }
  }), _vm._v(" Remember me\n                                                            ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-sm-offset-3 col-sm-9"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Login")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-move"
  }), _vm._v(" General Controls\n                                                ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right hidden-xs"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('form', {
    staticClass: "form-horizontal",
    attrs: {
      "method": "post",
      "enctype": "multipart/form-data"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label"
  }, [_vm._v("Static")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('p', {
    staticClass: "form-control-static"
  }, [_vm._v("\n                                                            Static text\n                                                        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-text-input"
    }
  }, [_vm._v("Text")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "example-text-input",
      "name": "example-text-input",
      "placeholder": "Text"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("\n                                                                    This is a help text\n                                                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-email"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "example-email",
      "name": "example-email",
      "placeholder": "Email"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-password"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "example-password",
      "name": "example-password",
      "placeholder": "Password"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-disabled"
    }
  }, [_vm._v("Disabled")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "example-disabled",
      "name": "example-disabled",
      "placeholder": "Disabled",
      "disabled": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-textarea-input"
    }
  }, [_vm._v("Textarea")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('textarea', {
    staticClass: "form-control resize_vertical",
    attrs: {
      "id": "example-textarea-input",
      "name": "example-textarea-input",
      "rows": "7",
      "placeholder": "Description.."
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-select"
    }
  }, [_vm._v("Select")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('select', {
    staticClass: "form-control",
    attrs: {
      "id": "example-select",
      "name": "example-select",
      "size": "1"
    }
  }, [_c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("\n                                                                Please select\n                                                            ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Bootstrap")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("CSS")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("JavaScript")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "4"
    }
  }, [_vm._v("HTML")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-multiple-select"
    }
  }, [_vm._v("Multiple")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('select', {
    staticClass: "form-control",
    attrs: {
      "id": "example-multiple-select",
      "name": "example-multiple-select",
      "size": "5",
      "multiple": ""
    }
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Option #1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("Option #2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("Option #3")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "4"
    }
  }, [_vm._v("Option #4")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "5"
    }
  }, [_vm._v("Option #5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "6"
    }
  }, [_vm._v("Option #6")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "7"
    }
  }, [_vm._v("Option #7")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "8"
    }
  }, [_vm._v("Option #8")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "9"
    }
  }, [_vm._v("Option #9")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "10"
    }
  }, [_vm._v("Option #10")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label"
  }, [_vm._v("Radio Buttons")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', {
    staticClass: "m-l-10 m-t-6"
  }, [_c('label', {
    attrs: {
      "for": "example-radio1"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "example-radio1",
      "name": "example-radios",
      "value": "option1"
    }
  }), _vm._v("  HTML\n                                                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "m-l-10"
  }, [_c('label', {
    attrs: {
      "for": "example-radio2"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "example-radio2",
      "name": "example-radios",
      "value": "option2"
    }
  }), _vm._v("  CSS\n                                                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "m-l-10"
  }, [_c('label', {
    attrs: {
      "for": "example-radio3"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "example-radio3",
      "name": "example-radios",
      "value": "option3"
    }
  }), _vm._v("  JavaScript\n                                                            ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label"
  }, [_vm._v("\n                                                        Inline Radio Buttons\n                                                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('label', {
    staticClass: "radio-inline m-l-10",
    attrs: {
      "for": "example-inline-radio1"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "example-inline-radio1",
      "name": "example-inline-radios",
      "value": "option1"
    }
  }), _vm._v("  HTML\n                                                        ")]), _vm._v(" "), _c('label', {
    staticClass: "radio-inline",
    attrs: {
      "for": "example-inline-radio2"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "example-inline-radio2",
      "name": "example-inline-radios",
      "value": "option2"
    }
  }), _vm._v("  CSS\n                                                        ")]), _vm._v(" "), _c('label', {
    staticClass: "radio-inline m-l-10",
    attrs: {
      "for": "example-inline-radio3"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "example-inline-radio3",
      "name": "example-inline-radios",
      "value": "option3"
    }
  }), _vm._v("  JavaScript\n                                                        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label"
  }, [_vm._v("Checkboxes")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', {
    staticClass: "m-l-10 m-t-6"
  }, [_c('label', {
    attrs: {
      "for": "example-checkbox1"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "example-checkbox1",
      "name": "example-checkbox1",
      "value": "option1"
    }
  }), _vm._v("  HTML\n                                                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "m-l-10"
  }, [_c('label', {
    attrs: {
      "for": "example-checkbox2"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "example-checkbox2",
      "name": "example-checkbox2",
      "value": "option2"
    }
  }), _vm._v("  CSS\n                                                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "m-l-10"
  }, [_c('label', {
    attrs: {
      "for": "example-checkbox3"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "example-checkbox3",
      "name": "example-checkbox3",
      "value": "option3"
    }
  }), _vm._v("  JavaScript\n                                                            ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label"
  }, [_vm._v("\n                                                        Inline Checkboxes\n                                                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('label', {
    staticClass: "checkbox-inline m-l-10",
    attrs: {
      "for": "example-inline-checkbox1"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "example-inline-checkbox1",
      "name": "example-inline-checkbox1",
      "value": "option1"
    }
  }), _vm._v("  HTML\n                                                        ")]), _vm._v(" "), _c('label', {
    staticClass: "checkbox-inline m-l-10",
    attrs: {
      "for": "example-inline-checkbox2"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "example-inline-checkbox2",
      "name": "example-inline-checkbox2",
      "value": "option2"
    }
  }), _vm._v("  CSS\n                                                        ")]), _vm._v(" "), _c('label', {
    staticClass: "checkbox-inline m-l-10",
    attrs: {
      "for": "example-inline-checkbox3"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "example-inline-checkbox3",
      "name": "example-inline-checkbox3",
      "value": "option3"
    }
  }), _vm._v("  JavaScript\n                                                        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group "
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-file-input"
    }
  }, [_vm._v("File")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9 m-t-10"
  }, [_c('input', {
    attrs: {
      "type": "file",
      "id": "example-file-input",
      "name": "example-file-input"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "example-file-multiple-input"
    }
  }, [_vm._v("\n                                                        Multiple File\n                                                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9 m-t-10"
  }, [_c('input', {
    attrs: {
      "type": "file",
      "id": "example-file-multiple-input",
      "name": "example-file-multiple-input",
      "multiple": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group form-actions"
  }, [_c('div', {
    staticClass: "col-sm-9 col-sm-offset-3"
  }, [_c('button', {
    staticClass: "btn btn-effect-ripple btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Submit\n                                                        ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-effect-ripple btn-default reset_btn5",
    attrs: {
      "type": "reset"
    }
  }, [_vm._v("\n                                                            Reset\n                                                        ")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-pencil"
  }), _vm._v(" Twitter Bootstrap Form\n                                                    Validation States\n                                                ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right hidden-xs"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('form', {
    staticClass: "form-horizontal"
  }, [_c('div', {
    staticClass: "form-group has-success"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputSuccess3"
    }
  }, [_vm._v("Username")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "inputSuccess3",
      "placeholder": "Input with success"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("\n                                                                    Username is available\n                                                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group has-warning"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputWarning3"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "inputWarning3",
      "placeholder": "Input with warning"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("\n                                                                    Password strength: Weak\n                                                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group has-error"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputError3"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "inputError3",
      "placeholder": "Input with error"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("\n                                                                    Please enter a valid email address\n                                                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-sm-offset-3 col-sm-9"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Login")])])])]), _vm._v(" "), _c('form', {
    staticClass: "form-horizontal"
  }, [_c('div', {
    staticClass: "form-group has-success has-feedback"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputSuccess"
    }
  }, [_vm._v("Username")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "inputSuccess",
      "placeholder": "Input with success"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon glyphicon-ok form-control-feedback"
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("\n                                                                    Username is available\n                                                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group has-warning has-feedback"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputWarning"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "inputWarning",
      "placeholder": "Input with warning"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon glyphicon-warning-sign form-control-feedback"
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("\n                                                                    Password strength: Weak\n                                                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group has-error has-feedback"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": "inputError"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "inputError",
      "placeholder": "Input with error"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon glyphicon-remove form-control-feedback"
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("\n                                                                    Please enter a valid email address\n                                                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-sm-offset-3 col-sm-9"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Login")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-12"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-pencil"
  }), _vm._v(" Bootstrap Form Inputs\n                                                ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right hidden-xs"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('form', {
    staticClass: "form-horizontal",
    attrs: {
      "role": "form"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-2 control-label"
  }, [_vm._v("\n                                                        Email Address\n                                                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa ti-email"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Email Address"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-2 control-label"
  }, [_vm._v("Password")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa ti-key"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "exampleInputPassword1",
      "placeholder": "Password"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group has-success"
  }, [_c('label', {
    staticClass: "col-sm-2 control-label"
  }, [_vm._v("\n                                                        Validation Email\n                                                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('div', {
    staticClass: "input-group input-icon right"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa ti-email"
  })]), _vm._v(" "), _c('input', {
    staticClass: "input-error form-control",
    attrs: {
      "id": "email1",
      "type": "text",
      "placeholder": "Email Address"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group has-error"
  }, [_c('label', {
    staticClass: "col-sm-2 control-label"
  }, [_vm._v("\n                                                        Validation Password\n                                                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('div', {
    staticClass: "input-group input-icon right"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa ti-key"
  })]), _vm._v(" "), _c('input', {
    staticClass: "input-error form-control",
    attrs: {
      "type": "password",
      "placeholder": "Password"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-2 control-label"
  }, [_vm._v("\n                                                        Checkbox Left\n                                                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('div', {
    staticClass: "input-group-addon"
  }, [_c('input', {
    attrs: {
      "type": "checkbox"
    }
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-2 control-label"
  }, [_vm._v("\n                                                        Checkbox right\n                                                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "input-group-addon"
  }, [_c('input', {
    attrs: {
      "type": "checkbox"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-2 control-label"
  }, [_vm._v("\n                                                        Radio on left\n                                                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('div', {
    staticClass: "input-group-addon"
  }, [_c('input', {
    attrs: {
      "type": "radio"
    }
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-2 control-label"
  }, [_vm._v("\n                                                        Radio on right\n                                                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "input-group-addon"
  }, [_c('input', {
    attrs: {
      "type": "radio"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-2 control-label"
  }, [_vm._v("\n                                                        Processing right\n                                                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('div', {
    staticClass: "input-icon left spinner"
  }, [_c('input', {
    staticClass: "input-error form-control",
    attrs: {
      "id": "email",
      "type": "text",
      "placeholder": " "
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw fa-spin fa-spinner proc text-primary"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-2 control-label"
  }, [_vm._v("\n                                                        Static Paragraph\n                                                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('p', {
    staticClass: "form-control"
  }, [_vm._v("\n                                                            email@example.com\n                                                        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-2 control-label"
  }, [_vm._v("Readonly")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Readonly",
      "readonly": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-8 col-sm-offset-2"
  }, [_c('button', {
    staticClass: "btn btn-primary m-t-10",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Submit\n                                                        ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-danger m-t-10",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Cancel\n                                                        ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-effect-ripple btn-default m-t-10 reset_btn6",
    attrs: {
      "type": "reset"
    }
  }, [_vm._v("\n                                                            Reset\n                                                        ")])])])])])])])])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f78574b0", module.exports)
  }
}

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1045)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(402),
  /* template */
  __webpack_require__(880),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Sites/vue_workflows/laravel/resources/assets/js/components/components/form-layouts.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] form-layouts.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f78574b0", Component.options)
  } else {
    hotAPI.reload("data-v-f78574b0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});