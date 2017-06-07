webpackJsonp([72],{

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(433),
  /* template */
  __webpack_require__(860),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Sites/vue_workflows/laravel/resources/assets/js/components/components/simple_tables.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] simple_tables.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-918666cc", Component.options)
  } else {
    hotAPI.reload("data-v-918666cc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "simple_tables",
    mounted: function mounted() {},
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 860:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "panel "
  }, [_vm._m(5), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered table-striped"
  }, [_vm._m(6), _vm._v(" "), _vm._m(7), _vm._v(" "), _c('tfoot', [_c('tr', [_c('th', [_vm._v("Company")]), _vm._v(" "), _c('th', [_vm._v("email")]), _vm._v(" "), _c('th', [_vm._v("Phone")]), _vm._v(" "), _c('th', [_vm._v("Department")]), _vm._v(" "), _c('th', [_vm._v("Salary")])])])], 1)])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
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
    staticClass: "ti-layout-cta-left"
  }), _vm._v(" Basic Table\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table",
    attrs: {
      "id": "table1"
    }
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("#")]), _vm._v(" "), _c('th', [_vm._v("First Name")]), _vm._v(" "), _c('th', [_vm._v("Last Name")]), _vm._v(" "), _c('th', [_vm._v("City")]), _vm._v(" "), _c('th', [_vm._v("Department")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("1")]), _vm._v(" "), _c('td', [_vm._v("Trey")]), _vm._v(" "), _c('td', [_vm._v("Armstrong")]), _vm._v(" "), _c('td', [_vm._v("Isadoreborough")]), _vm._v(" "), _c('td', [_vm._v("Jewelery")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("2")]), _vm._v(" "), _c('td', [_vm._v("Cecile")]), _vm._v(" "), _c('td', [_vm._v("Kirlin")]), _vm._v(" "), _c('td', [_vm._v("North Reillyshire")]), _vm._v(" "), _c('td', [_vm._v("Sports")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("3")]), _vm._v(" "), _c('td', [_vm._v("Murl")]), _vm._v(" "), _c('td', [_vm._v("Denesik")]), _vm._v(" "), _c('td', [_vm._v("Alvismouth")]), _vm._v(" "), _c('td', [_vm._v("Tools")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("4")]), _vm._v(" "), _c('td', [_vm._v("Allison")]), _vm._v(" "), _c('td', [_vm._v("Gleason")]), _vm._v(" "), _c('td', [_vm._v("East Dinaton")]), _vm._v(" "), _c('td', [_vm._v("Electronics")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("5")]), _vm._v(" "), _c('td', [_vm._v("Mathilde")]), _vm._v(" "), _c('td', [_vm._v("Cassin")]), _vm._v(" "), _c('td', [_vm._v("New Royce")]), _vm._v(" "), _c('td', [_vm._v("Home")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("6")]), _vm._v(" "), _c('td', [_vm._v("Maeve")]), _vm._v(" "), _c('td', [_vm._v("Gutkowski")]), _vm._v(" "), _c('td', [_vm._v("Lake Justynport")]), _vm._v(" "), _c('td', [_vm._v("Tools")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("7")]), _vm._v(" "), _c('td', [_vm._v("Hobart")]), _vm._v(" "), _c('td', [_vm._v("Marquardt")]), _vm._v(" "), _c('td', [_vm._v("Lake Martinefurt")]), _vm._v(" "), _c('td', [_vm._v("Kids")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("8")]), _vm._v(" "), _c('td', [_vm._v("Otha")]), _vm._v(" "), _c('td', [_vm._v("Legros")]), _vm._v(" "), _c('td', [_vm._v("West Ameliaview")]), _vm._v(" "), _c('td', [_vm._v("Games")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("9")]), _vm._v(" "), _c('td', [_vm._v("Clint")]), _vm._v(" "), _c('td', [_vm._v("Metz")]), _vm._v(" "), _c('td', [_vm._v("Lake Rhianna")]), _vm._v(" "), _c('td', [_vm._v("Garden")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("10")]), _vm._v(" "), _c('td', [_vm._v("Patience")]), _vm._v(" "), _c('td', [_vm._v("Ferry")]), _vm._v(" "), _c('td', [_vm._v("Lake Veronica")]), _vm._v(" "), _c('td', [_vm._v("Games")])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-menu"
  }), _vm._v(" Bordered Table\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered table-hover"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("#")]), _vm._v(" "), _c('th', [_vm._v("First Name")]), _vm._v(" "), _c('th', [_vm._v("Last Name")]), _vm._v(" "), _c('th', [_vm._v("Department")]), _vm._v(" "), _c('th', [_vm._v("Status")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("1")]), _vm._v(" "), _c('td', [_vm._v("Loyce")]), _vm._v(" "), _c('td', [_vm._v("Larson")]), _vm._v(" "), _c('td', [_vm._v("Industrial")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "label label-sm label-success"
  }, [_vm._v("Approved")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("2")]), _vm._v(" "), _c('td', [_vm._v("Vincenzo")]), _vm._v(" "), _c('td', [_vm._v("Bashirian")]), _vm._v(" "), _c('td', [_vm._v("Baby")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "label label-sm label-danger"
  }, [_vm._v("Blocked")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("3")]), _vm._v(" "), _c('td', [_vm._v("Winona")]), _vm._v(" "), _c('td', [_vm._v("Hagenes")]), _vm._v(" "), _c('td', [_vm._v("Health")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "label label-sm label-success"
  }, [_vm._v("Approved")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("4")]), _vm._v(" "), _c('td', [_vm._v("Clark")]), _vm._v(" "), _c('td', [_vm._v("Ebert")]), _vm._v(" "), _c('td', [_vm._v("Tools")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "label label-sm label-success"
  }, [_vm._v("Approved")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("5")]), _vm._v(" "), _c('td', [_vm._v("Waino")]), _vm._v(" "), _c('td', [_vm._v("Labadie")]), _vm._v(" "), _c('td', [_vm._v("Music")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "label label-sm label-warning"
  }, [_vm._v("Suspended")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("6")]), _vm._v(" "), _c('td', [_vm._v("Jackson")]), _vm._v(" "), _c('td', [_vm._v("Abshire")]), _vm._v(" "), _c('td', [_vm._v("Shoes")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "label label-sm label-danger"
  }, [_vm._v("Blocked")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("7")]), _vm._v(" "), _c('td', [_vm._v("Erica")]), _vm._v(" "), _c('td', [_vm._v("Lehner")]), _vm._v(" "), _c('td', [_vm._v("Shoes")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "label label-sm label-warning"
  }, [_vm._v("Suspended")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("8")]), _vm._v(" "), _c('td', [_vm._v("Dorris")]), _vm._v(" "), _c('td', [_vm._v("Bins")]), _vm._v(" "), _c('td', [_vm._v("Outdoors")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "label label-sm label-success"
  }, [_vm._v("Approved")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("9")]), _vm._v(" "), _c('td', [_vm._v("Norene")]), _vm._v(" "), _c('td', [_vm._v("Rolfson")]), _vm._v(" "), _c('td', [_vm._v("Baby")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "label label-sm label-info"
  }, [_vm._v("Pending")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("10")]), _vm._v(" "), _c('td', [_vm._v("Katharina")]), _vm._v(" "), _c('td', [_vm._v("Kovacek")]), _vm._v(" "), _c('td', [_vm._v("Garden")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "label label-sm label-warning"
  }, [_vm._v("Suspended")])])])])])])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
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
    staticClass: "ti-list"
  }), _vm._v(" Data Table with Action buttons\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordred table-striped",
    attrs: {
      "id": "mytable"
    }
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("email")]), _vm._v(" "), _c('th', [_vm._v("Phone")]), _vm._v(" "), _c('th', [_vm._v("Edit")]), _vm._v(" "), _c('th', [_vm._v("Delete")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("Ambrose Schulist")]), _vm._v(" "), _c('td', [_vm._v("Ambrose.Schulist@hotmail.com")]), _vm._v(" "), _c('td', [_vm._v("098-354-8863")]), _vm._v(" "), _c('td', [_c('p', [_c('button', {
    staticClass: "btn btn-primary btn-xs",
    attrs: {
      "data-toggle": "modal",
      "data-target": "#edit",
      "data-placement": "top"
    }
  }, [_c('span', {
    staticClass: "fa fa-fw ti-pencil"
  })])])]), _vm._v(" "), _c('td', [_c('p', [_c('button', {
    staticClass: "btn btn-danger btn-xs",
    attrs: {
      "data-toggle": "modal",
      "data-target": "#delete",
      "data-placement": "top"
    }
  }, [_c('span', {
    staticClass: "fa fa-fw ti-trash"
  })])])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Bernadette Medhurst")]), _vm._v(" "), _c('td', [_vm._v("Bernadette.Medhurst75@hotmail.com")]), _vm._v(" "), _c('td', [_vm._v("258-452-3348")]), _vm._v(" "), _c('td', [_c('p', [_c('button', {
    staticClass: "btn btn-primary btn-xs",
    attrs: {
      "data-toggle": "modal",
      "data-target": "#edit",
      "data-placement": "top"
    }
  }, [_c('span', {
    staticClass: "fa fa-fw ti-pencil"
  })])])]), _vm._v(" "), _c('td', [_c('p', [_c('button', {
    staticClass: "btn btn-danger btn-xs",
    attrs: {
      "data-toggle": "modal",
      "data-target": "#delete",
      "data-placement": "top"
    }
  }, [_c('span', {
    staticClass: "fa fa-fw ti-trash"
  })])])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Hoyt Franecki")]), _vm._v(" "), _c('td', [_vm._v("Hoyt.Franecki@yahoo.com")]), _vm._v(" "), _c('td', [_vm._v("648-323-5530")]), _vm._v(" "), _c('td', [_c('p', [_c('button', {
    staticClass: "btn btn-primary btn-xs",
    attrs: {
      "data-toggle": "modal",
      "data-target": "#edit",
      "data-placement": "top"
    }
  }, [_c('span', {
    staticClass: "fa fa-fw ti-pencil"
  })])])]), _vm._v(" "), _c('td', [_c('p', [_c('button', {
    staticClass: "btn btn-danger btn-xs",
    attrs: {
      "data-toggle": "modal",
      "data-target": "#delete",
      "data-placement": "top"
    }
  }, [_c('span', {
    staticClass: "fa fa-fw ti-trash"
  })])])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Kianna Lockman")]), _vm._v(" "), _c('td', [_vm._v("Kianna.Lockman@gmail.com")]), _vm._v(" "), _c('td', [_vm._v("551-834-3163")]), _vm._v(" "), _c('td', [_c('p', [_c('button', {
    staticClass: "btn btn-primary btn-xs",
    attrs: {
      "data-toggle": "modal",
      "data-target": "#edit",
      "data-placement": "top"
    }
  }, [_c('span', {
    staticClass: "fa fa-fw ti-pencil"
  })])])]), _vm._v(" "), _c('td', [_c('p', [_c('button', {
    staticClass: "btn btn-danger btn-xs",
    attrs: {
      "data-toggle": "modal",
      "data-target": "#delete",
      "data-placement": "top"
    }
  }, [_c('span', {
    staticClass: "fa fa-fw ti-trash"
  })])])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Sheldon Howe")]), _vm._v(" "), _c('td', [_vm._v("Sheldon_Howe94@yahoo.com")]), _vm._v(" "), _c('td', [_vm._v("704-582-5580")]), _vm._v(" "), _c('td', [_c('p', [_c('button', {
    staticClass: "btn btn-primary btn-xs",
    attrs: {
      "data-toggle": "modal",
      "data-target": "#edit",
      "data-placement": "top"
    }
  }, [_c('span', {
    staticClass: "fa fa-fw ti-pencil"
  })])])]), _vm._v(" "), _c('td', [_c('p', [_c('button', {
    staticClass: "btn btn-danger btn-xs",
    attrs: {
      "data-toggle": "modal",
      "data-target": "#delete",
      "data-placement": "top"
    }
  }, [_c('span', {
    staticClass: "fa fa-fw ti-trash"
  })])])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Timmothy Mertz")]), _vm._v(" "), _c('td', [_vm._v("Timmothy72@gmail.com")]), _vm._v(" "), _c('td', [_vm._v("641-915-3609")]), _vm._v(" "), _c('td', [_c('p', [_c('button', {
    staticClass: "btn btn-primary btn-xs",
    attrs: {
      "data-toggle": "modal",
      "data-target": "#edit",
      "data-placement": "top"
    }
  }, [_c('span', {
    staticClass: "fa fa-fw ti-pencil"
  })])])]), _vm._v(" "), _c('td', [_c('p', [_c('button', {
    staticClass: "btn btn-danger btn-xs",
    attrs: {
      "data-toggle": "modal",
      "data-target": "#delete",
      "data-placement": "top"
    }
  }, [_c('span', {
    staticClass: "fa fa-fw ti-trash"
  })])])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Faye Mayer")]), _vm._v(" "), _c('td', [_vm._v("Faye34@gmail.com")]), _vm._v(" "), _c('td', [_vm._v("786-093-2620")]), _vm._v(" "), _c('td', [_c('p', [_c('button', {
    staticClass: "btn btn-primary btn-xs",
    attrs: {
      "data-toggle": "modal",
      "data-target": "#edit",
      "data-placement": "top"
    }
  }, [_c('span', {
    staticClass: "fa fa-fw ti-pencil"
  })])])]), _vm._v(" "), _c('td', [_c('p', [_c('button', {
    staticClass: "btn btn-danger btn-xs",
    attrs: {
      "data-toggle": "modal",
      "data-target": "#delete",
      "data-placement": "top"
    }
  }, [_c('span', {
    staticClass: "fa fa-fw ti-trash"
  })])])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Alfred Watsica")]), _vm._v(" "), _c('td', [_vm._v("Alfred34@gmail.com")]), _vm._v(" "), _c('td', [_vm._v("294-242-3621")]), _vm._v(" "), _c('td', [_c('p', [_c('button', {
    staticClass: "btn btn-primary btn-xs",
    attrs: {
      "data-toggle": "modal",
      "data-target": "#edit",
      "data-placement": "top"
    }
  }, [_c('span', {
    staticClass: "fa fa-fw ti-pencil"
  })])])]), _vm._v(" "), _c('td', [_c('p', [_c('button', {
    staticClass: "btn btn-danger btn-xs",
    attrs: {
      "data-toggle": "modal",
      "data-target": "#delete",
      "data-placement": "top"
    }
  }, [_c('span', {
    staticClass: "fa fa-fw ti-trash"
  })])])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Vella Hammes")]), _vm._v(" "), _c('td', [_vm._v("Vella.Hammes40@hotmail.com")]), _vm._v(" "), _c('td', [_vm._v("063-136-5606")]), _vm._v(" "), _c('td', [_c('p', [_c('button', {
    staticClass: "btn btn-primary btn-xs",
    attrs: {
      "data-toggle": "modal",
      "data-target": "#edit",
      "data-placement": "top"
    }
  }, [_c('span', {
    staticClass: "fa fa-fw ti-pencil"
  })])])]), _vm._v(" "), _c('td', [_c('p', [_c('button', {
    staticClass: "btn btn-danger btn-xs",
    attrs: {
      "data-toggle": "modal",
      "data-target": "#delete",
      "data-placement": "top"
    }
  }, [_c('span', {
    staticClass: "fa fa-fw ti-trash"
  })])])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Evans Trantow")]), _vm._v(" "), _c('td', [_vm._v("Evans90@yahoo.com")]), _vm._v(" "), _c('td', [_vm._v("171-105-6990")]), _vm._v(" "), _c('td', [_c('p', [_c('button', {
    staticClass: "btn btn-primary btn-xs",
    attrs: {
      "data-toggle": "modal",
      "data-target": "#edit",
      "data-placement": "top"
    }
  }, [_c('span', {
    staticClass: "fa fa-fw ti-pencil"
  })])])]), _vm._v(" "), _c('td', [_c('p', [_c('button', {
    staticClass: "btn btn-danger btn-xs",
    attrs: {
      "data-toggle": "modal",
      "data-target": "#delete",
      "data-placement": "top"
    }
  }, [_c('span', {
    staticClass: "fa fa-fw ti-trash"
  })])])])])])])])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "edit",
      "tabindex": "-1",
      "role": "dialog",
      "aria-labelledby": "edit",
      "aria-hidden": "true"
    }
  }, [_c('div', {
    staticClass: "modal-dialog"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "modal",
      "aria-hidden": "true"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('h4', {
    staticClass: "modal-title custom_align",
    attrs: {
      "id": "Heading"
    }
  }, [_vm._v("Edit Details")])]), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    staticClass: "form-control ",
    attrs: {
      "type": "text",
      "placeholder": "Joseph Lynch"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    staticClass: "form-control ",
    attrs: {
      "type": "text",
      "placeholder": "joseph34@testmail.com"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    staticClass: "form-control ",
    attrs: {
      "type": "text",
      "placeholder": "456-632-5687"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer "
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-ok-sign"
  }), _vm._v(" Update\n                    ")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "delete",
      "tabindex": "-1",
      "role": "dialog",
      "aria-labelledby": "edit",
      "aria-hidden": "true"
    }
  }, [_c('div', {
    staticClass: "modal-dialog"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "modal",
      "aria-hidden": "true"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('h4', {
    staticClass: "modal-title custom_align",
    attrs: {
      "id": "Heading5"
    }
  }, [_vm._v("Delete this entry")])]), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "alert alert-info"
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-info-sign"
  }), _vm._v("  Are you sure you want to delete this record ?\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer "
  }, [_c('button', {
    staticClass: "btn btn-danger",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-ok-sign"
  }), _vm._v(" Yes\n                    ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-remove"
  }), _vm._v(" No\n                    ")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
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
    staticClass: "ti-list-ol"
  }), _vm._v(" Basic Table 2\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered table-hover"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("#")]), _vm._v(" "), _c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("User Name")]), _vm._v(" "), _c('th', [_vm._v("Phone")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', {
    staticClass: "bg-default"
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticClass: "bg-default"
  }, [_vm._v("Duncan Carroll")]), _vm._v(" "), _c('td', {
    staticClass: "bg-default"
  }, [_vm._v("Duncan43")]), _vm._v(" "), _c('td', {
    staticClass: "bg-default"
  }, [_vm._v("597-819-8431")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "bg-warning"
  }, [_vm._v("2")]), _vm._v(" "), _c('td', {
    staticClass: "bg-warning"
  }, [_vm._v("Dewitt Cormier")]), _vm._v(" "), _c('td', {
    staticClass: "bg-warning"
  }, [_vm._v("Dewitt_Cormier99")]), _vm._v(" "), _c('td', {
    staticClass: "bg-warning"
  }, [_vm._v("741-099-5054")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "bg-success"
  }, [_vm._v("3")]), _vm._v(" "), _c('td', {
    staticClass: "bg-success"
  }, [_vm._v("Jarrod Gislason")]), _vm._v(" "), _c('td', {
    staticClass: "bg-success"
  }, [_vm._v("Jarrod4")]), _vm._v(" "), _c('td', {
    staticClass: "bg-success"
  }, [_vm._v("834-470-1425")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "bg-info"
  }, [_vm._v("4")]), _vm._v(" "), _c('td', {
    staticClass: "bg-info"
  }, [_vm._v("Hailey Bruen")]), _vm._v(" "), _c('td', {
    staticClass: "bg-info"
  }, [_vm._v("Hailey.Bruen23")]), _vm._v(" "), _c('td', {
    staticClass: "bg-info"
  }, [_vm._v("970-037-5586")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "bg-danger"
  }, [_vm._v("5")]), _vm._v(" "), _c('td', {
    staticClass: "bg-danger"
  }, [_vm._v("Carmella Sanford")]), _vm._v(" "), _c('td', {
    staticClass: "bg-danger"
  }, [_vm._v("Carmella_Sanford54")]), _vm._v(" "), _c('td', {
    staticClass: "bg-danger"
  }, [_vm._v("833-679-6170")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("6")]), _vm._v(" "), _c('td', [_vm._v("Rafaela Reilly")]), _vm._v(" "), _c('td', [_vm._v("Rafaela.Reilly33")]), _vm._v(" "), _c('td', [_vm._v("350-714-3505")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "bg-warning"
  }, [_vm._v("7")]), _vm._v(" "), _c('td', {
    staticClass: "bg-warning"
  }, [_vm._v("Reta Beatty")]), _vm._v(" "), _c('td', {
    staticClass: "bg-warning"
  }, [_vm._v("Reta67")]), _vm._v(" "), _c('td', {
    staticClass: "bg-warning"
  }, [_vm._v("489-997-1458")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "bg-success"
  }, [_vm._v("8")]), _vm._v(" "), _c('td', {
    staticClass: "bg-success"
  }, [_vm._v("Allene Wisozk")]), _vm._v(" "), _c('td', {
    staticClass: "bg-success"
  }, [_vm._v("Allene.Wisozk18")]), _vm._v(" "), _c('td', {
    staticClass: "bg-success"
  }, [_vm._v("367-444-4071")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "bg-info"
  }, [_vm._v("9")]), _vm._v(" "), _c('td', {
    staticClass: "bg-info"
  }, [_vm._v("Mariela Corwin")]), _vm._v(" "), _c('td', {
    staticClass: "bg-info"
  }, [_vm._v("Mariela.Corwin")]), _vm._v(" "), _c('td', {
    staticClass: "bg-info"
  }, [_vm._v("158-603-0375")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "bg-primary"
  }, [_vm._v("10")]), _vm._v(" "), _c('td', {
    staticClass: "bg-primary"
  }, [_vm._v("Katlyn Kovacek")]), _vm._v(" "), _c('td', {
    staticClass: "bg-primary"
  }, [_vm._v("Katlyn.Kovacek")]), _vm._v(" "), _c('td', {
    staticClass: "bg-primary"
  }, [_vm._v("883-968-9177")])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-list-ol"
  }), _vm._v(" Basic Table 3\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered table-hover"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("#")]), _vm._v(" "), _c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Department")]), _vm._v(" "), _c('th', [_vm._v("Salary")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticClass: "bg-success"
  }, [_vm._v("Joelle Ward")]), _vm._v(" "), _c('td', {
    staticClass: "bg-info"
  }, [_vm._v("Beauty")]), _vm._v(" "), _c('td', {
    staticClass: "bg-danger"
  }, [_vm._v("$22777")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("2")]), _vm._v(" "), _c('td', {
    staticClass: "bg-success"
  }, [_vm._v("Sammie Bailey")]), _vm._v(" "), _c('td', {
    staticClass: "bg-info"
  }, [_vm._v("Movies")]), _vm._v(" "), _c('td', {
    staticClass: "bg-danger"
  }, [_vm._v("$13132")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("3")]), _vm._v(" "), _c('td', {
    staticClass: "bg-success"
  }, [_vm._v("Kenton Tillman")]), _vm._v(" "), _c('td', {
    staticClass: "bg-info"
  }, [_vm._v("Grocery")]), _vm._v(" "), _c('td', {
    staticClass: "bg-danger"
  }, [_vm._v("$6543")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("4")]), _vm._v(" "), _c('td', {
    staticClass: "bg-success"
  }, [_vm._v("Braxton Kohler")]), _vm._v(" "), _c('td', {
    staticClass: "bg-info"
  }, [_vm._v("Automotive")]), _vm._v(" "), _c('td', {
    staticClass: "bg-danger"
  }, [_vm._v("$15224")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("5")]), _vm._v(" "), _c('td', {
    staticClass: "bg-success"
  }, [_vm._v("Delpha Durgan")]), _vm._v(" "), _c('td', {
    staticClass: "bg-info"
  }, [_vm._v("Automotive")]), _vm._v(" "), _c('td', {
    staticClass: "bg-danger"
  }, [_vm._v("$21147")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("6")]), _vm._v(" "), _c('td', {
    staticClass: "bg-success"
  }, [_vm._v("Judy Abshire")]), _vm._v(" "), _c('td', {
    staticClass: "bg-info"
  }, [_vm._v("Tools")]), _vm._v(" "), _c('td', {
    staticClass: "bg-danger"
  }, [_vm._v("$5690")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("7")]), _vm._v(" "), _c('td', {
    staticClass: "bg-success"
  }, [_vm._v("Ava Bogisich")]), _vm._v(" "), _c('td', {
    staticClass: "bg-info"
  }, [_vm._v("Games")]), _vm._v(" "), _c('td', {
    staticClass: "bg-danger"
  }, [_vm._v("$33835")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("8")]), _vm._v(" "), _c('td', {
    staticClass: "bg-success"
  }, [_vm._v("Marta Osinski")]), _vm._v(" "), _c('td', {
    staticClass: "bg-info"
  }, [_vm._v("Toys")]), _vm._v(" "), _c('td', {
    staticClass: "bg-danger"
  }, [_vm._v("$40918")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("9")]), _vm._v(" "), _c('td', {
    staticClass: "bg-success"
  }, [_vm._v("Salma Luettgen")]), _vm._v(" "), _c('td', {
    staticClass: "bg-info"
  }, [_vm._v("Shoes")]), _vm._v(" "), _c('td', {
    staticClass: "bg-danger"
  }, [_vm._v("$47338")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("10")]), _vm._v(" "), _c('td', {
    staticClass: "bg-success"
  }, [_vm._v("Breana Wolf")]), _vm._v(" "), _c('td', {
    staticClass: "bg-info"
  }, [_vm._v("Games")]), _vm._v(" "), _c('td', {
    staticClass: "bg-danger"
  }, [_vm._v("$14756")])])])])])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-layout-grid3"
  }), _vm._v(" Responsive Table\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("Company")]), _vm._v(" "), _c('th', [_vm._v("email")]), _vm._v(" "), _c('th', [_vm._v("Phone")]), _vm._v(" "), _c('th', [_vm._v("Department")]), _vm._v(" "), _c('th', [_vm._v("Salary")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tbody', [_c('tr', [_c('td', [_vm._v("Durgan - Sauer")]), _vm._v(" "), _c('td', [_vm._v("Durgan-Sauer23@yahoo.com")]), _vm._v(" "), _c('td', [_vm._v("032-563-1943")]), _vm._v(" "), _c('td', [_vm._v("Music")]), _vm._v(" "), _c('td', [_vm._v("44631")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Hickle LLC")]), _vm._v(" "), _c('td', [_vm._v("HickleLLC.Cremin62@hotmail.com")]), _vm._v(" "), _c('td', [_vm._v("158-351-5915")]), _vm._v(" "), _c('td', [_vm._v("Garden")]), _vm._v(" "), _c('td', [_vm._v("4669")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Padberg - Cronin")]), _vm._v(" "), _c('td', [_vm._v("Padberg-Cronin.Kunde10@hotmail.com")]), _vm._v(" "), _c('td', [_vm._v("265-460-4774")]), _vm._v(" "), _c('td', [_vm._v("Automotive")]), _vm._v(" "), _c('td', [_vm._v("10214")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Lakin - Cronin")]), _vm._v(" "), _c('td', [_vm._v("Lakin-Cronin_Batz61@hotmail.com")]), _vm._v(" "), _c('td', [_vm._v("443-924-7214")]), _vm._v(" "), _c('td', [_vm._v("Shoes")]), _vm._v(" "), _c('td', [_vm._v("2949")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Bednar - Padberg")]), _vm._v(" "), _c('td', [_vm._v("Bednar-Padberg22@yahoo.com")]), _vm._v(" "), _c('td', [_vm._v("700-808-9992")]), _vm._v(" "), _c('td', [_vm._v("Grocery")]), _vm._v(" "), _c('td', [_vm._v("48239")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Gibson - DuBuque")]), _vm._v(" "), _c('td', [_vm._v("Gibson-DuBuque_Buckridge@yahoo.com")]), _vm._v(" "), _c('td', [_vm._v("372-126-7393")]), _vm._v(" "), _c('td', [_vm._v("Sports")]), _vm._v(" "), _c('td', [_vm._v("11656")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Huels - Schoen")]), _vm._v(" "), _c('td', [_vm._v("Huels-Schoen_Lubowitz40@hotmail.com")]), _vm._v(" "), _c('td', [_vm._v("408-586-4486")]), _vm._v(" "), _c('td', [_vm._v("Books")]), _vm._v(" "), _c('td', [_vm._v("43464")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Harber and Sons")]), _vm._v(" "), _c('td', [_vm._v("HarberandSons60@hotmail.com")]), _vm._v(" "), _c('td', [_vm._v("506-397-7192")]), _vm._v(" "), _c('td', [_vm._v("Jewelery")]), _vm._v(" "), _c('td', [_vm._v("10454")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Beer, Murray and Stracke")]), _vm._v(" "), _c('td', [_vm._v("BeerMurrayandStracke.Mertz@gmail.com")]), _vm._v(" "), _c('td', [_vm._v("202-293-9914")]), _vm._v(" "), _c('td', [_vm._v("Clothing")]), _vm._v(" "), _c('td', [_vm._v("35082")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Schroeder Inc")]), _vm._v(" "), _c('td', [_vm._v("SchroederInc_Grimes98@gmail.com")]), _vm._v(" "), _c('td', [_vm._v("379-212-1752")]), _vm._v(" "), _c('td', [_vm._v("Baby")]), _vm._v(" "), _c('td', [_vm._v("20828")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-918666cc", module.exports)
  }
}

/***/ })

});