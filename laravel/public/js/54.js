webpackJsonp([54],{

/***/ 1042:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(704);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("2a11cec9", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-f15fc540\",\"scoped\":false,\"hasInlineConfig\":true}!./img_hover.css", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-f15fc540\",\"scoped\":false,\"hasInlineConfig\":true}!./img_hover.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1043:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(705);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("323e9868", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-f15fc540\",\"scoped\":false,\"hasInlineConfig\":true}!./imagehover.min.css", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-f15fc540\",\"scoped\":false,\"hasInlineConfig\":true}!./imagehover.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1043)
__webpack_require__(1042)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(411),
  /* template */
  __webpack_require__(878),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Sites/vue_workflows/laravel/resources/assets/js/components/components/image_hover.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] image_hover.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f15fc540", Component.options)
  } else {
    hotAPI.reload("data-v-f15fc540", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 411:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "image_hover",
    mounted: function mounted() {},
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n[class^='imghvr-'],\r\n[class*=' imghvr-'] {\r\n    background-color : #66cc99;\r\n    height           : 200px;\n}\n[class*=' imghvr-'] figcaption,\r\n[class^=imghvr-] figcaption {\r\n    background-color : #6699cc;\r\n    height           : 200px;\n}\n[class*=' imghvr-'] img,\r\n[class^=imghvr-] img {\r\n    height : 200px;\n}\r\n", ""]);

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n@charset \"UTF-8\";\n/*!\n * ImageHover.css - http://www.imagehover.io\n * Version 1.0\n * Author: Ciarán Walsh\n\n * Made available under a MIT License:\n * http://www.opensource.org/licenses/mit-license.php\n\n */\n[class*=\" imghvr-\"],[class^=imghvr-]{position:relative;display:inline-block;margin:0;max-width:100%;background-color:#2266a5;color:#fff;overflow:hidden;-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n[class*=\" imghvr-\"]>img,[class^=imghvr-]>img{vertical-align:top;max-width:100%\n}\n[class*=\" imghvr-\"] figcaption,[class^=imghvr-] figcaption{background-color:#135796;padding:30px;position:absolute;top:0;bottom:0;left:0;right:0;color:#fff\n}\n[class*=\" imghvr-\"] figcaption h1,[class*=\" imghvr-\"] figcaption h2,[class*=\" imghvr-\"] figcaption h3,[class*=\" imghvr-\"] figcaption h4,[class*=\" imghvr-\"] figcaption h5,[class*=\" imghvr-\"] figcaption h6,[class^=imghvr-] figcaption h1,[class^=imghvr-] figcaption h2,[class^=imghvr-] figcaption h3,[class^=imghvr-] figcaption h4,[class^=imghvr-] figcaption h5,[class^=imghvr-] figcaption h6{color:#fff\n}\n[class*=\" imghvr-\"] a,[class^=imghvr-] a{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1\n}\n[class*=\" imghvr-\"],[class*=\" imghvr-\"] *,[class*=\" imghvr-\"]:after,[class*=\" imghvr-\"] :after,[class*=\" imghvr-\"]:before,[class*=\" imghvr-\"] :before,[class^=imghvr-],[class^=imghvr-] *,[class^=imghvr-]:after,[class^=imghvr-] :after,[class^=imghvr-]:before,[class^=imghvr-] :before{box-sizing:border-box;transition:all 0.35s ease\n}\n[class*=\" imghvr-fade\"]:hover>img,[class*=\" imghvr-fade\"] figcaption,[class^=imghvr-fade]:hover>img,[class^=imghvr-fade] figcaption{opacity:0\n}\n[class*=\" imghvr-fade\"]:hover figcaption,[class^=imghvr-fade]:hover figcaption{opacity:1\n}\n[class*=\" imghvr-fade\"]:hover>img,[class*=\" imghvr-fade\"]:hover figcaption,[class^=imghvr-fade]:hover>img,[class^=imghvr-fade]:hover figcaption{-webkit-transform:translate(0);transform:translate(0)\n}\n.imghvr-fade-in-up figcaption{-webkit-transform:translateY(15%);transform:translateY(15%)\n}\n.imghvr-fade-in-down figcaption{-webkit-transform:translateY(-15%);transform:translateY(-15%)\n}\n.imghvr-fade-in-left figcaption{-webkit-transform:translate(-15%);transform:translate(-15%)\n}\n.imghvr-fade-in-right figcaption{-webkit-transform:translate(15%);transform:translate(15%)\n}\n[class*=\" imghvr-push-\"]:hover figcaption,[class^=imghvr-push-]:hover figcaption{-webkit-transform:translate(0);transform:translate(0)\n}\n.imghvr-push-up figcaption{-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.imghvr-push-down figcaption,.imghvr-push-up:hover>img{-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n.imghvr-push-down:hover>img{-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.imghvr-push-left figcaption{-webkit-transform:translateX(100%);transform:translateX(100%)\n}\n.imghvr-push-left:hover>img,.imghvr-push-right figcaption{-webkit-transform:translateX(-100%);transform:translateX(-100%)\n}\n.imghvr-push-right:hover>img{-webkit-transform:translateX(100%);transform:translateX(100%)\n}\n[class*=\" imghvr-slide-\"]:hover figcaption,[class^=imghvr-slide-]:hover figcaption{-webkit-transform:translate(0);transform:translate(0)\n}\n.imghvr-slide-up figcaption{-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.imghvr-slide-down figcaption{-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n.imghvr-slide-left figcaption{-webkit-transform:translateX(100%);transform:translateX(100%)\n}\n.imghvr-slide-right figcaption{-webkit-transform:translateX(-100%);transform:translateX(-100%)\n}\n.imghvr-slide-top-left figcaption{-webkit-transform:translate(-100%,-100%);transform:translate(-100%,-100%)\n}\n.imghvr-slide-top-right figcaption{-webkit-transform:translate(100%,-100%);transform:translate(100%,-100%)\n}\n.imghvr-slide-bottom-left figcaption{-webkit-transform:translate(-100%,100%);transform:translate(-100%,100%)\n}\n.imghvr-slide-bottom-right figcaption{-webkit-transform:translate(100%,100%);transform:translate(100%,100%)\n}\n[class*=\" imghvr-reveal-\"]:before,[class^=imghvr-reveal-]:before{position:absolute;top:0;bottom:0;left:0;right:0;content:\"\";background-color:#135796\n}\n[class*=\" imghvr-reveal-\"] figcaption,[class^=imghvr-reveal-] figcaption{opacity:0\n}\n[class*=\" imghvr-reveal-\"]:hover:before,[class^=imghvr-reveal-]:hover:before{-webkit-transform:translate(0);transform:translate(0)\n}\n[class*=\" imghvr-reveal-\"]:hover figcaption,[class^=imghvr-reveal-]:hover figcaption{opacity:1;transition-delay:0.21s\n}\n.imghvr-reveal-up:before{-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.imghvr-reveal-down:before{-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n.imghvr-reveal-left:before{-webkit-transform:translateX(100%);transform:translateX(100%)\n}\n.imghvr-reveal-right:before{-webkit-transform:translateX(-100%);transform:translateX(-100%)\n}\n.imghvr-reveal-top-left:before{-webkit-transform:translate(-100%,-100%);transform:translate(-100%,-100%)\n}\n.imghvr-reveal-top-right:before{-webkit-transform:translate(100%,-100%);transform:translate(100%,-100%)\n}\n.imghvr-reveal-bottom-left:before{-webkit-transform:translate(-100%,100%);transform:translate(-100%,100%)\n}\n.imghvr-reveal-bottom-right:before{-webkit-transform:translate(100%,100%);transform:translate(100%,100%)\n}\n[class*=\" imghvr-hinge-\"],[class^=imghvr-hinge-]{-webkit-perspective:50em;perspective:50em\n}\n[class*=\" imghvr-hinge-\"] figcaption,[class^=imghvr-hinge-] figcaption{opacity:0;z-index:1\n}\n[class*=\" imghvr-hinge-\"]:hover img,[class^=imghvr-hinge-]:hover img{opacity:0\n}\n[class*=\" imghvr-hinge-\"]:hover figcaption,[class^=imghvr-hinge-]:hover figcaption{opacity:1;transition-delay:0.21s\n}\n.imghvr-hinge-up img{-webkit-transform-origin:50% 0%;transform-origin:50% 0%\n}\n.imghvr-hinge-up figcaption{-webkit-transform:rotateX(90deg);transform:rotateX(90deg);-webkit-transform-origin:50% 100%;transform-origin:50% 100%\n}\n.imghvr-hinge-up:hover>img{-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg)\n}\n.imghvr-hinge-up:hover figcaption{-webkit-transform:rotateX(0);transform:rotateX(0)\n}\n.imghvr-hinge-down img{-webkit-transform-origin:50% 100%;transform-origin:50% 100%\n}\n.imghvr-hinge-down figcaption{-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg);-webkit-transform-origin:50% -50%;transform-origin:50% -50%\n}\n.imghvr-hinge-down:hover>img{-webkit-transform:rotateX(90deg);transform:rotateX(90deg);opacity:0\n}\n.imghvr-hinge-down:hover figcaption{-webkit-transform:rotateX(0);transform:rotateX(0)\n}\n.imghvr-hinge-left img{-webkit-transform-origin:0% 50%;transform-origin:0% 50%\n}\n.imghvr-hinge-left figcaption{-webkit-transform:rotateY(-90deg);transform:rotateY(-90deg);-webkit-transform-origin:100% 50%;transform-origin:100% 50%\n}\n.imghvr-hinge-left:hover>img{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)\n}\n.imghvr-hinge-left:hover figcaption{-webkit-transform:rotateY(0);transform:rotateY(0)\n}\n.imghvr-hinge-right img{-webkit-transform-origin:100% 50%;transform-origin:100% 50%\n}\n.imghvr-hinge-right figcaption{-webkit-transform:rotateY(90deg);transform:rotateY(90deg);-webkit-transform-origin:0 50%;transform-origin:0 50%\n}\n.imghvr-hinge-right:hover>img{-webkit-transform:rotateY(-90deg);transform:rotateY(-90deg)\n}\n.imghvr-hinge-right:hover figcaption{-webkit-transform:rotateY(0);transform:rotateY(0)\n}\n[class*=\" imghvr-flip-\"],[class^=imghvr-flip-]{-webkit-perspective:50em;perspective:50em\n}\n[class*=\" imghvr-flip-\"] img,[class^=imghvr-flip-] img{-webkit-backface-visibility:hidden;backface-visibility:hidden\n}\n[class*=\" imghvr-flip-\"]:hover>img,[class*=\" imghvr-flip-\"] figcaption,[class^=imghvr-flip-]:hover>img,[class^=imghvr-flip-] figcaption{opacity:0\n}\n[class*=\" imghvr-flip-\"]:hover figcaption,[class^=imghvr-flip-]:hover figcaption{opacity:1;transition-delay:0.14s\n}\n.imghvr-flip-horiz figcaption{-webkit-transform:rotateX(90deg);transform:rotateX(90deg);-webkit-transform-origin:0% 50%;transform-origin:0% 50%\n}\n.imghvr-flip-horiz:hover img{-webkit-transform:rotateX(-180deg);transform:rotateX(-180deg)\n}\n.imghvr-flip-horiz:hover figcaption{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)\n}\n.imghvr-flip-vert figcaption{-webkit-transform:rotateY(90deg);transform:rotateY(90deg);-webkit-transform-origin:50% 0%;transform-origin:50% 0%\n}\n.imghvr-flip-vert:hover>img{-webkit-transform:rotateY(-180deg);transform:rotateY(-180deg)\n}\n.imghvr-flip-vert:hover figcaption{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)\n}\n.imghvr-flip-diag-1 figcaption{-webkit-transform:rotate3d(1,-1,0,100deg);transform:rotate3d(1,-1,0,100deg)\n}\n.imghvr-flip-diag-1:hover>img{-webkit-transform:rotate3d(-1,1,0,100deg);transform:rotate3d(-1,1,0,100deg)\n}\n.imghvr-flip-diag-1:hover figcaption{-webkit-transform:rotate3d(0,0,0,0deg);transform:rotate3d(0,0,0,0deg)\n}\n.imghvr-flip-diag-2 figcaption{-webkit-transform:rotate3d(1,1,0,100deg);transform:rotate3d(1,1,0,100deg)\n}\n.imghvr-flip-diag-2:hover>img{-webkit-transform:rotate3d(-1,-1,0,100deg);transform:rotate3d(-1,-1,0,100deg)\n}\n.imghvr-flip-diag-2:hover figcaption{-webkit-transform:rotate3d(0,0,0,0deg);transform:rotate3d(0,0,0,0deg)\n}\n[class*=\" imghvr-shutter-out-\"]:before,[class^=imghvr-shutter-out-]:before{background:#135796;position:absolute;content:\"\";transition-delay:0.105s\n}\n[class*=\" imghvr-shutter-out-\"] figcaption,[class^=imghvr-shutter-out-] figcaption{opacity:0;transition-delay:0s\n}\n[class*=\" imghvr-shutter-out-\"]:hover:before,[class^=imghvr-shutter-out-]:hover:before{transition-delay:0s\n}\n[class*=\" imghvr-shutter-out-\"]:hover figcaption,[class^=imghvr-shutter-out-]:hover figcaption{opacity:1;transition-delay:0.105s\n}\n.imghvr-shutter-out-horiz:before{left:50%;right:50%;top:0;bottom:0\n}\n.imghvr-shutter-out-horiz:hover:before{left:0;right:0\n}\n.imghvr-shutter-out-vert:before{top:50%;bottom:50%;left:0;right:0\n}\n.imghvr-shutter-out-vert:hover:before{top:0;bottom:0\n}\n.imghvr-shutter-out-diag-1:before{top:50%;bottom:50%;left:-35%;right:-35%;-webkit-transform:rotate(45deg);transform:rotate(45deg)\n}\n.imghvr-shutter-out-diag-1:hover:before{top:-35%;bottom:-35%\n}\n.imghvr-shutter-out-diag-2:before{top:50%;bottom:50%;left:-35%;right:-35%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)\n}\n.imghvr-shutter-out-diag-2:hover:before{top:-35%;bottom:-35%\n}\n[class*=\" imghvr-shutter-in-\"]:after,[class*=\" imghvr-shutter-in-\"]:before,[class^=imghvr-shutter-in-]:after,[class^=imghvr-shutter-in-]:before{background:#135796;position:absolute;content:\"\"\n}\n[class*=\" imghvr-shutter-in-\"]:after,[class^=imghvr-shutter-in-]:after{top:0;left:0\n}\n[class*=\" imghvr-shutter-in-\"]:before,[class^=imghvr-shutter-in-]:before{right:0;bottom:0\n}\n[class*=\" imghvr-shutter-in-\"] figcaption,[class^=imghvr-shutter-in-] figcaption{opacity:0;z-index:1\n}\n[class*=\" imghvr-shutter-in-\"]:hover figcaption,[class^=imghvr-shutter-in-]:hover figcaption{opacity:1;transition-delay:0.21s\n}\n.imghvr-shutter-in-horiz:after,.imghvr-shutter-in-horiz:before{width:0;height:100%\n}\n.imghvr-shutter-in-horiz:hover:after,.imghvr-shutter-in-horiz:hover:before{width:50%\n}\n.imghvr-shutter-in-vert:after,.imghvr-shutter-in-vert:before{height:0;width:100%\n}\n.imghvr-shutter-in-vert:hover:after,.imghvr-shutter-in-vert:hover:before{height:50%\n}\n.imghvr-shutter-in-out-horiz:after,.imghvr-shutter-in-out-horiz:before{width:0;height:100%;opacity:0.75\n}\n.imghvr-shutter-in-out-horiz:hover:after,.imghvr-shutter-in-out-horiz:hover:before{width:100%\n}\n.imghvr-shutter-in-out-vert:after,.imghvr-shutter-in-out-vert:before{height:0;width:100%;opacity:0.75\n}\n.imghvr-shutter-in-out-vert:hover:after,.imghvr-shutter-in-out-vert:hover:before{height:100%\n}\n.imghvr-shutter-in-out-diag-1:after,.imghvr-shutter-in-out-diag-1:before{width:200%;height:200%;transition:all 0.6s ease;opacity:0.75\n}\n.imghvr-shutter-in-out-diag-1:after{-webkit-transform:skew(-45deg) translateX(-150%);transform:skew(-45deg) translateX(-150%)\n}\n.imghvr-shutter-in-out-diag-1:before{-webkit-transform:skew(-45deg) translateX(150%);transform:skew(-45deg) translateX(150%)\n}\n.imghvr-shutter-in-out-diag-1:hover:after{-webkit-transform:skew(-45deg) translateX(-50%);transform:skew(-45deg) translateX(-50%)\n}\n.imghvr-shutter-in-out-diag-1:hover:before{-webkit-transform:skew(-45deg) translateX(50%);transform:skew(-45deg) translateX(50%)\n}\n.imghvr-shutter-in-out-diag-2:after,.imghvr-shutter-in-out-diag-2:before{width:200%;height:200%;transition:all 0.6s ease;opacity:0.75\n}\n.imghvr-shutter-in-out-diag-2:after{-webkit-transform:skew(45deg) translateX(-100%);transform:skew(45deg) translateX(-100%)\n}\n.imghvr-shutter-in-out-diag-2:before{-webkit-transform:skew(45deg) translateX(100%);transform:skew(45deg) translateX(100%)\n}\n.imghvr-shutter-in-out-diag-2:hover:after,.imghvr-shutter-in-out-diag-2:hover:before{-webkit-transform:skew(45deg) translateX(0%);transform:skew(45deg) translateX(0%)\n}\n[class*=\" imghvr-fold\"],[class^=imghvr-fold]{-webkit-perspective:50em;perspective:50em\n}\n[class*=\" imghvr-fold\"] img,[class^=imghvr-fold] img{-webkit-transform-origin:50% 0%;transform-origin:50% 0%\n}\n[class*=\" imghvr-fold\"] figcaption,[class^=imghvr-fold] figcaption{z-index:1;opacity:0\n}\n[class*=\" imghvr-fold\"]:hover>img,[class^=imghvr-fold]:hover>img{opacity:0;transition-delay:0\n}\n[class*=\" imghvr-fold\"]:hover figcaption,[class^=imghvr-fold]:hover figcaption{-webkit-transform:rotateX(0) translateZ(0) scale(1);transform:rotateX(0) translateZ(0) scale(1);opacity:1;transition-delay:0.21s\n}\n.imghvr-fold-up>img{-webkit-transform-origin:50% 0%;transform-origin:50% 0%\n}\n.imghvr-fold-up figcaption{-webkit-transform:rotateX(-90deg) translate3d(0%,-50%,0) scale(0.6);transform:rotateX(-90deg) translate3d(0%,-50%,0) scale(0.6);-webkit-transform-origin:50% 100%;transform-origin:50% 100%\n}\n.imghvr-fold-up:hover>img{-webkit-transform:rotateX(90deg) scale(0.6) translateY(50%);transform:rotateX(90deg) scale(0.6) translateY(50%)\n}\n.imghvr-fold-down>img{-webkit-transform-origin:50% 100%;transform-origin:50% 100%\n}\n.imghvr-fold-down figcaption{-webkit-transform:rotateX(90deg) translate3d(0%,50%,0) scale(0.6);transform:rotateX(90deg) translate3d(0%,50%,0) scale(0.6);-webkit-transform-origin:50% 0%;transform-origin:50% 0%\n}\n.imghvr-fold-down:hover>img{-webkit-transform:rotateX(-90deg) scale(0.6) translateY(-50%);transform:rotateX(-90deg) scale(0.6) translateY(-50%)\n}\n.imghvr-fold-left>img{-webkit-transform-origin:0% 50%;transform-origin:0% 50%\n}\n.imghvr-fold-left figcaption{-webkit-transform:rotateY(90deg) translate3d(-50%,0%,0) scale(0.6);transform:rotateY(90deg) translate3d(-50%,0%,0) scale(0.6);-webkit-transform-origin:100% 50%;transform-origin:100% 50%\n}\n.imghvr-fold-left:hover>img{-webkit-transform:rotateY(-90deg) scale(0.6) translateX(50%);transform:rotateY(-90deg) scale(0.6) translateX(50%)\n}\n.imghvr-fold-right>img{-webkit-transform-origin:100% 50%;transform-origin:100% 50%\n}\n.imghvr-fold-right figcaption{-webkit-transform:rotateY(-90deg) translate3d(50%,0%,0) scale(0.6);transform:rotateY(-90deg) translate3d(50%,0%,0) scale(0.6);-webkit-transform-origin:0 50%;transform-origin:0 50%\n}\n.imghvr-fold-right:hover>img{-webkit-transform:rotateY(90deg) scale(0.6) translateX(-50%);transform:rotateY(90deg) scale(0.6) translateX(-50%)\n}\n.imghvr-zoom-in figcaption{opacity:0;-webkit-transform:scale(0.5);transform:scale(0.5)\n}\n.imghvr-zoom-in:hover figcaption{-webkit-transform:scale(1);transform:scale(1);opacity:1\n}\n[class*=\" imghvr-zoom-out\"] figcaption,[class^=imghvr-zoom-out] figcaption{-webkit-transform:scale(0.5);transform:scale(0.5);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;opacity:0\n}\n[class*=\" imghvr-zoom-out\"].hover figcaption,[class*=\" imghvr-zoom-out\"]:hover figcaption,[class^=imghvr-zoom-out].hover figcaption,[class^=imghvr-zoom-out]:hover figcaption{-webkit-transform:scale(1);transform:scale(1);opacity:1;transition-delay:0.35s\n}\n.imghvr-zoom-out:hover>img{-webkit-transform:scale(0.5);transform:scale(0.5);opacity:0\n}\n.imghvr-zoom-out-up.hover>img,.imghvr-zoom-out-up:hover>img{-webkit-animation:imghvr-zoom-out-up 0.4025s linear;animation:imghvr-zoom-out-up 0.4025s linear;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards\n}\n@-webkit-keyframes imghvr-zoom-out-up{\n50%{-webkit-transform:scale(0.8) translateY(0%);transform:scale(0.8) translateY(0%);opacity:0.5\n}\nto{-webkit-transform:scale(0.8) translateY(-150%);transform:scale(0.8) translateY(-150%);opacity:0.5\n}\n}\n@keyframes imghvr-zoom-out-up{\n50%{-webkit-transform:scale(0.8) translateY(0%);transform:scale(0.8) translateY(0%);opacity:0.5\n}\nto{-webkit-transform:scale(0.8) translateY(-150%);transform:scale(0.8) translateY(-150%);opacity:0.5\n}\n}\n.imghvr-zoom-out-down.hover>img,.imghvr-zoom-out-down:hover>img{-webkit-animation:imghvr-zoom-out-down 0.4025s linear;animation:imghvr-zoom-out-down 0.4025s linear;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards\n}\n@-webkit-keyframes imghvr-zoom-out-down{\n50%{-webkit-transform:scale(0.8) translateY(0%);transform:scale(0.8) translateY(0%);opacity:0.5\n}\nto{-webkit-transform:scale(0.8) translateY(150%);transform:scale(0.8) translateY(150%);opacity:0.5\n}\n}\n@keyframes imghvr-zoom-out-down{\n50%{-webkit-transform:scale(0.8) translateY(0%);transform:scale(0.8) translateY(0%);opacity:0.5\n}\nto{-webkit-transform:scale(0.8) translateY(150%);transform:scale(0.8) translateY(150%);opacity:0.5\n}\n}\n.imghvr-zoom-out-left.hover>img,.imghvr-zoom-out-left:hover>img{-webkit-animation:imghvr-zoom-out-left 0.4025s linear;animation:imghvr-zoom-out-left 0.4025s linear;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards\n}\n@-webkit-keyframes imghvr-zoom-out-left{\n50%{-webkit-transform:scale(0.8) translateX(0%);transform:scale(0.8) translateX(0%);opacity:0.5\n}\nto{-webkit-transform:scale(0.8) translateX(-150%);transform:scale(0.8) translateX(-150%);opacity:0.5\n}\n}\n@keyframes imghvr-zoom-out-left{\n50%{-webkit-transform:scale(0.8) translateX(0%);transform:scale(0.8) translateX(0%);opacity:0.5\n}\nto{-webkit-transform:scale(0.8) translateX(-150%);transform:scale(0.8) translateX(-150%);opacity:0.5\n}\n}\n.imghvr-zoom-out-right.hover>img,.imghvr-zoom-out-right:hover>img{-webkit-animation:imghvr-zoom-out-right 0.4025s linear;animation:imghvr-zoom-out-right 0.4025s linear;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards\n}\n@-webkit-keyframes imghvr-zoom-out-right{\n50%{-webkit-transform:scale(0.8) translateX(0%);transform:scale(0.8) translateX(0%);opacity:0.5\n}\nto{-webkit-transform:scale(0.8) translateX(150%);transform:scale(0.8) translateX(150%);opacity:0.5\n}\n}\n@keyframes imghvr-zoom-out-right{\n50%{-webkit-transform:scale(0.8) translateX(0%);transform:scale(0.8) translateX(0%);opacity:0.5\n}\nto{-webkit-transform:scale(0.8) translateX(150%);transform:scale(0.8) translateX(150%);opacity:0.5\n}\n}\n.imghvr-zoom-out-flip-horiz{-webkit-perspective:50em;perspective:50em\n}\n.imghvr-zoom-out-flip-horiz figcaption{opacity:0;-webkit-transform:rotateX(90deg) translateY(-100%) scale(0.5);transform:rotateX(90deg) translateY(-100%) scale(0.5)\n}\n.imghvr-zoom-out-flip-horiz.hover>img,.imghvr-zoom-out-flip-horiz:hover>img{-webkit-transform:rotateX(-100deg) translateY(50%) scale(0.5);transform:rotateX(-100deg) translateY(50%) scale(0.5);opacity:0;transition-delay:0\n}\n.imghvr-zoom-out-flip-horiz.hover figcaption,.imghvr-zoom-out-flip-horiz:hover figcaption{-webkit-transform:rotateX(0) translateY(0%) scale(1);transform:rotateX(0) translateY(0%) scale(1);opacity:1;transition-delay:0.35s\n}\n.imghvr-zoom-out-flip-vert{-webkit-perspective:50em;perspective:50em\n}\n.imghvr-zoom-out-flip-vert figcaption{opacity:0;-webkit-transform:rotateY(90deg) translate(50%) scale(0.5);transform:rotateY(90deg) translate(50%) scale(0.5)\n}\n.imghvr-zoom-out-flip-vert.hover>img,.imghvr-zoom-out-flip-vert:hover>img{-webkit-transform:rotateY(-100deg) translateX(50%) scale(0.5);transform:rotateY(-100deg) translateX(50%) scale(0.5);opacity:0;transition-delay:0\n}\n.imghvr-zoom-out-flip-vert.hover figcaption,.imghvr-zoom-out-flip-vert:hover figcaption{-webkit-transform:rotateY(0) translate(0) scale(1);transform:rotateY(0) translate(0) scale(1);opacity:1;transition-delay:0.35s\n}\n.imghvr-blur figcaption{opacity:0\n}\n.imghvr-blur:hover>img{-webkit-filter:blur(30px);filter:blur(30px);-webkit-transform:scale(1.2);transform:scale(1.2);opacity:0\n}\n.imghvr-blur:hover figcaption{opacity:1;transition-delay:0.21s\n}\n", ""]);

/***/ }),

