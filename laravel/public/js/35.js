webpackJsonp([35],{

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(922)
__webpack_require__(921)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(417),
  /* template */
  __webpack_require__(820),
  /* scopeId */
  "data-v-2de248ff",
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Sites/vue_workflows/laravel/resources/assets/js/components/components/lockscreen.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] lockscreen.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2de248ff", Component.options)
  } else {
    hotAPI.reload("data-v-2de248ff", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 274:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: /home/vagrant/Sites/vue_workflows/laravel/node_modules/mozjpeg/vendor/cjpeg: 1: /home/vagrant/Sites/vue_workflows/laravel/node_modules/mozjpeg/vendor/cjpeg: Syntax error: word unexpected (expecting \")\")\n\n    at Promise.all.then.arr (/home/vagrant/Sites/vue_workflows/laravel/node_modules/execa/index.js:201:11)\n    at process._tickCallback (internal/process/next_tick.js:109:7)");

/***/ }),

/***/ 417:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "lockscreen",
    mounted: function mounted() {
        "use strict";

        $(document).ready(function () {
            var textfield = $("input[name=user]");
            $('button[type="submit"]').on('click', function (e) {
                e.preventDefault();
                //little validation just to check username
                if (textfield.val() != "") {
                    //$("body").scrollTo("#output");
                    $("#output").addClass("alert alert-success animated fadeInUp").html("Welcome back Addison").removeClass(' alert-danger');
                    $("input").css({
                        "height": "0",
                        "padding": "0",
                        "margin": "0",
                        "opacity": "0"
                    });
                    //change button text
                    $('.user-name').html('Unlocked');
                    $('button[type="submit"]').html("CONTINUE").addClass("btn-submit").on('click', function () {
                        window.location.href = '#/';
                    });

                    //show avatar
                    $(".avatar").css({
                        "background-image": "url('/static/img/authors/avatar1.jpg')"
                    });
                } else {
                    //profile pic error animation
                    $(".avatar").addClass('error_anim');
                    setTimeout(function () {
                        $(".avatar").removeClass('error_anim');
                    }, 400);
                }
            });
            // for demopage js fast loading

            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments);
                }, i[r].l = 1 * new Date();
                a = s.createElement(o), m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m);
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
            ga('create', 'UA-59850948-1', 'auto');
            ga('send', 'pageview');

            // for demopage js loading ends
        });
    },
    destroyed: function destroyed() {}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\ndiv.container.lockscreen[data-v-2de248ff] {\r\n    padding-top: 6.5%;\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: radial-gradient(ellipse at center, #5A93AF 0%, #004E74 100%);\r\n    overflow-y: auto;\n}\r\n", ""]);

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600);", ""]);
exports.push([module.i, "/* Fonts Imported from Google */\n\r\n/*   Core: General style\r\n----------------------------*/\nbody[data-v-2de248ff] {\r\n    font-family : 'Open Sans', sans-serif;\r\n    background  : radial-gradient(ellipse at center, #5A93AF 0%, #004E74 100%);\r\n    height      : 100%;\r\n    padding-top : 5%;\n}\nhtml[data-v-2de248ff], body[data-v-2de248ff] {\r\n    position : relative;\r\n    height   : 100%;\n}\n.lockscreen-container[data-v-2de248ff] {\r\n    position   : relative;\r\n    margin     : 80px auto;\r\n    padding    : 20px 40px 40px;\r\n    text-align : center;\n}\n#output[data-v-2de248ff] {\r\n    position    : absolute;\r\n    width       : 80%;\r\n    top         : -75px;\r\n    left        : 50%;\r\n    color       : #fff;\r\n    margin-left : -40%;\n}\n#output.alert-success[data-v-2de248ff] {\r\n    background-color: rgba(255, 255, 255, .3);\r\n    font-size: 15px;\r\n    padding: 12px;\r\n    border     : 0;\n}\n.avatar[data-v-2de248ff] {\r\n    position        : absolute;\r\n    width           : 100px;\r\n    height          : 100px;\r\n    z-index         : 2;\r\n    top             : 71px;\r\n    left            : 50%;\r\n    margin-left     : -50px;\r\n    border-radius   : 100%;\r\n    border          : 2px solid #aaa;\r\n    background-size : cover;\n}\n.form-box input[data-v-2de248ff] {\r\n    width      : 100%;\r\n    padding    : 10px;\r\n    text-align : center;\r\n    height     : 40px;\r\n    border     : 1px solid #ccc;;\r\n    background : #fafafa;\r\n    transition : 0.2s ease-in-out;\n}\n.form-box input[data-v-2de248ff]:focus {\r\n    outline    : 0;\r\n    background : #eee;\n}\n.form-box form[data-v-2de248ff] {\r\n    margin-top : 50px;\n}\n.form-box input[data-v-2de248ff] {\r\n    border-radius : 28px;\n}\n.form-box button.login[data-v-2de248ff] {\r\n    margin-top       : 41px;\r\n    padding          : 5px;\r\n    border-radius    : 33px;\r\n    background-color : rgba(255, 255, 255, .3);\n}\n.animated[data-v-2de248ff] {\r\n    -webkit-animation-duration  : 1s;\r\n    animation-duration          : 1s;\r\n    -webkit-animation-fill-mode : both;\r\n    animation-fill-mode         : both;\n}\n.btn[data-v-2de248ff]:focus, .btn[data-v-2de248ff]:active:focus {\r\n    outline : 0;\n}\n.form-box button.btn-submit[data-v-2de248ff] {\r\n    padding: 5px 12px;\r\n    color: #fff;\n}\n@-webkit-keyframes fadeInUp {\n0% {\r\n        opacity           : 0;\r\n        -webkit-transform : translateY(20px);\r\n        transform         : translateY(20px);\n}\n100% {\r\n        opacity           : 1;\r\n        -webkit-transform : translateY(0);\r\n        transform         : translateY(0);\n}\n}\n@keyframes fadeInUp {\n0% {\r\n        opacity           : 0;\r\n        -webkit-transform : translateY(20px);\r\n        transform         : translateY(20px);\n}\n100% {\r\n        opacity           : 1;\r\n        -webkit-transform : translateY(0);\r\n        transform         : translateY(0);\n}\n}\n.fadeInUp[data-v-2de248ff] {\r\n    -webkit-animation-name : fadeInUp;\r\n    animation-name         : fadeInUp;\n}\n.avatar[data-v-2de248ff] {\r\n    background-image : url("+__webpack_require__(274)+");\n}\r\n/*error animation*/\n.error_anim[data-v-2de248ff] {\r\n    -webkit-animation           : shake 0.82s cubic-bezier(.36, .07, .19, .97) both;\r\n            animation           : shake 0.82s cubic-bezier(.36, .07, .19, .97) both;\r\n    -webkit-transform           : translate3d(0, 0, 0);\r\n            transform           : translate3d(0, 0, 0);\r\n    border              : 1px solid #aaa;\r\n    box-shadow          : 0 0 7px #ff6666;\r\n    -webkit-backface-visibility : hidden;\r\n            backface-visibility : hidden;\r\n    -webkit-perspective         : 1000px;\r\n            perspective         : 1000px;\n}\n@-webkit-keyframes shake {\n10%, 90% {\r\n        -webkit-transform : translate3d(-1px, 0, 0);\r\n                transform : translate3d(-1px, 0, 0);\n}\n20%, 80% {\r\n        -webkit-transform : translate3d(2px, 0, 0);\r\n                transform : translate3d(2px, 0, 0);\n}\n30%, 50%, 70% {\r\n        -webkit-transform : translate3d(-4px, 0, 0);\r\n                transform : translate3d(-4px, 0, 0);\n}\n40%, 60% {\r\n        -webkit-transform : translate3d(4px, 0, 0);\r\n                transform : translate3d(4px, 0, 0);\n}\n}\n@keyframes shake {\n10%, 90% {\r\n        -webkit-transform : translate3d(-1px, 0, 0);\r\n                transform : translate3d(-1px, 0, 0);\n}\n20%, 80% {\r\n        -webkit-transform : translate3d(2px, 0, 0);\r\n                transform : translate3d(2px, 0, 0);\n}\n30%, 50%, 70% {\r\n        -webkit-transform : translate3d(-4px, 0, 0);\r\n                transform : translate3d(-4px, 0, 0);\n}\n40%, 60% {\r\n        -webkit-transform : translate3d(4px, 0, 0);\r\n                transform : translate3d(4px, 0, 0);\n}\n}\r\n/*error animation*/\r\n/*==== Preloader ====*/\n.preloader[data-v-2de248ff] {\r\n    position            : fixed;\r\n    width               : 100%;\r\n    height              : 100%;\r\n    top                 : 0;\r\n    left                : 0;\r\n    z-index             : 100000;\r\n    -webkit-backface-visibility : hidden;\r\n            backface-visibility : hidden;\r\n    background          : #ffffff;\n}\n.loader_img[data-v-2de248ff] {\r\n    width               : 50px;\r\n    height              : 50px;\r\n    position            : absolute;\r\n    left                : 50%;\r\n    top                 : 50%;\r\n    background-position : center;\r\n    margin              : -25px 0 0 -25px;\n}\n@media screen and (max-width : 767px) {\n.form-box form[data-v-2de248ff] {\r\n        margin-top : 135px;\n}\n.form-box button.login[data-v-2de248ff] {\r\n        margin-top : 13px;\n}\n.user-name[data-v-2de248ff] {\r\n        color : #FFF;\n}\n}\n@media screen and (min-width : 768px) {\n.form-box button.btn-submit[data-v-2de248ff] {\r\n        margin-top : 65px;\n}\n}", ""]);

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: 1: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: Syntax error: \"(\" unexpected\n\n    at Promise.all.then.arr (/home/vagrant/Sites/vue_workflows/laravel/node_modules/execa/index.js:201:11)\n    at process._tickCallback (internal/process/next_tick.js:109:7)");

