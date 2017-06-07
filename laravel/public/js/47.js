webpackJsonp([47],{

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(981)
__webpack_require__(980)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(435),
  /* template */
  __webpack_require__(845),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Sites/vue_workflows/laravel/resources/assets/js/components/components/tabs_accordions.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tabs_accordions.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d9bdcd8", Component.options)
  } else {
    hotAPI.reload("data-v-5d9bdcd8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 435:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "tabs_accordions",
    mounted: function mounted() {
        "use strict";

        $(document).ready(function () {

            /* popover panel js */
            $("[data-toggle='popover']").popover();

            /* tooltops panel js */
            $(".tooltip-examples a").tooltip({
                placement: 'top'
            });
            $('[data-toggle="tooltip"]').tooltip();

            /* popover panel fifa js */
            $('.po-markup > .po-link').popover({
                trigger: 'hover',

                html: true, // must have if HTML is contained in popover
                // get the title and conent
                title: function title() {
                    return $(this).parent().find('.po-title').html();
                },
                content: function content() {
                    return $(this).parent().find('.po-body').html();
                },
                container: 'body',
                placement: 'right'
            });
        });
    },
    destroyed: function destroyed() {}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.faq-cat-content {\r\n    margin-top : 25px;\n}\n.faq-cat-tabs li a {\r\n    padding          : 15px 10px 15px 10px;\r\n    background-color : #ffffff;\r\n    border           : 1px solid #dddddd;\r\n    color            : #777777;\n}\n.tab-content.faq-cat-content .panel {\r\n    box-shadow : 0 1px 1px rgba(0, 0, 0, 0.2);\n}\n.nav-tabs li a:focus,\r\n.panel-heading a:focus {\r\n    outline : none;\n}\n.panel-heading a,\r\n.panel-heading a:hover,\r\n.panel-heading a:focus {\r\n    text-decoration : none;\r\n    color           : #777777;\n}\n.faq-cat-content .panel-heading:hover {\r\n    background-color : #efefef;\n}\n.active-faq {\r\n    border-left : 5px solid #888888;\n}\n.panel-faq .panel-heading .panel-title span {\r\n    font-size   : 13px;\r\n    font-weight : normal;\n}\n.nav-tabs-custom > .nav-tabs > li.active {\r\n    border-top-color : #6699cc;\n}\r\n/* tool bar */\n.btn-toolbar {\r\n    width   : 40px;\r\n    height  : 40px;\r\n    padding : 10px 6px;\n}\n.tool-item {\r\n    display        : block;\r\n    text-align     : center;\r\n    padding-bottom : 10px;\r\n    padding-right  : 17px;\r\n    transition     : none;\n}\n.tool-item:hover {\r\n    color      : #fff;\r\n    background : 0 !important;\n}\n.toolbar_animate {\r\n    padding : 25px;\n}\n.btn-toolbar-primary {\r\n    background-color : #6699cc !important;\n}\n.btn-toolbar-primary:hover {\r\n    background-color : #6699cc;\n}\n.btn-toolbar-danger {\r\n    background-color : #ff6666 !important;\n}\n.btn-toolbar-danger:hover {\r\n    background-color : #ff6666;\n}\n.btn-toolbar-warning {\r\n    background-color : #f0ad4e !important;\n}\n.btn-toolbar-warning:hover {\r\n    background-color : #f0ad4e;\n}\n.btn-toolbar-info {\r\n    background-color : #66ccff !important;\n}\n.btn-toolbar-info:hover {\r\n    background-color : #66ccff;\n}\n.btn-toolbar-success {\r\n    background-color : #66cc99 !important;\n}\n.btn-toolbar-success:hover {\r\n    background-color : #66cc99;\n}\n.toolbar-primary {\r\n    background : #6699cc;\n}\n.toolbar-primary .tool-item.selected,\r\n.toolbar-primary .tool-item:hover {\r\n    background : #6699cc;\n}\n.toolbar-danger {\r\n    background : #ff6666;\n}\n.toolbar-danger .tool-item.selected,\r\n.toolbar-danger .tool-item:hover {\r\n    background : #ff6666;\n}\n.toolbar-warning {\r\n    background : #f0ad4e;\n}\n.toolbar-danger .tool-item.selected,\r\n.toolbar-danger .tool-item:hover {\r\n    background : #f0ad4e;\n}\n.toolbar-info {\r\n    background : #66ccff;\n}\n.toolbar-info .tool-item.selected,\r\n.toolbar-info .tool-item:hover {\r\n    background : #66ccff;\n}\n.toolbar-success {\r\n    background : #66cc99;\n}\n.toolbar-success .tool-item.selected,\r\n.toolbar-success .tool-item:hover {\r\n    background : #66cc99;\n}\n.btn-toolbar-light,\r\n.toolbar-light {\r\n    background-color : #dcdcdc;\n}\n.btn-toolbar-light.pressed,\r\n.btn-toolbar-light:hover {\r\n    background-color : #e4e4e4;\n}\n.btn-toolbar-dark,\r\n.toolbar-dark {\r\n    background-color : #66ccff;\n}\n.btn-toolbar-dark.pressed,\r\n.btn-toolbar-dark:hover {\r\n    background-color : #66ccff;\n}\n.btn-toolbar-default i {\r\n    color : #fff;\n}\n.toolbar-info.tool-top .arrow {\r\n    border-color : #66ccff transparent transparent;\n}\n.toolbar-light.tool-top .arrow {\r\n    border-color : #dcdcdc transparent transparent;\n}\n.toolbar-dark.tool-top .arrow {\r\n    border-color : #66ccff transparent transparent;\n}\n.toolbar-primary.tool-top .arrow {\r\n    border-color : #6699cc transparent transparent;\n}\n.toolbar-warning.tool-top .arrow {\r\n    border-color : #f0ad4e transparent transparent;\n}\n.toolbar-success.tool-top .arrow {\r\n    border-color : #66cc99 transparent transparent;\n}\n.toolbar-success.tool-right .arrow {\r\n    border-color : transparent #66cc99 transparent transparent;\n}\n.toolbar-danger.tool-bottom .arrow {\r\n    border-color : transparent transparent #ff6666;\n}\n.toolbar-danger.tool-top .arrow {\r\n    border-color : #ff6666 transparent transparent;\n}\n.toolbar-warning.tool-left .arrow {\r\n    border-color : transparent transparent transparent #f0ad4e;\n}\n.toolbar-info.tool-right .arrow {\r\n    border-color : transparent #66ccff transparent transparent;\n}\n.toolbar-success.tool-bottom .arrow {\r\n    border-color : transparent transparent #66cc99;\n}\n.toolbar-danger.tool-left .arrow {\r\n    border-color : transparent transparent transparent #ff6666;\n}\r\n/*toolbar responsive*/\n@media only screen and (max-width : 768px) {\n.feature-toolbar {\r\n        margin-top : 10px;\n}\n}\n.wenk-area {\r\n    border: 1px solid #ccc;\r\n    padding: 3px 12px;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    cursor: default;\n}", ""]);

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "/**\n * wenk - Lightweight tooltip for the greater good\n * @version v1.0.5\n * (c) 2017 Tiaan du Plessis @tiaanduplessis |\n * @link https://tiaanduplessis.github.io/wenk/\n * @license MIT\n */\n[data-wenk]{position:relative\n}\n[data-wenk]:after{position:absolute;font-size:13px;border-radius:.4rem;content:attr(data-wenk);padding:12.8px;padding:.8rem;background-color:hsla(0,0%,7%,.8);box-shadow:0 0 14px rgba(0,0,0,.1);color:#fff;line-height:20px;line-height:1.25rem;text-align:left;z-index:1;pointer-events:none;display:block;opacity:0;visibility:hidden;transition:all .3s;bottom:100%;left:50%;-webkit-transform:translate(-50%,10px);transform:translate(-50%,10px);white-space:pre;width:auto\n}\n[data-wenk]:hover{overflow:visible\n}\n[data-wenk]:hover:after{display:block;opacity:1;visibility:visible;-webkit-transform:translate(-50%,-10px);transform:translate(-50%,-10px)\n}\n[data-wenk].wenk--bottom:after,[data-wenk][data-wenk-pos=bottom]:after{bottom:auto;top:100%;left:50%;-webkit-transform:translate(-50%,-10px);transform:translate(-50%,-10px)\n}\n[data-wenk].wenk--bottom:hover:after,[data-wenk][data-wenk-pos=bottom]:hover:after{-webkit-transform:translate(-50%,10px);transform:translate(-50%,10px)\n}\n[data-wenk].wenk--left:after,[data-wenk][data-wenk-pos=left]:after{bottom:auto;left:auto;top:50%;right:100%;-webkit-transform:translate(10px,-50%);transform:translate(10px,-50%)\n}\n[data-wenk].wenk--left:hover:after,[data-wenk][data-wenk-pos=left]:hover:after{-webkit-transform:translate(-10px,-50%);transform:translate(-10px,-50%)\n}\n[data-wenk].wenk--right:after,[data-wenk][data-wenk-pos=right]:after{bottom:auto;top:50%;left:100%;-webkit-transform:translate(-10px,-50%);transform:translate(-10px,-50%)\n}\n[data-wenk].wenk--right:hover:after,[data-wenk][data-wenk-pos=right]:hover:after{-webkit-transform:translate(10px,-50%);transform:translate(10px,-50%)\n}\n[data-wenk].wenk-length--small:after,[data-wenk][data-wenk-length=small]:after{white-space:normal;width:80px\n}\n[data-wenk].wenk-length--medium:after,[data-wenk][data-wenk-length=medium]:after{white-space:normal;width:150px\n}\n[data-wenk].wenk-length--large:after,[data-wenk][data-wenk-length=large]:after{white-space:normal;width:260px\n}\n[data-wenk].wenk-length--fit:after,[data-wenk][data-wenk-length=fit]:after{white-space:normal;width:100%\n}\n[data-wenk].wenk-align--right:after,[data-wenk][data-wenk-align=right]:after{text-align:right\n}\n[data-wenk].wenk-align--center:after,[data-wenk][data-wenk-align=center]:after{text-align:center\n}\n[data-wenk=\"\"]:after{visibility:hidden!important\n}", ""]);

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: /home/vagrant/Sites/vue_workflows/laravel/node_modules/mozjpeg/vendor/cjpeg: 1: /home/vagrant/Sites/vue_workflows/laravel/node_modules/mozjpeg/vendor/cjpeg: Syntax error: word unexpected (expecting \")\")\n\n    at Promise.all.then.arr (/home/vagrant/Sites/vue_workflows/laravel/node_modules/execa/index.js:201:11)\n    at process._tickCallback (internal/process/next_tick.js:109:7)");

/***/ }),

