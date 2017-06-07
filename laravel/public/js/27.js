webpackJsonp([27],{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(997)
__webpack_require__(998)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(444),
  /* template */
  __webpack_require__(854),
  /* scopeId */
  "data-v-6dc1b94b",
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Sites/vue_workflows/laravel/resources/assets/js/components/components/vscroll.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vscroll.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6dc1b94b", Component.options)
  } else {
    hotAPI.reload("data-v-6dc1b94b", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 416:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        height: null,
        minHeight: null,
        maxHeight: null,
        color: null,
        barWidth: null,
        alwaysvisible: Boolean
    },
    mounted: function mounted() {
        this.dragDealer();
        this.moveBar();
    },
    data: function data() {
        return {
            scrollRatio: 0,
            grabbed: false
        };
    },

    methods: {
        // Mouse drag handler
        dragDealer: function dragDealer() {
            var _this = this;

            var t = this;
            var lastPageY;
            this.$refs.bar.addEventListener('mousedown', function (e) {
                lastPageY = e.pageY;
                _this.grabbed = true;
                document.body.classList.add('ss-grabbed');
                document.addEventListener('mousemove', drag);
                document.addEventListener('mouseup', stop);
                return false;

                function drag(e) {
                    var delta = e.pageY - lastPageY;
                    lastPageY = e.pageY;
                    t.$refs.content.scrollTop += delta / t.scrollRatio;
                }

                function stop() {
                    t.grabbed = false;
                    document.body.classList.remove('ss-grabbed');
                    document.removeEventListener('mousemove', drag);
                    document.removeEventListener('mouseup', stop);
                }
            });
        },
        moveBar: function moveBar() {
            var content = this.$refs.content;
            var bar = this.$refs.bar;
            var totalHeight = content.scrollHeight,
                ownHeight = content.clientHeight;
            this.scrollRatio = ownHeight / totalHeight;
            // Hide scrollbar if no scrolling is possible
            if (this.scrollRatio >= 1) {
                bar.classList.add('ss-hidden');
            } else {
                bar.classList.remove('ss-hidden');
                bar.style.cssText = 'height:' + this.scrollRatio * 100 + '%; top:' + content.scrollTop / totalHeight * 100 + '%;right:-' + (this.$refs.vscroll.clientWidth - bar.clientWidth) + 'px;background-color:' + this.color + ';width:' + this.barWidth;
            }
        }
    }
});

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_scroll_vScroll_vue__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_scroll_vScroll_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_layout_scroll_vScroll_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "vscroll_demo",
    components: {
        vScroll: __WEBPACK_IMPORTED_MODULE_0__components_layout_scroll_vScroll_vue___default.a
    },
    data: function data() {
        return {
            bar_color: "#428bca",
            height: "300px",
            bar_width: "10px",
            visible: false
        };
    }
});

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.ss-wrapper {\r\n    overflow: hidden;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    z-index: 1;\r\n    float: left;\n}\n.ss-content {\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 0 32px 0 0;\r\n    position: relative;\r\n    right: -18px;\r\n    overflow: auto;\r\n    box-sizing: border-box;\n}\n.ss-scroll {\r\n    position: relative;\r\n    background: rgba(0, 0, 0, 0.1);\r\n    width: 9px;\r\n    border-radius: 4px;\r\n    top: 0;\r\n    z-index: 2;\r\n    cursor: pointer;\r\n    opacity: 0;\r\n    transition: opacity 0.25s linear;\n}\n.ss-hidden {\r\n    display: none;\n}\n.ss-container:hover .ss-scroll,\r\n.ss-scroll.ss-grabbed,\r\n.ss-scroll.visible {\r\n    opacity: 1;\n}\n.ss-grabbed {\r\n    -o-user-select: none;\r\n    -ms-user-select: none;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    user-select: none;\n}\r\n", ""]);

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.checkbox {\n  padding-left: 20px;\n}\n.checkbox label {\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  padding-left: 5px;\n}\n.checkbox label::before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  width: 17px;\n  height: 17px;\n  left: 0;\n  margin-left: -20px;\n  border: 1px solid #cccccc;\n  border-radius: 3px;\n  background-color: #fff;\n  transition: border 0.15s ease-in-out, color 0.15s ease-in-out;\n}\n.checkbox label::after {\n  display: inline-block;\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  left: 0;\n  top: 0;\n  margin-left: -20px;\n  padding-left: 3px;\n  padding-top: 1px;\n  font-size: 11px;\n  color: #555555;\n}\n.checkbox input[type=\"checkbox\"],\n.checkbox input[type=\"radio\"] {\n  opacity: 0;\n  z-index: 1;\n}\n.checkbox input[type=\"checkbox\"]:focus + label::before,\n.checkbox input[type=\"radio\"]:focus + label::before {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.checkbox input[type=\"checkbox\"]:checked + label::after,\n.checkbox input[type=\"radio\"]:checked + label::after {\n  font-family: \"FontAwesome\";\n  content: \"\\f00c\";\n}\n.checkbox input[type=\"checkbox\"]:indeterminate + label::after,\n.checkbox input[type=\"radio\"]:indeterminate + label::after {\n  display: block;\n  content: \"\";\n  width: 10px;\n  height: 3px;\n  background-color: #555555;\n  border-radius: 2px;\n  margin-left: -16.5px;\n  margin-top: 7px;\n}\n.checkbox input[type=\"checkbox\"]:disabled + label,\n.checkbox input[type=\"radio\"]:disabled + label {\n  opacity: 0.65;\n}\n.checkbox input[type=\"checkbox\"]:disabled + label::before,\n.checkbox input[type=\"radio\"]:disabled + label::before {\n  background-color: #eeeeee;\n  cursor: not-allowed;\n}\n.checkbox.checkbox-circle label::before {\n  border-radius: 50%;\n}\n.checkbox.checkbox-inline {\n  margin-top: 0;\n}\n.checkbox-primary input[type=\"checkbox\"]:checked + label::before,\n.checkbox-primary input[type=\"radio\"]:checked + label::before {\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.checkbox-primary input[type=\"checkbox\"]:checked + label::after,\n.checkbox-primary input[type=\"radio\"]:checked + label::after {\n  color: #fff;\n}\n.checkbox-danger input[type=\"checkbox\"]:checked + label::before,\n.checkbox-danger input[type=\"radio\"]:checked + label::before {\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n.checkbox-danger input[type=\"checkbox\"]:checked + label::after,\n.checkbox-danger input[type=\"radio\"]:checked + label::after {\n  color: #fff;\n}\n.checkbox-info input[type=\"checkbox\"]:checked + label::before,\n.checkbox-info input[type=\"radio\"]:checked + label::before {\n  background-color: #5bc0de;\n  border-color: #5bc0de;\n}\n.checkbox-info input[type=\"checkbox\"]:checked + label::after,\n.checkbox-info input[type=\"radio\"]:checked + label::after {\n  color: #fff;\n}\n.checkbox-warning input[type=\"checkbox\"]:checked + label::before,\n.checkbox-warning input[type=\"radio\"]:checked + label::before {\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n.checkbox-warning input[type=\"checkbox\"]:checked + label::after,\n.checkbox-warning input[type=\"radio\"]:checked + label::after {\n  color: #fff;\n}\n.checkbox-success input[type=\"checkbox\"]:checked + label::before,\n.checkbox-success input[type=\"radio\"]:checked + label::before {\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n}\n.checkbox-success input[type=\"checkbox\"]:checked + label::after,\n.checkbox-success input[type=\"radio\"]:checked + label::after {\n  color: #fff;\n}\n.checkbox-primary input[type=\"checkbox\"]:indeterminate + label::before,\n.checkbox-primary input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.checkbox-primary input[type=\"checkbox\"]:indeterminate + label::after,\n.checkbox-primary input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff;\n}\n.checkbox-danger input[type=\"checkbox\"]:indeterminate + label::before,\n.checkbox-danger input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n.checkbox-danger input[type=\"checkbox\"]:indeterminate + label::after,\n.checkbox-danger input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff;\n}\n.checkbox-info input[type=\"checkbox\"]:indeterminate + label::before,\n.checkbox-info input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #5bc0de;\n  border-color: #5bc0de;\n}\n.checkbox-info input[type=\"checkbox\"]:indeterminate + label::after,\n.checkbox-info input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff;\n}\n.checkbox-warning input[type=\"checkbox\"]:indeterminate + label::before,\n.checkbox-warning input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n.checkbox-warning input[type=\"checkbox\"]:indeterminate + label::after,\n.checkbox-warning input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff;\n}\n.checkbox-success input[type=\"checkbox\"]:indeterminate + label::before,\n.checkbox-success input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n}\n.checkbox-success input[type=\"checkbox\"]:indeterminate + label::after,\n.checkbox-success input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff;\n}\n.radio {\n  padding-left: 20px;\n}\n.radio label {\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  padding-left: 5px;\n}\n.radio label::before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  width: 17px;\n  height: 17px;\n  left: 0;\n  margin-left: -20px;\n  border: 1px solid #cccccc;\n  border-radius: 50%;\n  background-color: #fff;\n  transition: border 0.15s ease-in-out;\n}\n.radio label::after {\n  display: inline-block;\n  position: absolute;\n  content: \" \";\n  width: 11px;\n  height: 11px;\n  left: 3px;\n  top: 3px;\n  margin-left: -20px;\n  border-radius: 50%;\n  background-color: #555555;\n  -webkit-transform: scale(0, 0);\n  transform: scale(0, 0);\n  transition: -webkit-transform 0.1s cubic-bezier(0.8, -0.33, 0.2, 1.33);\n  transition: transform 0.1s cubic-bezier(0.8, -0.33, 0.2, 1.33);\n  transition: transform 0.1s cubic-bezier(0.8, -0.33, 0.2, 1.33), -webkit-transform 0.1s cubic-bezier(0.8, -0.33, 0.2, 1.33);\n}\n.radio input[type=\"radio\"] {\n  opacity: 0;\n  z-index: 1;\n}\n.radio input[type=\"radio\"]:focus + label::before {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.radio input[type=\"radio\"]:checked + label::after {\n  -webkit-transform: scale(1, 1);\n  transform: scale(1, 1);\n}\n.radio input[type=\"radio\"]:disabled + label {\n  opacity: 0.65;\n}\n.radio input[type=\"radio\"]:disabled + label::before {\n  cursor: not-allowed;\n}\n.radio.radio-inline {\n  margin-top: 0;\n}\n.radio-primary input[type=\"radio\"] + label::after {\n  background-color: #337ab7;\n}\n.radio-primary input[type=\"radio\"]:checked + label::before {\n  border-color: #337ab7;\n}\n.radio-primary input[type=\"radio\"]:checked + label::after {\n  background-color: #337ab7;\n}\n.radio-danger input[type=\"radio\"] + label::after {\n  background-color: #d9534f;\n}\n.radio-danger input[type=\"radio\"]:checked + label::before {\n  border-color: #d9534f;\n}\n.radio-danger input[type=\"radio\"]:checked + label::after {\n  background-color: #d9534f;\n}\n.radio-info input[type=\"radio\"] + label::after {\n  background-color: #5bc0de;\n}\n.radio-info input[type=\"radio\"]:checked + label::before {\n  border-color: #5bc0de;\n}\n.radio-info input[type=\"radio\"]:checked + label::after {\n  background-color: #5bc0de;\n}\n.radio-warning input[type=\"radio\"] + label::after {\n  background-color: #f0ad4e;\n}\n.radio-warning input[type=\"radio\"]:checked + label::before {\n  border-color: #f0ad4e;\n}\n.radio-warning input[type=\"radio\"]:checked + label::after {\n  background-color: #f0ad4e;\n}\n.radio-success input[type=\"radio\"] + label::after {\n  background-color: #5cb85c;\n}\n.radio-success input[type=\"radio\"]:checked + label::before {\n  border-color: #5cb85c;\n}\n.radio-success input[type=\"radio\"]:checked + label::after {\n  background-color: #5cb85c;\n}\ninput[type=\"checkbox\"].styled:checked + label:after,\ninput[type=\"radio\"].styled:checked + label:after {\n  font-family: 'FontAwesome';\n  content: \"\\f00c\";\n}\ninput[type=\"checkbox\"] .styled:checked + label::before,\ninput[type=\"radio\"] .styled:checked + label::before {\n  color: #fff;\n}\ninput[type=\"checkbox\"] .styled:checked + label::after,\ninput[type=\"radio\"] .styled:checked + label::after {\n  color: #fff;\n}\n", ""]);

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.radio[data-v-6dc1b94b],\r\n.checkbox[data-v-6dc1b94b] {\r\n    display: block;\n}\r\n", ""]);

