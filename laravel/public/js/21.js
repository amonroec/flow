webpackJsonp([21],{

/***/ 1050:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(647);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("167a3f77", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6090b309\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./buttons.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6090b309\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./buttons.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendors_Buttons_js_buttons_js__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendors_Buttons_js_buttons_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendors_Buttons_js_buttons_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var Ladda = __webpack_require__(786);
/* harmony default export */ __webpack_exports__["default"] = ({
    name: "buttons",
    mounted: function mounted() {
        "use strict";

        $(document).ready(function () {
            //INITIALIZE PAGE
            // Bind normal buttons
            Ladda.bind('.button_normal', {
                timeout: 3000
            });

            // Bind progress buttons and simulate loading progress
            Ladda.bind('.button_progress', {
                callback: function callback(instance) {
                    var progress = 0;
                    var interval = setInterval(function () {
                        progress = Math.min(progress + Math.random() * 0.1, 1);
                        instance.setProgress(progress);

                        if (progress === 1) {
                            instance.stop();
                            clearInterval(interval);
                        }
                    }, 200);
                }
            });
        });
    },
    destroyed: function destroyed() {}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*! @license
*  Project: Buttons
*  Description: A highly customizable CSS button library built with Sass and Compass
*  Author: Alex Wolfe and Rob Levin
*  License: Apache License v2.0
*/

// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ($, window, document, undefined) {
  'use strict';

  // undefined is used here as the undefined global variable in ECMAScript 3 is
  // mutable (ie. it can be changed by someone else). undefined isn't really being
  // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
  // can no longer be modified.

  // window and document are passed through as local variable rather than global
  // as this (slightly) quickens the resolution process and can be more efficiently
  // minified (especially when both are regularly referenced in your plugin).

  // Create the defaults once

  var pluginName = "menuButton";
  var menuClass = ".button-dropdown";
  var defaults = {
    propertyName: "value"
  };

  // The actual plugin constructor
  function Plugin(element, options) {

    //SET OPTIONS
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;

    //REGISTER ELEMENT
    this.$element = $(element);

    //INITIALIZE
    this.init();
  }

  Plugin.prototype = {
    constructor: Plugin,

    init: function init() {
      // WE DON'T STOP PROPGATION SO CLICKS WILL AUTOMATICALLY
      // TOGGLE AND REMOVE THE DROPDOWN
      this.toggle();
    },

    toggle: function toggle(el, options) {
      if (this.$element.data('dropdown') === 'show') {
        this.hideMenu();
      } else {
        this.showMenu();
      }
    },

    showMenu: function showMenu() {
      this.$element.data('dropdown', 'show');
      this.$element.find('ul').show();
      this.$element.find('.button:first').addClass('is-active');
    },

    hideMenu: function hideMenu() {
      this.$element.data('dropdown', 'hide');
      this.$element.find('ul').hide();
      this.$element.find('.button:first').removeClass('is-active');
    }
  };

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function (options) {
    return this.each(function () {

      // TOGGLE BUTTON IF IT EXISTS
      if ($.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName).toggle();
      }
      // OTHERWISE CREATE A NEW INSTANCE
      else {
          $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
    });
  };

  //CLOSE OPEN DROPDOWN MENUS IF CLICKED SOMEWHERE ELSE
  $(document).on('click', function (e) {
    $.each($('[data-buttons=dropdown]'), function (i, value) {
      if ($(e.target.offsetParent)[0] != $(this)[0]) {
        if ($.data(this, "plugin_" + pluginName)) {
          $.data(this, "plugin_" + pluginName).hideMenu();
          $(this).find('ul').hide();
        }
      }
    });
  });

  //DELEGATE CLICK EVENT FOR DROPDOWN MENUS
  $(document).on('click', '[data-buttons=dropdown]', function (e) {
    var $dropdown = $(e.currentTarget);
    $dropdown.menuButton();
  });

  //IGNORE CLICK EVENTS FROM DISPLAY BUTTON IN DROPDOWN
  $(document).on('click', '[data-buttons=dropdown] > a', function (e) {
    e.preventDefault();
  });
})(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "/*$icon-font-path: if($bootstrap-sass-asset-helper, \"bootstrap/\", \"../../../vendors/bootstrap/dist/fonts\") !default;*/\n/*\r\n* $ubtn prefix (reserved)\r\n*\r\n* This prefix stands for Unicorn Button - ubtn\r\n* We provide a prefix to the Sass Variables to\r\n* prevent namespace collisions that could occur if\r\n* you import buttons as part of your Sass build process.\r\n* We kindly ask you not to use the prefix $ubtn in your project\r\n* in order to avoid possilbe name conflicts. Thanks!\r\n*/\n/*\r\n* Button Namespace (ex .button or .btn)\r\n*\r\n*/\n/*\r\n* Button Defaults\r\n*\r\n* Some default settings that are used throughout the button library.\r\n* Changes to these settings will be picked up by all of the other modules.\r\n* The colors used here are the default colors for the base button (gray).\r\n* The font size and height are used to set the base size for the buttons.\r\n* The size values will be used to calculate the larger and smaller button sizes.\r\n*/\n/*\r\n* Button Colors\r\n*\r\n* $ubtn-colors is used to generate the different button colors.\r\n* Edit or add colors to the list below and recompile.\r\n* Each block contains the (name, background, color)\r\n* The class is generated using the name: (ex .button-primary)\r\n*/\n/*\r\n* Button Shapes\r\n*\r\n* $ubtn-shapes is used to generate the different button shapes.\r\n* Edit or add shapes to the list below and recompile.\r\n* Each block contains the (name, border-radius).\r\n* The class is generated using the name: (ex .button-square).\r\n*/\n/*\r\n* Button Sizes\r\n*\r\n* $ubtn-sizes is used to generate the different button sizes.\r\n* Edit or add colors to the list below and recompile.\r\n* Each block contains the (name, size multiplier).\r\n* The class is generated using the name: (ex .button-giant).\r\n*/\n/*! @license\n*\n* Buttons\n* Copyright 2012-2014 Alex Wolfe and Rob Levin\n*\n* Licensed under the Apache License, Version 2.0 (the \"License\");\n* you may not use this file except in compliance with the License.\n* You may obtain a copy of the License at\n*\n*        http://www.apache.org/licenses/LICENSE-2.0\n*\n* Unless required by applicable law or agreed to in writing, software\n* distributed under the License is distributed on an \"AS IS\" BASIS,\n* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n* See the License for the specific language governing permissions and\n* limitations under the License.\n*/\n/*\n* Compass (optional)\n*\n* We recommend the use of autoprefixer instead of Compass\n* when using buttons. However, buttons does support Compass.\n* simply change $ubtn-use-compass to true and uncomment the\n* @import 'compass' code below to use Compass.\n*/\n/*\n* Required Files\n*\n* These files include the variables and options\n* and base css styles that are required to generate buttons.\n*/\n/*\n* $ubtn prefix (reserved)\n*\n* This prefix stands for Unicorn Button - ubtn\n* We provide a prefix to the Sass Variables to\n* prevent namespace collisions that could occur if\n* you import buttons as part of your Sass build process.\n* We kindly ask you not to use the prefix $ubtn in your project\n* in order to avoid possilbe name conflicts. Thanks!\n*/\n/*\n* Button Namespace (ex .button or .btn)\n*\n*/\n/*\n* Button Defaults\n*\n* Some default settings that are used throughout the button library.\n* Changes to these settings will be picked up by all of the other modules.\n* The colors used here are the default colors for the base button (gray).\n* The font size and height are used to set the base size for the buttons.\n* The size values will be used to calculate the larger and smaller button sizes.\n*/\n/*\n* Button Colors\n*\n* $ubtn-colors is used to generate the different button colors.\n* Edit or add colors to the list below and recompile.\n* Each block contains the (name, background, color)\n* The class is generated using the name: (ex .button-primary)\n*/\n/*\n* Button Shapes\n*\n* $ubtn-shapes is used to generate the different button shapes.\n* Edit or add shapes to the list below and recompile.\n* Each block contains the (name, border-radius).\n* The class is generated using the name: (ex .button-square).\n*/\n/*\n* Button Sizes\n*\n* $ubtn-sizes is used to generate the different button sizes.\n* Edit or add colors to the list below and recompile.\n* Each block contains the (name, size multiplier).\n* The class is generated using the name: (ex .button-giant).\n*/\n/*\n* Color Mixin\n*\n* Iterates through the list of colors and creates\n*\n*/\n/*\n* No Animation\n*\n* Sets animation property to none\n*/\n/*\n* Clearfix\n*\n* Clears floats inside the container\n*/\n/*\n* Base Button Style\n*\n* The default values for the .button class\n*/\n.button {\n  color: #666;\n  background-color: #DCDCDC;\n  border-color: #DCDCDC;\n  font-weight: regular;\n  font-size: 16px;\n  font-family: \"Open Sans\", sans-serif, verdana;\n  text-decoration: none;\n  text-align: center;\n  line-height: 40px;\n  height: 40px;\n  padding: 0 40px;\n  margin: 0;\n  display: inline-block;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  cursor: pointer;\n  border: none;\n  box-sizing: border-box;\n  transition-property: all;\n  transition-duration: .3s;\n  /*\n  * Disabled State\n  *\n  * The disabled state uses the class .disabled, is-disabled,\n  * and the form attribute disabled=\"disabled\".\n  * The use of !important is only added because this is a state\n  * that must be applied to all buttons when in a disabled state.\n  */\n}\n.button:visited {\n    color: #666;\n}\n.button:hover, .button:focus {\n    background-color: #e4e4e4;\n    text-decoration: none;\n    outline: none;\n}\n.button:active, .button.active, .button.is-active {\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);\n    text-decoration: none;\n    background-color: gainsboro;\n    border-color: #bdbdbd;\n    color: #c3c3c3;\n    transition-duration: 0s;\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n.button.disabled, .button.is-disabled, .button:disabled {\n    top: 0 !important;\n    background: #EEE !important;\n    border: 1px solid #DDD !important;\n    text-shadow: 0 1px 1px white !important;\n    color: #CCC !important;\n    cursor: default !important;\n    -webkit-appearance: none !important;\n       -moz-appearance: none !important;\n            appearance: none !important;\n}\n.button.disabled else, .button.is-disabled else, .button:disabled else {\n      box-shadow: none !important;\n      opacity: .8 !important;\n}\n\n/*\n* Base Button Tyography\n*\n*/\n.button-uppercase {\n  text-transform: uppercase;\n}\n.button-lowercase {\n  text-transform: lowercase;\n}\n.button-capitalize {\n  text-transform: capitalize;\n}\n.button-small-caps {\n  font-variant: small-caps;\n}\n.button-icon-txt-large {\n  font-size: 36px !important;\n}\n\n/*\n* Base padding\n*\n*/\n.button-width-small {\n  padding: 0 10px !important;\n}\n\n/*\n* Base Colors\n*\n* Create colors for buttons\n* (.button-primary, .button-secondary, etc.)\n*/\n.button-primary,\n.button-primary-flat {\n  background-color: #6699cc;\n  border-color: #6699cc;\n  color: #FFF;\n}\n.button-primary:visited,\n  .button-primary-flat:visited {\n    color: #FFF;\n}\n.button-primary:hover, .button-primary:focus,\n  .button-primary-flat:hover,\n  .button-primary-flat:focus {\n    background-color: #8cb3d9;\n    border-color: #8cb3d9;\n    color: #FFF;\n}\n.button-primary:active, .button-primary.active, .button-primary.is-active,\n  .button-primary-flat:active,\n  .button-primary-flat.active,\n  .button-primary-flat.is-active {\n    background-color: #7099c2;\n    border-color: #7099c2;\n    color: #4080bf;\n}\n.button-plain,\n.button-plain-flat {\n  background-color: #FFF;\n  border-color: #FFF;\n  color: #1B9AF7;\n}\n.button-plain:visited,\n  .button-plain-flat:visited {\n    color: #1B9AF7;\n}\n.button-plain:hover, .button-plain:focus,\n  .button-plain-flat:hover,\n  .button-plain-flat:focus {\n    background-color: white;\n    border-color: white;\n    color: #1B9AF7;\n}\n.button-plain:active, .button-plain.active, .button-plain.is-active,\n  .button-plain-flat:active,\n  .button-plain-flat.active,\n  .button-plain-flat.is-active {\n    background-color: white;\n    border-color: white;\n    color: #e6e6e6;\n}\n.button-inverse,\n.button-inverse-flat {\n  background-color: #222;\n  border-color: #222;\n  color: #EEE;\n}\n.button-inverse:visited,\n  .button-inverse-flat:visited {\n    color: #EEE;\n}\n.button-inverse:hover, .button-inverse:focus,\n  .button-inverse-flat:hover,\n  .button-inverse-flat:focus {\n    background-color: #3c3c3c;\n    border-color: #3c3c3c;\n    color: #EEE;\n}\n.button-inverse:active, .button-inverse.active, .button-inverse.is-active,\n  .button-inverse-flat:active,\n  .button-inverse-flat.active,\n  .button-inverse-flat.is-active {\n    background-color: #222222;\n    border-color: #222222;\n    color: #090909;\n}\n.button-action,\n.button-action-flat {\n  background-color: #4FC1E9;\n  border-color: #4FC1E9;\n  color: #FFF;\n}\n.button-action:visited,\n  .button-action-flat:visited {\n    color: #FFF;\n}\n.button-action:hover, .button-action:focus,\n  .button-action-flat:hover,\n  .button-action-flat:focus {\n    background-color: #7cd1ef;\n    border-color: #7cd1ef;\n    color: #FFF;\n}\n.button-action:active, .button-action.active, .button-action.is-active,\n  .button-action-flat:active,\n  .button-action-flat.active,\n  .button-action-flat.is-active {\n    background-color: #59bcdf;\n    border-color: #59bcdf;\n    color: #22b1e3;\n}\n.button-highlight,\n.button-highlight-flat {\n  background-color: #FFB65F;\n  border-color: #FFB65F;\n  color: #FFF;\n}\n.button-highlight:visited,\n  .button-highlight-flat:visited {\n    color: #FFF;\n}\n.button-highlight:hover, .button-highlight:focus,\n  .button-highlight-flat:hover,\n  .button-highlight-flat:focus {\n    background-color: #ffcd92;\n    border-color: #ffcd92;\n    color: #FFF;\n}\n.button-highlight:active, .button-highlight.active, .button-highlight.is-active,\n  .button-highlight-flat:active,\n  .button-highlight-flat.active,\n  .button-highlight-flat.is-active {\n    background-color: #f7b567;\n    border-color: #f7b567;\n    color: #ff9f2c;\n}\n.button-caution,\n.button-caution-flat {\n  background-color: #FB8678;\n  border-color: #FB8678;\n  color: #FFF;\n}\n.button-caution:visited,\n  .button-caution-flat:visited {\n    color: #FFF;\n}\n.button-caution:hover, .button-caution:focus,\n  .button-caution-flat:hover,\n  .button-caution-flat:focus {\n    background-color: #fcb2aa;\n    border-color: #fcb2aa;\n    color: #FFF;\n}\n.button-caution:active, .button-caution.active, .button-caution.is-active,\n  .button-caution-flat:active,\n  .button-caution-flat.active,\n  .button-caution-flat.is-active {\n    background-color: #f48b7f;\n    border-color: #f48b7f;\n    color: #fa5a46;\n}\n.button-royal,\n.button-royal-flat {\n  background-color: #22D69D;\n  border-color: #22D69D;\n  color: #FFF;\n}\n.button-royal:visited,\n  .button-royal-flat:visited {\n    color: #FFF;\n}\n.button-royal:hover, .button-royal:focus,\n  .button-royal-flat:hover,\n  .button-royal-flat:focus {\n    background-color: #49e2b2;\n    border-color: #49e2b2;\n    color: #FFF;\n}\n.button-royal:active, .button-royal.active, .button-royal.is-active,\n  .button-royal-flat:active,\n  .button-royal-flat.active,\n  .button-royal-flat.is-active {\n    background-color: #2eca98;\n    border-color: #2eca98;\n    color: #1baa7d;\n}\n\n/*\n* Base Layout Styles\n*\n* Very Miminal Layout Styles\n*/\n.button-block,\n.button-stacked {\n  display: block;\n}\n\n/*\n* Button Types (optional)\n*\n* All of the files below represent the various button\n* types (including shapes & sizes). None of these files\n* are required. Simple remove the uneeded type below and\n* the button type will be excluded from the final build\n*/\n/*\n* Button Shapes\n*\n* This file creates the various button shapes\n* (ex. Circle, Rounded, Pill)\n*/\n.button-square {\n  border-radius: 0;\n}\n.button-box {\n  border-radius: 10px;\n}\n.button-rounded {\n  border-radius: 4px;\n}\n.button-pill {\n  border-radius: 200px;\n}\n.button-circle {\n  border-radius: 100%;\n}\n\n/*\n* Size Adjustment for equal height & widht buttons\n*\n* Remove padding and set a fixed width.\n*/\n.button-circle,\n.button-box,\n.button-square {\n  padding: 0 !important;\n  width: 40px;\n}\n.button-circle.button-giant,\n  .button-box.button-giant,\n  .button-square.button-giant {\n    width: 70px;\n}\n.button-circle.button-jumbo,\n  .button-box.button-jumbo,\n  .button-square.button-jumbo {\n    width: 60px;\n}\n.button-circle.button-large,\n  .button-box.button-large,\n  .button-square.button-large {\n    width: 50px;\n}\n.button-circle.button-normal,\n  .button-box.button-normal,\n  .button-square.button-normal {\n    width: 40px;\n}\n.button-circle.button-small,\n  .button-box.button-small,\n  .button-square.button-small {\n    width: 30px;\n}\n.button-circle.button-tiny,\n  .button-box.button-tiny,\n  .button-square.button-tiny {\n    width: 24px;\n}\n\n/*\n* Border Buttons\n*\n* These buttons have no fill they only have a\n* border to define their hit target.\n*/\n.button-border, .button-border-thin, .button-border-thick {\n  background: none;\n  border-width: 2px;\n  border-style: solid;\n  line-height: 36px;\n}\n.button-border:hover, .button-border-thin:hover, .button-border-thick:hover {\n    background-color: rgba(246, 246, 246, 0.9);\n}\n.button-border:active, .button-border-thin:active, .button-border-thick:active, .button-border.active, .active.button-border-thin, .active.button-border-thick, .button-border.is-active, .is-active.button-border-thin, .is-active.button-border-thick {\n    box-shadow: none;\n    text-shadow: none;\n    transition-property: all;\n    transition-duration: .3s;\n}\n\n/*\n* Border Optional Sizes\n*\n* A slight variation in border thickness\n*/\n.button-border-thin {\n  border-width: 1px;\n}\n.button-border-thick {\n  border-width: 3px;\n}\n\n/*\n* Border Button Colors\n*\n* Create colors for buttons\n* (.button-primary, .button-secondary, etc.)\n*/\n.button-border, .button-border-thin, .button-border-thick,\n.button-border-thin,\n.button-border-thick {\n  /*\n  * Border Button Size Adjustment\n  *\n  * The line-height must be adjusted to compinsate for\n  * the width of the border.\n  */\n}\n.button-border.button-primary, .button-primary.button-border-thin, .button-primary.button-border-thick,\n  .button-border-thin.button-primary,\n  .button-border-thick.button-primary {\n    color: #6699cc;\n}\n.button-border.button-primary:hover, .button-primary.button-border-thin:hover, .button-primary.button-border-thick:hover, .button-border.button-primary:focus, .button-primary.button-border-thin:focus, .button-primary.button-border-thick:focus,\n    .button-border-thin.button-primary:hover,\n    .button-border-thin.button-primary:focus,\n    .button-border-thick.button-primary:hover,\n    .button-border-thick.button-primary:focus {\n      background-color: rgba(140, 179, 217, 0.9);\n      color: rgba(255, 255, 255, 0.9);\n}\n.button-border.button-primary:active, .button-primary.button-border-thin:active, .button-primary.button-border-thick:active, .button-border.button-primary.active, .button-primary.active.button-border-thin, .button-primary.active.button-border-thick, .button-border.button-primary.is-active, .button-primary.is-active.button-border-thin, .button-primary.is-active.button-border-thick,\n    .button-border-thin.button-primary:active,\n    .button-border-thin.button-primary.active,\n    .button-border-thin.button-primary.is-active,\n    .button-border-thick.button-primary:active,\n    .button-border-thick.button-primary.active,\n    .button-border-thick.button-primary.is-active {\n      background-color: rgba(112, 153, 194, 0.7);\n      color: rgba(255, 255, 255, 0.5);\n      opacity: .3;\n}\n.button-border.button-plain, .button-plain.button-border-thin, .button-plain.button-border-thick,\n  .button-border-thin.button-plain,\n  .button-border-thick.button-plain {\n    color: #FFF;\n}\n.button-border.button-plain:hover, .button-plain.button-border-thin:hover, .button-plain.button-border-thick:hover, .button-border.button-plain:focus, .button-plain.button-border-thin:focus, .button-plain.button-border-thick:focus,\n    .button-border-thin.button-plain:hover,\n    .button-border-thin.button-plain:focus,\n    .button-border-thick.button-plain:hover,\n    .button-border-thick.button-plain:focus {\n      background-color: rgba(255, 255, 255, 0.9);\n      color: rgba(27, 154, 247, 0.9);\n}\n.button-border.button-plain:active, .button-plain.button-border-thin:active, .button-plain.button-border-thick:active, .button-border.button-plain.active, .button-plain.active.button-border-thin, .button-plain.active.button-border-thick, .button-border.button-plain.is-active, .button-plain.is-active.button-border-thin, .button-plain.is-active.button-border-thick,\n    .button-border-thin.button-plain:active,\n    .button-border-thin.button-plain.active,\n    .button-border-thin.button-plain.is-active,\n    .button-border-thick.button-plain:active,\n    .button-border-thick.button-plain.active,\n    .button-border-thick.button-plain.is-active {\n      background-color: rgba(255, 255, 255, 0.7);\n      color: rgba(27, 154, 247, 0.5);\n      opacity: .3;\n}\n.button-border.button-inverse, .button-inverse.button-border-thin, .button-inverse.button-border-thick,\n  .button-border-thin.button-inverse,\n  .button-border-thick.button-inverse {\n    color: #222;\n}\n.button-border.button-inverse:hover, .button-inverse.button-border-thin:hover, .button-inverse.button-border-thick:hover, .button-border.button-inverse:focus, .button-inverse.button-border-thin:focus, .button-inverse.button-border-thick:focus,\n    .button-border-thin.button-inverse:hover,\n    .button-border-thin.button-inverse:focus,\n    .button-border-thick.button-inverse:hover,\n    .button-border-thick.button-inverse:focus {\n      background-color: rgba(60, 60, 60, 0.9);\n      color: rgba(238, 238, 238, 0.9);\n}\n.button-border.button-inverse:active, .button-inverse.button-border-thin:active, .button-inverse.button-border-thick:active, .button-border.button-inverse.active, .button-inverse.active.button-border-thin, .button-inverse.active.button-border-thick, .button-border.button-inverse.is-active, .button-inverse.is-active.button-border-thin, .button-inverse.is-active.button-border-thick,\n    .button-border-thin.button-inverse:active,\n    .button-border-thin.button-inverse.active,\n    .button-border-thin.button-inverse.is-active,\n    .button-border-thick.button-inverse:active,\n    .button-border-thick.button-inverse.active,\n    .button-border-thick.button-inverse.is-active {\n      background-color: rgba(34, 34, 34, 0.7);\n      color: rgba(238, 238, 238, 0.5);\n      opacity: .3;\n}\n.button-border.button-action, .button-action.button-border-thin, .button-action.button-border-thick,\n  .button-border-thin.button-action,\n  .button-border-thick.button-action {\n    color: #4FC1E9;\n}\n.button-border.button-action:hover, .button-action.button-border-thin:hover, .button-action.button-border-thick:hover, .button-border.button-action:focus, .button-action.button-border-thin:focus, .button-action.button-border-thick:focus,\n    .button-border-thin.button-action:hover,\n    .button-border-thin.button-action:focus,\n    .button-border-thick.button-action:hover,\n    .button-border-thick.button-action:focus {\n      background-color: rgba(124, 209, 239, 0.9);\n      color: rgba(255, 255, 255, 0.9);\n}\n.button-border.button-action:active, .button-action.button-border-thin:active, .button-action.button-border-thick:active, .button-border.button-action.active, .button-action.active.button-border-thin, .button-action.active.button-border-thick, .button-border.button-action.is-active, .button-action.is-active.button-border-thin, .button-action.is-active.button-border-thick,\n    .button-border-thin.button-action:active,\n    .button-border-thin.button-action.active,\n    .button-border-thin.button-action.is-active,\n    .button-border-thick.button-action:active,\n    .button-border-thick.button-action.active,\n    .button-border-thick.button-action.is-active {\n      background-color: rgba(89, 188, 223, 0.7);\n      color: rgba(255, 255, 255, 0.5);\n      opacity: .3;\n}\n.button-border.button-highlight, .button-highlight.button-border-thin, .button-highlight.button-border-thick,\n  .button-border-thin.button-highlight,\n  .button-border-thick.button-highlight {\n    color: #FFB65F;\n}\n.button-border.button-highlight:hover, .button-highlight.button-border-thin:hover, .button-highlight.button-border-thick:hover, .button-border.button-highlight:focus, .button-highlight.button-border-thin:focus, .button-highlight.button-border-thick:focus,\n    .button-border-thin.button-highlight:hover,\n    .button-border-thin.button-highlight:focus,\n    .button-border-thick.button-highlight:hover,\n    .button-border-thick.button-highlight:focus {\n      background-color: rgba(255, 205, 146, 0.9);\n      color: rgba(255, 255, 255, 0.9);\n}\n.button-border.button-highlight:active, .button-highlight.button-border-thin:active, .button-highlight.button-border-thick:active, .button-border.button-highlight.active, .button-highlight.active.button-border-thin, .button-highlight.active.button-border-thick, .button-border.button-highlight.is-active, .button-highlight.is-active.button-border-thin, .button-highlight.is-active.button-border-thick,\n    .button-border-thin.button-highlight:active,\n    .button-border-thin.button-highlight.active,\n    .button-border-thin.button-highlight.is-active,\n    .button-border-thick.button-highlight:active,\n    .button-border-thick.button-highlight.active,\n    .button-border-thick.button-highlight.is-active {\n      background-color: rgba(247, 181, 103, 0.7);\n      color: rgba(255, 255, 255, 0.5);\n      opacity: .3;\n}\n.button-border.button-caution, .button-caution.button-border-thin, .button-caution.button-border-thick,\n  .button-border-thin.button-caution,\n  .button-border-thick.button-caution {\n    color: #FB8678;\n}\n.button-border.button-caution:hover, .button-caution.button-border-thin:hover, .button-caution.button-border-thick:hover, .button-border.button-caution:focus, .button-caution.button-border-thin:focus, .button-caution.button-border-thick:focus,\n    .button-border-thin.button-caution:hover,\n    .button-border-thin.button-caution:focus,\n    .button-border-thick.button-caution:hover,\n    .button-border-thick.button-caution:focus {\n      background-color: rgba(252, 178, 170, 0.9);\n      color: rgba(255, 255, 255, 0.9);\n}\n.button-border.button-caution:active, .button-caution.button-border-thin:active, .button-caution.button-border-thick:active, .button-border.button-caution.active, .button-caution.active.button-border-thin, .button-caution.active.button-border-thick, .button-border.button-caution.is-active, .button-caution.is-active.button-border-thin, .button-caution.is-active.button-border-thick,\n    .button-border-thin.button-caution:active,\n    .button-border-thin.button-caution.active,\n    .button-border-thin.button-caution.is-active,\n    .button-border-thick.button-caution:active,\n    .button-border-thick.button-caution.active,\n    .button-border-thick.button-caution.is-active {\n      background-color: rgba(244, 139, 127, 0.7);\n      color: rgba(255, 255, 255, 0.5);\n      opacity: .3;\n}\n.button-border.button-royal, .button-royal.button-border-thin, .button-royal.button-border-thick,\n  .button-border-thin.button-royal,\n  .button-border-thick.button-royal {\n    color: #22D69D;\n}\n.button-border.button-royal:hover, .button-royal.button-border-thin:hover, .button-royal.button-border-thick:hover, .button-border.button-royal:focus, .button-royal.button-border-thin:focus, .button-royal.button-border-thick:focus,\n    .button-border-thin.button-royal:hover,\n    .button-border-thin.button-royal:focus,\n    .button-border-thick.button-royal:hover,\n    .button-border-thick.button-royal:focus {\n      background-color: rgba(73, 226, 178, 0.9);\n      color: rgba(255, 255, 255, 0.9);\n}\n.button-border.button-royal:active, .button-royal.button-border-thin:active, .button-royal.button-border-thick:active, .button-border.button-royal.active, .button-royal.active.button-border-thin, .button-royal.active.button-border-thick, .button-border.button-royal.is-active, .button-royal.is-active.button-border-thin, .button-royal.is-active.button-border-thick,\n    .button-border-thin.button-royal:active,\n    .button-border-thin.button-royal.active,\n    .button-border-thin.button-royal.is-active,\n    .button-border-thick.button-royal:active,\n    .button-border-thick.button-royal.active,\n    .button-border-thick.button-royal.is-active {\n      background-color: rgba(46, 202, 152, 0.7);\n      color: rgba(255, 255, 255, 0.5);\n      opacity: .3;\n}\n.button-border.button-giant, .button-giant.button-border-thin, .button-giant.button-border-thick,\n  .button-border-thin.button-giant,\n  .button-border-thick.button-giant {\n    line-height: 66px;\n}\n.button-border.button-jumbo, .button-jumbo.button-border-thin, .button-jumbo.button-border-thick,\n  .button-border-thin.button-jumbo,\n  .button-border-thick.button-jumbo {\n    line-height: 56px;\n}\n.button-border.button-large, .button-large.button-border-thin, .button-large.button-border-thick,\n  .button-border-thin.button-large,\n  .button-border-thick.button-large {\n    line-height: 46px;\n}\n.button-border.button-normal, .button-normal.button-border-thin, .button-normal.button-border-thick,\n  .button-border-thin.button-normal,\n  .button-border-thick.button-normal {\n    line-height: 36px;\n}\n.button-border.button-small, .button-small.button-border-thin, .button-small.button-border-thick,\n  .button-border-thin.button-small,\n  .button-border-thick.button-small {\n    line-height: 26px;\n}\n.button-border.button-tiny, .button-tiny.button-border-thin, .button-tiny.button-border-thick,\n  .button-border-thin.button-tiny,\n  .button-border-thick.button-tiny {\n    line-height: 20px;\n}\n\n/*\n* Border Buttons\n*\n* These buttons have no fill they only have a\n* border to define their hit target.\n*/\n.button-borderless {\n  background: none;\n  border: none;\n  padding: 0 8px !important;\n  color: #DCDCDC;\n  font-size: 20.8px;\n  font-weight: 200;\n  /*\n  * Borderless Button Colors\n  *\n  * Create colors for buttons\n  * (.button-primary, .button-secondary, etc.)\n  */\n  /*\n  * Borderles Size Adjustment\n  *\n  * The font-size must be large to compinsate for\n  * the lack of a hit target.\n  */\n}\n.button-borderless:hover, .button-borderless:focus {\n    background: none;\n}\n.button-borderless:active, .button-borderless.active, .button-borderless.is-active {\n    box-shadow: none;\n    text-shadow: none;\n    transition-property: all;\n    transition-duration: .3s;\n    opacity: .3;\n}\n.button-borderless.button-primary {\n    color: #6699cc;\n}\n.button-borderless.button-plain {\n    color: #FFF;\n}\n.button-borderless.button-inverse {\n    color: #222;\n}\n.button-borderless.button-action {\n    color: #4FC1E9;\n}\n.button-borderless.button-highlight {\n    color: #FFB65F;\n}\n.button-borderless.button-caution {\n    color: #FB8678;\n}\n.button-borderless.button-royal {\n    color: #22D69D;\n}\n.button-borderless.button-giant {\n    font-size: 36.4px;\n    height: 52.4px;\n    line-height: 52.4px;\n}\n.button-borderless.button-jumbo {\n    font-size: 31.2px;\n    height: 47.2px;\n    line-height: 47.2px;\n}\n.button-borderless.button-large {\n    font-size: 26px;\n    height: 42px;\n    line-height: 42px;\n}\n.button-borderless.button-normal {\n    font-size: 20.8px;\n    height: 36.8px;\n    line-height: 36.8px;\n}\n.button-borderless.button-small {\n    font-size: 15.6px;\n    height: 31.6px;\n    line-height: 31.6px;\n}\n.button-borderless.button-tiny {\n    font-size: 12.48px;\n    height: 28.48px;\n    line-height: 28.48px;\n}\n\n/*\n* Raised Buttons\n*\n* A classic looking button that offers\n* great depth and affordance.\n*/\n.button-raised {\n  border-color: #cfcfcf;\n  border-style: solid;\n  border-width: 1px;\n  line-height: 38px;\n  background: linear-gradient(#e4e4e4, #cfcfcf);\n  box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.15);\n}\n.button-raised:hover, .button-raised:focus {\n    background: linear-gradient(top, #f0f0f0, #cacaca);\n}\n.button-raised:active, .button-raised.active, .button-raised.is-active {\n    background: gainsboro;\n    box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 0px white;\n}\n\n/*\n* Raised Button Colors\n*\n* Create colors for raised buttons\n*/\n.button-raised.button-primary {\n  border-color: #538cc6;\n  background: linear-gradient(#79a6d2, #538cc6);\n}\n.button-raised.button-primary:hover, .button-raised.button-primary:focus {\n    background: linear-gradient(top, #85add6, #4b87c3);\n}\n.button-raised.button-primary:active, .button-raised.button-primary.active, .button-raised.button-primary.is-active {\n    border-color: #4080bf;\n    background: #7099c2;\n}\n.button-raised.button-plain {\n  border-color: #f2f2f2;\n  background: linear-gradient(white, #f2f2f2);\n}\n.button-raised.button-plain:hover, .button-raised.button-plain:focus {\n    background: linear-gradient(top, white, #ededed);\n}\n.button-raised.button-plain:active, .button-raised.button-plain.active, .button-raised.button-plain.is-active {\n    border-color: #e6e6e6;\n    background: white;\n}\n.button-raised.button-inverse {\n  border-color: #151515;\n  background: linear-gradient(#2f2f2f, #151515);\n}\n.button-raised.button-inverse:hover, .button-raised.button-inverse:focus {\n    background: linear-gradient(top, #363636, #101010);\n}\n.button-raised.button-inverse:active, .button-raised.button-inverse.active, .button-raised.button-inverse.is-active {\n    border-color: #090909;\n    background: #222222;\n}\n.button-raised.button-action {\n  border-color: #38b9e6;\n  background: linear-gradient(#66c9ec, #38b9e6);\n}\n.button-raised.button-action:hover, .button-raised.button-action:focus {\n    background: linear-gradient(top, #73ceee, #2fb6e5);\n}\n.button-raised.button-action:active, .button-raised.button-action.active, .button-raised.button-action.is-active {\n    border-color: #22b1e3;\n    background: #59bcdf;\n}\n.button-raised.button-highlight {\n  border-color: #ffaa46;\n  background: linear-gradient(#ffc279, #ffaa46);\n}\n.button-raised.button-highlight:hover, .button-raised.button-highlight:focus {\n    background: linear-gradient(top, #ffc988, #ffa63b);\n}\n.button-raised.button-highlight:active, .button-raised.button-highlight.active, .button-raised.button-highlight.is-active {\n    border-color: #ff9f2c;\n    background: #f7b567;\n}\n.button-raised.button-caution {\n  border-color: #fa705f;\n  background: linear-gradient(#fc9c91, #fa705f);\n}\n.button-raised.button-caution:hover, .button-raised.button-caution:focus {\n    background: linear-gradient(top, #fcaaa0, #fa6755);\n}\n.button-raised.button-caution:active, .button-raised.button-caution.active, .button-raised.button-caution.is-active {\n    border-color: #fa5a46;\n    background: #f48b7f;\n}\n.button-raised.button-royal {\n  border-color: #1fc08d;\n  background: linear-gradient(#33dfa8, #1fc08d);\n}\n.button-raised.button-royal:hover, .button-raised.button-royal:focus {\n    background: linear-gradient(top, #40e1ae, #1db786);\n}\n.button-raised.button-royal:active, .button-raised.button-royal.active, .button-raised.button-royal.is-active {\n    border-color: #1baa7d;\n    background: #2eca98;\n}\n\n/*\n* 3D Buttons\n*\n* These buttons have a heavy three dimensional\n* style that mimics the visual appearance of a\n* real life button.\n*/\n.button-3d {\n  position: relative;\n  top: 0;\n  box-shadow: 0 7px 0 darkgray, 0 8px 3px rgba(0, 0, 0, 0.2);\n}\n.button-3d:hover, .button-3d:focus {\n    box-shadow: 0 7px 0 darkgray, 0 8px 3px rgba(0, 0, 0, 0.2);\n}\n.button-3d:active, .button-3d.active, .button-3d.is-active {\n    top: 5px;\n    transition-property: all;\n    transition-duration: .15s;\n    box-shadow: 0 2px 0 darkgray, 0 3px 3px rgba(0, 0, 0, 0.2);\n}\n\n/*\n* 3D Button Colors\n*\n* Create colors for buttons\n* (.button-primary, .button-secondary, etc.)\n*/\n.button-3d.button-primary {\n  box-shadow: 0 7px 0 #4080bf, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-primary:hover, .button-3d.button-primary:focus {\n    box-shadow: 0 7px 0 #3d7ab8, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-primary:active, .button-3d.button-primary.active, .button-3d.button-primary.is-active {\n    box-shadow: 0 2px 0 #336699, 0 3px 3px rgba(0, 0, 0, 0.2);\n}\n.button-3d.button-plain {\n  box-shadow: 0 7px 0 #e6e6e6, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-plain:hover, .button-3d.button-plain:focus {\n    box-shadow: 0 7px 0 #e0e0e0, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-plain:active, .button-3d.button-plain.active, .button-3d.button-plain.is-active {\n    box-shadow: 0 2px 0 #cccccc, 0 3px 3px rgba(0, 0, 0, 0.2);\n}\n.button-3d.button-inverse {\n  box-shadow: 0 7px 0 #090909, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-inverse:hover, .button-3d.button-inverse:focus {\n    box-shadow: 0 7px 0 #030303, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-inverse:active, .button-3d.button-inverse.active, .button-3d.button-inverse.is-active {\n    box-shadow: 0 2px 0 black, 0 3px 3px rgba(0, 0, 0, 0.2);\n}\n.button-3d.button-action {\n  box-shadow: 0 7px 0 #22b1e3, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-action:hover, .button-3d.button-action:focus {\n    box-shadow: 0 7px 0 #1cacdf, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-action:active, .button-3d.button-action.active, .button-3d.button-action.is-active {\n    box-shadow: 0 2px 0 #1790bb, 0 3px 3px rgba(0, 0, 0, 0.2);\n}\n.button-3d.button-highlight {\n  box-shadow: 0 7px 0 #ff9f2c, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-highlight:hover, .button-3d.button-highlight:focus {\n    box-shadow: 0 7px 0 #ff9a22, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-highlight:active, .button-3d.button-highlight.active, .button-3d.button-highlight.is-active {\n    box-shadow: 0 2px 0 #f88700, 0 3px 3px rgba(0, 0, 0, 0.2);\n}\n.button-3d.button-caution {\n  box-shadow: 0 7px 0 #fa5a46, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-caution:hover, .button-3d.button-caution:focus {\n    box-shadow: 0 7px 0 #f9513d, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-caution:active, .button-3d.button-caution.active, .button-3d.button-caution.is-active {\n    box-shadow: 0 2px 0 #f82d15, 0 3px 3px rgba(0, 0, 0, 0.2);\n}\n.button-3d.button-royal {\n  box-shadow: 0 7px 0 #1baa7d, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-royal:hover, .button-3d.button-royal:focus {\n    box-shadow: 0 7px 0 #1aa176, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-royal:active, .button-3d.button-royal.active, .button-3d.button-royal.is-active {\n    box-shadow: 0 2px 0 #147e5c, 0 3px 3px rgba(0, 0, 0, 0.2);\n}\n\n/*\n* Glowing Buttons\n*\n* A pulse like glow that appears\n* rythmically around the edges of\n* a button.\n*/\n/*\n* Glow animation mixin for Compass users\n*\n*/\n/*\n* Glowing Keyframes\n*\n*/\n@-webkit-keyframes glowing {\nfrom {\n    box-shadow: 0 0 0 rgba(44, 154, 219, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(44, 154, 219, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(44, 154, 219, 0.3);\n}\n}\n@keyframes glowing {\nfrom {\n    box-shadow: 0 0 0 rgba(44, 154, 219, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(44, 154, 219, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(44, 154, 219, 0.3);\n}\n}\n\n/*\n* Glowing Keyframes for various colors\n*\n*/\n@-webkit-keyframes glowing-primary {\nfrom {\n    box-shadow: 0 0 0 rgba(102, 153, 204, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(102, 153, 204, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(102, 153, 204, 0.3);\n}\n}\n@keyframes glowing-primary {\nfrom {\n    box-shadow: 0 0 0 rgba(102, 153, 204, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(102, 153, 204, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(102, 153, 204, 0.3);\n}\n}\n@-webkit-keyframes glowing-plain {\nfrom {\n    box-shadow: 0 0 0 rgba(255, 255, 255, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(255, 255, 255, 0.3);\n}\n}\n@keyframes glowing-plain {\nfrom {\n    box-shadow: 0 0 0 rgba(255, 255, 255, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(255, 255, 255, 0.3);\n}\n}\n@-webkit-keyframes glowing-inverse {\nfrom {\n    box-shadow: 0 0 0 rgba(34, 34, 34, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(34, 34, 34, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(34, 34, 34, 0.3);\n}\n}\n@keyframes glowing-inverse {\nfrom {\n    box-shadow: 0 0 0 rgba(34, 34, 34, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(34, 34, 34, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(34, 34, 34, 0.3);\n}\n}\n@-webkit-keyframes glowing-action {\nfrom {\n    box-shadow: 0 0 0 rgba(79, 193, 233, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(79, 193, 233, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(79, 193, 233, 0.3);\n}\n}\n@keyframes glowing-action {\nfrom {\n    box-shadow: 0 0 0 rgba(79, 193, 233, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(79, 193, 233, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(79, 193, 233, 0.3);\n}\n}\n@-webkit-keyframes glowing-highlight {\nfrom {\n    box-shadow: 0 0 0 rgba(255, 182, 95, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(255, 182, 95, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(255, 182, 95, 0.3);\n}\n}\n@keyframes glowing-highlight {\nfrom {\n    box-shadow: 0 0 0 rgba(255, 182, 95, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(255, 182, 95, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(255, 182, 95, 0.3);\n}\n}\n@-webkit-keyframes glowing-caution {\nfrom {\n    box-shadow: 0 0 0 rgba(251, 134, 120, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(251, 134, 120, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(251, 134, 120, 0.3);\n}\n}\n@keyframes glowing-caution {\nfrom {\n    box-shadow: 0 0 0 rgba(251, 134, 120, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(251, 134, 120, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(251, 134, 120, 0.3);\n}\n}\n@-webkit-keyframes glowing-royal {\nfrom {\n    box-shadow: 0 0 0 rgba(34, 214, 157, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(34, 214, 157, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(34, 214, 157, 0.3);\n}\n}\n@keyframes glowing-royal {\nfrom {\n    box-shadow: 0 0 0 rgba(34, 214, 157, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(34, 214, 157, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(34, 214, 157, 0.3);\n}\n}\n\n/*\n* Glowing Buttons Base Styes\n*\n* A pulse like glow that appears\n* rythmically around the edges of\n* a button.\n*/\n.button-glow {\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: glowing;\n          animation-name: glowing;\n}\n.button-glow:active, .button-glow.active, .button-glow.is-active {\n    -webkit-animation-name: none;\n            animation-name: none;\n}\n\n/*\n* Glowing Button Colors\n*\n* Create colors for glowing buttons\n*/\n.button-glow.button-primary {\n  -webkit-animation-name: glowing-primary;\n          animation-name: glowing-primary;\n}\n.button-glow.button-plain {\n  -webkit-animation-name: glowing-plain;\n          animation-name: glowing-plain;\n}\n.button-glow.button-inverse {\n  -webkit-animation-name: glowing-inverse;\n          animation-name: glowing-inverse;\n}\n.button-glow.button-action {\n  -webkit-animation-name: glowing-action;\n          animation-name: glowing-action;\n}\n.button-glow.button-highlight {\n  -webkit-animation-name: glowing-highlight;\n          animation-name: glowing-highlight;\n}\n.button-glow.button-caution {\n  -webkit-animation-name: glowing-caution;\n          animation-name: glowing-caution;\n}\n.button-glow.button-royal {\n  -webkit-animation-name: glowing-royal;\n          animation-name: glowing-royal;\n}\n\n/*\n* Dropdown menu buttons\n*\n* A dropdown menu appears\n* when a button is pressed\n*/\n/*\n* Dropdown Container\n*\n*/\n.button-dropdown {\n  position: relative;\n  overflow: visible;\n  display: inline-block;\n}\n\n/*\n* Dropdown List Style\n*\n*/\n.button-dropdown-list {\n  display: none;\n  position: absolute;\n  padding: 0;\n  margin: 0;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  min-width: 100%;\n  list-style-type: none;\n  background: rgba(246, 246, 246, 0.95);\n  border-style: solid;\n  border-width: 1px;\n  border-color: #c3c3c3;\n  font-family: \"Open Sans\", sans-serif, verdana;\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  box-sizing: border-box;\n  /*\n  * Dropdown Below\n  *\n  */\n  /*\n  * Dropdown Above\n  *\n  */\n}\n.button-dropdown-list.is-below {\n    top: 100%;\n    border-top: none;\n    border-radius: 0 0 3px 3px;\n}\n.button-dropdown-list.is-above {\n    bottom: 100%;\n    top: auto;\n    border-bottom: none;\n    border-radius: 3px 3px 0 0;\n    box-shadow: 0 -2px 7px rgba(0, 0, 0, 0.2);\n}\n\n/*\n* Dropdown Buttons\n*\n*/\n.button-dropdown-list > li {\n  padding: 0;\n  margin: 0;\n  display: block;\n}\n.button-dropdown-list > li > a {\n    display: block;\n    line-height: 40px;\n    font-size: 12.8px;\n    padding: 5px 10px;\n    float: none;\n    color: #666;\n    text-decoration: none;\n}\n.button-dropdown-list > li > a:hover {\n      color: #5e5e5e;\n      background: #e4e4e4;\n      text-decoration: none;\n}\n.button-dropdown-divider {\n  border-top: 1px solid #d4d4d4;\n}\n\n/*\n* Dropdown Colors\n*\n* Create colors for buttons\n* (.button-primary, .button-secondary, etc.)\n*/\n.button-dropdown.button-dropdown-primary .button-dropdown-list {\n  background: rgba(102, 153, 204, 0.95);\n  border-color: #4080bf;\n}\n.button-dropdown.button-dropdown-primary .button-dropdown-list .button-dropdown-divider {\n    border-color: #4b87c3;\n}\n.button-dropdown.button-dropdown-primary .button-dropdown-list > li > a {\n    color: #FFF;\n}\n.button-dropdown.button-dropdown-primary .button-dropdown-list > li > a:hover {\n      color: #f2f2f2;\n      background: #538cc6;\n}\n.button-dropdown.button-dropdown-plain .button-dropdown-list {\n  background: rgba(255, 255, 255, 0.95);\n  border-color: #e6e6e6;\n}\n.button-dropdown.button-dropdown-plain .button-dropdown-list .button-dropdown-divider {\n    border-color: #ededed;\n}\n.button-dropdown.button-dropdown-plain .button-dropdown-list > li > a {\n    color: #1B9AF7;\n}\n.button-dropdown.button-dropdown-plain .button-dropdown-list > li > a:hover {\n      color: #088ef0;\n      background: #f2f2f2;\n}\n.button-dropdown.button-dropdown-inverse .button-dropdown-list {\n  background: rgba(34, 34, 34, 0.95);\n  border-color: #090909;\n}\n.button-dropdown.button-dropdown-inverse .button-dropdown-list .button-dropdown-divider {\n    border-color: #101010;\n}\n.button-dropdown.button-dropdown-inverse .button-dropdown-list > li > a {\n    color: #EEE;\n}\n.button-dropdown.button-dropdown-inverse .button-dropdown-list > li > a:hover {\n      color: #e1e1e1;\n      background: #151515;\n}\n.button-dropdown.button-dropdown-action .button-dropdown-list {\n  background: rgba(79, 193, 233, 0.95);\n  border-color: #22b1e3;\n}\n.button-dropdown.button-dropdown-action .button-dropdown-list .button-dropdown-divider {\n    border-color: #2fb6e5;\n}\n.button-dropdown.button-dropdown-action .button-dropdown-list > li > a {\n    color: #FFF;\n}\n.button-dropdown.button-dropdown-action .button-dropdown-list > li > a:hover {\n      color: #f2f2f2;\n      background: #38b9e6;\n}\n.button-dropdown.button-dropdown-highlight .button-dropdown-list {\n  background: rgba(255, 182, 95, 0.95);\n  border-color: #ff9f2c;\n}\n.button-dropdown.button-dropdown-highlight .button-dropdown-list .button-dropdown-divider {\n    border-color: #ffa63b;\n}\n.button-dropdown.button-dropdown-highlight .button-dropdown-list > li > a {\n    color: #FFF;\n}\n.button-dropdown.button-dropdown-highlight .button-dropdown-list > li > a:hover {\n      color: #f2f2f2;\n      background: #ffaa46;\n}\n.button-dropdown.button-dropdown-caution .button-dropdown-list {\n  background: rgba(251, 134, 120, 0.95);\n  border-color: #fa5a46;\n}\n.button-dropdown.button-dropdown-caution .button-dropdown-list .button-dropdown-divider {\n    border-color: #fa6755;\n}\n.button-dropdown.button-dropdown-caution .button-dropdown-list > li > a {\n    color: #FFF;\n}\n.button-dropdown.button-dropdown-caution .button-dropdown-list > li > a:hover {\n      color: #f2f2f2;\n      background: #fa705f;\n}\n.button-dropdown.button-dropdown-royal .button-dropdown-list {\n  background: rgba(34, 214, 157, 0.95);\n  border-color: #1baa7d;\n}\n.button-dropdown.button-dropdown-royal .button-dropdown-list .button-dropdown-divider {\n    border-color: #1db786;\n}\n.button-dropdown.button-dropdown-royal .button-dropdown-list > li > a {\n    color: #FFF;\n}\n.button-dropdown.button-dropdown-royal .button-dropdown-list > li > a:hover {\n      color: #f2f2f2;\n      background: #1fc08d;\n}\n\n/*\n* Buton Groups\n*\n* A group of related buttons\n* displayed edge to edge\n*/\n.button-group {\n  *zoom: 1;\n  position: relative;\n  display: inline-block;\n}\n.button-group:after, .button-group:before {\n    content: '.';\n    clear: both;\n    display: block;\n    overflow: hidden;\n    visibility: hidden;\n    font-size: 0;\n    line-height: 0;\n    width: 0;\n    height: 0;\n}\n.button-group .button,\n  .button-group .button-dropdown {\n    float: left;\n}\n.button-group .button:not(:first-child):not(:last-child),\n    .button-group .button-dropdown:not(:first-child):not(:last-child) {\n      border-radius: 0;\n      border-right: none;\n}\n.button-group .button:first-child,\n    .button-group .button-dropdown:first-child {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n      border-right: none;\n}\n.button-group .button:last-child,\n    .button-group .button-dropdown:last-child {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n}\n\n/*\n* Button Wrapper\n*\n* A wrap around effect to highlight\n* the shape of the button and offer\n* a subtle visual effect.\n*/\n.button-wrap {\n  border: 1px solid #e3e3e3;\n  display: inline-block;\n  padding: 9px;\n  background: linear-gradient(#f2f2f2, #FFF);\n  border-radius: 200px;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n\n/*\n* Long Shadow Buttons\n*\n* A visual effect adding a flat shadow to the text of a button\n*/\n/*\n* Long Shadow Function\n*\n* Loops $length times building a long shadow. Defaults downward right\n*/\n/*\n* LONG SHADOW MIXIN\n*\n*/\n/*\n* Shadow Right\n*\n*/\n.button-longshadow,\n.button-longshadow-right {\n  overflow: hidden;\n}\n.button-longshadow.button-primary,\n  .button-longshadow-right.button-primary {\n    text-shadow: 0px 0px #4080bf, 1px 1px #4080bf, 2px 2px #4080bf, 3px 3px #4080bf, 4px 4px #4080bf, 5px 5px #4080bf, 6px 6px #4080bf, 7px 7px #4080bf, 8px 8px #4080bf, 9px 9px #4080bf, 10px 10px #4080bf, 11px 11px #4080bf, 12px 12px #4080bf, 13px 13px #4080bf, 14px 14px #4080bf, 15px 15px #4080bf, 16px 16px #4080bf, 17px 17px #4080bf, 18px 18px #4080bf, 19px 19px #4080bf, 20px 20px #4080bf, 21px 21px #4080bf, 22px 22px #4080bf, 23px 23px #4080bf, 24px 24px #4080bf, 25px 25px #4080bf, 26px 26px #4080bf, 27px 27px #4080bf, 28px 28px #4080bf, 29px 29px #4080bf, 30px 30px #4080bf, 31px 31px #4080bf, 32px 32px #4080bf, 33px 33px #4080bf, 34px 34px #4080bf, 35px 35px #4080bf, 36px 36px #4080bf, 37px 37px #4080bf, 38px 38px #4080bf, 39px 39px #4080bf, 40px 40px #4080bf, 41px 41px #4080bf, 42px 42px #4080bf, 43px 43px #4080bf, 44px 44px #4080bf, 45px 45px #4080bf, 46px 46px #4080bf, 47px 47px #4080bf, 48px 48px #4080bf, 49px 49px #4080bf, 50px 50px #4080bf, 51px 51px #4080bf, 52px 52px #4080bf, 53px 53px #4080bf, 54px 54px #4080bf, 55px 55px #4080bf, 56px 56px #4080bf, 57px 57px #4080bf, 58px 58px #4080bf, 59px 59px #4080bf, 60px 60px #4080bf, 61px 61px #4080bf, 62px 62px #4080bf, 63px 63px #4080bf, 64px 64px #4080bf, 65px 65px #4080bf, 66px 66px #4080bf, 67px 67px #4080bf, 68px 68px #4080bf, 69px 69px #4080bf, 70px 70px #4080bf, 71px 71px #4080bf, 72px 72px #4080bf, 73px 73px #4080bf, 74px 74px #4080bf, 75px 75px #4080bf, 76px 76px #4080bf, 77px 77px #4080bf, 78px 78px #4080bf, 79px 79px #4080bf, 80px 80px #4080bf, 81px 81px #4080bf, 82px 82px #4080bf, 83px 83px #4080bf, 84px 84px #4080bf, 85px 85px #4080bf;\n}\n.button-longshadow.button-primary:active, .button-longshadow.button-primary.active, .button-longshadow.button-primary.is-active,\n    .button-longshadow-right.button-primary:active,\n    .button-longshadow-right.button-primary.active,\n    .button-longshadow-right.button-primary.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow.button-plain,\n  .button-longshadow-right.button-plain {\n    text-shadow: 0px 0px #e6e6e6, 1px 1px #e6e6e6, 2px 2px #e6e6e6, 3px 3px #e6e6e6, 4px 4px #e6e6e6, 5px 5px #e6e6e6, 6px 6px #e6e6e6, 7px 7px #e6e6e6, 8px 8px #e6e6e6, 9px 9px #e6e6e6, 10px 10px #e6e6e6, 11px 11px #e6e6e6, 12px 12px #e6e6e6, 13px 13px #e6e6e6, 14px 14px #e6e6e6, 15px 15px #e6e6e6, 16px 16px #e6e6e6, 17px 17px #e6e6e6, 18px 18px #e6e6e6, 19px 19px #e6e6e6, 20px 20px #e6e6e6, 21px 21px #e6e6e6, 22px 22px #e6e6e6, 23px 23px #e6e6e6, 24px 24px #e6e6e6, 25px 25px #e6e6e6, 26px 26px #e6e6e6, 27px 27px #e6e6e6, 28px 28px #e6e6e6, 29px 29px #e6e6e6, 30px 30px #e6e6e6, 31px 31px #e6e6e6, 32px 32px #e6e6e6, 33px 33px #e6e6e6, 34px 34px #e6e6e6, 35px 35px #e6e6e6, 36px 36px #e6e6e6, 37px 37px #e6e6e6, 38px 38px #e6e6e6, 39px 39px #e6e6e6, 40px 40px #e6e6e6, 41px 41px #e6e6e6, 42px 42px #e6e6e6, 43px 43px #e6e6e6, 44px 44px #e6e6e6, 45px 45px #e6e6e6, 46px 46px #e6e6e6, 47px 47px #e6e6e6, 48px 48px #e6e6e6, 49px 49px #e6e6e6, 50px 50px #e6e6e6, 51px 51px #e6e6e6, 52px 52px #e6e6e6, 53px 53px #e6e6e6, 54px 54px #e6e6e6, 55px 55px #e6e6e6, 56px 56px #e6e6e6, 57px 57px #e6e6e6, 58px 58px #e6e6e6, 59px 59px #e6e6e6, 60px 60px #e6e6e6, 61px 61px #e6e6e6, 62px 62px #e6e6e6, 63px 63px #e6e6e6, 64px 64px #e6e6e6, 65px 65px #e6e6e6, 66px 66px #e6e6e6, 67px 67px #e6e6e6, 68px 68px #e6e6e6, 69px 69px #e6e6e6, 70px 70px #e6e6e6, 71px 71px #e6e6e6, 72px 72px #e6e6e6, 73px 73px #e6e6e6, 74px 74px #e6e6e6, 75px 75px #e6e6e6, 76px 76px #e6e6e6, 77px 77px #e6e6e6, 78px 78px #e6e6e6, 79px 79px #e6e6e6, 80px 80px #e6e6e6, 81px 81px #e6e6e6, 82px 82px #e6e6e6, 83px 83px #e6e6e6, 84px 84px #e6e6e6, 85px 85px #e6e6e6;\n}\n.button-longshadow.button-plain:active, .button-longshadow.button-plain.active, .button-longshadow.button-plain.is-active,\n    .button-longshadow-right.button-plain:active,\n    .button-longshadow-right.button-plain.active,\n    .button-longshadow-right.button-plain.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow.button-inverse,\n  .button-longshadow-right.button-inverse {\n    text-shadow: 0px 0px #090909, 1px 1px #090909, 2px 2px #090909, 3px 3px #090909, 4px 4px #090909, 5px 5px #090909, 6px 6px #090909, 7px 7px #090909, 8px 8px #090909, 9px 9px #090909, 10px 10px #090909, 11px 11px #090909, 12px 12px #090909, 13px 13px #090909, 14px 14px #090909, 15px 15px #090909, 16px 16px #090909, 17px 17px #090909, 18px 18px #090909, 19px 19px #090909, 20px 20px #090909, 21px 21px #090909, 22px 22px #090909, 23px 23px #090909, 24px 24px #090909, 25px 25px #090909, 26px 26px #090909, 27px 27px #090909, 28px 28px #090909, 29px 29px #090909, 30px 30px #090909, 31px 31px #090909, 32px 32px #090909, 33px 33px #090909, 34px 34px #090909, 35px 35px #090909, 36px 36px #090909, 37px 37px #090909, 38px 38px #090909, 39px 39px #090909, 40px 40px #090909, 41px 41px #090909, 42px 42px #090909, 43px 43px #090909, 44px 44px #090909, 45px 45px #090909, 46px 46px #090909, 47px 47px #090909, 48px 48px #090909, 49px 49px #090909, 50px 50px #090909, 51px 51px #090909, 52px 52px #090909, 53px 53px #090909, 54px 54px #090909, 55px 55px #090909, 56px 56px #090909, 57px 57px #090909, 58px 58px #090909, 59px 59px #090909, 60px 60px #090909, 61px 61px #090909, 62px 62px #090909, 63px 63px #090909, 64px 64px #090909, 65px 65px #090909, 66px 66px #090909, 67px 67px #090909, 68px 68px #090909, 69px 69px #090909, 70px 70px #090909, 71px 71px #090909, 72px 72px #090909, 73px 73px #090909, 74px 74px #090909, 75px 75px #090909, 76px 76px #090909, 77px 77px #090909, 78px 78px #090909, 79px 79px #090909, 80px 80px #090909, 81px 81px #090909, 82px 82px #090909, 83px 83px #090909, 84px 84px #090909, 85px 85px #090909;\n}\n.button-longshadow.button-inverse:active, .button-longshadow.button-inverse.active, .button-longshadow.button-inverse.is-active,\n    .button-longshadow-right.button-inverse:active,\n    .button-longshadow-right.button-inverse.active,\n    .button-longshadow-right.button-inverse.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow.button-action,\n  .button-longshadow-right.button-action {\n    text-shadow: 0px 0px #22b1e3, 1px 1px #22b1e3, 2px 2px #22b1e3, 3px 3px #22b1e3, 4px 4px #22b1e3, 5px 5px #22b1e3, 6px 6px #22b1e3, 7px 7px #22b1e3, 8px 8px #22b1e3, 9px 9px #22b1e3, 10px 10px #22b1e3, 11px 11px #22b1e3, 12px 12px #22b1e3, 13px 13px #22b1e3, 14px 14px #22b1e3, 15px 15px #22b1e3, 16px 16px #22b1e3, 17px 17px #22b1e3, 18px 18px #22b1e3, 19px 19px #22b1e3, 20px 20px #22b1e3, 21px 21px #22b1e3, 22px 22px #22b1e3, 23px 23px #22b1e3, 24px 24px #22b1e3, 25px 25px #22b1e3, 26px 26px #22b1e3, 27px 27px #22b1e3, 28px 28px #22b1e3, 29px 29px #22b1e3, 30px 30px #22b1e3, 31px 31px #22b1e3, 32px 32px #22b1e3, 33px 33px #22b1e3, 34px 34px #22b1e3, 35px 35px #22b1e3, 36px 36px #22b1e3, 37px 37px #22b1e3, 38px 38px #22b1e3, 39px 39px #22b1e3, 40px 40px #22b1e3, 41px 41px #22b1e3, 42px 42px #22b1e3, 43px 43px #22b1e3, 44px 44px #22b1e3, 45px 45px #22b1e3, 46px 46px #22b1e3, 47px 47px #22b1e3, 48px 48px #22b1e3, 49px 49px #22b1e3, 50px 50px #22b1e3, 51px 51px #22b1e3, 52px 52px #22b1e3, 53px 53px #22b1e3, 54px 54px #22b1e3, 55px 55px #22b1e3, 56px 56px #22b1e3, 57px 57px #22b1e3, 58px 58px #22b1e3, 59px 59px #22b1e3, 60px 60px #22b1e3, 61px 61px #22b1e3, 62px 62px #22b1e3, 63px 63px #22b1e3, 64px 64px #22b1e3, 65px 65px #22b1e3, 66px 66px #22b1e3, 67px 67px #22b1e3, 68px 68px #22b1e3, 69px 69px #22b1e3, 70px 70px #22b1e3, 71px 71px #22b1e3, 72px 72px #22b1e3, 73px 73px #22b1e3, 74px 74px #22b1e3, 75px 75px #22b1e3, 76px 76px #22b1e3, 77px 77px #22b1e3, 78px 78px #22b1e3, 79px 79px #22b1e3, 80px 80px #22b1e3, 81px 81px #22b1e3, 82px 82px #22b1e3, 83px 83px #22b1e3, 84px 84px #22b1e3, 85px 85px #22b1e3;\n}\n.button-longshadow.button-action:active, .button-longshadow.button-action.active, .button-longshadow.button-action.is-active,\n    .button-longshadow-right.button-action:active,\n    .button-longshadow-right.button-action.active,\n    .button-longshadow-right.button-action.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow.button-highlight,\n  .button-longshadow-right.button-highlight {\n    text-shadow: 0px 0px #ff9f2c, 1px 1px #ff9f2c, 2px 2px #ff9f2c, 3px 3px #ff9f2c, 4px 4px #ff9f2c, 5px 5px #ff9f2c, 6px 6px #ff9f2c, 7px 7px #ff9f2c, 8px 8px #ff9f2c, 9px 9px #ff9f2c, 10px 10px #ff9f2c, 11px 11px #ff9f2c, 12px 12px #ff9f2c, 13px 13px #ff9f2c, 14px 14px #ff9f2c, 15px 15px #ff9f2c, 16px 16px #ff9f2c, 17px 17px #ff9f2c, 18px 18px #ff9f2c, 19px 19px #ff9f2c, 20px 20px #ff9f2c, 21px 21px #ff9f2c, 22px 22px #ff9f2c, 23px 23px #ff9f2c, 24px 24px #ff9f2c, 25px 25px #ff9f2c, 26px 26px #ff9f2c, 27px 27px #ff9f2c, 28px 28px #ff9f2c, 29px 29px #ff9f2c, 30px 30px #ff9f2c, 31px 31px #ff9f2c, 32px 32px #ff9f2c, 33px 33px #ff9f2c, 34px 34px #ff9f2c, 35px 35px #ff9f2c, 36px 36px #ff9f2c, 37px 37px #ff9f2c, 38px 38px #ff9f2c, 39px 39px #ff9f2c, 40px 40px #ff9f2c, 41px 41px #ff9f2c, 42px 42px #ff9f2c, 43px 43px #ff9f2c, 44px 44px #ff9f2c, 45px 45px #ff9f2c, 46px 46px #ff9f2c, 47px 47px #ff9f2c, 48px 48px #ff9f2c, 49px 49px #ff9f2c, 50px 50px #ff9f2c, 51px 51px #ff9f2c, 52px 52px #ff9f2c, 53px 53px #ff9f2c, 54px 54px #ff9f2c, 55px 55px #ff9f2c, 56px 56px #ff9f2c, 57px 57px #ff9f2c, 58px 58px #ff9f2c, 59px 59px #ff9f2c, 60px 60px #ff9f2c, 61px 61px #ff9f2c, 62px 62px #ff9f2c, 63px 63px #ff9f2c, 64px 64px #ff9f2c, 65px 65px #ff9f2c, 66px 66px #ff9f2c, 67px 67px #ff9f2c, 68px 68px #ff9f2c, 69px 69px #ff9f2c, 70px 70px #ff9f2c, 71px 71px #ff9f2c, 72px 72px #ff9f2c, 73px 73px #ff9f2c, 74px 74px #ff9f2c, 75px 75px #ff9f2c, 76px 76px #ff9f2c, 77px 77px #ff9f2c, 78px 78px #ff9f2c, 79px 79px #ff9f2c, 80px 80px #ff9f2c, 81px 81px #ff9f2c, 82px 82px #ff9f2c, 83px 83px #ff9f2c, 84px 84px #ff9f2c, 85px 85px #ff9f2c;\n}\n.button-longshadow.button-highlight:active, .button-longshadow.button-highlight.active, .button-longshadow.button-highlight.is-active,\n    .button-longshadow-right.button-highlight:active,\n    .button-longshadow-right.button-highlight.active,\n    .button-longshadow-right.button-highlight.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow.button-caution,\n  .button-longshadow-right.button-caution {\n    text-shadow: 0px 0px #fa5a46, 1px 1px #fa5a46, 2px 2px #fa5a46, 3px 3px #fa5a46, 4px 4px #fa5a46, 5px 5px #fa5a46, 6px 6px #fa5a46, 7px 7px #fa5a46, 8px 8px #fa5a46, 9px 9px #fa5a46, 10px 10px #fa5a46, 11px 11px #fa5a46, 12px 12px #fa5a46, 13px 13px #fa5a46, 14px 14px #fa5a46, 15px 15px #fa5a46, 16px 16px #fa5a46, 17px 17px #fa5a46, 18px 18px #fa5a46, 19px 19px #fa5a46, 20px 20px #fa5a46, 21px 21px #fa5a46, 22px 22px #fa5a46, 23px 23px #fa5a46, 24px 24px #fa5a46, 25px 25px #fa5a46, 26px 26px #fa5a46, 27px 27px #fa5a46, 28px 28px #fa5a46, 29px 29px #fa5a46, 30px 30px #fa5a46, 31px 31px #fa5a46, 32px 32px #fa5a46, 33px 33px #fa5a46, 34px 34px #fa5a46, 35px 35px #fa5a46, 36px 36px #fa5a46, 37px 37px #fa5a46, 38px 38px #fa5a46, 39px 39px #fa5a46, 40px 40px #fa5a46, 41px 41px #fa5a46, 42px 42px #fa5a46, 43px 43px #fa5a46, 44px 44px #fa5a46, 45px 45px #fa5a46, 46px 46px #fa5a46, 47px 47px #fa5a46, 48px 48px #fa5a46, 49px 49px #fa5a46, 50px 50px #fa5a46, 51px 51px #fa5a46, 52px 52px #fa5a46, 53px 53px #fa5a46, 54px 54px #fa5a46, 55px 55px #fa5a46, 56px 56px #fa5a46, 57px 57px #fa5a46, 58px 58px #fa5a46, 59px 59px #fa5a46, 60px 60px #fa5a46, 61px 61px #fa5a46, 62px 62px #fa5a46, 63px 63px #fa5a46, 64px 64px #fa5a46, 65px 65px #fa5a46, 66px 66px #fa5a46, 67px 67px #fa5a46, 68px 68px #fa5a46, 69px 69px #fa5a46, 70px 70px #fa5a46, 71px 71px #fa5a46, 72px 72px #fa5a46, 73px 73px #fa5a46, 74px 74px #fa5a46, 75px 75px #fa5a46, 76px 76px #fa5a46, 77px 77px #fa5a46, 78px 78px #fa5a46, 79px 79px #fa5a46, 80px 80px #fa5a46, 81px 81px #fa5a46, 82px 82px #fa5a46, 83px 83px #fa5a46, 84px 84px #fa5a46, 85px 85px #fa5a46;\n}\n.button-longshadow.button-caution:active, .button-longshadow.button-caution.active, .button-longshadow.button-caution.is-active,\n    .button-longshadow-right.button-caution:active,\n    .button-longshadow-right.button-caution.active,\n    .button-longshadow-right.button-caution.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow.button-royal,\n  .button-longshadow-right.button-royal {\n    text-shadow: 0px 0px #1baa7d, 1px 1px #1baa7d, 2px 2px #1baa7d, 3px 3px #1baa7d, 4px 4px #1baa7d, 5px 5px #1baa7d, 6px 6px #1baa7d, 7px 7px #1baa7d, 8px 8px #1baa7d, 9px 9px #1baa7d, 10px 10px #1baa7d, 11px 11px #1baa7d, 12px 12px #1baa7d, 13px 13px #1baa7d, 14px 14px #1baa7d, 15px 15px #1baa7d, 16px 16px #1baa7d, 17px 17px #1baa7d, 18px 18px #1baa7d, 19px 19px #1baa7d, 20px 20px #1baa7d, 21px 21px #1baa7d, 22px 22px #1baa7d, 23px 23px #1baa7d, 24px 24px #1baa7d, 25px 25px #1baa7d, 26px 26px #1baa7d, 27px 27px #1baa7d, 28px 28px #1baa7d, 29px 29px #1baa7d, 30px 30px #1baa7d, 31px 31px #1baa7d, 32px 32px #1baa7d, 33px 33px #1baa7d, 34px 34px #1baa7d, 35px 35px #1baa7d, 36px 36px #1baa7d, 37px 37px #1baa7d, 38px 38px #1baa7d, 39px 39px #1baa7d, 40px 40px #1baa7d, 41px 41px #1baa7d, 42px 42px #1baa7d, 43px 43px #1baa7d, 44px 44px #1baa7d, 45px 45px #1baa7d, 46px 46px #1baa7d, 47px 47px #1baa7d, 48px 48px #1baa7d, 49px 49px #1baa7d, 50px 50px #1baa7d, 51px 51px #1baa7d, 52px 52px #1baa7d, 53px 53px #1baa7d, 54px 54px #1baa7d, 55px 55px #1baa7d, 56px 56px #1baa7d, 57px 57px #1baa7d, 58px 58px #1baa7d, 59px 59px #1baa7d, 60px 60px #1baa7d, 61px 61px #1baa7d, 62px 62px #1baa7d, 63px 63px #1baa7d, 64px 64px #1baa7d, 65px 65px #1baa7d, 66px 66px #1baa7d, 67px 67px #1baa7d, 68px 68px #1baa7d, 69px 69px #1baa7d, 70px 70px #1baa7d, 71px 71px #1baa7d, 72px 72px #1baa7d, 73px 73px #1baa7d, 74px 74px #1baa7d, 75px 75px #1baa7d, 76px 76px #1baa7d, 77px 77px #1baa7d, 78px 78px #1baa7d, 79px 79px #1baa7d, 80px 80px #1baa7d, 81px 81px #1baa7d, 82px 82px #1baa7d, 83px 83px #1baa7d, 84px 84px #1baa7d, 85px 85px #1baa7d;\n}\n.button-longshadow.button-royal:active, .button-longshadow.button-royal.active, .button-longshadow.button-royal.is-active,\n    .button-longshadow-right.button-royal:active,\n    .button-longshadow-right.button-royal.active,\n    .button-longshadow-right.button-royal.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n\n/*\n* Shadow Left\n*\n*/\n.button-longshadow-left {\n  overflow: hidden;\n}\n.button-longshadow-left.button-primary {\n    text-shadow: 0px 0px #4080bf, -1px 1px #4080bf, -2px 2px #4080bf, -3px 3px #4080bf, -4px 4px #4080bf, -5px 5px #4080bf, -6px 6px #4080bf, -7px 7px #4080bf, -8px 8px #4080bf, -9px 9px #4080bf, -10px 10px #4080bf, -11px 11px #4080bf, -12px 12px #4080bf, -13px 13px #4080bf, -14px 14px #4080bf, -15px 15px #4080bf, -16px 16px #4080bf, -17px 17px #4080bf, -18px 18px #4080bf, -19px 19px #4080bf, -20px 20px #4080bf, -21px 21px #4080bf, -22px 22px #4080bf, -23px 23px #4080bf, -24px 24px #4080bf, -25px 25px #4080bf, -26px 26px #4080bf, -27px 27px #4080bf, -28px 28px #4080bf, -29px 29px #4080bf, -30px 30px #4080bf, -31px 31px #4080bf, -32px 32px #4080bf, -33px 33px #4080bf, -34px 34px #4080bf, -35px 35px #4080bf, -36px 36px #4080bf, -37px 37px #4080bf, -38px 38px #4080bf, -39px 39px #4080bf, -40px 40px #4080bf, -41px 41px #4080bf, -42px 42px #4080bf, -43px 43px #4080bf, -44px 44px #4080bf, -45px 45px #4080bf, -46px 46px #4080bf, -47px 47px #4080bf, -48px 48px #4080bf, -49px 49px #4080bf, -50px 50px #4080bf, -51px 51px #4080bf, -52px 52px #4080bf, -53px 53px #4080bf, -54px 54px #4080bf, -55px 55px #4080bf, -56px 56px #4080bf, -57px 57px #4080bf, -58px 58px #4080bf, -59px 59px #4080bf, -60px 60px #4080bf, -61px 61px #4080bf, -62px 62px #4080bf, -63px 63px #4080bf, -64px 64px #4080bf, -65px 65px #4080bf, -66px 66px #4080bf, -67px 67px #4080bf, -68px 68px #4080bf, -69px 69px #4080bf, -70px 70px #4080bf, -71px 71px #4080bf, -72px 72px #4080bf, -73px 73px #4080bf, -74px 74px #4080bf, -75px 75px #4080bf, -76px 76px #4080bf, -77px 77px #4080bf, -78px 78px #4080bf, -79px 79px #4080bf, -80px 80px #4080bf, -81px 81px #4080bf, -82px 82px #4080bf, -83px 83px #4080bf, -84px 84px #4080bf, -85px 85px #4080bf;\n}\n.button-longshadow-left.button-primary:active, .button-longshadow-left.button-primary.active, .button-longshadow-left.button-primary.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow-left.button-plain {\n    text-shadow: 0px 0px #e6e6e6, -1px 1px #e6e6e6, -2px 2px #e6e6e6, -3px 3px #e6e6e6, -4px 4px #e6e6e6, -5px 5px #e6e6e6, -6px 6px #e6e6e6, -7px 7px #e6e6e6, -8px 8px #e6e6e6, -9px 9px #e6e6e6, -10px 10px #e6e6e6, -11px 11px #e6e6e6, -12px 12px #e6e6e6, -13px 13px #e6e6e6, -14px 14px #e6e6e6, -15px 15px #e6e6e6, -16px 16px #e6e6e6, -17px 17px #e6e6e6, -18px 18px #e6e6e6, -19px 19px #e6e6e6, -20px 20px #e6e6e6, -21px 21px #e6e6e6, -22px 22px #e6e6e6, -23px 23px #e6e6e6, -24px 24px #e6e6e6, -25px 25px #e6e6e6, -26px 26px #e6e6e6, -27px 27px #e6e6e6, -28px 28px #e6e6e6, -29px 29px #e6e6e6, -30px 30px #e6e6e6, -31px 31px #e6e6e6, -32px 32px #e6e6e6, -33px 33px #e6e6e6, -34px 34px #e6e6e6, -35px 35px #e6e6e6, -36px 36px #e6e6e6, -37px 37px #e6e6e6, -38px 38px #e6e6e6, -39px 39px #e6e6e6, -40px 40px #e6e6e6, -41px 41px #e6e6e6, -42px 42px #e6e6e6, -43px 43px #e6e6e6, -44px 44px #e6e6e6, -45px 45px #e6e6e6, -46px 46px #e6e6e6, -47px 47px #e6e6e6, -48px 48px #e6e6e6, -49px 49px #e6e6e6, -50px 50px #e6e6e6, -51px 51px #e6e6e6, -52px 52px #e6e6e6, -53px 53px #e6e6e6, -54px 54px #e6e6e6, -55px 55px #e6e6e6, -56px 56px #e6e6e6, -57px 57px #e6e6e6, -58px 58px #e6e6e6, -59px 59px #e6e6e6, -60px 60px #e6e6e6, -61px 61px #e6e6e6, -62px 62px #e6e6e6, -63px 63px #e6e6e6, -64px 64px #e6e6e6, -65px 65px #e6e6e6, -66px 66px #e6e6e6, -67px 67px #e6e6e6, -68px 68px #e6e6e6, -69px 69px #e6e6e6, -70px 70px #e6e6e6, -71px 71px #e6e6e6, -72px 72px #e6e6e6, -73px 73px #e6e6e6, -74px 74px #e6e6e6, -75px 75px #e6e6e6, -76px 76px #e6e6e6, -77px 77px #e6e6e6, -78px 78px #e6e6e6, -79px 79px #e6e6e6, -80px 80px #e6e6e6, -81px 81px #e6e6e6, -82px 82px #e6e6e6, -83px 83px #e6e6e6, -84px 84px #e6e6e6, -85px 85px #e6e6e6;\n}\n.button-longshadow-left.button-plain:active, .button-longshadow-left.button-plain.active, .button-longshadow-left.button-plain.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow-left.button-inverse {\n    text-shadow: 0px 0px #090909, -1px 1px #090909, -2px 2px #090909, -3px 3px #090909, -4px 4px #090909, -5px 5px #090909, -6px 6px #090909, -7px 7px #090909, -8px 8px #090909, -9px 9px #090909, -10px 10px #090909, -11px 11px #090909, -12px 12px #090909, -13px 13px #090909, -14px 14px #090909, -15px 15px #090909, -16px 16px #090909, -17px 17px #090909, -18px 18px #090909, -19px 19px #090909, -20px 20px #090909, -21px 21px #090909, -22px 22px #090909, -23px 23px #090909, -24px 24px #090909, -25px 25px #090909, -26px 26px #090909, -27px 27px #090909, -28px 28px #090909, -29px 29px #090909, -30px 30px #090909, -31px 31px #090909, -32px 32px #090909, -33px 33px #090909, -34px 34px #090909, -35px 35px #090909, -36px 36px #090909, -37px 37px #090909, -38px 38px #090909, -39px 39px #090909, -40px 40px #090909, -41px 41px #090909, -42px 42px #090909, -43px 43px #090909, -44px 44px #090909, -45px 45px #090909, -46px 46px #090909, -47px 47px #090909, -48px 48px #090909, -49px 49px #090909, -50px 50px #090909, -51px 51px #090909, -52px 52px #090909, -53px 53px #090909, -54px 54px #090909, -55px 55px #090909, -56px 56px #090909, -57px 57px #090909, -58px 58px #090909, -59px 59px #090909, -60px 60px #090909, -61px 61px #090909, -62px 62px #090909, -63px 63px #090909, -64px 64px #090909, -65px 65px #090909, -66px 66px #090909, -67px 67px #090909, -68px 68px #090909, -69px 69px #090909, -70px 70px #090909, -71px 71px #090909, -72px 72px #090909, -73px 73px #090909, -74px 74px #090909, -75px 75px #090909, -76px 76px #090909, -77px 77px #090909, -78px 78px #090909, -79px 79px #090909, -80px 80px #090909, -81px 81px #090909, -82px 82px #090909, -83px 83px #090909, -84px 84px #090909, -85px 85px #090909;\n}\n.button-longshadow-left.button-inverse:active, .button-longshadow-left.button-inverse.active, .button-longshadow-left.button-inverse.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow-left.button-action {\n    text-shadow: 0px 0px #22b1e3, -1px 1px #22b1e3, -2px 2px #22b1e3, -3px 3px #22b1e3, -4px 4px #22b1e3, -5px 5px #22b1e3, -6px 6px #22b1e3, -7px 7px #22b1e3, -8px 8px #22b1e3, -9px 9px #22b1e3, -10px 10px #22b1e3, -11px 11px #22b1e3, -12px 12px #22b1e3, -13px 13px #22b1e3, -14px 14px #22b1e3, -15px 15px #22b1e3, -16px 16px #22b1e3, -17px 17px #22b1e3, -18px 18px #22b1e3, -19px 19px #22b1e3, -20px 20px #22b1e3, -21px 21px #22b1e3, -22px 22px #22b1e3, -23px 23px #22b1e3, -24px 24px #22b1e3, -25px 25px #22b1e3, -26px 26px #22b1e3, -27px 27px #22b1e3, -28px 28px #22b1e3, -29px 29px #22b1e3, -30px 30px #22b1e3, -31px 31px #22b1e3, -32px 32px #22b1e3, -33px 33px #22b1e3, -34px 34px #22b1e3, -35px 35px #22b1e3, -36px 36px #22b1e3, -37px 37px #22b1e3, -38px 38px #22b1e3, -39px 39px #22b1e3, -40px 40px #22b1e3, -41px 41px #22b1e3, -42px 42px #22b1e3, -43px 43px #22b1e3, -44px 44px #22b1e3, -45px 45px #22b1e3, -46px 46px #22b1e3, -47px 47px #22b1e3, -48px 48px #22b1e3, -49px 49px #22b1e3, -50px 50px #22b1e3, -51px 51px #22b1e3, -52px 52px #22b1e3, -53px 53px #22b1e3, -54px 54px #22b1e3, -55px 55px #22b1e3, -56px 56px #22b1e3, -57px 57px #22b1e3, -58px 58px #22b1e3, -59px 59px #22b1e3, -60px 60px #22b1e3, -61px 61px #22b1e3, -62px 62px #22b1e3, -63px 63px #22b1e3, -64px 64px #22b1e3, -65px 65px #22b1e3, -66px 66px #22b1e3, -67px 67px #22b1e3, -68px 68px #22b1e3, -69px 69px #22b1e3, -70px 70px #22b1e3, -71px 71px #22b1e3, -72px 72px #22b1e3, -73px 73px #22b1e3, -74px 74px #22b1e3, -75px 75px #22b1e3, -76px 76px #22b1e3, -77px 77px #22b1e3, -78px 78px #22b1e3, -79px 79px #22b1e3, -80px 80px #22b1e3, -81px 81px #22b1e3, -82px 82px #22b1e3, -83px 83px #22b1e3, -84px 84px #22b1e3, -85px 85px #22b1e3;\n}\n.button-longshadow-left.button-action:active, .button-longshadow-left.button-action.active, .button-longshadow-left.button-action.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow-left.button-highlight {\n    text-shadow: 0px 0px #ff9f2c, -1px 1px #ff9f2c, -2px 2px #ff9f2c, -3px 3px #ff9f2c, -4px 4px #ff9f2c, -5px 5px #ff9f2c, -6px 6px #ff9f2c, -7px 7px #ff9f2c, -8px 8px #ff9f2c, -9px 9px #ff9f2c, -10px 10px #ff9f2c, -11px 11px #ff9f2c, -12px 12px #ff9f2c, -13px 13px #ff9f2c, -14px 14px #ff9f2c, -15px 15px #ff9f2c, -16px 16px #ff9f2c, -17px 17px #ff9f2c, -18px 18px #ff9f2c, -19px 19px #ff9f2c, -20px 20px #ff9f2c, -21px 21px #ff9f2c, -22px 22px #ff9f2c, -23px 23px #ff9f2c, -24px 24px #ff9f2c, -25px 25px #ff9f2c, -26px 26px #ff9f2c, -27px 27px #ff9f2c, -28px 28px #ff9f2c, -29px 29px #ff9f2c, -30px 30px #ff9f2c, -31px 31px #ff9f2c, -32px 32px #ff9f2c, -33px 33px #ff9f2c, -34px 34px #ff9f2c, -35px 35px #ff9f2c, -36px 36px #ff9f2c, -37px 37px #ff9f2c, -38px 38px #ff9f2c, -39px 39px #ff9f2c, -40px 40px #ff9f2c, -41px 41px #ff9f2c, -42px 42px #ff9f2c, -43px 43px #ff9f2c, -44px 44px #ff9f2c, -45px 45px #ff9f2c, -46px 46px #ff9f2c, -47px 47px #ff9f2c, -48px 48px #ff9f2c, -49px 49px #ff9f2c, -50px 50px #ff9f2c, -51px 51px #ff9f2c, -52px 52px #ff9f2c, -53px 53px #ff9f2c, -54px 54px #ff9f2c, -55px 55px #ff9f2c, -56px 56px #ff9f2c, -57px 57px #ff9f2c, -58px 58px #ff9f2c, -59px 59px #ff9f2c, -60px 60px #ff9f2c, -61px 61px #ff9f2c, -62px 62px #ff9f2c, -63px 63px #ff9f2c, -64px 64px #ff9f2c, -65px 65px #ff9f2c, -66px 66px #ff9f2c, -67px 67px #ff9f2c, -68px 68px #ff9f2c, -69px 69px #ff9f2c, -70px 70px #ff9f2c, -71px 71px #ff9f2c, -72px 72px #ff9f2c, -73px 73px #ff9f2c, -74px 74px #ff9f2c, -75px 75px #ff9f2c, -76px 76px #ff9f2c, -77px 77px #ff9f2c, -78px 78px #ff9f2c, -79px 79px #ff9f2c, -80px 80px #ff9f2c, -81px 81px #ff9f2c, -82px 82px #ff9f2c, -83px 83px #ff9f2c, -84px 84px #ff9f2c, -85px 85px #ff9f2c;\n}\n.button-longshadow-left.button-highlight:active, .button-longshadow-left.button-highlight.active, .button-longshadow-left.button-highlight.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow-left.button-caution {\n    text-shadow: 0px 0px #fa5a46, -1px 1px #fa5a46, -2px 2px #fa5a46, -3px 3px #fa5a46, -4px 4px #fa5a46, -5px 5px #fa5a46, -6px 6px #fa5a46, -7px 7px #fa5a46, -8px 8px #fa5a46, -9px 9px #fa5a46, -10px 10px #fa5a46, -11px 11px #fa5a46, -12px 12px #fa5a46, -13px 13px #fa5a46, -14px 14px #fa5a46, -15px 15px #fa5a46, -16px 16px #fa5a46, -17px 17px #fa5a46, -18px 18px #fa5a46, -19px 19px #fa5a46, -20px 20px #fa5a46, -21px 21px #fa5a46, -22px 22px #fa5a46, -23px 23px #fa5a46, -24px 24px #fa5a46, -25px 25px #fa5a46, -26px 26px #fa5a46, -27px 27px #fa5a46, -28px 28px #fa5a46, -29px 29px #fa5a46, -30px 30px #fa5a46, -31px 31px #fa5a46, -32px 32px #fa5a46, -33px 33px #fa5a46, -34px 34px #fa5a46, -35px 35px #fa5a46, -36px 36px #fa5a46, -37px 37px #fa5a46, -38px 38px #fa5a46, -39px 39px #fa5a46, -40px 40px #fa5a46, -41px 41px #fa5a46, -42px 42px #fa5a46, -43px 43px #fa5a46, -44px 44px #fa5a46, -45px 45px #fa5a46, -46px 46px #fa5a46, -47px 47px #fa5a46, -48px 48px #fa5a46, -49px 49px #fa5a46, -50px 50px #fa5a46, -51px 51px #fa5a46, -52px 52px #fa5a46, -53px 53px #fa5a46, -54px 54px #fa5a46, -55px 55px #fa5a46, -56px 56px #fa5a46, -57px 57px #fa5a46, -58px 58px #fa5a46, -59px 59px #fa5a46, -60px 60px #fa5a46, -61px 61px #fa5a46, -62px 62px #fa5a46, -63px 63px #fa5a46, -64px 64px #fa5a46, -65px 65px #fa5a46, -66px 66px #fa5a46, -67px 67px #fa5a46, -68px 68px #fa5a46, -69px 69px #fa5a46, -70px 70px #fa5a46, -71px 71px #fa5a46, -72px 72px #fa5a46, -73px 73px #fa5a46, -74px 74px #fa5a46, -75px 75px #fa5a46, -76px 76px #fa5a46, -77px 77px #fa5a46, -78px 78px #fa5a46, -79px 79px #fa5a46, -80px 80px #fa5a46, -81px 81px #fa5a46, -82px 82px #fa5a46, -83px 83px #fa5a46, -84px 84px #fa5a46, -85px 85px #fa5a46;\n}\n.button-longshadow-left.button-caution:active, .button-longshadow-left.button-caution.active, .button-longshadow-left.button-caution.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow-left.button-royal {\n    text-shadow: 0px 0px #1baa7d, -1px 1px #1baa7d, -2px 2px #1baa7d, -3px 3px #1baa7d, -4px 4px #1baa7d, -5px 5px #1baa7d, -6px 6px #1baa7d, -7px 7px #1baa7d, -8px 8px #1baa7d, -9px 9px #1baa7d, -10px 10px #1baa7d, -11px 11px #1baa7d, -12px 12px #1baa7d, -13px 13px #1baa7d, -14px 14px #1baa7d, -15px 15px #1baa7d, -16px 16px #1baa7d, -17px 17px #1baa7d, -18px 18px #1baa7d, -19px 19px #1baa7d, -20px 20px #1baa7d, -21px 21px #1baa7d, -22px 22px #1baa7d, -23px 23px #1baa7d, -24px 24px #1baa7d, -25px 25px #1baa7d, -26px 26px #1baa7d, -27px 27px #1baa7d, -28px 28px #1baa7d, -29px 29px #1baa7d, -30px 30px #1baa7d, -31px 31px #1baa7d, -32px 32px #1baa7d, -33px 33px #1baa7d, -34px 34px #1baa7d, -35px 35px #1baa7d, -36px 36px #1baa7d, -37px 37px #1baa7d, -38px 38px #1baa7d, -39px 39px #1baa7d, -40px 40px #1baa7d, -41px 41px #1baa7d, -42px 42px #1baa7d, -43px 43px #1baa7d, -44px 44px #1baa7d, -45px 45px #1baa7d, -46px 46px #1baa7d, -47px 47px #1baa7d, -48px 48px #1baa7d, -49px 49px #1baa7d, -50px 50px #1baa7d, -51px 51px #1baa7d, -52px 52px #1baa7d, -53px 53px #1baa7d, -54px 54px #1baa7d, -55px 55px #1baa7d, -56px 56px #1baa7d, -57px 57px #1baa7d, -58px 58px #1baa7d, -59px 59px #1baa7d, -60px 60px #1baa7d, -61px 61px #1baa7d, -62px 62px #1baa7d, -63px 63px #1baa7d, -64px 64px #1baa7d, -65px 65px #1baa7d, -66px 66px #1baa7d, -67px 67px #1baa7d, -68px 68px #1baa7d, -69px 69px #1baa7d, -70px 70px #1baa7d, -71px 71px #1baa7d, -72px 72px #1baa7d, -73px 73px #1baa7d, -74px 74px #1baa7d, -75px 75px #1baa7d, -76px 76px #1baa7d, -77px 77px #1baa7d, -78px 78px #1baa7d, -79px 79px #1baa7d, -80px 80px #1baa7d, -81px 81px #1baa7d, -82px 82px #1baa7d, -83px 83px #1baa7d, -84px 84px #1baa7d, -85px 85px #1baa7d;\n}\n.button-longshadow-left.button-royal:active, .button-longshadow-left.button-royal.active, .button-longshadow-left.button-royal.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n\n/*\n* Button Sizes\n*\n* This file creates the various button sizes\n* (ex. .button-large, .button-small, etc.)\n*/\n.button-giant {\n  font-size: 28px;\n  height: 70px;\n  line-height: 70px;\n  padding: 0 70px;\n}\n.button-jumbo {\n  font-size: 24px;\n  height: 60px;\n  line-height: 60px;\n  padding: 0 60px;\n}\n.button-large {\n  font-size: 20px;\n  height: 50px;\n  line-height: 50px;\n  padding: 0 50px;\n}\n.button-normal {\n  font-size: 16px;\n  height: 40px;\n  line-height: 40px;\n  padding: 0 40px;\n}\n.button-small {\n  font-size: 12px;\n  height: 30px;\n  line-height: 30px;\n  padding: 0 30px;\n}\n.button-tiny {\n  font-size: 9.6px;\n  height: 24px;\n  line-height: 24px;\n  padding: 0 24px;\n}\na:hover,\na:focus {\n  color: #000;\n}\n", ""]);

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.ladda-spinner div {\r\n    top: 5px !important;\r\n    left: 5px !important;\n}\r\n", ""]);

/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "/* flatbuttons */\nli {\r\n    list-style : none;\n}\n.flatbuttons {\r\n    padding-left : 4%;\n}\n.flatbuttons ul {\r\n    padding : 20px;\n}\n.flatbuttons ul li {\r\n    width      : 145px;\r\n    float      : left;\r\n    padding    : 5px;\r\n    list-style : none;\n}\n.flatbuttons div {\r\n    clear          : both;\r\n    padding-top    : 15px;\r\n    padding-bottom : 0;\n}\n.btn-rounded .button {\r\n    padding : 0 18px;\n}\n.flatbuttons .icon-btn {\r\n    padding : 0 29px;\n}\r\n/* flatbuttons for small width. */\n.flatbuttons_small ul li {\r\n    width   : 138px;\r\n    float   : left;\r\n    padding : 10px 20px 20px 0;\n}\r\n/*quick icons*/\n.panel-body .btn:not(.btn-block) {\r\n    margin-bottom : 10px;\n}\r\n/*Group buttons panel*/\n.ui-group-buttons .or {\r\n    position  : relative;\r\n    float     : left;\r\n    width     : .3em;\r\n    height    : 1.3em;\r\n    z-index   : 3;\r\n    font-size : 12px\n}\n.ui-group-buttons .or:before {\r\n    position           : absolute;\r\n    top                : 50%;\r\n    left               : 50%;\r\n    content            : 'or';\r\n    background-color   : #5a5a5a;\r\n    margin-top         : -.1em;\r\n    margin-left        : -.9em;\r\n    width              : 1.8em;\r\n    height             : 1.8em;\r\n    line-height        : 1.55;\r\n    color              : #fff;\r\n    font-style         : normal;\r\n    font-weight        : 400;\r\n    text-align         : center;\r\n    border-radius      : 500px;\r\n    box-shadow         : 0 0 0 1px rgba(0, 0, 0, 0.1);\r\n    box-sizing         : border-box\n}\n.ui-group-buttons .or:after {\r\n    position         : absolute;\r\n    top              : 0;\r\n    left             : 0;\r\n    content          : ' ';\r\n    width            : .3em;\r\n    height           : 2.84em;\r\n    background-color : rgba(0, 0, 0, 0);\r\n    border-top       : .6em solid #5a5a5a;\r\n    border-bottom    : .6em solid #5a5a5a\n}\n.ui-group-buttons .or.or-lg {\r\n    height    : 1.3em;\r\n    font-size : 16px\n}\n.ui-group-buttons .or.or-lg:after {\r\n    height : 2.85em\n}\n.ui-group-buttons .or.or-sm {\r\n    height : 1em\n}\n.ui-group-buttons .or.or-sm:after {\r\n    height : 2.5em\n}\n.ui-group-buttons .or.or-xs {\r\n    height : .25em\n}\n.ui-group-buttons .or.or-xs:after {\r\n    height  : 1.84em;\r\n    z-index : -1000\n}\n.ui-group-buttons {\r\n    display        : inline-block;\r\n    vertical-align : middle\n}\n.ui-group-buttons:after {\r\n    content    : \".\";\r\n    display    : block;\r\n    height     : 0;\r\n    clear      : both;\r\n    visibility : hidden\n}\n.ui-group-buttons .btn {\r\n    float         : left;\r\n    border-radius : 0\n}\n.ui-group-buttons .btn:first-child {\r\n    margin-left               : 0;\r\n    border-top-left-radius    : .25em;\r\n    border-bottom-left-radius : .25em;\r\n    padding-right             : 15px\n}\n.ui-group-buttons .btn:last-child {\r\n    border-top-right-radius    : .25em;\r\n    border-bottom-right-radius : .25em;\r\n    padding-left               : 15px\n}\r\n/*Group buttons panel ens here*/\r\n\r\n/*Buttons With Labels*/\n.btn-label {\r\n    position   : relative;\r\n    left       : -12px;\r\n    display    : inline-block;\r\n    padding    : 6px 15px;\r\n    background : rgba(0, 0, 0, 0.15);\r\n    /*border-radius: 3px 0 0 3px;*/\n}\n.btn-label.label-right {\r\n    left : 13px;\n}\n.btn-labeled {\r\n    padding-top    : 0;\r\n    padding-bottom : 0;\n}\n.btn_3d {\r\n    box-shadow : 0 7px 0 #bbbbbb, 0 8px 3px rgba(0, 0, 0, 0.2) !important;\n}\n.button-circle {\r\n    width  : 115px;\r\n    height : 115px;\n}\r\n/*outline buttons*/\n.flatbuttons button {\r\n    margin-top : 20px;\n}\n.btn-up:before {\r\n    left                : 11%;\r\n    top                 : 373px;\r\n    margin-left         : -8px;\r\n    border-bottom-color : #6699cc;\n}\n.btn-direction:before {\r\n    position    : absolute;\r\n    line-height : 0;\r\n    content     : '';\r\n    border      : 8px solid transparent;\n}\n.btn-primary.btn-up:before {\r\n    border-bottom-color : #6699cc;\n}\n.btn-warning.btn-right:focus:before,\r\n.btn-warning.btn-right:hover:before {\r\n    border-left-color : #f0ad4e;\n}\n.btn-warning.btn-right:before {\r\n    border-left-color : #f0ad4e;\n}\n.btn-right:before {\r\n    top               : 56%;\r\n    left              : 33%;\r\n    margin-top        : -8px;\r\n    border-left-color : #e4eaec;\n}\n.btn-success.btn-bottom:before {\r\n    border-top-color : #66cc99;\n}\n.btn-bottom:before {\r\n    bottom           : 39.1%;\r\n    left             : 47%;\r\n    margin-left      : -8px;\r\n    border-top-color : #66cc99;\n}\n.btn-danger.btn-left:before {\r\n    border-right-color : #ff6666;\n}\n.btn-left:before {\r\n    top                : 56%;\r\n    left               : 58.8%;\r\n    margin-top         : -8px;\r\n    border-right-color : #ff6666;\n}\r\n/*animate button*/\n.btn-animate-side:hover span > .icon {\r\n    opacity : 1;\n}\n.btn-animate-side span > .icon {\r\n    position           : absolute;\r\n    top                : 91%;\r\n    left               : 90px;\r\n    display            : block;\r\n    opacity            : 0;\r\n    transition         : opacity .2s ease-out 0s;\r\n    -webkit-transform  : translate(-20px, -50%);\r\n    transform          : translate(-20px, -50%);\n}\n.btn-animate-vertical:hover span > .icon {\r\n    opacity : 1;\n}\n.btn-animate-vertical span > .icon {\r\n    position          : absolute;\r\n    top               : inherit;\r\n    left              : 33%;\r\n    display           : block;\r\n    font-size         : 24px;\r\n    -webkit-transform : translate(-50%, -100%);\r\n    transform         : translate(-50%, -100%);\n}\n.btn .icon {\r\n    width       : 1em;\r\n    margin      : -1px 3px 0;\r\n    line-height : inherit;\r\n    text-align  : center;\n}\n.btn-animate span {\r\n    display : block;\r\n    width   : 100%;\r\n    height  : 100%;\n}\n.btn-animate-side span:hover {\r\n    transition : -webkit-transform .2s ease-out 0s;\r\n    transition : transform .2s ease-out 0s;\r\n    transition         : transform .2s ease-out 0s, -webkit-transform .2s ease-out 0s;\n}\n.btn-animate-side:hover {\r\n    padding : 8px 28px;\n}\r\n/* vertical animation code*/\n.btn-animate-vertical span {\r\n    transition         : all .2s ease-out 0s;\n}\n.btn-animate-vertical:focus,\r\n.btn-animate-vertical:active,\r\n.btn-animate-vertical:hover {\r\n    outline : none;\n}\n.btn-animate-vertical span > .icon {\r\n    opacity           : 0;\r\n    position          : absolute;\r\n    top               : -2px;\r\n    left              : 50%;\r\n    display           : block;\r\n    font-size         : 24px;\r\n    -webkit-transform : translate(-50%, -100%);\r\n    transform         : translate(-50%, -100%);\n}\n.btn-animate-vertical:hover span {\r\n    -webkit-transform : translate(0, 150%);\r\n    transform         : translate(0, 150%)\n}\n.btn-animate-vertical.btn-xs span > .icon {\r\n    top       : -5px;\r\n    font-size : 18px\n}\n.btn-animate-vertical.btn-sm span > .icon {\r\n    top       : -3px;\r\n    font-size : 21px\n}\n.btn-animate-vertical.btn-lg span > .icon {\r\n    font-size : 37px\n}\r\n/*side animation code*/\n.btn-animate-side {\r\n    padding : 8px 28px\n}\n.btn-animate-side span {\r\n    transition : -webkit-transform .2s ease-out 0s;\r\n    transition : transform .2s ease-out 0s;\r\n    transition         : transform .2s ease-out 0s, -webkit-transform .2s ease-out 0s\n}\n.btn-animate-side span > .icon {\r\n    position           : absolute;\r\n    top                : 50%;\r\n    left               : 0;\r\n    display            : block;\r\n    opacity            : 0;\r\n    transition         : opacity .2s ease-out 0s;\r\n    -webkit-transform  : translate(-20px, -50%);\r\n    transform          : translate(-20px, -50%)\n}\n.btn-animate-side:hover span {\r\n    -webkit-transform : translate(10px, 0);\r\n    transform         : translate(10px, 0)\n}\n.btn-animate-side:hover span > .icon {\r\n    opacity : 1\n}\n.btn-animate-side.btn-xs {\r\n    padding : 3px 14px\n}\n.btn-animate-side.btn-xs span > .icon {\r\n    left : 5px\n}\n.btn-animate-side.btn-xs:hover span {\r\n    -webkit-transform : translate(8px, 0);\r\n    transform         : translate(8px, 0)\n}\n.btn-animate-side.btn-sm {\r\n    padding : 6px 22px\n}\n.btn-animate-side.btn-sm span > .icon {\r\n    left : 3px\n}\n.btn-animate-side.btn-sm:hover span {\r\n    -webkit-transform : translate(8px, 0);\r\n    transform         : translate(8px, 0)\n}\n.btn-animate-side.btn-lg {\r\n    padding : 10px 33px\n}\n.btn-animate-side.btn-lg span > .icon {\r\n    left : -6px\n}\n.btn-animate-side.btn-lg:hover span {\r\n    -webkit-transform : translate(14px, 0);\r\n    transform         : translate(14px, 0)\n}\n.btn-floating {\r\n    width              : 56px;\r\n    height             : 56px;\r\n    padding            : 0;\r\n    margin             : 0;\r\n    font-size          : 24px;\r\n    text-align         : center;\r\n    border-radius      : 100%;\r\n    box-shadow         : 0 6px 10px rgba(0, 0, 0, .15);\n}\n.btn-floating.btn-sm {\r\n    width     : 40px;\r\n    height    : 40px;\r\n    padding   : 0;\r\n    font-size : 15px;\n}\r\n/*contract overlay button size*/\n.ladda-button[data-style=contract-overlay] {\r\n    width : 140px;\n}\n.pad_left {\r\n    padding-left : 40px;\n}\n.flatbuttons div {\r\n    padding-top : 10px;\n}\n.m-r-50 {\r\n    margin-right : 50px;\n}\n.btn-group.drop_btn {\r\n    padding-top : 0;\n}", ""]);

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "/*!\n * Hover.css (http://ianlunn.github.io/Hover/)\n * Version: 2.0.1\n * Author: Ian Lunn @IanLunn\n * Author URL: http://ianlunn.co.uk/\n * Github: https://github.com/IanLunn/Hover\n\n * Made available under a MIT License:\n * http://www.opensource.org/licenses/mit-license.php\n\n * Hover.css Copyright Ian Lunn 2014. Generated with Sass.\n */\n.hvr-grow{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform\n}\n.hvr-grow:active,.hvr-grow:focus,.hvr-grow:hover{-webkit-transform:scale(1.1);transform:scale(1.1)\n}\n.hvr-shrink{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform\n}\n.hvr-shrink:active,.hvr-shrink:focus,.hvr-shrink:hover{-webkit-transform:scale(0.9);transform:scale(0.9)\n}\n@-webkit-keyframes hvr-pulse{\n25%{-webkit-transform:scale(1.1);transform:scale(1.1)\n}\n75%{-webkit-transform:scale(0.9);transform:scale(0.9)\n}\n}\n@keyframes hvr-pulse{\n25%{-webkit-transform:scale(1.1);transform:scale(1.1)\n}\n75%{-webkit-transform:scale(0.9);transform:scale(0.9)\n}\n}\n.hvr-pulse{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale\n}\n.hvr-pulse:active,.hvr-pulse:focus,.hvr-pulse:hover{-webkit-animation-name:hvr-pulse;animation-name:hvr-pulse;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n@-webkit-keyframes hvr-pulse-grow{\nto{-webkit-transform:scale(1.1);transform:scale(1.1)\n}\n}\n@keyframes hvr-pulse-grow{\nto{-webkit-transform:scale(1.1);transform:scale(1.1)\n}\n}\n.hvr-pulse-grow{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale\n}\n.hvr-pulse-grow:active,.hvr-pulse-grow:focus,.hvr-pulse-grow:hover{-webkit-animation-name:hvr-pulse-grow;animation-name:hvr-pulse-grow;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate\n}\n@-webkit-keyframes hvr-pulse-shrink{\nto{-webkit-transform:scale(0.9);transform:scale(0.9)\n}\n}\n@keyframes hvr-pulse-shrink{\nto{-webkit-transform:scale(0.9);transform:scale(0.9)\n}\n}\n.hvr-pulse-shrink{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale\n}\n.hvr-pulse-shrink:active,.hvr-pulse-shrink:focus,.hvr-pulse-shrink:hover{-webkit-animation-name:hvr-pulse-shrink;animation-name:hvr-pulse-shrink;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate\n}\n@-webkit-keyframes hvr-push{\n50%{-webkit-transform:scale(0.8);transform:scale(0.8)\n}\n100%{-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes hvr-push{\n50%{-webkit-transform:scale(0.8);transform:scale(0.8)\n}\n100%{-webkit-transform:scale(1);transform:scale(1)\n}\n}\n.hvr-push{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale\n}\n.hvr-push:active,.hvr-push:focus,.hvr-push:hover{-webkit-animation-name:hvr-push;animation-name:hvr-push;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n@-webkit-keyframes hvr-pop{\n50%{-webkit-transform:scale(1.2);transform:scale(1.2)\n}\n}\n@keyframes hvr-pop{\n50%{-webkit-transform:scale(1.2);transform:scale(1.2)\n}\n}\n.hvr-pop{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale\n}\n.hvr-pop:active,.hvr-pop:focus,.hvr-pop:hover{-webkit-animation-name:hvr-pop;animation-name:hvr-pop;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n.hvr-bounce-in{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;transition-duration:.5s\n}\n.hvr-bounce-in:active,.hvr-bounce-in:focus,.hvr-bounce-in:hover{-webkit-transform:scale(1.2);transform:scale(1.2);transition-timing-function:cubic-bezier(0.47,2.02,.31,-.36)\n}\n.hvr-bounce-out{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;transition-duration:.5s\n}\n.hvr-bounce-out:active,.hvr-bounce-out:focus,.hvr-bounce-out:hover{-webkit-transform:scale(0.8);transform:scale(0.8);transition-timing-function:cubic-bezier(0.47,2.02,.31,-.36)\n}\n.hvr-rotate{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform\n}\n.hvr-rotate:active,.hvr-rotate:focus,.hvr-rotate:hover{-webkit-transform:rotate(4deg);transform:rotate(4deg)\n}\n.hvr-grow-rotate{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform\n}\n.hvr-grow-rotate:active,.hvr-grow-rotate:focus,.hvr-grow-rotate:hover{-webkit-transform:scale(1.1) rotate(4deg);transform:scale(1.1) rotate(4deg)\n}\n.hvr-float{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-timing-function:ease-out\n}\n.hvr-float:active,.hvr-float:focus,.hvr-float:hover{-webkit-transform:translateY(-8px);transform:translateY(-8px)\n}\n.hvr-sink{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-timing-function:ease-out\n}\n.hvr-sink:active,.hvr-sink:focus,.hvr-sink:hover{-webkit-transform:translateY(8px);transform:translateY(8px)\n}\n@-webkit-keyframes hvr-bob{\n0%{-webkit-transform:translateY(-8px);transform:translateY(-8px)\n}\n50%{-webkit-transform:translateY(-4px);transform:translateY(-4px)\n}\n100%{-webkit-transform:translateY(-8px);transform:translateY(-8px)\n}\n}\n@keyframes hvr-bob{\n0%{-webkit-transform:translateY(-8px);transform:translateY(-8px)\n}\n50%{-webkit-transform:translateY(-4px);transform:translateY(-4px)\n}\n100%{-webkit-transform:translateY(-8px);transform:translateY(-8px)\n}\n}\n@-webkit-keyframes hvr-bob-float{\n100%{-webkit-transform:translateY(-8px);transform:translateY(-8px)\n}\n}\n@keyframes hvr-bob-float{\n100%{-webkit-transform:translateY(-8px);transform:translateY(-8px)\n}\n}\n.hvr-bob{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale\n}\n.hvr-bob:active,.hvr-bob:focus,.hvr-bob:hover{-webkit-animation-name:hvr-bob-float,hvr-bob;animation-name:hvr-bob-float,hvr-bob;-webkit-animation-duration:.3s,1.5s;animation-duration:.3s,1.5s;-webkit-animation-delay:0s,.3s;animation-delay:0s,.3s;-webkit-animation-timing-function:ease-out,ease-in-out;animation-timing-function:ease-out,ease-in-out;-webkit-animation-iteration-count:1,infinite;animation-iteration-count:1,infinite;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-direction:normal,alternate;animation-direction:normal,alternate\n}\n@-webkit-keyframes hvr-hang{\n0%{-webkit-transform:translateY(8px);transform:translateY(8px)\n}\n50%{-webkit-transform:translateY(4px);transform:translateY(4px)\n}\n100%{-webkit-transform:translateY(8px);transform:translateY(8px)\n}\n}\n@keyframes hvr-hang{\n0%{-webkit-transform:translateY(8px);transform:translateY(8px)\n}\n50%{-webkit-transform:translateY(4px);transform:translateY(4px)\n}\n100%{-webkit-transform:translateY(8px);transform:translateY(8px)\n}\n}\n@-webkit-keyframes hvr-hang-sink{\n100%{-webkit-transform:translateY(8px);transform:translateY(8px)\n}\n}\n@keyframes hvr-hang-sink{\n100%{-webkit-transform:translateY(8px);transform:translateY(8px)\n}\n}\n.hvr-hang{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale\n}\n.hvr-hang:active,.hvr-hang:focus,.hvr-hang:hover{-webkit-animation-name:hvr-hang-sink,hvr-hang;animation-name:hvr-hang-sink,hvr-hang;-webkit-animation-duration:.3s,1.5s;animation-duration:.3s,1.5s;-webkit-animation-delay:0s,.3s;animation-delay:0s,.3s;-webkit-animation-timing-function:ease-out,ease-in-out;animation-timing-function:ease-out,ease-in-out;-webkit-animation-iteration-count:1,infinite;animation-iteration-count:1,infinite;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-direction:normal,alternate;animation-direction:normal,alternate\n}\n.hvr-skew{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform\n}\n.hvr-skew:active,.hvr-skew:focus,.hvr-skew:hover{-webkit-transform:skew(-10deg);transform:skew(-10deg)\n}\n.hvr-skew-forward{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;-webkit-transform-origin:0 100%;transform-origin:0 100%\n}\n.hvr-skew-forward:active,.hvr-skew-forward:focus,.hvr-skew-forward:hover{-webkit-transform:skew(-10deg);transform:skew(-10deg)\n}\n.hvr-skew-backward{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;-webkit-transform-origin:0 100%;transform-origin:0 100%\n}\n.hvr-skew-backward:active,.hvr-skew-backward:focus,.hvr-skew-backward:hover{-webkit-transform:skew(10deg);transform:skew(10deg)\n}\n@-webkit-keyframes hvr-wobble-vertical{\n16.65%{-webkit-transform:translateY(8px);transform:translateY(8px)\n}\n33.3%{-webkit-transform:translateY(-6px);transform:translateY(-6px)\n}\n49.95%{-webkit-transform:translateY(4px);transform:translateY(4px)\n}\n66.6%{-webkit-transform:translateY(-2px);transform:translateY(-2px)\n}\n83.25%{-webkit-transform:translateY(1px);transform:translateY(1px)\n}\n100%{-webkit-transform:translateY(0);transform:translateY(0)\n}\n}\n@keyframes hvr-wobble-vertical{\n16.65%{-webkit-transform:translateY(8px);transform:translateY(8px)\n}\n33.3%{-webkit-transform:translateY(-6px);transform:translateY(-6px)\n}\n49.95%{-webkit-transform:translateY(4px);transform:translateY(4px)\n}\n66.6%{-webkit-transform:translateY(-2px);transform:translateY(-2px)\n}\n83.25%{-webkit-transform:translateY(1px);transform:translateY(1px)\n}\n100%{-webkit-transform:translateY(0);transform:translateY(0)\n}\n}\n.hvr-wobble-vertical{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale\n}\n.hvr-wobble-vertical:active,.hvr-wobble-vertical:focus,.hvr-wobble-vertical:hover{-webkit-animation-name:hvr-wobble-vertical;animation-name:hvr-wobble-vertical;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n@-webkit-keyframes hvr-wobble-horizontal{\n16.65%{-webkit-transform:translateX(8px);transform:translateX(8px)\n}\n33.3%{-webkit-transform:translateX(-6px);transform:translateX(-6px)\n}\n49.95%{-webkit-transform:translateX(4px);transform:translateX(4px)\n}\n66.6%{-webkit-transform:translateX(-2px);transform:translateX(-2px)\n}\n83.25%{-webkit-transform:translateX(1px);transform:translateX(1px)\n}\n100%{-webkit-transform:translateX(0);transform:translateX(0)\n}\n}\n@keyframes hvr-wobble-horizontal{\n16.65%{-webkit-transform:translateX(8px);transform:translateX(8px)\n}\n33.3%{-webkit-transform:translateX(-6px);transform:translateX(-6px)\n}\n49.95%{-webkit-transform:translateX(4px);transform:translateX(4px)\n}\n66.6%{-webkit-transform:translateX(-2px);transform:translateX(-2px)\n}\n83.25%{-webkit-transform:translateX(1px);transform:translateX(1px)\n}\n100%{-webkit-transform:translateX(0);transform:translateX(0)\n}\n}\n.hvr-wobble-horizontal{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale\n}\n.hvr-wobble-horizontal:active,.hvr-wobble-horizontal:focus,.hvr-wobble-horizontal:hover{-webkit-animation-name:hvr-wobble-horizontal;animation-name:hvr-wobble-horizontal;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n@-webkit-keyframes hvr-wobble-to-bottom-right{\n16.65%{-webkit-transform:translate(8px,8px);transform:translate(8px,8px)\n}\n33.3%{-webkit-transform:translate(-6px,-6px);transform:translate(-6px,-6px)\n}\n49.95%{-webkit-transform:translate(4px,4px);transform:translate(4px,4px)\n}\n66.6%{-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)\n}\n83.25%{-webkit-transform:translate(1px,1px);transform:translate(1px,1px)\n}\n100%{-webkit-transform:translate(0,0);transform:translate(0,0)\n}\n}\n@keyframes hvr-wobble-to-bottom-right{\n16.65%{-webkit-transform:translate(8px,8px);transform:translate(8px,8px)\n}\n33.3%{-webkit-transform:translate(-6px,-6px);transform:translate(-6px,-6px)\n}\n49.95%{-webkit-transform:translate(4px,4px);transform:translate(4px,4px)\n}\n66.6%{-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)\n}\n83.25%{-webkit-transform:translate(1px,1px);transform:translate(1px,1px)\n}\n100%{-webkit-transform:translate(0,0);transform:translate(0,0)\n}\n}\n.hvr-wobble-to-bottom-right{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale\n}\n.hvr-wobble-to-bottom-right:active,.hvr-wobble-to-bottom-right:focus,.hvr-wobble-to-bottom-right:hover{-webkit-animation-name:hvr-wobble-to-bottom-right;animation-name:hvr-wobble-to-bottom-right;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n@-webkit-keyframes hvr-wobble-to-top-right{\n16.65%{-webkit-transform:translate(8px,-8px);transform:translate(8px,-8px)\n}\n33.3%{-webkit-transform:translate(-6px,6px);transform:translate(-6px,6px)\n}\n49.95%{-webkit-transform:translate(4px,-4px);transform:translate(4px,-4px)\n}\n66.6%{-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)\n}\n83.25%{-webkit-transform:translate(1px,-1px);transform:translate(1px,-1px)\n}\n100%{-webkit-transform:translate(0,0);transform:translate(0,0)\n}\n}\n@keyframes hvr-wobble-to-top-right{\n16.65%{-webkit-transform:translate(8px,-8px);transform:translate(8px,-8px)\n}\n33.3%{-webkit-transform:translate(-6px,6px);transform:translate(-6px,6px)\n}\n49.95%{-webkit-transform:translate(4px,-4px);transform:translate(4px,-4px)\n}\n66.6%{-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)\n}\n83.25%{-webkit-transform:translate(1px,-1px);transform:translate(1px,-1px)\n}\n100%{-webkit-transform:translate(0,0);transform:translate(0,0)\n}\n}\n.hvr-wobble-to-top-right{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale\n}\n.hvr-wobble-to-top-right:active,.hvr-wobble-to-top-right:focus,.hvr-wobble-to-top-right:hover{-webkit-animation-name:hvr-wobble-to-top-right;animation-name:hvr-wobble-to-top-right;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n@-webkit-keyframes hvr-wobble-top{\n16.65%{-webkit-transform:skew(-12deg);transform:skew(-12deg)\n}\n33.3%{-webkit-transform:skew(10deg);transform:skew(10deg)\n}\n49.95%{-webkit-transform:skew(-6deg);transform:skew(-6deg)\n}\n66.6%{-webkit-transform:skew(4deg);transform:skew(4deg)\n}\n83.25%{-webkit-transform:skew(-2deg);transform:skew(-2deg)\n}\n100%{-webkit-transform:skew(0);transform:skew(0)\n}\n}\n@keyframes hvr-wobble-top{\n16.65%{-webkit-transform:skew(-12deg);transform:skew(-12deg)\n}\n33.3%{-webkit-transform:skew(10deg);transform:skew(10deg)\n}\n49.95%{-webkit-transform:skew(-6deg);transform:skew(-6deg)\n}\n66.6%{-webkit-transform:skew(4deg);transform:skew(4deg)\n}\n83.25%{-webkit-transform:skew(-2deg);transform:skew(-2deg)\n}\n100%{-webkit-transform:skew(0);transform:skew(0)\n}\n}\n.hvr-wobble-top{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;-webkit-transform-origin:0 100%;transform-origin:0 100%\n}\n.hvr-wobble-top:active,.hvr-wobble-top:focus,.hvr-wobble-top:hover{-webkit-animation-name:hvr-wobble-top;animation-name:hvr-wobble-top;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n@-webkit-keyframes hvr-wobble-bottom{\n16.65%{-webkit-transform:skew(-12deg);transform:skew(-12deg)\n}\n33.3%{-webkit-transform:skew(10deg);transform:skew(10deg)\n}\n49.95%{-webkit-transform:skew(-6deg);transform:skew(-6deg)\n}\n66.6%{-webkit-transform:skew(4deg);transform:skew(4deg)\n}\n83.25%{-webkit-transform:skew(-2deg);transform:skew(-2deg)\n}\n100%{-webkit-transform:skew(0);transform:skew(0)\n}\n}\n@keyframes hvr-wobble-bottom{\n16.65%{-webkit-transform:skew(-12deg);transform:skew(-12deg)\n}\n33.3%{-webkit-transform:skew(10deg);transform:skew(10deg)\n}\n49.95%{-webkit-transform:skew(-6deg);transform:skew(-6deg)\n}\n66.6%{-webkit-transform:skew(4deg);transform:skew(4deg)\n}\n83.25%{-webkit-transform:skew(-2deg);transform:skew(-2deg)\n}\n100%{-webkit-transform:skew(0);transform:skew(0)\n}\n}\n.hvr-wobble-bottom{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;-webkit-transform-origin:100% 0;transform-origin:100% 0\n}\n.hvr-wobble-bottom:active,.hvr-wobble-bottom:focus,.hvr-wobble-bottom:hover{-webkit-animation-name:hvr-wobble-bottom;animation-name:hvr-wobble-bottom;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n@-webkit-keyframes hvr-wobble-skew{\n16.65%{-webkit-transform:skew(-12deg);transform:skew(-12deg)\n}\n33.3%{-webkit-transform:skew(10deg);transform:skew(10deg)\n}\n49.95%{-webkit-transform:skew(-6deg);transform:skew(-6deg)\n}\n66.6%{-webkit-transform:skew(4deg);transform:skew(4deg)\n}\n83.25%{-webkit-transform:skew(-2deg);transform:skew(-2deg)\n}\n100%{-webkit-transform:skew(0);transform:skew(0)\n}\n}\n@keyframes hvr-wobble-skew{\n16.65%{-webkit-transform:skew(-12deg);transform:skew(-12deg)\n}\n33.3%{-webkit-transform:skew(10deg);transform:skew(10deg)\n}\n49.95%{-webkit-transform:skew(-6deg);transform:skew(-6deg)\n}\n66.6%{-webkit-transform:skew(4deg);transform:skew(4deg)\n}\n83.25%{-webkit-transform:skew(-2deg);transform:skew(-2deg)\n}\n100%{-webkit-transform:skew(0);transform:skew(0)\n}\n}\n.hvr-wobble-skew{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale\n}\n.hvr-wobble-skew:active,.hvr-wobble-skew:focus,.hvr-wobble-skew:hover{-webkit-animation-name:hvr-wobble-skew;animation-name:hvr-wobble-skew;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n@-webkit-keyframes hvr-buzz{\n50%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)\n}\n100%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)\n}\n}\n@keyframes hvr-buzz{\n50%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)\n}\n100%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)\n}\n}\n.hvr-buzz{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale\n}\n.hvr-buzz:active,.hvr-buzz:focus,.hvr-buzz:hover{-webkit-animation-name:hvr-buzz;animation-name:hvr-buzz;-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n@-webkit-keyframes hvr-buzz-out{\n10%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)\n}\n20%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)\n}\n30%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)\n}\n40%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)\n}\n50%{-webkit-transform:translateX(2px) rotate(1deg);transform:translateX(2px) rotate(1deg)\n}\n60%{-webkit-transform:translateX(-2px) rotate(-1deg);transform:translateX(-2px) rotate(-1deg)\n}\n70%{-webkit-transform:translateX(2px) rotate(1deg);transform:translateX(2px) rotate(1deg)\n}\n80%{-webkit-transform:translateX(-2px) rotate(-1deg);transform:translateX(-2px) rotate(-1deg)\n}\n90%{-webkit-transform:translateX(1px) rotate(0);transform:translateX(1px) rotate(0)\n}\n100%{-webkit-transform:translateX(-1px) rotate(0);transform:translateX(-1px) rotate(0)\n}\n}\n@keyframes hvr-buzz-out{\n10%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)\n}\n20%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)\n}\n30%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)\n}\n40%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)\n}\n50%{-webkit-transform:translateX(2px) rotate(1deg);transform:translateX(2px) rotate(1deg)\n}\n60%{-webkit-transform:translateX(-2px) rotate(-1deg);transform:translateX(-2px) rotate(-1deg)\n}\n70%{-webkit-transform:translateX(2px) rotate(1deg);transform:translateX(2px) rotate(1deg)\n}\n80%{-webkit-transform:translateX(-2px) rotate(-1deg);transform:translateX(-2px) rotate(-1deg)\n}\n90%{-webkit-transform:translateX(1px) rotate(0);transform:translateX(1px) rotate(0)\n}\n100%{-webkit-transform:translateX(-1px) rotate(0);transform:translateX(-1px) rotate(0)\n}\n}\n.hvr-buzz-out{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale\n}\n.hvr-buzz-out:active,.hvr-buzz-out:focus,.hvr-buzz-out:hover{-webkit-animation-name:hvr-buzz-out;animation-name:hvr-buzz-out;-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n.hvr-fade{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;overflow:hidden;transition-duration:.3s;transition-property:color,background-color\n}\n.hvr-fade:active,.hvr-fade:focus,.hvr-fade:hover{background-color:#2098d1;color:#fff\n}\n@-webkit-keyframes hvr-back-pulse{\n50%{background-color:rgba(32,152,209,.75)\n}\n}\n@keyframes hvr-back-pulse{\n50%{background-color:rgba(32,152,209,.75)\n}\n}\n.hvr-back-pulse{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;overflow:hidden;transition-duration:.5s;transition-property:color,background-color\n}\n.hvr-back-pulse:active,.hvr-back-pulse:focus,.hvr-back-pulse:hover{-webkit-animation-name:hvr-back-pulse;animation-name:hvr-back-pulse;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:.5s;animation-delay:.5s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;background-color:#2098d1;background-color:#2098d1;color:#fff\n}\n.hvr-sweep-to-right{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;transition-property:color;transition-duration:.3s\n}\n.hvr-sweep-to-right:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098d1;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:0 50%;transform-origin:0 50%;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-duration:.3s;transition-timing-function:ease-out\n}\n.hvr-sweep-to-right:active,.hvr-sweep-to-right:focus,.hvr-sweep-to-right:hover{color:#fff\n}\n.hvr-sweep-to-right:active:before,.hvr-sweep-to-right:focus:before,.hvr-sweep-to-right:hover:before{-webkit-transform:scaleX(1);transform:scaleX(1)\n}\n.hvr-sweep-to-left{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;transition-property:color;transition-duration:.3s\n}\n.hvr-sweep-to-left:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098d1;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-duration:.3s;transition-timing-function:ease-out\n}\n.hvr-sweep-to-left:active,.hvr-sweep-to-left:focus,.hvr-sweep-to-left:hover{color:#fff\n}\n.hvr-sweep-to-left:active:before,.hvr-sweep-to-left:focus:before,.hvr-sweep-to-left:hover:before{-webkit-transform:scaleX(1);transform:scaleX(1)\n}\n.hvr-sweep-to-bottom{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;transition-property:color;transition-duration:.3s\n}\n.hvr-sweep-to-bottom:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098d1;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:50% 0;transform-origin:50% 0;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-duration:.3s;transition-timing-function:ease-out\n}\n.hvr-sweep-to-bottom:active,.hvr-sweep-to-bottom:focus,.hvr-sweep-to-bottom:hover{color:#fff\n}\n.hvr-sweep-to-bottom:active:before,.hvr-sweep-to-bottom:focus:before,.hvr-sweep-to-bottom:hover:before{-webkit-transform:scaleY(1);transform:scaleY(1)\n}\n.hvr-sweep-to-top{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;transition-property:color;transition-duration:.3s\n}\n.hvr-sweep-to-top:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098d1;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-duration:.3s;transition-timing-function:ease-out\n}\n.hvr-sweep-to-top:active,.hvr-sweep-to-top:focus,.hvr-sweep-to-top:hover{color:#fff\n}\n.hvr-sweep-to-top:active:before,.hvr-sweep-to-top:focus:before,.hvr-sweep-to-top:hover:before{-webkit-transform:scaleY(1);transform:scaleY(1)\n}\n.hvr-bounce-to-right{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;transition-property:color;transition-duration:.5s\n}\n.hvr-bounce-to-right:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098d1;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:0 50%;transform-origin:0 50%;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-duration:.5s;transition-timing-function:ease-out\n}\n.hvr-bounce-to-right:active,.hvr-bounce-to-right:focus,.hvr-bounce-to-right:hover{color:#fff\n}\n.hvr-bounce-to-right:active:before,.hvr-bounce-to-right:focus:before,.hvr-bounce-to-right:hover:before{-webkit-transform:scaleX(1);transform:scaleX(1);transition-timing-function:cubic-bezier(0.52,1.64,.37,.66)\n}\n.hvr-bounce-to-left{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;transition-property:color;transition-duration:.5s\n}\n.hvr-bounce-to-left:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098d1;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-duration:.5s;transition-timing-function:ease-out\n}\n.hvr-bounce-to-left:active,.hvr-bounce-to-left:focus,.hvr-bounce-to-left:hover{color:#fff\n}\n.hvr-bounce-to-left:active:before,.hvr-bounce-to-left:focus:before,.hvr-bounce-to-left:hover:before{-webkit-transform:scaleX(1);transform:scaleX(1);transition-timing-function:cubic-bezier(0.52,1.64,.37,.66)\n}\n.hvr-bounce-to-bottom{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;transition-property:color;transition-duration:.5s\n}\n.hvr-bounce-to-bottom:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098d1;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:50% 0;transform-origin:50% 0;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-duration:.5s;transition-timing-function:ease-out\n}\n.hvr-bounce-to-bottom:active,.hvr-bounce-to-bottom:focus,.hvr-bounce-to-bottom:hover{color:#fff\n}\n.hvr-bounce-to-bottom:active:before,.hvr-bounce-to-bottom:focus:before,.hvr-bounce-to-bottom:hover:before{-webkit-transform:scaleY(1);transform:scaleY(1);transition-timing-function:cubic-bezier(0.52,1.64,.37,.66)\n}\n.hvr-bounce-to-top{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;transition-property:color;transition-duration:.5s\n}\n.hvr-bounce-to-top:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098d1;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-duration:.5s;transition-timing-function:ease-out\n}\n.hvr-bounce-to-top:active,.hvr-bounce-to-top:focus,.hvr-bounce-to-top:hover{color:#fff\n}\n.hvr-bounce-to-top:active:before,.hvr-bounce-to-top:focus:before,.hvr-bounce-to-top:hover:before{-webkit-transform:scaleY(1);transform:scaleY(1);transition-timing-function:cubic-bezier(0.52,1.64,.37,.66)\n}\n.hvr-radial-out{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;overflow:hidden;background:#e1e1e1;transition-property:color;transition-duration:.3s\n}\n.hvr-radial-out:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098d1;border-radius:100%;-webkit-transform:scale(0);transform:scale(0);transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-duration:.3s;transition-timing-function:ease-out\n}\n.hvr-radial-out:active,.hvr-radial-out:focus,.hvr-radial-out:hover{color:#fff\n}\n.hvr-radial-out:active:before,.hvr-radial-out:focus:before,.hvr-radial-out:hover:before{-webkit-transform:scale(2);transform:scale(2)\n}\n.hvr-radial-in{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;overflow:hidden;background:#2098d1;transition-property:color;transition-duration:.3s\n}\n.hvr-radial-in:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#e1e1e1;border-radius:100%;-webkit-transform:scale(2);transform:scale(2);transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-duration:.3s;transition-timing-function:ease-out\n}\n.hvr-radial-in:active,.hvr-radial-in:focus,.hvr-radial-in:hover{color:#fff\n}\n.hvr-radial-in:active:before,.hvr-radial-in:focus:before,.hvr-radial-in:hover:before{-webkit-transform:scale(0);transform:scale(0)\n}\n.hvr-rectangle-in{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;background:#2098d1;transition-property:color;transition-duration:.3s\n}\n.hvr-rectangle-in:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#e1e1e1;-webkit-transform:scale(1);transform:scale(1);transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-duration:.3s;transition-timing-function:ease-out\n}\n.hvr-rectangle-in:active,.hvr-rectangle-in:focus,.hvr-rectangle-in:hover{color:#fff\n}\n.hvr-rectangle-in:active:before,.hvr-rectangle-in:focus:before,.hvr-rectangle-in:hover:before{-webkit-transform:scale(0);transform:scale(0)\n}\n.hvr-rectangle-out{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;background:#e1e1e1;transition-property:color;transition-duration:.3s\n}\n.hvr-rectangle-out:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098d1;-webkit-transform:scale(0);transform:scale(0);transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-duration:.3s;transition-timing-function:ease-out\n}\n.hvr-rectangle-out:active,.hvr-rectangle-out:focus,.hvr-rectangle-out:hover{color:#fff\n}\n.hvr-rectangle-out:active:before,.hvr-rectangle-out:focus:before,.hvr-rectangle-out:hover:before{-webkit-transform:scale(1);transform:scale(1)\n}\n.hvr-shutter-in-horizontal{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;background:#2098d1;transition-property:color;transition-duration:.3s\n}\n.hvr-shutter-in-horizontal:before{content:\"\";position:absolute;z-index:-1;top:0;bottom:0;left:0;right:0;background:#e1e1e1;-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:50%;transform-origin:50%;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-duration:.3s;transition-timing-function:ease-out\n}\n.hvr-shutter-in-horizontal:active,.hvr-shutter-in-horizontal:focus,.hvr-shutter-in-horizontal:hover{color:#fff\n}\n.hvr-shutter-in-horizontal:active:before,.hvr-shutter-in-horizontal:focus:before,.hvr-shutter-in-horizontal:hover:before{-webkit-transform:scaleX(0);transform:scaleX(0)\n}\n.hvr-shutter-out-horizontal{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;background:#e1e1e1;transition-property:color;transition-duration:.3s\n}\n.hvr-shutter-out-horizontal:before{content:\"\";position:absolute;z-index:-1;top:0;bottom:0;left:0;right:0;background:#2098d1;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:50%;transform-origin:50%;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-duration:.3s;transition-timing-function:ease-out\n}\n.hvr-shutter-out-horizontal:active,.hvr-shutter-out-horizontal:focus,.hvr-shutter-out-horizontal:hover{color:#fff\n}\n.hvr-shutter-out-horizontal:active:before,.hvr-shutter-out-horizontal:focus:before,.hvr-shutter-out-horizontal:hover:before{-webkit-transform:scaleX(1);transform:scaleX(1)\n}\n.hvr-shutter-in-vertical{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;background:#2098d1;transition-property:color;transition-duration:.3s\n}\n.hvr-shutter-in-vertical:before{content:\"\";position:absolute;z-index:-1;top:0;bottom:0;left:0;right:0;background:#e1e1e1;-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transform-origin:50%;transform-origin:50%;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-duration:.3s;transition-timing-function:ease-out\n}\n.hvr-shutter-in-vertical:active,.hvr-shutter-in-vertical:focus,.hvr-shutter-in-vertical:hover{color:#fff\n}\n.hvr-shutter-in-vertical:active:before,.hvr-shutter-in-vertical:focus:before,.hvr-shutter-in-vertical:hover:before{-webkit-transform:scaleY(0);transform:scaleY(0)\n}\n.hvr-shutter-out-vertical{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;background:#e1e1e1;transition-property:color;transition-duration:.3s\n}\n.hvr-shutter-out-vertical:before{content:\"\";position:absolute;z-index:-1;top:0;bottom:0;left:0;right:0;background:#2098d1;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:50%;transform-origin:50%;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-duration:.3s;transition-timing-function:ease-out\n}\n.hvr-shutter-out-vertical:active,.hvr-shutter-out-vertical:focus,.hvr-shutter-out-vertical:hover{color:#fff\n}\n.hvr-shutter-out-vertical:active:before,.hvr-shutter-out-vertical:focus:before,.hvr-shutter-out-vertical:hover:before{-webkit-transform:scaleY(1);transform:scaleY(1)\n}\n.hvr-border-fade{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;transition-duration:.3s;transition-property:box-shadow;box-shadow:inset 0 0 0 4px #e1e1e1,0 0 1px rgba(0,0,0,0)\n}\n.hvr-border-fade:active,.hvr-border-fade:focus,.hvr-border-fade:hover{box-shadow:inset 0 0 0 4px #2098d1,0 0 1px rgba(0,0,0,0)\n}\n.hvr-hollow{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;transition-duration:.3s;transition-property:background;box-shadow:inset 0 0 0 4px #e1e1e1,0 0 1px rgba(0,0,0,0)\n}\n.hvr-hollow:active,.hvr-hollow:focus,.hvr-hollow:hover{background:0 0\n}\n.hvr-trim{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative\n}\n.hvr-trim:before{content:'';position:absolute;border:#fff solid 4px;top:4px;left:4px;right:4px;bottom:4px;opacity:0;transition-duration:.3s;transition-property:opacity\n}\n.hvr-trim:active:before,.hvr-trim:focus:before,.hvr-trim:hover:before{opacity:1\n}\n@-webkit-keyframes hvr-ripple-out{\n100%{top:-12px;right:-12px;bottom:-12px;left:-12px;opacity:0\n}\n}\n@keyframes hvr-ripple-out{\n100%{top:-12px;right:-12px;bottom:-12px;left:-12px;opacity:0\n}\n}\n.hvr-ripple-out{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative\n}\n.hvr-ripple-out:before{content:'';position:absolute;border:#e1e1e1 solid 6px;top:0;right:0;bottom:0;left:0;-webkit-animation-duration:1s;animation-duration:1s\n}\n.hvr-ripple-out:active:before,.hvr-ripple-out:focus:before,.hvr-ripple-out:hover:before{-webkit-animation-name:hvr-ripple-out;animation-name:hvr-ripple-out\n}\n@-webkit-keyframes hvr-ripple-in{\n100%{top:0;right:0;bottom:0;left:0;opacity:1\n}\n}\n@keyframes hvr-ripple-in{\n100%{top:0;right:0;bottom:0;left:0;opacity:1\n}\n}\n.hvr-ripple-in{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative\n}\n.hvr-ripple-in:before{content:'';position:absolute;border:#e1e1e1 solid 4px;top:-12px;right:-12px;bottom:-12px;left:-12px;opacity:0;-webkit-animation-duration:1s;animation-duration:1s\n}\n.hvr-ripple-in:active:before,.hvr-ripple-in:focus:before,.hvr-ripple-in:hover:before{-webkit-animation-name:hvr-ripple-in;animation-name:hvr-ripple-in\n}\n.hvr-outline-out{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative\n}\n.hvr-outline-out:before{content:'';position:absolute;border:#e1e1e1 solid 4px;top:0;right:0;bottom:0;left:0;transition-duration:.3s;transition-property:top,right,bottom,left\n}\n.hvr-outline-out:active:before,.hvr-outline-out:focus:before,.hvr-outline-out:hover:before{top:-8px;right:-8px;bottom:-8px;left:-8px\n}\n.hvr-outline-in{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative\n}\n.hvr-outline-in:before{pointer-events:none;content:'';position:absolute;border:#e1e1e1 solid 4px;top:-16px;right:-16px;bottom:-16px;left:-16px;opacity:0;transition-duration:.3s;transition-property:top,right,bottom,left\n}\n.hvr-outline-in:active:before,.hvr-outline-in:focus:before,.hvr-outline-in:hover:before{top:-8px;right:-8px;bottom:-8px;left:-8px;opacity:1\n}\n.hvr-round-corners{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;transition-duration:.3s;transition-property:border-radius\n}\n.hvr-round-corners:active,.hvr-round-corners:focus,.hvr-round-corners:hover{border-radius:1em\n}\n.hvr-underline-from-left{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;overflow:hidden\n}\n.hvr-underline-from-left:before{content:\"\";position:absolute;z-index:-1;left:0;right:100%;bottom:0;background:#2098d1;height:4px;transition-property:right;transition-duration:.3s;transition-timing-function:ease-out\n}\n.hvr-underline-from-left:active:before,.hvr-underline-from-left:focus:before,.hvr-underline-from-left:hover:before{right:0\n}\n.hvr-underline-from-center{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;overflow:hidden\n}\n.hvr-underline-from-center:before{content:\"\";position:absolute;z-index:-1;left:50%;right:50%;bottom:0;background:#2098d1;height:4px;transition-property:left,right;transition-duration:.3s;transition-timing-function:ease-out\n}\n.hvr-underline-from-center:active:before,.hvr-underline-from-center:focus:before,.hvr-underline-from-center:hover:before{left:0;right:0\n}\n.hvr-underline-from-right{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;overflow:hidden\n}\n.hvr-underline-from-right:before{content:\"\";position:absolute;z-index:-1;left:100%;right:0;bottom:0;background:#2098d1;height:4px;transition-property:left;transition-duration:.3s;transition-timing-function:ease-out\n}\n.hvr-underline-from-right:active:before,.hvr-underline-from-right:focus:before,.hvr-underline-from-right:hover:before{left:0\n}\n.hvr-overline-from-left{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;overflow:hidden\n}\n.hvr-overline-from-left:before{content:\"\";position:absolute;z-index:-1;left:0;right:100%;top:0;background:#2098d1;height:4px;transition-property:right;transition-duration:.3s;transition-timing-function:ease-out\n}\n.hvr-overline-from-left:active:before,.hvr-overline-from-left:focus:before,.hvr-overline-from-left:hover:before{right:0\n}\n.hvr-overline-from-center{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;overflow:hidden\n}\n.hvr-overline-from-center:before{content:\"\";position:absolute;z-index:-1;left:50%;right:50%;top:0;background:#2098d1;height:4px;transition-property:left,right;transition-duration:.3s;transition-timing-function:ease-out\n}\n.hvr-overline-from-center:active:before,.hvr-overline-from-center:focus:before,.hvr-overline-from-center:hover:before{left:0;right:0\n}\n.hvr-overline-from-right{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;overflow:hidden\n}\n.hvr-overline-from-right:before{content:\"\";position:absolute;z-index:-1;left:100%;right:0;top:0;background:#2098d1;height:4px;transition-property:left;transition-duration:.3s;transition-timing-function:ease-out\n}\n.hvr-overline-from-right:active:before,.hvr-overline-from-right:focus:before,.hvr-overline-from-right:hover:before{left:0\n}\n.hvr-reveal{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;overflow:hidden\n}\n.hvr-reveal:before{content:\"\";position:absolute;z-index:-1;left:0;right:0;top:0;bottom:0;border-color:#2098d1;border-style:solid;border-width:0;transition-property:border-width;transition-duration:.1s;transition-timing-function:ease-out\n}\n.hvr-reveal:active:before,.hvr-reveal:focus:before,.hvr-reveal:hover:before{-webkit-transform:translateY(0);transform:translateY(0);border-width:4px\n}\n.hvr-underline-reveal{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;overflow:hidden\n}\n.hvr-underline-reveal:before{content:\"\";position:absolute;z-index:-1;left:0;right:0;bottom:0;background:#2098d1;height:4px;-webkit-transform:translateY(4px);transform:translateY(4px);transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-duration:.3s;transition-timing-function:ease-out\n}\n.hvr-underline-reveal:active:before,.hvr-underline-reveal:focus:before,.hvr-underline-reveal:hover:before{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.hvr-overline-reveal{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;overflow:hidden\n}\n.hvr-overline-reveal:before{content:\"\";position:absolute;z-index:-1;left:0;right:0;top:0;background:#2098d1;height:4px;-webkit-transform:translateY(-4px);transform:translateY(-4px);transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-duration:.3s;transition-timing-function:ease-out\n}\n.hvr-overline-reveal:active:before,.hvr-overline-reveal:focus:before,.hvr-overline-reveal:hover:before{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.hvr-glow{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;transition-duration:.3s;transition-property:box-shadow\n}\n.hvr-glow:active,.hvr-glow:focus,.hvr-glow:hover{box-shadow:0 0 8px rgba(0,0,0,.6)\n}\n.hvr-shadow{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;transition-duration:.3s;transition-property:box-shadow\n}\n.hvr-shadow:active,.hvr-shadow:focus,.hvr-shadow:hover{box-shadow:0 10px 10px -10px rgba(0,0,0,.5)\n}\n.hvr-grow-shadow{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;transition-duration:.3s;transition-property:box-shadow,-webkit-transform;transition-property:box-shadow,transform;transition-property:box-shadow,transform,-webkit-transform\n}\n.hvr-grow-shadow:active,.hvr-grow-shadow:focus,.hvr-grow-shadow:hover{box-shadow:0 10px 10px -10px rgba(0,0,0,.5);-webkit-transform:scale(1.1);transform:scale(1.1)\n}\n.hvr-box-shadow-outset{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;transition-duration:.3s;transition-property:box-shadow\n}\n.hvr-box-shadow-outset:active,.hvr-box-shadow-outset:focus,.hvr-box-shadow-outset:hover{box-shadow:2px 2px 2px rgba(0,0,0,.6)\n}\n.hvr-box-shadow-inset{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;transition-duration:.3s;transition-property:box-shadow;box-shadow:inset 0 0 0 rgba(0,0,0,.6),0 0 1px rgba(0,0,0,0)\n}\n.hvr-box-shadow-inset:active,.hvr-box-shadow-inset:focus,.hvr-box-shadow-inset:hover{box-shadow:inset 2px 2px 2px rgba(0,0,0,.6),0 0 1px rgba(0,0,0,0)\n}\n.hvr-float-shadow{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform\n}\n.hvr-float-shadow:before{pointer-events:none;position:absolute;z-index:-1;content:'';top:100%;left:5%;height:10px;width:90%;opacity:0;background:radial-gradient(ellipse at center,rgba(0,0,0,.35) 0,rgba(0,0,0,0) 80%);transition-duration:.3s;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform\n}\n.hvr-float-shadow:active,.hvr-float-shadow:focus,.hvr-float-shadow:hover{-webkit-transform:translateY(-5px);transform:translateY(-5px)\n}\n.hvr-float-shadow:active:before,.hvr-float-shadow:focus:before,.hvr-float-shadow:hover:before{opacity:1;-webkit-transform:translateY(5px);transform:translateY(5px)\n}\n.hvr-shadow-radial{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative\n}\n.hvr-shadow-radial:after,.hvr-shadow-radial:before{pointer-events:none;position:absolute;content:'';left:0;width:100%;box-sizing:border-box;height:5px;opacity:0;transition-duration:.3s;transition-property:opacity\n}\n.hvr-shadow-radial:before{bottom:100%;background:radial-gradient(ellipse at 50% 150%,rgba(0,0,0,.6) 0,rgba(0,0,0,0) 80%)\n}\n.hvr-shadow-radial:after{top:100%;background:radial-gradient(ellipse at 50% -50%,rgba(0,0,0,.6) 0,rgba(0,0,0,0) 80%)\n}\n.hvr-shadow-radial:active:after,.hvr-shadow-radial:active:before,.hvr-shadow-radial:focus:after,.hvr-shadow-radial:focus:before,.hvr-shadow-radial:hover:after,.hvr-shadow-radial:hover:before{opacity:1\n}\n.hvr-bubble-top{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative\n}\n.hvr-bubble-top:before{pointer-events:none;position:absolute;z-index:-1;content:'';border-style:solid;transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;left:calc(50% - 10px);top:0;border-width:0 10px 10px;border-color:transparent transparent #e1e1e1\n}\n.hvr-bubble-top:active:before,.hvr-bubble-top:focus:before,.hvr-bubble-top:hover:before{-webkit-transform:translateY(-10px);transform:translateY(-10px)\n}\n.hvr-bubble-right{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative\n}\n.hvr-bubble-right:before{pointer-events:none;position:absolute;z-index:-1;content:'';border-style:solid;transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;top:calc(50% - 10px);right:0;border-width:10px 0 10px 10px;border-color:transparent transparent transparent #e1e1e1\n}\n.hvr-bubble-right:active:before,.hvr-bubble-right:focus:before,.hvr-bubble-right:hover:before{-webkit-transform:translateX(10px);transform:translateX(10px)\n}\n.hvr-bubble-bottom{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative\n}\n.hvr-bubble-bottom:before{pointer-events:none;position:absolute;z-index:-1;content:'';border-style:solid;transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;left:calc(50% - 10px);bottom:0;border-width:10px 10px 0;border-color:#e1e1e1 transparent transparent\n}\n.hvr-bubble-bottom:active:before,.hvr-bubble-bottom:focus:before,.hvr-bubble-bottom:hover:before{-webkit-transform:translateY(10px);transform:translateY(10px)\n}\n.hvr-bubble-left{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative\n}\n.hvr-bubble-left:before{pointer-events:none;position:absolute;z-index:-1;content:'';border-style:solid;transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;top:calc(50% - 10px);left:0;border-width:10px 10px 10px 0;border-color:transparent #e1e1e1 transparent transparent\n}\n.hvr-bubble-left:active:before,.hvr-bubble-left:focus:before,.hvr-bubble-left:hover:before{-webkit-transform:translateX(-10px);transform:translateX(-10px)\n}\n.hvr-bubble-float-top{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform\n}\n.hvr-bubble-float-top:before{position:absolute;z-index:-1;content:'';left:calc(50% - 10px);top:0;border-style:solid;border-width:0 10px 10px;border-color:transparent transparent #e1e1e1;transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform\n}\n.hvr-bubble-float-top:active,.hvr-bubble-float-top:focus,.hvr-bubble-float-top:hover{-webkit-transform:translateY(10px);transform:translateY(10px)\n}\n.hvr-bubble-float-top:active:before,.hvr-bubble-float-top:focus:before,.hvr-bubble-float-top:hover:before{-webkit-transform:translateY(-10px);transform:translateY(-10px)\n}\n.hvr-bubble-float-right{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform\n}\n.hvr-bubble-float-right:before{position:absolute;z-index:-1;top:calc(50% - 10px);right:0;content:'';border-style:solid;border-width:10px 0 10px 10px;border-color:transparent transparent transparent #e1e1e1;transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform\n}\n.hvr-bubble-float-right:active,.hvr-bubble-float-right:focus,.hvr-bubble-float-right:hover{-webkit-transform:translateX(-10px);transform:translateX(-10px)\n}\n.hvr-bubble-float-right:active:before,.hvr-bubble-float-right:focus:before,.hvr-bubble-float-right:hover:before{-webkit-transform:translateX(10px);transform:translateX(10px)\n}\n.hvr-bubble-float-bottom{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform\n}\n.hvr-bubble-float-bottom:before{position:absolute;z-index:-1;content:'';left:calc(50% - 10px);bottom:0;border-style:solid;border-width:10px 10px 0;border-color:#e1e1e1 transparent transparent;transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform\n}\n.hvr-bubble-float-bottom:active,.hvr-bubble-float-bottom:focus,.hvr-bubble-float-bottom:hover{-webkit-transform:translateY(-10px);transform:translateY(-10px)\n}\n.hvr-bubble-float-bottom:active:before,.hvr-bubble-float-bottom:focus:before,.hvr-bubble-float-bottom:hover:before{-webkit-transform:translateY(10px);transform:translateY(10px)\n}\n.hvr-bubble-float-left{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform\n}\n.hvr-bubble-float-left:before{position:absolute;z-index:-1;content:'';top:calc(50% - 10px);left:0;border-style:solid;border-width:10px 10px 10px 0;border-color:transparent #e1e1e1 transparent transparent;transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform\n}\n.hvr-bubble-float-left:active,.hvr-bubble-float-left:focus,.hvr-bubble-float-left:hover{-webkit-transform:translateX(10px);transform:translateX(10px)\n}\n.hvr-bubble-float-left:active:before,.hvr-bubble-float-left:focus:before,.hvr-bubble-float-left:hover:before{-webkit-transform:translateX(-10px);transform:translateX(-10px)\n}\n.hvr-icon-back{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-left:2.2em;transition-duration:.1s\n}\n.hvr-icon-back:before{content:\"\\f137\";position:absolute;left:1em;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0);transition-duration:.1s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-timing-function:ease-out\n}\n.hvr-icon-back:active:before,.hvr-icon-back:focus:before,.hvr-icon-back:hover:before{-webkit-transform:translateX(-4px);transform:translateX(-4px)\n}\n.hvr-icon-forward{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em;transition-duration:.1s\n}\n.hvr-icon-forward:before{content:\"\\f138\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0);transition-duration:.1s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-timing-function:ease-out\n}\n.hvr-icon-forward:active:before,.hvr-icon-forward:focus:before,.hvr-icon-forward:hover:before{-webkit-transform:translateX(4px);transform:translateX(4px)\n}\n@-webkit-keyframes hvr-icon-down{\n0%,100%,50%{-webkit-transform:translateY(0);transform:translateY(0)\n}\n25%,75%{-webkit-transform:translateY(6px);transform:translateY(6px)\n}\n}\n@keyframes hvr-icon-down{\n0%,100%,50%{-webkit-transform:translateY(0);transform:translateY(0)\n}\n25%,75%{-webkit-transform:translateY(6px);transform:translateY(6px)\n}\n}\n.hvr-icon-down{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em\n}\n.hvr-icon-down:before{content:\"\\f01a\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.hvr-icon-down:active:before,.hvr-icon-down:focus:before,.hvr-icon-down:hover:before{-webkit-animation-name:hvr-icon-down;animation-name:hvr-icon-down;-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out\n}\n@-webkit-keyframes hvr-icon-up{\n0%,100%,50%{-webkit-transform:translateY(0);transform:translateY(0)\n}\n25%,75%{-webkit-transform:translateY(-6px);transform:translateY(-6px)\n}\n}\n@keyframes hvr-icon-up{\n0%,100%,50%{-webkit-transform:translateY(0);transform:translateY(0)\n}\n25%,75%{-webkit-transform:translateY(-6px);transform:translateY(-6px)\n}\n}\n.hvr-icon-up{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em\n}\n.hvr-icon-up:before{content:\"\\f01b\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.hvr-icon-up:active:before,.hvr-icon-up:focus:before,.hvr-icon-up:hover:before{-webkit-animation-name:hvr-icon-up;animation-name:hvr-icon-up;-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out\n}\n.hvr-icon-spin{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em\n}\n.hvr-icon-spin:before{content:\"\\f021\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome;transition-duration:1s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-timing-function:ease-in-out\n}\n.hvr-icon-spin:active:before,.hvr-icon-spin:focus:before,.hvr-icon-spin:hover:before{-webkit-transform:rotate(360deg);transform:rotate(360deg)\n}\n@-webkit-keyframes hvr-icon-drop{\n0%{opacity:0\n}\n50%{opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n100%,51%{opacity:1\n}\n}\n@keyframes hvr-icon-drop{\n0%{opacity:0\n}\n50%{opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n100%,51%{opacity:1\n}\n}\n.hvr-icon-drop{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em\n}\n.hvr-icon-drop:before{content:\"\\f041\";position:absolute;right:1em;opacity:1;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.hvr-icon-drop:active:before,.hvr-icon-drop:focus:before,.hvr-icon-drop:hover:before{opacity:0;transition-duration:.3s;-webkit-animation-name:hvr-icon-drop;animation-name:hvr-icon-drop;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.3s;animation-delay:.3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:cubic-bezier(0.52,1.64,.37,.66);animation-timing-function:cubic-bezier(0.52,1.64,.37,.66)\n}\n.hvr-icon-fade{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em\n}\n.hvr-icon-fade:before{content:\"\\f00c\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0);transition-duration:.5s;transition-property:color\n}\n.hvr-icon-fade:active:before,.hvr-icon-fade:focus:before,.hvr-icon-fade:hover:before{color:#0F9E5E\n}\n@-webkit-keyframes hvr-icon-float-away{\n0%{opacity:1\n}\n100%{opacity:0;-webkit-transform:translateY(-1em);transform:translateY(-1em)\n}\n}\n@keyframes hvr-icon-float-away{\n0%{opacity:1\n}\n100%{opacity:0;-webkit-transform:translateY(-1em);transform:translateY(-1em)\n}\n}\n.hvr-icon-float-away{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em\n}\n.hvr-icon-float-away:after,.hvr-icon-float-away:before{content:\"\\f055\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome\n}\n.hvr-icon-float-away:after{opacity:0;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards\n}\n.hvr-icon-float-away:active:after,.hvr-icon-float-away:focus:after,.hvr-icon-float-away:hover:after{-webkit-animation-name:hvr-icon-float-away;animation-name:hvr-icon-float-away;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out\n}\n@-webkit-keyframes hvr-icon-sink-away{\n0%{opacity:1\n}\n100%{opacity:0;-webkit-transform:translateY(1em);transform:translateY(1em)\n}\n}\n@keyframes hvr-icon-sink-away{\n0%{opacity:1\n}\n100%{opacity:0;-webkit-transform:translateY(1em);transform:translateY(1em)\n}\n}\n.hvr-icon-sink-away{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em\n}\n.hvr-icon-sink-away:after,.hvr-icon-sink-away:before{content:\"\\f056\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.hvr-icon-sink-away:after{opacity:0;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards\n}\n.hvr-icon-sink-away:active:after,.hvr-icon-sink-away:focus:after,.hvr-icon-sink-away:hover:after{-webkit-animation-name:hvr-icon-sink-away;animation-name:hvr-icon-sink-away;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out\n}\n.hvr-icon-grow{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em;transition-duration:.3s\n}\n.hvr-icon-grow:before{content:\"\\f118\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0);transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-timing-function:ease-out\n}\n.hvr-icon-grow:active:before,.hvr-icon-grow:focus:before,.hvr-icon-grow:hover:before{-webkit-transform:scale(1.3) translateZ(0);transform:scale(1.3) translateZ(0)\n}\n.hvr-icon-shrink{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em;transition-duration:.3s\n}\n.hvr-icon-shrink:before{content:\"\\f119\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0);transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-timing-function:ease-out\n}\n.hvr-icon-shrink:active:before,.hvr-icon-shrink:focus:before,.hvr-icon-shrink:hover:before{-webkit-transform:scale(0.8);transform:scale(0.8)\n}\n@-webkit-keyframes hvr-icon-pulse{\n25%{-webkit-transform:scale(1.3);transform:scale(1.3)\n}\n75%{-webkit-transform:scale(0.8);transform:scale(0.8)\n}\n}\n@keyframes hvr-icon-pulse{\n25%{-webkit-transform:scale(1.3);transform:scale(1.3)\n}\n75%{-webkit-transform:scale(0.8);transform:scale(0.8)\n}\n}\n.hvr-icon-pulse{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em\n}\n.hvr-icon-pulse:before{content:\"\\f015\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0);transition-timing-function:ease-out\n}\n.hvr-icon-pulse:active:before,.hvr-icon-pulse:focus:before,.hvr-icon-pulse:hover:before{-webkit-animation-name:hvr-icon-pulse;animation-name:hvr-icon-pulse;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n@-webkit-keyframes hvr-icon-pulse-grow{\nto{-webkit-transform:scale(1.3);transform:scale(1.3)\n}\n}\n@keyframes hvr-icon-pulse-grow{\nto{-webkit-transform:scale(1.3);transform:scale(1.3)\n}\n}\n.hvr-icon-pulse-grow{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em\n}\n.hvr-icon-pulse-grow:before{content:\"\\f015\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0);transition-timing-function:ease-out\n}\n.hvr-icon-pulse-grow:active:before,.hvr-icon-pulse-grow:focus:before,.hvr-icon-pulse-grow:hover:before{-webkit-animation-name:hvr-icon-pulse-grow;animation-name:hvr-icon-pulse-grow;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate\n}\n@-webkit-keyframes hvr-icon-pulse-shrink{\nto{-webkit-transform:scale(0.8);transform:scale(0.8)\n}\n}\n@keyframes hvr-icon-pulse-shrink{\nto{-webkit-transform:scale(0.8);transform:scale(0.8)\n}\n}\n.hvr-icon-pulse-shrink{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em\n}\n.hvr-icon-pulse-shrink:before{content:\"\\f015\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0);transition-timing-function:ease-out\n}\n.hvr-icon-pulse-shrink:active:before,.hvr-icon-pulse-shrink:focus:before,.hvr-icon-pulse-shrink:hover:before{-webkit-animation-name:hvr-icon-pulse-shrink;animation-name:hvr-icon-pulse-shrink;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate\n}\n@-webkit-keyframes hvr-icon-push{\n50%{-webkit-transform:scale(0.5);transform:scale(0.5)\n}\n}\n@keyframes hvr-icon-push{\n50%{-webkit-transform:scale(0.5);transform:scale(0.5)\n}\n}\n.hvr-icon-push{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em;transition-duration:.3s\n}\n.hvr-icon-push:before{content:\"\\f006\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0);transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-timing-function:ease-out\n}\n.hvr-icon-push:active:before,.hvr-icon-push:focus:before,.hvr-icon-push:hover:before{-webkit-animation-name:hvr-icon-push;animation-name:hvr-icon-push;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n@-webkit-keyframes hvr-icon-pop{\n50%{-webkit-transform:scale(1.5);transform:scale(1.5)\n}\n}\n@keyframes hvr-icon-pop{\n50%{-webkit-transform:scale(1.5);transform:scale(1.5)\n}\n}\n.hvr-icon-pop{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em;transition-duration:.3s\n}\n.hvr-icon-pop:before{content:\"\\f005\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0);transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-timing-function:ease-out\n}\n.hvr-icon-pop:active:before,.hvr-icon-pop:focus:before,.hvr-icon-pop:hover:before{-webkit-animation-name:hvr-icon-pop;animation-name:hvr-icon-pop;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n.hvr-icon-bounce{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em;transition-duration:.3s\n}\n.hvr-icon-bounce:before{content:\"\\f087\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0);transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-timing-function:ease-out\n}\n.hvr-icon-bounce:active:before,.hvr-icon-bounce:focus:before,.hvr-icon-bounce:hover:before{-webkit-transform:scale(1.5);transform:scale(1.5);transition-timing-function:cubic-bezier(0.47,2.02,.31,-.36)\n}\n.hvr-icon-rotate{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em;transition-duration:.3s\n}\n.hvr-icon-rotate:before{content:\"\\f0c6\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0);transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-timing-function:ease-out\n}\n.hvr-icon-rotate:active:before,.hvr-icon-rotate:focus:before,.hvr-icon-rotate:hover:before{-webkit-transform:rotate(20deg);transform:rotate(20deg)\n}\n.hvr-icon-grow-rotate{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em;transition-duration:.3s\n}\n.hvr-icon-grow-rotate:before{content:\"\\f095\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0);transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-timing-function:ease-out\n}\n.hvr-icon-grow-rotate:active:before,.hvr-icon-grow-rotate:focus:before,.hvr-icon-grow-rotate:hover:before{-webkit-transform:scale(1.5) rotate(12deg);transform:scale(1.5) rotate(12deg)\n}\n.hvr-icon-float{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em;transition-duration:.3s\n}\n.hvr-icon-float:before{content:\"\\f01b\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0);transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-timing-function:ease-out\n}\n.hvr-icon-float:active:before,.hvr-icon-float:focus:before,.hvr-icon-float:hover:before{-webkit-transform:translateY(-4px);transform:translateY(-4px)\n}\n.hvr-icon-sink{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em;transition-duration:.3s\n}\n.hvr-icon-sink:before{content:\"\\f01a\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0);transition-duration:.3s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-timing-function:ease-out\n}\n.hvr-icon-sink:active:before,.hvr-icon-sink:focus:before,.hvr-icon-sink:hover:before{-webkit-transform:translateY(4px);transform:translateY(4px)\n}\n@-webkit-keyframes hvr-icon-bob{\n0%{-webkit-transform:translateY(-6px);transform:translateY(-6px)\n}\n50%{-webkit-transform:translateY(-2px);transform:translateY(-2px)\n}\n100%{-webkit-transform:translateY(-6px);transform:translateY(-6px)\n}\n}\n@keyframes hvr-icon-bob{\n0%{-webkit-transform:translateY(-6px);transform:translateY(-6px)\n}\n50%{-webkit-transform:translateY(-2px);transform:translateY(-2px)\n}\n100%{-webkit-transform:translateY(-6px);transform:translateY(-6px)\n}\n}\n@-webkit-keyframes hvr-icon-bob-float{\n100%{-webkit-transform:translateY(-6px);transform:translateY(-6px)\n}\n}\n@keyframes hvr-icon-bob-float{\n100%{-webkit-transform:translateY(-6px);transform:translateY(-6px)\n}\n}\n.hvr-icon-bob{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em;transition-duration:.3s\n}\n.hvr-icon-bob:before{content:\"\\f077\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.hvr-icon-bob:active:before,.hvr-icon-bob:focus:before,.hvr-icon-bob:hover:before{-webkit-animation-name:hvr-icon-bob-float,hvr-icon-bob;animation-name:hvr-icon-bob-float,hvr-icon-bob;-webkit-animation-duration:.3s,1.5s;animation-duration:.3s,1.5s;-webkit-animation-delay:0s,.3s;animation-delay:0s,.3s;-webkit-animation-timing-function:ease-out,ease-in-out;animation-timing-function:ease-out,ease-in-out;-webkit-animation-iteration-count:1,infinite;animation-iteration-count:1,infinite;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-direction:normal,alternate;animation-direction:normal,alternate\n}\n@-webkit-keyframes hvr-icon-hang{\n0%{-webkit-transform:translateY(6px);transform:translateY(6px)\n}\n50%{-webkit-transform:translateY(2px);transform:translateY(2px)\n}\n100%{-webkit-transform:translateY(6px);transform:translateY(6px)\n}\n}\n@keyframes hvr-icon-hang{\n0%{-webkit-transform:translateY(6px);transform:translateY(6px)\n}\n50%{-webkit-transform:translateY(2px);transform:translateY(2px)\n}\n100%{-webkit-transform:translateY(6px);transform:translateY(6px)\n}\n}\n@-webkit-keyframes hvr-icon-hang-sink{\n100%{-webkit-transform:translateY(6px);transform:translateY(6px)\n}\n}\n@keyframes hvr-icon-hang-sink{\n100%{-webkit-transform:translateY(6px);transform:translateY(6px)\n}\n}\n.hvr-icon-hang{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em;transition-duration:.3s\n}\n.hvr-icon-hang:before{content:\"\\f078\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.hvr-icon-hang:active:before,.hvr-icon-hang:focus:before,.hvr-icon-hang:hover:before{-webkit-animation-name:hvr-icon-hang-sink,hvr-icon-hang;animation-name:hvr-icon-hang-sink,hvr-icon-hang;-webkit-animation-duration:.3s,1.5s;animation-duration:.3s,1.5s;-webkit-animation-delay:0s,.3s;animation-delay:0s,.3s;-webkit-animation-timing-function:ease-out,ease-in-out;animation-timing-function:ease-out,ease-in-out;-webkit-animation-iteration-count:1,infinite;animation-iteration-count:1,infinite;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-direction:normal,alternate;animation-direction:normal,alternate\n}\n@-webkit-keyframes hvr-icon-wobble-horizontal{\n16.65%{-webkit-transform:translateX(6px);transform:translateX(6px)\n}\n33.3%{-webkit-transform:translateX(-5px);transform:translateX(-5px)\n}\n49.95%{-webkit-transform:translateX(4px);transform:translateX(4px)\n}\n66.6%{-webkit-transform:translateX(-2px);transform:translateX(-2px)\n}\n83.25%{-webkit-transform:translateX(1px);transform:translateX(1px)\n}\n100%{-webkit-transform:translateX(0);transform:translateX(0)\n}\n}\n@keyframes hvr-icon-wobble-horizontal{\n16.65%{-webkit-transform:translateX(6px);transform:translateX(6px)\n}\n33.3%{-webkit-transform:translateX(-5px);transform:translateX(-5px)\n}\n49.95%{-webkit-transform:translateX(4px);transform:translateX(4px)\n}\n66.6%{-webkit-transform:translateX(-2px);transform:translateX(-2px)\n}\n83.25%{-webkit-transform:translateX(1px);transform:translateX(1px)\n}\n100%{-webkit-transform:translateX(0);transform:translateX(0)\n}\n}\n.hvr-icon-wobble-horizontal{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em;transition-duration:.3s\n}\n.hvr-icon-wobble-horizontal:before{content:\"\\f061\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.hvr-icon-wobble-horizontal:active:before,.hvr-icon-wobble-horizontal:focus:before,.hvr-icon-wobble-horizontal:hover:before{-webkit-animation-name:hvr-icon-wobble-horizontal;animation-name:hvr-icon-wobble-horizontal;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n@-webkit-keyframes hvr-icon-wobble-vertical{\n16.65%{-webkit-transform:translateY(6px);transform:translateY(6px)\n}\n33.3%{-webkit-transform:translateY(-5px);transform:translateY(-5px)\n}\n49.95%{-webkit-transform:translateY(4px);transform:translateY(4px)\n}\n66.6%{-webkit-transform:translateY(-2px);transform:translateY(-2px)\n}\n83.25%{-webkit-transform:translateY(1px);transform:translateY(1px)\n}\n100%{-webkit-transform:translateY(0);transform:translateY(0)\n}\n}\n@keyframes hvr-icon-wobble-vertical{\n16.65%{-webkit-transform:translateY(6px);transform:translateY(6px)\n}\n33.3%{-webkit-transform:translateY(-5px);transform:translateY(-5px)\n}\n49.95%{-webkit-transform:translateY(4px);transform:translateY(4px)\n}\n66.6%{-webkit-transform:translateY(-2px);transform:translateY(-2px)\n}\n83.25%{-webkit-transform:translateY(1px);transform:translateY(1px)\n}\n100%{-webkit-transform:translateY(0);transform:translateY(0)\n}\n}\n.hvr-icon-wobble-vertical{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em;transition-duration:.3s\n}\n.hvr-icon-wobble-vertical:before{content:\"\\f062\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.hvr-icon-wobble-vertical:active:before,.hvr-icon-wobble-vertical:focus:before,.hvr-icon-wobble-vertical:hover:before{-webkit-animation-name:hvr-icon-wobble-vertical;animation-name:hvr-icon-wobble-vertical;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n@-webkit-keyframes hvr-icon-buzz{\n50%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)\n}\n100%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)\n}\n}\n@keyframes hvr-icon-buzz{\n50%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)\n}\n100%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)\n}\n}\n.hvr-icon-buzz{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em;transition-duration:.3s\n}\n.hvr-icon-buzz:before{content:\"\\f017\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.hvr-icon-buzz:active:before,.hvr-icon-buzz:focus:before,.hvr-icon-buzz:hover:before{-webkit-animation-name:hvr-icon-buzz;animation-name:hvr-icon-buzz;-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n@-webkit-keyframes hvr-icon-buzz-out{\n10%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)\n}\n20%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)\n}\n30%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)\n}\n40%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)\n}\n50%{-webkit-transform:translateX(2px) rotate(1deg);transform:translateX(2px) rotate(1deg)\n}\n60%{-webkit-transform:translateX(-2px) rotate(-1deg);transform:translateX(-2px) rotate(-1deg)\n}\n70%{-webkit-transform:translateX(2px) rotate(1deg);transform:translateX(2px) rotate(1deg)\n}\n80%{-webkit-transform:translateX(-2px) rotate(-1deg);transform:translateX(-2px) rotate(-1deg)\n}\n90%{-webkit-transform:translateX(1px) rotate(0);transform:translateX(1px) rotate(0)\n}\n100%{-webkit-transform:translateX(-1px) rotate(0);transform:translateX(-1px) rotate(0)\n}\n}\n@keyframes hvr-icon-buzz-out{\n10%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)\n}\n20%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)\n}\n30%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)\n}\n40%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)\n}\n50%{-webkit-transform:translateX(2px) rotate(1deg);transform:translateX(2px) rotate(1deg)\n}\n60%{-webkit-transform:translateX(-2px) rotate(-1deg);transform:translateX(-2px) rotate(-1deg)\n}\n70%{-webkit-transform:translateX(2px) rotate(1deg);transform:translateX(2px) rotate(1deg)\n}\n80%{-webkit-transform:translateX(-2px) rotate(-1deg);transform:translateX(-2px) rotate(-1deg)\n}\n90%{-webkit-transform:translateX(1px) rotate(0);transform:translateX(1px) rotate(0)\n}\n100%{-webkit-transform:translateX(-1px) rotate(0);transform:translateX(-1px) rotate(0)\n}\n}\n.hvr-icon-buzz-out{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;padding-right:2.2em;transition-duration:.3s\n}\n.hvr-icon-buzz-out:before{content:\"\\f023\";position:absolute;right:1em;padding:0 1px;font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.hvr-icon-buzz-out:active:before,.hvr-icon-buzz-out:focus:before,.hvr-icon-buzz-out:hover:before{-webkit-animation-name:hvr-icon-buzz-out;animation-name:hvr-icon-buzz-out;-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n.hvr-curl-top-left{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative\n}\n.hvr-curl-top-left:before{pointer-events:none;position:absolute;content:'';height:0;width:0;top:0;left:0;background:#fff;background:linear-gradient(135deg,#fff 45%,#aaa 50%,#ccc 56%,#fff 80%);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr='#ffffff', endColorstr='#000000');z-index:1000;box-shadow:1px 1px 1px rgba(0,0,0,.4);transition-duration:.3s;transition-property:width,height\n}\n.hvr-curl-top-left:active:before,.hvr-curl-top-left:focus:before,.hvr-curl-top-left:hover:before{width:25px;height:25px\n}\n.hvr-curl-top-right{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative\n}\n.hvr-curl-top-right:before{pointer-events:none;position:absolute;content:'';height:0;width:0;top:0;right:0;background:#fff;background:linear-gradient(225deg,#fff 45%,#aaa 50%,#ccc 56%,#fff 80%);box-shadow:-1px 1px 1px rgba(0,0,0,.4);transition-duration:.3s;transition-property:width,height\n}\n.hvr-curl-top-right:active:before,.hvr-curl-top-right:focus:before,.hvr-curl-top-right:hover:before{width:25px;height:25px\n}\n.hvr-curl-bottom-right{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative\n}\n.hvr-curl-bottom-right:before{pointer-events:none;position:absolute;content:'';height:0;width:0;bottom:0;right:0;background:#fff;background:linear-gradient(315deg,#fff 45%,#aaa 50%,#ccc 56%,#fff 80%);box-shadow:-1px -1px 1px rgba(0,0,0,.4);transition-duration:.3s;transition-property:width,height\n}\n.hvr-curl-bottom-right:active:before,.hvr-curl-bottom-right:focus:before,.hvr-curl-bottom-right:hover:before{width:25px;height:25px\n}\n.hvr-curl-bottom-left{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative\n}\n.hvr-curl-bottom-left:before{pointer-events:none;position:absolute;content:'';height:0;width:0;bottom:0;left:0;background:#fff;background:linear-gradient(45deg,#fff 45%,#aaa 50%,#ccc 56%,#fff 80%);box-shadow:1px -1px 1px rgba(0,0,0,.4);transition-duration:.3s;transition-property:width,height\n}\n.hvr-curl-bottom-left:active:before,.hvr-curl-bottom-left:focus:before,.hvr-curl-bottom-left:hover:before{width:25px;height:25px\n}", ""]);

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "/*!\n * Ladda\n * http://lab.hakim.se/ladda\n * MIT licensed\n *\n * Copyright (C) 2013 Hakim El Hattab, http://hakim.se\n */\n.ladda-button{position:relative\n}\n.ladda-button .ladda-spinner{position:absolute;z-index:2;display:inline-block;width:32px;height:32px;top:50%;margin-top:-16px;opacity:0;pointer-events:none\n}\n.ladda-button .ladda-label{position:relative;z-index:3\n}\n.ladda-button .ladda-progress{position:absolute;width:0;height:100%;left:0;top:0;background:rgba(0,0,0,.2);visibility:hidden;opacity:0;transition:.1s linear all!important\n}\n.ladda-button[data-loading] .ladda-progress{opacity:1;visibility:visible\n}\n.ladda-button,.ladda-button .ladda-label,.ladda-button .ladda-spinner{transition:.3s cubic-bezier(0.175,.885,.32,1.275) all!important\n}\n.ladda-button[data-style=zoom-in],.ladda-button[data-style=zoom-in] .ladda-label,.ladda-button[data-style=zoom-in] .ladda-spinner,.ladda-button[data-style=zoom-out],.ladda-button[data-style=zoom-out] .ladda-label,.ladda-button[data-style=zoom-out] .ladda-spinner{transition:.3s ease all!important\n}\n.ladda-button[data-style=expand-right] .ladda-spinner{right:14px\n}\n.ladda-button[data-style=expand-right][data-size=\"s\"] .ladda-spinner,.ladda-button[data-style=expand-right][data-size=xs] .ladda-spinner{right:4px\n}\n.ladda-button[data-style=expand-right][data-loading]{padding-right:56px\n}\n.ladda-button[data-style=expand-right][data-loading] .ladda-spinner{opacity:1\n}\n.ladda-button[data-style=expand-right][data-loading][data-size=\"s\"],.ladda-button[data-style=expand-right][data-loading][data-size=xs]{padding-right:40px\n}\n.ladda-button[data-style=expand-left] .ladda-spinner{left:14px\n}\n.ladda-button[data-style=expand-left][data-size=\"s\"] .ladda-spinner,.ladda-button[data-style=expand-left][data-size=xs] .ladda-spinner{left:4px\n}\n.ladda-button[data-style=expand-left][data-loading]{padding-left:56px\n}\n.ladda-button[data-style=expand-left][data-loading] .ladda-spinner{opacity:1\n}\n.ladda-button[data-style=expand-left][data-loading][data-size=\"s\"],.ladda-button[data-style=expand-left][data-loading][data-size=xs]{padding-left:40px\n}\n.ladda-button[data-style=expand-up]{overflow:hidden\n}\n.ladda-button[data-style=expand-up] .ladda-spinner{top:-32px;left:50%;margin-left:-16px\n}\n.ladda-button[data-style=expand-up][data-loading]{padding-top:54px\n}\n.ladda-button[data-style=expand-up][data-loading] .ladda-spinner{opacity:1;top:14px;margin-top:0\n}\n.ladda-button[data-style=expand-up][data-loading][data-size=\"s\"],.ladda-button[data-style=expand-up][data-loading][data-size=xs]{padding-top:32px\n}\n.ladda-button[data-style=expand-up][data-loading][data-size=\"s\"] .ladda-spinner,.ladda-button[data-style=expand-up][data-loading][data-size=xs] .ladda-spinner{top:4px\n}\n.ladda-button[data-style=expand-down]{overflow:hidden\n}\n.ladda-button[data-style=expand-down] .ladda-spinner{top:62px;left:50%;margin-left:-16px\n}\n.ladda-button[data-style=expand-down][data-size=\"s\"] .ladda-spinner,.ladda-button[data-style=expand-down][data-size=xs] .ladda-spinner{top:40px\n}\n.ladda-button[data-style=expand-down][data-loading]{padding-bottom:54px\n}\n.ladda-button[data-style=expand-down][data-loading] .ladda-spinner{opacity:1\n}\n.ladda-button[data-style=expand-down][data-loading][data-size=\"s\"],.ladda-button[data-style=expand-down][data-loading][data-size=xs]{padding-bottom:32px\n}\n.ladda-button[data-style=slide-left]{overflow:hidden\n}\n.ladda-button[data-style=slide-left] .ladda-label{position:relative\n}\n.ladda-button[data-style=slide-left] .ladda-spinner{left:100%;margin-left:-16px\n}\n.ladda-button[data-style=slide-left][data-loading] .ladda-label{opacity:0;left:-100%\n}\n.ladda-button[data-style=slide-left][data-loading] .ladda-spinner{opacity:1;left:50%\n}\n.ladda-button[data-style=slide-right]{overflow:hidden\n}\n.ladda-button[data-style=slide-right] .ladda-label{position:relative\n}\n.ladda-button[data-style=slide-right] .ladda-spinner{right:100%;margin-left:-16px\n}\n.ladda-button[data-style=slide-right][data-loading] .ladda-label{opacity:0;left:100%\n}\n.ladda-button[data-style=slide-right][data-loading] .ladda-spinner{opacity:1;left:50%\n}\n.ladda-button[data-style=slide-up]{overflow:hidden\n}\n.ladda-button[data-style=slide-up] .ladda-label{position:relative\n}\n.ladda-button[data-style=slide-up] .ladda-spinner{left:50%;margin-left:-16px;margin-top:1em\n}\n.ladda-button[data-style=slide-up][data-loading] .ladda-label{opacity:0;top:-1em\n}\n.ladda-button[data-style=slide-up][data-loading] .ladda-spinner{opacity:1;margin-top:-16px\n}\n.ladda-button[data-style=slide-down]{overflow:hidden\n}\n.ladda-button[data-style=slide-down] .ladda-label{position:relative\n}\n.ladda-button[data-style=slide-down] .ladda-spinner{left:50%;margin-left:-16px;margin-top:-2em\n}\n.ladda-button[data-style=slide-down][data-loading] .ladda-label{opacity:0;top:1em\n}\n.ladda-button[data-style=slide-down][data-loading] .ladda-spinner{opacity:1;margin-top:-16px\n}\n.ladda-button[data-style=zoom-out]{overflow:hidden\n}\n.ladda-button[data-style=zoom-out] .ladda-spinner{left:50%;margin-left:-16px;-webkit-transform:scale(2.5);transform:scale(2.5)\n}\n.ladda-button[data-style=zoom-out] .ladda-label{position:relative;display:inline-block\n}\n.ladda-button[data-style=zoom-out][data-loading] .ladda-label{opacity:0;-webkit-transform:scale(0.5);transform:scale(0.5)\n}\n.ladda-button[data-style=zoom-out][data-loading] .ladda-spinner{opacity:1;-webkit-transform:none;transform:none\n}\n.ladda-button[data-style=zoom-in]{overflow:hidden\n}\n.ladda-button[data-style=zoom-in] .ladda-spinner{left:50%;margin-left:-16px;-webkit-transform:scale(0.2);transform:scale(0.2)\n}\n.ladda-button[data-style=zoom-in] .ladda-label{position:relative;display:inline-block\n}\n.ladda-button[data-style=zoom-in][data-loading] .ladda-label{opacity:0;-webkit-transform:scale(2.2);transform:scale(2.2)\n}\n.ladda-button[data-style=zoom-in][data-loading] .ladda-spinner{opacity:1;-webkit-transform:none;transform:none\n}\n.ladda-button[data-style=contract]{overflow:hidden;width:100px\n}\n.ladda-button[data-style=contract] .ladda-spinner{left:50%;margin-left:-16px\n}\n.ladda-button[data-style=contract][data-loading]{border-radius:50%;width:52px\n}\n.ladda-button[data-style=contract][data-loading] .ladda-label{opacity:0\n}\n.ladda-button[data-style=contract][data-loading] .ladda-spinner{opacity:1\n}\n.ladda-button[data-style=contract-overlay]{overflow:hidden;width:100px;box-shadow:0 0 0 3000px rgba(0,0,0,0)\n}\n.ladda-button[data-style=contract-overlay] .ladda-spinner{left:50%;margin-left:-16px\n}\n.ladda-button[data-style=contract-overlay][data-loading]{border-radius:50%;width:52px;box-shadow:0 0 0 3000px rgba(0,0,0,.8)\n}\n.ladda-button[data-style=contract-overlay][data-loading] .ladda-label{opacity:0\n}\n.ladda-button[data-style=contract-overlay][data-loading] .ladda-spinner{opacity:1\n}", ""]);

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(990)
__webpack_require__(1050)
__webpack_require__(991)
__webpack_require__(989)
__webpack_require__(988)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(383),
  /* template */
  __webpack_require__(849),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Sites/vue_workflows/laravel/resources/assets/js/components/components/buttons.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] buttons.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6090b309", Component.options)
  } else {
    hotAPI.reload("data-v-6090b309", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Ladda 1.0.0 (2016-03-08, 09:31)
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2016 Hakim El Hattab, http://hakim.se
 */
!function(a,b){ true?module.exports=b(__webpack_require__(787)):"function"==typeof define&&define.amd?define(["spin"],b):a.Ladda=b(a.Spinner)}(this,function(a){"use strict";function b(a){if("undefined"==typeof a)return void console.warn("Ladda button target must be defined.");if(/ladda-button/i.test(a.className)||(a.className+=" ladda-button"),a.hasAttribute("data-style")||a.setAttribute("data-style","expand-right"),!a.querySelector(".ladda-label")){var b=document.createElement("span");b.className="ladda-label",i(a,b)}var c,d=a.querySelector(".ladda-spinner");d||(d=document.createElement("span"),d.className="ladda-spinner"),a.appendChild(d);var e,f={start:function(){return c||(c=g(a)),a.setAttribute("disabled",""),a.setAttribute("data-loading",""),clearTimeout(e),c.spin(d),this.setProgress(0),this},startAfter:function(a){return clearTimeout(e),e=setTimeout(function(){f.start()},a),this},stop:function(){return a.removeAttribute("disabled"),a.removeAttribute("data-loading"),clearTimeout(e),c&&(e=setTimeout(function(){c.stop()},1e3)),this},toggle:function(){return this.isLoading()?this.stop():this.start(),this},setProgress:function(b){b=Math.max(Math.min(b,1),0);var c=a.querySelector(".ladda-progress");0===b&&c&&c.parentNode?c.parentNode.removeChild(c):(c||(c=document.createElement("div"),c.className="ladda-progress",a.appendChild(c)),c.style.width=(b||0)*a.offsetWidth+"px")},enable:function(){return this.stop(),this},disable:function(){return this.stop(),a.setAttribute("disabled",""),this},isLoading:function(){return a.hasAttribute("data-loading")},remove:function(){clearTimeout(e),a.removeAttribute("disabled",""),a.removeAttribute("data-loading",""),c&&(c.stop(),c=null);for(var b=0,d=j.length;d>b;b++)if(f===j[b]){j.splice(b,1);break}}};return j.push(f),f}function c(a,b){for(;a.parentNode&&a.tagName!==b;)a=a.parentNode;return b===a.tagName?a:void 0}function d(a){for(var b=["input","textarea","select"],c=[],d=0;d<b.length;d++)for(var e=a.getElementsByTagName(b[d]),f=0;f<e.length;f++)e[f].hasAttribute("required")&&c.push(e[f]);return c}function e(a,e){e=e||{};var f=[];"string"==typeof a?f=h(document.querySelectorAll(a)):"object"==typeof a&&"string"==typeof a.nodeName&&(f=[a]);for(var g=0,i=f.length;i>g;g++)!function(){var a=f[g];if("function"==typeof a.addEventListener){var h=b(a),i=-1;a.addEventListener("click",function(b){var f=!0,g=c(a,"FORM");if("undefined"!=typeof g)if("function"==typeof g.checkValidity)f=g.checkValidity();else for(var j=d(g),k=0;k<j.length;k++)""===j[k].value.replace(/^\s+|\s+$/g,"")&&(f=!1),"checkbox"!==j[k].type&&"radio"!==j[k].type||j[k].checked||(f=!1),"email"===j[k].type&&(f=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(j[k].value));f&&(h.startAfter(1),"number"==typeof e.timeout&&(clearTimeout(i),i=setTimeout(h.stop,e.timeout)),"function"==typeof e.callback&&e.callback.apply(null,[h]))},!1)}}()}function f(){for(var a=0,b=j.length;b>a;a++)j[a].stop()}function g(b){var c,d,e=b.offsetHeight;0===e&&(e=parseFloat(window.getComputedStyle(b).height)),e>32&&(e*=.8),b.hasAttribute("data-spinner-size")&&(e=parseInt(b.getAttribute("data-spinner-size"),10)),b.hasAttribute("data-spinner-color")&&(c=b.getAttribute("data-spinner-color")),b.hasAttribute("data-spinner-lines")&&(d=parseInt(b.getAttribute("data-spinner-lines"),10));var f=.2*e,g=.6*f,h=7>f?2:3;return new a({color:c||"#fff",lines:d||12,radius:f,length:g,width:h,zIndex:"auto",top:"auto",left:"auto",className:""})}function h(a){for(var b=[],c=0;c<a.length;c++)b.push(a[c]);return b}function i(a,b){var c=document.createRange();c.selectNodeContents(a),c.surroundContents(b),a.appendChild(b)}var j=[];return{bind:e,create:b,stopAll:f}});

/***/ }),

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 */
(function(root, factory) {

  // CommonJS
  if (true) {
    module.exports = factory();
  }
  // AMD module
  else if (typeof define == 'function' && define.amd) {
    define(factory);
  }
  // Browser global
  else {
    root.Spinner = factory();
  }

}
(this, function() {
  "use strict";

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl(tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for(n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins(parent /* child1, child2, ...*/) {
    for (var i=1, n=arguments.length; i<n; i++)
      parent.appendChild(arguments[i])

    return parent
  }

  /**
   * Insert a new stylesheet to hold the @keyframe or VML rules.
   */
  var sheet = (function() {
    var el = createEl('style', {type : 'text/css'})
    ins(document.getElementsByTagName('head')[0], el)
    return el.sheet || el.styleSheet
  }())

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation(alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha*100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor(el, prop) {
    var s = el.style
      , pp
      , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    for(i=0; i<prefixes.length; i++) {
      pp = prefixes[i]+prop
      if(s[pp] !== undefined) return pp
    }
    if(s[prop] !== undefined) return prop
  }

  /**
   * Sets multiple style properties at once.
   */
  function css(el, prop) {
    for (var n in prop)
      el.style[vendor(el, n)||n] = prop[n]

    return el
  }

  /**
   * Fills in default values.
   */
  function merge(obj) {
    for (var i=1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def)
        if (obj[n] === undefined) obj[n] = def[n]
    }
    return obj
  }

  /**
   * Returns the absolute page-offset of the given element.
   */
  function pos(el) {
    var o = { x:el.offsetLeft, y:el.offsetTop }
    while((el = el.offsetParent))
      o.x+=el.offsetLeft, o.y+=el.offsetTop

    return o
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor(color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 12,            // The number of lines to draw
    length: 7,            // The length of each line
    width: 5,             // The line thickness
    radius: 10,           // The radius of the inner circle
    rotate: 0,            // Rotation offset
    corners: 1,           // Roundness (0..1)
    color: '#000',        // #rgb or #rrggbb
    direction: 1,         // 1: clockwise, -1: counterclockwise
    speed: 1,             // Rounds per second
    trail: 100,           // Afterglow percentage
    opacity: 1/4,         // Opacity of the lines
    fps: 20,              // Frames per second when using setTimeout()
    zIndex: 2e9,          // Use a high z-index by default
    className: 'spinner', // CSS class to assign to the element
    top: '50%',           // center vertically
    left: '50%',          // center horizontally
    position: 'absolute'  // element position
  }

  /** The constructor */
  function Spinner(o) {
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {

    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function(target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = css(createEl(0, {className: o.className}), {position: o.position, width: 0, zIndex: o.zIndex})
        , mid = o.radius+o.length+o.width

      css(el, {
        left: o.left,
        top: o.top
      })
        
      if (target) {
        target.insertBefore(el, target.firstChild||null)
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps/o.speed
          , ostep = (1-o.opacity) / (f*o.trail / 100)
          , astep = f/o.lines

        ;(function anim() {
          i++;
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000/fps))
        })()
      }
      return self
    },

    /**
     * Stops and removes the Spinner.
     */
    stop: function() {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    },

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
    lines: function(el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill(color, shadow) {
        return css(createEl(), {
          position: 'absolute',
          width: (o.length+o.width) + 'px',
          height: o.width + 'px',
          background: color,
          boxShadow: shadow,
          transformOrigin: 'left',
          transform: 'rotate(' + ~~(360/o.lines*i+o.rotate) + 'deg) translate(' + o.radius+'px' +',0)',
          borderRadius: (o.corners * o.width>>1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute',
          top: 1+~(o.width/2) + 'px',
          transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
          opacity: o.opacity,
          animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1/o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {top: 2+'px'}))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    },

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
    opacity: function(el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML() {

    /* Utility function to create a VML tag */
    function vml(tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function(el, o) {
      var r = o.length+o.width
        , s = 2*r

      function grp() {
        return css(
          vml('group', {
            coordsize: s + ' ' + s,
            coordorigin: -r + ' ' + -r
          }),
          { width: s, height: s }
        )
      }

      var margin = -(o.width+o.length)*2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg(i, dx, filter) {
        ins(g,
          ins(css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx}),
            ins(css(vml('roundrect', {arcsize: o.corners}), {
                width: r,
                height: o.width,
                left: o.radius,
                top: -o.width>>1,
                filter: filter
              }),
              vml('fill', {color: getColor(o.color, i), opacity: o.opacity}),
              vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++)
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function(el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i+o < c.childNodes.length) {
        c = c.childNodes[i+o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

  if (!vendor(probe, 'transform') && probe.adj) initVML()
  else useCssAnimations = vendor(probe, 'animation')

  return Spinner

}));


/***/ }),

/***/ 849:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-settings"
  }), _vm._v(" 2D Transforms Flat Buttons\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "flatbuttons"
  }, [_c('div', {
    staticClass: "text-left"
  }, [_c('h5', [_vm._v("Radiused Buttons")]), _vm._v(" "), _c('ul', [_c('li', [_c('button', {
    staticClass: "button button-rounded button-flat hvr-buzz"
  }, [_vm._v("Buzz")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-rounded button-primary-flat hvr-hang"
  }, [_vm._v("Hang\n                                    ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-rounded button-action-flat hvr-sink"
  }, [_vm._v("Sink\n                                    ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-rounded button-highlight-flat hvr-pop"
  }, [_vm._v("Pop\n                                    ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-rounded button-caution-flat hvr-float"
  }, [_vm._v("Float\n                                    ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-rounded button-royal-flat hvr-rotate"
  }, [_vm._v("Rotate\n                                    ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "text-left btn-rounded"
  }, [_c('h5', [_vm._v("Rounded Buttons")]), _vm._v(" "), _c('ul', [_c('li', [_c('button', {
    staticClass: "button button-pill button-flat hvr-grow"
  }, [_vm._v("\n                                        Grow Button\n                                    ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-pill button-primary-flat hvr-shrink"
  }, [_vm._v("\n                                        Shrink Button\n                                    ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-pill button-action-flat hvr-pulse"
  }, [_vm._v("\n                                        Pulse Button\n                                    ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-pill button-highlight-flat hvr-pulse-grow"
  }, [_vm._v("\n                                        Pulse-grow\n                                    ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-pill button-caution-flat hvr-pulse-shrink"
  }, [_vm._v("\n                                        Pulse-shrink\n                                    ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-pill button-royal-flat hvr-push"
  }, [_vm._v("\n                                        Push Button\n                                    ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "text-left"
  }, [_c('h5', [_vm._v("Rectangle Box")]), _vm._v(" "), _c('ul', [_c('li', [_c('button', {
    staticClass: "button button-flat hvr-wobble-skew"
  }, [_vm._v("Button")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-primary-flat hvr-wobble-bottom"
  }, [_vm._v("Button")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-action-flat hvr-wobble-to-top-right"
  }, [_vm._v("Button\n                                    ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-highlight-flat hvr-wobble-vertical"
  }, [_vm._v("Button\n                                    ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-caution-flat hvr-wobble-horizontal"
  }, [_vm._v("Button\n                                    ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-royal-flat hvr-skew-backward"
  }, [_vm._v("Button")])])])]), _vm._v(" "), _c('div', {
    staticClass: "text-left"
  }, [_c('h5', [_vm._v("Cirlce Buttons")]), _vm._v(" "), _c('ul', [_c('li', [_c('button', {
    staticClass: "button button-circle button-flat hvr-wobble-top"
  }, [_vm._v("Button\n                                    ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-circle button-primary-flat hvr-skew"
  }, [_vm._v("Button\n                                    ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-circle button-action-flat hvr-wobble-to-top-right"
  }, [_vm._v("\n                                        Button\n                                    ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-circle button-highlight-flat hvr-pulse-grow"
  }, [_vm._v("\n                                        Button\n                                    ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-circle button-caution-flat hvr-grow"
  }, [_vm._v("Button\n                                    ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-circle button-royal-flat hvr-buzz-out"
  }, [_vm._v("Button\n                                    ")])])])])])])])])]), _vm._v(" "), _c('div', {
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
    staticClass: "ti-bell"
  }), _vm._v(" Shadow and Glow Transitions Buttons\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "flatbuttons_small"
  }, [_c('ul', [_c('li', [_c('button', {
    staticClass: "button button-glow button-rounded button-flat hvr-float-shadow"
  }, [_vm._v("\n                                    Button\n                                ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-glow button-rounded button-primary-flat hvr-float-shadow"
  }, [_vm._v("\n                                    Button\n                                ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-glow button-rounded button-action-flat hvr-float-shadow"
  }, [_vm._v("\n                                    Button\n                                ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-glow button-rounded button-highlight-flat hvr-float-shadow"
  }, [_vm._v("\n                                    Button\n                                ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-glow button-rounded button-caution-flat hvr-float-shadow"
  }, [_vm._v("\n                                    Button\n                                ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-glow button-rounded button-royal-flat hvr-float-shadow"
  }, [_vm._v("\n                                    Button\n                                ")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-rocket"
  }), _vm._v(" Quick Shortcuts\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', [_c('div', {
    staticClass: "col-xs-6 col-md-6"
  }, [_c('button', {
    staticClass: "btn btn-danger btn-sm btn-responsive",
    attrs: {
      "role": "button"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-list-alt"
  }), _vm._v(" "), _c('br'), _vm._v(" Apps\n                            ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-warning btn-sm btn-responsive",
    attrs: {
      "role": "button"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-bookmark"
  }), _vm._v(" "), _c('br'), _vm._v(" Bookmarks\n                            ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary btn-sm btn-responsive",
    attrs: {
      "role": "button"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-signal"
  }), _vm._v(" "), _c('br'), _vm._v(" Reports\n                            ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary btn-sm btn-responsive",
    attrs: {
      "role": "button"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-comment"
  }), _vm._v(" "), _c('br'), _vm._v(" Comments\n                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6 col-md-6"
  }, [_c('button', {
    staticClass: "btn btn-success btn-sm btn-responsive",
    attrs: {
      "role": "button"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-user"
  }), _vm._v(" "), _c('br'), _vm._v(" Users\n                            ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info btn-sm btn-responsive",
    attrs: {
      "role": "button"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-file"
  }), _vm._v(" "), _c('br'), _vm._v(" Notes\n                            ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary btn-sm btn-responsive",
    attrs: {
      "role": "button"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-picture"
  }), _vm._v(" "), _c('br'), _vm._v(" Photos\n                            ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary btn-sm btn-responsive",
    attrs: {
      "role": "button"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-tag"
  }), _vm._v(" "), _c('br'), _vm._v(" Tags\n                            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-12"
  }, [_c('button', {
    staticClass: "btn btn-success btn-lg btn-block",
    attrs: {
      "role": "button"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-globe"
  }), _vm._v(" Website\n                            ")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-rocket"
  }), _vm._v(" 3-D Buttons\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "flatbuttons"
  }, [_c('ul', [_c('li', [_c('button', {
    staticClass: "button button-3d"
  }, [_vm._v("Button")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-3d button-primary button-rounded btn_3d"
  }, [_vm._v("Button\n                                ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-3d button-action button-pill btn_3d"
  }, [_vm._v("Button\n                                ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-3d button-highlight button-circle btn_3d"
  }, [_vm._v("Button\n                                ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-3d button-caution icon-btn btn_3d"
  }, [_c('i', {
    staticClass: "fa ti-instagram"
  }), _vm._v(" Button\n                                ")])]), _vm._v(" "), _c('li', [_c('button', {
    staticClass: "button button-3d button-royal btn_3d"
  }, [_vm._v("Button")])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-arrow-circle-up"
  }), _vm._v(" Spinner Buttons\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "pad_left"
  }, [_c('div', {
    staticClass: "text-left"
  }, [_c('div', {
    staticClass: "row "
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('h5', [_vm._v("Buttons")])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-2 col-sm-4"
  }, [_c('button', {
    staticClass: "ladda-button btn btn-primary button_normal",
    attrs: {
      "data-style": "expand-left"
    }
  }, [_vm._v("Expand-left\n                                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4"
  }, [_c('button', {
    staticClass: "ladda-button btn btn-primary button_normal",
    attrs: {
      "data-style": "expand-right"
    }
  }, [_vm._v("Expand-right\n                                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4"
  }, [_c('button', {
    staticClass: "ladda-button btn btn-primary button_normal",
    attrs: {
      "data-style": "expand-up"
    }
  }, [_vm._v("Expand-up\n                                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4"
  }, [_c('button', {
    staticClass: "ladda-button btn btn-primary button_normal",
    attrs: {
      "data-style": "slide-down"
    }
  }, [_vm._v("Slide-down\n                                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4"
  }, [_c('button', {
    staticClass: "ladda-button btn btn-primary button_normal",
    attrs: {
      "data-style": "contract"
    }
  }, [_vm._v("Contract\n                                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4"
  }, [_c('button', {
    staticClass: "ladda-button btn btn-primary button_normal",
    attrs: {
      "data-style": "zoom-in"
    }
  }, [_vm._v("Zoom-in\n                                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "row "
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('h5', [_vm._v("Icon Buttons")])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-2 col-sm-4"
  }, [_c('button', {
    staticClass: "ladda-button btn btn-info button_normal",
    attrs: {
      "data-style": "slide-left"
    }
  }, [_c('i', {
    staticClass: "fa ti-arrow-circle-left",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" Slide-left\n                                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4"
  }, [_c('button', {
    staticClass: "ladda-button btn btn-info button_normal",
    attrs: {
      "data-style": "slide-right"
    }
  }, [_vm._v("Slide-right "), _c('i', {
    staticClass: "fa ti-arrow-circle-right",
    attrs: {
      "aria-hidden": "true"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4"
  }, [_c('button', {
    staticClass: "ladda-button btn btn-info button_normal",
    attrs: {
      "data-style": "slide-up"
    }
  }, [_vm._v("Slide-up "), _c('i', {
    staticClass: "fa ti-arrow-circle-up",
    attrs: {
      "aria-hidden": "true"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4"
  }, [_c('button', {
    staticClass: "ladda-button btn btn-info button_normal",
    attrs: {
      "data-style": "contract"
    }
  }, [_c('i', {
    staticClass: "fa ti-filter",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" Contract\n                                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4"
  }, [_c('button', {
    staticClass: "ladda-button btn btn-info button_normal",
    attrs: {
      "data-style": "zoom-out"
    }
  }, [_c('i', {
    staticClass: "fa ti-zoom-out",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" Zoom-out\n                                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12 col-sm-6"
  }, [_c('div', {
    staticClass: "row text-left"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('h5', [_vm._v("Button Sizes")])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-4"
  }, [_c('button', {
    staticClass: "ladda-button btn btn-warning btn-lg button_normal",
    attrs: {
      "data-style": "expand-right"
    }
  }, [_vm._v("Large\n                                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('button', {
    staticClass: "ladda-button btn btn-warning btn-sm button_normal",
    attrs: {
      "data-style": "expand-right"
    }
  }, [_vm._v("Small\n                                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('button', {
    staticClass: "ladda-button btn btn-warning btn-xs button_normal",
    attrs: {
      "data-style": "expand-right"
    }
  }, [_vm._v("Extra Small\n                                            ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12 col-sm-6"
  }, [_c('div', {
    staticClass: "row text-left"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('h5', [_vm._v("Progress Button Spinners")])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-5"
  }, [_c('button', {
    staticClass: "ladda-button btn btn-success button_progress",
    attrs: {
      "data-style": "expand-right"
    }
  }, [_vm._v("Expand-right\n                                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-5"
  }, [_c('button', {
    staticClass: "ladda-button btn btn-success button_progress",
    attrs: {
      "data-style": "contract"
    }
  }, [_vm._v("contract\n                                            ")])])])])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-settings"
  }), _vm._v(" Buttons\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "flatbuttons"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h5', {
    staticClass: "example-title"
  }, [_vm._v("Icon Button & Dropdown")]), _vm._v(" "), _c('div', {
    staticClass: "example example-buttons"
  }, [_c('button', {
    staticClass: "btn btn-icon btn-default m-r-50",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "icon fa fa-fw ti-location-pin",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-icon btn-primary m-r-50",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "icon fa fa-fw ti-layout-grid3",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-icon btn-success m-r-50",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "icon fa fa-fw ti-bell",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-icon btn-info m-r-50",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "icon fa fa-fw ti-calendar",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-icon btn-warning btn-round m-r-50",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "icon fa fa-fw ti-time",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-icon btn-danger btn-round m-r-50",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "icon fa fa-fw ti-flag-alt-2",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "btn-group drop_btn",
    attrs: {
      "role": "group"
    }
  }, [_c('button', {
    staticClass: "btn btn-primary dropdown-toggle m-r-50",
    attrs: {
      "type": "button",
      "id": "exampleIconDropdown1",
      "data-toggle": "dropdown",
      "aria-expanded": "false"
    }
  }, [_c('i', {
    staticClass: "icon fa fa-fw ti-calendar",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu",
    attrs: {
      "aria-labelledby": "exampleIconDropdown1",
      "role": "menu"
    }
  }, [_c('li', {
    attrs: {
      "role": "presentation"
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:void(0)",
      "role": "menuitem"
    }
  }, [_vm._v("Dropdown link")])]), _vm._v(" "), _c('li', {
    attrs: {
      "role": "presentation"
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:void(0)",
      "role": "menuitem"
    }
  }, [_vm._v("Dropdown link")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12 "
  }, [_c('div', {
    staticClass: "example-wrap"
  }, [_c('h5', {
    staticClass: "example-title"
  }, [_vm._v("Button Animation")]), _vm._v(" "), _c('div', {
    staticClass: "btn-group",
    attrs: {
      "role": "group"
    }
  }, [_c('button', {
    staticClass: "btn btn-animate btn-animate-side btn-success m-r-50",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_c('i', {
    staticClass: "icon fa fa-fw ti-import",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v("Side Animation")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-animate btn-animate-vertical btn-success m-r-50",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_c('i', {
    staticClass: "icon fa fa-fw ti-import",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v("Vertical\n                                                                  Animation")])])])])])])])])])])]), _vm._v(" "), _c('div', {
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
    staticClass: "ti-layout-column3"
  }), _vm._v(" Group buttons\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', [_c('div', {
    staticClass: "col-md-12 text-center"
  }, [_c('div', {
    staticClass: "ui-group-buttons"
  }, [_c('a', {
    staticClass: "btn btn-success",
    attrs: {
      "href": "#",
      "role": "button"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-thumbs-up"
  })]), _vm._v(" "), _c('div', {
    staticClass: "or"
  }), _vm._v(" "), _c('a', {
    staticClass: "btn btn-danger",
    attrs: {
      "href": "#",
      "role": "button"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-thumbs-down"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "ui-group-buttons"
  }, [_c('a', {
    staticClass: "btn btn-success",
    attrs: {
      "href": "#",
      "role": "button"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-floppy-disk"
  })]), _vm._v(" "), _c('div', {
    staticClass: "or"
  }), _vm._v(" "), _c('a', {
    staticClass: "btn btn-danger",
    attrs: {
      "href": "#",
      "role": "button"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-trash"
  })])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "ui-group-buttons"
  }, [_c('a', {
    staticClass: "btn btn-success",
    attrs: {
      "href": "#",
      "role": "button"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-ok"
  }), _vm._v(" Sign Up\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "or"
  }), _vm._v(" "), _c('a', {
    staticClass: "btn btn-default",
    attrs: {
      "href": "#",
      "role": "button"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-remove"
  }), _vm._v(" Reset\n                                ")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "ui-group-buttons"
  }, [_c('button', {
    staticClass: "btn btn-primary btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Large")]), _vm._v(" "), _c('div', {
    staticClass: "or or-lg"
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Large")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "ui-group-buttons"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Default")]), _vm._v(" "), _c('div', {
    staticClass: "or"
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Success")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "ui-group-buttons"
  }, [_c('button', {
    staticClass: "btn btn-primary btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("\n                                    Small\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "or or-sm"
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("\n                                    Small\n                                ")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "ui-group-buttons"
  }, [_c('button', {
    staticClass: "btn btn-primary btn-xs",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("\n                                    Extra small\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "or or-xs"
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success btn-xs",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("\n                                    Extra small\n                                ")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-save"
  }), _vm._v(" Buttons With Labels\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "col-lg-12 col-md-12 col-xs-12 col-sm-12"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6 col-sm-6"
  }, [_c('button', {
    staticClass: "btn btn-labeled btn-success",
    attrs: {
      "type": "button"
    }
  }, [_c('span', {
    staticClass: "btn-label"
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-ok"
  })]), _vm._v(" Success\n                                ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 col-sm-6"
  }, [_c('button', {
    staticClass: "btn btn-labeled btn-danger",
    attrs: {
      "type": "button"
    }
  }, [_c('span', {
    staticClass: "btn-label"
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-remove"
  })]), _vm._v(" Cancel\n                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6 col-sm-6"
  }, [_c('button', {
    staticClass: "btn btn-labeled btn-warning",
    attrs: {
      "type": "button"
    }
  }, [_c('span', {
    staticClass: "btn-label"
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-bookmark"
  })]), _vm._v(" Bookmark\n                                ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 col-sm-6"
  }, [_c('button', {
    staticClass: "btn btn-labeled btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_c('span', {
    staticClass: "btn-label"
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-camera"
  })]), _vm._v(" Camera\n                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6 col-sm-6"
  }, [_c('button', {
    staticClass: "btn btn-labeled btn-default",
    attrs: {
      "type": "button"
    }
  }, [_c('span', {
    staticClass: "btn-label"
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-chevron-left"
  })]), _vm._v(" Left\n                                ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 col-sm-6"
  }, [_c('button', {
    staticClass: "btn btn-labeled btn-default",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("\n                                    Right "), _c('span', {
    staticClass: "btn-label label-right"
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-chevron-right"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6 col-sm-6"
  }, [_c('button', {
    staticClass: "btn btn-labeled btn-success",
    attrs: {
      "type": "button"
    }
  }, [_c('span', {
    staticClass: "btn-label"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-thumb-up"
  })]), _vm._v(" Up\n                                ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 col-sm-6"
  }, [_c('button', {
    staticClass: "btn btn-labeled btn-warning",
    attrs: {
      "type": "button"
    }
  }, [_c('span', {
    staticClass: "btn-label"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-thumb-down"
  })]), _vm._v(" Down\n                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6 col-sm-6"
  }, [_c('button', {
    staticClass: "btn btn-labeled btn-info",
    attrs: {
      "type": "button"
    }
  }, [_c('span', {
    staticClass: "btn-label"
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-refresh"
  })]), _vm._v(" Refresh\n                                ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 col-sm-6"
  }, [_c('button', {
    staticClass: "btn btn-labeled btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_c('span', {
    staticClass: "btn-label"
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-trash"
  })]), _vm._v(" Trash\n                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6 col-sm-6"
  }, [_c('a', {
    staticClass: "btn btn-warning btn-labeled",
    attrs: {
      "role": "button"
    }
  }, [_c('span', {
    staticClass: "btn-label"
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-info-sign"
  })]), _vm._v(" Info Web\n                                ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 col-sm-6"
  }, [_c('a', {
    staticClass: "btn btn-success btn-labeled",
    attrs: {
      "role": "button"
    }
  }, [_c('span', {
    staticClass: "btn-label"
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-globe"
  })]), _vm._v(" Web\n                                ")])])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6090b309", module.exports)
  }
}

/***/ }),

/***/ 988:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(648);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("9c5bebd2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6090b309\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=4!./buttons.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6090b309\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=4!./buttons.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 989:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(649);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("440e8c7c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6090b309\",\"scoped\":false,\"hasInlineConfig\":true}!./advbuttons.css", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6090b309\",\"scoped\":false,\"hasInlineConfig\":true}!./advbuttons.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 990:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(650);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("cd1e01ee", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6090b309\",\"scoped\":false,\"hasInlineConfig\":true}!./hover-min.css", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6090b309\",\"scoped\":false,\"hasInlineConfig\":true}!./hover-min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 991:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(651);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("61ca47f6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6090b309\",\"scoped\":false,\"hasInlineConfig\":true}!./ladda-themeless.min.css", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6090b309\",\"scoped\":false,\"hasInlineConfig\":true}!./ladda-themeless.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});