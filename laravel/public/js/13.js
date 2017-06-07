webpackJsonp([13],{

/***/ 1029:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(690);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("2909b51c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e65421c6\",\"scoped\":false,\"hasInlineConfig\":true}!./radio_checkbox.css", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e65421c6\",\"scoped\":false,\"hasInlineConfig\":true}!./radio_checkbox.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1030:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(691);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("3c37e03b", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e65421c6\",\"scoped\":false,\"hasInlineConfig\":true}!./jquery-labelauty.css", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e65421c6\",\"scoped\":false,\"hasInlineConfig\":true}!./jquery-labelauty.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1031:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(692);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("0cb03e4d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e65421c6\",\"scoped\":false,\"hasInlineConfig\":true}!./awesome-bootstrap-checkbox.css", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e65421c6\",\"scoped\":false,\"hasInlineConfig\":true}!./awesome-bootstrap-checkbox.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1032:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(693);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("2ab0b596", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e65421c6\",\"scoped\":false,\"hasInlineConfig\":true}!./prettyCheckable.css", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e65421c6\",\"scoped\":false,\"hasInlineConfig\":true}!./prettyCheckable.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1032)
__webpack_require__(1030)
__webpack_require__(1031)
__webpack_require__(1029)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(427),
  /* template */
  __webpack_require__(874),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Sites/vue_workflows/laravel/resources/assets/js/components/components/radio_checkboxes.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] radio_checkboxes.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e65421c6", Component.options)
  } else {
    hotAPI.reload("data-v-e65421c6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 315:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: 1: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: Syntax error: \"(\" unexpected\n\n    at Promise.all.then.arr (/home/vagrant/Sites/vue_workflows/laravel/node_modules/execa/index.js:201:11)\n    at process._tickCallback (internal/process/next_tick.js:109:7)");

/***/ }),

