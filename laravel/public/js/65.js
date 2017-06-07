webpackJsonp([65],{

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(951)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(421),
  /* template */
  __webpack_require__(833),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Sites/vue_workflows/laravel/resources/assets/js/components/components/mini_sidebar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mini_sidebar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41d7e49c", Component.options)
  } else {
    hotAPI.reload("data-v-41d7e49c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 421:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "mini_sidebar",
    mounted: function mounted() {
        "use strict";

        $(document).ready(function () {
            $("body").addClass("mini_sidebar"
            //leftmenu init
            );if ($(window).width() >= 992) {
                $(".sidebar-toggle").on("click", function (e) {
                    e.preventDefault();
                    if ($("body").hasClass("mini")) {
                        $("body").removeClass("mini");
                        $("#menu").find("li").has("ul").children("a").off("click");
                        $("#menu").find("li").has("ul").children("a").on("click", function (e) {
                            e.preventDefault();
                            $(this).parent("li").toggleClass("active").children("ul").collapse("toggle");
                            $(this).parent("li").siblings().removeClass("active").children("ul.in").collapse("hide");
                        });
                    } else {
                        $("body").addClass("mini");
                        $(".sub-menu").css("height", "auto");
                        $('.menu-dropdown>a').off("click").on("click", function (e) {
                            e.preventDefault();
                        });
                        $("#menu").find('ul>.menu-dropdown').hover(function () {
                            var sideoffset = $(".sidebar").offset();
                            var submenuoffset = $(this).children("ul").offset();
                            if (sideoffset.top + $(".sidebar").height() < submenuoffset.top + $(this).children("ul").height()) {
                                $(this).children("ul").addClass("sidebarbottom");
                            }
                        });
                    }
                });
            }
        });
    },
    destroyed: function destroyed() {
        location.reload();
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\nbody.mini #menu .navigation .menu-icon {\r\n    text-align: center;\r\n    font-size: 20px;\n}\nbody.mini #menu .navigation > li > a {\r\n    padding: 14px 24px;\n}\nbody.mini #menu .navigation a {\r\n    padding: 11px 24px;\n}\nbody.mini #menu .navigation a.index {\r\n    padding: 17px 24px 17px 40px;\n}\nbody.mini .left-side,\r\nbody.mini .sidebar,\r\nbody.mini .menu-dropdown > a,\r\nbody.mini #menu .navigation {\r\n    width: 80px;\n}\nbody.mini .right-side {\r\n    margin-left: 80px;\n}\n@media screen and (max-width: 992px) {\nbody.mini .right-side {\r\n        margin-left: 0;\n}\nbody.mini .relative .right-side {\r\n        margin-left: -160px;\n}\n}\n@media screen and (min-width: 992px) {\nbody.mini .right-side.strech {\r\n        margin-left: 0;\n}\n}\n@media screen and (width: 992px) {\nbody.mini .left-side {\r\n        top: 0;\n}\n}\r\n\r\n\r\n/* drop list open on hover */\nbody.mini .dropdown {\r\n    position: relative;\r\n    display: inline-block;\n}\nbody.mini .menu-dropdown,\r\nbody.mini #menu .navigation > li:not(.menu-dropdown) > a {\r\n    position: relative;\r\n    width: 80px;\n}\nbody.mini #menu .menu-dropdown > ul,\r\nbody.mini #menu .menu-dropdown-open-ul {\r\n    position: absolute;\r\n    width: 250px !important;\r\n    top: 0;\r\n    right: -250px;\r\n    z-index: 2;\r\n    display: none;\r\n    overflow-y: auto;\n}\nbody.mini #menu .navigation > li:hover > a {\r\n    background-color: #eee;\r\n    color: #33CC99;\n}\nbody.mini #menu .menu-dropdown:hover > ul,\r\nbody.mini #menu .menu-dropdown:hover > ul.collapse {\r\n    display: block;\r\n    height: auto;\r\n    z-index: 1000;\r\n    background-color: #fff;\r\n    box-shadow: 0 0 15px #CCC;\n}\nbody.mini #menu .menu-dropdown:hover > a:after {\r\n    position: absolute;\r\n    top: 17px;\r\n    right: 0;\r\n    width: 0;\r\n    height: 0;\r\n    content: \"\";\r\n    border-top: 10px solid transparent;\r\n    border-right: 10px solid #2E576B;\r\n    border-bottom: 10px solid transparent;\r\n    border-left: 0;\n}\nbody.mini #menu .navigation {\r\n    padding: 4px 0 15px;\r\n    border-bottom: 0;\n}\nbody.mini .nav_profile .profile-left {\r\n    padding: 7px 13px 7px;\r\n    border: 0;\n}\nbody.mini #menu>.navigation .menu-dropdown>a {\r\n    text-align: center;\n}\nbody.mini #menu .menu-dropdown .sidebarbottom {\r\n    top: auto;\r\n    bottom: 0;\n}\nbody.mini #menu>.navigation>li>a .mm-text,\r\nbody.mini #menu>.navigation>li>a .fa.arrow,\r\nbody.mini .content-profile {\r\n    display: none;\n}\r\n", ""]);

/***/ }),

/***/ 833:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "outer"
  }, [_c('div', {
    staticClass: "inner bg-light lter"
  }, [_c('h2', [_vm._v("Code")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "language-markup"
  }, [_vm._v("<body class=\"boxed\">\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    ...\n    </nav>\n</body>")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-12"
  }, [_c('p', {
    staticClass: "text-justify"
  }, [_vm._v("\n                    Sed sed blandit urna. Proin ac sem nisl. Mauris risus orci, tristique eget velit at, congue euismod lacus. Curabitur id purus sit amet urna rutrum bibendum ac at quam. In hendrerit enim eu turpis molestie, et euismod tellus viverra. Suspendisse molestie at leo sit amet volutpat. Integer augue libero, scelerisque vitae luctus ac, consequat et arcu.\n            ")]), _vm._v(" "), _c('p', [_vm._v("\n                    Nullam malesuada turpis eu ullamcorper tincidunt. Integer aliquam felis eget neque facilisis ornare. Integer pharetra vitae dolor vel elementum. In nisl risus, dignissim non fermentum ac, pretium sit amet dui. Phasellus fringilla orci sapien, vel lacinia mi dapibus ut. Donec euismod congue nulla, in porttitor sapien. Pellentesque acilisis luctus adipiscing.\n            ")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa eros, dictum ut imperdiet eget, laoreet placerat orci. Aliquam eget neque neque. Donec dictum, enim convallis gravida fringilla, velit sem condimentum nunc, in pretium libero est sit amet elit. Nam ut arcu ac eros commodo rutrum ac nec purus. Fusce sodales pulvinar odio, vulputate fringilla ligula bibendum sit amet. Duis risus neque, molestie tincidunt odio vel, sodales vulputate mauris.\n            ")]), _vm._v(" "), _c('p', [_vm._v("\n                    Sed adipiscing justo tristique enim pharetra, nec ultricies metus sagittis.Duis varius id massa ut pellentesque. Nulla commodo erat eu mi aliquet aliquam. Vivamus commodo massa et nunc ullamcorper, vel pharetra purus consequat. Suspendisse a neque quis nibh dictum posuere ac et enim. Aliquam sit amet accumsan erat. Nullam euismod elit tellus, vel luctus enim luctus feugiat. Vestibulum quis placerat ipsum, porta vehicula massa. Etiam nec risus ac lacus gravida tincidunt. Vivamus eu ante vehicula, aliquam nisl et, suscipit ipsum. Vivamus velit nulla, tincidunt ac risus et, congue lobortis mauris. In condimentum consectetur purus, vel adipiscing felis sollicitudin vitae. Phasellus luctus, ligula eu tempor ullamcorper, lectus elit posuere augue, eget tempus lacus nibh a purus.\n            ")]), _vm._v(" "), _c('p', [_vm._v("\n                   Ut risus velit, adipiscing eu leo quis, vestibulum porttitor nunc. Sed sed blandit urna. Proin ac sem nisl. Mauris risus orci, tristique eget velit at, congue euismod lacus. Curabitur id purus sit amet urna rutrum bibendum ac at quam. In hendrerit enim eu turpis molestie, et euismod tellus viverra. Suspendisse molestie at leo sit amet volutpat. Integer augue libero, scelerisque vitae luctus ac, consequat et arcu. Nullam malesuada turpis eu ullamcorper tincidunt. Integer aliquam felis eget neque facilisis ornare. Integer pharetra vitae dolor vel elementum. In nisl risus, dignissim non fermentum ac, pretium sit amet dui. Phasellus fringilla orci sapien, vel lacinia mi dapibus ut. Donec euismod congue nulla, in porttitor sapien. Pellentesque facilisis luctus adipiscing.\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  }), _vm._v(" "), _c('p', [_vm._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa eros, dictum ut imperdiet eget, laoreet placerat orci. Aliquam eget neque neque. Donec dictum, enim convallis gravida fringilla, velit sem condimentum nunc, in pretium libero est sit amet elit. Nam ut arcu ac eros commodo rutrum ac nec purus. Fusce sodales pulvinar odio, vulputate fringilla ligula bibendum sit amet. Duis risus neque, molestie tincidunt odio vel, sodales vulputate mauris. Sed adipiscing justo tristique enim pharetra, nec ultricies metus sagittis. Duis varius id massa ut pellentesque.\n            ")]), _vm._v(" "), _c('p', [_vm._v("    Nulla commodo erat eu mi aliquet aliquam. Vivamus commodo massa et nunc ullamcorper, vel pharetra purus consequat. Suspendisse a neque quis nibh dictum posuere ac et enim. Aliquam sit amet accumsan erat. Nullam euismod elit tellus, vel luctus enim luctus feugiat. Vestibulum quis placerat ipsum, porta vehicula massa. Etiam nec risus ac lacus gravida tincidunt. Vivamus eu ante vehicula, aliquam nisl et, suscipit ipsum. Vivamus velit nulla, tincidunt ac risus et, congue lobortis mauris. In condimentum consectetur purus, vel adipiscing felis sollicitudin vitae. Phasellus luctus, ligula eu tempor ullamcorper, lectus elit posuere augue, eget tempus lacus nibh a purus.\n            ")]), _vm._v(" "), _c('p', [_vm._v("    Ut risus velit, adipiscing eu leo quis, vestibulum porttitor nunc. Sed sed blandit urna. Proin ac sem nisl. Mauris risus orci, tristique eget velit at, congue euismod lacus. Curabitur id purus sit amet urna rutrum bibendum ac at quam. In hendrerit enim eu turpis molestie, et euismod tellus viverra. Suspendisse molestie at leo sit amet volutpat. Integer augue libero, scelerisque vitae luctus ac, consequat et arcu. Nullam malesuada turpis eu ullamcorper tincidunt. Integer aliquam felis eget neque facilisis ornare. Integer pharetra vitae dolor vel elementum. In nisl risus, dignissim non fermentum ac, pretium sit amet dui. Phasellus fringilla orci sapien, vel lacinia mi dapibus ut. Donec euismod congue nulla, in porttitor sapien. Pellentesque facilisis luctus adipiscing.\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-41d7e49c", module.exports)
  }
}

/***/ }),

/***/ 951:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(610);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("28b7c19e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-41d7e49c\",\"scoped\":false,\"hasInlineConfig\":true}!./mini_sidebar.css", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-41d7e49c\",\"scoped\":false,\"hasInlineConfig\":true}!./mini_sidebar.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});