/***/ 845:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
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
    staticClass: "ti-layout-tab-window"
  }), _vm._v(" Tabs\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "bs-example"
  }, [_c('ul', {
    staticClass: "nav nav-tabs",
    staticStyle: {
      "margin-bottom": "15px"
    }
  }, [_c('li', {
    staticClass: "active"
  }, [_c('a', {
    attrs: {
      "href": "#home",
      "data-toggle": "tab"
    }
  }, [_vm._v("Home")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#profile",
      "data-toggle": "tab"
    }
  }, [_vm._v("Profile")])]), _vm._v(" "), _c('li', {
    staticClass: "disabled"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Disabled")])])]), _vm._v(" "), _c('div', {
    staticClass: "tab-content",
    attrs: {
      "id": "myTabContent"
    }
  }, [_c('div', {
    staticClass: "tab-pane fade active in",
    attrs: {
      "id": "home"
    }
  }, [_c('p', [_vm._v("\n                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.\n                                ")]), _vm._v(" "), _c('p', [_vm._v("making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.\n                                ")])]), _vm._v(" "), _c('div', {
    staticClass: "tab-pane fade",
    attrs: {
      "id": "profile"
    }
  }, [_c('p', [_vm._v("\n                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\n                                ")]), _vm._v(" "), _c('p', [_vm._v("If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n                                ")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-layout-tab"
  }), _vm._v(" Pills\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "bs-example"
  }, [_c('ul', {
    staticClass: "nav nav-pills"
  }, [_c('li', {
    staticClass: "active"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Home")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Profile")])]), _vm._v(" "), _c('li', {
    staticClass: "disabled"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Disabled")])])])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "bs-example"
  }, [_c('ul', {
    staticClass: "nav nav-pills nav-stacked",
    staticStyle: {
      "max-width": "300px"
    }
  }, [_c('li', {
    staticClass: "active"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Home")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Profile")])]), _vm._v(" "), _c('li', {
    staticClass: "disabled"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Disabled")])])])])])])])]), _vm._v(" "), _c('div', {
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
    staticClass: "ti-comment"
  }), _vm._v(" Popover\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', [_c('button', {
    staticClass: "btn btn-warning",
    staticStyle: {
      "margin-bottom": "10px",
      "margin-left": "10px"
    },
    attrs: {
      "type": "button",
      "title": "Popover title",
      "data-container": "body",
      "data-toggle": "popover",
      "data-placement": "right",
      "data-content": "Popover on right"
    }
  }, [_vm._v("right\n                        ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    staticStyle: {
      "margin-bottom": "10px",
      "margin-left": "10px"
    },
    attrs: {
      "type": "button",
      "title": "Popover title",
      "data-container": "body",
      "data-toggle": "popover",
      "data-placement": "bottom",
      "data-content": "Popover on bottom"
    }
  }, [_vm._v("bottom\n                        ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    staticStyle: {
      "margin-bottom": "10px",
      "margin-left": "10px"
    },
    attrs: {
      "type": "button",
      "title": "Popover title",
      "data-container": "body",
      "data-toggle": "popover",
      "data-placement": "left",
      "data-content": "Popover on left"
    }
  }, [_vm._v("left\n                        ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    staticStyle: {
      "margin-bottom": "10px",
      "margin-left": "10px"
    },
    attrs: {
      "type": "button",
      "title": "Popover title",
      "data-container": "body",
      "data-toggle": "popover",
      "data-placement": "top",
      "data-content": "Popover on top"
    }
  }, [_vm._v("top\n                        ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-comments"
  }), _vm._v(" Tool Tips\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('p', [_c('span', {
    staticClass: "bs-example tooltip-demo"
  }, [_c('button', {
    staticClass: "btn tooltips btn-primary btn-lg",
    staticStyle: {
      "margin-bottom": "10px"
    },
    attrs: {
      "data-toggle": "tooltip",
      "data-tooltip": "tooltip",
      "data-placement": "top",
      "data-original-title": "Tooltip in top"
    }
  }, [_vm._v("Top\n                                ")])]), _vm._v(" "), _c('span', {
    staticClass: "bs-example tooltip-demo"
  }, [_c('button', {
    staticClass: "btn tooltips btn-success btn-lg",
    staticStyle: {
      "margin-bottom": "10px"
    },
    attrs: {
      "data-toggle": "tooltip",
      "data-tooltip": "tooltip",
      "data-placement": "left",
      "data-original-title": "Tooltip in left"
    }
  }, [_vm._v("Left\n                                ")])]), _vm._v(" "), _c('span', {
    staticClass: "bs-example tooltip-demo"
  }, [_c('button', {
    staticClass: "btn tooltips btn-info btn-lg",
    staticStyle: {
      "margin-bottom": "10px"
    },
    attrs: {
      "data-toggle": "tooltip",
      "data-tooltip": "tooltip",
      "data-placement": "right",
      "data-original-title": "Tooltip in right"
    }
  }, [_vm._v("Right\n                                ")])]), _vm._v(" "), _c('span', {
    staticClass: "bs-example tooltip-demo"
  }, [_c('button', {
    staticClass: "btn tooltips btn-warning btn-lg",
    staticStyle: {
      "margin-bottom": "10px"
    },
    attrs: {
      "data-toggle": "tooltip",
      "data-tooltip": "tooltip",
      "data-placement": "bottom",
      "data-original-title": "Tooltip in bottom"
    }
  }, [_vm._v("Bottom\n                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "bs-example"
  }, [_c('ul', {
    staticClass: "tooltip-examples list-inline"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "javascript:void(0)",
      "data-toggle": "tooltip",
      "data-original-title": "hi"
    }
  }, [_vm._v("Tooltip")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:void(0)",
      "data-toggle": "tooltip",
      "data-original-title": "hello!!"
    }
  }, [_vm._v("small\n                                        tooltip")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:void(0)",
      "data-toggle": "tooltip",
      "data-original-title": "A much longer tooltip to demonstrate the max-width of the Bootstrp tooltip."
    }
  }, [_vm._v("Large\n                                        tooltip")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:void(0)",
      "data-toggle": "tooltip",
      "data-original-title": "Bye!"
    }
  }, [_vm._v("Last\n                                        tooltip")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-comment-alt"
  }), _vm._v(" Popover\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', [_c('div', {
    staticClass: "po-markup"
  }, [_c('br'), _vm._v(" "), _c('a', {
    staticClass: "po-link",
    attrs: {
      "href": "http://www.fifa.com/"
    }
  }, [_vm._v("fifa.com")]), _vm._v(" ← popover on link so you can get site information.\n                            "), _c('div', {
    staticClass: "po-content hidden"
  }, [_c('div', {
    staticClass: "po-title"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(717),
      "alt": "Google",
      "width": "20",
      "height": "20"
    }
  }), _vm._v(" Foot Ball world cup\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "po-body"
  }, [_c('p', [_vm._v("\n                                        Football refers to a number of sports that involve, to varying degrees, kicking a ball with the foot to score a goal. The most popular of these sports worldwide is\n                                        "), _c('strong', [_vm._v("association football")]), _vm._v(" , more commonly known as just \"football\" or \"soccer\".\n                                    ")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-comment"
  }), _vm._v(" Wenk Tool tip\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('h4', [_vm._v("Wenk positions")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 text-center"
  }, [_c('p', [_c('span', {
    staticClass: "wenk-area",
    attrs: {
      "data-wenk": "Top!"
    }
  }, [_vm._v("Wenk to the top!")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 text-center"
  }, [_c('p', [_c('span', {
    staticClass: "wenk-area",
    attrs: {
      "data-wenk": "Left!",
      "data-wenk-pos": "left"
    }
  }, [_vm._v("Wenk to the left!")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 text-center"
  }, [_c('p', [_c('span', {
    staticClass: "wenk-area",
    attrs: {
      "data-wenk": "Right!",
      "data-wenk-pos": "right"
    }
  }, [_vm._v("Wenk to the right!")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 text-center"
  }, [_c('p', [_c('span', {
    staticClass: "wenk-area",
    attrs: {
      "data-wenk": "Bottom!",
      "data-wenk-pos": "bottom"
    }
  }, [_vm._v("Wenk to the bottom!")])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('h4', [_vm._v("Wenk Size")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 text-center"
  }, [_c('p', [_c('span', {
    staticClass: "wenk-length--small wenk-area",
    attrs: {
      "data-wenk": "I'm small!"
    }
  }, [_vm._v("Small wenk!")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 text-center"
  }, [_c('p', [_c('span', {
    staticClass: "wenk-length--medium wenk-area",
    attrs: {
      "data-wenk": "I'm medium!"
    }
  }, [_vm._v("Medium wenk!")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 text-center"
  }, [_c('p', [_c('span', {
    staticClass: "wenk-length--large wenk-area",
    attrs: {
      "data-wenk": "I'm large!"
    }
  }, [_vm._v("Large wenk!")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 text-center"
  }, [_c('p', [_c('span', {
    staticClass: "wenk-length--fit wenk-area",
    attrs: {
      "data-wenk": "I fit!"
    }
  }, [_vm._v("I fit just right!")])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('h4', [_vm._v("Wenk Alignment")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4 text-center"
  }, [_c('p', [_c('span', {
    staticClass: "wenk-align--left wenk-length--large wenk-area",
    attrs: {
      "data-wenk": "I'm left!"
    }
  }, [_vm._v("Left wenk!")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4 text-center"
  }, [_c('p', [_c('span', {
    staticClass: "wenk-align--center wenk-length--large wenk-area",
    attrs: {
      "data-wenk": "I'm center!"
    }
  }, [_vm._v("center wenk!")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4 text-center"
  }, [_c('p', [_c('span', {
    staticClass: "wenk-align--right wenk-length--large wenk-area",
    attrs: {
      "data-wenk": "I'm right!"
    }
  }, [_vm._v("Right wenk!")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-layout-menu-v"
  }), _vm._v(" Accordions\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('ul', {
    staticClass: "nav nav-tabs"
  }, [_c('li', {
    staticClass: "active"
  }, [_c('a', {
    attrs: {
      "href": "#faq-cat-1",
      "data-toggle": "tab"
    }
  }, [_vm._v("Tab 1")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#faq-cat-2",
      "data-toggle": "tab"
    }
  }, [_vm._v("Tab 2")])])]), _vm._v(" "), _c('div', {
    staticClass: "tab-content faq-cat-content"
  }, [_c('div', {
    staticClass: "tab-pane active in fade",
    attrs: {
      "id": "faq-cat-1"
    }
  }, [_c('div', {
    staticClass: "panel-group",
    attrs: {
      "id": "accordion-cat-1"
    }
  }, [_c('div', {
    staticClass: "panel panel-default panel-faq"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('a', {
    attrs: {
      "data-toggle": "collapse",
      "data-parent": "#accordion-cat-1",
      "href": "#faq-cat-1-sub-1"
    }
  }, [_c('h4', {
    staticClass: "panel-title"
  }, [_vm._v("\n                                                    Item Tab 1-1\n                                                    "), _c('span', {
    staticClass: "pull-right"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "panel-collapse collapse",
    attrs: {
      "id": "faq-cat-1-sub-1"
    }
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_c('p', [_vm._v(" Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.\n                                            ")]), _vm._v(" "), _c('p', [_vm._v("Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                                            ")]), _vm._v(" "), _c('p', [_vm._v("Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                                            ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "panel panel-default panel-faq"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('a', {
    attrs: {
      "data-toggle": "collapse",
      "data-parent": "#accordion-cat-1",
      "href": "#faq-cat-1-sub-2"
    }
  }, [_c('h4', {
    staticClass: "panel-title"
  }, [_vm._v("\n                                                    Item Tab 1-2\n                                                    "), _c('span', {
    staticClass: "pull-right"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "panel-collapse collapse",
    attrs: {
      "id": "faq-cat-1-sub-2"
    }
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_c('p', [_vm._v("Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.\n                                            ")]), _vm._v(" "), _c('p', [_vm._v("Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                                            ")]), _vm._v(" "), _c('p', [_vm._v("Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                                            ")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "tab-pane fade",
    attrs: {
      "id": "faq-cat-2"
    }
  }, [_c('div', {
    staticClass: "panel-group",
    attrs: {
      "id": "accordion-cat-2"
    }
  }, [_c('div', {
    staticClass: "panel panel-default panel-faq"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('a', {
    attrs: {
      "data-toggle": "collapse",
      "data-parent": "#accordion-cat-2",
      "href": "#faq-cat-2-sub-1"
    }
  }, [_c('h4', {
    staticClass: "panel-title"
  }, [_vm._v("\n                                                    Item Tab 2-1\n                                                    "), _c('span', {
    staticClass: "pull-right"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "panel-collapse collapse",
    attrs: {
      "id": "faq-cat-2-sub-1"
    }
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_c('p', [_vm._v("Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\n                                            ")]), _vm._v(" "), _c('p', [_vm._v("\n                                                Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                                            ")]), _vm._v(" "), _c('p', [_vm._v("Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                                            ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "panel panel-default panel-faq"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('a', {
    attrs: {
      "data-toggle": "collapse",
      "data-parent": "#accordion-cat-2",
      "href": "#faq-cat-2-sub-2"
    }
  }, [_c('h4', {
    staticClass: "panel-title"
  }, [_vm._v("\n                                                    Item Tab 2-2\n                                                    "), _c('span', {
    staticClass: "pull-right"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "panel-collapse collapse",
    attrs: {
      "id": "faq-cat-2-sub-2"
    }
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_c('p', [_vm._v("\n                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.\n                                            ")]), _vm._v(" "), _c('p', [_vm._v("Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica.\n                                            ")]), _vm._v(" "), _c('p', [_vm._v("Craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                                            ")])])])])])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5d9bdcd8", module.exports)
  }
}

/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(639);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("29e61495", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5d9bdcd8\",\"scoped\":false,\"hasInlineConfig\":true}!./tab.css", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5d9bdcd8\",\"scoped\":false,\"hasInlineConfig\":true}!./tab.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(640);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("77343a7e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5d9bdcd8\",\"scoped\":false,\"hasInlineConfig\":true}!./wenk.min.css", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5d9bdcd8\",\"scoped\":false,\"hasInlineConfig\":true}!./wenk.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});