/***/ 367:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: 1: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: Syntax error: \"(\" unexpected\n\n    at Promise.all.then.arr (/home/vagrant/Sites/vue_workflows/laravel/node_modules/execa/index.js:201:11)\n    at process._tickCallback (internal/process/next_tick.js:109:7)");

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendors_prettyCheckable_dist_prettyCheckable_min_js__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendors_prettyCheckable_dist_prettyCheckable_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendors_prettyCheckable_dist_prettyCheckable_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendors_jquery_labelauty_source_jquery_labelauty_js__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendors_jquery_labelauty_source_jquery_labelauty_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vendors_jquery_labelauty_source_jquery_labelauty_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "radio_check",
    mounted: function mounted() {
        "use strict";

        $(document).ready(function () {
            //iCheck for checkbox and radio inputs
            $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
                checkboxClass: 'icheckbox_minimal',
                radioClass: 'iradio_minimal'
            });
            //Red color scheme for iCheck
            $('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red').iCheck({
                checkboxClass: 'icheckbox_minimal-red',
                radioClass: 'iradio_minimal-red'
            });
            //green color scheme for iCheck
            $('input[type="checkbox"].minimal-green, input[type="radio"].minimal-green').iCheck({
                checkboxClass: 'icheckbox_minimal-green',
                radioClass: 'iradio_minimal-green'
            });
            //Flat red color scheme for iCheck
            $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
                checkboxClass: 'icheckbox_flat-red',
                radioClass: 'iradio_flat-red'
            });
            $('input[type="checkbox"].square-blue, input[type="radio"].square-blue').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue',
                increaseArea: '20%' // optional
            });

            $('input.test1').prettyCheckable({});
            $('input.TestDisabled').prettyCheckable({});
            $('input.test2').prettyCheckable({});
            $('input.test3').prettyCheckable({});
            $('input.test4').prettyCheckable({});

            $(".to-labelauty").labelauty({
                minimum_width: "155px"
            });
            $(".to-labelauty-icon").labelauty({
                label: false
            });
            /*search radio and checkbox code*/
            $('#search').on('keyup', function () {
                var pattern = $(this).val();
                $('.searchable-container .items').hide();
                $('.searchable-container .items').filter(function () {
                    return $(this).text().match(new RegExp(pattern, 'i'));
                }).show();
            });
        });
    },
    destroyed: function destroyed() {},
    methods: {
        changeState: function changeState() {
            var el = document.getElementById("indeterminateCheckbox");
            if (el.readOnly) el.checked = el.readOnly = false;else if (!el.checked) el.readOnly = el.indeterminate = true;
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
 * LABELAUTY jQuery Plugin
 *
 * @file: jquery-labelauty.js
 * @author: Francisco Neves (@fntneves)
 * @site: www.francisconeves.com
 * @license: MIT License
 */

(function ($) {

	$.fn.labelauty = function (options) {
		/*
   * Our default settings
   * Hope you don't need to change anything, with these settings
   */
		var settings = $.extend({
			// Development Mode
			// This will activate console debug messages
			development: false,

			// Trigger Class
			// This class will be used to apply styles
			class: "labelauty",

			// Use text label ?
			// If false, then only an icon represents the input
			label: true,

			// Separator between labels' messages
			// If you use this separator for anything, choose a new one
			separator: "|",

			// Default Checked Message
			// This message will be visible when input is checked
			checked_label: "Checked",

			// Default UnChecked Message
			// This message will be visible when input is unchecked
			unchecked_label: "Unchecked",

			// Force random ID's
			// Replace original ID's with random ID's,
			force_random_id: false,

			// Minimum Label Width
			// This value will be used to apply a minimum width to the text labels
			minimum_width: false,

			// Use the greatest width between two text labels ?
			// If this has a true value, then label width will be the greatest between labels
			same_width: true
		}, options);

		/*
   * Let's create the core function
   * It will try to cover all settings and mistakes of using
   */
		return this.each(function () {
			var $object = $(this);
			var use_labels = true;
			var labels;
			var labels_object;
			var input_id;

			// Test if object is a check input
			// Don't mess me up, come on
			if ($object.is(":checkbox") === false && $object.is(":radio") === false) return this;

			// Add "labelauty" class to all checkboxes
			// So you can apply some custom styles
			$object.addClass(settings.class);

			// Get the value of "data-labelauty" attribute
			// Then, we have the labels for each case (or not, as we will see)
			labels = $object.attr("data-labelauty");

			use_labels = settings.label;

			// It's time to check if it's going to the right way
			// Null values, more labels than expected or no labels will be handled here
			if (use_labels === true) {
				if (labels == null || labels.length === 0) {
					// If attribute has no label and we want to use, then use the default labels
					labels_object = new Array();
					labels_object[0] = settings.unchecked_label;
					labels_object[1] = settings.checked_label;
				} else {
					// Ok, ok, it's time to split Checked and Unchecked labels
					// We split, by the "settings.separator" option
					labels_object = labels.split(settings.separator);

					// Now, let's check if exist _only_ two labels
					// If there's more than two, then we do not use labels :(
					// Else, do some additional tests
					if (labels_object.length > 2) {
						use_labels = false;
						debug(settings.development, "There's more than two labels. LABELAUTY will not use labels.");
					} else {
						// If there's just one label (no split by "settings.separator"), it will be used for both cases
						// Here, we have the possibility of use the same label for both cases
						if (labels_object.length === 1) debug(settings.development, "There's just one label. LABELAUTY will use this one for both cases.");
					}
				}
			}

			/*
    * Let's begin the beauty
    */

			// Start hiding ugly checkboxes
			// Obviously, we don't need native checkboxes :O
			$object.css({ display: "none" });

			// We don't need more data-labelauty attributes!
			// Ok, ok, it's just for beauty improvement
			$object.removeAttr("data-labelauty");

			// Now, grab checkbox ID Attribute for "label" tag use
			// If there's no ID Attribute, then generate a new one
			input_id = $object.attr("id");

			if (settings.force_random_id || input_id == null || input_id.trim() === "") {
				var input_id_number = 1 + Math.floor(Math.random() * 1024000);
				input_id = "labelauty-" + input_id_number;

				// Is there any element with this random ID ?
				// If exists, then increment until get an unused ID
				while ($(input_id).length !== 0) {
					input_id_number++;
					input_id = "labelauty-" + input_id_number;
					debug(settings.development, "Holy crap, between 1024 thousand numbers, one raised a conflict. Trying again.");
				}

				$object.attr("id", input_id);
			}

			// Now, add necessary tags to make this work
			// Here, we're going to test some control variables and act properly
			$object.after(create(input_id, labels_object, use_labels));

			// Now, add "min-width" to label
			// Let's say the truth, a fixed width is more beautiful than a variable width
			if (settings.minimum_width !== false) $object.next("label[for=" + input_id + "]").css({ "min-width": settings.minimum_width });

			// Now, add "min-width" to label
			// Let's say the truth, a fixed width is more beautiful than a variable width
			if (settings.same_width != false && settings.label == true) {
				var label_object = $object.next("label[for=" + input_id + "]");
				var unchecked_width = getRealWidth(label_object.find("span.labelauty-unchecked"));
				var checked_width = getRealWidth(label_object.find("span.labelauty-checked"));

				if (unchecked_width > checked_width) label_object.find("span.labelauty-checked").width(unchecked_width);else label_object.find("span.labelauty-unchecked").width(checked_width);
			}
		});
	};

	/*
  * Tricky code to work with hidden elements, like tabs.
  * Note: This code is based on jquery.actual plugin.
  * https://github.com/dreamerslab/jquery.actual
  */
	function getRealWidth(element) {
		var width = 0;
		var $target = element;
		var style = 'position: absolute !important; top: -1000 !important; ';

		$target = $target.clone().attr('style', style).appendTo('body');
		width = $target.width(true);
		$target.remove();

		return width;
	}

	function debug(debug, message) {
		if (debug && window.console && window.console.log) window.console.log("jQuery-LABELAUTY: " + message);
	};

	function create(input_id, messages_object, label) {
		var block;
		var unchecked_message;
		var checked_message;

		if (messages_object == null) unchecked_message = checked_message = "";else {
			unchecked_message = messages_object[0];

			// If checked message is null, then put the same text of unchecked message
			if (messages_object[1] == null) checked_message = unchecked_message;else checked_message = messages_object[1];
		}

		if (label == true) {
			block = '<label for="' + input_id + '">' + '<span class="labelauty-unchecked-image"></span>' + '<span class="labelauty-unchecked">' + unchecked_message + '</span>' + '<span class="labelauty-checked-image"></span>' + '<span class="labelauty-checked">' + checked_message + '</span>' + '</label>';
		} else {
			block = '<label for="' + input_id + '">' + '<span class="labelauty-unchecked-image"></span>' + '<span class="labelauty-checked-image"></span>' + '</label>';
		}

		return block;
	};
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (a, b, c, d) {
  "use strict";
  var e = "prettyCheckable",
      f = "plugin_" + e,
      g = { label: "", labelPosition: "right", customClass: "", color: "blue" },
      h = function h(c) {
    b.ko && a(c).on("change", function (b) {
      if (b.preventDefault(), b.originalEvent === d) {
        var c = a(this).closest(".clearfix"),
            e = a(c).find("a:first"),
            f = e.hasClass("checked");f === !0 ? e.addClass("checked") : e.removeClass("checked");
      }
    }), c.find("a:first, label").on("touchstart click", function (c) {
      c.preventDefault();var d = a(this).closest(".clearfix"),
          e = d.find("input"),
          f = d.find("a:first");f.hasClass("disabled") !== !0 && ("radio" === e.prop("type") && a('input[name="' + e.attr("name") + '"]').each(function (b, c) {
        a(c).prop("checked", !1).parent().find("a:first").removeClass("checked");
      }), b.ko ? ko.utils.triggerEvent(e[0], "click") : e.prop("checked") ? e.prop("checked", !1).change() : e.prop("checked", !0).change(), f.toggleClass("checked"));
    }), c.find("a:first").on("keyup", function (b) {
      32 === b.keyCode && a(this).click();
    });
  },
      i = function i(b) {
    this.element = b, this.options = a.extend({}, g);
  };i.prototype = { init: function init(b) {
      a.extend(this.options, b);var c = a(this.element);c.parent().addClass("has-pretty-child"), c.css("display", "none");var e = c.data("type") !== d ? c.data("type") : c.attr("type"),
          f = null,
          g = c.attr("id");if (g !== d) {
        var i = a("label[for=" + g + "]");i.length > 0 && (f = i.text(), i.remove());
      }"" === this.options.label && (this.options.label = f), f = c.data("label") !== d ? c.data("label") : this.options.label;var j = c.data("labelposition") !== d ? "label" + c.data("labelposition") : "label" + this.options.labelPosition,
          k = c.data("customclass") !== d ? c.data("customclass") : this.options.customClass,
          l = c.data("color") !== d ? c.data("color") : this.options.color,
          m = c.prop("disabled") === !0 ? "disabled" : "",
          n = ["pretty" + e, j, k, l].join(" ");c.wrap('<div class="clearfix ' + n + '"></div>').parent().html();var o = [],
          p = c.prop("checked") ? "checked" : "";"labelright" === j ? (o.push('<a href="#" class="' + p + " " + m + '"></a>'), o.push('<label for="' + c.attr("id") + '">' + f + "</label>")) : (o.push('<label for="' + c.attr("id") + '">' + f + "</label>"), o.push('<a href="#" class="' + p + " " + m + '"></a>')), c.parent().append(o.join("\n")), h(c.parent());
    }, check: function check() {
      "radio" === a(this.element).prop("type") && a('input[name="' + a(this.element).attr("name") + '"]').each(function (b, c) {
        a(c).prop("checked", !1).attr("checked", !1).parent().find("a:first").removeClass("checked");
      }), a(this.element).prop("checked", !0).attr("checked", !0).parent().find("a:first").addClass("checked");
    }, uncheck: function uncheck() {
      a(this.element).prop("checked", !1).attr("checked", !1).parent().find("a:first").removeClass("checked");
    }, enable: function enable() {
      a(this.element).removeAttr("disabled").parent().find("a:first").removeClass("disabled");
    }, disable: function disable() {
      a(this.element).attr("disabled", "disabled").parent().find("a:first").addClass("disabled");
    }, destroy: function destroy() {
      var b = a(this.element),
          c = b.clone(),
          e = b.attr("id");if (e !== d) {
        var f = a("label[for=" + e + "]");f.length > 0 && f.insertBefore(b.parent());
      }c.removeAttr("style").insertAfter(f), b.parent().remove();
    } }, a.fn[e] = function (b) {
    var c, d;if (this.data(f) instanceof i || this.data(f, new i(this)), d = this.data(f), d.element = this, "undefined" == typeof b || "object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) "function" == typeof d.init && d.init(b);else {
      if ("string" == typeof b && "function" == typeof d[b]) return c = Array.prototype.slice.call(arguments, 1), d[b].apply(d, c);a.error("Method " + b + " does not exist on jQuery." + e);
    }
  };
}(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.m-l-10 {\r\n    margin-left : 10px;\n}\ninput.labelauty + label > span.labelauty-unchecked-image {\r\n    background-image : url("+__webpack_require__(367)+");\n}\ninput.labelauty + label > span.labelauty-checked-image {\r\n    background-image : url("+__webpack_require__(746)+");\n}\ninput.labelauty.check-icon + label > span.labelauty-unchecked-image {\r\n    background-image : url("+__webpack_require__(315)+");\n}\ninput.labelauty.synch-icon + label > span.labelauty-unchecked-image {\r\n    background-image : url("+__webpack_require__(748)+");\n}\ninput.labelauty.synch-icon + label > span.labelauty-checked-image {\r\n    background-image : url("+__webpack_require__(747)+");\n}\ninput.labelauty.terms-icon + label > span.labelauty-unchecked-image {\r\n    background-image : url("+__webpack_require__(750)+");\n}\ninput.labelauty.terms-icon + label > span.labelauty-checked-image {\r\n    background-image : url("+__webpack_require__(749)+");\n}\ninput.labelauty.disabled-icon + label > span.labelauty-unchecked-image {\r\n    background-image : url("+__webpack_require__(315)+");\n}\ninput.labelauty.disabled-icon + label > span.labelauty-checked-image {\r\n    background-image : url("+__webpack_require__(315)+");\n}\ninput.labelauty + label {\r\n    display : inline-block;\n}\ninput.labelauty.synch-icon1 + label > span.labelauty-checked-image {\r\n    background-image : url("+__webpack_require__(715)+");\n}\ninput.labelauty.synch-icon2 + label > span.labelauty-checked-image {\r\n    background-image : url("+__webpack_require__(716)+");\n}\ninput.labelauty.synch-icon1 + label > span.labelauty-unchecked-image {\r\n    background-image : url("+__webpack_require__(315)+");\n}\ninput.labelauty.synch-icon2 + label > span.labelauty-unchecked-image {\r\n    background-image : url("+__webpack_require__(367)+");\n}\ninput.labelauty:checked + label,\r\n.checkbox-primary input[type=\"checkbox\"]:checked + label::before,\r\n.checkbox-primary input[type=\"radio\"]:checked + label::before {\r\n    background-color : #428bca;\n}\n.checkbox-info input[type=\"checkbox\"]:checked + label::before,\r\n.checkbox-info input[type=\"radio\"]:checked + label::before,\r\n.radio-info input[type=\"radio\"]:checked + label::after {\r\n    background-color : #4fc1e9;\n}\n.checkbox-danger input[type=\"checkbox\"]:checked + label::before,\r\n.checkbox-danger input[type=\"radio\"]:checked + label::before,\r\n.radio-danger input[type=\"radio\"]:checked + label::after {\r\n    background-color : #fb8678;\n}\n.checkbox-success input[type=\"checkbox\"]:checked + label::before,\r\n.checkbox-success input[type=\"radio\"]:checked + label::before {\r\n    background-color : #22d69d;\n}\n.checkbox-warning input[type=\"checkbox\"]:checked + label::before,\r\n.checkbox-warning input[type=\"radio\"]:checked + label::before {\r\n    background-color : #ffb65f;\n}\n.checkbox-default input[type=\"checkbox\"]:checked + label::before,\r\n.checkbox-default input[type=\"radio\"]:checked + label::before {\r\n    background-color : #dcdcdc;\n}\n.checkbox-success input[type=\"checkbox\"]:indeterminate + label::before, .checkbox-success input[type=\"radio\"]:indeterminate + label::before {\r\n    background-color : #22d69d;\r\n    border-color     : #22d69d;\n}\n.checkbox-danger input[type=\"checkbox\"]:indeterminate + label::before, .checkbox-danger input[type=\"radio\"]:indeterminate + label::before {\r\n    background-color : #fb8678;\r\n    border-color     : #fb8678;\n}\n.checkbox-default input[type=\"checkbox\"]:indeterminate + label::before, .checkbox-default input[type=\"radio\"]:indeterminate + label::before {\r\n    background-color : #DCDCDC;\r\n    border-color     : #DCDCDC;\n}\n.checkbox-primary input[type=\"checkbox\"]:checked + label::before, .checkbox-primary input[type=\"radio\"]:checked + label::before {\r\n    background-color : #428BCA;\r\n    border-color     : #428BCA;\n}\n.checkbox-info input[type=\"checkbox\"]:checked + label::before, .checkbox-info input[type=\"radio\"]:checked + label::before {\r\n    background-color : #4FC1E9;\r\n    border-color     : #4FC1E9;\n}\n.checkbox-warning input[type=\"checkbox\"]:checked + label::before, .checkbox-warning input[type=\"radio\"]:checked + label::before {\r\n    background-color : #FFB65F;\r\n    border-color     : #FFB65F;\n}\n.checkbox-primary input[type=\"checkbox\"]:indeterminate + label::before, .checkbox-primary input[type=\"radio\"]:indeterminate + label::before {\r\n    background-color : #428BCA;\r\n    border-color     : #428BCA;\n}\ninput.labelauty:checked:not([disabled]) + label:hover {\r\n    background-color : #4FC1E9;\n}\n.radio,\r\n.checkbox {\r\n    display       : block;\r\n    min-height    : 0;\r\n    margin-top    : 10px;\r\n    margin-bottom : 10px;\n}\n.radio.radio-inline {\r\n    margin-left : 23px;\n}\r\n/*pretty checkable*/\n.test_radio {\r\n    display : block;\n}\n.awesomeradio_grid_sep {\r\n    border-right : 1px solid #ccc;\n}\n@media screen and (max-width : 767px) {\n.awesomeradio_grid_sep {\r\n        border-right : 0;\n}\n}\r\n/*search radio and checkbox code*/\n.searchable-container {\r\n    margin : 20px 0 0 0\n}\n.searchable-container label.btn-default.active {\r\n    background-color : #6699cc;\r\n    color            : #FFF\n}\n.searchable-container label.btn-default {\r\n    width      : 90%;\r\n    border     : 1px solid #dcdcdc;\r\n    margin     : 5px;\r\n    box-shadow : 5px 8px 8px 0 #ccc;\n}\n.searchable-container label .bizcontent {\r\n    width : 100%;\n}\n.searchable-container .btn-group {\r\n    width : 90%\n}\n.searchable-container .btn span.glyphicon {\r\n    opacity : 0;\n}\n.searchable-container .btn.active span.glyphicon {\r\n    opacity : 1;\n}\r\n", ""]);

/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "/*!\r\n * LABELAUTY jQuery Plugin Styles\r\n *\r\n * @file: jquery-labelauty.css\r\n * @author: Francisco Neves (@fntneves)\r\n * @site: www.francisconeves.com\r\n * @license: MIT License\r\n */\r\n\r\n/* Prevent text and blocks selection */\ninput.labelauty + label ::-moz-selection { background-color: rgba(255, 255, 255, 0);\n}\ninput.labelauty + label ::selection { background-color: rgba(255, 255, 255, 0);\n}\ninput.labelauty + label ::-moz-selection { background-color: rgba(255, 255, 255, 0);\n}\r\n\r\n/* Hide original checkboxes. They are ugly! */\ninput.labelauty { display: none !important;\n}\r\n\r\n/*\r\n * Let's style the input\r\n * Feel free to work with it as you wish!\r\n */\ninput.labelauty + label\r\n{\r\n\tdisplay: table;\r\n\tfont-size: 11px;\r\n\tpadding: 10px;\r\n\tbackground-color: #efefef;\r\n\tcolor: #b3b3b3;\r\n\tcursor: pointer;\r\n\r\n\tborder-radius: 3px 3px 3px 3px;\r\n\t-moz-border-radius: 3px 3px 3px 3px;\r\n\t-webkit-border-radius: 3px 3px 3px 3px;\r\n\r\n\r\n\ttransition: background-color 0.25s;\r\n\t-moz-transition: background-color 0.25s;\r\n\t-webkit-transition: background-color 0.25s;\r\n\t-o-transition: background-color 0.25s;\r\n\r\n\t-moz-user-select: none;\r\n\t-khtml-user-select: none;\r\n\t-webkit-user-select: none;\r\n\t-o-user-select: none;\n}\r\n\r\n/* Stylish text inside label */\ninput.labelauty + label > span.labelauty-unchecked,\r\ninput.labelauty + label > span.labelauty-checked\r\n{\r\n\tdisplay: inline-block;\r\n\tline-height: 16px;\r\n\tvertical-align: bottom;\n}\r\n\r\n/* Stylish icons inside label */\ninput.labelauty + label > span.labelauty-unchecked-image,\r\ninput.labelauty + label > span.labelauty-checked-image\r\n{\r\n\tdisplay: inline-block;\r\n\twidth: 16px;\r\n\theight: 16px;\r\n\tvertical-align: bottom;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: left center;\r\n\r\n\ttransition: background-image 0.5s linear;\r\n\t-moz-transition: background-image 0.5s linear;\r\n\t-webkit-transition: background-image 0.5s linear;\r\n\t-o-transition: background-image 0.5s linear;\n}\r\n\r\n/* When there's a label, add a little margin to the left */\ninput.labelauty + label > span.labelauty-unchecked-image + span.labelauty-unchecked,\r\ninput.labelauty + label > span.labelauty-checked-image + span.labelauty-checked\r\n{\r\n\tmargin-left: 7px;\n}\r\n\r\n/* When not Checked */\ninput.labelauty:not(:checked):not([disabled]) + label:hover\r\n{\r\n\tbackground-color: #eaeaea;\r\n\tcolor: #a7a7a7;\n}\ninput.labelauty:not(:checked) + label > span.labelauty-checked-image\r\n{\r\n\tdisplay: none;\n}\ninput.labelauty:not(:checked) + label > span.labelauty-checked\r\n{\r\n\tdisplay: none;\n}\r\n\r\n/* When Checked */\ninput.labelauty:checked + label\r\n{\r\n\tbackground-color: #3498db;\r\n\tcolor: #ffffff;\n}\ninput.labelauty:checked:not([disabled]) + label:hover\r\n{\r\n\tbackground-color: #72c5fd;\n}\ninput.labelauty:checked + label > span.labelauty-unchecked-image\r\n{\r\n\tdisplay: none;\n}\ninput.labelauty:checked + label > span.labelauty-unchecked\r\n{\r\n\tdisplay: none;\n}\ninput.labelauty:checked + label > span.labelauty-checked\r\n{\r\n\tdisplay: inline-block;\n}\ninput.labelauty.no-label:checked + label > span.labelauty-checked\r\n{\r\n\tdisplay: block;\n}\r\n\r\n/* When Disabled */\ninput.labelauty[disabled] + label\r\n{\r\n\topacity: 0.5;\n}\r\n\r\n/* Add a background to (un)checked images */\ninput.labelauty + label > span.labelauty-unchecked-image\r\n{\r\n\tbackground-image: url( /images/input-unchecked.png );\n}\ninput.labelauty + label > span.labelauty-checked-image\r\n{\r\n\tbackground-image: url( /images/input-checked.png );\n}\r\n", ""]);

/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.checkbox {\n  padding-left: 20px;\n}\n.checkbox label {\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  padding-left: 5px;\n}\n.checkbox label::before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  width: 17px;\n  height: 17px;\n  left: 0;\n  margin-left: -20px;\n  border: 1px solid #cccccc;\n  border-radius: 3px;\n  background-color: #fff;\n  transition: border 0.15s ease-in-out, color 0.15s ease-in-out;\n}\n.checkbox label::after {\n  display: inline-block;\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  left: 0;\n  top: 0;\n  margin-left: -20px;\n  padding-left: 3px;\n  padding-top: 1px;\n  font-size: 11px;\n  color: #555555;\n}\n.checkbox input[type=\"checkbox\"],\n.checkbox input[type=\"radio\"] {\n  opacity: 0;\n  z-index: 1;\n}\n.checkbox input[type=\"checkbox\"]:focus + label::before,\n.checkbox input[type=\"radio\"]:focus + label::before {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.checkbox input[type=\"checkbox\"]:checked + label::after,\n.checkbox input[type=\"radio\"]:checked + label::after {\n  font-family: \"FontAwesome\";\n  content: \"\\f00c\";\n}\n.checkbox input[type=\"checkbox\"]:indeterminate + label::after,\n.checkbox input[type=\"radio\"]:indeterminate + label::after {\n  display: block;\n  content: \"\";\n  width: 10px;\n  height: 3px;\n  background-color: #555555;\n  border-radius: 2px;\n  margin-left: -16.5px;\n  margin-top: 7px;\n}\n.checkbox input[type=\"checkbox\"]:disabled + label,\n.checkbox input[type=\"radio\"]:disabled + label {\n  opacity: 0.65;\n}\n.checkbox input[type=\"checkbox\"]:disabled + label::before,\n.checkbox input[type=\"radio\"]:disabled + label::before {\n  background-color: #eeeeee;\n  cursor: not-allowed;\n}\n.checkbox.checkbox-circle label::before {\n  border-radius: 50%;\n}\n.checkbox.checkbox-inline {\n  margin-top: 0;\n}\n.checkbox-primary input[type=\"checkbox\"]:checked + label::before,\n.checkbox-primary input[type=\"radio\"]:checked + label::before {\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.checkbox-primary input[type=\"checkbox\"]:checked + label::after,\n.checkbox-primary input[type=\"radio\"]:checked + label::after {\n  color: #fff;\n}\n.checkbox-danger input[type=\"checkbox\"]:checked + label::before,\n.checkbox-danger input[type=\"radio\"]:checked + label::before {\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n.checkbox-danger input[type=\"checkbox\"]:checked + label::after,\n.checkbox-danger input[type=\"radio\"]:checked + label::after {\n  color: #fff;\n}\n.checkbox-info input[type=\"checkbox\"]:checked + label::before,\n.checkbox-info input[type=\"radio\"]:checked + label::before {\n  background-color: #5bc0de;\n  border-color: #5bc0de;\n}\n.checkbox-info input[type=\"checkbox\"]:checked + label::after,\n.checkbox-info input[type=\"radio\"]:checked + label::after {\n  color: #fff;\n}\n.checkbox-warning input[type=\"checkbox\"]:checked + label::before,\n.checkbox-warning input[type=\"radio\"]:checked + label::before {\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n.checkbox-warning input[type=\"checkbox\"]:checked + label::after,\n.checkbox-warning input[type=\"radio\"]:checked + label::after {\n  color: #fff;\n}\n.checkbox-success input[type=\"checkbox\"]:checked + label::before,\n.checkbox-success input[type=\"radio\"]:checked + label::before {\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n}\n.checkbox-success input[type=\"checkbox\"]:checked + label::after,\n.checkbox-success input[type=\"radio\"]:checked + label::after {\n  color: #fff;\n}\n.checkbox-primary input[type=\"checkbox\"]:indeterminate + label::before,\n.checkbox-primary input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.checkbox-primary input[type=\"checkbox\"]:indeterminate + label::after,\n.checkbox-primary input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff;\n}\n.checkbox-danger input[type=\"checkbox\"]:indeterminate + label::before,\n.checkbox-danger input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n.checkbox-danger input[type=\"checkbox\"]:indeterminate + label::after,\n.checkbox-danger input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff;\n}\n.checkbox-info input[type=\"checkbox\"]:indeterminate + label::before,\n.checkbox-info input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #5bc0de;\n  border-color: #5bc0de;\n}\n.checkbox-info input[type=\"checkbox\"]:indeterminate + label::after,\n.checkbox-info input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff;\n}\n.checkbox-warning input[type=\"checkbox\"]:indeterminate + label::before,\n.checkbox-warning input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n.checkbox-warning input[type=\"checkbox\"]:indeterminate + label::after,\n.checkbox-warning input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff;\n}\n.checkbox-success input[type=\"checkbox\"]:indeterminate + label::before,\n.checkbox-success input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n}\n.checkbox-success input[type=\"checkbox\"]:indeterminate + label::after,\n.checkbox-success input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff;\n}\n.radio {\n  padding-left: 20px;\n}\n.radio label {\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  padding-left: 5px;\n}\n.radio label::before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  width: 17px;\n  height: 17px;\n  left: 0;\n  margin-left: -20px;\n  border: 1px solid #cccccc;\n  border-radius: 50%;\n  background-color: #fff;\n  transition: border 0.15s ease-in-out;\n}\n.radio label::after {\n  display: inline-block;\n  position: absolute;\n  content: \" \";\n  width: 11px;\n  height: 11px;\n  left: 3px;\n  top: 3px;\n  margin-left: -20px;\n  border-radius: 50%;\n  background-color: #555555;\n  -webkit-transform: scale(0, 0);\n  transform: scale(0, 0);\n  transition: -webkit-transform 0.1s cubic-bezier(0.8, -0.33, 0.2, 1.33);\n  transition: transform 0.1s cubic-bezier(0.8, -0.33, 0.2, 1.33);\n  transition: transform 0.1s cubic-bezier(0.8, -0.33, 0.2, 1.33), -webkit-transform 0.1s cubic-bezier(0.8, -0.33, 0.2, 1.33);\n}\n.radio input[type=\"radio\"] {\n  opacity: 0;\n  z-index: 1;\n}\n.radio input[type=\"radio\"]:focus + label::before {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.radio input[type=\"radio\"]:checked + label::after {\n  -webkit-transform: scale(1, 1);\n  transform: scale(1, 1);\n}\n.radio input[type=\"radio\"]:disabled + label {\n  opacity: 0.65;\n}\n.radio input[type=\"radio\"]:disabled + label::before {\n  cursor: not-allowed;\n}\n.radio.radio-inline {\n  margin-top: 0;\n}\n.radio-primary input[type=\"radio\"] + label::after {\n  background-color: #337ab7;\n}\n.radio-primary input[type=\"radio\"]:checked + label::before {\n  border-color: #337ab7;\n}\n.radio-primary input[type=\"radio\"]:checked + label::after {\n  background-color: #337ab7;\n}\n.radio-danger input[type=\"radio\"] + label::after {\n  background-color: #d9534f;\n}\n.radio-danger input[type=\"radio\"]:checked + label::before {\n  border-color: #d9534f;\n}\n.radio-danger input[type=\"radio\"]:checked + label::after {\n  background-color: #d9534f;\n}\n.radio-info input[type=\"radio\"] + label::after {\n  background-color: #5bc0de;\n}\n.radio-info input[type=\"radio\"]:checked + label::before {\n  border-color: #5bc0de;\n}\n.radio-info input[type=\"radio\"]:checked + label::after {\n  background-color: #5bc0de;\n}\n.radio-warning input[type=\"radio\"] + label::after {\n  background-color: #f0ad4e;\n}\n.radio-warning input[type=\"radio\"]:checked + label::before {\n  border-color: #f0ad4e;\n}\n.radio-warning input[type=\"radio\"]:checked + label::after {\n  background-color: #f0ad4e;\n}\n.radio-success input[type=\"radio\"] + label::after {\n  background-color: #5cb85c;\n}\n.radio-success input[type=\"radio\"]:checked + label::before {\n  border-color: #5cb85c;\n}\n.radio-success input[type=\"radio\"]:checked + label::after {\n  background-color: #5cb85c;\n}\ninput[type=\"checkbox\"].styled:checked + label:after,\ninput[type=\"radio\"].styled:checked + label:after {\n  font-family: 'FontAwesome';\n  content: \"\\f00c\";\n}\ninput[type=\"checkbox\"] .styled:checked + label::before,\ninput[type=\"radio\"] .styled:checked + label::before {\n  color: #fff;\n}\ninput[type=\"checkbox\"] .styled:checked + label::after,\ninput[type=\"radio\"] .styled:checked + label::after {\n  color: #fff;\n}\n", ""]);

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.clearfix:before,.clearfix:after{content:\"\";display:table\n}\n.clearfix:after{clear:both\n}\n.clearfix{*zoom:1\n}\n.prettycheckbox,.prettyradio{display:inline-block;padding:0;margin:0\n}\n.prettycheckbox>a,.prettyradio>a{height:30px;width:30px;display:block;float:left;cursor:pointer;margin:0;background:url("+__webpack_require__(780)+")\n}\n.prettycheckbox>a:focus,.prettyradio>a:focus{outline:0 none\n}\n.prettycheckbox label,.prettyradio label{display:block;float:left;margin:6px 5px;cursor:pointer\n}\n.prettycheckbox a.disabled,.prettycheckbox label.disabled,.prettyradio a.disabled,.prettyradio label.disabled{cursor:not-allowed\n}\n.prettycheckbox>a{background-position:0 0\n}\n.prettycheckbox>a:focus{background-position:-30px 0\n}\n.prettycheckbox>a.checked{background-position:-60px 0\n}\n.prettycheckbox>a.checked:focus{background-position:-90px 0\n}\n.prettycheckbox>a.checked.disabled{background-position:-150px 0\n}\n.prettycheckbox>a.disabled{background-position:-120px 0\n}\n.prettyradio>a{background-position:-180px 0\n}\n.prettyradio>a:focus{background-position:-210px 0\n}\n.prettyradio>a.checked{background-position:-240px 0\n}\n.prettyradio>a.checked:focus{background-position:-270px 0\n}\n.prettyradio>a.checked.disabled{background-position:-330px 0\n}\n.prettyradio>a.disabled{background-position:-300px 0\n}\n", ""]);

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: 1: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: Syntax error: \"(\" unexpected\n\n    at Promise.all.then.arr (/home/vagrant/Sites/vue_workflows/laravel/node_modules/execa/index.js:201:11)\n    at process._tickCallback (internal/process/next_tick.js:109:7)");

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: 1: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: Syntax error: \"(\" unexpected\n\n    at Promise.all.then.arr (/home/vagrant/Sites/vue_workflows/laravel/node_modules/execa/index.js:201:11)\n    at process._tickCallback (internal/process/next_tick.js:109:7)");

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: 1: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: Syntax error: \"(\" unexpected\n\n    at Promise.all.then.arr (/home/vagrant/Sites/vue_workflows/laravel/node_modules/execa/index.js:201:11)\n    at process._tickCallback (internal/process/next_tick.js:109:7)");

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: 1: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: Syntax error: \"(\" unexpected\n\n    at Promise.all.then.arr (/home/vagrant/Sites/vue_workflows/laravel/node_modules/execa/index.js:201:11)\n    at process._tickCallback (internal/process/next_tick.js:109:7)");

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: 1: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: Syntax error: \"(\" unexpected\n\n    at Promise.all.then.arr (/home/vagrant/Sites/vue_workflows/laravel/node_modules/execa/index.js:201:11)\n    at process._tickCallback (internal/process/next_tick.js:109:7)");

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: 1: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: Syntax error: \"(\" unexpected\n\n    at Promise.all.then.arr (/home/vagrant/Sites/vue_workflows/laravel/node_modules/execa/index.js:201:11)\n    at process._tickCallback (internal/process/next_tick.js:109:7)");

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: 1: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: Syntax error: \"(\" unexpected\n\n    at Promise.all.then.arr (/home/vagrant/Sites/vue_workflows/laravel/node_modules/execa/index.js:201:11)\n    at process._tickCallback (internal/process/next_tick.js:109:7)");

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: 1: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: Syntax error: \"(\" unexpected\n\n    at Promise.all.then.arr (/home/vagrant/Sites/vue_workflows/laravel/node_modules/execa/index.js:201:11)\n    at process._tickCallback (internal/process/next_tick.js:109:7)");

