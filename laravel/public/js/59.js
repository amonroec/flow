webpackJsonp([59],{

/***/ 1013:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(674);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("47aaeccc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-d5fafe96\",\"scoped\":false,\"hasInlineConfig\":true}!./invoice.css", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-d5fafe96\",\"scoped\":false,\"hasInlineConfig\":true}!./invoice.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1013)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(415),
  /* template */
  __webpack_require__(868),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Sites/vue_workflows/laravel/resources/assets/js/components/components/invoice.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] invoice.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d5fafe96", Component.options)
  } else {
    hotAPI.reload("data-v-d5fafe96", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 415:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "invoice",
    mounted: function mounted() {
        "use strict";

        $(document).ready(function () {
            $("#add_row").find('i').on('click', function () {
                $("#customtable").find('tbody').append('<tr><td contenteditable></td> <td contenteditable></td> <td class="text-center" contenteditable></td> <td></td> <td class="text-right" contenteditable></td> <td class="row_delete text-center"><i class="fa fa-fw ti-close"></i></td> </tr>');
                $("tbody tr:last-child td:first-child").focus();
            });
            $("#customtable").on("click", ".row_delete i", function () {
                $(this).closest("tr").remove();
            });
        });
    },
    destroyed: function destroyed() {}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.invoice_bg {\r\n    margin  : 15px 0 30px;\r\n    padding : 20px;\n}\n.table {\r\n    border       : 1px solid #ccc;\r\n    table-layout : fixed;\n}\n.table tbody > tr {\r\n    height : 50px;\n}\n.table-responsive {\r\n    width : 100%;\n}\ntd,\r\nth {\r\n    width     : 40px;\r\n    word-wrap : break-word;\n}\n.terms_conditions {\r\n    list-style : initial;\n}\n.table-condensed > thead > tr > th {\r\n    padding : 15px 8px;\r\n    width   : 80px;\n}\n.table-condensed > thead > tr > th:first-child {\r\n    width : 180px;\n}\n.table-responsive > .table > tbody > tr > td,\r\n.table-responsive > .table > tfoot > tr > td {\r\n    padding     : 15px 8px;\r\n    white-space : normal;\n}\n#add_row i, .row_delete i {\r\n    cursor : pointer;\n}\n@media print {\n.btn-section,\r\n    .left-side,\r\n    .no-print,\r\n    .content-header,\r\n    .header,\r\n    #customtable tr > td:last-child, #customtable tr > th:last-child {\r\n        display : none;\n}\n.table-responsive {\r\n        display : inline-table;\r\n        width   : 100%;\n}\n#invoice-stmt {\r\n        width : 100%;\n}\n.right-side {\r\n        margin-left : 0;\n}\n}\r\n", ""]);

/***/ }),

/***/ 753:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: 1: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: Syntax error: \"(\" unexpected\n\n    at Promise.all.then.arr (/home/vagrant/Sites/vue_workflows/laravel/node_modules/execa/index.js:201:11)\n    at process._tickCallback (internal/process/next_tick.js:109:7)");

/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "p-l-r-15",
    attrs: {
      "id": "invoice-stmt"
    }
  }, [_c('div', {
    staticClass: "panel"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-striped table-condensed",
    attrs: {
      "id": "customtable"
    }
  }, [_vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('tfoot', [_c('tr', [_c('td', {
    staticClass: "highrow"
  }), _vm._v(" "), _c('td', {
    staticClass: "highrow"
  }), _vm._v(" "), _c('td', {
    staticClass: "highrow text-center"
  }), _vm._v(" "), _c('td', {
    staticClass: "highrow text-right"
  }, [_c('strong', [_vm._v("\n                                            Sub Total:  \n                                        ")])]), _vm._v(" "), _c('td', {
    staticClass: "highrow text-right"
  }, [_c('strong', {
    attrs: {
      "contenteditable": ""
    }
  }, [_vm._v("$1838")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "emptyrow"
  }), _vm._v(" "), _c('td', {
    staticClass: "emptyrow"
  }), _vm._v(" "), _c('td', {
    staticClass: "emptyrow text-center"
  }), _vm._v(" "), _c('td', {
    staticClass: "emptyrow text-right"
  }, [_c('strong', [_vm._v("\n                                            Vat:  \n                                        ")])]), _vm._v(" "), _c('td', {
    staticClass: "highrow text-right"
  }, [_c('strong', {
    attrs: {
      "contenteditable": ""
    }
  }, [_vm._v("$20")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "emptyrow"
  }, [_c('i', {
    staticClass: "livicon",
    attrs: {
      "data-name": "barcode",
      "data-size": "60",
      "data-loop": "true"
    }
  })]), _vm._v(" "), _c('td', {
    staticClass: "emptyrow"
  }), _vm._v(" "), _c('td', {
    staticClass: "emptyrow text-center"
  }), _vm._v(" "), _c('td', {
    staticClass: "emptyrow text-right"
  }, [_c('strong', [_vm._v("\n                                            Total:  \n                                        ")])]), _vm._v(" "), _c('td', {
    staticClass: "highrow text-right"
  }, [_c('strong', {
    attrs: {
      "contenteditable": ""
    }
  }, [_vm._v("$1858")])]), _vm._v(" "), _c('td')])])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12"
  }, [_c('h4', [_c('Strong', [_vm._v("Terms and conditions:")])], 1), _vm._v(" "), _vm._m(4)])]), _vm._v(" "), _vm._m(5)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-credit-card"
  }), _vm._v(" Invoice")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "col-md-6 col-sm-12 col-xs-12 invoice_bg"
  }, [_c('h4', [_c('img', {
    attrs: {
      "src": __webpack_require__(753),
      "alt": "clear"
    }
  })]), _vm._v(" "), _c('h4', [_c('strong', [_vm._v("Billing Details:")])]), _vm._v(" "), _c('address', [_vm._v("\n                            Lewis Doe\n                            "), _c('br'), _vm._v(" 6889 Lunette Street\n                            "), _c('br'), _vm._v(" Melbourne,Austria\n                            "), _c('br'), _vm._v(" "), _c('strong', [_vm._v("Phone:")]), _vm._v("12-345-678\n                            "), _c('br'), _vm._v(" "), _c('strong', [_vm._v("Mail Id:")]), _vm._v(" Adelle_Champlin@yahoo.com\n                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 col-sm-12 col-xs-12 invoice_bg text-right"
  }, [_c('div', {
    staticClass: "pull-right"
  }, [_c('h4', [_c('strong', [_vm._v("#678956 / 25 Sep 2016")])]), _vm._v(" "), _c('h4', [_c('strong', [_vm._v("Invoice Info:")])]), _vm._v(" "), _c('address', [_vm._v("\n                                Tom Percy\n                                "), _c('br'), _vm._v(" 3946 Penn Street\n                                "), _c('br'), _vm._v(" Ohio,USA\n                                "), _c('br'), _vm._v(" "), _c('strong', [_vm._v("Phone:")]), _vm._v(" 32-666-756\n                                "), _c('br'), _vm._v(" "), _c('strong', [_vm._v("Mail Id:")]), _vm._v(" Lucy_Maggio16@yahoo.com\n                            ")]), _vm._v(" "), _c('span')])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', {
    staticClass: "bg-primary"
  }, [_c('th', [_c('strong', [_vm._v("Item Name")])]), _vm._v(" "), _c('th', [_c('strong', [_vm._v("Unit Cost")])]), _vm._v(" "), _c('th', {
    staticClass: "text-center"
  }, [_c('strong', [_vm._v("\n                                            Quantity\n                                        ")])]), _vm._v(" "), _c('th'), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v("Total")])]), _vm._v(" "), _c('th', {
    staticClass: "text-center",
    attrs: {
      "id": "add_row"
    }
  }, [_c('i', {
    staticClass: "fa fa-fw ti-plus"
  })])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tbody', [_c('tr', [_c('td', {
    attrs: {
      "contenteditable": ""
    }
  }, [_vm._v("\n                                        Samsung Galaxy Grand\n                                    ")]), _vm._v(" "), _c('td', {
    attrs: {
      "contenteditable": ""
    }
  }, [_vm._v("$700")]), _vm._v(" "), _c('td', {
    staticClass: "text-center",
    attrs: {
      "contenteditable": ""
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', {
    staticClass: "text-right",
    attrs: {
      "contenteditable": ""
    }
  }, [_vm._v("$700")]), _vm._v(" "), _c('td', {
    staticClass: "text-center row_delete"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-close"
  })])]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "contenteditable": ""
    }
  }, [_vm._v("\n                                        Samsung Galaxy Core\n                                    ")]), _vm._v(" "), _c('td', {
    attrs: {
      "contenteditable": ""
    }
  }, [_vm._v("$1110")]), _vm._v(" "), _c('td', {
    staticClass: "text-center",
    attrs: {
      "contenteditable": ""
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', {
    staticClass: "text-right",
    attrs: {
      "contenteditable": ""
    }
  }, [_vm._v("$1110")]), _vm._v(" "), _c('td', {
    staticClass: "text-center row_delete"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-close"
  })])]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "contenteditable": ""
    }
  }, [_vm._v("\n                                        Screen Protector\n                                    ")]), _vm._v(" "), _c('td', {
    attrs: {
      "contenteditable": ""
    }
  }, [_vm._v("$7")]), _vm._v(" "), _c('td', {
    staticClass: "text-center",
    attrs: {
      "contenteditable": ""
    }
  }, [_vm._v("4")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', {
    staticClass: "text-right",
    attrs: {
      "contenteditable": ""
    }
  }, [_vm._v("$28")]), _vm._v(" "), _c('td', {
    staticClass: "text-center row_delete"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-close"
  })])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "terms_conditions"
  }, [_c('li', [_vm._v("An invoice must accompany products returned for warantty")]), _vm._v(" "), _c('li', [_vm._v("Balance due within 10 days of invoice date,1.5% interest/month thereafter.")]), _vm._v(" "), _c('li', [_vm._v("All goods returned for replacement/credit must be saleable condition with original packaging.\n                        ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "btn-section"
  }, [_c('div', {
    staticClass: "col-md-12 col-sm-12 col-xs-12"
  }, [_c('span', {
    staticClass: "pull-right"
  }, [_c('button', {
    staticClass: "btn btn-responsive button-alignment btn-success",
    attrs: {
      "type": "button",
      "data-toggle": "button"
    }
  }, [_c('i', {
    staticClass: "fa fa-fw ti-money"
  }), _vm._v(" Pay Now")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-responsive button-alignment btn-primary",
    attrs: {
      "type": "button",
      "data-toggle": "button"
    }
  }, [_c('span', {
    staticStyle: {
      "color": "#fff"
    },
    attrs: {
      "onclick": "javascript:window.print();"
    }
  }, [_c('i', {
    staticClass: "fa fa-fw ti-printer"
  }), _vm._v(" Print")])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d5fafe96", module.exports)
  }
}

/***/ })

});