/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(995)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(416),
  /* template */
  __webpack_require__(852),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Sites/vue_workflows/laravel/resources/assets/js/components/components/layout/scroll/vScroll.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vScroll.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67f70c2e", Component.options)
  } else {
    hotAPI.reload("data-v-67f70c2e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 852:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "vscroll",
    staticClass: "ss-container",
    style: ({
      height: _vm.height,
      'min-height': _vm.minHeight,
      'max-height': _vm.maxHeight
    })
  }, [_c('div', {
    staticClass: "ss-wrapper"
  }, [_c('div', {
    ref: "content",
    staticClass: "ss-content",
    on: {
      "scroll": _vm.moveBar,
      "mouseenter": _vm.moveBar
    }
  }, [_vm._t("default")], 2)]), _vm._v(" "), _c('div', {
    ref: "bar",
    staticClass: "ss-scroll",
    class: {
      'ss-grabbed': _vm.grabbed, 'visible': _vm.alwaysvisible
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-67f70c2e", module.exports)
  }
}

/***/ }),

/***/ 854:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Bar Color (Any valid css color)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.bar_color),
      expression: "bar_color"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "color",
      "placeholder": "Any valid css color"
    },
    domProps: {
      "value": (_vm.bar_color)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.bar_color = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Height")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.height),
      expression: "height"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Height of container"
    },
    domProps: {
      "value": (_vm.height)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.height = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Bar Width")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.bar_width),
      expression: "bar_width"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "width of bar"
    },
    domProps: {
      "value": (_vm.bar_width)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.bar_width = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "visible"
    }
  }, [_vm._v("Always Visible")]), _vm._v(" "), _c('div', {
    staticClass: "checkbox checkbox-success"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.visible),
      expression: "visible"
    }],
    staticClass: "checkbox",
    attrs: {
      "type": "checkbox",
      "id": "visible"
    },
    domProps: {
      "checked": Array.isArray(_vm.visible) ? _vm._i(_vm.visible, null) > -1 : (_vm.visible)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.visible,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.visible = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.visible = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.visible = $$c
        }
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "visible"
    }
  })])])]), _vm._v(" "), _c('v-scroll', {
    attrs: {
      "height": _vm.height,
      "color": _vm.bar_color,
      "max-height": "100%",
      "min-height": "120px",
      "bar-width": _vm.bar_width,
      "alwaysvisible": _vm.visible
    }
  }, [_c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-12"
  }, [_c('p', [_vm._v("Available props")]), _vm._v(" "), _c('pre', [_vm._v("\"Height\",\"min-height\",\"max-height\",\"color\",\"bar-width\",\"alwaysvisible\"")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6dc1b94b", module.exports)
  }
}

/***/ }),

/***/ 995:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(655);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("43e89b28", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-67f70c2e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vScroll.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-67f70c2e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vScroll.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 997:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(657);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("45ae7b4e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6dc1b94b\",\"scoped\":false,\"hasInlineConfig\":true}!./awesome-bootstrap-checkbox.css", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6dc1b94b\",\"scoped\":false,\"hasInlineConfig\":true}!./awesome-bootstrap-checkbox.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 998:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(658);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("2fc8a6de", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6dc1b94b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./vscroll.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6dc1b94b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./vscroll.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});