/***/ }),

/***/ 874:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "panel "
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "box-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6 col-sm-6 awesomeradio_grid_sep"
  }, [_vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _vm._m(6), _vm._v(" "), _vm._m(7), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h4', [_vm._v("Checkboxes with indeterminate state")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "checkbox checkbox-primary"
  }, [_c('input', {
    staticClass: "styled",
    attrs: {
      "id": "indeterminateCheckbox",
      "type": "checkbox"
    },
    on: {
      "click": function($event) {
        _vm.changeState()
      }
    }
  }), _vm._v(" "), _c('label')])])])])]), _vm._v(" "), _vm._m(8)])])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
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
    staticClass: "fa fa-fw ti-arrow-circle-down"
  }), _vm._v(" iCheck - Checkbox Inputs\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "box-body"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_c('input', {
    staticClass: "square-blue",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  })]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "square-blue",
    attrs: {
      "type": "checkbox"
    }
  })]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "square-blue",
    attrs: {
      "type": "checkbox",
      "disabled": ""
    }
  })]), _vm._v(" "), _c('label', {
    staticClass: "m-l-10"
  }, [_vm._v("\n                                Square blue skin checkbox\n                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_c('input', {
    staticClass: "flat-red",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  })]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "flat-red",
    attrs: {
      "type": "checkbox"
    }
  })]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "flat-red",
    attrs: {
      "type": "checkbox",
      "disabled": ""
    }
  })]), _vm._v(" "), _c('label', {
    staticClass: "m-l-10"
  }, [_vm._v("\n                                Flat red skin checkbox\n                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_c('input', {
    staticClass: "minimal",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  })]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "minimal",
    attrs: {
      "type": "checkbox"
    }
  })]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "minimal",
    attrs: {
      "type": "checkbox",
      "disabled": ""
    }
  })]), _vm._v(" "), _c('label', {
    staticClass: "m-l-10"
  }, [_vm._v("\n                                Minimal skin checkbox\n                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_c('input', {
    staticClass: "minimal-red",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  })]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "minimal-red",
    attrs: {
      "type": "checkbox"
    }
  })]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "minimal-red",
    attrs: {
      "type": "checkbox",
      "disabled": ""
    }
  })]), _vm._v(" "), _c('label', {
    staticClass: "m-l-10"
  }, [_vm._v("\n                                Minimal red skin checkbox\n                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_c('input', {
    staticClass: "minimal-green",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  })]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "minimal-green",
    attrs: {
      "type": "checkbox"
    }
  })]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "minimal-green",
    attrs: {
      "type": "checkbox",
      "disabled": ""
    }
  })]), _vm._v(" "), _c('label', {
    staticClass: "m-l-10"
  }, [_vm._v("\n                                Minimal green skin checkbox\n                            ")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-basketball"
  }), _vm._v(" iCheck - Radio Inputs\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_c('input', {
    staticClass: "square-blue",
    attrs: {
      "type": "radio",
      "name": "optionsRadios",
      "value": "option1",
      "checked": ""
    }
  })]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "square-blue",
    attrs: {
      "type": "radio",
      "name": "optionsRadios",
      "value": "option1"
    }
  })]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "square-blue",
    attrs: {
      "type": "radio",
      "name": "optionsRadios",
      "value": "option1",
      "disabled": ""
    }
  })]), _vm._v(" "), _c('label', {
    staticClass: "m-l-10"
  }, [_vm._v("\n                            Square blue skin radio\n                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_c('input', {
    staticClass: "flat-red",
    attrs: {
      "type": "radio",
      "name": "r3",
      "checked": ""
    }
  })]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "flat-red",
    attrs: {
      "type": "radio",
      "name": "r3"
    }
  })]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "flat-red",
    attrs: {
      "type": "radio",
      "name": "r3",
      "disabled": ""
    }
  })]), _vm._v(" "), _c('label', {
    staticClass: "m-l-10"
  }, [_vm._v("\n                            Flat red skin radio\n                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_c('input', {
    staticClass: "minimal",
    attrs: {
      "type": "radio",
      "name": "r1",
      "checked": ""
    }
  })]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "minimal",
    attrs: {
      "type": "radio",
      "name": "r1"
    }
  })]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "minimal",
    attrs: {
      "type": "radio",
      "name": "r1",
      "disabled": ""
    }
  })]), _vm._v(" "), _c('label', {
    staticClass: "m-l-10"
  }, [_vm._v("\n                            Minimal skin radio\n                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_c('input', {
    staticClass: "minimal-red",
    attrs: {
      "type": "radio",
      "name": "r2",
      "checked": ""
    }
  })]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "minimal-red",
    attrs: {
      "type": "radio",
      "name": "r2"
    }
  })]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "minimal-red",
    attrs: {
      "type": "radio",
      "name": "r2",
      "disabled": ""
    }
  })]), _vm._v(" "), _c('label', {
    staticClass: "m-l-10"
  }, [_vm._v("\n                            Minimal red skin radio\n                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_c('input', {
    staticClass: "minimal-green",
    attrs: {
      "type": "radio",
      "name": "r4",
      "checked": ""
    }
  })]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "minimal-green",
    attrs: {
      "type": "radio",
      "name": "r4"
    }
  })]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "minimal-green",
    attrs: {
      "type": "radio",
      "name": "r4",
      "disabled": ""
    }
  })]), _vm._v(" "), _c('label', {
    staticClass: "m-l-10"
  }, [_vm._v("\n                            Minimal green skin radio\n                        ")])])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
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
    staticClass: "fa fa-fw ti-check-box"
  }), _vm._v(" Multiple Select with Search Option\n                        ")]), _vm._v(" "), _c('span', {
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
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "search",
      "id": "search",
      "placeholder": "Search your options.."
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "searchable-container"
  }, [_c('div', {
    staticClass: "items col-xs-12 col-sm-4 col-md-4 col-lg-4"
  }, [_c('div', {
    staticClass: "info-block block-info clearfix"
  }, [_c('div', {
    staticClass: "square-box pull-left"
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-tags glyphicon-lg"
  })]), _vm._v(" "), _c('div', {
    staticClass: "btn-group bizmoduleselect",
    attrs: {
      "data-toggle": "buttons"
    }
  }, [_c('label', {
    staticClass: "btn btn-default"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "var_id[]",
      "value": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon glyphicon-ok glyphicon-lg"
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', [_vm._v("Coffee")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "items col-xs-12 col-sm-4 col-md-4 col-lg-4"
  }, [_c('div', {
    staticClass: "info-block block-info clearfix"
  }, [_c('div', {
    staticClass: "square-box pull-left"
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-tags glyphicon-lg"
  })]), _vm._v(" "), _c('div', {
    staticClass: "btn-group bizmoduleselect",
    attrs: {
      "data-toggle": "buttons"
    }
  }, [_c('label', {
    staticClass: "btn btn-default"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "var_id[]",
      "value": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon glyphicon-ok glyphicon-lg"
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', [_vm._v("Tea")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "items col-xs-12 col-sm-4 col-md-4 col-lg-4"
  }, [_c('div', {
    staticClass: "info-block block-info clearfix"
  }, [_c('div', {
    staticClass: "square-box pull-left"
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-tags glyphicon-lg"
  })]), _vm._v(" "), _c('div', {
    staticClass: "btn-group bizmoduleselect",
    attrs: {
      "data-toggle": "buttons"
    }
  }, [_c('label', {
    staticClass: "btn btn-default"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "var_id[]",
      "value": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon glyphicon-ok glyphicon-lg"
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', [_vm._v("Cool Drink")])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "searchable-container"
  }, [_c('div', {
    staticClass: "items col-xs-12 col-sm-4 col-md-4 col-lg-4"
  }, [_c('div', {
    staticClass: "info-block block-info clearfix"
  }, [_c('div', {
    staticClass: "square-box pull-left"
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-tags glyphicon-lg"
  })]), _vm._v(" "), _c('div', {
    staticClass: "btn-group bizmoduleselect",
    attrs: {
      "data-toggle": "buttons"
    }
  }, [_c('label', {
    staticClass: "btn btn-default"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "var_id[]",
      "value": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon glyphicon-ok glyphicon-lg"
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', [_vm._v("Burger")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "items col-xs-12 col-sm-4 col-md-4 col-lg-4"
  }, [_c('div', {
    staticClass: "info-block block-info clearfix"
  }, [_c('div', {
    staticClass: "square-box pull-left"
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-tags glyphicon-lg"
  })]), _vm._v(" "), _c('div', {
    staticClass: "btn-group bizmoduleselect",
    attrs: {
      "data-toggle": "buttons"
    }
  }, [_c('label', {
    staticClass: "btn btn-default"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "var_id[]",
      "value": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon glyphicon-ok glyphicon-lg"
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', [_vm._v("Pizza")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "items col-xs-12 col-sm-4 col-md-4 col-lg-4"
  }, [_c('div', {
    staticClass: "info-block block-info clearfix"
  }, [_c('div', {
    staticClass: "square-box pull-left"
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-tags glyphicon-lg"
  })]), _vm._v(" "), _c('div', {
    staticClass: "btn-group bizmoduleselect",
    attrs: {
      "data-toggle": "buttons"
    }
  }, [_c('label', {
    staticClass: "btn btn-default"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "var_id[]",
      "value": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon glyphicon-ok glyphicon-lg"
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', [_vm._v("Cookies")])])])])])])])])])])])])
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
    staticClass: "fa fa-fw ti-check-box"
  }), _vm._v(" Labelauty Radio and Checkboxes\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body",
    attrs: {
      "id": "lby-content"
    }
  }, [_c('div', {
    staticClass: "row",
    attrs: {
      "id": "lby-demo"
    }
  }, [_c('div', {
    staticClass: "col-lg-6 col-md-12 col-sm-6"
  }, [_c('h4', [_vm._v("Labeled Checkboxes")]), _vm._v(" "), _c('input', {
    staticClass: "to-labelauty synch-icon1",
    attrs: {
      "data-labelauty": "Unselected|Australia",
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "to-labelauty terms-icon",
    attrs: {
      "type": "checkbox",
      "data-labelauty": "Unselected|Selected"
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "to-labelauty synch-icon",
    attrs: {
      "type": "checkbox",
      "data-labelauty": "I am disabled!",
      "disabled": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-6 col-md-12 col-sm-6"
  }, [_c('h4', [_vm._v("Non-labeled Check")]), _vm._v(" "), _c('input', {
    staticClass: "to-labelauty-icon check-icon",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "to-labelauty-icon check-icon",
    attrs: {
      "type": "checkbox"
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "to-labelauty-icon check-icon",
    attrs: {
      "type": "checkbox",
      "disabled": "",
      "checked": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-6 col-md-12 col-sm-6"
  }, [_c('h4', [_vm._v("Labeled Radio Buttons")]), _vm._v(" "), _c('input', {
    staticClass: "to-labelauty synch-icon2",
    attrs: {
      "type": "radio",
      "name": "rd2",
      "data-labelauty": "Unselected|USA"
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "to-labelauty terms-icon",
    attrs: {
      "type": "radio",
      "name": "rd2",
      "data-labelauty": "Unselected|Selected",
      "checked": ""
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "to-labelauty synch-icon",
    attrs: {
      "type": "radio",
      "name": "rd3",
      "disabled": "",
      "checked": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-6 col-md-12 col-sm-6"
  }, [_c('h4', [_vm._v("Non-labeled Radio")]), _vm._v(" "), _c('input', {
    staticClass: "to-labelauty-icon",
    attrs: {
      "type": "radio",
      "name": "rd4",
      "checked": ""
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "to-labelauty-icon",
    attrs: {
      "type": "radio",
      "name": "rd4"
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "to-labelauty-icon",
    attrs: {
      "type": "radio",
      "name": "rd3",
      "disabled": "",
      "checked": ""
    }
  })])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-check"
  }), _vm._v(" jQuery prettyCheckable\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "Test1"
    }
  }, [_vm._v("Right positioned label")]), _vm._v(" "), _c('input', {
    staticClass: "test1",
    attrs: {
      "type": "checkbox",
      "value": "1",
      "id": "Test1",
      "name": "Test1",
      "checked": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    staticClass: "TestDisabled",
    attrs: {
      "type": "checkbox",
      "value": "3",
      "id": "TestDisabled",
      "name": "TestDisabled",
      "disabled": "",
      "data-label": "Disabled Checkbox"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    staticClass: "test2",
    attrs: {
      "type": "checkbox",
      "value": "2",
      "id": "Test2",
      "name": "Test2",
      "data-label": "Left positioned label",
      "data-labelPosition": "left"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "test_radio"
  }, [_vm._v("Radios! ")]), _vm._v(" "), _c('input', {
    staticClass: "test3",
    attrs: {
      "type": "radio",
      "value": "1",
      "id": "Test3_0",
      "name": "Test3",
      "data-label": "Yes",
      "checked": "",
      "data-customclass": "margin-right"
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "test4",
    attrs: {
      "type": "radio",
      "value": "2",
      "id": "Test3_1",
      "name": "Test3",
      "data-label": "No"
    }
  })])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-arrow-circle-up"
  }), _vm._v(" Awesome Radio & Checkbox\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h4', [_vm._v("Checkboxes")]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4 col-sm-6"
  }, [_c('div', {
    staticClass: "checkbox checkbox-default"
  }, [_c('input', {
    staticClass: "styled",
    attrs: {
      "id": "checkbox1",
      "type": "checkbox"
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "checkbox1"
    }
  }, [_vm._v("\n                                                     Default\n                                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4 col-sm-6"
  }, [_c('div', {
    staticClass: "checkbox checkbox-primary"
  }, [_c('input', {
    staticClass: "styled",
    attrs: {
      "id": "checkbox2",
      "type": "checkbox"
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "checkbox2"
    }
  }, [_vm._v("\n                                                     Primary\n                                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4 col-sm-6"
  }, [_c('div', {
    staticClass: "checkbox checkbox-success"
  }, [_c('input', {
    staticClass: "styled",
    attrs: {
      "id": "checkbox3",
      "type": "checkbox"
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "checkbox3"
    }
  }, [_vm._v("\n                                                     Success\n                                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4 col-sm-6"
  }, [_c('div', {
    staticClass: "checkbox checkbox-info"
  }, [_c('input', {
    staticClass: "styled",
    attrs: {
      "id": "checkbox4",
      "type": "checkbox"
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "checkbox4"
    }
  }, [_vm._v("\n                                                     Info\n                                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4 col-sm-6"
  }, [_c('div', {
    staticClass: "checkbox checkbox-warning"
  }, [_c('input', {
    staticClass: "styled",
    attrs: {
      "id": "checkbox5",
      "type": "checkbox"
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "checkbox5"
    }
  }, [_vm._v("\n                                                     Warning\n                                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4 col-sm-6"
  }, [_c('div', {
    staticClass: "checkbox checkbox-danger"
  }, [_c('input', {
    staticClass: "styled",
    attrs: {
      "id": "checkbox6",
      "type": "checkbox"
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "checkbox6"
    }
  }, [_vm._v("\n                                                     Danger\n                                                ")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h4', [_vm._v("Inline checkboxes")]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4 col-sm-6"
  }, [_c('div', {
    staticClass: "checkbox checkbox-inline m-l-18"
  }, [_c('input', {
    staticClass: "styled",
    attrs: {
      "type": "checkbox",
      "id": "inlineCheckbox1",
      "value": "option1"
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "inlineCheckbox1"
    }
  }, [_vm._v("  Inline One ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4 col-sm-6"
  }, [_c('div', {
    staticClass: "checkbox checkbox-inline m-l-18"
  }, [_c('input', {
    staticClass: "styled",
    attrs: {
      "type": "checkbox",
      "id": "inlineCheckbox2",
      "value": "option1"
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "inlineCheckbox2"
    }
  }, [_vm._v("  Inline Two ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4 col-sm-6"
  }, [_c('div', {
    staticClass: "checkbox checkbox-inline m-l-18"
  }, [_c('input', {
    staticClass: "styled",
    attrs: {
      "type": "checkbox",
      "id": "inlineCheckbox3",
      "value": "option1"
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "inlineCheckbox3"
    }
  }, [_vm._v("  Inline Three ")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h4', [_vm._v("Circled checkboxes")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "checkbox checkbox-circle"
  }, [_c('input', {
    staticClass: "styled",
    attrs: {
      "id": "checkbox7",
      "type": "checkbox"
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "checkbox7"
    }
  }, [_vm._v("\n                                                     Simply Rounded\n                                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "checkbox checkbox-info checkbox-circle"
  }, [_c('input', {
    staticClass: "styled",
    attrs: {
      "id": "checkbox8",
      "type": "checkbox"
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "checkbox8"
    }
  }, [_vm._v("\n                                                     Me too\n                                                ")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h4', [_vm._v("\n                                                Disabled\n                                            ")]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4 col-sm-6"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_c('input', {
    staticClass: "styled",
    attrs: {
      "id": "checkbox9",
      "type": "checkbox",
      "disabled": ""
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "checkbox9"
    }
  }, [_vm._v("\n                                                     Can't check\n                                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4 col-sm-6"
  }, [_c('div', {
    staticClass: "checkbox checkbox-success"
  }, [_c('input', {
    staticClass: "styled styled",
    attrs: {
      "id": "checkbox10",
      "type": "checkbox",
      "disabled": "",
      "checked": ""
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "checkbox10"
    }
  }, [_vm._v("\n                                                     This too\n                                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4 col-sm-6"
  }, [_c('div', {
    staticClass: "checkbox checkbox-warning checkbox-circle"
  }, [_c('input', {
    staticClass: "styled",
    attrs: {
      "id": "checkbox11",
      "type": "checkbox",
      "disabled": "",
      "checked": ""
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "checkbox11"
    }
  }, [_vm._v("\n                                                     And this\n                                                ")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-6 col-sm-6"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h4', [_vm._v("Radios")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "radio"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "radio1",
      "id": "radio1",
      "value": "option1"
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "radio1"
    }
  }, [_vm._v("\n                                                     Small\n                                                ")])]), _vm._v(" "), _c('div', {
    staticClass: "radio"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "radio1",
      "id": "radio2",
      "value": "option2"
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "radio2"
    }
  }, [_vm._v("\n                                                     Big\n                                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "radio radio-danger"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "radio2",
      "id": "radio3",
      "value": "option1"
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "radio3"
    }
  }, [_vm._v("\n                                                     Next\n                                                ")])]), _vm._v(" "), _c('div', {
    staticClass: "radio radio-danger"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "radio2",
      "id": "radio4",
      "value": "option2"
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "radio4"
    }
  }, [_vm._v("\n                                                     One\n                                                ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h4', [_vm._v("\n                                                Disabled state\n                                            ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "radio radio-danger"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "radio3",
      "id": "radio5",
      "value": "option1",
      "disabled": ""
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "radio5"
    }
  }, [_vm._v("\n                                                     Next\n                                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "radio"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "radio3",
      "id": "radio6",
      "value": "option2",
      "checked": "",
      "disabled": ""
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "radio6"
    }
  }, [_vm._v("\n                                                     One\n                                                ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h4', [_vm._v("Inline radios")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "radio radio-info radio-inline m-l-18"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "inlineRadio1",
      "value": "option1",
      "name": "radioInline"
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "inlineRadio1"
    }
  }, [_vm._v("  Inline One ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "radio radio-inline m-l-18"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "inlineRadio2",
      "value": "option2",
      "name": "radioInline"
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "inlineRadio2"
    }
  }, [_vm._v("  Inline Two ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h4', [_vm._v("\n                                                Radio As Checkboxes\n                                            ")]), _vm._v(" "), _c('div', {
    staticClass: "checkbox checkbox-default"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "radio4",
      "id": "radio7",
      "value": "option1",
      "checked": ""
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "radio7"
    }
  }, [_vm._v("\n                                                 Default\n                                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "checkbox checkbox-success"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "radio4",
      "id": "radio8",
      "value": "option2"
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "radio8"
    }
  }, [_vm._v("\n                                                 "), _c('span', [_vm._v("Success")])])]), _vm._v(" "), _c('div', {
    staticClass: "checkbox checkbox-danger"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "radio4",
      "id": "radio9",
      "value": "option3"
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "radio9"
    }
  }, [_vm._v("\n                                                 "), _c('span', [_vm._v("Danger")])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e65421c6", module.exports)
  }
}

/***/ })

});