/***/ 878:
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
  }), _vm._v(" Image Hover\n                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "col-md-3 col-sm-6 col-xs-12 text-center"
  }, [_c('figure', {
    staticClass: "imghvr-fade"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/static/img/gallery/full/7.jpg",
      "width": "295",
      "height": "185"
    }
  }), _vm._v(" "), _c('figcaption', [_vm._v("\n                                        Fade\n                                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-6 col-xs-12 text-center"
  }, [_c('figure', {
    staticClass: "imghvr-push-up"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/static/img/gallery/full/8.jpg",
      "width": "295",
      "height": "185"
    }
  }), _vm._v(" "), _c('figcaption', [_vm._v("\n                                        Push-up\n                                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-6 col-xs-12 text-center"
  }, [_c('figure', {
    staticClass: "imghvr-push-down"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/static/img/gallery/full/11.jpg",
      "width": "295",
      "height": "185"
    }
  }), _vm._v(" "), _c('figcaption', [_vm._v("\n                                        Push-down\n                                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-6 col-xs-12 text-center"
  }, [_c('figure', {
    staticClass: "imghvr-slide-right"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/static/img/gallery/full/14.jpg",
      "width": "295",
      "height": "185"
    }
  }), _vm._v(" "), _c('figcaption', [_vm._v("\n                                        Slide-right\n                                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-6 col-xs-12 text-center"
  }, [_c('figure', {
    staticClass: "imghvr-slide-left"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/static/img/gallery/full/17.jpg",
      "width": "295",
      "height": "185"
    }
  }), _vm._v(" "), _c('figcaption', [_vm._v("\n                                        Slide-left\n                                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-6 col-xs-12 text-center"
  }, [_c('figure', {
    staticClass: "imghvr-reveal-up"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/static/img/gallery/full/19.jpg",
      "width": "295",
      "height": "185"
    }
  }), _vm._v(" "), _c('figcaption', [_vm._v("\n                                        Reveal-up\n                                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-6 col-xs-12 text-center"
  }, [_c('figure', {
    staticClass: "imghvr-reveal-left"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/static/img/gallery/full/20.jpg",
      "width": "295",
      "height": "185"
    }
  }), _vm._v(" "), _c('figcaption', [_vm._v("\n                                        Reveal-left\n                                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-6 col-xs-12 text-center"
  }, [_c('figure', {
    staticClass: "imghvr-reveal-down"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/static/img/gallery/full/24.jpg",
      "width": "295",
      "height": "185"
    }
  }), _vm._v(" "), _c('figcaption', [_vm._v("\n                                        Reaveal-down\n                                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-6 col-xs-12 text-center"
  }, [_c('figure', {
    staticClass: "imghvr-hinge-up"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/static/img/gallery/full/28.jpg",
      "width": "295",
      "height": "185"
    }
  }), _vm._v(" "), _c('figcaption', [_vm._v("\n                                        Hinge-up\n                                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-6 col-xs-12 text-center"
  }, [_c('figure', {
    staticClass: "imghvr-hinge-right"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/static/img/gallery/full/29.jpg",
      "width": "295",
      "height": "185"
    }
  }), _vm._v(" "), _c('figcaption', [_vm._v("\n                                        Hinge-right\n                                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-6 col-xs-12 text-center"
  }, [_c('figure', {
    staticClass: "imghvr-flip-horiz"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/static/img/gallery/full/32.jpg",
      "width": "295",
      "height": "185"
    }
  }), _vm._v(" "), _c('figcaption', [_vm._v("\n                                        Flip-horizontal\n                                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-6 col-xs-12 text-center"
  }, [_c('figure', {
    staticClass: "imghvr-flip-vert"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/static/img/gallery/full/33.jpg",
      "width": "295",
      "height": "185"
    }
  }), _vm._v(" "), _c('figcaption', [_vm._v("\n                                        Flip-vertical\n                                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-6 col-xs-12 text-center"
  }, [_c('figure', {
    staticClass: "imghvr-flip-diag-1"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/static/img/gallery/full/30.jpg",
      "width": "295",
      "height": "185"
    }
  }), _vm._v(" "), _c('figcaption', [_vm._v("\n                                        Flip-diagonal\n                                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-6 col-xs-12 text-center"
  }, [_c('figure', {
    staticClass: "imghvr-shutter-out-vert"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/static/img/gallery/full/14.jpg",
      "width": "295",
      "height": "185"
    }
  }), _vm._v(" "), _c('figcaption', [_vm._v("\n                                        Shutter-out-vertical\n                                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-6 col-xs-12 text-center"
  }, [_c('figure', {
    staticClass: "imghvr-fold-right"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/static/img/gallery/full/19.jpg",
      "width": "295",
      "height": "185"
    }
  }), _vm._v(" "), _c('figcaption', [_vm._v("\n                                        Fold-right\n                                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-6 col-xs-12 text-center"
  }, [_c('figure', {
    staticClass: "imghvr-zoom-out-down"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/static/img/gallery/full/17.jpg",
      "width": "295",
      "height": "185"
    }
  }), _vm._v(" "), _c('figcaption', [_vm._v("\n                                        Zoom out down\n                                    ")])])])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f15fc540", module.exports)
  }
}

/***/ })

});