/***/ }),

/***/ 758:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: 1: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: Syntax error: \"(\" unexpected\n\n    at Promise.all.then.arr (/home/vagrant/Sites/vue_workflows/laravel/node_modules/execa/index.js:201:11)\n    at process._tickCallback (internal/process/next_tick.js:109:7)");

/***/ }),

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container lockscreen"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1"
  }, [_c('div', {
    staticClass: "lockscreen-container"
  }, [_c('div', {
    attrs: {
      "id": "output"
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": __webpack_require__(752),
      "alt": "Logo"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "form-box"
  }, [_c('div', {
    staticClass: "avatar"
  }), _vm._v(" "), _c('form', {
    attrs: {
      "action": "#/"
    }
  }, [_c('div', {
    staticClass: "form"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('h4', {
    staticClass: "user-name hidden-sm hidden-md hidden-lg"
  }, [_vm._v("Addision")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('input', {
    staticClass: "hidden-xs",
    attrs: {
      "type": "text",
      "value": "Addison",
      "readonly": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "name": "user",
      "placeholder": "Password"
    }
  })])]), _vm._v(" "), _c('button', {
    staticClass: "btn login",
    attrs: {
      "id": "index",
      "type": "submit"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(758),
      "alt": "Go",
      "width": "30",
      "height": "30"
    }
  })])])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2de248ff", module.exports)
  }
}

/***/ }),

/***/ 921:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(580);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("2711afb2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2de248ff\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./lockscreen.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2de248ff\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./lockscreen.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 922:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(581);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("9387f458", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2de248ff\",\"scoped\":true,\"hasInlineConfig\":true}!./lockscreen.css", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2de248ff\",\"scoped\":true,\"hasInlineConfig\":true}!./lockscreen.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});